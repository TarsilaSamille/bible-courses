import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Infinitive and Participle'),
  subtitle: T('λύειν and λύων: the verb turned noun'),
  section: T('The verb'),
  body: C(`## Overview of nominal forms

Infinitive and participle are the verb's nominal forms: they carry verbal meaning (tense and voice) but function as nominals. The infinitive works as a noun ({λύειν} "to loose", as in "I want to loose"); the participle works as an adjective ({λύων} "the one loosing", as in "the man who looses"). This chapter gives the overview; participles earn two chapters of their own (21–22), such is their importance.

## The infinitive and its uses

The morphology is simple: present active {λύειν}, present middle {λύεσθαι}, aorist active {λῦσαι}, aorist passive {λυθῆναι}, perfect {λελυκέναι}. No person, no number — only tense (aspect) and voice.

The uses: complement of verbs like {θέλω} "to wish", {δύναμαι} "to be able", {μέλλω} "to be about to" ({θέλω λύειν} "I wish to loose"); articular infinitive as a full noun ({τὸ πιστεύειν} "believing", {τὸ ζῆν} "living"); result with {ὥστε} + infinitive ({ὥστε πιστεῦσαι} "so that they believed"); and indirect discourse ({ἔφη λῦσαι} "he said he had loosed" — ch. 25).

## The participle: the chameleon

The participle declines like an adjective (gender, number, case) and means like a verb (tense, voice). The forms of {λύω}: present active {λύων, λύουσα, λῦον}; active aorist {λύσας, λύσασα, λύσαν}; perfect {λελυκώς, λελυκυῖα, λελυκός}; middle {λυόμενος, λυσάμενος}; passive {λυθείς, λυθεῖσα, λυθέν}.

Three employments: adjectival ("the {ὁ λύων} man"), substantivized ({οἱ πιστεύοντες} "those who believe", {ὁ κλέπτων} "the thief") and adverbial — the most frequent and richest. The adverbial (circumstantial) participle needs no conjunction and compresses whole clauses: {ἀκούσας} "having heard / when he heard / because he heard". Relative time: aorist = prior to the main action; present = simultaneous.

## How to read an adverbial participle

Facing {λέγων}, {ἀκούσας}, {ἐλθών}, ask: who performs the participle's action? If it is the main clause's subject, it is a simple circumstantial — translate by context: temporal ("when…"), causal ("because…"), concessive ("although…"), conditional ("if…"), modal ("…-ing"), final ("in order to…") or attendant circumstance. {ἀποκριθεὶς εἶπεν} "answering, he said" is so common it became a narrative formula.

If the participle's subject differs from the main clause's, it comes in the genitive absolute — the construction of ch. 23. For now, fix the golden rule: the participle agrees with the noun it refers to, and its case points to the action's owner.`),
  vocab: [
    V('λύειν', 'λύω', 'to loose (inf.)'),
    V('λύεσθαι', 'λύω', 'to loose oneself (inf.)'),
    V('λῦσαι', 'λύω', 'to have loosed (aor. inf.)'),
    V('λυθῆναι', 'λύω', 'to have been loosed'),
    V('λελυκέναι', 'λύω', 'to have loosed (perf.)'),
    V('λύων', 'λύω', 'the one loosing'),
    V('λύσας', 'λύω', 'having loosed'),
    V('λυθείς', 'λύω', 'having been loosed'),
    V('πιστεύων', 'πιστεύω', 'whoever believes'),
    V('λέγων', 'λέγω', 'saying'),
    V('ἀκούσας', 'ἀκούω', 'having heard'),
    V('ἐλθών', 'ἔρχομαι', 'having come'),
    V('θέλω', 'θέλω', 'to wish'),
    V('δύναμαι', 'δύναμαι', 'to be able'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In "ὁ πιστεύων" (John 3:16), the participle is…'),
    options: [
      T('Substantivized: "whoever believes"'),
      T('Temporal circumstantial'),
      T('Genitive absolute'),
      T('Complement of θέλω'),
    ],
    answer: 0,
    hint: T('Article + participle with no noun = noun — rule §5.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the active aorist infinitive: λῦ___ ("to have loosed").'),
      answer: 'σαι',
      hint: T('1st aorist: stem + σα + ι.'),
    },
    {
      kind: 'choose',
      prompt: T('"ἀκούσας ἐθαύμασεν" (Matt 8:10): the aorist participle signals action…'),
      options: [
        T('Prior to the main one ("having heard")'),
        T('Simultaneous ("hearing")'),
        T('Later ("to hear")'),
        T('Habitual ("he used to hear")'),
      ],
      answer: 0,
      hint: T('Relative time: aorist = prior — rule §3.'),
    },
    {
      kind: 'match',
      prompt: T('Match each form to its class.'),
      pairs: [
        { a: 'λύειν', b: 'infinitivo' },
        { a: 'λύων', b: 'particípio' },
        { a: 'λύεις', b: 'indicativo' },
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
        'Infinitive = verb-noun (no person/number). Participle = verb-adjective (with gender/number/case).',
      ),
    },
    {
      n: '2',
      text: T(
        'Articular infinitive is a full noun: {τὸ θέλειν} "willing", {τοῦ πιστεύειν} "of believing".',
      ),
    },
    {
      n: '3',
      text: T(
        'Relative time of participles: aorist = prior to the main action; present = simultaneous; perfect = resulting state.',
      ),
    },
    {
      n: '4',
      text: T(
        "The participle agrees with the action's owner. If the owner is not the clause subject, the genitive absolute follows (ch. 23).",
      ),
    },
    {
      n: '5',
      text: T(
        'Substantivized participle with article = "the one who…": {ὁ πιστεύων} "whoever believes" (John 3:16).',
      ),
    },
  ],
  notes: [
    {
      label: T('Preview:'),
      text: T(
        'Chapters 21–22 dissect each participle with full paradigms and the eight circumstantial uses. Here, recognizing the forms and the action-owner logic suffices.',
      ),
    },
    {
      label: T('In the text:'),
      text: T(
        '{λέγων} occurs over 300 times in the New Testament — the narrative transition word par excellence. Never translate it mechanically as "saying": context demands "when he said", "because he said", "in saying".',
      ),
    },
  ],
  examples: [
    { text: '{θέλω λύειν}', gloss: T('I wish to loose (complement)') },
    { text: '{τὸ πιστεύειν}', gloss: T('believing (substantivized infinitive)') },
    { text: '{ὥστε πιστεῦσαι}', gloss: T('so that they believed (result)') },
    { text: '{ὁ πιστεύων}', gloss: T('whoever believes (John 3:16)') },
    { text: '{οἱ πιστεύοντες}', gloss: T('those who believe (substantivized plural)') },
    { text: '{λέγων αὐτοῖς}', gloss: T('saying to them (modal circumstantial)') },
    { text: '{ἀκούσας ἐθαύμασεν}', gloss: T('having heard, he marveled (prior; Matt 8:10)') },
    { text: '{ἀποκριθεὶς εἶπεν}', gloss: T('answering, he said (narrative formula)') },
    { text: '{ἐλθὼν προσκύνησεν}', gloss: T('having come, he worshiped (Matt 8:2)') },
    { text: '{ὁ κλέπτων}', gloss: T('the thief, lit. "the one stealing" (Eph 4:28)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Infinitives of λύω'),
      head: [T('Tense/Voice'), T('Form'), T('Meaning')],
      rows: [
        ['Presente ativo', '{λύειν}', 'libertar'],
        ['Presente médio', '{λύεσθαι}', 'libertar-se'],
        ['Aoristo ativo', '{λῦσαι}', 'ter libertado'],
        ['Aoristo médio', 'λύσασθαι', 'ter-se libertado'],
        ['Aoristo passivo', '{λυθῆναι}', 'ter sido libertado'],
        ['Perfeito ativo', '{λελυκέναι}', 'haver libertado'],
      ],
    },
    {
      caption: T('Table 2 — Participles of λύω (nominative)'),
      head: [T('Tense'), T('Active'), T('Middle'), T('Passive')],
      rows: [
        ['Presente', '{λύων, λύουσα, λῦον}', 'λυόμενος, -η, -ον', '—'],
        ['Aoristo', '{λύσας, λύσασα, λύσαν}', 'λυσάμενος, -η, -ον', '{λυθείς, λυθεῖσα, λυθέν}'],
        ['Perfeito', '{λελυκώς, λελυκυῖα, λελυκός}', 'λελυμένος, -η, -ον', '—'],
      ],
    },
  ],
};
