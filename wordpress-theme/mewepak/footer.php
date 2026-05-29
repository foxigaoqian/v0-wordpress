<?php
/**
 * Footer template.
 *
 * @package Mewepak
 */

$links     = mewepak_footer_links();
$locations = array(
	'9933 Franklin Ave Franklin Park IL 60131',
	'4225 Executive Square, Suite 600 LA Jolla, CA 92037',
	'1000 Brickell Ave Ste 715 Miami, FL 33131',
);
$socials = array( 'WhatsApp', 'Facebook', 'Twitter', 'Instagram', 'LinkedIn' );
?>

<footer class="bg-brand pt-20 pb-8 text-white">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16">

			<!-- Logo & About -->
			<div class="lg:col-span-1">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex items-center gap-3 mb-6">
					<div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
						<svg viewBox="0 0 24 24" class="w-6 h-6 text-brand" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/></svg>
					</div>
					<div>
						<span class="text-xl font-bold text-white"><?php bloginfo( 'name' ); ?></span>
						<p class="text-[10px] text-white/80">Packaging Solutions Provider</p>
					</div>
				</a>

				<div class="mb-6">
					<h4 class="font-bold text-white mb-2">Disclaimer</h4>
					<p class="text-sm text-white/80 leading-relaxed">
						The Mewepak Is A Top-Rated Packaging Company Known For Its Many Benefits. Our Aim Is To Streamline Printing And Packaging For A Profitable And Satisfying Client Experience.
					</p>
				</div>

				<div>
					<h4 class="font-bold text-white mb-4">Sign Up For Exclusive Offers</h4>
					<form action="#" method="post" class="space-y-3">
						<input type="email" name="email" placeholder="Email Address"
							class="w-full h-10 px-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/60 text-sm focus:outline-none focus:border-white" />
						<button type="submit" class="w-full h-10 bg-white text-brand font-medium rounded-lg hover:bg-white/90 transition-colors">Subscribe</button>
					</form>
				</div>
			</div>

			<!-- Products -->
			<div>
				<h4 class="font-bold text-white mb-4">Products</h4>
				<ul class="space-y-2">
					<?php foreach ( $links['products'] as $link ) : ?>
						<li><a href="<?php echo esc_url( $link['href'] ); ?>" class="text-sm text-white/80 hover:text-white transition-colors"><?php echo esc_html( $link['name'] ); ?></a></li>
					<?php endforeach; ?>
				</ul>
			</div>

			<!-- Markets -->
			<div>
				<h4 class="font-bold text-white mb-4">Markets</h4>
				<ul class="space-y-2">
					<?php foreach ( $links['markets'] as $link ) : ?>
						<li><a href="<?php echo esc_url( $link['href'] ); ?>" class="text-sm text-white/80 hover:text-white transition-colors"><?php echo esc_html( $link['name'] ); ?></a></li>
					<?php endforeach; ?>
				</ul>
			</div>

			<!-- Company -->
			<div>
				<h4 class="font-bold text-white mb-4">Company</h4>
				<ul class="space-y-2">
					<?php foreach ( $links['company'] as $link ) : ?>
						<li><a href="<?php echo esc_url( $link['href'] ); ?>" class="text-sm text-white/80 hover:text-white transition-colors"><?php echo esc_html( $link['name'] ); ?></a></li>
					<?php endforeach; ?>
				</ul>
			</div>

			<!-- Locations -->
			<div>
				<h4 class="font-bold text-white mb-4">Locations</h4>
				<ul class="space-y-4">
					<?php foreach ( $locations as $loc ) : ?>
						<li class="flex items-start gap-3">
							<svg class="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
							<span class="text-sm text-white/80"><?php echo esc_html( $loc ); ?></span>
						</li>
					<?php endforeach; ?>
				</ul>

				<div class="mt-6 space-y-3">
					<div class="flex items-center gap-3">
						<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
						<span class="text-sm text-white/80">Toll-Free: 1-800-396-1840</span>
					</div>
					<div class="flex items-center gap-3">
						<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
						<span class="text-sm text-white/80">Front Desk: 630-364-3944</span>
					</div>
					<div class="flex items-center gap-3">
						<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path stroke-linecap="round" stroke-linejoin="round" d="m22 6-10 7L2 6"/></svg>
						<span class="text-sm text-white/80">support@mewepak.com</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Social + copyright -->
		<div class="border-t border-white/20 pt-8">
			<div class="text-center mb-6">
				<h4 class="font-bold text-white mb-4">Connect With Social</h4>
				<div class="flex flex-wrap items-center justify-center gap-3">
					<?php foreach ( $socials as $social ) : ?>
						<a href="#" aria-label="<?php echo esc_attr( $social ); ?>" class="px-4 py-2 bg-white text-brand text-sm font-medium rounded-full hover:bg-white/90 transition-colors">Follow</a>
					<?php endforeach; ?>
				</div>
			</div>
			<p class="text-center text-sm text-white/60">
				&copy; <?php echo esc_html( date( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?>. All rights reserved.
			</p>
		</div>
	</div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
