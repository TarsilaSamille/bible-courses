import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('Presente de los verbos en -ω'),
  subtitle: T('μιλώ, τρώω, μένω'),
  section: T('El verbo'),
  body: C(`El presente expresa acción habitual, estado o un hecho en curso. La persona se reconoce por la terminación; el pronombre es opcional.

Los verbos en -άω, como μιλάω, pasan a μιλώ: μιλώ, μιλάς, μιλά, μιλάμε, μιλάτε, μιλάνε. Muchos verbos griegos siguen un patrón contractual, así que no deben deducirse mecánicamente las terminaciones a partir de -ω.

Verbos como τρώω y πίνω forman una clase pequeña: τρώω, τρως, τρώει, τρώμε, τρώτε, τρώνε. Otros en -ω forman -εις, -ει, -ουμε, -ετε, -ουν: μένω, μένεις, μένει, μένουμε, μένετε, μένουν. Son patrones productivos, no dos reglas absolutas.

La negación usa δεν ante el verbo: δεν μιλώ. No hace falta añadir «no» al verbo. La pregunta se forma con entonación: Μιλάς; El punto y coma se emplea por escrito.`),
  vocab: [
    V('μιλώ', 'μιλώ', 'hablo'),
    V('μιλάς', 'μιλώ', 'hablas'),
    V('μιλάμε', 'μιλώ', 'hablamos'),
    V('μιλάνε', 'μιλώ', 'hablan'),
    V('τρώω', 'τρώω', 'como'),
    V('τρώνε', 'τρώω', 'comen'),
    V('μένω', 'μένω', 'me quedo; vivo'),
    V('μένουν', 'μένω', 'se quedan; viven'),
    V('δεν', 'δεν', 'no'),
    V('πίνω', 'πίνω', 'bebo'),
    V('τρως', 'τρώω', 'comes'),
    V('μένει', 'μένω', 'se queda; vive'),
    V('κάθε', 'κάθε', 'cada'),
    V('εδώ', 'εδώ', 'aquí'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se dice «ellos hablan»?'),
    options: [T('μιλώ'), T('μιλάμε'), T('μιλάνε'), T('μιλάτε')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('εμείς ___ εδώ'),
      answer: 'μένουμε',
      hint: T('Primera persona plural de μένω'),
    },
    {
      kind: 'choose',
      prompt: T('¿Dónde va δεν?'),
      options: [T('μιλώ δεν'), T('δεν μιλώ'), T('δεν ο μιλώ'), T('ο δεν μιλώ')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Relacionar persona y forma'),
      pairs: [
        { a: 'μιλάς', b: 'εσύ' },
        { a: 'μιλά', b: 'αυτός' },
        { a: 'μιλάτε', b: 'εσείς' },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [
    { n: '§1', text: T('El presente puede ser habitual o momentáneo.') },
    { n: '§2', text: T('δεν se coloca antes del verbo conjugado.') },
  ],
  notes: [
    {
      label: T('Koiné × moderno'),
      text: T(
        'Las formas modernas τρώνε y μιλάνε son terminaciones remodeladas; no las expandas como formas del koiné.',
      ),
    },
  ],
  examples: [
    { text: 'κάθε μέρα μιλώ', gloss: T('hablo todos los días') },
    { text: 'δεν μένω εδώ', gloss: T('no vivo aquí') },
  ],
  tables: [
    {
      caption: T('Conjugación presente'),
      head: ['Pronome', 'μιλώ', 'τρώω', 'μένω'],
      rows: [
        ['εγώ', 'μιλώ', 'τρώω', 'μένω'],
        ['εσύ', 'μιλάς', 'τρως', 'μένεις'],
        ['αυτός/αυτή', 'μιλά', 'τρώει', 'μένει'],
        ['εμείς', 'μιλάμε', 'τρώμε', 'μένουμε'],
        ['εσείς', 'μιλάτε', 'τρώτε', 'μένετε'],
        ['αυτοί', 'μιλάνε', 'τρώνε', 'μένουν'],
      ],
    },
  ],
};
