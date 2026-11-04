import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('Our Father and verbal aspect'),
  subtitle: T('да будет — делать/сделать'),
  section: T('Reading'),
  body: C(
    'Отче is an inherited vocative form preserved in the prayer. сущий is a present active participle meaning “who is”, and да in да святится is an optative particle, rendered “may”. да будет means “may it be”. Imperatives дай and прости can address ты or вы. In дай нам, нам is dative because the verb takes a recipient. Russian aspect is grammaticalized but not a simple tense opposition. Imperfective делать, читать, говорить present process, repetition or incomplete result; perfective сделать, прочитать, сказать present bounded, completed or whole events. Aspect is not identical to punctuality in every phrase: Я писал письмо, “I was writing a letter”; Я написал письмо, “I have written the letter”.',
  ),
  vocab: [
    V('сущий', 'сущий', 'who is'),
    V('да будет', 'быть', 'may it be'),
    V('дай', 'дать', 'give'),
    V('сделать', 'сделать', 'do (perfective)'),
    V('прочитаю', 'прочитать', 'will read through'),
    V('оставил', 'оставить', 'left'),
    V('делать', 'делать', 'do (imperfective)'),
    V('прости', 'простить', 'forgive'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which pair is imperfective/perfective?'),
    options: [T('делать/сделать'), T('сказать/говорить'), T('простить/прощать')],
    answer: 0,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: Я ___ письмо (completed action)'), answer: 'написал' },
    { kind: 'fill', prompt: T('Complete: да ___ нам'), answer: 'будет' },
    {
      kind: 'choose',
      prompt: T('Which form means “read through”?'),
      options: [T('читаю'), T('прочитаю')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('Perfective verbs can refer to the past, not only to the future.') },
    { n: '2', text: T('Perfective forms also have a present, though narrative use is limited.') },
  ],
  notes: [
    {
      label: T('Да is a particle, not a verb'),
      text: T(
        'In {да святится} and {да будет}, {да} is an optative particle and the verb stays in present or future — the two are parallel, and that is what gives the text its liturgical sound.',
      ),
    },
  ],
  examples: [
    { text: 'Я писал письмо', gloss: T('I was writing a letter') },
    { text: 'Я написал письмо', gloss: T('I wrote the letter') },
  ],
  tables: [
    {
      caption: T('Aspect pairs'),
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
