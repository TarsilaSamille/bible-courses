import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  section: T('Adjective'),
  title: T('Superlative and excess: {太} and {最}'),
  subtitle: T(
    '{太} comes before the adjective and means "too much"; {最} means "the most". One evaluates, the other compares',
  ),
  body: C(`
## {太}: the "too much" that comes before the adjective

{太} (tài) is a degree adverb, and its place is before the adjective: {tài guì le}, "it is too expensive". Never after: {guì tài} does not exist, just as in Portuguese you say "caro demais" and not "demais caro".

On its own, {太} already means "too much": {tài hǎo} is "too good", nothing more. With {了}, it becomes the commonest pattern of everything Chinese does with degree: {tài guì le}, "it is too expensive". What **change**s is not the intensity but the time. {tài guì} judges a price, a state that already exists; {tài guì le} says it became so, that it rose, that it changed. It is the same {了} particle as ever.

One syntactic caution, because {tài} and {le} are not the same kind of word: {太貴了} is an adjective with {太} and {了}; {他太累了} is the verb {累}, "to be tired", with {太} and {了}. The {了} closes the same thing in both, an evaluation that is now a result.

## {最}: the superlative, and also the "most"

{最} (zuì) also comes **before** the adjective: {zuì hǎo de}, "the best". The position is the same as {太}; what changes is the computation being made. {最} compares a set: this one is the best of all, the most expensive on the shelf, the tallest in the room. It needs {的} or a noun after it, because a superlative with nothing to compare stands bare: {zuì hǎo} or {zuì hǎo de shū}, "the best of the books", never {zuì hǎo de} alone.

{的} (de) marks the superlative the way {了} marks change: {zuì guì de} is a closed phrase, "the most expensive", and {了} seldom goes into it. {zuì guì le} exists but is rare, and when it appears it is not a superlative that became a change; it is "came to be the most expensive", which is a different thing.

## {太} evaluates, {最} compares

This is the distinction the intermediate reader forgets, and it is the one Portuguese makes with "demais" and "mais".

{tài yǒuqù}, "too interesting", almost always brings the listener's criticism along. {zuì yǒuqù}, "the most interesting", does not: it is praise, or a choice. That is why {太} takes {bù}: {bù tài yǒuqù} is "not very interesting", the opposite of the superlative and a common softening. {zuì} takes no negation, because there is no "not the most" that means anything.

The critical charge of {太} shows best in a context of limit: {nǐ bù néng tài lèi}, "you must not be too tired". The sense is "you must not go past the point", and the prohibition is about excess, not comparison. {nǐ bù néng zuì lèi} would say something else, and something wrong: it would mean "you must not be the most tired", which is absurd.

| Form | Position | Meaning | What it carries |
| --- | --- | --- | --- |
| {tài guì} | {tài} + adjective | "too expensive" | evaluation, usually critical |
| {tài guì le} | {tài} + adjective + {le} | "it got too expensive" | evaluation + change |
| {zuì guì} | {zuì} + adjective | "the most expensive" | comparison, superlative |
| {zuì hǎo de} | {zuì} + adjective + {de} | "the best" | closed superlative |
| {bù tài yǒuqù} | {bù} + {tài} + adjective | "not very interesting" | softening |

## The intensity scale

{太} is not the top rung of intensity: it is a middle rung, and it is measured against the others. With {guì}, "expensive", the order is {hěn guì}, "very expensive", {tài guì}, "too expensive", {fēicháng guì}, "extremely expensive", {jíqí guì} or {tèbié guì}, "exceptionally expensive". All of them before the adjective, all in the same position: Chinese grades intensity by lining words up in order, not by inflecting the adjective the way Portuguese does.

The other end of the same idea, with {guì}, comes from the manner {de}: {tài guì le} is "very expensive" as change, {guì de hěn} is "very expensive" as a **state** that goes on. One {了}, one {de}: the difference is what changes, not how strong the degree is.

In Scripture the two show up where Greek chose its intensives. In John 3:16 the {和合本} has {Shàngdì ài shìrén}, "God loved the world", and {ài}, "to love", takes neither {太} nor {最}: plain love, no degree. In John 3:30 the Chinese has {tā bìxū zēngzhǎng}, "he must grow", and {bìxū} is {bì}, "must", plus {xū}, "necessary": obligation, not superlative. The other side of the verse, {què yào jiǎn xiǎo}, "but I must decrease", is not {zuì} either: both sides are actions, not degrees. Reading {zuì} where the {和合本} puts no {最} is translating a Mandarin habit, not the Greek.`),
  vocab: [
    V('tài', '太', 'too much, excessively (before the adjective)'),
    V('zuì', '最', 'the most, superlative (before the adjective)'),
    V('guì', '贵', 'expensive (guì)'),
    V('lèi', '累', 'tired, exhausted (lèi)'),
    V('hǎo', '好', 'good (hǎo)'),
    V('de', '的', 'particle closing the superlative (de)'),
    V('le', '了', 'aspect particle: change (le)'),
    V('hěn', '很', 'very, neutral degree (hěn)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{tài} and {zuì} come before the adjective: {tài guì le}, {zuì hǎo de}. Never after.',
      ),
    },
    {
      n: '2',
      text: T('{tài} alone is already "too much": {tài guì} is state, {tài guì le} is change.'),
    },
    { n: '3', text: T('{zuì} is a superlative and needs {de} or a noun: {zuì hǎo de shū}.') },
    { n: '4', text: T('{太} takes {不} ({bù tài yǒuqù} = "not very"); {最} takes no negation.') },
    {
      n: '5',
      text: T('The scale is {很} < {太} < {非常} < {极其} or {特别} — all before the adjective.'),
    },
  ],
  notes: [
    {
      label: T('{太} is an evaluation, not a level of intensity'),
      text: T(
        '{tài} almost always brings criticism with it — {tài guì} is too expensive, {tài lèi} is too tired. The superlative {zuì} judges the same adjective without criticism: {zuì guì} is only the most expensive on the list.',
      ),
    },
    {
      label: T('{太}...{了} and {得} are both "very"'),
      text: T(
        '{tài guì le} is "very expensive" as change (lesson 10); {guì de hěn} is "very expensive" as state (lesson 14). {了} marks what changed, {得} marks what goes on.',
      ),
    },
  ],
  examples: [
    { text: '太貴了', gloss: T('tài guì le — it is too expensive') },
    { text: '最好的', gloss: T('zuì hǎo de — the best') },
    { text: '你不能太累', gloss: T('nǐ bù néng tài lèi — you must not be too tired') },
    { text: '最有意思', gloss: T('zuì yǒu yìsi — the most interesting') },
  ],
  tables: [
    {
      caption: T('Excess or superlative?'),
      head: [T('Word'), T('What it does'), T('English')],
      rows: [
        [T('{太}'), T('evaluates an excess, usually with criticism'), T('too much')],
        [T('{最}'), T('compares a set and picks one'), T('the most')],
        [T('{很}'), T('neutral degree, no charge'), T('very')],
        [T('{非常}'), T('high degree, neutral'), T('very, extremely')],
      ],
    },
    {
      caption: T('The intensity scale with 贵'),
      head: [T('Degree'), T('Phrase'), T('English')],
      rows: [
        [T('neutral'), T('{hěn guì}'), T('very expensive')],
        [T('excess'), T('{tài guì}'), T('too expensive')],
        [T('very high'), T('{fēicháng guì}'), T('extremely expensive')],
        [T('maximum'), T('{jíqí guì}'), T('exceptionally expensive')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {他太累了}, what is {太} saying?'),
    options: [
      T('that he is the most tired of all'),
      T('that he is too tired'),
      T('that he is a little tired'),
      T('that he is getting tired now'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "the best" with the superlative word: ____好的'),
      answer: '最',
    },
    {
      kind: 'match',
      prompt: T('Match each word to what it does'),
      pairs: [
        { a: T('{太}'), b: T('excess: too much, before the adjective') },
        { a: T('{最}'), b: T('superlative: the most') },
        { a: T('{很}'), b: T('neutral degree: very') },
        { a: T('{了}'), b: T('aspect particle: change') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('To say "the most interesting", which form?'),
      options: [T('{太有意思}'), T('{最有趣}'), T('{很有趣}'), T('{太最有趣}')],
      answer: 1,
    },
  ],
};
