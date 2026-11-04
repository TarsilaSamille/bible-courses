import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('Phonemes and harakat'),
  subtitle: T('فَتْحَة، ضَمَّة، كَسْرَة: the three short vowels'),
  section: T('Alphabets and writing'),
  body: C(`## Three marks for three vowels

Arabic does not write its vowels, it marks them. Three marks and three vowels: {فَتْحَة} is {a}, {ضَمَّة} is {u}, {كَسْرَة} is {i}. Each one is a stroke, not a letter, and the position matters: fatha and damma go above the consonant, kasra below, and the dama takes the shape of a miniature {و}. A fourth mark, {سُكُون}, says the consonant carries no vowel at all.

**A consonant with no mark is read with fatha.** Anyone coming from Greek expects to see the vowel; anyone coming from Latin expects to see the long letter. In Arabic what is not written is {a}, and that rule settles half the doubts of a first-time reader of an ancient text.

## The three long vowels

The long vowels have a letter of their own: {ا} for {ā}, {و} for {ū}, {ي} for {ī}. They take no mark, because the letter already is the vowel. Comparing {بَا} with {بَ} is comparing the same quality in two durations, and the difference is of length, not of sound.

That creates a reading problem that does not exist in Portuguese. The ancient biblical text often writes {اسم} where the vocalised tradition writes {اسْم}, and {كتب} where you read {كَتَبَ}. The long vowels are seldom written and survive only in pronunciation: reading the manuscript is reading a text with its vowels cut out.

## Twenty-eight consonants

There are twenty-eight, and the counting criterion is not the expected one: {أ} counts as a consonant, and {ء} counts as another. The grouping that matters is the place of articulation, lip, tongue, throat, because that is what explains why letters that look nearly identical to a Western reader produce different sounds: {ت} and {ط} sit at opposite ends of the tongue even though memory of a Latin alphabet files them together.

## Reading criterion

Read the mark before the letter, always. In {فِي بَدْءِ خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ} the {بَ} is short {a}, the {بِ} of {فِي} is short {i}, and the {بْ} of {بَدْءِ} carries no vowel. A translator who ignores the marks writes the same word for four different things, and the text loses what it was asserting.`),
  vocab: [
    V('فَتْحَة', 'فَتْحَة', 'short a vowel; stroke above the consonant'),
    V('ضَمَّة', 'ضَمَّة', 'short u vowel; stroke shaped like a small waw'),
    V('كَسْرَة', 'كَسْرَة', 'short i vowel; stroke below the consonant'),
    V('سُكُون', 'سُكُون', 'mark for a consonant with no vowel'),
    V('بَ', 'بَ', 'ba, with a short vowel'),
    V('بِ', 'بِ', 'bi, with a short vowel'),
    V('بَا', 'بَا', 'long ba'),
    V('بِي', 'بِي', 'long bi'),
    V('أ', 'أ', 'alif with hamza above; a in initial position'),
    V('إ', 'إ', 'alif with hamza below'),
    V('ء', 'ء', 'hamza; the shortest consonant of the alphabet'),
    V('ه', 'ه', 'ha; sounds like h in modern European languages'),
    V('ط', 'ط', 'emphatic t; the tongue rises to the root of the mouth'),
    V('ض', 'ض', 'emphatic d; tongue and palate'),
    V('شَدَّة', 'شدة', 'shadda; mark for a doubled consonant'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which vowel does the consonant {قْ} carry in {قَلْبٌ}?'),
    options: [T('short a'), T('short u'), T('none'), T('short i')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('The mark that says "a consonant with no vowel" is called ___.'),
      answer: 'سُكُون',
      hint: T('It is the fourth mark, beside fatha, damma and kasra.'),
    },
    {
      kind: 'match',
      prompt: T('Match mark and vowel.'),
      pairs: [
        { a: T('فَتْحَة'), b: T('short a') },
        { a: T('ضَمَّة'), b: T('short u') },
        { a: T('كَسْرَة'), b: T('short i') },
        { a: T('سُكُون'), b: T('no vowel') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('How many consonants does the Arabic alphabet have?'),
      options: [T('26'), T('27'), T('28'), T('29')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Match letter and place of articulation.'),
      pairs: [
        { a: T('ط'), b: T('tongue at the root of the mouth') },
        { a: T('ب'), b: T('both lips') },
        { a: T('ق'), b: T('back of the throat') },
      ],
      answer: [0, 1, 2],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('The short vowels are three marks: {فَتْحَة} = {a}, {ضَمَّة} = {u}, {كَسْرَة} = {i}.'),
    },
    { n: '2', text: T('**A consonant with no haraka is read with fatha.**') },
    {
      n: '3',
      text: T('A long vowel has a letter of its own, {ا}, {و} and {ي}, and so takes no mark.'),
    },
    {
      n: '4',
      text: T(
        '{أ} and {إ} are consonants and count among the 28; the long vowel {ا} without hamza is a different letter.',
      ),
    },
    {
      n: '5',
      text: T(
        'In the ancient biblical text the long vowels are seldom written; they remain only in pronunciation.',
      ),
    },
  ],
  notes: [
    {
      label: T('Five words, one letter'),
      text: T(
        '{كَلِمَةٌ}, {كَلِمَتَانِ}, {كَلِمَتَيْنِ}, {كَلِمَةٍ} and {كَلِمَاتٍ} are five different things written from a single root. The mark does all the work.',
      ),
    },
    {
      label: T('Why read the marks'),
      text: T(
        'Translating without them is like translating Portuguese without accents: {pára} and {para} collapse into one word, and the sense of the verse shifts.',
      ),
    },
  ],
  examples: [
    { text: 'كَتَبَ', gloss: T('kataba, he wrote; short a in both vowels') },
    { text: 'كُتُبٌ', gloss: T('kutub, books; short u') },
    { text: 'بِسْمِ', gloss: T('bis-mi, in the name of; short i') },
    { text: 'قَلْبٌ', gloss: T('qalb, heart; the consonant carries no vowel') },
    { text: 'كِتَابٌ', gloss: T('kitāb, book; a long vowel after a short i') },
    { text: 'نُورٌ', gloss: T('nūr, light; the long vowel written with waw') },
    { text: 'سَمَاءٌ', gloss: T('samāʾ, heaven; hamza at the end') },
    { text: 'أَحَدٌ', gloss: T('aḥad, one; hamza at the beginning') },
    { text: 'هَذَا', gloss: T('hādhā, this; the initial ha') },
  ],
  tables: [
    {
      caption: T('The four marks'),
      head: [T('Mark'), T('Name'), T('Position'), T('Example')],
      rows: [
        ['فَتْحَة', T('fatha'), T('above'), 'بَ = baT('],
        [')ضَمَّة', 'dammaT(', T(')above'), 'قُ = quT('],
        [')كَسْرَة', 'kasraT(', T(')below'), 'بِ = biT('],
        [')سُكُون', 'sukunT(', T(')above, ovalT('), T(')قْ = q with no vowel')],
      ],
    },
    {
      caption: T('Short and long'),
      head: [T('Vowel'), T('Short'), T('Long'), T('Phoneme')],
      rows: [
        [T('a'), 'بَ', 'بَا', T('a / aː')],
        [T('i'), 'بِ', 'بِي', T('i / iː')],
        [T('u'), 'قُرْ', 'نُور', T('u / uː')],
      ],
    },
    {
      caption: T('Where each consonant is formed'),
      head: [T('Group'), T('Letters'), T('Where it is formed')],
      rows: [
        [T('lips'), 'ب م و فT(', T(')upper lip against lower lipT(')],
        [T(')teeth'), 'ث ذT(', T(')the tip comes out between the teethT(')],
        [T(')mid tongue'), 'ت د س ز رT(', T(')the tip touches the blade of the tongueT(')],
        [T(')high tongue'), 'ط صT(', T(')the tongue rises to the root of the mouthT(')],
        [T(')palate'), 'ش ضT(', T(')the tongue closes against the palateT(')],
        [T(')roof of the mouth'), 'لT(', T(')the tip touches the roofT(')],
        [T(')throat'), 'أ هT(', T(')the mouth opens and the sound comes freeT(')],
        [T(')back of the throat'), 'ح خ ع غ ق كT(', T(')the sound comes from deep')],
      ],
    },
  ],
};
