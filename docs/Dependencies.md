[![Build Status](https://travis-ci.org/Dynalon/mdwiki.png?branch=master)](https://travis-ci.org/Dynalon/mdwiki)
===

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

Name|Description|Link
----|-----------|----
prism|Syntax highlighter|http://prismjs.com/
jquery|See website|https://jquery.com/
disqus|Let the users chat on the page| https://help.disqus.com/customer/portal/articles/1104788-web-integration
youtube_embed|Run youtube videos|https://developers.google.com/youtube/player_parameters
plantuml|Display UML diagrams|http://plantuml.com/

this is a test
test
![](http://placekitten.com/g/1200/300 "A kitten")

test
test
![](http://placekitten.com/g/1200/300 "A kitten")
test
test

![](http://placekitten.com/g/1200/300 "A kitten")
test
test

``` csharp

int i = 10;

int b = 15;

int c = i + b;
```