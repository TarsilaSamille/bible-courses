import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  section: T('Sintaxis'),
  title: T('Citar: la partícula que abre y la que cierra'),
  subtitle: T(
    'El japonés usa una sola partícula en los dos extremos de la cita, y lo que viene después es lo que dice si estás leyendo habla o relato',
  ),
  body: C(`
## Una partícula, dos extremos

El español abre la cita con dos puntos y la cierra con raya. El japonés no tiene dos signos: tiene **uno**, y es una partícula. {to} entra detrás del verbo de decir y vuelve a entrar al final del habla, con la misma forma y el mismo sonido: *kare wa 「watashi wa iku」 to iutta*, dijo: "yo voy". La primera {to} dice "aquí empieza el habla"; la segunda dice "aquí termina". El japonés no guarda esa distinción en ninguna parte: la misma sílaba hace los dos papeles.

Vale comparar con las otras dos lenguas de este proyecto, porque el contraste es el punto. En mandarín el habla está rodeada por dos caracteres, uno que abre y otro que cierra, y el verbo de decir queda fuera de los dos. En coreano no hay partícula ninguna: quien delimita es el propio verbo de decir, y por eso elegir el verbo ya decide si aquello es habla. En japonés la delimitación es una partícula y es la misma en los dos extremos. La consecuencia es práctica: en un texto corrido no hace falta adivinar lo que viene, basta oír la partícula dos veces y marcar lo que queda entre ellas.

Y la puntuación acompaña. Las comillas del japonés son los {kagi}, los corchetes de ángulo recto 「 y 」, y no las comillas latinas; cuando una cita viene dentro de otra cita, el nivel interior cambia de forma, como en mandarín. La raya, que en español marca el habla, aparece menos, porque la partícula ya está haciendo ese trabajo: en *kare wa — watashi wa iku — to iutta* la raya sobra y nadie la escribe. La traducción bíblica japonesa usa los corchetes, no las comillas.

## El nombre que viene después de la partícula

Después de {to} puede venir un nombre, y el nombre es quien habla. "Dijo, el señor Tanaka, yo voy" es *kare wa 「{tanaka} {san} wa iku」 to iutta*: lo que dice {tanaka} está en primera persona dentro de los corchetes, y lo dice {tanaka}, no el sujeto de fuera. Es el verbalizador, y vale la pena observar que la estructura no trae ninguna pieza nueva: es {to} otra vez.

El mismo arreglo, con una pieza cambiada, da el habla indirecta. "Dijo QUE yo voy" es *kare wa watashi ga iku to iutta*: la partícula es la misma, pero detrás de ella no viene ningún nombre, viene un **verbo en forma base**, sin flexionar. Y es ese verbo plano, y no una conjunción, el que hace el papel del "que" del español.

Son dos cosas que la misma partícula hace una vez que llega: un nombre es el dueño del habla, un verbo plano es un "que". La partícula no cambia; cambia lo que se encuentra. Y por eso es la pieza más informativa de la página para quien tiene prisa: una partícula y el verbo que siguen bastan para saber si aquello es palabra o relato.

## La cita es una isla

Por dentro, la cita obedece el orden de la lección de sintaxis sin excepción: pronombre, objeto indirecto, objeto directo, verbo al final. Por fuera, la frase que la rodea gira como quiera. "Pedro dijo: yo voy" sigue siendo *kare wa 「watashi wa iku」 to iutta*, y la cita no se da la vuelta para acomodar el verbo que en español subió. Quien traduce palabra por palabra escribe "Pedro yo voy dijo" y produce una frase que no existe en japonés.

Y el verbo de decir tampoco es neutro. {iu} es el gesto genérico; {kataru} es narrar y conversar, el verbo de las narrativas y de las conversaciones largas; {kaku} es lo que se escribe, y en el caso de un evangelio es la pluma. Cambiar uno por otro no rompe la frase, pero cambia el tono: "dijo", "contó" y "escribió" son tres cosas distintas. Y hay un cuarto, {omou}, que es "pensar, creer", y que nunca tiene habla directa, porque quien piensa no está hablando.

Aquí entra la lección de los registros. Lo que Jesús dice aparece en el registro que eligió el traductor, y la elección se ve en la gramática: la palabra de Dios suele salir en el honorífico que honra al otro, el {osshharu}, que es justamente el honorífico de "decir", y el registro de los humanos en el cortés. Dos traducciones producen dos registros para la misma frase, y ninguna de las dos es un error de gramática. Es una decisión editorial, y el japonés la deja a la vista porque vive en el verbo y no en la nota al pie.

## Marcos 1:15, la frase que se volvió fórmula

El gancho es Marcos 1:15, la cita más repetida del Nuevo Testamento: el tiempo está cumplido, el reino de Dios está cerca, convertíos y creed en el evangelio. Son tres imperativos apilados, y cada uno cierra su propio segmento, con la frontera de la lección de flexión funcionando dentro de la frase de Jesús. En japonés el tiempo que se cumple es el {mitsu}, y el camino del que habla el evangelio es el {michi}; los tres imperativos vienen sin sujeto y sin flexión, como todo imperativo.

Lo que sostiene la frase es lo mismo que sostiene cualquier cita: la partícula, en los dos extremos. Y eso es lo que hace de Marcos 1:15 una frase tan fácil de citar y tan difícil de traducir, porque la frase es una unidad, y en japonés esa unidad está marcada por la misma sílaba en los dos lados, que no es lo que hace ningún otro idioma de este proyecto.

El otro extremo es la apertura de Juan 1. Allí la mayor parte del capítulo es una **cadena de citas indirectas**: Juan escribe lo que oyó y lo que vio, y lo que vio vuelve en la forma plana, con la partícula y el verbo sin flexionar. El extremo opuesto de Marcos 1:15, y por eso las dos forman la pareja clásica de cualquier introducción al Nuevo Testamento: un capítulo que es casi todo relato, y un versículo que es todo habla.
`),
  vocab: [
    V('to', 'と', 'la partícula que abre y cierra la cita (to)'),
    V('iu', '言う', 'decir; hablar (iu) — el verbo genérico'),
    V('kataru', '語る', 'narrar; conversar (kataru)'),
    V('kaku', '書く', 'escribir (kaku)'),
    V('omou', '思う', 'pensar; suponer (omou)'),
    V(
      'osshharu',
      'おっしゃる',
      'honorífico de "decir": el registro en que suele salir la palabra de Jesús',
    ),
    V('tanaka', '田中', 'Tanaka; nombre propio (tanaka)'),
    V('san', 'さん', 'el sufijo de cortesía detrás del nombre (san)'),
    V('kagi', '鉤括弧', 'los corchetes de ángulo recto 「 」, las comillas del japonés (kagi)'),
    V('mitsu', '満す', 'llenar; estar cumplido, completo (mitsu)'),
    V('michi', '道', 'camino (michi)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'La misma partícula {to} abre y cierra la cita: el japonés no tiene dos caracteres de comillas, tiene una partícula que aparece dos veces.',
      ),
    },
    {
      n: '2',
      text: T(
        '{to} seguido de nombre propio es el dueño del habla; {to} seguido de verbo en forma base es el "que" del discurso indirecto. La partícula no cambia, cambia lo que viene detrás de ella.',
      ),
    },
    {
      n: '3',
      text: T(
        'Dentro de la cita vale el orden de la lección 9 sin excepción, y la sintaxis de fuera no entra: la cita es una isla.',
      ),
    },
    {
      n: '4',
      text: T(
        'La prueba de lectura está en el verbo: flexionado, estás leyendo habla; en forma base, estás leyendo relato. Es la única diferencia estructural entre los dos.',
      ),
    },
    {
      n: '5',
      text: T(
        'Las comillas del japonés son los corchetes de ángulo recto y la raya es lo que marca el habla; el verbo de decir ({iu}, {kataru}, {kaku}) elige el registro en que se cuenta la cita.',
      ),
    },
  ],
  notes: [
    {
      label: T('La partícula es simétrica, y eso cambia la lectura'),
      text: T(
        'En las lenguas en que el signo de cita es asimétrico — uno abre y otro cierra — o en que la delimitación vive en el verbo, el lector tiene que conocer la marca de apertura antes de saber lo que viene después. En japonés la misma partícula abre y cierra: oír la sílaba dos veces basta para saber dónde empieza la cita y dónde acaba, y leer un párrafo bíblico se vuelve marcar intervalos.',
      ),
    },
    {
      label: T('El registro del habla es elección del traductor'),
      text: T(
        'En la traducción japonesa la palabra de Dios suele salir en el honorífico que honra al otro, el {osshharu}, y el registro de los humanos en el cortés. Un traductor que elija otro registro produce una traducción igual de correcta en japonés y con otro sonido. Nada de eso es error: es la decisión editorial apareciendo en la gramática, y por eso se ve quien estudia la lengua en lugar de solo usarla.',
      ),
    },
  ],
  examples: [
    {
      text: '彼は「行きます」と言った',
      gloss: T(
        'kare wa「ikimasu」to iutta — dijo: "yo voy" (la misma partícula en los dos extremos)',
      ),
    },
    {
      text: '彼は行くと言った',
      gloss: T('kare wa iku to iutta — dijo que yo iba (misma partícula, verbo en forma base)'),
    },
    {
      text: '彼は「田中さんが行きます」と言った',
      gloss: T(
        'kare wa「Tanaka-san ga ikimasu」to iutta — dijo: "el señor Tanaka va" (el nombre después de la partícula es quien habla)',
      ),
    },
    {
      text: '彼は神が愛されたと思っている',
      gloss: T(
        'kare wa kami ga aisareta to omou — cree que Dios fue amado (relato dentro de relato)',
      ),
    },
    {
      text: '時は満した、とイエスは言った',
      gloss: T(
        'toki wa mitsu to, Yesu wa iutta — "el tiempo está cumplido", dijo Jesús (Marcos 1:15)',
      ),
    },
  ],
  tables: [
    {
      caption: T('Habla directa e indirecta: la misma partícula, la prueba en el verbo'),
      head: [T('Lo que se compara'), T('Habla directa'), T('Habla indirecta')],
      rows: [
        [T('la partícula'), T('{to} aparece dos veces'), T('{to} aparece una vez')],
        [
          T('lo que viene detrás'),
          T('verbo flexionado: *watashi wa ikimasu*'),
          T('verbo en forma base: *watashi ga iku*'),
        ],
        [
          T('quién está hablando'),
          T('la primera persona, dentro de los corchetes'),
          T('el sujeto de fuera: {kare} dijo que {watashi} iba'),
        ],
        [
          T('lo que el lector está'),
          T('oyendo habla, palabra por palabra'),
          T('leyendo un relato que nadie ha confirmado'),
        ],
        [T('el correspondiente en español'), T('—yo voy—'), T('que yo iba')],
      ],
    },
    {
      caption: T('Cuatro verbos de decir, y el registro de cada uno'),
      head: [T('Verbo'), T('Se usa cuando'), T('Lo que cambia')],
      rows: [
        [T('{iu}'), T('el gesto genérico de decir'), T('el tono más neutro, y el más común')],
        [
          T('{kataru}'),
          T('narrar lo que pasó, o conversar'),
          T('el tono de narrativa y de conversación larga'),
        ],
        [T('{kaku}'), T('lo que se puso por escrito'), T('el tono de mensaje, de acta, de carta')],
        [
          T('{omou}'),
          T('pensar, creer, suponer'),
          T('nunca tiene habla directa: quien piensa no está hablando'),
        ],
      ],
    },
    {
      caption: T('La puntuación de la cita'),
      head: [T('Signo'), T('Nombre'), T('Lo que hace')],
      rows: [
        [T('{to}'), T('la partícula'), T('abre y cierra, con la misma forma en los dos extremos')],
        [T('「 」'), T('{kagi}'), T('delimita la cita escrita, en el nivel exterior')],
        [T('——'), T('raya'), T('marca el habla, como la raya del español')],
        [
          T('""'),
          T('comillas latinas'),
          T('extranas en un texto japonés; son señal de traducción automática, no de traductor'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {彼は行くと言った}, ¿qué indica que esto es habla indirecta y no directa?'),
    options: [
      T('la partícula {to} aparece dos veces'),
      T('el verbo que sigue a la partícula está en forma base, sin flexionar'),
      T('el verbo de decir es {kataru}'),
      T('la frase termina en {ne}'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Completa el habla directa con la partícula que cierra la cita: 彼は「行きます」____と言った',
      ),
      answer: 'と',
    },
    {
      kind: 'match',
      prompt: T('Une cada pieza con lo que hace'),
      pairs: [
        { a: T('{to}'), b: T('abre y cierra la cita, con la misma partícula') },
        { a: T('{iu}'), b: T('el gesto genérico de decir') },
        { a: T('{kataru}'), b: T('narrar y conversar') },
        { a: T('{omou}'), b: T('pensar, y por eso nunca habla directa') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('En mandarín y en coreano, ¿qué abre y cierra la cita?'),
      options: [
        T('en mandarín, dos caracteres distintos; en coreano, el propio verbo de decir'),
        T('en los dos, la misma partícula usada en los dos extremos'),
        T('en los dos, dos puntos'),
        T('en mandarín, la partícula; en coreano, la raya'),
      ],
      answer: 0,
    },
  ],
};
