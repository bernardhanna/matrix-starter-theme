<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Post Types
    |--------------------------------------------------------------------------
    |
    | Post types to be registered with Extended CPTs
    | <https://github.com/johnbillion/extended-cpts>
    |
    */

    'post_types' => [
        'seed' => [
            'menu_icon' => 'dashicons-star-filled',
            'supports' => ['title', 'editor', 'author', 'revisions', 'thumbnail'],
            'show_in_rest' => true,
            'names' => [
                'singular' => __('Seed', 'matrix'),
                'plural' => __('Seeds', 'matrix'),
                'slug' => 'seeds',
            ]
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Taxonomies
    |--------------------------------------------------------------------------
    |
    | Taxonomies to be registered with Extended CPTs library
    | <https://github.com/johnbillion/extended-cpts>
    |
    */

    'taxonomies' => [
        'seed_category' => [
            'post_types' => ['seed'],
            'meta_box' => 'radio',
            'names' => [
                'singular' => __('Category', 'matrix'),
                'plural' => __('Categories', 'matrix'),
            ],
        ],
    ],
];
