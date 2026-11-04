import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  title: T('Particles of place, origin and company'),
  subtitle: T('مِنْ، فِي، عَلَى، إِلَى، عَنْ، مَعَ، حَتَّى'),
  section: T('Particles'),
  body: C(`## The seven and what each one demands

All seven govern the genitive, so the ending of the noun they govern already gives the information away. What changes between them is not the case but the kind of complement each one asks for, and that is what decides which to use.

{مِنْ} asks for an origin: {مِنَ الْبَيْتِ}. {فِي} asks for place or time: {فِي الْبَيْتِ}, {فِي يَوْمِ}. {عَلَى} asks for a surface, a support or an abstraction: {عَلَى الْمَجَلِسِ}, {عَلَى الْحَقِّ}. {إِلَى} asks for a destination: {إِلَى الْبَيْتِ}. {عَنْ} asks for separation or topic: {عَنِ الْبَيْتِ}, {عَنِ الْمَلِكِ}. {مَعَ} asks for company. {حَتَّى} asks for a limit, and the limit can be in space or in time.

The distinction that matters most in practice is the one between {فِي} and {عَلَى}. {فِي} is inside, {عَلَى} is on top: {فِي الْقَارُورَةِ} and {عَلَى الْمَائِدَةِ}. A rendering that swaps the two produces a sentence that is wrong in no word and stands nowhere.

## The construction each one builds

Every particle has a use in which it is especially likely, and that is the use in which it shows up most in an ancient text.

{مِنْ} before a verbal noun marks origin, cause or separation, which is why it means "by" in {مِنْ قَوْلِهِ} and "from" in {مِنْ أَبِيهِ}. {حَتَّى} with a place gives {حَتَّى مَطْلَعِ الْفَجْرِ}, and with a time gives {حَتَّى لَمَّا}. {عَنْ} has a second sense that is the most useful one in translation: {عَنْهُ} with the pronoun means "about him", in the sense of subject matter.

And there is a second set, smaller and harder, that does the same work: {بِـ}, {لِـ} and {كَـ}. {بِـ} is a shortened {فِي}, as in {بِذَاكَ}, "by that". {كَـ} is a shortened {مِثْلَ}, as in {كَذَا}, "like that". {لِـ} is the particle of possession, and it means "to have", "for", "of". Anyone who knows only the seven long ones loses half the prepositions he meets in the text.

## The particle that changes case

Here is the exception, and it deserves a section of its own because it is the one point where the case system fails.

**{مَعَ} changes case according to the pronoun that follows.** With {هُوَ} comes {مَعَهُ}, with {هِيَ} comes {مَعَهَا}, and with {يَا} comes {مَعَكَ} in the accusative and {مَعَكِ} in the genitive. With plural pronouns the shape is {مَعَهُمْ} and {مَعَهُنَّ}, always in the genitive. Six shapes for one preposition, and context decides.

The reason lies in the history of the language: {مَعَ} used to be a noun meaning "company", and a governed noun goes genitive. The accusative survived in a few shapes, and that is why the list is irregular instead of clean.

The second thing {مَعَ} does is turn into a verb. In {سَافَرَ مَعَهُ} a word that was a preposition shows up as a verb, and the sense is the same: "he travelled with him". Anyone hunting for an abstract particle in biblical text finds a verb, and the rendering is still right.

Then {حَتَّى} has three lives. It is a preposition with a limit in space, an adverb with "until", and a verb with "until". Portuguese needs three words for the three things, and Arabic needs one.

## Reading criterion

In {أَسْعَدُ الرَّجُلِ الَّذِي لَمْ يَسْلُكْ فِي مَشُورَةِ الأَشْرَارِ وَفِي طَرِيقِ الْخُطَاةِ لَمْ يَقِفْ} the same particle {فِي} appears three times, and what changes is the complement: {مَشُورَةِ} is counsel, {طَرِيقِ} is a way, and the context asks for {مَقْعَدِ} in the third. Anyone who rendered {فِي} as "inside" all three times will say the man did not enter the counsel, the road and the room. Anyone who rendered it as "in" got all three right, because that is all the particle says.`),
  vocab: [
    V('مِنْ', 'من', 'from; since; by'),
    V('فِي', 'في', 'in; inside'),
    V('عَلَى', 'على', 'on; upon'),
    V('إِلَى', 'إلى', 'to; until'),
    V('عَنْ', 'عن', 'from; about'),
    V('مَعَ', 'مع', 'with'),
    V('حَتَّى', 'حتى', 'until; as far as'),
    V('بِـ', 'في', 'shortened particle, equivalent to {فِي}'),
    V('لِـ', 'إلى', 'shortened particle, of possession'),
    V('كَـ', 'مثل', 'shortened particle, like'),
    V('مَشُورَة', 'مشورة', 'counsel; assembly'),
    V('طَرِيق', 'طريق', 'way'),
    V('مَقْعَد', 'مقعد', 'seat'),
    V('مَغْرِب', 'مغرب', 'sunset'),
    V('قَوْلِهِ', 'قول', 'his word'),
    V('ذَاكَ', 'ذاك', 'that'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which particle asks for a destination?'),
    options: [T('مِنْ'), T('فِي'), T('إِلَى'), 'عَنْ'],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the form of {مَعَ} with the pronoun {هُوَ}: ___'),
      answer: 'مَعَهُ',
      hint: T('With a third-person pronoun {مَعَ} takes the suffix.'),
    },
    {
      kind: 'match',
      prompt: T('Match particle and complement.'),
      pairs: [
        { a: T('مِنْ'), b: T('origin') },
        { a: T('فِي'), b: T('place or time') },
        { a: T('عَلَى'), b: T('surface') },
        { a: T('إِلَى'), b: T('destination') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('What is {بِـ} in its long form?'),
      options: [T('مِنْ'), T('مَعَ'), T('فِي'), 'إِلَى'],
      answer: 2,
    },
    {
      kind: 'choose',
      prompt: T('In {مِنْ قَوْلِهِ}, what does {مِنْ} mark?'),
      options: [T('Origin, cause or separation'), T('Destination'), T('Limit'), T('Company')],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'All seven govern the genitive; what differs is the kind of complement each one asks for.',
      ),
    },
    {
      n: '2',
      text: T(
        '**{فِي} takes place and time, {عَلَى} takes a surface and an abstraction, {إِلَى} takes a destination, {عَنْ} takes a topic.**',
      ),
    },
    { n: '3', text: T('{مَعَ} is the only one that changes case with pronouns: {مَعِي} and {مَعَهُ}.') },
    {
      n: '4',
      text: T(
        '{مِنْ} before a verbal noun marks origin, cause or separation, which is why it also means "by".',
      ),
    },
    {
      n: '5',
      text: T(
        '{بِـ} and {كَـ} are shortened {فِي} and {مِثْلَ}, and {لِـ} is the particle of possession.',
      ),
    },
  ],
  notes: [
    {
      label: T('The particle that is also a verb'),
      text: T(
        '{مَعَ} turns from preposition into verb in many expressions, as in {سَافَرَ مَعَهُ}, "he travelled with him", and the sense is the same. Anyone hunting an abstract particle in biblical text finds a verb, and the rendering is still right.',
      ),
    },
    {
      label: T('Why {مَعَ} is irregular'),
      text: T(
        '{مَعَ} used to be a noun meaning company, and a governed noun goes genitive. The accusative survived in a few shapes, and that is why the six pronoun forms do not follow a clean pattern.',
      ),
    },
  ],
  examples: [
    { text: 'مِنَ الْبَيْتِ', gloss: T('from the house; an origin') },
    { text: 'فِي الْبَيْتِ', gloss: T('in the house; a place') },
    { text: 'فِي يَوْمِ', gloss: T('on a day; time') },
    { text: 'عَلَى الْمَجَلِسِ', gloss: T('upon the assembly') },
    { text: 'إِلَى ابْنِهِ', gloss: T('to his son; a destination') },
    { text: 'عَنِ الْمَلِكِ', gloss: T('about the king; a topic') },
    { text: 'مَعَهُ', gloss: T('with him') },
    { text: 'حَتَّى الْمَغْرِبِ', gloss: T('as far as the sunset; a limit in space') },
    { text: 'بِذَاكَ', gloss: T('by that; the shortened particle') },
  ],
  tables: [
    {
      caption: T('The seven and what they ask for'),
      head: [T('Particle'), T('Gloss'), T('Complement'), T('Example')],
      rows: [
        ['مِنْ', T('from; since'), T('origin, part, cause'), 'مِنَ الْبَيْتِ'],
        ['فِي', T('in; inside'), T('place or time'), 'فِي الْبَيْتِ'],
        ['عَلَى', T('on'), T('surface, support, abstraction'), 'عَلَى الْمَجَلِسِ'],
        ['إِلَى', T('to; until'), T('destination, direction, limit'), 'إِلَى الْبَيْتِ'],
        ['عَنْ', T('from; about'), T('separation, topic'), 'عَنِ الْمَلِكِ'],
        ['مَعَ', T('with'), T('company'), 'مَعَهُ'],
        [T('حَتَّى'), T('until'), T('a limit in space or time'), 'حَتَّى الْمَغْرِبِ'],
      ],
    },
    {
      caption: T('The three shortened particles'),
      head: [T('Form'), T('Stands for'), T('Example'), T('Gloss')],
      rows: [
        ['بـ', 'فِي', 'بِذَاكَ', T('by that')],
        ['لـ', 'إِلَى', 'لَهُ', T('for him; his')],
        ['كـ', 'مِثْلَ', 'كَذَا', T('thus; like that')],
      ],
    },
    {
      caption: T('{مَعَ} and the pronouns'),
      head: [T('Person'), T('Form'), T('Case'), T('Gloss')],
      rows: [
        [T('1st'), 'مَعِي', T('genitive'), T('with us')],
        [T('2nd masc.'), 'مَعَكَ', T('accusative'), T('with you')],
        [T('2nd fem.'), 'مَعَكِ', T('genitive'), T('with you')],
        [T('3rd masc.'), 'مَعَهُ', T('genitive'), T('with him')],
        [T('3rd fem.'), 'مَعَهَا', T('genitive'), T('with her')],
        [T('masc. plural'), 'مَعَهُمْ', T('genitive'), T('with them')],
      ],
    },
  ],
};
