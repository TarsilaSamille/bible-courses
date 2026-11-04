import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('Comparative and superlative'),
  subtitle: T('más/menos — el más… (relative!)'),
  section: T('Adjectives and adverbs'),
  body: C(`## Comparative of inequality

Formed with {más} or {menos} + adjective, and the adjective does **not** change: {más grande} "bigger" · {menos claro} "less clear" · {más difícil} "more difficult". For equality, {tan} … {como}: {tan bueno como} "as good as".

Unlike English, Spanish cannot start a sentence with {más}: write {Más vale}, never "*Más vale"! And with very different terms you need {que} or {de lo que}: {Es más alto de lo que era} "he is taller than he was".

## {que} or {como}?

• {que} = **comparison**, renders "than": {mayor que} "bigger than" · {mejor que} "better than".
• {como} = **equality**: {es como tú} "he is like you".

Pattern: {más} + adjective + **{que}** + term. Fixed expressions win over the pattern: {más que} "very".

## Irregular comparatives

• {bueno} → {mejor} "better" (superlative {el mejor})
• {malo} → {peor} "worse" ({el peor})
• {grande} → {mayor} "bigger" ({el mayor})
• {pequeño} → {menor} "smaller" ({el menor})

## Relative superlative

Takes an article: {el más grande} "the biggest" · {la mejor} "the best" · {los más jóvenes} "the youngest". The article may drop in such phrases as {es la mejor}.

Biblical: 1 Cor 13:13 {Ahora permanecen la fe, la esperanza y el amor, estos tres; pero el mayor de ellos es el amor} "the greatest of these is love".

## Absolute superlative

No article, with the suffix {-ísimo}: {buenísimo} "very good" · {grandísimo} · {muchísimo} "very much" · {cercanísimo} "very near". {muy} + adjective is also common.`),
  vocab: [
    V('más grande', 'grande', 'bigger'),
    V('mejor', 'bueno', 'better (irregular!)'),
    V('peor', 'malo', 'worse'),
    V('el más grande', 'grande', 'the biggest (relative!)'),
    V('buenísimo', 'bueno', 'very good (-ísimo!)'),
    V('mayor', 'grande', 'greater (irregular!)'),
    V('el amor', 'amor', 'love (1 Cor 13:13)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"el más grande" vs "grandísimo"?'),
    options: [
      T('Same'),
      T('Relative (the biggest, with article) × absolute (huge!)'),
      T('The opposite'),
      T('Error'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Irregular comparative of "bueno": ___ (better)'),
      answer: 'mejor',
      hint: T('Rule §4 — only four irregulars.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is CORRECT?'),
      options: [
        T('Es más alto que su padre'),
        T('Más vale que vengas'),
        T('Es más alto como su padre'),
        T('Es el más alto que su padre'),
      ],
      answer: 1,
      hint: T('Rule §1: más never opens a sentence.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete the relative superlative: "___ mayor de ellos es el amor" (1 Cor 13:13)'),
      answer: 'el',
      hint: T('Rule §5: the relative superlative takes an article.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Comparative with más/menos (invariable!); más never opens a sentence: Más vale.'),
    },
    { n: '2', text: T('Comparison takes que (mayor que); equality takes como (tan bueno como).') },
    { n: '3', text: T('Only four irregular comparatives: mejor, peor, mayor, menor.') },
    {
      n: '4',
      text: T(
        'Relative superlative takes an article (el más grande); absolute uses -ísimo (buenísimo).',
      ),
    },
  ],
  notes: [
    {
      label: T('Comparing people carefully'),
      text: T(
        '{más} + adjective + {que} compares with people; {tan} + adjective + {como} does the same. {más} + noun + {de} compares things. Swapping the two changes the sense, not just the grammar.',
      ),
    },
  ],
  examples: [
    { text: '{más grande}', gloss: T('Bigger.') },
    { text: '{mejor}', gloss: T('Better.') },
    { text: '{el más grande}', gloss: T('The biggest.') },
    { text: '{buenísimo}', gloss: T('Very good (absolute superlative).') },
  ],
  tables: [
    {
      caption: T('Table 1 — Irregular comparatives'),
      head: [T('Positive'), T('Comparative'), T('Relative superlative'), T('Absolute superlative')],
      rows: [
        ['{bueno}', '{mejor}', '{el mejor}', '{buenísimo}'],
        ['{malo}', '{peor}', '{el peor}', '{malísimo}'],
        ['{grande}', '{mayor}', '{el mayor}', '{grandísimo}'],
        ['{pequeño}', '{menor}', '{el menor}', '{pequeñísimo}'],
      ],
    },
    {
      caption: T('Table 2 — The three uses'),
      head: [T('Type'), T('Form'), T('Example'), T('Needs article?')],
      rows: [
        [T('comparative'), '{más} + adj.', '{más grande}', T('no')],
        [T('equality'), '{tan} + adj. + {como}', '{tan bueno como}', T('no')],
        [T('rel. superlative'), '{el} + {más} + adj.', '{el más grande}', T('yes')],
        [T('abs. superlative'), 'adj. + {-ísimo}', '{buenísimo}', T('no')],
      ],
    },
  ],
};
