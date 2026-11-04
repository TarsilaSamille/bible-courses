import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  section: T('Verbo'),
  title: T('El verbo y sus dos formas: la terminación y el -{ru}'),
  subtitle: T(
    'El verbo japonés flexiona por la punta y no tiene ni persona, ni número, ni género — por eso la lección es corta y la flexión es todo',
  ),
  body: C(`
## El verbo flexiona por la punta

El verbo japonés no flexiona por persona ni por número. "Yo como" y "nosotros comemos" son la misma palabra: **no hay plural, nada concuerda con el sujeto, nada cambia con "yo" o "tú"**. Lo que cambia es la punta de la palabra. Por eso la flexión está siempre al final y nunca al principio, y por eso se escribe en kana aunque el resto del verbo sea kanji.

El verbo {naru} "ser, convertirse" no es una palabra sola: es {nar}, la raíz que significa "convertirse", más la partícula {u}. Es ese {u} el que flexiona. Lo mismo vale en toda la lengua. Quien empieza yerra porque busca la flexión al principio de la palabra; está en el último sonido, y ese solo sonido lleva toda la información.

## Dos grupos, una terminación cada uno

Los verbos japoneses se dividen en dos grupos, y la diferencia entre ellos es una letra al final.

El verbo **godan** termina en {u} y flexiona la última sílaba de su raíz. {taberu} "comer" pasa a *tabe-*, {hanasu} "hablar" pasa a *hanashi-*, {shinu} "morir" pasa a *shini-*, {kaku} "escribir" pasa a *kaki-*. Fíjate en que la vocal anterior a la {u} también se alarga: *hanasu* → *hanashimasu*, {shinu} → *shinimasu*. El verbo traga partícula como el río traga la orilla.

El verbo **ichidan** termina en {ru} y flexiona quitando esa {ru}. {miru} "ver" pasa a *mi-*, {neru} "dormir" pasa a *ne-*, {iru} "estar" pasa a *i-*. Estos tienen una sola {ru}, y es la final: por eso los llaman verbos "ruizinhos". El truco para no errar nunca cabe en el bolsillo: **quita la {ru} y mira si lo que sobra tiene sentido en presente**. De {miru} sobra *mi*, que es un verbo entero, y eso es ichidan. De {taberu} sobra *tabe*, que no significa nada por sí solo, y de {hanasu} sobra *hana*, que significa "flor" y por eso te engaña: eso es godan. Cuando la {ru} cae y sobra una palabra que existe, es ichidan; cuando sobra un trozo, es godan.

Dos verbos se escapan de todo esto. Suru "hacer" flexiona entero: *shita*, *shite*, *shite wa ikenai*. Kuru "venir" cambia la raíz entera: {kuru} pasa a *kita*, *kite*, y el negativo pasa a *kuranai*. Son los únicos dos entre los verbos más usados de la lengua, y por eso son los dos que todo el mundo memoriza la primera semana.

## Negación: el "no" viene después

El japonés hace lo contrario que el portugués, y hay que decirlo dos veces porque es el error número uno. En portugués el "no" va antes: "não como". En japonés el "no" va después, pegado al verbo, con la forma {aru}: {naru} + {nai} = *naranai*, "no es", "no llega a ser".

Y hay un detalle que casi nadie espera: **la forma negativa cambia la raíz del verbo**. {naru} pasa a *naranai*, y la vocal del presente no sobrevive: lo que queda es *naran-* + *ai*. Lo mismo le pasa a {kuru}, que pasa a *kuranai*. Por eso la {ru} de un ichidan y la {u} de un godan se comportan distinto en el negativo, aunque la letra sea la misma.

Hay una excepción que hay que conocer porque aparece todo el tiempo. El final {masu} es el registro polido, y *narimasu* es el "ser" formal. Su negativo no es *masenai*: es *imasen*. El polido baja un registro entero en lugar de convertirse en un negativo formal. *Narimasen desu* es el "no es" cortés de quien habla, y la diferencia es real, no estilística.

## Plano, polido y honorífico

El verbo tiene dos registros que vas a elegir todo el tiempo. El plano es el verbo sin nada: {naru}, {taberu}, *shita*. El polido añade {masu}, y el verbo *desu* entra como final de frase: *narimasu desu*. Se usa el polido con desconocidos; el texto narrativo largo usa el plano casi siempre. La Biblia japonesa es un texto narrativo, y por eso sus verbos aparecen en la forma plana. Leer "en el principio era la Palabra" como *genki desu* es leer la traducción con la gramática equivocada.

Por encima de los dos está el honorífico, que es tratar al otro como más alto: *itashimasu*, "hacer" con reverencia. No aparece en la escritura bíblica, pero es el registro de las cartas y de las oraciones.

Lo que el verbo japonés no tiene también cuenta: sin género, sin persona, sin número y sin tiempo verbal propio. El tiempo de verdad viene de las partículas, *ta*, *te*, *maeni*, *mashita*. Una forma como *suru*, "hacer", no dice nada sobre cuándo ni quién.

## El verbo de Juan 1:1

El primer versículo de Juan es el mejor ejemplo de todo esto. "En el principio era la Palabra" es *hazimeni kotoba ga atta*: el verbo es {aru} "existir, estar", y la flexión es la del pasado, *atta*. Es el verbo de existencia, no de acción: la Palabra no hace algo, la Palabra está ahí. Y es el verbo más importante de todo el capítulo, porque los otros verbos de Juan son acciones de Jesús, mientras el versículo que abre el libro no tiene ninguna acción, tiene presencia. Quien aprendió a leer {aru} al principio de la Biblia leyó el versículo correcto.
`),
  vocab: [
    V('naru', 'なる', 'ser; convertirse (naru)'),
    V('nar', 'なる', 'raíz de "convertirse" (nar)'),
    V('taberu', '食べる', 'comer (taberu)'),
    V('hanasu', '話す', 'hablar; hablar con (hanasu)'),
    V('shinu', '死ぬ', 'morir (shinu)'),
    V('kaku', '書く', 'escribir (kaku)'),
    V('miru', '見る', 'ver; mirar (miru)'),
    V('neru', '寝る', 'dormir (neru)'),
    V('iru', 'いる', 'estar; quedarse (iru)'),
    V('ikiru', '生きる', 'vivir (ikiru)'),
    V('kuru', '来る', 'venir (kuru)'),
    V('suru', 'する', 'hacer (suru)'),
    V('aru', 'ある', 'ser; existir; estar (aru)'),
    V('naranai', 'ならない', 'no ser; no llegar a ser (naranai)'),
    V('kuranai', '来ない', 'no venir (kuranai)'),
    V('nai', 'ない', 'negación: el final que va después del verbo (nai)'),
    V('masu', 'ます', 'final del registro polido (masu)'),
    V('u', 'う', 'final /u del verbo godan (u)'),
    V('ru', 'る', 'final /ru del verbo ichidan (ru)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El verbo flexiona por la punta: {naru} es {nar} más la partícula {u}, y es ese {u} el que flexiona.',
      ),
    },
    {
      n: '2',
      text: T(
        'Godan termina en {u} y flexiona la última sílaba de la raíz ({taberu} pasa a *tabe-*, {hanasu} pasa a *hanashi-*); ichidan termina en {ru} y flexiona quitando esa {ru} ({miru} pasa a *mi-*).',
      ),
    },
    {
      n: '3',
      text: T(
        'Truco de bolsillo: quita la {ru}. Si lo que sobra es una palabra que existe, es ichidan; si sobra un trozo, es godan.',
      ),
    },
    {
      n: '4',
      text: T(
        'La negación viene después del verbo, con {aru}: {naru} pasa a *naranai*, {kuru} pasa a *kuranai*. El final {masu} tiene su propio negativo, *imasen*.',
      ),
    },
    {
      n: '5',
      text: T(
        'El verbo no tiene género, ni persona, ni número, ni tiempo verbal: el tiempo viene de las partículas.',
      ),
    },
  ],
  notes: [
    {
      label: T('El truco de la -ru'),
      text: T(
        'Vale más que cualquier tabla de conjugación. {miru} → *mi*, un verbo por sí solo: ichidan. {taberu} → *tabe*, que no es nada: godan. El único riesgo es una palabra que exista por casualidad, como *hana*, "flor", que sale de {hanasu}; ahí la flexión real lo resuelve.',
      ),
    },
    {
      label: T('Por qué la lección es corta'),
      text: T(
        'Como no hay persona ni número que marcar, una sola línea de flexión resuelve el verbo entero. La tabla de flexión del japonés tiene muy pocas formas, y lo que hace variar el texto es la partícula que viene después — asunto de la lección 8.',
      ),
    },
  ],
  examples: [
    {
      text: '言葉があった',
      gloss: T(
        'hazimeni kotoba ga atta — en el principio la Palabra estaba ahí (la Palabra *era*)',
      ),
    },
    {
      text: 'パンを食べます',
      gloss: T('pan o tabemasu — como pan (raíz plana más el {masu} polido, ichidan)'),
    },
    {
      text: '紙を書きました',
      gloss: T('kami o kakimashita — escribí en un papel (plano, pasado, godan)'),
    },
    {
      text: '先生が来ません',
      gloss: T('sensei ga kimasen — el profesor no viene ({kuru} más el negativo *imasen*)'),
    },
    {
      text: 'お書きになりました',
      gloss: T('okakini narimashita — usted lo escribió (honorífico)'),
    },
  ],
  tables: [
    {
      caption: T('Las dos terminaciones, una al lado de la otra'),
      head: [T('Grupo'), T('Termina en'), T('Cómo flexiona'), T('Ejemplo')],
      rows: [
        [T('godan'), T('{u}'), T('cambia la última sílaba de la raíz'), T('{taberu} → *tabe-*')],
        [T('godan'), T('{u}'), T('la vocal también se alarga'), T('{hanasu} → *hanashi-*')],
        [T('godan'), T('{u}'), T('la vocal también se alarga'), T('{kaku} → *kaki-*')],
        [T('ichidan'), T('{ru}'), T('quita la {ru} y listo'), T('{miru} → *mi-*')],
        [T('ichidan'), T('{ru}'), T('quita la {ru} y listo'), T('{neru} → *ne-*')],
      ],
    },
    {
      caption: T('Los que no obedecen ninguna regla'),
      head: [T('Verbo'), T('Pasado'), T('Negativo'), T('Qué pasa')],
      rows: [
        [
          T('{suru}'),
          T('*shita*'),
          T('*shinai*'),
          T('flexiona entero: *shite*, *shite wa ikenai*'),
        ],
        [T('{kuru}'), T('*kita*'), T('*kuranai*'), T('cambia la raíz entera, incluso el negativo')],
        [
          T('{ikiru}'),
          T('*ikita*'),
          T('*ikinai*'),
          T('termina en {ru} pero flexiona como godan: *iki-*'),
        ],
        [
          T('{aru}'),
          T('*atta*'),
          T('*nai*'),
          T('irregular: la {u} se vuelve otro sonido en el pasado'),
        ],
      ],
    },
    {
      caption: T('Tres registros, tres formas de decir lo mismo'),
      head: [T('Registro'), T('Verbo'), T('Frase'), T('Dónde se usa')],
      rows: [
        [T('plano'), T('{naru}'), T('*naru desu*'), T('texto corrido, como la narrativa bíblica')],
        [
          T('polido'),
          T('*narimasu*'),
          T('*narimasu desu*'),
          T('habla corriente; negativo en *narimasen*'),
        ],
        [
          T('honorífico'),
          T('*itashimasu*'),
          T('*itashimasu*'),
          T('cartas, oraciones, tratar al otro con respeto'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('El verbo {miru} "ver" es ichidan: se quita la {ru}. ¿Qué raíz sobra?'),
    options: [T('mi'), T('mir'), T('m'), T('miru')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Completa el negativo de {naru} "convertirse", que cambia la raíz y añade {aru}: nara____',
      ),
      answer: 'nai',
    },
    {
      kind: 'match',
      prompt: T('Une el verbo con su grupo o irregularidad'),
      pairs: [
        { a: T('{miru}'), b: T('ichidan: quita la {ru}') },
        { a: T('{taberu}'), b: T('godan: cambia la última sílaba de la raíz') },
        { a: T('{kuru}'), b: T('irregular: el pasado es *kita*') },
        { a: T('{ikiru}'), b: T('termina en {ru} pero es godan') },
        { a: T('{aru}'), b: T('verbo de existencia: "era", "está ahí"') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('En "en el principio ERA la Palabra" (Juan 1:1), ¿qué verbo usa el versículo?'),
      options: [T('{kuru}'), T('{suru}'), T('{aru}'), T('{miru}')],
      answer: 2,
    },
  ],
};
