import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  title: T('The article: the whole system'),
  subtitle: T('il, uno, un po’ d’acqua, dei'),
  section: T('The article and the pronouns'),
  body: C(`## Three articles and three counts

The definite points at something already known: {il libro} "the book" (the one in view, or the only one), {la casa} "the house", {i libri} "the books". The indefinite introduces: {un libro} "a book", {una casa} "a house". The partitive is the third, and it is the one Portuguese does not have: **dei** libri are some books, an indeterminate number, {delle} rose some roses. With countable nouns in the singular, the partitive looks like the indefinite: {un libro} can be one book or one of the books, and context says which.

The three systems close into one grid. Definite: {il}, {lo}, {la}, {l’}, {i}, {gli}, {le}. Indefinite: {un}, {uno}, {una}. Partitive: {un}/{uno}/{una} in the singular, {dei}, {degli}, {delle} in the plural.

## {lo} and {l’}: the first letter decides

The masculine gains {lo} before **s + consonant**, {z}, {gn}, {ps} and {x}: {lo studente}, {lo zaino}, {lo gnomo}, {lo psicologo}, {lo yacht}. Before a vowel the article has no form of its own and becomes {l’}: {l’albero}, {l’uomo}, {l’amore}. The indefinite {uno} enters in exactly the same positions: {uno studente}, {uno zaino}, {uno gnomo}. And {un}, the ordinary form, never appears before a vowel or before those consonants.

## The partitive and the elision that carries it

The plural partitive is born from {di + i}: {di + i} gives {dei}, {di + gli} gives {degli}, {di + le} gives {delle}. Before a vowel {di} joins nothing and simply stays: that is why Portuguese says "a little water" and Italian writes **{un po’ d’acqua}**, with a {d’} that looks like the remains of a preposition and is nothing of the kind. The same {d’} shows up in {d’acqua}, {dell’acqua}, {d’uomini}, and {delle} after a noun.

There is one distinction Portuguese does not make: when the noun is already determined, {di} becomes {del}, {dello}, {della}, {dei}, {degli} — and {dei} stops being partitive. You say {il libro di Paolo} "Paolo's book" and {dei libri} "some books", never {dei Paolo}.

## In the Bible

John 1:6 opens with all three counts in one sentence: "Fu mandato da Dio un uomo, {il cui nome} era Giovanni". {Un uomo} is indefinite: that man is nobody yet as far as the reader is concerned. {Il cui nome} is definite and relative: the name is already his, and the article comes back precisely because the clause took it up again. And {da Dio} shows the preposition {da}, the same one as the {d’} in {d’acqua}, with origin instead of part.

## Reading criterion

Whenever {dei}, {degli} or {delle} appears, check whether the following noun is determined: determined means genitive and becomes {del}; undetermined means partitive and stays {dei}. And when the name already carries a proper noun, the article drops: {Dio}, {Maria}, {Roma}, without it and with a capital letter as the mark.`),
  vocab: [
    V('un', 'un', 'a / one'),
    V('uno', 'uno', 'one (before s, z, gn, ps)'),
    V('una', 'una', 'a'),
    V('libro', 'libro', 'book'),
    V('studente', 'studente', 'student'),
    V('zaino', 'zaino', 'backpack'),
    V('albero', 'albero', 'tree'),
    V('acqua', 'acqua', 'water'),
    V('d’acqua', 'acqua', 'of water'),
    V('po’', 'po’', 'a little'),
    V('dei', 'di', 'some (of the)'),
    V('delle', 'di', 'some (of the)'),
    V('rosa', 'rosa', 'rose'),
    V('giardino', 'giardino', 'garden'),
    V('nome', 'nome', 'name'),
    V('casa', 'casa', 'house'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How do you translate un po’ d’acqua?'),
    options: [
      T('a little water'),
      T('a small water'),
      T('little water'),
      T('the water of the little'),
    ],
    answer: 0,
    hint: T('It is a partitive: some water.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: ___ studente (a student)'),
      answer: 'uno',
      hint: T('s + consonant takes uno.'),
    },
    {
      kind: 'choose',
      prompt: T('What is the plural partitive of la rosa?'),
      options: [T('dei'), T('delle'), T('degli'), T('dela')],
      answer: 1,
      hint: T('Feminine plural.'),
    },
    {
      kind: 'fill',
      prompt: T('Genitive of il libro: il libro ___ Paolo'),
      answer: 'di',
      hint: T('The noun is already determined.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The definite article points at something already identified; the indefinite introduces something new.',
      ),
    },
    {
      n: '2',
      text: T('Lo enters before s + consonant, z, gn, ps and x; l’ enters before a vowel.'),
    },
    { n: '3', text: T('Uno enters exactly where lo would, and inflects like a masculine noun.') },
    {
      n: '4',
      text: T(
        'The plural partitive is born from di + article: di + i = dei, di + gli = degli, di + le = delle.',
      ),
    },
    {
      n: '5',
      text: T(
        'With a determined noun the partitive does not fit: il libro di Paolo, not dei Paolo.',
      ),
    },
  ],
  notes: [
    {
      label: T('The d’ that means nothing'),
      text: T(
        'In {un po’ d’acqua}, {d’} is not "of" with a sense of its own: it is the preposition {di} elided before a vowel, and the noun that follows is the partitive’s complement. The same {d’} appears in {d’uomini}, {d’acqua}, {domani}, {dentro}.',
      ),
    },
    {
      label: T('Where the article drops'),
      text: T(
        'The article is missing when the noun is already determined by something else: a proper noun ({Dio}, {Milano}), a numeral ({tre libri}), or an indefinite pronoun ({ogni uomo}, {qualche libro}). Outside those three cases the omission sounds like an error.',
      ),
    },
  ],
  examples: [
    { text: 'Un libro sulla tavola.', gloss: T('A book on the table.') },
    { text: 'Uno studente con uno zaino.', gloss: T('A student with a backpack.') },
    { text: 'Lo zaino dello studente.', gloss: T('The student’s backpack.') },
    { text: 'Un po’ d’acqua.', gloss: T('A little water.') },
    { text: 'Dei libri di Paolo.', gloss: T('Some of Paolo’s books.') },
    { text: 'Delle rose del giardino.', gloss: T('Some of the garden’s roses.') },
    { text: 'L’albero della piazza.', gloss: T('The tree in the square.') },
    { text: 'Degli studenti della classe.', gloss: T('Some of the class’s students.') },
    {
      text: 'Fu mandato da Dio un uomo, il cui nome era Giovanni.',
      gloss: T('A man was sent from God, whose name was John.'),
    },
  ],
  tables: [
    {
      caption: T('Definite article'),
      head: ['Genere', 'Singolare', 'Plurale'],
      rows: [
        ['maschile', 'il libro', 'i libri'],
        ['maschile s + consonante', 'lo studente', 'gli studenti'],
        ['femminile', 'la casa', 'le case'],
        ['ante vocale', 'l’albero', 'gli alberi'],
      ],
    },
    {
      caption: T('Indefinite and partitive'),
      head: ['', 'Singolare', 'Plurale'],
      rows: [
        ['masc. comune', 'un libro', 'dei libri'],
        ['masc. s + consonante', 'uno studente', 'degli studenti'],
        ['femminile', 'una casa', 'delle case'],
        ['con sostantivo', 'un po’ d’acqua', '—'],
      ],
    },
    {
      caption: T('Elision of di, a, da'),
      head: ['Preposizione', 'Davanti all’articolo', 'Esempio'],
      rows: [
        ['di', 'dell’', 'dell’acqua'],
        ['a', 'all’', 'all’altra riva'],
        ['da', 'dall’', 'dall’inizio'],
        ['in', 'nel', 'nel libro'],
        ['su', 'sul', 'sul mare'],
      ],
    },
  ],
};
