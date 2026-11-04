import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  title: T('The conditionals'),
  subtitle: T('{sī, nisi}: tense, mood and modality'),
  section: T('The ablative absolute'),
  body: C(`## {sī} and {nisi}

The conjunction {sī} «if» introduces a conditional clause; {nisi} means «unless / if not», except when the sense is «a menos que». The choice of mood and tense in the protasis is **not** a mechanical rendering of Portuguese «se»: Latin distributes tense and modality across a system of five types.

| Type | Prototype | Gloss | Main verb |
|---|---|---|---|
| real, present | \`{sī vēnit}\` | «if he comes» | indicative |
| real, past | \`{sī vēnit}\` | «if he came» | {laetātus sum} |
| ideal, present | \`{sī rōgēs}\` | «if you ask» | {rogō} |
| ideal, perfect | \`{sī rōgāveris}\` | «if you have asked» | {rogō} |
| unreal, present | \`{sī scīrēs}\` | «if you knew» | {dīcam} |
| unreal, past | \`{sī vēnisset}\` | «if he had come» | {dīxissem} |

The logic is this: the **indicative** treats the condition as a fact, something I assume or verify; the **subjunctive** treats it as a mental hypothesis, something I set up or deny. The **subjunctive present** adds the idea of attempt or expectation ({rogēs} «you will try to ask»), and the **subjunctive perfect** adds the idea of a forthcoming result ({rōgāveris} «you will have asked»).

## The real conditional

The simplest type: {sī} + indicative. It works for present and past, with the main verb in the indicative.

- {sī scīs, vēnit?} «if you know, are you coming?»
- {sī vēnit, laetātus sum} «if he came, I am glad»
- {sī Deus vult, omnia possunt} «if God wills, all things are possible»

The Vulgate uses this a great deal in Ezekiel: {sī vēnerit bellum, et multiplicābitur} «if war comes, and it will multiply».

## The ideal conditional

Present or perfect subjunctive. The speaker posits the condition as a deliberate or desired act:

- {sī rōgēs, petam} «if you ask, I will grant»
- {sī crēderitis, videbitis} «if you believe, you will see» — Nicodemus' future in John 3:36
- {sī scīvēritis, cognoscētis} «if you have known, you will know»

The perfect {crēderitis} is the most striking: the condition is prior, the consequence is later.

## The unreal conditional

Imperfect or pluperfect subjunctive. The condition is presented as unfulfilled, and so the main verb is usually also subjunctive or {dicerem}.

- {sī scīrēs, omnia dīcerem} «if you knew, I would tell you everything» (the unreality of the imagined)
- {sī vēnisset, laetātus essem} «if he had come, I would have been glad»
- {nisi Dominus fuisset in nobis, perīssēmus...} «had the Lord not been with us, we had perished» (Psalm 123:6)

It is the most pathetic construction in Latin: the speaker already knows the condition has not come true.

## {Nisi} and {sī nōn}

{nisi} can be both the conditional «if not» and the «a menos que» (= {nisi} = {si nōn}).

- {nē quidem moritur, nisi expellātur} «he does not die unless he is driven out»
- {nisi Dominus in fovea fuerit, nōn erāmus ei creditūrī} «if the Lord had not been in the pit, we had not believed him» (Genesis 37:15)

## Application in the Vulgate

In John 15:24, {mē nōbis loquente, et expellente eōs de domō nostrā, nōn venisset super eōs, ultra eōs nōn fecissent} «if I had not spoken to them and had not driven them out of our house, they would not have sinned». Note the {nōn... nōn...} construction: two negatives, which yields a clear double negative.

In Proverbs 3:5, {Confide in Domino et fac bonum: et dīreget semitas tuās} is an imperative, but the next verse shows the ideal conditional: {sī tibi placeant iustitiae meae} «if my just judgments please you».

## Summary table

| Conjunction | Mood | Tense | Typical use |
|---|---|---|---|
| \`{sī}\` | indicative | any | condition assumed as real |
| \`{sī}\` | subjunctive | present | attempt, request, expectation |
| \`{sī}\` | subjunctive | perfect | prior result |
| \`{sī}\` | subjunctive | imperfect | unfulfilled hypothesis |
| \`{sī}\` | subjunctive | pluperfect | regret over the unrealised |
| \`{nisi}\` | any | any | «if not» or «a menos que» |
| \`{sī nōn}\` | any | any | «if not», more explicit |`),
  vocab: [
    V('si', 'si', 'if'),
    V('nisi', 'nisi', 'if not; unless'),
    V('rogare', 'rogo', 'to ask'),
    V('roges', 'rogo', 'you ask (subj. present)'),
    V('rogaveris', 'rogo', 'you have asked (subj. perfect)'),
    V('scire', 'scio', 'to know'),
    V('scires', 'scio', 'you knew (subj. imperfect)'),
    V('venire', 'venio', 'to come'),
    V('venisset', 'venio', 'he had come (subj. pluperfect)'),
    V('laetatus', 'laetor', 'glad (pass. part.)'),
    V('credere', 'credo', 'to believe'),
    V('perire', 'pereo', 'to perish'),
    V('Dominus', 'Dominus', 'the Lord'),
    V('bellum', 'bellum', 'war'),
    V('poena', 'poena', 'punishment, penalty'),
    V('virtus', 'virtus', 'strength, virtue'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {sī vēnisset, laetātus essem}, what kind of construction is this?'),
    options: [
      T('Real conditional, with the indicative in the condition'),
      T('Ideal conditional, with the present subjunctive'),
      T(
        'Unreal conditional, with the pluperfect subjunctive in the condition and subjunctive in the main verb',
      ),
      T('Purpose clause with {ut}'),
    ],
    answer: 2,
    hint: T('Rule §3: {vēnisset} is the pluperfect subjunctive of the unrealised.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Unreal conditional: sī vēnisset, laetātus ess_'),
      answer: 'em',
      hint: T('The main verb also goes in the subjunctive: laetātus essem.'),
    },
    {
      kind: 'choose',
      prompt: T('Which is the most natural way to say «if I knew»?'),
      options: [T('{sī sciō}'), T('{sī scīrem}'), T('{sī scīrēs}'), T('{sī scīverim}')],
      answer: 2,
      hint: T('Rule §3: the unreal present uses the imperfect subjunctive.'),
    },
    {
      kind: 'match',
      prompt: T('Match each structure to its conditional type'),
      pairs: [
        { a: T('{sī vēnit}'), b: T('real') },
        { a: T('{sī rōgēs}'), b: T('ideal (present)') },
        { a: T('{sī rōgāveris}'), b: T('ideal (perfect)') },
        { a: T('{sī vēnisset}'), b: T('unreal (past)') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In {nisi Dominus fuisset in nobis, perīssēmus} (Ps 123:6), {nisi} means...'),
      options: [
        T('«otherwise» (conditional)'),
        T('«unless» (concessive)'),
        T('«because» (causal)'),
        T('«when» (temporal)'),
      ],
      answer: 0,
      hint: T('Rule §4: {nisi} = {si nōn} when the condition is counterfactual.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{Sī} + indicative = real conditional: the condition is treated as fact, in the present or the past.',
      ),
    },
    {
      n: '2',
      text: T(
        '{Sī} + present subjunctive = ideal conditional: the condition is an act the speaker intends or expects ({rōgēs} «if you ask»).',
      ),
    },
    {
      n: '3',
      text: T(
        '{Sī} + imperfect or pluperfect subjunctive = unreal conditional: the condition is declared unfulfilled, and the main verb also goes into the subjunctive.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Nisi} = {si nōn}: in counterfactual clauses it means «if not»; with a verb of liking in a concessive sense it means «unless».',
      ),
    },
    {
      n: '5',
      text: T(
        'The tense of the main verb follows the type: present in the real, future in the ideal, subjunctive or {dicerem} in the unreal.',
      ),
    },
  ],
  notes: [
    {
      label: T('The subjunctive is not the «if»'),
      text: T(
        "A learner coming from Romance tends to render {sī rōgēs} as «if I ask» and {sī rōgāveris} as «if I have asked». Latin says something else: «if you will try to ask» and «if you have asked». The subjunctive tense does not point to past or present but to the speaker's **stance**: present = intention, perfect = result, imperfect = false hypothesis, pluperfect = regret.",
      ),
    },
    {
      label: T('Psalm 123:6 in the Vulgate'),
      text: T(
        'The most famous line in the Vulgate in the subjunctive is {Nisi Dominus fuisset in nobis, perīssēmus iam} — «had the Lord not been with us, we had already perished». The pluperfect {fuisset} places the condition in the impossible past, and the imperfect {perīssēmus} in the second part reinforces the idea of a frustrated result. It is the construction grammarians call the unreal present with {nisi}.',
      ),
    },
  ],
  examples: [
    { text: 'sī vēnit', gloss: T('if he comes, if he is coming (real)') },
    { text: 'sī vēnit, laetātus sum', gloss: T('if he came, I am glad') },
    { text: 'sī rōgēs, petam', gloss: T('if you ask, I will grant') },
    { text: 'sī crēderitis, videbitis', gloss: T('if you believe, you will see') },
    { text: 'sī scīrēs', gloss: T('if you knew (unreal present)') },
    { text: 'sī vēnisset, laetātus essem', gloss: T('if he had come, I would have been glad') },
    { text: 'nisi Dominus fuisset in nobis', gloss: T('had the Lord not been with us') },
    { text: 'nisi expellātur', gloss: T('unless he is driven out') },
    { text: 'sī tibi placeant iustitiae meae', gloss: T('if my just judgments please you') },
    { text: 'sī vēnerit bellum', gloss: T('if war comes') },
  ],
  tables: [
    {
      caption: T('Table 1 — The five types of conditional'),
      head: [T('Type'), T('Conditional clause'), T('Gloss'), T('Stance of the speaker')],
      rows: [
        ['real', '{sī crēdis}', T('«if you believe»'), T('fact assumed')],
        ['ideal', '{sī rōgēs}', T('«if you ask»'), T('intention')],
        ['ideal', '{sī rōgāveris}', T('«if you have asked»'), T('future result')],
        ['irreal', '{sī scīrēs}', T('«if you knew»'), T('false hypothesis')],
        ['irreal', '{sī vēnisset}', T('«if he had come»'), T('regret')],
      ],
    },
    {
      caption: T('Table 2 — {Sī} and {nisi} in the Vulgate'),
      head: [T('Passage'), T('Text'), T('Mood')],
      rows: [
        [T('Gn 37:15'), '{nisi Dominus in fovea fuerit}', T('pluperf. subj.')],
        [T('Ps 123:6'), '{nisi Dominus fuisset in nobis}', T('pluperf. subj.')],
        [T('Jn 3:36'), '{sī crēderitis, videbitis}', T('perf. subj. + future')],
        [T('Jn 15:24'), '{sī ... nōn fecissent}', T('pluperf. subj.')],
        [T('Ezek 37:10'), '{sī ... multiplicābitur}', T('indicative + future')],
      ],
    },
  ],
};
