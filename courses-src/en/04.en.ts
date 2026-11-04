import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('Simple past'),
  subtitle: T('spoke, said, was — narrative and irregular forms'),
  section: T('The verb'),
  body: C(`## Regular and irregular forms

The simple past places an action at a point in the past. Regular forms add {-ed}; after {-e}, add {-d}: {love/loved}. A final consonant usually doubles: {stop/stopped}; consonant + {y} becomes {-ied}: {carry/carried}.

Learn irregular verbs as units: {speak/spoke}, {say/said}, {see/saw}, {come/came}, {give/gave}, {take/took}, {write/wrote}. The participle may or may not match the past: {speak/spoken}, but {say/said}.

## {BE}, {DID} and {WAS/WERE}

Past {BE} gives {was} for I/he/she/it and {were} for you/we/they. In questions and negatives, {did} carries tense: {Did he speak?}, {He did not speak}; the lexical verb returns to its base.

Genesis 1:3 preserves the contrast: {God said}, {Let there be}, {and there was light}. Say and be are irregular; let can express request or commission, and the Biblical context favors “let there be light”.

## Reported speech

Quoted speech usually keeps its original tense: {He said, “I am the light.”} After a reporting verb, however, English often backshifts: {He said that he was the light}. The shift is normal, not a mistranslation.`),
  vocab: [
    V('spoke', 'speak', 'spoke'),
    V('said', 'say', 'said'),
    V('was', 'be', 'was'),
    V('were', 'be', 'were'),
    V('saw', 'see', 'saw'),
    V('came', 'come', 'came'),
    V('gave', 'give', 'gave'),
    V('prayed', 'pray', 'prayed'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the past of say?'),
    options: [T('sayed'), T('said'), T('says'), T('sayd')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: “He ___ (not speak) yesterday.”'),
      answer: 'did not speak',
    },
    {
      kind: 'match',
      prompt: T('Match base and past.'),
      pairs: [
        { a: 'write', b: 'wrote' },
        { a: 'take', b: 'took' },
        { a: 'see', b: 'saw' },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('In “When I arrived, they ___ with God”, which form is most natural?'),
      options: [T('was'), T('were'), T('are'), T('been')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T('With did, the main verb does not take -ed: He did not go, not did not went.'),
    },
    {
      n: '2',
      text: T('Was refers to I/he/she/it; were to you/we/they. Contractions are common: I was.'),
    },
    {
      n: '3',
      text: T(
        'The simple past can stand before the present without implying a finished story: yesterday marks time; the tense alone does not.',
      ),
    },
  ],
  notes: [
    {
      label: T('KJV:'),
      text: T('KJV may omit was in the present, but retains was/were in narrative past clauses.'),
    },
  ],
  examples: [
    { text: '{God said, Let there be light}', gloss: T('God said, Let there be light') },
    { text: '{He did not speak}', gloss: T('He did not speak') },
    { text: '{They were with God}', gloss: T('They were with God') },
  ],
  tables: [
    {
      caption: T('Essential irregular forms'),
      head: [T('Base'), T('Past'), T('Participle')],
      rows: [
        ['speak', 'spoke', 'spoken'],
        ['say', 'said', 'said'],
        ['see', 'saw', 'seen'],
        ['come', 'came', 'come'],
        ['be', 'was/were', 'been'],
      ],
    },
  ],
};
