import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  section: T('Sintaxis'),
  title: T('Expresiones fijas y el sujeto que desaparece'),
  subtitle: T(
    'La pregunta que se repite, las cuatro expresiones fijas y la omisión que ya no necesita aviso',
  ),
  body: C(`
## El mandarín borra al sujeto sin pedir permiso

Con el verbo en medio y el sujeto omitido, un grupo aislado como {chī le} no significa nada: ¿quién comió? Es cierto, pero solo para quien lee fuera del contexto. Dentro de una frase el mandarín omite el sujeto todo el tiempo, sin marca, sin partícula, sin ceremonia, porque el contexto ya ha dicho quién habla.

El ejemplo canónico: {tā yě qù} es "él también va". Dicho por alguien que acaba de hablar de Pedro, la misma frase se vuelve {yě qù}, "también va", y sigue siendo verdadera, porque el sujeto es el de quien habla, que el oyente ya conoce. No es un sujeto truncado: es una economía normal. En español no hay nada comparable; "también va" sin sujeto es agramatical. Quien traduce palabra por palabra escribe "también él va" y pierde el sujeto que era obvio.

La elisión ocurre en todas partes, y el patrón no varía: **si el sujeto de la frase anterior sirve, no se escribe otra vez**. En las oraciones coordinadas esto produce una ambigüedad real. {tā shuō wǒ qù} puede significar "él dice que yo voy", verbo de decir más oración subordinada, o "él dice y yo voy", dos verbos con sujeto solo en el primero. El contexto lo resuelve; la lectura palabra por palabra no. Y por eso leer un capítulo es leer sentido, no leer caracteres.

## La negación por **repetición**

El mandarín tiene una segunda manera de negar, y no usa partícula alguna. El patrón es **verbo o adjetivo + {bù} + el mismo verbo o adjetivo**. En vez de {tā bù hǎo}, "él no es bueno", se puede decir {tā hǎo bù hǎo}, "¿es bueno o no es bueno?". La negación no está en el {bù}: la negación es la repetición, y el {bù} es la bisagra que une las dos copias.

Aquí el {bù} cambia de papel. Antes era una partícula de negación colocada delante del verbo, con función propia; aquí ocupa el medio y no niega nada por sí solo. Quítelo y queda {hǎo hǎo}, que no significa nada. La pronunciación se sigue del papel: dentro de {shì bú shì}, el {bù} pierde el tono, *bú* y no {bù}, porque dejó de ser afirmación para volverse marca de elección.

El punto que casi todo el mundo necesita: {shì bú shì} se lee **"¿es o no es?"**, con el {shì} de la pregunta antes del {bù}. No es "¿no es es?". Quien produce eso último está aplicando el orden español a una lengua que no lo tiene, y llega a una frase que ningún hablante de chino ha pronunciado jamás. En mandarín el orden es verbo primero, negación en medio: {shì bú shì}, {chī bù chī}, {hǎo bù hǎo}.

Cuando la palabra tiene más de una sílaba, se repite entera y la negación va en medio. {yǒu yǒu}, "¿tiene tiene?", con {méi} encajado da {yǒu méi yǒu}, "¿tiene no tiene?", y por eso la bisagra es {méi}, la partícula del pasado y la existencia. El verbo no se parte: es {yǒu} en los dos lados. En {yǒu méi yǒu} la lectura también puede ser {yǒu} más {méi yǒu}, "tener" más "no tener", y el contexto decide. La frase es ambigua a propósito.

## Cuatro expresiones fijas que delatan a quien habla

Son las cuatro más comunes, y ninguna es una frase: son pieza suelta, que se encaja donde esté el verbo.

- {shì bú shì} — "¿es o no es?" — {nǐ shì bú shì shīfu} — "¿es usted maestro o no?"
- {yǒu méi yǒu} — "¿tiene o no tiene?" — {nǐ yǒu méi yǒu shū} — "¿tiene usted un libro o no?"
- {hǎo bù hǎo} — "¿bueno o no bueno?" — sobre comida, salud, ánimo. La más coloquial de las cuatro.
- {duì bú duì} — "¿correcto o no correcto?" — la única que suele llevar {ma} consigo: {duì bú duì ma}.

Lo que delatan es al interlocutor, no el tema. Quien usa {hǎo bù hǎo} está hablando de comida; quien usa {duì bú duì ma} está comprobando algo. En un texto bíblico esto importa: cuando el traductor escribe una de estas expresiones donde el griego tenía una pregunta simple, está decidiendo por el lector un tono que el griego no fijaba.

## Tres maneras de hacer la misma pregunta

La pregunta "¿usted va?" tiene tres formas, y no son sinónimos: son registros distintos.

- V-{嗎} — la partícula al final. {nǐ qù ma}, "¿usted va?". Más formal, es la forma escrita y la del texto antiguo.
- V-{不}-V — la repetición. {nǐ qù bú qù}, "¿usted va o no va?". Coloquial, es la forma hablada.
- V-{不}-V? — las dos, con el *bú* sandhi en la segunda copia. Es el registro neutro, y es lo que usa la {和合本} cuando la pregunta es retórica o Culminante.

En las tres el sujeto {nǐ} está escrito, pero puede desaparecer. Si la frase anterior ya tenía el mismo sujeto, basta {qù ma}. La omisión del sujeto funciona al revés aquí: ahora falta porque lo que hace falta es la pregunta.

La {和合本} enseña la mano en dos versículos. En Juan 6:67, Jesús pregunta {nǐmen yě yào qù ma}: el {ma} formal, con el sujeto *nǐmen* explícito porque la pregunta va dirigida a un grupo que tiene que oír que es a él. En Juan 18:33 el sumo sacerdote pregunta {nǐ shì bú shì Yóudú rén}: {shì bú shì} puro, sin {ma}, y la forma más afilada de las cuatro, una de las preguntas más famosas del Nuevo Testamento, hecha sin el *bú* sandhi, por quien ya conoce la respuesta. Compárese con Juan 1:37, {guòlái kàn}, "venid a ver": sujeto omitido, verbo repetido, sin partícula alguna. El contexto, por sí solo, dice que quien habla es Jesús y quienes vienen son los dos discípulos.`),
  vocab: [
    V('yě', '也', 'también (yě)'),
    V('shì bú shì', '是不是', '¿es o no es? (shì bú shì)'),
    V('yǒu méi yǒu', '有沒有', '¿tiene o no tiene? (yǒu méi yǒu)'),
    V('hǎo bù hǎo', '好不好', '¿bueno o no bueno? (hǎo bù hǎo)'),
    V('duì bú duì', '對不對', '¿correcto o no correcto? (duì bú duì)'),
    V('ma', '嗎', 'partícula de interrogación al final (ma)'),
    V('nǐ', '你', 'tú, usted (nǐ)'),
    V('tā', '他', 'él (tā)'),
    V('bù', '不', 'no (partícula de negación, lección 09)'),
    V('méi', '没', 'no (pasado y existencia, lección 09)'),
    V('shì', '是', 'ser (shì)'),
    V('yǒu', '有', 'tener, haber (yǒu)'),
  ],
  rules: [
    {
      n: '1',
      text: T('El sujeto se omite cuando la frase anterior ya lo dio: {tā yě qù} → {yě qù}.'),
    },
    {
      n: '2',
      text: T('El patrón de pregunta es verbo o adjetivo + {bù} + el mismo verbo o adjetivo.'),
    },
    {
      n: '3',
      text: T(
        'La negación es la repetición; el {bù} del medio es bisagra, no negación: {shì bú shì} es "¿es o no es?".',
      ),
    },
    {
      n: '4',
      text: T(
        'Una palabra de más de una sílaba repite solo su primera parte: {yǒu méi yǒu}, con {méi} en medio.',
      ),
    },
    { n: '5', text: T('{ma} cierra la pregunta y nunca aparece en medio de ella.') },
  ],
  notes: [
    {
      label: T('El mismo {bù} con dos papeles'),
      text: T(
        'En la lección 09, {bù} niega: {wǒ bù chī}. En {shì bú shì} no niega nada: marca la elección entre dos copias. Por eso el tono pasa a *bú*, y por eso pierde el acento grave que lo hacía parecer partícula de negación.',
      ),
    },
    {
      label: T('La ambigüedad que el contexto deshace'),
      text: T(
        '{tā shuō wǒ qù} puede ser "él dice que yo voy" o "él dice y yo voy". Ninguna de las dos lecturas está mal por construcción; solo el capítulo decide. Traducir por palabra es elegir una de las dos sin darse cuenta.',
      ),
    },
  ],
  examples: [
    { text: '他也去', gloss: T('tā yě qù — él también va') },
    { text: '也去', gloss: T('yě qù — también va (el sujeto es el de la frase anterior)') },
    { text: '你去不去', gloss: T('nǐ qù bú qù — ¿usted va o no va?') },
    { text: '你是不是猶太人', gloss: T('nǐ shì bú shì Yóudú rén — ¿usted es judío o no?') },
  ],
  tables: [
    {
      caption: T('Tres maneras de hacer la misma pregunta'),
      head: [T('Forma'), T('Cómo se construye'), T('Registro'), T('Ejemplo')],
      rows: [
        [
          T('{A 嗎}'),
          T('verbo + {ma} al final'),
          T('formal, escrito'),
          T('{nǐ qù ma?} — ¿usted va?'),
        ],
        [
          T('{A 不 A}'),
          T('verbo repetido con {bù} en medio'),
          T('coloquial, hablado'),
          T('{nǐ qù bú qù?} — ¿va o no va?'),
        ],
        [
          T('{A 不 A?}'),
          T('lo mismo, con el *bú* sandhi'),
          T('neutro, el más común'),
          T('{nǐ shì bú shì Yóudú rén?} — ¿es usted judío?'),
        ],
      ],
    },
    {
      caption: T('Las cuatro expresiones fijas'),
      head: [T('Expresión'), T('Literal'), T('Español'), T('Lo que pregunta')],
      rows: [
        [T('{shì bú shì}'), T('¿es no es?'), T('¿es o no es?'), T('el verbo {shì}')],
        [T('{yǒu méi yǒu}'), T('¿tiene no tiene?'), T('¿tiene o no tiene?'), T('el verbo {yǒu}')],
        [T('{hǎo bù hǎo}'), T('¿bueno no bueno?'), T('¿bueno o no bueno?'), T('un adjetivo')],
        [
          T('{duì bú duì}'),
          T('¿correcto no correcto?'),
          T('¿correcto o no correcto?'),
          T('el verbo {duì}'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es el patrón de {是不是}?'),
    options: [
      T('{是} {不} {是} — el verbo repetido con {bù} en medio'),
      T('{不} {是} — la negación antes del verbo'),
      T('{是} {是} — el verbo repetido sin partícula'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa la pregunta "¿usted va o no va?": 你____ (ir)'),
      answer: '去不去',
    },
    {
      kind: 'match',
      prompt: T('Une la expresión con su sentido'),
      pairs: [
        { a: T('{是不是}'), b: T('¿es o no es?') },
        { a: T('{有沒有}'), b: T('¿tiene o no tiene?') },
        { a: T('{好不好}'), b: T('¿bueno o no bueno?') },
        { a: T('{對不對}'), b: T('¿correcto o no correcto?') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'Después de una frase que ya tiene el sujeto {wǒ}, ¿cómo se pregunta "¿usted va?" sin repetir el sujeto?',
      ),
      options: [T('{去嗎}'), T('{你去嗎}'), T('{去不}'), T('{你也去嗎}')],
      answer: 0,
    },
  ],
};
