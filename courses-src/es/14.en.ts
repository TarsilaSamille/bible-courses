import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  title: T('{ser} and {estar}'),
  subtitle: T('essence × state — the famous pair'),
  section: T('Verbs'),
  body: C(`## {ser} = identity

{ser} answers **who it is**: identity, origin, time, matter, profession. Forms: {soy}, {eres}, {es}, {somos}, {sois}, {son}.

{I am a Christian} · {It is of God} · {It is three o'clock} · {It was written} (passive!).

## {estar} = state

{estar} answers **how or where it is**: place, physical state, action in progress. Forms: {estoy}, {estás}, {está}, {estamos}, {estáis}, {están}.

{I am here} · {It stands written} (state!) · {They are praying} · {He is tired}.

## Four decisions

1. **Identity × profession**: {Es médico} "he is a doctor", never {Está médico}.
2. **Material × state**: {Es de madera} vs {Está mojado}.
3. **Place**: always {estar} — except scheduled events: {La reunión es en Madrid} "the meeting is in Madrid".
4. **Action in progress**: {estar} + gerund ({está hablando}) or {estar} + {a} + infinitive ({está a punto de} is a different idea).

## The door to the passive

{ser} + participle = **passive voice** ({fue creado}) · {estar} + participle = **state** ({está cerrado} "it is closed"). Chapter 20 returns to this.

## Theology in two words

{ Dios es amor} "God **is** love" (1 John 4:8) vs {Dios está con nosotros} "God **is** with us" (1 John 4:16: the unity, for the Spirit is among us). The choice of verb carries the theology.

Ex.: {¿Dónde estás?} "where art thou?" (Gen 3:9).`),
  vocab: [
    V('soy', 'ser', 'I am (essence!)'),
    V('estoy', 'estar', 'I am (state!)'),
    V('es', 'ser', 'is (essence!)'),
    V('está', 'estar', 'is (state!)'),
    V('Son las tres', 'ser', "it's three o'clock"),
    V('están orando', 'estar', 'they are praying (gerund!)'),
    V('es', 'ser', 'is (1 John 4:8)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"Dios es amor" vs "Dios está con nosotros"?'),
    options: [
      T('Same'),
      T('Essence (ser!) vs presence/state (estar!)'),
      T('The opposite'),
      T('Error'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: "Son las ___" (it is three o\'clock)'),
      answer: 'tres',
      hint: T('Time is matter: always ser.'),
    },
    {
      kind: 'choose',
      prompt: T('"La casa ___ en Madrid." Which verb?'),
      options: [T('{es}'), T('{está}'), T('{son}'), T('{están}')],
      answer: 1,
      hint: T('Rule §2: place = estar.'),
    },
    {
      kind: 'match',
      prompt: T('Match the sentence to the right verb'),
      pairs: [
        { a: T('{Dios es amor}'), b: T('ser (essence)') },
        { a: T('{La puerta está cerrada}'), b: T('estar (state!)') },
        { a: T('{Fue escrito}'), b: T('ser (passive!)') },
        { a: T('{Están orando}'), b: T('estar (gerund!)') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Ser = identity, origin, time, matter. Estar = place, state, ongoing action.'),
    },
    {
      n: '2',
      text: T(
        'Ser + participle forms passive (fue escrito); estar + participle marks state (está cerrado).',
      ),
    },
    { n: '3', text: T('Places and states take estar; scheduled events take ser.') },
  ],
  notes: [
    {
      label: T('One adjective, two verbs'),
      text: T(
        'The choice between {ser} and {estar} is not about meaning but about state: {es aburrido} diagnoses, {está aburrido} observes. With {ser} + {-ado} the value is permanent; with {estar} it is temporary.',
      ),
    },
  ],
  examples: [
    { text: '{Dios es amor}', gloss: T('God is love — essence! (1 John 4:8).') },
    { text: '{Dios está con nosotros}', gloss: T('God is with us — presence!') },
    { text: '¿Dónde estás?}', gloss: T('Where art thou? (Gen 3:9).') },
    { text: '{Están orando}', gloss: T('They are praying (action in progress).') },
  ],
  tables: [
    {
      caption: T('Table 1 — ser × estar'),
      head: [T('Person'), T('ser (essence!)'), T('estar (state!)')],
      rows: [
        ['yo', '{soy}', '{estoy}'],
        ['tú', '{eres}', '{estás}'],
        ['él/ella/usted', '{es}', '{está}'],
        ['nosotros', '{somos}', '{estamos}'],
        ['vosotros', '{sois}', '{estáis}'],
        ['ellos/ustedes', '{son}', '{están}'],
      ],
    },
    {
      caption: T('Table 2 — What each verb asks for'),
      head: [T('Question'), T('Verb'), T('Example')],
      rows: [
        [T('Who is it?'), '{ser}', '{Es el Hijo}'],
        [T('What is it made of?'), '{ser}', '{La mesa es de madera}'],
        [T('What time is it?'), '{ser}', '{Son las tres}'],
        [T('Where is it?'), '{estar}', '{Está en la casa}'],
        [T('How is it?'), '{estar}', '{Está enfermo}'],
        [T('What is happening?'), '{estar}', '{Están orando}'],
      ],
    },
  ],
};
