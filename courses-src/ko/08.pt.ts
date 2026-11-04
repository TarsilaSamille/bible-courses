import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  section: T('Verbo'),
  title: T(
    'Tempo e aspecto: como o coreano diz "ontem" e "vai fazer" com partículas depois do verbo',
  ),
  subtitle: T(
    'O verbo não flexiona por tempo; quem diz se o ato é agora, foi ou vai acontecer é uma partícula que vem depois da forma verbal',
  ),
  body: C(`## O tempo mora depois do verbo

O verbo coreano flexiona por pessoa e por estilo, e o tempo é outra conta. Em coreano o verbo não flexiona por tempo: a forma verbal fica exatamente igual e o que diz se o ato é agora, já foi ou vai acontecer é uma partícula, ou um advérbio, que se cola depois dela. Isso é verdade no mandarim e no japonês também, mas no coreano fica visível de outro modo: a partícula temporal é uma peça separada, escrita como um quadrado próprio, e não uma terminação grudada no verbo. Você pode contá-la.

O exemplo mais curto mostra a consequência. A mesma forma ga, "ir", serve para o presente e para o futuro sem que nada mude dentro dela. Em "eu vou agora" o verbo vai nu e o contexto diz que é agora. Em "eu vou ir" o verbo recebe a partícula {geul}, o mesmo -l que faz o "vai fazer": o "ir" que era verbo vira substantivo de futuro, e o "ir" que fica ao lado é o infinitivo português. E para o "ir, mas ir" há {jiman}. Todas essas peças moram à direita do verbo, e a ordem é verbo, partícula, verbo, o contrário do "ir" que abre a frase em português.

Uma exceção que é preciso saber logo: advérbio de tempo marcado vai antes. É assim que o coreano diz "ontem": {eoje}, um advérbio, na frente do verbo. Já as partículas temporais que dizem "depois", "antes", " até" e "desde" são peças coladas ao verbo, e vão depois dele. São dois lugares diferentes, e não é a mesma coisa.

## O passado: duas séries e um registro

O passado coreano é moldeado em {asseoss} ou {eoseoss}, dois blocos, não um. A escolha entre eles é mecânica e não admite gosto: depois de uma vogal a ou o entra {asseoss}; depois das outras vogais entra {eoseoss}. O verbo "ir" dá gas-seos-seo e o verbo "comer" dá meok-eo-seos-seo. As duas séries são o mesmo tempo com o outro par de vogais, e quem errar o par entrega ao ouvinte um verbo que ele não conhece.

O registro funciona exatamente como na lição anterior. O mesmo molde recebe um final de registro: {asseoss} mais o final plano é a forma nua, {asseoss} mais o final polido é a forma polida. Nada de novo aqui: é a mesma diferença de estilo que o verbo já tinha, aplicada a um molde novo. Passado e polido, passado e plano: o passado coreano tem duas séries de vogal e dois registros, e só isso.

## O futuro e o "vai fazer"

O "vai fazer" do português vira partícula mais verbo em coreano: {geul} e {eul}, um único -l, com a forma dura depois de palavra terminada em consoante e a macia depois de palavra terminada em vogal, exatamente como nos pares de partículas. O verbo "ir" dá gal geo-ye-yo e o verbo "comer" dá meogeul geo-ye-yo. Quem vem do português reconhece a construção inteira, porque "ir" mais infinitivo é partícula mais verbo: a mesma pilha, com o mesmo verbo nos dois lados. Quem vem do japonês vê o oposto, porque no japonês o tempo mora na terminação do verbo e não em peça separada.

O futuro provável é a mesma peça com {jogeum}: -l jeok. Não é "vai fazer", é "vai ter feito", "com certeza vai acontecer". E a mesma partícula {jogeum} com {itda} diz "já ter feito", a experiência: "eu já fui, eu já provei". Com a experiência o tempo está resolvido: o passado perfeito e o passado contínuo, que o português distingue e o coreano quase não distingue, ele os empurra para fora e guarda só o que o ouvente precisa saber.

## Partículas do tempo, progressivo e o condicional

O progressivo é a construção mais visível do capítulo: verbo, {go}, {itda}. "Estou fazendo" é literalmente "fazer e estar". O verbo vem nu, {go} liga e {itda} traz o "estar". E há uma segunda maneira, a forma curta {go} em cadeia, que o leitor de João encontra em sequência: "ouviu e disse" pode virar dois {go}. Junto delas existe uma construção com jikjeon que significa "estar no ponto de fazer", com o verbo mais a nominalização em -gi: "estar a ponto de dizer".

O condicional também não é flexão. {myeon} depois do verbo diz "se", e o resultado vem na sequência: verbo mais {myeon}, verbo mais resultado. Para o tom de hipótese, "se fosse", a forma é {neunmyeon}, que junta a partícula do tema ao próprio verbo. E para o "se... então... mas" há os dois: {myeon} na primeira proposição, {jiman} na segunda. Repare no caminho das três peças: a condicional depois do primeiro verbo, a adversativa depois do segundo. Nada disso entra dentro da forma verbal.

O gancho bíblico está em João 19:30, "está consumado". A frase coreana é da i-ru-eos-da, e vale desmontá-la. O primeiro elemento é o advérbio, "tudo, por inteiro". O segundo é o verbo, "realizar, cumprir". E o tempo está no fim, num molde {asseoss} seguido do final plano: a forma plana, a mesma do verbo. Nada disso é flexão; é partícula e é registro. A tradução coreana de 1961 acrescenta nesse ponto a exclamativa, e o tom ritual da liturgia aparece justamente porque a escolha de registro não é decorativa: a polida soa como o rito do sacrifício, a plana soa como a narrativa.
`),
  vocab: [
    V('eoje', '어제', 'ontem (advérbio de tempo, antes do verbo)'),
    V('geul', 'ㄹ', 'vai; tempo futuro (após palavra terminada em vogal)'),
    V('eul', '을', 'vai; tempo futuro (após palavra com consoante final)'),
    V('asseoss', '았', 'passado: série da vogal a ou o (plana e polida)'),
    V('eoseoss', '었', 'passado: série das outras vogais (plana e polida)'),
    V('go', '고', 'e; e então (com {itda}: estar fazendo)'),
    V('itda', '있다', 'estar; ficar; existir'),
    V('jogeum', '적', 'provavelmente vai; com {itda}: já ter feito'),
    V('jiman', '지만', 'mas; porém'),
    V('myeon', '면', 'se; caso que'),
    V('neunmyeon', '는면', 'se fosse; no caso de que'),
    V('hu', '후', 'depois de'),
    V('jeon', '전', 'antes de'),
    V('kkaji', '까지', 'até'),
    V('buteo', '부터', 'desde; a partir de'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O tempo não flexiona o verbo: a forma verbal fica igual e o tempo é uma partícula depois dela. A partícula é uma peça contada, não uma terminação.',
      ),
    },
    {
      n: '2',
      text: T(
        'O passado tem duas séries, {asseoss} depois de vogal a ou o e {eoseoss} depois das outras vogais. São o mesmo tempo com o outro par de vogais.',
      ),
    },
    {
      n: '3',
      text: T(
        'O registro continua funcionando como na lição anterior: o mesmo molde recebe o final plano ou o polido. O passado não acrescenta nenhum registro novo.',
      ),
    },
    {
      n: '4',
      text: T(
        'O futuro é -l, com {geul} depois de vogal e {eul} depois de consoante; o provável é -l {jogeum}. O "ir mais infinitivo" do português é partícula mais verbo, o contrário do japonês.',
      ),
    },
    {
      n: '5',
      text: T(
        'Partículas de "depois", "antes", "até" e "desde" e o condicional {myeon} e {jiman} vêm todos depois do verbo. Advérbio marcado, como {eoje}, vem antes: são dois lugares.',
      ),
    },
  ],
  notes: [
    {
      label: T('O passado contínuo e o perfeito saem de cena'),
      text: T(
        'O coreano quase não distingue passado contínuo de passado perfeito: nos dois casos a forma é o passado mais da partícula, e é o contexto que desambigua. O que ele guarda é a experiência, com {jogeum} mais {itda}: "já ter feito". Quem traduz do português precisa decidir à mão o que o original distinguia.',
      ),
    },
    {
      label: T('João 19:30 e a escolha de registro'),
      text: T(
        'Em "está consumado" o tempo está num molde de passado seguido do final plano. A tradução de 1961 usa nesse ponto a exclamativa, e o tom de ritual litúrgico vem da escolha de registro, não da léxico: a polida soa como o rito do sacrifício e a plana como a narrativa.',
      ),
    },
  ],
  examples: [
    {
      text: '어제 갔어요',
      gloss: T('eoje gas-seos-seo-yo — ontem fui (advérbio antes, passado polido depois)'),
    },
    { text: '갈 거예요', gloss: T('gal geo-ye-yo — eu vou ir ("vou" mais infinitivo)') },
    {
      text: '밥을 먹고 있어요',
      gloss: T('ba-beul meok-go is-seo-yo — estou comendo (verbo, go, itda)'),
    },
    { text: '비가 오면 안 가요', gloss: T('bi-ga o-myeon an ga-yo — se chover, eu não vou') },
    {
      text: '다 이루었다',
      gloss: T('da i-ru-eos-da — está consumado (advérbio, verbo, molde de passado, final plano)'),
    },
  ],
  tables: [
    {
      caption: T('Onde cada tempo mora: nada disso flexiona o verbo'),
      head: [T('Momento'), T('O que se diz'), T('Onde fica'), T('Exemplo de estrutura')],
      rows: [
        [T('presente'), T('o verbo nu, sem partícula'), T('—'), T('ga-yo')],
        [T('passado'), T('{asseoss} ou {eoseoss}'), T('depois do verbo'), T('gas-seos-seo-yo')],
        [T('futuro'), T('{geul} ou {eul}'), T('depois do verbo'), T('gal geo-ye-yo')],
        [
          T('futuro provável'),
          T('{jogeum} com {geul} ou {eul}'),
          T('depois do verbo'),
          T('gal jeok'),
        ],
        [T('progressivo'), T('{go} mais {itda}'), T('depois do verbo'), T('meok-go is-seo-yo')],
        [T('condicional'), T('{myeon}, ou {neunmyeon}'), T('depois do verbo'), T('o-myeon')],
        [T('adversativa'), T('{jiman}'), T('depois do verbo'), T('ga-ji-man')],
        [
          T('experiência'),
          T('{jogeum} mais {itda}'),
          T('depois do verbo'),
          T('gan jeok-i is-seo-yo'),
        ],
      ],
    },
    {
      caption: T('As duas séries do passado, escolhidas pela vogal do verbo'),
      head: [T('Vogal anterior'), T('Molde'), T('Registro plano'), T('Registro polido')],
      rows: [
        [T('a, o'), T('{asseoss}'), T('gass-da'), T('gas-seos-seo-yo')],
        [T('as outras vogais'), T('{eoseoss}'), T('meogeos-da'), T('meok-eo-seos-seo-yo')],
      ],
    },
    {
      caption: T('As partículas do tempo: todas depois do verbo'),
      head: [T('Partícula'), T('Glosa'), T('Se liga a'), T('O que diz')],
      rows: [
        [T('{hu}'), T('depois'), T('{asseoss} ou {eoseoss}'), T('depois de ter feito')],
        [T('{jeon}'), T('antes'), T('a nominalização em -gi'), T('antes de fazer')],
        [T('{kkaji}'), T('até'), T('qualquer tempo'), T('até certo momento')],
        [T('{buteo}'), T('desde'), T('qualquer tempo'), T('desde certo ponto')],
        [T('{myeon}'), T('se'), T('a forma do verbo'), T('no caso de que')],
        [T('{neunmyeon}'), T('se fosse'), T('a forma do verbo'), T('com hipótese')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em "ontem fui", onde está a informação de tempo?'),
    options: [
      T('numa partícula depois da forma verbal'),
      T('na terminação do verbo'),
      T('na vogal do último bloco'),
      T('na partícula de sujeito'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o passado polido de "ir", depois de vogal a: 갔____'),
      answer: '어요',
    },
    {
      kind: 'match',
      prompt: T('Ligue a partícula à função'),
      pairs: [
        { a: T('{asseoss}'), b: T('passado, série da vogal a ou o') },
        { a: T('{geul}'), b: T('vai, depois de palavra terminada em vogal') },
        { a: T('{go}'), b: T('e, e então; com {itda}, estar fazendo') },
        { a: T('{jiman}'), b: T('mas, porém') },
        { a: T('{kkaji}'), b: T('até certo momento') },
        { a: T('{buteo}'), b: T('desde certo ponto') },
      ],
      answer: [0, 1, 2, 3, 4, 5],
    },
    {
      kind: 'choose',
      prompt: T('Qual construção é "estar fazendo" em coreano?'),
      options: [
        T('verbo, {go} e {itda}'),
        T('verbo, {geul} e {jogeum}'),
        T('{myeon} e verbo'),
        T('verbo, {asseoss} e {itda}'),
      ],
      answer: 0,
    },
  ],
};
