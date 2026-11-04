import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  section: T('Syntax'),
  title: T('Syntax'),
  subtitle: T('subject, verb, object: what moves and what cannot'),
  body: C(`## The order nobody breaks

The order of the Indonesian clause is subject, verb, object, and nobody breaks it. There is no inversion, no topicalisation, and none of that device Portuguese and English use to put the object first for emphasis.

{Anjing saya menggigit dia} is "my dog bit him", and the first noun is the subject only because it is in first position. {Saya menggigit anjing} is "I bit the dog". Swapping the two nouns swaps the roles, and it does not produce an emphatic sentence: it produces a different sentence.

What explains it is the verb. A transitive clause has one noun before the verb and one after, and the noun that is before is the subject by definition of position. {Buku itu saya baca} exists, with a pause after {buku itu}, and it sounds out of place: it works as code, not as prose.

Portuguese and English have what is called marked order, which puts the new information first: "meu pai, esse eu conheço". Indonesian does not have it, and new information is marked another way: by an adverb, or by {itu}, or by {yang}.

## What may move

The flexibility of Indonesian is not in the order of the nouns. It is in the modifiers, and they can go almost anywhere without breaking the grammar.

A phrase adverb opens the sentence when the focus is on manner: {Dengan teliti dia membaca buku} "carefully, he read the book". A time adverb opens it when the focus is on time: {Kemarin dia datang} "yesterday he came". In both cases it is the information that in Portuguese would move to the end that rises to the front here.

A noun phrase can also rise, as long as it comes whole: {Di rumah itu dia menonton televisi} "in that house, he watched television". Half a phrase cannot: {Rumah itu} at the front with no {di} produces a sentence with no verb in it.

And there is a movement that looks like inversion and is not: a clause with {yang} can rise, as long as what comes after it is a complete phrase. {Yang kamu baca itu buku} "what you are reading is a book". The {yang} is what allows the rise, and what rises is a closed block.

What **never** rises is three things: the subject, the verb, and the order between the two nouns of a transitive clause. That is all. Anyone who has that has the whole of Indonesian syntax, because the rest is adverbs and phrases.

## Negation and the passive

Two things a reader will try to do and cannot.

**Negation cannot pass the subject.** {tidak} comes before the verb, and the verb stays where it was. {Saya tidak lapar}, and never {tidak saya lapar}. Portuguese allows "não eu tenho fome" in literary writing; English allows "didn't I come?"; Indonesian allows neither.

The reason is the order: if negation could rise it would pass over the subject, and the subject would stop being the first noun. Since the subject is the first noun by definition of position, negation has nowhere to rise. What is said instead of {tidak saya lapar} is {Saya tidak lapar}, {Bukan saya yang lapar} or {Saya belum lapar}, and the three are different sentences.

**The passive is {di-} and the agent comes after.** {Surat itu ditulis oleh Petrus} "the letter is written by Peter". The {oleh} is obligatory when the agent is a person and left out when it does not matter: {Surat itu ditulis} "the letter is being written".

There is a second kind of passive with no verb at all. The noun is put in focus with {ada}: {ada yang datang} "somebody came", {ada buku baru} "there is a new book". It is the same information as a subjectless passive, and a reader who recognises the construction in Portuguese reads {ada} too fast.

The passive also has a clitic variant, where the agent becomes a pronoun stuck to the verb: {kubaca} "read by me", {kaubaca} "read by you", {ditulisnya} "written by him". The {ny} of the third person is the same {-nya} as the other five jobs, which is why {ditulisnya} can mean both "written by him" and "that was written", depending on the sentence.

What changes from one language to the next is how productive the passive is. In ordinary Indonesian the passive is marked: it turns up when the object is the topic and the agent does not matter. In Greek of the New Testament the passive is frequent in relative clauses, and a translator has to decide at each passage whether the Greek passive had an agent. Where the Greek had an implicit agent and the context allowed one, Indonesian writes {oleh} anyway; where it did not, Indonesian writes {di-} alone. That is a decision of translation, not of grammar.

## Dan inginilah olehmu diperlakukan oleh orang lain

{Luke 6:31} is the passage where the fixed order shows up with the most pieces at once, and read it slowly: {Dan inginilah olehmu diperlakukan oleh orang lain seperti kamu ingin diperlakukan oleh mereka}.

The visible structure is subject {kamu}, verb {inginilah}, object {olehmu diperlakukan oleh orang lain}, and then the marker of comparison {seperti} with a second clause that repeats the same order. Two clauses, the same architecture, and the second is the mirror of the first.

What Greek does here is symmetry: two halves with {kath’ homōs kai}, a construction Greek uses to pair actions. Indonesian uses {seperti}, which is one word, and the first clause is the rule and the second is the application.

And the verb of the first clause is {inginilah}, with the emphatic {lah}, on {ingin}, which is a nominalised noun in {-in}: {yang ingin} "the one who wants". Greek has a verb; Indonesian has a noun with a particle; and that difference is the price of a language that nominalises instead of inflecting.`),
  vocab: [
    V('saya', 'saya', 'I'),
    V('dia', 'dia', 'he, she'),
    V('anjing', 'anjing', 'dog'),
    V('menggigit', 'gigit', 'to bite'),
    V('buku', 'buku', 'book'),
    V('baca', 'baca', 'to read'),
    V('dengan teliti', 'teliti', 'carefully'),
    V('kemarin', 'kemarin', 'yesterday'),
    V('rumah', 'rumah', 'house, home'),
    V('menonton', 'tonton', 'to watch'),
    V('televisi', 'televisi', 'television'),
    V('tidak', 'tidak', 'not'),
    V('lapar', 'lapar', 'hungry'),
    V('ditulis', 'tulis', 'to be written'),
    V('oleh', 'oleh', 'by (agent)'),
    V('ada', 'ada', 'there is'),
    V('kubaca', 'baca', 'read by me'),
    V('kaubaca', 'baca', 'read by you'),
    V('ditulisnya', 'tulis', 'written by him'),
    V('ingin', 'ingin', 'to want'),
    V('perlakukan', 'lakukan', 'to treat'),
    V('seperti', 'seperti', 'as, like'),
  ],
  rules: [
    { n: '1', text: T('The order is subject, verb, object, and it is never inverted.') },
    {
      n: '2',
      text: T('What rises to the front are adverbs, whole noun phrases and clauses with {yang}.'),
    },
    {
      n: '3',
      text: T(
        '{tidak} comes before the verb and never before the subject: {Saya tidak lapar}, never {tidak saya lapar}.',
      ),
    },
    {
      n: '4',
      text: T('The passive is {di-} plus a verb, and the agent comes in {oleh} after the clause.'),
    },
    { n: '5', text: T('A verbless passive uses {ada}: {ada yang datang} "somebody came".') },
  ],
  notes: [
    {
      label: T('Why negation cannot rise'),
      text: T(
        'If negation could rise it would pass over the subject, and the subject would stop being the first noun. Since the subject is the first noun by definition of position, negation has nowhere to rise. In its place one uses {Saya tidak lapar}, {Bukan saya yang lapar} or {Saya belum lapar}.',
      ),
    },
    {
      label: T('When the passive is marked'),
      text: T(
        'In ordinary Indonesian the passive turns up when the object is the topic and the agent is irrelevant. Greek of the New Testament uses the passive often in relative clauses, and a translator has to decide at each passage whether there was an agent. That decision is one of translation, not of grammar.',
      ),
    },
  ],
  examples: [
    { text: 'Anjing saya menggigit dia.', gloss: T('My dog bit him.') },
    { text: 'Saya menggigit anjing.', gloss: T('I bit the dog.') },
    { text: 'Dengan teliti dia membaca buku.', gloss: T('Carefully, he read the book.') },
    { text: 'Kemarin dia datang.', gloss: T('Yesterday he came.') },
    {
      text: 'Di rumah itu dia menonton televisi.',
      gloss: T('In that house he watched television.'),
    },
    { text: 'Yang kamu baca itu buku.', gloss: T('What you are reading is a book.') },
    { text: 'Saya tidak lapar.', gloss: T('I am not hungry.') },
    { text: 'Surat itu ditulis oleh Petrus.', gloss: T('The letter is written by Peter.') },
    { text: 'Surat itu ditulis.', gloss: T('The letter is being written.') },
    { text: 'Kitab itu kaubaca.', gloss: T('You read that book.') },
  ],
  tables: [
    {
      caption: T('O que se move e o que fica'),
      head: ['Peça', 'Pode subir?', 'Sobe como', 'Exemplo'],
      rows: [
        ['sujeito', 'não', '(nunca)', 'Saya tidak lapar'],
        ['verbo', 'não', '(nunca)', 'saya membaca'],
        ['ordem SVO', 'não', '(nunca)', 'anjing saya menggigit dia'],
        ['advérbio', 'sim', 'elemento solto', 'Dengan teliti dia baca'],
        ['locução nominal', 'sim', 'bloco inteiro', 'Di rumah itu dia baca'],
        ['oração com yang', 'sim', 'bloco fechado', 'Yang kamu baca itu buku'],
      ],
    },
    {
      caption: T('As três formas de negar e as três de passarivo'),
      head: ['Função', 'Estrutura', 'Exemplo', 'Leia como'],
      rows: [
        ['negação', 'S + tidak + V', 'Saya tidak lapar.', 'não tenho fome'],
        [
          'negação nominal',
          'Bukan + S + yang + V',
          'Bukan saya yang lapar.',
          'não sou eu que tenho fome',
        ],
        ['negação temporal', 'S + belum + V', 'Saya belum lapar.', 'ainda não tenho fome'],
        ['passivo com agente', 'O + di-V + oleh + A', 'Ditulis oleh Petrus.', 'escrito por Pedro'],
        ['passivo sem agente', 'O + di-V', 'Surat itu ditulis.', 'a carta está sendo escrita'],
        ['passivo com clítico', 'O + V-nya', 'Kitab itu kaubaca.', 'o livro você leu'],
        ['passivo sem verbo', 'ada + yang + V', 'Ada yang datang.', 'veio alguém'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence is correct?'),
    options: [
      T('Saya tidak lapar'),
      T('tidak saya lapar'),
      T('Jangan saya lapar'),
      T('tidak lapar saya'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Fill in the passive with an agent: the letter is written by Peter = Surat itu ditulis ___ Petrus.',
      ),
      answer: 'oleh',
      hint: T('The preposition of agent.'),
    },
    {
      kind: 'choose',
      prompt: T('In {Surat itu ditulis}, what has been left out?'),
      options: [T('the agent'), T('the verb'), T('the subject'), T('the object')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the piece to its position'),
      pairs: [
        { a: T('{saya}'), b: T('subject, always first') },
        { a: T('{tidak}'), b: T('before the verb') },
        { a: T('{oleh}'), b: T('after the passive') },
        { a: T('{ada}'), b: T('verbless passive') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
