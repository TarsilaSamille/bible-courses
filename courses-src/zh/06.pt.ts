import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  section: T('Pronomes'),
  title: T('Pronomes e demonstrativos'),
  subtitle: T('O Mandarin economiza como o português — e é isso que o torna difícil de ler'),
  body: C(`## Três pronomes, um só

O chinês tem {wǒ} (eu), {nǐ} (você) e {tā} (ele). Não há distinção de gênero nem de formalidade: o "você" respeitoso é o mesmo {nǐ}, e a distinção está no verbo.

O ponto que complica a leitura é que **o pronome costuma ser omitido**. Em {tā shì shīfu}, "ele é professor", o sujeito pode ser omitido se o contexto já disse quem é. O português obriga; o Mandarin dispensa. Lendo um versículo, o grupo {chū} {qù} por si só não diz "quem", e a leitura bíblica está cheia de sujeito omitido.

## Demonstrativos: onde, não qual

Os demonstrativos são {zhè} (este, perto) e {nà} (esse, longe), e vêm depois do substantivo: {zhè} {běn} {shū} é "este livro", literalmente "livro-este". Não há artigo nem gênero, e {zhè} {shān} e {nà} {shān} são "esta montanha" e "aquela montanha".

A posição importa porque {zhè} {zhè} também significa "isto é": {wǒ} {zhè} {zhè} {shì} {shuō} {de} quer dizer "isto é o que estou a dizer".

## A omissão do sujeito nos Salmos

Os Salmos são o caso mais duro. Salmos como o 23 são quase todos sintagmas nominais sem verbo explícito, e em Mandarin isso produz frases que parecem incompletas ao olho português. Reconhecer a omissão do sujeito e do verbo é o que separa quem está a ler de quem está a decorar caracteres.`),
  vocab: [
    V('wǒ', '我', 'eu (wǒ)'),
    V('nǐ', '你', 'você (nǐ)'),
    V('tā', '他', 'ele; ela (tā)'),
    V('zhè', '这', 'este, perto (zhè)'),
    V('nà', '那', 'esse, longe (nà)'),
    V('shì', '是', 'ser (shì)'),
    V('出去', '出去', 'sair (chūqù)'),
    V('shān', '山', 'montanha (shān)'),
    V('主', '主', 'Senhor (zhǔ)'),
  ],
  rules: [
    { n: '1', text: T('O pronome do sujeito é omitido quando o contexto já o diz.') },
    { n: '2', text: T('Não há gênero nem pessoa formal: {tā} serve para ele e para ela.') },
    {
      n: '3',
      text: T('Os demonstratives vêm DEPOIS do substantivo: {zhè běn shū} = "este livro".'),
    },
    { n: '4', text: T('{zhè zhè} também significa "isto é": {wǒ zhè zhè shì shuō de}.') },
  ],
  notes: [
    {
      label: T('Omitir não é opcional'),
      text: T(
        'Quando o sujeito é omitido e nada antes o identificou, a frase fica realmente ambígua. Nos Salmos isso acontece a cada versículo, e é por isso que o estudo de Salmos em chinês começa pela gramática e não pelo texto.',
      ),
    },
  ],
  examples: [
    { text: '他是老师', gloss: T('tā shì lǎoshī — ele é professor') },
    { text: '这本书', gloss: T('zhè běn shū — este livro') },
    { text: '那山', gloss: T('nà shān — aquela montanha') },
    { text: '我这就是', gloss: T('wǒ zhè jiù shì — isto é o que eu digo') },
  ],
  tables: [
    {
      caption: T('Onde o pronome aparece e onde some'),
      head: [T('Frase'), T('Com pronome'), T('Sem pronome')],
      rows: [
        [T('afirmação'), T('{wǒ shì shīfu} eu sou professor'), T('{wǒ} é obrigatório')],
        [T('pergunta'), T('{nǐ shì lǎoshī ma} você é professor?'), T('{nǐ} é obrigatório')],
        [T('resposta'), T('{shì de} sim'), T('{shì} basta: o sujeito vem do contexto')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {这本书}, o que {这} faz?'),
    options: [
      T('Vem antes do substantivo, como artigo'),
      T('Vem depois do substantivo, a apontar'),
      T('É um verbo'),
      T('É um numeral'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "ele" com o pronome: ____ 是 老师 (ele é professor)'),
      answer: '他',
    },
    {
      kind: 'match',
      prompt: T('Ligue o pronome à pessoa'),
      pairs: [
        { a: T('{我}'), b: T('eu') },
        { a: T('{你}'), b: T('você') },
        { a: T('{他}'), b: T('ele; ela') },
        { a: T('{这}'), b: T('este (perto)') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
