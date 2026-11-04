import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  section: T('Writing'),
  title: T('Hiragana: the syllabary that carries the grammar'),
  subtitle: T(
    'Not 86 characters to memorise — five vowels, and everything else follows from the rule',
  ),
  body: C(`
## The anatomy of the character

Hiragana has about 86 characters and it is a syllabary: **one character is one syllable**. That settles what the writing does. An ideograph carries a meaning; a hiragana character carries a sound. Nobody reads Japanese thinking in characters; they think in syllables, exactly as in Mandarin, where a syllable is also a block.

What matters is the anatomy. A character is born from two pieces, a consonant and a vowel, and the vowel is the part that changes shape. There are 5 vowels, a, i, u, e, o, and each of them gives the same consonant a different shape. Consonants become strokes and curves; vowels supply the rest. That is why the right method is not the list: **do not memorise 86 characters, memorise five vowels and the rest follows**. Know the shape of {かた} and you can work out {きた}, {くも}, {けさ} and {こども} without ever having seen them.

This works for reading as much as for writing. A reader who knows the rule sees the syllable inside the character; a reader who only memorised the list has to study them one by one.

## Five vowels, no tones

An isolated vowel fills a whole character, and all five follow the same rule: none of them carries an accent. Mandarin does the opposite: there the same written syllable can be "mother", "horse" or "chess piece", depending on the tone. Japanese has 5 vowels and no tones, so the same written character is always the same word.

The only thing that resembles an accent is the long vowel, and it has an honest sign: either the vowel repeats, as in {おばあさん}, or a horizontal stroke comes after it. Nothing rises and falls. Anyone who has just studied the 4 tones of Mandarin will go looking for a mark that does not exist, and the contrast is the point: two sister languages whose writing diverges at the most visible point of all, the sound.

## The particles that make the sentence

With the character settled, what shows up in nearly every line is a handful of isolated syllables that are not words at all: they are particles, and the grammar lives in them.

{を} (wo) marks the **direct object** and nothing else. It is not "of", it is not "to", it is not a pronoun: it is only the mark that says the thing there is the thing the verb receives. {の} (no) **links two words** and is also the Portuguese "de": {母の} is "of the mother" and {日本語の} is "of Japanese".

{は} (wa) is the hard one. It comes after the pronoun or the noun and marks the **topic** of the sentence, not the subject and not the verb. In "I eat an apple" the {は} turns the pronoun into the topic; its literal translation is "as for". Compare "I eat an apple" with "as for me, I eat an apple": the second one is the same Japanese sentence, word for word. And the same {は}, without changing character at all, becomes "but": "I am going, but he is not". One particle, two functions.

The rest is a small set of very high usage: {に} (ni) for destination and direction, {で} (de) for where an action happens and for the means, {へ} (he) for direction only, and {から} (kara) with {まで} (made) for "from... until".

## {です} and {ます}: the same verb in two registers

Japanese distinguishes spoken text from written text, and the difference lives in two forms: {です} (desu) and {ます} (masu). A sentence like "I eat an apple" can be said one way and written another, and the 1987 Japanese Bible translation picks a single register and keeps it from beginning to end.

A reader needs to know which register they are reading, because the register changes the tone and not the content: {食べます} and {食べる} mean the same thing, and the second is the form you would find written in a dictionary.

The hook is in John 1:1. In Mandarin the verse opens with an ambiguous one-character word; in Japanese, "Word" is {言葉}, two syllables written in kanji and read kotoba. The particles in that verse are all kana.

One last thing turns the reader upside down: negation goes after the verb, and its shape changes with the verb. With {する} the negative is {しない}; with {いる} it is {いない}. There is no "not" in front, as in the language of the original.
`),
  vocab: [
    V('wo', 'を', 'direct object; and nothing else (wo)'),
    V('no', 'の', 'links two words; also "of" (no)'),
    V('wa', 'は', 'topic of the sentence; and also "but" (wa)'),
    V('ni', 'に', 'destination, direction, time (ni)'),
    V('de', 'で', 'place of the action, means, instrument (de)'),
    V('he', 'へ', 'direction; only after the destination and origin particles (he)'),
    V('kara', 'から', 'from, starting point; together with until (kara)'),
    V('made', 'まで', 'until, end point (made)'),
    V('desu', 'です', 'to be; spoken and written register (desu)'),
    V('masu', 'ます', 'polite verbal ending in writing (masu)'),
    V('nai', 'ない', 'negation; comes after the verb (nai)'),
    V('kotoba', '言葉', 'word; the Word of John 1:1 (kotoba)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'One hiragana character is one syllable. Memorise 5 vowels, not 86 characters: the rest follows from the rule.',
      ),
    },
    {
      n: '2',
      text: T(
        'No vowel carries an accent. A long vowel is the vowel repeated or a horizontal stroke.',
      ),
    },
    { n: '3', text: T('{を} marks the direct object and has no translation outside that.') },
    {
      n: '4',
      text: T(
        '{は} comes after the noun and marks the topic of the sentence, not the subject and not the verb.',
      ),
    },
    {
      n: '5',
      text: T(
        '{です} and {ます} state the register, not the content: same sense, different script.',
      ),
    },
  ],
  notes: [
    {
      label: T('One particle, two functions'),
      text: T(
        '{は} after a pronoun is "as for me"; {は} inside a sentence with two halves is "but". Same character, with no mark at all to tell them apart — context decides.',
      ),
    },
    {
      label: T('Negation comes after'),
      text: T(
        'In Portuguese the "not" opens the sentence; in Japanese the negation {ない} sticks to the verb and goes behind it. And its form changes with the verb: with {する} it gives {しない}, with {いる} it gives {いない}.',
      ),
    },
  ],
  examples: [
    { text: 'りんごを食べます', gloss: T('ringo o tabemasu — I eat an apple (written register)') },
    { text: '私は本を読みます', gloss: T('watashi wa hon o yomimasu — as for me, I read a book') },
    { text: '学校に行きます', gloss: T('gakkō ni ikimasu — I go to school') },
    {
      text: '私は食べます、弟は食べません',
      gloss: T('watashi wa tabemasu, otōto wa tabemasen — I eat, but my brother does not'),
    },
    {
      text: '初めは言葉があった',
      gloss: T('hazimeni kotoba ga atta — in the beginning was the Word'),
    },
  ],
  tables: [
    {
      caption: T('The 5 vowels and the shape each one gives'),
      head: [T('Vowel'), T('What the stroke does'), T('Syllable example')],
      rows: [
        [
          T('a'),
          T('one cut and a curve to the right'),
          T('{かた} kata — two consonants become one syllable'),
        ],
        [T('i'), T('two short vertical strokes'), T('{きた} kita')],
        [T('u'), T('a curve with the tip pointing down'), T('{くも} kumo')],
        [T('e'), T('one horizontal stroke and one that rises'), T('{けさ} kesa')],
        [T('o'), T('an almost closed circle'), T('{こども} kodomo')],
      ],
    },
    {
      caption: T('The particles that make the sentence'),
      head: [T('Particle'), T('Function'), T('Example')],
      rows: [
        [T('{を}'), T('direct object, and nothing else'), T('{りんごを} — the apple, as object')],
        [T('{の}'), T('links two words; also "of"'), T('{母の} — of the mother')],
        [T('{は}'), T('topic: "as for X"; and "but"'), T('{私は} — as for me')],
        [T('{に}'), T('destination, direction, time'), T('{学校に} — to school')],
        [T('{で}'), T('where the action happens, or the means'), T('{家で} — at home')],
        [T('{へ}'), T('direction only'), T('{家へ} — to home')],
        [T('{から}'), T('from, starting point'), T('{九時から} — from nine')],
        [T('{まで}'), T('until, end point'), T('{五時まで} — until five')],
      ],
    },
    {
      caption: T('The contractions: two particles fused into a single character'),
      head: [T('Form'), T('Comes from'), T('Used for')],
      rows: [
        [T('{では}'), T('{で} + {は}'), T('at, with: "at the office"')],
        [T('{には}'), T('{に} + {は}'), T('at + topic: "is at school"')],
        [T('{でも}'), T('{で} + {も}'), T('but even so')],
        [T('{とは}'), T('{と} + {は}'), T('which means, in the sense of')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {私は学生です}, what does the {は} after the pronoun mark?'),
    options: [
      T('the subject of the sentence'),
      T('the topic of the sentence'),
      T('the direct object'),
      T('the negation'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "I eat an apple" with the object particle: りんご____食べます'),
      answer: 'を',
    },
    {
      kind: 'match',
      prompt: T('Match the particle to the function'),
      pairs: [
        { a: T('{を}'), b: T('direct object') },
        { a: T('{は}'), b: T('topic of the sentence, and also "but"') },
        { a: T('{に}'), b: T('destination and direction') },
        { a: T('{の}'), b: T('link between two words') },
        { a: T('{から}'), b: T('"from": starting point') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('In {では}, how many particles were fused into a single character?'),
      options: [T('one'), T('two'), T('three'), T('four')],
      answer: 1,
    },
  ],
};
