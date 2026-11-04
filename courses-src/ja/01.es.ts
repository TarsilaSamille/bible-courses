import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  section: T('Escritura'),
  title: T('Kana: la escritura que se aprende en un fin de semana'),
  subtitle: T(
    'Hiragana y katakana son el mismo sistema en dos caligrafías, y ninguna de las dos es el japonés que se habla',
  ),
  body: C(`
## Dos caligrafías, un solo sonido

El japonés escribe la misma sílaba de dos maneras. **Hiragana** {の} y **katakana** {ノ} dicen lo mismo; lo que cambia es el registro. Katakana es para palabras extranjeras, nombres propios y énfasis: la palabra "computadora", las siglas de una policía extranjera, el letrero de una cafetería. Hiragana es todo lo demás, y es donde vive la gramática.

Una página de japonés parece un muro de caracteres, pero no lo es: casi todo el texto es repetición de pocas sílabas, y las más frecuentes son una sola palabra. {の} es "de", {に} es "en", {を} marca el objeto, {は} marca el tema. Cuatro sílabas que, sumadas, aparecen en casi toda frase que existe.

## Lo que la caligrafía esconde

Un kanji es una palabra, como en el mandarín, y la diferencia es que aquí lleva la etimología a la vista. {水} es "agua" y también el componente de cualquier palabra que tenga que ver con el agua o con el río. Reconocer el componente es lo que hace crecer el vocabulario.

Y el kanji guarda la parte gramatical: {食} significa "comer" y se convierte en sufijo que significa "comida", como {朝食} "desayuno" y {昼食} "almuerzo". Un lector que conoce {食} adivina las dos palabras.

## La traducción de 1987 y la puntuación

La traducción japonesa de 1987 usa kana para todo lo gramatical y kanji para el contenido. En un versículo como "en el principio era el Verbo", el verbo aparece en kana porque es gramatical. Quien lea el versículo como si fuera una foto de texto está leyendo mal: lo que cambia de caligrafía es lo que cambia de función.

La puntuación japonesa también es otra. El japonés usa {、} y {。}, y muchos libros ni siquiera los ponen. Una línea sin punto en un texto japonés es normal, no es un error de escritura.
`),
  vocab: [
    V('no', 'の', 'de; partícula de posesión (no)'),
    V('ni', 'に', 'en; para; partícula de destino (ni)'),
    V('wa', 'は', 'tópico; partícula que también marca contraste (wa)'),
    V('wo', 'を', 'objeto directo (wo)'),
    V('mizu', '水', 'agua (mizu)'),
    V('tabemono', '食べ物', 'comida (tabemono)'),
    V('hon', '本', 'libro; también contador de objetos (hon)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Hiragana y katakana dicen la misma sílaba: la elección es de registro, no de pronunciación.',
      ),
    },
    {
      n: '2',
      text: T(
        '{の} "de", {に} "en", {を} "objeto" y {は} "tópico" son cuatro sílabas que aparecen en casi todo el texto.',
      ),
    },
    {
      n: '3',
      text: T(
        'El kanji es palabra con la etimología a la vista: {水} "agua" reaparece en todo lo que tiene agua.',
      ),
    },
    {
      n: '4',
      text: T(
        'Kana carga la gramática y kanji carga el contenido — por eso el verbo queda en kana.',
      ),
    },
    {
      n: '5',
      text: T('El romaji sirve para el teclado y para las listas. Nadie lee japonés en latín.'),
    },
  ],
  notes: [
    {
      label: T('Son tres sistemas, no dos'),
      text: T(
        'Hiragana, katakana y kanji. Los dos primeros son silabarios; el tercero es ideograma. Muchas palabras son las dos cosas a la vez: {食べ物} se escribe en kanji y se lee {tabemono}.',
      ),
    },
    {
      label: T('La partícula de tópico hace el trabajo del verbo'),
      text: T(
        'En "yo como manzana", el {は} de "yo" es la partícula que va después del pronombre. Cuando aparece después de un nombre, es contraste: "en cuanto a él, él va".',
      ),
    },
  ],
  examples: [
    { text: '水を飲む', gloss: T('mizu o nomu — bebo agua') },
    { text: '食べ物を食べる', gloss: T('tabemono o taberu — como comida') },
    { text: 'これは本です', gloss: T('kore wa hon desu — esto es un libro') },
    { text: '本を読む', gloss: T('hon o yomu — leo un libro') },
  ],
  tables: [
    {
      caption: T('Las dos caligrafías, el mismo sonido'),
      head: [T('Caligrafía'), T('Ejemplo'), T('Cuándo se usa')],
      rows: [
        [T('hiragana'), T('{の}'), T('gramática y todo lo común')],
        [T('katakana'), T('{ノ}'), T('extranjero, nombre propio, énfasis')],
        [T('kanji'), T('{水}'), T('el contenido, y la etimología a la vista')],
      ],
    },
    {
      caption: T('Las cuatro partículas que aparecen en todo'),
      head: [T('Partícula'), T('Función'), T('Ejemplo')],
      rows: [
        [T('{は}'), T('tópico: "en cuanto a X"'), T('{私は} — en cuanto a mí')],
        [T('{を}'), T('objeto directo'), T('{水を} — el agua, como objeto')],
        [T('{に}'), T('destino, dirección, tiempo'), T('{家に} — a casa')],
        [T('{の}'), T('posesión y vínculo'), T('{私の} — mío, de mí')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {水を飲む}, ¿qué partícula marca el objeto directo?'),
    options: [T('{は}'), T('{を}'), T('{に}'), T('{の}')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "bebo agua" con la partícula de objeto: 水____飲む'),
      answer: 'を',
    },
    {
      kind: 'match',
      prompt: T('Une la partícula con su función'),
      pairs: [
        { a: T('{を}'), b: T('objeto directo') },
        { a: T('{は}'), b: T('tópico') },
        { a: T('{に}'), b: T('destino o dirección') },
        { a: T('{の}'), b: T('posesión') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué caligrafía se usa para una palabra extranjera como "computadora"?'),
      options: [T('hiragana'), T('katakana'), T('kanji'), T('romaji')],
      answer: 1,
    },
  ],
};
