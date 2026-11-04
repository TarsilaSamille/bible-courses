import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  section: T('Kanji'),
  title: T('La misma lectura y la misma escritura: cómo un kanji tiene dos voces'),
  subtitle: T(
    'Todo ideograma tiene una lectura sino-japonesa y una nativa, y es la palabra — no el dibujo — la que decide cuál de las dos suena',
  ),
  body: C(`
## Un ideograma, dos voces

Todo kanji tiene dos lecturas, y las dos son igualmente verdaderas. La **on** (on'yomi) es la lectura sino-japonesa: el ideograma llegó a Japón junto con los textos de China, y se lee con el sonido que tenía en mandarín. La **kun** (kun'yomi) es la lectura nativa, el sonido que el mismo dibujo ya tenía en Japón antes de la importación. Las dos viven en el mismo carácter, y ninguna de las dos es la equivocada.

{生} es el ejemplo más limpio que existe. En on es {sei}, o *shō* cuando el tono cambia por causa del ideograma vecino, y eso es lo que aparece en {gakusei} "estudiante", donde los dos ideogramas son on. En kun es {ikiru}, y eso es lo que aparece en el verbo "vivir". El ideograma no se ha movido de sitio: ha cambiado la palabra, y la palabra elige cuál de las dos voces suena.

Por eso dos ideogramas que juntos forman una palabra pueden sonar cada uno a su manera, y por eso el mismo ideograma escrito puede sonar de formas diferentes según la palabra que está formando. Quien empieza trata esto como un defecto del sistema: la misma letra debería sonar siempre igual. No debería, y es precisamente porque no suena siempre igual lo que el par sigue vivo después de mil años.

## La regla de bolsillo: compuesto pide on, verbo termina en kun

La regla práctica cabe en una frase. Cuando los dos ideogramas forman un sustantivo compuesto, los dos tienden a ser on; cuando hay verbo, el último ideograma tiende a ser kun, porque es el que carga la flexión.

Del lado del on: {gakusei}, {kyō} "hoy", {sensei} "profesor". Los tres son compuestos y los tres son on enteros. {kyō} tiene una sola lectura precisamente porque no tiene ningún verbo dentro, y las palabras hechas solo de ideogramas son las más fáciles de adivinar. Del lado del kun: un verbo flexionado suele ir en kun en el último ideograma, con la punta en kana.

El caso que destapa el sistema entero es {ikizokuru}, "sobrevivir": el primer ideograma está en kun, el mismo {ikiru} "vivir", y el segundo en on. Las entradas de diccionario marcan ese segundo con un asterisco, y el asterisco es lo único que el lector tiene que aprender a mirar: avisa de que esa lectura solo existe ahí, dentro de esa palabra. Lo mismo pasa en {tegami}, "carta", con la mano en kun y el papel en on.

## La familia del kun, y los okurigana

Una lectura kun casi nunca es única. El ideograma {生} tiene cuatro verbos distintos en su lectura nativa: {ikiru} "vivir", {umoru} "nacer, dar a luz", {hayasu} "hacer crecer, criar, educar" y {nou} "cultivar". Son verbos distintos, con sujetos y tiempos distintos, y lo único que tienen en común es el dibujo. La lista de un ideograma es una entrada de diccionario hecha de verbos que no tienen nada en común fuera de ella, y el contexto es quien elige.

La otra cara de la misma moneda es el {okurigana}: las kana que acompañan al ideograma y cargan la flexión. {kaita}, "escribió", es el ideograma de {kaku}, "escribir" más la terminación, y la terminación va en kana aunque todo lo demás sea ideograma. El reparto del trabajo es el más limpio que tiene una lengua: el ideograma se queda con el significado y la kana con la conjugación. El kanji es el sustantivo de la acción, y la kana es el verbo.

La cuenta cierra con lo que mostró la flexión: vive en la punta de la palabra, y la punta es siempre kana. Cuando aparece flexión, se escribe en kana. Esa regla es la que hace que {kaita} exista en dos trozos y {gakusei} en uno solo.

## Lo que la Biblia hace con las dos voces

La traducción japonesa de la Biblia sigue un patrón que el lector no tiene que deducir: **kanji para los sustantivos, kana para los verbos**. Y por eso la lectura on domina el texto: los sustantivos son los que llegaron hechos de China, con el nombre y el sonido juntos, y los verbos que quedaron en kana son los que cargan la flexión.

Los verbos de Dios son casi todos on, y la lectura on es la que suena más antigua, más escrita: "salvar" es *sukū*, "redimir" es *aganau*, los dos leídos en on. "Crear" es la excepción honesta: *tsukuru* es kun. Tres verbos, dos sistemas de lectura, ninguno memorizado, todos aprendidos en el vocabulario, como todo lo demás.

El ideograma de la altura es el ejemplo más bonito de todos. {noboru} es el kun: "subir", el verbo del día a día, el que se dice de una escalera y de una montaña. {tō} es el on: el "alto" de los títulos más arcaicos, el "Altísimo Señor" de las traducciones viejas, cuando el nombre divino se escribía con el dibujo de la altura y no con el de la persona. Los dos conviven sin problema, uno en el verbo común y otro en el título.

Y, por fin, la escala, porque el lector tiene que saber dónde está pisando: hay unos 13.000 kanji en uso en el japonés de hoy, y el conjunto {jōyō} reúne 2.100 de ellos. Es el {jōyō} el que se aprende en la escuela y es lo primero que encuentra el lector. Nadie va a aprender 13.000: todo el mundo aprende los que aparecen, y la lista de un ideograma es corta al lado de la lista entera.
`),
  vocab: [
    V('sei', '生', 'lectura sino-japonesa del ideograma del nacimiento: vida, nacimiento (sei)'),
    V('ikiru', '生', 'lectura nativa del mismo ideograma: vivir, estar vivo (ikiru)'),
    V('gakusei', '学生', 'estudiante (gakusei) — los dos ideogramas en lectura on'),
    V('sensei', '先生', 'profesor, maestro (sensei) — dos on; el kun del ideograma sigue al lado'),
    V('kyō', '今日', 'hoy (kyō) — una sola lectura, porque no hay verbo dentro'),
    V('umoru', '生', 'kun: nacer, dar a luz (umoru)'),
    V('hayasu', '生', 'kun: hacer crecer, criar, educar (hayasu)'),
    V('nou', '生', 'kun: cultivar (nou)'),
    V('ikizokuru', '生き残る', 'sobrevivir (ikizokuru) — kun y on en la misma palabra'),
    V('tegami', '手紙', 'carta (tegami) — kun y on en la misma palabra'),
    V('kaku', '書', 'kun: escribir (kaku)'),
    V('kaita', '書く', 'escribió, escrito (kaita) — el ideograma más los okurigana'),
    V('okurigana', '送り仮名', 'kana que acompaña al ideograma y carga la flexión (okurigana)'),
    V('tō', '上', 'on: alto, el Altísimo de los títulos arcaicos (tō)'),
    V('noboru', '上', 'kun: subir (noboru)'),
    V('jōyō', '常用漢字', 'el conjunto oficial de los kanji de uso común (jōyō)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Todo kanji tiene dos lecturas: la **on** sino-japonesa, que llegó con los textos de China, y la **kun** nativa, que el dibujo ya tenía aquí. Ninguna de las dos es la equivocada.',
      ),
    },
    {
      n: '2',
      text: T(
        'Un sustantivo compuesto de dos ideogramas tiende a tener los dos en **on** ({gakusei}, {kyō}, {sensei}); una palabra con verbo suele tener el último en **kun**, porque es el que carga la flexión.',
      ),
    },
    {
      n: '3',
      text: T(
        'Una lectura kun casi nunca es única: {ikiru}, {umoru}, {hayasu} y {nou} son cuatro verbos distintos de un ideograma, y el contexto elige cuál de ellos es el bueno.',
      ),
    },
    {
      n: '4',
      text: T(
        'La flexión se escribe en kana aunque el resto sea kanji: {kaita} es el ideograma {kaku} más la terminación. Es la lección 7 aplicada — la punta del verbo es siempre kana.',
      ),
    },
    {
      n: '5',
      text: T(
        'El mismo ideograma escrito puede sonar de formas distintas según la palabra. El asterisco de una entrada significa que esa lectura solo existe dentro de esa palabra.',
      ),
    },
  ],
  notes: [
    {
      label: T('On y kun en la misma palabra'),
      text: T(
        'Los dos sistemas a veces conviven dentro de una sola palabra, y esos son los casos que marcan las entradas. {ikizokuru} une el kun de {ikiru} con el on del ideograma siguiente; {tegami} hace lo mismo con la mano y el papel. El asterisco existe para decir "esto aquí solo".',
      ),
    },
    {
      label: T('La lectura on no es un error ni una lectura extranjera'),
      text: T(
        'La lectura on es la que trae el ideograma cuando está escrito en un texto compuesto en chino, y así entró en el habla: el japonés antiguo también componía palabras con caracteres chinos. Los dos sistemas son un préstamo y un uso nativo conviviendo — y conviven desde hace mil años, lo que solo pasa cuando los dos sirven.',
      ),
    },
  ],
  examples: [
    { text: '学生', gloss: T('sei gakusei — un estudiante; dos ideogramas, dos on') },
    {
      text: '生きる',
      gloss: T('ikiru — vivir; el mismo ideograma del ejemplo anterior, ahora en kun'),
    },
    {
      text: '書いた',
      gloss: T('kaita — escribí; el ideograma carga el sentido y la kana carga la flexión'),
    },
    { text: '生き残る', gloss: T('ikizokuru — sobrevivir; kun y on en la misma palabra') },
    {
      text: '世界を救う',
      gloss: T('sekai o sukū — salva al mundo; el sustantivo es ideograma y el verbo es on'),
    },
  ],
  tables: [
    {
      caption: T('Las dos voces del mismo ideograma'),
      head: [
        T('Lectura'),
        T('De dónde viene'),
        T('Cómo suena el mismo ideograma'),
        T('Dónde la encuentras'),
      ],
      rows: [
        [T('on'), T('de los textos de China'), T('{生} → {sei}'), T('{gakusei}, {kyō}, {sensei}')],
        [T('kun'), T('del japonés antiguo'), T('{生} → {ikiru}'), T('{ikiru}, {kaita}')],
        [
          T('las dos'),
          T('están en el mismo carácter'),
          T('{上} → {tō} y {noboru}'),
          T('la palabra decide cuál suena'),
        ],
      ],
    },
    {
      caption: T('La familia del kun: cuatro verbos, un ideograma'),
      head: [T('Kun'), T('Qué significa'), T('Dónde aparece')],
      rows: [
        [T('{ikiru}'), T('vivir, estar vivo'), T('el verbo "vivir"')],
        [T('{umoru}'), T('nacer, dar a luz'), T('el nacimiento de un niño')],
        [T('{hayasu}'), T('hacer crecer, criar'), T('educar a alguien; dejar crecer')],
        [T('{nou}'), T('cultivar'), T('el trabajo de la tierra')],
      ],
    },
    {
      caption: T('On, kun, o las dos dentro de una palabra'),
      head: [T('Palabra'), T('Cada ideograma'), T('Lo que sale')],
      rows: [
        [T('{kyō}'), T('on + on'), T('una sola lectura: no hay verbo dentro')],
        [
          T('{sensei}'),
          T('on + on'),
          T('los dos en on; el kun del ideograma sigue existiendo al lado'),
        ],
        [
          T('{ikizokuru}'),
          T('kun + on'),
          T('el asterisco marca el on como uso exclusivo de la palabra'),
        ],
        [T('{tegami}'), T('kun + on'), T('la mano en kun y el papel en on, en la misma palabra')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {gakusei}, ¿cuáles son las dos lecturas?'),
    options: [
      T('las dos en kun'),
      T('las dos en on'),
      T('la primera en on y la segunda en kun'),
      T('la primera en kun y la segunda en on'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Completa "escribió" con el ideograma del verbo escribir y su flexión en kana: ____いた',
      ),
      answer: '書',
    },
    {
      kind: 'match',
      prompt: T('Une la lectura con lo que es'),
      pairs: [
        { a: T('{gakusei}'), b: T('los dos ideogramas en on') },
        { a: T('{ikiru}'), b: T('el ideograma del ejemplo anterior, leído en kun') },
        { a: T('{hayasu}'), b: T('kun: hacer crecer, criar') },
        { a: T('{nou}'), b: T('kun: cultivar') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'Según la regla de bolsillo, un sustantivo de dos ideogramas como {sensei} suele leerse:',
      ),
      options: [
        T('los dos en kun'),
        T('los dos en on'),
        T('el primero en kun y el segundo en on'),
        T('el primero en on y el segundo en kun'),
      ],
      answer: 1,
    },
  ],
};
