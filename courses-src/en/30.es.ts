import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('La frase entera, en orden'),
  subtitle: T('sujeto, verbo, objeto — la estructura que sostiene el resto'),
  section: T('Sintaxis'),
  body: C(`## Tres posiciones, y ninguna opción

El orden de la frase inglesa es **sujeto, verbo, objeto**, y no varía. {The Lord is my shepherd}, {Jesus went to the city}, {They took the boat}.

El portugués permite invertir el orden por finalidad ({traje el libro que pedí}) y por topicalización ({El libro, lo trajeron ayer}). El inglés permite las dos cosas, pero solo cuando la inversión está marcada: por una preposición, por {it} o por una expresión de tiempo. Sin marca el orden vuelve al patrón.

Génesis 1:3 en la KJV muestra la inversión marcada: {And God said, Let there be light}. Después de un verbo de decir el orden se invierte y el pronombre {there} ocupa la posición del sujeto. Por eso el versículo suena extraño a quien todavía no conoce la construcción.

## La negación abre el paso al auxiliar

Toda negación del inglés pasa por un auxiliar. El presente y el pasado usan {do}: {I do not go}, {I did not go}. El perfecto usa {have}: {I have not gone}. El futuro usa {will}: {I will not go}. Los modales usan el modal mismo: {I cannot go}, {She must not go}.

En todos los casos el orden es el mismo: **auxiliar, {not}, verbo principal**. No hay posición alternativa, y el portugués tampoco la ofrece: la negación allí sigue al verbo, y por eso alguien escribe {I not go}.

Cuando el verbo principal es una cláusula entera, el {not} se queda entre el auxiliar y el verbo y el resto de la cláusula va al final: {I do not know what he wants}, nunca {I do not know what he wants not}.

## La pregunta invierte el auxiliar

La pregunta de sí o no pone el auxiliar **antes** del sujeto: {Do you believe}, {Did he come}, {Have they finished}, {Will she go}. El auxiliar sube y el resto del orden se queda como estaba.

La pregunta con interrogativo pone el interrogativo en el lugar del objeto y mantiene el auxiliar delante: {Where do you live}, {What did he say}, {When will they arrive}. Traducir "¿Dónde vives?" y escribir {Where you live} deja la frase sin auxiliar.

La tag question repite el auxiliar invertido al final de la frase: {You believe, do you?}, {He is not here, is he?}. La tag no es una pregunta nueva: es la misma inversión, desplazada al final.

1 Juan 1:5 invierte el orden por otra razón: {If we love one another, God dwelleth in us}. La cláusula condicional abre la frase, y el verbo principal {dwelleth} vuelve a su sitio en la segunda mitad.

## La prueba de las tres columnas

Para analizar una frase el procedimiento es uno solo: escribe las posiciones en una línea y rellénalas. {Jesus | went | to the city} es sujeto, verbo, objeto indirecto. {Jesus | went | the city} es sujeto, verbo, objeto directo. {It | was | Jesus who went} es sujeto, verbo, sujeto predicativo, porque {It} ocupa la posición del sujeto y {Jesus} viene después del verbo.

El procedimiento falla solo cuando hay verbo auxiliar, y ahí la regla es contar el auxiliar como verbo: {Jesus | has | gone | to the city} tiene cuatro posiciones, no tres.`),
  vocab: [
    V('subject', 'subject', 'sujeto'),
    V('verb', 'verb', 'verbo'),
    V('object', 'object', 'objeto'),
    V('do you believe', 'do', '¿crees?'),
    V('did he come', 'do', '¿vino él?'),
    V('where do you live', 'where', '¿dónde vives?'),
    V('what did he say', 'what', '¿qué dijo?'),
    V('God said', 'say', 'Dios dijo'),
    V('let there be light', 'be', 'haya luz'),
    V('If we love one another', 'love', 'si nos amamos unos a otros'),
    V('God dwelleth in us', 'dwell', 'Dios mora en nosotros'),
    V('has gone', 'go', 'se ha ido'),
    V('do not know', 'know', 'no saber'),
    V('predicate', 'predicate', 'predicativo'),
    V('inversion', 'inversion', 'inversión'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El orden de la frase es sujeto, verbo, objeto, y solo se invierte cuando la inversión está marcada.',
      ),
    },
    {
      n: '2',
      text: T('Toda negación pasa por un auxiliar, y el orden es auxiliar, not, verbo principal.'),
    },
    {
      n: '3',
      text: T(
        'La pregunta de sí o no pone el auxiliar antes del sujeto; la pregunta con interrogativo lo pone en el lugar del objeto.',
      ),
    },
    { n: '4', text: T('La tag question repite el auxiliar invertido al final de la frase.') },
    {
      n: '5',
      text: T(
        'Al analizar una frase con auxiliar, el auxiliar cuenta como verbo y la frase gana una posición.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'Génesis 1:3 invierte el orden después de un verbo de decir, y 1 Juan 1:5 abre con una cláusula condicional. Las dos inversiones son marcas, no excepciones.',
      ),
    },
    {
      label: T('Diagnóstico:'),
      text: T(
        'Si la frase no tiene auxiliar, ni para negar ni para preguntar, lo que falta es la pieza que hace el trabajo. Es el mismo síntoma en dos contextos.',
      ),
    },
  ],
  examples: [
    { text: '{The Lord is my shepherd}', gloss: T('el Señor es mi pastor') },
    { text: '{And God said, Let there be light}', gloss: T('y Dios dijo: haya luz') },
    { text: '{I do not go}', gloss: T('yo no voy') },
    { text: '{I did not go}', gloss: T('yo no fui') },
    { text: '{Do you believe}', gloss: T('¿crees?') },
    { text: '{Where do you live}', gloss: T('¿dónde vives?') },
    { text: '{What did he say}', gloss: T('¿qué dijo?') },
    { text: '{You believe, do you}', gloss: T('¿tú crees, no?') },
    {
      text: '{If we love one another, God dwelleth in us}',
      gloss: T('si nos amamos unos a otros, Dios mora en nosotros'),
    },
    { text: '{Jesus has gone to the city}', gloss: T('Jesús se ha ido a la ciudad') },
  ],
  tables: [
    {
      caption: T('El orden canónico'),
      head: [T('Posición'), T('Qué entra'), T('Ejemplo')],
      rows: [
        [T('1'), T('sujeto'), '{Jesus}'],
        [T('2'), T('verbo'), '{went}'],
        [T('3'), T('objeto indirecto'), '{to the city}'],
        [T('1'), T('sujeto'), '{The Lord}'],
        [T('2'), T('verbo (copula)'), '{is}'],
        [T('3'), T('complemento'), '{my shepherd}'],
      ],
    },
    {
      caption: T('Los tres tipos de pregunta'),
      head: [T('Tipo'), T('Orden'), T('Ejemplo')],
      rows: [
        [T('sí o no'), T('auxiliar + sujeto + verbo'), '{Do you believe}'],
        [T('interrogativo'), T('interrogativo + auxiliar + sujeto + verbo'), '{Where do you live}'],
        [T('tag'), T('frase + auxiliar invertido + pronombre'), '{You believe, do you}'],
      ],
    },
    {
      caption: T('Cuándo la inversión es legítima'),
      head: [T('Marca'), T('Orden resultante'), T('Ejemplo')],
      rows: [
        [T('verbo de decir'), T('sujeto invertido'), '{And God said, Let there be light}'],
        [T('cláusula condicional'), T('condicional primero'), '{If we love, God dwells in us}'],
        [T('there'), T('{there} ocupa la posición del sujeto'), '{There is no fear}'],
        [T('it como sujeto'), T('verbo después de {it}'), '{It was Jesus who went}'],
        [T('negativo al principio'), T('auxiliar invertido'), '{Never have I seen such a thing}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué pregunta es correcta?'),
    options: [
      T('Where you live?'),
      T('Where do you live?'),
      T('Where you do live?'),
      T('Where live you?'),
    ],
    answer: 1,
    hint: T('El do sube delante del sujeto.'),
  },
  exercises: [
    { kind: 'fill', prompt: T("Completa la pregunta: '___ he come?'"), answer: 'Did' },
    { kind: 'fill', prompt: T("Completa la negación: 'I ___ know the answer.'"), answer: 'do not' },
    {
      kind: 'match',
      prompt: T('Relaciona el tipo de frase con el ejemplo.'),
      pairs: [
        { a: T('afirmativa'), b: '{He came early}' },
        { a: T('negativa'), b: '{He did not come early}' },
        { a: T('sí o no'), b: '{Did he come early}' },
        { a: T('interrogativo'), b: '{When did he come}' },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál frase es correcta?'),
      options: [
        T('I not know him'),
        T("I don't know him"),
        T('I know not him'),
        T('I do not know him'),
      ],
      answer: 1,
    },
  ],
};
