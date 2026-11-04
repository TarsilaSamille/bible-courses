import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  section: T('Phonetics'),
  title: T('No spaces: where the word ends'),
  subtitle: T('Three characters almost always form one word, and context decides'),
  body: C(`## The problem

Mandarin is written without spaces between words. A beginner sees {我爱你} and cannot tell whether that is one word, two or three. The good news: in practice **almost every word is two or three characters**, and they group in twos.

{Mā ma} is one word, "mother". {Chī fàn} is one word too, "to eat". Difficulty shows up in four-character words such as {Shàngchuán}, and there vocabulary saves you: recognise the parts and you recognise the word.

## Three rules that handle the common case

First: {wǒ}, "I", {nǐ}, "you", and {tā}, "he", are single-character words, and nearly everything else pairs up. Second: a four-character word splits into two pairs, as {xīn ài}, "true love", or {měi lì}, "beauty". Third: there is no space before {的}. {wǒ} + {的} + {shū} is "my book", and {的} is a linking particle, a Portuguese "de" glued on.

## Numbers, names and titles when reading the Bible

Verse numbers are a relief: {约翰} {3} {16} reads "Yīnyà sān shíliù", and someone looking it up goes straight there. Compound proper nouns, such as the one for Israel, and titles can take longer: many begin with {主}, the divine name. Learn those names as whole units rather than character by character.`),
  vocab: [
    V('wǒ', '我', 'I (wǒ)'),
    V('ài', '爱', 'to love (ài)'),
    V('nǐ', '你', 'you (nǐ)'),
    V('tā', '他', 'he (tā)'),
    V('的', '的', 'linking particle (of)'),
    V('shū', '书', 'book (shū)'),
    V('fàn', '吃饭', 'to eat (chī fàn)'),
    V('约翰', '约翰', 'John (Yuēhàn)'),
    V('主', '主', 'Lord; master (zhǔ)'),
  ],
  rules: [
    { n: '1', text: T('Words almost always have two or three characters.') },
    { n: '2', text: T('{我} {你} {he} are single-character words; the rest pair up.') },
    { n: '3', text: T('The particle {的} joins with no space: {wǒ de shū} = "my book".') },
    { n: '4', text: T('Four-character words normally split into two pairs.') },
  ],
  notes: [
    {
      label: T('Pinyin helps you split'),
      text: T(
        'Pinyin editions put a space at every syllable — {shàng} {chuán} — which shows where the syllable ends and, with practice, where the word does.',
      ),
    },
  ],
  examples: [
    { text: '妈妈', gloss: T('mā ma — mother (two of the same character)') },
    { text: '我的书', gloss: T('wǒ de shū — my book') },
    { text: '吃饭', gloss: T('chī fàn — to eat') },
    { text: '爱心', gloss: T('xīn ài — genuine love') },
  ],
  tables: [
    {
      caption: T('Where the word ends'),
      head: [T('Written'), T('Split'), T('Meaning')],
      rows: [
        [T('{我爱你}'), T('{wǒ} {ài} {nǐ}'), T('I love you — three words')],
        [T('{吃饭}'), T('{chī} {fàn}'), T('to eat — one word')],
        [T('{我的书}'), T('{wǒ} {的} {shū}'), T('my book — three words')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {我的书}, what is {的}?'),
    options: [T('A verb'), T('A linking particle'), T('A pronoun'), T('A numeral')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "to eat": 吃____ (to eat) and ____爱 (to love)'),
      answer: '饭',
    },
    {
      kind: 'match',
      prompt: T('Match each word to its meaning'),
      pairs: [
        { a: T('{我}'), b: T('I') },
        { a: T('{书}'), b: T('book') },
        { a: T('{吃饭}'), b: T('to eat') },
        { a: T('{主}'), b: T('Lord; master') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
