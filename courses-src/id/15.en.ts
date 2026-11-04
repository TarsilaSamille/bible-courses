import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  section: T('Particle'),
  title: T('The particle yang'),
  subtitle: T('Relative, noun and article substitute all at once: the keystone of Indonesian'),
  body: C(`## One word with three jobs

{yang} is the most important piece in Indonesian, and it is a single word. No other one does so much: it introduces a relative clause, it stands in for a whole noun, and it fills the slot the article fills in Portuguese. Anyone who understands {yang} reads clauses that look impossible.

Three jobs in one form.

{1} Relative, before a noun: {orang yang baik} "the good person", {buku yang baru} "the new book". The {yang} ties the noun to a property.

{2} Noun, on its own: {yang benar} "what is right", {yang datang} "whoever comes", {yang dua} "the second one". There is no noun behind it: the {yang} occupies the noun slot and the whole clause is what it names.

{3} Article substitute: {yang ada di sini} "what is here". The {yang} does the work of {o}, {a} and {os} at once, which is why it mixes badly with them.

## Yang stands in for the article

In Portuguese the article is obligatory before a definite noun and the relative follows: "o homem que é justo". In Indonesian there is no article and the relative takes its place: {orang yang adil}. The position is the same, the word is different.

The consequence is a rule with two faces. **Yang fills the article’s slot, and for that reason it cannot follow a definite article.** There is no {buku yang itu baik}, and there is no {para murid yang ini}; anyone who writes that has joined two things that cannot be joined. What exists is {buku yang baik}, and to pick up something already mentioned, {buku itu} or {yang baik itu}.

There is a larger consequence. Because {yang} is also a noun, it can appear where Portuguese needs a whole phrase: {orang yang baik} "the good person" and {yang baik} "the one who is good". The second is the nominalisation of the adjective, and it is exactly what Greek does with {ho agathos}, the substantive of quality. Greek had a word for it and Portuguese has one too ("o bom", "o verdadeiro"); Indonesian uses the same word it uses for the relative.

A reader who translates {yang} as "that" and stops there loses half of the word. There are whole verses in the Biblical text where {yang} has no noun behind it, and a reader looking for a noun does not find one.

## Yang relativises any position

The hard part comes when the relative is not an adjective but a verb or a preposition, because then {yang} has to carry the case that Portuguese puts on the relative.

With a verb it works as in any language: {surat yang ditulis Petrus} "the letter Peter wrote". The {yang} sits between the noun and the verb, and the subject of the relative verb is the noun that precedes it.

With a preposition the mechanism is the same: {bangku yang di atas} "the bench that is on top", {orang yang kepada siapa saya bicara} "the person to whom I spoke". The {yang} takes over the case the preposition governs, and the noun after it comes with the preposition repeated, which sounds repetitive but is grammatical.

With a passive, {yang} combines with the passive verb and not with the active one: {surat yang ditulis oleh Petrus} "the letter that was written by Peter". Greek and Portuguese agree here, which is why the relative clauses of the Greek New Testament are full of passives.

There is a restriction Portuguese does not have. If the noun already carries a possessive clitic, {yang} may not come next to it: not {guru saya ⋅ ⋅ ⋅} but {guru saya yang mengajar}, with {yang} **after** the whole phrase instead of stuck to the noun. Anyone who writes {guru saya yang mengajar, dengan disiplin} breaks the rule and produces a sentence that sounds translated.

And there is the position Portuguese solves with a pronoun: {orang yang dia jumpa} "the person he saw". The {dia} is obligatory in Indonesian when the antecedent is a third person already mentioned, and it cannot be dropped as it can in Portuguese. It sounds repetitive, and each {dia} points at somebody.

## Orang-orang yang membawa damai

{Matthew 5:9} puts both things in one line: {berbahagalah orang-orang yang membawa damai, sebab mereka akan disebut anak-anak Allah}.

In {orang-orang} full reduplication marks the plural that Portuguese writes on the noun. In {yang membawa damai} the {yang} is relative and ties the noun to a verb, not to an adjective: {membawa} is "to carry" and {damai} is the thing carried. A reader who renders it "who brings peace" is right; a reader who renders it "who are peaceful" has swapped the verb for an adjective and changed the clause.

And there is a third {yang} in the passage, in {yang membawa}, which is the nominalisation Greek did with {tēn eirēnopoion}. In Portuguese the whole verse is a sentence with an article on nearly every word. Indonesian has no article on any of them, and what the article was doing, {yang} and reduplication did between them, each in its own place.`),
  vocab: [
    V('yang', 'yang', 'that, which, who (relative and nominal)'),
    V('adil', 'adil', 'just'),
    V('baik', 'baik', 'good'),
    V('baru', 'baru', 'new'),
    V('benar', 'benar', 'right, true'),
    V('orang', 'orang', 'person'),
    V('buku', 'buku', 'book'),
    V('surat', 'surat', 'letter'),
    V('ditulis', 'tulis', 'to be written'),
    V('oleh', 'oleh', 'by (agent)'),
    V('dia', 'dia', 'he, she'),
    V('jumpa', 'jumpa', 'to meet'),
    V('datang', 'datang', 'to come'),
    V('dengan', 'dengan', 'with'),
    V('bicara', 'bicara', 'to speak'),
    V('membawa', 'bawa', 'to carry'),
    V('damai', 'damai', 'peace'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{yang} is relative before a noun, a noun on its own, and the substitute for the definite article.',
      ),
    },
    {
      n: '2',
      text: T('{yang} cannot follow a definite article: {buku yang baik}, never {buku yang itu}.'),
    },
    {
      n: '3',
      text: T(
        'After a numeral, {yang} marks the position in a series: {yang kedua} "the second", {yang terakhir} "the last".',
      ),
    },
    {
      n: '4',
      text: T(
        'With a preposition the relative repeats the preposition: {bangku yang di atas}, {orang yang kepada siapa}.',
      ),
    },
    {
      n: '5',
      text: T(
        'When the noun has a possessive clitic, {yang} follows the whole phrase: {guru saya yang mengajar}.',
      ),
    },
  ],
  notes: [
    {
      label: T('The nominaliser'),
      text: T(
        'The hardest job of {yang} is standing in for a noun: {yang benar} is a whole clause doing a noun’s work. Greek has {to agathon} for it, Portuguese "o bom". One Indonesian word covers all three.',
      ),
    },
    {
      label: T('The relative that repeats the pronoun'),
      text: T(
        'In {orang yang dia jumpa} the pronoun {dia} is obligatory, because the relative clause has a subject of its own and the antecedent is a third person already mentioned. Portuguese may drop the pronoun; Indonesian may not.',
      ),
    },
  ],
  examples: [
    { text: 'Orang yang baik akan masuk sorga.', gloss: T('The good person will enter heaven.') },
    { text: 'Yang benar itu sulit gefunden.', gloss: T('What is right is hard to find.') },
    { text: 'Buku yang baru itu milikmu.', gloss: T('That new book is yours.') },
    { text: 'Yang kedua lebih mahal.', gloss: T('The second is more expensive.') },
    { text: 'Surat yang ditulis Petrus panjang.', gloss: T('The letter Peter wrote is long.') },
    { text: 'Bangku yang di atas itu rusak.', gloss: T('The bench that is on top is broken.') },
    {
      text: 'Orang yang dia jumpa tadi seorang guru.',
      gloss: T('The person he saw was a teacher.'),
    },
    { text: 'Guru saya yang mengajar.', gloss: T('It was my teacher who taught.') },
    { text: 'Yang aku cari tidak ada.', gloss: T('What I am looking for does not exist.') },
  ],
  tables: [
    {
      caption: T('The three jobs of yang'),
      head: ['Uso', 'Padrão', 'Exemplo', 'Leia como'],
      rows: [
        ['relativo + nome', 'orang yang baik', 'buku yang baru', 'a pessoa boa'],
        ['relativo + verbo', 'surat yang ditulis', 'rumah yang berdiri', 'a carta que foi escrita'],
        ['substantivo', 'yang + X', 'yang benar', 'o que é certo'],
        ['substantivo + numeral', 'yang + numeral', 'yang kedua', 'o segundo'],
      ],
    },
    {
      caption: T('Where yang may and may not go'),
      head: ['Contexto', 'Forma', 'Português', 'Valor'],
      rows: [
        ['antes de substantivo', 'buku yang baik', 'o livro bom', 'relativo'],
        ['sozinho, sem nome', 'yang baik', 'o bom', 'nominalização'],
        ['depois de numeral', 'yang kedua', 'o segundo', 'posição'],
        ['com preposição', 'yang di atas', 'que está em cima', 'caso absorvido'],
        ['depois de artigo', 'buku yang itu', '(não existe)', 'erro'],
        ['depois de para + nome', 'para murid yang ini', '(não existe)', 'erro'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What does {yang benar} mean?'),
    options: [
      T('what is right'),
      T('that is true, with a noun after it'),
      T('the true book'),
      T('because it is right'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Fill in the relative: "the good person" = orang ___ baik.'),
      answer: 'yang',
      hint: T('The word that ties a noun to a property.'),
    },
    {
      kind: 'choose',
      prompt: T('Which of these sentences is correct?'),
      options: [
        T('Buku yang baru itu mahal.'),
        T('Buku itu yang baru mahal.'),
        T('Buku yang itu baru.'),
        T('Buku yang baru yang itu.'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the use of {yang} to the example'),
      pairs: [
        { a: T('{yang + noun}'), b: T('relative') },
        { a: T('{yang alone}'), b: T('nominalisation') },
        { a: T('{yang + numeral}'), b: T('position in a series') },
        { a: T('{yang + preposition}'), b: T('absorbed case') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
