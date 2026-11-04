import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  section: T('Escritura'),
  title: T('Katakana: la caligrafía del extranjero, de los nombres y del énfasis'),
  subtitle: T(
    'Katakana dice las mismas sílabas que el hiragana; la elección es de registro, y es esa elección la que subraya',
  ),
  body: C(`
## Katakana: cinco usos, un registro

Katakana es un silabario igual que el hiragana: dice exactamente las mismas sílabas. La elección entre los dos es de **registro**, no de pronunciación. Katakana marca cinco cosas: la palabra extranjera prestada, el nombre propio japonés, el énfasis o el tono, la onomatopeya y los símbolos científicos.

El lector brasileño tropieza con katakana en la primera página. La palabra "computadora" es {konpyuuta}, "café" es {kafe} y "béisbol" es {beisubooru}; hospital y hotel también son palabras prestadas, y por eso también son katakana. El punto importante es otro: el kanji es el mismo cuando existe. El café tiene una palabra japonesa de verdad, {kohi}, escrita en kanji, y una versión prestada, {kafe}, escrita en katakana. El mismo juego pasa con el béisbol: {yakyuu} en kanji, {beisubooru} en katakana. Las dos dicen lo mismo; una se aprendió como préstamo y por eso usa katakana.

## El nombre propio: la regla sin excepción

Aquí no hay discusión. Todo nombre japonés va en katakana, persona, ciudad, estado, sea lo que sea. {toukyou} es Tokio, {oosaka} es Osaka, {yamada} es Yamada: los tres en katakana, aunque en la vida real suelen aparecer en kanji. Y un nombre extranjero entra por la misma puerta, porque la regla no mira la nacionalidad: un japonés y un extranjero reciben el mismo trato. **Si es nombre, katakana**, tanto para una persona como para una ciudad.

## Énfasis y onomatopeya: los dos bordes

**Énfasis.** Una palabra en medio de una frase en hiragana pasa a katakana cuando el escritor quiere subrayarla. {ookii} es "grande" y viene del kanji {大}; subrayar es reescribir ese kanji en katakana, y el mismo "grande" se vuelve {オオキイ}. El japonés es una escritura sin mayúscula y sin cursiva, así que el katakana en medio del hiragana es el único mecanismo de énfasis escrito de la lengua.

**Onomatopeya.** El segundo borde es un sistema aparte, y es lo más característico del japonés. La onomatopeya va casi siempre en katakana, y ninguna se traduce de forma literal. {ban} es el sonido de golpear, {dokan} es el "toc-toc" de algo que cae, {gorogoro} es el burbujeo del agua hirviendo. {ban} no quiere decir "golpear": quiere decir el ruido que hace la mano al golpear. Onomatopeya es sonido, no palabra.

## El truco del origen

Cada katakana es un kanji deformado. Katakana nació de partes de caracteres chinos que, hace más de mil años, los monjes japoneses usaban solo para representar sonidos, sin ningún significado; con el tiempo esas partes ganaron vida propia. {力}, que significa "fuerza", pierde el relleno y se vuelve {カ} (ka). {無}, que significa "nada", se vuelve {ム} (mu). Por eso el trazo del katakana es más duro que el del hiragana: lleva la sombra del pincel del kanji del que salió.

## Donde aparece la Biblia

El lector de la Biblia va a ver katakana por todas partes en el japonés bíblico. La traducción japonesa de 1987 usa katakana para los términos administrativos y para los nombres extranjeros que aparecen en el texto, mientras que "en el principio" y casi todo lo demás es hiragana. Los libros de estudio bíblico en japonés son un festival de katakana: el nombre de un comentario, un sello editorial, todo en katakana. Y el detalle más curioso viene al final: el griego del Nuevo Testamento, cuando alguien lo escribe en japonés, sale en katakana. El Logos griego se volvió {rogosu}, una palabra griega antigua que se prestó exactamente igual que "computadora".
`),
  vocab: [
    V('konpyuuta', 'コンピューター', 'computadora: préstamo, por eso katakana'),
    V('kafe', 'カフェ', 'café en la versión prestada, en katakana'),
    V('kohi', '珈琲', 'el café de casa, en kanji: la versión nativa'),
    V('yakyuu', '野球', 'béisbol en kanji: la versión nativa del béisbol'),
    V('toukyou', 'トウキョウ', 'Tokio: nombre de ciudad, en katakana'),
    V('oosaka', 'オオサカ', 'Osaka: nombre de ciudad, en katakana'),
    V('yamada', 'ヤマダ', 'Yamada: apellido japonés, siempre en katakana'),
    V('ookii', '大きい', 'grande: el kanji 大 es lo que se subraya en katakana'),
    V('ban', 'バン', 'ban: el sonido de golpear; es sonido, no el verbo'),
    V('dokan', 'ドカン', 'dokan: el "toc-toc" de algo que cae'),
    V('gorogoro', 'ゴロゴロ', 'gorogoro: el burbujeo del agua hirviendo'),
    V('rogosu', 'ロゴス', 'Logos: el griego del Nuevo Testamento en katakana'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Katakana y hiragana dicen la misma sílaba: la elección es de registro, y katakana marca cinco usos — préstamo, nombre, énfasis, onomatopeya y símbolo científico.',
      ),
    },
    {
      n: '2',
      text: T('Si es nombre, katakana — japonés o extranjero, persona o ciudad, sin excepción.'),
    },
    {
      n: '3',
      text: T(
        'El katakana en medio del hiragana es el único mecanismo de énfasis escrito que tiene el japonés.',
      ),
    },
    {
      n: '4',
      text: T(
        'La onomatopeya va casi siempre en katakana y ninguna se traduce de forma literal: {ban} no es "golpear", es el ruido de golpear.',
      ),
    },
    {
      n: '5',
      text: T(
        'Cada katakana es un kanji deformado: {カ} es {力} sin el relleno, {ム} es {無}. El trazo guarda la sombra del pincel.',
      ),
    },
  ],
  notes: [
    {
      label: T('Un préstamo no es una "palabra inglesa"'),
      text: T(
        '{kafe} es una palabra japonesa para café, y {kohi} también. La diferencia no es de sentido, es de historia: una vino de fuera y por eso usa katakana, la otra es de casa y usa kanji. Un diccionario japonés lista las dos.',
      ),
    },
    {
      label: T('El griego también es un préstamo'),
      text: T(
        'Cuando el griego del Nuevo Testamento se pone en japonés sale en katakana: {rogosu} es Logos. Una palabra griega antigua se prestó exactamente igual que "computadora". Quien entendió los préstamos reconoce el Logos en la misma estantería que la televisión.',
      ),
    },
  ],
  examples: [
    { text: 'コンピューターを使う', gloss: T('konpyuuta o tsukau — uso la computadora') },
    {
      text: 'ヤマダさんは東京にいる',
      gloss: T('yamada-san wa toukyou ni iru — el señor Yamada está en Tokio'),
    },
    {
      text: 'オオキイ',
      gloss: T('ookii — "grande", con el kanji reescrito en katakana para subrayarlo'),
    },
    {
      text: 'ゴロゴロと湯が沸く',
      gloss: T('gorogoro to yu ga waku — el agua hierve, haciendo gorogoro'),
    },
    { text: 'ドカンと音がした', gloss: T('dokan to oto ga shita — sonó un "toc-toc"') },
  ],
  tables: [
    {
      caption: T('Los cinco usos del katakana'),
      head: [T('Uso'), T('Ejemplo'), T('Qué es')],
      rows: [
        [
          T('palabra extranjera prestada'),
          T('{konpyuuta}'),
          T('préstamo: una palabra que entró al japonés desde fuera'),
        ],
        [
          T('nombre propio japonés'),
          T('{yamada}'),
          T('persona, ciudad, estado — si es nombre, katakana'),
        ],
        [
          T('énfasis o tono'),
          T('{オオキイ}'),
          T('el katakana en medio del hiragana es lo que subraya'),
        ],
        [T('onomatopeya'), T('{gorogoro}'), T('sonido escrito; casi nunca se traduce')],
        [
          T('símbolo científico'),
          T('{メートル}'),
          T('unidad y letra de símbolo, siempre en katakana'),
        ],
      ],
    },
    {
      caption: T('Onomatopeya: sonido escrito, no palabra'),
      head: [T('Onomatopeya'), T('Sonido que describe'), T('Glosa en português')],
      rows: [
        [T('{ban}'), T('una mano golpeando'), T('golpe, palmada')],
        [T('{dokan}'), T('algo pesado cayendo'), T('"toc-toc", bastonazo')],
        [T('{gorogoro}'), T('agua hirviendo en una olla'), T('burbujeo, ronquido')],
      ],
    },
    {
      caption: T('Cada katakana es un kanji deformado'),
      head: [T('Kanji de origen'), T('Katakana'), T('Lectura')],
      rows: [
        [T('{力} "fuerza"'), T('{カ}'), T('ka')],
        [T('{八} "ocho"'), T('{ハ}'), T('ha')],
        [T('{之} "esto"'), T('{シ}'), T('shi')],
        [T('{無} "nada"'), T('{ム}'), T('mu')],
        [T('{女} "mujer"'), T('{メ}'), T('me')],
        [T('{毛} "pelo"'), T('{モ}'), T('mo')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'En una frase escrita en hiragana, una palabra que aparece en katakana está casi siempre ahí para...',
    ),
    options: [
      T('subrayar la palabra'),
      T('marcar el tiempo pasado'),
      T('negar el verbo'),
      T('indicar un número'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Escribe "computadora" en katakana, completando lo que falta: コン____'),
      answer: 'ピューター',
    },
    {
      kind: 'match',
      prompt: T('Une el katakana con lo que hace'),
      pairs: [
        { a: T('{ban}'), b: T('el sonido de golpear') },
        { a: T('{dokan}'), b: T('el "toc-toc" de un bastonazo') },
        { a: T('{gorogoro}'), b: T('el burbujeo del agua hirviendo') },
        { a: T('{ヤマダ}'), b: T('un apellido japonés') },
        { a: T('{オオキイ}'), b: T('énfasis: la palabra subrayada') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('¿De qué carácter viene el katakana {カ}?'),
      options: [
        T('del kanji {力}, que significa "fuerza"'),
        T('de un hiragana antiguo'),
        T('de un ideograma inventado hace poco'),
        T('de un símbolo científico'),
      ],
      answer: 0,
    },
  ],
};
