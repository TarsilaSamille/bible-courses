import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  title: T('Preposiciones: de, en y las relaciones de tiempo y lugar'),
  subtitle: T('in, on, at, by — un sistema que no se deduce'),
  section: T('Preposiciones'),
  body: C(`## Tres preposiciones para el mismo lugar

El portugués tiene {em} y {a}. El inglés tiene tres, y la elección entre ellas no es lógica: es convencional. {In} marca el interior de un espacio cerrado, {on} marca una superficie, y {at} marca un punto.

La prueba más útil es la del **tamaño**: {in} es el espacio amplio e indefinido ({in the city}, {in Brazil}, {in the room}); {on} es la superficie ({on the wall}, {on the table}, {on page ten}); {at} es el punto preciso ({at the door}, {at 12 Baker Street}, {at the bus stop}).

Con el tiempo se repite el mismo trío, y por eso es aprendible: {in} para meses, años, estaciones y partes del día ({in May}, {in 1998}, {in the morning}); {on} para días y fechas ({on Monday}, {on 12 May}); {at} para horas y expresiones fijas ({at six o'clock}, {at night}, {at Christmas}).

Juan 1:1 en la KJV abre con {In the beginning was the Word}, y eso es {in} más tiempo sin artículo: {in} delante de un sustantivo de tiempo no lleva artículo. Mateo 2:1 repite la llave en {in the days of Herod}.

## Los tres sentidos de by

{By} es la preposición que más confunde al hablante de portugués, y la confusión viene de tener **tres sentidos**. El primero es un límite de tiempo: {by Friday} significa "hasta el viernes como muy tarde", no "el viernes" ({on Friday}) ni "cerca del viernes" ({near Friday}).

El segundo es el medio: {by car}, {by train}, {by hand}, {by post}, {by letter}. No hay artículo ni preposición alternativa.

El tercero es la proximidad: {by the river}, {by the window}, {by the door}. Es el mismo sentido que {next to}, y es el único de los tres en que el sustantivo suele llevar artículo.

La confusión entre ellos es previsible: {by Friday} y {by the river} son la misma palabra con sentidos que no tienen nada que ver, y por eso no hay una regla única para {by}.

## Until, till y from

"Durar hasta" es {until} o {till}: {I will stay until Friday}. "De" es {from}: {from Monday to Friday}. Combinando los dos sale {from ... to ...}, y esa es la forma que aparece en horarios y en precios: {from nine to five}.

La diferencia entre {until} y {by} es la que pide el examen: {I will wait until five} quiere decir que espero hasta las cinco; {I will wait by five} quiere decir que las cinco es el plazo y puedo parar antes.

## Dónde generaliza el aprendiz

El error tiene el mismo origen que las preposiciones de lugar: el portugués obliga a elegir una palabra y el aprendiz la generaliza. Tres frases muestran el patrón entero: {He is in the room}, {The book is on the desk}, {She is at the station}. El aprendiz escribe {in the desk} y {at the room}, y las dos formas están mal por un motivo que la gramática no explica.

Lo que salva al aprendiz es la prueba del tamaño: **¿el sustantivo designa un espacio con interior, una superficie o un punto?** Tres preguntas, tres preposiciones, y las mismas respuestas valen para el tiempo.`),
  vocab: [
    V('in the city', 'city', 'en la ciudad'),
    V('in the room', 'room', 'en la habitación'),
    V('on the wall', 'wall', 'en la pared'),
    V('on the table', 'table', 'en la mesa'),
    V('at the door', 'door', 'en la puerta'),
    V('at the bus stop', 'bus stop', 'en la parada de autobús'),
    V('in May', 'May', 'en mayo'),
    V('in 1998', '1998', 'en 1998'),
    V('in the morning', 'morning', 'por la mañana'),
    V('on Monday', 'Monday', 'el lunes'),
    V("at six o'clock", "o'clock", 'a las seis'),
    V('by Friday', 'by', 'para el viernes'),
    V('until Friday', 'until', 'hasta el viernes'),
    V('from Monday to Friday', 'from', 'de lunes a viernes'),
    V('by the river', 'by', 'cerca del río'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'In marca el interior y el espacio amplio; on marca la superficie; at marca el punto preciso.',
      ),
    },
    {
      n: '2',
      text: T(
        'Con el tiempo: in para meses, años, estaciones y partes del día; on para días y fechas; at para horas y expresiones fijas.',
      ),
    },
    {
      n: '3',
      text: T(
        'By tiene tres sentidos independientes: límite de tiempo (by Friday), medio (by car) y proximidad (by the river).',
      ),
    },
    {
      n: '4',
      text: T('Until marca duración hasta; by marca un plazo máximo. Son frases distintas.'),
    },
    {
      n: '5',
      text: T(
        'Un tramo de un punto a otro usa from más to: from Monday to Friday, from nine to five.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'Juan 1:1 trae In the beginning y Mateo 2:1 trae in the days of Herod. En los dos la preposición es in, y el sustantivo de tiempo va sin artículo.',
      ),
    },
    {
      label: T('Diagnóstico:'),
      text: T(
        'Si alguien escribe in the desk o at the room, el problema es de categoría espacial y no de memoria: hay que decidir entre interior, superficie y punto antes de elegir la preposición.',
      ),
    },
  ],
  examples: [
    { text: '{in the room}', gloss: T('en la habitación — interior') },
    { text: '{on the desk}', gloss: T('sobre el escritorio — superficie') },
    { text: '{at the station}', gloss: T('en la estación — punto') },
    { text: '{in the morning}', gloss: T('por la mañana') },
    { text: '{on 12 May}', gloss: T('el 12 de mayo — fecha') },
    { text: "{at six o'clock}", gloss: T('a las seis') },
    { text: '{In the beginning was the Word}', gloss: T('En el principio era la Palabra') },
    { text: '{by Friday}', gloss: T('para el viernes — plazo') },
    { text: '{until Friday}', gloss: T('hasta el viernes — duración') },
    { text: '{by the river}', gloss: T('cerca del río') },
    { text: '{from nine to five}', gloss: T('de nueve a cinco') },
  ],
  tables: [
    {
      caption: T('Lugar: la prueba del tamaño'),
      head: [T('Preposición'), T('Marca'), T('Ejemplos')],
      rows: [
        ['{in}', T('interior, espacio amplio'), '{in the room, in Brazil}'],
        ['{on}', T('superficie, página'), '{on the wall, on page ten}'],
        ['{at}', T('punto, dirección precisa'), '{at the door, at 12 Baker Street}'],
      ],
    },
    {
      caption: T('Tiempo y plazo'),
      head: [T('Preposición'), T('Se usa con'), T('Ejemplo')],
      rows: [
        ['{in}', T('meses, años, estaciones, partes del día'), '{in May, in the morning}'],
        ['{on}', T('días y fechas'), '{on Monday, on 12 May}'],
        ['{at}', T('horas y expresiones fijas'), "{at six o'clock, at night}"],
        ['{until}', T('duración hasta'), '{until Friday}'],
        ['{by}', T('plazo'), '{by Friday}'],
        ['{from ... to}', T('de un punto a otro'), '{from nine to five}'],
      ],
    },
    {
      caption: T('Los tres sentidos de by'),
      head: [T('Sentido'), T('Ejemplo'), T('Traducción')],
      rows: [
        [T('límite de tiempo'), '{by Friday}', T('hasta el viernes')],
        [T('medio'), '{by car}', T('en coche')],
        [T('proximidad'), '{by the river}', T('junto al río')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál frase es correcta?'),
    options: [
      T('She is at the room'),
      T('She is in the room'),
      T('She is on the room'),
      T('She is in the desk'),
    ],
    answer: 1,
    hint: T('Una habitación es espacio cerrado: la preposición es in.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Completa con la preposición de tiempo: '___ 1998 he moved.'"),
      answer: 'In',
    },
    { kind: 'fill', prompt: T("Completa: 'I will wait ___ five.' (plazo)"), answer: 'by' },
    {
      kind: 'match',
      prompt: T('Relaciona el uso con el ejemplo.'),
      pairs: [
        { a: T('superficie'), b: '{on the wall}' },
        { a: T('punto'), b: '{at the door}' },
        { a: T('espacio amplio'), b: '{in the city}' },
        { a: T('plazo'), b: '{by Friday}' },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál frase es correcta?'),
      options: [
        T('I will stay until five'),
        T('I will stay by five'),
        T('I will stay in five'),
        T('I will stay on five'),
      ],
      answer: 0,
    },
  ],
};
