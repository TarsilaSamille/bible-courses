import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  title: T('Sustantivos: género y número'),
  subtitle: T('כָּל־דָּבָר — solo masculino o femenino, y tres números'),
  section: T('Sustantivos, adjetivos y pronombres'),
  body: C(`## No existe neutro

Todo sustantivo hebreo es **masculino** o **femenino**, sin excepción (Gesenius §97). Eso no tiene nada que ver con el sexo ni con la naturaleza: {מֶלֶךְ} «rey» es masculino y {מַלְכָּה} «reina» es femenino; {חֶסֶד} «amor firme» es masculino aunque termine en {-ֶת}, y {אוֹר} «luz» es masculino aunque sea abstracto. El género decide la concordancia, no la traducción, y el portugués o el español te obligan a inventar un género que el hebreo no tiene.

Por eso, cuando el hebreo dice {רוּחַ} «espíritu» en masculino, eso no afirma nada sobre el Espíritu: simplemente concuerda con el adjetivo o el verbo que lo acompaña.

## Cómo se reconoce el femenino

La mayoría de los femeninos terminan en {-ָה} (qamats + he): {מַלְכָּה} «reina», {אִשָּׁה} «mujer», {לָשׁוֹן} «lengua», {תּוֹרָה} «instrucción», {רוּחַ} «viento/aliento» (forma abreviada).

Un grupo pequeño termina en {-ֶת} (segol + tav), como {בַּת} «hija». Pero la terminación es una pista, no una prueba: {מֶלֶךְ} «rey» también termina en {-ֶת} y es masculino. Consejo práctico: si dudas del género, mira el plural: {-ִים} revela masculino, {-וֹת} revela femenino.

## El plural

El plural masculino añade {-ִים}: {סוּס} → {סוּסִים} «caballos», {יוֹם} → {יָמִים} «días», {מֶלֶךְ} → {מְלָכִים} «reyes». El plural femenino añade {-וֹת}: {מַלְכָּה} → {מְלָכוֹת} «reinas», {בַּת} → {בָּנוֹת} «hijas».

Los sustantivos segmentales (como {מֶלֶךְ} «rey») tienen un plural que parece venir de otra palabra: {מְלָכִים} lleva una {ָ} que el singular no tiene. Es un resto de una base antigua; en la práctica, basta aprender el par completo.

## Plurales irregulares

Algunos plurales se salen del patrón y hay que memorizarlos: {אִשָּׁה} → {נָשִׁים} «mujeres», {בַּיִת} → {בָּתִּים} «casas», {עִיר} → {עָרִים} «ciudades», {אָדָם} → {אֲנָשִׁים} «gente», {בֵּן} → {בָּנִים} «hijos». En todos ellos el patrón {-ִים} sobrevive: lo que cambia es la base.

## El dual

El dual es el rasgo más arcaico de la lengua: {-ַיִם} (yim) indica exactamente dos: {יָדַיִם} «(dos) manos», {עֵינַיִם} «ojos», {רַגְלַיִם} «pies», {שָׁמַיִם} «cielos», {מַיִם} «aguas».

La Biblia usa el dual constantemente: {אֵחֶיךָ} «tu hermano» puede significar «tus dos hermanos», y {שְׁנֵי} «dos» en {שְׁנֵי אֲנָשִׁים} es literalmente «dos personas». El plural de un dual casi nunca existe: en la práctica, {שָׁמַיִם} ya hace el papel de plural de {שָׁמָה} «cielo», y {שָׁמֵי} es la forma que verás constantemente en locuciones como {שָׁמֵי אֲדָם} «cielos de tierra».

Palabras para retener: {יוֹם} «día», {אוֹר} «luz», {אֶרֶץ} «tierra» — las tres vuelven en Génesis 1 y en el Salmo 19.`),
  vocab: [
    V('סוּסִים', 'סוּס', 'caballos'),
    V('יָמִים', 'יוֹם', 'días'),
    V('מְלָכִים', 'מֶלֶךְ', 'reyes'),
    V('מְלָכוֹת', 'מַלְכָּה', 'reinas'),
    V('נָשִׁים', 'אִשָּׁה', 'mujeres'),
    V('בָּנוֹת', 'בַּת', 'hijas'),
    V('שָׁמַיִם', 'שָׁמַיִם', 'cielos'),
    V('מַיִם', 'מַיִם', 'aguas'),
    V('עֵינַיִם', 'עַיִן', 'ojos (dual)'),
    V('רַגְלַיִם', 'רֶגֶל', 'pies (dual)'),
    V('חֶסֶד', 'חֶסֶד', 'amor firme (masc.)'),
    V('מַלְכָּה', 'מַלְכָּה', 'reina'),
    V('אִשָּׁה', 'אִשָּׁה', 'mujer'),
    V('בַּת', 'בַּת', 'hija'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es el plural de «יוֹם» (día, masculino)?'),
    options: [T('יוֹמוֹת'), T('יָמִים'), T('יוֹמַיִם'), T('יָמָה')],
    answer: 1,
    hint: T('{יוֹם} es masculino, así que el plural lleva {-ִים}.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Cuál de estos sustantivos es FEMENINO?'),
      options: [T('מַלְכָּה'), T('מֶלֶךְ'), T('דָּבָר'), T('חֶסֶד')],
      answer: 0,
      hint: T('Solo una tiene plural en {-וֹת} ({מְלָכוֹת}).'),
    },
    {
      kind: 'fill',
      prompt: T('Escribe el plural femenino de «בַּת» (hija).'),
      answer: 'בָּנוֹת',
      hint: T('El plural femenino añade {-וֹת}: {בַּת} → {בָּנוֹת}.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el sustantivo con su plural.'),
      pairs: [
        { a: '{אִשָּׁה}', b: '{נָשִׁים}' },
        { a: '{בַּיִת}', b: '{בָּתִּים}' },
        { a: '{עִיר}', b: '{עָרִים}' },
        { a: '{מֶלֶךְ}', b: '{מְלָכִים}' },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué demuestra la forma {מַיִם} «aguas»?'),
      options: [
        T('Que el hebreo tiene un plural especial para líquidos'),
        T('Que {-ַיִם} es el dual, usado colectivamente'),
        T('Que la palabra es femenina porque termina en {-ִים}'),
        T('Que es un numeral, no un sustantivo'),
      ],
      answer: 1,
      hint: T('Regla §4: {-ַיִם} marca dos — aquí usado para un conjunto.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Todo sustantivo hebreo es masculino o femenino: no hay neutro, y el género nunca indica sexo ni naturaleza.',
      ),
    },
    {
      n: '2',
      text: T(
        'La terminación no decide el género: {-ֶת} aparece en {מֶלֶךְ} (masc.) y {-ַיִם} en {מַיִם} (fem.). En la duda, mira el plural.',
      ),
    },
    {
      n: '3',
      text: T('Plural masculino {-ִים}, plural femenino {-וֹת}: {מֶלֶךְ} → {מְלָכִים}, {מַלְכָּה} → {מְלָכוֹת}.'),
    },
    {
      n: '4',
      text: T(
        'El dual {-ַיִם} marca exactamente dos: {עֵינַיִם} «ojos», {רַגְלַיִם} «pies», {שָׁמַיִם} «cielos», {מַיִם} «aguas».',
      ),
    },
    {
      n: '5',
      text: T(
        'El número concuerda con el adjetivo y con el verbo: {מְלָכִים טוֹבִים} «reyes buenos» (pl. masc.), {מְלָכוֹת טוֹבוֹת} «reinas buenas» (pl. fem.).',
      ),
    },
  ],
  notes: [
    {
      label: T('Cuidado:'),
      text: T(
        'Muchos principiantes traducen {מַלְכָּה} como «rey» cuando el contexto es neutral en cuanto al género. Recuerda que {מֶלֶךְ}/{מַלְכָּה} es el par rey/reina y que {אִישׁ}/{אִשָּׁה} es hombre/mujer: son dos pares independientes, no sinónimos. El plural {אֲנָשִׁים} puede traducirse como «hombres» o «gente» según el verbo.',
      ),
    },
    {
      label: T('Para el capítulo siguiente:'),
      text: T(
        'Saber el género de un sustantivo es lo que permite que el adjetivo concuerde. En el capítulo 4 verás que {טוֹבָה} concuerda con {מַלְכָּה} pero no con {מֶלֶךְ}, y que el artículo {הַ} se repite en ambos cuando el sustantivo es determinado.',
      ),
    },
  ],
  examples: [
    { text: '{מֶלֶךְ}', gloss: T('rey (masc.) → {מַלְכָּה} reina (fem.)') },
    { text: '{סוּסִים}', gloss: T('caballos (pl. masc. de {סוּס})') },
    { text: '{יָמִים}', gloss: T('días (pl. masc. de {יוֹם})') },
    { text: '{מְלָכוֹת}', gloss: T('reinas (pl. fem. de {מַלְכָּה})') },
    { text: '{נָשִׁים}', gloss: T('mujeres — plural irregular de {אִשָּׁה}') },
    { text: '{בָּנוֹת}', gloss: T('hijas — la {ו} cierra la última sílaba de {בַּת}') },
    { text: '{שָׁמַיִם}', gloss: T('cielos — dual, usado también como plural') },
    { text: '{מַיִם}', gloss: T('aguas — dual colectivo, con sonido de {y}') },
    { text: '{רַגְלַיִם}', gloss: T('pies (dual) — vuelve en el Salmo 110:1 ({לְרַגְלֶיךָ})') },
    { text: '{חֶסֶד}', gloss: T('amor firme — termina en {-ֶת} pero es MASCULINO') },
    { text: '{אֲנָשִׁים}', gloss: T('gente — plural de {אָדָם}, con nombre propio') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Cómo averiguar el género'),
      head: [T('Pista'), T('Masculino'), T('Femenino')],
      rows: [
        [T('Terminación'), '{מֶלֶךְ} {סוּס} {יוֹם} {דָּבָר}', '{מַלְכָּה} {אִשָּׁה} {לָשׁוֹן} {תּוֹרָה}'],
        [T('Plural'), '{-ִים}', '{-וֹת}'],
        [T('Artículo'), '{הַמֶּלֶךְ} {הַיּוֹם}', '{הַמַּלְכָּה} {הַתּוֹרָה}'],
        [T('Atención'), '{חֶסֶד} (termina em -ֶת!)', '{שָׁמַיִם} (vogais de água!)'],
      ],
    },
    {
      caption: T('Tabla 2 — Número: singular, dual y plural'),
      head: [T('Lema'), T('Singular'), T('Dual'), T('Plural')],
      rows: [
        ['{מֶלֶךְ}', '{מֶלֶךְ}', '{שְׁנֵי מְלָכִים}', '{מְלָכִים}'],
        ['{סוּס}', '{סוּס}', '{סֻסַּיִם}', '{סוּסִים}'],
        ['{אִשָּׁה}', '{אִשָּׁה}', '{שְׁתֵּי נָשִׁים}', '{נָשִׁים}'],
        ['{שָׁמַיִם}', '{שָׁמַיִם}', '—', '—'],
        ['{מַיִם}', '{מַיִם}', '—', '—'],
      ],
    },
    {
      caption: T('Tabla 3 — Plurales irregulares que volverás a encontrar'),
      head: [T('Singular'), T('Glosa'), T('Plural'), T('Glosa')],
      rows: [
        ['{אִשָּׁה}', T('mujer'), '{נָשִׁים}', T('mujeres')],
        ['{בַּיִת}', T('casa'), '{בָּתִּים}', T('casas')],
        ['{עִיר}', T('ciudad'), '{עָרִים}', T('ciudades')],
        ['{אָדָם}', T('ser humano'), '{אֲנָשִׁים}', T('gente')],
        ['{בֵּן}', T('hijo'), '{בָּנִים}', T('hijos')],
        ['{דֶּרֶךְ}', T('camino'), '{דְּרָכִים}', T('caminos')],
      ],
    },
  ],
};
