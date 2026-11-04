import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  section: T('Verbo'),
  title: T('O mesmo verbo com uma cauda nova: passivo e causativo'),
  subtitle: T(
    'As duas vozes do japonês nascem do verbo que já existe mais uma cauda colada na ponta — e a letra que some é a mesma nos dois casos',
  ),
  body: C(`
## Uma cauda só, duas vozes

O português tem uma palavra para "ser feito" e outra para "fazer alguém fazer". O japonês tem um gesto só: **o mesmo verbo com uma cauda colada na ponta**, e as duas vozes saem dele. {nomareru} é "ser bebido"; {nomaseru} é "fazer beber". A raiz é a mesma nas duas, e a cauda é que faz o trabalho: uma diz que a ação sofre, a outra diz que a ação é mandada.

É a mesma ideia da lição dos objetos, dois passos adiante. Lá o verbo não dizia se havia objeto, e quem dizia era a partícula de objeto. Aqui o verbo não diz quem sofre nem quem manda, e quem diz é a cauda. Por isso vale decorar o verbo pela **raiz**: quem sabe que {nomu} é a raiz sabe de onde vêm {nomareru} e {nomaseru} sem nunca ter visto nenhuma das duas.

## A cauda do passivo: {reru}

O passivo se faz com {reru} depois do verbo. A regra muda conforme a conjugação, e o iniciante trava nos dois verbos abaixo, que trocam de regra.

Verbo da **segunda conjugação**, o que termina em u: o u sai da ponta e entra {reru}. {nomu} "beber" vira {nomareru} "ser bebido". Uma letra trocada, e a ação muda de mão.

Verbo da **primeira conjugação**, o que tira o ru: o ru sai e entram {reru}. {taberu} "comer" vira {taberareru} "ser comido"; {miru} "ver" vira {mirareru} "ser visto". Este é o detalhe técnico que trava iniciante: a letra do ru não sobrevive na flexão, e quem a mantém escreve uma palavra que existe e não significa nada.

Há ainda dois verbos que fogem do padrão, o de "ir" e o de "vir", e os dois são o mesmo {reru} sobre uma raiz trocada. E há um truque de dicionário: as formas novas têm entrada própria, e é por isso que a ligação com o verbo de origem fica invisível para quem só procura palavra por palavra.

## A cauda do causativo: {ni} mais o verbo projetivo

O causativo é outra cauda, {saseru}, e vem sempre com a partícula {ni}: o {ni} diz a quem a ação é feita, e o verbo vai na forma projetiva. A troca de conjugação é a mesma da seção anterior: {nomu} vira {nomaseru}, {taberu} vira {tabaseru}, {miru} vira {missaseru}. Uma exceção que todo mundo esquece: {iku} não repete a letra inicial no causativo, e o resultado é {ikaseru}.

E aqui está o detalhe que faz o iniciante errar a tradução: a mesma frase pode ser "deixar" ou "obrigar". {kodomo ni ikaseru} é "deixo meu filho ir" e é "faço meu filho ir", e nada na forma diz qual das duas coisas é. Quem escolhe é o contexto: quem está falando, e a quem se dirigem as ordens.

Este gesto já apareceu em duas outras línguas deste projeto. No coreano é uma partícula colada na ponta do verbo que faz o mesmo serviço; no mandarim a causa aparece como "deixar" ou "fazer" com o verbo logo em seguida. Três línguas, três peças diferentes, um gesto só: a ação que alguém manda fazer.

## O incolor, a cauda dupla e Marcos 15:5

O passivo simples esconde quem age: "ele foi visto" não diz por quem. Quando o agente aparece colado com {ni}, o passivo muda de sentido e vira o que os estudiosos chamam de incolor: o sujeito da frase é **o agente**, e a ação é uma ação ruim sofrida por quem está na outra ponta. {kare wa watashi ni mirareru} é "eu sou visto por ele", a mesma forma de {mirareru} de antes, com outra pessoa no lugar do sujeito e {ni} no lugar de nada. Compare os dois pares na última tabela, porque é o detalhe mais fino de tudo isto.

Duas coisas mais, e as duas são diferenças reais entre as línguas. Primeira: o japonês **não tem partícula de agente**. Onde o mandarim resolve isso com uma partícula colada antes do verbo, o japonês escreve "por + pessoa" ou não escreve nada, e a construção fica mais flexível, porque a informação pode ser omitida sem que a frase quebre. Segunda: dá para aplicar o passivo sobre um causativo, verbo mais {saseru} mais {reru}, e a forma resultante significa literalmente "ser feito por alguém porque mandaram fazer". É a cauda dupla, a mais complexa das duas, e ela aparece em texto bíblico; aqui ela fica apenas nomeada.

O gancho fecha o caminho com as duas vozes na mesma frase. Marcos 15:5 diz que Pilatos entregou Jesus a eles para ser crucificado: em japonês, "entregou" é um causativo, ele mandou que o entregassem, e "para ser crucificado" é um passivo. Uma frase com as duas caudas que acabamos de ver, e o leitor que reconhece as duas formas entende o versículo sem precisar caçar nenhum outro verbo.
`),
  vocab: [
    V('reru', 'れる', 'a cauda do passivo: verbo mais {reru} diz "ser feito"'),
    V('saseru', 'させる', 'a cauda do causativo: verbo mais {seru} diz "fazer alguém fazer"'),
    V('ni', 'に', 'a partícula que diz a quem a ação é feita'),
    V('nomu', '飲む', 'beber (nomu) — raiz de duas vozes'),
    V('nomareru', '飲まれる', 'ser bebido — o passivo de {nomu}, com {reru} no lugar do u'),
    V('nomaseru', '飲ませる', 'fazer beber — o causativo de {nomu}, com {seru} no lugar do u'),
    V('taberu', '食べる', 'comer (taberu) — verbo da primeira conjugação'),
    V('taberareru', '食べられる', 'ser comido — {taberu} perde o ru e ganha {reru}'),
    V('tabaseru', '食べさせる', 'fazer comer — {taberu} perde o ru e ganha {seru}'),
    V('miru', '見る', 'ver (miru) — a raiz do par que decide o incolor'),
    V('mirareru', '見られる', 'ser visto — vira passivo incolor quando o agente vem com {ni}'),
    V('missaseru', '見させる', 'fazer ver — o causativo de {miru}'),
    V('iku', '行く', 'ir (iku) — o único que não repete a letra inicial no causativo'),
    V('ikaseru', '行かせる', 'fazer ir, ou deixar ir: as duas coisas ao mesmo tempo'),
    V('kakerareru', '架けられる', 'ser crucificado — o passivo do verbo de pregar na cruz'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Passivo e causativo nascem do mesmo verbo: passivo é verbo mais {reru}, causativo é verbo mais {seru} com a partícula {ni}. Uma cauda, duas vozes.',
      ),
    },
    {
      n: '2',
      text: T(
        'Segunda conjugação, o verbo que termina em u: o u sai da ponta e entra {reru} — {nomu} vira {nomareru} e {nomaseru}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Primeira conjugação, o verbo que tira o ru: o ru some e entram {reru} ou {seru} — {taberu} vira {taberareru} e {tabaseru}. Quem mantém o ru escreve uma palavra que não existe.',
      ),
    },
    {
      n: '4',
      text: T(
        'O causativo diz a quem a ação é feita pelo {ni}, e a mesma frase pode ser "deixar" ou "obrigar": quem escolhe é o contexto, nunca a forma.',
      ),
    },
    {
      n: '5',
      text: T(
        'Não existe partícula de agente no japonês: o agente vem como "por + pessoa" ou é omitido. E quando o agente aparece com {ni}, o passivo é o incolor — o sujeito é quem age, a ação é ruim e o outro é o alvo.',
      ),
    },
  ],
  notes: [
    {
      label: T('A cauda é a informação, o verbo é o resto'),
      text: T(
        'É a lição 13 vista de outro ângulo. O verbo japonês não flexiona por ter objeto, e agora vemos que também não flexiona por voz: quem carrega a informação da frase é sempre a partícula ou a cauda. O dicionário japonês dá entrada própria a cada flexão, e por isso a relação entre elas fica escondida para quem procura palavra por palavra. Quem decora a raiz decora as duas vozes de uma vez.',
      ),
    },
    {
      label: T('O incolor é um passivo normal com o sujeito trocado'),
      text: T(
        'A forma {mirareru} é a mesma nos dois usos: o que muda é quem está no sujeito e se o agente aparece. Sem agente, "algo foi visto"; com o agente no {ni}, "alguém foi visto por ele", e o tom que vem junto é de ação ruim sofrida. O nome vem do fato de que a voz não muda de cor: o verbo continua sendo o mesmo.',
      ),
    },
  ],
  examples: [
    {
      text: '酒を飲む',
      gloss: T('sake o nomu — eu bebo vinho: a forma neutra, que é a raiz das duas vozes'),
    },
    {
      text: '酒を飲まれる',
      gloss: T('sake o nomareru — o vinho é bebido: passivo, {nomu} mais {reru}'),
    },
    {
      text: '子供に酒を飲ませる',
      gloss: T(
        'kodomo ni sake o nomaseru — faço minha criança beber, ou deixo minha criança beber: o {ni} diz a quem',
      ),
    },
    {
      text: '私に見られる',
      gloss: T('watashi ni mirareru — sou visto por ele: o passivo incolor, com o agente no {ni}'),
    },
    {
      text: 'そこでピラトスは彼らを引き渡して、十字架に架けられるようにした',
      gloss: T(
        'sore de pirato wa kare-tachi o hikiwatashite, jūjika ni kakerareru yō ni shita — e Pilatos entregou-o a eles para que fosse crucificado (Marcos 15:5): um causativo e um passivo na mesma frase',
      ),
    },
  ],
  tables: [
    {
      caption: T('A tabela central: o mesmo verbo, as duas vozes'),
      head: [T('Verbo'), T('Neutro'), T('Passivo'), T('Causativo')],
      rows: [
        [
          T('{nomu}, "beber"'),
          T('{nomu}'),
          T('{nomareru} — ser bebido'),
          T('{nomaseru} — fazer beber'),
        ],
        [
          T('{taberu}, "comer"'),
          T('{taberu}'),
          T('{taberareru} — ser comido'),
          T('{tabaseru} — fazer comer'),
        ],
        [
          T('{miru}, "ver"'),
          T('{miru}'),
          T('{mirareru} — ser visto'),
          T('{missaseru} — fazer ver'),
        ],
        [
          T('{iku}, "ir"'),
          T('{iku}'),
          T('{kareru} — irregular'),
          T('{ikaseru} — fazer ir, sem repetir a letra'),
        ],
      ],
    },
    {
      caption: T('A letra que some: segunda conjugação contra primeira conjugação'),
      head: [T('Conjugação'), T('O que acontece na flexão'), T('Passivo'), T('Causativo')],
      rows: [
        [
          T('segunda, termina em u'),
          T('o u sai da ponta e a cauda ocupa o lugar'),
          T('{nomu} → {nomareru}'),
          T('{nomu} → {nomaseru}'),
        ],
        [
          T('primeira, tira o ru'),
          T('o ru sai e a cauda inteira é acrescentada'),
          T('{taberu} → {taberareru}'),
          T('{taberu} → {tabaseru}'),
        ],
        [
          T('ir e vir'),
          T('a raiz troca, e a regra inteira se perde'),
          T('{kareru}, forma irregular'),
          T('{ikaseru}, sem repetir a letra'),
        ],
      ],
    },
    {
      caption: T('O passivo comum e o incolor: a mesma forma, o sujeito trocado'),
      head: [T('Frase'), T('Quem é o sujeito'), T('O que se lê'), T('O agente')],
      rows: [
        [T('{hon ga mirareru}'), T('o livro'), T('o livro foi visto'), T('não aparece')],
        [
          T('{watashi ga kare ni mirareru}'),
          T('eu'),
          T('fui visto por ele'),
          T('vem no {ni}, e a ação é ruim'),
        ],
        [
          T('{kare ga watashi ni o mawareru}'),
          T('ele'),
          T('eu recebi dele uma pancada que não pedi'),
          T('vem no {ni}, junto do objeto marcado'),
        ],
        [
          T('{kare wa watashi ni mita}'),
          T('ele'),
          T('ele me viu, e isso é neutro'),
          T('aqui não há passivo nenhum'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {kare wa watashi ni mirareru}, o que o {ni} está fazendo?'),
    options: [
      T('marca o sujeito que sofre a ação'),
      T('marca o agente, e o passivo vira incolor: o agente é o sujeito'),
      T('marca o objeto direto do verbo'),
      T('marca que a ação foi no passado'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o passivo de {nomu}, verbo da segunda conjugação: 飲____れる'),
      answer: 'ま',
    },
    {
      kind: 'match',
      prompt: T('Ligue a forma ao que ela faz'),
      pairs: [
        { a: T('{nomareru}'), b: T('passivo de um verbo da segunda conjugação') },
        { a: T('{nomaseru}'), b: T('causativo de um verbo da segunda conjugação') },
        { a: T('{taberareru}'), b: T('passivo de um verbo da primeira conjugação, sem o ru') },
        { a: T('{tabaseru}'), b: T('causativo de um verbo da primeira conjugação, sem o ru') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Em Marcos 15:5, o que faz o verbo de "entregou a eles"?'),
      options: [
        T('é um causativo: ele mandou que o entregassem'),
        T('é um passivo incolor: a entrega foi sofrida por ele'),
        T('é um verbo neutro, e o passivo está só em "para ser crucificado"'),
        T('é uma forma de possibilidade, e é essa a leitura correta'),
      ],
      answer: 0,
    },
  ],
};
