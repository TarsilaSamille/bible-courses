import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  section: T('Kanji'),
  title: T('O kanji como ideograma e como componente'),
  subtitle: T(
    'O mesmo caractere é ao mesmo tempo uma palavra com sentido e um pedaço de desenho dentro de outra, e é por isso que dá para adivinhar',
  ),
  body: C(`
## Duas vidas do mesmo caractere

A metade disso já apareceu com {水}: é "água" e é também o componente de tudo que tem a ver com água ou rio. A consequência é enorme. Se o componente é o mesmo, a palavra nova é adivinhável. Quem conhece {水} chega em {海} "mar", {川} "rio" e {汗} "suor" sem nunca as ter visto, porque o desenho está dizendo a mesma coisa nos três.

E o desenho vai além do componente: ele **explica**. {明} sol mais lua significa "claro", e quem olha para o caractere vê a resposta sem nunca ter ouvido a palavra. {休} é uma pessoa encostada numa árvore, e significa "descanso". {森} são três árvores e significa "floresta". {品} são três bocas e significa "mercadoria". Quase nenhuma escrita do mundo mostra o sentido dentro da forma. O japonês mostra, e mostra os dois: a palavra e a conta.

## Números: o decimal também é feito de ideogramas

Os algarismos do japonês também são kanji, e são os ideogramas mais composicionais que existem: {go} é cinco, {jū} é dez, e é só isso que você precisa para escrever qualquer número de 11 a 99. Vinte e um não é "dois, uma vez o dez" repetido: é dois seguido de dez seguido de um, lido de trás para frente como um algarismo. O decimal japonês é posicional, e isso aparece no dia a dia na hora de ler uma placa.

Placa de cinema é o exemplo mais curto: o número do cinema é sempre o nome seguido do algarismo. Cinema 3 é o nome do cinema e {三}. O três não conta nada ali, ele ordena, e é por isso que a leitura é da direita para a esquerda quando o número tem dois algarismos.

Uma honestidade de escala, porque o leitor precisa saber onde está pisando: o japonês tem cerca de 2.000 kanji de uso comum, o conjunto oficial chamado Jōyō. Um adulto japonês lê uns 3.000 a 5.000 ao longo da vida. Ninguém em particular os aprendeu numa escola: aprenderam os 2.000 do dia a dia e o resto por necessidade.

## Posição e direção: o vocabulário que abre qualquer texto

Este é o grupo que mais aparece depois dos verbos, e é o que permite ler qualquer coisa sem dicionário: manual de instruções, mapa, receita, lista de compras. {上} é em cima, {下} é embaixo, {中} é dentro e também meio, {外} é fora, {前} é a frente e também antes, {後ろ} é atrás, {横} é o lado, {左} é a esquerda, {右} é a direita.

Estes dez kanji, junto com os verbos, cobrem quase toda linguagem de instrução que existe na língua, e é exatamente o tipo de frase que aparece num texto bíblico traduzido, onde alguém diz a alguém para ir a algum lugar.

## O mesmo caractere, partícula numa hora e substantivo na outra

O detalhe fino vem agora, e ele explica por que a gramática japonesa parece mais simples do que é. O {前} é partícula em um uso: antes de um verbo ou de um substantivo com tempo, {前} significa "antes de". No mesmo caractere, sozinho ou com {の}, é substantivo: "a frente". Nada muda no desenho; muda o que ele está grudado.

E há ainda o {過} "passar, ultrapassar", que se separa da mesma maneira. Como verbo ele é gramatical, e por isso sai em kana: o {す} que sobra em *sugiru* é a marca do ideograma que ninguém escreveu. Quando o nome é que é gramatical, o desenho volta: {通過} é o substantivo da "passagem" de uma estação, um lugar por onde se passa.

## Onde isso aparece na Bíblia

A tradução japonesa de 1987, {新共同訳}, escreve {神} e {世界} e {言葉} em ideogramas, sem nota de rodapé nenhuma. Quem não conhece kanji lê esses três como ideogramas perdidos, quando na verdade são as palavras mais óbvias da língua. E a segunda delas, {言葉}, é literalmente as duas coisas que a Bíblia diz serem. {本}, o "livro", é também contador: os contadores do japonês são kanji de sentido literal, e o de livros evoca um rolo de pergaminho, de onde a própria palavra "livro" saiu.
`),
  vocab: [
    V('hi', '日', 'sol; dia (hi)'),
    V('tsuki', '月', 'lua; mês (tsuki)'),
    V('me', '明', 'claro; luz do dia (me)'),
    V('yasu', '休', 'descansar; descanso (yasu)'),
    V('mori', '森', 'floresta (mori)'),
    V('go', '五', 'cinco (go)'),
    V('jū', '十', 'dez; base da contagem (jū)'),
    V('mae', '前', 'frente; antes; anterior (mae)'),
    V('katsu', '過', 'passar; ultrapassar (katsu)'),
    V('hon', '本', 'livro; contador de livros (hon)'),
    V('shin', '神', 'Deus; espírito (shin)'),
    V('sekai', '世界', 'mundo (sekai)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Um kanji é palavra e componente ao mesmo tempo: {水} é "água" e é o radical de tudo o que tem água.',
      ),
    },
    {
      n: '2',
      text: T(
        'O desenho explica o sentido: {明} é sol mais lua e significa "claro"; {森} são três árvores e significa "floresta".',
      ),
    },
    {
      n: '3',
      text: T(
        'Os algarismos são kanji e são posicionais: {jū} é dez e serve de base para todo número acima de 9.',
      ),
    },
    {
      n: '4',
      text: T(
        'Posição e direção são, depois dos verbos, os kanji mais frequentes do texto — sem eles não se lê instrução nenhuma.',
      ),
    },
    {
      n: '5',
      text: T(
        'O mesmo caractere pode ser partícula num uso e substantivo no outro; é o que vem depois dele que decide.',
      ),
    },
  ],
  notes: [
    {
      label: T('A escala real'),
      text: T(
        'Jōyō são cerca de 2.000 kanji de uso comum. Um adulto japonês lê 3.000 a 5.000 ao longo da vida, e ninguém os aprendeu todos na escola: aprendeu-se os 2.000 do dia a dia e o resto por necessidade.',
      ),
    },
    {
      label: T('O verbo some, o nome fica'),
      text: T(
        'Como na lição 1: o que é gramatical sai em kana. Por isso o nome {新共同訳} tem quatro ideogramas e quase todo o resto da frase é kana. O {過} é o exemplo mais limpo disso — o verbo é kana, o substantivo volta a ser kanji.',
      ),
    },
  ],
  examples: [
    { text: '明日の朝', gloss: T('ashita no asa — amanhã de manhã') },
    { text: '木の下に休む', gloss: T('kino shita ni yamu — descansar debaixo da árvore') },
    { text: '深い森', gloss: T('fukai mori — floresta profunda') },
    { text: '三丁目', gloss: T('san-chōme — o terceiro quarteirão da cidade') },
    { text: '神の言葉', gloss: T('kami no kotoba — a palavra de Deus') },
  ],
  tables: [
    {
      caption: T('Os dez algarismos'),
      head: [T('Número'), T('Kanji'), T('Leitura')],
      rows: [
        [T('um'), T('{一}'), T('hitori')],
        [T('dois'), T('{二}'), T('futa')],
        [T('três'), T('{三}'), T('mitsu')],
        [T('quatro'), T('{四}'), T('yon')],
        [T('cinco'), T('{五}'), T('go')],
        [T('seis'), T('{六}'), T('roku')],
        [T('sete'), T('{七}'), T('nana')],
        [T('oito'), T('{八}'), T('hachi')],
        [T('nove'), T('{九}'), T('kyū')],
        [T('dez'), T('{十}'), T('jū')],
      ],
    },
    {
      caption: T('Posição e direção'),
      head: [T('Kanji'), T('Leitura'), T('Sentido')],
      rows: [
        [T('{上}'), T('ue'), T('em cima, acima')],
        [T('{下}'), T('shita'), T('embaixo, abaixo')],
        [T('{中}'), T('naka'), T('dentro; o meio')],
        [T('{外}'), T('soto'), T('fora, exterior')],
        [T('{前}'), T('mae'), T('a frente; antes')],
        [T('{後ろ}'), T('ushiro'), T('atrás')],
        [T('{横}'), T('yoko'), T('o lado; ao lado')],
        [T('{左}'), T('hidari'), T('esquerda')],
        [T('{右}'), T('migi'), T('direita')],
        [T('{間}'), T('aida'), T('entre; intervalo')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {明}, o que o desenho está dizendo?'),
    options: [
      T('que é só um ideograma, sem valor de palavra'),
      T('sol e lua juntos — ou seja, "claro"'),
      T('que o caractere significa "dia"'),
      T('que ele está contando alguma coisa'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "dezoito" com os dois algarismos: ____八'),
      answer: '十',
    },
    {
      kind: 'match',
      prompt: T('Ligue o kanji ao sentido'),
      pairs: [
        { a: T('{上}'), b: T('em cima') },
        { a: T('{下}'), b: T('embaixo') },
        { a: T('{中}'), b: T('dentro') },
        { a: T('{右}'), b: T('direita') },
        { a: T('{前}'), b: T('frente; antes') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('Como aparece o número na plaquinha de um cinema?'),
      options: [
        T('o algarismo depois do nome: nome mais {三}'),
        T('o algarismo antes do nome: {三} mais nome'),
        T('em hiragana, porque número não tem ideograma'),
        T('em katakana, como todo número estrangeiro'),
      ],
      answer: 0,
    },
  ],
};
