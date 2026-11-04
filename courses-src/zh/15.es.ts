import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  section: T('Verbo'),
  title: T('Adverbio de modo: {得} (de) y {一}{下} (yíxià)'),
  subtitle: T(
    'Dos partículas que van después del verbo y cambian lo que dice sin cambiar el orden de las palabras',
  ),
  body: C(`
## El adverbio que va después del verbo

El mandarín no tiene adverbio de modo en el lugar que usa el portugués. En portugués el adverbio entra antes del verbo: "camino despacio", "hablo bien". En mandarín entra después del verbo y antes del objeto, y para eso existe una partícula: {de}.

**Verbo o adjetivo + {de} + complemento.** {pǎo} {de} {kuài} es "corre rápido", {shuō} {de} {hǎo} es "habla bien", {hóng} {de} {fā} {zǐ} es "rojo hasta dar morado", literalmente "rojo hasta". El {de} es fijo: siempre pegado, nunca separado, y el complemento siempre después. Un {de} suelto, sin complemento detrás, no es mandarín.

El {de} de modo y el {de} de posesión tienen la misma pronunciación, {de} de tono neutro, y el mismo carácter. Lo que decide cuál de los dos estás leyendo es la posición: {de} después de un sustantivo es posesión, {de} después de un verbo o adjetivo es modo. El contexto también desempata, pero el criterio es la posición.

## {de} intensificado: de "muy" a "tan... que"

Para "muy" el mandarín tiene una palabra entera: {hěn}, que va antes del adjetivo. {hěn} {lěng} es "muy frío". Y {de} después del adjetivo hace más que eso: {lěng} {de} {hěn} es "es muy frío" con un peso que {hěn} {lěng} no alcanza. Es "tan frío que…", y suele traer resultado. {hóng} {de} {fā} {zǐ} es el caso extremo: "tan rojo que se vuelve morado".

La distinción práctica: {hěn} es el "muy" de todos los días, el que suena natural en cualquier frase. {de} + adjetivo es más fuerte, más literario, y aparece donde el portugués diría "tan… que", "a punto de" o un superlativo. En la lectura bíblica se ven los dos en el mismo versículo, en niveles distintos, y vale la pena saber cuál tradujo qué.

## El verbo {dé}, y la partícula **{yíxià}**

*{dé}* tiene un segundo uso, y es el verbo "obtener, conseguir". {wǒ} {dé} {le} {yī} {běn} {shū} es "conseguí un libro", y ahí {dé} es el verbo principal de la frase, con {le} como partícula de aspecto. Tres caracteres, tres papeles: {de} adverbio, {dé} verbo, {le} aspecto. Al mandarín le gustan los homógrafos, y este es de los más productivos.

La segunda partícula es {yíxià}, literalmente "un {下}", "un poco". Va después del verbo y dice "una vez", "un instante", "echa un ojo": {shuō} {yíxià} es "diga (un instante)", {kàn} {yíxià} es "echa un vistazo". La posición es la misma que la de la partícula de aspecto {le}: verbo, luego partícula. {shuō} {yíxià} {le}, "lo dije de una vez y listo".

## El orden, y el error de quien traduce del portugués

Toda la regla cabe en una línea: **verbo, adverbio, objeto.** {mànmàn} {de} {zǒu} es "caminhar despacio"; {wǒ} {mài} {mànmàn} {de} {zǒu} es "yo camino despacio", con el adverbio después del verbo y antes del objeto, y el {de} entre el adverbio y el verbo. En portugués esto sería "despacio yo camino" o "yo despacio camino", que nadie escribe. Quien traduce del portugués palabra por palabra escribe "yo camino despacio lento" y produce una frase que suena mal sin que nadie sepa señalar por qué.

La ganancia bíblica está en tres versículos. En Juan 1:1, {tàichū} {yǒu} {dào}, "en el principio era el Verbo": {tàichū} es "el comienzo de", {tài} con el {chū} "salir", y es la palabra que traduce el griego ἐν ἀρχῇ semánticamente, como un adverbio de tiempo derivado y no como una preposición. En Salmo 119:105, {nǐ} {de} {huà} {jí} {dà}, "tu palabra es muy grande": {jí} {dà} es un predicado de grado, el mandarín diciendo "palabra + grande en extremo" donde el hebraico dice "tu palabra es inmensa". Y en Hebreos 12:2, {wàng} {zhe}, "mirando a": el {zhe} es esa misma partícula de estado continuo que ya apareció con {tā} {zhe}, y marca un verbo que sigue en curso mientras ocurre otra cosa.`),
  vocab: [
    V('de', '得', 'partícula de modo/estado después de verbo o adjetivo (de)'),
    V('yíxià', '一下', 'una vez, un instante, un poco (después del verbo)'),
    V('hěn', '很', 'muy (antes del adjetivo)'),
    V('pǎo', '跑', 'correr (pǎo)'),
    V('kuài', '快', 'rápido, ligero (kuài)'),
    V('shuō', '说', 'decir, hablar (shuō)'),
    V('hóng', '红', 'rojo (hóng)'),
    V('dé', '得', 'obtener, conseguir (verbo; con {le} de aspecto)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El adverbio de modo va después del verbo o adjetivo: {pǎo de kuài}, nunca "kuài pǎo".',
      ),
    },
    {
      n: '2',
      text: T('El {de} de modo siempre lleva complemento detrás: {de} solo no dice nada.'),
    },
    {
      n: '3',
      text: T(
        '{hěn} antes del adjetivo es el "muy" corriente; {de} después es más fuerte, "tan… que".',
      ),
    },
    {
      n: '4',
      text: T('{yíxià} va después del verbo, en el lugar de la partícula de aspecto {le}.'),
    },
    { n: '5', text: T('El orden es verbo, adverbio, objeto: {wǒ mài mànmàn de zǒu}.') },
  ],
  notes: [
    {
      label: T('Tres caracteres, tres papeles'),
      text: T(
        '{de} como adverbio de modo, {dé} como verbo "conseguir" y {le} como partícula de aspecto viven en la misma frase: {wǒ dé le yī běn shū}.',
      ),
    },
    {
      label: T('{de} y {zhe} después del verbo'),
      text: T(
        '{de} dice cómo se hace algo; {zhe} marca un estado en curso. {wàng zhe} es "mirando a", no "mirar de cierta manera".',
      ),
    },
  ],
  examples: [
    { text: '跑得快', gloss: T('pǎo de kuài — corre rápido') },
    { text: '慢慢地说', gloss: T('mànmàn de shuō — habla despacio') },
    { text: '冷得很', gloss: T('lěng de hěn — es muy frío') },
    { text: '我看一下', gloss: T('wǒ kàn yíxià — yo echo un vistazo') },
  ],
  tables: [
    {
      caption: T('Dónde queda cada adverbio de modo'),
      head: [T('Estructura'), T('Ejemplo'), T('Español')],
      rows: [
        [T('verbo + {de} + adjetivo'), T('{pǎo} {de} {kuài}'), T('corre rápido')],
        [T('adjetivo + {de} + {hěn}'), T('{lěng} {de} {hěn}'), T('es muy frío')],
        [T('adverbio + {de} + verbo'), T('{mànmàn} {de} {zǒu}'), T('camina despacio')],
        [T('verbo + {yíxià}'), T('{kàn} {yíxià}'), T('echa un vistazo')],
      ],
    },
    {
      caption: T('Verbo, adverbio, objeto — y dónde fallaría el português'),
      head: [T('Posición'), T('Mandarín'), T('Forma equivocada')],
      rows: [
        [T('verbo'), T('{wǒ} {mài}'), T('—')],
        [T('adverbio'), T('{mànmàn} {de}'), T('{mài} {mànmàn}')],
        [T('objeto'), T('{zǒu}'), T('{mànmàn} {zǒu}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué forma dice "habla bien"?'),
    options: [T('{好地说}'), T('{说得好}'), T('{说很快}'), T('{好说}')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "corre rápido": 跑____快'),
      answer: '得',
    },
    {
      kind: 'match',
      prompt: T('Une la partícula con lo que hace'),
      pairs: [
        { a: T('{得}'), b: T('adverbio de modo, después del verbo') },
        { a: T('{很}'), b: T('el "muy" corriente, antes del adjetivo') },
        { a: T('{一下}'), b: T('"un instante", después del verbo') },
        { a: T('{了}'), b: T('aspecto, justo después del verbo') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('En {我得了一本书}, ¿qué es {得}?'),
      options: [
        T('un adverbio de modo'),
        T('el verbo principal, "conseguir"'),
        T('una partícula de negación'),
        T('una partícula posesiva'),
      ],
      answer: 1,
    },
  ],
};
