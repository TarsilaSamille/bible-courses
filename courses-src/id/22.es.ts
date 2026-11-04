import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  section: T('Verbo'),
  title: T('El verbo: el sistema de aspecto'),
  subtitle: T('menulis y menuliskan: el par que más cambia el sentido'),
  body: C(`## La base y los cuatro prefijos

El verbo indonesio tiene una base y nunca la pierde. {tulis} es la base, y todo lo que el verbo hace en portugués indonesio lo hace pegando un prefijo. No hay terminación de persona, no hay cambio de vocal, no hay tiempo: lo que cambia es el afijo.

{meN-} marca una acción activa, con el objeto en foco: {menulis}, {membaca}, {melihat}.
{di-} marca el pasivo, con el agente en foco o omitido: {ditulis}, {dibaca}, {dilihat}.
{ber-} marca una acción intransitiva o un estado: {berjalan}, {berbicara}, {bertumbuh}.
{ter-} marca un estado resultante: {tertulis}, {terbuka}, {terlihat}.

Cuál de los cuatro aparece depende de lo que la oración quiere decir, no del tiempo ni de la persona. {Surat itu ditulis} «la carta está siendo escrita» y {Surat itu tertulis} «la carta está escrita, lo dice» comparten la base y se separan ahí.

## -kan: el verbo que gana un segundo objeto

El sufijo {-kan} es lo más importante del verbo indonesio después de {meN-}, y es lo que el traductor olvida más a menudo.

{menulis} es escribir. {menuliskan} es hacer escribir, mandar escribir, escribir para alguien. {Dia menulis surat} «escribe una carta». {Dia menuliskan surat} «manda escribir una carta», o «escribe la carta para alguien».

La regla práctica de lectura: **con {-kan}, el verbo tiene dos objetos.** El primero es lo que se escribe, el segundo es quien escribe o quien recibe. El patrón completo es {menuliskan + surat + untuk orang}, y es exactamente el patrón que el griego usa cuando traduce un participio griego como «para que se escriba» o «haciendo escribir».

El hermano de {-kan} es {-i}, que hace casi lo mismo con el otro objeto: {mengisi} «llenar» (con {wadah}), {memenuhi} «cumplir» (con {permintaan}), {menutupi} «cubrir» (con {permukaan}). La diferencia es que {-i} señala el objeto que **cubre** la acción, como el recipiente cubre lo que se pone dentro.

Cuando los dos compiten en una misma raíz, el hablante elige, y la elección es de contenido y no de gramática: {menutup} «cerrar» y {menutupi} «tapar por encima» son dos verbos, no un verbo usado de dos maneras.

## Leer el prefijo sin diccionario

{meN-} cambia de forma según la primera letra de la base, y por eso ningún verbo indonesio se parece a otro. La regla se aprende entera en una línea: **antes de consonante sorda aparece la {n}; antes de cualquier otra cosa desaparece.**

{k}, {p}, {t}, {s}, {c} → {meng-} y {men-}: {menulis}, {membaca}, {memakai}.
{b}, {d}, {j}, {l}, {r} → {mem-} o {me-}: {melihat}, {membawa}, {memilih}.
{vocales} → {me-}: {makan}, {masuk}, {menang}.
{g}, {h}, {k} → {meng-}: {mengajar}, {menggambar}, {menggunakan}.

Lo mismo vale para {di-}, {peN-} y {teN-}: {dibaca}, {digambar}, {dipakai}, {digunakan}; {penulis} «escritor», {pelajar} «estudiante», {pengajar} «profesor».

Y están los verbos que **no** absorben la {n}: {ber-} entra derecho, y lo mismo hacen {ke-} y {pe-}. {berjalan}, {bernyanyi}, {ketawa}, {penanggalan} «fecha».

Dos cosas conviene saber antes de equivocarse: los verbos prestados, como {telepon}, {parkir} y {scan}, que no llevan prefijo ninguno, y la {n} que a veces aparece por costumbre ({mengajarkan}) y a veces no ({mengajar}).

## El aspecto vive fuera del verbo

Como el verbo no flexiona, el aspecto no está en él. Viene de tres adverbios ya vistos: {sedang} más verbo da el progresivo, {sudah} más verbo da el pasado, {akan} más verbo da el futuro.

{menulis} solo puede ser «está escribiendo», «escribe» o «escribió», según lo que venga antes. Con {sedang} no hay duda: {sedang menulis} «está escribiendo». Sin nada, el verbo se queda en neutro, y quien traduce tiene que elegir.

El par {-kan} hace el trabajo que el griego hace con el aoristo y el imperfecto. {Dia menulis surat} y {Dia menuliskan surat} no son el mismo verbo en dos tiempos: en el primero el objeto es lo que él mismo escribe; en el segundo hay alguien de fuera, y la acción viene de fuera. Un traductor que no conoce el sufijo escribe las dos con el mismo verbo y pierde el agente.

{Juan 4:34} muestra el otro lado del sistema: el texto usa {akan} más verbo para el futuro casi automáticamente. El griego tenía el tiempo, el indonesio tiene la palabra {akan}, y quien busca flexión no encuentra nada que varíe.`),
  vocab: [
    V('tulis', 'tulis', 'escribir'),
    V('menulis', 'tulis', 'escribir'),
    V('menuliskan', 'tulis', 'mandar escribir'),
    V('ditulis', 'tulis', 'ser escrito'),
    V('tertulis', 'tulis', 'estar escrito'),
    V('penulis', 'tulis', 'escritor'),
    V('baca', 'baca', 'leer'),
    V('membaca', 'baca', 'leer'),
    V('lihat', 'lihat', 'ver'),
    V('melihat', 'lihat', 'ver'),
    V('isi', 'isi', 'llenar'),
    V('mengisi', 'isi', 'llenar'),
    V('memenuhi', 'penuhi', 'cumplir'),
    V('tutup', 'tutup', 'cerrar'),
    V('menutupi', 'tutup', 'cubrir'),
    V('berjalan', 'jalan', 'caminar'),
    V('sedang', 'sedang', 'estar'),
    V('sudah', 'sudah', 'ya'),
    V('akan', 'akan', 'va a'),
  ],
  rules: [
    {
      n: '1',
      text: T('El verbo no flexiona: la base es siempre la misma y lo que cambia es el prefijo.'),
    },
    {
      n: '2',
      text: T(
        '{meN-} es activo, {di-} es pasivo, {ber-} es intransitivo o de estado, {ter-} es estado resultante.',
      ),
    },
    {
      n: '3',
      text: T(
        'Con {-kan} el verbo gana un segundo objeto: {menuliskan surat untuk orang} «mandar escribir una carta para alguien».',
      ),
    },
    {
      n: '4',
      text: T(
        'Con {-i} el segundo objeto es lo que cubre la acción: {memenuhi permintaan} «cumplir una petición».',
      ),
    },
    {
      n: '5',
      text: T('La {n} de {meN-} aparece antes de {k}, {p}, {t}, {s} y {c}: {menulis}, {membaca}.'),
    },
  ],
  notes: [
    {
      label: T('Dónde la forma no es transparente'),
      text: T(
        'Hay verbos lexicalizados en que el prefijo ya no se lee: {terjadi} «acontecer» no es «quedar jadi», y {berbicara} no es «tener + bicara» en el sentido de que alguien habla. El sistema funciona como regla de formación, y una lista de verbos tercos sigue haciendo falta.',
      ),
    },
    {
      label: T('Préstamos y prefijos'),
      text: T(
        'Los verbos prestados se usan sin prefijo y sin asimilación: {telepon}, {parkir} y {scan}. Cuando aparece {meng-}, el verbo ya está integrado: {mengDX} y {memotret} ya son rutina.',
      ),
    },
  ],
  examples: [
    { text: 'Dia menulis surat.', gloss: T('Él escribe una carta.') },
    {
      text: 'Dia menuliskan surat untuk temannya.',
      gloss: T('Él manda escribir una carta para su amigo.'),
    },
    { text: 'Surat itu ditulis oleh Petrus.', gloss: T('La carta la escribe Pedro.') },
    { text: 'Surat itu tertulis di atas salib.', gloss: T('La carta está escrita sobre la cruz.') },
    { text: 'Dia sedang menulis.', gloss: T('Él está escribiendo.') },
    { text: 'Dia sudah menulis surat.', gloss: T('Él ya escribió la carta.') },
    { text: 'Dia akan menulis surat.', gloss: T('Él va a escribir la carta.') },
    { text: 'Dia memenuhi permintaan itu.', gloss: T('Él cumple aquella petición.') },
    { text: 'Hujan mengisi jalan.', gloss: T('La lluvia llena la calle.') },
    { text: 'Murid itu menulis.', gloss: T('Ese estudiante escribe.') },
  ],
  tables: [
    {
      caption: T('Os quatro prefixos'),
      head: ['Prefixo', 'Valor', 'Exemplo', 'Leia como'],
      rows: [
        ['meN-', 'ação ativa', 'menulis', 'escreve'],
        ['di-', 'ação passiva', 'ditulis', 'é escrito'],
        ['ber-', 'intransitivo ou estado', 'berjalan', 'caminha'],
        ['ter-', 'estado resultante', 'tertulis', 'está escrito'],
        ['peN-', 'agente ou instrumento', 'penulis', 'escritor'],
        ['ke-', 'ser algo por natureza', 'ketawa', 'ri-se'],
        ['peN-an', 'ação nominalizada', 'pekerjaan', 'trabalho'],
      ],
    },
    {
      caption: T('A assimilação do prefixo meN-'),
      head: ['Primeira letra da base', 'Prefixo', 'Exemplo', 'Leia como'],
      rows: [
        ['k, p, t, s, c', 'men-', 'menulis', 'escrever'],
        ['k, p, t, s, c', 'mem-', 'membaca', 'ler'],
        ['m, n, w, y', 'men-', 'menari', 'dançar'],
        ['g, h, k', 'meng-', 'mengajar', 'ensinar'],
        ['vogal', 'me-', 'masuk', 'entrar'],
        ['b, d, j, l', 'mem-', 'membawa', 'levar'],
        ['r, l, w, y, vowel', 'me-', 'melihat', 'ver'],
      ],
    },
    {
      caption: T('O sufixo que cria um segundo objeto'),
      head: ['Sufixo', 'Segundo objeto', 'Exemplo', 'Leia como'],
      rows: [
        ['-kan', 'quem faz ou quem recebe', 'menuliskan surat', 'fazer escrever uma carta'],
        ['-i', 'o que cobre a ação', 'memenuhi permintaan', 'cumprir um pedido'],
        ['-kan', 'o que recebe', 'mengirimkan surat', 'enviar uma carta'],
        ['-i', 'o recipiente', 'mengisi wadah', 'encher o recipiente'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué distingue {menulis} de {menuliskan}?'),
    options: [
      T('el segundo tiene {-kan}: «mandar escribir»'),
      T('el segundo es el pasado'),
      T('el segundo es el plural'),
      T('el segundo es el pasivo'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el prefijo: escribe = ___ tulis.'),
      answer: 'Me',
      hint: T('El prefijo del verbo activo, sin {n} antes de {t}.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es el pasivo de {membaca}?'),
      options: [T('dibaca'), T('terbaca'), T('berbaca'), T('kebaca')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Une el prefijo con su valor'),
      pairs: [
        { a: T('{meN-}'), b: T('activo') },
        { a: T('{di-}'), b: T('pasivo') },
        { a: T('{ber-}'), b: T('intransitivo') },
        { a: T('{ter-}'), b: T('estado resultante') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
