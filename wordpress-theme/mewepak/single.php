<?php
/**
 * Single blog post template — article + quote sidebar.
 *
 * @package Mewepak
 */

$contact = mewepak_contact();
get_header(); ?>

<main class="bg-white">
	<?php while ( have_posts() ) : the_post(); ?>

		<!-- Post hero -->
		<section class="bg-gradient-to-br from-gray-50 via-white to-gray-50 border-b border-gray-100">
			<div class="max-w-4xl mx-auto px-6 lg:px-8 py-16">
				<nav class="text-sm text-gray-400 mb-4" aria-label="Breadcrumb">
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="hover:text-brand">Home</a>
					<span class="mx-2">/</span>
					<a href="<?php echo esc_url( home_url( '/blog/' ) ); ?>" class="hover:text-brand">Blog</a>
				</nav>
				<div class="flex flex-wrap items-center gap-3 mb-4 text-sm text-gray-500">
					<?php
					$cats = get_the_category();
					if ( ! empty( $cats ) ) : ?>
						<span class="px-3 py-1 bg-brand/10 text-brand rounded-full font-medium"><?php echo esc_html( $cats[0]->name ); ?></span>
					<?php endif; ?>
					<span><?php echo esc_html( get_the_date() ); ?></span>
					<span>&bull;</span>
					<span><?php the_author(); ?></span>
				</div>
				<h1 class="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight text-balance"><?php the_title(); ?></h1>
			</div>
		</section>

		<div class="max-w-6xl mx-auto px-6 lg:px-8 py-16 grid lg:grid-cols-3 gap-12">

			<!-- Article body -->
			<article class="lg:col-span-2">
				<?php if ( has_post_thumbnail() ) : ?>
					<div class="mb-10 rounded-2xl overflow-hidden">
						<?php the_post_thumbnail( 'large', array( 'class' => 'w-full h-auto object-cover' ) ); ?>
					</div>
				<?php endif; ?>

				<div class="entry-content">
					<?php the_content(); ?>
				</div>

				<?php if ( has_tag() ) : ?>
					<div class="mt-10 flex flex-wrap gap-2">
						<?php foreach ( get_the_tags() as $tag ) : ?>
							<a href="<?php echo esc_url( get_tag_link( $tag->term_id ) ); ?>" class="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-brand/10 hover:text-brand transition-colors">#<?php echo esc_html( $tag->name ); ?></a>
						<?php endforeach; ?>
					</div>
				<?php endif; ?>

				<div class="mt-12">
					<?php
					if ( comments_open() || get_comments_number() ) {
						comments_template();
					}
					?>
				</div>
			</article>

			<!-- Sidebar: get a quote -->
			<aside class="lg:col-span-1">
				<div class="sticky top-28 bg-brand-navy rounded-2xl p-6 text-white">
					<h3 class="text-xl font-bold mb-2">Get a Free Quote</h3>
					<p class="text-sm text-white/70 mb-5">Tell us about your packaging needs and our team will get back to you.</p>
					<form action="<?php echo esc_url( home_url( '/contact/' ) ); ?>" method="get" class="space-y-3">
						<input type="text" name="name" placeholder="Your Name" class="w-full h-11 px-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-brand" />
						<input type="email" name="email" placeholder="Email Address" class="w-full h-11 px-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-brand" />
						<textarea name="message" rows="3" placeholder="Your message" class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-brand"></textarea>
						<button type="submit" class="w-full h-11 bg-brand text-white font-medium rounded-lg hover:bg-brand-dark transition-colors">Request Quote</button>
					</form>
					<div class="mt-6 pt-6 border-t border-white/15 space-y-2 text-sm text-white/70">
						<a href="<?php echo esc_url( $contact['whatsapp_url'] ); ?>" class="block hover:text-brand">WhatsApp: <?php echo esc_html( $contact['whatsapp'] ); ?></a>
						<a href="<?php echo esc_url( $contact['phone_url'] ); ?>" class="block hover:text-brand">Call: <?php echo esc_html( $contact['phone'] ); ?></a>
						<a href="mailto:<?php echo esc_attr( $contact['email'] ); ?>" class="block hover:text-brand"><?php echo esc_html( $contact['email'] ); ?></a>
					</div>
				</div>
			</aside>
		</div>

	<?php endwhile; ?>
</main>

<?php get_footer(); ?>
