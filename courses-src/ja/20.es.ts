import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  section: T('Verbo'),
  title: T('El mismo verbo con una cola nueva: pasivo y causativo'),
  subtitle: T(
    'Las dos voces del japonés nacen del verbo que ya existe más una partícula pegada al final — y la letra que desaparece es la misma en los dos casos',
  ),
  body: C(`
## Una sola cola, dos voces

El español tiene una palabra para "ser hecho" y otra para "hacer que alguien haga". El japonés tiene un solo gesto: **el mismo verbo con una cola pegada al final**, y las dos voces salen de ahí. {nomareru} es "ser bebido"; {nomaseru} es "hacer beber". La raíz es la misma en las dos, y la cola es la que hace el trabajo: una dice que la acción padece, la otra dice que la acción se ordena.

Es la misma idea de la lección de los objetos, dos pasos más allá. Allí el verbo no decía si había objeto, y lo que lo decía era la partícula de objeto. Aquí el verbo no dice quién padece ni quién manda, y lo que lo dice es la cola. Por eso vale aprender el verbo por su **raíz**: quien sabe que {nomu} es la raíz sabe de dónde salen {nomareru} y {nomaseru} sin haber visto nunca ninguna de las dos.

## La cola del pasivo: {reru}

El pasivo se hace con {reru} después del verbo. La regla cambia según la conjugación, y aquí es donde se atasca el que empieza.

Un verbo de **segunda conjugación**, el que termina en u: la u sale de la punta y entra {reru}. {nomu} "beber" se vuelve {nomareru} "ser bebido". Una letra cambiada, y la acción cambia de mano.

Un verbo de **primera conjugación**, el que quita la ru: la ru se va y entra {reru}. {taberu} "comer" se vuelve {taberareru} "ser comido"; {miru} "ver" se vuelve {mirareru} "ser visto". Este es el detalle técnico que atasca al principiante: la letra de la ru no sobrevive a la flexión, y quien la mantiene escribe una palabra que existe y no significa nada.

Todavía hay dos verbos que se escapan de la regla, el de "ir" y el de "venir", y los dos son el mismo {reru} sobre una raíz cambiada. Y hay un truco de diccionario: las formas nuevas tienen entrada propia, y por eso el vínculo con el verbo de origen queda invisible para quien busca palabra por palabra.

## La cola del causativo: {ni} más el verbo proyectivo

El causativo es otra cola, {saseru}, y viene siempre con la partícula {ni}: el {ni} dice a quién se le hace la acción, y el verbo va en forma proyectiva. El cambio de conjugación es el mismo de la sección anterior: {nomu} se vuelve {nomaseru}, {taberu} se vuelve {tabaseru}, {miru} se vuelve {missaseru}. Una excepción que todo el mundo olvida: {iku} no repite su letra inicial en el causativo, y el resultado es {ikaseru}.

Y aquí está el detalle que hace que el principiante traduzca mal: la misma frase puede ser "dejar" o "obligar". {kodomo ni ikaseru} es "dejo ir a mi hijo" y es "hago ir a mi hijo", y nada en la forma dice cuál de las dos cosas es. Quien elige es el contexto: quién habla, y a quién van dirigidas las órdenes.

Este gesto ya apareció en dos otros idiomas de este proyecto. En coreano es una partícula pegada al final del verbo que hace exactamente el mismo trabajo; en mandarín la causa aparece como "dejar" o "hacer" con el verbo justo después. Tres idiomas, tres piezas distintas, un solo gesto: la acción que alguien manda hacer.

## El pasivo incolor, la cola doble y Marcos 15:5

El pasivo simple esconde quién actuó: "fue visto" no dice por quién. Cuando el agente aparece pegado con {ni}, el pasivo cambia de sentido y se convierte en lo que los estudiosos llaman incolor: el sujeto de la frase es **el agente**, y la acción es una acción mala sufrida por quien está en el otro extremo. {kare wa watashi ni mirareru} es "soy visto por él", la misma forma de {mirareru} de antes, con otra persona en lugar del sujeto y {ni} donde antes no había nada. Compara los dos pares en la última tabla, porque es el detalle más fino de aquí.

Dos cosas más, y las dos son diferencias reales entre los idiomas. Primera: el japonés **no tiene partícula de agente**. Donde el mandarín resuelve eso con una partícula pegada antes del verbo, el japonés escribe "por + persona" o no escribe nada, y la construcción queda más flexible, porque la información se puede omitir sin que la frase se rompa. Segunda: se puede aplicar el pasivo encima de un causativo, verbo más {saseru} más {reru}, y la forma resultante significa literalmente "ser hecho por alguien porque alguien lo mandó hacer". Es la cola doble, la más compleja de las dos, y aparece en texto bíblico; aquí queda solamente nombrada.

El gancho cierra el camino con las dos voces en una sola frase. Marcos 15:5 dice que Pilato entregó a Jesús a ellos para que fuera crucificado: en japonés, "entregó" es un causativo, él mandó que lo entregaran, y "para que fuera crucificado" es un pasivo. Una frase con las dos colas que acabamos de ver, y el lector que reconoce las dos formas entiende el versículo sin tener que buscar ningún otro verbo.
`),
  vocab: [
    V('reru', 'れる', 'la cola del pasivo: verbo más {reru} dice "ser hecho"'),
    V('saseru', 'させる', 'la cola del causativo: verbo más {seru} dice "hacer que alguien haga"'),
    V('ni', 'に', 'la partícula que dice a quién se le hace la acción'),
    V('nomu', '飲む', 'beber (nomu) — raíz de dos voces'),
    V('nomareru', '飲まれる', 'ser bebido — el pasivo de {nomu}, con {reru} en lugar de la u'),
    V('nomaseru', '飲ませる', 'hacer beber — el causativo de {nomu}, con {seru} en lugar de la u'),
    V('taberu', '食べる', 'comer (taberu) — verbo de primera conjugación'),
    V('taberareru', '食べられる', 'ser comido — {taberu} pierde la ru y gana {reru}'),
    V('tabaseru', '食べさせる', 'hacer comer — {taberu} pierde la ru y gana {seru}'),
    V('miru', '見る', 'ver (miru) — la raíz del par que decide el incolor'),
    V(
      'mirareru',
      '見られる',
      'ser visto — se vuelve pasivo incolor cuando el agente viene con {ni}',
    ),
    V('missaseru', '見させる', 'hacer ver — el causativo de {miru}'),
    V('iku', '行く', 'ir (iku) — el único que no repite la letra inicial en el causativo'),
    V('ikaseru', '行かせる', 'hacer ir, o dejar ir: las dos cosas al mismo tiempo'),
    V('kakerareru', '架けられる', 'ser crucificado — el pasivo del verbo de clavar en la cruz'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Pasivo y causativo nacen del mismo verbo: el pasivo es verbo más {reru}, el causativo es verbo más {seru} con la partícula {ni}. Una cola, dos voces.',
      ),
    },
    {
      n: '2',
      text: T(
        'Segunda conjugación, el verbo que termina en u: la u sale de la punta y entra {reru} — {nomu} se vuelve {nomareru} y {nomaseru}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Primera conjugación, el verbo que quita la ru: la ru desaparece y entran {reru} o {seru} — {taberu} se vuelve {taberareru} y {tabaseru}. Quien mantiene la ru escribe una palabra que no existe.',
      ),
    },
    {
      n: '4',
      text: T(
        'El causativo dice a quién se le hace la acción con el {ni}, y la misma frase puede ser "dejar" u "obligar": quien elige es el contexto, nunca la forma.',
      ),
    },
    {
      n: '5',
      text: T(
        'El japonés no tiene partícula de agente: el agente viene como "por + persona" o se omite. Y cuando el agente aparece con {ni}, el pasivo es incolor — el sujeto es quien actuó, la acción es mala y el otro es el objetivo.',
      ),
    },
  ],
  notes: [
    {
      label: T('La cola es la información, el verbo es el resto'),
      text: T(
        'Es la lección 13 vista desde otro ángulo. El verbo japonés no flexiona por tener objeto, y ahora vemos que tampoco flexiona por voz: lo que carga siempre con la información de la frase es la partícula o la cola. El diccionario japonés da entrada propia a cada flexión, y por eso la relación entre ellas queda escondida para quien busca palabra por palabra. Quien aprende la raíz aprende las dos voces de una vez.',
      ),
    },
    {
      label: T('El incolor es un pasivo normal con el sujeto cambiado'),
      text: T(
        'La forma {mirareru} es la misma en los dos usos: lo que cambia es quién está en el sujeto y si el agente aparece. Sin agente, "algo fue visto"; con el agente en {ni}, "alguien fue visto por él", y el tono que viene junto es de acción mala sufrida. El nombre viene del hecho de que la voz no cambia de color: el verbo sigue siendo el mismo verbo.',
      ),
    },
  ],
  examples: [
    {
      text: '酒を飲む',
      gloss: T('sake o nomu — bebo vino: la forma neutra, que es la raíz de las dos voces'),
    },
    {
      text: '酒を飲まれる',
      gloss: T('sake o nomareru — el vino es bebido: pasivo, {nomu} más {reru}'),
    },
    {
      text: '子供に酒を飲ませる',
      gloss: T(
        'kodomo ni sake o nomaseru — hago beber a mi hijo, o lo dejo beber: el {ni} dice a quién',
      ),
    },
    {
      text: '私に見られる',
      gloss: T('watashi ni mirareru — soy visto por él: el pasivo incolor, con el agente en {ni}'),
    },
    {
      text: 'そこでピラトスは彼らを引き渡して、十字架に架けられるようにした',
      gloss: T(
        'sore de pirato wa kare-tachi o hikiwatashite, jūjika ni kakerareru yō ni shita — y Pilato lo entregó a ellos para que fuera crucificado (Marcos 15:5): un causativo y un pasivo en la misma frase',
      ),
    },
  ],
  tables: [
    {
      caption: T('La tabla central: el mismo verbo, las dos voces'),
      head: [T('Verbo'), T('Neutro'), T('Pasivo'), T('Causativo')],
      rows: [
        [
          T('{nomu}, "beber"'),
          T('{nomu}'),
          T('{nomareru} — ser bebido'),
          T('{nomaseru} — hacer beber'),
        ],
        [
          T('{taberu}, "comer"'),
          T('{taberu}'),
          T('{taberareru} — ser comido'),
          T('{tabaseru} — hacer comer'),
        ],
        [
          T('{miru}, "ver"'),
          T('{miru}'),
          T('{mirareru} — ser visto'),
          T('{missaseru} — hacer ver'),
        ],
        [
          T('{iku}, "ir"'),
          T('{iku}'),
          T('{kareru} — irregular'),
          T('{ikaseru} — hacer ir, sin repetir la letra'),
        ],
      ],
    },
    {
      caption: T('La letra que desaparece: segunda conjugación contra primera conjugación'),
      head: [T('Conjugación'), T('Qué pasa en la flexión'), T('Pasivo'), T('Causativo')],
      rows: [
        [
          T('segunda, termina en u'),
          T('la u sale de la punta y la cola ocupa el lugar'),
          T('{nomu} → {nomareru}'),
          T('{nomu} → {nomaseru}'),
        ],
        [
          T('primera, quita la ru'),
          T('la ru se va y la cola entera se añade'),
          T('{taberu} → {taberareru}'),
          T('{taberu} → {tabaseru}'),
        ],
        [
          T('ir y venir'),
          T('la raíz cambia y la regla entera se pierde'),
          T('{kareru}, forma irregular'),
          T('{ikaseru}, sin repetir la letra'),
        ],
      ],
    },
    {
      caption: T('El pasivo simple y el incolor: la misma forma, el sujeto cambiado'),
      head: [T('Frase'), T('Quién es el sujeto'), T('Qué se lee'), T('El agente')],
      rows: [
        [T('{hon ga mirareru}'), T('el libro'), T('el libro fue visto'), T('no aparece')],
        [
          T('{watashi ga kare ni mirareru}'),
          T('yo'),
          T('fui visto por él'),
          T('viene en {ni}, y la acción es mala'),
        ],
        [
          T('{kare ga watashi ni o mawareru}'),
          T('él'),
          T('recibí de él un golpe que no pedí'),
          T('viene en {ni}, junto al objeto marcado'),
        ],
        [
          T('{kare wa watashi ni mita}'),
          T('él'),
          T('él me vio, y eso es neutro'),
          T('aquí no hay pasivo ninguno'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {kare wa watashi ni mirareru}, ¿qué está haciendo el {ni}?'),
    options: [
      T('marca el sujeto que padece la acción'),
      T('marca el agente, y el pasivo se vuelve incolor: el agente es el sujeto'),
      T('marca el objeto directo del verbo'),
      T('marca que la acción fue en pasado'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el pasivo de {nomu}, verbo de segunda conjugación: 飲____れる'),
      answer: 'ま',
    },
    {
      kind: 'match',
      prompt: T('Une la forma con lo que hace'),
      pairs: [
        { a: T('{nomareru}'), b: T('pasivo de un verbo de segunda conjugación') },
        { a: T('{nomaseru}'), b: T('causativo de un verbo de segunda conjugación') },
        { a: T('{taberareru}'), b: T('pasivo de un verbo de primera conjugación, sin la ru') },
        { a: T('{tabaseru}'), b: T('causativo de un verbo de primera conjugación, sin la ru') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('En Marcos 15:5, ¿qué hace el verbo de "lo entregó a ellos"?'),
      options: [
        T('es un causativo: él mandó que lo entregaran'),
        T('es un pasivo incolor: la entrega fue padecida por él'),
        T('es un verbo neutro, y el pasivo está solo en "para que fuera crucificado"'),
        T('es una forma de potencial, y esa es la lectura correcta'),
      ],
      answer: 0,
    },
  ],
};
