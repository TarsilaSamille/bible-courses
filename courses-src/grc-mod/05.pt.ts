import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('Presente dos verbos em -ω'),
  subtitle: T('μιλώ, τρώω, μένω'),
  section: T('O verbo'),
  body: C(`O presente indica ação habitual, estado ou fato em curso. A pessoa se reconhece na terminação; o pronome é opcional.

Os verbos em -άω, como μιλάω, passam a μιλώ: μιλώ, μιλάς, μιλά, μιλάμε, μιλάτε, μιλάνε. Many Greek verbs follow a contracted pattern, so do not infer endings mechanically from -ω.

Verbs such as τρώω and πίνω form a small class: τρώω, τρως, τρώει, τρώμε, τρώτε, τρώνε. Others in -ω form -εις, -ει, -ουμε, -ετε, -ουν: μένω, μένεις, μένει, μένουμε, μένετε, μένουν. Both classes are productive patterns, not two absolute rules.

La negación usa δεν antes del verbo: δεν μιλώ. No es necesario escribir «no» en el verbo. La pregunta se forma con entonación, normalmente sin cambiar la palabra: Μιλάς; El punto y coma se usa en la escritura.`),
  vocab: [
    V('μιλώ', 'μιλώ', 'falo'),
    V('μιλάς', 'μιλώ', 'falas'),
    V('μιλάμε', 'μιλώ', 'falamos'),
    V('μιλάνε', 'μιλώ', 'falam'),
    V('τρώω', 'τρώω', 'como'),
    V('τρώνε', 'τρώω', 'comem'),
    V('μένω', 'μένω', 'fico; moro'),
    V('μένουν', 'μένω', 'ficam; moram'),
    V('δεν', 'δεν', 'não'),
    V('πίνω', 'πίνω', 'bebo'),
    V('τρως', 'τρώω', 'comes'),
    V('μένει', 'μένω', 'fica; mora'),
    V('κάθε', 'κάθε', 'cada'),
    V('εδώ', 'εδώ', 'aqui'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se diz «eles falam»?'),
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
      prompt: T('Onde entra δεν?'),
      options: [T('μιλώ δεν'), T('δεν μιλώ'), T('δεν ο μιλώ'), T('ο δεν μιλώ')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Associar pessoa e forma'),
      pairs: [
        { a: 'μιλάς', b: 'εσύ' },
        { a: 'μιλά', b: 'αυτός' },
        { a: 'μιλάτε', b: 'εσείς' },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [
    { n: '§1', text: T('O presente pode ser habitual ou momentáneo.') },
    { n: '§2', text: T('δεν se coloca antes del verbo conjugado.') },
  ],
  notes: [
    {
      label: T('Koiné × moderno'),
      text: T(
        'As formas modernas τρώνε e μιλάνε correspondem a remodelações modernas; não as analise como formas do koiné.',
      ),
    },
  ],
  examples: [
    { text: 'κάθε μέρα μιλώ', gloss: T('falo todos os dias') },
    { text: 'δεν μένω εδώ', gloss: T('não moro aqui') },
  ],
  tables: [
    {
      caption: T('Conjugação presente'),
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
