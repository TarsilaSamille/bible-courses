import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  section: T('Números'),
  title: T('{百}, {千}, {萬} e a fração: a contagem por casas'),
  subtitle: T('O número Mandarin é lido por posição, e a quarta casa reinicia a contagem do zero'),
  body: C(`
## Cada casa vale dez vezes a anterior

O numeral Mandarin não é uma soma de parcelas: é uma lista de posições. Uma casa de unidades, uma de dezenas, uma de centenas, uma de milhares, e o nome da casa é ao mesmo tempo o número e a posição. {yì bǎi èr shí sān} é 123 porque o que está antes de {bǎi} vale cem, o que está antes de {shí} vale dez, e o que não tem nome nenhum vale um.

**As casas do Mandarin são {gè}, {shí}, {bǎi}, {qiān}, {wàn} e {yì}, e cada uma vale dez vezes a anterior.**

A consequência prática é que o número não se lê de trás para frente — ele se lê da esquerda para a direita, do maior para o menor, e essa ordem é o oposto do português em "cento e vinte e três". Quem traduz do português procura o "e" que não está lá: em Mandarin é {yì bǎi èr shí sān}, e a soma está implícita na posição.

O limite do Mandarin escrito é {yì}, cem milhões, e é também o fim do que uma pessoa aprende a ler sem esforço. Depois de {yì} a contagem continua em {wàn} {yì}, mas quase ninguém faz isso de cabeça. E o número não é lido dígito a dígito: é lido por grupos de quatro, e o que muda de grupo ganha o nome do grupo à frente.

## O zero que só existe quando há casa vazia

O {líng} é o caractere do zero, e ele não entra onde a gente esperaria. Não entra em {shí wǔ}, porque {shí} já ocupa a casa das dezenas. Entra quando uma casa no meio fica sem número: {yì bǎi líng wǔ} é 105, {yì qiān líng wǔ} é 1005, {wǔ qiān líng bǎi líng shí} é 5010.

**O {líng} entra no meio do número, e nunca no fim.** E ele só entra se a casa estiver mesmo vazia.

O caso do {shí} é o mais confuso, e vale por ser o mais comum. {shí} é ao mesmo tempo o número dez e o nome da casa das dezenas. Isso gera uma assimetria que o português não tem: quinze é {shí wǔ}, sem o {yī} na frente; cento e quinze é {yì bǎi yī shí wǔ}, com o {yī}. E vinte é {èr shí}, não {èr èr shí}, e cento e vinte é {yì bǎi èr shí}.

Por que o {yī} volta nos centos e não nos dezenas? Porque {shí} como casa não pode ficar sozinho: ele precisa de um número à frente. Nos centos e acima, {shí} já está dentro do número maior e não precisa de frente própria. A regra cabe num teste: se o {shí} é a primeira palavra do número, não leva {yī}; se vem depois de outro nome de casa, leva.

## {-分}: a fração, e o que a Bíblia usa no lugar dela

A fração do Mandarin é uma palavra só, feita de três peças: o total, {fēn} e a preposição {zhī}. A regra é de ordem, não de sentido.

**O total vem antes e a parte depois: {sān} {fēn} {zhī} {èr} são dois terços.** {sān fēn zhī èr} são dois terços, e não um terço.**

A ordem é a mesma da frase inglesa "três partes, das quais duas", e o oposto da do português. O substantivo da parte é {fèn}, e {bàn} é a metade. O que o Mandarin faz com frequência é repetir o total em vez de usar a fração: "metade" é {yī bàn}, não {èr fēn zhī yī}.

E aqui está o achado prático para a leitura: a Bíblia em Mandarin quase não precisa de fração, porque os números dela são medidas e não porções. Primeiro Reis 4:22 escreve {sān shí shēng} {miàn}, {liù shí shēng} {yóu}: "trinta medidas de farinha, sessenta de óleo". {shēng} é uma medida seca de volume, e {dǒu} são dez {shēng}. Um número seguido de medida é exato, e o Mandarin escrito não tem o "cerca de" nem o "mais ou menos" que o português empresta das outras línguas. Onde a Bíblia diz "trinta", ela quer dizer trinta.

## Um número sem vírgula e sem separador

O último problema é de leitura, não de gramática. {yì bǎi èr shí sān wàn sì qiān wǔ bǎi liù shí qī} é 1.234.567, escrito inteiro, sem vírgula, sem ponto, sem espaço. O leitor tem de inserir os grupos ele mesmo, e a inserção é feita de quatro em quatro a partir da direita: {yì bǎi èr shí sān} {wàn} {sì qiān wǔ bǎi liù shí qī}.

O gancho está em dois versículos que todo mundo já leu mal. Apocalipse 11:3 escreve {yī qiān èr bǎi liù shí}, 1260, e Apocalipse 13:18 escreve {liù bǎi liù shí liù}, 666. Nos dois casos o número tem no máximo quatro casas e nenhuma vírgula: em {liù bǎi liù shí liù} não há {líng} entre o {bǎi} e o {shí}, porque a casa das dezenas está ocupada. Quem procura o {líng} onde não há casa vazia encontra o número errado.

E a lógica é reversa: os números que a {和合本} escreve por extenso são sempre casas, nunca parcelas. Não existe "cento e sessenta e seis" no Mandarin: existe {liù bǎi liù shí liù}, e a leitura correta sai da posição, não da conjunção.`),
  vocab: [
    V('bǎi', '百', 'cem (bǎi)'),
    V('qiān', '千', 'mil (qiān)'),
    V('wàn', '万', 'dez mil; a casa que abre um novo grupo (wàn)'),
    V('yì (número)', '亿', 'cem milhões; dez mil vezes dez mil (yì)'),
    V('líng', '零', 'zero; a casa vazia no meio do número (líng)'),
    V('shí (casa)', '十', 'dez; ao mesmo tempo o nome da casa das dezenas (shí)'),
    V('fēn (fração)', '分', 'parte; depois do numeral, fração (fēn)'),
    V('fēnzhī', '分之', 'sobre: liga o total à parte (fēnzhī)'),
    V('sān fēn zhī èr', '三分之二', 'dois terços (sān fēn zhī èr)'),
    V('fèn', '份', 'a parte, a porção (fèn)'),
    V('shēng', '升', 'medida seca de volume; unidade exata (shēng)'),
    V('dǒu', '斗', 'medida seca; dez {shēng} (dǒu)'),
    V('shí wǔ', '十五', 'quinze (shí wǔ)'),
    V('liù bǎi liù shí liù', '六百六十六', 'seiscentos e sessenta e seis (liù bǎi liù shí liù)'),
    V(
      'yī qiān èr bǎi liù shí',
      '一千二百六十',
      'mil e duzentos e sessenta (yī qiān èr bǎi liù shí)',
    ),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'As casas são {gè}, {shí}, {bǎi}, {qiān}, {wàn} e {yì}, e cada uma vale dez vezes a anterior.',
      ),
    },
    {
      n: '2',
      text: T('O {líng} entra no meio do número, e nunca no fim: {yì bǎi líng wǔ} é 105.'),
    },
    {
      n: '3',
      text: T(
        '{shí} é ao mesmo tempo dez e o nome da casa: {shí wǔ} é quinze, {yì bǎi yī shí wǔ} é cento e quinze.',
      ),
    },
    {
      n: '4',
      text: T('Em {fēnzhī}, o total vem antes e a parte depois: {sān fēn zhī èr} são dois terços.'),
    },
    {
      n: '5',
      text: T(
        'Depois de {wàn} o Mandarin conta em grupos de quatro: {yì bǎi èr shí sān wàn sì qiān wǔ bǎi liù shí qī} é 1.234.567.',
      ),
    },
  ],
  notes: [
    {
      label: T('O número bíblico é exato'),
      text: T(
        'Um número seguido de medida em Mandarin não admite "cerca de" nem "mais ou menos". Primeiro Reis 4:22 escreve {sān shí shēng} e {liù shí shēng}, e o tradutor não tinha para onde colocar uma aproximação. Onde o português traduz "uns trinta", o Mandarin precisa de uma palavra a mais, e a {和合本} prefere escrever trinta mesmo.',
      ),
    },
    {
      label: T('Por que não há "e" no número'),
      text: T(
        'Cada nome de casa já carrega o seu valor. {yì bǎi èr shí sān} não precisa de {yī} antes do {shí} porque {shí} é casa, e não parcela; e não precisa de conjunção porque a soma está implícita na posição. Traduzir casa por casa e não palavra por palavra é o que resolve o número inteiro.',
      ),
    },
  ],
  examples: [
    {
      text: '六百六十六',
      gloss: T('liù bǎi liù shí liù — 666; sem {líng}, porque nenhuma casa está vazia (Ap 13:18)'),
    },
    {
      text: '一千二百六十',
      gloss: T('yī qiān èr bǎi liù shí — 1260; quatro casas, quatro nomes (Ap 11:3)'),
    },
    {
      text: '三十升麵，六十升油',
      gloss: T(
        'sān shí shēng miàn, liù shí shēng yóu — trinta medidas de farinha, sessenta de óleo (1 Reis 4:22): medida exata',
      ),
    },
    { text: '一分為二', gloss: T('yī fēn wéi èr — dividir um em dois: a operação, não a fração') },
    { text: '三分之二', gloss: T('sān fēn zhī èr — dois terços: o total vem primeiro') },
    { text: '一萬', gloss: T('yī wàn — dez mil: uma casa só, e o {yī} é obrigatório') },
    { text: '零', gloss: T('líng — zero; no número aparece sempre entre duas casas') },
  ],
  tables: [
    {
      caption: T('As seis casas'),
      head: [T('Casa'), T('Valor'), T('Escrita'), T('Leitura')],
      rows: [
        [T('{gè}'), T('1'), T('{sān} {gè}'), T('três')],
        [T('{shí}'), T('10'), T('{shí} {wǔ}'), T('quinze')],
        [T('{bǎi}'), T('100'), T('{liǎng} {bǎi}'), T('duzentos')],
        [T('{qiān}'), T('1.000'), T('{sān} {qiān}'), T('três mil')],
        [T('{wàn}'), T('10.000'), T('{wǔ} {wàn}'), T('cinquenta mil')],
        [T('{yì}'), T('100.000.000'), T('{yī} {yì}'), T('cem milhões')],
      ],
    },
    {
      caption: T('Onde entra o {líng}'),
      head: [T('Número'), T('Escrita'), T('Por que')],
      rows: [
        [T('105'), T('{yì} {bǎi} {líng} {wǔ}'), T('a casa das dezenas está vazia')],
        [T('1005'), T('{yì} {qiān} {líng} {wǔ}'), T('a casa das centenas está vazia')],
        [T('15'), T('{shí} {wǔ}'), T('{shí} já é a casa, e não leva {yī}')],
        [
          T('115'),
          T('{yì} {bǎi} {yī} {shí} {wǔ}'),
          T('a casa das dezenas é {shí}, e o {yī} volta'),
        ],
        [T('10.000'), T('{yī} {wàn}'), T('a casa seguinte já é {wàn}')],
      ],
    },
    {
      caption: T('Fração, metade e medida'),
      head: [T('Forma'), T('Se lê'), T('O que é')],
      rows: [
        [T('{sān} {fēn} {zhī} {èr}'), T('dois sobre três'), T('fração: o total vem primeiro')],
        [T('{bàn}'), T('meio'), T('a metade, com o {yī} explícito: {yī} {bàn}')],
        [T('{sān shí} {shēng}'), T('trinta medidas'), T('quantidade exata, nunca aproximada')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se escreve 105 em Mandarin?'),
    options: [
      T('{yì} {bǎi} {líng} {wǔ}'),
      T('{yì} {líng} {bǎi} {wǔ}'),
      T('{yī} {bǎi} {líng} {wǔ}'),
      T('{yì} {bǎi} {wǔ}'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o número 666 como a {和合本} escreve: 六百____六十六'),
      answer: '六',
    },
    {
      kind: 'match',
      prompt: T('Ligue o nome da casa ao valor'),
      pairs: [
        { a: T('{shí}'), b: T('dez') },
        { a: T('{bǎi}'), b: T('cem') },
        { a: T('{wàn}'), b: T('dez mil') },
        { a: T('{yì}'), b: T('cem milhões') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Em {三分之二}, o que é o dois?'),
      options: [
        T('a parte: são dois terços'),
        T('o total: são um terço'),
        T('o número de partes, e a fração é um terço'),
        T('a medida, e {fēn} é a unidade'),
      ],
      answer: 0,
    },
  ],
};
