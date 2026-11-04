import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  section: T('The adjective and the adverb'),
  title: T('The adverb: position'),
  subtitle: T('ontem cheguei tarde, and the adverb that closes the sentence'),
  body: C(`## The adverb that closes the sentence

The adverb of modifying circumstance has a fixed place: it comes at the end of the clause. {Ouvi tudo claramente}, {Saiu ontem à noite}, {Ficou ali por três dias}. Anyone who puts that adverb in the middle is calling attention to it, and anyone who puts it at the front is doing something else, which is fixing the time.

What closes the clause is the circumstance, not the quality. In {Falei com ele ontem} the adverb says when, and so it closes. In {Ontem falei com ele} the same adverb opens the sentence, and the information left at the end becomes the listener.

## The adverb of definite time opens the sentence

Definite time is what pins the action to a point: {ontem}, {hoje}, {amanhã}, {na terça-feira}, {naquele dia}. When the adverb is of that type it may go at the front, and there it highlights the time and leaves the rest of the sentence for later. {Ontem cheguei tarde} puts the time in front; {Cheguei tarde ontem} puts the action in front.

The contrast is the same one you hear in ordinary Portuguese: {Ontem saí de casa} and {Saí de casa ontem} say the same thing, and the first sounds more informative because it highlights the day.

## The order verb, object, adverb

When the sentence has all three, the order is verb, object, adverb: {O mestre explicou a lição lentamente}, {Jesus amou os seus até o fim}, {Li o livro inteiro}. Moving the adverb into the middle gives emphasis and nothing else: {Ele explicou lentamente a lição} sounds like a line built for effect.

The neutral position is therefore the last one, and a translator should put it there unless the Greek original stretches the same emphasis. At the end is the pattern; in the middle is emphasis; at the front is time.

## Não ... nunca: a correlation

Some adverbs do not work alone. {Nunca} and {jamais} require {não} before them, and the negation covers both: {Não vi nunca}, {Não vi jamais}. The same holds with {nem}: {Nem vi}, and the sentence grows stronger when the verb is negative too: {Nem vi, nem ouvi}.

The point is that {não ... nunca} is a correlation, not two negations. Rendering each word as a separate negation duplicates what is there: Greek and Hebrew already mark the negation once, and Portuguese needs the two words because the adverb is what carries the sense.

## Reading criterion

In any sentence with an adverb, ask: which adverb is it? Is it at the end, in the middle or at the front? And is it definite time? Three questions, and the position is explained.

Psalm 5:4 puts {pela manhã} twice, at the front of both clauses, and the second time the time is already known. A translator keeps that position instead of scattering it, and the reader senses that the whole psalm is one request repeated at daybreak.`),
  vocab: [
    V('ontem', 'ontem', 'ontem'),
    V('hoje', 'hoje', 'hoje'),
    V('amanhã', 'amanhã', 'amanhã'),
    V('claramente', 'clara', 'claramente'),
    V('tarde', 'tarde', 'tarde'),
    V('cedo', 'cedo', 'cedo'),
    V('juntos', 'junto', 'juntos'),
    V('ali', 'ali', 'ali'),
    V('então', 'então', 'então'),
    V('sempre', 'sempre', 'sempre'),
    V('jamais', 'jamais', 'jamais'),
    V('nem', 'nem', 'nem'),
    V('não', 'não', 'não'),
    V('nunca', 'nunca', 'nunca'),
    V('pela manhã', 'manhã', 'pela manhã'),
  ],
  rules: [
    { n: '§1', text: T('The adverb of modifying circumstance goes at the end of the clause.') },
    {
      n: '§2',
      text: T('The adverb of definite time can go at the front, and there it highlights the time.'),
    },
    {
      n: '§3',
      text: T('With verb, object and adverb, the neutral order is verb, object, adverb.'),
    },
    { n: '§4', text: T('{Nunca} and {jamais} need {não} before them: the negation covers both.') },
    {
      n: '§5',
      text: T('An adverb in the middle of the sentence marks emphasis, not a neutral position.'),
    },
  ],
  notes: [
    {
      label: T('Biblical × everyday'),
      text: T(
        'Greek and Hebrew let the adverb sit anywhere, because they are free-order languages. Portuguese does not: every position carries an effect, and the effect is what the translator decides.',
      ),
    },
    {
      label: T('Double negator'),
      text: T(
        'In {não vi jamais}, a Portuguese reader does not hear two negations: the second negates the adverb, not the verb. The same holds for {não é possível}.',
      ),
    },
  ],
  examples: [
    { text: 'Ontem cheguei tarde.', gloss: T('Definite time opening the sentence.') },
    { text: 'Cheguei tarde ontem.', gloss: T('Same content, with the action in the foreground.') },
    { text: 'Ouvi tudo claramente.', gloss: T('Modifying circumstance closing the clause.') },
    {
      text: 'O mestre explicou a lição lentamente.',
      gloss: T('Neutral order: verb, object, adverb.'),
    },
    { text: 'Saiu ontem à noite.', gloss: T('Two adverbs of time, at the end.') },
    { text: 'Não vi jamais.', gloss: T('Correlation: {não} plus {jamais}.') },
    { text: 'Nem vi, nem ouvi.', gloss: T('Verb and adverb both negative.') },
    {
      text: 'Pela manhã, ó Senhor, ouvirás a minha voz.',
      gloss: T('Psalm 5:4: time at the front of the clause.'),
    },
  ],
  tables: [
    {
      caption: T('Position of the adverb'),
      head: ['Posição', 'Exemplo', 'O que destaca'],
      rows: [
        ['no início', 'Ontem cheguei tarde.', 'o tempo'],
        ['no meio', 'Ele explicou lentamente a lição.', 'a circunstância'],
        ['no fim', 'Ouvi tudo claramente.', 'nada: é a posição neutra'],
      ],
    },
    {
      caption: T('The order of the three'),
      head: ['Verbo', 'Objeto', 'Advérbio'],
      rows: [
        ['O mestre explicou', 'a lição', 'lentamente'],
        ['Jesus amou', 'os seus', 'até o fim'],
        ['Li', 'o livro', 'inteiro'],
      ],
    },
    {
      caption: T('Negative correlation'),
      head: ['Advérbio', 'O que vem antes', 'Exemplo'],
      rows: [
        ['nunca', 'não', 'não vi nunca'],
        ['jamais', 'não', 'não vi jamais'],
        ['nem', 'verbo negativo', 'nem vi'],
        ['tampouco', 'também', 'nem eu, tampouco'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Where does the adverb of modifying circumstance go?'),
    options: [
      T('at the end of the clause'),
      T('always at the front'),
      T('before the verb'),
      T('between the article and the noun'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{nunca} requires {não} before it, and the two form a ______.'),
      answer: 'correlação',
      hint: T('They are not two independent negations.'),
    },
    {
      kind: 'choose',
      prompt: T('In “ouvi tudo claramente”, the adverb is:'),
      options: [
        T('at the end'),
        T('at the front'),
        T('in the middle of the clause'),
        T('glued to the verb'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the position to what it highlights.'),
      pairs: [
        { a: T('no início'), b: T('o tempo') },
        { a: T('no meio'), b: T('a circunstância') },
        { a: T('no fim'), b: T('nada: é a posição neutra') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
};
