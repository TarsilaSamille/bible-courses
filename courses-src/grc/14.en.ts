import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  title: T('3rd declension'),
  subtitle: T('σάρξ, πνεῦμα, πατήρ: the genitive reveals the stem'),
  section: T('The noun'),
  body: C(`## The golden rule

The 3rd declension gathers every consonant stem — bringing some of the New Testament's most important words: {σάρξ} "flesh", {πνεῦμα} "spirit", {πατήρ} "father", {μήτηρ} "mother", {ἀνήρ} "man, husband", {γυνή} "woman", {χείρ} "hand", {σῶμα} "body", {ὄνομα} "name", {αἷμα} "blood".

The golden rule (Machen): drop {-ος} from the GENITIVE to find the stem. {σαρκός} minus {-ος} = {σαρκ-} — and from that stem come all forms: {σαρκί} (dat.), {σάρκα} (acc.), {σάρκες} (nom. pl.), {σαρκῶν} (gen. pl.). The nominative alone deceives ({σάρξ} hides the {κ}; {πνεῦμα} hides the {τ}); the genitive never lies. Hence the dictionary always lists the pair: {σάρξ, σαρκός}.

## Stop-stems: σάρξ as model

In stop-stems ({κ}, {γ}, {χ}, {π}, {β}, {φ}, {τ}, {δ}, {θ}), the nominative singular ends in {-ς} and the consonant + {ς} cluster yields the visible form: {σαρκ-ς} → {σάρξ} (κ+ς=ξ), {ἐλπιδ-ς} → {ἐλπίς} (δ+ς=ς, δ dropping). In the dative plural, the universal 3rd-declension ending is {-σι(ν)}: {σαρκ-σί} → {σαρξί(ν)}, {ἐλπίσι(ν)}, {πᾶσι(ν)} (from {πᾶς}).

The accusative singular swaps {-ς} for {-α}: {σάρκα}, {ἐλπίδα}, {χάριτα} ({χάρις, -ιτος}). The accusative plural ends in {-ας}: {σάρκας}. And the genitive plural {-ῶν} with circumflex, an old friend from chs. 2–3, closes the paradigm.

## Neuters in -μα

Neuters in {-μα} ({πνεῦμα}, {σῶμα}, {ὄνομα}, {αἷμα}, {ῥῆμα} "spoken word") form the tamest 3rd-declension group: {-ματ-} stem ({πνεύματος} → {πνευματ-}), nominative and accusative identical, plural in {-α} — the golden neuter rule once more. Paradigm: {πνεῦμα, πνεύματος, πνεύματι, πνεῦμα / πνεύματα, πνευμάτων, πνεύμασι(ν), πνεύματα}.

In reading, {ἐν πνεύματι} "in spirit" (dative of sphere) and {τὸ πνεῦμά μου} "my spirit" (Luke 1:47) occur dozens of times. Recognizing {-ματι} by heart speeds through the Gospels and Paul.

## Kinship and the famous irregulars

{πατήρ, πατρός} "father", {μήτηρ, μητρός} "mother", {θυγάτηρ, θυγατρός} "daughter", {ἀνήρ, ἀνδρός} "man" and {γυνή, γυναικός} "woman" have gradating stems ({πατερ-/πατρ-}, {ἀνερ-/ἀνδρ-}, {γυναικ-}): full vowel in the nominative, reduced stem elsewhere. The accusative reveals it: {πατέρα}, {μητέρα}, {ἄνδρα}, {γυναῖκα}.

Two vocatives deserve their own altar: {Πάτερ} "Father!" (Matt 6:9, {Πάτερ ἡμῶν}) and {ἄνδρες} "gentlemen!" (plural of {ἀνήρ}, speech formula in Acts: {ἄνδρες ἀδελφοί} "brothers!").`),
  vocab: [
    V('σάρξ', 'σάρξ', 'flesh'),
    V('σαρκός', 'σάρξ', 'of flesh'),
    V('σαρκί', 'σάρξ', 'in flesh'),
    V('σάρκες', 'σάρξ', 'fleshes (pl.)'),
    V('πνεῦμα', 'πνεῦμα', 'spirit'),
    V('πνεύματος', 'πνεῦμα', 'of the spirit'),
    V('πνεύματι', 'πνεῦμα', 'in spirit'),
    V('σῶμα', 'σῶμα', 'body'),
    V('ὄνομα', 'ὄνομα', 'name'),
    V('αἷμα', 'αἷμα', 'blood'),
    V('πατήρ', 'πατήρ', 'father'),
    V('πατρός', 'πατήρ', 'of the father'),
    V('Πάτερ', 'πατήρ', 'Father! (voc.)'),
    V('μήτηρ', 'μήτηρ', 'mother'),
    V('γυνή', 'γυνή', 'woman'),
    V('ἀνήρ', 'ἀνήρ', 'man, husband'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the stem of "σάρξ" and how is it found?'),
    options: [
      T('σαρκ-, dropping -ος from genitive σαρκός'),
      T('σαρ-, dropping -ξ from the nominative'),
      T('σαρκς-, adding nominative and genitive'),
      T('σα-, first syllable'),
    ],
    answer: 0,
    hint: T('Golden rule: the stem comes from the genitive — rule §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the dative plural: σαρξ___ ("in fleshes").'),
      answer: 'ίν',
      hint: T('Universal 3rd-declension dative plural: -σι(ν).'),
    },
    {
      kind: 'choose',
      prompt: T('"πνεύματα" can only be…'),
      options: [
        T('Nominative or accusative plural (neuter in -α)'),
        T('Genitive singular'),
        T('Dative plural'),
        T('Vocative singular'),
      ],
      answer: 0,
      hint: T('Neuter plural ends in -α — the golden neuter rule.'),
    },
    {
      kind: 'match',
      prompt: T('Match each form to its case.'),
      pairs: [
        { a: 'πατρί', b: 'dativo' },
        { a: 'πατέρα', b: 'acusativo' },
        { a: 'Πάτερ', b: 'vocativo' },
        { a: 'πνεύμασι', b: 'dativo plural' },
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
        'Golden rule: the stem comes from the genitive (drop -ος). Memorize pairs ({νύξ, νυκτός}; {χάρις, χάριτος}).',
      ),
    },
    {
      n: '2',
      text: T(
        'Universal dative plural: -σι(ν) ({σάρξ} → {σαρξίν}, {πατήρ} → {πατράσιν}, {πᾶς} → {πᾶσιν}).',
      ),
    },
    {
      n: '3',
      text: T(
        'Accusative singular in -α ({σάρκα}, {ἐλπίδα}); accusative plural in -ας ({σάρκας}).',
      ),
    },
    {
      n: '4',
      text: T(
        'Neuters in -μα: -ματ- stem, nom. = acc., plural in -α. The most regular 3rd-declension group.',
      ),
    },
    {
      n: '5',
      text: T(
        'Kinship gradates the stem (πατερ-/πατρ-); accusative ({πατέρα}, {ἄνδρα}) and vocative ({Πάτερ}) betray the form.',
      ),
    },
  ],
  notes: [
    {
      label: T('How to parse:'),
      text: T(
        'Facing an unknown form, strip the candidate ending (-ος, -ι, -α, -ες, -ῶν, -σι) and test the rest as stem: {νυκτ-} + {-ός} = {νυκτός} → {νύξ} "night". Three seconds of testing save three minutes of dictionary.',
      ),
    },
    {
      label: T('γυνή vs γύναι:'),
      text: T(
        "{γυνή}'s vocative is {γύναι} — Jesus uses it with Mary (John 2:4; 19:26). It is not rudeness: the word's normal vocative, our \"ma'am\".",
      ),
    },
  ],
  examples: [
    { text: '{ἐν σαρκὶ ἐληλυθότα}', gloss: T('come in flesh (dative; 1 John 4:2)') },
    { text: '{τὸ πνεῦμά μου}', gloss: T('my spirit (Luke 1:47)') },
    { text: '{Πάτερ ἡμῶν}', gloss: T('our Father (vocative; Matt 6:9)') },
    { text: '{ἐν πνεύματι}', gloss: T('in spirit (dative of sphere)') },
    { text: '{τὰ ῥήματα}', gloss: T('the spoken words (neuter plural)') },
    { text: '{διὰ τοῦ αἵματος}', gloss: T('through the blood (genitive; Heb 9:12)') },
    { text: '{ἄνδρες ἀδελφοί}', gloss: T('brothers! (plural vocative; Acts 2:29)') },
    { text: '{τῇ γυναικί}', gloss: T('to the woman (dative; John 4:27)') },
    { text: '{ἐπὶ χεῖρας}', gloss: T('onto hands (accusative plural of χείρ)') },
    { text: '{πᾶσιν ἀνθρώποις}', gloss: T('to all men (dative plural; 1 Tim 2:4)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Stop stem: ἡ σάρξ'),
      head: [T('Case'), T('Singular'), T('Plural')],
      rows: [
        [T('Nominative'), '{σάρξ}', '{σάρκες}'],
        [T('Genitive'), '{σαρκός}', '{σαρκῶν}'],
        [T('Dative'), '{σαρκί}', '{σαρξί(ν)}'],
        [T('Accusative'), '{σάρκα}', 'σάρκας'],
      ],
    },
    {
      caption: T('Table 2 — Neuter in -μα: τὸ πνεῦμα'),
      head: [T('Case'), T('Singular'), T('Plural')],
      rows: [
        [T('Nominative'), '{πνεῦμα}', '{πνεύματα}'],
        [T('Genitive'), '{πνεύματος}', 'πνευμάτων'],
        [T('Dative'), '{πνεύματι}', 'πνεύμασι(ν)'],
        [T('Accusative'), '{πνεῦμα}', '{πνεύματα}'],
      ],
    },
    {
      caption: T('Table 3 — Kinship: ὁ πατήρ and ἡ γυνή'),
      head: [
        T('Case'),
        { 0: 'π', 1: 'α', 2: 'τ', 3: 'ή', 4: 'ρ' },
        { 0: 'γ', 1: 'υ', 2: 'ν', 3: 'ή' },
      ],
      rows: [
        [T('Nominative'), '{πατήρ}', '{γυνή}'],
        [T('Genitive'), '{πατρός}', 'γυναικός'],
        [T('Dative'), '{πατρί}', 'γυναικί'],
        [T('Accusative'), '{πατέρα}', 'γυναῖκα'],
        [T('Vocative'), '{Πάτερ}', 'γύναι'],
      ],
    },
  ],
};
