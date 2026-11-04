import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  section: T('Verbo'),
  title: T('El verbo se conjuga para marcar el final de su propia cláusula'),
  subtitle: T(
    'Cuando una frase tiene más de una cláusula, el verbo japonés se conjuga en medio de ella y todo lo que viene después vuelve a la forma base — eso es lo que hace que el texto parezca truncado',
  ),
  body: C(`
## El verbo va al final de su cláusula

El verbo se conjuga **exactamente cuando hay otra cláusula detrás**. Si es el último de la frase, queda plano.

El portugués pone el verbo al final de la frase. El japonés lo pone al final de la cláusula, y eso solo se ve cuando la frase tiene más de una. El caso más corto es el de dos cláusulas nominales: "yo voy, él se queda" es {私は行きます} y {彼はいます}. El primer verbo se conjuga, el segundo queda plano, y quien lee busca el verbo al final de la frase entera y no encuentra nada allí.

Y el primer verbo se conjuga **precisamente** porque tiene algo detrás. La conjugación es la marca de "aquí terminó mi cláusula": {行きます} dice "voy" y ya no es la última palabra de la frase, así que sube a la serie cortés. Si la frase terminara ahí, {私は行きます} se leería como una sola cláusula, verbo plano, con nada después.

## La excepción honrosa: mismo sujeto, conjugación opcional

Hay un caso en que la conjugación puede omitirse: cuando la cláusula que sigue tiene el mismo sujeto, o sujeto omitido. "Yo como manzana y como verduras" puede ser {りんごを食べ、野菜も食べる}, con {食べる} dos veces y todo plano. Compárese con {彼も食べます}: allí el sujeto cambia, y la conjugación deja de ser opcional.

Lo que merece atención es cuánto trabajo cubre esa excepción, porque es mucho mayor de lo que sugiere la regla principal. La conjugación marca una frontera, y una frontera solo existe cuando hay dos trozos que hay que separar. En el caso más común del japonés escrito esos dos trozos son el sujeto y el resto: en "yo voy, él se queda", la conjugación del primer verbo es lo que impide leer "voy, él" como un solo sintagma y "se queda" como el verbo de toda la frase. Quite la conjugación y la frase quizá siga siendo legible por el contexto, pero el japonés pierde la marca de que el sujeto cambió, y el lector tiene que adivinarlo.

Hay además un caso intermedio, que es lo que más confunde a quien empieza: cuando la segunda cláusula trae un sujeto nuevo pero elíptico, casi siempre tácito, la conjugación del primer verbo es lo que separa a los dos sujetos. En {りんごを食べ、野菜も食べる} el pronombre aparece una vez y sirve para las dos cláusulas, y es la forma plana de {食べる} la que dice que el mismo sujeto continúa; si el sujeto cambiara, la segunda cláusula sería {彼も食べます} y la conjugación del primer verbo sería obligatoria. Lo mismo ocurre cuando lo que viene detrás es un objeto: en {本を読む} el {を} deja claro que la frase no acabó en el verbo, y el verbo puede quedar plano porque no hay otra cláusula detrás.

Y la consecuencia práctica es la que se siente al leer. Cuando el mismo sujeto atraviesa las dos cláusulas, el japonés prefiere la forma plana; cuando los sujetos cambian, la conjugación es obligatoria. Quien no sabe cuál de los dos casos está leyendo falla en la misma proporción, y falla en silencio, porque una conjugación de más o de menos no produce error visible en la frase.

Fíjese en que esta conjugación no es tiempo ni modo: es demarcación de frontera. Responde a una pregunta estructural, "¿terminó mi cláusula?", y no a una pregunta de cuándo. Por eso la misma serie cortés que marca el tiempo en otro sitio aparece aquí marcando una unión, y por eso es tan difícil de leer para quien empezó por el tiempo verbal.

## Verbo en medio: la frontera como pista de lectura

Una cláusula puede quedar en medio de la frase. "Yo, cuando llegué a Tokio, fui a ver al profesor" es {東京に着いたとき} más {先生を見に行った}: la cláusula condicional de {toki} es una cláusula completa, con verbo propio, y por eso el verbo principal se conjuga. Es el último de su cláusula y no el último de la frase. El verbo conjugado es una **pista de lectura**: en cuanto usted ve {行きました}, aquella cláusula terminó y empezó la siguiente. En portugués nada marca ese punto; en japonés la marca es la conjugación.

El otro lado también merece mención: la frontera es visible por causa del verbo, y el verbo puede estar en medio cuando la frase lleva tres o cuatro cláusulas. Quien busca el verbo al final de la frase lee despacio y se equivoca; quien busca la frontera lee al ritmo del habla y se detiene exactamente donde debe.

## El sustantivo relativo concuerda con el verbo

Aquí está el detalle fino. "El libro que leí" es {私が読んだ本}: el sustantivo relativo es {本}, el pronombre {私} es el sujeto de la cláusula relativa, y por eso el verbo es {読んだ}, conjugado, con {が}. Lo que va dentro del paréntesis del relativo es una cláusula, y {が} es la partícula que conjuga el verbo.

Si el sustantivo relativo es el sujeto, el verbo queda en la forma base: "el hombre que viene" es {来る人}, con {来る} plano y sin partícula. El hombre viene: el relativo es el sujeto, no hay otro sujeto después, y la conjugación no tiene nada que marcar. El mismo {読んだ} muestra la otra cara en {本を読んだ人}: "la persona que leyó el libro", donde el relativo es objeto y el verbo se conjuga.

El gancho final es la apertura de Juan 1: {初めには言葉があり、言葉は神と共にあった}. La cláusula "y la Palabra estaba" tiene el verbo en medio de la frase porque tiene detrás una cláusula propia, "y Dios lo hizo". La frontera aparece en un versículo de cuatro palabras, y quien reconoce la conjugación lee el versículo como dos cláusulas y no como una lista.
`),
  vocab: [
    V('iku', '行く', 'ir; salir (iku)'),
    V('iru', 'いる', 'estar; quedarse en un lugar (iru)'),
    V('nomu', '読む', 'leer (nomu)'),
    V('taberu', '食べる', 'comer (taberu)'),
    V('hon', '本', 'libro (hon)'),
    V('ringo', 'りんご', 'manzana (ringo)'),
    V('yasai', '野菜', 'verdura; legumbre (yasai)'),
    V('sensei', '先生', 'profesor; maestro (sensei)'),
    V('Tōkyō', '東京', 'Tokio (Tōkyō)'),
    V('toki', '時', 'cuando; tiempo (toki)'),
    V('kami', '神', 'Dios (kami)'),
    V('kotoba', '言葉', 'palabra; Palabra (kotoba)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El verbo japonés va al final de su cláusula, no al de la frase entera: se conjuga en medio y todo lo que viene después vuelve a la forma base.',
      ),
    },
    {
      n: '2',
      text: T(
        'El verbo se conjuga exactamente cuando hay otra cláusula detrás; si es la última, queda plano.',
      ),
    },
    {
      n: '3',
      text: T(
        'Si la cláusula siguiente tiene el mismo sujeto — o sujeto omitido — la conjugación puede omitirse: {りんごを食べ、野菜も食べる} es correcto.',
      ),
    },
    {
      n: '4',
      text: T(
        'La conjugación marca la frontera de la cláusula: verla es ver que otra empezó. No marca tiempo.',
      ),
    },
    {
      n: '5',
      text: T(
        'Con un sustantivo relativo, el verbo se conjuga cuando el relativo es objeto ({が}) y queda en la forma base cuando el relativo es sujeto.',
      ),
    },
  ],
  notes: [
    {
      label: T('La conjugación no es tiempo'),
      text: T(
        'La lección 8 mostró que el verbo japonés no se conjuga para marcar el pasado. Aquí sí se conjuga, y aparece la misma serie cortés — pero lo que dice es "aquí terminó mi cláusula", no "esto pasó". La misma superficie, dos trabajos.',
      ),
    },
    {
      label: T('La cláusula relativa es una cláusula escondida'),
      text: T(
        'La cláusula relativa es una cláusula como cualquier otra: tiene sujeto, tiene verbo y obedece la misma regla de frontera. El sustantivo que modifica es el tópico, {が} es el sujeto del relativo, y por eso el verbo se conjuga exactamente igual que fuera del relativo.',
      ),
    },
  ],
  examples: [
    {
      text: '私は行きます、彼はいます',
      gloss: T('watashi wa ikimasu, kare wa imasu — yo voy, él se queda'),
    },
    {
      text: '彼はここにいる',
      gloss: T('kare wa koko ni iru — él está aquí, y el verbo queda plano'),
    },
    {
      text: 'りんごを食べ、野菜も食べる',
      gloss: T(
        'ringo o taberu, yasai mo taberu — como una manzana y como verduras, con el mismo sujeto',
      ),
    },
    {
      text: '東京に着いたとき先生を見に行った',
      gloss: T(
        'Tōkyō ni tsuita toki sensei o mi ni itta — cuando llegué a Tokio, fui a ver al profesor',
      ),
    },
    {
      text: '初めには言葉があり、言葉は神と共にあった',
      gloss: T(
        'hazime ni wa kotoba ga ari, kotoba wa kami to tomo ni atta — en el principio era la Palabra, y la Palabra estaba con Dios (Juan 1:1)',
      ),
    },
  ],
  tables: [
    {
      caption: T('Lo que decide la conjugación del verbo'),
      head: [T('Situación'), T('El verbo queda'), T('Ejemplo')],
      rows: [
        [
          T('es la última cláusula de la frase'),
          T('plano, forma base'),
          T('{彼はいます} — "él se queda"'),
        ],
        [
          T('hay otra cláusula después, con otro sujeto'),
          T('conjugado'),
          T('{私は行きます} — "yo voy"'),
        ],
        [
          T('hay otra cláusula después, con el mismo sujeto'),
          T('puede quedar plano'),
          T('{りんごを食べ、野菜も食べる} — "como manzana, como verduras"'),
        ],
        [
          T('el sustantivo relativo es el sujeto'),
          T('plano, sin partícula'),
          T('{来る人} — "la persona que viene"'),
        ],
        [
          T('el sustantivo relativo es el objeto'),
          T('conjugado con {が}'),
          T('{私が読んだ本} — "el libro que leí"'),
        ],
      ],
    },
    {
      caption: T('Dónde se conjuga el verbo dentro de la frase'),
      head: [T('Frase'), T('Dónde está el verbo'), T('Lectura')],
      rows: [
        [
          T('{私は行きます、彼はいます}'),
          T('en medio'),
          T('dos cláusulas: la conjugación es la frontera'),
        ],
        [T('{彼はここにいる}'), T('al final'), T('una sola cláusula: el verbo queda plano')],
        [
          T('{東京に着いたとき先生を見に行った}'),
          T('en medio y al final'),
          T('la cláusula de {toki} cierra antes del verbo principal'),
        ],
        [
          T('{初めには言葉があり、言葉は神と共にあった}'),
          T('en medio'),
          T('la primera conjugación muestra que la frase sigue'),
        ],
      ],
    },
    {
      caption: T('El relativo: el verbo sigue lo que hace el sustantivo relativo'),
      head: [T('Frase'), T('Verbo'), T('Glosa')],
      rows: [
        [
          T('{私が読んだ本}'),
          T('{読んだ}, conjugado con {が}'),
          T('el libro que leí: el relativo es objeto'),
        ],
        [
          T('{本を読んだ人}'),
          T('{読んだ}, conjugado con {を}'),
          T('la persona que leyó el libro: el relativo es objeto'),
        ],
        [
          T('{来る人}'),
          T('{来る}, forma base, sin partícula'),
          T('la persona que viene: el relativo es sujeto'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {私は行きます、彼はいます}, ¿por qué se conjuga el primer verbo?'),
    options: [
      T('porque hay otra cláusula detrás'),
      T('porque es pasado'),
      T('por cortesía, y la segunda forma también'),
      T('porque es el verbo principal de la frase'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'En "yo voy, él se queda", complete la forma conjugada de {iku}: yo voy ____, él se queda',
      ),
      answer: 'ikimasu',
    },
    {
      kind: 'match',
      prompt: T('Une la forma verbal con lo que está haciendo'),
      pairs: [
        { a: T('{ikimasu}'), b: T('conjugado: hay otra cláusula detrás') },
        { a: T('{iru}'), b: T('plano: es la última cláusula') },
        {
          a: T('{taberu}'),
          b: T('puede quedar plano: la cláusula siguiente tiene el mismo sujeto'),
        },
        { a: T('{kuru}'), b: T('plano: el sustantivo relativo es el sujeto') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('En {初めには言葉があり、言葉は神と共にあった}, ¿qué está marcando {あり}?'),
      options: [
        T('la frontera de la primera cláusula: detrás viene otra'),
        T('el pasado de la historia'),
        T('la diferencia entre cortés y llano'),
        T('el final del versículo'),
      ],
      answer: 0,
    },
  ],
};
