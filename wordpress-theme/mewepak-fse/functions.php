<?php
/**
 * Mewepak FSE — theme bootstrap.
 *
 * Block themes do most of their work in theme.json, templates/ and patterns/.
 * This file only wires up the small extras a block theme still needs:
 *  - enqueue the minimal custom stylesheet + progressive-enhancement JS
 *  - register custom block-pattern categories
 *  - editor styles so the Site Editor matches the front end
 *
 * @package Mewepak
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! defined( 'MEWEPAK_VERSION' ) ) {
	define( 'MEWEPAK_VERSION', '1.0.0' );
}

/**
 * Front-end assets.
 */
function mewepak_enqueue_assets() {
	// Minimal custom CSS (effects core blocks cannot express).
	wp_enqueue_style(
		'mewepak-custom',
		get_theme_file_uri( 'assets/css/custom.css' ),
		array(),
		MEWEPAK_VERSION
	);

	// Progressive-enhancement JS: mobile nav, sticky shadow, scroll-reveal.
	wp_enqueue_script(
		'mewepak-main',
		get_theme_file_uri( 'assets/js/main.js' ),
		array(),
		MEWEPAK_VERSION,
		true
	);
}
add_action( 'wp_enqueue_scripts', 'mewepak_enqueue_assets' );

/**
 * Match the Site Editor / block editor to the front end.
 */
function mewepak_editor_assets() {
	add_editor_style( 'assets/css/custom.css' );
}
add_action( 'after_setup_theme', 'mewepak_editor_assets' );

/**
 * Register custom block-pattern categories so theme patterns
 * group together in the inserter.
 */
function mewepak_register_pattern_categories() {
	$categories = array(
		'mewepak-sections' => __( 'Mewepak: Sections', 'mewepak' ),
		'mewepak-cta'      => __( 'Mewepak: CTA & Lead Gen', 'mewepak' ),
		'mewepak-cards'    => __( 'Mewepak: Cards & Grids', 'mewepak' ),
		'mewepak-trust'    => __( 'Mewepak: Trust & Proof', 'mewepak' ),
	);

	foreach ( $categories as $slug => $label ) {
		register_block_pattern_category( $slug, array( 'label' => $label ) );
	}
}
add_action( 'init', 'mewepak_register_pattern_categories' );

/**
 * Theme supports. Most are implied by block themes, declared here for clarity.
 */
function mewepak_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'editor-styles' );
	add_theme_support( 'wp-block-styles' );
	add_theme_support( 'html5', array( 'search-form', 'gallery', 'caption', 'style', 'script' ) );

	// Register nav menu locations (used by core Navigation block fallbacks).
	register_nav_menus(
		array(
			'primary' => __( 'Primary Mega Menu', 'mewepak' ),
			'footer'  => __( 'Footer Menu', 'mewepak' ),
		)
	);
}
add_action( 'after_setup_theme', 'mewepak_setup' );
