---
title: DifficultyPicker
description: automatically varies the difficulty of the game
layout: reference
tags: ['difficulty']
section: doggie
refOrder: 5
doglib: true
---
Use <b>DifficultyPicker</b> to set up automatic difficulty adjustments for your game.

<pre class="jumbo"
     data-before="write 'Click on the screen! try clicking slower, then faster to change difficulty.'"
     data-after="tap -> feed()"
><span data-dfnup="define">p = new DifficultyPicker</span><span/> <span data-dfnup="easiest">1</span>, <span data-dfn="hardest">50</span>
onRoundStart ->
  write p<span data-dfn="actually pick">.pick()</span>
</pre>

You need two things to make a DifficultyPicker work in your game:
- <code>new DifficultyPicker</code> defines a new picker, and tells it what the easiest and hardest numbers will be. The numbers it picks will always be between the easiest and hardest you specified.
- <code>something.pick()</code> actually picks a difficulty level. This should usually happen inside <code><a href="feed.html">onRoundStart</a></code>, since you usually want to adjust difficulty at the beginning of each round.

------------
<h2>How it works</h2>
Here are the nitty gritty details about how the <code>DifficultyPicker</code> chooses numbers:
- Whenever you ask the <code>DifficultyPicker</code> to <code>pick()</code>, it selects a new number between the easiest and hardest numbers you gave it during set-up.
  - it only picks a new number once each round. if you ask it again within the same round, it will keep picking the same number.
- The first three rounds, the <code>DifficultyPicker</code> picks the easiest number, and sees how long it takes the dog to solve the game on the easiest setting. This is the <b>baseline</b> time
- For each round after the third one, if the dog solved the previous round faster than the baseline, the DifficultyPicker picks moves the difficulty toward the hardest number. If the dog solved it slower than the baseline, it moves it toward the easiest number.
- Each <code>DifficultyPicker</code> works independently: if you have more than one, they won't know about each other.
