import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  section: T('Escrita'),
  title: T('Hiragana: o silabário que carrega a gramática'),
  subtitle: T('Não são 86 caracteres para decorar — são 5 vogais, e o resto sai da regra'),
  body: C(`
## A anatomia do caractere

Hiragana tem cerca de 86 caracteres e é um silabário: **um caractere é uma sílaba**. Isso decide o que a escrita faz. Um ideograma guarda um significado; um caractere de hiragana guarda um som. Ninguém lê japonês pensando em caracteres, e sim em sílabas, como no mandarim, onde cada sílaba também é um bloco.

O que interessa é a anatomia. O caractere nasce de duas peças, uma consoante e uma vogal, e a vogal é a parte que muda de forma. Existem 5 vogais, a, i, u, e, o, e cada uma delas dá um desenho diferente à mesma consoante. As consoantes viram traços e curvas; as vogais acrescentam o resto. Por isso o método certo não é o da lista: **não decore 86 caracteres, decore cinco vogais e o resto sai**. Sabendo o desenho de {かた} você descobre o de {きた}, {くも}, {けさ} e {こども} sem nunca os ter visto antes.

Isso vale tanto para ler quanto para escrever. Um leitor que conhece a regra enxerga a sílaba dentro do caractere; um que decora só a lista precisa estudá-los um por um.

## Cinco vogais, zero tons

A vogal isolada ocupa um caractere inteiro, e as cinco seguem a mesma regra: nenhuma delas tem acento. O mandarim faz o contrário, lá a mesma sílaba escrita pode ser "mãe", "cavalo" ou "peça de xadrez", conforme o tom. O japonês tem 5 vogais e nenhum tom, e por isso o mesmo caractere escrito é sempre a mesma palavra.

A única coisa que se parece com acento é a vogal longa, e ela tem um sinal honesto: ou a vogal se repete, como em {おばあさん}, ou entra um traço horizontal depois dela. Nada de subir e descer. Quem acaba de estudar os 4 tons do mandarim vai procurar uma marca que não existe, e o contraste é que importa: são duas línguas irmãs em escrita que divergem justamente na parte mais visível, o som.

## As partículas que fazem a frase

Com o caractere resolvido, o que aparece em quase toda linha são poucas sílabas isoladas que não são palavra nenhuma: são partículas, e é nelas que mora a gramática.

{を} (wo) marca **objeto direto** e nada mais. Não é "de", não é "para", não é pronome: é só a marca de que aquilo ali é aquilo que o verbo recebe. {の} (no) **liga duas palavras** e também é o "de" do português, {母の} é "da mãe" e {日本語の} é "do japonês".

{は} (wa) é o difícil. Ele vai depois do pronome ou do nome e marca o **assunto** da frase, não o sujeito e não o verbo. Em "eu como maçã" o {は} transforma o pronome em assunto; a tradução literal dele é "quanto a". Compare "eu como maçã" com "quanto a mim, como maçã": a segunda é a mesma frase japonesa, palavra por palavra. E o mesmo {は}, sem mudar de caractere, vira "mas": "eu vou, mas ele não vai". Uma partícula, duas funções.

O resto é um conjunto pequeno e de altíssimo uso: {に} (ni) para destino e direção, {で} (de) para o lugar onde a ação acontece e para o meio, {へ} (he) só para direção, e {から} (kara) com {まで} (made) para "de... até".

## {です} e {ます}: o mesmo verbo em dois registros

O japonês distingue texto falado de texto escrito, e a diferença mora em duas formas: {です} (desu) e {ます} (masu). Uma frase como "eu como uma maçã" pode ser dita de um jeito e escrita de outro, e a tradução japonesa bíblica de 1987 escolhe um registro só e o mantém do começo ao fim.

Um leitor precisa saber qual registro está lendo, porque o registro muda o tom e não muda o conteúdo: {食べます} e {食べる} querem dizer a mesma coisa, e a segunda é a forma que você encontraria anotada num dicionário.

O gancho está em João 1:1. No mandarim, o versículo abre com uma palavra ambígua de um caractere só; em japonês, "Palavra" é {言葉}, duas sílabas escritas em kanji e lidas como kotoba. As partículas daquele versículo são todas kana.

Uma última coisa que vira o leitor de cabeça para baixo: a negação vai depois do verbo, e a forma dela muda conforme o verbo. Com {する} o negativo é {しない}; com {いる} é {いない}. Não existe um "não" na frente, como na língua de origem.
`),
  vocab: [
    V('wo', 'を', 'objeto direto; e nada além disso (wo)'),
    V('no', 'の', 'liga duas palavras; também "de" (no)'),
    V('wa', 'は', 'assunto da frase; e também "mas" (wa)'),
    V('ni', 'に', 'destino, direção, tempo (ni)'),
    V('de', 'で', 'lugar da ação, meio, instrumento (de)'),
    V('he', 'へ', 'direção; só depois das partículas de destino e de origem (he)'),
    V('kara', 'から', 'de, ponto de partida; junto com até (kara)'),
    V('made', 'まで', 'até, ponto final (made)'),
    V('desu', 'です', 'ser e estar; registro escrito e falado (desu)'),
    V('masu', 'ます', 'polidez do verbo na escrita (masu)'),
    V('nai', 'ない', 'negação; vem depois do verbo (nai)'),
    V('kotoba', '言葉', 'palavra; o Verbo de João 1:1 (kotoba)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Um caractere de hiragana é uma sílaba. Decore 5 vogais, não 86 caracteres: o resto sai da regra.',
      ),
    },
    {
      n: '2',
      text: T('Nenhuma vogal tem acento. A vogal longa é a vogal repetida ou um traço horizontal.'),
    },
    { n: '3', text: T('{を} marca objeto direto e não tem tradução fora disso.') },
    {
      n: '4',
      text: T('{は} vai depois do nome e marca o assunto da frase, não o sujeito e não o verbo.'),
    },
    {
      n: '5',
      text: T(
        '{です} e {ます} dizem o registro, não o conteúdo: o mesmo sentido, outra caligrafia.',
      ),
    },
  ],
  notes: [
    {
      label: T('A mesma partícula, duas funções'),
      text: T(
        '{は} depois do pronome é "quanto a mim"; {は} dentro de uma frase com duas partes é "mas". O mesmo caractere, sem nenhuma marca para distinguir um do outro — o contexto decide.',
      ),
    },
    {
      label: T('A negação vem depois'),
      text: T(
        'Em português o "não" abre a frase; em japonês a negação {ない} cola no verbo e vai atrás dele. E a forma dela muda conforme o verbo: com {する} dá {しない}, com {いる} dá {いない}.',
      ),
    },
  ],
  examples: [
    { text: 'りんごを食べます', gloss: T('ringo o tabemasu — como uma maçã (registro escrito)') },
    {
      text: '私は本を読みます',
      gloss: T('watashi wa hon o yomimasu — quanto a mim, leio um livro'),
    },
    { text: '学校に行きます', gloss: T('gakkō ni ikimasu — vou para a escola') },
    {
      text: '私は食べます、弟は食べません',
      gloss: T('watashi wa tabemasu, otōto wa tabemasen — eu como, mas meu irmão não come'),
    },
    {
      text: '初めは言葉があった',
      gloss: T('hazimeni kotoba ga atta — no princípio havia a Palavra'),
    },
  ],
  tables: [
    {
      caption: T('As 5 vogais e o desenho que cada uma faz'),
      head: [T('Vogal'), T('O que o traço faz'), T('Exemplo de sílaba')],
      rows: [
        [
          T('a'),
          T('um corte e uma curva à direita'),
          T('{かた} kata — duas consoantes viram uma sílaba só'),
        ],
        [T('i'), T('dois traços verticais curtos'), T('{きた} kita')],
        [T('u'), T('uma curva com a ponta para baixo'), T('{くも} kumo')],
        [T('e'), T('um traço horizontal e outro que sobe'), T('{けさ} kesa')],
        [T('o'), T('um círculo quase fechado'), T('{こども} kodomo')],
      ],
    },
    {
      caption: T('As partículas que fazem a frase'),
      head: [T('Partícula'), T('Função'), T('Exemplo')],
      rows: [
        [T('{を}'), T('objeto direto, e nada mais'), T('{りんごを} — a maçã, como objeto')],
        [T('{の}'), T('liga duas palavras; também "de"'), T('{母の} — da mãe')],
        [T('{は}'), T('assunto: "quanto a X"; e "mas"'), T('{私は} — quanto a mim')],
        [T('{に}'), T('destino, direção, tempo'), T('{学校に} — para a escola')],
        [T('{で}'), T('onde a ação acontece, ou meio'), T('{家で} — em casa')],
        [T('{へ}'), T('só direção'), T('{家へ} — para casa')],
        [T('{から}'), T('de, ponto de partida'), T('{九時から} — das nove')],
        [T('{まで}'), T('até, ponto final'), T('{五時まで} — até as cinco')],
      ],
    },
    {
      caption: T('As contrações: duas partículas fundidas num caractere só'),
      head: [T('Forma'), T('Vem de'), T('Serve para')],
      rows: [
        [T('{では}'), T('{で} + {は}'), T('no, com: "no escritório"')],
        [T('{には}'), T('{に} + {は}'), T('no + assunto: "está na escola"')],
        [T('{でも}'), T('{で} + {も}'), T('mas mesmo assim')],
        [T('{とは}'), T('{と} + {は}'), T('que significa, no sentido de')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {私は学生です}, o que o {は} depois do pronome marca?'),
    options: [
      T('o sujeito da frase'),
      T('o assunto da frase'),
      T('o objeto direto'),
      T('a negação'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "como uma maçã" com a partícula de objeto: りんご____食べます'),
      answer: 'を',
    },
    {
      kind: 'match',
      prompt: T('Ligue a partícula à função'),
      pairs: [
        { a: T('{を}'), b: T('objeto direto') },
        { a: T('{は}'), b: T('assunto da frase, e também "mas"') },
        { a: T('{に}'), b: T('destino e direção') },
        { a: T('{の}'), b: T('vínculo entre duas palavras') },
        { a: T('{から}'), b: T('"de": ponto de partida') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('Em {では}, quantas partículas foram fundidas num caractere só?'),
      options: [T('uma'), T('duas'), T('três'), T('quatro')],
      answer: 1,
    },
  ],
};
