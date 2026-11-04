import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  section: T('Escritura'),
  title: T('Hiragana: el silabario que carga la gramática'),
  subtitle: T('No son 86 caracteres para memorizar — son 5 vocales, y el resto sale de la regla'),
  body: C(`
## La anatomía del carácter

Hiragana tiene unos 86 caracteres y es un silabario: **un carácter es una sílaba**. Eso decide lo que hace la escritura. Un ideograma guarda un significado; un carácter de hiragana guarda un sonido. Nadie lee japonés pensando en caracteres, sino en sílabas, igual que en mandarín, donde una sílaba también es un bloque.

La anatomía es lo que cuenta. El carácter nace de dos piezas, una consonante y una vocal, y la vocal es la parte que cambia de forma. Hay 5 vocales, a, i, u, e, o, y cada una le da a la misma consonante un dibujo distinto. Las consonantes se vuelven trazos y curvas; las vocales aportan el resto. Por eso el método correcto no es el de la lista: **no memorices 86 caracteres, memoriza cinco vocales y el resto sale**. Si conoces el dibujo de {かた} deduces {きた}, {くも}, {けさ} y {こども} sin haberlos visto nunca.

Esto sirve tanto para leer como para escribir. Un lector que conoce la regla ve la sílaba dentro del carácter; uno que solo memorizó la lista tiene que estudiarlos de uno en uno.

## Cinco vocales, cero tonos

Una vocal aislada ocupa un carácter entero, y las cinco siguen la misma regla: ninguna lleva acento. El mandarín hace lo contrario: allí la misma sílaba escrita puede ser "madre", "caballo" o "pieza de ajedrez", según el tono. El japonés tiene 5 vocales y ningún tono, así que el mismo carácter escrito es siempre la misma palabra.

Lo único que se parece a un acento es la vocal larga, y tiene una señal honesta: o la vocal se repite, como en {おばあさん}, o entra un trazo horizontal detrás. Nada de subir y bajar. Quien acaba de estudiar los 4 tonos del mandarín va a buscar una marca que no existe, y el contraste es el punto: dos lenguas hermanas por escrito que divergen justo en el punto más visible, el sonido.

## Las partículas que hacen la frase

Resuelto el carácter, lo que aparece en casi cada línea son unas pocas sílabas aisladas que no son palabra ninguna: son partículas, y ahí vive la gramática.

{を} (wo) marca el **objeto directo** y nada más. No es "de", no es "a", no es pronombre: es solo la marca de que aquello es aquello que el verbo recibe. {の} (no) **une dos palabras** y también es el "de" del español: {母の} es "de la madre" y {日本語の} es "del japonés".

{は} (wa) es la difícil. Va después del pronombre o del nombre y marca el **tópico** de la frase, no el sujeto ni el verbo. En "yo como manzana" el {は} convierte el pronombre en tópico; su traducción literal es "en cuanto a". Compara "yo como manzana" con "en cuanto a mí, como manzana": la segunda es la misma frase japonesa, palabra por palabra. Y el mismo {は}, sin cambiar de carácter, se vuelve "pero": "yo voy, pero él no". Una partícula, dos funciones.

El resto es un conjunto pequeño y de uso altísimo: {に} (ni) para destino y dirección, {で} (de) para el lugar donde ocurre la acción y para el medio, {へ} (he) solo para dirección, y {から} (kara) con {まで} (made) para "desde... hasta".

## {です} y {ます}: el mismo verbo en dos registros

El japonés distingue el texto hablado del escrito, y la diferencia vive en dos formas: {です} (desu) y {ます} (masu). Una frase como "yo como manzana" puede decirse de una manera y escribirse de otra, y la traducción japonesa bíblica de 1987 elige un solo registro y lo mantiene de principio a fin.

Un lector necesita saber qué registro está leyendo, porque el registro cambia el tono y no el contenido: {食べます} y {食べる} quieren decir lo mismo, y la segunda es la forma que aparecería anotada en un diccionario.

El gancho está en Juan 1:1. En mandarín, el versículo abre con una palabra ambigua de un solo carácter; en japonés, "Palabra" es {言葉}, dos sílabas escritas en kanji y leídas kotoba. Las partículas de ese versículo son todas kana.

Una última cosa da vuelta al lector: la negación va después del verbo, y su forma cambia con el verbo. Con {する} el negativo es {しない}; con {いる} es {いない}. No hay un "no" delante, como en la lengua del original.
`),
  vocab: [
    V('wo', 'を', 'objeto directo; y nada más (wo)'),
    V('no', 'の', 'une dos palabras; también "de" (no)'),
    V('wa', 'は', 'tópico de la frase; y también "pero" (wa)'),
    V('ni', 'に', 'destino, dirección, tiempo (ni)'),
    V('de', 'で', 'lugar de la acción, medio, instrumento (de)'),
    V('he', 'へ', 'dirección; solo después de las partículas de destino y de origen (he)'),
    V('kara', 'から', 'desde, punto de partida; junto con hasta (kara)'),
    V('made', 'まで', 'hasta, punto final (made)'),
    V('desu', 'です', 'ser y estar; registro hablado y escrito (desu)'),
    V('masu', 'ます', 'cortesía del verbo por escrito (masu)'),
    V('nai', 'ない', 'negación; va después del verbo (nai)'),
    V('kotoba', '言葉', 'palabra; la Palabra de Juan 1:1 (kotoba)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Un carácter de hiragana es una sílaba. Memoriza 5 vocales, no 86 caracteres: el resto sale de la regla.',
      ),
    },
    {
      n: '2',
      text: T(
        'Ninguna vocal lleva acento. La vocal larga es la vocal repetida o un trazo horizontal.',
      ),
    },
    { n: '3', text: T('{を} marca el objeto directo y no tiene traducción fuera de eso.') },
    {
      n: '4',
      text: T(
        '{は} va después del nombre y marca el tópico de la frase, no el sujeto ni el verbo.',
      ),
    },
    {
      n: '5',
      text: T(
        '{です} y {ます} dicen el registro, no el contenido: mismo sentido, otra caligrafía.',
      ),
    },
  ],
  notes: [
    {
      label: T('La misma partícula, dos funciones'),
      text: T(
        '{は} después de un pronombre es "en cuanto a mí"; {は} dentro de una frase con dos mitades es "pero". El mismo carácter, sin ninguna marca que los distinga — el contexto decide.',
      ),
    },
    {
      label: T('La negación va después'),
      text: T(
        'En español el "no" abre la frase; en japonés la negación {ない} se pega al verbo y va detrás. Y su forma cambia según el verbo: con {する} da {しない}, con {いる} da {いない}.',
      ),
    },
  ],
  examples: [
    {
      text: 'りんごを食べます',
      gloss: T('ringo o tabemasu — como una manzana (registro escrito)'),
    },
    {
      text: '私は本を読みます',
      gloss: T('watashi wa hon o yomimasu — en cuanto a mí, leo un libro'),
    },
    { text: '学校に行きます', gloss: T('gakkō ni ikimasu — voy a la escuela') },
    {
      text: '私は食べます、弟は食べません',
      gloss: T('watashi wa tabemasu, otōto wa tabemasen — yo como, pero mi hermano no'),
    },
    {
      text: '初めは言葉があった',
      gloss: T('hazimeni kotoba ga atta — en el principio había la Palabra'),
    },
  ],
  tables: [
    {
      caption: T('Las 5 vocales y el dibujo que hace cada una'),
      head: [T('Vocal'), T('Lo que hace el trazo'), T('Ejemplo de sílaba')],
      rows: [
        [
          T('a'),
          T('un corte y una curva a la derecha'),
          T('{かた} kata — dos consonantes se vuelven una sílaba'),
        ],
        [T('i'), T('dos trazos verticales cortos'), T('{きた} kita')],
        [T('u'), T('una curva con la punta hacia abajo'), T('{くも} kumo')],
        [T('e'), T('un trazo horizontal y otro que sube'), T('{けさ} kesa')],
        [T('o'), T('un círculo casi cerrado'), T('{こども} kodomo')],
      ],
    },
    {
      caption: T('Las partículas que hacen la frase'),
      head: [T('Partícula'), T('Función'), T('Ejemplo')],
      rows: [
        [T('{を}'), T('objeto directo, y nada más'), T('{りんごを} — la manzana, como objeto')],
        [T('{の}'), T('une dos palabras; también "de"'), T('{母の} — de la madre')],
        [T('{は}'), T('tópico: "en cuanto a X"; y "pero"'), T('{私は} — en cuanto a mí')],
        [T('{に}'), T('destino, dirección, tiempo'), T('{学校に} — a la escuela')],
        [T('{で}'), T('donde ocurre la acción, o el medio'), T('{家で} — en casa')],
        [T('{へ}'), T('solo dirección'), T('{家へ} — a casa')],
        [T('{から}'), T('desde, punto de partida'), T('{九時から} — desde las nueve')],
        [T('{まで}'), T('hasta, punto final'), T('{五時まで} — hasta las cinco')],
      ],
    },
    {
      caption: T('Las contracciones: dos partículas fundidas en un solo carácter'),
      head: [T('Forma'), T('Viene de'), T('Sirve para')],
      rows: [
        [T('{では}'), T('{で} + {は}'), T('en, con: "en la oficina"')],
        [T('{には}'), T('{に} + {は}'), T('en + tópico: "está en la escuela"')],
        [T('{でも}'), T('{で} + {も}'), T('pero aun así')],
        [T('{とは}'), T('{と} + {は}'), T('que significa, en el sentido de')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {私は学生です}, ¿qué marca el {は} después del pronombre?'),
    options: [
      T('el sujeto de la frase'),
      T('el tópico de la frase'),
      T('el objeto directo'),
      T('la negación'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "como una manzana" con la partícula de objeto: りんご____食べます'),
      answer: 'を',
    },
    {
      kind: 'match',
      prompt: T('Une la partícula con su función'),
      pairs: [
        { a: T('{を}'), b: T('objeto directo') },
        { a: T('{は}'), b: T('tópico de la frase, y también "pero"') },
        { a: T('{に}'), b: T('destino y dirección') },
        { a: T('{の}'), b: T('unión entre dos palabras') },
        { a: T('{から}'), b: T('"desde": punto de partida') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('En {では}, ¿cuántas partículas se fundieron en un solo carácter?'),
      options: [T('una'), T('dos'), T('tres'), T('cuatro')],
      answer: 1,
    },
  ],
};
