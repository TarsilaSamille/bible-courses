import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('Adjetivos y concordancia'),
  subtitle: T('טוֹב, טוֹבָה — el adjetivo sigue al sustantivo'),
  section: T('Sustantivos, adjetivos y pronombres'),
  body: C(`## El orden invertido

En portugués y español el adjetivo va antes del sustantivo («un buen día»); en hebreo va **después**: {יוֹם טוֹב} «un día bueno». El sustantivo va primero porque es el centro de la cláusula; el adjetivo es solo información añadida. Y, si el sustantivo es determinado, el adjetivo suele repetir el artículo: {הַיּוֹם הַטּוֹב} «el buen día», {הָאִשָּׁה הַטּוֹבָה} «la buena mujer».

## Con qué concuerda el adjetivo

El adjetivo concuerda en **género y número** con su sustantivo, y en nada más. No se flexiona por caso (el adjetivo no tiene acusativo ni dativo), porque el caso del sustantivo ya lo lleva. Dos señales hacen el trabajo: la vocal y la terminación.

{טוֹב} «bueno» masc. sing. · {טוֹבָה} fem. sing. · {טוֹבִים} masc. pl. · {טוֹבוֹת} fem. pl.
{גָּדוֹל} «grande» masc. sing. · {גְּדוֹלָה} fem. sing. · {גְּדוֹלִים} masc. pl. · {גְּדוֹלוֹת} fem. pl.

Fíjate en que {ָ} (qamats) marca el femenino en casi todos los adjetivos: {טוֹבָה}, {גְּדוֹלָה}, {נִכְבָּה} «noble», {יָדוֹעַ} «conocido». En el plural, {ִים} marca el masculino y {וֹת} el femenino.

## ¿Atributivo o predicativo?

El artículo decide la función. Con artículo repetido, el adjetivo es **atributivo**: califica al sustantivo como parte de él ({הַיּוֹם הַטּוֹב} «el buen día»). Sin artículo, aunque el sustantivo lo tenga, el adjetivo es **predicativo**: afirma algo del sujeto, como un verbo omitido ({הַכֹּל טוֹב מֵאֹד} en Gn 1.31 = «todo era muy bueno»; {אַשְׁרֵי־הָאִישׁ} en Sal 1.1 = «feliz es el hombre»).

Esta distinción cambia el sentido y es una de las herramientas exegéticas más productivas del hebreo. En Gn 1.31, {הַכֹּל} lleva artículo y {טוֹב} no: Dios no está definiendo una clase de cosas buenas, está evaluando todo lo que hizo.

## El adjetivo sustantivado

Los sustantivos hebreos son tan escasos que los adjetivos acaban ocupando el lugar de los nombres: {הַגִּבּוֹרִים} «los valientes», {הַנְּבִיאִים} «los profetas», {הַיָּשָׁרִים} «los justos», {הַחַיִּים} «los vivos». Por eso {אֱלֹהִים} puede funcionar como sustantivo («Dios») y como adjetivo («divino») sin que cambie nada en la gramática.

## Adjetivo con sufijo pronominal

Los adjetivos reciben sufijos igual que los sustantivos (cap. 8): {בָּרוּךְ} «bendito», {בָּרוּךְ אַתָּה} «bendito tú», {נַעֲשֶׂה} «hecho», {נְעָשִׂים} «hechos». En Is 53.10, {וְחָפַץ יְהוָה בְּיָדוֹ יַצְלִיחַ} usa el sustantivo {יָד} «mano» en dual: {בְּיָדוֹ} es «en su mano» con el sufijo dual {וֹ}.

## Fórmulas para retener

{יוֹם טוֹב} «un día bueno» · {הַיּוֹם הַטּוֹב} «el buen día» · {הָאָרֶץ הַטּוֹבָה} «la buena tierra» (Dt 1.35) · {הָאָרֶץ טוֹבָה} «la tierra es buena» · {שֵׁם טוֹב} «un buen nombre» (Pr 22.1).`),
  vocab: [
    V('טוֹב', 'טוֹב', 'bueno'),
    V('טוֹבָה', 'טוֹב', 'buena (fem.)'),
    V('טוֹבִים', 'טוֹב', 'buenos (m. pl.)'),
    V('גָּדוֹל', 'גָּדוֹל', 'grande'),
    V('גְּדוֹלָה', 'גָּדוֹל', 'grande (fem.)'),
    V('הַיּוֹם', 'יוֹם', 'el día'),
    V('הָאָרֶץ', 'אֶרֶץ', 'la tierra'),
    V('שֵׁם', 'שֵׁם', 'nombre'),
    V('קָדוֹשׁ', 'קָדוֹשׁ', 'santo'),
    V('חָכֵם', 'חָכֵם', 'sabio'),
    V('הַנְּבִיאִים', 'נָבִיא', 'los profetas'),
    V('בָּרוּךְ', 'בָּרוּךְ', 'bendito'),
    V('הַכֹּל', 'כָּל', 'todo, el todo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se dice «la buena tierra» (con artículo en ambos)?'),
    options: [T('טוֹבָה אֶרֶץ'), T('הָאָרֶץ הַטּוֹבָה'), T('אֶרֶץ הַטּוֹבָה'), T('הָאָרֶץ טוֹבָה')],
    answer: 1,
    hint: T('El sustantivo va primero, el adjetivo después, y ambos llevan artículo (§3).'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('En «הַכֹּל טוֹב מֵאֹד» (Gn 1.31), {טוֹב} es:'),
      options: [
        T('atributivo, porque repite el artículo'),
        T('predicativo, porque no lleva artículo'),
        T('un sustantivo, no un adjetivo'),
        T('un numeral'),
      ],
      answer: 1,
      hint: T('Regla §3: sin artículo, el adjetivo se convierte en afirmación sobre el sujeto.'),
    },
    {
      kind: 'fill',
      prompt: T('Escribe la forma femenina singular de «גָּדוֹל» (grande).'),
      answer: 'גְּדוֹלָה',
      hint: T('El femenino lleva {ָ} (qamats) antes de la terminación: {גָּדוֹל} → {גְּדוֹלָה}.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada sustantivo con el adjetivo que concuerda con él.'),
      pairs: [
        { a: '{הָאִשָּׁה}', b: '{הַטּוֹבָה}' },
        { a: '{הַמֶּלֶךְ}', b: '{הַטּוֹב}' },
        { a: '{הַשַּׁיִת}', b: '{הַטָּוֹבָה}' },
        { a: '{הַמְּלָכִים}', b: '{הַטּוֹבִים}' },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es el orden correcto en hebreo para «un buen rey»?'),
      options: [T('{טוֹב מֶלֶךְ}'), T('{מֶלֶךְ טוֹב}'), T('{מֶלֶךְ הַטּוֹב}'), T('{הַמֶּלֶךְ טוֹבָה}')],
      answer: 1,
      hint: T('Sustantivo antes, adjetivo después, y sin artículo cuando es indefinido.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El adjetivo va después del sustantivo y concuerda en género y número, nunca en caso.',
      ),
    },
    {
      n: '2',
      text: T(
        'El femenino singular casi siempre lleva {ָ} (qamats): {טוֹבָה}, {גְּדוֹלָה}. Plurales: {ִים} masculino, {וֹת} femenino.',
      ),
    },
    {
      n: '3',
      text: T(
        'Artículo repetido = adjetivo atributivo («el buen día»); sin artículo = adjetivo predicativo («el día es bueno»).',
      ),
    },
    {
      n: '4',
      text: T(
        'El artículo del sustantivo no «pasa» al adjetivo: si el sustantivo lo lleva, el adjetivo solo lo lleva si es atributivo.',
      ),
    },
    {
      n: '5',
      text: T(
        'Los adjetivos sustantivados con {הַ} funcionan como grupos: {הַנְּבִיאִים} «los profetas», {הַיָּשָׁרִים} «los justos».',
      ),
    },
  ],
  notes: [
    {
      label: T('Exégesis:'),
      text: T(
        'Como {טוֹב} es el mismo adjetivo en {הַמֶּלֶךְ הַטּוֹב} y en {הַמֶּלֶךְ טוֹב}, la diferencia de sentido es real y no estilística: en el primero el rey **es** bueno (cualidad), en el segundo el rey **es** bueno (valoración de alguien). Textos como Jn 3.16 dependen de esa precisión.',
      ),
    },
    {
      label: T('Dato curioso:'),
      text: T(
        'En {אֱלֹהִים} y {בָּתֵּינוּ} («nuestros padres», Gén 12.3) la flexión es la de un adjetivo, no la de un sustantivo. Las gramáticas antiguas lo llamaban «sustantivo indeclinable»; la verdad es que son adjetivos sustantivados, y por eso un numeral puede concordar: {אֱלֹהִים אֶחָד} «un solo Dios», {אֱלֹהִים רַבִּים} «muchos dioses» (Sal 82.6).',
      ),
    },
  ],
  examples: [
    { text: '{יוֹם טוֹב}', gloss: T('un día bueno — sustantivo + adjetivo, sin artículo') },
    { text: '{הַיּוֹם הַטּוֹב}', gloss: T('el buen día — artículo repetido (atributivo)') },
    { text: '{הַיּוֹם טוֹב}', gloss: T('el día es bueno — adjetivo sin artículo (predicativo)') },
    { text: '{אִשָּׁה טוֹבָה}', gloss: T('una buena mujer — la {ָ} marca el femenino') },
    { text: '{הָאָרֶץ הַטּוֹבָה}', gloss: T('la buena tierra (Dt 1.35) — la forma bíblica habitual') },
    { text: '{הַכֹּל טוֹב מֵאֹד}', gloss: T('todo era muy bueno (Gn 1.31) — evaluación, no definición') },
    {
      text: '{אַשְׁרֵי־הָאִישׁ}',
      gloss: T('feliz es el hombre (Sal 1.1) — {הָאִישׁ} con artículo, {אַשְׁרֵי} sin él'),
    },
    { text: '{הַנְּבִיאִים}', gloss: T('los profetas — adjetivo {נָבִיא} sustantivado') },
    { text: '{בָּרוּךְ אַתָּה}', gloss: T('bendito tú — adjetivo + pronombre (cap. 5)') },
    { text: '{בְּיָדוֹ}', gloss: T('en su mano — sustantivo dual + sufijo dual {וֹ}') },
    { text: '{שֵׁם טוֹב}', gloss: T('un buen nombre (Pr 22.1) — construcción sin artículo') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Paradigma de tres adjetivos'),
      head: [T('Adjetivo'), T('m. sg.'), T('f. sg.'), T('m. pl.'), T('f. pl.')],
      rows: [
        [T('{טוֹב} «bueno»'), '{טוֹב}', '{טוֹבָה}', '{טוֹבִים}', '{טוֹבוֹת}'],
        [T('{גָּדוֹל} «grande»'), '{גָּדוֹל}', '{גְּדוֹלָה}', '{גְּדוֹלִים}', '{גְּדוֹלוֹת}'],
        [T('{רָע} «malo»'), '{רָע}', '{רָעָה}', '{רָעִים}', '{רָעוֹת}'],
        [T('{קָדוֹשׁ} «santo»'), '{קָדוֹשׁ}', '{קָדֹשׁה}', '{קְדֹשִׁים}', '{קְדֹשׁוֹת}'],
        [T('{חָכֵם} «sabio»'), '{חָכֵם}', '{חָכְמָה}', '{חֲכָמִים}', '{חֲכָמוֹת}'],
      ],
    },
    {
      caption: T('Tabla 2 — ¿Atributivo o predicativo? El artículo marca la diferencia'),
      head: [T('Frase'), T('¿Artículo en el adjetivo?'), T('Lectura')],
      rows: [
        ['{הַיּוֹם הַטּוֹב}', T('sí, repetido'), T('el buen día (atributivo)')],
        ['{הַיּוֹם טוֹב}', T('no'), T('el día es bueno (predicativo)')],
        ['{הָאָרֶץ הַטּוֹבָה}', T('sí'), T('la buena tierra (Dt 1.35)')],
        ['{הַכֹּל טוֹב מֵאֹד}', T('no (Gn 1.31)'), T('todo era muy bueno')],
        ['{אַשְׁרֵי־הָאִישׁ}', T('no (Sal 1.1)'), T('feliz es el hombre')],
      ],
    },
  ],
};
