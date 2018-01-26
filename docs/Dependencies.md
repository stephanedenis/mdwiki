[![Build Status](https://travis-ci.org/Dynalon/mdwiki.png?branch=master)](https://travis-ci.org/Dynalon/mdwiki)
===

```plantuml

component "mdwiki.html" as mdwiki{
    [prism] as prism
    [jquery colorbox] as jqcb
    [jquery] as jquery
    [bootstrap]
    [node]
}

[plantuml] as plantuml
[config.json] as config
[navigation.md] as navigation

mdwiki --> config
mdwiki --> navigation
mdwiki --> Http
Http --> plantuml

```

Name|Description|Link
----|-----------|----
prism|Syntax highlighter|http://prismjs.com/
jquery colorbox|Customizable lightbox for jquery|http://www.jacklmoore.com/colorbox/
jquery|See website|https://jquery.com/
prism
googlemaps
disqus
editme
facebooklike
forkmeongithub
gist
iframe
math
leaflet
twitter
youtube_embed
yuml