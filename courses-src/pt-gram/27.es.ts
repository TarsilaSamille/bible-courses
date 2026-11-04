import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  section: T('La oración y sus términos'),
  title: T('Análisis de los términos integrantes'),
  subtitle: T('Objetos, complemento nominal y agente de la pasiva'),
  body: C(`**Visión general.** El {objeto directo} completa un verbo transitivo sin preposición: en {Dios creó los cielos}, {los cielos} es objeto directo, y la pregunta que lo revela es {¿qué?}.

**Regla 1.** El {objeto indirecto} lo introduce la preposición que el verbo exige: en {habló con Moisés}, {con} viene de {hablar}, y {Moisés} es el objeto indirecto.

**Regla 2.** El {complemento nominal} completa un nombre y no un verbo: en {el amor de Dios}, quien exige la preposición {de} es el sustantivo {amor}.

**Regla 3.** El {agente de la pasiva} es sujeto de la construcción pasiva y viene con {por}: en {el mundo fue creado por Dios}, {por Dios} realiza la acción, y el paciente es {el mundo}.

**Regla 4.** El orden de los objetos indirecto y directo sigue el régimen: en {Di el libro al amigo}, {el libro} va primero por el orden antiguo de los dos objetos.

**Aplicación.** En {τῷ θεῷ δόξα} ({a Dios gloria}), el caso es la clave: {τῷ θεῷ} está en **dativo** y es el **objeto indirecto** de {δόξα}, que en griego es verbo; {a Dios} es indirecto y {gloria} es sujeto. En portugués la oración aparece invertida ({gloria a Dios}), y quien traduce término a término pierde el hecho de que en griego el **sujeto está después** y el objeto indirecto **antes**.

**Verificación.** Para cada término, pregunta: ¿completa un **verbo** o un **nombre**? Si completa un nombre, es **complemento nominal**. Si completa un verbo, ¿el verbo es **transitivo directo**, **indirecto** o **copulativo**? ¿Está presente la preposición exigida? Y en la **pasiva**, el término con {por} es **agente**, no objeto. Cuatro preguntas, y el término está clasificado.`),
  vocab: [
    V('objeto direto', 'objeto direto', 'complemento del verbo sin preposición'),
    V('objeto indireto', 'objeto indireto', 'complemento del verbo con preposición'),
    V(
      'objeto direto indireto',
      'objeto direto indireto',
      'el segundo objeto de un verbo bitransitivo',
    ),
    V('complemento nominal', 'complemento nominal', 'complemento de un nombre'),
    V('agente da passiva', 'agente da passiva', 'sujeto de la construcción pasiva'),
    V('preposição', 'preposição', 'liga verbo y complemento'),
    V('transitividade', 'transitividade', 'grado de compleción del verbo'),
    V('completar', 'completar', 'lo que hacen los términos integrantes'),
    V('δόξα', 'δόξα', 'verbo griego, no sustantivo'),
    V('τῷ θεῷ', 'τῷ θεῷ', 'dativo griego de {θεός}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'El {objeto directo} completa un verbo transitivo sin preposición: en {Dios creó los cielos}, {los cielos} es objeto directo, y la pregunta que lo revela es {¿qué?}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'El {objeto indirecto} lo introduce la preposición que el verbo exige: en {habló con Moisés}, {con} viene de {hablar}, y {Moisés} es el objeto indirecto.',
      ),
    },
    {
      n: '§3',
      text: T(
        'El {complemento nominal} completa un nombre y no un verbo: en {el amor de Dios}, quien exige la preposición {de} es el sustantivo {amor}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'El {agente de la pasiva} es sujeto de la construcción pasiva y viene con {por}: en {el mundo fue creado por Dios}, {por Dios} realiza la acción, y el paciente es {el mundo}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'El orden de los objetos indirecto y directo sigue el régimen: en {Di el libro al amigo}, {el libro} va primero por el orden antiguo de los dos objetos.',
      ),
    },
  ],
  notes: [
    {
      label: T('El verbo griego que se volvió nombre en portugués'),
      text: T(
        'En {τῷ θεῷ δόξα}, {δόξα} es verbo en griego y {τῷ θεῷ} es su objeto indirecto; todo el grupo es una oración con verbo. El portugués {gloria a Dios} invirtió las posiciones y convirtió {δόξα} en sustantivo, con {a Dios} como complemento nominal. La estructura griega no sobrevive a la traducción, y por eso la lectura de Romanos 11, 36 cambia según la versión.',
      ),
    },
    {
      label: T('La preposición que el griego prescinde'),
      text: T(
        'El {dativo} griego se traduce ya por {a}, ya por {para}, ya sin preposición alguna: {τῷ θεῷ} pasó a {a Dios}, mientras {τῷ ἀνθρώπῳ} pasó a {para el hombre} en una versión y {al hombre} en otra. El caso es el mismo; el portugués tiene tres respuestas para él, y por eso el traductor tiene que decidir.',
      ),
    },
  ],
  examples: [
    {
      text: 'Deus criou os céus e a terra.',
      gloss: T('Dos objetos directos: {los cielos} y {la tierra}, unidos por {y}.'),
    },
    {
      text: 'Deus deu o seu Filho ao mundo.',
      gloss: T('Dos objetos: {su Hijo} directo y {al mundo} indirecto, regido por {dar}.'),
    },
    {
      text: 'Falei a Moisés.',
      gloss: T('Objeto indirecto {a Moisés}, con la preposición {a} que exige {hablar}.'),
    },
    {
      text: 'Confiou nele.',
      gloss: T('Objeto indirecto {nele}, con {en} fundido a {él} por crasis.'),
    },
    {
      text: 'o amor de Deus',
      gloss: T('Complemento nominal {de Dios}: el nombre {amor} exige la preposición.'),
    },
    {
      text: 'a necessity of dying',
      gloss: T(
        'La {d} viene de {necesidad}, que exige la preposición, y no del verbo {necesitar}.',
      ),
    },
    {
      text: 'o mundo foi criado por Deus.',
      gloss: T('Pasiva: {el mundo} es sujeto paciente y {por Dios} el agente.'),
    },
    {
      text: 'a decisão do rei',
      gloss: T('Complemento nominal {del rey}; el verbo {decidir} no está en la oración.'),
    },
    {
      text: 'τῷ θεῷ δόξα',
      gloss: T('En griego, {δόξα} es verbo y {τῷ θεῷ} el objeto indirecto en dativo.'),
    },
  ],
  tables: [
    {
      caption: T('Términos integrantes por tipo de regente'),
      head: [T('Regente'), T('Termo'), T('Como se reconhece'), T('Exemplo')],
      rows: [
        [
          T('verbo transitivo direto'),
          T('{objeto direto}'),
          T('responde a {o que?}'),
          T('{os céus} em {criou os céus}'),
        ],
        [
          T('verbo transitivo indireto'),
          T('{objeto indireto}'),
          T('vem com preposição exigida'),
          T('{a Moisés} em {falou a Moisés}'),
        ],
        [
          T('verbo bitransitivo'),
          T('dois objetos'),
          T('direto e indireto'),
          T('{dar} em {Deu o Filho ao mundo}'),
        ],
        [
          T('verbo de ligação'),
          T('{predicativo}'),
          T('atribui qualidade'),
          T('{bom} em {Deus é bom}'),
        ],
        [
          T('nome'),
          T('{complemento nominal}'),
          T('completa o nome'),
          T('{de Deus} em {o amor de Deus}'),
        ],
        [
          T('construção passiva'),
          T('{agente da passiva}'),
          T('vem com {por}'),
          T('{por Deus} em {criado por Deus}'),
        ],
      ],
    },
    {
      caption: T('Objetos indirectos: pronombre o nombre'),
      head: [T('Tipo'), T('Forma'), T('Frase'), T('Observação')],
      rows: [
        [
          T('nome'),
          T('artigo ou demonstrativo + substantivo'),
          T('{falou a Moisés}'),
          T('a preposição aparece'),
        ],
        [T('pronome oblíquo'), T('{lhe}, {them}, {nós}'), T('{falou-lhe}'), T('a preposição some')],
        [T('pronominal'), T('{me}, {te}, {se}'), T('{falou-me}'), T('o pronome vira {}')],
        [
          T('crase obrigatória'),
          T('{a} + artigo {a}'),
          T('{falou à árvore}'),
          T('a crase fecha o conjunto'),
        ],
      ],
    },
    {
      caption: T('El orden de los dos objetos'),
      head: [T('Ordem'), T('Exemplo'), T('Qual vem primeiro'), T('Observação')],
      rows: [
        [
          T('mais antiga'),
          T('{dei o livro ao amigo}'),
          T('o indireto'),
          T('segue a ordem do latim'),
        ],
        [
          T('mais comum hoje'),
          T('{dei ao amigo o livro}'),
          T('o direto'),
          T('prevalece no uso corrente'),
        ],
        [
          T('com pronome oblíquo'),
          T('{dei-lhe o livro}'),
          T('o pronome'),
          T('o indireto vem por força'),
        ],
        [
          T('com nome próprio'),
          T('{vi-o ao Senhor}'),
          T('o pronome'),
          T('o nome próprio vem depois'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {el amor de Dios}, el término {de Dios} es:'),
    options: [
      T('complemento nominal, porque completa el nombre {amor}'),
      T('objeto indirecto de un verbo implícito'),
      T('agente de la pasiva de {amor}'),
      T('adjunto adnominal que caracteriza {amor}'),
    ],
    answer: 0,
    hint: T('Quien exige la preposición es el sustantivo, no un verbo.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('En {el mundo fue creado por Dios}, {por Dios} es:'),
      options: [
        T('agente de la pasiva, porque realiza la acción'),
        T('objeto directo de {creado}'),
        T('complemento nominal de {mundo}'),
        T('adjunto adverbial de lugar'),
      ],
      answer: 0,
      hint: T('En la pasiva, el término con {por} es quien actúa, no quien sufre.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada término con lo que lo exige.'),
      pairs: [
        { a: T('{los cielos} en {creó los cielos}'), b: T('verbo transitivo directo') },
        { a: T('{a Moisés} en {habló con Moisés}'), b: T('verbo con preposición exigida') },
        { a: T('{de Dios} en {el amor de Dios}'), b: T('el nombre {amor}') },
        { a: T('{bueno} en {Dios es bueno}'), b: T('el verbo de enlace {es}') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('undefined'),
      answer: 'complemento nominal',
      hint: T('En {la palabra de Dios}, lo que se completa es {palavra}.'),
    },
  ],
};
