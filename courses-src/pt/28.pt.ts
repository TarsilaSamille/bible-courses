import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  section: T('A sintaxe'),
  title: T('A informação que fica no fim'),
  subtitle: T('ontem comprou-se um livro, e a ordem que decide o sentido'),
  body: C(`## O fim da frase é o que é novo

O português neutro é sujeito, verbo, objeto. O que se desvia desse neutro vai para o fim, e o que vai para o fim é a informação **nova**: {Um livro foi comprado} traz o verbo no fim; {Ontem comprou-se um livro} traz o tempo no fim, e é o tempo que o ouvinte não sabia. Em {Foi ele quem viu}, o pronome {ele} vai para o fim porque é ele o que se destaca.

Isso vale para sujeito, objeto e adverbial: {Ao professor entreguei o livro} e {Entreguei o livro ao professor} são a mesma proposição, e a ordem decide qual dos três é a informação nova. O português tem três posições disponíveis para o objeto, e o grego também: a informação vai para onde o falante quer que o ouvinte olhe.

## A ambiguidade que a ordem resolve

Uma palavra isolada não decide nada, e é por isso que a ordem é conteúdo. Em {Vi o homem de longe}, o {de longe} pode modificar o verbo ({vi} de longe, ou seja, à distância) ou o substantivo ({o homem} que estava longe). São duas frases diferentes com as mesmas palavras.

A segunda leitura se resolve com {que}: {Vi o homem que estava longe}. A primeira, com um advérbio de lugar explícito: {Vi o homem à distância}. O texto bíblico aposta na ordem, e o que o tradutor precisa saber é qual das duas leituras o grego queria.

## A topicalização como parêntese

O que é antiguo e conhecido pode ser posto de lado, entre vírgulas, como um parêntese, e a informação principal continua no fim. {O homem, que era pobre, deu o livro} tira a pobreza para o lado, e o que é novo é a dádiva. O mesmo vale para o advérbio: {No terceiro dia, ele ressuscitou}.

É por isso que a posição dos demonstrativos importa tanto. {Isto} aponta para o que está sendo discutido agora, {isso} para o que já está no contexto da conversa, {aquilo} para o que está fora dela. E o pronome {tudo}, {nada}, {alguém} funciona do mesmo jeito: não aponta para fora da frase, aponta para o que já foi dito.

## É que, e o que ler

Há uma construção que o português popular usa muito e que o texto antigo usa pouco: {é que}. Em {É que eu não quis dizer isso}, o {é que} não liga sujeito a verbo: ele introduz a explicação depois que o resto da frase já está pronto. A regra é que o {é que} só aparece depois de uma frase que já se sustenta, e nunca no começo de uma explicação.

Em qualquer frase, pergunte: qual é a informação nova? Ela está no fim? E o que foi posto de lado, entre vírgulas?

Mateus 3.3 diz {preparai o caminho do Senhor, endireitai as suas veredas}: a imagem vai para o fim, e ela é a informação nova, porque o que o leitor já sabia era que havia um Senhor. O verbo fica no meio, e é a posição do substantivo que carrega a ênfase do versículo.`),
  vocab: [
    V('a topicalização', 'topicalização', 'a topicalização'),
    V('a informação nova', 'informação', 'a informação nova'),
    V('a ordem neutra', 'ordem', 'a ordem neutra'),
    V('um livro foi comprado', 'comprar', 'um livro foi comprado'),
    V('Ontem comprou-se um livro', 'comprar', 'ontem comprou-se um livro'),
    V('Foi ele quem viu', 'ver', 'foi ele quem viu'),
    V('o homem que estava longe', 'longe', 'o homem que estava longe'),
    V('à distância', 'distância', 'à distância'),
    V('isto', 'isto', 'isto'),
    V('isso', 'isso', 'isso'),
    V('aquilo', 'aquilo', 'aquilo'),
    V('os parênteses', 'parênteses', 'os parênteses'),
    V('é que', 'é que', 'é que'),
    V('o parêntese', 'parêntese', 'o parêntese'),
  ],
  rules: [
    { n: '§1', text: T('A ordem neutra do português é sujeito, verbo, objeto.') },
    { n: '§2', text: T('A informação nova vai para o fim: {ontem comprou-se um livro}.') },
    { n: '§3', text: T('O que já é conhecido pode ir entre vírgulas, como parêntese.') },
    {
      n: '§4',
      text: T(
        '{Isto} aponta para o debate atual, {isso} para o contexto, {aquilo} para fora dele.',
      ),
    },
    {
      n: '§5',
      text: T('{É que} só aparece depois de uma frase que já se sustenta, e nunca no começo.'),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'O grego e o hebraico marcam o foco com o caso e com a partícula, e o português marca com a posição. Por isso a tradução topicalizada em grego nem sempre aparece topicalizada em português.',
      ),
    },
    {
      label: T('Por que a ordem importa'),
      text: T(
        'A palavra isolada não decide nada: {vi o homem de longe} tem duas leituras. Quem lê só as palavras não sabe qual delas o texto quis, e a ordem é o que diz.',
      ),
    },
  ],
  examples: [
    { text: 'Um livro foi comprado.', gloss: T('Ordem neutra: o que é novo é o verbo.') },
    { text: 'Ontem comprou-se um livro.', gloss: T('Tempo topicalizado: o que é novo é o tempo.') },
    { text: 'Foi ele quem viu o homem.', gloss: T('O pronome topicalizado destaca o agente.') },
    {
      text: 'Entreguei o livro ao professor.',
      gloss: T('O objeto indireto no fim é o que é novo.'),
    },
    { text: 'Vi o homem de longe.', gloss: T('Duas leituras possíveis para as mesmas palavras.') },
    { text: 'Vi o homem que estava longe.', gloss: T('A ambiguidade resolvida com {que}.') },
    {
      text: 'O homem, que era pobre, deu o livro.',
      gloss: T('A pobreza vai entre vírgulas: é parêntese.'),
    },
    {
      text: 'É que eu não quis dizer isso.',
      gloss: T('O {é que} introduz a explicação depois da frase.'),
    },
  ],
  tables: [
    {
      caption: T('Ordem neutra e ordem marcada'),
      head: ['Ordem', 'Frase', 'O que é novo'],
      rows: [
        ['neutra', 'comprou-se um livro', 'o ato de comprar'],
        ['topicalizada', 'ontem comprou-se um livro', 'o tempo'],
        ['topicalizada', 'comprou-se ontem o livro', 'o objeto'],
        ['topicalizada', 'foi ele quem comprou', 'o sujeito'],
      ],
    },
    {
      caption: T('Parênteses'),
      head: ['O que é antigo', 'Onde vai', 'Frase'],
      rows: [
        ['a pobreza do homem', 'entre vírgulas', 'o homem, que era pobre, deu o livro'],
        ['o tempo', 'no começo', 'no terceiro dia ele ressuscitou'],
        ['a qualidade', 'entre vírgulas', 'a lei, que era santa, foi lida'],
      ],
    },
    {
      caption: T('Os demonstrativos como ponteiros'),
      head: ['Pronome', 'Aponta para'],
      rows: [
        ['isto', 'o que se discute agora'],
        ['isso', 'o que já está no contexto'],
        ['aquilo', 'o que está fora da conversa'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em “ontem comprou-se um livro”, a informação nova é:'),
    options: [T('o tempo'), T('o verbo'), T('o sujeito'), T('o lugar')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('A informação nova vai sempre para o ______ da frase.'),
      answer: 'fim',
      hint: T('É a posição marcada do português.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase resolve a ambiguidade de {vi o homem de longe}?'),
      options: [
        T('vi o homem que estava longe'),
        T('vi o homem de longe ontem'),
        T('vi ontem o homem de longe'),
        T('vi o homem longe'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue o pronome ao que ele aponta.'),
      pairs: [
        { a: T('isto'), b: T('o que se discute agora') },
        { a: T('isso'), b: T('o que já está no contexto') },
        { a: T('aquilo'), b: T('o que está fora da conversa') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
};
