import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  title: T('Where the adverb sits'),
  subtitle: T('parla lentamente; domani arrivo'),
  section: T('The adverb'),
  body: C(`## The adverb goes after the verb

The adverb of manner and of quantity sticks to the conjugated verb and comes before the object: "Maria parla *lentamente*", "gli studenti studiano *bene*", "Dio parla *fortemente*". The rule is so stable that inverting it sounds wrong even when the sentence is still comprehensible: *lentamente parla Maria* is poetically possible, but nobody talks like that.

Two cases fall outside that slot. An adverb that **quantifies** an adjective goes before it, as in "parla *molto* bene" and "è *troppo* bello". And an adverb that modifies the whole sentence rather than the action can also rise to the front, as long as it is connective: "*Quindi*, partiremo domani".

## Definite time and place can come first

The exception is adverbs of **definite time** and of **place**, which have no fixed slot: they can go before or after, and Italian prefers the front when the time or the place is the focus of the sentence. "*Domani* arrivo" and "Arrivo *domani*" are both correct. The same goes for "*Oggi* è nato", "*Qui* vivo", "*Là* andiamo", "*Sopra tutto*, è importante".

The contrast is the subtlest of all. *Oggi* as a determined time opens the sentence: "*Oggi* è il primo giorno". *Oggi* as an undetermined time, any day of this stretch, prefers the end: "si vive bene *oggi*".

## With the pronoun glued to the verb, the adverb goes last

Italian has pronouns that stick to the verb: {lo}, {la}, {li}, {le}, {ci}, {vi}, {mi}, {ti}, {ne}. Once the pronoun is in the sentence, the adverb cannot jump over it. The order is verb, pronoun, adverb: **Parlane bene.** *Lo so già.* *Ci andiamo domani.* *Ne ho parlato molto.* In the affirmative imperative the whole block joins: *Dammelo subito.*

The opposite exists too, and it is a choice of emphasis rather than a rule: "Parlane *davvero*" puts the adverb in the middle and sounds more pointed. The neutral position is still the one after.

## In the Bible

John 7:38 puts the adverb before the verb and, on top of that, lets the verb come before the subject: "Chi crede in me, {come dice la Scrittura}, dal suo ventre scorreranno fiumi d’acqua viva". The {come} is an adverb of comparison and precedes {dice}; {scorreranno} is a third plural with no subject in view, because the subject is in {chi crede in me}. A reader used to direct order stops and reads the sentence twice.

The Greek parallel uses a single particle, {ὡς}, which is at once "like" and the marker of the subordinate clause; Italian had to ask for an adverb and a verb.

## Reading criterion

Mark the adverb in a text and ask what it modifies: if it modifies the verb, it comes after; if it modifies an adjective, it comes before; if there is a pronoun glued to the verb, it comes after the pronoun. Outside those three cases the position is free.`),
  vocab: [
    V('lentamente', 'lentamente', 'slowly'),
    V('bene', 'bene', 'well'),
    V('molto', 'molto', 'very'),
    V('domani', 'domani', 'tomorrow'),
    V('oggi', 'oggi', 'today'),
    V('ieri', 'ieri', 'yesterday'),
    V('sempre', 'sempre', 'always'),
    V('già', 'già', 'already'),
    V('adesso', 'adesso', 'now'),
    V('quindi', 'quindi', 'therefore'),
    V('perciò', 'perciò', 'so'),
    V('tuttavia', 'tuttavia', 'nevertheless'),
    V('allora', 'allora', 'then'),
    V('veramente', 'veramente', 'really'),
    V('qui', 'qui', 'here'),
    V('là', 'là', 'there'),
    V('parlare', 'parlare', 'to speak'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence puts the adverb in the neutral slot?'),
    options: [
      T('Lentamente parla Maria.'),
      T('Maria parla lentamente.'),
      T('Maria lentamente parla.'),
      T('Parlava Maria lentamente.'),
    ],
    answer: 1,
    hint: T('An adverb of manner goes after the conjugated verb.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('In "Parlane bene", where is the adverb?'),
      options: [
        T('Before the pronoun ne'),
        T('After the pronoun ne'),
        T('At the start of the sentence'),
        T('In place of the verb'),
      ],
      answer: 1,
      hint: T('Verb, pronoun, adverb.'),
    },
    {
      kind: 'choose',
      prompt: T('Which adverb can open the sentence?'),
      options: [T('Quindi'), T('Molto'), T('Subito'), T('Senza')],
      answer: 0,
      hint: T('It is connective and modifies the whole sentence.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete: ___ arrivo (tomorrow)'),
      answer: 'Domani',
      hint: T('Definite time may precede the verb.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'An adverb of manner or quantity goes after the conjugated verb and before the object.',
      ),
    },
    { n: '2', text: T('Adverbs of definite time and of place may come before or after the verb.') },
    {
      n: '3',
      text: T(
        'With a pronoun glued to the verb the order is verb, pronoun, adverb: parla ne bene, lo so già.',
      ),
    },
    {
      n: '4',
      text: T(
        'An adverb quantifying an adjective goes before it: parla molto bene, è troppo bello.',
      ),
    },
    { n: '5', text: T('Connectives like quindi, perciò and tuttavia may open the sentence.') },
  ],
  notes: [
    {
      label: T('The clitic owns the queue'),
      text: T(
        'In {Parlane bene}, {ne} is the object and {bene} is the adverb. Portuguese would let the adverb move more freely; in Italian it waits for the pronoun, because the pronoun has stuck to the verb and formed one block with it.',
      ),
    },
    {
      label: T('The same adverb, two positions'),
      text: T(
        '{Oggi} as a determined time opens the sentence ("oggi è il primo giorno"); as an undetermined time, any day of this stretch, it goes to the end ("si vive bene oggi"). Position is what tells you which one was meant.',
      ),
    },
  ],
  examples: [
    { text: 'Maria parla lentamente.', gloss: T('Maria speaks slowly.') },
    { text: 'Parla molto bene.', gloss: T('He speaks very well.') },
    { text: 'Domani arrivo a Roma.', gloss: T('Tomorrow I arrive in Rome.') },
    { text: 'Oggi è nato un bambino.', gloss: T('Today a child was born.') },
    { text: 'Qui vivo da molti anni.', gloss: T('I have lived here for many years.') },
    { text: 'Lo so già.', gloss: T('I already know.') },
    { text: 'Ci andiamo domani.', gloss: T('We go there tomorrow.') },
    { text: 'Quindi, partiremo.', gloss: T('Therefore, we will leave.') },
    { text: 'Ne ho parlato molto.', gloss: T('I have spoken about it a lot.') },
  ],
  tables: [
    {
      caption: T('Posizione dell’avverbio'),
      head: ['Tipo', 'Dove va', 'Esempio'],
      rows: [
        ['modo', 'dopo il verbo', 'parla lentamente'],
        ['quantità', 'dopo il verbo', 'studio molto'],
        ['grado sull’aggettivo', 'prima dell’aggettivo', 'molto bello'],
        ['tempo determinato', 'prima o dopo', 'domani arrivo'],
        ['luogo', 'prima o dopo', 'qui vivo'],
        ['conettivo', 'inizio della frase', 'Quindi, partiremo'],
      ],
    },
    {
      caption: T('Verbo, pronome, avverbio'),
      head: ['Ordine', 'Frase'],
      rows: [
        ['verbo + pronome', 'Parlane.'],
        ['verbo + pronome + avverbio', 'Parlane bene.'],
        ['verbo + pronome + avverbio', 'Lo so già.'],
        ['verbo + pronome + avverbio', 'Ci andiamo domani.'],
        ['verbo + avverbio + pronome', 'Parlane davvero.'],
      ],
    },
  ],
};
