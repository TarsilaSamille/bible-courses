import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('Prepositions and adverbs'),
  subtitle: T('Relation, time, and place'),
  section: T('The noun'),
  body: C(`## The preposition governs the case

A prepositional particle is not merely "to": it determines the case of the noun that follows. {فِي الْبَدْءِ} puts the noun in the genitive, and the ending {ـِ} is the proof. So does {إِلَى النُّورِ}. So does {عَلَى السَّمَاءِ}. The ending of the governed noun is the most reliable marker there is: read the word, not the preposition.

## The mark of government

The noun loses the indefinite form and takes the genitive, visible both in a common noun ({الْبَدْءِ}) and in pronouns: {مِنْهُ}, {إِلَيْهِ}, {عَلَيْهِ}. When the ending is ambiguous, the following preposition breaks the tie — which is why biblical text repeats prepositions and names.

## {مَعَ} and pronouns

{mَعَ} means "with", but with pronouns it takes two forms: {مَعَنَا}, {مَعَهُ} (accusative) and {مَعِى}, {مَعَهُ} (genitive) depending on position. Treat {مَعَ} as two distinct prepositions and the analysis becomes safe. The same holds for {حَاشَا} and {خِلَافَ}, which require the genitive.

## Reading criterion

Start from the noun, identify the case from the ending, and only then attach the preposition. If the ending shows a genitive, translate the relation instead of repeating the preposition as a generic "of" — in {مِنَ اللهِ} the preposition is already inside the word.`),
  vocab: [
    V('فِي', 'في', 'in; within'),
    V('مِنْ', 'من', 'from; of'),
    V('إِلَى', 'إلى', 'to; until'),
    V('عَلَى', 'على', 'on; upon'),
    V('مِنْ', 'من', 'from'),
    V('بِاسْمِ', 'اسم', 'in the name of'),
    V('مَعَ', 'مع', 'with'),
    V('عِنْدَ', 'عند', 'at; with'),
    V('بَيْنَ', 'بين', 'between'),
    V('كَانَ', 'كان', 'to be'),
    V('أَيْضًا', 'أيضا', 'also'),
    V('الآنَ', 'الآن', 'now'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What case do {فِي}, {مِنْ}, {إِلَى}, and {عَلَى} govern?'),
    options: [T('genitive'), T('nominative'), T('accusative'), T('vocal')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('In {مِنَ ___} (from God), complete the noun.'),
      answer: 'اللهِ',
      hint: T('The noun is genitive.'),
    },
    {
      kind: 'choose',
      prompt: T('Which phrase uses “also”?'),
      options: [T('also'), T('here'), T('to'), T('with')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match preposition and meaning.'),
      pairs: [
        { a: T('in'), b: T('in') },
        { a: T('from'), b: T('from') },
        { a: T('on'), b: T('on') },
      ],
      answer: [0, 1, 2],
    },
  ],
  rules: [
    { n: '1', text: T('Prepositions normally govern the genitive of the following noun.') },
    { n: '2', text: T('The -i ending is a case clue: {بَيْتِ} after {فِي}.') },
    {
      n: '3',
      text: T(
        'Adverbs are not governed nouns: {هُنَا} means “here” and can occupy a freer position.',
      ),
    },
  ],
  notes: [
    {
      label: T('Case'),
      text: T('The same particle may change with its complement: {مَعَ اللهِ} versus {مَعَنَا}.'),
    },
  ],
  examples: [
    { text: 'فِي السَّمَاوَاتِ', gloss: T('in the heavens') },
    { text: 'عِنْدَ اللهِ', gloss: T('with God') },
    { text: 'اللهُ مَعَنَا', gloss: T('God with us') },
  ],
  tables: [
    {
      caption: T('Main prepositions'),
      head: [T('Preposition'), T('Portuguese'), T('Case')],
      rows: [
        ['فِي', 'em; dentro', 'genitivo'],
        ['مِنْ', 'de; desde', 'genitivo'],
        ['إِلَى', 'a; até', 'genitivo'],
        ['عَلَى', 'sobre', 'genitivo'],
        ['مَعَ', 'com', 'genitivo; acusativo pronominal'],
      ],
    },
  ],
};
