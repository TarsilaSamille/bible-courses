import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  title: T('Interrogative pronouns'),
  subtitle: T('¿qué? ¿quién? ¿cuál? — with accent!'),
  section: T('Pronouns'),
  body: C(`## The accent is the signature

Every Spanish interrogative is **stressed** and therefore **always accented**, unlike the relative: {¿qué?} vs {que} · {¿quién?} vs {quien} · {¿cuál?} vs {cual} · {¿cuándo?}, {¿dónde?}, {¿cómo?}, {¿cuánto?}.

The same holds in **indirect** questions: {No sé qué quiere} "I don't know what he wants" · {Dime dónde está}.

## {por qué} vs {porque}

The question is **split** and accented: {¿Por qué?} "why?"
The answer is **joined** and unaccented: {Porque} · {porque Dios lo hizo así} "because God did it so".

When {porque} means "in order that" with the subjunctive, it is also joined: {Lo hizo porque viniera}.

## Which interrogative for what?

{¿Quién?} people: {¿Quién es?} (Matt 16:15) · {¿Quién dices que soy?}.
{¿Qué?} things, ideas, identity: {¿Qué es esto?} · {¿Qué es la verdad?} (John 18:38).
{¿Cuál?} choice: {¿Cuál quieres?} · {¿Cuál de los dos?} · {¿Cuál es tu nombre?}.

**{¿Cuál?} + {ser} = identity** (the name), **{¿Qué?} + {ser} = definition** (the nature): {¿Cuál es tu nombre?} vs {¿Qué es Dios?}.

## The ¿…? frame

The question opens with {¿} and closes with {?}, and the subject stays **after** the verb (no English inversion):

{¿Dónde moras?} (John 1:38) · {¿Por qué lloras?} (John 20:13) · {¿Qué buscáis?} (John 1:38) · {¿Puede Dios perdónar?}

The same word in an affirmative sense loses the marks: {Dios es amor}.

## European vs American

The frame is identical. What changes is vocabulary: Spain uses {vosotros} in plural questions, America {ustedes}. In spoken Latin American Spanish the tag question {¿no?}, {¿verdad?} "right?" is very common, and Portuguese has the same habit.`),
  vocab: [
    V('qué', 'qué', 'what? (accented!)'),
    V('quién', 'quién', 'who? (accented!)'),
    V('cuál', 'cuál', 'which?'),
    V('por qué', 'por qué', 'why? (split!)'),
    V('porque', 'porque', 'because (answer!)'),
    V('dónde', 'dónde', 'where?'),
    V('cuánto', 'cuánto', 'how much?'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"¿por qué?" vs "porque"?'),
    options: [
      T('Same'),
      T('Question (split!) vs answer (together!)'),
      T('The opposite'),
      T('Error'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: "¿___ es la verdad?" (what is truth? John 18:38)'),
      answer: 'Qué',
      hint: T('Definition of nature = qué.'),
    },
    {
      kind: 'choose',
      prompt: T("How do you ask someone's NAME?"),
      options: [
        T('¿Qué es tu nombre?'),
        T('¿Cuál es tu nombre?'),
        T('¿Quién es tu nombre?'),
        T('¿Dónde es tu nombre?'),
      ],
      answer: 1,
      hint: T('Rule §3: cuál + ser = identity.'),
    },
    {
      kind: 'match',
      prompt: T('Match the interrogative to its use'),
      pairs: [
        { a: T('{¿Quién?}'), b: T('people') },
        { a: T('{¿Qué?}'), b: T('things and identity') },
        { a: T('{¿Cuál?}'), b: T('choice') },
        { a: T('{¿Por qué?}'), b: T('cause (question, split)') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Interrogatives always take an accent; relatives never do: ¿qué? × que, ¿quién? × quien.',
      ),
    },
    { n: '2', text: T('¿Por qué? is the question, split; porque is the answer, joined.') },
    { n: '3', text: T('Quién = person; qué = thing or definition; cuál = choice or identity.') },
    {
      n: '4',
      text: T('The question opens with ¿ and closes with ?; the subject stays after the verb.'),
    },
  ],
  notes: [
    {
      label: T('The stressed one in questions'),
      text: T(
        'The accented {qué}, {quién}, {cuál} is the stressed one — pronoun or noun. In {¿Qué es esto?}, {qué} is a pronoun: "what". In {¿Qué libro es?} it is a noun.',
      ),
    },
  ],
  examples: [
    { text: '¿Dónde moras?}', gloss: T('Where do you dwell? (John 1:38).') },
    { text: '¿Qué es la verdad?}', gloss: T('What is truth? (John 18:38 — Pilate).') },
    { text: '{¿Quién dices que soy?}', gloss: T('Whom do you say that I am? (Matt 16:15).') },
    { text: '{porque Dios lo hizo así}', gloss: T('Because God did it so (answer, joined!).') },
  ],
  tables: [
    {
      caption: T('Table 1 — Interrogatives'),
      head: [T('Word'), T('Translation'), T('Used for'), T('Example')],
      rows: [
        ['{qué}', T('what?'), T('identity, thing'), '{¿Qué es esto?}'],
        ['{quién}', T('who?'), T('person'), '{¿Quién es?}'],
        ['{cuál}', T('which?'), T('choice'), '{¿Cuál quieres?}'],
        ['{cuándo}', T('when?'), T('time'), '{¿Cuándo vendrás?}'],
        ['{dónde}', T('where?'), T('place'), '{¿Dónde moras?}'],
        ['{cómo}', T('how?'), T('manner'), '{¿Cómo lo harás?}'],
        ['{por qué}', T('why?'), T('cause'), '{¿Por qué lloras?}'],
        ['{cuánto}', T('how much?'), T('quantity'), '{¿Cuánto tiempo?}'],
      ],
    },
    {
      caption: T('Table 2 — qué × cuál'),
      head: [T('Question'), T('Answer'), T('Type')],
      rows: [
        ['{¿Qué es Dios?}', T('God is a spirit'), T('definition (nature)')],
        ['{¿Cuál es tu nombre?}', T('My name is John'), T('identity')],
        ['{¿Qué libro lees?}', T('The book of Revelation'), T('a specific thing')],
        ['{¿Cuál libro lees?}', T('John, or Romans?'), T('choice')],
      ],
    },
  ],
};
