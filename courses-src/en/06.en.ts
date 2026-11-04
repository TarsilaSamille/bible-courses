import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('Modals and passive voice'),
  subtitle: T('must, may, shall — was made'),
  section: T('The verb'),
  body: C(`## Modals have one form

The modals {can/could}, {may/might}, {must}, {shall/should}, {will/would} and {ought} do not change form for person. They are followed by a bare infinitive: {can pray}, {must obey}, {may come}. In the past or unreal context, the auxiliary changes: {could go}, {should have helped}, {might come}.

Their values are not interchangeable. {Can} marks ability or possibility; {may}, formal permission or uncertain possibility; {must}, strong obligation; {shall} appears in formal promises, instructions and Biblical formulas. In contemporary English, {will} normally expresses volition or prediction.

## Passive voice

The passive uses {be} in every tense + participle: {is written}, {was healed}, {will be saved}. The agent may appear after {by}; when the patient or event matters more, {by} can be omitted: {The prisoner was released}.

{Was made flesh} is both passive and a strong theological clause. In John 1:14, {was made} foregrounds the incarnation, while the divine agent need not be named. A passive does not mean “the action has no agent”; it changes information order.`),
  vocab: [
    V('can', 'can', 'can'),
    V('may', 'may', 'may'),
    V('must', 'must', 'must'),
    V('shall', 'shall', 'shall'),
    V('should', 'should', 'should'),
    V('was made', 'make', 'was made'),
    V('is written', 'write', 'is written'),
    V('will be saved', 'save', 'will be saved'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What construction is “was made flesh”?'),
    options: [T('Active'), T('Passive: be + participle'), T('Reflexive'), T('Conditional')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: “She ___ pray” (she is able to pray).'), answer: 'can' },
    {
      kind: 'match',
      prompt: T('Match modal and value.'),
      pairs: [
        { a: 'must', b: T('obligation') },
        { a: 'may', b: T('permission') },
        { a: 'should', b: T('advice') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is correct?'),
      options: [T('He must to go'), T('He must go'), T('He must went'), T('He must going')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('Never use to after a modal: He can help, not He can to help.') },
    {
      n: '2',
      text: T(
        'Base modal + have + participle locates a past action in modal time: She should have called.',
      ),
    },
    {
      n: '3',
      text: T('The passive auxiliary is be: is made, was made, will be made, not has made.'),
    },
  ],
  notes: [
    {
      label: T('Register:'),
      text: T(
        'Shall has a formal or Biblical tone today. {Will} is normal in ordinary promises, while {should} advises rather than commands.',
      ),
    },
  ],
  examples: [
    { text: '{Thou shalt not kill}', gloss: T('Thou shalt not kill — archaic/commandment') },
    { text: '{The Word was made flesh}', gloss: T('The Word was made flesh — passive') },
    { text: '{It shall be done}', gloss: T('It shall be done — shall + passive') },
  ],
  tables: [
    {
      caption: T('Modal values'),
      head: [T('Modal'), T('Typical value'), T('Example')],
      rows: [
        ['{can}', T('ability'), '{I can read}'],
        ['{may}', T('permission'), '{You may enter}'],
        ['{must}', T('obligation'), '{We must love}'],
        ['{should}', T('advice/duty'), '{You should pray}'],
      ],
    },
  ],
};
