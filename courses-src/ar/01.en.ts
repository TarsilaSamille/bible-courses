import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('The Arabic alphabet'),
  subtitle: T('28 letters, right to left'),
  section: T('Alphabet and writing'),
  body: C(`## The direction of writing

Arabic is read and written from RIGHT to LEFT, and letters change shape according to position: initial, medial, final or isolated. In {الْكَلِمَةُ} the letter {ك} looks different from when it stands alone, and so do the others. Punctuation is optional in traditional writing: reading is guided by context.

## The 28 letters

There are 28 letters, plus {ة} and {ء} — which traditional counts treat as separate forms. Compare the sounds with Latin: {ب} [b] and {ت} [t] coincide; {ج} has [ʒ] and {غ} has [ɣ], both absent from Portuguese; {ح} and {ه} are strong h-like fricatives, and so are {خ} and {ه}. The letter {ع} has no Portuguese equivalent: it is a pharyngeal.

## Joining forms

A letter changes shape when it joins the one that follows. This applies to {بـ-ب-ب} and to the rest; only six letters — {ا د ذ ر ز و} — never join what follows, because they occur only at the start or the end of a word. That is why {الله} is read alif-lam-lam-hā, with the two lams joined.

## Vowel notation

Biblical text carries short vowels above and below the consonants: {كَتَبَ} is ka-ta-ba. They are not accents but pronunciation information, and they are always present. {سْ} marks the absence of a vowel. The same consonantal skeleton can therefore be read differently depending on the vowels.

## Reading criterion

Read the consonantal skeleton of the word first, then the vowels. On meeting {قُلْ}, identify {ق} as the verbal root and the vowels as marking tense and person — the first step into lesson 3.`),
  vocab: [
    V('ا', 'ا', 'alif'),
    V('ب', 'ب', 'ba'),
    V('ت', 'ت', 'ta'),
    V('ث', 'ث', 'tha'),
    V('ج', 'ج', 'jim'),
    V('ح', 'ح', 'ha'),
    V('خ', 'خ', 'kha'),
    V('د', 'د', 'dal'),
    V('ذ', 'ذ', 'dhal'),
    V('ر', 'ر', 'ra'),
    V('س', 'س', 'sin'),
    V('ص', 'ص', 'sad'),
    V('ط', 'ط', 'emphatic ta'),
    V('ع', 'ع', 'ayn'),
    V('ف', 'ف', 'fa'),
    V('ق', 'ق', 'qaf'),
    V('ك', 'ك', 'kaf'),
    V('ل', 'ل', 'lam'),
    V('م', 'م', 'mim'),
    V('ن', 'ن', 'nun'),
    V('ه', 'ه', 'ha'),
    V('و', 'و', 'waw'),
    V('ي', 'ي', 'ya'),
    V('الله', 'الله', 'God'),
    V('نُور', 'نور', 'light'),
    V('كَلِمَة', 'كلمة', 'word'),
    V('حَيَاة', 'حياة', 'life'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which way is Arabic read?'),
    options: [
      T('From left to right'),
      T('From right to left'),
      T('Top to bottom'),
      T('In columns'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Write the 28 core letters in standard order.'),
      answer: 'ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي',
      hint: T('Start with ا and end with ي.'),
    },
    {
      kind: 'match',
      prompt: T('Match sounds to letters.'),
      pairs: [
        { a: T('ba'), b: T('ب') },
        { a: T('kha'), b: T('خ') },
        { a: T('ayn'), b: T('ع') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'choose',
      prompt: T('Which mark indicates i?'),
      options: [T('fatha'), T('kasra'), T('ḍamma'), T('sukun')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('Reading runs from right to left.') },
    { n: '2', text: T('Six letters — ا د ذ ر ز و — join only to the preceding letter.') },
    { n: '3', text: T('Short vowels are written with fatha َ, kasra ِ, and ḍamma ُ.') },
  ],
  notes: [
    { label: T('Pronunciation'), text: T('Vowels are clear; consonant articulation is implied.') },
  ],
  examples: [
    { text: 'نُور', gloss: T('nūr — light') },
    { text: 'كَلِمَة', gloss: T('kalima — word') },
    { text: 'بَيْت', gloss: T('bayt — house; joining makes it readable') },
  ],
  tables: [
    {
      caption: T('Letters and sounds'),
      head: [T('Group'), T('Letters'), T('Notes')],
      rows: [
        ['alif, wāw, yāʾ', 'ا و ي', 'Não formam por si só sílaba aberta'],
        [
          'consonantes aspiradas',
          'ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه',
          'Permitem sílabas fechadas',
        ],
        ['hamza', 'ء أ إ ؤ ئ', 'Indica som de vogal ou consoante glotal'],
      ],
    },
  ],
};
