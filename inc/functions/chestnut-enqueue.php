<?php 

add_action( "wp_enqueue_scripts", "register_styles" );
add_action( "wp_enqueue_scripts", "register_scripts" );
add_action( "enqueue_block_assets", "enqueue_editor_assets" );

function register_styles() {
	// Register styles.
	wp_register_style( 'style-css', get_stylesheet_uri(), [], filemtime( CHESTNUT_DIR_PATH . '/style.css' ), 'all' );
    wp_register_style( 'font-css', CHESTNUT_DIR_URI . '/build/library/fonts/font.css', [], filemtime( CHESTNUT_DIR_PATH . '/build/library/fonts/font.css' ), 'all' );
	wp_register_style( 'main-css', CHESTNUT_DIR_URI . '/build/css/main.css', [], filemtime( CHESTNUT_DIR_PATH . '/build/css/main.css' ), 'all' );
	// Enqueue Styles.
	wp_enqueue_style( 'style-css' );
	wp_enqueue_style( 'font-css' );
	wp_enqueue_style( 'main-css' );
}

function register_scripts() {
	// Register scripts.
	wp_register_script( 'main-js', CHESTNUT_DIR_URI . '/build/js/main.js', [], filemtime( CHESTNUT_DIR_PATH . '/build/js/main.js' ), true );
	// Enqueue Scripts.
	wp_enqueue_script( 'main-js' );
}

function enqueue_editor_assets() {
	$asset_config_file = sprintf( '%s/assets.php', CHESTNUT_DIR_PATH . '/build' );
	if ( ! file_exists( $asset_config_file ) ) {
		return;
	}
	$asset_config = require_once $asset_config_file;
	if ( empty( $asset_config['js/editor.js'] ) ) {
		return;
	}
	$editor_asset    = $asset_config['js/editor.js'];
	$js_dependencies = ( ! empty( $editor_asset['dependencies'] ) ) ? $editor_asset['dependencies'] : [];
	$version         = ( ! empty( $editor_asset['version'] ) ) ? $editor_asset['version'] : filemtime( $asset_config_file );
	// Theme Gutenberg blocks JS.
	if ( is_admin() ) {
		wp_enqueue_script(
			'chestnut-blocks-js',
			CHESTNUT_DIR_URI . '/build/js/blocks.js',
			$js_dependencies,
			$version,
			true
		);
	}

	// Theme Gutenberg blocks CSS.
	$css_dependencies = [
		'wp-block-library-theme',
		'wp-block-library',
	];
    if(file_exists(CHESTNUT_DIR_PATH . '/build/css/blocks.css')) {
        wp_enqueue_style(
            'chestnut-blocks-css',
            CHESTNUT_DIR_URI . '/build/css/blocks.css',
            $css_dependencies,
            filemtime( CHESTNUT_DIR_PATH . '/build/css/blocks.css' ),
            'all'
        );
    }

}