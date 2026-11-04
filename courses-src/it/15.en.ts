import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  title: T('Reported speech'),
  subtitle: T('disse che sarebbe venuto'),
  section: T('Syntax and the noun'),
  body: C(`## Reported speech steps back in time

When somebody reproduces something that was said earlier, **the verbs step back**: present becomes imperfect, future becomes conditional, and the *passato prossimo* becomes *trapassato prossimo*. That is **the rule of reported speech**, and in Italian it has no exception.

{Dice che viene} ("he says he is coming") becomes {disse che veniva}. {Dice che verrà} ("he says he will come") becomes {disse che sarebbe venuto}. {Dice che è venuto} ("he says he came") becomes {disse che era venuto}. The conditional {sarebbe venuto} is the one that puzzles people: it is the future from the narrator’s point of view, and once reported it turns conditional. Anyone who writes "he said he will come" has got the tense wrong.

## When the congiuntivo survives

If the original clause is already in the congiuntivo, through doubt, purpose or hypothesis, reported speech usually keeps the congiuntivo. Sometimes there is an aspect signal too: {disse che sarebbe venuto} can mean "he said he might come", because {sarebbe} carries a doubt the narrator does not confirm.

Italian has a compound future ({vedrà}, {avrà visto}) and the *trapassato*, and in reported speech the two sometimes converge: {disse che sarebbe venuto} and {disse che era venuto} can stand in the same sentence, with a different shade of time.

## Questions and orders in reported speech

Indirect questions **keep the order of the direct question**, with no inversion: {Dove abiti?} becomes {domandò dove abitasse}. Note {abitasse}, which replaces the present {abiti}. And orders can use {di} plus the infinitive: {ordinò di uscire}, "he ordered them out".

In both cases what was a question or a command in the original becomes a declarative clause: there is no question mark any more and no main verb in the imperative. Translating {Dove abiti?} followed by {domandò} as "Where do you live? He asked" gets the structure wrong.

## Reading criterion

Whenever you see {disse che} followed by a verb that is not in the past, go back in time. And if the verb is conditional, {sarebbe}, {avrebbe}, {potrebbe}, it is almost always reported speech: reported future, or a doubt the narrator leaves open.`),
  vocab: [
    V('disse', 'dire', 'he said'),
    V('veniva', 'venire', 'was coming'),
    V('sarebbe venuto', 'venire', 'would come'),
    V('era venuto', 'venire', 'had come'),
    V('domandò', 'domandare', 'asked'),
    V('di uscire', 'uscire', 'to go out'),
    V('abitasse', 'abitare', 'lived'),
    V('ordinò', 'ordinare', 'ordered'),
    V('dica', 'dire', 'may say'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In reported speech, what does Dice che verrà become?'),
    options: [
      T('Disse che verrà'),
      T('Disse che sarebbe venuto'),
      T('Disse che viene'),
      T('Disse che venga'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Transform: dice che è venuto → disse che ___ venuto'),
      answer: 'era',
      hint: T('Present → trapassato prossimo.'),
    },
    {
      kind: 'choose',
      prompt: T('How does Dove abiti? become reported speech?'),
      options: [T('Dove abiti?'), T('dove abitasse'), T('dove abiterai'), T('che abiti')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Complete: Il maestro ordinò ___ uscire'),
      answer: 'di',
      hint: T('Order + di + infinitive.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'In reported speech the present becomes imperfect, the future becomes conditional and the *passato prossimo* becomes *trapassato prossimo*: {dice che viene} → {disse che veniva}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{Disse che sarebbe venuto} is the future from the narrator’s point of view; writing "he said he will come" gets the tense wrong.',
      ),
    },
    {
      n: '3',
      text: T(
        'If the original clause is already congiuntivo, reported speech keeps it: {disse che sarebbe venuto} can mean "he said he might come".',
      ),
    },
    {
      n: '4',
      text: T(
        'An indirect question keeps the direct order and uses the congiuntivo: {Dove abiti?} → {domandò dove abitasse}.',
      ),
    },
    {
      n: '5',
      text: T(
        'An indirect order uses {di} plus the infinitive: {ordinò di uscire}, and the imperative turns declarative.',
      ),
    },
  ],
  notes: [
    {
      label: T('{Che cosa} or {se}'),
      text: T(
        'A direct question turns indirect with two resources: {che} for the subject, {so che viene}, and {se} for everything else, {non so se viene}. The pronoun climbs too: {lo} becomes {che lo}, in {so che lo vedo}.',
      ),
    },
    {
      label: T('{Sarebbe} can be doubt'),
      text: T(
        'In the congiuntivo, {sarebbe} carries a doubt the narrator does not confirm, which is why many Italian renderings write "disse che forse sarebbe venuto". Reported future and conditional of doubt are one and the same form in Italian.',
      ),
    },
  ],
  examples: [
    { text: 'Gesù disse: «Verrò».', gloss: T('Jesus said: "I will come".') },
    { text: 'Disse che veniva.', gloss: T('He said he was coming.') },
    { text: 'Disse che sarebbe venuto.', gloss: T('He said he would come.') },
    { text: 'Disse che era venuto.', gloss: T('He said he had come.') },
    { text: 'Gli uomini dissero che sarebbe venuto.', gloss: T('The men said he would come.') },
    { text: 'Domandò dove abitasse.', gloss: T('He asked where he lived.') },
    { text: 'Ordinò di uscire.', gloss: T('He ordered them out.') },
    { text: 'Non so se viene.', gloss: T('I do not know whether he is coming.') },
  ],
  tables: [
    {
      caption: T('Discurso direto e indireto'),
      head: ['Frase diretta', 'Frase indiretta'],
      rows: [
        ['dice che viene', 'disse che veniva'],
        ['dice che verrà', 'disse che sarebbe venuto'],
        ['dice che è venuto', 'disse che era venuto'],
        ['Dove abiti?', 'domandò dove abitasse'],
        ['Esci di qui', 'ordinò di uscire'],
      ],
    },
    {
      caption: T('Conector da pergunta indireta'),
      head: ['Domanda', 'Nella indiretta'],
      rows: [
        ['so che viene', 'che (sujeito)'],
        ['so se viene', 'se (todo o resto)'],
        ['so chi viene', 'chi'],
        ['so dove abita', 'dove'],
        ['so quando arriva', 'quando'],
      ],
    },
  ],
};
