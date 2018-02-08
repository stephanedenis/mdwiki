# Gimmick core system

## What is the gimmick system

The gimmick systems let's writers of markdown files to add dynamic or external content to their documents. Gimmicks are written inside single line or multiline fences or like links. [How to use them](#HowToUseThem)

## When it's used and how to use gimmicks in a markdown file

### When

Gimmicks are used in a markdown files and are written as followed in them:

### How

#### Single line

A single line gimmick should be written like that:
![singleLineNoParams](/img/singleLineNoParams.png)

or like that:
![singleLineWithParams](/img/singleLineWithParams.png)

#### Multi line

A multiline gimmick should be written like that:
![multiline](/img/multiline.png)

#### Link

A link gimmick should be written like that:
![linkNoParams](/img/linkNoParams.png)

or like that:
![linkWithParams](/img/linkWithParams.png)

[More infos about link gimmicks](http://dynalon.github.io/mdwiki/#!gimmicks.md)

Note: multiline gimmicks can't have options. If a "multiline" gimmick has options, it will be considered a singleline gimmick by the sytstem.

## How it works (internally)

After the initial transformation of the markdown to html, a parser will check the page to see which gimmicks it will need. At this step, the system will only load needed gimmicks, detected by the parser. The gimmicks will then run their task during their subscribed stage. As of now (January 2018) the gimmicks system is very error prone. A lot of correction should (and have to) be made. In example, one could write a gimmick in his MD document and make a typo in the name of the gimmick and the MDwiki system would stop in error making it impossible to transform the document to html and keeping the document *invisible* since the running proccess of MDwiki isn't able to continue to it's end. One solution could be to have a system of default gimmick(s) that kicks in in case or erroneus gimmick detection. Also if a gimmick isn't used in it's required mode, it will fail, failing the system with it in some case like in a typoed one.