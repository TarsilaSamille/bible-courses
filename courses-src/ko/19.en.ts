import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  section: T('Syntax'),
  title: T('Adjectives, numerals, and where each piece sits in the stack'),
  subtitle: T(
    'The modifier comes after the noun it modifies, the {ui} particle sits in the middle of the stack, and between two possessives it repeats',
  ),
  body: C(`## The noun phrase is a stack

The basic order of the sentence is object, verb, subject. That order solves the problem of the sentence. But the Korean noun phrase has a second problem on top of the first, and the second one is a problem of place: a group of words around a noun is a STACK, and each layer of that stack has its fixed place. The stack has this shape: numeral, counter, noun, {ui} (eui, "of"), noun.

The detail that trips beginners sits in the middle of that formula, not at the end. The modifier comes AFTER the noun it modifies, and the {ui} particle sits neither at the front nor at the end of the stack: it sits between the noun and the modifier. So "my big red book" is not a row of three words: it is book, {ui}, red, {ui}, big, read from the noun outwards. That is two {ui} in one phrase, and neither of them in the position Portuguese would have put them.

Notice too that the noun is the centre, not the end. Anyone translating from Portuguese word by word puts the noun last, because in Portuguese it is the last word of a simple phrase; in Korean it is the piece everything else hangs from, and everything else stacks to its right. A Korean noun phrase is not a row: it is a tree lying on its side with the trunk in the middle.

## The adjective comes after the noun

The Korean adjective is the piece that glues itself to the back of the noun. And its position is what ties this course to the other two, because the three languages of this project put the adjective in three different places and the comparison settles the position once and for all. In Portuguese the adjective comes before, in "livro vermelho". In Japanese it comes before too, and there the adjective is really a noun that simply stands before the other noun. In Mandarin it comes before once more, and the particle {de} is what closes the group after it.

In Korean the adjective comes after. This is not a matter of taste: it is the position. And the test is quick. "Small red book" translated with the adjectives in front turns into, in Korean, a row of loose nouns with no piece joining them, and the joining piece is exactly the {ui}, or the form that does its job.

## The numeral and the counter open the stack

The numeral and the counter are the only layers that stand before everything else, and that is why they open the stack: when they are there, they are the first layer and the noun comes right behind them. The whole phrase at once: "three of my red books" is {se gwon-ui ppalkan chaek} in Korean, read as numeral, counter, {ui}, adjective, noun. The noun is the CENTRE of the stack, with the numeral on one side and the modifier on the other, and the central table is exactly that diagram. Anyone looking for the numeral at the end of the phrase, as in Portuguese, never finds it.

An honest warning about that phrase: when two nouns stand next to each other with no verb in between, Korean joins them with {ui}, and the literal reading of {se gwon-ui ppalkan chaek} is "three volumes of red book". The stack is the same stack, and what decides between "three of my red books" and "three volumes of red book" is the context, not the order, and the order is already given, and it is always this one.

And what does NOT change, inside the stack, is the order among the modifiers themselves. If there are two descriptors, as in "small red book", the one CLOSEST to the noun is the one that distinguishes more: {jageun ppalkan chaek} is a small red book, and not a red small book. It is the one thing in the stack that Portuguese does exactly the same way.

## The doubled {ui} and the biblical hook

When two possessives come next to each other, the {ui} is repeated: "my of your of book" is {naui-ui neui-ui chaek}, and the repetition is obligatory, not stylistic. The alternative is to substantive the first possessive, {naui} alone can work as a possessive pronoun, with no {ui} and no noun after it, but {ui} has no elided form: either it repeats, or the phrase gains a word. A repeated {ui} is one of the most brutal things about written Korean: the same syllable twice in a row, and the reader has to know that it is two links and not a typing mistake.

The biblical hook cannot be John 6:9, because that verse has already been spent on the numeral and the counter, and repeating the example would erase the new layer. Here the verse goes one layer deeper, in 1 Cor 13:4-8. In "love is patient", the noun {sarang} holds the centre and the topic particle sticks to it at once, because it is the noun that governs the particle and the modifier that comes after the group: {sarang-eun orae injneun}, "love is patient", with the adverb {orae} between the noun group and the verb. And in 1 Cor 13:8 the structure repeats intact, with the noun opening the clause and the verb last. The same verse, in two layers, shows the stack from outside and from inside.
`),
  vocab: [
    V('ui', '의', 'genitive particle, "of", linking one group to another; pronounced eui (ui)'),
    V('chaek', '책', 'book; the noun that sits at the centre of the stack (chaek)'),
    V('ppalkan', '빨간', 'red, in the form that modifies the following noun (ppalkan)'),
    V('jageun', '작은', 'small, in the form that modifies the following noun (jageun)'),
    V('keun', '큰', 'big, in the form that modifies the following noun (keun)'),
    V('naui', '나의', 'my; a possessive that also works on its own (naui)'),
    V('neui', '네', 'your; second person possessive (neui)'),
    V('se', '세', 'three; the Korean numeral, standing before everything in the stack (se)'),
    V('gwon', '권', 'counter for books and scrolls (gwon)'),
    V('sarang', '사랑', 'love; the noun that opens 1 Cor 13 (sarang)'),
    V('orae', '오래', 'for a long time; duration adverb (orae)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The noun phrase stack has this order: numeral, counter, noun, {ui}, noun. The noun sits in the centre.',
      ),
    },
    {
      n: '2',
      text: T(
        'A modifier always comes AFTER the noun it modifies, and the {ui} particle sits in the middle of the stack, between the noun and the modifier.',
      ),
    },
    {
      n: '3',
      text: T(
        'The adjective never goes before the noun, unlike in Portuguese, Japanese and Mandarin.',
      ),
    },
    {
      n: '4',
      text: T(
        'Numeral and counter are the only layers that come before everything; without them the noun opens the stack.',
      ),
    },
    {
      n: '5',
      text: T(
        'Between two modifiers, the one closest to the noun is the one that distinguishes more — as in lesson 9 of the ja course.',
      ),
    },
  ],
  notes: [
    {
      label: T('The doubled {ui} and its penalty'),
      text: T(
        'Two possessives in a row repeat the {ui}: {naui-ui neui-ui chaek}, "my of your of book". The repetition is obligatory, because {ui} is a particle with no elided form. It is one of the most brutal things about written Korean: two identical syllables, side by side, with different meanings.',
      ),
    },
    {
      label: T('The noun is what governs the particle'),
      text: T(
        'In {sarang-eun orae injneun} (1 Cor 13:4) the {eun} sticks to the noun, and the adverb {orae} comes after the group, not before it. Anyone translating word by word puts the adverb in front and breaks the stack without noticing, because the mistake is not of word but of place.',
      ),
    },
  ],
  examples: [
    { text: '빨간 책', gloss: T('ppalkan chaek — red book: the adjective comes after the noun') },
    {
      text: '작은 빨간 책',
      gloss: T(
        'jageun ppalkan chaek — small red book: the one closest to the noun distinguishes more',
      ),
    },
    {
      text: '세 권의 책',
      gloss: T('se gwon-ui chaek — three books: numeral, counter, {ui}, noun'),
    },
    {
      text: '나의 빨간 책',
      gloss: T('naui ppalkan chaek — my red book: {ui} before the adjective'),
    },
    {
      text: '사랑은 오래 참고',
      gloss: T(
        'sarang-eun orae injneun — love is patient (1 Cor 13:4): noun, particle, adverb, verb',
      ),
    },
  ],
  tables: [
    {
      caption: T('The noun phrase stack, layer by layer'),
      head: [T('Layer'), T('Piece'), T('Where it sits in the stack'), T('Example (romanisation)')],
      rows: [
        [T('1'), T('numeral'), T('before everything: it opens the stack'), T('se — three')],
        [T('2'), T('counter'), T('right after the numeral'), T('gwon — counter for books')],
        [T('3'), T('noun'), T('the centre: everything hangs from it'), T('chaek — book')],
        [
          T('4'),
          T('{ui} (eui)'),
          T('after the noun, not at the end of the stack'),
          T('gwon-ui — of books'),
        ],
        [
          T('5'),
          T('modifier of the second noun'),
          T('between the {ui} and the noun it modifies'),
          T('ppalkan — red'),
        ],
      ],
    },
    {
      caption: T('Where the adjective falls in each of the three languages'),
      head: [
        T('Language'),
        T('Where the adjective goes'),
        T('How it looks in writing'),
        T('Where the lesson is'),
      ],
      rows: [
        [T('Portuguese'), T('before the noun'), T('livro vermelho'), T('lesson 8 of this course')],
        [
          T('Japanese'),
          T('before, and it is a noun'),
          T('akai hon — red book'),
          T('lesson 10 of the ja course'),
        ],
        [
          T('Mandarin'),
          T('before, closed by the particle {de}'),
          T('the particle {de} comes after the adjective'),
          T('lesson 13 of the zh course'),
        ],
        [T('Korean'), T('after the noun'), T('ppalkan chaek — red book'), T('this lesson')],
      ],
    },
    {
      caption: T('One possessive or two: what happens to the {ui}'),
      head: [T('Situation'), T('How it looks'), T('Reading')],
      rows: [
        [T('one possessive'), T('{naui} + {ui} + noun'), T('naui-ui chaek — my book')],
        [
          T('two possessives in a row'),
          T('the {ui} repeats, without exception'),
          T('naui-ui neui-ui chaek — my of your of book'),
        ],
        [
          T('the first one substantivised'),
          T('{naui} alone, with no {ui} and no noun after'),
          T('naui chaek — my book'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In Korean, where does the adjective sit relative to the noun it modifies?'),
    options: [
      T('before the noun, as in Portuguese'),
      T('after the noun'),
      T('before the numeral and the counter'),
      T('inside the {ui} particle'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('The adjective comes after the noun: "red" + "book" = 빨간____'),
      answer: '책',
    },
    {
      kind: 'match',
      prompt: T('Match each piece of the stack to the place it occupies'),
      pairs: [
        { a: T('{se}'), b: T('numeral: opens the stack, before everything') },
        { a: T('{gwon}'), b: T('counter: right after the numeral') },
        { a: T('{ui}'), b: T('genitive particle: after the noun') },
        { a: T('{ppalkan}'), b: T('adjective: after the noun, in the middle of the stack') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('How is "my of your of book" written in Korean?'),
      options: [
        T('naui chaek neui chaek'),
        T('naui-ui neui-ui chaek'),
        T('neui-ui naui-ui chaek'),
        T('chaek-ui naui neui'),
      ],
      answer: 1,
    },
  ],
};
