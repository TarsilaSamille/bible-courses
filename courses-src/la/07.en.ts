import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('First text: John 1:1-5 in the Vulgate'),
  subtitle: T('Eleven verses, three verbs — how the Vulgate orders a sentence'),
  section: T('Verbs, tenses and first texts'),
  body: C(`## The text

A reading from the Vulgate, John 1:1-5:

> In principio erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum.
> Hoc erat in principio apud Deum.
> Omnia per ipsum facta sunt, et sine ipso factum est nihil quod est.
> In ipso vita erat, et vita erat lux hominum.
> Et lux in tenebris lucet, et tenebrae eam non comprehenderunt.

## Analysing the first sentence

**In principio erat Verbum.** Three words, three jobs: {In} with the ablative = «in», {principio} = ablative of place, {erat} = the verb {sum} in the third singular imperfect, {Verbum} = subject in the nominative. The order is {adverb + verb + subject} — the reverse of ours, and the oldest, most literary order there is.

**et Verbum erat apud Deum.** Did the consonantal vowel of {et} change before {Verbum}? No: the scribe simply copied the Greek, where the rule is strict, and in Latin the alternative form {Verbum} simply sounds better. Note the repetition of {erat}: the verb does not vary, the subject does. Latin rarely uses a pronoun for what the noun has already said.

**et Deus erat Verbum.** Here the construction changes figure. {Deus} in the nominative and {Verbum} without any article in the nominative: this is an identity predication, an equation. Latin makes it with {sum} and no auxiliary at all — {Deus erat Verbum} «God was the Word».

## The word order Latin prefers

Compare the two systems:

| Concept | Greek | Latin |
|---|---|---|
| neutral (prose) | verb in 2nd position | — |
| verb | at the end of the clause | free position |
| subject | comes after | comes before |

What is the norm for Greek is, in Latin, merely a literary tone: in ordinary prose Latin also puts the verb second, as in {Deus verbum erat}.

## Sine ipso factum est nihil

This is the most elegant sentence in the Vulgate, and everything in it is ablative. {Sine} governs the ablative {ipso}; {nihil} is the subject, {quod est} the relative clause defining the nothing, and {factum est} the verb {facere} in the perfect passive. The verb {sum} appears twice with different senses: the {est} in the relative clause is plain {sum}, and the {est} in {factum est} is merely the passive auxiliary.

Note the negation: {nihil} is the neuter accusative of {nihil}, and precisely because it is neuter can it serve as subject. Were it {nemo}, the subject would have to be {nemo} and the verb would be {nihil factum est}.`),
  vocab: [
    V('Verbum', 'verbum', 'word'),
    V('principium', 'principium', 'beginning'),
    V('in', 'in', 'in (+ abl.)'),
    V('apud', 'apud', 'at, near, with'),
    V('Deus', 'Deus', 'God'),
    V('omnia', 'omnia', 'all things'),
    V('per', 'per', 'through, by'),
    V('sine', 'sine', 'without (+ abl.)'),
    V('vita', 'vita', 'life'),
    V('lux', 'lux', 'light'),
    V('tenebrae', 'tenebrae', 'darkness'),
    V('lucet', 'luceo', 'shines (of {lux})'),
    V('comprehendunt', 'comprehendo', 'grasp, seize'),
    V('mundus', 'mundus', 'world'),
    V('factus', 'facio', 'made (part. of {facio})'),
    V('homo', 'homo', 'human being'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {In principio erat Verbum}, what is the function of the {principio}?'),
    options: [
      T('Ablative of place, governed by {in}'),
      T('Genitive, «of the beginning»'),
      T('Accusative, object of {erat}'),
      T('Dative, «to the beginning»'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Why is {Deus erat Verbum} an equation rather than a metaphor?'),
      options: [
        T('Both terms are in the same case: nominative'),
        T('The verb {erat} is the same as in the two previous clauses'),
        T('There is no article, and Latin would not use one in a metaphor'),
        T('Because {Verbum} is the only neuter noun in the verse'),
      ],
      answer: 0,
      hint: T('Rule §4.'),
    },
    {
      kind: 'fill',
      prompt: T('In {sine ipso factum est nihil}, which case does {sine} govern? (one word)'),
      answer: 'ablativo',
      hint: T('It is the same case as {principio} in {In principio}.'),
    },
    {
      kind: 'match',
      prompt: T('Match the verb to what it does in verse 1'),
      pairs: [
        { a: T('In'), b: T('preposition, always with the ablative') },
        { a: T('erat'), b: T('the verb {sum} in the imperfect, 3rd singular') },
        { a: T('apud'), b: T('preposition, always with the accusative') },
        { a: T('et'), b: T('conjunction, «and»') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{in}, {sine}, {cum}, {per} govern the ablative; {apud}, {ad}, {per} with a sense of motion govern the accusative.',
      ),
    },
    {
      n: '2',
      text: T(
        'The imperfect of {sum} expresses duration without a beginning — time that does not start.',
      ),
    },
    {
      n: '3',
      text: T(
        'An equation is made with {sum} between two terms in the same case: {Deus erat Verbum}.',
      ),
    },
    {
      n: '4',
      text: T('Latin avoids redundant pronouns: it repeats the noun, not the {is}/{ea}/{id}.'),
    },
    {
      n: '5',
      text: T(
        'In {factum est} the {est} is only the passive auxiliary; in {nihil quod est} the same {est} is plain {sum}.',
      ),
    },
  ],
  notes: [
    {
      label: T('λόγος:'),
      text: T(
        'The Greek behind {Verbum} is λόγος — a word meaning in Greek both «word» and «relation», «order», «reason». Jerome did not render it {sermo} «sermon» or {verbum} in the rhetorical sense: he kept {Verbum} because in Latin the term already carried the tension between a word spoken and a word performed. Note how {per ipsum} repeats the {Verbum} without naming it, and {quod est} translates λόγος a second time.',
      ),
    },
    {
      label: T('Verbal aspect:'),
      text: T(
        'Latin has not the tenses Portuguese has. What exists is **aspect**: the perfect {non comprehenderunt} shows the whole action from its end, the imperfect {erat} shows the process from within. Always mapping onto a single Portuguese tense flattens the Latin more than it should be.',
      ),
    },
  ],
  examples: [
    { text: 'In principio', gloss: T('«in the beginning» — {in} + ablative') },
    { text: 'erat Verbum', gloss: T('«was the Word» — verb before the subject') },
    { text: 'apud Deum', gloss: T('«with God» — {apud} + accusative') },
    { text: 'Deus erat Verbum', gloss: T('«God was the Word» — equation') },
    { text: 'Hoc erat in principio apud Deum', gloss: T('«This was in the beginning with God»') },
    { text: 'Omnia per ipsum facta sunt', gloss: T('«All things were made through him»') },
    { text: 'sine ipso', gloss: T('«without him» — {sine} + ablative') },
    { text: 'factum est nihil', gloss: T('«was made nothing» — {nihil} is the neuter subject') },
    { text: 'lux hominum', gloss: T('«light of men» — genitive of possession') },
    {
      text: 'tenebrae eam non comprehenderunt',
      gloss: T('«the darkness did not grasp it» — {eam} = the light'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — Analysis of {In principio erat Verbum}'),
      head: [T('Word'), T('Case'), T('Function'), T('Gloss')],
      rows: [
        ['In', T('—'), T('preposition'), 'em, no (+ ablativo)'],
        ['principio', T('ablative sg.'), T('place'), 'no princípio'],
        ['erat', T('3rd sg.'), T('verb {sum}, imperfect'), 'era'],
        ['Verbum', T('nominative sg.'), T('subject'), 'a Palavra'],
      ],
    },
    {
      caption: T('Table 2 — Verbs from {In principio} to {non comprehenderunt}'),
      head: [T('Form'), T('Lemma'), T('Tense and mood'), T('Translation')],
      rows: [
        ['erat', 'sum', T('indicative imperfect'), 'era'],
        ['est', 'sum', T('indicative present'), 'é'],
        ['sunt', 'sum', T('indicative present'), 'foram feitos'],
        ['factum est', 'facio', T('perfect passive'), 'foi feito'],
        ['lucet', 'luceo', T('indicative present'), 'brilha'],
        ['comprehenderunt', 'comprehendo', T('indicative perfect'), 'alcançaram'],
      ],
    },
  ],
};
