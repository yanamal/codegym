---
title: tap
description: does something when the screen is tapped
layout: reference
tags: ['tap']
section: doggie
refOrder: 3
---
All the commands that are "inside" <b>tap</b> will happen each time the screen is tapped.

<pre class="jumbo" 
     data-before="write 'Click on the blue screen to simulate taps!'" 
     >tap ->
<span data-dfn="indentation">  </span>feed()
</pre>

The spaces (or <b>indentation</b>) in front of the <code>feed()</code> command are what makes it "inside" tap. Try removing them and see what happens!

You can put as many commands as you like inside one <code>tap</code>:

<code class="jumbo">tap ->
<span data-dfn="">  </span>feed()
<span data-dfn="same indentation">  </span>vibrate()
</code>

Just make sure the indentation lines up perfectly, or the computer will get confused!

If you have a visible turtle in your game, you can also do use tap on the turtle:

<pre class="jumbo" 
     data-before="st()&#13write 'Click on the turtle to simulate taps!'" 
     >turtle.tap ->
  feed()
</pre>
