import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Adjectives and comparison'),
  subtitle: T('Agreement and patterns'),
  section: T('The noun'),
  body: C(`## The adjective follows

In Arabic the adjective follows the noun and agrees with it in gender and number, but never in case. {الكِتَابُ الكَبِيرُ} is "the big book"; {الكِتَابُ الكَبِيرَ} is the same thing once the noun falls into a governed case. The case belongs to the noun, and to the noun alone.

## Agreement, or its absence

The adjective agrees in gender and number, not in definiteness. With a definite noun and a definite adjective, both take {ال}: {الكِتَابُ الكَبِيرُ}. With a definite noun and an indefinite adjective, only the noun takes the article: {الكِتَابُ كَبِيرٌ}, which leaves the quality open.

## The superlative pattern

Comparative and superlative use the {أَفْعَلَ} pattern: {أَكْبَرُ} is "greater" and, with {مِنْ}, "greater than" — {أَكْبَرُ مِنْ}. As a superlative it takes {ال}: {الْأَكْبَرُ}. The same pattern shows up in colours: {أَبْيَضُ}, {أَسْوَدُ}, {أَحْمَرُ}. Note that the article in the superlative belongs to the form, not to the noun.

## Reading criterion

Mark the noun first and identify its case; the adjective does not interfere. If the adjective comes right after and the clause makes sense, it is almost certainly an adjective — the word after it is what shows whether the construction is nominal instead.`),
  vocab: [
    V('كَبِير', 'كبير', 'big'),
    V('كَبِيرَة', 'كبير', 'big (f.)'),
    V('جَدِيد', 'جديد', 'new'),
    V('مُقَدَّس', 'قدس', 'holy'),
    V('أَبْيَض', 'بيض', 'white'),
    V('أَسْوَد', 'سود', 'black'),
    V('أَحْمَر', 'حمر', 'red'),
    V('أَكْبَر', 'كبير', 'greater'),
    V('أَقْوَى', 'قوي', 'stronger'),
    V('الْحُبّ', 'حب', 'love'),
    V('الْمَوْت', 'موت', 'death'),
    V('الْعَهْد', 'عهد', 'covenant; testament'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How do you say “the big book”?'),
    options: [T('book big'), T('the book the-big'), T('book the-big'), T('the-book big')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Feminine of {أَبْيَض}: ___'),
      answer: 'بَيْضَاءُ',
      hint: T('The feminine uses {-اء}.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sequence agrees correctly?'),
      options: [T('book.m big.m'), T('book.m big.f'), T('books.m big.m'), T('book.m big.p')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match adjective and color.'),
      pairs: [
        { a: T('white'), b: T('white') },
        { a: T('black'), b: T('black') },
        { a: T('red'), b: T('red') },
      ],
      answer: [0, 1, 2],
    },
  ],
  rules: [
    { n: '1', text: T('Adjective and noun agree in gender and number.') },
    { n: '2', text: T('The definite article may be repeated before each agreeing element.') },
    { n: '3', text: T('{أَفْعَلَ} is frequent in colors and the comparative {أَفْعَلُ مِنْ}.') },
  ],
  notes: [
    {
      label: T('Comparison'),
      text: T(
        'The superlative may use {أَفْعَلُ} or {أَكْثَرُ}; {أَكْبَرُ} is common in the formula {اللهُ أَكْبَرُ}.',
      ),
    },
  ],
  examples: [
    { text: 'الْكِتَابُ الْجَدِيدُ', gloss: T('the new book') },
    { text: 'أَرْضٌ مُقَدَّسَةٌ', gloss: T('holy land') },
    { text: 'الْحُبُّ أَقْوَى مِنَ الْمَوْتِ', gloss: T('love is stronger than death') },
  ],
  tables: [
    {
      caption: T('Agreement'),
      head: [T('Noun'), T('Adjective')],
      rows: [
        ['كِتَابٌ كَبِيرٌ', 'livro grande'],
        ['كِتَابٌ كَبِيرَةٌ', 'livro grande'],
        ['كُتُبٌ كِبَارٌ', 'livros grandes'],
        ['الكِتَابُ الكَبِيرُ', 'o grande livro'],
      ],
    },
  ],
};
