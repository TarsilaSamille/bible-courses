import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  section: T('Sintaxis'),
  title: T('El orden SOV y dónde va cada cosa: el adverbio es el que más engaña'),
  subtitle: T(
    'El verbo va al final, pero el adverbio no va antes del sujeto como en mandarín: en coreano encaja entre el sujeto y el verbo',
  ),
  body: C(`## Objeto, verbo, sujeto: el mismo orden que las otras dos

El portugués dice "yo como una manzana": sujeto, verbo, objeto, el orden SVO. El coreano dice {naneun sagwaneul meogeotda}, el mismo contenido con el verbo en medio y el sujeto al final. No es caos, es **el orden**, y es exactamente el mismo orden que el mandarín, {wǒ chī píngguǒ}, y que el japonés, {watashi wa ringo o taberu}. Los tres idiomas de este proyecto rigen la frase con la misma clave: el verbo cierra, y lo que el portugués pone antes del verbo el coreano lo empuja aún más hacia delante.

La consecuencia práctica es la misma en los tres casos, y vale más que la regla misma: **quien traduce palabra por palabra llega al final con las piezas en el sitio equivocado**, y la frase que sale es gramatical en portugués e intraducible en coreano. Por eso la traducción automática se derrumba aquí: conoce las palabras y no conoce el orden.

## El adverbio: entre el sujeto y el verbo

El adverbio es la diferencia entre coreano y mandarín que casi nadie espera. En mandarín el adverbio de tiempo abre la frase y el sujeto viene después: "ayer yo comí manzana". En coreano el adverbio también va antes del verbo, pero **después del sujeto**: {nat neun naneun meogeotda}, "ayer yo comí", con "ayer" después de "yo" y antes de "comí". El adverbio no abre la frase; se encaja entre el sujeto y el verbo, que es el único hueco que deja el orden SOV.

En portugués esto no cuesta nada: "ayer yo comí manzana", "yo ayer comí manzana" y "yo comí ayer manzana" son la misma frase, y el adverbio es libre. En coreano la posición es fija, y por eso un adverbio fuera de sitio no es una frase desplazada: es una frase equivocada. La regla práctica es una sola: adverbio de tiempo y de lugar entre el sujeto y el verbo, y nunca antes del sujeto.

Y la partícula de tema aparece pegada al adverbio: "ayer" lleva {neun}, la misma partícula que lleva un sustantivo, y el resultado es una marca visible de que esa pieza es el adverbio y no el sujeto. Quien lee coreano y no conoce la partícula tropieza exactamente ahí: monta "ayer, yo, comí" y produce {nat naneun meogeotda}, que es una frase sobre ayer en la que el lector supone estar viendo el sujeto en la posición del mandarín.

## El adjetivo va antes, el verbo va en medio

El portugués pone el adjetivo **después** del sustantivo: "un libro rojo". El coreano lo pone **antes**: {chwib chwib chwib chaek}, "rojo libro", como hace el japonés y como hace el mandarín. Y el verbo va siempre en medio, nunca al final ni al principio.

Combina las dos reglas y la frase queda lista: "ayer yo comí un libro rojo" es {nat neun naneun chwib chwib chwib yeohaeneul meogeotda}, adverbio, sujeto, adjetivo, sustantivo con la partícula de objeto, verbo. Leída de izquierda a derecha es la frase portuguesa con todas las piezas del revés: en portugués el adjetivo se pega al sustantivo y el verbo se pega al sujeto; en coreano el verbo se pega al objeto y el sustantivo se pega a él, y el adverbio, que en portugués es libre, queda clavado en medio. Escribe las dos frases una al lado de la otra una vez y el texto coreano deja de parecer truncado.

Cuando hay más de un adjetivo el orden también es fijo: **el que está más cerca del sustantivo es el que lo distingue**, y coreano y japonés coinciden en esto. Para "un libro blanco pequeño", {jageun hwen chaek}, el blanco {hwen} es lo que separa este libro de los demás, y por eso va el último, justo al lado del sustantivo. Lo mismo vale para {gichimi chan chwib chwib chwib chaek}, "un libro rojo muy pequeño".

## El indirecto antes del directo, y marcado por partícula

"Dar", "mandar", "mostrar" y "enseñar" son las construcciones en las que el error de traducción aparece con más fuerza, porque el portugués pone el objeto indirecto al final: "yo doy un libro a él". El coreano pone el indirecto antes de todo: {kurege chwaege chwawassseo}, "a él un libro di", con {kurege} para la persona y {chwaege} para la cosa.

Y el coreano es más robusto que el japonés: el objeto indirecto no se reconoce solo por la posición, se reconoce **por la partícula**. {ee}, "a alguien", y {hantaee}, también "a alguien", son las dos formas del indirecto de persona, y {eseo} marca el origen, "de". En japonés el indirecto se reconoce por {ni}; el coreano tiene una partícula propia, y sobrevive incluso cuando la posición es ambigua. Es esa partícula la que separa "de" de "a" en la misma frase: {chosim chwiteuseo} es "desde el principio", mientras que {ee} es "a alguien", dos papeles distintos, dos partículas distintas.

Lo que **no** cambia es el sujeto: va al final, pero puede ser **omitido**, porque la terminación del verbo ya dice quién es el sujeto. En una frase sin objeto indirecto el orden queda objeto, verbo, sujeto, y cuando el sujeto desaparece sobra objeto y verbo: {nat gatta}, "ayer fue". Esa omisión es lo que hace que un texto coreano parezca truncado para quien no conoce la lengua: no es que falte la última palabra, es que la terminación del verbo ya hizo su trabajo.
`),
  vocab: [
    V('naneun', '는', 'tema después de "yo" (naneun)'),
    V('nat', '어제', 'ayer; adverbio de tiempo (nat)'),
    V('neun', '는', 'partícula de tema, también después de un adverbio (neun)'),
    V('yeohaeneul', '책', 'libro con la partícula de objeto directo (yeohaeneul)'),
    V('reul', '를', 'objeto directo después de palabra terminada en vocal (reul)'),
    V('gat', '가', 'sujeto después de palabra terminada en vocal (gat)'),
    V('ee', '에게', 'a alguien; objeto indirecto (ee)'),
    V('hantaee', '한테', 'a alguien; objeto indirecto (hantaee)'),
    V('eseo', '에서', 'de; origen (eseo)'),
    V('chwib', '빨간', 'rojo; adjetivo, va antes del sustantivo (chwib)'),
    V('jageun', '작다', 'ser pequeño (jageun)'),
    V('hwen', '흰', 'blanco; adjetivo posicional (hwen)'),
    V('mulgug', '말씀', 'la Palabra (mulgug)'),
    V('chosim', '처음', 'principio; comienzo (chosim)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El orden es objeto — verbo — sujeto, el mismo que el mandarín y el japonés. El verbo cierra la frase y el sujeto va al final.',
      ),
    },
    {
      n: '2',
      text: T(
        'El adverbio de tiempo y de lugar va entre el sujeto y el verbo: {nat neun naneun meogeotda}. En portugués es libre; en coreano la posición es fija.',
      ),
    },
    {
      n: '3',
      text: T(
        'El adverbio lleva partícula de tema, {neun}, que es la marca visible de que esa pieza es adverbio y no sujeto.',
      ),
    },
    {
      n: '4',
      text: T(
        'El adjetivo va antes del sustantivo y el verbo va en medio; con varios adjetivos, el que está más cerca del sustantivo es el que lo distingue.',
      ),
    },
    {
      n: '5',
      text: T(
        'El objeto indirecto va antes del directo y está marcado por partícula — {ee}, {hantaee}, {eseo} — lo que lo hace más legible que en japonés.',
      ),
    },
  ],
  notes: [
    {
      label: T('El sujeto puede desaparecer, y por eso el texto parece truncado'),
      text: T(
        'El sujeto va al final, pero la terminación del verbo ya declara quién es. En una frase sin objeto indirecto sobra objeto y verbo: {nat gatta}, "ayer fue". Lo que parece una frase cortada es una frase completa.',
      ),
    },
    {
      label: T('La partícula vale más que la posición'),
      text: T(
        'En mandarín y en japonés la función de cada sintagma se deduce de la posición, y por eso la traducción automática falla al montar la frase. En coreano la partícula declara la función: el objeto indirecto se reconoce por {ee} o {hantaee} aunque la posición sea ambigua. Eso es lo que hace el texto legible.',
      ),
    },
  ],
  examples: [
    {
      text: '어제 나는 빨간 책을 먹었다',
      gloss: T(
        'nat neun naneun chwib chwib chwib yeohaeneul meogeotda — ayer yo comí un libro rojo',
      ),
    },
    {
      text: '어제 나는 책만 먹었다',
      gloss: T('nat neun naneun chaekman meogeotda — ayer yo comí solo libros'),
    },
    { text: '그에게 책을 주었다', gloss: T('kurege chwaege chwawassseo — di un libro a él') },
    { text: '작은 흰 책', gloss: T('jageun hwen chaek — un libro blanco pequeño') },
    {
      text: '처음부터 말씀 이었어',
      gloss: T('chosim chwiteuseo mulgug ittaseo — en el principio era la Palabra'),
    },
  ],
  tables: [
    {
      caption: T('El orden de los constituyentes: la misma frase en portugués y en coreano'),
      head: [
        T('Constituyente'),
        T('Dónde va en portugués'),
        T('Dónde va en coreano'),
        T('La regla'),
      ],
      rows: [
        [
          T('adverbio de tiempo'),
          T('libre, en cualquier posición'),
          T('entre el sujeto y el verbo'),
          T('va después del sujeto'),
        ],
        [T('sujeto'), T('primero'), T('al final'), T('se puede omitir')],
        [
          T('adjetivo'),
          T('después del sustantivo'),
          T('antes del sustantivo'),
          T('el más cercano distingue'),
        ],
        [
          T('objeto indirecto'),
          T('cerrando la frase'),
          T('antes del objeto directo'),
          T('va con partícula'),
        ],
        [T('objeto directo'), T('después del verbo'), T('antes del verbo'), T('va con partícula')],
        [T('verbo'), T('segundo'), T('antes del sujeto'), T('cierra la proposición')],
      ],
    },
    {
      caption: T('Dónde queda el adverbio "ayer" en los tres idiomas del proyecto'),
      head: [T('Idioma'), T('La frase'), T('Dónde queda el adverbio')],
      rows: [
        [T('portugués'), T('ontem eu comi maçã'), T('libre: en cualquier posición')],
        [T('mandarín'), T('{zuotian wo chi-le pingguo}'), T('antes del verbo y antes del sujeto')],
        [T('japonés'), T('{kinou ringo o tabeta}'), T('antes del verbo y antes del sujeto')],
        [T('coreano'), T('{nat neun naneun meogeotda}'), T('entre el sujeto y el verbo')],
      ],
    },
    {
      caption: T('El adjetivo en portugués y en coreano, con varios adjetivos'),
      head: [T('Portugués'), T('Coreano'), T('Orden')],
      rows: [
        [T('un libro rojo'), T('{chwib chwib chwib chaek}'), T('adjetivo antes del sustantivo')],
        [
          T('un libro blanco pequeño'),
          T('{jageun hwen chaek}'),
          T('el que distingue va pegado al sustantivo'),
        ],
        [
          T('un libro rojo pequeño'),
          T('{jageun chwib chwib chwib chaek}'),
          T('el orden de los adjetivos también es fijo'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En "ayer yo comí una manzana", ¿dónde va el adverbio en coreano?'),
    options: [
      T('antes del sujeto'),
      T('entre el sujeto y el verbo'),
      T('después del verbo'),
      T('al final de la frase, después del sujeto'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Inserta "ayer" entre el sujeto y el verbo: 나는 ____ 빨간 책을 먹었다'),
      answer: '어제',
    },
    {
      kind: 'match',
      prompt: T('Relaciona la pieza con la función que tiene en la frase'),
      pairs: [
        { a: T('{kurege}'), b: T('objeto indirecto: la persona, marcado por partícula') },
        { a: T('{yeohaeneul}'), b: T('objeto directo: la cosa, marcado por partícula') },
        { a: T('{nat}'), b: T('adverbio de tiempo, entre el sujeto y el verbo') },
        { a: T('{chwib chwib chwib}'), b: T('adjetivo, antes del sustantivo') },
        { a: T('{meogeotda}'), b: T('verbo, y su terminación declara el sujeto') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo se escribe "un libro blanco pequeño" en coreano?'),
      options: [
        T('{chaek jageun hwen}'),
        T('{hwen jageun chaek}'),
        T('{jageun hwen chaek}'),
        T('{chaek hwen jageun}'),
      ],
      answer: 2,
    },
  ],
};
