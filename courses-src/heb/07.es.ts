import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('El estado constructo'),
  subtitle: T('בֶּן־אָדָם — la preposición de «de» que no existe'),
  section: T('Primeros textos y partículas'),
  body: C(`## El problema: no existe «de»

El hebreo no tiene palabra para la preposición portuguesa/española «de». Lo que tiene es un truco de dos nombres: el primero queda en **estado constructo** (מִצְבָּה, mishkat) y el segundo en **estado absoluto** (מֶמְשָׁה, memshut). El primero va pegado al segundo con un maqaf y se traduce por «de», «del», «de la» — o por nada, como en un apodo.

{בֵּן} «hijo» + {אָדָם} «Adán» → {בֶּן־אָדָם} «hijo de Adán / hijo del hombre»
{דָּבָר} «palabra» + {יְהוָה} «SEÑOR» → {דְּבַר־יְהוָה} «la palabra del SEÑOR»
{מֶלֶךְ} «rey» + {יִשְׂרָאֵל} «Israel» → {מֶלֶךְ־יִשְׂרָאֵל} «el rey de Israel»

Fíjate en que el **segundo** nombre queda intacto (con artículo, si lo tenía), y es él quien da la determinación a la expresión entera: {הַמֶּלֶךְ} + {יִשְׂרָאֵל} = {מֶלֶךְ־יִשְׂרָאֵל} «el rey de Israel», no «un rey de Israel».

## Qué pasa con el artículo

En estado constructo el sustantivo **pierde el artículo**. Es la señal más fiable: {הַבַּיִת} «la casa» → {בֵּית־לֶחֶם} «casa del pan». Si ves un {הַ} delante de un sustantivo que a su vez sigue a otro sustantivo, algo va mal.

Lo inverso también vale: el artículo puede colocarse sobre el par como conjunto, {הַבֵּית־לֶחֶם} «la casa del pan»: la casa sigue determinada, pero el {הַ} se apoya en el primer elemento.

## Qué pasa con la vocal

El constructo también acorta la vocal final en muchos sustantivos. Compara:

{מֶלֶךְ} «rey» → {מֶלֶךְ} «(de) rey» (la vocal no cambia)
{סוּס} «caballo» → {סֻס} «(de) caballo» ({וּ} → {ֻ})
{הַפְּלָאִים} «prodigios» → {פְּלָאִי} «prodigios (de)»
{שֵׁם} «nombre» + {יְהוָה} → {שְׁמוֹ־יְהוָה} «el nombre del SEÑOR» (el šewa de {שֵׁם} pasa a {ו} holam)

Regla de bolsillo: el plural suele revelar la forma antigua del singular — {מְלָכִים} muestra que el constructo de {מֶלֶךְ} se apoya en una base {מְלָךְ} con {ָ}.

## La señal de alarma: el dageš

Una {ל} o una {ב} dentro de un sustantivo es casi siempre preposición, no parte de la raíz. Cuando {בְּ} antecede a una palabra, esa palabra recibe dageš fuerte: {בֵּית־לֶחֶם} tiene {ל} con šewa ({לֶ}), y la {ל} inicial es la preposición. Lo mismo ocurre en {בְּרֵאשִׁית} (cap. 6) y {בְּיוֹם}.

## Cadenas de tres o más

El constructo se encadena, y la traducción va acumulando «de»:

{הַר־צִיּוֹן} «el monte Sión» · {עִיר־דָּוִד} «la ciudad de David» · {בֵּית־יְהוָה} «la casa del SEÑOR» (el Templo) · {חֵילוֹת יְהוָה} «los ejércitos del SEÑOR» (1 Sam 17.45) · {אֶבֶן הַעֵזֶר} «la piedra de ayuda» (Ex 17.6) · {קֹדֶשׁ הַקָּדָשִׁים} «el santo de los santos».

Cuando el segundo elemento es un topónimo, la preposición desaparece en la traducción: {בֵּית־לֶחֶם} es «Belén», no «la casa del pan», y {הַר־צִיּוֹן} es «Sión», no «el monte de Sión».

## Para el capítulo siguiente

Ahora ya puedes decir «de». En el capítulo 8 verás la otra mitad de la gramática de los posesivos: la preposición {שֶׁל} es rara en la Biblia, pero el **sufijo pronominal** hace ese trabajo en casi toda oración: {סוּסִי} «mi caballo».`),
  vocab: [
    V('בֶּן־אָדָם', 'בֵּן', 'hijo del hombre'),
    V('בֵּית־לֶחֶם', 'בַּיִת', 'Belén (casa del pan)'),
    V('דְּבַר־יְהוָה', 'דָּבָר', 'palabra del SEÑOR'),
    V('מֶלֶךְ־יִשְׂרָאֵל', 'מֶלֶךְ', 'rey de Israel'),
    V('הַר־צִיּוֹן', 'הַר', 'monte Sión'),
    V('עִיר־דָּוִד', 'עִיר', 'ciudad de David'),
    V('בֵּית־יְהוָה', 'בַּיִת', 'Templo (casa del SEÑOR)'),
    V('שְׁמוֹ־יְהוָה', 'שֵׁם', 'nombre del SEÑOR'),
    V('אֶרֶץ־כְּנַעַן', 'אֶרֶץ', 'tierra de Canaan'),
    V('קֹדֶשׁ הַקָּדָשִׁים', 'קֹדֶשׁ', 'santo de los santos'),
    V('סוּס', 'סוּס', 'caballo'),
    V('שֵׁם', 'שֵׁם', 'nombre'),
    V('פֶּלֶא', 'פֶּלֶא', 'prodigio'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué significa «בֵּית־לֶחֶם» literalmente?'),
    options: [T('Casa del pan'), T('Hijo del hombre'), T('Ciudad de David'), T('Monte Sión')],
    answer: 0,
    hint: T('{בַּיִת} es «casa» y {לֶחֶם} es «pan»: el maqaf es la señal del constructo.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Cuál de estas formas está en estado constructo?'),
      options: [T('הַמֶּלֶךְ'), T('מֶלֶךְ־יִשְׂרָאֵל'), T('הַבַּיִת'), T('הַיּוֹם')],
      answer: 1,
      hint: T('En constructo el artículo {הַ} desaparece y la palabra recibe dageš fuerte.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el nombre en constructo con su base absoluta.'),
      pairs: [
        { a: '{בֵּית־}', b: T('{בַּיִת}') },
        { a: '{מֶלֶךְ־}', b: T('{מֶלֶךְ}') },
        { a: '{שְׁמוֹ־}', b: T('{שֵׁם}') },
        { a: '{דְּבַר־}', b: T('{דָּבָר}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Escribe «el nombre del SEÑOR» como constructo + maqaf.'),
      answer: 'שְׁמוֹ־יְהוָה',
      hint: T('{שֵׁם} en constructo pasa a {שְׁמוֹ} (el šewa pasa a {ו} holam).'),
    },
    {
      kind: 'choose',
      prompt: T('¿Por qué {בֵּית־לֶחֶם} se traduce «Belén» y no «casa del pan»?'),
      options: [
        T('Porque el segundo nombre es un topónimo'),
        T('Porque {בַּיִת} es un verbo'),
        T('Porque falta el artículo {הַ}'),
        T('Porque aparece la preposición {בְּ}'),
      ],
      answer: 0,
      hint: T('Regla §5: con topónimo, el par se convierte en nombre propio.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El estado constructo traduce la preposición «de»: dos nombres unidos por maqaf, el primero sin artículo.',
      ),
    },
    {
      n: '2',
      text: T(
        'El segundo nombre queda intacto y da la determinación de toda la expresión: {מֶלֶךְ־יִשְׂרָאֵל} es «el rey de Israel».',
      ),
    },
    {
      n: '3',
      text: T(
        'El sustantivo en constructo pierde el artículo: {הַבַּיִת} → {בֵּית־לֶחֶם}. El artículo puede colocarse sobre el par: {הַבֵּית־לֶחֶם}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Muchos constructos acortan la vocal: {סוּס} → {סֻס}, {הַשֵּׁם} → {שְׁמוֹ}. El plural del sustantivo revela la base antigua.',
      ),
    },
    {
      n: '5',
      text: T(
        'Con un topónimo, el constructo se convierte en nombre propio y desaparece la preposición: {בֵּית־לֶחֶם} = «Belén».',
      ),
    },
  ],
  notes: [
    {
      label: T('Cuidado:'),
      text: T(
        'No todo sustantivo seguido de otro está en constructo. En {אֶרֶץ מִצְרַיִם} «la tierra de Egipto» es la preposición {מִן} la que hace el trabajo; en {שֵׁם הָאֱלֹהִים} el segundo nombre es aposicional. La prueba sigue siendo el dageš: una palabra con dageš fuerte tras {בְּ} o {לְ} está en constructo.',
      ),
    },
    {
      label: T('Dato curioso:'),
      text: T(
        'Existe una preposición verdadera para «de» — {שֶׁל} — y la encontrarás en hebreo moderno y en unos pocos versículos. En {כָּל־שֶׁל} la {ש} lleva incluso un dageš poco común, porque el sustantivo se impone a la preposición. La Biblia prefirió el constructo: es más corto y más rígido, ideal para un texto hecho para memorizarse.',
      ),
    },
  ],
  examples: [
    { text: '{בֶּן־אָדָם}', gloss: T('hijo de Adán / hijo del hombre') },
    { text: '{דְּבַר־יְהוָה}', gloss: T('la palabra del SEÑOR') },
    { text: '{מֶלֶךְ־יִשְׂרָאֵל}', gloss: T('el rey de Israel — el artículo fue al segundo nombre') },
    { text: '{בֵּית־לֶחֶם}', gloss: T('casa del pan → Belén') },
    { text: '{הַבֵּית־לֶחֶם}', gloss: T('la casa del pan — el artículo sobre el par') },
    { text: '{שְׁמוֹ־יְהוָה}', gloss: T('el nombre del SEÑOR — {שֵׁם} → {שְׁמוֹ}') },
    { text: '{הַר־צִיּוֹן}', gloss: T('el monte Sión (topónimo: sin «de»)') },
    { text: '{חֵילוֹת יְהוָה}', gloss: T('los ejércitos del SEÑOR (1 Sam 17.45)') },
    { text: '{קֹדֶשׁ הַקָּדָשִׁים}', gloss: T('el santo de los santos — superlativo en cadena') },
    { text: '{סֻס}', gloss: T('caballo (constructo de {סוּס})') },
    { text: '{פְּלָאִי}', gloss: T('(prodigios) de — constructo de {פֶּלֶא}') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Los dos estados uno al lado del otro'),
      head: [T('Nombre'), T('Absoluto (aislado)'), T('Constructo (ligado)')],
      rows: [
        [T('rey'), '{הַמֶּלֶךְ}', '{מֶלֶךְ־יִשְׂרָאֵל}'],
        [T('casa'), '{הַבַּיִת}', '{בֵּית־לֶחֶם}'],
        [T('caballo'), '{הַסּוּס}', '{סֻס} (em {סֻס־הַבַּעַל})'],
        [T('nombre'), '{הַשֵּׁם}', '{שְׁמוֹ־יְהוָה}'],
        [T('prodigio'), '{הַפְּלָאִים}', '{פְּלָאִי}'],
      ],
    },
    {
      caption: T('Tabla 2 — Lo que revela el dageš'),
      head: [T('Palabra'), T('Con {הַ}'), T('Lectura')],
      rows: [
        ['{מֶלֶךְ}', '{הַמֶּלֶךְ}', T('el rey')],
        ['{מֶלֶךְ}', '{מֶלֶךְ־יִשְׂרָאֵל}', T('el rey de Israel')],
        ['{שֵׁם}', '{הַשֵּׁם}', T('el nombre')],
        ['{שֵׁם}', '{שְׁמוֹ־יְהוָה}', T('el nombre del SEÑOR')],
        ['{בַּיִת}', '{הַבַּיִת}', T('la casa')],
        ['{בַּיִת}', '{בֵּית־לֶחֶם}', T('la casa del pan')],
      ],
    },
    {
      caption: T('Tabla 3 — Cadenas de constructo'),
      head: [T('Cadena'), T('Traducción literal'), T('Dónde aparece')],
      rows: [
        ['{בֶּן־אָדָם}', T('hijo de Adán'), T('Génesis, Ezequiel')],
        ['{בֵּית־לֶחֶם}', T('casa del pan'), T('Belén (Lc 2.4)')],
        ['{הַר־צִיּוֹן}', T('monte de Sión'), T('Salmos y profetas')],
        ['{חֵילוֹת יְהוָה}', T('ejércitos del SEÑOR'), T('1 Sam 17.45')],
        ['{קֹדֶשׁ הַקָּדָשִׁים}', T('santo de los santos'), T('Lv 16, 1 Re 8')],
        ['{אֶבֶן הַעֵזֶר}', T('piedra de ayuda'), T('Éxodo 17.6')],
        ['{בֵּית־בָּתִּים}', T('casa de casas'), T('Jeremías 7.11')],
      ],
    },
  ],
};
