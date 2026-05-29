<?php
/**
 * Title: Hero — split (copy + image)
 * Slug: mewepak/hero
 * Categories: mewepak-sections
 * Description: Premium split hero: eyebrow, large headline, intro, dual CTAs on the left; product image on the right. WordPress-friendly replacement for the React floating-pouch hero.
 * Keywords: hero, banner, header, intro
 */
?>
<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|70","bottom":"var:preset|spacing|70"}}},"backgroundColor":"surface","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-surface-background-color has-background" style="padding-top:var(--wp--preset--spacing--70);padding-bottom:var(--wp--preset--spacing--70)">
	<!-- wp:columns {"align":"wide","verticalAlignment":"center","style":{"spacing":{"blockGap":{"left":"var:preset|spacing|60"}}}} -->
	<div class="wp-block-columns alignwide are-vertically-aligned-center">
		<!-- wp:column {"verticalAlignment":"center","width":"52%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:52%">
			<!-- wp:paragraph {"className":"mewepak-eyebrow"} -->
			<p class="mewepak-eyebrow">PACKAGING SOLUTIONS PROVIDER</p>
			<!-- /wp:paragraph -->
			<!-- wp:heading {"level":1,"style":{"typography":{"lineHeight":"1.05"}}} -->
			<h1 class="wp-block-heading" style="line-height:1.05">Premium flexible packaging, engineered for your brand</h1>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"textColor":"muted","style":{"typography":{"fontSize":"1.2rem"}}} -->
			<p class="has-muted-color has-text-color" style="font-size:1.2rem">From stand-up pouches to retort and recyclable films — a customized packaging factory trusted by brands worldwide since 2007.</p>
			<!-- /wp:paragraph -->
			<!-- wp:buttons {"style":{"spacing":{"blockGap":"1rem"}}} -->
			<div class="wp-block-buttons">
				<!-- wp:button -->
				<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="/contact">Get a Free Quote</a></div>
				<!-- /wp:button -->
				<!-- wp:button {"className":"is-style-outline"} -->
				<div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button" href="/products">Explore Products</a></div>
				<!-- /wp:button -->
			</div>
			<!-- /wp:buttons -->
		</div>
		<!-- /wp:column -->
		<!-- wp:column {"width":"48%","className":"mewepak-ratio-4-3"} -->
		<div class="wp-block-column mewepak-ratio-4-3" style="flex-basis:48%">
			<!-- wp:image {"sizeSlug":"large","style":{"border":{"radius":"1.5rem"}}} -->
			<figure class="wp-block-image size-large" style="border-radius:1.5rem"><img src="https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?w=900&h=700&fit=crop" alt="Flexible packaging pouches"/></figure>
			<!-- /wp:image -->
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
</div>
<!-- /wp:group -->
