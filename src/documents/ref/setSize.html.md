---
title: setSize
description: sets the size of the turtle
layout: reference
section: animation
refOrder: 3
doglib: true
---

<b>setSize</b> changes the size of the turtle.

<pre data-before='st()' class="jumbo">
setSize <span data-dfn="new size">5</span>
</pre>

----
<h4><em>Note:</em> setSize only works in Doggie And Me games</h4>
It won't work in regular Pencil Code programs

Pencil Code has a similar function called grow, but <code>grow</code> is <b>relative</b>, and <code>setSize</code> is <b>absolute</b>:



<code>setSize 5</code> means "change your size to be 5 times <em>the standard turtle size</em>"

<code>grow 5</code> means "change your size to be 5 times <em>your current size</em>"

Notice the difference between doing <code>grow</code> twice:

<pre data-before='st()' class="jumbo">
grow <span data-dfnup="how much to grow">5</span><span/> 
<span data-dfn="grow again">grow 5</span>
</pre>

and doing <code>setSize</code> twice:

<pre data-before='st()' class="jumbo">
setSize <span data-dfnup="new size">5</span><span/> 
<span data-dfn="size doesn't change the second time">setSize 5</span>
</pre>