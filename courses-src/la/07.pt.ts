import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('Primeiro texto: João 1:1-5 na Vulgata'),
  subtitle: T('Onze versículos, três verbos — como a Vulgata ordena uma frase'),
  section: T('Verbos, tempos e os primeiros textos'),
  body: C(`## O texto

Leitura da Vulgata, João 1:1-5:

> In principio erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum.
> Hoc erat in principio apud Deum.
> Omnia per ipsum facta sunt, et sine ipso factum est nihil quod est.
> In ipso vita erat, et vita erat lux hominum.
> Et lux in tenebris lucet, et tenebrae eam non comprehenderunt.

## Análise da primeira frase

**In principio erat Verbum.** Três palavras e três funções: {In} com ablativo = «no», {principio} = ablativo de lugar, {erat} = verbo {sum} na 3.ª do imperfeito, {Verbum} = sujeito no nominativo. A ordem é {«adjunto + verbo + sujeito»} — o inverso da nossa, e é a ordem mais antiga e mais literária.

**et Verbum erat apud Deum.** O {e} de {et} mudou para {Verbum}? Não: o copista reproduziu o grego, onde a regra é firme, e em latim a forma alternativa {Verbum} é simplesmente mais bonita de pronunciar. Note a repetição de {erat}: o verbo não varia, o sujeito é que se repete. Em latim você raramente expressa com pronomes o que o substantivo já diz.

**et Deus erat Verbum.** Aqui a construção muda de figura. {Deus} no nominativo e {Verbum} sem artigo no nominativo: é uma predicação de identidade, uma equação. Em latim isso se faz com o verbo {sum} e sem verbo auxiliar nenhum — {Deus erat Verbum} «Deus era a Palavra».

## A ordem de palavras que o latin prefere

Compare os dois sistemas:

| Conceito | Grego | Latim |
|---|---|---|
| neutro (prosa) | verbo em 2.º lugar | — |
| verbo | no fim da oração | posição livre |
| sujeito | vem depois | vem antes |

O que para o grego é a norma, para o latim é apenas o tom literário: em prosa corrente o latim também põe o verbo em segundo, como em {Deus verbum erat}.

## Sine ipso factum est nihil

Esta é a frase mais elegante da Vulgata, e tudo nela é ablativo. {Sine} governa o ablativo {ipso}; {nihil} é o sujeito, {quod est} é a oração relativa que define o nada, e {factum est} é o verbo {facere} no perfeito passivo. O verbo {sum} aparece duas vezes com sentidos distintos: {est} na relativa é o {sum} simples, e {est} em {factum est} é apenas o auxiliar do passivo.

Repare na negação: {nihil} é o acusativo neutro de {nihil}, e é justamente por ser neutro que pode ser sujeito. Se fosse {nemo}, o sujeito teria de ser {nemo} e o verbo ficaria {nihil factum est}.`),
  vocab: [
    V('Verbum', 'verbum', 'palavra, Verbo'),
    V('principium', 'principium', 'princípio, começo'),
    V('in', 'in', 'em, dentro de (+ abl.)'),
    V('apud', 'apud', 'junto a, perto de'),
    V('Deus', 'Deus', 'Deus'),
    V('omnia', 'omnia', 'todas as coisas'),
    V('per', 'per', 'por, através de'),
    V('sine', 'sine', 'sem (+ abl.)'),
    V('vita', 'vita', 'vida'),
    V('lux', 'lux', 'luz'),
    V('tenebrae', 'tenebrae', 'trevas, escuridão'),
    V('lucet', 'luceo', 'brilha (de {lux})'),
    V('comprehendunt', 'comprehendo', 'alcançam, percebem'),
    V('mundus', 'mundus', 'mundo'),
    V('factus', 'facio', 'feito, formado (part. de {facio})'),
    V('homo', 'homo', 'homem, ser humano'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {In principio erat Verbum}, qual é a função de {principio}?'),
    options: [
      T('Ablativo de lugar, governado por {in}'),
      T('Genitivo, «do princípio»'),
      T('Acusativo, objeto de {erat}'),
      T('Dativo, «ao princípio»'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Por que {Deus erat Verbum} é uma equação, e não uma metáfora?'),
      options: [
        T('Os dois termos estão no mesmo caso: nominativo'),
        T('O verbo {erat} é o mesmo nas duas orações anteriores'),
        T('Não há artigo, e o latim não os usaria numa metáfora'),
        T('Porque {Verbum} é o único substantivo neutro do versículo'),
      ],
      answer: 0,
      hint: T('Regra §4.'),
    },
    {
      kind: 'fill',
      prompt: T('Em {sine ipso factum est nihil}, {sine} governa que caso? (uma palavra)'),
      answer: 'ablativo',
      hint: T('É o mesmo caso de {principio} em {In principio}.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo ao que ele faz no versículo 1'),
      pairs: [
        { a: T('In'), b: T('preposição, sempre com ablativo') },
        { a: T('erat'), b: T('verbo {sum} no imperfeito, 3.ª sing.') },
        { a: T('apud'), b: T('preposição, sempre com acusativo') },
        { a: T('et'), b: T('conjunção, «e»') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{in}, {sine}, {cum}, {per} regem ablativo; {apud}, {ad}, {per} com sentido de movimento regem acusativo.',
      ),
    },
    {
      n: '2',
      text: T(
        'O verbo {sum} no imperfeito exprime duração sem princípio — o tempo que não começa.',
      ),
    },
    {
      n: '3',
      text: T('A equação se faz com {sum} entre dois termos no mesmo caso: {Deus erat Verbum}.'),
    },
    {
      n: '4',
      text: T('O latim evita pronomes redundantes: repete o substantivo, não o {is}/{ea}/{id}.'),
    },
    {
      n: '5',
      text: T(
        'Em {factum est} o {est} é só auxiliar do passivo; em {nihil quod est} o mesmo {est} é {sum} simples.',
      ),
    },
  ],
  notes: [
    {
      label: T('λόγος:'),
      text: T(
        'O grego original de {Verbum} é λόγος — palavra que em grego significa tanto «palavra» quanto «relação», «ordem», «raciocínio». Jerônimo não traduziu por {sermo} «sermão» nem por {verbum} no sentido retórico: manteve {Verbum} porque em latim o termo já carregava a tensão entre palavra dita e palavra que cumpre. Repare em como {per ipsum} repete o {Verbum} sem nomeá-lo, e em como {quod est} traduz λόγος uma segunda vez.',
      ),
    },
    {
      label: T('Tempo verbal:'),
      text: T(
        'O latim não tem os tempos que o português tem. O que existe é o **aspecto**: o perfeito {lucet → non comprehenderunt} mostra o conjunto da ação vista do fim, o imperfeito {erat} mostra o processo visto de dentro. Traduzir sempre por um tempo do português faz o texto latim ficar mais plano do que é.',
      ),
    },
  ],
  examples: [
    { text: 'In principio', gloss: T('«no princípio» — {in} + ablativo') },
    { text: 'erat Verbum', gloss: T('«era a Palavra» — verbo antes do sujeito') },
    { text: 'apud Deum', gloss: T('«junto a Deus» — {apud} + acusativo') },
    { text: 'Deus erat Verbum', gloss: T('«Deus era a Palavra» — equação') },
    { text: 'Hoc erat in principio apud Deum', gloss: T('«Isto era no princípio junto a Deus»') },
    { text: 'Omnia per ipsum facta sunt', gloss: T('«Todas as coisas foram feitas por ele»') },
    { text: 'sine ipso', gloss: T('«sem ele» — {sine} + ablativo') },
    { text: 'factum est nihil', gloss: T('«foi feito nada» — {nihil} é sujeito neutro') },
    { text: 'lux hominum', gloss: T('«luz dos homens» — genitivo de posse') },
    {
      text: 'tenebrae eam non comprehenderunt',
      gloss: T('«as trevas não a alcançaram» — {eam} = a luz'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Análise de {In principio erat Verbum}'),
      head: [T('Palavra'), T('Caso'), T('Função'), T('Glosa')],
      rows: [
        ['In', T('—'), T('preposição'), 'em, no (+ ablativo)'],
        ['principio', T('ablativo sing.'), T('lugar'), 'no princípio'],
        ['erat', T('3.ª sing.'), T('verbo {sum}, imperfeito'), 'era'],
        ['Verbum', T('nominativo sing.'), T('sujeito'), 'a Palavra'],
      ],
    },
    {
      caption: T('Tabela 2 — Verbos de {In principio} a {non comprehenderunt}'),
      head: [T('Forma'), T('Lema'), T('Tempo e modo'), T('Tradução')],
      rows: [
        ['erat', 'sum', T('imperfeito do indicativo'), 'era'],
        ['est', 'sum', T('presente do indicativo'), 'é'],
        ['sunt', 'sum', T('presente do indicativo'), 'foram feitos'],
        ['factum est', 'facio', T('perfeito passivo'), 'foi feito'],
        ['lucet', 'luceo', T('presente do indicativo'), 'brilha'],
        ['comprehenderunt', 'comprehendo', T('perfeito do indicativo'), 'alcançaram'],
      ],
    },
  ],
};
