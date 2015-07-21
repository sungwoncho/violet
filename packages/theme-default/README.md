# Default Theme

This is the theme that Violet uses by default.

## Dependencies

* Bourbon (SCSS mixin library)
* Neat (SCSS grid mixin)

The dedendencies are configured in `client/scss.json`.

## Design

To control the load order, and separate the concern, all styles are defined in
partials (prefixed by underscore), and required in `main.scss`.
