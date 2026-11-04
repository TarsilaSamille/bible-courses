import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  title: T('O substantivo: contável e não contável'),
  subtitle: T('information, advice, furniture — a fronteira que o idioma decide'),
  section: T('Nome'),
  body: C(`## A fronteira é do idioma, não da lógica

{Information} é contável em quase todo o português de rua: "uma informação importante", "três informações". Em inglês {information} não tem plural, e {an information} não existe. O mesmo vale para {advice}, {furniture}, {research}, {evidence}, {luggage} e {progress}. Quem traduz do português escreve {many informations} sem notar que está contando, em uma língua, uma coisa que a outra não conta.

A regra cabe numa linha: **contável** é o substantivo que o inglês marca com {a} ou {an} no singular e pluraliza no plural; **não contável** é o que se mede, não se conta. A pergunta que decide é {How many}, e a da massa é {How much}.

Gênesis 1:1 na KJV traz {heaven and earth}: duas massas, sem artigo e sem plural. O português do mesmo versículo diria "o céu e a terra", e o versículo seguinte mostra que o contexto vizinho traz artigo e plural à vontade; a ausência nestas duas palavras não é omissão, é gramática.

## O par que resolve

Quando o substantivo é não contável e a frase exige uma unidade, o inglês usa **a piece of** mais o substantivo no singular: {a piece of advice}, {a piece of furniture}, {a piece of information}. O nome depois do {of} volta ao singular e não pluraliza, e {a piece of advices} é errado.

O mesmo mecanismo serve para outras medidas: {an hour of study}, {a cup of water}, {a kilo of flour}, {a piece of bread}. Com qualquer uma delas o verbo fica no singular, porque quem conta é a medida e não a coisa: {a piece of bread was on the table}.

Quando o substantivo já é contável o par é desnecessário: {a piece of book} não existe, e o que se quer dizer é {a book}.

## Onde a massa aparece na KJV

João 15:5 fala em {much fruit}, e a imagem é agrícola: fruta se conta em unidades, mas o quanto se diz com {how much}. {Water}, {bread}, {wine}, {oil}, {money} e {love} são da mesma família. São palavras que o português também não conta, e é por isso que o erro passa despercebido.

Um substantivo contável pode virar massa em outro sentido. {Work} é contável no plural ({the works of the Lord}) e não contável no singular ({I have a lot of work}). O contexto decide qual dos dois está em jogo, e a forma que aparece no texto diz qual.

## A pergunta que denuncia o erro

"How much information do you have?" e "How many informations do you have?" não são duas maneiras de dizer a mesma coisa. A primeira está correta; a segunda é o que o aluno de português produz por generalização, e aparece em placas e em formulários.

Quando o substantivo é massa, {a piece of} salva a frase em qualquer posição, e {an item of}, {a unit of} e {a piece of} fazem o mesmo trabalho em registros mais formais. A correção é sempre a mesma: **medir a massa em vez de contá-la**.`),
  vocab: [
    V('information', 'information', 'informação'),
    V('advice', 'advice', 'conselho'),
    V('furniture', 'furniture', 'mobiliário'),
    V('research', 'research', 'pesquisa'),
    V('evidence', 'evidence', 'evidência'),
    V('luggage', 'luggage', 'bagagem'),
    V('progress', 'progress', 'progresso'),
    V('knowledge', 'knowledge', 'conhecimento'),
    V('a piece of', 'piece', 'um pedaço de'),
    V('piece of advice', 'piece', 'um conselho'),
    V('an hour of', 'hour', 'uma hora de'),
    V('how much', 'how much', 'quanto (massa)'),
    V('how many', 'how many', 'quantos (contagem)'),
    V('countable', 'countable', 'contável'),
    V('uncountable', 'uncountable', 'não contável'),
    V('water', 'water', 'água'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Um substantivo não contável nunca recebe plural em {s}: many informations, three advices e an information estão errados.',
      ),
    },
    {
      n: '2',
      text: T(
        'O critério é a pergunta: How many espera contagem, How much espera massa. Cada substantivo responde a uma delas.',
      ),
    },
    {
      n: '3',
      text: T(
        'Quando a frase pede uma unidade de uma massa, o inglês insere uma medida (a piece of, an hour of) e põe o nome no singular.',
      ),
    },
    {
      n: '4',
      text: T('Com uma medida, o verbo concorda com a medida: a piece of bread was on the table.'),
    },
    {
      n: '5',
      text: T(
        'Algumas palavras mudam de classe segundo o contexto: work no plural significa obras; work como massa significa trabalho.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'Gênesis 1:1 traz heaven and earth sem artigo e sem plural. Nenhuma das duas palavras tem contagem nessa forma, e o versículo não omite nada.',
      ),
    },
    {
      label: T('Erro comum:'),
      text: T(
        'How many informations? não é uma pergunta difícil em inglês; é a tradução mecânica de uma pergunta que o português faz e o inglês não.',
      ),
    },
  ],
  examples: [
    { text: '{a piece of advice}', gloss: T('um conselho (a massa medida)') },
    { text: '{an information}', gloss: T('uma informação — errado: information é massa') },
    { text: '{He gave me some good advice}', gloss: T('Ele me deu um bom conselho') },
    { text: '{The furniture is old}', gloss: T('O mobiliário é antigo') },
    { text: '{How much information do you have}', gloss: T('Quanta informação você tem') },
    { text: '{two kilos of flour}', gloss: T('dois quilos de farinha') },
    { text: '{a piece of bread}', gloss: T('um pedaço de pão') },
    { text: '{the works of the Lord}', gloss: T('as obras do Senhor — aqui work é contável') },
    { text: '{much fruit}', gloss: T('muito fruto') },
    { text: '{three pieces of bread}', gloss: T('três pedaços de pão') },
  ],
  tables: [
    {
      caption: T('Contável × não contável'),
      head: [T('Classe'), T('Marca'), T('Pergunta'), T('Exemplos')],
      rows: [
        [T('contável'), T('a/an + plural em s'), '{How many}', T('book, chair, city, sin')],
        [
          T('não contável'),
          T('sem artigo e sem plural'),
          '{How much}',
          T('information, advice, water, love'),
        ],
        [T('medido'), T('a piece of + singular'), T('—'), T('a piece of bread')],
      ],
    },
    {
      caption: T('Medidas que substituem o plural'),
      head: [T('Medida'), T('Exemplo'), T('Concordância do verbo')],
      rows: [
        ['{a piece of}', '{a piece of advice}', T('singular')],
        ['{an hour of}', '{an hour of silence}', T('singular')],
        ['{a cup of}', '{a cup of water}', T('singular')],
        ['{a kilo of}', '{a kilo of flour}', T('singular')],
        ['{a bottle of}', '{a bottle of wine}', T('singular')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual das frases está correta?'),
    options: [
      T('He gave me a good advice'),
      T('He gave me a piece of good advice'),
      T('He gave me many advices'),
      T('He gave me two advices'),
    ],
    answer: 1,
    hint: T('Advice é massa; para contar, use a piece of.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Complete: 'I have some ___ to tell you.' (conselho)"),
      answer: 'advice',
    },
    {
      kind: 'fill',
      prompt: T("Torne contável: 'I need some information' → 'I need a ___'"),
      answer: 'piece of information',
    },
    {
      kind: 'match',
      prompt: T('Classifique o substantivo.'),
      pairs: [
        { a: 'advice', b: T('não contável') },
        { a: 'city', b: T('contável') },
        { a: 'furniture', b: T('não contável') },
        { a: 'sin', b: T('contável') },
      ],
      answer: ['0-0', '1-1', '2-0', '3-1'],
    },
    {
      kind: 'choose',
      prompt: T('Qual pergunta está correta para um substantivo contável?'),
      options: [
        T('How much information do you have?'),
        T('How many informations do you have?'),
        T('How many information do you have?'),
        T('How much informations do you have?'),
      ],
      answer: 2,
    },
  ],
};
