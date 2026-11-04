import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('Indefinidos e partitivos'),
  subtitle: T(
    '{un, une, des} — o artigo que apresenta e a que marca uma porção que ninguém contou',
  ),
  section: T('Artigos'),
  body: C(`## Três artigos, três funções

O artigo indefinido tem duas variantes por gênero: {un} masculino e {une} feminino, e no plural uma só forma para ambos, {des}. Ele elide-se exatamente como {le} e {la}: {un ami}, {une amie}, {un homme}, {une école}, {un œil}, {une histoire}.

A diferença crucial com o português está no plural. Em português {um} só existe no singular: um livro, dois livros. Em francês {des} é um plural de verdade, e é aqui que ele se divide em dois usos completamente distintos.

**Indefinido plural**: {des} = «alguns, certos». {Il a des frères} «ele tem irmãos» não diz quantos nem quais, apenas que existem mais de um. Note que {des frères} e {les frères} podem ser quase sinônimos em contexto; a diferença é de foco.

**Partitivo**: {du, de la, de l’, des} = «um pouco de, uma certa quantidade de». Aparece com substantivos de massa — alimentos, materiais e substantivos abstratos — e é o equivalente français de «sem artigo» em português: {du pain} «pão», {de l’eau} «água», {du vin} «vinho», {des légumes} «legumes», {du courage} «coragem», {de la patience} «paciência».

## Quando o partitivo vira definido: a chave de toda a gramática

O partitivo deixa de existir quando o substantivo passa a ser **contado**. Isso acontece em três situações que você vai reconhecer na hora:

1. Quando a unidade é nomeada: {une pomme} «uma maçã», {deux pommes} «duas maçãs» — a partir de dois, o plural definido {les pommes} é obrigatório.
2. Quando o substantivo é medido: {un mètre de tissu} «um metro de tecido», {deux kilos de farine} «dois quilos de farinha».
3. Quando se nega ou se restringe: {Je ne veux pas de sucre} «não quero açúcar», {Il n’y a pas de vie ici} «não há vida aqui».

Regra prática: se você pode dizer «quantos?», use o definido. {J’ai {du}pain} é «tenho pão»; {J’ai {le}pain} é «tenho o pão, aquele pedaço específico»; {J’ai {des}pains} é «tenho pães, alguns pães».

## A negação come a partição

Aqui está uma das regras maisrent productive e mais Beautifully French do curso: **a negação {ne … pas} apaga o artigo partitivo inteiro**.

- {Il a du pain} «ele tem pão» → {Il n’a pas de pain} «ele não tem pão»
- {Elle boit du vin} «ela bebe vinho» → {Elle ne boit pas de vin} «ela não bebe vinho»
- {Je veux du sucre} «eu quero açúcar» → {Je ne veux pas de sucre} «eu não quero açúcar»

Ou seja: {pas de}, nunca {pas du}, {pas de la}, {pas des}. Mas repare que o **definido** resiste à regra: {Je ne veux pas le pain} continua com {le}, porque aquele pão específico continua existindo — só não é o que eu quero. A negação apaga o que é uma porção indefinida, não o que é uma coisa já identificada.

E a mesma regra vale com {sans} «sem», {avant} «antes de» e {jusqu’à} «até», que funcionam como pseudo-negações: {sans du courage} «sem coragem», {avant la lettre} «antes da carta», {jusqu’à la fin} «até o fim».

## {du} tem duas origens, e isso explica seus dois usos

Do ponto de vista histórico, {du} é a contração de {de + le} e {des} é a de {de + les}. A regra do capítulo anterior ({de + le = du}) e o partitivo deste capítulo ({du} = um pouco de) são **o mesmo fato gramatical visto de dois ângulos**.

E há uma consequência prática_negative notável: como {du} vem de {de}, ele **não aparece depois de outras preposições**. Você diz {avec du pain} «com pão», {sans du vin} «sem vinho», {par {de} la lettre} «pela carta» — mas nunca {à du} nem {de du}. E o plural segue a mesma lógica: {avec des légumes} «com legumes», {sans des}~

Por outro lado, o partitivo se usa livremente como se fosse um indefinido comum: {J’ai {du} temps} «tenho tempo», {Elle a {de} la patience} «ela tem paciência», {Il reste {des} doubts} «restam dúvidas». E quando o substantivo é abstrato e contável, o definido pode aparecer: {loptimisme} «o otimismo», {le courage} «a coragem».

## Leitura aplicada

O texto de **Louis Segond** em {Jean 1:6} é um laboratório de artigos: {Il y eut un homme envoyé de Dieu, dont le nom était Jean}.

{un homme} — indefinido singular, o artigo **apresenta** um homem que ainda não conhecemos. {envoyé de Dieu} — {de} aqui é preposição de origem, não partitivo, porque {Dieu} é nome próprio e não pode ser medido. E {le nom} volta ao definido: aquilo que ele **tem**, uma coisa já determinada. Uma frase, três funções.

Em {Jean 1:3}: {Toutes les choses ont été faites par lui, et sans lui rien n’a été fait qui ait été fait}. {Toutes les choses} — {toutes} é quantificador e {les} é o definido plural: **todas** as coisas, não algumas. Note também a construção {rien n’a été fait}, com {ne} explícito e sujeito posposto, onde {rien} já é negativo e {ne} fica pleonástico.

E {Jean 1:14}: {Et la parole est devenu chair, et nous avons vu sa gloire, sa gloire comme celle du Père unique}. {sa gloire} duas vezes — pronome possessivo, mas note a estrutura: em {celle du Père}, o partitivo some e dá lugar a {du} = «de + le», isto é, «a glória **do** Pai». Traduzir essa frase exige escolher entre {la} e {du} certo.

## O essencial

{un, une} apresentam e contam um. {des} apresenta alguns. {du, de la, des} partitivam — «um pouco de» — e desaparecem assim que o substantivo passa a ser contado, medido ou negado. E a regra mais útil do capítulo: depois de {ne … pas}, {sans} ou {avant}, o partitivo vira {de} e só {de}.`),
  vocab: [
    V('un', 'un', 'um, uma (indefinido masculino singular); elide-se em {l’}'),
    V('une', 'une', 'uma (indefinido feminino singular)'),
    V('des', 'des', 'alguns, certos (indefinido plural) ou «um pouco de» (partitivo)'),
    V('du', 'du', 'do, de um pouco de; {de + le} contraído'),
    V('de la', 'de la', 'de um pouco de (feminino); nunca contrai'),
    V('de l’eau', 'eau', 'de água; partitivo diante de vogal'),
    V('pas de', 'pas', 'nenhum, sem; o que a negação faz do partitivo'),
    V('sans du courage', 'courage', 'sem coragem; {sans} age como negação'),
    V('le pain', 'pain', 'o pão (o todo, o corpo inteiro)'),
    V('de la patience', 'patience', 'de paciência; partitivo com substantivo abstrato'),
    V('le courage', 'courage', 'a coragem; definido com abstrato contável'),
    V('l’optimisme', 'optimisme', 'o otimismo; {i} tônico vira {y} sem hífen'),
    V('une pomme', 'pomme', 'uma maçã; nomeada a unidade, o partitivo sai'),
    V('toutes les choses', 'chose', 'todas as coisas; quantificador com definido plural'),
    V('rien', 'rien', 'nada; já negativo, o {ne} fica pleonástico'),
    V('un homme envoyé', 'homme', 'um homem enviado; {un} apresenta um referente novo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Je ne veux pas de sucre}, o que aconteceu com o partitivo {du}?'),
    options: [
      T('A negação apagou o artigo inteiro e deixou só {de}'),
      T('O {du} virou {dus}, um plural feminino inexistente'),
      T('O substantivo passou a ser plural e o artigo virou {des}'),
      T('A negação foi transferida para o substantivo, sem efeito no artigo'),
    ],
    answer: 0,
    hint: T('Regra §3: {ne … pas} apaga o partitivo, mas o definido sobrevive.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: Elle boit ___ vin. (ela bebe vinho)'),
      answer: 'du',
      hint: T('Partitivo masculino, sem negação: {de + le} fundido.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase mantém o artigo definido apesar da negação?'),
      options: [
        T('{Je ne veux pas le pain que tu as acheté}'),
        T('{Je ne veux pas du pain}'),
        T('{Je ne veux pas de la viande}'),
        T('{Il n’y a pas des enfants ici}'),
      ],
      answer: 0,
      hint: T('Regra §3: a regra atinge a porção, não a coisa já identificada.'),
    },
    {
      kind: 'match',
      prompt: T('Associe a construção à sua função'),
      pairs: [
        { a: T('{un homme}'), b: T('apresenta um referente novo e singular') },
        { a: T('{des frères}'), b: T('apresenta alguns, sem contagem') },
        { a: T('{du courage}'), b: T('particiona um abstrato não contável') },
        { a: T('{le courage}'), b: T('trata o abstrato como uma coisa determinada') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Complete a negação: Elle n’a pas ___ monde. (ela não tem mundo)'),
      answer: 'de',
      hint: T('O partitivo desaparece e sobra apenas a preposição {de}.'),
    },
  ],
  rules: [
    { n: '1', text: T('{un} e {une} contam exatamente um; {des} apresenta alguns sem contagem.') },
    {
      n: '2',
      text: T(
        'O partitivo {du, de la, de l’, des} significa «um pouco de» e substitui a ausência de artigo do português: {du pain}, {de l’eau}, {des légumes}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Depois de {ne … pas}, {sans}, {avant} ou {jusqu’à}, o partitivo vira {de}: {pas de}, nunca {pas du}.',
      ),
    },
    {
      n: '4',
      text: T(
        'O partitivo sai assim que o substantivo é contado ou medido: {une pomme}, {deux kilos de farine}, {le courage}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Como {du} vem de {de}, ele nunca segue outra preposição: {avec du pain} é correto, {à du} é errado.',
      ),
    },
  ],
  notes: [
    {
      label: T('O partitivo é a marca de tradução do «não contável»'),
      text: T(
        'Em português a distinção contável / não contável é feita pelo contexto, sem marca formal: {como} funciona com {um} e com {zero}, e ninguém nota a diferença. O francês resolve isso com {du}. Por isso uma frase como {Il y a de la lumière dans cette pièce} é literalmente impossível em português honesto, mas é a única forma French de dizer « há luz neste quarto». Você não pode dizer {Il y a la lumière} para isso, porque isso significaria «a luz que já conhecemos».',
      ),
    },
    {
      label: T('Negações de mentira'),
      text: T(
        'Com {ne … pas} a regra é obrigatória e ninguém a viola. Com {sans} ela é uma consequência, não uma obrigação: você *pode* dizer {sans pain} se estiver falando de um pão específico. E note a assimetria: {pas de pain} é obrigatório, mas {pas le pain} é igualmente correto — a diferença é que o definido nomeia uma coisa que existe independentemente da sua vontade.',
      ),
    },
  ],
  examples: [
    {
      text: 'Il y eut un homme envoyé de Dieu',
      gloss: T('houve um homem enviado por Deus (Jo 1:6) — {un} apresenta'),
    },
    {
      text: 'dont le nom était Jean',
      gloss: T('cujo nome era João — {de} de posse, {le} determinado'),
    },
    {
      text: 'Toutes les choses ont été faites par lui',
      gloss: T('todas as coisas foram feitas por ele (Jo 1:3) — quantificador + definido'),
    },
    {
      text: 'et sans lui rien n’a été fait',
      gloss: T('e sem ele nada foi feito — {sans} age como negação'),
    },
    {
      text: 'sa gloire comme celle du Père unique',
      gloss: T('sua glória como a do Pai único (Jo 1:14) — {du} = «de + le»'),
    },
    {
      text: 'Je ne veux pas de sucre',
      gloss: T('não quero açúcar — partitivo apagado pela negação'),
    },
    {
      text: 'avec du courage',
      gloss: T('com coragem — partitivo depois de preposição, permitido'),
    },
    {
      text: 'deux kilos de farine',
      gloss: T('dois quilos de farinha — contagem elimina o partitivo'),
    },
    {
      text: 'la lumière du monde',
      gloss: T('a luz do mundo (Jo 8:12) — definido + genitivo via {du}'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Indefinidos e partitivos lado a lado'),
      head: [T('Uso'), T('Masculino sg.'), T('Feminino sg.'), T('Plural'), T('Exemplo')],
      rows: [
        ['Indefinido', 'un', 'une', 'des', '{un homme}'],
        ['Partitivo', 'du', 'de la', 'des', '{du pain}'],
        ['Partitivo + vogal', "de l'", 'de la', 'des', "{de l'eau}"],
        ['Após negação', 'pas de', 'pas de', 'pas de', '{pas de sucre}'],
      ],
    },
    {
      caption: T('Tabela 2 — O partitivo dentro e fora de frases'),
      head: [T('Contexto'), T('Forma'), T('Glosa'), T('Observação')],
      rows: [
        ['positiva', 'du pain', 'pão', 'sem negação'],
        ['negativa', 'pas de pain', 'nada de pão', 'partitivo apagado'],
        ['com {sans}', 'sans du courage', 'sem coragem', '{sans} = negação'],
        ['contagem', 'deux pains', 'dois pães', 'partitivo sai'],
        ['medição', 'un kilo de farine', 'um quilo de farinha', '{de} = unidade'],
      ],
    },
  ],
};
