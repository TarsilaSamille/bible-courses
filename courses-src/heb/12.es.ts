import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('Los numerales'),
  subtitle: T('שִׁבְעָה — el número de la plenitud y de la semana'),
  section: T('Verbo y numeral'),
  body: C(`## La regla de la polaridad

Los numerales cardinales del 1 al 10 tienen dos formas por número: absoluta y constructa. Y hay una regla de género que asusta a los principiantes pero que es puramente mecánica:

Los números **1 y 2** son normales: {אֶחָד} «uno» (masc.) y {אַחַת} «una» (fem.); {שְׁנַיִם} «dos» (masc.) y {שְׁתֵּי} «dos» (fem.).

Los números **3 a 10** se invierten: la forma masculina es {שְׁלֹשָׁה}, {אַרְבָּעָה}, {חֲמִשָּׁה}…, y la femenina es {שְׁלֹשׁ}, {אַרְבָּע}… Es decir: para contar sustantivos masculinos usas la forma **femenina**, y para contar femeninos la masculina. Casi todo numeral de la Biblia concuerda con un sustantivo masculino, así que la Biblia usa casi siempre formas femeninas. Por eso {שִׁבְעָה} «siete», una palabra «femenina», es la que todo el mundo asocia a la plenitud.

## Absoluto y constructo

Cuando el numeral va **solo**, aparece en estado absoluto y conserva la vocal final: {שִׁבְעָ֖ה} «siete».

Cuando va **delante** de un sustantivo, entra en constructo y cae la vocal final: {שֶׁ֥בַע} + {שָׁבָ֖עַ} = {שֶׁ֥בַע שָׁבָעַ} «siete sabats». Compáralo con el sustantivo abstracto: {יוֹם אֶחָד} «un día» (cap. 3).

Un detalle poético: el orden se invierte a menudo y las palabras reciben maqaf — {שֵׁשֶׁת־יָמִים} «seis días» (Ex 20.11), {שְׁנֵי־הַלְוִיִּם} «los dos levitas».

## Ordinales

Los ordinales se forman con {י} y terminan en {ִי}: {רִאשׁוֹן} «primero», {שֵׁנִי} «segundo», {שְׁלִישִׁי} «tercero», {רְבִיעִי} «cuarto», {חֲמִישִׁי} «quinto», {שִׁשִּׁי} «sexto», {שְׁבִיעִי} «séptimo», {שְׁמִינִי} «octavo», {תְּשִׁיעִי} «noveno», {עֲשִׂירִי} «décimo». El femenino añade {ת}: {שְׁנִית}, {שְׁלִישִׁית}.

El ordinal lleva artículo cuando indica posición: {בַּיּוֹם הַשְּׁבִיעִי} «en el séptimo día» (Gn 2.2). Y está el uso curioso del cardinal como ordinal: {יוֹם אֶחָד} «día uno» en Gn 1.5 significa literalmente «el primer día».

## Decenas, centenas, millares

Las decenas son regulares: {עֶשְׂרִים} 20, {שְׁלֹשִׁים} 30, {אַרְבָּעִים} 40, {חֲמִשִּׁים} 50, {שִׁשִּׁים} 60, {שִׁבְעִים} 70, {שְׁמֹנִים} 80, {תִּשְׁעִים} 90.

A partir del 11, sin embargo, la unidad va **después**: {אַחַד־עֶשֶׂר} 11, {שְׁנֵים־עֶשֶׂר} 12, {שְׁלֹשָׁה־עֶשֶׂר} 13, {אַרְבָּעָה־עֶשֶׂר} 14, {חֲמִשָּׁה־עֶשֶׂר} 15, {שִׁשָּׁה־עֶשֶׂר} 16, {שִׁבְעָה־עֶשֶׂר} 17, {שְׁמֹנָה־עֶשֶׂר} 18, {תִּשְׁעָה־עֶשֶׂר} 19.

Y hay un truco antiguo: de 21 a 39, de 41 a 59 y así sucesivamente, la decena termina en {י} y la unidad lleva {ה} — {אֶחָד וּשְׁלֹשִׁים} «treinta y uno». Desde el 41, la unidad suele terminar en {ים}: {אַרְבָּעִים וְאֶחָד} «cuarenta y uno».

Centenas y millares: {מֵאָה} 100, {מֵאַת} «doscientas», {אֶלֶף} 1000, {אַלְפֵי יִשְׂרָאֵל} «los miles de Israel», {רִבְּבוֹת} «diez millares» y {רְאוֹת} «cientos de millares».

## Los números como raíces verbales

Una curiosidad que explica muchas cosas: los numerales del 1 al 10 son también **raíces verbales** en el piel, y el verbo significa «hacer tal número de veces». {הִקְטִירוּ} «ofrecieron» viene de {קטר} «humo» más el número 2: {שְׁנַיִם} + {קטר}. {עֲשָׂרֶת} «diez» + {יד} es literalmente «diez manos» = «mató» ({הָעָשָׂרָה}). Es el mecanismo eupónico: un número más un sustantivo produce un verbo.

## El siete en el Tanaj

{שִׁבְעָה} «siete» aparece más de 240 veces en contexto religioso: siete días de creación, siete tronos en Daniel 7, siete trompetas en Apocalipsis, el {שְׁבִיעִי} del sábado. La raíz {שׁבע} significa «ser completo» y también «jurar», y el sábado, el séptimo día, es el día de la plenitud. Guarda el siete: es el número más simbólicamente cargado de la Escritura.`),
  vocab: [
    V('אֶחָד', 'אֶחָד', 'uno'),
    V('אַחַת', 'אַחַת', 'una (fem.)'),
    V('שְׁנַיִם', 'שְׁנַיִם', 'dos'),
    V('שְׁתֵּי', 'שְׁתֵּי', 'dos (fem.)'),
    V('שִׁבְעָה', 'שִׁבְעָה', 'siete'),
    V('שֵׁשֶׁת־יָמִים', 'שֵׁשׁ', 'seis días'),
    V('הַשְּׁבִיעִי', 'שְׁבִיעִי', 'el séptimo'),
    V('עֲשָׂרָה', 'עֲשָׂרָה', 'diez'),
    V('שְׁלֹשָׁה', 'שְׁלֹשָׁה', 'tres'),
    V('שַׁבָּת', 'שַׁבָּת', 'sábado'),
    V('מֵאָה', 'מֵאָה', 'cien'),
    V('אֶלֶף', 'אֶלֶף', 'mil'),
    V('רִאשׁוֹן', 'רִאשׁוֹן', 'primero'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('¿Cómo se dice «siete» en hebreo (forma absoluta)?'),
    answer: 'שִׁבְעָה',
    hint: T('Empieza por šin y termina en he; es la forma usada para contar hombres.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Relaciona el número con su forma absoluta masculina.'),
      pairs: [
        { a: T('tres'), b: '{שְׁלֹשָׁה}' },
        { a: T('siete'), b: '{שִׁבְעָה}' },
        { a: T('diez'), b: '{עֲשָׂרָה}' },
        { a: T('dos'), b: '{שְׁנַיִם}' },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo se dice «tres mujeres»?'),
      options: [T('{שְׁלֹשׁ נָשִׁים}'), T('{שְׁלֹשָׁה אִשָּׁה}'), T('{שְׁלֹשָׁה נָשִׁים}'), T('{שֶׁלֹשׁ נָשִׁים}')],
      answer: 2,
      hint: T('Regla §1: {נָשִׁים} es femenino, así que el numeral usa la forma masculina {שְׁלֹשָׁה}.'),
    },
    {
      kind: 'choose',
      prompt: T('En «שֶׁבַע שָׁבָעַ» («siete sabats»), {שֶׁבַע} está:'),
      options: [
        T('en estado absoluto'),
        T('en estado constructo (perdió la {ָ})'),
        T('en plural'),
        T('en femenino'),
      ],
      answer: 1,
      hint: T('Regla §2: el numeral ante un sustantivo entra en constructo.'),
    },
    {
      kind: 'fill',
      prompt: T('Escribe el ordinal «séptimo» con artículo.'),
      answer: 'הַשְּׁבִיעִי',
      hint: T('Base {שְׁבִיעִי} + el artículo {הַ} con dageš fuerte en la {ש}.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Del 3 al 10 el numeral toma el género opuesto al sustantivo: para contar varones, usa la forma femenina ({שִׁבְעָה} cuenta hombres).',
      ),
    },
    {
      n: '2',
      text: T(
        'El numeral ante un sustantivo entra en constructo y pierde la vocal final: {שֶׁבַע שָׁבָעַ} «siete sabats».',
      ),
    },
    {
      n: '3',
      text: T(
        'El dual es el numeral dos: {שְׁנַיִם} (masc.) y {שְׁתֵּי} (fem.); las formas absolutas de 1 y 2 son irregulares.',
      ),
    },
    { n: '4', text: T('Del 11 al 20 la unidad va después, unida por maqaf: {חֲמִשָּׁה־עֶשֶׂר} «quince».') },
    {
      n: '5',
      text: T(
        'Los ordinales terminan en {ִי} (masc.) o {ִית} (fem.) y llevan artículo cuando indican posición: {הַשְּׁבִיעִי}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Cuidado:'),
      text: T(
        'Muchos traductores colocan el numeral antes del sustantivo por razones de estilo, produciendo construcciones erróneas. El orden hebreo es sustantivo + numeral, o numeral + sustantivo con maqaf cuando es poético. Atención a la polaridad: si el sustantivo es femenino, el numeral del 3 al 10 toma la forma **masculina** — {שְׁלֹשָׁה נָשִׁים} «tres mujeres», y no {שְׁלֹשׁ}.',
      ),
    },
    {
      label: T('El siete y el descanso:'),
      text: T(
        'La raíz {שׁבע} significa «ser completo» y da {שַׁבָּת} «sábado», {שָׁבוּעַ} «semana» y {שְׁבוּעָה} «juramento». La semana hebrea no termina el domingo: termina el sábado, el día en que Dios «descansó». Por eso el siete es también el número del descanso y del juramento: contar por semanas es contar por plenitudes.',
      ),
    },
  ],
  examples: [
    { text: '{אֶחָד}', gloss: T('uno (masc. abs.)') },
    { text: '{אַחַת}', gloss: T('una (fem. abs.)') },
    { text: '{שְׁנַיִם}', gloss: T('dos (masc.) — forma dual') },
    { text: '{שְׁתֵּי}', gloss: T('dos (fem.) — {שְׁ־תֵּי}') },
    { text: '{שִׁבְעָה}', gloss: T('siete (abs. masc.) — la forma usada para contar hombres') },
    { text: '{שֶׁבַע}', gloss: T('siete (constructo) — misma palabra sin vocal final') },
    { text: '{שֵׁשֶׁת־יָמִים}', gloss: T('seis días (Ex 20.11) — numeral en constructo + maqaf') },
    { text: '{הַשְּׁבִיעִי}', gloss: T('el séptimo (con artículo) — Gn 2.2') },
    { text: '{יוֹם אֶחָד}', gloss: T('día uno = el primer día (Gn 1.5)') },
    { text: '{חֲמִשָּׁה־עֶשֶׂר}', gloss: T('quince — unidad + diez con maqaf') },
    { text: '{אַרְבָּעִים וְאֶחָד}', gloss: T('cuarenta y uno — {י} en la decena') },
    { text: '{מֵאַת}', gloss: T('doscientas — dual de {מֵאָה}') },
    { text: '{שַׁבָּת}', gloss: T('sábado — del séptimo día, día de descanso (Ex 20.11)') },
    { text: '{הָעָשָׂרָה}', gloss: T('mató — {עֲשָׂרֶת} «diez» + {יד} «mano»') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Del 1 al 10: absoluto, constructo y el truco del género'),
      head: [
        T('N'),
        T('Absoluto (masc.)'),
        T('Absoluto (fem.)'),
        T('Constructo (masc.)'),
        T('Constructo (fem.)'),
      ],
      rows: [
        ['1', '{אֶחָד}', '{אַחַת}', '{אֶחָד}', '{אַחַת}'],
        ['2', '{שְׁנַיִם}', '{שְׁתֵּי}', '{שְׁנֵי}', '{שְׁתֵּי}'],
        ['3', '{שְׁלֹשָׁה}', '{שְׁלֹשׁ}', '{שְׁלֹשׁ}', '{שְׁלֹשׁ}'],
        ['4', '{אַרְבָּעָה}', '{אַרְבָּע}', '{אַרְבָּע}', '{אַרְבָּע}'],
        ['5', '{חֲמִשָּׁה}', '{חֲמֵשׁ}', '{חֲמֵשׁ}', '{חֲמֵשׁ}'],
        ['6', '{שִׁשָּׁה}', '{שֵׁשׁ}', '{שֵׁשׁ}', '{שֵׁשׁ}'],
        ['7', '{שִׁבְעָה}', '{שֶׁבַע}', '{שֶׁבַע}', '{שֶׁבַע}'],
        ['8', '{שְׁמֹנָה}', '{שְׁמֹנֶה}', '{שְׁמֹנֶה}', '{שְׁמֹנֶה}'],
        ['9', '{תִּשְׁעָה}', '{תֵּשַׁע}', '{תֵּשַׁע}', '{תֵּשַׁע}'],
        ['10', '{עֲשָׂרָה}', '{עֲשֶׂרֶת}', '{עֲשֶׂר}', '{עֲשֶׂרֶת}'],
      ],
    },
    {
      caption: T('Tabla 2 — Ordinales, con y sin artículo'),
      head: [T('N'), T('Ordinal masc.'), T('Ordinal fem.'), T('Con artículo')],
      rows: [
        ['1', '{רִאשׁוֹן}', '{רִאשׁוֹנָה}', '{הָרִאשׁוֹן}'],
        ['2', '{שֵׁנִי}', '{שְׁנִית}', '{הַשֵׁנִי}'],
        ['3', '{שְׁלִישִׁי}', '{שְׁלִישִׁית}', '{הַשְּׁלִישִׁי}'],
        ['6', '{שִׁשִּׁי}', '{שִׁשִּׁית}', '{הַשִּׁשִּׁי}'],
        ['7', '{שְׁבִיעִי}', '{שְׁבִיעִית}', '{הַשְּׁבִיעִי}'],
        ['10', '{עֲשִׂירִי}', '{עֲשִׂירִית}', '{הָעֲשִׂירִי}'],
      ],
    },
    {
      caption: T('Tabla 3 — Decenas, centenas y millares'),
      head: [T('Valor'), T('Forma'), T('Glosa')],
      rows: [
        ['11', '{אַחַד־עֶשֶׂר}', T('once')],
        ['12', '{שְׁנֵים־עֶשֶׂר}', T('doce')],
        ['17', '{שִׁבְעָה־עֶשֶׂר}', T('diecisiete')],
        ['20', '{עֶשְׂרִים}', T('veinte')],
        ['30', '{שְׁלֹשִׁים}', T('treinta')],
        ['31', '{אֶחָד וּשְׁלֹשִׁים}', T('treinta y uno')],
        ['41', '{אַרְבָּעִים וְאֶחָד}', T('cuarenta y uno')],
        ['100', '{מֵאָה}', T('cien')],
        ['200', '{מֵאַת}', T('doscientas (dual)')],
        ['1000', '{אֶלֶף}', T('mil')],
        ['10.000', '{רִבְּבוֹת}', T('diez millares')],
      ],
    },
  ],
};
