import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  title: T('Reflexive pronouns'),
  subtitle: T('me/te/se — to wash, to repent'),
  section: T('Pronouns'),
  body: C(`## The pronoun set

The reflexive pronoun mirrors the subject: {me}, {te}, {se}, {nos}, {os}, {se}.

{me lavo} "I wash myself" · {te levantas} "you get up" · {se lava} "he washes" · {nos amamos} "we love each other" · {os laváis}.

When the subject is third person ({él}, {ella}, {usted}, {ellos}, {ustedes}), the pronoun is always {se}: {se arrepintió} "he repented" · {Se fueron} "they left".

## Reflexive vs reciprocal

**Reflexive**: each actor acts on himself · {Me miro al espejo} "I look at myself in the mirror".
**Reciprocal**: two or more exchange actions · {se aman} "they love each other" · {se escribían} "they wrote to each other" · {Se abrazaron} "they hugged each other".

The clue is the **plural** of the verb or noun; context decides.

## Always-reflexive verbs

Some verbs **never** appear without {se}: {arrepentirse} · {quejarse} · {atreverse} · {acostumbrarse} · {darse cuenta} — {¡Vete!} "go away!".

## The {se} that changes meaning

• {dormir} "to sleep" vs {dormirse} "to fall asleep"
• {ir} "to go" vs {irse} "to leave"
• {parecer} "to seem" vs {parecerse} "to resemble" — {Se parece a su padre}
• {sentar} "to sit" vs {sentarse} "to sit down"
• {despertar} "to wake up" vs {despertarse}

Biblical: {Venga tu reino} "thy kingdom come" · {Tuyos son los cielos} "the heavens are yours" — the reflexive is understood in the address to God.`),
  vocab: [
    V('me lavo', 'lavarse', 'I wash myself'),
    V('se arrepintió', 'arrepentirse', 'he repented'),
    V('se aman', 'amarse', 'they love each other'),
    V('dormirse', 'dormirse', 'fall asleep (≠ sleep!)'),
    V('Vete', 'irse', 'go away!'),
    V('se parece a su padre', 'parecerse', 'he resembles his father'),
    V('Se fueron', 'irse', 'they left (3rd person!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"dormir" vs "dormirse"?'),
    options: [
      T('Same'),
      T('Sleep vs fall asleep (reflexive shifts meaning!)'),
      T('Present × past'),
      T('I × he'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the reflexive: "ellos ___ fueron" (they left)'),
      answer: 'se',
      hint: T('Rule §1: 3rd person = se.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is RECIPROCAL?'),
      options: [
        T('Se miraron en el espejo'),
        T('Se abrazaron al verse'),
        T('Se lava las manos'),
        T('Se arrepintió del pecado'),
      ],
      answer: 1,
      hint: T('Rule §2: reciprocal = two agents exchange actions.'),
    },
    {
      kind: 'match',
      prompt: T('Match the verb to its meaning with se'),
      pairs: [
        { a: T('{ir}'), b: T('to go') },
        { a: T('{irse}'), b: T('to leave') },
        { a: T('{parecer}'), b: T('to seem') },
        { a: T('{parecerse}'), b: T('to resemble') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The pronoun mirrors the subject: me, te, se, nos, os, se. In 3rd person it is always se.',
      ),
    },
    {
      n: '2',
      text: T('Reciprocal = actions exchanged among several people: se aman, se escribían.'),
    },
    {
      n: '3',
      text: T('Some verbs are always reflexive: arrepentirse, quejarse, atreverse, irse.'),
    },
    { n: '4', text: T("The reflexive can shift the verb's meaning: dormir/dormirse, ir/irse.") },
  ],
  notes: [
    {
      label: T('Reflexive or reciprocal'),
      text: T(
        '{se} is reflexive when one agent acts on himself and reciprocal when two or more exchange actions: {se miran} (each other) against {se mira} (himself). The number of the verb tells you which.',
      ),
    },
  ],
  examples: [
    { text: '{se arrepintió}', gloss: T('He repented (always-reflexive verb).') },
    { text: '{se aman}', gloss: T('They love each other (reciprocal).') },
    { text: '{Vete}', gloss: T('Go away! (irse + pronoun).') },
    { text: '{Se parece a su padre}', gloss: T('He resembles his father (parecer vs parecerse).') },
  ],
  tables: [
    {
      caption: T('Table 1 — Reflexive paradigm'),
      head: [T('Subject'), T('Pronoun'), T('Example')],
      rows: [
        ['yo', '{me}', '{me lavo}'],
        ['tú', '{te}', '{te levantas}'],
        ['él/ella/usted', '{se}', '{se lava}'],
        ['nosotros', '{nos}', '{nos amamos}'],
        ['vosotros', '{os}', '{os laváis}'],
        ['ellos/ustedes', '{se}', '{Se fueron}'],
      ],
    },
    {
      caption: T('Table 2 — Verbs that shift with se'),
      head: [T('Without se'), T('Meaning A'), T('With se'), T('Meaning B')],
      rows: [
        ['{dormir}', T('to sleep'), '{dormirse}', T('to fall asleep')],
        ['{ir}', T('to go'), '{irse}', T('to leave')],
        ['{parecer}', T('to seem'), '{parecerse}', T('to resemble')],
        ['{despertar}', T('to wake (someone)'), '{despertarse}', T('to wake up')],
      ],
    },
  ],
};
