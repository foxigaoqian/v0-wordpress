<?php
/**
 * Title: Newsletter Signup
 * Slug: mewepak/newsletter
 * Categories: mewepak-cta
 * Description: Compact newsletter signup band. Replace the inline input with your email-marketing plugin shortcode.
 * Keywords: newsletter, subscribe, email, signup
 */
?>
<!-- wp:group {"align":"wide","className":"mewepak-reveal","style":{"spacing":{"padding":{"top":"var:preset|spacing|50","bottom":"var:preset|spacing|50","left":"var:preset|spacing|50","right":"var:preset|spacing|50"}},"border":{"radius":"1.5rem"}},"backgroundColor":"surface-2","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignwide mewepak-reveal has-surface-2-background-color has-background" style="border-radius:1.5rem;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)">
	<!-- wp:heading {"textAlign":"center","level":3} --><h3 class="wp-block-heading has-text-align-center">Packaging insights, in your inbox</h3><!-- /wp:heading -->
	<!-- wp:paragraph {"align":"center","textColor":"muted"} --><p class="has-text-align-center has-muted-color has-text-color">Trends, material guides and sustainability updates. No spam.</p><!-- /wp:paragraph -->
	<!-- wp:html -->
	<!-- Replace with your newsletter plugin shortcode (e.g. Mailchimp, MailPoet). -->
	<form class="mewepak-newsletter" onsubmit="return false" style="display:flex;gap:0.5rem;max-width:480px;margin:1rem auto 0">
		<input type="email" placeholder="you@company.com" style="flex:1;padding:0.75rem 1rem;border:1px solid #e2e8f0;border-radius:9999px">
		<button style="padding:0.75rem 1.5rem;border:0;border-radius:9999px;background:#00cfca;color:#fff;font-weight:600">Subscribe</button>
	</form>
	<!-- /wp:html -->
</div>
<!-- /wp:group -->
