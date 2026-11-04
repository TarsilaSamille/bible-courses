import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('El verbo y la cláusula'),
  subtitle: T('בָּרָא, בְּרֵאשִׁית — por qué el verbo hebraico no flexiona por persona'),
  section: T('Verbo'),
  body: C(`## El verbo no flexiona, y ese es el punto

En latín, {creavit} es 3.ª persona: la terminación {־it} dice quién creó. En griego, {ἔκτισεν} igual. En hebraico, {בָּרָא} de Génesis 1.1 no tiene terminación ninguna, y el griego sigue siendo 3.ª persona porque el contexto lo dice.

Esa es la diferencia que decide la lectura: **el verbo hebraico rara vez flexiona por persona**. Lo que flexiona son los sufijos, y solo cuando hay que marcar el sujeto: {בָּרָאתִּי} «yo creé» · {בָּרָאתָּ} «tú creaste» · {בָּרָאנוּ} «nosotros creamos» · {בָּרָאוּ} «ellos crearon». La 3.ª del singular no lleva sufijo, y por eso es idéntica al plural sin {ו} y al verbo sin sujeto.

La consecuencia es que **un verbo aislado no tiene dueño**. {בָּרָא} puede ser «creó», «él creó», «Dios creó» y «crearon», y todas las lecturas caben en la forma. El sujeto está en {בְּרֵאשִׁית} al principio de la cláusula o en {אֱלֹהִים} justo después, y es el diccionario del contexto lo que resuelve. El griego resuelve en la forma; el hebrao obliga a resolver en el contexto.

## Cuatro personas que son una

La misma forma {בָּרָא} sirve para más de una persona en el mismo versículo, y el cambio lo hace el resto de la cláusula. En Génesis 1.1, {בְּרֵאשִׁית} «en el principio» y {אֱלֹהִים} «Dios» dan el sujeto: {בָּרָא} es «Dios creó». En Génesis 1.2, {וְהָאָרֶץ הָיְתָה} «y la tierra era» trae la {וְ} de secuencia, y el verbo {בָּרָא} sigue siendo el mismo: la forma no ha cambiado, el sujeto ha cambiado con la cláusula anterior.

La regla práctica conviene memorizarla: **en hebraico flexiona por persona el sufijo, y el wayyiqtol no flexiona nunca**. El {וַ} + verbo de {וַיֹּאמֶר} (cap. 10) marca pasado narrativo, no persona. Todo el wayyiqtol es 3.ª persona del singular masculino, y por eso el español escribe «y dijo» y «y dijeron» con la misma palabra.

## La cláusula nominal

La cláusula hebraica no necesita verbo. Una cláusula como {יְהוָה רֹעִי} «el SEÑOR es mi pastor» (Sal 23.1) tiene sustantivo y nada más, y significa lo que en español exige verbo y cópula.

Eso cambia lo que busca el traductor. En una cláusula, busca primero un verbo; si no lo hay, lo que viene es un sustantivo funcionando de predicado, o un participio, o una cláusula entera sin verbo. El verbo hebraico, cuando aparece, es la pieza corta; todo lo demás son nombres.

Y al revés también vale: muchas cláusulas hebraicas tienen el verbo y casi ningún sustantivo. {עָשָׂה} «hizo» solo es una cláusula entera. La traducción tiene que decidir el objeto que el hebraico dejó fuera, y esa decisión es del traductor, no de la gramática.

## Dónde va el verbo en la cláusula

Si el verbo no flexiona por persona, tampoco fija el lugar del sujeto. El orden hebraico es sustantivo-verbo-sustantivo, pero el sustantivo que va primero puede ser el sujeto o el objeto, y el verbo decide.

{בָּרָא אֱלֹהִים} «Dios creó» — el sustantivo es sujeto porque el verbo {בָּרָא} «crear» es transitivo y va antes de su complemento.

{אֱלֹהִים בָּרָא} «Dios creó» — la misma palabra en la misma posición, y el sustantivo es objeto: fue creado lo que está siendo creado.

El hebreo antiguo, a diferencia del griego, no marca los dos casos. Quien traduce escribe la misma frase en los dos órdenes, y quien estudia necesita el verbo y la lógica para decir cuál de los dos es el sujeto.

El resultado aparece en la primera línea de Génesis. {בְּרֵאשִׁית בָּרָא אֱלֹהִים} es «en el principio creó Dios»: el sustantivo {בְּרֵאשִׁית} está antes del verbo y parece sujeto, y es una preposición con sustantivo. El sujeto de {בָּרָא} está en el segundo sustantivo, {אֱלֹהִים}. Una línea de texto, y tres decisiones que solo quien conoce el verbo puede tomar.`),
  vocab: [
    V('בָּרָא', 'ברא', 'creó (3.ª s., sin sufijo)'),
    V('בָּרָאתִּי', 'ברא', 'yo creé'),
    V('בָּרָאתָּ', 'ברא', 'tú creaste'),
    V('בָּרָאנוּ', 'ברא', 'nosotros creamos'),
    V('בָּרָאוּ', 'ברא', 'ellos crearon'),
    V('בְּרֵאשִׁית', 'רֵאשִׁית', 'en el principio'),
    V('אֱלֹהִים', 'אֱלֹהִים', 'Dios'),
    V('בָּרָא אֱלֹהִים', 'ברא', 'Dios creó (sujeto + verbo)'),
    V('אֱלֹהִים בָּרָא', 'ברא', 'lo creado (objeto + verbo)'),
    V('וַיֹּאמֶר', 'אמר', 'y dijo (wayyiqtol)'),
    V('יְהוָה רֹעִי', 'רֹעֶה', 'el SEÑOR es mi pastor'),
    V('הָיְתָה', 'היה', 'era (qatal 3.ª f.)'),
    V('וְהָאָרֶץ', 'אֶרֶץ', 'y la tierra'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {בָּרָא אֱלֹהִים} «Dios creó», ¿por qué {אֱלֹהִים} es sujeto?'),
    options: [
      T('Porque el verbo {בָּרָא} es transitivo y va antes de su complemento'),
      T('Porque {אֱלֹהִים} tiene artículo'),
      T('Porque {בָּרָא} tiene dageš'),
      T('Porque {אֱלֹהִים} es plural'),
    ],
    answer: 0,
    hint: T('Regla §4: sin caso, un verbo transitivo en posición inicial marca el objeto.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Relaciona la forma verbal con la persona que indica.'),
      pairs: [
        { a: '{בָּרָא}', b: T('3.ª persona (sin sufijo)') },
        { a: '{בָּרָאתִּי}', b: T('1.ª persona del singular') },
        { a: '{בָּרָאוּ}', b: T('3.ª persona del plural') },
        { a: '{בָּרָאתָּ}', b: T('2.ª persona del singular') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Completa Génesis 1:1: «בְּרֵאשִׁית ___ אֶת הַשָּׁמַיִם» (creó).'),
      answer: 'בָּרָא',
      hint: T('Es el qatal de {ברא} «crear», sin sufijo: 3.ª persona.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué muestra la forma {וַיֹּאמֶר} «y dijo» sobre la persona?'),
      options: [
        T('Que el wayyiqtol es siempre 3.ª persona del singular masculino'),
        T('Que el wayyiqtol flexiona por persona'),
        T('Que {וַ} es un sufijo de 3.ª persona'),
        T('Que el verbo tiene sujeto explícito'),
      ],
      answer: 0,
      hint: T('Regla §2: el wayyiqtol no flexiona; {וַ} marca tiempo, no persona.'),
    },
    {
      kind: 'choose',
      prompt: T('En {יְהוָה רֹעִי} (Sal 23.1), ¿qué tipo de cláusula es?'),
      options: [
        T('Cláusula nominal: no hay verbo'),
        T('Cláusula con verbo'),
        T('Cláusula con participio'),
        T('Oración con negación'),
      ],
      answer: 0,
      hint: T('Regla §3: el hebraico admite cláusula sin verbo.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El verbo hebraico rara vez flexiona por persona: {בָּרָא} no tiene terminación, y el contexto da el sujeto.',
      ),
    },
    {
      n: '2',
      text: T(
        'Lo que flexiona por persona son los sufijos ({בָּרָאתִּי}, {בָּרָאוּ}), y el wayyiqtol nunca flexiona: {וַ} marca tiempo, no persona.',
      ),
    },
    {
      n: '3',
      text: T(
        'La cláusula hebraica puede no tener verbo: {יְהוָה רֹעִי} es una cláusula nominal completa.',
      ),
    },
    {
      n: '4',
      text: T(
        'Sin caso nominal, el orden es sustantivo-verbo-sustantivo y decide el papel el verbo: {בָּרָא אֱלֹהִים} tiene sujeto {אֱלֹהִים}; {אֱלֹהִים בָּרָא} tiene objeto.',
      ),
    },
  ],
  notes: [
    {
      label: T('Error común:'),
      text: T(
        'No hay forma verbal hebreira para la 3.ª persona del plural sin {ו}, y la 3.ª del singular no lleva sufijo. El resultado es que {בָּרָא} sirve para «creó» y, en un contexto con sufijo plural alrededor, para «crearon». Quien traduce verbo por verbo sin mirar el resto de la cláusula falla la persona en casi todas las oraciones del Tanaj.',
      ),
    },
    {
      label: T('Dato curioso:'),
      text: T(
        'La flexión por persona que el hebraico tiene es un residuo del verbo semítico. Los sufijos {תִּי}, {תָּ}, {נוּ}, {וּ} y {תֶּם} son los mismos que el participio del inglés todavía muestra en {loved} y {loves}. El griego y el hicieron la flexión dentro de la palabra; el hebraico tiró la persona hacia fuera, y por eso sobrevive en Europa y no aquí.',
      ),
    },
  ],
  examples: [
    { text: '{בָּרָא}', gloss: T('creó — 3.ª persona, sin sufijo (Gn 1.1)') },
    { text: '{בָּרָאתִּי}', gloss: T('yo creé — sufijo {־תִּי}') },
    { text: '{בָּרָאתָּ}', gloss: T('tú creaste — sufijo {־תָּ}') },
    { text: '{בָּרָאנוּ}', gloss: T('nosotros creamos — sufijo {־נוּ}') },
    { text: '{בָּרָאוּ}', gloss: T('ellos crearon — sufijo {־וּ}') },
    { text: '{בְּרֵאשִׁית בָּרָא}', gloss: T('en el principio creó — el sujeto viene después (Gn 1.1)') },
    { text: '{בָּרָא אֱלֹהִים}', gloss: T('Dios creó — el sustantivo es sujeto') },
    { text: '{אֱלֹהִים בָּרָא}', gloss: T('lo creado — el sustantivo es objeto') },
    { text: '{וַיֹּאמֶר}', gloss: T('y dijo — wayyiqtol, siempre 3.ª m.') },
    { text: '{יְהוָה רֹעִי}', gloss: T('el SEÑOR es mi pastor — cláusula nominal (Sal 23.1)') },
    { text: '{וְהָאָרֶץ הָיְתָה}', gloss: T('y la tierra era — {ו} de secuencia (Gn 1.2)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Flexión por persona en {ברא}'),
      head: [T('Persona'), T('Sufijo'), T('Forma'), T('Glosa')],
      rows: [
        [T('3.ª s. (m.)'), T('—'), '{בָּרָא}', T('creó (él)')],
        [T('3.ª pl.'), '{־וּ}', '{בָּרָאוּ}', T('crearon')],
        [T('2.ª s. (m.)'), '{־תָּ}', '{בָּרָאתָּ}', T('tú creaste')],
        [T('2.ª s. (f.)'), '{־תְּ}', '{בָּרָאתְּ}', T('tú creaste (f.)')],
        [T('1.ª s.'), '{־תִּי}', '{בָּרָאתִּי}', T('yo creé')],
        [T('1.ª pl.'), '{־נוּ}', '{בָּרָאנוּ}', T('nosotros creamos')],
        [T('2.ª pl. m.'), '{־תֶּם}', '{בָּרָאתֶּם}', T('vosotros creasteis')],
      ],
    },
    {
      caption: T('Tabla 2 — El wayyiqtol no flexiona'),
      head: [T('Forma'), T('Qué hace el {וַ}'), T('Persona'), T('Glosa')],
      rows: [
        ['{וַיֹּאמֶר}', T('marca la narrativa'), T('siempre 3.ª m.'), T('y dijo')],
        ['{וַיִּשְׁמַע}', T('marca la narrativa'), T('siempre 3.ª m.'), T('y oyó')],
        ['{וַיְהִי}', T('marca la narrativa'), T('siempre 3.ª m.'), T('y aconteceu')],
        ['{וְהוּא}', T('es solo la conjunción «y»'), T('{הוּ} es pronombre'), T('y él')],
      ],
    },
  ],
};
