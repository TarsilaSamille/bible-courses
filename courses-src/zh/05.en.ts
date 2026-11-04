import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  section: T('Numbers'),
  title: T('Counting: classifiers and the —er form'),
  subtitle: T('No number stands alone; each noun asks for its own'),
  body: C(`## No number is self-sufficient

In Portuguese, "two books" is "books" plus "two". In Chinese the number is almost always **incomplete**: {liǎng} {běn} {shū}, two books, where {běn} is the *classifier*, a word naming the category and shape of what is counted. The number says how many; the classifier says what.

There are around a hundred classifiers and you need not learn them all. The few that cover most cases are: {个} (gè, the generic one, the default when nothing else demands a choice), {本} (běn, for books and anything with pages), {只} (zhī, for animals), {位} (wèi, for people, politely), {张} (zhāng, for sheets). Each has a reason: {本} comes from *root*, and a {本} was a bamboo scroll; {只} comes from *one single paw* and counts an animal's legs; {张} is the *stretching* of a sheet. The reason almost always explains the rule.

## The {er} form

After the number the noun can take a form ending in {er}: {liǎng} {běn} {shū} and {yī} {běn} {shū}, two books, one book. The {er} is an echo of older spoken Mandarin, and it shows up above all with one, two and some: {yī} {zhī} {yā}, "one hen".

This is **not** the Portuguese plural. {shū} does not become "books": the plural already sits in the {er}, and {shū} is the same noun in both sentences. A beginner translating from Portuguese arrives at {shū} {sān}, "books three", and is wrong, because the noun has no slot after the number.

The confusion has a source: this plural {er} is not the {érhuà} of the opening chapter. That one counts; this one only softens the sound. They are two different things that Chinese courses habitually merge, and the spoken language treats them differently: in Beijing the old plural survives, in other dialects it is gone.

## Numbers and counting in the Psalms

Numbers are everywhere in the Psalms and the Gospels: "three days", "two hundred", "many years". And the arithmetic of Ezekiel 3, {sì shí} {nián}, {sì shí} {nián} {hé} {sān} {gè} {yuè}, shows the other side of the classifier: the three terms count the same unit and use the same {个}, and it is the missing numeral in the third that shows {个} is what repeats. A translator who renders each term by its value loses that count. Reading that without knowing classifiers is a wall.`),
  vocab: [
    V('个', '个', 'generic classifier (gè)'),
    V('běn', '本', 'classifier for books (běn)'),
    V('zhǐ', '只', 'classifier for animals (zhī)'),
    V('zhāng', '张', 'classifier for sheets (zhāng)'),
    V('位', '位', 'polite classifier for people (wèi)'),
    V('liǎng', '两', 'two (liǎng)'),
    V('sān', '三', 'three (sān)'),
    V('shū', '书', 'book (shū)'),
    V('数字', '数字', 'number (shùzì)'),
  ],
  rules: [
    { n: '1', text: T('The number never stands alone: it comes with a classifier.') },
    { n: '2', text: T('{两} "two" is used only with a classifier; {二} is the abstract "two".') },
    {
      n: '3',
      text: T('The {—er} form marks plural with one, two and some: {yī běn shū} = "one book".'),
    },
    {
      n: '4',
      text: T('The noun itself never changes: the plural is in the {er}, not in the noun.'),
    },
  ],
  notes: [
    {
      label: T('The bracketed "three" in Ezekiel'),
      text: T(
        'In the {和合本}, {三} appears in brackets at Ezekiel 3,2 because the noun {三} means "number", not the numeral. It is the translator\'s reminder, not an edition of the text.',
      ),
    },
  ],
  examples: [
    { text: '两个', gloss: T('liǎng gè — two (small things)') },
    { text: '三本', gloss: T('sān běn — three books') },
    { text: '三只', gloss: T('sān zhī — three animals') },
    { text: '一张', gloss: T('yì zhāng — one sheet') },
  ],
  tables: [
    {
      caption: T('The same number, different classifiers'),
      head: [T('Classifier'), T('For'), T('Example')],
      rows: [
        [T('{个} gè'), T('small or abstract things'), T('{yī gè rén} one person')],
        [T('{本} běn'), T('books, records'), T('{sān běn shū} three books')],
        [T('{只} zhī'), T('animals'), T('{yī zhī gǒu} one dog')],
        [T('{位} wèi'), T('people, politely'), T('{yī wèi xiānsheng} a gentleman')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which classifier completes {三 ____ 鸡}?'),
    options: [T('{本}'), T('{只}'), T('{张}'), T('{个}')],
    answer: 1,
    hint: T('{鸡} is a hen, and animals take their own classifier.'),
  },
  exercises: [
    { kind: 'fill', prompt: T('Write the numeral for "three" in characters: ____'), answer: '三' },
    {
      kind: 'match',
      prompt: T('Match the noun to its classifier'),
      pairs: [
        { a: T('book {书}'), b: T('{本}') },
        { a: T('dog {狗}'), b: T('{只}') },
        { a: T('page {页}'), b: T('{张}') },
        { a: T('person {人}'), b: T('{个}') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
