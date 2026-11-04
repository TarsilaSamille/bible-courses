import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  section: T('The noun'),
  title: T('Genitive, possession and the relative'),
  subtitle: T('the five jobs of -nya, the most productive affix in Indonesian'),
  body: C(`## Five jobs, one syllable

{-nya} is the most productive suffix in Indonesian, and it is what stands in for almost everything Portuguese does with prepositions and articles. It attaches to the end of a base and does five things: possession, object, place, beneficiary and nominalisation.

It can do so much because Indonesian has no case. Where Portuguese would change the preposition ({de}, {em}, {a}), Indonesian puts {-nya} and the reader works out the function from the verb around it. The risk in the system is the opposite of what one imagines: the information is not missing, it is repeated.

A reader who does not know {-nya} reads {rumahnya} as if it were a new noun. A reader who knows it reads {-nya} as a question: owned by whom, for whom, where, of what.

## Possession: the possessor comes first

Portuguese puts the possessor after a preposition: "o livro de Maria". Indonesian puts the possessor **before** the noun, stuck to it: {buku Maria}. There is no preposition, no article, and the order is reversed relative to Portuguese.

This works with pronouns and with names. {rumah saya} "my house", {buku Petrus} "Peter’s book", {nama Tuhan} "the name of God".

And there is a second route, the clitic. Instead of a separate possessor, {-nya} becomes {-ku}, {-mu} or {-nya} and glues itself straight to the noun: {rumahku} "my house", {namamu} "your name", {kitabnya} "his book". The third-person {-nya} is identical to the nominal suffix, which is why {kitabnya} can mean both "his book" and "the book the sentence is about".

The plural clitic is rare, and the ordinary form is the full possessor: {rumah kami}, {rumah mereka}. Anyone who writes {buku mereka} is right; anyone who writes {bukunya} with a plural subject has swapped the number by accident.

## Object, place and beneficiary

Here is the part that looks like three jobs and is a single mechanism: {-nya} closed up with a preposition. Portuguese writes "a ele", "para ele", "dele", "nele", four separate words; Indonesian writes {padanya}, {untuknya}, {darinya}, {di dalamnya}, four words in which the {-nya} is always the same third-person pronoun.

{1} Object. {-nya} glued to a verb is the cliticised direct object: {melihatnya} "to see him", {membacanya} "to read it", {menulisnya} "to write it". In Portuguese the pronoun "o" or "a" comes loose after the verb; in Indonesian it becomes a suffix and disappears. It is the most invisible operation in the language, and it is why {melihat} and {melihatnya} are different words to a reader.

{2} Place. With nouns of place and time, the {-nya} marks ownership of the place, not direction: {bulannya} "in his month", {tahunnya} "in his year", {rumahnya} "at his house". Compare {di rumah} "in a house" with {di rumahnya} "at his house", which is the same preposition with the pronoun glued on.

{3} Beneficiary. It is the preposition {pada} or {untuk} plus the clitic: {kepadamu} "to you", {untuknya} "for him", {beri padanya} "give him". The commonest pattern in the New Testament is a transfer verb followed by {pada} plus clitic: {memberikan kepadamu}, {mempersembahkan kepadanya}.

There is a fourth use, nominalisation, and it is the most productive of all. {-nya} after a verb turns the clause into a noun: {datangnya} "the coming", {keluarannya} "the going out", {perjalanannya} "his journey", {pemakaiannya} "the use". Greek does the same with {-sis}, which is why a Greek New Testament full of abstract nouns meets Indonesian well prepared.

One detail closes the system: when the {-nya} is possessive over a proper name, the name can come after. {Allah-nya} is "his God", and it is common in vocatives, as in {Allah-ku}.

## Di mana hatimu, di situ juga bendaharaanmu

{Matthew 6:21} repeats the same pair twice, and the pair is {di} plus clitic: {Di mana hatimu, di situ juga bendaharaanmu}. The second member of the pair is {Perbendaharaanmu}, with the second-person clitic in {-mu}.

The verse in Portuguese needs a construction that a noun phrase does not handle well. Indonesian repeats the structure and lets the sense move from the abstract to the concrete: the treasure that is where the heart is. What Greek told apart with two words and Portuguese with a locution, Indonesian does by repeating the pattern.

The pattern is this: {X-mu} means "your X", and the question the reader asks before every {X} is always the same, who owns it. A reader who has forgotten that {hatimu} is "your heart" reads {bendaharaanmu} as two nouns with no relation, and loses the whole verse.`),
  vocab: [
    V('-nya', 'nya', 'of, at, to (suffix of possession and object)'),
    V('-ku', 'ku', 'my, of me'),
    V('-mu', 'mu', 'your, of you'),
    V('rumah', 'rumah', 'house, home'),
    V('buku', 'buku', 'book'),
    V('nama', 'nama', 'name'),
    V('Tuhan', 'Tuhan', 'Lord, God'),
    V('kami', 'kami', 'we'),
    V('mereka', 'mereka', 'they'),
    V('melihat', 'lihat', 'to see'),
    V('melihatnya', 'lihat', 'to see him'),
    V('membaca', 'baca', 'to read'),
    V('membacanya', 'baca', 'to read it'),
    V('kepadamu', 'pada', 'to you'),
    V('untuknya', 'untuk', 'for him'),
    V('datangnya', 'datang', 'the coming (of it)'),
    V('hatimu', 'hati', 'your heart'),
    V('bendaharaan', 'bendaharaan', 'treasure'),
  ],
  rules: [
    {
      n: '1',
      text: T('{-nya} does five jobs: possession, object, place, beneficiary and nominalisation.'),
    },
    {
      n: '2',
      text: T(
        'The possessor comes before the noun, with no preposition: {rumah saya}, {buku Petrus}.',
      ),
    },
    {
      n: '3',
      text: T(
        'As a clitic the possessor becomes {-ku}, {-mu} or {-nya} and glues on: {rumahku}, {namamu}, {kitabnya}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{-nya} on a verb is the cliticised object: {melihatnya} "to see him". After a preposition it is the third-person pronoun: {padanya}.',
      ),
    },
    {
      n: '5',
      text: T(
        'After a verb, {-nya} nominalises the clause: {datangnya} "the coming", {keluarannya} "the going out".',
      ),
    },
  ],
  notes: [
    {
      label: T('The clitic and the possessor'),
      text: T(
        'The clitic ({namamu}) is generally preferred to a separate possessor ({nama kamu}), because the clitic marks the relation as tight. The full possessor turns up when the referent needs prominence: {nama Allah yang baik}.',
      ),
    },
    {
      label: T('Where -nya disappears'),
      text: T(
        'After {akan} cliticisation is optional with some verbs: {akan datang} and {akan datangnya} are both possible, with a difference of register. In clauses with {sudah} and {sedang} the clitic is rarer.',
      ),
    },
  ],
  examples: [
    { text: 'Rumah saya dekat pasar.', gloss: T('My house is near the market.') },
    { text: 'Buku Petrus hilang.', gloss: T('Peter’s book is missing.') },
    { text: 'Namamu siapa?', gloss: T('What is your name?') },
    { text: 'Melihatnya di sudut itu.', gloss: T('I saw him in that corner.') },
    { text: 'Dia akan memberikannya kepadamu.', gloss: T('He will give it to you.') },
    { text: 'Datangnya Nabi sudah dekat.', gloss: T('The coming of the prophet is near.') },
    { text: 'Untuknya kita berkumpul.', gloss: T('For him we gather.') },
    { text: 'Rumahnya dekat.', gloss: T('His house is near.') },
    { text: 'Kita menunggu dia datang.', gloss: T('We wait for him to come.') },
  ],
  tables: [
    {
      caption: T('Os cinco empregos de -nya'),
      head: ['Emprego', 'Padrão', 'Exemplo', 'Leia como'],
      rows: [
        ['posse', 'X + nya', 'rumahnya', 'a casa dele'],
        ['objeto', 'verbo + nya', 'melihatnya', 'vê-lo'],
        ['lugar', 'di + clítico', 'bulannya', 'no mês dele'],
        ['beneficiário', 'pada + clítico', 'padanya', 'a ele'],
        ['nominalização', 'verbo + nya', 'datangnya', 'a vinda'],
      ],
    },
    {
      caption: T('Posse por extenso e por clítico'),
      head: ['Via', 'Pronome', 'Exemplo', 'Leia como'],
      rows: [
        ['por extenso', 'saya', 'rumah saya', 'a minha casa'],
        ['por extenso', 'kamu', 'rumahmu atau rumah kamu', 'a tua casa'],
        ['por clítico', '-ku', 'rumahku', 'a minha casa'],
        ['por clítico', '-mu', 'namamu', 'o teu nome'],
        ['por clítico', '-nya', 'kitabnya', 'o livro dele'],
        ['plural por extenso', 'mereka', 'rumah mereka', 'a casa deles'],
      ],
    },
    {
      caption: T('Preposição mais clítico'),
      head: ['Preposição', 'Significado', 'Com -nya', 'Português'],
      rows: [
        ['pada', 'a, para', 'padanya', 'a ele'],
        ['untuk', 'para', 'untuknya', 'para ele'],
        ['dari', 'de', 'darinya', 'dele'],
        ['di', 'em, no', 'di dalamnya', 'neles'],
        ['ke', 'a, para', 'kepadanya', 'a eles'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What does {-nya} do in {melihatnya}?'),
    options: [
      T('cliticised object: "to see him"'),
      T('possession: "his sight"'),
      T('place: "in the sight"'),
      T('nominalisation: "the seeing"'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Build the clitic: your name = ___.'),
      answer: 'namamu',
      hint: T('Base plus second-person clitic.'),
    },
    {
      kind: 'choose',
      prompt: T('How do you say "Peter’s book" without a preposition?'),
      options: [
        T('Buku Petrus'),
        T('Buku dari Petrus'),
        T('Buku untuk Petrus'),
        T('Buku di Petrus'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the use of {-nya} to the example'),
      pairs: [
        { a: T('{kitabnya}'), b: T('possession') },
        { a: T('{membacanya}'), b: T('object') },
        { a: T('{bulannya}'), b: T('place') },
        { a: T('{keluarannya}'), b: T('nominalisation') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
