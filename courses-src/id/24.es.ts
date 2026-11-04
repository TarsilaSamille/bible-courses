import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  section: T('Verbo'),
  title: T('El verbo: tiempo'),
  subtitle: T('sudah, akan, sedang, belum, y el -lah que está desapareciendo'),
  body: C(`## El verbo no cambia

El verbo indonesio no flexiona persona ni tiempo. La misma forma sirve para {saya}, {kamu}, {dia} y {mereka}: {datang} «viene», {datang} «vienen», {datang} «vino», {datang} «vendrá». Todo lo que el portugués resuelve en la terminación, el indonesio lo resuelve alrededor del verbo.

La matriz completa cabe en una página. Antes del verbo entran los adverbios de aspecto; después del verbo entran los adverbios de modo; y alrededor, lo que haga falta.

{nada} {sedang datang} «está viniendo», {sudah datang} «ha llegado», {akan datang} «vendrá».
{nada} {tidak datang} «no viene», {tidak sudah datang} «no ha llegado todavía», {belum datang} «no ha llegado todavía».
{nada} {sudah + negativo} {salah datang} «vino mal», {sedang + negativo} {sedang tidak datang} «no está viniendo», {akan + negativo} {akan tidak datang} «no vendrá».

El detalle que produce errores es el negativo: {tidak} se combina con {sedang} y con {akan}, y no se combina con {belum}. {Tidak belum datang} está mal; lo que existe es {belum datang} o {tidak sudah datang}. Lo mismo con {akan}: {tidak akan datang} es correcto, {akan tidak datang} es coloquial.

## Cuatro maneras de decir el pasado

El pasado es lo que tiene más caminos, y por eso el traductor tiene que elegir en vez de buscar una flexión que no existe.

{sudah} más verbo es el pasado corriente y conversacional. {Dia sudah datang} «ha llegado», {saya sudah baca} «he leído». Es la forma que sale en la mayoría de las traducciones del Nuevo Testamento, y no es elección del traductor: es la única en el habla.

{telah} más verbo es el mismo pasado en registro escrito y solemne. {Telah datang} «había llegado», {telah wafat} «había fallecido». Quien escribe en un registro alto lo encuentra más natural, y quien escribe una carta también.

{-lah} pegado al verbo es el pasado remoto, y es lo único que lleva en el verbo lo que los demás llevan fuera. {Pergilah} «se marchó», {Datanglah}, {mendengarlah} «escucha con atención». El {-lah} viene de la antigua partícula {lah}, que ya no está en el habla, y sobrevive en tres sitios: en la literatura, en la lengua eclesiástica y en expresiones cristalizadas como {mendengarlah} y {sudahlah}, «ya basta».

Y está el pasado resultativo, que no es un tiempo sino un estado: {Lantainya sudah lapuk} «el suelo ya se ha hundido», {Pintu sudah tertutup} «la puerta está cerrada». El {sudah} aquí marca la consecuencia, no el momento, y el portugués lo traduce con un pretérito perfecto que sugiere tiempo.

## Tres partículas que se pegan al final

Lo que quedó de la flexión fue un puñado de partículas que se pegan al final del verbo o de la cláusula. Son pocas, tres sirven y una está muriendo.

{-lah}, con el sentido de resultado y de insistencia: {Tolong datanglah!} «¡por favor, ven!», {Cepatlah!} «¡deprisa!», {Dengarkanlah!} «¡escucha!». En el habla corriente es énfasis y súplica; en la escritura antigua es tiempo. Quien aprende a leer un texto antiguo tiene que saber que {Datanglah} puede ser «vino» y no «ven».

{-pun} marca énfasis por contraste, y tiene que ver más con la adición que con el tiempo: {Dia pun pelayan} «él también es siervo», {Kita pun ikut suffer} «también sufrimos». La forma más común es {pun} tras un pronombre o un adverbio: {Aku pun tidak tahu} «yo tampoco sé», {Dia pun datang} «también vino él».

{-kah} es partícula de pregunta, y es literaria: {Datangkah kamu?} «¿vienes?». La manera corriente de preguntar es {Apakah kamu datang?}, con {apakah} delante. {Datangkah} sale en la oración litúrgica y en el texto antiguo, y quien no lo conoce se toma {Datakah} por {datang + kah} y se pierde. Lo mismo con {-tah}, que afirma en vez de preguntar y solo vive en una frase hecha: {Sudahkah?} «¿ya ha ocurrido?».

Todas juntas hacen lo que el griego hacía con la terminación. Una oración griega llega al final de su verbo con el tiempo, la persona y el modo impresos en la terminación; una oración indonesa llega al final de su verbo con el adverbio ya pegado delante y quizá una partícula {-lah} al final. No se perdió nada: cambió de casa.

## Tres preguntas y una frase

{Juan 21:15-17} es el mejor ejemplo de lo que pasa en una lengua que no flexiona. Jesús pregunta tres veces a Simón si lo ama, y el texto repite la pregunta con pocos cambios.

El griego hace la pregunta con tres verbos distintos, y la diferencia es un juego de palabras que el traductor griego aprovecha. El indonesio repite {Apakah kamu cintaku?} tres veces, y la diferencia se pierde. No porque un traductor haya perdido algo, sino porque la lengua no tiene dónde ponerlo: el verbo de amar es {cinta}, con o sin {meN-}, y no hay tres verbos para tres preguntas.

Quien traduce la pregunta tres veces con tres verbos portugueses distintos está añadiendo algo del griego, no traduciendo del indonesio. Y quien traduce la respuesta {Ya, Rabbiku, dan Engkau tahu bahwa aku mencintaimu?} tres veces con la misma estructura descubre que el paralelismo griego, hecho de variación, se ha vuelto paralelismo indonesio, hecho de repetición. El efecto sobre el lector es el mismo, y la gramática que lo produjo no lo es.`),
  vocab: [
    V('datang', 'datang', 'venir'),
    V('datanglah', 'datang', '¡ven! (enfático)'),
    V('pergi', 'pergi', 'ir'),
    V('pergilah', 'pergi', 'se marchó'),
    V('tidur', 'tidur', 'dormir'),
    V('bekerja', 'kerja', 'trabajar'),
    V('makan', 'makan', 'comer'),
    V('sudah', 'sudah', 'ya'),
    V('telah', 'telah', 'ya (escrito)'),
    V('akan', 'akan', 'va a'),
    V('sedang', 'sedang', 'estar'),
    V('belum', 'belum', 'todavía no'),
    V('tidak', 'tidak', 'no'),
    V('-lah', 'lah', '(enfático; pasado remoto, escrito)'),
    V('-pun', 'pun', 'también, incluso'),
    V('-kah', 'kah', '(partícula de pregunta, literaria)'),
    V('apakah', 'apakah', 'si (pregunta)'),
    V('cinta', 'cinta', 'amar, amor'),
    V('mencintai', 'cinta', 'amar'),
    V('Rabbiku', 'Rabbiku', 'mi Maestro'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El verbo no flexiona persona ni tiempo: {datang} sirve para toda persona y todo tiempo.',
      ),
    },
    { n: '2', text: T('El aspecto va antes del verbo: {sedang}, {sudah}, {akan}, {belum}.') },
    {
      n: '3',
      text: T(
        '{tidak} se combina con {sedang} y {akan} pero no con {belum}: {tidak sudah datang}, nunca {tidak belum datang}.',
      ),
    },
    {
      n: '4',
      text: T(
        'El {-lah} al final del verbo es enfático en el habla y pasado remoto en la escritura antigua.',
      ),
    },
    {
      n: '5',
      text: T(
        '{-pun} marca contraste con «también» y {-kah} es una partícula de pregunta literaria.',
      ),
    },
  ],
  notes: [
    {
      label: T('El pasado resultativo'),
      text: T(
        'En {Lantainya sudah lapuk} el {sudah} no marca un momento sino una consecuencia. El portugués lo traduce con un pretérito perfecto que sugiere tiempo, y el lector tiene que notar que la oración dice «el resultado está presente», no «ocurrió».',
      ),
    },
    {
      label: T('Dónde vive todavía el -lah'),
      text: T(
        'El {-lah} de pasado remoto sale en expresiones fijas como {mendengarlah}, «escucha con atención», y en la oración litúrgica antigua. Quien encuentra {Datanglah} en un texto y lee «vino» en vez de «ven» acertó mal el tiempo, no la lengua.',
      ),
    },
  ],
  examples: [
    { text: 'Dia datang.', gloss: T('Él viene. / Él vino. / Él vendrá.') },
    { text: 'Dia sedang datang.', gloss: T('Él está viniendo.') },
    { text: 'Dia sudah datang.', gloss: T('Él ya ha llegado.') },
    { text: 'Dia belum datang.', gloss: T('Él todavía no ha llegado.') },
    { text: 'Dia tidak sudah datang.', gloss: T('Él todavía no ha llegado.') },
    { text: 'Telah datang.', gloss: T('Había llegado.') },
    { text: 'Pergilah!', gloss: T('¡Se marchó!') },
    { text: 'Tolong datanglah!', gloss: T('¡Por favor, ven!') },
    { text: 'Aku pun tidak tahu.', gloss: T('Yo tampoco sé.') },
    { text: 'Datangkah kamu?', gloss: T('¿Vienes?') },
  ],
  tables: [
    {
      caption: T('A matriz do tempo'),
      head: ['Tempo', 'Marca', 'Exemplo', 'Leia como'],
      rows: [
        ['presente', '(nada)', 'Dia datang.', 'ele vem'],
        ['progressivo', 'sedang + V', 'Dia sedang datang.', 'ele está vindo'],
        ['passado', 'sudah + V', 'Dia sudah datang.', 'ele já chegou'],
        ['passado escrito', 'telah + V', 'Telah datang.', 'havia chegado'],
        ['futuro', 'akan + V', 'Dia akan datang.', 'ele virá'],
        ['ainda não', 'belum + V', 'Dia belum datang.', 'ele ainda não chegou'],
        ['passado remoto', 'V-lah', 'Pergilah.', 'partiu'],
        ['negativo', 'tidak + V', 'Dia tidak datang.', 'ele não vem'],
      ],
    },
    {
      caption: T('Partículas do fim do verbo'),
      head: ['Partícula', 'Função', 'Exemplo', 'Leia como'],
      rows: [
        ['-lah', 'ênfase na fala, tempo na escrita', 'Tolong datanglah!', 'por favor, venha!'],
        ['-pun', 'contraste pelo «também»', 'Aku pun tidak tahu.', 'eu também não sei'],
        ['-kah', 'pergunta, literário', 'Datangkah kamu?', 'você vem?'],
        ['-tah', 'afirmação, frase feita', 'Sudahkah?', 'será que já?'],
        ['-nya', 'retoma o substantivo', 'datangnya', 'a vinda dele'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es la forma correcta de «todavía no ha llegado»?'),
    options: [
      T('Dia belum datang'),
      T('Dia tidak belum datang'),
      T('Dia sedang tidak datang'),
      T('Dia tidak akan datang'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el futuro: vendrá = Dia ___ datang.'),
      answer: 'akan',
      hint: T('El adverbio que va antes del verbo.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué significa {Aku pun tidak tahu}?'),
      options: [T('yo tampoco sé'), T('yo solo no sé'), T('todavía no sé'), T('no quiero saber')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Une la partícula con su función'),
      pairs: [
        { a: T('{-lah}'), b: T('énfasis') },
        { a: T('{-pun}'), b: T('también') },
        { a: T('{-kah}'), b: T('pregunta') },
        { a: T('{-nya}'), b: T('retoma el nombre') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
