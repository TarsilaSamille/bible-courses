import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  section: T('Sustantivo'),
  title: T('Contadores y la partícula {の}: la misma palabra, cantidades distintas'),
  subtitle: T(
    'El japonés no tiene artículo oblicuo ni tiene plural: quien cuenta es un kanji con sentido literal, y quien liga un sustantivo con otro es {の}',
  ),
  body: C(`
## No hay artículo: hay contador

El español tiene artículo: "el libro", "los libros". El japonés no tiene ese artículo, y lo que sustituye al plural es un **contador**: un kanji elegido por la **forma** de la cosa y con un sentido literal propio.

Así que {三本} son tres libros, contados uno a uno, y no "libros" en general; {二人} son dos personas; {六つ} son seis cosas cualesquiera. Un sustantivo solo no marca pluralidad: {本} sin contador es un libro, o libros, indeterminado. El contador decide, y cada sustantivo tiene el suyo.

## Seis contadores y el sentido literal de cada uno

{本} cuenta lo que es largo y largo de lado, y la raíz del kanji es "origen", de "enrollar un pergamino": el libro japonés antiguo era un rollo. {人} cuenta personas. {枚} cuenta lo que es plano y fino, como una hoja. {匹} cuenta animales. {台} cuenta máquinas y carros. {杯} cuenta tazas y vasos.

Guarda el contador por su forma y no por una lista memorizada: quien recuerda que {枚} es "una chapa lisa" nunca más cuenta mal una hoja, y quien recuerda que {台} es "una plataforma" acierta el carro sin pensarlo.

El gancho está en Juan 2:6, seis vasos de piedra para las purificaciones de los judíos, llenos de agua. Es una cuenta con contador, exacta, y la estructura es la misma que la de cualquier lista de objetos del texto. Fíjate también en el verbo del versículo, {を満たす}: queda en kana, porque es gramatical. La cuenta y los objetos son kanji; la acción es kana.

## La parte difícil: ¿el contador cambia la palabra o solo el sonido?

La pregunta que todo principiante hace es dónde fue a parar la s del plural. En japonés no hay s: el plural es el contador. La parte difícil está en otro sitio: **el numeral cambia la palabra antes de tocar el sustantivo**.

Después del uno, del dos y del tres el sustantivo cambia de forma: {三本} se lee *sanbon* y vale literalmente "tres + libro largo"; {二人} es *futari* y {三人} es *sannin*. Desde el cuatro la escritura ya no cambia: {四} sigue siendo {四} y {六} sigue siendo {六}. Lo que cambia es la pronunciación, *yon*, *go*, *roku* o incluso *mutsu*. El numeral {六} tiene dos lecturas porque el japonés antiguo tenía dos series de numerales: la corta, para las fechas, y la larga, para todo lo demás. Los contadores de {匹}, {人} y {杯} siguen la corta; los otros siguen la larga.

Después del uno la palabra también se vuelve propia: *ippon* de libro, *ippai* de taza, *ippiki* de animal. Y "algunos" es "algunos + contador", sin numeral alguno: {何本} son algunos libros, {何人} son algunas personas. Con numeral nombras la cantidad exacta; sin numeral dices "algunos", o "muchos" con {多くの}.

## {の}: la posesión que va antes

La partícula {の} liga dos sustantivos y vale como "de". El orden es el inverso del nuestro: "el libro del profesor" es {先生 + の + 本}, es decir, profesor, "de", libro, porque quien posee va primero.

Y el lugar del contador en ese trío es fijo: {本 + の + 先生}. El contador va antes del {の}, porque es el {の} el que cierra la frase nominal que abrió el contador. El principiante acierta {先生の本} y falla cuando pone la partícula primero: {の本先生} no existe en japonés, en ningún registro y en ninguna Biblia.

Lo bueno es que {の} es la partícula más frecuente del japonés escrito, y casi toda línea de texto contiene una. Para quien está leyendo es el punto de apoyo: es lo que dice de quién es cada sustantivo.
`),
  vocab: [
    V('hon', '本', 'libro; contador de objetos largos (hon)'),
    V('hito', '人', 'persona; contador de personas (hito)'),
    V('mai', '枚', 'contador de hojas y de cosas planas (mai)'),
    V('hiki', '匹', 'contador de animales (hiki)'),
    V('dai', '台', 'contador de máquinas y carros (dai)'),
    V('hai', '杯', 'taza; contador de vasos y tazas (hai)'),
    V('sensei', '先生', 'profesor; maestro (sensei)'),
    V('mizu', '水', 'agua (mizu)'),
    V('ha', '葉', 'hoja (ha)'),
    V('mutsu', '六', 'seis; numeral de dos lecturas, roku o mutsu (mutsu)'),
    V('yo', '四', 'cuatro; numeral de tres lecturas, yon, yo o shi (yo)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'No hay artículo definido ni plural: quien marca pluralidad es el contador. Un sustantivo sin contador es singular o indeterminado.',
      ),
    },
    {
      n: '2',
      text: T(
        'El numeral va antes del contador y el contador va antes del sustantivo: {三本} es "tres" + contador + "libro".',
      ),
    },
    {
      n: '3',
      text: T(
        'Después del uno, del dos y del tres el sustantivo cambia de forma; del cuatro en adelante cambia la pronunciación y la escritura se queda igual.',
      ),
    },
    {
      n: '4',
      text: T(
        'Con {の}, el contador va antes de la partícula: {本 + の + 先生} es "el libro del profesor". {の本先生} no existe.',
      ),
    },
    {
      n: '5',
      text: T(
        '"Algunos" es "algunos + contador" sin numeral — {何本}, {何人}; "muchos" es {多くの} + sustantivo.',
      ),
    },
  ],
  notes: [
    {
      label: T('{の} es el punto de apoyo de quien lee'),
      text: T(
        'Es la partícula más frecuente del japonés escrito: casi toda línea de texto contiene una. Quien reconoce {の} ya sabe de quién es cada sustantivo, aunque no entienda el resto.',
      ),
    },
    {
      label: T('El error clásico es la posición del {の}'),
      text: T(
        'El contador abre la frase nominal y el {の} la cierra. Por eso el principiante escribe bien {先生の本} y escribe {の本先生} cuando quiere ser cuidadoso con el "de".',
      ),
    },
  ],
  examples: [
    { text: '三本の本を読む', gloss: T('sanbon no hon o yomu — leo tres libros') },
    { text: '二人の先生', gloss: T('futari no sensei — dos profesores') },
    {
      text: '水の甕が六つある',
      gloss: T('mizu no kame ga mutsu aru — hay seis vasos de agua (Juan 2:6)'),
    },
    { text: '葉が五つ', gloss: T('ha ga itsutsu — cinco hojas') },
    {
      text: '車があります',
      gloss: T('kuruma ga arimasu — hay un carro (sin contador: singular o indeterminado)'),
    },
  ],
  tables: [
    {
      caption: T('Los contadores más usados y qué cuenta cada uno'),
      head: [T('Contador'), T('Lectura usual'), T('Qué cuenta'), T('Ejemplo')],
      rows: [
        [
          T('{本}'),
          T('hon'),
          T('libros y objetos largos y largos de lado'),
          T('{三本} — tres libros'),
        ],
        [T('{人}'), T('hito'), T('personas'), T('{二人} — dos personas')],
        [T('{枚}'), T('mai'), T('hojas y cosas planas y finas'), T('{五枚} — cinco hojas')],
        [T('{匹}'), T('hiki'), T('animales'), T('{二匹} — dos animales')],
        [T('{台}'), T('dai'), T('máquinas, carros, aparatos'), T('{三台} — tres carros')],
        [T('{杯}'), T('hai'), T('tazas y vasos'), T('{二杯} — dos tazas')],
      ],
    },
    {
      caption: T('Contador + {の} + sustantivo: el orden no cambia'),
      head: [T('Construcción'), T('Lo que dice')],
      rows: [
        [T('{本 + の + 先生}'), T('el libro del profesor — el contador va antes del {の}')],
        [T('{三本の + 先生}'), T('las tres personas del caso, los tres profesores')],
        [T('{の本先生}'), T('no existe: el {の} antes del contador es el error del principiante')],
      ],
    },
    {
      caption: T('Cuándo el sustantivo cambia de forma y cuándo cambia solo el sonido'),
      head: [T('Numeral'), T('Qué cambia'), T('Ejemplo')],
      rows: [
        [
          T('uno, dos, tres'),
          T('el sustantivo cambia de forma'),
          T('{三本} *sanbon*, {二人} *futari*, {三人} *sannin*'),
        ],
        [
          T('cuatro o más'),
          T('cambia solo el sonido; la escritura se queda'),
          T('{四} *yon*, {五} *go*, {六} *roku* o *mutsu*'),
        ],
        [
          T('después del uno'),
          T('el sustantivo también gana forma propia'),
          T('*ippon*, *ippai*, *ippiki*'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {本 + の + 先生}, el contador va:'),
    options: [
      T('antes del {の}'),
      T('después del {の}'),
      T('después de {先生}'),
      T('en lugar del {の}'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "tres libros" con el contador de libros: 三____の本'),
      answer: '本',
    },
    {
      kind: 'match',
      prompt: T('Une el contador con lo que cuenta'),
      pairs: [
        { a: T('{本}'), b: T('libros y objetos largos') },
        { a: T('{人}'), b: T('personas') },
        { a: T('{枚}'), b: T('hojas y cosas planas') },
        { a: T('{杯}'), b: T('tazas y vasos') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué forma dice "algunos libros", sin nombrar la cantidad?'),
      options: [T('{何本の}'), T('{多くの}'), T('{この}'), T('{その}')],
      answer: 0,
    },
  ],
};
