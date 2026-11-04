import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  title: T('The plural and its patterns'),
  subtitle: T('كُتُب، رِجَال، مُعَلِّمُون، مُعَلِّمَات'),
  section: T('Alphabets and writing'),
  body: C(`## The plural that is only a suffix

A regular plural adds a suffix and touches nothing else. The masculine takes {ـون} in the nominative and {ـين} in the other cases: {مُعَلِّمُونَ} and {مُعَلِّمِينَ}. The feminine takes {ـات} in all of them: {مُعَلِّمَاتٌ} and {مُعَلِّمَاتٍ}.

What decides it is gender, not meaning. {مُعَلِّم} is masculine, so its regular plural is {مُعَلِّمُونَ}; {مُعَلِّمَة} is feminine, and the regular plural is {مُعَلِّمَاتٌ}. A noun with nothing to do with people follows the same count: {كِتَاب} is masculine and has {كُتُب}, while {شَجَرَة} is feminine and has {أَشْجَار}.

There is then a restriction that is usually the first surprise: **the regular masculine plural is reserved for human males** and for a few abstractions. {رَجُل} becomes neither {رَجُول} nor {رَجُلان} as a normal plural, but {رِجَال}. That is why {أَقْوَال} is the plural of {قَوْل} and not of {قَائِل}.

## The patterns are the part that pays

When the plural is not regular, Arabic builds it from a pattern. A pattern is a mould of three or four vowels and consonants with the root fitted inside, and that is why it recurs. {كِتَاب} enters the {فُعُول} mould and comes out {كُتُب}; {غُرْفَة} enters {فُعَالَة} and comes out {غُرَف}; {جَمِيل} enters {مَفَاعِل} and comes out {جَمَال}.

The count is mechanical, and that is why it works: replace the vowels of the mould, keep the consonants of the root in order, and you have the plural. It is neither poetic nor decorative. It is the same principle that turns {كِتَاب} into {كِتَابَة} through {مَفْعَالَة}, and a reader who spots the mould reads a plural he has never met.

## Plurals nobody produces

The patterns do not cover everything, and the exception gets the rest of the lesson.

Human plurals escape: {رِجَال}, {نِسَاء}, {بَشَر}, {وَالِدَانِ}, {أَبَوَانِ}. No mould produces them, and the plural of {رَجُل} looks like nothing else in the language. Collective plurals behave the same way, where the name of an animal names the herd: {بَقَر} does not mean two cows, it means cattle.

Then there are the counted words, which follow a table of their own: {أَلْفَة} for three to ten, {مِئَة} for a hundred, {أَلْف} for a thousand. A proper noun that has swallowed the name of the country is another case: {كَيْفَا} and {إِسْرَائِيل} can be plurals of {كَيْف} and {إِسْرَائِيل} and {مِصْر} and {دُبَيْر}, and context decides which.

## Reading criterion

The Lord's Prayer verse carries two irregular plurals in one clause: {رَبَّنَا آتِنَا لَوْجَنَا الْيَوْمَ وَاغْفِرْ لَنَا ذُيُوبَنَا}. In {لَوْجَنَا} the singular {لَوْز} never appears, and even so the ending {ـنَا} shows the first person plural; in {ذُيُوبَنَا} the same. A reader who looks for the singular in order to understand the plural finds nothing in {لَوْجَنَا} and concludes he has misread. The plural was inside the word all along, and the {أَفْعَال} shape is what licenses the reading: {لَوْز} plus the mould would give {لَوَازَ}, which nobody says. What produces {لَوْجَنَا} is {لَوْج} plus the ending, with the {ج} of the root turned into {ـنَ}.`),
  vocab: [
    V('كُتُب', 'كتب', 'books; plural of {كِتَاب}'),
    V('رِجَال', 'رجل', 'men; irregular plural'),
    V('نِسَاء', 'نساء', 'women; irregular plural'),
    V('أَشْجَار', 'شجرة', 'trees'),
    V('أَقْوَال', 'قول', 'sayings; the regular masculine plural reaches abstractions'),
    V('جَمَال', 'جمال', 'beauties'),
    V('مُعَلِّمُونَ', 'معلم', 'teachers'),
    V('مُعَلِّمَاتٌ', 'معلم', 'teachers, feminine'),
    V('مَلِكُوت', 'ملكوت', 'kingdom; some accept the regular plural'),
    V('لَوْجَنَا', 'لوز', "the plural of almond in the Lord's Prayer"),
    V('ذُيُوبَنَا', 'ذنب', 'our sins'),
    V('بَشَر', 'بشر', 'human beings; irregular plural'),
    V('أَلْفَة', 'ألف', 'the noun for the numbers three to ten'),
    V('مِئَة', 'مئة', 'hundred'),
    V('وَالِدَانِ', 'والد', 'the two parents'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the regular plural of {مُعَلِّمَة}?'),
    options: [T('مُعَلِّمُونَ'), T('مُعَلِّمَاتٌ'), T('مُعَلِّمِينَ'), T('مَلَامِح')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the plural of {كِتَاب}: ___تُب'),
      answer: 'كُ',
      hint: T('It is the {فُعُول} pattern, with the root ك ت ب inside.'),
    },
    {
      kind: 'match',
      prompt: T('Match pattern and plural.'),
      pairs: [
        { a: T('فُعُول'), b: T('كُتُب') },
        { a: T('فُعَالَة'), b: T('رِجَال') },
        { a: T('مَفَاعِل'), b: T('جَمَال') },
        { a: T('أَفْعَال'), b: T('أَقْوَال') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which of these plurals follows no pattern?'),
      options: [T('أَشْجَار'), T('رِجَال'), T('أَقْلَام'), T('جَمَال')],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('In {لَوْجَنَا}, how many clues to the plural does the word carry?'),
      options: [T('None'), T('The ending {ـنَا}'), T('The shadda'), T('The article')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The regular masculine plural is {ـون} in the nominative and {ـين} elsewhere; the feminine is {ـات}.',
      ),
    },
    { n: '2', text: T('**Gender decides: {مُعَلِّم} gives {مُعَلِّمُونَ} and {مُعَلِّمَة} gives {مُعَلِّمَاتٌ}.**') },
    {
      n: '3',
      text: T(
        'The regular masculine plural is reserved for human males and few abstractions; {رَجُل} gives {رِجَال}.',
      ),
    },
    {
      n: '4',
      text: T(
        'In a broken plural the mould rules: replace the vowels of the pattern and keep the consonants of the root.',
      ),
    },
    {
      n: '5',
      text: T('Human plurals, collective plurals and counted numerals follow no pattern.'),
    },
  ],
  notes: [
    {
      label: T('Why the mould works'),
      text: T(
        '{كِتَاب} follows {فُعُول} and gives {كُتُب}, {غُرْفَة} follows {فُعَالَة} and gives {غُرَف}. The principle is the same across the language: the root takes the consonants, the mould takes the vowels.',
      ),
    },
    {
      label: T('Where the plural misleads'),
      text: T(
        'In {بَقَر} and {إِبِل} the plural does not count animals, it names the herd. Rendering it as "the cows" or "the camels" inverts the number: the text says the group, and the reader has to keep that reading.',
      ),
    },
  ],
  examples: [
    { text: 'كُتُبٌ', gloss: T('books; the {فُعُول} pattern') },
    { text: 'رِجَالٌ', gloss: T('men; a human plural with no mould') },
    { text: 'أَشْجَارٌ', gloss: T('trees; regular feminine plural') },
    { text: 'أَقْوَالٌ', gloss: T('sayings; the regular masculine reaches the abstract') },
    { text: 'جَمَالٌ', gloss: T('beauties; the {مَفَاعِل} pattern') },
    { text: 'مُعَلِّمُونَ', gloss: T('teachers; nominative with {ـون}') },
    { text: 'مُعَلِّمِينَ', gloss: T('teachers; accusative or genitive with {ـين}') },
    { text: 'مُعَلِّمَاتٌ', gloss: T('teachers, feminine; {ـات} with a final damma') },
    { text: 'لَوْجَنَا', gloss: T('almonds; an irregular plural, with no singular in the clause') },
  ],
  tables: [
    {
      caption: T('The two regular plurals'),
      head: [T('Type'), T('Suffix'), T('Nominative'), T('Other cases'), T('Example')],
      rows: [
        [T('regular masculine'), 'ـون / ـين', 'ـُونَ', 'ـِينَ', 'مُعَلِّمُونَT('],
        [T(')regular feminine'), 'ـات', 'ـَاتٌ', 'ـَاتٍ', 'مُعَلِّمَاتٌ'],
      ],
    },
    {
      caption: T('The patterns of the broken plural'),
      head: [
        T('Pattern'),
        T('Singular'),
        T('Plural'),
        T('Gloss'),
        T('Pattern'),
        T('Singular'),
        T('Plural'),
        T('Gloss'),
      ],
      rows: [
        ['فُعُول', 'كِتَاب', 'كُتُب', T('books'), 'فُعَالَة', 'غُرْفَة', 'غُرَف', T('rooms')],
        ['أَفْعَال', 'حِمَار', 'أَحْمِر', T('donkeys'), 'مَفَاعِل', 'جَمِيل', 'جَمَال', T('beauties')],
        ['فَعِيل', 'شَدِيد', 'شُدَاد', T('the strong'), 'فُعَل', 'قَوْل', 'أَقْوَال', T('sayings')],
      ],
    },
    {
      caption: T('Plurals that follow no pattern'),
      head: [T('Type'), T('Example'), T('What happens')],
      rows: [
        [T('human masculine'), 'رِجَال', T('no mould produces it')],
        [T('human feminine'), 'نِسَاء', T('the singular is {نَسْوَة}')],
        [T('collective'), 'بَقَر', T('it names the herd, not the animals')],
        [
          T('counted numerals'),
          'أَلْفَة، مِئَة، أَلْف',
          T('a table of its own, from three to a thousand'),
        ],
        [T('proper noun'), 'إِسْرَائِيل', T('the name swallows the noun of the country')],
      ],
    },
  ],
};
