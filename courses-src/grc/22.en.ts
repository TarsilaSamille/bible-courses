import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  title: T('Present participle'),
  subtitle: T('λύων, λύουσα, λῦον: the declining verb'),
  section: T('The verb'),
  body: C(`## The New Testament's most-used form

The present participle is the New Testament's most frequent verb form after the indicative: {λέγων}, {πιστεύων}, {ἀκούοντες}, {ὤν}. It uses the present stem and marks action simultaneous with the main verb — "saying", "believing", "being". Whoever masters this chapter reads half the text's subordinate clauses.

## Morphology: two models

The active participle follows the 3rd declension in masculine and neuter, the 1st in feminine. Stem {λυοντ-}: nominative {λύων} (masc.), {λύουσα} (fem.), {λῦον} (neut.); genitive {λύοντος}, {λυούσης}, {λύοντος}; plural {λύοντες}, {λύουσαι}, {λύοντα}. The stem's {-ντ-} shows in every case but the masculine nominative singular — ch. 13's golden rule applied to verbs.

The middle participle is tame: it declines as a 2-1-2 adjective (ch. 4): {λυόμενος, λυομένη, λυόμενον}, genitive {λυομένου, λυομένης, λυομένου}. Deponent verbs use it actively: {ἐρχόμενος} "coming", {πορευόμενος} "going", {ἀποκρινόμενος} "answering".

## Three employments (with eight circumstantial uses)

First, adjectival: it agrees with and qualifies the noun — {ὁ λόγος ὁ μένων} "the word abiding" (John 5:38). Second, substantivized with the article: {ὁ πιστεύων} "whoever believes", {οἱ ἀκούοντες} "those who hear", {τὰ ὄντα} "existing things".

Third, the circumstantial (adverbial) — richest of all. With no conjunction, the participle compresses a whole clause, and context tells which: temporal ({πορευόμενοι ἐκήρυσσον} "going, they preached" = "as they went"), causal ({εἰδὼς ὅτι} "knowing that" = "because he knew"), concessive ({ὢν υἱός} "being Son, yet…", Heb 5:8), conditional, modal ({χαίροντες} "joyfully"), final, instrumental, and attendant circumstance ({ἦλθεν κηρύσσων} "he came preaching").

## The simultaneous present

Relative-time rule: the present participle is simultaneous with the main verb, whatever it is. {βλέποντες οὐ βλέπουσιν} "seeing, they do not see" (Matt 13:13, present + present); {πιστεύων ἔχει} "whoever believes has" (John 3:36, believing and having simultaneous). For prior action Greek uses the aorist (ch. 22) — the participle's tense choice is information, not ornament.`),
  vocab: [
    V('λύων', 'λύω', 'the one loosing'),
    V('λύουσα', 'λύω', 'she loosing'),
    V('λῦον', 'λύω', 'the thing loosing'),
    V('λύοντος', 'λύω', 'of the one loosing'),
    V('λύοντες', 'λύω', 'those loosing'),
    V('λυόμενος', 'λύω', 'loosing oneself'),
    V('πιστεύων', 'πιστεύω', 'whoever believes'),
    V('ἀκούοντες', 'ἀκούω', 'those who hear'),
    V('λέγων', 'λέγω', 'saying'),
    V('ὤν', 'εἰμί', 'being'),
    V('ὄντος', 'εἰμί', 'of being'),
    V('ἐρχόμενος', 'ἔρχομαι', 'coming'),
    V('μένων', 'μένω', 'abiding'),
    V('κηρύσσων', 'κηρύσσω', 'preaching'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"λύοντος" is in which case, and why?'),
    options: [
      T('Genitive (-ντ- stem, 3rd declension)'),
      T('Dative (iota subscript)'),
      T('Accusative plural'),
      T('Feminine nominative'),
    ],
    answer: 0,
    hint: T("The stem's -ντ- shows outside the nominative — rule §1."),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the feminine nominative: λύου___ ("she loosing").'),
      answer: 'σα',
      hint: T('1st-declension feminine: -σα.'),
    },
    {
      kind: 'choose',
      prompt: T('"ἦλθεν κηρύσσων" (Mark 1:39): the participle is…'),
      options: [
        T('Attendant circumstance ("he came preaching")'),
        T('Genitive absolute'),
        T('Substantivized'),
        T('Object predicate'),
      ],
      answer: 0,
      hint: T('Same subject, simultaneous accompanying action — rule §4.'),
    },
    {
      kind: 'match',
      prompt: T('Match each form to its analysis.'),
      pairs: [
        { a: 'λύοντος', b: 'gen. masc.' },
        { a: 'λύουσα', b: 'nom. fem.' },
        { a: 'λυόμενον', b: 'ac. médio' },
        { a: 'ὄντα', b: 'ac. de εἰμί' },
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
        'Present active participle: stem + -ντ- (3rd declension masc./neut., 1st fem.). -ντ- vanishes only in masc. sg. nominative.',
      ),
    },
    {
      n: '2',
      text: T(
        'Middle participle: tame 2-1-2 ({-μενος, -μενη, -μενον}). Deponents use it actively.',
      ),
    },
    {
      n: '3',
      text: T('Relative time: present = simultaneous with the main verb, whatever its tense.'),
    },
    {
      n: '4',
      text: T(
        'Three employments: adjectival, substantivized (with article) and circumstantial (eight uses, no conjunction).',
      ),
    },
    {
      n: '5',
      text: T(
        "The participle agrees with the action's owner in gender, number and case — the clue to its subject.",
      ),
    },
  ],
  notes: [
    {
      label: T('Genitive absolute:'),
      text: T(
        'If the participle\'s action-owner is NOT the clause subject, it comes in the genitive absolute — next chapter\'s construction. {λύοντος αὐτοῦ} "while he was loosing".',
      ),
    },
    {
      label: T('Ubiquitous ὤν:'),
      text: T(
        '{εἰμί}\'s participle ({ὤν, οὖσα, ὄν}, gen. {ὄντος}) fills formulas like {τὰ ὄντα} "existing things" (Rom 4:17) and {ὁ ὢν} "he who is" (Rev 1:4). Memorize the whole paradigm.',
      ),
    },
  ],
  examples: [
    { text: '{ὁ πιστεύων}', gloss: T('whoever believes (substantivized; John 3:16)') },
    { text: '{οἱ ἀκούοντες}', gloss: T('those who hear (substantivized plural)') },
    { text: '{ἦλθεν κηρύσσων}', gloss: T('he came preaching (attendant; Mark 1:39)') },
    { text: '{βλέποντες οὐ βλέπουσιν}', gloss: T('seeing, they do not see (Matt 13:13)') },
    { text: '{πιστεύων ἔχει}', gloss: T('whoever believes has (simultaneous; John 3:36)') },
    { text: '{ὢν υἱός}', gloss: T('being Son (concessive; Heb 5:8)') },
    { text: '{ὁ λόγος ὁ μένων}', gloss: T('the abiding word (adjectival; John 5:38)') },
    { text: '{πορευόμενοι ἐκήρυσσον}', gloss: T('going, they preached (temporal; Mark 16:20)') },
    { text: '{λέγων αὐτοῖς}', gloss: T('saying to them (narrative transition)') },
    { text: '{ἐρχόμενος πρὸς αὐτόν}', gloss: T('coming to him (deponent; John 3:2)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Present active participle of λύω'),
      head: [T('Case'), T('Masc.'), T('Fem.'), T('Neuter')],
      rows: [
        [T('Nominative'), '{λύων}', '{λύουσα}', '{λῦον}'],
        [T('Genitive'), '{λύοντος}', 'λυούσης', '{λύοντος}'],
        [T('Dative'), 'λύοντι', 'λυούσῃ', 'λύοντι'],
        [T('Accusative'), 'λύοντα', 'λύουσαν', '{λῦον}'],
      ],
    },
    {
      caption: T('Table 2 — Present middle participle of λύω'),
      head: [T('Case'), T('Masc.'), T('Fem.'), T('Neuter')],
      rows: [
        [T('Nominative'), '{λυόμενος}', '{λυομένη}', '{λυόμενον}'],
        [T('Genitive'), 'λυομένου', 'λυομένης', 'λυομένου'],
        [T('Accusative'), 'λυόμενον', 'λυομένην', '{λυόμενον}'],
      ],
    },
  ],
};
