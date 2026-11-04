import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('La partícula como sistema'),
  subtitle: T('בְּ כְּ לְ מִן שׁ עַל אֶל — las siete letras que abren la preposición'),
  section: T('Partícula'),
  body: C(`## Siete letras que no son palabras

El hebreo antiguo tiene un grupo de siete partículas: {בְּ} «en, con, por» · {כְּ} «como, conforme a» · {לְ} «para, a, de» · {מִן} «de, desde» · {שׁ} «de, según» · {עַל} «sobre, junto a» · {אֶל} «para (persona)».

Se llaman partículas porque no se comportan como palabras. No tienen caso, ni posición libre, ni se quedan solas en la cláusula: todas entran antes del nombre y quedan pegadas a él. Dos hacen excepción y son las que más engañan, {עַל} y {אֶל}, porque aceptan el maqaf: {עַל־הָאָרֶץ} «sobre la tierra» y {אֶל־מֹשֶׁה} «a Moisés» (cap. 17).

La división que resuelve casi todo lo que viene después es otra: tres son **pegadas** y cuatro son **separadas**.

Las tres pegadas son {בְּ}, {כְּ} y {לְ}. Tienen una sola letra, y la prueba de que están ahí es el dageš fuerte en la consonante siguiente: {בְּתּוֹרָה} «en la ley» tiene {ת} fuerte, {כְּהָאָדָם} «conforme al hombre» tiene {ה} fuerte, {לַיהוָה} «al SEÑOR» tiene {י} fuerte.

Las cuatro separadas son {מִן}, {שׁ}, {עַל} y {אֶל}. Tienen dos letras, o una letra con vocal, y ninguna provoca dageš en la palabra siguiente: {מִן־בְּרִית} «del pacto» deja la {ב} como está.

La consecuencia práctica cabe en una pregunta: ¿la palabra siguiente tiene dageš fuerte? Si lo tiene, tienes una partícula pegada. Si no, es separada o es un sustantivo. En {מִן־בְּרִית} el dageš está en otro sitio, y eso basta para saber que el {מִן} es separado.

## El orden de las siete

Las partículas pueden apilarse, y cuando eso pasa el orden es fijo. El único caso común de dos en la misma palabra es {בְּלִי} «sin», que es {ב} + {לִי} «de mí»: {ב} va primero y {ל} después.

El orden de las siete, para quien lo quiera memorizar de una vez, es {בְּ} · {כְּ} · {לְ} · {מִן} · {שׁ} · {עַל} · {אֶל}. Las tres pegadas van antes que las cuatro separadas.

Conviene decir con honestidad qué es ese orden y qué no es. No se deduce de ninguna regla: ningún razonamiento sobre las letras saca a {מִן} del cuarto lugar. Es una convención, y por eso se memoriza en vez de deducirse. Lo que hace que el orden no sea arbitrario es otra cosa: las tres primeras son las que de verdad se pegan, y la frecuencia histórica de uso suele ser lo que organiza una lista convencional así.

Lo que el orden hace en el trabajo es práctico. En {בְּלִי} «sin», la marca que salva es el dageš: si la palabra siguiente tiene dageš fuerte, todo lo que viene antes es una sola partícula pegada. Si no, hay dos partículas o hay una separada, y el contexto decide.

## Partículas de negación y de énfasis

El mismo grupo tiene hijas de otra familia, y estas llevan sentido propio.

La negación tiene dos: {לֹא} «no», que niega el indicativo y el futuro, y {אַל} «no», que niega el jussivo (cap. 16). La elección entre ellas es obligatoria, y cambiarlas produce una cláusula que ningún traductor sabe reparar.

El encuadre de la cláusula tiene más: {אַךְ} «pero, sin embargo» une dos cláusulas que se oponen, {הִנֵּה} «he aquí» introduce una escena a la vista, y {אוֹלָם} «quizá» pone una hipótesis sobre la mesa sin negar nada.

Lo que separa la negación del encuadre es el blanco. {לֹא} y {אַל} atacan el verbo. {אַךְ}, {הִנֵּה} y {אוֹלָם} no atacan nada: cambian el encuadre. Y {אוֹךְ} no es de la misma familia que {אַךְ}: tiene una letra más, y significa «de algún modo, en cierto sentido».

## Cuando dos partículas se fusionan

El caso más bonito del sistema es la fusión, y {בְּלִי} «sin» ya la ha mostrado: {ב} + {לִי} «de mí», con la {ל} disuelta y la {ב} en su lugar.

Las partículas separadas también absorben lo que viene después. {מֵהָרָשַׁת} «apresuradamente» (cap. 17) es {מִן} + {הָרָשַׁת} «la prisa», con la {ה} tragada por la {מ}; {מֵאַת} «de con, contra» es {מִן} + {את}. Quien traduce al pie de la letra escribe «de la prisa» y pierde el sentido de prisa, porque la partícula {מִן} es la que estaba.

Nada de esto es rareza. Es el comportamiento normal de partículas en una lengua que las trata como prefijos, y es la razón de que la lista sea tan corta: hay siete, son fijas, y ninguna regla produce una octava.

El Sal 34.18 ofrece una pila completa en una sola línea: {קָרוֹב יְהוָה לְנִשְׁבְּרֵי־לֵב וְאֶת־דַּכְּאֵי־רוּחַ יוֹשִׁיעַ}. Cuatro partículas en tres palabras: la pegada {לְ}, la separada {מִן}, la de coordinación {וְ} y el marcador de objeto directo {אֶת}. Tres de ellas están en la primera palabra. Una línea de un salmo es un resumen entero del sistema.`),
  vocab: [
    V('בְּ', 'בְּ', 'en, con, por (pegada)'),
    V('כְּ', 'כְּ', 'como, conforme a (pegada)'),
    V('לְ', 'לְ', 'para, a, de (pegada)'),
    V('מִן', 'מִן', 'de, desde (separada)'),
    V('שׁ', 'שׁ', 'de, según (separada)'),
    V('עַל', 'עַל', 'sobre, junto a (separada)'),
    V('אֶל', 'אֶל', 'para (persona, separada)'),
    V('בְּתּוֹרָה', 'תּוֹרָה', 'en la ley'),
    V('מִן־בְּרִית', 'בְּרִית', 'del pacto'),
    V('עַל־הָאָרֶץ', 'אֶרֶץ', 'sobre la tierra'),
    V('בְּלִי', 'בְּלִי', 'sin ({ב} + {לִי})'),
    V('מֵהָרָשַׁת', 'מִן', 'apresuradamente'),
    V('מֵאַת', 'מִן', 'de con, contra'),
    V('לֹא', 'לֹא', 'no'),
    V('אַל', 'אַל', 'no (con jussivo)'),
    V('אַךְ', 'אַךְ', 'pero, sin embargo'),
    V('הִנֵּה', 'הִנֵּה', 'he aquí'),
    V('אוֹלָם', 'אוֹלָם', 'quizá'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      '¿Cuál de estas es una partícula pegada que provoca dageš fuerte en la palabra siguiente?',
    ),
    options: [T('{בְּ}'), T('{מִן}'), T('{עַל}'), T('{אֶל}')],
    answer: 0,
    hint: T('Las pegadas son {בְּ}, {כְּ} y {לְ}. Las otras cuatro son separadas.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Relaciona la partícula con su categoría.'),
      pairs: [
        { a: '{בְּ}', b: T('pegada (1 letra)') },
        { a: '{כְּ}', b: T('pegada (1 letra)') },
        { a: '{מִן}', b: T('separada') },
        { a: '{אֶל}', b: T('separada') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('En {בְּתּוֹרָה} «en la ley», ¿qué partícula entró y por qué?'),
      answer: 'בְּ',
      hint: T('Es {בְּ} + {תּוֹרָה}, y la {ת} quedó con dageš fuerte.'),
    },
    {
      kind: 'choose',
      prompt: T('En {מִן־בְּרִית} «del pacto», ¿qué muestra que {מִן} es partícula separada?'),
      options: [
        T('La palabra siguiente no tiene dageš fuerte'),
        T('La partícula tiene dos letras'),
        T('El sustantivo está en constructo'),
        T('La palabra empieza por {מ}'),
      ],
      answer: 0,
      hint: T('Regla §1: dageš fuerte en la palabra siguiente marca partícula pegada.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué partícula negaría un jussivo?'),
      options: [T('{אַל}'), T('{לֹא}'), T('{אַךְ}'), T('{הִנֵּה}')],
      answer: 0,
      hint: T('Regla §3: {אַל} niega el jussivo; {לֹא} niega el indicativo y el futuro.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Las siete partículas son {בְּ}, {כְּ}, {לְ}, {מִן}, {שׁ}, {עַל}, {אֶל}. Las tres primeras son pegadas; las cuatro últimas son separadas.',
      ),
    },
    {
      n: '2',
      text: T(
        'Dageš fuerte en la palabra siguiente = partícula pegada. Sin dageš = partícula separada o sustantivo.',
      ),
    },
    {
      n: '3',
      text: T(
        'El orden de las siete es {בְּ} · {כְּ} · {לְ} · {מִן} · {שׁ} · {עַל} · {אֶל}, y es convención memorizada, no regla deducible.',
      ),
    },
    {
      n: '4',
      text: T(
        '{לֹא} niega el indicativo y el futuro; {אַל} niega el jussivo. Cambiarlas produce una cláusula que nadie sabe reparar.',
      ),
    },
    {
      n: '5',
      text: T('{אַךְ}, {הִנֵּה} y {אוֹלָם} reencuadran la cláusula; {לֹא} y {אַל} atacan el verbo.'),
    },
  ],
  notes: [
    {
      label: T('Lectura:'),
      text: T(
        'Una partícula hebrea se parece más a un prefijo del español que a la palabra «no». No se queda sola en la cláusula, no tiene forma de sujeto, y desaparece si la quitas. Por eso la lista es corta y fija: es la única parte de la lengua que se aprende entera de una vez, sin paradigma.',
      ),
    },
    {
      label: T('Dato curioso:'),
      text: T(
        'Cinco de las siete letras son débiles o guturales: {ל}, {מ}, {נ}, {שׁ} y {ע}. Eso explica uno de los comportamientos más extraños de la lengua: una partícula puede perder su propia letra cuando encuentra otra delante. De {ב} + {לִי} «sin» sale {בְּלִי}, con la {ל} disuelta. Las formas más comunes del hebreo son las que nacen de una fusión así.',
      ),
    },
  ],
  examples: [
    { text: '{בְּ}', gloss: T('en, con, por — pegada, con dageš') },
    { text: '{כְּ}', gloss: T('como, conforme a — pegada') },
    { text: '{לְ}', gloss: T('para, a, de — pegada') },
    { text: '{מִן}', gloss: T('de, desde — separada') },
    { text: '{שׁ}', gloss: T('de, según — separada') },
    { text: '{עַל}', gloss: T('sobre, junto a — separada') },
    { text: '{אֶל}', gloss: T('para (persona) — separada') },
    { text: '{בְּתּוֹרָה}', gloss: T('en la ley — {בְּ} + {תּוֹרָה} (dageš en la {ת})') },
    { text: '{מִן־בְּרִית}', gloss: T('del pacto — {מִן} separada, sin dageš') },
    { text: '{בְּלִי}', gloss: T('sin — {ב} + {לִי} «de mí»') },
    { text: '{מֵהָרָשַׁת}', gloss: T('apresuradamente — {מִן} separada') },
    { text: '{מֵאַת}', gloss: T('de con, contra — {מִן} + {את}') },
    { text: '{לֹא}', gloss: T('no — niega el verbo') },
    { text: '{אַל}', gloss: T('no — niega el jussivo') },
    { text: '{אַךְ}', gloss: T('pero, sin embargo') },
    { text: '{הִנֵּה}', gloss: T('he aquí') },
    { text: '{אוֹלָם}', gloss: T('quizá') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Las siete partículas: pegadas y separadas'),
      head: [T('Partícula'), T('Tipo'), T('Glosa principal'), T('Ejemplo')],
      rows: [
        ['{בְּ}', T('pegada (1 letra)'), T('en, con, por'), '{בְּרֵאשִׁית}'],
        ['{כְּ}', T('pegada (1 letra)'), T('como, conforme a'), '{כְּצֵל}'],
        ['{לְ}', T('pegada (1 letra)'), T('para, a, de'), '{לַיהוָה}'],
        ['{מִן}', T('separada'), T('de, desde'), '{מִן־בְּרִית}'],
        ['{שׁ}', T('separada'), T('de, según'), '{שֶׁ} «que é de»'],
        ['{עַל}', T('separada'), T('sobre, junto a'), '{עַל־הָאָרֶץ}'],
        ['{אֶל}', T('separada'), T('para (persona)'), '{אֶל־מֹשֶׁה}'],
      ],
    },
    {
      caption: T('Tabla 2 — Cómo decidir en la práctica'),
      head: [T('Palabra'), T('La partícula es'), T('Señal'), T('Glosa')],
      rows: [
        ['{בְּתּוֹרָה}', T('pegada'), T('dageš fuerte en la {ת}'), T('en la ley')],
        ['{מִן־בְּרִית}', T('separada'), T('sin dageš en la {ב}'), T('del pacto')],
        ['{כְּהָאָדָם}', T('pegada'), T('dageš fuerte en la {ה}'), T('conforme al hombre')],
        ['{עַל־פָּנַי}', T('separada'), T('sin dageš en la {פ}'), T('sobre el rostro')],
        ['{בְּלִי}', T('dos: {ב} + {לִי}'), T('{ב} antes de {ל}'), T('sin')],
        ['{מֵאַת}', T('fusión: {מִן} + {את}'), T('{מִן} separada fundida'), T('de con, contra')],
      ],
    },
  ],
};
