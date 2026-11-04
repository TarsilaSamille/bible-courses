import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  section: T('Verbo'),
  title: T('Los verbos esenciales'),
  subtitle: T('{chī}, {shuō}, {lái}, {qù}, {yǒu}, {shì}: los verbos que sostienen casi toda frase'),
  body: C(`## El verbo que no cambia

El verbo en mandarín no cambia para decir quién habla ni cuándo. {chī} es «comer» en la primera persona y en la tercera, ayer y mañana: {wǒ chī}, {tā chī}, {zuótiān wǒ chī}. Lo que cambia el sentido no está en el verbo, está en la partícula que viene después de él.

Eso cambia lo que «verbo esencial» quiere decir. En portugués, esencial es el verbo que se conjuga en toda frase. En mandarín, es el que lleva el sentido y recibe las partículas: {shì} ser, {yǒu} tener y haber, {shuō} decir, {tīng} oír, {kàn} ver, {lái} venir, {qù} ir, {chī} comer, {hē} beber, {zuò} hacer, {gěi} dar, {zhīdào} saber, {xiǎng} pensar, {shuì} dormir, {dú} leer, {xiě} escribir, {zǒu} andar cubren casi todo lo que se dice en un capítulo de Evangelio.

## {shì} y {yǒu}: los dos que el portugués separa mal

{shì} une dos nombres: {wǒ shì xuésheng}, «yo soy estudiante». No dice existencia. La existencia es de {yǒu}: {yǒu yī běn shū}, «hay un libro», y {wǒ yǒu shū}, «tengo libro».

El portugués reparte el campo en cuatro verbos, «ser», «estar», «haber» y «tener», y el mandarín en dos. Donde el portugués dice «hay», el mandarín dice {yǒu}; donde dice «es», dice {shì}. Quien traduce «Dios es» por {yǒu} escribe «hay Dios», y la frase deja de ser una identificación.

El negativo separa otra vez los dos: {shì} niega con {bù}, y {yǒu} niega con {méi}, nunca con {bù}: {bù shì}, {méi yǒu}.

## Lo que viene después del verbo

Como el verbo no flexiona, el aspecto viene de tres partículas que quedan detrás de él. {le} cierra la situación: {wǒ chī le}, «comí». {guo} marca la experiencia: {wǒ chī guo}, «ya comí alguna vez». {zhe} marca lo que continúa: {tā kàn zhe shū}, «él está leyendo».

Las tres ocupan el mismo lugar y no se mezclan. El verbo {chī} es el mismo en los tres casos, y es la partícula la que dice si la acción acabó, si ya pasó alguna vez o si todavía corre.

## En la Biblia

Juan 1:1 abre con {yǒu}: {tàichū yǒu dào}, «en el principio había el Verbo». El griego dice {ἦν ὁ λόγος}, y {ἦν} es existencia, no identificación. El mandarín elige {yǒu} y no {shì}, y la elección es la misma que separa «hay» de «es».

Marcos 4:39 trae dos órdenes con la partícula de lo acabado: {zhù le ba! jìng le ba!}, «¡cállate! ¡cálmate!». El {le} en una orden no dice que ocurrió: dice que lo que se manda es que la cosa esté terminada. El mismo versículo cierra con {píngjìng le}, «quedó calmo», y es el mismo {le} diciendo que la situación está completa.`),
  vocab: [
    V('chī', '吃', 'comer'),
    V('hē', '喝', 'beber'),
    V('shuō', '说', 'decir'),
    V('tīng', '听', 'oír'),
    V('kàn', '看', 'ver'),
    V('lái', '来', 'venir'),
    V('qù', '去', 'ir'),
    V('shì', '是', 'ser'),
    V('yǒu', '有', 'tener, haber'),
    V('zuò', '做', 'hacer'),
    V('gěi', '给', 'dar'),
    V('zhīdào', '知道', 'saber'),
    V('xiǎng', '想', 'pensar, querer'),
    V('shuì', '睡', 'dormir'),
    V('dú', '读', 'leer'),
    V('xiě', '写', 'escribir'),
    V('zǒu', '走', 'andar'),
    V('ài', '爱', 'amar'),
    V('le', '了', 'partícula de lo acabado'),
  ],
  rules: [
    {
      n: '§1',
      text: T('El verbo no flexiona: {wǒ chī}, {tā chī} y {zuótiān wǒ chī} tienen la misma forma.'),
    },
    {
      n: '§2',
      text: T(
        '{shì} une dos nombres; la existencia es de {yǒu}. {wǒ shì xuésheng} «soy estudiante», {yǒu shū} «hay libro».',
      ),
    },
    {
      n: '§3',
      text: T(
        '{yǒu} niega con {méi}, nunca con {bù}: {méi yǒu}, y no {bù yǒu}. {shì} niega con {bù}: {bù shì}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'El aspecto viene después del verbo: {le} cierra, {guo} marca la experiencia, {zhe} marca lo que continúa.',
      ),
    },
    {
      n: '§5',
      text: T(
        'En una orden, {le} dice que lo mandado debe estar terminado: {zhù le ba}, «cállate».',
      ),
    },
  ],
  notes: [
    {
      label: T('El yǒu que no es «tener»'),
      text: T(
        '{yǒu} cubre posesión y existencia a la vez: {wǒ yǒu shū} «tengo libro» y {yǒu shū} «hay libro» usan el mismo verbo. El portugués separa «ter» de «haber» y obliga a elegir sujeto; el mandarín no.',
      ),
    },
    {
      label: T('El shì que no es cópula de adjetivo'),
      text: T(
        '{shì} no entra antes de adjetivo: «él es alto» es {tā gāo}, sin {shì}. Con {shì} la frase se vuelve identificación: {tā shì gāo} solo se lee si {gāo} es un nombre, como el apellido Gao.',
      ),
    },
  ],
  examples: [
    { text: '起初有道', gloss: T('Jn 1:1 — {有} es existencia: en el principio había el Verbo.') },
    { text: '神愛世人', gloss: T('Jn 3:16 — {愛} sin marca de tiempo: «Dios amó al mundo».') },
    { text: '住口吧! 靜了吧!', gloss: T('Mc 4:39 — {了} en la orden: que esté terminado.') },
    { text: '我吃了', gloss: T('{了} cierra la situación: comí.') },
    { text: '我吃過', gloss: T('{過} marca la experiencia: ya comí alguna vez.') },
    { text: '他看著這本書', gloss: T('{著} marca lo que continúa: está leyendo.') },
    { text: '我是學生', gloss: T('{是} liga dos nombres.') },
    { text: '有一本書', gloss: T('{有} dice existencia: hay un libro.') },
    { text: '沒有', gloss: T('{有} niega con {沒有}, no con {不}.') },
  ],
  tables: [
    {
      caption: T('Los esenciales y lo que reciben'),
      head: [T('Verbo'), T('Sentido'), T('Negativo'), T('Ejemplo')],
      rows: [
        [T('{chī}'), T('comer'), '{bù chī}', '{wǒ chī le}'],
        [T('{shuō}'), T('decir'), '{bù shuō}', '{tā shuō le}'],
        [T('{kàn}'), T('ver'), '{bù kàn}', '{kàn zhe}'],
        [T('{lái}'), T('venir'), '{bù lái}', '{lái le}'],
        [T('{shì}'), T('ser'), '{bù shì}', '{wǒ shì}'],
        [T('{yǒu}'), T('tener, haber'), '{méi yǒu}', '{yǒu shū}'],
        [T('{qù}'), T('ir'), '{bù qù}', '{qù guo}'],
      ],
    },
    {
      caption: T('Las tres partículas de aspecto'),
      head: [T('Partícula'), T('Sentido'), T('Ejemplo')],
      rows: [
        [T('{le}'), T('situación cerrada'), '{wǒ chī le}'],
        [T('{guo}'), T('experiencia'), '{wǒ chī guo}'],
        [T('{zhe}'), T('en curso'), '{tā kàn zhe shū}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {tàichū yǒu dào}, ¿qué verbo elige el mandarín para {ἦν}?'),
    options: [T('{shì}'), T('{yǒu}'), T('{lái}'), T('{zuò}')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete «{zhù ___ ba}» con la partícula que cierra la orden en Mc 4:39.'),
      answer: 'le',
    },
    {
      kind: 'match',
      prompt: T('Une el verbo con su negativo.'),
      pairs: [
        { a: T('{shì}'), b: T('{bù shì}') },
        { a: T('{yǒu}'), b: T('{méi yǒu}') },
        { a: T('{chī}'), b: T('{bù chī}') },
        { a: T('{lái}'), b: T('{bù lái}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué partícula marca «ya pasó alguna vez»?'),
      options: [T('{le}'), T('{guo}'), T('{zhe}'), T('{ba}')],
      answer: 1,
    },
  ],
};
