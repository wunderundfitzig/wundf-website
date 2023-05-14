<?php

Kirby::plugin('errnesto/headless-blocks', [
    'fieldMethods' => [
        'toHeadlessBlocks' => function ($field) {
            $model = $field->parent();
            $blocks = $field->toBlocks()->toArray();

            if (class_uses($model, 'Kirby\Cms\HasFiles')) {
                $blocks = array_map(function ($block) use ($model) {
                    if ($block["type"] == "image") {
                        $imageName = $block["content"]["image"][0];
                        if ($file = $model->file($imageName)) {
                            $block["content"] = [
                                "src" => $file->id(),
                                "width" => $file->width(),
                                "height" => $file->height()
                            ];
                        }
                    }
                    return $block;
                }, $blocks);
            }
            return $blocks;
        }
    ]
]);
