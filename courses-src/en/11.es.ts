import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Oraciones de relativo y comas'),
  subtitle: T('who, which, that — información e identificación'),
  section: T('Sintaxis'),
  body: C(`## Qué hace una oración de relativo

Un relativo restrictivo identifica el antecedente: {the disciples who believed rejoiced} significa que solo se regozijaron los discípulos que creyeron. En relativas restrictivas, {that} puede referirse a personas o cosas: {the disciple that prayed}.

Un relativo explicativo añade información sobre un grupo ya identificado: {the disciples, who believed, rejoiced}. Las comas marcan la diferencia. {Who} se refiere normalmente a personas; {which}, a cosas; {whose}, a poseedores.

## Preposiciones y relativos

{Where}, {when} y {why} pueden sustituir una preposición más pronombre relativo: {the city where he lived}, {the day when we met}, {the reason why he stayed}. En inglés cuidado, una persona o cosa también puede ir tras la preposición: {the person to whom I spoke}.

Juan 1:39 KJV tiene {Where dwellest thou?}; la pregunta contemporánea subyacente es {Where do you live?}. No son intercambiables por registro.

## What

{What} es un pronombre relativo fusionado en contextos como {do what he says}. No lo confundas con la pregunta de {What did he say?}. En KJV, {whatsoever} es un relativo libre enfático: whatever.`),
  vocab: [
    V('who', 'who', 'que (personas)'),
    V('which', 'which', 'que (cosas)'),
    V('that', 'that', 'que (restrictiva)'),
    V('whose', 'whose', 'cuyo'),
    V('where', 'where', 'donde'),
    V('when', 'when', 'cuando'),
    V('why', 'why', 'por qué'),
    V('what', 'what', 'lo que'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T("¿Qué indica la coma en 'the disciples, who believed, rejoiced'?"),
    options: [
      T('Que solo los creyentes se regozijaron'),
      T('Que todo el grupo ya identificado había creído'),
      T('Que el verbo cambia de tiempo'),
      T('Que hay una pregunta'),
    ],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T("Completa: 'God, ___ name is holy…'"), answer: 'whose' },
    {
      kind: 'match',
      prompt: T('Relaciona relativo y antecedente.'),
      pairs: [
        { a: 'who', b: T('persona') },
        { a: 'which', b: T('cosa') },
        { a: 'whose', b: T('posesión') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase identifica solo un subgrupo?'),
      options: [
        T('The disciples who believed rejoiced'),
        T('The disciples, who believed, rejoiced'),
        T('The disciples who, believed, rejoiced'),
        T('The disciples, who believed rejoiced'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'La ausencia de coma crea una DEFINICIÓN: the man who came identifica a un hombre concreto.',
      ),
    },
    {
      n: '2',
      text: T(
        "Las comas indican información añadida sobre un antecedente ya completo; el relativo equivale a 'el cual/que'.",
      ),
    },
    {
      n: '3',
      text: T(
        'Whose expresa posesión con personas y cosas: the man whose son came; the city whose people prayed.',
      ),
    },
  ],
  notes: [
    {
      label: T('Precisión:'),
      text: T(
        'La coma no cambia el pronombre, pero cambia el conjunto de referencia y a menudo la interpretación.',
      ),
    },
  ],
  examples: [
    { text: '{the man who came}', gloss: T('el hombre que vino — subconjunto identificado') },
    {
      text: '{the disciples, who believed, rejoiced}',
      gloss: T('los discípulos, que creyeron, se regocijaron'),
    },
    { text: '{the name of which he spoke}', gloss: T('el nombre del cual habló') },
  ],
  tables: [
    {
      caption: T('Restrictiva × explicativa'),
      head: [T('Tipo'), T('Persona'), T('Cosa'), T('Comas')],
      rows: [
        [T('restrictiva'), 'who/that', 'which/that', T('normalmente ninguna')],
        [T('explicativa'), 'who', 'which', T('normalmente obligatorias')],
      ],
    },
  ],
};
