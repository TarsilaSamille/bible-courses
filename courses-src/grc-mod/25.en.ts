import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  section: T('The verb'),
  title: T('Three tenses and two pasts'),
  subtitle: T('γράφω — έγραψα — έχω γράψει — θα γράψω'),
  body: C(`## Three times, three words

Modern Greek has three tenses and three distinct constructions. The present is {γράφω}, the past is {έγραψα} and the future is {θα γράψω}. Nothing resembles anything, and that is why Greek learns verbs by list rather than by conjugation.

The future is the easiest of the three, because it is not a tense: it is a particle, {θα}, stuck to the subjunctive. The {θα} marks the time, and {γράψω} is the same form that appears after {θέλω να}. A speaker who learns {γράψω} learns two things at once.

The past is what confuses. {έγραψα} is the Greek aorist, the form that survived from ancient Greek almost unchanged. It is the past of the event: I wrote, and it is over.

## The aorist was retired in favour of the compound perfect

Ancient Greek had a tense that the aorist displaced: the perfect, which said "I did it and the result holds". In modern Greek that tense was moved into a phrase: {έχω} plus the participle. {έχω γράψει} is "I have written", and the original force of the perfect is preserved word for word.

The phrase is easier than any inflected tense, because the inflection is all in the {έχω}: {έχω}, {έχεις}, {έχει}, {έχουμε}, {έχετε}, {έχουν}. The rest is the participle, and the participle does not inflect.

## "I wrote" has two forms and two senses

This is the point that settles half the reading difficulties. {έγραψα} says that a writing happened, and says only that. {έχω γράψει} says that a writing happened and that the result still holds.

In English the two are both "I wrote", and the distinction is lost. {Έχω γράψει το βιβλίο} means "the book is written", with the result in the foreground. {Έγραψα το βιβλίο} means "I wrote the book", with the act in the foreground.

The question that decides is: what matters now, what happened or what is left over? If the state matters, use {έχω} plus the participle. If the event matters, use the aorist.

## The future is ambiguous too

{θα γράψω} is future and possibility at the same time, and both readings are the same form. {Θα έρθει} can be "he will come" or "he may come". The context decides, and the context decides in English too.

There is a third reading, rarer: {θα έχω γράψει}, "I will have written". That is the future of the perfect, and it turns up when the result is what is at stake.

## Verb tense in Scripture

> Ἐγὼ δὲ ἔγραψα ὑμῖν τὸ μυστήριον τοῦ θεοῦ.

{ἔγραψα} is the aorist: I wrote, and the text is not interested in saying that the letter is still going. It is the choice Greek makes when the event is enough. A letter that said "I have written" would be talking about you, not about the letter.

That is the difference ancient Greek has and modern Greek does not: in ancient Greek aorist and perfect are distinct categories and the translator has to choose. In modern Greek the perfect is a phrase, and the choice is between {έγραψα} and {έχω γράψει}, which is the same choice in different words.`),
  vocab: [
    V('γράφω', 'γράφω', 'I write'),
    V('έγραψα', 'γράφω', 'I wrote'),
    V('έχω γράψει', 'γράφω', 'I have written'),
    V('θα γράψω', 'γράφω', 'I will write'),
    V('γράψω', 'γράφω', 'to write (subjunctive)'),
    V('έχω', 'έχω', 'I have'),
    V('έχει', 'έχω', 'he has'),
    V('θα έρθει', 'έρχομαι', 'he will come'),
    V('το βιβλίο', 'το βιβλίο', 'the book'),
    V('γράφτηκε', 'γράφω', 'was written'),
    V('θα έχω γράψει', 'γράφω', 'I will have written'),
    V('θέλω να', 'θέλω', 'I want to'),
    V('το μυστήριο', 'το μυστήριο', 'the mystery'),
    V('ο Θεός', 'ο Θεός', 'God'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'The three tenses are three constructions: γράφω (present), έγραψα (past), θα γράψω (future).',
      ),
    },
    {
      n: '§2',
      text: T('θα γράψω is a particle plus a subjunctive, not a verbal form of its own.'),
    },
    {
      n: '§3',
      text: T('The perfect is έχω plus participle, and the inflection is all in the έχω.'),
    },
    {
      n: '§4',
      text: T('έγραψα says the event; έχω γράψει says the event and the result that still holds.'),
    },
    { n: '§5', text: T('θα can be future or possibility, and the context chooses.') },
  ],
  notes: [
    {
      label: T('Inheritance'),
      text: T(
        'The modern Greek future is the ancient Greek future without its s: λύσω gave γράψω. Greek kept the form, lost the inflection and gained the particle θα.',
      ),
    },
    {
      label: T('Reading'),
      text: T(
        'When you translate a perfect, ask whether the text is talking about the act or about the state. In John 3, "it is written" and "he wrote" are different words in Greek, and the translator\'s choice changes the meaning of the sentence.',
      ),
    },
  ],
  examples: [
    { text: 'γράφω το βιβλίο', gloss: T('I write the book') },
    { text: 'έγραψα το βιβλίο', gloss: T('I wrote the book') },
    { text: 'έχω γράψει το βιβλίο', gloss: T('I have written the book') },
    { text: 'θα γράψω το βιβλίο', gloss: T('I will write the book') },
    { text: 'θα έχω γράψει', gloss: T('I will have written') },
    { text: 'το βιβλίο γράφτηκε', gloss: T('the book was written') },
    { text: 'θα έρθει αύριο', gloss: T('he will come tomorrow') },
    { text: 'θέλω να γράψω', gloss: T('I want to write') },
  ],
  tables: [
    {
      caption: T('The three tenses'),
      head: ['Χρόνος', 'Μορφή', 'Κατασκευή'],
      rows: [
        ['ενεστώτας', 'γράφω', 'ρήμα ενεστώτα'],
        ['αόριστος', 'έγραψα', 'αόριστος'],
        ['μέλλοντας', 'θα γράψω', 'θα + υποτακτική'],
        ['μέλλοντας αποτελέσματος', 'θα έχω γράψει', 'θα + έχω + μετοχή'],
      ],
    },
    {
      caption: T('Two pasts'),
      head: ['Μορφή', 'Ερώτηση', 'Απάντηση'],
      rows: [
        ['έγραψα', 'τι έγινε;', 'η πράξη'],
        ['έχω γράψει', 'τι έμεινε;', 'η κατάσταση'],
      ],
    },
    {
      caption: T('The auxiliary of the perfect'),
      head: ['Πρόσωπο', 'έχω', 'Παράδειγμα'],
      rows: [
        ['εγώ', 'έχω', 'έχω γράψει'],
        ['εσύ', 'έχεις', 'έχεις γράψει'],
        ['αυτός', 'έχει', 'έχει γράψει'],
        ['εμείς', 'έχουμε', 'έχουμε γράψει'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which form means "I have written"?'),
    options: [T('γράφω'), T('έγραψα'), T('έχω γράψει'), T('θα γράψω')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ γράφω το βιβλίο (future)'),
      answer: 'Θα',
      hint: T('Capital letter'),
    },
    {
      kind: 'choose',
      prompt: T('In "θα έρθει", what can θα mean?'),
      options: [T('only future'), T('only possibility'), T('future or possibility'), T('negation')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Tense and form'),
      pairs: [
        { a: 'γράφω', b: T('present') },
        { a: 'έγραψα', b: T('past event') },
        { a: 'έχω γράψει', b: T('past state') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
    {
      kind: 'fill',
      prompt: T('έχω ___ (participle of γράφω, "written")'),
      answer: 'γράψει',
      hint: T('Unstressed: it is a participle'),
    },
  ],
};
