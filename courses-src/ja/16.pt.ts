import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  section: T('Verbo'),
  title: T('O verbo flexiona para marcar o fim da sua própria cláusula'),
  subtitle: T(
    'Quando a frase tem mais de uma cláusula, o verbo japonês flexiona no meio dela e o resto volta à forma base — é isso que faz o texto parecer truncado',
  ),
  body: C(`
## O verbo vai para o fim da sua cláusula

O verbo flexiona **exatamente quando tem outra cláusula atrás dele**. Sendo a última da frase, fica plano.

O português põe o verbo no fim da frase. O japonês põe no fim da cláusula, e isso só fica visível quando a frase tem mais de uma. O caso mais curto é o de duas cláusulas nominais: "eu vou, ele fica" é {私は行きます} e {彼はいます}. O primeiro verbo flexiona, o segundo fica plano, e quem está lendo procura o verbo no fim da frase inteira e não acha nada lá.

E o primeiro verbo flexiona **precisamente** porque tem algo depois dele. A flexão é a marca de "aqui acabou a minha cláusula": {行きます} diz "vou" e já não é a última palavra da frase, então sobe para a série polida. Se a frase termasse ali, {私は行きます} leria como cláusula única, verbo plano, com nada depois.

## A exceção honrosa: mesmo sujeito, flexão facultativa

Há um caso em que a flexão pode ser omitida: quando a cláusula seguinte tem o mesmo sujeito, ou sujeito omitido. "Eu como maçã e como legumes" pode ser {りんごを食べ、野菜も食べる}, com {食べる} duas vezes e tudo plano. Compare com {彼も食べます}: o sujeito muda, e aí a flexão deixa de ser facultativa.

O que merece atenção é o tamanho do trabalho que essa exceção cobre, porque ele é bem maior do que a regra principal sugere. A flexão marca uma fronteira, e a fronteira só existe quando há duas partes que precisam ser separadas. No caso mais comum do japonês escrito, essas duas partes são o sujeito e o resto: em "eu vou, ele fica" a flexão do primeiro verbo é o que impede o leitor de tomar "vou, ele" por um único sintagma e "fica" pelo verbo da frase. Retire a flexão e a frase talvez continue legível por causa do contexto, mas o japonês perde a marca de que houve troca de sujeito, e o leitor tem de adivinhá-la.

Há ainda um caso intermediário, que é o que mais confunde quem está começando: quando a segunda oração traz um sujeito novo mas elíptico, quase sempre implícito, a flexão do primeiro verbo é o que separa os dois sujeitos. Em {りんごを食べ、野菜も食べる} o pronome aparece uma vez só e serve às duas orações, e é a forma plana de {食べる} que diz que o mesmo sujeito continua; se o sujeito mudasse, a segunda oração teria {彼も食べます} e a flexão do primeiro verbo seria obrigatória. O mesmo vale quando o que vem depois é um objeto: em {本を読む} o {を} deixa claro que a frase não acabou no verbo, e o verbo pode ficar plano porque não há outra oração atrás.

E a consequência prática é a que se sente na leitura. Quando o mesmo sujeito atravessa as duas orações, o japonês prefere a forma plana; quando os sujeitos mudam, a flexão é obrigatória. Quem não sabe qual dos dois casos está lendo erra na mesma proporção, e erra em silêncio, porque uma flexão a mais ou a menos não produz erro visível na frase.

Repare que a flexão aqui não é tempo nem modo: é demarcação de fronteira. Ela responde a uma pergunta de estrutura, "acabou a minha cláusula?", e não a uma pergunta de quando. É por isso que a mesma série polida que marca tempo em outro lugar aparece aqui marcando junção, e é por isso que ela é tão difícil de ler para quem começou pelo tempo verbal.

## Verbo no meio: a fronteira como pista de leitura

Uma cláusula pode ficar no meio da frase. "Eu, quando cheguei a Tóquio, fui ver o professor" é {東京に着いたとき} mais {先生を見に行った}: a cláusula condicional de {toki} é uma cláusula completa, com verbo próprio, e por isso o verbo principal flexiona. Ele é o último da sua cláusula e não o último da frase. O verbo flexionado é uma **pista de leitura**: assim que você vê {行きました}, aquela cláusula acabou e a seguinte começou. Em português nada marca esse ponto; em japonês a flexão é a marca.

Vale o outro lado também: a fronteira é visível por causa do verbo, e o verbo pode estar no meio quando a frase tem três ou quatro cláusulas. Quem procura o verbo no fim da frase lê devagar e erra; quem procura a fronteira lê no ritmo da fala e para no lugar certo.

## O substantivo relativo concorda com o verbo

Aqui está o detalhe fino. "O livro que li" é {私が読んだ本}: o substantivo relativo é {本}, o pronome {私} é o sujeito da cláusula relativa, e por isso o verbo é {読んだ}, flexionado, com {が}. O que fica dentro dos parênteses do relativo é uma cláusula, e a partícula {が} é a que flexiona o verbo.

Se o substantivo relativo é o sujeito, o verbo fica na forma base: "o homem que vem" é {来る人}, com {来る} plano e sem partícula. O homem vem, o relativo é o sujeito, não há outro sujeito depois, e a flexão não tem o que marcar. O mesmo par {読んだ} mostra o outro lado, em {本を読んだ人}: "a pessoa que leu o livro", onde o relativo é objeto e o verbo flexiona.

O gancho final é a abertura de João 1: {初めには言葉があり、言葉は神と共にあった}. A cláusula "e o Verbo estava" tem o verbo no meio da frase porque tem uma cláusula própria depois dela, "e Deus o fez". A fronteira aparece num versículo de quatro palavras, e quem reconhece a flexão lê o versículo como duas cláusulas em vez de uma lista.
`),
  vocab: [
    V('iku', '行く', 'ir; partir (iku)'),
    V('iru', 'いる', 'estar, ficar num lugar (iru)'),
    V('nomu', '読む', 'ler (nomu)'),
    V('taberu', '食べる', 'comer (taberu)'),
    V('hon', '本', 'livro (hon)'),
    V('ringo', 'りんご', 'maçã (ringo)'),
    V('yasai', '野菜', 'legume; verdura (yasai)'),
    V('sensei', '先生', 'professor; mestre (sensei)'),
    V('Tōkyō', '東京', 'Tóquio (Tōkyō)'),
    V('toki', '時', 'quando; tempo (toki)'),
    V('kami', '神', 'Deus (kami)'),
    V('kotoba', '言葉', 'palavra; Verbo (kotoba)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O verbo japonês vai para o fim da sua cláusula, não da frase inteira: ele flexiona no meio e tudo o que vem depois volta à forma base.',
      ),
    },
    {
      n: '2',
      text: T(
        'O verbo flexiona exatamente quando tem outra cláusula atrás dele; sendo a última, fica plano.',
      ),
    },
    {
      n: '3',
      text: T(
        'Se a cláusula seguinte tem o mesmo sujeito — ou sujeito omitido — a flexão pode ser omitida: {りんごを食べ、野菜も食べる} é legítimo.',
      ),
    },
    {
      n: '4',
      text: T(
        'A flexão é a marca da fronteira da cláusula: vê-la é ver que outra começou. Ela não marca tempo.',
      ),
    },
    {
      n: '5',
      text: T(
        'No substantivo relativo, o verbo flexiona se o relativo for objeto ({が}) e fica na forma base se o relativo for sujeito.',
      ),
    },
  ],
  notes: [
    {
      label: T('A flexão não é tempo'),
      text: T(
        'A lição 8 mostrou que o verbo japonês não flexiona para marcar o passado. Aqui ele flexiona, e a mesma série polida aparece — mas o que ela diz é "aqui acabou a minha cláusula", não "isto aconteceu". A mesma superfície, dois trabalhos.',
      ),
    },
    {
      label: T('O relativo é uma cláusula escondida'),
      text: T(
        'A cláusula relativa é uma cláusula como qualquer outra: tem sujeito, tem verbo e obedece à mesma regra de fronteira. O substantivo que ela modifica é o tópico, a partícula {が} é o sujeito do relativo, e é por isso que o verbo flexiona exatamente como flexionaria fora do relativo.',
      ),
    },
  ],
  examples: [
    {
      text: '私は行きます、彼はいます',
      gloss: T('watashi wa ikimasu, kare wa imasu — eu vou, ele fica'),
    },
    {
      text: '彼はここにいる',
      gloss: T('kare wa koko ni iru — ele está aqui, e o verbo fica plano'),
    },
    {
      text: 'りんごを食べ、野菜も食べる',
      gloss: T('ringo o taberu, yasai mo taberu — como maçã e como legumes, com o mesmo sujeito'),
    },
    {
      text: '東京に着いたとき先生を見に行った',
      gloss: T(
        'Tōkyō ni tsuita toki sensei o mi ni itta — quando cheguei em Tóquio, fui ver o professor',
      ),
    },
    {
      text: '初めには言葉があり、言葉は神と共にあった',
      gloss: T(
        'hazime ni wa kotoba ga ari, kotoba wa kami to tomo ni atta — no princípio havia o Verbo, e o Verbo estava com Deus (João 1:1)',
      ),
    },
  ],
  tables: [
    {
      caption: T('O que decide a flexão do verbo'),
      head: [T('Situação'), T('O verbo fica'), T('Exemplo')],
      rows: [
        [T('é a última cláusula da frase'), T('plano, forma base'), T('{彼はいます} — "ele fica"')],
        [
          T('tem outra cláusula depois, com outro sujeito'),
          T('flexiona'),
          T('{私は行きます} — "eu vou"'),
        ],
        [
          T('tem outra cláusula depois, com o mesmo sujeito'),
          T('pode ficar plano'),
          T('{りんごを食べ、野菜も食べる} — "como maçã, como legumes"'),
        ],
        [
          T('substantivo relativo é o sujeito'),
          T('plano, sem partícula'),
          T('{来る人} — "a pessoa que vem"'),
        ],
        [
          T('substantivo relativo é o objeto'),
          T('flexiona com {が}'),
          T('{私が読んだ本} — "o livro que eu li"'),
        ],
      ],
    },
    {
      caption: T('Onde o verbo flexiona dentro da frase'),
      head: [T('Frase'), T('Onde está o verbo'), T('Leitura')],
      rows: [
        [
          T('{私は行きます、彼はいます}'),
          T('no meio'),
          T('duas cláusulas: a flexão é a fronteira'),
        ],
        [T('{彼はここにいる}'), T('no fim'), T('uma cláusula só: o verbo fica plano')],
        [
          T('{東京に着いたとき先生を見に行った}'),
          T('no meio e no fim'),
          T('a cláusula do {toki} fecha antes do verbo principal'),
        ],
        [
          T('{初めには言葉があり、言葉は神と共にあった}'),
          T('no meio'),
          T('a flexão do primeiro verbo mostra que a frase continua'),
        ],
      ],
    },
    {
      caption: T('O relativo: o verbo segue o que o relativo faz'),
      head: [T('Frase'), T('Verbo'), T('Glosa')],
      rows: [
        [
          T('{私が読んだ本}'),
          T('{読んだ}, flexionado com {が}'),
          T('o livro que eu li: o relativo é objeto'),
        ],
        [
          T('{本を読んだ人}'),
          T('{読んだ}, flexionado com {を}'),
          T('a pessoa que leu o livro: o relativo é objeto'),
        ],
        [
          T('{来る人}'),
          T('{来る}, forma base, sem partícula'),
          T('a pessoa que vem: o relativo é sujeito'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {私は行きます、彼はいます}, por que o primeiro verbo flexiona?'),
    options: [
      T('porque tem outra cláusula depois dele'),
      T('porque é passado'),
      T('porque é cortesia, e a segunda forma também é'),
      T('porque é o verbo principal da frase'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Em "eu vou, ele fica", complete a forma flexionada de {iku}: eu vou ____, ele fica',
      ),
      answer: 'ikimasu',
    },
    {
      kind: 'match',
      prompt: T('Ligue a forma verbal ao que ela está fazendo'),
      pairs: [
        { a: T('{ikimasu}'), b: T('flexiona: há outra cláusula depois') },
        { a: T('{iru}'), b: T('fica plano: é a última cláusula') },
        { a: T('{taberu}'), b: T('pode ficar plano: a cláusula seguinte tem o mesmo sujeito') },
        { a: T('{kuru}'), b: T('fica plano: o substantivo relativo é o sujeito') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Em {初めには言葉があり、言葉は神と共にあった}, o que {あり} está marcando?'),
      options: [
        T('a fronteira da primeira cláusula: há outra depois dela'),
        T('o passado da história'),
        T('a diferença entre polido e simples'),
        T('o fim do versículo'),
      ],
      answer: 0,
    },
  ],
};
