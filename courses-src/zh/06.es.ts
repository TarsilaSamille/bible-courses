import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  section: T('Pronombres'),
  title: T('Pronombres y demostrativos'),
  subtitle: T(
    'El mandarín ahorra palabras como el portugués, y eso es lo que lo hace difícil de leer',
  ),
  body: C(`## Tres pronombres, una sola forma

El chino tiene {wǒ} (yo), {nǐ} (tú) y {tā} (él). No hay género ni registro formal: el "usted" respetuoso es el mismo {nǐ}, y la distinción está en el verbo.

Lo que dificulta la lectura es que **el pronombre suele omitirse**. En {tā shì shīfu}, "él es profesor", el sujeto puede caer en cuanto el contexto ya lo identificó. El portugués insiste; el mandarín dispensa. Leyendo un versículo, el fragmento {chū} {qù} por sí solo no dice quién, y la lectura bíblica está llena de sujetos omitidos.

## Demostrativos: dónde, no cuál

Los demostrativos son {zhè} (este, cerca) y {nà} (ese, lejos), y van después del sustantivo: {zhè} {běn} {shū} es "este libro", literalmente "libro-este". No hay artículo ni género, y {zhè} {shān} y {nà} {shān} son "esta montaña" y "aquella montaña".

La posición importa porque {zhè} {zhè} significa también "esto es": {wǒ} {zhè} {zhè} {shì} {shuō} {de} quiere decir "esto es lo que digo".

## El sujeto omitido en los Salmos

Los Salmos son el caso más duro. Un salmo como el 23 es casi todo sintagmas nominales sin verbo explícito, y en mandarín eso produce frases que parecen incompletas a un ojo portugués. Reconocer el sujeto y el verbo omitidos es lo que separa leer de decorar caracteres.`),
  vocab: [
    V('wǒ', '我', 'yo (wǒ)'),
    V('nǐ', '你', 'tú (nǐ)'),
    V('tā', '他', 'él; ella (tā)'),
    V('zhè', '这', 'este, cerca (zhè)'),
    V('nà', '那', 'ese, lejos (nà)'),
    V('shì', '是', 'ser (shì)'),
    V('出去', '出去', 'salir (chūqù)'),
    V('shān', '山', 'montaña (shān)'),
    V('主', '主', 'Señor (zhǔ)'),
  ],
  rules: [
    { n: '1', text: T('El pronombre de sujeto se omite cuando el contexto ya lo da.') },
    { n: '2', text: T('No hay género ni persona formal: {tā} sirve para él y para ella.') },
    {
      n: '3',
      text: T('Los demostrativos van DESPUÉS del sustantivo: {zhè běn shū} = "este libro".'),
    },
    { n: '4', text: T('{zhè zhè} significa también "esto es": {wǒ zhè zhè shì shuō de}.') },
  ],
  notes: [
    {
      label: T('Omitir no es opcional'),
      text: T(
        'Cuando el sujeto se omite y nada antes lo identificó, la frase queda realmente ambigua. En los Salmos eso pasa en cada versículo, y por eso estudiar Salmos en chino empieza por la gramática y no por el texto.',
      ),
    },
  ],
  examples: [
    { text: '他是老师', gloss: T('tā shì lǎoshī — él es profesor') },
    { text: '这本书', gloss: T('zhè běn shū — este libro') },
    { text: '那山', gloss: T('nà shān — esa montaña') },
    { text: '我这就是', gloss: T('wǒ zhè jiù shì — esto es lo que digo') },
  ],
  tables: [
    {
      caption: T('Dónde aparece el pronombre y dónde desaparece'),
      head: [T('Frase'), T('Con pronombre'), T('Sin pronombre')],
      rows: [
        [T('afirmación'), T('{wǒ shì shīfu} yo soy profesor'), T('{wǒ} es obligatorio')],
        [T('pregunta'), T('{nǐ shì lǎoshī ma} ¿eres profesor?'), T('{nǐ} es obligatorio')],
        [T('respuesta'), T('{shì de} sí'), T('solo {shì}: el sujeto viene del contexto')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {这本书}, ¿qué hace {这}?'),
    options: [
      T('Va antes del sustantivo, como un artículo'),
      T('Va después del sustantivo, señalándolo'),
      T('Es un verbo'),
      T('Es un numeral'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "él" con el pronombre: ____ 是 老师 (él es profesor)'),
      answer: '他',
    },
    {
      kind: 'match',
      prompt: T('Une el pronombre con la persona'),
      pairs: [
        { a: T('{我}'), b: T('yo') },
        { a: T('{你}'), b: T('tú') },
        { a: T('{他}'), b: T('él; ella') },
        { a: T('{这}'), b: T('este (cerca)') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
