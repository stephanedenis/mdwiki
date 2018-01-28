# MDwiki loading and run process.

## Initialisation and before stages

1. Get the markdown file's location and html anchor to show (if any)
    [More info](http://dynalon.github.io/mdwiki/#!index.md#How_does_it_work?)
2. Prepare and start staging system.

3. Run the stage chain.

## Stages and what they do

### 1. Init

* Load `config.json` and `navigation.md` and populate settings and the navigation view;
* Load requested Markdown file and load it's content asynchronously
* Create a basic skeleton for the markdown page `MDwiki.Core.Wiki.registerClearContent()` (wiki.ts line 104)

### 2. Load

### 3. Transform

* Convert the specified `navigation.md` file if it exists with `marked` to html, or else, put no navigation, in the page skeleton;
* save the base URL of the markdown file `$.md.baseUrl`
* Transform mardown code to a "ugly" html using `marked`

### 4. Post transform

* Parse Markdown document to know which Gimmicks it will need.
* Register needed gimmicks to the staging system

### 5. Ready

* Create the basic skeleton of the page
* Initialize needed gimmicks (single-line blocks, multi-line blocks and link refs).

### 6. Skeleton Ready (skel_ready)

### 7. Bootstrap

* Process links so they use MDwiki's engine.
* Apply bootstrap styling to the page.

### 8. Pre-gimmick

### 9. Gimmick

### 10. Post-gimmick

* Hide no-links ?
  see wiki.ts at line 184

### 11. All ready

* Display the page now that it's ready.

### 12. Final tests

* Create required element in the page for the tests (if any) from `dalekjs`