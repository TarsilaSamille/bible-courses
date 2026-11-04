import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  section: T('Sintaxis'),
  title: T('El orden SOV, y por qué falla la traducción automática'),
  subtitle: T(
    'El verbo va al final, el objeto indirecto va antes del directo y el adjetivo va antes del sustantivo: tres inversiones, un solo orden',
  ),
  body: C(`
## El verbo va al final

El portugués dice "yo como manzana": sujeto, verbo, objeto. El japonés dice {watashi wa ringo o taberu}, el mismo contenido con el verbo al final. Parece invertido; no es caos, es **el orden**. Y es exactamente el mismo orden del mandarín, que ya viste: allí {wǒ chī píngguǒ}, aquí {watashi wa ringo o taberu}. Dos lenguas lejanas, una sola regla.

Y la regla tiene una consecuencia práctica: **todo lo que el portugués pone antes del verbo, el japonés lo pone todavía más adelante**. La negación y los adverbios de tiempo y de modo abren la frase, y el verbo la cierra. En "ayer no fui", el japonés pone "ayer" al principio y la negación pegada al verbo al final. Quien traduce frase por frase, palabra por palabra, llega al final con las piezas en el sitio equivocado, y por eso la traducción automática se hunde aquí: conoce las palabras y no conoce el orden.

## El objeto indirecto va antes del directo

El portugués dice "le doy un libro": el indirecto es el último sintagma. En japonés el indirecto es el primero de todos. {kare ni hon o ageru} es "le doy un libro": {kare ni} para la persona, {hon o} para el libro, y el verbo {ageru} al final.

Esto no es una manía del japonés: es el mismo patrón que viste en mandarín, donde el indirecto también va antes del directo. El portugués hace lo contrario que las dos, y por eso "dar", "mandar", "mostrar" y "enseñar" son las construcciones donde el error de traducción aparece con más fuerza: en portugués el indirecto cierra la frase, y en japonés la abre.

## El adjetivo es un sustantivo que va antes

El portugués pone el adjetivo después del sustantivo: "un libro rojo". El japonés lo pone antes: {akai hon}, "rojo libro". El adjetivo japonés no es un adjetivo en el sentido en que el portugués usa la palabra: es un **sustantivo que modifica otro sustantivo**, y por eso camina delante de él. La palabra {utsukushii}, "bonito", es una palabra, no una categoría.

Lo mismo vale para un sustantivo usado como adjetivo, lo que los gramáticos llaman adjetivo nominal: {bijutsu}, "arte", "belleza", entra delante de otro sustantivo con el sentido de "artístico", "bello". En portugués diríamos "un artista"; en japonés es "arte + persona". Y aquí la traducción automática falla dos veces: conoce el valor del adjetivo y lo pone en el sitio equivocado.

## El orden de los modificadores, que no perdona

En un sintagma con más de un modificador el orden es fijo y va del más cercano al sustantivo al más lejano: sustantivo, relativo, numeral, descriptivo. Para "la casa blanca pequeña", el sustantivo es {ie}, "casa"; el relativo dice qué casa; el numeral dice cuántas; el descriptivo es {shiroi}, "blanco". El japonés escribe el sustantivo primero y apila los modificadores detrás, del más ceñido al más suelto.

Es lo contrario del portugués en todo, y basta errarlo una vez para que el sintagma deje de existir: un adjetivo después del sustantivo no es un adjetivo, es otro sustantivo. A cambio, una vez memorizado el orden, cualquier sintagma largo sigue siendo legible, y eso es lo que el traductor usa para justificar la inversión del griego.

## Dónde aparece esto en la Biblia

La traducción japonesa de 1987 pone **un tópico al principio del versículo** para reflejar el griego, y el resto de la frase sale en orden SOV sin ninguna concesión. Juan 1:1 es el mejor ejemplo posible, porque es el primer versículo que todo el mundo sabe de memoria: {hazime wa kotoba datta}. "En el principio" es un marcado de tópico al frente, y lo que sigue es {kotoba}, la Palabra, y luego el verbo {atta}, era.

Fíjate en lo que hizo el traductor. Podía haber escrito "en el principio había la palabra" en orden portugués y nadie se quejaría. En cambio trasladó "en el principio" al comienzo de la frase, que es donde lo pone el griego cuando el verbo es *ēn*, "era". Eso es exactamente lo que permite el marcado de tópico {wa}: mover un constituyente al principio y crear contraste, como en "en cuanto a él, él va". Un tópico al principio es la herramienta más poderosa de que dispones en una lengua SOV, y por eso la nueva traducción japonesa parece más seca que la nuestra y es más fiel.
`),
  vocab: [
    V('hon', '本', 'libro (hon)'),
    V('akai', '赤い', 'rojo; adjetivo, va antes del sustantivo (akai)'),
    V('utsukushii', '美しい', 'bonito; adjetivo, va antes del sustantivo (utsukushii)'),
    V('shiroi', '白い', 'blanco; adjetivo posicional (shiroi)'),
    V('ie', '家', 'casa (ie)'),
    V('kare', '彼', 'él; pronombre de tercera persona (kare)'),
    V('ageru', 'あげる', 'dar; ofrecer (ageru)'),
    V('ni', 'に', 'objeto indirecto y destino (ni)'),
    V('o', 'を', 'objeto directo (o)'),
    V('wa', 'は', 'tópico; contraste (wa)'),
    V('bijutsu', '美術', 'arte; belleza; adjetivo nominal (bijutsu)'),
    V('hazime', '初め', 'principio; comienzo (hazime)'),
    V('kotoba', '言葉', 'palabra (kotoba)'),
    V('atta', 'あった', 'ser; estar; forma copulativa después del verbo (atta)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El orden es sujeto — objeto — verbo. El verbo cierra la frase, y no hay posición alternativa.',
      ),
    },
    {
      n: '2',
      text: T(
        'Lo que el español pone antes del verbo, el japonés lo pone todavía más adelante: adverbio y negación abren la frase.',
      ),
    },
    {
      n: '3',
      text: T(
        'El objeto indirecto va antes del directo: {kare ni hon o ageru}, nunca {hon o kare ni ageru}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Un adjetivo es un sustantivo y va antes del sustantivo: {akai hon}, nunca {hon akai}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Los modificadores van del más cercano al sustantivo al más lejano: sustantivo, relativo, numeral, descriptivo.',
      ),
    },
  ],
  notes: [
    {
      label: T('El marcado de tópico {wa} es la válvula de escape'),
      text: T(
        'El marcado de tópico permite mover cualquier constituyente al principio de la frase y crear contraste, como en "en cuanto a él, él va". En SOV, sin marcado de tópico, no hay manera de reorganizar nada.',
      ),
    },
    {
      label: T('La traducción automática falla por posición, no por vocabulario'),
      text: T(
        'Conoce {utsukushii} y conoce {ageru}; lo que no sabe es que uno va antes del sustantivo y el otro después. El resultado es gramatical en español e intraducible en japonés.',
      ),
    },
  ],
  examples: [
    { text: '赤い本', gloss: T('akai hon — un libro rojo') },
    { text: '美しい家', gloss: T('utsukushii ie — una casa bonita') },
    { text: '彼に本をあげる', gloss: T('kare ni hon o ageru — le doy un libro') },
    { text: '学生に本を与えた', gloss: T('gakusei ni hon o ataeta — dio un libro al estudiante') },
    {
      text: '初めは言葉だった',
      gloss: T('hazime wa kotoba datta — en el principio era la Palabra'),
    },
  ],
  tables: [
    {
      caption: T('Objeto indirecto y directo en tres lenguas'),
      head: [T('Lengua'), T('Orden de los complementos'), T('La misma frase')],
      rows: [
        [T('español'), T('directo antes del indirecto'), T('le doy un libro')],
        [T('japonés'), T('indirecto antes del directo'), T('{kare ni hon o ageru}')],
        [T('mandarín'), T('indirecto antes del directo'), T('{wǒ gěi tā yī běn shū}')],
      ],
    },
    {
      caption: T('El orden de los modificadores: del más ceñido al más suelto'),
      head: [T('Posición'), T('Qué entra ahí'), T('Ejemplo')],
      rows: [
        [T('1'), T('el sustantivo'), T('{ie} — casa')],
        [T('2'), T('el relativo, que dice qué casa'), T('{bijutsu no ie} — la casa del arte')],
        [T('3'), T('el numeral, que dice cuántas'), T('tres casas, con numeral y contador')],
        [T('4'), T('el descriptivo, el más lejano'), T('{shiroi ie} — la casa blanca')],
      ],
    },
    {
      caption: T('El adjetivo en español y en japonés'),
      head: [T('Español'), T('Japonés'), T('Orden')],
      rows: [
        [T('un libro rojo'), T('{akai hon}'), T('adjetivo antes del sustantivo')],
        [T('una casa bonita'), T('{utsukushii ie}'), T('adjetivo antes del sustantivo')],
        [
          T('una persona artística'),
          T('{bijutsu no hito}'),
          T('sustantivo como adjetivo, antes del sustantivo'),
        ],
        [
          T('un libro rojo bonito'),
          T('{utsukushii akai hon}'),
          T('el descriptivo más lejano va al final, pegado al sustantivo'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En "le doy un libro", ¿qué sintagma va primero en japonés?'),
    options: [T('{hon o}'), T('{kare ni}'), T('{ageru}'), T('{wa}')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Completa "dio un libro al estudiante" con la partícula de objeto indirecto: 学生____本を与えた',
      ),
      answer: 'に',
    },
    {
      kind: 'match',
      prompt: T('Une el elemento con la función que cumple en la frase'),
      pairs: [
        { a: T('{kare ni}'), b: T('objeto indirecto: la persona') },
        { a: T('{hon o}'), b: T('objeto directo: la cosa') },
        { a: T('{ageru}'), b: T('verbo: va al final') },
        { a: T('{wa}'), b: T('tópico: puede abrir la frase') },
        { a: T('{utsukushii}'), b: T('adjetivo: va antes del sustantivo') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo se escribe "un libro rojo"?'),
      options: [T('{hon akai}'), T('{akai hon}'), T('{hon ga akai}'), T('{akai no hon}')],
      answer: 1,
    },
  ],
};
