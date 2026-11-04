import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  title: T('El numeral: cardinal y ordinal'),
  subtitle: T('אֶחָד שְׁנַיִם · רִאשׁוֹן שֵׁנִי — dos series que no se mezclan'),
  section: T('Numeral'),
  body: C(`## Dos series construidas al revés

El hebreo tiene dos sistemas de número, y están hechos de maneras opuestas. El cardinal responde «¿cuántos?» y el ordinal responde «¿cuál?»:

{אֶחָד} «uno» · {שְׁנַיִם} «dos» · {שִׁבְעָה} «siete» · {מֵאָה} «cien»

{רִאשׁוֹן} «primero» · {שֵׁנִי} «segundo» · {שְׁלִישִׁי} «tercero» · {עֲשִׂירִי} «décimo»

Los cardinales son sustantivos: cuentan. Los ordinales son adjetivos: caracterizan. Por eso el ordinal necesita un sustantivo al que pegarse, y el sustantivo viene **después**: {הַשְּׁבִיעִי} «el séptimo» es {הַ} + {שְׁבִיעִי}, que solo significa algo junto a {יוֹם}, {לֵילָה} o {מוֹעֵד}.

La terminación es el atajo. Todo ordinal por encima de diez termina en {ִי} en el masculino y en {ִית} en el femenino, y esa regularidad es tan apretada que el sufijo basta para identificar la serie. Ningún cardinal tiene esa terminación.

## El cardinal cuando no cuenta

El nombre de la serie sugiere que {שִׁבְעָה} «siete» solo sirve para siete cosas. No es así: el cardinal tiene tres usos que no son conteo, y aparecen más que la cuenta pura.

Primero, se vuelve **adjetivo de unicidad**. {אֶחָד} «uno» aplicado a un sustantivo significa «único, solo»: {אֶחָד מִכֹּל} «único entre todos». Y {אֶחָד} solo, sin sustantivo, ya significa «únicamente, por sí solo». Quien traduce al pie de la letra escribe «uno» y el sentido se pierde.

Segundo, **sustituye el nombre**. Cuando el número designa un grupo entero, el sustantivo puede quedarse fuera y el numeral dice el grupo: {הָאֶחָד} «el único» nombra a un pueblo sin repetir su nombre. El número hace el trabajo que en griego hace el artículo definido.

Tercero, marca **posición en una serie**, y no cantidad. {יוֹם אֶחָד} «día uno», en Gn 1.5, significa «el primer día»: el cardinal está diciendo en qué lugar de la fila está el día, y la cuenta literal «un solo día» sería una lectura equivocada del mismo texto.

## {שְׁנַיִם} no es el dual

Este es el punto que más engaña a quien llega del latín, y vale ir despacio, porque la forma es engañosa.

El dual hebraico tiene una marca propia, el sufijo {־יִם}: {רַגְלַיִם} «los dos pies», {יָדַיִם} «las dos manos», {מַיִם} «aguas». El {ים} del dual es el final de la palabra.

{שְׁנַיִם} «dos» también termina en {ים}. Es esa coincidencia de forma la que produce el error. Pero {שְׁנַיִם} es numeral, y el sustantivo que lo sigue está en el **plural que la cosa contada tiene de todos modos**: {שְׁתֵּי נָשִׁים} «dos mujeres» tiene {נָשִׁים} en plural porque dos mujeres es plural. Si encuentras {שְׁנַיִם} o {שְׁתֵּי} delante de un sustantivo que ya es plural, es numeral. Si el sustantivo está en singular, no estás mirando un numeral.

Fíjate en que {אֶחָד} y {שְׁנַיִם} siguen al sustantivo en número: {יוֹם אֶחָד} «un día» y {שְׁתֵּי נָשִׁים} «dos mujeres». Desde {שְׁלֹשָׁה} en adelante el numeral tiene forma propia, como muestra {שְׁלֹשׁ} {נָשִׁים} «tres mujeres».

## Donde se encuentran las dos series

El encuentro más bonito del sistema es el ordinal como sustantivo. {רִאשׁוֹן} y {שֵׁנִי} dejan de ser adjetivos y pasan a nombrar la posición por sí solos: {הַשֵּׁנִי} «el segundo», {הָרִאשׁוֹן} «el primero». El hebreo lo hace sin esfuerzo, porque el {הַ} ya hace el trabajo del artículo definido y el sustantivo es el mismo que usa el cardinal.

Y está el caso inverso, en que la forma es de ordinal pero el sentido es de cardinal. {בִּשְׁלֹשִׁי} significa literalmente «en el tercero», y el contexto puede obligar a leer «en los tres días». Ninguno de los dos se resuelve sin el sustantivo a la vista.

Un detalle de orden que resuelve la mitad de los errores de traducción: el numeral va **antes** del sustantivo, y el sustantivo conserva el número que tiene. {שְׁנֵי־הַלְוִיִּם} «los dos levitas» no es «los levitas dos» ni «los dos levita»: el plural de {לְוִיִּם} es {לְוִיִּם}, y no cambia por el numeral que va delante.

El Sal 33 muestra las dos series en un solo verso: el salmista cuenta lo que Dios hace y luego nombra el orden, y el texto pasa de una serie a otra sin avisar. Si sigues la serie y no el sentido aparente de cada palabra, el verso va sin esfuerzo.`),
  vocab: [
    V('אֶחָד', 'אֶחָד', 'uno; único'),
    V('שְׁנַיִם', 'שְׁנַיִם', 'dos (numeral, m.)'),
    V('שְׁתֵּי', 'שְׁתֵּי', 'dos (numeral, f.)'),
    V('שִׁבְעָה', 'שִׁבְעָה', 'siete (cardinal m.)'),
    V('מֵאָה', 'מֵאָה', 'cien'),
    V('רִאשׁוֹן', 'רִאשׁוֹן', 'primero (ordinal m.)'),
    V('שֵׁנִי', 'שֵׁנִי', 'segundo (ordinal m.)'),
    V('שְׁלִישִׁי', 'שְׁלִישִׁי', 'tercero (ordinal m.)'),
    V('עֲשִׂירִי', 'עֲשִׂירִי', 'décimo (ordinal m.)'),
    V('הַשְּׁבִיעִי', 'שְׁבִיעִי', 'el séptimo'),
    V('הָעֲשִׂירִי', 'עֲשִׂירִי', 'el décimo'),
    V('אֶחָד מִכֹּל', 'אֶחָד', 'único entre todos'),
    V('הָאֶחָד', 'אֶחָד', 'el único (grupo)'),
    V('יוֹם אֶחָד', 'אֶחָד', 'día uno (= el primer día)'),
    V('שְׁנֵי־הַלְוִיִּם', 'שְׁנַיִם', 'los dos levitas'),
    V('שְׁתֵּי נָשִׁים', 'שְׁתֵּי', 'dos mujeres'),
    V('רַגְלַיִם', 'רֶגֶל', 'los dos pies (dual)'),
    V('יָדַיִם', 'יָד', 'las dos manos (dual)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {שְׁתֵּי נָשִׁים} «dos mujeres», ¿qué confirma que {שְׁתֵּי} es numeral y no sustantivo?'),
    options: [
      T('El sustantivo {נָשִׁים} está en el plural que tendría de todos modos'),
      T('La palabra termina en {ים}'),
      T('No hay artículo'),
      T('El sustantivo va antes del número'),
    ],
    answer: 0,
    hint: T('Regla §3: el numeral no cambia el número del sustantivo. Dos mujeres ya es plural.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Relaciona el número con la serie a la que pertenece.'),
      pairs: [
        { a: '{שִׁבְעָה}', b: T('cardinal') },
        { a: '{רִאשׁוֹן}', b: T('ordinal') },
        { a: '{מֵאָה}', b: T('cardinal') },
        { a: '{שְׁלִישִׁי}', b: T('ordinal') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Escribe el ordinal «séptimo» con artículo.'),
      answer: 'הַשְּׁבִיעִי',
      hint: T('{שְׁבִיעִי} con el artículo {הַ} y dageš fuerte en la {ש}.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Por qué {שְׁנַיִם} «dos» no es un dual?'),
      options: [
        T('Porque el {יִם} del dual aparece en {רַגְלַיִם} y {יָדַיִם}, y no en {שְׁנַיִם}'),
        T('Porque {שְׁנַיִם} tiene diez letras'),
        T('Porque el hebreo no tiene dual'),
        T('Porque {שְׁנַיִם} es un plural'),
      ],
      answer: 0,
      hint: T('Regla §3: numeral y dual terminan igual, pero el sustantivo siguiente lo denuncia.'),
    },
    {
      kind: 'choose',
      prompt: T('En Gn 1.5, ¿qué significa {יוֹם אֶחָד}?'),
      options: [
        T('«el primer día» — el cardinal marca posición en una serie'),
        T('«un solo día» — el cardinal significa «único»'),
        T('«el día entero»'),
        T('«el día de un hombre»'),
      ],
      answer: 0,
      hint: T('Regla §2: el cardinal {אֶחָד} también puede marcar posición.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El cardinal ({אֶחָד}, {שִׁבְעָה}, {מֵאָה}) cuenta; el ordinal ({רִאשׁוֹן}, {שְׁלִישִׁי}, {עֲשִׂירִי}) caracteriza y exige un sustantivo después.',
      ),
    },
    {
      n: '2',
      text: T(
        'El cardinal no es solo conteo: vale «único» ({אֶחָד מִכֹּל}) y puede marcar posición en una serie: {יוֹם אֶחָד} «día uno» = «el primer día».',
      ),
    },
    {
      n: '3',
      text: T(
        '{שְׁנַיִם} y {שְׁתֵּי} son numerales: el sustantivo que los sigue conserva su propio número. El dual tiene su {־יִם} propio ({רַגְלַיִם}, {יָדַיִם}, {מַיִם}).',
      ),
    },
    {
      n: '4',
      text: T(
        'Todo ordinal por encima de diez termina en {ִי} (masc.) o {ִית} (fem.): ese es el atajo para reconocer la serie.',
      ),
    },
    {
      n: '5',
      text: T(
        'El numeral va antes del sustantivo y no altera su número: {שְׁנֵי־הַלְוִיִּם} «los dos levitas».',
      ),
    },
  ],
  notes: [
    {
      label: T('Armadilha:'),
      text: T(
        'El {ים} de {שְׁנַיִם} es el origen de casi toda confusión. Quien llega del latín conoce los dos finales: {bini} «dos» y {manus} «mano» comparten uno, y el español hace lo mismo con «dos» y «manos». Quien reconoce que el final es el mismo en los dos casos mira el sustantivo que sigue y sabe en el acto cuál de los dos encontró.',
      ),
    },
    {
      label: T('Dato curioso:'),
      text: T(
        'Los dos cardinales irregulares, {אֶחָד} y {שְׁנַיִם}, son los únicos que también funcionan como pronombres personales. «Uno» y «dos» en hebreo son pronombres de tercera persona, cosa que el latín {singuli} no es, y por eso {אֶחָד} puede nombrar un grupo entero solo. Las lenguas romances hicieron el camino contrario: guardaron el numeral y perdieron el pronombre.',
      ),
    },
  ],
  examples: [
    { text: '{אֶחָד}', gloss: T('uno; también «único» y «solo»') },
    { text: '{שְׁנַיִם}', gloss: T('dos (masc.) — numeral, no dual') },
    { text: '{שְׁתֵּי}', gloss: T('dos (fem.) — numeral') },
    { text: '{שִׁבְעָה}', gloss: T('siete (cardinal masc.)') },
    { text: '{מֵאָה}', gloss: T('cien (cardinal)') },
    { text: '{רִאשׁוֹן}', gloss: T('primero (ordinal masc.)') },
    { text: '{שְׁלִישִׁי}', gloss: T('tercero (ordinal masc.)') },
    { text: '{הַשְּׁבִיעִי}', gloss: T('el séptimo — el día de descanso') },
    { text: '{אֶחָד מִכֹּל}', gloss: T('único entre todos') },
    { text: '{הָאֶחָד}', gloss: T('el único — el numeral nombra el grupo') },
    { text: '{יוֹם אֶחָד}', gloss: T('día uno = el primer día (Gn 1.5)') },
    { text: '{שְׁנֵי־הַלְוִיִּם}', gloss: T('los dos levitas — numeral + plural') },
    { text: '{שְׁתֵּי נָשִׁים}', gloss: T('dos mujeres — el plural es del sustantivo') },
    { text: '{רַגְלַיִם}', gloss: T('los dos pies — aquí sí, dual con {־יִם}') },
    { text: '{בַּיּוֹם הַשְּׁבִיעִי}', gloss: T('en el séptimo día — ordinal con {יוֹם}') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Las dos series'),
      head: [
        T('Valor'),
        T('Cardinal masc.'),
        T('Cardinal fem.'),
        T('Ordinal masc.'),
        T('Ordinal fem.'),
      ],
      rows: [
        ['1', '{אֶחָד}', '{אַחַת}', '{רִאשׁוֹן}', '{רִאשׁוֹנָה}'],
        ['2', '{שְׁנַיִם}', '{שְׁתֵּי}', '{שֵׁנִי}', '{שְׁנִית}'],
        ['3', '{שְׁלֹשָׁה}', '{שְׁלֹשׁ}', '{שְׁלִישִׁי}', '{שְׁלִישִׁית}'],
        ['7', '{שִׁבְעָה}', '{שֶׁבַע}', '{שְׁבִיעִי}', '{שְׁבִיעִית}'],
        ['10', '{עֲשָׂרָה}', '{עֲשֶׂרֶת}', '{עֲשִׂירִי}', '{עֲשִׂירִית}'],
      ],
    },
    {
      caption: T('Tabla 2 — Final {ים}: ¿numeral o dual?'),
      head: [T('Palabra'), T('Categoría'), T('Lo que sigue'), T('Cómo decidir')],
      rows: [
        [
          '{שְׁנַיִם}',
          T('numeral'),
          T('{נָשִׁים} — plural'),
          T('el sustantivo es plural de todos modos: numeral'),
        ],
        ['{שְׁתֵּי}', T('numeral'), T('{נָשִׁים} — plural'), T('igual')],
        ['{רַגְלַיִם}', T('dual'), T('{לְךָ} — sufijo'), T('{ים} + sufijo pronominal: dual')],
        ['{יָדַיִם}', T('dual'), T('{לִי} — sufijo'), T('igual')],
        ['{מַיִם}', T('dual'), T('preposición'), T('{ים} sin sufijo detrás')],
      ],
    },
  ],
};
