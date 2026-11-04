import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  section: T('O substantivo'),
  title: T('O plural: as duas regras e as exceções'),
  subtitle: T('irmãos, mãos, pães, e o réu que vira réus'),
  body: C(`## A regra geral

O plural troca a terminação: {-o} vira {-os}, {-a} vira {-as}, {-ão} vira {-ões}, {-l} vira {-is}. Funciona em quase tudo: {livro/livros}, {casa/casas}, {irmão/irmãos}, {animal/animais}, {país/países}.

Some-se uma segunda regra, curta: substantivos em {-r} e {-z} perdem essa letra no plural. {homem/homens}, {rapaz/rapazes}, {luz/luzes}.

## Os três grupos do {-ão}

O {-ão} é o único caso em que a regra geral não basta. Ele se divide em três grupos, e é preciso saber de qual grupo é cada nome. O primeiro faz {-ãos}: {mão/mãos}, {órgão/órgãos}, {coração/corações}, {órfão/órfãos}, {bênção/bênçãos}. O segundo faz {-ães}: {pão/pães}, {cã/cães}, {alemão/alemães}, {capitão/capitães}, {sacristão/sacristães}. O terceiro faz {-ões}: {irmão/irmãos}, {avião/aviões}, {limão/limões}, {tijolo/tijolos}, {algodão/algodões}.

A pista que separa os dois primeiros do terceiro não é a terminação: é o que o nome designa. {-ãos} e {-ães} designam quase sempre coisas e partes do corpo. {-ões} designam quase sempre pessoas e agentes: {irmão}, {cristão}, {comandante}. Quem não sabe de qual grupo é um nome, pergunta se aquilo é pessoa ou coisa, e a maior parte dos casos se resolve assim.

## O plural que não troca nada

Há um grupo em que o plural não acrescenta letra nenhuma. O mais conhecido é {o réu}, cujo plural é {os réus}: sem {s}, com o {u} intacto, exatamente como no singular. {O rei} dá {os reis} e {o pai} dá {os pais}, em que o plural troca o {-i} do singular por {-eis}.

Outro grupo troca a vogal e não a terminação: {o homem} dá {os homens}, e {o boi} dá {os bois}.

O que isso custa na leitura é pouco e o que rende é muito. As {bênçãos} de um salmo, os {irmãos} de uma comunidade e os {homens} de um povo são três plurais do mesmo {-ão} ou quase, e o grego decide qual deles usar, porque cada um corresponde a uma forma grega diferente.

## O que ler

Em qualquer substantivo que já apareceu no singular, pergunte: terminando em {-ão}, de qual grupo é? E sem {-ão}, o plural troca a terminação, troca a vogal ou não troca nada? Com a resposta, o plural está fechado, e o texto pode ser lido sem voltar ao substantivo para conferir.`),
  vocab: [
    V('o irmão', 'irmão', 'o irmão'),
    V('os irmãos', 'irmão', 'os irmãos'),
    V('a mão', 'mão', 'a mão'),
    V('as mãos', 'mão', 'as mãos'),
    V('o pão', 'pão', 'o pão'),
    V('os pães', 'pão', 'os pães'),
    V('o órgão', 'órgão', 'o órgão'),
    V('a bênção', 'bênção', 'a bênção'),
    V('as bênçãos', 'bênção', 'as bênçãos'),
    V('o homem', 'homem', 'o homem'),
    V('os homens', 'homem', 'os homens'),
    V('o réu', 'réu', 'o réu'),
    V('os réus', 'réu', 'os réus'),
    V('o plural', 'plural', 'o plural'),
    V('a terminação', 'terminação', 'a terminação'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'O plural regular troca a terminação: {-o} em {-os}, {-a} em {-as}, {-ão} em {-ões}, {-l} em {-is}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Substantivos em {-r} e {-z} perdem essa letra no plural: {homem/homens}, {luz/luzes}.',
      ),
    },
    {
      n: '§3',
      text: T('O {-ão} se divide em três grupos, e o plural sai em {-ãos}, {-ães} ou {-ões}.'),
    },
    {
      n: '§4',
      text: T(
        '{-ãos} e {-ães} designam em geral coisas e partes do corpo; {-ões} designa em geral pessoas e agentes.',
      ),
    },
    {
      n: '§5',
      text: T('Alguns plurais não acrescentam nada: {réu/reus}, {rei/reis}, {mês/meses}.'),
    },
  ],
  notes: [
    {
      label: T('Grego × português'),
      text: T(
        'O grego também marca o plural, mas na terminação: {παῖς} e {παῖδες}. O português costuma acrescentar {-s}, e é por isso que uma tradução literal nem sempre traz o plural grego na forma portuguesa.',
      ),
    },
    {
      label: T('Registro'),
      text: T(
        'Em Portugal e no Brasil os três grupos do {-ão} são os mesmos; o que varia é o uso em nomes raros, e aí o dicionário da edição decide.',
      ),
    },
  ],
  examples: [
    { text: 'Viver em união como irmãos.', gloss: T('{-ão} do terceiro grupo: {irmãos}.') },
    { text: 'As mãos estavam limpas.', gloss: T('{-ão} do primeiro grupo: {mãos}.') },
    { text: 'Partiu o pão em dois.', gloss: T('{-ão} do segundo grupo: {pães}.') },
    { text: 'O corpo e seus órgãos.', gloss: T('{-ãos}, e o plural não avisa nada.') },
    { text: 'Recebeu as bênçãos do Senhor.', gloss: T('Plural de {bênção}, frequente em salmos.') },
    { text: 'Os homens foram chamados.', gloss: T('Troca a vogal, não a terminação.') },
    { text: 'Os réus esperavam o julgamento.', gloss: T('Plural sem {s}: {réus}.') },
    { text: 'Percorreu todos os países.', gloss: T('{-l} vira {-is}: {países}.') },
  ],
  tables: [
    {
      caption: T('Os três grupos do {-ão}'),
      head: ['Grupo', 'Plural', 'Exemplos'],
      rows: [
        ['-ãos', 'coisas e partes do corpo', 'mão/mãos, órgão/órgãos, bênção/bênçãos'],
        ['-ães', 'coisas e gentílicos', 'pão/pães, cã/cães, alemão/alemães'],
        ['-ões', 'pessoas e agentes', 'irmão/irmãos, avião/aviões, limão/limões'],
      ],
    },
    {
      caption: T('Plurais que não trocam a terminação'),
      head: ['Singular', 'Plural', 'O que acontece'],
      rows: [
        ['o réu', 'os réus', 'nada muda'],
        ['o rei', 'os reis', 'o -i vira -eis'],
        ['o mês', 'os meses', 'cai o -s'],
      ],
    },
    {
      caption: T('Terminações que mudam no plural'),
      head: ['Terminação', 'Plural', 'Exemplos'],
      rows: [
        ['-l', '-is', 'país/países, animal/animais'],
        ['-r', 'sem r', 'homem/homens, flor/flores'],
        ['-z', 'sem z', 'luz/luzes, rapaz/rapazes'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é o plural de {o irmão}?'),
    options: [T('os irmãos'), T('os irmãos'), T('os irmãos com s'), T('os mãos')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('O plural de {o pão} é os ______.'),
      answer: 'pães',
      hint: T('Segundo grupo do {-ão}.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual destes plurais não troca a terminação?'),
      options: [T('os réus'), T('os reis'), T('os meses'), T('os homens')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue o singular ao plural.'),
      pairs: [
        { a: T('o irmão'), b: T('os irmãos') },
        { a: T('a mão'), b: T('as mãos') },
        { a: T('o pão'), b: T('os pães') },
        { a: T('o réu'), b: T('os réus') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
