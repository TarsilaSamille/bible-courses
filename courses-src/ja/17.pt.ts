import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  section: T('Verbo'),
  title: T('A razão de condensação: como o verbo desaparece dentro da frase'),
  subtitle: T(
    'Numa clause subordinada o verbo japonês costuma sumir, e o que segura a frase é o contexto e a partícula',
  ),
  body: C(`
## A língua que economiza verbo

O japonês é uma língua muito econômica, e a economia dele aparece justamente no verbo. Numa cláusula subordinada o verbo muitas vezes **desaparece**, e o que segura a frase é o contexto mais a partícula. Quem vem do mandarim ou do coreano sente isso como falta: as duas línguas irmãs quase nunca abrem mão do verbo, e o japonês abre o tempo todo. São três línguas do mesmo grupo com três economias de verbo, e só uma delas apaga o verbo.

O caso mais visível é a cláusula de tempo. "Quando eu chego em casa, como" não é "quando" mais um verbo flexionado e depois outro verbo flexionado: é chegar em casa, **comer**. O primeiro verbo entra na forma que não flexiona, e às vezes o segundo também some e sobra apenas {食べる}. Quem segura tudo isso é {時}, "quando", que vem depois da forma verbal como toda partícula deste idioma.

## {時}: quando o verbo da cláusula temporal desaparece

{時} é partícula temporal, e a flexão do verbo é a prova disso. Em {家に着いた時、食べる} o primeiro verbo está na forma plana, {着いた}, e o {時} diz "quando". O mesmo {時} ligado a um verbo flexionado muda de leitura: {着いていた時} é "no momento em que eu estava chegando", porque o progressivo entrou e a frase virou descrição, e não condição.

O caminho para ler qualquer {時} é olhar o verbo que vem antes: forma plana, é cláusula de tempo, e vale "quando"; verbo flexionado ou partícula de posse no lugar dele, e o {時} é só o substantivo "tempo", como em {時の流れ}, "o curso do tempo". Uma partícula pequena faz as duas coisas porque o japonês não tem duas palavras para isso: tem uma, e quem chega de fora precisa aprender a ler a flexão para saber qual das duas está lendo.

## A cláusula relativa que vira uma partícula

A cláusula relativa inteira pode reduzir-se a uma partícula. "O livro que está sobre a mesa" é {机の上にある本}: o substantivo {本}, o lugar dito por {上}, "em cima", e o verbo não está. Ele sobreviveu como {に}, a partícula que ocupa o lugar do verbo e diz que o livro está ali. Uma relativa que em português leva quatro palavras chega ao japonês como uma partícula e nada mais.

É essa a construção que mais separa o japonês das duas línguas irmãs. Em mandarim e em coreano a relativa guarda o verbo; aqui ela pode ser só {上} ou só {に}. E é por isso que {ある}, o "estar" japonês sem sujeito vivo, aparece tantas vezes: ele não some porque é fraco, ele some porque o contexto segura a frase.

A Bíblia mostra isso logo na primeira página de João. Em 1:3, {万物は言によって成った。成ったもので、言によらず成ったものは何一つなかった。} Na segunda cláusula o verbo de "foi feito" não aparece nenhuma vez, porque a primeira já disse. Onde o verbo sumiu, o grego também tinha um verbo muito simples e muito repetido: a economia japonesa não inventa nada, ela economiza o que o grego já estava repetindo.

## O verbo que muda de roupa e o verbo que sobra

O caminho oposto ao do sumiço: em vez de desaparecer, o verbo muda de roupa e vira substantivo. {取る} é "pegar, tomar, comprar"; na forma de substantivo, {取り}, ele não flexiona mais como verbo, e recebe partícula de objeto e partícula de genitivo como qualquer nome. É por isso que {駅で切符を取る}, "compro bilhete na estação", e {取るものを集める}, "junta o que se pega", funcionam: no segundo caso o {の} liga o substantivo {取り} ao substantivo {もの}, e depois de {集める} não vem verbo nenhum. Quem flexiona muda de lugar: o verbo flexiona com {ます} e {た}, e o substantivo flexiona com {を}, {の} e {に}, e é assim que o dicionário japonês encontra {取り}, como nome.

Do outro lado da mesma economia está o verbo que **sobra**. Sujeito e objeto podem desaparecer os dois ao mesmo tempo, desde que o contexto resolva: {食べる} sozinho, sem "eu" e sem "o quê", é frase completa, porque é a resposta natural a "o que você vai fazer agora?". É por isso que o verbo segura a frase: ele é o último pedaço que fica quando todo o resto foi omitido, e é ele que dá a resposta. Sem verbo não há resposta, mesmo com sujeito e objeto.

E a máquina de encurtar é a mesma: a partícula de origem dispensa o verbo de ir e vir, e o meio de locomoção dispensa o resto. {東京から} quer dizer "de Tóquio", e {歩いて} quer dizer "a pé", e as duas respondem a "como você vai?" sem verbo nenhum.

O exemplo que amarra a lição é João 3:30, {あの方は栄え、わたしは衰えねばならない。}, "ele precisa crescer, e eu preciso diminuir". Repare que aqui os dois verbos estão, e nenhum podia faltar: crescer e diminuir são o ponto inteiro da frase, e cada cláusula precisa do seu. A regra aqui não é "verbo opcional"; é "verbo só quando ele carrega algo". Por isso o Evangelho de João, que em grego tem um verbo por cláusula, vira em japonês uma sequência em que o verbo aparece onde importa e desaparece onde o grego só repetia.
`),
  vocab: [
    V('toki', '時', 'quando; tempo; partícula temporal (toki)'),
    V('tsuku', '着く', 'chegar (tsuku)'),
    V('taberu', '食べる', 'comer (taberu)'),
    V('aru', 'ある', 'estar; existir: o "estar" que fica quando o verbo some (aru)'),
    V('tsukue', '机', 'mesa (tsukue)'),
    V('ue', '上', 'em cima; superfície (ue)'),
    V('no', 'の', 'de; liga dois substantivos (no)'),
    V('toru', '取る', 'pegar; tomar; comprar (toru)'),
    V('atsumeru', '集める', 'juntar; reunir (atsumeru)'),
    V('hataraku', '働く', 'trabalhar (hataraku)'),
    V('aruite', '歩いて', 'a pé; caminhando (aruite)'),
    V('kara', 'から', 'de (origem); desde; dispensa o verbo de ir e vir (kara)'),
    V('kuru', '来る', 'vir (kuru)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Numa clause subordinada o verbo pode desaparecer: quem segura a frase é o contexto e a partícula.',
      ),
    },
    {
      n: '2',
      text: T(
        '{時} com verbo na forma plana é clause temporal, e vale "quando"; com verbo flexionado ou com {の} é só o substantivo "tempo".',
      ),
    },
    {
      n: '3',
      text: T(
        'A clause relativa pode reduzir-se a uma partícula: em {机の上にある本}, o {に} ocupa o lugar do verbo.',
      ),
    },
    {
      n: '4',
      text: T(
        'O verbo nominalizado ({取る} virando {取り}) é substantivo: recebe {を}, {の} e {に} em vez de flexionar como verbo.',
      ),
    },
    {
      n: '5',
      text: T(
        'Sujeito e objeto somem juntos quando o contexto resolve, e o verbo que sobra é o que dá a resposta — como diz a lição 8.',
      ),
    },
  ],
  notes: [
    {
      label: T('Onde o verbo sumiu, o grego era simples'),
      text: T(
        'Vale comparar João 1:3 com o grego original. A segunda clause repete o verbo de "foi feito" duas vezes, e o japonês escreve a primeira e omite a segunda; o mesmo acontece em 1:5, onde a clause da luz e a clause das trevas ficam com verbos diferentes porque dizem coisas diferentes. A regra de leitura é simples: verbo ausente em japonês é verbo repetido em grego.',
      ),
    },
    {
      label: T('A partícula guarda o que o verbo perdeu'),
      text: T(
        'Quando um verbo falta num versículo japonês, não procure um verbo escondido: procure a partícula. {から} segura a origem, {上} segura o lugar, {に} segura o estado. É também por isso que {から} dispensa o verbo de ir e vir: a partícula já disse que houve deslocamento, e repetir isso seria gastar verbo à toa.',
      ),
    },
  ],
  examples: [
    {
      text: '家に着いた時、食べる',
      gloss: T('ie ni tsuitaku natta toki, taberu — quando chego em casa, como'),
    },
    { text: '机の上にある本', gloss: T('tsukue no ue ni aru hon — o livro que está sobre a mesa') },
    { text: '取るものを集める', gloss: T('toru mono o atsumeru — junta o que se pega') },
    { text: '食べる', gloss: T('taberu — como, sem sujeito e sem objeto') },
    {
      text: 'あの方は栄え、わたしは衰えねばならない',
      gloss: T(
        'ano kata wa sakaeru, watashi wa otoroeneba naranai — ele deve crescer e eu devo diminuir (João 3:30)',
      ),
    },
  ],
  tables: [
    {
      caption: T('O verbo que some, e o que fica no lugar dele'),
      head: [
        T('Onde o verbo some'),
        T('O que o japonês escreve'),
        T('O verbo que sumiu'),
        T('A frase completa'),
      ],
      rows: [
        [
          T('clause de tempo'),
          T('{家に着いた時、食べる}'),
          T('{着く}, "chegar"'),
          T('{家に着いてから、食べる}'),
        ],
        [
          T('clause relativa'),
          T('{机の上にある本}'),
          T('{ある}, "estar"'),
          T('{机の上に本がある}'),
        ],
        [
          T('verbo nominalizado'),
          T('{取るものを集める}'),
          T('a flexão do verbo'),
          T('{取るものを集める}'),
        ],
        [T('sujeito'), T('{食べる}'), T('o pronome do sujeito'), T('{わたしが食べる}')],
        [
          T('meio de locomoção'),
          T('{歩いて}'),
          T('os verbos de ir e de caminhar'),
          T('{歩いて行きます}'),
        ],
        [T('origem'), T('{東京から}'), T('{来る}, "vir"'), T('{東京から来ます}')],
      ],
    },
    {
      caption: T('Três línguas do mesmo grupo, três economias de verbo'),
      head: [T('Língua'), T('O verbo numa clause'), T('O que sustenta a frase')],
      rows: [
        [T('mandarim'), T('quase sempre presente'), T('a partícula e a ordem das palavras')],
        [T('coreano'), T('quase sempre presente'), T('a flexão do verbo e a partícula')],
        [T('japonês'), T('às vezes ausente'), T('o contexto e a partícula')],
      ],
    },
    {
      caption: T('O verbo que muda de roupa'),
      head: [T('O verbo'), T('O substantivo'), T('A frase que ele monta')],
      rows: [
        [
          T('{取る}, "pegar"'),
          T('{取り}, o ato de pegar'),
          T('{駅で切符を取る} — compro bilhete na estação'),
        ],
        [T('{働く}, "trabalhar"'), T('{働き}, o trabalho'), T('{働く人} — quem trabalha')],
        [T('{歩く}, "caminhar"'), T('{道}, o caminho'), T('{歩く道} — o caminho por onde se anda')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {家に着いた時、食べる}, o que {時} está fazendo?'),
    options: [
      T(
        'abrindo uma clause de tempo: é por isso que o primeiro verbo aparece na forma que não flexiona',
      ),
      T('substituindo o verbo de "comer", que pode ficar de fora'),
      T('marcando o sujeito de {食べる}'),
      T('transformando a frase em pergunta retórica'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete "o livro que está sobre a mesa" com a partícula que sobrou da relativa: 机の上____ある本',
      ),
      answer: 'に',
    },
    {
      kind: 'match',
      prompt: T('Ligue a partícula ao que ela sustenta'),
      pairs: [
        { a: T('{時}'), b: T('abre a clause de tempo e dispensa a flexão do verbo') },
        { a: T('{上}'), b: T('diz "em cima", e com ela a relativa pode virar partícula') },
        { a: T('{の}'), b: T('liga o substantivo ao que vem depois dele') },
        { a: T('{から}'), b: T('dispensa o verbo de ir e vir') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Em qual destas frases o verbo é mesmo obrigatório?'),
      options: [
        T('{あの方は栄え、わたしは衰えねばならない} — crescer e diminuir são o ponto da frase'),
        T('{机の上にある本}'),
        T('{食べる}'),
        T('{東京から}'),
      ],
      answer: 0,
    },
  ],
};
