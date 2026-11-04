import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  section: T('Sintaxis'),
  title: T('Sintaxis'),
  subtitle: T('sujeto, verbo, objeto: qué se mueve y qué no puede'),
  body: C(`## El orden que nadie rompe

El orden de la oración indonesa es sujeto, verbo, objeto, y nadie lo incumple. No hay inversión, no hay topicalización, y no existe ese recurso del portugués y del inglés de poner el objeto delante para dar énfasis.

{Anjing saya menggigit dia} es «mi perro lo mordió», y el primer sustantivo es el sujeto solo porque está en primera posición. {Saya menggigit anjing} es «yo mordí al perro». Intercambiar los dos sustantivos intercambia los papeles, y no produce una oración enfática: produce una oración distinta.

Lo que lo explica es el verbo. Una oración transitiva tiene un nombre antes del verbo y otro después, y el nombre que está antes es el sujeto por definición de posición. {Buku itu saya baca} existe, con una pausa después de {buku itu}, y suena fuera de lugar: funciona como código, no como prosa.

El portugués y el inglés tienen lo que se llama orden marcado, que trae la información nueva delante: «meu pai, esse eu conheço». El indonesio no lo tiene, y la información nueva se marca de otro modo: con un adverbio, o con {itu}, o con {yang}.

## Qué puede moverse

La flexibilidad del indonesio no está en el orden de los nombres. Está en los modificadores, y pueden ir casi a cualquier sitio sin romper la gramática.

Un adverbio de sintagma abre la oración cuando el foco está en el modo: {Dengan teliti dia membaca buku} «con cuidado, leyó el libro». Un adverbio de tiempo la abre cuando el foco está en el tiempo: {Kemarin dia datang} «ayer vino». En los dos casos es la información que en portugués se iría al final la que aquí sube al principio.

Un sintagma nominal también puede subir, con tal de que venga entero: {Di rumah itu dia menonton televisi} «en aquella casa, él vio la televisión». Media locución no: {Rumah itu} delante, sin {di}, produce una oración sin verbo.

Y hay un movimiento que parece inversión y no lo es: la oración con {yang} puede subir, siempre que lo que viene después sea un sintagma completo. {Yang kamu baca itu buku} «aquello que lees es un libro». El {yang} es lo que permite la subida, y lo que sube es un bloque cerrado.

Lo que **nunca** sube son tres cosas: el sujeto, el verbo y el orden entre los dos nombres de una oración transitiva. Eso es todo. Quien tiene eso tiene toda la sintaxis del indonesio, porque lo demás son adverbios y sintagmas.

## Negación y pasiva

Dos cosas que el lector va a intentar hacer y no puede.

**La negación no puede pasar del sujeto.** {tidak} va antes del verbo, y el verbo se queda donde estaba. {Saya tidak lapar}, y nunca {tidak saya lapar}. El portugués admite «não eu tenho fome» en lo literario; el inglés admite «didn't I come?»; el indonesio no admite ninguno de los dos.

La razón está en el orden: si la negación pudiera subir, pasaría por encima del sujeto, y el sujeto dejaría de ser el primer nombre. Como el sujeto es el primer nombre por definición de posición, la negación no tiene por dónde subir. Lo que se dice en vez de {tidak saya lapar} es {Saya tidak lapar}, {Bukan saya yang lapar} o {Saya belum lapar}, y las tres son oraciones distintas.

**La pasiva es {di-} y el agente va detrás.** {Surat itu ditulis oleh Petrus} «la carta está escrita por Pedro». El {oleh} es obligatorio cuando el agente es una persona y se omite cuando no importa: {Surat itu ditulis} «la carta se está escribiendo».

Hay un segundo tipo de pasiva que no tiene verbo. El sustantivo se pone en foco con {ada}: {ada yang datang} «vino alguien», {ada buku baru} «hay un libro nuevo». Es la misma información que una pasiva sin sujeto, y el lector que reconoce la construcción en portugués lee {ada} demasiado deprisa.

La pasiva tiene además una variante con clítico, en que el agente se vuelve pronombre pegado al verbo: {kubaca} «leído por mí», {kaubaca} «leído por ti», {ditulisnya} «escrito por él». La {ny} de tercera persona es la misma {-nya} de los otros cinco empleos, y por eso {ditulisnya} puede significar «escrito por él» y «que fue escrito», según la oración.

Lo que cambia de una lengua a otra es cuánto es productiva la pasiva. En indonesio común la pasiva está marcada: sale cuando el objeto es el tema y el agente es irrelevante. En el griego del Nuevo Testamento la pasiva es frecuente en las relativas, y el traductor tiene que decidir en cada pasaje si la pasiva griega tenía agente. Donde el griego tenía agente implícito y el contexto lo permitía, el indonesio escribe {oleh} de todos modos; donde no, escribe {di-} a secas. Esa es una decisión de traducción, no de gramática.

## Dan inginilah olehmu diperlakukan oleh orang lain

{Lucas 6:31} es el pasaje donde el orden fijo aparece con más piezas a la vez, y merece leerse despacio: {Dan inginilah olehmu diperlakukan oleh orang lain seperti kamu ingin diperlakukan oleh mereka}.

La estructura visible es sujeto {kamu}, verbo {inginilah}, objeto {olehmu diperlakukan oleh orang lain}, y luego el marcador de comparación {seperti} con una segunda oración que repite el mismo orden. Dos oraciones, la misma arquitectura, y la segunda es el espejo entero de la primera.

Lo que hace el griego aquí es simetría: dos mitades con {kath’ homōs kai}, una construcción que el griego usa para emparejar acciones. El indonesio usa {seperti}, que es una palabra, y la primera oración es la regla y la segunda es la aplicación.

Y el verbo de la primera oración es {inginilah}, con la {lah} enfática, sobre {ingin}, que es un sustantivo nominalizado en {-in}: {yang ingin} «el que quiere». El griego tiene un verbo; el indonesio tiene un sustantivo con partícula; y esa diferencia es el precio de una lengua que nominaliza en vez de flexionar.`),
  vocab: [
    V('saya', 'saya', 'yo'),
    V('dia', 'dia', 'él, ella'),
    V('anjing', 'anjing', 'perro'),
    V('menggigit', 'gigit', 'morder'),
    V('buku', 'buku', 'libro'),
    V('baca', 'baca', 'leer'),
    V('dengan teliti', 'teliti', 'con cuidado'),
    V('kemarin', 'kemarin', 'ayer'),
    V('rumah', 'rumah', 'casa'),
    V('menonton', 'tonton', 'ver'),
    V('televisi', 'televisi', 'televisión'),
    V('tidak', 'tidak', 'no'),
    V('lapar', 'lapar', 'hambriento'),
    V('ditulis', 'tulis', 'ser escrito'),
    V('oleh', 'oleh', 'por (agente)'),
    V('ada', 'ada', 'haber'),
    V('kubaca', 'baca', 'leído por mí'),
    V('kaubaca', 'baca', 'leído por ti'),
    V('ditulisnya', 'tulis', 'escrito por él'),
    V('ingin', 'ingin', 'querer'),
    V('perlakukan', 'lakukan', 'tratar'),
    V('seperti', 'seperti', 'como'),
  ],
  rules: [
    { n: '1', text: T('El orden es sujeto, verbo, objeto, y no se invierte.') },
    {
      n: '2',
      text: T(
        'Lo que sube al principio son adverbios, sintagmas nominales enteros y oraciones con {yang}.',
      ),
    },
    {
      n: '3',
      text: T(
        '{tidak} va antes del verbo y nunca antes del sujeto: {Saya tidak lapar}, nunca {tidak saya lapar}.',
      ),
    },
    {
      n: '4',
      text: T('La pasiva es {di-} más un verbo, y el agente va en {oleh} después de la oración.'),
    },
    { n: '5', text: T('Una pasiva sin verbo usa {ada}: {ada yang datang} «vino alguien».') },
  ],
  notes: [
    {
      label: T('Por qué la negación no sube'),
      text: T(
        'Si la negación pudiera subir, pasaría por encima del sujeto, y el sujeto dejaría de ser el primer nombre. Como el sujeto es el primer nombre por definición de posición, la negación no tiene por dónde subir. En su lugar se usan {Saya tidak lapar}, {Bukan saya yang lapar} o {Saya belum lapar}.',
      ),
    },
    {
      label: T('Cuándo está marcada la pasiva'),
      text: T(
        'En indonesio corriente la pasiva sale cuando el objeto es el tema y el agente es irrelevante. El griego del Nuevo Testamento usa la pasiva a menudo en las relativas, y el traductor tiene que decidir en cada pasaje si había agente. Esa decisión es de traducción, no de gramática.',
      ),
    },
  ],
  examples: [
    { text: 'Anjing saya menggigit dia.', gloss: T('Mi perro lo mordió.') },
    { text: 'Saya menggigit anjing.', gloss: T('Yo mordí al perro.') },
    { text: 'Dengan teliti dia membaca buku.', gloss: T('Con cuidado, él leyó el libro.') },
    { text: 'Kemarin dia datang.', gloss: T('Ayer vino.') },
    {
      text: 'Di rumah itu dia menonton televisi.',
      gloss: T('En aquella casa él vio la televisión.'),
    },
    { text: 'Yang kamu baca itu buku.', gloss: T('Aquello que lees es un libro.') },
    { text: 'Saya tidak lapar.', gloss: T('No tengo hambre.') },
    { text: 'Surat itu ditulis oleh Petrus.', gloss: T('La carta está escrita por Pedro.') },
    { text: 'Surat itu ditulis.', gloss: T('La carta se está escribiendo.') },
    { text: 'Kitab itu kaubaca.', gloss: T('Tú leíste ese libro.') },
  ],
  tables: [
    {
      caption: T('O que se move e o que fica'),
      head: ['Peça', 'Pode subir?', 'Sobe como', 'Exemplo'],
      rows: [
        ['sujeito', 'não', '(nunca)', 'Saya tidak lapar'],
        ['verbo', 'não', '(nunca)', 'saya membaca'],
        ['ordem SVO', 'não', '(nunca)', 'anjing saya menggigit dia'],
        ['advérbio', 'sim', 'elemento solto', 'Dengan teliti dia baca'],
        ['locução nominal', 'sim', 'bloco inteiro', 'Di rumah itu dia baca'],
        ['oração com yang', 'sim', 'bloco fechado', 'Yang kamu baca itu buku'],
      ],
    },
    {
      caption: T('As três formas de negar e as três de passarivo'),
      head: ['Função', 'Estrutura', 'Exemplo', 'Leia como'],
      rows: [
        ['negação', 'S + tidak + V', 'Saya tidak lapar.', 'não tenho fome'],
        [
          'negação nominal',
          'Bukan + S + yang + V',
          'Bukan saya yang lapar.',
          'não sou eu que tenho fome',
        ],
        ['negação temporal', 'S + belum + V', 'Saya belum lapar.', 'ainda não tenho fome'],
        ['passivo com agente', 'O + di-V + oleh + A', 'Ditulis oleh Petrus.', 'escrito por Pedro'],
        ['passivo sem agente', 'O + di-V', 'Surat itu ditulis.', 'a carta está sendo escrita'],
        ['passivo com clítico', 'O + V-nya', 'Kitab itu kaubaca.', 'o livro você leu'],
        ['passivo sem verbo', 'ada + yang + V', 'Ada yang datang.', 'veio alguém'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál oración es correcta?'),
    options: [
      T('Saya tidak lapar'),
      T('tidak saya lapar'),
      T('Jangan saya lapar'),
      T('tidak lapar saya'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Completa la pasiva con agente: la carta está escrita por Pedro = Surat itu ditulis ___ Petrus.',
      ),
      answer: 'oleh',
      hint: T('La preposición de agente.'),
    },
    {
      kind: 'choose',
      prompt: T('En {Surat itu ditulis}, ¿qué se ha omitido?'),
      options: [T('el agente'), T('el verbo'), T('el sujeto'), T('el objeto')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Une la pieza con su posición'),
      pairs: [
        { a: T('{saya}'), b: T('sujeto, siempre primero') },
        { a: T('{tidak}'), b: T('antes del verbo') },
        { a: T('{oleh}'), b: T('después de la pasiva') },
        { a: T('{ada}'), b: T('pasiva sin verbo') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
