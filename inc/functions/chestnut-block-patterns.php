<?php
add_action( 'init', 'register_block_patterns' );
add_action( 'init', 'register_block_pattern_categories' );
function register_block_patterns() {
    if ( function_exists( 'register_block_pattern' ) ) {
        $cover_content = get_pattern_content( 'template-parts/patterns/cover' );
        /**
         * Cover Pattern
         */
        register_block_pattern(
            'chestnut/cover',
            [
                'title' => __( 'Chestnut Cover', 'chestnut' ),
                'description' => __( 'Chestnut Cover Block with image and text', 'chestnut' ),
                'categories' => [ 'cover' ],
                'content' => $cover_content,
            ]
        );
        /**
         * Two Column Pattern
         */
        $two_columns_content = get_pattern_content( 'template-parts/patterns/two-columns' );
        register_block_pattern(
            'chestnut/two-columns',
            [
                'title' => __( 'Chestnut Two Column', 'chestnut' ),
                'description' => __( 'Chestnut two columns with heading and text', 'chestnut' ),
                'categories' => [ 'columns' ],
                'content' => $two_columns_content,
            ]
        );
        /**
         * Header
         */
        $header_default_content = get_pattern_content( 'template-parts/patterns/header-default' );
        register_block_pattern(
            'header/header-default',
            [
                'title' => __( 'Header default', 'chestnut' ),
                'description' => __( 'Header default', 'chestnut' ),
                'categories' => [ 'header' ],
                'content' => $header_default_content,
            ]
        );
        $header_v1_content = get_pattern_content( 'template-parts/patterns/header-v1' );
        register_block_pattern(
            'header/header-v1',
            [
                'title' => __( 'Header V1', 'chestnut' ),
                'description' => __( 'Header V1', 'chestnut' ),
                'categories' => [ 'header' ],
                'content' => $header_v1_content,
            ]
        );
		/**
		 * Banner
		 */
		$banner_v1_content = get_pattern_content( 'template-parts/patterns/banners/banenr-v1' );
		register_block_pattern(
			'banner/banner-v1',
			[
				'title' => __( 'Banner V1', 'chestnut' ),
				'description' => __( 'Banner V1', 'chestnut' ),
				'categories' => [ 'banner' ],
				'content' => $banner_v1_content,
			]
		);
    }
}

function get_pattern_content( $template_path ) {
    ob_start();
    get_template_part( $template_path );
    $pattern_content = ob_get_contents();
    ob_end_clean();
    return $pattern_content;
}

function register_block_pattern_categories() {

    $pattern_categories = [
        'cover' => __( 'Cover', 'chestnut' ),
        'columns' => __( 'Columns', 'chestnut' ),
        'header' => __( 'Header', 'chestnut' ),
        'banner' => __( 'Banner', 'chestnut' ),
    ];

    if ( ! empty( $pattern_categories ) && is_array( $pattern_categories ) ) {
        foreach ( $pattern_categories as $pattern_category => $pattern_category_label ) {
            register_block_pattern_category(
                $pattern_category,
                [ 'label' => $pattern_category_label ]
            );
        }
    }
}