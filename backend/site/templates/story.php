<?php

$kirby->response()->json();

$content = [];
$tempListPart = '';
foreach($page->main_content()->toBlocks() as $block):
  $type = (string)$block->type();
  switch ($type) {
    case "markdown":
      $content[] = array(
        'type' => 'markdown',
        'markdown' => (string)$block->text()
      );
    break;
    case "heading":
      $level = (string)$block->level() === "h3" ? 3 : 2;
      $content[] = array(
        'type' => 'heading',
        'level' => $level,
        'text' => (string)$block->text()
      );
    break;
    case "image":
      $image = $block->image()->toFile();
      if ($image === null) break;
      $content[] = array(
        'type' => 'image',
        'url' => (string)$image->url(),
        'caption' => (string)$block->caption(),
        'alt' => (string)$block->alt()
      );
    break;
    case 'ul':
      if ($block->hasNext() && $block->next()->type() === 'ul') {
        $tempListPart .= $block->html();
        break;
      }

      $content[] = array(
        'type' => 'html',
        'html' => $tempListPart . $block->html()
      );
      $tempListPart = '';
    break;
    default:
      $content[] = array(
        'type' => "html",
        'html' => (string)$block->text()
      );
    break;
  }
  
endforeach;

$json = array(
  'title' => (string)$page->title(),
  'image' => getImageURL($page->cover()),
  'teaserText' => (string)$page->teaser_text(),
  'content' => $content
);

echo json_encode($json);
