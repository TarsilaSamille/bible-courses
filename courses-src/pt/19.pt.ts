import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  section: T('O adjetivo e o advérbio'),
  title: T('O advérbio: posição'),
  subtitle: T('ontem cheguei tarde, e o advérbio que fecha a frase'),
  body: C(`## O advérbio que fecha a frase

O advérbio de circunstância modificadora tem posição fixa: vem no fim da oração. {Ouvi tudo claramente}, {Saiu ontem à noite}, {Ficou ali por três dias}. Quem põe esse advérbio no meio da frase chama atenção para ele, e quem o põe no começo está fazendo outro uso, que é o de determinar o tempo.

O que fecha a oração é a circunstância, não a qualidade. Em {Falei com ele ontem}, o advérbio diz quando e por isso fecha. Em {Ontem falei com ele}, o mesmo advérbio abre a frase, e a informação que fica no fim passa a ser o interlocutor.

## O advérbio de tempo definido abre a frase

Tempo definido é o que localiza a ação num ponto: {ontem}, {hoje}, {amanhã}, {na terça-feira}, {naquele dia}. Quando o advérbio é desse tipo, ele pode ir no início, e nessa posição destaca o tempo e deixa o resto da frase para depois. {Ontem cheguei tarde} põe o tempo em primeiro plano; {Cheguei tarde ontem} põe a ação em primeiro plano.

O contraste é o mesmo do português coloquial: {Ontem saí de casa} e {Saí de casa ontem} dizem a mesma coisa, e a primeira soa mais informativa porque destaca o dia.

## A ordem verbo, objeto, advérbio

Quando a frase tem os três, a ordem é verbo, objeto, advérbio: {O mestre explicou a lição lentamente}, {Jesus amou os seus até o fim}, {Li o livro inteiro}. Inverter o advérbio para o meio dá ênfase e nada mais: {Ele explicou lentamente a lição} soa como frase de efeito.

A posição neutra é, portanto, a última, e quem traduz deve colocá-la ali por omissão, salvo se o grego original esticar a mesma ênfase. No fim é o padrão; no meio é marca de ênfase; no começo, marca de tempo.

## Não ... nunca: uma correlação

Há advérbios que não funcionam sozinhos. {Nunca} e {jamais} pedem {não} antes, e a negação vale para os dois: {Não vi nunca}, {Não vi jamais}. O mesmo vale com {nem}: {Nem vi}, e a frase fica mais forte quando o verbo também é negativo: {Nem vi, nem ouvi}.

O ponto é que {não ... nunca} é uma correlação, não duas negações. Traduzir cada palavra por uma negação produz duplicação: o grego e o hebraico já marcam a negação uma vez só, e o português precisa das duas palavras porque o advérbio é que carrega o sentido.

## O que ler

Em qualquer frase com advérbio, pergunte: qual é o advérbio? Ele está no fim, no meio ou no começo? E ele é de tempo definido? Três perguntas, e a posição fica explicada.

O Salmo 5.4 põe {pela manhã} duas vezes, no começo das duas orações, e a segunda vez o tempo já é conhecido. Quem traduz preserva essa posição em vez de espalhá-la, e o leitor percebe que o salmo inteiro é um pedido que se repete ao amanhecer.`),
  vocab: [
    V('ontem', 'ontem', 'ontem'),
    V('hoje', 'hoje', 'hoje'),
    V('amanhã', 'amanhã', 'amanhã'),
    V('claramente', 'clara', 'claramente'),
    V('tarde', 'tarde', 'tarde'),
    V('cedo', 'cedo', 'cedo'),
    V('juntos', 'junto', 'juntos'),
    V('ali', 'ali', 'ali'),
    V('então', 'então', 'então'),
    V('sempre', 'sempre', 'sempre'),
    V('jamais', 'jamais', 'jamais'),
    V('nem', 'nem', 'nem'),
    V('não', 'não', 'não'),
    V('nunca', 'nunca', 'nunca'),
    V('pela manhã', 'manhã', 'pela manhã'),
  ],
  rules: [
    { n: '§1', text: T('O advérbio de circunstância modificadora vai no fim da oração.') },
    {
      n: '§2',
      text: T('O advérbio de tempo definido pode ir no início, e nessa posição destaca o tempo.'),
    },
    { n: '§3', text: T('Com verbo, objeto e advérbio, a ordem neutra é verbo, objeto, advérbio.') },
    { n: '§4', text: T('{Nunca} e {jamais} pedem {não} antes: a negação vale para os dois.') },
    { n: '§5', text: T('Advérbio no meio da frase é marca de ênfase, e não posição neutra.') },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'O grego e o hebraico permitem o advérbio em qualquer posição, porque são línguas de ordem livre. O português não: cada posição carrega um efeito, e é esse efeito que o tradutor decide.',
      ),
    },
    {
      label: T('Duplo negador'),
      text: T(
        'Em {não vi jamais}, quem lêmp Portuguese não entende duas negações: a segunda nega o advérbio, não o verbo. O mesmo vale para {não é possível}.',
      ),
    },
  ],
  examples: [
    { text: 'Ontem cheguei tarde.', gloss: T('Tempo definido abrindo a frase.') },
    { text: 'Cheguei tarde ontem.', gloss: T('O mesmo conteúdo, com a ação em primeiro plano.') },
    { text: 'Ouvi tudo claramente.', gloss: T('Circunstância modificadora fechando a oração.') },
    {
      text: 'O mestre explicou a lição lentamente.',
      gloss: T('Ordem neutra: verbo, objeto, advérbio.'),
    },
    { text: 'Saiu ontem à noite.', gloss: T('Dois advérbios de tempo, no fim.') },
    { text: 'Não vi jamais.', gloss: T('Correlação: {não} mais {jamais}.') },
    { text: 'Nem vi, nem ouvi.', gloss: T('Verbo e advérbio negativos juntos.') },
    {
      text: 'Pela manhã, ó Senhor, ouvirás a minha voz.',
      gloss: T('Salmo 5.4: tempo no início da oração.'),
    },
  ],
  tables: [
    {
      caption: T('Posição do advérbio'),
      head: ['Posição', 'Exemplo', 'O que destaca'],
      rows: [
        ['no início', 'Ontem cheguei tarde.', 'o tempo'],
        ['no meio', 'Ele explicou lentamente a lição.', 'a circunstância'],
        ['no fim', 'Ouvi tudo claramente.', 'nada: é a posição neutra'],
      ],
    },
    {
      caption: T('A ordem dos três'),
      head: ['Verbo', 'Objeto', 'Advérbio'],
      rows: [
        ['O mestre explicou', 'a lição', 'lentamente'],
        ['Jesus amou', 'os seus', 'até o fim'],
        ['Li', 'o livro', 'inteiro'],
      ],
    },
    {
      caption: T('Correlação negativa'),
      head: ['Advérbio', 'O que vem antes', 'Exemplo'],
      rows: [
        ['nunca', 'não', 'não vi nunca'],
        ['jamais', 'não', 'não vi jamais'],
        ['nem', 'verbo negativo', 'nem vi'],
        ['tampouco', 'também', 'nem eu, tampouco'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Onde vai o advérbio de circunstância modificadora?'),
    options: [
      T('no fim da oração'),
      T('sempre no início'),
      T('antes do verbo'),
      T('entre o artigo e o substantivo'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{nunca} exige {não} antes, e os dois formam uma ______.'),
      answer: 'correlação',
      hint: T('Não são duas negações independentes.'),
    },
    {
      kind: 'choose',
      prompt: T('Em “ouvi tudo claramente”, o advérbio está:'),
      options: [T('no fim'), T('no início'), T('no meio da oração'), T('colado ao verbo')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue a posição ao que ela destaca.'),
      pairs: [
        { a: T('no início'), b: T('o tempo') },
        { a: T('no meio'), b: T('a circunstância') },
        { a: T('no fim'), b: T('nada: é a posição neutra') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
};
