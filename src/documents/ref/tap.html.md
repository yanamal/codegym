---
title: tap
description: does something when the screen is tapped
layout: reference
tags: ['tap']
section: doggie
refOrder: 3
doglib: true
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

------------
<h3>More info</h3>
On the Doggie And Me app, <code>tap</code> is a wrapper for the web standard <a href='https://developer.mozilla.org/en-US/docs/Web/Events/touchstart'>touchstart</a> event.

This means that the tap location is where the dog _started_ touching the screen, and it works well for "smudgy" touches. 

In this simulated environment, <code>tap</code> is actually the same as <code>click</code>, for simplicity.