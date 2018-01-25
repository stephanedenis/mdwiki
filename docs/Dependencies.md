[![Build Status](https://travis-ci.org/Dynalon/mdwiki.png?branch=master)](https://travis-ci.org/Dynalon/mdwiki)
===

```plantuml

component "mdwiki.html" as mdwiki{
    [prism] as prism
    [jquery colorbox] as jqcb
    [handlebars] as handlebar
    [affix] as affix
    [dropdown] as dropdown
    [jquery] as jquery
}

[plantuml] as plantuml
[config.json] as config
[navigation.json] as navigation

mdwiki --> config
mdwiki --> navigation
mdwiki --> Http
Http --> plantuml
```

Gimmicks
---

Libraries
---

*prism.js
    Syntax highlighter
    http://prismjs.com/
*jquery.colorbox.js
    Customizable lightbox for jquery
    http://www.jacklmoore.com/colorbox/

References
---

*handlebars.runtime.js
    Help for template
    http://handlebarsjs.com/
*affix.js

*dropdown.js

*jquery.js