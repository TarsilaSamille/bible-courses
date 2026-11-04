import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  section: T('Syntax'),
  title: T('Word order is free'),
  subtitle: T('Το σπίτι είναι μικρό — Μικρό είναι το σπίτι'),
  body: C(`## Almost everything can move

A Greek sentence has no fixed order. {Το σπίτι είναι μικρό}, {Μικρό είναι το σπίτι}, {Είναι το σπίτι μικρό} are the same sentence and three true sentences, because the order tells the hearer what the topic is.

English has two orders and a half. Greek has as many as you like, and the information sits in which piece was put in front. A translator who puts the subject first, as English requires, makes Greek say the opposite of what it said.

The rule is one of reading, not of writing: **the first element of a Greek sentence is the focus**. {Μικρό είναι το σπίτι} does not report that the house is small; it reports that the house is the topic and the size is the new information.

## What cannot move

Two things stay where they are. The negative goes before the verb, always: {δεν έρχεται} and not {έρχεται δεν}. And the article stays glued to the noun it determines: {το σπίτι}, never {σπίτι το}.

The verb also has a stable place in the middle. In Greek the finite verb comes after the subject, but not first as in English. {Εγώ γράφω} and not {Γράφω εγώ}. What can take first place is the adverb, the object or the negative.

The working rule is: keep the verb where it is and move everything else.

## Where the order changes the sense

The two cases where the translation really changes are time and negation. {Δεν έγραψα το βιβλίο} and {Το βιβλίο δεν έγραψα} want to say the same thing in English. In Greek the second makes the book the topic and says that the problem is the book, not the writing.

With an adverb it is the same: {Σήμερα έρχομαι}, "I am coming today", and {Έρχομαι σήμερα}, which is neutral. If the adverb opens the sentence it is the focus: {Σήμερα πάμε}, "today is when we go".

And {δέ} does the same work as "but": {Έγραψα, δεν έφαγα}, "I wrote, I did not eat". The second item in the list stands out because it comes right after the conjunction.

## Ancient Greek has a fixed slot

This has to be said, because anyone translating the New Testament runs into it. Ancient Greek organises the clause in two positions: the verb takes the second, and everything before it is the theme.

{Καὶ ἐποίησεν ἄρτον καὶ ἐπέδωκεν αὐτῷ} means the verb {ἐποίησεν} is in second position. Anyone who understands modern Greek and reads ancient Greek will look for the verb before the object, and the text will look out of order.

The difference is real and it has a consequence: in ancient Greek the order carries information about the theme, and in modern Greek the order carries information about the focus. The question changes question.

## Where the order is in Scripture

> Καὶ λέγει αὐτῷ ὁ Ἰησοῦς· Τί σὲ λέγεις ἀσθενεῖν; ἀνάστηθι, ἆρον τὸν κράβαττόν σου καὶ περιπάτει.

{λέγει αὐτῷ} has the verb in second place and {αὐτῷ} in third: the whole clause divides into two blocks, verb and pronoun. In modern Greek the same sentence would be {ο Ιησούς του λέει}, and the difference is not one of form, it is one of order.

The imperatives that follow, {ἀνάστηθι}, {ἆρον}, {περιπάτει}, are the answer: three verbs, no subject, three actions. The subject disappears in ancient Greek just as it does in modern Greek, and the sentence is a run of orders.`),
  vocab: [
    V('το σπίτι', 'το σπίτι', 'the house'),
    V('είναι', 'είμαι', 'is'),
    V('μικρό', 'μικρός', 'small'),
    V('γράφω', 'γράφω', 'I write'),
    V('έγω', 'εγώ', 'I'),
    V('δεν', 'δεν', 'not'),
    V('έρχεται', 'έρχομαι', 'comes'),
    V('σήμερα', 'σήμερα', 'today'),
    V('έρχομαι', 'έρχομαι', 'I come'),
    V('πάμε', 'πηγαίνω', 'we go'),
    V('τὸ βιβλίο', 'τὸ βιβλίο', 'the book'),
    V('λέγει', 'λέγω', 'says'),
    V('ἀνάστηθι', 'ἀνίσταμαι', 'get up'),
    V('περιπάτει', 'περιπατέω', 'walk'),
  ],
  rules: [
    {
      n: '§1',
      text: T('Modern Greek word order is free: what moves is the focus, not the sense.'),
    },
    { n: '§2', text: T('The first element of the sentence is the focus.') },
    {
      n: '§3',
      text: T('The negative never crosses the verb, and the article never leaves the noun.'),
    },
    {
      n: '§4',
      text: T(
        'Ancient Greek puts the verb in second position; modern Greek keeps the verb in the middle.',
      ),
    },
  ],
  notes: [
    {
      label: T('Hard to see'),
      text: T(
        'The free order is only visible when the sentence has two pieces of equal weight. With subject, verb and object the difference is small, which is why the phenomenon goes unnoticed in the first sentences anyone reads.',
      ),
    },
    {
      label: T('Translation'),
      text: T(
        'When ancient Greek puts the verb in second position, a translation into English almost always puts the subject first, and the result is a sentence about the person instead of a sentence about the fact. Changing the order is changing the topic.',
      ),
    },
  ],
  examples: [
    { text: 'το σπίτι είναι μικρό', gloss: T('the house is small') },
    { text: 'μικρό είναι το σπίτι', gloss: T('small is the house') },
    { text: 'είναι το σπίτι μικρό', gloss: T('is the house small') },
    { text: 'δεν έρχεται σήμερα', gloss: T('he is not coming today') },
    { text: 'σήμερα δεν έρχεται', gloss: T('today is when he is not coming') },
    { text: 'το βιβλίο δεν έγραψα', gloss: T('the book is what I did not write') },
    { text: 'εγώ γράφω το βιβλίο', gloss: T('I write the book') },
    { text: 'γράφω το βιβλίο', gloss: T('I write the book') },
  ],
  tables: [
    {
      caption: T('One sentence, three focuses'),
      head: ['Τάξη', 'Έμφαση', 'Παράδειγμα'],
      rows: [
        ['σπίτι', 'το σπίτι', 'το σπίτι είναι μικρό'],
        ['μικρό', 'το μέγεθος', 'μικρό είναι το σπίτι'],
        ['είναι', 'η κατάφαση', 'είναι το σπίτι μικρό'],
      ],
    },
    {
      caption: T('What cannot move'),
      head: ['Στοιχείο', 'Περιορισμός'],
      rows: [
        ['η άρνηση', 'πριν το ρήμα'],
        ['το άρθρο', 'κολλημένο στο ουσιαστικό'],
        ['ρήμα', 'μετά το υποκείμενο'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In "μικρό είναι το σπίτι", what is in focus?'),
    options: [T('the house'), T('the size'), T('the verb'), T('the possessor')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ έρχεται (negative, fixed position)'),
      answer: 'Δεν',
      hint: T('Capital letter'),
    },
    {
      kind: 'choose',
      prompt: T('Where does ancient Greek put the finite verb?'),
      options: [T('first'), T('second'), T('last'), T('before the subject')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Position and function'),
      pairs: [
        { a: 'primeiro elemento', b: T('focus') },
        { a: 'negação', b: T('before the verb') },
        { a: 'artigo', b: T('glued to the noun') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
    {
      kind: 'fill',
      prompt: T('το βιβλίο ___ έγραψα (negative, the book is the topic)'),
      answer: 'δεν',
      hint: T('The negative comes after the focus'),
    },
  ],
};
