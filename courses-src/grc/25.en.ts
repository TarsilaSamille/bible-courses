import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  title: T('Conditionals'),
  subtitle: T('εἰ, ἐάν, ἄν: three degrees of "if"'),
  section: T('Syntax'),
  body: C(`## Three possible worlds

Greek distinguishes three degrees of condition, each with its own particle and mood. The real condition ({εἰ} + indicative) treats the case as fact or open hypothesis: {εἰ πιστεύεις} "if you believe (and it is fact…)". The eventual ({ἐάν} + subjunctive) projects an uncertain future: {ἐὰν ἀγαπᾶτέ με} "if you love me (whenever you do)" (John 14:15). The unreal ({εἰ} + past + {ἄν}) mourns the opposite of fact: {εἰ ἤδειτε} "if you knew (but you don't)".

Portuguese helps: the Greek eventual matches our future subjunctive ("se confessarmos", 1 John 1:9, {ἐὰν ὁμολογῶμεν}) — Greek keeps alive the form Portuguese preserves. And the unreal uses imperfect/aorist like our "if you knew…".

## Real, eventual, unreal

Real: {εἰ} + any indicative tense, in protasis and apodosis as sense demands. {εἰ θεὸς ὑπὲρ ἡμῶν} "if God is for us…" (Rom 8:31) — the apostle assumes the fact and draws the consequence ({τίς καθ᾽ ἡμῶν;} "who against us?"). John 11:40 mixes worlds on purpose: {οὐκ εἶπόν σοι ὅτι ἐὰν πιστεύσῃς;} "did I not tell you that if you believe…?".

Eventual: {ἐάν} (= {εἰ} + {ἄν}) + subjunctive; apodosis in future or imperative. Discipleship's condition: {ἐὰν περιπατῶμεν ἐν τῷ φωτί} "if we walk in the light…" (1 John 1:7), {ἐὰν ἀγαπᾶτέ με, τὰς ἐντολάς μου τηρήσετε} "if you love me, you will keep my commandments" (John 14:15).

Unreal: {εἰ} + imperfect/aorist + {ἄν} on both sides. Present unreal ({εἰ ἦτε} "if you were…", John 8:39) and past unreal ({εἰ ᾔδειτε} "if you had known…"). {ἄν} marks the unfulfillable — without it, the sentence returns to the real world.

## The fourth class and wishes

Remains the remote potential condition ({εἰ} + optative … {ἄν} + optative: "should you by chance…"), vanishingly rare in the New Testament — recognizing the optative (ch. 8) suffices. And disguised conditional commands: {ὃς ἐὰν θέλῃ} "whoever wishes" (Mark 8:34, relative + {ἐάν} = generic eventual), {ὅστις} + subjunctive in inverted beatitudes.`),
  vocab: [
    V('ἐάν', 'ἐάν', 'if (eventual)'),
    V('εἰ', 'εἰ', 'if (real)'),
    V('ἄν', 'ἄν', 'potential particle'),
    V('ὁμολογῶμεν', 'ὁμολογέω', 'we confess'),
    V('περιπατῶμεν', 'περιπατέω', 'we walk'),
    V('ἀγαπᾶτε', 'ἀγαπάω', 'you love'),
    V('θέλῃς', 'θέλω', 'you wish'),
    V('εἴπῃς', 'λέγω', 'you say'),
    V('νίψω', 'νίπτω', 'I wash'),
    V('ᾔδειτε', 'οἶδα', 'you had known'),
    V('ὑπέρ', 'ὑπέρ', 'for, on behalf of'),
    V('φῶς', 'φῶς', 'light'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"ἐὰν ὁμολογῶμεν" (1 John 1:9) is a … condition'),
    options: [
      T('Eventual (ἐάν + subjunctive)'),
      T('Real (εἰ + indicative)'),
      T('Past unreal'),
      T('Remote potential'),
    ],
    answer: 0,
    hint: T('ἐάν + subjunctive = eventual — rule §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete the real-condition particle: ___ θεὸς ὑπὲρ ἡμῶν ("if God is for us", Rom 8:31).',
      ),
      answer: 'εἰ',
      hint: T('Real = εἰ + indicative.'),
    },
    {
      kind: 'choose',
      prompt: T('"εἰ ἤδειτε" (without ἄν) would be…'),
      options: [
        T('Past fact, not regret ("if you knew [as fact]")'),
        T('Unreal just the same'),
        T('Future eventual'),
        T('Direct command'),
      ],
      answer: 0,
      hint: T('No ἄν, no unreal — rule §4.'),
    },
    {
      kind: 'match',
      prompt: T('Match each sentence to its class.'),
      pairs: [
        { a: 'εἰ πιστεύεις', b: 'real' },
        { a: 'ἐὰν πιστεύσῃς', b: 'eventual' },
        { a: 'εἰ ᾔδεις ἄν', b: 'irreal' },
        { a: 'ὃς ἐὰν θέλῃ', b: 'eventual genérica' },
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
        'Real = εἰ + indicative (fact or open hypothesis). Eventual = ἐάν + subjunctive (uncertain future). Unreal = εἰ + past + ἄν.',
      ),
    },
    {
      n: '2',
      text: T(
        '{ἐάν} = fused εἰ + ἄν. Facing ἐάν, expect subjunctive; facing εἰ + indicative, fact.',
      ),
    },
    {
      n: '3',
      text: T(
        'The eventual matches the Portuguese future subjunctive ("se andarmos"). Portuguese preserves what Greek uses.',
      ),
    },
    { n: '4', text: T('No ἄν, no unreal: εἰ + past without ἄν describes past fact, not regret.') },
  ],
  notes: [
    {
      label: T('ἐὰν vs ἄν:'),
      text: T(
        '{ἐάν} (with ε) opens the condition; lone {ἄν} marks potentiality and unreality inside the clause. {ἐὰν θέλῃς δύνασαί με} "if you are willing, you can heal me" (Mark 1:40): eventual condition with potential apodosis.',
      ),
    },
    {
      label: T('John and the eventual:'),
      text: T(
        '1 John is the {ἐάν} epistle: 1:7, 1:9, 2:1, 3:21 — fellowship tests in eventual condition ("if we walk…", "if we confess…"). Reading 1 John after this chapter is reaping the sown.',
      ),
    },
  ],
  examples: [
    { text: '{ἐὰν ὁμολογῶμεν}', gloss: T('if we confess (1 John 1:9)') },
    { text: '{ἐὰν περιπατῶμεν}', gloss: T('if we walk in the light (1 John 1:7)') },
    { text: '{ἐὰν ἀγαπᾶτέ με}', gloss: T('if you love me (John 14:15)') },
    { text: '{εἰ θεὸς ὑπὲρ ἡμῶν}', gloss: T('if God is for us (Rom 8:31)') },
    { text: '{εἰ ἦτε}', gloss: T('if you were (unreal; John 8:39)') },
    { text: '{εἰ ᾔδειτε}', gloss: T('if you had known (past unreal)') },
    { text: '{ὃς ἐὰν θέλῃ}', gloss: T('whoever wishes (generic eventual; Mark 8:34)') },
    { text: '{ἐὰν εἴπῃς}', gloss: T('if you say (uncertain future)') },
    { text: '{εἰ πιστεύεις}', gloss: T('if you believe (open hypothesis)') },
    { text: '{ἐὰν μὴ νίψω}', gloss: T('unless I wash (John 13:8; negative eventual)') },
  ],
  tables: [
    {
      caption: T('Table 1 — The three conditionals'),
      head: [T('Class'), T('Protasis (if…)'), T('Apodosis (…then)')],
      rows: [
        ['Real', '{εἰ} + indicativo', 'qualquer modo'],
        ['Eventual', '{ἐάν} + subjuntivo', 'futuro / imperativo'],
        ['Irreal', '{εἰ} + passado + {ἄν}', 'passado + {ἄν}'],
      ],
    },
    {
      caption: T('Table 2 — Examples by class'),
      head: [T('Class'), T('Example'), T('Translation')],
      rows: [
        ['Real', '{εἰ θεὸς ὑπὲρ ἡμῶν}', 'se Deus é por nós (Rm 8.31)'],
        ['Eventual', '{ἐὰν ὁμολογῶμεν}', 'se confessarmos (1Jo 1.9)'],
        ['Irreal pres.', '{εἰ ἦτε}', 'se fôsseis (Jo 8.39)'],
        ['Irreal pass.', '{εἰ ᾔδειτε}', 'se tivésseis sabido'],
      ],
    },
  ],
};
