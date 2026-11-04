import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  section: T('El adjetivo y el adverbio'),
  title: T('El adverbio: posición'),
  subtitle: T('ontem cheguei tarde, y el adverbio que cierra la frase'),
  body: C(`## El adverbio que cierra la frase

El adverbio de circunstancia modificadora tiene un sitio fijo: va al final de la oración. {Ouvi tudo claramente}, {Saiu ontem à noite}, {Ficou ali por três dias}. Quien pone ese adverbio en medio llama la atención sobre él, y quien lo pone al principio está haciendo otra cosa, que es fijar el tiempo.

Lo que cierra la oración es la circunstancia, no la cualidad. En {Falei com ele ontem} el adverbio dice cuándo, y por eso cierra. En {Ontem falei com ele} el mismo adverbio abre la frase, y la información que queda al final pasa a ser el interlocutor.

## El adverbio de tiempo definido abre la frase

Tiempo definido es lo que fija la acción en un punto: {ontem}, {hoje}, {amanhã}, {na terça-feira}, {naquele dia}. Cuando el adverbio es de ese tipo puede ir al principio, y ahí destaca el tiempo y deja el resto de la frase para después. {Ontem cheguei tarde} pone el tiempo en primer plano; {Cheguei tarde ontem} pone la acción en primer plano.

El contraste es el mismo del portugués colloquial: {Ontem saí de casa} y {Saí de casa ontem} dicen lo mismo, y la primera suena más informativa porque destaca el día.

## El orden verbo, objeto, adverbio

Cuando la frase tiene los tres, el orden es verbo, objeto, adverbio: {O mestre explicou a lição lentamente}, {Jesus amou os seus até o fim}, {Li o livro inteiro}. Mover el adverbio al medio da énfasis y nada más: {Ele explicou lentamente a lição} suena a frase de efecto.

La posición neutra es, por tanto, la última, y quien traduce debe ponerla ahí salvo que el griego original estire el mismo énfasis. Al final es el patrón; en medio, énfasis; al principio, tiempo.

## Não ... nunca: una correlación

Hay adverbios que no funcionan solos. {Nunca} y {jamais} exigen {não} delante, y la negación vale para los dos: {Não vi nunca}, {Não vi jamais}. Lo mismo con {nem}: {Nem vi}, y la frase se refuerza cuando el verbo también es negativo: {Nem vi, nem ouvi}.

El punto es que {não ... nunca} es una correlación, no dos negaciones. Traducir cada palabra por una negación duplica lo que ya está: el griego y el hebreo marcan la negación una sola vez, y el portugués necesita las dos palabras porque el adverbio es el que carga el sentido.

## Criterio de lectura

En cualquier frase con adverbio, pregúntate: ¿cuál es el adverbio? ¿Está al final, en medio o al principio? ¿Y es de tiempo definido? Tres preguntas, y la posición queda explicada.

El Salmo 5.4 pone {pela manhã} dos veces, al principio de las dos oraciones, y la segunda vez el tiempo ya se conoce. Quien traduce conserva esa posición en vez de dispersarla, y el lector percibe que todo el salmo es una petición que se repite al amanecer.`),
  vocab: [
    V('ontem', 'ontem', 'ayer'),
    V('hoje', 'hoje', 'hoy'),
    V('amanhã', 'amanhã', 'mañana'),
    V('claramente', 'clara', 'claramente'),
    V('tarde', 'tarde', 'tarde'),
    V('cedo', 'cedo', 'temprano'),
    V('juntos', 'junto', 'juntos'),
    V('ali', 'ali', 'allí'),
    V('então', 'então', 'entonces'),
    V('sempre', 'sempre', 'siempre'),
    V('jamais', 'jamais', 'jamás'),
    V('nem', 'nem', 'ni'),
    V('não', 'não', 'no'),
    V('nunca', 'nunca', 'nunca'),
    V('pela manhã', 'manhã', 'por la mañana'),
  ],
  rules: [
    { n: '§1', text: T('El adverbio de circunstancia modificadora va al final de la oración.') },
    {
      n: '§2',
      text: T('El adverbio de tiempo definido puede ir al principio, y ahí destaca el tiempo.'),
    },
    {
      n: '§3',
      text: T('Con verbo, objeto y adverbio, el orden neutro es verbo, objeto, adverbio.'),
    },
    { n: '§4', text: T('{Nunca} y {jamais} exigen {não} delante: la negación vale para los dos.') },
    {
      n: '§5',
      text: T('Un adverbio en medio de la frase marca énfasis, y no una posición neutra.'),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'El griego y el hebreo dejan el adverbio en cualquier posición, porque son lenguas de orden libre. El portugués no: cada posición carga un efecto, y ese efecto es lo que decide el traductor.',
      ),
    },
    {
      label: T('Doble negador'),
      text: T(
        'En {não vi jamais}, quien lee portugués no oye dos negaciones: la segunda niega al adverbio, no al verbo. Lo mismo vale para {não é possível}.',
      ),
    },
  ],
  examples: [
    { text: 'Ontem cheguei tarde.', gloss: T('Tiempo definido abriendo la frase.') },
    {
      text: 'Cheguei tarde ontem.',
      gloss: T('El mismo contenido, con la acción en primer plano.'),
    },
    { text: 'Ouvi tudo claramente.', gloss: T('Circunstancia modificadora cerrando la oración.') },
    {
      text: 'O mestre explicou a lição lentamente.',
      gloss: T('Orden neutro: verbo, objeto, adverbio.'),
    },
    { text: 'Saiu ontem à noite.', gloss: T('Dos adverbios de tiempo, al final.') },
    { text: 'Não vi jamais.', gloss: T('Correlación: {não} más {jamais}.') },
    { text: 'Nem vi, nem ouvi.', gloss: T('Verbo y adverbio los dos negativos.') },
    {
      text: 'Pela manhã, ó Senhor, ouvirás a minha voz.',
      gloss: T('Salmo 5.4: tiempo al principio de la oración.'),
    },
  ],
  tables: [
    {
      caption: T('Posición del adverbio'),
      head: ['Posição', 'Exemplo', 'O que destaca'],
      rows: [
        ['no início', 'Ontem cheguei tarde.', 'o tempo'],
        ['no meio', 'Ele explicou lentamente a lição.', 'a circunstância'],
        ['no fim', 'Ouvi tudo claramente.', 'nada: é a posição neutra'],
      ],
    },
    {
      caption: T('El orden de los tres'),
      head: ['Verbo', 'Objeto', 'Advérbio'],
      rows: [
        ['O mestre explicou', 'a lição', 'lentamente'],
        ['Jesus amou', 'os seus', 'até o fim'],
        ['Li', 'o livro', 'inteiro'],
      ],
    },
    {
      caption: T('Correlación negativa'),
      head: ['Advérbio', 'O que vem antes', 'Exemplo'],
      rows: [
        ['nunca', 'não', 'não vi nunca'],
        ['jamais', 'não', 'não vi jamais'],
        ['nem', 'verbo negativo', 'nem vi'],
        ['tampouco', 'também', 'nem eu, tampouco'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Adónde va el adverbio de circunstancia modificadora?'),
    options: [
      T('al final de la oración'),
      T('siempre al principio'),
      T('antes del verbo'),
      T('entre el artículo y el sustantivo'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{nunca} exige {não} delante, y los dos forman una ______.'),
      answer: 'correlação',
      hint: T('No son dos negaciones independientes.'),
    },
    {
      kind: 'choose',
      prompt: T('En «ouvi tudo claramente», el adverbio está:'),
      options: [
        T('al final'),
        T('al principio'),
        T('en medio de la oración'),
        T('pegado al verbo'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona la posición con lo que destaca.'),
      pairs: [
        { a: T('no início'), b: T('o tempo') },
        { a: T('no meio'), b: T('a circunstância') },
        { a: T('no fim'), b: T('nada: é a posição neutra') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
};
