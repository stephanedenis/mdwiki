# [![Build Status](https://travis-ci.org/Dynalon/mdwiki.png?branch=master)](https://travis-ci.org/Dynalon/mdwiki)

## Dependencies organisation

```plantuml
left to right direction

component "mdwiki.html" as mdwiki{
    [prism] as prism
    [jquery] as jquery
    [bootstrap]
    [node]
}

[config.json] as config
[navigation.md] as navigation
[disqus] as disqus
[youtube embed] as youtube
[plantuml] as plantuml

mdwiki -up-> config
mdwiki -up-> navigation
mdwiki --> Http
Http ---> disqus
Http ---> youtube
Http ---> plantuml
```

## Descriptions

Name|Description
----|-----------
[prism](http://prismjs.com/)|Syntax highlighter
[jquery](https://jquery.com/)|See website
[disqus](https://disqus.com/)|Let the users chat on the page
[youtube_embed](https://developers.google.com/youtube/player_parameters)|Run youtube videos
[plantuml](http://plantuml.com/)|Display UML diagrams