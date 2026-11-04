import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  section: T('Verbo'),
  title: T('Decir: {說} y las comillas del discurso directo'),
  subtitle: T(
    'El verbo genérico, el sustantivo de "palabra", y la puntuación que la {和}{合}{本} tomó del Occidente en el siglo XIX',
  ),
  body: C(`
## Un verbo, un sustantivo, dos caracteres

El mandarín tiene dos caracteres para lo que el portugués resuelve con una sola raíz, *decir*. **{shuō}** es el verbo: "decir", "hablar", el verbo genérico que sirve para todo. {Tā shuō} es "él dice"; {wǒ shuō} es "yo digo"; y {shuō} solo, con el sujeto sobreentendido, ya significa "hablar" en el sentido corriente de conversar. **{huà}** es el sustantivo: "palabra", "habla", la **cosa** dicha, no el acto de decirla.

Son caracteres distintos, con sonidos distintos, y por eso mismo vale la pena detenerse. No descodificas {huà} cuando encuentras {shuō}: dos signos, dos pronunciaciones, dos palabras. El ideograma es la palabra, y el sonido viaja con él; no hay manera de saber uno y no saber el otro.

Los dos juntos forman palabra: **{shuōhuà}**, {shuō} + {huà}, "hablar", en el sentido sencillo y cotidiano de conversar. {Wǒ shuōhuà} es "yo hablo"; {tā gēn wǒ shuōhuà} es "él habla conmigo".

Y hay un tercero, más elevado y más antiguo: **{yán}**, "palabra, discurso". Casi no aparece solo en el habla cotidiana, pero vive dentro de palabras como {yǔyán}, {yǔ} + {yán}, "lengua", y {yányǔ}, {yán} + {yǔ}, "palabras, discurso", el objeto de estudio de la lingüística. {Yán} es el campo semántico: de esa raíz vienen la palabra y la idea de mensaje. {Shuō} es el acto; {yán} es la cosa y el tema.

## El discurso directo y la puntuación que exige

El discurso directo en mandarín tiene una forma muy parecida a la tuya: {shuō}, o **{duì}** … {shuō}, entra, dos puntos, y el discurso viene entera entre comillas.

{tā shuō: "…"}, "él dijo: …".

Aquí la {和合本} se aparta de lo que tu ojo entrenado espera. Las comillas chinas son {「 」}, trazos rectos, el marco de un cuadrado abierto, y cuando el texto trae discurso dentro de discurso alternan con {« »}. La convención es: primer nivel {「 」}, segundo nivel {« »}, y las comillas occidentales {""} simplemente no tienen sitio en un texto chino tradicional. Nada de esto es adorno tipográfico: son caracteres con nombre y función, como todo lo demás.

Y hay un detalle histórico que explica por qué un texto chino del siglo XIX tiene dos puntos y comillas: la puntuación no existía en la tradición. La diseñó el misionero norteamericano Dwight Whitney en 1870, para la traducción que estaba preparando. Antes de eso el texto bíblico chino se escribía sin puntuación alguna, y las pausas quedaban a cargo del lector.

El contraste con el portugués vale la pena, porque el portugués también usa dos puntos y comillas, y la coincidencia es real y no es herencia: cada tradición resolvió el mismo problema del mismo modo, porque discurso directo es discurso directo. La diferencia es solo de convención: qué caracteres abren la cita y cómo se marca el nivel interior.

## Decir A a B: {對} y {告}{訴}

El detalle fino: el mandarín resuelve con dos construcciones lo que el portugués resuelve con una.

{duì} significa "hacia", "a", en el sentido de un blanco: {duì} {wǒ} es "a mí", {duì} {shén} es "a Dios". Con {shuō} da el "decir a alguien": {tā} {duì} {wǒ} {shuō}, "él me dijo", literalmente "él, hacia mí, dijo". {Wǒ} {duì} {tā} {shuō} es "yo le dije". El {duì} marca al destinatario, y nada más.

**{gàosu}** es más fuerte: "contar, referir". No es {shuō} con un objeto más; es un verbo distinto, que trae la idea de **transmitir**: {wǒ} {gàosu} {nǐ}, "yo te digo", con el peso de "yo te cuento", "yo te aviso", "yo te informo". La diferencia es fina, y esa sutileza es lo que separa los dos verbos: {shuō} es neutro y no presupone nada, mientras {gàosu} presupone que el otro todavía no sabe y que tú le estás llevando la noticia.

El par pregunta/respuesta cierra el conjunto. {wèn} es "preguntar", y {回}{答}, {huí} + {dá}, es "responder", literalmente "devolver": {huí} significa "de vuelta", y el verbo quiere decir "devolver la respuesta". Solo, {dá} es una forma antigua o coloquial de "responder", común en {fǎn} {dá}, "contestar", y no sobrevive bien en un texto corriente.

## El Salmo 12:6 y el sustantivo que lo ata

El Salmo 12:6 en la {和合本} dice: {Yēhéhuá} {de} {huàyǔ}, "las palabras del Señor", y repite la misma palabra en la misma frase: "palabras puras".

Fíjate en la construcción: la {de} liga el sustantivo posesivo al nombre de quien posee. Lo que interesante aquí es el sustantivo, no el verbo. El versículo no dice "el Señor *dijo*", eso sería {shuō}; dice "las palabras del Señor", {huàyǔ}, {huà} + {yán}. El griego y el portugués también usan el sustantivo, y los tres idiomas coinciden por una razón que no es casualidad: lo que el salmista afirma no es que Dios habló, es que lo que salió de Dios es palabra, y palabra tiene un peso que el habla cotidiana no tiene.

El par {shuō} y {huà} está en juego en la Biblia todo el tiempo, y casi siempre en los dos lados de la misma frase. Marcos 1:14 trae el {shuō} puro: {Yēsū} {jìn le} {huìtáng}, "y entró en la sinagoga", y la predicación que sigue es el {shuō}. Verbo donde va verbo, sustantivo donde va sustantivo: la {和合本} mantiene la distinción incluso donde el griego la difumina.`),
  vocab: [
    V('shuō', '说', 'decir, hablar (verbo genérico)'),
    V('huà', '话', 'palabra, habla (sustantivo)'),
    V('shuōhuà', '说话', 'hablar (conversar)'),
    V('duì', '对', 'hacia; con {shuō}, "decir a alguien"'),
    V('gàosu', '告诉', 'contar a alguien, informar'),
    V('wèn', '问', 'preguntar'),
    V('huídá', '回答', 'responder ({huí} + {dá})'),
    V('yán', '言', 'palabra, discurso (campo semántico)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{shuō} es el verbo "decir"; {huà} es el sustantivo "palabra". Son caracteres y sonidos distintos.',
      ),
    },
    {
      n: '2',
      text: T(
        'Discurso directo: {shuō}, dos puntos y el discurso entre comillas — {「 」} en el primer nivel, {« »} en el segundo.',
      ),
    },
    { n: '3', text: T('{duì … shuō} marca al destinatario: {tā duì wǒ shuō}, "él me dijo".') },
    {
      n: '4',
      text: T('{gàosu} presupone transmitir algo nuevo; {shuō} es neutro y no presupone nada.'),
    },
    {
      n: '5',
      text: T(
        '{回答} es "devolver la respuesta" ({huí} = "de vuelta"); {dá} solo es forma antigua o coloquial.',
      ),
    },
  ],
  notes: [
    {
      label: T('Lo que hizo Whitney, y por qué importa'),
      text: T(
        'La puntuación de la {和合本} fue diseñada por Dwight Whitney en 1870. Antes de ella el texto bíblico chino no tenía puntuación alguna. Dos puntos y comillas chinas son importación deliberada, no tradición.',
      ),
    },
    {
      label: T('{yán} vive dentro de palabras'),
      text: T(
        '{yán} casi no aparece solo. Está en {yǔyán} "lengua" y en {yányǔ} "discurso". Quien aprende {shuō} aprende el acto; quien aprende {yán} aprende el campo.',
      ),
    },
  ],
  examples: [
    {
      text: '他說：「耶穌是彌賽亞。」',
      gloss: T('tā shuō: "Yēsū shì Mísàiyà" — él dijo: "Jesucristo es el Mesías."'),
    },
    { text: '他對我說', gloss: T('tā duì wǒ shuō — él me dijo') },
    { text: '我告訴你', gloss: T('wǒ gàosu nǐ — yo te digo, yo te cuento') },
    { text: '耶和華的話語', gloss: T('Yēhéhuá de huàyǔ — las palabras del Señor') },
  ],
  tables: [
    {
      caption: T('El campo de "decir" en seis verbos'),
      head: [T('Palabra'), T('Clase'), T('Lo que añade')],
      rows: [
        [T('{shuō}'), T('verbo'), T('nada — es el genérico')],
        [T('{huà}'), T('sustantivo'), T('la cosa dicha, no el acto')],
        [T('{duì … shuō}'), T('verbo + preposición'), T('el destinatario: "decir A a B"')],
        [T('{gàosu}'), T('verbo'), T('transmitir algo que el otro no sabe')],
        [T('{wèn}'), T('verbo'), T('preguntar')],
        [T('{huídá}'), T('verbo'), T('devolver la respuesta')],
      ],
    },
    {
      caption: T('Discurso directo: lo que se parece y lo que no'),
      head: [T('Elemento'), T('Portugués'), T('Mandarín / {和合本}')],
      rows: [
        [T('verbo'), T('disse'), T('{shuō}')],
        [T('separador'), T('dois pontos'), T('dois pontos — igual')],
        [T('comillas nivel 1'), T('""'), T('{「 」}')],
        [T('comillas nivel 2'), T("''"), T('{« »}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {他對我說}, ¿qué marca el {對}?'),
    options: [
      T('el contenido de el discurso'),
      T('el destinatario'),
      T('el tiempo del verbo'),
      T('el modo de la frase'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "él me dijo" con la preposición de destinatario: 他____我說'),
      answer: '對',
    },
    {
      kind: 'match',
      prompt: T('Une la palabra con lo que añade'),
      pairs: [
        { a: T('{shuō}'), b: T('verbo genérico "decir", no añade nada') },
        { a: T('{huà}'), b: T('sustantivo "palabra", la cosa dicha') },
        { a: T('{gàosu}'), b: T('contar a alguien: transmitir algo nuevo') },
        { a: T('{回答}'), b: T('"devolver" la respuesta ({huí} = "de vuelta")') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Para decir "las palabras del Señor" (Salmo 12:6), ¿qué forma?'),
      options: [T('{耶和華的話語}'), T('{耶和華說}'), T('{告訴耶和華}'), T('{問耶和華}')],
      answer: 0,
    },
  ],
};
