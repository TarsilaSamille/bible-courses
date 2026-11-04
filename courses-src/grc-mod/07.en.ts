import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('Reading: John 1:1'),
  subtitle: T('Distinguish Demotic and Koine'),
  section: T('Readings'),
  body: C(`## Two translations, one verb

The best-known verse in Greek can be read two ways. The literal version, following the Byzantine text, reads **Ἐν ἀρχῇ ἦν ὁ λόγος** — "in the beginning was the Word". An updated translation swaps ἦν (was) for **ἦταν** (was/used to be), and the difference is not cosmetic: **ἦν** is the oldest form of εἰμί, the verb *to be* par excellence, with no defined tense and no beginning; **ἦταν** is the imperfect, marking continuous action and duration.

Neither is wrong. The choice says what the translator wants to stress: **ἦν** stresses the eternality of the Word, **ἦταν** stresses the action that goes on.

## What the text does not say

Greek does **not** say that God "became" the Word. All three statements use **ἦν** — was, was, was — and between them comes **πρὸς τὸν θεόν**, "with God". The word the text avoids is **ἐγένετο**, "came to be": the verb that introduces creation and Genesis. Translating "became flesh" (ἐγένετο σάρξ) renders a different verb from the three statements, and that is the difference between origin and identity.

## Anatomy of the verse

ἀρχή (the beginning), λόγος (from the family of λέγω, "to say", here **Word**), θεός (God), κόσμος (the world). Four familiar words arranged in a way only Greek allows. **Ἐν ἀρχῇ** with the dative is a fixed expression: "in the beginning", not "in a beginning".

## Reading criterion

At John 1:1, if your translation says "was" and someone else's says "was present", both are right. But there is something neither shows: identity, not comparison. The Word is not *like* God — the Word **was** God.`),
  vocab: [
    V('ἀρχή', 'ἀρχή', 'beginning'),
    V('ἦν', 'εἰμί', 'was'),
    V('ἦτο', 'εἰμί', 'was'),
    V('λόγος', 'λόγος', 'Word'),
    V('παρά', 'παρά', 'with'),
    V('Θεός', 'θεός', 'God'),
    V('ζωή', 'ζωή', 'life'),
    V('φῶς', 'φῶς', 'light'),
    V('ἐν', 'ἐν', 'in'),
    V('ήταν', 'είμαι', 'was (Demotic)'),
    V('κτίση', 'κτίσις', 'creation'),
    V('κτίζω', 'κτίζω', 'I create'),
    V('λέγω', 'λέγω', 'I say, to say'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the modern form of ἦν?'),
    options: [T('ήταν'), T('ἦν'), T('είναι'), T('ήμουν')],
    answer: 0,
  },
  exercises: [
    { kind: 'fill', prompt: T('Ἐν ___ ἦν ὁ λόγος'), answer: 'ἀρχῇ', hint: T('“In the beginning”') },
    {
      kind: 'choose',
      prompt: T('Which word means “Word”?'),
      options: [T('λόγος'), T('ἀρχή'), T('ζωή'), T('φῶς')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match form and stage'),
      pairs: [
        { a: 'ἦν', b: T('Koine') },
        { a: 'ήταν', b: T('modern') },
        { a: 'λόγος', b: T('Word') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [{ n: '§1', text: T('ἦν is Koine; ήταν is the Demotic form of that same past.') }],
  notes: [
    {
      label: T('Fidelity'),
      text: T(
        'Θεὸς ἦν ὁ λόγος uses “to be”, not κτίζω: John 1:1 does not present the Word as a creature.',
      ),
    },
  ],
  examples: [
    { text: 'Ἐν ἀρχῇ ἦν ὁ λόγος', gloss: T('In the beginning was the Word') },
    { text: 'Ἐν αρχή ήταν ο λόγος', gloss: T('In the beginning the Word was') },
  ],
  tables: [
    {
      caption: T('Koine and Demotic'),
      head: ['Función', 'Koiné', 'Moderno'],
      rows: [
        ['ser (3ª sg.)', 'ἦν', 'ήταν'],
        ['junto a', 'παρά + dativo', 'παρά + acusativo'],
        ['Artículo', 'ὁ λόγος', 'ο λόγος'],
      ],
    },
  ],
};
