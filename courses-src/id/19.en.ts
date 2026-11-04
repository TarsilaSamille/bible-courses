import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  section: T('Adverb'),
  title: T('The adverb: position and the negative words'),
  subtitle: T('It goes after the verb, but tidak, bukan and jangan go before it'),
  body: C(`## The adverb goes after the verb

The rule is one line and it fits on a card: **a manner adverb goes after the verb.**

{dia datang cepat} "he comes fast". {kami bekerja keras} "we work hard". {dia membaca dengan perhatian} "he reads with attention".

Portuguese does the same with a short adverb ("chegou cedo", "falou claro") and something else with a long one ("falou com uma clareza que ninguém esperava"). Indonesian separates the two by the length of the adverb: the one-word adverb glues itself to the verb, the phrase adverb goes at the end of the verb phrase. That comes later, because it is where the simple rule stops holding.

What never happens is the adverb before the verb. Anyone who writes {cepat dia datang} produces a sentence that sounds translated, and the reader stumbles at the start instead of the end.

## The three that go before

Three words break the rule, and they are the three the reader most needs.

{tidak} negates a verb and comes immediately before it: {dia tidak datang} "he does not come", {dia tidak datang cepat} "he does not come fast". Notice that {cepat} stays where it was and the negation does not move.

{bukan} negates a copula or a noun, and comes before the verb or before the phrase it negates: {ini bukan buku} "this is not a book", {dia bukan guru} "he is not a teacher", {bukan saya yang menulis} "I am not the one who wrote".

{jangan} is the prohibitive, and it takes the slot of {tidak} in an order: {jangan kamu datang} "do not come", {jangan kamu terlalu cepat datang} "do not come too fast". With an imperative, the {lah} is not optional: {datanglah} "come", {jangan datanglah} "do not come".

And there is a fourth group that also goes before the verb and that Portuguese handles with auxiliaries: {akan} "will", {sudah} "already", {sedang} "be in the middle of", {belum} "not yet". The order is the same for all four: aspect, then verb.

## A short adverb and a long one: the two slots

The rule in the first section holds for the one-word adverb. The phrase adverb has another slot, and that is why the same word appears in two positions in different texts.

The one-word adverb is **derivational**: it is tied to what it modifies. {datang cepat} "to come fast", {bekerja keras} "to work hard", {bicara benar} "to speak truthfully". It goes right after the verb, and it always goes.

The phrase adverb is **circumstantial**: it describes the whole situation, not the verb. {baca dengan teliti} "to read with care", {berjalan dengan lambat} "to walk slowly", {bicara dengan tenang} "to speak calmly". It goes at the very end, after the verb **and** the object: {dia membaca buku dengan teliti}, not {dia membaca dengan teliti buku}.

Compare the two with the same content: {dia membaca dengan teliti} is grammatical and means "he reads with attention"; {dia membaca buku dengan teliti} adds the object and is the normal form when there is one. What does not exist is {dia membaca dengan teliti buku}, with the phrase in the middle.

When the phrase adverb is a preposition, it can be moved to the front of the sentence, and the effect is emphasis rather than an obligatory slot: {Dengan teliti dia membaca buku} "carefully, he read the book". Portuguese does the same with "Com cuidado, ele leu".

And there is one case where the adverb leaves its slot and goes inside the verb, which is the clitic: {datangnya} "the coming", {keluarannya} "the going out", {tidurnya} "the fact of his sleeping". These are adverbs turned into nouns, and Biblical reading meets more of them than it meets loose adverbs.

## Jangan menghakimi, supaya kamu tidak dihakimi

{Matthew 7:1} puts both halves of the system in one sentence: {Janganlah kamu menghakimi, supaya kamu tidak dihakimi}.

In the first half, {janganlah} is the prohibitive plus an emphatic {lah}, and it occupies the slot of {tidak}. The verb {menghakimi} is in the infinitive, and that is a register marker: in ordinary speech it is {kamu jangan menghakimi} or {jangan menghakimi}.

In the second half, {supaya} is "so that" and what follows is a full clause with {tidak}. Notice that {tidak} is back in front of the verb, as always, and that the manner adverb of the first clause has disappeared: the verse does not repeat "in the same way", and a translator who feels "just the same" has added a word the text does not have.

The text managed it because {menghakimi} and {dihakimi} are one root with opposite affixes, and because the adverb Greek would use for "just the same" does not exist in Indonesian. A reader who knows the position rule reads both clauses without effort; one who does not goes looking for the missing adverb and cannot find it.`),
  vocab: [
    V('tidak', 'tidak', 'not (verb)'),
    V('bukan', 'bukan', 'not (copula, noun)'),
    V('jangan', 'jangan', 'not (prohibition)'),
    V('datang', 'datang', 'to come'),
    V('datanglah', 'datang', 'come!'),
    V('bekerja', 'kerja', 'to work'),
    V('membaca', 'baca', 'to read'),
    V('bicara', 'bicara', 'to speak'),
    V('dengan', 'dengan', 'with'),
    V('teliti', 'teliti', 'careful; carefully'),
    V('keras', 'keras', 'hard, with force'),
    V('benar', 'benar', 'truthfully'),
    V('sudah', 'sudah', 'already'),
    V('akan', 'akan', 'will'),
    V('sedang', 'sedang', 'be in the middle of (aspect)'),
    V('menghakimi', 'hakimi', 'to judge'),
    V('dihakimi', 'hakimi', 'to be judged'),
    V('supaya', 'supaya', 'so that'),
  ],
  rules: [
    { n: '1', text: T('A one-word manner adverb comes after the verb: {datang cepat}.') },
    {
      n: '2',
      text: T(
        '{tidak} and {bukan} come before the verb; {jangan} takes the slot of {tidak} in an order.',
      ),
    },
    { n: '3', text: T('Aspect also comes before the verb: {sudah}, {akan}, {sedang}, {belum}.') },
    {
      n: '4',
      text: T(
        'A phrase adverb with a preposition goes at the end of the verb phrase, after the object: {membaca buku dengan teliti}.',
      ),
    },
    {
      n: '5',
      text: T(
        'A phrase adverb can move to the front of the sentence with an emphatic effect: {Dengan teliti dia membaca buku}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why there is no pre-verbal adverb'),
      text: T(
        'Portuguese has a pre-verbal adverb in a few lexicalised slots. Indonesian has none, and that absence is what makes {cepat datang} sound wrong rather than archaic.',
      ),
    },
    {
      label: T('The position of jangan'),
      text: T(
        'With {jangan} the pronoun usually follows, because the prohibitive has the force of an order: {jangan kamu datang}. With {tidak} the order is the other way and the pronoun comes first: {kamu tidak datang}.',
      ),
    },
  ],
  examples: [
    { text: 'Dia datang cepat.', gloss: T('He comes fast.') },
    { text: 'Dia tidak datang cepat.', gloss: T('He does not come fast.') },
    { text: 'Kita bekerja keras.', gloss: T('We work hard.') },
    { text: 'Dia membaca buku dengan teliti.', gloss: T('He reads the book carefully.') },
    { text: 'Dengan teliti dia membaca buku.', gloss: T('Carefully, he read the book.') },
    { text: 'Jangan kamu datang.', gloss: T('Do not come.') },
    { text: 'Jangan datanglah ke sini.', gloss: T('Do not come here.') },
    { text: 'Ini bukan buku.', gloss: T('This is not a book.') },
    { text: 'Bukan saya yang menulis.', gloss: T('I am not the one who wrote.') },
    { text: 'Dia sudah datang.', gloss: T('He has already come.') },
  ],
  tables: [
    {
      caption: T('Onde cada palavra fica'),
      head: ['Palavra', 'Posição', 'Frase', 'Leia como'],
      rows: [
        ['advérbio de modo', 'depois do verbo', 'datang cepat', 'vem rápido'],
        ['tidak', 'antes do verbo', 'tidak datang', 'não vem'],
        ['bukan', 'antes do verbo ou do nome', 'bukan buku', 'não é livro'],
        ['jangan', 'antes do verbo', 'jangan datang', 'não venha'],
        ['sudah / akan / sedang', 'antes do verbo', 'sudah datang', 'já veio'],
        [
          'advérbio de sintagma',
          'fim do sintagma verbal',
          'baca buku dengan teliti',
          'lê o livro com cuidado',
        ],
      ],
    },
    {
      caption: T('Os dois lugares do advérbio'),
      head: ['Tipo', 'Padrão', 'Exemplo', 'Leia como'],
      rows: [
        ['derivativo', 'V + advérbio', 'bekerja keras', 'trabalhar com força'],
        ['derivativo', 'V + advérbio', 'bicara benar', 'falar com verdade'],
        [
          'circunstancial',
          'V + O + preposição',
          'baca buku dengan teliti',
          'lê o livro com cuidado',
        ],
        ['circunstancial', 'V + preposição', 'bicara dengan tenang', 'fala com calma'],
        [
          'deslocado',
          'preposição + S + V + O',
          'dengan teliti dia baca buku',
          'com cuidado, ele lê o livro',
        ],
        ['nominalizado', 'V + nya', 'datangnya Kristus', 'a vinda de Cristo'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Where must {teliti} go in {Dia membaca buku ___}?'),
    options: [
      T('at the end: dengan teliti'),
      T('before the subject'),
      T('between subject and verb'),
      T('right after the verb, before the object'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Add the prohibitive: do not come = ___ kamu datang.'),
      answer: 'Jangan',
      hint: T('The word that takes the slot of {tidak} in an order.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is correct?'),
      options: [
        T('Dia membaca dengan teliti buku.'),
        T('Dia membaca buku dengan teliti.'),
        T('Dengan teliti buku dia membaca.'),
        T('Membaca dengan teliti dia buku.'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Match the word to its position'),
      pairs: [
        { a: T('{cepat}'), b: T('after the verb') },
        { a: T('{tidak}'), b: T('before the verb') },
        { a: T('{jangan}'), b: T('before the verb, in an order') },
        { a: T('{sudah}'), b: T('before the verb, aspect') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
