import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  section: T('A flexão da palavra e a concordância'),
  title: T('Concordância em detalhe'),
  subtitle: T('Casos especiais de verbos e nomes'),
  body: C(`**Visão geral.** Na construção {impessoal}, {haver} permanece na 3.ª pessoa do singular: em {havia muitas pessoas}, o {havia} não concorda com {pessoas}.

**Regra 1.** {Haver} no sentido de {existir} concorda com o sujeito: em {havia dois deuses}, o verbo vai ao plural porque são dois, e é esse sentido que muda a regra.

**Regra 2.** O {sujeito oracional} não flexiona o verbo: em {É necessário que venhas}, o {é} fica na 3.ª do singular mesmo com uma oração inteira de sujeito.

**Regra 3.** Com sujeito {coletivo}, o verbo pode ir ao singular ou ao plural conforme o sentido: em {o povo saiu} age o todo, em {o povo saíram} agem as partes.

**Regra 4.** A concordância nominal vai com o {nome}: em {os mesmos platforms}, {mesmos} é masculino plural por causa de {platforms}, e não por causa de {os}.

**Aplicação.** Em {Muitos dos que estavam ouvindo diziam uns aos outros}, o sujeito {Muitos} é **indeterminado** e o verbo {diziam} está no plural, o que é permitido porque o sujeito real é {os que estavam ouvindo}. Em grego, {πάντες} (todos) com substantivo no plural exige o verbo no plural ({εἶδαν}), e é a concordância grega, mais rígida, que impede a ambiguidade que o português deixa.

**Verificação.** Para qualquer verbo, pergunte: qual é o **sujeito** e é **simples**, **composto** ou **coletivo**? Se composto, há {e} ou {nem}? Se coletivo, é o **todo** ou a **parte** que age? E o verbo está no plural por causa de um sujeito {indeterminado} ou {oracional}? Para o adjetivo, uma pergunta basta: com quem ele concorda, com o **nome** ou com o **artigo**? Sempre com o nome.`),
  vocab: [
    V('impessoal', 'impessoal', 'verbo sem sujeito identificável'),
    V('haver', 'haver', 'verbo que muda de concordância com o sentido'),
    V('fazer', 'fazer', 'verbo que indica tempo ou construção'),
    V('dar', 'dar', 'verbo que indica evento'),
    V('concordância verbal', 'concordância verbal', 'entre verbo e sujeito'),
    V('concordância nominal', 'concordância nominal', 'entre nome e seus modificadores'),
    V('sujeito oracional', 'sujeito oracional', 'oração inteira como sujeito'),
    V('pois', 'pois', 'conectivo conclusivo ou causal'),
    V('havia muitas pessoas', 'havia muitas pessoas', 'impessoal: o verbo não flexiona'),
    V('havia dois deuses', 'havia dois deuses', 'sentido de existir: o verbo flexiona'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Na construção {impessoal}, {haver} permanece na 3.ª pessoa do singular: em {havia muitas pessoas}, o {havia} não concorda com {pessoas}.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{Haver} no sentido de {existir} concorda com o sujeito: em {havia dois deuses}, o verbo vai ao plural porque são dois, e é esse sentido que muda a regra.',
      ),
    },
    {
      n: '§3',
      text: T(
        'O {sujeito oracional} não flexiona o verbo: em {É necessário que venhas}, o {é} fica na 3.ª do singular mesmo com uma oração inteira de sujeito.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Com sujeito {coletivo}, o verbo pode ir ao singular ou ao plural conforme o sentido: em {o povo saiu} age o todo, em {o povo saíram} agem as partes.',
      ),
    },
    {
      n: '§5',
      text: T(
        'A concordância nominal vai com o {nome}: em {os mesmos platforms}, {mesmos} é masculino plural por causa de {platforms}, e não por causa de {os}.',
      ),
    },
  ],
  notes: [
    {
      label: T('O que a forma grega obriga e o português permite'),
      text: T(
        'Em {πάντες εἶδαν}, a concordância grega diz que o sujeito era plural e não admite dúvida. O português aceita {todos viram} para um e para muitos, e é por isso que {Muitos dos que ouviam diziam} pode ser lido de duas maneiras. A gramática grega não é mais rica: é mais obrigatória, e é essa obrigação que obriga o tradutor a decidir.',
      ),
    },
    {
      label: T('O sujeito coletivo e as suas duas vozes'),
      text: T(
        'Em {o povo saiu}, o {povo} é singular e o verbo é singular: age o todo. Em {o povo saíram}, a forma do verbo muda e o sentido muda junto: agiram as partes. O português aceita as duas, e o grego antigo usa {λαός} no plural para as partes. Traduzir exige decidir se o original falava do todo ou das partes, e essa decisão não aparece na forma.',
      ),
    },
  ],
  examples: [
    {
      text: 'havia muitas pessoas na cidade',
      gloss: T('{havia} é impessoal e fica na 3.ª do singular, mesmo com {pessoas}.'),
    },
    {
      text: 'havia dois deuses',
      gloss: T('Sentido de existir: {havia} flexiona para o plural porque são dois.'),
    },
    {
      text: 'faz dois anos que não o vejo',
      gloss: T('{fazer} aqui indica tempo decorrido, e por isso não flexiona.'),
    },
    {
      text: 'É necessário que venhas',
      gloss: T('Sujeito oracional: o {é} não flexiona apesar das duas orações.'),
    },
    {
      text: 'o povo saiu',
      gloss: T('Sujeito coletivo no singular: age o todo, e o verbo é singular.'),
    },
    {
      text: 'o povo saíram',
      gloss: T('O mesmo sujeito com verbo plural: agiram as partes do povo.'),
    },
    {
      text: 'Muitos dos que estavam ouvindo diziam',
      gloss: T('O sujeito real é a oração {os que estavam ouvindo}, e é ela que pede o plural.'),
    },
    {
      text: 'os mesmos platforms',
      gloss: T('{mesmos} é masculino plural por concordar com {platforms}, e não com {os}.'),
    },
    {
      text: 'πάντες εἶδαν',
      gloss: T('O grego obriga o plural: {πάντες} e {εἶδαν} dizem ambos que o sujeito era plural.'),
    },
  ],
  tables: [
    {
      caption: T('Casos de concordância verbal'),
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
      caption: T('Concordância nominal: o que manda'),
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
      caption: T('Verbos que às vezes não flexionam'),
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
    prompt: T('Em {havia muitas pessoas}, o verbo {havia} fica no singular porque:'),
    options: [
      T('é impessoal, e o {haver} de existir não flexiona'),
      T('o sujeito {pessoas} é indireto e por isso não conta'),
      T('{muitas} é adjetivo e adjetivos não flexionam verbo'),
      T('o verbo {havia} é defectivo e tem uma só forma'),
    ],
    answer: 0,
    hint: T('Com {haver} no sentido de existir, o verbo flexiona: teste {havia dois}.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Em {É necessário que venhas}, o verbo {é} é singular porque:'),
      options: [
        T('o sujeito é uma oração, e uma oração conta como uma unidade'),
        T('o sujeito {necessário} é masculino singular'),
        T('o verbo {venhas} está no subjuntivo'),
        T('a oração {que venhas} é coordenada'),
      ],
      answer: 0,
      hint: T('O sujeito oracional vale por um termo só, e um termo só pede o singular.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a frase ao caso de concordância que ela tem.'),
      pairs: [
        { a: T('{havia muitas pessoas}'), b: T('impessoal, verbo no singular') },
        { a: T('{havia dois deuses}'), b: T('sentido de existir, verbo no plural') },
        { a: T('{o povo saiu}'), b: T('coletivo no sentido do todo') },
        { a: T('{É necessário que venhas}'), b: T('sujeito oracional') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('O adjetivo concorda com o ______, e nunca com o artigo.'),
      answer: 'substantivo',
      hint: T('Em {as{profeitas} maiores}, quem manda é {profetas}.'),
    },
  ],
};
