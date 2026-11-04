import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('Relative pronouns'),
  subtitle: T('que, quien, cuyo, lo que, donde'),
  section: T('Pronouns'),
  body: C(`## {que} — the universal relative

{que} links any noun, person or thing, and **never** carries an accent: {el hombre que vino} "the man who came" · {la luz que brilla} · {los que creen} "those who believe".

It is the most common: over 90% of cases.

## {quien} / {quienes} — persons

Used for **people**, especially with a preposition or in emphasis: {el hombre con quien hablé} "the man I spoke with" · {¿Quién es?} · {quien cree, tiene vida}.

After a semicolon, {que} is preferred.

## {cuyo} — possession

{cuyo} means "whose" and **agrees with the thing possessed**, not with the possessor: {Dios, cuyo nombre es santo} "God, whose name is holy" · {el hombre cuya fe} · {los cuyos hijos}.

Note: {cuyo} is **invariable** (m., f. and pl. alike), because it agrees with the name of what is possessed.

## {lo que}, {lo cual}, {donde}, {cuando}

**{lo que}** = "what", with a verb: {haz lo que dice} · {lo que importa}.
**{lo cual}** = picking up a previous clause: {creyó, lo cual agradó a Dios}.
**{donde}** = "where": {¿Dónde moras?} (John 1:38).
**{cuando}** = "when": {cuando vio, lloró}.

The fine rule: {donde} and {cuando} replace preposition + {que}. After {de}, {en}, {a}, {para}, the noun is repeated: {el día en que}, {la ciudad de donde}.

Biblical: {Bienaventurados los que creen en él} (John 1:12) · {El que cree en mí} (John 11:26) — {el que} meaning "he who".`),
  vocab: [
    V('que', 'que', 'that/which (universal!)'),
    V('quien', 'quien', 'who (persons!)'),
    V('cuyo', 'cuyo', 'whose (possessive!)'),
    V('lo que', 'lo que', 'what'),
    V('donde', 'donde', 'where'),
    V('cuyo nombre', 'cuyo', 'whose name (Matt 6:9)'),
    V('el que', 'que', 'he who'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete: "el hombre ___ vino"'),
    answer: 'que',
    hint: T('The universal relative.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: "Dios, ___ nombre es santo" (whose name is holy)'),
      answer: 'cuyo',
      hint: T('Rule §3: the possessive relative.'),
    },
    {
      kind: 'choose',
      prompt: T('Which relative pronoun can NEVER carry an accent?'),
      options: [T('{qué}'), T('{quien}'), T('{que}'), T('{cuál}')],
      answer: 2,
      hint: T('Rule §1: relative que is always unaccented.'),
    },
    {
      kind: 'match',
      prompt: T('Match the relative to the example'),
      pairs: [
        { a: T('{que}'), b: T('{la luz que brilla}') },
        { a: T('{quien}'), b: T('{¿Quién es?}') },
        { a: T('{cuyo}'), b: T('{Dios, cuyo nombre}') },
        { a: T('{lo que}'), b: T('{haz lo que dice}') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Relative "que" never takes an accent: el hombre que vino. The interrogative is qué.',
      ),
    },
    {
      n: '2',
      text: T('Quien is for persons, especially with a preposition: el hombre con quien hablé.'),
    },
    {
      n: '3',
      text: T('Cuyo agrees with the thing possessed: el hombre cuya fe (cuya = the faith).'),
    },
    {
      n: '4',
      text: T(
        'Donde and cuando replace preposition + que: donde está, cuando vino. With a noun: la ciudad de donde.',
      ),
    },
  ],
  notes: [
    {
      label: T('The comma is what separates'),
      text: T(
        '{el hombre que vino} restricts — only that man came. {el hombre, que vino,} explains — and the fact is that he came, among others. The same word, the opposite result.',
      ),
    },
  ],
  examples: [
    {
      text: '{¿Dónde moras?}',
      gloss: T("Where do you dwell? (John 1:38 — the disciples' question)."),
    },
    {
      text: '{Dios, cuyo nombre es santo}',
      gloss: T('God, whose name is holy (cuyo agrees with nombre).'),
    },
    {
      text: '{El que cree en mí}',
      gloss: T('He who believes in me (John 11:26 — el que = he who).'),
    },
    { text: '{haz lo que dice}', gloss: T('Do what he says (lo que = noun).') },
  ],
  tables: [
    {
      caption: T('Table 1 — The relative pronouns'),
      head: [T('Pronoun'), T('Used for'), T('Numbers'), T('Example')],
      rows: [
        ['{que}', T('people and things'), 'sg./pl.', '{el hombre que vino}'],
        ['{quien}', T('people only'), 'sg./pl.', '{¿Quién es?}'],
        ['{cuyo}', T('possession'), 'invariável', '{cuyo nombre}'],
        ['{lo que}', T('idea / fact'), 'invariável', '{lo que dice}'],
        ['{lo cual}', T('resumption'), 'invariável', '{lo cual agradó}'],
        ['{donde}', T('place'), 'invariável', '{¿Dónde moras?}'],
        ['{cuando}', T('time'), 'invariável', '{cuando vino}'],
      ],
    },
    {
      caption: T('Table 2 — Cuyo agrees with the thing'),
      head: [T('Phrase'), T('Word that agrees'), T('Form')],
      rows: [
        ['{el hombre cuya fe}', '{fe}', '{cuya}'],
        ['{el hombre cuyo hijo}', '{hijo}', '{cuyo}'],
        ['{los hombres cuyas casas}', '{casas}', '{cuyas}'],
        ['{Dios, cuyo nombre es santo}', '{nombre}', '{cuyo}'],
      ],
    },
  ],
};
