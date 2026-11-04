import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('Present of -ω verbs'),
  subtitle: T('μιλώ, τρώω, μένω'),
  section: T('The verb'),
  body: C(`The present expresses habitual action, state or an event in progress. Person is shown by the ending; the pronoun is optional.

Verbs in -άω, such as μιλάω, become μιλώ: μιλώ, μιλάς, μιλά, μιλάμε, μιλάτε, μιλάνε. Many Greek verbs use a contracted pattern, so do not infer endings mechanically from -ω.

Verbs such as τρώω and πίνω form a small class: τρώω, τρως, τρώει, τρώμε, τρώτε, τρώνε. Others in -ω form -εις, -ει, -ουμε, -ετε, -ουν: μένω, μένεις, μένει, μένουμε, μένετε, μένουν. Both are productive patterns, not two absolute rules.

Negation uses δεν before the verb: δεν μιλώ. No “not” needs to be added to the verb. Questions use intonation without otherwise changing the word: Μιλάς; The semicolon is used in writing.`),
  vocab: [
    V('μιλώ', 'μιλώ', 'I speak'),
    V('μιλάς', 'μιλώ', 'you speak'),
    V('μιλάμε', 'μιλώ', 'we speak'),
    V('μιλάνε', 'μιλώ', 'they speak'),
    V('τρώω', 'τρώω', 'I eat'),
    V('τρώνε', 'τρώω', 'they eat'),
    V('μένω', 'μένω', 'I stay; live'),
    V('μένουν', 'μένω', 'they stay; live'),
    V('δεν', 'δεν', 'not'),
    V('πίνω', 'πίνω', 'I drink'),
    V('τρως', 'τρώω', 'you eat'),
    V('μένει', 'μένω', 'he/she stays; lives'),
    V('κάθε', 'κάθε', 'every'),
    V('εδώ', 'εδώ', 'here'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How do you say “they speak”?'),
    options: [T('μιλώ'), T('μιλάμε'), T('μιλάνε'), T('μιλάτε')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('εμείς ___ εδώ'),
      answer: 'μένουμε',
      hint: T('First-person plural of μένω'),
    },
    {
      kind: 'choose',
      prompt: T('Where does δεν go?'),
      options: [T('μιλώ δεν'), T('δεν μιλώ'), T('δεν ο μιλώ'), T('ο δεν μιλώ')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Match person and form'),
      pairs: [
        { a: 'μιλάς', b: 'εσύ' },
        { a: 'μιλά', b: 'αυτός' },
        { a: 'μιλάτε', b: 'εσείς' },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [
    { n: '§1', text: T('The present can be habitual or momentary.') },
    { n: '§2', text: T('δεν is placed before the conjugated verb.') },
  ],
  notes: [
    {
      label: T('Koine × modern'),
      text: T('Modern τρώνε and μιλάνε are remodeled endings; do not expand them as Koine forms.'),
    },
  ],
  examples: [
    { text: 'κάθε μέρα μιλώ', gloss: T('I speak every day') },
    { text: 'δεν μένω εδώ', gloss: T('I do not live here') },
  ],
  tables: [
    {
      caption: T('Present conjugation'),
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
