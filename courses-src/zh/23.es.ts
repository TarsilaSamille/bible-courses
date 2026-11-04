import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  section: T('Verbo'),
  title: T('Verbos en serie'),
  subtitle: T(
    'Verbos encadenados sin conjunción, y el orden que dice cuál va antes y cuál es el propósito',
  ),
  body: C(`
## La conjunción que no existe

El español necesita una palabra para unir dos verbos: "yo como y me duermo". El mandarín los une por yuxtaposición: {wǒ chī fàn shuìjiào} quiere decir exactamente eso, sin "y", sin coma y sin marca alguna entre los verbos. La ausencia de conjunción no es una economía estilística; es la marca de la lengua.

La consecuencia práctica es la segmentación. Sin espacios, nada en lo escrito dice dónde acaba un verbo y empieza el siguiente. {shuìjiào} es una palabra sola: dormir. Pero escrita dentro de la frase se puede leer como {shuì} + {jiào} con la misma facilidad que {chī fàn} se lee como {chī} + {fàn}, y la frontera está en el oído de quien lee, no en la página. Es el mismo problema de las palabras sin espacio, con una consecuencia nueva: cuando dos verbos se siguen, no se puede saber dónde empieza el segundo sin entender la frase.

## El orden de los verbos es el tiempo

En mandarín el orden de los verbos no es estilo: es significado. La posición que ocupa cada verbo dice cuándo ocurre. {chī fàn shuìjiào} es "comer, y después dormir", y la secuencia está escrita en el orden de las palabras. Al revés, el sentido cambia: {shuìjiào chī fàn} es "dormir, y después comer".

No es una frase que solo suene rara; es una frase que nadie dice. Es el mismo argumento aplicado al verbo: el orden del mandarín no es libre. En español puedo decir "comer y dormir" o "dormir y comer" sin que nadie pestañee, porque la información está en los verbos. En mandarín la información está en el orden, y por eso el orden no se negocia.

## Cuando el orden se vuelve propósito

Hay un caso en que la segunda lectura no es absurda, y es la cosa más útil de esta sección: cuando el segundo verbo es más ligero que el primero. {qù mǎi shū} se puede leer como secuencia, "voy, y luego compro un libro", pero la lectura natural es otra: ir **con el propósito de** comprar un libro, exactamente como "ir a comprar un libro" en español. El segundo verbo está al servicio del primero.

El contexto es lo que desambigua, y siempre hay una pista. {wǒ qù xuéxiào, mǎi shū} pone un lugar en medio: voy al colegio, luego compro el libro, y son dos pasos distintos. {wǒ qù mǎi shū} no tiene lugar ni duración: ir es solo el medio, y comprar es lo que importa.

El verbo de ir y venir es el caso más común de esta construcción, y el más fácil de leer mal: {wǒ qù kàn yīshēng} es "voy a ver al médico", un solo movimiento, con el médico como destino del movimiento. No es "voy, y después veo al médico". Compárese {kàn le yīshēng, zài kàn}: aquí la partícula de aspecto {le} cierra el primer verbo como un suceso completo, y {zài}, "otra vez", abre el segundo, y solo este arreglo es obligatoriamente una secuencia.

Y vale la regla de la partícula {le}: cuando los verbos forman una cadena con un solo sentido, la marca de cierre no aparece. {wǒ qù kàn yīshēng} no lleva {le}; {wǒ kàn le yīshēng} sí.

## La dirección de {lái} y {qù} es la del hablante

Este es el punto que contradice toda la intuición de quien habla español. {lái} y {qù} no describen el movimiento respecto de un lugar fijo, sino respecto de quien habla y de quien escucha.

{wǒ qù kàn nǐ} es "voy a verte": me alejo de ti, o de donde sea, para llegar adonde estás. {wǒ lái kàn nǐ} es "he venido a verte": me acerco a ti. Si tú eres el anfitrión y yo estoy en la puerta, {lái} es el verbo correcto aunque haya cruzado la ciudad entera; si ya estoy en la misma sala, {qù} es el verbo de la partida. Lo que cambia no es el camino andado, sino quién es el punto de referencia.

Por eso los dos verbos encajan tan bien en la serie, y por eso la dirección se resuelve en el segundo verbo: {qù} {kàn} y {lái} {kàn} significan "ir a ver" y "venir a ver", nunca "ir y luego ver" ni "venir y luego ver".

En la Biblia esta construcción aparece donde el griego aparece como invitación. Juan 1:46, en la {和合本}, tiene {lái kàn}, literalmente "vengan a ver", dos verbos en serie y sin conjunción. {lái} trae al interlocutor hasta Jesús; {kàn} es lo único que se le pide. El mismo gesto aparece en Mateo 9:29, {guòlái}, "vengan aquí", y en Juan 4:34, {dào zhèlǐ lái}, "ven aquí".`),
  vocab: [
    V('chī', '吃', 'comer (chī)'),
    V('shuìjiào', '睡覺', 'dormir (shuìjiào)'),
    V('mǎi', '買', 'comprar (mǎi)'),
    V('shū', '書', 'libro (shū)'),
    V('kàn', '看', 'ver, mirar (kàn)'),
    V('yīshēng', '醫生', 'médico (yīshēng)'),
    V('lái', '来', 'venir (lái) — dirección la fija el hablante'),
    V('qù', '去', 'ir (qù) — dirección la fija el hablante'),
    V('le', '了', 'partícula de pasado o de suceso (le)'),
    V('zài', '在', 'otra vez, de nuevo (zài)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Dos verbos seguidos forman una sola frase: {wǒ chī fàn shuìjiào} no tiene conjunción ni coma.',
      ),
    },
    {
      n: '2',
      text: T(
        'El orden de los verbos es fijo y significativo: el primero va antes en el tiempo. {shuìjiào chī fàn} no es {chī fàn shuìjiào}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Un segundo verbo más leve indica propósito: {qù mǎi shū} es "ir a comprar", no "ir y luego comprar".',
      ),
    },
    {
      n: '4',
      text: T(
        '{lái} y {qù} indican la dirección del hablante respecto de quien escucha, no respecto de un lugar fijo.',
      ),
    },
    {
      n: '5',
      text: T(
        '{le} cierra un verbo completo y distinto; los verbos encadenados en serie no lo piden.',
      ),
    },
  ],
  notes: [
    {
      label: T('Dónde está la frontera de las palabras'),
      text: T(
        'Sin espacios, {shuìjiào} es una palabra sola, y {chī fàn} también lo es: {chī} y {fàn} nunca van solos. Con verbos encadenados el problema crece, porque cada verbo de la serie se puede leer en trozos. La segmentación es de la lección 4 y sigue valiendo: lo que separa las palabras es el significado, no el espacio.',
      ),
    },
    {
      label: T('Una secuencia completa lleva {le}, una serie no'),
      text: T(
        'Si los verbos son sucesos separados y completos, cada uno lleva {le}: {wǒ chī le fàn, shuìjiào le}. Si forman una cadena con un solo sentido — ir a ver, venir a ver, ir a comprar — la serie va sin {le}, y es la ausencia de la partícula la que dice que no hubo corte entre ellos.',
      ),
    },
  ],
  examples: [
    { text: '我吃飯睡覺', gloss: T('wǒ chī fàn shuìjiào — yo como y me duermo') },
    { text: '睡覺吃飯', gloss: T('shuìjiào chī fàn — dormir, y después comer (orden invertido)') },
    { text: '去買書', gloss: T('qù mǎi shū — ir a comprar un libro (con el propósito de)') },
    { text: '我來看你', gloss: T('wǒ lái kàn nǐ — he venido a verte') },
  ],
  tables: [
    {
      caption: T('El mismo orden, leído de dos modos'),
      head: [T('Orden de los verbos'), T('Lectura de secuencia'), T('Lectura de propósito')],
      rows: [
        [
          T('{chī fàn} {shuìjiào}'),
          T('como, y después duermo'),
          T('como, y lo que importa es el segundo verbo'),
        ],
        [T('{shuìjiào} {chī fàn}'), T('duermo, y después como'), T('—')],
        [T('{qù mǎi shū}'), T('voy, y luego compro un libro'), T('voy a comprar un libro')],
        [
          T('{qù xuéxiào mǎi shū}'),
          T('voy al colegio, luego compro el libro'),
          T('voy al colegio a comprar el libro'),
        ],
      ],
    },
    {
      caption: T('La dirección de {lái} y {qù} es la del hablante'),
      head: [T('Dónde está el hablante'), T('{lái}'), T('{qù}')],
      rows: [
        [
          T('lejos de quien escucha, yendo a su encuentro'),
          T('{wǒ lái kàn nǐ} — he venido a verte'),
          T('{wǒ qù kàn nǐ} — voy a verte'),
        ],
        [
          T('en la misma casa de quien escucha'),
          T('{wǒ lái kàn nǐ} — vengo a verte antes de salir'),
          T('{wǒ qù kàn nǐ} — voy a verte, de salida'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {wǒ qù mǎi shū}, ¿qué indica la serie {qù mǎi shū}?'),
    options: [
      T('que voy, y luego compro el libro'),
      T('que voy con el propósito de comprar el libro'),
      T('que voy a comprar el libro y luego vuelvo'),
      T('que voy, pero no compro nada'),
    ],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Completa "voy a ver al médico": 我____看醫生'), answer: '去' },
    {
      kind: 'match',
      prompt: T('Une la serie de verbos con lo que significa'),
      pairs: [
        { a: T('{wǒ chī fàn shuìjiào}'), b: T('como, y luego duermo') },
        { a: T('{qù mǎi shū}'), b: T('ir a comprar, con el propósito de comprar') },
        { a: T('{wǒ lái kàn nǐ}'), b: T('he venido a verte') },
        { a: T('{wǒ qù kàn yīshēng}'), b: T('voy a ver al médico') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('En mandarín, ¿dónde está la "y" de "como y duermo"?'),
      options: [
        T('no está: los verbos simplemente se siguen uno a otro'),
        T('va antes del segundo verbo'),
        T('va después del primer verbo'),
        T('va una sola vez, al final de la frase'),
      ],
      answer: 0,
    },
  ],
};
