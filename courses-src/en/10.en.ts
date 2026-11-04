import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Conditionals 0–3'),
  subtitle: T('if, unless, wish — four degrees of reality'),
  section: T('The verb'),
  body: C(`## Four degrees

The zero conditional states a general truth: {If you sow, you reap}. The first presents a possible condition: {If you pray, God will hear}. The second sets present and result in an unreal past: {If I had faith, I would move mountains}. The third presents an unrealized past condition: {If he had called, I would have come}.

This table teaches a default pattern, not a prison. Biblical English may use present forms in future-looking clauses: {he that heareth}. That can be timeless or future-oriented; context and translation decide.

## Forms and assumptions

In second and third conditionals, English commonly uses {were} for every person: {If I were you}, {If she were here}. In an ordinary factual past, use {was}: {I was tired}. {Unless} usually means {if not}; a positive {if} can be emphatic: If you love me, keep my commands.

{Provided that}, {as long as}, {even if} and {otherwise} have different meanings. Keep contemporary English and KJV separate.`),
  vocab: [
    V('if', 'if', 'if'),
    V('unless', 'unless', 'unless'),
    V('were', 'be', 'were'),
    V('would come', 'come', 'would come'),
    V('had come', 'come', 'had come'),
    V('sow', 'sow', 'sow'),
    V('reap', 'reap', 'reap'),
    V('as long as', 'as long as', 'as long as'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T("Complete: 'If I ___ (be) you…'"),
    answer: 'were',
    hint: T('In the unreal, were for every person.'),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete the clause: If he ___, I will answer.'), answer: 'calls' },
    {
      kind: 'match',
      prompt: T('Match structure and type.'),
      pairs: [
        { a: 'if + present + present', b: T('zero') },
        { a: 'if + past + would', b: T('second') },
        { a: 'if + had + would have', b: T('third') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T("Which sentence is nearly equivalent to 'unless you believe'?"),
      options: [
        T('If you do not believe'),
        T('If you believe'),
        T('When you believe'),
        T('Although you believe'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Zero conditionals describe regularities; first–third discuss particular people and situations.',
      ),
    },
    {
      n: '2',
      text: T(
        'In second and third conditionals, were appears with every person when the situation is unreal.',
      ),
    },
    {
      n: '3',
      text: T(
        "Unless normally means if not, but direct negation may be more emphatic: If I don't know, nobody does.",
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical:'),
      text: T('A present form in KJV may be timeless; do not force will into the verse.'),
    },
  ],
  examples: [
    { text: '{If I were you}', gloss: T('If I were you — unreal present') },
    {
      text: '{If he had come, we would have prayed}',
      gloss: T('If he had come, we would have prayed'),
    },
    { text: '{unless you believe}', gloss: T('unless you believe') },
  ],
  tables: [
    {
      caption: T('Conditional patterns'),
      head: [T('Type'), T('If +'), T('Result')],
      rows: [
        [T('0 — general'), 'present', 'present'],
        [T('1 — real'), 'present', 'will + base'],
        [T('2 — unreal'), 'past', 'would + base'],
        [T('3 — unreal past'), 'had + participle', 'would have + participle'],
      ],
    },
  ],
};
