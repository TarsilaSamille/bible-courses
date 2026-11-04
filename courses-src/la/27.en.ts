import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  title: T('Adverb, numeral and particle'),
  subtitle: T('{enim}, {autem}, {quoque}: the words that mean nothing alone and change everything'),
  section: T('Adverb'),
  body: C(`## Particles: neither subject nor verb

A Latin particle is not an abbreviation nor a leftover of syntax. It is a word with no lexeme, which is worth nothing by itself and only gains meaning when attached to another. {autem} means nothing in isolation: it means "however" because it comes right after a verb and marks that what follows contradicts what was said before. Take {autem} out of a sentence and the grammar does not change; the argument does.

What marks a particle is position. The Latin particle is **postpositive** or **enclitic**: it comes after the word it attaches to, or glued to it.

| Particle | Position | Value | Example |
|---|---|---|---|
| {quoque} | enclitic, glued | and also | {ipse quoque} |
| {igitur} | postpositive, 2nd | therefore | {dixit igitur} |
| {autem} | postpositive, 2nd | however | {audivit autem} |
| {enim} | postpositive, 2nd | for | {scimus enim} |
| {tamen} | mobile | nevertheless | {tamen non} |
| {ita} | free | thus | {ita est} |
| {itaque} | postpositive | and so | {itaque venit} |

The canonical order is verb, particle, rest. In {scimus autem quia ...}, {scimus} comes first and {autem} immediately after; that is why a translator unfamiliar with Latin tends to put the "however" at the front of the sentence and destroys the order of the argument.

## A numeral that became an adverb

Ordinals grow out of cardinals and some of them become adverbs without inflecting at all. {prīmum} is "for the first time" and also "first of all"; {deinde} is "then"; {iterum} and {rursus} are "again"; {denique} and {novīssimē} are "finally"; {tandem} is "at last". The same family has the multiplicative adverbs: {semel} "once", {bis} "twice", {ter} "three times", {quater} "four times". And there is a numeral adverb that is almost a verb: {plūs}, "more", in the sense of "in greater number".

The numeral also shows up as a measure, and that is why the Vulgate writes {annōs quīnquagintā} where English writes "fifty years": accusative of duration, with no preposition and no adverb at all.

## The elliptical negation of Paul

The particle that best explains the Vulgate is {nōn}, because in Paul it appears elliptical: on its own, without a verb and sometimes without a subject, standing for "it is not the case that", "by no means", "not to be thought". The English reader expects a word for each idea and finds a single negation; what it negates is sometimes the very conclusion the reader was ready to accept.

| Construction | Latin | English |
|---|---|---|
| simple negation | {nōn} | not |
| negation of an inference | {nōn} (alone) | it is not the case that |
| negation of an imperative | {nē} | do not |
| reinforced negation | {nēmō}, {nēnōn} | by no means |
| certainly not | {nē ... quidem} | certainly not |
| neither X nor Y | {nec ... nec} | neither X nor Y |
| double negation | {nōn ... nōn} | not at all |

{nē ... quidem} is the pair that puzzles people most: {quidem} means "certainly", and the negation comes first, so the sentence is an assertion that undoes itself. In 1 Timothy 4:12 Latin writes {nēmōne neglexeris iuventūtis tuae}, literally "in no way despise your youth": there are two negations, and the reinforcing word is {mō}, the very {mō} of {nēmō} = "by no means". English understands "do not despise"; Latin understands "by no means despise", and the force is in the adverb, not in the verb.

The most productive construction of all is the correction with {sed}: {nōn ... sed} and {nōn ... sed etiam}, "not only X, but also Y". Romans 1:16 has the shape: {primum Iudaeō, deinde et Graecō}.

## Romans 1:16

> **Non enim erubesco evangelium Dei: virtus enim Dei est ad salutem omni credenti, primum Iudaeo, deinde et Graeco.**

Five signals in a single sentence: {nōn} opens it, {enim} explains right after the verb, the second {enim} explains the power, {primum} and {deinde} mark the order of the audience. Notice that {Non enim erubesco} and {virtus enim Dei est} are the same construction repeated, and that the repetition is the argument: Paul is not ashamed, because the power of God is for salvation.

A word-for-word translation writes "not because I am ashamed of the gospel of God: because the power of God is for the salvation of everyone who believes, first of the Jew, also of the Greek". A translator who understands the particles writes "I am not ashamed of the gospel of God, for the power of God is for the salvation of everyone who believes, first the Jew, also the Greek". The difference between the two is the place of the justification: in Latin the "because" is a particle tied to the verb, and for that reason it cannot come first.`),
  vocab: [
    V('enim', 'enim', 'for (postpositive particle, 2nd position)'),
    V('autem', 'autem', 'however, but (postpositive particle)'),
    V('igitur', 'igitur', 'therefore (postpositive particle)'),
    V('itaque', 'itaque', 'and so (postpositive particle)'),
    V('quoque', 'quoque', 'and also (enclitic, postposed {que})'),
    V('tamen', 'tamen', 'nevertheless (adv. and particle, mobile position)'),
    V('ita', 'ita', 'thus (adv. of result and comparison)'),
    V('quidem', 'quidem', 'certainly (enclitic: with {nē} it gives "certainly not")'),
    V('nēmōne', 'nēmōne', 'in no way, by no means (adverb of negation)'),
    V('prīmum', 'primum', 'first (adv., from {prīmus})'),
    V('deinde', 'deinde', 'then, next (adv., from {secundus})'),
    V('iterum', 'iterum', 'again (numeral adverb)'),
    V('denique', 'denique', 'finally (numeral adverb)'),
    V('semel', 'semel', 'once (numeral adverb)'),
    V('bis', 'bis', 'twice (numeral adverb)'),
    V('ter', 'ter', 'three times (numeral adverb)'),
    V('sine', 'sine', 'without (preposition with the ablative)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Non enim erubesco evangelium Dei}, what is the function of {enim}?'),
    options: [
      T(
        'A postpositive particle: it gives the reason of {nōn} and attaches to the verb {erubesco}',
      ),
      T('An adverb of time: "so I am not ashamed"'),
      T('A conjunction that opens a subordinate clause'),
      T('An auxiliary of the future: "not these being ashamed"'),
    ],
    answer: 0,
    hint: T('Rule §1: a particle is postpositive, and {enim} means "for".'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('In {nēmōne neglexeris iuventūtis tuae}, how many negations are there and why?'),
      options: [
        T('Two: the {nē} of the imperative and the {mō} of the adverb {nēmō}, which reinforces'),
        T('One: only the initial {nē}'),
        T('Three: {nē}, {mō} and {nōn}'),
        T('None: {neglexeris} is already negative'),
      ],
      answer: 0,
      hint: T(
        'Rule §3: {nēmō} is the adverb "by no means", which adds to the {nē} of the imperative.',
      ),
    },
    {
      kind: 'fill',
      prompt: T(
        'In Romans 1:16, {primum Iudaeō, deinde et Graecō}: "first the Jew, ___ the Greek" is ___',
      ),
      answer: 'et',
      hint: T('The final correction uses {et} to add without repeating the noun.'),
    },
    {
      kind: 'fill',
      prompt: T('Which particle means "however" and is postpositive? ___'),
      answer: 'autem',
      hint: T('{autem} comes after the verb and marks contrast.'),
    },
    {
      kind: 'match',
      prompt: T('Match the particle to its value'),
      pairs: [
        { a: T('{enim}'), b: T('for (reason)') },
        { a: T('{autem}'), b: T('however (contrast)') },
        { a: T('{igitur}'), b: T('therefore (consequence)') },
        { a: T('{quidem}'), b: T('certainly (with {nē}: "certainly not")') },
      ],
      answer: [0, 1, 2, 3],
      hint: T('Rule §1: second position after the verb is theirs.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A particle is postpositive or enclitic: {scimus autem}, {ipse quoque}. The canonical order is verb, particle, rest.',
      ),
    },
    {
      n: '2',
      text: T(
        '{enim} = "for" (reason), {autem} = "however" (contrast), {igitur} = "therefore" (consequence), {quoque} = "and also", {tamen} = "nevertheless". None of them stands alone.',
      ),
    },
    {
      n: '3',
      text: T(
        'Negation is flexible: {nōn} in the indicative, {nē} in the imperative, {nēquīquam} and {frūstrā} as adverbs, {nec} = "neither". And {nē ... quidem} = "certainly not".',
      ),
    },
    {
      n: '4',
      text: T(
        'The numeral serves as an adverb in {prīmum}, {deinde}, {iterum}, {rursus}, {denique}, and as a multiplicative in {semel}, {bis}, {ter}, {quater}.',
      ),
    },
    {
      n: '5',
      text: T(
        'The correction with {sed} and {et} is the engine of Paul\'s prose: {nōn ... sed}, {nōn ... sed etiam} = "not only X, but also Y".',
      ),
    },
  ],
  notes: [
    {
      label: T('The particle explains the order of the words'),
      text: T(
        'Because the particle is postpositive, it locks the order: in {Non enim erubesco}, the negation comes first, the verb second, the particle third. A translation that inverts that order loses the emphasis, because in Latin the negation emphasises the speaker and the conjunction supplies the reason. That is the difference between "I am not ashamed of the gospel" and "of the gospel I am not ashamed": Latin gives the reason in the second case, and Greek does the same.',
      ),
    },
    {
      label: T('An adverb that comes from a numeral, a numeral that comes from an adverb'),
      text: T(
        '{iterum} is a numeral adverb, but in a sentence like {iterum deinde} it looks like a common adverb: Latin has few words for the ordinal and many for the adverb, and {primum}, {deinde}, {rursus} live on the border of the two fields. That is why Paul writes {iterum, deinde et rursus} "again, therefore, and once more": three Latin words for three plain adverbs in English, and none of them inflects.',
      ),
    },
  ],
  examples: [
    {
      text: 'Non enim erubesco evangelium Dei',
      gloss: T('I am not ashamed of the gospel of God (Rom 1:16: {nōn} + {enim})'),
    },
    { text: 'scimus autem quia', gloss: T('but we know that ({autem} marks the contrast)') },
    {
      text: 'dixit igitur',
      gloss: T('he said then ({igitur} = "therefore" or "then", according to context)'),
    },
    { text: 'ipsē quoque', gloss: T('he himself also ({quoque} enclitic)') },
    {
      text: 'nēmōne neglexeris iuventūtis tuae',
      gloss: T('by no means despise your youth (1 Tim 4:12)'),
    },
    { text: 'nē ... quidem', gloss: T('certainly not ({quidem} enclitic after {nē})') },
    { text: 'nōn solum sed etiam', gloss: T('not only but also') },
    {
      text: 'primum Iudaeō, deinde et Graecō',
      gloss: T('first the Jew, also the Greek (Rom 1:16)'),
    },
    { text: 'ter mortuus est', gloss: T('he died three times ({ter}, multiplicative)') },
    {
      text: 'iterum et deinde rursus',
      gloss: T('again, and then once more (three adverbs, one of them a numeral)'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — Particles and connective adverbs'),
      head: [T('Word'), T('Position'), T('Value'), T('Example')],
      rows: [
        ['{quoque}', 'enclítica', 'e também', '{ipse quoque}'],
        ['{igitur}', 'pós-positiva, 2.ª', 'portanto', '{dixit igitur}'],
        ['{autem}', 'pós-positiva, 2.ª', 'porém', '{audivit autem}'],
        ['{enim}', 'pós-positiva, 2.ª', 'pois', '{scimus enim}'],
        ['{tamen}', 'flexível', 'ainda assim', '{tamen non}'],
        ['{ita}', 'livre', 'assim', '{ita est}'],
        ['{itaque}', 'pós-positiva', 'e assim', '{itaque venit}'],
        ['{quidem}', 'enclítica', 'certamente', '{nē quidem}'],
      ],
    },
    {
      caption: T('Table 2 — Numeral used as an adverb'),
      head: [T('Form'), T('From the numeral'), T('Gloss'), T('Where')],
      rows: [
        ['{prīmum}', '{prīmus}', 'primeiro, em primeiro lugar', 'ordenação'],
        ['{deinde}', '{secundus}', 'depois, em seguida', 'sequência'],
        ['{iterum}', '{iterum}', 'de novo', 'repetição'],
        ['{rursus}', '{rursus}', 'outra vez, de novo', 'repetição'],
        ['{denique}', '{dēnique}', 'finalmente', 'fecho'],
        ['{semel}', '{semel}', 'uma vez', 'multiplicativo'],
        ['{bis}', '{duo}', 'duas vezes', 'multiplicativo'],
        ['{ter}', '{trēs}', 'três vezes', 'multiplicativo'],
        ['{quater}', '{quattuor}', 'quatro vezes', 'multiplicativo'],
      ],
    },
    {
      caption: T('Table 3 — The five forms of negation'),
      head: [T('Latin'), T('Portuguese'), T('Where it appears'), T('Example')],
      rows: [
        ['{nōn}', 'não', 'indicativo, orações', '{nōn} timeō'],
        ['{nē}', 'não', 'imperativo, final negativa', '{nē} neglexeris'],
        ['{nēquīquam}', 'em vão, de nada', 'advérbio', '{nēquīquam} laborāre'],
        ['{nēmō}', 'de modo algum', 'reforça a negação', '{nēmō} timeō'],
        ['{nec}', 'nem', 'liga duas negações', '{nec} ... {nec}'],
        ['{frūstrā}', 'em vão', 'advérbio', '{frūstrā} laborāre'],
      ],
    },
  ],
};
