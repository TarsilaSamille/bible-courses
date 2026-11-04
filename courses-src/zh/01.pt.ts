import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  section: T('Escrita'),
  title: T('O ideograma é uma palavra, não uma letra'),
  subtitle: T(
    'Nenhum caractere corresponde a um som, e é por isso que o aprendizado vai do desenho para o todo',
  ),
  body: C(`## Um caractere, uma palavra

Em português, "a" é uma letra e "casa" são quatro. Em chinês não existe essa separação: cada caractere vale por uma palavra ou por um pedaço dela. Não há um "a" separado, e por isso ninguém diz que alguém "soletra" em chinês. Diz-se {cá} {zi} {xiě}, "compor caracteres".

A consequência é a inversa da do português. Quem reconhece o som de uma palavra inglesa não sabe nada sobre o significado; quem reconhece um caractere chinês já sabe o significado, mesmo sem entender a frase. Por isso um leitor iniciante de {Zhōng} {guó} ("China") entende mais num relance do que quem está decorando o alfabeto pinyin.

## Por que os caracteres não parecem um código

Há uma tentação de ler o chinês como um código: cada caractere seria uma letra trocada. Não é. Um caractere é uma **palavra**, e as palavras se combinam como em qualquer língua. {nǐ} {hǎo} são duas palavras, "você é bom", não três letras.

Os caracteres também não foram inventados de uma vez. {日} e {月}, sol e lua, são os componentes de {明}, "claro", e reconhecer essas combinações é o que faz o vocabulário crescer rápido.

## O que a escrita traz para a leitura da Bíblia

Três coisas. A {和合本}, de 1919, usou caracteres que já eram usuais na escrita do século XIX, e por isso o texto antigo se lê hoje sem soar arcaico. A referência bíblica é livro, capítulo e versículo, na mesma ordem da ocidental. E, como cada caractere é uma palavra, um versículo de João 1 tem cerca de vinte palavras: dá para aprendê-las uma a uma.`),
  vocab: [
    V('zhōng', '中', 'meio; centro; China (zhōngguó)'),
    V('guó', '国', 'país (guó)'),
    V('hǎo', '好', 'bom (hǎo)'),
    V('人', '人', 'pessoa; gente (rén)'),
    V('日', '日', 'sol; dia (rì)'),
    V('月', '月', 'lua; mês (yuè)'),
    V('明', '明', 'claro; brilhante (míng)'),
    V('cá', '字', 'caractere (zì)'),
    V('xiě', '写', 'escrever (xiě)'),
    V('和合本', '和合本', 'a Union Version, Bíblia chinesa de 1919'),
  ],
  rules: [
    {
      n: '1',
      text: T('Um caractere vale por uma palavra, não por um som. Não há alfabeto chinês.'),
    },
    { n: '2', text: T('Reconhecer o caractere já entrega o significado — o oposto do português.') },
    { n: '3', text: T('Reconhecer os componentes (radical) abre portas: {明} tem {日} e {月}.') },
  ],
  notes: [
    {
      label: T('Qual tradução china usar'),
      text: T(
        '{和合本} (Union Version, 1919) é a mais lida e usa caracteres que já eram correntes no século XIX — o texto não soa arcaico.',
      ),
    },
    {
      label: T('Mandarim ou cantonês'),
      text: T(
        'O curso ensina o chinês padrão (putonghua), que é o da {和合本} em todo o Continente. O cantonês usa caracteres quase iguais e outra pronúncia.',
      ),
    },
  ],
  examples: [
    { text: '中', gloss: T('centro; China') },
    { text: '中国', gloss: T('China') },
    { text: '好人', gloss: T('pessoa boa') },
    { text: '明', gloss: T('claro (sol + lua)') },
    { text: '写字', gloss: T('escrever caracteres') },
  ],
  tables: [
    {
      caption: T('Composição de três caracteres'),
      head: [T('Caractere'), T('Componente'), T('Sentido')],
      rows: [
        [T('明'), T('{日} + {月}'), T('sol + lua = claro')],
        [T('好'), T('{女} + {子}'), T('mulher + filho = bom')],
        [T('和'), T('{禾} + {口}'), T('grão + boca = harmónico')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('O que {明} significa, e por quê?'),
    options: [
      T('Claro, porque une sol e lua'),
      T('Escuro, porque é a noite'),
      T('Não tem significado próprio'),
      T('Significa apenas "escrever"'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Escreva o caractere da lua: ____'),
      answer: '月',
      hint: T('O mesmo caractere significa também "mês".'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o caractere ao sentido'),
      pairs: [
        { a: T('{人}'), b: T('pessoa') },
        { a: T('{日}'), b: T('sol; dia') },
        { a: T('{好}'), b: T('bom') },
        { a: T('{字}'), b: T('caractere') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
