import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  section: T('Kanji'),
  title: T('El kanji como ideograma y como componente'),
  subtitle: T(
    'El mismo carácter es a la vez una palabra con sentido y un trozo de dibujo dentro de otra, y por eso se puede adivinar',
  ),
  body: C(`
## Dos vidas en un mismo carácter

La mitad de esto ya apareció con {水}: es "agua" y es también el componente de todo lo que tiene que ver con el agua o con un río. La consecuencia es enorme. Si el componente es el mismo, la palabra nueva es adivinable. Quien conoce {水} llega a {海} "mar", {川} "río" y {汗} "sudor" sin haberlos visto nunca, porque el dibujo está diciendo lo mismo en los tres.

Y el dibujo va más allá del componente: **explica**. {明}, sol más luna, significa "claro", y quien mira el carácter ve la respuesta sin haber oído nunca la palabra. {休} es una persona apoyada en un árbol, y significa "descanso". {森} son tres árboles y significa "bosque". {品} son tres bocas y significa "mercancía". Casi ninguna escritura del mundo muestra el sentido dentro de la forma. El japonés sí lo muestra, y muestra las dos cosas: la palabra y la cuenta.

## Números: el decimal también está hecho de ideogramas

Los dígitos del japonés también son kanji, y son los ideogramas más composicionales que existen: {go} es cinco, {jū} es diez, y eso es todo lo que hace falta para escribir cualquier número del 11 al 99. Veintiuno no es "dos, uno por diez" dicho dos veces: es dos, luego diez, luego uno, leído del derecho, como un dígito. El decimal japonés es posicional, y eso se ve en la vida de todos los días en el momento de leer un cartel.

El cartel de un cine es el ejemplo más corto: el número del cine es siempre el nombre seguido del dígito. Cine 3 es el nombre del cine y {三}. El tres ahí no cuenta nada, ordena, y por eso un número de dos dígitos se lee del derecho.

Una honestidad de escala, porque el lector necesita saber dónde está pisando: el japonés tiene unos 2.000 kanji de uso común, el conjunto oficial llamado Jōyō. Un adulto japonés lee unos 3.000 a 5.000 a lo largo de su vida. Nadie los aprendió todos en la escuela: se aprendieron los 2.000 del día a día y el resto por necesidad.

## Posición y dirección: el vocabulario que abre cualquier texto

Este es el grupo que más aparece después de los verbos, y es lo que permite leer cualquier cosa sin diccionario: un manual de instrucciones, un mapa, una receta, una lista de la compra. {上} es arriba, {下} es abajo, {中} es dentro y también medio, {外} es fuera, {前} es el frente y también antes, {後ろ} es detrás, {横} es el lado, {左} es la izquierda, {右} es la derecha.

Estos diez kanji, junto con los verbos, cubren casi todo el lenguaje de instrucción que existe en la lengua, y es exactamente el tipo de frase que aparece en un texto bíblico traducido, donde alguien le dice a alguien que vaya a algún sitio.

## El mismo carácter, partícula una hora y sustantivo a la siguiente

El detalle fino viene ahora, y explica por qué la gramática japonesa parece más sencilla de lo que es. {前} es partícula en un uso: antes de un verbo o antes de un sustantivo con tiempo, {前} significa "antes de". En el mismo carácter, solo o con {の}, es sustantivo: "el frente". En el dibujo no cambia nada; cambia aquello a lo que está pegado.

Y está además {過} "pasar, rebasar", que se separa de la misma manera. Como verbo es gramatical, y por eso sale en kana: el {す} que sobra en *sugiru* es la huella del ideograma que nadie escribió. Cuando es el sustantivo lo gramatical, el dibujo vuelve: {通過} es el sustantivo del "paso" de una estación, un lugar por el que se pasa.

## Donde esto aparece en la Biblia

La traducción japonesa de 1987, {新共同訳}, escribe {神} y {世界} y {言葉} en ideogramas, sin ninguna nota al pie. Quien no conoce kanji lee esos tres como ideogramas perdidos, cuando en realidad son las palabras más obvias de la lengua. Y la segunda de ellas, {言葉}, es literalmente las dos cosas que la Biblia dice que es la Palabra. {本}, "libro", también es contador: los contadores del japonés son kanji de sentido literal, y el de libros evoca un rollo de pergamino, de donde salió la propia palabra "libro".
`),
  vocab: [
    V('hi', '日', 'sol; día (hi)'),
    V('tsuki', '月', 'luna; mes (tsuki)'),
    V('me', '明', 'claro; luz del día (me)'),
    V('yasu', '休', 'descansar; descanso (yasu)'),
    V('mori', '森', 'bosque (mori)'),
    V('go', '五', 'cinco (go)'),
    V('jū', '十', 'diez; base de la cuenta (jū)'),
    V('mae', '前', 'frente; antes; anterior (mae)'),
    V('katsu', '過', 'pasar; rebasar (katsu)'),
    V('hon', '本', 'libro; contador de libros (hon)'),
    V('shin', '神', 'Dios; espíritu (shin)'),
    V('sekai', '世界', 'mundo (sekai)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Un kanji es palabra y componente a la vez: {水} es "agua" y es la raíz de todo lo que tiene agua.',
      ),
    },
    {
      n: '2',
      text: T(
        'El dibujo explica el sentido: {明} es sol más luna y significa "claro"; {森} son tres árboles y significa "bosque".',
      ),
    },
    {
      n: '3',
      text: T(
        'Los dígitos son kanji y son posicionales: {jū} es diez y es la base de todo número mayor que 9.',
      ),
    },
    {
      n: '4',
      text: T(
        'Posición y dirección son, después de los verbos, los kanji más frecuentes del texto — sin ellos no se lee ninguna instrucción.',
      ),
    },
    {
      n: '5',
      text: T(
        'El mismo carácter puede ser partícula en un uso y sustantivo en otro; lo que viene después decide.',
      ),
    },
  ],
  notes: [
    {
      label: T('La escala real'),
      text: T(
        'Jōyō son unos 2.000 kanji de uso común. Un adulto japonés lee de 3.000 a 5.000 a lo largo de su vida, y nadie los aprendió todos en la escuela: se aprendió los 2.000 del día a día y el resto por necesidad.',
      ),
    },
    {
      label: T('El verbo desaparece, el nombre se queda'),
      text: T(
        'Como en la lección 1: lo gramatical sale en kana. Por eso el nombre {新共同訳} tiene cuatro ideogramas y casi todo el resto de la frase es kana. {過} es el ejemplo más limpio — el verbo es kana, el sustantivo vuelve a ser kanji.',
      ),
    },
  ],
  examples: [
    { text: '明日の朝', gloss: T('ashita no asa — mañana por la mañana') },
    { text: '木の下に休む', gloss: T('kino shita ni yamu — descansar debajo del árbol') },
    { text: '深い森', gloss: T('fukai mori — un bosque profundo') },
    { text: '三丁目', gloss: T('san-chōme — la tercera manzana de la ciudad') },
    { text: '神の言葉', gloss: T('kami no kotoba — la palabra de Dios') },
  ],
  tables: [
    {
      caption: T('Los diez dígitos'),
      head: [T('Número'), T('Kanji'), T('Lectura')],
      rows: [
        [T('uno'), T('{一}'), T('hitori')],
        [T('dos'), T('{二}'), T('futa')],
        [T('tres'), T('{三}'), T('mitsu')],
        [T('cuatro'), T('{四}'), T('yon')],
        [T('cinco'), T('{五}'), T('go')],
        [T('seis'), T('{六}'), T('roku')],
        [T('siete'), T('{七}'), T('nana')],
        [T('ocho'), T('{八}'), T('hachi')],
        [T('nueve'), T('{九}'), T('kyū')],
        [T('diez'), T('{十}'), T('jū')],
      ],
    },
    {
      caption: T('Posición y dirección'),
      head: [T('Kanji'), T('Lectura'), T('Sentido')],
      rows: [
        [T('{上}'), T('ue'), T('encima')],
        [T('{下}'), T('shita'), T('debajo')],
        [T('{中}'), T('naka'), T('dentro; el medio')],
        [T('{外}'), T('soto'), T('fuera, exterior')],
        [T('{前}'), T('mae'), T('el frente; antes')],
        [T('{後ろ}'), T('ushiro'), T('detrás')],
        [T('{横}'), T('yoko'), T('el lado; al lado')],
        [T('{左}'), T('hidari'), T('izquierda')],
        [T('{右}'), T('migi'), T('derecha')],
        [T('{間}'), T('aida'), T('entre; intervalo')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {明}, ¿qué está diciendo el dibujo?'),
    options: [
      T('que es solo un ideograma, sin palabra dentro'),
      T('sol y luna juntos — es decir, "claro"'),
      T('que el carácter significa "día"'),
      T('que está contando algo'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "dieciocho" con los dos dígitos: ____八'),
      answer: '十',
    },
    {
      kind: 'match',
      prompt: T('Une el kanji con su sentido'),
      pairs: [
        { a: T('{上}'), b: T('encima') },
        { a: T('{下}'), b: T('debajo') },
        { a: T('{中}'), b: T('dentro') },
        { a: T('{右}'), b: T('derecha') },
        { a: T('{前}'), b: T('frente; antes') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo aparece el número en el cartel de un cine?'),
      options: [
        T('el dígito después del nombre: nombre más {三}'),
        T('el dígito antes del nombre: {三} más nombre'),
        T('en hiragana, porque los números no tienen ideograma'),
        T('en katakana, como todo número extranjero'),
      ],
      answer: 0,
    },
  ],
};
