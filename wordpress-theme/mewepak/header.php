<?php
/**
 * Header template — utility bar, logo, mega-menu nav, mobile menu.
 *
 * @package Mewepak
 */

$contact   = mewepak_contact();
$nav_items = mewepak_nav_items();
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="bg-white">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="profile" href="https://gmpg.org/xfn/11" />
	<?php wp_head(); ?>
</head>

<body <?php body_class( 'font-sans antialiased text-gray-900' ); ?>>
<?php wp_body_open(); ?>

<header id="site-header" class="sticky top-0 z-50 w-full bg-white shadow-sm" data-header>

	<!-- Utility bar: contact info (hidden on mobile) -->
	<div class="hidden md:block bg-brand-navy text-white">
		<div class="max-w-7xl mx-auto px-6 lg:px-8">
			<div class="flex items-center justify-between h-9 text-xs">
				<p class="font-medium tracking-wide text-white/90">
					<?php echo esc_html( $contact['tagline'] ); ?>
				</p>
				<div class="flex items-center gap-5">
					<a href="<?php echo esc_url( $contact['whatsapp_url'] ); ?>" target="_blank" rel="noopener noreferrer"
						class="flex items-center gap-1.5 text-white/80 hover:text-brand transition-colors">
						<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
						<span>WhatsApp: <?php echo esc_html( $contact['whatsapp'] ); ?></span>
					</a>
					<span class="w-px h-3.5 bg-white/20"></span>
					<a href="<?php echo esc_url( $contact['phone_url'] ); ?>"
						class="flex items-center gap-1.5 text-white/80 hover:text-brand transition-colors">
						<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
						<span>Call Us: <?php echo esc_html( $contact['phone'] ); ?></span>
					</a>
					<span class="w-px h-3.5 bg-white/20"></span>
					<a href="mailto:<?php echo esc_attr( $contact['email'] ); ?>"
						class="flex items-center gap-1.5 text-white/80 hover:text-brand transition-colors">
						<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path stroke-linecap="round" stroke-linejoin="round" d="m22 6-10 7L2 6"/></svg>
						<span><?php echo esc_html( $contact['email'] ); ?></span>
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Main bar: logo + nav -->
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="flex items-center justify-between h-16 lg:h-20 border-b border-gray-100">

			<!-- Logo -->
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex items-center gap-3">
				<?php if ( has_custom_logo() ) : ?>
					<?php the_custom_logo(); ?>
				<?php else : ?>
					<div class="w-10 h-10 bg-brand rounded-lg flex items-center justify-center">
						<svg viewBox="0 0 24 24" class="w-6 h-6 text-white" fill="currentColor">
							<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/>
						</svg>
					</div>
					<div class="leading-tight">
						<span class="block text-xl font-bold text-gray-900"><?php bloginfo( 'name' ); ?></span>
						<span class="block text-[10px] text-gray-500">Packaging Solutions Provider</span>
					</div>
				<?php endif; ?>
			</a>

			<!-- Desktop nav -->
			<nav class="hidden xl:flex items-center gap-1" aria-label="<?php esc_attr_e( 'Primary', 'mewepak' ); ?>">
				<?php foreach ( $nav_items as $i => $item ) :
					$has_mega = ! empty( $item['mega'] ); ?>
					<div class="relative" data-nav-item>
						<a href="<?php echo esc_url( $item['href'] ); ?>"
							class="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand transition-colors"
							<?php if ( $has_mega ) : ?>data-mega-trigger="mega-<?php echo (int) $i; ?>"<?php endif; ?>>
							<?php echo esc_html( $item['label'] ); ?>
							<?php if ( $has_mega ) : ?>
								<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m6 9 6 6 6-6"/></svg>
							<?php endif; ?>
						</a>

						<?php if ( $has_mega ) : $mega = $item['mega']; ?>
							<div id="mega-<?php echo (int) $i; ?>" data-mega-panel
								class="invisible opacity-0 absolute left-0 top-full pt-3 transition-all duration-200 z-50">
								<div class="w-[680px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
									<div class="grid grid-cols-3">
										<div class="col-span-2 p-6 grid grid-cols-2 gap-x-6 gap-y-1">
											<?php foreach ( $mega['columns'] as $col ) : ?>
												<div>
													<?php if ( ! empty( $col['title'] ) ) : ?>
														<p class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2"><?php echo wp_kses_post( $col['title'] ); ?></p>
													<?php endif; ?>
													<ul class="space-y-1">
														<?php foreach ( $col['items'] as $sub ) : ?>
															<li>
																<a href="<?php echo esc_url( $sub['href'] ); ?>" class="block py-1 text-sm text-gray-600 hover:text-brand transition-colors">
																	<?php echo esc_html( $sub['label'] ); ?>
																</a>
															</li>
														<?php endforeach; ?>
													</ul>
												</div>
											<?php endforeach; ?>
										</div>
										<div class="bg-brand-navy p-6 flex flex-col justify-between text-white">
											<div>
												<span class="inline-block text-[10px] font-bold tracking-widest text-brand mb-3"><?php echo esc_html( $mega['featured']['tag'] ); ?></span>
												<h4 class="text-lg font-bold leading-snug mb-2"><?php echo esc_html( $mega['featured']['title'] ); ?></h4>
												<p class="text-sm text-white/70 leading-relaxed"><?php echo esc_html( $mega['featured']['description'] ); ?></p>
											</div>
											<a href="<?php echo esc_url( $mega['featured']['link_href'] ); ?>" class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5 transition-all">
												<?php echo esc_html( $mega['featured']['link_label'] ); ?>
												<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
											</a>
										</div>
									</div>
								</div>
							</div>
						<?php endif; ?>
					</div>
				<?php endforeach; ?>
			</nav>

			<!-- Right actions -->
			<div class="flex items-center gap-3">
				<a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>"
					class="hidden lg:inline-flex items-center gap-2 h-10 px-5 bg-brand text-white text-sm font-medium rounded-full hover:bg-brand-dark transition-colors">
					Request a Quote
					<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
				</a>

				<!-- Mobile toggle -->
				<button type="button" class="xl:hidden w-10 h-10 flex items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100"
					data-mobile-toggle aria-label="<?php esc_attr_e( 'Open menu', 'mewepak' ); ?>" aria-expanded="false">
					<svg class="w-6 h-6" data-icon-open fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
					<svg class="w-6 h-6 hidden" data-icon-close fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu panel -->
	<div class="xl:hidden hidden border-b border-gray-100 bg-white max-h-[80vh] overflow-y-auto" data-mobile-panel>
		<nav class="px-6 py-4 space-y-1" aria-label="<?php esc_attr_e( 'Mobile', 'mewepak' ); ?>">
			<?php foreach ( $nav_items as $i => $item ) :
				$has_mega = ! empty( $item['mega'] ); ?>
				<div class="border-b border-gray-50 last:border-0">
					<?php if ( $has_mega ) : ?>
						<button type="button" class="w-full flex items-center justify-between py-3 text-left text-base font-medium text-gray-800" data-acc-toggle>
							<?php echo esc_html( $item['label'] ); ?>
							<svg class="w-4 h-4 transition-transform" data-acc-icon fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m6 9 6 6 6-6"/></svg>
						</button>
						<div class="hidden pb-3 pl-3 space-y-1" data-acc-panel>
							<a href="<?php echo esc_url( $item['href'] ); ?>" class="block py-1.5 text-sm font-semibold text-brand">All <?php echo esc_html( $item['label'] ); ?></a>
							<?php foreach ( $item['mega']['columns'] as $col ) : ?>
								<?php foreach ( $col['items'] as $sub ) : ?>
									<a href="<?php echo esc_url( $sub['href'] ); ?>" class="block py-1.5 text-sm text-gray-600"><?php echo esc_html( $sub['label'] ); ?></a>
								<?php endforeach; ?>
							<?php endforeach; ?>
						</div>
					<?php else : ?>
						<a href="<?php echo esc_url( $item['href'] ); ?>" class="block py-3 text-base font-medium text-gray-800"><?php echo esc_html( $item['label'] ); ?></a>
					<?php endif; ?>
				</div>
			<?php endforeach; ?>
			<a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="mt-4 inline-flex w-full items-center justify-center gap-2 h-11 bg-brand text-white text-sm font-medium rounded-full">
				Request a Quote
			</a>
		</nav>
	</div>
</header>
