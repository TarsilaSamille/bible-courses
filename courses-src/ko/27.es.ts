import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  section: T('Partículas'),
  title: T(
    '{e}, {eseo}, {ege} y {hante}: cuatro relaciones con la misma vocal, y el verbo que decide cuál es',
  ),
  subtitle: T(
    '{e} no tiene sentido propio: apunta al nombre y espera que el verbo diga qué hace con él. La respuesta está en el verbo, y por eso la misma partícula sirve para tres relaciones',
  ),
  body: C(`## {e} no significa nada por sí sola

{e} no significa "a", ni "en", ni "para". Apunta al nombre al que va pegada y espera que el verbo diga qué está pasando con él. Un verbo de movimiento convierte {e} en destino; un verbo de permanencia convierte {e} en lugar; un nombre de tiempo con {e} marca el momento. Tres relaciones, una partícula, y el criterio es el verbo.

En coreano, {jib-e ga-da} es ir a casa, {jib-e itda} es estar en casa, e {i-re} es el domingo. Las tres frases llevan la misma partícula y ninguna la traduce: la preposición que el portugués usa en cada una está en las tres, y el coreano no escribe ninguna. Quien traduce del portugués llega con la preposición lista y pierde la información, porque en coreano la relación no está en la partícula sino en el par verbo y nombre.

Lo mismo vale para {eseo}, que parece la operación contraria y no lo es. {eseo} apunta al punto de partida de un camino, {jib-e-seo na-nanda} es salir de casa, y a una transformación, {hwan-eu-ro} es con dinero, el medio de un intercambio. En los dos casos el nombre es el punto en que algo deja de estar como estaba. {e} y {eseo} no son "destino y origen" en general: son dos respuestas a una pregunta que hace la partícula y que solo responde el verbo.

## El mismo lugar, dos verbos, dos partículas

El par {e} y {eseo} sobre la misma cosa es lo que confunde al lector de portugués, y no se resuelve memorizando una regla: se resuelve mirando el verbo.

En coreano, estar en la escuela es {hakgyo-e itda} y estudiar en la escuela es {hakgyo-e-seo gongbu-ham-ni-da}. La escuela es la misma, el nombre es el mismo, y la partícula cambió. Lo que cambió es que en el primer caso no pasa nada: alguien está en un sitio y se queda. En el segundo caso pasa algo allí dentro, y la acción es lo que la frase está contando. **La partícula sigue al verbo, y el verbo dice si hay evento.**

El criterio se puede comprobar en cualquier frase: pregunte qué hace el verbo. Los verbos de estado, de posición y de existencia piden {e}: está, queda, vive, existe, cabe. Los verbos de evento piden {eseo}: estudia, trabaja, come, reza, escribe. Y la lista no es una regla cerrada, y ahí es donde aparece la excepción.

La excepción son los verbos que caben en los dos lados. {Ja-da} es dormir, y tanto {jib-e ja-da} como {jib-e-seo ja-da} son correctos, en coreano hablado y escrito. La razón es que dormir es al mismo tiempo un estado, el que dura toda la noche, y un evento, el que ocurre mientras se duerme. {Meok-da}, comer, se comporta igual en algunos contextos y no en otros, y por eso la partícula de lugar en coreano no es un sistema cerrado: es consecuencia del verbo, y el verbo a veces deja la elección abierta. Un manual que presenta {e} como "en" y {eseo} como "de" está equivocado; la lectura bíblica depende por entero de esa distinción.

## Dos palabras para el destinatario

El destinatario tiene dos palabras, y no son sinónimos. {Hante} es el destinatario de una relación entre personas, y suena íntimo o de abajo hacia arriba: {chin-gu-han-te}, a un amigo, {eomeoni-han-te}, a la madre. {Ege} es la forma formal, y es la que la Escritura usa con Dios. En la Biblia {hante} casi nunca aparece referido a Dios: lo que aparece es {yehova-ege}, a él, y esa es la forma que el traductor tuvo que elegir.

La distinción se nota en el verbo que acompaña a cada una. {Hante} entra directamente en el verbo de la entrega y del habla: {hante ju-da}, dar a alguien, {hante mal-ha-da}, hablar a alguien. {Ege} acepta el mismo verbo y además el verbo cortés {deu-ri-da}, dar, que es la forma que se usa con quien está arriba. Quien traduce {hante} y {ege} con la misma preposición portuguesa "a" pierde el registro, y es el registro lo que dice quién está por encima.

Y hay una tercera forma, que no es una partícula distinta sino la misma después de vocal. Después de una sílaba terminada en vocal, {ege} aparece como {kke}: {ju-kke}, al Señor, {abeo-ji-kke}, al padre. Es la misma relación con la partícula adaptada al sonido del nombre, y el detalle que el lector bíblico va a encontrar en cada línea es que {ju-kke} humilla a quien escribe. Un hombre escribe {ju-kke} a Dios; dos hombres en la calle no.

## Dos partículas, un mismo sonido, Salmo 23 y Proverbios 3

El texto bíblico ofrece el ejemplo más limpio en dos líneas. En Proverbios 3:6 el verbo es {mar-ha-da}, entregar, y el nombre es Dios: {geu-ege}, a él. La relación es la de destinatario de una acción, y la partícula es {ege}. En Salmo 23:6 el verbo es {ge-hal-da}, morar, y el nombre es una casa: {yehova-ui jib-e}, en la casa del Señor. La relación es un lugar de permanencia, y la partícula es {e}.

La misma vocal, el mismo sonido, dos relaciones opuestas, y lo que las separa es el verbo: entregar pide {ege}, morar pide {e}. Un lector que trabaja del portugués traduce las dos con la preposición "a" y no ve diferencia ninguna, porque en portugués la preposición no cambia. En coreano el cambio existe, está escrito, y es lo que impide que la línea de Proverbios y la línea del Salmo signifiquen lo mismo.

Lo mismo vale para la palabra que cierra la frase de Proverbios: {geul-eul mar-ha-da}, entrégaselo a él. El sustantivo camino lleva partícula de objeto, el verbo es el de la entrega, y el destinatario es Dios. Tres posiciones, tres piezas, y la frase entera se sostiene sin una sola palabra que no esté ahí.
`),
  vocab: [
    V('e', '에', 'la partícula que apunta al nombre y espera que el verbo diga la relación'),
    V(
      'eseo',
      '에서',
      'de dónde, a partir de: punto de partida de un camino o de una transformación',
    ),
    V(
      'ege',
      '에게',
      'a alguien, en registro formal: el destinatario que la Escritura usa con Dios',
    ),
    V('hante', '한테', 'a alguien, en registro íntimo o de abajo hacia arriba'),
    V('kke', '께', 'a alguien: la forma de {ege} después de una sílaba terminada en vocal'),
    V('ju', '주', 'el Señor: la raíz de {ju-kke}'),
    V('ju-kke', '주께', 'al Señor: {ege} después de vocal, y la forma que humilla a quien escribe'),
    V(
      'yehova-ege',
      '여호와에게',
      'al Señor: el destinatario de una acción, en el registro de la Escritura',
    ),
    V('geul', '길', 'camino'),
    V('marhada', '맡기라', 'entregar, confiar: el verbo de Proverbios 3:6'),
    V('jib', '집', 'casa'),
    V('nanaga', '나가', 'salir: el verbo que hace de {eseo} un punto de partida'),
    V('hakgyo', '학교', 'escuela'),
    V('gongbu', '공부', 'estudiar: el verbo que hace de {eseo} el lugar de una acción'),
    V('itda', '있다', 'estar, quedarse: el verbo que hace de {e} un lugar de permanencia'),
    V('geori', '거리', 'calle, barrio: el sustantivo que acepta {e} y {eseo} con verbos distintos'),
    V('ja', '자다', 'dormir: el verbo que acepta las dos partículas, y la excepción a la regla'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{e} no tiene sentido propio. Con verbo de movimiento es destino, con verbo de permanencia es lugar, con nombre de tiempo es momento. Es el verbo el que dice cuál de las tres es.',
      ),
    },
    {
      n: '2',
      text: T(
        '{eseo} apunta el punto en que algo deja de estar como estaba: la salida de un camino o el medio de una transformación. Por eso {e} y {eseo} no son "destino y origen" en general.',
      ),
    },
    {
      n: '3',
      text: T(
        'El mismo lugar recibe {e} o {eseo} según el verbo: estado y permanencia piden {e}, evento y acción piden {eseo}. La regla tiene excepción, y la excepción son los verbos que caben en los dos lados.',
      ),
    },
    {
      n: '4',
      text: T(
        '{hante} es el destinatario de una relación entre personas; {ege} es la forma formal, y es la que la Escritura usa con Dios. La elección entre las dos es información de registro.',
      ),
    },
    {
      n: '5',
      text: T(
        'Después de una sílaba terminada en vocal, {ege} aparece como {kke}: {ju} + {kke}, {ju-kke}. Es la misma relación, con la partícula adaptada al sonido del nombre.',
      ),
    },
  ],
  notes: [
    {
      label: T('Lo que el portugués resuelve con una preposición'),
      text: T(
        'El portugués tiene una preposición "a" para destino, una "en" para lugar y una "de" para origen, y el contexto dice cuál es cuál. El coreano tiene cinco partículas para eso y ninguna es la preposición portuguesa traducida. La partícula coreana no nombra la relación: obliga al verbo a declararla, y por eso la misma palabra aparece en dos frases que el portugués escribe de forma distinta.',
      ),
    },
    {
      label: T('Por qué la Escritura no usa {hante} con Dios'),
      text: T(
        '{hante} es la forma de una relación entre personas, y la Escritura escribe para Dios en registro formal. Por eso lo que aparece en la página es {yehova-ege} y, después de vocal, {ju-kke}. Quien traduce las dos por "a" pierde el registro, y el registro es justamente lo que dice quién está por encima.',
      ),
    },
  ],
  examples: [
    { text: '학교에', gloss: T('hak-gyo-e — a la escuela: {e} sobre un verbo de movimiento') },
    {
      text: '학교에 있다',
      gloss: T(
        'hak-gyo-e it-da — estoy en la escuela: la misma partícula, ahora sobre un verbo de permanencia',
      ),
    },
    {
      text: '학교에서 공부한다',
      gloss: T(
        'hak-gyo-e-seo gong-bu-ham-ni-da — estudio en la escuela: el mismo nombre con {eseo}, porque ahora hay una acción sucediendo allí',
      ),
    },
    {
      text: '집에서 나간다',
      gloss: T('jib-e-seo na-nan-da — salgo de casa: {eseo} como punto de partida de un camino'),
    },
    {
      text: '친구한테',
      gloss: T(
        'chin-gu-han-te — a un amigo: {hante}, el destinatario de una relación entre personas',
      ),
    },
    {
      text: '그에게',
      gloss: T(
        'geu-ege — a él (Pv 3:6): {ege}, el destinatario formal, y aquí el destinatario es Dios',
      ),
    },
    {
      text: '주께',
      gloss: T(
        'ju-kke — al Señor: {ege} después de vocal, en la forma que humilla a quien escribe',
      ),
    },
    {
      text: '여호와의 집에',
      gloss: T(
        'yeho-va-ui jib-e — en la casa del Señor (Sl 23:6): {e} sobre el verbo morar, que es un lugar de permanencia',
      ),
    },
    {
      text: '길을 맡기라',
      gloss: T(
        'geul-eul mar-ha-da — entrégaselo: el sustantivo con partícula de objeto y el verbo de la entrega',
      ),
    },
    {
      text: '삼 시에',
      gloss: T(
        'sam si-e — a las tres: {e} sobre un nombre de tiempo, el tercer uso de la misma partícula',
      ),
    },
  ],
  tables: [
    {
      caption: T('La misma partícula con tres verbos, y tres relaciones'),
      head: [T('Nombre'), T('Verbo'), T('Lo que hace el verbo'), T('Partícula'), T('Lectura')],
      rows: [
        [T('{jib}'), T('{ga-da}'), T('se mueve hacia'), T('{e}'), T('a casa')],
        [T('{jib}'), T('{it-da}'), T('se queda en'), T('{e}'), T('en casa')],
        [T('{i-re}'), T('ninguno'), T('marca el momento'), T('{e}'), T('el domingo')],
        [T('{jib}'), T('{na-ga-da}'), T('sale desde'), T('{eseo}'), T('desde casa')],
        [T('{hwan}'), T('{sa-gi-da}'), T('se cambia por'), T('{eseo}'), T('por dinero')],
      ],
    },
    {
      caption: T('El mismo lugar con dos verbos, y la partícula que cambia'),
      head: [T('Frase'), T('Lo que está pasando'), T('Partícula'), T('Por qué')],
      rows: [
        [T('hakgyo-e itda'), T('nadie está haciendo nada'), T('{e}'), T('estado, no evento')],
        [
          T('hakgyo-e-seo gongbu-ham-ni-da'),
          T('una acción estásucediendo allí dentro'),
          T('{eseo}'),
          T('evento, no estado'),
        ],
        [
          T('jib-e ja-da'),
          T('dormir, que es estado y evento a la vez'),
          T('{e} y {eseo}'),
          T('la excepción: el verbo deja la elección abierta'),
        ],
      ],
    },
    {
      caption: T('Tres formas de destinatario, y el registro de cada una'),
      head: [T('Partícula'), T('Registro'), T('Verbo que suele acompañarla'), T('Cómo aparece')],
      rows: [
        [
          T('{hante}'),
          T('íntimo, o de abajo hacia arriba'),
          T('dar, hablar'),
          T('a un amigo, a la madre'),
        ],
        [
          T('{ege}'),
          T('formal, y el patrón de la Escritura'),
          T('dar, dar con cortesía'),
          T('{yehova-ege}, a él'),
        ],
        [T('{kke}'), T('el mismo {ege}, después de vocal'), T('—'), T('{ju-kke}, al Señor')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'En coreano, estar en la escuela es {hakgyo-e itda} y estudiar en la escuela es {hakgyo-e-seo gongbu-ham-ni-da}. ¿Qué cambia entre las dos frases?',
    ),
    options: [
      T(
        'el verbo: con un verbo de estado la escuela lleva {e}, y con un verbo de acción lleva {eseo}',
      ),
      T('el sustantivo: "escuela" es polisémico y por eso acepta las dos partículas'),
      T('el registro: la primera es formal y la segunda es coloquial'),
      T('nada: las dos partículas son sinónimos en este uso'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete el destinatario del "Señor" (주, sílaba terminada en vocal) en la forma que aparece después de vocal: 주____ (al Señor, con humildad)',
      ),
      answer: '께',
    },
    {
      kind: 'match',
      prompt: T('Relacione cada partícula con la relación que apunta'),
      pairs: [
        { a: T('{eseo}'), b: T('el punto en que algo deja de estar como estaba') },
        { a: T('{e}'), b: T('un lugar de permanencia, cuando el verbo es de estado') },
        { a: T('{hante}'), b: T('el destinatario de una relación entre personas') },
        { a: T('{ege}'), b: T('el destinatario formal, y la forma que la Escritura usa con Dios') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'En Proverbios 3:6, "entrega todos tus caminos a él", ¿qué está haciendo la partícula {ege}?',
      ),
      options: [
        T('marca el destinatario del acto de entregar, y el destinatario es Dios'),
        T('marca el lugar donde ocurre la entrega'),
        T('marca el punto de partida de los caminos'),
        T('sustituye la partícula de posesión del pronombre'),
      ],
      answer: 0,
    },
  ],
};
