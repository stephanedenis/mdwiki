# Test plan

## NavBar

Look at the top of the page

## Navigation menu

Look on the left of the page

## Markdown styling

* test
* test2

>This is a paragraph
that continue

*Italics* OR _Italics_

**Bold** OR __Bold__

**__Italics and bold__**

~~Scratch~~

## Images

![](http://placekitten.com/g/1200/300 "A kitten")

## alerts

This is a warning in yellow:

Warning: This is a warning

This is a note in blue:

Note: This is a note

This is a hint in green:

Hint: This is a hint

## Missing gimmick

`gimmick:qwerty ({ID: '1', o: {l:'lol'}})`
`gimmick:abcdef`

```gimmick:Some
   Some text
   With lines and shit
```

[gimmick:SomeLink](WOW)

[gimmick:SLNK ({ID:3})](l)

## prism

~~~ csharp
int a = 10;

int b = 15;

int c = a + b;
~~~

## youtube_embed

[](http://www.youtube.com/watch?v=RMINSD7MmT4)

## plantuml

This is a plantuml graphic

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

## disqus

[gimmick:disqus](comradeNixco)
