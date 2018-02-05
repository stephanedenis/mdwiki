# Stage core system

## When it's used

MDwiki uses a staging systems to manage the whole execution process.

## What is it

### The stages

The staging system is a function queue. Each stage of this system is launched in a set order. The order of these stages are defined when the stage chain is created and stages cannot be added afterward.

### A Stage

A stage is a set of function to be called, one after another, but not in a set order. A function is subscribed to a stage and is called by it when its turn comes.  
Also, a function can subscribe another one to a stage that hasn't been run yet. I.E.: System initialization could be done at the init stage and register a transformation process in the transform stage. LIke said, a function cannot be subscribed to a done stage, doing so will result in a silent, non-blocking warning in the console.

## How it works

Like said earlier the staging system works as a queue (or chain) of stages to be executed with each stage containing a set of functions receiving a reference to a function which tells the stage that it's done and that it can proceed with the next function (if any).  
A stage is considered done when all of it's subscribed function(s) have been called and ran to completion. When this happens, the system starts the next stages if any or else the system is considered done and fully executed and nothing remains to be executed. (At this step, the mardown has been fully transformedand the javascript engine of the browser doesn't have anything else to run).

## In the code

The code for the staging system all resides in the `/js/ts/stage.ts` file.
It contains descriptions of what a subscribed function should be (the `SubscribedFunc` and `DoneCallback` interfaces) vand the code definition for the `StageChain` and the `Stage` classes.