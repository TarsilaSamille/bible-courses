import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('Augmentatives and diminutives'),
  subtitle: T('أُفْعِلَ، فَعَّلَ، فُعَيْل، خَبَرَ، أَخْبَرَ'),
  section: T('Verbs'),
  body: C(`## The mould that increases

Two verb forms add intensity, and they add different things. The second, {فَعَّلَ}, says the action is greater or more intense: {كَتَبَ} is to write, {كَتَّبَ} is to dictate, to write aloud for someone else.

The fourth, {أُفْعِلَ}, says the action acquires a recipient. **{خَبَرَ} is to know, and {أَخْبَرَ} is to inform.** The difference between the two is what the verb does with what it knows, and it is a difference no ending of tense or person would express. The same holds in {نَصَرَ} and {أَنْصَرَ}, and in {أَكَلَ} and {أَخَذَ} for oneself.

The fourth form is rare in number of roots, which is why the list fits in the head. {أَخْبَرَ}, {أَنْزَلَ}, {أَشْرَكَ}, {أَسْأَلَ}, {أَقْسَمَ}, {أَمَرَ}, {أَكَلَ}, {أَخَذَ}, {أَصْلَحَ}, {أَفْتَى}, {أَعْلَى}. These are verbs of a fixed group, and anyone who knows them recognises the form on the page.

## What increases and what diminishes

The augmentative has two moulds, the diminutive has one, and all three are predictable.

The masculine diminutive is {فُعَيْل}: {رَجُل} gives {رُجَيْلٌ}, {كِتَاب} gives {كُتَيْبٌ}, {جَبَل} gives {جُبَيْلٌ}. The feminine is {فُعِيلَة}: {شَجَرَة} gives {شُجَيْرَةٌ}. **The rule is short and mechanical: the vowel of the mould takes the quality of the vowel of the base, and the consonants stay where they were.**

The augmentative, by contrast, is not predictable from a single mould, and it is the oldest shape in the language. Its eight subdivisions depend on whether the radical is strong, weak or doubled, which is why {فَعَّلَ} turns up in most intensifying verbs with no vowel following any rule.

## The five letters that vanish at the front

Here is the exception, and it is the prettiest thing the language does to spelling.

Five letters can disappear from the front of a word, and what is read is shorter than what is heard. The initial {و} of a verb drops: {وَصَلَ} is written {اُصِلَ} and pronounced without the {و}. The initial {ي} of the derivatives of the tenth form drops: {يَسْتَعِينُ} is written the same way and pronounced {يُسْتَعِينُ}.

The best-known case is {اسْم}. No name in Portuguese helps, because the Arabic word has already lost an old {و}, and what is left is {اسْم} with three consonants where there should be four. **The manuscript hides the letter; the mouth does not.**

The consequence for reading is direct. An ancient text writes {اسْم} and the dictionary looks for a two-letter root; a modern reader writes {إِسْم} and the manuscript seems to have one letter too many. Neither is wrong, and the elision is the trace of a {و} nobody sees.

## Reading criterion

In {أَقْسَمَ اللَّهُ بِالْحَقِّ} there is a fourth form, a preposition and a particle, and the whole clause fits in three words. {أَقْسَمَ} is {قَسَمَ} with the {أ} of the fourth form, and the base verb means "to divide": an oath is a division, what gets divided is the truth, and {بِالْحَقِّ} says by what.

Anyone who renders {أَقْسَمَ} as "divided" got the verb wrong and the etymology right by accident. Anyone who spots the initial {أ} of the fourth form knows the action has a recipient before reading the rest of the clause, and that is what a reader of biblical text is looking for.`),
  vocab: [
    V('أُفْعِلَ', 'فعل', 'the pattern of the fourth form'),
    V('فَعَّلَ', 'فعل', 'the pattern of the second form'),
    V('تَفَعَّلَ', 'فعل', 'the pattern of the fifth form'),
    V('اِسْتَفْعَلَ', 'فعل', 'the pattern of the tenth form'),
    V('أَخْبَرَ', 'خبر', 'he informed'),
    V('خَبَرَ', 'خبر', 'he knew'),
    V('كَتَّبَ', 'كتب', 'he dictated'),
    V('أَقْسَمَ', 'قسم', 'he swore'),
    V('قَسَمَ', 'قسم', 'he divided'),
    V('رُجَيْلٌ', 'رجل', 'a little man'),
    V('كُتَيْبٌ', 'كتاب', 'a little book'),
    V('أَسْمٌ', 'اسم', 'name'),
    V('وَصَلَ', 'وصل', 'he joined; he arrived'),
    V('يَسْتَعِينُ', 'عون', 'he asks for help'),
    V('اسْتَغْفَرَ', 'غفر', 'he asked forgiveness'),
    V('تَدَرَّبَ', 'درب', 'he trained'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What does {أَخْبَرَ} add to {خَبَرَ}?'),
    options: [T('Intensity'), T('A recipient'), T('Time'), T('Negation')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the diminutive of {رَجُل}: ___جَيْلٌ'),
      answer: 'رُ',
      hint: T('It is the {فُعَيْل} pattern, with the vowel of the base.'),
    },
    {
      kind: 'match',
      prompt: T('Match form and sense.'),
      pairs: [
        { a: T('أَخْبَرَ'), b: T('he informed') },
        { a: T('خَبَرَ'), b: T('he knew') },
        { a: T('كَتَّبَ'), b: T('he dictated') },
        { a: T('أَقْسَمَ'), b: T('he swore') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which is the regular diminutive of {كِتَاب}?'),
      options: [T('كُتَيْبٌ'), T('مَكْتُوبٌ'), T('كِتَابَاتٌ'), T('كَتَبَ')],
      answer: 0,
    },
    {
      kind: 'choose',
      prompt: T('In {اسْم}, what happened to the root?'),
      options: [
        T('It lost a letter at the front'),
        T('It gained a letter'),
        T('It lost the vowel'),
        T('Nothing changed'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '**The fourth form {أُفْعِلَ} adds the idea of doing something to someone else: {خَبَرَ} is to know, {أَخْبَرَ} is to inform.**',
      ),
    },
    {
      n: '2',
      text: T('The second form {فَعَّلَ} adds intensity: {كَتَبَ} is to write, {كَتَّبَ} is to dictate.'),
    },
    {
      n: '3',
      text: T('The fourth form exists in few roots, and the list is short enough to memorise.'),
    },
    {
      n: '4',
      text: T('The regular diminutive is {فُعَيْل} in the masculine and {فُعِيلَة} in the feminine.'),
    },
    {
      n: '5',
      text: T(
        'Five letters can be elided at the start of a word, so what is read is shorter than what is heard.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why the {أ} of the fourth form disappears'),
      text: T(
        '{أُفْعِلَ} is written without the alif in most texts, and the alif shows only in the shapes where it is needed. The word still sounds with it, and it is the manuscript that saves, not the pronunciation.',
      ),
    },
    {
      label: T('The letter the text hides'),
      text: T(
        'In {اسْم} the manuscript hides a {و} that existed, and in {يَسْتَعِينُ} it hides a {و} nobody pronounces. These are shapes that went through old compositions, and the elision is the trace of a letter that was there.',
      ),
    },
  ],
  examples: [
    { text: 'خَبَرَ', gloss: T('he knew') },
    { text: 'أَخْبَرَ', gloss: T('he informed; the fourth form gives a recipient') },
    { text: 'كَتَبَ', gloss: T('he wrote') },
    { text: 'كَتَّبَ', gloss: T('he dictated; the second form increases') },
    { text: 'قَسَمَ', gloss: T('he divided') },
    { text: 'أَقْسَمَ', gloss: T('he swore; the fourth form with {بِـ}') },
    { text: 'رُجَيْلٌ', gloss: T('a little man; diminutive') },
    { text: 'كُتَيْبٌ', gloss: T('a little book; diminutive') },
    { text: 'اسْمٌ', gloss: T('name; with the initial elided') },
  ],
  tables: [
    {
      caption: T('The forms that increase'),
      head: [T('Form'), T('Pattern'), T('What it adds'), T('Example')],
      rows: [
        [T('II'), 'فَعَّلَ', T('intensity; doing to someone'), 'كَتَّبَ'],
        [T('IV'), 'أُفْعِلَ', T('doing; giving a recipient'), 'أَخْبَرَ'],
        [T('V'), 'تَفَعَّلَ', T('doing by degrees'), 'تَدَرَّبَ'],
        [T('X'), 'اِسْتَفْعَلَ', T('treating something as'), 'اسْتَغْفَرَ'],
      ],
    },
    {
      caption: T('Augmentative and diminutive'),
      head: [T('Type'), T('Pattern'), T('Base'), T('Result')],
      rows: [
        [T('II augmentative'), 'فَعَّلَ', 'كَتَبَ', 'كَتَّبَ'],
        [T('IV augmentative'), 'أُفْعِلَ', 'خَبَرَ', 'أَخْبَرَ'],
        [T('masc. diminutive'), 'فُعَيْل', 'كِتَاب', 'كُتَيْبٌ'],
        [T('fem. diminutive'), 'فُعِيلَة', 'شَجَرَة', 'شُجَيْرَةٌ'],
      ],
    },
    {
      caption: T('Elision and its effects'),
      head: [T('Cause'), T('Written'), T('What is heard'), T('Gloss')],
      rows: [
        [T('initial {و} of a verb'), 'وَصَلَ', 'اُصِلَ', T('he arrived')],
        [T('derived noun'), 'اسْمٌ', 'اِسْمٌ', T('name')],
        [T('derivative of X'), 'يَسْتَعِينُ', 'يُسْتَعِينُ', T('he asks for help')],
        [T('derivative of V'), 'تَتَابَعَ', 'تَتَابَعُ', T('one followed another')],
      ],
    },
  ],
};
