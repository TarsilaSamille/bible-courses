import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('Subjunctive and Optative'),
  subtitle: T('ἵνα λύῃ: the mood of purpose and wish'),
  section: T('The verb'),
  body: C(`## The indicative is not enough

The indicative states facts ({λύει} "he looses"). But life — and the New Testament — also speaks of plans, orders, fears and wishes: "that he may loose", "do not touch", "God willing". For that Greek has two oblique moods: the subjunctive (possibility, purpose, exhortation) and the optative (wish, remote potential). Both use the verb stem without augment — the augment, recall ch. 7, is the indicative's privilege.

## The subjunctive: long vowels

The present subjunctive lengthens the thematic vowel: {ο} becomes {ω} and {ε} becomes {η}. Active paradigm: {λύω, λύῃς, λύῃ, λύωμεν, λύητε, λύωσι(ν)}. Note the 1st sg. ({λύω}) is identical to the indicative's — context resolves it (conjunctions {ἵνα}, {ὅπως}, {ἐάν}, {μή}).

The aorist subjunctive uses the aorist stem with the same long vowels: {λύσω, λύσῃς, λύσῃ, λύσωμεν, λύσητε, λύσωσι(ν)}. The present/aorist difference in the subjunctive is aspect only (process vs act), never time: {ἵνα λύῃ} "that he may keep loosing" vs {ἵνα λύσῃ} "that he may loose (decisively)".

## Where the subjunctive appears

Four constructions cover nearly everything: purpose with {ἵνα} or {ὅπως} ({ἵνα σωθῇ} "that he may be saved"); future condition with {ἐάν} + subjunctive ({ἐὰν εἴπῃς} "if you say"); prohibition with {μή} + aorist subjunctive ({μὴ φοβηθῇς} "do not fear"); exhortation in the 1st plural ({ἄγωμεν} "let us go!", {διέλθωμεν} "let us cross over", Mark 4:35). Add the deliberative ("what shall we do?" — {τί ποιήσωμεν}, Acts 2:37).

## The optative: the mood of wishing

The optative is rare in the New Testament — about 70 occurrences — but unmistakable: it carries the diphthong {οι} in its endings ({λύοιμι, λύοις, λύοι, λύοιμεν, λύοιτε, λύοιεν}). It expresses wishes ({γένοιτο} "may it be!", Paul's horror formula: {μὴ γένοιτο} "by no means!", Rom 6:2) and remote possibility in conditions ("should anyone come…").

In reading, recognition suffices: {εἴη} (optative of {εἰμί}), {γένοιτο}, {δῴη} ("may he grant", 2 Tim 1:16), {ποιήσειεν}. They always mark solemn or emotional moments — the author switched to the mood of wishing on purpose.`),
  vocab: [
    V('ἵνα', 'ἵνα', 'in order that'),
    V('ὅπως', 'ὅπως', 'that, how'),
    V('ἐάν', 'ἐάν', 'if (condition)'),
    V('μή', 'μή', 'not (prohibition)'),
    V('λύῃς', 'λύω', 'that you may loose'),
    V('λύῃ', 'λύω', 'that he may loose'),
    V('λύσω', 'λύω', 'that I may loose (aor.)'),
    V('λύσῃ', 'λύω', 'that he may loose (aor.)'),
    V('λύοιμι', 'λύω', 'might I loose'),
    V('γένοιτο', 'γίνομαι', 'may it be!'),
    V('εἴη', 'εἰμί', 'may he be (opt.)'),
    V('σωθῇ', 'σῴζω', 'may he be saved'),
    V('φοβηθῇς', 'φοβέομαι', 'you may fear (subj.)'),
    V('ἄγωμεν', 'ἄγω', 'let us go! (exhort.)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"ἵνα λύσῃ" is in which mood and tense?'),
    options: [
      T('Present indicative'),
      T('Aorist subjunctive'),
      T('Present optative'),
      T('Aorist imperative'),
    ],
    answer: 1,
    hint: T('{ἵνα} + long vowel + aorist sigma.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the 2nd singular present subjunctive: λύ___ ("that you may loose").'),
      answer: 'ῃς',
      hint: T('Lengthened thematic vowel ε→η + ς.'),
    },
    {
      kind: 'choose',
      prompt: T('"μὴ γένοιτο" (Rom 6:2) expresses…'),
      options: [
        T('Direct command'),
        T('Wish of horror ("may it never be")'),
        T('Future condition'),
        T('Past narration'),
      ],
      answer: 1,
      hint: T('Optative + μή: the mood of wishing — rule §5.'),
    },
    {
      kind: 'match',
      prompt: T('Match each form to its mood.'),
      pairs: [
        { a: 'λύῃ', b: 'subjuntivo' },
        { a: 'λύοι', b: 'optativo' },
        { a: 'λύει', b: 'indicativo' },
        { a: 'λῦε', b: 'imperativo' },
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
        'Subjunctive = long vowels (ω/η) with no augment. Facing η/ω plus a purpose conjunction ({ἵνα}, {ἐάν}, {μή}), read subjunctive.',
      ),
    },
    {
      n: '2',
      text: T('In the subjunctive, present vs aorist = aspect (process vs act), never clock time.'),
    },
    {
      n: '3',
      text: T(
        'Prohibition: {μή} + aorist subjunctive ({μὴ φοβηθῇς}). The standard negation of commands in the NT.',
      ),
    },
    {
      n: '4',
      text: T('Exhortation: 1st pl. subjunctive with no particle ({ἄγωμεν} "let us go!").'),
    },
    {
      n: '5',
      text: T(
        'Optative = οι diphthong in endings. In the NT, nearly only wishes ({γένοιτο}, {εἴη}) and remote potentials.',
      ),
    },
  ],
  notes: [
    {
      label: T('Trap:'),
      text: T(
        '{λύω} (1st sg.) may be indicative ("I loose") or subjunctive ("that I may loose"). With no {ἵνα}, {ἐάν} or {μή} nearby, assume indicative; with them, subjunctive.',
      ),
    },
    {
      label: T('Economy:'),
      text: T(
        'Do not memorize the whole optative: memorize {γένοιτο}, {εἴη} and the οι diphthong. That resolves 90% of New Testament occurrences.',
      ),
    },
  ],
  examples: [
    { text: '{ἵνα σωθῇ}', gloss: T('that he may be saved (purpose; Matt 18:11)') },
    { text: '{ἐὰν εἴπῃς}', gloss: T('if you say (future condition)') },
    { text: '{μὴ φοβηθῇς}', gloss: T('do not fear (prohibition; Matt 1:20)') },
    { text: '{διέλθωμεν}', gloss: T('let us cross over! (exhortation; Mark 4:35)') },
    { text: '{τί ποιήσωμεν}', gloss: T('what shall we do? (deliberative; Acts 2:37)') },
    { text: '{μὴ γένοιτο}', gloss: T('by no means! (optative of horror; Rom 6:2)') },
    { text: '{εἴη τὸ ὄνομά σου}', gloss: T('may your name be… (wish; cf. Matt 6:9)') },
    { text: '{δῴη ἔλεος}', gloss: T('may he grant mercy (2 Tim 1:16)') },
    { text: '{ἵνα λύσῃ}', gloss: T('that he may loose decisively (aorist: act)') },
    { text: '{ἵνα μένῃ}', gloss: T('that it may abide (present: process; John 15:16)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Present active subjunctive of λύω'),
      head: [T('Person'), T('Form'), T('Hint')],
      rows: [
        ['1ª sg.', '{λύω}', '= indicativo; contexto decide'],
        ['2ª sg.', '{λύῃς}', 'η longo'],
        ['3ª sg.', '{λύῃ}', 'η longo'],
        ['1ª pl.', '{λύωμεν}', 'ω longo'],
        ['2ª pl.', '{λύητε}', 'η longo'],
        ['3ª pl.', '{λύωσι(ν)}', 'ω longo'],
      ],
    },
    {
      caption: T('Table 2 — Aorist active subjunctive of λύω'),
      head: [T('Person'), T('Form'), T('Meaning')],
      rows: [
        ['1ª sg.', '{λύσω}', 'que eu liberte'],
        ['2ª sg.', '{λύσῃς}', 'que tu libertes'],
        ['3ª sg.', '{λύσῃ}', 'que ele liberte'],
        ['1ª pl.', '{λύσωμεν}', 'libertemos!'],
        ['2ª pl.', '{λύσητε}', 'que vós liberteis'],
        ['3ª pl.', '{λύσωσι(ν)}', 'que eles libertem'],
      ],
    },
    {
      caption: T('Table 3 — Present active optative of λύω'),
      head: [T('Person'), T('Form'), T('Meaning')],
      rows: [
        ['1ª sg.', '{λύοιμι}', 'pudesse eu libertar'],
        ['2ª sg.', '{λύοις}', 'pudesses libertar'],
        ['3ª sg.', '{λύοι}', 'pudesse ele libertar'],
        ['1ª pl.', '{λύοιμεν}', 'pudéssemos libertar'],
        ['2ª pl.', '{λύοιτε}', 'pudésseis libertar'],
        ['3ª pl.', '{λύοιεν}', 'pudessem libertar'],
      ],
    },
  ],
};
