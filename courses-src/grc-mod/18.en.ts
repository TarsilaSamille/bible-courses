import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  section: T('Article'),
  title: T('Definite, indefinite and the article that has no plural'),
  subtitle: T('ο άνθρωπος — ένας άνθρωπος — κανείς'),
  body: C(`## The definite article is required when the referent is one

Modern Greek almost always writes the definite article. {ο άνθρωπος} is "the man" because we already know which man. When the referent is not an individual or an identifiable group but the whole species, Greek drops the article: {άνθρωπος είναι θνητός}, "human beings are mortal". With the article, the same sentence becomes {ο άνθρωπος είναι θνητός}, and now it is one person, someone in particular.

The test is the English one: if the article is obligatory in English, it is obligatory in Greek too. Where English drops it, Greek may drop it as well, and that is where the other article appears.

## The indefinite has three genders and only one direction

The indefinite article has one form per gender: {ένας} in the masculine, {μία} in the feminine, {ένα} in the neuter. In the direct case all three work: {ένας άνθρωπος}, {μια γυναίκα}, {ένα παιδί}. What changes is the case, and the change is minimal.

In the accusative, which is the case of almost everything in an ordinary sentence, the masculine gains a {ν}: {έναν}. In the genitive the feminine gains an {ς}: {μίας}. The neuter does not change: {ένα} in every case, because {ένο} would have been the old form and nobody uses it.

The accent of {μία} and {ένα} is unstressed in ordinary writing: {μια γυναίκα}, {ένα παιδί}. It only becomes stressed again before an enclitic: {μία μου}, {ένας μου}.

## There is no indefinite in the plural

Here is what unsettles anyone coming from Latin: {ένας} does not inflect into the plural. There is no "ένανοι". In the plural the indefinite is the noun on its own: {άνθρωποι}, {γυναίκες}, {παιδιά}, with no article of any kind.

The immediate translation is "some men" or "men", and Greek hands you both without choosing. Where you need the distinction, use {μερικοί}: {μερικοί άνθρωποι}, "some people". The opposite is {πολλοί άνθρωποι}. Everything English distinguishes with "a", "some" and "many" sits between the bare plural and {μερικοί}.

## The negative of the indefinite

The negative of the indefinite is {κανείς}, {καμία}, {κανένα}, and it is the commonest way to say "nobody" in a sentence: {δεν έρχεται κανείς}, "nobody is coming". With {ν} doubled in the oblique cases: {κανενός}, {καμίας}, {κανενός}, exactly as with adjectives.

And this is where Greek shows what inflection does for meaning: {κανένας}, one {ς} fewer, is the unmarked form, the one that appears after a preposition and the only one speakers use with any frequency.

## Where Scripture uses ἕνας

> Οὕτως καὶ ἡμεῖς πάντες ἓν σῶμά ἐσμεν ἐν Χριστῷ, καθὼς καὶ οἱ πάντες εἰς ἓν ἐβαπτίσθημεν εἰς ἓν σῶμα.

{ἓν} appears three times in the same verse, and three times without {ς} and without gender. Greek says "we are all one body" without repeating the article and without picking a gender, because {ἕνας} would be false there. The form that shows up is {ἓν}, without {ς} and without gender, and it is the one modern Greek keeps intact as a numeral and as a pronoun.`),
  vocab: [
    V('ο άνθρωπος', 'ο άνθρωπος', 'the man, the person'),
    V('ένας άνθρωπος', 'ένας', 'a man'),
    V('ένας', 'ένας', 'one (masculine)'),
    V('μια', 'μία', 'one (feminine)'),
    V('ένα', 'ένα', 'one (neuter)'),
    V('έναν', 'ένας', 'one (masculine accusative)'),
    V('μίας', 'μία', 'of one (genitive)'),
    V('ενός', 'ένας', 'of one (genitive)'),
    V('κανείς', 'κανείς', 'nobody'),
    V('καμία', 'κανείς', 'no (feminine)'),
    V('κανένα', 'κανείς', 'none (neuter)'),
    V('κανενός', 'κανείς', 'of none (genitive)'),
    V('μερικοί', 'μερικοί', 'some'),
    V('πολλοί άνθρωποι', 'πολλοί', 'many people'),
    V('οι άνθρωποι', 'άνθρωπος', 'the people'),
    V('τα παιδιά', 'το παιδί', 'the children'),
  ],
  rules: [
    {
      n: '§1',
      text: T('The definite article is required when the referent is already settled: ο άνθρωπος.'),
    },
    {
      n: '§2',
      text: T(
        'The indefinite has one form per gender and does not exist in the plural: ένας, μία, ένα; in the plural, the bare noun.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The masculine gains ν in the accusative (έναν) and the feminine gains ς in the genitive (μίας).',
      ),
    },
    {
      n: '§4',
      text: T(
        'The negative of the indefinite is κανείς, καμία, κανένα, with ν doubled in the oblique: κανενός.',
      ),
    },
  ],
  notes: [
    {
      label: T('Accent'),
      text: T(
        'μία and ένα lose their accent in ordinary writing and only get it back before an enclitic: μία μου. The stressed form is the exception, not the rule.',
      ),
    },
    {
      label: T('Koine'),
      text: T(
        'In the Bible ἕνας is almost never an article: it is the substantivised numeral, "one". Whether you translate ἕνας as "one" or as "a certain" depends on what follows, not on what the word means by itself.',
      ),
    },
  ],
  examples: [
    { text: 'ένας άνθρωπος έρχεται', gloss: T('a man comes') },
    { text: 'μια γυναίκα μένει εδώ', gloss: T('a woman lives here') },
    { text: 'ένα παιδί παίζει', gloss: T('a child plays') },
    { text: 'τον βλέπω κάθε μέρα', gloss: T('I see a man every day') },
    { text: 'μίας μητέρας λόγος', gloss: T("a mother's word") },
    { text: 'κανείς δεν ήρθε', gloss: T('nobody came') },
    { text: 'κανένας λόγος', gloss: T('no word') },
    { text: 'μερικοί άνθρωποι έρχονται', gloss: T('some people come') },
  ],
  tables: [
    {
      caption: T('The indefinite in all its cases'),
      head: ['Κλίση', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['οριστική', 'ένας', 'μία', 'ένα'],
        ['γενική', 'ενός', 'μίας', 'ενός'],
        ['αἰτιατική', 'έναν', 'μία', 'ένα'],
        ['ἀρνητική', 'κανείς', 'καμία', 'κανένα'],
      ],
    },
    {
      caption: T('Definite, indefinite and plural'),
      head: ['Τύπος', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['οριστικό άρθρο', 'ο άνθρωπος', 'η γυναίκα', 'το παιδί'],
        ['αόριστο άρθρο', 'ένας άνθρωπος', 'μια γυναίκα', 'ένα παιδί'],
        ['πληθυντικός', 'οι άνθρωποι', 'οι γυναίκες', 'τα παιδιά'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How do you say "no child"?'),
    options: [T('κανένα παιδί'), T('κανένας παιδί'), T('κανείς παιδί'), T('μία παιδί')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ γυναίκα μένει εδώ (feminine indefinite)'),
      answer: 'μια',
      hint: T('μία without the accent'),
    },
    {
      kind: 'choose',
      prompt: T('What is the indefinite form in the plural?'),
      options: [T('ένανοι'), T('οι άνθρωποι'), T('ένας άνθρωποι'), T('κανείς άνθρωποι')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Gender of the indefinite'),
      pairs: [
        { a: 'ένας', b: T('masculine') },
        { a: 'μια', b: T('feminine') },
        { a: 'ένα', b: T('neuter') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
    {
      kind: 'fill',
      prompt: T('βλέπω ___ ανθρώπους (there is no plural indefinite: write the noun)'),
      answer: 'ανθρώπους',
      hint: T('In the plural the indefinite is the noun itself'),
    },
  ],
};
