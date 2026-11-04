import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  title: T('Prepositions: of, in, and relations of time and place'),
  subtitle: T('in, on, at, by — a system that cannot be deduced'),
  section: T('Prepositions'),
  body: C(`## Three prepositions for the same place

Portuguese has {em} and {a}. English has three, and the choice among them is not logical: it is conventional. {In} marks the interior of a closed space, {on} marks a surface, and {at} marks a point.

The most useful test is the one of **size**: {in} is the large and undefined space ({in the city}, {in Brazil}, {in the room}); {on} is the surface ({on the wall}, {on the table}, {on page ten}); {at} is the precise point ({at the door}, {at 12 Baker Street}, {at the bus stop}).

With time the same trio repeats, and that is what makes it learnable: {in} for months, years, seasons and parts of the day ({in May}, {in 1998}, {in the morning}); {on} for days and dates ({on Monday}, {on 12 May}); {at} for clock times and fixed expressions ({at six o'clock}, {at night}, {at Christmas}).

John 1:1 in the KJV opens with {In the beginning was the Word}, and that is {in} plus time with no article: {in} before a time noun takes no article. Matthew 2:1 repeats the key in {in the days of Herod}.

## The three senses of by

{By} is the preposition that confuses a Portuguese speaker most, and the confusion comes from having **three senses**. The first is a time limit: {by Friday} means "by Friday at the latest", not "on Friday" ({on Friday}) and not "near Friday" ({near Friday}).

The second is means: {by car}, {by train}, {by hand}, {by post}, {by letter}. There is no article and no alternative preposition.

The third is proximity: {by the river}, {by the window}, {by the door}. It is the same sense as {next to}, and it is the only one of the three where the noun usually takes an article.

The confusion among them is predictable: {by Friday} and {by the river} are one word carrying senses that have nothing to do with each other, which is why there is no single rule for {by}.

## Until, till and from

"To last until" is {until} or {till}: {I will stay until Friday}. "From" is {from}: {from Monday to Friday}. Combining them gives {from ... to ...}, and that is the form that turns up in dates and prices: {from nine to five}.

The difference between {until} and {by} is the one tests ask about: {I will wait until five} means that I am waiting up to five o'clock; {I will wait by five} means that five o'clock is the deadline and I may stop earlier.

## Where the learner generalizes

The mistake has the same origin as the place prepositions: Portuguese forces one choice and the learner generalizes it. Three sentences show the whole pattern: {He is in the room}, {The book is on the desk}, {She is at the station}. The learner writes {in the desk} and {at the room}, and both are wrong for a reason grammar does not explain.

What rescues the learner is the size test: **does the noun denote a space with an inside, a surface, or a point?** Three questions, three prepositions, and the same answers hold for time.`),
  vocab: [
    V('in the city', 'city', 'in the city'),
    V('in the room', 'room', 'in the room'),
    V('on the wall', 'wall', 'on the wall'),
    V('on the table', 'table', 'on the table'),
    V('at the door', 'door', 'at the door'),
    V('at the bus stop', 'bus stop', 'at the bus stop'),
    V('in May', 'May', 'in May'),
    V('in 1998', '1998', 'in 1998'),
    V('in the morning', 'morning', 'in the morning'),
    V('on Monday', 'Monday', 'on Monday'),
    V("at six o'clock", "o'clock", "at six o'clock"),
    V('by Friday', 'by', 'by Friday'),
    V('until Friday', 'until', 'until Friday'),
    V('from Monday to Friday', 'from', 'from Monday to Friday'),
    V('by the river', 'by', 'by the river'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'In marks the interior and the large space; on marks a surface; at marks a precise point.',
      ),
    },
    {
      n: '2',
      text: T(
        'With time: in for months, years, seasons and parts of the day; on for days and dates; at for clock times and fixed expressions.',
      ),
    },
    {
      n: '3',
      text: T(
        'By has three independent senses: a time limit (by Friday), means (by car), and proximity (by the river).',
      ),
    },
    {
      n: '4',
      text: T('Until marks duration up to; by marks a deadline. They are different sentences.'),
    },
    {
      n: '5',
      text: T(
        'A span from one point to another uses from plus to: from Monday to Friday, from nine to five.',
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical:'),
      text: T(
        'John 1:1 has In the beginning and Matthew 2:1 has in the days of Herod. In both the preposition is in, and the time noun comes without an article.',
      ),
    },
    {
      label: T('Diagnosis:'),
      text: T(
        'If a learner writes in the desk or at the room, the problem is one of spatial category and not of memory: the choice has to be made between inside, surface and point before the preposition is chosen.',
      ),
    },
  ],
  examples: [
    { text: '{in the room}', gloss: T('in the room — interior') },
    { text: '{on the desk}', gloss: T('on the desk — surface') },
    { text: '{at the station}', gloss: T('at the station — point') },
    { text: '{in the morning}', gloss: T('in the morning') },
    { text: '{on 12 May}', gloss: T('on 12 May — date') },
    { text: "{at six o'clock}", gloss: T("at six o'clock") },
    { text: '{In the beginning was the Word}', gloss: T('In the beginning was the Word') },
    { text: '{by Friday}', gloss: T('by Friday — deadline') },
    { text: '{until Friday}', gloss: T('until Friday — duration') },
    { text: '{by the river}', gloss: T('by the river — proximity') },
    { text: '{from nine to five}', gloss: T('from nine to five') },
  ],
  tables: [
    {
      caption: T('Place: the size test'),
      head: [T('Preposition'), T('Marks'), T('Examples')],
      rows: [
        ['{in}', T('interior, large space'), '{in the room, in Brazil}'],
        ['{on}', T('surface, page'), '{on the wall, on page ten}'],
        ['{at}', T('point, precise address'), '{at the door, at 12 Baker Street}'],
      ],
    },
    {
      caption: T('Time and deadline'),
      head: [T('Preposition'), T('Used with'), T('Example')],
      rows: [
        ['{in}', T('months, years, seasons, parts of day'), '{in May, in the morning}'],
        ['{on}', T('days and dates'), '{on Monday, on 12 May}'],
        ['{at}', T('clock times and fixed expressions'), "{at six o'clock, at night}"],
        ['{until}', T('duration up to'), '{until Friday}'],
        ['{by}', T('deadline'), '{by Friday}'],
        ['{from ... to}', T('from one point to another'), '{from nine to five}'],
      ],
    },
    {
      caption: T('The three senses of by'),
      head: [T('Sense'), T('Example'), T('Meaning')],
      rows: [
        [T('time limit'), '{by Friday}', T('by Friday at the latest')],
        [T('means'), '{by car}', T('by car')],
        [T('proximity'), '{by the river}', T('beside the river')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence is correct?'),
    options: [
      T('She is at the room'),
      T('She is in the room'),
      T('She is on the room'),
      T('She is in the desk'),
    ],
    answer: 1,
    hint: T('A room is a closed space: the preposition is in.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Complete with the time preposition: '___ 1998 he moved.'"),
      answer: 'In',
    },
    { kind: 'fill', prompt: T("Complete: 'I will wait ___ five.' (deadline)"), answer: 'by' },
    {
      kind: 'match',
      prompt: T('Match the use to the example.'),
      pairs: [
        { a: T('surface'), b: '{on the wall}' },
        { a: T('point'), b: '{at the door}' },
        { a: T('large space'), b: '{in the city}' },
        { a: T('deadline'), b: '{by Friday}' },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is correct?'),
      options: [
        T('I will stay until five'),
        T('I will stay by five'),
        T('I will stay in five'),
        T('I will stay on five'),
      ],
      answer: 0,
    },
  ],
};
