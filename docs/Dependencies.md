[![Build Status](https://travis-ci.org/Dynalon/mdwiki.png?branch=master)](https://travis-ci.org/Dynalon/mdwiki)
===

```plantuml
left to right direction

component "mdwiki.html" as mdwiki{
    [prism] as prism
    [jquery colorbox] as jqcb
    [jquery] as jquery
    [bootstrap]
    [node]
}


[config.json] as config
[navigation.md] as navigation
[googlemaps] as googlemaps
[disqus] as disqus
[facebook like] as fblike
[fork me on git hub] as fmogh
[gist] as gist
[mathjax] as mathjax
[twitter] as twitter
[youtube embed] as youtube
[yuml] as yuml
[plantuml] as plantuml


mdwiki -up-> config
mdwiki -up-> navigation
mdwiki --> Http
Http ---> googlemaps
Http ---> disqus
Http ---> fblike
Http ---> fmogh
Http ---> gist
Http ---> mathjax
Http ---> twitter
Http ---> youtube
Http ---> yuml
Http ---> plantuml

```

Name|Description|Link
----|-----------|----
prism|Syntax highlighter|http://prismjs.com/
jquery colorbox|Customizable lightbox for jquery|http://www.jacklmoore.com/colorbox/
jquery|See website|https://jquery.com/
googlemaps|Load a map|https://developers.google.com/maps/documentation/javascript/
disqus|Let the users chat on the page| https://help.disqus.com/customer/portal/articles/1104788-web-integration
facebooklike|Let you add a like button from facebook|https://developers.facebook.com/docs/plugins/like-button
forkmeongithub|Put a ribbon that links to the github|https://github.com/blog/273-github-ribbons
gist|Repo for files|https://help.github.com/articles/about-gists/
mathjax|Display math operations|https://www.mathjax.org/
leaflet|interactive map|http://leafletjs.com/
twitter|Use twitter|https://dev.twitter.com/web/javascript
youtube_embed|Run youtube videos|https://developers.google.com/youtube/player_parameters
yuml|Display UML diagrams| https://yuml.me/
plantuml|Display UML diagrams|http://plantuml.com/