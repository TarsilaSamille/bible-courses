import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  section: T('Verbo'),
  title: T('Con o sin objeto: la misma flexión, dos frases'),
  subtitle: T(
    'El verbo japonés no flexiona por tener o no tener objeto: la partícula {wo} dice si lo hay, y solo ella',
  ),
  body: C(`
## La misma flexión en los dos lados

Un verbo **transitivo** recibe objeto; un verbo **intransitivo** no. En portugués eso se ve en la forma: "eu chego" y "eu chego ele" flexionan distinto, y por eso el principiante dice "ele chegou-o" sin advertir que está comiendo una frase imposible. El japonés no tiene esa distinción en la forma. **La flexión es la misma en los dos casos.**

Compara {taberu} "comer" y {nemuru} "dormir": los dos son verbos de la primera conjugación, los dos pierden la misma ru. {hon o taberu} es "como un libro", {nemuru} es "duermo". La terminación del verbo es idéntica; lo que cambia es si hay un nombre después del {wo}. Si traduziste "él duerme" como "él duerme-o", no fue la flexión lo que falló, fue la partícula que inventaste.

Esto vale para la segunda conjugación también: {shinu} "morir" y la raíz de "oír" pierden la misma i. No existe forma japonesa de "morir-o".

## La prueba: pon el {wo} después

La prueba práctica cabe en una frase: pon el {wo} después del verbo. Si cabe y tiene sentido, el verbo es transitivo; si no cabe, es intransitivo. {hon o taberu} funciona, "un libro, como". {nemuru} no funciona, nadie duerme un libro.

Y el resultado de la prueba es inmediato para las listas más usadas del día a día. Del lado del objeto: {taberu}, {nomu}, {hon o yomu}, {hon o kaku}, {hon o miru}, {mimi o kiku}, {hon o hiraku}, {hon o tojiru}. Del lado sin objeto: {iku}, {kuru}, {nemuru}, {okiru}, {shinu}, {warau}, {naku}. Una docena de verbos y ya resuelves la mitad de las frases.

La consecuencia es la parte que los principiantes olvidan: **el verbo no te dice si hay objeto.** La flexión es una sola, y por eso no puede cargar esa información. Lo que te lo dice es la partícula, y si el {wo} no está ahí, o la frase está incompleta, o el verbo es intransitivo y no quería objeto ninguno. El trabajo de decidir le toca al {wo}, no al verbo. Por eso el {wo} es la información de la frase, y el verbo es solo lo que queda.

## {hairu}: el par que resuelve el contexto

Hay un verbo que es las dos cosas a la vez, y es la mejor prueba de que la partícula es quien decide. El verbo {hairu} acepta objeto o no, y la flexión es la misma en los dos casos.

{ie ni hairu} es "entro en casa": {hairu} es intransitivo aquí, y {ie ni} dice hacia dónde. {hon o ie ni hairu} es "el libro cabe en casa": {hairu} es transitivo aquí, "hacer caber", y el {wo} está ahí marcando el libro como aquello que entra. Dos frases, un verbo, la misma terminación, y la única señal es la presencia del {wo} después del nombre.

Es lo que bloquea el error simétrico: "él entró-o" no es una frase que el japonés pueda formar, pero "él entró" tampoco es la única forma. Lo que cambia es qué está mirando el verbo. Sin {wo}, mira al lugar; con {wo}, mira a la cosa que entra en el lugar. El contexto, quién está alrededor y qué se dijo antes, elige entre las dos lecturas, y el lector que conoce las dos no yerra en ninguna.

Un paso más allá, solo para saber que existe: la misma raíz reaparece en {reru}, la terminación del pasivo, y la raíz de "oír" se vuelve {saseru}, "hacer oír", la terminación del causativo. Son los mismos verbos de los dos lados de todo lo anterior, con una capa más, y por eso la misma raíz aparece en tantas formas. Los verbos "ser hecho" y "hacer que alguien haga" no son verbos nuevos.

## {aru} no tiene objeto, y Juan 1:1 tiene dos intransitivos

El verbo de existencia, {aru} "haber, existir", es intransitivo, y eso es una trampa clásica del principiante. "Hay un libro" en japonés es {hon ga aru}: el nombre viene marcado con la partícula de sujeto, el "ga", y el verbo es {aru}, que no recibe nada después de él. Escribir {hon o aru} es el error, porque el {wo} no tiene nada que marcar.

Quien traduce desde el portugués convierte "hay" en un verbo y ve un objeto en él, y de ahí nace el {wo} que no debería existir. En japonés "hay" no es un verbo que agarre nada: es un verbo que dice que la cosa está ahí. La diferencia entre {hon ga aru} y {hon o aru} no es de estilo; la segunda frase sencillamente no está bien formada.

El gancho bíblico que ata todo es Juan 1:1, "en el principio era la Palabra". Es {aru}, intransitivo, y es el verbo más importante del capítulo entero. En la misma frase, "la Palabra estaba con Dios" usa el verbo de estar junto, algo como {sou} "estar junto con, acompañar", que también es intransitivo: no recibe la Palabra como objeto, la Palabra viene como nombre que acompaña, marcado como tal.

Dicho de otro modo: **Juan 1:1 tiene dos verbos intransitivos en una sola frase.** No hay ni un solo {wo} en "en el principio era la Palabra y la Palabra estaba con Dios", y es exactamente eso lo que hace que el versículo le parezca extraño al lector portugués, acostumbrado a que todo verbo tenga algo sobre lo que caer. Quien entiende que el japonés no lo necesita entiende el versículo, y entiende por qué la traducción japonesa usa kana justo en esos verbos.
`),
  vocab: [
    V('wo', 'を', 'objeto directo; la partícula que dice que hay objeto (wo)'),
    V('taberu', '食べる', 'comer (taberu)'),
    V('nomu', '飲む', 'beber (nomu)'),
    V('nemuru', '寝る', 'dormir (nemuru)'),
    V('hairu', '入る', 'entrar; hacer caber; recibir (hairu)'),
    V('iku', '行く', 'ir (iku)'),
    V('kuru', '来る', 'venir (kuru)'),
    V('okiru', '起きる', 'despertar; levantarse (okiru)'),
    V('shinu', '死ぬ', 'morir (shinu)'),
    V('warau', '笑う', 'reír (warau)'),
    V('naku', '泣く', 'llorar (naku)'),
    V('aru', 'ある', 'haber; existir (aru)'),
    V('sou', '添う', 'estar junto con; acompañar (sou)'),
    V('yomu', '読む', 'leer (yomu)'),
    V('reru', 'れる', 'pasivo; también "posible" (reru)'),
    V('saseru', 'させる', 'causativo; "hacer que alguien haga" (saseru)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El verbo transitivo y el intransitivo tienen la misma flexión: {taberu} y {nemuru} pierden la misma ru.',
      ),
    },
    {
      n: '2',
      text: T(
        'La prueba es una: pon el {wo} después del verbo. Si cabe y tiene sentido, es transitivo; si no cabe, es intransitivo.',
      ),
    },
    {
      n: '3',
      text: T(
        'El verbo no dice si hay objeto — lo dice la partícula. Sin {wo} después del nombre, o la frase está incompleta o el verbo es intransitivo.',
      ),
    },
    {
      n: '4',
      text: T(
        '{hairu} puede ser "entrar" (intransitivo) o "hacer caber" (transitivo): la misma flexión, y el {wo} es lo que separa las dos frases.',
      ),
    },
    {
      n: '5',
      text: T(
        '{aru} de la lección 7 es intransitivo: "hay un libro" es {hon ga aru}, nunca {hon o aru}.',
      ),
    },
  ],
  notes: [
    {
      label: T('El verbo es el resto, la partícula es la información'),
      text: T(
        'La flexión del verbo no varía, y el {wo} aparece o no aparece. Por eso la flexión no puede ser la pista: en japonés, la información vive en la partícula. Un principiante que traduce desde el portugués busca en el verbo algo que él no dice, y escribe "ele chegou-o" — pero el error no es de flexión, es una partícula inventada.',
      ),
    },
    {
      label: T('Dos verbos intransitivos en Juan 1:1'),
      text: T(
        'En el principio **era** la Palabra — {aru}, intransitivo. Y la Palabra **estaba con** Dios — {sou}, intransitivo, con la Palabra como nombre que acompaña. Ni un {wo} en la frase, y aun así el versículo está completo. Quien espera un objeto en todo verbo se atasca aquí.',
      ),
    },
  ],
  examples: [
    { text: 'パンを食べる', gloss: T('pan o taberu — como pan') },
    { text: 'ベッドで寝る', gloss: T('beddo de nemuru — duermo en la cama') },
    { text: '家に入る', gloss: T('ie ni hairu — entro en casa') },
    { text: '本を家に入れる', gloss: T('hon o ie ni hairu — el libro cabe en casa') },
    {
      text: '初めはことばがあった',
      gloss: T('hazime wa kotoba ga atta — en el principio había la Palabra (Juan 1:1)'),
    },
  ],
  tables: [
    {
      caption: T('Los verbos más usados de cada lado'),
      head: [T('Con objeto'), T('Sin objeto')],
      rows: [
        [T('{taberu} — comer'), T('{nemuru} — dormir')],
        [T('{nomu} — beber'), T('{iku} — ir')],
        [T('{hon o yomu} — leer'), T('{kuru} — venir')],
        [T('{hon o kaku} — escribir'), T('{okiru} — despertarse')],
        [T('{hon o miru} — ver'), T('{shinu} — morir')],
        [T('{mimi o kiku} — oír'), T('{warau} — reír')],
        [T('{hon o hiraku} — abrir'), T('{naku} — llorar')],
      ],
    },
    {
      caption: T('La prueba del {wo} en tres verbos'),
      head: [T('¿{wo} después?'), T('Verbo'), T('Glosa')],
      rows: [
        [T('sí'), T('{taberu}'), T('comer, y hay algo para comer')],
        [T('sí'), T('{yomu}'), T('leer, y hay algo para leer')],
        [T('no'), T('{nemuru}'), T('dormir, y nadie duerme algo')],
        [T('no'), T('{shinu}'), T('morir, y nadie muere algo')],
      ],
    },
    {
      caption: T('El mismo verbo, las dos frases'),
      head: [T('Frase'), T('¿Hay objeto?'), T('Glosa')],
      rows: [
        [T('{ie ni hairu}'), T('no'), T('entra en casa')],
        [T('{hon o ie ni hairu}'), T('sí'), T('el libro cabe en casa')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {hon ga aru}, ¿por qué no hay {wo} después del nombre?'),
    options: [
      T('porque {aru} es intransitivo'),
      T('porque la partícula de sujeto ya hace ese trabajo'),
      T('porque un sustantivo nunca recibe partícula en japonés'),
      T('porque el {wo} es opcional en japonés'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "como pan" con la partícula de objeto: パン____食べる'),
      answer: 'を',
    },
    {
      kind: 'match',
      prompt: T('Une el verbo con el lado en el que queda'),
      pairs: [
        { a: T('{taberu}'), b: T('con objeto') },
        { a: T('{yomu}'), b: T('con objeto') },
        { a: T('{nemuru}'), b: T('sin objeto') },
        { a: T('{aru}'), b: T('sin objeto') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál de las frases está bien formada?'),
      options: [T('{hon o aru}'), T('{hon ga aru}'), T('{hon ni hairu}'), T('{hon o nomu o aru}')],
      answer: 1,
    },
  ],
};
