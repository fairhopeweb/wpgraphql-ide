=== WPGraphQL IDE ===
Contributors: jasonbahl, joefusco
Tags: headless, decoupled, graphql, devtools
Requires at least: 5.7
Tested up to: 6.5
Stable tag: 4.0.1
Requires PHP: 7.4
License: GPL-3
License URI: https://www.gnu.org/licenses/gpl-3.0.html

GraphQL IDE for WPGraphQL

== Description ==

GraphQL IDE for WPGraphQL

== Installation ==

== Frequently Asked Questions ==

= Where can I find the non-compressed JavaScript and CSS source code? =

The non-compressed source code for the JavaScript and CSS files is available in the following directories:

- **Scripts**: [src/ directory](https://github.com/wp-graphql/wpgraphql-ide/tree/main/src)
- **Styles**: [styles/ directory](https://github.com/wp-graphql/wpgraphql-ide/tree/main/styles)

You can view or download the source code directly from the GitHub repository.

= What are some of the major dependencies used in the plugin? =

The WPGraphQL IDE plugin includes several important dependencies. You can learn more about these libraries at the following links:

- **GraphQL.js**: [https://github.com/graphql/graphql-js](https://github.com/graphql/graphql-js)
- **GraphiQL**: [https://github.com/graphql/graphiql](https://github.com/graphql/graphiql)
- **Vaul**: [https://github.com/emilkowalski/vaul](https://github.com/emilkowalski/vaul)

== Screenshots ==

== Changelog ==

= 4.0.1 =

### Patch Changes

- 477a555: ### Added

  - Introduced `wp_localize_escaped_data()` function for recursively escaping data before localizing it in WordPress. This ensures safe output of strings, URLs, integers, and nested arrays when passing data to JavaScript, using native WordPress functions like `wp_kses_post()` and `esc_url()`.

  ### Improved

  - Enhanced security by ensuring all localized data is properly sanitized before being passed to `wp_localize_script()`, preventing potential XSS vulnerabilities and ensuring safe use of dynamic data in JavaScript.

- 4da3973: - chore: Bump the npm_and_yarn group across 1 directory with 7 updates

= 4.0.0 =

### Major Changes

- eda911d: Updated the plugin's custom filter and action names to be consistent across the plugin

### Patch Changes

- eda911d: Fixed bug where credentials were being sent in the headers unnecessarily under certain conditions

= 3.0.0 =

### Major Changes

- 7a07c0c: Change JavaScript hook names to have consistent prefix, and update codebase to meet WordPress.org standards.

[View the full changelog](https://github.com/wp-graphql/wpgraphql-ide/blob/main/CHANGELOG.md)