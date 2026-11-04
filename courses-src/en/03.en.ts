import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  title: T('Simple present'),
  subtitle: T('he speaks — regular and negative patterns'),
  section: T('The verb'),
  body: C(`## The present form

The simple present takes an -s form in the third-person singular. Regular forms add {-s}; final {-o, -ch, -sh, -ss, -x} and certain sibilants take {-es}. {know}, {go} and {do} use special forms: {knows}, {goes}, {does}.

{BE} is irregular: {I am}, {he is}, {they are}. In the present, {have} becomes {has}. The third person provides a quick agreement test.

## The auxiliary {do}

In questions and negatives, third-person -s moves to {do/does}: {She sings} → {Does she sing?} → {She does not sing}. The main verb returns to its base form. After a fronted {do not}, however, the main verb keeps its ordinary present form: {I do believe}.

## Four values

One tense can express habit, truth, state and scheduled future. Compare {God is love} (truth), {the church prays} (habit), {she knows} (state) and {the train leaves tomorrow} (schedule). Biblical English may sound archaic, but the core system remains the same.`),
  vocab: [
    V('speak', 'speak', 'to speak'),
    V('reads', 'read', 'reads'),
    V('has', 'have', 'has'),
    V('is', 'be', 'is'),
    V('prays', 'pray', 'prays'),
    V('knows', 'know', 'knows'),
    V('does', 'do', 'does'),
    V('comes', 'come', 'comes'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete: “The disciple ___ (pray) every day.”'),
    answer: 'prays',
    hint: T('Third-person singular.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Which form is correct?'),
      options: [
        T('She does not pray'),
        T('She do not pray'),
        T('She does not prays'),
        T("She don't pray"),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match form with time value.'),
      pairs: [
        { a: '{usually prays}', b: T('habit') },
        { a: '{is with God}', b: T('state/truth') },
        { a: '{leaves tomorrow}', b: T('schedule') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'fill',
      prompt: T('In a question: “___ he speak?”'),
      answer: 'Does',
      hint: T('The auxiliary takes over third-person -s.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Third-person -s belongs to the verb, not always the subject: she read → she reads; they read → they read.',
      ),
    },
    {
      n: '2',
      text: T(
        "With do/does, the main verb takes the bare infinitive: Does he read?; He doesn't read.",
      ),
    },
    {
      n: '3',
      text: T(
        'I believe means I have faith; I believe in expresses belief in someone or something.',
      ),
    },
  ],
  notes: [
    {
      label: T('Register:'),
      text: T(
        "KJV forms such as heareth belong to that version's archaic style, not standard contemporary usage.",
      ),
    },
  ],
  examples: [
    { text: '{God is love}', gloss: T('God is love — truth') },
    { text: '{The church prays}', gloss: T('The church prays — habit') },
    { text: '{Does he pray?}', gloss: T('Does he pray? — do-auxiliary') },
  ],
  tables: [
    {
      caption: T('Simple present'),
      head: [T('Person'), T('Regular verb'), T('Example')],
      rows: [
        ['I/you/we/they', '{speak}', '{I speak}'],
        ['he/she/it', '{speaks}', '{God speaks}'],
        ['negativo', '{do/does not + base}', '{He does not speak}'],
        ['interrogativo', '{Do/Does + subject + base?}', '{Does he speak?}'],
      ],
    },
  ],
};
