import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('Passive voice'),
  subtitle: T('αγαπιέμαι — I am loved'),
  section: T('The verb'),
  body: C(`## How it is formed

The modern passive adds a suffix that looks like the present: αγαπώ gives αγαπιέμαι (1st), αγαπιόμαστε (2nd), αγαπιέστε (3rd) and αγαπιούνται (3rd plural). Notice the stress shift — αγαπώ, αγαπιέμαι — and that shift is what marks the passive.

When the subject is a person, the verb is εἰμί: εἶμαι "I am", εἶσαι, εἶναι. "Εἶμαι + adjective" is the real "to be" of modern Greek, and εἶναι works as a copula.

## The agent with από

The Greek passive hides the agent. When it has to appear, it comes in with από: αγαπιέμαι από τη μητέρα μου — "I am loved by my mother". Note the preposition with the genitive: από τη μητέρα, and μου standing in for the noun. The same holds with εν: γράφεται από τον Μαρκο, γράφεται στα ελληνικά.

## The passive aorist

The passive aorist almost always ends in -θηκα: αγαπήθηκα "I was loved", διαβάστηκα "it was read", μπήκα "I entered". Some verbs use -φηκα: δέχθηκα "I received". Learn those two endings — they are the commonest way of getting into the passive in a short sentence.

## What is not passive

Έρχομαι "I come" ends like a passive aorist, but it is not passive — it is a verb of motion, and its aorist means "I came", not "I was come". Μπαίνω "I enter" and μπήκα confirm it: same -ηκα participle, same appearance, different job.

## Reading criterion

Look at the preposition, not the ending. With από there is an explicit agent; without one the action is left hanging — which in Greek is the norm.`),
  vocab: [
    V('αγαπιέμαι', 'αγαπώ', 'I am loved'),
    V('αγαπιόμαστε', 'αγαπώ', 'we love each other'),
    V('γράφομαι', 'γράφω', 'I am written'),
    V('βαπτίζομαι', 'βαπτίζω', 'I am baptized'),
    V('αγαπήθηκα', 'αγαπώ', 'I was loved'),
    V('διαβάστηκα', 'διαβάζω', 'I was read'),
    V('δέχθηκα', 'δέχομαι', 'I received'),
    V('από', 'από', 'from; by'),
    V('αγαπώ', 'αγαπώ', 'I love'),
    V('αγαπιούνται', 'αγαπώ', 'they love each other'),
    V('αγαπιέστε', 'αγαπώ', 'love one another (2nd pl.)'),
    V('μητέρα', 'μητέρα', 'mother'),
    V('Θεός', 'Θεός', 'God'),
    V('γράφω', 'γράφω', 'I write'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How do you form “I am loved”?'),
    options: [T('αγαπιέμαι'), T('αγαπώ'), T('αγαπήθηκα'), T('αγαπήσω')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('The book was written'),
      answer: 'γράφτηκε',
      hint: T('Passive aorist of γράφω'),
    },
    {
      kind: 'choose',
      prompt: T('“I received a letter”'),
      options: [T('δέχθηκα'), T('δείχθηκα'), T('δείχτηκα'), T('δέχομαι')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match aspect'),
      pairs: [
        { a: 'αγαπιέμαι', b: T('present') },
        { a: 'αγαπήθηκα', b: T('aorist') },
        { a: 'αγαπιόμαστε', b: T('plural') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [{ n: '§1', text: T('Not every -μαι form is passive; classify by meaning.') }],
  notes: [
    {
      label: T('Koine'),
      text: T(
        'The medieval passive is present in the New Testament, but modern inflection is new.',
      ),
    },
  ],
  examples: [{ text: 'αγαπιέμαι από τον Θεό', gloss: T('I am loved by God') }],
  tables: [
    {
      caption: T('Passive'),
      head: ['Número', 'Forma'],
      rows: [
        ['singular', 'αγαπιέμαι'],
        ['plural', 'αγαπιόμαστε'],
      ],
    },
  ],
};
