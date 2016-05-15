<?php
/**
 * @file
 * about_me.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function about_me_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function about_me_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function about_me_node_info() {
  $items = array(
    'about' => array(
      'name' => t('About'),
      'base' => 'node_content',
      'description' => t('about me section'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
