import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('Capstone: reported speech, relatives and tag questions'),
  subtitle: T('He said that… — final integration'),
  section: T('Syntax'),
  body: C(`## Reported speech

After a past reporting verb, English often backshifts tense: {He says he comes} → {He said he would come}; {He says he came} → {He said he had come}. This is grammatical concord, not a change in historical fact. Present perfect may become past perfect: {has seen} → {had seen}. When the fact remains true, present can stay: {He said that God is love}.

{Say} does not normally take an indirect object: {He said that...}. {Tell} takes one: {He told them that...}. Ask and order often use an infinitive: {He asked where they lived}; {He told them to go}.

## A grammar chapel

An integrating paragraph can combine articles, tense, passive, relative clause, conditional and phrasal verb: {The light that was made to shine before the nations was not put out by those who believed}. {That} restricts {the light}; {was made} is passive; {to shine} is a purpose infinitive; {those who believed} is a relative clause; {put out} is a phrasal verb.

## Tag questions

A tag repeats the auxiliary or copula, not the whole verb. {You believe, don't you?}; {He is good, isn't he?}; {They have gone, haven't they?}; {We were not late, were we?}. Positive statement → negative tag; negative statement → positive tag. Pronoun and auxiliary must agree.

A tag also seeks real contact with the listener. {You are coming, aren't you?} invites confirmation. In literary English, tags can be echoed in formal prose, but contemporary standard prefers ordinary subject–verb questions.`),
  vocab: [
    V('said that', 'say', 'said that'),
    V('would come', 'come', 'would come'),
    V('had come', 'come', 'had come'),
    V('ask where', 'ask', 'ask where'),
    V('tell to go', 'tell', 'tell to go'),
    V("isn't he", 'be', "isn't he?"),
    V("don't you", 'do', "don't you?"),
    V("aren't you", 'be', "aren't you?"),
  ],
  exercise: {
    kind: 'fill',
    prompt: T("Complete: 'He is good, ___?'"),
    answer: "isn't he",
    hint: T('A positive statement takes a negative tag with the same auxiliary.'),
  },
  exercises: [
    { kind: 'fill', prompt: T("Backshift: 'He said he would ___.'"), answer: 'come' },
    {
      kind: 'match',
      prompt: T('Match structure and function.'),
      pairs: [
        { a: 'that was made', b: T('relative + passive') },
        { a: 'to shine', b: T('purpose') },
        { a: 'who believed', b: T('defining relative') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T("Which tag is correct for 'We were not late, ___?'"),
      options: [T("weren't we?"), T("wasn't we?"), T("aren't we?"), T("don't we?")],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Reported speech may backshift tense, but the original content remains: reported tense is a present view of the past, not a new event.',
      ),
    },
    {
      n: '2',
      text: T(
        'Tag = auxiliary + pronoun, with opposite polarity. Use the main auxiliary, including in short answers: Yes, I do.',
      ),
    },
    {
      n: '3',
      text: T(
        'Read an integrated sentence in layers and identify structure, tense, voice and lexis before translating.',
      ),
    },
  ],
  notes: [
    {
      label: T('Final task:'),
      text: T(
        'Read the integrated example aloud, cover the glosses and identify each structure before checking.',
      ),
    },
  ],
  examples: [
    { text: '{He said that he would come}', gloss: T('He said that he would come') },
    { text: '{The light that was made to shine}', gloss: T('The light that was made to shine') },
    { text: "{You believe, don't you?}", gloss: T("You believe, don't you?") },
    { text: "{I don't know, do you?}", gloss: T("I don't know, do you?") },
  ],
  tables: [
    {
      caption: T('Final integration map'),
      head: [T('Structure'), T('In the example'), T('Function')],
      rows: [
        [T('defining relative'), '{that was made}', T('identifies the light')],
        [T('infinitive'), '{to shine}', T('purpose')],
        [T('relative'), '{who believed}', T('restricts those')],
        [T('phrasal verb'), '{put out}', T('extinguish')],
        [T('tag'), "{aren't you?}", T('seeks contact')],
      ],
    },
  ],
};
