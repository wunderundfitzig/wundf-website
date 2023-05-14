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
                        $imageFile = $model->file($imageName);

                        if ($imageFile) {
                            $block["content"]["image"] = [
                                "src" => $imageFile->id(),
                                "width" => $imageFile->width(),
                                "height" => $imageFile->height()
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
