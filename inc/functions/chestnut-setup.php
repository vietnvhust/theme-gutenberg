<?php
add_action("after_setup_theme", "setup_theme");
function setup_theme()
{
    add_theme_support('title-tag');

    add_theme_support(
        'custom-logo',
        [
            'header-text' => [
                'site-title',
                'site-description',
            ],
            'height' => 100,
            'width' => 400,
            'flex-height' => true,
            'flex-width' => true,
        ]
    );

    add_theme_support(
        'custom-background',
        [
            'default-color' => 'ffffff',
            'default-image' => '',
            'default-repeat' => 'no-repeat',
        ]
    );

    add_theme_support('post-thumbnails');

    add_theme_support('post-formats', array('aside', 'gallery'));

    add_image_size('featured-thumbnail', 350, 233, true);

    add_theme_support('customize-selective-refresh-widgets');

    add_theme_support('automatic-feed-links');

    add_theme_support(
        'html5',
        [
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
            'script',
            'style',
        ]
    );
    // wp-includes/css/dist/block-library/theme.min.css?ver=5.6.2
    add_theme_support('wp-block-styles');

    add_theme_support('align-wide');

    add_theme_support('editor-styles');

    add_editor_style('build/css/editor.css');

    remove_theme_support('core-block-patterns');

    global $content_width;
    if (!isset($content_width)) {
        $content_width = 1240;
    }
}