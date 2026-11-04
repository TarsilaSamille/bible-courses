import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('Los adverbios de tiempo'),
  subtitle: T('hoy, mañana, siempre — la línea del tiempo'),
  section: T('Adjetivos y adverbios'),
  body: C(`## Los tres tiempos básicos

{hoy} «hoy» · {ayer} «ayer» · {mañana} «mañana». Añade {por la} para marcar la parte del día: {hoy por la mañana} «hoy por la mañana» · {ayer por la tarde} «ayer por la tarde» · {mañana por la noche} «mañana por la noche».

La secuencia {mañana por la mañana} es correcta y tradicional: {mañana} es adverbio y {por la mañana} es una locución.

## Otros puntos de la línea

{ahora} «ahora» · {luego} «luego, después» · {entonces} «entonces» · {pronto} «pronto, en breve» · {ya} «ya» · {todavía} «todavía» · {mientras} «mientras» · {durante} «durante».

## Frecuencia

La serie es: {siempre} «siempre» · {casi siempre} «casi siempre» · {casi nunca} «casi nunca» · {nunca} «nunca» · {jamás} «jamás» (más enfático) · {a veces} «a veces» · {a menudo} «a menudo» · {de vez en cuando} «de vez en cuando».

## Tiempo como sustantivo

{hoy} y {mañana} funcionan también como sustantivos de valor temporal: {el hoy} «el presente» · {el mañana} «el futuro» · {el ayer} «el pasado». En {hoy} la {h} es muda.

Bíblico: {El mundo de hoy} «el mundo de hoy».

Ej.: {Velad, porque no sabéis el día} «velad, porque no sabéis el día» (Mt 24.42 — {porque} con presente atemporal, igual que en portugués).

## Europa × América

Los adverbios de tiempo son los mismos en ambos mundos. En América se usa más {al rato} «en un rato» y {ahorita} «ahora mismo», propios del español americano; España dice {ahora mismo} y {enseguida} «inmediatamente».`),
  vocab: [
    V('hoy', 'hoy', 'hoy'),
    V('mañana', 'mañana', 'mañana'),
    V('ayer', 'ayer', 'ayer'),
    V('siempre', 'siempre', 'siempre'),
    V('a veces', 'vez', 'a veces'),
    V('el mañana', 'mañana', 'el mañana (¡sustantivo!)'),
    V('el día', 'día', 'el día (Mt 24.42)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿«mañana por la mañana»?'),
    options: [
      T('Error de repetición'),
      T('Correcto: «mañana por la mañana» (¡adverbio + locución!)'),
      T('Solo poético'),
      T('Plural'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: «___ por la mañana» (hoy por la mañana)'),
      answer: 'hoy',
      hint: T('Regla §1: el adverbio va primero.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué oración usa el adverbio como SUSTANTIVO?'),
      options: [
        T('Mañana es frío'),
        T('El mañana será mejor'),
        T('Ayer fui al mercado'),
        T('Hoy no trabajo'),
      ],
      answer: 1,
      hint: T('Regla §3: el sustantivo necesita artículo.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el adverbio con su valor'),
      pairs: [
        { a: T('{siempre}'), b: T('siempre') },
        { a: T('{a veces}'), b: T('a veces') },
        { a: T('{casi nunca}'), b: T('casi nunca') },
        { a: T('{todavía}'), b: T('todavía') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    { n: '1', text: T('hoy/ayer/mañana + por la (mañana/tarde/noche) marca la parte del día.') },
    { n: '2', text: T('Nunca no puede iniciar la oración; usa No + verbo: No viene nunca.') },
    { n: '3', text: T('Con artículo, el adverbio se sustantiva: el hoy, el mañana, el ayer.') },
  ],
  notes: [
    {
      label: T('El presente habitual'),
      text: T(
        'El adverbio de tiempo marca cuándo, no el tiempo gramatical. {Siempre} con presente da hábito; con pretérito solo sitúa el pasado. El tiempo viene del verbo; el adverbio solo lo coloca.',
      ),
    },
  ],
  examples: [
    { text: '{hoy}', gloss: T('Hoy.') },
    { text: '{mañana por la mañana}', gloss: T('Mañana por la mañana.') },
    { text: '{el mañana}', gloss: T('El futuro (¡adverbio sustantivado!).') },
    { text: '{el día}', gloss: T('El día (Mt 24.42).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Adverbios de tiempo'),
      head: [T('Adverbio'), T('Valor'), T('Ejemplo')],
      rows: [
        ['{hoy}', T('hoy'), '{hoy es lunes}'],
        ['{ayer}', T('ayer'), '{ayer fue fiesta}'],
        ['{mañana}', T('mañana'), '{mañana vendré}'],
        ['{ahora}', T('ahora'), '{ahora no puedo}'],
        ['{luego}', T('luego'), '{luego te lo digo}'],
        ['{entonces}', T('entonces'), '{entonces llegó}'],
        ['{pronto}', T('pronto'), '{pronto vuelvo}'],
      ],
    },
    {
      caption: T('Tabla 2 — Escala de frecuencia'),
      head: [T('Grado'), T('Forma'), T('Traducción')],
      rows: [
        ['100%', '{siempre}', T('siempre')],
        ['quase 100%', '{casi siempre}', T('casi siempre')],
        ['às vezes', '{a veces}, {a menudo}', T('a veces, a menudo')],
        ['quase nunca', '{casi nunca}', T('casi nunca')],
        ['0%', '{nunca}, {jamás}', T('nunca, jamás')],
      ],
    },
  ],
};
