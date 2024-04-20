type Props = {
  children: string
}
export default function Style(props: Props) {
  return <style dangerouslySetInnerHTML={{ __html: props.children }} />
}
