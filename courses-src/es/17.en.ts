import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  title: T('The imperfect'),
  subtitle: T('hablaba — scene, habit, description'),
  section: T('Verbs'),
  body: C(`## The scene

The imperfect describes the **background**: state, habit, description, ongoing action that serves as a backdrop for an event. Only three endings: {-aba} for {-ar}, {-ía} for {-er} and {-ir}.

{hablaba}, {hablabas}, {hablaba}, {hablábamos}, {hablabais}, {hablaban} · {comía} · {vivía}.

## Only three irregulars

{ser} → {era} · {ir} → {iba} · {ver} → {veía}. Everything else is regular.

## Four uses

1. **Description**: {Era ciego} "he was blind" (John 9:25) — the prior state.
2. **Habit**: {Orábamos juntos} "we used to pray together".
3. **Ongoing action (background)**: {Mientras oraba, vino} "while he prayed, someone came" — the preterite marks the interrupting event.
4. **Atmosphere**: {era de noche} "it was night" (John 13:30).

## The pair that reveals the meaning

{Mientras oraba, vino} — the imperfect centers Adam praying, and the preterite announces the arrival. The same contrast explains {Leyó mientras escribía} "he read while he wrote": both verbs are in the same scene, but {vino} carries the focus.

## Past progressive

{estar} in the imperfect + gerund: {estaba orando} · {estaban durmiendo}.

## A note on the biblical style

Mark's Gospel was written in Greek **in the imperfect** ({andaba sobre el mar}, Mark 4:39), which gives the narrative voice motion. John, by contrast, uses the aorist, producing a flat, staccato report.`),
  vocab: [
    V('hablaba', 'hablar', 'spoke (imp.)'),
    V('era', 'ser', 'was (irregular!)'),
    V('iba', 'ir', 'went (irregular!)'),
    V('veía', 'ver', 'saw (irregular!)'),
    V('mientras', 'mientras', 'while'),
    V('estaba orando', 'orar', 'was praying'),
    V('era de noche', 'noche', 'it was night (John 13:30)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('The 3 imperfect irregulars?'),
    options: [
      T('ser, ir, ver (era, iba, veía)'),
      T('ser, estar, haber'),
      T('dar, ver, saber'),
      T('None (all regular)'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Imperfect of "ir" (3rd person): ___ (he went)'),
      answer: 'iba',
      hint: T('Rule §2: only three irregulars.'),
    },
    {
      kind: 'choose',
      prompt: T('In "Mientras oraba, vino", which verb is the EVENT?'),
      options: [T('{oraba} (imperfect)'), T('{vino} (preterite)'), T('{mientras}'), T('Both')],
      answer: 1,
      hint: T('Rule §3: the preterite cuts the scene.'),
    },
    {
      kind: 'match',
      prompt: T('Match the use to the example'),
      pairs: [
        { a: T('description'), b: T('{Era ciego}') },
        { a: T('habit'), b: T('{Orábamos juntos}') },
        { a: T('progressive'), b: T('{estaba orando}') },
        { a: T('atmosphere'), b: T('{era de noche}') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    { n: '1', text: T('Only three endings: -aba, -ía.') },
    { n: '2', text: T('Only three irregulars: ser→era, ir→iba, ver→veía.') },
    { n: '3', text: T('Imperfect = background, preterite = event: Mientras oraba, vino.') },
    { n: '4', text: T('Estar in the imperfect + gerund = past progressive: estaba orando.') },
  ],
  notes: [
    {
      label: T('The imperfect in three jobs'),
      text: T(
        'The same tense paints setting, habit and state description. {Llovía} can be "it was raining" (rain in progress) or "it used to rain" (habit): what differs is the surroundings, not the form.',
      ),
    },
  ],
  examples: [
    {
      text: '{Mientras oraba, vino}',
      gloss: T('While he prayed, he came (Gen 3:9 — background vs event).'),
    },
    { text: '{era de noche}', gloss: T('It was night (John 13:30 — atmosphere).') },
    { text: '{estaba orando}', gloss: T('He was praying (past progressive).') },
  ],
  tables: [
    {
      caption: T('Table 1 — Imperfect × preterite'),
      head: [T('Preterite (event)'), T('Imperfect (background)'), T('Meaning')],
      rows: [
        ['{Vino}', '{oraba}', T('he came while he prayed')],
        ['{Leyó}', '{escribía}', T('he read while he wrote')],
        ['{Habló}', '{era niño}', T('he spoke (he was a child)')],
        ['{Murió}', '{vivía en Galilea}', T('he died (he lived in Galilee)')],
      ],
    },
    {
      caption: T('Table 2 — Imperfect: uses and examples'),
      head: [T('Use'), T('Example'), T('Reference')],
      rows: [
        ['descrição', '{Era ciego}', 'Jo 9.25'],
        ['hábito', '{Orábamos juntos}', '1 Ts 5.17'],
        ['fundo em curso', '{Mientras oraba, vino}', 'Gn 3.9'],
        ['atmosfera', '{era de noche}', 'Jn 13.30'],
        ['idade', '{Jesús tenía treinta años}', 'Lc 3.23'],
      ],
    },
  ],
};
