import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  section: T('Números'),
  title: T('Contar: clasificadores y la forma —er'),
  subtitle: T('Ningún número va solo; cada sustantivo pide el suyo'),
  body: C(`## Ningún número se basta solo

En portugués, "dos libros" es "libros" más "dos". En chino el número casi siempre está **incompleto**: {liǎng} {běn} {shū}, dos libros, donde {běn} es el *clasificador*, una palabra que nombra la categoría y la forma de lo que se cuenta. El número dice cuánto; el clasificador dice qué.

Hay unos cien clasificadores y no hace falta aprenderlos todos. Los pocos que resuelven casi todo son: {个} (gè, el genérico, el de serie cuando nada más manda), {本} (běn, para libros y objetos con páginas), {只} (zhī, para animales), {位} (wèi, para personas, con cortesía), {张} (zhāng, para hojas). Cada uno tiene un motivo: {本} viene de *raíz*, y un {本} era un rollo de bambú; {只} viene de *una sola pata* y cuenta las patas de un bicho; {张} es el *estirar* de una hoja. El motivo casi siempre explica la regla.

## La forma {er}

Tras el número, el sustantivo puede tomar una forma terminada en {er}: {liǎng} {běn} {shū} y {yī} {běn} {shū}, dos libros, un libro. El {er} es un eco del mandarín hablado antiguo y aparece sobre todo con uno, dos y algunos: {yī} {zhī} {yā}, "una gallina".

Esto **no** es el plural portugués. {shū} no se vuelve "libros": el plural ya está en el {er}, y {shū} es el mismo sustantivo en las dos frases. Un principiante traduciendo del portugués llega a {shū} {sān}, "libros tres", y se equivoca, porque el sustantivo no tiene sitio después del número.

La confusión tiene un origen: este {er} de plural no es la {érhuà} del capítulo inicial. Aquel cuenta; este solo suaviza el sonido. Son dos cosas distintas que los cursos de chino suelen juntar, y el mandarín hablado las trata de otro modo: en Pekín el plural antiguo sobrevive, en otros dialectos ha desaparecido.

## Números y recuento en los Salmos

Los números aparecen por todas partes en los Salmos y los evangelios: "tres días", "doscientos", "muchos años". Y la aritmética de Ezequiel 3, {sì shí} {nián}, {sì shí} {nián} {hé} {sān} {gè} {yuè}, muestra el otro lado del clasificador: los tres términos cuentan la misma unidad y usan el mismo {个}, y es la ausencia del numeral en el tercero lo que revela que {个} es lo que se repite. Un traductor que traduce cada término por su valor pierde ese recuento. Leer eso sin saber clasificadores es una pared.`),
  vocab: [
    V('个', '个', 'clasificador genérico (gè)'),
    V('běn', '本', 'clasificador para libros (běn)'),
    V('zhǐ', '只', 'clasificador para animales (zhī)'),
    V('zhāng', '张', 'clasificador para hojas (zhāng)'),
    V('位', '位', 'clasificador cortés para personas (wèi)'),
    V('liǎng', '两', 'dos (liǎng)'),
    V('sān', '三', 'tres (sān)'),
    V('shū', '书', 'libro (shū)'),
    V('数字', '数字', 'número (shùzì)'),
  ],
  rules: [
    { n: '1', text: T('El número nunca va solo: viene con un clasificador.') },
    { n: '2', text: T('{两} "dos" se usa solo con clasificador; {二} es el "dos" abstracto.') },
    {
      n: '3',
      text: T('La forma {—er} marca plural con uno, dos y algunos: {yī běn shū} = "un libro".'),
    },
    {
      n: '4',
      text: T('El sustantivo nunca cambia: el plural está en el {er}, no en el sustantivo.'),
    },
  ],
  notes: [
    {
      label: T('El "tres" entre corchetes en Ezequiel'),
      text: T(
        'En la {和合本}, {三} aparece entre corchetes en Ezequiel 3,2 porque el sustantivo {三} significa "número", no el numeral. Es un recordatorio del traductor, no una edición del texto.',
      ),
    },
  ],
  examples: [
    { text: '两个', gloss: T('liǎng gè — dos (cosas pequeñas)') },
    { text: '三本', gloss: T('sān běn — tres libros') },
    { text: '三只', gloss: T('sān zhī — tres animales') },
    { text: '一张', gloss: T('yì zhāng — una hoja') },
  ],
  tables: [
    {
      caption: T('El mismo número, clasificadores distintos'),
      head: [T('Clasificador'), T('Para'), T('Ejemplo')],
      rows: [
        [T('{个} gè'), T('cosas pequeñas o abstractas'), T('{yī gè rén} una persona')],
        [T('{本} běn'), T('libros, registros'), T('{sān běn shū} tres libros')],
        [T('{只} zhī'), T('animales'), T('{yī zhī gǒu} un perro')],
        [T('{位} wèi'), T('personas, con cortesía'), T('{yī wèi xiānsheng} un caballero')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué clasificador completa {三 ____ 鸡}?'),
    options: [T('{本}'), T('{只}'), T('{张}'), T('{个}')],
    answer: 1,
    hint: T('{鸡} es una gallina, y los animales tienen su propio clasificador.'),
  },
  exercises: [
    { kind: 'fill', prompt: T('Escribe el numeral de "tres" en caracteres: ____'), answer: '三' },
    {
      kind: 'match',
      prompt: T('Une el sustantivo con su clasificador'),
      pairs: [
        { a: T('libro {书}'), b: T('{本}') },
        { a: T('perro {狗}'), b: T('{只}') },
        { a: T('página {页}'), b: T('{张}') },
        { a: T('persona {人}'), b: T('{个}') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
