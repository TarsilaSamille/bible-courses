import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  section: T('Leitura'),
  title: T('Leitura: o Salmo 23 na tradução literal'),
  subtitle: T('apacentará, pastorear-me-á, e o que cada flexão carrega'),
  body: C(`## O salmo inteiro

O Salmo 23 na Almeida tem seis versículos e vinte e um verbos. É pouco texto, e é o suficiente para ver o português bíblico funcionando: {O SENHOR é o meu pastor; nada me faltará. Descansará em lugares de delícias; pastorear-me-á. Ainda que andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; o teu cajado e o teu bastão me-console. Tu preparas diante de mim uma mesa na presença dos meus adversários; ungiste com óleo a minha cabeça; o meu cálice transborda. Certamente que o bem e a misericórdia me seguirão todos os dias da minha vida; e habitarei na casa do SENHOR por longos dias.}

Quem lê esse texto num português de hoje não reconhece metade dos verbos. E o motivo não é a dificuldade da língua: é que a flexão biblical é mais antiga.

## O tempo de cada verbo

Os verbos do salmo se distribuem em quatro séries, e cada série diz alguma coisa. O **presente** aparece em {é}, {estás} e {preparas}: é a cena, e o presente é o tempo da certeza. O **futuro** aparece em {Descansará}, {pastorear-me-á} e {seguirão}: são três fatos que o texto dá como certos. O **imperfeito** aparece em {andasse} e {temeria}: são duas ações que não acontecem. E o **pretérito perfeito** aparece em {ungiste}: uma ação feita, contada.

O verbo que abre a segunda parte, {Descansará}, é o mais interessante: é futuro pela forma e presente pelo sentido, porque o salmo está falando de uma vida inteira como se fosse um agora.

## O que a literalidade preserva

A tradução literal preserva três coisas que a tradução feita perde. A primeira é a negação genérica: {nada me faltará} não é {não vai faltar}, é {em nenhuma circunstância faltar}, e o grego usa uma negação que vale para toda a vida. A segunda é o subjuntivo de hipótese: {Ainda que andasse} é o imperfeito do subjuntivo, e é a forma que diz "mesmo que eu estivesse andando", não "mesmo que eu andasse ontem".

A terceira é a mesóclise: {pastorear-me-á}. O pronome {me} está entre o radical e a terminação, e quem não conhece a forma lê três palavras onde havia um verbo. Quem traduz por {me vai pastorear} fez o texto mais claro e perdeu o sinal de que a oração toda é um único verbo.

## O que ler

Em qualquer verbo de um texto bíblico, pergunte: é presente, futuro, perfeito ou subjuntivo? E a flexão está marcando tempo ou apenas som? E a forma é a que o português de hoje ainda usa?

O Salmo 23 é o exemplo mais limpo que existe para o que a flexão carrega. {É} e {Descansará} estão no mesmo versículo a seis palavras de distância, e nenhum dos dois é o tempo que um português de hoje escolheria. A literalidade não é antigalha: é o mapa da flexão que o texto usa.`),
  vocab: [
    V('o pastor', 'pastor', 'o pastor'),
    V('o SENHOR', 'SENHOR', 'o SENHOR'),
    V('Descansará', 'descansar', 'descansará'),
    V('apacentará', 'apacentar', 'apacentará'),
    V('pastorear-me-á', 'pastorear', 'pastorear-me-á'),
    V('andasse', 'andar', 'andasse'),
    V('temeria', 'temer', 'temeria'),
    V('estás', 'estar', 'estás'),
    V('preparas', 'preparar', 'preparas'),
    V('ungiste', 'ungir', 'ungiste'),
    V('transborda', 'transbordar', 'transborda'),
    V('seguirão', 'seguir', 'seguirão'),
    V('habitarei', 'habitar', 'habitarei'),
    V('o bem', 'bem', 'o bem'),
    V('a misericórdia', 'misericórdia', 'a misericórdia'),
    V('a casa do SENHOR', 'casa', 'a casa do SENHOR'),
  ],
  rules: [
    { n: '§1', text: T('O presente marca certeza: {é}, {estás}, {preparas}.') },
    {
      n: '§2',
      text: T('O futuro no salmo marca fato esperado: {Descansará}, {pastorear-me-á}, {seguirão}.'),
    },
    { n: '§3', text: T('O subjuntivo do passado marca hipótese: {andasse}, {temeria}.') },
    { n: '§4', text: T('O perfeito marca ação feita e contada: {ungiste}.') },
    {
      n: '§5',
      text: T(
        'A flexão bíblica é mais antiga que a do português de hoje, e é por isso que o texto antigo precisa ser lido com atenção.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'O {apacentará} e o {pastorear-me-á} são formas que o português de hoje não usa. Uma tradução que os moderniza parece mais fiel ao leitor e é menos fiel ao grego.',
      ),
    },
    {
      label: T('Preserve a flexão'),
      text: T(
        'A flexão antiga não é exagero: em grego, cada uma dessas formas é uma informação. Trocar {Descansará} por {descansa} muda o tempo do verbo e perde a fala.',
      ),
    },
  ],
  examples: [
    { text: 'O SENHOR é o meu pastor.', gloss: T('Presente: é o tempo da certeza.') },
    {
      text: 'Descansará em lugares de delícias.',
      gloss: T('Futuro: o texto dá o fato como certo.'),
    },
    { text: 'Ainda que andasse pelo vale.', gloss: T('Imperfeito do subjuntivo: hipótese.') },
    { text: 'Não temeria mal algum.', gloss: T('Imperfeito do condicional: hipótese negada.') },
    { text: 'Tu preparas diante de mim uma mesa.', gloss: T('Presente: a cena do versículo.') },
    { text: 'Ungiste com óleo a minha cabeça.', gloss: T('Pretérito perfeito: ação feita.') },
    { text: 'O meu cálice transborda.', gloss: T('Presente: o verbo descreve e não narra.') },
    { text: 'Habitarei na casa do SENHOR.', gloss: T('Futuro: o verbo fecha o salmo.') },
  ],
  tables: [
    {
      caption: T('Os verbos do salmo, por tempo'),
      head: ['Tempo', 'Verbos', 'O que marca'],
      rows: [
        ['presente', 'é, estás, preparas', 'certeza da cena'],
        ['futuro', 'Descansará, pastorear-me-á, seguirão', 'fato esperado como certo'],
        ['subjuntivo', 'andasse, temeria', 'hipótese'],
        ['perfeito', 'ungiste', 'ação feita e contada'],
        ['futuro', 'habitarei', 'o salmo fecha no futuro'],
      ],
    },
    {
      caption: T('Formas arcaicas'),
      head: ['Forma', 'Significado', 'Uso atual'],
      rows: [
        ['Descansará', 'descansará', 'em uso'],
        ['apacentará', 'pastoreará', 'arcaico'],
        ['pastorear-me-á', 'me pastoreará', 'arcaico'],
        ['ungiste', 'ungiste', 'em uso'],
      ],
    },
    {
      caption: T('O que a flexão carrega'),
      head: ['Série', 'O que diz', 'Exemplo'],
      rows: [
        ['negação genérica', 'nunca, em nenhum caso', 'nada me faltará'],
        ['hipótese', 'caso contrário, mesmo que', 'Ainda que andasse'],
        ['certeza', 'é assim, não pode ser diferente', 'é o meu pastor'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em “Ainda que andasse”, {andasse} está no:'),
    options: [T('subjuntivo do passado'), T('futuro'), T('perfeito'), T('presente do indicativo')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{Descansará} é um verbo no ______, com sentido de certeza.'),
      answer: 'futuro',
      hint: T('O texto dá o fato como certo.'),
    },
    {
      kind: 'choose',
      prompt: T('Em “nada me faltará”, a negação é:'),
      options: [T('genérica'), T('pontual'), T('interrogativa'), T('concessiva')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo ao seu tempo.'),
      pairs: [
        { a: T('é'), b: T('presente') },
        { a: T('Descansará'), b: T('futuro') },
        { a: T('andasse'), b: T('subjuntivo') },
        { a: T('ungiste'), b: T('perfeito') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
