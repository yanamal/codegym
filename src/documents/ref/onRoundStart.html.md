---
title: onRoundStart
description: does something at the start of a new round
layout: reference
tags: ['round']
section: doggie
refOrder: 4
doglib: true
---
Our dog games are split up into <b>rounds</b>: each time the dog gets a treat, we start a new round of the game.

This way, the app can automatically keep track of things like success rates, timing, and difficulty.

Sometimes it makes sense to do some set-up at the beginning of each round:

<pre class="jumbo" 
     data-before="write 'Click on the turtle!'&#13st()" 
     data-after="turtle.tap -> feed()" 
     >onRoundStart ->
<span data-dfn="indentation">  </span>moveto random position</pre>
