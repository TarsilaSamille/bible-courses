import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('Verbs: present tense'),
  subtitle: T('-ar, -er, -ir — three conjugations'),
  section: T('Verbs'),
  body: C(`## Three conjugations

The Spanish infinitive ends in {-ar}, {-er} or {-ir}, and the rest of the paradigm follows from it:

{-AR}: {hablar} "to speak" — {hablo}, {hablas}, {habla}, {hablamos}, {habláis}, {hablan}.
{-ER}: {comer} "to eat" — {como}, {comes}, {come}, {comemos}, {coméis}, {comen}.
{-IR}: {vivir} "to live" — {vivo}, {vives}, {vive}, {vivimos}, {vivís}, {viven}.

Only the present and the subjunctive (and the gerund) change the theme vowel; the remaining tenses use the infinitive as their base.

## The verb {ser} in the present

{ser} is irregular: {soy}, {eres}, {es}, {somos}, {seáis}, {son}. {soy} is a form of its own, with nothing regular about it.

## Verb carries the person

Since the verb already carries the person, the subject pronoun is **dropped**: {Hablo} "I speak" · {Habla Dios} "God speaks" · {Hablan los discípulos} "the disciples speak".

## Voseo (Río de la Plata only)

In Argentina and Uruguay {tú} becomes {vos}, with the verb in the second-person plural: {vos hablás}, {vos tenés}, {vos podés}. The final accent is the written marker.

## European vs American

Across the Americas almost nobody uses {vosotros}: the plural becomes {ustedes} — "you all speak". The form {vosotros habláis} still exists but only in Spain.`),
  vocab: [
    V('hablo', 'hablar', 'I speak'),
    V('hablamos', 'hablar', 'we speak (á vowel!)'),
    V('como', 'comer', 'I eat'),
    V('vivo', 'vivir', 'I live'),
    V('habláis', 'hablar', 'you speak (Spain only!)'),
    V('soy', 'ser', 'I am (irregular!)'),
    V('aman', 'amar', 'they love (Mark 12:30)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete: "yo ___ (hablar)" (I speak)'),
    answer: 'hablo',
    hint: T('First person -ar.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the present: "nosotros ___ (vivir)"'),
      answer: 'vivimos',
      hint: T('The 1st plural of -ir shifts the vowel to -i-.'),
    },
    {
      kind: 'choose',
      prompt: T('In America, the plural of "you" is nearly always…'),
      options: [T('{vosotros}'), T('{ustedes}'), T('{vos}'), T('{ellos}')],
      answer: 1,
      hint: T('Rule §5: European vs American section.'),
    },
    {
      kind: 'match',
      prompt: T('Match the person to the verb'),
      pairs: [
        { a: T('yo'), b: T('{comen}') },
        { a: T('tú'), b: T('{comes}') },
        { a: T('nosotros'), b: T('{comemos}') },
        { a: T('ellos'), b: T('{hablan}') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Three conjugations: -ar, -er, -ir; the present comes from the infinitive by swapping the final vowel.',
      ),
    },
    {
      n: '2',
      text: T('The subject pronoun is dropped because the verb already marks the person.'),
    },
    { n: '3', text: T('The present also marks habitual and ongoing action.') },
    { n: '4', text: T('Voseo (Argentina/Uruguay): tú hablas → vos hablás, stress at the end.') },
    { n: '5', text: T('Outside Spain, the plural of "you" is nearly always ustedes.') },
  ],
  notes: [
    {
      label: T('The form {soy} does everything'),
      text: T(
        'The present has only three endings: {-o}, {-as}, {-a}. That is why {hablo} and {habla} differ only in person — the subject does the rest.',
      ),
    },
  ],
  examples: [
    { text: '{Creo en Dios}', gloss: T('I believe in God.') },
    { text: '{Oramos juntos}', gloss: T('We pray together.') },
    { text: '{Viven en paz}', gloss: T('They live in peace.') },
    {
      text: '{Ama a su prójimo}',
      gloss: T('He loves his neighbor (Mark 12:30 — habitual present).'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — Present indicative'),
      head: [T('Person'), T('hablar (-ar)'), T('comer (-er)'), T('vivir (-ir)')],
      rows: [
        ['yo', '{hablo}', '{como}', '{vivo}'],
        ['tú', '{hablas}', '{comes}', '{vives}'],
        ['él/ella/usted', '{habla}', '{come}', '{vive}'],
        ['nosotros', '{hablamos}', '{comemos}', '{vivimos}'],
        ['vosotros', '{habláis}', '{coméis}', '{vivís}'],
        ['ellos/ustedes', '{hablan}', '{comen}', '{viven}'],
      ],
    },
    {
      caption: T('Table 2 — Rioplatense voseo × tuteo'),
      head: [T('Infinitive'), T('tú (Spain/LatAm s.)'), T('vos (Argentina/Uruguay)')],
      rows: [
        ['{hablar}', '{hablas}', '{hablás}'],
        ['{tener}', '{tienes}', '{tenés}'],
        ['{poder}', '{puedes}', '{podés}'],
        ['{querer}', '{quieres}', '{querés}'],
        ['{ir}', '{vas}', '{vas}'],
      ],
    },
  ],
};
