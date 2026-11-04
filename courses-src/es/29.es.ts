import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('Los pronombres relativos'),
  subtitle: T('que, quien, cuyo, lo que, donde'),
  section: T('Los pronombres'),
  body: C(`## {que} — el relativo universal

{que} liga cualquier sustantivo, persona o cosa, y **nunca** lleva acento: {el hombre que vino} «el hombre que vino» · {la luz que brilla} «la luz que brilla» · {los que creen} «los que creen».

Es el más común: más del 90% de los casos.

## {quien} / {quienes} — personas

Se usa para **personas**, sobre todo con preposición o por énfasis: {el hombre con quien hablé} «el hombre con quien hablé» · {¿Quién es?} «¿quién es?» · {quien cree, tiene vida} «quien cree, tiene vida».

Tras punto y coma se prefiere {que}: {Los que hablaron, que sabían}.

## {cuyo} — posesión

{cuyo} significa «de quién» y **concorda con la cosa poseída**, no con el poseedor: {Dios, cuyo nombre es santo} «Dios, cuyo nombre es santo» · {el hombre cuya fe} «el hombre cuya fe» · {los sus hijos} «los sus hijos».

{Fíjate}: {cuyo} es **invariable** (masc., fem. y pl.), porque concuerda con el nombre de lo poseído: {cuyos}, {cuyas}, {cuyas}.

## {lo que}, {lo cual}, {donde}, {cuando}

**{lo que}** = «lo que», con verbo: {haz lo que dice} «haz lo que dice» · {lo que importa} «lo que importa».
**{lo cual}** = retomando el período anterior: {creyó, lo cual agradó a Dios} «creyó, lo cual agradó a Dios».
**{donde}** = «donde»: {¿Dónde moras?} «¿dónde moras?» (Jn 1.38).
**{cuando}** = «cuando»: {cuando vio, lloró} «cuando vio, lloró».

La regla fina: {donde} y {cuando} sustituyen preposición + {que}. Después de {de}, {en}, {a}, {para} se repite el sustantivo: {el día en que}, {la ciudad de donde} «de donde».

Bíblico: {Bienaventurados los que creen en él} «bienaventurados los que creen en él» (Jn 1.12) · {El que cree en mí} «el que cree en mí» (Jn 11.26) — {el que} en un período equivale a «aquel que».`),
  vocab: [
    V('que', 'que', 'que (¡universal!)'),
    V('quien', 'quien', 'quien (¡personas!)'),
    V('cuyo', 'cuyo', 'cuyo (¡posesivo!)'),
    V('lo que', 'lo que', 'lo que'),
    V('donde', 'donde', 'donde'),
    V('cuyo nombre', 'cuyo', 'cuyo nombre (Mt 6.9)'),
    V('el que', 'que', 'el que (¡aquel que!)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Completa: «el hombre ___ vino»'),
    answer: 'que',
    hint: T('El relativo universal.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: «Dios, ___ nombre es santo»'),
      answer: 'cuyo',
      hint: T('Regla §3: el relativo de posesión.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué pronombre relativo NUNCA puede llevar acento?'),
      options: [T('{qué}'), T('{quien}'), T('{que}'), T('{cuál}')],
      answer: 2,
      hint: T('Regla §1: el «que» relativo va siempre sin acento.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el relativo con el ejemplo'),
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
        'El «que» relativo nunca lleva acento: el hombre que vino. El interrogativo es «qué».',
      ),
    },
    {
      n: '2',
      text: T('«Quien» es para personas, sobre todo con preposición: el hombre con quien hablé.'),
    },
    { n: '3', text: T('«Cuyo» concuerda con la cosa poseída: el hombre cuya fe (cuya = la fe).') },
    {
      n: '4',
      text: T(
        'Donde y cuando sustituyen a preposición + que: donde está, cuando vino. Con sustantivo: la ciudad de donde.',
      ),
    },
  ],
  notes: [
    {
      label: T('La coma es lo que separa'),
      text: T(
        '{el hombre que vino} restringe — solo aquel hombre vino. {el hombre, que vino,} explica — y el hecho es que vino, entre otros. La misma palabra, resultado opuesto.',
      ),
    },
  ],
  examples: [
    {
      text: '{¿Dónde moras?}',
      gloss: T('¿Dónde moras? (Jn 1.38 — la pregunta de los discípulos).'),
    },
    {
      text: '{Dios, cuyo nombre es santo}',
      gloss: T('Dios, cuyo nombre es santo (cuyo concuerda con «nombre»).'),
    },
    { text: '{El que cree en mí}', gloss: T('El que cree en mí (Jn 11.26 — el que = aquel que).') },
    { text: '{haz lo que dice}', gloss: T('Haz lo que dice (lo que = sustantivo).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Los relativos'),
      head: [T('Pronombre'), T('Se usa con'), T('Números'), T('Ejemplo')],
      rows: [
        ['{que}', T('personas y cosas'), 'sg./pl.', '{el hombre que vino}'],
        ['{quien}', T('solo personas'), 'sg./pl.', '{¿Quién es?}'],
        ['{cuyo}', T('posesión'), 'invariável', '{cuyo nombre}'],
        ['{lo que}', T('idea / hecho'), 'invariável', '{lo que dice}'],
        ['{lo cual}', T('retomada'), 'invariável', '{lo cual agradó}'],
        ['{donde}', T('lugar'), 'invariável', '{¿Dónde moras?}'],
        ['{cuando}', T('tiempo'), 'invariável', '{cuando vino}'],
      ],
    },
    {
      caption: T('Tabla 2 — Cuyo concuerda con la cosa'),
      head: [T('Frase'), T('Palabra que concuerda'), T('Forma')],
      rows: [
        ['{el hombre cuya fe}', '{fe}', '{cuya}'],
        ['{el hombre cuyo hijo}', '{hijo}', '{cuyo}'],
        ['{los hombres cuyas casas}', '{casas}', '{cuyas}'],
        ['{Dios, cuyo nombre es santo}', '{nombre}', '{cuyo}'],
      ],
    },
  ],
};
