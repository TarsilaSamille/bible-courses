import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  section: T('A oração e seus termos'),
  title: T('Análise dos termos integrantes'),
  subtitle: T('Objetos, complemento nominal e agente da passiva'),
  body: C(`**Visão geral.** O {objeto direto} completa um verbo transitivo sem preposição: em {Deus criou os céus}, {os céus} é objeto direto, e a pergunta que o revela é {o que?}.

**Regra 1.** O {objeto indireto} é introduzido pela preposição que o verbo exige: em {falou a Moisés}, {a} vem de {falar}, e {Moisés} é o objeto indireto.

**Regra 2.** O {complemento nominal} completa um nome e não um verbo: em {o amor de Deus}, quem exige a preposição {de} é o substantivo {amor}.

**Regra 3.** O {agente da passiva} é sujeito da construção passiva e vem com {por}: em {o mundo foi criado por Deus}, {por Deus} pratica a ação, e o paciente é {o mundo}.

**Regra 4.** A ordem dos objetos indireto e direto segue a regência: em {Dei o livro ao amigo}, {o livro} vem primeiro porque é o indireto mais próximo do sujeito na ordem antiga.

**Aplicação.** Em {τῷ θεῷ δόξα} ({a Deus glória}), o caso é a chave: {τῷ θεῷ} está no **dativo** e é o **objeto indireto** de {δόξα}, que no grego é verbo; {a Deus} é indireto e {glória} é sujeito. Em português a frase aparece invertida ({glória a Deus}), e quem traduz termo a termo perde o fato de que no grego o **sujeito está depois** e o objeto indireto **antes**.

**Verificação.** Para cada termo, pergunte: ele completa um **verbo** ou um **nome**? Se completa um nome, é **complemento nominal**. Se completa um verbo, o verbo é **transitivo direto**, **indireto** ou **copulativo**? A preposição exigida está presente? E na **passiva**, o termo com {por} é **agente**, não objeto. Quatro perguntas, e o termo está classificado.`),
  vocab: [
    V('objeto direto', 'objeto direto', 'complemento do verbo sem preposição'),
    V('objeto indireto', 'objeto indireto', 'complemento do verbo com preposição'),
    V(
      'objeto direto indireto',
      'objeto direto indireto',
      'o segundo objeto de um verbo bitransitivo',
    ),
    V('complemento nominal', 'complemento nominal', 'complemento de um nome'),
    V('agente da passiva', 'agente da passiva', 'sujeito da construção passiva'),
    V('preposição', 'preposição', 'liga verbo e complemento'),
    V('transitividade', 'transitividade', 'grau de completude do verbo'),
    V('completar', 'completar', 'o que os termos integrantes fazem'),
    V('δόξα', 'δόξα', 'verbo grego, não substantivo'),
    V('τῷ θεῷ', 'τῷ θεῷ', 'dativo grego de {θεός}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'O {objeto direto} completa um verbo transitivo sem preposição: em {Deus criou os céus}, {os céus} é objeto direto, e a pergunta que o revela é {o que?}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'O {objeto indireto} é introduzido pela preposição que o verbo exige: em {falou a Moisés}, {a} vem de {falar}, e {Moisés} é o objeto indireto.',
      ),
    },
    {
      n: '§3',
      text: T(
        'O {complemento nominal} completa um nome e não um verbo: em {o amor de Deus}, quem exige a preposição {de} é o substantivo {amor}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'O {agente da passiva} é sujeito da construção passiva e vem com {por}: em {o mundo foi criado por Deus}, {por Deus} pratica a ação, e o paciente é {o mundo}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'A ordem dos objetos indireto e direto segue a regência: em {Dei o livro ao amigo}, {o livro} vem primeiro porque é o indireto mais próximo do sujeito na ordem antiga.',
      ),
    },
  ],
  notes: [
    {
      label: T('O verbo grego que virou nome em português'),
      text: T(
        'Em {τῷ θεῷ δόξα}, {δόξα} é verbo no grego e {τῷ θεῷ} é o seu objeto indireto; a frase toda é uma oração com verbo. O português {glória a Deus} inverteu as posições e transformou {δόξα} em substantivo, com {a Deus} como complemento nominal. A estrutura grega não sobrevive à tradução, e é por isso que a leitura de {Romanos 11, 36} muda de sentido conforme a versión.',
      ),
    },
    {
      label: T('A preposição que o grego dispensa'),
      text: T(
        'O {dativo} grego é traduzido ora por {a}, ora por {para}, ora sem preposição nenhuma: {τῷ θεῷ} virou {a Deus}, mas {τῷ ἀνθρώπῳ} virou {para o homem} numa Tradução de Almeida e {ao homem} numa de João Ferreira de Almeida. O caso é o mesmo; o português tem três respostas para ele, e é por isso que o tradutor precisa decidir.',
      ),
    },
  ],
  examples: [
    {
      text: 'Deus criou os céus e a terra.',
      gloss: T('Dois objetos diretos: {os céus} e {a terra}, ligados por {e}.'),
    },
    {
      text: 'Deus deu o seu Filho ao mundo.',
      gloss: T('Dois objetos: {o seu Filho} direto e {ao mundo} indireto, regido por {dar}.'),
    },
    {
      text: 'Falei a Moisés.',
      gloss: T('Objeto indireto {a Moisés}, com a preposição {a} exigida por {falar}.'),
    },
    {
      text: 'Confiou nele.',
      gloss: T('Objeto indireto {nele}, com {em} fundido a {ele} por crase.'),
    },
    {
      text: 'o amor de Deus',
      gloss: T('Complemento nominal {de Deus}: quem exige a preposição é o nome {amor}.'),
    },
    {
      text: 'a necessity of dying',
      gloss: T('O {d} é de {necessidade}, que exige a preposição, e não do verbo {necessitar}.'),
    },
    {
      text: 'o mundo foi criado por Deus.',
      gloss: T('Passiva: {o mundo} é sujeito paciente e {por Deus} é o agente.'),
    },
    {
      text: 'a decisão do rei',
      gloss: T('Complemento nominal {do rei}; o verbo {decidir} não está na frase.'),
    },
    {
      text: 'τῷ θεῷ δόξα',
      gloss: T('Em grego, {δόξα} é verbo e {τῷ θεῷ} o objeto indireto no dativo.'),
    },
  ],
  tables: [
    {
      caption: T('Termos integrantes por tipo de regente'),
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
      caption: T('Objetos indiretos: pronome ou nome'),
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
      caption: T('A ordem dos dois objetos'),
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
    prompt: T('Em {o amor de Deus}, o termo {de Deus} é:'),
    options: [
      T('complemento nominal, porque completa o nome {amor}'),
      T('objeto indireto de um verbo implícito'),
      T('agente da passiva de {amor}'),
      T('adjunto adnominal que caracteriza {amor}'),
    ],
    answer: 0,
    hint: T('Quem exige a preposição é o substantivo, não um verbo.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Em {o mundo foi criado por Deus}, {por Deus} é:'),
      options: [
        T('agente da passiva, porque pratica a ação'),
        T('objeto direto de {criado}'),
        T('complemento nominal de {mundo}'),
        T('adjunto adverbial de lugar'),
      ],
      answer: 0,
      hint: T('Na passiva, o termo com {por} é quem age, e não quem sofre.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o termo ao que o exige.'),
      pairs: [
        { a: T('{os céus} em {criou os céus}'), b: T('verbo transitivo direto') },
        { a: T('{a Moisés} em {falou a Moisés}'), b: T('verbo com preposição exigida') },
        { a: T('{de Deus} em {o amor de Deus}'), b: T('nome {amor}') },
        { a: T('{bom} em {Deus é bom}'), b: T('verbo de ligação {é}') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T(
        'O termo que completa um nome chama-se ______. The term that completes a noun is called ______.',
      ),
      answer: 'complemento nominal',
      hint: T('Em {a palavra de Deus}, quem completa é {palavra}.'),
    },
  ],
};
