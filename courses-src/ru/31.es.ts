import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  section: T('Lectura'),
  title: T('Leyendo Juan 1 de principio a fin'),
  subtitle: T('caso, aspecto y orden en la misma página, versículo por versículo'),
  body: C(`
## El primer versículo, palabra por palabra

**В начале было Слово, и Слово было у Бога, и Слово было Бог.** Tres cláusulas, y cada una lleva una decisión de caso, una de aspecto y una de orden. Es el mejor párrafo posible para probar todo lo anterior.

В начале es prepositivo, porque в rige el prepositivo y начало es neutro, lo que hace que el caso aparezca como начале. Было es el pasado de быть, un verbo sin aspecto, y la ausencia de бы es lo que marca la frase como afirmación. Слово es nominativo, y es neutro: por eso el verbo parece no concordar con nada visible.

En la segunda cláusula у Бога es genitivo, y el genitivo lo marca la preposición y no la terminación. En la tercera, Слово vuelve al nominativo, ahora como predicativo después de был. El mismo sustantivo, tres cláusulas, tres funciones, y ninguna marcada.

## Donde el texto cambia de registro

Juan 1 es un texto en dos partes, y el cambio ocurre en el versículo 6. Hasta ahí el lenguaje es de hecho: verbo en pasado, cópula presente, sustantivo con preposición. Desde el versículo 6 aparecen personas con nombre, verbo en presente y pronombres que se repiten.

Los versículos 6 a 8 son los más difíciles para quien llega del griego, porque el griego del versículo 7 tiene una partícula que el ruso traduce por una palabra entera. Он пришёл свидетельствовать es un perfectivo simple, y dice que Juan llegó una vez, con hora de llegada. El mismo Juan, cuatro versículos después, es Иоанн свидетельствует о Нём, en presente: el testimonio es lo que hace, y no una vez.

El versículo 14 es el más largo del capítulo y el más exigente. И Слово стало плотию, и обитало с нами, полное благодати и истины trae un perfectivo (стало), un imperfectivo (обитало), un participio corto (полное) y dos genitivos (благодати, истины) en una cláusula de doce palabras. Quien haya leído las lecciones anteriores tiene aquí todo lo que necesita.

## La cadena de pronombres

La segunda mitad del capítulo depende de tres pronombres que se repiten, y la repetición es lo que sostiene el texto. Его en 1:12 y 1:16 es genitivo singular y se refiere a Cristo. Которые en 1:12 es nominativo plural y es el sujeto de приняли. Оно en 1:2 es neutro singular y vuelve al Слово del primer versículo.

Lo que un lector pierde sin esa cadena es la dirección de la frase. К своим же Он пришёл, и свои Его не приняли es la primera vez que el texto usa un posesivo retrospectivo, y свои es un plural que se refiere al mismo grupo que el которые del versículo 12. La cadena permite decir "los suyos" dos veces sin repetir el sustantivo.

Y es la cadena la que permite que Его en el versículo 16 sea el genitivo de полноты y a la vez el posesivo del que habla. Una misma palabra con dos funciones, y quien no distinguía el genitivo del posesivo leyó el versículo dos veces sin darse cuenta.

## Lo que le queda al lector, y lo que cierra el capítulo

Tres cosas. Primera: **mirar la terminación antes del sustantivo.** La terminación da el caso en casi todos los sustantivos, y quien la mira primero llega al verbo sabiendo ya qué rige.

Segunda: **buscar el verbo antes de decidir el caso.** En los casos ambiguos, y Бога es el más común, es el verbo lo que resuelve. вижу Бога y слово Бога tienen la misma palabra y casos distintos, y sólo el verbo los distingue.

Tercera: **contar los perfectivos.** En una página de texto ruso, el número de verbos perfectivos dice cuántos hechos hay. Juan 1 tiene pocos perfectivos al principio y muchos después del versículo 14, y esa curva es la curva de la narrativa.

Y la última cláusula del capítulo es esta.

**Бога не видел никто никогда; Единородный Сын, сущий в недре Отчем, Он явил.** El versículo más difícil del capítulo cierra con un verbo perfectivo, явил, y el perfectivo es lo que cierra el texto: el Hijo se manifestó, y el acto tiene principio y fin.

Lo que viene antes es un doble negador, никто никогда, que es la manera más fuerte de negar en ruso. Y сущий es un participio presente activo, que en português tendría que convertirse en una forma verbal. Quien haya leído las lecciones anteriores reconoce las tres cosas sin esfuerzo: la negación doble, el participio presente y el perfectivo de cierre.
`),
  vocab: [
    V('В начале было Слово', 'начало', 'en el principio era la Palabra (Jn 1:1)'),
    V('Слово было у Бога', 'бог', 'la Palabra estaba con Dios'),
    V('Слово было Бог', 'бог', 'la Palabra era Dios'),
    V('Оно было в начале у Бога', 'оно', 'él estaba en el principio con Dios (Jn 1:2)'),
    V('начало быть', 'начать', 'empezó a ser; la fórmula de Jn 1:3'),
    V('сотворил', 'сотворить', 'creó; perfectivo (Gn 1:1)'),
    V('свидетельствует', 'свидетельствовать', 'testifica; imperfectivo presente'),
    V('пришёл', 'прийти', 'vino; perfectivo'),
    V('обитало', 'обитать', 'habitó; imperfectivo'),
    V('полное', 'полный', 'lleno; participio corto neutro'),
    V('сущий', 'сущий', 'que es; participio presente activo'),
    V('явил', 'явить', 'se manifestó; el perfectivo de cierre'),
    V('никто', 'никто', 'nadie'),
    V('никогда', 'никогда', 'nunca'),
    V('свои', 'свой', 'los suyos; posesivo reflexivo'),
    V('Он явил', 'явить', 'él se manifestó; sujeto explícito'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En Слово было у Бога, ¿qué caso es Бога?'),
    options: [T('Acusativo'), T('Genitivo'), T('Dativo')],
    answer: 1,
    hint: T('У rige el genitivo, y el genitivo lo marca la preposición y no la terminación.'),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete Jn 1:1: В начале ___ Слово'), answer: 'было' },
    {
      kind: 'choose',
      prompt: T('¿Qué verbo de Jn 1:14 es perfectivo?'),
      options: [T('обитало'), T('стало'), T('полное')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete Jn 1:18: Бог не видел никто ___'), answer: 'никогда' },
  ],
  rules: [
    {
      n: '1',
      text: T('El caso se lee en la terminación antes del sustantivo, y el verbo lo confirma.'),
    },
    { n: '2', text: T('En los casos ambiguos, como {Бога}, decide el verbo.') },
    {
      n: '3',
      text: T('Los perfectivos de una página dicen cuántos hechos hay: marcan principio y fin.'),
    },
    {
      n: '4',
      text: T(
        '{Никто} y {никогда} son la negación más fuerte, y {сущий} es un participio presente activo.',
      ),
    },
    {
      n: '5',
      text: T('Los pronombres {Оно}, {Его} y {свои} sostienen la segunda mitad del capítulo.'),
    },
  ],
  notes: [
    {
      label: T('La curva de los perfectivos'),
      text: T(
        'Contar los verbos perfectivos de un capítulo es una manera barata de medir una narrativa. Juan 1 abre con frases de estado, casi sin perfectivos, y cierra con el testimonio y luego con la manifestación. El número de perfectivos crece justo donde el texto pasa a contar hechos en vez de describir una situación, y por eso el aspecto es la información más fácil de perder en una traducción.',
      ),
    },
    {
      label: T('Cuando la traducción tiene que elegir'),
      text: T(
        'Juan 1:3 es el versículo en el que la traducción decide más: начало быть puede volverse empezó a ser, llegó a ser o pasó a existir, y cada opción carga un aspecto distinto. La opción más fiel al griego es la que mantiene la idea de origen. Lo que un traductor no puede hacer es elegir sin darse cuenta, porque quien lee la traducción no tiene el griego al lado para comprobar.',
      ),
    },
  ],
  examples: [
    { text: 'В начале было Слово', gloss: T('en el principio era la Palabra') },
    { text: 'и Слово было у Бога', gloss: T('y la Palabra estaba con Dios') },
    { text: 'и Бог был Слово', gloss: T('y Dios era la Palabra') },
    { text: 'Оно было в начале у Бога', gloss: T('él estaba en el principio con Dios') },
    { text: 'Все чрез Него начало быть', gloss: T('todo llegó a ser por medio de él') },
    { text: 'Он пришёл свидетельствовать', gloss: T('vino a dar testimonio') },
    { text: 'Иоанн свидетельствует о Нём', gloss: T('Juan testifica acerca de él') },
    { text: 'И Слово стало плотию', gloss: T('y el Verbo se hizo carne') },
    { text: 'полное благодати и истины', gloss: T('lleno de gracia y de verdad') },
    {
      text: 'Единородный Сын, сущий в недре Отчем, Он явил',
      gloss: T('el Hijo unigénito, que está en el seno del Padre, él se manifestó'),
    },
  ],
  tables: [
    {
      caption: T('Juan 1:1-3, forma por forma'),
      head: [T('Forma'), T('Caso o función'), T('Aspecto'), T('Glosa')],
      rows: [
        [T('В начале'), T('prepositivo'), T('—'), T('en el principio')],
        [T('было'), T('pasado neutro'), T('sin aspecto'), T('era')],
        [T('Слово'), T('nominativo neutro'), T('—'), T('la Palabra')],
        [T('у Бога'), T('genitivo'), T('—'), T('con Dios')],
        [T('начало быть'), T('verbo compuesto'), T('perfectivo'), T('empezó a ser')],
      ],
    },
    {
      caption: T('La curva del texto, en dos partes'),
      head: [T('Versículos'), T('Qué domina'), T('Aspecto predominante'), T('Ejemplo')],
      rows: [
        [T('1 a 5'), T('afirmaciones de estado'), T('sin aspecto e imperfectivo'), T('светит')],
        [
          T('6 a 8'),
          T('acciones de una persona'),
          T('los dos, alternando'),
          T('пришёл, свидетельствует'),
        ],
        [T('9 a 13'), T('recibir y rechazar'), T('perfectivo'), T('приняли, не приняли')],
        [
          T('14 a 18'),
          T('manifestación y testimonio'),
          T('los dos, con participio'),
          T('стало, обитало, явил'),
        ],
      ],
    },
    {
      caption: T('La cadena de pronombres'),
      head: [T('Pronombre'), T('Caso'), T('A qué se refiere'), T('Dónde aparece')],
      rows: [
        [T('Слово'), T('nominativo'), T('el Verbo'), T('1:1, 1:2 por Оно, 1:14')],
        [T('Оно'), T('nominativo neutro'), T('la Palabra'), T('1:2')],
        [T('Его'), T('genitivo singular'), T('Cristo, o el Padre en 1:18'), T('1:12, 1:16, 1:18')],
        [T('которые'), T('nominativo plural'), T('los que recibieron'), T('1:12')],
        [T('свои'), T('nominativo plural'), T('el mismo grupo de 1:12'), T('1:11')],
      ],
    },
  ],
};
