import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  section: T('Reading'),
  title: T('The letter of James'),
  subtitle: T('the hardest Greek in the New Testament and the language that flattens it'),
  body: C(`## The hardest text and the lightest translation

{James} is the hardest of the New Testament to translate out of Greek into any European language, and the reason is historical rather than grammatical. James writes in a Greek that imitates Semitic style, with clauses that have no main verb, with lists that pile up, and without the Greek device of the subordinate clause. A translator out of Greek into Portuguese gets stuck on every sentence and asks where it comes from.

What the text does with that is worth studying: it flattens. Where Greek stacks participles and clauses, Indonesian writes a clause with {yang} and a verb. Where Greek uses {ean}, Indonesian uses {kalau}. Where Greek uses {hina}, Indonesian uses {supaya}.

The result is a letter that looks easier than the letters of Paul and that is further from the Greek than any other in the New Testament. That is not a defect of the translation: it is what happens when a language of minimal structure receives a text of maximum structure.

And it is why James is the right final reading: it uses what the whole course taught and nothing else.

## What the text brings that is new

Nothing. The whole inventory of the chapter fits what has already been described, and going through it once pays.

{Yang}, and heavier here than anywhere else in the New Testament. In James the {yang} is often the grammatical subject of a whole clause, and the verbless Greek clause turns up in Indonesian as {yang} plus a verb. It is nominalisation at scale.

{Kalau} and {jika}, which are the same word in two positions, and the letter moves from one to the other as the register of each passage requires.

{Supaya}, which marks purpose, and the letter uses it a lot: it is a letter full of instructions, and purpose is what ties the instruction to the result.

{Karena}, which is the justification, and the letter opens with it: {bersukacitalah karena berbagai-bagai cobaan}. The abstract noun after it is a noun the Greek writes as an infinitive.

{Banyak}, {sedikit} and {setengah}, which are the quantifiers of proverb and advice: the whole letter has a short form of parable, and the shape of a proverb in Indonesian is always a noun with {yang} and a {tidak} or a {banyak}.

{And} the adjective as a predicate, with no {adalah}, which is how short strong sentences get written: {setiap orang yang baik}.

Nothing in that list is new. What is new is the frequency, and frequency is the real test of a system.

## One page, word by word

The opening of the letter shows everything in four verses. The first has a vocative: {Saudara-saudaraku yang terkasihi}, with {yang} tied to an adjective and {terkasihi} doing duty as noun and adjective at once. The second brings {karena} and an abstract noun: {bersukacitalah karena berbagai-bagai cobaan}. The third uses {supaya} and a verb with {kan}. The fourth is the most instructive, because it is a whole sentence made of an adverb and a preposition: {supaya kamu sempurna dan tidak kekurangan dalam apa saja}.

That fourth verse has not one conjugated verb. It has {supaya}, it has {sempurna} working as an adjective, it has {kekurangan} as an abstract noun and it has {dalam} with {apa saja} as a preposition. Greek has a participle and an infinitive construction, and Indonesian has four separate words that do the same work.

It is what happens when a hard text meets a language that has no participles: Greek builds the sentence in layers, and Indonesian puts everything on the same level. The reader loses the layer and gains legibility.

The next verse, the fifth, brings {hikmat} as a noun and {kalau} with {kekurangan} and {beri}. The {kalau} is the Greek conditional, and the text writes it as a word and not as a verbal form. Anyone hunting for inflection finds a noun and an adverb and no conjugation, and concludes that something is missing. What is missing is inflection itself.

And the sixth has {beri} as a verb and {tidak bertambah} with {dan} as the negative and its opposite. Greek has {mē}, and Indonesian has {tidak}; the difference is that Greek has to repeat the negation inside the verb, and Indonesian puts a particle in front and is done.

The seventh demands patience and brings {jangan} as a prohibitive: it is the only command-form prohibition in the letter. The eighth repeats {hikmat} and {dunia}, and it is the point at which the same word means "wisdom" and also "practical sense".

The ninth and tenth go on with {kekurangan} and {baik}, and the tenth closes with {berkahi}. Not one of them uses a conjugation the others do not. It is the same verb with {akan} in one and {sudah} in another.

A reader who has made this journey word by word now knows what the letter does. He knows where the adverbs are, because they are before the verbs. He knows where the conditionals are, because they are {kalau} and {jika}. He knows where the themes are, because they are {yang}.

## Where Greek and Indonesian disagree

The problem of translating James is not technical. It is that Greek and Indonesian disagree about what a sentence is.

Greek allows a clause with no main verb, and the reader fills the gap from context. Indonesian does not: without a verb there is no clause, and the translator has to supply one. Every time that happens, the translator has decided something Greek left open.

Greek uses the infinitive to express purpose and the participle to express cause. Indonesian uses {supaya} and {karena}, and they are connectives, not verbs. A verb that becomes a connective loses the ability to be negated directly: Greek can say "not in order that", and Indonesian has to write {bukan supaya}.

Greek stacks participles, and Indonesian stacks clauses. That is longer and clearer at the same time, and it is why this text is longer than the others.

And the last difference is the deepest. Greek of James has a density the language cannot support, and the text settles it by translating more slowly, with more words and fewer layers. Anyone who reads James in Indonesian and finds it easy is reading a different text from the Greek. He is reading the same sense with another grammar, and the distance between the two things is the distance between a text and its content.

That is why this course ends where it ends. A text that stacks layers needs a language that stacks layers to be read faithfully, and Indonesian does not stack. It reaches the same place by a flatter road, and anyone who knows the flat road reads any text.`),
  vocab: [
    V('yang', 'yang', 'that, which, who'),
    V('kalau', 'kalau', 'if'),
    V('jika', 'jika', 'if (written)'),
    V('supaya', 'supaya', 'so that'),
    V('karena', 'karena', 'because'),
    V('jangan', 'jangan', 'do not (prohibition)'),
    V('tidak', 'tidak', 'not'),
    V('dan', 'dan', 'and'),
    V('banyak', 'banyak', 'many'),
    V('sedikit', 'sedikit', 'few'),
    V('setengah', 'setengah', 'half'),
    V('berbagai-bagai', 'bagai', 'various'),
    V('hikmat', 'hikmat', 'wisdom'),
    V('sempurna', 'sempurna', 'perfect'),
    V('kekurangan', 'kurang', 'lack'),
    V('terkasihi', 'kasih', 'beloved'),
    V('dunia', 'dunia', 'world'),
    V('sabar', 'sabar', 'patient'),
    V('beriman', 'iman', 'to believe'),
  ],
  rules: [
    {
      n: '1',
      text: T('In James, {yang} is often the subject of a whole clause and not a relative.'),
    },
    {
      n: '2',
      text: T('The conditionals are {kalau} and {jika}, which are words and not verbal forms.'),
    },
    { n: '3', text: T('Aspect adverbs come before the verb, and the tense is read in them.') },
    {
      n: '4',
      text: T(
        'The text renders Greek participles as {yang} plus a verb, which is why the letter has more clauses and fewer layers.',
      ),
    },
    {
      n: '5',
      text: T(
        'A verse of James has no verb: it has {supaya}, an adjective, a noun and a preposition, and that is how it is.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why James is hard in Greek'),
      text: T(
        'James writes in a Semitic Greek, with clauses that have no main verb and loose lists. Greek lets you complete what is missing from context; Indonesian does not. Every time the translator supplies a verb the Greek did not have, he has decided something the original left open.',
      ),
    },
    {
      label: T('What the letter does not use'),
      text: T(
        'James hardly uses the passive with {oleh}, and it does not pronominalise with {-nya} nearly as often. It runs on {yang}, adverbs and connectives, which is exactly the material of the earlier lessons.',
      ),
    },
  ],
  examples: [
    {
      text: 'Bersukacitalah karena berbagai-bagai cobaan.',
      gloss: T('Rejoice because of various trials.'),
    },
    {
      text: 'Supaya kamu sempurna dan tidak kekurangan dalam apa saja.',
      gloss: T('So that you may be perfect and lacking nothing.'),
    },
    {
      text: 'Kalau ada di antara kamu yang kekurangan hikmat, mintalah.',
      gloss: T('If any of you lacks wisdom, ask.'),
    },
    {
      text: 'Jangan disimpan sampai kamu menghasilkan.',
      gloss: T('Do not hold it back until you have produced it.'),
    },
    { text: 'Setiap orang yang baik.', gloss: T('Every good person.') },
    { text: 'Saudaraku yang terkasihi.', gloss: T('My dear brothers.') },
    {
      text: 'Akan bertambah dan dia akan diberkati.',
      gloss: T('He will grow and he will be blessed.'),
    },
    { text: 'Kesalahanmu adalah banyak.', gloss: T('Your fault is talking much.') },
    { text: 'Kalau kamu lapar, mintalah.', gloss: T('If you are hungry, ask.') },
    {
      text: 'Sabar itu penting, dan persevere.',
      gloss: T('Patience is important, and perseverance.'),
    },
  ],
  tables: [
    {
      caption: T('O grego de Tiago contra a TB'),
      head: ['Grego', 'Papel no texto', 'TB', 'Efeito da tradução'],
      rows: [
        ['ean', 'condicional', 'kalau / jika', 'forma verbal vira palavra'],
        ['hina', 'finalidade', 'supaya', 'verbo vira conectivo'],
        ['participio', 'estado do sujeito', 'yang + verbo', 'empilha viras orações'],
        ['infinitivo', 'complemento', 'supaya / untuk', 'verbo vira conectivo'],
        ['oração sem verbo', 'sujeito elíptico', 'yang + verbo', 'tradutor põe o verbo'],
        ['enumeração', 'argumento', 'dan repetido', 'mais palavras'],
      ],
    },
    {
      caption: T('A cadeia de advérbios na carta'),
      head: ['Palavra', 'Posição', 'Pergunta que responde', 'Exemplo na carta'],
      rows: [
        ['kalau / jika', 'antes do verbo', 'se?', 'kalau ada di antara kamu'],
        ['supaya', 'antes do verbo', 'para que?', 'supaya kamu sempurna'],
        ['karena', 'antes do verbo', 'por quê?', 'karena berbagai-bagai cobaan'],
        ['akan', 'antes do verbo', 'vai?', 'akan bertambah'],
        ['sudah', 'antes do verbo', 'já?', 'sudah ditulis'],
        ['jangan', 'antes do verbo', 'não (ordem)', 'jangan disimpan'],
        ['tidak', 'antes do verbo', 'não?', 'tidak kekurangan'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Supaya kamu sempurna}, what does {supaya} do?'),
    options: [T('marks purpose'), T('marks past'), T('marks negation'), T('is a noun')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Fill in the conditional: if any of you lacks wisdom = ___ ada di antara kamu.'),
      answer: 'kalau',
      hint: T('The conditional conjunction.'),
    },
    {
      kind: 'choose',
      prompt: T('Which is the correct negation of "lacking nothing"?'),
      options: [
        T('tidak kekurangan dalam apa saja'),
        T('bukan kekurangan dalam apa saja'),
        T('jangan kekurangan dalam apa saja'),
        T('tidak cukup dalam apa saja'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the connective to its function'),
      pairs: [
        { a: T('{kalau}'), b: T('if') },
        { a: T('{supaya}'), b: T('so that') },
        { a: T('{karena}'), b: T('because') },
        { a: T('{jangan}'), b: T('do not (order)') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
