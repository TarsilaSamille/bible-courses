import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('Reading: Lord’s Prayer and Psalm 23'),
  subtitle: T('Our Father which art in heaven — reading an archaic register'),
  section: T('Readings'),
  body: C(`## The KJV as a historical window

In Matthew 6:9 KJV, {Our Father which art in heaven, hallowed be thy name}. {Art} is archaic {are}; {thy} is a second-person possessive; {hallowed be} is a passive formula. These are not errors in contemporary English. The modern form is {Our Father who is in heaven, may your name be holy}.

{thou/thee/thy/thine} address one person formally; {you/your} can address one or many. The older second-person singular system also makes agreement visible: {thou art}, {thou hast}, {thou shalt}. KJV forms such as {art} and {hallowed} are period markers.

## Reading the prayer by structure

The prayer moves from invocation to petitions and requests. {Give us this day our daily bread} places the imperative before the indirect object. {Forgive us our debts, as we forgive our debtors} uses as to link human and divine forgiveness.

Psalm 23:1 has a different poetic register: {The LORD is my shepherd; I shall not want}. The metaphor does not say every circumstance is painless; it says the shepherd supplies what is needed. {I shall not want} is a future-oriented promise, not a claim that the psalmist owns everything.`),
  vocab: [
    V('art', 'be', 'art'),
    V('thou', 'thou', 'thou'),
    V('thee', 'thee', 'thee'),
    V('thy', 'thy', 'thy'),
    V('hallowed', 'hallow', 'hallowed'),
    V('bread', 'bread', 'bread'),
    V('shepherd', 'shepherd', 'shepherd'),
    V('shall not want', 'want', 'shall not want'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is art in “which art”?'),
    options: [T('the noun art'), T('archaic 2nd person of be'), T('an article'), T('past of eat')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Modernize: “Our Father which ___ in heaven”.'), answer: 'is' },
    {
      kind: 'match',
      prompt: T('Match expression and gloss.'),
      pairs: [
        { a: 'thou', b: T('you') },
        { a: 'thy', b: T('your') },
        { a: 'hallowed', b: T('hallowed') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('In I shall not want, what does shall add?'),
      options: [
        T('A present obligation'),
        T('Future certainty/promise'),
        T('Remote past'),
        T('Third conditional'),
      ],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Read every archaic form as KJV or liturgical language unless the context explicitly presents modern quotation.',
      ),
    },
    {
      n: '2',
      text: T(
        'First-person shall in a Biblical promise usually expresses certainty or divine assurance, not ordinary modern prediction.',
      ),
    },
    {
      n: '3',
      text: T(
        'The shepherd metaphor belongs to the poem; do not apply it mechanically to every religious experience.',
      ),
    },
  ],
  notes: [
    {
      label: T('Translation:'),
      text: T(
        'A Bible translation may update syntax and retain imagery. Always disclose when a form has been modernized.',
      ),
    },
  ],
  examples: [
    { text: '{thou art}', gloss: T('thou art — archaic') },
    { text: '{hallowed be thy name}', gloss: T('hallowed be thy name — liturgical passive') },
    { text: '{daily bread}', gloss: T('daily bread') },
    { text: '{I shall not want}', gloss: T('I shall not want — promise') },
  ],
  tables: [
    {
      caption: T('Second person: KJV and current use'),
      head: [T('Function'), T('KJV'), T('Current')],
      rows: [
        [T('you (singular)'), 'thou', 'you'],
        [T('your'), 'thy/thine', 'your'],
        [T('are'), 'art', 'are'],
        [T('you (plural)'), 'ye', 'you'],
      ],
    },
  ],
};
