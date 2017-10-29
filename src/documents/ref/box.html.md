---
title: box
description: draws a box under the turtle
layout: reference
tags: ['box']
section: basic
refOrder: 1
---


<b>box</b> can make a square in any <a href="colors.html">color</a>.

<code class="jumbo" data-after="fd 20">box <span data-dfn="color">red</span></code>

Box accepts an optional second argument, which is the size of the
box in pixels.  Remember that arguments need to be separated by
a comma.

<code default class="jumbo">box <span data-dfn="color">lightgreen</span><span data-note="comma">,</span>&nbsp;<span data-dfn="size">100</span></code>

In our code, we need at least two words to run a function, but
you can use the word <code>do</code> to run a function without
arguments. <code>do box</code> draws a default black box.

<code class="jumbo" data-after="fd 20"><span data-dfn="just do it">do</span> box</code>
