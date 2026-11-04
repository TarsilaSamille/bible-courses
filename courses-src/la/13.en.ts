import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('The fourth and fifth declensions'),
  subtitle: T('{manus, -ūs} and {diēs, -eīs} — the two declensions that close the system'),
  section: T('Declensions and the verb sum'),
  body: C(`## The fourth declension

The fourth gathers almost only masculine and neuter nouns, and its theme ends in *-u*. The model is {manus, -ūs} «hand»; {manus} is ambiguous, and gender shows in the nominative: masculine {manus}, neuter {manus, -ūs}, like {genus} «kind, race» and {corpus} «body».

The theme vowel is long almost everywhere, so nominative and genitive look alike: {manus} against {manūs}. The dative singular takes {uī} and the ablative {ū} so that the genitive {ūs} stays free.

| Case | Singular | Plural |
|---|---|---|
| Nom. | manŭs | manūs |
| Gen. | manūs | manuum |
| Dat. | manuī | manibus |
| Acc. | manum | manūs |
| Abl. | manū | manibus |

The accusative plural repeats the nominative plural, as in the first and second: {canī} «dogs», {manūs} «hands».

## The fifth declension

The fifth ends in {-ēs} and is almost entirely feminine. The model is {diēs, diēī} «day», which may be masculine or feminine; {rēs, reī} «thing, matter», {spēs, speī} «hope» and {fidēs, fideī} «faith» are feminine.

| Case | Singular | Plural |
|---|---|---|
| Nom. | diēs | diēs |
| Gen. | diēī | diērum |
| Dat. | diēī | diēbus |
| Acc. | diem | diēs |
| Abl. | diē | diēbus |

Only the accusative {diem} and the ablative {diē} differ, and both are short: the heavy forms are the genitive and dative {diēī}.

## Reading

{Īn manūs tuās} «into your hands» (Luke 23:46) — preposition plus ablative of place without motion, the fixed liturgical phrase. {Per omnia saecula saeculōrum} «for all ages of ages» — fourth-declension plural with a genitive on a genitive. {Fidēs, spēs, caritās} «faith, hope, love» (1 Corinthians 13:13) — three fifth-declension nouns in a row.

## What to take away

Fourth and fifth close the system without inventing new endings: {-ibus} repeats the third, {-ēs} repeats nothing, and every plural still ends in {-s}.`),
  vocab: [
    V('manus', 'manus', 'hand (nom. sg.)'),
    V('manūs', 'manus', 'of the hand (gen. sg.) / hands (nom. and acc. pl.)'),
    V('manuī', 'manus', 'to the hand (dat. sg.)'),
    V('manum', 'manus', 'the hand (acc. sg.)'),
    V('manuum', 'manus', 'of the hands (gen. pl.)'),
    V('manibus', 'manus', 'to the hands (dat. pl.) / with the hands (abl. pl.)'),
    V('cornu', 'cornu', 'horn, corner (of the moon)'),
    V('genus', 'genus', 'kind, race, class'),
    V('corpus', 'corpus', 'body'),
    V('diēs', 'dies', 'day'),
    V('diēī', 'dies', 'of the day (gen. sg.)'),
    V('diēbus', 'dies', 'on the days (dat./abl. pl.)'),
    V('rēs', 'res', 'thing, matter, deed'),
    V('spēs', 'spes', 'hope'),
    V('fidēs', 'fides', 'faith, trust, loyalty'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {in manibus}, what case is {manibus} and why?'),
    options: [
      T('Ablative plural: after {in}, the place where takes the ablative'),
      T('Dative plural: {in} governs the dative'),
      T('Genitive plural: {-ibus} is genitive in this declension'),
      T('Accusative plural: nominative and accusative are identical'),
    ],
    answer: 0,
    hint: T('Rule §2: {-ibus} is ambiguous, but the preposition decides.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Genitive singular of {manus}: man_'),
      answer: 'ūs',
      hint: T('It is the nominative ending, but with the long vowel.'),
    },
    {
      kind: 'choose',
      prompt: T('Which phrase uses the ablative of place?'),
      options: [
        T('{in manibus tuīs} — in your hands'),
        T('{manum tuam tenet} — he holds your hand'),
        T('{manus puerī} — the boy’s hand'),
        T('{manibus dat} — he gave the hands'),
      ],
      answer: 0,
      hint: T('Rule §3: place where takes {in} plus ablative.'),
    },
    {
      kind: 'fill',
      prompt: T('Translate {fīdēs, spēs, caritās}.'),
      answer: 'faith, hope, love',
      hint: T('Three feminine nouns of the fifth declension.'),
    },
    {
      kind: 'match',
      prompt: T('Match the form to its case'),
      pairs: [
        { a: T('manuī'), b: T('dative singular (4th)') },
        { a: T('manū'), b: T('ablative singular (4th)') },
        { a: T('diēī'), b: T('genitive singular (5th)') },
        { a: T('manuum'), b: T('genitive plural (4th)') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('The fourth declension takes {-u} themes: {manus}, {genus}, {corpus}, {cornu}.'),
    },
    {
      n: '2',
      text: T(
        'Dative and ablative plural end in {-ibus}, as in the first and third: {puellīs}, {rēgibus}, {manibus}.',
      ),
    },
    {
      n: '3',
      text: T(
        'The fifth declension is nearly all feminine, with {-ē} themes: {rēs, reī}, {spēs, speī}, {fidēs, fideī}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Nominative and accusative plural coincide in every declension; the final vowel marks the function: {puellās} accusative, {puellae} genitive or dative.',
      ),
    },
    {
      n: '5',
      text: T(
        'Only {diēs} and a few nouns ({sēs, merīdiēs, aliēs}...) are gender-ambiguous; the rest reveal gender in the nominative.',
      ),
    },
  ],
  notes: [
    {
      label: T('The macron marks a long vowel, not an extra syllable.'),
      text: T(
        'Vulgate texts appear without macrons. They are here so that you can see that {manus} and {manūs} share vowel and syllable but differ in weight. People transcribing Latin today usually leave them out.',
      ),
    },
    {
      label: T('The fifth declension is nearly a tomb.'),
      text: T(
        'Of the thousands of nouns that once existed, the fifth keeps very few in use: {rēs}, {spēs}, {fidēs}, {quiēs} «rest», {pēs} «foot», {sēs} «seat» and {āles} «wing». They form the {fidēs, spēs, caritās} of 1 Corinthians 13 and the {quiēs} of the Beatitudes. Learn the whole paradigm and a full declension comes almost free.',
      ),
    },
  ],
  examples: [
    { text: 'in manūs tuās', gloss: T('into your hands (Luke 23:46)') },
    { text: 'per omnia saecula saeculōrum', gloss: T('for all ages of ages (liturgical)') },
    { text: 'fīdēs, spēs, caritās', gloss: T('faith, hope, love (1Cor 13:13)') },
    { text: 'manus tuae', gloss: T('your hands (gen. pl.)') },
    { text: 'diei illius', gloss: T('of that day (gen. sg. + gen. sg.)') },
    { text: 'rēs pūblica', gloss: T('the commonwealth, public affairs') },
    { text: 'spēs nostra', gloss: T('our hope (nom. sg.)') },
    { text: 'in manibus eius', gloss: T('in his hands (masculine possessor)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Fourth declension: {manus, -ūs}'),
      head: [T('Case'), T('Singular'), T('Plural')],
      rows: [
        ['Nominativo', 'manus', 'manūs'],
        ['Vocativo', 'manus', 'manūs'],
        ['Genitivo', 'manūs', 'manuum'],
        ['Dativo', 'manuī', 'manibus'],
        ['Acusativo', 'manum', 'manūs'],
        ['Ablativo', 'manū', 'manibus'],
      ],
    },
    {
      caption: T('Table 2 — Fifth declension: {diēs, -eīs}'),
      head: [T('Case'), T('Singular'), T('Plural')],
      rows: [
        ['Nominativo', 'diēs', 'diēs'],
        ['Vocativo', 'diēs', 'diēs'],
        ['Genitivo', 'diēī', 'diērum'],
        ['Dativo', 'diēī', 'diēbus'],
        ['Acusativo', 'diem', 'diēs'],
        ['Ablativo', 'diē', 'diēbus'],
      ],
    },
  ],
};
