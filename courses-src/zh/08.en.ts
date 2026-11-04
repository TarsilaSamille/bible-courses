import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  section: T('Syntax'),
  title: T('SOV order, which is not ours'),
  subtitle: T('Mandarin puts the verb in the middle, and context holds the sentence up'),
  body: C(`## The verb goes in the middle

Portuguese says "I eat an apple": **subject, verb, object**. Mandarin says {wǒ chī píngguǒ}, the same with {chī} in the middle. It looks identical, and the difference shows in what comes after. Portuguese can front the object, "I ate it yesterday"; in Mandarin the object stays after the verb and so does the adverb: {wǒ zuótiān chī le tā}.

The order is always subject, verb, object, and it is never inverted. That is why a clause cannot be moved to the front the way Portuguese allows.

## The indirect object comes first

With two complements the indirect comes first: {wǒ gěi tā yī běn shū} is "I give him a book". {gěi} marks "to give" and {tā} is the indirect object. Portuguese would be "I give a book to him"; the order of the complements is reversed, and anyone translating by Portuguese syntax flips it.

## With no subject, the sentence becomes a riddle

With the verb in the middle and the subject dropped, an isolated phrase like {chī le} means nothing: who ate? Context is obligatory. That is why biblical reading in Chinese is done by chapters and not by verses, and why the Psalms, so full of noun phrases, are harder than the prose of the Gospels.`),
  vocab: [
    V('chī', '吃', 'to eat (chī)'),
    V('gěi', '给', 'to give (gěi)'),
    V('本', '本', 'book; classifier (běn)'),
    V('昨天', '昨天', 'yesterday (zuótiān)'),
  ],
  rules: [
    { n: '1', text: T('The order is always subject — verb — object, never inverted.') },
    { n: '2', text: T('With two complements the indirect comes first: {wǒ gěi tā yī běn shū}.') },
    { n: '3', text: T('Without an explicit subject, context must supply the doer.') },
  ],
  notes: [
    {
      label: T('Read by chapters, not by verses'),
      text: T(
        'In a language where the subject is dropped and the verb does not close the sentence, the isolated verse loses what makes it readable. The chapter is the unit of sense.',
      ),
    },
  ],
  examples: [
    { text: '我吃苹果', gloss: T('wǒ chī píngguǒ — I eat an apple') },
    { text: '我昨天吃了它', gloss: T('wǒ zuótiān chī le tā — I ate it yesterday') },
    { text: '我给他一本书', gloss: T('wǒ gěi tā yī běn shū — I give him a book') },
  ],
  tables: [
    {
      caption: T('The same two complements in opposite orders'),
      head: [T('Language'), T('Order of the complements'), T('Example')],
      rows: [
        [T('Portuguese'), T('object before the indirect'), T('I give a book to him')],
        [T('Chinese'), T('indirect before the object'), T('{wǒ gěi tā yī běn shū}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {我给他一本书}, which is the verb?'),
    options: [T('{我}'), T('{给}'), T('{他}'), T('{本}')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete "I eat" with the verb: 我____ (to eat)'), answer: '吃' },
    {
      kind: 'match',
      prompt: T('Match the word to its role in the sentence'),
      pairs: [
        { a: T('{我}'), b: T('subject') },
        { a: T('{吃}'), b: T('verb') },
        { a: T('{昨天}'), b: T('time adverb') },
        { a: T('{本}'), b: T('classifier') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
