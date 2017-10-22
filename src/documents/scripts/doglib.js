// TODO: have this in its own repo & build into various interfaces somehow? npm?..

// ~~~ Fake connections ~~~

post = function(message) {
  if(message.type === "feed") {
    debug('feed the dog! (after '+roundData[round-1].duration/1000+' seconds)')
  }
  if(message.type === "vibrate") {
    debug('bz'+'z'.repeat(random(10))+'!')
  }
};

// ~~~ API ~~~

// just use click for tap in the composer. touchstart doesn't work - not touch device?..
// TODO: why, and should I care?

tap = function (fn) {
  click(fn);
};

$.fn.tap = function (fn) {
  this.click(fn);
};

// set size of a turtle - works with the default turtle and (hopefully) with any jquery object.
setSize = function(newSize) {
  this.animate({turtleScale: newSize});
};

// end round - the implication is that it ended without success/feeding.
// TODO: better name?..
endRound = function() {
  finishRound(false);
};

//  ~~ Communicating with app ~~
feed = function() {
  finishRound();
  post({type:'feed'});
};

vibrate = function() {
  post({type:'vibrate'});
};

// ~~ Logic for setting rounds and difficulty ~~
var justStarted = true;
var round;
var roundData = []; // data from previous rounds: time, completion, etc.
var thisRoundStart;

var roundSetupFunc = function(){}; // naive 'event handler': function for what to do on round setup.

// TODO: also make sure the round set-up logic happens for first/0th round. This currently combines end-round with beginning-round logic.
startNewRound = function() {
  if(justStarted) {
    // just started game
    justStarted = false;

    round = 0;
    roundData = [];
  }
  else {
    round++;
  }

  thisRoundStart = Date.now();
  roundSetupFunc(); // TODO: safety checks that this is actually a function
}

finishRound = function(success=true) {
  var thisRoundEnd = Date.now();
  var thisRoundData = {
    // TODO: round number/id?
    success:success,
    start: thisRoundStart,
    end: thisRoundEnd,
    duration: thisRoundEnd - thisRoundStart // TODO: account for pausing-type behavior
  };

  post({type:'roundData', payload: thisRoundData});
  roundData[round] = thisRoundData;

  startNewRound(); // TODO: options for finishing game after a certain time, rounds, rewards, etc.
};

onRoundStart = function(callback) {
  roundSetupFunc = callback;
};

// ~~~ Difficulty Logic ~~~ (note: rewritten in ES5-style objects)



var baselineEasyTime = 4000; // baseline for what's always considered "easy" - if the dog completes rounds in < 4 sec.

function DifficultyPicker(easiest, hardest) {
    // TODO: also options to specify max/min, in case of non-linear and/or 'to infinity' types.
    this.easiest = easiest;
    this.hardest = hardest;
    this.roundDifficulties = [];
    this.baselineRoundsLeft = 3; // rounds to spend in "spin-up" - establishing baseline params (could optionally pass in to constructor)
    this.baselineRoundsDone = 0;
    this.baselineTime = baselineEasyTime; // default baseline
    this.totalBaseline = 0;
}

// helper function to set difficulty for this round, and communicate it to the parent app.
// TODO: private?
DifficultyPicker.prototype.setDifficulty = function(diff) {
  this.roundDifficulties[round] = diff;
  post({type:'difficulty', payload: diff});
  return diff;
};


// pick a difficulty. This should most commonly be called as part of the set-up for a new round.
// TODO: one 'learning challenge' could be to rename the instance to something really silly.
DifficultyPicker.prototype.pick = function() {
  // if already decided on a difficulty for this round, keep returning the same one.
  if(round in this.roundDifficulties) {
    console.log('picked same difficulty');
    return this.roundDifficulties[round];
  }

  var prevRound = round - 1;

  // if still calculating baseline
  if(this.baselineRoundsLeft >= 0) {

    if(prevRound in roundData) {
      // if there is data from the previous round
      var prevTime = roundData[prevRound].duration;
      this.totalBaseline += prevTime;

      // TODO: maybe don't nest in if above?.. separate if?..
      if(this.baselineRoundsLeft <= 0 && this.baselineRoundsDone > 0) {
        this.baselineTime = this.totalBaseline / this.baselineRoundsDone

        post({type:'baselineTime', payload: this.baselineTime});
        // TODO: move on to actual difficulty calculation here, since we know
      }
    }

    this.baselineRoundsLeft--;
    this.baselineRoundsDone++;

    return this.setDifficulty(this.easiest); // TODO: this happens n+1 times?
  }

  // fallthrough - adjust difficulty by comparing prev. round's timing to baseline 
  // (this is hopefully creating a negative feedback loop s.t. the difficulty is adjusted to keep the timing close to the baseline)
  // TODO: eventually generalize this whole function to use other data than timing (e.g. falses/bad actions, round-failures)
  
  if( (prevRound in roundData) && (prevRound in this.roundDifficulties)) {
    var baselineFraction = this.baselineTime / roundData[prevRound].duration; // > 1 = 'too easy', < 1 = 'too hard'.
    var difficultyFraction; // scope stuff - TODO: something better?
    // TODO: double-check this logic for when easiest < hardest.
    if(baselineFraction <= 1) {
      // too hard
      difficultyFraction = (this.roundDifficulties[prevRound] - this.easiest) * baselineFraction
      return this.setDifficulty(this.easiest + difficultyFraction);
    } else {
      // too easy
      difficultyFraction = (this.roundDifficulties[prevRound] - this.hardest) / baselineFraction;
      return this.setDifficulty(this.hardest + difficultyFraction);
    }
    // TODO: randomness?
    // TODO: less naive calculation: rely less on easiest/hardest, don't assume difficulty is linear between them.
  } 

  return this.setDifficulty(this.easiest);// most fallthrough - not enough data (i.e. no prevround)

};

// ~~~ some set-up ~~~
startNewRound();
document.body.style.backgroundColor = "cadetblue";
ht()
