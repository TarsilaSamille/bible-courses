import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('Lectura: Génesis 1:1-3'),
  subtitle: T('בְּרֵאשִׁית — tres versículos para probar todo lo que ya sabes'),
  section: T('Primeros textos y partículas'),
  body: C(`## El texto, palabra por palabra

{בְּרֵאשִׁית} «en el principio» · {בָּרָא} «creó» · {אֱלֹהִים} «Dios» · {אֵת} «(marcador)» · {הַשָּׁמַיִם} «los cielos» · {וְאֵת} «y (marcador)» · {הָאָרֶץ} «la tierra»

Glosa continua: «En el principio creó Dios los cielos y la tierra».

Cada palabra encarna un capítulo anterior:

## Las seis piezas del versículo 1

{בְּרֵאשִׁית} es {בְּ} «en» (preposición inseparable) + {רֵאשִׁית} «comienzo», derivado de {רֹאשׁ} «cabeza»: literalmente «en la cabeza», es decir, «al principio».

{בָּרָא} es un qatal de 3.ª m. (cap. 5). En la Biblia es la palabra reservada a Dios; {עָשָׂה} «hacer» sirve para todo lo ordinario.

{אֱלֹהִים} viene **sin artículo**. Compáralo con {הָאֱלֹהִים} «el Dios» de otros textos: la ausencia de artículo apunta a la naturaleza divina, no a un dios entre otros. Fíjate también en el {hataf} {ֱ} bajo la {א} (gutural, cap. 13).

{אֵת} es el marcador de objeto directo. Nunca se traduce: escribir «Dios creó los cielos» ya muestra lo que hace.

{הַשָּׁמַיִם} lleva artículo + sustantivo en **dual**: los dos cielos, no un plural.

{הָאָרֶץ} lleva el artículo largo {הָ} a causa de la gutural {א}.

## El versículo 2: el mundo antes de la luz

{וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל־פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל־פְּנֵי הַמָּיִם}

«Y la tierra era {תֹהוּ וָבֹהוּ} (vacía y vaga) y {חֹשֶׁךְ} (tinieblas) sobre la faz del {תְהוֹם} (abismo), y el {רוּחַ} (viento/espíritu) de Dios se posaba sobre la faz de las aguas.»

{תֹהוּ} y {בֹהוּ} forman un par casi indeclinable de sinónimos: {תֹהוּ וָבֹהוּ} es una locución fija, «sin forma y vacío». {תְהוֹם} es un sustantivo masculino que significa el abismo caótico primordial, y reaparece en Ezequiel y en el Salmo 107.

## El versículo 3: la primera palabra

{וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר וַיְהִי־אוֹר}

«Y dijo Dios: Sea la luz; y hubo luz.»

{וַיֹּאמֶר} es el wayyiqtol (cap. 10), el motor de la narrativa. {יְהִי} es el jussivo de {הָיָה} (cap. 5). {וַיְהִי־אוֹר} lleva maqaf: las dos palabras forman una unidad y reciben un solo acento, lo que evita dos acentos en la misma frase.

Fíjate en que el verbo {הָיָה} sirve para la creación de lo visible, del tiempo ({וַיְהִי־עֶרֶב וַיְהִי־בֹקֶר}, v. 5) y hasta de la vida ({תִּהְיֶה}, v. 6). Es el verbo del ser.

## Queda para el capítulo siguiente

En tres versículos ya has leído: el artículo (cap. 1), el dual y el género (cap. 3), el qatal y {הָיָה} (cap. 5). El capítulo siguiente añade la pieza que faltaba para leer casi todo: el estado constructo, la manera hebrea de decir «de».`),
  vocab: [
    V('בְּרֵאשִׁית', 'רֵאשִׁית', 'en el principio'),
    V('בָּרָא', 'ברא', 'creó'),
    V('עָשָׂה', 'עשׂה', 'hizo (verbo común)'),
    V('אֱלֹהִים', 'אֱלֹהִים', 'Dios'),
    V('אֵת', 'אֵת', 'marcador de objeto'),
    V('הַשָּׁמַיִם', 'שָׁמַיִם', 'los cielos'),
    V('הָאָרֶץ', 'אֶרֶץ', 'la tierra'),
    V('וַיֹּאמֶר', 'אמר', 'y dijo'),
    V('יְהִי', 'היה', 'sea'),
    V('הָיְתָה', 'היה', 'era/fue'),
    V('חֹשֶׁךְ', 'חֹשֶׁךְ', 'tinieblas'),
    V('תְהוֹם', 'תְהוֹם', 'abismo'),
    V('רוּחַ', 'רוּחַ', 'viento, espíritu'),
    V('תֹהוּ', 'תֹהוּ', 'vacío, inútil'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué es «אֵת» en Génesis 1:1?'),
    options: [
      T('Un verbo: «crear»'),
      T('Marcador de objeto directo (no se traduce)'),
      T('El nombre de Dios'),
      T('Un adjetivo: «primero»'),
    ],
    answer: 1,
    hint: T('Aparece dos veces en el versículo 1, siempre antes de un sustantivo con artículo.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Relaciona cada palabra de Gn 1.1 con su función.'),
      pairs: [
        { a: '{בָּרָא}', b: T('verbo') },
        { a: '{אֵת}', b: T('marcador de objeto') },
        { a: '{הַשָּׁמַיִם}', b: T('dual') },
        { a: '{בְּרֵאשִׁית}', b: T('tiempo (adverbio)') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('En «וַיְהִי־אוֹר», el maqaf {־} indica que:'),
      options: [
        T('Ambas palabras forman una sola unidad de acento'),
        T('{אוֹר} es un objeto directo'),
        T('El verbo está en plural'),
        T('Es una cita'),
      ],
      answer: 0,
      hint: T('Regla §3: el maqaf pega palabras en una sola unidad prosódica.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa Génesis 1.3: «וַיֹּאמֶר אֱלֹהִים ___ אוֹר» (sea la luz).'),
      answer: 'יְהִי',
      hint: T('Es el jussivo de {הָיָה}, y la vocal es {ְ} (šewa), no {ָ}.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Por qué {אֱלֹהִים} aparece sin artículo en Gn 1.1?'),
      options: [
        T('Porque el escriba olvidó el {הַ}'),
        T('Porque se refiere a la naturaleza divina, no a un dios entre otros'),
        T('Porque {אֱלֹהִים} es femenino'),
        T('Porque los nombres propios nunca llevan artículo'),
      ],
      answer: 1,
      hint: T('Compara con {הָאֱלֹהִים} «el Dios», usado cuando se habla de un Dios concreto.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{אֵת} es marcador de objeto directo y no se traduce; su presencia basta para señalar que hay objeto.',
      ),
    },
    {
      n: '2',
      text: T(
        '{בָּרָא} es palabra de Dios; {עָשָׂה} es la palabra común para «hacer». Elegir entre las dos ya es teología.',
      ),
    },
    {
      n: '3',
      text: T(
        'El maqaf {־} une palabras en una sola unidad de acento: {וַיְהִי־אוֹר} recibe un único acento.',
      ),
    },
    {
      n: '4',
      text: T(
        '{הַשָּׁמַיִם} es dual: el texto hebreo prefiere dos cielos a un plural, y por eso el sustantivo conserva {־ַיִם}.',
      ),
    },
    {
      n: '5',
      text: T(
        '{יְהִי} (jussivo) expresa la voluntad de Dios; {וַיְהִי} (wayyiqtol) narra el resultado: en Gn 1.3 ambos aparecen en la misma frase.',
      ),
    },
  ],
  notes: [
    {
      label: T('Orden de palabras:'),
      text: T(
        'El hebreo no marca el objeto directo por la posición: {בָּרָא} y {אֵת} pueden intercambiarse y la frase significa lo mismo. El orden por defecto es verbo-sujeto-objeto-complemento, y es ese orden — no la posición de {אֵת} — lo que produce la sensación de realce en Génesis 1.',
      ),
    },
    {
      label: T('Dato curioso:'),
      text: T(
        'La palabra {אֱלֹהִים} está entre las más estudiadas de la lengua: es un plural femenino, con toda probabilidad por parecido con {אֱלֹהִּים} (gente, dioses). La tradición judía lee el nombre como bimorfico, y la tradición cristiana lee el plural como plenitud. Este curso sigue el uso: con {אֶת} o {אֶל}, {אֱלֹהִים} es el nombre propio, sin artículo.',
      ),
    },
  ],
  examples: [
    { text: '{בְּרֵאשִׁית}', gloss: T('en el principio — {בְּ} «en» + {רֵאשִׁית} «comienzo»') },
    { text: '{בָּרָא}', gloss: T('creó — qatal 3.º m. de raíz {ברא}') },
    { text: '{אֱלֹהִים}', gloss: T('Dios — sin artículo; con {הָ} sería «el Dios»') },
    { text: '{אֵת}', gloss: T('marcador de objeto directo — no se traduce') },
    { text: '{הַשָּׁמַיִם}', gloss: T('los cielos — artículo + dual {שָׁמַיִם}') },
    { text: '{הָיְתָה}', gloss: T('era — 3.ª f. de {הָיָה} (cap. 5)') },
    { text: '{תֹהוּ וָבֹהוּ}', gloss: T('vacía y vaga — par fijo, casi indeclinable') },
    { text: '{תְהוֹם}', gloss: T('el abismo — el caos primordial (Sal 107.29)') },
    { text: '{מְרַחֶפֶת}', gloss: T('se posaba — participio femenino con {הָיָה} implícito') },
    { text: '{וַיֹּאמֶר}', gloss: T('y dijo — wayyiqtol, el motor narrativo (cap. 10)') },
    { text: '{יְהִי}', gloss: T('sea — jussivo de {הָיָה}') },
    { text: '{וַיְהִי־אוֹר}', gloss: T('y hubo luz — maqaf: un solo acento') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Génesis 1:1-3 palabra por palabra'),
      head: [T('Palabra'), T('Glosa'), T('Lo que reconoces')],
      rows: [
        ['{בְּרֵאשִׁית}', T('en el principio'), T('{בְּ} + {רֵאשִׁית} (preposición)')],
        ['{בָּרָא}', T('creó'), T('qatal 3.º m.')],
        ['{אֱלֹהִים}', T('Dios'), T('sin artículo + hataf')],
        ['{אֵת}', T('(objeto directo)'), T('marcador, no se traduce')],
        ['{הַשָּׁמַיִם}', T('los cielos'), T('artículo + dual')],
        ['{וְאֵת}', T('y (objeto directo)'), T('{ו} + {אֵת}')],
        ['{הָאָרֶץ}', T('la tierra'), T('artículo largo {הָ}')],
        ['{הָיְתָה}', T('era'), T('qatal 3.ª f. de {הָיָה}')],
        ['{תֹהוּ וָבֹהוּ}', T('vacía y vaga'), T('locución fija')],
        ['{תְהוֹם}', T('abismo'), T('sustantivo masculino')],
        ['{וַיֹּאמֶר}', T('y dijo'), T('wayyiqtol')],
        ['{יְהִי}', T('sea'), T('jussivo de {הָיָה}')],
        ['{וַיְהִי־אוֹר}', T('y hubo luz'), T('maqaf: un solo acento')],
      ],
    },
    {
      caption: T('Tabla 2 — Verbos y su función en Génesis 1'),
      head: [T('Forma'), T('Glosa'), T('Qué hace en la oración')],
      rows: [
        ['{בָּרָא}', T('creó'), T('verbo principal, 3.º m.')],
        ['{הָיְתָה}', T('era'), T('verbo de estado, 3.ª f.')],
        ['{מְרַחֶפֶת}', T('se posaba'), T('participio + {היה} implícito')],
        ['{וַיֹּאמֶר}', T('y dijo'), T('narrativa: abre discurso')],
        ['{יְהִי}', T('sea'), T('jussivo: voluntad divina')],
        ['{וַיְהִי}', T('y hubo'), T('narrativa: resultado')],
      ],
    },
  ],
};
