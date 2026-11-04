import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  section: T('Números'),
  title: T('Contar: classificadores e a forma —er'),
  subtitle: T('Nenhum número vai sozinho; cada substantivo pede o seu'),
  body: C(`## Nenhum número é autossuficiente

Em português, "dois livros" é "livros" mais "dois". Em chinês o número é quase sempre **incompleto**: {liǎng} {běn} {shū}, dois livros, em que {běn} é o *classificador*, uma palavra que indica a categoria e a forma do que se conta. O número diz quanto; o classificador diz o quê.

Há cerca de cem classificadores, e não é preciso decorar todos. Os que resolvem quase tudo são poucos: {个} (gè, o genérico, a escolha padrão quando nada mais se impõe), {本} (běn, para livros e objetos com páginas), {只} (zhī, para animais), {位} (wèi, para pessoas, com polidez), {张} (zhāng, para folhas). Cada um tem um motivo: {本} vem de *raiz* e {本} era um rolo de bambu, {只} vem de *uma só pata* e conta as patas de um bicho, {张} é o *estirar* de uma folha. O motivo quase sempre explica a regra.

## A forma {er}

Depois do número, o substantivo pode tomar uma forma terminada em {er}: {liǎng} {běn} {shū} e {yī} {běn} {shū}, dois livros, um livro. A forma {er} é um eco do Mandarin falado antigo e aparece sobretudo com um, dois e alguns: {yī} {zhī} {yā}, "uma galinha".

Isto **não** é o plural português. {shū} não vira "livros": o plural já está no {er}, e {shū} é o mesmo substantivo nas duas frases. Um iniciante traduzindo do português chega a {shū} {sān}, "livros três", e erra, porque não há posição para o substantivo vir depois do número.

A confusão tem uma origem: o {er} do plural não é o mesmo que a {érhuà} do primeiro capítulo. Aquele conta; este apenas suaviza o som. São dois fenômenos distintos que os cursos de mandarim costumam juntar, e o Mandarin falado os trata de forma diferente: em Pequim o plural antigo sobrevive, noutros dialetos desapareceu.

## Números e contagem nos Salmos

Os números aparecem o tempo todo nos Salmos e nos evangelhos: "três dias", "duzentos", "muitos anos". E a aritmética do versículo 3 de Ezequiel, {sì shí} {nián}, {sì shí} {nián} {hé} {sān} {gè} {yuè}, mostra o outro lado do classificador: os três termos contam a mesma unidade e usam o mesmo {个}, e é a ausência do numeral no terceiro que revela que {个} é o que se repete. Um tradutor que traduz cada termo por seu valor perde essa contagem. Ler isso sem saber classificadores é uma parede.`),
  vocab: [
    V('个', '个', 'classificador genérico (gè)'),
    V('běn', '本', 'classificador para livros (běn)'),
    V('zhǐ', '只', 'classificador para animais (zhī)'),
    V('zhāng', '张', 'classificador para folhas (zhāng)'),
    V('位', '位', 'classificador cortês para pessoas (wèi)'),
    V('liǎng', '两', 'dois (liǎng)'),
    V('sān', '三', 'três (sān)'),
    V('shū', '书', 'livro (shū)'),
    V('数字', '数字', 'número (shùzì)'),
  ],
  rules: [
    { n: '1', text: T('O número nunca vai sozinho: vem com um classificador.') },
    {
      n: '2',
      text: T('{两} "dois" usa-se só com classificador; {二} é o "dois" de número abstracto.'),
    },
    {
      n: '3',
      text: T('A forma {—er} marca plural com um, dois e alguns: {yī běn shū} = "um livro".'),
    },
    {
      n: '4',
      text: T('O substantivo nunca muda de forma: o plural está no {er}, não no substantivo.'),
    },
  ],
  notes: [
    {
      label: T('O plural antigo sobrevive em Pequim'),
      text: T(
        'No Mandarin falado de Pequim o {er} sobrevive: "dois livros" sai {liǎng běn shūr}, com o {r} no fim do substantivo, e o mesmo vale para um, {yī běn shūr}. Noutros dialectos — no sul, em Xangai — o {er} desapareceu e a frase é {liǎng běn shū}, sem nada depois do substantivo. É por isso que a forma escrita {shū} + {er} parece tão estranha: ela não é a forma falada de quase ninguém, é a forma antiga que o texto preserva.',
      ),
    },
  ],
  examples: [
    { text: '两个', gloss: T('liǎng gè — dois (coisas pequenas)') },
    { text: '三本', gloss: T('sān běn — três livros') },
    { text: '三只', gloss: T('sān zhī — três animais') },
    { text: '一张', gloss: T('yì zhāng — uma folha') },
  ],
  tables: [
    {
      caption: T('O mesmo número, classificadores diferentes'),
      head: [T('Classificador'), T('Para'), T('Exemplo')],
      rows: [
        [
          T('{个} gè'),
          T('coisas pequenas e abstratas; padrão quando nada mais manda'),
          T('{yī gè rén} uma pessoa'),
        ],
        [T('{本} běn'), T('livros, registos'), T('{sān běn shū} três livros')],
        [T('{只} zhī'), T('animais'), T('{yī zhī gǒu} um cão')],
        [T('{位} wèi'), T('pessoas, com polidez'), T('{yī wèi xiānsheng} um senhor')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual classificador completa {三 ____ 鸡}?'),
    options: [T('{本}'), T('{只}'), T('{张}'), T('{个}')],
    answer: 1,
    hint: T('{鸡} é uma galinha, e {鸡} classifica-se como animal.'),
  },
  exercises: [
    { kind: 'fill', prompt: T('Escreva o numeral de "três" em caracteres: ____'), answer: '三' },
    {
      kind: 'match',
      prompt: T('Ligue o substantivo ao classificador'),
      pairs: [
        { a: T('livro {书}'), b: T('{本}') },
        { a: T('cão {狗}'), b: T('{只}') },
        { a: T('página {页}'), b: T('{张}') },
        { a: T('coisa {人}'), b: T('{个}') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
