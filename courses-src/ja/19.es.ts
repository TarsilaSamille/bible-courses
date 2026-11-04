import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  section: T('Verbo'),
  title: T('La partícula del final: preguntar no es reordenar'),
  subtitle: T(
    'La pregunta es la afirmación con una sílaba pegada al final, y es la respuesta — no la pregunta — la que elige la forma',
  ),
  body: C(`
## La partícula cierra la frase, y nada se mueve

"Tú vas" es {anata wa iku}. "¿Vas?" es {anata wa iku ka}. Entre una frase y la otra entró una sílaba, y nada más cambió: el pronombre siguió delante, el verbo siguió al final, y el orden de la lección de sintaxis, pronombre, objeto indirecto, objeto directo, verbo, no se tocó. **No hay inversión.** En español y en inglés la pregunta se convierte en una construcción aparte, con el verbo subiendo y un auxiliar subiendo con él; el japonés no tiene auxiliar de pregunta ninguno. La pregunta es la afirmación con {ka} pegada al final.

Por eso {ka} es una partícula y no una palabra: no nombra nada, no carga contenido, y solo puede vivir en un sitio, después de todo lo demás. Metida en medio de la frase no es pregunta, es ruido.

Y es el mismo arreglo que ya viste en otros dos idiomas de este proyecto. La lección 21 del curso de mandarín hace exactamente esto con una partícula final, y las lecciones 2 y 5 del curso de coreano muestran que allí la partícula final también existe, con una diferencia que es el asunto de la sección siguiente. Mandarín, coreano y japonés son tres familias lingüísticas distintas y llegan al mismo punto: preguntar es barato, y es barato porque **preguntar no es reordenar las palabras, es añadir un sonido al final**.

## Lo que cambia es la respuesta, no la pregunta

Una pregunta "¿vas?" admite más de una respuesta: "voy", "no voy", "¿cuándo?", "voy, si llueve". La partícula {ka} **no obliga a sí o no**; no dice nada sobre qué forma va a tomar la respuesta. Quien elige es la respuesta, y la respuesta es la que decide el resto de la frase.

El contraste con el coreano lo deja claro. Allí la pregunta también es una partícula final, pero viene acompañada de un cambio de forma en el verbo: el afirmativo usa una terminación, el negativo usa otra, y el habla añade además el pronombre que desaparece en la escritura. Tres cosas cambian a la vez. En japonés cambia una: el verbo es literalmente el mismo en las dos frases, {iku ka}, y lo que separa "¿vas?" de "él va" es el resto de la frase, no la punta del verbo.

Esa libertad de la respuesta es lo que permite que una sola partícula sirva para tres cosas a la vez, y las tres están en la tabla de abajo. Una de ellas es la más importante para la lectura bíblica: la frase "dicen que él va" es, en japonés, relato y no pregunta. La misma {ka}, con el mismo orden y el mismo verbo, anuncia que alguien contó algo, y quien lee tiene que saber que eso no está confirmado.

## Los interrogativos son sustantivos, y el sustantivo va antes del verbo

Seis palabras hacen las preguntas que la partícula por sí sola no puede hacer: {dare} quién, {nani} qué, {doko} dónde, {itsu} cuándo, {dōshite} por qué, y {dō} más yō para cómo. Todas son sustantivos: ni adverbios, ni pronombres, sustantivos que sirven para preguntar. Y un sustantivo, en la lección de sintaxis, va antes del verbo.

Por eso "¿Quién eres tú?" es {anata wa dare desu ka}: tú, el tópico, {dare} en posición de sustantivo, el verbo al final, y {ka} al final. El pronombre interrogativo entra exactamente donde entraría cualquier sustantivo, y la partícula sigue pegada al final.

El error del principiante es siempre el mismo: {anata ka dare}, pronombre interrogativo pegado a la partícula, como si el pronombre fuera lo preguntado y la partícula viniera justo después. Eso no es japonés en ninguna frase, ni para preguntar ni para responder.

Existe un segundo patrón, y explica buena parte de las preguntas que vas a encontrar en la Biblia: la **oración interrogativa directa**, en la que el pronombre interrogativo cierra la oración y la partícula cierra con él. "¿Quién tiró la piedra?" es {dare ga ishi o nageta ka}, pronombre con {ga}, verbo al final, partícula al final. Sin la partícula de sujeto, {dare ishi o nageta ka}, la frase es coloquial y significa lo mismo. Lo que los dos patrones tienen en común es una sola cosa: la partícula interrogativa nunca abre la frase.

## Jesús pregunta a cada rato, y sus preguntas son cortas

En el evangelio de Juan, Jesús pregunta casi en cada página. Tres de ellas merecen leerse de cerca, porque cada una usa una pieza de lo anterior.

Juan 1:38 es la más limpia: "¿a dónde vas?" es {anata wa doko e iku ka}, pronombre, tópico, sustantivo interrogativo, partícula de dirección, verbo al final, partícula al final. Ninguna posición nueva, ninguna palabra nueva. Y la respuesta de Pedro no es una partícula: es una frase entera, que es el patrón de las respuestas de este capítulo.

Juan 4:7 muestra la pregunta en el verbo: "¿no me das de beber?" tiene el verbo dar en forma negativa, con la partícula después. La pregunta no necesita construcción propia; necesita un verbo negativo, y nada más.

Juan 8:7 es la más famosa de las tres y la mejor para el estudio, porque tiene la construcción entera: "¿quién sin pecado lanza la primera piedra?" es {tsumi no nai hito ga daremo ishi o nagenai ka}. Pronombre interrogativo, partícula de sujeto, verbo al final, partícula al final, todo apilado en el orden de la lección de sintaxis, y nada delante. La respuesta de los escribas es silencio, y el silencio es una de las respuestas que {ka} permite sin ninguna partícula nueva.

Y esa pregunta es también, para quien la oye, una pregunta retórica: se hace para que sea obvia. Misma construcción, misma partícula; quien oye es quien descubre si era pregunta de verdad.
`),
  vocab: [
    V('ka', 'か', 'partícula interrogativa: va al final de la frase y no invierte nada (ka)'),
    V('dare', '誰', 'quién (dare) — pronombre interrogativo, usado como sustantivo'),
    V('nani', '何', 'qué (nani) — pronombre interrogativo'),
    V('doko', 'どこ', 'dónde, adónde (doko) — pronombre interrogativo'),
    V('itsu', 'いつ', 'cuándo (itsu) — pronombre interrogativo'),
    V('dōshite', 'どうして', 'por qué (dōshite) — pronombre interrogativo'),
    V('dō', 'どう', 'cómo (dō) — pronombre interrogativo'),
    V('e', 'へ', 'dirección: el "adónde" del movimiento (e)'),
    V('mō', 'もう', 'ya (mō) — partícula que responde a una pregunta sobre el pasado'),
    V('yō', 'よう', 'partícula de necesidad: "hay que", "tengo que" (yō)'),
    V('deshō', 'でしょう', 'afirmación atenuada: "probablemente", "seguro que" (deshō)'),
    V('ne', 'ね', 'partícula que pide confirmación a quien escucha (ne)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'La pregunta no invierte nada: es la afirmación con {ka} al final, y el orden de la lección 9 sigue exactamente igual.',
      ),
    },
    {
      n: '2',
      text: T(
        '{ka} no obliga a una respuesta de sí o no. Quien elige la forma de la respuesta es la respuesta.',
      ),
    },
    {
      n: '3',
      text: T(
        'Los interrogativos son sustantivos: {dare}, {nani}, {doko}, {itsu}, {dōshite} y {dō} van antes del verbo, como cualquier sustantivo.',
      ),
    },
    {
      n: '4',
      text: T(
        'La partícula interrogativa cierra la frase. Nunca la abre, y nunca se pega al pronombre — {anata ka dare} no es japonés.',
      ),
    },
    {
      n: '5',
      text: T(
        'En coreano la pregunta cambia la terminación del verbo y añade el pronombre de registro; en japonés el verbo no cambia y solo avisa la partícula.',
      ),
    },
  ],
  notes: [
    {
      label: T('Una partícula, tres oficios'),
      text: T(
        '{ka} sirve para la pregunta de verdad, para la pregunta retórica — que es una afirmación hecha en forma de pregunta — y para el relato de lo que se oyó decir. La retórica depende de la entonación: "¿Sabes?" subiendo es pregunta, bajando es afirmación. Y es el **contexto** lo que desempata cuando no hay entonación, es decir, en lo escrito: una frase con {ka} justo después de "dicen que" es relato, y nadie va a contestar.',
      ),
    },
    {
      label: T('La pregunta fija el registro de la respuesta'),
      text: T(
        'La respuesta también lleva partícula, y delata cuán firme está quien contesta en la misma formalidad de la pregunta. {deshō} atenúa ("entonces entiendes"), {ne} pide confirmación ("entiendes, ¿no?"), y desu con {ka} al final es la forma neutra. Una misma "¿entiendes?" puede recibir tres respuestas — "sí, entiendo", "sí, un poco", "no exactamente" — y la diferencia entre ellas es más de registro que de información.',
      ),
    },
  ],
  examples: [
    {
      text: '行くか',
      gloss: T('iku ka — ¿vas? el verbo en su sitio de siempre, la partícula pegada al final'),
    },
    {
      text: 'どこへ行きますか',
      gloss: T(
        'doko e ikimasu ka — ¿a dónde vas? el interrogativo antes del verbo, la partícula al final',
      ),
    },
    {
      text: '行くそうですか',
      gloss: T('iku sō desu ka — ¿dicen que va? la misma partícula, ahora como relato'),
    },
    { text: '知っていますか', gloss: T('shitte imasu ka — ¿sabes? el verbo no cambió nada') },
    {
      text: '罪のない人がだれも石を投げない',
      gloss: T(
        'tsumi no nai hito ga daremo ishi o nagenai — "nadie sin pecado lanza una piedra" (Juan 8:7)',
      ),
    },
  ],
  tables: [
    {
      caption: T('Los seis interrogativos, y su posición'),
      head: [T('Interrogativo'), T('Significa'), T('La frase que hace')],
      rows: [
        [T('{dare}'), T('quién'), T('¿Quién tiró la piedra?')],
        [T('{nani}'), T('qué'), T('¿Qué dijiste?')],
        [T('{doko}'), T('dónde, adónde'), T('¿A dónde vas?')],
        [T('{itsu}'), T('cuándo'), T('¿Cuándo vuelves?')],
        [T('{dōshite}'), T('por qué'), T('¿Por qué fuiste?')],
        [T('{dō} más yō'), T('cómo'), T('¿Cómo sabes eso?')],
      ],
    },
    {
      caption: T('Tres funciones de la misma partícula'),
      head: [T('Uso'), T('Qué es'), T('Qué hace el lector con esto')],
      rows: [
        [T('pregunta'), T('{anata wa iku ka}'), T('contesta sí, no, o con otra pregunta')],
        [
          T('pregunta retórica'),
          T('{shiru ka}, entonación descendente'),
          T('la trata como afirmación y contesta como conviene'),
        ],
        [T('"dicen que"'), T('{iku sō desu ka}'), T('sabe que es relato, no hecho confirmado')],
      ],
    },
    {
      caption: T('La respuesta también lleva partícula'),
      head: [T('Partícula'), T('Qué añade'), T('Cómo suena')],
      rows: [
        [T('desu + {ka}'), T('neutralidad'), T('entiendo — respuesta seca, sin confianza extra')],
        [
          T('{deshō}'),
          T('afirmación atenuada'),
          T('¿entonces entiendes? — quien contesta está de acuerdo'),
        ],
        [
          T('{ne}'),
          T('petición de confirmación'),
          T('¿entiendes, no? — la respuesta vuelve con otra {ne}'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué cambia de "tú vas" a "¿vas?" en japonés?'),
    options: [
      T('el verbo sube al principio de la frase'),
      T('aparece una partícula al final, y el orden no cambia'),
      T('el pronombre se vuelve pronombre interrogativo'),
      T('entra un verbo auxiliar de pregunta'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "¿vas?" — el verbo y la partícula interrogativa al final: 行く____'),
      answer: 'か',
    },
    {
      kind: 'match',
      prompt: T('Une el interrogativo con la pregunta que hace'),
      pairs: [
        { a: T('{dare}'), b: T('quién') },
        { a: T('{doko}'), b: T('dónde, adónde') },
        { a: T('{itsu}'), b: T('cuándo') },
        { a: T('{dōshite}'), b: T('por qué') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('En "dicen que él va", la partícula {ka} se está usando como:'),
      options: [
        T('pregunta de verdad'),
        T('pregunta retórica'),
        T('relato de lo que se oyó decir'),
        T('objeto directo'),
      ],
      answer: 2,
    },
  ],
};
