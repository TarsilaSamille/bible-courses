import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  title: T('Preposiciones y partículas'),
  subtitle: T('בְּ, כְּ, לְ — las tres letras que se pegan a la palabra'),
  section: T('Preposiciones, comparación, preguntas y tiempo'),
  body: C(`## Preposiciones inseparables (Gesenius §102)

Tres preposiciones hebreas se escriben como una sola letra pegada a la palabra: {ב} «en, con, por», {כ} «como, conforme a», {ל} «a, para, de».

{בְּרֵאשִׁית} «en el principio» · {בְּךָ} «en ti» · {בְּיוֹם} «en el día» · {בְּתוֹרָה} «en la ley»

{כְּצֵל} «como una sombra» (Sal 144.4: {יָמָיו כְּצֵל עוֹבֵר} «sus días son como sombra pasajera») · {כְּהָאָדָם} «según el hombre» · {כִּנְסָת} «según la asamblea»

{לַיהוָה} «al SEÑOR» · {לִי} «a mí» · {לְעוֹלָם} «para siempre» · {לַאֲבֹתֵינוּ} «a nuestros padres»

La señal de que una {ב} o una {ל} es preposición es el **dageš fuerte** en la palabra siguiente: {ב} + {רֵאשִׁית} → {בְּרֵאשִׁית}, con {ר} fuerte. Si la palabra siguiente empieza por gutural, el dageš se convierte en {ָ}: {ב} + {אָרֶץ} → {בָּאָרֶץ}.

## Preposiciones separadas

Las demás funcionan como palabras independientes: {מִן} «de, desde» · {עַל} «sobre, contra» · {אֶל} «a (personas)» · {עִם} «con» · {תַּחַת} «bajo» · {בֵּין} «entre» · {לִפְנֵי} «antes de, delante de» · {אַחֲרֵי} «después de, detrás de» · {עַד} «hasta» · {כְּדֵי} «según» · {בְּלִי} «sin» · {סָבִיב} «alrededor de».

Fíjate en algunos contrastes de golpe: {מִמִּצְרַיִם} «de Egipto» (de + lugar) · {עַל־הָאָרֶץ} «sobre la tierra» · {אֶל־מֹשֶׁה} «a Moisés» (a + persona) · {עִמָּנוּ אֵל} «con nosotros está Dios» (Is 8.10, lo que los teólogos llaman «Emanuel») · {בֵּין הָאוֹר וּבֵין הַחֹשֶׁךְ} «entre la luz y las tinieblas» (Gn 1.4).

## Preposiciones «rellenas»

Cuando una preposición se une a {ה}, forma una palabra nueva: {מֵהָרָשַׁת} «con prisa» (de {מִן} + {הָרָשַׁת}) · {בַּהֲלָכָה} «hacia allá» · {כַּהֲלָכָה} «conforme» · {לַהֲלָכָה} «a lo largo». Son pocos casos, pero explican palabras muy comunes.

## El alcance de {ב}

La preposición {ב} cubre tres funciones que el portugués y el español reparten entre varias palabras:

**Lugar**: {בַּבַּיִת} «en la casa», {בַּבָּקֶר} «por la mañana»
**Instrumento**: {בְּחָרֶב} «con la espada» (1 Co 11.25) · {בְּאַמָּה} «con fe»
**Medio o causa**: {בְּדֶרֶךְ חַיִּים} «por el camino de la vida»

Por eso una sola palabra hebrea aparece donde el portugués escribe tres: «en», «con», «por». Si traduces mecánicamente, elige el sentido que piden el verbo y el contexto.

## Conectivos: {כִּי} y {וְ}

{כִּי} es el conectivo más versátil: significa «que», «porque», «cuando», «si» y «sí». En Génesis 1 aparece en {כִּי־טוֹב} «porque era bueno» y en {כִּי־רָאָה} «y vio». Ojo: {כִּי} con {ְ} es conjunción, mientras que {כ} con {ַ} es preposición: una letra de diferencia, una función de diferencia.

{וְ} (con šewa) es el «y» de coordinación. {וַ} con {ַ} y dageš es el wayyiqtol del capítulo 10. La diferencia es un acento.

## El alcance de {ל}

{ל} introduce finalidad, dirección, posesión y duración: {לִשְׁמֹר} «para guardar» (infinitivo), {לַיהוָה} «al SEÑOR» (dirección), {לְרוּחַ} «al espíritu» (destino), {לְעוֹלָם} «para siempre» (duración), {לִמְנוֹת} «para contar».

En {חַסְדּוֹ לְעוֹלָם} «su amor [dura] para siempre» (Sal 136, 26 veces), {ל} marca duración; en {לִי} «para mí» marca posesor; en {לָבוֹא} «para venir» marca finalidad. El contexto resuelve.

## Un mapa para no perderse

Si dudas entre {ב} y {כ}, pregunta: ¿«en» o «como»? Entre {ב} y {ל}: ¿«dentro de» o «a»? Entre {ב} y {מִן}: ¿«en» o «de»?

{בְּרֵאשִׁית} es «en» el principio, no «del» principio: por eso {בְּרֵאשִׁית} se traduce «en el principio» y {מִרֵאשִׁית} «desde el principio».

Si la {ל} va pegada y el sustantivo siguiente está en constructo, probablemente tienes posesión; si va separada y el sustantivo lleva artículo, probablemente tienes dirección.`),
  vocab: [
    V('בְּרֵאשִׁית', 'רֵאשִׁית', 'en el principio'),
    V('בְּךָ', 'בְּ', 'en ti'),
    V('כְּצֵל', 'צֵל', 'como una sombra'),
    V('לְעוֹלָם', 'עוֹלָם', 'para siempre'),
    V('מִמִּצְרַיִם', 'מִצְרַיִם', 'de Egipto'),
    V('כִּי', 'כִּי', 'que, porque, cuando'),
    V('בֵּין', 'בֵּין', 'entre'),
    V('עִמָּנוּ', 'עִם', 'con nosotros'),
    V('עַל', 'עַל', 'sobre'),
    V('אֶל', 'אֶל', 'a (persona)'),
    V('תַּחַת', 'תַּחַת', 'bajo'),
    V('עַד', 'עַד', 'hasta'),
    V('מֵהָרָשַׁת', 'מִן', 'con prisa'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué significa «לְעוֹלָם» en el Sal 136?'),
    options: [T('Para siempre (¡26 veces!)'), T('Nunca'), T('Ayer'), T('Mañana')],
    answer: 0,
    hint: T('{ל} indica duración, y {עוֹלָם} es el sustantivo «mundo».'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Relaciona la preposición con su sentido.'),
      pairs: [
        { a: '{בְּרֵאשִׁית}', b: T('en, dentro') },
        { a: '{כְּצֵל}', b: T('como, según') },
        { a: '{לְעוֹלָם}', b: T('para, durante') },
        { a: '{עַל}', b: T('sobre') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo sabes que la {ב} de {בְּתוֹרָה} es preposición?'),
      options: [
        T('Por el dageš fuerte en la {ת} siguiente'),
        T('Porque la palabra lleva artículo'),
        T('Porque aparece al principio de la cláusula'),
        T('Porque lleva šewa'),
      ],
      answer: 0,
      hint: T('Regla §1: preposición de una letra + dageš fuerte en la palabra siguiente.'),
    },
    {
      kind: 'choose',
      prompt: T('En {כִּי־טוֹב} y {כְּצֵל}, la diferencia es:'),
      options: [
        T('{כִּי} es conjunción; {כ} es preposición'),
        T('{כִּי} es preposición; {כ} es conjunción'),
        T('Las dos son idénticas'),
        T('{כִּי} es una partícula; {כ} es una raíz'),
      ],
      answer: 0,
      hint: T('Regla §4: con šewa es conjunción, con pataj es preposición.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa con la preposición correcta: «___ מֵהָרָשַׁת» (con prisa).'),
      answer: 'מֵהָרָשַׁת',
      hint: T('La palabra ya está completa: la preposición {מִן} está «rellena» con {ה} dentro.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{ב} {כ} {ל} son preposiciones de una letra, pegadas a la palabra y con dageš fuerte en la consonante siguiente.',
      ),
    },
    {
      n: '2',
      text: T('Ante gutural, el dageš se convierte en {ָ}: {בְּרֵאשִׁית} → {בָּאָרֶץ} «en la tierra».'),
    },
    {
      n: '3',
      text: T(
        '{ב} significa «en», «con» y «por»: el contexto elige entre los tres ({בְּחָרֶב} «con la espada», {בְּדֶרֶךְ} «por el camino»).',
      ),
    },
    {
      n: '4',
      text: T(
        '{כִּי} (con šewa) es conjunción; {כ} (con pataj) es preposición. Una letra de diferencia cambia la función.',
      ),
    },
    {
      n: '5',
      text: T(
        '{ל} pegada + sustantivo en constructo sugiere posesión; {ל} separada + artículo sugiere dirección: {לִי} «para mí» y {לַיהוָה} «al SEÑOR».',
      ),
    },
  ],
  notes: [
    {
      label: T('Exégesis:'),
      text: T(
        'En Gn 1.4, {בֵּין הָאוֹר וּבֵין הַחֹשֶׁךְ} repite {בֵּין} y el artículo a ambos lados: la construcción hebrea de «entre X e Y» es simétrica, mientras que el portugués y el español usan una sola preposición. Por eso las traducciones descuidadas escriben «entre la luz y entre las tinieblas». La repetición no es un error, es la manera hebrea de marcar los dos extremos.',
      ),
    },
    {
      label: T('Dato curioso:'),
      text: T(
        'Cada preposición separada tiene su propio caso «relleno», y esos casos sobrevivieron hasta el hebreo moderno: {כַּהֲלָכָה} «así» (de {כ} + {ה} + {הֲלָךְ}) es hoy una de las palabras más comunes del hebreo moderno. Una preposición del Tanaj se convirtió en el «como» de un escolar.',
      ),
    },
  ],
  examples: [
    { text: '{בְּרֵאשִׁית}', gloss: T('en el principio — {ב} + {רֵאשִׁית}') },
    { text: '{בְּתוֹרָה}', gloss: T('en la ley — {ב} + {תּוֹרָה} (con dageš en {ת})') },
    { text: '{בָּאָרֶץ}', gloss: T('en la tierra — {ב} + {א} (gutural → {ָ})') },
    { text: '{בְּךָ}', gloss: T('en ti — preposición + sufijo (cap. 8)') },
    { text: '{כְּצֵל}', gloss: T('como una sombra (Sal 144.4)') },
    { text: '{כְּהָאָדָם}', gloss: T('según el hombre, como un hombre') },
    { text: '{לַיהוָה}', gloss: T('al SEÑOR — {ל} + el nombre divino') },
    { text: '{לְעוֹלָם}', gloss: T('para siempre — {ל} + {עוֹלָם} (Sal 136, 26x)') },
    { text: '{מִמִּצְרַיִם}', gloss: T('de Egipto — {מִן} separada') },
    { text: '{עַל־הָאָרֶץ}', gloss: T('sobre la tierra — {עַל} separada') },
    { text: '{אֶל־מֹשֶׁה}', gloss: T('a Moisés — {אֶל} para personas') },
    { text: '{עִמָּנוּ אֵל}', gloss: T('con nosotros está Dios (Is 8.10)') },
    { text: '{בֵּין הָאוֹר וּבֵין הַחֹשֶׁךְ}', gloss: T('entre la luz y las tinieblas (Gn 1.4)') },
    { text: '{כִּי}', gloss: T('que, porque, cuando — conjunción (con šewa)') },
    { text: '{מֵהָרָשַׁת}', gloss: T('con prisa — {מִן} + {ה} «rellena»') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Las tres inseparables y sus sentidos'),
      head: [T('Preposición'), T('Sentido 1'), T('Sentido 2'), T('Sentido 3')],
      rows: [
        ['{בְּ}', T('en, dentro de'), T('con (instrumento)'), T('por (medio)')],
        ['{כְּ}', T('como'), T('según'), T('conforme a')],
        ['{לְ}', T('para (finalidad)'), T('a, de (dirección, posesión)'), T('durante')],
      ],
    },
    {
      caption: T('Tabla 2 — Separadas, con ejemplos'),
      head: [T('Palabra'), T('Glosa'), T('Ejemplo')],
      rows: [
        ['{מִן}', T('de, desde'), '{מִמִּצְרַיִם}'],
        ['{עַל}', T('sobre, contra'), '{עַל־הָאָרֶץ}'],
        ['{אֶל}', T('a (personas)'), '{אֶל־מֹשֶׁה}'],
        ['{עִם}', T('con'), '{עִמָּנוּ אֵל}'],
        ['{תַּחַת}', T('bajo'), '{תַּחַת שָׁמַיִם}'],
        ['{בֵּין}', T('entre'), '{בֵּין הָאוֹר וּבֵין הַחֹשֶׁךְ}'],
        ['{עַד}', T('hasta'), '{עַד־הַיּוֹם}'],
        ['{בְּלִי}', T('sin'), '{בְּלִי־דָבָר}'],
        ['{סָבִיב}', T('alrededor de'), '{סָבִיב הַשָּׂדֶה}'],
      ],
    },
  ],
};
