import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  section: T('Verbo'),
  title: T('Negación: {不} y {没}'),
  subtitle: T('Dos palabras para decir "no", y la elección entre ellas muestra lo que se niega'),
  body: C(`
## El mandarín niega fuera del verbo

El português pone el "no" antes del verbo: "yo **no** comí". El mandarín pone un carácter **antes** del verbo: {wǒ méi chī} es "yo no comí", y {wǒ bù chī} es "yo no como" — la negación del hábito, no del pasado.

La posición es la misma en ambos: antes del verbo, pegado a él. {bù} y {méi} son partículas, no palabras con sentido propio. {wǒ bù} solo no significa nada; {bù} solo tampoco.

## Dos palabras, una diferencia

La diferencia es el tiempo, y nada más.

- **{bù}** niega presente y futuro. {wǒ bù chī} — "yo no como". {tā bù shì péngyou} — "él no es mi amigo".
- **{méi}** niega pasado y existencia. {wǒ méi qù} — "yo no fui". {zhèlǐ méi rén} — "aquí no hay nadie".

Usar {bù} para un suceso pasado no es un error que quien escucha note enseguida — suena a alguien que todavía está aprendiendo. El revés también falla: {wǒ méi chī} con el sentido de "no estoy comiendo" es aceptable, pero "no soy hijo" no tiene forma alguna.

## La regla que evita el error

**Verbo o sustantivo: {bù}. Adjetivo, casi siempre: {bù}. Verbo o sustantivo en pasado: {méi}.**

En portugués el "no" es la misma palabra; en mandarín cambia según lo que sigue. Así que {tā bù hǎo} ("él no es bueno") y {tā méi lái} ("él no vino") no son una construcción con las palabras cambiadas.

## Qué cambia al leer

La negación es donde el traductor resbala, porque el griego es negativo con frecuencia — y la {和合本} usa {bù} y {méi} con una coherencia que revela cuándo traduce y cuándo adapta. En 1 Juan 1:9, {rúguǒ wǒmen zì chēng wǒmen méi zuò zuì} — "si nos declaramos que no hemos pecado". La construcción {méi zuò} es {méi} sobre un verbo, y {zuò} es "cometer": {méi} donde el griego tiene el aoristo.

El error contrario es el común en la lectura bíblica: tratar {bù} como si negara el pasado y concluir que el suceso ocurrió. En mandarín presente y pasado son palabras distintas, y la negación sigue el tiempo del verbo, no el tono del contexto.`),
  vocab: [
    V('bù', '不', 'no (ante verbo o adjetivo; presente y futuro)'),
    V('méi', '没', 'no (ante verbo o sustantivo; pasado y existencia)'),
    V('shì', '是', 'ser (shì)'),
    V('yǒu', '有', 'tener, haber (yǒu)'),
    V('qù', '去', 'ir (qù)'),
    V('lái', '来', 'venir (lái)'),
    V('hǎo', '好', 'bueno (hǎo)'),
    V('rén', '人', 'persona (rén)'),
  ],
  rules: [
    { n: '1', text: T('La negación va antes del verbo: {wǒ bù chī}, nunca "wǒ chī bù".') },
    { n: '2', text: T('{bù} niega presente y futuro; {méi} niega pasado y existencia.') },
    { n: '3', text: T('Un verbo o sustantivo en pasado lleva {méi}: {wǒ méi qù}.') },
    { n: '4', text: T('{bù} ante un adjetivo es la regla: {tā bù hǎo}.') },
    { n: '5', text: T('{bù} y {méi} nunca van solos: son partículas.') },
  ],
  notes: [
    {
      label: T('El "ser" del mandarín no tiene negativo propio'),
      text: T(
        '{shì} se niega con {bù} y conserva su sitio: {tā bù shì}, nunca {shì bù}. La posición de {bù} es siempre antes del verbo.',
      ),
    },
    {
      label: T('El error que todo el mundo comete una vez'),
      text: T(
        '{wǒ méi} es "no tengo" — {méi} negando a {yǒu}, el verbo. {wǒ bù yǒu} significa lo mismo pero suena raro: ahí {yǒu} no es el verbo, es el sustantivo "posesión".',
      ),
    },
  ],
  examples: [
    { text: '我不吃', gloss: T('wǒ bù chī — yo no como (presente)') },
    { text: '我沒去', gloss: T('wǒ méi qù — yo no fui (pasado)') },
    { text: '這裡沒人', gloss: T('zhèlǐ méi rén — aquí no hay nadie') },
    { text: '他不是我朋友', gloss: T('tā bù shì péngyou — él no es mi amigo') },
  ],
  tables: [
    {
      caption: T('La misma negación en cuatro tiempos'),
      head: [T('Frase'), T('Partícula'), T('Tiempo negado'), T('Español')],
      rows: [
        [T('{wǒ} {bù} {chī}'), T('{bù}'), T('presente'), T('yo no como')],
        [T('{wǒ} {méi} {qù}'), T('{méi}'), T('pasado'), T('yo no fui')],
        [T('{wǒ} {bù} {qù}'), T('{bù}'), T('futuro'), T('yo no iré')],
        [T('{zhèlǐ} {méi} {rén}'), T('{méi}'), T('existencia'), T('aquí no hay nadie')],
      ],
    },
    {
      caption: T('El mismo verbo con las dos partículas'),
      head: [T('Frase'), T('Significado'), T('Tiempo')],
      rows: [
        [T('{wǒ} {bù} {chī}'), T('no como, no voy a comer'), T('presente/futuro')],
        [T('{wǒ} {méi} {chī}'), T('no comí'), T('pasado')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {我沒去}, ¿qué partícula niega el pasado?'),
    options: [T('{不}'), T('{沒}'), T('{是}'), T('{去}')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "él no es mi amigo" con la partícula: 他____我朋友'),
      answer: '不',
    },
    {
      kind: 'match',
      prompt: T('Une la partícula con lo que niega'),
      pairs: [
        { a: T('{不}'), b: T('presente y futuro') },
        { a: T('{沒}'), b: T('pasado y existencia') },
        { a: T('{是}'), b: T('el verbo "ser"; no niega') },
        { a: T('{有}'), b: T('el verbo "tener"; sigue la regla de {沒}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Para decir "aquí no hay nadie", ¿qué forma?'),
      options: [T('{這裡不人}'), T('{這裡沒人}'), T('{這裡人沒}'), T('{沒這裡人}')],
      answer: 1,
    },
  ],
};
