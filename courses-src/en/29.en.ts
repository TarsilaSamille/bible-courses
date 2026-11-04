import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('Numeral and countability'),
  subtitle: T('two thousand people, both are, none of — the number as a noun'),
  section: T('Numerals'),
  body: C(`## The number is a noun, and so it does not pluralize

After a cardinal number the noun stays **singular**: {two thousand people}, {three days}, {five hundred years}. The form {two thousands people} is wrong in any register, and the reason is that {thousand} is already plural on its own, like {million} and {billion}.

One million of people is {a million people}, and the amount is {a million} at every scale: {a thousand}, {a million}, {a billion}. With {one} care is needed: {one thousand} and {one million} force the noun into the singular, and the plural of {one} is {ones}, which shows up only as a pronoun ({the only ones who came}).

Matthew 18:22 in the KJV puts the number next to the noun: {Seventy times seven}. There are {seventy} and {seven} cardinals, with no article and no preposition between them, and the whole phrase is a numeral.

## Both, either and neither

Three words take a plural verb and sit near the verb. {Both} points to two and requires the plural: {Both children are here}. {Either} points to one of two and also requires the plural: {Either answer is correct}. {Neither} is {not either} and follows the same rule: {Neither answer is correct}.

The mistake a Portuguese speaker makes is treating {either} and {neither} as "one" and "none", which take the singular. The test is simple: if the word means "both of them" or "either one of the two", the subject is plural, whatever the other language does.

Writing {neither answer is correct} is right; writing {neither answer are correct} is wrong over a word that looks like a singular in the other language.

## All of, none of, some of

These expressions join a quantifier to a group named by {of} plus noun, and it is the group that governs agreement: {all of the students are here}, {some of the water is bad}, {none of my friends came}.

When the group is {all}, {none} or {both}, the verb is plural. When it is {some} or {any}, the verb agrees with the noun that comes after {of}: {some of the water is bad} and {some of the problems are difficult}.

It is the only case where the verb agrees with something that comes after it, and that is why {all of the water is bad} sounds strange to a learner while {all of the problems are difficult} sounds natural.

## Measuring and counting

The numeral measures length, weight, volume and time in two shapes. The first uses a **measure adjective** after the number: {two metres tall}, {ten kilos heavy}, {three years old}. The second uses {of} plus the thing counted: {ten kilos of flour}, {a cup of water}, {two litres of milk}.

The difference is one of class: {tall} and {old} are adjectives and they measure; {flour} and {water} are nouns and they are counted. With the adjective the noun disappears, and with the {of} it appears in the singular after the preposition.

{Two hours ago} is a fourth shape: elapsed time is measured in relation to {ago}, and the agreement goes with the noun that comes after.`),
  vocab: [
    V('two thousand people', 'thousand', 'two thousand people'),
    V('a million people', 'million', 'a million people'),
    V('one thousand', 'thousand', 'one thousand'),
    V('the only ones', 'one', 'the only ones'),
    V('both', 'both', 'both'),
    V('either', 'either', 'either'),
    V('neither', 'neither', 'neither'),
    V('all of', 'all', 'all of'),
    V('none of', 'none', 'none of'),
    V('some of', 'some', 'some of'),
    V('two metres tall', 'metre', 'two metres tall'),
    V('ten kilos of flour', 'kilo', 'ten kilos of flour'),
    V('three years old', 'year', 'three years old'),
    V('two hours ago', 'hour', 'two hours ago'),
    V('seventy times seven', 'times', 'seventy times seven'),
  ],
  rules: [
    {
      n: '1',
      text: T('After a cardinal number the noun stays singular: two thousand people, three days.'),
    },
    {
      n: '2',
      text: T(
        'One, thousand, million and billion do not pluralize; the plural of one is ones, which shows up only as a pronoun.',
      ),
    },
    { n: '3', text: T('Both, either and neither require a plural verb.') },
    {
      n: '4',
      text: T(
        'With all of and none of the verb is plural; with some of and any of it agrees with the noun after of.',
      ),
    },
    {
      n: '5',
      text: T(
        'The numeral measures with an adjective (two metres tall) or with of plus a noun (ten kilos of flour).',
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical:'),
      text: T(
        'Matthew 18:22 reads seventy times seven: two cardinals with no article and no preposition between them. The phrase as a whole is a numeral.',
      ),
    },
    {
      label: T('Diagnosis:'),
      text: T(
        'If a learner writes neither answer are correct, the problem is that they read neither as "none" and applied the singular of the other language.',
      ),
    },
  ],
  examples: [
    { text: '{two thousand people}', gloss: T('two thousand people') },
    { text: '{three days}', gloss: T('three days') },
    { text: '{a million people}', gloss: T('a million people') },
    { text: '{Both children are here}', gloss: T('both children are here') },
    { text: '{Either answer is correct}', gloss: T('either answer is correct') },
    { text: '{Neither answer is correct}', gloss: T('neither answer is correct') },
    { text: '{all of the students are here}', gloss: T('all of the students are here') },
    { text: '{some of the water is bad}', gloss: T('some of the water is bad') },
    { text: '{two metres tall}', gloss: T('two metres tall') },
    { text: '{ten kilos of flour}', gloss: T('ten kilos of flour') },
    { text: '{Seventy times seven}', gloss: T('seventy times seven') },
    { text: '{three years old}', gloss: T('three years old') },
  ],
  tables: [
    {
      caption: T('The large numbers'),
      head: [T('Number'), T('Form'), T('With a noun')],
      rows: [
        ['{one}', T('does not pluralize'), '{one thousand people}'],
        ['{hundred}', T('does not pluralize'), '{five hundred years}'],
        ['{thousand}', T('does not pluralize'), '{two thousand people}'],
        ['{million}', T('does not pluralize'), '{a million dollars}'],
        ['{ones}', T('plural of one'), '{the only ones who came}'],
      ],
    },
    {
      caption: T('Determiners and verb agreement'),
      head: [T('Word'), T('Verb'), T('Example')],
      rows: [
        ['{both}', T('plural'), '{both children are here}'],
        ['{either}', T('plural'), '{either answer is correct}'],
        ['{neither}', T('plural'), '{neither answer is correct}'],
        ['{all of}', T('plural'), '{all of the students are here}'],
        ['{some of}', T('what follows of'), '{some of the water is bad}'],
        ['{none of}', T('plural'), '{none of my friends came}'],
      ],
    },
    {
      caption: T('Measuring and counting'),
      head: [T('Shape'), T('Class of the last word'), T('Example')],
      rows: [
        [T('number + adjective'), T('adjective'), '{two metres tall}'],
        [T('number + of + noun'), T('noun'), '{ten kilos of flour}'],
        [T('number + period + ago'), T('noun'), '{two hours ago}'],
        [T('number + of + countable'), T('singular'), '{a cup of tea}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence is correct?'),
    options: [
      T('two thousands people'),
      T('two thousand people'),
      T('two thousands peoples'),
      T('two thousand peoples'),
    ],
    answer: 1,
    hint: T('After a number the noun stays singular.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Complete: '___ answer is correct.' (neither one)"),
      answer: 'Neither',
    },
    { kind: 'fill', prompt: T("Complete the measure: 'ten kilos ___ flour'"), answer: 'of' },
    {
      kind: 'match',
      prompt: T('Match the quantifier to the verb agreement.'),
      pairs: [
        { a: 'both', b: T('plural') },
        { a: 'either', b: T('plural') },
        { a: 'some of the water', b: T('singular') },
        { a: 'none of', b: T('plural') },
      ],
      answer: ['0-0', '1-0', '2-1', '3-0'],
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is correct?'),
      options: [
        T('Neither answer are correct'),
        T('Neither answer is correct'),
        T('Neither answers are correct'),
        T('Neither answers is correct'),
      ],
      answer: 1,
    },
  ],
};
