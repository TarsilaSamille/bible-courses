import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  section: T('Numeral'),
  title: T('Cardinals and the noun that goes genitive'),
  subtitle: T('ένα — δύο — τρεις — δύο ανθρώπων'),
  body: C(`## One, two, three

The cardinals are irregular only in the first three. {ένα} is one, {δύο} is two, {τρεις} is three; after that the series is regular and simply juxtaposes: {τέσσαρις}, {πέντε}, {εξι}, {επτά}, {οχτώ}, {εννέα}, {δέκα}. Above ten the number does not inflect: {δεκαπέντε}, {εκατόν}, {χιλιάδες}.

The numeral agrees in gender, and that is why Greek has three words for one: {ένας} masculine, {μία} feminine, {ένα} neuter. In two and three the agreement is looser: {δύο} and {τρεις} work for all three genders, and {τρία} only shows up when the numeral stands alone, as a noun.

{τρεις} is the only one that really inflects. In the genitive it becomes {τριών}, and that is why {τρεις ανθρώπων} means "three people": the numeral counts and the noun names.

## After a numeral the noun goes genitive

This is the construction English does not have. Instead of saying "three people", Greek says "three, of people": {τρεις ανθρώπων}. The numeral stays in whatever case the sentence needs and the noun goes genitive, as if it were a counted part.

The reason is historical. Ancient Greek had partitives: {τρεις}, {τετράδες}, "three, four", used on their own. When nouns came into the count, they went genitive, and the construction stayed.

The test is easy: if the sentence is counting, the noun is in {-ων}. {δύο φίλων}, {τρεις παιδιών}, {πέντε ανθρώπων}. If the sentence is using the noun as subject or object, the numeral agrees normally: {δύο φίλοι έρχονται}, "two friends are coming".

## The numeral governs the case, and the case governs the noun

There are two constructions and they do not mix. With the numeral in the nominative, the noun goes nominative and agrees in gender: {δύο φίλοι}, {δύο φίλες}, {δύο φίλα}. With the numeral in any other case, the noun goes genitive: {δύο φίλων}, {τρεις φίλους}, "of two friends", and the gender of the noun disappears.

That is the difference between saying "two friends have arrived" and "two friends arrived, one after another". English keeps the same noun in both; Greek has {φίλοι} in one and {φίλων} in the other, and the gender information is gone in the second.

## Numeral or noun-numeral

A numeral can turn into a noun and take a gender: {ο πρώτος}, "the first", {η πρώτη}, "the first one". And it can be promoted to a pronoun: {ένας από εσάς}, "one of you". That is how Greek says "a second", "a little", "a bit": {μια ώρα}, {ένα κομμάτι}.

With the abstract numeral comes the genitive of what is counted: {ένα κομμάτι ψωμί}, {δύο φέρτα}.

## Where the numeral counts in Scripture

> Καὶ εἶπεν αὐτοῖς· Δοτε αὐτῷ φαγεῖν.

The Greek of Mark 6 has Jesus tell the disciples to multiply the loaves for {τέσσαρες χιλιάδας}. The numeral {τέσσαρες} is the masculine form and {χιλιάδας} is genitive, because what is being counted is the people, not the thousands.

Anyone who reads {τρεῖς} or {τέσσαρες} in isolation and does not notice that the noun after it is genitive translates the number and loses the relation.`),
  vocab: [
    V('ένας', 'ένας', 'one (masculine)'),
    V('μία', 'μία', 'one (feminine)'),
    V('ένα', 'ένα', 'one (neuter)'),
    V('δύο', 'δύο', 'two'),
    V('τρεις', 'τρεις', 'three'),
    V('τρία', 'τρία', 'three (neuter)'),
    V('τριών', 'τρεις', 'of three (genitive)'),
    V('τέσσαρις', 'τέσσαρις', 'four'),
    V('πέντε', 'πέντε', 'five'),
    V('δέκα', 'δέκα', 'ten'),
    V('δύο ανθρώπων', 'δύο', 'of two people'),
    V('τρεις ανθρώπων', 'τρεις', 'of three people'),
    V('ανθρώπων', 'άνθρωπος', 'of people'),
    V('δύο φίλοι', 'φίλος', 'two friends'),
    V('δύο φίλων', 'φίλος', 'of two friends'),
    V('ο φίλος', 'φίλος', 'the friend'),
  ],
  rules: [
    {
      n: '§1',
      text: T('Cardinals are irregular only in one, two and three; above ten they do not inflect.'),
    },
    { n: '§2', text: T('After a numeral the noun goes genitive: δύο ανθρώπων, "of two people".') },
    {
      n: '§3',
      text: T(
        'The noun agrees with the numeral only when the numeral is nominative; in the other cases it goes genitive.',
      ),
    },
    { n: '§4', text: T('One has three forms by gender: ένας, μία, ένα.') },
  ],
  notes: [
    {
      label: T('Etymology'),
      text: T(
        'The genitive construction is inherited from an ancient Greek partitive that already worked on its own: τρεῖς, "three", with no noun at all. When the name came into the count, it came in the case the count demanded.',
      ),
    },
    {
      label: T('English'),
      text: T(
        'The construction has no literal translation. For "five years", Greek writes πέντε χρόνια or, if it counts strictly, πέντε ετών. The second looks stranger and is the one Greek prefers when the number matters.',
      ),
    },
  ],
  examples: [
    { text: 'δύο άνθρωποι έρχονται', gloss: T('two people come') },
    { text: 'δύο ανθρώπων έρχονται', gloss: T('two people come') },
    { text: 'τρεις φίλοι έρχονται', gloss: T('three friends come') },
    { text: 'τρεις παιδιών παίζουν', gloss: T('three children play') },
    { text: 'πέντε χρόνια', gloss: T('five years') },
    { text: 'μία ώρα δουλειάς', gloss: T('an hour of work') },
    { text: 'δύο φίλοι', gloss: T('two friends') },
    { text: 'δύο φίλων', gloss: T('of two friends') },
  ],
  tables: [
    {
      caption: T('The first cardinals'),
      head: ['Αριθμός', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['ένα', 'ένας', 'μία', 'ένα'],
        ['δύο', 'δύο', 'δύο', 'δύο'],
        ['τρία', 'τρεις', 'τρεις', 'τρία'],
        ['τέσσαρα', 'τέσσαρις', 'τέσσαρις', 'τέσσαρα'],
        ['πέντε', 'πέντε', 'πέντε', 'πέντε'],
      ],
    },
    {
      caption: T('Substantivised numeral or not'),
      head: ['Κλίση αριθμητικού', 'Μορφή', 'Παράδειγμα'],
      rows: [
        ['οριστική', 'το ουσιαστικό συμφωνεί', 'δύο φίλοι'],
        ['γενική', 'ουσιαστικό σε -ων', 'δύο φίλων'],
        ['αἰτιατική', 'ουσιαστικό σε -ους', 'δύο φίλους'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How do you say "two people come", counting strictly?'),
    options: [
      T('δύο άνθρωποι έρχονται'),
      T('δύο ανθρώπων έρχονται'),
      T('δύο του ανθρώπου'),
      T('δυο ανθρώπων έρχονται'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('τρεις ___ (of three people)'),
      answer: 'ανθρώπων',
      hint: T('Plural genitive'),
    },
    {
      kind: 'choose',
      prompt: T('What is the genitive of "τρεις"?'),
      options: [T('τριών'), T('τρεις'), T('τρία'), T('τριώς')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Number and value'),
      pairs: [
        { a: 'δύο', b: T('two') },
        { a: 'τρεις', b: T('three') },
        { a: 'τέσσαρις', b: T('four') },
        { a: 'πέντε', b: T('five') },
      ],
      answer: ['a1', 'a2', 'a3', 'a4'],
    },
    {
      kind: 'fill',
      prompt: T('___ φίλοι έρχονται (numeral, two)'),
      answer: 'Δύο',
      hint: T('Capital letter'),
    },
  ],
};
