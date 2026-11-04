import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  section: T('La flexión de la palabra y la concordancia'),
  title: T('Concordancia en detalle'),
  subtitle: T('Casos especiales de verbos y nombres'),
  body: C(`**Visión general.** En la construcción {impersonal}, {haber} permanece en tercera del singular: en {había muchas personas}, el {había} no concuerda con {personas}.

**Regla 1.** {Haber} en el sentido de {existir} concuerda con el sujeto: en {había dos dioses}, el verbo va al plural porque son dos, y es ese sentido el que cambia la regla.

**Regla 2.** Un {sujeto oracional} no flexiona el verbo: en {Es necesario que vengas}, el {es} queda en tercera del singular incluso con una oración entera de sujeto.

**Regla 3.** Con sujeto {colectivo}, el verbo puede ir en singular o en plural según el sentido: en {el pueblo salió} actúa el todo, en {el pueblo salieron} actúan las partes.

**Regla 4.** La concordancia nominal va con el {nombre}: en {los mismos platforms}, {mismos} es masculino plural por causa de {platforms}, y no por causa de {los}.

**Aplicación.** En {Muchos de los que estaban oyendo decían unos a otros}, el sujeto {Muchos} es **indeterminado** y el verbo {decían} está en plural, lo que se permite porque el sujeto real es {los que estaban oyendo}. En griego, {πάντες} (todos) con sustantivo en plural exige el verbo en plural ({εἶδαν}), y es la concordancia griega, más rígida, la que elimina la ambigüedad que el portugués deja.

**Verificación.** Para cualquier verbo, pregunta: ¿cuál es el **sujeito** y es **simple**, **compuesto** o **colectivo**? Si es compuesto, ¿hay {y} o {ni}? Si es colectivo, ¿actúa el **todo** o la **parte**? Y ¿el verbo está en plural por un sujeto {indeterminado} u {oracional}? Para el adjetivo basta una pregunta: ¿con qué concuerda, con el **nombre** o con el **artículo**? Siempre con el nombre.`),
  vocab: [
    V('impessoal', 'impessoal', 'verbo sin sujeto identificable'),
    V('haver', 'haver', 'verbo cuya concordancia cambia con el sentido'),
    V('fazer', 'fazer', 'verbo que indica tiempo o construcción'),
    V('dar', 'dar', 'verbo que indica un suceso'),
    V('concordância verbal', 'concordância verbal', 'entre verbo y sujeto'),
    V('concordância nominal', 'concordância nominal', 'entre nombre y sus modificadores'),
    V('sujeito oracional', 'sujeito oracional', 'una oración entera como sujeto'),
    V('pois', 'pois', 'conectivo conclusivo o causal'),
    V('havia muitas pessoas', 'havia muitas pessoas', 'impersonal: el verbo no flexiona'),
    V('havia dois deuses', 'havia dois deuses', 'sentido de existir: el verbo flexiona'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'En la construcción {impersonal}, {haber} permanece en tercera del singular: en {había muchas personas}, el {había} no concuerda con {personas}.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{Haber} en el sentido de {existir} concuerda con el sujeto: en {había dos dioses}, el verbo va al plural porque son dos, y es ese sentido el que cambia la regla.',
      ),
    },
    {
      n: '§3',
      text: T(
        'Un {sujeto oracional} no flexiona el verbo: en {Es necesario que vengas}, el {es} queda en tercera del singular incluso con una oración entera de sujeto.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Con sujeto {colectivo}, el verbo puede ir en singular o en plural según el sentido: en {el pueblo salió} actúa el todo, en {el pueblo salieron} actúan las partes.',
      ),
    },
    {
      n: '§5',
      text: T(
        'La concordancia nominal va con el {nombre}: en {los mismos platforms}, {mismos} es masculino plural por causa de {platforms}, y no por causa de {los}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Lo que la forma griega obliga y el portugués permite'),
      text: T(
        'En {πάντες εἶδαν}, la concordancia griega dice que el sujeto era plural y no admite duda. El portugués acepta {todos vieron} para uno y para muchos, y por eso {Muchos de los que oían decían} puede leerse de dos maneras. La gramática griega no es más rica: es más obligatoria, y esa obligación es lo que fuerza al traductor a decidir.',
      ),
    },
    {
      label: T('El sujeto colectivo y sus dos voces'),
      text: T(
        'En {el pueblo salió}, el {pueblo} es singular y el verbo es singular: actúa el todo. En {el pueblo salieron}, la forma del verbo cambia y con ella el sentido: actuaron las partes. El portugués acepta las dos, y el griego antiguo usa {λαός} en plural para las partes. Traducir exige decidir si el original hablaba del todo o de las partes, y esa decisión no aparece en la forma.',
      ),
    },
  ],
  examples: [
    {
      text: 'havia muitas pessoas na cidade',
      gloss: T('{había} es impersonal y queda en tercera del singular, incluso con {personas}.'),
    },
    {
      text: 'havia dois deuses',
      gloss: T('Sentido de existir: {había} flexiona al plural porque son dos.'),
    },
    {
      text: 'faz dois anos que não o vejo',
      gloss: T('{hacer} aquí marca tiempo transcurrido, y por eso no flexiona.'),
    },
    {
      text: 'É necessário que venhas',
      gloss: T('Sujeto oracional: el {es} no flexiona pese a las dos oraciones.'),
    },
    {
      text: 'o povo saiu',
      gloss: T('Sujeto colectivo en singular: actúa el todo, y el verbo es singular.'),
    },
    {
      text: 'o povo saíram',
      gloss: T('El mismo sujeto con verbo plural: actuaron las partes del pueblo.'),
    },
    {
      text: 'Muitos dos que estavam ouvindo diziam',
      gloss: T(
        'El sujeto real es la oración {los que estaban oyendo}, y es ella la que pide el plural.',
      ),
    },
    {
      text: 'os mesmos platforms',
      gloss: T('{mismos} es masculino plural porque concuerda con {platforms}, y no con {los}.'),
    },
    {
      text: 'πάντες εἶδαν',
      gloss: T(
        'El griego obliga al plural: {πάντες} y {εἶδαν} dicen ambos que el sujeto era plural.',
      ),
    },
  ],
  tables: [
    {
      caption: T('Casos de concordancia verbal'),
      head: [T('Caso'), T('Verbo'), T('Exemplo'), T('Porquê')],
      rows: [
        [
          T('{impessoal}'),
          T('3.ª do singular'),
          T('{havia muitas pessoas}'),
          T('o {haver} não tem sujeito'),
        ],
        [
          T('{haver, sentido de existir}'),
          T('concorda com o sujeito'),
          T('{havia dois deuses}'),
          T('o sentido é de plural'),
        ],
        [
          T('{sujeito oracional}'),
          T('3.ª do singular'),
          T('{É necessário vir}'),
          T('o sujeito é uma unidade'),
        ],
        [
          T('{sujeito indeterminado}'),
          T('3.ª do singular'),
          T('{se diz que veio}'),
          T('não se sabe quem'),
        ],
        [T('{sujeito coletivo, todo}'), T('singular'), T('{o povo saiu}'), T('age o conjunto')],
        [T('{sujeito coletivo, partes}'), T('plural'), T('{o povo saíram}'), T('age a parte')],
      ],
    },
    {
      caption: T('Concordancia nominal: lo que manda'),
      head: [T('Palavra'), T('Manda'), T('Exemplo'), T('Se discordar, quem errou')],
      rows: [
        [T('artigo'), T('o substantivo'), T('{os} em {os livros}'), T('o artigo')],
        [T('adjetivo'), T('o substantivo'), T('{antigos} em {livros antigos}'), T('o adjetivo')],
        [T('numeral'), T('o substantivo'), T('{dois} em {dois livros}'), T('o numeral')],
        [T('pronome possessivo'), T('o substantivo'), T('{meus} em {meus livros}'), T('o pronome')],
        [T('aposto'), T('o termo explicado'), T('{o velho Davi}'), T('o aposto')],
        [T('verbo de ligação'), T('o sujeito'), T('{A palavra é bom}'), T('o predicativo')],
      ],
    },
    {
      caption: T('Verbos que a veces no flexionan'),
      head: [T('Verbo'), T('Quando não flexiona'), T('Frase'), T('O que indica')],
      rows: [
        [
          T('{haver}'),
          T('no sentido de existir ou de clima'),
          T('{havia muitas}'),
          T('presença de algo'),
        ],
        [
          T('{fazer}'),
          T('quando indica tempo decorrido'),
          T('{faz dois anos}'),
          T('tempo que passou'),
        ],
        [T('{dar}'), T('em {dar três horas}'), T('{dar três horas}'), T('aproximação de tempo')],
        [T('{ser}'), T('na locução {há de haver}'), T('{há de haver}'), T('obrigação')],
        [T('{poder}'), T('com valor de aproximação'), T('{pode ser cem}'), T('certeza aproximada')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {había muchas personas}, el verbo {había} queda en singular porque:'),
    options: [
      T('es impersonal, y el {haber} de existir no flexiona'),
      T('el sujeto {personas} es indirecto y por eso no cuenta'),
      T('{muchas} es adjetivo y los adjetivos no flexionan el verbo'),
      T('el verbo {había} es defectivo y tiene una sola forma'),
    ],
    answer: 0,
    hint: T('Con {haber} en sentido de existir, el verbo flexiona: prueba {había dos}.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('En {Es necesario que vengas}, el verbo {es} es singular porque:'),
      options: [
        T('el sujeto es una oración, y una oración cuenta como una unidad'),
        T('el sujeto {necesario} es masculino singular'),
        T('el verbo {vengas} está en subjuntivo'),
        T('la oración {que vengas} es coordinada'),
      ],
      answer: 0,
      hint: T('El sujeto oracional cuenta como un término, y un término pide el singular.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la oración con el caso de concordancia que tiene.'),
      pairs: [
        { a: T('{había muchas personas}'), b: T('impersonal, verbo en singular') },
        { a: T('{había dos dioses}'), b: T('sentido de existir, verbo en plural') },
        { a: T('{el pueblo salió}'), b: T('colectivo en el sentido del todo') },
        { a: T('{Es necesario que vengas}'), b: T('sujeto oracional') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('El adjetivo concuerda con el ______, y nunca con el artículo.'),
      answer: 'substantivo',
      hint: T('En {as{profeitas} maiores}, lo que manda es {profetas}.'),
    },
  ],
};
