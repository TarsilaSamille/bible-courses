import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  title: T('Paired sounds and the shadda'),
  subtitle: T('ت، ط، د، ض: simple and emphatic consonants'),
  section: T('Alphabets and writing'),
  body: C(`## Every emphatic consonant has a partner

Several letters of the alphabet come in pairs, and in each pair one is simple and the other is **emphatic**: {ت} against {ط}, {س} against {ص}, {د} against {ض}, {ذ} against {ظ}, {ح} against {خ}, {ع} against {غ}, {ه} against {ء}. The difference is not one of degree but of place: in the emphatic the tongue rises higher, the pharynx closes a little and the voice comes out muffled. They are two distinct consonants, not two versions of one letter.

Not every pair works that way. {ق} and {ك} are not an emphatic pair: both are velars, and {ق} is made well back in the mouth while {ك} is made further forward. Confusing them is a reading problem, not a sound problem.

## The shadda is the consonant repeated

{شَدَّة} is the w-shaped sign placed above the consonant, and it means the consonant is pronounced twice in a row. It never comes alone: a shadda with no vowel is unreadable, and fatha is the default, as in {شَدَّة}.

The doubling shows up in three places, and they are the three a reader of an ancient text has to recognise: the article before a sun letter, as in {الشَّمْس}; the second element of an iḍāafa, when the noun drops the article; and the preposition {بِـ}, as in {بِالْبَيْتِ}. In all three the repetition is obligatory and the shadda is the warning.

## Three cases where the shadda is absent

The exception costs more than the rule, and there are three of them.

The imperative of the second form does not double: the imperative of {رَدَّ} is {رُدَّ}, without shadda, although the perfect {رَدَّ} and the imperfect {يَرِدُّ} carry it. Anyone who writes the shadda into the imperative is writing a word nobody pronounces.

Second, roots that look doubled and are not. {رَأَى}, {دَعَا} and {وَرَى} carry a weak {أ} or {و}, and the letter that looks like the second of a pair is a prop, not a doubling. Context decides and the dictionary settles it.

Finally, in an unvocalised text the shadda is often not written, neither the one of the sun letter nor the one of the iḍāafa. The manuscript hands over {الشمس} and leaves the reader to decide which of the two consonants sounds.

## Reading criterion

In {فِي بَدْءِ خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ} the shadda over the {ش} does not belong to the root: it is the remnant of the article. The root of {سَمَاوَات} is still {س م و}, and what the manuscript marks there is the fusion of the {ل} with the letter that follows. A translator who renders {السَّمَاوَات} as "the heavens" is right by accident; a translator who knows where the shadda came from knows why the noun is plural and why it cannot take another article.`),
  vocab: [
    V('ت', 'ت', 'simple t'),
    V('ط', 'ط', 'emphatic t; the tongue rises to the root of the mouth'),
    V('س', 'س', 'simple s'),
    V('ص', 'ص', 'emphatic s'),
    V('د', 'د', 'simple d'),
    V('ض', 'ض', 'emphatic d'),
    V('ذ', 'ذ', 'simple dh'),
    V('ظ', 'ظ', 'emphatic dh'),
    V('ح', 'ح', 'h with a scraped breath'),
    V('خ', 'خ', 'kh'),
    V('ع', 'ع', 'ayn'),
    V('غ', 'غ', 'gh, uvular'),
    V('ه', 'ه', 'h'),
    V('ء', 'ء', 'hamza'),
    V('ق', 'ق', 'q; uvular'),
    V('ك', 'ك', 'k; velar'),
    V('شَدَّة', 'شدة', 'shadda; consonant pronounced twice'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the difference between {ت} and {ط}?'),
    options: [
      T('None: it is the same letter'),
      T('The second is emphatic'),
      T('The first is emphatic'),
      T('The second is doubled'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the name of the mark for a doubled consonant: ___َدَّة'),
      answer: 'شَ',
      hint: T('It is the w-shaped sign placed above the consonant.'),
    },
    {
      kind: 'choose',
      prompt: T('In {الشَّمْس}, the shadda signals...'),
      options: [
        T('a doubled root'),
        T('assimilation of the article'),
        T('feminine gender'),
        T('the plural'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Match form and value.'),
      pairs: [
        { a: T('رَدَّ'), b: T('perfect with doubling') },
        { a: T('يُرِدُّ'), b: T('imperfect with doubling') },
        { a: T('رُدَّ'), b: T('imperative without doubling') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'choose',
      prompt: T('In {بِالْبَيْتِ}, which letter is doubled?'),
      options: [T('The {ب}'), T('The {ل}'), T('The {ت}'), T('None')],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Each pair has a simple form and an emphatic one, and the difference is of place of articulation, not of intensity.',
      ),
    },
    {
      n: '2',
      text: T(
        '**The shadda means the consonant is pronounced twice**, and it never appears without a vowel.',
      ),
    },
    {
      n: '3',
      text: T(
        'Obligatory doubling appears with the sun-article, in the second element of an iḍāafa and in the preposition {بِـ}.',
      ),
    },
    {
      n: '4',
      text: T(
        'The imperative of the second form does not double: the imperative of {رَدَّ} is {رُدَّ}, with no shadda.',
      ),
    },
    {
      n: '5',
      text: T(
        'In an unvocalised text the shadda may be missing, and the reader decides which consonant sounds.',
      ),
    },
  ],
  notes: [
    {
      label: T('Sun and moon'),
      text: T(
        'The letters that follow the article and absorb it are the sun class, and that is where the shadda appears. All the others form the moon class, where the article is pronounced whole.',
      ),
    },
    {
      label: T('The {ل} of {الله}'),
      text: T(
        'Here the shadda is ordinary doubling: the name is pronounced al-lāh, with the two lāms repeated. The small sign right above it is the superscript alif, which marks the long vowel without taking room on the line.',
      ),
    },
  ],
  examples: [
    { text: 'الشَّمْس', gloss: T('the sun; the shadda on the shin is the article') },
    { text: 'سَلَام', gloss: T('peace; the first letter is simple') },
    { text: 'صَلَاة', gloss: T('prayer; the first letter is emphatic') },
    { text: 'رَدَّ', gloss: T('he answered; the dal is doubled') },
    { text: 'يُرِدُّ', gloss: T('he answers; the doubling returns in the imperfect') },
    { text: 'رُدَّ', gloss: T('answer!; the imperative does not double') },
    { text: 'دَرْس', gloss: T('lesson; simple dal') },
    { text: 'ظِلّ', gloss: T('shadow; emphatic zh') },
    { text: 'غَفَرَ', gloss: T('he forgave; emphatic gh') },
  ],
  tables: [
    {
      caption: T('The consonant pairs'),
      head: [T('N'), T('Simple'), T('Emphatic'), T('Where the difference shows')],
      rows: [
        ['1', 'ت', 'ط', T('the tongue rises to the root of the mouth')],
        ['2', 'س', 'ص', T('the tip withdraws and the breath changes side')],
        ['3', 'د', 'ض', T('the tongue closes against the palate')],
        ['4', 'ذ', 'ظ', T('the tip comes between the teeth and the tongue rises')],
        ['5', 'ه', 'ء', T('the vowel does not set the vocal cords vibrating')],
        ['6', 'ح', 'خ', T('the breath comes out scraping the throat')],
        ['7', 'ع', 'غ', T('closure in the throat with a voiced sound')],
      ],
    },
    {
      caption: T('Where the shadda appears'),
      head: [T('Context'), T('Example'), T('Explanation')],
      rows: [
        [T('article + sun letter'), 'الشَّمْس', T('the lām absorbs the letter that follows')],
        [
          T('second element of an iḍāafa'),
          'كِتَابُ الْمُعَلِّمِ',
          T('the noun loses the article and its initial letter doubles'),
        ],
        [T('the preposition with b'), 'بِالْبَيْتِ', T('the b doubles')],
        [T('doubled-letter root'), 'رَدَّ', T('the second letter of the root is repeated')],
      ],
    },
    {
      caption: T('Where the shadda is missing'),
      head: [T('Case'), T('Example'), T('Explanation')],
      rows: [
        [T('imperative of the II form'), 'رُدَّ', T('the doubling does not survive the short form')],
        [T('weak radical'), 'رَأَى', T('the ya and the alif are not a doubling')],
        [T('unvocalised text'), 'الشمس', T('the shadda of fusion may be unwritten')],
      ],
    },
  ],
};
