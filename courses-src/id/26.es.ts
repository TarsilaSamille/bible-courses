import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  section: T('Verbo'),
  title: T('Negación y prohibición'),
  subtitle: T('tidak, bukan, jangan, belum: tres negativas y una estructura'),
  body: C(`## Tres negativas, tres blancos

El portugués tiene una negación y la pone en tres sitios: «no viene», «no es bueno», «no vengas». El indonesio tiene tres palabras, y cada una tiene un blanco. Fallar aquí es el error más visible de un hablante de portugués, porque la oración sigue pareciendo correcta.

{tidak} niega un verbo o un predicado. Va inmediatamente antes del verbo, y es lo que usa casi toda negación: {Dia tidak datang}, {Ini tidak sulit}, {Dia tidak bekerja keras}.

{bukan} niega una cópula y un nombre. Va antes del nombre o del sintagma que niega, y nunca después del verbo: {Ini bukan buku}, {Dia bukan guru}, {bukan saya yang menulis}. Y es la única respuesta posible a un {adalah} negativo: {Ini bukan buku}, nunca {Ini tidak buku}.

{jangan} niega una orden. No es una negación corriente: es el prohibitivo, y cambia lo que la oración está haciendo. {Jangan datang} «no vengas», {Jangan mencuri} «no robes», {Jangan lupa membawa buku} «no olvides traer el libro».

La regla práctica es una pregunta: **¿qué se está negando?** Una acción o un predicado es {tidak}. Una identidad o una cosa es {bukan}. Una orden es {jangan}.

Y hay un caso en que {tidak} va delante de lo que parece un nombre y no es {bukan}: {tidak banyak}, {tidak sulit}, {tidak lama}, {tidak jauh}. Son adjetivos usados como adverbio, y la negación los alcanza como alcanza al verbo. {Tidak banyak orang datang} «no vino mucha gente». Quien escribe {bukan banyak} produce una oración que existe, con otro sentido.

## belum y sudah: una estructura, no una palabra

{belum} no es una negación como {tidak}. Marca un estado que llega hasta un punto del tiempo y todavía no lo ha pasado, y por eso viene con {sudah} como respuesta.

{belum datang} «todavía no ha llegado». La respuesta es {sudah datang} «ya ha llegado», y la pregunta emparejada es {sudah?}, que espera una de las dos.

Lo que hace de {belum} una estructura y no una palabra es la serie de tres. {belum} es la acción no hecha hasta ahora; {sudah} es la acción hecha; y {akan} es la acción que todavía va a suceder. Las tres se combinan en oraciones que tienen el tiempo entero en una palabra: {Dia belum datang} «todavía no ha llegado», {Dia sudah datang} «ya ha llegado», {Dia akan datang} «vendrá».

Con {masih} la cosa se aprieta: {dia masih belum datang} «todavía no ha llegado», que es el sentido más común en la narrativa bíblica, porque el texto está describiendo una espera. Y {sudah belum} existe también, con el sentido de «ya... y todavía no», cuando la segunda cláusula viene después: {Sudah aku selesai membaca, belum semua selesai}.

Y están {juga} y {pun}, que refuerzan: {belum juga} «todavía no ni eso», {belum pun} «ni siquiera todavía». {Dia belum juga datang} «todavía no ha llegado, y sigue sin llegar», que es más enfático que {belum} a secas.

Lo que bloquea la lectura es que {tidak} y {belum} **no** se combinan. {Dia tidak belum datang} está mal, y la corrección no es {tidak belum} ni {belum tidak}: es elegir uno de los dos. Para «todavía no», escriba {belum}; para «no viene», escriba {tidak}. Y para «todavía no ha llegado», las dos formas sirven, {belum datang} y {tidak sudah datang}, y la segunda es la más corriente en narración.

## Formas que no existen

Hay cuatro combinaciones que un hablante de portugués produce sin querer, y conviene saber de antemano que son imposibles.

{tidak belum} no existe. Use {belum} o {tidak sudah}.
{bukan tidak} no existe. La que existe es {tidak bukan}, que es lo contrario: «es sin duda».
{tidak bukan} significa «es sin duda». {Ini tidak bukan benar} «esto es de verdad cierto».
{jangan tidak} es redundante. {Jangan tidak datang} tiene el sentido de «no dejes de venir», y casi nunca es lo que se quiere; para prohibir venir, escriba {jangan datang}.

Y está lo que sí se puede decir. Para una prohibición que pide atención en vez de negar una acción, la forma es {jangan lupa}: {Jangan lupa menggosok gigi} «no olvides lavarte los dientes», que prohíbe una acción y no la niega.

Una negativa interrogativa, «¿no es verdad que él vino?», se hace con {bukan} y no como la hace el portugués. {Bukannya dia yang datang?} «¿no fue él quien vino?», y la respuesta esperada es {benar} «es cierto» o {bukan} «no». El «¿no es...?» del portugués se convierte aquí en {Bukannya...}, con {bukan} delante.

## Janganlah kamu cemas tentang hari esok

{Mateo 6:34} es el pasaje donde el prohibitivo aparece en estado puro: {Janganlah kamu cemas tentang hari esok}. El {janganlah} es el prohibitivo con una {lah} enfática, y {cemas} es un verbo de estado sin {ada}, que funciona como un adjetivo que describe un estado de quien habla.

Fíjate en lo que el versículo no hace: no dice {tidak cemas}, que sería una afirmación negada, sino {janganlah kamu cemas}, que es una orden sobre la conducta de quien escucha. El griego usa el imperativo negativo, y el indonesio también, porque es lo único que tiene sentido en una exhortación.

El resto del versículo usa {akan} más verbo, y el texto resuelve la parte final con {akan lebih baik}, que es la razón por la que el traductor tiene que saber que {akan} no es un tiempo sino una expectativa sobre lo que va a pasar.

Y la cláusula inmediatamente anterior, {Janganlah kamu cemas tentang hidup}, tiene la misma construcción. Dos prohibiciones, dos {janganlah}, y ni una negación corriente por el camino. Quien conoce el sistema lee las dos oraciones sin esfuerzo; quien no lo conoce busca la palabra «no» y no la encuentra.`),
  vocab: [
    V('tidak', 'tidak', 'no (verbo)'),
    V('bukan', 'bukan', 'no (cópula, sustantivo)'),
    V('jangan', 'jangan', 'no (prohibición)'),
    V('belum', 'belum', 'todavía no'),
    V('sudah', 'sudah', 'ya'),
    V('akan', 'akan', 'va a'),
    V('masih', 'masih', 'todavía'),
    V('juga', 'juga', 'también'),
    V('pun', 'pun', 'ni siquiera'),
    V('cemas', 'cemas', 'preocuparse'),
    V('hari esok', 'hari esok', 'el día siguiente, mañana'),
    V('hidup', 'hidup', 'vida, vivir'),
    V('lupa', 'lupa', 'olvidar'),
    V('banyak', 'banyak', 'muchos'),
    V('sulit', 'sulit', 'difícil'),
    V('benar', 'benar', 'cierto'),
    V('bukan', 'bukan', 'no (en pregunta)'),
    V('datang', 'datang', 'venir'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{tidak} niega verbo o predicado y va antes; {bukan} niega nombre o cópula; {jangan} niega la orden.',
      ),
    },
    {
      n: '2',
      text: T(
        '{tidak} niega también un adjetivo adverbializado: {tidak banyak}, {tidak sulit}, {tidak lama}.',
      ),
    },
    {
      n: '3',
      text: T(
        '{belum} responde a {sudah} y nunca se combina con {tidak}: {tidak belum datang} está mal.',
      ),
    },
    {
      n: '4',
      text: T('A {belum datang} se responde {sudah datang}, y la pregunta emparejada es {sudah?}.'),
    },
    { n: '5', text: T('La negativa interrogativa usa {bukannya} y espera {benar} o {bukan}.') },
  ],
  notes: [
    {
      label: T('Por qué un «no» no basta'),
      text: T(
        'La negación indonesa está dividida porque el portugués pone el «no» en tres posiciones y el indonesio tiene que elegir. Quien traduce del portugués escribe {tidak buku} donde el texto tiene {bukan buku}, y la diferencia no es de estilo: una niega la existencia y la otra niega la identidad.',
      ),
    },
    {
      label: T('La fuerza de juga y pun'),
      text: T(
        '{juga} añade «todavía» a la negación y {pun} añade «ni siquiera». {Belum juga} y {belum pun} son más fuertes que {belum}, y la diferencia aparece sobre todo en el texto bíblico, donde la narrativa de una espera repetida depende de ella.',
      ),
    },
  ],
  examples: [
    { text: 'Dia tidak datang.', gloss: T('Él no viene.') },
    { text: 'Ini bukan buku.', gloss: T('Esto no es un libro.') },
    { text: 'Jangan datang.', gloss: T('No vengas.') },
    { text: 'Tidak banyak orang datang.', gloss: T('No vino mucha gente.') },
    { text: 'Ini tidak sulit.', gloss: T('Esto no es difícil.') },
    { text: 'Dia belum datang.', gloss: T('Él todavía no ha llegado.') },
    { text: 'Sudah?', gloss: T('¿Ya?') },
    { text: 'Dia masih belum datang.', gloss: T('Él todavía no ha llegado.') },
    { text: 'Dia belum juga datang.', gloss: T('Él todavía no ha llegado ni ahora.') },
    { text: 'Bukannya dia yang datang?', gloss: T('¿No fue él quien vino?') },
  ],
  tables: [
    {
      caption: T('As três negativas e o que negam'),
      head: ['Palavra', 'Alvo', 'Exemplo', 'Leia como'],
      rows: [
        ['tidak', 'verbo, predicado', 'Dia tidak datang.', 'ele não vem'],
        ['tidak', 'adjetivo adverbial', 'Tidak sulit.', 'não é difícil'],
        ['bukan', 'cópula, nome', 'Ini bukan buku.', 'isto não é um livro'],
        ['bukan', 'sujeito', 'Bukan saya yang tulis.', 'não fui eu que escrevi'],
        ['jangan', 'ordem', 'Jangan datang.', 'não venha'],
        ['jangan', 'hábito', 'Jangan mencuri.', 'não roube'],
        ['belum', 'ação até agora', 'Dia belum datang.', 'ainda não chegou'],
      ],
    },
    {
      caption: T('A série de três'),
      head: ['Palavra', 'Pergunta', 'Exemplo', 'Leia como'],
      rows: [
        ['belum', 'já aconteceu?', 'Dia belum datang.', 'ainda não chegou'],
        ['sudah', 'já aconteceu?', 'Dia sudah datang.', 'já chegou'],
        ['akan', 'vai acontecer?', 'Dia akan datang.', 'virá'],
        ['masih belum', 'ainda por quê?', 'Dia masih belum datang.', 'ainda não chegou'],
        ['sudah?', 'qual das duas?', 'Sudah?', 'já?'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es la negación correcta de «esto no es un libro»?'),
    options: [T('Ini bukan buku'), T('Ini tidak buku'), T('Ini jangan buku'), T('Ini belum buku')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: todavía no ha llegado = Dia ___ datang.'),
      answer: 'belum',
      hint: T('La palabra que responde a {sudah}.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál de estas oraciones es correcta?'),
      options: [
        T('Dia tidak belum datang'),
        T('Dia belum datang'),
        T('Dia belum tidak datang'),
        T('Dia bukan belum datang'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Une la negativa con su blanco'),
      pairs: [
        { a: T('{tidak}'), b: T('verbo') },
        { a: T('{bukan}'), b: T('nombre') },
        { a: T('{jangan}'), b: T('orden') },
        { a: T('{belum}'), b: T('hasta ahora') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
