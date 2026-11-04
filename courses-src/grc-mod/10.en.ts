import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Continuous past'),
  subtitle: T('μίλαγα — I was speaking'),
  section: T('The verb'),
  body: C(`## What the imperfect paints

The imperfect does not mark tense: it paints. It does three things — an action still going on while we speak, a habit, or the background scene. Note the pair: μιλούσα ("I was speaking") and μιλάγα (the popular form) are the same tense in two traditions; the learned form descends from -ουσα, the popular one swaps it for -αγα.

See what changes and what does not: the person endings stay -ω, -εις, -ει, -ουμε, -ετε, -ουν in both systems. What changes is the middle of the stem.

## Habit vs. scene

Κάθε μέρα έπινα νερό — "every day I drank water" — the habit sits in the main verb. Από τότε έπινα νερό — "back then I was drinking water" — the scene sits there instead, and επινα can mean something quite different elsewhere. That is why this tense is almost never translated word for word: you translate the relation in time, not the time.

## The irregulars

ἤμουν, εἶχα, ἔτρωγα and ἕπινα follow no pattern at all. They are also among the commonest verbs in the language, and therefore the most irregular. Learn the four as one block.

## Reading criterion

When you translate an imperfect, ask: "what was going on" or "what always happened"? If the verb of the next clause is an aorist, it is almost always a scene. If it repeats, it is a habit.`),
  vocab: [
    V('μίλαγα', 'μιλώ', 'I was speaking'),
    V('μιλάγαμε', 'μιλώ', 'we were speaking'),
    V('μίλαγαν', 'μιλώ', 'they were speaking'),
    V('ήμουν', 'είμαι', 'was'),
    V('είχα', 'έχω', 'I had'),
    V('έτρωγα', 'τρώω', 'I was eating'),
    V('ήπινα', 'πίνω', 'I was drinking'),
    V('προσευχόταν', 'προσεύχομαι', 'was praying'),
    V('μιλούσα', 'μιλώ', 'I was speaking (learned)'),
    V('μίλησα', 'μιλώ', 'I spoke (event)'),
    V('κάθε', 'κάθε', 'every'),
    V('μέρα', 'μέρα', 'day'),
    V('νερό', 'νερό', 'water'),
    V('φίλος', 'φίλος', 'friend'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which is the popular imperfect?'),
    options: [T('μίλαγα'), T('μίλησα'), T('θα μιλήσω'), T('μιλώ')],
    answer: 0,
  },
  exercises: [
    { kind: 'fill', prompt: T('I was little'), answer: 'ήμουν', hint: T('Imperfect of είμαι') },
    {
      kind: 'choose',
      prompt: T('Which verb completes the background?'),
      options: [T('μίλησα'), T('μιλούσα'), T('θα πω'), T('πω')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Match meaning'),
      pairs: [
        { a: 'μιλούσα', b: T('background') },
        { a: 'μίλησα', b: T('event') },
        { a: 'θα πω', b: T('future') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [{ n: '§1', text: T('Imperfect for background; aorist for event.') }],
  notes: [{ label: T('Register'), text: T('μιλαγα is colloquial; μιλούσα is learned register.') }],
  examples: [
    { text: 'ενώ μιλούσα, ήρθε ο φίλος', gloss: T('while I was speaking, my friend came') },
  ],
  tables: [
    {
      caption: T('Narrative background'),
      head: ['Tiempo', 'Verbo'],
      rows: [
        ['fondo', 'μιλούσα'],
        ['evento', 'μίλησα'],
      ],
    },
  ],
};
