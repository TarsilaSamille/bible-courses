import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  title: T('The passive voice'),
  subtitle: T('fue escrito — se venden casas'),
  section: T('Verbs'),
  body: C(`## Two passives, not one

Spanish resolves the passive in two ways: with {ser} (events, documents, death) and with {se} (everyday processes, natural phenomena).

**A. {ser} + participle** — the classical, solemn passive of document and Gospel.

{fue escrito} "was written" · {es amado} "is loved" · {será salvado} "will be saved" · {fue crucificado} "was crucified".

The participle **agrees** with the subject: {fueron escritas} "were written".

The agent comes in with {por}: {escrito por Dios} "written by God" · {purificado por la sangre de Cristo} (Heb 9:14).

**B. {se} + verb** — the circumstantial passive, impersonal or natural: {se venden casas} "houses are sold" · {se habla español} "Spanish is spoken" · {se hace todo} "everything is done".

Here the verb **agrees with the noun**: {se venden} (plural!) · {se habla español} (singular, because {español} is singular). It is the same mechanism as Brazilian Portuguese.

## Telling passive {se} from reflexive {se}

The test is the **presence of an indirect object or an explicit agent**:

• Reflexive: {El niño se lava} "the boy washes himself"; {se arrepintió} "he repented".
• Passive: {Se escribió una carta} "a letter was written" — the subject acts, but the object is the patient.
• With pronouns {me, te, se}, if they mark the person who performs the action it is reflexive; if they mark the thing affected, it is impersonal.

## Biblical summary

{fue traspasado} "he was pierced" (John 19:37) · {fueron hallados} "were found".

The early church used almost only the first type: {ser} + participle, with the agent expressed by {por}.`),
  vocab: [
    V('fue escrito', 'escribir', 'was written'),
    V('será salvado', 'salvar', 'will be saved'),
    V('fue crucificado', 'crucificar', 'was crucified'),
    V('se venden', 'vender', 'are sold'),
    V('se arrepintió', 'arrepentirse', 'he repented'),
    V('fue traspasado', 'traspasar', 'he was pierced (John 19:37)'),
    V('por Dios', 'por', 'by God (agent!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In "se venden casas", what agrees?'),
    options: [
      T('With "casas" (plural)'),
      T('Always singular'),
      T('With the agent'),
      T('With nothing'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Passive with ser: "___ was written" (it was written)'),
      answer: 'Esto',
      hint: T('Rule §1: the subject comes before the verb.'),
    },
    {
      kind: 'choose',
      prompt: T('In "se escribe una carta", the construction is…'),
      options: [
        T('reflexive'),
        T('passive with se (the subject is not the patient!)'),
        T('impersonal'),
        T('An error'),
      ],
      answer: 1,
      hint: T('Rule §3: who acts? who is acted upon?'),
    },
    {
      kind: 'match',
      prompt: T('Match the passive to its type'),
      pairs: [
        { a: T('{fue escrito}'), b: T('ser + participle (solemn)') },
        { a: T('{se venden casas}'), b: T('se + verb (everyday)') },
        { a: T('{fue crucificado}'), b: T('the participle agrees (masc.!)') },
        { a: T('{se arrepintió}'), b: T('reflexive se (not passive!)') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'ser + participle = agentive passive; the participle agrees with the subject: fueron escritas.',
      ),
    },
    { n: '2', text: T('The agent of the agentive passive comes with por: escrito por Dios.') },
    {
      n: '3',
      text: T('se + verb = impersonal passive; the verb agrees with the noun: se venden casas.'),
    },
    {
      n: '4',
      text: T(
        'se + pronoun (me, te, se) shows the action falls on the person: se lava, se arrepintió.',
      ),
    },
  ],
  notes: [
    {
      label: T('{ser} + participle'),
      text: T(
        'Two constructions get confused: {fue escrito} (passive, no agent) and {fue escrito por Dios} (explicit agent). The {por} is what separates result from authorship.',
      ),
    },
  ],
  examples: [
    { text: '{fue escrito}', gloss: T('Was written (agentive passive).') },
    { text: '{se venden casas}', gloss: T('Houses are sold (plural verb!).') },
    { text: '{fue traspasado}', gloss: T('He was pierced (John 19:37).') },
    { text: '{se arrepintió}', gloss: T('He repented (reflexive, not passive!).') },
  ],
  tables: [
    {
      caption: T('Table 1 — The two passives'),
      head: [T('Type'), T('Structure'), T('Agreement'), T('Example')],
      rows: [
        [T('agentive passive'), '{ser} + particípio', T('participle ~ subject'), '{fue escrito}'],
        [T('impersonal passive'), '{se} + verbo', T('verb ~ noun'), '{se venden casas}'],
        [T('reflexive'), '{se} + verbo + objeto indireto', T('verb = subject'), '{se arrepintió}'],
      ],
    },
    {
      caption: T('Table 2 — Most used irregular participles'),
      head: [T('Infinitive'), T('Gerund'), T('Participle')],
      rows: [
        ['{escribir}', '{escribiendo}', '{escrito}'],
        ['{hacer}', '{haciendo}', '{hecho}'],
        ['{decir}', '{diciendo}', '{dicho}'],
        ['{ver}', '{viendo}', '{visto}'],
        ['{leer}', '{leyendo}', '{leído}'],
        ['{crucificar}', '{crucificando}', '{crucificado}'],
        ['{morir}', '{muriendo}', '{muerto}'],
        ['{abrir}', '{abriendo}', '{abierto}'],
      ],
    },
  ],
};
