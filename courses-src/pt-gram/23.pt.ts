import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  section: T('O sentido e a subordinação'),
  title: T('Semântica'),
  subtitle: T('Significado, relações e ambiguidade'),
  body: C(`**Visão geral.** A {polissemia} reúne sentidos relacionados: em {o Verbo}, o sentido vai de {palavra dita} a {revealação}, e a relação entre eles é histórica.

**Regra 1.** A {homonímia} reúne sentidos independentes com a mesma forma: {banco} é a instituição e também o assento, e não há relação entre os dois sentidos.

**Regra 2.** A {paronímia} assemelha formas e separa sentidos: {iminente} e {imigrante} parecem-se e nada um diz do outro, e é esse o critério que separa paronímia de polissemia.

**Regra 3.** A interpretação depende do {contexto}: em {No princípio era o Verbo}, o sentido de {Verbo} é {revealação} porque o contexto é o do relato da criação.

**Regra 4.** Quando se traduz de uma língua de casos, o risco é {achatar} o sentido: {λόγος} tem quatro sentidos em grego, e o português {palavra} perde três.

**Aplicação.** Em {O Verbo se fez carne}, {Verbo} tem sentido **metafórico** (não {palavra dita} mas {revealação}), e {carne} tem sentido **concreto e intenso**: o grego usa {σάρξ}, que é mais forte que {corpo}, e significa a natureza humana inteira com a sua fraqueza. Traduzir {carne} por {corpo} reduz a palavra, e a tradução que faz isso perde o que o grego afirmava.

**Verificação.** Para qualquer palavra-chave, pergunte: qual é o **sentido** no contexto e não no dicionário? Qual é a **referência**, isto é, a coisa de que se fala? O contexto permite **outro** sentido? E a tradução manteve a **polissemia** que o original tinha? Quatro perguntas, e a tradução deixa de achatar o texto.`),
  vocab: [
    V('significado', 'significado', 'conteúdo de sentido de uma forma'),
    V('sinonímia', 'sinonímia', 'aproximação de sentidos'),
    V('antonímia', 'antonímia', 'oposição de sentidos'),
    V('polissemia', 'polissemia', 'vários sentidos relacionados'),
    V('homonímia', 'homonímia', 'sentidos independentes, mesma forma'),
    V('paronímia', 'paronímia', 'formas assemelhadas, sentidos sem relação'),
    V('campo semântico', 'campo semântico', 'conjunto de sentidos de uma área'),
    V('contexto', 'contexto', 'o que decide o sentido'),
    V('λόγος', 'λόγος', 'palavra grega com quatro sentidos'),
    V('σάρξ', 'σάρξ', 'carne no sentido mais intenso'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'A {polissemia} reúne sentidos relacionados: em {o Verbo}, o sentido vai de {palavra dita} a {revealação}, e a relação entre eles é histórica.',
      ),
    },
    {
      n: '§2',
      text: T(
        'A {homonímia} reúne sentidos independentes com a mesma forma: {banco} é a instituição e também o assento, e não há relação entre os dois sentidos.',
      ),
    },
    {
      n: '§3',
      text: T(
        'A {paronímia} assemelha formas e separa sentidos: {iminente} e {imigrante} parecem-se e nada um diz do outro, e é esse o critério que separa paronímia de polissemia.',
      ),
    },
    {
      n: '§4',
      text: T(
        'A interpretação depende do {contexto}: em {No princípio era o Verbo}, o sentido de {Verbo} é {revealação} porque o contexto é o do relato da criação.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Quando se traduz de uma língua de casos, o risco é {achatar} o sentido: {λόγος} tem quatro sentidos em grego, e o português {palavra} perde três.',
      ),
    },
  ],
  notes: [
    {
      label: T('O que o caso faz e o português não'),
      text: T(
        '{Λόγος} em grego pode ser {palavra}, {discurso}, {razão} e {revelação}: os quatro sentidos convivem na mesma forma, e o caso ajuda a distinguir. O português traduziu por {palavra}, {discurso}, {pensamento} e {Verbo}, criando quatro palavras onde o grego tinha uma. Cada tradução é uma escolha, e o tradutor precisa saber qual está fazendo.',
      ),
    },
    {
      label: T('A ambiguidade que a gramática remove'),
      text: T(
        'Em {Saiu o filho de Pedro}, é ambíguo se {filho} é de {Pedro} ou se foi {o filho} que saiu. A vírgula depois de {Saiu} resolve: {Saiu, o filho de Pedro}, e a leitura fica uma só. O grego antigo resolvia pelo caso e o português antigo pela ordem dos termos; a ambiguidade que sobra hoje é a que a pontuação alcança.',
      ),
    },
  ],
  examples: [
    {
      text: 'No princípio era o Verbo',
      gloss: T('{Verbo} em sentido metafórico: {revealação}, não {palavra dita}.'),
    },
    {
      text: 'o Verbo se fez carne',
      gloss: T('{carne} em sentido intenso: a natureza humana inteira, como em {σάρξ}.'),
    },
    {
      text: 'λόγος',
      gloss: T('Uma forma grega com quatro sentidos: {palavra}, {discurso}, {razão} e {Verbo}.'),
    },
    {
      text: 'o banco está cheio',
      gloss: T('Homonímia se {banco} for a instituição e a carteira estiver em jogo.'),
    },
    {
      text: 'sentou-se no banco',
      gloss: T('O mesmo {banco} agora é o assento, e o contexto resolveu a ambiguidade.'),
    },
    {
      text: 'o iminente perigo',
      gloss: T(
        '{iminente} significa que vai acontecer, e não {imigrante}, que é o que vem de fora.',
      ),
    },
    {
      text: 'a palavra de Deus',
      gloss: T('Aqui {palavra} é o sentido concreto; a revelação aparece em {o Verbo}.'),
    },
    {
      text: 'os Logos do Evangelho',
      gloss: T('Aqui {logos} é o discurso, e não a palavra nem a razão.'),
    },
    {
      text: 'Saiu, o filho de Pedro',
      gloss: T('A vírgula remove a ambiguidade: agora se sabe que {o filho de Pedro} saiu.'),
    },
  ],
  tables: [
    {
      caption: T('Polissemia, homonímia e paronímia'),
      head: [T('Fenômeno'), T('O que reúne'), T('Há relação?'), T('Exemplo')],
      rows: [
        [
          T('{polissemia}'),
          T('sentidos relacionados'),
          T('sim, histórica ou metafórica'),
          T('{o Verbo}'),
        ],
        [T('{homonímia}'), T('sentidos independentes'), T('não'), T('{banco}')],
        [
          T('{paronímia}'),
          T('formas assemelhadas'),
          T('não, e os sentidos não se tocam'),
          T('{iminente}, {imigrante}'),
        ],
        [
          T('{sinonímia}'),
          T('sentidos próximos'),
          T('sim, por equivalência'),
          T('{magnífico}, {excelente}'),
        ],
        [T('{antonímia}'), T('sentidos opostos'), T('sim, por oposição'), T('{amor}, {ódio}')],
      ],
    },
    {
      caption: T('Os sentidos de {λόγος} e o que cada um virou'),
      head: [T('Sentido grego'), T('Significa'), T('Português'), T('Onde aparece')],
      rows: [
        [T('{discurso}'), T('palavra articulada'), T('{palavra}'), T('{a palavra de Deus}')],
        [T('{razão}'), T('pensamento, relação'), T('{razão}'), T('{o Logos se fez carne}')],
        [T('{relação}'), T('o que liga duas coisas'), T('{palavra}'), T('{o Verbo eterno}')],
        [T('{revelação}'), T('o que Deus diz de si'), T('{Verbo}'), T('{o Logos se fez carne}')],
        [T('{conta}'), T('número, ordem'), T('{conta}'), T('{a conta das nation}')],
      ],
    },
    {
      caption: T('Relações de sentido e o risco do seu uso'),
      head: [T('Relação'), T('Exemplo'), T('Serve para'), T('Cuidado')],
      rows: [
        [T('{sinônimos}'), T('{magnífico}, {excelente}'), T('variar o texto'), T('apaga a nuance')],
        [T('{antônimos}'), T('{amor}, {ódio}'), T('marcar contraste'), T('nem sempre são exatos')],
        [
          T('{parônimos}'),
          T('{eminente}, {iminente}'),
          T('testar a atenção'),
          T('troca-se por engano'),
        ],
        [T('{homonônimos}'), T('{ser}, {cér}'), T('desambiguar'), T('o contexto resolve')],
        [T('{polônimos}'), T('{banco}, {mesa}'), T('checar o sentido'), T('depende do contexto')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {o Verbo}, {Verbo} tem sentido metafórico. Isso quer dizer que:'),
    options: [
      T('{palavra} foi transferido de sentido, e o contexto sustenta a transferência'),
      T('{Verbo} é um homônimo de {palavra}'),
      T('{Verbo} não tem sentido nenhum, e o contexto é que o cria'),
      T('{Verbo} é um parônimo de {palavra}'),
    ],
    answer: 0,
    hint: T('Um sentido metafórico nasce de outro por comparação, e a imagem sustenta a leitura.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('O par {banco} (instituição) e {banco} (assento) é exemplo de:'),
      options: [
        T('homonímia, porque os sentidos são independentes'),
        T('polissemia, porque há vários sentidos'),
        T('paronímia, porque as formas se assemelham'),
        T('antonímia, porque os sentidos se opõem'),
      ],
      answer: 0,
      hint: T('O teste: há alguma relação entre o sentido da instituição e o do assento?'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o par de palavras ao fenômeno que ele exemplifica.'),
      pairs: [
        { a: T('{o Verbo}, {palavra}'), b: T('polissemia') },
        { a: T('{banco} e {banco}'), b: T('homonímia') },
        { a: T('{iminente} e {imigrante}'), b: T('paronímia') },
        { a: T('{amor} e {ódio}'), b: T('antonímia') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('A reunião de sentidos relacionados numa mesma forma chama-se ______.'),
      answer: 'polissemia',
      hint: T('É o caso de {o Verbo}, com {palavra} e {revelação}.'),
    },
  ],
};
