<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'p1PpnQFv16TOqcToW+og+DBYbM0CpFuS2WL8V0V1uqJH3yS2rNnrt/fd8Z8UG13hVzAjnFK7KfjcVfJgF/8afA==');
define('SECURE_AUTH_KEY',  'IgMQaB8H7eH9mYp+S8WKjaX5DVJ4s4AxzthdJBF73yOryhRzzTXH2xswrDdhQIl7AhJxOeryQI2d6bIxgHfSSw==');
define('LOGGED_IN_KEY',    '6JdBoaz/7k3TrVUyQLdg7jyETaY01rXcWkS/uAicH8oBS0zYepx+9PfzB5NfVd30b66aG4tbmIZB9o4mcEg4yg==');
define('NONCE_KEY',        'Yi3uBaFhEt3K4W9XreLJ10XXclTQPJd8h7h74iEV86OjRmMynRdp4oZj+tMN5vyLqGr+w7nWXFU8Nr9erfaKIA==');
define('AUTH_SALT',        'k1CKLLatWUvi1H4cFgsWi33zvHxhmFeSJXdGuNcue+hDHdiC3LG6OReXyXK9oOOz4ggvmHp9iMt/m5NrQYoXyg==');
define('SECURE_AUTH_SALT', 'YA++WenKR529uSjTGSNc5vHFE20H8hZMlHTcIEeEzW9qcct2WKQ6zqaPBiO7mrVomN7JKvbLGlOlpQXdk56agg==');
define('LOGGED_IN_SALT',   '5J+JZ89cGZEtzUuyiQTRsHjqLO16anPFemm14oGCDgt6MAUiyZVOveeIAgBCFmPTFBMBevdF4k6t8V6ChEZB+w==');
define('NONCE_SALT',       '0hnJceTiU8hs8gJtjjB489ZBcw4mUTOOGWagxJ+k3yXatYnrNR83nWTQTwQyEwCtiE0WeTERjSixxJH0aPSS0w==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
