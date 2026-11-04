import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('Imperfetto and passato prossimo'),
  subtitle: T('parlava × ha parlato'),
  section: T('The tenses of the verb'),
  body: C(`## Two pasts, two jobs

Italian speaks of the past with two verbs that do different work: the *imperfetto* **sets the stage**, and the *passato prossimo* reports the event. The imperfetto is age, state, habit and action in progress: {aveva venticinque anni}, {vivevano a Roma}, {parlava}. The *passato prossimo* is the bounded event: {venne l’angelo}, {ha parlato}, {abbiamo mangiato}.

The image that works is a stage: the imperfetto is the scenery, and the *passato prossimo* is what happens on it. In a single sentence the two together make the narrative; without both, the text goes flat.

## How the imperfetto is formed

In the {-are} group the imperfetto **keeps the stem of the present**: {parlare} → {parlavo}, {parlavi}, {parlava}, {parlavamo}, {parlavate}, {parlavano}. The same in {credere} → {credevo} and {finire} → {finivo}. {Essere} and {avere} are irregular: {ero}, {eri}, {era}, {eravamo}, {eravate}, {erano}, and {avevo}, {avevi}, {aveva}, {avevamo}, {avevate}, {avevano}.

Notice that the imperfetto has no separate form for {io}: the {-o} is the same as in the present, and it is the ending that does the work. That is why {parlavo} can be "I was speaking" or, in a rare register, "I shall speak", and the temporal reading comes from the context.

## The pair that defines the scene

{Mentra pregava, venne l’angelo} **is the example that separates the two tenses**. The scenery verb stays in the imperfetto, the event in the *passato prossimo*. {Pioveva quando siamo usciti} shows the same structure with {quando}: circumstance in the imperfetto, event in the *passato prossimo*.

This is where translation is lost. Greek distinguishes what happened now and then from what happened always; Italian uses the imperfetto for both, and a translator has to decide by the grammar of the context and not by instinct.

## In the Bible

{La luce era} expresses continuous existence: the light was there, with no marked beginning. {La luce fu}, in the parallel of Genesis, presents the punctual result of the command: the light came to be. It is the same difference as between {disse} and {fu scritto}, now between two pasts.

If your translation uses "was" in both places, it lost the distinction Italian makes. And if it uses "existed" in one and "was" in the other, it is right: that is the difference the narrative runs on.

## Reading criterion

Whenever you see {mentra}, {quando} or {finché} next to a past-tense verb, ask which of the two is scenery and which is event. What stands in the *passato prossimo* is what happened; what stands in the imperfetto is the backdrop.`),
  vocab: [
    V('parlava', 'parlare', 'was speaking'),
    V('credevo', 'credere', 'believed'),
    V('finivo', 'finire', 'was finishing'),
    V('ero', 'essere', 'was'),
    V('avevo', 'avere', 'had'),
    V('pioveva', 'piovere', 'was raining'),
    V('mentra', 'mentra', 'while'),
    V('quando', 'quando', 'when'),
    V('pregava', 'pregare', 'was praying'),
    V('venne', 'venire', 'came'),
    V('usciti', 'uscire', 'gone out'),
    V('vivevano', 'vivere', 'were living'),
    V('luce', 'luce', 'light'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which are the imperfects of essere and avere?'),
    options: [T('era / aveva'), T('ero / avevo'), T('sarei / avrei'), T('sia / abbia')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: quando ___ (piovere, io, imperf.)'),
      answer: 'pioveva',
      hint: T('3rd person of the imperfetto.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence reports a scene in progress?'),
      options: [
        T('Mentre pregava, venne l’angelo.'),
        T('Ho pregato e l’angelo è venuto.'),
        T('Prego e l’angelo viene.'),
        T('Pregherò quando verrà.'),
      ],
      answer: 0,
    },
    {
      kind: 'fill',
      prompt: T('Complete: sono arrivat_ ieri'),
      answer: 'i',
      hint: T('Noi: sono + plural participle.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The imperfetto sets the stage and the *passato prossimo* reports the event: {parlava} and {venne}.',
      ),
    },
    {
      n: '2',
      text: T(
        'In the {-are} group the imperfetto keeps the stem of the present: {parlare} → {parlavo}, {parlavi}, {parlava}, {parlavamo}.',
      ),
    },
    {
      n: '3',
      text: T(
        '{Essere} and {avere} are irregular: {ero}, {era}, {eravamo}, {erano} and {avevo}, {aveva}, {avevamo}, {avevano}.',
      ),
    },
    {
      n: '4',
      text: T(
        'The imperfetto has no form of its own for {io}, so {parlavo} can also be "I shall speak" in a rare register.',
      ),
    },
    {
      n: '5',
      text: T(
        'With {mentra} and {quando} the circumstance goes in the imperfetto and the event in the *passato prossimo*: {mentra pregava, venne l’angelo}.',
      ),
    },
  ],
  notes: [
    {
      label: T('The imperfetto steps back'),
      text: T(
        '{Da tre anni studio} is what goes on; {ho studiato tre anni} is what is already over. The difference is one of point of view and not of time: the same person studying makes both sentences true at once.',
      ),
    },
    {
      label: T('The pair is translated together'),
      text: T(
        '{Mentre pregava, venne l’angelo} is a sentence only in Italian. Rendering both verbs with the same tense in Portuguese hides the distinction Italian makes with conviction, and the reader loses the sense that something interrupted the scene.',
      ),
    },
  ],
  examples: [
    { text: 'Mentra pregava, venne l’angelo.', gloss: T('While he prayed, the angel came.') },
    { text: 'Pioveva quando siamo usciti.', gloss: T('It was raining when we went out.') },
    { text: 'Gesù camminava sul mare.', gloss: T('Jesus was walking on the sea.') },
    { text: 'I discepoli ebbero paura.', gloss: T('The disciples were afraid.') },
    { text: 'Maria leggeva la Scrittura.', gloss: T('Mary was reading the Scriptures.') },
    { text: 'Le donne erano in giardino.', gloss: T('The women were in the garden.') },
    { text: 'Aveva venticinque anni.', gloss: T('He was twenty-five.') },
    { text: 'Era la luce nel mondo.', gloss: T('The light was in the world.') },
  ],
  tables: [
    {
      caption: T('Imperfetto di parlare'),
      head: ['Persona', '-are', '-ere', '-ire', 'irregolari'],
      rows: [
        ['io', 'parlavo', 'credevo', 'finivo', 'ero, avevo'],
        ['tu', 'parlavi', 'credevi', 'finivi', 'eri, avevi'],
        ['lui/lei', 'parlava', 'credeva', 'finiva', 'era, aveva'],
        ['noi', 'parlavamo', 'credevamo', 'finivamo', 'eravamo, avevamo'],
        ['voi', 'parlavate', 'credevate', 'finivate', 'eravate, avevate'],
        ['loro', 'parlavano', 'credevano', 'finivano', 'erano, avevano'],
      ],
    },
    {
      caption: T('Scene and event'),
      head: ['Frase', 'Imperfetto', 'Passato prossimo'],
      rows: [
        ['mentra pregava, venne l’angelo', 'pregava', 'venne'],
        ['pioveva quando siamo usciti', 'pioveva', 'siamo usciti'],
        ['la luce era nel mondo', 'era', '—'],
        ['la luce fu creata', '—', 'fu'],
      ],
    },
  ],
};
