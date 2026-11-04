import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  section: T('The verb: tense, mood and negation'),
  title: T('Negation: the no that comes before everything'),
  subtitle: T('не, ни and nothing: three ways of denying and one single position'),
  body: C(`
## The marker goes first

Russian negation is not an adverb that sticks to the verb. It is a particle that takes the first slot of the clause, and that is the information it carries: **negation is what comes first, and what comes first is what is in focus.**

Он не читал книгу denies the act. Не он читал книгу denies that it was he, and the whole difference sits in the position of the не, which has moved up to the head of the clause. Не книгу он читал denies that it was that book. The negation is a frame, and whatever it surrounds is what is being denied.

English negation also precedes the verb, but it cannot climb all the way to the subject without becoming a different construction. Not he read the book is ungrammatical in English and grammatical in Russian. That is why the position of the не is information and not a detail: it says what the clause is denying.

## Не and ни, and the difference between them

Не denies a single predicate. Ни denies a member of a group. Не я, а он: not I, but he. Ни он, ни я: neither he nor I. In the first sentence there is one thing denied and a replacement; in the second there are two things denied and no replacement.

The other use of ни is the most useful for reading: **ни comes after a negative word in order to add a second one.**
Не я говорил, а он and Ни он, ни я не говорил. The negation is in the не, and the ни only marks the addition. A translator who puts ни where the original has не is strengthening the negation without need, and the sentence ends up harder than it was.

And there is a second family that looks as if it denies nothing at all. Никто не видел Бога. The никто is the subject, and the не is in the verb, as always. The negation lives in никто, and the не is the mark that this particular thing was not seen. **Nobody is a positive word**: in Latin and in Portuguese, nemo and ninguém are ordinary pronouns, and translating them as a negative loses the mechanism.

## What Russian does not do

Нет and не are not synonyms, and the difference is one of category and not of intensity. Нет denies existence and asks for the genitive: нет хлеба, there is no bread. Не denies a predicate and does not change case: хлеба нет is the same as нет хлеба, with the negation moved to the end. **The negation can move to the end of the clause when the clause is nominal**, and there it appears without не.

It is the most productive difference between Portuguese and Russian for anyone translating Greek. Οὐκ ἔστιν and ἐστιν οὐκ are the same sentence with the negation in two places, and ancient Greek does exactly the same thing. A translator who writes нет where the Greek has οὐκ is choosing between denying being and denying having.

## The hook: two negations in one verse

**Все чрез Него начало быть, и без Него ничто не начало быть, что начало быть.** The verse has three negations in ten words, and they do not do the same thing.

Без Него is the negation of means: without him. There is no particle, and the case is instrumental, with the preposition без in front of the genitive. Ничто не начало быть is the double negation: the subject is ничто, an ordinary pronoun meaning nothing, and the не denies the verb. **The negation is not doubled: it is divided.** The subject denies one side and the verb denies the other.

And the third part is the most beautiful thing in the verse: что начало быть, which repeats exactly the word that was denied. Ничто не начало быть, что начало быть means nothing came to be that came to be, and the repetition is what turns the double negation into an affirmation. A translator who writes "and nothing was created" has cut the second half and lost the verse.
`),
  vocab: [
    V('не', 'не', 'not; negation particle'),
    V('ни', 'ни', 'neither; particle that adds under a negation'),
    V('Нет', 'нет', 'there is not; denies existence and takes the genitive'),
    V('никто', 'никто', 'nobody; an ordinary pronoun'),
    V('ничто', 'ничто', 'nothing; an ordinary pronoun'),
    V('Не я, а он', 'не', 'not I, but he; negation with replacement'),
    V('Ни он, ни я', 'ни', 'neither he nor I; negation of a group'),
    V('без Него', 'без', 'without him; instrumental by preposition'),
    V('Никто не видел Бога', 'видеть', 'nobody saw God'),
    V('оно', 'оно', 'it; the neuter pronoun'),
    V('начало быть', 'начать', 'began to be; a compound verb'),
    V('есть', 'быть', 'is; no aspect'),
    V('отрицание', 'отрицание', 'negation'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In Не он читал книгу, what is the не denying?'),
    options: [T('The verb to read'), T('The subject he'), T('The book')],
    answer: 1,
    hint: T(
      'The negation takes the first slot of the clause, and whatever it surrounds is what is in focus. Here it has climbed up to the subject.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: нет ___ (there is no bread)'), answer: 'хлеба' },
    {
      kind: 'choose',
      prompt: T('Which word denies existence?'),
      options: [T('не'), T('нет'), T('ни')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Complete: ___ не начало быть (nothing came to be)'),
      answer: 'Ничто',
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{Не} takes the first slot of the clause, and whatever it surrounds is what is in focus.',
      ),
    },
    {
      n: '2',
      text: T(
        '{Не} denies a predicate; {ни} denies a member of a group and adds under an earlier negation.',
      ),
    },
    { n: '3', text: T('{Нет} denies existence and takes the genitive: {нет хлеба}.') },
    {
      n: '4',
      text: T(
        '{Никто} and {ничто} are ordinary pronouns: what denies the action is the {не} that comes with them.',
      ),
    },
    {
      n: '5',
      text: T(
        'When the clause is nominal the negation can go last and appears without {не}: {хлеба} {нет}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Nothing is an ordinary word'),
      text: T(
        "Ничто and никто are not negative pronouns. They are ordinary pronouns, with case and number, and what denies the action is the не that comes with them. In Greek the οὐκ of John's verses works the same way: it denies, and οὐδείς and οὐθέν limit the subject. Translating with a negative Portuguese word keeps the sense and dismantles the structure, and anyone who wants to read the Greek needs to see the structure.",
      ),
    },
    {
      label: T("Nominal negation and the translator's choice"),
      text: T(
        'Хлеба нет and нет хлеба are the same sentence, and the position of the negation changes what is in focus. In the first the focus is the bread; in the second it is the absence. With a verb the position of the не is fixed and the translation has no choice; with a noun the choice comes back. It is the same phenomenon as in ancient Greek, and that is why Russian translations of John diverge so much on the first line.',
      ),
    },
  ],
  examples: [
    {
      text: 'Он не читал книгу',
      gloss: T('he did not read the book; the negation denies the act'),
    },
    {
      text: 'Не он читал книгу',
      gloss: T('it was not he who read it; the negation denies the subject'),
    },
    { text: 'Не я, а он', gloss: T('not I, but he; negation with replacement') },
    { text: 'ни он, ни я', gloss: T('neither he nor I; negation of a group') },
    { text: 'нет хлеба', gloss: T('there is no bread; нет takes the genitive') },
    { text: 'хлеба нет', gloss: T('bread there is not; the negation moves last') },
    { text: 'никто не видел Бога', gloss: T('nobody saw God; what denies is the не') },
    { text: 'ничто не начало быть', gloss: T('nothing came to be; subject and verb deny') },
    {
      text: 'без Него ничто не начало быть',
      gloss: T('without him nothing came to be; three negations'),
    },
    { text: 'что начало быть', gloss: T('that came to be; the denied word, repeated') },
  ],
  tables: [
    {
      caption: T('The three denying words, and what each denies'),
      head: [T('Word'), T('Class'), T('What it denies'), T('Example')],
      rows: [
        [T('не'), T('particle'), T('a predicate'), T('Он не читал')],
        [
          T('ни'),
          T('particle'),
          T('a member of a group, and it adds under a negation'),
          T('ни он, ни я'),
        ],
        [T('нет'), T('verb'), T('existence'), T('нет хлеба')],
      ],
    },
    {
      caption: T('The family of negative pronouns'),
      head: [T('Ordinary'), T('With не'), T('What it limits'), T('Case')],
      rows: [
        [T('кто'), T('никто не'), T('the person'), T('genitive with не знает')],
        [
          T('что'),
          T('ничто не'),
          T('the thing'),
          T('genitive or nominative, according to the verb'),
        ],
        [T('где'), T('нигде не'), T('the place'), T('prepositional')],
        [T('когда'), T('никогда не'), T('the time'), T('adverbial')],
      ],
    },
    {
      caption: T('Verbal negation and nominal negation'),
      head: [T('Type'), T('Where it goes'), T('Example'), T('What is rendered')],
      rows: [
        [T('with a verb'), T('before the verb'), T('Он не читал книгу'), T('did not read')],
        [T('with a noun, neutral order'), T('before the noun'), T('нет хлеба'), T('there is no')],
        [
          T('with a noun, focus on the noun'),
          T('at the end of the clause'),
          T('хлеба нет'),
          T('there is no'),
        ],
        [
          T('with a verb, focus on the subject'),
          T('before the subject'),
          T('Не он читал'),
          T('it was not he who'),
        ],
      ],
    },
  ],
};
