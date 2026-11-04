import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  title: T('Los pronombres interrogativos'),
  subtitle: T('¿qué? ¿quién? ¿cuál? — ¡con acento!'),
  section: T('Los pronombres'),
  body: C(`## El acento es la firma

Todo interrogativo español es **tónico** y por eso **lleva acento siempre**, al contrario que el relativo: {¿qué?} «¿qué?» frente a {que} «que» · {¿quién?} «¿quién?» frente a {quien} «quien» · {¿cuál?} «¿cuál?» frente a {cual} «cual» · {¿cuándo?}, {¿dónde?}, {¿cómo?}, {¿cuánto?}.

Lo mismo vale en las preguntas **indirectas**: {No sé qué quiere} «no sé qué quiere» · {Dime dónde está} «dime dónde está».

## {por qué} frente a {porque}

La pregunta va **separada** y acentuada: {¿Por qué?} «¿por qué?»
La respuesta va **junto** y sin acento: {Porque} «porque» · {porque Dios lo hizo así} «porque Dios lo hizo así».

Cuando {porque} significa «para que» con subjuntivo, también va junto: {Lo hizo porque viniera} «lo hizo porque viniera».

## Qué interrogativo para qué

{¿Quién?} personas: {¿Quién es?} «¿quién es?» (Mt 16.15) · {¿Quién dices que soy?} «¿quién dices que soy?»
{¿Qué?} cosas, ideas, identidad: {¿Qué es esto?} «¿qué es esto?» · {¿Qué es la verdad?} «¿qué es la verdad?» (Jn 18.38).
{¿Cuál?} elección: {¿Cuál quieres?} «¿cuál quieres?» · {¿Cuál de los dos?} · {¿Cuál es tu nombre?} «¿cuál es tu nombre?».

**{¿Cuál?} + {ser} = identidad** (el nombre), **{¿Qué?} + {ser} = definición** (la naturaleza): {¿Cuál es tu nombre?} frente a {¿Qué es Dios?}

## El marco ¿…?

La pregunta abre con {¿} y cierra con {?}, y el sujeto se queda **después** del verbo (sin inversión como el inglés):

{¿Dónde moras?} «¿dónde moras?» (Jn 1.38) · {¿Por qué lloras?} «¿por qué lloras?» (Jn 20.13) · {¿Qué buscáis?} «¿qué buscáis?» (Jn 1.38) · {¿Puede Dios perdónar?} «¿puede Dios perdónar?»

La misma palabra en sentido afirmativo pierde las señales: {Dios es amor} «Dios es amor».

## Europeo × americano

El marco es idéntico. Cambia el vocabulario: España usa {vosotros} en las preguntas de plural; América, {ustedes}. En la oralidad americana es muy común la pregunta de confirmación {¿no?}, {¿verdad?} «¿no?», igual que en portugués.`),
  vocab: [
    V('qué', 'qué', 'qué (¡acentuado!)'),
    V('quién', 'quién', 'quién (¡acentuado!)'),
    V('cuál', 'cuál', 'cuál'),
    V('por qué', 'por qué', 'por qué (¡separado!)'),
    V('porque', 'porque', 'porque (¡respuesta!)'),
    V('dónde', 'dónde', 'dónde'),
    V('cuánto', 'cuánto', 'cuánto'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿«¿por qué?» frente a «porque»?'),
    options: [
      T('Iguales'),
      T('Pregunta (¡separado!) frente a respuesta (¡junto!)'),
      T('Lo contrario'),
      T('Error'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: «¿___ es la verdad?» (¿qué es la verdad? Jn 18.38)'),
      answer: 'Qué',
      hint: T('Definición de naturaleza = «qué».'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo se pregunta el NOMBRE de alguien?'),
      options: [
        T('¿Qué es tu nombre?'),
        T('¿Cuál es tu nombre?'),
        T('¿Quién es tu nombre?'),
        T('¿Dónde es tu nombre?'),
      ],
      answer: 1,
      hint: T('Regla §3: cuál + ser = identidad.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el interrogativo con su uso'),
      pairs: [
        { a: T('{¿Quién?}'), b: T('personas') },
        { a: T('{¿Qué?}'), b: T('cosas e identidad') },
        { a: T('{¿Cuál?}'), b: T('elección') },
        { a: T('{¿Por qué?}'), b: T('causa (pregunta, separado)') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El interrogativo lleva acento siempre; el relativo nunca: ¿qué? frente a que, ¿quién? frente a quien.',
      ),
    },
    { n: '2', text: T('¿Por qué? es la pregunta, separado; porque es la respuesta, junto.') },
    { n: '3', text: T('Quién = persona; qué = cosa o definición; cuál = elección o identidad.') },
    {
      n: '4',
      text: T('La pregunta abre con «¿» y cierra con «?»; el sujeto queda después del verbo.'),
    },
  ],
  notes: [
    {
      label: T('El tónico en la pregunta'),
      text: T(
        'La forma acentuada {qué}, {quién}, {cuál} es la tónica — pronombre o sustantivo. En {¿Qué es esto?}, {qué} es pronombre: «qué». En {¿Qué libro es?} es sustantivo.',
      ),
    },
  ],
  examples: [
    { text: '¿Dónde moras?}', gloss: T('¿Dónde moras? (Jn 1.38)') },
    { text: '¿Qué es la verdad?}', gloss: T('¿Qué es la verdad? (Jn 18.38 — Pilato)') },
    { text: '{¿Quién dices que soy?}', gloss: T('¿Quién dices que soy? (Mt 16.15)') },
    { text: '{porque Dios lo hizo así}', gloss: T('Porque Dios lo hizo así (¡respuesta, junto!)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Interrogativos'),
      head: [T('Palabra'), T('Traducción'), T('Se usa para'), T('Ejemplo')],
      rows: [
        ['{qué}', T('qué'), T('identidad, cosa'), '{¿Qué es esto?}'],
        ['{quién}', T('quién'), T('persona'), '{¿Quién es?}'],
        ['{cuál}', T('cuál'), T('elección'), '{¿Cuál quieres?}'],
        ['{cuándo}', T('cuándo'), T('tiempo'), '{¿Cuándo vendrás?}'],
        ['{dónde}', T('dónde'), T('lugar'), '{¿Dónde moras?}'],
        ['{cómo}', T('cómo'), T('modo'), '{¿Cómo lo harás?}'],
        ['{por qué}', T('por qué'), T('causa'), '{¿Por qué lloras?}'],
        ['{cuánto}', T('cuánto'), T('cantidad'), '{¿Cuánto tiempo?}'],
      ],
    },
    {
      caption: T('Tabla 2 — qué × cuál'),
      head: [T('Pregunta'), T('Respuesta'), T('Tipo')],
      rows: [
        ['{¿Qué es Dios?}', T('Dios es espíritu'), T('definición (naturaleza)')],
        ['{¿Cuál es tu nombre?}', T('Mi nombre es Juan'), T('identidad')],
        ['{¿Qué libro lees?}', T('El Apocalipsis'), T('cosa concreta')],
        ['{¿Cuál libro lees?}', T('¿Juan o Romanos?'), T('elección')],
      ],
    },
  ],
};
