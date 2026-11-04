import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  section: T('The verb'),
  title: T('The essential verbs'),
  subtitle: T('ذَهَبَ go, جَاءَ come, كَانَ be: the verbs that carry the verbs of the biblical text'),
  body: C(`## Ten verbs, and two without a subject

A regular Arabic verb follows a pattern: in {كَتَبَ}, {كَتَبْتَ}, {كَتَبُوا}, the mold {كَتَبَ} is fixed and only the ending changes. The essentials do not follow: {كَانَ}, {جَاءَ}, {ذَهَبَ}, {أَكَلَ}, {شَرِبَ}, {لَبِسَ}, {رَأَى}, {سَمِعَ}, {قَالَ}, {قَرَأَ}, {أَعْطَى}, {أَخَذَ} are forms no rule repeats, and they are what is read on every page.

They are few and they weigh a lot. {ذَهَبَ} to go, {جَاءَ} to come, {كَانَ} to be, {أَكَلَ} to eat, {شَرِبَ} to drink, {لَبِسَ} to wear, {رَأَى} to see, {سَمِعَ} to hear, {قَالَ} to say, {كَتَبَ} to write, {قَرَأَ} to read, {أَعْطَى} to give, {أَخَذَ} to take, {عَلِمَ} to know, {فَهِمَ} to understand, {عَمِلَ} to do.

## {كَانَ}: the past, and the unsaid subject

{كَانَ} is the verb "to be" plus the past. {كَانَ الله}, God was; {وَكَانَ الْكَلِمَةُ}, and the Word was. Arabic has no "was" and "I am" as Portuguese does; it resolves with {كَانَ} in the past and with an implicit present when the subject is a noun.

{يُحِبُّ} in the present needs no {هُوَ} in front: {يُحِبُّ أَبُوهُ}, "his father loves". The pronoun {هُوَ}, {هِيَ} etc. comes in only when the subject is singled out or there is no other sign, as in {وَهُوَ هُنَا}, "and he is here".

## {ذَهَبَ}, {جَاءَ} and {لَبِسَ}: the verb makes the person

Arabic does not need "I", "you" or "he" before the verb: the form already carries the person. {ذَهَبَ}, he went; {ذَهَبْتُ}, I went; {ذَهَبْتَ}, you went; {ذَهَبُوا}, they went; {ذَهَبْنَا}, we went. The suffix is the pronoun.

That is why the ten essential verbs are learned as suffixes and not as free words. {جَاءَ} to come, {جِئْتُ}, I came; {لَبِسَ} to wear, {لَبِسْتُ}, I wore; {أَكَلَ} to eat, {أَكَلْتُ}, I ate. The form carries the person the way Portuguese carries it in the noun {eu} itself, which Arabic leaves to the suffix.

## {أَكَلَ}, {شَرِبَ}, {لَبِسَ}: what the verb names is already the scene

In biblical text, {أَكَلَ} to eat and {شَرِبَ} to drink appear side by side almost always: {الْخُبْزَ وَالْمَاءَ}, the bread and the water. {لَبِسَ} to wear takes a direct object: {لَبِسَ ثِيَابًا جَدِيدَةً}, he put on new clothes. In Mark 1:6 Greek says {ἔνδυμα δὲ αὐτοῦ}, and Arabic renders it with {وَكَانَ لِبَاسُهُ}, "and his clothing was...".

## In the Bible

John 1:1 opens with {كَانَ}: {فِي الْبَدْءِ كَانَ الْكَلِمَةُ}, in the beginning was the Word. {كَانَ} is past, and Greek {ἦν} is too. Arabic translates the identity of the Word with a verb that is past the whole time, and {كَانَ} never stops meaning "to be".

Matthew 6:11 has {خُبْزَنَا كَفَافَ يَوْمِنَا}, our bread for today, and the missing verb is {أَعْطِ}, "give us": the imperative of {أَعْطَى}. The Lord's Prayer starts asking without {أَعْطِ} standing by the bread, and Arabic lets the verb sit in the blank, as Greek does.`),
  vocab: [
    V('ذَهَبَ', 'ذَهَبَ', 'he went / to go'),
    V('جَاءَ', 'جَاءَ', 'he came / to come'),
    V('كَانَ', 'كَانَ', 'he was / to be'),
    V('أَكَلَ', 'أَكَلَ', 'he ate / to eat'),
    V('شَرِبَ', 'شَرِبَ', 'he drank / to drink'),
    V('لَبِسَ', 'لَبِسَ', 'he wore / to wear'),
    V('رَأَى', 'رَأَى', 'he saw / to see'),
    V('سَمِعَ', 'سَمِعَ', 'he heard / to hear'),
    V('قَالَ', 'قَالَ', 'he said / to say'),
    V('كَتَبَ', 'كَتَبَ', 'he wrote / to write'),
    V('قَرَأَ', 'قَرَأَ', 'he read / to read'),
    V('أَعْطَى', 'أَعْطَى', 'he gave / to give'),
    V('أَخَذَ', 'أَخَذَ', 'he took / to take'),
    V('عَلِمَ', 'عَلِمَ', 'he knew / to know'),
    V('فَهِمَ', 'فَهِمَ', 'he understood / to understand'),
    V('عَمِلَ', 'عَمِلَ', 'he did / to do'),
    V('هُوَ', 'هُوَ', 'he (pronoun)'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{كَانَ} makes the past: {كَانَ الله} "God was", and it has no own present where "is" would sit. The silence is the form.',
      ),
    },
    {
      n: '§2',
      text: T(
        'The person is already in the verb: {ذَهَبَ} he went / {ذَهَبْتُ} I went / {ذَهَبُوا} they went. The pronouns {أنا}, {أنتَ} serve as emphasis only.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The essential verbs do not follow a mold: {ذَهَبَ}, {جَاءَ}, {كَانَ}, {أَكَلَ}, {شَرِبَ}, {لَبِسَ}, {رَأَى}, {سَمِعَ}, {قَالَ}, {كَتَبَ}, {قَرَأَ}, {أَعْطَى} must be kept one by one.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{أَكَلَ} and {شَرِبَ} appear together in the bread-and-water passages: {أَكَلَ خُبْزًا وَشَرِبَ مَاءً}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'John 1:1 needs {كَانَ} to say "the Word was", and {كَانَ} in Arabic is not a past verb that erases the present: it is the form of to be.',
      ),
    },
  ],
  notes: [
    {
      label: T('{هُوَ} and {هي} are subject pronouns, not verb pronouns'),
      text: T(
        'The Arabic verb carries the person in the suffix, and the pronoun {هُوَ} comes in only to change person or to single out. {ذَهَبَ} already says "he went"; {هُوَ ذَهَبَ} says "it was he who went".',
      ),
    },
    {
      label: T('Weak verbs ≥ ج and و'),
      text: T(
        '{جَاءَ} is a weak verb: the {و}/{ي} in the middle broke, and the past became {جِئْتُ}, {جِئْتَ}. And {قَالَ} becomes {قُلْتُ}. The person suffix changes, and the stem changes with it; they are the verbs grammar groups into one family.',
      ),
    },
  ],
  examples: [
    { text: 'في البدء كان الكلمة.', gloss: T('{كَانَ}: past of to be, Jn 1:1.') },
    { text: 'ذهبتُ إلى البيت.', gloss: T('1st person: {ذَهَبْتُ}, the suffix says "I".') },
    { text: 'جاؤوا إلى يسوع.', gloss: T('{جَاءَ} with plural suffix: {جَاؤُوا}.') },
    { text: 'أكل يسوعُ الخبزَ.', gloss: T('{أَكَلَ} with direct object: the bread.') },
    { text: 'شربَ الماءَ.', gloss: T('{شَرِبَ}, to drink, with direct object.') },
    { text: 'لبسنَ ثوبًا أبيض.', gloss: T('{لَبِسْنَ}: they wore, with a feminine plural suffix.') },
    { text: 'رأى النورَ.', gloss: T('{رَأَى}, to see, with an object.') },
    { text: 'سمعَ الصوتَ.', gloss: T('{سَمِعَ}, to hear, with an object.') },
    { text: 'قالَ لهُمْ.', gloss: T('{قَالَ} to say; {لَهُمْ} to them.') },
    {
      text: 'أعطانا خُبْزَنا.',
      gloss: T('{أَعْطَانَا}: they gave us, {أَعْطَى} plus the enclitic suffix {ـنَا}.'),
    },
  ],
  tables: [
    {
      caption: T('Past of the essentials, person by person'),
      head: [T('Verb'), T('هو'), T('أنا'), T('نحن'), T('هم')],
      rows: [
        ['ذهب', 'ذَهَبَ', 'ذَهَبْتُ', 'ذَهَبْنَا', 'ذَهَبُوا'],
        ['جاء', 'جَاءَ', 'جِئْتُ', 'جِئْنَا', 'جَاؤُوا'],
        ['كان', 'كَانَ', 'كُنْتُ', 'كُنَّا', 'كَانُوا'],
        ['أكل', 'أَكَلَ', 'أَكَلْتُ', 'أَكَلْنَا', 'أَكَلُوا'],
        ['شرب', 'شَرِبَ', 'شَرِبْتُ', 'شَرِبْنَا', 'شَرِبُوا'],
        ['لباس', 'لَبِسَ', 'لَبِسْتُ', 'لَبِسْنَا', 'لَبِسُوا'],
        ['رأى', 'رَأَى', 'رَأَيْتُ', 'رَأَيْنَا', 'رَأَوْا'],
        ['سمع', 'سَمِعَ', 'سَمِعْتُ', 'سَمِعْنَا', 'سَمِعُوا'],
        ['قال', 'قَالَ', 'قُلْتُ', 'قُلْنَا', 'قَالُوا'],
        ['كتب', 'كَتَبَ', 'كَتَبْتُ', 'كَتَبْنَا', 'كَتَبُوا'],
      ],
    },
    {
      caption: T('The person suffixes'),
      head: [T('Person'), T('Suffix'), T('Example with {كتب}'), T('Gloss')],
      rows: [
        ['هو', '-a', 'كتبَ', 'ele escreveu'],
        ['أنا', '-تُ', 'كتبْتُ', 'eu escrevi'],
        ['نحن', '-نَا', 'كتبْنَا', 'nós escrevemos'],
        ['هم', '-وا', 'كتبُوا', 'eles escreveram'],
        ['هي', '-تْ', 'كتبْتْ', 'ela escreveu'],
        ['أنتما', '-تُما', 'كتبْتُما', 'vós dois escrevestes'],
      ],
    },
    {
      caption: T('Imperative of the essentials'),
      head: [T('Verb'), T('أنتَ'), T('أنتِ'), T('أنتم'), T('أنتن')],
      rows: [
        ['ذهب', 'اِذْهَبْ', 'اِذْهَبِي', 'اِذْهَبُوا', T('اِذْهَبْنَ')],
        ['جاء', 'تعالَ', 'تعالي', 'تعالوا', T('تعالنَ')],
        ['أكل', 'كُلْ', 'كُلِي', 'كُلُوا', T('كُلْنَ')],
        ['شرب', 'اِشْرَبْ', 'اِشْرَبِي', 'اِشْرَبُوا', T('اِشْرَبْنَ')],
        ['قرأ', 'اِقْرَأْ', 'اِقْرَئِي', 'اِقْرَؤُوا', T('اِقْرَأْنَ')],
        ['عطي', 'أَعْطِ', 'أَعْطِي', 'أَعْطُوا', T('أَعْطِينَ')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {فِي الْبَدْءِ كَانَ الْكَلِمَةُ}, what is {كَانَ}?'),
    options: [
      T('The verb "to go" in the past'),
      T('The verb "to be" in the past'),
      T('The verb "to eat" in the present'),
      T('A pronoun'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "أنا ___ إلى البيت" with the 1st person of {ذهب}.'),
      answer: 'ذَهَبْتُ',
    },
    {
      kind: 'match',
      prompt: T('Match the verb to the translation.'),
      pairs: [
        { a: T('{ذَهَبَ}'), b: T('to go') },
        { a: T('{جَاءَ}'), b: T('to come') },
        { a: T('{أَكَلَ}'), b: T('to eat') },
        { a: T('{لَبِسَ}'), b: T('to wear') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which form says "they went"?'),
      options: [T('ذَهَبَ'), T('ذَهَبْتُ'), T('ذَهَبُوا'), T('ذَهَبْنَا')],
      answer: 2,
    },
  ],
};
