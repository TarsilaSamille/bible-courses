import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  section: T('Verbo'),
  title: T('Advérbio de modo: {得} (de) e {一}{下} (yíxià)'),
  subtitle: T(
    'Duas partículas que vão depois do verbo e mudam o que ele diz — sem mudar a ordem das palavras',
  ),
  body: C(`
## O advérbio que vem depois do verbo

O Mandarin não tem advérbio de modo no lugar que o português usa. Em português o advérbio entra antes do verbo: "caminha devagar", "fala bem". Em Mandarin ele entra depois do verbo e antes do objeto, e para isso existe uma partícula: {de}.

**Verbo ou adjetivo + {de} + complemento.** {pǎo} {de} {kuài} é "corre rápido", {shuō} {de} {hǎo} é "fala bem", {hóng} {de} {fā} {zǐ} é "vermelho de um jeito que dá roxo", literalmente "vermelho até". O {de} é fixo: vem sempre colado, nunca separado, e o complemento vem sempre depois dele. Um {de} solto, sem complemento depois, não é Mandarin.

O {de} de modo e o {de} de posse têm a mesma pronúncia, {de} de tom neutro, e o mesmo caractere. O que decide qual dos dois você está lendo é a posição: {de} depois de um substantivo é posse, {de} depois de um verbo ou adjetivo é modo. O contexto também desempata, mas o critério é a posição.

## {de} intensificado: de "muito" a "tão... que"

Para "muito" o Mandarin tem uma palavra inteira: {hěn}, que vem antes do adjetivo. {hěn} {lěng} é "muito frio". E {de} depois do adjetivo faz mais do que isso: {lěng} {de} {hěn} é "é muito frio" com um peso que {hěn} {lěng} não alcança. É "tão frio que…", e costuma vir com resultado. {hóng} {de} {fā} {zǐ} é o exemplo extremo: "tão vermelho que fica roxo".

A distinção prática: {hěn} é o "muito" de todo dia, o que soa natural em qualquer frase. {de} + adjetivo é mais forte, mais literário, e aparece onde o português traduziria por "tão… que", por "a ponto de", ou por um superlativo. Em leitura bíblica os dois aparecem no mesmo versículo, em níveis diferentes, e vale saber qual dos dois traduziu o quê.

## O verbo {dé}, e a partícula {yíxià}

*{dé}* tem um segundo uso, e é o verbo "obter, conseguir". {wǒ} {dé} {le} {yī} {běn} {shū} é "consegui um livro", e nesse caso {dé} é o verbo principal da frase, com {le} como partícula de aspecto. Três caracteres, três papéis: {de} advérbio, {dé} verbo, {le} aspecto. O Mandarin gosta de homógrafos, e este aqui é dos mais produtivos.

A segunda partícula é **{yíxià}**, literalmente "um{下}", "um pouco". Ela vai depois do verbo e diz "uma vez", "um instante", "dê uma": {shuō} {yíxià} é "diga (um instante)", {kàn} {yíxià} é "dê uma olhada". A posição é a mesma da partícula de aspecto {le}: verbo, depois partícula. {shuō} {yíxià} {le}, "eu disse, um instante, e acabei".

## A ordem, e o erro de quem traduz do português

A regra inteira cabe numa linha: **verbo, advérbio, objeto.** {mànmàn} {de} {zǒu} é "caminhar devagar"; {wǒ} {mài} {mànmàn} {de} {zǒu} é "eu caminho devagar", com o advérbio depois do verbo e antes do objeto, e o {de} entre o advérbio e o verbo. Em português seria "devagar eu caminho" ou "eu devagar caminho", que ninguém escreve. Quem traduz do português por correspondência palavra a palavra escreve "eu caminho devagar lento" e produz uma frase que soa errado sem que ninguém consiga apontar por quê.

O ganho bíblico está em três versículos. Em João 1:1, {tàichū} {yǒu} {dào}, "no princípio era o Verbo": o {tàichū} é "o começo de", {tài} com o {chū} "sair", e é a palavra que traduz o grego ἐν ἀρχῇ semioticamente, como um advérbio de tempo derivado, não como uma preposição. Em Salmo 119:105, {nǐ} {de} {huà} {jí} {dà}, "a tua palavra é muito grande": o {jí} {dà} é um predicativo de grau, o Mandarin dizendo "palavra + grande ao extremo" onde o hebraico diz "a teu verbo é imenso". E em Hebreus 12:2, {wàng} {zhe}, "olhando para": o {zhe} é a mesma partícula de estado contínuo que já apareceu com {tā} {zhe}, e marca um verbo mantido em curso enquanto outra coisa acontece.`),
  vocab: [
    V('de', '得', 'partícula de modo/estado depois de verbo ou adjetivo (de)'),
    V('yíxià', '一下', 'uma vez, um instante, um pouco (depois do verbo)'),
    V('hěn', '很', 'muito (antes do adjetivo)'),
    V('pǎo', '跑', 'correr (pǎo)'),
    V('kuài', '快', 'rápido, rápido (kuài)'),
    V('shuō', '说', 'dizer, falar (shuō)'),
    V('hóng', '红', 'vermelho (hóng)'),
    V('dé', '得', 'obter, conseguir (verbo; com {le} de aspecto)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O advérbio de modo vai depois do verbo ou adjetivo: {pǎo de kuài}, nunca "kuài pǎo".',
      ),
    },
    { n: '2', text: T('{de} de modo é sempre seguido de complemento: {de} sozinho não diz nada.') },
    {
      n: '3',
      text: T('{hěn} antes do adjetivo é o "muito" comum; {de} depois é mais forte, "tão… que".'),
    },
    { n: '4', text: T('{yíxià} vai depois do verbo, na posição da partícula de aspecto {le}.') },
    { n: '5', text: T('A ordem é verbo, advérbio, objeto: {wǒ mài mànmàn de zǒu}.') },
  ],
  notes: [
    {
      label: T('Três caracteres, três papéis'),
      text: T(
        '{de} como advérbio de modo, {dé} como verbo "obter" e {le} como partícula de aspecto vivem na mesma frase: {wǒ dé le yī běn shū}.',
      ),
    },
    {
      label: T('{de} e {zhe} depois do verbo'),
      text: T(
        '{de} diz como algo é feito; {zhe} marca estado em curso. {wàng zhe} é "olhando para", não "olhar de certo modo".',
      ),
    },
  ],
  examples: [
    { text: '跑得快', gloss: T('pǎo de kuài — corre rápido') },
    { text: '慢慢地说', gloss: T('mànmàn de shuō — fala devagar') },
    { text: '冷得很', gloss: T('lěng de hěn — é muito frio') },
    { text: '我看一下', gloss: T('wǒ kàn yíxià — eu dou uma olhada') },
  ],
  tables: [
    {
      caption: T('Onde cada advérbio de modo fica'),
      head: [T('Estrutura'), T('Exemplo'), T('Português')],
      rows: [
        [T('verbo + {de} + adjetivo'), T('{pǎo} {de} {kuài}'), T('corre rápido')],
        [T('adjetivo + {de} + {hěn}'), T('{lěng} {de} {hěn}'), T('é muito frio')],
        [T('verbo + {de} + verbo'), T('{mànmàn} {de} {zǒu}'), T('caminha devagar')],
        [T('verbo + {yíxià}'), T('{kàn} {yíxià}'), T('dê uma olhada')],
      ],
    },
    {
      caption: T('Verbo, advérbio, objeto — e onde o português erraria'),
      head: [T('Passo'), T('Mandarin'), T('Erro de tradução')],
      rows: [
        [T('verbo'), T('{wǒ} {mài}'), T('—')],
        [T('advérbio'), T('{mànmàn} {de}'), T('{mài} {mànmàn}')],
        [T('objeto'), T('{zǒu}'), T('{mànmàn} {zǒu}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual forma diz "fala bem"?'),
    options: [T('{好地说}'), T('{说得好}'), T('{说很快}'), T('{好说}')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "corre rápido": 跑____快'),
      answer: '得',
    },
    {
      kind: 'match',
      prompt: T('Ligue a partícula ao que ela faz'),
      pairs: [
        { a: T('{得}'), b: T('advérbio de modo, depois do verbo') },
        { a: T('{很}'), b: T('o "muito" comum, antes do adjetivo') },
        { a: T('{一下}'), b: T('"um instante", depois do verbo') },
        { a: T('{了}'), b: T('aspecto, logo depois do verbo') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Em {我得了一本书}, o que {得} é?'),
      options: [
        T('advérbio de modo'),
        T('verbo principal, "obter"'),
        T('partícula de negação'),
        T('partícula possessive'),
      ],
      answer: 1,
    },
  ],
};
