import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  title: T('Preguntas y relativos'),
  subtitle: T('מִי, מָה, אֲשֶׁר — quién, qué, cuál'),
  section: T('Preposiciones, comparación, preguntas y tiempo'),
  body: C(`## Las seis preguntas

El hebreo tiene un cuestionario compacto, todo en palabras cortas:

{מִי} «¿quién?» — {מָה} «¿qué?» — {אֵיךְ} «¿cómo?» — {לָמָּה} «¿por qué?» — {מָתַי} «¿cuándo?» — {אַיֵּה} «¿dónde?»

Fíjate en las dos formas de «dónde»: {אַיֵּה} para **personas** y {אַיכָ} (o {אֵיכָ}) para **cosas**. Es la misma lógica del capítulo 16: la pregunta se adapta al referente. En Génesis 4.9, Caín pregunta {אַיֵּה הֶבֶל אָחִיךָ} «¿dónde está Abel, tu hermano?»: {הֶבֶל} es una persona, así que {אַיֵּה} es la forma correcta; si fuera una oveja, el verbo sería {אַיכָ}.

Existe además {מַדּוּעַ} «¿con qué razón?», la forma más larga y más rara, y las preguntas indirectas con {אִם}: «¿hay un pastor?» (Gn 11.7).

## {מָה} se convierte en {מֶה}

Un detalle de escritura: ante una gutural, {מָה} cambia el qamats por segol. En Génesis 20.9, Abimeleque pregunta {מֶה־עָשִׂיתָ} «¿qué has hecho?» y {מֶה־חָטָאתִי} «¿en qué te he ofendido?». Es la gutural {ע} que sigue a {מֶה} la que provoca el cambio de vocal.

## El relativo {אֲשֶׁר}

El pronombre relativo más usado es {אֲשֶׁר} «que, el cual», y es **invariable**: no flexiona género ni número, y se traduce como «quien» o «que» según la tradición de la lengua de destino. En Salmo 1.1, {אַשְׁרֵי־הָאִישׁ אֲשֶׁר} es literalmente «feliz el hombre que».

Existe una forma corta y poética, {שֶׁ}, que aparece en la poesía: «cuya morada es el cielo» (Sal 68.7). Y, raramente, {זַ} con sentido de «cuyo».

Detalle de construcción: el relativo puede ir seguido de preposición — {אֲשֶׁר בּוֹ} «en el cual», {אֲשֶׁר לּוֹ} «que tiene» — y así se traduce el genitivo de otras lenguas. En Salmo 1.1, {בַּעֲצַת} «en el consejo» es {ב} + {עֲצַת}, con la {ע} en constructo.

## Las preguntas de sí o no

Dos partículas abren una pregunta que **espera respuesta afirmativa**: {הֲלוֹא} «¿acaso no…?» y {הֲ} al principio de la cláusula. En Isaías 40.28, {הֲלוֹא־יָדַעְתָּ אִם־לֹא שָׁמָעְתָּ} «¿Acaso no sabes? ¿Por ventura no oíste?»: la respuesta esperada es «sí», y todo el versículo es una petición de reconocimiento.

En Ezequiel, {הֲתַפְלָא} «¿no es asombroso?» espera respuesta **negativa**: «¿acaso no es asombroso?». Un contexto de negación invierte la expectativa.

Cuidado con {ה} dentro de un discurso: {ה} es también la partícula de honestidad, que introduce la voz humana en medio de la palabra de Dios, y marca la distancia entre lo que Dios dice y lo que el profeta repite.

## {מָה} + adjetivo = «¡qué!»

El sustantivo {מָה} «qué», unido por maqaf a un adjetivo o adverbio, se convierte en exclamación de grado: {מַה־טֹּבוּ} «¡qué bien!» (Nm 24.5, las tiendas de Jacob) · {מַה־נִפְלָא} «¡qué maravilloso!» (Sal 118.23) · {מַה־טּוֹבָה} «¡qué buena!» (femenino, con {ה}).

Y con verbo, {מָה} + verbo = «¿cómo?» o «¿qué?»: en Jeremías 13.16 el profeta pregunta al vaso {מַה־תִּבְעֲיָהוּ} «¿qué estás haciendo?». El lector reconoce enseguida la pregunta más dura de toda la Biblia.

## Formas para retener

{מִי} «¿quién?» · {מָה} «¿qué?» · {אֵיךְ} «¿cómo?» · {לָמָּה} «¿por qué?» · {מָתַי} «¿cuándo?» · {אַיֵּה} «¿dónde? (personas)» · {אַיכָ} «¿dónde? (cosas)» · {אֲשֶׁר} «que, el cual» · {הֲלוֹא} «¿acaso no?»`),
  vocab: [
    V('מִי', 'מִי', '¿quién?'),
    V('מָה', 'מָה', '¿qué?'),
    V('מֶה', 'מָה', '¿qué? (ante gutural)'),
    V('אֵיךְ', 'אֵיךְ', '¿cómo?'),
    V('לָמָּה', 'לָמָּה', '¿por qué?'),
    V('מָתַי', 'מָתַי', '¿cuándo?'),
    V('אַיֵּה', 'אַיֵּה', '¿dónde? (personas)'),
    V('אַיכָ', 'אַיכָ', '¿dónde? (cosas)'),
    V('אֲשֶׁר', 'אֲשֶׁר', 'que, el cual'),
    V('שֶׁ', 'אֲשֶׁר', 'que (forma poética)'),
    V('הֲלוֹא', 'הֲלוֹא', '¿acaso no?'),
    V('מַדּוּעַ', 'מַדּוּעַ', '¿con qué razón?'),
    V('הֶבֶל', 'הֶבֶל', 'Abel'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Completa Gn 4.9: «___ הֶבֶל אָחִיךָ» (¿dónde está Abel?).'),
    answer: 'אַיֵּה',
    hint: T('«¿Dónde?» para personas.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Relaciona la pregunta con su referente.'),
      pairs: [
        { a: '{מִי}', b: T('¿quién? (personas)') },
        { a: '{אַיֵּה}', b: T('¿dónde? (personas)') },
        { a: '{אַיכָ}', b: T('¿dónde? (cosas)') },
        { a: '{מָתַי}', b: T('¿cuándo?') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué hace {אֲשֶׁר} de diferente frente a un adjetivo?'),
      options: [
        T('No flexiona género ni número'),
        T('Siempre viene con artículo'),
        T('Solo aparece en poesía'),
        T('Siempre es plural'),
      ],
      answer: 0,
      hint: T('Regla §3: el relativo hebreo es invariable.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa Nm 24.5: «מַה־___» (¡qué bien!).'),
      answer: 'טֹּבוּ',
      hint: T('{מַה־} + la forma plural de {טוֹב} «bueno».'),
    },
    {
      kind: 'choose',
      prompt: T('En {הֲלוֹא־יָדַעְתָּ} (Is 40.28), la respuesta esperada es:'),
      options: [
        T('«sí» — es una petición de reconocimiento'),
        T('«no» — es una objeción'),
        T('«no lo sé» — pregunta de ignorancia'),
        T('«quizá» — es una hipótesis'),
      ],
      answer: 0,
      hint: T('Regla §4: {הֲלוֹא} espera respuesta afirmativa.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Las preguntas son palabras cortas y separadas: {מִי} {מָה} {אֵיךְ} {לָמָּה} {מָתַי} {אַיֵּה}.'),
    },
    { n: '2', text: T('«¿Dónde?» tiene dos formas: {אַיֵּה} para personas y {אַיכָ} para cosas.') },
    {
      n: '3',
      text: T(
        'El relativo {אֲשֶׁר} es invariable: nunca flexiona, y traduce «quien» o «que» según la lengua.',
      ),
    },
    {
      n: '4',
      text: T(
        '{הֲלוֹא} y {הֲ} abren preguntas que esperan «sí»; en contexto negado, la expectativa se invierte.',
      ),
    },
    {
      n: '5',
      text: T('{מַה־} + adjetivo es exclamación («¡qué!»), no pregunta: {מַה־טֹּבוּ} «¡qué bien!».'),
    },
  ],
  notes: [
    {
      label: T('Exégesis:'),
      text: T(
        'La pregunta de Isaías 40.28 ({הֲלוֹא־יָדַעְתָּ}) no espera un «no». El hebreo antiguo usaba esas preguntas para llamar la atención y provocar el reconocimiento: es la pregunta del profesor que sabe que el alumno sabe, y el alumno descubre que la pregunta era retórica.',
      ),
    },
    {
      label: T('Dato curioso:'),
      text: T(
        'La partícula de honestidad {ה} es la misma que abre las preguntas: en hebreo antiguo, «yo digo» precedía cualquier afirmación fuerte, y la {ה} de {הֲלוֹא} es su marca formal. Por eso el mismo sonido sirve para «¿acaso no?» y para «ciertamente»: la función depende del contexto completo.',
      ),
    },
  ],
  examples: [
    { text: '{מִי}', gloss: T('¿quién? — solo personas') },
    { text: '{מָה}', gloss: T('¿qué? — {מָה זֶּה} «¿qué es esto?» (Ex 3.6)') },
    { text: '{מֶה־עָשִׂיתָ}', gloss: T('¿qué has hecho? — {מֶה} ante gutural (Gn 20.9)') },
    { text: '{אֵיךְ}', gloss: T('¿cómo? — {אֵיךְ־יָפוּ} «¡qué hermosas!»') },
    { text: '{לָמָּה}', gloss: T('¿por qué? — «¿por qué esto?» (Gn 3.20)') },
    { text: '{מָתַי}', gloss: T('¿cuándo? — «¿cuándo llegaré?»') },
    { text: '{אַיֵּה}', gloss: T('¿dónde? (personas) — Gn 4.9') },
    { text: '{אַיכָ}', gloss: T('¿dónde? (cosas) — «¿dónde está esto?»') },
    { text: '{אֲשֶׁר}', gloss: T('que, el cual — invariable') },
    { text: '{הֲלוֹא}', gloss: T('¿acaso no? — espera «sí» (Is 40.28)') },
    { text: '{מַה־טֹּבוּ}', gloss: T('¡qué bien! — las tiendas de Jacob (Nm 24.5)') },
    { text: '{מַה־נִפְלָא}', gloss: T('¡qué maravilloso! (Sal 118.23)') },
    { text: '{מַה־תִּבְעֲיָהוּ}', gloss: T('¿qué estás haciendo? — pregunta al vaso (Jr 13.16)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — El cuestionario hebreo'),
      head: [T('Pregunta'), T('Forma'), T('Se usa con'), T('Ejemplo')],
      rows: [
        [T('¿quién?'), '{מִי}', T('personas'), '{מִי הָאָדָם} «quem é o homem?» (Ec 3.15)'],
        [T('¿qué?'), '{מָה}', T('cosas, acciones'), '{מָה זֶּה} «o que é isto?» (Êx 3.6)'],
        [
          T('¿qué? (ante gutural)'),
          '{מֶה}',
          T('gutural siguiente'),
          '{מֶה־עָשִׂיתָ} «o que fizeste?» (Gn 20.9)',
        ],
        [T('¿cómo?'), '{אֵיךְ}', T('adjetivo, verbo'), '{אֵיךְ־יָפוּ} «como são belas!» (Ct 7.6)'],
        [T('¿por qué?'), '{לָמָּה}', T('causa, propósito'), '{לָמָּה־זָה} «para que isto?» (Gn 3.20)'],
        [T('¿cuándo?'), '{מָתַי}', T('tiempo'), '{מָתַי־אָבֹא} «quando he de chegar?» (Gn 29.7)'],
        [T('¿dónde? (personas)'), '{אַיֵּה}', T('seres humanos'), '{אַיֵּה הֶבֶל אָחִיךָ} (Gn 4.9)'],
        [
          T('¿dónde? (cosas)'),
          '{אַיכָ} / {אֵיכָ}',
          T('objetos, lugares'),
          '{אֵיכָ זֶה} «onde está isto?» (Êx 2.18)',
        ],
      ],
    },
    {
      caption: T('Tabla 2 — Preguntas de sí/no y exclamaciones'),
      head: [T('Tipo'), T('Forma'), T('Respuesta esperada'), T('Ejemplo')],
      rows: [
        [T('Sí/no afirmativa'), '{הֲלוֹא}', T('«sí»'), '{הֲלוֹא־יָדַעְתָּ} (Is 40.28)'],
        [T('Sí/no afirmativa'), '{הֲ}', T('«sí»'), '{הֲ־לֹא} «acaso não?» (1 Sm 12.3)'],
        [T('Retórica negativa'), '{הֲתַפְלָא}', T('«no»'), '{הֲתַפְלָא} «não é incrível?» (Ez 3.15)'],
        [T('Exclamación de grado'), '{מַה־}', T('«¡qué!»'), '{מַה־טֹּבוּ} «quão bom!» (Nm 24.5)'],
        [T('Exclamación (fem.)'), '{מַה־}+ {ה}', T('«¡qué!»'), '{מַה־טּוֹבָה} «quão boa!» (Sl 118.24)'],
      ],
    },
  ],
};
