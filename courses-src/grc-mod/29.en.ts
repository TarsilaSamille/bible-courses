import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  section: T('Connector'),
  title: T('Conjunctions: what ties the sentence together'),
  subtitle: T('και — αλλά — ή — ότι — γιατί — αφού — ενώ'),
  body: C(`## The ones that have no fixed place

**{και} is "and", and it is the commonest conjunction in Greek**. {αλλά} is "but", and {όμως} is the same sense in a higher register: {Αλλά ήρθε}, {Όμως ήρθε}. {Ή} is "or", and {ούτε} is "nor", which only turns up in a negative series.

After {ή} and {αλλά}, the verb may change form. {Ήρθε ή φύγε} is "he came or he left", and both halves stay in the same tense and the same person. It is inheritance from ancient Greek, and in modern Greek you can do it or not; doing it sounds old-fashioned.

## ότι does not become που

This is the point that trips translators up most. {ότι} introduces a whole declarative clause, and its verb is an ordinary verb: {Πιστεύω ότι έρχεται}, "I believe he is coming". {που} is a relative and needs a noun in front of it: {ο φίλος που έρχεται}, "the friend who is coming".

The confusion comes from English, which uses the same "that" for both. In Greek, swapping one for the other produces either nonsense or an ambiguous sentence. {Ξέρω ότι έρχεται} is grammatical and means "I know he is coming". {Ξέρω που έρχεται} has nothing for {που} to modify.

The difference is also one of time: {ότι} brings what the speaker asserts, and the verb stays indicative; {που} brings what the text means, and it can be in any tense.

## Why: four words, four senses

{Γιατί} is "because", and it answers a question of cause. {Αφού} is "since", and it subordinates the fact to a condition that has been met. {Ενώ} is "while" or "whereas", and it puts two things side by side over the same interval. {Επειδή} is the written version of {γιατί}.

{Γιατί} has two forms. With an indicative verb it is cause: {Δεν ήρθε γιατί ήταν άρρωστος}. With the subjunctive it is purpose: {Μένω εδώ γιατί να σε δω}. It is the same word with the mood swapped, and the mood is what decides between "because" and "so that".

## Conjunction and tense: the pair that matters

{Πριν} is "before" and {αφού} is "after". Both ask for the verb in what the reader recognises as the future: {Πριν φύγει}, {Αφού έρχεται}. The same form {έρχεται} appears in both, and anyone who does not know which of the two is in front cannot tell past from future.

{Ενώ} does the same with the present: {Ενώ μιλούσε, ο φίλος έφυγε}. The verb of {ενώ} stays in the imperfect, and that is what marks the duration.

## Where the conjunctions are in Scripture

> Καὶ λέγει αὐτῷ ὁ Ἰησοῦς· Τί σὲ λέγεις ἀσθενεῖν; ἀνάστηθι, ἆρον τὸν κράβαττόν σου καὶ περιπάτει.

{Καὶ} links the clauses, {δέ} introduces the objection, {καὶ} links the three orders. The text has four conjunctions in six verses, and none of them is decorative: each one marks a relation between what comes before and what comes after.

What ancient Greek does and modern Greek repeats is the second position of the verb. In {λέγει αὐτῷ}, the verb is the second thing in the clause after {καί}, and anyone who looks for the verb at the end will not find it.`),
  vocab: [
    V('και', 'και', 'and'),
    V('αλλά', 'αλλά', 'but'),
    V('όμως', 'όμως', 'however'),
    V('ή', 'ή', 'or'),
    V('ούτε', 'ούτε', 'nor'),
    V('ότι', 'ότι', 'that (clause)'),
    V('που', 'που', 'that (relative)'),
    V('γιατί', 'γιατί', 'because'),
    V('αφού', 'αφού', 'after that'),
    V('ενώ', 'ενώ', 'while'),
    V('πριν', 'πριν', 'before that'),
    V('δέ', 'δέ', 'but (ancient Greek)'),
    V('επειδή', 'επειδή', 'since (written)'),
    V('μένω', 'μένω', 'I stay'),
  ],
  rules: [
    { n: '§1', text: T('και links, αλλά and όμως contrast, ή and ούτε separate.') },
    {
      n: '§2',
      text: T(
        'ότι introduces a declarative clause with an ordinary verb; που is a relative and needs a noun in front.',
      ),
    },
    {
      n: '§3',
      text: T('γιατί with the indicative is cause; γιατί with the subjunctive is purpose.'),
    },
    { n: '§4', text: T('πριν and αφού ask for the future form: πριν φύγει, αφού έρχεται.') },
  ],
  notes: [
    {
      label: T('Tense'),
      text: T(
        'After πριν, αφού, όταν and ενώ the Greek verb always comes in the same form, which is the aorist. The tense of the subordinate clause is not given by the verb: it is given by the conjunction that introduces it.',
      ),
    },
    {
      label: T('Koine'),
      text: T(
        'δέ is the ancient Greek conjunction and means "but", not "and". Anyone who translates the sequence καί… καί… δέ as a list loses the objection that δέ marks.',
      ),
    },
  ],
  examples: [
    { text: 'ήρθε και έφυγε', gloss: T('he came and left') },
    { text: 'ήρθα αλλά έφυγε', gloss: T('I came but I left') },
    { text: 'πιστεύω ότι έρχεται', gloss: T('I believe he is coming') },
    { text: 'ο φίλος που έρχεται', gloss: T('the friend who is coming') },
    { text: 'δεν ήρθε γιατί ήταν άρρωστος', gloss: T('he did not come because he was ill') },
    { text: 'μένω εδώ γιατί να σε δω', gloss: T('I stay here to see you') },
    { text: 'αφού ήρθε, έφυγε', gloss: T('after he came, he left') },
    { text: 'ενώ μιλούσε, ο φίλος έφυγε', gloss: T('while he was speaking, the friend left') },
  ],
  tables: [
    {
      caption: T('The main conjunctions'),
      head: ['Σύνδεσμος', 'Παράδειγμα'],
      rows: [
        ['και', 'ήρθε και έφυγε'],
        ['αλλά', 'ήρθα αλλά έφυγε'],
        ['ή', 'ήρθε ή έφυγε'],
        ['γιατί', 'δεν ήρθε γιατί ήταν άρρωστος'],
      ],
    },
    {
      caption: T('ότι and που'),
      head: ['Λέξη', 'Τι εισάγει', 'Παράδειγμα'],
      rows: [
        ['ότι', 'δηλωτική πρόταση', 'πιστεύω ότι έρχεται'],
        ['που', 'αναφορική πρόταση', 'ο φίλος που έρχεται'],
        ['ποιος', 'ερώτηση', 'ποιος έρχεται'],
      ],
    },
    {
      caption: T('Conjunction and verb tense'),
      head: ['Σύνδεσμος', 'Ρήμα', 'Ανάγνωση'],
      rows: [
        ['όταν', 'έρθει', 'όταν έρθει'],
        ['πριν', 'φύγει', 'πριν φύγει'],
        ['αφού', 'έρθει', 'αφού έρθει'],
        ['ενώ', 'μιλούσε', 'ενώ μιλούσε'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which word introduces a declarative clause?'),
    options: [T('που'), T('ότι'), T('γιατί'), T('αλλά')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Ξέρω ___ έρχεται (introduces a declarative clause)'),
      answer: 'ότι',
      hint: T('With the accent, without a final τ'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is grammatical?'),
      options: [
        T('Ξέρω που έρχεται'),
        T('Ξέρω ότι έρχεται'),
        T('Ξέρω οτι έρχεται'),
        T('Ξέρω τι έρχεται'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Conjunction and sense'),
      pairs: [
        { a: 'και', b: T('and') },
        { a: 'αλλά', b: T('but') },
        { a: 'ή', b: T('or') },
        { a: 'ενώ', b: T('while') },
      ],
      answer: ['a1', 'a2', 'a3', 'a4'],
    },
    {
      kind: 'fill',
      prompt: T('___ ήρθε, έφυγε (conjunction of result)'),
      answer: 'Αφού',
      hint: T('Capital letter'),
    },
  ],
};
