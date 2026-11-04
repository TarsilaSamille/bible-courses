import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  section: T('Writing'),
  title: T('Kana: the writing you can learn in a weekend'),
  subtitle: T(
    'Hiragana and katakana are one system in two scripts, and neither of them is spoken Japanese',
  ),
  body: C(`
## Two scripts, one sound

Japanese writes the same syllable in two ways. **Hiragana** {の} and **katakana** {ノ} say the same thing; what changes is register. Katakana is for foreign words, proper nouns and emphasis: the word "computer", the badge of a foreign police force, the sign on a coffee shop. Hiragana is everything else, and it is where the grammar lives.

A page of Japanese looks like a wall of characters, but it is not: nearly all of the text is a small number of syllables repeated, and the most frequent ones are a single syllable. {の} is "of", {に} is "in", {を} marks the object, {は} marks the topic. Four syllables which, added together, show up in almost every sentence that exists.

## What the script hides

A kanji is a word, as in Mandarin, and the difference is that here it carries the etymology in plain sight. {水} is "water" and also the component of any word that has to do with water or a river. Recognising the component is what makes the vocabulary grow.

And the kanji keeps the grammatical part: {食} means "to eat" and turns into a suffix meaning "meal", like {朝食} "breakfast" and {昼食} "lunch". A reader who knows {食} guesses both words.

## The 1987 translation and the punctuation

The 1987 Japanese translation uses kana for everything grammatical and kanji for the content. In a verse like "in the beginning was the Word", the verb appears in kana because it is grammatical. Anyone reading the verse as if it were a photograph of text is reading it wrong: what changes script is what changes function.

Japanese punctuation is different too. Japanese uses {、} and {。}, and many books do not even put them in. A line with no full stop in a Japanese text is normal; it is not a typing error.
`),
  vocab: [
    V('no', 'の', 'of; possessive particle (no)'),
    V('ni', 'に', 'in; to; destination particle (ni)'),
    V('wa', 'は', 'topic; particle that also marks contrast (wa)'),
    V('wo', 'を', 'direct object (wo)'),
    V('mizu', '水', 'water (mizu)'),
    V('tabemono', '食べ物', 'food (tabemono)'),
    V('hon', '本', 'book; also a counter for objects (hon)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Hiragana and katakana say the same syllable: the choice is one of register, not of pronunciation.',
      ),
    },
    {
      n: '2',
      text: T(
        '{の} "of", {に} "in", {を} "object" and {は} "topic" are four syllables that appear in nearly every text.',
      ),
    },
    {
      n: '3',
      text: T(
        'A kanji is a word with its etymology in plain sight: {水} "water" turns up in everything that has water in it.',
      ),
    },
    {
      n: '4',
      text: T(
        'Kana carries the grammar and kanji carries the content — which is why the verb stays in kana.',
      ),
    },
    {
      n: '5',
      text: T('Romaji is for the keyboard and for lists. Nobody reads Japanese in Latin letters.'),
    },
  ],
  notes: [
    {
      label: T('Three systems, not two'),
      text: T(
        'Hiragana, katakana and kanji. The first two are syllabaries; the third is ideographic. Many words are both at once: {食べ物} is written in kanji and read {tabemono}.',
      ),
    },
    {
      label: T("The topic particle does the verb's work"),
      text: T(
        'In "I eat an apple", the {は} after the pronoun is the particle that follows. When it follows a noun it marks contrast: "as for him, he goes".',
      ),
    },
  ],
  examples: [
    { text: '水を飲む', gloss: T('mizu o nomu — I drink water') },
    { text: '食べ物を食べる', gloss: T('tabemono o taberu — I eat food') },
    { text: 'これは本です', gloss: T('kore wa hon desu — this is a book') },
    { text: '本を読む', gloss: T('hon o yomu — I read a book') },
  ],
  tables: [
    {
      caption: T('The two scripts, the same sound'),
      head: [T('Script'), T('Example'), T('When it is used')],
      rows: [
        [T('hiragana'), T('{の}'), T('grammar and everything common')],
        [T('katakana'), T('{ノ}'), T('foreign words, proper nouns, emphasis')],
        [T('kanji'), T('{水}'), T('the content, with the etymology in plain sight')],
      ],
    },
    {
      caption: T('The four particles that appear everywhere'),
      head: [T('Particle'), T('Function'), T('Example')],
      rows: [
        [T('{は}'), T('topic: "as for X"'), T('{私は} — as for me')],
        [T('{を}'), T('direct object'), T('{水を} — the water, as object')],
        [T('{に}'), T('destination, direction, time'), T('{家に} — to home')],
        [T('{の}'), T('possession and link'), T('{私の} — my, of me')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {水を飲む}, which particle marks the direct object?'),
    options: [T('{は}'), T('{を}'), T('{に}'), T('{の}')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "I drink water" with the object particle: 水____飲む'),
      answer: 'を',
    },
    {
      kind: 'match',
      prompt: T('Match the particle to the function'),
      pairs: [
        { a: T('{を}'), b: T('direct object') },
        { a: T('{は}'), b: T('topic') },
        { a: T('{に}'), b: T('destination or direction') },
        { a: T('{の}'), b: T('possession') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which script is used for a foreign word like "computer"?'),
      options: [T('hiragana'), T('katakana'), T('kanji'), T('romaji')],
      answer: 1,
    },
  ],
};
