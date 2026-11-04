import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  section: T('El verbo: los modos'),
  title: T('El verbo: futuro y condicional'),
  subtitle: T('direi, farei, y el se eu fosse que el griego no tiene'),
  body: C(`## Dos maneras de decir el futuro

El portugués tiene dos futuros y usa el primero para casi todo. El futuro **sintético** se forma con el infinitivo más las terminaciones: {falarei}, {virei}, {terei}. El futuro **perifrástico** usa el verbo {ir} más el infinitivo: {vou falar}, {irei falar}, {hei de falar}.

El sintético está muriendo, y la regla de lo que sobrevive es corta: sigue vivo en los verbos cuya primera persona del presente termina en vocal o en {-r}. {Digo} da {direi}, {faço} dá {farei}, {vou} dá {irei}, {tenho} dá {terei}, {posso} dá {poderei}, {vejo} dá {verei}, {serei} viene de {ser}. Fuera de ahí, el portugués dice {vou falar}.

Eso es lo que el texto bíblico conserva del portugués más antiguo: las formas {direi}, {farei}, {virei} y {poderei} aparecen en la Biblia con una frecuencia que el portugués de hoy no soportaría.

## El condicional: la forma más antigua del portugués

El condicional es la más antigua de las formas que el portugués conserva del latín, y es la más usada en el Nuevo Testamento. Tiene tres momentos. El **simple** es {se eu fosse}, que indica el pasado irreal: algo que no ocurrió. El **compuesto** es {se eu tivesse feito}, que retrocede un paso: el pasado del irreal. Y el **posterior** es {eu faria}, que es el futuro dentro de la hipótesis: lo que haría si fuera el caso.

A los tres momentos corresponden tres verbos en la frase, y el portugués resuelve con una sola forma lo que el griego resuelve con tres modos. Un solo {se} condicional abre los tres: {Se eu fosse rico, viajaria e teria tempo}.

## El condicional que traduce el optativo

El griego tiene un modo entero que el portugués no tiene: el **optativo**. Sirve para el deseo, la hipótesis y la finalidad expresa. El portugués lo traduce por {que} más subjuntivo o por {se} más condicional, y por eso el Nuevo Testamento en portugués tiene mucho más {se} que el griego.

Lo que el traductor tiene que decidir es el punto de vista. {Se alguém virá} es el futuro del griego con sentido de hipótesis; en portugués la misma construcción es {se alguém vier} más presente. El griego dice una cosa, el portugués dice otra, y la decisión es del traductor y no de la flexión.

## Criterio de lectura

Con cualquier verbo en futuro o en condicional, pregúntate: ¿es futuro o hipótesis? ¿El futuro es sintético o perifrástico? ¿Y el condicional está en el irreal, en el irreal anterior o en el futuro de la hipótesis?

Jn 14.3 dice {se eu for e vos preparar lugar, virei e vos tomarei}: el {se} trae el subjuntivo, y {virei} y {tomarei} son sintéticos porque {vir} y {tomar} todavía viven bajo la regla de la vocal y del {-r}. Una frase con los dos futuros y la hipótesis, que es toda la página que explica por qué importa la forma antigua.`),
  vocab: [
    V('vou falar', 'falar', 'voy a hablar (futuro perifrástico)'),
    V('falarei', 'falar', 'falaré (futuro sintético)'),
    V('direi', 'dizer', 'diré'),
    V('farei', 'fazer', 'haré'),
    V('virei', 'vir', 'vendré'),
    V('terei', 'ter', 'tendré'),
    V('poderei', 'poder', 'podré'),
    V('se eu fosse', 'ser', 'si yo fuera'),
    V('se eu tivesse feito', 'fazer', 'si yo hubiera hecho'),
    V('eu faria', 'fazer', 'yo haría'),
    V('viajaria', 'viajar', 'viajaría'),
    V('se alguém vier', 'vir', 'si alguien viene'),
    V('o condicional', 'condicional', 'el condicional'),
    V('o futuro', 'futuro', 'el futuro'),
    V('o optativo', 'optativo', 'el optativo'),
  ],
  rules: [
    { n: '§1', text: T('El futuro perifrástico es {ir} más infinitivo: {vou falar}.') },
    {
      n: '§2',
      text: T(
        'El futuro sintético sobrevive en los verbos cuya primera persona termina en vocal o en {-r}: {direi}, {farei}, {poderei}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'El condicional tiene tres momentos: el irreal {se fosse}, el irreal anterior {se tivesse feito} y el futuro dentro de la hipótesis {faria}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'El griego resuelve hipótesis y deseo con el optativo; el portugués los resuelve con {se} más condicional.',
      ),
    },
    {
      n: '§5',
      text: T(
        'El futuro perifrástico no flexiona, y por eso el portugués actual casi no flexiona el futuro.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'El texto bíblico conserva el futuro sintético en formas que el habla de hoy ya no usa: {darei}, {verei}, {terei}. Una traducción modernizada borra esas formas.',
      ),
    },
    {
      label: T('Cortesía en el condicional'),
      text: T(
        'El condicional es también la forma de la cortesía: {gostaria}, {poderia}, {viria}. En portugués bíblico, y en cualquier portugués, es un tiempo con tres valores: hipótesis, futuro del pasado y delicadeza.',
      ),
    },
  ],
  examples: [
    { text: 'Vou falar amanhã.', gloss: T('Futuro perifrástico, el más común.') },
    {
      text: 'Direi a verdade.',
      gloss: T('Futuro sintético, vivo porque {digo} termina en vocal.'),
    },
    { text: 'Se eu fosse rico, viajaria.', gloss: T('Irreal simple más futuro de la hipótesis.') },
    {
      text: 'Se eu tivesse estudado, teria passado.',
      gloss: T('Irreal anterior más futuro compuesto.'),
    },
    { text: 'Ele disse que viria.', gloss: T('Condicional como futuro del pasado.') },
    { text: 'Gostaria de saber.', gloss: T('Condicional como cortesía.') },
    { text: 'Se alguém vier, avise.', gloss: T('Subjuntivo detrás de {se}, no condicional.') },
    { text: 'Se eu for, virei.', gloss: T('Hipótesis en subjuntivo y futuro sintético.') },
  ],
  tables: [
    {
      caption: T('Los dos futuros'),
      head: ['Tipo', 'Exemplo', 'Quando aparece'],
      rows: [
        ['sintético', 'falarei', 'só nos verbos de 1ª pessoa em vogal ou -r'],
        ['perifrástico', 'vou falar', 'em quase todo o resto'],
        ['perifrástico formal', 'hei de falar', 'em registro escrito'],
      ],
    },
    {
      caption: T('Os três momentos do condicional'),
      head: ['Momento', 'Exemplo', 'O que indica'],
      rows: [
        ['irreal', 'se eu fosse', 'passado que não aconteceu'],
        ['irreal anterior', 'se eu tivesse feito', 'passado anterior ao irreal'],
        ['posterior', 'eu faria', 'o que viria a ser dentro da hipótese'],
      ],
    },
    {
      caption: T('Futuro sintético vivo'),
      head: ['Presente', 'Futuro'],
      rows: [
        ['digo', 'direi'],
        ['faço', 'farei'],
        ['vou', 'irei'],
        ['tenho', 'terei'],
        ['posso', 'poderei'],
        ['vejo', 'verei'],
        ['serei', 'serei'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es el futuro sintético de {fazer}?'),
    options: [T('farei'), T('fazerei'), T('vou fazer'), T('faço-ei')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{se eu tivesse feito} es el momento ______ del condicional.'),
      answer: 'irreal anterior',
      hint: T('Es el pasado del irreal.'),
    },
    {
      kind: 'choose',
      prompt: T('En «vou falar amanhã», el futuro es:'),
      options: [T('perifrástico'), T('sintético'), T('condicional'), T('subjuntivo')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona el presente con el futuro sintético.'),
      pairs: [
        { a: T('digo'), b: T('direi') },
        { a: T('faço'), b: T('farei') },
        { a: T('posso'), b: T('poderei') },
        { a: T('vejo'), b: T('verei') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
