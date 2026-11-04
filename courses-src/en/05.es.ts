import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('Lectura: Juan 1:1 (KJV)'),
  subtitle: T('In the beginning was the Word — lectura guiada de la KJV'),
  section: T('Lecturas'),
  body: C(`## El texto y su registro

KJV, 1611: {In the beginning was the Word, and the Word was with God, and the Word was God.}

El verso reúne varias estructuras: {was} como verbo irregular, {the Word} con artículo definido y mayúscula, {with} para una relación cercana y {was God} sin artículo ante {God}. Este último patrón hace eco del griego y contiene la afirmación culminante; no es una simple rareza arcaica. El registro es arcaizante, pero la gramática sigue siendo legible.

## Lectura por capas

Primero localiza el verbo: {was} aparece en las tres cláusulas. Después identifica el sujeto: {the Word} vuelve en cada cláusula. Los complementos alternan: {in the beginning}, {with God}, {God}. Ese movimiento paralelo muestra identidad: {the Word was in the beginning, was with God, and was God}.

Lee Juan 1:5 y 1:14: {the light shineth} usa la terminación arcaica {shineth}; {was made flesh} combina pasiva con una afirmación teológica; {dwelt} significa “tomó residencia”, no necesariamente “levantó una tienda”. La glosa debe traducir la palabra; una nota más amplia puede mencionar la imagen del “tabernáculo”.`),
  vocab: [
    V('beginning', 'beginning', 'principio'),
    V('Word', 'word', 'Palabra'),
    V('with', 'with', 'con'),
    V('flesh', 'flesh', 'carne'),
    V('dwelt', 'dwell', 'moró'),
    V('light', 'light', 'luz'),
    V('grace', 'grace', 'gracia'),
    V('truth', 'truth', 'verdad'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué significa dwelt en Juan 1:14?'),
    options: [T('murió'), T('moró entre nosotros'), T('subió al cielo'), T('habló en público')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Completa: “the Word ___ God” (Juan 1:1).'), answer: 'was' },
    {
      kind: 'match',
      prompt: T('Relaciona palabra y glosa.'),
      pairs: [
        { a: 'beginning', b: T('principio') },
        { a: 'flesh', b: T('carne') },
        { a: 'truth', b: T('verdad') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué función tiene repetir the Word en las tres cláusulas?'),
      options: [
        T('Reforzar la identidad y crear paralelismo'),
        T('Indicar tres palabras diferentes'),
        T('Crear tres nuevos tiempos verbales'),
        T('Eliminar el verbo was'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'No leas cada was aisladamente: la repetición crea paralelismo y refuerza la identidad del sujeto.',
      ),
    },
    {
      n: '2',
      text: T('La KJV usa terminaciones en -eth; no las reproduzcas en el inglés contemporáneo.'),
    },
    {
      n: '3',
      text: T(
        'Dwelt aquí significa residir; la imagen del tabernáculo es resonancia contextual, no una acción literal de construcción.',
      ),
    },
  ],
  notes: [
    {
      label: T('Registro:'),
      text: T(
        'La KJV es arcaizante, no el registro moderno. Léela para reconocer la gramática, no para imitar cada forma.',
      ),
    },
  ],
  examples: [
    { text: '{was the Word}', gloss: T('era la Palabra') },
    { text: '{with God}', gloss: T('con Dios: relación cercana') },
    { text: '{dwelt among us}', gloss: T('moró entre nosotros') },
    { text: '{was made flesh}', gloss: T('fue hecho carne') },
  ],
  tables: [
    {
      caption: T('Mapa del verso'),
      head: [T('Elemento'), T('Forma'), T('Valor')],
      rows: [
        [T('tiempo'), '{in the beginning}', T('punto de origen')],
        [T('sujeto'), '{the Word}', T('referente determinado')],
        [T('verbo'), '{was}', T('pasado irregular')],
        [T('complemento'), '{with God}', T('relación')],
      ],
    },
  ],
};
