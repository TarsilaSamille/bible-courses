import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  section: T('Escrita'),
  title: T('Kana: a escrita que se aprende num fim de semana'),
  subtitle: T(
    'Hiragana e katakana são o mesmo sistema em duas caligrafias, e nenhuma das duas é o japonês que se fala',
  ),
  body: C(`
## Duas caligrafias, um só som

O japonês escreve a mesma sílaba de dois jeitos. **Hiragana** {の} e **katakana** {ノ} dizem a mesma coisa; o que muda é o registro. Katakana é para palavras estrangeiras, nomes próprios e ênfase: a palavra "computador", a sigla de uma polícia estrangeira, o letreiro de uma cafeteria. Hiragana é tudo o mais, e é onde a gramática mora.

Uma página de japonês parece um muro de caracteres, mas não é: quase todo o texto é repetição de poucas sílabas, e as mais frequentes são uma palavra só. {の} é "de", {に} é "em", {を} marca o objeto, {は} marca o tópico. Quatro sílabas que somadas aparecem em quase toda frase que existe.

## O que a caligrafia esconde

Um kanji é uma palavra, como no mandarim, e a diferença é que aqui ele carrega a etymologia à vista. {水} é "água" e também o componente de qualquer palavra que tenha a ver com água ou com rio. Reconhecer o componente é o que faz o vocabulário crescer.

E o kanji guarda a parte gramatical: {食} significa "comer" e vira sufixo que significa "refeição", como {朝食} "café da manhã" e {昼食} "almoço". Um leitor que conhece {食} adivinha as duas palavras.

## A tradução de 1987 e a pontuação

A tradução japonesa de 1987 usa kana para tudo que é gramatical e kanji para o conteúdo. Num versículo como "no princípio era o Verbo", o verbo aparece em kana porque é gramatical. Quem lê o versículo como se fosse uma foto de texto está lendo errado: o que troca de caligrafia é o que troca de função.

A pontuação japonesa também é outra. O japonês usa {、} e {。}, e muitos livros nem os põem. Uma linha sem ponto num texto japonês é normal, não é erro de digitação.
`),
  vocab: [
    V('no', 'の', 'de; partícula de posse (no)'),
    V('ni', 'に', 'em; para; partícula de destino (ni)'),
    V('wa', 'は', 'tópico; partícula que também marca contraste (wa)'),
    V('wo', 'を', 'objeto direto (wo)'),
    V('mizu', '水', 'água (mizu)'),
    V('tabemono', '食べ物', 'comida (tabemono)'),
    V('hon', '本', 'livro; também contador de objetos (hon)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Hiragana e katakana dizem a mesma sílaba: a escolha é de registro, não de pronúncia.',
      ),
    },
    {
      n: '2',
      text: T(
        '{の} "de", {に} "em", {を} "objeto" e {は} "tópico" são quatro sílabas que aparecem em quase todo texto.',
      ),
    },
    {
      n: '3',
      text: T(
        'Kanji é palavra com a etymologia à vista: {水} "água" reaparece em tudo que tem água.',
      ),
    },
    {
      n: '4',
      text: T(
        'Kana carrega a gramática e kanji carrega o conteúdo — por isso o verbo fica em kana.',
      ),
    },
    { n: '5', text: T('Romaji serve para o teclado e para listas. Ninguém lê japonês em latim.') },
  ],
  notes: [
    {
      label: T('São três sistemas, não dois'),
      text: T(
        'Hiragana, katakana e kanji. Os dois primeiros são silabários; o terceiro é ideograma. Muitas palavras são os dois ao mesmo tempo: {食べ物} se escreve em kanji e se lê {tabemono}.',
      ),
    },
    {
      label: T('A partícula do tópico faz o trabalho do verbo'),
      text: T(
        'Em "eu como maçã", o {は} de "eu" é a partícula que vem depois do pronome. Quando aparece depois de um nome, é contraste: "quanto a ele, ele vai".',
      ),
    },
  ],
  examples: [
    { text: '水を飲む', gloss: T('mizu o nomu — bebo água') },
    { text: '食べ物を食べる', gloss: T('tabemono o taberu — como comida') },
    { text: 'これは本です', gloss: T('kore wa hon desu — isto é um livro') },
    { text: '本を読む', gloss: T('hon o yomu — leio um livro') },
  ],
  tables: [
    {
      caption: T('As duas caligrafias, o mesmo som'),
      head: [T('Caligrafia'), T('Exemplo'), T('Quando se usa')],
      rows: [
        [T('hiragana'), T('{の}'), T('gramática e tudo que é comum')],
        [T('katakana'), T('{ノ}'), T('estrangeiro, nome próprio, ênfase')],
        [T('kanji'), T('{水}'), T('o conteúdo, e a etymologia à vista')],
      ],
    },
    {
      caption: T('As quatro partículas que aparecem em tudo'),
      head: [T('Partícula'), T('Função'), T('Exemplo')],
      rows: [
        [T('{は}'), T('tópico: "quanto a X"'), T('{私は} — quanto a mim')],
        [T('{を}'), T('objeto direto'), T('{水を} — a água, como objeto')],
        [T('{に}'), T('destino, direção, tempo'), T('{家に} — para casa')],
        [T('{の}'), T('posse e vínculo'), T('{私の} — meu, de mim')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {水を飲む}, qual partícula marca o objeto direto?'),
    options: [T('{は}'), T('{を}'), T('{に}'), T('{の}')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "bebo água" com a partícula de objeto: 水____飲む'),
      answer: 'を',
    },
    {
      kind: 'match',
      prompt: T('Ligue a partícula à função'),
      pairs: [
        { a: T('{を}'), b: T('objeto direto') },
        { a: T('{は}'), b: T('tópico') },
        { a: T('{に}'), b: T('destino ou direção') },
        { a: T('{の}'), b: T('posse') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual caligrafia se usa para uma palavra estrangeira como "computador"?'),
      options: [T('hiragana'), T('katakana'), T('kanji'), T('romaji')],
      answer: 1,
    },
  ],
};
