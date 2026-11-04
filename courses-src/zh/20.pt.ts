import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  section: T('Números'),
  title: T('Tempo: anos, meses, dias e horas'),
  subtitle: T('O tempo em chinês é sempre número mais palavra — e a data vem na ordem invertida'),
  body: C(`
## Número mais palavra, sem artigo

Em português o tempo é um substantivo com artigo e com plural: "os três dias". Em chinês não há artigo nenhum, e o tempo é sempre número colado na palavra: {sān tiān} é "três dias", {liǎng nián} é "dois anos", {yī gè yuè} é "um mês". A palavra que vem depois é que faz o trabalho que em português fazem o artigo e o plural: {tiān} sozinho é "dia", e {sān tiān} é "três dias" sem nada ter mudado na palavra.

O que muda, e muito, é o que vem depois da expressão. "Três dias" e "três dias atrás" não são a mesma construção em nenhuma das duas línguas, mas em chinês o que se segue é uma palavra inteira, {yǐqián} ou {yǐhòu}, com o seu próprio tom, e não um pedaço de preposição colado no substantivo.

## O ordinal é um prefixo, não um adjetivo

Aqui está o contraste que mais derruba gente. Em português o ordinal **flexiona**: "terceiro dia", "décima seção", "primeiro ano", e o adjetivo muda de forma conforme o substantivo. No Mandarin não há nada que flexione. O ordinal é um **prefixo** colado ao número: {dì} + número + nome.

{dì sān tiān} é "o terceiro dia". {dì shí jié} é "a décima seção". {dì yī nián} é "o primeiro ano". O {dì} é sempre o mesmo, idêntico, quer o número seja um ou mil; o que muda é o substantivo, que não flexiona. E {dì sān} sozinho não é "terceiro": é o numeral em cards, e o nome do que é numerado é obrigatório depois.

A {和合本} usa isso o tempo todo nos capítulos e versículos: "{第}{十}{二}{節}" é literalmente "a décima segunda seção", e no corpo do texto as datas de rei aparecem em ordinal puro, Daniel 9:2, {dì yī nián Belsazar wáng}, "no primeiro ano do rei Belsazar".

## A data é ano-mês-dia, nunca dia-mês-ano

Este é o erro clássico de quem lê um calendário chinês pela primeira vez. A ordem é do **maior para o menor**: ano, depois mês, depois dia. {èr líng líng jiǔ nián shí yuè èr rì} é 2 de outubro de 2009, {nián} ano, {shí yuè} outubro, {èr rì} o segundo dia. Um português que traduz "2 de outubro de 2009" para "2009{年}10{月}2{日}" está certo; um que escreve "2009{年}2{月}10{日}" escreveu 10 de fevereiro sem querer.

O ano tem {nián} colado, o mês tem {yuè}, o dia tem {rì}. E o "de" do português não aparece: em 2009{年}10{月}2{日} não há nada que ligue o ano ao mês. Cada par é autossuficiente.

## Horas e minutos: {點} e {分}, não dois-pontos

A hora do dia também não é número mais dois-pontos. São **duas palavras**: {diǎn} para as horas e {fēn} para os minutos. {sān diǎn} é "três horas". {sān diǎn sān shí fēn} é "três horas e trinta", e {sān shí fēn} é "trinta minutos", não "meia hora", que em chinês é {bàn}: {sān diǎn bàn} é "três e meia".

O "meio" é sempre {bàn}, colocado depois da hora. Não existe {3:30} escrito com dois-pontos na fala: ninguém diz {sān diǎn sān shí fēn} quando {sān diǎn bàn} diz o mesmo em quatro caracteres em vez de oito.

A semana completa o quadro: {xīngqī} significa "semana" mas é usado para o dia da semana, numerado a partir da segunda, e {xīngqī yī} é segunda-feira, não domingo. A contagem é ocidental também: segunda é o dia um, domingo é o dia sete. {xīngqī rì} sem número é domingo, e isso já denuncia que o número é a informação.

## Antes, depois e o mês que passou

O tempo relativo é igual em quase tudo: {yǐqián} é "antes", {yǐhòu} é "depois", e as duas são palavras inteiras que fecham a frase depois do nome do tempo. Gênesis 7:4 tem {qī rì yǐhòu}, "depois de sete dias", com {qī rì} e {yǐhòu} lado a lado e nenhuma preposição entre os dois.

O que muda é o passado próximo, que precisa de um classificador, e aqui ele ganha sentido novo em vez de ser mera gramática. {shàng gè yuè} é "o mês passado", e o {gè} é o mesmo {gè} genérico de {个}, agora preso a {yuè}. {shàng} é "o de cima", "o anterior". Um ano passado é {shàng gè nián}, e a analogia é direta: {gè} é o que segura a palavra de tempo e a transforma em "aquele mês".

E o Mandarin não diz "o mês passado" como uma palavra única: diz "o mês" e põe {shàng} na frente. É o mesmo mecanismo de {bù} e {méi}: o tempo relativo mora na partícula, não no substantivo.`),
  vocab: [
    V('nián', '年', 'ano (nián)'),
    V('yuè', '月', 'mês (yuè)'),
    V('rì', '日', 'dia (rì)'),
    V('dì', '第', 'prefixo de ordinal (dì): o terceiro dia'),
    V('xīngqī', '星期', 'semana; usado para o dia da semana (xīngqī)'),
    V('diǎn', '点', 'hora do dia (diǎn)'),
    V('fēn', '分', 'minuto (fēn)'),
    V('bàn', '半', 'metade, meia (bàn)'),
  ],
  rules: [
    { n: '1', text: T('Tempo é sempre número + palavra, sem artigo: {sān tiān} = "três dias".') },
    {
      n: '2',
      text: T(
        'Ordinal é {dì} + número + nome: {dì sān tiān} = "o terceiro dia". O substantivo não flexiona.',
      ),
    },
    {
      n: '3',
      text: T(
        'A data é ano-mês-dia: {2009 nián 10 yuè 2 rì} é 2 de outubro de 2009, nunca dia-mês-ano.',
      ),
    },
    {
      n: '4',
      text: T(
        'Hora é {diǎn} e minuto é {fēn} — nunca dois-pontos: {sān diǎn bàn} = "três e meia".',
      ),
    },
    {
      n: '5',
      text: T(
        '{yǐqián} e {yǐhòu} são palavras inteiras depois do tempo: {qī rì yǐhòu} = "depois de sete dias".',
      ),
    },
  ],
  notes: [
    {
      label: T('O "meio" vai depois, e é {bàn}'),
      text: T(
        '{bàn} significa "metade" e se junta à hora: {bàn} {gè} {xiǎoshí} é "meia hora", {bàn} {nián} é "meio ano". Nunca antes, como em português.',
      ),
    },
    {
      label: T('{星}{期}{一} é segunda, não domingo'),
      text: T(
        'A semana é numerada a partir da segunda, como no calendário ocidental: {xīngqī yī} é segunda-feira e {xīngqī liù} é sábado. {xīngqī rì} sem número é "domingo".',
      ),
    },
  ],
  examples: [
    { text: '三天', gloss: T('sān tiān — três dias') },
    { text: '第三天', gloss: T('dì sān tiān — o terceiro dia') },
    { text: '三點半', gloss: T('sān diǎn bàn — três horas e meia') },
    { text: '上個月', gloss: T('shàng gè yuè — o mês passado') },
  ],
  tables: [
    {
      caption: T('Datas: a ordem invertida'),
      head: [T('Formato'), T('chinês'), T('Português')],
      rows: [
        [T('ano-mês-dia'), T('2009年10月2日'), T('2 de outubro de 2009')],
        [T('apenas o ano'), T('2009年'), T('em 2009')],
        [T('apenas o mês'), T('10月'), T('em outubro')],
        [T('mês e ano'), T('2009年10月'), T('em outubro de 2009')],
        [T('dia e mês'), T('10月2日'), T('2 de outubro')],
      ],
    },
    {
      caption: T('Hora: duas palavras, não dois-pontos'),
      head: [T('chinês'), T('Leitura'), T('Português')],
      rows: [
        [T('三點'), T('sān diǎn'), T('3 horas')],
        [T('三點十五分'), T('sān diǎn shíwǔ fēn'), T('3h15')],
        [T('三點半'), T('sān diǎn bàn'), T('3h30 — "meia hora"')],
        [T('上午八點'), T('shàngwǔ bā diǎn'), T('8 da manhã')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se escreve "o terceiro dia"?'),
    options: [T('第三天'), T('三第天'), T('第三天日'), T('三三天')],
    answer: 0,
    hint: T('{dì} vem antes do número, e o nome do tempo vem depois.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "2 de outubro de 2009" (ano-mês-dia): 2009____10月2日'),
      answer: '年',
    },
    {
      kind: 'match',
      prompt: T('Ligue a palavra ao que ela nomeia'),
      pairs: [
        { a: T('{nián} 年'), b: T('ano') },
        { a: T('{yuè} 月'), b: T('mês') },
        { a: T('{diǎn} 点'), b: T('hora do dia') },
        { a: T('{fēn} 分'), b: T('minuto') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual é a forma de "três e meia" em Mandarin?'),
      options: [T('{三點半}'), T('{三點三分}'), T('{半三點}'), T('{三點之半}')],
      answer: 0,
    },
  ],
};
