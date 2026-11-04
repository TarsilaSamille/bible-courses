import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('The να subjunctive'),
  subtitle: T('θέλω να…'),
  section: T('The verb'),
  body: C(`## να is the hinge of modern Greek

να introduces a dependent action with no sense of order: θέλω να μιλήσω "I want to speak", πρέπει να φύγω "I must leave", ώστε να μάθω "so that I may learn". Notice the dependent verb appears in the aorist (μιλήσω) even when the main verb is present — in Greek the aorist is the unmarked form of a subordinate.

## Where the subjunctive appears

After verbs of will, necessity and possibility, the aorist is obligatory: θέλω να, πρέπει να, μπορώ να, προσπαθώ να, καταφέρνω να. They are few and the list is closed: if it is not on that list, the verb probably goes in the indicative.

After όταν "when", πριν "before", αφού "after", γιατί "because" and similar, it is also aorist. It is the same mechanism as the ancient Greek: whatever heads a subordinate clause takes the subordinate form.

## να is not the Koine subjunctive

The old subjunctive (πιο να λέω) survives in fixed expressions — πιο να λω, μην ξεχάσετε — but in current usage modern Greek prefers the indefinite: να μιλήσω, not πιο να λέω. Translating the New Testament with πιο sounds archaic to a modern speaker.

## θa + να is not standard

θα έρθει is normal: future or possibility. θα να έρθει is not. Two markers for the same idea, and Greek picks one. In doubt, θα έρθει can be "he will come" or "he may come" — and resolving that is the translator's job.

## Reading criterion

Whenever a verb of planning follows θέλω, πρέπει, πολύ, αρκετά, ώστε or πριν, expect the aorist. And do not go looking for πιο: in modern Greek it is a survival, not a rule.`),
  vocab: [
    V('να', 'να', 'that (subjunctive)'),
    V('θέλω να', 'θέλω', 'I want to'),
    V('πρέπει να', 'πρέπει', 'must'),
    V('θα', 'θα', 'future/possibility'),
    V('φύγω', 'φεύγω', 'leave'),
    V('μάθω', 'μαθαίνω', 'learn'),
    V('έρθει', 'έρχομαι', 'will/may come'),
    V('μιλήσω', 'μιλώ', 'speak'),
    V('θέλω', 'θέλω', 'I want'),
    V('πρέπει', 'πρέπει', 'I must'),
    V('μπορώ', 'μπορώ', 'I can'),
    V('ώστε', 'ώστε', 'so that'),
    V('για να', 'για να', 'in order to'),
    V('ελληνικά', 'ελληνικά', 'Greek (language)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('θέλω ___ μιλήσω'),
    answer: 'να',
    hint: T('Subordination particle'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Which construction expresses purpose?'),
      options: [T('πρέπει να'), T('θα'), T('για να'), T('δεν')],
      answer: 2,
    },
    {
      kind: 'fill',
      prompt: T('I am not going today'),
      answer: 'θα',
      hint: T('Future-time marker'),
    },
    {
      kind: 'match',
      prompt: T('Match connector and meaning'),
      pairs: [
        { a: 'θέλω', b: T('want') },
        { a: 'πρέπει', b: T('must') },
        { a: 'για να', b: T('in order to') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [{ n: '§1', text: T('After many verbs, να precedes the aorist/subjunctive.') }],
  notes: [
    {
      label: T('Koine'),
      text: T('Koine used forms such as ἵνα λέγῃ; modern Greek prefers the aorist with να.'),
    },
  ],
  examples: [{ text: 'θέλω να μάθω ελληνικά', gloss: T('I want to learn Greek') }],
  tables: [
    {
      caption: T('Constructions'),
      head: ['Tipo', 'Ejemplo'],
      rows: [
        ['deseo', 'θέλω να φύγω'],
        ['necesidad', 'πρέπει να φύγω'],
        ['finalidad', 'για να φύγω'],
      ],
    },
  ],
};
