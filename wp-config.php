<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'q+8ZYP8tC?#nnwW?`4xU5Oji;?B=0Ujp<Wt5HkrAZq|o9<wy&/pfYd+<a&o(L9PD' );
define( 'SECURE_AUTH_KEY',   '4$tb|s^ya U<F^go4iCL=FOVAPIIR1ng.$kMJlrQ.aaRcW<`TWcK<0/ult2]&Sm4' );
define( 'LOGGED_IN_KEY',     'KugTF*.+c=#$}^RX!hv|sn0:CNJB0yZb}|RP}mlU, .I_m^Y_3^a^(6-=-9Q5rQr' );
define( 'NONCE_KEY',         '5*B>KWr%N6Q&7g`8?++hmEa%z@vDFduIYAM5[m;K2i+ `$<u~R:(;Rh=`vW#J%fW' );
define( 'AUTH_SALT',         'sV*~^MEcm*XX%Qhdl(L(I!6;I+:EeqP#6lKN4~u!,r!93GdYjv,e@n.[8goD;C?R' );
define( 'SECURE_AUTH_SALT',  'q}Zsj8uV]H2h`-741&&1XG(pBH$n sxKj1ni-Qw;ST3*1k*a(gO5%R!3pU!fW%f3' );
define( 'LOGGED_IN_SALT',    'VxB&%)#u8GaqJ7I2Z(RQ:3@itr8(.]zO1gSw:,ct.(ZZ!{^UgoDE>Lp.Slkp:Xdg' );
define( 'NONCE_SALT',        '<8:KGWB8T.EiMM>~G5aUp$+IbEk#Rnd|CMf@&5R/4p%OyoBsq_:t?<CVQnTbl8iq' );
define( 'WP_CACHE_KEY_SALT', '?m`n~Cs{^@Xm,DjV{`;5~ABKh8vSF0Hb]{I1w:w~,8B8q/.Q|aBBuPwA%%&K)rDS' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
