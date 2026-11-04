import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  section: T('Partículas'),
  title: T('Partículas del mandarín escrito: {之}, {者}, {其}, {所}'),
  subtitle: T(
    'Lo que el griego resuelve con una oración de relativo, el mandarín escrito lo resuelve con cuatro partículas y ningún verbo',
  ),
  body: C(`
## Dos familias dentro de una misma clase

La partícula que ya se conoce es gramática y no palabra: {ma}, {le}, {ba}, {de} marcan la postura del hablante o la relación entre dos nombres, y ninguna dice qué contiene la frase. Junto a ellas vive una segunda familia, más antigua y mucho más escrita: {zhī}, {zhě}, {qí}, {suǒ}. Estas no marcan postura: **ocupan el lugar de una palabra del portugués**. Donde el portugués escribe "el libro que leí", el mandarín escrito escribe tres caracteres y ningún verbo.

La consecuencia para la lectura es inmediata, y llega antes que la gramática: un versículo que termina en {yě} escrito, o en {yǐ}, no vino del griego. El registro habla antes que la frase. Y el {yě} del mandarín hablado, el "también", es la misma sílaba y el mismo carácter que la partícula final del mandarín escrito. Quien separa los dos por la pronunciación pierde la información de registro y decide por el sonido, que es justamente lo que no puede decidir.

## {zhě} convierte verbo en sustantivo

La regla cabe en una línea, y es la más productiva de las cuatro.

**{zhě} va después del verbo o del adjetivo, y lo que queda es un sustantivo.**

{láizhě} es "el que viene" y {zhùzhě} es "el que mora"; {zhīzhě} es "el que sabe". El verbo sigue ahí dentro, y el {zhě} dice que aquella acción se ha convertido en cosa. Quien traduce palabra por palabra escribe "viniendo aquel" y lo lee como si el mandarín tuviera un participio de presente.

Lo que hace el {zhě} es exactamente lo que hace la {de} con un adjetivo, solo que en dirección contraria. {hóngsè de huā} es adjetivo más sustantivo, dos nombres; {zhī zhě} es verbo más partícula, y el verbo se volvió sustantivo. Son las dos maneras que tiene el mandarín de armar un sintagma nominal nuevo, y ninguna necesita una palabra nueva.

El segundo uso es más raro y más antiguo: el {zhě} como marca de tópico. {gǔjīn zhī rén} es "en cuanto a los antiguos"; la partícula {zhě} cierra el asunto y el resto de la frase comenta. Es lo que el portugués resuelve con "en cuanto a", y que la versión-union usa poco.

## {zhī} y {qí}, los posesivos que no usan {de}

La {de} de posesión de la lección sobre el posesivo va después del poseedor: {wǒ de shū}, {tā de shū}. El mandarín escrito hace lo mismo con {qí}, y va antes.

**{qí} va antes del sustantivo y {de} va después. Los dos dicen posesión, y el mandarín escrito usa el primero.**

{qí mǔ} es "su madre" y {wǒ de mǔ} es "mi madre", y la diferencia de posición es la pista de qué registro se está leyendo. Un libro entero puede alternar los dos sin que el lector lo note, porque la información es la misma y solo la posición la delata.

El {zhī} tiene tres vidas. En lugar del pronombre: {zhī shì zhī wèi zhī}, "eso es su conocimiento". En lugar del posesivo, pegado al nombre como la {de} de posesión: {zhī dào} es "su venida". Y dentro de una locución, unido al sustantivo que viene después — allí el {zhī} es la preposición y el {guó} vuelve a ser el nombre: {zhī dào zhōng guó} es "a lo largo del camino".

## {suǒ} y los tres finales de frase

El {suǒ} marca la palabra que va a ser sujeto del verbo que viene después, y es la alternativa que el mandarín escrito tiene a la oración de relativo. {suǒ} {wǒ} {chī} {de} {shí}, "aquello que yo como": el sujeto está marcado dos veces, una por el {suǒ} y otra por la {de}. Sin la {de}, el {suǒ} solo ya gobierna el verbo, y ese es el caso que asusta a quien traduce, porque el mandarín escrito admite que el pronombre que hace de sujeto sencillamente no aparezca.

Los tres finales cierran la frase y dicen qué hacer con ella. El {yǐ} dice que el hablar se acabó y que el oyente debe cerrar; el {hū} convierte la frase en pregunta que no quiere respuesta; el {yān} añade el sentido de lugar. Los tres viven en los textos más antiguos, y la versión-union los trae casi todos de los Salmos y de Proverbios.

El gancho está en un solo versículo, y es la prueba de que el registro dice la lengua de origen. Primera Corintios 13 abre con {ài shì} y repite la misma construcción en toda la carta: {ài shì} {héng jiǔ rěn nài}, "el amor es larga paciencia". Once líneas después el mismo libro escribe {ài shì} {yǒng bù zhǐ xī de}, y nunca pone un {yě} ni pone un {zhě}. Primera Juan 4:8 cierra la carta en la forma más breve posible: {shén jiù shì ài}, "Dios es amor", tres palabras, el verbo {shì}, ningún pronombre y ninguna partícula. La misma versión-union, el mismo traductor bilingüe, la misma mesa de trabajo. Lo que cambió entre {ài shì héng jiǔ rěn nài} y {yǒu rén lái jiàn Yēsū} fue el libro de origen, y no la edición.

En Proverbios 4:23 el mandarín escrito aparece con el mejor testigo posible, porque el versículo es corto: {yī qiè} es "todo", {yī shēng} es "toda la vida", y {yóu xīn fā chū} es "sale del corazón", sin preposición y sin cópula, un verbo y el sustantivo que lo nombra. El original dice lo mismo, y quien reconoce la construcción reconoce el hebreo traducido.`),
  vocab: [
    V('zhī', '之', 'eso, él, aquello que; pronombre y partícula del mandarín escrito (zhī)'),
    V('zhě', '者', 'el que; convierte verbo en sustantivo (zhě)'),
    V('yě (final)', '也', 'partícula final del mandarín escrito, y no "también" (yě)'),
    V('qí', '其', 'suyo, de él; el posesivo del mandarín escrito (qí)'),
    V('suǒ', '所', 'aquello que; marca el sujeto del verbo que viene después (suǒ)'),
    V('yǐ', '矣', 'final de frase: el hablar se acabó, el oyente debe cerrar (yǐ)'),
    V('hū', '乎', 'final de frase que se vuelve pregunta retórica (hū)'),
    V('yān', '焉', 'aquí, dónde; y final de frase (yān)'),
    V('cǐ', '此', 'este; pronombre demostrativo del mandarín escrito (cǐ)'),
    V('fú', '弗', 'no; el negador del mandarín escrito (fú)'),
    V('ěr', '尔', 'tú; pronombre del mandarín escrito (ěr)'),
    V('rǔ', '汝', 'tú; pronombre del mandarín escrito (rǔ)'),
    V('wèi', '为', 'por, para; el primer tono de 為 (wèi)'),
    V('wéi', '为', 'ser, volverse; el otro tono de 為 (wéi)'),
    V('yīqiè', '一切', 'todo, todas las cosas (yīqiè)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{zhě} va después del verbo o del adjetivo y el resultado es un sustantivo: {láizhě}, "el que viene".',
      ),
    },
    {
      n: '2',
      text: T(
        '{qí} va ANTES del sustantivo y {de} DESPUÉS: los dos dicen posesión, y la posición dice cuál se está leyendo.',
      ),
    },
    {
      n: '3',
      text: T(
        '{suǒ} marca la palabra que será sujeto del verbo siguiente, y el mandarín escrito omite el pronombre que hace de sujeto.',
      ),
    },
    {
      n: '4',
      text: T(
        '{yǐ}, {hū} y {yān} cierran la frase y dicen qué hacer con ella; un {yě} escrito no es el "también".',
      ),
    },
    {
      n: '5',
      text: T(
        '{wèi} es "por, para" y {wéi} es "ser, volverse". El mismo carácter, decide el tono.',
      ),
    },
  ],
  notes: [
    {
      label: T('El {yě} que no es el "también"'),
      text: T(
        'El {yě} que cierra la frase en el mandarín escrito es la misma sílaba y el mismo carácter del {yě} que significa "también". En {shàng} {Xiānsheng} {yě} {lái le} el {yě} es un adverbio, y nada marca que la frase se acabó. La diferencia es de registro y no de sonido, y por eso el sonido no puede decidirla.',
      ),
    },
    {
      label: T('Un versículo de cuatro palabras'),
      text: T(
        'La versión-union escribe {shén jiù shì ài} para la frase que el griego escribe en cuatro palabras y el hebreo en tres. No falta nada: {shén} es el sujeto, {shì} el verbo, {ài} el predicado. Quien busca una partícula donde no la hay no la encontrará, y la conclusión correcta es que esa frase no tenía ninguna partícula.',
      ),
    },
  ],
  examples: [
    {
      text: '愛是恆久忍耐，又有恩慈',
      gloss: T(
        'ài shì héng jiǔ rěn nài, yòu yǒu ēncí — el amor es larga paciencia y tiene bondade (1 Cor 13:4): {shì} y nada más',
      ),
    },
    {
      text: '神就是愛',
      gloss: T('shén jiù shì ài — Dios es amor (1 Juan 4:8): tres palabras, ninguna partícula'),
    },
    {
      text: '我為此而生，也為此而來，為要給真理作見證',
      gloss: T(
        'wǒ wèi cǐ ér shēng, yě wèi cǐ ér lái — por esto nací y por esto vine (Juan 18:37): {cǐ} en lugar del demostrativo',
      ),
    },
    {
      text: '你要保守你心，勝過保守一切，因為一生的果效，是由心發出',
      gloss: T(
        'nǐ yào bǎoshǒu nǐ xīn, shèngguò bǎoshǒu yī qiè — guarda tu corazón por encima de todo (Prov 4:23): {yī qiè} y {yī shēng}',
      ),
    },
    {
      text: '知之為知之，不知為不知，是知也',
      gloss: T(
        'zhī zhī wéi zhī zhī, bù zhī wéi bù zhī, shì zhī yě — saber que se sabe es el propio saber (Anal. 2:17): dos usos de {zhī}',
      ),
    },
    {
      text: '學而時習之，不亦說乎',
      gloss: T(
        'xué ér shí xí zhī, bù yì yuè hū — ¿no es un placer aprender y repasar lo aprendido? (Anal. 1:1): {hū} al final',
      ),
    },
    { text: '來者', gloss: T('láizhě — el que viene: un verbo que se ha vuelto sustantivo') },
    {
      text: '所愛的',
      gloss: T('suǒ ài de — aquello que es amado: {suǒ} marca el sujeto del verbo siguiente'),
    },
  ],
  tables: [
    {
      caption: T('Tres familias de partículas, tres trabajos'),
      head: [T('Familia'), T('Qué hace'), T('Ejemplos'), T('Registro')],
      rows: [
        [
          T('de actitud'),
          T('marca la postura del hablante'),
          T('{ma}, {le}, {ba}, {ne}'),
          T('hablado y escrito'),
        ],
        [
          T('de gramática'),
          T('ocupa el lugar de una palabra del portugués'),
          T('{de}, {zhī}, {qí}'),
          T('ambos, en registros distintos'),
        ],
        [
          T('de la frase'),
          T('se pone al final y dice cómo cerrar el habla'),
          T('{yě}, {yǐ}, {hū}, {yān}'),
          T('texto escrito antiguo'),
        ],
      ],
    },
    {
      caption: T('Los pronombres del mandarín escrito'),
      head: [T('Palabra'), T('Equivalente en portugués'), T('Dónde entra'), T('Ejemplo')],
      rows: [
        [
          T('{zhī}'),
          T('eso, aquello que'),
          T('en lugar del pronombre'),
          T('{zhī shì zhī wèi zhī}'),
        ],
        [T('{qí}'), T('suyo, de él'), T('antes del sustantivo'), T('{qí mǔ} su madre')],
        [T('{cǐ}'), T('este'), T('en lugar del demostrativo'), T('{wèi cǐ} por esto')],
        [T('{ěr}, {rǔ}'), T('tú'), T('en lugar de {nǐ}'), T('{ěr wú shí}, {rǔ wú shí}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {知之為知之，不知為不知，是知也}, ¿qué está haciendo el primer {zhī}?'),
    options: [
      T('ocupa el lugar del pronombre: aquello es lo que se sabe'),
      T('convierte el verbo en sustantivo'),
      T('marca el sujeto del verbo siguiente'),
      T('niega el verbo {zhī}'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete el posesivo del mandarín escrito, que va ANTES del sustantivo: ____ 母, su madre',
      ),
      answer: '其',
    },
    {
      kind: 'match',
      prompt: T('Relacione la partícula con lo que hace'),
      pairs: [
        { a: T('{zhě}'), b: T('convierte verbo en sustantivo') },
        { a: T('{qí}'), b: T('posesivo que va antes del sustantivo') },
        { a: T('{suǒ}'), b: T('marca el sujeto del verbo siguiente') },
        { a: T('{yǐ}'), b: T('dice que el hablar se acabó') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál de estas frases es del mandarín escrito y no del habla?'),
      options: [
        T('{shén jiù shì ài}'),
        T('{wǒ yě ài nǐ}'),
        T('{nǐ shì wǒ de péngyou}'),
        T('{wǒ hěn gāoxìng}'),
      ],
      answer: 0,
    },
  ],
};
