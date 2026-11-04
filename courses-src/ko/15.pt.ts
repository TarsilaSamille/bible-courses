import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  section: T('Partículas'),
  title: T('A partícula final: a última palavra antes do ponto, e por que a frase precisa dela'),
  subtitle: T(
    'Ela não declara função nenhuma — declara o tom, e é o que separa uma frase falada de um pedaço de texto',
  ),
  body: C(`## A partícula que não marca função

As partículas que declaram função dizem quem executa o verbo, o que recebe a ação, de onde, para quem. A partícula final é a única que não declara nada disso. Ela é a última coisa antes do ponto, e não diz quem faz o quê: diz com que tom a frase é dita. Por isso o iniciante a apaga sem notar, e depois estranha o resultado.

{yo} é a mais comum de todas, e é o final da afirmação neutra: o que se diz sem cerimônia e sem audiência específica. Em {chaek}-eul {ilgeoyo} o último {yo} não diz nada sobre livro nem sobre leitura; ele diz que aquilo é uma frase e não um pedaço. Apagado o {yo}, sobra o verbo sem terminação, e o que fica é um verbete de dicionário, a mesma configuração que o leitor encontrou com um verbo da lista longa fora de frase. A partícula final é o que transforma verbete em fala.

A junção tem uma regra só, e ela é de contração. O final {da} é o exemplo mais limpo, porque tem exatamente a mesma forma do verbo ser: o coreano escreve igual a coisa mais neutra e a coisa mais comum, e quem está aprendendo já viu essa letra em outro lugar sem saber. Nos finais polidos o {da} vira {nida}, e o final {yo} nasce do mesmo jeito. Depois de uma vogal o {da} desaparece inteiro e sobra a vogal; é por isso que o verbo do exemplo muda de forma ao trocar de tom, e não apenas ganha uma sílaba no fim. Quem escreve a partícula colada sem contar a última vogal produz um final que o ouvinte reconhece como outro tom.

## A mesma frase em seis tons

A escala de polidez entra na partícula, e é nela que a escala fecha. A mesma frase, "eu leio um livro", sem pronome, porque a terminação já é o pronome, aparece em seis tons, e a diferença entre eles não está no léxico: está inteira no último pedaço.

O que o leitor iniciante precisa é ouvir essa escala da boca de um coreano, porque os seis tons são indistinguíveis para quem nunca os ouviu: eles só se distinguem pela distância entre duas pessoas. E é a distância que o texto registra, não o assunto. Um livro inteiro pode sair em um só nível, e essa escolha é uma das primeiras coisas que um leitor atento percebe, muito antes de notar vocabulário.

Os dois extremos explicam o meio. No nível mais baixo a partícula é o {da} de sempre, e a frase é a mais curta que a língua permite. No mais alto o verbo recebe a ordem formal de execução e a frase vira {ilgeusoseo}: é o registro da exortação, da oração e do texto que se apresenta como palavra definitiva. Entre eles há os três tons do uso corrente, e o terceiro deles é o que um tradutor elige quando escreve para desconhecidos.

Uma armadilha de leitura: os níveis polido comum e deferencial se pronunciam quase igual, e a diferença entre eles é sobretudo de escrita. Vale o iniciante saber disso para não concluir que encontrou duas formas de dizer a mesma coisa. São duas formas, e a segunda pertence a um registro que já saiu do uso cotidiano.

## A pergunta é o outro lado da frase

{yo} depois de uma pergunta é estranho, e é um dos primeiros sinais de que a partícula final é tom e não função. A pergunta coreana fecha no final polido derivado, ou em nada; nunca em {yo}. É por isso que {ilgeoyo} funciona como resposta e não como pergunta: a forma que responde bem é exatamente a que não pergunta. E é por isso que o nível polido aparece como obrigatório nas perguntas e opcional nas respostas, o mesmo final que é escolha nas respostas vira exigência nas perguntas.

A partícula de espera é {nae}, e um único exemplo chega, porque o comportamento dela é único. Ela diz "tomara que", e funciona do mesmo jeito para o sim e para o não: quem a usa está dizendo o conteúdo da resposta, e sim expressando surpresa com ele. Um falante português entende a partícula imediatamente, porque é exatamente a nossa "tomara que", com a mesma indiferença pelo conteúdo. O coreano também não escolhe um lado.

A partícula de incerteza é {ra}, e é a que o leitor vai ver mais vezes em texto falado. Depois de uma raiz terminada em vogal ela significa "acho que" e significa também "dizem que", as duas coisas ao mesmo tempo. Depois de uma raiz com consoante final a incerteza tem outra forma, escrita com {dago}, e a ambiguidade é a mesma: quem diz {dago} pode estar supondo que vai ou repetindo o que ouviu de outro, e a frase não diz qual dos dois. É a partícula mais honesta do coreano: ela assume que quem fala às vezes sabe e às vezes só transmitiu.

E a última do sistema, uma partícula de sobrenome e apelido: {ssi} depois de um nome, "fulano", e ainda sem registro neutro: o Rei-filho, o coreano-sétimo. Ela vai atrás de um nome próprio e nunca atrás de um substantivo comum, e é a partícula que o leitor reconhece na primeira vez em que encontra um nome coreano num texto em português.

## A troca que a Bíblia faz, e o que ela permite ver

A tradução coreana de 1961 usa o final de narração na voz do narrador e o final polido na boca de Jesus, e não é uma inconsistência: é uma convenção. Nos cinco primeiros versículos de João 1 todas as frases do narrador terminam no final de narração, e nenhuma delas usa o final de diálogo; as primeiras palavras de Jesus no mesmo capítulo, em 1:38, fecham no final derivado do polido, com o honorífico no verbo. O leitor que percebe a troca sabe, dentro de um versículo, se está lendo narração ou discurso direto, sem nenhuma palavra que diga "Jesus disse". É um efeito literário, verificável linha a linha, e ele nasce inteiramente da partícula final.

E as duas metades fecham aqui: as partículas de função dizem quem faz o quê, a terminação do verbo dizia o registro, e a partícula final diz ao mesmo tempo o tom e, num texto bíblico, quem está falando.
`),
  vocab: [
    V('yo', '요', 'a partícula final mais comum: afirmação neutra, a fala de todos os dias'),
    V('da', '다', 'a partícula final plana; tem exatamente a mesma forma do verbo ser'),
    V('nida', '니다', 'o final polido escrito, o que se lê na terminação do verbo'),
    V('seumnida', '습니다', 'o final polido regular, o mais comum do texto escrito'),
    V('so', '소', 'o final semiformal, o mais alto depois do polido comum'),
    V('obnida', '옵니다', 'o final deferencial semiformal, hoje quase só literário'),
    V('soseo', '소서', 'o final mais alto de todos, o da exortação e da oração'),
    V('nae', '네', 'partícula de espera: tomara que, para o sim e para o não'),
    V('ra', '라', 'partícula de incerteza e de relato: acho que; dizem que'),
    V('dago', '한다고', 'a incerteza depois de raiz com consoante final: acho que vai'),
    V('ssi', '씨', 'partícula de sobrenome e de apelido depois do nome: fulano'),
    V('chaek', '책', 'livro: o substantivo das seis formas do exemplo'),
    V('ilgeunda', '읽는다', 'eu leio um livro: a forma plana, com o final {da}'),
    V('ilgeoyo', '읽어요', 'eu leio um livro: a forma polida falada, com o final {yo}'),
    V('ilgeumnida', '읽습니다', 'eu leio um livro: a forma polida escrita, com o final {nida}'),
    V('ilgeoso', '읽소', 'eu leio um livro: a forma semiformal, com o final {so}'),
    V(
      'ilgeumseumnida',
      '읽읍니다',
      'eu leio um livro: a forma deferencial, escrita diferente da polida',
    ),
    V('ilgeusoseo', '읽으소서', 'eu leio um livro: a forma mais alta de todas'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A partícula final é a última coisa antes do ponto e não declara função nenhuma. As de sujeito, objeto e origem dizem quem faz o quê; {yo} e {da} dizem o tom.',
      ),
    },
    {
      n: '2',
      text: T(
        'Sem partícula final a frase vira lista. O mesmo verbo sem terminação é um verbete de dicionário, não uma frase.',
      ),
    },
    {
      n: '3',
      text: T(
        'A partícula final se contrai com a última vogal da frase: depois de uma vogal o {da} desaparece e sobra a vogal. Por isso o verbo muda de forma ao trocar de tom, e não só ganha uma sílaba.',
      ),
    },
    {
      n: '4',
      text: T(
        'Depois de uma pergunta não se usa {yo}. A pergunta fecha no final derivado do polido ou em nada, e é por isso que {ilgeoyo} responde e não pergunta.',
      ),
    },
    {
      n: '5',
      text: T(
        'A escolha entre os seis tons é registro, não léxico. Um texto inteiro costuma escolher um só, e mantê-lo é parte da tradução.',
      ),
    },
  ],
  notes: [
    {
      label: T('A mesma letra do verbo mais neutro'),
      text: T(
        'O final plano {da} e o verbo ser são a mesma palavra escrita. Quem aprende {da} como partícula está aprendendo, sem perceber, o verbo que aparece em metade das frases do curso — a partícula mais dispensável do sistema é a que ensina o verbo mais indispensável.',
      ),
    },
    {
      label: T('A incerteza que não escolhe entre dois significados'),
      text: T(
        'Depois de uma raiz em vogal, {ra} significa "acho que" e "dizem que" ao mesmo tempo, e a frase não resolve a ambiguidade. Depois de uma raiz com consoante final o mesmo ocorre com {dago}. Nenhum outro idioma do projeto tem uma partícula que confunda a opinião do falante com o relato que ele ouviu.',
      ),
    },
  ],
  examples: [
    {
      text: '책을 읽어요',
      gloss: T(
        'chaegeul ilgeoyo — eu leio um livro: o {yo} final fecha a frase e não declara nada sobre o livro',
      ),
    },
    {
      text: '책을 읽습니다',
      gloss: T(
        'chaegeul ilgeumnida — eu leio um livro: a mesma frase no polido escrito, que é o registro de um texto formal',
      ),
    },
    {
      text: '날씨가 좋아라',
      gloss: T('nalssiga joara — o tempo parece bom; e também: dizem que o tempo está bom'),
    },
    {
      text: '비가 오면 좋겠네',
      gloss: T(
        'biga o-myeon jokkene — tomara que chova: a partícula de espera funciona igual para o sim e para o não',
      ),
    },
    {
      text: '무엇을 찾으십니까',
      gloss: T(
        'mujeoseul chajusimnigga — o que você procura: uma pergunta, com o final derivado do polido e o honorífico no verbo',
      ),
    },
  ],
  tables: [
    {
      caption: T('A mesma frase em seis tons: a diferença está inteira no último pedaço'),
      head: [
        T('Nível'),
        T('Partícula final'),
        T('A mesma frase'),
        T('Para quem serve'),
        T('Registro'),
      ],
      rows: [
        [
          T('1'),
          T('{da}'),
          T('{chaek}-eul {ilgeunda}'),
          T('amigo com quem se fala de igual para igual'),
          T('plano falado; a forma mais curta'),
        ],
        [
          T('2'),
          T('{yo}'),
          T('{chaek}-eul {ilgeoyo}'),
          T('o mesmo amigo, quase todos os dias'),
          T('neutro; o final mais frequente na fala'),
        ],
        [
          T('3'),
          T('{nida}'),
          T('{chaek}-eul {ilgeumnida}'),
          T('qualquer pessoa, em especial quem está em cima'),
          T('polido escrito; padrão do texto formal'),
        ],
        [
          T('4'),
          T('{so}'),
          T('{chaek}-eul {ilgeoso}'),
          T('alguém mais velho ou hierarquicamente acima, na conversa'),
          T('semiformal; raro fora da conversa de antigamente'),
        ],
        [
          T('5'),
          T('{obnida}'),
          T('{chaek}-eul {ilgeumseumnida}'),
          T('quem está em cima, com deferência antiga'),
          T('semiformal; soa velho, quase literário'),
        ],
        [
          T('6'),
          T('{soseo}'),
          T('{chaek}-eul {ilgeusoseo}'),
          T('o mais alto: orar, exortar, proclamar'),
          T('máximo; quase só na escritura'),
        ],
      ],
    },
    {
      caption: T('As partículas que colorem o tom em vez de declarar função'),
      head: [T('Partícula'), T('O que marca'), T('O que o leitor entende'), T('Onde ela aparece')],
      rows: [
        [
          T('{yo}'),
          T('afirmação neutra'),
          T('frase falada, sem cerimônia'),
          T('conversa, fala, legenda de vídeo'),
        ],
        [
          T('{da}'),
          T('afirmação plana'),
          T('frase escrita sem escolha de tom'),
          T('narrativa, texto corrente'),
        ],
        [
          T('{seumnida}'),
          T('polidez escrita'),
          T('a distância entre as pessoas é medida pelo texto'),
          T('ofício, notícia, pergunta'),
        ],
        [
          T('{nae}'),
          T('espera'),
          T('tomara que, para o sim e para o não'),
          T('conversa; besonders com o que se deseja ouvir'),
        ],
        [
          T('{ra}'),
          T('incerteza'),
          T('acho que — ou dizem que'),
          T('relato, comentário, fala de todos os dias'),
        ],
        [
          T('{ssi}'),
          T('sobrenome'),
          T('fulano, o nome próprio virado em apelido'),
          T('menções a pessoas dentro do texto'),
        ],
      ],
    },
    {
      caption: T('O que o leitor sabe quando percebe a troca de partícula final'),
      head: [T('Voz'), T('Final (romanização)'), T('Sinal junto'), T('O que o leitor descobre')],
      rows: [
        [
          T('narrador, João 1:1 a 1:5'),
          T('gyesinira, anira, hanira'),
          T('nenhum honorífico no verbo'),
          T('é narração, e o texto não precisa dizer que alguém falou'),
        ],
        [
          T('fala de Jesus, João 1:38'),
          T('chajusimnigga'),
          T('o honorífico no verbo'),
          T('é discurso direto, e a troca basta para marcar quem fala'),
        ],
        [
          T('pergunta do leitor'),
          T('seumnigga, imnigga'),
          T('a partícula de sujeito do substantivo'),
          T('a frase espera resposta, e o tom é o polido'),
        ],
        [
          T('conversa entre amigos'),
          T('{yo}'),
          T('nenhum honorífico'),
          T('tom neutro, o que mais se lê e o que mais se ouve'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Uma frase coreana escrita sem nenhuma partícula final soa como:'),
    options: [
      T('um pedaço de texto, uma lista de pedaços'),
      T('uma pergunta ao interlocutor'),
      T('uma frase educada, de registro formal'),
      T('um erro de ortografia, sem reparo possível'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a partícula final neutra de "eu como", na fala de todos os dias: 먹____'),
      answer: '어요',
    },
    {
      kind: 'match',
      prompt: T('Ligue a partícula ao que ela diz'),
      pairs: [
        { a: T('{yo}'), b: T('afirmação neutra, o final da fala de todos os dias') },
        { a: T('{da}'), b: T('afirmação plana, a mesma letra do verbo ser') },
        { a: T('{nae}'), b: T('espera: tomara que, para o sim e para o não') },
        { a: T('{ra}'), b: T('incerteza e relato: acho que; dizem que') },
        { a: T('{ssi}'), b: T('sobrenome e apelido depois do nome: fulano') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T(
        'Em João 1, o narrador e as palavras de Jesus chegam ao fim da frase de maneiras diferentes. O que o leitor pode saber por causa disso?',
      ),
      options: [
        T('se está lendo narração ou discurso direto, sem nenhuma palavra que diga "Jesus disse"'),
        T('que o texto original foi escrito em coreano'),
        T('que a narração vale mais do que o discurso'),
        T('que Jesus falava num registro mais velho que o do narrador'),
      ],
      answer: 0,
    },
  ],
};
