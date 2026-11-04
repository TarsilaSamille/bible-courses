import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('Artículos y sustantivos'),
  subtitle: T('a/an/the y formación del plural'),
  section: T('El sustantivo'),
  body: C(`## El sistema de artículos

El inglés distingue tres funciones que el portugués expresa de maneras diferentes. {a/an} introduce algo todavía no identificado; {the} remite a algo identificable por quien habla o por el contexto; la ausencia de artículo suele indicar generalización o una clase completa.

{an} se elige por el sonido, no por la letra: {an hour} tiene h muda; {a university} comienza con sonido consonantal. Los nombres propios normalmente no llevan artículo: {Jesus}, {Mary}, {London}. Los plurales generales tampoco: {Birds fly}; {The birds in the cage fly} identifica un grupo concreto.

## Número y contabilidad

El plural regular añade {-s}; las palabras terminadas en {-s, -sh, -ch, -x} añaden {-es}. Si {y} va precedida de consonante, {-y} se convierte en {-ies}: {city} → {cities}. Hay plurales únicamente plurales, como {sheep}, y plurales irregulares frecuentes en la Biblia: {man/men}, {woman/women}, {child/children}, {foot/feet}, {mouse/mice}.

## Criterio de lectura

Primero pregunta si el sustantivo es contable. Después decide si el hablante presenta un objeto no especificado, uno identificable o toda una clase. En el inglés bíblico, el artículo también aporta ritmo y foco: {the Word}, {the Father}, {the light} señalan un referente determinado.`),
  vocab: [
    V('the', 'the', 'el/la determinado'),
    V('a/an', 'a', 'un/una'),
    V('Word', 'word', 'Palabra'),
    V('light', 'light', 'luz'),
    V('shepherd', 'shepherd', 'pastor'),
    V('men', 'man', 'hombres'),
    V('women', 'woman', 'mujeres'),
    V('children', 'child', 'niños'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué forma completa naturalmente: “I saw ___ shepherd”?'),
    options: [
      T('a (un pastor cualquiera)'),
      T('the (un pastor ya identificado)'),
      T('an (un pastor cualquiera)'),
      T('sin artículo'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('El plural de city es ___.'),
      answer: 'cities',
      hint: T('La y tras consonante cambia a -ies.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada uso con un artículo.'),
      pairs: [
        { a: T('general'), b: T('sin artículo') },
        { a: T('identificable'), b: T('the') },
        { a: T('uno no especificado'), b: T('a/an') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('¿Por qué se dice an hour?'),
      options: [
        T('porque hour termina en vocal escrita'),
        T('porque la h de hour es muda'),
        T('porque todas las h son mudas'),
        T('porque hour es plural'),
      ],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Usa a/an para una unidad contable aún no identificada; en preguntas y negaciones, el plural exige some: some books, not a books.',
      ),
    },
    {
      n: '2',
      text: T(
        'Usa the cuando el referente es identificable o cuando el plural significa el conjunto entero.',
      ),
    },
    {
      n: '3',
      text: T('Los plurales generales no llevan artículo; un grupo delimitado suele llevar the.'),
    },
    { n: '4', text: T('a/an depende de la pronunciación: an hour, a university.') },
  ],
  notes: [
    {
      label: T('Registro:'),
      text: T('La omisión de artículos y los nombres propios son gramaticales, no errores.'),
    },
  ],
  examples: [
    { text: '{the Word}', gloss: T('la Palabra: referente determinado') },
    { text: '{a disciple}', gloss: T('un discípulo: todavía no identificado') },
    { text: '{Christians pray}', gloss: T('los cristianos oran: generalización') },
    { text: '{the children in the house}', gloss: T('los niños de la casa: grupo delimitado') },
  ],
  tables: [
    {
      caption: T('Artículos y contabilidad'),
      head: [T('Contexto'), T('Uso'), T('Ejemplo')],
      rows: [
        [T('Un ejemplo no identificado'), T('a/an + singular'), '{a shepherd}'],
        [T('Referente identificable'), T('the + singular/plural'), '{the shepherd}'],
        [T('Toda una clase'), T('plural sin artículo'), '{Shepherds care for sheep}'],
      ],
    },
  ],
};
