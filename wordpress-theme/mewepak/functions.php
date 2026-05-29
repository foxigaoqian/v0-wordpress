<?php
/**
 * Mewepak theme functions.
 *
 * @package Mewepak
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // No direct access.
}

define( 'MEWEPAK_VERSION', '1.0.0' );

/**
 * Theme setup: supports, menus, etc.
 */
function mewepak_setup() {
	load_theme_textdomain( 'mewepak', get_template_directory() . '/languages' );

	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
	add_theme_support( 'custom-logo', array(
		'height'      => 48,
		'width'       => 48,
		'flex-height' => true,
		'flex-width'  => true,
	) );

	// Primary nav is rendered from the PHP array below (mega menu),
	// but we still register a WP menu location for the mobile/fallback menu.
	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'mewepak' ),
		'footer_products' => __( 'Footer — Products', 'mewepak' ),
		'footer_markets'  => __( 'Footer — Markets', 'mewepak' ),
		'footer_company'  => __( 'Footer — Company', 'mewepak' ),
	) );
}
add_action( 'after_setup_theme', 'mewepak_setup' );

/**
 * Enqueue styles & scripts.
 *
 * NOTE: This skeleton loads Tailwind via the Play CDN so it works with zero
 * build step. For production you should compile Tailwind to a static CSS file
 * (see README) and enqueue that instead of the CDN for performance.
 */
function mewepak_assets() {
	// Inter font.
	wp_enqueue_style(
		'mewepak-inter',
		'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
		array(),
		null
	);

	// Theme stylesheet (overrides + WP core markup).
	wp_enqueue_style( 'mewepak-style', get_stylesheet_uri(), array(), MEWEPAK_VERSION );

	// Tailwind Play CDN (dev/skeleton only).
	wp_enqueue_script( 'mewepak-tailwind-cdn', 'https://cdn.tailwindcss.com', array(), null, false );

	// Theme behaviour: mobile menu, dropdowns, hero carousel, scroll reveal.
	wp_enqueue_script( 'mewepak-main', get_template_directory_uri() . '/assets/js/main.js', array(), MEWEPAK_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'mewepak_assets' );

/**
 * Inject the Tailwind config (brand colors + Inter) before any markup paints.
 * Must run after the CDN script tag is printed in the head.
 */
function mewepak_tailwind_config() {
	?>
	<script>
		tailwind.config = {
			theme: {
				extend: {
					colors: {
						brand: {
							DEFAULT: '#00cfca',
							dark: '#00b8b3',
							navy: '#0a1628',
						},
					},
					fontFamily: {
						sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
					},
				},
			},
		};
	</script>
	<?php
}
add_action( 'wp_head', 'mewepak_tailwind_config', 5 );

/**
 * Site contact details used in the header utility bar & footer.
 * Edit these once here, or wire them to the Customizer / ACF later.
 */
function mewepak_contact() {
	return array(
		'tagline'      => 'Customized Packaging Factory Since 2007.',
		'whatsapp'     => '+86 13537663353',
		'whatsapp_url' => 'https://wa.me/8613537663353',
		'phone'        => '+86-13423118038',
		'phone_url'    => 'tel:+8613423118038',
		'email'        => 'sales@minwayprint.com',
	);
}

/**
 * Primary navigation with mega-menu data.
 * Rendered by header.php. Edit labels/links here, or replace with a
 * Customizer/ACF source later for a fully client-editable menu.
 *
 * @return array
 */
function mewepak_nav_items() {
	$home = home_url( '/' );

	return array(
		array( 'label' => 'Home', 'href' => $home ),
		array(
			'label' => 'Products',
			'href'  => $home . 'products/',
			'mega'  => array(
				'columns' => array(
					array(
						'title' => 'Pouch Formats',
						'items' => array(
							array( 'label' => 'Stand Up Pouch', 'href' => $home . 'products/stand-up-pouch/' ),
							array( 'label' => 'Flat Bottom Pouch', 'href' => $home . 'products/flat-bottom-pouch/' ),
							array( 'label' => 'Retort Pouch', 'href' => $home . 'products/retort-pouch/' ),
							array( 'label' => 'Spout Pouch', 'href' => $home . 'products/spout-pouch/' ),
							array( 'label' => 'Roll Stock & Lidding Films', 'href' => $home . 'products/roll-stock-lidding-films/' ),
							array( 'label' => 'Stand Up Pouch with Tap', 'href' => $home . 'products/stand-up-pouch-with-tap/' ),
							array( 'label' => 'Bag-In-Box', 'href' => $home . 'products/bag-in-box/' ),
						),
					),
					array(
						'title' => 'Specialty Packaging',
						'items' => array(
							array( 'label' => 'Quad Seal Bag', 'href' => $home . 'products/quad-seal-bag/' ),
							array( 'label' => 'Flat Pouch', 'href' => $home . 'products/flat-pouch/' ),
							array( 'label' => 'Shaped Pouch', 'href' => $home . 'products/shaped-pouch/' ),
							array( 'label' => 'Shrink Sleeves Label', 'href' => $home . 'products/shrink-sleeves-label/' ),
							array( 'label' => 'Thermoforming', 'href' => $home . 'products/thermoforming/' ),
							array( 'label' => 'Vacuum', 'href' => $home . 'products/vacuum/' ),
							array( 'label' => 'Flow Pack', 'href' => $home . 'products/flow-pack/' ),
						),
					),
				),
				'featured' => array(
					'tag'         => 'FEATURED',
					'title'       => 'Explore Our Premium Products',
					'description' => 'Discover high-quality, customized packaging solutions tailored for your business needs.',
					'link_label'  => 'View All Products',
					'link_href'   => $home . 'products/',
				),
			),
		),
		array(
			'label' => 'Markets',
			'href'  => $home . 'markets/',
			'mega'  => array(
				'columns' => array(
					array(
						'title' => 'Foods',
						'items' => array(
							array( 'label' => 'Coffee & Tea', 'href' => $home . 'markets/coffee-tea/' ),
							array( 'label' => 'Snacks & Sweets', 'href' => $home . 'markets/snacks-sweets/' ),
							array( 'label' => 'Supplement', 'href' => $home . 'markets/supplement/' ),
							array( 'label' => 'Pet Food', 'href' => $home . 'markets/pet-food/' ),
							array( 'label' => 'Sauce & Soup', 'href' => $home . 'markets/sauce-soup/' ),
							array( 'label' => 'Baby Food', 'href' => $home . 'markets/baby-food/' ),
							array( 'label' => 'Beverage', 'href' => $home . 'markets/beverage/' ),
							array( 'label' => 'Frozen Food', 'href' => $home . 'markets/frozen-food/' ),
						),
					),
					array(
						'title' => '&nbsp;',
						'items' => array(
							array( 'label' => 'Home Care', 'href' => $home . 'markets/home-care/' ),
							array( 'label' => 'Meat & Poultry', 'href' => $home . 'markets/meat-poultry/' ),
							array( 'label' => 'Beauty & Personal Care', 'href' => $home . 'markets/beauty-care/' ),
							array( 'label' => 'Sea Food', 'href' => $home . 'markets/sea-food/' ),
							array( 'label' => 'Fruits & Veggies', 'href' => $home . 'markets/fruits-veggies/' ),
						),
					),
					array(
						'title' => 'Nonfoods',
						'items' => array(
							array( 'label' => 'CBD', 'href' => $home . 'markets/cbd/' ),
							array( 'label' => 'Cosmetics', 'href' => $home . 'markets/cosmetics/' ),
							array( 'label' => 'Powder & Spices', 'href' => $home . 'markets/powder-spices/' ),
							array( 'label' => 'Fashion', 'href' => $home . 'markets/fashion/' ),
							array( 'label' => 'Tobacco & Filters', 'href' => $home . 'markets/tobacco-filters/' ),
							array( 'label' => 'Cannabis', 'href' => $home . 'markets/cannabis/' ),
							array( 'label' => 'Accessories', 'href' => $home . 'markets/accessories/' ),
						),
					),
				),
				'featured' => array(
					'tag'         => 'INDUSTRIES',
					'title'       => 'Solutions for Every Market',
					'description' => 'Tailored packaging solutions designed to meet the unique demands of your industry.',
					'link_label'  => 'View All Markets',
					'link_href'   => $home . 'markets/',
				),
			),
		),
		array(
			'label' => 'Solutions',
			'href'  => $home . 'solutions/',
			'mega'  => array(
				'columns' => array(
					array(
						'title' => 'Our Solutions',
						'items' => array(
							array( 'label' => 'Prepress', 'href' => $home . 'solutions/prepress/' ),
							array( 'label' => 'Printing', 'href' => $home . 'solutions/printing/' ),
							array( 'label' => 'Technical', 'href' => $home . 'solutions/technical/' ),
							array( 'label' => 'Recycling', 'href' => $home . 'solutions/recycling/' ),
							array( 'label' => 'Retort', 'href' => $home . 'solutions/retort/' ),
						),
					),
				),
				'featured' => array(
					'tag'         => 'CUSTOM SOLUTIONS',
					'title'       => 'Tailored for Your Brand',
					'description' => 'Work with our experts to create packaging that perfectly represents your brand.',
					'link_label'  => 'Get Started',
					'link_href'   => $home . 'contact/',
				),
			),
		),
		array(
			'label' => 'Added Value',
			'href'  => $home . 'added-value/',
			'mega'  => array(
				'columns' => array(
					array(
						'title' => 'Resources',
						'items' => array(
							array( 'label' => 'Pouch Patrol', 'href' => $home . 'added-value/pouch-patrol/' ),
							array( 'label' => 'On The Road', 'href' => $home . 'added-value/on-the-road/' ),
							array( 'label' => "Keepin'it Green", 'href' => $home . 'added-value/keepin-it-green/' ),
							array( 'label' => 'FAQ', 'href' => $home . 'added-value/faq/' ),
							array( 'label' => 'Help Center', 'href' => $home . 'added-value/help-center/' ),
							array( 'label' => 'Careers', 'href' => $home . 'added-value/careers/' ),
						),
					),
				),
				'featured' => array(
					'tag'         => 'SUPPORT',
					'title'       => "We're Here to Help",
					'description' => 'Access our resources, get answers to common questions, and explore career opportunities.',
					'link_label'  => 'Learn More',
					'link_href'   => $home . 'added-value/',
				),
			),
		),
		array(
			'label' => 'Sustainability',
			'href'  => $home . 'sustainability/',
			'mega'  => array(
				'columns' => array(
					array(
						'title' => 'Our Commitment',
						'items' => array(
							array( 'label' => 'Sustainable Packaging', 'href' => $home . 'sustainability/sustainable-packaging/' ),
							array( 'label' => 'Operations Sustainability', 'href' => $home . 'sustainability/operations/' ),
							array( 'label' => 'Social Sustainability', 'href' => $home . 'sustainability/social/' ),
							array( 'label' => 'Mewepak Impact Report', 'href' => $home . 'sustainability/impact-report/' ),
							array( 'label' => 'Life Cycle Analysis Tool', 'href' => $home . 'sustainability/lca-tool/' ),
						),
					),
				),
				'featured' => array(
					'tag'         => 'ECO-FRIENDLY',
					'title'       => 'Building a Sustainable Future',
					'description' => 'Discover our commitment to environmental responsibility and sustainable practices.',
					'link_label'  => 'View Report',
					'link_href'   => $home . 'sustainability/impact-report/',
				),
			),
		),
		array( 'label' => 'Blog', 'href' => $home . 'blog/' ),
		array( 'label' => 'Contact', 'href' => $home . 'contact/' ),
		array(
			'label' => 'About Us',
			'href'  => $home . 'about-us/',
			'mega'  => array(
				'columns' => array(
					array(
						'title' => 'Company',
						'items' => array(
							array( 'label' => 'Global Reach', 'href' => $home . 'about-us/global-reach/' ),
							array( 'label' => 'Impact Report', 'href' => $home . 'about-us/impact-report/' ),
							array( 'label' => 'Quality Certifications', 'href' => $home . 'about-us/quality-certifications/' ),
						),
					),
				),
				'featured' => array(
					'tag'         => 'ABOUT US',
					'title'       => 'Who We Are',
					'description' => 'Learn about our global presence, quality standards, and commitment to excellence.',
					'link_label'  => 'Learn More',
					'link_href'   => $home . 'about-us/',
				),
			),
		),
	);
}

/**
 * Footer link columns.
 *
 * @return array
 */
function mewepak_footer_links() {
	$home = home_url( '/' );

	return array(
		'products' => array(
			array( 'name' => 'Stand Up Pouch', 'href' => $home . 'products/stand-up-pouch/' ),
			array( 'name' => 'Flat Bottom Pouch', 'href' => $home . 'products/flat-bottom-pouch/' ),
			array( 'name' => 'Retort Pouch', 'href' => $home . 'products/retort-pouch/' ),
			array( 'name' => 'Spout Pouch', 'href' => $home . 'products/spout-pouch/' ),
			array( 'name' => 'Roll Stock & Lidding Films', 'href' => $home . 'products/roll-stock-lidding-films/' ),
			array( 'name' => 'Stand Up Pouch with Tap', 'href' => $home . 'products/stand-up-pouch-with-tap/' ),
			array( 'name' => 'Bag-In-Box', 'href' => $home . 'products/bag-in-box/' ),
			array( 'name' => 'Quad Seal Bag', 'href' => $home . 'products/quad-seal-bag/' ),
			array( 'name' => 'Flat Pouch', 'href' => $home . 'products/flat-pouch/' ),
			array( 'name' => 'Shaped Pouch', 'href' => $home . 'products/shaped-pouch/' ),
		),
		'markets' => array(
			array( 'name' => 'Coffee & Tea', 'href' => $home . 'markets/coffee-tea/' ),
			array( 'name' => 'Snacks & Sweets', 'href' => $home . 'markets/snacks-sweets/' ),
			array( 'name' => 'Supplement', 'href' => $home . 'markets/supplement/' ),
			array( 'name' => 'Pet Food', 'href' => $home . 'markets/pet-food/' ),
			array( 'name' => 'Sauce & Soup', 'href' => $home . 'markets/sauce-soup/' ),
			array( 'name' => 'Baby Food', 'href' => $home . 'markets/baby-food/' ),
			array( 'name' => 'Beverage', 'href' => $home . 'markets/beverage/' ),
			array( 'name' => 'Frozen Food', 'href' => $home . 'markets/frozen-food/' ),
			array( 'name' => 'Home Care', 'href' => $home . 'markets/home-care/' ),
			array( 'name' => 'Cosmetics', 'href' => $home . 'markets/cosmetics/' ),
		),
		'company' => array(
			array( 'name' => 'Home', 'href' => $home ),
			array( 'name' => 'About Us', 'href' => $home . 'about-us/' ),
			array( 'name' => 'Global Reach', 'href' => $home . 'about-us/global-reach/' ),
			array( 'name' => 'Quality Certifications', 'href' => $home . 'about-us/quality-certifications/' ),
			array( 'name' => 'Blog', 'href' => $home . 'blog/' ),
			array( 'name' => 'Contact', 'href' => $home . 'contact/' ),
			array( 'name' => 'FAQ', 'href' => $home . 'added-value/faq/' ),
			array( 'name' => 'Help Center', 'href' => $home . 'added-value/help-center/' ),
			array( 'name' => 'Careers', 'href' => $home . 'added-value/careers/' ),
		),
	);
}

/**
 * Excerpt tweaks for blog cards.
 */
function mewepak_excerpt_length( $length ) {
	return 22;
}
add_filter( 'excerpt_length', 'mewepak_excerpt_length' );

function mewepak_excerpt_more( $more ) {
	return '&hellip;';
}
add_filter( 'excerpt_more', 'mewepak_excerpt_more' );
