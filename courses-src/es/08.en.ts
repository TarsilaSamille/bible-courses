import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Adjectives'),
  subtitle: T('position + apocope (buen/gran!)'),
  section: T('Adjectives and adverbs'),
  body: C(`## Agreement

Adjectives agree in gender and number: {bueno} → {buena}, {buenos}, {buenas} · {feliz} → {felices} · {grande} → {grandes}. Consonant nationalities also vary: {español} → {española}, {francés} → {francesa}. {hermano} → {hermanos}/{hermanas} "brother/sister".

## Position: before or after

**After** the noun the adjective is **objective**, descriptive: {un hombre pobre} "a man without money" · {una casa bonita} "a nice house".

**Before**, the adjective is **subjective**, evaluative: {un pobre hombre} "a poor fellow" · {un nuevo libro} "another book" vs {un libro nuevo} "a brand-new book".

## Apocope

Five adjectives drop their final vowel before a masculine singular noun:

• {bueno} → {buen}: {un buen hombre} · {buenas nuevas} (feminine keeps the full form!)
• {malo} → {mal}: {un mal hombre}
• {grande} → {gran}: {gran Dios} "great God"
• {santo} → {san}: {San Juan} "Saint John" · {San Pablo}
• {ciento} → {cien}: {cien años} "one hundred years"

Apocope **does not** happen when the adjective follows: {un hombre bueno} is required.

## Substantivized adjectives

With an article, adjectives turn into nouns: {los buenos} "the good people", {lo importante} "the important thing", {las santas} "the saints".

Biblical: {buenas nuevas} "good news" (the gospel) · {gran mandamiento} "the great commandment" (John 13:34).`),
  vocab: [
    V('buen hombre', 'bueno', 'good man (apocope!)'),
    V('gran Dios', 'grande', 'great God'),
    V('San Juan', 'santo', 'Saint John'),
    V('pobre hombre', 'pobre', 'poor fellow (before!)'),
    V('buenas nuevas', 'nueva', 'good news'),
    V('ciudad', 'ciudad', 'city (feminine -dad!)'),
    V('nuevo', 'nuevo', 'new (another!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"un pobre hombre" vs "un hombre pobre"?'),
    options: [
      T('Same'),
      T('Poor fellow (before!) vs no money (after!)'),
      T('The opposite'),
      T('Error'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete with apocope: "___ Dios" (great God)'),
      answer: 'gran',
      hint: T('grande apocopes: the vowel drops before a masc. sg.'),
    },
    {
      kind: 'choose',
      prompt: T('Where does apocope apply?'),
      options: [
        T('{un buen hombre}'),
        T('{un hombre bueno}'),
        T('{una buena mujer}'),
        T('{unas buenas ideas}'),
      ],
      answer: 0,
      hint: T('Only before a masculine singular noun.'),
    },
    {
      kind: 'match',
      prompt: T('Match the full form to the apocopated one'),
      pairs: [
        { a: T('bueno'), b: T('buen') },
        { a: T('malo'), b: T('mal') },
        { a: T('santo'), b: T('san') },
        { a: T('ciento'), b: T('cien') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'After the noun = objective (hombre pobre = moneyless); before = subjective (pobre hombre = poor fellow!).',
      ),
    },
    {
      n: '2',
      text: T(
        'Apocope before masc. singular: bueno→buen, malo→mal, grande→gran, santo→san, ciento→cien.',
      ),
    },
    { n: '3', text: T('Adjectives agree in gender and number: buena, buenos, felices, nuevas.') },
  ],
  notes: [
    {
      label: T('Double agreement'),
      text: T(
        'When the noun is plural, the adjective agrees in gender and number with every element: {las casas blancas}. With two adjectives of different classes the first stays singular and the second plural — see the pattern in lesson 22.',
      ),
    },
  ],
  examples: [
    { text: '{un buen hombre}', gloss: T('A good man (apocope of bueno).') },
    { text: '{gran Dios}', gloss: T('Great God.') },
    { text: '{buenas nuevas}', gloss: T('Good news (the gospel!).') },
    { text: '{San Juan}', gloss: T('Saint John (apocope of santo).') },
  ],
  tables: [
    {
      caption: T('Table 1 — Agreement of common adjectives'),
      head: [T('Adjective'), T('m. sg.'), T('f. sg.'), T('m. pl.'), T('f. pl.')],
      rows: [
        ['bueno', '{buen}', '{buena}', '{buenos}', '{buenas}'],
        ['malo', '{mal}', '{mala}', '{malos}', '{malas}'],
        ['grande', '{gran}', '{grande}', '{grandes}', '{grandes}'],
        ['feliz', '{feliz}', '{feliz}', '{felices}', '{felices}'],
        ['nuevo', '{nuevo}', '{nueva}', '{nuevos}', '{nuevas}'],
      ],
    },
    {
      caption: T('Table 2 — Adjective position'),
      head: [T('Order'), T('Example'), T('Typical value')],
      rows: [
        [T('before'), '{un pobre hombre}', T('subjective (evaluative)')],
        [T('after'), '{un hombre pobre}', T('objective (descriptive)')],
        [T('before'), '{un nuevo libro}', T('another (not brand-new!)')],
        [T('after'), '{un libro nuevo}', T('brand-new')],
      ],
    },
  ],
};
