# MDwiki documentation

[![Build Status](https://travis-ci.org/Dynalon/mdwiki.png?branch=master)](https://travis-ci.org/Dynalon/mdwiki)

## MDwiki

100% static single file CMS/Wiki done purely with client-side Javascript and HTML5.

The version on this fork corects some bugs and reimplements gimmicks that aren't fully done in the master branch of [Dynalon's repo](https://github.com/Dynalon/mdwiki). Supported gimmicks are described in the gimmick page ([Gimmicks](Gimmicks.md)).

Tip: See [MDwiki.info](http://www.mdwiki.info) for more info and documentation

## Download

See <https://github.com/Dynalon/mdwiki/releases> for readily precompiled releases.

## How to build from source

(applies to master branch, stable may differ)

1. Install node.js >= 0.10 and npm (if not included)
2. Clone the mdwiki repo
3. Install deps and build MDwiki (you need automake installed - if you are on Windows check the contents of the Makefile for the list of commands to run them manually):
    ```bash
    make
    ```
4. Find the `mdwiki.html` in the `dist/` folder

5. Development
    For development, use
    ```bash
    grunt devel
    ```
    To get unminified source code compiled to `dist/mdwiki-debug.html`, as well as auto file watching and livereload support. Symlink the development mdwiki file into your webroot for testing.
