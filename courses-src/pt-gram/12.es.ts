import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  section: T('La regencia, la crasis y la colocación pronominal'),
  title: T('Crasis'),
  subtitle: T('Fusión de la preposición a con el artículo a'),
  body: C(`**Visión general.** La crasis aparece cuando la preposición {a} se fusiona con el artículo {a}: ante {o}, {a}, {os} y {as}, siempre.

**Regla 1.** Ante verbo, pronombre, numeral cardinal y nombre propio sin artículo, nunca: hay crasis en {Voy a la escuela} y en {Voy a la escuela}, pero no en {Voy a pie}.

**Regla 2.** La prueba es cambiar la preposición por {para}: {voy a la escuela} y {voy para la escuela} coexisten en el mismo sentido; {voy a la voy}, no.

**Regla 3.** Con nombre propio precedido de artículo hay crasis: en {al Señor}, {a la Iglesia}, {a los }; sin artículo, no: {a Cristo} y {para Dios}.

**Regla 4.** La crasis es siempre opcional en el registro coloquial: nadie yerra por no usarla, y nadie acierta por usarla donde no cabe.

**Aplicación.** En {El Verbo se hizo carne}, la preposición {en} más {carne} no genera crasis, y {se} es pronombre. Pero en {Voy a la misa} la crasis aparece porque el artículo {a} y la preposición {a} se fusionan en un solo acento. El detalle crítico: ni el griego ni el latín tienen crasis, y el {ad} latino se convierte en simple {a} en portugués, de modo que traducir {ad Dominum} por {al Señor} es decisión del traductor, no de la lengua de origen.

**Verificación.** Antes de escribir crasis, haz tres preguntas: ¿la palabra siguiente es **femenina**? ¿Tiene **artículo**? Y ¿es **verbo** o **pronombre personal**? Tres síes, crasis; cualquier no, sin crasis. Si las tres respuestas son sí y la oración aún suena extraña, haz la segunda prueba: cambia {a} por {para}. Si el sentido no cambia, la crasis puede ir.`),
  vocab: [
    V('crase', 'crase', 'fusión de {a} con {a}'),
    V('à', 'à', 'preposición a más artículo a'),
    V('às vezes', 'às vezes', 'a más las, con sentido de frecuencia'),
    V('as vezes', 'as vezes', 'artículo las más el sustantivo veces'),
    V('à noite', 'à noite', 'a más el, con sentido de tiempo'),
    V('a noite', 'a noite', 'a más noche, sin crasis'),
    V('ao Senhor', 'ao Senhor', 'crasis ante nombre propio con artículo'),
    V('a Cristo', 'a Cristo', 'sin crasis ante nombre propio sin artículo'),
    V('artigo', 'artigo', 'determinante que individualiza'),
    V('preposição', 'preposição', 'liga dos términos'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'La crasis aparece cuando la preposición {a} se fusiona con el artículo {a}: ante {o}, {a}, {os} y {as}, siempre.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Ante verbo, pronombre, numeral cardinal y nombre propio sin artículo, nunca: hay crasis en {Voy a la escuela} y en {Voy a la escuela}, pero no en {Voy a pie}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'La prueba es cambiar la preposición por {para}: {voy a la escuela} y {voy para la escuela} coexisten en el mismo sentido; {voy a la voy}, no.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Con nombre propio precedido de artículo hay crasis: en {al Señor}, {a la Iglesia}, {a los }; sin artículo, no: {a Cristo} y {para Dios}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'La crasis es siempre opcional en el registro coloquial: nadie yerra por no usarla, y nadie acierta por usarla donde no cabe.',
      ),
    },
  ],
  notes: [
    {
      label: T('Lo que el griego no tiene'),
      text: T(
        'Ni el griego antiguo ni el latín tienen crasis como fenómeno gramatical. Donde el latín escribe {ad Dominum}, el griego escribe {πρὸς τὸν κύριον}, y el portugués escribe {al Señor}. La crasis es una creación del portugués medieval, y por eso el traductor tiene que decidir: está vertiendo la palabra o la fusión que la lengua de destino hace por su cuenta.',
      ),
    },
    {
      label: T('La crasis que cambia el sentido'),
      text: T(
        'En {la palabra de Dios} la preposición {de} la exige el sustantivo; la {a} es artículo, y las dos juntas forman {la}. La crasis de {à} es la misma fusión vista del otro lado: dos {a} se vuelven uno. Lo que cambia es la función de la palabra, no la fusión.',
      ),
    },
  ],
  examples: [
    { text: 'vou à escola', gloss: T('Crasis: preposición {a} más artículo {a} ante {escuela}.') },
    {
      text: 'vou a pé',
      gloss: T('Sin crasis: {pie} es sustantivo sin artículo, y la preposición queda sola.'),
    },
    {
      text: 'refiro-me ao Senhor',
      gloss: T('Crasis ante nombre propio con artículo: {al Señor}.'),
    },
    {
      text: 'confio em Cristo',
      gloss: T('Sin crasis: un nombre propio sin artículo no recibe la fusión.'),
    },
    {
      text: 'às vezes',
      gloss: T('Crasis con sentido adverbial de frecuencia: {a} + {las} + {veces}.'),
    },
    {
      text: 'as vezes que viram o Senhor',
      gloss: T('Aquí no hay crasis: es artículo {las} + sustantivo {veces}.'),
    },
    { text: 'à noite', gloss: T('Crasis con sentido de tiempo determinado: {a} + {el}.') },
    {
      text: 'a noite toda',
      gloss: T('Sin crasis: el sentido es de duración, y {a} es artículo ante {noche}.'),
    },
    {
      text: 'O Verbo se fez carne',
      gloss: T('Ningún par {a} + {a} en la oración: no hay crasis en ningún punto.'),
    },
  ],
  tables: [
    {
      caption: T('Cuándo hay crasis y cuándo no'),
      head: [T('Situação'), T('Exemplo'), T('Crase?'), T('Porquê')],
      rows: [
        [T('ante artigo {a}'), T('{ao livro}'), T('sim'), T('preposição {a} + artigo {a}')],
        [
          T('ante nome próprio com artigo'),
          T('{ao Senhor}'),
          T('sim'),
          T('o nome próprio recebe artigo'),
        ],
        [
          T('ante nome próprio sem artigo'),
          T('{a Cristo}'),
          T('não'),
          T('sem artigo, não há o segundo {a}'),
        ],
        [T('ante verbo'), T('{aproveito para amar}'), T('não'), T('verbo não é nome')],
        [T('ante pronome'), T('{a Ele}'), T('não'), T('pronome pessoal não recebe artigo')],
        [T('ante numeral cardinal'), T('{a dois}'), T('não'), T('numeral não recebe artigo')],
        [T('ante {a} inicial de palavra'), T('{a agora}'), T('não'), T('{agora} é advérbio')],
        [
          T('sentido adverbial de frequência'),
          T('{às vezes}'),
          T('sim'),
          T('a preposição {a}assume sentido próprio'),
        ],
      ],
    },
    {
      caption: T('Los dos usos de {a} que se confunden'),
      head: [T('Função'), T('Exemplo'), T('Surgiu de'), T('Como reconhecer')],
      rows: [
        [
          T('preposição exigida pelo verbo'),
          T('{falei a Moisés}'),
          T('regência verbal'),
          T('troque por {para}'),
        ],
        [T('artigo definido'), T('{a palavra}'), T('determinação do nome'), T('troque por {essa}')],
        [
          T('crase de preposição com artigo'),
          T('{à palavra}'),
          T('fusão dos dois anteriores'),
          T('os dois casos juntos'),
        ],
        [
          T('preposição exigida pelo nome'),
          T('{a necessidade de}'),
          T('regência nominal'),
          T('pergunte pelo verbo de origem'),
        ],
      ],
    },
    {
      caption: T('La prueba de sustituir por {para}'),
      head: [T('Frase'), T('Troca por {para}'), T('Mesmo sentido?'), T('Conclusão')],
      rows: [
        [T('{vou à escola}'), T('{vou para a escola}'), T('sim'), T('crase cabível')],
        [T('{falou ao Alberto}'), T('{falou para o Alberto}'), T('não'), T('preferir {ao}')],
        [T('{a Deus}'), T('{para Deus}'), T('mudou o sentido'), T('não é crase possível')],
        [
          T('{o amor à pátria}'),
          T('{o amor para a pátria}'),
          T('não'),
          T('crase é a forma própria'),
        ],
        [T('{dei-o à luz}'), T('{dei-o para a luz}'), T('mudou'), T('não usar')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿En qué oración la crasis está correcta?'),
    options: [
      T('me refiero al Señor'),
      T('me refiero a el Señor'),
      T('confío a Dios'),
      T('voy a pie a la ciudad'),
    ],
    answer: 0,
    hint: T('El nombre propio con artículo lleva crasis; sin él, no.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('En {voy a pie}, no hay crasis porque:'),
      options: [
        T('{pie} es sustantivo sin artículo, y falta la segunda {a}'),
        T('{a} es adverbio y el adverbio nunca lleva crasis'),
        T('la crasis es obligatoria ante {p}'),
        T('{pie} es femenino, y el femenino exige crasis'),
      ],
      answer: 0,
      hint: T('Son tres condiciones: femenino, artículo y no verbo.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la oración con la respuesta correcta.'),
      pairs: [
        { a: T('{voy a la escuela}'), b: T('crasis posible') },
        { a: T('{voy a pie}'), b: T('sin crasis') },
        { a: T('{al Señor}'), b: T('crasis por nombre propio con artículo') },
        { a: T('{a Cristo}'), b: T('sin crasis') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('La crasis es la fusión de la preposición {a} con el artículo ______.'),
      answer: 'a',
      hint: T('Las dos {a} se vuelven un solo acento.'),
    },
  ],
};
