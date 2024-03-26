<?php

/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки базы данных
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'react_wp');

/** Имя пользователя базы данных */
define('DB_USER', 'admin');

/** Пароль к базе данных */
define('DB_PASSWORD', 'admin');

/** Имя сервера базы данных */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8mb4');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');


//удалить в конце
define('FS_METHOD', 'direct');

/* Это всё, дальше не редактируем. Успехов! */



/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ' c)+$U&wkAyoK}2<BeXK>?c^82+O?ATL]Z/L1;|hx9B0dWWS)OY9Vy&re-Gx_Dal');
define('SECURE_AUTH_KEY',  'XDT:54O@)a7.Ni|i)Phc4*Q5e1@.;DXqbBKg_Y4x{6 Z(q<sA=,9<Ot`X3f6kECx');
define('LOGGED_IN_KEY',    'O4*o6a/W]zowF J6L} L@]3^2,8qH[?j2I4x$[>[D HuIS>c,+<6|_/40irS= `P');
define('NONCE_KEY',        'Y6pB8wKMZsiZh]ZF=V?%:! WMhPaEy*V0&t4N8S=J~hOcXYAHMlcW]{g[-@^X=;#');
define('AUTH_SALT',        ' y*]+=0w<7&:b0M[.adri*$zbbHAXBx[GoEQSYQG L#sEj53a2mJk=4K]!~09gb<');
define('SECURE_AUTH_SALT', 'u`7wP~&_0~(McFw]M6J4{/?7dAjuK)zPF[+nF5XF#gCKY,>OW*$)vc99BG7|b-tG');
define('LOGGED_IN_SALT',   'M*H%3HL[#TFnl[Uy<.+pEMWtJ-m.Eb]c2{q LgmZT|::B`.8d*ETL8*-sIWjzF ^');
define('NONCE_SALT',       'N~w>Fe5HZihU^o_Bve0CGB|k(yNcacs`q2`WKeUk;tW78meT-jB!/3!E3xo_MY[&');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';





// define('WP_DEBUG', false);
define('WP_DEBUG', true);









/** Абсолютный путь к директории WordPress. */
if (!defined('ABSPATH')) {
	define('ABSPATH', __DIR__ . '/');
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
