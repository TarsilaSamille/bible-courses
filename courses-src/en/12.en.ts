import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('Phrasal verbs and Biblical prepositions'),
  subtitle: T('put on, cast out, come unto — compound verbs'),
  section: T('Syntax'),
  body: C(`## Verb plus particle

A phrasal verb combines a verb and particle with its own meaning. The particle may be {on/off/up/out/in/away}, as in {put on}, {cast out}, {come in}, or a lexical preposition, as in {come unto} and {look upon}. Do not learn a word alone; memorize the whole unit with its typical object.

{Put on Christ} means 'clothe oneself with Christ,' a metaphor for a changed way of living. {Put off the old man} expresses rejecting an old identity. Both are Biblical metaphors, not literal clothing instructions.

## Particles and objects

With a noun object, the particle normally stays in place: {cast out demons}, {look at the house}. With a pronoun, the particle may shift in some informal British usage: {look him at}; standard AmE usually keeps it before the object. With a gerund, variation also occurs: {put a coat on}.

## Register

KJV frequently uses {unto} and {upon}; these are not automatically modern phrasal verbs. Contemporary English may say {come to} or {look at}. Record the exact form and its register so a translation does not flatten the original style.`),
  vocab: [
    V('put on', 'put on', 'put on'),
    V('put off', 'put off', 'put off'),
    V('cast out', 'cast out', 'cast out'),
    V('come unto', 'come unto', 'come unto'),
    V('fall away', 'fall away', 'fall away'),
    V('hold fast', 'hold fast', 'hold fast'),
    V('look after', 'look after', 'look after'),
    V('look for', 'look for', 'look for'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T("What does 'put on Christ' mean?"),
    options: [
      T('Place Christ'),
      T('Clothe oneself with Christ'),
      T('Take Christ off'),
      T('Look at Christ'),
    ],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T("Complete: 'We must look ___ the Lord.'"), answer: 'for' },
    {
      kind: 'match',
      prompt: T('Match unit and meaning.'),
      pairs: [
        { a: 'cast out', b: T('expel') },
        { a: 'look after', b: T('care for') },
        { a: 'hold fast', b: T('hold firmly') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('Which form best identifies the KJV register?'),
      options: [T('come unto'), T('come to'), T('come at'), T('come by')],
      answer: 0,
    },
  ],
  rules: [
    { n: '1', text: T('Learn the whole unit, not the particle alone: look for ≠ look.') },
    {
      n: '2',
      text: T('With a noun object, the particle normally follows the verb: look at the house.'),
    },
    { n: '3', text: T('Do not silently modernize KJV: {come unto} is meaningfully archaic.') },
  ],
  notes: [
    {
      label: T('Translation:'),
      text: T('Modernizing register can improve clarity, but it must be disclosed.'),
    },
  ],
  examples: [
    { text: '{put on Christ}', gloss: T('put on Christ') },
    { text: '{cast out demons}', gloss: T('cast out demons') },
    { text: '{come unto me}', gloss: T('come unto me') },
    { text: '{look for}', gloss: T('look for') },
  ],
  tables: [
    {
      caption: T('Units and values'),
      head: [T('Unit'), T('Value'), T('Register')],
      rows: [
        ['{put on}', T('put on/put on oneself in'), T('Biblical')],
        ['{cast out}', T('expel'), T('Biblical')],
        ['{come unto}', T('come to'), T('archaic/KJV')],
      ],
    },
  ],
};
