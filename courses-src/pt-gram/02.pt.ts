import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  section: T('As palavras e suas classes'),
  title: T('Formação de palavras'),
  subtitle: T('Derivação, composição e mudança de sentido'),
  body: C(`**Visão geral.** Há quatro processos de formação, e o que os separa é o número de radicais e o tipo de junta: {prefixação}, {sufixação}, {composição} e {aglutinação}.

**Regra 1.** Na {prefixação} o sentido inverte sem tocar na categoria: {des-} + {leal} = {desleal}, e {anti-} + {social} = {antisocial}.

**Regra 2.** Na {sufixação} a categoria muda e o sentido permanece: {leal} + {-dade} = {lealdade}, {vapor} + {-oso} = {vaporoso}.

**Regra 3.** Na {composição} os dois radicais estão inteiros e o hífen marca a junta: {guarda} + {chuva} = {guarda-chuva}, {passa} + {tempo} = {passatempo}.

**Regra 4.** O teste que separa {prefixo} de {sufixo}: o prefixo **inverte o sentido** e o sufixo **troca a categoria**; {deslealdade} nega, {lealdade} nomeia.

**Aplicação.** Em {O Verbo se fez carne}, o substantivo {Verbo} é {verbo} + {-o}: radical {verb-}, sufixo {-o}, e nenhuma desinência à vista porque nome próprio não a recebe. É a {sufixação} que fez o nome. Compare com {passatempo}, que é {composição}: {passa} e {tempo} são dois radicais inteiros, e nenhum dos dois virou nome sozinho. O mesmo parágrafo usa os dois processos, e é o número de radicais que diz qual deles.

**Verificação.** Faça três perguntas: quantos radicais aparecem? O **sentido** inverteu ou só a **categoria** mudou? E a base, sozinha, já é nome? Um radical só com sentido invertido é {prefixação}; um radical só com categoria nova é {sufixação}; dois radicais inteiros são {composição}. Com as três, a análise de qualquer palavra nova sai sem dicionário.`),
  vocab: [
    V('derivação', 'derivação', 'derivação'),
    V('prefixação', 'prefixação', 'prefixação'),
    V('sufixação', 'sufixação', 'sufixação'),
    V('composição', 'composição', 'composição'),
    V('justaposição', 'justaposição', 'justaposição'),
    V('aglutinação', 'aglutinação', 'aglutinação'),
    V('guarda-chuva', 'guarda-chuva', 'dois radicais inteiros'),
    V('passatempo', 'passatempo', 'dois radicais, sem hífen'),
    V('-dade', '-dade', 'sufixo que forma substantivo'),
    V('desleal', 'desleal', '{des-} mais {leal}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Há quatro processos de formação, e o que os separa é o número de radicais e o tipo de junta: {prefixação}, {sufixação}, {composição} e {aglutinação}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Na {prefixação} o sentido inverte sem tocar na categoria: {des-} + {leal} = {desleal}, e {anti-} + {social} = {antisocial}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'Na {sufixação} a categoria muda e o sentido permanece: {leal} + {-dade} = {lealdade}, {vapor} + {-oso} = {vaporoso}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Na {composição} os dois radicais estão inteiros e o hífen marca a junta: {guarda} + {chuva} = {guarda-chuva}, {passa} + {tempo} = {passatempo}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'O teste que separa {prefixo} de {sufixo}: o prefixo **inverte o sentido** e o sufixo **troca a categoria**; {deslealdade} nega, {lealdade} nomeia.',
      ),
    },
  ],
  notes: [
    {
      label: T('O hífen que não é junta de afixos'),
      text: T(
        '{passatempo} e {guarda-chuva} se escrevem sem hífen porque nenhuma das duas bases precisa dele. Já {anti-} exige o hífen em {antisocial}, por causa da colisão de vogais. O hífen, portanto, ora marca {composição}, ora evita um encontro fonético: são dois papéis distintos, e só o segundo tem a ver com a junta.',
      ),
    },
    {
      label: T('O radical que vem de fora'),
      text: T(
        'O latim deixou radicais que o português não flexiona mais: {fides} em {fé}, {panis} em {pão}. Nesses casos o radical herdado aparece sozinho, sem sufixo e sem desinência visível, e é o léxico que segura a palavra. Nem toda palavra do português tem afixo visível; algumas são o radical puro.',
      ),
    },
  ],
  examples: [
    {
      text: 'deslealdade',
      gloss: T(
        'Prefixo {des-} e sufixo {-dade} na mesma palavra: duas formações sobre o radical {leal}.',
      ),
    },
    {
      text: 'lealdade',
      gloss: T(
        'Só {sufixação}: o radical {leal} continua positivo e o {-dade} apenas nomeia a qualidade.',
      ),
    },
    {
      text: 'antisocial',
      gloss: T(
        'Prefixo {anti-} com hífen obrigatório; a vogal final do prefixo colidiria com a inicial do radical.',
      ),
    },
    {
      text: 'vaporoso',
      gloss: T('Sufixo {-oso} formata adjetivo a partir do substantivo {vapor}.'),
    },
    {
      text: 'guarda-chuva',
      gloss: T(
        'Composição: {guarda} e {chuva} são dois radicais inteiros, e o hífen marca a junta.',
      ),
    },
    {
      text: 'passatempo',
      gloss: T('Composição sem hífen: {passa} e {tempo} não colidem na escrita.'),
    },
    {
      text: 'fé',
      gloss: T('Radical herdado do latim {fides}, sem sufixo e sem desinência visível.'),
    },
    {
      text: 'pão',
      gloss: T('Do latim {panis}, com adaptação fonética: {a} no lugar do {i} latim.'),
    },
    {
      text: 'livraria',
      gloss: T('Sufixo {-aria} que formata o lugar onde se exerce o ofício de {livro}.'),
    },
  ],
  tables: [
    {
      caption: T('Os quatro processos'),
      head: [T('Processo'), T('Radicais'), T('O que muda'), T('Exemplo')],
      rows: [
        [T('{prefixação}'), T('um'), T('o sentido inverte'), T('{desleal}')],
        [T('{sufixação}'), T('um'), T('a categoria muda'), T('{lealdade}')],
        [T('{composição}'), T('dois inteiros'), T('nasce um sentido novo'), T('{guarda-chuva}')],
        [
          T('{aglutinação}'),
          T('dois, um perdido'),
          T('a base perde a forma'),
          T('{homem} de {hominem}'),
        ],
      ],
    },
    {
      caption: T('Sufixos que mudam de categoria'),
      head: [T('Sufixo'), T('Base'), T('Categoria que sai')],
      rows: [
        [T('-dade'), T('{leal}'), T('substantivo: {lealdade}')],
        [T('{-oso}'), T('{vapor}'), T('adjetivo: {vaporoso}')],
        [T('{-mente}'), T('{rápido}'), T('advérbio: {rapidamente}')],
        [T('{-ável}'), T('{amigar}'), T('adjetivo: {amigável}')],
        [T('{-aria}'), T('{livro}'), T('substantivo: {livraria}')],
        [T('{-eiro}'), T('{padre}'), T('substantivo: {padeiro}')],
      ],
    },
    {
      caption: T('Prefixos e o que eles invertem'),
      head: [T('Prefixo'), T('Base'), T('Resultado')],
      rows: [
        [T('{des-}'), T('{leal}'), T('tira a qualidade: {desleal}')],
        [T('{in-}'), T('{numerável}'), T('nega: {inumerável}')],
        [T('{anti-}'), T('{social}'), T('inverte: {antisocial}')],
        [T('{re-}'), T('{fazer}'), T('repete: {refazer}')],
        [T('{pre-}'), T('{ver}'), T('antecipa: {prever}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual palavra é formada por {composição}?'),
    options: [T('{deslealdade}'), T('{guarda-chuva}'), T('{vaporoso}'), T('{antisocial}')],
    answer: 1,
    hint: T('Conte os radicais inteiros: {guarda} e {chuva} são dois.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('O que o prefixo {des-} faz em {desleal}?'),
      options: [
        T('inverte o sentido do radical, sem mudar a categoria'),
        T('troca a categoria do radical em substantivo'),
        T('acrescenta uma desinência de número'),
        T('junta dois radicais inteiros'),
      ],
      answer: 0,
      hint: T('{leal} continua sendo adjetivo em {desleal}.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o processo ao exemplo que o ilustra.'),
      pairs: [
        { a: T('{desleal}'), b: T('{prefixação}') },
        { a: T('{lealdade}'), b: T('{sufixação}') },
        { a: T('{passatempo}'), b: T('{composição}') },
        { a: T('{rapidamente}'), b: T('sufixo que cria advérbio') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T(
        'Em {guarda-chuva} há ______ radicais inteiros, e é por isso que se chama composição.',
      ),
      answer: 'dois',
      hint: T('{guarda} e {chuva}.'),
    },
  ],
};
