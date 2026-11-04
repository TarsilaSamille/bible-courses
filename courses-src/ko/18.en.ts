import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  section: T('Adjective'),
  title: T('Degrees and adverbs: the same word with one particle more'),
  subtitle: T(
    'Korean does not inflect degree: the adverb is a particle glued to the noun, and the comparative is a construction, not a form',
  ),
  body: C(`## The particle you already know

Korean hardly ever has a word for the adverb of manner: it has a particle. The particle {e} is the same one that showed destination, going somewhere, and as place or time. It is exactly that particle that glues itself to a noun in order to say **how** that thing is done. {josim} on its own is a noun, care; {josim} with {e} is "carefully". The particle has changed neither sound nor meaning: it changed job. A noun plus {e} is a derived form, and Korean derives with particles, not with suffixes. Of the three languages in this project, none of the others gives both jobs to a single square.

The simplest adverb of all is the one glued to the verb, and {e} is the piece that does that work. "I eat quickly" is not a new word: it is the verb eat, plus the adverb quickly, plus {e}. It is the same stack as always, and the position gives the order away: in Korean the adverb of manner rarely opens the clause.

There is a second door to the same place, and it is the suffix {ge}. A noun glues {ge} on and becomes an adverb of manner: {ppalli} with {ge} is "quickly", {se} with {ge} is "with force". The two doors produce the same kind of clause and the reader will meet both in the same text. The difference is one single thing, and it is mechanical: {e} is a particle, glued on; {ge} is a suffix, stuck on.

## Degree is a construction, not a form

Portuguese inflects degree: good, better, the best, three forms of the same word. Korean inflects none of it. There is no form for "faster" nor for "the fastest", and these are not rare forms: they do not exist. The comparative is a construction put together with a particle: better than he is **good** plus {boda} plus he, and {boda} means literally "than", "compared with". The adjective has not changed; what changed is the piece that came after it.

That has a practical consequence worth checking: if you take the particle away, the adjective comes back intact. In Portuguese, "better" is another word; in Korean, what makes the comparative is the glue, and the glue can be removed. And the particle of the comparative is the same piece that already marks scope and comparison, one more case of the reuse the particles showed, now in a function that in Portuguese belongs to inflection.

The superlative does not inflect either: it is {gajan} plus the adjective, "the fastest". {gajan} is an ordinary adverb, just as in Mandarin the superlative is an adverb that comes before the adjective. Excess is the fourth case, and it is {neomu} plus the adjective: fast too much. "Enough" is the fifth case, and it is a noun as in Japanese. There is no quantity adverb glued on like the others: there is {ppun}, "measure", "as much as it takes", which comes after the noun and says how far the quantity reaches, as much water as came, as much as wanted to stay. It belongs to the same family as everything already seen: a noun with a particle, not a new form of the adjective. Five degrees, five different words and zero inflections.

## "So X that" and frequency

The superlative has a second door, and it is nominal. When the group being compared is a named set, the "most" becomes a noun: {jeil} means "the most" and enters with the scope particle, the same one that says "of": the richest **of** the city, the oldest **of** the group. On both paths the adjective stays intact, and that is why a translator needs to know that Korean degree is syntax, not form.

"So X that" is the construction that deserves most care, because the particle is ambiguous by construction. {aseo} means "and" and "and therefore" at the same time: it is the particle that says that one thing is the cause of another. {neomu} plus the adjective plus {aseo} plus a verb is "so X that": {neomu} and the adjective say the intensity, {aseo} fastens the consequence. The same {aseo} translates "because" and translates "and therefore", and what decides is the verb that comes next, not the particle. A reader who always renders {aseo} as "because" writes a text with causality where the original had only sequence.

Frequency is the easiest part of this lesson and the part that deceives most, because the position is the reverse of the Japanese one. In Japanese the frequency adverb comes **after** the verbal form, and in Mandarin it also goes before the verb. Korean puts the frequency adverb **before** the verb: {hangsi} always, {jogeum} a little and sometimes, {ttak} from time to time, {eonje} never, {butong} in general. And the adverb that stands against the verb, {an}, also goes before it, that is adverbial negation, not verbal negation.

That position ties the lesson to the ones before it, and the order of the three is what makes the clause readable. The frequency adverb comes before the verb; time comes after the verb, in a particle; the connective comes at the end of the clause. They are three distinct positions for three things that in Portuguese tend to be one and the same, and it is that order that stops the reader from treating a sentence-final connective as an adverb.

## 1 Corinthians 13: a list of adverbs

The passage that ties it all together is **1 Corinthians 13:4-8**, and it is a list of qualities of love. The observation the reader needs to carry away is one of category, not of vocabulary: each quality is a Korean **noun** with an adverb, not an adjective as in Portuguese. Love is kind, is benign, is patient. In Portuguese those are three adjectives; in Korean they are three nouns, and each quality is a noun that takes an adverb the same way it takes a subject particle.

That is why "the kindness is patient" changes structure as it moves into Korean. The kindness is {innae}, patience, plus the adverb, and not an adjective followed by a verb. The noun that was the subject in Greek stays a noun in Korean and **gains an adverb**: the quality is a name, and the adverb is what describes the name. It is the same stack as the first section of this lesson, only applied to a list of qualities, and that is why the Korean passage of 1 Corinthians 13 is longer than the Portuguese one without having translated anything extra.

Verse 8 ties the whole lesson together: love "does not fail", and the construction is verb plus adverb of manner, with the adverb saying that love endures. And in John 1:5, "the light shines in the darkness", "in the darkness" is an adverb of place built from the very same particle {e} that marks destination. The Korean biblical text is made almost entirely of nouns glued to particles, and that is why adverbs show up so often: almost everything that is an adverbial word in Portuguese is, in Korean, a particle glued to a noun.
`),
  vocab: [
    V('e', '에', 'destination, place or time; glued to a noun it forms the adverb of manner'),
    V('ge', '게', 'suffix that turns a noun into an adverb of manner'),
    V('neomu', '너무', 'too much; excessively'),
    V('ppun', '만큼', 'measure; as much as it takes (the Korean "enough", a noun)'),
    V('aseo', '어서', 'and; and therefore (it binds cause and consequence)'),
    V('boda', '보다', 'than; that (the particle that makes the comparative)'),
    V('gajan', '가장', 'the most (adverb of superlative)'),
    V('jeil', '제일', 'the most (enters with the scope particle: the most X of)'),
    V('josim', '조심', 'care; caution (josim-e, carefully)'),
    V('ppalli', '빠르', 'quick; fast (ppalli-ge, quickly)'),
    V('se', '세', 'strong; intense (se-ge, with force)'),
    V('sarang', '사랑', 'love; affection (the list of qualities of 1 Corinthians 13)'),
    V('innae', '인내', 'patience (the noun that takes the adverb)'),
    V('hangsi', '항상', 'always'),
    V('jogeum', '조금', 'a little; sometimes'),
    V('ttak', '때가끔', 'from time to time'),
    V('eonje', '언제', 'never'),
    V('butong', '보통', 'in general; as a rule'),
    V('an', '안', 'not (an adverb that stands against the verb; it goes before it)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The adverb of manner is made with a particle: noun plus {e}. It is the same particle as destination, place and time, reused for derivation — the transformational phenomenon.',
      ),
    },
    {
      n: '2',
      text: T(
        '{e} is a glued particle and {ge} is a stuck suffix; both produce an adverb of manner, and in both cases the adverb comes after the piece it qualifies.',
      ),
    },
    {
      n: '3',
      text: T(
        'Korean does not inflect degree: the comparative is adjective plus {boda} plus term, the superlative is {gajan} plus adjective, excess is {neomu} plus adjective.',
      ),
    },
    {
      n: '4',
      text: T(
        'The frequency adverb goes before the verb, time goes after it in a particle and the connective goes at the end of the clause: three positions, three earlier lessons.',
      ),
    },
    {
      n: '5',
      text: T(
        '{an} is an adverb and not a verb, so it also goes before the verb; and {aseo} is ambiguous, it translates "and" and "and therefore", and the verb that follows decides which.',
      ),
    },
  ],
  notes: [
    {
      label: T('One square, two jobs'),
      text: T(
        'Korean reuses a particle for function and for derivation, and the most visible case is the adverb of manner: the destination particle glued to a noun is the adverb of how. Mandarin and Japanese reuse particles too, but neither gives function and derivation to the same item.',
      ),
    },
    {
      label: T('The noun that becomes an adverb'),
      text: T(
        'In 1 Corinthians 13 each quality of love is a Korean noun with an adverb, not an adjective. "The kindness is patient" is, in Korean, the noun patience with the adverb patient: Greek had an adjective where Korean has a noun, and the translation bought the structure instead of the sense.',
      ),
    },
  ],
  examples: [
    { text: '빠르게', gloss: T('ppalli-ge — quickly (noun plus the suffix {ge})') },
    { text: '조심해서', gloss: T('josim-eoseo — carefully (noun plus {e} plus {aseo})') },
    {
      text: '그것보다 좋아요',
      gloss: T('geu-geot-bo-da jo-a-yo — it is better than that (good plus {boda} plus that)'),
    },
    { text: '가장 좋아요', gloss: T('gajan jo-a-yo — it is the best ({gajan} plus good)') },
    {
      text: '너무 예뻐서 울었어요',
      gloss: T('neomu yeop-peo-seo u-reo-sseo-yo — she was so pretty that she cried'),
    },
  ],
  tables: [
    {
      caption: T('Five degrees, five words, no inflection at all'),
      head: [T('Degree'), T('What Korean does'), T('Example'), T('What Portuguese does')],
      rows: [
        [
          T('positive'),
          T('nothing: the noun alone'),
          T('{ppalli}, quick'),
          T('the plain adjective'),
        ],
        [
          T('comparative'),
          T('noun plus {boda} plus the term'),
          T('better than X'),
          T('inflects the adjective'),
        ],
        [
          T('superlative'),
          T('{gajan} plus the noun'),
          T('the fastest'),
          T('inflects the adjective'),
        ],
        [
          T('nominal superlative'),
          T('{jeil} plus the scope particle'),
          T('the richest of the city'),
          T('the richest of the city'),
        ],
        [T('excess'), T('{neomu} plus the noun'), T('fast too much'), T('inflects the adjective')],
        [T('enough'), T('{ppun} after the noun'), T('as much water'), T('inflects it too')],
      ],
    },
    {
      caption: T('Where "much" goes in each language of the project'),
      head: [T('Language'), T('Position'), T('Word'), T('Lesson')],
      rows: [
        [T('Mandarin'), T('before the adjective'), T('{tai}, too much'), T('16 of Mandarin')],
        [T('Mandarin'), T('before the adjective'), T('{zuì}, the most'), T('16 of Mandarin')],
        [T('Japanese'), T('before the adjective'), T('{totemo}'), T('11 of Japanese')],
        [T('Japanese'), T('after the verbal form'), T('{itsumo}, always'), T('11 of Japanese')],
        [
          T('Korean'),
          T('after the noun, glued with {e}'),
          T('{josim-e}, carefully'),
          T('this one'),
        ],
        [
          T('Korean'),
          T('after the noun, glued with {ge}'),
          T('{ppalli-ge}, quickly'),
          T('this one'),
        ],
        [T('Korean'), T('before the verb'), T('{hangsi}, always'), T('this one')],
      ],
    },
    {
      caption: T('Korean frequency is an adverb, and an adverb goes before the verb'),
      head: [T('Adverb'), T('Gloss'), T('Where it goes'), T('Linked lesson')],
      rows: [
        [
          T('{hangsi}'),
          T('always'),
          T('before the verb'),
          T('the position is the reverse of the Japanese one'),
        ],
        [T('{butong}'), T('in general'), T('before the verb'), T('time in lesson 7 goes after it')],
        [
          T('{jogeum}'),
          T('a little; sometimes'),
          T('before the verb'),
          T('the connective of lesson 9 goes at the end'),
        ],
        [
          T('{ttak}'),
          T('from time to time'),
          T('before the verb'),
          T('like the others: before the verb'),
        ],
        [T('{eonje}'), T('never'), T('before the verb'), T('like the rest of the frequency')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How do you say "better than he" in Korean, if the adjective is "good"?'),
    options: [
      T('good plus {boda} plus he'),
      T('more plus good'),
      T('good plus {gajan}'),
      T('good plus {e}'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Turn the noun "care" into an adverb of manner by gluing the particle on: 조심____',
      ),
      answer: '에',
    },
    {
      kind: 'match',
      prompt: T('Match each Korean adverb to its gloss'),
      pairs: [
        { a: T('{hangsi}'), b: T('always') },
        { a: T('{jogeum}'), b: T('a little; sometimes') },
        { a: T('{ttak}'), b: T('from time to time') },
        { a: T('{eonje}'), b: T('never') },
        { a: T('{gajan}'), b: T('the most') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('Where does the Korean frequency adverb go in the clause?'),
      options: [
        T('before the verb'),
        T('after the verb'),
        T('at the end of the clause'),
        T('glued to the noun, with a particle'),
      ],
      answer: 0,
    },
  ],
};
