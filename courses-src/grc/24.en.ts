import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  title: T('Genitive absolute and infinitive'),
  subtitle: T('λαλοῦντος αὐτοῦ — and the articular infinitive'),
  section: T('Syntax'),
  body: C(`## When the participle has its own owner

The normal participle agrees with a word in the clause (chs. 21–22). But when the participle's action-owner does NOT take part in the main clause — different subject — Greek isolates it in the genitive: noun + participle, both genitive, detached from the syntax. The genitive absolute, cousin of Latin's ablative absolute.

{λαλοῦντος αὐτοῦ} "while he was speaking" (Matt 17:5, at the Transfiguration: {ἔτι αὐτοῦ λαλοῦντος} "while he was still speaking"); {ὀψίας γενομένης} "when evening had come" (Mark 1:32 — note: no explicit noun, just the feminine genitive participle: "[hour] late having become"); {ἀνατείλαντος τοῦ ἡλίου} "when the sun had risen" (Mark 16:12, {λίαν πρωῒ} "very early in the morning").

## How to translate

The genitive absolute compresses a temporal, causal or concessive clause — context decides: temporal ("when/while", commonest), causal ("because"), concessive ("although"). {ταῦτα αὐτοῦ λαλοῦντος} "as he was saying these things" (Matt 26:47, {ἔτι αὐτοῦ λαλοῦντος ἰδοὺ} "while he was still speaking, behold": Judas arrives DURING the speech — simultaneous temporal with present participle).

Recognition rule: genitive + genitive participle at sentence start, unconnected to the main verb. Lone feminine {γενομένης} = "[the hour] having come"; masculine {ὄντος} = "he being".

## The articular infinitive

The articulated infinitive works as a declinable noun: {τὸ πιστεύειν} "believing" (nom./acc.), {τοῦ πιστεύειν} "of believing" (gen.), dative via preposition ({ἐν τῷ} + infinitive = "on/when": {ἐν τῷ σπείρειν} "in sowing", Matt 13:4).

Genitive {τοῦ} + infinitive expresses purpose, competing with {ἵνα}: {ἦλθεν τοῦ βαπτισθῆναι} "he came to be baptized" (Matt 3:13). And {πρὸς τό} + infinitive also gives purpose: {πρὸς τὸ μνημονευθῆναι} "to be remembered" (Acts 10:4). Three purpose constructions ({ἵνα} + subj., {τοῦ} + inf., {πρὸς τό} + inf.) — the author chooses by sentence rhythm.`),
  vocab: [
    V('λαλοῦντος', 'λαλέω', 'of speaking'),
    V('λαλοῦντος αὐτοῦ', 'λαλέω', 'while he was speaking'),
    V('γενομένης', 'γίνομαι', 'having come (fem.)'),
    V('ὀψίας', 'ὀψία', 'late, of evening'),
    V('τοῦ λῦσαι', 'λύω', 'in order to loose'),
    V('τοῦ πιστεῦσαι', 'πιστεύω', 'in order to believe'),
    V('βαπτισθῆναι', 'βαπτίζω', 'to be baptized'),
    V('σπείρειν', 'σπείρω', 'to sow'),
    V('ἀνατείλαντος', 'ἀνατέλλω', 'of having risen'),
    V('ἥλιος', 'ἥλιος', 'sun'),
    V('πρωῒ', 'πρωῒ', 'early, in the morning'),
    V('ἔτι', 'ἔτι', 'still, yet'),
    V('ὅτε', 'ὅτε', 'when'),
    V('μετά', 'μετά', 'after, with'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"ὀψίας γενομένης" (Mark 1:32) is a genitive absolute because…'),
    options: [
      T('Genitive participle with own subject, detached from the clause'),
      T("It is the verb's direct object"),
      T('It agrees with the clause subject'),
      T('It is an articular infinitive'),
    ],
    answer: 0,
    hint: T('Own owner + genitive + detached — rule §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the purpose: ἦλθεν τοῦ ___ ("he came to be baptized", from βαπτίζω).'),
      answer: 'βαπτισθῆναι',
      hint: T('τοῦ + aorist passive infinitive.'),
    },
    {
      kind: 'choose',
      prompt: T('"ἐν τῷ σπείρειν" (Matt 13:4) means…'),
      options: [
        T('In sowing / as he sowed'),
        T('In order never to sow'),
        T('After having sown'),
        T('Without sowing'),
      ],
      answer: 0,
      hint: T('ἐν τῷ + infinitive = "on/when" — rule §3.'),
    },
    {
      kind: 'match',
      prompt: T('Match each construction to its value.'),
      pairs: [
        { a: 'λαλοῦντος αὐτοῦ', b: 'gen. absoluto' },
        { a: 'τοῦ λῦσαι', b: 'finalidade' },
        { a: 'ἐν τῷ σπείρειν', b: 'temporal' },
        { a: 'λέγων', b: 'circunstancial simples' },
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
        'Genitive absolute = its own subject + genitive participle, detached from the clause. Translate as a temporal/causal clause.',
      ),
    },
    {
      n: '2',
      text: T(
        'Present participle in the absolute = simultaneous; aorist = prior. Relative time holds here too.',
      ),
    },
    {
      n: '3',
      text: T(
        '{τοῦ} + infinitive = purpose. {ἐν τῷ} + infinitive = "on/when". {πρὸς τό} + infinitive = purpose.',
      ),
    },
    {
      n: '4',
      text: T(
        'Lone genitive participle ({γενομένης}, {ὄντος}) = absolute with hidden subject ("the hour", "he").',
      ),
    },
  ],
  notes: [
    {
      label: T('Accusative with infinitive:'),
      text: T(
        'With prepositions like {διά} and {μετά}, the infinitive takes its own accusative subject: {διὰ τὸ αὐτὸν ἀκούειν} "because of his hearing". The exception proving the action-owner logic.',
      ),
    },
    {
      label: T('Whole verse:'),
      text: T(
        'Mark 1:32 combines everything: {ὀψίας δὲ γενομένης, ὅτε ἔδυ ὁ ἥλιος} "when evening had come, when the sun had set" — absolute + {ὅτε} temporal in one sentence. Read it aloud.',
      ),
    },
  ],
  examples: [
    { text: '{ἔτι αὐτοῦ λαλοῦντος}', gloss: T('while he was still speaking (Matt 26:47)') },
    { text: '{ὀψίας γενομένης}', gloss: T('when evening had come (Mark 1:32)') },
    { text: '{ἀνατείλαντος τοῦ ἡλίου}', gloss: T('when the sun had risen (Mark 16:2)') },
    { text: '{ἦλθεν τοῦ βαπτισθῆναι}', gloss: T('he came to be baptized (Matt 3:13)') },
    { text: '{ἐν τῷ σπείρειν}', gloss: T('in sowing (Matt 13:4)') },
    { text: '{πρὸς τὸ μνημονευθῆναι}', gloss: T('to be remembered (Acts 10:4)') },
    { text: '{ὄντος Σαούλ}', gloss: T('Saul being… (absolute with proper name)') },
    { text: '{τοῦ περιπατεῖν}', gloss: T('for walking / of walking (genitive)') },
    {
      text: '{διὰ τὸ αὐτὸν ἀκούειν}',
      gloss: T('because of his hearing (accusative with own subject!)'),
    },
    { text: '{μετὰ τὸ ἐγερθῆναι}', gloss: T('after rising (Matt 26:32)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Model genitive absolutes'),
      head: [T('Construction'), T('Analysis'), T('Translation')],
      rows: [
        ['{λαλοῦντος αὐτοῦ}', 'part. pres. + pron.', 'enquanto ele falava'],
        ['{ὀψίας γενομένης}', 'part. aor. solo', 'tendo chegado a tarde'],
        ['{ἀνατείλαντος ἡλίου}', 'part. aor. + subst.', 'tendo nascido o sol'],
        ['{ἔτι ὄντος}', 'part. pres. de εἰμί', 'estando ele ainda'],
      ],
    },
    {
      caption: T('Table 2 — Articular infinitive'),
      head: [T('Form'), T('Case'), T('Meaning')],
      rows: [
        ['{τὸ πιστεύειν}', 'nom./ac.', 'o crer'],
        ['{τοῦ πιστεύειν}', 'genitivo', 'para crer (fim)'],
        ['{ἐν τῷ σπείρειν}', 'dat. c/ preposição', 'ao semear'],
        ['{πρὸς τὸ μνημονευθῆναι}', 'ac. c/ preposição', 'para ser lembrado'],
      ],
    },
  ],
};
