---
title: do
layout: reference
section: language
refOrder: 1
---

The language we are using, Coffeescript, needs at least two words
to run a function. 

Many functions need an <b>argument</b> as the second word: for example, in <code>pause 3</code>, the argument is 3. But some functions, like <code>st</code> or <code>feed</code>, don't need any arguments.

You can use the word <code>do</code> to run a
function without arguments.

For example, hide the turtle with <code>do ht</code>.

<code class="jumbo" data-before="pause 3" data-after="pen blue&#13;bk 100"><span data-dfn="just do it">do</span> ht</code>

Show the turtle with <code>do st</code>.

<code class="jumbo" data-before="do ht&#13pen red&#13;fd 50">do st</code>

Draw a default black dot with <code>do dot</code>

<code class="jumbo">do dot</code>

You can also use <code>()</code> after the function name instead of <code>()</code> before it:

<code class="jumbo">dot()</code>

It means the same thing!

