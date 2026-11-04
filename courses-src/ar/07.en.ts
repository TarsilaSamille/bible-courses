import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('Iḍāfa and the Lord’s Prayer'),
  subtitle: T('Noun construction: from house to kingdom'),
  section: T('Readings'),
  body: C(`## What iḍāfa is

Iḍāfa links two nouns like a phrase without a verb. The first is the **construct**: it loses the article and nunation and takes the ending of the case the clause requires. The second is the **governed**: it keeps the article and the case. In {بَيْتُ اللهِ}, {بَيْتُ} is construct and {اللهِ} governed; the ending {ـِ} shows that the whole iḍāfa is governed by something outside it.

## Reading it correctly

Iḍāfa is ambiguous when the last word can also be read on its own. {كَلِمَةُ اللهِ} can be "the word of God" or "the word that is God" — context decides. Compare {مَلَكُوتُ السَّمَاوَاتِ} with {مَلَكُوتُ}: in the first, {السَّمَاوَاتِ} is governed and genitive; in the second, {مَلَكُوتُ} stands alone and nominative.

## In the Lord's Prayer

The Lord's Prayer is full of iḍāfas: {أَبَانَا} (which is construct before {الَّذِي}), {مَلَكُوت} and {مَشِيئَة}. When the second element is a relative pronoun, it is the pronoun that receives the article and the case: in {أَبَانَا الَّذِي} it is {الَّذِي} that carries definiteness.

## Reading criterion

When you see two nouns side by side in a verse, assume iḍāfa until proven otherwise: strip the article from the first and check whether the second is genitive. If it is, you have an iḍāfa — and the translation must keep the genitive.`),
  vocab: [
    V('أَبَانَا', 'أب', 'our Father'),
    V('الَّذِي', 'الذي', 'who; which'),
    V('السَّمَاوَات', 'سماء', 'the heavens'),
    V('اسْم', 'اسم', 'name'),
    V('مَلَكُوت', 'ملكوت', 'kingdom'),
    V('مَشِيئَة', 'مشية', 'will'),
    V('خُبْز', 'خبز', 'bread'),
    V('كَفَّافًا', 'كف', 'sustenance'),
    V('بَيْت', 'بيت', 'house'),
    V('الله', 'الله', 'God'),
    V('إِلَهِي', 'إله', 'my God'),
    V('تَرَكْتَنِي', 'ترك', 'you forsake me'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What characterizes the first member of an iḍāfa?'),
    options: [
      T('It loses {ال} and nunation'),
      T('It always takes {ال}'),
      T('It requires a written preposition'),
      T('It is always feminine'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: ___ اللهِ (house of God).'),
      answer: 'بَيْتُ',
      hint: T('No article, and with the case governed by the preposition.'),
    },
    {
      kind: 'match',
      prompt: T('Match form and function.'),
      pairs: [
        { a: T('our Father'), b: T('father + our') },
        { a: T('my God'), b: T('God + my') },
        { a: T('you left me'), b: T('verb + me') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'choose',
      prompt: T('In {مَلَكُوتُ السَّمَاوَاتِ}, which word is construct?'),
      options: [T('السماء'), T('مَلَكُوتُ'), T('الذي'), T('اسم')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T('The first member cannot retain {ال} or nunation: {بَيْتُ اللهِ}, not {البيتُ}.'),
    },
    {
      n: '2',
      text: T(
        'The second member may be definite: {بَيْتُ اللهِ}; absence of {ال} can indicate indefiniteness.',
      ),
    },
    {
      n: '3',
      text: T(
        'The translation “of” explains the relation but does not imply a written preposition between the words.',
      ),
    },
  ],
  notes: [
    {
      label: T('Deep iḍāfa'),
      text: T('A chain can link more than two nouns: {كَلِمَةُ رَبِّ الْعَالَمِينَ}.'),
    },
  ],
  examples: [
    { text: 'أَبَانَا الَّذِي فِي السَّمَاوَاتِ', gloss: T('Our Father who art in heaven') },
    { text: 'كَلِمَةُ اللهِ', gloss: T('the Word of God') },
    { text: 'إِلَهِي، إِلَهِي، لِمَاذَا تَرَكْتَنِي؟', gloss: T('My God, my God, why have you forsaken me?') },
  ],
  tables: [
    {
      caption: T('Iḍāfa'),
      head: [T('Word'), T('Role'), T('Portuguese')],
      rows: [
        ['بَيْتُ', 'modificador construído', 'casa de'],
        ['اللهِ', 'regido', 'Deus'],
        ['كَلِمَةُ', 'modificador construído', 'Palavra de'],
        ['مَلَكُوتُ السَّمَاوَاتِ', 'construto + regido', 'reino dos céus'],
      ],
    },
  ],
};
