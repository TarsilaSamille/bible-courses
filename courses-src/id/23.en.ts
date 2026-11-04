import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  section: T('Verb'),
  title: T('Causative and benefactive'),
  subtitle: T('mengirimi, membelikan: the -kan that makes a verb indirect'),
  body: C(`## -kan is not one thing

Anyone who learns {-kan} as "to make" learns the smallest part of it. The suffix shows up in four families, and they are told apart by the second object the verb gains.

{1} Causative or factitive. The subject makes the verb happen. {menuliskan} "to have written", {membesarkan} "to raise", {memperpanjang} "to lengthen", {mendengarkan} "to make hear". The second object is what is affected, and the action comes from outside.

{2} Benefactive. The subject does the verb **for** somebody. {membelikan} "to buy for someone", {mengirimi} "to send a letter to someone", {membayarkan} "to pay for someone", {memasukkan} "to put something away for someone". The second object is the beneficiary, and it is the beneficiary Portuguese marks with "for".

{3} Applicative. The second object is the surface the action is applied to. {memasukkan} "to put inside", {menanamkan} "to plant in", {mencangkokkan} "to graft onto". The recipient is a place.

{4} Factitive with an agent. The subject makes another subject do it. The legitimate example is {menyuruh} "to order that", which brings the action asked for rather than an agent.

The distinction that matters to the reader is the second one, because it is the one Greek uses most often and the one Portuguese handles with a preposition. A Greek participle like "written for" or "sent to" is a {-kan} in Indonesian, and a translator who looks for "for" in the verb looks in the wrong place.

## The preposition that became a suffix

In Portuguese the benefactive is a preposition: "buy **for** someone", "send **to** someone". In Indonesian the same information can sit in three places, and all three are worth having.

{1} In the suffix. {membelikan} already says "buy for someone", and the beneficiary arrives as a second object: {membelikan buku untuk ibu} "buy a book for the mother".

{2} In a preposition. The verb keeps no suffix and the recipient is marked: {membawa oleh ubur}, {mengirimi surat kepada ayah} "send a letter to the father". With a proper name the {kepada} fuses onto it: {mengirimi Ami}.

{3} In a clitic. With a pronoun the recipient becomes a clitic and the preposition disappears: {mengirim surat kepadamu} "send a letter to you", {meminum obat untuknya} "take the medicine for him".

The point that misleads is that {-kan} and {untuk} can appear together, and it is not wrong: {membelikan buku untuk ibunya} "buy a book for his mother". The {-kan} makes the verb indirect and the {untuk} says who benefits. Two different pieces of information, even when the same name appears in both slots.

There is a case where {-kan} does the work of {untuk} alone: {mengirimi} with nothing else already means "send a letter to someone", with the recipient obligatorily inside the verb. It is the same mechanism as {menuliskan}, and it is what produces the hardest reading: a verb with two objects in which the second one does not appear.

## When there is no -kan

The verbs of helping, teaching and serving do **not** take {-kan}, and the recipient is always marked: {membantu} "to help", {menolong} "to rescue", {mengajar} "to teach", {melayani} "to serve", {mendoah} "to pray for".

{membantu ibunya} "he helps his mother", {melayani tamu} "he serves the guest", {mendoah untuk negara} "he prays for the country". The preposition is obligatory here, and a translator who adds {-kan} produces {membantukan ibunya}, which is a different and much rarer verb.

The practical rule for the reader is one question: **ask who benefits.** If the beneficiary is the natural recipient of the action and the verb means something like doing something on someone's behalf, {-kan} is likely. If the verb is already about helping and {-kan} sounds odd, it is because it is not benefactive.

And there are {-kan} forms that are lexicalised and mean none of this: {mengatakan} "to say", {meletakkan} "to put", {meminum} "to drink". They are {-kan} that lost the second object and kept the sense of the base. A list of them is more useful than a rule, because there are few.

## Berilah dengan gratis

{Matthew 10:8} has the cleanest example of the benefactive in the New Testament: the text tells the sender to {Berilah dengan gratis, dan terimalah juga dengan gratis}. The {dengan gratis} is an adverb of manner, and the verb {beri} takes no {-kan} because "give" is already transitive.

A reader who renders it "give freely" gets the sense right and the reading wrong: the verse is about a verb that gives to somebody, and anyone who writes {memberikan dengan gratis} introduces a {-kan} that makes the verb indirect and suggests that the giving is done by someone else. Greek has a single verb for giving; Indonesian has two, and the context picks the simpler one.

The next clause, about receiving, shows the other side: {terima} takes no {-kan} either, because "receive" is already a verb with a recipient. And the parallelism Greek makes with one repeated verb, Indonesian makes with two rhyming verbs and one shared preposition, and the preposition is the same in both clauses.`),
  vocab: [
    V('beri', 'beri', 'to give'),
    V('terima', 'terima', 'to receive'),
    V('beli', 'beli', 'to buy'),
    V('membelikan', 'beli', 'to buy for someone'),
    V('kirim', 'kirim', 'to send'),
    V('mengirim', 'kirim', 'to send'),
    V('mengirimkan', 'kirim', 'to send on behalf'),
    V('iri', 'iri', 'letter, message'),
    V('mengirimi', 'iri', 'to send a letter to someone'),
    V('bayar', 'bayar', 'to pay'),
    V('membayarkan', 'bayar', 'to pay for someone'),
    V('masuk', 'masuk', 'to enter'),
    V('memasukkan', 'masuk', 'to put inside'),
    V('bantu', 'bantu', 'to help'),
    V('membantu', 'bantu', 'to help'),
    V('melayani', 'layani', 'to serve'),
    V('dengar', 'dengar', 'to hear'),
    V('mendengarkan', 'dengar', 'to listen to'),
    V('untuk', 'untuk', 'for'),
    V('kepada', 'kepada', 'to'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'With {-kan} the verb becomes indirect: {membelikan} "to buy for someone", {mengirimi} "to send a letter to someone".',
      ),
    },
    {
      n: '2',
      text: T(
        'The beneficiary can sit in the second object ({untuk + noun}), in a preposition ({kepada + noun}) or in a clitic ({kepadamu}).',
      ),
    },
    {
      n: '3',
      text: T(
        '{mengirimi} with no visible object already means "send a letter to someone": the recipient is inside the verb.',
      ),
    },
    {
      n: '4',
      text: T(
        'Verbs of helping, teaching and serving take no {-kan}: {membantu ibunya}, {melayani tamu}, {mendoah untuk negara}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Some {-kan} forms are lexicalised and signal nothing about indirectness: {mengatakan} "to say", {meletakkan} "to put".',
      ),
    },
  ],
  notes: [
    {
      label: T('The obligatory second object'),
      text: T(
        'In {mengirimi} and {menuliskan} the second object is obligatory, but it can stay implicit once the context has fixed it. That is why one root looks transitive at one point and indirect at another: {mengirim surat} and {mengirimi surat}.',
      ),
    },
    {
      label: T('Why -kan and -i coexist'),
      text: T(
        'Both suffixes make the verb indirect, and the choice follows what is being added: {-kan} introduces an action done to somebody, {-i} introduces the receptacle or the surface. {menuliskan} receives, {menutupi} covers.',
      ),
    },
  ],
  examples: [
    { text: 'Dia membelikan buku untuk ibunya.', gloss: T('He bought a book for his mother.') },
    { text: 'Dia mengirimi surat kepada ayah.', gloss: T('He sent a letter to his father.') },
    { text: 'Dia mengirimi Ami surat.', gloss: T('He sent Ami a letter.') },
    { text: 'Dia meminjamkan bukunya kepada adi.', gloss: T('He lent his book to his brother.') },
    { text: 'Dia membayar ongkos bus.', gloss: T('He paid the bus fare.') },
    { text: 'Dia membantu ibunya.', gloss: T('He helps his mother.') },
    { text: 'Dia mendengarkan lagu itu.', gloss: T('He is listening to that song.') },
    { text: 'Surat itu dimasukkan ke dalam kotak.', gloss: T('The letter was put into the box.') },
    { text: 'Dia mengatakan yang sebenarnya.', gloss: T('He told the truth.') },
    { text: 'Dia meletakkan buku di meja.', gloss: T('He put the book on the table.') },
  ],
  tables: [
    {
      caption: T('As quatro famílias do -kan'),
      head: ['Família', 'Segundo objeto', 'Exemplo', 'Leia como'],
      rows: [
        ['causativo', 'o que é afetado', 'membesarkan anak', 'criar uma criança'],
        ['causativo', 'o que é afetado', 'memperpanjang jalan', 'prolongar a rua'],
        ['benefactive', 'quem se beneficia', 'membelikan buku', 'comprar um livro'],
        ['benefactive', 'quem recebe', 'mengirimi surat', 'enviar uma carta'],
        ['aplicativo', 'o lugar', 'memasukkan surat', 'pôr dentro uma carta'],
        ['lexicalizado', 'nenhum', 'mengatakan rahasia', 'dizer um segredo'],
      ],
    },
    {
      caption: T('Onde o destinatário pode aparecer'),
      head: ['Via', 'Padrão', 'Exemplo', 'Leia como'],
      rows: [
        [
          'segundo objeto',
          'V-kan + untuk + nome',
          'membelikan buku untuk ibu',
          'comprar um livro para a mãe',
        ],
        [
          'preposição',
          'mengirimi + kepada + nome',
          'mengirimi surat kepada ayah',
          'enviar uma carta ao pai',
        ],
        ['clítico', 'mengirim + clítico', 'kepadamu', 'para ti'],
        ['interno ao verbo', 'mengirimi', 'mengirimi Ami', 'enviar uma carta à Ami'],
        ['verbo sem -kan', 'membantu + untuk', 'membantu ibunya', 'ajudar a mãe'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What does {mengirimi} add to {mengirim}?'),
    options: [
      T('a recipient: "send a letter to someone"'),
      T('the past'),
      T('the plural'),
      T('the passive'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Fill in: buy for the mother = Ix ___ buku untuk ibu.'),
      answer: 'membelikan',
      hint: T('The base {beli} plus the indirect suffix.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is correct?'),
      options: [
        T('Dia mengirimi surat kepada ayah.'),
        T('Dia mengirimi surat ke ayah.'),
        T('Dia kirimkan surat kepada.'),
        T('Dia mengirims surat kepada ayah.'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the verb to its type'),
      pairs: [
        { a: T('{membelikan}'), b: T('benefactive') },
        { a: T('{memasukkan}'), b: T('applicative') },
        { a: T('{membantu}'), b: T('no -kan') },
        { a: T('{mengatakan}'), b: T('lexicalised') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
