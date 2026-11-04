import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  section: T('A oração e seus termos'),
  title: T('Termos integrantes e acessórios'),
  subtitle: T('Completude, qualificação e circunstância'),
  body: C(`**Visão geral.** O {objeto direto} completa o verbo sem preposição: em {Deus criou os céus}, {os céus} é objeto direto, e o verbo {criou} não exige nada além dele.

**Regra 1.** O {objeto indireto} vem com a preposição que o verbo exige: em {Deus falou a Moisés}, a preposição {a} é exigida por {falar}, e {Moisés} é objeto indireto.

**Regra 2.** O {complemento nominal} completa um nome, não um verbo: em {o amor de Deus}, a preposição {de} é exigida por {amor}, e {Deus} completa o nome.

**Regra 3.** O {agente da passiva} é o sujeito da construção passiva: em {o mundo foi criado por Deus}, {por Deus} não é objeto, é quem pratica a ação.

**Regra 4.** O {adjunto} acrescenta algo e pode sair da frase: em {E, ao anoitecer, disse aos seus discípulos}, {ao anoitecer} sai e a frase continua inteira.

**Aplicação.** Em {Jesus, Senhor nosso, entrou em Jerusalém}, {Jesus} é sujeito, {entrou} é verbo, {em Jerusalém} é adjunto adverbial de lugar, e {Senhor nosso} é vocativo, um termo que não entra na relação sintática e cujo papel é **chamar a atenção**. Note que o vocativo aparece entre vírgulas, e é essa pontuação que o separa do resto.

**Verificação.** O teste que decide é a retirada: tire o termo e veja se a frase ainda faz sentido. Se não faz, é **integrante**. Se faz, é **acessório**. Depois, pergunte quem exige o termo: o verbo dá **objeto indireto**, um nome dá **complemento nominal**, e ninguém dá nada, o que faz do termo um **adjunto**. E por último: o termo concorda com um nome, ou está solto?`),
  vocab: [
    V('objeto direto', 'objeto direto', 'complemento do verbo sem preposição'),
    V('objeto indireto', 'objeto indireto', 'complemento do verbo com preposição exigida'),
    V('complemento nominal', 'complemento nominal', 'complemento de um nome'),
    V('agente da passiva', 'agente da passiva', 'sujeito da construção passiva'),
    V('adjunto adnominal', 'adjunto adnominal', 'caracteriza um nome'),
    V('adjunto adverbial', 'adjunto adverbial', 'indica circunstância'),
    V('aposto', 'aposto', 'explica um termo anterior'),
    V('vocativo', 'vocativo', 'chama o interlocutor'),
    V('por Deus', 'por Deus', 'agente da passiva com {por}'),
    V('Senhor nosso', 'Senhor nosso', 'vocativo entre vírgulas'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'O {objeto direto} completa o verbo sem preposição: em {Deus criou os céus}, {os céus} é objeto direto, e o verbo {criou} não exige nada além dele.',
      ),
    },
    {
      n: '§2',
      text: T(
        'O {objeto indireto} vem com a preposição que o verbo exige: em {Deus falou a Moisés}, a preposição {a} é exigida por {falar}, e {Moisés} é objeto indireto.',
      ),
    },
    {
      n: '§3',
      text: T(
        'O {complemento nominal} completa um nome, não um verbo: em {o amor de Deus}, a preposição {de} é exigida por {amor}, e {Deus} completa o nome.',
      ),
    },
    {
      n: '§4',
      text: T(
        'O {agente da passiva} é o sujeito da construção passiva: em {o mundo foi criado por Deus}, {por Deus} não é objeto, é quem pratica a ação.',
      ),
    },
    {
      n: '§5',
      text: T(
        'O {adjunto} acrescenta algo e pode sair da frase: em {E, ao anoitecer, disse aos seus discípulos}, {ao anoitecer} sai e a frase continua inteira.',
      ),
    },
  ],
  notes: [
    {
      label: T('O termo que o grego marca por caso'),
      text: T(
        'Onde o grego escreve {τῷ θεῷ}, o português escreve {a Deus}: o caso grego diz que o termo é indireto, e a preposição portuguesa diz o mesmo. Onde o grego escreve {ὀφθαλμοῖς} e o português {olhos}, o grego marca o objeto direto e o português dispensa a marca. A regência é a chave mais difícil da tradução por causa disso.',
      ),
    },
    {
      label: T('O vocativo que some quando muda o interlocutor'),
      text: T(
        'Em {Senhor nosso, aqui estamo}, o {Senhor} é vocativo, e a prova é que o {vosso} que vem logo depois já se refere a {nós}. Se a frase gritasse {meu Senhor, estai longe de mim}, o {meu} mudaria de valor. O que decide é o referente do possessivo, não a vírgula.',
      ),
    },
  ],
  examples: [
    {
      text: 'Deus criou os céus e a terra.',
      gloss: T('{os céus} e {a terra} são objetos diretos: completam {criou} sem preposição.'),
    },
    {
      text: 'Deus falou a Moisés.',
      gloss: T('{a Moisés} é objeto indireto: a preposição {a} é exigida por {falar}.'),
    },
    {
      text: 'o amor de Deus',
      gloss: T(
        '{de Deus} é complemento nominal de {amor}: quem exige a preposição é o nome, não o verbo.',
      ),
    },
    {
      text: 'o mundo foi criado por Deus.',
      gloss: T('{o mundo} é sujeito paciente e {por Deus} é o agente da passiva, não um objeto.'),
    },
    {
      text: 'a palavra dos deuses',
      gloss: T('{dos deuses} é complemento nominal de {palavra}; o nome {palavra} exige {de}.'),
    },
    {
      text: 'Jesus, Senhor nosso, entrou em Jerusalém.',
      gloss: T('{Senhor nosso} é vocativo; {em Jerusalém} é adjunto adverbial de lugar.'),
    },
    {
      text: 'Jesus, o filho do carpinteiro, entrou em Jerusalém.',
      gloss: T('{o filho do carpinteiro} é aposto de {Jesus}: explica e restringe o nome.'),
    },
    {
      text: 'No princípio, disse Deus.',
      gloss: T('{No princípio} é adjunto adverbial de tempo: sai da frase e nada se quebra.'),
    },
    {
      text: 'O evangelho segundo Marcos começou assim.',
      gloss: T(
        '{segundo Marcos} é complemento nominal de {evangelho}, e {começou assim} traz {assim} como adjunto de modo.',
      ),
    },
  ],
  tables: [
    {
      caption: T('Integrantes e acessórios'),
      head: [T('Termo'), T('Quem exige'), T('Teste da retirada'), T('Exemplo')],
      rows: [
        [
          T('{objeto direto}'),
          T('nada além do verbo'),
          T('a frase perde sentido'),
          T('{os céus} em {criou os céus}'),
        ],
        [
          T('{objeto indireto}'),
          T('o verbo, por preposição'),
          T('a frase perde sentido'),
          T('{a Moisés} em {falou a Moisés}'),
        ],
        [
          T('{complemento nominal}'),
          T('um nome'),
          T('o nome fica incompleto'),
          T('{de Deus} em {o amor de Deus}'),
        ],
        [
          T('{agente da passiva}'),
          T('a construção passiva'),
          T('a ação perde autor'),
          T('{por Deus} em {criado por Deus}'),
        ],
        [
          T('{adjunto}'),
          T('ninguém'),
          T('a frase continua inteira'),
          T('{ao anoitecer} em {ao anoitecer disse}'),
        ],
        [T('{aposto}'), T('ninguém'), T('a frase continua inteira'), T('{Senhor nosso}')],
        [
          T('{vocativo}'),
          T('ninguém'),
          T('a frase continua inteira'),
          T('{Jesus} em {Jesus, Senhor nosso}'),
        ],
      ],
    },
    {
      caption: T('Verbo que exige preposição'),
      head: [T('Verbo'), T('Preposição exigida'), T('Frase')],
      rows: [
        [T('{falar}'), T('{a}'), T('{falou a Moisés}')],
        [T('{obedecer}'), T('{a}'), T('{obedeceu ao pai}')],
        [T('{crer}'), T('{em}'), T('{crer em Deus}')],
        [T('{gostar}'), T('{de}'), T('{gostar da música}')],
        [T('{aspirar}'), T('{a}'), T('{aspirar ao céu}')],
        [T('{depender}'), T('{de}'), T('{depender da ajuda}')],
        [T('{lembrar}'), T('{de}'), T('{lembrar-se da lei}')],
        [T('{assistir}'), T('{a}'), T('{assistiu à missa}')],
        [T('{visar}'), T('{a}'), T('{visou ao alto}')],
        [T('{proceder}'), T('{de}'), T('{procedeu de Deus}')],
      ],
    },
    {
      caption: T('Objetos indiretospronome ou nome'),
      head: [T('Tipo'), T('Forma'), T('Exemplo')],
      rows: [
        [T('nome'), T('artigo ou demonstrativo + substantivo'), T('{falou a Moisés}')],
        [T('pronome oblíquo'), T('{lhe}, {eles}, {nós}'), T('{falou-lhe}')],
        [T('pronominal'), T('verbo + {me}, {te}, {se}'), T('{falou-me}')],
        [T('com {a} fundida'), T('crase obrigatória'), T('{falou à árvore}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Deus falou a Moisés}, {a Moisés} é objeto indireto porque:'),
    options: [
      T('vem com a preposição {a}, que o verbo {falar} exige'),
      T('é um substantivo, e substantivo é sempre objeto direto'),
      T('está depois do verbo, e o que vem depois é indireto'),
      T('completa o nome {Deus}, e não o verbo'),
    ],
    answer: 0,
    hint: T('Substitua por {lhe}: {falou-lhe} continua correto.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Em {o amor de Deus}, {de Deus} é:'),
      options: [
        T('complemento nominal, porque completa o nome {amor}'),
        T('objeto direto de {amor}'),
        T('adjunto adverbial de lugar'),
        T('agente da passiva'),
      ],
      answer: 0,
      hint: T('Quem exige a preposição é {amor}, um nome, e não um verbo.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o termo ao seu papel na oração.'),
      pairs: [
        { a: T('{os céus} em {criou os céus}'), b: T('objeto direto') },
        { a: T('{a Moisés} em {falou a Moisés}'), b: T('objeto indireto') },
        { a: T('{Senhor nosso}'), b: T('vocativo') },
        { a: T('{por Deus}'), b: T('agente da passiva') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('O termo que pode sair da frase sem quebrá-la é ______.'),
      answer: 'acessório',
      hint: T('Integrante sai e a frase perde sentido.'),
    },
  ],
};
