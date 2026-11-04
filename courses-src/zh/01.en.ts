import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  section: T('Writing'),
  title: T('The character is a word, not a letter'),
  subtitle: T(
    'No character stands for a sound, and that is why learning goes from the shape to the whole',
  ),
  body: C(`## One character, one **word**

In Portuguese, "a" is a letter and "casa" is four of them. In Chinese there is no such split: each character stands for a word or a piece of one. There is no separate "a", which is why nobody says someone "spells" in Chinese. One says {cá} {zi} {xiě}, "to compose characters".

The consequence reverses the Portuguese one. Recognising the sound of an English word tells you nothing about its meaning; recognising a Chinese character already tells you the meaning, even without understanding the sentence. A beginner reading {Zhōng} {guó} ("China") understands more at a glance than someone still memorising the pinyin alphabet.

## Why characters do not look like a code

There is a temptation to read Chinese as a cipher: each character would be a swapped letter. It is not. A character is a word, and words combine as they do in any language. {nǐ} {hǎo} are two words, "you are good", not three letters.

Nor were characters invented all at once. {日} and {月}, sun and moon, are the components of {明}, "bright", and recognising those combinations is what makes vocabulary grow fast.

## What writing brings to Bible reading

Three things. The Union Version ({和合本}, 1919) used characters already current in nineteenth-century writing, so the old text reads today without sounding archaic. Biblical reference is book, chapter and verse, in the same order as in the West. And because each character is a word, a verse of John 1 has about twenty words in it: you can learn them one at a time.`),
  vocab: [
    V('zhōng', '中', 'middle; centre; China (zhōngguó)'),
    V('guó', '国', 'country (guó)'),
    V('hǎo', '好', 'good (hǎo)'),
    V('人', '人', 'person; people (rén)'),
    V('日', '日', 'sun; day (rì)'),
    V('月', '月', 'moon; month (yuè)'),
    V('明', '明', 'bright; clear (míng)'),
    V('cá', '字', 'character (zì)'),
    V('xiě', '写', 'to write (xiě)'),
    V('和合本', '和合本', 'the Union Version, Chinese Bible of 1919'),
  ],
  rules: [
    {
      n: '1',
      text: T('One character stands for a word, not for a sound. There is no Chinese alphabet.'),
    },
    {
      n: '2',
      text: T('Recognising the character already yields the meaning — the opposite of Portuguese.'),
    },
    {
      n: '3',
      text: T('Recognising components (radicals) opens doors: {明} contains {日} and {月}.'),
    },
  ],
  notes: [
    {
      label: T('Which Chinese translation to use'),
      text: T(
        '{和合本} (Union Version, 1919) is the most widely read and uses characters already current in 19th-century writing, so the text does not sound archaic.',
      ),
    },
    {
      label: T('Mandarin or Cantonese'),
      text: T(
        'The course teaches Standard Chinese (putonghua), the language of {和合本} across the mainland. Cantonese uses almost the same characters and a different pronunciation.',
      ),
    },
  ],
  examples: [
    { text: '中', gloss: T('centre; China') },
    { text: '中国', gloss: T('China') },
    { text: '好人', gloss: T('good person') },
    { text: '明', gloss: T('bright (sun + moon)') },
    { text: '写字', gloss: T('to write characters') },
  ],
  tables: [
    {
      caption: T('Three characters broken down'),
      head: [T('Character'), T('Component'), T('Meaning')],
      rows: [
        [T('明'), T('{日} + {月}'), T('sun + moon = bright')],
        [T('好'), T('{女} + {子}'), T('woman + child = good')],
        [T('和'), T('{禾} + {口}'), T('grain + mouth = harmony')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What does {明} mean, and why?'),
    options: [
      T('Bright, because it joins sun and moon'),
      T('Dark, because it is night'),
      T('It has no meaning of its own'),
      T('It only means "to write"'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Write the character for moon: ____'),
      answer: '月',
      hint: T('The same character also means "month".'),
    },
    {
      kind: 'match',
      prompt: T('Match each character to its meaning'),
      pairs: [
        { a: T('{人}'), b: T('person') },
        { a: T('{日}'), b: T('sun; day') },
        { a: T('{好}'), b: T('good') },
        { a: T('{字}'), b: T('character') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
