import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  section: T('Sustantivo'),
  title: T('Contadores: el "uno" que el portugués omite'),
  subtitle: T(
    'Después de un numeral el coreano obliga a un contador, y el sustantivo va al final: numeral, contador, sustantivo',
  ),
  body: C(`## El "uno" que el portugués borra

En portugués, "yo tengo un libro" tiene dos trozos que casi no son palabras: el "yo" y el "un". El "un" es artículo indeterminado, y el artículo es una palabra que se evapora. Nadie lo traduce, nadie pregunta por él, nadie repara en que estaba ahí. En coreano {hann} es una palabra corriente, con sonido y con función, y después de un numeral la lengua exige una segunda palabra que el portugués dispensa: el contador. Por eso "un libro" no es {seojeul}, ni es {hann} {seojeul}. Es {hann} {gwon} {seojeul}, y las dos piezas del medio son obligatorias.

El lado a lado muestra lo que está en juego. A un lado, yo tengo un libro: cuatro palabras, dos de ellas desechables. Al otro, {je chaegi han gwon-i itda}: la misma información, con numeral, con contador y con partícula de sujeto, y ninguna descartable. Quien traduce palabra por palabra del portugués escribe {hann} {seojeul}, la frase que todo el mundo empieza a decir y nadie entiende bien: el {gwon} ha desaparecido, y con él la información sobre la forma de la cosa.

Esto vale para todos los numerales, no solo para el "uno". {hann} {myeong}, una persona; {hann} {cha}, una hoja; {hann} {gwon} {seojeul}, un libro; {hann} {dae}, una máquina. El numeral es siempre {hann} cuando es uno, y el contador es siempre la segunda palabra. La regla es mecánica y no tiene excepción: un numeral sin contador es una frase equivocada.

## El orden: numeral, contador, sustantivo

El orden es numeral, contador, sustantivo, y el sustantivo va al final. Tres libros es sam, {gwon}, {seojeul}: tres más contador más libro. No es "libro tres", ni es "tres libro contador". El sustantivo cierra el grupo, y es lo que la primera lección mostró para la frase entera: el orden es objeto, verbo, sujeto, y el objeto se comporta también como una cosa, con su detalle al final.

Y por eso el "de" de la posesión va ANTES. "Mi libro" es {ui} {seojeul}: de, libro. El poseedor va primero, como en japonés, y como en la mayoría de las lenguas que este curso compara. Aquí queda específico de los numerales: {ui} {seojeul}, mi libro, y sam {gwon} {ui} {seojeul}, tres de mis libros. El numeral y el contador abren el grupo, el {ui} entra en medio, el sustantivo cierra. Equivocarse aquí no es cuestión de estilo: {seojeul} {ui} no es una cosa que exista en coreano.

**El gancho bíblico está en Juan 6:9**: cinco panes y dos peces. En coreano, {ppang dase gwaeo murgogi du mari}, pan, cinco, y pez, dos, con contador antes de cada sustantivo y sin artículo alguno. El portugués entrega los dos numerales y olvida los dos contadores, porque para eso están los artículos; el coreano no tiene cómo olvidarlos: cada uno de los cinco panes se cuenta, cada uno de los dos peces también, y el versículo entero cabe en dos veces "numeral, contador, sustantivo".

## El contador describe el tipo de objeto

El contador no dice el número; el número lo dice el numeral. El contador dice el TIPO de cosa que se cuenta, y por eso cada sustantivo tiene el suyo. {gwon} es el contador de lo que es libro, hoja de papel enrollada, rollo: la cosa larga y larga de lado. {myeong} es el de las personas. {cha} es el de las hojas y de lo que es plano y fino: papel, plato, disco. {dae} es el de las máquinas y de los coches, y también el de las cosas que tienen patas. {byeol} es el contador de objetos de tipos distintos, el "esto y aquello" de la cuenta. Y {jae} es el contador general: la cosa sin forma definida, el "cosa" del coreano.

La lógica sirve más que la lista decorada. Quien recuerda que {dae} nació como "una plataforma, una máquina" acierta el coche sin pensar. Y los dos contadores más inesperados vienen del mismo recuerdo: {myeong} y {dae} son contadores de patas. Históricamente se contaban las cosas domesticadas, y se contaban por sus patas; por eso {dae} se quedó con lo que tiene patas y {myeong} con las personas, que también andan. Un animal no lleva {myeong}, lleva el contador de los animales, el mari para el perro y el pez, y el contador de las frutas y de las piezas sueltas es otro, que no es ninguno de los dos.

Guarda el contador por su forma: {cha} es la chapa lisa, {gwon} es el rollo de papel, {dae} es la máquina. Quien razona con imágenes falla menos que quien decoró una lista, porque ninguna lista tiene el contador del objeto que aparece por primera vez en el texto bíblico.

## La pronunciación cambia; algunos, muchos, todos

Hay un detalle técnico que asusta al principiante: el número cambia la pronunciación de la palabra que viene detrás. En coreano eso pasa con el contador. Del uno al nueve el contador tiene una pronunciación; a partir del diez tiene otra. Tres libros es sam {gwon}; trece libros es sipsam {gwon}, el contador se escribe igual y se pronuncia distinto. Y el numeral uno es la excepción: {hann}, que conserva la pronunciación corta incluso donde la regla le daría la otra.

El origen de eso es un resto de la cuenta hablada. Los números grandes no siempre se dicen de cinco en cinco; se dicen de tres en tres, y el "y tres" se pega a lo anterior. Lo que era un número se vuelve palabra, y la palabra lleva la marca del grupo al que pertenece. La escritura no cambia, y por eso leer coreano en silencio pronuncia casi todo mal: el texto impreso no muestra qué pronunciación del contador usar.

"Algunos" es {myeochi} más contador, sin numeral: {myeochi} {gwon} {seojeul}, algunos libros. "Muchos" es {man} más contador: {man} {gwon} {seojeul}, "Todos" es {jeong} o {dae} más el sustantivo: {jeong} {seojeul}, todos los libros. Fíjate en que "algunos" no es ningún numeral: es una palabra que ocupa el lugar del numeral, y el contador sigue siendo obligatorio detrás de ella.
`),
  vocab: [
    V('hann', '한', 'uno; el numeral coreano, siempre con consonante final (hann)'),
    V('jae', '개', 'contador general de cosas y objetos (jae)'),
    V('myeong', '명', 'contador de personas (myeong)'),
    V('cha', '차', 'contador de hojas, papeles y discos (cha)'),
    V('gwon', '권', 'contador de libros y de rollos de papel (gwon)'),
    V('dae', '대', 'contador de máquinas, coches y cosas con patas (dae)'),
    V('byeol', '별', 'contador de objetos de tipos distintos (byeol)'),
    V('ui', '의', 'de; de posesión, y va antes del sustantivo (ui)'),
    V('myeochi', '몇', 'algunos; algunos, sin numeral (myeochi)'),
    V('man', '만', 'muchos; solo (man)'),
    V('jeong', '전', 'todos; todo (jeong)'),
    V('seojeul', '책', 'libro (seojeul)'),
    V('dase', '다섯', 'cinco (dase)'),
    V('ppang', '빵', 'pan; el pan del versículo de Juan 6:9 (ppang)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Después de un numeral el contador es obligatorio: "un libro" es {hann} + {gwon} + {seojeul}. El "un" del portugués es artículo y desaparece; en coreano es palabra.',
      ),
    },
    {
      n: '2',
      text: T(
        'El orden es numeral, contador, sustantivo — el sustantivo al final, como en toda frase coreana: sam {gwon} {seojeul} son tres libros.',
      ),
    },
    {
      n: '3',
      text: T(
        'El contador describe el tipo de objeto, no la cantidad: {myeong} para personas, {cha} para hojas, {gwon} para libros, {dae} para máquinas y cosas con patas, {byeol} para objetos de tipos distintos, {jae} para cosas en general.',
      ),
    },
    {
      n: '4',
      text: T(
        'El {ui} de posesión va antes del sustantivo: {ui} {seojeul} es "mi libro", y sam {gwon} {ui} {seojeul} son "tres de mis libros".',
      ),
    },
    {
      n: '5',
      text: T(
        'Del 1 al 9 el contador tiene una pronunciación y a partir del 10 tiene otra; el 1 es la excepción. La escritura no cambia. "Algunos" es {myeochi} + contador, "muchos" es {man} + contador, "todos" es {jeong} + sustantivo.',
      ),
    },
  ],
  notes: [
    {
      label: T('El {ui} va antes, y el sustantivo cierra'),
      text: T(
        'El "de" de la posesión abre el grupo nominal y el sustantivo lo cierra. Por eso el principiante escribe bien {ui} {seojeul} y escribe {seojeul} {ui} cuando quiere ser meticuloso con ese "de". Después de un numeral no cambia: {seojeul} {ui} tampoco existe.',
      ),
    },
    {
      label: T('Contadores que nacieron de patas'),
      text: T(
        '{myeong}, de personas, y {dae}, de cosas con patas, vienen del mismo origen: se contaban las cosas domesticadas y se contaban por sus pies. Por eso {dae} cuenta hoy coches y máquinas, y {myeong} cuenta pasajeros y personas.',
      ),
    },
  ],
  examples: [
    {
      text: '책 한 권이 있어요',
      gloss: T('chaek han gwon-i isseoyo — hay un libro: numeral, contador, sustantivo'),
    },
    {
      text: '제 책이 두 권 있어요',
      gloss: T('je chaegi du gwon isseoyo — tengo dos libros: el numeral cambió, el contador no'),
    },
    {
      text: '빵 다섯 개와 물고기 두 마리',
      gloss: T(
        'ppang dase gwaeo murgogi du mari — cinco panes y dos peces (Juan 6:9): numeral, contador, sustantivo dos veces',
      ),
    },
    {
      text: '몇 권이 있어요',
      gloss: T('myeochi gwon-i isseoyo — hay algunos libros: sin numeral, y el contador sigue ahí'),
    },
  ],
  tables: [
    {
      caption: T('Los contadores más comunes y lo que cuenta cada uno'),
      head: [T('Contador'), T('Romanización'), T('Lo que cuenta'), T('El tipo de objeto')],
      rows: [
        [
          T('{jae}'),
          T('jae'),
          T('cosas en general, sin forma definida'),
          T('la "cosa" del coreano'),
        ],
        [T('{myeong}'), T('myeong'), T('personas'), T('lo que anda sobre dos patas')],
        [
          T('{cha}'),
          T('cha'),
          T('hojas, papeles, platos, discos'),
          T('plano y fino, una chapa lisa'),
        ],
        [T('{gwon}'), T('gwon'), T('libros, rollos de papel'), T('largo y largo de lado')],
        [
          T('{dae}'),
          T('dae'),
          T('máquinas, coches, cosas con patas'),
          T('la plataforma, lo que se apoya'),
        ],
        [
          T('{byeol}'),
          T('byeol'),
          T('objetos de tipos distintos'),
          T('el "esto y aquello" de la cuenta'),
        ],
      ],
    },
    {
      caption: T('La pronunciación del contador cambia con el número; la escritura no'),
      head: [T('Numeral'), T('Qué pasa con el contador'), T('Ejemplo')],
      rows: [
        [T('del 1 al 9'), T('una pronunciación, la más sencilla'), T('sam gwon — tres libros')],
        [
          T('a partir del 10'),
          T('otra pronunciación, la misma escritura'),
          T('sipsam gwon — trece libros'),
        ],
        [
          T('el numeral 1'),
          T('excepción: conserva la pronunciación corta'),
          T('han gwon — un libro'),
        ],
        [
          T('sin numeral'),
          T('la forma más sencilla, sin número'),
          T('myeochi gwon — algunos libros'),
        ],
      ],
    },
    {
      caption: T('Numeral, contador, sustantivo — y el {ui} de posesión antes'),
      head: [T('Lo que se dice'), T('Por partes en coreano'), T('Lo que hace la pieza')],
      rows: [
        [T('un libro'), T('{hann} + {gwon} + {seojeul}'), T('el "uno" es palabra, no artículo')],
        [T('tres libros'), T('sam + {gwon} + {seojeul}'), T('numeral, contador, sustantivo')],
        [T('mi libro'), T('{ui} + {seojeul}'), T('el poseedor va antes')],
        [
          T('tres de mis libros'),
          T('sam + {gwon} + {ui} + {seojeul}'),
          T('el {ui} entra después del contador'),
        ],
        [
          T('{seojeul} {ui}'),
          T('no existe en coreano'),
          T('el poseedor después del sustantivo es un error'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En coreano, "un libro" es:'),
    options: [
      T('numeral, contador y sustantivo'),
      T('solo el sustantivo, como en portugués'),
      T('numeral y sustantivo, sin contador'),
      T('contador y sustantivo, sin numeral'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "tres libros" con el contador de libros: sam ____ seojeul'),
      answer: '권',
    },
    {
      kind: 'match',
      prompt: T('Relaciona el contador con el tipo de objeto que cuenta'),
      pairs: [
        { a: T('{gwon}'), b: T('libros y rollos de papel') },
        { a: T('{myeong}'), b: T('personas') },
        { a: T('{cha}'), b: T('hojas, papeles y discos') },
        { a: T('{byeol}'), b: T('objetos de tipos distintos') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo se dice "algunos libros", sin numerar?'),
      options: [
        T('{myeochi} + {gwon}'),
        T('{hann} + {gwon}'),
        T('{man} + {seojeul}'),
        T('{jeong} + {gwon}'),
      ],
      answer: 0,
    },
  ],
};
