<?php
/**
 * Generic page template.
 *
 * @package Mewepak
 */

get_header(); ?>

<main class="bg-white">
	<?php while ( have_posts() ) : the_post(); ?>

		<!-- Page hero -->
		<section class="bg-gradient-to-br from-gray-50 via-white to-gray-50 border-b border-gray-100">
			<div class="max-w-4xl mx-auto px-6 lg:px-8 py-16 text-center">
				<nav class="text-sm text-gray-400 mb-4" aria-label="Breadcrumb">
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="hover:text-brand">Home</a>
					<span class="mx-2">/</span>
					<span class="text-gray-600"><?php the_title(); ?></span>
				</nav>
				<h1 class="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight text-balance"><?php the_title(); ?></h1>
			</div>
		</section>

		<!-- Page content -->
		<article class="max-w-4xl mx-auto px-6 lg:px-8 py-16">
			<?php if ( has_post_thumbnail() ) : ?>
				<div class="mb-10 rounded-2xl overflow-hidden">
					<?php the_post_thumbnail( 'large', array( 'class' => 'w-full h-auto object-cover' ) ); ?>
				</div>
			<?php endif; ?>

			<div class="entry-content max-w-none">
				<?php
				the_content();
				wp_link_pages( array(
					'before' => '<div class="mt-6 text-sm text-gray-500">' . esc_html__( 'Pages:', 'mewepak' ),
					'after'  => '</div>',
				) );
				?>
			</div>
		</article>

	<?php endwhile; ?>
</main>

<?php get_footer(); ?>
