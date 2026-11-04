import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  section: T('Verb'),
  title: T('Adverbs of manner: {得} (de) and {一}{下} (yíxià)'),
  subtitle: T(
    'Two particles that follow the verb and change what it says without changing word order',
  ),
  body: C(`
## The adverb that comes after the verb

Chinese has no adverb of manner in the slot Portuguese uses. In Portuguese the adverb comes before the verb: "walk slowly", "speak well". In Chinese it comes after the verb and before the object, and a particle exists to put it there: {de}.

**Verb or adjective + {de} + complement.** {pǎo} {de} {kuài} is "runs fast", {shuō} {de} {hǎo} is "speaks well", {hóng} {de} {fā} {zǐ} is "red to the point of purple", literally "red until". The {de} is fixed: it always clings to the verb, never separates, and the complement always follows it. A bare {de} with no complement after it is not Chinese.

The manner {de} and the possessive {de} have the same pronunciation, {de} with a neutral tone, and the same character. What decides which one you are reading is position: {de} after a noun is possession, {de} after a verb or adjective is manner. Context settles it too, but position is the criterion.

## Intensified {de}: from "very" to "so... that"

For "very" Chinese has a whole word: {hěn}, which comes before the adjective. {hěn} {lěng} is "very cold". And {de} after the adjective does more than that: {lěng} {de} {hěn} is "is very cold" with a weight {hěn} {lěng} cannot reach. It is "so cold that…", and it often carries a result. {hóng} {de} {fā} {zǐ} is the extreme case: "so red it turns purple".

The practical distinction: {hěn} is the everyday "very", the one that sounds natural anywhere. {de} + adjective is stronger, more literary, and shows up where Portuguese would say "so… that", "almost", or a superlative. In biblical reading you will meet both in the same verse, at different levels, and it is worth knowing which one translated what.

## The verb {dé}, and the particle **{yíxià}**

*{dé}* has a second use, and it is the verb "to obtain, to get". {wǒ} {dé} {le} {yī} {běn} {shū} is "I got a book", and there {dé} is the main verb of the sentence, with {le} as the aspect particle. Three characters, three jobs: {de} as adverb, {dé} as verb, {le} as aspect. Chinese is fond of homographs, and this is one of the most productive.

The second particle is {yíxià}, literally "one {下}", "a little". It goes after the verb and means "once", "for a moment", "have a look": {shuō} {yíxià} is "say (for a moment)", {kàn} {yíxià} is "have a look". The position is the same as that of the aspect particle {le}: verb, then particle. {shuō} {yíxià} {le}, "I said it once and was done".

## The order, and the mistake of translating from Portuguese

The whole rule fits on one line: **verb, adverb, object.** {mànmàn} {de} {zǒu} is "to walk slowly"; {wǒ} {mài} {mànmàn} {de} {zǒu} is "I walk slowly", with the adverb after the verb and before the object, and the {de} between the adverb and the verb. In Portuguese this would be "slowly I walk" or "I slowly walk", which nobody writes. Anyone translating from Portuguese word for word writes "I walk slowly slow" and produces a sentence that sounds wrong with nobody able to say why.

The biblical gain sits in three verses. John 1:1, {tàichū} {yǒu} {dào}, "in the beginning was the Word": {tàichū} is "the beginning of", {tài} with the {chū} "to go out", and it is the word that renders Greek ἐν ἀρχῇ semantically, as a derived time adverb rather than a preposition. Psalm 119:105, {nǐ} {de} {huà} {jí} {dà}, "your word is very great": {jí} {dà} is a degree predicate, Chinese saying "word + extremely great" where Hebrew says "your word is immense". And Hebrews 12:2, {wàng} {zhe}, "looking to": the {zhe} is that same continuous-state particle already seen with {tā} {zhe}, marking a verb held in progress while something else happens.`),
  vocab: [
    V('de', '得', 'manner/state particle after a verb or adjective (de)'),
    V('yíxià', '一下', 'once, for a moment, a little (after the verb)'),
    V('hěn', '很', 'very (before the adjective)'),
    V('pǎo', '跑', 'to run (pǎo)'),
    V('kuài', '快', 'fast, quick (kuài)'),
    V('shuō', '说', 'to say, to speak (shuō)'),
    V('hóng', '红', 'red (hóng)'),
    V('dé', '得', 'to obtain, to get (verb; with aspect {le})'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The adverb of manner goes after the verb or adjective: {pǎo de kuài}, never "kuài pǎo".',
      ),
    },
    {
      n: '2',
      text: T('The manner {de} always takes a complement after it: {de} alone says nothing.'),
    },
    {
      n: '3',
      text: T(
        '{hěn} before an adjective is the everyday "very"; {de} after it is stronger, "so… that".',
      ),
    },
    { n: '4', text: T('{yíxià} goes after the verb, in the slot of the aspect particle {le}.') },
    { n: '5', text: T('The order is verb, adverb, object: {wǒ mài mànmàn de zǒu}.') },
  ],
  notes: [
    {
      label: T('Three characters, three jobs'),
      text: T(
        '{de} as manner adverb, {dé} as the verb "to get" and {le} as aspect particle all live in the same sentence: {wǒ dé le yī běn shū}.',
      ),
    },
    {
      label: T('{de} and {zhe} after the verb'),
      text: T(
        '{de} says how something is done; {zhe} marks an ongoing state. {wàng zhe} is "looking to", not "looking in a certain manner".',
      ),
    },
  ],
  examples: [
    { text: '跑得快', gloss: T('pǎo de kuài — he runs fast') },
    { text: '慢慢地说', gloss: T('mànmàn de shuō — speak slowly') },
    { text: '冷得很', gloss: T('lěng de hěn — it is very cold') },
    { text: '我看一下', gloss: T('wǒ kàn yíxià — let me have a look') },
  ],
  tables: [
    {
      caption: T('Where each manner adverb sits'),
      head: [T('Structure'), T('Example'), T('English')],
      rows: [
        [T('verb + {de} + adjective'), T('{pǎo} {de} {kuài}'), T('runs fast')],
        [T('adjective + {de} + {hěn}'), T('{lěng} {de} {hěn}'), T('it is very cold')],
        [T('adverb + {de} + verb'), T('{mànmàn} {de} {zǒu}'), T('walks slowly')],
        [T('verb + {yíxià}'), T('{kàn} {yíxià}'), T('have a look')],
      ],
    },
    {
      caption: T('Verb, adverb, object — and where English would slip'),
      head: [T('Slot'), T('Chinese'), T('Misplaced form')],
      rows: [
        [T('verb'), T('{wǒ} {mài}'), T('—')],
        [T('adverb'), T('{mànmàn} {de}'), T('{mài} {mànmàn}')],
        [T('object'), T('{zǒu}'), T('{mànmàn} {zǒu}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which form says "speaks well"?'),
    options: [T('{好地说}'), T('{说得好}'), T('{说很快}'), T('{好说}')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "runs fast": 跑____快'),
      answer: '得',
    },
    {
      kind: 'match',
      prompt: T('Match the particle to what it does'),
      pairs: [
        { a: T('{得}'), b: T('manner adverb, after the verb') },
        { a: T('{很}'), b: T('the everyday "very", before the adjective') },
        { a: T('{一下}'), b: T('"for a moment", after the verb') },
        { a: T('{了}'), b: T('aspect, right after the verb') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In {我得了一本书}, what is {得}?'),
      options: [
        T('a manner adverb'),
        T('the main verb, "to get"'),
        T('a negation particle'),
        T('a possessive particle'),
      ],
      answer: 1,
    },
  ],
};
