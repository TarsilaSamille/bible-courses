import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  title: T('La voz pasiva'),
  subtitle: T('fu scritto; si vendono case'),
  section: T('Los pronombres y la pasiva'),
  body: C(`## Dos pasivas, y solo una es la que conoces

La pasiva clásica, literaria y bíblica, usa {essere} más participio: {Il Vangelo fu scritto}, «el Evangelio fue escrito». **El participio concuerda con el sujeto**, {Cristo fu crocifisso}, {le parole furono scritte}, y el agente, si viene, viene con {da}: {fu scritto da Giovanni}.

Fíjate en que la pasiva clásica conjugó {essere} en el pasado: {fu}, {furono}. Es la misma construcción del *passato prossimo*, {fu scritto} vale como {è stato scritto}, con una diferencia: aquí el foco es el resultado. La escritura está hecha, y el efecto permanece.

## {Si} más verbo pronominal: la de todos los días

En el italiano cotidiano, la pasiva es {si} más verbo pronominal: {Si vendono case}, «se venden casas», {Si parla italiano}. **El verbo ahora concuerda con el sujeto de la frase**: {le case si vendono}, {i libri si leggono}, {le donne si incontrano}.

Aquí es donde muchas traducciones tropiezan. {Si vendono case} no quiere decir que las casas se vendan unas a otras: el {si} **aquí es partícula pasiva**, y la frase significa que el mundo vende casas. Traducir {si} por «se» crea una ambigüedad que el italiano nativo no siente.

## No todo {si} es pasiva

En {si lava} «él se lava», el {si} es pronombre reflexivo. La diferencia: si {si} va antes de un verbo transitivo directo y el sujeto hace la acción en sí mismo, es reflexivo, {si lava le mani}, «se lava las propias manos»; si el sentido es pasivo, es partícula, {si vendono case}.

El contexto decide. En {Maria si è vestita} puede ser «María se vistió» o «María fue vestida» por otra persona. La ambigüedad es real, y los hablantes la resuelven con la información que tienen: quien habla sabe si fue ella quien se vistió.

## En la Biblia

En los textos bíblicos, {fu scritto} enfoca el resultado: la escritura ocurrió y el efecto permanece. {Scrisse} y {aveva scritto} relatan la acción del escriba, quién escribió, cuándo y con qué esfuerzo. En un evangelio, elegir entre {fu scritto} y {scrisse} cambia el punto de vista: el primero habla del texto, el segundo del escriba.

## Criterio de lectura

Si la frase tiene {essere} más participio, es la pasiva clásica: busca el {da} para hallar el agente. Si tiene {si} más verbo, pregunta si el {si} es reflexivo o partícula pasiva, y la respuesta está en quién hace la acción.`),
  vocab: [
    V('fu scritto', 'scrivere', 'fue escrito'),
    V('sarà salvato', 'salvare', 'será salvado'),
    V('fu crocifisso', 'crocifiggere', 'fue crucificado'),
    V('si vendono', 'vendere', 'se venden'),
    V('si dice', 'dire', 'se dice'),
    V('si lava', 'lavarsi', 'se lava'),
    V('si parla', 'parlare', 'se habla'),
    V('essere', 'essere', 'ser'),
    V('partecipio', 'partecipio', 'participio'),
    V('Vangelo', 'Vangelo', 'Evangelio'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En si vendono case, ¿con qué concuerda el verbo?'),
    options: [T('Con case'), T('Siempre en singular'), T('Con el agente'), T('Con si')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: Il Vangelo fu ___ (scrivere)'),
      answer: 'scritto',
      hint: T('Participio irregular.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase es reflexiva?'),
      options: [
        T('Si parla italiano.'),
        T('Maria si lava.'),
        T('Si vendono case.'),
        T('Si dice la verità.'),
      ],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Concuerda el participio: le parole fu___ scritte'),
      answer: 'rono',
      hint: T('Essere + participio plural.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'La pasiva clásica es {essere} más participio, y el participio concuerda con el sujeto: {fu scritto}, {le parole furono scritte}.',
      ),
    },
    { n: '2', text: T('El agente entra con {da}: {fu scritto da Giovanni}, {fu dato da Mosè}.') },
    {
      n: '3',
      text: T(
        'La pasiva de {si} hace que el verbo concuerde con el sujeto: {si vendono case}, {le case si vendono}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Si} es reflexivo cuando la acción recae sobre el sujeto ({si lava}) y partícula cuando el sentido es pasivo ({si vendono case}).',
      ),
    },
    {
      n: '5',
      text: T(
        '{Maria si è vestita} admite las dos lecturas: reflexo, «se vistió», o pasivo, «fue vestida».',
      ),
    },
  ],
  notes: [
    {
      label: T('La passiva con essere'),
      text: T(
        'La pasiva italiana cambia de auxiliar según el movimiento: {è amato} y {è andato} usan {essere}, {è stato scritto} usa {avere}. Lo que cuenta es si el sujeto hace la acción o solo la sufre.',
      ),
    },
    {
      label: T('El resultado, no la acción'),
      text: T(
        '{fu scritto} enfoca el resultado: la escritura ocurrió y el efecto permanece. {Scrisse} y {aveva scritto} relatan la acción del escriba, quién escribió, cuándo y con qué esfuerzo. En un evangelio, elegir entre los dos cambia el punto de vista.',
      ),
    },
  ],
  examples: [
    { text: 'Il Vangelo fu scritto.', gloss: T('El Evangelio fue escrito.') },
    { text: 'La legge fu scritta da Mosè.', gloss: T('La ley fue escrita por Moisés.') },
    { text: 'Cristo fu crocifisso.', gloss: T('Cristo fue crucificado.') },
    { text: 'Si vendono case.', gloss: T('Se venden casas.') },
    { text: 'Le case si vendono.', gloss: T('Las casas se venden.') },
    { text: 'Si parla italiano.', gloss: T('Se habla italiano.') },
    { text: 'Maria si è vestita.', gloss: T('María se vistió.') },
    { text: 'Lui si lava le mani.', gloss: T('Él se lava las propias manos.') },
  ],
  tables: [
    {
      caption: T('Dos construcciones'),
      head: ['Struttura', 'Esempio', 'Evidenza'],
      rows: [
        ['essere + participio', 'fu scritto', 'il risultato'],
        ['si + verbo', 'si vendono case', 'l’azione'],
      ],
    },
    {
      caption: T('El participio concuerda con el sujeto'),
      head: ['Frase', 'Participio', 'Soggetto'],
      rows: [
        ['Il Vangelo fu scritto', 'scritto', 'maschile singolare'],
        ['Le parole furono scritte', 'scritte', 'femminile plurale'],
        ['I libri furono scritti', 'scritti', 'maschile plurale'],
        ['Le ragazze sono partite', 'partite', 'femminile plurale'],
      ],
    },
  ],
};
