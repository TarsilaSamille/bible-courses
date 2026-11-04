import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('Artigos e substantivos'),
  subtitle: T('a/an/the e a formação do plural'),
  section: T('O substantivo'),
  body: C(`## O sistema de artigos

O inglês distingue três funções que o português expressa de maneiras diferentes. {a/an} introduz algo ainda não identificado; {the} remete a algo já identificável para quem ouve ou pelo contexto; a ausência de artigo costuma indicar generalização ou uma classe inteira.

Escolha {an} pelo som, não pela letra: {an hour} tem h mudo; {a university} começa com som consonantal. Nomes próprios normalmente não levam artigo: {Jesus}, {Mary}, {London}. Os plurais gerais também não: {Birds fly}; {The birds in the cage fly} identifica um grupo concreto.

## Número e contagem

Os plurais regulares acrescentam {-s}; palavras terminadas em {-s, -sh, -ch, -x} acrescentam {-es}. Se {y} vier depois de consoante, {-y} vira {-ies}: {city} → {cities}. Alguns substantivos só existem no plural, como {sheep}, e plurais irregulares são frequentes nos textos bíblicos: {man/men}, {woman/women}, {child/children}, {foot/feet}, {mouse/mice}.

## Critério de leitura

Pergunte primeiro se o substantivo é contável. Depois decida se quem fala apresenta um item não especificado, um item identificável ou a classe inteira. No inglês bíblico, a escolha do artigo também carrega ritmo e foco: {the Word}, {the Father}, {the light} desviam a atenção para um referente determinado.`),
  vocab: [
    V('the', 'the', 'o/a determinado'),
    V('a/an', 'a', 'um/uma'),
    V('Word', 'word', 'Palavra'),
    V('light', 'light', 'luz'),
    V('shepherd', 'shepherd', 'pastor'),
    V('men', 'man', 'homens'),
    V('women', 'woman', 'mulheres'),
    V('children', 'child', 'crianças'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual forma completa naturalmente a frase: “I saw ___ shepherd”?'),
    options: [
      T('a (um pastor qualquer)'),
      T('the (um pastor já identificado)'),
      T('an (um pastor qualquer)'),
      T('sem artigo'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('O plural de city é ___.'),
      answer: 'cities',
      hint: T('y precedida de consonante muda para -ies.'),
    },
    {
      kind: 'match',
      prompt: T('Relacione uso y artículo.'),
      pairs: [
        { a: T('general'), b: T('sin artículo') },
        { a: T('identificable'), b: T('the') },
        { a: T('uno no especificado'), b: T('a/an') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('Por qué se dice an hour?'),
      options: [
        T('porque hour termina en vocal escrita'),
        T('porque la h de hour es muda'),
        T('porque todas las h son mudas'),
        T('porque hour es plural'),
      ],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Use a/an para uma unidade contável ainda não identificada; nas perguntas e negações, o plural exige some: some books, not a books.',
      ),
    },
    {
      n: '2',
      text: T(
        'Use the quando o referente é identificável ou quando o plural significa el conjunto entero.',
      ),
    },
    {
      n: '3',
      text: T('No plural general no se usa artículo; con un grupo delimitado, suele usarse the.'),
    },
    { n: '4', text: T('a/an depende de la pronunciación: an hour, a university.') },
  ],
  notes: [
    {
      label: T('Registro:'),
      text: T('Omissão de artigo e substantivos próprios são gramaticais, não erros.'),
    },
  ],
  examples: [
    { text: '{the Word}', gloss: T('a Palavra: referente determinado') },
    { text: '{a disciple}', gloss: T('um discípulo: ainda não identificado') },
    { text: '{Christians pray}', gloss: T('os cristãos oram: generalização') },
    { text: '{the children in the house}', gloss: T('as crianças da casa: grupo delimitado') },
  ],
  tables: [
    {
      caption: T('Artigos e contabilidade'),
      head: [T('Contexto'), T('Uso'), T('Ejemplo')],
      rows: [
        [T('Un ejemplo no identificado'), T('a/an + singular'), '{a shepherd}'],
        [T('Referente identificable'), T('the + singular/plural'), '{the shepherd}'],
        [T('Toda una clase'), T('plural sin artículo'), '{Shepherds care for sheep}'],
      ],
    },
  ],
};
