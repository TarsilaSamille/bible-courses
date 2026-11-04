import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('Padrenuestro y aspecto verbal'),
  subtitle: T('да будет — делать/сделать'),
  section: T('Lectura'),
  body: C(
    'Отче es un vocativo heredado que se conserva en la oración. сущий es un participio presente activo con el valor gramatical «que es», y да en да святится es una partícula optativa que aquí se traduce por «sea». да будет significa igualmente «sea». Los imperativos дай y прости pueden dirigirse a ты o a вы. En дай нам, нам está en dativo porque el verbo tiene un destinatario. El aspecto ruso está gramaticalizado, pero no constituye una simple oposición de tiempos. Las formas imperfectivas делать, читать, говорить presentan proceso, repetición o resultado incompleto; las perfectivas сделать, прочитать, сказать presentan eventos delimitados, cumplidos o tomados en conjunto. Aspecto no equivale siempre a puntualidad: Я писал письмо, «estaba escribiendo una carta»; Я написал письмо, «he escrito la carta».',
  ),
  vocab: [
    V('сущий', 'сущий', 'que es'),
    V('да будет', 'быть', 'sea'),
    V('дай', 'дать', 'da'),
    V('сделать', 'сделать', 'hacer (perfectivo)'),
    V('прочитаю', 'прочитать', 'leeré entero'),
    V('оставил', 'оставить', 'dejó'),
    V('делать', 'делать', 'hacer (imperfectivo)'),
    V('прости', 'простить', 'perdona'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué par es imperfectivo/perfectivo?'),
    options: [T('делать/сделать'), T('сказать/говорить'), T('простить/прощать')],
    answer: 0,
  },
  exercises: [
    { kind: 'fill', prompt: T('Completa: Я ___ письмо (acción cumplida)'), answer: 'написал' },
    { kind: 'fill', prompt: T('Completa: да ___ нам'), answer: 'будет' },
    {
      kind: 'choose',
      prompt: T('¿Qué forma significa «leer entero»?'),
      options: [T('читаю'), T('прочитаю')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('Los verbos perfectivos pueden referirse al pasado, no solo al futuro.') },
    {
      n: '2',
      text: T(
        'Las formas perfectivas también tienen presente, aunque su uso narrativo es limitado.',
      ),
    },
  ],
  notes: [
    {
      label: T('Да es partícula, no verbo'),
      text: T(
        'En {да святится} y {да будет}, {да} es partícula optativa y el verbo queda en presente o futuro — las dos son paralelas, y así suena el texto litúrgico.',
      ),
    },
  ],
  examples: [
    { text: 'Я писал письмо', gloss: T('Estaba escribiendo una carta') },
    { text: 'Я написал письмо', gloss: T('Escribí la carta') },
  ],
  tables: [
    {
      caption: T('Pares de aspecto'),
      head: ['Imperfectivo', 'Perfectivo', 'Uso típico'],
      rows: [
        ['делать', 'сделать', 'proceso / resultado'],
        ['читать', 'прочитать', 'experiencia / lectura completa'],
        ['говорить', 'сказать', 'hablar / decir una vez'],
        ['писать', 'написать', 'escribir en curso / terminar'],
      ],
    },
  ],
};
