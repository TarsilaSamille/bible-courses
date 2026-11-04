import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('The perfect'),
  subtitle: T('λέλυκα, γέγραπται: the past still in force'),
  section: T('The verb'),
  body: C(`## Present state, past action

The Greek perfect fuses two times into one: it describes a present state resulting from past action. {γέγραπται} "it stands written" — someone wrote (past) and the text remains valid (present). {ἕστηκα} "I stand" — I stood up (past) and remain (present). {οἶδα} "I know" — I saw (past) and I know (present).

Hence the perfect translates authority formulas so well: {γέγραπται} (Matt 4:4) does not report that "they wrote", but that "it stands written and binding"; {εἴρηκα} "I have said" (John 14:25) seals the word as definitive; {πεπίστευκα} "I have believed and believe" (John 6:69) confesses permanent faith.

## Reduplication

The perfect's mark is reduplication: the initial consonant repeats with {ε}. {λυ-} → {λε-λυ-κα}; {γραφ-} → {γε-γραφ-α}; {πεμπ-} → {πε-πομφ-α} (with the matching unaspirated consonant: φ→π, θ→τ, χ→κ). Vowel-initial verbs lengthen instead of reduplicating ({ἀγαπάω} → {ἠγάπηκα}); {ζ}-verbs and preposition-compounds use augment + internal reduplication ({ζητέω} → {ἐζήτηκα}).

The active endings are its own: {-κα, -κας, -κε, -καμεν, -κατε, -κασι}. The infinitive {λελυκέναι} and participle {λελυκώς, λελυκυῖα, λελυκός} complete the system — the perfect participle, declined as an adjective, paints resulting states ({ἑστώς} "standing", Acts 7:55).

## The perfect-system tenses

The system has three tenses. The perfect ({λέλυκα}) is the present state. The pluperfect ({ἐλελύκειν}) is the past state: "had loosed / stood loosed" — with augment and secondary endings, like an imperfect of the perfect. The future perfect ("I shall have loosed") is vanishingly rare in the New Testament and may be ignored in reading.

In the middle voice, the perfect needs no connectives: stem + middle endings directly ({λέλυμαι, λέλυσαι, λέλυται, λελύμεθα, λέλυσθε, λέλυνται}). {γέγραπται} and {πεπλήρωται} "it stands fulfilled" are the two examples you will meet weekly. The full middle-passive system waits for ch. 20.

## Perfects turned present

Some perfects lexicalized with present sense and lives of their own: {οἶδα} "I know" (ch. 11), {ἕστηκα} "I stand" (ch. 12), {πέποιθα} "I trust" (from {πείθω}, "to have been persuaded" = "to trust"), {γέγονα} "I have become / am" (from {γίνομαι}), {μέμνημαι} "I remember" (middle, from {μιμνήσκω}). They prove the tense's logic: the perfect describes states so well that some became permanent states of the language.`),
  vocab: [
    V('λέλυκα', 'λύω', 'I have loosed'),
    V('λέλυκε', 'λύω', 'he has loosed'),
    V('λέλυμαι', 'λύω', 'I stand loosed'),
    V('λέλυται', 'λύω', 'it stands loosed'),
    V('λελυκώς', 'λύω', 'having loosed'),
    V('γέγραπται', 'γράφω', 'it stands written'),
    V('γέγραφα', 'γράφω', 'I have written'),
    V('πεπίστευκα', 'πιστεύω', 'I have believed'),
    V('ἕστηκα', 'ἵστημι', 'I stand'),
    V('πέποιθα', 'πείθω', 'I trust'),
    V('γέγονα', 'γίνομαι', 'I have become'),
    V('οἶδα', 'οἶδα', 'I know'),
    V('τετέλεσται', 'τελέω', 'it is finished'),
    V('πεπλήρωται', 'πληρόω', 'it stands fulfilled'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"γέγραπται" (Matt 4:4) is best translated…'),
    options: [
      T('"It stands written" (present state)'),
      T('"They wrote" (past act)'),
      T('"They will write" (future)'),
      T('"Write!" (command)'),
    ],
    answer: 0,
    hint: T('Perfect = present state of past action — rule §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the 3rd singular: λέλυ___ ("he has loosed").'),
      answer: 'κε',
      hint: T('Its own endings: -κα, -κας, -κε…'),
    },
    {
      kind: 'choose',
      prompt: T('The reduplication in "γέγραφα" is…'),
      options: [
        T('γε- (consonant + ε)'),
        T('γη- (lengthening)'),
        T('ἐ-γε (double augment)'),
        T('There is no reduplication'),
      ],
      answer: 0,
      hint: T('Initial consonant + ε — rule §2.'),
    },
    {
      kind: 'match',
      prompt: T('Match each form to its tense.'),
      pairs: [
        { a: 'λέλυκα', b: 'perfeito' },
        { a: 'ἐλελύκει', b: 'mais-que-perfeito' },
        { a: 'λέλυται', b: 'perfeito médio' },
        { a: 'ἔλυσε', b: 'aoristo' },
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
        'Perfect = present state of past action. Translate by the state ("it stands written"), not the act ("they wrote").',
      ),
    },
    {
      n: '2',
      text: T(
        'Reduplication: initial consonant + ε ({λελυ-}, {γεγραφ-}); initial vowel lengthens ({ἠγάπηκα}); ζ-verbs use ἐ- + stem ({ἐζήτηκα}).',
      ),
    },
    {
      n: '3',
      text: T(
        'Its own active endings: -κα, -κας, -κε, -καμεν, -κατε, -κασι. The -κ- betrays the tense.',
      ),
    },
    { n: '4', text: T('Pluperfect = perfect + augment + secondary endings ("had loosed").') },
    {
      n: '5',
      text: T(
        "Connectiveless middle perfect: {λέλυμαι}, {γέγραπται}, {πεπλήρωται}. The NT's most useful middle forms.",
      ),
    },
  ],
  notes: [
    {
      label: T('Translation:'),
      text: T(
        'English rarely has "it stands written" for {γέγραπται} without sounding biblical — which is exactly the register: solemn citation formula. Keep the solemnity; "it was written" erases the effect.',
      ),
    },
    {
      label: T('Intensive:'),
      text: T(
        'The perfect with intensive force paints consummated states: {τετέλεσται} "it is finished!" (John 19:30) — the cross\'s last word, in passive perfect. The tense is the theology.',
      ),
    },
  ],
  examples: [
    { text: '{γέγραπται}', gloss: T('it stands written (Matt 4:4; authority formula)') },
    { text: '{εἴρηκα ὑμῖν}', gloss: T('I have told you (John 14:25; sealed word)') },
    { text: '{πεπίστευκα}', gloss: T('I have believed and believe (John 6:69)') },
    { text: '{ἕστηκα ἐνώπιον}', gloss: T('I stand before (Acts 26:16)') },
    { text: '{πέποιθα ἐπὶ κύριον}', gloss: T('I trust in the Lord (Phil 2:24)') },
    { text: '{γέγονα Ἰουδαίοις}', gloss: T('I have become a Jew (1 Cor 9:20)') },
    { text: '{πεπλήρωται ὁ καιρός}', gloss: T('the time stands fulfilled (Mark 1:15)') },
    { text: '{μεμένηκεν}', gloss: T('it abides (from μένω; John 8:31)') },
    { text: '{ᾔδεισαν αὐτόν}', gloss: T('they knew him (pluperfect; Luke 24:16)') },
    { text: '{ἑστῶτα ἐκ δεξιῶν}', gloss: T('standing at the right (participle; Acts 7:55)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Active perfect of λύω'),
      head: [T('Person'), T('Form'), T('Translation')],
      rows: [
        ['1ª sg.', '{λέλυκα}', 'tenho libertado'],
        ['2ª sg.', '{λέλυκας}', 'tens libertado'],
        ['3ª sg.', '{λέλυκε(ν)}', 'tem libertado'],
        ['1ª pl.', '{λελύκαμεν}', 'temos libertado'],
        ['2ª pl.', '{λελύκατε}', 'tendes libertado'],
        ['3ª pl.', '{λελύκασι(ν)}', 'têm libertado'],
      ],
    },
    {
      caption: T('Table 2 — Middle perfect of λύω'),
      head: [T('Person'), T('Form'), T('Translation')],
      rows: [
        ['1ª sg.', '{λέλυμαι}', 'estou liberto'],
        ['2ª sg.', 'λέλυσαι', 'estás liberto'],
        ['3ª sg.', '{λέλυται}', 'está liberto'],
        ['1ª pl.', 'λελύμεθα', 'estamos libertos'],
        ['2ª pl.', 'λέλυσθε', 'estais libertos'],
        ['3ª pl.', 'λέλυνται', 'estão libertos'],
      ],
    },
    {
      caption: T('Table 3 — Active and middle pluperfect'),
      head: [T('Person'), T('Active'), T('Middle')],
      rows: [
        ['1ª sg.', '{ἐλελύκειν}', 'ἐλελύμην'],
        ['3ª sg.', '{ἐλελύκει}', 'ἐλέλυτο'],
        ['3ª pl.', 'ἐλελύκεσαν', 'ἐλέλυντο'],
      ],
    },
  ],
};
