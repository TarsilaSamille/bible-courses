import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('The first declension'),
  subtitle: T('{puella, puellae} — six forms, six jobs'),
  section: T('Declensions and the verb sum'),
  body: C(`## The -a theme

Almost every Latin feminine noun ends in {a}: {puella} «girl», {rosa} «rose», {via} «way», {tabula} «tablet», {família} «family». This declension is the easiest and the most frequent, which is why it comes first in every method.

The theme is the stem plus the nominative {a}: from {puella} the theme is {puellā-}. You slot the case-and-number endings onto that theme:

| Number | Case | Ending | Form |
|---|---|---|---|
| singular | nominative | -a | puellă |
| singular | vocative | -a | puellă |
| singular | genitive | -ae | puellāe |
| singular | dative | -ae | puellāe |
| singular | accusative | -am | puellām |
| singular | ablative | -ā | puellā |

The macron marks a long vowel: in {puellām} the {a} is long and the accent rests on it.

## The plural

The plural replaces {a} with {ae} and lengthens short themes with {i}: {puellae} «girls», {viae} «ways», {tabulae} «tablets». In first-declension feminines the plural accusative ends in {ās}: {puellās} «the girls» — the same ending as the singular accusative, plus the s.

Note a detail that saves a lot of work: genitive and dative are **identical** throughout the declension, {ae} in the singular and {īs} in the plural. Context decides which is which.

## How context picks the case

- Genitive: possession or relation — the rose {puellae ROSAE} «of the girl».
- Dative: recipient — {puellae ROSAM dat} «he gives the rose to the girl».
- Accusative: direct object — {puellam rosam amat} «the girl loves the rose».
- Ablative: means, place, agent — {rosā puer amat} «the boy loves with the rose».

Accusative and ablative are the two doors of the verb: choose the meaning and the case follows.

## A reading exercise

In the Vulgate of Luke, Mary's song (Luke 1:46) repeats the same noun in different cases:

{Et magnificat anima mea Dominum} «And my soul magnifies the Lord» — {anima} is nominative, the subject.
{Et exsultavit spiritus meus in Deo salutari meo} «and my spirit rejoiced in God, my Saviour» — {Deo} is ablative of place without {in}.
{Quia respexit humilitatem ancillae suae} «because he regarded the lowliness of his handmaid» — {humilitatem} is accusative, governed by {respexit} «he regarded».`),
  vocab: [
    V('puella', 'puella', 'girl'),
    V('rosa', 'rosa', 'rose'),
    V('via', 'via', 'way, road'),
    V('tabula', 'tabula', 'tablet, document'),
    V('porta', 'porta', 'door'),
    V('aqua', 'aqua', 'water'),
    V('terra', 'terra', 'earth'),
    V('familia', 'familia', 'family'),
    V('provincia', 'provincia', 'province'),
    V('schola', 'schola', 'school'),
    V('stella', 'stella', 'star'),
    V('luna', 'luna', 'moon'),
    V('amica', 'amica', 'female friend'),
    V('anima', 'anima', 'soul'),
    V('maria', 'maria', 'Mary (of the Magnificat)'),
    V('ancilla', 'ancilla', 'handmaid'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {puellās}, what is the case and why?'),
    options: [
      T('Genitive plural: it ends in -ās'),
      T('Accusative plural: -ās is the first-declension plural accusative'),
      T('Dative plural: -īs'),
      T('Ablative plural: -īs'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Genitive singular of {via}: via_'),
      answer: 'viae',
      hint: T('Genitive and dative are identical: -ae.'),
    },
    {
      kind: 'choose',
      prompt: T('In {puellae rosam dat}, what function does {puellae} have?'),
      options: [
        T('Genitive: possession'),
        T('Dative: recipient'),
        T('Accusative: direct object'),
        T('Ablative: means'),
      ],
      answer: 1,
      hint: T('Rule §3: the recipient takes the dative.'),
    },
    {
      kind: 'match',
      prompt: T('Match {tabula} to the matching case'),
      pairs: [
        { a: T('tabulam'), b: T('accusative singular') },
        { a: T('tabula (liber est bonus)'), b: T('nominative singular') },
        { a: T('o tabula, audi me'), b: T('vocative singular (also -a)') },
        { a: T('tabularum'), b: T('genitive plural') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('The first declension gathers the -a feminines; the theme is the stem plus {ā}.'),
    },
    {
      n: '2',
      text: T(
        'Genitive and dative share one form throughout the declension: {ae} in the singular, {īs} in the plural.',
      ),
    },
    {
      n: '3',
      text: T(
        'Plural accusative {-ās} and plural ablative {-īs} are the two doors of the verb: direct object on one side, means on the other.',
      ),
    },
    {
      n: '4',
      text: T(
        'The singular accusative {-am} separates the object from the singular ablative {-ā}: the macron is the only test.',
      ),
    },
    { n: '5', text: T('Nominative and vocative coincide in -a; only context tells them apart.') },
  ],
  notes: [
    {
      label: T('Latin macron:'),
      text: T(
        'Vulgate texts come printed with no macrons at all. They are here so that you can see the long vowel; if a word appears without a macron on screen, the sound is identical. People writing Latin today normally leave them all off rather than triple the alphabet on the keyboard.',
      ),
    },
    {
      label: T('Isolating language:'),
      text: T(
        '{Puella pulchra rosam habet}: the beautiful girl has a rose. Portuguese would say «the girl has a beautiful rose» — the adjective moves depending on the noun it modifies. Latin word order is freer, and it is **agreement**, not position, that ties the adjective to its noun.',
      ),
    },
  ],
  examples: [
    { text: 'puella', gloss: T('the girl (nominative singular)') },
    { text: 'puellae', gloss: T('of the girl, or to the girl (gen./dat. singular)') },
    { text: 'puellam', gloss: T('the girl (accusative singular)') },
    { text: 'puellā', gloss: T('by the girl, with the girl (ablative singular)') },
    { text: 'puellarum', gloss: T('of the girls (genitive plural)') },
    { text: 'puellis', gloss: T('to the girls, with the girls (dat./abl. plural)') },
    { text: 'rosa', gloss: T('rose') },
    { text: 'rosam', gloss: T('the rose (object)') },
    { text: 'via', gloss: T('way (nom.), «way of life»') },
    { text: 'ancilla', gloss: T('handmaid — in Luke 1:48 Mary calls herself an {ancilla}') },
  ],
  tables: [
    {
      caption: T('Table 1 — First declension: {puella, -ae}'),
      head: [T('Case'), T('Singular'), T('Plural')],
      rows: [
        ['Nominativo', 'puellă', 'puellae'],
        ['Vocativo', 'puellă', 'puellae'],
        ['Genitivo', 'puellāe', 'puellārum'],
        ['Dativo', 'puellāe', 'puellīs'],
        ['Acusativo', 'puellām', 'puellās'],
        ['Ablativo', 'puellā', 'puellīs'],
      ],
    },
    {
      caption: T('Table 2 — Other first-declension themes: what changes'),
      head: [T('Nom. sing.'), T('Gen. sing.'), T('Abl. sing.'), T('Note')],
      rows: [
        ['rosa', 'rosae', 'rosā', T('short, no {i} in the plural')],
        ['via', 'viae', 'viā', T('same')],
        ['tabula', 'tabulae', 'tabulā', T('with {i}: {tabulīs}')],
        ['familia', 'familiae', 'familiā', T('the {i} is short: {familiaris}')],
      ],
    },
  ],
};
