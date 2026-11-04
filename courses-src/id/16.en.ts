import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  section: T('Particle'),
  title: T('Quantifiers'),
  subtitle: T('ada, adalah, banyak, semua, lebih, paling: the pair that blocks reading most'),
  body: C(`## To exist and to be

Two verbs that Portuguese renders with one, and that do not do the same thing.

{ada} answers {is there?}. {Ada masalah} is "there is a problem", {Ada tiga buku di meja} is "there are three books on the table", {Ada orang di pintu} is "there is someone at the door". The subject of {ada} is not identified: the sentence says the thing is there and says nothing else about it. That is why {ada} is at once the verb of existence and an existential quantifier, and it is the second use that turns up all the time: {ada} on its own, meaning "some", is more natural than any word made up for the job.

{adalah} answers {what is it?}. {Ini adalah buku} is "this is a book", {Buku itu adalah milikku} is "that book is mine". The subject is identified or classified, and it never disappears: in almost every sentence with {adalah} you can ask "which one?".

Confusing the two is the most expensive mistake there is in Indonesian for a reader. A sentence the reader renders as "is" may be {ada} in the original, and the result is a translation that asserts an identity the text never asserted.

## The test that tells them apart

One question settles it: **does the sentence answer "is there?" or "what is it?"**

{Ada buku baru di toko.} It answers "is there?". There is a new book, and the sentence says nothing more. Portuguese: "There is a new book in the shop."

{Buku itu adalah buku baru.} It answers "what is it?". It identifies the book. Portuguese: "That book is a new book."

{Hanya ada satu jalan ke kota.} It answers "is there?". One path, and only one. {Jalannya adalah satu-satunya jalan.} It answers "what is it?".

The pair has one more asymmetry that catches people: {ada} is negated by {tidak} ({tidak ada}, "there is not") and by {bukan} ({bukan ada}, "does not exist"); {adalah} is negated by {bukan} ({bukan benar}, "is not true") and by {tidak} in questions ({tidak apakah...}). And the answer to a negated {adalah} is always {bukan}, never {tidak}: {Ini bukan buku}, not {Ini tidak buku}.

One special case: with a pronoun as subject, {adalah} sometimes drops in ordinary speech. {Saya murid} "I am a student" is colloquial and emphatic; {Saya adalah murid} is the full form and it is the one that turns up in texts.

## Quantifiers: how much, which, the most

The whole group answers different questions, and its position is the same: before the noun.

{banyak} is the commonest and means "many". {sedikit} is its opposite, "few", and with countable nouns it means "few" rather than "small". {beberapa} is "some", normally between two and four, and it is more formal than {sedikit}. {semua} is "all", {seluruh} is "whole, entire", and the two are hard to tell apart in practice.

{cukup} is "enough", and it can come before the noun ({cukup waktu} "enough time") or after the verb ({sudah cukup} "that is enough"). {agak} is "a bit", and {banyak} with a verb is "very much": {banyak bekerja} "works a lot".

The part Portuguese handles with inflection is comparison. **{lebih} plus an adjective is the comparative, {paling} plus an adjective is the superlative.** {lebih besar} "bigger", {paling besar} "the biggest", {kurang baik} "worse", {sebanyak} "as much as".

The superlative of {paling} is not translated with "more": it is the same word carrying maximum degree, and anyone who writes {yang paling lebih baik} has doubled the degree.

And one quantifier that quantifies nothing: {itu}, already met as a demonstrative. {buku itu} is "that book", not "the whole book".

## What exists in the world

{1 John 2:15} is a verse made almost entirely of quantifiers, which makes it a good reading test. The text tells the reader not to love {dunia} nor {apa yang ada di dalam dunia}, and the second {yang} is the nominalisation of the verb {ada}.

The contrast sits in {ada}, and it is a contrast of scope. The verse speaks of two things: what exists and what is inside it. Portuguese resolves this with "the world and everything in it", a heavy construction that sounds like a novel. Indonesian repeats the same word: {dunia}, and then {apa yang ada di dalam dunia}. A reader who knows {ada} as "to be" will read "the world and what is in the world", which is the same sense with one wrong link; a reader who knows {ada} as "there is" gets there without effort.

That is why the lesson exists. A pair of words decides whether someone understands a verse, and nobody teaches the pair just because it is small.`),
  vocab: [
    V('ada', 'ada', 'there is; some'),
    V('adalah', 'adalah', 'to be (identifies)'),
    V('banyak', 'banyak', 'many; much'),
    V('sedikit', 'sedikit', 'few; little'),
    V('beberapa', 'beberapa', 'some, a few'),
    V('semua', 'semua', 'all'),
    V('seluruh', 'seluruh', 'whole, entire'),
    V('cukup', 'cukup', 'enough'),
    V('agak', 'agak', 'a bit'),
    V('lebih', 'lebih', 'more (comparative)'),
    V('paling', 'paling', 'most (superlative)'),
    V('kurang', 'kurang', 'less; worse'),
    V('masalah', 'masalah', 'problem'),
    V('toko', 'toko', 'shop'),
    V('dunia', 'dunia', 'world'),
    V('bukan', 'bukan', 'not (copula and noun)'),
    V('tidak', 'tidak', 'not (verb)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{ada} answers "is there?"; {adalah} answers "what is it?". The subject of {ada} is not identified.',
      ),
    },
    {
      n: '2',
      text: T(
        'The singular of {ada} meaning "some" is {ada} on its own; {adanya} is the nominalised form.',
      ),
    },
    {
      n: '3',
      text: T(
        'The answer to a negated {adalah} is always {bukan}: {ini bukan buku}, never {ini tidak buku}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{lebih} plus an adjective is comparative and {paling} plus an adjective is superlative; {kurang} is "less" and "worse".',
      ),
    },
    {
      n: '5',
      text: T('Quantifiers such as {banyak}, {sedikit}, {semua} and {cukup} come before the noun.'),
    },
  ],
  notes: [
    {
      label: T('To have and to exist'),
      text: T(
        'In Portuguese "to have" and "there is" have almost merged. In Indonesian they have not: to exist is {ada}, to have is {punya} or {milik}. {Saya punya rumah} is "I have a house", {ada rumah} is "there is a house". Confusing them reverses the direction of possession.',
      ),
    },
    {
      label: T('The scope of ada'),
      text: T(
        '{ada} covers the whole clause as an existential quantifier, which is why its scope is broad: {ada yang benar} is "there is something right", not "there exists that which is true" in a narrow sense.',
      ),
    },
  ],
  examples: [
    { text: 'Ada masalah besar di sini.', gloss: T('There is a big problem here.') },
    { text: 'Ada tiga buku di meja.', gloss: T('There are three books on the table.') },
    { text: 'Buku itu adalah buku baru.', gloss: T('That book is a new book.') },
    { text: 'Ini bukan buku.', gloss: T('This is not a book.') },
    { text: 'Banyak orang datang hari itu.', gloss: T('Many people came that day.') },
    { text: 'Sedikit waktu tersisa.', gloss: T('Little time is left.') },
    { text: 'Semua kitab kudus.', gloss: T('All Scripture.') },
    { text: 'Rumah ini lebih besar dari itu.', gloss: T('This house is bigger than that one.') },
    { text: 'Inilah yang paling penting.', gloss: T('This is the most important thing.') },
    { text: 'Hanya ada satu jalan ke kota.', gloss: T('There is only one road to the city.') },
  ],
  tables: [
    {
      caption: T('O teste entre ada e adalah'),
      head: ['Pergunta', 'Verbo', 'Frase', 'Leia como'],
      rows: [
        ['existe?', 'ada', 'Ada masalah di sini.', 'Há um problema aqui'],
        ['existe?', 'ada', 'Ada orang di pintu.', 'Há alguém na porta'],
        ['existe?', 'ada', 'Ada tiga buku.', 'Há três livros'],
        ['o que é?', 'adalah', 'Ini adalah buku.', 'Isto é um livro'],
        ['o que é?', 'adalah', 'Buku itu milikku.', 'Aquele livro é meu'],
        ['o que é?', 'adalah', 'Dia adalah guru.', 'Ele é professor'],
      ],
    },
    {
      caption: T('Os quantificadores e o que respondem'),
      head: ['Palavra', 'Pergunta', 'Exemplo', 'Leia como'],
      rows: [
        ['ada', 'existe?', 'ada masalah', 'há um problema'],
        ['banyak', 'quanto?', 'banyak buku', 'muitos livros'],
        ['sedikit', 'quanto?', 'sedikit waktu', 'pouco tempo'],
        ['beberapa', 'quanto?', 'beberapa hari', 'algunos días'],
        ['semua', 'qual?', 'semua orang', 'toda la gente'],
        ['cukup', 'quanto basta?', 'cukup waktu', 'tiempo bastante'],
        ['lebih', 'comparação', 'lebih besar', 'mayor'],
        ['paling', 'grau máximo', 'paling besar', 'el mayor'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'In {Ada dua orang di depan pintu}, how many are there and what does the sentence assert?',
    ),
    options: [
      T('two; that two people are there'),
      T('two; that the door is blue'),
      T('unknown; that someone is there'),
      T('two; that they are brothers'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Fill in the verb of identification: "this is a book" = Ini ___ buku.'),
      answer: 'adalah',
      hint: T('The verb that answers "what is it?".'),
    },
    {
      kind: 'choose',
      prompt: T('How do you say "the most important of all"?'),
      options: [
        T('paling penting dari semua'),
        T('lebih penting'),
        T('paling lebih penting'),
        T('lebih paling penting'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the quantifier to its value'),
      pairs: [
        { a: T('{ada}'), b: T('existence') },
        { a: T('{semua}'), b: T('totality') },
        { a: T('{lebih besar}'), b: T('bigger') },
        { a: T('{paling besar}'), b: T('the biggest') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
