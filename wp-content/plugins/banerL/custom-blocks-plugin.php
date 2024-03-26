<?php

/**
 * Plugin Name: Carousel Blocks Plugin
 * Description: Plugin for custom carousel blocks.
 * Version: 1.0
 * Author: Your Name
 * Text Domain: carousel-blocks-plugin
 */

// Подключаем скрипты и стили
function carousel_blocks_plugin_enqueue_scripts()
{
    wp_enqueue_script(
        'carousel-blocks-plugin-script',
        plugins_url('index.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor'), // Зависимости
        filemtime(plugin_dir_path(__FILE__) . 'index.js'), // Версия скрипта
        true // Подключаем в футере страницы
    );

    wp_enqueue_style(
        'carousel-blocks-plugin-style',
        plugins_url('banersBlocks.module.scss', __FILE__),
        array(), // Зависимости
        filemtime(plugin_dir_path(__FILE__) . 'banersBlocks.module.scss') // Версия стилей
    );
}
add_action('enqueue_block_editor_assets', 'carousel_blocks_plugin_enqueue_scripts');

// Регистрируем блок
function carousel_blocks_plugin_register_block()
{
    register_block_type(
        'carousel-blocks-plugin/car-cards',
        array(
            'editor_script' => 'carousel-blocks-plugin-script',
            'editor_style' => 'carousel-blocks-plugin-style',
            'render_callback' => 'carousel_blocks_plugin_render_block',
        )
    );
}
add_action('init', 'carousel_blocks_plugin_register_block');

// Колбэк для отображения блока
function carousel_blocks_plugin_render_block($attributes)
{
    // Здесь может быть ваш код для отображения блока
    return '<div class="banner">Hello, this is a custom carousel block!</div>';
}
