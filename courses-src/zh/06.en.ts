import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  section: T('Pronouns'),
  title: T('Pronouns and demonstratives'),
  subtitle: T(
    'Mandarin saves words the way Portuguese does, and that is what makes it hard to read',
  ),
  body: C(`## Three pronouns, one form

Chinese has {wǒ} (I), {nǐ} (you) and {tā} (he). There is no gender and no formal register: the respectful "you" is the same {nǐ}, and the distinction sits in the verb.

What makes reading hard is that **the pronoun is usually dropped**. In {tā shì shīfu}, "he is a teacher", the subject can go missing once context has identified it. Portuguese insists; Mandarin dispenses. Reading a verse, the fragment {chū} {qù} on its own does not say who, and biblical reading is full of dropped subjects.

## Demonstratives: where, not which

Demonstratives are {zhè} (this, near) and {nà} (that, far), and they come after the noun: {zhè} {běn} {shū} is "this book", literally "book-this". There is no article and no gender, and {zhè} {shān} and {nà} {shān} are "this mountain" and "that mountain".

Position matters because {zhè} {zhè} also means "this is": {wǒ} {zhè} {zhè} {shì} {shuō} {de} means "this is what I am saying".

## The dropped subject in the Psalms

The Psalms are the hardest case. A psalm like 23 is almost entirely noun phrases with no explicit verb, and in Mandarin that produces sentences that look incomplete to a Portuguese eye. Recognising the dropped subject and dropped verb is what separates reading from memorising characters.`),
  vocab: [
    V('wǒ', '我', 'I (wǒ)'),
    V('nǐ', '你', 'you (nǐ)'),
    V('tā', '他', 'he; she (tā)'),
    V('zhè', '这', 'this, near (zhè)'),
    V('nà', '那', 'that, far (nà)'),
    V('shì', '是', 'to be (shì)'),
    V('出去', '出去', 'to go out (chūqù)'),
    V('shān', '山', 'mountain (shān)'),
    V('主', '主', 'Lord (zhǔ)'),
  ],
  rules: [
    { n: '1', text: T('The subject pronoun is dropped when context supplies it.') },
    { n: '2', text: T('There is no gender and no formal person: {tā} covers he and she.') },
    { n: '3', text: T('Demonstratives come AFTER the noun: {zhè běn shū} = "this book".') },
    { n: '4', text: T('{zhè zhè} also means "this is": {wǒ zhè zhè shì shuō de}.') },
  ],
  notes: [
    {
      label: T('Dropping is not optional'),
      text: T(
        'When the subject is dropped and nothing before identified it, the sentence is genuinely ambiguous. In the Psalms that happens every verse, which is why studying Psalms in Chinese starts with grammar, not with the text.',
      ),
    },
  ],
  examples: [
    { text: '他是老师', gloss: T('tā shì lǎoshī — he is a teacher') },
    { text: '这本书', gloss: T('zhè běn shū — this book') },
    { text: '那山', gloss: T('nà shān — that mountain') },
    { text: '我这就是', gloss: T('wǒ zhè jiù shì — this is what I mean') },
  ],
  tables: [
    {
      caption: T('Where the pronoun shows and where it vanishes'),
      head: [T('Sentence'), T('With pronoun'), T('Without pronoun')],
      rows: [
        [T('statement'), T('{wǒ shì shīfu} I am a teacher'), T('{wǒ} is required')],
        [T('question'), T('{nǐ shì lǎoshī ma} are you a teacher?'), T('{nǐ} is required')],
        [T('reply'), T('{shì de} yes'), T('just {shì}: the subject comes from context')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {这本书}, what does {这} do?'),
    options: [
      T('It comes before the noun, like an article'),
      T('It comes after the noun, pointing at it'),
      T('It is a verb'),
      T('It is a numeral'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "he" with the pronoun: ____ 是 老师 (he is a teacher)'),
      answer: '他',
    },
    {
      kind: 'match',
      prompt: T('Match the pronoun to the person'),
      pairs: [
        { a: T('{我}'), b: T('I') },
        { a: T('{你}'), b: T('you') },
        { a: T('{他}'), b: T('he; she') },
        { a: T('{这}'), b: T('this (near)') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
