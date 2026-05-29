<?php
/**
 * Front page (homepage) template.
 *
 * Ports the Next.js homepage: hero carousel + explore + sustainability CTA.
 * Sections beyond the hero are static here as a starting point — wire them to
 * WordPress queries / ACF as you migrate real content.
 *
 * @package Mewepak
 */

get_header();

$home = home_url( '/' );

/* Hero slides (ported from hero-section.tsx). */
$slides = array(
	array(
		'subtitle'    => 'Manufacturer and Exporter of',
		'title'       => 'Premium Quality',
		'accent'      => 'Packaging Pouches',
		'description' => "Premium flexible packaging and bags, customized for your brand's unique needs, protecting your products with modern technology.",
	),
	array(
		'subtitle'    => 'Industry Leading',
		'title'       => 'Sustainable',
		'accent'      => 'Packaging Solutions',
		'description' => 'Eco-friendly materials and processes that reduce environmental impact while maintaining premium quality and protection.',
	),
	array(
		'subtitle'    => 'Custom Design',
		'title'       => 'Stand Up Pouches',
		'accent'      => '& Flat Bags',
		'description' => 'Wide range of pouch formats including stand up pouches, flat bottom bags, side gusset bags, and more for every industry need.',
	),
	array(
		'subtitle'    => 'High Barrier',
		'title'       => 'Food Grade',
		'accent'      => 'Packaging Films',
		'description' => 'Multi-layer laminated films with excellent barrier properties to protect against moisture, oxygen, and UV light.',
	),
);

/* Explore-by-market tiles (ported from explore-section.tsx). */
$markets = array(
	array( 'label' => 'Coffee & Tea', 'slug' => 'coffee-tea', 'image' => 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop' ),
	array( 'label' => 'Snacks & Sweets', 'slug' => 'snacks-sweets', 'image' => 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&h=400&fit=crop' ),
	array( 'label' => 'Pet Food', 'slug' => 'pet-food', 'image' => 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=400&fit=crop' ),
	array( 'label' => 'Supplement', 'slug' => 'supplement', 'image' => 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=400&fit=crop' ),
	array( 'label' => 'Beverage', 'slug' => 'beverage', 'image' => 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=400&h=400&fit=crop' ),
	array( 'label' => 'Cosmetics', 'slug' => 'cosmetics', 'image' => 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop' ),
);
?>

<!-- ===================== HERO ===================== -->
<section class="relative min-h-[85vh] flex items-center bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden" data-hero>
	<div class="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
		<div class="absolute inset-0 rounded-full border-[3px] border-gray-200/60"></div>
		<div class="absolute inset-8 rounded-full border border-gray-100/50"></div>
	</div>
	<div class="absolute top-20 right-40 w-96 h-96 bg-brand/5 rounded-full blur-3xl"></div>

	<div class="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-24">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<!-- Left text -->
			<div class="relative z-10 min-h-[260px]">
				<?php foreach ( $slides as $idx => $s ) : ?>
					<div data-hero-slide class="transition-opacity duration-500 <?php echo 0 === $idx ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0'; ?>">
						<p class="text-sm text-gray-500 tracking-wide mb-4"><?php echo esc_html( $s['subtitle'] ); ?></p>
						<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-gray-900">
							<?php echo esc_html( $s['title'] ); ?><br><?php echo esc_html( $s['accent'] ); ?>
						</h1>
						<p class="mt-8 text-base lg:text-lg text-gray-600 max-w-lg leading-relaxed"><?php echo esc_html( $s['description'] ); ?></p>
					</div>
				<?php endforeach; ?>

				<div class="mt-10 flex flex-wrap gap-4">
					<a href="<?php echo esc_url( $home . 'contact/' ); ?>" class="inline-flex items-center gap-2 h-12 px-8 bg-brand text-white font-medium rounded-full hover:bg-brand-dark transition-all shadow-lg shadow-brand/25">
						Get a Quote
						<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
					</a>
					<a href="<?php echo esc_url( $home . 'products/' ); ?>" class="group inline-flex items-center gap-3 h-12 px-6 text-gray-700 hover:text-brand transition-colors">
						<span class="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:border-brand transition-colors">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
						</span>
						<span class="text-sm font-semibold uppercase tracking-wider">Explore Products</span>
					</a>
				</div>

				<!-- Dots + nav -->
				<div class="mt-16 flex items-center gap-4">
					<button type="button" data-hero-prev class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-brand hover:text-brand transition-colors" aria-label="Previous slide">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m15 18-6-6 6-6"/></svg>
					</button>
					<div class="flex items-center gap-2">
						<?php foreach ( $slides as $idx => $s ) : ?>
							<button type="button" data-hero-dot aria-label="Go to slide <?php echo (int) ( $idx + 1 ); ?>" class="h-2 rounded-full transition-all duration-300 <?php echo 0 === $idx ? 'w-8 bg-brand' : 'w-2 bg-gray-300'; ?>"></button>
						<?php endforeach; ?>
					</div>
					<button type="button" data-hero-next class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-brand hover:text-brand transition-colors" aria-label="Next slide">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m9 18 6-6-6-6"/></svg>
					</button>
				</div>
			</div>

			<!-- Right visual -->
			<div class="relative hidden lg:block">
				<div class="relative w-full h-[500px] flex items-center justify-center">
					<div class="w-72 h-96 bg-gradient-to-b from-brand to-brand-dark rounded-t-[3rem] rounded-b-2xl shadow-2xl flex items-center justify-center">
						<div class="text-center text-white">
							<div class="w-16 h-16 mx-auto bg-white/20 rounded-full mb-4"></div>
							<p class="text-xs font-bold tracking-widest">PREMIUM PACKAGING</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="absolute bottom-0 left-0 w-full h-1 bg-gray-100">
		<div data-hero-progress class="h-full bg-brand" style="width:0%"></div>
	</div>
</section>

<!-- ===================== EXPLORE BY MARKET ===================== -->
<section class="py-24 bg-white">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="text-center mb-12" data-reveal>
			<span class="text-sm font-semibold tracking-widest text-brand uppercase">Industries</span>
			<h2 class="mt-2 text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">Explore by Market</h2>
			<p class="mt-4 text-gray-600 max-w-2xl mx-auto">Tailored packaging solutions for every industry, from coffee to cosmetics.</p>
		</div>
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" data-reveal>
			<?php foreach ( $markets as $m ) : ?>
				<a href="<?php echo esc_url( $home . 'markets/' . $m['slug'] . '/' ); ?>" class="group bg-white rounded-2xl p-3 border-2 border-gray-100 hover:border-brand transition-all">
					<div class="w-full aspect-square rounded-xl overflow-hidden mb-3">
						<img src="<?php echo esc_url( $m['image'] ); ?>" alt="<?php echo esc_attr( $m['label'] ); ?>" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy" />
					</div>
					<span class="text-sm font-semibold text-gray-700 group-hover:text-brand transition-colors block text-center"><?php echo esc_html( $m['label'] ); ?></span>
				</a>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<!-- ===================== SUSTAINABILITY CTA ===================== -->
<section class="bg-gradient-to-br from-brand-navy via-[#0d1d35] to-brand-navy py-24 text-white">
	<div class="max-w-4xl mx-auto px-6 text-center" data-reveal>
		<div class="h-1 w-24 bg-gradient-to-r from-transparent via-brand to-transparent mx-auto mb-6"></div>
		<h2 class="text-4xl md:text-6xl font-bold tracking-tight">Our unique</h2>
		<h2 class="text-4xl md:text-6xl font-bold bg-gradient-to-r from-brand to-[#00e5df] bg-clip-text text-transparent tracking-tight">proposition</h2>
		<p class="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">Whatever your packaging sustainability challenge, Mewepak has the solution.</p>
		<a href="<?php echo esc_url( $home . 'sustainability/' ); ?>" class="mt-8 inline-flex items-center gap-2 h-12 px-8 bg-brand text-white font-medium rounded-full hover:bg-brand-dark transition-colors">
			Discover Sustainability
			<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
		</a>
	</div>
</section>

<!-- ===================== LATEST FROM BLOG ===================== -->
<section class="py-24 bg-gray-50">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="flex items-end justify-between mb-10" data-reveal>
			<div>
				<span class="text-sm font-semibold tracking-widest text-brand uppercase">Insights</span>
				<h2 class="mt-2 text-3xl md:text-4xl font-bold text-gray-900">From the Blog</h2>
			</div>
			<a href="<?php echo esc_url( $home . 'blog/' ); ?>" class="text-brand font-semibold hover:underline">View All</a>
		</div>
		<div class="grid md:grid-cols-3 gap-8" data-reveal>
			<?php
			$recent = new WP_Query( array( 'posts_per_page' => 3, 'ignore_sticky_posts' => true ) );
			if ( $recent->have_posts() ) :
				while ( $recent->have_posts() ) : $recent->the_post(); ?>
					<a href="<?php the_permalink(); ?>" class="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
						<div class="aspect-video overflow-hidden bg-gray-100">
							<?php if ( has_post_thumbnail() ) : ?>
								<?php the_post_thumbnail( 'large', array( 'class' => 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-300' ) ); ?>
							<?php endif; ?>
						</div>
						<div class="p-5">
							<h3 class="font-semibold text-gray-900 group-hover:text-brand transition-colors line-clamp-2"><?php the_title(); ?></h3>
							<p class="mt-2 text-sm text-gray-500 line-clamp-2"><?php echo esc_html( get_the_excerpt() ); ?></p>
						</div>
					</a>
				<?php endwhile;
				wp_reset_postdata();
			else : ?>
				<p class="text-gray-500">No posts yet. Publish your first article to see it here.</p>
			<?php endif; ?>
		</div>
	</div>
</section>

<?php get_footer(); ?>
