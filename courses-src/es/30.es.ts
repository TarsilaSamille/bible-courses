import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('Los pronombres indefinidos'),
  subtitle: T('alguien, algo, todo — ¡alguien llama!'),
  section: T('Los pronombres'),
  body: C(`## Los cuatro con «n-»

El español tiene una serie sistemáticamente negativa:

{alguien} «alguien» frente a {nadie} «nadie»
{algo} «algo» frente a {nada} «nada»
{alguno} «alguno» frente a {ninguno} «ninguno»
{cualquiera} «cualquiera» — con valor negativo, «ninguno»

En las oraciones negativas, la **doble negación es obligatoria**: {No vi a nadie} «no vi a nadie» (nunca «*No vi alguien»). En las preguntas, el segundo {no} es opcional: {¿No viste a alguien?} «¿no viste a alguien?».

Bíblico: {No hay quien} «no hay quien» (Ecl 3.15) · {Nada hay nuevo} «nada hay nuevo» (Ecl 1.9).

## {todo}

{todo} concuerda normalmente: {todo hombre} «todo hombre» · {toda la ley} «toda la ley» · {Todos los que oyen} «todos los que oyen».

Pero como **adverbio** es invariable y significa «enteramente»: {todo está destruido} «todo está destruido» · {todo está bien} «todo está bien».

## Apocoplas

Varios indefinidos pierden la vocal final ante el sustantivo masculino singular:

{alguno} → {algún} {algún día} «algún día»
{ninguno} → {ningún} {ningún hombre} «ningún hombre»
{cualquiera} → {cualquier} {cualquier día} «cualquier día»

## Cuantificadores invariables

{cada} «cada» · {todo} (adverbio) · {mucho}, {poco} · {bastante} · {demasiado} · {varios} «varios» · {ciertos} «ciertos» — todos invariables: {varios libros} «varios libros».

## Negativos absolutos

{nadie} y {nada} exigen {no} en el verbo y rechazan los demás pronombres: {Nadie dijo nada} «nadie dijo nada».

Ej.: {He aquí, yo estoy a la puerta; si alguien oye mi voz y abre la puerta, entraré} «He aquí, yo estoy a la puerta; si alguien oye mi voz y abre la puerta, entraré» (Ap 3.20).`),
  vocab: [
    V('alguien', 'alguien', 'alguien'),
    V('nadie', 'nadie', 'nadie'),
    V('nada', 'nada', 'nada'),
    V('todo', 'todo', 'todo'),
    V('algún día', 'alguno', 'algún día (¡apocopla!)'),
    V('cada uno', 'uno', 'cada uno'),
    V('el mismo', 'mismo', 'el mismo'),
    V('nadie', 'nadie', 'nadie (¡negativo absoluto!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Por qué «no vi a nadie» tiene dos «no»?'),
    options: [
      T('Error'),
      T('¡Doble negación OBLIGATORIA con indefinido negativo!'),
      T('Énfasis opcional'),
      T('Plural'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa con apocopla: «___ día» (cualquier día)'),
      answer: 'cualquier',
      hint: T('Regla §3: cualquiera pierde la final ante el masc. sg.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué oración está CORRECTA (negación)?'),
      options: [T('No dijo nada'), T('No dijo algo'), T('Dijo nada'), T('Nada no dijo')],
      answer: 0,
      hint: T('Regla §1: negativo + «no» en el verbo.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el indefinido con su par negativo'),
      pairs: [
        { a: T('{alguien}'), b: T('{nadie}') },
        { a: T('{algo}'), b: T('{nada}') },
        { a: T('{alguno}'), b: T('{ninguno}') },
        { a: T('{todo}'), b: T('{nadie} (nada = ¡cero!)') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('La negación exige «no» + indefinido negativo: no vi a nadie, no dijo nada.'),
    },
    {
      n: '2',
      text: T(
        'Todo concuerda con el sustantivo (todo hombre), pero como adverbio es invariable (todo está bien).',
      ),
    },
    { n: '3', text: T('Apocopla ante masculino singular: algún, ningún, cualquier.') },
    { n: '4', text: T('Cada, mucho, poco, bastante, demasiado y varios son invariables.') },
  ],
  notes: [
    {
      label: T('{todo} cambia de valor'),
      text: T(
        'Dentro de una cláusula {todo} es pronombre y concuerda: {todo hombre}, {toda la ley}. Fuera, es adverbio e invariable: {todo lo hizo}. El contexto decide la flexión.',
      ),
    },
  ],
  examples: [
    { text: '{Alguien llama a la puerta}', gloss: T('Alguien llama a la puerta (Ap 3.20).') },
    { text: '{no vi a nadie}', gloss: T('No vi a nadie (¡doble negación!).') },
    { text: '{nada hay nuevo bajo el sol}', gloss: T('Nada hay nuevo bajo el sol (Ecl 1.9).') },
    { text: '{todo está bien}', gloss: T('Todo está bien (todo adverbio, invariable).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Indefinidos y sus negativos'),
      head: [T('Positivo'), T('Negativo'), T('Ejemplo positivo'), T('Ejemplo negativo')],
      rows: [
        ['{alguien}', '{nadie}', '{Alguien llama}', '{Nadie llama}'],
        ['{algo}', '{nada}', '{Quiero algo}', '{No quiero nada}'],
        ['{alguno}', '{ninguno}', '{Algún día}', '{Ningún hombre}'],
        ['{alguien}', '{nadie}', '{Vi a alguien}', '{No vi a nadie}'],
        ['{cualquiera}', '{nadie}', '{Cualquier día}', '{No va nadie}'],
      ],
    },
    {
      caption: T('Tabla 2 — Apocoplas de los indefinidos'),
      head: [T('Forma plena'), T('Apocopla'), T('Uso')],
      rows: [
        ['{alguno}', '{algún}', '{algún día}'],
        ['{ninguno}', '{ningún}', '{ningún hombre}'],
        ['{cualquiera}', '{cualquier}', '{cualquier día}'],
        ['{bueno}', '{buen}', '{buen hombre}'],
      ],
    },
  ],
};
