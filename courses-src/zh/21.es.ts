import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  section: T('Números'),
  title: T('Numerales: {一}, {兩}, {幾} y la posición del clasificador'),
  subtitle: T(
    'El numeral va antes del clasificador, y "dos" tiene dos formas que no son intercambiables',
  ),
  body: C(`
## Numeral, clasificador, sustantivo

En {liǎng} {běn} {shū}, dos libros, el numeral {liǎng} dice *cuántos*, el clasificador {běn} dice *de qué tipo*, y {shū} es el sustantivo. Dos cosas quedan abiertas: cómo cambia de sonido el numeral y dónde se coloca.

La primera es el comportamiento del numeral. Uno, dos y tres no son palabras estables: {yī} cambia de sonido según lo que sigue, y "dos" tiene dos formas que se confunden en casi todo contexto y divergen justo donde el contexto importa.

La segunda es la posición. El español dice "tres libros", sustantivo y luego numeral. El mandarín dice {sān} {běn} {shū}, **numeral, clasificador, sustantivo.** El orden es fijo, e invertirlo es un error, no una informalidad: {shū} {sān} {běn} no es mandarín.

## El uno cambia de sonido: {一} y la sandhi tonal

{一} es el numeral más frecuente de la lengua y el menos predecible. La sílaba se lee {yī} cuando va sola o en posición neutra. Antes de otra sílaba el tono cambia, para no dejar dos tonos iguales pegados. La regla cabe en una línea:

**{一} antes de un tono 4 se vuelve {yí}, 2º tono. Antes de tono 1, 2 o 3 se vuelve {yì}, 4º tono.**

Los dos ejemplos más comunes son el uno reverso del otro. {yì} {tiān}, un día: {tiān} es tono 1, así que {一} baja a 4º tono. {yí} {gè}, una cosa: {gè} es tono 4, así que {一} sube a 2º tono. Se escribe {yī}; se pronuncia {yì} o {yí}.

Lo que importa para la lectura es que el carácter nunca cambia. Ningún manuscrito escribe {yí} donde otro escribe {yì}: la sandhi es un fenómeno del habla, no de la escritura. Quien lee nunca tiene que decidir; quien habla decide treinta veces por página.

## "Dos" tiene dos formas: {兩} y {二}

Este es el punto que casi ningún curso de mandarín explica bien, y que cualquier diccionario de frecuencias hace parecer arbitrario.

**{兩} ({liǎng}) es la forma de sustantivo: aparece cuando hay un clasificador delante. {二} ({èr}) es la forma de número: aparece cuando el sustantivo ya trae su propio clasificador implícito, o cuando es fecha, teléfono, o posición en una lista.**

- {liǎng} {běn} {shū}, dos libros. Clasificador {běn} presente: {兩}.
- {èr} {yuè}, febrero. {月} es el mes y ya es el clasificador: {二}.
- {dì} {èr}, segundo. Enumeración: {二}.
- {èr} {shí} {sān}, veintitrés. Número compuesto: {二}.

La regla práctica cabe en una prueba: si puedes señalar el clasificador en la frase, escribe {兩}. Si no hay clasificador ninguno, escribe {二}. Un lector fluido no piensa en reglas, pero se equivoca de formas distintas en los dos lados, y las dos son comunes en la Biblia.

La cuenta básica es {yī} {èr} {sān} {sì} {wǔ} {liù} {qī} {bā} {jiǔ} {shí}. Después el sistema se cierra: {十} es el multiplicador, {shí} {yī} once, {èr} {shí} veinte, {sān} {shí} {liù} treinta y seis.

El "y medio" es {半} ({bàn}), y va después del sustantivo, como {er}: {shí} {wǔ} {gè} {bàn}, quince y medio. No {bàn} {shí} {wǔ} {gè}.

## {幾}, la posición, y el clasificador omitido

{幾} ({jǐ}) es "cuántos" en la pregunta y "algunos" en la respuesta. {nǐ} {yǒu} {jǐ} {běn} {shū}?, ¿cuántos libros tienes? Es la pregunta más simple de la lengua y ya trae el numeral, el clasificador y el sustantivo, en ese orden. En la respuesta, {幾} {běn} significa "algunos libros", sin el {shū}: la elipsis es normal porque {běn} ya lo dice todo.

El orden queda fijado aquí: numeral, clasificador, sustantivo. {sān} {běn} {shū}, tres libros. Y el clasificador puede desaparecer cuando el sustantivo es abstracto o cuando el contexto ya está claro: {sān tiān}, tres días, no {sān tiān} {rìzi}, porque aquí {天} ya es el sustantivo y lleva su propio clasificador. La omisión es natural, y por eso quien lee con atención tiene que saber contar cuántos clasificadores quedaron fuera.

La ganancia bíblica está toda en la posición, y es inmediata. Juan 6:9, {yǒu} {yí} {gè} {háizi}, había un niño: numeral {一}, clasificador {個}, sustantivo {孩子}, exactamente en este orden, con la sandhi de {一} a {yí} porque {gè} es tono 4. Mateo 2:1, {yuē} {zài} {nà} {xiē} {rìzi}, por aquellos días: {約} es "alrededor de", y el sustantivo {日子} lleva {些}, un clasificador de grupos, "aquellos días". Mateo 14:21, {wǔ} {qiān}, cinco mil: {qiān} es el multiplicador de mil y ya es la unidad. Cuando la {和合本} escribe {五千} {人} más adelante, es porque allí volvió el sustantivo; la cifra sola prescinde del {個}.`),
  vocab: [
    V('一', '一', 'uno (yī; el tono cambia: yí, yì)'),
    V('二', '二', 'dos como número, en fechas y series (èr)'),
    V('兩', '两', 'dos antes de un clasificador (liǎng)'),
    V('幾', '几', 'cuántos (pregunta) / algunos (respuesta) (jǐ)'),
    V('個', '个', 'clasificador genérico (gè)'),
    V('半', '半', 'medio; va después del sustantivo (bàn)'),
    V('天', '天', 'día; también clasificador para días (tiān)'),
    V('孩子', '孩子', 'niño, criatura (háizi)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El orden es fijo: numeral, clasificador, sustantivo. {sān běn shū}, nunca {shū sān běn}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{兩} cuando hay un clasificador delante; {二} cuando no lo hay — fechas, {第二} y números compuestos.',
      ),
    },
    {
      n: '3',
      text: T(
        '{一} antes de un tono 4 se lee {yí} ({一個}); antes de tono 1, 2 o 3, {yì} ({一天}). El carácter no cambia.',
      ),
    },
    { n: '4', text: T('{幾} pregunta "cuántos" y responde "algunos": {jǐ běn shū}.') },
    { n: '5', text: T('{半} va después del sustantivo: {shí wǔ gè bàn}, no {bàn shí wǔ}.') },
  ],
  notes: [
    {
      label: T('Dónde falla el {兩}'),
      text: T(
        '{二} es obligatorio en {二月}, {二月十日} y {第二}. Un {兩} ahí le suena mal a quien escucha: {月} y {第} ya son la unidad y la posición, y no quieren clasificador.',
      ),
    },
    {
      label: T('No todo {兩} es numeral'),
      text: T(
        'A veces {兩} significa "ambos": {liǎng} {gè} {rén} "las dos personas", y {兩} solo es "los dos". En {兩} {běn} {shū} no hay duda: ahí {兩} cuenta. Pero {兩} {yī} {diǎn} (las dos en punto) no cuenta nada.',
      ),
    },
  ],
  examples: [
    { text: '一個孩子', gloss: T('yí ge háizi — un niño (Juan 6:9)') },
    { text: '幾本書', gloss: T('jǐ běn shū — ¿cuántos libros?') },
    { text: '兩本書', gloss: T('liǎng běn shū — dos libros') },
    { text: '二月', gloss: T('èr yuè — febrero') },
  ],
  tables: [
    {
      caption: T('El orden es fijo, e inverso al del español'),
      head: [T('Español'), T('Mandarín'), T('Glosa')],
      rows: [
        [T('libros + dos'), T('{liǎng} {běn} {shū}'), T('dos libros')],
        [T('libros + tres'), T('{sān} {běn} {shū}'), T('tres libros')],
        [T('niños + cinco'), T('{wǔ} {gè} {háizi}'), T('cinco niños')],
        [T('libros + cuántos'), T('{jǐ} {běn} {shū}'), T('¿cuántos libros?')],
      ],
    },
    {
      caption: T('Cuándo usar {兩} y cuándo usar {二}'),
      head: [T('Forma'), T('Dónde aparece'), T('Ejemplo')],
      rows: [
        [T('{兩} {liǎng}'), T('con un clasificador delante'), T('{liǎng běn shū} dos libros')],
        [T('{兩} {liǎng}'), T('con el clasificador {個}'), T('{liǎng gè rén} dos personas')],
        [T('{二} {èr}'), T('mes y fecha'), T('{èr yuè} febrero')],
        [T('{二} {èr}'), T('posición en una serie'), T('{dì èr} segundo')],
        [T('{二} {èr}'), T('número compuesto mayor de 10'), T('{èr shí} veinte')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Para decir "segundo", ¿qué numeral usas?'),
    options: [T('{兩}'), T('{二}'), T('{幾}'), T('{一}')],
    answer: 1,
    hint: T(
      'Es posición en una serie, no sustantivo con clasificador: {第} ya ocupa el lugar del clasificador.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "tres libros" en el orden correcto: ____ 本 书'),
      answer: '三',
    },
    {
      kind: 'match',
      prompt: T('Une la forma con su uso'),
      pairs: [
        { a: T('{兩 běn shū}'), b: T('dos libros') },
        { a: T('{èr yuè}'), b: T('febrero') },
        { a: T('{dì èr}'), b: T('segundo') },
        { a: T('{jǐ běn}'), b: T('¿cuántos libros?') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuántos clasificadores aparecen en {兩本書}?'),
      options: [T('ninguno'), T('uno'), T('dos'), T('tres')],
      answer: 1,
    },
  ],
};
