<?php

Kirby::plugin('headless-blocks', [
    'fieldMethods' => [
        'toHeadlessBlocks' => function ($field) {
            $blocks = $field->toBlocks();
            return $blocks;
        }
    ]
]);
