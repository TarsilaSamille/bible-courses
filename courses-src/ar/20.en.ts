import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  title: T('Noun: the structure of definiteness'),
  subtitle: T('كِتَابٌ، الْكِتَابُ، كِتَابُ الْمُعَلِّمِ'),
  section: T('Nouns'),
  body: C(`## The question a noun asks

Someone looking at {كِتَاب} in Portuguese wants two things: whether it is masculine or feminine, and whether it is singular or plural. Someone looking at {كِتَاب} in Arabic wants one: **whether the listener already knows which book we are talking about**.

Definiteness is the central opposition of the Arabic noun, and gender is an accident inside it. A Portuguese manual reversed inverts the order of its chapters, and the result is not a language close to ours: it is a language that organises the noun around another question. Anyone translating directly receives a sentence with a definite noun and notices that information is missing: {كِتَابٌ} does not say which book is meant, and {كِتَابُ الْمُعَلِّمِ} already says it.

## The three ways to make a noun definite

The article is the best known and the easiest to spot. {الْكِتَابُ} is definite because it carries {ال}, and that is the visible mark.

The iḍāafa is the second, and it is the one Portuguese does not have. When two nouns join, the second becomes definite without taking an article: {كِتَابُ الْمُعَلِّمِ}, {بَيْتُ اللهِ}, {رَأْسُ الْجِسَدِ}. The second element is definite by position, not by a mark.

The relative is the third. {الطَّرِيقُ الَّذِي ضَيَّقٌ} is definite because {الَّذِي} brings a clause that identifies which path is meant, and the relative agrees in gender with the noun it replaces.

And there are nouns definite by nature, which need none of this: {مَكَّة} is a city and {هُوَ} is a pronoun, both definite by being themselves.

## The iḍāafa defines without saying

An iḍāafa is a unit, and the unit behaves like one definite noun. That gives a practical test: **a definite unit does not take the article twice**. {كِتَابُ الْمُعَلِّمِ} is right and {كِتَابُ الْمُعَلِّمُ} is not, because that second {ال} would say the teacher is any teacher, and it is the shape of the unit itself that determines him.

The two elements take different cases, and this is where the construction is rigid. The first takes whatever case the sentence asks for: in {كِتَابُ الْمُعَلِّمِ} it is nominative because it is the subject. The second is always genitive, with no exception worth the name. A nominative ending on the second element means it is not an iḍāafa, and the text is saying something else.

The most common kind is the iḍāafa with a pronoun, where the second element is not written at all: {رَاعِيَّ}, {كِتَابِي}, {نَفْسِي}. The attached pronoun is in the genitive and stands in for the missing noun.

## Reading criterion

The first verse of Psalm 23 is an iḍāafa with a pronoun and nothing else: {الرَّبُّ رَاعِيَّ فَلاَ يُعْوِزُنِي شَيْءٌ}. {رَاعِيَّ} is genitive, and {رَاعِيَّ} with the final {يَّ} is somebody's shepherd, with neither "of" nor "my" written: a reader who takes {رَاعِيَّ} for "my shepherd" is right without seeing that {رَاعِيَّ} is genitive rather than nominative. {شَيْءٌ}, beside it, is the only indefinite thing in the sentence, and that is why the rendering says "and I will lack nothing": the indefinite is what the sentence denies.`),
  vocab: [
    V('كِتَابٌ', 'كتاب', 'a book; indefinite'),
    V('الْكِتَابُ', 'كتاب', 'the book'),
    V('كِتَابُ الْمُعَلِّمِ', 'كتاب', 'the book of the teacher; an iḍāafa'),
    V('بَيْتُ اللهِ', 'بيت', 'the house of God'),
    V('الْمُعَلِّم', 'معلم', 'the teacher'),
    V('رَاعِيَّ', 'راع', 'my shepherd; iḍāafa with a pronoun'),
    V('شَيْءٌ', 'شيء', 'thing'),
    V('الَّذِي', 'الذي', 'which; who'),
    V('مَكَّةَ', 'مكة', 'Mecca; definite by nature'),
    V('هُوَ', 'هو', 'he; definite by nature'),
    V('رَأْسُ', 'رأس', 'head; first element of the iḍāafa'),
    V('الْجِسَد', 'جسد', 'the body'),
    V('الطَّرِيقُ', 'طريق', 'the way'),
    V('إِيمَانٌ', 'إيمان', 'a faith; an abstract and indefinite'),
    V('الْإِيمَانُ', 'إيمان', 'the faith'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {كِتَابُ الْمُعَلِّمِ}, how is the second element made definite?'),
    options: [
      T('By the article'),
      T('By its position in the iḍāafa'),
      T('By the relative'),
      T('It is not definite'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the iḍāafa: "the book of the teacher" is ___ الْمُعَلِّمِ.'),
      answer: 'كِتَابُ',
      hint: T('The first element takes the case the sentence asks for.'),
    },
    {
      kind: 'choose',
      prompt: T('Which phrase is correct?'),
      options: [T('كِتَابُ الْمُعَلِّمُ'), T('كِتَابُ الْمُعَلِّمِ'), T('كِتَابِ الْمُعَلِّمِ'), T('الْكِتَابُ الْمُعَلِّمُ')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Match noun and state.'),
      pairs: [
        { a: T('كِتَابٌ'), b: T('indefinite') },
        { a: T('الْكِتَابُ'), b: T('definite by the article') },
        { a: T('بَيْتُ اللهِ'), b: T('definite by the iḍāafa') },
        { a: T('هُوَ'), b: T('definite by nature') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('What case is {الْمُعَلِّمِ} in {كِتَابُ الْمُعَلِّمِ}?'),
      options: [T('Nominative'), T('Genitive'), T('Accusative'), T('Vowel')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The central question about a noun is whether it is known, not whether it is masculine or feminine.',
      ),
    },
    {
      n: '2',
      text: T('**Three things make a noun definite: the article, the iḍāafa and the relative.**'),
    },
    {
      n: '3',
      text: T(
        'In an iḍāafa the second element is definite without an article and always takes the genitive.',
      ),
    },
    { n: '4', text: T('Proper nouns and pronouns are definite by nature, with no visible mark.') },
    {
      n: '5',
      text: T(
        'A definite unit does not take the article twice: {كِتَابُ الْمُعَلِّمِ}, never {كِتَابُ الْمُعَلِّمُ}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Where Portuguese says "of"'),
      text: T(
        'Settles every relation of possession with a single word. Arabic settles it with the iḍāafa, which is a construction: first element with the case of the sentence, second in the genitive. One Portuguese "of" may have been two prepositions, one iḍāafa, or nothing at all.',
      ),
    },
    {
      label: T('The iḍāafa with a pronoun'),
      text: T(
        'The commonest iḍāafa in biblical text is the one with a pronoun: {رَاعِيَّ}, {كِتَابِي}, {نَفْسِي}. The second element is not written, and it is there all the same, which is why the ending of the pronoun is the surest sign that an iḍāafa is present.',
      ),
    },
  ],
  examples: [
    { text: 'كِتَابٌ', gloss: T('a book; indefinite') },
    { text: 'الْكِتَابُ', gloss: T('the book; definite by the article') },
    {
      text: 'كِتَابُ الْمُعَلِّمِ',
      gloss: T('the book of the teacher; the iḍāafa defines the second element'),
    },
    { text: 'بَيْتُ اللهِ', gloss: T('the house of God; iḍāafa with a proper noun') },
    { text: 'رَأْسُ الْجِسَدِ', gloss: T('the head of the body') },
    { text: 'الطَّرِيقُ الَّذِي ضَيَّقٌ', gloss: T('the way which is narrow') },
    { text: 'مَكَّةَ', gloss: T('Mecca; definite with no mark at all') },
    { text: 'هُوَ', gloss: T('he; a pronoun definite by nature') },
    { text: 'إِيمَانٌ', gloss: T('a faith; even the abstract can be indefinite') },
  ],
  tables: [
    {
      caption: T('The four states of the noun'),
      head: [T('State'), T('How it is marked'), T('Example'), T('Definite?')],
      rows: [
        [T('indefinite'), T('no article and no iḍāafa'), 'كِتَابٌ', T('no')],
        [T('definite by the article'), T('الـ'), 'الْكِتَابُ', T('yes')],
        [
          T('definite by the iḍāafa'),
          T('it is the second element'),
          'بَيْتُ اللهِ',
          T('yes, as a unit'),
        ],
        [T('definite by nature'), T('proper noun, pronoun, relative'), 'مَكَّةَ، هُوَ، الَّذِي', T('yes')],
      ],
    },
    {
      caption: T('The cases inside an iḍāafa'),
      head: [T('Position'), T('Case'), T('Ending'), T('Example')],
      rows: [
        [T('first element'), T('whatever the sentence asks'), T('variable'), 'كِتَابُ'],
        [T('second element'), T('genitive'), T('ـِ'), 'الْمُعَلِّمِ'],
        [T('attached pronoun'), T('genitive'), T('ـي، ـك، ـه'), 'رَاعِيَّ'],
      ],
    },
    {
      caption: T('Where definiteness shows up'),
      head: [T('Sign'), T('What it shows'), T('Example')],
      rows: [
        ['ال', T('definiteness directly'), 'الْكِتَابُ'],
        [T('a genitive after a noun'), T('the second element is already definite'), 'بَيْتُ اللهِ'],
        ['الَّذِي', T('definiteness through a relative clause'), 'الطَّرِيقُ الَّذِي'],
        [T('proper noun'), T('definiteness with no mark'), 'مَكَّةَ'],
      ],
    },
  ],
};
