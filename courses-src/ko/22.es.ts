import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  section: T('Escritura'),
  title: T('Dónde va el espacio: la escritura coreana tiene dos capas'),
  subtitle: T(
    'El bloque silábico es fijo y el espaciado es regla: un espacio después de cada partícula, ninguno antes del verbo, y tres excepciones que se pegan',
  ),
  body: C(`## Dos capas, y solo una es libre

El mandarín y el japonés no usan espacios, y la frontera de la palabra está en la cabeza de quien lee, no en la página. El coreano sí los usa, y es la única lengua de este proyecto que obliga al lector a ver la frontera marcada. La dificultad parece de inmediato mayor que en mandarín, y el primer error es pensar que lo es. Es más simple, porque el coreano entrega un criterio mecánico y el mandarín no entrega ninguno.

El detalle que ata todo: la escritura coreana tiene DOS capas, y son de naturaleza distinta. La capa de abajo es el bloque silábico, y el bloque no se negocia: es un cuadrado, una sílaba, con la anatomía fija de siempre. La capa de arriba es el espacio, y esa capa es una regla gramatical. Por eso el mismo bloque aparece pegado en un punto del texto y separado en otro sin que nada haya cambiado en él: lo que cambió es la capa de arriba. Quien busca dentro del bloque la explicación del espacio busca en el lugar equivocado, y por eso la regla parece imposible hasta que se dice en una frase.

Y la regla de oro cabe en una frase: un espacio DESPUÉS de cada partícula, NINGÚN espacio antes del verbo, y todo lo demás es una palabra. Fíjate en los dos lados: donde la partícula es lo último de la palabra, el espacio va después; donde el verbo es lo primero de la palabra, el espacio va antes. Una partícula nunca es lo primero de una palabra, y un verbo nunca es lo último. Una frase es una secuencia de palabras donde las partículas van siempre al final y los verbos siempre al principio.

El detalle fino está en "después de cada partícula" y no en "entre dos palabras": la partícula más pegada de todas es {ui}, que se pega al sustantivo y le sigue el modificador. Una palabra puede llevar partícula al final y aun así no tener nada detrás, y es el final de frase lo que lo resuelve.

## La regla de oro, medida

"Yo como" en coreano es {naneun} {ppang-eul} {meokneunda}: tres palabras, tres espacios, tres partículas, pronombre más partícula de tema; sustantivo más partícula de objeto; verbo más terminación final. La terminación final {da} es el último bloque del verbo, y el verbo no se separa de ella: es el verbo cerrado, y la frase terminó. Nadie separa el final de una palabra en portugués, y en coreano es lo mismo con una partícula en lugar del sufijo.

La tabla central es esa cuenta, y es toda la regla de oro sumada línea por línea. Lo que el lector tiene que interiorizar no es la lista, es el criterio: si la pieza es partícula, el espacio ya está decidido y es después de ella; si la pieza es verbo, el espacio ya está decidido y es antes de ella; si la pieza es cualquier otra cosa, no hay nada que decidir, porque todo lo demás es una palabra sola. La regla de oro resuelve la esmagadora mayoría de los casos sin que nadie tenga que pensar nada, y lo que queda para pensar son las excepciones.

¿Por qué partícula y no sustantivo? Porque la partícula es la pieza que existe justamente para declarar función gramatical, y una pieza que declara función necesita una marca de frontera antes de que empiece la función siguiente. El sustantivo ya se ve por sí mismo, es el trozo grande, el que tiene entrada propia en el diccionario. La partícula es invisible, y por eso necesita espacio alrededor para que no se la trague la palabra vecina. El espacio coreano no es adorno: es el punto y coma de la frase.

## Las tres excepciones que se pegan

Primera excepción: el número. Numeral, contador y sustantivo forman un grupo pegado, {hann} {gwon} {seojeul}, "un libro", y las tres piezas son una palabra sola. El numeral es lo único en coreano que se pega a lo que viene ANTES de él, porque es el único elemento cuya frontera izquierda necesita marca y cuya frontera derecha es invisible. Fíjate en lo que queda: la partícula {ui} de posesión también va pegada, y lo que separa el grupo del modificador es el propio espacio de la regla de oro.

Segunda excepción: el nombre propio coreano. {kimjeongsu} son tres bloques y una palabra sola, y ningún espacio separa las sílabas del nombre. La razón es la misma de la primera excepción y vale para las dos: entre los bloques del nombre no hay partícula ninguna, y sin partícula no hay frontera que el pueda marcar. Quien escribe {kim} {jeongsu} separados no está equivocando el nombre: está inventando una frontera que la lengua nunca tuvo. Los nombres extranjeros se comportan de otro modo: se adaptan al patrón coreano y reciben partícula como cualquier sustantivo.

Tercera excepción, y la más difícil: el pronombre que se fusiona con la partícula. {urireul} son tres bloques, nosotros con partícula de objeto, y es una palabra sola. El pronombre absorbe la partícula, y lo que eran dos piezas se volvió una. La dificultad es real porque el resultado es una palabra que tiene tres bloques y ninguna partícula visible al final, que es justo la señal que el lector usa para saber dónde está la frontera. La simetría cierra el sistema: una palabra tiene espacio después de sí cuando termina en partícula, y no lo tiene cuando la partícula fue absorbida o nunca existió. Las tres excepciones son el mismo caso: partícula ausente, espacio ausente.

## La negativa histórica y el gancho bíblico

Los coreanos antiguos escribían pegado, como el japonés, y el espacio obligatorio fue impuesto por el gobierno en 1987. Hubo resistencia, el "chamo", el movimiento contra el espacio, y el movimiento perdió. Eso cambia lo que esta lección enseña: la ortografía coreana no es una verdad natural sobre la lengua, es una decisión política que ganó una discusión y se convirtió en ley. Las partículas no cambiaron en 1987; lo que cambió fue un decreto sobre dónde poner una marca en la página. Ninguna palabra cambió de sonido, ninguna frase cambió de sentido, y aun así el documento de hoy no se parece al de ayer.

El gancho bíblico ata las dos mitades. La traducción coreana de 1917, la primera en coreano, es casi todo hanja, y el coreano en hanja del principio no escribía las partículas: se recuperaban de la forma del sustantivo y del contexto. Una partícula que no se escribe no tiene palabra alrededor, y una palabra sin partícula no tiene espacio. Un versículo coreano de 1917 tiene una partícula visible, la de sujeto, y otra ausente, la de tema; y el espacio alrededor de la ausente sencillamente no existe. En la Biblia coreana actual la misma frase tiene las dos partículas escritas y, por lo tanto, los dos espacios. Lo que cambia entre 1917 y 1961 es tanto la ortografía como el registro.

Y hay un reencuentro bonito de eso. Hacia 1980, en una edición de la CMOS, el espacio entre dos grupos ya no era espacio: era una partícula con sentido, leída como "mediante", por medio de. Es la prueba de que el espacio coreano es material gramatical de verdad y no convención de composición, porque hay una edición en la que significa algo. Es lo opuesto del mandarín de la segmentación de sílabas, donde la frontera es invisible y hay que adivinarla: aquí la frontera es obligatoria y, aun así, puede cargar sentido.
`),
  vocab: [
    V('naneun', '나는', 'yo: pronombre con partícula de tema, ya pegado (naneun)'),
    V('eun', '은', 'tema después de palabra con consonante final (eun)'),
    V('ppang', '빵', 'pan; el pan del versículo de Juan 6:9 (ppang)'),
    V('eul', '을', 'objeto directo después de palabra con consonante final (eul)'),
    V('meokneunda', '먹는다', 'comer: el verbo cuya terminación ya es el sujeto (meokneunda)'),
    V('hann', '한', 'uno; el numeral coreano, siempre con consonante final (hann)'),
    V('gwon', '권', 'contador de libros y de rollos de papel (gwon)'),
    V('ui', '의', 'partícula genitiva, «de», que liga un grupo al otro (ui)'),
    V('seojeul', '책', 'libro (seojeul)'),
    V(
      'kimjeongsu',
      '김정수',
      'Kim Jeong-su: nombre propio coreano de tres bloques y una palabra sola (kimjeongsu)',
    ),
    V(
      'urireul',
      '우리를',
      'nosotros como objeto: pronombre fusionado con la partícula, tres bloques y una palabra (urireul)',
    ),
    V('mal', '말', 'palabra; el Verbo en el prólogo de Juan (mal)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'La escritura coreana tiene dos capas: el bloque silábico, que es fijo, y el espaciado, que es regla. El mismo bloque aparece pegado o separado según la capa de arriba.',
      ),
    },
    {
      n: '2',
      text: T(
        'Regla de oro: un espacio después de cada partícula, ningún espacio antes del verbo, y todo lo demás es una palabra sola.',
      ),
    },
    {
      n: '3',
      text: T(
        'Numeral, contador y sustantivo van pegados: {hann} + {gwon} + {seojeul} es una palabra. El numeral es lo único que se pega a lo que viene antes.',
      ),
    },
    {
      n: '4',
      text: T(
        'Un nombre propio coreano es una palabra sola por muchos bloques que tenga: {kimjeongsu} son tres bloques pegados. Un nombre extranjero se adapta al patrón coreano y recibe partícula como cualquier sustantivo.',
      ),
    },
    {
      n: '5',
      text: T(
        'Un pronombre fusionado con una partícula es una palabra sola, aun con tres bloques: {urireul}. La simetría que cierra la lección: partícula ausente, espacio ausente.',
      ),
    },
  ],
  notes: [
    {
      label: T('El espacio es una decisión política, no lingüística'),
      text: T(
        'Los coreanos antiguos escribían pegado, como el japonés. El espacio obligatorio fue impuesto por el gobierno en 1987, y el «chamo», el movimiento contra el espacio, perdió. Ninguna palabra cambió de sonido ni ninguna frase cambió de sentido; lo que cambió fue un decreto sobre dónde poner una marca en la página. La ortografía es una decisión política — y una vez ganada, es ley.',
      ),
    },
    {
      label: T('El espacio como partícula con sentido'),
      text: T(
        'Hacia 1980, en una edición de la CMOS, el espacio entre dos grupos ya no era espacio: se leía como «mediante», por medio de. Es la prueba de que el espacio coreano es material gramatical de verdad y no una convención de composición. Y es lo opuesto del mandarín de la lección 4 del curso zh, donde la frontera de la palabra es invisible y hay que adivinarla.',
      ),
    },
  ],
  examples: [
    {
      text: '나는 빵을 먹는다',
      gloss: T(
        'na-neun ppang-eul meok-neun-da — yo como: tres palabras, tres partículas al final de cada una, tres espacios',
      ),
    },
    {
      text: '한 권의 책이',
      gloss: T(
        'hann gwon-ui chaek-i — un libro: numeral, contador y partícula pegados; el sustantivo es una palabra sola',
      ),
    },
    {
      text: '김정수 씨',
      gloss: T(
        'kim jeong-su ssi — Kim Jeong-su: tres bloques dentro de una palabra, y el honorífico separado por un espacio',
      ),
    },
    {
      text: '좋은 책 한 권',
      gloss: T(
        'joeun chaek hann gwon — un buen libro: el sustantivo es palabra, el numeral se pega al contador',
      ),
    },
    {
      text: '말이',
      gloss: T(
        'mal-i — la Palabra: el sustantivo y la partícula son una palabra sola, sin espacio entre los dos',
      ),
    },
  ],
  tables: [
    {
      caption: T('La regla de oro, medida pieza por pieza'),
      head: [T('Palabra (romanización)'), T('Qué es'), T('Dónde va el espacio')],
      rows: [
        [T('naneun'), T('pronombre yo + partícula de tema'), T('después de ella')],
        [T('ppang-eul'), T('sustantivo pan + partícula de objeto directo'), T('después de ella')],
        [
          T('meokneunda'),
          T('verbo comer, con la terminación final al final'),
          T('ninguno: el verbo es la primera pieza de su palabra'),
        ],
        [T('mal-i'), T('sustantivo Palabra + partícula de sujeto'), T('después de ella')],
        [
          T('hann gwon-ui chaek'),
          T('numeral + contador + partícula + sustantivo'),
          T('ninguno dentro del grupo: es la excepción del número'),
        ],
        [
          T('cualquier sustantivo solo'),
          T('un sustantivo sin partícula alguna'),
          T('no hay nada que decidir: es una palabra sola'),
        ],
      ],
    },
    {
      caption: T('Las tres excepciones que se pegan, y lo que tienen en común'),
      head: [T('Caso'), T('Qué se pega'), T('Ejemplo (romanización)'), T('Cuántos bloques')],
      rows: [
        [
          T('numeral'),
          T('numeral, contador y partícula, junto con el sustantivo'),
          T('hann gwon-ui chaek'),
          T('cuatro'),
        ],
        [
          T('nombre propio coreano'),
          T('todos los bloques del nombre, en cualquier posición'),
          T('kimjeongsu'),
          T('tres'),
        ],
        [
          T('pronombre fusionado con partícula'),
          T('el pronombre y la partícula que absorbió'),
          T('urireul'),
          T('tres'),
        ],
        [
          T('el caso normal, por contraste'),
          T('sustantivo y partícula, nada más'),
          T('ppang-eul'),
          T('dos'),
        ],
      ],
    },
    {
      caption: T('Dónde está la frontera de la palabra en cada una de las tres lenguas'),
      head: [
        T('Lengua'),
        T('Usa espacio'),
        T('Dónde queda marcada la frontera'),
        T('Dónde está la lección'),
      ],
      rows: [
        [
          T('mandarín'),
          T('no'),
          T('en la cabeza del lector: tres caracteres forman casi siempre una palabra'),
          T('la lección 4 del curso zh'),
        ],
        [
          T('japonés'),
          T('no'),
          T('en el kanji; el kana puro va pegado'),
          T('la lección 1 del curso ja'),
        ],
        [
          T('coreano'),
          T('sí, obligatorio desde 1987'),
          T('en la partícula: es ella la que manda en el espacio'),
          T('esta lección'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Dónde va el espacio antes de un verbo coreano?'),
    options: [
      T('inmediatamente antes de él'),
      T('inmediatamente después de él'),
      T('entre el verbo y su terminación final'),
      T('no hay regla: el espaciado es libre'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa «yo como»: el pronombre «yo» con la partícula de tema es 나____'),
      answer: '는',
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada caso con lo que se pega en la escritura coreana'),
      pairs: [
        { a: T('numeral, contador y sustantivo'), b: T('todo junto: una palabra sola') },
        { a: T('nombre propio coreano'), b: T('tres bloques, una palabra sola') },
        { a: T('pronombre fusionado con partícula'), b: T('tres bloques, una palabra sola') },
        { a: T('cualquier palabra terminada en partícula'), b: T('el espacio va después de ella') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál de estas afirmaciones sobre el espaciado coreano es verdadera?'),
      options: [
        T('el espacio coreano fue impuesto por decisión del gobierno en 1987'),
        T('el coreano nunca usó espacio y hoy lo usa por norma de la ONU'),
        T('el espacio es donde la sílaba pierde la vocal'),
        T('las partículas se escriben siempre separadas, con espacio'),
      ],
      answer: 0,
    },
  ],
};
