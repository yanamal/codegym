---
title: touches
description: tells you if a turtle is touching something
layout: reference
section: interaction
refOrder: 3
---
<b>touches</b> is true when a turtle is touching another turtle or a color.


<pre class="jumbo">
bob = new Turtle red

if turtle.touches <span data-dfnup="works with other turtles">bob</span>
  write("bob's touching me!!")
  fd 200
</pre>

<pre class="jumbo"
     data-before="speed Infinity # draw faster!&#13dot blue, 100&#13speed 1 # move slower!"
>
if turtle.touches <span data-dfnup="works with colors">blue</span>
  write("it's touching me!!")
  fd 200
</pre>