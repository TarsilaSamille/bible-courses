import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  title: T('Essere e avere'),
  subtitle: T('os dois verbos essenciais'),
  section: T('Il nome e il verbo'),
  body: C(`## {Essere} cobre dois verbos do português

O italiano tem um verbo onde o português tem dois. {Essere} **significa ser e estar ao mesmo tempo**, e a forma é a mesma nos dois casos: {sono Marco} (sou o Marco), {sono stanco} (estou cansado), {sono medico} (sou médico), {la chiesa è in città} (a igreja está na cidade). Quem traduz palavra por palavra escreve {io sono stanco}, que soa errado, porque {sono} aqui não é «ser» nem «estar»: é um único verbo para as duas coisas.

A forma mais comum de dizer «ele é» é {lui è}, e é a que aparece o tempo todo. Mas existe também {egli è}, que acentua: «egli è Dio» soa mais forte que «lui è Dio», do mesmo jeito que «Ele é o Senhor» em português.

## Fome, sede, sono: {avere} também

{avere} significa ter, e **é o outro auxiliar**. Ele cobre o que em português já é «ter»: {ho vent’anni}, {ho fame}, {ho sonno}, {ho freddo}. Em italiano fome, sede, sono, frio e calor **não têm verbo próprio**; todos usam {avere}. A diferença de português aparece na hora de traduzir: «estou com fome» vira {ho fame}, e não {sono fame}.

E há um caso em que os dois verbos aparecem juntos na mesma frase: {essere} diz quem é e {avere} diz o que tem, {è medico e ha quarant’anni}. Nessa hora o tradutor precisa saber qual dos dois português está em cada metade.

## Por que os dois são essenciais

Os dois verbos constroem quase tudo o que o italiano tem de composto: o *passato prossimo* ({ho mangiato}, {sono andato}), o *futuro composto* ({avrò mangiato}, {sarò andato}) e o *condicional composto* ({avrei mangiato}, {sarei andato}). Quem não os sabe não consegue formar nenhum desses tempos, e eles aparecem em quase toda página de texto bíblico.

É por isso que a primeira coisa a procurar num texto italiano é {essere} ou {avere}, antes do verbo principal. A maior parte das frases é construída em cima deles, e é essa estrutura que faz o italiano parecer mais simples do que é.

## {Stato}, nome e participo

{stato} é uma palavra com dois valores: substantivo, «estado», e participio de {essere}. {Sono stanco} usa o segundo; {lo stato della salute} usa o primeiro. E como é participio, flexiona: {stato}, {stata}, {stati}, {state}. O mesmo {-ato} que faz o passado de {essere} também é o substantivo.

## Na Bíblia

{Dio} costuma aparecer sem artigo: {Dio è luce}, {Dio è amore}, {Dio è Dio}. O grego é o contrário, e leva artigo quase sempre (ὁ θεός, ὁ ἄνθρωπος, ὁ λόγος). A dispensa do artigo no nome próprio é a diferença que o tradutor precisa notar: onde o grego diz «o Deus», o italiano muitas vezes diz só {Dio}.`),
  vocab: [
    V('sono', 'essere', 'sou/estou'),
    V('sei', 'essere', 'és/estás'),
    V('è', 'essere', 'é/está'),
    V('siamo', 'essere', 'somos'),
    V('ho', 'avere', 'tenho'),
    V('hai', 'avere', 'tens'),
    V('ha', 'avere', 'tem'),
    V('abbiamo', 'avere', 'temos'),
    V('essere', 'essere', 'ser / estar'),
    V('avere', 'avere', 'ter'),
    V('stato', 'stato', 'estado; estado de'),
    V('chiesa', 'chiesa', 'igreja'),
    V('città', 'città', 'cidade'),
    V('fame', 'fame', 'fome'),
    V('medico', 'medico', 'médico'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Complete: Noi ___ dalla Spagna.'),
    options: [T('siamo'), T('abbiamo'), T('sono'), T('hanno')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual frase indica profissão?'),
      options: [
        T('La chiesa è vicina.'),
        T('Sono medico.'),
        T('Ho venticinque anni.'),
        T('Dio è amore.'),
      ],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Complete: lui ___ un libro (ter)'),
      answer: 'ha',
      hint: T('Forma de lui/lei.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete: noi ___ in casa (essere, presente)'),
      answer: 'siamo',
      hint: T('Noi + siamo.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{Essere} cobre identidade, natureza, profissão e lugar: {sono Giovanni}, {è medico}, {la chiesa è in città}.',
      ),
    },
    {
      n: '2',
      text: T('{Avere} liga a pessoa ao que ela tem: {ho vent’anni}, {ha fame}, {ha un libro}.'),
    },
    {
      n: '3',
      text: T(
        'Fome, sede, sono, frio e calor usam {avere} e não {essere}: {ho fame}, nunca {sono fame}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Nos tempos compostos os dois viram auxiliares: {ho mangiato}, {sono andato}, {avrò mangiato}, {sarei andato}.',
      ),
    },
    { n: '5', text: T('{Dio} dispensa o artigo, e o grego não: {Dio è luce} ao lado de ὁ θεός.') },
  ],
  notes: [
    {
      label: T('{Egli} contra {lui}'),
      text: T(
        '{egli è} soa mais forte que {lui è}, e é assim que o português traduz «Ele é». A força está na escolha da forma, não no verbo: os dois dizem a mesma coisa, e o italiano usa o mais fraco no texto corrente e o mais forte na afirmação.',
      ),
    },
    {
      label: T('{Stato} duas vezes'),
      text: T(
        '{stato} é substantivo e participio ao mesmo tempo. Em {sono stanco} está o participio; em {lo stato della salute} está o substantivo. E, por ser participio de {essere}, flexiona: {stato}, {stata}, {stati}, {state}.',
      ),
    },
  ],
  examples: [
    { text: 'Dio è amore.', gloss: T('Deus é amor.') },
    { text: 'Maria ha letto il Vangelo.', gloss: T('Maria leu o Evangelho.') },
    { text: 'Sono stanco.', gloss: T('Estou cansado.') },
    { text: 'Ho venticinque anni.', gloss: T('Tenho vinte e cinco anos.') },
    { text: 'La chiesa è in città.', gloss: T('A igreja está na cidade.') },
    { text: 'I discepoli hanno paura.', gloss: T('Os discípulos têm medo.') },
    { text: 'Egli è Dio.', gloss: T('Ele é Deus.') },
    { text: 'Ha fame e ha sonno.', gloss: T('Tem fome e tem sono.') },
  ],
  tables: [
    {
      caption: T('Presente di essere e avere'),
      head: ['Persona', 'essere', 'avere'],
      rows: [
        ['io', 'sono', 'ho'],
        ['tu', 'sei', 'hai'],
        ['lui/lei', 'è', 'ha'],
        ['noi', 'siamo', 'abbiamo'],
        ['voi', 'siete', 'avete'],
        ['loro', 'sono', 'hanno'],
      ],
    },
    {
      caption: T('Qual verbo diz o quê'),
      head: ['Cosa dice', 'essere', 'avere'],
      rows: [
        ['identità', 'sono Marco', '—'],
        ['stato', 'sono stanco', '—'],
        ['professione', 'è medico', '—'],
        ['luogo', 'la chiesa è in città', '—'],
        ['possesso', '—', 'ho un libro'],
        ['età e fame', '—', 'ha vent’anni, ha fame'],
      ],
    },
  ],
};
