<?php
add_filter( "block_categories", "add_block_categories" );
function add_block_categories( $categories ) {
    $category_slugs = wp_list_pluck( $categories, 'slug' );
    return in_array( 'chestnut', $category_slugs, true ) ? $categories : array_merge(
        $categories,
        [
            [
                'slug'  => 'chestnut',
                'title' => __( 'Chestnut Blocks', 'chestnut' ),
                'icon'  => 'table-row-after',
            ],
        ]
    );
}