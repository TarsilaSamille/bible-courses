import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  section: T('La sintaxis'),
  title: T('La información que va al final'),
  subtitle: T('ontem comprou-se um livro, y el orden que decide el sentido'),
  body: C(`## El final de la frase es lo nuevo

El portugués neutro es sujeto, verbo, objeto. Lo que se aparta de ese neutro va al final, y lo que va al final es la información **nueva**: {Um livro foi comprado} lleva el verbo al final; {Ontem comprou-se um livro} lleva el tiempo al final, y el tiempo es lo que el oyente no sabía. En {Foi ele quem viu}, el pronombre {ele} va al final porque es lo que destaca.

Vale para sujeto, objeto y adverbial: {Ao professor entreguei o livro} y {Entreguei o livro ao professor} son la misma proposición, y el orden decide cuál de los tres es la información nueva. El portugués tiene tres posiciones disponibles para el objeto, y el griego también: la información va donde el hablante quiere que mire el oyente.

## La ambigüedad que resuelve el orden

Una palabra aislada no decide nada, y por eso el orden es contenido. En {Vi o homem de longe}, el {de longe} puede modificar el verbo ({vi} de lejos, es decir, a distancia) o el sustantivo ({o homem} que estaba lejos). Son dos frases distintas con las mismas palabras.

La segunda lectura se resuelve con {que}: {Vi o homem que estava longe}. La primera, con un adverbio de lugar explícito: {Vi o homem à distância}. El texto bíblico apuesta por el orden, y lo que el traductor necesita saber es cuál de las dos quería el griego.

## La topicalización como paréntesis

Lo que es antiguo y conocido puede ponerse aparte, entre comas, como un paréntesis, y la información principal se queda al final. {O homem, que era pobre, deu o livro} aparta la pobreza; lo nuevo es el regalo. Lo mismo con el adverbio: {No terceiro dia, ele ressuscitou}.

Por eso la posición de los demostrativos importa tanto. {Isto} señala lo que se discute ahora, {isso} lo que ya está en el contexto de la conversación, {aquilo} lo que está fuera. Y los pronombres {tudo}, {nada}, {alguém} funcionan igual: no señalan fuera de la frase, señalan lo que ya se ha dicho.

## É que, y el criterio de lectura

Hay una construcción que el portugués popular usa mucho y el texto antiguo usa poco: {é que}. En {É que eu não quis dizer isso}, el {é que} no une sujeto y verbo: introduce la explicación una vez que el resto de la frase ya está en pie. La regla es que {é que} solo aparece después de una frase que ya se sostiene, y nunca al principio de una explicación.

En cualquier frase, pregúntate: ¿cuál es la información nueva? ¿Está al final? ¿Y qué se puso aparte, entre comas?

Mt 3.3 dice {preparai o caminho do Senhor, endireitai as suas veredas}: la imagen va al final, y es la información nueva, porque lo que el lector ya sabía era que había un Señor. El verbo se queda en medio, y es la posición del sustantivo la que carga el énfasis del versículo.`),
  vocab: [
    V('a topicalização', 'topicalização', 'la topicalización'),
    V('a informação nova', 'informação', 'la información nueva'),
    V('a ordem neutra', 'ordem', 'el orden neutro'),
    V('um livro foi comprado', 'comprar', 'un libro fue comprado'),
    V('Ontem comprou-se um livro', 'comprar', 'ayer se compró un libro'),
    V('Foi ele quem viu', 'ver', 'fue él quien vio'),
    V('o homem que estava longe', 'longe', 'el hombre que estaba lejos'),
    V('à distância', 'distância', 'a distancia'),
    V('isto', 'isto', 'esto'),
    V('isso', 'isso', 'eso'),
    V('aquilo', 'aquilo', 'aquello'),
    V('os parênteses', 'parênteses', 'los paréntesis'),
    V('é que', 'é que', 'es que'),
    V('o parêntese', 'parêntese', 'el paréntesis'),
  ],
  rules: [
    { n: '§1', text: T('El orden neutro del portugués es sujeto, verbo, objeto.') },
    { n: '§2', text: T('La información nueva va al final: {ontem comprou-se um livro}.') },
    { n: '§3', text: T('Lo que ya se sabe puede ir entre comas, como paréntesis.') },
    {
      n: '§4',
      text: T(
        '{Isto} apunta a lo que se discute ahora, {isso} al contexto, {aquilo} a lo que está fuera.',
      ),
    },
    {
      n: '§5',
      text: T(
        '{É que} solo aparece después de una frase que ya se sostiene, y nunca al principio.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'El griego y el hebreo marcan el foco con el caso y con la partícula, y el portugués lo marca con la posición. Por eso una construcción topicalizada en griego no siempre sale topicalizada en portugués.',
      ),
    },
    {
      label: T('Por qué importa el orden'),
      text: T(
        'La palabra aislada no decide nada: {vi o homem de longe} tiene dos lecturas. Quien lee solo las palabras no sabe cuál quiso el texto, y el orden es lo que lo dice.',
      ),
    },
  ],
  examples: [
    { text: 'Um livro foi comprado.', gloss: T('Orden neutro: lo nuevo es el verbo.') },
    { text: 'Ontem comprou-se um livro.', gloss: T('Tiempo topicalizado: lo nuevo es el tiempo.') },
    { text: 'Foi ele quem viu o homem.', gloss: T('El pronombre topicalizado destaca al agente.') },
    {
      text: 'Entreguei o livro ao professor.',
      gloss: T('El objeto indirecto al final es lo nuevo.'),
    },
    { text: 'Vi o homem de longe.', gloss: T('Dos lecturas posibles para las mismas palabras.') },
    { text: 'Vi o homem que estava longe.', gloss: T('La ambigüedad resuelta con {que}.') },
    {
      text: 'O homem, que era pobre, deu o livro.',
      gloss: T('La pobreza va entre comas: es paréntesis.'),
    },
    {
      text: 'É que eu não quis dizer isso.',
      gloss: T('El {é que} introduce la explicación después de la frase.'),
    },
  ],
  tables: [
    {
      caption: T('Orden neutro y orden marcado'),
      head: ['Ordem', 'Frase', 'O que é novo'],
      rows: [
        ['neutra', 'comprou-se um livro', 'o ato de comprar'],
        ['topicalizada', 'ontem comprou-se um livro', 'o tempo'],
        ['topicalizada', 'comprou-se ontem o livro', 'o objeto'],
        ['topicalizada', 'foi ele quem comprou', 'o sujeito'],
      ],
    },
    {
      caption: T('Paréntesis'),
      head: ['O que é antigo', 'Onde vai', 'Frase'],
      rows: [
        ['a pobreza do homem', 'entre vírgulas', 'o homem, que era pobre, deu o livro'],
        ['o tempo', 'no começo', 'no terceiro dia ele ressuscitou'],
        ['a qualidade', 'entre vírgulas', 'a lei, que era santa, foi lida'],
      ],
    },
    {
      caption: T('Los demostrativos como punteros'),
      head: ['Pronome', 'Aponta para'],
      rows: [
        ['isto', 'o que se discute agora'],
        ['isso', 'o que já está no contexto'],
        ['aquilo', 'o que está fora da conversa'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En «ontem comprou-se um livro», la información nueva es:'),
    options: [T('el tiempo'), T('el verbo'), T('el sujeto'), T('el lugar')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('La información nueva va siempre al ______ de la frase.'),
      answer: 'fim',
      hint: T('Es la posición marcada del portugués.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase resuelve la ambigüedad de {vi o homem de longe}?'),
      options: [
        T('vi o homem que estava longe'),
        T('vi o homem de longe ontem'),
        T('vi ontem o homem de longe'),
        T('vi o homem longe'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona el pronombre con lo que señala.'),
      pairs: [
        { a: T('isto'), b: T('o que se discute agora') },
        { a: T('isso'), b: T('o que já está no contexto') },
        { a: T('aquilo'), b: T('o que está fora da conversa') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
};
