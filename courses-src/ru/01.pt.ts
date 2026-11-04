import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  section: T('A escrita'),
  title: T('O alfabeto que não parece com o que soa'),
  subtitle: T('В não é b, Р não é p, С não é c'),
  body: C(`
## Onze letras que mentem para quem lê latim

O alfabeto russo tem 33 posições: 10 vogais, 21 consoantes e dois sinais, {ъ} e {ь}. Onze delas têm uma forma que o latim faz prometer outra coisa, e é por aí que um leitor começa a errar. {В} parece b e soa como o v de "você". {Н} parece h e soa n. {Р} parece p e soa r. {С} parece c e soa s. {Х} não é h nem k: é o som de "xaxim". {Ц} tem duas letras e dois sons, "ts", como no fim de "castelo". {Ч} soa como o ch de "chave". {Ш} como o x de "xaxim" diante de vogal. {Щ} como o sh de "show". {Ж} como o j de "ja". {Й} como o i de "ia".

Quem começa pelo alfabeto grego comete exatamente estes erros, e a correção não é uma regra: é uma semana de leitura. O que salva é que a forma errada é sempre a mesma, e a mesma palavra repete o erro até o ouvido pegar.

## As letras de som único

Um terço do alfabeto tem som fixo: {а}, {б}, {в}, {г}, {д}, {з}, {и}, {к}, {л}, {м}, {н}, {о}, {п}, {р}, {с}, {т}, {у}, {ф}. São elas que se aprendem na primeira linha de qualquer texto. O resto vem em pares, e o par é o que interessa, porque é dele que sai o erro.

{E} muda conforme a posição: no começo da palavra e depois de consoante mole soa como "ie", e no resto da palavra como "e". Compare {Его} e {его}. {О} e {а} alternam, {И} e {ы} também, e o que decide é a posição na palavra, não a letra. {Ю} e {я} fecham a boca na consoante que vem antes, e é por isso que {няня} fala com n mole onde {тяга} fala com t duro.

## O acento não é escrito

O russo não marca o acento na escrita, e é a diferença que mais atrasa quem vem de uma língua que marca. {Бог} tem uma sílaba só e não precisa de nada. {слово} tem duas, e ninguém escreveu qual delas recebe o acento. {земля} tem duas, e o mesmo. O dicionário russo imprime o acento por uma razão prática: a grafia sozinha não diz, e quem não sabe pronuncia errado.

A letra {ё} é a exceção que confirma a regra. Onde ela aparece, o acento está escrito: {всё}, {Твое}, {ещё}. Onde ela não aparece, o acento continua por decidir.

## ъ e ь: a fronteira e a consoante mole

{ъ} não tem som. Aparece no meio da palavra, onde nada é falado: {подъём}, {съезд}, {отъезд}. {ь} tem função oposta: marca que a consoante antes dele é pronunciada com a língua alta contra o palato. {день}, {любовь}, {мать} ficam diferentes sem ele. Um silencia, o outro muda o som, e os dois sobrevivem em pouquíssimas palavras do uso diário.

## O gancho

João 1 abre o texto com quatro palavras que usam três dessas letras enganosas: **В начале было Слово, и Слово было у Бога.** A {С} de Слово é s e não c, o {В} de было é v e a {Б} é b fechado. E a última palavra do capítulo usa a letra que não mente: **Единородный Сын, сущий в недре Отчем, Он явил.** Quem aprendeu {ц}, {ч}, {ш} e {щ} pelo som, e não pelo desenho, já sabe pronunciar metade do capítulo.`),
  vocab: [
    V('слово', 'слово', 'palavra'),
    V('Бог', 'бог', 'Deus'),
    V('свет', 'свет', 'luz'),
    V('земля', 'земля', 'terra'),
    V('день', 'день', 'dia'),
    V('жизнь', 'жизнь', 'vida'),
    V('начало', 'начало', 'princípio'),
    V('человек', 'человек', 'ser humano'),
    V('царь', 'царь', 'rei; Ц se diz "ts"'),
    V('чаша', 'чаша', 'taça; Ч se diz "ch"'),
    V('небо', 'небо', 'céu; Н é n, não h'),
    V('В', 'в', 'a letra que parece b e soa v'),
    V('Н', 'н', 'a letra que parece h e soa n'),
    V('Р', 'р', 'a letra que parece p e soa r'),
    V('С', 'с', 'a letra que parece c e soa s'),
    V('Х', 'х', 'a letra que não é h nem k'),
    V('ь', 'ь', 'palatiza a consoante anterior'),
    V('ъ', 'ъ', 'marca uma fronteira muda'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{В} soa v, {Н} soa n, {Р} soa r e {С} soa s: quatro letras cuja forma promete a letra do latim.',
      ),
    },
    {
      n: '2',
      text: T(
        '{Ц} tem dois sons, {Ч} soa como ch, {Ш} como x e {Щ} como sh: o mesmo par pode ter duas pronúncias.',
      ),
    },
    {
      n: '3',
      text: T(
        '{Е} vale "ie" no começo da palavra e depois de consoante mole, e "e" no resto: {Его} contra {его}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{О} e {а} alternam, {И} e {ы} alternam; a mesma letra soa de dois jeitos conforme a posição na palavra.',
      ),
    },
    {
      n: '5',
      text: T(
        '{Ю} e {я} fecham a boca, e a consoante anterior fica mole: {няня} tem n mole, {тяга} tem t duro.',
      ),
    },
    {
      n: '6',
      text: T(
        'O acento não é marcado na escrita; só a {ё} o marca sozinha, e é por isso que {всё} e {ещё} saem da regra.',
      ),
    },
  ],
  notes: [
    {
      label: T('A letra que mente mais'),
      text: T(
        '{С} produz o erro mais caro, porque é a primeira letra de {Слово} no primeiro verso de João 1: quem a lê como c transformou o Verbo numa palavra com K. E {Р} é a segunda, porque em {Царь} e {мир} a troca de r por p passa despercebida até a pessoa dizer o nome em voz alta.',
      ),
    },
    {
      label: T('Por que o acento não é escrito'),
      text: T(
        'A escrita do russo se formou antes de o acento se tornar obrigatório, e a norma nunca o adoptou. O resultado é um texto em que a mesma grafia pode esconder palavras diferentes, e é por isso que o dicionário russo imprime o acento em quase toda entrada. A {ё} sobreviveu justamente porque é o único caso em que o acento ficou na grafia.',
      ),
    },
  ],
  examples: [
    { text: 'В начале было Слово', gloss: T('no princípio era o Verbo (Jo 1:1); В é v, С é s') },
    { text: 'и Слово было у Бога', gloss: T('e o Verbo estava com Deus; С é s, Б é b fechado') },
    {
      text: 'Все чрез Него начало быть',
      gloss: T('tudo veio a ser por meio dele (Jo 1:3); В é v, Н é n'),
    },
    { text: 'И Слово стало плотию', gloss: T('e o Verbo se fez carne (Jo 1:14)') },
    { text: 'Бог есть любовь', gloss: T('Deus é amor (1 Jo 4:8)') },
    { text: 'царь', gloss: T('rei; Ц se diz "ts" e o par final é mudo') },
    { text: 'чаша', gloss: T('taça; Ч se diz "ch"') },
    { text: 'жизнь', gloss: T('vida; Ж se diz "j" e o ь final não se pronuncia') },
    { text: 'человек', gloss: T('ser humano; Ч continua "ch" diante de e') },
    { text: 'небо', gloss: T('céu; Н é n, e б é o b comum') },
  ],
  tables: [
    {
      caption: T('As letras que não soam como parecem'),
      head: [T('Letra'), T('O que a forma sugere'), T('O que soa')],
      rows: [
        [T('В'), T('b de "bota"'), T('v de "você"')],
        [T('Н'), T('h de "hoje"'), T('n de "noite"')],
        [T('Р'), T('p de "pão"'), T('r de "rua"')],
        [T('С'), T('c de "casa"'), T('s de "sino"')],
        [T('Х'), T('h ou k'), T('x de "xaxim"')],
        [T('Ц'), T('duas letras'), T('"ts", como em "castelo"')],
        [T('Ч'), T('quatro letras'), T('ch de "chave"')],
        [T('Ш'), T('três letras'), T('x de "xaxim"')],
        [T('Щ'), T('quatro letras'), T('sh de "show"')],
        [T('Ж'), T('sete letras'), T('j de "ja"')],
        [T('Й'), T('sem par em latim'), T('i de "ia"')],
      ],
    },
    {
      caption: T('Os dois sinais que não são sílaba'),
      head: [T('Sinal'), T('O que faz'), T('Exemplos'), T('Glosa')],
      rows: [
        [
          T('ъ'),
          T('marca uma fronteira muda'),
          T('подъём, съезд, отъезд'),
          T('subida, congresso, partida'),
        ],
        [
          T('ь'),
          T('palataliza a consoante anterior'),
          T('день, любовь, мать'),
          T('dia, amor, mãe'),
        ],
      ],
    },
    {
      caption: T('O som de {Е} conforme a posição'),
      head: [T('Contexto'), T('Exemplo'), T('Som'), T('Glosa')],
      rows: [
        [T('no começo da palavra'), T('Его'), T('"ie"'), T('dele, dele')],
        [T('no começo da palavra'), T('Евангелие'), T('"ie"'), T('evangelho')],
        [T('depois de consoante dura'), T('нет'), T('"e"'), T('não há')],
        [T('depois de consoante mole'), T('день'), T('"ie"'), T('dia')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em Слово, que som tem a letra С?'),
    options: [T('c, como em casa'), T('s, como em sino'), T('x, como em xaxim')],
    answer: 1,
    hint: T('É a letra que mais engana quem lê latim: a forma é de c, o som é de s.'),
  },
  exercises: [
    { kind: 'choose', prompt: T('Que som tem Р?'), options: [T('p'), T('r'), T('v')], answer: 1 },
    { kind: 'fill', prompt: T('Complete: сло_о'), answer: 'в' },
    {
      kind: 'match',
      prompt: T('Ligue a letra ao som'),
      pairs: [
        { a: 'Щ', b: T('sh, como em "show"') },
        { a: 'Ж', b: T('j, como em "ja"') },
      ],
      answer: ['Щ', 'Ж'],
    },
  ],
};
