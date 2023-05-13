<?php

Kirby::plugin('errnesto/headless-blocks', [
    'fieldMethods' => [
        'toHeadlessBlocks' => function ($field) {
            $model = $field->parent();
            $blocks = $field->toBlocks()->toArray();

            if (class_uses($model, 'Kirby\Cms\HasFiles')) {
                array_walk_recursive($blocks, function (&$value, $key) use ($model) {
                    if (is_int($key) && is_string($value)) {
                        if($file = $model->file($value)) {
                            $value = $file->id();
                        }
                    }
                });
            }
            return $blocks;
        }
    ]
]);