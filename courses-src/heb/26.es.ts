import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('El adverbio: qué hace'),
  subtitle: T('בְּכָל, הַיּוֹם, לֹא — la cuarta clase, hecha con otras piezas'),
  section: T('Adverbio'),
  body: C(`## La locución que hace el trabajo del adverbio

El hebreo antiguo no tiene adverbio derivado de adjetivo: no hay palabra que signifique «rápidamente» como {טוֹב} significa «bueno». Lo que usa es una locución de preposición y sustantivo genérico, con el sustantivo en constructo:

{בְּ + כֹּל → בְּכָל} «enteramente, con todo» · {בְּ + יוֹם → בְּיוֹם} «el día en que» · {בְּ + רוּחַ → בְּרוּחַ} «de un golpe, con ímpetu» · {ל + בַּד → לִבְּדוֹ} «solo, por sí mismo» · {עַל + פִּי → עַל־פִּי} «por la boca de, por medio de».

Cada una hace lo que el adverbio hace en español, y cada una tiene dos puntos de anclaje donde el español tiene uno solo. En {בְּרוּחַ} no hay palabra para «de repente»: el sentido viene del sustantivo {רוּחַ} «viento, soplo», y es el sopro el que produce la idea de repentino. El hebreo prefiere mostrar la cosa antes que nombrar la idea.

## Una raíz, tres oficios

La letra {ב} trabaja en tres oficios dentro de la misma familia. {בֵּית} «casa» es sustantivo, y es la forma en constructo de {בַּיִת}. {בְּ} «en» es la preposición inseparable. Y {בְּבֵּית} «en la casa» es la locución que junta las dos y funciona como adverbio de lugar.

La señal de que la primera {ב} es preposición es el dageš fuerte en la consonante siguiente, igual que en {בְּרֵאשִׁית} (cap. 17). La segunda {ב} es el artículo {הַ}, y la palabra entera {בְּבֵּית} es comparable a {הַבַּיִת} «la casa». Tres palabras, tres funciones, una raíz sola.

## Los pocos que sí son palabras

Existe una lista corta de adverbios que no son locución: {אַךְ} «pero, sin embargo» · {כֵּן} «así, de este modo» · {עַתָּה} «ahora» · {אָז} «entonces» · {שָׁם} «allí» · {הִנֵּה} «he aquí» · {אוֹלָם} «quizá».

Casi todos tienen un sustantivo debajo. {עַתָּה} viene de {עֵת} «tiempo, ocasión» (cap. 20) con la terminación {ָה} de sustantivo, y el mismo sustantivo reaparece en Ezequiel con el sentido nominal de «ocasión». {שָׁם} «allí» y {שֵׁם} «nombre» tienen exactamente las mismas letras: la vocal es lo que separa una cosa de otra, y quien lee de prisa las confunde. {אַךְ} es la excepción de la lista, el único sin sustantivo correspondiente, y por eso ocupa poco espacio: va pegado a la palabra que corrige.

## El tiempo y la negación

El adverbio de tiempo es la parte más ordenada: {הַיּוֹם} «el día», que significa «hoy» cuando el verbo está en presente · {הָאִתָּה} «hoy» · {עַתָּה} «ahora» · {אָז} «entonces» · {מֵחָר} «mañana» · {אֲתָמוֹל} «ayer».

La negación es donde el hebreo más se aparta del español. Son dos palabras: {לֹא} y {אֵין}. {לֹא} niega un verbo y solo puede ir antes de un verbo. {אֵין} es la ausencia de una cosa y no lleva verbo ninguno. En español las dos frases siguientes tienen la misma gramática: «hay hermano» y «el hermano existe», cada una con su «no». En hebreo no: la primera se vuelve {לֹא־יֵשׁ אֵח} (Gn 4.9), porque el verbo «ser» existe y recibe la negación; la segunda se vuelve {אֵין חֵקֶר} (Is 40.28), porque «no hay busca» no tiene verbo que negar. Quien traduce {אֵין} por «no está» o por «no existe» está añadiendo un verbo que el hebreo no tiene.

Donde la lectura se atasca es cuando aparece un verbo detrás de {אֵין}. El griego no se atasca porque tiene un verbo existencial de verdad, {εἰμί}, y escribe {οὐκ ἔστι} «no hay». El hebreo nunca tuvo ese verbo. En 1 Samuel, en Jeremías y en Ezequiel la construcción aparece igualmente, y cada traductor tiene que decidir si lee una ausencia sencilla o una negación enfática del tipo «de ninguna manera». El contexto decide, y por eso esas páginas parecen rotas para quien llega del griego o del portugués: no están rotas, están sin la pieza que las otras lenguas heredaron del latín.

Un último caso para guardar: la negación puede caer sobre un participio. En Génesis 3.5 la serpiente dice {לֹא יֹדֵעַ} y sigue: literalmente «no, sabiendo». El {לֹא} no niega un verbo, niega un participio, y el resultado es una frase que el español tiene que traducir con un paréntesis entero.`),
  vocab: [
    V('בְּכָל', 'בְּכָל', 'enteramente, con todo'),
    V('בְּיוֹם', 'בְּיוֹם', 'el día en que'),
    V('בְּרוּחַ', 'רוּחַ', 'de un golpe, con ímpetu'),
    V('לִבְּדוֹ', 'לִבְּדוֹ', 'solo, por sí mismo'),
    V('עַל־פִּי', 'פִּי', 'por la boca de, por medio de'),
    V('בֵּית', 'בַּיִת', 'casa (en constructo)'),
    V('בְּ', 'בְּ', 'en, con, por (preposición)'),
    V('בְּבֵּית', 'בַּיִת', 'en la casa'),
    V('אַךְ', 'אַךְ', 'pero, sin embargo'),
    V('כֵּן', 'כֵּן', 'así, de este modo'),
    V('עַתָּה', 'עַתָּה', 'ahora'),
    V('אָז', 'אָז', 'entonces'),
    V('שָׁם', 'שָׁם', 'allí'),
    V('הִנֵּה', 'הִנֵּה', 'he aquí'),
    V('הַיּוֹם', 'יוֹם', 'el día; hoy'),
    V('הָאִתָּה', 'הָאִתָּה', 'hoy'),
    V('לֹא', 'לֹא', 'no (con verbo)'),
    V('אֵין', 'אֵין', 'no hay, no existe'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué es {בְּכָל} gramaticalmente?'),
    options: [
      T('Una locución de preposición y sustantivo en constructo'),
      T('Un adverbio derivado de {כֹּל}'),
      T('Un sustantivo con artículo'),
      T('Una partícula de negación'),
    ],
    answer: 0,
    hint: T('Es {בְּ} + {כֹּל}: la preposición {בְּ} más el sustantivo genérico {כֹּל} «todo».'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Relaciona el adverbio con su origen.'),
      pairs: [
        { a: '{עַתָּה}', b: T('del sustantivo {עֵת} «tiempo»') },
        { a: '{שָׁם}', b: T('las mismas letras que {שֵׁם} «nombre»') },
        { a: '{בְּכָל}', b: T('{בְּ} + {כֹּל} «todo»') },
        { a: '{אַךְ}', b: T('partícula sin sustantivo correspondiente') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'En «no hay busca de su intelligence» (Is 40.28), ¿por qué el hebreo no tiene verbo?',
      ),
      options: [
        T('Porque {אֵין} ya es la ausencia: la cláusula no tiene verbo'),
        T('Porque la cláusula es un sustantivo con artículo'),
        T('Porque el escriba borró el verbo «ser»'),
        T('Porque {אֵין} es un verbo'),
      ],
      answer: 0,
      hint: T('Regla §4: {אֵין} no lleva verbo; {לֹא} es la que lo exige.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa Génesis 4.9: «לֹא־יֵשׁ ___» (no hay hermano).'),
      answer: 'אֵח',
      hint: T('Es el sustantivo {אָח} «hermano», sin artículo.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué palabra explica la dificultad de leer {אֵין} en 1 Samuel y Ezequiel?'),
      options: [
        T('El griego tiene un verbo existencial, {οὐκ ἔστι}, y el hebreo nunca lo tuvo'),
        T('La traducción de {אֵין} es siempre la misma'),
        T('El Tanah prohíbe el verbo después de una partícula'),
        T('Es un error de copia en los libros tardíos'),
      ],
      answer: 0,
      hint: T('El hebreo expresa la ausencia con {אֵין} y no tiene verbo que negar.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El adverbio hebraico es casi siempre preposición más sustantivo genérico en constructo: {בְּכָל}, {בְּיוֹם}, {בְּרוּחַ}, {לִבְּדוֹ}.',
      ),
    },
    {
      n: '2',
      text: T(
        'La misma raíz sirve a tres funciones: {בֵּית} (sustantivo), {בְּ} (preposición) y {בְּבֵּית} (locución). El dageš fuerte en la consonante siguiente marca la preposición.',
      ),
    },
    {
      n: '3',
      text: T(
        'Los adverbios cortos ({אַךְ}, {כֵּן}, {עַתָּה}, {אָז}, {שָׁם}) también tienen sustantivo debajo, salvo {אַךְ}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{לֹא} niega un verbo; {אֵין} afirma ausencia y no lleva verbo. Una cláusula con {אֵין} no puede traducirse con verbo sin que el traductor elija uno.',
      ),
    },
    {
      n: '5',
      text: T(
        '{הַיּוֹם} significa «el día» y vale «hoy» cuando el verbo está en presente: el adverbio de tiempo sale del sustantivo {יוֹם}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Exégesis:'),
      text: T(
        'La construcción {בְּיוֹם אֲכָלְכֶם} de Génesis 3.5 es el mejor ejemplo del adverbio por locución y, al mismo tiempo, un problema de traducción. La locución vale «el día en que comáis», pero el verbo {אֲכָלְכֶם} está en constructo y significa literalmente «cuando comáis». El sustantivo {יוֹם} hace el trabajo que en español hace la conjunción temporal, y quien traduce solo «el día» pierde la condición temporal.',
      ),
    },
    {
      label: T('Dato curioso:'),
      text: T(
        'El griego arcaico tenía adverbios en {־ως}, como {πιστῶς} «fielmente» de {πιστός}. La pérdida de esa sufijación es una de las transformaciones más antiguas del griego y lo que separa el griego homérico del del Nuevo Testamento. El hebreo nunca tuvo sufijo aquí: su adverbio fue siempre palabra de fuera, una preposición pegada a un nombre.',
      ),
    },
  ],
  examples: [
    { text: '{בְּכָל}', gloss: T('enteramente, con todo — {בְּ} + {כֹּל}') },
    { text: '{בְּיוֹם}', gloss: T('el día en que — {בְּ} + {יוֹם}') },
    { text: '{בְּרוּחַ}', gloss: T('de un golpe — el sopro como causa') },
    { text: '{לִבְּדוֹ}', gloss: T('solo, por sí mismo — {ל} + {בַּד}') },
    { text: '{עַל־פִּי}', gloss: T('por la boca de — {עַל} + {פִּי}') },
    { text: '{בְּבֵּית}', gloss: T('en la casa — {בְּ} + {הַ} + {בֵּית}') },
    { text: '{אַךְ}', gloss: T('pero, sin embargo — partícula sin sustantivo') },
    { text: '{שָׁם}', gloss: T('allí — no confundir con {שֵׁם} «nombre»') },
    { text: '{הַיּוֹם}', gloss: T('el día, hoy — de {יוֹם}') },
    { text: '{הָאִתָּה}', gloss: T('hoy (Gn 3.5)') },
    { text: '{אֵין חֵקֶר}', gloss: T('no hay busca (Is 40.28) — cláusula sin verbo') },
    { text: '{לֹא־יֵשׁ אֵח}', gloss: T('no hay hermano (Gn 4.9) — {לֹא} + verbo «ser»') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Adverbios que son locución'),
      head: [T('Piezas'), T('Resultado'), T('Glosa'), T('Qué aporta')],
      rows: [
        ['{בְּ} + {כֹּל}', '{בְּכָל}', T('enteramente'), T('el todo como medida')],
        ['{בְּ} + {יוֹם}', '{בְּיוֹם}', T('el día en que'), T('tiempo determinado')],
        ['{בְּ} + {רוּחַ}', '{בְּרוּחַ}', T('con ímpetu'), T('sopro, prisa')],
        ['{ל} + {בַּד}', '{לִבְּדוֹ}', T('por sí mismo'), T('aislamiento')],
        ['{עַל} + {פִּי}', '{עַל־פִּי}', T('por la boca de'), T('medio, instrumento')],
        ['{בְּ} + {דֶּרֶךְ}', '{בְּדֶרֶךְ}', T('por el camino de'), T('medio, causa')],
        ['{בְּ} + {כֹּחַ}', '{בְּכֹּחַ}', T('con fuerza'), T('instrumento')],
      ],
    },
    {
      caption: T('Tabla 2 — Los adverbios cortos y el nombre debajo'),
      head: [T('Adverbio'), T('Glosa'), T('Sustantivo de origen')],
      rows: [
        ['{אַךְ}', T('pero, sin embargo'), T('— (partícula suelta)')],
        ['{כֵּן}', T('así, de este modo'), T('{כֵּן} «modo» (raro como sustantivo)')],
        ['{עַתָּה}', T('ahora'), T('{עֵת} «tiempo, ocasión»')],
        ['{אָז}', T('entonces'), T('{אָז} «entonces» (la propia palabra)')],
        ['{שָׁם}', T('allí'), T('{שֵׁם} «nombre» (mismas letras)')],
        ['{הִנֵּה}', T('he aquí'), T('{הִנֵּה} «mira, he aquí»')],
        ['{אוֹלָם}', T('quizá'), T('— (ocasional)')],
        ['{הָאִתָּה}', T('hoy'), T('{יוֹם} «día»')],
      ],
    },
  ],
};
