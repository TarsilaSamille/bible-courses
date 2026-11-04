import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  title: T('Calendario y tiempo'),
  subtitle: T('שַׁבָּת, חֹדֶשׁ, מוֹעֵד — el tiempo de Israel'),
  section: T('Preposiciones, comparación, preguntas y tiempo'),
  body: C(`## La semana termina en el sábado

Los hebreos numeraban los días de otra manera: {יוֹם רִאשׁוֹן} «primer día» (domingo) · {יוֹם שֵׁנִי} «segundo» · {יוֹם שְׁלִישִׁי} «tercero» · {יוֹם רְבִיעִי} «cuarto» · {יוֹם חֲמִישִׁי} «quinto» · {יוֹם שִׁשִּׁי} «sexto» (viernes, el día de preparación) · {שַׁבָּת} «sábado», el séptimo día.

La palabra {שַׁבָּת} viene de {שָׁבַת} «cesar»: el día en que el trabajo se detiene. Por eso la semana bíblica **termina** en el día de descanso y **empieza** en la preparación, al revés que la nuestra.

## El día se divide en partes

{בֹּקֶר} «mañana» · {צָהֳרַיִם} «mediodía» · {עֶרֶב} «tarde» · {לַיְלָה} «noche».

El estribillo del Génesis 1 es la clave: {וַיְהִי־עֶרֶב וַיְהִי־בֹקֶר} «y fue tarde y fue mañana» (Gn 1.5). Fíjate en el orden: el día hebreo **nace al anochecer**. En 1.5, Dios llamó {יוֹם} «día» a lo que vino antes de la puesta del sol, y {לַיְלָה} «noche» a lo que vino después. Por eso las fiestas judías empiezan en la víspera.

## Los doce meses

Los nombres son babilónicos: Israel adoptó el calendario en el exilio:

1 {נִיסָן} (Pascua) · 2 {אִיָּר} · 3 {סִיוָן} · 4 {תַּמּוּז} · 5 {אָב} · 6 {אֱלוּל}

7 {תִּשְׁרִי} (año nuevo) · 8 {מַרְחֶשְׁוָן} · 9 {כִּסְלֵו} · 10 {טֵבֵת} · 11 {שְׁבָט} · 12 {אֲדָר} (Purim)

La Biblia solo nombra los seis primeros; los otros seis se reconstruyeron a partir del calendario que tom forma tras el exilio. {אֲדָר} aparece en Est 13.7; {כִּסְלֵו} es el noveno mes, y {שְׁבָט} es el mes en que se registraban las familias.

## Año, luna nueva y fiestas

{חֹדֶשׁ} significa a la vez «mes» y «luna nueva»: {בְּרֹאשׁ חֹדֶשׁ} «en la luna nueva» (Sal 81.4). {שָׁנָה} es «año», y {רֹאשׁ הַשָּׁנָה} «principio del año» puede ser tanto el año civil como el día de la trompa (Lv 25.13).

{מוֹעֵד} es la palabra de «tiempo señalado»: {מוֹעֲדֵי יְהוָה} «los tiempos señalados del SEÑOR» (Lv 23.11) da nombre a la sección del Levítico que enumera la Pascua, {חֲגִיג} y el {חֲלוֹנִים} de otoño.

## Las estaciones

No hay una sola palabra para «estación»: el hebreo prefiere sustantivos. {גַּשֶּם} «lluvia» · {חָרֶב} «calor» (verano) · {חֹרֶף} «cosecha» (otoño) · {צֵר} «frío» (invierno). Y el tiempo medido por sí mismo: {עֵת} «momento» · {פָּעַל} «ocasión» · {אֶפֶל} «oscuridad».

La palabra más común para «hoy» es {הַיּוֹם} «el día»; y {מֵאָחֹר} es «después», igual que {לִפְנֵי} es «antes» (también una forma de sustantivo: «frente»).

## Cómo entra el tiempo en la cláusula

El hebreo construye adverbios de tiempo a partir de sustantivos: {עַתָּה} «ahora» · {הָאִתָּה} «hoy» · {מֵחָר} «mañana» · {תְּמוֹל} «ayer» · {עֶרֶב} «más tarde».

Y para el tiempo pasado: {לִפְנֵי} puede ser «antes» (en el tiempo) y «delante de» (en el espacio), una polisemia que los traductores resuelven por el verbo que sigue.

## Un mapa de las palabras del tiempo

{יוֹם} día · {לַיְלָה} noche · {בֹּקֶר} mañana · {עֶרֶב} tarde · {צָהֳרַיִם} mediodía · {שָׁנָה} año · {חֹדֶשׁ} mes y luna nueva · {עֵת} tiempo, ocasión · {מוֹעֵד} tiempo señalado, fiesta.

Si aprendes estas diez, puedes leer la cronología de cualquier página de la Biblia: fechas, duraciones, aniversarios y fiestas.`),
  vocab: [
    V('שַׁבָּת', 'שַׁבָּת', 'sábado, descanso'),
    V('יוֹם רִאשׁוֹן', 'רִאשׁוֹן', 'primer día (domingo)'),
    V('יוֹם שִׁשִּׁי', 'שִׁשִּׁי', 'sexto día (viernes)'),
    V('בֹּקֶר', 'בֹּקֶר', 'mañana'),
    V('עֶרֶב', 'עֶרֶב', 'tarde, atardecer'),
    V('לַיְלָה', 'לַיְלָה', 'noche'),
    V('צָהֳרַיִם', 'צָהֳרַיִם', 'mediodía'),
    V('נִיסָן', 'נִיסָן', 'Nisán (mes de la Pascua)'),
    V('תִּשְׁרִי', 'תִּשְׁרִי', 'Tishrí (año nuevo)'),
    V('אֲדָר', 'אֲדָר', 'Adar (Purim)'),
    V('חֹדֶשׁ', 'חֹדֶשׁ', 'mes, luna nueva'),
    V('מוֹעֵד', 'מוֹעֵד', 'fiesta, tiempo señalado'),
    V('שָׁנָה', 'שָׁנָה', 'año'),
    V('עֵת', 'עֵת', 'tiempo, ocasión'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Por qué la semana hebrea termina en el «sábado»?'),
    options: [
      T('Porque shabat viene de «cesar» (Gn 2.2)'),
      T('Porque es el día de la luna llena'),
      T('Por casualidad'),
      T('Porque tiene ocho letras'),
    ],
    answer: 0,
    hint: T('{שַׁבָּת} viene de la raíz {שׁבת} «descansar, cesar».'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Relaciona el nombre del tiempo con su glosa.'),
      pairs: [
        { a: '{בֹּקֶר}', b: T('mañana') },
        { a: '{עֶרֶב}', b: T('tarde') },
        { a: '{צָהֳרַיִם}', b: T('mediodía') },
        { a: '{לַיְלָה}', b: T('noche') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('En Génesis 1.5, ¿qué revela que el día hebreo empieza al anochecer?'),
      options: [
        T('El orden «y fue tarde y fue mañana»'),
        T('La palabra {יוֹם} aparece antes que {לַיְלָה}'),
        T('La ausencia del artículo {הַ}'),
        T('El uso del singular {עֶרֶב}'),
      ],
      answer: 0,
      hint: T('Regla §1: {עֶרֶב} + {בֹּקֶר} = un día entero.'),
    },
    {
      kind: 'fill',
      prompt: T('Escribe el séptimo mes del calendario hebreo, el mes del año nuevo.'),
      answer: 'תִּשְׁרִי',
      hint: T('Empieza por {ת}, lleva {ִ} al inicio y termina en {רִי}.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué palabra significa «fiesta» o «tiempo señalado»?'),
      options: [T('מוֹעֵד'), T('עֵת'), T('חֹדֶשׁ'), T('שָׁנָה')],
      answer: 0,
      hint: T('{מוֹעֲדֵי יְהוָה} «los tiempos señalados del SEÑOR» es la expresión de Levítico 23.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('El día hebreo empieza al anochecer: {עֶרֶב} + {בֹּקֶר} forman un día (Gn 1.5).'),
    },
    {
      n: '2',
      text: T('El sábado es el séptimo día y el día de descanso: {שַׁבָּת} viene de {שָׁבַת} «cesar».'),
    },
    { n: '3', text: T('{חֹדֶשׁ} significa «mes» y «luna nueva»: {בְּרֹאשׁ חֹדֶשׁ} «en la luna nueva».') },
    {
      n: '4',
      text: T(
        '{מוֹעֵד} es «tiempo señalado»: {מוֹעֲדֵי יְהוָה} «los tiempos señalados del SEÑOR» (Lv 23.11).',
      ),
    },
    {
      n: '5',
      text: T(
        '{לִפְנֵי} significa «antes» (tiempo) y «delante de» (espacio): el verbo siguiente decide la lectura.',
      ),
    },
  ],
  notes: [
    {
      label: T('Exégesis:'),
      text: T(
        'Contar el día desde el anochecer cambia la lectura de las fechas. Cuando Levítico 23.17 dice «el decimoquinto día del séptimo mes», el día empezó en la víspera: las fiestas del 15-22 de Av empiezan con la puesta del sol del día 14. Toda la cronología bíblica sigue ese reloj, y por eso la Pascua de Jesús — «el decimocuarto día de nisán» — se cuenta en noches y días, no en horas de reloj.',
      ),
    },
    {
      label: T('Dato curioso:'),
      text: T(
        'Los nombres de los meses son una lección de historia del exilio. Israel adoptó nombres babilónicos porque fue en Babilonia donde aprendió a contar los años: el calendario babilónico era mucho más preciso, con {בֶּת שַׁנִים} «años de Nabu» para la cuenta ininterrumpida. El hebreo moderno conserva los dos: {יולי} junto a {תמוז}, como herencia y como conquista.',
      ),
    },
  ],
  examples: [
    { text: '{שַׁבָּת}', gloss: T('sábado — séptimo día, de {שָׁבַת} «cesar»') },
    { text: '{יוֹם רִאשׁוֹן}', gloss: T('primer día (domingo)') },
    { text: '{יוֹם שִׁשִּׁי}', gloss: T('sexto día (viernes, preparación del sábado)') },
    { text: '{וַיְהִי־עֶרֶב וַיְהִי־בֹקֶר}', gloss: T('y fue tarde y fue mañana (Gn 1.5)') },
    { text: '{בֹּקֶר}', gloss: T('mañana — {בֹּקֶר יוֹם} «mañana del día»') },
    { text: '{עֶרֶב}', gloss: T('tarde — también «el día siguiente»') },
    { text: '{צָהֳרַיִם}', gloss: T('mediodía (dual)') },
    { text: '{נִיסָן}', gloss: T('primer mes, el mes de la Pascua') },
    { text: '{אֲדָר}', gloss: T('mes duodécimo, mes de Purim (Est 13.7)') },
    { text: '{חֹדֶשׁ}', gloss: T('mes y luna nueva — {בְּרֹאשׁ חֹדֶשׁ} «en la luna nueva» (Sal 81.4)') },
    { text: '{שָׁנָה}', gloss: T('año — {שְׁנַת} «año de» en constructo') },
    { text: '{מוֹעֵד}', gloss: T('tiempo señalado, fiesta — {מוֹעֲדֵי יְהוָה} (Lv 23.11)') },
    { text: '{עֵת}', gloss: T('tiempo, ocasión — raíz de {עַתָּה} «ahora»') },
    { text: '{מֵחָר}', gloss: T('mañana — {הָאִתָּה} «hoy» viene de {יוֹם} «día»') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Los días de la semana'),
      head: [T('Orden'), T('Nombre hebreo'), T('Equivalente')],
      rows: [
        ['1', '{יוֹם רִאשׁוֹן}', T('domingo')],
        ['2', '{יוֹם שֵׁנִי}', T('lunes')],
        ['3', '{יוֹם שְׁלִישִׁי}', T('martes')],
        ['4', '{יוֹם רְבִיעִי}', T('miércoles')],
        ['5', '{יוֹם חֲמִישִׁי}', T('jueves')],
        ['6', '{יוֹם שִׁשִּׁי}', T('viernes (preparación)')],
        ['7', '{שַׁבָּת}', T('sábado (descanso)')],
      ],
    },
    {
      caption: T('Tabla 2 — Los doce meses'),
      head: [T('N.º'), T('Mes'), T('Nombre en el Tanaj')],
      rows: [
        ['1', '{נִיסָן}', T('Pascua, primer mes (Ex 12.2)')],
        ['2', '{אִיָּר}', T('mencionado en Esd 7.9')],
        ['3', '{סִיוָן}', T('tercer mes (Esd 9.7)')],
        ['4', '{תַּמּוּז}', T('cuarto mes (2 Sm 24.15)')],
        ['5', '{אָב}', T('quinto mes (Est 7.2)')],
        ['6', '{אֱלוּל}', T('sexto mes (Ag 1.1)')],
        ['7', '{תִּשְׁרִי}', T('año nuevo, séptimo mes')],
        ['8', '{מַרְחֶשְׁוָן}', T('octavo mes')],
        ['9', '{כִּסְלֵו}', T('noveno mes (Jr 36.22)')],
        ['10', '{טֵבֵת}', T('décimo mes')],
        ['11', '{שְׁבָט}', T('registro de familias (1 Cr 26.1)')],
        ['12', '{אֲדָר}', T('Purim (Est 13.7)')],
      ],
    },
    {
      caption: T('Tabla 3 — Partes del día y del año'),
      head: [T('Concepto'), T('Palabra'), T('Glosa')],
      rows: [
        [T('Mañana'), '{בֹּקֶר}', T('mañana; también «nuevo día»')],
        [T('Mediodía'), '{צָהֳרַיִם}', T('mediodía (dual)')],
        [T('Tarde'), '{עֶרֶב}', T('tarde; también «el día siguiente»')],
        [T('Noche'), '{לַיְלָה}', T('noche')],
        [T('Mes / luna nueva'), '{חֹדֶשׁ}', T('mes y luna nueva')],
        [T('Año'), '{שָׁנָה}', T('año')],
        [T('Fiesta'), '{מוֹעֵד}', T('tiempo señalado, fiesta')],
      ],
    },
  ],
};
