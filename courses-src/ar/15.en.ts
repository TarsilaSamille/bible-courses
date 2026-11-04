import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  title: T('Passive and course synthesis'),
  subtitle: T('كُتِبَ: result and agent'),
  section: T('Course synthesis'),
  body: C(`## What the passive does

The Arabic passive foregrounds the result or the state and normally **omits the agent**. It is not an empty stylistic transformation: when the agent is irrelevant or already known, dropping it frees the structure. In {كُتِبَ} "it was written", no one says who wrote it — and in {خُلِقَ} "it was created" the agent is God, whom the text need not name.

## The change of vocalisation

In the perfect, {كَتَبَ} becomes {كُتِبَ}: the vowels invert. In the imperfect, {يَكْتُبُ} becomes {يُكْتَبُ}. With weak roots the vocalisation follows the root, not the ending: {قَالَ} → {قِيلَ} and {وَلَدَ} → {وُلِدَ}. Notice that {قِيلَ} resembles neither {قَالَ} nor {يَقُولُ} — that is the only way to recognise the form.

## Explicit agent

When the author needs to name the agent, {مِنْ قِبَلِ} or {بِـ} plus the verbal form are used. {مِنْ قِبَلِ} is literally "from the part of" and appears in {كُتِبَ مِنْ قِبَلِ}. A reader who translates only the passive loses the explicit agent, which is precisely the new information.

## What this chapter closes

The path ran from the letter to the system: alphabet and vowels (1), article and gender (2), root and perfect (3), applied reading (4), derived forms (5), iḍāfa (6), moods and tense (7), weak roots (8), participles (9), adjectives (10), prepositions (11), numerals (12), questions and conditionals (13). The passive (14) ties it all together, because it uses root, vocalisation, tense and agent in a single form.

## Reading criterion

On meeting a form with an initial {مُ}, a {ِ} under the first consonant or a final {ُ}, treat it as passive before hunting for an agent. Then go back to the root and check whether the sense allows it: not every verb has a natural passive in every tense.`),
  vocab: [
    V('كُتِبَ', 'كتب', 'was written'),
    V('خُلِقَ', 'خلق', 'was created'),
    V('قِيلَ', 'قال', 'was said'),
    V('بُورِكَ', 'بارك', 'was blessed'),
    V('يُكْتَبُ', 'كتب', 'is being written'),
    V('مِنْ', 'من', 'from; by'),
    V('قِبَلَ', 'قبل', 'before; by'),
    V('وُلِدَ', 'ولد', 'was born'),
    V('صُلِبَ', 'صلب', 'was crucified'),
    V('قُبِرَ', 'قبر', 'was buried'),
    V('قَامَ', 'قام', 'rose'),
    V('تَمَّتَ', 'تمم', 'was completed'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How is the passive of {كَتَبَ} formed?'),
    options: [
      T('With an auxiliary'),
      T('By changing vowels'),
      T('With a prefix'),
      T('With a suffix'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the passive: {قَالَ} → ___'),
      answer: 'قِيلَ',
      hint: T('It is the passive of a hollow root.'),
    },
    {
      kind: 'choose',
      prompt: T('Which phrase expresses a resulting state?'),
      options: [T('writing'), T('written'), T('was written'), T('writes')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Match verb and structure.'),
      pairs: [
        { a: T('was born'), b: T('passive') },
        { a: T('rose'), b: T('active') },
        { a: T('is written'), b: T('passive imperfect') },
      ],
      answer: [0, 1, 2],
    },
  ],
  rules: [
    { n: '1', text: T('Arabic passive emphasizes result and dispenses with the agent.') },
    {
      n: '2',
      text: T(
        'The vowel transformation is systematic: initial fatha → ḍamma; second-vowel kasra → fatha.',
      ),
    },
    {
      n: '3',
      text: T(
        'Do not confuse participle {مَكْتُوب} with perfect passive {كُتِبَ}: one describes, the other reports a process.',
      ),
    },
  ],
  notes: [
    {
      label: T('Synthesis'),
      text: T(
        'From {ال} to the creed, biblical reading grows: direction, roots, suffixes, and prefixes prepare you for further passages.',
      ),
    },
  ],
  examples: [
    { text: 'كُتِبَ الإِنْجِيلُ', gloss: T('the Gospel was written') },
    { text: 'وُلِدَ يَسُوعُ', gloss: T('Jesus was born') },
    { text: 'صُلِبَ وَقُبِرَ وَقَامَ', gloss: T('was crucified, buried, and rose') },
  ],
  tables: [
    {
      caption: T('Active and passive'),
      head: [T('Type'), T('Active'), T('Passive')],
      rows: [
        ['perfeito', 'كَتَبَ', 'كُتِبَ'],
        ['imperfeito', 'يَكْتُبُ', 'يُكْتَبُ'],
        ['raiz oca', 'قَالَ', 'قِيلَ'],
        ['raiz inicial fraca', 'وَلَدَ', 'وُلِدَ'],
      ],
    },
  ],
};
