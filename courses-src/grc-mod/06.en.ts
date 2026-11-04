import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('Past: aorist'),
  subtitle: T('μίλησα, έφαγα, πήγα'),
  section: T('The verb'),
  body: C(`## The aorist is the default past tense

If an ancient Greek sentence is in the past and you do not know which tense, it is almost certainly the aorist. It is the "neutral" tense: it carries no aspect of its own and covers what happened once, what happened repeatedly, and what began. Only context decides which.

The active aorist follows the present stem: μιλώ → **μίλησα**, μίλησες, μίλησε, μιλήσαμε, μιλήσατε, μίλησαν. Note the added -σα in the singular. The stress may move (λέω → είπα, from ἄλλω), but the form is recognised by the stem and the endings.

## The irregulars are a fixed set

A handful of verbs swap the stem entirely: τρώω → **έφαγα**, πάω → **πήγα**, βλέπω → **είδα**, λέω → **είπα**, παίρνω → **πήρα**, βρίσκω → **βρήκα**. These are the verbs you learn by heart because the form does not come from the present. λέω is the curious case: irregular in the present (λέω, λες, λέει) and irregular in the aorist (είπα), and the commonest of all in the New Testament.

## Aorist, imperfect, and the texture that gets lost

The **imperfect** (lesson 9) is the other side: action in progress, habit, or past action with an idea of duration. **ἐλάλουν** "he was speaking" next to **εἶπα** "he said" is the most useful distinction in the language. A verse with both gives you the narrator in action: what was said (aorist) and what was going on around it (imperfect).

## θa and the future

θα plus a verbal form makes the future, and does not combine with να: θα μιλήσω "I will speak", not θα να μιλήσω. But in speech θα μιλήσω can mean "I will speak" or "I may speak", depending on context — the same ambiguity Portuguese has in "vai fazer" or "vai chover".

## Reading criterion

Whenever a verb is in the aorist, ask: is the text reporting a fact, a habit, or a beginning? The form does not say; the situation does. And if λέω shows up, it is almost always είπα — the commonest irregular in the New Testament.`),
  vocab: [
    V('μίλησα', 'μιλώ', 'I spoke'),
    V('μίλησε', 'μιλώ', 'he/she spoke'),
    V('μιλήσαμε', 'μιλώ', 'we spoke'),
    V('μίλησαν', 'μιλώ', 'they spoke'),
    V('έφαγα', 'τρώω', 'I ate'),
    V('πήγα', 'πάω', 'I went'),
    V('είδα', 'βλέπω', 'I saw'),
    V('είπα', 'λέω', 'I said'),
    V('θα', 'θα', 'future particle'),
    V('μίλησες', 'μιλώ', 'you spoke'),
    V('μιλήσατε', 'μιλώ', 'you (pl.) spoke'),
    V('πάω', 'πάω', 'I go'),
    V('λέω', 'λέω', 'I say'),
    V('να', 'να', 'that (subjunctive)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('βλέπω → I saw'),
    answer: 'είδα',
    hint: T('Irregular aorist'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('“We spoke yesterday”'),
      options: [T('μιλήσαμε'), T('μιλάμε'), T('μιλάτε'), T('μίλησαν')],
      answer: 0,
    },
    { kind: 'fill', prompt: T('εγώ ___ my friend'), answer: 'είδα', hint: T('βλέπω → aorist') },
    {
      kind: 'match',
      prompt: T('Match present and aorist'),
      pairs: [
        { a: 'τρώω', b: 'έφαγα' },
        { a: 'πάω', b: 'πήγα' },
        { a: 'λέω', b: 'είπα' },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [
    { n: '§1', text: T('The aorist does not require duration.') },
    { n: '§2', text: T('Negation keeps δεν: δεν μίλησα.') },
  ],
  notes: [
    {
      label: T('Demotic × Koine'),
      text: T(
        'είπα, έφαγα and πήγα belong to the Demotic past; εἶπεν, ἔφαγεν and ἐπῆλθεν are Koine-system forms.',
      ),
    },
  ],
  examples: [
    { text: 'χθες μίλησα μαζί σου', gloss: T('I spoke with you yesterday') },
    { text: 'δεν είπα τίποτα', gloss: T('I said nothing') },
  ],
  tables: [
    {
      caption: T('Regular aorist'),
      head: ['Pronome', 'Singular', 'Plural'],
      rows: [
        ['1ª', 'μίλησα', 'μιλήσαμε'],
        ['2ª', 'μίλησες', 'μιλήσατε'],
        ['3ª', 'μίλησε', 'μίλησαν'],
      ],
    },
  ],
};
