import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  section: T('Sintaxe'),
  title: T('A ordem SOV, e por que a tradução automática falha'),
  subtitle: T(
    'O verbo vai para o fim, o objeto indireto vem antes do direto e o adjetivo vem antes do substantivo: três inversões, uma ordem só',
  ),
  body: C(`
## O verbo vai para o fim

O português diz "eu como maçã": sujeito, verbo, objeto. O japonês diz {watashi wa ringo o taberu}, o mesmo conteúdo com o verbo no fim. Parece invertido; não é caos, é **a ordem**. E é exatamente a mesma ordem do mandarim, que você já viu: lá {wǒ chī píngguǒ}, aqui {watashi wa ringo o taberu}. Duas línguas distantes, uma regra só.

E a regra tem consequência prática: **tudo o que o português põe antes do verbo, o japonês põe ainda mais para a frente**. A negação e os advérbios de tempo e de modo abrem a frase, e o verbo fecha. Em "ontem eu não fui", o japonês põe "ontem" na frente e a negação colada ao verbo no fim. Quem traduz frase a frase, palavra a palavra, chega ao fim com as peças na posição errada, e é por isso que a tradução automática desmorona aqui: ela conhece as palavras e não conhece a ordem.

## O objeto indireto vem antes do direto

Em português a gente diz "dou um livro a ele": o indireto é o último sintagma. Em japonês o indireto é o primeiro de todos. {kare ni hon o ageru} é "dou um livro a ele": {kare ni} para a pessoa, {hon o} para o livro, e o verbo {ageru} por último.

Isso não é uma mania do japonês: é o mesmo padrão que você viu no mandarim, onde o indireto também vem antes do direto. O português faz o oposto dos dois, e é por isso que "dar", "mandar", "mostrar" e "ensinar" são as construções onde o erro de tradução aparece com mais força: em português o indireto fecha a frase, e em japonês ele a abre.

## O adjetivo é um nome que vem antes

O português põe o adjetivo depois do substantivo: "um livro vermelho". O japonês põe antes: {akai hon}, "vermelho livro". O adjetivo japonês não é um adjetivo no sentido em que o português usa a palavra: é um **nome que modifica outro nome**, e por isso anda na frente dele. A palavra {utsukushii}, "bonito", é uma palavra, não uma categoria.

O mesmo vale para um substantivo usado como adjetivo, o que os gramáticos chamam de adjetivo nominal: {bijutsu}, "arte", "beleza", entra antes de outro nome com o sentido de "artístico", "belo". Em português diríamos "um artista"; em japonês é "arte + pessoa". A tradução automática falha duas vezes aqui: ela conhece o valor do adjetivo e o põe no lugar errado.

## A ordem dos modificadores, que não perdoa

Num sintagma com mais de um modificador, a ordem é fixa e vai do mais próximo do substantivo para o mais distante: substantivo, relativo, numérico, descritivo. Para "a pequena casa branca", o substantivo é {ie}, a casa; o relativo é o que identifica qual casa; o numérico diz quantas; o descritivo é {shiroi}, branco. O japonês escreve o substantivo primeiro e empilha os modificadores atrás dele, do mais colado ao mais solto.

É o inverso do português em tudo, e basta errar uma vez para a frase deixar de existir: um adjetivo depois do substantivo não é um adjetivo, é outro substantivo. Em compensação, uma vez decorada a ordem, qualquer sintagma longo fica legível, e é isso que o tradutor usa para justificar a inversão do grego.

## Onde isso aparece na Bíblia

A tradução japonesa de 1987 põe **tópico no começo do versículo** para refletir o grego, e o resto da frase sai na ordem SOV sem nenhuma concessão. João 1:1 é o melhor exemplo possível, porque é o primeiro versículo que todo mundo sabe de cor: {hazime wa kotoba datta}. O "no princípio" é um topicalizador no início, e o que vem depois é {kotoba}, a Palavra, seguido do verbo {atta}, era.

Repare no que o tradutor fez. Ele podia ter escrito "no princípio, havia a palavra" em ordem portuguesa e ninguém reclamaria. Em vez disso deslocou o "no princípio" para o começo da frase, que é onde o grego o põe quando o verbo é *ēn*, "era". É exatamente o que a marca de tópico {wa} permite: mover um constituinte para a abertura e criar contraste, como em "quanto a ele, ele vai". Um tópico no início é a ferramenta mais poderosa de que você dispõe numa língua SOV, e é por isso que a nova tradução japonesa parece mais seca que a nossa e é mais fiel.
`),
  vocab: [
    V('hon', '本', 'livro (hon)'),
    V('akai', '赤い', 'vermelho; adjetivo, vem antes do substantivo (akai)'),
    V('utsukushii', '美しい', 'bonito; adjetivo, vem antes do substantivo (utsukushii)'),
    V('shiroi', '白い', 'branco; adjetivo posicional (shiroi)'),
    V('ie', '家', 'casa (ie)'),
    V('kare', '彼', 'ele; pronome de terceira pessoa (kare)'),
    V('ageru', 'あげる', 'dar; oferecer (ageru)'),
    V('ni', 'に', 'indireto e destino (ni)'),
    V('o', 'を', 'objeto direto (o)'),
    V('wa', 'は', 'tópico; contraste (wa)'),
    V('bijutsu', '美術', 'arte; beleza; adjetivo nominal (bijutsu)'),
    V('hazime', '初め', 'princípio; começo (hazime)'),
    V('kotoba', '言葉', 'palavra (kotoba)'),
    V('atta', 'あった', 'ser; estar; forma copuladora depois do verbo (atta)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A ordem é sujeito — objeto — verbo. O verbo fecha a frase, e não há posição alternativa.',
      ),
    },
    {
      n: '2',
      text: T(
        'O que o português põe antes do verbo, o japonês põe ainda mais para a frente: advérbio e negação abrem a frase.',
      ),
    },
    {
      n: '3',
      text: T(
        'O objeto indireto vem antes do direto: {kare ni hon o ageru}, nunca {hon o kare ni ageru}.',
      ),
    },
    {
      n: '4',
      text: T('O adjetivo é um nome e vem antes do substantivo: {akai hon}, nunca {hon akai}.'),
    },
    {
      n: '5',
      text: T(
        'Os modificadores vão do mais próximo do substantivo para o mais distante: substantivo, relativo, numérico, descritivo.',
      ),
    },
  ],
  notes: [
    {
      label: T('O tópico {wa} é a válvula de escape'),
      text: T(
        'A marca de tópico permite mover qualquer constituinte para o começo da frase e criar contraste, como em "quanto a ele, ele vai". Em SOV, sem tópico, não há como reorganizar nada.',
      ),
    },
    {
      label: T('A tradução automática falha por posição, não por vocabulário'),
      text: T(
        'Ela conhece {utsukushii} e conhece {ageru}; ela não sabe que um vai antes do substantivo e o outro depois. O resultado é gramatical em português e intraduzível em japonês.',
      ),
    },
  ],
  examples: [
    { text: '赤い本', gloss: T('akai hon — um livro vermelho') },
    { text: '美しい家', gloss: T('utsukushii ie — uma casa bonita') },
    { text: '彼に本をあげる', gloss: T('kare ni hon o ageru — dou um livro a ele') },
    { text: '学生に本を与えた', gloss: T('gakusei ni hon o ataeta — deu um livro ao estudante') },
    { text: '初めは言葉だった', gloss: T('hazime wa kotoba datta — no princípio era a Palavra') },
  ],
  tables: [
    {
      caption: T('O objeto indireto e o direto em três línguas'),
      head: [T('Língua'), T('Ordem dos complementos'), T('A mesma frase')],
      rows: [
        [T('português'), T('direto antes do indireto'), T('dou um livro a ele')],
        [T('japonês'), T('indireto antes do direto'), T('{kare ni hon o ageru}')],
        [T('mandarim'), T('indireto antes do direto'), T('{wǒ gěi tā yī běn shū}')],
      ],
    },
    {
      caption: T('A ordem dos modificadores: do mais colado ao mais solto'),
      head: [T('Posição'), T('O que entra'), T('Exemplo')],
      rows: [
        [T('1'), T('o substantivo'), T('{ie} — casa')],
        [T('2'), T('o relativo, que identifica qual casa'), T('{bijutsu no ie} — a casa da arte')],
        [T('3'), T('o numérico, que diz quantas'), T('três casas, com o numeral e o contador')],
        [T('4'), T('o descritivo, o mais distante'), T('{shiroi ie} — a casa branca')],
      ],
    },
    {
      caption: T('O adjetivo em português e em japonês'),
      head: [T('Português'), T('Japonês'), T('Ordem')],
      rows: [
        [T('um livro vermelho'), T('{akai hon}'), T('adjetivo antes do substantivo')],
        [T('uma casa bonita'), T('{utsukushii ie}'), T('adjetivo antes do substantivo')],
        [
          T('uma pessoa artística'),
          T('{bijutsu no hito}'),
          T('substantivo como adjetivo, antes do substantivo'),
        ],
        [
          T('um livro vermelho bonito'),
          T('{utsukushii akai hon}'),
          T('o descritivo mais distante fica por último, colado ao substantivo'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em "dou um livro a ele", qual sintagma vem primeiro em japonês?'),
    options: [T('{hon o}'), T('{kare ni}'), T('{ageru}'), T('{wa}')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete "deu um livro ao estudante" com a partícula do objeto indireto: 学生____本を与えた',
      ),
      answer: 'に',
    },
    {
      kind: 'match',
      prompt: T('Ligue o elemento à função que ele tem na frase'),
      pairs: [
        { a: T('{kare ni}'), b: T('objeto indireto: a pessoa') },
        { a: T('{hon o}'), b: T('objeto direto: a coisa') },
        { a: T('{ageru}'), b: T('verbo: vem por último') },
        { a: T('{wa}'), b: T('tópico: pode abrir a frase') },
        { a: T('{utsukushii}'), b: T('adjetivo: vem antes do substantivo') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('Como se escreve "um livro vermelho"?'),
      options: [T('{hon akai}'), T('{akai hon}'), T('{hon ga akai}'), T('{akai no hon}')],
      answer: 1,
    },
  ],
};
