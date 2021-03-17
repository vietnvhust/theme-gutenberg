<div class="entry-content">
	<?php
	if ( is_single() ) {
		the_content(
			sprintf(
				wp_kses(
				/* translators: %s: Name of current post. */
					__( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'chestnut' ),
					[
						'span' => [
							'class' => []
						]
					]
				),
				the_title( '<span class="screen-reader-text">"', '"</span>', false )
			)
		);

		wp_link_pages(
			[
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'chestnut' ),
				'after'  => '</div>',
			]
		);

	} else {
		chestnut_the_excerpt( 200 );
		printf( '<br>' );
		echo chestnut_excerpt_more();
	}

	?>
</div>
