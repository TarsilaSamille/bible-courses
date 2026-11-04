import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  title: T('Perfect middle and future passive'),
  subtitle: T('λέλυμαι, λυθήσομαι: the complete passive system'),
  section: T('The verb'),
  body: C(`## The middle-passive perfect

The middle perfect uses reduplication + middle endings directly, with no connective: {λέλυμαι, λέλυσαι, λέλυται, λελύμεθα, λέλυσθε, λέλυνται}. Sense oscillates between middle ("I have loosed for myself") and passive ("I stand loosed") — and in the New Testament the passive dominates: {γέγραπται} "it stands written", {πεπλήρωται} "it stands fulfilled", {ἡτοίμασται} "it stands prepared" (Matt 22:8).

Watch the phonetics: before {μ} and {τ}, stops assimilate — {γραφ-} + {μαι} yields {γέγραμμαι} (φ+μ=μμ). These assimilations startle at first sight but follow a fixed table.

## The future passive

The future passive joins {θησ} to the stem + middle endings: {λυθήσομαι, λυθήσῃ, λυθήσεται, λυθησόμεθα, λυθήσεσθε, λυθήσονται} "I shall be loosed…". It pairs perfectly with the aorist passive: {ἐλύθην} (yesterday) vs {λυθήσομαι} (tomorrow).

In the text: {σωθήσῃ} "you shall be saved" (Rom 10:9), {δοθήσεται} "it shall be given" (Matt 7:7, {αἰτεῖτε καὶ δοθήσεται ὑμῖν}), {κηρυχθήσεται} "it shall be preached" (Matt 24:14). Prophecies and promises speak future passive: the agent (God) stays implicit in the so-called divine passive.

## The divine passive and deponents

Many New Testament passives lack a human agent because the agent is God — the passivum divinum: {ἐφοβήθησαν} "they feared" (God acting), {ἐδικαιώθησαν} "they were justified" (Rom 5:1), {ἠγαπημένοι} "beloved" (participle, Rom 1:7). Supplying "by God" where Greek stays silent is legitimate exegesis — as long as conscious.

Deponents close the system: verbs with passive/middle form and active sense in every tense — {ἀποκρίνομαι} ({ἀπεκρίθη} "he answered"), {φοβέομαι} ({ἐφοβήθην} "he feared"), {γίνομαι} ({ἐγενόμην} "I became"), {πορεύομαι} ({ἐπορεύθην} "he went"), {δέχομαι} ({ἐδεξάμην} "he received"), {ἀρνέομαι} ({ἠρνησάμην} "he denied"). With deponents, never translate passive: the form deceives, the lexicon decides.`),
  vocab: [
    V('λέλυμαι', 'λύω', 'I stand loosed'),
    V('λέλυται', 'λύω', 'it stands loosed'),
    V('λέλυνται', 'λύω', 'they stand loosed'),
    V('λυθήσομαι', 'λύω', 'I shall be loosed'),
    V('λυθήσεται', 'λύω', 'he shall be loosed'),
    V('σωθήσῃ', 'σῴζω', 'you shall be saved'),
    V('δοθήσεται', 'δίδωμι', 'it shall be given'),
    V('ἀπεκρίθη', 'ἀποκρίνομαι', 'he answered'),
    V('ἐφοβήθη', 'φοβέομαι', 'he feared'),
    V('ἐγενόμην', 'γίνομαι', 'I became'),
    V('ἐπορεύθη', 'πορεύομαι', 'he went'),
    V('ἐδεξάμην', 'δέχομαι', 'I received'),
    V('ἠρνησάμην', 'ἀρνέομαι', 'I denied'),
    V('γέγραμμαι', 'γράφω', 'I have written (assim.)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"ἀπεκρίθη" translates "he answered" (not "he was answered") because…'),
    options: [
      T('ἀποκρίνομαι is deponent: passive form, active sense'),
      T('The ὑπό agent is missing'),
      T('It is 2nd aorist, not passive'),
      T('The context is future'),
    ],
    answer: 0,
    hint: T('Deponents never translate passive — rule §4.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the 3rd sg. future passive: λυθήσε___ ("he shall be loosed").'),
      answer: 'ται',
      hint: T('3rd sg. middle ending: -ται.'),
    },
    {
      kind: 'choose',
      prompt: T('"ἐδικαιώθησαν" (Rom 5:1) illustrates the…'),
      options: [
        T('Divine passive (agent: God, implicit)'),
        T('Active 2nd aorist'),
        T('Middle perfect'),
        T('Contracted future'),
      ],
      answer: 0,
      hint: T('Who justifies? God — divine passive, rule §3.'),
    },
    {
      kind: 'match',
      prompt: T('Match each form to its analysis.'),
      pairs: [
        { a: 'λυθήσομαι', b: 'fut. pass. 1ª sg.' },
        { a: 'λέλυνται', b: 'perf. méd. 3ª pl.' },
        { a: 'ἐπορεύθη', b: 'depoente (foi)' },
        { a: 'σωθήσῃ', b: 'fut. pass. 2ª sg.' },
      ],
      answer: [
        { 0: '0', 1: '-', 2: '0' },
        { 0: '1', 1: '-', 2: '1' },
        { 0: '2', 1: '-', 2: '2' },
        { 0: '3', 1: '-', 2: '3' },
      ],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Middle perfect: reduplication + middle endings, no connective. In the NT, nearly always passive in sense.',
      ),
    },
    {
      n: '2',
      text: T(
        "Future passive = stem + θησ + middles ({λυθήσομαι}). The aorist passive's tomorrow pair.",
      ),
    },
    {
      n: '3',
      text: T(
        'Passive with no human agent = implicit divine agent ({ἐδικαιώθησαν}). Translate "by God" consciously.',
      ),
    },
    {
      n: '4',
      text: T(
        'Deponent: passive/middle form, always active sense. Never translate passive ({ἀπεκρίθη} = "he answered").',
      ),
    },
    {
      n: '5',
      text: T('Assimilation before μ/τ: labial + μ = μμ ({γέγραμμαι}); dental + τ drops.'),
    },
  ],
  notes: [
    {
      label: T('Complete system:'),
      text: T(
        'With this chapter, the regular indicative is complete: present, imperfect, future, aorist (1st, 2nd, passive), perfect and pluperfect, in all three voices. What remains (chs. 21–27) is syntax — using what you know.',
      ),
    },
    {
      label: T('θ chain:'),
      text: T(
        '{λυ-θ-ή-σο-μαι}: stem + θ (passive) + η (aorist) + σ (future) + middle ending. Each consonant tells a story — read verbs as archaeology.',
      ),
    },
  ],
  examples: [
    { text: '{σωθήσῃ}', gloss: T('you shall be saved (future passive; Rom 10:9)') },
    { text: '{δοθήσεται ὑμῖν}', gloss: T('it shall be given to you (Matt 7:7)') },
    { text: '{κηρυχθήσεται}', gloss: T('it shall be preached (Matt 24:14)') },
    { text: '{ἀπεκρίθη Ἰησοῦς}', gloss: T('Jesus answered (deponent; John 18:20)') },
    { text: '{ἐφοβήθησαν φόβον}', gloss: T('they feared greatly (Mark 4:41)') },
    { text: '{ἐγενόμην}', gloss: T('I became (deponent; 1 Cor 9:20)') },
    { text: '{ἐπορεύθη}', gloss: T('he went (Luke 1:39)') },
    { text: '{ἠρνήσατο}', gloss: T('he denied (deponent; Matt 26:70)') },
    { text: '{γέγραμμαι}', gloss: T('I have written (assimilation φ+μ=μμ)') },
    { text: '{ἠγαπημένοι}', gloss: T('beloved (perfect participle; Rom 1:7)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Middle-passive perfect of λύω'),
      head: [T('Person'), T('Form'), T('Translation')],
      rows: [
        ['1ª sg.', '{λέλυμαι}', 'estou liberto'],
        ['2ª sg.', '{λέλυσαι}', 'estás liberto'],
        ['3ª sg.', '{λέλυται}', 'está liberto'],
        ['1ª pl.', '{λελύμεθα}', 'estamos libertos'],
        ['2ª pl.', '{λέλυσθε}', 'estais libertos'],
        ['3ª pl.', '{λέλυνται}', 'estão libertos'],
      ],
    },
    {
      caption: T('Table 2 — Future passive of λύω'),
      head: [T('Person'), T('Form'), T('Translation')],
      rows: [
        ['1ª sg.', '{λυθήσομαι}', 'serei libertado'],
        ['2ª sg.', '{λυθήσῃ}', 'serás libertado'],
        ['3ª sg.', '{λυθήσεται}', 'será libertado'],
        ['1ª pl.', '{λυθησόμεθα}', 'seremos libertados'],
        ['2ª pl.', '{λυθήσεσθε}', 'sereis libertados'],
        ['3ª pl.', '{λυθήσονται}', 'serão libertados'],
      ],
    },
    {
      caption: T('Table 3 — Essential deponents'),
      head: [T('Verb'), T('Aorist'), T('Active meaning')],
      rows: [
        ['{ἀποκρίνομαι}', '{ἀπεκρίθη}', 'respondeu'],
        ['{φοβέομαι}', '{ἐφοβήθη}', 'temeu'],
        ['{γίνομαι}', '{ἐγενόμην}', 'tornou-se'],
        ['{πορεύομαι}', '{ἐπορεύθη}', 'foi'],
        ['{δέχομαι}', '{ἐδέξατο}', 'recebeu'],
        ['{ἀρνέομαι}', '{ἠρνήσατο}', 'negou'],
      ],
    },
  ],
};
