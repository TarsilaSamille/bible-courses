import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  section: T('Pronouns and numerals'),
  title: T('Numeral: the noun that counts'),
  subtitle: T('пять, пяти, пятью: the same number in six positions'),
  body: C(`
## The Russian numeral is a noun

A Portuguese numeral does not inflect: five books, five houses, five days. The Russian numeral does inflect, and it inflects as a noun rather than as an adjective. That means it has six shapes, that those shapes carry case values, and that the inflection is a property of the word and not an accident of the sentence.

The consequence is that the numeral can occupy positions that only nouns occupy in Portuguese. Пяти is genitive, and it can be genitive of a numeral as well as of a noun: пяти столов is five tables. Пятью is instrumental, and it turns up after a verb: благодарю пятью. A reader who treats the numeral as a fixed quantifier gets the inflection wrong before getting the meaning wrong.

The parallel that settles it is Latin. Quinque, quinque, quinque has six forms in Latin, exactly as in Russian, and anyone who has read Latin will recognise the mechanism at once. The difference is that in Latin the inflection is optional in speech and obligatory in writing, while in Russian it is obligatory in both.

## The paradigm of пять and of два

Пять is the pattern: five shapes for six positions, with one repeated. The instrumental has two shapes, пятью, the commoner, and пяти, which turns up when the next word requires it. The rest coincide.

Два is the most irregular of the group, and it is the one in constant use. It has no separate feminine shape: две книги uses две, and the inflection is the same. In the plural, два becomes двое when it counts people, as in двое детей.

Один is the most adjectival of all. It inflects like an adjective, with gender: один, одна, одно, одни, and each one inflects like the noun it accompanies. одного дня is genitive, одному дню is dative, одном дне is prepositional. It is the numeral that looks like an adjective, and that is why it is the exception that proves the rule.

Сто and двести are a declension of one single shape: ста, стам, стами. The noun after them is what inflects, and that is why сто лет has лет in the genitive plural and not столётов.

## What the numeral governs

After two, three and four the noun goes to the genitive singular: два дня, три книги, четыре часа. From five on, the noun goes to the genitive plural: пять дней, двадцать книг, сто человек. The rule has already appeared with the nouns, and here it comes back because the numeral is what does the counting.

What changes is the direction: with two, three and four it is the noun that inflects; with five or more it is the numeral that inflects. двух дней has the numeral in the genitive, and пяти дней as well. The difference is that the first has a singular noun and the second a plural one, and that is what you see.

And there is a detail that only shows up in writing: in двадцати пяти the numeral is a noun in the genitive, because what follows is a noun in the plural. двадцати два agrees with the unit. One sentence can hold two numerals in two different cases.

## The hook: the day that was counted

**И был вечер, и было утро: день один.** The closing formula of each day of creation in Genesis has the same shape: a noun in the genitive plural for the part of the day, two verbs in the past for what happened, and an adjectival numeral for the count.

Один here is an adjective, not a noun. It agrees with день, and день is masculine, which is why no feminine or neuter shape is visible. But the numeral does inflect: в первый день, на первый день, о первом дне, with the genitive, the dative and the prepositional of the adjective.

The count of Genesis runs to the seventh day, and the seventh is седьмой. It inflects like an adjective too, and it is what the liturgy uses when it speaks of the day that comes: Благословен грядущий, blessed is he who comes, with грядущий a participle and not a numeral. The noun день is the same throughout the narrative, and what changes is the numeral that qualifies it.
`),
  vocab: [
    V('пять', 'пять', 'five; nominative'),
    V('пяти', 'пять', 'of five; genitive, dative and prepositional'),
    V('пятью', 'пять', 'five; instrumental'),
    V('два', 'два', 'two'),
    V('двух', 'два', 'of two; genitive'),
    V('двум', 'два', 'to two; dative'),
    V('двумя', 'два', 'with two; instrumental'),
    V('одной', 'один', 'of one; feminine genitive'),
    V('одного дня', 'день', 'of one day; adjectival numeral'),
    V('двое', 'два', 'two people; plural of two'),
    V('сто', 'сто', 'one hundred'),
    V('ста', 'сто', 'of a hundred; genitive, dative and instrumental'),
    V('пять дней', 'день', 'five days; noun in the genitive plural'),
    V('два дня', 'день', 'two days; noun in the genitive singular'),
    V('день один', 'день', 'the first day; adjectival numeral'),
    V('первый', 'первый', 'first; an ordinal that inflects like an adjective'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In благодарю пятью, which case is пятью?'),
    options: [T('Genitive'), T('Instrumental'), T('Dative')],
    answer: 1,
    hint: T(
      'After a verb of motion or action the instrumental is the case of means, path and accompaniment.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: пять ___ (five days)'), answer: 'дней' },
    {
      kind: 'choose',
      prompt: T('What is the genitive of два?'),
      options: [T('два'), T('двух'), T('двум')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: ___ книги (two books)'), answer: 'две' },
  ],
  rules: [
    { n: '1', text: T('The Russian numeral inflects as a noun and has six shapes, one per case.') },
    {
      n: '2',
      text: T(
        '{Пять} has five distinct shapes: {пяти} stands for the genitive, the dative and the prepositional.',
      ),
    },
    {
      n: '3',
      text: T(
        '{Два} has no separate feminine shape: {две} {книги} uses {две}, and the inflection is the same.',
      ),
    },
    {
      n: '4',
      text: T('{Один} inflects like an adjective, with gender: {один}, {одна}, {одно}, {одни}.'),
    },
    {
      n: '5',
      text: T(
        'After 2 to 4 the noun goes to the genitive singular; from 5 on, to the genitive plural.',
      ),
    },
  ],
  notes: [
    {
      label: T('Five shapes or six'),
      text: T(
        'Пять has five shapes for six positions: nominative пять, genitive пяти, dative пяти, accusative пять, instrumental пятью, prepositional пяти. The genitive, the dative and the prepositional are the same word. Anyone who has read Latin will find the pattern identical to quinque, and what has to be learned is the list, not the mechanism.',
      ),
    },
    {
      label: T('Where the numeral is an adjective'),
      text: T(
        'Один, два, три, четыре and the ordinals work as adjectives: they agree in gender and number with the noun. From five on, the noun goes to the plural and the numeral stops agreeing. A sentence like двадцать два дня has two agreements in the same phrase: the compound agrees with the unit, and the unit agrees with день. What inflects and what does not changes in the middle of the sentence.',
      ),
    },
  ],
  examples: [
    { text: 'пять дней', gloss: T('five days; noun in the genitive plural') },
    { text: 'два дня', gloss: T('two days; noun in the genitive singular') },
    { text: 'пяти дней', gloss: T('of five days; the numeral is genitive') },
    { text: 'благодарю пятью', gloss: T('I thank with five; numeral in the instrumental') },
    { text: 'одного дня', gloss: T('of one day; adjectival numeral in the genitive') },
    { text: 'одной книги', gloss: T('of one book; adjectival feminine numeral in the genitive') },
    { text: 'двое детей', gloss: T('two children; plural of two for people') },
    { text: 'двух дней', gloss: T('of two days; plural noun, genitive numeral') },
    { text: 'сто лет', gloss: T('a hundred years; noun in the genitive plural') },
    {
      text: 'И был вечер, и было утро: день один',
      gloss: T('and it was evening, and it was morning: the first day (Gen 1:5)'),
    },
  ],
  tables: [
    {
      caption: T('The five numerals that turn up in every sentence'),
      head: [T('Case'), T('один'), T('два'), T('три'), T('пять')],
      rows: [
        [T('nominative'), T('один'), T('два'), T('три'), T('пять')],
        [T('genitive'), T('одного'), T('двух'), T('трёх'), T('пяти')],
        [T('dative'), T('одному'), T('двум'), T('трём'), T('пяти')],
        [T('accusative'), T('один'), T('два'), T('три'), T('пять')],
        [T('instrumental'), T('одним'), T('двумя'), T('тремя'), T('пятью')],
        [T('prepositional'), T('об одном'), T('о двух'), T('о трёх'), T('о пяти')],
      ],
    },
    {
      caption: T('One numeral in six positions'),
      head: [T('Case'), T('пять'), T('два'), T('сто'), T('двадцать')],
      rows: [
        [T('nominative'), T('пять'), T('два'), T('сто'), T('двадцать')],
        [T('genitive'), T('пяти'), T('двух'), T('ста'), T('двадцати')],
        [T('dative'), T('пяти'), T('двум'), T('стам'), T('двадцати')],
        [T('accusative'), T('пять'), T('два'), T('сто'), T('двадцать')],
        [T('instrumental'), T('пятью'), T('двумя'), T('стами'), T('двадцатью')],
        [T('prepositional'), T('о пяти'), T('о двух'), T('о ста'), T('о двадцати')],
      ],
    },
    {
      caption: T('The counting rule'),
      head: [T('Numeral'), T('The noun goes'), T('Example'), T('What inflects')],
      rows: [
        [
          T('1, 21, 31'),
          T('nominative singular'),
          T('двадцать один день'),
          T('the numeral, as an adjective'),
        ],
        [T('2, 3, 4'), T('genitive singular'), T('два дня, три месяца'), T('the noun')],
        [T('5 to 20, 0'), T('genitive plural'), T('пять дней, двадцать книг'), T('the numeral')],
        [
          T('a compound ending in 2 to 4'),
          T('genitive singular'),
          T('двадцать два года'),
          T('the numeral, as a noun'),
        ],
      ],
    },
  ],
};
