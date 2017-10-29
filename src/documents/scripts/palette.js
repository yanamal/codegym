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
          block: "new DifficultyPicker 1, 50",
          expansion: "picker = new DifficultyPicker 1, 50",
          title: 'Make a new difficulty picker, with 1=easiest and 50=hardest'
        },
        {
          block: "onRoundStart ->\n  x = picker.pick()",
          title: 'Use picker to pick a new number each time a new round starts'
        },
        {
          block: "endRound()",
          title: 'End this round of the game without feeding the doggie'
        }
      ]
    },
    {
      name: 'Turtle Actions',
      color: 'lightblue',
      blocks: [
        {
          block: '@st()',
          title: 'Show turtle'
        },
        {
          block: '@fd 100',
          title: 'Move forward'
        }, {
          block: '@box yellow, 50',
          title: 'Make a square'
        }, {
          block: '@dot green, 50',
          title: 'Make a dot'
        }, {
          block: '@moveto 100, 50',
          title: 'Move to coordinates'
        }, {
          block: '@setSize 3',
          title: 'Set a new turtle size'
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
          block: '@speed 10',
          title: 'Set the speed of the turtle'
        }, {
          block: '@speed Infinity',
          title: 'Use infinite speed'
        }, {
          block: '@wear \'lightgreen\'',
          title: 'Change the turtle\'s shell color'
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
          block: '@label \'spot\'',
          title: 'Write text at the turtle'
        }
      ]
    }, {
      name: 'Control',
      color: 'orange',
      blocks: [ {
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
          block: 'for [1..3]\n  ``',
          title: 'Do something multiple times'
        }, {
          block: 'for x in [0...10]\n  ``',
          title: 'Repeat something while counting up x'
        }, {
          block: 'while `` < ``\n  ``',
          title: '  Repeat while a condition is true'
        }
      ]
    }, {
      name: 'Operators',
      color: 'lightgreen',
      blocks: [
        {
          block: 'random 6',
          title: 'Get a random number less than n'
        }, {
          block: 'max ``, ``',
          title: 'Get the larger of two numbers'
        }, {
          block: 'min ``, ``',
          title: 'Get the smaller on two numbers'
        }, {
          block: 'shuffle([1,2,3])',
          title: 'Randomize an array',
        }, {
          block: 'x = 0',
          title: 'Set a variable',
          id: 'assign'
        }, {
          block: 'x += 1',
          title: 'Increase a variable',
          id: 'increment'
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
        }
      ]
    }, {
      name: 'Snippets',
      color: 'deeporange',
      blocks: [
        {
          block: "tap ->\n  if lasttap.touches blue\n    feed()",
          title: 'Check whether a blue area was tapped',
          id: "tapBlue"
        }, {
          block: "forever 10, ->\n  turnto random(-10, 10)\n  fd 2",
          title: 'Continually move forward, turning slightly',
          id: "foreverBrownian"
        }, {
          block: "forever 1, ->\n  fd 25\n  if not inside window\n    stop()",
          title: 'Move once per second until not inside window',
          id: "foreverInsideWindow"
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
    'DifficultyPicker': {color: 'deeporange'},
    '*.pick': {color: 'deeporange'},
    '?.setSize': {color: 'red'},
    'lasttap.touches': {color: 'red', dropdown: [colors]},
    'shuffle': {color: 'red'},
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