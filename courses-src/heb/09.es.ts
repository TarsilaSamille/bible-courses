import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('Los verbos esenciales'),
  subtitle: T('הָלַךְ, בּוֹא, הָיָה, אָכַל: las raíces que sostienen casi todo versículo'),
  section: T('Verbo y numeral'),
  body: C(`## Seis raíces que el texto bíblico nunca suelta

Una raíz hebraica no está lista. {הלכ} solo es un esquema de consonantes; se vuelve verbo en el patrón {קָטַל} (qal), con las vocales {cacac} que el qal impone. Los verbos esenciales del curso son seis raíces viejas, y ninguna se forma ni se flexiona por una regla simple:

{הָלַךְ} walk / ir
{בּוֹא} come / venir
{הָיָה} be / ser, estar, suceder
{אָכַל} eat / comer
{רָאָה} see / ver
{שָׁמַע} hear / oír, obedecer

El resto del verbo llega por derivación. {שָׁמַר} "guardar" en el hebreo del Pentateuco vive más como promesa que como verbo del Evangelio, pero la misma raíz da {שָׁמַרְתָּ}, "tú guardaste", y {יְהוָה שֹׁמֵר}, "el SEÑOR guarda".

## El pretérito (qatal) marca el hecho concluido

Cuando el texto quiere decir que algo pasó, usa el qatal: la segunda consonante pierde su vocal y cambia el sufijo de persona:

{הָלַךְ} él fue / anduvo
{אָכַל} él comió
{רָאָה} él vio
{הָיָה} él fue / era / sucedió

{הָיָה} es el verbo más usado del hebreo bíblico. Casi todo versículo lleva un {הָיָה} o un {וַיְהִי} oculto, y la traducción abre un dilema: {הָיָה} al comienzo de la frase, solo, con un nombre propio después, suele ser "y vivió" o "y aconteció", y no simplemente "era".

{וַיְהִי} es el pretérito continuo de {הָיָה}, y es la firma de la narrativa hebrea: {וַיְהִי בַּיָּמִים הָהֵם} dice "y aconteció en aquellos días" (Lc 2:1). Cuando el versículo abre con {וַיְהִי}, la historia está en el pasado continuo, en lo que iba sucediendo.

## Las formas que invierten la mirada

El qatal también sabe marcar adverbio y posesión, y los dos usos más importantes son:

- **{לִי הַהִוא}, "me fue dado"**. El portugués pide el sujeto en {הָיָה}: "hubo". El hebreo deja solo {הָיָה} y cuelga al dueño con {לִי}. La traducción errónea más común es floja: "él tenía".
- **{מִצְוָה} y {נֹתֵן}**. Los verbos de dar y tomar en imperfecto pueden marcar repetición o ley: {וַיִּתֵּן}, "y dio"; {נוֹתֵן}, "el que da". El imperfecto de {נָתַן} es el que aparece en la Torá como participio.

## En la Biblia

Génesis 1:3 abre con {וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר}, y el verbo que sigue a la frase es {וַיְהִי־אוֹר}: el griego lo lee como {ἐγένετο φῶς}, "y hubo luz". En Hebreos 11:3 los mismos dos verbos en hebreo se vuelven una sola cláusula. Cuando el texto repercute {וַיְהִי} en arameo, el momento cambia: la frase deja de ser un reporte y se convierte en tiempo marcado.

Mateo 5:45 trae {בְּנֵי־אָבִיכֶם}, y el verbo de hacer es {מַמְטִיר} — la forma imperfecta de {הִמְטִיר}, "él hace llover". El imperfecto sitúa la acción en un momento vago, que puede ser ya o todavía. Es esa la forma que el griego de Mateo traduce por {βρέχων} — participio, "el que hace llover".`),
  vocab: [
    V('הָלַךְ', 'הָלַךְ', 'él fue / anduvo'),
    V('בָּא', 'בּוֹא', 'él vino'),
    V('הָיָה', 'הָיָה', 'él fue / sucedió'),
    V('אָכַל', 'אָכַל', 'él comió'),
    V('רָאָה', 'רָאָה', 'él vio'),
    V('שָׁמַע', 'שָׁמַע', 'él oyó / obedeció'),
    V('נָתַן', 'נָתַן', 'él dio'),
    V('לָקַח', 'לָקַח', 'él tomó'),
    V('עָשָׂה', 'עָשָׂה', 'él hizo'),
    V('יָדַע', 'יָדַע', 'él supo'),
    V('צִוָּה', 'צִוָּה', 'él ordenó'),
    V('שָׁתָה', 'שָׁתָה', 'él bebió'),
    V('לָבַשׁ', 'לָבַשׁ', 'él se vistió'),
    V('קָרָא', 'קָרָא', 'él llamó / leyó'),
    V('אֹהֵל', 'אֹהֵל', 'tienda'),
    V('קִרְיַת', 'קִרְיַת', 'ciudad'),
    V('לֵאמֹר', 'לֵאמֹר', 'diciendo'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'El qatal marca un hecho concluido: {אָכַל} "él comió", {הָלַךְ} "él fue". El tiempo en portugués no confunde con él.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{הָיָה} al comienzo de un versículo suele traducir "y aconteció", "y vivió", "y hubo". Solo, nunca simplemente "era".',
      ),
    },
    {
      n: '§3',
      text: T(
        '{וַיְהִי} marca narrativa: cuando abre el versículo, el texto empuja hacia lo que iba sucediendo.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Los verbos de posesión en qatal toman {לִי}, nunca "tener": {היה לי}, "me fue" → "yo tenía". {היה לי בית}, "yo tenía una casa" (no Jn 14:2, pero cf. Lc 2:49: {בְּבֵית אָבִי}).',
      ),
    },
    {
      n: '§5',
      text: T(
        '{וַיִּתֵּן} con el objeto directo y el sujeto en dativo escribe la orden de {וַיְצַו}: {וַיְצַו יְהוָה אֱלֹהִים עַל־הָאָדָם} (Gn 2:16).',
      ),
    },
  ],
  notes: [
    {
      label: T('{הָיָה} no es el verbo "tener"'),
      text: T(
        'El hebreo no tiene verbo "tener". Donde el portugués dice "él tiene", el hebreo usa {הָיָה לוֹ} en pasado o en presente continuo. Donde dice "él tenía", usa {הָיָה לוֹ} en qatal. La traducción que escribe "él tenía" borra la estructura que dice que el poseedor pasó por un evento: tener es algo que sucedió.',
      ),
    },
    {
      label: T('{וַיְהִי} confunde al traductor'),
      text: T(
        'En portugués toda apertura con {וַיְהִי} obliga a elegir entre "aconteció", "y era", "y fue así" y "érase una vez". El error común es leerlo como "érase una vez": es un pasado marcado del discurso, no un comienzo sublime.',
      ),
    },
  ],
  examples: [
    { text: 'בְּרֵאשִׁית בָּרָא אֱלֹהִים', gloss: T('Gn 1:1 — {בָּרָא} es qatal: un hecho que sucedió.') },
    { text: 'וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר', gloss: T('Gn 1:3 — {יְהִי} es el yusivo de {הָיָה}, "que haya".') },
    { text: 'וַיְהִי־אוֹר', gloss: T('Gn 1:3 — {וַיְהִי} + {אוֹר}: "y hubo luz", narrativa.') },
    { text: 'וַיְהִי בַּיָּמִים הָהֵם', gloss: T('Lc 2:1 — {וַיְהִי} marca días en curso, no un instante.') },
    { text: 'הָיָה כֵּן', gloss: T('forma qatal de {הָיָה} con afirmación: "fue así".') },
    { text: 'אֹתִי נָקָם', gloss: T('qatal de {נָקַם}: algo le sucedió; el griego lee {ἐγένετο}.') },
    {
      text: 'וַיְצַו יְהוָה',
      gloss: T('Gn 2:16 — {וַיְצַו} es el wayyiqtol de {צִוָּה}: narrativa, pasado inmediato.'),
    },
    {
      text: 'וַיַּרְא אֱלֹהִים אֶת־הָאוֹר',
      gloss: T('Gn 1:4 — {וַיַּרְא} es el wayyiqtol de {רָאָה}: acción seguida.'),
    },
    { text: 'וַיִּתֵּן לָהֶם', gloss: T('imperfecto de {נָתַן} con dativo: "y les dio".') },
    {
      text: 'אֹכֵל מַלְאָךְ',
      gloss: T('Gn 18 — el participio activo describe al ángel que viene; {אֹכֵל} precede a {אָכַל}.'),
    },
  ],
  tables: [
    {
      caption: T('El qatal de los esenciales, persona por persona'),
      head: [T('Verbo'), T('él'), T('ella'), T('ellos'), T('nosotros')],
      rows: [
        [T('{הָלַךְ}'), T('{הָלַךְ}'), T('{הָלְכָה}'), T('{הָלְכוּ}'), T('{הָלַכְנוּ}')],
        [T('{בּוֹא}'), T('{בָּא}'), T('{בָּאָה}'), T('{בָּאוּ}'), T('{בָּאנוּ}')],
        [T('{הָיָה}'), T('{הָיָה}'), T('{הָיְתָה}'), T('{הָיוּ}'), T('{הָיִינוּ}')],
        [T('{אָכַל}'), T('{אָכַל}'), T('{אָכְלָה}'), T('{אָכְלוּ}'), T('{אָכַלְנוּ}')],
        [T('{רָאָה}'), T('{רָאָה}'), T('{רָאֲתָה}'), T('{רָאוּ}'), T('{רָאִינוּ}')],
        [T('{שָׁמַע}'), T('{שָׁמַע}'), T('{שָׁמְעָה}'), T('{שָׁמְעוּ}'), T('{שָׁמַעְנוּ}')],
        [T('{נָתַן}'), T('{נָתַן}'), T('{נָתְנָה}'), T('{נָתְנוּ}'), T('{נָתַנּוּ}')],
        [T('{לָקַח}'), T('{לָקַח}'), T('{לָקְחָה}'), T('{לָקְחוּ}'), T('{לָקַחְנוּ}')],
      ],
    },
    {
      caption: T('{וַיְהִי} frente a {הָיָה}: dos verbos para dos tiempos'),
      head: [T('Forma'), T('Tiempo'), T('Uso'), T('Ejemplo')],
      rows: [
        [T('{הָיָה}'), T('qatal'), T('hecho puntual'), T('{הָיָה כֵן}')],
        [T('{וַיְהִי}'), T('wayyiqtol'), T('narrativa en curso'), T('{וַיְהִי בַּיָּמִים}')],
        [T('{יְהִי}'), T('yusivo'), T('voluntad, orden'), T('{יְהִי אוֹר}')],
        [T('{הָיוּ}'), T('qatal plural'), T('hecho pasado de muchos'), T('{הָיוּ יָמִים}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {וַיְהִי בַּיָּמִים הָהֵם}, ¿qué marca {וַיְהִי}?'),
    options: [
      T('Un hecho único y cerrado'),
      T('Narrativa en curso en el pasado'),
      T('An order or wish'),
      T('A future tense'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "וַיְהִי ___ אוֹר" (Gn 1:3) con el verbo "ser".'),
      answer: 'אוֹר',
    },
    {
      kind: 'match',
      prompt: T('Relaciona el verbo con la forma del qatal 3.ª persona.'),
      pairs: [
        { a: T('{הָלַךְ}'), b: T('{he went}') },
        { a: T('{רָאָה}'), b: T('{él vio}') },
        { a: T('{אָכַל}'), b: T('{él comió}') },
        { a: T('{בּוֹא}'), b: T('{él vino}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In {וַיְהִי כְּדְבַר יְהוָה}, {וַיְהִי} indicates:'),
      options: [
        T('Una orden en presente'),
        T('Narrativa ya en curso'),
        T('Un verbo infinitivo'),
        T('Un pronombre posesivo'),
      ],
      answer: 1,
    },
  ],
};
