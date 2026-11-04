import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  section: T('Verbo'),
  title: T('Dónde vive el tiempo, si el verbo no se conjuga'),
  subtitle: T(
    'El japonés dice "ayer" y "siempre" con partículas y adverbios después del verbo, no cambiando el verbo',
  ),
  body: C(`
## El tiempo vive después del verbo

El verbo japonés no se conjuga: no hay un "comí" junto a un "como", no hay terminación de pasado. Entonces, ¿dónde está el tiempo? En otro sitio, **después** de la forma verbal, en partículas y adverbios. El verbo queda exactamente igual, y lo que carga el tiempo es lo que viene después.

El pasado cortés es {masu} convertido en {mashita}: {パンを食べます} es "como" o "voy a comer", {パンを食べました} es "comí". Fíjate en que no hay un verbo "en pasado" junto al verbo "en presente": hay un solo verbo con {masu} y con {mashita}.

La negación cortés es {masen}, y el pasado negativo es ese mismo {masen} más el {deshita} de "era": {masen deshita}. Mira el peldaño que se baja: la negación de presente se queda en {masen} y el pasado baja un grado, hasta {masen deshita}. No entra ninguna terminación nueva: lo que baja es el auxiliar.

Encima de eso, {mashita} seguido de {ka} hace una pregunta: "¿comí, o no?". Es la misma construcción de {ka}, pero aquí no produce duda neutra, produce **pregunta retórica**: la forma educada de decir "claro que no me comí eso".

## Una forma, tres tiempos

La escala es esta: {masu} cubre a la vez presente, hábito y futuro. Una tabla lo resuelve.

En portugués el verbo cambia de forma en los tres casos: "como", "tengo la costumbre de comer", "voy a comer". Tres verbos para una sola idea. En japonés hay uno: {パンを食べます}. Lo que elige el sentido es el contexto: una agenda, un hábito que se repite, una intención.

Y el pasado no tiene "pasado reciente" ni "pasado lejano": {パンを食べました} sirve para ayer y para hace diez años. Lo que dice "ayer" es el adverbio que va delante; cuando falta, es la narración, con su línea del tiempo, la que hace el trabajo.

## Dos "voy a" y un "si"

{masu} es el "voy a" de mi propio plan: yo decidí, yo voy a hacerlo. {deshou} es el "voy a" de la predicción y de la obligación que viene de fuera, "va a llover", "vendrá". Uno es mi decisión; el otro es el mundo decidiendo. Lo mismo vale para la prohibición: {てはいけません} es "no se puede", una obligación que el portugués casi siempre deja implícita.

Ahora el uso sorprendente del día: **el pasado es la fórmula condicional**. El japonés no tiene partícula de "si"; el "si... entonces" se construye con un tiempo que no es tiempo. El "si" va delante, en {tara} o {nara}, y el resultado va después: {雨が降ったら、行く} es "si llueve, iré". El {nara} dice "en caso de que llueva, si llueve de verdad"; el {tara} dice "si llueve (y creo que va a llover)". En los dos, el "si" es un pasado, es el modo japonés de fingir que la condición es un hecho previsto.

## "Estar haciendo" y el pasado que cerró

"Estar haciendo" tampoco se conjuga: es partícula más verbo. El {te} liga un verbo con {imasu}, y el resultado es "está lloviendo". El mismo {te} forma "comer y luego salir"; no marca ningún tiempo, solo pega dos verbos. En texto escrito casi siempre aparece la forma cortés, y ahí el mismo {te} puede estar en "está lloviendo" o "ha estado lloviendo, y el resultado sigue".

Dos versículos muestran la otra cara. En Juan 19:30, {すべては完了した}, el pasado allí declara algo completo en vez de mostrar algo en curso: la obra está hecha, no está en marcha. Es la frase más citada de la traducción japonesa de 1987. Y en 1 Corintios 13:4, {愛は忍耐強い}, no hay partícula de tiempo ninguna: es un presente atemporal, una afirmación que vale siempre, y por eso la frase existe sin {masu} y sin {desu}.

La diferencia entre uno y otro es la diferencia con la que abre el Evangelio de Juan. Juan 1:1 dice {初めに言葉があった}, pasado narrado, algo que ocurrió y que el evangelista cuenta en orden; si el versículo dijera {愛は忍耐強い}, sería una ley general, sin fecha.

Y la regla de oro aquí es simple: la forma **cortés** carga el tiempo; la forma plana casi nunca. En texto bíblico, en una carta, en una noticia, verá {masu} y {desu} casi siempre, y por eso quien no conoce la serie cortés lee el texto sin tiempo.
`),
  vocab: [
    V('masu', 'ます', 'sufijo cortés; presente, hábito y futuro a la vez'),
    V('mashita', 'ました', 'pasado cortés'),
    V('masen', 'ません', 'negativo cortés'),
    V('masen deshita', 'ませんでした', 'pasado negativo: {masen} bajando a {deshita}'),
    V('deshita', 'でした', '"era": la pieza que hace el pasado negativo'),
    V('deshou', 'でしょう', 'predicción: "va a ocurrir sin falta"'),
    V('ka', 'か', 'partícula de pregunta; con {mashita} da la pregunta retórica'),
    V('nai', 'ない', 'negativo en la forma plana'),
    V('ta', 'た', 'pasado en la forma plana, sin registro cortés'),
    V('nakkatta', 'なかった', 'pasado negativo en la forma plana'),
    V('desu', 'です', 'ser/estar en la forma cortés; el "es" que aparece sin verbo'),
    V('imasu', 'います', '"estar"; con {te} forma el progresivo'),
    V('te', 'て', 'conectivo: liga dos verbos y forma el progresivo'),
    V('tara', 'たら', '"si... entonces", hipótesis'),
    V('nara', 'なら', '"si... entonces", condición'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El tiempo no vive en el verbo: vive en la partícula que viene después, y es la serie cortés la que cuenta.',
      ),
    },
    {
      n: '2',
      text: T('{masu} cubre presente, hábito y futuro a la vez; el contexto elige el sentido.'),
    },
    {
      n: '3',
      text: T(
        '{masu} es el "voy a" de mi propio plan; {deshou} es el "voy a" de la predicción y la obligación externa.',
      ),
    },
    {
      n: '4',
      text: T(
        'No hay partícula de "si": el "si... entonces" japonés nace de un pasado, con {tara} o {nara}.',
      ),
    },
    {
      n: '5',
      text: T(
        'La forma cortés cuenta el tiempo y la forma plana casi nunca; por eso el texto escrito es casi todo {masu}.',
      ),
    },
  ],
  notes: [
    {
      label: T('La pregunta que no pregunta'),
      text: T(
        '{mashita} seguido de {ka} es la misma construcción de {ka} de la lección 1, pero aquí se vuelve pregunta retórica: la forma educada de negar algo con todas las letras. Quien lea un versículo con {mashita ka} debe leer desconfianza, no curiosidad.',
      ),
    },
    {
      label: T('Cada adverbio cuenta una historia'),
      text: T(
        'Ayer, hoy y mañana viven en adverbios que van antes del verbo, y el verbo sigue igual. Quita el adverbio y {masu} sigue igual: lo que cuenta el tiempo es el adverbio, la línea del tiempo de la narración o el contexto — nunca la terminación del verbo.',
      ),
    },
  ],
  examples: [
    { text: 'きのう映画を見ました', gloss: T('kinō eiga o mimashita — ayer vi una película') },
    {
      text: 'きのう映画を見ませんでした',
      gloss: T('kinō eiga oimasen deshita — ayer no vi ninguna película'),
    },
    { text: '雨が降っています', gloss: T('ame ga futte imasu — está lloviendo') },
    {
      text: 'すべては完了した',
      gloss: T('subete wa kanryō shita — todo está cumplido (Juan 19:30)'),
    },
    {
      text: '愛は忍耐強い',
      gloss: T('ai wa nintaiyokai — el amor es paciente (1 Corintios 13:4)'),
    },
  ],
  tables: [
    {
      caption: T('Una sola forma, tres tiempos'),
      head: [T('Lo que quisiste decir'), T('Lo que escribe el japonés'), T('La frase que decide')],
      rows: [
        [T('presente, ahora'), T('{ます}'), T('{映画を見ます} — "veo la película"')],
        [T('hábito'), T('{ます}'), T('{毎日映画を見ます} — "veo películas todos los días"')],
        [T('futuro, decisión propia'), T('{ます}'), T('{あした見ます} — "veré mañana"')],
        [
          T('predicción, obligación externa'),
          T('{でしょう}'),
          T('{雨が降るでしょう} — "va a llover"'),
        ],
      ],
    },
    {
      caption: T('Dónde vive cada tiempo'),
      head: [T('Tiempo'), T('En la serie cortés'), T('En la forma plana')],
      rows: [
        [T('pasado'), T('{mashita}'), T('{ta}')],
        [T('pasado negativo'), T('{masen deshita}'), T('{nakkatta}')],
        [T('negativo'), T('{masen}'), T('{nai}')],
        [
          T('presente y hábito'),
          T('{masu}'),
          T('nada: la forma plana es igual en todos los tiempos'),
        ],
      ],
    },
    {
      caption: T('Las dos puertas del "si... entonces"'),
      head: [T('Construcción'), T('Lo que significa'), T('Cuándo se usa')],
      rows: [
        [
          T('{たら}'),
          T('"si... entonces", como hipótesis'),
          T('planear: {雨が降ったら、行きません}'),
        ],
        [
          T('{なら}'),
          T('"si... entonces", como condición'),
          T('sopesar: {雨が降るなら、行きません}'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {きのう映画を見ませんでした}, ¿qué dice la forma final?'),
    options: [
      T('pasado negativo: "ayer no vi la película"'),
      T('negativo de presente: "no veo la película"'),
      T('negativo de futuro: "no voy a ver la película"'),
      T('una pregunta: "¿es que no vi la película?"'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "ayer no comí pan": きのうパンを食べ____'),
      answer: 'ませんでした',
    },
    {
      kind: 'match',
      prompt: T('Une la partícula con lo que hace'),
      pairs: [
        { a: T('{ました}'), b: T('marca el pasado en la serie cortés') },
        { a: T('{ません}'), b: T('marca el negativo en la serie cortés') },
        { a: T('{でしょう}'), b: T('marca la predicción: "va a ocurrir"') },
        { a: T('{たら}'), b: T('abre el "si... entonces" hipotético') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál de estas frases es una condición "si... entonces"?'),
      options: [
        T('{雨が降ったら、会社に行きます}'),
        T('{雨が降っています}'),
        T('{雨は降りました}'),
        T('{雨が降る}'),
      ],
      answer: 0,
    },
  ],
};
