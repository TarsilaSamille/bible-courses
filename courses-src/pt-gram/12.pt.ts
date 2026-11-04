import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  section: T('A regência, a crase e a colocação pronominal'),
  title: T('Crase'),
  subtitle: T('Fusão da preposição a com o artigo a'),
  body: C(`**Visão geral.** A crase aparece quando a preposição {a} se funde ao artigo {a}: antes de {o}, {a}, {os} e {as}, sempre.

**Regra 1.** Antes de verbo, pronome, numeral cardinal e nome próprio sem artigo, nunca: em {Vou à escola} há crase, em {Vou a school} há, mas em {Vou a pé} não há.

**Regra 2.** O teste é trocar a preposição por {para}: {vou à escola} e {vou para a escola} coexistem no mesmo sentido; {vou à vou} não.

**Regra 3.** Com nome próprio precedido de artigo há crase: em {ao Senhor}, {à Igreja}, {aos doutros}; sem artigo, não: {a Cristo} e {para Deus}.

**Regra 4.** A crase é sempre opcional no registro coloquial: ninguém acerta errado por não usá-la, e ninguém acerta certo por usá-la onde não cabe.

**Aplicação.** Em {O Verbo se fez carne}, a preposição {em} mais {carne} não gera crase, e {se} é pronome. Mas em {Vou à messe} a crase ocorre porque o artigo {a} e a preposição {a} se fundem em um só acento. O detalhe crítico: nem o grego nem o latim têm crase, e o latim {ad} vira apenas {a} no português, de modo que traduzir {ad Dominum} por {ao Senhor} é decisão do tradutor, não da língua de origem.

**Verificação.** Antes de escrever crase, faça três perguntas: a palavra seguinte é **feminina**? Ela tem **artigo**? E é **verbo** ou **pronome pessoal**? Três sim para os três, crase; qualquer não, sem crase. Se as três respostas forem sim e ainda assim a frase soar estranha, faça o segundo teste: troque {a} por {para}. Se o sentido não muda, a crase pode ir.`),
  vocab: [
    V('crase', 'crase', 'fusão de {a} com {a}'),
    V('à', 'à', 'a + artigo a'),
    V('às vezes', 'às vezes', 'a + as, com sentido de frequência'),
    V('as vezes', 'as vezes', 'artigo as + substantivo vezes'),
    V('à noite', 'à noite', 'a + o, com sentido de tempo'),
    V('a noite', 'a noite', 'a + noite, sem crase'),
    V('ao Senhor', 'ao Senhor', 'crase antes de nome próprio com artigo'),
    V('a Cristo', 'a Cristo', 'sem crase antes de nome próprio sem artigo'),
    V('artigo', 'artigo', 'determinante que individualiza'),
    V('preposição', 'preposição', 'liga dois termos'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'A crase aparece quando a preposição {a} se funde ao artigo {a}: antes de {o}, {a}, {os} e {as}, sempre.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Antes de verbo, pronome, numeral cardinal e nome próprio sem artigo, nunca: em {Vou à escola} há crase, em {Vou a school} há, mas em {Vou a pé} não há.',
      ),
    },
    {
      n: '§3',
      text: T(
        'O teste é trocar a preposição por {para}: {vou à escola} e {vou para a escola} coexistem no mesmo sentido; {vou à vou} não.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Com nome próprio precedido de artigo há crase: em {ao Senhor}, {à Igreja}, {aos doutros}; sem artigo, não: {a Cristo} e {para Deus}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'A crase é sempre opcional no registro coloquial: ninguém acerta errado por não usá-la, e ninguém acerta certo por usá-la onde não cabe.',
      ),
    },
  ],
  notes: [
    {
      label: T('O que o grego não tem'),
      text: T(
        'Nem o grego antigo nem o latim têm crase como fenômeno gramatical. Onde o latim escreve {ad Dominum}, o grego escreve {πρὸς τὸν κύριον}, e o português escreve {ao Senhor}. A crase é uma criaçao do português medieval, e é por isso que o tradutor precisa decidir: está vertendo a palavra ou a fusão que a língua de destino faz por conta própria.',
      ),
    },
    {
      label: T('A crase que muda o sentido'),
      text: T(
        'Em {a palavra de Deus} a preposição {de} é exigida pelo substantivo; o {a} é artigo, e os dois juntos formam {da}. A crase do {à} é a mesma fusão vista do outro lado: dois {a} viram um. O que muda é a função da palavra, não a fusão.',
      ),
    },
  ],
  examples: [
    { text: 'vou à escola', gloss: T('Crase: preposição {a} mais artigo {a} antes de {escola}.') },
    {
      text: 'vou a pé',
      gloss: T('Sem crase: {pé} é substantivo sem artigo, e a preposição fica só.'),
    },
    {
      text: 'refiro-me ao Senhor',
      gloss: T('Crase antes de nome próprio com artigo: {ao Senhor}.'),
    },
    {
      text: 'confio em Cristo',
      gloss: T('Sem crase: nome próprio sem artigo não recebe a fusão.'),
    },
    {
      text: 'às vezes',
      gloss: T('Crase com sentido adverbial de frequência: {a} + {as} + {vezes}.'),
    },
    {
      text: 'as vezes que viram o Senhor',
      gloss: T('Aqui não há crase: é artigo {as} + substantivo {vezes}.'),
    },
    { text: 'à noite', gloss: T('Crase com sentido de tempo determinado: {a} + {o}.') },
    {
      text: 'a noite toda',
      gloss: T('Sem crase: o sentido é de duração, e {a} é artigo antes de {noite}.'),
    },
    {
      text: 'O Verbo se fez carne',
      gloss: T('Nenhum par {a} + {a} na frase: não há crase em nenhum ponto.'),
    },
  ],
  tables: [
    {
      caption: T('Quando há crase e quando não há'),
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
      caption: T('Os dois usos de {a} que se confundem'),
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
      caption: T('O teste da substituição por {para}'),
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
    prompt: T('Em qual das frases abaixo a crase está correta?'),
    options: [
      T('refiro-me ao Senhor'),
      T('refiro-me a o Senhor'),
      T('confio a Deus'),
      T('vou a pé à cidade'),
    ],
    answer: 0,
    hint: T('Nome próprio com artigo recebe crase; sem artigo, não.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Em {vou a pé}, não há crase porque:'),
      options: [
        T('{pé} é substantivo sem artigo, e falta o segundo {a}'),
        T('{a} é advérbio e advérbio nunca recebe crase'),
        T('a crase é obrigatória antes de {p}'),
        T('{pé} é feminino, e feminino exige crase'),
      ],
      answer: 0,
      hint: T('São três condições: feminino, artigo e não-verbo.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a frase à resposta certa.'),
      pairs: [
        { a: T('{vou à escola}'), b: T('crase cabível') },
        { a: T('{vou a pé}'), b: T('sem crase') },
        { a: T('{ao Senhor}'), b: T('crase por nome próprio com artigo') },
        { a: T('{a Cristo}'), b: T('sem crase') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('A crase é a fusão da preposição {a} com o artigo ______.'),
      answer: 'a',
      hint: T('Os dois {a} viram um só acento.'),
    },
  ],
};
