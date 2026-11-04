import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  section: T('Leitura'),
  title: T('Lendo Provérbios: pares de versos e o livro de poucas palavras'),
  subtitle: T(
    'O verso de Provérbios é metade de uma frase, e o livro inteiro se reconstrói com poucas dezenas de substantivos',
  ),
  body: C(`
## Um livro onde ninguém fala

Em Gênesis alguém diz e alguém responde. Em Provérbios não há ninguém. Não há narrador, não há diálogo, e nenhuma linha traz o "e disse" que marca o começo de cada cena do Antigo Testamento. Cada verso é uma afirmação sobre duas coisas, e cada coisa tem duas faces.

**O primeiro verso do livro é o modelo.** A {和合本} escreve {zhìhuì zhī zǐ shǐ fùqīn kuàilè; yúmào zhī zǐ jiào mǔqīn yōuchóu}: "o filho sábio faz o pai alegre, o filho insensato enche a mãe de angústia". O ponto e vírgula separa duas frases completas, e não uma frase de duas partes. A segunda volta no verso seguinte, quase palavra por palavra, com a mesma mensagem e quase as mesmas palavras. Quem lê um só verso leu metade, e quem traduz verso por verso produz um português que parece um texto repetido — porque está.

## A repetição que o tradutor não corrigiu

Um tradutor com mais fluência traduziria melhor o hebraico. Ele trocaria o segundo "o filho insensato enche a mãe de angústia" por uma paráfrase, para o português não repetir, e o livro ganharia em fluência e perderia o argumento inteiro. A repetição é a prova de que o livro está falando de uma regra e não de dois casos concretos.

E o padrão se repete ao longo de Provérbios: um verso enuncia a regra, o verso seguinte aplica a regra a outro caso, e o par é o que significa alguma coisa. Isso vale para quase todos os capítulos, e vale em particular para os capítulos dez a treze, onde o livro alterna sem parar entre {zhìhuì zhī zǐ} e {yúmào zhī zǐ}, entre {zhìhuì rén} e {yúmào rén}, e a diferença entre os dois nomes é o argumento inteiro de cada par.

**O verso de Provérbios não é uma frase: é metade de uma frase, e o par de versos é a unidade de leitura.**

## O substantivo volta, o verbo muda

Aqui está a regra de construção do livro, e ela é simples de enunciar e difícil de aplicar. O par de versos em Mandarin traz quase sempre os mesmos dois substantivos, um em cada metade, e o verbo é o que muda de um lado para o outro.

**Releia Provérbios 10:1 e olhe só para os verbos.** Na primeira metade o verbo é {shǐ}, "fazer", e na segunda é {jiào}, "encher, causar". A construção é exatamente a mesma nos dois lados: filho, verbo, pai ou mãe. O substantivo {zhī zǐ}, "o filho", volta nas duas metades; o par {fùqīn} e {mǔqīn} troca de lugar; e os dois verbos são dois verbos. A gramática da frase é idêntica nos dois lados e o sentido é oposto, e o Mandarin não tem nada que diga isso.

O mesmo desenho aparece em Provérbios 11:14, com o conselho de um lado e a ruína do outro, e em cada capítulo do livro com outro par de substantivos. Quem não conhece o livro lê os dois lados como uma repetição, e é por isso que a leitura por construção é obrigatória: as duas frases são iguais na gramática e opostas no sentido.

Quem traduz do português escreve "e onde há muitos conselhos, há segurança", e a construção inteira perde o que os dois verbos estavam fazendo. Lendo por construção, a segunda metade vira uma pergunta ao leitor: e no seu caso, qual dos dois verbos?

O caso extremo é o verbo sair de uma metade e entrar na outra. Onde o grego e o hebraico distribuem dois verbos simétricos, o Mandarin às vezes deixa uma metade só com substantivo e leva o verbo inteiro para a outra. O par continua funcionando, e a assimetria é uma escolha do tradutor, não uma falha.

## O banco de palavras e a palavra que vale duas

O livro inteiro se reconstrói com poucas dezenas de substantivos: {xīn}, o coração, {kǒu}, a boca, {shǒu}, a mão, {yǎn}, o olho, {jiā}, a casa, {xiōng}, o irmão, {fù}, o pai, {zǐ}, o filho, {qī}, a esposa, {jīn}, o ouro, {huǒ}, o fogo, {shuǐ}, a água, {lù}, o caminho. Os verbos são ainda menos: {shī}, perder, {dé}, ganhar, {zhī}, governar, {shǒu}, guardar, {zǒu}, andar, {jiàn}, ver.

E há um efeito colateral que o leitor tem de saber. Como o banco é pequeno, uma mesma palavra Mandarin volta em provérbios cujo original hebraico não tem nada a ver. {shēngmìng} e {xìngmìng} são as duas palavras chinesas para "vida": a primeira é a vida como duração, a segunda é a vida como destino. São o mesmo {mìng} com dois prefixos, e o hebraico também tem duas palavras distintas. Traduzir do Mandarin para o hebraico palavra por palavra, sem olhar o original, produz equivalências falsas.

O mesmo vale para {lù}: num verso é o caminho que se pisa, no seguinte é o modo de agir. {xīn} é o coração num verso e a mente no seguinte. O critério é o outro nome da metade: se o outro nome é um substantivo concreto, o valor é o concreto; se é outro termo abstrato, o valor é o abstrato.

O procedimento de leitura cabe em quatro passos, e vale para os Salmos também. Leia quatro versos de uma vez. Encontre os dois substantivos que se opõem. Veja qual verbo ficou em cada metade. Depois pergunte o que a segunda metade faz com a primeira, e é essa pergunta, e não a tradução de cada palavra, que produz o sentido de um capítulo.`),
  vocab: [
    V('zhìhuì', '智慧', 'sabedoria (zhìhuì)'),
    V('yúmào', '愚昧', 'necedade, insensatez (yúmào)'),
    V('fù', '父', 'pai (fù)'),
    V('mǔ', '母', 'mãe (mǔ)'),
    V('kuàilè', '快樂', 'alegria (kuàilè)'),
    V('yōuchóu', '忧愁', 'preocupação, mágoa (yōuchóu)'),
    V('shǐ', '使', 'fazer, causar (shǐ)'),
    V('jiào', '叫', 'encher, causar; e gritar (jiào)'),
    V('xīn', '心', 'coração; o substantivo que mais aparece no livro (xīn)'),
    V('kǒu', '口', 'boca; e o que a boca faz (kǒu)'),
    V('lù', '路', 'caminho; e modo de agir, nos provérbios (lù)'),
    V('bì', '必', 'certamente; advérbio de necessidade (bì)'),
    V('shēngmìng', '生命', 'vida, como duração (shēngmìng)'),
    V('xìngmìng', '性命', 'vida, como destino (xìngmìng)'),
    V('dé', '得', 'ganhar, obter (dé)'),
    V('shī', '失', 'perder (shī)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O verso de Provérbios é metade de uma frase: leia de dois em dois, e o ponto e vírgula marca a passagem de uma metade à outra.',
      ),
    },
    {
      n: '2',
      text: T(
        'Provérbios não tem narrador nem diálogo: nenhuma linha traz o "e disse" que abre as cenas do Antigo Testamento.',
      ),
    },
    {
      n: '3',
      text: T(
        'A repetição literal entre versos consecutivos é da redação hebraica, e o Mandarin a preserva em vez de parafrasear.',
      ),
    },
    {
      n: '4',
      text: T(
        'No par de versos o substantivo se repete e o verbo muda; é o verbo que carrega o contraste.',
      ),
    },
    {
      n: '5',
      text: T(
        'Uma palavra Mandarin pode valer duas palavras hebraicas: {shēngmìng} e {xìngmìng} são as duas versões de "vida".',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que a tradução repete'),
      text: T(
        'Repetir não é falta de estilo do tradutor: é o argumento. O verso enuncia a regra, o seguinte aplica a regra a outro caso, e o leitor que recebe os dois em português paraphraseado perde a prova de que se trata da mesma regra. Uma tradução fiel de Provérbios parece mal escrita em português, e essa aparência corresponde ao original.',
      ),
    },
    {
      label: T('O verbo que sai de uma metade'),
      text: T(
        'Em alguns pares o Mandarin deixa uma metade só com substantivo e leva o verbo inteiro para a outra. O par continua funcionando e nada está faltando. A assimetria aparece também nos Salmos, e é uma escolha de ritmo do tradutor, não uma omissão: o que muda é a cadência da fala, não o sentido.',
      ),
    },
  ],
  examples: [
    {
      text: '智慧之子使父親快樂；愚昧之子叫母親憂愁',
      gloss: T(
        'zhìhuì zhī zǐ shǐ fùqīn kuàilè; yúmào zhī zǐ jiào mǔqīn yōuchóu — o filho sábio faz o pai alegre; o insensato enche a mãe de angústia (Prov 10:1)',
      ),
    },
    { text: '使', gloss: T('shǐ — fazer, causar: o verbo da primeira metade de Provérbios 10:1') },
    {
      text: '叫',
      gloss: T('jiào — encher, causar: o verbo da segunda metade, com a mesma construção'),
    },
    { text: '生命', gloss: T('shēngmìng — a vida como duração: o que corre e acaba') },
    {
      text: '性命',
      gloss: T('xìngmìng — a vida como destino: aquilo que se pode perder de uma vez'),
    },
    { text: '口', gloss: T('kǒu — boca; e o que se fala por ela, e o que se come por ela') },
    { text: '路', gloss: T('lù — caminho; e modo de agir, e o que alguém faz com a vida') },
    {
      text: '當',
      gloss: T('dāng — no caso de, quando; e o que se deve fazer com aquilo que se tem'),
    },
  ],
  tables: [
    {
      caption: T('A anatomia de um par de versos'),
      head: [T('Parte'), T('O que traz'), T('Exemplo'), T('Papel')],
      rows: [
        [
          T('primeira metade'),
          T('substantivo, verbo, substantivo'),
          T('{zhìhuì zhī zǐ shǐ fùqīn kuàilè}'),
          T('a regra'),
        ],
        [
          T('segunda metade'),
          T('substantivo oposto, verbo, substantivo'),
          T('{yúmào zhī zǐ jiào mǔqīn yōuchóu}'),
          T('a aplicação'),
        ],
        [T('o par inteiro'), T('as duas metades juntas'), T('{zhìhuì … yúmào}'), T('o contraste')],
      ],
    },
    {
      caption: T('Uma palavra, dois valores'),
      head: [T('Palavra'), T('Um valor'), T('Outro valor'), T('Teste')],
      rows: [
        [
          T('{xīn}'),
          T('o coração, o interior'),
          T('a mente, o entendimento'),
          T('o outro nome decide o valor'),
        ],
        [
          T('{lù}'),
          T('o caminho que se pisa'),
          T('o modo de agir'),
          T('o outro nome é concreto ou abstrato'),
        ],
        [
          T('{shēngmìng}'),
          T('vida como duração'),
          T('vida como destino: {xìngmìng}'),
          T('o mesmo {mìng} com dois prefixos'),
        ],
        [
          T('{kǒu}'),
          T('a boca, o órgão'),
          T('o que se fala por ela'),
          T('o verbo vizinho diz qual é'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {智慧之子使父親快樂；愚昧之子叫母親憂愁}, o que muda entre as duas metades?'),
    options: [
      T('o substantivo {zhī zǐ} volta, e o verbo e o objeto mudam'),
      T('o substantivo muda e o verbo volta'),
      T('muda o sujeito, porque a segunda metade traz outro'),
      T('o advérbio de grau, que muda de valor'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o verbo da primeira metade de Provérbios 10:1: 智慧之子____父親快樂'),
      answer: '使',
    },
    {
      kind: 'match',
      prompt: T('Ligue a palavra Mandarin ao par de valores que ela cobre'),
      pairs: [
        { a: T('{shēngmìng}'), b: T('vida como duração') },
        { a: T('{xìngmìng}'), b: T('vida como destino') },
        { a: T('{lù}'), b: T('caminho e modo de agir') },
        { a: T('{xīn}'), b: T('coração e mente') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'Por que a segunda metade de um verso de Provérbios costuma ter o substantivo e o verbo invertidos em relação à primeira?',
      ),
      options: [
        T('porque o substantivo se repete e o verbo é que muda'),
        T('porque a segunda metade é uma pergunta ao leitor'),
        T('porque o ponto e vírgula inverte a frase'),
        T('porque o tradutor quis variedade no estilo'),
      ],
      answer: 0,
    },
  ],
};
