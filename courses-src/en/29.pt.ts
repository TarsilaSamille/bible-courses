import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('Numeral e contabilidade'),
  subtitle: T('two thousand people, both are, none of — o número como substantivo'),
  section: T('Numeral'),
  body: C(`## O número é substantivo, e por isso não pluraliza

Depois de um número cardinal o substantivo fica no **singular**: {two thousand people}, {three days}, {five hundred years}. A forma {two thousands people} está errada em qualquer registro, e a razão é que {thousand} já é plural por si só, como {million} e {billion}.

Um milhão de pessoas é {a million people}, e o valor é {a million} em todas as escalas: {a thousand}, {a million}, {a billion}. Com {one} é preciso cuidado: {one thousand} e {one million} obrigam o substantivo a singular, e o plural de {one} é {ones}, que só aparece como pronome ({the only ones who came}).

Mateus 18:22 na KJV põe o número no texto e o substantivo junto: {Seventy times seven}. São {seventy} e {seven} numerais cardinais, sem artigo e sem preposição entre eles, e a frase inteira é um numeral.

## Both, either e neither

Três palavras derivam o verbo no plural e por proximidade. {Both} indica dois e exige plural: {Both children are here}. {Either} indica um de dois e também exige plural: {Either answer is correct}. {Neither} é {not either} e segue a mesma regra: {Neither answer is correct}.

O erro do aluno de português é tratar {either} e {neither} como se fossem {um} e {nenhum}, que pedem singular. O teste é simples: se a palavra significa "todos os dois" ou "qualquer um dos dois", o sujeito é plural, venha de onde vier.

Quem traduz e escreve {neither answer is correct} está certo; quem escreve {neither answer are correct} está errado por uma palavra que parece {one} no plural.

## {All of}, {none of}, {some of}

Essas quatro expressões ligam um quantificador a um grupo indicado por {of} mais substantivo, e o grupo é que concorda: {all of the students are here}, {some of the water is bad}, {none of my friends came}.

Quando o grupo é {all}, {none} ou {both}, o verbo vai no plural. Quando é {some} ou {any}, o verbo concorda com o substantivo que vem depois de {of}: {some of the water is bad} e {some of the problems are difficult}.

É o único caso em que o verbo concorda com uma coisa que vem depois dele, e é por isso que a frase {all of the water is bad} soa estranha ao aluno e {all of the problems are difficult} soa natural.

## Medir e contar

O numeral mede comprimento, peso, volume e tempo em duas formas. A primeira usa um **adjetivo de medida** depois do número: {two metres tall}, {ten kilos heavy}, {three years old}. A segunda usa {of} mais a coisa contada: {ten kilos of flour}, {a cup of water}, {two litres of milk}.

A diferença é de classe: {tall} e {old} são adjetivos e medem; {flour} e {water} são substantivos e são contados. Com o adjetivo o substantivo some, e com o {of} ele aparece no singular depois da preposição.

{Two hours ago} é uma quarta forma: o tempo que passou se mede em relação com {ago}, e a concordância é com o substantivo que vem depois.`),
  vocab: [
    V('two thousand people', 'thousand', 'duas mil pessoas'),
    V('a million people', 'million', 'um milhão de pessoas'),
    V('one thousand', 'thousand', 'mil'),
    V('the only ones', 'one', 'os únicos'),
    V('both', 'both', 'ambos'),
    V('either', 'either', 'qualquer um dos dois'),
    V('neither', 'neither', 'nenhum dos dois'),
    V('all of', 'all', 'todos os'),
    V('none of', 'none', 'nenhum de'),
    V('some of', 'some', 'alguns de'),
    V('two metres tall', 'metre', 'dois metros de altura'),
    V('ten kilos of flour', 'kilo', 'dez quilos de farinha'),
    V('three years old', 'year', 'três anos de idade'),
    V('two hours ago', 'hour', 'duas horas atrás'),
    V('seventy times seven', 'times', 'setenta vezes sete'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Depois de um número cardinal o substantivo fica no singular: two thousand people, three days.',
      ),
    },
    {
      n: '2',
      text: T(
        'One, thousand, million e billion não pluralizam; o plural de one é ones, que só aparece como pronome.',
      ),
    },
    { n: '3', text: T('Both, either e neither exigem verbo no plural.') },
    {
      n: '4',
      text: T(
        'Com all of e none of o verbo é plural; com some of e any of ele concorda com o substantivo depois de of.',
      ),
    },
    {
      n: '5',
      text: T(
        'O numeral mede com adjetivo (two metres tall) ou com of mais substantivo (ten kilos of flour).',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'Mateus 18:22 traz seventy times seven: dois numerais cardinais sem artigo e sem preposição entre eles. O numeral é o substantivo, e substantivo no plural seria seven times.',
      ),
    },
    {
      label: T('Diagnóstico:'),
      text: T(
        'Se o aluno escreve neither answer are correct, o problema é que ele leu neither como "nenhum" e aplicou o singular do português.',
      ),
    },
  ],
  examples: [
    { text: '{two thousand people}', gloss: T('duas mil pessoas') },
    { text: '{three days}', gloss: T('três dias') },
    { text: '{a million people}', gloss: T('um milhão de pessoas') },
    { text: '{Both children are here}', gloss: T('as duas crianças estão aqui') },
    { text: '{Either answer is correct}', gloss: T('qualquer uma das respostas está certa') },
    { text: '{Neither answer is correct}', gloss: T('nenhuma das respostas está certa') },
    { text: '{all of the students are here}', gloss: T('todos os alunos estão aqui') },
    { text: '{some of the water is bad}', gloss: T('parte da água está ruim') },
    { text: '{two metres tall}', gloss: T('dois metros de altura') },
    { text: '{ten kilos of flour}', gloss: T('dez quilos de farinha') },
    { text: '{Seventy times seven}', gloss: T('setenta vezes sete') },
    { text: '{three years old}', gloss: T('três anos de idade') },
  ],
  tables: [
    {
      caption: T('Os números grandes'),
      head: [T('Número'), T('Forma'), T('Com substantivo')],
      rows: [
        ['{one}', T('não pluraliza'), '{one thousand people}'],
        ['{hundred}', T('não pluraliza'), '{five hundred years}'],
        ['{thousand}', T('não pluraliza'), '{two thousand people}'],
        ['{million}', T('não pluraliza'), '{a million dollars}'],
        ['{ones}', T('plural de one'), '{the only ones who came}'],
      ],
    },
    {
      caption: T('Determinantes e concordância do verbo'),
      head: [T('Palavra'), T('Verbo'), T('Exemplo')],
      rows: [
        ['{both}', T('plural'), '{both children are here}'],
        ['{either}', T('plural'), '{either answer is correct}'],
        ['{neither}', T('plural'), '{neither answer is correct}'],
        ['{all of}', T('plural'), '{all of the students are here}'],
        ['{some of}', T('o que vem depois de of'), '{some of the water is bad}'],
        ['{none of}', T('plural'), '{none of my friends came}'],
      ],
    },
    {
      caption: T('Medir e contar'),
      head: [T('Formato'), T('Classe da palavra final'), T('Exemplo')],
      rows: [
        [T('número + adjetivo'), T('adjetivo'), '{two metres tall}'],
        [T('número + of + substantivo'), T('substantivo'), '{ten kilos of flour}'],
        [T('número + período + ago'), T('substantivo'), '{two hours ago}'],
        [T('número + of + contável'), T('singular'), '{a cup of tea}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase está correta?'),
    options: [
      T('two thousands people'),
      T('two thousand people'),
      T('two thousands peoples'),
      T('two thousand peoples'),
    ],
    answer: 1,
    hint: T('Depois de um número o substantivo fica no singular.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Complete: '___ answer is correct.' (nenhuma das duas)"),
      answer: 'Neither',
    },
    { kind: 'fill', prompt: T("Complete a medida: 'ten kilos ___ flour'"), answer: 'of' },
    {
      kind: 'match',
      prompt: T('Ligue o quantificador à concordância do verbo.'),
      pairs: [
        { a: 'both', b: T('plural') },
        { a: 'either', b: T('plural') },
        { a: 'some of the water', b: T('singular') },
        { a: 'none of', b: T('plural') },
      ],
      answer: ['0-0', '1-0', '2-1', '3-0'],
    },
    {
      kind: 'choose',
      prompt: T('Qual frase está correta?'),
      options: [
        T('Neither answer are correct'),
        T('Neither answer is correct'),
        T('Neither answers are correct'),
        T('Neither answers is correct'),
      ],
      answer: 1,
    },
  ],
};
