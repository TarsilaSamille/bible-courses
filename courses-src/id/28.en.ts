import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  section: T('Conjunctions'),
  title: T('Conjunctions'),
  subtitle: T(
    'dan, tetapi, atau, karena, kalau, supaya: the pairs Portuguese resolves with one word',
  ),
  body: C(`## The three that do everything

{dan} is "and", and it is the most productive conjunction in Indonesian: it joins nouns ({saya dan dia}), verbs ({dia datang dan melihat}), adjectives ({besar dan berat}) and clauses ({dia datang dan saya pergi}). It has no variant and no fixed position: it goes where the grammar of the clause requires.

{tetapi} is "but", and it has two forms the reader has to tell apart. {Tapi} is the short current form, and {tetapi} is the one used when the second clause is longer or comes after a comma. The practical rule: {tapi} between two short clauses, {tetapi} between a long one and a short one.

{lalu} is "then, after that", and it is the most underrated conjunction in the language because it does not look like one. It marks sequence: it ties what happens to what happened before. In older text and in Biblical narrative, {lalu} also turns up as a marker of remote past.

And there is {atau} "or", which joins alternatives, and {sedangkan} "while", which joins a contrast between two subjects: {Dia bekerja, sedangkan adiknya tidur} "he works while his brother sleeps".

The difference between {tetapi} and {sedangkan} is that {tetapi} turns the second clause against the first, and {sedangkan} compares two things at once. Portuguese does the same with "but" and "while", and anyone who does not know {sedangkan} writes {tetapi} and produces a sentence that is still correct and is not the sentence of the text.

## Because, in order that, if

{karena} and {sebab} are "because". {Karena} is the current form and comes before the verb: {Dia tidak datang karena sakit}. {Sebab} is more formal and can come after the verb: {Dia sakit, sebab tidak datang}. Portuguese has one "because" and a half, and Indonesian has two, which looks like excess until one realises that one is spoken and the other written.

{supaya} and {agar} are "so that". {Supaya} is the current form: {Berfastlah supaya kamu sampai}. {Agar} is more formal and can come before the subject: {Agar kamu sampai, kamu harus berangkat sekarang}. The real difference between the two is almost nil; the difference of register is large.

{kalau}, {jika} and {andaikan} are "if". {Kalau} is the spoken form and {jika} is the written one, and the two are interchangeable in almost every context: {Kalau kamu lapar, makanlah} "if you are hungry, eat", {Jika kamu lapar, makanlah} means exactly the same. {Andaikan} is more formal still and turns up in official text.

{ketika} is "when", and {sementara} is "while": {Ketika saya tiba, dia sudah pergi} "when I arrived, he had already gone", {Sementara saya bekerja, dia tidur} "while I was working, he was sleeping". Portuguese tells "when" from "while" with the same rigour.

## Four nearly identical pairs

What gets in the way of a reader is that the language has pairs of conjunctions with almost no difference of sense, where the choice is about register or position. There are four, and having all four pays off.

{kalau} and {jika}. Identical sense. {Kalau} is speech, {jika} is writing. Neither has a fixed position: {Kalau kamu lapar} and {Kamu, kalau lapar, makanlah} are both possible.

{supaya} and {agar}. Almost identical sense. {Agar} can come before the subject, and that is the only structural difference, and it is why a translator who knows only {supaya} sometimes writes a sentence Indonesian does not have.

{tapi}, {tetapi} and {namun}. All three are "but". {Tapi} is speech, {tetapi} is the balanced form, {namun} is written and literary. And there is a restriction: none of the three joins two very long clauses without a comma before.

{meskipun}, {walaupun} and {walaupunpun}. All three are "although". {Meskipun} is the commonest, {walaupun} is the most colloquial, and {walaupunpun} is the most colloquial of all: {Walaupunpun mahal, saya akan beli} "even though it is expensive, I will buy it".

{sebagai} deserves a note of its own, because it is not a conjunction and a reader will treat it as one. {Sebagai} is "as, in the capacity of": {Dia berbicara sebagai wakil} "he spoke as a representative", {datang sebagai tamu} "he came as a visitor". Greek uses the participle with the instrumental for that, and Indonesian uses a word; Portuguese renders it with "as" and the reader reads an adverb where there is a preposition.

And there is a punctuation rule that goes with all of it: an adversative or causal conjunction comes after the comma, and a conjunction of time comes before it. {Dia datang, tetapi saya tidur} and {Ketika saya datang, dia sudah pergi}.

## Bersukacitalah karena berbagai-bagai cobaan

{the first sentence of James} is the shortest example of {karena} there is, and the text writes the conjunction in the middle: {Saudara-saudaraku yang terkasihi, bersukacitalah karena berbagai-bagai cobaan}.

What the sentence shows is that Greek carried the whole relation in the structure and Indonesian carries it in one word. Greek of James uses a subordinate clause with {charin} "for the sake of", which is a preposition with a proper name, and the translator has to choose whether that is "because", "for the sake of" or "in order to". Indonesian chooses {karena}, which is one word, and the choice is made.

Notice also {berbagai-bagai}, an adjective with the prefix {ber-} and the suffix {bagai}: it means "various, of all sorts". The word is single and covers what Portuguese does with "various", "diverse" and "of every kind". There is no question and no answer here, and a translator hunting for the equivalent of "various" in three words can lose the unity the Greek had.

And {yang terkasihi} is {yang} plus an adjective, with the reduplication already met: it is the address of the Pauline and Jacinthian letters, and in Indonesian it is as fixed a formula as in any other language.

The second sentence of the verse has the structure of {kalau}, and the third that of {supaya}. The whole chapter of James is built with simple conjunctions, and that is why it is good reading for a beginner: almost none of the grammar of the book shows up, and almost all of the connectivity does.`),
  vocab: [
    V('dan', 'dan', 'and'),
    V('atau', 'atau', 'or'),
    V('tapi', 'tapi', 'but'),
    V('tetapi', 'tetapi', 'but'),
    V('lalu', 'lalu', 'then, after that'),
    V('sedangkan', 'sedangkan', 'while, whereas'),
    V('karena', 'karena', 'because'),
    V('sebab', 'sebab', 'because (formal)'),
    V('supaya', 'supaya', 'so that'),
    V('agar', 'agar', 'so that (formal)'),
    V('kalau', 'kalau', 'if'),
    V('jika', 'jika', 'if (written)'),
    V('ketika', 'ketika', 'when'),
    V('sementara', 'sementara', 'while'),
    V('meskipun', 'meskipun', 'although'),
    V('walaupun', 'walaupun', 'although'),
    V('sebagai', 'sebagai', 'as, in the capacity of'),
    V('berbagai-bagai', 'bagai', 'various, all sorts'),
  ],
  rules: [
    { n: '1', text: T('{dan} joins nouns, verbs, adjectives and clauses with no fixed position.') },
    {
      n: '2',
      text: T(
        '{karena} comes before the verb and {sebab} can come after; {supaya} is spoken and {agar} is written.',
      ),
    },
    {
      n: '3',
      text: T('{kalau} and {jika} are synonyms of register: {kalau} is speech, {jika} is writing.'),
    },
    {
      n: '4',
      text: T(
        '{tetapi} turns the second clause against the first; {sedangkan} compares two things at once.',
      ),
    },
    {
      n: '5',
      text: T(
        'A causal or adversative conjunction comes after the comma; a conjunction of time comes before it.',
      ),
    },
  ],
  notes: [
    {
      label: T('sebagai is not a conjunction'),
      text: T(
        '{Sebagai} is a preposition meaning "as, in the capacity of", not an adverb. {datang sebagai tamu} is "he comes as a visitor", and anyone who reads "he comes, being a visitor" has understood something else.',
      ),
    },
    {
      label: T('The comma shifts with the conjunction'),
      text: T(
        'Punctuation follows the function: {Dia datang, tetapi saya tidur} and {Ketika saya datang, dia sudah pergi}. A conjunction of time before the comma, one of cause and contrast after it.',
      ),
    },
  ],
  examples: [
    { text: 'Saya dan dia pergi bersama.', gloss: T('He and I went together.') },
    { text: 'Dia datang, tetapi saya pergi.', gloss: T('He came, but I went.') },
    {
      text: 'Dia bekerja, sedangkan adiknya tidur.',
      gloss: T('He works while his brother sleeps.'),
    },
    { text: 'Dia tidak datang karena sakit.', gloss: T('He did not come because he is ill.') },
    { text: 'Berfastlah supaya kamu sampai.', gloss: T('Hurry so that you arrive.') },
    { text: 'Kalau kamu lapar, makanlah.', gloss: T('If you are hungry, eat.') },
    { text: 'Jika kamu lapar, makanlah.', gloss: T('If you are hungry, eat. (written)') },
    {
      text: 'Ketika saya tiba, dia sudah pergi.',
      gloss: T('When I arrived, he had already left.'),
    },
    {
      text: 'Meskipun mahal, saya akan beli.',
      gloss: T('Although it is expensive, I will buy it.'),
    },
    { text: 'Dia berbicara sebagai wakil.', gloss: T('He spoke as a representative.') },
  ],
  tables: [
    {
      caption: T('Conectivos e a pergunta a que respondem'),
      head: ['Palavra', 'Pergunta', 'Exemplo', 'Leia como'],
      rows: [
        ['dan', 'e?', 'saya dan dia', 'eu e ele'],
        ['atau', 'ou?', 'kopi atau teh', 'café ou chá'],
        ['tetapi', 'mas?', 'datang, tetapi pergi', 'veio, mas foi-se'],
        ['karena', 'por quê?', 'tidak datang karena sakit', 'não veio porque está doente'],
        ['supaya', 'para quê?', 'berfast supaya sampai', 'apresse-se para chegar'],
        ['kalau', 'se?', 'kalau lapar, makan', 'se tiver fome, coma'],
        ['ketika', 'quando?', 'ketika saya tiba', 'quando cheguei'],
        ['meskipun', 'embora?', 'meskipun mahal', 'embora seja caro'],
        ['sebagai', 'como quê?', 'sebagai wakil', 'como representante'],
      ],
    },
    {
      caption: T('Os pares quase iguais'),
      head: ['Par', 'Diferença', 'Forma falada', 'Forma escrita'],
      rows: [
        ['kalau / jika', 'registro', 'kalau', 'jika'],
        ['supaya / agar', 'posição e registro', 'supaya', 'agar'],
        ['tapi / tetapi', 'tamanho da oração', 'tapi', 'tetapi'],
        ['tapi / namun', 'contraste', 'tapi', 'namun'],
        ['meskipun / walaupun', 'registro', 'walaupun', 'meskipun'],
        ['walaupun / walaupunpun', 'ênfase', 'walaupunpun', 'meskipun'],
        ['karena / sebab', 'posição', 'karena', 'sebab'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which conjunction answers "if"?'),
    options: [T('kalau'), T('karena'), T('meskipun'), T('supaya')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Fill in the final clause: hurry so that you arrive = bers cepat ___ kamu sampai.'),
      answer: 'supaya',
      hint: T('The conjunction of purpose.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is correct?'),
      options: [
        T('Dia datang, tetapi saya pergi.'),
        T('Dia datang tetapi, saya pergi.'),
        T('Dia datang, tetapi, saya pergi.'),
        T('Dia datang tetapi saya, pergi.'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the conjunction to its function'),
      pairs: [
        { a: T('{dan}'), b: T('and') },
        { a: T('{tetapi}'), b: T('but') },
        { a: T('{karena}'), b: T('because') },
        { a: T('{supaya}'), b: T('so that') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
