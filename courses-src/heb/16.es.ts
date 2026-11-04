import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('Los infinitivos'),
  subtitle: T('לִכְתֹּב, שָׁמוֹעַ — para escribir, oyendo'),
  section: T('Formas no finitas y guturales'),
  body: C(`## Dos infinitivos, dos oficios

El hebreo tiene dos formas infinitivas (Gesenius §45), ambas derivadas del esqueleto {קְטֹל} (qatal) de la raíz:

**Constructo** ({ל} + {קְטֹל}): {לִכְתֹּב} «escribir», {לִשְׁמֹר} «guardar», {לִרְאוֹת} «ver». Es la forma normal tras {יָכוֹל} «poder», «querer» y, sobre todo, para expresar finalidad: {לִשְׁמֹר אֶת־יוֹם הַשַּׁבָּת} «para guardar el sábado».

**Absoluto** ({קָטוֹל}, sin {ל}): {שָׁמוֹעַ} «oyendo», {מוֹת} «muriendo», {בָּרְכִי} «bendito». No indica finalidad: indica **énfasis**, y casi siempre aparece junto a un verbo finito.

## El absoluto como énfasis

La construcción más famosa de la Biblia es {שָׁמוֹעַ תִּשְׁמַע} «oyendo oirás» (Dt 28.1) = «seguramente oirás»; {מוֹת תָּמוּת} «muriendo morirás» (Gn 2.17) = «seguramente morirás».

El mecanismo es sencillo: el infinitivo absoluto da fuerza al verbo finito que viene justo después. Quien traduce literalmente «oyendo oirás» pierde el énfasis; quien escribe «seguramente oirás» acierta el sentido.

Lo mismo ocurre con {יֹאמַר}, que puede volverse {אֹמֵר} «seguramente dirá», y con {בָּרַךְ}, que puede volverse {בָּרָךְ} «seguramente bendecirá».

## {לֵאמֹר} y el pleonasmo hebreo

{לֵאמֹר} «diciendo» viene de la raíz {אמר} y introduce **todo** discurso divino: {וַיֹּאמֶר יְהוָה אֶל־מֹשֶׁה לֵאמֹר} «Y dijo el SEÑOR a Moisés, diciendo:» (Ex 6.10). El hebreo repite el sentido por pura tradición literaria, y esa repetición es la que el griego copió en {λέγων} y el latín en {dicens}.

Por eso casi todos los capítulos proféticos empiezan con {אָמַר יְהוָה} + {לֵאמֹר}. No es redundancia del escriba: es la marca de que la palabra es de Dios, no del profeta.

## Negación con infinitivo

El hebreo tiene tres maneras de decir «no hacer»:

{לֹא} + infinitivo constructo: {לֹא־תִרְצָח} «no matarás» (Ex 20.13)
{אֵין} + infinitivo constructo: {אֵין־לְהָרֵג} «no puede ser matado»
{ל} (con la {ו} negadora) + infinitivo absoluto: {וּלְאָכְלָה} «y no comerás» (Gn 2.17)

La tercera es rara pero legítima: {וּלְאָכְלָה} lleva {ל} + {אָכְלָה} (absoluto), con la {ו} negadora. Con {לֹא} más un absoluto se obtiene la negación más fuerte: «de ninguna manera enviará».

## El mismo infinitivo con otra preposición

El infinitivo absoluto admite preposiciones, y cada una cambia el sentido: {ב} = «cuando», {כ} = «cuando» (también), {אַחֲרֵי} = «después de que», {לִפְנֵי} = «antes de que».

En Génesis 1.5, {וַיִּקְרָא אֱלֹהִים לָאוֹר יוֹם} llama {יוֹם} «día» al primer período y {לָיְלָה} «noche» al segundo. En Génesis 2.7, {בְּבֹא־הָאָדָם} significa «cuando llegó el hombre»: el mismo infinitivo {בֹּא} que aquí aparece como verbo {בָּא} funciona como expresión temporal.

## Dónde aparece el infinitivo

Tras {יָכוֹל} «poder»: «puede volar»
Como objeto directo: {חָפֵץ לִמְנוֹת} «desea contar»
Con {אֶת} como objeto: {לַעֲשׂוֹת אֶת־הַתּוֹרָה} «para hacer la ley»
Negado por {בְּלִי}: {בְּלִי־דָבָר} «sin palabras»

El punto es este: el hebreo prefiere el participio (cap. 14) donde el portugués y el español usan el gerundio. Por eso los traductores escriben «bendito» donde está {בָּרוּךְ} y «bendiciendo» donde está {בֹּרֵךְ}: la distinción es estado frente a acción.`),
  vocab: [
    V('לִכְתֹּב', 'כתב', 'escribir'),
    V('לֵאמֹר', 'אמר', 'diciendo'),
    V('לִשְׁמֹר', 'שׁמר', 'guardar'),
    V('לִרְאוֹת', 'ראה', 'ver'),
    V('שָׁמוֹעַ', 'שׁמע', 'oyendo (énfasis)'),
    V('מוֹת', 'מות', 'muriendo (énfasis)'),
    V('בָּרָךְ', 'ברך', 'seguramente bendecirá'),
    V('לֹא', 'לֹא', 'no'),
    V('אֵין', 'אֵין', 'no hay, es imposible'),
    V('לָבוֹא', 'בוא', 'venir'),
    V('שַׁבָּת', 'שַׁבָּת', 'sábado, descanso'),
    V('אֲנִי', 'אֲנִי', 'yo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué significa «מוֹת תָּמוּת» (Gn 2.17)?'),
    options: [
      T('Quizá morirás'),
      T('Seguramente morirás (infinitivo + verbo = énfasis)'),
      T('No morirás'),
      T('Muerte y vida'),
    ],
    answer: 1,
    hint: T('Regla §2: el infinitivo absoluto refuerza el verbo finito que viene después.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Relaciona la forma con su tipo de infinitivo.'),
      pairs: [
        { a: '{לִכְתֹּב}', b: T('constructo') },
        { a: '{שָׁמוֹעַ}', b: T('absoluto') },
        { a: '{לֵאמֹר}', b: T('constructo') },
        { a: '{בָּרָךְ}', b: T('absoluto') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es el imperativo negado de «no temas»?'),
      options: [T('לֹא־תִּירָא'), T('אַל־תִּירָא'), T('לֹא יִרְאָה'), T('אֵין־תִּירָא')],
      answer: 1,
      hint: T('{אַל} + jussivo niega la voluntad; {לֹא} niega el indicativo (cap. 16).'),
    },
    {
      kind: 'fill',
      prompt: T('Escribe el infinitivo constructo de {אמר} «decir».'),
      answer: 'לֵאמֹר',
      hint: T('{ל} + {אֹמְרִי}? No: {ל} + el esqueleto {קְטֹל} de la raíz = {לֵאמֹר}.'),
    },
    {
      kind: 'choose',
      prompt: T('En «בְּבֹא־הָאָדָם», ¿qué indica {ב} + infinitivo absoluto?'),
      options: [
        T('«cuando» (tiempo)'),
        T('«porque» (causa)'),
        T('«para que» (finalidad)'),
        T('«aunque» (concesión)'),
      ],
      answer: 0,
      hint: T('Regla §4: {ב} y {כ} + absoluto dan una expresión temporal.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El infinitivo constructo ({ל} + {קְטֹל}) expresa finalidad; el absoluto ({קָטוֹל}) expresa énfasis.',
      ),
    },
    {
      n: '2',
      text: T(
        'El absoluto casi siempre acompaña a un verbo finito: {שָׁמוֹעַ תִּשְׁמַע} «seguramente oirás».',
      ),
    },
    {
      n: '3',
      text: T(
        '{לֵאמֹר} «diciendo» introduce todo discurso divino: {וַיֹּאמֶר יְהוָה לֵאמֹר} «y dijo el SEÑOR, diciendo».',
      ),
    },
    {
      n: '4',
      text: T(
        'El mismo absoluto cambia de sentido con la preposición: {ב} y {כ} dan «cuando», {לִפְנֵי} da «antes de que».',
      ),
    },
    {
      n: '5',
      text: T(
        'Donde el portugués y el español usan el gerundio, el hebreo usa el participio: {בָּרוּךְ} «bendito» y {בֹּרֵךְ} «bendiciendo».',
      ),
    },
  ],
  notes: [
    {
      label: T('Exégesis:'),
      text: T(
        'Génesis 2.17 cambia de tono cuando el traductor acierta el absoluto: {מוֹת תָּמוּת} no es «muriendo morirás» (quien describe un proceso), sino «seguramente morirás» (quien amenaza). Tres palabras deciden la vida de una persona, y están en el verbo principal, no en el sustantivo.',
      ),
    },
    {
      label: T('Dato curioso:'),
      text: T(
        'El hebreo no tiene gerundio. Donde el portugués escribe «estoy escribiendo», el hebreo escribe o bien {אֲנִי כֹּתֵב} (participio + pronombre) o bien {אֲנִי כּוֹתֵב} (infinitivo + pronombre). Las lenguas romances hicieron lo contrario: convirtieron el antiguo participio en forma verbal compuesta («estoy amando»), y por eso el {-er} portugués y el {-ando} español acabaron haciendo el trabajo que el hebreo asignaba al participio simple.',
      ),
    },
  ],
  examples: [
    { text: '{לִכְתֹּב}', gloss: T('escribir (inf. constructo)') },
    { text: '{לֵאמֹר}', gloss: T('diciendo — inf. de {אמר}') },
    { text: '{שָׁמוֹעַ}', gloss: T('oyendo (inf. absoluto) — énfasis') },
    { text: '{מוֹת}', gloss: T('muriendo (inf. absoluto) — énfasis') },
    { text: '{שָׁמוֹעַ תִּשְׁמַע}', gloss: T('seguramente oirás (Dt 28.1)') },
    { text: '{מוֹת תָּמוּת}', gloss: T('seguramente morirás (Gn 2.17)') },
    { text: '{לֹא־תִרְצָח}', gloss: T('no matarás (Ex 20.13)') },
    { text: '{וּלְאָכְלָה}', gloss: T('y no comerás (Gn 2.17) — {ו} + inf. absoluto') },
    { text: '{אֵין־לְהָרֵג}', gloss: T('no puede ser matado — {אֵין} + inf.') },
    { text: '{בְּבֹא־הָאָדָם}', gloss: T('cuando llegó el hombre (Gn 2.7) — {ב} + abs.') },
    { text: '{בָּרָךְ}', gloss: T('seguramente bendecirá (absoluto de {ברך})') },
    { text: '{לִשְׁמֹר}', gloss: T('guardar — mismo esqueleto que {שָׁמוֹעַ}') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — El esqueleto {קְטֹל} y sus tres realizaciones'),
      head: [T('Raíz'), T('Qatal (3.º m.)'), T('Inf. constructo'), T('Inf. absoluto')],
      rows: [
        ['{כתב}', '{כָּתַב}', '{לִכְתֹּב}', '{כָּתוֹב}'],
        ['{שׁמר}', '{שָׁמַר}', '{לִשְׁמֹר}', '{שָׁמוֹעַ}'],
        ['{מות}', '{מָת}', '{לָמוּת}', '{מוֹת}'],
        ['{ברך}', '{בָּרַךְ}', '{לְבָרֵךְ}', '{בָּרָךְ}'],
        ['{אמר}', '{אָמַר}', '{לֵאמֹר}', '{אֹמֵר}'],
        ['{ראה}', '{רָאָה}', '{לִרְאוֹת}', '{רֹאה}'],
        ['{בוא}', '{בָּא}', '{לָבוֹא}', '{בֹּא}'],
      ],
    },
    {
      caption: T('Tabla 2 — Construcciones con infinitivo'),
      head: [T('Tipo'), T('Ejemplo'), T('Glosa')],
      rows: [
        [T('Finalidad'), '{לִשְׁמֹר אֶת־יוֹם הַשַּׁבָּת}', T('para guardar el sábado')],
        [T('Énfasis (absoluto)'), '{שָׁמוֹעַ תִּשְׁמַע}', T('seguramente oirás (Dt 28.1)')],
        [T('Introduciendo discurso'), '{וַיֹּאמֶר יְהוָה לֵאמֹר}', T('y dijo el SEÑOR, diciendo')],
        [T('Negación {לֹא}'), '{לֹא־תִרְצָח}', T('no matarás (Ex 20.13)')],
        [T('Negación {אֵין}'), '{אֵין־לְהָרֵג}', T('no puede ser matado')],
        [T('Tiempo ({ב} + abs.)'), '{בְּבֹא־הָאָדָם}', T('cuando llegó el hombre')],
      ],
    },
  ],
};
