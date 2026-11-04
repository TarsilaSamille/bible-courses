import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  title: T('dass e zu + infinitivo'),
  subtitle: T('subordinação, finalidade e motivo'),
  section: T('Os verbos'),
  body: C(`A oração subordinada em alemão tem uma marca formal visível: o conjunto dass vem primeiro, e o verbo conjugado vai para o fim. Ich glaube, dass Gott ist traz o verbo no último lugar, ao contrário do português. O mesmo vale com se porque e quando, que também enviam o verbo ao fim: weil er krank ist, wenn du kommst. O que se conserva é a pessoa; o que se desloca é a posição. A vantagem é prática: como o verbo fecha a oração subordinada, o ouvinte sabe imediatamente onde a subordinação termina, mesmo que ela venha antes do verbo principal.

Nem tudo admite dass. Três verbos-envolve sempre usam zu + infinitivo e nenhum outro: uma finalidade, uma relação habitual e uma finalidade negada por meio de nicht. Ich komme, um zu lernen, Ich gehe oft schwimmen, Ich habe keine Lust, noch einmal auszugehen. Os três podem ser reescritos com quebra de frase: der Wunsch, dass du kommst, die Gewohnheit, dass er geht, und die Einsicht, dass es besser wäre, nicht zu gehen. A construção com zu e infinitivo não tem o mesmo valor: ela não gosta de sujeito expresso, e o sujeito nasce dentro do infinitivo.

Há ainda três pares fixos: statt... zu, em vez de; anstatt... zu em vez de; ohne... zu sem fazer; um... zu para. A preposição zu fecha a locução e o verbo conjugado fica na posição normal da oração principal, antes dela: Ich trinke, statt zu schlafen. Compare com Ich trinke nicht, um zu schlafen, onde a preposição vem depois do verbo.

Motivo e finalidade são as duas pontas da mesma ideia: Ich lerne, weil ich Gott dienen will diz por que, e Ich lerne, um Gott zu dienen diz para quê. Em português quase não se distingue; em alemão a distinção é obrigatória, e por isso quem entende os dois papéis entende a lógica dos textos.`),
  vocab: [
    V('dass', 'dass', 'que (marca de subordinação)'),
    V('zu', 'zu', 'a, para (preposição e partícula)'),
    V('um', 'um', 'para (finalidade)'),
    V('weil', 'weil', 'porque (motivo)'),
    V('wenn', 'wenn', 'quando, se (tempo e condição)'),
    V('obwohl', 'obwohl', 'embora (concessão)'),
    V('zu + Infinitiv', 'zu', 'a + infinitivo (finalidade)'),
    V('lernen', 'lernen', 'aprender'),
    V('dienen', 'dienen', 'servir a (a alguém)'),
    V('glauben', 'glauben', 'crer, achar'),
    V('kommen', 'kommen', 'vir'),
    V('schlafen', 'schlafen', 'dormir'),
    V('trinken', 'trinken', 'beber'),
    V('statt', 'statt', 'em vez de'),
    V('ohne', 'ohne', 'sem (partícula)'),
    V('anstatt', 'anstatt', 'em vez de (variante)'),
    V('weiss', 'wissen', 'que (subordinação indireta)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase põe corretamente o verbo conjugado no fim?'),
    options: [
      T('Ich hoffe, dass wir uns sehen.'),
      T('Ich hoffe, dass sehen wir uns.'),
      T('Ich hoffe, wir sehen uns, dass.'),
      T('Ich hoffe, wir dass uns sehen.'),
    ],
    answer: 0,
    hint: T('A oração em dass é autônoma: o verbo conjugado fecha a frase.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a finalidade: Ich komme, ___ lernen (para aprender).'),
      answer: 'um zu',
      hint: T('Finalidade pede um ... zu.'),
    },
    {
      kind: 'choose',
      prompt: T('Em "Ich trinke, statt zu schlafen", por que o verbo trinke vem antes de statt?'),
      options: [
        T('A partícula zu fecha a locução, e o verbo da oração principal a precede.'),
        T('O Alemão não admite inversão de nenhuma espécie.'),
        T('statt é um verbo auxiliar e por isso vem depois.'),
        T('A ordem é sempre aleatória na fala falada.'),
      ],
      answer: 0,
    },
    {
      kind: 'fill',
      prompt: T('Complete o motivo: Er hilft ihm, ___ er arm ist (porque ele é pobre).'),
      answer: 'weil',
      hint: T('Motivo é diferente de finalidade.'),
    },
    {
      kind: 'match',
      prompt: T('Relacione o conector ao seu uso.'),
      pairs: [
        { a: T('dass'), b: T('complemento, verbo no fim') },
        { a: T('um ... zu'), b: T('finalidade') },
        { a: T('ohne ... zu'), b: T('negação de um infinitivo') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Depois de dass, weil, wenn, obwohl e outros conectores, o verbo conjugado vai para o fim da oração: Er sagt, dass er kommt.',
      ),
    },
    {
      n: '2',
      text: T(
        'Para finalidade só se usa um ... zu ou statt/anstatt/ohne ... zu; nunca *um zu gehen como oração principal com sujeito expresso.',
      ),
    },
    {
      n: '3',
      text: T(
        'A partícula zu fecha a locução, e por isso o verbo conjugado da oração principal fica antes dela: Ich trinke, statt zu schlafen.',
      ),
    },
    {
      n: '4',
      text: T(
        'Motivo pede weil, finalidade pede um ... zu; trocar um pelo outro muda o sentido da frase, mesmo quando a tradução parece igual.',
      ),
    },
    {
      n: '5',
      text: T(
        'verbo + zu + infinitivo significa aprender a fazer: Ich lerne schreiben, Er kann gut kochen.',
      ),
    },
  ],
  notes: [
    {
      label: T('A inversão como sinal de vírgula'),
      text: T(
        'O verbo no fim serve ao ouvinte: em uma frase longa, o ouvinte ouve Ich glaube, e ainda não sabe se a oração vai continuar. Quando chega o ist, ele sabe que a subordinação acabou. É a mesma economia que existe na escrita: a pontuação de uma frase é, na prática, a posição do seu verbo. Quem aprende a ordem dos termos no módulo 9 já está aplicando a mesma lógica que vê aqui nas orações.',
      ),
    },
    {
      label: T('Ligação bíblica'),
      text: T(
        'Em João 3:16 a Tradução de Lutero escreve hat Gott die Welt geliebt, dass auch wir Kinder Gottes sind: o motivo está em dass com o verbo no fim, o mesmo recurso dos versículos de Romanos, die Kraft Gottes ist den Gehorsam des Glaubens. O subjuntivo de mögen mostra que a oração não é optativa, mas assertiva: a condição é apresentada como fato.',
      ),
    },
  ],
  examples: [
    { text: 'Ich glaube, dass Gott ist.', gloss: T('Eu-creio que Deus existe (verbo no fim).') },
    {
      text: 'Er bleibt, weil er krank ist.',
      gloss: T('Ele fica porque está doente (weil + verbo no fim).'),
    },
    {
      text: 'Wenn du kommst, feiern wir.',
      gloss: T('Quando você vier, nós celebraremos (tempo, verbo no fim).'),
    },
    { text: 'Obwohl es regnet, gehen wir.', gloss: T('Embora chova, nós vamos (concessão).') },
    { text: 'Ich komme, um zu lernen.', gloss: T('Eu venho para aprender (finalidade).') },
    {
      text: 'Ich trinke, statt zu schlafen.',
      gloss: T('Eu bebo em vez de dormir (verbo antes de statt ... zu).'),
    },
    {
      text: 'Er ging, ohne zu antworten.',
      gloss: T('Ele saiu sem responder (negação de infinitivo).'),
    },
    {
      text: 'Ich lerne, um Gott zu dienen.',
      gloss: T('Eu aprendo para servir a Deus (dois zu, papéis diferentes).'),
    },
    {
      text: 'Er lernt lesen.',
      gloss: T('Ele aprende a ler (verbo + zu + infinitivo, sentido de habilidade).'),
    },
  ],
  tables: [
    {
      caption: T('Conector, posição do verbo e valor'),
      head: ['Conector', 'Verbo', 'Valor'],
      rows: [
        ['dass', 'no fim', 'objeto, sujeito, complemento'],
        ['weil', 'no fim', 'motivo'],
        ['wenn', 'no fim', 'tempo, condição'],
        ['obwohl', 'no fim', 'concessão'],
        ['um ... zu', 'na oração principal', 'finalidade'],
        ['ohne ... zu', 'na oração principal', 'negação de um infinitivo'],
        ['(an)statt ... zu', 'na oração principal', 'substituição de um infinitivo'],
      ],
    },
    {
      caption: T('Comparar zu e que'),
      head: ['Pergunta', 'Resposta com dass', 'Resposta com zu'],
      rows: [
        ['Finalidade', 'der Wunsch, dass ich lerne', 'um zu lernen'],
        ['Hábito', 'die Gewohnheit, dass ich lerne', 'oft zu lernen'],
        ['Negação de finalidade', 'der Wunsch, dass ich nicht lerne', 'nicht zu lernen'],
        ['Onde está o sujeito?', 'expresso: ich', 'dentro do infinitivo'],
        ['Ordem', 'verbo conjugado no fim', 'verbo conjugado antes de um/zu'],
      ],
    },
  ],
};
