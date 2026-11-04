import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('Reading: John 1:1 (Indonesian)'),
  subtitle: T('Pada mulanya adalah Firman'),
  section: T('Readings'),
  body: C(`Read the text in three passes. First, notice the {yang} clauses: they are relative clauses that modify nouns. Second, follow the progression: {adalah Firman} → {bersama-sama dengan Allah} → {adalah Allah}. The repetition of {Firman itu} creates parallelism, a rhetorical feature of the verse.

TEXT
{Pada mulanya adalah Firman; Firman itu bersama-sama dengan Allah dan Firman itu adalah Allah.}

ANALYSIS
• {Pada mulanya}: {pada} “in,” {mula} “beginning,” and {-nya}, a definite form: “in the beginning.”
• {adalah}: “is”; in narrative it may be translated “was.” Unlike {ada} (“there is”), {adalah} normally classifies or identifies.
• {Firman}: “Word.” The TB capital marks the Logos, Christ. The noun may be replaced by a pronoun: in John 1:14, {dia} = “he,” resuming {Firman}.
• {bersama-sama dengan Allah}: {bersama} + {-sama} = “together with”; {dengan} “with.”
• {adalah Allah}: “is God.” Do not automatically turn the copula into “was”; TB preserves parallelism and the presentative force.

John 1:14: {Firman itu telah menjadi manusia}. {Telah} completes the event ({telah menjadi}); {manusia} indicates human nature, not merely an appearance.

Footnote 1 in some editions explains that {monotes} means “only/unique.” In John 1:14, {penuh kasih karunia dan kebenaran} combines divine nature and mission.`),
  vocab: [
    V('pada', 'pada', 'in, at, during'),
    V('mula', 'mula', 'beginning'),
    V('adalah', 'adalah', 'to be (identity)'),
    V('Firman', 'firman', 'Word'),
    V('itu', 'itu', 'that, those'),
    V('bersama-sama', 'sama', 'together with'),
    V('dengan', 'dengan', 'with'),
    V('menjadi', 'jadi', 'to become'),
    V('manusia', 'manusia', 'human, humanity'),
    V('monotes', 'monotes', 'only, unique'),
    V('kasih karunia', 'kasih karunia', 'grace'),
    V('kebenaran', 'benar', 'truth, faithfulness'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In the second clause, what does {itu} refer back to?'),
    options: [T('Allah'), T('Firman'), T('mulanya'), T('manusia')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the final line: “Firman itu adalah ___.”'),
      answer: 'Allah',
      hint: T('Proper name; keep the capital letter.'),
    },
    {
      kind: 'choose',
      prompt: T('How is {Firman itu telah menjadi manusia} naturally translated?'),
      options: [
        T('The Word became human.'),
        T('The Word is about to become human.'),
        T('The Word resembles a human.'),
        T('The Word is becoming human.'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{yang} can introduce a noun clause (“what”) or a relative clause; here it is relative: {Firman itu} = “that Word.”',
      ),
    },
    {
      n: '2',
      text: T(
        '{Itu} points back to something already mentioned. Placement before the noun head: {Firman} {itu} = “that Word.”',
      ),
    },
    {
      n: '3',
      text: T(
        '{-nya} can make a definite nominal phrase: {mula} → {mulanya}. Here the natural Spanish is “al comienzo.”',
      ),
    },
  ],
  notes: [
    {
      label: T('Translation labels'),
      text: T(
        'TB means Terjemahan Baru, a modern Indonesian Bible translation. Exact wording may vary by edition.',
      ),
    },
  ],
  examples: [
    { text: 'Pada mulanya adalah Firman.', gloss: T('In the beginning was the Word.') },
    { text: 'Firman itu bersama-sama dengan Allah.', gloss: T('The Word was with God.') },
    { text: 'Firman itu adalah Allah.', gloss: T('The Word was God.') },
  ],
  tables: [
    {
      caption: T('The parallelism of John 1:1'),
      head: ['Progressão', 'PT', 'ES'],
      rows: [
        ['1', T('The Word was'), T('with God')],
        ['2', T('The Word was'), T('God')],
      ],
    },
  ],
};
