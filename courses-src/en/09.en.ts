import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('Future and progressive forms'),
  subtitle: T('will, shall, going to; be + -ing'),
  section: T('The verb'),
  body: C(`## Three future systems

{Will} is the ordinary future in modern English: {I will pray}. It also expresses willingness, prediction or spontaneous decision: {I will answer}; {He will arrive tomorrow}.

{Be going to} usually comes from a present plan or current evidence: {I am going to pray}; {The glass is going to fall}. Evidence-based prediction is often stronger than a bare will-future.

{Shall} is less common in everyday contemporary speech. It remains in formal promises, instructions, offers and Biblical language: {I shall not want}. Do not automatically treat shall as a separate grammatical future; read its force in context.

## Progressive forms

{Be} + verb + {-ing} presents an event as in progress, temporary or developing: {I am reading}; {They were praying}. English also uses this form for arrangements: {I am meeting her at six}.

State verbs are normally not progressive: {know}, {believe}, {want}, {belong}, {seem}. Some change meaning when progressive: {know} → {be knowing} is usually unnatural; {think} → {be thinking} suggests a current view. Biblical {is come} may be an archaic present form, not a modern progressive; identify the register before analyzing {-ing}.`),
  vocab: [
    V('will pray', 'pray', 'will pray'),
    V('going to read', 'read', 'going to read'),
    V('is reading', 'read', 'is reading'),
    V('was coming', 'come', 'was coming'),
    V('believe', 'believe', 'believe'),
    V('know', 'know', 'know'),
    V('seem', 'seem', 'seem'),
    V('tomorrow', 'tomorrow', 'tomorrow'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T("Why does 'I am believing' sound wrong?"),
    options: [
      T('Believe is a state verb'),
      T('A subject is missing'),
      T('It is future'),
      T('It is correct'),
    ],
    answer: 0,
  },
  exercises: [
    { kind: 'fill', prompt: T("Plan: 'I ___ going to pray.'"), answer: 'am' },
    {
      kind: 'match',
      prompt: T('Match form and use.'),
      pairs: [
        { a: 'will', b: T('decision/prediction') },
        { a: 'going to', b: T('plan/evidence') },
        { a: 'am -ing', b: T('action in progress') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('Which sentence describes present evidence?'),
      options: [
        T('The glass is going to fall'),
        T('The glass falls tomorrow'),
        T('I will be fall'),
        T('The glass go to fall'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Do not use the progressive automatically with state verbs. Ordinary {believe} describes a stable position.',
      ),
    },
    {
      n: '2',
      text: T(
        'The progressive can imply temporary or developing behavior: He is being patient differs from He is patient.',
      ),
    },
    {
      n: '3',
      text: T(
        'Will is not automatic in if/when clauses. Compare: If I call, I will tell you; If you call, you tell me.',
      ),
    },
  ],
  notes: [
    {
      label: T('Register:'),
      text: T('Shall and is come are strong KJV/archaic signals in Biblical context.'),
    },
  ],
  examples: [
    { text: '{I shall not want}', gloss: T('I shall not want — Biblical promise') },
    { text: '{They were praying}', gloss: T('They were praying — event in progress') },
    { text: '{I believe}', gloss: T('I believe — state, not progressive') },
  ],
  tables: [
    {
      caption: T('Future and progressive'),
      head: [T('Form'), T('Use'), T('Example')],
      rows: [
        ['{will + base}', T('will/prediction'), '{I will pray}'],
        ['{be going to + base}', T('plan/evidence'), '{She is going to leave}'],
        ['{be + -ing}', T('in progress/arrangement'), '{I am reading}'],
      ],
    },
  ],
};
