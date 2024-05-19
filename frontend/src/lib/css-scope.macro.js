const { createMacro } = require('babel-plugin-macros')
const { relative } = require('path')

module.exports = createMacro(cssScopes)

function cssScopes({ references, state, babel }) {
  const t = babel.types
  const { default: defaultImport = [] } = references

  defaultImport.forEach((referencePath) => {
    const func = referencePath.getFunctionParent()
    const functionScopeId = func.scope.uid

    if (!state.cssScopes) state.cssScopes = new Map()
    if (!state.cssScopes.has(functionScopeId)) {
      const filename = state.file.opts.filename || ''
      const cleanFilename = relative(process.cwd(), filename).replaceAll(
        /[\/\.\(\)]/g,
        '-'
      )
      const uid = func.scope.generateUidIdentifier('css')
      state.cssScopes.set(functionScopeId, '' + cleanFilename + uid.name)
    }

    const cssScope = state.cssScopes.get(functionScopeId)
    if (referencePath.parentPath.type === 'CallExpression') {
      const args = referencePath.parentPath.node.arguments
      const newBlock = t.memberExpression(
        t.arrayExpression([
          t.stringLiteral(cssScope),
          ...args.map((arg) => arg),
        ]),
        t.identifier('join(" ")')
      )
      referencePath.parentPath.replaceWith(
        t.expressionStatement(newBlock, false)
      )
    } else if (referencePath.parentPath.type === 'TaggedTemplateExpression') {
      const template = referencePath.parentPath.node.quasi
      const hui = t.memberExpression(
        t.arrayExpression([t.stringLiteral(cssScope), template]),
        t.identifier('join(" ")')
      )
      referencePath.parentPath.replaceWith(hui)
    } else if (referencePath.node.type === 'Identifier') {
      referencePath.replaceWith(t.stringLiteral(cssScope))
    } else {
      throw new Error(referencePath.node.type)
    }
  })
}
