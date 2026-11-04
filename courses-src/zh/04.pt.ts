import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  section: T('Fonética'),
  title: T('Sem espaços: onde acaba a palavra'),
  subtitle: T('Três caracteres formam quase sempre uma palavra, e o contexto decide'),
  body: C(`## O problema

O Mandarin é escrito sem espaços entre palavras. Um principiante vê {我爱你} e não sabe se isso é uma palavra, duas ou três. A boa notícia: na prática, **quase todas as palavras têm dois ou três caracteres**, e em geral se agrupam de dois em dois.

{Mā ma} são dois caracteres e uma palavra: "mãe". {Chī fàn} também: "comer". A dificuldade aparece nas palavras de quatro ou mais caracteres, como {Shàngchuán}, e é aí que o vocabulário salva: se você reconhece os componentes, reconhece a palavra.

## Três regras que resolvem o caso comum

A primeira: {wǒ}, "eu", {nǐ}, "você", e {tā}, "ele", são palavras de um só caractere, e quase todo o resto se agrupa em pares. A segunda: locução e palavra composta de quatro caracteres separam-se em dois pares, como {xīn ài}, "amor genuíno", ou {měi lì}, "beleza". A terceira: não existe separação entre {的} e o que vem antes. {wǒ} + {的} + {shū} é "o meu livro", e o {的} é uma partícula de vínculo, como um "de" português colado.

## Números, nomes e títulos na leitura da Bíblia

Números de versículo e referências são um alívio: {约翰} {3} {16} lê-se "Yīnyà sān shíliù", e a pessoa que procura passa direto. Já os nomes próprios compostos, como o de Israel, e os títulos podem demorar mais: muitos começam por {主}, que é o nome de Deus. Decore-se os nomes em bloco, e não caractere solto.`),
  vocab: [
    V('wǒ', '我', 'eu (wǒ)'),
    V('ài', '爱', 'amar (ài)'),
    V('nǐ', '你', 'você (nǐ)'),
    V('tā', '他', 'ele (tā)'),
    V('的', '的', 'partícula de vínculo (de)'),
    V('shū', '书', 'livro (shū)'),
    V('fàn', '吃饭', 'comer (chī fàn)'),
    V('约翰', '约翰', 'João (Yuēhàn)'),
    V('主', '主', 'Senhor; dono (zhǔ)'),
  ],
  rules: [
    { n: '1', text: T('Palavras têm quase sempre dois ou três caracteres.') },
    { n: '2', text: T('{我} {你} {他} são palavras de um só caractere; o resto, em pares.') },
    { n: '3', text: T('A partícula {的} liga sem espaço: {wǒ de shū} = "o meu livro".') },
    { n: '4', text: T('Palavras de quatro caracteres normalmente se dividem em dois pares.') },
  ],
  notes: [
    {
      label: T('O pinyin ajuda a separar'),
      text: T(
        'As edições com pinyin separam cada sílaba — {shàng} {chuán} — o que mostra onde acaba a sílaba e, com o hábito, onde acaba a palavra.',
      ),
    },
  ],
  examples: [
    { text: '妈妈', gloss: T('mā ma — mãe (dois dos mesmos caracteres)') },
    { text: '我的书', gloss: T('wǒ de shū — o meu livro') },
    { text: '吃饭', gloss: T('chī fàn — comer') },
    { text: '爱心', gloss: T('xīn ài — amor genuíno') },
  ],
  tables: [
    {
      caption: T('Onde acaba a palavra'),
      head: [T('Escrito'), T('Separado'), T('Significado')],
      rows: [
        [T('{我爱你}'), T('{wǒ} {ài} {nǐ}'), T('eu amo você — três palavras')],
        [T('{吃饭}'), T('{chī} {fàn}'), T('comer — uma palavra')],
        [T('{我的书}'), T('{wǒ} {的} {shū}'), T('o meu livro — três palavras')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {我的书}, o que é {的}?'),
    options: [T('Um verbo'), T('Uma partícula de vínculo'), T('Um pronome'), T('Um numeral')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete "amar": 吃____ (comer) e ____爱 (amar)'), answer: '饭' },
    {
      kind: 'match',
      prompt: T('Ligue a palavra ao sentido'),
      pairs: [
        { a: T('{我}'), b: T('eu') },
        { a: T('{书}'), b: T('livro') },
        { a: T('{吃饭}'), b: T('comer') },
        { a: T('{主}'), b: T('Senhor; dono') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
