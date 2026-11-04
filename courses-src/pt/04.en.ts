import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('Past: perfect and imperfect'),
  subtitle: T('falou × falava: event and scene'),
  section: T('The verb: form and tense'),
  body: C(`## Fact and scene: the two lights of the past

Portuguese talks about the past with two verbs that have different jobs. The **perfect** presents the past as a bounded event: {falou}, {partiu}, {houve}, {chegou}. The **imperfect** presents a scene, a habit or a state in progress: {falava}, {partia}, {havia}, {morava}. When both appear in one sentence, the text gains narrative: {enquanto ele falava, o anjo entrou}.

The image that works: the imperfect is the set, the perfect is what happens on it. {Chovia quando saímos} has the same design as {enquanto pregava, veio o anjo} — circumstance in the imperfect, event in the perfect.

And this has to be said carefully: the distinction is not the same as Greek. Ancient Greek has the aorist (εἶπε, spoke once) and the imperfect (ἐλάλου, was speaking), and biblical Portuguese rendered the aorist with the perfect. But ancient Greek also used the imperfect for habitual action and the aorist for repeated action, without the translation always distinguishing. Reading the translation as if it were a mechanical correspondence loses what the Greek had.

## The pluperfect: the past that has passed

The **pluperfect** ({tinha dito}, {havia chegado}) marks a past action as earlier than another past action. It only exists when there are two pasts, and it is what lets you say {quando ele chegou, eu já tinha saído} without ambiguity.

It is a more formal tense, common in historical and long narrative texts, and rare in speech. In biblical translation it shows up where Greek had a pluperfect (ἐτύγχανε, "had met"), and translating it as {tinha encontrado} is usually better than {encontrou}.

## John 1:1: was, and nothing more

In John 1:1, {era} (ἦν) is imperfect in Greek, and the imperfect describes continuous existence. The sentence contrasts two times on purpose: the Word was with God, and everything that exists was created afterwards, in the time that begins at Genesis 1:1. The Greek verb of creation is {ἐγένετο} ({foi}, perfect), and that is why the contrast is {era} against {foi}.

Translating both as {era} erases the contrast; translating {ἦν} as {existia} and {ἐγένετο} as {foi} shows what the Greek is doing. The Almeida rendering gets it right by using {era} for {ἦν} and {foi} for {ἐγένετο} — but the reading that concludes every Greek imperfect means "eternal" is wrong, because Greek also used the imperfect for what is simply continuous.

## Reading criterion

In any past-tense sentence, ask: is the verb bounded (perfect) or in progress (imperfect)? Is there a pluperfect, the past of the past? And is the original Greek in the aorist, the imperfect or the perfect — three things Portuguese sometimes renders with the same word? The answer is the difference between reading a text and translating a text.`),
  vocab: [
    V('falou', 'falar', 'he spoke (perfect)'),
    V('falava', 'falar', 'he spoke (imperfect)'),
    V('era', 'ser', 'he was'),
    V('foi', 'ser', 'he was'),
    V('disse', 'dizer', 'he said'),
    V('havia', 'haver', 'there was'),
    V('tinha', 'ter', 'he had'),
    V('haviam', 'haver', 'they had'),
    V('partiu', 'partir', 'he departed (perfect)'),
    V('partia', 'partir', 'he was departing (imperfect)'),
    V('houve', 'haver', 'there was (perfect)'),
    V('Verbo', 'Verbo', 'the Word (Logos)'),
    V('Jesus', 'Jesus', 'Jesus'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In “Jesus spoke with them”, the verb is:'),
    options: [T('imperfect'), T('perfect'), T('future'), T('infinitive')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: “In the beginning, ___ the Word”.'),
      answer: 'era',
      hint: T('Imperfect form of ser.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence presents a single event?'),
      options: [
        T('The crowd was shouting.'),
        T('Jesus said: “I have come”.'),
        T('Love remained.'),
        T('We were waiting.'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Match form to value.'),
      pairs: [
        { a: T('said'), b: T('event') },
        { a: T('argued'), b: T('scene in progress') },
        { a: T('had said'), b: T('prior past') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'The perfect is the past as a bounded event: {falou}, {partiu}, {houve}. The imperfect is a scene, a habit or a state in progress: {falava}, {partia}, {havia}. In one sentence, the imperfect is the set and the perfect is what happens on it.',
      ),
    },
    {
      n: '§2',
      text: T(
        'The pluperfect ({tinha dito}, {havia chegado}) exists only with two pasts, and it is what says that one of them comes before the other: {quando ele chegou, eu já tinha saído}.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{ἦν} ({era}) is imperfect and {ἐγένετο} ({foi}) is aorist: the verse contrasts what never began with what began, and rendering both as {era} flattens the contrast with Genesis 1:1.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Ancient Greek used the imperfect for simple continuation too, and the aorist for repeated action. Saying that every Greek imperfect means “eternal” settles John 1:1 and breaks John 3:16, where {creram} is an imperfect of habit.',
      ),
    },
    {
      n: '§5',
      text: T(
        '{enquanto ele falava, o anjo entrou} has both tenses in one sentence: {falava} is circumstance ({ἐλάλου}) and {entrou} is event ({εἶσελθεν}). That pair is what gives the sentence its narrative.',
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical translation'),
      text: T(
        '{Era} in John 1:1 preserves the Greek contrast between the time of the Logos and creation, but it does not alone prove a Portuguese tense: {era} in Portuguese also covers habitual past.',
      ),
    },
    {
      label: T('Where Greek helps'),
      text: T(
        'Where Greek had a pluperfect ({ἐτύγχανε}, “had met”), {tinha encontrado} is better than {encontrou}: only Portuguese keeps the {tinha} that says the meeting came first.',
      ),
    },
  ],
  examples: [
    {
      text: 'No princípio era o Verbo.',
      gloss: T('{ἦν}: continued existence, the time of the Logos.'),
    },
    { text: 'E todas as coisas foram feitas por ele.', gloss: T('{ἐγένετο}: aorist, what began.') },
    {
      text: 'Deus disse: “Haja luz”; e houve luz.',
      gloss: T('Two punctual perfects in sequence.'),
    },
    {
      text: 'Enquanto ele falava, o anjo entrou.',
      gloss: T('Imperfect of setting and perfect of event.'),
    },
    {
      text: 'Muitos creram naquilo.',
      gloss: T('{creram} is an imperfect of habit, not of event.'),
    },
    { text: 'Jesus falava com eles.', gloss: T('Imperfect describing what customarily happened.') },
    {
      text: 'Quando ele chegou, eu já tinha saído.',
      gloss: T('Two pasts: the pluperfect marks the earlier one.'),
    },
    { text: 'A multidão gritava.', gloss: T('Scene in progress, with an effect of duration.') },
    {
      text: 'A lei foi dada por Moisés.',
      gloss: T('Perfect: an event with the agent expressed by {por}.'),
    },
  ],
  tables: [
    {
      caption: T('The three past tenses'),
      head: ['Tempo', 'Forma', 'Exemplo'],
      rows: [
        ['perfeito', 'falou', 'Deus falou'],
        ['imperfeito', 'falava', 'Jesus falava'],
        ['mais-que-perfeito', 'tinha falado', 'eu já tinha saído'],
      ],
    },
    {
      caption: T('Perfect and imperfect in the same Greek'),
      head: ['Grego', 'Tempo', 'Português'],
      rows: [
        ['ἦν', 'imperfecto', 'era'],
        ['ἐγένετο', 'aoristo', 'foi'],
        ['ἐλάλου', 'imperfecto', 'falava'],
      ],
    },
    {
      caption: T('One sentence with both tenses'),
      head: ['Tempo', 'Trecho', 'O que faz'],
      rows: [
        ['imperfeito', 'enquanto ele falava', 'circunstância'],
        ['perfeito', 'o anjo entrou', 'evento'],
      ],
    },
  ],
};
