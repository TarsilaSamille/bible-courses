import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Condicionais 0–3'),
  subtitle: T('if, unless, wish — quatro degrees of reality'),
  section: T('O verbo'),
  body: C(`## Quatro graus

O condicional zero expressa uma verdade geral: {If you sow, you reap}. O primeiro apresenta uma condição possível: {If you pray, God will hear}. O segundo situa presente e resultado no passado irreal: {If I had faith, I would move mountains}. O terceiro apresenta uma condição passada não realizada: {If he had called, I would have come}.

A tabela ensina um padrão padrão, não uma prisão. O inglês bíblico pode usar formas de presente em cláusulas voltadas ao futuro: {he that heareth}. Isso pode ser atemporal ou orientado ao futuro; tradução e contexto decidem.

## Formas e premissas

No segundo e terceiro condicional, o inglês usa normalmente {were} para todas as pessoas: {If I were you}, {If she were here}. No passado factual comum, use {was}: {I was tired}. {Unless} normalmente significa {if not}; um {if} sem negação também pode ser enfático: If you love me, keep my commands.

{Provided that}, {as long as}, {even if} e {otherwise} têm funções distintas. Distinga o inglês contemporâneo da KJV.`),
  vocab: [
    V('if', 'if', 'se'),
    V('unless', 'unless', 'a menos que'),
    V('were', 'be', 'fosse'),
    V('would come', 'come', 'viria'),
    V('had come', 'come', 'tivesse vindo'),
    V('sow', 'sow', 'semear'),
    V('reap', 'reap', 'colher'),
    V('as long as', 'as long as', 'desde que/enquanto'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T("Complete: 'If I ___ (be) you…'"),
    answer: 'were',
    hint: T('No irreal, were para todas as pessoas.'),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete a clause: If he ___, I will answer.'), answer: 'calls' },
    {
      kind: 'match',
      prompt: T('Relacione estrutura e tipo.'),
      pairs: [
        { a: 'if + present + present', b: T('zero') },
        { a: 'if + past + would', b: T('segundo') },
        { a: 'if + had + would have', b: T('terceiro') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T("Qual frase é quase equivalente a 'unless you believe'?"),
      options: [
        T('If you do not believe'),
        T('If you believe'),
        T('When you believe'),
        T('Although you believe'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O condicional zero descreve regularidades; os condicionais 1–3 tratam de pessoas e situações específicas.',
      ),
    },
    {
      n: '2',
      text: T(
        'No segundo e terceiro, were aparece com todas as pessoas quando a situação é irreal.',
      ),
    },
    {
      n: '3',
      text: T(
        "Unless significa normalmente if not, mas a negação direta pode ser mais enfática: If I don't know, nobody does.",
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T('Uma forma presente na KJV pode ser intemporal; não force will dentro do versículo.'),
    },
  ],
  examples: [
    { text: '{If I were you}', gloss: T('Se eu fosse você — irreal presente') },
    {
      text: '{If he had come, we would have prayed}',
      gloss: T('Se ele tivesse vindo, teríamos orado'),
    },
    { text: '{unless you believe}', gloss: T('a menos que creias / se não credes') },
  ],
  tables: [
    {
      caption: T('Padrão dos condicionais'),
      head: [T('Tipo'), T('If +'), T('Resultado')],
      rows: [
        [T('0 — geral'), 'present', 'present'],
        [T('1 — real'), 'present', 'will + base'],
        [T('2 — irreal'), 'past', 'would + base'],
        [T('3 — passado irreal'), 'had + participle', 'would have + participle'],
      ],
    },
  ],
};
