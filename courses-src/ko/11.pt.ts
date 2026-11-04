import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  section: T('Verbo'),
  title: T('Negação: {an}, {mot} e {ji an-da} — três negativas que não são sinônimos'),
  subtitle: T(
    'O português tem um "não" para tudo; o coreano tem três, e escolher a errada muda o que a frase afirma',
  ),
  body: C(`## Três negativas, e o português tem uma só

O português resolve a negação com uma palavra e deixa o contexto decidir qual sentido você quis dizer. "Não comi", "não consigo comer", "não é assim": três frases de sequência, o mesmo "não" nas três, e nada no texto que diga qual delas você escreveu. O coreano não trabalha assim. Tem três negadores, e nenhum é substituto de outro: {an} nega o fato, {mot} nega a capacidade, {ji an-da} nega a validade do que se está afirmando. A escolha entre eles é semântica, não de registro. Escolher o errado não produz uma frase estranha; produz outra afirmação, e num texto bíblico isso é outra teologia.

- **{an}** nega a ação. {sarang-i an meokneunda}, "a pessoa não come". É a negação simples, a mais comum, e a única das três que não diz nada sobre o motivo.
- **{mot}** nega a capacidade. {sarang-i mot meokneunda}, "a pessoa não consegue comer". Não é "não quero" e não é "não vou": é "não consigo". E o coreano não diz por quê, porque o motivo pode ser o corpo, o dinheiro, a circunstância ou a vontade, e {mot} é o mesmo nas quatro.
- **{ji an-da}** nega o fato. {geuneun jeokda jeokji an-da}, "isso não é assim". É a mais polida e a mais difícil, porque não nega a ação: recusa o conteúdo do que foi dito.

O mesmo verbo com as três mostra por que a escolha importa teologicamente. Em "não acredito", o português deixa em aberto se você não acredita, se não consegue acreditar ou se não é para crer. O coreano obriga a decidir: {naneun an mitneunda} é "eu não credo"; {naneun mot mitneunda} é "eu não posso crer"; {naneun mitji an-da} é "não é que eu creia". São três afirmações diferentes escritas com o mesmo "não" em português.

## A posição: antes na forma plana, dentro na polida

O coreano nega **antes** do verbo, como o mandarim. Na forma plana é uma palavra colada ao começo do verbo: {sarang-i an meokda}, {naneun mot mitda}. Na forma polida a negação entra dentro do verbo, colada à raiz e antes das terminações: {sarang-i meokneunda}, {naneun motneunda}. É o mesmo mecanismo das partículas: a forma muda com a polidez. Quem traduz literalmente do português acaba colando {an} ao verbo na frase polida e escreve uma forma que ninguém usa.

{mot} faz exatamente o mesmo que {an}, posição por posição. E {ji an-da} é a exceção que confirma a regra: como termina em -da, é uma palavra inteira e fica **depois** do verbo nas duas formas, {mitji an-da} e {mitji an-neunda}. A regra prática: se a negação é {-da}, ela vai depois; se não é, ela vai antes na forma plana e para dentro na polida.

A amarração com as outras duas línguas do projeto aparece aqui. Em mandarim, a negação é uma partícula colada antes do verbo e não muda de lugar: {wǒ bù chī}, com {méi} para o passado e para a existência. No japonês, a negação vem **depois** do verbo e o verbo assume a forma negativa. No coreano a negação vem antes, como no mandarim, mas ganha uma segunda vida: dentro do verbo na forma polida. São três posições diferentes para o mesmo conceito.

## A ligação: {do}, também não, e a negativa dupla

{d o} é partícula como as outras: cola-se à palavra que modifica. E numa frase negativa, {do} vem **antes** de {an}, não depois: {naneun-do an meokneunda}, "eu também não como". Quem escreve do jeito português, deixando o "também" para o fim, produz uma frase que o ouvinte coreano entende ao contrário: em coreano a ordem é fixa e {do} antes da negativa é construção, não opção.

O segundo par é {an} seguido de {mot}, e é a prova de que a ligação é obrigatória: "não só ... mas também não". Em coreano são duas negativas encostadas, {an} ... {mot}, e o ouvinte entende as duas como um bloco só. Nenhuma das duas tem sentido sozinha nessa frase, e nenhuma pode ser traduzida separadamente. Traduzir {an} por "não" e {mot} por "não" outra vez produz em português um "não" duplo que não existe.

## Negar um substantivo exige verbo

Em português se nega um substantivo com um adjetivo: "não é livro", "não são verdade". Em coreano isso não existe, porque a negação é sempre verbal: não há um "não" que caia sobre a coisa. Nega-se o verbo que está por baixo do substantivo, e há duas portas. A primeira é o verbo de identidade, {ida}: {chaeg-eun anida}, "não é livro". Repare que a frase tem sujeito: o "não" é um verbo e, como verbo, recebe partícula de sujeito como {i} ou {gwa}. A segunda é {eun mu}, a forma de "não haver": {chaegi eun mu itda}, "não há livro", literalmente "livro não tem lugar".

{eun mu} é o análogo do {méi} do mandarim. Em mandarim {méi} nega a existência; em coreano {eun mu} nega a existência, e a construção se faz pelo substantivo seguido do verbo de haver. Mesmo campo semântico, mesmo tipo de verso, palavras diferentes porque cada língua monta a frase por dentro.

E o versículo que fecha a lição é o teste. Em João 1:5, "a luz brilha nas trevas, e as trevas não a venceram", a negação vem no fim do versículo e recai sobre "vencer": {bichida}, brilhar, contra {ikida}, vencer. A palavra das trevas é {eodum}. Se o tradutor escreve {an} onde o texto era recusa de fato, ou {mot} onde era só ausência de vitória, ele fortalece um versículo de luz fraca em um versículo de luz vitoriosa. A escolha da negativa não é detalhe de estilo: é a escolha do que o versículo afirma.
`),
  vocab: [
    V('an', '안', 'não; negação simples da ação, antes do verbo'),
    V('mot', '못', 'não conseguir; negação de capacidade, antes do verbo'),
    V('ji an-da', '지 않다', 'não fazer; não ser; recusa de um fato, depois do verbo'),
    V('an mot', '안 ... 못', 'não só ... mas também não (negativa dupla)'),
    V('do', '도', 'também; partícula que vem antes da negativa'),
    V('eun mu', '없음', 'não haver; não existir'),
    V('mol da', '못하다', 'não poder; não ser possível'),
    V('ji mot ha da', '지 못하다', 'não poder ser; não ser possível'),
    V('ida', '이다', 'ser; estar (verbo de identidade)'),
    V('naneun', '나는', 'eu (sujeito, forma polida)'),
    V('mitda', '믿다', 'crer; acreditar'),
    V('bichida', '비치다', 'brilhar; resplandecer'),
    V('ikida', '이기다', 'vencer; sobrepor-se a'),
    V('eodum', '어둠', 'trevas; escuridão'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'As três negativas não são sinônimos: {an} nega o fato, {mot} nega a capacidade, {ji an-da} nega a validade do que se afirma. Trocar uma por outra muda a afirmação.',
      ),
    },
    {
      n: '2',
      text: T(
        '{an} e {mot} vêm antes do verbo na forma plana e entram dentro do verbo na forma polida: {an meokda} vira {meokneunda}.',
      ),
    },
    {
      n: '3',
      text: T(
        '{ji an-da} termina em -da e por isso fica depois do verbo nas duas formas: {mitji an-da}, {mitji an-neunda}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Numa frase negativa, {do} vem antes de {an}: {naneun-do an meokneunda}, "eu também não como". A ordem é fixa.',
      ),
    },
    {
      n: '5',
      text: T(
        'Negar um substantivo exige verbo: {anida} para identidade, {eun mu itda} para existência. Não existe um "não" que caia sobre a coisa.',
      ),
    },
  ],
  notes: [
    {
      label: T('O motivo não é escolhido por você'),
      text: T(
        '{mot} diz que a ação não acontece, e nada mais. Ele não distingue "não quero" de "não posso" de "não vou" — o coreano deixa essa distinção para o contexto e para a frase seguinte. Por isso {mot} é a palavra errada quando o que se quer negar é a escolha.',
      ),
    },
    {
      label: T('O "não" coreano é sempre verbo'),
      text: T(
        'Em coreano a negação é um verbo e, como tal, recebe partícula de sujeito: {chaeg-eun anida} tem sujeito, porque {anida} é uma forma verbal. Em português "não é livro" é um adjetivo e não tem sujeito gramatical. É a diferença entre negar e qualificar.',
      ),
    },
  ],
  examples: [
    {
      text: '안 먹습니다',
      gloss: T('an meokneunda — não como; a negação simples, dentro do verbo'),
    },
    {
      text: '못 먹습니다',
      gloss: T('mot meokneunda — não consigo comer; incapacidade, não recusa'),
    },
    {
      text: '먹지 않습니다',
      gloss: T('meokji an-neunda — não é que eu coma; a recusa do fato, depois do verbo'),
    },
    {
      text: '나도 안 먹습니다',
      gloss: T('naneun-do an meokneunda — eu também não como; {do} antes da negativa'),
    },
    {
      text: '책이 아닙니다',
      gloss: T('chaegi an-i-neunda — não é um livro; a negação como verbo'),
    },
  ],
  tables: [
    {
      caption: T('As três negativas lado a lado'),
      head: [T('Negador'), T('O que nega'), T('Frase'), T('O que não é')],
      rows: [
        [
          T('{an}'),
          T('o fato da ação'),
          T('{naneun an mitneunda}'),
          T('não é recusa nem incapacidade'),
        ],
        [
          T('{mot}'),
          T('a capacidade'),
          T('{naneun mot mitneunda}'),
          T('não é "não quero" nem "não vou"'),
        ],
        [
          T('{ji an-da}'),
          T('a validade do que se diz'),
          T('{naneun mitji an-da}'),
          T('não nega a ação, nega o fato'),
        ],
      ],
    },
    {
      caption: T('A posição da negação em cada forma'),
      head: [T('Negador'), T('Forma plana'), T('Forma polida'), T('Onde está')],
      rows: [
        [
          T('{an}'),
          T('{an meokda}'),
          T('{meokneunda}'),
          T('antes do verbo plano, dentro no polido'),
        ],
        [
          T('{mot}'),
          T('{mot mitda}'),
          T('{motneunda}'),
          T('antes do verbo plano, dentro no polido'),
        ],
        [
          T('{ji an-da}'),
          T('{mitji an-da}'),
          T('{mitji an-neunda}'),
          T('depois do verbo nas duas formas'),
        ],
      ],
    },
    {
      caption: T('Onde a negação se coloca em cada língua do projeto'),
      head: [T('Língua'), T('Onde a negativa entra'), T('Troca de lugar'), T('Lição')],
      rows: [
        [
          T('mandarim'),
          T('antes do verbo, como partícula'),
          T('não'),
          T('lição 9, com {méi} no passado'),
        ],
        [T('japonês'), T('depois do verbo, na forma negativa'), T('não'), T('lição 7')],
        [
          T('coreano'),
          T('antes do verbo plano, dentro no polido'),
          T('sim, com a polidez'),
          T('esta lição'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em coreano, "não consigo comer" — qual negador você usa?'),
    options: [T('{an}'), T('{mot}'), T('{ji an-da}'), T('{eun mu}')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a recusa de fato "não é assim": geun-neun jeok-da jeok-ji ____'),
      answer: '않다',
    },
    {
      kind: 'match',
      prompt: T('Ligue o negador ao que ele nega'),
      pairs: [
        { a: T('{an}'), b: T('o fato da ação') },
        { a: T('{mot}'), b: T('a capacidade') },
        { a: T('{ji an-da}'), b: T('a validade do que se diz') },
        { a: T('{eun mu}'), b: T('a existência') },
        { a: T('{do}'), b: T('também; vem antes da negativa') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('Numa frase negativa em coreano, onde fica a partícula {do}?'),
      options: [
        T('depois de {an}'),
        T('antes de {an}'),
        T('colada ao substantivo, longe da negativa'),
        T('sempre no fim da frase'),
      ],
      answer: 1,
    },
  ],
};
