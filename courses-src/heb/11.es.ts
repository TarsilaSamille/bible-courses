import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Verbos débiles y el wayyiqtol'),
  subtitle: T('וַיֹּאמֶר — la cadena que cuenta la Biblia'),
  section: T('Verbo y numeral'),
  body: C(`## El motor de la narrativa

Casi toda la narrativa bíblica corre sobre una sola forma verbal: el **wayyiqtol** (también llamado waw consecutivo). Se forma con {וַ} + la 3.ª m. del verbo, y significa «y aconteceu que». Gracias a él, Génesis 1-11 se convierte en una cadena de acciones:

{וַיֹּאמֶר} «y dijo» · {וַיַּרְא} «y vio» · {וַיִּקְרָא} «y llamó» · {וַיִּשְׁמַע} «y oyó» · {וַיָּבֹא} «y vino» · {וַיַּבְדֵּל} «y separó»

La señal gráfica es la {ו} con {ַ} (pataj) seguida de dageš fuerte en la letra siguiente: {וַיֹּאמֶר}, {וַיִּקְרָא}. Reconocer ese par es reconocer media Biblia.

Explicación técnica: históricamente el wayyiqtol nace del **yiqtol** (imperfecto) con {ו} copulativo y dageš naf (la duplicación que neutraliza la vocal). Por eso muchos libros públicos de gramática enseñan: {וַ} + yiqtol = pasado narrativo. Las formas son idénticas a las del yiqtol con {ו}.

## Tres verbos que no puedes memorizar como los demás

Las raíces con guturales (cap. 13) o con {א}/{ו} deforman el paradigma (Gesenius §62-75). Son los verbos «débiles», y basta conocerlos:

{אמר} «decir»: {אָמַר} «dijo» · {יֹאמַר} «dirá» · {יֹאמֵר} «y dijo»
{היה} «ser»: {הָיָה} «fue» · {יִהְיֶה} «será» · {יְהִי} «sea»
{בוא} «venir»: {בָּא} «vino» · {יָבוֹא} «vendrá» · {יָבֹא} «que venga»

La irregularidad se ve: {יֹאמַר} lleva {ו} con holam, {יִהְיֶה} lleva {י} con hireq, {יָבוֹא} duplica la {ב}. Nada de eso es un error: es la razón por la que aparecen en casi todas las listas de solo palabras que merece la pena memorizar.

## Wayyiqtol y aspecto

El wayyiqtol no es solo «pasado»: es **imperfectivo narrativo**. Cuenta lo que ocurre dentro de una escena abierta. En Génesis 3, {וַיֹּאמֶר} «y dijo» abre escena, y el verbo siguiente {וַיִּקְרָא} «y llamó» continúa en la misma escena. Cuando la narración salta de escena, el verbo cambia a qatal ({בָּרָא}, {הָיָה}), y ese contraste es lo que da al estilo bíblico su ritmo.

## Construir una cadena

Intenta leer esta secuencia del capítulo 1, marcando el {וַ} cada vez:

{וַיֹּאמֶר} y {וַיַּרְא} y {וַיַּבְדֵּל} y {וַיִּקְרָא} «y dijo… y vio… y separó… y llamó» (Gn 1.3-5)

Fíjate en que {וַיַּרְא} «y vio» y {וַיַּבְדֵּל} «y separó» comparten el patrón: {וַ} + {י} + dageš. Una vez que ves el patrón, el texto deja de ser una lista de palabras y se convierte en un relato.

## Atento a lo que no es wayyiqtol

No todo {וַ} inicial es narrativa. En {וְהִיא} «y ella», {וְאַתָּה} «y tú» la {ו} es solo la conjunción «y» con šewa. La diferencia es la {ַ}: con {ַ} y dageš es narrativa; sin ella, simple coordinación.

En la práctica casi todo {וַ} con dageš dentro de una narrativa es wayyiqtol, y casi toda {ו} con šewa es coordinación. La gramática bíblica funciona así: lee el patrón, confirma con el contexto.`),
  vocab: [
    V('וַיֹּאמֶר', 'אמר', 'y dijo'),
    V('וַיַּרְא', 'ראה', 'y vio'),
    V('וַיִּקְרָא', 'קרא', 'y llamó'),
    V('וַיִּשְׁמַע', 'שׁמע', 'y oyó'),
    V('וַיָּבֹא', 'בוא', 'y vino'),
    V('וַיַּבְדֵּל', 'בדל', 'y separó'),
    V('וַיְהִי', 'היה', 'y hubo'),
    V('יֹאמַר', 'אמר', 'dirá'),
    V('יִהְיֶה', 'היה', 'será'),
    V('יָבוֹא', 'בוא', 'vendrá'),
    V('וְהִיא', 'הִיא', 'y ella'),
    V('אָמַר', 'אמר', 'dijo (qatal)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué hace el «וַ» inicial en «וַיֹּאמֶר»?'),
    options: [
      T('Nega el verbo'),
      T('Convierte el verbo en pasado narrativo («y dijo»)'),
      T('Forma el plural'),
      T('Marca el femenino'),
    ],
    answer: 1,
    hint: T('El {וַ} seguido de dageš fuerte es la marca de la narrativa.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Relaciona la forma con su tiempo/modo.'),
      pairs: [
        { a: '{אָמַר}', b: T('qatal (pasado)') },
        { a: '{יֹאמַר}', b: T('yiqtol (futuro)') },
        { a: '{וַיֹּאמֶר}', b: T('wayyiqtol (narrativa)') },
        { a: '{לֵאמֹר}', b: T('infinitivo') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál de estas formas es wayyiqtol?'),
      options: [T('וְהִיא'), T('וַיָּבֹא'), T('וְאֵת'), T('וְאַתָּה')],
      answer: 1,
      hint: T('Regla §4: {וַ} con dageš es narrativa; {ו} con šewa es coordinación.'),
    },
    {
      kind: 'fill',
      prompt: T('Escribe el wayyiqtol de {שׁמע} «oír» (3.º m.).'),
      answer: 'וַיִּשְׁמַע',
      hint: T('{וַ} + {י} con dageš fuerte + {שְׁמַע}.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Por qué {היה} se llama verbo débil?'),
      options: [
        T('Porque la raíz solo tiene dos letras'),
        T('Porque la {ה} final cambia de vocal según el tiempo ({הָיָה}, {יִהְיֶה})'),
        T('Porque solo aparece en el Antiguo Testamento'),
        T('Porque es un verbo irregular'),
      ],
      answer: 1,
      hint: T('Compara {הָיָה} con {יִהְיֶה}: la {ה} no recibe dageš fuerte en el futuro.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El wayyiqtol = {וַ} + verbo; en la práctica, {וַ} + dageš en la letra siguiente es la señal de narrativa.',
      ),
    },
    {
      n: '2',
      text: T(
        'El wayyiqtol es aspecto imperfectivo: cuenta lo que ocurre dentro de una escena; el qatal marca el salto a otra escena.',
      ),
    },
    {
      n: '3',
      text: T(
        'Los verbos con guturales o con {א}/{ו} son «débiles» y cambian vocal y dageš: memoriza {אמר}, {היה}, {בוא}, {מות} y {ראה} como un bloque.',
      ),
    },
    { n: '4', text: T('No todo {וַ} es narrativa: {ו} con šewa ({וְ}) es solo la conjunción «y».') },
    {
      n: '5',
      text: T(
        'En {וַיֹּאמֶר} el sujeto viene del contexto ({אֱלֹהִים}), no de un pronombre: el hebreo prescinde del pronombre explícito.',
      ),
    },
  ],
  notes: [
    {
      label: T('Exégesis:'),
      text: T(
        'Como el wayyiqtol cuenta lo que está ocurriendo, su frecuencia es un termómetro teológico. En los relatos de creación (Gn 1) domina; en los Salmos y Proverbios dominan el qatal y el participio; en los salmos históricos crece la cadena de {וַ}. Leer la proporción entre ambos es leer la actitud del autor ante los hechos: lo que se pone en escena y lo que ya es un hecho consumado.',
      ),
    },
    {
      label: T('Dato curioso:'),
      text: T(
        'El nombre «wayyiqtol» es moderno: los gramáticos hebreos antiguos no lo usaban, llamaban al fenómeno {וַיִּקְטֹל} y lo estudiaban como una de las «formas de qatal» (las diez terminaciones de {קטל}: {הוּא}, {הוּז}, {הוּם}…). Los misioneros que elaboraron el sistema moderno nos dieron el término actual, más fácil de enseñar.',
      ),
    },
  ],
  examples: [
    { text: '{וַיֹּאמֶר}', gloss: T('y dijo — {וַ} + dageš + {אמר}') },
    { text: '{וַיַּרְא}', gloss: T('y vio — {וַיִּ} + {ראה}') },
    { text: '{וַיִּקְרָא}', gloss: T('y llamó — {וַיִּ} + {קרא}') },
    { text: '{וַיִּשְׁמַע}', gloss: T('y oyó — {וַיִּ} + {שׁמע}') },
    { text: '{וַיָּבֹא}', gloss: T('y vino — de {בוא} (verbo débil)') },
    { text: '{וַיַּבְדֵּל}', gloss: T('y separó — piel de {בדל} (Gn 1.4)') },
    { text: '{יֹאמַר}', gloss: T('dirá — futuro de {אמר} con holam') },
    { text: '{יִהְיֶה}', gloss: T('será — futuro de {היה}') },
    { text: '{יָבוֹא}', gloss: T('vendrá — futuro de {בוא} con {ב} fuerte') },
    { text: '{וְהִיא}', gloss: T('y ella — {ו} + šewa: simple coordinación') },
    { text: '{וַיְהִי}', gloss: T('y hubo — narrativa de {היה} (Gn 1.3)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Verbos débiles: los tres que más aparecen'),
      head: [
        T('Verbo'),
        T('Qatal (pasado)'),
        T('Infinitivo'),
        T('Yiqtol (futuro)'),
        T('Wayyiqtol'),
      ],
      rows: [
        [T('{אמר} «decir»'), '{אָמַר}', '{לֵאמֹר}', '{יֹאמַר}', '{וַיֹּאמֶר}'],
        [T('{היה} «ser»'), '{הָיָה}', '{לִהְיוֹת}', '{יִהְיֶה}', '{וַיְהִי}'],
        [T('{בוא} «venir»'), '{בָּא}', '{לָבוֹא}', '{יָבוֹא}', '{וַיָּבֹא}'],
        [T('{מות} «morir»'), '{מָת}', '{לָמוּת}', '{יָמוּת}', '{וַיָּמוּת}'],
      ],
    },
    {
      caption: T('Tabla 2 — El wayyiqtol en la narrativa de Génesis 1'),
      head: [T('Forma'), T('Glosa'), T('Referencia')],
      rows: [
        ['{וַיֹּאמֶר}', T('y dijo'), 'Gn 1.3'],
        ['{וַיְהִי}', T('y hubo'), 'Gn 1.3'],
        ['{וַיַּרְא}', T('y vio'), 'Gn 1.4'],
        ['{וַיַּבְדֵּל}', T('y separó'), 'Gn 1.4'],
        ['{וַיִּקְרָא}', T('y llamó'), 'Gn 1.5'],
        ['{וַיַּעַשׂ}', T('y hizo'), 'Gn 1.7'],
      ],
    },
    {
      caption: T('Tabla 3 — ¿{וַ} narrativo o simple coordinación?'),
      head: [T('Forma'), T('Señal'), T('Lectura')],
      rows: [
        ['{וַיֹּאמֶר}', T('{וַ} + dageš'), T('y dijo (narrativa)')],
        ['{וְהִיא}', T('{ו} + šewa'), T('y ella')],
        ['{וְאֵת}', T('{ו} + šewa'), T('y (marcador)')],
        ['{וַיְהִי}', T('{וַ} + dageš'), T('y hubo (narrativa)')],
      ],
    },
  ],
};
