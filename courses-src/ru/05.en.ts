import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('Nouns and cases'),
  subtitle: T('Падежи — six grammatical relations'),
  section: T('The noun: gender, number and the adjective'),
  body: C(
    'Russian does not use articles. Relations are marked by cases; six are principal. The nominative marks the subject; the accusative, the direct object; the genitive, possession, origin and complements of absence; the dative, the recipient; the instrumental, means or company; and the prepositional case, spatial and other relations after в, на, с, к, о, у, от, до and про. Gender is usually inferred from the nominative: masculine, feminine or neuter. After 2, 3 or 4, the noun takes the genitive singular: два слова. The plural has its own endings, while soft signs often change: слово → слова; день → дни. A case does not automatically equal a preposition: в начале means “in the beginning”, while в храм can mean “into the temple”.',
  ),
  vocab: [
    V('Бог', 'бог', 'God'),
    V('Бога', 'бог', 'God; genitive and accusative'),
    V('Богу', 'бог', 'to God; dative'),
    V('книга', 'книга', 'book; feminine'),
    V('книги', 'книга', 'of books; genitive'),
    V('книгу', 'книга', 'the book; accusative'),
    V('слово', 'слово', 'word; neuter'),
    V('слова', 'слово', 'words; plural, and genitive singular after a numeral'),
    V('мир', 'мир', 'world; peace'),
    V('небо', 'небо', 'heaven'),
    V('сердце', 'сердце', 'heart; neuter'),
    V('день', 'день', 'day; masculine'),
    V('дни', 'день', 'days; plural'),
    V('два', 'два', 'two'),
    V('окно', 'окно', 'window; neuter'),
    V('вода', 'вода', 'water; feminine'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the accusative of Бог?'),
    options: [T('Бог'), T('Бога'), T('Богу')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: Я люблю Бога'), answer: 'Бога' },
    { kind: 'fill', prompt: T('Complete: книга → книги'), answer: 'и' },
    {
      kind: 'choose',
      prompt: T('Which case does к govern?'),
      options: [T('Nominative'), T('Dative'), T('Instrumental')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The nominative is the reference form: {Бог}, {книга} and {слово} are the three columns of any table.',
      ),
    },
    {
      n: '2',
      text: T(
        'The accusative of an animate masculine is the genitive: {Бога} can be “of God” or “God” as an object, and the shape does not say which.',
      ),
    },
    {
      n: '3',
      text: T(
        'A neuter noun has one accusative shape, equal to the nominative: {слово} and {окно}.',
      ),
    },
    {
      n: '4',
      text: T(
        'After {два}, {три} and {четыре} the noun goes to the genitive singular: {два слова}, {четыре книги}.',
      ),
    },
    {
      n: '5',
      text: T(
        'The plural changes its marks: {слово} makes {слова} and {день} makes {дни}, and neither resembles the singular.',
      ),
    },
  ],
  notes: [
    {
      label: T('Definiteness lives in inflection'),
      text: T(
        'Russian has no article, so definiteness goes into inflection. {книга} is the bare noun; {книга-то} adds it through the pronoun. Reading a case is reading a relation, not a sense.',
      ),
    },
    {
      label: T('When the case is not what it looks like'),
      text: T(
        '{Бога} is the most common shape of the masculine noun after {Бог}, and it is genitive and accusative at once: in {слово Бога} it is genitive, in {Я люблю Бога} it is accusative. The ending is the same in both, and the verb decides.',
      ),
    },
  ],
  examples: [
    { text: 'Бог создал небо и землю', gloss: T('God created heaven and earth') },
    { text: 'Я люблю Бога', gloss: T('I love God; Бога is accusative') },
    { text: 'слово Бога', gloss: T('the word of God; Бога is genitive') },
    { text: 'Я читаю Книгу', gloss: T('I read the Book; Книгу is accusative') },
    { text: 'два слова', gloss: T('two words; the noun goes to the genitive singular') },
    { text: 'четыре книги', gloss: T('four books; книги is genitive singular') },
    { text: 'нет слова Бога', gloss: T('there is no word of God; two genitives') },
    { text: 'день и дни', gloss: T('day and days; the plural changes the mark') },
    { text: 'окно', gloss: T('window; accusative equal to the nominative') },
    { text: 'вода', gloss: T('water; the accusative adds -у: воду') },
  ],
  tables: [
    {
      caption: T('Paradigm of бог, книга and слово'),
      head: [T('Case'), T('Masculine'), T('Feminine'), T('Neuter')],
      rows: [
        [T('Nominative'), T('бог'), T('книга'), T('слово')],
        [T('Genitive'), T('бога'), T('книги'), T('слова')],
        [T('Dative'), T('богу'), T('книге'), T('слову')],
        [T('Accusative'), T('бога'), T('книгу'), T('слово')],
        [T('Instrumental'), T('богом'), T('книгой'), T('словом')],
        [T('Prepositional'), T('о Боге'), T('о книге'), T('о слове')],
      ],
    },
    {
      caption: T('The two shapes that are ambiguous'),
      head: [T('Shape'), T('Possible cases'), T('What decides'), T('Example')],
      rows: [
        [T('бога'), T('genitive and accusative'), T('the verb'), T('Я люблю Бога')],
        [T('богу'), T('dative'), T('the preposition'), T('к Богу')],
        [T('о Боге'), T('prepositional'), T('the preposition о'), T('говорим о Боге')],
        [
          T('слово'),
          T('nominative and accusative'),
          T('the neuter does not change'),
          T('Я знаю слово'),
        ],
      ],
    },
    {
      caption: T('The noun after a numeral'),
      head: [T('Numeral'), T('Case of the noun'), T('Example'), T('Gloss')],
      rows: [
        [T('один'), T('nominative singular'), T('один день'), T('one day')],
        [T('два, три, четыре'), T('genitive singular'), T('два слова'), T('two words')],
        [T('пять and up'), T('genitive plural'), T('пять слов'), T('five words')],
        [
          T('двадцать один'),
          T('nominative singular'),
          T('двадцать один день'),
          T('twenty-one days'),
        ],
      ],
    },
  ],
};
