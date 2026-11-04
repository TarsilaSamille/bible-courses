import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  title: T('The noun: plural and counting'),
  subtitle: T('man/men, child/children, foot/feet — the plurals that are not -s'),
  section: T('Nouns'),
  body: C(`## What the -s rule covers

Nearly every English plural is made by adding {s}: {book → books}, {city → cities}, {sin → sins}. The rule has three extensions and fits in one sentence: final {ch}, {sh}, {s}, {x} and {o} take {es}; consonant plus {y} becomes {ies}; final {f} and {fe} sometimes become {ves}.

**Sound governs the form.** {church} cannot take a bare {s} and still sound like {church}, so it takes {es}. Anyone who memorizes {-es} as a list will get wrong exactly the cases where it does not apply.

What is left after those three rules is a closed set. No rule generates it, and no Portuguese speaker guesses it, because in Portuguese all of them are regular: {children} is the word that does not exist in Portuguese.

## The irregulars every reading should carry

{Man → men} and {woman → women} change the vowel and the final consonant. {Child → children} and {goose → geese} change the core of the word. {Foot → feet} and {tooth → teeth} lose the {o}. {Mouse → mice} swaps the ending for {ice}. {Person → people} and {ox → oxen} are the two cases where the plural bears no relation to the singular.

The KJV uses both sides of the rule in a single verse. Psalm 8:6 reads {Thou hast put all things under his feet}, and the verse goes on with {all sheep and oxen}: {feet} is irregular, {sheep} does not change, and {oxen} has no relation to {ox}. Three plurals, three paths.

## The ones that do not change, and the ones from Greek

{Sheep}, {deer}, {fish}, {series} and {species} have the same form in both numbers: one {sheep} and a hundred {sheep}. **What reveals the plural is the verb**, and it is singular: {the sheep are feeding}, {this species is rare}.

From Greek come {data}, {criteria} and {phenomena}, which in contemporary English are plurals and agree in the plural: {the data are convincing}. Technical usage treats them as singular nouns, and the form {datas} appears when a speaker means a countable number of distinct datasets.

## Two words, two plurals, and the number that does not pluralize

{Compass} is one of the few cases where the same plural serves two senses: {two compasses} can be two navigational instruments or two circles. The singular form no longer distinguishes them, and context settles it.

{Chalk} works as a mass ({the chalk is white}) and as a countable noun ({three chalks} are three pieces). With nouns that move between the two regimes the plural is not a fixed rule: it is a decision about what is being counted.

A number is a noun: {two thousand people}, not {two thousands people}. "Um milhão de pessoas" in English is {a million people}, and the agreement is with {people}, which is plural. The same holds for {a thousand} and {a dozen}.

In questions, {How many} counts with {How many books} and {How much} weighs with {How much money}, and the noun follows the answer: {How many pieces of advice do you need}?`),
  vocab: [
    V('child', 'child', 'child'),
    V('children', 'child', 'children'),
    V('foot', 'foot', 'foot'),
    V('feet', 'foot', 'feet'),
    V('man', 'man', 'man'),
    V('men', 'man', 'men'),

    V('tooth', 'tooth', 'tooth'),
    V('teeth', 'tooth', 'teeth'),
    V('mouse', 'mouse', 'mouse'),
    V('mice', 'mouse', 'mice'),
    V('person', 'person', 'person'),
    V('people', 'person', 'people'),
    V('sheep', 'sheep', 'sheep'),

    V('goose', 'goose', 'goose'),
    V('geese', 'goose', 'geese'),
    V('data', 'data', 'data'),

    V('compass', 'compass', 'compass/circle'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The regular plural is -s, with three sound corrections: -es after final ch, sh, s, x and o; -ies after consonant + y; -ves after some -f and -fe.',
      ),
    },
    {
      n: '2',
      text: T(
        'The irregulars have no rule and no relation to the singular. They are a closed list and have to be memorized: children, feet, teeth, mice, geese, oxen.',
      ),
    },
    {
      n: '3',
      text: T(
        'Sheep, deer, fish, series and species keep the same form in both numbers, and the verb is what reveals which one you are looking at.',
      ),
    },
    {
      n: '4',
      text: T('After a number the noun stays singular: two thousand people, a million dollars.'),
    },
    {
      n: '5',
      text: T(
        'Greek nouns such as data and criteria are plural in English and agree in the plural, even though many specialists treat them as singular.',
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical:'),
      text: T(
        'Psalm 8:6 has feet (irregular), sheep (unchanged) and oxen (unrelated to ox) in one verse. Three plurals, three paths, no common rule.',
      ),
    },
    {
      label: T('Pronunciation:'),
      text: T(
        'The -s corrections are there for sound: someone who writes churchs instead of churches gets the written form right and the sound of the word wrong.',
      ),
    },
  ],
  examples: [
    {
      text: '{two thousand people}',
      gloss: T('two thousand people — the number does not pluralize'),
    },
    { text: '{the sheep are feeding}', gloss: T('the sheep are feeding — plural verb') },
    { text: '{the data are convincing}', gloss: T('the data are convincing') },
    { text: '{two compasses}', gloss: T('two compasses or two circles') },
    { text: '{three chalks}', gloss: T('three pieces of chalk') },
    { text: '{all sheep and oxen}', gloss: T('all sheep and oxen') },
    {
      text: '{How many pieces of advice do you need}',
      gloss: T('How many pieces of advice do you need'),
    },
    { text: '{the city and its churches}', gloss: T('the city and its churches') },
    {
      text: '{five loaves and two fish}',
      gloss: T('five loaves and two fish — fish does not change'),
    },
    { text: '{a series of events}', gloss: T('a series of events — series, not serials') },
  ],
  tables: [
    {
      caption: T('Regular plurals'),
      head: [T('Singular ending'), T('Plural'), T('Example')],
      rows: [
        ['-', '{+s}', '{book → books}'],
        ['ch / sh / s / x / o', '{+es}', '{church → churches}'],
        [T('consonant + y'), '{y → ies}', '{city → cities}'],
        [T('vowel + y'), '{+s}', '{day → days}'],
        [T('-f / -fe (some)'), '{f/fe → ves}', '{leaf → leaves}'],
      ],
    },
    {
      caption: T('Irregular plurals'),
      head: [T('Singular'), T('Plural'), T('What changes')],
      rows: [
        ['{man}', '{men}', T('vowel and final consonant')],
        ['{woman}', '{women}', T('vowel and final consonant')],
        ['{child}', '{children}', T('core of the word')],
        ['{foot}', '{feet}', T('loses the -oo-')],
        ['{tooth}', '{teeth}', T('loses the -oo-')],
        ['{goose}', '{geese}', T('core of the word')],
        ['{mouse}', '{mice}', T('ending replaced')],
        ['{person}', '{people}', T('unrelated to the singular')],
        ['{ox}', '{oxen}', T('unrelated to the singular')],
      ],
    },
    {
      caption: T('Plurals that do not change'),
      head: [T('Word'), T('Plural'), T('How you tell')],
      rows: [
        ['{sheep}', '{sheep}', T('by the verb: the sheep are')],
        ['{deer}', '{deer}', T('by the verb: the deer is')],
        ['{fish}', '{fish}', T('by the verb: two fish are')],
        ['{data}', '{data}', T('Greek: plural in English')],
        ['{criteria}', '{criteria}', T('Greek: plural in English')],
        ['{chalk}', '{chalks}', T('the mass becomes countable')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which plural is correct?'),
    options: [T('two childs'), T('two children'), T('two childrens'), T('two childes')],
    answer: 1,
    hint: T('Child is irregular: children.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Complete the irregular: 'I have two ___. ' (teeth)"),
      answer: 'teeth',
    },
    {
      kind: 'fill',
      prompt: T("Fix it: 'two thousands people' → 'two thousand ___'"),
      answer: 'people',
    },
    {
      kind: 'match',
      prompt: T('Match singular and plural.'),
      pairs: [
        { a: 'goose', b: 'geese' },
        { a: 'foot', b: 'feet' },
        { a: 'person', b: 'people' },
        { a: 'ox', b: 'oxen' },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is correct?'),
      options: [
        T('The sheep is feeding'),
        T('The sheep are feeding'),
        T('The sheeps is feeding'),
        T('The sheep are feeds'),
      ],
      answer: 1,
    },
  ],
};
