import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('Weak verbs'),
  subtitle: T('Roots with و, ي, or ا'),
  section: T('The verb'),
  body: C(`## What makes a root weak

A strong root has three consonants. A weak root has {و} or {ي} as medial or final consonant, and that changes the shape of the paradigm: one of the consonants disappears in some tenses and reappears in others. Recognising the class from the paradigm is safer than guessing from the root.

## The hollow root

{ق-و-ل} is hollow because the medial {و} disappears: in the perfect it becomes {قَالَ}, in the future {سَيَقُولُ}. The {و} reappears exactly where the root needs support and vanishes where the ending already carries the vowel. Compare {يَقُولُ} with {قَالَ} and the pattern is plain.

## The defective root

{د-ع-و} ends in {و} and the forms accordingly appear as {دَعَا} or {يَدْعُو} — the last letter carries the weight. In {نَسِيَ} and {يَنْسَى} the same happens with {ي}. The {ا} of the perfect replaces the weak consonant.

## The assimilated root

{و-ج-د} is assimilated: the initial {و} appears in the perfect, as in {وَجَدَ} "he found", but not in the imperfect, {يَجِدُ}. The root loses a letter at both ends, which makes it an intermediate case between strong and weak.

## Reading criterion

When you see a verb with fewer than three consonants, do not write it off as defective. List the forms you know and look for which consonant comes back in each tense — the pattern reveals the underlying root and its meaning.`),
  vocab: [
    V('قَالَ', 'قال', 'said'),
    V('يَقُولُ', 'قال', 'says'),
    V('قِيلَ', 'قال', 'was said'),
    V('بَاعَ', 'باع', 'sold'),
    V('يَبِيعُ', 'باع', 'sells'),
    V('دَعَا', 'دعا', 'called'),
    V('يَدْعُو', 'دعا', 'calls'),
    V('وَجَدَ', 'وجد', 'found'),
    V('يَجِدُ', 'وجد', 'finds'),
    V('نَسِيَ', 'نسي', 'forgot'),
    V('يَنْسَى', 'نسي', 'forgets'),
    V('خَافَ', 'خاف', 'feared'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which root produces {قَالَ} and {يَقُولُ}?'),
    options: [T('q-w-l'), T('d-ʿ-w'), T('w-j-d'), T('n-s-y')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the imperfect of {بَاعَ}: ___ (he sells).'),
      answer: 'يَبِيعُ',
      hint: T('It is a hollow root.'),
    },
    {
      kind: 'match',
      prompt: T('Match root and class.'),
      pairs: [
        { a: T('q-w-l'), b: T('hollow') },
        { a: T('d-ʿ-w'), b: T('defective') },
        { a: T('w-j-d'), b: T('assimilated') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'choose',
      prompt: T('What is absent in {يَجِدُ}?'),
      options: [T('the initial root {و}'), T('the medial {ا}'), T('the article'), T('the plural')],
      answer: 0,
    },
  ],
  rules: [
    { n: '1', text: T('In hollow verbs, perfect {ا} corresponds to imperfect {و} or {ي}.') },
    {
      n: '2',
      text: T('In defective verbs, the final root letter is {و} or {ي}; compare {دَعَا} and {يَدْعُو}.'),
    },
    {
      n: '3',
      text: T(
        'A form is secure only when enough of the paradigm is known; do not force a root from one word.',
      ),
    },
  ],
  notes: [
    {
      label: T('Root'),
      text: T(
        'One root can yield a verbal noun, participle, and passive: {قَالَ} → {قَوْل} → {قَائِل} → {مَقُول}.',
      ),
    },
  ],
  examples: [
    { text: 'قَالَ الرَّبُّ', gloss: T('the Lord said') },
    { text: 'وَتَدْعُو اسْمَهُ يَسُوعَ', gloss: T('you shall call his name Jesus') },
    { text: 'لَا تَخَفْ', gloss: T('do not fear') },
  ],
  tables: [
    {
      caption: T('Selected paradigms'),
      head: [T('Type'), T('Root'), T('Perfect'), T('Imperfect')],
      rows: [
        ['oca', 'ق-و-ل', 'قَالَ', 'يَقُولُ'],
        ['oca', 'ب-ا-ع', 'بَاعَ', 'يَبِيعُ'],
        ['defectiva', 'د-ع-و', 'دَعَا', 'يَدْعُو'],
        ['assimilada', 'و-ج-د', 'وَجَدَ', 'يَجِدُ'],
      ],
    },
  ],
};
