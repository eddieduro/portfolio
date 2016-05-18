<?php

/**
 * @file
 * Main view template.
 *
 * Variables available:
 * - $classes_array: An array of classes determined in
 *   template_preprocess_views_view(). Default classes are:
 *     .view
 *     .view-[css_name]
 *     .view-id-[view_name]
 *     .view-display-id-[display_name]
 *     .view-dom-id-[dom_id]
 * - $classes: A string version of $classes_array for use in the class attribute
 * - $css_name: A css-safe version of the view name.
 * - $css_class: The user-specified classes names, if any
 * - $header: The view header
 * - $footer: The view footer
 * - $rows: The results of the view query, if any
 * - $empty: The empty text to display if the view is empty
 * - $pager: The pager next/prev links to display, if any
 * - $exposed: Exposed widget form/info to display
 * - $feed_icon: Feed icon to display, if any
 * - $more: A link to view more, if any
 *
 * @ingroup views_templates
 */
?>
<div class="skewed-bg" >
  <div id="work"></div>
  <div class="projects <?php print $classes; ?>" >
    <?php print render($title_prefix); ?>
    <?php if ($title): ?>
      <span class= "project-section"><?php print $title; ?></span>
    <?php endif; ?>
    <?php print render($title_suffix); ?>
    <?php if ($header): ?>
      <div class="view-header">
        <?php print $header; ?>
      </div>
    <?php endif; ?>

    <?php if ($exposed): ?>
      <div class="view-filters">
        <?php print $exposed; ?>
      </div>
    <?php endif; ?>

    <?php if ($attachment_before): ?>
      <div class="attachment attachment-before">
        <?php print $attachment_before; ?>
      </div>
    <?php endif; ?>

    <?php if ($rows): ?>
      <div class="view-content">
        <?php print $rows; ?>
      </div>
    <?php elseif ($empty): ?>
      <div class="view-empty">
        <?php print $empty; ?>
      </div>
    <?php endif; ?>

    <?php if ($pager): ?>
      <?php print $pager; ?>
    <?php endif; ?>

    <?php if ($attachment_after): ?>
      <div class="attachment attachment-after">
        <?php print $attachment_after; ?>
      </div>
    <?php endif; ?>

    <?php if ($more): ?>
      <?php print $more; ?>
    <?php endif; ?>

    <?php if ($footer): ?>
      <div class="view-footer">
        <?php print $footer; ?>
      </div>
    <?php endif; ?>

    <?php if ($feed_icon): ?>
      <div class="feed-icon">
        <?php print $feed_icon; ?>
      </div>
    <?php endif; ?>
    <a class="smoothScroll" href="#social"><i class="fa fa-chevron-down about-arrow" aria-hidden="true"></i></a>
  </div><?php /* class view */ ?>
</div>
<div class='social'>
  <h2 class='social-section'>Connect</h2>
</div>
<div id="social"></div>
 <div class="social-media">
  <a href="https://www.linkedin.com/in/edwardduro"><i class="fa fa-linkedin social-media-icon" aria-hidden="true"></i></a>
  <a href="https://www.twitter.com/e_jamesduro"><i class="fa fa-twitter social-media-icon" aria-hidden="true"></i></a>
  <a href="https://www.github.com/eddieduro"><i class="fa fa-github social-media-icon" aria-hidden="true"></i></a>
  <span><a class="smoothScroll" href="#about" id="social-arrow"><i class="fa fa-chevron-down social-arrow" aria-hidden="true"></i></a></span>
</div>
