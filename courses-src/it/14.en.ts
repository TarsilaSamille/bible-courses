import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  title: T('The passive voice'),
  subtitle: T('fu scritto; si vendono case'),
  section: T('The pronouns and the passive'),
  body: C(`## Two passives, and only one is the one you know

The classical passive, literary and biblical, uses {essere} plus a participle: {Il Vangelo fu scritto}, "the Gospel was written". **The participle agrees with the subject**, {Cristo fu crocifisso}, {le parole furono scritte}, and the agent, if it comes, comes with {da}: {fu scritto da Giovanni}.

Notice that the classical passive conjugated {essere} in the past: {fu}, {furono}. It is the same construction as the *passato prossimo*, {fu scritto} works like {è stato scritto}, with one difference: the focus here is the result. The writing is done, and the effect stays.

## {Si} plus a pronominal verb: the everyday one

In everyday Italian the passive is {si} plus a pronominal verb: {Si vendono case}, "houses are sold", {Si parla italiano}. **The verb now agrees with the subject of the sentence**: {le case si vendono}, {i libri si leggono}, {le donne si incontrano}.

This is where a lot of translation goes wrong. {Si vendono case} does not mean that houses sell each other: the {si} **here is a passive particle**, and the sentence means the world sells houses. Rendering {si} as "themselves" creates an ambiguity a native speaker does not feel.

## Not every {si} is passive

In {si lava}, "he washes himself", {si} is a reflexive pronoun. The difference: if {si} comes before a direct transitive verb and the subject performs the action on itself, it is reflexive, {si lava le mani}, "he washes his own hands"; if the sense is passive, it is a particle, {si vendono case}.

Context decides. {Maria si è vestita} can be "Maria dressed" or "Maria was dressed" by someone else. The ambiguity is real, and speakers settle it with information they have: the speaker knows whether she dressed herself.

## In the Bible

In biblical texts {fu scritto} focuses the result: the writing happened and the effect remains. {Scrisse} and {aveva scritto} report the scribe’s action, who wrote, when and with what effort. In a gospel, the choice between {fu scritto} and {scrisse} moves the point of view: the first speaks about the text, the second about the scribe.

## Reading criterion

If the sentence has {essere} plus a participle, it is the classical passive: look for {da} to find the agent. If it has {si} plus a verb, ask whether {si} is reflexive or a passive particle, and the answer lies in who performs the action.`),
  vocab: [
    V('fu scritto', 'scrivere', 'was written'),
    V('sarà salvato', 'salvare', 'will be saved'),
    V('fu crocifisso', 'crocifiggere', 'was crucified'),
    V('si vendono', 'vendere', 'are sold'),
    V('si dice', 'dire', 'is said'),
    V('si lava', 'lavarsi', 'washes himself'),
    V('si parla', 'parlare', 'is spoken'),
    V('essere', 'essere', 'to be'),
    V('partecipio', 'partecipio', 'participle'),
    V('Vangelo', 'Vangelo', 'Gospel'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In si vendono case, what does the verb agree with?'),
    options: [T('With case'), T('Always in the singular'), T('With the agent'), T('With si')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: Il Vangelo fu ___ (scrivere)'),
      answer: 'scritto',
      hint: T('Irregular participle.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is reflexive?'),
      options: [
        T('Si parla italiano.'),
        T('Maria si lava.'),
        T('Si vendono case.'),
        T('Si dice la verità.'),
      ],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Agree the participle: le parole fu___ scritte'),
      answer: 'rono',
      hint: T('Essere + plural participle.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The classical passive is {essere} plus a participle, and the participle agrees with the subject: {fu scritto}, {le parole furono scritte}.',
      ),
    },
    {
      n: '2',
      text: T('The agent comes in with {da}: {fu scritto da Giovanni}, {fu dato da Mosè}.'),
    },
    {
      n: '3',
      text: T(
        'The {si} passive makes the verb agree with the subject: {si vendono case}, {le case si vendono}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Si} is reflexive when the action falls on the subject ({si lava}) and a particle when the sense is passive ({si vendono case}).',
      ),
    },
    {
      n: '5',
      text: T(
        '{Maria si è vestita} allows both readings: reflexive, "she dressed", or passive, "she was dressed".',
      ),
    },
  ],
  notes: [
    {
      label: T('La passiva con essere'),
      text: T(
        'The Italian passive changes auxiliary according to movement: {è amato} and {è andato} take {essere}, {è stato scritto} takes {avere}. What counts is whether the subject performs the action or only undergoes it.',
      ),
    },
    {
      label: T('The result, not the action'),
      text: T(
        '{fu scritto} focuses the result: the writing happened and the effect remains. {Scrisse} and {aveva scritto} report the scribe’s action, who wrote, when and with what effort. In a gospel the choice between the two moves the point of view.',
      ),
    },
  ],
  examples: [
    { text: 'Il Vangelo fu scritto.', gloss: T('The Gospel was written.') },
    { text: 'La legge fu scritta da Mosè.', gloss: T('The law was written by Moses.') },
    { text: 'Cristo fu crocifisso.', gloss: T('Christ was crucified.') },
    { text: 'Si vendono case.', gloss: T('Houses are sold.') },
    { text: 'Le case si vendono.', gloss: T('The houses are sold.') },
    { text: 'Si parla italiano.', gloss: T('Italian is spoken.') },
    { text: 'Maria si è vestita.', gloss: T('Maria dressed.') },
    { text: 'Lui si lava le mani.', gloss: T('He washes his own hands.') },
  ],
  tables: [
    {
      caption: T('Due costruzioni'),
      head: ['Struttura', 'Esempio', 'Evidenza'],
      rows: [
        ['essere + participio', 'fu scritto', 'il risultato'],
        ['si + verbo', 'si vendono case', 'l’azione'],
      ],
    },
    {
      caption: T('Il participio concorda con il soggetto'),
      head: ['Frase', 'Participio', 'Soggetto'],
      rows: [
        ['Il Vangelo fu scritto', 'scritto', 'maschile singolare'],
        ['Le parole furono scritte', 'scritte', 'femminile plurale'],
        ['I libri furono scritti', 'scritti', 'maschile plurale'],
        ['Le ragazze sono partite', 'partite', 'femminile plurale'],
      ],
    },
  ],
};
