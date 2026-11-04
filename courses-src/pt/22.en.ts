import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  section: T('The adjective and the adverb'),
  title: T('The adjective: degree'),
  subtitle: T('bom, melhor, ótimo, and the construction the text prefers'),
  body: C(`## The three degrees

The adjective has three degrees, and comparative and superlative come out by rule. The comparative of superiority uses {mais}: {mais alto}, {mais forte}, {mais antigo}. The one of inferiority uses {menos}: {menos difícil}, {menor}. The one of equality uses {tão} and {como}: {tão alto como}, {tão bom como}. And there is the comparative of quantity, {muito}, the commonest one in speech: {muito alto}, {muito bom}.

The superlative comes from the comparative with {o} in front: {o mais alto}, {o mais forte}. The commonest form in text is the one of intensity, with {muito} and no article: {muito alto}, {tão alto}, {bem alto}, {tão}. None of them inflects, which is why Portuguese does not distinguish masculine from feminine in the superlative.

## The irregulars

A short list breaks the rule, and it has to be memorised. {Bom} gives {melhor} and {ótimo}. {Mau} gives {pior} and {péssimo}. {Grande} gives {maior} and {máximo}. {Pequeno} gives {menor} and {mínimo}. {Bom} also accepts {melhor} as a superlative, which gives the oldest construction Portuguese has: {o melhor dos homens}.

The same goes for {muito} and {pouco}, which are words of degree: {muito bom}, {pouco bom}, {muito pior}. And for {bastante}, which is a word of quantity rather than of degree: {bastante gente}, and which in older text often appears as a verb, {bastou}, in the sense of “was enough”.

## The adjectival construction

Portuguese has a longer road to the same statement, and biblical text uses it more than the other one. Instead of {ser importante}, the text says {ter importância}; instead of {ser preciso}, it says {ser necessário}; instead of {ele é fiel}, it says {ele se mostra fiel}. The adjectival construction is what lets the text say {é necessário que} and {é bom que} without changing construction.

The advantage is government: {bom} on its own requires nothing, but {é bom vir} already requires an infinitive, and {é bom que ele venha} requires a whole clause in the subjunctive. The construction is therefore not decoration: it is what governs the verb that follows, and it is the thing a translator has to produce where Greek has a verb like {δέει}.

The point to watch is twofold. First, the construction allows both forms, and sense decides: {é bom que} is evaluation, {é bom vir} is advice. Second, what governs the following verb is the construction and not the noun, which differs from Latin and from Greek.

## Reading criterion

With any adjective, ask: is it positive, comparative or superlative? Is it regular or irregular? And does the text use the adjective alone or inside a construction?

In 1 Cor 13:13, {o maior deles é o amor} is a superlative with {o} in front, and it is the only one of the three degrees in the sentence. The text does not say that love is greater than faith; it says that among the three it comes first: it is a superlative, not a comparative, and the difference between the two is the sense of the verse.`),
  vocab: [
    V('o adjetivo', 'adjetivo', 'the adjective'),
    V('bom', 'bom', 'bom'),
    V('melhor', 'bom', 'melhor'),
    V('ótimo', 'bom', 'ótimo'),
    V('mau', 'mau', 'mau'),
    V('pior', 'mau', 'pior'),
    V('grande', 'grande', 'grande'),
    V('maior', 'grande', 'maior'),
    V('pequeno', 'pequeno', 'pequeno'),
    V('menor', 'pequeno', 'menor'),
    V('muito', 'muito', 'muito'),
    V('tão', 'tão', 'tão'),
    V('mais', 'mais', 'mais'),
    V('é bom que', 'bom', 'é bom que'),
    V('é necessário', 'necessário', 'é necessário'),
    V('o amor', 'amor', 'o amor'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'The comparative of superiority uses {mais}: {mais alto}; the one of inferiority uses {menos}: {menos difícil}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'The regular superlative comes from the comparative with {o} in front: {o mais alto}.',
      ),
    },
    {
      n: '§3',
      text: T('The irregulars are few: {melhor}, {pior}, {maior}, {menor}, {ótimo}, {péssimo}.'),
    },
    {
      n: '§4',
      text: T(
        'The adjectival construction governs the verb that follows: {é bom que} requires the subjunctive, {é bom} requires an infinitive.',
      ),
    },
    {
      n: '§5',
      text: T('Portuguese does not inflect the superlative: {o mais alto} covers both genders.'),
    },
  ],
  notes: [
    {
      label: T('Biblical × everyday'),
      text: T(
        'Greek and Hebrew compare with a particle, and Portuguese compares with {mais}, {menos} or {tão}. Where Greek says {μᾶλλον}, Portuguese says {mais}.',
      ),
    },
    {
      label: T('Careful with the sense'),
      text: T(
        'In {o maior deles é o amor}, the superlative marks position among three, not comparison between two. Rendering it as {mais amoroso} changes the sense of the verse.',
      ),
    },
  ],
  examples: [
    { text: 'Ele é mais alto que o irmão.', gloss: T('Comparative of superiority with {mais}.') },
    { text: 'É tão forte como o pai.', gloss: T('Comparative of equality with {tão} and {como}.') },
    { text: 'É o melhor aluno.', gloss: T('Irregular superlative of {bom}.') },
    { text: 'Isto é muito importante.', gloss: T('Comparative of intensity with {muito}.') },
    { text: 'Ele é um homem bom.', gloss: T('Positive, with no degree at all.') },
    {
      text: 'É necessário que todos venham.',
      gloss: T('Adjectival construction requiring the subjunctive.'),
    },
    {
      text: 'É bom vir cedo.',
      gloss: T('Construction with an infinitive: advice, not evaluation.'),
    },
    { text: 'O maior deles é o amor.', gloss: T('Superlative with {o} in front.') },
  ],
  tables: [
    {
      caption: T('The three degrees'),
      head: ['Grau', 'Exemplo', 'Como se forma'],
      rows: [
        ['positivo', 'alto', 'o próprio adjetivo'],
        ['comparativo', 'mais alto', 'mais + adjetivo'],
        ['comparativo', 'menos difícil', 'menos + adjetivo'],
        ['comparativo', 'tão alto como', 'tão + adjetivo + como'],
        ['superlativo', 'o mais alto', 'o + comparativo'],
      ],
    },
    {
      caption: T('Irregulars'),
      head: ['Positivo', 'Comparativo', 'Superlativo'],
      rows: [
        ['bom', 'melhor', 'o melhor, ótimo'],
        ['mau', 'pior', 'o pior, péssimo'],
        ['grande', 'maior', 'o maior, máximo'],
        ['pequeno', 'menor', 'o menor, mínimo'],
      ],
    },
    {
      caption: T('Adjectival construction'),
      head: ['Locução', 'O que vem depois', 'Exemplo'],
      rows: [
        ['é bom que', 'subjuntivo', 'é bom que ele venha'],
        ['é necessário', 'subjuntivo', 'é necessário que ouçam'],
        ['tem importância', 'complemento', 'tem importância para todos'],
        ['é importante', 'complemento', 'é importante para todos'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the comparative of {bom}?'),
    options: [T('melhor'), T('mais bom'), T('bomente'), T('o bom')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('“É bom que ele ___” needs a verb in the ______.'),
      answer: 'subjuntivo',
      hint: T('It is the construction that governs the verb.'),
    },
    {
      kind: 'choose',
      prompt: T('In “o maior deles é o amor”, {maior} is:'),
      options: [T('superlative'), T('comparative'), T('positive'), T('adjectival construction')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the positive to the comparative.'),
      pairs: [
        { a: T('bom'), b: T('melhor') },
        { a: T('mau'), b: T('pior') },
        { a: T('grande'), b: T('maior') },
        { a: T('pequeno'), b: T('menor') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
