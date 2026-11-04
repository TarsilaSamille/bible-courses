import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('Reading: 1 John 1:1-4'),
  subtitle: T('ὃ ἦν ἀπ᾽ ἀρχῆς — the spiral prologue'),
  section: T('Readings'),
  body: C(`## A four-verse period

1 John's prologue is a single syntactic breath: the main verb ({ἀπαγγέλλομεν} "we proclaim") only arrives in v. 3, after a cascade of relatives. John writes in spirals — repeating, resuming, deepening. Following the spiral is this chapter's exercise.

{Ὃ ἦν ἀπ᾽ ἀρχῆς, ὃ ἀκηκόαμεν, ὃ ἑωράκαμεν τοῖς ὀφθαλμοῖς ἡμῶν, ὃ ἐθεασάμεθα καὶ αἱ χεῖρες ἡμῶν ἐψηλάφησαν} — four neuter relatives ({ὃ} "that which") stacking testimony: was (imperfect {ἦν}), we have heard (perfect {ἀκηκόαμεν}), we have seen (perfect {ἑωράκαμεν}), we beheld (aorist {ἐθεασάμεθα}), our hands touched (aorist {ἐψηλάφησαν}). From general to tactile: being, hearing, seeing, beholding, touching.

{περὶ τοῦ λόγου τῆς ζωῆς} — "concerning the Word of life": double genitive governed by {περί} + genitive. The {λόγος} of John 1:1 returns, now "of life".

## Manifestation and proclamation

{καὶ ἡ ζωὴ ἐφανερώθη} — "and the life was manifested": aorist passive (ch. 19), the incarnation event in a single verb. Follows the apostolic testimony triad: {ἑωράκαμεν καὶ μαρτυροῦμεν καὶ ἀπαγγέλλομεν} "we have seen and we witness and we proclaim" — perfect (accumulated experience), present (ongoing witness), present (ongoing proclamation).

{τὴν ζωὴν τὴν αἰώνιον ἥτις ἦν πρὸς τὸν πατέρα} — "the eternal life, which was with the Father": compound relative {ἥτις} ("which", emphatic) + imperfect + {πρός} + accusative ("toward", face-to-face relation — the same {πρός} as John 1:1, {πρὸς τὸν θεόν}).

## That you may have fellowship

{ἵνα καὶ ὑμεῖς κοινωνίαν ἔχητε μεθ᾽ ἡμῶν} — "that you may have fellowship with us": {ἵνα} + present subjunctive (ongoing process, ch. 8), {κοινωνίαν} "fellowship, sharing" as object, {μεθ᾽ ἡμῶν} "with us". Proclamation's purpose is fellowship — unfolding further: {μετὰ τοῦ πατρὸς καὶ μετὰ τοῦ υἱοῦ αὐτοῦ} "with the Father and with his Son".

{καὶ ταῦτα γράφομεν ἡμεῖς ἵνα ἡ χαρὰ ἡμῶν ᾖ πεπληρωμένη} — "and these things we write to you, that our joy may be complete": {ᾖ} (subjunctive of {εἰμί}!) + perfect participle {πεπληρωμένη} forming a periphrasis ("may stand completed"). The prologue closes with joy in resulting state — perfect even in feeling.`),
  vocab: [
    V('ἀκηκόαμεν', 'ἀκούω', 'we have heard'),
    V('ἑωράκαμεν', 'ὁράω', 'we have seen'),
    V('ἐθεασάμεθα', 'θεάομαι', 'we beheld'),
    V('ἐψηλάφησαν', 'ψηλαφάω', 'they touched'),
    V('ἐφανερώθη', 'φανερόω', 'was manifested'),
    V('μαρτυροῦμεν', 'μαρτυρέω', 'we witness'),
    V('ἀπαγγέλλομεν', 'ἀπαγγέλλω', 'we proclaim'),
    V('κοινωνία', 'κοινωνία', 'fellowship'),
    V('ἔχητε', 'ἔχω', 'you may have'),
    V('ᾖ', 'εἰμί', 'may be (subj.)'),
    V('πεπληρωμένη', 'πληρόω', 'completed'),
    V('ὀφθαλμός', 'ὀφθαλμός', 'eye'),
    V('ἀρχή', 'ἀρχή', 'beginning'),
    V('αἰώνιος', 'αἰώνιος', 'eternal'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"ἀκηκόαμεν" is perfect (not present) because…'),
    options: [
      T('It reduplicates (ἀκ-ηκο-) with accumulated-experience sense'),
      T('It ends in -μεν'),
      T('It follows ὅ'),
      T('It is a contract verb'),
    ],
    answer: 0,
    hint: T('Reduplication + experience = perfect — rule §2.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the prologue\'s main verb: ἀπαγγέλλο___ ("we proclaim", 1st pl.).'),
      answer: 'μεν',
      hint: T('Present 1st plural: -μεν.'),
    },
    {
      kind: 'choose',
      prompt: T('"ᾖ πεπληρωμένη" is…'),
      options: [
        T('Periphrasis: εἰμί subjunctive + perfect participle'),
        T('Simple aorist passive'),
        T('Present imperative'),
        T('Articular infinitive'),
      ],
      answer: 0,
      hint: T('Two verbs, one desired-state sense — rule §3.'),
    },
    {
      kind: 'match',
      prompt: T('Match each form to its tense.'),
      pairs: [
        { a: 'ἦν', b: 'imperfeito' },
        { a: 'ἑωράκαμεν', b: 'perfeito' },
        { a: 'ἐθεασάμεθα', b: 'aoristo' },
        { a: 'ἔχητε', b: 'subjuntivo' },
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
        'Continuous reading: find the main verb first ({ἀπαγγέλλομεν}, v. 3); everything else orbits it.',
      ),
    },
    {
      n: '2',
      text: T(
        'Perception perfects ({ἀκηκόαμεν}, {ἑωράκαμεν}) = accumulated experience authorizing testimony.',
      ),
    },
    {
      n: '3',
      text: T(
        '{ᾖ} + perfect participle forms a periphrasis of desired state ("may stand completed").',
      ),
    },
    {
      n: '4',
      text: T(
        '{πρός} + accusative between persons = face-to-face relation ({πρὸς τὸν πατέρα}, {πρὸς τὸν θεόν}).',
      ),
    },
  ],
  notes: [
    {
      label: T('Relative attraction:'),
      text: T(
        '{ἥτις} is feminine by attraction to {ζωήν} ("the life, which…"), though the logical antecedent is neuter. John prefers sense-agreement to mechanics — ch. 26, attraction note.',
      ),
    },
    {
      label: T('ἀπ᾽ ἀρχῆς:'),
      text: T(
        '{ἀπ᾽ ἀρχῆς} "from the beginning" echoes John 1:1\'s {ἐν ἀρχῇ} with a different preposition: John links epistle to Gospel in the first sentence. {ἀπό} + genitive marks origin in time.',
      ),
    },
  ],
  examples: [
    { text: '{ὃ ἦν ἀπ᾽ ἀρχῆς}', gloss: T('that which was from the beginning') },
    { text: '{ὃ ἀκηκόαμεν}', gloss: T('that which we have heard (perfect)') },
    { text: '{περὶ τοῦ λόγου}', gloss: T('concerning the Word (double genitive)') },
    { text: '{ἡ ζωὴ ἐφανερώθη}', gloss: T('the life was manifested (aorist passive)') },
    { text: '{μαρτυροῦμεν καὶ ἀπαγγέλλομεν}', gloss: T('we witness and proclaim (presents)') },
    { text: '{ἥτις ἦν πρὸς τὸν πατέρα}', gloss: T('which was with the Father') },
    { text: '{κοινωνίαν ἔχητε}', gloss: T('you may have fellowship (subjunctive)') },
    { text: '{μεθ᾽ ἡμῶν}', gloss: T('with us (elision: μετὰ → μεθ᾽)') },
    { text: '{ᾖ πεπληρωμένη}', gloss: T('may stand complete (periphrasis)') },
    { text: '{τοῖς ὀφθαλμοῖς ἡμῶν}', gloss: T('with our eyes (instrumental dative)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Testimony tenses (1 John 1:1)'),
      head: [T('Form'), T('Tense'), T('Nuance')],
      rows: [
        ['{ἦν}', 'imperfeito', 'era (existência contínua)'],
        ['{ἀκηκόαμεν}', 'perfeito', 'temos ouvido (experiência)'],
        ['{ἑωράκαμεν}', 'perfeito', 'temos visto (experiência)'],
        ['{ἐθεασάμεθα}', 'aoristo', 'contemplamos (ato)'],
        ['{ἐψηλάφησαν}', 'aoristo', 'apalparam (ato)'],
      ],
    },
    {
      caption: T('Table 2 — Prologue relatives'),
      head: [T('Form'), T('Analysis'), T('Function')],
      rows: [
        ['{ὃ ἦν}', 'neutro sg.', 'o que era'],
        ['{ὃ ἀκηκόαμεν}', 'neutro sg.', 'o que ouvimos'],
        ['{ἥτις ἦν}', 'fem. (atração à ζωή)', 'a qual estava'],
        ['{ἵνα … ἔχητε}', 'subjuntivo', 'para que tenhais'],
      ],
    },
  ],
};
