import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  section: T('Escrita'),
  title: T('Katakana: a caligrafia do estrangeiro, dos nomes e da ênfase'),
  subtitle: T(
    'Katakana diz as mesmas sílabas que o hiragana; a escolha é de registro, e é essa escolha que grifa',
  ),
  body: C(`
## Katakana: cinco usos, um registro

Katakana é um silabário como o hiragana: diz exatamente as mesmas sílabas. A escolha entre os dois é de **registro**, não de pronúncia. O katakana marca cinco coisas: a palavra estrangeira emprestada, o nome próprio japonês, a ênfase ou o tom, a onomatopeia e os símbolos científicos.

O leitor brasileiro tropeça em katakana na primeira página. A palavra "computador" é {konpyuuta}, "café" é {kafe} e "baseball" é {beisubooru}; hospital e hotel também são palavras emprestadas, e por isso também são katakana. A lição importante é outra: o kanji é o mesmo quando ele existe. O café tem uma palavra japonesa de verdade, {kohi}, escrita em kanji, e uma versão emprestada, {kafe}, escrita em katakana. O mesmo jogo acontece com o baseball: {yakyuu} em kanji, {beisubooru} em katakana. As duas dizem a mesma coisa; uma foi aprendida como loanword e por isso usa katakana.

## O nome próprio: a regra sem exceção

Aqui não há discussão. Todo nome japonês vai em katakana, pessoa, cidade, estado, seja lá o que for. {toukyou} é Tóquio, {oosaka} é Osaka, {yamada} é Yamada: os três em katakana, mesmo quando na vida real costumam aparecer em kanji. E nome estrangeiro entra pela mesma porta, porque a regra não olha a nacionalidade: um japonês e um estrangeiro têm o mesmo tratamento. **Se é nome, katakana**, para pessoa e para cidade, do mesmo jeito.

## Ênfase e onomatopeia: as duas bordas

**Ênfase.** Uma palavra no meio de uma frase em hiragana passa para katakana quando o escritor quer grifar. {ookii} é "grande" e vem do kanji {大}; grifar é reescrever esse kanji em katakana, e o mesmo "grande" vira {オオキイ}. O japonês é uma escrita sem maiúscula e sem itálico, então o katakana no meio do hiragana é o único mecanismo de ênfase escrita da língua.

**Onomatopeia.** A segunda borda é um sistema à parte, e é o mais característico do japonês. Onomatopeia quase sempre em katakana, e nenhuma traduzível literalmente. {ban} é o som de bater, {dokan} é o "toc-toc" de alguma coisa que cai, {gorogoro} é o borbulho da água a ferver. O {ban} não quer dizer "bater": quer dizer o barulho que a mão faz ao bater. Onomatopeia é som, não palavra.

## O truque de origem

Cada katakana é um kanji deformado. O katakana nasceu de partes de caracteres chineses que, há mais de mil anos, os monges japoneses usavam só para representar sons, sem nenhum significado; com o tempo essas partes ganharam vida própria. {力}, que significa "força", perde o miolo e vira {カ} (ka). {無}, que significa "nada", vira {ム} (mu). É por isso que o traçado do katakana é mais duro que o do hiragana: ele carrega a sombra do pincel do kanji de onde saiu.

## Onde a Bíblia aparece

O leitor da Bíblia vai ver katakana em toda parte no japonês bíblico. A tradução japonesa de 1987 usa katakana para os termos administrativos e para os nomes estrangeiros que aparecem no texto, enquanto "no princípio" e quase todo o resto são hiragana. Os livros de estudo bíblico em japonês são um festival de katakana: o nome de um comentário, um padrão de publicação, tudo em katakana.

E o detalhe mais curioso vem no fim: o grego do Novo Testamento, quando alguém escreve em japonês, sai em katakana. O Logos grego virou {rogosu}, uma palavra grega antiga que virou loanword exatamente como "computador".
`),
  vocab: [
    V('konpyuuta', 'コンピューター', 'computador: loanword, por isso katakana'),
    V('kafe', 'カフェ', 'café na versão emprestada, em katakana'),
    V('kohi', '珈琲', 'o café de casa, em kanji: a versão nativa'),
    V('yakyuu', '野球', 'beisebol em kanji: a versão nativa do beisebol'),
    V('toukyou', 'トウキョウ', 'Tóquio: nome de cidade, em katakana'),
    V('oosaka', 'オオサカ', 'Osaka: nome de cidade, em katakana'),
    V('yamada', 'ヤマダ', 'Yamada: sobrenome japonês, sempre em katakana'),
    V('ookii', '大きい', 'grande: o kanji 大 é o que se grifa em katakana'),
    V('ban', 'バン', 'ban: o som de bater; é som, não é o verbo'),
    V('dokan', 'ドカン', 'dokan: o "toc-toc" de algo que cai'),
    V('gorogoro', 'ゴロゴロ', 'gorogoro: o borbulho da água a ferver'),
    V('rogosu', 'ロゴス', 'Logos: o grego do Novo Testamento em katakana'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Katakana e hiragana dizem a mesma sílaba: a escolha é de registro, e o katakana marca cinco usos — loanword, nome, ênfase, onomatopeia e símbolo científico.',
      ),
    },
    {
      n: '2',
      text: T('Se é nome, katakana — japonês ou estrangeiro, pessoa ou cidade, sem exceção.'),
    },
    {
      n: '3',
      text: T('Katakana no meio do hiragana é o único mecanismo de ênfase escrita do japonês.'),
    },
    {
      n: '4',
      text: T(
        'Onomatopeia vai quase sempre em katakana e nenhuma se traduz literalmente: {ban} não é "bater", é o barulho de bater.',
      ),
    },
    {
      n: '5',
      text: T(
        'Cada katakana é um kanji deformado: {カ} é {力} sem a parte de dentro, {ム} é {無}. O traçado guarda a sombra do pincel.',
      ),
    },
  ],
  notes: [
    {
      label: T('Loanword não é "palavra em inglês"'),
      text: T(
        '{kafe} é uma palavra japonesa para café, e {kohi} também. A diferença não é de sentido, é de história: uma veio de fora e por isso usa katakana, a outra é de casa e usa kanji. Um dicionário japonês lista as duas.',
      ),
    },
    {
      label: T('O grego também é loanword'),
      text: T(
        'Quando o grego do Novo Testamento é posto em japonês, ele sai em katakana: {rogosu} é Logos. Uma palavra grega antiga virou emprestada do mesmo jeito que "computador". Quem entendeu as loanwords reconhece o Logos na mesma prateleira da televisão.',
      ),
    },
  ],
  examples: [
    { text: 'コンピューターを使う', gloss: T('konpyuuta o tsukau — uso o computador') },
    {
      text: 'ヤマダさんは東京にいる',
      gloss: T('yamada-san wa toukyou ni iru — o senhor Yamada está em Tóquio'),
    },
    {
      text: 'オオキイ',
      gloss: T('ookii — "grande", com o kanji reescrito em katakana para grifar'),
    },
    {
      text: 'ゴロゴロと湯が沸く',
      gloss: T('gorogoro to yu ga waku — a água ferve fazendo gorogoro'),
    },
    { text: 'ドカンと音がした', gloss: T('dokan to oto ga shita — veio um "toc-toc"') },
  ],
  tables: [
    {
      caption: T('Os cinco usos do katakana'),
      head: [T('Uso'), T('Exemplo'), T('O que é')],
      rows: [
        [
          T('palavra estrangeira emprestada'),
          T('{konpyuuta}'),
          T('loanword: uma palavra que entrou no japonês por fora'),
        ],
        [
          T('nome próprio japonês'),
          T('{yamada}'),
          T('pessoa, cidade, estado — se é nome, katakana'),
        ],
        [T('ênfase ou tom'), T('{オオキイ}'), T('katakana no meio do hiragana é o que grifa')],
        [T('onomatopeia'), T('{gorogoro}'), T('o som escrito; quase nunca se traduz')],
        [
          T('símbolo científico'),
          T('{メートル}'),
          T('unidade e letra de símbolo, sempre em katakana'),
        ],
      ],
    },
    {
      caption: T('Onomatopeia: som escrito, não palavra'),
      head: [T('Onomatopeia'), T('Som que descreve'), T('Glosa em português')],
      rows: [
        [T('{ban}'), T('uma mão batendo'), T('batida, pancada')],
        [T('{dokan}'), T('algo pesado caindo'), T('"toc-toc", baque')],
        [T('{gorogoro}'), T('água a ferver numa panela'), T('borbulho, ronco')],
      ],
    },
    {
      caption: T('Cada katakana é um kanji deformado'),
      head: [T('Kanji de origem'), T('Katakana'), T('Leitura')],
      rows: [
        [T('{力} "força"'), T('{カ}'), T('ka')],
        [T('{八} "oito"'), T('{ハ}'), T('ha')],
        [T('{之} "isto"'), T('{シ}'), T('shi')],
        [T('{無} "nada"'), T('{ム}'), T('mu')],
        [T('{女} "mulher"'), T('{メ}'), T('me')],
        [T('{毛} "pêlo"'), T('{モ}'), T('mo')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'Numa frase escrita em hiragana, uma palavra que aparece em katakana está quase sempre sendo usada para...',
    ),
    options: [
      T('grifar a palavra'),
      T('marcar o tempo passado'),
      T('negar o verbo'),
      T('indicar um número'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Escreva "computador" em katakana, completando o que falta: コン____'),
      answer: 'ピューター',
    },
    {
      kind: 'match',
      prompt: T('Ligue o katakana ao que ele faz'),
      pairs: [
        { a: T('{ban}'), b: T('o som de bater') },
        { a: T('{dokan}'), b: T('o "toc-toc" de um baque') },
        { a: T('{gorogoro}'), b: T('o borbulho da água a ferver') },
        { a: T('{ヤマダ}'), b: T('um sobrenome japonês') },
        { a: T('{オオキイ}'), b: T('ênfase: a palavra grifada') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('O katakana {カ} veio de qual caractere?'),
      options: [
        T('do kanji {力}, que significa "força"'),
        T('de um hiragana antigo'),
        T('de um ideograma inventado hoje em dia'),
        T('de um símbolo científico'),
      ],
      answer: 0,
    },
  ],
};
