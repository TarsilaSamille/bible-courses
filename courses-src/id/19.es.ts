import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  section: T('Adverbio'),
  title: T('El adverbio: posición y las palabras de negación'),
  subtitle: T('va después del verbo, pero tidak, bukan y jangan van antes'),
  body: C(`## El adverbio va después del verbo

La regla es una línea y cabe en una tarjeta: **el adverbio de modo va después del verbo.**

{dia datang cepat} «él viene rápido». {kami bekerja keras} «nosotros trabajamos con fuerza». {dia membaca dengan perhatian} «él lee con atención».

El portugués hace lo mismo con un adverbio corto («chegou cedo», «falou claro») y otra cosa con uno largo («falou com uma clareza que ninguém esperava»). El indonesio separa las dos cosas por la longitud del adverbio: el de una palabra se pega al verbo, el de sintagma va al final del sintagma verbal. Eso viene después, porque es donde la regla simple deja de valer.

Lo que nunca ocurre es el adverbio antes del verbo. Quien escribe {cepat dia datang} produce una oración que suena a traducción, y el lector tropieza al principio en vez de al final.

## Las tres que van antes

Tres palabras rompen la regla, y son las tres que el lector más necesita.

{tidak} niega un verbo y viene inmediatamente antes: {dia tidak datang} «no viene», {dia tidak datang cepat} «no viene rápido». Fíjate en que {cepat} se queda donde estaba y la negación no se mueve.

{bukan} niega cópula o nombre, y viene antes del verbo o antes del sintagma que niega: {ini bukan buku} «esto no es un libro», {dia bukan guru} «no es profesor», {bukan saya yang menulis} «no fui yo quien escribió».

{jangan} es el prohibitivo y ocupa el hueco de {tidak} en una orden: {jangan kamu datang} «no vengas», {jangan kamu terlalu cepat datang} «no vengas demasiado rápido». Con imperativo, la {lah} no es opcional: {datanglah} «ven», {jangan datanglah} «no vengas».

Y hay un cuarto grupo que también va antes del verbo y que el portugués resuelve con auxiliares: {akan} «va a», {sudah} «ya», {sedang} «estar», {belum} «todavía no». El orden es el mismo en los cuatro: aspecto, luego verbo.

## Un adverbio corto y uno largo: los dos huecos

La regla de la primera sección vale para el adverbio de una palabra. El de sintagma tiene otro hueco, y por eso la misma palabra aparece en dos posiciones en textos distintos.

El adverbio de una palabra es **derivativo**: está atado a lo que modifica. {datang cepat} «venir rápido», {bekerja keras} «trabajar con fuerza», {bicara benar} «hablar con verdad». Va justo detrás del verbo, y va siempre.

El adverbio de sintagma es **circunstancial**: describe la situación entera, no el verbo. {baca dengan teliti} «leer con cuidado», {berjalan dengan lambat} «caminar despacio», {bicara dengan tenang} «hablar con calma». Va al final de todo, después del verbo **y** del objeto: {dia membaca buku dengan teliti}, no {dia membaca dengan teliti buku}.

Compara los dos con el mismo contenido: {dia membaca dengan teliti} es gramatical y significa «lee con atención»; {dia membaca buku dengan teliti} añade el objeto y es la forma normal cuando lo hay. Lo que no existe es {dia membaca dengan teliti buku}, con el sintagma en medio.

Cuando el adverbio de sintagma es una preposición, puede desplazarse al principio de la oración, y el efecto es de énfasis y no de hueco obligatorio: {Dengan teliti dia membaca buku} «con cuidado, leyó el libro». El portugués hace lo mismo con «Com cuidado, ele leu».

Y hay un caso en que el adverbio sale de su hueco y se mete dentro del verbo, que es el clítico: {datangnya} «la venida», {keluarannya} «la salida», {tidurnya} «el hecho de que durmiera». Son adverbios convertidos en sustantivo, y la lectura bíblica encuentra más de estos que de adverbios sueltos.

## Jangan menghakimi, supaya kamu tidak dihakimi

{Mateo 7:1} pone las dos mitades del sistema en una frase: {Janganlah kamu menghakimi, supaya kamu tidak dihakimi}.

En la primera mitad, {janganlah} es el prohibitivo más una {lah} enfática, y ocupa el hueco de {tidak}. El verbo {menghakimi} está en infinitivo, y eso es una marca de registro: en habla corriente es {kamu jangan menghakimi} o {jangan menghakimi}.

En la segunda mitad, {supaya} es «para que» y lo que sigue es una oración completa con {tidak}. Fíjate en que {tidak} ha vuelto delante del verbo, como siempre, y en que el adverbio de modo de la primera cláusula ha desaparecido: el versículo no repite «del mismo modo», y quien traduce con un «igualmente» ha añadido una palabra que el texto no tiene.

El texto lo consiguió porque {menghakimi} y {dihakimi} son la misma raíz con afijos opuestos, y porque el adverbio que el griego usaría para «del mismo modo» no existe en indonesio. El lector que conoce la regla de posición lee las dos oraciones sin esfuerzo; el que no la conoce busca el adverbio que falta y no lo encuentra.`),
  vocab: [
    V('tidak', 'tidak', 'no (verbo)'),
    V('bukan', 'bukan', 'no (cópula, sustantivo)'),
    V('jangan', 'jangan', 'no (prohibición)'),
    V('datang', 'datang', 'venir'),
    V('datanglah', 'datang', '¡ven!'),
    V('bekerja', 'kerja', 'trabajar'),
    V('membaca', 'baca', 'leer'),
    V('bicara', 'bicara', 'hablar'),
    V('dengan', 'dengan', 'con'),
    V('teliti', 'teliti', 'cuidadoso; cuidadosamente'),
    V('keras', 'keras', 'con fuerza'),
    V('benar', 'benar', 'con verdad'),
    V('sudah', 'sudah', 'ya'),
    V('akan', 'akan', 'va a (futuro)'),
    V('sedang', 'sedang', 'estar (aspecto)'),
    V('menghakimi', 'hakimi', 'juzgar'),
    V('dihakimi', 'hakimi', 'ser juzgado'),
    V('supaya', 'supaya', 'para que'),
  ],
  rules: [
    { n: '1', text: T('El adverbio de modo de una palabra va después del verbo: {datang cepat}.') },
    {
      n: '2',
      text: T(
        '{tidak} y {bukan} van antes del verbo; {jangan} ocupa el hueco de {tidak} en una orden.',
      ),
    },
    {
      n: '3',
      text: T('El aspecto también va antes del verbo: {sudah}, {akan}, {sedang}, {belum}.'),
    },
    {
      n: '4',
      text: T(
        'El adverbio de sintagma con preposición va al final del sintagma verbal, tras el objeto: {membaca buku dengan teliti}.',
      ),
    },
    {
      n: '5',
      text: T(
        'El adverbio de sintagma puede ir al principio de la oración con efecto enfático: {Dengan teliti dia membaca buku}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por qué no hay adverbio preverbal'),
      text: T(
        'El portugués tiene adverbio antes del verbo en algunos huecos lexicalizados. El indonesio no tiene ninguno, y esa ausencia es lo que hace que {cepat datang} suene mal en vez de arcaico.',
      ),
    },
    {
      label: T('La posición de jangan'),
      text: T(
        'Con {jangan} el pronombre suele ir después, porque el prohibitivo tiene la fuerza de una orden: {jangan kamu datang}. Con {tidak} el orden es el contrario y el pronombre va delante: {kamu tidak datang}.',
      ),
    },
  ],
  examples: [
    { text: 'Dia datang cepat.', gloss: T('Él viene rápido.') },
    { text: 'Dia tidak datang cepat.', gloss: T('Él no viene rápido.') },
    { text: 'Kita bekerja keras.', gloss: T('Nosotros trabajamos con fuerza.') },
    { text: 'Dia membaca buku dengan teliti.', gloss: T('Él lee el libro con cuidado.') },
    { text: 'Dengan teliti dia membaca buku.', gloss: T('Con cuidado, él leyó el libro.') },
    { text: 'Jangan kamu datang.', gloss: T('No vengas.') },
    { text: 'Jangan datanglah ke sini.', gloss: T('No vengas aquí.') },
    { text: 'Ini bukan buku.', gloss: T('Esto no es un libro.') },
    { text: 'Bukan saya yang menulis.', gloss: T('No fui yo quien escribió.') },
    { text: 'Dia sudah datang.', gloss: T('Él ya ha llegado.') },
  ],
  tables: [
    {
      caption: T('Onde cada palavra fica'),
      head: ['Palavra', 'Posição', 'Frase', 'Leia como'],
      rows: [
        ['advérbio de modo', 'depois do verbo', 'datang cepat', 'vem rápido'],
        ['tidak', 'antes do verbo', 'tidak datang', 'não vem'],
        ['bukan', 'antes do verbo ou do nome', 'bukan buku', 'não é livro'],
        ['jangan', 'antes do verbo', 'jangan datang', 'não venha'],
        ['sudah / akan / sedang', 'antes do verbo', 'sudah datang', 'já veio'],
        [
          'advérbio de sintagma',
          'fim do sintagma verbal',
          'baca buku dengan teliti',
          'lê o livro com cuidado',
        ],
      ],
    },
    {
      caption: T('Os dois lugares do advérbio'),
      head: ['Tipo', 'Padrão', 'Exemplo', 'Leia como'],
      rows: [
        ['derivativo', 'V + advérbio', 'bekerja keras', 'trabalhar com força'],
        ['derivativo', 'V + advérbio', 'bicara benar', 'falar com verdade'],
        [
          'circunstancial',
          'V + O + preposição',
          'baca buku dengan teliti',
          'lê o livro com cuidado',
        ],
        ['circunstancial', 'V + preposição', 'bicara dengan tenang', 'fala com calma'],
        [
          'deslocado',
          'preposição + S + V + O',
          'dengan teliti dia baca buku',
          'com cuidado, ele lê o livro',
        ],
        ['nominalizado', 'V + nya', 'datangnya Kristus', 'a vinda de Cristo'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Dónde va {teliti} en {Dia membaca buku ___}?'),
    options: [
      T('al final: dengan teliti'),
      T('antes del sujeto'),
      T('entre sujeto y verbo'),
      T('justo tras el verbo, antes del objeto'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Añade el prohibitivo: no vengas = ___ kamu datang.'),
      answer: 'Jangan',
      hint: T('La palabra que ocupa el hueco de {tidak} en una orden.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál oración es correcta?'),
      options: [
        T('Dia membaca dengan teliti buku.'),
        T('Dia membaca buku dengan teliti.'),
        T('Dengan teliti buku dia membaca.'),
        T('Membaca dengan teliti dia buku.'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Une la palabra con su posición'),
      pairs: [
        { a: T('{cepat}'), b: T('después del verbo') },
        { a: T('{tidak}'), b: T('antes del verbo') },
        { a: T('{jangan}'), b: T('antes del verbo, en orden') },
        { a: T('{sudah}'), b: T('antes del verbo, aspecto') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
