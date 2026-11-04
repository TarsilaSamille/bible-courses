import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  title: T('The noun: countable and uncountable'),
  subtitle: T('information, advice, furniture — a boundary the language decides'),
  section: T('Nouns'),
  body: C(`## The boundary is the language's, not logic's

{Information} is countable in everyday Portuguese: "uma informação importante", "três informações". In English {information} has no plural, and {an information} does not exist. The same goes for {advice}, {furniture}, {research}, {evidence}, {luggage} and {progress}. Someone translating out of Portuguese writes {many informations} without noticing that they are counting, in one language, something the other does not count.

The rule fits on one line: a **countable** noun is the one English marks with {a} or {an} in the singular and pluralizes in the plural; an **uncountable** noun is what gets measured, not counted. The question that decides is {How many}, and the one for mass is {How much}.

Genesis 1:1 in the KJV reads {heaven and earth}: two masses, with no article and no plural. Portuguese for the same verse would say "o céu e a terra", and the following verse shows that the surrounding context uses article and plural freely; the absence on those two words is not omission, it is grammar.

## The pair that solves it

When the noun is uncountable and the sentence needs a unit, English uses **a piece of** plus the noun in the singular: {a piece of advice}, {a piece of furniture}, {a piece of information}. The noun after {of} goes back to the singular and does not pluralize, and {a piece of advices} is wrong.

The same mechanism handles other measures: {an hour of study}, {a cup of water}, {a kilo of flour}, {a piece of bread}. With any of them the verb stays singular, because what is counted is the measure and not the thing: {a piece of bread was on the table}.

When the noun is already countable the pair is unnecessary: {a piece of book} does not exist, and what you mean is {a book}.

## Where the mass shows up in the KJV

John 15:5 speaks of {much fruit}, and the image is agricultural: fruit gets counted in units, but the amount itself is named with {how much}. {Water}, {bread}, {wine}, {oil}, {money} and {love} are the same family. These are words Portuguese does not count either, which is why the mistake passes unnoticed.

A countable noun can turn into mass in another sense. {Work} is countable in the plural ({the works of the Lord}) and uncountable in the singular ({I have a lot of work}). Context decides which of the two is in play, and the form that appears in the text says which.

## The question that gives the mistake away

"How much information do you have?" and "How many informations do you have?" are not two ways of saying the same thing. The first is correct; the second is what a Portuguese speaker produces by generalization, and it turns up on signs and on forms.

When the noun is a mass, {a piece of} rescues the sentence in any position, and {an item of}, {a unit of} and {a piece of} do the same work in more formal registers. The repair is always the same one: **measure the mass instead of counting it**.`),
  vocab: [
    V('information', 'information', 'information'),
    V('advice', 'advice', 'advice'),
    V('furniture', 'furniture', 'furniture'),
    V('research', 'research', 'research'),
    V('evidence', 'evidence', 'evidence'),
    V('luggage', 'luggage', 'luggage'),
    V('progress', 'progress', 'progress'),
    V('knowledge', 'knowledge', 'knowledge'),
    V('a piece of', 'piece', 'a piece of'),
    V('piece of advice', 'piece', 'a piece of advice'),
    V('an hour of', 'hour', 'an hour of'),
    V('how much', 'how much', 'how much (mass)'),
    V('how many', 'how many', 'how many (count)'),
    V('countable', 'countable', 'countable'),
    V('uncountable', 'uncountable', 'uncountable'),
    V('water', 'water', 'water'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'An uncountable noun never takes an {s} plural: many informations, three advices and an information are all wrong.',
      ),
    },
    {
      n: '2',
      text: T(
        'The test is the question: How many expects a count, How much expects a mass. Every noun answers one of the two.',
      ),
    },
    {
      n: '3',
      text: T(
        'When the sentence wants a unit of a mass, English inserts a measure (a piece of, an hour of) and puts the noun in the singular.',
      ),
    },
    {
      n: '4',
      text: T(
        'With a measure, the verb agrees with the measure: a piece of bread was on the table.',
      ),
    },
    {
      n: '5',
      text: T(
        'Some words change class with context: work in the plural means works; work as a mass means labour.',
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical:'),
      text: T(
        'Genesis 1:1 has heaven and earth with no article and no plural. Neither word is countable in that form, and the verse omits nothing.',
      ),
    },
    {
      label: T('Common mistake:'),
      text: T(
        'How many informations? is not a hard question in English; it is the mechanical translation of a question Portuguese asks and English does not.',
      ),
    },
  ],
  examples: [
    { text: '{a piece of advice}', gloss: T('a piece of advice (the mass measured)') },
    { text: '{an information}', gloss: T('an information — wrong: information is a mass') },
    { text: '{He gave me some good advice}', gloss: T('He gave me some good advice') },
    { text: '{The furniture is old}', gloss: T('The furniture is old') },
    { text: '{How much information do you have}', gloss: T('How much information do you have') },
    { text: '{two kilos of flour}', gloss: T('two kilos of flour') },
    { text: '{a piece of bread}', gloss: T('a piece of bread') },
    { text: '{the works of the Lord}', gloss: T('the works of the Lord — work is countable here') },
    { text: '{much fruit}', gloss: T('much fruit') },
    { text: '{three pieces of bread}', gloss: T('three pieces of bread') },
  ],
  tables: [
    {
      caption: T('Countable × uncountable'),
      head: [T('Class'), T('Mark'), T('Question'), T('Examples')],
      rows: [
        [T('countable'), T('a/an + plural in s'), '{How many}', T('book, chair, city, sin')],
        [
          T('uncountable'),
          T('no article, no plural'),
          '{How much}',
          T('information, advice, water, love'),
        ],
        [T('measured'), T('a piece of + singular'), T('—'), T('a piece of bread')],
      ],
    },
    {
      caption: T('Measures that replace the plural'),
      head: [T('Measure'), T('Example'), T('Verb agreement')],
      rows: [
        ['{a piece of}', '{a piece of advice}', T('singular')],
        ['{an hour of}', '{an hour of silence}', T('singular')],
        ['{a cup of}', '{a cup of water}', T('singular')],
        ['{a kilo of}', '{a kilo of flour}', T('singular')],
        ['{a bottle of}', '{a bottle of wine}', T('singular')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence is correct?'),
    options: [
      T('He gave me a good advice'),
      T('He gave me a piece of good advice'),
      T('He gave me many advices'),
      T('He gave me two advices'),
    ],
    answer: 1,
    hint: T('Advice is a mass; to count it, use a piece of.'),
  },
  exercises: [
    { kind: 'fill', prompt: T("Complete: 'I have some ___ to tell you.'"), answer: 'advice' },
    {
      kind: 'fill',
      prompt: T("Make it countable: 'I need some information' → 'I need a ___'"),
      answer: 'piece of information',
    },
    {
      kind: 'match',
      prompt: T('Classify the noun.'),
      pairs: [
        { a: 'advice', b: T('uncountable') },
        { a: 'city', b: T('countable') },
        { a: 'furniture', b: T('uncountable') },
        { a: 'sin', b: T('countable') },
      ],
      answer: ['0-0', '1-1', '2-0', '3-1'],
    },
    {
      kind: 'choose',
      prompt: T('Which question is correct for a countable noun?'),
      options: [
        T('How much information do you have?'),
        T('How many informations do you have?'),
        T('How many information do you have?'),
        T('How much informations do you have?'),
      ],
      answer: 2,
    },
  ],
};
