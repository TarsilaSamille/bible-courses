import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  section: T('Adjetivo'),
  title: T('Superlativo y exceso: {太} y {最}'),
  subtitle: T(
    '{太} va antes del adjetivo y dice "demasiado"; {最} dice "el más". Uno evalúa, el otro compara',
  ),
  body: C(`
## {太}: el "demasiado" que va antes del adjetivo

{太} (tài) es un adverbio de grado, y su sitio es antes del adjetivo: {tài guì le}, "está demasiado caro". Nunca después: {guì tài} no existe, igual que en portugués se dice "caro demais" y no "demais caro".

Solo, {太} ya significa "demasiado": {tài hǎo} es "demasiado bueno", nada más. Con {了}, se convierte en el patrón más común de todo lo que el chino hace con grado: {tài guì le}, "está demasiado caro". Lo que cambia no es la intensidad sino el tiempo. {tài guì} juzga un precio, un estado que ya existe; {tài guì le} dice que se volvió, que subió, que cambió. Es la misma partícula {了} de siempre.

Una cautela sintáctica, porque {tài} y {le} no son del mismo tipo de palabra: {太貴了} es un adjetivo con {太} y {了}; {他太累了} es el verbo {累}, "estar cansado", con {太} y {了}. El {了} cierra lo mismo en ambos casos, una evaluación que ahora es resultado.

## {最}: el superlativo, y también el "más"

{最} (zuì) también va **antes** del adjetivo: {zuì hǎo de}, "el mejor". La posición es la misma que la de {太}; lo que cambia es la cuenta que se está haciendo. {最} compara un conjunto: este es el mejor de todos, el más caro de la estantería, el más alto de la sala. Necesita {的} o un sustantivo detrás, porque un superlativo sin término de comparación queda suelto: {zuì hǎo} o {zuì hǎo de shū}, "el mejor de los libros", nunca {zuì hǎo de} solo.

{的} (de) marca el superlativo igual que {了} marca el **cambio**: {zuì guì de} es un sintagma cerrado, "el más caro", y {了} rara vez entra ahí. {zuì guì le} existe, pero es raro, y cuando aparece no es un superlativo que se volvió cambio; es "pasa a ser el más caro", que es otra cosa.

## {太} evalúa, {最} compara

Esta es la distinción que el lector intermedio olvida, y es la misma que el portugués hace con "demais" y "mais".

{tài yǒuqù}, "demasiado interesante", casi siempre trae la crítica de quien escucha. {zuì yǒuqù}, "el más interesante", no: es un elogio, o una elección. Por eso {太} admite {bù}: {bù tài yǒuqù} es "no muy interesante", lo contrario del superlativo y una atenuación común. {zuì}, ese, no admite negación, porque no hay un "no el más" que signifique algo.

La carga crítica de {太} se ve mejor en un contexto de límite: {nǐ bù néng tài lèi}, "no puedes estar demasiado cansado". El sentido es "no puedes pasar del punto", y la prohibición va sobre el exceso, no sobre la comparación. {nǐ bù néng zuì lèi} diría otra cosa, y algo equivocado: diría "no puedes ser el más cansado", que es absurdo.

| Forma | Posición | Significado | Qué carga |
| --- | --- | --- | --- |
| {tài guì} | {tài} + adjetivo | "demasiado caro" | evaluación, normalmente crítica |
| {tài guì le} | {tài} + adjetivo + {le} | "se puso demasiado caro" | evaluación + cambio |
| {zuì guì} | {zuì} + adjetivo | "el más caro" | comparación, superlativo |
| {zuì hǎo de} | {zuì} + adjetivo + {de} | "el mejor" | superlativo cerrado |
| {bù tài yǒuqù} | {bù} + {tài} + adjetivo | "no muy interesante" | atenuación |

## La escala de intensidad

{太} no es el peldaño más alto de la intensidad: es un peldaño del medio, y se mide contra los demás. Con {guì}, "caro", el orden es {hěn guì}, "muy caro", {tài guì}, "demasiado caro", {fēicháng guì}, "extremadamente caro", {jíqí guì} o {tèbié guì}, "excepcionalmente caro". Todos antes del adjetivo, todos en la misma posición: el mandarín gradúa la intensidad poniendo las palabras en fila, no flexionando el adjetivo como hace el portugués.

El otro extremo de la misma idea, con {guì}, viene del {de} de modo: {tài guì le} es "muy caro" como cambio, {guì de hěn} es "muy caro" como **estado** que sigue. Un {了}, un {de}: lo que cambia es qué cambia, no la intensidad.

En la Escritura, los dos aparecen donde el griego escogió los intensivos. En Juan 3:16 la {和合本} tiene {Shàngdì ài shìrén}, "Dios amó al mundo", y {ài}, "amar", no lleva {太} ni {最}: amor simple, sin grado. En Juan 3:30 el mandarín tiene {tā bìxū zēngzhǎng}, "él debe crecer", y {bìxū} es {bì}, "debe", más {xū}, "necesario": obligación, no superlativo. El otro lado del versículo, {què yào jiǎn xiǎo}, "pero yo debo menguar", tampoco es {zuì}: los dos lados son acciones, no grados. Quien lee {zuì} donde la {和合本} no pone {最} está traduciendo una costumbre del mandarín, no el griego.`),
  vocab: [
    V('tài', '太', 'demasiado, excesivamente (antes del adjetivo)'),
    V('zuì', '最', 'el más, superlativo (antes del adjetivo)'),
    V('guì', '贵', 'caro (guì)'),
    V('lèi', '累', 'cansado, agotado (lèi)'),
    V('hǎo', '好', 'bueno (hǎo)'),
    V('de', '的', 'partícula que cierra el superlativo (de)'),
    V('le', '了', 'partícula de aspecto: cambio (le)'),
    V('hěn', '很', 'muy, grado neutro (hěn)'),
  ],
  rules: [
    {
      n: '1',
      text: T('{太} y {最} van antes del adjetivo: {tài guì le}, {zuì hǎo de}. Nunca después.'),
    },
    {
      n: '2',
      text: T('{太} solo ya es "demasiado": {tài guì} es estado, {tài guì le} es cambio.'),
    },
    { n: '3', text: T('{最} es superlativo y pide {的} o un sustantivo: {zuì hǎo de shū}.') },
    { n: '4', text: T('{太} admite {不} ({bù tài yǒuqù} = "no muy"); {最} no admite negación.') },
    {
      n: '5',
      text: T('La escala es {很} < {太} < {非常} < {极其} o {特别} — todos antes del adjetivo.'),
    },
  ],
  notes: [
    {
      label: T('{太} es una evaluación, no un nivel de intensidad'),
      text: T(
        '{太} casi siempre trae crítica consigo — {tài guì} es demasiado caro, {tài lèi} es demasiado cansado. El superlativo {zuì} juzga el mismo adjetivo sin crítica: {zuì guì} es solo el más caro de la lista.',
      ),
    },
    {
      label: T('{太}...{了} y {得} son los dos "muy"'),
      text: T(
        '{tài guì le} es "muy caro" como cambio (lección 10); {guì de hěn} es "muy caro" como estado (lección 14). {了} marca lo que cambió, {得} marca lo que sigue.',
      ),
    },
  ],
  examples: [
    { text: '太貴了', gloss: T('tài guì le — está demasiado caro') },
    { text: '最好的', gloss: T('zuì hǎo de — el mejor') },
    { text: '你不能太累', gloss: T('nǐ bù néng tài lèi — no puedes estar demasiado cansado') },
    { text: '最有意思', gloss: T('zuì yǒu yìsi — el más interesante') },
  ],
  tables: [
    {
      caption: T('¿Exceso o superlativo?'),
      head: [T('Palabra'), T('Qué hace'), T('Español')],
      rows: [
        [T('{太}'), T('evalúa un exceso, normalmente con crítica'), T('demasiado')],
        [T('{最}'), T('compara un conjunto y elige uno'), T('el más')],
        [T('{很}'), T('grado neutro, sin carga'), T('muy')],
        [T('{非常}'), T('grado alto, neutro'), T('muy, extremadamente')],
      ],
    },
    {
      caption: T('La escala de intensidad con 贵'),
      head: [T('Grado'), T('Frase'), T('Español')],
      rows: [
        [T('neutro'), T('{hěn guì}'), T('muy caro')],
        [T('exceso'), T('{tài guì}'), T('demasiado caro')],
        [T('muy alto'), T('{fēicháng guì}'), T('extremadamente caro')],
        [T('máximo'), T('{jíqí guì}'), T('excepcionalmente caro')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {他太累了}, ¿qué está diciendo {太}?'),
    options: [
      T('que él es el más cansado de todos'),
      T('que está demasiado cansado'),
      T('que está un poco cansado'),
      T('que se está cansando ahora'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "el mejor" con la palabra del superlativo: ____好的'),
      answer: '最',
    },
    {
      kind: 'match',
      prompt: T('Une cada palabra con lo que hace'),
      pairs: [
        { a: T('{太}'), b: T('exceso: demasiado, antes del adjetivo') },
        { a: T('{最}'), b: T('superlativo: el más') },
        { a: T('{很}'), b: T('grado neutro: muy') },
        { a: T('{了}'), b: T('partícula de aspecto: cambio') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Para decir "el más interesante", ¿qué forma?'),
      options: [T('{太有意思}'), T('{最有趣}'), T('{很有趣}'), T('{太最有趣}')],
      answer: 1,
    },
  ],
};
