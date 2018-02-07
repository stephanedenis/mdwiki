# Gimmick core system

## What is the gimmick system

The gimmick systems let's writers of markdown files to add dynamic or external content to their documents. Gimmicks are written inside single line or multiline fences or like links. [How to use them](#HowToUseThem)

## When it's used and how to use gimmicks in a markdown file

### When

Gimmicks are used in a markdown files and are written as followed in them:

### How

* Single line gimmicks `singleline`: 
  Written like that:
  ```
  `gimmick:GimmickName`
  ```
  or like that:
  ```
  `gimmick:GimmickName(params)`
  ```
* Multi line gimmicks `multiline`:  
  Written like that:
  ~~~
  ```gimmick:GimmickName
  Some Text
  with multiline if wanted
  ```
  ~~~
* Link gimmicks `link`:  
  Written like that:
  ```
  [gimmick:GimmickName](Some text wanted by the gimmick)
  ```
  or like that:
  ```
  [gimmick:GimmickName (params)](some text wanted by the gimmick)
  ```
  [More infos about link gimmicks](http://http://dynalon.github.io/mdwiki/#!gimmicks.md)

### N.B.: multiline gimmicks can't have options. If a "multiline" gimmick has options, it will be considered a singleline gimmick by the sytstem.

## How it works (internally)

After the initial transformation of the markdown to html, a parser will check the page to see which gimmicks it will need. At this step, the system will only load needed gimmicks, detected by the parser. The gimmicks will then run their task during their subscribed stage. As of now (January 2018) the gimmicks system is very error prone. A lot of correction should (and have to) be made. In example, one could write a gimmick in his MD document and make a typo in the name of the gimmick and the MDwiki system would stop in error making it impossible to transform the document to html and keeping the document *invisible* since the running proccess of MDwiki isn't able to continue to it's end. One solution could be to have a system of default gimmick(s) that kicks in in case or erroneus gimmick detection. Also if a gimmick isn't used in it's required mode, it will fail, failing the system with it in some case like in a typoed one.