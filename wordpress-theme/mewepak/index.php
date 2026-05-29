<?php
/**
 * Main index / blog archive template (fallback for all archives).
 *
 * @package Mewepak
 */

get_header(); ?>

<main class="bg-white">

	<!-- Archive hero -->
	<section class="bg-gradient-to-br from-gray-50 via-white to-gray-50 border-b border-gray-100">
		<div class="max-w-7xl mx-auto px-6 lg:px-8 py-16 text-center">
			<span class="text-sm font-semibold tracking-widest text-brand uppercase">Insights</span>
			<h1 class="mt-2 text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
				<?php
				if ( is_home() || is_front_page() ) {
					echo esc_html__( 'Blog', 'mewepak' );
				} elseif ( is_category() ) {
					single_cat_title();
				} elseif ( is_tag() ) {
					single_tag_title();
				} elseif ( is_search() ) {
					/* translators: %s: search query. */
					printf( esc_html__( 'Search: %s', 'mewepak' ), '<span class="text-brand">' . esc_html( get_search_query() ) . '</span>' );
				} else {
					the_archive_title();
				}
				?>
			</h1>
		</div>
	</section>

	<section class="max-w-7xl mx-auto px-6 lg:px-8 py-16">
		<?php if ( have_posts() ) : ?>
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				<?php while ( have_posts() ) : the_post(); ?>
					<article class="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
						<a href="<?php the_permalink(); ?>" class="block aspect-video overflow-hidden bg-gray-100">
							<?php if ( has_post_thumbnail() ) : ?>
								<?php the_post_thumbnail( 'large', array( 'class' => 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-300' ) ); ?>
							<?php endif; ?>
						</a>
						<div class="p-6">
							<div class="flex items-center gap-2 text-xs text-gray-400 mb-3">
								<span><?php echo esc_html( get_the_date() ); ?></span>
							</div>
							<h2 class="font-bold text-lg text-gray-900 group-hover:text-brand transition-colors line-clamp-2">
								<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
							</h2>
							<p class="mt-2 text-sm text-gray-500 line-clamp-3"><?php echo esc_html( get_the_excerpt() ); ?></p>
							<a href="<?php the_permalink(); ?>" class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5 transition-all">
								Read More
								<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
							</a>
						</div>
					</article>
				<?php endwhile; ?>
			</div>

			<div class="mt-12 flex justify-center">
				<?php
				the_posts_pagination( array(
					'mid_size'  => 1,
					'prev_text' => esc_html__( '&larr; Prev', 'mewepak' ),
					'next_text' => esc_html__( 'Next &rarr;', 'mewepak' ),
					'class'     => 'flex items-center gap-2',
				) );
				?>
			</div>
		<?php else : ?>
			<p class="text-center text-gray-500 py-20"><?php esc_html_e( 'Nothing found.', 'mewepak' ); ?></p>
		<?php endif; ?>
	</section>
</main>

<?php get_footer(); ?>
