import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  section: T('Noun'),
  title: T('Counters and the particle {の}: one word, different amounts'),
  subtitle: T(
    'Japanese has no oblique article and no plural: counting is done by a kanji with a literal meaning, and linking one noun to another is done by {の}',
  ),
  body: C(`
## There is no article: there is a counter

English has articles: "the book", "the books". Japanese does not have that article at all, and what replaces the plural is a **counter**: a kanji chosen by the **shape** of the thing and carrying a literal meaning of its own.

So {三本} is three books, counted one by one, and not "books" in general; {二人} is two people; {六つ} is six things of any kind. A noun on its own does not mark plurality: {本} without a counter is one book, or books, indeterminate. The counter decides, and every noun has its own.

## Six counters and the literal meaning of each one

{本} counts what is long and long-sided, and the root of the kanji is "origin", from "rolling a scroll": the old Japanese book was a roll. {人} counts people. {枚} counts what is flat and thin, like a leaf. {匹} counts animals. {台} counts machines and cars. {杯} counts cups and mugs.

Keep the counter by its shape and not by a memorised list: someone who remembers that {枚} is "a smooth sheet" will never miscount a leaf again, and someone who remembers that {台} is "a platform" gets the car right without thinking.

The hook is in John 2:6, six stone jars for the purification rites of the Jews, filled with water. That is counting with a counter, exact, and the structure is the same as any list of objects in the text. Notice the verb of the verse too, {を満たす}: it stays in kana, because it is grammatical. The count and the objects are kanji; the action is kana.

## The tricky part: does the counter change the word or only the sound?

The question every beginner asks is where the plural suffix went. In Japanese there is no suffix; the counter is the plural. The tricky part lies elsewhere: **the numeral changes the word before it touches the noun**.

After one, after two and after three the noun changes shape: {三本} is read *sanbon* and means literally "three + long book"; {二人} is *futari* and {三人} is *sannin*. From four on, the writing no longer changes: {四} stays {四} and {六} stays {六}. What changes is the sound, *yon*, *go*, *roku* or even *mutsu*. The numeral {六} has two readings because old Japanese had two series of numerals: the short one, for dates, and the long one, for everything else. The counters of {匹}, {人} and {杯} follow the short series; the others follow the long one.

After the one the word also becomes its own: *ippon* for a book, *ippai* for a cup, *ippiki* for an animal. And "some" is "some + counter", with no numeral at all: {何本} is some books, {何人} is some people. With a numeral you name the exact amount; without one you say "some", or "many" with {多くの}.

## {の}: possession that comes first

The {の} links two nouns and works like "of". The order is the reverse of ours: "the teacher's book" is {先生 + の + 本}, that is, teacher, "of", book, because the possessor comes first.

And the counter's place in that trio is fixed: {本 + の + 先生}. The counter comes before the {の}, because it is the {の} that closes the noun phrase the counter opened. The beginner gets {先生の本} right and gets it wrong when putting the particle first: {の本先生} does not exist in Japanese, in no register and in no Bible.

The good side is that {の} is the most frequent particle in written Japanese, and nearly every line of text contains one. For a reader it is the place to stand: it is what says whose noun is which.
`),
  vocab: [
    V('hon', '本', 'book; counter for long objects (hon)'),
    V('hito', '人', 'person; counter for people (hito)'),
    V('mai', '枚', 'counter for leaves and flat things (mai)'),
    V('hiki', '匹', 'counter for animals (hiki)'),
    V('dai', '台', 'counter for machines and cars (dai)'),
    V('hai', '杯', 'cup; counter for cups and mugs (hai)'),
    V('sensei', '先生', 'teacher; master (sensei)'),
    V('mizu', '水', 'water (mizu)'),
    V('ha', '葉', 'leaf (ha)'),
    V('mutsu', '六', 'six; numeral with two readings, roku or mutsu (mutsu)'),
    V('yo', '四', 'four; numeral with three readings, yon, yo or shi (yo)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'There is no article and no plural: the counter marks plurality. A noun with no counter is singular or indeterminate.',
      ),
    },
    {
      n: '2',
      text: T(
        'The numeral comes before the counter and the counter comes before the noun: {三本} is "three" + counter + "book".',
      ),
    },
    {
      n: '3',
      text: T(
        'After one, two and three the noun changes shape; from four on the sound changes and the writing stays the same.',
      ),
    },
    {
      n: '4',
      text: T(
        'With {の}, the counter comes before the particle: {本 + の + 先生} is "the teacher\'s book". {の本先生} does not exist.',
      ),
    },
    {
      n: '5',
      text: T(
        '"Some" is "some + counter" with no numeral — {何本}, {何人}; "many" is {多くの} + noun.',
      ),
    },
  ],
  notes: [
    {
      label: T('{の} is where a reader stands'),
      text: T(
        'It is the most frequent particle in written Japanese: nearly every line of text contains one. Anyone who recognises {の} already knows whose noun is which, even without understanding the rest.',
      ),
    },
    {
      label: T('The classic mistake is where the {の} goes'),
      text: T(
        'The counter opens the noun phrase and the {の} closes it. So the beginner writes {先生の本} correctly and writes {の本先生} when trying to be careful with the "of".',
      ),
    },
  ],
  examples: [
    { text: '三本の本を読む', gloss: T('sanbon no hon o yomu — I read three books') },
    { text: '二人の先生', gloss: T('futari no sensei — two teachers') },
    {
      text: '水の甕が六つある',
      gloss: T('mizu no kame ga mutsu aru — there are six jars of water (John 2:6)'),
    },
    { text: '葉が五つ', gloss: T('ha ga itsutsu — five leaves') },
    {
      text: '車があります',
      gloss: T('kuruma ga arimasu — there is a car (no counter: singular or indeterminate)'),
    },
  ],
  tables: [
    {
      caption: T('The most used counters and what each one counts'),
      head: [T('Counter'), T('Usual reading'), T('What it counts'), T('Example')],
      rows: [
        [T('{本}'), T('hon'), T('books and long objects'), T('{三本} — three books')],
        [T('{人}'), T('hito'), T('people'), T('{二人} — two people')],
        [T('{枚}'), T('mai'), T('leaves and flat, thin things'), T('{五枚} — five leaves')],
        [T('{匹}'), T('hiki'), T('animals'), T('{二匹} — two animals')],
        [T('{台}'), T('dai'), T('machines, cars, appliances'), T('{三台} — three cars')],
        [T('{杯}'), T('hai'), T('cups and mugs'), T('{二杯} — two cups')],
      ],
    },
    {
      caption: T('Counter + {の} + noun: the order never changes'),
      head: [T('Construction'), T('What it says')],
      rows: [
        [T('{本 + の + 先生}'), T("the teacher's book — the counter comes before the {の}")],
        [T('{三本の + 先生}'), T('the three people of the case, the three teachers')],
        [T('{の本先生}'), T("does not exist: a {の} before the counter is the beginner's mistake")],
      ],
    },
    {
      caption: T('When the noun changes shape and when only the sound changes'),
      head: [T('Numeral'), T('What changes'), T('Example')],
      rows: [
        [
          T('one, two, three'),
          T('the noun changes shape'),
          T('{三本} *sanbon*, {二人} *futari*, {三人} *sannin*'),
        ],
        [
          T('four or more'),
          T('only the sound changes; the writing stays'),
          T('{四} *yon*, {五} *go*, {六} *roku* or *mutsu*'),
        ],
        [
          T('after the one'),
          T('the noun also gets a shape of its own'),
          T('*ippon*, *ippai*, *ippiki*'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {本 + の + 先生}, the counter goes:'),
    options: [
      T('before the {の}'),
      T('after the {の}'),
      T('after {先生}'),
      T('in place of the {の}'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "three books" with the counter for books: 三____の本'),
      answer: '本',
    },
    {
      kind: 'match',
      prompt: T('Match the counter to what it counts'),
      pairs: [
        { a: T('{本}'), b: T('books and long objects') },
        { a: T('{人}'), b: T('people') },
        { a: T('{枚}'), b: T('leaves and flat things') },
        { a: T('{杯}'), b: T('cups and mugs') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which form means "some books", with no amount named?'),
      options: [T('{何本の}'), T('{多くの}'), T('{この}'), T('{その}')],
      answer: 0,
    },
  ],
};
