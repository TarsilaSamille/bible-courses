import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  title: T('Los participios'),
  subtitle: T('כֹּתֵב, כָּתוּב — quién escribe, lo que está escrito'),
  section: T('Formas no finitas y guturales'),
  body: C(`## Dos voces, dos estados

El participio hebreo tiene dos formas principales (Gesenius §37):

**Activo** ({קֹטֵל}, {כּוֹתֵב}): describe una acción en curso. {כֹּתֵב} «escribiendo» · {שֹׁמֵר} «guardando» · {אֹהֵב} «amando» · {יֹשֵׁב} «habitando» · {בֹּרֵחַ} «huyendo» (¡con pataj furtivo!).

**Estativo/pasivo** ({קָטוּל}, {כָּתוּב}): describe un estado resultante. {כָּתוּב} «escrito» · {שָׁבוּר} «roto» · {בָּרוּךְ} «bendito» · {אָרוּר} «maldito».

La diferencia se ve en la práctica: {הַבַּיִת כָּתוּב} es «la casa **está** escrita»; {הַבַּיִת כּוֹתֵב} es «la casa **está siendo** escrita».

## El participio como sustantivo

Con el artículo {הַ}, el participio se convierte en nombre de grupo: {הַשֹּׁפְטִים} «los jueces» · {הַכֹּהֲנִים} «los sacerdotes» · {הַנְּבִיאִים} «los profetas». Son los tres liderazgos de Israel.

Con las preposiciones {ב} y {ל}, el participio se vuelve **transitivo** y significa «el que es objeto de…»: {בָּרוּךְ} + {ב} = «bendecido en» (o «por quien es bendecido»); {שֹׁמֵר} + {ל} = «guardado por», el mismo sentido que el piel {שֹׁמֵר}.

Sin artículo y sin preposición, el participio funciona como modificador: {בֵּית חֶסֶד} «casa de {חֶסֶד}».

## Participio = presente sin pronombre

En hebreo, el participio con pronombre es el presente: {אֲנִי כֹּתֵב} «estoy escribiendo». Pero al contrario que el griego, el hebreo prefiere el **wayyiqtol** para el pasado narrativo y el **participio** para el estado: {הָאָרֶץ טוֹבָה} «la tierra es buena» se lee con naturalidad; {הָאָרֶץ הָיְתָה טוֹבָה} suena forzado.

## Formas arameas

Daniel, Esdras y las dos Crónicas usan **arameo**, la lengua hermana del hebreo, y allí el participio es el verbo principal: {מַלְכָּה} «reina» (3.ª m. sing.), {מַלְכְּתָה} «ella reina», {קָדוּשׁ} «santo» como adjetivo. Por eso el participio arameo {שָׁמַיִן} «exaltado» (Dn 2.34) significa literalmente «el que fue levantado»: un participio, no un pretérito.

El participio hebreo conserva Rastros de ese origen: {הִנְנִי} «he aquí» es {הִנֵּה} «he aquí» + {־ִי}; y el pronombre {הוֹא} «él» viene de un participio arameo que significa «el que es».

## Participios con sufijo

Los participios reciben sufijos pronominales (cap. 8): {בָּרוּךְ אַתָּה} «bendito tú» (Sal 103.1), {שָׁמוּרִי} «guárdame». En {עִם־יְהוָה} el sustantivo {עִם} precede al participio arameo {יְהוָה} «el que está con»: literalmente «el que está con YHWH» = «compañero de Dios».

## Dos bendiciones para memorizar

{bְּרָכוּ יְהוָה} «bendito sea el SEÑOR» (Sal 103.1) y {בָּרוּךְ אַתָּה יְהוָה} «bendito tú, SEÑOR». Toda la liturgia judía empieza así, con un participio pasivo. El punto de partida de la adoración hebrea es un estado, no una acción.`),
  vocab: [
    V('כֹּתֵב', 'כתב', 'escribiendo'),
    V('כָּתוּב', 'כתב', 'escrito'),
    V('אֹהֵב', 'אהב', 'amando'),
    V('בָּרוּךְ', 'ברך', 'bendito'),
    V('אָרוּר', 'אָרור', 'maldito'),
    V('שֹׁמֵר', 'שׁמר', 'guardando'),
    V('הַנְּבִיאִים', 'נָבִיא', 'los profetas'),
    V('הִנְנִי', 'הִנֵּה', 'he aquí estoy'),
    V('מַלְכָּה', 'מלך', 'reina (part. arameo)'),
    V('בּוֹרֵחַ', 'ברח', 'huyendo'),
    V('שֹׁמֵעַ', 'שׁמע', 'oyendo'),
    V('קֹרֵא', 'קרא', 'llamando, leyendo'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Completa la bendición: «___ אַתָּה יְהוָה» (bendito tú).'),
    answer: 'בָּרוּךְ',
    hint: T('Participio pasivo de «bendecir», de la raíz {ברך}.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Cuál es el participio estativo (estado) de {כתב}?'),
      options: [T('כֹּתֵב'), T('כָּתוּב'), T('יִכְתֹּב'), T('לִכְתֹּב')],
      answer: 1,
      hint: T('El estativo usa el patrón {קָטוּל}: {ָ} en la raíz y {וּ} en el sufijo.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el participio con su tipo.'),
      pairs: [
        { a: '{שֹׁמֵר}', b: T('activo') },
        { a: '{שָׁמוּר}', b: T('estativo') },
        { a: '{בֹּרֵךְ}', b: T('activo') },
        { a: '{בָּרוּךְ}', b: T('estativo') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('En {הַנְּבִיאִים} «los profetas», ¿qué hizo el sustantivo?'),
      options: [
        T('Perdió el artículo'),
        T('Tomó el artículo y se convirtió en nombre de grupo'),
        T('Entró en constructo'),
        T('Se convirtió en verbo'),
      ],
      answer: 1,
      hint: T('Regla §2: {הַ} + participio = sustantivo de grupo.'),
    },
    {
      kind: 'choose',
      prompt: T('En {נֶאֱמַנְתָּה לְיוֹסֵף}, ¿qué hace {ל} con el participio {נֶאֱמַנְתָּה}?'),
      options: [
        T('Lo vuelve transitivo: «confiado a»'),
        T('Marca el plural'),
        T('Indica tiempo futuro'),
        T('Sustituye al artículo'),
      ],
      answer: 0,
      hint: T('Regla §3: {ל} + participio = «guardado por», como el piel.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El participio activo ({כּוֹתֵב}) indica acción en curso; el participio estativo ({כָּתוּב}) indica un estado resultante.',
      ),
    },
    {
      n: '2',
      text: T('Con {הַ} el participio se convierte en sustantivo de grupo: {הַשֹּׁפְטִים} «los jueces».'),
    },
    {
      n: '3',
      text: T(
        'Con {ב} o {ל} el participio es transitivo: {שֹׁמֵר} + {ל} = «guardado por», como el piel {שֹׁמֵר}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Participio + pronombre es el presente ({אֲנִי כֹּתֵב}); para el estado, el hebreo prefiere el participio, no un verbo ({הָאָרֶץ טוֹבָה}).',
      ),
    },
    {
      n: '5',
      text: T(
        'En arameo (Daniel, Esdras, 2 Cr) el participio es el verbo principal: {מַלְכָּה} «reina».',
      ),
    },
  ],
  notes: [
    {
      label: T('Exégesis:'),
      text: T(
        'La elección entre participio y verbo cambia el sentido de toda la cláusula. En {הָאָרֶץ טוֹבָה} «la tierra es buena», el participio describe un estado permanente; en {הָאָרֶץ הָיְתָה טוֹבָה} el verbo describe un suceso. En Ezequiel 33.32 Dios se queja de que el pueblo «lee» ({קֹרֵא}) y «ama escuchar» ({שֹׁמֵעַ}) las palabras del profeta, y es precisamente un participio lo que describe su costumbre.',
      ),
    },
    {
      label: T('Dato curioso:'),
      text: T(
        'Las dos lenguas hermanas se reparten las tareas en la Biblia: el hebreo cuenta narrativas con verbos (wayyiqtol), el arameo las cuenta con participios. Daniel cambia de lengua según el interlocutor: arameo con el rey, hebreo con los judíos. Es un diálogo escrito dentro del propio texto, y solo Daniel y Esdras conservan esa conversación.',
      ),
    },
  ],
  examples: [
    { text: '{כֹּתֵב}', gloss: T('escribiendo — participio activo (raíz {כתב})') },
    { text: '{כָּתוּב}', gloss: T('escrito — participio estativo') },
    { text: '{בָּרוּךְ}', gloss: T('bendito — estativo de {ברך}') },
    { text: '{אָרוּר}', gloss: T('maldito — lo opuesto a {בָּרוּךְ}') },
    { text: '{אֹהֵב}', gloss: T('amando — participio activo') },
    { text: '{הַנְּבִיאִים}', gloss: T('los profetas — {נָבִיא} + {הַ} (adjetivo sustantivado)') },
    { text: '{הִנְנִי}', gloss: T('he aquí estoy — {הִנֵּה} + {־ִי}') },
    { text: '{בָּרוּךְ אַתָּה יְהוָה}', gloss: T('bendito tú, SEÑOR (Sal 103.1)') },
    { text: '{מַלְכָּה}', gloss: T('reina — participio arameo (Dn 2.37)') },
    { text: '{שָׁמַיִן}', gloss: T('exaltado — arameo: «el que fue levantado»') },
    { text: '{עִם־יְהוָה}', gloss: T('compañero de Dios — {עִם} + participio arameo') },
    { text: '{בֹּרֵחַ}', gloss: T('huyendo — activo con pataj furtivo') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Participio activo y participio estativo'),
      head: [T('Raíz'), T('Activo (acción)'), T('Estativo (estado)'), T('Glosa')],
      rows: [
        ['{כתב}', '{כֹּתֵב}', '{כָּתוּב}', T('escribiendo / escrito')],
        ['{שׁמר}', '{שֹׁמֵר}', '{שָׁמוּר}', T('guardando / guardado')],
        ['{אהב}', '{אֹהֵב}', '{אָהוּב}', T('amando / amado')],
        ['{ישׁב}', '{יֹשֵׁב}', '{יָשֵׁב}', T('habitando / habitado')],
        ['{ברך}', '{בֹּרֵךְ}', '{בָּרוּךְ}', T('bendiciendo / bendito')],
        ['{רחץ}', '{רֹחֵץ}', '{רָחוּץ}', T('lavando / lavado')],
        ['{שמם}', '{שֹׁמֵעַ}', '{שָׁמוּעַ}', T('oyendo / oído')],
      ],
    },
    {
      caption: T('Tabla 2 — El participio con artículo y con preposición'),
      head: [T('Construcción'), T('Ejemplo'), T('Glosa')],
      rows: [
        [T('Artículo {הַ} = grupo'), '{הַנְּבִיאִים}', T('los profetas')],
        [T('Sin artículo = modificador'), '{בֵּית חֶסֶד}', T('casa de bondad')],
        [T('{ב} = «bendecido en»'), '{בָּרוּךְ בַּמּוֹסֵד}', T('bendecido en el consejo')],
        [T('{ל} = «guardado por»'), '{נֶאֱמַנְתָּה לְיוֹסֵף}', T('confiado a José')],
        [T('Pronombre + participio = presente'), '{אֲנִי כֹּתֵב}', T('estoy escribiendo')],
      ],
    },
  ],
};
