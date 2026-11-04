import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  section: T('Numeral'),
  title: T('Tiempo, fechas y número'),
  subtitle: T('sudah, masih, baru, hampir, segera, kemarin, nanti, lalu'),
  body: C(`## Las palabras que el portugués no tiene como adverbio

El portugués marca el tiempo en el verbo: «já vim», «ainda vou», «quase terminei». El indonesio no puede, porque el verbo no flexiona, y por eso tiene un conjunto de palabras que hacen ese trabajo solas.

{sudah} es «ya», y es la más común: {saya sudah makan} «ya he comido», {dia sudah datang} «ya ha llegado».

{masih} es «todavía», en el sentido de continuación: {dia masih di sini} «todavía está aquí», {saya masih tinggal di sini} «todavía vivo aquí». El par {masih belum} es «todavía no».

{baru} es «solo», en el sentido de recencia: {dia baru datang} «acaba de llegar», {saya baru tahu} «lo acabo de saber». Con {saja} se refuerza: {baru saja} «recién ahora».

{hampir} es «casi»: {hampir selesai} «está casi listo». Con reduplicación, {hampir-hampir}, el sentido pasa a «por poco», casi irónico: {hampir-hampir tidak sampai} «por poco no llega».

{segera} es «pronto»: {akan segera datang} «vendrá pronto». {kemarin} es «ayer», {nanti} es «después» y {tadi} es «ahora mismo», mirando hacia atrás.

{sementara itu} es «mientras tanto», {sekarang} es «ahora», {saat ini} es «en este momento». Y están las frecuencias: {selalu} «siempre», {sering} «a menudo», {kadang-kadang} «a veces», {jarang} «rara vez», {pernah} «alguna vez», {tidak pernah} «nunca».

Todas esas palabras son invariables. Ninguna flexiona, ninguna concuerda con el sustantivo y ninguna cambia por el sujeto.

## El tiempo del verbo va antes

Cuatro de las palabras de arriba son aspecto, y el aspecto va antes del verbo, como ya decía la regla de posición.

{sudah} más verbo es «haber + participio»: {sudah datang} «ha llegado», y {sudah} más una base es la manera más común de expresar el pasado en indonesio; no hay otra.

{akan} más verbo es el futuro: {akan datang} «vendrá». {sedang} más verbo es el progresivo: {sedang datang} «está viniendo». {belum} más verbo es «todavía no»: {belum datang} «todavía no ha llegado». Y {telah} es un segundo marcador de pasado, más formal, que sale sobre todo en lo escrito: {telah datang}.

El par {sudah} y {belum} es el más útil de todos: {sudah datang} «ha llegado» y {belum datang} «todavía no ha llegado» son dos mitades del mismo hilo. La respuesta a {belum datang} es siempre {sudah datang}, y la pregunta más común de la conversación corriente es {sudah?}, que significa «¿ya?» y espera {sudah} o {belum}.

{masih} y {baru} también van antes del verbo cuando son aspecto: {masih tinggal} «todavía vive», {baru tahu} «acaba de saber». Y hay una diferencia fina entre ellos que el portugués no tiene: {masih} mira hacia atrás, a una situación que empezó antes y sigue; {baru} mira hacia delante, a algo que acaba de empezar.

## Dónde va la fecha

El tiempo que es sustantivo va donde va un adverbio: al final del sintagma verbal o al principio de la oración. {Dia datang kemarin} «vino ayer», {Kemarin dia datang} «ayer vino», {Dia datang di hari Senin} «vino el lunes».

Las unidades son {hari} «día», {minggu} «semana», {bulan} «mes», {tahun} «año» y {jam} «hora». Los días de la semana llevan mayúscula y no llevan numeral: {Senin}, {Selasa}, {Rabu}, {Kamis}, {Jumat}, {Sabtu}, {Minggu}. Fíjate en que {Minggu} es domingo en el calendario y «semana» en la conversación corriente, que es una fuente clásica de confusión.

Los meses también son nombres propios prestados: {Januari}, {Februari}, {Maret} y así hasta {Desember}. No hay manera de escribir enero en minúscula.

La fecha completa no lleva preposición: {17 Agustus 1945}, y en texto corrido {tanggal 17 Agustus}. El sustantivo {tanggal} es un préstamo del sánscrito y significa «marca, día del mes», y el texto lo usa exactamente en ese papel. Quien traduce del portugués escribe «no dia 17 de agosto», con tres preposiciones que el indonesio no tiene.

## Mintilah, maka akan diberikan kepadamu

{Mateo 7:7} es donde el tiempo del verbo aparece en estado puro, y vale más que cualquier tabla: {Mintilah, maka akan diberikan kepadamu; carilah, maka kamu akan mendapat; ketoklah, maka akan dibukakan kepadamu}.

Los tres imperativos son {minta}, {cari} y {ketok}, y los tres verbos que siguen son {diberikan}, {mendapat} y {dibukakan}: {akan} más verbo en los tres casos, más dos pasivas con {di-} y sin {oleh} escrito.

Lo que el pasaje no tiene es {-lah} en el pasado. Donde el griego del Sermón de la Montaña alterna aoristo e imperfecto, el texto usa {akan} tres veces y {sudah} ninguna, porque el tiempo en indonesio no está en el verbo. El lector que busca un cambio de tiempo en el verbo no encuentra ninguno y concluye que el pasaje dice lo mismo tres veces. Está equivocado: lo que cambia es el verbo, no el tiempo.`),
  vocab: [
    V('sudah', 'sudah', 'ya'),
    V('telah', 'telah', 'ya (pasado, registro escrito)'),
    V('akan', 'akan', 'va a (futuro)'),
    V('sedang', 'sedang', 'estar (progresivo)'),
    V('belum', 'belum', 'todavía no'),
    V('masih', 'masih', 'todavía'),
    V('baru', 'baru', 'recién; nuevo'),
    V('hampir', 'hampir', 'casi'),
    V('segera', 'segera', 'pronto'),
    V('kemarin', 'kemarin', 'ayer'),
    V('nanti', 'nanti', 'después, más tarde'),
    V('tadi', 'tadi', 'ahora mismo (pasado)'),
    V('lalu', 'lalu', 'después, entonces'),
    V('sekarang', 'sekarang', 'ahora'),
    V('selalu', 'selalu', 'siempre'),
    V('kadang-kadang', 'kadang', 'a veces'),
    V('hari', 'hari', 'día'),
    V('tanggal', 'tanggal', 'fecha, día del mes'),
    V('Senin', 'Senin', 'lunes'),
    V('Minggu', 'Minggu', 'domingo; semana'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El tiempo del verbo viene del adverbio: {sudah}, {akan}, {sedang}, {belum} van antes del verbo.',
      ),
    },
    {
      n: '2',
      text: T(
        '{sudah} más verbo es el pasado: {sudah datang} «ha llegado». {telah} hace lo mismo en registro escrito.',
      ),
    },
    {
      n: '3',
      text: T('{belum} tiene respuesta obligatoria: a {belum datang} se responde {sudah datang}.'),
    },
    {
      n: '4',
      text: T(
        '{masih} mira hacia atrás y {baru} hacia delante; los dos van antes del verbo cuando son aspecto.',
      ),
    },
    {
      n: '5',
      text: T(
        'La fecha no lleva preposición: {17 Agustus 1945}, {hari Senin}, {tanggal 17 Agustus}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Un adverbio sin flexión'),
      text: T(
        'Ninguna de las palabras de tiempo flexiona. {sudah}, {akan}, {belum} y {sedang} no cambian con el sujeto ni con el número, y por eso el mismo verbo sirve para {saya}, {dia} y {mereka}: {saya sudah datang}, {dia sudah datang}, {mereka sudah datang}.',
      ),
    },
    {
      label: T('Minggu y la semana'),
      text: T(
        '{Minggu} es domingo en el calendario y «semana» en la conversación corriente, y decide el contexto. En un calendario no hay ambigüedad; en una carta sí, y conviene evitar la palabra cuando la fecha importa.',
      ),
    },
  ],
  examples: [
    { text: 'Saya sudah makan.', gloss: T('Ya he comido.') },
    { text: 'Dia masih di sini.', gloss: T('Él todavía está aquí.') },
    { text: 'Saya baru tahu ontem.', gloss: T('Lo acabo de saber, ayer.') },
    { text: 'Hampir selesai.', gloss: T('Está casi listo.') },
    { text: 'Dia akan segera datang.', gloss: T('Él vendrá pronto.') },
    { text: 'Dia belum datang.', gloss: T('Él todavía no ha llegado.') },
    { text: 'Sudah?', gloss: T('¿Ya?') },
    { text: 'Dia datang kemarin.', gloss: T('Él vino ayer.') },
    { text: 'Kita bertemu di hari Senin.', gloss: T('Nos encontramos el lunes.') },
    {
      text: 'Peristiwa itu terjadi pada 17 Agustus 1945.',
      gloss: T('Aquel suceso ocurrió el 17 de agosto de 1945.'),
    },
  ],
  tables: [
    {
      caption: T('Palavras de tempo e de aspecto'),
      head: ['Palavra', 'Significado', 'Posição', 'Exemplo'],
      rows: [
        ['sudah', 'já', 'antes do verbo', 'sudah datang'],
        ['telah', 'já (escrito)', 'antes do verbo', 'telah datang'],
        ['akan', 'vai', 'antes do verbo', 'akan datang'],
        ['sedang', 'estar a', 'antes do verbo', 'sedang datang'],
        ['belum', 'ainda não', 'antes do verbo', 'belum datang'],
        ['masih', 'ainda', 'antes do verbo', 'masih tinggal'],
        ['baru', 'só agora', 'antes do verbo', 'baru tahu'],
      ],
    },
    {
      caption: T('Advérbios que ficam fora do verbo'),
      head: ['Palavra', 'Significado', 'Posição', 'Exemplo'],
      rows: [
        ['kemarin', 'ontem', 'fim da frase', 'dia datang kemarin'],
        ['nanti', 'depois', 'fim da frase', 'nanti kita bicara'],
        ['tadi', 'agora mesmo', 'fim da frase', 'tadi dia telephon'],
        ['hampir', 'quase', 'antes do verbo', 'hampir selesai'],
        ['segera', 'em breve', 'antes do verbo', 'akan segera datang'],
        ['sekarang', 'agora', 'qualquer', 'sekarang dia bekerja'],
        ['selalu', 'sempre', 'antes do verbo', 'selalu datang tepat waktu'],
        ['kadang-kadang', 'às vezes', 'antes do verbo', 'kadang-kadang lupa'],
      ],
    },
    {
      caption: T('Datas e unidades de tempo'),
      head: ['Unidade', 'Palavra', 'Exemplo', 'Leia como'],
      rows: [
        ['dia', 'hari', 'hari Senin', 'na segunda-feira'],
        ['semana', 'minggu', 'minggu depan', 'na semana que vem'],
        ['mês', 'bulan', 'bulan Januari', 'em janeiro'],
        ['ano', 'tahun', 'tahun 1945', 'em 1945'],
        ['data', 'tanggal', 'tanggal 17 Agustus', 'a 17 de agosto'],
        ['completa', '(dia + mês + ano)', '17 Agustus 1945', '17 de agosto de 1945'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Dia belum datang}, ¿qué significa la oración?'),
    options: [T('todavía no ha llegado'), T('ya ha llegado'), T('vendrá pronto'), T('vino ayer')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el pasado: ha llegado = ___ datang.'),
      answer: 'sudah',
      hint: T('La palabra de aspecto que va antes del verbo.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo se escribe una fecha completa?'),
      options: [
        T('17 Agustus 1945'),
        T('di 17 dari Agustus 1945'),
        T('ke 17 Agustus 1945'),
        T('pada tanggal tujuh belas Agustus'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Une la palabra con su tiempo'),
      pairs: [
        { a: T('{sudah}'), b: T('ya') },
        { a: T('{belum}'), b: T('todavía no') },
        { a: T('{akan}'), b: T('va a') },
        { a: T('{kemarin}'), b: T('ayer') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
