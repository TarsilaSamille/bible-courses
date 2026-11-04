import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  section: T('Leitura'),
  title: T('O Salmo 119 lido por blocos: o acróstico e as seis palavras para "palavra"'),
  subtitle: T(
    'São 22 blocos de oito versos com a mesma inicial, e a inicial não é sentido: é estrutura',
  ),
  body: C(`
## Um salmo que é um alfabeto

O Salmo 119 não tem estrofe livre nem argumento. Ele é construído como um alfabeto: vinte e duas letras, cada uma com oito versos, cento e setenta e seis versos ao todo. A {和合本} preserva o acróstico, e cada bloco de oito começa pelo mesmo caractere.

**O Salmo 119 são 22 blocos de 8 versos, e o primeiro verso de cada bloco começa pelo mesmo caractere.**

O que o leitor precisa entender é que esse caractere é arquitetura e não sentido. Ele não é o assunto do bloco, não é uma palavra do versículo, e não se traduz. Ele está ali porque o verso ocupa a posição do primeiro de uma sequência, e o tradutor teve de escrever uma frase começada por aquela letra. Quem tentar arrancar um tema dele vai encontrar, em cada bloco, uma letra que não tem nada a ver com o que o bloco diz — e vai ler o bloco errado.

E o acróstico é invisível em português. A letra hebraica que organiza o original não se parece com nenhuma das vinte e duas letras chinesas que a organizam em Mandarin, e quem lê uma tradução portuguesa não vê nem pode ver a estrutura. Não há como descobrir lendo o texto em português: é preciso saber que ela está lá.

## Um salmo com um só assunto

Lido bloco a bloco, o Salmo 119 parece a mesma frase cento e setenta e seis vezes. O substantivo volta em quase todos os versos, e o que muda é o verbo: {jì}, lembrar, {zūnshǒu}, guardar, {cōngmíng}, entender, {yìng}, responder, {cáng}, esconder dentro. O paralelismo dos outros Salmos é de dois lados, com duas coisas opostas; aqui ele é de um lado só, porque não há duas coisas para opor: há a palavra de Deus e o que o fiel faz com ela.

**No Salmo 119 o substantivo se repete e não muda; o que muda é o verbo, e é o verbo que diz o que o fiel fez com a palavra.**

O paralelo do paralelismo está em {lǜ}, a lei, e em {huà}, o que foi dito, e em {yǔ}, {cí}, {mìng}, {jiè}. São seis palavras chinesas para o que o hebraico distingue com precisão, e a escolha entre elas é do tradutor. O Mandarin escrito não tem seis palavras para "lei": tem uma para o preceito, uma para o método e uma para o conjunto de instruções. Quem traduz o verso inteiro como "a tua palavra" oito vezes seguidas não errou a gramática e apagou a distinção.

O verso 11 é o exemplo mais limpo de tudo isso. A {和合本} escreve {wǒ jiāng nǐ de huà cáng zài xīn lǐ, miǎn wǒ dé zuì nǐ de}: "eu guardo as tuas palavras no coração, para eu não pecar contra ti". São {huà}, a palavra, e {cáng}, esconder, e {dé zuì}, pecar. Um único substantivo para "palavra", um verbo, e uma razão. A letra do acróstico está no começo do verso e não aparece no sentido.

## O que a inicial obriga o tradutor a fazer

A inicial ocupa uma casa que o português não tem. Ela vem antes do verbo e do objeto, é a primeira palavra do verso, e o tradutor não pode escolher o verbo que queria: só pode escolher a palavra que ocupa aquela casa. É por isso que o primeiro verso de cada bloco costuma começar por um verbo ou por um substantivo genérico, e é por isso que o segundo e o terceiro versos do bloco são, em regra, mais livres.

**A inicial fixa a primeira palavra do verso e nada mais: a liberdade do tradutor está no interior do verso, não na borda.**

O efeito colateral é que os oito versos de um bloco parecem mais parecidos entre si do que os oito versos do bloco seguinte. Não é repetição: é o resultado de oito frases que começam igual. E quando o tradutor escreve duas vezes a mesma palavra no mesmo verso, é porque a letra do começo e a palavra do meio estão sendo forçadas ao mesmo tempo, e ele resolve da maneira menos ruim.

A leitura correta é em blocos de oito, nunca em versos soltos. Leia os oito, ache o que muda, e pergunte qual dos verbos está oposto a qual. O bloco do Salmo 119 é curto o bastante para caber numa tela e longo o bastante para que a pergunta valha a pena.

## Três leituras que erram

A primeira é a mais comum: ler um verso e achar que entendeu. Um verso de Salmo 119 sem o bloco é uma oração sem sujeito, porque o sujeito dos Salmos é sempre o mesmo e o verbo muda de um verso para o outro. A segunda é tentar fazer sentido da inicial: ela é o letra do alfabeto, não o tema do bloco. A terceira é traduzir as seis palavras pelo mesmo termo, e aí o leitor perde a diferença que o original fazia em cada verso.

O que fica, depois disso, é o mais simples e o mais útil: no Salmo 119 não há informação nova a cada verso, há uma ação nova a cada verso. O substantivo é constante e o verbo conta. E é por isso que este salmo é o melhor lugar do livro para treinar a única coisa que a leitura em Mandarin exige de quem não tem o original: atenção à palavra que muda.`),
  vocab: [
    V('jìng', '经', 'o tecido de instruções; e a Escritura (jìng)'),
    V('lǜ', '律', 'o preceito de Deus; e o nome do Pentateuco (lǜ)'),
    V('fǎ', '法', 'a lei, o método (fǎ)'),
    V('huà', '话', 'o que foi dito; e o que alguém fala (huà)'),
    V('yǔ', '语', 'a palavra, a língua (yǔ)'),
    V('cí', '词', 'a palavra, o termo (cí)'),
    V('mìng', '命', 'o decreto, a ordem; e o destino (mìng)'),
    V('jiè', '诫', 'o preceito, a instrução (jiè)'),
    V('lì', '例', 'o caso, a preceitual (lì)'),
    V('jì', '记', 'lembrar, recordar (jì)'),
    V('zūnshǒu', '遵守', 'guardar, obedecer (zūnshǒu)'),
    V('cōngmíng', '聪明', 'entendimento; e sabedoria, no mesmo salmo (cōngmíng)'),
    V('yìng', '应', 'responder; e o que se deve, no mesmo salmo (yìng)'),
    V('cáng', '藏', 'esconder, guardar dentro (cáng)'),
    V('xīn (coracao)', '心', 'o coração: onde a palavra é guardada no verso 11 (xīn)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O Salmo 119 tem 22 blocos de 8 versos, e o primeiro verso de cada bloco começa pelo mesmo caractere.',
      ),
    },
    {
      n: '2',
      text: T(
        'O caractere do acróstico é estrutura e não sentido: não é o assunto do bloco e não se traduz.',
      ),
    },
    {
      n: '3',
      text: T(
        'No Salmo 119 o substantivo se repete e não muda; o que muda é o verbo, e é ele que diz o que o fiel fez com a palavra.',
      ),
    },
    {
      n: '4',
      text: T(
        'Seis palavras chinesas traduzem o que o hebraico distingue: {lǜ}, {huà}, {yǔ}, {cí}, {mìng} e {jiè}.',
      ),
    },
    { n: '5', text: T('Leia o salmo em blocos de oito, nunca em versos soltos.') },
  ],
  notes: [
    {
      label: T('O acróstico desaparece na tradução'),
      text: T(
        'A letra hebraica que organiza o original não se parece com nenhuma das vinte e duas letras chinesas que a organizam em Mandarin. Quem lê uma tradução portuguesa não vê a estrutura e não pode deduzi-la do texto. É informação que existe no livro em Mandarin e não existe em nenhuma tradução, e por isso o leitor precisa tê-la antes de começar.',
      ),
    },
    {
      label: T('Seis palavras, uma só ideia'),
      text: T(
        'No Salmo 119 o substantivo muda de nome quase a cada verso, e o Mandarin oferece poucas opções: a lei, a palavra, a instrução, o decreto. Traduzir tudo por "palavra" é gramaticalmente correto e apaga a distinção que o hebraico fazia. O mesmo Mandarin vale para o oposto: {cōngmíng} é entendimento numa metade e sabedoria na outra.',
      ),
    },
  ],
  examples: [
    {
      text: '我將你的話藏在心裏，免得我得罪你的',
      gloss: T(
        'wǒ jiāng nǐ de huà cáng zài xīn lǐ, miǎn wǒ dé zuì nǐ de — eu guardo as tuas palavras no coração, para não pecar contra ti (Sl 119:11): um substantivo e dois verbos',
      ),
    },
    {
      text: '你的話',
      gloss: T('nǐ de huà — as tuas palavras: {huà} é "o que foi dito", e não "o que tu pensas"'),
    },
    {
      text: '藏在心裏',
      gloss: T('cáng zài xīn lǐ — guardado no coração: {cáng} e {lǐ}, o interior como lugar'),
    },
    {
      text: '得罪',
      gloss: T('dé zuì — pecar, ofender: um verbo de duas palavras, e o mais comum do salmo'),
    },
    { text: '律', gloss: T('lǜ — o preceito; e, maiúsculo, o nome dos cinco livros de Moisés') },
    { text: '經', gloss: T('jìng — o tecido de instruções; e o nome da Escritura') },
    {
      text: '誡命',
      gloss: T(
        'jiè mìng — o mandamento: a palavra mais solene do salmo, reservada a poucos versos',
      ),
    },
  ],
  tables: [
    {
      caption: T('A estrutura do Salmo 119'),
      head: [T('Nível'), T('O que é'), T('Quantos'), T('O que o leitor vê')],
      rows: [
        [
          T('letra'),
          T('o caractere fixo do bloco'),
          T('22'),
          T('o mesmo caractere no começo de cada bloco'),
        ],
        [
          T('bloco'),
          T('o grupo de versos da mesma letra'),
          T('8'),
          T('oito versos com a mesma inicial'),
        ],
        [T('verso'), T('a unidade isolada'), T('1'), T('nada: é a parte de dentro do bloco')],
        [T('salmo'), T('o livro inteiro'), T('176'), T('22 blocos de 8')],
      ],
    },
    {
      caption: T('Seis palavras chinesas para "palavra"'),
      head: [T('Palavra'), T('Nuance Mandarin'), T('Risco de traduzir tudo por "palavra"')],
      rows: [
        [T('{lǜ}'), T('o preceito de Deus (lǜ)'), T('e o nome do Pentateuco')],
        [T('{jiè} {mìng}'), T('o mandamento, solene (jiè mìng)'), T('e a ordem dada por alguém')],
        [T('{huà}'), T('o que foi dito (huà)'), T('e o que alguém fala agora')],
        [T('{yǔ}'), T('a palavra, a língua (yǔ)'), T('e o que se entende')],
        [T('{cí}'), T('o termo, a unidade de fala (cí)'), T('e o termo de um glossário')],
        [T('{jìng}'), T('o tecido de instruções (jìng)'), T('e o nome da Escritura')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('No Salmo 119, o que a inicial de cada bloco é?'),
    options: [
      T('estrutura do alfabeto: ela ocupa a primeira palavra do verso e não é o assunto'),
      T('o tema do bloco de oito versos'),
      T('a tradução da letra hebraica correspondente'),
      T('um resumo do que vem a seguir'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o verbo de Salmo 119:11: 我將你的話____在心裏'),
      answer: '藏',
    },
    {
      kind: 'match',
      prompt: T('Ligue a palavra do Salmo 119 ao seu valor Mandarin'),
      pairs: [
        { a: T('{lǜ}'), b: T('o preceito de Deus') },
        { a: T('{huà}'), b: T('o que foi dito') },
        { a: T('{cōngmíng}'), b: T('entendimento e sabedoria') },
        { a: T('{dé} {zuì}'), b: T('pecar contra alguém') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Ao ler o Salmo 119, o que realmente muda de um verso para o outro?'),
      options: [
        T('o verbo: o substantivo se repete e o que o fiel faz com a palavra é o que muda'),
        T('o substantivo: cada verso usa uma palavra diferente para "palavra"'),
        T('o sujeito: cada verso traz um servo diferente'),
        T('o tempo: cada verso avança um dia na história'),
      ],
      answer: 0,
    },
  ],
};
