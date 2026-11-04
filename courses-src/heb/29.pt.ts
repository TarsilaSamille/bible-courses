import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('A partícula como sistema'),
  subtitle: T('בְּ כְּ לְ מִן שׁ עַל אֶל — as sete letras que abrem a preposição'),
  section: T('Particula'),
  body: C(`## Sete letras que não são palavras

O hebraico antigo tem um grupo de sete partículas: {בְּ} «em, com, por» · {כְּ} «como, conforme» · {לְ} «para, a, de» · {מִן} «de, desde» · {שׁ} «de, segundo» · {עַל} «sobre, junto de» · {אֶל} «para (pessoa)».

Chamam-se de partículas porque não funcionam como palavras. Não têm caso, não têm posição livre, e não ficam sozinhas na frase: todas entram antes do nome e ficam presas a ele. Duas delas abrem exceção e são as que mais enganam, {עַל} e {אֶל}, porque aceitam o maqaf: {עַל־הָאָרֶץ} «sobre a terra» e {אֶל־מֹשֶׁה} «a Moisés» (cap. 17).

A divisão que resolve quase tudo o que vem depois é outra: três são **coladas** e quatro são **separadas**.

As três coladas são {בְּ}, {כְּ} e {לְ}. Têm uma letra só, e a prova de que estão ali é o dagesh forte na consoante seguinte: {בְּתּוֹרָה} «na lei» tem {ת} forte, {כְּהָאָדָם} «conforme o homem» tem {ה} forte, {לַיהוָה} «ao SENHOR» tem {י} forte.

As quatro separadas são {מִן}, {שׁ}, {עַל} e {אֶל}. Têm duas letras ou uma letra com vogal, e nenhuma delas provoca dagesh na palavra seguinte: {מִן־בְּרִית} «do pacto» deixa o {ב} como está.

A consequência prática cabe numa pergunta: a palavra seguinte tem dagesh forte? Se tem, você tem uma partícula colada. Se não tem, é separada ou é substantivo. Em {מִן־בְּרִית} o dagesh está em outro lugar, e isso basta para saber que o {מִן} é separado.

## A ordem das sete

As partículas podem ser empilhadas, e quando isso acontece a ordem delas é fixa. O único caso comum de duas na mesma palavra é {בְּלִי} «sem», que é {ב} + {לִי} «de mim»: {ב} vem primeiro e {ל} depois.

A ordem das sete, para quem quiser memorizar de uma vez, é {בְּ} · {כְּ} · {לְ} · {מִן} · {שׁ} · {עַל} · {אֶל}. As três coladas vêm antes das quatro separadas.

Convém dizer com honestidade o que essa ordem é e o que não é. Ela não é uma consequência de nenhuma regra dedutível: nenhum raciocínio sobre as letras tira {מִן} para o quarto lugar. É uma convenção, e por isso se decora em vez de se deduzir. O que explica a ordem não ser arbitrária é outra coisa: as três primeiras são as que de fato se colam, e a frequência histórica de uso costuma ser o que organiza uma lista convencional desse tipo.

O que a ordem faz no trabalho é prático. Em {בְּלִי} «sem», a marca que salva é o dagesh: se a palavra seguinte tem dagesh forte, tudo o que vem antes dela é uma partícula colada só. Se não tem, há duas partículas ou há partícula separada, e o contexto diz.

## Partículas de negação e de ênfase

O mesmo grupo tem filhas de outra família, e estas têm sentido próprio.

A negação tem duas: {לֹא} «não», que nega indicativo e futuro, e {אַל} «não», que nega o jussivo (cap. 16). A escolha entre elas é obrigatória, e trocá-las produz uma frase que o tradutor não sabe corrigir.

A organização da frase tem mais: {אַךְ} «porém, todavia» liga duas orações que se opõem, {הִנֵּה} «eis» introduz uma cena à vista, e {אוֹלָם} «talvez» levanta uma hipótese sem negá-la.

O que separa a negação da organização é o alvo. {לֹא} e {אַל} atacam o verbo. {אַךְ}, {הִנֵּה} e {אוֹלָם} não atacam nada: mudam o enquadramento da frase. E {אוֹךְ} não é do mesmo grupo de {אַךְ}: tem letra a mais, e significa «de algum modo, em certo sentido».

## Quando duas partículas se fundem

O caso mais bonito do sistema é a fusão, e {בְּלִי} «sem» já apareceu: {ב} + {לִי} «de mim», com a letra do {ל} dissolvida e o {ב} no lugar dela.

Partículas separadas também absorvem o que vem depois. {מֵהָרָשַׁת} «com pressa» (cap. 17) é {מִן} + {הָרָשַׁת} «a pressa», com {ה} dentro do {מ}; {מֵאַת} «de com, contra» é {מִן} + {את}. Quem traduz ao pé da letra escreve «da pressa» e perde o sentido de pressa, porque a partícula {מִן} é que estava lá.

Nada disso é irregularidade. É o comportamento normal de partículas numa língua que as trata como prefixos, e é a razão de a lista ser tão curta: há sete, são fixas, e nenhuma regra faz a oitava existir.

O Salmo 34.18 oferece uma pilha completa numa linha só: {קָרוֹב יְהוָה לְנִשְׁבְּרֵי־רוּחַ וְאֶת־דַּכְּאֵי־רוּחַ יוֹשִׁיעַ}. São quatro partículas em três palavras: {לְ} colada, {מִן} separada, {וְ} de coordenação e {אֶת} marcador de objeto direto. Três delas estão na primeira palavra. Uma frase curta do Salmo é um resumo inteiro do sistema.`),
  vocab: [
    V('בְּ', 'בְּ', 'em, com, por (colada)'),
    V('כְּ', 'כְּ', 'como, conforme (colada)'),
    V('לְ', 'לְ', 'para, a, de (colada)'),
    V('מִן', 'מִן', 'de, desde (separada)'),
    V('שׁ', 'שׁ', 'de, segundo (separada)'),
    V('עַל', 'עַל', 'sobre, junto de (separada)'),
    V('אֶל', 'אֶל', 'para (pessoa, separada)'),
    V('בְּתּוֹרָה', 'תּוֹרָה', 'na lei'),
    V('מִן־בְּרִית', 'בְּרִית', 'do pacto'),
    V('עַל־הָאָרֶץ', 'אֶרֶץ', 'sobre a terra'),
    V('בְּלִי', 'בְּלִי', 'sem ({ב} + {לִי})'),
    V('מֵהָרָשַׁת', 'מִן', 'com pressa'),
    V('מֵאַת', 'מִן', 'de com, contra'),
    V('לֹא', 'לֹא', 'não'),
    V('אַל', 'אַל', 'não (com jussivo)'),
    V('אַךְ', 'אַךְ', 'porém, todavia'),
    V('הִנֵּה', 'הִנֵּה', 'eis, behold'),
    V('אוֹלָם', 'אוֹלָם', 'talvez'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual destas partículas é colada e provoca dagesh forte na palavra seguinte?'),
    options: [T('{בְּ}'), T('{מִן}'), T('{עַל}'), T('{אֶל}')],
    answer: 0,
    hint: T('As coladas são {בְּ}, {כְּ} e {לְ}. As outras quatro são separadas.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Ligue a partícula à sua categoria.'),
      pairs: [
        { a: '{בְּ}', b: T('colada (1 letra)') },
        { a: '{כְּ}', b: T('colada (1 letra)') },
        { a: '{מִן}', b: T('separada') },
        { a: '{אֶל}', b: T('separada') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Em {בְּתּוֹרָה} «na lei», qual partícula entrou e por quê?'),
      answer: 'בְּ',
      hint: T('É {בְּ} + {תּוֹרָה}, e o {ת} ficou com dagesh forte.'),
    },
    {
      kind: 'choose',
      prompt: T('Em {מִן־בְּרִית} «do pacto», o que mostra que {מִן} é partícula separada?'),
      options: [
        T('A palavra seguinte não tem dagesh forte'),
        T('A partícula tem duas letras'),
        T('O substantivo está em constructo'),
        T('A palavra começa com {מ}'),
      ],
      answer: 0,
      hint: T('Regra §1: dagesh forte na palavra seguinte marca partícula colada.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual partícula negaria um jussivo?'),
      options: [T('{אַל}'), T('{לֹא}'), T('{אַךְ}'), T('{הִנֵּה}')],
      answer: 0,
      hint: T('Regra §3: {אַל} nega o jussivo; {לֹא} nega o indicativo e o futuro.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'As sete partículas são {בְּ}, {כְּ}, {לְ}, {מִן}, {שׁ}, {עַל}, {אֶל}. As três primeiras são coladas; as quatro últimas são separadas.',
      ),
    },
    {
      n: '2',
      text: T(
        'Dagesh forte na palavra seguinte = partícula colada. Sem dagesh = partícula separada ou substantivo.',
      ),
    },
    {
      n: '3',
      text: T(
        'A ordem das sete é {בְּ} · {כְּ} · {לְ} · {מִן} · {שׁ} · {עַל} · {אֶל}, e é convenção memorizada, não regra dedutível.',
      ),
    },
    {
      n: '4',
      text: T(
        '{לֹא} nega indicativo e futuro; {אַל} nega o jussivo. Trocá-las produz uma frase que ninguém sabe corrigir.',
      ),
    },
    { n: '5', text: T('{אַךְ}, {הִנֵּה} e {אוֹלָם} reorganizam a frase; {לֹא} e {אַל} atacam o verbo.') },
  ],
  notes: [
    {
      label: T('Leitura:'),
      text: T(
        'Uma partícula hebraica se parece mais com um prefixo do português do que com a palavra «não». Ela não fica sozinha na frase, não tem forma de sujeito, e desaparece se você a tirar. Por isso a lista é curta e fixa: é a única parte da língua que se aprende inteira de uma vez, sem paradigma.',
      ),
    },
    {
      label: T('Curiosidade:'),
      text: T(
        'As sete letras não formam um grupo uniforme: {ב} e {כ} são consoantes fortes, {ל} {מ} {נ} e {שׁ} são fracas, e {ע} é gutural. Isso explica um dos comportamentos mais estranhos da língua: uma partícula pode perder a própria letra quando encontra outra à frente. De {ב} + {לִי} «sem» sai {בְּלִי}, com o {ל} dissolvido. As formas mais comuns do hebraico são as que nascem de uma fusão desse tipo.',
      ),
    },
  ],
  examples: [
    { text: '{בְּ}', gloss: T('em, com, por — colada, com dagesh') },
    { text: '{כְּ}', gloss: T('como, conforme — colada') },
    { text: '{לְ}', gloss: T('para, a, de — colada') },
    { text: '{מִן}', gloss: T('de, desde — separada') },
    { text: '{שׁ}', gloss: T('de, segundo — separada') },
    { text: '{עַל}', gloss: T('sobre, junto de — separada') },
    { text: '{אֶל}', gloss: T('para (pessoa) — separada') },
    { text: '{בְּתּוֹרָה}', gloss: T('na lei — {בְּ} + {תּוֹרָה} (dagesh no {ת})') },
    { text: '{מִן־בְּרִית}', gloss: T('do pacto — {מִן} separada, sem dagesh') },
    { text: '{בְּלִי}', gloss: T('sem — {ב} + {לִי} «de mim»') },
    { text: '{מֵהָרָשַׁת}', gloss: T('com pressa — {מִן} separada') },
    { text: '{מֵאַת}', gloss: T('de com, contra — {מִן} + {את}') },
    { text: '{לֹא}', gloss: T('não — nega o verbo') },
    { text: '{אַל}', gloss: T('não — nega o jussivo') },
    { text: '{אַךְ}', gloss: T('porém, todavia') },
    { text: '{הִנֵּה}', gloss: T('eis, behold') },
    { text: '{אוֹלָם}', gloss: T('talvez') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — As sete partículas: coladas e separadas'),
      head: [T('Partícula'), T('Tipo'), T('Glosa principal'), T('Exemplo')],
      rows: [
        ['{בְּ}', T('colada (1 letra)'), T('em, com, por'), '{בְּרֵאשִׁית}'],
        ['{כְּ}', T('colada (1 letra)'), T('como, conforme'), '{כְּצֵל}'],
        ['{לְ}', T('colada (1 letra)'), T('para, a, de'), '{לַיהוָה}'],
        ['{מִן}', T('separada'), T('de, desde'), '{מִן־בְּרִית}'],
        ['{שׁ}', T('separada'), T('de, segundo'), '{שֶׁ} «que é de»'],
        ['{עַל}', T('separada'), T('sobre, junto de'), '{עַל־הָאָרֶץ}'],
        ['{אֶל}', T('separada'), T('para (pessoa)'), '{אֶל־מֹשֶׁה}'],
      ],
    },
    {
      caption: T('Tabela 2 — Como decidir na prática'),
      head: [T('Palavra'), T('A partícula é'), T('Sinal'), T('Glosa')],
      rows: [
        ['{בְּתּוֹרָה}', T('colada'), T('dagesh forte no {ת}'), T('na lei')],
        ['{מִן־בְּרִית}', T('separada'), T('sem dagesh no {ב}'), T('do pacto')],
        ['{כְּהָאָדָם}', T('colada'), T('dagesh forte no {ה}'), T('conforme o homem')],
        ['{עַל־פָּנַי}', T('separada'), T('sem dagesh no {פ}'), T('sobre o rosto')],
        ['{בְּלִי}', T('duas: {ב} + {לִי}'), T('{ב} antes de {ל}'), T('sem')],
        ['{מֵאַת}', T('fusão: {מִן} + {את}'), T('{מִן} separada fundida'), T('de com, contra')],
      ],
    },
  ],
};
