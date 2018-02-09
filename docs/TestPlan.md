# Test plan

## NavBar

Look at the top of the page

## Navigation menu

Look on the left of the page

## Markdown styling

* test
* test2

> This is a paragraph
that continue

*Italics* OR _Italics_

**Bold** OR __Bold__

**__Italics and bold__**

~~Scratch~~

## Images

### Multiple images

![](http://placekitten.com/g/1200/300 "A kitten")

![](http://placekitten.com/g/550/450 "First of two kittens")
![](http://placekitten.com/g/550/450 "Second of two kittens")

![](http://placekitten.com/g/400/350)
![](http://placekitten.com/g/400/350)
![](http://placekitten.com/g/400/350)

### Image floating
![](http://placekitten.com/g/800/800)
The above image floats left to this text.
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.

The images below float right to this text.
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
![](http://placekitten.com/g/600/600)
![](http://placekitten.com/g/600/600)

## Alerts (Bootstrap)

This is a warning in yellow:

Warning: This is a warning

This is a note in blue:

Note: This is a note

This is a hint in green:

Hint: This is a hint

## Missing gimmick (non existing/not implemented gimmicks)

`gimmick:qwerty ({ID: '1', o: {l:'lol'}})`
`gimmick:abcdef`

```gimmick:Some
   Some text
   With lines and shit
```

[gimmick:SomeLink](WOW)

[gimmick:SLNK ({ID:3})](l)

## Prism (code syntax coloring)

~~~ csharp
int a = 10;

int b = 15;

int c = a + b;
~~~

## Embed Youtube

[](http://www.youtube.com/watch?v=RMINSD7MmT4)

## Plantuml

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

## Disqus

[gimmick:disqus](comradeNixco)
