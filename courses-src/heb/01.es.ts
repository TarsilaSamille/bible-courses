import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('El artículo definido'),
  subtitle: T('הַ — el prefijo que precede todo lo determinado'),
  section: T('Alfabeto y artículo definido'),
  body: C(`## Para qué sirve el artículo

El hebreo tiene un único morfema de artículo — la partícula {הַ} — y es **prefijo**, no una palabra suelta como en portugués o español. No existe artículo indefinido: «un caballo» se dice simplemente {סוּס} (igual que «un caballo» en un contexto indefinido), mientras que «el caballo» exige {הַסּוּס}. La consecuencia es que el hebreo es más preciso: justamente lo que carece de {הַ} es aquello que el autor todavía no quiere determinar.

El sustantivo determinado lleva el artículo casi siempre, y el adjetivo suele repetirlo cuando su nombre lo lleva (cap. 4). Por eso, al leer hebraico, el {הַ} es tu señal de tráfico: cada {הַ} apunta a algo que el autor considera individual y conocido.

## La forma estándar: {הַ} + dageš forte

La regla es mecánica: el artículo {הַ} con {ַ} (pataj) provoca un dageš fuerte en la consonante siguiente. El punto dentro de la {ב} de {הַבַּיִת} es ese dageš, y lo mismo ocurre en {הַמֶּלֶךְ}, {הַיּוֹם}, {הַסּוּס}. Memoriza el par como un solo bloque: {הַ} + consonante duplicada.

## Cuándo se alarga el artículo: {הָ}

Tras cuatro de las cinco guturales — {א} {ח} {ע} {ה} — y también tras {ר}, el artículo pierde la vocal breve y recibe {ָ} (qamats): {הָאָרֶץ}, {הָאִשָּׁה}, {הָהָר}, {הָרָאשִׁ֑י}. El motivo es fonético: esas consonantes no tolerate bien el dageš fuerte, y se prefiere la [a].

Excepción importante: ante una {ה} inicial de palabra, el {הַ} suele desaparecer por completo: {הַהָר} → {הָהָר}, {הַהֵם} → {הֵם} «el hombre». Reconocer esa pérdida evita leer dos letras donde hay una sola.

## El artículo en estado constructo

En estado constructo (cap. 7) el artículo también desaparece: {הַמֶּלֶךְ} + {יִשְׂרָאֵל} → {מֶלֶךְ־יִשְׂרָאֵל}, no {הַמֶּלֶךְ־יִשְׂרָאֵל}. El {הַ} vuelve solo cuando el sustantivo regresa al estado absoluto: {הַבַּיִת} «la casa» → {בֵּית־לֶחֶם} «casa del pan» → de nuevo {הַבֵּית־לֶחֶם} «la casa del pan».

## Qué hace el artículo (y qué no)

El {הַ} **no** marca el caso: {הַמֶּלֶךְ} es nominativo, {לַמֶּלֶךְ} es «para el rey». Tampoco **no** marca el plural: {הַסּוּסִים} es «los caballos» con el mismo {הַ} del singular. Y nunca se traduce por separado: en {הַבַּיִת} es la preposición {בְּ} la que carga el caso.

Palabras para fijar: {יוֹם} «día» → {הַיּוֹם} «el día» · {מֶלֶךְ} «rey» → {הַמֶּלֶךְ} «el rey» · {אֶרֶץ} «tierra» → {הָאָרֶץ} «la tierra».`),
  vocab: [
    V('הַ', 'הַ', 'el, la (art. definido)'),
    V('הָ', 'הַ', 'el, la (forma larga, gutural)'),
    V('סוּס', 'סוּס', 'caballo'),
    V('הַסּוּס', 'סוּס', 'el caballo'),
    V('בַּיִת', 'בַּיִת', 'casa'),
    V('הַבַּיִת', 'בַּיִת', 'la casa'),
    V('מֶלֶךְ', 'מֶלֶךְ', 'rey'),
    V('הַמֶּלֶךְ', 'מֶלֶךְ', 'el rey'),
    V('הָאָרֶץ', 'אֶרֶץ', 'la tierra'),
    V('הֵם', 'הֵם', 'el hombre (artículo elidido)'),
    V('יוֹם', 'יוֹם', 'día'),
    V('הַיּוֹם', 'יוֹם', 'el día'),
    V('כָּל', 'כָּל', 'todo, cada'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se dice «el rey» en hebreo?'),
    options: [T('מֶלֶךְ'), T('הַמֶּלֶךְ'), T('הָמֶלֶךְ'), T('מַלְכָּה')],
    answer: 1,
    hint: T('{מֶלֶךְ} empieza por {מ}: el artículo lleva {הַ} y la {מ} recibe dageš fuerte.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Escribe el artículo definido correcto (forma larga) para {אָרֶץ} «tierra».'),
      answer: 'הָאָרֶץ',
      hint: T(
        'La palabra empieza por la gutural {א}: el artículo adopta {ָ} (qamats) y ningún dageš.',
      ),
    },
    {
      kind: 'choose',
      prompt: T('En «{הֵם}» (el hombre), ¿qué ocurrió con el {הַ}?'),
      options: [
        T('Cambió {ַ} por {ָ}'),
        T('Desapareció ante la {ה} inicial'),
        T('Se convirtió en {ל} (preposición)'),
        T('Cambió el dageš por sheva'),
      ],
      answer: 1,
      hint: T('Regla §4: dos {ה} seguidos son demasiado para el hebreo.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada forma con lo que marca.'),
      pairs: [
        { a: '{הָאָרֶץ}', b: T('artículo largo (gutural)') },
        { a: '{הַמֶּלֶךְ}', b: T('artículo corto + dageš') },
        { a: '{הֵם}', b: T('artículo elidido') },
        { a: '{מֶלֶךְ־יִשְׂרָאֵל}', b: T('constructo sin artículo') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál de estas formas no puede llevar el artículo {הַ} con dageš fuerte?'),
      options: [T('{הַמֶּלֶךְ}'), T('{הַסּוּס}'), T('{הָאָרֶץ}'), T('{הַיּוֹם}')],
      answer: 2,
      hint: T('Tras las guturales el artículo cambia de vocal: {הָ}, no {הַ}.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El artículo hebreo es {הַ} (pataj) y se pega a la palabra; no existe artículo indefinido ni contracción con preposiciones: {בַּיִת} y {הַבַּיִת} significan lo mismo.',
      ),
    },
    {
      n: '2',
      text: T(
        'Tras {א} {ח} {ע} {ה} y {ר} el artículo adopta {ָ} (qamats): {הָאָרֶץ}, {הָאִשָּׁה}, {הָרָאשִׁ֑י}.',
      ),
    },
    {
      n: '3',
      text: T(
        'El artículo no marca ni caso ni número: {הַמֶּלֶךְ} y {הַמֶּלֶךְ} son idénticos, y es la preposición la que indica el caso ({לַמֶּלֶךְ} «para el rey»).',
      ),
    },
    {
      n: '4',
      text: T(
        'Ante {ה} inicial y en estado constructo el {הַ} desaparece: {הַהֵם} → {הֵם}, {הַמֶּלֶךְ} + {יִשְׂרָאֵל} → {מֶלֶךְ־יִשְׂרָאֵל}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Cuando una preposición rige el sustantivo, ella misma puede provocar el dageš fuerte: {כַּל־הָעָם} «todo el pueblo» = {כָּל} + {הָעָם}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Atención:'),
      text: T(
        'El nombre divino {אֱלֹהִים} aparece a veces como {הָאֱלֹהִים} y a veces sin artículo alguno. La ausencia de artículo suele sugerir naturaleza, origen o divinidad: en Gn 1.1, {בָּרָא} «creó» exige {אֱלֹהִים} sin artículo, porque se trata de Dios como categoría. La decisión es teológica, no gramatical, pero el detalle se aprende leyendo.',
      ),
    },
    {
      label: T('Dato curioso:'),
      text: T(
        'La palabra {בֵּית} «casa» casi nunca lleva artículo en la Biblia: las traducciones portuguesas y españolas escriben «la casa», pero el hebreo escribe solo {בֵּית}. Es la mejor prueba de que el {הַ} no siempre sobrevive a la traducción, y de que el panel de gramática de este curso cuenta palabras, no traducciones.',
      ),
    },
  ],
  examples: [
    { text: '{הַ}', gloss: T('el, la (artículo definido m./f.)') },
    { text: '{הָ}', gloss: T('el, la — forma larga ante gutural o {ר}') },
    { text: '{הַסּוּס}', gloss: T('el caballo ({סוּס} + dageš fuerte)') },
    { text: '{הַבַּיִת}', gloss: T('la casa ({ב} con dageš fuerte)') },
    { text: '{הַמֶּלֶךְ}', gloss: T('el rey — {הַ} + {מ} fuerte + {ֶ}') },
    { text: '{הַיּוֹם}', gloss: T('el día — el dageš puede caer bajo {ו}') },
    { text: '{הָאָרֶץ}', gloss: T('la tierra — {הָ} por la gutural {א}') },
    { text: '{הֵם}', gloss: T('el hombre — {הַהֵם} con el {הַ} eliminado') },
    { text: '{כַּל־הָעָם}', gloss: T('todo el pueblo — {כָּל} «todo» + {הָעָם}') },
    { text: '{הַבֵּית־לֶחֶם}', gloss: T('la casa del pan — artículo sobre el constructo (cap. 7)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — El artículo según la inicial del sustantivo'),
      head: [T('Inicial'), T('Forma'), T('Ejemplo'), T('Glosa')],
      rows: [
        [T('B, D, G, K, L, M, N, P, S, T, Z'), '{הַ} + dagesh', '{הַמֶּלֶךְ}', T('el rey')],
        [T('Guturales {א} {ח} {ע}'), '{הָ}', '{הָאָרֶץ}', T('la tierra')],
        [T('Gutural {ה}'), T('el {הַ} desaparece'), '{הֵם}', T('el hombre')],
        [T('{ר}'), '{הָ} (às vezes {הַ})', '{הָרָאשִׁי}', T('el primero')],
        [T('Sustantivo en constructo'), T('sin artículo'), '{מֶלֶךְ־יִשְׂרָאֵל}', T('el rey de Israel')],
      ],
    },
    {
      caption: T('Tabla 2 — Artículo presente y ausente: qué cambia de sentido'),
      head: [T('Sin artículo (indefinido)'), T('Con artículo (determinado)'), T('Lectura')],
      rows: [
        ['{סוּס}', '{הַסּוּס}', T('un caballo / el caballo')],
        ['{מֶלֶךְ}', '{הַמֶּלֶךְ}', T('un rey / el rey')],
        ['{יוֹם}', '{הַיּוֹם}', T('un día / el día')],
        ['{דָּבָר}', '{הַדָּבָר}', T('una palabra / la palabra')],
        [T('Clase / categoría'), T('Clase / categoría'), T('Humanidad / creación')],
      ],
    },
  ],
};
