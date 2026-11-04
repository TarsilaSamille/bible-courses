import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  title: T('The three voices of the verb'),
  subtitle: T('فَعَلَ، يَفْعَلُ، سَيَفْعَلُ'),
  section: T('Verbs'),
  body: C(`## Three voices, not three tenses

The Arabic verb has three principal shapes, and what they mark is not time but aspect. **The perfect presents the event as a whole; the imperfect presents it as going on; the future presents it as coming.**

{كَتَبَ} is perfect and means "he wrote", but it can also mean "he wrote and that was the end of it": the perfect doubles the effect. {يَكْتُبُ} is imperfect and means "he writes", in the sense that the process is under way, and it is the shape Portuguese would render as present or as future, depending on context. {سَيَكْتُبُ} is future and is recognised by the {سَـ} prefix welded to the imperfect.

The consequence for reading is serious. Anyone who renders {كَتَبَ} as "was writing" is wrong; anyone who renders {يَكْتُبُ} as "wrote" is wrong; and anyone who renders {يَكْتُبُ} as "writes" is right without knowing why, because the rightness came from aspect and not from tense.

## The past has three vowels, and that is the secret

The perfect does not vocalise in only one way. {كَتَبَ} is {فَعَلَ}, with {a} in the first and last position. {عِلِمَ} is {فَعِلَ}, with {i} in the first and {a} in the last. {نَصَرَ} is {فَعُلَ}, with {u} in the first and {a} in the last.

Those vowels are not accident. They **class the root**, and the class decides which prepositions the verb takes and how its verbal noun is built. A verb of the {فَعِلَ} class tends to govern {بِـ} or {لِـ}; one of the {فَعُلَ} class tends to govern {لِـ}; and those of the {فَعَلَ} class, which are the majority, use almost no particle at all. {كَتَبَ} takes none, {عِلِمَ} takes {بِـ}, {نَصَرَ} takes {لِـ}.

The verbal noun follows the same logic: {مَفْعَل} for {فَعَلَ}, {مَفْعِلَة} for {فَعِلَ} and {مَفْعُولَة} for {فَعُلَ}. {عِلْم} comes from {عِلِمَ} and {نَظَرٌ} comes from {نَصَرَ}. Anyone who knows the vocal class of a root knows the verbal noun before opening the dictionary.

## The short form

And there is a fourth shape, commoner than the other three, and it is not a conjugated shape at all. It is the imperfect or the jussive without the person suffixes.

{اُكْتُبْ} is the command. {أَنْ يُكْتَبَ} is "let it be written". {لَنْ يُهْلِكَ} is "it shall not be destroyed". In all three the person disappears, and the disappearance is the information: a shape that does not inflect is not judging anyone, it is asserting something in general.

That is why proverbs and sayings use this shape. A proverb that says "man writes" does not inflect, because the proverb does not count people, and the short form settles that without needing a pronoun.

The historical origin of the short form is the final {ا} of the perfect, which fell away over time: {فَعَلَ} became {فَعَلْ} and then {فَعَل}. A reader of an ancient text meets both in the same manuscript, and the presence of a person suffix is what says which one is in use.

## Reading criterion

In {وَقَالَ اللهُ: لِيَكُنْ نُورٌ، فَكَانَ نُورٌ} there are three voices in one clause. {وَقَالَ} is perfect and narrates a finished action. {لِيَكُنْ} is jussive preceded by {لِـ}, and the {لِـ} here is neither possession nor destination: it is purpose, "let there be". {فَكَانَ} is perfect again, and it restates the event as a result.

A five-word clause with two voices and a purpose, and the rendering "and God said, let there be light, and there was light" gets all three right because it read the shapes rather than an earlier translation.`),
  vocab: [
    V('كَتَبَ', 'كتب', 'he wrote'),
    V('يَكْتُبُ', 'كتب', 'he writes'),
    V('سَيَكْتُبُ', 'كتب', 'he will write'),
    V('اُكْتُبْ', 'كتب', 'write!'),
    V('عِلِمَ', 'علم', 'he knew; he learned'),
    V('نَصَرَ', 'نصر', 'he looked'),
    V('وَقَالَ', 'قال', 'he said'),
    V('لِيَكُنْ', 'كان', 'let there be'),
    V('نُورٌ', 'نور', 'light'),
    V('فَعَلَ', 'فعل', 'the perfect pattern'),
    V('مَفْعَل', 'فعل', 'a verbal-noun pattern'),
    V('مَفْعِلَة', 'فعل', 'a verbal-noun pattern'),
    V('مَفْعُولَة', 'فعل', 'a verbal-noun pattern'),
    V('كَانَ', 'كان', 'he was'),
    V('يَفْعَلُ', 'فعل', 'the imperfect pattern'),
    V('سَـ', 'س', 'the prefix of the future'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which shape is the future?'),
    options: [T('كَتَبَ'), T('يَكْتُبُ'), T('سَيَكْتُبُ'), T('اُكْتُبْ')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the perfect pattern of the i class: {عِلِمَ} follows ___ِعِلَ.'),
      answer: 'فَ',
      hint: T('It is the {فَعِلَ} pattern.'),
    },
    {
      kind: 'match',
      prompt: T('Match pattern and example.'),
      pairs: [
        { a: T('فَعَلَ'), b: T('كَتَبَ') },
        { a: T('فَعِلَ'), b: T('عِلِمَ') },
        { a: T('فَعُلَ'), b: T('نَصَرَ') },
        { a: T('فَعَلْ'), b: T('اُكْتُبْ') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('What does the short form drop?'),
      options: [T('The person'), T('The root'), T('The past'), T('The vowel')],
      answer: 0,
    },
    {
      kind: 'choose',
      prompt: T('In {لِيَكُنْ نُورٌ}, what use is {لِـ} in?'),
      options: [T('Possession'), T('Destination'), T('Purpose'), T('Origin')],
      answer: 2,
    },
  ],
  rules: [
    {
      n: '1',
      text: T('**Arabic has three voices, not three tenses: perfect, imperfect and future.**'),
    },
    {
      n: '2',
      text: T('The perfect presents the event as whole; the imperfect presents it as going on.'),
    },
    {
      n: '3',
      text: T(
        'The third vowel of the perfect ({َ}, {ِ}, {ُ}) classes the root and predicts which prepositions the verb takes.',
      ),
    },
    {
      n: '4',
      text: T(
        'The future is {سَـ} plus the imperfect, and the command is the imperfect with no prefix.',
      ),
    },
    {
      n: '5',
      text: T(
        'The short form is the imperfect or jussive without a person suffix, and it appears after {أَنْ}, {لَنْ} and the {لِـ} of purpose.',
      ),
    },
  ],
  notes: [
    {
      label: T('One root, three voices'),
      text: T(
        '{كَتَبَ}, {يَكْتُبُ} and {سَيَكْتُبُ} have the same three consonants, and the vowels change place. What changes in the root is nothing, and what carries the sense is the ending. It is the same logic as the broken plural, which is why the two systems understand each other.',
      ),
    },
    {
      label: T('Why the short form shows up in sayings'),
      text: T(
        'A proverb does not inflect because it does not count people. The short form settles that without a pronoun, and that is why an ancient text sometimes has {فَعَلَ} with a suffix and sometimes has the bare shape, with no change of sense at all.',
      ),
    },
  ],
  examples: [
    { text: 'وَقَالَ', gloss: T('he said; perfect') },
    { text: 'لِيَكُنْ نُورٌ', gloss: T('let there be light; jussive after {لِـ}') },
    { text: 'فَكَانَ نُورٌ', gloss: T('and there was light; perfect') },
    { text: 'كَتَبَ', gloss: T('he wrote; perfect') },
    { text: 'يَكْتُبُ', gloss: T('he writes; imperfect') },
    { text: 'سَيَكْتُبُ', gloss: T('he will write; future') },
    { text: 'اُكْتُبْ', gloss: T('write!; command') },
    { text: 'عِلِمَ', gloss: T('he knew; the i class') },
    { text: 'نَصَرَ', gloss: T('he looked; the u class') },
  ],
  tables: [
    {
      caption: T('The three voices and the short form'),
      head: [T('Shape'), T('Pattern'), T('What it asserts'), T('Example')],
      rows: [
        [T('perfect'), 'فَعَلَ', T('the event whole'), 'كَتَبَ'],
        [T('imperfect'), 'يَفْعَلُ', T('the event going on'), 'يَكْتُبُ'],
        [T('future'), 'سَيَفْعَلُ', T('the event to come'), 'سَيَكْتُبُ'],
        [T('command'), 'اُفْعُلْ', T('an order'), 'اُكْتُبْ'],
      ],
    },
    {
      caption: T('The three vocal classes'),
      head: [T('Class'), T('Perfect'), T('Verb'), T('Usual particle'), T('Verbal noun')],
      rows: [
        [T('weak a'), 'فَعَلَ', 'كَتَبَ', T('none'), 'مَفْعَل'],
        [T('weak i'), 'فَعِلَ', 'عِلِمَ', 'بـ', 'مَفْعِلَة'],
        [T('weak u'), 'فَعُلَ', 'نَصَرَ', 'لـ', 'مَفْعُولَة'],
      ],
    },
    {
      caption: T('The short form and where it appears'),
      head: [T('Context'), T('Long form'), T('Short form'), T('Gloss')],
      rows: [
        [T('command'), 'اُكْتُبْ', 'اُكْتُبْ', T('write!')],
        [T('after {أَنْ}'), 'أَنْ يَكْتُبَ', 'أَنْ يُكْتَبَ', T('let it be written')],
        [T('after {لَنْ}'), 'لَنْ يَكْتُبَ', 'لَنْ يُكْتَبَ', T('it shall not be written')],
        [T('in sayings'), 'كَتَبَ الرَّجُلُ', 'كَتَبَ', T('man writes')],
      ],
    },
  ],
};
