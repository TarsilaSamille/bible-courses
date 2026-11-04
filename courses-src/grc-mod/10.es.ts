import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Pasado continuo'),
  subtitle: T('μίλαγα — yo hablaba'),
  section: T('El verbo'),
  body: C(`## Qué pinta el imperfecto

El imperfecto no marca tiempo: pinta. Sirve para tres cosas — una acción que sigue en curso mientras hablamos, un hábito o el escenario de fondo. Fíjate en el par: μιλούσα («hablaba») y μιλάγα (la forma popular) son el mismo tiempo en dos tradiciones; la culta desciende de -ουσα, la popular la cambia por -αγα.

Mira qué cambia y qué no: las terminaciones de persona siguen siendo -ω, -εις, -ει, -ουμε, -ετε, -ουν en los dos sistemas. Lo que cambia es el interior del tema.

## Hábito x escena

Κάθε μέρα έπινα νερό — «cada día bebía agua» — el hábito está en el verbo principal. Από τότε έπινα νερό — «por entonces estaba bebiendo agua» — ahí está la escena, y επινα puede significar algo muy distinto en otro contexto. Por eso este tiempo casi nunca se traduce palabra por palabra: se traduce la relación en el tiempo, no el tiempo.

## Los irregulares

ἤμουν, εἶχα, ἔτρωγα y ἕπινα no siguen ningún patrón. Son también de los verbos más frecuentes, y por eso los más irregulares. Aprende los cuatro como un bloque.

## Criterio de lectura

Al traducir un imperfecto, pregunta: «¿qué estaba pasando» o «qué pasaba siempre»? Si el verbo de la oración siguiente es aoristo, casi siempre es escena. Si se repite, es hábito.`),
  vocab: [
    V('μίλαγα', 'μιλώ', 'hablaba'),
    V('μιλάγαμε', 'μιλώ', 'hablábamos'),
    V('μίλαγαν', 'μιλώ', 'hablaban'),
    V('ήμουν', 'είμαι', 'era/estaba'),
    V('είχα', 'έχω', 'tenía'),
    V('έτρωγα', 'τρώω', 'comía'),
    V('ήπινα', 'πίνω', 'bebía'),
    V('προσευχόταν', 'προσεύχομαι', 'rezaba'),
    V('μιλούσα', 'μιλώ', 'hablaba (forma culta)'),
    V('μίλησα', 'μιλώ', 'hablé (evento)'),
    V('κάθε', 'κάθε', 'cada'),
    V('μέρα', 'μέρα', 'día'),
    V('νερό', 'νερό', 'agua'),
    V('φίλος', 'φίλος', 'amigo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué forma es imperfecto popular?'),
    options: [T('μίλαγα'), T('μίλησα'), T('θα μιλήσω'), T('μιλώ')],
    answer: 0,
  },
  exercises: [
    { kind: 'fill', prompt: T('Yo era pequeño'), answer: 'ήμουν', hint: T('Imperfecto de είμαι') },
    {
      kind: 'choose',
      prompt: T('¿Qué verbo completa el fondo?'),
      options: [T('μίλησα'), T('μιλούσα'), T('θα πω'), T('πω')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Relacionar sentido'),
      pairs: [
        { a: 'μιλούσα', b: T('fondo') },
        { a: 'μίλησα', b: T('evento') },
        { a: 'θα πω', b: T('futuro') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [{ n: '§1', text: T('Imperfecto para el fondo; aoristo para el evento.') }],
  notes: [
    { label: T('Registro'), text: T('μιλαγα es coloquial; μιλούσα pertenece al registro culto.') },
  ],
  examples: [{ text: 'ενώ μιλούσα, ήρθε ο φίλος', gloss: T('mientras hablaba, llegó mi amigo') }],
  tables: [
    {
      caption: T('Fondo narrativo'),
      head: ['Tiempo', 'Verbo'],
      rows: [
        ['fondo', 'μιλούσα'],
        ['evento', 'μίλησα'],
      ],
    },
  ],
};
