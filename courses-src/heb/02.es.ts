import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('El alfabeto y los signos'),
  subtitle: T('22 consonantes, leídas de derecha a izquierda'),
  section: T('Alfabeto y artículo definido'),
  body: C(`## De derecha a izquierda

El hebreo se escribe de derecha a izquierda, y el texto avanza hacia la izquierda: exactamente como en {אוֹר} (luz), la {א} es la primera aunque esté al final de la línea impresa. Dos consecuencias prácticas: los números y las abreviaturas poéticas se ven invertidos al leerlos a la occidental, y al transcribir al portugués o al español hay que mantener el orden de las letras hebreas.

## Las 22 consonantes

Solo hay 22 letras, todas consonantes: el hebreo no tiene vocales en el alfabeto. Memoriza primero el **nombre** de cada letra (es como la nombran los diccionarios y las concordancias) y después su sonido.

Dos letras cambian de sonido según el punto (dageš) que reciben: {ב} es {b} sin punto y {v} con dageš (y {k}/{kh} para {כ} tras {ר}); {פ} es {p} sin punto y {f} con dageš. Dos letras comparten grafía: {שׂ} y {שׁ} son una sola letra, sin y šin, distinguidas únicamente por el punto a la derecha o a la izquierda.

## Formas finales

Cinco letras cambian de forma al final de la palabra, como si cerraran una puerta: {ך} (de {כ}), {ם} (de {מ}), {ן} (de {נ}), {ף} (de {פ}), {ץ} (de {צ}). En {מֶלֶךְ} «rey» la última letra es {ך}; en {שָׁמַיִם} «cielos» termina en {ם}. Esas formas finales son la señal más segura de que has llegado al final de la palabra.

## El niqqud: las vocales

Las vocales son puntos y trazos diminutos junto a la letra (niqqud, «puntuación»). Los tres signos principales son {ַ} pataj (a breve), {ֵ} ṣere (e), {ִ} hireq (i); hay además {ָ} qamats (a larga), {ֶ} ṣegol (e), {וֹ} {וּ} holam y šureq (o y u). Un signo con šewa {ְ} indica vocal cero, casi siempre una «e» fugaz.

Los textos antiguos que encontrarás en los manuscritos llevan pocos o ningún niqqud: sin ellos la lectura sigue siendo posible, porque el léxico y la gramática bastan, pero el contexto pasa a ser imprescindible. Los masoretas del siglo IX añadieron estos signos (y otros, como el maqaf {־} y los signos de cantilación) para que la lectura pública fuera segura.

## Signos que no son vocales

Además de las vocales están {ּ} dageš (consonante doble), {ֿ} rafe (consonante simple), {־} maqaf (une palabras), {׃} sof pasuq (fin de versículo) y el meteg. La puntuación de versículos {׃} es lo que permite citar con precisión, y por eso el Salmo 23 tiene exactamente seis en el capítulo.

## Entrena el ojo hoy

Tres palabras de Génesis 1 sirven de prueba: {יוֹם} «día», {אוֹר} «luz» y {אֶרֶץ} «tierra». Si consigues leer las tres de derecha a izquierda y nombrar sus letras, el alfabeto ya es tuyo.`),
  vocab: [
    V('א', 'א', 'álef (muda)'),
    V('ב', 'ב', 'bet (b/v)'),
    V('ש', 'ש', 'šin/sin (š/s)'),
    V('מֶלֶךְ', 'מֶלֶךְ', 'rey'),
    V('יוֹם', 'יוֹם', 'día'),
    V('אוֹר', 'אוֹר', 'luz'),
    V('אֶרֶץ', 'אֶרֶץ', 'tierra, país'),
    V('שָׁמַיִם', 'שָׁמַיִם', 'cielos'),
    V('בַּיִת', 'בַּיִת', 'casa'),
    V('דָּבָר', 'דָּבָר', 'palabra, asunto'),
    V('תּוֹרָה', 'תּוֹרָה', 'instrucción, ley'),
    V('רוּחַ', 'רוּחַ', 'espíritu, viento'),
    V('חֶסֶד', 'חֶסֶד', 'amor firme'),
    V('טוֹב', 'טוֹב', 'bueno'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿En qué dirección se lee el hebreo?'),
    options: [
      T('De izquierda a derecha'),
      T('De derecha a izquierda'),
      T('De arriba abajo'),
      T('En espiral'),
    ],
    answer: 1,
    hint: T('Piensa en {אוֹר}: la {א} va primera, aunque esté al final de la línea.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Relaciona cada letra final con la letra de la que procede.'),
      pairs: [
        { a: '{ך}', b: T('{כ}') },
        { a: '{ם}', b: T('{מ}') },
        { a: '{ן}', b: T('{נ}') },
        { a: '{ץ}', b: T('{צ}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuántas vocales tiene el alfabeto hebreo como letras independientes?'),
      options: [T('Cinco'), T('Ninguna: las vocales son signos'), T('Dos ({ו} y {י})'), T('Once')],
      answer: 1,
      hint: T('Las vocales llegaron después, como puntos: ese es el sistema del niqqud.'),
    },
    {
      kind: 'fill',
      prompt: T('Escribe la palabra hebrea para «luz» (Génesis 1.3).'),
      answer: 'אוֹר',
      hint: T('Empieza por {א} ( muda) y termina con {ר} + holam {וֹ}.'),
    },
    {
      kind: 'choose',
      prompt: T('En {שֹׁמֵר}, la {ש} suena como:'),
      options: [T('š (punto a la izquierda)'), T('s (punto a la derecha)'), T('k'), T('t')],
      answer: 1,
      hint: T('El punto del lado contrario a la línea marca la segunda pronunciación de la {ש}.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El hebreo tiene 22 consonantes y ninguna vocal en el alfabeto; la {י} sirve de consonante ({יְהוָה}) y de mater de vocal ({יוֹם}).',
      ),
    },
    {
      n: '2',
      text: T(
        '{ב} y {פ} cambian de sonido con el dageš ({b}/{v}, {p}/{f}); {כ} y {ע} son guturales y nunca reciben dageš fuerte tras {ר}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Cinco letras tienen forma final — {ך} {ם} {ן} {ף} {ץ} — y el maqaf {־} pega palabras en una sola unidad de acento.',
      ),
    },
    {
      n: '4',
      text: T(
        'Sin niqqud la lectura sigue siendo posible, pero el contexto pasa a ser obligatorio: en los manuscritos medievales el mismo texto puede leerse de dos maneras.',
      ),
    },
    {
      n: '5',
      text: T(
        'La {א} no tiene sonido propio: glotaliza ({אֱלֹהִים}) o simplemente suena ({מֶלֶךְ}). Reconocerla es la primera prueba de lectura fluida.',
      ),
    },
  ],
  notes: [
    {
      label: T('Ordenación:'),
      text: T(
        'El orden de las 22 letras no es alfabético: sigue un sistema de acrósticos de tres «líneas» que los maestros medievales usaban como mnemotecnia (de {א} a {ט}, de {י} a {ף}, de {צ} a {ת}). Por eso el capítulo 1 ya te mostró todas: la {ה} del artículo es exactamente la quinta letra de la primera línea.',
      ),
    },
    {
      label: T('Truco de lectura:'),
      text: T(
        'Si la dirección te resulta difícil, lee la línea entera al revés con un espejo en la mano: ese era el truco de los copistas medievales para revisar. La costumbre no decide el sentido; lo decide el contexto.',
      ),
    },
  ],
  examples: [
    { text: '{יוֹם}', gloss: T('día — {יוֹ} lleva {וֹ} (holam)') },
    { text: '{אוֹר}', gloss: T('luz — la {א} inicial no suena') },
    { text: '{אֶרֶץ}', gloss: T('tierra — termina en {ץ}, forma final') },
    { text: '{בַּיִת}', gloss: T('casa — {ב} con dageš fuerte = {b}') },
    { text: '{מֶלֶךְ}', gloss: T('rey — {ך} es la forma final de {כ}') },
    { text: '{שָׁמַיִם}', gloss: T('cielos — doble: {שׁ} es {ש} con punto a la izquierda') },
    { text: '{שֹׁמֵר}', gloss: T('guardando (part.) — {שׁ} con punto a la derecha, sonido {s}') },
    { text: '{יְהוָה}', gloss: T('SEÑOR — {י} inicial con šewa: consonante {y}') },
    { text: '{תּוֹרָה}', gloss: T('instrucción/ley — {ת} fuerte inicial + {ֹ}') },
    { text: '{־}', gloss: T('maqaf: une palabras en un solo acento') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Las 22 consonantes en tres bloques'),
      head: [T('Letra'), T('Nombre'), T('Sonido'), T('Ejemplo')],
      rows: [
        ['{א}', 'ʾālef', T('mudo (o glotal)'), '{אוֹר}'],
        ['{ב}', 'bēt', T('b / v (con dageš)'), '{בַּיִת}'],
        ['{ג}', 'gimel', 'g', '{גֹּל}'],
        ['{ד}', 'dālet', 'd', '{דָּבָר}'],
        ['{ה}', 'hē', 'h', '{הַבַּיִת}'],
        ['{ו}', 'wāw', T('v, o u'), '{וַיֹּאמֶר}'],
        ['{ז}', 'zāyin', 'z', '{זוֹל}'],
        ['{ח}', 'ḥēt', T('gutural (faríngeo)'), '{חֶסֶד}'],
        ['{ט}', 'ṭēt', T('t enfática'), '{טוֹב}'],
        ['{י}', 'yōd', T('y o i'), '{יוֹם}'],
        ['{כ}', 'kāf', T('k / kh (gutural tras ר)'), '{כָּל}'],
        ['{ל}', 'lāmed', 'l', '{לֵב}'],
        ['{מ}', 'mēm', 'm', '{מֶלֶךְ}'],
        ['{נ}', 'nūn', 'n', '{נֹחַ}'],
        ['{ס}', 'sāmekh', 's', '{שָׁמַיִם}'],
        ['{ע}', 'ʿayin', T('gutural (glotal)'), '{עַם}'],
        ['{פ}', 'pē', T('p / f (con dageš)'), '{פֶּסַח}'],
        ['{צ}', 'ṣādē', 'ts', '{צִיּוֹן}'],
        ['{ק}', 'qōf', 'q', '{קוֹל}'],
        ['{ר}', 'rēš', 'r', '{רוּחַ}'],
        ['{ש}', 'šīn / sīn', T('š (punto izq.) / s (punto der.)'), '{שָׁמַיִם}'],
        ['{ת}', 'tāw', 't', '{תּוֹרָה}'],
      ],
    },
    {
      caption: T('Tabla 2 — Formas finales: la misma letra en dos contextos'),
      head: [T('Forma medial (dentro)'), T('Forma final (fin de palabra)'), T('Ejemplo')],
      rows: [
        ['{כ}', '{ך}', '{מֶלֶךְ}'],
        ['{מ}', '{ם}', '{שָׁם}'],
        ['{נ}', '{ן}', '{חָן}'],
        ['{פ}', '{ף}', '{קַלָּה}?'],
        ['{צ}', '{ץ}', '{קֶצֶת}'],
      ],
    },
    {
      caption: T('Tabla 3 — Los signos del niqqud'),
      head: [T('Signo'), T('Nombre'), T('Valor / función')],
      rows: [
        ['{ַ}', 'pataj', T('a breve')],
        ['{ָ}', 'qamats', T('a larga (u o cerrada)')],
        ['{ֵ}', 'ṣere', T('e')],
        ['{ֶ}', 'ṣegol', T('e breve/media')],
        ['{ִ}', 'hireq', T('i')],
        ['{ֹ}', 'holam', T('o')],
        ['{וּ}', 'šureq', T('u')],
        ['{ְ}', 'šewa', T('vocal cero (fugaz)')],
        ['{ֲ} {ֱ} {ֳ}', 'ḥatef pataj/ṣegol/qamats', T('vocal reducida bajo gutural')],
        ['{ּ}', 'dageš', T('consonante doble')],
        ['{ֿ}', 'rafe', T('consonante simple')],
        ['{־}', 'maqaf', T('une palabras (un solo acento)')],
        ['{׃}', 'sof pasuq', T('fin de versículo')],
      ],
    },
  ],
};
