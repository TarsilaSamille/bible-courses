import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  section: T('Lectura'),
  title: T('**{kanbun}**: leer una frase china en el orden del japonés'),
  subtitle: T(
    'Durante siglos los japoneses leyeron los textos chinos por el sonido, y siguen leyéndolos: el orden es el del japonés, el verbo cierra cada cláusula y las marcas a la derecha dicen cuál carácter manda sobre cuál',
  ),
  body: C(`
## El carácter como fonema

Durante siglos los japoneses leyeron textos chinos sin hablar la lengua de esos textos, y el truco era tratar cada carácter como si fuera una letra. El {manyōgana} escribía una sílaba eligiendo el carácter que tenía ese sonido en la boca del lector, no el sonido que el carácter tenía en China. Quien necesecase el sonido "hana" tomaba el carácter de la nariz, el mismo que hoy se lee *bi* en la lectura sinojaponesa y *hana* en la nativa.

Y aquí la lección de las dos lecturas es la clave, no un detalle. Si el carácter va a valer como letra, tiene que tener un solo sonido. Pero el kanji japonés tiene dos: el on y el kun. Un lector de {manyōgana} necesitaba conocer las dos lecturas para convertir el dibujo en fonema, y fue esa exigencia la que fijó las dos listas que el japonés sigue usando. La historia del {kanbun} nace de la letra: para escribir una lengua que no era la suya, Japón tuvo que resolver el problema de la ambigüedad del carácter.

## El orden es el del japonés

La frase más famosa es {ten} {ichi} {chi} {ni}. En China se lee como una enumeración seca: cielo, uno; tierra, dos, dos frases sin verbo alguno. En {kanbun} se convierte en dos frases, y son dos frases **japonesas**: una persona, cielo uno; dos personas, tierra dos. El nombre del lugar va antes del numeral, el numeral aparece marcado por la partícula que dice dónde, y el verbo cierra la cláusula. Es toda la lección de sintaxis aplicada a una frase que nunca fue japonesa.

Y aquí es donde el {kanbun} se separa de verdad del chino. El chino pone el verbo en medio de la frase y el objeto después; el japonés pone el verbo al final y el objeto antes. No existe una lectura "correcta" del par de caracteres: existen dos, y cada lengua hace la suya. Por eso pasar del {kanbun} al japonés corriente no es buscar palabra por palabra, es reescribir la frase en el orden de la lengua que la va a leer.

## Las marcas que no son parte de la palabra

Un texto de {kanbun} impreso parece no tener puntuación, y de hecho no tiene. En su lugar el lector japonés escribía el {konfutsugaki} sobre el texto: las marcas de lectura, dibujitos al lado de los caracteres que dicen cómo leerlos. Son dos familias, y las dos hay que conocer antes de la primera palabra.

La primera son los {kaeriten}, que dicen **qué carácter gobierna a cuál**, y no son palabras: son signos de puntuación con nombre de carácter. El {jōten} hace que el carácter de la izquierda gobierne al de la derecha; el {geten} hace que el de la derecha gobierne al de la izquierda. Cuando el que gobierna alcanza más de un carácter, cuenta con marcas numeradas: el {kazu-ten} vale para dos, y hay hasta cinco, porque en {kanbun} un verbo rara vez gobierna más que eso. La segunda familia es el {okurigana}, la kana que acompaña al carácter del verbo y carga la flexión, la misma división del trabajo de siempre, con el significado en el carácter y la conjugación en la kana.

Quien no conoce esas marcas lee el par al revés, y el error es silencioso: el texto sigue pareciendo chino, solo que queriendo otra cosa. Es el mismo riesgo de una cita latina sin puntuación, y la solución es la misma las dos veces: la marca no memoriza el texto, memoriza la lectura.

## El verbo para al final, y lo que queda del {kanbun}

La posición del verbo en {kanbun} es doble, y lo doble viene de la lección de flexión en la cláusula. El verbo va al final de cada cláusula, y una cláusula en {kanbun} es una frase: tiene verbo propio y se puede leer sola. Por eso, en un pasaje de tres cláusulas hay tres verbos, uno al final de cada una, y dos en medio del pasaje. La frontera entre las cláusulas la marca el verbo, exactamente como en el japonés corriente; quien busca el verbo al final del párrafo se equivoca dos veces.

Los caracteres de nombre propio ocupan el lugar del sujeto, y son nombres: personas, textos, lugares. Van antes del verbo, no admiten contador ni partícula, y es esa posición fija la que hace que un pasaje de {kanbun} se lea como una lista de nombres y de acciones. Por eso la poesía confuciana y los textos budistas son tan cortos: cada cláusula es una unidad breve y lo demás es nombre. Los tres clásicos chinos del currículo japonés, {daigaku}, {kōkyū} y {chūyaku}, se leen exactamente así, y quien estudió en Japón los leyó antes de leer cualquier novela en kana.

El {kanbun} no es una lengua viva: nadie conversa en {kanbun} hace siglos. Sobrevivió como **registro**, y es el registro formal de Japón, documentos públicos, editoriales de periódico, proyectos de ley, la prosa de los comités. Un texto escrito en {kanbun} es un texto que habla con autoridad. Y por eso duró tanto: cuando Japón necesitó escribir para el mundo, en el siglo diecinueve, ya tenía a mano un estilo escrito de alta precisión, y lo que abandonó fue leer a Confucio para pasar a leer al empresario chino.

El gancho final es bíblico, y vale la pena dibujarlo por simetría. La traducción japonesa de la Biblia no es {kanbun}: es japonés corriente con kanji. Pero Lucas y la iglesia primitiva escribían griego, y el método de un japonés que leyera griego era exactamente el método del {kanbun}, adaptar la lengua antigua al orden de la suya en vez de traducir palabra por palabra. La primera traducción japonesa del Nuevo Testamento, en 1873, es el primer ejemplo. Y el paralelo es el latín en Europa: una lengua muerta leída en el orden de otra, que acabó siendo estilo y no pretensión.
`),
  vocab: [
    V('kanbun', '漢文', 'la lectura de textos chinos en el orden del japonés (kanbun)'),
    V(
      'manyōgana',
      '万葉仮名',
      'el uso del carácter por su sonido japonés, y no por su sonido chino (manyōgana)',
    ),
    V(
      'konfutsugaki',
      '訓点',
      'las marcas que el lector escribe junto al texto, diciendo cómo leerlo (konfutsugaki)',
    ),
    V('kaeriten', '返り点', 'las marcas que dicen cuál carácter gobierna a cuál (kaeriten)'),
    V(
      'jōten',
      '上点',
      'marca que sube: el carácter de la izquierda gobierna al de la derecha (jōten)',
    ),
    V('geten', '下点', 'marca que baja: el de la derecha gobierna al de la izquierda (geten)'),
    V(
      'kazu-ten',
      '三点',
      'las marcas numeradas, de una a cinco, que cuentan hasta dónde llega el que gobierna (kazu-ten)',
    ),
    V('okurigana', '送り仮名', 'la kana que acompaña al carácter y carga la flexión (okurigana)'),
    V('ten', '天', 'cielo, firmamento (ten)'),
    V('chi', '地', 'tierra, suelo (chi)'),
    V('ichi', '一', 'uno (ichi)'),
    V('ni', '二', 'dos (ni)'),
    V(
      'daigaku',
      '大学',
      'el Gran Aprendizado, uno de los tres clásicos chinos del currículo japonés (daigaku)',
    ),
    V('kōkyū', '孝経', 'el Clásico de la Piedad Filial, uno de los tres clásicos (kōkyū)'),
    V('chūyaku', '中庸', 'la Doctrina del Medio, el tercero de los tres clásicos (chūyaku)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Leer {kanbun} es leer un texto chino en el orden del japonés: los mismos caracteres, otro orden de lectura.',
      ),
    },
    {
      n: '2',
      text: T(
        'En el {manyōgana} el carácter valía como letra, y para serlo tenía que tener un solo sonido — lo que obligaba a conocer las dos lecturas de la lección 12, el on y el kun.',
      ),
    },
    {
      n: '3',
      text: T(
        'El verbo va al final de cada cláusula, una vez por cláusula: un pasaje de tres cláusulas tiene tres verbos, y dos de ellos están en medio.',
      ),
    },
    {
      n: '4',
      text: T(
        'Las marcas {kaeriten} y {okurigana} no son partes de la palabra: el {jōten} hace que el de la izquierda gobierne al de la derecha, el {geten} al revés, y el {kazu-ten} cuenta hasta dónde llega el gobierno.',
      ),
    },
    {
      n: '5',
      text: T(
        'Un carácter de nombre propio es un nombre: va antes del verbo y no admite ni contador ni partícula.',
      ),
    },
  ],
  notes: [
    {
      label: T('El {manyōgana} creó la lista de nombres'),
      text: T(
        'Cada carácter usado como fonema ganó un nombre propio en la cabeza de los lectores — "el que suena hana", "el que suena ro" — y sobre una lista así construyó Japón los nombres de las cosas. Es la misma lista de la lección 12; allí se llama lectura, y cada línea tiene dos voces.',
      ),
    },
    {
      label: T('El latín de Europa es el mismo caso'),
      text: T(
        'El erudito europeo leyó latín durante siglos reordenándolo según el orden de su propia lengua, y el portugués es el resultado. El {kanbun} es la versión japonesa del mismo fenómeno, y ninguno de los dos es traducción: los dos son lectura.',
      ),
    },
  ],
  examples: [
    {
      text: '天一人',
      gloss: T(
        'hito, ten ni ichi — una persona, en el cielo una; el carácter del cielo gobierna el numeral que viene a su derecha',
      ),
    },
    {
      text: '地二人',
      gloss: T(
        'hito, chi ni ni — dos personas, en la tierra dos; la misma marca invertida, con el carácter de la derecha mandando',
      ),
    },
    {
      text: '學而時習之',
      gloss: T(
        'gaku, shite ji shishisu — aprender y repetirlo a su tiempo; el verbo viene en medio y al final, y las kana marcan la flexión',
      ),
    },
    {
      text: '大學之道',
      gloss: T(
        'daigaku no michi — el camino del Gran Aprendizado; los dos primeros caracteres son nombre propio de un texto',
      ),
    },
    {
      text: '溫故而知新',
      gloss: T(
        'on kyū o shite shinjitsu — conocer lo viejo y saber lo nuevo; tres verbos, tres cláusulas, cada una con el suyo',
      ),
    },
  ],
  tables: [
    {
      caption: T('La misma frase en tres órdenes'),
      head: [T('Lectura'), T('Dónde va el numeral'), T('Dónde va el verbo')],
      rows: [
        [
          T('el chino'),
          T('justo después del nombre, y la frase es una enumeración'),
          T('no hay verbo: la frase acaba en el numeral'),
        ],
        [
          T('el {kanbun}'),
          T('después del nombre, marcado por la partícula de lugar'),
          T('al final de cada cláusula, como en japonés'),
        ],
        [T('el español'), T('después del nombre'), T('en medio: "el cielo tiene una persona"')],
      ],
    },
    {
      caption: T('Las marcas de lectura y lo que cada una manda'),
      head: [T('Marca'), T('Dónde va'), T('Lo que dice')],
      rows: [
        [
          T('{jōten}'),
          T('a la izquierda de la pareja, bajo la línea'),
          T('el carácter de la izquierda gobierna al de la derecha'),
        ],
        [
          T('{geten}'),
          T('a la derecha de la pareja, bajo la línea'),
          T('el carácter de la derecha gobierna al de la izquierda'),
        ],
        [
          T('{kazu-ten}'),
          T('entre los caracteres, contando de uno a cinco'),
          T('hasta dónde llega el gobierno del carácter marcado'),
        ],
        [
          T('{okurigana}'),
          T('justo después del carácter del verbo'),
          T('qué flexión toma ese verbo en esta lectura'),
        ],
      ],
    },
    {
      caption: T('Dónde para el verbo en {kanbun}'),
      head: [T('Forma del pasaje'), T('Dónde está el verbo'), T('Por qué')],
      rows: [
        [
          T('una sola cláusula'),
          T('al final'),
          T('toda cláusula es una frase, y la frase lleva el verbo al final'),
        ],
        [
          T('dos o más cláusulas'),
          T('al final de cada una, y en medio del pasaje'),
          T('la frontera entre ellas la marca el verbo, como en la lección 15'),
        ],
        [
          T('nombres propios'),
          T('antes del verbo'),
          T('son quién hace la acción, no un sustantivo común ni un sujeto gramatical'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'En la lectura japonesa de "una persona, cielo uno", ¿qué carácter gobierna el numeral?',
    ),
    options: [
      T('el carácter del cielo, que está a la izquierda, por {jōten}'),
      T('el numeral, porque viene después'),
      T('el carácter del cielo, que está a la izquierda, por {geten}'),
      T('ninguno: los dos caracteres son equivalentes'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'En la lectura de "padre e hijo", la marca que dice que el carácter de la derecha gobierna al de la izquierda se llama ____',
      ),
      answer: 'geten',
    },
    {
      kind: 'match',
      prompt: T('Une la marca con lo que hace'),
      pairs: [
        { a: T('{jōten}'), b: T('el de la izquierda gobierna al de la derecha') },
        { a: T('{geten}'), b: T('el de la derecha gobierna al de la izquierda') },
        { a: T('{kazu-ten}'), b: T('el gobierno llega a más de un carácter') },
        { a: T('{okurigana}'), b: T('la flexión del verbo, escrita en kana') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Por qué la poesía confuciana y los textos budistas en {kanbun} son tan cortos?'),
      options: [
        T('porque cada cláusula es una frase breve y casi todo son nombres'),
        T('porque la escritura china tiene menos caracteres que la japonesa'),
        T('porque se escribieron para niños'),
        T('porque el texto lo leían en voz alta varias personas a la vez'),
      ],
      answer: 0,
    },
  ],
};
