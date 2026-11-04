import { C, T, V } from '../shared.mts';

export default {
  id: 34,
  title: T('The main clause'),
  subtitle: T('flexible order, vanishing subject — John 1:1'),
  section: T('Syntax'),
  body: C(`## The skeleton: subject + verb

Every clause has a **verb**; the subject is the term the verb carries along, and therefore may **vanish**: {Oro} = {Yo oro} "I pray" · {Oramos} "we pray" · {Habla Dios} "God speaks".

The verb already carries person, number and (most of the time) tense, mood and aspect.

## The order is flexible

The neutral order is **SVO**, but Spanish allows any element to be moved to the front for emphasis:

• Verb first (verb focus): {Vino Jesús} "Jesus came".
• Object first (object focus): {A Dios oramos} "to God we pray" · {El Hijo amo, y no yo} (1 John 4:9).
• Adverbial first (scene-setting): {En el principio era el Verbo} (John 1:1) · {Cuando vio, lloró}.

What never changes is the **subject–verb** relation: if the subject comes after, it takes the pronoun: {Existe un Dios} "there is a God".

## Negation

{no} goes **before** the verb and before any pronoun: {No creo} · {No te veo} · {No hay} · {No lo sé}.

Two negatives are impossible: {*No no creo} is wrong.

## The question

Intonation alone suffices: {¿Vienes?} "are you coming?".

With a question word the order is **not** inverted: {¿Dónde moras?} — the subject stays after the verb, exactly as in the affirmative.

Colloquial exception: {¿Vienes tú?}, with a contrastive subject.

## Reading John 1:1–2 (Reina-Valera 1960)

{En} {el principio} {era} {el Verbo}, {y} {el Verbo} {era} {con Dios}...

1. {En el principio} — temporal adjunct first: **scene-setting**.
2. {era} — {ser} in the 3rd singular **imperfect**: description, not a single event.
3. {el Verbo} — postposed subject, marked by the **definite article** {el}: uniqueness.
4. The verb is **imperfect**, not preterite: the Word already *was* when the story began counting.
5. {y el Verbo era con Dios} — {y} only links; the structure repeats like a refrain.

The shortest clause of the chapter — {Y el Verbo era Dios} (John 1:1) — is the same skeleton: subject {el Verbo} + {era} + predicate {Dios}.`),
  vocab: [
    V('oro', 'orar', 'I pray (no "yo"!)'),
    V('No creo', 'creer', "I don't believe"),
    V('No hay', 'haber', 'there is not'),
    V('Vino Jesús', 'venir', 'came Jesus (verb first!)'),
    V('el Verbo', 'verbo', 'the Word (definite article!)'),
    V('En el principio', 'principio', 'in the beginning (John 1:1)'),
    V('era con Dios', 'ser', 'was with God (John 1:1)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Why does "Oro" skip "yo"?'),
    options: [
      T('Error'),
      T('Verb carries person (subject vanishes!)'),
      T('Only poetry'),
      T('Future'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Where does "no" go in the negative?'),
      options: [
        T('After the verb'),
        T('Before the verb and the pronouns'),
        T('At the end'),
        T('Anywhere'),
      ],
      answer: 1,
      hint: T('Rule §3: no always comes before the verb.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete John 1:1: "En el principio ___ el Verbo" (was)'),
      answer: 'era',
      hint: T('Rule §5: the tense here is the imperfect (scene).'),
    },
    {
      kind: 'match',
      prompt: T('Match the function to the example'),
      pairs: [
        { a: T('elided subject'), b: T('{Oro}') },
        { a: T('verb first'), b: T('{Vino Jesús}') },
        { a: T('scene-setting'), b: T('{En el principio}') },
        { a: T('negation'), b: T('{No creo}') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The subject can be dropped because the verb already identifies it: Oro, Habla Dios.',
      ),
    },
    { n: '2', text: T('SVO is neutral, but any element can be moved up for emphasis.') },
    {
      n: '3',
      text: T('Negation no always comes before the verb and pronouns: no te veo, no lo sé.'),
    },
    {
      n: '4',
      text: T(
        'In a question with a Q-word there is no inversion: ¿Dónde moras? has the same skeleton as the affirmative.',
      ),
    },
    {
      n: '5',
      text: T(
        'The imperfect with ser and estar describes state: era, estaba — the tense of narrative background.',
      ),
    },
  ],
  notes: [
    {
      label: T('Subject, verb, complement'),
      text: T(
        "The main clause is exactly that. What complicates reading is that the verb can sit in the middle: {A Dios oramos} inverts the order without changing any word's role.",
      ),
    },
  ],
  examples: [
    {
      text: '{En el principio era el Verbo}',
      gloss: T('In the beginning was the Word (John 1:1 — adjunct + verb + subject).'),
    },
    { text: '{Oro}', gloss: T('I pray (the subject yo has vanished).') },
    { text: '{No lo sé}', gloss: T("I don't know (negation + clitic pronoun).") },
    {
      text: '{¿Dónde moras?}',
      gloss: T('Where do you dwell? (question without inversion; John 1:38).'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — Order of elements'),
      head: [T('Pattern'), T('Example'), T('Effect')],
      rows: [
        ['SVO', '{Dios ama al mundo}', T('neutral')],
        ['SVO (sujeito omitido)', '{Ama al mundo}', T('elided subject')],
        ['Verbo + sujeito', '{Vino Jesús}', T('verb focus')],
        ['Objeto + verbo + sujeito', '{Al mundo lo amó Dios}', T('object focus')],
        ['Adjunto + verbo + sujeito', '{En el principio era el Verbo}', T('scene')],
      ],
    },
    {
      caption: T('Table 2 — Analysis of John 1:1-2'),
      head: [T('Word'), T('Function'), T('Note')],
      rows: [
        ['{En el principio}', T('temporal adjunct'), T('opens the verse')],
        ['{era}', T('verb (imperfect)'), T('description, not event')],
        ['{el Verbo}', T('postposed subject'), T('def. article: uniqueness')],
        ['{con Dios}', T('complement'), T('preposition + personal a')],
        ['{y el Verbo}', T('coordination'), T('y only links clauses')],
      ],
    },
  ],
};
