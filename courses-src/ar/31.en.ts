import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  title: T('Reading: Psalm 23'),
  subtitle: T('الرَّبُّ رَاعِيَّ: the clause and what it hides'),
  section: T('Readings'),
  body: C(`## The passage in blocks

Psalm 23 has six verses and no clause is hard on its own. What makes the passage worth reading is that it gathers, in a short text, everything the whole course has been confirming.

The first verse is an iḍāafa with a pronoun and a negation: {اَلرَّبُّ رَاعِيَّ فَلاَ يُعْوِزُنِي شَيْءٌ}. {رَاعِيَّ} is genitive because it closes a unit whose first element is {اَلرَّبُّ}, and the final {يَّ} is the pronoun {ـي} plus the genitive ending. {شَيْءٌ} is the only indefinite word in the verse, and it is exactly the only one the clause denies.

The third is a double iḍāafa: {إِلَى مِيَاهِ الرَّحْمَةِ يُورِدُنِي}. {إِلَى} governs the genitive, {مِيَاهِ} is the first element and {الرَّحْمَةِ} the second, and both are genitive. Anyone who renders "to the waters" has forgotten that the destination has no article in {مِيَاهِ}, and anyone who renders "to the waters of mercy" got it right.

## What the analysis shows

Across the six verses almost every noun is genitive: {مَكَانٍ، خُضْرٍ، مِيَاهِ، الرَّحْمَةِ، مَشَاوِئِ، الْبِرِّ، اسْمِهِ، ظِلِّ، الْمَوْتِ، خَيْرٍ، حَيَاتِي، الرَّبِّ، أَيَّامِ}. Only five words are accusative, and four of them are person pronouns: {نَفْسِي، قُدَّامِي، رَأْسِي، عَصَاكَ، وَعُكَّازُكَ}. The rest is nominative, and it is almost always the subjects.

The verbs are few and well spread out. The imperfect predominates: {يُرْبِضُنِي، يُورِدُنِي، يُعَزِّيَانِنِي، تُرَتِّبُ، يُدَاهِمُنِي، يَتْبَعَانِنِي، أَسْكُنُ}. The perfect appears twice, and both times it narrates what the psalmist did: {سِرْتُ} and {مَسَحْتَ}. The first-person verb that closes the psalm, {أَسْكُنُ}, is imperfect, and the difference between {سِرْتُ} and {أَسْكُنُ} is the difference between what happened and what will happen, and it is the only time information the psalm gives.

## The first verse and the last

Verse 1 has one clause, with a subject, a complement and a negation. Verse 6 has six, and the density of constructions grows without the text getting harder.

The progression is this: verse 1 names who God is, verse 3 names where he leads, verse 4 names the name for which he guides, verse 5 names who he is with, and verse 6 comes back to {مَائِدَةٌ}, a table, and ends at {بَيْتِ الرَّبِّ}. A passage that begins with who and ends with where, and that shows the whole road in between.

What a translator may not do is treat {شَيْءٌ} as definite. The indefinite is the only thing the verse denies, and the rendering "and I will lack nothing" is right because it read the indefinite and not the word.

## How to read a psalm

The method fits in five steps, and it works for any psalm, any testimony, any poetic book.

First, find the verbs and name the voice of each: perfect, imperfect, future. Second, look for definiteness: where there is {ال}, where there is a proper noun, where there is an iḍāafa. Third, follow the chains of genitive and mark each piece, because that is where possession lives. Fourth, list the prepositions and say which relation each one sets up. Fifth, only then translate, word by word, and let the syntax come out in Portuguese in the same order.

Psalm 23 has twenty-six nouns and fifteen verbs. Fifteen verbs is few: anyone who has read them knows who is speaking, when, and in which voice. That is why the whole passage fits in the memory of anyone who studies it.`),
  vocab: [
    V('الرَّبُّ', 'رب', 'the Lord'),
    V('رَاعِيَّ', 'راع', 'my shepherd; an iḍāafa with a pronoun'),
    V('شَيْءٌ', 'شيء', 'thing; the only indefinite of verse 1'),
    V('مَكَانٍ', 'مكان', 'a place; genitive'),
    V('خُضْرٍ', 'خضر', 'green; genitive'),
    V('يُرْبِضُنِي', 'رعى', 'he pastures'),
    V('مِيَاهِ', 'ماء', 'waters; genitive without an article'),
    V('الرَّحْمَةِ', 'رحمة', 'mercy; genitive'),
    V('يُورِدُنِي', 'ورد', 'he leads'),
    V('نَفْسِي', 'نفس', 'my soul'),
    V('مَشَاوِئِ', 'ماشاء', 'pastures; broken plural'),
    V('الْبِرِّ', 'بر', 'righteousness'),
    V('وَادِي', 'واد', 'valley'),
    V('ظِلِّ', 'ظل', 'shadow; genitive'),
    V('الْمَوْتِ', 'موت', 'death; genitive'),
    V('عَصَاكَ', 'عص', 'your staff; accusative'),
    V('بَيْتِ', 'بيت', 'house; genitive'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {اَلرَّبُّ رَاعِيَّ}, what case is {رَاعِيَّ}?'),
    options: [T('Nominative'), T('Accusative'), T('Genitive'), T('Vowel')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the iḍāafa: "the valley of the shadow of death" is {وَادِي ___ الْمَوْتِ}.'),
      answer: 'ظِلِّ',
      hint: T('The second element of an iḍāafa always goes genitive.'),
    },
    {
      kind: 'match',
      prompt: T('Match word and function.'),
      pairs: [
        { a: T('شَيْءٌ'), b: T('indefinite') },
        { a: T('رَاعِيَّ'), b: T('genitive with a pronoun') },
        { a: T('نَفْسِي'), b: T('accusative') },
        { a: T('بَيْتِ'), b: T('genitive by iḍāafa') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which voice is {أَسْكُنُ} in?'),
      options: [T('Perfect'), T('Imperfect'), T('Future'), T('Command')],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('How many nouns does Psalm 23 have, in this count?'),
      options: [T('Five'), T('Sixteen'), T('Twenty-six'), T('Fifty')],
      answer: 2,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '**Every iḍāafa in the psalm has its second element in the genitive, and the {ـِ} is there to say so.**',
      ),
    },
    {
      n: '2',
      text: T(
        '{رَاعِيَّ} and {نَفْسِي} are iḍāafas with a pronoun: the second element is not written out.',
      ),
    },
    {
      n: '3',
      text: T(
        "The psalmist's verbs split into {سِرْتُ} and {مَسَحْتَ} in the perfect and {أَسْكُنُ} in the imperfect, and that split is the only time information the psalm gives.",
      ),
    },
    {
      n: '4',
      text: T(
        'Verse 1 has one clause and verse 6 has six, and the density of cases grows without the text getting harder.',
      ),
    },
    {
      n: '5',
      text: T(
        'The verb comes before its subject when the subject is a pronoun: {يَتْبَعَانِنِي} precedes {خَيْرٌ وَرَحْمَةٌ}.',
      ),
    },
  ],
  notes: [
    {
      label: T('What a translator may not do'),
      text: T(
        'A rendering that gives "the Lord is my shepherd and I will lack nothing" got it right. What it may not do is treat {شَيْءٌ} as definite: the indefinite is the only thing the clause denies, and that is why the negation makes sense.',
      ),
    },
    {
      label: T('The style of verse six'),
      text: T(
        'Verse six is an enumeration, and an enumeration in Arabic brings {وَ} before each item: {عَصَاكَ وَعُكَّازُكَ}, {خَيْرٌ وَرَحْمَةٌ}. The {وَ} translates into nothing in English beyond the comma, and losing it makes the line look poorer than it is.',
      ),
    },
  ],
  examples: [
    { text: 'اَلرَّبُّ رَاعِيَّ', gloss: T('the Lord is my shepherd; an iḍāafa with a pronoun') },
    {
      text: 'فَلاَ يُعْوِزُنِي شَيْءٌ',
      gloss: T('and I will lack nothing; the indefinite is what is denied'),
    },
    { text: 'فِي مَكَانٍ خُضْرٍ', gloss: T('in a place of green pastures; two genitives') },
    { text: 'إِلَى مِيَاهِ الرَّحْمَةِ', gloss: T('to the waters of mercy; a double iḍāafa') },
    { text: 'يُرِدُّ نَفْسِي', gloss: T('he restores my soul; pronoun in the accusative') },
    { text: 'فِي وَادِي ظِلِّ الْمَوْتِ', gloss: T('in the valley of the shadow of death; three iḍāafas') },
    { text: 'لَأَنَّكَ أَنْتَ مَعِي', gloss: T('because you are with me') },
    { text: 'عَصَاكَ وَعُكَّازُكَ', gloss: T('your staff and your support; two accusatives') },
    { text: 'إِلَى مَدَى الأَيَّامِ', gloss: T('for the days to come') },
  ],
  tables: [
    {
      caption: T('Verse 1 word by word'),
      head: [T('Word'), T('Role'), T('Case or voice'), T('What it is')],
      rows: [
        ['اَلرَّبُّ', T('subject'), T('nominative'), T('a proper noun')],
        ['رَاعِيَّ', T('complement of the subject'), T('genitive'), T('an iḍāafa with a pronoun')],
        ['فَلاَ', T('connector'), T('particle'), T('and so not')],
        ['يُعْوِزُنِي', T('verb'), T('imperfect'), T('to be lacking')],
        ['شَيْءٌ', T('object'), T('nominative'), T('the only indefinite')],
      ],
    },
    {
      caption: T('The chains of iḍāafa'),
      head: [T('Chain'), T('Gloss'), T('Cases'), T('Note')],
      rows: [
        ['رَاعِيَّ', T('my shepherd'), T('genitive with a pronoun'), T('no noun written')],
        [
          'إِلَى مِيَاهِ الرَّحْمَةِ',
          T('to the waters of mercy'),
          T('a preposition and two genitives'),
          T('the destination has no article'),
        ],
        ['مَشَاوِئِ الْبِرِّ', T('the pastures of righteousness'), T('two genitives'), T('broken plural')],
        [
          'وَادِي ظِلِّ الْمَوْتِ',
          T('the valley of the shadow of death'),
          T('three genitives'),
          T('a complete chain'),
        ],
        [
          'بَيْتِ الرَّبِّ',
          T('the house of the Lord'),
          T('two genitives'),
          T('an iḍāafa with a proper noun'),
        ],
      ],
    },
    {
      caption: T('The verbs of the psalm'),
      head: [T('Form'), T('Voice'), T('Person'), T('Gloss')],
      rows: [
        ['يُعْوِزُنِي', T('imperfect'), T('third'), T('I will lack')],
        ['يُرْبِضُنِي', T('imperfect'), T('third'), T('he makes rest')],
        ['يُورِدُنِي', T('imperfect'), T('third'), T('he leads')],
        ['يُعَزِّيَانِنِي', T('imperfect'), T('second person dual'), T('they comfort me')],
        ['سِرْتُ', T('perfect'), T('first'), T('I walked')],
        ['مَسَحْتَ', T('perfect'), T('second'), T('you anointed')],
        ['أَسْكُنُ', T('imperfect'), T('first'), T('I will dwell')],
      ],
    },
  ],
};
