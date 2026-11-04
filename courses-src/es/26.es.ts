import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('Los pronombres posesivos'),
  subtitle: T('mi, tu, su — + «suyo» tónico'),
  section: T('Los pronombres'),
  body: C(`## Dos series: átonos y tónicos

**Átonos** (nunca llevan acento propio, van **antes** del sustantivo): {mi}, {tu}, {su}, {nuestro}, {vuestro}, {su}.

**Tónicos** (llevan acento propio, van **después** o solos): {mío}, {tuyo}, {suyo}, {nuestro}, {vuestro}, {suyo}.

Ej.: {mi casa} «mi casa» frente a {casa mía} «mi casa» (¡énfasis!) · {nuestra casa} «nuestra casa» · {Padre nuestro} «Padre nuestro».

## La concordancia de los tónicos

{mío} → {mía}, {míos}, {mías} · {tuyo} → {tuya}, {tuyos}, {tuyas} · {suyo} → {sua}, {suyos}, {suyas}. Los átonos son **invariables**: {mis}, {tus}, {sus}, {nuestros}, {vuestros}.

## El problema de {su}

El {su} átono es terriblemente ambiguo: puede ser «suyo», «suya», «de ellos», «de usted»… La RAE recomienda la forma **tónica** para deshacer la ambigüedad:

{El libro es suyo} «el libro es SUYO».
{El libro es de él} «el libro es de él» (popular, sin ambigüedad).

## Fórmulas del texto bíblico

{Santificado sea tu nombre} «santificado sea TU nombre» — el {tu} átono mantiene el paralelismo.
{Nuestro Padre} «nuestro Padre» — {nuestro} tónico, tradicional.
{Dios mío} «Dios mío» (Sal 22.1) — tónico en la exclamación.
{El pan nuestro de cada día} «el pan nuestro de cada día» (Mt 6.11).

{nuestro} tiene dos formas tónicas: {nuestro} y {nuestra}.`),
  vocab: [
    V('mi', 'mi', 'mi (¡átono!)'),
    V('tu', 'tu', 'tu (¡átono!)'),
    V('su', 'su', 'su (¡ambiguo!)'),
    V('nuestro', 'nuestro', 'nuestro'),
    V('mío', 'mío', 'mío (¡tónico!)'),
    V('Dios mío', 'Dios', 'Dios mío (Sal 22.1)'),
    V('suyo', 'suyo', 'suyo (¡claridad!)'),
    V('tu nombre', 'nombre', 'tu nombre (Mt 6.9)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo desambiguar «su libro»?'),
    options: [
      T('No hay manera'),
      T('Tónico: «el libro suyo» (SUYO) o «de él»'),
      T('Plural'),
      T('Artículo'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el posesivo tónico: «Dios ___» (¡Dios mío!)'),
      answer: 'mío',
      hint: T('Regla §1: la forma tónica va después del nombre.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué forma es ÁTONA (antes del sustantivo)?'),
      options: [T('{mío}'), T('{mi}'), T('{mía}'), T('{míos}')],
      answer: 1,
      hint: T('Solo la forma sin acento es átona.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la forma con su tipo'),
      pairs: [
        { a: T('{tu}'), b: T('átono') },
        { a: T('{tuyo}'), b: T('tónico') },
        { a: T('{nuestra}'), b: T('átono (femenino)') },
        { a: T('{nuestras}'), b: T('tónico (fem. pl.)') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Átono antes del nombre, invariable (mi casa, mis casas); tónico después, con acento (casa mía, casas mías).',
      ),
    },
    {
      n: '2',
      text: T('El tónico marca énfasis o posesión exclusiva: el libro es suyo (¡es SUYO!).'),
    },
    {
      n: '3',
      text: T(
        'Nunca se mezcla una forma átona con el nombre: mio casa está mal; mi casa está bien.',
      ),
    },
    {
      n: '4',
      text: T('Nuestro/vuestro tienen la misma forma átona y tónica; solo cambia el acento.'),
    },
  ],
  notes: [
    {
      label: T('Suyo evita la ambigüedad'),
      text: T(
        '{su} es ambiguo entre poseedor y poseído. {suyo} es unívoco — «suyo» — y por eso es el único que el texto bíblico prefiere cuando el referente es Dios.',
      ),
    },
  ],
  examples: [
    { text: '{Dios mío}', gloss: T('¡Dios mío! (Sal 22.1 — ¡tónico en la exclamación!).') },
    { text: '{nuestro pan}', gloss: T('Nuestro pan (Mt 6.11).') },
    { text: '{tu nombre}', gloss: T('Tu nombre (Mt 6.9 — átono, por paralelismo).') },
    {
      text: '{el libro es suyo}',
      gloss: T('El libro es SUYO (el tónico resuelve la ambigüedad de «su»).'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Posesivos'),
      head: [T('Persona'), T('Átono (antes)'), T('Tónico (después)')],
      rows: [
        ['1ª', '{mi}', '{mío}'],
        ['2ª', '{tu}', '{tuyo}'],
        ['3ª', '{su}', '{suyo}'],
        ['1ª pl.', '{nuestro}', '{nuestro}'],
        ['2ª pl.', '{vuestro}', '{vuestro}'],
        ['3ª pl.', '{su}', '{suyo}'],
      ],
    },
    {
      caption: T('Tabla 2 — Flexión de los tónicos'),
      head: [T('Tónico'), T('m. sg.'), T('f. sg.'), T('m. pl.'), T('f. pl.')],
      rows: [
        ['{mío}', '{mío}', '{mía}', '{míos}', '{mías}'],
        ['{tuyo}', '{tuyo}', '{tuya}', '{tuyos}', '{tuyas}'],
        ['{suyo}', '{suyo}', '{sua}', '{suyos}', '{suyas}'],
      ],
    },
  ],
};
