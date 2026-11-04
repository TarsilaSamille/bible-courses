import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  section: T('La oración y sus términos'),
  title: T('Análisis sintáctico completo'),
  subtitle: T('Identificación ordenada de los términos'),
  body: C(`**Visión general.** Primero se aíslan {sujeto} y {predicado}; después se examinan los demás términos: en {creó Dios los cielos}, el verbo {creó} va antes del sujeto, y el orden no cambia el análisis.

**Regla 1.** El {determinante} no es núcleo: en {los cielos}, el {los} es artículo y el núcleo es {cielos}; lo que responde a {¿qué?} es el nombre, no el artículo.

**Regla 2.** La {preposición exigida} decide entre {objeto indirecto}, {complemento nominal} y {adjunto adverbial}: en {habló con Moisés}, quien exige {con} es el verbo {hablar}.

**Regla 3.** La {prueba del núcleo} separa artículo de objeto: si en {creó los cielos} el {los} fuera el objeto, el nombre {cielos} se quedaría sin núcleo y la oración no cerraría.

**Regla 4.** Cinco preguntas cierran el análisis: ¿el término es **exigido** o **añadido**? ¿Es **núcleo** o **determinante**? ¿**Concuerda** con otro término? ¿Está presente la **preposición exigida**? Y ¿el **sentido** lo confirma?

**Aplicación.** En {No principio creó Dios los cielos y la tierra}: verbo {creó}, voz activa, tercera persona del singular. Sujeto {Dios}, determinado y pospuesto. Predicado verbal {creó los cielos y la tierra}. Objetos directos {los cielos} y {la tierra}. Adjunto adverbial {no principio}, de tiempo. Fíjate en que {los} y {la} son determinantes y no objetos, y esa comprobación del núcleo es lo que separa {objeto directo} de {artículo}.

**Verificación.** Antes de decir qué es un término, pregunta cinco veces: ¿es **exigido** o **añadido**? ¿Es **núcleo** o **determinante**? ¿**Concuerda** con otro término? ¿Está presente la **preposición exigida**? Y ¿el **sentido** en el contexto lo confirma? Si falla cualquiera de las cinco, la clasificación está mal.`),
  vocab: [
    V('análise sintática', 'análise sintática', 'identificación ordenada de los términos'),
    V('sujeito', 'sujeito', 'término que responde a quién'),
    V('predicado', 'predicado', 'lo que se declara del sujeto'),
    V('objeto direto', 'objeto direto', 'complemento del verbo sin preposición'),
    V('objeto indireto', 'objeto indireto', 'complemento del verbo con preposición'),
    V('complemento nominal', 'complemento nominal', 'complemento de un nombre'),
    V('adjunto', 'adjunto', 'término que se puede quitar'),
    V('período', 'período', 'secuencia completa de oraciones'),
    V('núcleo', 'núcleo', 'término que da sentido al conjunto'),
    V('os céus', 'os céus', 'artículo más sustantivo, no objeto'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Primero se aíslan {sujeto} y {predicado}; después se examinan los demás términos: en {creó Dios los cielos}, el verbo {creó} va antes del sujeto, y el orden no cambia el análisis.',
      ),
    },
    {
      n: '§2',
      text: T(
        'El {determinante} no es núcleo: en {los cielos}, el {los} es artículo y el núcleo es {cielos}; lo que responde a {¿qué?} es el nombre, no el artículo.',
      ),
    },
    {
      n: '§3',
      text: T(
        'La {preposición exigida} decide entre {objeto indirecto}, {complemento nominal} y {adjunto adverbial}: en {habló con Moisés}, quien exige {con} es el verbo {hablar}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'La {prueba del núcleo} separa artículo de objeto: si en {creó los cielos} el {los} fuera el objeto, el nombre {cielos} se quedaría sin núcleo y la oración no cerraría.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Cinco preguntas cierran el análisis: ¿el término es **exigido** o **añadido**? ¿Es **núcleo** o **determinante**? ¿**Concuerda** con otro término? ¿Está presente la **preposición exigida**? Y ¿el **sentido** lo confirma?',
      ),
    },
  ],
  notes: [
    {
      label: T('El orden griego que no cambia el análisis'),
      text: T(
        'En {No principio creó Dios los cielos y la tierra}, el orden griego (ὁ θεὸς ἐποίησεν τοὺς οὐρανοὺς) pone el sujeto después del verbo y el adjunto al principio, al contrario del portugués actual. El análisis es el mismo en los dos casos: lo que cambia es la posición, y la posición es lo que hace tropezar al lector sin experiencia, no la estructura.',
      ),
    },
    {
      label: T('Por qué funciona la prueba del núcleo'),
      text: T(
        'Todo sintagma tiene un núcleo, y es el núcleo el que responde a la pregunta de contenido. En {los cielos}, {los} es determinante y {cielos} es núcleo. Si {los} fuera el objeto directo, {cielos} quedaría suelto, y un nombre suelto no completa ningún verbo. Por eso la prueba decide en una línea lo que la gramática tarda tres párrafos en explicar.',
      ),
    },
  ],
  examples: [
    {
      text: 'No princípio criou Deus os céus e a terra.',
      gloss: T(
        'Sujeto {Dios} pospuesto; predicado verbal; dos objetos directos; un adjunto de tiempo.',
      ),
    },
    {
      text: 'Deus criou os céus e a terra.',
      gloss: T('La misma oración en orden portugués: el análisis no cambia.'),
    },
    {
      text: 'os sinais que o Senhor deu',
      gloss: T('{que el Señor dio} es adjetiva restrictiva de {señales}; el {los} es artículo.'),
    },
    {
      text: 'o amor de Deus pelo mundo',
      gloss: T('Dos complementos nominales: {de Dios} completa {amor} y {por el mundo} también.'),
    },
    {
      text: 'falou a Moisés e a Arão',
      gloss: T('Dos objetos indirectos regidos por la preposición {a} que exige el verbo.'),
    },
    {
      text: 'a palavra que é vida',
      gloss: T('La oración adjetiva es el {predicativo} de {palabra}, por medio del verbo {es}.'),
    },
    {
      text: 'Jesus chorou no Getsêmani',
      gloss: T('{en Getsí} es adjunto adverbial de lugar, y sale sin romper la oración.'),
    },
    {
      text: 'o mundo foi criado por Deus',
      gloss: T('{el mundo} es sujeto paciente y {por Dios} el agente de la pasiva.'),
    },
    {
      text: 'τῷ θεῷ δόξα',
      gloss: T('En griego, {δόξα} es verbo y {τῷ θεῷ} el objeto indirecto: el caso decide.'),
    },
  ],
  tables: [
    {
      caption: T('Las cinco preguntas del análisis'),
      head: [T('Pergunta'), T('Se {sim}'), T('Se {não}'), T('O que foi decidido')],
      rows: [
        [T('é exigido ou acrescentado?'), T('integrante'), T('acessório'), T('a espécie do termo')],
        [
          T('é núcleo ou determinante?'),
          T('núcleo'),
          T('determinante'),
          T('a estrutura do sintagma'),
        ],
        [T('concorda com outro termo?'), T('concordante'), T('invariável'), T('gênero e número')],
        [
          T('a preposição exigida está presente?'),
          T('integrante com preposição'),
          T('sem regência'),
          T('objeto ou complemento'),
        ],
        [
          T('o sentido no contexto confirma?'),
          T('confirmado'),
          T('rever a classificação'),
          T('a leitura final'),
        ],
      ],
    },
    {
      caption: T('Cómo el verbo da los términos'),
      head: [T('Transitividade do verbo'), T('Termos que ele exige'), T('Exemplo'), T('Pergunta')],
      rows: [
        [T('{intransitivo}'), T('nenhum objeto'), T('{Jesus chorou}'), T('{chorou o quê?}')],
        [T('{transitivo direto}'), T('objeto direto'), T('{criou os céus}'), T('{criou o quê?}')],
        [
          T('{transitivo indireto}'),
          T('objeto indireto'),
          T('{falou a Moisés}'),
          T('{falou a quem?}'),
        ],
        [
          T('{bitransitivo}'),
          T('dois objetos'),
          T('{deu o livro ao amigo}'),
          T('{deu o quê? a quem?}'),
        ],
        [T('{auxiliar}'), T('nenhum, faz tempo'), T('{havia criado}'), T('{havia era o quê?}')],
        [T('{de ligação}'), T('predicativo'), T('{Deus é bom}'), T('{é, o quê?}')],
      ],
    },
    {
      caption: T('Sintagma, núcleo y determinante'),
      head: [T('Sintagma'), T('Núcleo'), T('Determinante'), T('Concordância')],
      rows: [
        [T('{os céus}'), T('{céus}'), T('{os}'), T('o artigo segue o nome')],
        [T('{as maiores profetas}'), T('{profetas}'), T('{as}'), T('o adjetivo segue o nome')],
        [T('{um homem novo}'), T('{homem}'), T('{um}'), T('o numeral segue o nome')],
        [T('{do Senhor}'), T('{Senhor}'), T('{do}'), T('a preposição não concorda')],
        [T('{muito bom}'), T('{bom}'), T('{muito}'), T('o advérbio não concorda')],
        [T('{em Jerusalém}'), T('{Jerusalém}'), T('{em}'), T('o nome próprio não flexiona')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {creó Dios los cielos}, ¿por qué {los} no es objeto directo?'),
    options: [
      T('porque {los} es determinante, y el núcleo del sintagma es {cielos}'),
      T('porque {los} es verbo y {cielos} es el sujeto'),
      T('porque el verbo {creó} es intransitivo'),
      T('porque {los} es artículo y el artículo nunca es objeto'),
    ],
    answer: 0,
    hint: T('Pregunta cuál es el núcleo del sintagma: lo que responde a {¿qué?} es el núcleo.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('En {la palabra que es vida}, la oración {que es vida} es:'),
      options: [
        T('predicativo del sujeto, unido por el verbo {es}'),
        T('objeto directo de {palabra}'),
        T('adjunto adnominal de {palabra}'),
        T('complemento nominal de {vida}'),
      ],
      answer: 0,
      hint: T('El verbo {es} une, y lo que viene después es lo que se declara.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada término con su especie.'),
      pairs: [
        { a: T('{Dios}'), b: T('sujeto') },
        { a: T('{los cielos}'), b: T('objeto directo') },
        { a: T('{no principio}'), b: T('adjunto adverbial') },
        { a: T('{por Dios}'), b: T('agente de la pasiva') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('Todo sintagma tiene un ______, y es lo que responde a la pregunta de contenido.'),
      answer: 'núcleo',
      hint: T('En {los cielos}, el núcleo es {cielos}.'),
    },
  ],
};
