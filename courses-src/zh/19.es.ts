import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  section: T('Verbo'),
  title: T('Futuro, obligación y posibilidad'),
  subtitle: T(
    'El mandarín no flexiona el verbo: el tiempo viene de partículas que se colocan delante',
  ),
  body: C(`
## El mandarín no flexiona el verbo

En español el futuro vive dentro del verbo. "Yo comeré" es "yo" más "comer": una forma distinta de la del presente y de la del pasado, y lo mismo ocurre con toda la conjugación. Quien aprende español aprende primero la flexión, y por eso el futuro parece fácil antes de resultar difícil.

En mandarín no hay flexión en absoluto. "Yo como", "yo comí" y lo que el español llamaría "yo comeré" tienen el **mismo verbo**, {chī}, idéntico en las tres frases. Lo que cambia no es el verbo: es lo que está delante de él.

{Le} ({了}) es aspecto: dice que la acción está cumplida, no cuándo ocurrió. El futuro es otra cosa. No tiene partícula única ni tiempo verbal; tiene un conjunto de palabras que se colocan delante del verbo, cada una con un grado de compromiso distinto. Una es predicción, otra es plan, otra es obligación, otra es posibilidad. Elegir entre ellas es la tarea, y elegir mal no produce una gramática rota: produce una nuance equivocada. En mandarín el tiempo es una decisión de estilo que se toma frase a frase, no un hecho de la forma del verbo.

## {會} y {要}: lo que sé y lo que planeo

**{huì} ({會})** delante del verbo tiene dos sentidos, y en la forma son indistinguibles:

- {wǒ huì chī} — "sé comer", es decir, tengo la capacidad.
- {wǒ huì chī} — "voy a comer", es decir, es la predicción que hago.

La ambigüedad es real y útil: en ambos casos la estructura es la misma, y el contexto, lo que viene antes, quién habla, de qué, decide. En el mandarín coloquial ese solapamiento se explota a propósito, y en un texto bíblico aparece justo donde el griego también es ambiguo.

**{yào} ({要})** delante del verbo es plan o deseo: {wǒ yào qù} es "voy a ir / quiero ir", con la diferencia de que el "voy" del español es aquí decisión mía, no predicción. Compárense los dos: {wǒ huì qù} es "voy a ir", predicción; {wǒ yào qù} es "voy a ir", plan. La misma frase en español y dos frases distintas en mandarín.

{jiāng yào} ({將}{要}) es el futuro más formal y más escrito. Nadie dice {jiāng} en conversación; aparece constantemente en la {和合本} y en la literatura, y es la forma que el traductor elige cuando el original tiene peso literario, narración, profecía, relato solemne. No añade un sentido nuevo: añade registro.

Y está también la negación del futuro: {bù} delante del verbo niega presente y futuro, y {wǒ bù qù} es "no iré". El {bù} niega lo que {huì} o {yào} afirmarían.

## {必}{須} y {得}: tres verbos, un carácter

La obligación se dice de dos maneras. **{bìxū} ({必}{須})** es un verbo modal completo, "es necesario, hace falta": {wǒ bìxū qù}, "yo debo ir", en la misma posición que {huì} y {yào}, delante del verbo. En texto escrito es más fuerte y más formal que {děi}.

**{děi} ({得})** en la misma posición dice lo mismo de manera más breve y más coloquial: {wǒ děi qù}, "tengo que ir".

El carácter {得} son tres verbos en mandarín, que solo el tono distingue:

- {děi}, 3.er tono, "necesitar, tener que": {wǒ děi qù}, yo tengo que ir.
- {de}, tono neutro, "modo, manera": {nǐ màn màn de chī}, come despacio.
- {dé}, 2.º tono, "obtener, recibir": {wǒ dé dào yī fēn}, he ganado un punto.

Un carácter, tres verbos, tres tonos. Ninguno se parece a los otros, y ningún contexto gramatical impone el tono: es el significado el que trae el tono consigo. Por eso un diccionario de mandarín está organizado por pronunciación y no por carácter, y por eso {wǒ děi qù} y {wǒ dé dào yī fēn} pueden ser una sola línea en el papel y dos frases sin relación alguna en el habla.

## {可}{能} y la escala de la certeza

**{kěnéng} ({可}{能})** significa "puede, es posible". Va delante del verbo como {huì} y {yào}, y también delante de un adjetivo: {tā kěnéng lèi}, "puede que esté cansado", {zhè kěnéng shì hǎo de}, "esto puede ser bueno".

Las cinco palabras se ordenan en una escala de compromiso del hablante con la verdad de la frase, y el orden importa más que la traducción:

**{yídìng} ({一}{定})** > {bìxū} ({必}{須}) > {yào} ({要}) > {huì} ({會}) > {kěnéng} ({可}{能})

Lo más fuerte es lo que niega la posibilidad; lo más débil es la posibilidad. {tā yídìng lái} es "vendrá con certeza" y, por implicación, "no puede ser que no venga". En medio, {tā yào lái} es lo que pretende, {tā huì lái} es lo que se espera, {tā kěnéng lái} es lo que se admite. Traducir todo por "irá" borra exactamente la información que la frase cargaba.

Es aquí donde la lectura bíblica se vuelve rica. En Juan 3:16 la {和合本} dice {shàngdì ài shìrén, shènzhì jiāng tā de dúshēnzǐ cìgěi tāmen}, "Dios amó al mundo, hasta el punto de entregar su Hijo único". El {jiāng} ({將}) es la partícula formal de futuro, y está justo al lado de {cì} ({賜}), "dar, conceder". Los dos juntos dicen algo que la traducción al español suele aplanar: el verbo de la entrega está en el **potencial**, no en el pasado consumado. No es "entregó"; es "hasta el punto de entregar", un futuro que abre una decisión de alguien.

Es la diferencia entre una frase que afirma y una que se compromete. Y el mandarín no tiene futuro flexionado para esconder esa elección: está escrita en la partícula, a la vista de quien lee.`),
  vocab: [
    V('huì', '会', 'ir (futuro previsto) / saber, poder'),
    V('yào', '要', 'ir (plan, intención); querer'),
    V('jiāng', '将', 'ir (futuro formal y escrito; parte de 將要)'),
    V('děi', '得', 'tener que, necesitar (3.er tono)'),
    V('bìxū', '必须', 'ser necesario, hace falta'),
    V('kěnéng', '可能', 'poder, ser posible'),
    V('yídìng', '一定', 'con certeza, sin duda'),
    V('cì', '赐', 'dar, conceder (donación divina)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Ninguna partícula de futuro flexiona el verbo: en {wǒ yào chī} y {wǒ chī} el verbo es el mismo {chī}.',
      ),
    },
    { n: '2', text: T('{huì} antes del verbo es predicción **o** capacidad; decide el contexto.') },
    {
      n: '3',
      text: T(
        '{yào} antes del verbo es plan o deseo; {jiāng yào} es la forma formal y escrita de la misma idea.',
      ),
    },
    {
      n: '4',
      text: T(
        'La obligación es {bìxū} (verbo) o {děi} (3.er tono) — nunca {dé}, que significa obtener.',
      ),
    },
    {
      n: '5',
      text: T(
        '{kěnéng} precede al verbo o al adjetivo, y la escala es {yídìng} > {bìxū} > {yào} > {huì} > {kěnéng}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Un carácter, tres verbos'),
      text: T(
        '{děi} (3.er tono) "necesitar", {de} (tono neutro) "modo" y {dé} (2.º tono) "obtener" son el mismo carácter {得}. La gramática no elige el tono: lo elige el significado. Un diccionario de mandarín se indexa por pronunciación, no por carácter.',
      ),
    },
    {
      label: T('Dónde elige {将} el traductor'),
      text: T(
        '{jiāng} no aparece en el habla — es registro escrito y solemne. Ver un {将} en la {和合本} es ver una decisión de estilo del traductor, no un dato del griego: no todo pasaje solemne lo recibe, y ninguno lo recibe donde el contexto es coloquial.',
      ),
    },
  ],
  examples: [
    { text: '我会说话', gloss: T('wǒ huì shuōhuà — sé hablar (y también: voy a hablar)') },
    { text: '我要去', gloss: T('wǒ yào qù — voy a ir (es mi plan)') },
    { text: '我得走了', gloss: T('wǒ děi zǒu le — tengo que ir (es necesario)') },
    { text: '他可能会来', gloss: T('tā kěnéng huì lái — puede que venga') },
  ],
  tables: [
    {
      caption: T('La escala del compromiso del hablante'),
      head: [T('Frase'), T('Fuerza'), T('{wǒ} + {qù} se lee como')],
      rows: [
        [T('{wǒ} {yídìng} {qù}'), T('certeza'), T('yo iré seguro')],
        [T('{wǒ} {bìxū} {qù}'), T('obligación'), T('yo debo ir')],
        [T('{wǒ} {yào} {qù}'), T('plan'), T('yo voy a ir (pienso ir)')],
        [T('{wǒ} {huì} {qù}'), T('predicción'), T('yo iré (lo previero)')],
        [T('{wǒ} {kěnéng} {qù}'), T('posibilidad'), T('puede que yo vaya')],
      ],
    },
    {
      caption: T('El carácter 得: tres verbos, tres tonos'),
      head: [T('Pronunciación'), T('Sentido'), T('Ejemplo')],
      rows: [
        [T('{děi} (3.er tono)'), T('necesitar, tener que'), T('{wǒ} {děi} {qù} — yo tengo que ir')],
        [T('{de} (tono neutro)'), T('modo, manera'), T('{màn màn} {de} {chī} — come despacio')],
        [T('{dé} (2.º tono)'), T('obtener, recibir'), T('{wǒ} {dé} {dào} yī fēn — gané un punto')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {我得走了}, ¿cuál es la lectura de {得}?'),
    options: [T('necesitar'), T('modo'), T('obtener'), T('dar')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "yo tengo que ir" con la partícula de obligación: 我____走了'),
      answer: '得',
    },
    {
      kind: 'match',
      prompt: T('Une la partícula con su valor'),
      pairs: [
        { a: T('{會}'), b: T('predicción o capacidad') },
        { a: T('{要}'), b: T('plan o deseo') },
        { a: T('{必須}'), b: T('obligación') },
        { a: T('{可能}'), b: T('posibilidad') },
        { a: T('{一定}'), b: T('certeza') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('En {他可能会来}, ¿qué palabra carga la posibilidad?'),
      options: [T('{會}'), T('{可能}'), T('{將}'), T('{一定}')],
      answer: 1,
    },
  ],
};
