<?php
/**
 * Title: Blog Cards (Query Loop)
 * Slug: mewepak/blog-cards
 * Categories: mewepak-cards
 * Description: Three-column latest-posts grid using the core Query Loop with featured image, category, title and excerpt. Fully dynamic.
 * Keywords: blog, posts, cards, query, grid, news
 */
?>
<!-- wp:query {"queryId":0,"query":{"perPage":3,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","inherit":false},"align":"wide","className":"mewepak-reveal"} -->
<div class="wp-block-query alignwide mewepak-reveal">
	<!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
		<!-- wp:group {"className":"mewepak-card","style":{"spacing":{"padding":"0"},"border":{"radius":"1.25rem","width":"1px","color":"var:preset|color|line"}},"backgroundColor":"base","layout":{"type":"default"}} -->
		<div class="wp-block-group mewepak-card has-border-color has-base-background-color has-background" style="border-color:var(--wp--preset--color--line);border-width:1px;border-radius:1.25rem;overflow:hidden">
			<!-- wp:post-featured-image {"isLink":true,"aspectRatio":"4/3","className":"mewepak-ratio-4-3"} /-->
			<!-- wp:group {"style":{"spacing":{"padding":"var:preset|spacing|40","blockGap":"0.5rem"}}} -->
			<div class="wp-block-group" style="padding:var(--wp--preset--spacing--40)">
				<!-- wp:post-terms {"term":"category","style":{"typography":{"fontSize":"0.75rem","fontWeight":"600","textTransform":"uppercase","letterSpacing":"0.05em"}},"textColor":"accent"} /-->
				<!-- wp:post-title {"isLink":true,"level":3,"style":{"typography":{"fontSize":"1.25rem"}}} /-->
				<!-- wp:post-excerpt {"moreText":"","excerptLength":18,"textColor":"muted"} /-->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:group -->
	<!-- /wp:post-template -->
</div>
<!-- /wp:query -->
