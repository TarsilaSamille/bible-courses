import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  section: T('Números'),
  title: T('Tiempo: años, meses, días y horas'),
  subtitle: T(
    'El tiempo en chino es siempre número más palabra — y la fecha viene en orden invertido',
  ),
  body: C(`
## Número más palabra, sin artículo

El portugués necesita artículo y plural: "os três dias". El mandarín no necesita ninguno: el tiempo es siempre un número pegado a la palabra, {sān tiān} es "tres días", {liǎng nián} es "dos años", {yī gè yuè} es "un mes". Lo que va después del número hace el trabajo que en portugués hacen el artículo y la terminación: {tiān} solo es "día", y {sān tiān} es "tres días" sin que la palabra haya cambiado nada.

Y lo que más importa es lo que viene después de la expresión. "Tres días" y "tres días atrás" no son la misma construcción en ninguna de las dos lenguas, pero en mandarín lo que sigue es una palabra entera, {yǐqián} o {yǐhòu}, con su propio peso, y no un resto de preposición pegado al sustantivo.

## El ordinal es un **prefijo**, no un adjetivo

Aquí está el contraste que más hace tropezar. El portugués y el español **flexionan** el ordinal: "terceiro dia", "tercer día", "décima seção", y la palabra cambia de forma para concordar con el sustantivo. En mandarín no hay nada que flexione. El ordinal es un prefijo pegado al número: {dì} + número + nombre.

{dì sān tiān} es "el tercer día". {dì shí jié} es "la décima sección". {dì yī nián} es "el primer año". {dì} es siempre lo mismo, diga el número uno o mil; lo que cambia es el sustantivo, y el sustantivo nunca cambia. Y {dì sān} solo no es "tercero": es el numeral suelto, y el nombre de lo que se cuenta es obligatorio después.

La {和合本} usa esto en cada capítulo y versículo: "{第}{十}{二}{節}" es literalmente "la duodécima sección", y las fechas de los reyes en el cuerpo del texto salen como ordinales sueltos, Daniel 9:2, {dì yī nián Belsazar wáng}, "en el primer año del rey Belsazar".

## La fecha es año-mes-día, nunca día-mes-año

Este es el error clásico de quien lee un calendario chino por primera vez. El orden va de **mayor a menor**: año, luego mes, luego día. {èr líng líng jiǔ nián shí yuè èr rì} es el 2 de octubre de 2009, {nián} año, {shí yuè} octubre, {èr rì} el segundo día. Quien escribe 2009{年}2{月}10{日} por "2 de octubre de 2009" ha escrito 10 de febrero sin darse cuenta.

El año lleva {nián}, el mes lleva {yuè}, el día lleva {rì}. Y la "de" del portugués no aparece: en 2009{年}10{月}2{日} nada liga el año con el mes. Cada par se basta solo.

## Horas y minutos: {點} y {分}, no dos puntos

La hora del día tampoco es un número con dos puntos. Son **dos palabras**: {diǎn} para las horas y {fēn} para los minutos. {sān diǎn} es "las tres". {sān diǎn sān shí fēn} es "las tres y treinta", y {sān shí fēn} es "treinta minutos", mientras que "medio" es {bàn}: {sān diǎn bàn} es "las tres y media".

"Medio" es siempre {bàn}, colocado después de la hora. No existe un "3:30" dicho en voz alta en chino: nadie dice {sān diǎn sān shí fēn} cuando {sān diǎn bàn} dice lo mismo con cuatro caracteres en vez de ocho.

La semana completa el cuadro: {xīngqī} significa "semana" pero se usa para el día de la semana, contado desde el lunes, y {xīngqī yī} es lunes, no domingo. El conteo también es occidental: el lunes es el día uno, el domingo es el día siete. {xīngqī rì}, sin número, es domingo, y eso ya delata que el número es la información.

## Antes, después y el mes que ya pasó

El tiempo relativo funciona casi igual: {yǐqián} es "antes", {yǐhòu} es "después", y las dos son palabras enteras que cierran la frase después del nombre del tiempo. Génesis 7:4 tiene {qī rì yǐhòu}, "después de siete días", con {qī rì} y {yǐhòu} uno al lado del otro y ninguna preposición entre ellos.

Lo que cambia es el pasado reciente, que necesita un clasificador, y aquí gana sentido nuevo en vez de ser mera gramática. {shàng gè yuè} es "el mes pasado", y {gè} es el mismo {gè} genérico de {个}, ahora pegado a {yuè}. {shàng} es "el de arriba", "el anterior". El año pasado es {shàng gè nián}, y la analogía es directa: {gè} es lo que sujeta la palabra de tiempo y la vuelve "ese mes".

Y el mandarín no tiene una palabra única para "el mes pasado": dice "el mes" y pone {shàng} delante. Es el mismo mecanismo de {bù} y {méi}: el tiempo relativo vive en la partícula, no en el sustantivo.`),
  vocab: [
    V('nián', '年', 'año (nián)'),
    V('yuè', '月', 'mes (yuè)'),
    V('rì', '日', 'día (rì)'),
    V('dì', '第', 'prefijo de ordinal (dì): el tercer día'),
    V('xīngqī', '星期', 'semana; usado para el día de la semana (xīngqī)'),
    V('diǎn', '点', 'hora del día (diǎn)'),
    V('fēn', '分', 'minuto (fēn)'),
    V('bàn', '半', 'mitad, medio (bàn)'),
  ],
  rules: [
    {
      n: '1',
      text: T('El tiempo es siempre número + palabra, sin artículo: {sān tiān} = "tres días".'),
    },
    {
      n: '2',
      text: T(
        'El ordinal es {dì} + número + nombre: {dì sān tiān} = "el tercer día". El sustantivo no flexiona.',
      ),
    },
    {
      n: '3',
      text: T(
        'La fecha es año-mes-día: {2009 nián 10 yuè 2 rì} es el 2 de octubre de 2009, nunca día-mes-año.',
      ),
    },
    {
      n: '4',
      text: T(
        'La hora es {diǎn} y el minuto es {fēn} — nunca dos puntos: {sān diǎn bàn} = "las tres y media".',
      ),
    },
    {
      n: '5',
      text: T(
        '{yǐqián} y {yǐhòu} son palabras enteras después del tiempo: {qī rì yǐhòu} = "después de siete días".',
      ),
    },
  ],
  notes: [
    {
      label: T('El "medio" va después, y es {bàn}'),
      text: T(
        '{bàn} significa "mitad" y se pega a la hora: {bàn} {gè} {xiǎoshí} es "media hora", {bàn} {nián} es "medio año". Nunca antes, como en portugués.',
      ),
    },
    {
      label: T('{星}{期}{一} es lunes, no domingo'),
      text: T(
        'La semana se cuenta desde el lunes, como en el calendario occidental: {xīngqī yī} es lunes y {xīngqī liù} es sábado. {xīngqī rì} sin número es domingo.',
      ),
    },
  ],
  examples: [
    { text: '三天', gloss: T('sān tiān — tres días') },
    { text: '第三天', gloss: T('dì sān tiān — el tercer día') },
    { text: '三點半', gloss: T('sān diǎn bàn — las tres y media') },
    { text: '上個月', gloss: T('shàng gè yuè — el mes pasado') },
  ],
  tables: [
    {
      caption: T('Fechas: el orden invertido'),
      head: [T('Formato'), T('Chino'), T('Portugués')],
      rows: [
        [T('año-mes-día'), T('2009年10月2日'), T('2 de outubro de 2009')],
        [T('solo el año'), T('2009年'), T('em 2009')],
        [T('solo el mes'), T('10月'), T('em outubro')],
        [T('mes y año'), T('2009年10月'), T('em outubro de 2009')],
        [T('día y mes'), T('10月2日'), T('2 de outubro')],
      ],
    },
    {
      caption: T('Hora: dos palabras, no dos puntos'),
      head: [T('Chino'), T('Lectura'), T('Portugués')],
      rows: [
        [T('三點'), T('sān diǎn'), T('3 horas')],
        [T('三點十五分'), T('sān diǎn shíwǔ fēn'), T('3h15')],
        [T('三點半'), T('sān diǎn bàn'), T('3h30 — "y media"')],
        [T('上午八點'), T('shàngwǔ bā diǎn'), T('8 da manhã')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se escribe "el tercer día"?'),
    options: [T('第三天'), T('三第天'), T('第三天日'), T('三三天')],
    answer: 0,
    hint: T('{dì} va antes del número, y la palabra de tiempo va después.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "2 de outubro de 2009" (año-mes-día): 2009____10月2日'),
      answer: '年',
    },
    {
      kind: 'match',
      prompt: T('Une la palabra con lo que nombra'),
      pairs: [
        { a: T('{nián} 年'), b: T('año') },
        { a: T('{yuè} 月'), b: T('mes') },
        { a: T('{diǎn} 点'), b: T('hora del día') },
        { a: T('{fēn} 分'), b: T('minuto') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es la forma de "las tres y media"?'),
      options: [T('{三點半}'), T('{三點三分}'), T('{半三點}'), T('{三點之半}')],
      answer: 0,
    },
  ],
};
