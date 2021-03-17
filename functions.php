<?php 

if ( ! defined( 'CHESTNUT_DIR_PATH' ) ) {
	define( 'CHESTNUT_DIR_PATH', untrailingslashit( get_template_directory() ) );
}

if ( ! defined( 'CHESTNUT_DIR_URI' ) ) {
	define( 'CHESTNUT_DIR_URI', untrailingslashit( get_template_directory_uri() ) );
}

require_once CHESTNUT_DIR_PATH . '/inc/functions/chestnut-enqueue.php';
require_once CHESTNUT_DIR_PATH . '/inc/functions/chestnut-blocks.php';
require_once CHESTNUT_DIR_PATH . '/inc/functions/chestnut-setup.php';
require_once CHESTNUT_DIR_PATH . '/inc/functions/chestnut-menu.php';
require_once CHESTNUT_DIR_PATH . '/inc/functions/chestnut-block-patterns.php';
require_once CHESTNUT_DIR_PATH . '/inc/helpers/template-tags.php';