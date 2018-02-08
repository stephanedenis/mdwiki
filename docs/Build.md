[![Build Status](https://travis-ci.org/Dynalon/mdwiki.png?branch=master)](https://travis-ci.org/Dynalon/mdwiki)

How to build MDWiki
======

1. Install node.js >= 0.10 and npm (if not included)
2. Install deps and build MDwiki (you need automake installed - if you are on Windows check the contents of the Makefile for the list of commands to run them manually):

  ```bash
  make
  ```

3. Find the `mdwiki.html` in the `dist/` folder

4. Development

For development, use

    grunt devel 

To get unminified source code compiled to `dist/mdwiki-debug.html`, as well as auto file watching and livereload support. Symlink the development mdwiki file into your webroot for testing.