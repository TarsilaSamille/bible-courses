import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('Lectura: Padrenuestro y Salmo 23'),
  subtitle: T('Our Father which art in heaven — lectura de un registro arcaico'),
  section: T('Lecturas'),
  body: C(`## La KJV como ventana histórica

En Mateo 6:9 KJV: {Our Father which art in heaven, hallowed be thy name}. {Art} es un {are} arcaico; {thy} es un posesivo de segunda persona; {hallowed be} es una fórmula pasiva. No son errores del inglés contemporáneo. La forma actual es {Our Father who is in heaven, may your name be holy}.

{thou/thee/thy/thine} se dirigen formalmente a una sola persona; {you/your} puede dirigirse a una o a varias. El antiguo sistema de segunda persona singular hace visible la concordancia: {thou art}, {thou hast}, {thou shalt}. Formas como {art} y {hallowed} son marcadores de época.

## Leer la oración por su estructura

La oración pasa de la invocación a las peticiones y solicitudes. {Give us this day our daily bread} coloca el imperativo ante el objeto indirecto. {Forgive us our debts, as we forgive our debtors} usa as para vincular el perdón humano y el divino.

El Salmo 23:1 tiene un registro poético distinto: {The LORD is my shepherd; I shall not want}. La metáfora no afirma que toda circunstancia sea indolora; afirma que el pastor suple lo necesario. {I shall not want} orienta una promesa futura, no dice que el salmista lo posea todo.`),
  vocab: [
    V('art', 'be', 'eres (arcaico)'),
    V('thou', 'thou', 'tú (arcaico)'),
    V('thee', 'thee', 'te (arcaico)'),
    V('thy', 'thy', 'tu'),
    V('hallowed', 'hallow', 'santificado'),
    V('bread', 'bread', 'pan'),
    V('shepherd', 'shepherd', 'pastor'),
    V('shall not want', 'want', 'no faltará'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué es art en “which art”?'),
    options: [
      T('el sustantivo arte'),
      T('2.ª persona arcaica de be'),
      T('artículo'),
      T('pasado de eat'),
    ],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Moderniza: “Our Father which ___ in heaven”.'), answer: 'is' },
    {
      kind: 'match',
      prompt: T('Relaciona expresión y glosa.'),
      pairs: [
        { a: 'thou', b: T('tú') },
        { a: 'thy', b: T('tu') },
        { a: 'hallowed', b: T('santificado') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('En I shall not want, ¿qué aporta shall?'),
      options: [
        T('Una obligación presente'),
        T('Certeza/promesa futura'),
        T('Pasado remoto'),
        T('Condicional tercera'),
      ],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Lee toda forma arcaica como KJV o lenguaje litúrgico, salvo que el contexto indique una cita moderna.',
      ),
    },
    {
      n: '2',
      text: T(
        'El shall de primera persona en una promesa bíblica expresa normalmente certeza o garantía divina, no una predicción cotidiana.',
      ),
    },
    {
      n: '3',
      text: T(
        'La metáfora del pastor pertenece al poema; no la apliques mecánicamente a toda experiencia religiosa.',
      ),
    },
  ],
  notes: [
    {
      label: T('Traducción:'),
      text: T(
        'Una traducción bíblica puede actualizar la sintaxis y conservar la imagen. Indica siempre cuándo se ha modernizado una forma.',
      ),
    },
  ],
  examples: [
    { text: '{thou art}', gloss: T('tú eres — arcaico') },
    { text: '{hallowed be thy name}', gloss: T('santificado sea tu nombre — pasiva litúrgica') },
    { text: '{daily bread}', gloss: T('pan de cada día') },
    { text: '{I shall not want}', gloss: T('no me faltará — promesa') },
  ],
  tables: [
    {
      caption: T('Segunda persona: KJV y uso actual'),
      head: [T('Función'), T('KJV'), T('Actual')],
      rows: [
        [T('tú (singular)'), 'thou', 'you'],
        [T('tu'), 'thy/thine', 'your'],
        [T('eres'), 'art', 'are'],
        [T('vosotros/plural'), 'ye', 'you'],
      ],
    },
  ],
};
