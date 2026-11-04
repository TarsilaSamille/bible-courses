import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  section: T('Verbo'),
  title: T('Aspecto: la partícula {了}'),
  subtitle: T('No marca tiempo verbal — marca que la situación ha terminado'),
  body: C(`
## {le} va después del verbo

{bù} y {méi} van antes del verbo, pegadas a él. {le} hace lo contrario: {le} va después del verbo, y {wǒ chī le} es "yo comí".

El par cose lo que niega con lo que cierra: **lo que niega entra antes del verbo, lo que cierra la situación entra después de él**. {wǒ méi chī le}, "yo no comí", lleva las dos marcas en su sitio, e invertir cualquiera de las dos destruye la frase. Una vez que la negación ocupa el principio y el aspecto ocupa el final, queda un centro de frase, y es ahí donde entran el tiempo y el lugar.

## {le} no es tiempo verbal

El error que trae consigo un hablante de portugués es buscar una conjugación. En portugués el pasado está dentro del verbo: "comí", "habló", "partí". En mandarín el verbo {chī} es el mismo en toda situación: {wǒ chī} y {wǒ chī le} usan exactamente la misma palabra. Lo que cambia es la partícula, y lo que dice no es "pasado": es que la situación, mirada entera, está **completa**.

Por eso el contraste honesto es entre las dos formas sin {le}:

- {wǒ chī} — "yo como", y nada más. Puede ser lo que hago todos los días, o lo que haría en cualquier escenario. La acción está en curso, sin comienzo ni fin marcados.
- {wǒ chī le} — "yo comí", y con ello: la situación terminó. La comida se acabó, el tema se cierra.

Un hablante de portugués traduce {wǒ chī} por "yo comí" casi por reflejo, y pierde la información. El mismo mandarín sirve para "yo como" y para "yo comí", y quien elige entre los dos es el contexto, no el verbo. Y el error contrario es igual de común: escribir {le} en todo, que es lo que produce el mandarín de quien todavía está aprendiendo, una frase completa detrás de otra.

## Cuándo {le} no aparece

No toda situación cerrada lleva la partícula. En {wǒ chīfàn shuìjiào}, "yo como, yo duermo", no hay {le}, y para quien escucha la frase está igual de completa.

La regla es el **encadenamiento**: cuando dos verbos van en secuencia y el segundo describe la acción siguiente, claramente ordenada después de la primera, se prescinde del marcado de la segunda. {wǒ chīfàn} y luego {shuìjiào}: la segunda acción ya está diciendo que viene después, y el {le} solo gastaría tinta. Lo mismo vale en {tā lái wǒ qù}.

El criterio, en la práctica, es el de la partícula de enlace: cuando las acciones forman una cadena ordenada, el mandarín hace visible la ordenación por la posición de las palabras y prescinde de las marcas de cierre. Rellenar {le} en cada verbo de una narración produce algo que nadie habla.

## {le} después de un adjetivo

Después de un adjetivo, {le} cambia de asunto: no marca acción, marca **transición**. {wǒ hěn gāoxìng} es "estoy contento", un estado neutro, sin nada nuevo, igual hoy que mañana. {tā gāoxìng le} es "se puso contento": hubo un antes en el que no lo estaba, y ahora sí. El {le} es la prueba de que algo ocurrió, y por eso la comparación vale: la misma palabra y las mismas cuatro sílabas alrededor ya lo dicen todo, y una de ellas carga el suceso.

## El {le} en la Biblia

En la Biblia esto aparece en un verbo, y en uno de los versículos más conocidos del libro. Juan 19:30, en la {和合本}, termina con {chéng le}, "está consumado", "ha sido cumplido". {chéng} es "llegar a ser", y el {le} cierra un proceso: la obra está hecha. El griego original no tiene partícula ninguna, {τετέλεσται}, y la {和合本} no inventó un tiempo verbal que no existía; marcó en mandarín lo que el griego ya marcaba en el verbo, que era perfectivo.

Y el mismo capítulo usa verbo y no sustantivo: en Juan 4:24, {jìngbài}, "adorar", es verbo, con el sustantivo {zhǔ}, "Señor", como objeto. {zhǔ zhī} es literalmente "el que es Adorador". Traducir {jìngbài} por "culto" o "adoración" sin verbo borra la acción. Marcos 1:15 tiene {shíjiān dào le}, "ha llegado el tiempo", donde el {le} cierra el verbo {dào} detrás de un sujeto que no es quien habla.`),
  vocab: [
    V('le', '了', 'partícula de aspecto: la situación está completa (tras verbo o adjetivo)'),
    V('chī', '吃', 'comer (chī)'),
    V('shuì', '睡', 'dormir (shuì)'),
    V('gāoxìng', '高兴', 'contento (gāoxìng)'),
    V('hěn', '很', 'muy (hěn)'),
    V('chéng', '成', 'llegar a ser, cumplirse (chéng)'),
    V('jìngbài', '敬拜', 'adorar (jìngbài)'),
    V('dào', '到', 'llegar (dào)'),
  ],
  rules: [
    { n: '1', text: T('La negación va antes del verbo y el aspecto después: {wǒ bù} {chī le}.') },
    {
      n: '2',
      text: T('{le} tras el verbo marca la situación como completa, no un tiempo verbal.'),
    },
    {
      n: '3',
      text: T('Entre dos acciones encadenadas y ordenadas, {le} no aparece: {wǒ chīfàn shuìjiào}.'),
    },
    { n: '4', text: T('{le} tras un adjetivo es cambio de estado: {tā gāoxìng le}.') },
    {
      n: '5',
      text: T('Sin {le}, el verbo no dice si la situación terminó: {wǒ chī} está abierta.'),
    },
  ],
  notes: [
    {
      label: T('Por qué "comí" y "como" son las mismas dos sílabas'),
      text: T(
        'En portugués el pasado está en la forma del verbo. En mandarín el verbo {chī} no cambia, y es la partícula la que dice que la situación terminó. Busca la flexión en mandarín y no la encontrarás: el mandarín no flexiona el verbo en pasado.',
      ),
    },
    {
      label: T('La trampa de la secuencia'),
      text: T(
        'Rellenar {le} en cada verbo de una narración produce mandarín que nadie habla. En {wǒ chīfàn shuìjiào} la segunda acción ya está ordenada después de la primera, y el {le} solo estorbaría.',
      ),
    },
  ],
  examples: [
    { text: '我吃了', gloss: T('wǒ chī le — yo comí; la situación terminó') },
    {
      text: '我吃饭 睡觉',
      gloss: T('wǒ chīfàn shuìjiào — yo como y yo duermo (secuencia, sin {le})'),
    },
    { text: '他高兴了', gloss: T('tā gāoxìng le — se puso contento') },
    { text: '成了', gloss: T('chéng le — está consumado, ha sido cumplido') },
  ],
  tables: [
    {
      caption: T('El mismo verbo, con y sin partícula'),
      head: [T('Frase'), T('Lectura'), T('Naturaleza de la situación')],
      rows: [
        [T('{wǒ} {chī}'), T('yo como'), T('abierta: hábito, acción sin comienzo ni fin marcados')],
        [T('{wǒ} {chī le}'), T('yo comí'), T('cerrada: la situación llegó al final')],
        [T('{tā} {gāoxìng}'), T('está contento'), T('estado neutro, sin novedad')],
        [T('{tā} {gāoxìng le}'), T('se puso contento'), T('cambio de estado: hubo un antes')],
      ],
    },
    {
      caption: T('Dónde entra la partícula, y dónde no'),
      head: [T('Frase'), T('¿Aparece {le}?'), T('Por qué')],
      rows: [
        [T('{wǒ bù} {chī le}'), T('sí'), T('la negación va delante, la partícula cierra la frase')],
        [T('{wǒ} {méi} {qù le}'), T('sí'), T('{méi} niega, {le} cierra: cada marca en su sitio')],
        [T('{wǒ} {chīfàn} {shuìjiào}'), T('no'), T('dos acciones encadenadas y ordenadas')],
        [T('{shíjiān} {dào le}'), T('sí'), T('{le} cierra el verbo detrás de otro sujeto')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {我吃了}, ¿qué marca la partícula {了}?'),
    options: [
      T('que la acción es pasada'),
      T('que la situación está completa'),
      T('que es un hábito'),
      T('que es una negación'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "se puso contento" con la partícula: 他高兴____'),
      answer: '了',
    },
    {
      kind: 'match',
      prompt: T('Une la partícula con lo que hace'),
      pairs: [
        { a: T('{了}'), b: T('cierra la situación, tras el verbo') },
        { a: T('{不}'), b: T('niega, antes del verbo') },
        { a: T('{没}'), b: T('niega el pasado, antes del verbo') },
        { a: T('{很}'), b: T('marca grado, antes del adjetivo') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál de las frases es correcta?'),
      options: [
        T('{我吃饭了 睡觉了}'),
        T('{我吃了饭 睡觉了}'),
        T('{我吃饭 睡觉}'),
        T('{我吃饭 睡觉了}'),
      ],
      answer: 2,
    },
  ],
};
