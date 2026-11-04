import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('Derived forms II–X'),
  subtitle: T('Roots forming action, intensity, and reflexion'),
  section: T('The verb'),
  body: C(`## One root, many verbs

The same triconsonantal root can generate verbs of different senses, and the vowel pattern is what organises that family. With the root {علم}, form I is neutral; form II {عَلَّمَ} is intensive: {عَلَّمَ} is "he taught" rather than "he knew". Form II often takes the {ف} prefix for factitive meaning, as in {فَعَّلَ}.

## The forms and what they mean

Form III {فَاعَلَ} suggests opposition or participation: {شَارَكَ} is "he shared". Forms IV {أَفْعَلَ} and X {اِسْتَفْعَلَ} point at result or directed action — {أَرْسَلَ} "he sent", {أَنْزَلَ} "he brought down" — and X suggests request or attempt: {اِسْتَغْفَرَ} "he asked forgiveness". Form V {تَفَعَّلَ} suggests intensity or result: {تَعَلَّمَ} "he learned", {اِجْتَمَعَ} "they gathered".

## What is not literal translation

None of these forms is rendered by calculation. One root can generate verbs whose exact sense has to be memorised, and the vocalisation {َ} {ِ} {ُ} {ْ} belongs to the pattern rather than being ornament. That is why context and the full list of forms are safer than guessing from the root's meaning.

## Reading criterion

When you recognise a known root, first ask which derived form appears — II, V or X — and only then look for the sense. The form carries information a Portuguese dictionary does not convey.`),
  vocab: [
    V('عَلَّمَ', 'علم', 'taught'),
    V('قَدَّسَ', 'قدس', 'sanctified'),
    V('قَاتَلَ', 'قاتل', 'fought'),
    V('شَارَكَ', 'شارك', 'shared'),
    V('أَرْسَلَ', 'أرسل', 'sent'),
    V('أَنْزَلَ', 'أنزل', 'brought down'),
    V('تَعَلَّمَ', 'تعلم', 'learned'),
    V('اِجْتَمَعَ', 'اجتمع', 'gathered'),
    V('اِسْتَغْفَرَ', 'استغفر', 'sought forgiveness'),
    V('بَارَكَ', 'بارك', 'blessed'),
    V('بَرَكَ', 'بارك', 'blessed'),
    V('كَتَبَ', 'كتب', 'wrote'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which form is {عَلَّمَ}?'),
    options: [T('I'), T('II'), T('IV'), T('X')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Which example is form IV?'),
      options: [T('كَتَبَ'), T('بارك'), T('أرسل'), T('استغفر')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Match root and derivative.'),
      pairs: [
        { a: T('r-s-l'), b: T('sent') },
        { a: T('j-m-ʿ'), b: T('gathered') },
        { a: T('gh-f-r'), b: T('forgave') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'fill',
      prompt: T('Complete the verbal noun of writing: ___āba.'),
      answer: 'كِتَابَة',
      hint: T('Begin with the root ك-ت-ب.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Identify the root before memorizing the verb; weak roots can alter the pattern.'),
    },
    {
      n: '2',
      text: T('The pattern’s value follows context; do not translate affixes mechanically.'),
    },
    {
      n: '3',
      text: T('Derived forms remain verbs: they preserve person, tense, and transitivity.'),
    },
  ],
  notes: [
    {
      label: T('Three-letter roots'),
      text: T(
        'Historical analysis helps, but root function should be learned from several derivatives.',
      ),
    },
  ],
  examples: [
    { text: 'عَلَّمَ', gloss: T('II of علم: “made known”; “taught”') },
    { text: 'تَعَلَّمَ', gloss: T('V of علم: reflexive pattern; “learned”') },
    { text: 'بَارَكَ اللهُ إِبْرَاهِيمَ', gloss: T('God blessed Abraham') },
  ],
  tables: [
    {
      caption: T('Essential verbal forms'),
      head: [T('Form'), T('Pattern'), T('Examples')],
      rows: [
        ['I', 'فَعَلَ', 'كَتَبَ: escrever'],
        ['II', 'فَعَّلَ', 'عَلَّمَ: ensinar; قَدَّسَ: santificar'],
        ['III', 'فَاعَلَ', 'بَارَكَ: abençoar; شَارَكَ: participar'],
        ['IV', 'أَفْعَلَ', 'أَرْسَلَ: enviar; أَنْزَلَ: fazer descer'],
        ['V', 'تَفَعَّلَ', 'تَعَلَّمَ: aprender'],
        ['VIII', 'اِفْتَعَلَ', 'اِجْتَمَعَ: reunir-se'],
        ['X', 'اِسْتَفْعَلَ', 'اِسْتَغْفَرَ: pedir perdão'],
      ],
    },
  ],
};
