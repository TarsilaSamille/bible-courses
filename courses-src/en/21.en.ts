import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  title: T('The adverb: comparison and the position of not'),
  subtitle: T('greater, the best, I do not think so — what takes comparison'),
  section: T('Adverbs'),
  body: C(`## Comparing with more and with less

The comparative of a one-syllable word adds {er} and the superlative adds {est}: {fast → faster → fastest}, {hard → harder → hardest}. Two or more syllables bring in {more} and {most}: {slowly → more slowly → most slowly}, {carefully → more carefully → most carefully}.

The rule about **the superlative with {the}** comes right after it: a superlative of more than one syllable requires the definite article in front. English says {the most careful}, {the most slowly}, and the form without {the} appears only inside fixed expressions such as {He is one of the most careful teachers in the school}. A short superlative does without the article, which is why {fastest} can stand alone and {most carefully} cannot.

John 15:13 in the KJV has the irregular comparative: {Greater love hath no man than this}. The form {greater} does not come out of {great} by any visible rule, and a translator has to treat it as a word.

## The irregulars, and the ones that do not compare

{Hardly}, {barely} and {lately} **do not** compare: there is no {more hardly} and no {the most lately}. They are adverbs of fixed sense, and a learner who compares them produces {He hardly ever comes more hardly}, which is not English.

What is genuinely irregular is a different list, and it is short: {well → better → best}, {badly → worse → worst}, {little → less → least}, {far → farther/further → farthest/furthest}. And {late} gives {later} and {latest}, which mean "after" and "most recent", not "later on".

The practice sentence with **well** is the one tests use most: {She sings well}, {She sings better than her sister}, {She sings the best of anyone}.

## Where not goes

Negation in English does not come before the verb. It goes **after the auxiliary**: {I do not think so}, {He did not come}, {They have not seen it}. Writing {I not think} breaks the sentence, and in American speech {I think not} sounds over-formal.

When the main verb follows an auxiliary, {not} sits between the two: {I think he is right} becomes {I think he is not right}, and never {I think he is not right} with {not} after the verb.

The KJV uses the same distribution: Mark 4:38 reads {carest thou not that we perish?}, with {not} after the verb and before the pronoun. Portuguese also puts the negation after the verb, and it is the relation between {not} and the pronoun that produces the wrong reading.

## When there is no auxiliary

With {be} and with the modals there is no problem: {not} goes after them ({He is not here}, {She cannot come}). With the ordinary verbs English **inserts** an auxiliary: {I do not believe}, {He does not know}, {They did not come}.

It is the same particle {do} in three tenses — {do not}, {does not}, {did not} — and it is the key to the whole of negation. Anyone who understands it also understands the question, because the question inverts exactly the same pair.`),
  vocab: [
    V('faster', 'fast', 'faster'),
    V('fastest', 'fast', 'fastest'),
    V('more slowly', 'slowly', 'more slowly'),
    V('most carefully', 'carefully', 'most carefully'),
    V('greater', 'great', 'greater'),
    V('the highest', 'high', 'the highest'),
    V('hardly', 'hardly', 'hardly'),
    V('barely', 'barely', 'barely'),
    V('lately', 'lately', 'lately'),
    V('better', 'well', 'better'),
    V('the best', 'well', 'the best'),
    V('worse', 'badly', 'worse'),
    V('the worst', 'badly', 'the worst'),
    V('further', 'far', 'further'),
    V('farthest', 'far', 'the farthest'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'One syllable compares with -er and -est; two or more syllables compare with more and most.',
      ),
    },
    {
      n: '2',
      text: T(
        'A superlative of more than one syllable requires the definite article before it: the most careful, the most quietly.',
      ),
    },
    { n: '3', text: T('Hardly, barely and lately have neither comparative nor superlative form.') },
    {
      n: '4',
      text: T(
        'Well, badly, little and far have irregular comparatives: better/best, worse/worst, less/least, farther/farthest.',
      ),
    },
    {
      n: '5',
      text: T('Negation comes after the auxiliary and never before the verb: I do not think so.'),
    },
  ],
  notes: [
    {
      label: T('Biblical:'),
      text: T(
        'John 15:13 has greater, an irregular comparative with no visible rule. Mark 4:38 has carest thou not, with the negation after the verb and before the pronoun.',
      ),
    },
    {
      label: T('Diagnosis:'),
      text: T(
        'If a learner writes "I not think" or "he not came", the problem is not vocabulary: it is that they translated the position negation has in Portuguese, where it follows the verb.',
      ),
    },
  ],
  examples: [
    {
      text: '{Greater love hath no man than this}',
      gloss: T('greater love hath no man than this'),
    },
    { text: '{She sings better than her sister}', gloss: T('she sings better than her sister') },
    { text: '{She sings the best of anyone}', gloss: T('she sings the best of anyone') },
    {
      text: '{He is one of the most careful teachers}',
      gloss: T('he is one of the most careful teachers'),
    },
    { text: '{It is farther than I thought}', gloss: T('it is farther than I thought') },
    { text: '{I do not think so}', gloss: T('I do not think so') },
    { text: '{I think he is not right}', gloss: T('I think he is not right') },
    { text: '{carest thou not that we perish}', gloss: T('carest thou not that we perish?') },
    { text: '{He does not know}', gloss: T('he does not know') },
    { text: '{They did not come}', gloss: T('they did not come') },
  ],
  tables: [
    {
      caption: T('Comparison of the adverb'),
      head: [T('Type'), T('Form'), T('Example')],
      rows: [
        [T('one syllable'), T('{+er} / {+est}'), '{faster, hardest}'],
        [T('two or more syllables'), T('{more} / {most}'), '{more slowly, most carefully}'],
        [T('irregular'), T('—'), '{better/best, worse/worst, less/least}'],
        [T('long superlative'), T('{the most + adverb}'), '{the most carefully}'],
      ],
    },
    {
      caption: T('Do not compare'),
      head: [T('Word'), T('What it is'), T('What to write instead')],
      rows: [
        ['{hardly}', T('adverb of scarcity'), '{almost never}'],
        ['{barely}', T('adverb of scarcity'), '{just, hardly}'],
        ['{lately}', T('adverb of recent time'), '{recently}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence is correct?'),
    options: [
      T('I not think so'),
      T('I do not think so'),
      T('I not do think so'),
      T('I think not so much'),
    ],
    answer: 1,
    hint: T('Negation comes after the auxiliary, not before the verb.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Complete the comparative: 'She sings ___ than her sister.'"),
      answer: 'better',
    },
    {
      kind: 'fill',
      prompt: T("Complete the superlative with the article: 'He is ___ most careful of them.'"),
      answer: 'the',
    },
    {
      kind: 'match',
      prompt: T('Match the base to the full pair.'),
      pairs: [
        { a: 'well', b: T('better / the best') },
        { a: 'badly', b: T('worse / the worst') },
        { a: 'little', b: T('less / the least') },
        { a: 'far', b: T('farther / the farthest') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is correct?'),
      options: [
        T('She hardly ever comes more hardly than me'),
        T('She comes later than me'),
        T('She comes lately than me'),
        T('She comes the lately than me'),
      ],
      answer: 1,
    },
  ],
};
