import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  section: T('Kanji'),
  title: T('The kanji as ideogram and as component'),
  subtitle: T(
    'The same character is at once a word with a meaning and a piece of drawing inside another one, and that is why you can guess',
  ),
  body: C(`
## Two lives in one character

Half of this already showed up with {水}: it is "water" and it is also the component of everything that has to do with water or a river. The consequence is enormous. If the component is the same, the new word is guessable. Anyone who knows {水} arrives at {海} "sea", {川} "river" and {汗} "sweat" without ever having met them, because the drawing is saying the same thing in all three.

And the drawing goes beyond the component: it **explains**. {明}, sun plus moon, means "bright", and anyone looking at the character sees the answer without ever having heard the word. {休} is a person leaning against a tree, and it means "rest". {森} is three trees and it means "forest". {品} is three mouths and it means "goods". Almost no writing system in the world shows the sense inside the shape. Japanese does, and it shows both: the word and the account.

## Numbers: the decimal is made of ideograms too

Japanese digits are kanji as well, and they are the most compositional ideograms that exist: {go} is five, {jū} is ten, and that is all you need in order to write any number from 11 to 99. Twenty-one is not "two, one times ten" said twice: it is two, then ten, then one, read from the back, like a digit. Japanese decimal is positional, and that shows up in daily life the moment you read a sign.

A cinema sign is the shortest example: the cinema number is always the name followed by the digit. Cinema 3 is the name of the cinema and {三}. The three counts nothing there, it orders, which is why a two-digit number is read from the right.

An honest word about scale, because the reader needs to know where they are standing: Japanese has about 2,000 kanji in common use, the official set called Jōyō. An adult Japanese person reads some 3,000 to 5,000 over the course of a life. Nobody learnt all of them at school: they learnt the 2,000 of daily life and the rest out of necessity.

## Position and direction: the vocabulary that opens any text

This is the group that appears most often after the verbs, and it is what lets you read anything without a dictionary: an instruction manual, a map, a recipe, a shopping list. {上} is above, {下} is below, {中} is inside and also middle, {外} is outside, {前} is the front and also before, {後ろ} is behind, {横} is the side, {左} is the left, {右} is the right.

These ten kanji, together with the verbs, cover nearly the whole language of instruction that exists in the language, and it is exactly the kind of sentence that turns up in a translated Bible text, where someone tells someone else to go somewhere.

## The same character, particle one hour and noun the next

The fine point comes now, and it explains why Japanese grammar looks simpler than it is. {前} is a particle in one use: before a verb or before a timed noun, {前} means "before". In the same character, on its own or with {の}, it is a noun: "the front". Nothing changes in the drawing; what changes is what it is stuck to.

And there is also {過} "to pass, to go beyond", which splits the same way. As a verb it is grammatical, and so it goes out in kana: the {す} left over in *sugiru* is the trace of the ideogram nobody wrote. When the noun is the grammatical thing, the drawing comes back: {通過} is the noun for the "passage" of a station, a place you pass through.

## Where this shows up in the Bible

The Japanese translation of 1987, {新共同訳}, writes {神} and {世界} and {言葉} in ideograms, with no footnote at all. A reader who does not know kanji reads those three as lost ideograms, when in fact they are the most obvious words in the language. And the second of them, {言葉}, is literally the two things the Bible says the Word is. {本}, "book", is also a counter: Japanese counters are kanji with a literal meaning, and the book counter evokes a roll of parchment, out of which the word "book" itself came.
`),
  vocab: [
    V('hi', '日', 'sun; day (hi)'),
    V('tsuki', '月', 'moon; month (tsuki)'),
    V('me', '明', 'bright; daylight (me)'),
    V('yasu', '休', 'to rest; rest (yasu)'),
    V('mori', '森', 'forest (mori)'),
    V('go', '五', 'five (go)'),
    V('jū', '十', 'ten; base of the count (jū)'),
    V('mae', '前', 'front; before; previous (mae)'),
    V('katsu', '過', 'to pass; to go beyond (katsu)'),
    V('hon', '本', 'book; counter for books (hon)'),
    V('shin', '神', 'God; spirit (shin)'),
    V('sekai', '世界', 'world (sekai)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A kanji is a word and a component at the same time: {水} is "water" and it is the root of everything that has water in it.',
      ),
    },
    {
      n: '2',
      text: T(
        'The drawing explains the sense: {明} is sun plus moon and means "bright"; {森} is three trees and means "forest".',
      ),
    },
    {
      n: '3',
      text: T(
        'Digits are kanji and they are positional: {jū} is ten and it is the base of every number above 9.',
      ),
    },
    {
      n: '4',
      text: T(
        'Position and direction are, after the verbs, the most frequent kanji in a text — without them you read no instruction at all.',
      ),
    },
    {
      n: '5',
      text: T(
        'The same character can be a particle in one use and a noun in another; it is what follows it that decides.',
      ),
    },
  ],
  notes: [
    {
      label: T('The real scale'),
      text: T(
        'Jōyō is about 2,000 kanji in common use. An adult Japanese person reads 3,000 to 5,000 over a lifetime, and nobody learnt all of them at school: they learnt the 2,000 of daily life and the rest out of necessity.',
      ),
    },
    {
      label: T('The verb disappears, the noun stays'),
      text: T(
        'As in lesson 1: whatever is grammatical goes out in kana. That is why the name {新共同訳} has four ideograms and nearly the whole rest of the sentence is kana. {過} is the cleanest example — the verb is kana, the noun goes back to being kanji.',
      ),
    },
  ],
  examples: [
    { text: '明日の朝', gloss: T('ashita no asa — tomorrow morning') },
    { text: '木の下に休む', gloss: T('kino shita ni yamu — to rest under the tree') },
    { text: '深い森', gloss: T('fukai mori — a deep forest') },
    { text: '三丁目', gloss: T('san-chōme — the third block of the city') },
    { text: '神の言葉', gloss: T('kami no kotoba — the word of God') },
  ],
  tables: [
    {
      caption: T('The ten digits'),
      head: [T('Number'), T('Kanji'), T('Reading')],
      rows: [
        [T('one'), T('{一}'), T('hitori')],
        [T('two'), T('{二}'), T('futa')],
        [T('three'), T('{三}'), T('mitsu')],
        [T('four'), T('{四}'), T('yon')],
        [T('five'), T('{五}'), T('go')],
        [T('six'), T('{六}'), T('roku')],
        [T('seven'), T('{七}'), T('nana')],
        [T('eight'), T('{八}'), T('hachi')],
        [T('nine'), T('{九}'), T('kyū')],
        [T('ten'), T('{十}'), T('jū')],
      ],
    },
    {
      caption: T('Position and direction'),
      head: [T('Kanji'), T('Reading'), T('Sense')],
      rows: [
        [T('{上}'), T('ue'), T('above, on top')],
        [T('{下}'), T('shita'), T('below, under')],
        [T('{中}'), T('naka'), T('inside; the middle')],
        [T('{外}'), T('soto'), T('outside, exterior')],
        [T('{前}'), T('mae'), T('the front; before')],
        [T('{後ろ}'), T('ushiro'), T('behind')],
        [T('{横}'), T('yoko'), T('the side; beside')],
        [T('{左}'), T('hidari'), T('left')],
        [T('{右}'), T('migi'), T('right')],
        [T('{間}'), T('aida'), T('between; interval')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {明}, what is the drawing saying?'),
    options: [
      T('that it is only an ideogram, with no word in it'),
      T('sun and moon together — that is, "bright"'),
      T('that the character means "day"'),
      T('that it is counting something'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "eighteen" with the two digits: ____八'),
      answer: '十',
    },
    {
      kind: 'match',
      prompt: T('Match the kanji to the sense'),
      pairs: [
        { a: T('{上}'), b: T('above') },
        { a: T('{下}'), b: T('below') },
        { a: T('{中}'), b: T('inside') },
        { a: T('{右}'), b: T('right') },
        { a: T('{前}'), b: T('front; before') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('How does the number appear on a cinema sign?'),
      options: [
        T('the digit after the name: name plus {三}'),
        T('the digit before the name: {三} plus name'),
        T('in hiragana, because numbers have no ideogram'),
        T('in katakana, like every foreign number'),
      ],
      answer: 0,
    },
  ],
};
