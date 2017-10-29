---
title: lasttap
description: tracks where the last tap happened
layout: reference
tags: ['tap']
section: doggie
refOrder: 6
doglib: true
---
Use <b>lasttap</b> to decide things about where the dog tapped.

Especially useful to detect whether the dog touched something

<pre class="jumbo"
     data-before="write 'only feed after taps on blue'&#13dot blue, 300"
>
tap ->
  if lasttap.touches <span data-dfnup="touches works with colors or turtles">blue</span><span/>
  <span data-dfn="even more indentation">  </span>feed()
</pre>

Want to see something weird? Try this:

<pre class="jumbo"
     data-before="write 'try tapping anywhere!'"
>
lasttap.wear purple
</pre>

------------
<h3>Related commands</h3>
<code><a href="if.html">if</a></code>

<code><a href="wear.html">wear</a></code>