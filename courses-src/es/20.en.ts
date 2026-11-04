import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  title: T('The subjunctive'),
  subtitle: T('hable, coma — I want THAT…'),
  section: T('Verbs'),
  body: C(`## What triggers the subjunctive

The subjunctive appears when the speaker **wills, wishes, doubts or commands**: {Quiero que hable} "I want him to speak" · {No creo que sea así} "I don't think it is so" · {Es necesario que vengas} · {ojalá} "hopefully" (from Arabic!) · {para que} · {antes de que}.

## Formation is a vowel swap

In the present, the theme vowel is swapped for the **closed-vowel {e}/{a}**:

{-ar} → {-e}: {hable}, {hables}, {hable}, {hablemos}, {hablen}.
{-er}/{-ir} → {-a}: {coma}, {comas}, {coma}, {comamos}, {coman} · {viva}, {tenga}, {sea}, {vaya}.

{sea} (from {ser}) is the form that dominates the biblical text, exactly because of the Genesis commands: {Sea la luz} "let there be light".

## The past of the subjunctive

After a verb in the past, the subjunctive uses the **imperfect subjunctive**, with two synonymous forms: {-ra} and {-se}.

{Quería que hablaras} = {Quería que hablase} "I wanted him to speak".
{Como si hubieras venido} "as if you had come".

## Points to watch

1. After {ojalá}, {a no ser que}, {con tal de que} — always subjunctive.
2. {Para que} with the **same** subject may take the indicative; with a different subject the subjunctive is required: {Te lo digo para que vengas} "I tell you so that you may come".
3. Subjunctive with conditional force: {quien quiera, que venga}.

## Pronouns and word order

Pronouns come **before** the verb: {Dios te ama} "God loves you" · {se lo dio} "he gave it to him".

Biblical: {Santificado sea tu nombre} "hallowed be thy name" · {Venga tu reino} "thy kingdom come" (Matt 6:10).`),
  vocab: [
    V('hable', 'hablar', 'speak (subj.)'),
    V('sea', 'ser', 'be (subj.)'),
    V('vaya', 'ir', 'go (subj.)'),
    V('tenga', 'tener', 'have (subj.)'),
    V('ojalá', 'ojalá', 'hopefully'),
    V('hablaras', 'hablar', 'you spoke (imp. subj.!)'),
    V('venga', 'venir', 'may he come (subj.)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete: "Santificado ___ tu nombre"'),
    answer: 'sea',
    hint: T('Subjunctive of "ser".'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: "Quiero que ___ (hablar)" (I want him to speak)'),
      answer: 'hable',
      hint: T('Rule §2: -ar takes -e in the subjunctive.'),
    },
    {
      kind: 'choose',
      prompt: T('Which verb is irregular in the present subjunctive?'),
      options: [
        T('{hablar} → {hable}'),
        T('{ir} → {vaya}'),
        T('{comer} → {coma}'),
        T('{cantar} → {cante}'),
      ],
      answer: 1,
      hint: T('Rule §2: irregulars do not follow the swap.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete the past subjunctive: "Quería que ___ (hablar)"'),
      answer: 'hablase',
      hint: T('Rule §3: -ara or -ase (two equivalent forms).'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Subjunctive always follows wish, doubt and command triggers: quiero que, ojalá, para que.',
      ),
    },
    { n: '2', text: T('The vowel swap applies to regular verbs: -ar → -e, -er/-ir → -a.') },
    {
      n: '3',
      text: T('Imperfect subjunctive (hablara/hablase) follows a past verb: Quería que hablaras.'),
    },
    {
      n: '4',
      text: T(
        'With cuando, a certain future takes the future; an uncertain one takes the subjunctive.',
      ),
    },
  ],
  notes: [
    {
      label: T('Three values, one form'),
      text: T(
        'The subjunctive appears in wish ({quiero que vengas}), doubt ({no creo que sea}) and command ({que venga}). In Genesis 1, {Sea la luz} is a command — the oldest use of the pattern in the New Testament.',
      ),
    },
  ],
  examples: [
    { text: '{Santificado sea tu nombre}', gloss: T('Hallowed be thy name ({sea}!).') },
    { text: '{Venga tu reino}', gloss: T('Thy kingdom come (Matt 6:10).') },
    { text: '{se lo dio}', gloss: T('He gave it to him (double pronoun!).') },
    { text: '{Ojalá venga}', gloss: T('Hopefully he may come (wish + subjunctive).') },
  ],
  tables: [
    {
      caption: T('Table 1 — Present subjunctive'),
      head: [T('Person'), T('-ar → -e'), T('-er/-ir → -a')],
      rows: [
        ['yo', '{hable}', '{coma}'],
        ['tú', '{hables}', '{comas}'],
        ['él/ella/usted', '{hable}', '{coma}'],
        ['nosotros', '{hablemos}', '{comamos}'],
        ['vosotros', '{habléis}', '{comáis}'],
        ['ellos/ustedes', '{hablen}', '{coman}'],
      ],
    },
    {
      caption: T('Table 2 — Subjunctive triggers'),
      head: [T('Expression'), T('Value'), T('Example')],
      rows: [
        ['{quiero que}', 'desejo', '{Quiero que vengas}'],
        ['{es necesario que}', 'necessidade', '{Es necesario que oremos}'],
        ['{no creo que}', 'dúvida', '{No creo que sea así}'],
        ['{ojalá}', 'desejo (doce)', '{Ojalá venga}'],
        ['{para que}', 'finalidade', '{Lo hizo para que lo vieran}'],
        ['{antes de que}', 'anterioridade', '«antes de que»'],
        ['{a no ser que}', 'concessão', '{A no ser que llueva}'],
        ['{cuando + futuro}', 'temporal futura', '«cuando venga»'],
      ],
    },
  ],
};
