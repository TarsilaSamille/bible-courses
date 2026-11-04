import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  section: T('Pronombres'),
  title: T('Dos series de pronombres, y el arte de decir esto y aquello'),
  subtitle: T(
    'La elección entre "yo" y "usted", y entre "esto" y "aquello", no es de estilo: es gramática, y es donde el habla bíblica revela lo que está haciendo',
  ),
  body: C(`
## Dos series: quién habla y quién escucha

El portugués tiene una serie de pronombres. El japonés tiene dos, y la elección entre ellas no es preferencia: quien habla se coloca en una relación definida con quien escucha.

La serie **humilde** es la de quien habla de sí mismo y de su propia obra: {watashi} es la forma estándar, y waga ("mi", colocado delante, para la obra propia) es la más rebajada. La serie **cortés** es la de quien habla en relación con el oyente: {anata} es la forma respetuosa y estándar.

Un detalle cultural que el lector de portugués necesita saber: omae hoy es ironía o desprecio, el "tú" dicho desde arriba. Fue la palabra normal en la Edad Media y se volvió juego cómico. Y {kimi} es "tú" en dos direcciones: cariñoso entre amigos, y distante y respetuoso con las cosas que ya pertenecen a alguien. En ninguno de esos casos quien habla de portugués tiene que rebajarse: el japonés hace esa distinción porque la lengua está construida así.

## Esto y aquello: el demostrativo localiza

El portugués distingue "este/ese/aquel" por tiempo de conversación. El japonés distingue por **distancia de quien habla**, y esa distinción es lo que hace que "esto" y "aquello" en la Biblia suenen ubicados en el espacio.

{kore} es esto: cerca de mí, en mi campo. {sore} es aquello: cerca de usted, en el campo de quien escucha. {are} es aquello: lejos de los dos. {kono} es este y {sono} es aquel, pero ninguno de los dos mide distancia: los dos apuntan a algo **ya mencionado**, y por eso significan "este, el que te pertenece" y "aquel, del que hablamos".

El mismo verbo de estar produce tres "aquí" distintos. {koko} es el lugar fijo, donde estoy. kochira es dirección: "por aquí", "para acá". {kore} es la cosa, no el lugar: "esto". Traducir los tres por "aquí" pierde información.

## El pronombre que puede desaparecer

La posesión la marca la partícula {no}: "mi libro" es {watashi} no hon. Y el pronombre se puede omitir cuando la partícula ya lo carga: {no} hon es "el libro de él" o "de ella".

Esa omisión es rutina, no adorno. En casi todo verbo japonés el sujeto puede desaparecer, porque es el verbo lo que sostiene la frase: es lo que dice qué ocurre, y el contexto completa el resto. {kare} se puede ir con la misma facilidad. Un lector que busca un pronombre en cada línea pierde la frase: lo que está ahí es la partícula.

Tampoco hay género ni número. "Él" y "ella" son la misma palabra, {kare}; {kanojo} sirve para los dos. El mandarín, que tampoco marca el género, exige aun así un pronombre de tercera persona cuando el sujeto es obvio; en japonés {kare} sencillamente no tiene que aparecer.

## Juan 1:1 y Juan 15:5

Juan 1:1 dice "en el principio ERA la Palabra". Traducido al japonés, el verbo queda en kana y el pronombre desaparece: el verbo es lo que sostiene la frase, y quien tradujo confió en él. Es la regla de la primera lección aplicada a un versículo: lo que cambia de caligrafía es lo que cambia de función.

Juan 15:5 es el otro extremo: "YO soy la vid", con pronombre enfático en el griego original. El japonés lo traduce con watashi, o con {boku}, que es más íntimo, más cálido, más cercano. La elección de pronombre en la traducción japonesa de 1987 es un detalle real y conmovedor: el traductor decidió cuán cerca habla Jesús de sí mismo. Un pronombre de primera persona no es solo una palabra sobre Dios; es una decisión sobre su voz.
`),
  vocab: [
    V('watashi', '私', 'yo (neutro, cortés, estándar)'),
    V('ore', '俺', 'yo (masculino, coloquial, poco cortés)'),
    V('boku', '僕', 'yo (masculino, íntimo)'),
    V('anata', 'あなた', 'usted (cortés, respetuoso)'),
    V('kimi', '君', 'usted (íntimo entre amigos, o respetuoso)'),
    V('kare', '彼', 'él y ella — la misma palabra'),
    V('kanojo', '彼女', 'ella; también sin género, con un tono más distante'),
    V('kore', 'これ', 'esto: cerca de mí'),
    V('sore', 'それ', 'aquello: cerca de usted'),
    V('are', 'あれ', 'aquello: lejos de los dos'),
    V('kono', 'この', 'este: lo ya mencionado'),
    V('sono', 'その', 'aquel: lo ya mencionado'),
    V('koko', 'ここ', 'aquí: el lugar donde estoy'),
    V('no', 'の', 'de; partícula de posesión (no)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Son dos series: humilde, quien habla de sí mismo, y cortés, quien habla en relación con el oyente. Cambiar de serie cambia el significado social de la frase.',
      ),
    },
    {
      n: '2',
      text: T(
        '{watashi} es el "yo" estándar; {ore} y {boku} son coloquiales y poco formales, y {boku} es el más íntimo de los tres.',
      ),
    },
    {
      n: '3',
      text: T(
        '{kore}, {sore} y {are} miden distancia de quien habla; {kono} y {sono} no miden nada — apuntan a lo ya mencionado.',
      ),
    },
    {
      n: '4',
      text: T(
        'La posesión es {no}: "mi libro" es {watashi} no hon. Con la partícula, el pronombre puede desaparecer: {no} hon es "el libro de él".',
      ),
    },
    {
      n: '5',
      text: T(
        'No hay género ni número, y el sujeto se puede omitir: es el verbo lo que sostiene la frase.',
      ),
    },
  ],
  notes: [
    {
      label: T('Rebajarse no es cortesía, es gramática'),
      text: T(
        'Habla de portugués dice "yo voy" sin rebajarse. El japonés hace esa distinción todo el tiempo, y en contextos formales quien habla se coloca por debajo del oyente. Por eso waga — "mi", para la obra propia — es más humilde que {watashi}.',
      ),
    },
    {
      label: T('El peso de omae'),
      text: T(
        'omAe, que se escribe con los mismos caracteres que {ore}, hoy es ironía o desprecio — lo contrario de {anata}. Fue la forma común en la Edad Media y se volvió chiste en la comedia y el manga.',
      ),
    },
  ],
  examples: [
    { text: '私の本', gloss: T('watashi no hon — mi libro') },
    {
      text: '本を読みます',
      gloss: T('hon o yomimasu — voy a leer el libro; el pronombre del sujeto se omitió'),
    },
    { text: 'これは私のです', gloss: T('kore wa watashi no desu — esto es mío') },
    {
      text: '初めにおいてことばがあった',
      gloss: T('hajime ni oite kotoba ga atta — en el principio había la Palabra'),
    },
    {
      text: '僕は真の樹である',
      gloss: T('boku wa mak no ki de aru — yo soy la vid verdadera; el "yo" de Jesús en {boku}'),
    },
  ],
  tables: [
    {
      caption: T('Los pronombres, por registro'),
      head: [T('Pronombre'), T('Género'), T('Registro'), T('Matiz')],
      rows: [
        [T('{watashi}'), T('neutro'), T('cortés, estándar'), T('sirve en cualquier situación')],
        [
          T('{ore}'),
          T('masculino'),
          T('coloquial, directo'),
          T('el "yo" de quien habla sin ceremonia'),
        ],
        [
          T('{boku}'),
          T('masculino'),
          T('íntimo'),
          T('más cálido; es el "yo" de Jesús en la traducción'),
        ],
        [
          T('{anata}'),
          T('neutro'),
          T('cortés, respetuoso'),
          T('la distancia de quien no es íntimo'),
        ],
        [
          T('{kimi}'),
          T('neutro'),
          T('íntimo o distante'),
          T('entre amigos, o respetuoso con lo que ya es tuyo'),
        ],
        [T('{kare}'), T('ninguno'), T('neutro'), T('"él" y "ella" son la misma palabra')],
      ],
    },
    {
      caption: T('Los demostrativos por distancia'),
      head: [T('Palabra'), T('Dónde está la cosa'), T('Cuándo se usa')],
      rows: [
        [T('{kore}'), T('cerca de mí'), T('lo que señalo o toco')],
        [T('{sore}'), T('cerca de usted'), T('lo que está delante de quien escucha')],
        [T('{are}'), T('lejos de los dos'), T('lo que está lejos, o quedó atrás')],
        [T('{kono}'), T('sin posición'), T('ya mencionado: "este"')],
        [T('{sono}'), T('sin posición'), T('ya mencionado: "aquel"')],
      ],
    },
    {
      caption: T('Tres palabras para "aquí"'),
      head: [T('Palabra'), T('Sentido'), T('Ejemplo')],
      rows: [
        [T('{koko}'), T('lugar'), T('"aquí está"')],
        [T('kochira'), T('dirección'), T('"por aquí", "para acá"')],
        [T('{kore}'), T('cosa, no lugar'), T('"esto"')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {これは私のです}, "¿esto" señala a lo que está cerca de quién?'),
    options: [
      T('{kore} — cerca de mí'),
      T('{sore} — cerca de usted'),
      T('{are} — lejos de los dos'),
      T('{kono} — lo ya mencionado'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "mi libro": 私____本'),
      answer: 'の',
    },
    {
      kind: 'match',
      prompt: T('Une el demostrativo con la posición de su referente'),
      pairs: [
        { a: T('{kore}'), b: T('cerca de mí') },
        { a: T('{sore}'), b: T('cerca de usted') },
        { a: T('{are}'), b: T('lejos de los dos') },
        { a: T('{sono}'), b: T('lo ya mencionado') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('En japonés "él" y "ella" son la misma palabra. ¿Cuál es?'),
      options: [T('{kare}'), T('{kanojo}'), T('{watashi}'), T('{kimi}')],
      answer: 0,
    },
  ],
};
