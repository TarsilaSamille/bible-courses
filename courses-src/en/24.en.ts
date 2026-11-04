import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  title: T('The verb: what changes shape'),
  subtitle: T('base, past, -ing — and the honesty of the irregulars'),
  section: T('The verb'),
  body: C(`## Four columns, and the rest is a list

Every English verb lives in four shapes: the **base** ({work}), the **past** ({worked}), the **participle** ({worked}) and the **-ing** ({working}). With a regular verb all four follow by rule, and the rule fits in one sentence: the past and the participle take {ed}, and the {ing} turns a final {e} into {ing}.

The irregularity starts after that, and it is large. {Go → went → gone}, {write → wrote → written}, {stand → stood → stood}: three verbs, three paths, and no rule that produces them. This is one of the worst parts of the language, and honesty is worth more than a promise that "it is only memorization".

The participle is the column almost nobody knows and the one that shows up in every sentence with an auxiliary: {I have worked}, {she has written}, {they have gone}. It is what makes the conjugated verb carry the rest of the sentence.

## The conjugated verb carries the particle

English inflects the verb by person: {I work}, {you work}, {he works}. And the conjugated verb **brings the particle with it**: {I have worked}, never {I am work}.

When the main verb follows an auxiliary, it is the auxiliary that inflects and the main verb stays in the base form or in {ing} or in the participle. With {have}: {I have worked}, {she has worked}, {we had worked}. With {be}: {I am working}, {she is working}, {they were working}. With {do}: {I do work}, {she does not work}, {they did not work}.

The three auxiliaries are {be}, {have} and {do}, and none of them inflects for the meaning of the noun: the noun stays {work}, {write} and {go} in every person.

## The families of irregulars

The irregulars come in families, and spotting the family is faster than memorizing the list word by word. The most productive family is the **swapped vowel**: {sing → sang}, {drink → drank}, {come → came}, {run → ran}. The second turns **{o} into {ee}**: {write → wrote}, {give → gave}, {take → took}, {break → broke}. The third turns **{d} into {t}**: {lend → lent}, {send → sent}, {spend → spent}, {build → built}.

John 3:16 in the KJV shows an irregular with no disguise: {for so loved God the world}. The {loved} is not {love} plus {ed} and it is not a regular form; it is a shape that arrives ready-made.

## What the KJV does with tense

The KJV uses the archaic third-person ending: {he that heareth}, {God loveth}, {he that speaketh}. The {eth} marks the third person of the present in forms with a vocalic stem, and it is register only.

The practical consequence is that a KJV reader meets tense the other way round from what he expects: the present shows up where Portuguese would expect a future ({he that heareth}), and the past shows up in irregular form with some regularity ({loved}, {came}, {saw}).

Mark 4:39 stacks all three in one sentence: {And he arose, and rebuked the wind, and said unto the sea, Peace, be still!}. {Arose} is irregular, {said} has two shapes in English and one in Portuguese, and {be still} is verb plus adjective.`),
  vocab: [
    V('work', 'work', 'work'),
    V('worked', 'work', 'worked'),
    V('working', 'work', 'working'),
    V('go', 'go', 'go'),
    V('went', 'go', 'went'),
    V('gone', 'go', 'gone'),
    V('write', 'write', 'write'),
    V('wrote', 'write', 'wrote'),
    V('written', 'write', 'written'),
    V('stand', 'stand', 'stand'),
    V('stood', 'stand', 'stood'),
    V('sing', 'sing', 'sing'),
    V('sang', 'sing', 'sang'),
    V('drink', 'drink', 'drink'),
    V('gave', 'give', 'gave'),
    V('loved', 'love', 'loved'),
    V('heareth', 'hear', 'heareth'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Every verb has four shapes: base, past, participle and -ing. For regular verbs, -ed and -ing are enough.',
      ),
    },
    {
      n: '2',
      text: T(
        'After an auxiliary the main verb stays in the base, the participle or the -ing; it is the auxiliary that inflects for person.',
      ),
    },
    {
      n: '3',
      text: T(
        'The auxiliaries are be, have and do, and none of them inflects for the meaning of the noun.',
      ),
    },
    {
      n: '4',
      text: T(
        'The irregulars fall into three families: swapped vowel, -o becoming -ee, and -d becoming -t.',
      ),
    },
    {
      n: '5',
      text: T('The -eth ending of the KJV is third-person present register, not a tense.'),
    },
  ],
  notes: [
    {
      label: T('Biblical:'),
      text: T(
        'John 3:16 has loved, Mark 4:39 has arose, and the KJV uses heareth where English would have he hears. All three turn up in the same chapter of anything.',
      ),
    },
    {
      label: T('Honesty:'),
      text: T(
        'The irregulars are the worst part of the language and they have no rule. Honesty about that is better than a promise: the list is what it is, and what works is learning the whole verb with an example.',
      ),
    },
  ],
  examples: [
    { text: '{I have worked}', gloss: T('I have worked') },
    { text: '{she has written}', gloss: T('she has written') },
    { text: '{they have gone}', gloss: T('they have gone') },
    { text: '{I am working}', gloss: T('I am working') },
    { text: '{he works}', gloss: T('he works') },
    { text: '{for so loved God the world}', gloss: T('for so loved God the world') },
    { text: '{And he arose}', gloss: T('and he arose') },
    { text: '{he that heareth}', gloss: T('he that heareth — KJV') },
    { text: '{he went and did not come}', gloss: T('he went and did not come') },
    { text: '{we had worked}', gloss: T('we had worked') },
  ],
  tables: [
    {
      caption: T('The four columns'),
      head: [T('Base'), T('Past'), T('Participle'), T('-ing')],
      rows: [
        ['{work}', '{worked}', '{worked}', '{working}'],
        ['{play}', '{played}', '{played}', '{playing}'],
        ['{go}', '{went}', '{gone}', '{going}'],
        ['{write}', '{wrote}', '{written}', '{writing}'],
        ['{stand}', '{stood}', '{stood}', '{standing}'],
        ['{eat}', '{ate}', '{eaten}', '{eating}'],
        ['{give}', '{gave}', '{given}', '{giving}'],
      ],
    },
    {
      caption: T('Families of irregulars'),
      head: [T('Family'), T('What changes'), T('Examples')],
      rows: [
        [T('swapped vowel'), T('the root vowel'), '{sing → sang, drink → drank, come → came}'],
        [T('-o becomes -ee'), T('the final vowel'), '{write → wrote, give → gave, take → took}'],
        [T('-d becomes -t'), T('the final consonant'), '{lend → lent, send → sent, build → built}'],
        [T('no rule'), T('everything'), '{stand → stood, buy → bought}'],
      ],
    },
    {
      caption: T('The three auxiliaries'),
      head: [T('Auxiliary'), T('Used for'), T('Example')],
      rows: [
        ['{be}', T('present and past continuous'), '{I am working, they were working}'],
        ['{have}', T('perfect tenses'), '{I have worked, we had worked}'],
        [
          '{do}',
          T('simple present and past, with negation and question'),
          '{I do work, they did not work}',
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence is correct?'),
    options: [T('I have went'), T('I have gone'), T('I am work'), T('I have go')],
    answer: 1,
    hint: T('After have, the verb goes into the participle: gone.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Complete the participle: 'She has ___ the letter.' (write)"),
      answer: 'written',
    },
    {
      kind: 'fill',
      prompt: T("Complete the irregular past: 'He ___ to church yesterday.' (go)"),
      answer: 'went',
    },
    {
      kind: 'match',
      prompt: T('Match the base to the irregular past.'),
      pairs: [
        { a: 'go', b: 'went' },
        { a: 'write', b: 'wrote' },
        { a: 'drink', b: 'drank' },
        { a: 'send', b: 'sent' },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is correct?'),
      options: [
        T('I am work every day'),
        T('I am working every day'),
        T('I am worked every day'),
        T('I work every day am'),
      ],
      answer: 1,
    },
  ],
};
