# How to Run MDWiki

## Needed files

In order to run MDwiki on your website, your server need to be able tohave and serve the following files:

* `config.json`
  To configure the behavioour of MDwiki
  * [More info on how to customize MDwiki](http://dynalon.github.io/mdwiki/#!customizing.md)
* `navigation.md`
  If you want/need a header nav bar. This markdown file consist in a listing of links.

 Note: Exemple of a link to put in the navigation.md `[MDwiki](index.md)`

* `mdwiki.html`
  This file is the (up to date) `mdwiki.html` that can be renamed to what you want or need it to.

## Configuration

You can configure MDwiki with the `config.json` file. These are some of the options available:
Option name|possible value
-----------|--------------
`useTheme` | `"Theme name"`
`useSideSubMenu` | `true` or `false`