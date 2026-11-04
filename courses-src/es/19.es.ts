import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  title: T('El imperativo'),
  subtitle: T('habla, hable, hablad — ¡dímelo!'),
  section: T('Los verbos'),
  body: C(`## El afirmativo con {tú} es el presente

El imperativo afirmativo para {tú} tiene exactamente la forma de la tercera persona del presente: {habla} «¡habla!» · {come} «¡come!» · {vive} «¡vive!» · {escribe} «¡escribe!». Ninguna marca los distingue: el contexto decide.

## El formal (usted) es el subjuntivo

Para {usted} y {ustedes} el imperativo afirmativo usa el **subjuntivo presente**: {hable} «¡hable!» · {coma} · {viva} · {dígame} «¡dígame!».

## El plural

{hablad} «¡hablad!» · {comed} · {vivid} · {amad los unos a los otros} «amaos los unos a los otros» (Jn 13.34). En América, sin {vosotros}, el plural es casi siempre {ustedes} y el imperativo plural suena como {hablen}.

## El negativo es siempre subjuntivo

{no hables} «¡no hables!» · {no comas} · {no seáis} — para **todas** las personas, incluido {tú}.

## Los pronombres se pegan

En el afirmativo los pronombres **se pegan** al verbo: {dime} «¡dime!» · {dímelo} «¡dímelo!» · {perdónanos} «¡perdónanos!».

En el negativo van **antes** del verbo: {no me digas} «¡no me digas!» · {no me lo digas} «¡no me lo digas!».

## Las ocho formas cortas

Ocho imperativos son irregulares: {di} «¡di!» (de {decir}), {haz} «¡haz!» ({hacer}), {ve} «¡ve!» ({ir}), {pon} «¡pon!» ({poner}), {sal} «¡sal!» ({salir}), {ten} «¡ten!» ({tener}), {ven} «¡ven!» ({venir}), {sé} «¡sé!» ({ser}). {sé} conserva el acento diacrítico para no confundirse con {se}.

Ej.: {Ven y sígueme} «ven y sígueme» (Mt 19.21) · {Sea la luz} «sea la luz» (Gn 1.3 — tercera persona del subjuntivo con valor optativo).`),
  vocab: [
    V('habla', 'hablar', '¡habla! (imperativo)'),
    V('hablad', 'hablar', '¡hablad! (imperativo pl.)'),
    V('hable', 'hablar', '¡hable! (subjuntivo de usted)'),
    V('amad', 'amar', '¡amad!'),
    V('dime', 'decir', '¡dime!'),
    V('dímelo', 'decir', '¡dímelo!'),
    V('ven', 'venir', '¡ven!'),
    V('no hables', 'hablar', '¡no hables!'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Dónde va el pronombre en el imperativo AFIRMATIVO?'),
    options: [
      T('Pegado detrás: «dímelo»'),
      T('Antes: «me di»'),
      T('Al final de la oración'),
      T('No se usa'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Imperativo de «decir» para tú (forma corta): «¡___!» (¡di!)'),
      answer: 'di',
      hint: T('Regla §5: una de las ocho formas cortas.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo se dice «no me digas eso»?'),
      options: [
        T('{No me lo digas}'),
        T('{No dimelo}'),
        T('{No lo me digas}'),
        T('{No digo me eso}'),
      ],
      answer: 0,
      hint: T('Regla §4: en el negativo, el pronombre va ANTES del verbo.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la persona con el imperativo correcto'),
      pairs: [
        { a: T('tú (afirmativo)'), b: T('{habla}') },
        { a: T('usted (afirmativo)'), b: T('{hable}') },
        { a: T('tú (negativo)'), b: T('{no hables}') },
        { a: T('vosotros (afirmativo)'), b: T('{hablad}') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Imperativo afirmativo de tú = 3.ª persona del presente: habla, come, vive.'),
    },
    {
      n: '2',
      text: T('Para usted y ustedes el afirmativo es el subjuntivo presente: hable, hablen.'),
    },
    {
      n: '3',
      text: T(
        'El negativo es subjuntivo para todas las personas: no hables, no hable, no habléis.',
      ),
    },
    {
      n: '4',
      text: T(
        'Los pronombres se PEGAN en el afirmativo (dímelo) y van ANTES del negativo (no me digas).',
      ),
    },
    { n: '5', text: T('Las 8 formas cortas: di, haz, ve, pon, sal, ten, ven, sé.') },
  ],
  notes: [
    {
      label: T('El tú de cortesía'),
      text: T(
        'Tras un sustantivo, {tú} deja de sonar directo y pasa a tratamiento: {Jesús te ama, dirigido a Dios en el Padrenuestro. El imperativo con usted es siempre de {tú}.',
      ),
    },
  ],
  examples: [
    { text: '{amad los unos a los otros}', gloss: T('Amad los unos a los otros (Jn 13.34).') },
    { text: '{Ven y sígueme}', gloss: T('Ven y sígueme (Mt 19.21).') },
    { text: '{no me lo digas}', gloss: T('No me lo digas (¡negativo + pronombre antes!).') },
    { text: '{Sea la luz}', gloss: T('Sea la luz (Gn 1.3 — optativo de 3.ª persona).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Imperativo'),
      head: [T('Persona'), T('Afirmativo'), T('Negativo (¡siempre subj.!)')],
      rows: [
        ['tú', '{habla}', '{no hables}'],
        ['usted', '{hable}', '{no hable}'],
        ['vosotros', '{hablad}', '{no habléis}'],
        ['ustedes', '{hablen}', '{no hablen}'],
      ],
    },
    {
      caption: T('Tabla 2 — Los ocho imperativos cortos'),
      head: [T('Infinitivo'), T('Regular (3.ª pers.)'), T('Imperativo corto')],
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
