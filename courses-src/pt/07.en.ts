import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('Subjunctive and future subjunctive'),
  subtitle: T('fale, falares: wish and hypothesis'),
  section: T('The verb: the moods'),
  body: C(`## The subjunctive is the tense of what cannot be asserted

The present subjunctive appears in wish, doubt, purpose and certain subordinate clauses: {quero que fales}, {espero que venha}, {para que haja paz}, {não sei se vem}. It is not "the tense of unreality" as the name suggests: it is the tense of what the speaker **cannot assert**.

That is why {seja} and {venha} in the Lord's Prayer are not commands: they are communal wishes. "Hallowed be thy name" is a petition, and a petition is by definition something you want and do not yet have. Greek in Matthew 6:10 (ἐλθέτω) uses the same construction, and the subjunctive marks that the sentence is not a statement.

## The future subjunctive is Portuguese

The future subjunctive ({falares}, {vier}, {creres}) is a creation **of Portuguese** — Greek and Latin have no such form. It appears after when and if: {quando eu vier}, {se tu creres}, {assim que chegar}. And it expresses a future event that is not yet fact, but which the speaker considers certain enough to close the clause with it.

The temptation is to treat {quando eu vier} as a future indicative. It is not. The difference is commitment: {quando eu vier} is a condition the speaker takes on; {quando eu vim} is narration of the past. In biblical translation, ancient Greek (ὅταν + subjunctive) and biblical Portuguese (quando + futuro do subjuntivo) are the same thing, which is why the form survived.

## Para + infinitive: purpose without a subject

{para} followed by an infinitive can replace a purpose clause: {para crer}, {para conhecer}, {estou aqui para falar}. The difference from {para que} is that the infinitive has an understood subject — normally the same as the main clause. {Vou falar} and {Vou explicar para entender} share a subject across the two clauses.

That is what lets you translate Greek εἰς + infinitive ({ἐλθεῖν εἰς}) and the Hebrew purpose infinitive, without inventing a subject the text does not supply.

## Selection depends on the main verb

Not every main verb takes a subjunctive. {Quero que} requires one; {sei que} almost always requires the indicative ({sei que vem}), unless the information comes from someone else ({disseram que viria}). The list of governing verbs is closed, and that list decides, not the meaning of the sentence.

In Greek the parallel is the **optative** (ἐάν τις ἔλθῃ, ὄφρα, ὡς) and the subjunctive (ὅτι ζῇ, ἵνα). When the text is in the optative, Portuguese has to chain with "se" or "para que", and that is where a translation gains or loses the hypothesis.

## Reading criterion

With any subjunctive verb, ask: what governs the sentence — {quero}, {espero}, {para que}, {se}? Is it {se} or {quando} of the future subjunctive, a tense only Portuguese has? Does the {para} bring {que} or an infinitive? With those three answers the subjunctive is explained.`),
  vocab: [
    V('fale', 'falar', 'may you speak'),
    V('falares', 'falar', 'you will speak'),
    V('seja', 'ser', 'may it be'),
    V('tenha', 'ter', 'may you have'),
    V('venha', 'vir', 'may he come'),
    V('creres', 'crer', 'if you believe'),
    V('oxalá', 'oxalá', 'hopefully'),
    V('amém', 'amém', 'amen'),
    V('para', 'para', 'in order to'),
    V('crer', 'crer', 'to believe'),
    V('vir', 'vir', 'to come'),
    V('falar', 'falar', 'to speak'),
    V('quando', 'quando', 'when'),
    V('se', 'se', 'if'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Complete: “when you ___ (speak)”.'),
    options: [T('you speak'), T('you will speak'), T('you may speak'), T('they spoke')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: “Hallowed ___ your name”.'),
      answer: 'seja',
      hint: T('Subjunctive of ser.'),
    },
    {
      kind: 'choose',
      prompt: T('Which construction expresses purpose?'),
      options: [
        T('so that you come'),
        T('when you come'),
        T('because I believe'),
        T('if you come'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match conjunction and value.'),
      pairs: [
        { a: T('when'), b: T('future time') },
        { a: T('if'), b: T('hypothesis') },
        { a: T('so that'), b: T('purpose') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{quero que fales} and {espero que venha} take the subjunctive; {sei que vem} takes the indicative. What decides is not the sense of the clause but the verb in front: the list of verbs that govern the subjunctive is closed.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{não sei se vem} has {se} plus indicative, and {não sei se venha} has {se} plus subjunctive. The {se} is the clue: {se} followed by a verb the speaker cannot assert takes the subjunctive.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{quando eu vier}, {se tu creres} and {assim que chegar} use the future subjunctive, {falares}, {creres}, {chegar}. It is the form {quando} and {se} ask for when what has not happened yet is at issue, and ancient Greek (ὅταν plus subjunctive) says the same.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{se eu falasse} is the imperfect subjunctive and covers unreal hypothesis ({se falasse, viria}), while {se eu tivesse falado} is the pluperfect and says the hypothesis is earlier ({se tivesse falado, teria vindo}).',
      ),
    },
    {
      n: '§5',
      text: T(
        '{para crer} and {para que creia} are not synonyms: the infinitive after {para} has an understood subject, the same as the main clause, while {para que} brings the subjunctive and a subject of its own. {Vou falar para entender} has one subject; {Falo para que ele entenda} has two.',
      ),
    },
  ],
  notes: [
    {
      label: T('Careful'),
      text: T(
        'The future subjunctive ({falares}, {vier}, {creres}) is a Portuguese creation: Greek and Latin do not have that form. Where Greek says {ὅταν} plus aorist, biblical Portuguese says {quando} plus future subjunctive, and that is where the form survives.',
      ),
    },
    {
      label: T('The optative'),
      text: T(
        'Greek has a mood Portuguese does not have, the optative ({ὄφρα}, {ὡς}, {εἴ τις}). To say hypothesis with an optative, Portuguese has to chain {se} plus conditional, and that chain is what produces so many {se} in the Greek New Testament in Portuguese.',
      ),
    },
  ],
  examples: [
    { text: 'Quero que fales.', gloss: T('{quero que} governs the subjunctive.') },
    { text: 'Espero que venha a paz.', gloss: T('{espero que} plus subjunctive {venha}.') },
    { text: 'Sei que ele vem.', gloss: T('{sei que} governs the indicative.') },
    { text: 'Não sei se vem.', gloss: T('{se} plus indicative: doubt about the fact.') },
    { text: 'Não sei se venha.', gloss: T('{se} plus subjunctive: doubt about the coming.') },
    { text: 'Quando eu vier, te direi.', gloss: T('Future subjunctive {vier} with {quando}.') },
    {
      text: 'Se tu creres, terás a vida.',
      gloss: T('{creres} and {terás}: hypothesis and consequence.'),
    },
    { text: 'Se eu falasse, viria.', gloss: T('Imperfect subjunctive: unreal hypothesis.') },
    { text: 'Falo para que ele entenda.', gloss: T('{para que} brings a subject of its own.') },
  ],
  tables: [
    {
      caption: T('The three tenses of the subjunctive'),
      head: ['Tempo', 'Forma', 'Exemplo'],
      rows: [
        ['presente', 'fale', 'quero que fales'],
        ['futuro', 'falares', 'quando falares'],
        ['imperfeito', 'falasse', 'se falasse'],
      ],
    },
    {
      caption: T('The verb in front decides'),
      head: ['Verbo principal', 'Modo', 'Exemplo'],
      rows: [
        ['quero que', 'subjuntivo', 'quero que fales'],
        ['sei que', 'indicativo', 'sei que vem'],
        ['não sei se', 'qualquer dos dois', 'não sei se vem'],
      ],
    },
    {
      caption: T('{para} with and without {que}'),
      head: ['Forma', 'Sujeito', 'Exemplo'],
      rows: [
        ['para + infinitivo', 'o mesmo da principal', 'para crer'],
        ['para que + subjuntivo', 'próprio', 'para que creia'],
      ],
    },
  ],
};
