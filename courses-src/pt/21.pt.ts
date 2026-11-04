import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  section: T('O artigo e o número'),
  title: T('O numeral'),
  subtitle: T('cinco pães, dois discípulos, e a meia dúzia que é feminina'),
  body: C(`## Cardinais: a contagem e o dinheiro

Os cardinais contam: {um}, {dois}, {três}, {quatro}, {cinco}, {dez}, {onze}, {dezasseis}, {vinte}, {cem}, {mil}. Depois do mil o português tem três escalas, e elas não são as mesmas em Portugal e no Brasil: um milhão são mil milhões em Portugal, e um bilhão são mil milhões no Brasil. Quem traduz número de população precisa saber de que lado está escrevendo.

O dinheiro tem uma contagem própria: {cinco reais} sem artigo, {cem reais}, {mil reais}. Para notas e moedas há ainda a forma contável, {uma nota de dois reais}, e a contagem por cédulas.

## Ordinais e o sufixo que salva

Os ordinais dizem posição: {primeiro}, {segundo}, {terceiro}, {quarto}, {quinto}, {décimo}, {vigésimo}, {centésimo}. A regra é dupla, e a segunda parte é a que salva: o numeral cardinal vira ordinal com o sufixo {-ésimo}, e quem não sabe a série completa pelo menos sabe a regra. {vinte} dá {vigésimo}, {cem} dá {centésimo}.

Os irregulares são poucos e vêm de cor: {segundo}, {quinto}, {nono}, {décimo}. O resto se constrói: {vigésimo primeiro} para o 21º, {centésimo décimo} para o 110º.

## Coletivos: o que conta por nome

Há numerais coletivos, e eles contam um grupo pelo nome do grupo: {um par de meias}, {uma dúzia de ovos}, {uma multidão de gente}, {uma fila de pessoas}, {um molho de louças}.

Eles trazem sempre o nome que segue, e é por isso que a partícula {de} é obrigatória: {um par de}, {uma dúzia de}, {uma fila de}. A concordância é com o nome do grupo, não com a coisa: {um par de meias} porque o par é masculino, {meia dúzia de ovos} porque meia dúzia é feminino, e é esse detalhe que quase todo mundo perde.

## Concordância e dinheiro

O numeral concorda com o substantivo: {os dois discípulos}, {as duas irmãs}, {os três livros}, {as três casas}. Com {um} e {uma} o artigo some: {um homem}, {uma casa}, e a forma indefinida passa a valer como artigo.

A contagem de dinheiro é o lugar em que o português economiza: {cinco reais}, {cem euros}, {mil dólares}, sem plural e sem artigo. Mas quando a coisa é contável e vem depois do número, o substantivo vai para o plural: {dois livros}, {três casas}.

## O que ler

Em qualquer número, pergunte: é cardinal ou ordinal? É coletivo, e qual é o nome do grupo? E o que vem depois está no plural?

João 6.9 opõe {cinco pães} e {dois peixes}: os dois são cardinais, os dois têm o substantivo no plural, e a diferença entre eles é o que a narrativa vai usar adiante. Um tradutor que escreve {cinco pão} já perdeu a contagem, e a contagem é o que o texto está contando.`),
  vocab: [
    V('um', 'um', 'um'),
    V('dois', 'dois', 'dois'),
    V('cinco', 'cinco', 'cinco'),
    V('dez', 'dez', 'dez'),
    V('vinte', 'vinte', 'vinte'),
    V('cem', 'cem', 'cem'),
    V('mil', 'mil', 'mil'),
    V('milhões', 'milhão', 'milhões'),
    V('o primeiro', 'primeiro', 'o primeiro'),
    V('o segundo', 'segundo', 'o segundo'),
    V('o décimo', 'décimo', 'o décimo'),
    V('um par de', 'par', 'um par de'),
    V('meia dúzia de', 'dúzia', 'meia dúzia de'),
    V('uma dúzia de', 'dúzia', 'uma dúzia de'),
    V('os dois discípulos', 'discípulo', 'os dois discípulos'),
  ],
  rules: [
    { n: '§1', text: T('O cardinal conta: {um}, {dois}, {cinco}, {dez}, {vinte}, {cem}, {mil}.') },
    {
      n: '§2',
      text: T(
        'O ordinal diz posição, e se forma em regra com o sufixo {-ésimo}: {vigésimo}, {centésimo}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'O numeral coletivo conta o grupo pelo nome do grupo e exige {de}: {uma dúzia de ovos}.',
      ),
    },
    {
      n: '§4',
      text: T('A concordância do coletivo é com o nome do grupo: {meia dúzia} é feminino.'),
    },
    {
      n: '§5',
      text: T('Dinheiro não vai para o plural: {cinco reais}, {cem euros}, {mil dólares}.'),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'O grego e o hebraico marcam o número no substantivo, não no numeral: é o próprio nome que vai para o plural. O português faz o contrário, e o tradutor precisa inverter o caminho.',
      ),
    },
    {
      label: T('Portugal × Brasil'),
      text: T(
        'Um milhão, um bilhão e um trilhão não significam a mesma coisa nos dois países. A tradução bíblica quase nunca envolve números grandes, e por isso a divergência raramente aparece.',
      ),
    },
  ],
  examples: [
    { text: 'Cinco pães e dois peixes.', gloss: T('Dois cardinais, dois plurales.') },
    { text: 'Os dois discípulos partiram.', gloss: T('O numeral concorda com {discípulos}.') },
    { text: 'As duas irmãs ficaram.', gloss: T('Feminino plural por causa de {irmãs}.') },
    { text: 'Uma dúzia de ovos.', gloss: T('Coletivo: o nome do grupo é {dúzia}, feminino.') },
    { text: 'Meia dúzia de ovos.', gloss: T('Coletivo com {meia}: ainda feminino.') },
    { text: 'O décimo dia.', gloss: T('Ordinal regular, com o sufixo {-ésimo}.') },
    { text: 'O centésimo salmo.', gloss: T('{cem} mais {-ésimo}.') },
    { text: 'Cem reais na mesa.', gloss: T('Dinheiro: sem artigo e sem plural.') },
  ],
  tables: [
    {
      caption: T('Cardinais'),
      head: ['Número', 'Cardinal', 'Observação'],
      rows: [
        ['1', 'um, uma', 'o artigo indefinido absorve o artigo'],
        ['2', 'dois, duas', 'o substantivo vai ao plural'],
        ['5', 'cinco', 'idem'],
        ['16', 'dezasseis', 'prefixo dez- mais seis'],
        ['20', 'vinte', 'vinte e um'],
        ['100', 'cem', 'cem mil'],
        ['1000', 'mil', 'mil e um'],
      ],
    },
    {
      caption: T('Ordinais'),
      head: ['Posição', 'Ordinal', 'Como se forma'],
      rows: [
        ['1º', 'primeiro', 'irregular'],
        ['2º', 'segundo', 'irregular'],
        ['3º', 'terceiro', 'irregular'],
        ['5º', 'quinto', 'irregular'],
        ['10º', 'décimo', 'dez + ésimo'],
        ['20º', 'vigésimo', 'vinte + ésimo'],
        ['100º', 'centésimo', 'cem + ésimo'],
      ],
    },
    {
      caption: T('Coletivos e contagem de dinheiro'),
      head: ['Construção', 'Concordância', 'Exemplo'],
      rows: [
        ['um par de', 'masculino', 'um par de meias'],
        ['meia dúzia de', 'feminino', 'meia dúzia de ovos'],
        ['uma dúzia de', 'feminino', 'uma dúzia de ovos'],
        ['numeral + dinheiro', 'sem plural', 'cinco reais, cem euros'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é o plural correto?'),
    options: [
      T('os dois discípulos'),
      T('os dois discípulo'),
      T('os dois discipulo'),
      T('o dois discípulos'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{meia dúzia} é ______, por isso se diz meia dúzia de ovos.'),
      answer: 'feminino',
      hint: T('A concordância é com o nome do grupo.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual construção está correta com dinheiro?'),
      options: [T('cinco reais'), T('cinco reaes'), T('os cinco reaes'), T('cinco de reais')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue o cardinal ao ordinal.'),
      pairs: [
        { a: T('cinco'), b: T('quinto') },
        { a: T('dez'), b: T('décimo') },
        { a: T('vinte'), b: T('vigésimo') },
        { a: T('cem'), b: T('centésimo') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
