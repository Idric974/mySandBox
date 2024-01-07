<?php defined('ABSPATH') || exit; ?>

<div class="su-posts su-posts-single-post <?php echo esc_attr( $atts['class'] ); ?>">
<?php 
   // the query
   $the_query = new WP_Query( array(
     'category_name' => 'portrait',
      'posts_per_page' => '1',
   )); 
?>

<?php if ( $the_query->have_posts() ) : ?>
  <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>

  <h2 class="su-post-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
  
  <?php the_excerpt(); ?>

  <?php endwhile; ?>
  <?php wp_reset_postdata(); ?>

<?php else : ?>
  <p><?php __('No News'); ?></p>
<?php endif; ?>

</div>