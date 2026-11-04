import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  title: T('The imperative'),
  subtitle: T('habla, hable, hablad — dímelo!'),
  section: T('Verbs'),
  body: C(`## The affirmative with {tú} is the present

The affirmative imperative for {tú} has exactly the shape of the third-person present: {habla} "speak!" · {come} "eat!" · {vive} "live!" · {escribe} "write!". No marker distinguishes the two — context decides.

## The formal (usted) is the subjunctive

For {usted} and {ustedes} the affirmative imperative uses the **present subjunctive**: {hable} "speak!" · {coma} · {viva} · {dígame} "tell me!".

## The plural

{hablad} "speak!" · {comed} · {vivid} · {amad los unos a los otros} (John 13:34). In America, without {vosotros}, the plural is normally {ustedes} and the plural imperative sounds like {hablen}.

## The negative is always subjunctive

{no hables} "don't speak!" · {no comas} · {no seáis} — for **all** persons, {tú} included.

## Pronouns stick on

In the affirmative, pronouns **attach** to the verb: {dime} "tell me" · {dímelo} "tell it to me" · {perdónanos} "forgive us".

In the negative, they stay **before** the verb: {no me digas} · {no me lo digas} "don't tell me!"

## The eight short forms

Eight imperatives are irregular: {di} "say!" (from {decir}), {haz} "do!" ({hacer}), {ve} "go!" ({ir}), {pon} "put!" ({poner}), {sal} "leave!" ({salir}), {ten} "take!" ({tener}), {ven} "come!" ({venir}), {sé} "be!" ({ser}). {sé} keeps its diacritic so as not to be read as {se}.

Ex.: {Ven y sígueme} "come and follow me" (Matt 19:21) · {Sea la luz} "let there be light" (Gen 1:3 — a third-person subjunctive with optative force).`),
  vocab: [
    V('habla', 'hablar', 'speak! (imp.)'),
    V('hablad', 'hablar', 'speak! (pl. imp.)'),
    V('hable', 'hablar', 'speak! (subj., usted)'),
    V('amad', 'amar', 'love! (pl.)'),
    V('dime', 'decir', 'tell me!'),
    V('dímelo', 'decir', 'tell it to me!'),
    V('ven', 'venir', 'come!'),
    V('no hables', 'hablar', "don't speak!"),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Where does the pronoun go in the AFFIRMATIVE imperative?'),
    options: [
      T('Attached after: "dímelo"'),
      T('Before: "me di"'),
      T('At sentence end'),
      T('Not used'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Imperative of "decir" for tú (short form): "¡___!" (say!)'),
      answer: 'di',
      hint: T('Rule §5: one of the eight short forms.'),
    },
    {
      kind: 'choose',
      prompt: T('How do you say "don\'t tell me that"?'),
      options: [
        T('{No me lo digas}'),
        T('{No dimelo}'),
        T('{No lo me digas}'),
        T('{No digo me eso}'),
      ],
      answer: 0,
      hint: T('Rule §4: in the negative, the pronoun goes BEFORE the verb.'),
    },
    {
      kind: 'match',
      prompt: T('Match the person to the right imperative'),
      pairs: [
        { a: T('tú (affirmative)'), b: T('{habla}') },
        { a: T('usted (affirmative)'), b: T('{hable}') },
        { a: T('tú (negative)'), b: T('{no hables}') },
        { a: T('vosotros (affirmative)'), b: T('{hablad}') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    { n: '1', text: T('Affirmative tú imperative = 3rd person present: habla, come, vive.') },
    {
      n: '2',
      text: T(
        'For usted/ustedes the affirmative imperative is the present subjunctive: hable, hablen.',
      ),
    },
    {
      n: '3',
      text: T('The negative is subjunctive for every person: no hables, no hable, no habléis.'),
    },
    {
      n: '4',
      text: T(
        'Pronouns ATTACH in the affirmative (dímelo) and go BEFORE the negative (no me digas).',
      ),
    },
    { n: '5', text: T('The 8 short forms: di, haz, ve, pon, sal, ten, ven, sé.') },
  ],
  notes: [
    {
      label: T('The polite tú'),
      text: T(
        'After a noun, {tú} stops sounding direct and becomes address: {Jesús te ama}, addressed to God in the "tu" Prayer. The imperative with you is always {tú}.',
      ),
    },
  ],
  examples: [
    { text: '{amad los unos a los otros}', gloss: T('Love one another (John 13:34).') },
    { text: '{Ven y sígueme}', gloss: T('Come and follow me (Matt 19:21).') },
    { text: '{no me lo digas}', gloss: T("Don't tell me that (negative + pronoun first!).") },
    { text: '{Sea la luz}', gloss: T('Let there be light (Gen 1:3 — third-person optative).') },
  ],
  tables: [
    {
      caption: T('Table 1 — Imperative'),
      head: [T('Person'), T('Affirmative'), T('Negative (always subj.!)')],
      rows: [
        ['tú', '{habla}', '{no hables}'],
        ['usted', '{hable}', '{no hable}'],
        ['vosotros', '{hablad}', '{no habléis}'],
        ['ustedes', '{hablen}', '{no hablen}'],
      ],
    },
    {
      caption: T('Table 2 — The eight short imperatives'),
      head: [T('Infinitive'), T('Regular (3rd pers.)'), T('Short imperative')],
      rows: [
        ['{decir}', '{dice}', '{di}'],
        ['{hacer}', '{hace}', '{haz}'],
        ['{ir}', '{va}', '{ve}'],
        ['{poner}', '{pone}', '{pon}'],
        ['{salir}', '{sale}', '{sal}'],
        ['{tener}', '{tiene}', '{ten}'],
        ['{venir}', '{viene}', '{ven}'],
        ['{ser}', '{es}', '{sé}'],
      ],
    },
  ],
};
