import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  section: T('Partícula'),
  title: T('Los cuantificadores'),
  subtitle: T('ada, adalah, banyak, semua, lebih, paling: el par que más bloquea la lectura'),
  body: C(`## Existir y ser

Dos verbos que el portugués traduce con uno y que no hacen lo mismo.

{ada} responde {¿existe?}. {Ada masalah} es «hay un problema», {Ada tiga buku di meja} es «hay tres libros sobre la mesa», {Ada orang di pintu} es «hay alguien en la puerta». El sujeto de {ada} queda sin identificar: la oración dice que la cosa está ahí y no dice nada más. Por eso {ada} es a la vez verbo de existir y cuantificador existencial, y es el segundo uso el que aparece todo el tiempo: {ada} solo, con el sentido de «alguno», es más natural que cualquier palabra inventada para eso.

{adalah} responde {¿qué es?}. {Ini adalah buku} es «esto es un libro», {Buku itu adalah milikku} es «ese libro es mío». El sujeto queda identificado o clasificado, y nunca desaparece: en casi toda oración con {adalah} se puede preguntar «¿cuál?».

Confundir los dos es el error más caro que hay en indonesio para quien lee. Una oración que el lector traduce por «es» puede ser {ada} en el original, y el resultado es una traducción que afirma una identidad que el texto nunca afirmó.

## La prueba que los separa

Una pregunta lo resuelve: **¿la oración responde a «¿existe?» o a «¿qué es?»**

{Ada buku baru di toko.} Responde «¿existe?». Hay un libro nuevo, y la oración no dice nada más. Portugués: «Hay un libro nuevo en la tienda».

{Buku itu adalah buku baru.} Responde «¿qué es?». Identifica el libro. Portugués: «Ese libro es un libro nuevo».

{Hanya ada satu jalan ke kota.} Responde «¿existe?». Un camino, y solo uno. {Jalannya adalah satu-satunya jalan.} Responde «¿qué es?».

El par tiene una asimetría más que atrapa: {ada} se niega con {tidak} ({tidak ada}, «no hay») y con {bukan} ({bukan ada}, «no existe»); {adalah} se niega con {bukan} ({bukan benar}, «no es cierto») y con {tidak} en las preguntas ({tidak apakah...}). Y la respuesta a un {adalah} negativo es siempre {bukan}, nunca {tidak}: {Ini bukan buku}, no {Ini tidak buku}.

Un caso especial: con un pronombre como sujeto, {adalah} a veces desaparece en el habla corriente. {Saya murid} «soy estudiante» es coloquial y enfático; {Saya adalah murid} es la forma completa y es la que aparece en los textos.

## Cuantificadores: cuánto, cuál, el más

Todo el grupo contesta a preguntas distintas, y su posición es la misma: ante el sustantivo.

{banyak} es el más común y significa «muchos». {sedikit} es lo contrario, «pocos», y con sustantivos contables significa «pocos» y no «pequeño». {beberapa} es «algunos», normalmente entre dos y cuatro, y es más formal que {sedikit}. {semua} es «todos», {seluruh} es «todo, entero», y los dos se distinguen poco en la práctica.

{cukup} es «bastante», y puede ir ante el sustantivo ({cukup waktu} «tiempo bastante») o tras el verbo ({sudah cukup} «ya basta»). {agak} es «un poco», y {banyak} con verbo es «mucho»: {banyak bekerja} «trabaja mucho».

La parte que el portugués resuelve con flexión es la comparación. **{lebih} más adjetivo es el comparativo, {paling} más adjetivo es el superlativo.** {lebih besar} «mayor», {paling besar} «el mayor», {kurang baik} «peor», {sebanyak} «tanto como».

El superlativo de {paling} no se traduce con «más»: es la misma palabra con sentido de grado máximo, y quien escribe {yang paling lebih baik} ha duplicado el grado.

Y hay un cuantificador que no cuantifica nada: {itu}, que ya apareció como demostrativo. {buku itu} es «ese libro», no «el libro entero».

## Lo que existe en el mundo

{1 Juan 2:15} es un versículo hecho casi solo de cuantificadores, y por eso es una buena prueba de lectura. El texto pide al lector que no ame {dunia} ni {apa yang ada di dalam dunia}, y el segundo {yang} es la nominalización del verbo {ada}.

El contraste está en {ada}, y es un contraste de alcance. El versículo habla de dos cosas: lo que existe y lo que está dentro de eso. El portugués lo resuelve con «el mundo y todo lo que hay en él», una construcción pesada que suena a novela. El indonesio repite la misma palabra: {dunia}, y luego {apa yang ada di dalam dunia}. El lector que conoce {ada} como «ser» leerá «el mundo y lo que está en el mundo», que es el mismo sentido con un enlace equivocado; el lector que conoce {ada} como «haber» llega sin esfuerzo.

Ese es el motivo de que la lección exista. Un par de palabras decide si alguien entiende un versículo, y nadie enseña ese par solo porque sea pequeño.`),
  vocab: [
    V('ada', 'ada', 'haber, existir; alguno'),
    V('adalah', 'adalah', 'ser, es (identifica)'),
    V('banyak', 'banyak', 'muchos; mucho'),
    V('sedikit', 'sedikit', 'pocos; poco'),
    V('beberapa', 'beberapa', 'algunos'),
    V('semua', 'semua', 'todos'),
    V('seluruh', 'seluruh', 'todo, entero'),
    V('cukup', 'cukup', 'bastante'),
    V('agak', 'agak', 'un poco'),
    V('lebih', 'lebih', 'más (comparativo)'),
    V('paling', 'paling', 'el más (superlativo)'),
    V('kurang', 'kurang', 'menos; peor'),
    V('masalah', 'masalah', 'problema'),
    V('toko', 'toko', 'tienda'),
    V('dunia', 'dunia', 'mundo'),
    V('bukan', 'bukan', 'no (verbo de cópula y de sustantivo)'),
    V('tidak', 'tidak', 'no (verbo)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{ada} responde «¿existe?»; {adalah} responde «¿qué es?». El sujeto de {ada} no queda identificado.',
      ),
    },
    {
      n: '2',
      text: T(
        'El singular de {ada} con el sentido de «alguno» es {ada} solo; {adanya} es la forma nominalizada.',
      ),
    },
    {
      n: '3',
      text: T(
        'La respuesta a un {adalah} negativo es siempre {bukan}: {ini bukan buku}, nunca {ini tidak buku}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{lebih} más adjetivo es comparativo y {paling} más adjetivo es superlativo; {kurang} es «menos» y «peor».',
      ),
    },
    {
      n: '5',
      text: T(
        'Cuantificadores como {banyak}, {sedikit}, {semua} y {cukup} van ante el sustantivo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Tener y existir'),
      text: T(
        'En portugués «tener» y «haber» casi se han fundido. En indonesio no: existir es {ada}, tener es {punya} o {milik}. {Saya punya rumah} es «tengo una casa», {ada rumah} es «hay una casa». Confundirlos invierte la dirección de la posesión.',
      ),
    },
    {
      label: T('El alcance de ada'),
      text: T(
        '{ada} cubre toda la cláusula como cuantificador existencial, y por eso su alcance es amplio: {ada yang benar} es «hay algo correcto», no «existe lo que es verdadero» en sentido estricto.',
      ),
    },
  ],
  examples: [
    { text: 'Ada masalah besar di sini.', gloss: T('Hay un gran problema aquí.') },
    { text: 'Ada tiga buku di meja.', gloss: T('Hay tres libros sobre la mesa.') },
    { text: 'Buku itu adalah buku baru.', gloss: T('Ese libro es un libro nuevo.') },
    { text: 'Ini bukan buku.', gloss: T('Esto no es un libro.') },
    { text: 'Banyak orang datang hari itu.', gloss: T('Mucha gente vino aquel día.') },
    { text: 'Sedikit waktu tersisa.', gloss: T('Queda poco tiempo.') },
    { text: 'Semua kitab kudus.', gloss: T('Toda la Escritura.') },
    { text: 'Rumah ini lebih besar dari itu.', gloss: T('Esta casa es mayor que aquella.') },
    { text: 'Inilah yang paling penting.', gloss: T('Esto es lo más importante.') },
    { text: 'Hanya ada satu jalan ke kota.', gloss: T('Solo hay un camino hacia la ciudad.') },
  ],
  tables: [
    {
      caption: T('O teste entre ada e adalah'),
      head: ['Pergunta', 'Verbo', 'Frase', 'Leia como'],
      rows: [
        ['existe?', 'ada', 'Ada masalah di sini.', 'Há um problema aqui'],
        ['existe?', 'ada', 'Ada orang di pintu.', 'Há alguém na porta'],
        ['existe?', 'ada', 'Ada tiga buku.', 'Há três livros'],
        ['o que é?', 'adalah', 'Ini adalah buku.', 'Isto é um livro'],
        ['o que é?', 'adalah', 'Buku itu milikku.', 'Aquele livro é meu'],
        ['o que é?', 'adalah', 'Dia adalah guru.', 'Ele é professor'],
      ],
    },
    {
      caption: T('Os quantificadores e o que respondem'),
      head: ['Palavra', 'Pergunta', 'Exemplo', 'Leia como'],
      rows: [
        ['ada', 'existe?', 'ada masalah', 'há um problema'],
        ['banyak', 'quanto?', 'banyak buku', 'muitos livros'],
        ['sedikit', 'quanto?', 'sedikit waktu', 'pouco tempo'],
        ['beberapa', 'quanto?', 'beberapa hari', 'algunos días'],
        ['semua', 'qual?', 'semua orang', 'toda la gente'],
        ['cukup', 'quanto basta?', 'cukup waktu', 'tiempo bastante'],
        ['lebih', 'comparação', 'lebih besar', 'mayor'],
        ['paling', 'grau máximo', 'paling besar', 'el mayor'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Ada dua orang di depan pintu}, ¿cuántos hay y qué afirma la oración?'),
    options: [
      T('dos; que hay dos personas ahí'),
      T('dos; que la puerta es azul'),
      T('no se sabe; que hay alguien'),
      T('dos; que son hermanos'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el verbo de identificación: «esto es un libro» = Ini ___ buku.'),
      answer: 'adalah',
      hint: T('El verbo que responde «¿qué es?».'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo se dice «lo más importante de todos»?'),
      options: [
        T('paling penting dari semua'),
        T('lebih penting'),
        T('paling lebih penting'),
        T('lebih paling penting'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Une el cuantificador con su valor'),
      pairs: [
        { a: T('{ada}'), b: T('existencia') },
        { a: T('{semua}'), b: T('totalidad') },
        { a: T('{lebih besar}'), b: T('mayor') },
        { a: T('{paling besar}'), b: T('el mayor') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
