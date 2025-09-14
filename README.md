## mdwiki is obsolete. 

Consider using my new ultralight application https://ontowave.org instead of this one.


See https://stephanedenis.github.io/mdwiki for documentation about this fork

---

[![Build Status](https://travis-ci.org/Dynalon/mdwiki.png?branch=master)](https://travis-ci.org/Dynalon/mdwiki)


MDwiki
======

100% static single file CMS/Wiki done purely with client-side Javascript and HTML5.

See http://www.mdwiki.info for more info and documentation.
------


Download
--------

See <https://github.com/Dynalon/mdwiki/releases> for readily precompiled releases.

How to build from source
------------------------
(applies to master branch, stable may differ)

1. Install node.js >= 0.10 and npm (if not included)
```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt install -y nodejs
```
2. Clone the mdwiki repo
3. Install deps and build MDwiki (you need automake installed - if you are on Windows check the contents of the Makefile for the list of commands to run them manually):

```
    make
```

4. Find the `mdwiki.html` in the `dist/` folder

5. Development

For development, use

    grunt devel 

To get unminified source code compiled to `dist/mdwiki-debug.html`, as well as auto file watching and livereload support. Symlink the development mdwiki file into your webroot for testing.
