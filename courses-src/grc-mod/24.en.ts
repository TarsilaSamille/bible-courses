import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  section: T('Numeral'),
  title: T('Ordinals, time and measure'),
  subtitle: T('πρώτος — τον τρίτο χρόνο — τον πρώτο'),
  body: C(`## The ordinal is an adjective

{πρώτος}, {δεύτερος}, {τρίτος}, {τέταρτος}, {πέμπτος} are ordinary adjectives and they inflect like adjectives: {ο πρώτος}, {η πρώτη}, {το πρώτο}, {οι πρώτοι}. There is nothing special about them, which is why they are learned as ordinary nouns.

Ancient Greek inflection was richer: in {πρῶτος} the neuter had {πρῶτον}, and the short form survives in {τὸν πρῶτον}, the accusative of {τὸν πρῶτον χρόνον}. Anyone reading Scripture meets these forms and needs to know they are the same numeral.

## Time in modern Greek goes accusative

Ancient Greek marked time with the dative: {τῷ τρίτῳ ἔτει}, "in the third year". Modern Greek lost the dative and put everything in the accusative, with no preposition: {τον τρίτο χρόνο}, {το τρίτο έτος}, {τις πέντε ώρες}.

This is one of the few places where spoken Greek and the Bible say the same thing with different words. The sense is identical, the case is not. Translating {τῷ τρίτῳ ἔτει} into English you feel nothing; translating it into modern Greek you have to change the case.

The hour is simpler still and is written with a numeral: {στις τέσσερις}, "at four". {στις τέσσερις το απόγευμα}, "at four in the afternoon". The numeral comes straight, with no noun, and what names the part of the day is the adverb {το}.

## An ordinal in the accusative is adverbial

A numeral in the accusative with no noun works as an adverb of order. {Τον πρώτο} means "first", and {τον δεύτερο} means "afterwards". It is neither a noun nor an article: it is the bare numeral, displaced.

{Τον πρώτο μιλάει, μετά εγώ} means "he speaks first, then I". Ancient Greek used the accusative of order even more freely, which is why {τὸν πρῶτον} turns up so often in the Gospels.

## Measure and quantity

Measure and time take the same path. {μία ώρα}, {δύο μέρες}, {τρία χρόνια}. The numeral agrees with the noun when the noun is what is being counted: {δύο μέρες}, {μία ώρα}. And the genitive appears when what is counted is the unit inside something larger: {δύο μέρες ταξιδιού}, "two days of journey".

The difference from English shows up in {πέντε χρόνια}: Greek writes in the plural what English writes in the singular, because {χρόνια} is neuter and the Greek neuter plural is {-ια}. {Ένα χρόνο} is singular and {δύο χρόνια} is plural, and the written form is the same for both, because {χρόνια} serves for both. That is why Greek writes {δύο χρόνια} and not {δύο χρόνος}.

## Where the ordinals appear in Scripture

> Καὶ ἤρξατο Ἰησοῦς κηρύσσειν ἐν τῇ Γαλιλαίᾳ τῷ Ἰωάννῃ τῷ βαπτιστῇ.

{τῷ Ἰωάννῃ} is dative: a personal name after a verb or a preposition goes there. {βαπτιστῇ} is dative too, a substantivised participle working as an ordinary noun. Time does not appear at all here.

The construction that shows up next is all ordinal: {ἐν ἔτει πεντηκοστῷ καὶ τριακοστῷ}, "in the thirty-fifth year". {πεντηκοστῷ} and {τριακοστῷ} are two ordinals in the dative, and the {καὶ} between them does the addition. English does the same addition with one word, which is why the Greek sentence looks longer than it is.`),
  vocab: [
    V('πρώτος', 'πρώτος', 'first'),
    V('πρώτη', 'πρώτος', 'first (feminine)'),
    V('δεύτερος', 'δεύτερος', 'second'),
    V('τρίτος', 'τρίτος', 'third'),
    V('τέταρτος', 'τέταρτος', 'fourth'),
    V('τον τρίτο χρόνο', 'τρίτος', 'in the third year'),
    V('το τρίτο έτος', 'τρίτος', 'the third year'),
    V('τον πρώτο', 'πρώτος', 'first (adverbial)'),
    V('τον δεύτερο', 'δεύτερος', 'afterwards'),
    V('μία ώρα', 'ώρα', 'an hour'),
    V('δύο μέρες', 'μέρα', 'two days'),
    V('πέντε χρόνια', 'χρόνος', 'five years'),
    V('στις τέσσερις', 'τέσσερις', 'at four'),
    V('το απόγευμα', 'απόγευμα', 'in the afternoon'),
    V('χρόνια', 'χρόνος', 'years'),
    V('ταξίδι', 'ταξίδι', 'journey'),
  ],
  rules: [
    { n: '§1', text: T('The ordinal inflects like an adjective: ο πρώτος, η πρώτη, το πρώτο.') },
    {
      n: '§2',
      text: T('In modern Greek time goes accusative, with no preposition: τον τρίτο χρόνο.'),
    },
    {
      n: '§3',
      text: T(
        'A numeral in the accusative with no noun is an adverb of order: τον πρώτο, "first".',
      ),
    },
    {
      n: '§4',
      text: T('The hour is written with a numeral and an adverb: στις τέσσερις το απόγευμα.'),
    },
  ],
  notes: [
    {
      label: T('Koine'),
      text: T(
        'In Scripture time goes dative, τῷ τρίτῳ ἔτει, because the dative still existed. The case changed, the idea did not; anyone translating into modern Greek has to change the case without changing the sense.',
      ),
    },
    {
      label: T('Plural'),
      text: T(
        'χρόνια is both the singular and the plural of χρόνος. No accent tells the two apart, which is why the sentence needs the numeral to say whether it is talking about one year or many.',
      ),
    },
  ],
  examples: [
    { text: 'ο πρώτος άνθρωπος', gloss: T('the first man') },
    { text: 'η τρίτη μέρα', gloss: T('the third day') },
    { text: 'τον τρίτο χρόνο', gloss: T('in the third year') },
    { text: 'το τρίτο έτος', gloss: T('the third year') },
    { text: 'τον πρώτο μιλάει', gloss: T('he speaks first') },
    { text: 'στις τέσσερις το απόγευμα', gloss: T('at four in the afternoon') },
    { text: 'δύο μέρες ταξιδιού', gloss: T('two days of journey') },
    { text: 'πέντε χρόνια μετά', gloss: T('five years later') },
  ],
  tables: [
    {
      caption: T('The first five ordinals'),
      head: ['Αριθμός', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['πρώτος', 'πρώτος', 'πρώτη', 'πρώτο'],
        ['δεύτερος', 'δεύτερος', 'δεύτερη', 'δεύτερο'],
        ['τρίτος', 'τρίτος', 'τρίτη', 'τρίτο'],
        ['τέταρτος', 'τέταρτος', 'τέταρτη', 'τέταρτο'],
        ['πέμπτος', 'πέμπτος', 'πέμπτη', 'πέμπτο'],
      ],
    },
    {
      caption: T('Time and measure'),
      head: ['Τύπος', 'Παράδειγμα'],
      rows: [
        ['έτος', 'το τρίτο έτος'],
        ['μήνας', 'τον δεύτερο μήνα'],
        ['ώρα', 'στις τέσσερις'],
        ['διάρκεια', 'δύο μέρες'],
      ],
    },
    {
      caption: T('Ordinal as adverb'),
      head: ['Κλίση', 'Σχήμα', 'Παράδειγμα'],
      rows: [
        ['αἰτιατική', 'τον + τακτικό', 'τον πρώτο'],
        ['ουδέτερο', 'τακτικό πληθυντικού', 'πρώτα'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How do you say "in the third year" in modern Greek?'),
    options: [
      T('στον τρίτο έτος'),
      T('τον τρίτο χρόνο'),
      T('στον τρίτον χρόνο'),
      T('τον τρίτος χρόνος'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ πρώτη μέρα (feminine nominative of "first")'),
      answer: 'Η',
      hint: T('Feminine article'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence uses the ordinal as an adverb?'),
      options: [T('ο πρώτος'), T('τον πρώτο'), T('πρώτος'), T('του πρώτου')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Ordinal and number'),
      pairs: [
        { a: 'πρώτος', b: T('1st') },
        { a: 'δεύτερος', b: T('2nd') },
        { a: 'τρίτος', b: T('3rd') },
        { a: 'τέταρτος', b: T('4th') },
      ],
      answer: ['a1', 'a2', 'a3', 'a4'],
    },
    {
      kind: 'fill',
      prompt: T('___ τέσσερις το απόγευμα (the preposition for the hour)'),
      answer: 'στις',
      hint: T('The Greek word for "at"'),
    },
  ],
};
