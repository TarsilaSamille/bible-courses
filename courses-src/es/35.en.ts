import { C, T, V } from '../shared.mts';

export default {
  id: 35,
  title: T('Subordinate clauses and indirect speech'),
  subtitle: T('que, cuando, aunque — and a reading of John 1:1-5'),
  section: T('Syntax'),
  body: C(`## What a subordinate clause does

A subordinate clause **depends** on a main clause and cannot stand alone: {Creo que Dios existe} — without {creo}, the rest is a fragment. In Spanish, **word order is not inverted** when reporting, unlike English.

Main classes:

• **Substantive** (noun function): {Creo que...} · {Sé que...} · {Espero que...} · {Que viene} · {Lo que sea}.
• **Adjective** (adjective function): {el hombre que vino} · {cuyo nombre} · {donde está}.
• **Adverbial** (adverb function): {porque} · {cuando} · {aunque} · {si} · {para que} · {mientras} · {como}.

## The subjunctive in adverbials

• {porque + indicative} = real cause: {Vino porque me llamó}.
• {para que + subjunctive} = purpose: {Estudio para que apruebe}.
• {cuando} with a certain future → indicative; with an uncertain one → **subjunctive**: {Cuando venga} vs {Cuando viene el tren}.
• {aunque} **always** takes the subjunctive: {aunque sea} · {aunque llegue tarde}.
• {si} conditional: {si viene, avísame} (subjunctive) — {si viene todos los días} (indicative, habit).
• {mientras} "while" — John 20:29: {Bienaventurados los que no han visto y han creído}; and {aunque no le hayan visto} "though they have not seen" (subjunctive + perfect!).

## Indirect discourse: the sequence of tenses

Reporting makes the verb **step back one time** from the direct:

• {Dice que viene} "he says he comes" → {Dijo que vendría} "he said he would come" (present → conditional).
• {Dice que vino} → {Dijo que había venido} "he said he had come" (preterite → pluperfect).
• {Preguntó dónde moraba} "he asked where he lived" (indirect questions keep the direct tense and take no que).

Commands: {Mandó que salieran} "he ordered them to leave" (subjunctive!) · {Ordenó que vinieran}.

## Final reading: John 1:1-5 (Reina-Valera 1960)

1. {En el principio era el Verbo} — **main clause**, {ser} in the imperfect, postposed subject.
2. {Y el Verbo era con Dios} — {y} links; {con Dios} brings the personal {a} (ch. 22).
3. {Y el Verbo era Dios} — the shortest: subject + {era} + predicate.
4. {En él estaba la vida} — {en} + {estar} in the imperfect for created life: {estaba} = "there was".
5. {Y la vida era la luz de los hombres} — {era} again: life **was** light (identity, not process).
6. {Y la luz resplandece en las tiniegas} — shift to the **present**: the light shines **now**.
7. {Y las tiniegas no la alcanzó} — {no} + {alcanzaron} "did not overtake it".
8. {En él estaba la vida} repeats with {en} + {estar} — the Word is the **agent** of everything.

In five verses the Gospel uses {era} (imperfect of state), {estaba} (imperfect of position), {resplandece} (present) and {alcanzaron} (preterite): tense carries theology.`),
  vocab: [
    V('aunque sea', 'ser', 'even if it be (subj.!)'),
    V('cuando venga', 'venir', 'when he comes (subj.!)'),
    V('dijo que', 'decir', 'he said that'),
    V('vendría', 'venir', 'would come (future → conditional!)'),
    V('había venido', 'venir', 'had come (preterite → pluperfect)'),
    V('preguntó', 'preguntar', 'he asked'),
    V('mandó que salieran', 'mandar', 'he ordered them to leave'),
    V('resplandece', 'resplandecer', 'shines (present! John 1:5)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"Dice que vendrá" in the past?'),
    options: [
      T('Dijo que vendrá'),
      T('Dijo que vendría (future → conditional!)'),
      T('Dijo que viene'),
      T('Dijo que venga'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Convert to indirect: "Dice que viene" → "Dijo que ___"'),
      answer: 'vendría',
      hint: T('Rule §4: present → conditional in indirect speech.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence uses the subjunctive correctly?'),
      options: [
        T('Aunque es joven, trabaja'),
        T('Aunque sea joven, trabaja'),
        T('Cuando es joven, trabaja'),
        T('Si es joven, trabaja'),
      ],
      answer: 1,
      hint: T('Rule §2: aunque always requires the subjunctive.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete the reported command: "Mandó que ___" (that they leave)'),
      answer: 'salieran',
      hint: T('Rule §5: the reported command takes the imperfect subjunctive.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('The subordinate clause never stands alone: it always depends on a main clause.'),
    },
    {
      n: '2',
      text: T(
        'Aunque, cuando (uncertain future), para que, si (hypothesis) and antes de que take the subjunctive.',
      ),
    },
    {
      n: '3',
      text: T(
        'In indirect speech the verb steps back: present → conditional, preterite → pluperfect.',
      ),
    },
    {
      n: '4',
      text: T('Indirect questions take no que and keep the direct tense: Preguntó dónde vivía.'),
    },
    { n: '5', text: T('Reported commands use the imperfect subjunctive: mandó que salieran.') },
  ],
  notes: [
    {
      label: T('How to read the biblical text:'),
      text: T(
        'Always read aloud, verse by verse, and identify the verb first: if it is {es}, {era}, {está} or {estaban}, you have state; if it is {hizo}, {dijo}, {vio}, you have action. Then look for the subjunctive trigger ({porque}, {aunque}, {para que}, {cuando}). A subordinate without a trigger is adjectival ({el Verbo que era Dios}).',
      ),
    },
    {
      label: T('European vs American:'),
      text: T(
        'The syntax is identical in both worlds. The differences are lexical ({vosotros} vs {ustedes}, {ordenador} vs {computadora}) and phonetic ({z} = th in Spain, {ll} = jota). The Castilian biblical text (Reina-Valera 1960) follows the Spanish norm, which is what this course teaches.',
      ),
    },
  ],
  examples: [
    {
      text: '{Aunque sea difícil, lo haré}',
      gloss: T('Even if it be hard, I will do it (aunque + subjunctive!).'),
    },
    {
      text: '{Dijo que vendría}',
      gloss: T('He said he would come (present → conditional when indirect).'),
    },
    {
      text: '{Mandó que salieran}',
      gloss: T('He ordered them to leave (imperative → imperfect subjunctive).'),
    },
    {
      text: '{En el principio era el Verbo}',
      gloss: T('In the beginning was the Word (John 1:1 — main clause + tense of state).'),
    },
    {
      text: '{Y la luz resplandece}',
      gloss: T('And the light shines (John 1:5 — present: the light shines now).'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — The three classes of subordinate clauses'),
      head: [T('Class'), T('Conjunction'), T('Example'), T('Typical mood')],
      rows: [
        [T('substantive'), '{que}, {si}, {cómo}', '{Creo que es verdad}', T('ind. or subj.')],
        [T('adjective'), '{que}, {quien}, {cuyo}', '{el libro que leo}', T('indicative')],
        [
          T('temporal'),
          '{cuando}, {mientras}',
          '{Cuando venga, te veré}',
          T('subjunctive (uncertain future)'),
        ],
        [T('concessive'), '{aunque}', '{Aunque sea difícil}', T('always subjunctive')],
        [T('causal'), '{porque, como}', '{Porque lo vi, supe}', T('indicative')],
        [T('final'), '{para que, a fin de que}', '{Estudio para que apruebe}', T('subjunctive')],
        [T('conditional'), '{si}', '{Si viene, avísame}', T('subjunctive (hypothesis)')],
      ],
    },
    {
      caption: T('Table 2 — Sequence of tenses in indirect speech'),
      head: [T('Direct'), T('Indirect'), T('Reference')],
      rows: [
        ['{Dice que viene}', '{Dijo que vendría}', 'pres. → cond.'],
        ['{Dice que ha venido}', '{Dijo que había venido}', 'perf. → pluscuamperf.'],
        ['{Dice que vino}', '{Dijo que había venido}', 'pret. → pluscuamperf.'],
        ['{PREGUNTA dónde vive}', '{Preguntó dónde vivía}', 'pres. → imperf. (sem «que»!)'],
        ['{¿Vienes?} → Dice que sí', '{Dijo que sí}', '—'],
        ['{¡Salgan de aquí!}', '{Mandó que salieran}', 'imperativo → imp. subj.'],
      ],
    },
    {
      caption: T('Table 3 — Capstone: John 1:1-5 analyzed'),
      head: [T('Passage'), T('Structure'), T('Tense')],
      rows: [
        ['{En el principio era el Verbo}', T('adjunct + verb + subject'), '{era} (imperf.)'],
        ['{Y el Verbo era con Dios}', T('linked by y'), '{era} (imperf.)'],
        ['{Y el Verbo era Dios}', T('subject + ser + predicate'), '{era} (imperf.)'],
        ['{En él estaba la vida}', T('en + pronoun + estar'), '{estaba} (imperf.)'],
        ['{Y la luz resplandece}', T('intransitive verb'), '{resplandece} (pres.)'],
        [
          '{las tiniegas no la alcanzó}',
          T('postposed subject + no + preterite'),
          '{alcanzaron} (pret.)',
        ],
      ],
    },
  ],
};
