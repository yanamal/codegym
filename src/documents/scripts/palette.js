// Configuration for the blocks palate. Static for now.

var distances = ['25', '50', '100', '200'],
    sdistances = ['100', '50', '-50', '-100'],
    angles = ['30', '45', '60', '90', '135', '144'],
    sangles = ['0', '90', '180', '270'],
    turntoarg = ['0', '90', '180', '270', 'lastclick', 'lastmouse'],
    sizes = ['10', '25', '50', '100'],
    scales = ['0.5', '2.0', '3.0'],
    randarg = ['100', '[true, false]', 'normal', 'position', 'color'],
    colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black'];

defaultPalette = { 
  blocks: [
    {
      name: 'Dog Stuff',
      color: 'red',
      blocks:[
        {
          block: "feed()",
          title: 'Feed the doggie! Trigger treat dispensing.'
        },
        {
          block: "vibrate()",
          title: 'Vibrate the device for half a second'
        },
        {
          block: "tap ->\n  ``",
          title: 'Do something when the screen is touched',
          color: 'orange'
        },
        {
          block: "turtle.tap ->\n  ``",
          title: 'Do something when the turtle is touched'
        },
        {
          block: "onRoundStart ->\n  ``",
          title: 'Do these things at the beginning of a round'
        },
        {
          block: "endRound()",
          title: 'End this round of the game without feeding the doggie'
        },
        {
          block: "new DifficultyPicker(1,20)",
          expansion: "picker = new DifficultyPicker(1, 20)\nonRoundStart ->\n  x = picker.pick()",
          title: 'Make a new difficulty picker, with 1=easiest and 50=hardest'
        },
        {
          block: "onRoundStart ->\n  x = picker.pick()",
          title: 'Use picker to pick a new number each time a new round starts'
        }
      ]
    },
    {
      name: 'Move',
      color: 'lightblue',
      blocks: [
        {
          block: '@fd 100',
          title: 'Move forward'
        }, {
          block: '@rt 90',
          title: 'Turn right'
        }, {
          block: '@lt 90',
          title: 'Turn left'
        }, {
          block: '@bk 100',
          title: 'Move backward'
        }, {
          block: '@rt 180, 100',
          title: 'Make a wide right arc'
        }, {
          block: '@lt 180, 100',
          title: 'Make a wide left arc'
        }, {
          block: '@speed 10',
          title: 'Set the speed of the turtle'
        }, {
          block: '@speed Infinity',
          title: 'Use infinite speed'
        }, {
          block: '@home()',
          title: 'Jump to the origin, turned up'
        }, {
          block: '@turnto 270',
          title: 'Turn to an absolute direction'
        }, {
          block: '@moveto 100, 50',
          title: 'Move to coordinates'
        }, {
          block: '@movexy 30, 20',
          title: 'Move by changing x and y'
        }, {
          block: '@jumpto 100, 50',
          title: 'Jump to coordinates without drawing'
        }, {
          block: '@jumpxy 30, 20',
          title: 'Jump changing x and y without drawing'
        }, {
          block: '@pause 5',
          title: 'Do not move for five seconds'
        }
      ]
    }, {
      name: 'Control',
      color: 'orange',
      blocks: [
        {
          block: 'for [1..3]\n  ``',
          title: 'Do something multiple times'
        }, {
          block: 'for x in [0...10]\n  ``',
          title: 'Repeat something while counting up x'
        }, {
          block: 'while `` < ``\n  ``',
          title: '  Repeat while a condition is true'
        }, {
          block: 'if `` is ``\n  ``',
          title: 'Do something only if a condition is true'
        }, {
          block: 'if `` is ``\n  ``\nelse\n  ``',
          title:
              'Do something if a condition is true, otherwise something else',
          id: 'ifelse'
        }, {
          block: "forever 1, ->\n  ``",
          title: 'Repeat something forever at qually-spaced times'
        }, {
          block: "button \'Click\', ->\n  ``",
          title: 'Make a button and do something when clicked'
        }, {
          block: "keydown \'X\', ->\n  ``",
          title: 'Do something when a keyboard key is pressed'
        }, {
          block: "click (e) ->\n  ``",
          title: 'Do something when the mouse is clicked'
        }
      ]
    }, {
      name: 'Art',
      color: 'purple',
      blocks: [
        {
          block: '@pen purple, 10',
          title: 'Set pen color and size'
        }, {
          block: '@dot green, 50',
          title: 'Make a dot'
        }, {
          block: '@box yellow, 50',
          title: 'Make a square'
        }, {
          block: '@fill blue',
          title: 'Fill traced shape'
        }, {
          block: '@wear \'apple\'',
          title: 'Use an image for the turtle'
        }, {
          block: 'img \'/img/bird\'',
          title: 'Write an image on the screen'
        }, {
          block: '@grow 3',
          title: 'Grow the size of the turtle'
        }, {
          block: '@hide()',
          title: 'Hide the main turtle'
        }, {
          block: '@show()',
          title: 'Show the main turtle'
        }, {
          block: 'cs()',
          title: 'Clear screen'
        }, {
          block: '@pu()',
          title: 'Lift the pen up'
        }, {
          block: '@pd()',
          title: 'Put the pen down'
        }, {
          block: '@drawon s',
          title: 'Draw on sprite s'
        }, {
          block: '@drawon document',
          title: 'Draw on the document'
        }
      ]
    }, {
      name: 'Operators',
      color: 'lightgreen',
      blocks: [
        {
          block: 'x = 0',
          title: 'Set a variable',
          id: 'assign'
        }, {
          block: 'x += 1',
          title: 'Increase a variable',
          id: 'increment'
        }, {
          block: 'f = (x) ->\n  ``',
          title: 'Define a new function',
          id: 'funcdef'
        }, {
          block: 'f(x)',
          title: 'Use a custom function',
          id: 'funccall'
        }, {
          block: '`` is ``',
          title: 'Compare two values',
          id: 'is'
        }, {
          block: '`` < ``',
          title: 'Compare two values',
          id: 'lessthan'
        }, {
          block: '`` > ``',
          title: 'Compare two values',
          id: 'greaterthan'
        }, {
          block: '`` + ``',
          title: 'Add two numbers',
          id: 'add'
        }, {
          block: '`` - ``',
          title: 'Subtract two numbers',
          id: 'subtract'
        }, {
          block: '`` * ``',
          title: 'Multiply two numbers',
          id: 'multiply'
        }, {
          block: '`` / ``',
          title: 'Divide two numbers',
          id: 'divide'
        }, {
          block: '`` and ``',
          title: 'True if both are true',
          id: 'and'
        }, {
          block: '`` or ``',
          title: 'True if either is true',
          id: 'or'
        }, {
          block: 'not ``',
          title: 'True if input is false',
          id: 'not'
        }, {
          block: 'random 6',
          title: 'Get a random number less than n'
        }, {
          block: 'round ``',
          title: 'Round to the nearest integer'
        }, {
          block: 'abs ``',
          title: 'Absolute value'
        }, {
          block: 'max ``, ``',
          title: 'Get the larger of two numbers'
        }, {
          block: 'min ``, ``',
          title: 'Get the smaller on two numbers'
        }, {
          block: 'x.match /pattern/',
          title: 'Test if a text pattern is found in x',
          id: 'match'
        }
      ]
    }, {
      name: 'Text',
      color: 'pink',
      blocks: [
        {
          block: 'write \'Hello.\'',
          title: 'Write text in the document'
        }, {
          block: 'debug x',
          title: 'Log an object to debug'
        }, {
          block: 'type \'zz*(-.-)*zz\'',
          title: 'Typewrite text in the document'
        }, {
          block: 'typebox yellow',
          title: 'Type out a colored square'
        }, {
          block: 'typeline()',
          title: 'Type in a new line'
        }, {
          block: '@label \'spot\'',
          title: 'Write text at the turtle'
        }, {
          block: "await read '?', defer x",
          title: "Pause for input from the user"
        }, {
          block: "await readnum '?', defer x",
          title: "Pause for a number from the user"
        }, {
          block: 'read \'?\', (x) ->\n  write x',
          title: 'Send input from the user to a function'
        }, {
          block: 'readnum \'?\', (x) ->\n  write x',
          title: 'Send a number from the user to a function'
        }
      ]
    }, {
      name: 'Sprites',
      color: 'teal',
      blocks: [
        {
          block: 't = new Turtle red',
          title: 'Make a new turtle',
          id: 'newturtle'
        }, {
          block: 's = new Sprite()',
          title: 'Make a blank sprite',
          id: 'newsprite'
        }, {
          block: 'p = new Piano()',
          title: 'Make a visible instrument',
          id: 'newpiano'
        }, {
          block: 'q = new Pencil()',
          title: 'Make an invisible and fast drawing sprite'
        }, {
          block: 'if @touches x\n  ``',
          title: 'Do something only if touching the object x'
        }, {
          block: 'if @inside window\n  ``',
          title: 'Do something only if inside the window'
        }
      ]
    }, {
      name: 'Sound',
      color: 'indigo',
      blocks: [
        {
          block: '@play \'c G/G/ AG z\'',
          title: 'Play music notes in sequence'
        }, {
          block: '@play \'[fA] [ecG]2\'',
          title: 'Play notes in a chord'
        }, {
          block: '@tone \'B\', 2, 1',
          title: 'Sound a note immediately',
          id: 'toneNote'
        }, {
          block: '@tone \'B\', 0',
          title: 'Silence a note immediately',
          id: 'toneNote0'
        }, {
          block: '@tone 440, 2, 1',
          title: 'Sound a frequency immediately',
          id: 'toneHz'
        }, {
          block: '@tone 440, 0',
          title: 'Silence a frequency immediately',
          id: 'toneHz0'
        }, {
          block: '@silence()',
          title: 'Silence all notes'
        }, {
          block: "await listen defer x",
          title: "Pause for spoken words from the user"
        }, {
          block: 'listen (x) ->\n  write x',
          title: 'Send spoken words from the user to a function'
        }, {
          block: '@say \'hello\'',
          title: 'Speak a word'
        }, {
          block: 'new Audio(url).play()',
          expansion: '(new Audio(\'https://upload.wikimedia.org/wikipedia/commons/1/11/06_-_Vivaldi_Summer_mvt_3_Presto_-_John_Harrison_violin.ogg\')).play()',
          title: 'Play an audio file'
        }
      ]
    }, {
      name: 'Snippets',
      color: 'deeporange',
      blocks: [
        {
          block: "forever 10, ->\n  turnto lastmouse\n  fd 2",
          title: 'Continually move towards the last mouse position',
          id: "foreverFollowMouse"
        }, {
          block: "forever 10, ->\n  if pressed 'W'\n    fd 2",
          title: 'Poll a key and move while it is depressed',
          id: "foreverPollKey"
        }, {
          block: "forever 1, ->\n  fd 25\n  if not inside window\n    stop()",
          title: 'Move once per second until not inside window',
          id: "foreverInsideWindow"
        }, {
          block: "click (e) ->\n  moveto e",
          title: 'Move to a location when document is clicked',
          id: "foreverMovetoClick"
        }, {
          block: "button \'Click\', ->\n  write 'clicked'",
          title: 'Make a button and do something when clicked',
          id: "buttonWrite"
        }, {
          block: "keydown \'X\', ->\n  write 'x pressed'",
          title: 'Do something when a keyboard key is pressed',
          id: "keydownWrite"
        }, {
          block: "click (e) ->\n  moveto e",
          title: 'Move to a location when document is clicked',
          id: "clickMove"
        }
      ]
    }
  ],
  // knownFunctions are a copy of 'regular' pencil code known functions, plus the DoggieAndMe-specific API.
  knownFunctions: {
    '?.tap': {color: 'red'},
    'onRoundStart': {color: 'red'},
    'feed': {color: 'red'},
    'vibrate': {color: 'red'},
    'endRound': {color: 'red'},
    'DifficultyPicker': {color: 'orange'},
    '*.pick': {color: 'orange'},
    // Default Pencil Code functions starting here
    '?.fd': {color: 'lightblue', dropdown: [distances]},
    '?.bk': {color: 'lightblue', dropdown: [distances]},
    '?.rt': {color: 'lightblue', dropdown: [angles]},
    '?.lt': {color: 'lightblue', dropdown: [angles]},
    '?.slide': {color: 'lightblue', dropdown: [sdistances]},
    '?.move': {color: 'lightblue', dropdown: [sdistances, sdistances]},
    '?.movexy': {color: 'lightblue', dropdown: [sdistances, sdistances]},
    '?.moveto': {color: 'lightblue', dropdown: [sdistances, sdistances]},
    '?.jump': {color: 'lightblue', dropdown: [sdistances, sdistances]},
    '?.jumpxy': {color: 'lightblue', dropdown: [sdistances, sdistances]},
    '?.jumpto': {color: 'lightblue', dropdown: [sdistances, sdistances]},
    '?.turnto': {color: 'lightblue', dropdown: [turntoarg]},
    '?.home': {color: 'lightblue'},
    '?.pen': {color: 'purple', dropdown: [colors]},
    '?.fill': {color: 'purple', dropdown: [colors]},
    '?.dot': {color: 'purple', dropdown: [colors, sizes]},
    '?.box': {color: 'purple', dropdown: [colors, sizes]},
    '?.img': {color: 'purple'},
    '?.mirror': {color: 'purple'},
    '?.twist': {color: 'purple', dropdown: [sangles]},
    '?.scale': {color: 'purple', dropdown: [scales]},
    '?.grow': {color: 'purple', dropdown: [scales]},
    '?.pause': {color: 'lightblue'},
    '?.st': {color: 'purple'},
    '?.ht': {color: 'purple'},
    '?.show': {color: 'purple'},
    '?.hide': {color: 'purple'},
    '?.cs': {color: 'purple'},
    '?.cg': {color: 'purple'},
    '?.ct': {color: 'purple'},
    '?.pu': {color: 'purple'},
    '?.pd': {color: 'purple'},
    '?.pe': {},
    '?.pf': {},
    '?.say': {color: 'indigo'},
    '?.play': {color: 'indigo'},
    '?.tone': {color: 'indigo'},
    '?.silence': {color: 'indigo'},
    '?.speed': {color:'lightblue'},
    '?.wear': {color:'purple'},
    '?.drawon': {color:'purple'},
    '?.label': {color: 'pink'},
    '?.reload': {},
    remove: {color: 'pink'},
    see: {},
    sync: {},
    send: {},
    recv: {},
    '?.click': {color: 'orange'},
    '?.mousemove': {color: 'orange'},
    '?.mouseup': {color: 'orange'},
    '?.mousedown': {color: 'orange'},
    '?.keyup': {color: 'orange'},
    '?.keydown': {color: 'orange'},
    '?.keypress': {color: 'orange'},
    alert: {},
    prompt: {},
    '?.done': {},
    tick: {color: 'orange'},
    forever: {color: 'orange'},
    stop: {color: 'orange'},
    await: {color: 'orange'},
    defer: {color: 'orange'},
    type: {color: 'pink'},
    typebox: {color: 'pink', dropdown: [colors]},
    typeline: {color: 'pink'},
    '*.sort': {},
    debug: {color: 'pink'},
    abs: {value: true, color: 'lightgreen'},
    acos: {value: true, color: 'lightgreen'},
    asin: {value: true, color: 'lightgreen'},
    atan: {value: true, color: 'lightgreen'},
    cos: {value: true, color: 'lightgreen'},
    sin: {value: true, color: 'lightgreen'},
    tan: {value: true, color: 'lightgreen'},
    acosd: {value: true, color: 'lightgreen'},
    asind: {value: true, color: 'lightgreen'},
    atand: {value: true, color: 'lightgreen'},
    cosd: {value: true, color: 'lightgreen'},
    sind: {value: true, color: 'lightgreen'},
    tand: {value: true, color: 'lightgreen'},
    ceil: {value: true, color: 'lightgreen'},
    floor: {value: true, color: 'lightgreen'},
    round: {value: true, color: 'lightgreen'},
    exp: {value: true, color: 'lightgreen'},
    ln: {value: true, color: 'lightgreen'},
    log10: {value: true, color: 'lightgreen'},
    pow: {value: true, color: 'lightgreen'},
    sqrt: {value: true, color: 'lightgreen'},
    max: {value: true, color: 'lightgreen'},
    min: {value: true, color: 'lightgreen'},
    random: {value: true, color: 'lightgreen', dropdown: [randarg]},
    'Math.abs': {value: true, color: 'lightgreen'},
    'Math.acos': {value: true, color: 'lightgreen'},
    'Math.asin': {value: true, color: 'lightgreen'},
    'Math.atan': {value: true, color: 'lightgreen'},
    'Math.atan2': {value: true, color: 'lightgreen'},
    'Math.cos': {value: true, color: 'lightgreen'},
    'Math.sin': {value: true, color: 'lightgreen'},
    'Math.tan': {value: true, color: 'lightgreen'},
    'Math.ceil': {value: true, color: 'lightgreen'},
    'Math.floor': {value: true, color: 'lightgreen'},
    'Math.round': {value: true, color: 'lightgreen'},
    'Math.exp': {value: true, color: 'lightgreen'},
    'Math.log10': {value: true, color: 'lightgreen'},
    'Math.log2': {value: true, color: 'lightgreen'},
    'Math.log': {value: true, color: 'lightgreen'},
    'Math.pow': {value: true, color: 'lightgreen'},
    'Math.sqrt': {value: true, color: 'lightgreen'},
    'Math.max': {value: true, color: 'lightgreen'},
    'Math.min': {value: true, color: 'lightgreen'},
    'Math.random': {value: true, color: 'lightgreen'},
    '?.pagexy': {value: true},
    '?.getxy': {value: true, color:'lightblue'},
    '?.direction': {value: true, color:'lightblue'},
    '?.distance': {value: true, color:'lightblue'},
    '?.shown': {value: true, color:'lightgreen'},
    '?.hidden': {value: true, color:'lightgreen'},
    '?.inside': {value: true, color:'lightgreen'},
    '?.touches': {value: true, color:'lightgreen'},
    '?.within': {value: true, color:'lightgreen'},
    '?.notwithin': {value: true, color:'lightgreen'},
    '?.nearest': {value: true},
    '?.pressed': {value: true, color:'lightgreen'},
    '?.canvas': {value: true},
    hsl: {value: true},
    hsla: {value: true},
    rgb: {value: true},
    rgba: {value: true},
    '*.cell': {value: true},
    '$': {value: true},
    '*.match': {value: true, color:'lightgreen'},
    '*.toString': {value: true},
    '*.charCodeAt': {value: true},
    '*.fromCharCode': {value: true},
    '*.exec': {value: true},
    '*.test': {value: true},
    '*.split': {value: true},
    '*.join': {value: true},
    button: {value: true, command: true, color: 'orange'},
    read: {value: true, command: true, color: 'pink'},
    readstr: {value: true, command: true, color: 'pink'},
    readnum: {value: true, command: true, color: 'pink'},
    listen: {value: true, command: true, color: 'indigo'},
    write: {value: true, command: true, color: 'pink'},
    img: {value: true, command: true, color: 'purple'},
    table: {value: true, command: true, color: 'yellow'},
    '*.splice': {value: true, command: true},
    '*.append': {value: true, command: true},
    '*.finish': {value: true, command: true},
    '*.text': {value: true, command: true, color: 'pink'},
    loadscript: {value: true, command: true},
    Date: {value: true, color: 'lightgreen'},
    Audio: {value: true, color: 'indigo'},
    Turtle: {value: true, color: 'teal'},
    Sprite: {value: true, color: 'teal'},
    Piano: {value: true, color: 'teal'},
    Pencil: {value: true, color: 'teal'}
  }
};