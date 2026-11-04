import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  section: T('The noun'),
  title: T('The plural'),
  subtitle: T('buku is "the book" and "the books": the number lives somewhere else'),
  body: C(`## The noun does not know how many

{buku} is the book and the books. {rumah} is the house and the houses. The Indonesian noun has no plural, no number, and no way of having one: the form is a single form and that is all. Anyone translating from Portuguese hunts for a plural sign on the noun and finds nothing, because there is nothing to find.

This is not an omission. It is a decision of the language, and it forces a question the reader asks the wrong way round: where is the number? The answer is that the number lives in the rest of the sentence. It turns up in a numeral ({tiga buku}), in a quantifier ({banyak buku}), in a totalising demonstrative ({semua buku}, {kedua buku}), or inside the noun itself, in the reduplicated form ({buku-buku}).

The practical consequence is that {buku} on its own is ambiguous in Portuguese and is not ambiguous in Indonesian. The reader has to know that Portuguese folded the plural into the noun and Indonesian did not.

## Where the number lives

Four places, and the noun is none of them.

{1} Numeral. {tiga buku}, {sepuluh rumah}, {seratus orang}. The numeral comes before the noun and is the plainest way of saying "more than one".

{2} Quantifier. {banyak buku} "many books", {sedikit buku} "a few books", {beberapa buku} "some books". {banyak} is the commonest and needs no numeral with it.

{3} Totalising demonstrative. {semua buku} "all the books", {kedua buku} "the two books", {ketiganya} "the three of them", {mereka-mereka} "each of them".

{4} Reduplication. {buku-buku}, {anak-anak}, {orang-orang}, {rumah-rumah}. The repeated form turns up when the noun is the whole phrase again, not when it follows a numeral.

The point that misleads most is the direction of the difference. In Portuguese the plural is an accident the noun carries by itself; in Indonesian it is a decision of the sentence. So the same sentence can become a different sentence without a single letter of the noun changing.

## Reduplication: the plural that lives inside the word

Reduplication is the repetition of the base, whole or in part. It is the only way the noun itself can carry a plural, and for that reason it is the only point at which the Indonesian plural looks like the Portuguese one.

Full reduplication repeats the whole word: {buku} → {buku-buku}, {anak} → {anak-anak}, {orang} → {orang-orang}. It works for native one- and two-syllable nouns and is current in Biblical prose. One caveat: {buku-buku} is a plural and can also sound like "various books", with a hint of diversity.

Partial reduplication comes with {se-} and a classifier: {seorang} "one person", {seekor} "one animal", {sebiji} "one grain", {sebuah} "one object". There is no plural here at all: {se-} marks one, and the classifier says what kind of thing is being counted.

A third group takes {ber-} plus a numeral and means "in groups of": {berdua} "the two of them together", {bertiga} "in threes", {berlima} "in fives". It is a way of counting that Portuguese does not have, and it shows up in sentences like "the two of them were agreed".

Full and partial reduplication are not interchangeable. {orang-orang} is plural; {seorang} is singular; {banyak orang} is also plural, and it is more common in speech than {orang-orang}, which sounds literary for a countable noun.

## Pintu yang sempit, jalannya sesak

{Matthew 7:13} has the cleanest pair Indonesian offers: {Masuklah melalui pintu yang sempit, sebab sempitlah pintu dan sesak jalannya}. Portuguese needs two plurals the Greek had, one on each noun, and sometimes a third on the verb: "the narrow gates", "the narrow way". Indonesian writes {pintu} twice and {jalannya} once, and the difference the Greek made with the article shows up only in a {yang} and a {nya} clitic.

The reader translating word for word writes {pintu-pintu yang sempit}, which is not wrong, and then {pintu sempit} for the second term, which loses the plural by accident. The two mean the same thing in Portuguese and not the same thing in Indonesian: the first asserts that several gates exist, the second talks about some gate or other. In Biblical translations the second is commoner, and nobody notices, because the information is already in the context.

One case where the loss is visible: {mobil saya} can be "my car" and "my cars", and the two sentences are strictly identical. In Portuguese the difference sits in the noun; in Indonesian it can only sit in {satu}, {kedua}, {banyak} or in reduplication, and if none of those appears, the reader has no way to tell. The translator picks one of the two readings and the context decides for her, not the word.`),
  vocab: [
    V('buku', 'buku', 'book'),
    V('buku-buku', 'buku', 'books (reduplicated)'),
    V('rumah', 'rumah', 'house, home'),
    V('rumah-rumah', 'rumah', 'houses (reduplicated)'),
    V('anak-anak', 'anak', 'children, sons (reduplicated)'),
    V('orang', 'orang', 'person; classifier for people'),
    V('orang-orang', 'orang', 'people (reduplicated)'),
    V('tiga', 'tiga', 'three'),
    V('sepuluh', 'sepuluh', 'ten'),
    V('seratus', 'seratus', 'one hundred'),
    V('banyak', 'banyak', 'many'),
    V('sedikit', 'sedikit', 'few, a little'),
    V('beberapa', 'beberapa', 'some, several'),
    V('semua', 'semua', 'all, every'),
    V('keduanya', 'dua', 'the two of them'),
    V('berdua', 'dua', 'the two together, as a pair'),
    V('pintu', 'pintu', 'gate, door'),
    V('jalannya', 'jalan', 'the way (of it)'),
  ],
  rules: [
    {
      n: '1',
      text: T('The Indonesian noun marks no plural: {buku} is "the book" and "the books".'),
    },
    {
      n: '2',
      text: T(
        'The number lives in the numeral, the quantifier, the totalising demonstrative or in reduplication.',
      ),
    },
    {
      n: '3',
      text: T(
        'Full reduplication ({buku-buku}) is plural; partial reduplication with {se-} ({seorang}) is singular.',
      ),
    },
    {
      n: '4',
      text: T(
        '{semua} and {keduanya} are totalising quantifiers and do the work of the Portuguese plural.',
      ),
    },
    {
      n: '5',
      text: T('{ber-} plus a numeral means "in groups of": {berdua}, {bertiga}, {berlima}.'),
    },
  ],
  notes: [
    {
      label: T('When reduplication sounds different'),
      text: T(
        'In {buku-buku} the tone is generic plurality, "books of all kinds". In {anak-anak} the tone is familiar. In liturgical prose full reduplication sounds grander than {banyak anak}.',
      ),
    },
    {
      label: T('Loans and reduplication'),
      text: T(
        'Full reduplication works best on short native nouns. With borrowed words the ordinary plural is {banyak + noun} or a numeral, and reduplication sounds colloquial: {mobil-mobil} is accepted but {banyak mobil} is more formal.',
      ),
    },
  ],
  examples: [
    { text: 'Buku itu ada di meja.', gloss: T('The book is on the table (or: the books are).') },
    { text: 'Banyak buku di meja.', gloss: T('Many books on the table.') },
    { text: 'Tiga buku di meja.', gloss: T('Three books on the table.') },
    { text: 'Anak-anak bermain di halaman.', gloss: T('The children play in the yard.') },
    { text: 'Orang-orang sudah datang.', gloss: T('The people have arrived.') },
    { text: 'Setiap orang membawa seekor domba.', gloss: T('Each person brings one sheep.') },
    { text: 'Mereka berdua pergi ke kota.', gloss: T('The two of them went to the city.') },
    { text: 'Semua kitab kudus.', gloss: T('All Scripture.') },
    { text: 'Rumah-rumah itu kosong semua.', gloss: T('Those houses are all empty.') },
  ],
  tables: [
    {
      caption: T('Onde o número mora'),
      head: ['Recurso', 'Exemplo', 'Leia como', 'Valor'],
      rows: [
        ['numeral', 'tiga buku', 'três livros', 'contagem exata'],
        ['quantificador', 'banyak buku', 'muitos livros', 'quantidade indefinida'],
        ['totalidade', 'semua buku', 'todos os livros', 'conjunto inteiro'],
        ['parcial', 'keduanya', 'os dois livros', 'conjunto determinado'],
        ['redução integral', 'buku-buku', 'livros', 'plural dentro do nome'],
      ],
    },
    {
      caption: T('Redução integral e redução parcial'),
      head: ['Tipo', 'Padrão', 'Exemplo', 'Número'],
      rows: [
        ['integral, 1 sílaba', 'buku → buku-buku', 'buku-buku', 'plural'],
        ['integral, 2 sílabas', 'anak → anak-anak', 'anak-anak', 'plural'],
        ['integral, pessoa', 'orang → orang-orang', 'orang-orang', 'plural'],
        ['parcial com se-', 'se- + classificador', 'seorang', 'singular, um'],
        ['parcial com se-', 'se- + classificador', 'seekor', 'singular, um'],
        ['coletiva com ber-', 'ber- + numeral', 'berdua', 'grupo de dois'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How do you say "the books" with no numeral and no quantifier?'),
    options: [T('buku-buku'), T('buku'), T('seorang buku'), T('para buku')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Build the reduplicated plural: "the children" = ___.'),
      answer: 'anak-anak',
      hint: T('Reduplicate the whole base.'),
    },
    {
      kind: 'choose',
      prompt: T('What does {berdua} mean?'),
      options: [T('the two together'), T('two years'), T('the second time'), T('twice')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the quantifier to its value'),
      pairs: [
        { a: T('{tiga}'), b: T('exact') },
        { a: T('{banyak}'), b: T('indefinite') },
        { a: T('{semua}'), b: T('total') },
        { a: T('{berlima}'), b: T('in groups of five') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
