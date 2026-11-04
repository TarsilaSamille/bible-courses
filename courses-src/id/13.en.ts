import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  section: T('The noun'),
  title: T('The noun and what it does'),
  subtitle: T('No article, no case, no gender: position decides'),
  body: C(`## No inflection, no article

The Indonesian noun has one form. {rumah} is the house, a house, someone’s house and someone’s houses, all with the same five letters. Portuguese settles the difference with an article ({o}, {a}, {os}, {as}) and with a preposition ({do}, {no}, {de}), and anyone who learns a Romance language spends their life looking for the article before saying any noun at all. In Indonesian that slot is empty.

Gender is missing too. {rumah} is neither masculine nor feminine; {buku} is neither masculine nor feminine. A little grammatical gender survives in a handful of isolated nouns, inherited from an older layer of the language rather than from a system: {anak} "the child" and {ibu} "the mother" against {bapak} "the father", but the pair {mobil} and {sepeda} has nothing to do with it. For the reader of Scripture this means there is no gender agreement to get wrong.

Number is not in the noun either. {buku} means "the book" and "the books" with the same word.

## Position does the article’s work

The noun’s function is given by the place it occupies in the sentence. There is no morpheme and no ending: the same word {buku} is a subject with one verb, a direct object, a complement after {adalah}, a possessor before {-nya}, and it appears after a preposition. Five functions, one form.

Portuguese marks three of them with the article and two with a preposition. Indonesian marks all five by position, and in two cases that position is binding: a subject and an object cannot trade places without inverting the meaning, because the order is subject, verb, object and nobody ever breaks it.

When two nouns are candidates for subject and the sentence is ambiguous, it is the verb that settles it, not the shape of the noun. Compare {anjing saya menggigit dia} with {saya menggigit anjing}: the first noun to appear is the subject, and position does the work.

## What the article did, and who does it here

The Portuguese article has three jobs: to point, to determine, and to count. Indonesian has one word for two of them, {itu}, an anaphoric demonstrative: {Firman itu} "that Word", "the Word just mentioned". The third job, making a set, is done by the noun {para}: {para murid} "the disciples", {para rasul} "the apostles". And counting is done by a numeral or a quantifier: {satu buku}, {banyak buku}.

When Portuguese forces an article that Indonesian has no word for, it is usually because Portuguese is counting a noun that Indonesian has already counted somewhere else in the sentence. In {o livro que você leu ontem} the {o} carries no information: it is counting, and {yang} has already done the counting. Translating that as {buku yang kamu baca kemarin} drops the article and drops nothing with it.

The most visible case is the genitive. Portuguese says {do livro}, {da casa}, {dos livros} with a preposition that shifts with the article. Indonesian says {buku saya} and {rumah saya}, with nothing in between: the possessor simply sticks to the noun, and the Portuguese preposition has nowhere to go.

There is an asymmetry that produces an error in nearly every biblical text. A definite noun in Portuguese usually becomes a bare noun in Indonesian. There is no such thing as "the God" written with an article; what exists is {Allah itu} or {Allah} alone, and the reader has to infer from {itu} or from repetition what the article was marking.

## Kerajaan Allah, kebenaran-Nya

{Matthew 6:33} is the passage where the whole system shows up at once, and read it slowly: {Carilah dahulu Kerajaan Allah dan kebenaran-Nya, maka segala-galanya akan ditambahkan kepadamu}.

{Kerajaan Allah} is a genitive, and the genitive is marked by nothing. {Kerajaan} and {Allah} are two nouns placed side by side, in the order Portuguese renders as "the Kingdom of God", and the preposition {dari} that Portuguese demands simply is not there. One noun modified by another is a complete phrase in Indonesian.

{kebenaran-Nya} is the same phrase written with the possessor stuck on: {kebenaran} plus {-Nya}. Anyone who knows that the second element points back to {Allah} in {Kerajaan Allah} reads {kebenaran-Nya} without effort. Anyone who does not reads a repeated noun and stops.

Many phrases Portuguese writes "everything" and "all the" are {segala-galanya} and {para} in Indonesian, and the reduction in {segala-galanya} {tiga} and {dua} makes the plural visible. The whole verse is a sentence without a single article, and that is why the translation seems so much lighter than the Greek: the Greek had {tēn basilikeia}, with its article, and Indonesian lost the article without losing anything the Greek said.`),
  vocab: [
    V('rumah', 'rumah', 'house, home'),
    V('buku', 'buku', 'book'),
    V('anak', 'anak', 'child, son'),
    V('ibu', 'ibu', 'mother'),
    V('bapak', 'bapak', 'father'),
    V('anjing', 'anjing', 'dog'),
    V('sepeda', 'sepeda', 'bicycle'),
    V('mobil', 'mobil', 'car'),
    V('ada', 'ada', 'to be there, to exist'),
    V('adalah', 'adalah', 'to be (identity)'),
    V('itu', 'itu', 'that, those (already mentioned)'),
    V('para', 'para', 'the (plural definite)'),
    V('banyak', 'banyak', 'many'),
    V('satu', 'satu', 'one'),
    V('kerajaan', 'kerajaan', 'kingdom'),
    V('kebenaran', 'kebenaran', 'truth'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The Indonesian noun does not inflect: no article, no case, no gender, no number. Function comes from position.',
      ),
    },
    {
      n: '2',
      text: T(
        'The order is subject, verb, object. The first noun of the clause is the subject, even when it looks like an object.',
      ),
    },
    {
      n: '3',
      text: T(
        '{itu} replaces the Portuguese definite article and points back to something mentioned; {para} makes a definite plural.',
      ),
    },
    {
      n: '4',
      text: T(
        'The genitive is bare juxtaposition: {rumah saya}, {buku saya}. No preposition goes between the two nouns.',
      ),
    },
    {
      n: '5',
      text: T(
        '{dari} is the preposition of source, not of possession: {rumah saya}, never {rumah dari saya}.',
      ),
    },
  ],
  notes: [
    {
      label: T('The gender that is not there'),
      text: T(
        'A few nouns keep an inherited grammatical gender, such as {anak} and {bapak}, but the list is closed and the reader of Scripture almost never needs it.',
      ),
    },
    {
      label: T('Where translation misleads'),
      text: T(
        'When {dari} shows up between two nouns it is nearly always source, not possession. {rumah dari nenek} is "grandmother’s house" in the sense of origin, which Portuguese renders as possession without meaning to.',
      ),
    },
  ],
  examples: [
    { text: 'Buku itu milik saya.', gloss: T('That book is mine.') },
    { text: 'Anjing saya menggigit dia.', gloss: T('My dog bit him.') },
    { text: 'Saya menggigit anjing.', gloss: T('I bit the dog.') },
    { text: 'Rumah saya dekat sekolah.', gloss: T('My house is near the school.') },
    { text: 'Kerajaan Allah tidak akan berakhir.', gloss: T('The Kingdom of God will not end.') },
    { text: 'Carilah dahulu Kerajaan Allah.', gloss: T('Seek first the Kingdom of God.') },
    { text: 'Untuk murid, hal itu mudah.', gloss: T('For the disciples, that is easy.') },
    { text: 'Banyak buku di meja.', gloss: T('Many books on the table.') },
    { text: 'Ada masalah besar di sini.', gloss: T('There is a big problem here.') },
  ],
  tables: [
    {
      caption: T('As cinco funções do substantivo'),
      head: ['Função', 'Como aparece', 'Português', 'Sinal em PT'],
      rows: [
        ['sujeito', 'buku itu penting', 'o livro é importante', 'sujeito fica depois do verbo'],
        ['objeto direto', 'saya membeli buku', 'eu comprei o livro', 'verbo antes do nome'],
        ['complemento', 'ini buku saya', 'isto é o meu livro', 'adalah liga os dois'],
        ['genitivo', 'buku saya', 'o meu livro', 'possuidor colado'],
        ['complemento de preposição', 'di rumah', 'em casa', 'preposição expõe a função'],
      ],
    },
    {
      caption: T('O que o artigo português faz e quem faz aqui'),
      head: ['Função do artigo', 'Português', 'Indonésio', 'Exemplo'],
      rows: [
        ['apontar para algo já citado', 'o / a + itu', 'itu', 'Firman itu'],
        ['determinar um conjunto', 'os / as', 'para', 'para murid'],
        ['contagem indefinida', 'um / uma', 'satu / se-', 'seorang murid'],
        ['plural', 'livros', 'banyak + livro', 'banyak buku'],
        ['genitivo', 'do / da', 'colado + -nya', 'rumah saya'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Anjing saya menggigit dia}, who bit?'),
    options: [T('My dog'), T('He'), T('Impossible to tell'), T('His dog')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Build the definite plural of {murid}: "the disciples".'),
      answer: 'para',
      hint: T('The word that turns a noun into a set.'),
    },
    {
      kind: 'choose',
      prompt: T('How do you say "the Kingdom of God" without a preposition?'),
      options: [
        T('Kerajaan Allah'),
        T('Kerajaan dari Allah'),
        T('Kerajaan di Allah'),
        T('Kerajaan untuk Allah'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the function to the phrase'),
      pairs: [
        { a: T('{buku itu}'), b: T('subject') },
        { a: T('{rumah saya}'), b: T('genitive') },
        { a: T('{di sekolah}'), b: T('prepositional complement') },
        { a: T('{saya membeli buku}'), b: T('direct object') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
