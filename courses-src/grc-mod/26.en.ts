import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  section: T('The verb'),
  title: T('The moods: what Greek still chooses between'),
  subtitle: T('θέλω να — να μην — είθε'),
  body: C(`## Four moods, two alive

Modern Greek keeps four moods: indicative, subjunctive, imperative and a remnant of the optative. The indicative is the mood of what is asserted, and it is the default. The imperative is the mood of the order. The subjunctive is the mood of what is not a fact.

The optative has no form of its own. What is left of it are three fixed expressions, and it is the only mood a learner can ignore: {είθε}, "it is the custom", {χρειάζεται}, "it is necessary", {ἔδει}, "it was necessary". All three come from ancient Greek and sound archaic.

## The indicative is the default and needs no mark

The indicative has no particle. It is what shows up when the verb is talking about a fact: {Γράφω}, {Έγραψα}, {Έρχεται}. When Greek puts a particle in, {να} or {θα}, it is leaving the indicative out.

That means the presence of {να} is the signal, and the absence is the default. A Greek text is a run of indicatives with {να} scattered through it, which is why the mood is recognised by its mark and not by its ending.

## να is the one thing a learner needs

{να} introduces the clause that is not a fact: {θέλω να μιλήσω}, "I want to speak", {πρέπει να φύγω}, "I must leave". The verb that follows is the subjunctive, and the form is the same as the future without {θα}: {μιλήσω}, {φύγω}.

Two rules settle almost everything, and the second settles more than the first. First: {να} appears after a verb of will, of necessity and of possibility, and the list is short. Second, the verb after {να} is the aorist, even when the main verb is in the past: {θέλω να έρθει}, "I want him to come", and not {θέλω να έρχεται}.

The combination {να} plus {θα} does not exist. {Θα να έρθει} is wrong, and {να έρθει} is right. They are two markers for the same idea, and Greek picks one.

## να μην is the negation of the subjunctive

The negation of {να} is {να μην}, and the order is fixed: {να} first, {μην} after. {Δεν θέλω να μην έρθει}, "I do not want him to come". The key is to see that {μην} here is not the prohibitive: it is the negation of {να} itself, which is why it comes after {να} and not before the verb.

This is the construction that confuses learners most. Greek has two negatives with similar names: the one for the indicative, {δεν}, which comes before the verb, and the one for the subjunctive, {μην}, which comes after {να}. Anyone who writes {δεν θέλω μην να έρθει} has mixed the two and produced a sentence nobody says.

## When the subjunctive is only the future

After {όταν}, {αν}, {πριν}, {αφού} and {ενώ}, the Greek verb comes in what the reader recognises as the future, but which is the aorist: {Όταν έρθει}, "when he comes", {Πριν φύγει}, "before he goes". Modern Greek lost the distinction between future subjunctive and aorist subjunctive: both became {μιλήσω}.

The result is that {να} and {όταν} produce the same verbal form, and anyone not paying attention cannot tell whether he is reading a clause of will or a clause of time. The word in front is what tells you.

## Where the subjunctive is in Scripture

> Ἄν τις θέλει πρὸς ἐμὲν ἐλθεῖν, ἀπαρνήσαται ἑαυτόν καὶ ἄραται τὸν σταυρόν αὐτοῦ καὶ ἀκολουθεῖ μοι.

{ἐλθεῖν} is an aorist infinitive, and the {ἄν} in front is the subjunctive particle. There is no {να}, because the Greek of Scripture has the particle {ἄν} in its place. The whole sentence is a conditional, and the verb in the subjunctive is exactly what depends on the condition.

A translator translates the forms ({θέλει}, {ἄν}) and loses the mood. What is at stake is the value: in Greek the sentence says "if anyone wants to come to me, he has to leave something behind". The subjunctive is what turns a wish into a condition.`),
  vocab: [
    V('θέλω να', 'θέλω', 'I want to'),
    V('να', 'να', 'that (subjunctive)'),
    V('να μην', 'να μην', 'that not'),
    V('δεν', 'δεν', 'not'),
    V('μιλήσω', 'μιλάω', 'to speak'),
    V('φύγω', 'φεύγω', 'to leave'),
    V('πρέπει να', 'πρέπει', 'it is necessary that'),
    V('έρθει', 'έρχομαι', 'he may come'),
    V('όταν', 'όταν', 'when'),
    V('πριν', 'πριν', 'before that'),
    V('αφού', 'αφού', 'after that'),
    V('είθε', 'είθε', 'it is the custom'),
    V('χρειάζεται', 'χρειάζεται', 'it is necessary'),
    V('γράφω', 'γράφω', 'I write'),
  ],
  rules: [
    { n: '§1', text: T('The indicative is the unmarked mood; να is the mark of the subjunctive.') },
    { n: '§2', text: T('After να the verb goes aorist, even with the main verb in the past.') },
    { n: '§3', text: T('να and θα do not combine: θα να έρθει is wrong.') },
    {
      n: '§4',
      text: T('The negation of the subjunctive is να μην, in that order, and μην comes after να.'),
    },
    { n: '§5', text: T('The optative survives only in είθε, χρειάζεται and έδει.') },
  ],
  notes: [
    {
      label: T('Koine'),
      text: T(
        'In Scripture the subjunctive particle is ἄν, not να. The construction is the same; what changes is the mark. That is why the biblical text has subjunctives with no visible modern Greek word at all.',
      ),
    },
    {
      label: T('Calque'),
      text: T(
        'Ancient Greek used the future participle as a main verb after ὅτι, and English inherited that as "I heard that". Modern Greek dropped the phrase and says ακούω ότι.',
      ),
    },
  ],
  examples: [
    { text: 'θέλω να φύγω', gloss: T('I want to leave') },
    { text: 'πρέπει να φύγεις', gloss: T('you must leave') },
    { text: 'δεν θέλω να έρθει', gloss: T('I do not want him to come') },
    { text: 'δεν θέλω να μην έρθει', gloss: T('I do not want him not to come') },
    { text: 'θα φύγει', gloss: T('he will leave') },
    { text: 'θα να φύγει', gloss: T('incorrect form') },
    { text: 'όταν έρθει', gloss: T('when he comes') },
    { text: 'πριν φύγει', gloss: T('before he goes') },
  ],
  tables: [
    {
      caption: T('The moods of modern Greek'),
      head: ['Τρόπος', 'Σήμα', 'Παράδειγμα'],
      rows: [
        ['οριστική', '—', 'γράφω'],
        ['υποτακτική', 'να', 'θέλω να γράψω'],
        ['προστακτική', '—', 'γράψε'],
        ['ευκτική', 'έδει, είθε', 'έδει να φύγει'],
      ],
    },
    {
      caption: T('The two negatives'),
      head: ['Άρνηση', 'Πού', 'Παράδειγμα'],
      rows: [
        ['δεν', 'πριν το ρήμα', 'δεν θέλω να έρθει'],
        ['μην', 'μετά το να', 'να μην έρθει'],
      ],
    },
    {
      caption: T('After να or όταν'),
      head: ['Εισαγωγή', 'Ρήμα', 'Ανάγνωση'],
      rows: [
        ['να', 'έρθει', 'που έρχεται'],
        ['όταν', 'έρθει', 'όταν έρθει'],
        ['πριν', 'φύγει', 'πριν φύγει'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which form is correct?'),
    options: [T('θα να έρθει'), T('να έρθει'), T('να θα έρθει'), T('όταν να έρθει')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('θέλω ___ φύγει (subjunctive particle)'),
      answer: 'να',
      hint: T('Two letters'),
    },
    {
      kind: 'choose',
      prompt: T('How do you say "I do not want him to come"?'),
      options: [
        T('δεν θέλω να έρθει'),
        T('δεν θέλω να μην έρθει'),
        T('μην θέλω να έρθει'),
        T('θέλω να μην δεν'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Word and function'),
      pairs: [
        { a: 'να', b: T('subjunctive') },
        { a: 'μην', b: T('subjunctive negation') },
        { a: 'θα', b: T('future') },
        { a: 'όταν', b: T('when') },
      ],
      answer: ['a1', 'a2', 'a3', 'a4'],
    },
    {
      kind: 'fill',
      prompt: T('πρέπει ___ φύγεις (subjunctive particle)'),
      answer: 'να',
      hint: T('The same particle'),
    },
  ],
};
