import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('Relative pronouns'),
  subtitle: T('che, cui, il quale, dove'),
  section: T('The pronouns and the passive'),
  body: C(`## {Che}: the relative that does almost everything

{che} is **the commonest relative in Italian**: "il libro che leggo", "la luce che splende". It points to person or thing and **it does not change, neither in gender nor in number**. If the sentence is {le ragazze che studiano}, {che} does not turn feminine or plural. Anyone who inflects the Italian relative writes it wrong.

What matters most is what {che} does inside the clause: in {l’uomo che vedi è mio amico}, {che} is the subject of the relative clause. Compare {la casa che abito} (the house = subject) with {la casa che costruisco} (the house = object). Same word, different positions, and the translation changes: "the house I live in" and "the house I built".

## {Cui}: the relative that does not inflect

After a preposition, Italian almost always uses {cui} and not {che}: {l’uomo con cui parlo}, {il Dio a cui servo}. {cui} works for people and for things, and it too is invariable. And, like {che}, it can be subject or object: {la donna di cui parlavo}.

{cui} is **the form that sounds more literary and more biblical**. In John's text it is common to see {il Verbo che era presso di Dio} (πρὸς τὸν θεόν), and if a translator writes {il quale} where the Greek had {che}, the reader notices that the translation is more formal than the Greek.

## {Il quale}: the form that inflects

{il quale} is the formal relative and the only one that agrees with its antecedent: {il quale}, {la quale}, {i quali}, {le quali}. It is useful when there is a preposition or when the sentence needs weight: {la legge, la quale fu data da Mosè}. Portuguese would lose the gender; Italian keeps it.

{chi} can replace a human antecedent with generic sense: {chi crede}, "whoever believes". {dove} marks place, {la casa dove nacque}, and {donde} marks origin, {la terra donde venne}.

## Reading criterion

When you see {che}, ask whether the antecedent is subject or object of the relative clause, because the translation depends on it. When you see {cui} after a preposition, remember that it is the standard form and not a mistake. And {il quale} is the choice when the sentence is solemn; in plain text, forcing {il quale} sounds odd.`),
  vocab: [
    V('che', 'che', 'that, which'),
    V('cui', 'cui', 'to whom/which'),
    V('il quale', 'quale', 'which (formal)'),
    V('chi', 'chi', 'whoever'),
    V('dove', 'dove', 'where'),
    V('donde', 'donde', 'from where'),
    V('legge', 'leggere', 'reads'),
    V('splende', 'splendere', 'shines'),
    V('casa', 'casa', 'house'),
    V('uomo', 'uomo', 'man'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete: l’uomo con ___ parlo'),
    answer: 'cui',
    hint: T('It is a relative after a preposition.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Which relative completes: il libro ___ leggo?'),
      options: [T('che'), T('cui'), T('chi'), T('dove')],
      answer: 0,
    },
    {
      kind: 'choose',
      prompt: T('Which sentence uses il quale correctly?'),
      options: [
        T('La casa la quale abito.'),
        T('La casa in la quale abito.'),
        T('La casa dove abito.'),
        T('La casa cui abito.'),
      ],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Complete: Gesù, ___ abiti?'),
      answer: 'dove',
      hint: T('It marks place.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{Che} does not inflect: in {le ragazze che studiano} the relative stays {che}, with no gender and no number.',
      ),
    },
    {
      n: '2',
      text: T(
        '{Che} can be subject or object, and position decides: {la casa che abito} against {la casa che costruisco}.',
      ),
    },
    {
      n: '3',
      text: T(
        'After a preposition Italian uses {cui} and not {che}: {l’uomo con cui parlo}, {il Dio a cui servo}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Il quale} agrees with its antecedent: {il quale}, {la quale}, {i quali}, {le quali}.',
      ),
    },
    {
      n: '5',
      text: T(
        '{Dove} marks place, {donde} marks origin and {chi} marks person: {la casa dove nacque}, {la terra donde venne}.',
      ),
    },
  ],
  notes: [
    {
      label: T('The preposition does not vanish'),
      text: T(
        '{Il ragazzo di cui parlo}: the preposition {di} is obligatory, because {cui} is a relative and not a noun. Leaving the preposition out changes the whole relation and not just the grammar.',
      ),
    },
    {
      label: T('{Cui} is the form of John'),
      text: T(
        '{cui} sounds more literary and more biblical. In John’s text it is common to see {il Verbo che era presso di Dio} (πρὸς τὸν θεόν), and swapping {che} for {il quale} without need makes the translation look more formal than the Greek.',
      ),
    },
  ],
  examples: [
    { text: 'Il libro che leggo.', gloss: T('The book I read.') },
    { text: 'L’uomo che vedi è mio amico.', gloss: T('The man you see is my friend.') },
    { text: 'La casa che abito.', gloss: T('The house I live in.') },
    { text: 'La casa che costruisco.', gloss: T('The house I built.') },
    { text: 'L’uomo con cui parlo.', gloss: T('The man I speak with.') },
    { text: 'La legge, la quale fu data da Mosè.', gloss: T('The law, which was given by Moses.') },
    { text: 'Cerchi chi cerca, trova.', gloss: T('Whoever seeks, finds.') },
    { text: 'La casa dove nacque.', gloss: T('The house where he was born.') },
  ],
  tables: [
    {
      caption: T('Choosing the relative'),
      head: ['Contesto', 'Relativo'],
      rows: [
        ['senza preposizione', 'che'],
        ['dopo preposizione', 'cui'],
        ['formale e flessuibile', 'il quale'],
        ['luogo', 'dove'],
        ['origine', 'donde'],
        ['persona', 'chi'],
      ],
    },
    {
      caption: T('What {che} marks in the clause'),
      head: ['Frase', 'Funzione'],
      rows: [
        ['l’uomo che vedo', 'soggetto della relativa'],
        ['il libro che vedo', 'oggetto della relativa'],
        ['la casa che abito', 'abito nella casa'],
        ['la casa che costruisco', 'costruisco la casa'],
        ['l’amico di cui parlo', 'preposizione + relativo'],
        ['la casa dove nacque', 'luogo'],
      ],
    },
  ],
};
