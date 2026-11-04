import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  title: T('Colores y comparación'),
  subtitle: T('טוֹב מִן — mejor QUE, y el rojo de Adán'),
  section: T('Preposiciones, comparación, preguntas y tiempo'),
  body: C(`## Comparar con {מִן}

El hebreo no usa sufijos de grado: el comparativo se construye con la preposición {מִן} «de/que». {טוֹב} «bueno» → {טוֹב מִן} «mejor que» · {רָע} «malo» → {רָע מִן} «peor que» · {גָּדוֹל} «grande» → {גָּדוֹל מִן} «mayor que».

Ejemplo canónico: {כִּי־טוֹבָה חָכְמָה מִפְּנִינִים} «pues la sabiduría es mejor que las perlas» (Pr 8.11). Y {גָּבוֹר מֵהַמָּקוֹם} «más fuerte que el lugar».

Una variación de registro: el sustantivo que sigue a {מִן} suele entrar en estado **constructo** cuando el sustantivo comparado también lo hace; la forma más común lleva maqaf: {טוֹב־מִן}. En Proverbios la construcción de superlativo aparece a veces como {טוֹב־מִן} sin {מִן} visible: decide el contexto.

## Igualdad y superioridad

{nָכוֹן} «igual a» + {ל} (o {נָכוֹן־לְ}): {כָּל־בְּשָׂר־אֵתֶם כְּעֵצֶם אֶחָד} «toda la carne como un solo hueso» (Gn 2.23).

{גָּדוֹל־מִן} «mayor que» es la fórmula de superlativo analítica; {הַגָּדוֹל} «el grande» es el superlativo con artículo.

## Superlativo: tres caminos

El hebreo tiene tres maneras de decir «el más»:

**Constructo**: {מֶלֶךְ מְלָכִים} «rey de reyes», con cuidado: puede significar «un rey entre reyes».

**Repetición**: {קָדוֹשׁ קָדָשִׁים} «santísimo» (el Santo de los Santos), {שִׁיר הַשִּׁירִים} «cantar de cantares», {שַׁדַּי שַׁדַּי} «Señor de señores».

**Artículo + adjetivo**: {הַיּוֹם הַגָּדוֹל} «el gran día», {הָרָאשִׁית} «el principio».

En {שִׁיר הַשִּׁירִים} está además el otro sentido: «cantar de cantares». Al hebreo le gusta duplicar, y decide el contexto.

## Colores

Los colores son adjetivos corrientes, y varios nombres de color son también nombres de plantas y animales:

{לָבָן} «blanco» → {לְבָנָה} (f.) · {שָׁחֹר} «negro» · {יָרֹק} «verde» · {אָדֹם} «rojo»

{שָׁנִי} «escarlata» — el hilo de {חוּט הַשָּׁנִי} «el cordón escarlata» (Jos 2.18, la casa de Raab) · {תְּכֵלֶת} «azul-púrpura» · {אַרְגָּמָן} «púrpura».

El par {תְּכֵלֶת} {אַרְגָּמָן} describe las cortinas del tabernáculo (Ex 26) y el manto del sumo sacerdote: era la tela más cara del mundo antiguo.

## El color de Adán

Vale la pena detenerse en {אָדֹם}. El adjetivo «rojo» viene de la raíz de {אָדָם} «hombre» y de {אֲדָמָה} «suelo, tierra». La tradición judía lo lee así: Adán fue hecho de barro rojo, y su nombre es el color del que vino.

Lo mismo vale para otras palabras: la lengua enlaza las palabras por su origen, y los colores no son una excepción.

## El color y el alfarero

Uno de los usos más bellos del color en el Tanaj está en Jeremías 18, donde el barro del alfarero «vuelve a la tierra». Colores y barro pertenecen a la misma familia de imágenes en los profetas.

Y lo más célebre de todo: la ley del testimonio (Dt 17.6) exige dos testigos, no un color, sino un número. Vuelve al capítulo 11 para eso; la lección de aquí es otra: **el hebreo nombra los colores con la misma precisión con que nombra los utensilios**, y traducirlo todo como «color» esconde la mitad del texto.`),
  vocab: [
    V('טוֹב מִן', 'טוֹב', 'mejor que'),
    V('חָכְמָה', 'חָכְמָה', 'sabiduría'),
    V('מִפְּנִינִים', 'פֶּנִי', 'perlas'),
    V('קֹדֶשׁ קָדָשִׁים', 'קֹדֶשׁ', 'el santísimo'),
    V('לָבָן', 'לָבָן', 'blanco'),
    V('שָׁחֹר', 'שָׁחֹר', 'negro'),
    V('אָדֹם', 'אָדֹם', 'rojo'),
    V('יָרֹק', 'יָרֹק', 'verde'),
    V('חוּט הַשָּׁנִי', 'שָׁנִי', 'cordón escarlata'),
    V('תְּכֵלֶת', 'תְּכֵלֶת', 'azul-púrpura'),
    V('אַרְגָּמָן', 'אַרְגָּמָן', 'púrpura'),
    V('מֶלֶךְ מְלָכִים', 'מֶלֶךְ', 'rey de reyes'),
    V('רָע', 'רָע', 'malo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se forma el comparativo en hebreo?'),
    options: [
      T('Con un sufijo -er'),
      T('Con מִן: «טוֹב מִן» (bueno DE = mejor que)'),
      T('Duplicando la palabra'),
      T('Con el prefijo הַ'),
    ],
    answer: 1,
    hint: T('El hebreo no tiene sufijos de grado: usa una preposición separada.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Relaciona el color con su adjetivo.'),
      pairs: [
        { a: T('blanco'), b: '{לָבָן}' },
        { a: T('negro'), b: '{שָׁחֹר}' },
        { a: T('rojo'), b: '{אָדֹם}' },
        { a: T('escarlata'), b: '{שָׁנִי}' },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué forma indica superlativo por repetición?'),
      options: [T('מֶלֶךְ מְלָכִים'), T('קָדוֹשׁ קָדָשִׁים'), T('הַגָּדוֹל'), T('גָּבוֹר מֵהַמָּקוֹם')],
      answer: 1,
      hint: T('Regla §3: repetir la misma palabra es un superlativo enfático.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa el comparativo: «חָכְמָה טוֹבָה ___ פְּנִינִים» (mejor que).'),
      answer: 'מִפְּנִינִים',
      hint: T('La preposición es {מִן} y el sustantivo {פֶּנִי} entra en constructo.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Por qué {אָדֹם} «rojo» es etimológicamente interesante?'),
      options: [
        T('Comparte raíz con {אָדָם} «hombre» y {אֲדָמָה} «tierra»'),
        T('Significa «sangre» en griego'),
        T('Es el único adjetivo que no flexiona'),
        T('Solo aparece en el Pentateuco'),
      ],
      answer: 0,
      hint: T('Regla §5: las palabras de color vienen del mundo concreto.'),
    },
  ],
  rules: [
    { n: '1', text: T('El comparativo hebreo usa {מִן} «de/que»: {טוֹב מִן} «mejor que».') },
    { n: '2', text: T('{נָכוֹן} + {ל} significa «igual a»: {כְּעֵצֶם אֶחָד} «como un solo hueso».') },
    {
      n: '3',
      text: T(
        'El superlativo aparece en constructo ({מֶלֶךְ מְלָכִים}), por repetición ({קָדוֹשׁ קָדָשִׁים}) o con artículo ({הַגָּדוֹל}).',
      ),
    },
    {
      n: '4',
      text: T(
        'Los colores son adjetivos corrientes y concuerdan en género y número como cualquier otro (cap. 4).',
      ),
    },
    {
      n: '5',
      text: T(
        'Algunos colores tienen etimología concreta: {אָדֹם} «rojo» viene de {אָדָם} «hombre» y {אֲדָמָה} «tierra».',
      ),
    },
  ],
  notes: [
    {
      label: T('Exégesis:'),
      text: T(
        'Cuidado con {שִׁיר הַשִּׁירִים}: puede ser «cantar de cantares» (superlativo) o «un canto de cantos» (literal). En Ezequiel 43.27 el verbo {הֵרִיד} «haz que se oiga» acompaña el canto, y el contexto prefiere el sentido literal. El hebreo antiguo amaba la ambigüedad, y las traducciones la han abrazado en vez de resolverla.',
      ),
    },
    {
      label: T('Dato curioso:'),
      text: T(
        'La púrpura hebrea venía de un caracol del Mediterráneo, y la palabra {אַרְגָּמָן} llegó al portugués y al español por vía de «argema». Romanos y fenicios pagaban una fortuna por ella, y por eso el tabernáculo, con {תְּכֵלֶת} y {אַרְגָּמָן}, era el objeto más lujoso de la Israel antigua.',
      ),
    },
  ],
  examples: [
    { text: '{טוֹב מִן}', gloss: T('mejor que — comparativo') },
    { text: '{רָע מִן}', gloss: T('peor que — comparativo negativo') },
    { text: '{חָכְמָה טוֹבָה מִפְּנִינִים}', gloss: T('la sabiduría es mejor que las perlas (Pr 8.11)') },
    { text: '{גָּבוֹר מֵהַמָּקוֹם}', gloss: T('más fuerte que el lugar') },
    { text: '{נָכוֹן}', gloss: T('igual a, preparado para') },
    { text: '{מֶלֶךְ מְלָכִים}', gloss: T('rey de reyes — o «un rey entre reyes»') },
    { text: '{קֹדֶשׁ קָדָשִׁים}', gloss: T('el santísimo (el Santo de los Santos)') },
    { text: '{שִׁיר הַשִּׁירִים}', gloss: T('el cantar de cantares — o «cantar de cantares»') },
    { text: '{לָבָן}', gloss: T('blanco (fem. {לְבָנָה})') },
    { text: '{שָׁחֹר}', gloss: T('negro — {שַׁעַר הַשָּׁחֹר} «cabello negro» (Ct 5.11)') },
    { text: '{אָדֹם}', gloss: T('rojo — de {אָדָם} y {אֲדָמָה}') },
    { text: '{חוּט הַשָּׁנִי}', gloss: T('el cordón escarlata (Jos 2.18, casa de Raab)') },
    { text: '{אַרְגָּמָן}', gloss: T('púrpura — la tela más cara del mundo antiguo') },
    { text: '{יָרֹק}', gloss: T('verde — «el hombre será como árbol verde» (Sal 92.15)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Tres caminos al superlativo'),
      head: [T('Tipo'), T('Ejemplo'), T('Glosa'), T('Salvedad')],
      rows: [
        [T('Constructo'), '{מֶלֶךְ מְלָכִים}', T('rey de reyes'), T('puede ser «un rey entre reyes»')],
        [T('Repetición'), '{קָדוֹשׁ קָדָשִׁים}', T('el santísimo'), T('máximo de superlativo')],
        [
          T('Repetición'),
          '{שִׁיר הַשִּׁירִים}',
          T('el cantar de cantares'),
          T('puede ser «cantar de cantares»'),
        ],
        [T('Artículo + adjetivo'), '{הַיּוֹם הַגָּדוֹל}', T('el gran día'), T('superlativo determinado')],
        [T('Analítico'), '{גָּבוֹר מֵהַמָּקוֹם}', T('más fuerte que el lugar'), T('usa {מִן} con maqaf')],
      ],
    },
    {
      caption: T('Tabla 2 — Los colores de la Escritura'),
      head: [T('Color'), T('Masc.'), T('Fem.'), T('Dónde aparece')],
      rows: [
        [T('blanco'), '{לָבָן}', '{לְבָנָה}', T('{חוּט לָבָן} «lino blanco» (Mq 3.3)')],
        [T('negro'), '{שָׁחֹר}', '{שָׁחוֹרָה}', T('{שַׁעַר הַשָּׁחֹר} «cabello negro» (Ct 5.11)')],
        [T('rojo'), '{אָדֹם}', '{אֲדוֹמָה}', T('raíz de {אָדָם} «hombre»')],
        [T('escarlata'), '{שָׁנִי}', '{שָׁנִית}', T('{חוּט הַשָּׁנִי} (Jos 2.18)')],
        [T('púrpura'), '{אַרְגָּמָן}', '{אַרְגָּמָנִית}', T('tabernáculo y sumo sacerdote')],
        [T('azul'), '{תְּכֵלֶת}', '{תְּכֵלֶת}', T('con {אַרְגָּמָן} en las cortinas (Ex 26)')],
        [T('verde'), '{יָרֹק}', '{יָרְקָה}', T('árbol del Sal 92.15')],
      ],
    },
  ],
};
