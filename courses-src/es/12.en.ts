import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('Adverbs of time'),
  subtitle: T('hoy, mañana, siempre — timeline'),
  section: T('Adjectives and adverbs'),
  body: C(`## The three basic times

{hoy} "today" · {ayer} "yesterday" · {mañana} "tomorrow". Add {por la} to mark the part of the day: {hoy por la mañana} "this morning" · {ayer por la tarde} "yesterday afternoon" · {mañana por la noche} "tomorrow night".

The phrase {mañana por la mañana} is correct and traditional: {mañana} is an adverb, {por la mañana} is a set phrase.

## Other points on the line

{ahora} "now" · {luego} "then, later" · {entonces} "then" · {pronto} "soon" · {ya} "already" · {todavía} "still" · {mientras} "while".

## Frequency

{síempre}? No. The series is: {siempre} "always" · {casi siempre} "almost always" · {casi nunca} "almost never" · {nunca} "never" · {jamás} "never" (more emphatic) · {a veces} "sometimes" · {a menudo} "often" · {de vez en cuando} "from time to time".

## Time as a noun

{hoy} and {mañana} also work as temporal nouns: {el hoy} "the present" · {el mañana} "the future" · {el ayer} "the past". In {hoy} the {h} is silent.

Biblical: {El mundo de hoy} "today's world".

Ex.: {Velad, porque no sabéis el día} "watch, for ye know not the day" (Matt 24:42 — {porque} with a timeless present).`),
  vocab: [
    V('hoy', 'hoy', 'today'),
    V('mañana', 'mañana', 'tomorrow'),
    V('ayer', 'ayer', 'yesterday'),
    V('siempre', 'siempre', 'always'),
    V('a veces', 'vez', 'sometimes'),
    V('el mañana', 'mañana', 'tomorrow (noun!)'),
    V('el día', 'día', 'the day (Matt 24:42)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"mañana por la mañana"?'),
    options: [
      T('Repetition error'),
      T('Correct: "tomorrow morning" (adverb + set phrase!)'),
      T('Only poetic'),
      T('Plural'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: "___ por la mañana" (this morning)'),
      answer: 'hoy',
      hint: T('Rule §1: the adverb comes first.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence uses the adverb as a NOUN?'),
      options: [
        T('Mañana es frío'),
        T('El mañana será mejor'),
        T('Ayer fui al mercado'),
        T('Hoy no trabajo'),
      ],
      answer: 1,
      hint: T('Rule §3: the noun needs an article.'),
    },
    {
      kind: 'match',
      prompt: T('Match the adverb to its value'),
      pairs: [
        { a: T('{siempre}'), b: T('always') },
        { a: T('{a veces}'), b: T('sometimes') },
        { a: T('{casi nunca}'), b: T('almost never') },
        { a: T('{todavía}'), b: T('still') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    { n: '1', text: T('hoy/ayer/mañana + por la (mañana/tarde/noche) marks the part of the day.') },
    { n: '2', text: T('Never cannot open a sentence; use No + verb: No viene nunca.') },
    { n: '3', text: T('With an article the adverb becomes a noun: el hoy, el mañana, el ayer.') },
  ],
  notes: [
    {
      label: T('The habitual present'),
      text: T(
        'A time adverb marks when, not the grammatical tense. {Siempre} with the present gives habit; with the preterite it only locates the past. Tense comes from the verb; the adverb only situates it.',
      ),
    },
  ],
  examples: [
    { text: '{hoy}', gloss: T('Today.') },
    { text: '{mañana por la mañana}', gloss: T('Tomorrow morning.') },
    { text: '{el mañana}', gloss: T('The future (adverb turned noun!).') },
    { text: '{el día}', gloss: T('The day (Matt 24:42).') },
  ],
  tables: [
    {
      caption: T('Table 1 — Time adverbs'),
      head: [T('Adverb'), T('Value'), T('Example')],
      rows: [
        ['{hoy}', T('today'), '{hoy es lunes}'],
        ['{ayer}', T('yesterday'), '{ayer fue fiesta}'],
        ['{mañana}', T('tomorrow'), '{mañana vendré}'],
        ['{ahora}', T('now'), '{ahora no puedo}'],
        ['{luego}', T('then, later'), '{luego te lo digo}'],
        ['{entonces}', T('then'), '{entonces llegó}'],
        ['{pronto}', T('soon, early'), '{pronto vuelvo}'],
      ],
    },
    {
      caption: T('Table 2 — Frequency scale'),
      head: [T('Degree'), T('Form'), T('Translation')],
      rows: [
        ['100%', '{siempre}', T('always')],
        ['quase 100%', '{casi siempre}', T('almost always')],
        ['às vezes', '{a veces}, {a menudo}', T('sometimes, often')],
        ['quase nunca', '{casi nunca}', T('almost never')],
        ['0%', '{nunca}, {jamás}', T('never')],
      ],
    },
  ],
};
