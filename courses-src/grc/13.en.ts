import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('-μι verbs'),
  subtitle: T('δίδωμι, τίθημι, ἵστημι: the archaic class'),
  section: T('The verb'),
  body: C(`## The oldest layer of the Greek verb

The {-μι} verbs are the most archaic layer of the Greek verb — and include some of the New Testament's most frequent: {δίδωμι} "to give", {τίθημι} "to put", {ἵστημι} "to set up / stand", {ἵημι} "to send, throw". They are athematic (like {εἰμί} and {φημί} in ch. 11): the stem joins the ending directly, with no thematic vowel.

Two marks betray them: present reduplication (the initial syllable repeats with {ι}: {δι-δω-μι}, {τι-θη-μι}, {ἱ-στη-μι}) and their own endings {-μι, -ς, -σι, -μεν, -τε, -ασι}. The 3rd sg. {-σι} with iota (δίδωσι) against thematic 3rd sg. {-ει} (λύει) is the quickest test.

## δίδωμι and τίθημι

Present of {δίδωμι}: {δίδωμι, δίδως, δίδωσι(ν), δίδομεν, δίδοτε, διδόασι(ν)}. Note the vowel gradation: long vowel in the singular ({διδω-}), short in the plural ({διδο-}) — a preserved Indo-European inheritance. The imperfect {ἐδίδουν} contracts {ε + ο} into {ου}.

The aorist drops reduplication and uses the bare stem + {κα}: {ἔδωκα, ἔδωκας, ἔδωκε(ν), ἐδώκαμεν, ἐδώκατε, ἔδωκαν}. This sigmaless {-κα} aorist is the class's third signature. {τίθημι} follows the same script: {τίθημι, τίθης, τίθησι(ν)} → imperfect {ἐτίθην} (plural {ἐτίθεμεν}) → aorist {ἔθηκα}.

## ἵστημι: one verb, two senses

{ἵστημι} is the most instructive case. Present and 1st aorist are transitive ("to set up"): {ἵστημι}, {ἔστησα} ({ἔστησεν αὐτόν} "he set him up"). But the 2nd aorist {ἔστην} and the perfect {ἕστηκα} are intransitive ("to stand"): {ἔστη} "he stood", {ἕστηκα} "I stand".

The same root changes voice across tenses — what grammarians call variable transitivity. In John 8:3 ({ἔστησαν αὐτὴν} "they set her up") vs Acts 7:55 ({ἑστῶτα} "standing"), the contrast decides the translation.

## The -νυμι verbs

A smaller subgroup uses the {-νυ-} suffix in the present: {δείκνυμι} "to show" ({δείκνυς, δείκνυσι}), {ἀπόλλυμι} "to destroy, lose", {ζεύγνυμι} "to yoke". Outside the present they behave as regular verbs: aorist {ἔδειξα}, future {δείξω}. Recognize the {-νυ-} and treat the rest as an ordinary stem.`),
  vocab: [
    V('δίδωμι', 'δίδωμι', 'I give'),
    V('δίδως', 'δίδωμι', 'you give'),
    V('δίδωσι', 'δίδωμι', 'he gives'),
    V('ἔδωκα', 'δίδωμι', 'I gave'),
    V('ἔδωκεν', 'δίδωμι', 'he gave'),
    V('τίθημι', 'τίθημι', 'I put'),
    V('τίθησι', 'τίθημι', 'he puts'),
    V('ἔθηκα', 'τίθημι', 'I put (aor.)'),
    V('ἵστημι', 'ἵστημι', 'I set up'),
    V('ἔστησα', 'ἵστημι', 'I set up (aor.)'),
    V('ἔστη', 'ἵστημι', 'he stood (aor.)'),
    V('ἕστηκα', 'ἵστημι', 'I stand (perf.)'),
    V('δείκνυμι', 'δείκνυμι', 'I show'),
    V('ἔδειξα', 'δείκνυμι', 'I showed'),
    V('ἀπόλλυμι', 'ἀπόλλυμι', 'I destroy, lose'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"ἔδωκαν" is the aorist of which verb?'),
    options: [T('δίδωμι (-κα aorist)'), T('λύω (sigmatic aorist)'), T('τίθημι'), T('ἵστημι')],
    answer: 0,
    hint: T('δο- stem sigmaless + κα: -μι signature.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the 3rd singular present: διδώ___ ("he gives").'),
      answer: 'σι',
      hint: T("-μι's own ending: -σι."),
    },
    {
      kind: 'choose',
      prompt: T('"ἔστη" (Luke 1:11) is transitive or intransitive?'),
      options: [
        T('Intransitive: "he stood" (2nd aorist)'),
        T('Transitive: "he set him up"'),
        T('Passive: "he was set"'),
        T('Imperative: "stand!"'),
      ],
      answer: 0,
      hint: T("ἵστημι's 2nd aorist = intransitive — rule §4."),
    },
    {
      kind: 'match',
      prompt: T('Match each form to its class.'),
      pairs: [
        { a: 'διδόασι', b: 'presente -μι' },
        { a: 'ἔθηκα', b: 'aoristo -κα' },
        { a: 'ἔδειξα', b: 'aoristo regular' },
        { a: 'λύουσι', b: 'presente temático' },
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
        'Three -μι signatures: ι-reduplication in the present, their own endings (-μι, -ς, -σι), sigmaless -κα aorist.',
      ),
    },
    {
      n: '2',
      text: T(
        'Vowel gradation: long vowel in the singular ({δίδω-}), short in the plural ({δίδο-}). The 3rd pl. {-ασι} betrays the class.',
      ),
    },
    {
      n: '3',
      text: T(
        'The aorist drops reduplication: bare stem + κα ({ἔδωκα}, {ἔθηκα}). No reduplication plus κα means -μι.',
      ),
    },
    {
      n: '4',
      text: T(
        '{ἵστημι}: present/1st aorist transitive; 2nd aorist/perfect intransitive. Tense decides the voice.',
      ),
    },
    {
      n: '5',
      text: T(
        '-νυμι verbs ({δείκνυμι}) are -μι only in the present; elsewhere they conjugate regularly ({ἔδειξα}, {δείξω}).',
      ),
    },
  ],
  notes: [
    {
      label: T('Cleanup:'),
      text: T(
        '{ἀπόλλυμι} "to destroy" appears in the middle present {ἀπόλλυται} "perishes" (John 3:16: {ἵνα μὴ ἀπόληται}) and the regular aorist {ἀπώλεσα}. It is the most frequent -νυμι verb in the New Testament.',
      ),
    },
    {
      label: T('Frequency:'),
      text: T(
        "{δίδωμι} and {τίθημι} rank among the 20 most frequent New Testament verbs. This chapter's effort pays off on every page.",
      ),
    },
  ],
  examples: [
    { text: '{δίδωσιν αὐτοῖς}', gloss: T('he gives to them (3rd sg.; Mark 6:41)') },
    { text: '{ἔδωκεν αὐτοῖς ἐξουσίαν}', gloss: T('he gave them authority (aorist; Mark 6:7)') },
    {
      text: '{τίθησιν τὴν ψυχήν}',
      gloss: T('he lays down his life (John 10:11; lit. "puts the soul")'),
    },
    { text: '{ἔθηκεν αὐτὸν}', gloss: T('he laid him (aorist; Mark 15:46)') },
    { text: '{ἔστησεν αὐτὸν}', gloss: T('he set him up (transitive)') },
    { text: '{ἔστη ἐνώπιον}', gloss: T('he stood before (intransitive; Luke 1:11)') },
    { text: '{ἕστηκα ἐνώπιον}', gloss: T('I stand before (perfect; Acts 26:16)') },
    { text: '{δεῖξον ἡμῖν}', gloss: T('show us (aorist of δείκνυμι; John 14:8)') },
    { text: '{διδόασιν δόματα}', gloss: T('they give gifts (3rd pl.; Matt 7:11)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Present active of δίδωμι'),
      head: [T('Person'), T('Form'), T('Translation')],
      rows: [
        ['1ª sg.', '{δίδωμι}', 'eu dou'],
        ['2ª sg.', '{δίδως}', 'tu dás'],
        ['3ª sg.', '{δίδωσι(ν)}', 'ele dá'],
        ['1ª pl.', '{δίδομεν}', 'nós damos'],
        ['2ª pl.', '{δίδοτε}', 'vós dais'],
        ['3ª pl.', '{διδόασι(ν)}', 'eles dão'],
      ],
    },
    {
      caption: T('Table 2 — Active aorist of δίδωμι and τίθημι'),
      head: [
        T('Person'),
        { 0: 'δ', 1: 'ί', 2: 'δ', 3: 'ω', 4: 'μ', 5: 'ι' },
        { 0: 'τ', 1: 'ί', 2: 'θ', 3: 'η', 4: 'μ', 5: 'ι' },
      ],
      rows: [
        ['1ª sg.', '{ἔδωκα}', '{ἔθηκα}'],
        ['2ª sg.', '{ἔδωκας}', '{ἔθηκας}'],
        ['3ª sg.', '{ἔδωκε(ν)}', '{ἔθηκε(ν)}'],
        ['1ª pl.', '{ἐδώκαμεν}', '{ἐθήκαμεν}'],
        ['2ª pl.', '{ἐδώκατε}', '{ἐθήκατε}'],
        ['3ª pl.', '{ἔδωκαν}', '{ἔθηκαν}'],
      ],
    },
    {
      caption: T('Table 3 — ἵστημι: transitive vs intransitive'),
      head: [T('Tense'), T('Form'), T('Meaning')],
      rows: [
        ['Presente', '{ἵστημι}', 'ponho de pé (trans.)'],
        ['Aoristo 1º', '{ἔστησα}', 'pus de pé (trans.)'],
        ['Aoristo 2º', '{ἔστην}', 'pus-me / fiquei (intrans.)'],
        ['Perfeito', '{ἕστηκα}', 'estou de pé (intrans.)'],
      ],
    },
  ],
};
