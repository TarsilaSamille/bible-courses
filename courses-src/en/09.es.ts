import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('Futuro y formas progresivas'),
  subtitle: T('will, shall, going to; be + -ing'),
  section: T('El verbo'),
  body: C(`## Tres sistemas de futuro

{Will} es el futuro normal del inglés moderno: {I will pray}. También expresa voluntad, predicción o decisión espontánea: {I will answer}; {He will arrive tomorrow}.

{Be going to} suele partir de un plan presente o de indicios actuales: {I am going to pray}; {The glass is going to fall}. Una predicción basada en indicios suele ser más fuerte que un futuro simple con will.

{Shall} es menos frecuente en el habla contemporánea cotidiana. Se mantiene en promesas formales, instrucciones, ofrecimientos y lenguaje bíblico: {I shall not want}. No conviertas automáticamente shall en un futuro gramatical separado: interpreta su fuerza en contexto.

## Formas progresivas

{Be} + verbo + {-ing} presenta un suceso en curso, temporal o en desarrollo: {I am reading}; {They were praying}. El inglés también emplea esta forma para citas: {I am meeting her at six}.

Los verbos de estado normalmente no van en progresiva: {know}, {believe}, {want}, {belong}, {seem}. Algunos cambian de significado: {be knowing} suele sonar poco natural; {be thinking} expresa una consideración actual. En la Biblia, {is come} puede ser una forma presente arcaica, no una progresiva moderna: identifica el registro antes de analizar -ing.`),
  vocab: [
    V('will pray', 'pray', 'voy a orar'),
    V('going to read', 'read', 'voy a leer'),
    V('is reading', 'read', 'está leyendo'),
    V('was coming', 'come', 'estaba viniendo'),
    V('believe', 'believe', 'creer'),
    V('know', 'know', 'saber'),
    V('seem', 'seem', 'parecer'),
    V('tomorrow', 'tomorrow', 'mañana'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T("¿Por qué 'I am believing' suena mal?"),
    options: [
      T('Believe es verbo de estado'),
      T('Falta un sujeto'),
      T('Es una forma futura'),
      T('Es correcto'),
    ],
    answer: 0,
  },
  exercises: [
    { kind: 'fill', prompt: T("Plan: 'I ___ going to pray.'"), answer: 'am' },
    {
      kind: 'match',
      prompt: T('Relaciona forma y uso.'),
      pairs: [
        { a: 'will', b: T('decisión/predicción') },
        { a: 'going to', b: T('plan/indicio') },
        { a: 'am -ing', b: T('acción en curso') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase describe indicios actuales?'),
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
        'No uses la progresiva automáticamente con verbos de estado. {believe} describe una posición estable.',
      ),
    },
    {
      n: '2',
      text: T(
        'La progresiva puede implicar algo temporal o en desarrollo: He is being patient se diferencia de He is patient.',
      ),
    },
    {
      n: '3',
      text: T(
        'Will no es automático en cláusulas con if/when. Compara: If I call, I will tell you; If you call, you tell me.',
      ),
    },
  ],
  notes: [
    {
      label: T('Registro:'),
      text: T('Shall e is come son fuertes señales de KJV/inglés arcaico en contexto bíblico.'),
    },
  ],
  examples: [
    { text: '{I shall not want}', gloss: T('no me faltará — promesa bíblica') },
    { text: '{They were praying}', gloss: T('estaban orando — acción en curso') },
    { text: '{I believe}', gloss: T('creo — estado, no progresiva') },
  ],
  tables: [
    {
      caption: T('Futuro y progresiva'),
      head: [T('Forma'), T('Uso'), T('Ejemplo')],
      rows: [
        ['{will + base}', T('voluntad/predicción'), '{I will pray}'],
        ['{be going to + base}', T('plan/indicio'), '{She is going to leave}'],
        ['{be + -ing}', T('en curso/cita'), '{I am reading}'],
      ],
    },
  ],
};
