<!--

A block snippet has access to the following variables
in addition to the typical $page, $site, $kirby, $pages variables:

$block:
The entire block object

$content:
The main content of the block is a field object
and has full access to all field methods

$attrs:
An object of all available attributes.
All attributes are field objects and have
full access to all field methods. You can
fetch non existing attributes without risk
and check with isEmpty or isNotEmpty if they
exist or have some content

$prev:
The previous block object if available

$next:
The next block object if availabel

-->
<table>
    <tr>
        <?php foreach ($attrs->columns()->value() as $column): ?>
        <th>
            <?= $column['label'] ?>
        </th>
        <?php endforeach ?>
    </tr>
    <?php foreach ($attrs->rows()->value() as $row): ?>
    <tr>
        <?php foreach ($attrs->columns()->value() as $index => $column): ?>
        <td>
            <?= $row[$index] ?>
        </td>
        <?php endforeach ?>
    </tr>
    <?php endforeach ?>
</table>
