import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('είμαι and έχω'),
  subtitle: T('to be and to have'),
  section: T('The verb'),
  body: C(`είμαι and έχω are irregular and very frequent. είμαι expresses identity, state or location: είμαι Έλληνας “I am Greek”, είμαι καλά “I am well”, είμαι στο σπίτι “I am at home”. έχω expresses possession or experience: έχω αυτοκίνητο “I have a car”, έχω δει “I have seen”.

Pronouns are normally implicit in the ending. ο άνθρωπος “the man” and εγώ ο άνθρωπος “I am the man” differ in information.

The present works for events, habits and states. είμαι has two forms: the stressed one is used before place names and for emphasis; the enclitic form can follow the verb and also occurs after εδώ. Thus είμαι εγώ is possible, but εδώ είμαι is common when announcing presence.

Do not confuse έχω with Koine εἰμί: they come from different verbs, even when existential contexts receive the same translation. In modern Greek έχω ένα πρόβλημα means “I have a problem”, not “I exist”.`),
  vocab: [
    V('είμαι', 'είμαι', 'I am'),
    V('είσαι', 'είμαι', 'you are'),
    V('είναι', 'είμαι', 'is; is'),
    V('είμαστε', 'είμαι', 'we are'),
    V('είστε', 'είμαι', 'you are'),
    V('είναι', 'είμαι', 'they are'),
    V('έχω', 'έχω', 'I have'),
    V('έχει', 'έχω', 'he/she has'),
    V('έχουν', 'έχω', 'they have'),
    V('καλά', 'καλός', 'well (adverb)'),
    V('εγώ', 'εγώ', 'I'),
    V('αυτός', 'αυτός', 'he'),
    V('σπίτι', 'σπίτι', 'house'),
    V('πρόβλημα', 'πρόβλημα', 'problem'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('εγώ ___ καλά'),
    answer: 'είμαι',
    hint: T('First person of είμαι'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Which form completes: εμείς ___'),
      options: [T('είμαι'), T('είσαι'), T('είμαστε'), T('είναι')],
      answer: 2,
    },
    {
      kind: 'fill',
      prompt: T('Translate: έχουμε χρόνο'),
      answer: 'temos tempo',
      hint: T('έχουμε = we have'),
    },
    {
      kind: 'match',
      prompt: T('Match subject and verb'),
      pairs: [
        { a: 'αυτός', b: 'έχει' },
        { a: 'εσείς', b: 'είστε' },
        { a: 'αυτοί', b: 'έχουν' },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [
    { n: '§1', text: T('είμαι + noun names identity or profession.') },
    { n: '§2', text: T('έχω expresses possession; it is not the verb of existence.') },
  ],
  notes: [
    {
      label: T('Fixed expression'),
      text: T('Έχει δίκιο means “is right”; έχεις δίκιο, “you are right”, is preferred.'),
    },
  ],
  examples: [
    { text: 'εγώ είμαι Έλληνας', gloss: T('I am Greek') },
    { text: 'έχω δύο αδελφούς', gloss: T('I have two brothers') },
  ],
  tables: [
    {
      caption: T('Present tense'),
      head: ['Pronome', 'είμαι', 'έχω'],
      rows: [
        ['εγώ', 'είμαι', 'έχω'],
        ['εσύ', 'είσαι', 'έχεις'],
        ['αυτός/αυτή', 'είναι', 'έχει'],
        ['εμείς', 'είμαστε', 'έχουμε'],
        ['εσείς', 'είστε', 'έχετε'],
        ['αυτοί', 'είναι', 'έχουν'],
      ],
    },
  ],
};
