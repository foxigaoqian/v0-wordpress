<?php
/**
 * Title: Quote Request Form
 * Slug: mewepak/quote-form
 * Categories: mewepak-cta
 * Description: Lead-generation quote form area. Uses the core HTML block as a placeholder — replace with a form plugin (Contact Form 7, WPForms, Fluent Forms) shortcode for real submissions.
 * Keywords: form, quote, contact, lead, inquiry
 */
?>
<!-- wp:group {"className":"mewepak-card","style":{"spacing":{"padding":"var:preset|spacing|50"},"border":{"radius":"1.5rem","width":"1px","color":"var:preset|color|line"}},"backgroundColor":"base","layout":{"type":"constrained"}} -->
<div class="wp-block-group mewepak-card has-border-color has-base-background-color has-background" style="border-color:var(--wp--preset--color--line);border-width:1px;border-radius:1.5rem;padding:var(--wp--preset--spacing--50)">
	<!-- wp:heading {"level":3} --><h3 class="wp-block-heading">Get a Free Quote</h3><!-- /wp:heading -->
	<!-- wp:paragraph {"textColor":"muted"} --><p class="has-muted-color has-text-color">Fill in your details and we'll get back to you within 24 hours.</p><!-- /wp:paragraph -->
	<!-- wp:html -->
	<!--
		REPLACE THIS BLOCK with your form plugin shortcode, e.g.:
		[contact-form-7 id="123" title="Quote Request"]
		The static markup below is only a visual placeholder.
	-->
	<form class="mewepak-quote-form" onsubmit="return false">
		<p><label>Full Name<br><input type="text" name="name" placeholder="e.g. John Smith" style="width:100%;padding:0.7rem 1rem;border:1px solid #e2e8f0;border-radius:0.6rem"></label></p>
		<p><label>Email<br><input type="email" name="email" placeholder="e.g. john@company.com" style="width:100%;padding:0.7rem 1rem;border:1px solid #e2e8f0;border-radius:0.6rem"></label></p>
		<p><label>Phone Number<br><input type="tel" name="phone" placeholder="e.g. +1 555 000 1234" style="width:100%;padding:0.7rem 1rem;border:1px solid #e2e8f0;border-radius:0.6rem"></label></p>
		<p><label>Message<br><textarea name="message" rows="4" placeholder="Tell us about your packaging needs..." style="width:100%;padding:0.7rem 1rem;border:1px solid #e2e8f0;border-radius:0.6rem;resize:vertical"></textarea></label></p>
	</form>
	<!-- /wp:html -->
	<!-- wp:buttons -->
	<div class="wp-block-buttons">
		<!-- wp:button --><div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="#">Submit</a></div><!-- /wp:button -->
	</div>
	<!-- /wp:buttons -->
</div>
<!-- /wp:group -->
