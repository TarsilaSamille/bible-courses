import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  section: T('The verb'),
  title: T('Where the negation sits in each tense'),
  subtitle: T('δεν έγραψα — δεν έχω γράψει — δεν θα γράψω'),
  body: C(`## The negation goes inside the tense, not before it

In English the negative is a fixed word that goes before the verb: "I do not write", "I did not write", "I will not write". In Greek too, and so it looks the same. The difference is in what happens to the verb.

In the present and the aorist, {δεν} goes straight before the verb: {δεν γράφω}, {δεν έγραψα}. In the future, {δεν} goes before {θα}, and {θα} stays with the verb: {δεν θα γράψω}. In the perfect, {δεν} moves into the place of the auxiliary.

The pattern is the same in all three, and it is this: **the negative takes the leftmost position the verb phrase leaves free**. In {δεν θα γράψω}, the {δεν} is not before {γράψω}, it is before {θα}. And in {δεν έχω γράψει}, the {δεν} has stepped inside the phrase.

## In the future, δεν governs θα

The future is not a verb, it is a particle, and the particle is the first thing the sentence meets. So {δεν} goes before it: {δεν θα γράψω}.

A learner coming from English writes {θα δεν γράψω}, the order English suggests and nobody says. The rule is that whatever comes first in the phrase gets the negative, and in the future the phrase starts at {θα}.

Anyone who writes {δέν θα γράψω} with the accent is not wrong: {δέν} is the emphatic form and the commonest in speech. The accent changes the tone, not the grammar.

## In the perfect, δεν takes the auxiliary's place

Here is the construction that looks impossible and is not. {έχω γράψει} is the perfect, and the negative form is {δεν έχω γράψει}. The {δεν} does not replace the {έχω}: it stays in front of it.

But there is another place, and it is the one English uses: {δεν έχω} is the ordinary form, and the whole phrase follows. {Δεν έχω γράψει} is the same as {οὐκ ἔχω γεγραμένον}, and ancient Greek also put the negative before the auxiliary.

What modern Greek did was merge the two things: since the {έχω} is the auxiliary of the present, {δεν έχω} is also the negation of the ordinary present. {Δεν έχω χρήματα}, "I have no money". The same pair does two jobs.

## Μην is what stays in the subjunctive

The negation of the indicative is {δεν}. The negation of the subjunctive is {μην}, and it comes after {να}: {να μην έρθει}, "that he may not come". No swapping the two is possible: {δεν να} and {μην θα} are sentences nobody says.

In the written register {δεν} has two spellings, {μην} and {μη}, according to the sound of the verb that follows. The choice is about pronunciation, not meaning, and in a text it is predictable from the context.

## Where the negation stands in Scripture

> Καὶ λέγει αὐτῷ ὁ Ἰησοῦς· Τί σὲ λέγεις ἀσθενεῖν; ἀνάστηθι, ἆρον τὸν κράβαττόν σου καὶ περιπάτει.

There are three different negatives in six verses. {μή} with {λέγεις}, which is the edge of the incredulous question. {Τί} with the verb understood, which is the question "why". And two negatives that are not, in fact, negatives.

What Greek does is put the negative on the verb it negates, and not on the clause. In {Ἄν τις θέλει}, the {ἂν} is the mark of the subjunctive and {οὐδείς} would be the negative of the noun. A sentence can carry two negatives of different kinds, and that is why position matters more than the word.
`),
  vocab: [
    V('δεν γράφω', 'γράφω', 'I do not write'),
    V('δεν έγραψα', 'γράφω', 'I did not write'),
    V('δεν έχω γράψει', 'γράφω', 'I have not written'),
    V('δεν θα γράψω', 'γράφω', 'I will not write'),
    V('θα δεν γράψω', 'γράφω', 'incorrect order'),
    V('δέν', 'δεν', 'not (emphatic)'),
    V('δεν έχω', 'έχω', 'I do not have'),
    V('να μην', 'να μην', 'that not'),
    V('μην', 'μην', 'not (written)'),
    V('μη', 'μη', 'not (before a vowel)'),
    V('θα', 'θα', 'will (future)'),
    V('γράφω', 'γράφω', 'I write'),
    V('έρθει', 'έρχομαι', 'may come'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'The negative goes before the verb in every tense, and whatever comes first in the phrase takes the δεν.',
      ),
    },
    { n: '§2', text: T('In the future δεν governs θα: δεν θα γράψω, never θα δεν γράψω.') },
    { n: '§3', text: T('In the perfect δεν stays before the auxiliary: δεν έχω γράψει.') },
    {
      n: '§4',
      text: T('The negative of the indicative is δεν and of the subjunctive is μην, after να.'),
    },
  ],
  notes: [
    {
      label: T('Position'),
      text: T(
        'Ancient Greek allowed the negative after the verb in two different positions. Modern Greek does not: the position is fixed and anterior. Translating from ancient into modern Greek means moving the word.',
      ),
    },
    {
      label: T('Order'),
      text: T(
        'The noun of a negative clause may or may not be there, depending on the sense: δεν έρχεται κανείς and κανείς δεν έρχεται want to say different things. The position of the subject is what informs.',
      ),
    },
  ],
  examples: [
    { text: 'δεν γράφω', gloss: T('I do not write') },
    { text: 'δεν έγραψα', gloss: T('I did not write') },
    { text: 'δεν έχω γράψει', gloss: T('I have not written') },
    { text: 'δεν θα γράψω', gloss: T('I will not write') },
    { text: 'θα δεν γράψω', gloss: T('an order nobody uses') },
    { text: 'δεν έχω χρήματα', gloss: T('I have no money') },
    { text: 'να μην έρθει', gloss: T('that he may not come') },
    { text: 'δεν έρχεται κανείς', gloss: T('nobody is coming') },
  ],
  tables: [
    {
      caption: T('The negative in each tense'),
      head: ['Χρόνος', 'Παράδειγμα'],
      rows: [
        ['ενεστώτας', 'δεν γράφω'],
        ['αόριστος', 'δεν έγραψα'],
        ['μέλλοντας', 'δεν θα γράψω'],
        ['πεπρωμένο', 'δεν έχω γράψει'],
      ],
    },
    {
      caption: T('Which negative'),
      head: ['Πλαίσιο', 'Άρνηση'],
      rows: [
        ['οριστική', 'δεν'],
        ['μέλλοντας', 'δεν θα'],
        ['υποτακτική', 'να μην'],
        ['απαγόρευση', 'μη'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which is the correct order for "I will not write"?'),
    options: [T('θα δεν γράψω'), T('δεν θα γράψω'), T('γράψω δεν θα'), T('δεν γράψω θα')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ θα γράψω (negative before the future)'),
      answer: 'Δεν',
      hint: T('Capital letter'),
    },
    {
      kind: 'choose',
      prompt: T('In "δεν έχω γράψει", where does the negative stand?'),
      options: [
        T('before the participle'),
        T('before the auxiliary'),
        T('after the verb'),
        T('at the end of the sentence'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Negative and tense'),
      pairs: [
        { a: 'δεν γράφω', b: T('present') },
        { a: 'δεν έγραψα', b: T('past') },
        { a: 'δεν θα γράψω', b: T('future') },
        { a: 'δεν έχω γράψει', b: T('perfect') },
      ],
      answer: ['a1', 'a2', 'a3', 'a4'],
    },
    {
      kind: 'fill',
      prompt: T('να ___ έρθει (subjunctive negation)'),
      answer: 'μην',
      hint: T('Three letters'),
    },
  ],
};
