import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('Reading: John 1:1 (KJV)'),
  subtitle: T('In the beginning was the Word — a guided KJV reading'),
  section: T('Readings'),
  body: C(`## Text and register

KJV, 1611: {In the beginning was the Word, and the Word was with God, and the Word was God.}

The verse brings together several structures: irregular {was}, the definite and capitalized {the Word}, {with} for close relationship, and {was God} without an article before {God}. The last pattern echoes Greek and carries the climactic assertion; it is not merely decorative archaism. The register is archaizing, but the grammar remains readable.

## Layered reading

First locate the verb: {was} appears in all three clauses. Then identify the subject: {the Word} returns in every clause. The complements alternate: {in the beginning}, {with God}, {God}. This parallel movement shows identity: the Word was in the beginning, was with God, and was God.

Read John 1:5 and 1:14: {the light shineth} uses archaic {shineth}; {was made flesh} combines passive voice with a theological assertion; {dwelt} means “took up residence,” not necessarily “built a tent”. A gloss should translate the word, while a broader note may mention the “tabernacle” image.`),
  vocab: [
    V('beginning', 'beginning', 'beginning'),
    V('Word', 'word', 'Word'),
    V('with', 'with', 'with'),
    V('flesh', 'flesh', 'flesh'),
    V('dwelt', 'dwell', 'dwelt'),
    V('light', 'light', 'light'),
    V('grace', 'grace', 'grace'),
    V('truth', 'truth', 'truth'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What does dwelt mean in John 1:14?'),
    options: [T('Died'), T('Dwelt among us'), T('Ascended to heaven'), T('Spoke publicly')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: “the Word ___ God” (John 1:1).'), answer: 'was' },
    {
      kind: 'match',
      prompt: T('Match word and gloss.'),
      pairs: [
        { a: 'beginning', b: T('beginning') },
        { a: 'flesh', b: T('flesh') },
        { a: 'truth', b: T('truth') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('What is the function of repeating the Word in the three clauses?'),
      options: [
        T('Reinforce identity and create parallelism'),
        T('Indicate three different words'),
        T('Create three new verb tenses'),
        T('Remove the verb was'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Do not read each was in isolation: repetition creates parallelism and reinforces subject identity.',
      ),
    },
    { n: '2', text: T('KJV uses -eth endings; do not reproduce them in contemporary English.') },
    {
      n: '3',
      text: T(
        'Dwelt here means resided; the tabernacle image is contextual resonance, not a literal building action.',
      ),
    },
  ],
  notes: [
    {
      label: T('Register:'),
      text: T(
        'KJV is archaizing, not modern register. Read it to recognize grammar, not to imitate every form.',
      ),
    },
  ],
  examples: [
    { text: '{was the Word}', gloss: T('was the Word') },
    { text: '{with God}', gloss: T('with God: close relationship') },
    { text: '{dwelt among us}', gloss: T('dwelt among us') },
    { text: '{was made flesh}', gloss: T('was made flesh') },
  ],
  tables: [
    {
      caption: T('Verse map'),
      head: [T('Element'), T('Form'), T('Value')],
      rows: [
        [T('time'), '{in the beginning}', T('starting point')],
        [T('subject'), '{the Word}', T('determinate referent')],
        [T('verb'), '{was}', T('irregular past')],
        [T('complement'), '{with God}', T('relationship')],
      ],
    },
  ],
};
