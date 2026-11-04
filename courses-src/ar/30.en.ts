import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('How Arabic creates new words'),
  subtitle: T('فَاعِل، مَفْعُول، مُفَعَّل، تَفَاعُل، اسْتَفْعَل'),
  section: T('Verbs'),
  body: C(`## Open class and closed class

A class of words is **open** when the language can add members to it for ever, and **closed** when the set is fixed and fits in a list. The criterion is not sense, it is countability.

In Arabic, noun, verb, adjective and adverb are open classes. Article, pronoun, preposition, particle and numeral are closed ones. And the reason is a single thing, which sits in the next section: **Arabic has moulds for generating new words, and the mould is what makes the class open.** A new noun is not a word picked out of a list, it is a root fitted into a mould: {حِكْمَة} from {حَكَمَ}, {رِحْلَة} from {رَاحَ}, {عَجَبَة} from {عَجِبَ}. Three words no other language would license, and Arabic produces without effort.

A closed class is the opposite, and that is why it is taught as a list. The article is one. The pronouns are twenty-six. The prepositions are about fifty, counting the shortened ones. The numerals are a table from three to a thousand.

## The fifteen patterns of the verb

The fifteen verb patterns are the engine of the language, and they are not decoration: they are the reason the verb is an open class. Each pattern is a skeleton of three or four vowels and consonants with the root inside, and each one adds a meaning of its own.

The first form is {فَعَلَ}. The second, {فَعَّلَ}, is intensity. The third, {فَاعَلَ}, runs both ways: {عَالَمَ} means "to work with" and "to know", and the same word does both. The fourth, {أُفْعِلَ}, gives a recipient. The fifth, {تَفَعَّلَ}, is action by degrees. The sixth, {تَفَاعَلَ}, is reciprocal action. The seventh, {اِفْتَعَلَ}, is effort. The eighth is receiving. The ninth is reflexive in value. The tenth, {اِسْتَفْعَلَ}, is asking. And the last five carry prefixes that mark the person.

What matters for reading is that **fifteen patterns account for almost every verb on any page.** When a verb has the prefix {تَ} or {نَ}, the reader already knows it is form V or X, and only the root is left to find.

## The closed ones, and where they live

The list of closed classes is short, and it is the part of the course that is memorised in a single afternoon.

Article: one. Pronoun: twenty-six free forms, plus fourteen attached shapes that are the same ones under case. Preposition: about fifty, if the three shortened ones are counted. Particle: about forty, counting the connectors, the negators and the ones that belong to God. Numeral: nine for the numbers three to ten, and the rules close the rest.

And there is a fourth thing that closes the list, and it is the most Arabic thing of all: the **tanwīn** {ـًا}, {ـٌ}, {ـًا}. It is not a word, it is an ending, and it is what turns an adjective into an adverb in two letters: {جَدِيد} plus {ـًا} gives {جَدِيدًا}, "recently". The adverb class is open and the grammar of the adverb has one rule.

## Reading criterion

In {وَإِنَّكَ لَعَلَى خُلُقٍ عَظِيمٍ} there are three things this whole course has been building towards. The noun {خُلُقٍ} is genitive because of {لِـ}, and its plural is broken, on the {فُعْل} pattern, which nobody produces by rule. The adjective {عَظِيمٍ} is in the same case and therefore ends the same way: {ـٍ}. And the {لَعَلَى} is a particle, a closed class you learn once.

What the clause shows is that a single line can carry a noun pattern, a plural pattern, a closed particle and case agreement all at once. It is not a hard clause; it is an ordinary one, and a reader who spots the four moves much faster.`),
  vocab: [
    V('حِكْمَة', 'حكمة', 'wisdom'),
    V('رِحْلَة', 'رحلة', 'journey'),
    V('عَجَبَة', 'عجب', 'wonder'),
    V('نَجَّمَ', 'نجم', 'it happened'),
    V('تَحَالَفَ', 'حلف', 'he allied himself'),
    V('اسْتَقْلَلَ', 'قفل', 'it was locked'),
    V('جَدِيدًا', 'جديد', 'recently'),
    V('مَهْمًا', 'مهم', 'importantly'),
    V('خُلُقٍ', 'خلق', 'character; broken plural in the genitive'),
    V('عَظِيمٌ', 'عظيم', 'great'),
    V('الـ', 'ال', 'the definite article'),
    V('هُوَ', 'هو', 'pronoun'),
    V('مِنْ', 'من', 'preposition'),
    V('مِئَة', 'مئة', 'a hundred'),
    V('تَفَاعَلَ', 'فعل', 'the pattern of the sixth form'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which of these classes is closed?'),
    options: [T('Noun'), T('Verb'), T('Adjective'), T('Numeral')],
    answer: 3,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the pattern of the sixth form: {ت ___ اَعَلَ}.'),
      answer: 'فَ',
      hint: T('It is the {تَفَاعَلَ} pattern, of reciprocal action.'),
    },
    {
      kind: 'match',
      prompt: T('Match pattern and example.'),
      pairs: [
        { a: T('فَعَّلَ'), b: T('نَجَّمَ') },
        { a: T('تَفَعَّلَ'), b: T('تَدَرَّبَ') },
        { a: T('تَفَاعَلَ'), b: T('تَحَالَفَ') },
        { a: T('اِسْتَفْعَلَ'), b: T('اسْتَقْلَلَ') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('How is {جَدِيدًا} built from {جَدِيد}?'),
      options: [
        T('With a prefix'),
        T('With {ـًا} at the end'),
        T('With {الـ}'),
        T('With a verb pattern'),
      ],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('How many prepositions does Arabic have, counting the shortened ones?'),
      options: [T('About five'), T('About fifty'), T('About five hundred'), T('Exactly seven')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '**A class is open when the language adds members to it without end, and closed when the set is fixed and countable.**',
      ),
    },
    {
      n: '2',
      text: T(
        'Noun, verb, adjective and adverb are open in Arabic because there is a mould for each new word.',
      ),
    },
    {
      n: '3',
      text: T(
        'Article, pronoun, preposition, particle and numeral are closed, and that is why they can be taught as a list.',
      ),
    },
    { n: '4', text: T('The fifteen verb patterns account for almost every verb on any page.') },
    {
      n: '5',
      text: T(
        'Adverb is the cheapest class of all: nearly every adverb is an adjective plus {tanwīn}.',
      ),
    },
  ],
  notes: [
    {
      label: T('The count nobody makes'),
      text: T(
        'Portuguese has thirty-odd adverbs formed with -mente, and that is the proof that the class is productive. Arabic does the same with an ending: {جَدِيد} plus {ـًا} gives {جَدِيدًا}. The suffix is shorter and the rule is simpler.',
      ),
    },
    {
      label: T('The pattern does not oblige'),
      text: T(
        'Having a pattern does not oblige anyone to use the word. The {فَعَّال} pattern produces {غَفَّار}, "forgiver", and {عَلَّام}, "scholar", and it would also produce words nobody says. Morphology opens the door; habit decides who walks through.',
      ),
    },
  ],
  examples: [
    { text: 'حِكْمَةٌ', gloss: T('wisdom; a new noun from an old pattern') },
    { text: 'رِحْلَةٌ', gloss: T('journey; the {فِعْلَة} pattern') },
    { text: 'عَجَبَةٌ', gloss: T('wonder; the {فِعْلَة} pattern') },
    { text: 'نَجَّمَ', gloss: T('it happened; second form') },
    { text: 'تَحَالَفَ', gloss: T('he allied himself; sixth form, reciprocal') },
    { text: 'اسْتَقْلَلَ', gloss: T('it was locked; tenth form') },
    { text: 'جَدِيدًا', gloss: T('recently; an adverb made from an adjective') },
    { text: 'خُلُقٍ', gloss: T('character; broken plural in the genitive') },
    { text: 'مِئَةٌ', gloss: T('a hundred; a closed-class numeral') },
  ],
  tables: [
    {
      caption: T('The fifteen forms of the verb'),
      head: [T('N'), T('Pattern'), T('Value'), T('Example')],
      rows: [
        ['I', 'فَعَلَ', T('plain action'), 'كَتَبَ'],
        ['II', 'فَعَّلَ', T('intensity'), 'نَجَّمَ'],
        ['III', 'فَاعَلَ', T('action both ways'), 'عَالَمَ'],
        ['IV', 'أُفْعِلَ', T('giving a recipient'), 'أَخْبَرَ'],
        ['V', 'تَفَعَّلَ', T('by degrees'), 'تَدَرَّبَ'],
        ['VI', 'تَفَاعَلَ', T('reciprocity'), 'تَحَالَفَ'],
        ['VII', 'اِفْتَعَلَ', T('effort'), 'اِجْتَهَدَ'],
        ['VIII', 'اِفْتَعَلَ', T('receiving'), 'اِتَّخَذَ'],
        ['IX', 'اِفْعَلَ', T('reflexive'), 'انْكَشَفَ'],
        ['X', 'اِسْتَفْعَلَ', T('asking'), 'اسْتَقْلَلَ'],
        ['XI', 'فَاعِلَ', T('with a person suffix'), 'سَافَرْتُ'],
        ['XII', 'فَعِلَ', T('with a person prefix'), 'فَعِلْنَا'],
        ['XIII', 'فَعُولُ', T('with a person prefix'), 'فَعُولْنَا'],
        ['XIV', 'مَفْعُولُ', T('participle'), 'مَقْتُولٌ'],
        ['XV', 'مَفْعِلُ', T('with a person prefix'), 'مَفْعِلْنَا'],
      ],
    },
    {
      caption: T('Open or closed class'),
      head: [
        T('Class'),
        T('Open or closed'),
        T('Why'),
        T('Example'),
        T('Class'),
        T('Open or closed'),
        T('Why'),
        T('Example'),
      ],
      rows: [
        [
          T('noun'),
          T('open'),
          T('patterns make nouns'),
          'حِكْمَة',
          T('article'),
          T('closed'),
          T('a single morpheme'),
          'الـ',
        ],
        [
          T('verb'),
          T('open'),
          T('fifteen patterns'),
          'تَحَالَفَ',
          T('pronoun'),
          T('closed'),
          T('26 fixed shapes'),
          'هُوَ',
        ],
        [
          T('adjective'),
          T('open'),
          T('it follows the new noun'),
          'جَدِيدٌ',
          T('preposition'),
          T('closed'),
          T('about 50'),
          'مِنْ',
        ],
        [
          T('adverb'),
          T('open'),
          T('adjective plus tanwīn'),
          'جَدِيدًا',
          T('numeral'),
          T('closed'),
          T('a table from 3 to 1000'),
          'مِئَة',
        ],
      ],
    },
    {
      caption: T('Counting the closed classes'),
      head: [T('Class'), T('Amount'), T('Note')],
      rows: [
        [T('articles'), '1', T('plus the iḍāafa without an article')],
        [T('pronouns'), '26', T('plus 14 attached shapes')],
        [T('prepositions'), '50', T('the long ones and the three short')],
        [T('particles'), '40', T('connectors, negators and the ones of God')],
        [T('numerals 3 to 10'), '8', T('a table of its own')],
        [T('numerals 11 to 99'), '90', T('by rule, not by list')],
      ],
    },
  ],
};
