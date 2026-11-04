import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  section: T('Adjetivo'),
  title: T('Grados y adverbios: cómo decir "muy" y "siempre" sin flexionar nada'),
  subtitle: T(
    'El japonés no tiene comparativo ni superlativo: el grado es una partícula posicional, y el adverbio de frecuencia va después de la forma verbal',
  ),
  body: C(`
## "Muy" es una partícula, y la posición lo es todo

El adjetivo japonés no flexiona. No hay forma para "más bonito" ni para "el más bonito", y no son formas raras: no existen. Lo que existen son **partículas de grado**, y se distinguen por la posición. Es la posición la que dice el grado, como en mandarín, donde la partícula del "demasiado" (lección 16) también va antes del adjetivo y hace el trabajo sola.

El par más común es {totemo} y {mō}: {totemo utsukushii} "muy bonito", {mō hoshii} "lo quiero mucho", {mō atsui} "está muy caliente". Los dos hacen el mismo trabajo, y la elección es de registro y no de sentido, porque {totemo} es neutro mientras {mō} es más coloquial y es el que aparece en el habla. Fíjese en que {mō} suena igual que {mo}, "también": las dos palabras tienen la misma pronunciación, y lo que las separa es lo que viene después. El {mō} de grado va seguido de un adjetivo; el {mo} va seguido de un nombre o de un pronombre.

El adverbio de frecuencia obedece a otra regla, y es la más importante: va **después** de la forma verbal, nunca antes. {hon o yomu itsumo} "siempre leo libros", {tabi iku} "a veces voy". Quien viene del mandarín se equivoca aquí casi siempre, porque allí el adverbio abre el verbo: {cháng cháng} y {yǒu shí hou}. En japonés la posición es la opuesta, y es una inversión que nadie hace por instinto.

## {sugiru}: el atajo más rápido de la lengua

La palabra que hay que llevarse de aquí es {sugiru}, "pasar de". Funciona como **verbo** ({oishisugiru}, "está deliciosa de más") y como adverbio ({hayaku sugimasu}, "es demasiado rápido"), y en los dos casos hace el trabajo que un comparativo haría en portugués.

El truco es que {sugiru} se pega a la palabra y se vuelve una sola: {oishi + sugiru} da {oishisugiru}, {hayaki + sugiru} da {hayakusugiru}. Escriba el par junto y el japonés lo entiende, sin partícula en medio. Es el mismo movimiento de la lección 2, donde la raíz de "comer" entra en una palabra que significa "comida", y el mismo que mete la mano que escribe dentro de la palabra "carta": raíz a la izquierda, categoría a la derecha.

En la traducción bíblica el {sugiru} aparece todo el tiempo, y casi siempre con juicio: una promesa que "pasa de" lo que el oyente esperaba, una codicia que "pasa de" la medida. También es el camino más corto hacia {totemo}, y más fuerte: {oishisugiru} dice más que {totemo oishii} en dos sílabas, y por eso la traducción prefiere la forma corta.

## Negar el adverbio no es decir "no muy"

El error del principiante aquí es estructural, y vale nombrarlo antes de que el lector lo cometa en un texto japonés. El instinto es construir "no muy bonito" como "no" + "muy" + "bonito", y el japonés rechaza esa cuenta. Lo opuesto de "muy" no es "no muy": es {amarū}, "sobrar", y {amarū} significa **exceso**, "demasiado", "más de lo que debe".

Así que "no muy bonito" en japonés es una frase, y no un adverbio: {amarū umi kirei ja nai}, literalmente "no es que sobre bonito". El adverbio de exceso se convierte en una cláusula negativa. Lo que el lector hace aquí es traducir la idea de la atenuación, no su estructura, y por eso {amarū} no es "no muy" en ningún sitio: {amarū nemi hoshii} es "no lo quiero demasiado", desde el punto de vista de quien no quiere gastar. El antónimo de {amarū} es {mō nai}, "no basta", y las dos frases tratan la misma cantidad por lados opuestos.

## Frecuencia, tiempo y "también"

Tres palabras resuelven casi toda la frecuencia del día a día, y las tres son adverbios que van después del verbo: {itsumo} "siempre", {tabi} "a veces", {mettei} "casi nunca". La tercera merece atención porque no es "nunca" sino "difícilmente": {mettei konai} es lo que dice un japonés cuando quiere decir "casi nunca voy", y es el mismo cuidado que separa {mō} de {totemo}. Una cuarta encaja: {mawarini}, "de vez en cuando", que por no ser fija lleva la partícula {mawarini ni}.

Con tiempo, el adverbio también es partícula y también va después del sustantivo: {made asita} "hasta mañana", {kara kino} "desde ayer". Y "antes" y "después" son {mae} y {ato}, sustantivos, como todo adverbio del japonés: {mae ni} es literalmente "delante de", {ato ni} "detrás de". Ninguno de los dos flexiona, y ninguno lo necesita.

Para cerrar el cuadro, el "también" normal es {mo}: {watashi mo}, "yo también". El "incluso" es {sae}, enfático, y aparece con frecuencia en las traducciones bíblicas justo donde el griego tiene una "y" cumulativa: {sae} marca que un elemento se suma al anterior en vez de venir después de él. Quien lee griego reconoce el movimiento: en vez de enumerar, la traducción japonesa acumula.

El versículo bíblico que ata todo esto es 1 Juan 1:9, y lo que trae es el verbo de la confesión: {mokuroku suru}, "declarar, confesar". Quien lo conjuga en pasado entra en la misma familia que {sugiru}, porque los dos toman un auxiliar y se vuelven frase. La condición viene con {moshi} al principio y el verbo va al final: {moshi} abre, {watashitachi no tsumi o mokuroku suru nara} cierra.

Fíjese en lo que la frase **no** tiene: ningún adverbio de grado, ningún comparativo, ninguna flexión de adjetivo. El peso del versículo está en {tsumi o mokuroku suru}, verbo y objeto, y en {moshi}, la única palabra que hace el trabajo de la condicional. En japonés, lo que carga peso sintáctico casi nunca es el adverbio. Es la partícula, y la partícula se reconoce por su posición.
`),
  vocab: [
    V('mō', 'もう', 'muy; también (mō)'),
    V('totemo', 'とても', 'muy (totemo)'),
    V('sugiru', '過ぎる', 'pasar de; exceder (sugiru)'),
    V('amarū', '余る', 'sobrar; demasiado (amarū)'),
    V('itsumo', 'いつも', 'siempre (itsumo)'),
    V('tabi', '時々', 'a veces; de vez en cuando (tabi)'),
    V('mettei', '滅多に', 'casi nunca; raramente (mettei)'),
    V('mawarini', '回り', 'de vez en cuando (mawarini)'),
    V('made', 'まで', 'hasta; límite (made)'),
    V('kara', 'から', 'desde; de (kara)'),
    V('nai', 'ない', 'no; no existe (nai)'),
    V('mae', '前', 'antes; delante; parte de atrás (mae)'),
    V('ato', '後', 'después; detrás (ato)'),
    V('mo', 'も', 'también (mo)'),
    V('sae', 'さえ', 'incluso; hasta (sae)'),
    V('moshi', 'もし', 'si; en caso de que (moshi)'),
    V('oishisugiru', 'おいしすぎる', 'está deliciosa de más (oishisugiru)'),
    V('hayakusugiru', '速すぎる', 'demasiado rápido (hayakusugiru)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El adjetivo japonés no flexiona: no hay comparativo ni superlativo. El grado es una partícula, y lo que lo dice es su posición.',
      ),
    },
    {
      n: '2',
      text: T(
        '{totemo} y {mō} dicen "muy" y van antes del adjetivo; {sugiru} dice "pasar de" y se pega al final de la palabra.',
      ),
    },
    {
      n: '3',
      text: T(
        '{sugiru} funciona como verbo y como adverbio: {oishisugiru} es "deliciosa de más", y la forma pegada es más corta y más fuerte que {totemo oishii}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Lo opuesto de "muy" es {amarū}, "demasiado". "No muy bonito" es una frase entera: {amarū umi kirei ja nai}.',
      ),
    },
    {
      n: '5',
      text: T(
        'El adverbio de frecuencia va **después** de la forma verbal: {yomu itsumo}, {tabi iku}. En mandarín y en coreano va antes, y esa inversión es la que más confunde.',
      ),
    },
  ],
  notes: [
    {
      label: T('{mō} y {mo} suenan igual'),
      text: T(
        'El "muy" {mō} y el "también" {mo} suenan idénticos. Lo que los separa es lo que viene después: {mō} va seguido de adjetivo, {mo} de nombre o pronombre. En un Evangelio el par {mo} aparece decenas de veces, y es el adverbio más frecuente de la lengua después de {mō}.',
      ),
    },
    {
      label: T('Traducir la idea, no la estructura'),
      text: T(
        'Cuando la estructura del original no existe en japonés, la traducción cambia la construcción en vez de forzar la equivalencia. "No muy bonito" se vuelve una cláusula negativa con {nai}; el lector encuentra toda la atenuación sin que ninguna palabra corresponda una a una.',
      ),
    },
  ],
  examples: [
    { text: 'とても美しい', gloss: T('totemo utsukushii — muy bonito') },
    { text: 'おいしすぎる', gloss: T('oishisugiru — está deliciosa de más') },
    { text: 'あまり強くない', gloss: T('amarū tsuyoku nai — no es bastante fuerte') },
    { text: '毎日本を読む', gloss: T('mainichi hon o yomu — leo libros todos los días') },
    {
      text: 'もし私たちの罪を告白するならば',
      gloss: T(
        'moshi watashitachi no tsumi o mokuroku suru nara — si confesamos nuestros pecados (1 Juan 1:9)',
      ),
    },
  ],
  tables: [
    {
      caption: T('Dónde va el adverbio de frecuencia, en los tres idiomas del proyecto'),
      head: [T('Idioma'), T('Posición'), T('Ejemplo')],
      rows: [
        [T('mandarín'), T('antes del verbo'), T('{yǒu shí hou lái} — a veces viene')],
        [
          T('coreano'),
          T('antes del verbo'),
          T('el adverbio de frecuencia también precede al verbo'),
        ],
        [T('japonés'), T('después de la forma verbal'), T('{kuru itsumo} — viene siempre')],
      ],
    },
    {
      caption: T('Los cuatro caminos de hablar de grado'),
      head: [T('Forma'), T('Posición'), T('Lo que dice')],
      rows: [
        [T('{totemo}'), T('antes del adjetivo'), T('muy, neutro')],
        [T('{mō}'), T('antes del adjetivo'), T('muy, coloquial')],
        [T('{oishisugiru}'), T('pegada al final de la palabra'), T('deliciosa de más')],
        [T('{amarū}'), T('antes del adjetivo, en una frase con {nai}'), T('no basta')],
      ],
    },
    {
      caption: T('Frecuencia, en cuatro eslóganes'),
      head: [T('Adverbio'), T('Glosa'), T('Dónde entra')],
      rows: [
        [T('{itsumo}'), T('siempre'), T('después del verbo: {yomu itsumo}')],
        [T('{tabi}'), T('a veces'), T('después del verbo: {tabi iku}')],
        [T('{mawarini}'), T('de vez en cuando'), T('con {ni}: {mawarini ni iku}')],
        [T('{mettei}'), T('casi nunca'), T('después del verbo: {mettei konai}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {hon o yomu itsumo}, ¿cuál es la posición del adverbio {itsumo}?'),
    options: [
      T('antes del verbo'),
      T('después de la forma verbal'),
      T('dentro del sustantivo'),
      T('al principio de la frase'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "muy bonito" con la partícula de grado: とても____'),
      answer: '美しい',
    },
    {
      kind: 'match',
      prompt: T('Une el adverbio con su glosa'),
      pairs: [
        { a: T('{itsumo}'), b: T('siempre') },
        { a: T('{tabi}'), b: T('a veces') },
        { a: T('{mettei}'), b: T('casi nunca') },
        { a: T('{made}'), b: T('hasta') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es la posición del adverbio de frecuencia en japonés?'),
      options: [
        T('antes del verbo, como en mandarín'),
        T('después de la forma verbal'),
        T('siempre al principio de la frase'),
        T('unido al sustantivo por {の}'),
      ],
      answer: 1,
    },
  ],
};
