import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('Pronombres y el pasado (qatal)'),
  subtitle: T('אֲנִי…הֵם · כָּתַבְתִּי…כָּתְבוּ — el sujeto se pega al verbo'),
  section: T('Sustantivos, adjetivos y pronombres'),
  body: C(`## Los pronombres independientes

El hebreo tiene diez pronombres personales plenos, escritos como palabras enteras: {אֲנִי} «yo», {אַתָּה} «tú (m.)», {אַתְּ} «tú (f.)», {הוּא} «él», {הִיא} «ella», {אֲנַחְנוּ} «nosotros», {אַתֶּם} «2.ª pl. (m.)», {אַתֶּן} «2.ª pl. (f.)», {הֵם} «ellos», {הֵן} «ellas». Todos empiezan por {א} o {ה}: esa es la marca visual de la persona.

 esos pronombres son raros: la forma normal es el **verbo con sufijo**. En {כָּתַבְתִּי} el pronombre «yo» ya está pegado al verbo, así que la traducción portuguesa dice «escrevi» y la española «escribí», sin sujeto visible. El hebreo permite esa omisión en casi toda cláusula finita.

## Raíz, tiempo y persona

Un verbo hebreo es siempre: **raíz** (consonantes) + **tiempo** (vocales) + **persona** (sufijos). Con la raíz {כתב} «escribir»:

{כָּתַבְתִּי} «yo escribí» (raíz {כתב} + {ַ} del qatal + {־תִּי} de 1.ª sing.)
{כָּתַבְתָּ} «tú (m.) escribiste» ({־תָּ} de 2.º m.)
{כָּתַבְתְּ} «tú (f.) escribiste» ({־תְּ} de 2.ª f.)
{כָּתַב} «él escribió» (3.ª m.: **sin sufijo alguno**)
{כָּתְבָה} «ella escribió» (3.ª f.: {־ה} con qamats)
{כָּתַבְנוּ} «nosotros escribimos» ({־נוּ} de 1.ª pl.)
{כָּתְבוּ} «ellos escribieron» ({־וּ} de 3.ª pl.)

Las dos formas «desnudas» — {כָּתַב} y {כָּתְבָה} — están entre las más frecuentes de la lengua.

## El qatal no es solo pasado

Llamamos qatal a la forma con {ַ} (pataj) en el singular. Históricamente es un perfectivo y en la Biblia cubre tres usos: (1) pasado narrativo — {בָּרָא} «creó» (Gn 1.1); (2) presente de estado — {אֱלֹהִים טוֹב} «Dios es bueno»; (3) modalidad — {יְהִי} «sea», {נַעֲשֶׂה} «hagamos» (cohortativo, cap. 16). No busques un pasado «puro»: decide el contexto.

Un detalle que ahorra tiempo: la 3.ª persona del singular es idéntica en qatal y en futuro ({כָּתַב} «escribió» y «escribirá»). Solo el contexto y las otras personas revelan el tiempo.

## Las vocales de la raíz

El tiempo vive en las vocales de la raíz: {ַ} en el singular ({כָּתַב}), {ָ} antes de los sufijos de 1.ª y 2.ª persona del plural ({כָּתַבְנוּ}, {כָּתְבוּ}). Las raíces con {ו} suelen mostrar {וֹ} (holam) en vez de {ו}, como en {מוֹת} «morir» y {יוֹדֵעַ} «saber».

## {הָיָה}, el verbo más útil

{הָיָה} «ser, estar» sirve para casi todo: {הָיָה} «él fue», {הָיְתָה} «ella fue», {הָיִיתִי} «yo fui», {הָיִינוּ} «nosotros fuimos», {הָיוּ} «ellos fueron». En 3.ª sing. fuera de la posición inicial de la cláusula suele aparecer como {יְהִי}: {וְלֹא יְהִי} «y no hubo».

Es con {הָיָה} como Dios responde en Ex 3.14: {אֶהְיֶה אֲשֶׁר אֶהְיֶה} «YO SOY EL QUE SOY». Guarda esa frase: vuelve en el capítulo 16 con el jussivo {יְהִי} «sea».

## Oraciones para montar

{אֲנִי כָּתַבְתִּי} «yo escribí» (pronombre explícito) · {כָּתַבְתִּי} «escribí» (con sufijo) · {אַתָּה כָּתַבְתָּ} «tú escribiste» · {הוּא כָּתַב} «él escribió» · {אֲנַחְנוּ כָּתַבְנוּ} «nosotros escribimos».`),
  vocab: [
    V('אֲנִי', 'אֲנִי', 'yo'),
    V('אַתָּה', 'אַתָּה', 'tú (masc.)'),
    V('הוּא', 'הוּא', 'él'),
    V('הִיא', 'הִיא', 'ella'),
    V('אֲנַחְנוּ', 'אֲנַחְנוּ', 'nosotros'),
    V('הֵם', 'הֵם', 'ellos'),
    V('כָּתַבְתִּי', 'כתב', 'yo escribí'),
    V('כָּתַבְתָּ', 'כתב', 'tú escribiste'),
    V('כָּתְבָה', 'כתב', 'ella escribió'),
    V('כָּתְבוּ', 'כתב', 'ellos escribieron'),
    V('הָיָה', 'היה', 'él fue/era'),
    V('יְהִי', 'היה', 'sea, haya'),
    V('כתב', 'כתב', 'escribir (raíz)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Completa: «___ כָּתַבְתִּי» = «yo escribí» (pronombre).'),
    answer: 'אֲנִי',
    hint: T('El pronombre de 1.ª persona del singular.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('En {כָּתְבָה} «ella escribió», la {־ה} indica:'),
      options: [
        T('3.ª persona del singular femenino'),
        T('plural femenino'),
        T('1.ª persona del plural'),
        T('la partícula {ה} del sustantivo'),
      ],
      answer: 0,
      hint: T('Es la única persona que lleva sufijo: {־ה} con qamats.'),
    },
    {
      kind: 'fill',
      prompt: T('Escribe el qatal de {כתב} para «nosotros escribimos».'),
      answer: 'כָּתַבְנוּ',
      hint: T('Raíz {כתב} + vocal {ַ} + sufijo {־נוּ} de 1.ª persona del plural.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el pronombre con la persona.'),
      pairs: [
        { a: '{אֲנִי}', b: T('1.ª sing.') },
        { a: '{אַתְּ}', b: T('2.ª fem. sing.') },
        { a: '{הֵן}', b: T('3.ª pl. fem.') },
        { a: '{אַתֶּם}', b: T('2.ª pl. masc.') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Por qué {יְהִי} (Gn 1.3) es una forma de {הָיָה}?'),
      options: [
        T('Es otra raíz, el verbo «ver»'),
        T('Es {הָיָה} en su forma habitual fuera de posición inicial'),
        T('Es un participio de {הָיָה}'),
        T('Es un numeral'),
      ],
      answer: 1,
      hint: T('Compara {וְיְהִי} (Gn 1.5) con {הָיָה}: solo se mueve la {־י} inicial.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Todo verbo finito = raíz + vocal de tiempo + sufijo de persona; el 3.º singular masculino no recibe sufijo alguno.',
      ),
    },
    {
      n: '2',
      text: T(
        'El pronombre personal vive dentro del verbo: {כָּתַבְתִּי} ya es «yo escribí». Los pronombres independientes solo aparecen por énfasis.',
      ),
    },
    {
      n: '3',
      text: T(
        'La vocal de la raíz marca el tiempo: {ַ} en el singular ({כָּתַב}) y {ָ} ante los sufijos plurales ({כָּתַבְנוּ}, {כָּתְבוּ}).',
      ),
    },
    {
      n: '4',
      text: T(
        'Qatal = perfectivo: sirve para el pasado, para el presente de estado y para la modalidad ({יְהִי} «sea»). Decide el contexto.',
      ),
    },
    {
      n: '5',
      text: T(
        'La 3.ª persona del singular es idéntica en qatal y en futuro ({כָּתַב}); solo las otras personas revelan el tiempo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Atención:'),
      text: T(
        'No busques un pronombre resuntivo: en {וַיֹּאמֶר} (cap. 10) no hay sufijo de persona ni pronombre, y aun así la traducción dice «y dijo». El contexto y la concordancia con el sustantivo {אֱלֹהִים} recuperan el sujeto. Es hebreo normal, no una omisión del escriba.',
      ),
    },
    {
      label: T('Dato curioso:'),
      text: T(
        'Los diez pronombres ocupan pocas líneas en la Biblia porque rara vez aparecen: el Antiguo Testamento tiene miles de apariciones de {הוּא} y {אֵת}, pero muy pocas oraciones donde el pronombre solo puede ser el sujeto. Por eso este curso se concentra en los verbos: ellos llevan la persona.',
      ),
    },
  ],
  examples: [
    { text: '{אֲנִי}', gloss: T('yo — solo aparece cuando el verbo no lo lleva') },
    { text: '{אַתָּה}', gloss: T('tú (m.) — la {אַתְּ} solo cambia la vocal') },
    { text: '{הוּא}', gloss: T('él — {ה} + {ו} (holam) + šureq') },
    { text: '{כָּתַב}', gloss: T('él escribió — sin sufijo: 3.º m.') },
    { text: '{כָּתְבָה}', gloss: T('ella escribió — {־ה} con qamats: 3.ª f.') },
    { text: '{כָּתַבְתִּי}', gloss: T('yo escribí — {־תִּי}: 1.ª persona') },
    { text: '{כָּתַבְתֶּם}', gloss: T('vosotros escribisteis — {־תֶּם}: 2.ª pl. m.') },
    { text: '{כָּתְבוּ}', gloss: T('ellos escribieron — {־וּ} con vocal {ָ} en la raíz') },
    { text: '{הָיָה}', gloss: T('él fue/era — el verbo más versátil de la lengua') },
    { text: '{אֶהְיֶה אֲשֶׁר אֶהְיֶה}', gloss: T('YO SOY EL QUE SOY (Ex 3.14)') },
    { text: '{יְהִי}', gloss: T('sea, haya — {הָיָה} en su forma habitual no inicial') },
    { text: '{אֲנַחְנוּ}', gloss: T('nosotros — {א} + {נחנו}: marca de 1.ª pl.') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Los diez pronombres personales'),
      head: [T('Persona'), T('Singular'), T('Plural')],
      rows: [
        [T('1.ª'), '{אֲנִי} «eu»', '{אֲנַחְנוּ} «nós»'],
        [T('2.º m.'), '{אַתָּה} «tu»', '{אַתֶּם} «vós (m.)»'],
        [T('2.ª f.'), '{אַתְּ} «tu»', '{אַתֶּן} «vós (f.)»'],
        [T('3.º m.'), '{הוּא} «ele»', '{הֵם} «eles»'],
        [T('3.ª f.'), '{הִיא} «ela»', '{הֵן} «elas»'],
      ],
    },
    {
      caption: T('Tabla 2 — Qatal de {כתב} «escribir»'),
      head: [T('Persona'), T('Sufijo'), T('Forma'), T('Glosa')],
      rows: [
        [T('3.º m.'), T('—'), '{כָּתַב}', T('él escribió')],
        [T('3.ª f.'), '{־ה}', '{כָּתְבָה}', T('ella escribió')],
        [T('2.º m.'), '{־תָּ}', '{כָּתַבְתָּ}', T('tú (m.) escribiste')],
        [T('2.ª f.'), '{־תְּ}', '{כָּתַבְתְּ}', T('tú (f.) escribiste')],
        [T('1.ª'), '{־תִּי}', '{כָּתַבְתִּי}', T('yo escribí')],
        [T('1.ª pl.'), '{־נוּ}', '{כָּתַבְנוּ}', T('nosotros escribimos')],
        [T('2.ª pl. m.'), '{־תֶּם}', '{כָּתַבְתֶּם}', T('vosotros escribisteis')],
        [T('3.ª pl.'), '{־וּ}', '{כָּתְבוּ}', T('ellos escribieron')],
      ],
    },
    {
      caption: T('Tabla 3 — El verbo {הָיָה} «ser» en todo el paradigma'),
      head: [T('Persona'), T('Forma'), T('Glosa')],
      rows: [
        [T('3.º m.'), '{הָיָה}', T('él fue/era')],
        [T('3.ª f.'), '{הָיְתָה}', T('ella fue/era')],
        [T('2.º m.'), '{הָיִיתָ}', T('tú fuiste')],
        [T('1.ª'), '{הָיִיתִי}', T('yo fui')],
        [T('1.ª pl.'), '{הָיִינוּ}', T('nosotros fuimos')],
        [T('3.ª pl.'), '{הָיוּ}', T('ellos fueron')],
        [T('Forma habitual (no inicial)'), '{יְהִי}', T('sea/haya (Gn 1.3)')],
      ],
    },
  ],
};
