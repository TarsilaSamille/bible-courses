import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  section: T('Phonetics'),
  title: T('The four tones'),
  subtitle: T('The same syllable, four meanings — tone is part of the word'),
  body: C(`## What a tone is

Mandarin is tonal: every syllable carries one of four tones, plus a neutral tone. Tone is not melody; it is relative pitch. Two identical syllables with different tones are different words, sometimes with opposite meanings.

The four tones are {ā}, first, high and level; {á}, second, rising; {ǎ}, third, dipping then rising; and {à}, fourth, falling sharply. The neutral tone, unmarked, belongs to short syllables and sounds like a half tone.

The most cited example shows why this matters for translation: {mā} is "mother", {má} is "horse" and {mǎ} is "a game piece". Same writing, three unrelated words.

## The shortcut for the third tone

For a reader there is a shortcut: **almost every third-tone syllable is written with {i} or {u}**. That is why {nǐ}, "you", and {hǎo}, "good", sound so unlike {nī} and {hāo}. The rule fails in a few cases, {ē} and {é}, which is enough to mislead anyone who leans on it alone.

## Tone when reading the Bible

Chinese verses carry no tone marks, and the translator chose each one by sense. Anyone reading aloud has to recreate that choice. In John 1:1, {yǔ} is the verb "to be" in the third person, and the translator writes {是}: context settles what the writing does not say.`),
  vocab: [
    V('妈', '妈', 'mother (mā, tone 1)'),
    V('马', '马', 'horse; a game piece (mǎ, tone 3)'),
    V('nǐ', '你', 'you (nǐ, tone 3)'),
    V('hǎo', '好', 'good (hǎo, tone 3)'),
    V('是', '是', 'to be (shì, tone 4)'),
    V('不', '不', 'not (bù, tone 4)'),
    V('四', '四', 'four (sì, tone 4)'),
  ],
  rules: [
    { n: '1', text: T('Every syllable has one of four tones, or the neutral tone.') },
    { n: '2', text: T('The third tone is almost always written with {i} or {u}: {nǐ} and {hǎo}.') },
    {
      n: '3',
      text: T(
        'Two third tones in a row: the first is pronounced low — {nǐ hǎo} sounds like "níhhǎo".',
      ),
    },
  ],
  notes: [
    {
      label: T('Why the text carries no tone marks'),
      text: T(
        'The 1919 {和合本} writes without tone marks, following European custom. Modern editions add them.',
      ),
    },
  ],
  examples: [
    { text: '妈', gloss: T('mā — mother (tone 1)') },
    { text: '马', gloss: T('mǎ — horse / piece (tone 3)') },
    { text: '你好', gloss: T('nǐ hǎo — hello (two third tones)') },
  ],
  tables: [
    {
      caption: T('The four tones'),
      head: [T('Tone'), T('Mark'), T('Pitch'), T('Example')],
      rows: [
        [T('1'), T('{ā}'), T('high and level'), T('{mā} mother')],
        [T('2'), T('{á}'), T('rising'), T('{má} horse')],
        [T('3'), T('{ǎ}'), T('dips then rises'), T('{mǎ} piece')],
        [T('4'), T('{à}'), T('falling'), T('{mà} four items')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {nǐ hǎo}, what happens to the first tone?'),
    options: [
      T('It stays on the third tone'),
      T('It is pronounced low, so it does not collide'),
      T('It changes to the first tone'),
      T('It becomes the neutral tone'),
    ],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Write the accented vowel of "mother": m____'), answer: 'ā' },
    {
      kind: 'match',
      prompt: T('Match the syllable to its tone'),
      pairs: [
        { a: T('{mā}'), b: T('tone 1 — mother') },
        { a: T('{mà}'), b: T('tone 4 — falling') },
        { a: T('{hǎo}'), b: T('tone 3 — dips then rises') },
        { a: T('{má}'), b: T('tone 2 — rising') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
