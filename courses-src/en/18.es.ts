import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  title: T('Pronombres: el sistema entero'),
  subtitle: T('me, my, myself, this, whom, some — todas las series'),
  section: T('Pronombres'),
  body: C(`## Personales: una forma para el sujeto, otra para el objeto

El portugués tiene una sola forma. El inglés tiene dos, y la elección es puramente posicional: el pronombre que **sustituye al sujeto** va antes del verbo, y el que **recibe la acción** va después.

{I write} y {they wrote me} muestran el mecanismo: {I} y {they} son sujeto, {me} es objeto. {Him} y {her} tienen la misma forma en las dos posiciones, y eso es el origen de buena parte de la confusión.

{Her} es ambiguo entre {her} como objeto y {her} como posesivo, y el contexto decide: {I saw her} recibió la acción; {her book is mine} es posesión.

La KJV juega otro juego, el arcaico: {thou} y {thee} donde el inglés tendría {you}, {thy} donde tendría {your}. Juan 17:21 dice {as thou art with me, and I with thee}, la misma frase que el portugués dice "como tu estás conmigo, y yo contigo". Quien lea la KJV necesita saber que la segunda persona fue sustituida.

## Los posesivos y la palabra sin apóstrofo

Los posesivos tienen dos series: el **adjetivo** va antes del nombre ({my book}) y el **pronombre solo** sustituye al nombre ({the book is mine}). La única que cambia de forma en los dos papeles es {her}: {her book} y {the book is hers}. Todas las demás repiten la misma base.

{Its} es la única forma posesiva sin apóstrofo, porque no es una forma contraída. {It's} es {it is}, {it has} o {it was}: {it's a good book} junto a {the dog wagged its tail}. Escribir {it's} donde va {its} produce una frase que no significa nada, y el error es frecuente porque ambas se pronuncian igual.

Aparte de {its}, {her} y {their}, no hay truco: {his} significa de él y también es suyo. El único que obliga a pensar es {her}.

## Reflexivos y demostrativos

El reflexivo vuelve al sujeto: {I saw myself}, {she hurt herself}, {they can only count on themselves}. {Themselves} es la única forma con {s} en plural.

Los demostrativos son {this}, {that}, {these}, {those}, y el singular y el plural no derivan uno del otro por ninguna regla que el aprendiz pueda deducir: {this} no tiene plural propio, y {these} no tiene singular.

La asimetría que más cuesta es la de la distancia: {these days} es "estos días", {in those days} es "en aquellos días", y {that} sirve tanto para {that book} como para {that}, según lo que venga después.

## Interrogativos, relativos e indefinidos

{Who} pregunta por persona y {which} por cosa; {what} pregunta por cosa cuando no hay antecedente. {Whom} es la forma de objeto de {who}, y {whose} pregunta por posesión: {To whom did you write}?

Los indefinidos giran en torno a la negación. {Some} aparece en afirmación y en oferta, {any} en negación y en pregunta, {no} funciona como {not a}, {every} exige singular y tiene la idea de todos, y {each} exige singular y tiene la idea de uno a uno. La consecuencia práctica es la que más se examina: {I have some} responde a una oferta, y {I don't have any} responde a una pregunta.`),
  vocab: [
    V('I', 'I', 'yo (sujeto)'),
    V('me', 'me', 'me (objeto)'),
    V('myself', 'myself', 'a mí mismo'),
    V('your', 'your', 'tu, tuyo'),
    V('yours', 'yours', 'lo tuyo'),
    V('his', 'his', 'suyo, de él'),
    V('hers', 'hers', 'suyo (de ella)'),
    V('its', 'its', 'suyo (neutro)'),
    V("it's", 'be', 'es, está (contraído)'),
    V('themselves', 'themselves', 'a sí mismos'),
    V('this', 'this', 'este'),
    V('that', 'that', 'ese, aquel'),
    V('these', 'these', 'estos'),
    V('those', 'those', 'esos, aquellos'),
    V('whom', 'whom', 'a quién (objeto)'),
    V('whose', 'whose', 'de quién'),
    V('some', 'some', 'algún'),
    V('any', 'any', 'alguno (negación/pregunta)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'La forma del pronombre personal la decide la posición: sujeto antes del verbo, objeto después.',
      ),
    },
    {
      n: '2',
      text: T(
        'Los posesivos tienen dos series: la forma de adjetivo antes del nombre y la forma de pronombre en solitario.',
      ),
    },
    {
      n: '3',
      text: T(
        'Its es la única forma posesiva sin apóstrofo; su forma contraída es it is, it has o it was.',
      ),
    },
    {
      n: '4',
      text: T(
        'El reflexivo concuerda con el sujeto y aparece como objeto del verbo o tras una preposición.',
      ),
    },
    {
      n: '5',
      text: T(
        'Some va en afirmación y oferta, any en negación y pregunta, y every y each exigen siempre singular.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'Juan 17:21 usa thou y thee, y el Padrenuestro en Mateo 6:9 usa thy. Son formas arcaicas de segunda persona, no un error de lectura: quien traduce tiene que decidir qué hacer con ellas.',
      ),
    },
    {
      label: T('Diagnóstico:'),
      text: T(
        'Los tres errores más comunes son its por it is, her por hers y these por this. Los tres vienen del paralelismo de las formas, no de la falta de estudio.',
      ),
    },
  ],
  examples: [
    { text: '{they wrote me}', gloss: T('ellos me escribieron') },
    { text: '{I saw her}', gloss: T('yo la vi') },
    { text: '{her book is mine}', gloss: T('el libro de ella es mío') },
    { text: '{the dog wagged its tail}', gloss: T('el perro movió la cola') },
    { text: '{it is a good book}', gloss: T('es un buen libro — forma contraída') },
    {
      text: '{they can only count on themselves}',
      gloss: T('ellos solo pueden contar consigo mismos'),
    },
    { text: '{in those days}', gloss: T('en aquellos días') },
    { text: '{To whom did you write}', gloss: T('¿A quién escribiste?') },
    { text: '{Every good gift is from above}', gloss: T('todo don bueno viene de arriba') },
    { text: "{I don't have any bread}", gloss: T('no tengo ningún pan') },
    {
      text: '{as thou art with me, and I with thee}',
      gloss: T('como tú estás conmigo, y yo contigo — KJV'),
    },
  ],
  tables: [
    {
      caption: T('Personales y reflexivos'),
      head: [T('Persona'), T('Sujeto'), T('Objeto'), T('Reflexivo')],
      rows: [
        [T('1ª'), '{I}', '{me}', '{myself}'],
        [T('2ª'), '{you}', '{you}', '{yourself} / {yourselves}'],
        [T('3ª masc.'), '{he}', '{him}', '{himself}'],
        [T('3ª fem.'), '{she}', '{her}', '{herself}'],
        [T('neutro'), '{it}', '{it}', '{itself}'],
        [T('1ª plural'), '{we}', '{us}', '{ourselves}'],
        [T('3ª plural'), '{they}', '{them}', '{themselves}'],
      ],
    },
    {
      caption: T('Posesivos'),
      head: [T('Pronombre'), T('Adjetivo'), T('Pronombre solo'), T('Atención')],
      rows: [
        ['{I}', '{my}', '{mine}', T('—')],
        ['{you}', '{your}', '{yours}', T('—')],
        ['{he}', '{his}', '{his}', T('el mismo en las dos series')],
        ['{she}', '{her}', '{hers}', T('la única que cambia')],
        ['{it}', '{its}', '{its}', T('sin apóstrofo')],
        ['{we}', '{our}', '{ours}', T('—')],
        ['{they}', '{their}', '{theirs}', T('—')],
      ],
    },
    {
      caption: T('Indefinidos'),
      head: [T('Palabra'), T('Dónde entra'), T('Número'), T('Ejemplo')],
      rows: [
        ['{some}', T('afirmación, oferta'), T('plural'), '{I have some bread}'],
        ['{any}', T('negación, pregunta'), T('plural'), "{I don't have any bread}"],
        ['{no}', T('negación directa'), T('plural'), '{No man is perfect}'],
        ['{every}', T('todos, conjunto'), T('singular'), '{Every man dies}'],
        ['{each}', T('uno a uno'), T('singular'), '{Each man dies}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál de las frases es correcta?'),
    options: [
      T('The dog wagged it is tail'),
      T('The dog wagged its tail'),
      T("The dog wagged it's tail"),
      T('The dog wagged his tail'),
    ],
    answer: 1,
    hint: T('Its es posesivo y no lleva apóstrofo; it is es lo que se contrae.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Completa el posesivo: 'The book is ___. ' (suyo de ella)"),
      answer: 'hers',
    },
    {
      kind: 'fill',
      prompt: T("Completa con pronombre de objeto: 'They called ___.'"),
      answer: 'me',
    },
    {
      kind: 'match',
      prompt: T('Relaciona la serie con el ejemplo.'),
      pairs: [
        { a: T('demostrativo plural cercano'), b: '{these}' },
        { a: T('demostrativo plural lejano'), b: '{those}' },
        { a: T('relativo posesivo'), b: '{whose}' },
        { a: T('relativo de objeto'), b: '{whom}' },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál frase es correcta?'),
      options: [
        T('Every students are ready'),
        T('Every student is ready'),
        T('Each students is ready'),
        T('Every students is ready'),
      ],
      answer: 1,
    },
  ],
};
