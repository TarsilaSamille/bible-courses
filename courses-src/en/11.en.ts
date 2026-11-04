import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Relative clauses and commas'),
  subtitle: T('who, which, that — information and identification'),
  section: T('Syntax'),
  body: C(`## What a relative clause does

A defining relative clause identifies its antecedent: {the disciples who believed rejoiced} means only the believing disciples rejoiced. In restrictive clauses, {that} can refer to people or things: {the disciple that prayed}.

A non-defining relative adds information about an already identified group: {the disciples, who believed, rejoiced}. The commas mark the difference. {Who} normally refers to people; {which} to things; {whose} to possessors.

## Prepositions and relatives

{Where}, {when} and {why} can replace a preposition plus relative pronoun: {the city where he lived}, {the day when we met}, {the reason why he stayed}. In careful modern English, a person or thing can also follow the preposition: {the person to whom I spoke}.

John 1:39 KJV has {Where dwellest thou?}; the underlying contemporary question is {Where do you live?}. The two are not interchangeable in register.

## What

{What} is a fused relative pronoun in contexts like {do what he says}. Do not confuse it with the question word in {What did he say?}. In KJV, {whatsoever} is an emphatic free relative: whatever.`),
  vocab: [
    V('who', 'who', 'who'),
    V('which', 'which', 'which'),
    V('that', 'that', 'that'),
    V('whose', 'whose', 'whose'),
    V('where', 'where', 'where'),
    V('when', 'when', 'when'),
    V('why', 'why', 'why'),
    V('what', 'what', 'what'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T("What does the comma indicate in 'the disciples, who believed, rejoiced'?"),
    options: [
      T('That only believers rejoiced'),
      T('That the already identified group all believed'),
      T('That the verb changes tense'),
      T('That there is a question'),
    ],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T("Complete: 'God, ___ name is holy…'"), answer: 'whose' },
    {
      kind: 'match',
      prompt: T('Match relative and antecedent.'),
      pairs: [
        { a: 'who', b: T('person') },
        { a: 'which', b: T('thing') },
        { a: 'whose', b: T('possession') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('Which sentence identifies only a subgroup?'),
      options: [
        T('The disciples who believed rejoiced'),
        T('The disciples, who believed, rejoiced'),
        T('The disciples who, believed, rejoiced'),
        T('The disciples, who believed rejoiced'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T('No comma creates a DEFINITION: the man who came identifies a particular man.'),
    },
    {
      n: '2',
      text: T(
        "Commas mark added information about a complete antecedent; the relative then means 'which/who'.",
      ),
    },
    {
      n: '3',
      text: T(
        'Whose expresses possession with people and things: the man whose son came; the city whose people prayed.',
      ),
    },
  ],
  notes: [
    {
      label: T('Precision:'),
      text: T(
        'The comma does not change the pronoun, but it changes the reference set and often the interpretation.',
      ),
    },
  ],
  examples: [
    { text: '{the man who came}', gloss: T('the man who came — identified subset') },
    {
      text: '{the disciples, who believed, rejoiced}',
      gloss: T('the disciples, who believed, rejoiced'),
    },
    { text: '{the name of which he spoke}', gloss: T('the name of which he spoke') },
  ],
  tables: [
    {
      caption: T('Defining × non-defining'),
      head: [T('Type'), T('Person'), T('Thing'), T('Commas')],
      rows: [
        [T('defining'), 'who/that', 'which/that', T('usually none')],
        [T('non-defining'), 'who', 'which', T('usually required')],
      ],
    },
  ],
};
