import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  title: T('The irregular plurals'),
  subtitle: T('uomini, uova, braccia, bar'),
  section: T('Syntax and the noun'),
  body: C(`## Five plurals that throw the rule away

The regular plural has already been seen: {-o} becomes {-i}, {-a} becomes {-e}, {-e} becomes {-i}. What breaks it is a group of words that swap the final vowel instead of adding one: {uomo} → **uomini**, {donna} → **donne**, {bambino} → **bambini**, {piede} → **piedi**. The prettiest are {uovo} → **uova** and {braccio} → **braccia**, where masculine {-o} becomes {-a} and the plural looks feminine without being so.

Then there is the other group, the ones that look irregular and are not: {cameriere} → **camerieri**, {cantante} → **cantanti**, {libro} → **libri**. Here there is no exception at all; it is the ordinary grid, and the surprise is only ours.

## Where the plural does not change at all

Some nouns accept no plural at all, and the form stays the same forever: {la città} → **le città**, {la specie} → **le specie**, {la serie} → **le serie**, {il bar} → **i bar**, {il cor} → **i cor}, which also admits the more literary {i cuori}. None of them gives the gender away in the ending, because there is no new ending: whoever sees {le città} knows it is feminine from the article, and whoever sees {i bar} knows it is masculine for the same reason.

## In the Bible

Mark 21:9 has a plural that a reader coming from Portuguese memorises without noticing: «Osanna al Figlio di Davide», preceded by {i figli di Gerusalemme}, by {le Palme}, by {cantanti} and by {i bambini}. Four nouns and three irregular plurals in a single sentence.

The most instructive is {i figli}: in modern Italian it is {figli}, without the Latin {-o}. Someone who writes {i figlios} is rendering a liturgical and archaic form, not making a mistake; but in a running text, {i figli} is what you should expect.

## Reading criterion

When the noun is {uomo}, {donna}, {bambino} or {piede}, look up the irregular plural before you build the sentence: it is the shortest of all lists and the one you will meet most. When the plural is identical to the singular, do not translate twice and do not drop an article: the form repeats, the article changes.`),
  vocab: [
    V('uomo', 'uomo', 'man'),
    V('uomini', 'uomo', 'men'),
    V('donna', 'donna', 'woman'),
    V('donne', 'donna', 'women'),
    V('bambino', 'bambino', 'child'),
    V('bambini', 'bambino', 'children'),
    V('piede', 'piede', 'foot'),
    V('piedi', 'piede', 'feet'),
    V('uovo', 'uovo', 'egg'),
    V('uova', 'uovo', 'eggs'),
    V('manica', 'manica', 'sleeve'),
    V('maniche', 'manica', 'sleeves'),
    V('cameriere', 'cameriere', 'waiter'),
    V('cantante', 'cantante', 'singer'),
    V('cantanti', 'cantante', 'singers'),
    V('braccio', 'braccio', 'arm'),
    V('braccia', 'braccio', 'arms'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the plural of uovo?'),
    options: [T('uovi'), T('uova'), T('uove'), T('uoi')],
    answer: 1,
    hint: T('An irregular masculine plural in -a.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the plural: l’uomo → ___'),
      answer: 'uomini',
      hint: T('The final -o drops and -i appears.'),
    },
    {
      kind: 'match',
      prompt: T('Match the singular to the plural.'),
      pairs: [
        { a: 'donna', b: 'donne' },
        { a: 'braccio', b: 'braccia' },
        { a: 'manica', b: 'maniche' },
        { a: 'cantante', b: 'cantanti' },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is correct?'),
      options: [T('Due la città'), T('Due città'), T('Due la cittàs'), T('Dui città')],
      answer: 1,
      hint: T('Città is invariable: the article moves to the plural.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Five plurals swap the final vowel: uomo/uomini, donna/donne, bambino/bambini, piede/piedi, uovo/uova, braccio/braccia.',
      ),
    },
    {
      n: '2',
      text: T('Nouns in -e make -i like everybody else: cameriere/camerieri, cantante/cantanti.'),
    },
    { n: '3', text: T('Invariable nouns keep the form: città, specie, serie, bar, cor.') },
    {
      n: '4',
      text: T('In an invariable plural only the article shows gender: le città against i bar.'),
    },
    {
      n: '5',
      text: T(
        'The letter of the plural is not the gender: braccia (masculine) and maniche (feminine) coexist.',
      ),
    },
  ],
  notes: [
    {
      label: T('Not every irregular has the same key'),
      text: T(
        '{uovo} and {braccio} are masculine and become -a; {manica} is feminine and becomes -e. What decides is not the gender, it is the word: no rule produces the group, so the whole list has to be learned.',
      ),
    },
    {
      label: T('When the plural is the same'),
      text: T(
        'In {i cor} the Italian may be talking about hearts or about corals, because both words are {il cor}; context settles it, not the ending. And {i figlios}, {i liberos} and {i mondi} are archaic plurals in -o that Portuguese does not have: they are liturgical and poetic forms.',
      ),
    },
  ],
  examples: [
    {
      text: 'I figli di Gerusalemme acclamano.',
      gloss: T('The children of Jerusalem acclaim him.'),
    },
    { text: 'Due uomini e due donne.', gloss: T('Two men and two women.') },
    { text: 'Cantanti e camerieri nella sala.', gloss: T('Singers and waiters in the hall.') },
    { text: 'Cinque braccia e due uova.', gloss: T('Five arms and two eggs.') },
    { text: 'Le mani e i piedi del lebbroso.', gloss: T('The hands and feet of the leper.') },
    { text: 'Cento bambini nella strada.', gloss: T('A hundred children in the street.') },
    { text: 'Le città sono grandi.', gloss: T('The cities are large.') },
    { text: 'I bar chiudono tardi.', gloss: T('The bars close late.') },
  ],
  tables: [
    {
      caption: T('Plurals that need memory'),
      head: ['Singolare', 'Plurale', 'Cosa succede'],
      rows: [
        ['uomo', 'uomini', '-o scompare, entra -i'],
        ['donna', 'donne', '-a scompare, entra -e'],
        ['bambino', 'bambini', 'come un -o normale'],
        ['piede', 'piedi', '-e scompare'],
        ['uovo', 'uova', '-o diventa -a'],
        ['manica', 'maniche', '-a diventa -e'],
        ['cameriere', 'camerieri', '-e diventa -i'],
        ['cantante', 'cantanti', '-e diventa -i'],
        ['libro', 'libri', '-o diventa -i'],
        ['braccio', 'braccia', '-o diventa -a'],
      ],
    },
    {
      caption: T('Invariable plurals'),
      head: ['Singolare', 'Genere', 'Plurale'],
      rows: [
        ['la città', 'femminile', 'le città'],
        ['la specie', 'femminile', 'le specie'],
        ['la serie', 'femminile', 'le serie'],
        ['il bar', 'maschile', 'i bar'],
        ['il cor', 'maschile', 'i cor'],
        ['il paese', 'maschile', 'i paesi'],
      ],
    },
  ],
};
