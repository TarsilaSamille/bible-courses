import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  section: T('Adjective'),
  title: T('Degrees and adverbs: how to say "very" and "always" without inflecting anything'),
  subtitle: T(
    'Japanese has no comparative and no superlative: degree is a positional particle, and the frequency adverb goes after the verbal form',
  ),
  body: C(`
## "Very" is a particle, and position is everything

The Japanese adjective does not inflect. There is no form for "more beautiful" and no form for "the most beautiful", and these are not rare constructions: they do not exist. What exists are **degree particles**, and they are told apart by position. It is the position that carries the degree, as in Mandarin, where the "too much" particle (lesson 16) also goes before the adjective and does the work on its own.

The commonest pair is {totemo} and {mō}: {totemo utsukushii} "very beautiful", {mō hoshii} "I want it very much", {mō atsui} "it is very hot". The two do the same work, and the choice is one of register and not of meaning, because {totemo} is neutral while {mō} is more colloquial and is the one you hear in speech. Notice that {mō} sounds exactly like {mo}, "also": the two words share a pronunciation, and what separates them is what comes next. The degree {mō} is followed by an adjective; {mo} is followed by a noun or a pronoun.

The frequency adverb obeys a different rule, and it is the most important one here: it comes **after** the verbal form, never before. {hon o yomu itsumo} "I always read books", {tabi iku} "I sometimes go". Anyone coming from Mandarin gets this wrong almost every time, because there the adverb opens the verb: {cháng cháng} and {yǒu shí hou}. In Japanese the position is the exact opposite, and it is a reversal nobody gets by instinct.

## {sugiru}: the fastest shortcut in the language

If there is one word to take away, it is {sugiru}, "to exceed". It works as a **verb** ({oishisugiru}, "it is delicious beyond measure") and as an adverb ({hayaku sugimasu}, "it is too fast"), and in both cases it does the job a comparative would do in Portuguese.

The trick is that {sugiru} sticks to the word and becomes one word: {oishi + sugiru} gives {oishisugiru}, {hayaki + sugiru} gives {hayakusugiru}. Write the pair joined and Japanese understands it, with no particle in between. It is the same movement as lesson 2, where the root for "to eat" goes into a word meaning "meal", and the same one that puts the hand that writes inside the word for "letter": root on the left, category on the right.

In biblical translation {sugiru} appears all the time, and almost always with a judgement attached: a promise that "goes beyond" what the hearer expected, a greed that "goes beyond" measure. It is also the shortest road to {totemo}, and a stronger one: {oishisugiru} says more than {totemo oishii} in two syllables, which is why translation prefers the short form.

## Negating an adverb is not saying "not very"

The beginner's mistake here is structural, and it is worth naming before the reader gets it wrong in Japanese text. The instinct is to build "not very beautiful" as "not" + "very" + "beautiful", and Japanese refuses that arithmetic. The opposite of "very" is not "not very": it is {amarū}, "to be left over", and {amarū} means **excess**, "too much", "more than it should be".

So "not very beautiful" in Japanese is a sentence, not an adverb: {amarū umi kirei ja nai}, literally "it is not that beautiful is left over". The excess adverb turns into a negative clause. What the reader is doing here is translating the idea of attenuation, not its structure, and that is why {amarū} is not "not very" anywhere: {amarū nemi hoshii} is "I don't want it too much", from the point of view of someone who does not want to spend. The antonym of {amarū} is {mō nai}, "not enough", and the two sentences treat the same quantity from opposite sides.

## Frequency, time and "also"

Three words settle almost all everyday frequency, and all three are adverbs that come after the verb: {itsumo} "always", {tabi} "sometimes", {mettei} "almost never". The third deserves attention because it is not "never" but "hardly": {mettei konai} is what a Japanese person says when he means "I hardly ever go", and it is the same care that separates {mō} from {totemo}. A fourth fits in: {mawarini}, "every now and then", which, not being a fixed word, takes the particle {mawarini ni}.

With time, the adverb is also a particle and also goes after the noun: {made asita} "until tomorrow", {kara kino} "since yesterday". And "before" and "after" are {mae} and {ato}, nouns, like every adverb in Japanese: {mae ni} is literally "at the front of", {ato ni} "behind". Neither inflects, and neither needs to.

To close the picture, the plain "also" is {mo}: {watashi mo}, "me too". The "even" is {sae}, emphatic, and it turns up often in biblical translation precisely where the Greek has a cumulative "and": {sae} marks an item as joining the previous one rather than coming after it. Anyone who reads Greek recognises the move: instead of enumerating, the Japanese translation accumulates.

The biblical verse that ties all of this together is 1 John 1:9, and what it brings is the verb of confession: {mokuroku suru}, "to declare, to confess". Whoever conjugates it into the past joins the same family as {sugiru}, because both take an auxiliary and become a clause. The condition comes with {moshi} at the start and the verb goes at the end: {moshi} opens, {watashitachi no tsumi o mokuroku suru nara} closes.

Notice what the sentence **does not** have: no degree adverb, no comparative, no adjective inflection. The weight of the verse sits in {tsumi o mokuroku suru}, verb and object, and in {moshi}, the single word doing the work of the conditional. In Japanese, what carries syntactic weight is almost never the adverb. It is the particle, and the particle is recognised by its position.
`),
  vocab: [
    V('mō', 'もう', 'very; also (mō)'),
    V('totemo', 'とても', 'very (totemo)'),
    V('sugiru', '過ぎる', 'to exceed; too much (sugiru)'),
    V('amarū', '余る', 'to be left over; too much (amarū)'),
    V('itsumo', 'いつも', 'always (itsumo)'),
    V('tabi', '時々', 'sometimes; every now and then (tabi)'),
    V('mettei', '滅多に', 'almost never; rarely (mettei)'),
    V('mawarini', '回り', 'every now and then (mawarini)'),
    V('made', 'まで', 'until; limit (made)'),
    V('kara', 'から', 'since; from (kara)'),
    V('nai', 'ない', 'not; there is no (nai)'),
    V('mae', '前', 'before; front; back part (mae)'),
    V('ato', '後', 'after; behind (ato)'),
    V('mo', 'も', 'also (mo)'),
    V('sae', 'さえ', 'even; even including (sae)'),
    V('moshi', 'もし', 'if; in case (moshi)'),
    V('oishisugiru', 'おいしすぎる', 'it is delicious beyond measure (oishisugiru)'),
    V('hayakusugiru', '速すぎる', 'too fast (hayakusugiru)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The Japanese adjective does not inflect: there is no comparative and no superlative. Degree is a particle, and its position is what carries it.',
      ),
    },
    {
      n: '2',
      text: T(
        '{totemo} and {mō} mean "very" and go before the adjective; {sugiru} means "to exceed" and sticks to the end of the word.',
      ),
    },
    {
      n: '3',
      text: T(
        '{sugiru} works as verb and as adverb: {oishisugiru} is "delicious beyond measure", and the joined form is shorter and stronger than {totemo oishii}.',
      ),
    },
    {
      n: '4',
      text: T(
        'The opposite of "very" is {amarū}, "too much". "Not very beautiful" is a whole sentence: {amarū umi kirei ja nai}.',
      ),
    },
    {
      n: '5',
      text: T(
        'The frequency adverb comes **after** the verbal form: {yomu itsumo}, {tabi iku}. In Mandarin and Korean it comes before, and that reversal is what confuses most.',
      ),
    },
  ],
  notes: [
    {
      label: T('{mō} and {mo} sound the same'),
      text: T(
        'The "very" {mō} and the "also" {mo} sound identical. What separates them is what comes next: {mō} is followed by an adjective, {mo} by a noun or a pronoun. In a Gospel the pair {mo} appears dozens of times, and it is the most frequent adverb in the language after {mō}.',
      ),
    },
    {
      label: T('Translate the idea, not the structure'),
      text: T(
        'When the structure of the original does not exist in Japanese, the translation swaps the construction instead of forcing a match. "Not very beautiful" becomes a negative clause with {nai}; the reader finds the whole attenuation without a single word corresponding one to one.',
      ),
    },
  ],
  examples: [
    { text: 'とても美しい', gloss: T('totemo utsukushii — very beautiful') },
    { text: 'おいしすぎる', gloss: T('oishisugiru — it is delicious beyond measure') },
    { text: 'あまり強くない', gloss: T('amarū tsuyoku nai — it is not strong enough') },
    { text: '毎日本を読む', gloss: T('mainichi hon o yomu — I read books every day') },
    {
      text: 'もし私たちの罪を告白するならば',
      gloss: T(
        'moshi watashitachi no tsumi o mokuroku suru nara — if we confess our sins (1 John 1:9)',
      ),
    },
  ],
  tables: [
    {
      caption: T('Where the frequency adverb goes, in the three languages of the project'),
      head: [T('Language'), T('Position'), T('Example')],
      rows: [
        [T('Mandarin'), T('before the verb'), T('{yǒu shí hou lái} — sometimes comes')],
        [T('Korean'), T('before the verb'), T('the frequency adverb also precedes the verb')],
        [T('Japanese'), T('after the verbal form'), T('{kuru itsumo} — comes always')],
      ],
    },
    {
      caption: T('Four ways of talking about degree'),
      head: [T('Form'), T('Position'), T('What it says')],
      rows: [
        [T('{totemo}'), T('before the adjective'), T('very, neutral')],
        [T('{mō}'), T('before the adjective'), T('very, colloquial')],
        [T('{oishisugiru}'), T('joined to the end of the word'), T('delicious beyond measure')],
        [T('{amarū}'), T('before the adjective, in a sentence with {nai}'), T('not enough')],
      ],
    },
    {
      caption: T('Frequency, in four slogans'),
      head: [T('Adverb'), T('Gloss'), T('Where it goes')],
      rows: [
        [T('{itsumo}'), T('always'), T('after the verb: {yomu itsumo}')],
        [T('{tabi}'), T('sometimes'), T('after the verb: {tabi iku}')],
        [T('{mawarini}'), T('every now and then'), T('with {ni}: {mawarini ni iku}')],
        [T('{mettei}'), T('almost never'), T('after the verb: {mettei konai}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {hon o yomu itsumo}, what is the position of the adverb {itsumo}?'),
    options: [
      T('before the verb'),
      T('after the verbal form'),
      T('inside the noun'),
      T('at the start of the sentence'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "very beautiful" with the degree particle: とても____'),
      answer: '美しい',
    },
    {
      kind: 'match',
      prompt: T('Match the adverb to the gloss'),
      pairs: [
        { a: T('{itsumo}'), b: T('always') },
        { a: T('{tabi}'), b: T('sometimes') },
        { a: T('{mettei}'), b: T('almost never') },
        { a: T('{made}'), b: T('until') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('What is the position of the frequency adverb in Japanese?'),
      options: [
        T('before the verb, as in Mandarin'),
        T('after the verbal form'),
        T('always at the start of the sentence'),
        T('joined to the noun by {の}'),
      ],
      answer: 1,
    },
  ],
};
