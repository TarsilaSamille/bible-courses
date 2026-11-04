import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Perfect tenses'),
  subtitle: T('have seen, had seen — relation to the present'),
  section: T('The verb'),
  body: C(`## The present perfect

The present perfect combines past with present relevance: {I have read the book} may indicate present knowledge or experience. The action is complete, but the time of interest is now. It also accumulates experience: {She has visited Rome}.

Normally, it cannot stand with a finished past-time expression: not {I have seen him yesterday}. Use {I saw him yesterday}. However, {has gone} can describe a destination result: {He has gone to Paris} may mean he is there or will not be back.

## Present and past perfect

The present perfect places one past event before another: {When I arrived, he had left}. English also uses {was/were} + participle: {It was written}. This is especially important in Biblical English, where tense often follows logic and discourse rather than a fixed timeline.

John 19:30, {It is finished}, and 2 Timothy 4:7, {I have fought the good fight}, should be translated without forcing their forms into one Portuguese tense. Context distinguishes resulting state, accumulated experience and narrative aspect.`),
  vocab: [
    V('has seen', 'see', 'has seen'),
    V('have believed', 'believe', 'have believed'),
    V('had gone', 'go', 'had gone'),
    V('is finished', 'finish', 'is finished'),
    V('yesterday', 'yesterday', 'yesterday'),
    V('experience', 'experience', 'experience'),
    V('result', 'result', 'result'),
    V('already', 'already', 'already'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence is natural?'),
    options: [
      T('I have seen him yesterday'),
      T('I saw him yesterday'),
      T('I did saw him yesterday'),
      T('I have saw him yesterday'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Complete: 'When she arrived, he ___ (leave).'"),
      answer: 'had left',
    },
    {
      kind: 'match',
      prompt: T('Match form and participle.'),
      pairs: [
        { a: 'speak', b: 'spoken' },
        { a: 'say', b: 'said' },
        { a: 'write', b: 'written' },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('What normally blocks the present perfect with yesterday?'),
      options: [
        T('The absence of an article'),
        T('A finished past-time expression'),
        T('The use of was'),
        T('Negation'),
      ],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Use the present perfect for a situation bearing on now: I have lost my keys. Use the simple past for a completed time: I lost them yesterday.',
      ),
    },
    {
      n: '2',
      text: T(
        'The past perfect means more than simply past: it measures anteriority within a past narrative.',
      ),
    },
    {
      n: '3',
      text: T(
        'The participle is not always the past form: speak/spoken, say/said. Learn both when they differ.',
      ),
    },
  ],
  notes: [
    {
      label: T('Caution:'),
      text: T(
        'Do not assume perfect maps onto a single Portuguese tense; its function is discourse-based.',
      ),
    },
  ],
  examples: [
    { text: '{I have believed}', gloss: T('I have believed — experience/current state') },
    { text: '{When I came, he had gone}', gloss: T('When I came, he had gone') },
    { text: '{It is finished}', gloss: T('It is finished — resulting state') },
  ],
  tables: [
    {
      caption: T('Tense choice'),
      head: [T('Situation'), T('Form'), T('Value')],
      rows: [
        [T('yesterday'), '{saw}', T('finished past')],
        [T('experience/result'), '{have seen}', T('present relevance')],
        [T('earlier past'), '{had seen}', T('past perspective')],
      ],
    },
  ],
};
