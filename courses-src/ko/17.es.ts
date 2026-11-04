import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  section: T('Escritura'),
  title: T('Los cuatro cambios que hace el escritor y el hablante no ve'),
  subtitle: T(
    'El coreano se escribe con reglas de sonido que solo se despliegan cuando alguien habla: quien no las aprendió lee letra por letra, pronuncia mal y la página no le avisa',
  ),
  body: C(`## Un sistema, no una transcripción

El coreano se escribe con reglas de cambio de sonido, y esas reglas valen en la escritura aunque nadie esté hablando. Eso contradice la expectativa de quien llega de un alfabeto latino: una letra debería registrar un sonido, no una regla. Un coreano lee y pronuncia bien porque aprendió las reglas; quien no es coreano lee letra por letra, dice cada letra como suena sola y se equivoca. La ortografía coreana es un sistema, no una transcripción: registra la palabra, no el sonido. Y la consecuencia práctica es dura: quien no conoce las reglas no puede deducir la pronunciación a partir de la página. En portugués la letra entrega el sonido casi siempre; en coreano la letra entrega la palabra, y el sonido va un paso por detrás.

Cuatro reglas hacen casi todo el trabajo: {yeoneumhwa}, {bieumeumhwa}, {gyeongeumhwa} y la neutralización del final de sílaba. Tres de ellas cambian lo que se oye sin cambiar lo que está escrito, y por eso son invisibles para quien está leyendo. Saber que existen es lo que separa leer coreano de descifrar coreano.

## {yeoneumhwa}: la palabra escrita que miente sobre el habla

{yeoneumhwa} es la asociación consonántica, y es la regla más visible de las cuatro. Cuando un bloque termina en ng y el siguiente empieza en vocal, el ng suelta la g y se va al bloque siguiente, en la posición de consonante final. La palabra {song} seguida del bloque e está escrita como dos bloques, song y e, y se dice sone: el ng de song baja al e y se vuelve la final del bloque nuevo. Lo mismo dentro de una sola palabra: un bloque {um} seguido de uno que empieza en ing se escribe umin y se dice un.

Dos cosas importan aquí. La primera es que el contexto no participa: a quién amas, cuándo amas, con qué intención, nada de eso cambia el sonido. La regla es ciega al sentido, y eso es lo que la vuelve determinista, y por eso la pronunciación coreana se aprende como se aprende aritmética. La segunda es que {sarang}, el amor, no se mueve: el ng final se queda donde está, porque el bloque siguiente no empieza en vocal. No toda palabra con ng se asocia, y la condición es lo que viene detrás, no la letra.

Y hay un segundo tipo de asociación, más corto: una h inicial justo después de una i inicial desaparece y la h suena sola. La pronunciación se comprime, la escritura no cambia, y el detalle reaparece más abajo, con el final de sílaba.

## {bieumeumhwa} y {gyeongeumhwa}: lo que hace el oído y el papel no enseña

{bieumeumhwa} es la nasalización. Cuando k, d o b encuentra m o n en la sílaba siguiente, el sonido cambia a su versión nasal: ng, n, m. {gukmul} está escrito guk-mul y se dice gun-mul, porque la k final se vuelve n antes de la m. Eopda está escrito eop-da y se dice eop-tta: la p final se volvió m antes de la d, y la d se endureció, dos reglas en el mismo par de sílabas. Quien lee la página en voz alta, letra por letra, produce un sonido que ningún coreano produce.

{gyeongeumhwa} es la tensificación: después de un sonido sordo, la consonante siguiente queda tensa. {hakgyo}, la escuela, está escrito hak-gyo y se dice hak-kkyo, con la segunda k tensa. Y aquí está el punto central de la lección. A veces la escritura acompaña: la k tensa es un bloque distinto de la k floja, y el lector sabe que leyó esa. A veces la escritura no acompaña nada. La palabra coreana de "bueno" y la de "igual" tienen las mismas letras y pronunciaciones distintas, jot-tta y gat-tta, y la diferencia existe solo en la boca. El papel muestra las dos palabras como una misma cosa; la boca no. Ese es el caso en que leer hangul y hablar coreano son dos conocimientos separados, y el segundo necesita una regla.

## El final de sílaba, y los nombres que dejó el traductor

La cuarta regla no cambia ningún sonido: decide qué puede quedarse debajo del bloque. Una sílaba coreana cierra con siete consonantes, y ninguna de ellas es tensa ni aspirada. {bap}, el arroz cocido, está escrito bap y se dice bak: una b tensa no se sostiene al final de una sílaba, así que se neutraliza a la versión floja, que es la misma que la p. Y la regla de la ss: s seguido de i al final de la sílaba se vuelve ss, lo que hace que la palabra de "mejor" suene nat-tta en vez de lo que sugiere la escritura. Detalle al lado, y que solo aparece al hablar: la i inicial del coreano no tiene la oclusión en la garganta que el mandarín da a la misma vocal, de modo que la misma i que allí suena con gloto cerrado aquí suena lisa.

Y aquí la lección paga lo que prometió desde el principio. Los nombres propios bíblicos en coreano se escriben en hangul y se hablan en chino, y la razón es histórica, no ortográfica: quien traducía la Biblia al coreano era misionero chino, y leía el nombre bíblico en chino antes de escribirlo en coreano. Así, {yesu}, el nombre coreano de Jesús, trae la s china y no la sh que el hangul le entregaría a un hablante nativo. Lo mismo vale para {moise}, cuyo sonido viene de la lectura china de Moisés, y para {paulo}, hablado con la r rodante del chino. Hasta {sin}, el término que el coreano usa para Dios, viene de la lectura china de la palabra. El nombre coreano de Jesús no es el nombre de Jesús en coreano: es el nombre que el traductor oyó en su propia lengua y escribió en la suya.

Por eso saber las reglas fonéticas no es un detalle de pronunciación. Cuando alguien predica en coreano y pronuncia un nombre bíblico con el sonido del chino, no es un error de acento: es la pronunciación que la palabra guardó desde el día en que fue traducida. El nombre es un documento histórico, y las cuatro reglas de este capítulo son lo que permite leer ese documento sin confundir la pronunciación antigua con el sonido que la letra sugiere.
`),
  vocab: [
    V(
      'yeoneumhwa',
      '연음화',
      'asociación consonántica: el ng final migra al bloque siguiente cuando este empieza en vocal (yeoneumhwa)',
    ),
    V(
      'bieumeumhwa',
      '비음화',
      'nasalización: k, d y b se vuelven ng, n y m antes de m o n (bieumeumhwa)',
    ),
    V(
      'gyeongeumhwa',
      '경음화',
      'tensificación: después de un sonido sordo la consonante siguiente queda tensa (gyeongeumhwa)',
    ),
    V('song', '송', 'bloque con ng final; antes de vocal el ng migra y el sonido cambia (song)'),
    V('um', '음', 'vocal u con final m: la m migra y el sonido sale un (um)'),
    V('sarang', '사랑', 'amor; el ng final se queda y la palabra no cambia (sarang)'),
    V('gukmul', '국물', 'sopa: escrito guk-mul y hablado gun-mul (gukmul)'),
    V('hakgyo', '학교', 'escuela: escrito hak-gyo y hablado hak-kkyo (hakgyo)'),
    V('bap', '밥', 'arroz cocido: la b tensa no cierra la sílaba y sale bak (bap)'),
    V('yesu', '예수', 'Jesús en coreano: escrito en hangul, hablado como en chino (yesu)'),
    V('sin', '신', 'Dios; el término coreano viene de la lectura china de la palabra (sin)'),
    V('moise', '모세', 'Moisés en coreano, hablado con el sonido que le dio el chino (moise)'),
    V('paulo', '바오로', 'Pablo en coreano, hablado con la r rodante del chino (paulo)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{yeoneumhwa}: cuando un bloque termina en ng y el siguiente empieza en vocal, el ng baja a la posición de final. {song} más e se escribe song-e y se dice sone.',
      ),
    },
    {
      n: '2',
      text: T(
        'El contexto no participa en la pronunciación: a quién amas y cuándo amas no alteran ningún sonido. La regla es ciega al sentido, y por eso es determinista.',
      ),
    },
    {
      n: '3',
      text: T(
        '{bieumeumhwa}: k, d y b se vuelven ng, n y m antes de m o n. {gukmul} se escribe guk-mul y se dice gun-mul.',
      ),
    },
    {
      n: '4',
      text: T(
        '{gyeongeumhwa}: después de un sonido sordo la consonante siguiente queda tensa, como en {hakgyo}. A veces la escritura lo muestra y a veces no muestra nada — y cuando no muestra, solo la regla decide.',
      ),
    },
    {
      n: '5',
      text: T(
        'Una sílaba solo cierra con consonante floja: {bap} se dice bak. Y los nombres propios bíblicos se hablan en chino aunque se escriban en hangul, como {yesu} y {moise}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Cuando la escritura no cambia nada'),
      text: T(
        'El caso más duro de la lección es la {gyeongeumhwa} sin marca visual: la palabra coreana de "bueno" y la de "igual" tienen las mismas letras y pronunciaciones distintas, jot-tta y gat-tta. Un lector que descifra letra por letra llega a la pronunciación equivocada sin ninguna señal en la página de que se equivocó.',
      ),
    },
    {
      label: T('Un nombre bíblico es un documento histórico'),
      text: T(
        'Los primeros traductores coreanos eran misioneros chinos y leían el nombre bíblico en chino antes de escribirlo en coreano. Por eso {yesu} suena con la s de "sirio", {paulo} con la r rodante china y {sin} con la lectura china del término. La pronunciación coreana del nombre es la voz del traductor, grabada en la palabra.',
      ),
    },
  ],
  examples: [
    {
      text: '손에',
      gloss: T(
        'son-e — en la mano: escrito song-e, dicho sone, porque el ng baja al bloque siguiente',
      ),
    },
    { text: '국물', gloss: T('gun-mul — sopa: la k final se nasaliza a n antes de la m') },
    {
      text: '없다',
      gloss: T(
        'eop-tta — no tener: la p se vuelve m antes de la d y la d se endurece, dos reglas en un par',
      ),
    },
    {
      text: '학교',
      gloss: T('hak-kkyo — escuela: después de la k sorda, la g final se vuelve k tensa'),
    },
    {
      text: '예수',
      gloss: T(
        'ye-su — Jesús: la s es la s china, la de "sirio", y no el sonido que el hangul daría a un hablante nativo',
      ),
    },
  ],
  tables: [
    {
      caption: T('Los cuatro cambios, lado a lado'),
      head: [
        T('Regla'),
        T('Qué cambia'),
        T('Cuándo ocurre'),
        T('En la escritura'),
        T('En el habla'),
      ],
      rows: [
        [
          T('{yeoneumhwa}'),
          T('el ng final suelta la g y se vuelve la consonante final del bloque siguiente'),
          T('el bloque siguiente empieza en vocal'),
          T('song más e'),
          T('sone'),
        ],
        [
          T('{bieumeumhwa}'),
          T('k, d y b se vuelven ng, n y m'),
          T('antes de m o n'),
          T('guk-mul'),
          T('gun-mul'),
        ],
        [
          T('{gyeongeumhwa}'),
          T('la consonante que sigue queda tensa'),
          T('después de un sonido sordo'),
          T('hak-gyo'),
          T('hak-kkyo'),
        ],
        [
          T('final de sílaba'),
          T('la final tensa se neutraliza a la floja'),
          T('al final del bloque'),
          T('bap'),
          T('bak'),
        ],
      ],
    },
    {
      caption: T('La misma palabra en la escritura y en el habla'),
      head: [T('Palabra'), T('Bloques escritos'), T('Cómo se dice'), T('Regla')],
      rows: [
        [T('{sarang}'), T('sa-rang'), T('sarang'), T('ninguna: el ng se queda donde está')],
        [T('{song}'), T('song más e'), T('sone'), T('{yeoneumhwa}')],
        [T('{gukmul}'), T('guk-mul'), T('gun-mul'), T('{bieumeumhwa}')],
        [T('{hakgyo}'), T('hak-gyo'), T('hak-kkyo'), T('{gyeongeumhwa}')],
        [T('{bap}'), T('bap'), T('bak'), T('una final tensa no se sostiene')],
        [T('{yesu}'), T('ye-su'), T('yesu, con la s de "sirio"'), T('el nombre se habla en chino')],
      ],
    },
    {
      caption: T('Nombres propios: hangul escrito, chino hablado'),
      head: [
        T('Nombre'),
        T('Escrito en coreano'),
        T('Hablado en coreano'),
        T('De dónde viene el sonido'),
      ],
      rows: [
        [T('Jesús'), T('{yesu}'), T('ye-su'), T('del chino, con la s de "sirio"')],
        [T('Dios'), T('{sin}'), T('sin'), T('de la lectura china de la palabra para Dios')],
        [T('Moisés'), T('{moise}'), T('mo-se'), T('de la lectura china de Moisés')],
        [T('Pablo'), T('{paulo}'), T('pa-o-ro'), T('del chino, con la r rodante')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      '{gukmul} está escrita en dos bloques, pero nadie que hable coreano dice "guk-mul". ¿Qué pasó?',
    ),
    options: [
      T('{bieumeumhwa}: la k final se volvió n porque el bloque siguiente empieza en m'),
      T('{yeoneumhwa}: la l final subió al bloque siguiente'),
      T('el bloque siguiente empieza en vocal, así que la k subió'),
      T('el coreano pronuncia la k final de cualquier palabra como sorda antes de consonante'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Escribe en hangul el nombre coreano de Jesús, con la pronunciación que dejó el misionero chino: ____',
      ),
      answer: '예수',
    },
    {
      kind: 'match',
      prompt: T('Relaciona la regla con lo que hace'),
      pairs: [
        {
          a: T('{yeoneumhwa}'),
          b: T('el ng final migra al bloque siguiente cuando este empieza en vocal'),
        },
        { a: T('{bieumeumhwa}'), b: T('k, d y b se vuelven ng, n y m antes de m o n') },
        {
          a: T('{gyeongeumhwa}'),
          b: T('después de un sonido sordo la consonante siguiente queda tensa'),
        },
        { a: T('{sarang}'), b: T('el ng final se queda: ninguna de las tres reglas se aplica') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'La palabra coreana de "bueno" y la de "igual" se escriben con las mismas letras y se hablan distinto. ¿Por qué?',
      ),
      options: [
        T(
          'la {gyeongeumhwa} endurece la consonante después de un sonido sordo, y la escritura no lo enseña',
        ),
        T('las dos palabras tienen dos vocales compuestas con sonidos distintos'),
        T('el coreano distingue las palabras por la posición de la consonante final'),
        T('una de las dos palabras es un pronombre y la otra es un sustantivo'),
      ],
      answer: 0,
    },
  ],
};
