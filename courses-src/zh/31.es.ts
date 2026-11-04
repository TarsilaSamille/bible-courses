import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  section: T('Lectura'),
  title: T('Leer el Salmo 119 por bloques: el acróstico y las seis palabras para "palabra"'),
  subtitle: T(
    'Veintidós bloques de ocho versos con la misma inicial, y la inicial no es sentido: es estructura',
  ),
  body: C(`
## Un salmo que es un alfabeto

El Salmo 119 no tiene estrofa libre ni argumento. Está construido como un alfabeto: veintidós letras, ocho versos por letra, ciento setenta y seis versos en total. La versión-union conserva el acróstico, y cada bloque de ocho empieza por el mismo carácter.

**El Salmo 119 son 22 bloques de 8 versos, y el primer verso de cada bloque empieza por el mismo carácter.**

Lo que el lector tiene que entender es que ese carácter es estructura y no sentido. No es el asunto del bloque, no es una palabra del verso, y no se traduce. Está ahí porque el verso ocupa la casilla del primero de una secuencia, y el traductor tuvo que escribir una frase empezada por esa letra. Quien intente arrancar un tema de él encontrará, en cada bloque, una letra que no tiene nada que ver con lo que el bloque dice — y leerá el bloque equivocado.

Y el acróstico es invisible en portugués. La letra hebrea que organiza el original no se parece con ninguna de las veintidós letras chinas que lo organizan en mandarín, y quien lee una traducción portuguesa no ve la estructura ni puede deducirla. No hay modo de descubrirlo leyendo el texto en portugués: hay que saber que está ahí.

## Un salmo con un solo asunto

Leído bloque por bloque, el Salmo 119 parece la misma frase ciento setenta y seis veces. El sustantivo vuelve en casi todos los versos, y lo que cambia es el verbo: {jì}, recordar, {zūnshǒu}, guardar, {cōngmíng}, entender, {yìng}, responder, {cáng}, esconder dentro. El paralelismo de los otros Salmos opera sobre dos lados, con dos cosas opuestas; aquí opera sobre un solo lado, porque no hay dos cosas que oponer: está la palabra de Dios y lo que el fiel hace con ella.

**En el Salmo 119 el sustantivo se repite y no cambia; lo que cambia es el verbo, y el verbo es lo que dice lo que el fiel hizo con la palabra.**

La variedad de ese paralelismo está en {lǜ}, la ley, y en {huà}, lo que fue dicho, y en {yǔ}, {cí}, {mìng}, {jiè}. Son seis palabras chinas para lo que el hebreo distingue con precisión, y la elección entre ellas es del traductor. El mandarín escrito no tiene seis palabras para "ley": tiene una para el precepto, una para el método y una para el conjunto de instrucciones. Traducir el verso entero como "tu palabra" ocho veces seguidas no es un error de gramática, y borra una distinción que el original hacía.

El verso 11 es el ejemplo más limpio de todo esto. La versión-union escribe {wǒ jiāng nǐ de huà cáng zài xīn lǐ, miǎn wǒ dé zuì nǐ de}: "yo guardo tus palabras en mi corazón, para no pecar contra ti". Está {huà}, la palabra, y {cáng}, esconder, y {dé zuì}, pecar. Un solo sustantivo para "palabra", un verbo y una razón. La letra del acróstico está al principio del verso y no aparece en el sentido.

## Lo que la inicial obliga al traductor a hacer

La inicial ocupa una casilla que el portugués no tiene. Viene antes del verbo y del objeto, es la primera palabra del verso, y el traductor no puede elegir el verbo que quería: solo puede elegir la palabra que ocupa esa casilla. Por eso el primer verso de cada bloque suele empezar por un verbo o por un sustantivo genérico, y por eso el segundo y el tercero versos del bloque son, por regla general, más libres.

**La inicial fija la primera palabra del verso y nada más: la libertad del traductor está en el interior del verso, no en el borde.**

El efecto secundario es que los ocho versos de un bloque parecen más parecidos entre sí que los ocho del bloque siguiente. No es repetición: es el resultado de ocho frases que empiezan igual. Y cuando el traductor escribe dos veces la misma palabra en un mismo verso, es porque la letra del principio y la palabra del medio están siendo forzadas a la vez, y él lo resuelve de la manera menos mala.

La forma correcta de leer es en bloques de ocho, nunca en versos sueltos. Lea los ocho, encuentre lo que cambia, y pregunte qué verbo se opone a cuál. El bloque del Salmo 119 es bastante corto para caber en una pantalla y bastante largo para que la pregunta valga la pena.

## Tres lecturas que fallan

La primera es la más común: leer un solo verso y creer que se ha entendido. Un verso del Salmo 119 sin su bloque es una cláusula sin sujeto, porque el sujeto de los Salmos es siempre el mismo y el verbo cambia de verso a verso. La segunda es intentar dar sentido a la inicial: es una letra del alfabeto, no el asunto del bloque. La tercera es verter las seis palabras con un mismo término, y ahí el lector pierde la distinción que el original trazaba en cada verso.

Lo que queda es lo más simple y lo más útil del salmo: en cada verso no hay información nueva, hay una acción nueva. El sustantivo es constante y el verbo cuenta. Y por eso este salmo es el mejor lugar del libro para entrenar lo único que la lectura en mandarín exige de quien no tiene el original: atención a la palabra que cambia.`),
  vocab: [
    V('jìng', '经', 'el cuerpo de instrucciones; y las Escrituras (jìng)'),
    V('lǜ', '律', 'el precepto de Dios; y el nombre del Pentateuco (lǜ)'),
    V('fǎ', '法', 'ley, método (fǎ)'),
    V('huà', '话', 'lo que fue dicho; y lo que alguien dice (huà)'),
    V('yǔ', '语', 'palabra, lengua (yǔ)'),
    V('cí', '词', 'palabra, término (cí)'),
    V('mìng', '命', 'decreto, orden; y destino (mìng)'),
    V('jiè', '诫', 'precepto, instrucción (jiè)'),
    V('lì', '例', 'caso, estatuto (lì)'),
    V('jì', '记', 'recordar (jì)'),
    V('zūnshǒu', '遵守', 'guardar, obedecer (zūnshǒu)'),
    V('cōngmíng', '聪明', 'entendimiento; y sabiduría, en el mismo salmo (cōngmíng)'),
    V('yìng', '应', 'responder; y lo que se debe, en el mismo salmo (yìng)'),
    V('cáng', '藏', 'esconder, guardar dentro (cáng)'),
    V('xīn (coracao)', '心', 'el corazón: donde se guarda la palabra en el verso 11 (xīn)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El Salmo 119 tiene 22 bloques de 8 versos, y el primer verso de cada bloque empieza por el mismo carácter.',
      ),
    },
    {
      n: '2',
      text: T(
        'El carácter del acróstico es estructura y no sentido: no es el asunto del bloque y no se traduce.',
      ),
    },
    {
      n: '3',
      text: T(
        'En el Salmo 119 el sustantivo se repite y no cambia; lo que cambia es el verbo, y es lo que dice lo que el fiel hizo con la palabra.',
      ),
    },
    {
      n: '4',
      text: T(
        'Seis palabras chinas traducen lo que el hebreo distingue: {lǜ}, {huà}, {yǔ}, {cí}, {mìng} y {jiè}.',
      ),
    },
    { n: '5', text: T('Lea el salmo en bloques de ocho, nunca en versos sueltos.') },
  ],
  notes: [
    {
      label: T('El acróstico desaparece en la traducción'),
      text: T(
        'La letra hebrea que organiza el original no se parece con ninguna de las veintidós letras chinas que lo organizan en mandarín. Quien lee una traducción portuguesa no ve la estructura y no puede deducirla del texto. Es información que existe en el libro en mandarín y en ninguna traducción, y por eso el lector la necesita antes de empezar.',
      ),
    },
    {
      label: T('Seis palabras, una sola idea'),
      text: T(
        'En el Salmo 119 el sustantivo cambia de nombre casi en cada verso, y el mandarín ofrece pocas opciones: la ley, la palabra, la instrucción, el decreto. Verterlo todo por "palabra" es gramaticalmente correcto y borra la distinción que el hebreo hacía. La misma palabra mandarín va al revés también: {cōngmíng} es entendimiento en una mitad y sabiduría en la otra.',
      ),
    },
  ],
  examples: [
    {
      text: '我將你的話藏在心裏，免得我得罪你的',
      gloss: T(
        'wǒ jiāng nǐ de huà cáng zài xīn lǐ, miǎn wǒ dé zuì nǐ de — guardo tus palabras en mi corazón, para no pecar contra ti (Sl 119:11): un sustantivo y dos verbos',
      ),
    },
    {
      text: '你的話',
      gloss: T('nǐ de huà — tus palabras: {huà} es "lo que fue dicho", no "lo que piensas"'),
    },
    {
      text: '藏在心裏',
      gloss: T('cáng zài xīn lǐ — guardado en el corazón: {cáng} y {lǐ}, el interior como lugar'),
    },
    {
      text: '得罪',
      gloss: T('dé zuì — pecar, ofender: un verbo de dos caracteres, y el más común del salmo'),
    },
    {
      text: '律',
      gloss: T('lǜ — el precepto; y, con mayúscula, el nombre de los cinco libros de Moisés'),
    },
    { text: '經', gloss: T('jìng — el cuerpo de instrucciones; y el nombre de las Escrituras') },
    {
      text: '誡命',
      gloss: T(
        'jiè mìng — el mandamiento: la palabra más solemne del salmo, reservada a pocos versos',
      ),
    },
  ],
  tables: [
    {
      caption: T('La estructura del Salmo 119'),
      head: [T('Nivel'), T('Qué es'), T('Cuántos'), T('Lo que ve el lector')],
      rows: [
        [
          T('letra'),
          T('el carácter fijo del bloque'),
          T('22'),
          T('el mismo carácter al frente de cada bloque'),
        ],
        [
          T('bloque'),
          T('el grupo de versos de la misma letra'),
          T('8'),
          T('ocho versos con la misma inicial'),
        ],
        [T('verso'), T('la unidad aislada'), T('1'), T('nada: es el interior de un bloque')],
        [T('salmo'), T('el libro entero'), T('176'), T('22 bloques de 8')],
      ],
    },
    {
      caption: T('Seis palabras chinas para "palabra"'),
      head: [T('Palabra'), T('Matiz mandarín'), T('El riesgo de una sola palabra')],
      rows: [
        [T('{lǜ}'), T('el precepto de Dios (lǜ)'), T('y el nombre del Pentateuco')],
        [
          T('{jiè} {mìng}'),
          T('el mandamiento, solemne (jiè mìng)'),
          T('y la orden dada por alguien'),
        ],
        [T('{huà}'), T('lo que fue dicho (huà)'), T('y lo que alguien dice ahora')],
        [T('{yǔ}'), T('palabra, lengua (yǔ)'), T('y lo que se entiende')],
        [T('{cí}'), T('término, unidad de habla (cí)'), T('y el término de un glosario')],
        [T('{jìng}'), T('cuerpo de instrucciones (jìng)'), T('y el nombre de las Escrituras')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En el Salmo 119, ¿qué es la inicial de cada bloque?'),
    options: [
      T('estructura del alfabeto: ocupa la primera palabra del verso y no es el asunto'),
      T('el tema del bloque de ocho versos'),
      T('la traducción de la letra hebrea correspondiente'),
      T('un resumen de lo que viene después'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete el verbo del Salmo 119:11: 我將你的話____在心裏'),
      answer: '藏',
    },
    {
      kind: 'match',
      prompt: T('Relacione la palabra del Salmo 119 con su valor mandarín'),
      pairs: [
        { a: T('{lǜ}'), b: T('el precepto de Dios') },
        { a: T('{huà}'), b: T('lo que fue dicho') },
        { a: T('{cōngmíng}'), b: T('entendimiento y sabiduría') },
        { a: T('{dé} {zuì}'), b: T('pecar contra alguien') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Al leer el Salmo 119, ¿qué es lo que realmente cambia de un verso al siguiente?'),
      options: [
        T(
          'el verbo: el sustantivo se repite y lo que cambia es lo que el fiel hace con la palabra',
        ),
        T('el sustantivo: cada verso usa una palabra distinta para "palabra"'),
        T('el sujeto: cada verso trae un sirviente distinto'),
        T('el tiempo: cada verso avanza un día en la historia'),
      ],
      answer: 0,
    },
  ],
};
