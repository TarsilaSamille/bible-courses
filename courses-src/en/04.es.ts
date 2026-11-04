import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('Pasado simple'),
  subtitle: T('spoke, said, was — narración e irregulares'),
  section: T('El verbo'),
  body: C(`## Formas regulares e irregulares

El pasado simple sitúa una acción en un punto del pasado. La forma regular añade -ed; tras -e basta -d: {love/loved}. Una consonante final normalmente se duplica: {stop/stopped}; consonante + y pasa a -ied: {carry/carried}.

Aprende los irregulares como unidades: {speak/spoke}, {say/said}, {see/saw}, {come/came}, {give/gave}, {take/took}, {write/wrote}. El participio puede coincidir o no con el pasado: {speak/spoken}, pero {say/said}.

## {BE}, {DID} y {WAS/WERE}

El BE pasado es {was} para I/he/she/it y {were} para you/we/they. En preguntas y negaciones, {did} carga el tiempo: {Did he speak?}, {He did not speak}; el verbo léxico vuelve a su forma base.

Génesis 1:3 conserva el contraste: {God said}, {Let there be}, {and there was light}. Say y be son irregulares; let puede expresar petición o encargo, y el contexto bíblico favorece “haya luz”.

## Discurso indirecto

El discurso citado suele conservar su tiempo original: {He said, “I am the light.”} Tras un verbo de habla, sin embargo, el inglés suele hacer retroceso temporal: {He said that he was the light}. Ese desplazamiento es normal, no una mala traducción.`),
  vocab: [
    V('spoke', 'speak', 'habló'),
    V('said', 'say', 'dijo'),
    V('was', 'be', 'era/fue'),
    V('were', 'be', 'eran/fueron'),
    V('saw', 'see', 'vio'),
    V('came', 'come', 'vino'),
    V('gave', 'give', 'dio'),
    V('prayed', 'pray', 'oró'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es el pasado de say?'),
    options: [T('sayed'), T('said'), T('says'), T('sayd')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: “He ___ (not speak) yesterday.”'),
      answer: 'did not speak',
    },
    {
      kind: 'match',
      prompt: T('Relaciona base y pasado.'),
      pairs: [
        { a: 'write', b: 'wrote' },
        { a: 'take', b: 'took' },
        { a: 'see', b: 'saw' },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('En “When I arrived, they ___ with God”, ¿qué forma es más natural?'),
      options: [T('was'), T('were'), T('are'), T('been')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Con did, el verbo principal no lleva -ed: He did not go, no did not went.'),
    },
    {
      n: '2',
      text: T(
        'Was corresponde a I/he/she/it; were a you/we/they. Las contracciones son comunes: I was.',
      ),
    },
    {
      n: '3',
      text: T(
        'El pasado puede ser remoto respecto del presente sin implicar una historia terminada: yesterday marca tiempo; el tiempo verbal por sí solo no.',
      ),
    },
  ],
  notes: [
    {
      label: T('KJV:'),
      text: T(
        'La KJV puede omitir was en presente, pero conserva was/were en la narración pasada.',
      ),
    },
  ],
  examples: [
    { text: '{God said, Let there be light}', gloss: T('Dios dijo: Sea luz') },
    { text: '{He did not speak}', gloss: T('Él no habló') },
    { text: '{They were with God}', gloss: T('Ellos estaban con Dios') },
  ],
  tables: [
    {
      caption: T('Formas irregulares esenciales'),
      head: [T('Base'), T('Pasado'), T('Participio')],
      rows: [
        ['speak', 'spoke', 'spoken'],
        ['say', 'said', 'said'],
        ['see', 'saw', 'seen'],
        ['come', 'came', 'come'],
        ['be', 'was/were', 'been'],
      ],
    },
  ],
};
