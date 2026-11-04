import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  title: T('Formas de tratamiento ({usted}, {vosotros})'),
  subtitle: T('tú × usted — ¡3.ª persona que es 2.ª!'),
  section: T('Los pronombres'),
  body: C(`## Dos sistemas de tratamiento

El español distingue una relación **informal** ({tú} y {vosotros}) de una **formal** ({usted} y {ustedes}).

{tú} → amigo, hijo, Dios (en tono íntimo): {¿Cómo estás?} «¿cómo estás?» · {Dios te ama} «Dios te ama».
{usted} → jefe, cliente, profesor, Dios (en tono reverente): {¿Cómo está usted?} «¿cómo está?» · {Dios le ama} «Dios le ama».

## {usted} es 3.ª persona

{usted} se conjuga en **tercera persona** y usa pronombres de 3.ª: {usted habla} «usted habla» (idéntico a {él habla}) · {le} (¡nunca {te}!) · {lo} para el acusativo.

En el imperativo, {usted} recibe el **subjuntivo**: {hable} «hable» · {dígame} «dígame».

## El plural: {vosotros} frente a {ustedes}

En **España**, el plural informal es {vosotros} y el formal {ustedes}: {vosotros habláis} «habláis» frente a {ustedes hablan} «ustedes hablan».

En **América**, casi nadie usa {vosotros}: {ustedes} cubre **todo** el plural: {ustedes hablan} «ustedes hablan», tanto si se habla con amigos como con desconocidos. Por eso lo impersonal «{se habla español}» suena tan natural allí.

## {vos}: el voseo

En el Río de la Plata (Argentina, Uruguay) {tú} pasa a {vos} en la segunda singular, con el verbo en la segunda del plural: {vos hablás} «hablás» · {vos tenés} «tenés». {vos} nunca se combina con {usted}: son sistemas separados.

Ej.: {Dios le bendiga} «Dios le bendiga» (formal) frente a {Dios te bendiga} «Dios te bendiga» (íntimo).`),
  vocab: [
    V('usted habla', 'hablar', 'usted habla (¡3.ª!)'),
    V('estás', 'estar', 'estás (¡íntimo!)'),
    V('ustedes hablan', 'hablar', 'ustedes hablan (¡en América, todos!)'),
    V('vos hablás', 'hablar', 'vos hablás (¡voseo!)'),
    V('le bendiga', 'bendecir', 'le bendiga (¡formal!)'),
    V('vosotros habláis', 'hablar', 'habláis (¡solo España!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«usted habla» — ¿qué persona?'),
    options: [
      T('2.ª persona'),
      T('3.ª persona con valor de 2.ª (¡formal!)'),
      T('1.ª persona'),
      T('Impersonal'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Formal: «Dios ___ ama» (Dios le ama)'),
      answer: 'le',
      hint: T('Regla §2: con usted el indirecto es le.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué oración es CORRECTA en América?'),
      options: [
        T('Vosotros habláis español'),
        T('Ustedes hablan español'),
        T('Vos hablan español'),
        T('Hablan español'),
      ],
      answer: 1,
      hint: T('Regla §3: fuera de España, «ustedes» lo cubre todo.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el pronombre con el registro'),
      pairs: [
        { a: T('{tú}'), b: T('informal') },
        { a: T('{usted}'), b: T('formal') },
        { a: T('{vosotros}'), b: T('plural informal (España)') },
        { a: T('{vos}'), b: T('voseo (Argentina)') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    { n: '1', text: T('tú = informal; usted = formal. La elección es social, no gramatical.') },
    { n: '2', text: T('Usted se conjuga en 3.ª y usa le/lo/los: usted habla, le doy el libro.') },
    { n: '3', text: T('Fuera de España, «ustedes» es el único plural; «vosotros» es rarísimo.') },
    {
      n: '4',
      text: T('El voseo (vos) sustituye a «tú» en el Rioplatense y nunca convive con «usted».'),
    },
  ],
  notes: [
    {
      label: T('El plural cambia de valor'),
      text: T(
        '{vosotros} es la segunda persona del plural en España y {ustedes} en América. No es registro, es geografía: ambas formas conviven y significan cosas distintas según la región.',
      ),
    },
  ],
  examples: [
    { text: '¿Cómo estás?}', gloss: T('¿Cómo estás? (informal, entre amigos).') },
    { text: '¿Cómo está usted?}', gloss: T('¿Cómo está usted? (formal).') },
    { text: '{Dios le bendiga}', gloss: T('Dios le bendiga (formal — le).') },
    { text: '{vos hablás}', gloss: T('Vos hablás (voseo rioplatense).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Los cuatro registros'),
      head: [T('Persona'), T('Singular'), T('Plural'), T('Uso')],
      rows: [
        ['informal', '{tú}', '{vosotros}', T('familia, amigos (España)')],
        ['formal', '{usted}', '{ustedes}', T('educación, trabajo')],
        ['informal', '{vos}', '—', T('Rioplatense (voseo)')],
        ['formal', '{usted}', '{ustedes}', T('América: todos los plurales')],
      ],
    },
    {
      caption: T('Tabla 2 — Lo que cambia con el registro'),
      head: [T('Elemento'), T('tú'), T('usted')],
      rows: [
        [T('verbo'), '{hablas}', '{habla}'],
        [T('objeto indirecto'), '{me}', '{le}'],
        [T('imperativo'), '{habla}', '{hable}'],
        [T('negativo'), '{no hables}', '{no hable}'],
        [T('posesivo'), '{mi libro}', '{su libro}'],
      ],
    },
  ],
};
