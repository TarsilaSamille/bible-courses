import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  section: T('Tiempo y verbo'),
  title: T('Los verbos esenciales'),
  subtitle: T(
    'makan, minum, pergi, datang, lihat, dengar: los verbos que sostienen casi toda frase',
  ),
  body: C(`## El verbo que no se conjuga

El verbo indonesio no cambia de forma para decir quién habla ni cuándo. {makan} es «comer» en la primera persona y en la tercera, en el presente y en el pasado: {saya makan}, {dia makan}, {kemarin dia makan}. Lo que cambia el sentido no está en el verbo, está en la palabra que lo acompaña.

Eso cambia lo que «verbo esencial» quiere decir. En portugués, esencial es el verbo que se conjuga en toda frase. En indonesio, es el que lleva el sentido y recibe los afijos: {makan} comer, {minum} beber, {pergi} ir, {datang} venir, {lihat} ver, {dengar} oír, {tahu} saber, {mau} querer, {ada} haber, {bilang} decir, {tidur} dormir, {baca} leer, {tulis} escribir, {beri} dar, {ambil} tomar, {kerja} trabajar cubren casi todo lo que se dice en un capítulo de Evangelio.

## meN-: el prefijo que cambia la voz

El verbo recibe el prefijo {meN-} cuando es activo y tiene objeto: {makan} se vuelve {memakan}, {lihat} se vuelve {melihat}, {dengar} se vuelve {mendengar}, {tulis} se vuelve {menulis}, {baca} se vuelve {membaca}, {beri} se vuelve {memberi}, {ambil} se vuelve {mengambil}. La {N} no es una letra: es la asimilación al primer sonido de la raíz. Ante {p}, {t}, {k} y {s} el sonido cae y la raíz pierde la consonante, como en {tulis} y {ambil}.

Sin {meN-} el verbo queda como está, y la frase cambia de voz sin cambiar de palabras. {Saya makan nasi} es «yo como arroz»; {nasi itu dimakan} es «ese arroz es comido», con {di-}, que es el {meN-} de la pasiva.

## sudah, sedang, akan, belum: dónde vive el tiempo

Como el verbo no flexiona, el tiempo viene de cuatro palabras que van delante de él. {sudah} marca lo acabado: {saya sudah makan}, «ya comí». {sedang} marca lo que está en curso: {saya sedang makan}, «estoy comiendo». {akan} marca lo que viene: {saya akan makan}, «voy a comer». Y {belum} marca lo que todavía no ha pasado: {saya belum makan}, «todavía no comí».

El cuarto es el que el portugués no tiene con esa precisión. {belum} no es «no»: es «todavía no», e implica que va a pasar. {tidak} niega el verbo, {bukan} niega el sustantivo, y {belum} niega solo el tiempo.

## En la Biblia

Juan 1:1 abre con {ada}: {Pada mulanya adalah Firman}. {adalah} es {ada} con el sufijo {lah}, y el indonesio dice «había la Palabra» donde el griego dice {ἦν ὁ λόγος}. El verbo de la existencia es el mismo en toda la Biblia, y es la primera palabra del versículo.

Marcos 4:39 trae dos órdenes sin sujeto y sin tiempo: {Diam! Tenanglah!} «¡Cállate! ¡Cálmate!». El indonesio no necesita flexionar para mandar: el verbo queda desnudo y el {lah} cierra la orden. Y Juan 3:16 usa {mengaruniakan}, de {karunia} «dádiva», con {meN-} y {-kan}: «dio» en el sentido de dar como regalo.`),
  vocab: [
    V('makan', 'makan', 'comer'),
    V('memakan', 'makan', 'comer (activo)'),
    V('minum', 'minum', 'beber'),
    V('pergi', 'pergi', 'ir'),
    V('datang', 'datang', 'venir'),
    V('lihat', 'lihat', 'ver'),
    V('melihat', 'lihat', 'ver (activo)'),
    V('dengar', 'dengar', 'oír'),
    V('mendengar', 'dengar', 'oír (activo)'),
    V('tahu', 'tahu', 'saber'),
    V('mau', 'mau', 'querer'),
    V('ada', 'ada', 'haber, existir'),
    V('adalah', 'ada', 'es (existencial)'),
    V('sudah', 'sudah', 'ya'),
    V('sedang', 'sedang', 'estar haciendo'),
    V('akan', 'akan', 'ir a (futuro)'),
    V('belum', 'belum', 'todavía no'),
    V('berkata', 'kata', 'decir'),
    V('tinggal', 'tinggal', 'vivir, quedarse'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'El verbo no flexiona: {saya makan}, {dia makan}, {kemarin dia makan} tienen la misma forma.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{meN-} es el activo con objeto: {makan} → {memakan}, {lihat} → {melihat}, {dengar} → {mendengar}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'Ante {p}, {t}, {k} y {s} el sonido del prefijo cae: {tulis} → {menulis}, {ambil} → {mengambil}.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{sudah} «ya», {sedang} «en curso», {akan} «futuro», {belum} «todavía no»: el tiempo va delante del verbo.',
      ),
    },
    {
      n: '§5',
      text: T('{belum} no es {tidak}: niega solo el tiempo, e implica que todavía va a pasar.'),
    },
  ],
  notes: [
    {
      label: T('El ada que no es «tener»'),
      text: T(
        '{ada} es existencia, no posesión. «Yo tengo un libro» es {saya punya buku}, con {punya}, y {ada buku} es solo «hay un libro». Quien traduce {ada} por «tener» invierte la frase.',
      ),
    },
    {
      label: T('El imperativo sin forma propia'),
      text: T(
        'El indonesio no tiene imperativo flexionado: el verbo desnudo ya es orden, y {lah} la refuerza. {Diam!} es «cállate» sin desinencia, sin persona y sin sujeto.',
      ),
    },
  ],
  examples: [
    {
      text: 'Pada mulanya adalah Firman',
      gloss: T('Jn 1:1 — {adalah} es {ada} con {lah}: la Palabra existía.'),
    },
    { text: 'Diam! Tenanglah!', gloss: T('Mc 4:39 — dos órdenes sin sujeto ni tiempo.') },
    {
      text: 'Ia telah mengaruniakan Anak-Nya',
      gloss: T('Jn 3:16 — {mengaruniakan}, de {karunia}: dio como dádiva.'),
    },
    { text: 'saya sudah makan', gloss: T('{sudah} delante del verbo: ya comí.') },
    { text: 'saya sedang makan', gloss: T('{sedang} delante del verbo: estoy comiendo.') },
    { text: 'saya belum makan', gloss: T('{belum} niega el tiempo, no el hecho.') },
    { text: 'nasi itu dimakan', gloss: T('{di-} hace la pasiva sin cambiar el verbo.') },
    { text: 'saya punya buku', gloss: T('{punya} es «tener»; {ada} sería «hay».') },
    { text: 'dia menulis surat', gloss: T('{tulis} → {menulis}: la {t} cae ante {meN-}.') },
  ],
  tables: [
    {
      caption: T('Los esenciales, con y sin meN-'),
      head: [T('Raíz'), T('Activo'), T('Pasivo'), T('Sentido')],
      rows: [
        [T('{makan}'), '{memakan}', '{dimakan}', T('comer')],
        [T('{lihat}'), '{melihat}', '{dilihat}', T('ver')],
        [T('{dengar}'), '{mendengar}', '{didengar}', T('oír')],
        [T('{tulis}'), '{menulis}', '{ditulis}', T('escribir')],
        [T('{baca}'), '{membaca}', '{dibaca}', T('leer')],
        [T('{beri}'), '{memberi}', '{diberi}', T('dar')],
        [T('{ambil}'), '{mengambil}', '{diambil}', T('tomar')],
      ],
    },
    {
      caption: T('Las cuatro marcas de tiempo'),
      head: [T('Marca'), T('Sentido'), T('Ejemplo')],
      rows: [
        [T('{sudah}'), T('acabado'), '{saya sudah makan}'],
        [T('{sedang}'), T('en curso'), '{saya sedang makan}'],
        [T('{akan}'), T('futuro'), '{saya akan makan}'],
        [T('{belum}'), T('todavía no'), '{saya belum makan}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Pada mulanya adalah Firman}, ¿de qué verbo viene {adalah}?'),
    options: [T('{ada}'), T('{adalah}'), T('{punya}'), T('{makan}')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete «Diam! ___!» con la orden de calmarse (raíz {tenang}).'),
      answer: 'Tenanglah',
    },
    {
      kind: 'match',
      prompt: T('Une el verbo con su activo con meN-.'),
      pairs: [
        { a: T('{tulis}'), b: T('{menulis}') },
        { a: T('{lihat}'), b: T('{melihat}') },
        { a: T('{ambil}'), b: T('{mengambil}') },
        { a: T('{dengar}'), b: T('{mendengar}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué marca dice «todavía no, pero va a pasar»?'),
      options: [T('{tidak}'), T('{belum}'), T('{bukan}'), T('{sudah}')],
      answer: 1,
    },
  ],
};
