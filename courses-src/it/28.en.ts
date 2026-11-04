import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  title: T('Reading: the letter to the Romans'),
  subtitle: T('Vi esorto dunque; però questo non'),
  section: T('Reading and syntax'),
  body: C(`## Greek carries the particles; Italian does not

Paul writes in Greek, and Greek keeps particles that have no one-to-one translation. **{γάρ}** explains, **{δέ}** opposes, **{οὖν}** concludes, **{μέν}** and **{δέ}** together form a pair. Those words sit in the margin of the Greek text marking the architecture of the sentence, and none of them is content: they are position.

Italian has none of this. Where Greek has {οὖν}, Italian writes {dunque} or {perciò} or {quindi}, three words for one idea. Where Greek has {γάρ}, it writes {poiché}, {infatti} or {siccome}. Where Greek has {δέ}, Italian writes {ma}, {e} or {anzi}, and Greek itself uses {δέ} for {e}, which makes the correspondence even less mechanical.

## What Italian gains and what it loses

Italian sometimes **distinguishes** what Greek joined: {però} is not {ma}, {infatti} is not {poiché}, {tuttavia} is not {benché}. The Italian rendering gained nuances that Greek did not have, and that is a real gain, which a reader coming from Portuguese also enjoys.

What it lost were emphases of chain. In Greek, three {οὖν} in a row show that the reasoning is deductive; in Italian, three {dunque} in a letter give an impression of style, not of logic. In exchange, nobody misses it: Portuguese has no particles either, so that loss is from Greek into Italian, not from Italian to the reader.

## Romans 12:1-2, read from the inside

«{Vi esorto dunque}, fratelli, per la compassione di Dio, a offrire i vostri corpi come sacrificio vivente, santo, gradito a Dio. E {non conformatevi} a questo mondo, ma {trasformatevi}, {rinnovando} il vostro modo di pensare.»

The {dunque} at the start comes from an {οὖν}, and it is not decorative: it links the letter to the decisions the earlier chapters have already taken. The {ma} in the second verse translates a {δέ}, and Greek opposes two prohibitions to one command: do not be like this world, but be transformed. The {rinnovando} is a gerund, and {rinnovando il vostro modo di pensare} does both jobs: it names the means of the verb {trasformatevi} and names the means itself, which is the {modo di pensare}. That {di pensare} is a genitive, the same mechanism as {il libro di Paolo}.

{Compassione di Dio} is another genitive, {di} plus a noun with no article. And {questo mondo} takes an article because {questo} is demonstrative; without it, {mondo} would be just any world.

## Reading criterion

A translator coming from Greek has to choose: render the particles and write a heavier, more faithful text, or drop them and write lighter Italian. What does not work is rendering them all as {perché}, which is the commonest error and the hardest to notice afterwards.`),
  vocab: [
    V('dunque', 'dunque', 'therefore'),
    V('perciò', 'perciò', 'so'),
    V('quindi', 'quindi', 'therefore'),
    V('però', 'però', 'however'),
    V('infatti', 'infatti', 'in fact'),
    V('poiché', 'poiché', 'since'),
    V('anzi', 'anzi', 'rather'),
    V('tuttavia', 'tuttavia', 'nevertheless'),
    V('corpi', 'corpo', 'bodies'),
    V('sacrificio', 'sacrificio', 'sacrifice'),
    V('mondo', 'mondo', 'world'),
    V('rinnovando', 'rinnovare', 'renewing'),
    V('trasformatevi', 'trasformare', 'be transformed'),
    V('conformatevi', 'conformare', 'conform'),
    V('compassione', 'compassione', 'compassion'),
    V('pensare', 'pensare', 'to think'),
    V('fratelli', 'fratello', 'brothers'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which Italian word renders the οὖν of Romans 12:1?'),
    options: [T('poiché'), T('dunque'), T('benché'), T('sebbene')],
    answer: 1,
    hint: T('Οὖν concludes and links back to what has been said.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: Vi esorto ___, fratelli (therefore)'),
      answer: 'dunque',
      hint: T('It is the conclusion of the earlier reasoning.'),
    },
    {
      kind: 'choose',
      prompt: T('Which Italian word best renders the explanatory γάρ?'),
      options: [T('infatti'), T('benché'), T('anzi'), T('ossia')],
      answer: 0,
      hint: T('γάρ gives the reason.'),
    },
    {
      kind: 'choose',
      prompt: T('In "rinnovando il vostro modo di pensare", what is "di pensare"?'),
      options: [
        T('A conjugated verb'),
        T('A genitive'),
        T('An isolated preposition'),
        T('A numeral'),
      ],
      answer: 1,
      hint: T('It is the noun that explains the nature of the way of thinking.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Greek uses particles of position (γάρ, δέ, οὖν, μέν) that Italian does not render word for word.',
      ),
    },
    { n: '2', text: T('Italian offers three words where Greek had one: dunque, perciò, quindi.') },
    {
      n: '3',
      text: T(
        'Italian sometimes distinguishes more than Greek does: però, infatti, tuttavia, anzi.',
      ),
    },
    {
      n: '4',
      text: T('What is lost is the chain of conclusions (οὖν), not the sense of each clause.'),
    },
    {
      n: '5',
      text: T('Every Italian genitive is di plus a noun with no article: la compassione di Dio.'),
    },
  ],
  notes: [
    {
      label: T('What changes for a reader coming from Portuguese'),
      text: T(
        'A reader of Portuguese feels no lack of {γάρ} or {οὖν}, because Portuguese has none either. The real difference is another: the Italian text sounds looser than it is. Where Greek alternated different particles, Italian repeated the same word three times.',
      ),
    },
    {
      label: T('When fidelity is worth it'),
      text: T(
        'In academic translations it is common to see Italian keep the distinction: {poiché} for cause, {infatti} for explanation, {perciò} for conclusion. That is not an obligation, it is a choice of style, and in a biblical text it helps the reader see where the reasoning changes direction.',
      ),
    },
  ],
  examples: [
    { text: 'Vi esorto dunque, fratelli.', gloss: T('I appeal to you therefore, brothers.') },
    {
      text: 'E non conformatevi a questo mondo.',
      gloss: T('And do not be conformed to this world.'),
    },
    { text: 'Ma trasformatevi.', gloss: T('But be transformed.') },
    {
      text: 'Rinnovando il vostro modo di pensare.',
      gloss: T('By renewing your way of thinking.'),
    },
    { text: 'Per la compassione di Dio.', gloss: T('By the compassion of God.') },
    {
      text: 'Per quelli che amano Dio tutte le cose cooperano al bene.',
      gloss: T('For those who love God, all things work together for good.'),
    },
    { text: 'Il giudizio è di Cristo.', gloss: T('The judgment is Christ’s.') },
    { text: 'Non giudicare per le apparenze.', gloss: T('Do not judge by appearances.') },
  ],
  tables: [
    {
      caption: T('Partículas del griego y el italiano'),
      head: ['Greco', 'Funzione', 'Italiano', 'Che cosa si perde'],
      rows: [
        ['{γάρ}', 'spiega', 'poiché, infatti', 'la explicación se vuelve causa'],
        ['{οὖν}', 'conclude', 'dunque, perciò, quindi', 'la cadena del razonamiento'],
        ['{δέ}', 'oppone o suma', 'ma, e, anzi', 'el mismo δέ hace las dos'],
        ['{μέν}', 'primero del par', '—', 'casi siempre desaparece'],
        ['{γε}', 'por lo menos', 'almeno', 'queda dentro de la oración'],
        ['{οὐ}, {μή}', 'niega', 'non', 'el griego niega en tres sitios'],
      ],
    },
    {
      caption: T('Romanos 12:1-2, por líneas'),
      head: ['Línea', 'Greco', 'Italiano', 'Glosa'],
      rows: [
        ['1', '{παρακαλῶ οὖν}', '{vi esorto dunque}', 'os ruego pues'],
        ['1', '{τὰ σώματα}', '{i vostri corpi}', 'vuestros cuerpos'],
        ['1', '{θυσίαν ζῶσαν}', '{sacrificio vivente}', 'sacrificio vivo'],
        ['2', '{μὴ συσχηματίζεσθε}', '{non conformatevi}', 'no os conforméis'],
        ['2', '{μεταμορφοῦσθε}', '{trasformatevi}', 'transformaos'],
        ['2', '{ἀνανεοῦσθαι}', '{rinnovando}', 'renovando'],
      ],
    },
  ],
};
