import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  section: T('Prepositions'),
  title: T('Particles and prepositions'),
  subtitle: T('di, ke, dari, pada, untuk, dengan, oleh, dalam, antara'),
  body: C(`## Nine prepositions and what each one does

Portuguese has dozens of prepositions and none of them does any other job. Indonesian has nine that do all the work, and the function of each is predictable.

{di} is place and fixed time: {di rumah}, {di sekolah}, {di hari Minggu}, {di bulan Januari}. {ke} is direction: {ke rumah}, {ke sekolah}, {ke Betlehem}. {dari} is source: {dari rumah}, {dari Betlehem}, {dari mana} "from where".

{untuk} is purpose and recipient: {untuk Anda}, {untuk semua}, {untuk lahir}. {dengan} is company and instrument: {dengan saya}, {dengan tangan}. {oleh} is the agent of a passive: {ditulis oleh Petrus}.

{dalam} is interior and abstract: {dalam rumah}, {dalam hati}, {dalam perjalanan}. {antara} is a relation between two: {antara kamu dan saya}, {antara dua jalan}. And {tentang} is topic: {kitab tentang Yohanes}.

With a proper name, {di} and {ke} behave in a way that is predictable and useful: {di} plus a proper name is where the place is, {ke} plus a proper name is where you are going. {Di Betlehem} "in Bethlehem" is where the magi were; {ke Betlehem} "to Bethlehem" is the movement. The same city, the two prepositions.

## di and ke: the pair Portuguese does not have

Portuguese does not set off place and direction the same way. It says "in the house" and "to the house", "in the city" and "to the city", and the reader has to learn which preposition goes with which noun. Indonesian makes the opposition a rule, and the rule holds for every noun without exception.

**{di} is where the thing is; {ke} is where it is going.** {Buku itu di meja} "the book is on the table". {Buku itu ke mana?} "where is the book going?" {Saya ke sekolah} "I am going to school". {Saya di sekolah} "I am at school".

Confusing the two produces the most visible reading error, and the symptom is easy to recognise: someone who has them mixed writes {ke} where the text had {di} and produces a sentence describing movement where the original describes state. It is the kind of mistake that changes no words and changes the sentence.

The two also combine with the clitic, and the shape is the same in both cases: {dirumahnya} "at his house", {kerumahnya} "to his house". The difference is in the preposition, not in the rest.

And there is a group of words that both prepositions produce, which is the {-an} nominal: {ke-an} gives {taman} "the going to the garden" and also "the garden". They are nouns that were born from a preposition and that today cover place and direction at once. The symptom is the same noun after both: {ke jalan} and {di jalan}, and context is the only thing that knows which is which.

## oleh, dengan, pada: the three that get mixed up

Three prepositions with different functions and one common mistake between them.

{oleh} works only as an agent. {Surat itu ditulis oleh Petrus} "the letter is written by Peter", {yang rusak itu diperbaiki oleh perusahaan} "what was broken was repaired by the company". Outside a passive, {oleh} means "brand, mark": {tanda oleh Petrus} "Peter’s mark". A translator who renders {oleh} as "by" in every context produces "the mark by Peter", which is a different sentence.

{dengan} has two faces and they do not mix. With a human being it is company: {dengan saya}, {dengan Petrus}. With an instrument it is means: {dengan tangan}, {dengan pisau}. And with an abstract noun it is relation: {dengan kasih sayang} "with love". The difference is that company requires a person and an instrument requires a thing, and what follows {dengan} says which one it is.

{pada} is the literary preposition and the clitic one. In writing, {pada} marks place and time with a formal tone: {pada hari pertama}, {pada masa itu}. With a pronoun it becomes a clitic: {kepadamu} "to you", {padanya} "to him", {beri padanya} "give him". And {pada} has one use no other has: {pada anggap dia guru} "considered a teacher", {pada anggap dia terbaik} "considered the best". There {pada} marks the function of a term, not its place.

The rule against confusion is a question: **is the term a place, a person, a thing or a function?** A fixed place is {di} or {dalam}; a destination is {ke}; a person or thing that accompanies is {dengan}; the agent of a passive is {oleh}; a function is {pada}.

## Ke Betlehem, di Betlehem

{the account of the magi}, at {Matthew 2:11}, has both prepositions in one sentence, which is why it is the best example of {di} and {ke} there is.

The text says that they went {ke Betlehem} and that they came into {di rumah}. The first preposition marks the movement from city to city, the second marks the position inside the house. Portuguese does the same thing with "to Bethlehem" and "in the house", but anyone translating by word for word writes {ke rumah} for the second term and produces "to the house", which is a movement and not a place.

The same verse brings {di dalam rumah}, which joins the two: {dalam} says interior and {di} says place. It is a sign that the compound {di dalam} says more than {di} alone, and a reader of Biblical text meets it everywhere.

And the verse ends with {sembah} plus a direct object, which shows something else: the preposition shows the relation, and the relation is read in the verb around it.`),
  vocab: [
    V('di', 'di', 'at, in (place, time)'),
    V('ke', 'ke', 'to, towards'),
    V('dari', 'dari', 'from'),
    V('daripada', 'dari', 'than'),
    V('pada', 'pada', 'at (formal), as a function'),
    V('untuk', 'untuk', 'for'),
    V('dengan', 'dengan', 'with'),
    V('oleh', 'oleh', 'by (agent)'),
    V('dalam', 'dalam', 'inside, in (interior, abstract)'),
    V('antara', 'antara', 'between'),
    V('tentang', 'tentang', 'about'),
    V('rumah', 'rumah', 'house, home'),
    V('meja', 'meja', 'table'),
    V('sekolah', 'sekolah', 'school'),
    V('tangan', 'tangan', 'hand'),
    V('di dalam', 'dalam', 'inside'),
    V('Betlehem', 'Betlehem', 'Bethlehem'),
    V('sembah', 'sembah', 'to worship, to offer'),
  ],
  rules: [
    { n: '1', text: T('{di} is fixed place and time; {ke} is direction; {dari} is source.') },
    {
      n: '2',
      text: T(
        'With a proper name, {di} is where and {ke} is where to: {di Betlehem}, {ke Betlehem}.',
      ),
    },
    { n: '3', text: T('{oleh} works only as a passive agent; elsewhere it means "mark".') },
    {
      n: '4',
      text: T(
        '{dengan} with a person is company and with a thing is instrument: {dengan Petrus}, {dengan tangan}.',
      ),
    },
    {
      n: '5',
      text: T(
        '{pada} with a pronoun becomes a clitic: {kepadamu}, {padanya}; with a noun it marks function: {pada anggap dia guru}.',
      ),
    },
  ],
  notes: [
    {
      label: T('The clitic on a preposition'),
      text: T(
        'Prepositions absorb the clitic the same way {di} and {ke} do before a noun: {dirumahnya}, {kerumahnya}, {kepadamu}. The preposition does not change; what changes is what comes before it.',
      ),
    },
    {
      label: T('Where dari becomes comparison'),
      text: T(
        '{Daripada} is {dari} plus {-an} and means "than", for comparison: {Rumahnya lebih besar daripada rumahku}. The same {-an} that makes a place in {taman} makes a comparison in {daripada}.',
      ),
    },
  ],
  examples: [
    { text: 'Buku itu di meja.', gloss: T('The book is on the table.') },
    { text: 'Saya ke sekolah sekarang.', gloss: T('I am going to school now.') },
    { text: 'Saya di sekolah sekarang.', gloss: T('I am at school now.') },
    { text: 'Surat itu ditulis oleh Petrus.', gloss: T('The letter is written by Peter.') },
    { text: 'Tanda itu oleh Petrus.', gloss: T('That mark is Peter’s.') },
    { text: 'Dia datang dengan Petrus.', gloss: T('He came with Peter.') },
    { text: 'Dia memotong dengan pisau.', gloss: T('He cuts with a knife.') },
    { text: 'Ini untuk kamu.', gloss: T('This is for you.') },
    {
      text: 'Rumah ini lebih besar daripada rumahku.',
      gloss: T('This house is bigger than my house.'),
    },
    { text: 'Di dalam rumah itu ada orang.', gloss: T('Inside that house there are people.') },
  ],
  tables: [
    {
      caption: T('As nove preposições'),
      head: ['Preposição', 'Função', 'Exemplo', 'Leia como'],
      rows: [
        ['di', 'lugar e tempo parado', 'di rumah', 'em casa'],
        ['ke', 'direção', 'ke rumah', 'para casa'],
        ['dari', 'origem', 'dari rumah', 'de casa'],
        ['pada', 'lugar formal, função', 'pada hari pertama', 'no primeiro dia'],
        ['untuk', 'finalidade, destinatário', 'untukmu', 'para você'],
        ['dengan', 'companhia, instrumento', 'dengan tangan', 'com a mão'],
        ['oleh', 'agente da passiva', 'ditulis oleh Petrus', 'escrito por Pedro'],
        ['dalam', 'interior, abstrato', 'dalam hati', 'no coração'],
        ['antara', 'entre dois', 'antara kamu dan saya', 'entre você e eu'],
      ],
    },
    {
      caption: T('O par que o português resolve com o substantivo'),
      head: ['Pergunta', 'Resposta', 'Exemplo', 'Leia como'],
      rows: [
        ['onde está?', 'di', 'Buku itu di meja.', 'o livro está na mesa'],
        ['para onde vai?', 'ke', 'Buku itu ke mana?', 'o livro vai para onde?'],
        ['de onde veio?', 'dari', 'Buku itu dari mana?', 'de onde veio o livro?'],
        ['com quem?', 'dengan', 'Datang dengan Petrus.', 'veio com Pedro'],
        ['com o quê?', 'dengan', 'Potong dengan pisau.', 'corta com a faca'],
        ['para quem?', 'untuk', 'Ini untuk kamu.', 'isto é para você'],
        ['feito por quem?', 'oleh', 'Ditulis oleh Petrus.', 'escrito por Pedro'],
        ['dentro de onde?', 'di dalam', 'di dalam rumah', 'dentro da casa'],
        ['entre o quê?', 'antara', 'antara dua jalan', 'entre duas ruas'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Saya di sekolah}, what does the preposition mark?'),
    options: [
      T('position: I am at school'),
      T('direction: I am going to school'),
      T('source: I came from school'),
      T('recipient: it is for school'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Fill in with direction: I am going home = saya ___ rumah.'),
      answer: 'ke',
      hint: T('The preposition of destination.'),
    },
    {
      kind: 'choose',
      prompt: T('In {Surat itu ditulis ___ Petrus}, which preposition completes it?'),
      options: [T('oleh'), T('dengan'), T('untuk'), T('dalam')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the preposition to its function'),
      pairs: [
        { a: T('{di}'), b: T('fixed place') },
        { a: T('{ke}'), b: T('direction') },
        { a: T('{dari}'), b: T('source') },
        { a: T('{oleh}'), b: T('agent') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
