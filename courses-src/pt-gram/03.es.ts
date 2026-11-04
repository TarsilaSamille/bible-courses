import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  section: T('Las palabras y sus clases'),
  title: T('Sustantivo, artículo y adjetivo'),
  subtitle: T('Denominación, determinación y caracterización'),
  body: C(`**Visión general.** El {sustantivo} nombra y el {adjetivo} caracteriza: en {Deus amou o mundo}, {Deus} y {mundo} son sustantivos y {amou} es verbo, sin adjetivo alguno.

**Regla 1.** El {artículo definido} {o} individualiza y el {indefinido} {um} presenta uno entre muchos: {o mundo} es el mundo nombrado, {um mundo} es uno de muchos.

**Regla 2.** El adjetivo {concorda} con el sustantivo en género y número, no con el artículo: en {as{profeitas} maiores}, {maiores} es femenino plural por causa de {profetas}.

**Regla 3.** El adjetivo {atributivo} queda unido al nombre y el {predicativo} queda unido al verbo por un {verbo de enlace}: {o velho filho} frente a {o filho é estudioso}.

**Regla 4.** El nombre {común} admite artículo y el {propio} normalmente no: {o céu} y {os céus} lo llevan, pero {Deus} y {Moisés} lo dispensan.

**Aplicación.** En {Deus criou os céus e a terra}, el griego (ὁ θεὸς ἐποίησεν τοὺς οὐρανοὺς καὶ τὴν γῆν) lleva artículo ante {céus} y {terra}, y ninguno ante {Deus}. El nombre propio prescinde del artículo; los comunes lo reciben. Y en {os maiores profetas}, el adjetivo {maiores} es femenino plural porque concuerda con {profetas}: si el nombre fuera masculino, {os maiores} saldría igual, y por eso la concordancia nominal se hace siempre con el nombre.

**Verificación.** Cuatro preguntas arman el sintagma nominal: cuál es el **núcleo**, tiene artículo el nombre, es el adjetivo **atributivo** o **predicativo**, y es el nombre **propio** o **común**. Una quinta decide la concordancia: el adjetivo concuerda con el **nombre**, nunca con el artículo. En {as{profeitas} maiores}, nombre y artículo están ambos en plural; si no coincidieran, el que estaría mal sería el artículo, no el adjetivo.`),
  vocab: [
    V('substantivo', 'substantivo', 'sustantivo'),
    V('artigo definido', 'artigo definido', 'artículo definido'),
    V('artigo indefinido', 'artigo indefinido', 'artículo indefinido'),
    V('adjetivo', 'adjetivo', 'adjetivo'),
    V('gênero', 'gênero', 'género'),
    V('número', 'número', 'número'),
    V('concreto', 'concreto', 'concreto'),
    V('abstrato', 'abstrato', 'abstracto'),
    V('os céus', 'os céus', 'artículo con nombre en plural'),
    V('maiores', 'maiores', 'adjetivo que concuerda con {profetas}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'El {sustantivo} nombra y el {adjetivo} caracteriza: en {Deus amou o mundo}, {Deus} y {mundo} son sustantivos y {amou} es verbo, sin adjetivo alguno.',
      ),
    },
    {
      n: '§2',
      text: T(
        'El {artículo definido} {o} individualiza y el {indefinido} {um} presenta uno entre muchos: {o mundo} es el mundo nombrado, {um mundo} es uno de muchos.',
      ),
    },
    {
      n: '§3',
      text: T(
        'El adjetivo {concorda} con el sustantivo en género y número, no con el artículo: en {as{profeitas} maiores}, {maiores} es femenino plural por causa de {profetas}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'El adjetivo {atributivo} queda unido al nombre y el {predicativo} queda unido al verbo por un {verbo de enlace}: {o velho filho} frente a {o filho é estudioso}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'El nombre {común} admite artículo y el {propio} normalmente no: {o céu} y {os céus} lo llevan, pero {Deus} y {Moisés} lo dispensan.',
      ),
    },
  ],
  notes: [
    {
      label: T('El artículo que el griego trae y el portugués no siempre'),
      text: T(
        'El griego antiguo usa artículo con casi todo nombre definido, incluido {θεός} en {ὁ θεός}. El portugués suprimió el artículo en los nombres propios, y {Deus} aparece solo en casi todo el texto bíblico. Donde el griego escribe {τοῦ θεοῦ} y el portugués escribe {de Deus}, la preposición hace el trabajo que antes hacía el artículo.',
      ),
    },
    {
      label: T('Adjetivo que cambia de función sin cambiar de forma'),
      text: T(
        '{santo} es adjetivo en {o santo de Deus} y sustantivo en {as santos obras}. La forma es la misma; lo que cambia es la función, y la preposición o el artículo la revela. Por eso el análisis va del sintagma a la palabra, y no de la palabra aislada, que no dice nada.',
      ),
    },
  ],
  examples: [
    {
      text: 'Deus criou os céus e a terra.',
      gloss: T(
        'Nombre propio {Deus} sin artículo, sustantivos comunes {céus} y {terra} con artículo definido.',
      ),
    },
    {
      text: 'o mundo perdido',
      gloss: T(
        'Artículo definido {o} con sustantivo común {mundo}; el adjetivo {perdido} es atributivo.',
      ),
    },
    {
      text: 'um homem novo',
      gloss: T(
        'Artículo indefinido {um} con sustantivo {homem}; {novo} es atributivo y concuerda con {homem}.',
      ),
    },
    {
      text: 'a palavra da vida',
      gloss: T(
        'Artículo {a}, sustantivo {palavra}, y {da} como la preposición {de} unida al artículo {a}.',
      ),
    },
    {
      text: 'o Filho do Homem',
      gloss: T(
        'Sustantivo {Filho} con nombre propio; {do Homem} lleva la preposición {de} exigida por {filho}.',
      ),
    },
    {
      text: 'Deus é bom',
      gloss: T('{Deus} sujeto, {é} verbo de enlace, {bom} predicativo del sujeto.'),
    },
    {
      text: 'o bom pastor',
      gloss: T(
        'Adjetivo {bom} atributivo, unido al sustantivo sin verbo: {o} determina, {bom} caracteriza.',
      ),
    },
    {
      text: 'os maiores profetas',
      gloss: T(
        'El adjetivo {maiores} está en plural porque concuerda con {profetas}, no con {os}.',
      ),
    },
    {
      text: 'o amor de Deus',
      gloss: T('Sustantivo abstracto {amor}, que recibe la preposición {de} exigida por él mismo.'),
    },
  ],
  tables: [
    {
      caption: T('Artículos: qué hace cada uno'),
      head: [T('Artigo'), T('Uso'), T('Exemplo')],
      rows: [
        [T('{o}, {a}'), T('individualiza o nome'), T('{o mundo}, {a palavra}')],
        [T('{um}, {uma}'), T('apresenta um entre muitos'), T('{um mundo}, {um homem}')],
        [T('{este}, {esta}'), T('aponta para o ouvinte'), T('{este mundo}')],
        [T('{esse}, {aquele}'), T('aponta para o que se sabe'), T('{esse mundo}')],
        [T('{todo}, {todos}'), T('generaliza'), T('{todos os homens}')],
      ],
    },
    {
      caption: T('Adjetivo atributivo y predicativo'),
      head: [T('Tipo'), T('Onde está'), T('Como se reconhece'), T('Exemplo')],
      rows: [
        [
          T('atributivo'),
          T('ligado ao substantivo'),
          T('sem verbo de ligação no meio'),
          T('{o velho testamento}'),
        ],
        [
          T('predicativo'),
          T('ligado ao sujeito pelo verbo'),
          T('após verbo de ligação'),
          T('{o testamento é velho}'),
        ],
      ],
    },
    {
      caption: T('Género y número de los nombres'),
      head: [T('Tipo'), T('Singular'), T('Plural')],
      rows: [
        [T('masculino regular'), T('{leal}'), T('{leais}')],
        [T('feminino regular'), T('{leal}'), T('{leais}')],
        [T('masculino irregular'), T('{homem}'), T('{homens}')],
        [T('feminino irregular'), T('{mulher}'), T('{mulheres}')],
        [T('nome próprio'), T('{Deus}'), T('sem plural de uso corrente')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {as{profeitas} maiores}, el adjetivo {maiores} es femenino plural porque:'),
    options: [
      T('concurda con el sustantivo {profetas}'),
      T('concurda con el artículo {as}'),
      T('es un comparativo y por eso flexiona'),
      T('hereda el género del verbo de la oración'),
    ],
    answer: 0,
    hint: T('La concordancia nominal es con el nombre, nunca con el determinante.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Qué palabra es un nombre propio?'),
      options: [T('{Moisés}'), T('{pastor}'), T('{leal}'), T('{mansão}')],
      answer: 0,
      hint: T('El nombre propio designa una persona determinada y suele ir sin artículo.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada adjetivo con su tipo en la frase.'),
      pairs: [
        { a: T('{o velho testamento}'), b: T('atributivo') },
        { a: T('{o testamento é velho}'), b: T('predicativo del sujeto') },
        { a: T('{Deus es fiel}'), b: T('predicativo, con verbo de enlace') },
        { a: T('{as santos obras}'), b: T('sustantivo, sin nombre propio') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('En {um mundo novo}, el artículo ______ presenta uno entre muchos.'),
      answer: 'indefinido',
      hint: T('{um} se opone a {o}, que individualiza.'),
    },
  ],
};
