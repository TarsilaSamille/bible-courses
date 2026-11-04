import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  section: T('Sintaxe'),
  title: T('Citar: a partícula que abre e a que fecha'),
  subtitle: T(
    'O japonês usa uma partícula só nas duas pontas da citação, e o que vem depois dela é o que diz se você está lendo fala ou relato',
  ),
  body: C(`
## A mesma partícula nos dois lados

O português abre a citação com dois-pontos e fecha com travessão. O japonês não tem dois sinais: tem **um**, e ele é uma partícula. {to} entra depois do verbo de dizer e entra de novo no fim da fala, com a mesma forma e o mesmo som, *kare wa 「watashi wa iku」 to iutta*, ele disse: "eu vou". A primeira {to} diz "aqui começa a fala"; a segunda diz "aqui termina". O japonês não guarda essa distinção em lugar nenhum: a mesma sílaba faz os dois papéis.

Vale comparar com as outras duas línguas deste projeto, porque o contraste é o ponto. No mandarim a fala é cercada por dois caracteres, um que abre e outro que fecha, e o verbo de dizer fica fora dos dois. No coreano não há partícula nenhuma: quem delimita é o próprio verbo de dizer, e por isso escolher o verbo já decide se aquilo é fala. No japonês a demarcação é uma partícula e é a mesma nas duas pontas. A consequência é prática: no texto corrido você não precisa adivinhar o que vem depois, basta ouvir a partícula duas vezes e marcar o que está entre elas.

E a pontuação acompanha. As aspas do japonês são o {kagi}, os colchetes de canto reto, 「 e 」, e não as aspas latinas; quando a citação vem dentro de outra citação, o nível interno troca de forma, como no mandarim. O travessão, que no português marca a fala, aparece menos, porque a partícula já está fazendo esse serviço: em *kare wa — watashi wa iku — to iutta* o travessão é redundante e ninguém o escreve. A tradução bíblica em japonês usa os colchetes, não as aspas.

## O nome que vem depois da partícula

Depois de {to} pode vir um nome, e o nome é quem fala. "Ele disse, o senhor Tanaka, eu vou" é *kare wa 「{tanaka} {san} wa iku」 to iutta*: o que {tanaka} diz está em primeira pessoa dentro dos colchetes, e quem o diz é {tanaka}, não o sujeito de fora. É o verbalizador, e vale reparar que a estrutura não tem peça nova nenhuma: é {to} outra vez.

O mesmo arranjo, com uma peça trocada, dá a fala indireta. "Ele disse QUE eu vou" é *kare wa watashi ga iku to iutta*: a partícula é a mesma, mas depois dela não vem nome nenhum, vem um **verbo na forma base**, sem flexionar. E é esse verbo plano, e não uma conjunção, que faz o papel do "que" do português.

São duas coisas que a mesma partícula faz depois de chegar: um nome é o dono da fala, um verbo plano é um "que". A partícula não muda; muda o que ela encontra. E é por isso que ela é a peça mais informativa do capítulo quando o leitor está com pressa: uma partícula e o verbo seguinte bastam para dizer se aquilo é palavra ou relato.

## A citação é uma ilha

Por dentro, a citação obedece à ordem da lição de sintaxe sem exceção: pronome, objeto indireto, objeto direto, verbo no fim. Por fora, a frase que a cerca gira como quiser. "Pedro disse: eu vou" continua *kare wa 「watashi wa iku」 to iutta*, e a citação não vira para acomodar o verbo que no português subiu. Quem traduz palavra a palavra escreve "Pedro eu vou disse" e produz uma frase que não existe em japonês.

E o verbo de dizer também não é neutro. {iu} é o gesto genérico; {kataru} é narrar e conversar, o verbo das narrativas e das conversas longas; {kaku} é o que se escreve, e no caso de um evangelho é a caneta. Trocar um pelo outro não estraga a frase, mas muda o tom: "ele disse" e "ele contou" e "ele escreveu" são três coisas diferentes. E há um quarto, {omou}, que é "achar, crer", e que nunca tem fala direta, porque quem acha não está falando.

Aqui entra a lição dos registros. O que Jesus diz aparece no registro que o tradutor escolheu, e a escolha é visível na gramática: a fala de Deus costuma sair no honorífico que honra o outro, o {osshharu}, que é justamente o honorífico de "dizer", e o registro dos humanos no polido. Duas traduções produzem dois registros para a mesma frase, e nenhuma das duas é erro de gramática. É uma decisão editorial, e o japonês a deixa à vista porque ela mora no verbo e não na nota de rodapé.

## Marcos 1:15, a frase que virou fórmula

O gancho é Marcos 1:15, a citação mais repetida do Novo Testamento: o tempo está cumprido, o reino de Deus está próximo, convertai-vos e crede no evangelho. São três imperativos empilhados, e cada um fecha o seu próprio segmento, com a fronteira da lição de flexão funcionando dentro da frase de Jesus. No japonês o tempo que se cumpre é o {mitsu}, e o caminho de que o evangelho fala é o {michi}; os três imperativos vêm sem sujeito e sem flexão, como todo imperativo.

O que segura a frase é a mesma coisa que segura qualquer citação: a partícula, nos dois lados. E é isso que torna Marcos 1:15 tão fácil de citar e tão difícil de traduzir, porque a frase é uma unidade, e no japonês essa unidade é marcada pela mesma sílaba nas duas pontas, o que nenhum outro idioma deste projeto faz.

O outro extremo é a abertura de João 1. Ali a maior parte do capítulo é uma **cadeia de citações indiretas**: João escreve o que ouviu e o que viu, e o que ele viu volta na forma plana da lição de flexão, com a partícula e o verbo sem flexionar. O oposto exato de Marcos 1:15, e por isso os dois formam o par clássico de qualquer introdução ao Novo Testamento: um capítulo que é quase todo relato, e um versículo que é tudo fala.
`),
  vocab: [
    V('to', 'と', 'a partícula que abre e fecha a citação (to)'),
    V('iu', '言う', 'dizer; falar (iu) — o verbo genérico'),
    V('kataru', '語る', 'narrar; conversar (kataru)'),
    V('kaku', '書く', 'escrever (kaku)'),
    V('omou', '思う', 'pensar; achar que (omou)'),
    V(
      'osshharu',
      'おっしゃる',
      'honorífico de "dizer": o registro em que a fala de Jesus costuma sair',
    ),
    V('tanaka', '田中', 'Tanaka; nome próprio (tanaka)'),
    V('san', 'さん', 'o sufixo de cortesia depois do nome (san)'),
    V('kagi', '鉤括弧', 'os colchetes de canto reto 「 」, as aspas do japonês (kagi)'),
    V('mitsu', '満す', 'encher; estar cumprido, completo (mitsu)'),
    V('michi', '道', 'caminho (michi)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A mesma partícula {to} abre e fecha a citação: o japonês não tem dois caracteres de aspas, tem uma partícula que aparece duas vezes.',
      ),
    },
    {
      n: '2',
      text: T(
        '{to} seguido de nome próprio é o dono da fala; {to} seguido de verbo na forma base é o "que" do discurso indireto. A partícula não muda, muda o que vem depois dela.',
      ),
    },
    {
      n: '3',
      text: T(
        'Dentro da citação vale a ordem da lição 9 sem exceção, e a sintaxe de fora não entra: a citação é uma ilha.',
      ),
    },
    {
      n: '4',
      text: T(
        'O teste de leitura está no verbo: flexionado, você está lendo fala; na forma base, você está lendo relato. É a única diferença estrutural entre os dois.',
      ),
    },
    {
      n: '5',
      text: T(
        'As aspas do japonês são os colchetes de canto reto e o travessão é que marca a fala; o verbo de dizer ({iu}, {kataru}, {kaku}) escolhe o registro em que a citação é contada.',
      ),
    },
  ],
  notes: [
    {
      label: T('A partícula é simétrica, e isso muda a leitura'),
      text: T(
        'Nas línguas em que o sinal de citação é assimétrico — um abre, outro fecha — ou em que a demarcação mora no verbo, o leitor precisa conhecer a marca de abertura antes de saber o que tem depois dela. No japonês a mesma partícula abre e fecha: basta ouvir a sílaba duas vezes para saber onde a citação começa e onde acaba, e ler um parágrafo bíblico vira marcar intervalos.',
      ),
    },
    {
      label: T('O registro da fala é escolha do tradutor'),
      text: T(
        'Na tradução japonesa a fala de Deus costuma sair no honorífico que honra o outro, o {osshharu}, e o registro dos humanos no polido. Um tradutor que escolher outro registro produz uma tradução igualmente correta em japonês e com som diferente. Nada disso é erro: é a decisão editorial aparecendo na gramática, e por isso é visível a quem estuda a língua em vez de só usá-la.',
      ),
    },
  ],
  examples: [
    {
      text: '彼は「行きます」と言った',
      gloss: T(
        'kare wa「ikimasu」to iutta — ele disse: "eu vou" (a mesma partícula nas duas pontas)',
      ),
    },
    {
      text: '彼は行くと言った',
      gloss: T(
        'kare wa iku to iutta — ele disse que eu vou (mesma partícula, verbo na forma base)',
      ),
    },
    {
      text: '彼は「田中さんが行きます」と言った',
      gloss: T(
        'kare wa「Tanaka-san ga ikimasu」to iutta — ele disse: "o senhor Tanaka vai" (o nome depois da partícula é quem fala)',
      ),
    },
    {
      text: '彼は神が愛されたと思っている',
      gloss: T(
        'kare wa kami ga aisareta to omou — ele acha que Deus foi amado (relato dentro de relato)',
      ),
    },
    {
      text: '時は満した、とイエスは言った',
      gloss: T(
        'toki wa mitsu to, Yesu wa iutta — "o tempo está cumprido", disse Jesus (Marcos 1:15)',
      ),
    },
  ],
  tables: [
    {
      caption: T('Fala direta e fala indireta: a mesma partícula, o teste no verbo'),
      head: [T('O que se compara'), T('Fala direta'), T('Fala indireta')],
      rows: [
        [T('a partícula'), T('{to} aparece duas vezes'), T('{to} aparece uma vez')],
        [
          T('o que vem depois dela'),
          T('verbo flexionado: *watashi wa ikimasu*'),
          T('verbo na forma base: *watashi ga iku*'),
        ],
        [
          T('quem está falando'),
          T('a primeira pessoa, dentro dos colchetes'),
          T('o sujeito de fora: {kare} disse que {watashi} vai'),
        ],
        [
          T('o que o leitor está'),
          T('ouvindo uma fala, palavra por palavra'),
          T('lendo um relato, que ninguém confirmou'),
        ],
        [T('o correspondente em português'), T('—eu vou—'), T('que eu vou')],
      ],
    },
    {
      caption: T('Quatro verbos de dizer, e o registro de cada um'),
      head: [T('Verbo'), T('Usa-se quando'), T('O que muda')],
      rows: [
        [T('{iu}'), T('o gesto genérico de dizer'), T('o tom mais neutro, e o mais comum')],
        [
          T('{kataru}'),
          T('narrar o que aconteceu, ou conversar'),
          T('o tom de narrativa e de conversa longa'),
        ],
        [T('{kaku}'), T('o que foi posto por escrito'), T('o tom de mensagem, de ata, de carta')],
        [
          T('{omou}'),
          T('achar, crer, supor'),
          T('nunca tem fala direta: quem acha não está falando'),
        ],
      ],
    },
    {
      caption: T('A pontuação da citação'),
      head: [T('Marca'), T('Nome'), T('O que faz')],
      rows: [
        [T('{to}'), T('a partícula'), T('abre e fecha, com a mesma forma dos dois lados')],
        [T('「 」'), T('{kagi}'), T('delimita a citação escrita, no nível de fora')],
        [T('——'), T('travessão'), T('marca a fala, como o travessão do português')],
        [
          T('""'),
          T('aspas latinas'),
          T('estrangeiras num texto japonês; são sinal de tradução automática, não de tradutor'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {彼は行くと言った}, o que indica que esta é fala indireta e não fala direta?'),
    options: [
      T('a partícula {to} aparece duas vezes'),
      T('o verbo que vem depois da partícula está na forma base, sem flexionar'),
      T('o verbo de dizer é {kataru}'),
      T('a frase termina em {ne}'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete a fala direta com a partícula que fecha a citação: 彼は「行きます」____言った',
      ),
      answer: 'と',
    },
    {
      kind: 'match',
      prompt: T('Ligue cada peça ao que ela faz'),
      pairs: [
        { a: T('{to}'), b: T('abre e fecha a citação, com a mesma partícula') },
        { a: T('{iu}'), b: T('o gesto genérico de dizer') },
        { a: T('{kataru}'), b: T('narrar e conversar') },
        { a: T('{omou}'), b: T('achar que, e por isso nunca tem fala direta') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('No mandarim e no coreano, quem abre e fecha a citação?'),
      options: [
        T('no mandarim, dois caracteres diferentes; no coreano, o próprio verbo de dizer'),
        T('nos dois, a mesma partícula usada nas duas pontas'),
        T('nos dois, dois pontos'),
        T('no mandarim, a partícula; no coreano, o travessão'),
      ],
      answer: 0,
    },
  ],
};
