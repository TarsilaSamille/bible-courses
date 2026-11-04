import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  section: T('Sintaxe'),
  title: T('A ordem SOV e onde cada coisa vai: o advérbio é o que mais engana'),
  subtitle: T(
    'O verbo vai para o fim, mas o advérbio não vem antes do sujeito como no mandarim: em coreano ele se encaixa entre o sujeito e o verbo',
  ),
  body: C(`## Objeto, verbo, sujeito: a mesma ordem das outras duas

O português diz "eu como uma maçã": sujeito, verbo, objeto, a ordem SVO. O coreano diz {naneun sagwaneul meogeotda}, o mesmo conteúdo com o verbo no meio e o sujeito por último. Não é caos, é **a ordem**, e é exatamente a mesma ordem do mandarim, {wǒ chī píngguǒ}, e do japonês, {watashi wa ringo o taberu}. As três línguas deste projeto regulam a frase com a mesma chave: o verbo fecha, e o que o português põe antes do verbo o coreano põe ainda mais para a frente.

A consequência prática é a mesma nos três casos, e vale mais que a regra em si: **quem traduz palavra por palavra chega ao fim com as peças na posição errada**, e a frase que sai é gramatical em português e intraduzível em coreano. É por isso que a tradução automática desmorona aqui: ela conhece as palavras e não conhece a ordem.

## O advérbio: entre o sujeito e o verbo

O advérbio é a diferença entre coreano e mandarim que quase ninguém espera. No mandarim o advérbio de tempo abre a frase e o sujeito vem depois dele: "ontem eu comi maçã". No coreano o advérbio também vem antes do verbo, mas **depois do sujeito**: {nat neun naneun meogeotda}, "ontem eu comi", com "ontem" depois de "eu" e antes de "comi". O advérbio não abre a frase; ele se encaixa entre o sujeito e o verbo, que é o único vão que sobra na ordem SOV.

Em português isso não tem custo nenhum: "ontem eu comi maçã", "eu ontem comi maçã" e "eu comi ontem maçã" são a mesma frase, e o advérbio é livre. Em coreano a posição é fixa, e por isso uma frase com advérbio fora do lugar não é uma frase deslocada: é uma frase errada. A regra prática é uma só: advérbio de tempo e de lugar entre o sujeito e o verbo, e nunca antes do sujeito.

E a partícula de tópico aparece colada ao advérbio: "ontem" leva {neun}, a mesma partícula que um substantivo, e o resultado é uma marca visível de que aquela peça é o advérbio e não o sujeito. Quem lê coreano e não conhece a partícula tropeça exatamente aí: monta "ontem, eu, comi" e produz {nat naneun meogeotda}, que é uma frase sobre ontem em que o leitor supõe estar vendo o sujeito na posição do mandarim.

## O adjetivo vem antes, o verbo vem no meio

O português põe o adjetivo **depois** do substantivo: "um livro vermelho". O coreano põe **antes**: {chwib chwib chwib chaek}, "vermelho livro", como o japonês põe antes e como o mandarim também põe. E o verbo vem sempre no meio, nunca no fim e nunca no começo.

Combine as duas regras e a frase fica pronta: "ontem eu comi um livro vermelho" é {nat neun naneun chwib chwib chwib yeohaeneul meogeotda}, advérbio, sujeito, adjetivo, substantivo com partícula de objeto, verbo. Lido da esquerda para a direita, é a frase portuguesa com todas as peças viradas de lugar: em português o adjetivo cola no substantivo e o verbo cola no sujeito; em coreano o verbo cola no objeto e o substantivo cola nele, e o advérbio, que em português é livre, fica preso no meio. Escreva as duas frases lado a lado uma vez e o texto coreano deixa de parecer truncado.

Quando há mais de um adjetivo, a ordem também é fixa: **o mais próximo do substantivo é o que o distingue**, e coreano e japonês concordam nisso. Para "um pequeno livro branco", {jageun hwen chaek}, o branco {hwen} é o que separa este livro dos outros, e por isso ele é o último antes do substantivo. O mesmo vale para {gichimi chan chwib chwib chwib chaek}, "um livro vermelho muito pequeno".

## O indireto antes do direto, e marcado por partícula

"Dar", "mandar", "mostrar" e "ensinar" são as construções em que o erro de tradução aparece com mais força, porque o português põe o objeto indireto no fim: "dou um livro a ele". O coreano põe o indireto antes de tudo: {kurege chwaege chwawassseo}, "a ele um livro dei", com {kurege} para a pessoa e {chwaege} para a coisa.

E o coreano é mais robusto que o japonês: o objeto indireto não é reconhecido só pela posição, é **reconhecido pela partícula**. {ee}, "a alguém", e {hantaee}, também "a alguém", são as duas formas do objeto indireto de pessoa, e {eseo} marca origem, "de". No japonês o indireto se reconhece por {ni}; no coreano há uma partícula própria, e ela sobrevive mesmo quando a posição é ambígua. É ela que separa "de" de "a" na mesma frase: {chosim chwiteuseo} é "desde o princípio", enquanto {ee} é "a alguém", dois papéis diferentes, duas partículas diferentes.

O que **não** muda é o sujeito: ele vem por último, mas pode ser **omitido**, porque a terminação do verbo já diz quem é o sujeito. Numa frase sem objeto indireto a ordem fica objeto, verbo, sujeito, e quando o sujeito some sobra objeto, verbo: {nat gatta}, "ontem foi". É essa omissão que faz o texto coreano parecer truncado para quem não conhece a língua: não é que faltou a última palavra, é que a terminação do verbo fez o trabalho dela.
`),
  vocab: [
    V('naneun', '는', 'tópico depois de "eu" (naneun)'),
    V('nat', '어제', 'ontem; advérbio de tempo (nat)'),
    V('neun', '는', 'partícula de tópico, também depois de advérbio (neun)'),
    V('yeohaeneul', '책', 'livro com objeto direto; partícula (yeohaeneul)'),
    V('reul', '를', 'objeto direto depois de palavra terminada em vogal (reul)'),
    V('gat', '가', 'sujeito depois de palavra terminada em vogal (gat)'),
    V('ee', '에게', 'a alguém; objeto indireto (ee)'),
    V('hantaee', '한테', 'a alguém; objeto indireto (hantaee)'),
    V('eseo', '에서', 'de; origem (eseo)'),
    V('chwib', '빨간', 'vermelho; adjetivo, vem antes do substantivo (chwib)'),
    V('jageun', '작다', 'ser pequeno (jageun)'),
    V('hwen', '흰', 'branco; adjetivo posicional (hwen)'),
    V('mulgug', '말씀', 'a Palavra (mulgug)'),
    V('chosim', '처음', 'princípio; começo (chosim)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A ordem é objeto — verbo — sujeito, a mesma do mandarim e do japonês. O verbo fecha a frase e o sujeito vem por último.',
      ),
    },
    {
      n: '2',
      text: T(
        'O advérbio de tempo e de lugar vem entre o sujeito e o verbo: {nat neun naneun meogeotda}. Em português ele é livre; em coreano a posição é fixa.',
      ),
    },
    {
      n: '3',
      text: T(
        'O advérbio leva partícula de tópico, {neun}, que é a marca visível de que aquela peça é advérbio e não sujeito.',
      ),
    },
    {
      n: '4',
      text: T(
        'O adjetivo vem antes do substantivo e o verbo vem no meio; com vários adjetivos, o mais próximo do substantivo é o que o distingue.',
      ),
    },
    {
      n: '5',
      text: T(
        'O objeto indireto vem antes do direto e é marcado por partícula — {ee}, {hantaee}, {eseo} — o que o torna mais legível que no japonês.',
      ),
    },
  ],
  notes: [
    {
      label: T('O sujeito pode sumir, e é por isso que o texto parece truncado'),
      text: T(
        'O sujeito vem por último, mas a terminação do verbo já declara quem ele é. Numa frase sem objeto indireto sobra objeto e verbo: {nat gatta}, "ontem foi". O que parece uma frase cortada é uma frase completa.',
      ),
    },
    {
      label: T('A partícula vale mais que a posição'),
      text: T(
        'No mandarim e no japonês a função de cada sintagma se deduz da posição, e por isso a tradução automática erra ao montar a frase. No coreano a partícula declara a função: o objeto indireto é reconhecido por {ee} ou {hantaee} mesmo quando a posição é ambígua. É o que torna o texto legível.',
      ),
    },
  ],
  examples: [
    {
      text: '어제 나는 빨간 책을 먹었다',
      gloss: T(
        'nat neun naneun chwib chwib chwib yeohaeneul meogeotda — ontem eu comi um livro vermelho',
      ),
    },
    {
      text: '어제 나는 책만 먹었다',
      gloss: T('nat neun naneun chaekman meogeotda — ontem eu comi só livros'),
    },
    { text: '그에게 책을 주었다', gloss: T('kurege chwaege chwawassseo — dei um livro a ele') },
    { text: '작은 흰 책', gloss: T('jageun hwen chaek — um pequeno livro branco') },
    {
      text: '처음부터 말씀 이었어',
      gloss: T('chosim chwiteuseo mulgug ittaseo — no princípio era a Palavra'),
    },
  ],
  tables: [
    {
      caption: T('A ordem dos constituintes: a mesma frase em português e em coreano'),
      head: [
        T('Constituinte'),
        T('Onde fica em português'),
        T('Onde fica em coreano'),
        T('A regra'),
      ],
      rows: [
        [
          T('advérbio de tempo'),
          T('livre, em qualquer posição'),
          T('entre o sujeito e o verbo'),
          T('vem depois do sujeito'),
        ],
        [T('sujeito'), T('primeiro'), T('por último'), T('pode ser omitido')],
        [
          T('adjetivo'),
          T('depois do substantivo'),
          T('antes do substantivo'),
          T('o mais próximo distingue'),
        ],
        [
          T('objeto indireto'),
          T('fechando a frase'),
          T('antes do objeto direto'),
          T('vem com partícula'),
        ],
        [T('objeto direto'), T('depois do verbo'), T('antes do verbo'), T('vem com partícula')],
        [T('verbo'), T('segundo'), T('antes do sujeito'), T('fecha a proposição')],
      ],
    },
    {
      caption: T('Onde o advérbio "ontem" fica nas três línguas deste projeto'),
      head: [T('Língua'), T('A frase'), T('Onde o advérbio fica')],
      rows: [
        [T('português'), T('ontem eu comi maçã'), T('livre: em qualquer posição')],
        [T('mandarim'), T('{zuotian wo chi-le pingguo}'), T('antes do verbo e antes do sujeito')],
        [T('japonês'), T('{kinou ringo o tabeta}'), T('antes do verbo e antes do sujeito')],
        [T('coreano'), T('{nat neun naneun meogeotda}'), T('entre o sujeito e o verbo')],
      ],
    },
    {
      caption: T('O adjetivo em português e em coreano, com vários adjetivos'),
      head: [T('Português'), T('Coreano'), T('Ordem')],
      rows: [
        [
          T('um livro vermelho'),
          T('{chwib chwib chwib chaek}'),
          T('adjetivo antes do substantivo'),
        ],
        [
          T('um pequeno livro branco'),
          T('{jageun hwen chaek}'),
          T('o que distingue fica colado ao substantivo'),
        ],
        [
          T('um livro vermelho pequeno'),
          T('{jageun chwib chwib chwib chaek}'),
          T('a ordem dos adjetivos também é fixa'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em "ontem eu comi uma maçã", onde o advérbio vai em coreano?'),
    options: [
      T('antes do sujeito'),
      T('entre o sujeito e o verbo'),
      T('depois do verbo'),
      T('no fim da frase, depois do sujeito'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Insira "ontem" entre o sujeito e o verbo: 나는 ____ 빨간 책을 먹었다'),
      answer: '어제',
    },
    {
      kind: 'match',
      prompt: T('Ligue a peça à função que ela tem na frase'),
      pairs: [
        { a: T('{kurege}'), b: T('objeto indireto: a pessoa, marcado por partícula') },
        { a: T('{yeohaeneul}'), b: T('objeto direto: a coisa, marcado por partícula') },
        { a: T('{nat}'), b: T('advérbio de tempo, entre o sujeito e o verbo') },
        { a: T('{chwib chwib chwib}'), b: T('adjetivo, antes do substantivo') },
        { a: T('{meogeotda}'), b: T('verbo, e sua terminação declara o sujeito') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('Como se escreve "um pequeno livro branco" em coreano?'),
      options: [
        T('{chaek jageun hwen}'),
        T('{hwen jageun chaek}'),
        T('{jageun hwen chaek}'),
        T('{chaek hwen jageun}'),
      ],
      answer: 2,
    },
  ],
};
