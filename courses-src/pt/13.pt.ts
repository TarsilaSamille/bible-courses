import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  section: T('O substantivo'),
  title: T('O substantivo: gênero e formação'),
  subtitle: T('o problema, a mão, e por que a terminação não decide'),
  body: C(`## O gênero não está na terminação

O gênero do substantivo português é **lexical**: cada nome tem um sexo que o dicionário registra, e a terminação apenas concorda com ele. {o problema} é masculino apesar do {-a}, {a mão} é feminino apesar do {-ão}, {o dia} e {o mapa} são masculino sem nenhum sinal, e {a foto} é feminino com um sinal fraco.

A regra do {-o} e do {-a} serve para a maioria dos casos, e por isso funciona na leitura corrente. Ela falha justamente onde o texto mora: {o Verbo} é masculino, {o livro} é masculino, {o pão} é masculino, e nenhum deles entrega o gênero pela terminação.

## Os três recursos que marcam o gênero

O texto diz o gênero três vezes, e nenhuma das três exige dicionário. O **artigo** é o primeiro, e vale na primeira ocorrência: {o} ou {a}. O **sufixo** é o segundo, quando existe, porque {-ção} e {-dade} chegam com o gênero embutido. E a **concordância** é a terceira, e a mais forte das três, porque vem de longe: um adjetivo, um particípio ou um verbo flexionado que concorda com o substantivo provam o gênero mesmo que a frase esteja a dez palavras de distância.

Em Mt 7.25, {a casa não caiu} e {aquela casa não caiu} repetem verbo e substantivo: o gênero está no verbo, e quem leu o artigo {a} não precisou dele para nada.

## Os pares que nenhum sinal resolve

Há pares em que nada na palavra ajuda. {o coma} e {a coma} são o mesmo conjunto de letras: um é o estado em que a pessoa está, o outro é a unidade de massa, e o gênero é o único sinal disponível. {o homem} e {a mulher} são o par mais conhecido, e nem a terminação nem o número resolvem: é o gênero que separa os dois nomes. O mesmo acontece em {o animal} e {a fêmea}, e em {o irmão} e {a irmã}.

Os sufixos também mentem: {-ário} é masculino em {o cardápio} e {o vocabulário}, e feminino em {a enciclopédia} e {a livraria}. E {-ão} não diz nada sobre o gênero, já que {o coração}, {o órgão}, {a mão} e {a multidão} convivem na mesma página.

Quando nenhum sinal ajuda, o contexto semântico decide: ninguém hesita diante de {o dia} ou {a noite}, porque o significado já traz o gênero.

## O que ler

Em qualquer substantivo, pergunte: o artigo diz o gênero? O sufixo, quando existe, promete o mesmo? E o adjetivo, o particípio ou o verbo mais adiante confirma? Três respostas coincidentes fecham o gênero sem dicionário, e é assim que se lê um capítulo inteiro sem parar em cada nome.

Em João 1.1, {o Verbo} é masculino porque λόγος é masculino no grego; {a Palavra} é uma escolha de tradutor, legítima, que troca o gênero do original pelo gênero da palavra que usa. É a escolha que precisa ser vista, e não deixada passar.`),
  vocab: [
    V('o problema', 'problema', 'o problema (masculino, apesar do -a)'),
    V('a mão', 'mão', 'a mão (feminino, apesar do -ão)'),
    V('o dia', 'dia', 'o dia'),
    V('o mapa', 'mapa', 'o mapa'),
    V('a foto', 'foto', 'a foto'),
    V('o substantivo', 'substantivo', 'o substantivo'),
    V('o gênero', 'gênero', 'o gênero'),
    V('a terminação', 'terminação', 'a terminação'),
    V('o artigo', 'artigo', 'o artigo'),
    V('o sufixo', 'sufixo', 'o sufixo'),
    V('a concordância', 'concordância', 'a concordância'),
    V('o adjetivo', 'adjetivo', 'o adjetivo'),
    V('o Verbo', 'Verbo', 'o Verbo'),
    V('a palavra', 'palavra', 'a palavra'),
  ],
  rules: [
    { n: '§1', text: T('O gênero do substantivo é lexical: o sufixo sugere, mas não decide.') },
    {
      n: '§2',
      text: T(
        '{-dade}, {-ção}, {-mento}, {-ura} e {-ência} formam quase sempre femininos, e servem para deduzir o gênero de um nome novo.',
      ),
    },
    { n: '§3', text: T('{-or}, {-eiro}, {-ista} e {-ante} formam quase sempre masculinos.') },
    {
      n: '§4',
      text: T(
        'O artigo e a concordância com adjetivo, particípio ou verbo provam o gênero dentro do próprio texto.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Na tradução o gênero segue o original: λόγος é masculino, e por isso se escreve {o Verbo}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'João 1.1 traz {o Verbo} no masculino, que é o mais fiel ao grego. {a Palavra} não é erro: é uma escolha que troca o gênero do original pelo gênero da palavra escolhida.',
      ),
    },
    {
      label: T('Lexical × morfológico'),
      text: T(
        'O latim flexiona o adjetivo em três terminações para um só gênero ({bonus}, {bona}, {bonum}). O português flexiona em duas ({bom}, {boa}), e o substantivo fica com o gênero guardado no dicionário.',
      ),
    },
  ],
  examples: [
    {
      text: 'O Verbo se fez carne.',
      gloss: T('João 1.14: masculino por concordância e por herança do grego.'),
    },
    { text: 'Deus amou o mundo.', gloss: T('{o mundo} é masculino sem sinal na terminação.') },
    { text: 'A mão tremia.', gloss: T('Feminino que o {-ão} não anuncia.') },
    {
      text: 'O mapa estava dobrado.',
      gloss: T('Masculino confirmado pela concordância com {dobrado}.'),
    },
    { text: 'A casa não caiu.', gloss: T('Mt 7.25: o gênero vem do verbo, longe do substantivo.') },
    {
      text: 'A palavra permaneceu.',
      gloss: T('Feminino lexical; o grego correspondente é masculino.'),
    },
    { text: 'Os problemas crescem.', gloss: T('O artigo {os} resolve o gênero do plural.') },
    {
      text: 'Uma fotografia nova.',
      gloss: T('O {-a} concorda com o gênero; se não concordasse, o resto manda.'),
    },
  ],
  tables: [
    {
      caption: T('Sufixos que prometem feminino'),
      head: ['Sufixo', 'Exemplos'],
      rows: [
        ['-dade', 'liberdade, bondade, verdade'],
        ['-ção', 'salvação, criação, tradição'],
        ['-mento', 'movimento, casamento, fundamento'],
      ],
    },
    {
      caption: T('Sufixos que prometem masculino'),
      head: ['Sufixo', 'Exemplos'],
      rows: [
        ['-or', 'cantor, tradutor, Senhor'],
        ['-eiro', 'primeiro, brasileiro, padeiro'],
        ['-ista', 'cristiano, batista, romancista'],
      ],
    },
    {
      caption: T('Os três recursos'),
      head: ['Recurso', 'Exemplo', 'Força'],
      rows: [
        ['artigo', 'o problema', 'forte'],
        ['sufixo', 'a salvação', 'média'],
        ['concordância', 'caiu com a casa', 'decisiva'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual destes substantivos é feminino?'),
    options: [T('a mão'), T('o problema'), T('o mapa'), T('o dia')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('O sufixo {-ção} forma substantivos ______.'),
      answer: 'femininos',
      hint: T('Compare {salvação} com {tradutor}.'),
    },
    {
      kind: 'choose',
      prompt: T('Por que João 1.1 traduz λόγος por {o Verbo} e não por {a Palavra}?'),
      options: [
        T('λόγος é masculino no grego'),
        T('o português antigo não tinha gênero'),
        T('o grego não distingue gênero'),
        T('a Almeida traduz palavra por palavra'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue o sufixo ao gênero que ele sugere.'),
      pairs: [
        { a: T('-dade'), b: T('feminino') },
        { a: T('-or'), b: T('masculino') },
        { a: T('-mento'), b: T('feminino') },
        { a: T('-ista'), b: T('masculino') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
