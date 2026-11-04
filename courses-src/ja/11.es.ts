import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  section: T('Adjetivo'),
  title: T('El adjetivo es un sustantivo: cómo modificarlo y cómo negarlo'),
  subtitle: T(
    'El japonés no tiene adjetivo: tiene un sustantivo que va antes del otro sustantivo, y la negación siempre es un verbo',
  ),
  body: C(`
## El "adjetivo" japonés es un sustantivo

En portugués "livro vermelho" es un sustantivo seguido de un adjetivo que concuerda con él. En japonés ese adjetivo no existe. {赤い本} se lee literalmente "rojo libro": la cualidad va antes del sustantivo y no concuerda con nada, porque no es un adjetivo: es un **sustantivo** que ocupa el lugar que el portugués reserva para la cualidad. La partícula que une un sustantivo con otro es {の}, y en {赤い本} aparece omitida, porque el japonés prescinde de ella cuando el modificador ya está claro.

El orden es el primer aviso, y es el contrario del mandarín. En mandarín el adjetivo va después del sustantivo; en japonés es al revés, y por el mismo motivo que en coreano: ambas lenguas ponen el objeto antes del verbo y el verbo antes del sujeto, y el sustantivo es el sujeto. El sujeto es la última pieza de la frase, y por eso el sustantivo va en segundo lugar y la cualidad va pegada a él. Quien llega del mandarín tiene que cambiar la mirada de sitio, no las palabras.

## Los dos sufijos que forman el modificador

Convertir un sustantivo en modificador tiene dos caminos, y saber cuál tomar es exactamente el detalle que los libros de gramática suelen omitir.

Las formas **básicas**, las que se aprenden primero y las que no derivan de nada, llevan el sufijo {い}: {美しい} "bonito", {赤い} "rojo", {新しい} "nuevo". Aquí el modificador es la propia forma, sin nada más.

Las formas **derivadas**, las que salieron de un verbo o de otro sustantivo, llevan el sufijo {な}: {静かな} "silencioso", {元気な} "animado", {雪の} "de nieve". Aquí la forma base aparece como sustantivo, {静か} por sí solo es "quietude", "el silencio", y el modificador es esa base con la {い} final cambiada por {な}.

Regla de bolsillo: **si el sustantivo termina en {な} o en {ぶ}, el modificador suele ser la propia forma con {な}**. {好きな本} es "el libro que me gusta", y {上手な人} es "persona avezada": en los dos casos el sustantivo solo no basta. La prueba es práctica y no necesita regla: cambia el final del sustantivo por {な}; si la frase sigue teniendo sentido, el modificador era {な}.

## Negar un sustantivo es negar el verbo {ある}

En japonés no existe "no bonito", porque no hay adjetivo que negar. Lo que existe es el verbo {ある}, que hace dos trabajos: dice que una cosa existe y dice que una cosa es así. Ese verbo es lo que se niega, con la negación de la lección 7.

- {美しいです} — "es bonito"
- {美しくありません} — "no es bonito"
- {静かではない} — "no es silencioso"
- {本がありません} — "no hay libro"

El punto que cambia la lectura bíblica es este: **en japonés no se niega una palabra, se niega la frase que dice que la cosa existe**. El "no" pertenece al verbo, y el verbo es siempre {ある} cuando lo que se describe es una cualidad. Por eso el adverbio derivado de {美しい} necesita un verbo para volverse negativo: {美しくありません} es "no es bonita" porque tiene verbo, y no porque {美しい} tenga forma negativa, y esa forma no existe en ningún sitio del japonés.

El kanji da la prueba de que esto no es teoría gramatical. {遅い} es "lento" y "tarde" a la vez, y {遅く} es "despacio": el mismo ideograma del "atrasado". Por eso 1 Corintios 13:4 se lee en japonés como {愛は寛容である}, "el amor es paciente": {寛容} es un sustantivo en el lugar donde el portugués pondría el adjetivo, y la frase termina en {ある}, marcada por {は} y unida al sustantivo por {で}.

## Adverbio y grado: también es sustantivo

Un adverbio japonés nunca es una palabra aparte: es un sustantivo con una partícula o con un sufijo. Sustantivo + {に}: {静かに}, "silenciosamente". Base verbal + {な}: de {速い} sale la base {早}, y {早} + {な} es "rápidamente". Las dos fórmulas dicen lo mismo, y por eso {速い} es sustantivo ("rapidez"), es verbo ("ser rápido") y es adverbio ("rápidamente") sin cambiar de forma. En portugués eso son tres palabras distintas; en japonés es una sola.

El grado también es sustantivo, y el más útil es {過ぎる}, "pasar de": {速すぎます} es "es demasiado rápido", literalmente "excede en rapidez". Después vienen {ぐらい} y {ほど}, que hacen el mismo servicio con sentido de aproximación, "hasta el punto de": {泣くほど} es "hasta el punto de llorar", y {泣くぐらい} es lo mismo con tono de exclamación.

Juan 1:5 muestra la otra cara de la misma regla, y la muestra mejor porque el versículo es corto. La luz es sujeto de un verbo de acción, "la luz brilla en las tinieblas" sale como {光は暗闇の中に照らす}, y la misma palabra es predicado en 1 Juan 1:5, donde Dios es luz: {神は光である}. Dos verbos para un mismo sustantivo, y el griego hace la misma distinción: en el versículo de Juan tiene una cualidad y una acción, y el japonés necesita dos verbos distintos para las dos. Leer "la luz brilla" como "la luz es brillante" es leer mal: brillar es acción, y la acción en japonés siempre tiene verbo.
`),
  vocab: [
    V('akai', '赤い', 'rojo (akai) — sustantivo que ocupa el lugar del adjetivo'),
    V('utsukushii', '美しい', 'bonito (utsukushii) — forma básica, modificador en い'),
    V('shizuka', '静か', 'silencioso, quieto (shizuka) — forma derivada de un verbo'),
    V('no', 'の', 'de; une un sustantivo con otro (no)'),
    V('na', 'な', 'sufijo que forma el modificador derivado (na)'),
    V('aru', 'ある', 'ser, existir (aru) — el verbo de las cualidades'),
    V('arimasu', 'ない', 'negación de ある: "no es", "no hay" (arimasu)'),
    V('hayaku', '速い', 'rápido (hayaku); con に o な da "rápidamente"'),
    V('sugiru', '過ぎる', 'pasar de; con に da "tan... que", "demasiado" (sugiru)'),
    V('gurai', 'ぐらい', '"tan... que", "hasta el punto de" (gurai)'),
    V('hodo', 'ほど', '"tan... que", "hasta el punto de" (hodo)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Lo que modifica un sustantivo en japonés es un sustantivo, y va antes: {赤い本} es "rojo libro", nunca "libro rojo".',
      ),
    },
    {
      n: '2',
      text: T(
        'La forma básica usa {い} y ya es el modificador; la derivada usa {な}: {静かな}, nunca {静かい}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Un sustantivo que termina en {な} o en {ぶ} suele volverse modificador con {な}: {好きな本}, {上手な人}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Los sustantivos no se niegan; se niega el verbo {ある}: "no es bonito" es {美しくありません}, y "no bonito" no existe.',
      ),
    },
    {
      n: '5',
      text: T(
        'Adverbio y grado también son sustantivos: sustantivo + {に}, base verbal + {な}, y {過ぎる}, {ぐらい}, {ほど}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Sustantivo que también es cualidad'),
      text: T(
        'Algunos sustantivos describen una cualidad y por eso se vuelven modificador con {な} en vez de {い}. En ellos la base es un sustantivo completo: {静か} por sí solo es "quietude", y {好きな本} es "el libro que me gusta". La prueba es un cambio: si sustituir el final del sustantivo por {な} no rompe la frase, era {な}.',
      ),
    },
    {
      label: T('El error estructural'),
      text: T(
        'Quien viene del español escribe "no bonito" y siente que falta el verbo. No falta: en japonés lo que existe es la negación del verbo {ある}, de la lección 7. "No bonito" no existe porque no existe adjetivo, y por eso la negación de una cualidad en japonés es siempre una frase con verbo.',
      ),
    },
  ],
  examples: [
    { text: '赤い本', gloss: T('akai hon — un libro rojo') },
    { text: '美しい花', gloss: T('utsukushii hana — una flor bonita') },
    { text: '静かな部屋', gloss: T('shizuka na heya — una sala silenciosa') },
    { text: '静かではありません', gloss: T('shizuka de wa arimasu — no es silencioso') },
    { text: '早く走ります', gloss: T('hayaku hashirimasu — corro rápido') },
    { text: '速すぎます', gloss: T('hayaku sugimasu — es demasiado rápido') },
  ],
  tables: [
    {
      caption: T('Negar un sustantivo es negar el verbo'),
      head: [T('Lo que se quiere decir'), T('Japonés'), T('Qué ocurre')],
      rows: [
        [T('es bonito'), T('{美しいです}'), T('nada: {です} es el {ある} afirmativo')],
        [T('no es bonito'), T('{美しくありません}'), T('{ある} en negativo, sin partícula')],
        [
          T('no es bonito, coloquial'),
          T('{美しくない}'),
          T('el mismo {ある}, con la {ない} a secas'),
        ],
        [T('no bonito'), T('no existe'), T('el "no" es verbo, nunca partícula')],
      ],
    },
    {
      caption: T('Las dos maneras de formar un modificador'),
      head: [T('De dónde viene la palabra'), T('Ejemplo'), T('Cómo queda el modificador')],
      rows: [
        [T('forma básica'), T('{美しい花}'), T('la propia forma, en {い}')],
        [T('forma básica'), T('{新しい本}'), T('la propia forma, en {い}')],
        [T('derivada de un verbo'), T('{静かな}'), T('la base con {な}: {静か} queda sustantivo')],
        [
          T('sustantivo que nombra una cualidad'),
          T('{上手な人}'),
          T('la base con {な}: {上手} queda sustantivo'),
        ],
      ],
    },
    {
      caption: T('Del sustantivo al adverbio y al grado'),
      head: [T('Sustantivo'), T('Con {に} o {な}'), T('Lo que sale')],
      rows: [
        [T('{静か}'), T('{静かに}'), T('silenciosamente')],
        [T('{速い}'), T('{早く}'), T('rápidamente, sustantivo más {に}')],
        [T('{速い}'), T('{速すぎます}'), T('demasiado rápido, "excediendo en rapidez"')],
        [T('{泣く}'), T('{泣くほど}'), T('hasta el punto de llorar')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En "no es bonito", ¿qué se está negando?'),
    options: [
      T('la palabra bonito'),
      T('el verbo {ある}'),
      T('la partícula {の}'),
      T('el sufijo {い}'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "no es bonito" con la forma negativa del verbo {ある}: {美しく}____'),
      answer: 'ありません',
    },
    {
      kind: 'match',
      prompt: T('Une la construcción con lo que produce'),
      pairs: [
        { a: T('{静かに}'), b: T('sustantivo más {に}: adverbio') },
        { a: T('{早く}'), b: T('base verbal más {な}: adverbio') },
        { a: T('{泣くほど}'), b: T('grado de aproximación, "hasta el punto de"') },
        { a: T('{速すぎます}'), b: T('grado con {過ぎる}, "pasar de"') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('En mandarín el adjetivo va después del sustantivo. En japonés, ¿dónde va?'),
      options: [
        T('también después del sustantivo'),
        T('antes del sustantivo'),
        T('en lugar del sustantivo'),
        T('después del verbo'),
      ],
      answer: 1,
    },
  ],
};
