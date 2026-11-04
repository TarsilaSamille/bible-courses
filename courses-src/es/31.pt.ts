import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  title: T('Os pronomes interrogativos'),
  subtitle: T('¿qué? ¿quién? ¿cuál? — com acento!'),
  section: T('Os pronomes'),
  body: C(`## O acento é a assinatura

Todo interrogativo español é **tônico** e por isso **sempre leva acento**, ao contrário do relativo: {¿qué?} «o quê?» × {que} «que» · {¿quién?} «quem?» × {quien} «quem» · {¿cuál?} «qual?» × {cual} «qual» · {¿cuándo?}, {¿dónde?}, {¿cómo?}, {¿cuánto?}.

O mesmo vale nos **indiretos**: {No sé qué quiere} «Não sei o que ele quer» · {Dime dónde está} «Diga-me onde está».

## {por qué} × {porque}

A pergunta é **separada** e acentuada: {¿Por qué?} «Por quê?»
A resposta é **junto** e sem acento: {Porque} «Porque» · {porque Dios lo hizo así} «porque Deus o fez assim».

Quando {porque} significa «para que» no subjuntivo, também vai junto: {Lo hizo porque viniera} «fê-lo porque viesse».

## Qual interrogativo para quê?

{¿Quién?} pessoas: {¿Quién es?} «Quem é?» (Mt 16:15) · {¿Quién dices que soy?} «quem dizes que eu sou?».
{¿Qué?} coisas, ideias, identidade: {¿Qué es esto?} «o que é isto?» · {¿Qué es la verdad?} (Jo 18:38) · {¿Qué palabras?}.
{¿Cuál?} escolha entre opções: {¿Cuál quieres?} «qual queres?» · {¿Cuál de los dos?} · {¿Cuál es tu nombre?}.

**{¿Cuál?} + {ser} = identidade** (o nome), **{¿Qué?} + {ser} = definição** (a natureza): {¿Cuál es tu nombre?} «Qual é o teu nome?» · {¿Qué es Dios?} «O que é Deus?».

## A inversão {¿…?}

A pergunta abre com {¿} e fecha com {?}, e o sujeito continua **depois** do verbo (sem inversão como em inglês):

{¿Dónde moras?} «onde moras?» (Jo 1:38) · {¿Por qué lloras?} «por que choras?» (Jo 20:13) · {¿Qué buscáis?} «que procurais?» (Jo 1:38) · {¿Puede Dios perdónar?} «Pode Deus perdoar?».

A mesma palavra com sentido afirmativo fica sem sinais: {Dios es amor} «Deus é amor».

## Europa × americano

A estrutura é idêntica. Muda o vocabulário: Espanha {vosotros} nas perguntas plurais; América, {ustedes}. E na oralidade americana é comum o *tag question* {¿no?}, {¿ verdad?} «né?» que Portugal também usa.`),
  vocab: [
    V('qué', 'qué', 'o quê? (acentuado!)'),
    V('quién', 'quién', 'quem? (acentuado!)'),
    V('cuál', 'cuál', 'qual?'),
    V('por qué', 'por qué', 'por quê? (separado!)'),
    V('porque', 'porque', 'porque (resposta!)'),
    V('dónde', 'dónde', 'onde?'),
    V('cuánto', 'cuánto', 'quanto?'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"¿por qué?" × "porque"?'),
    options: [
      T('Iguais'),
      T('Pergunta (separado!) × resposta (junto!)'),
      T('O contrário'),
      T('Erro'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: "¿___ es la verdad?" (o que é a verdade? Jo 18:38)'),
      answer: 'Qué',
      hint: T('Definição de natureza = «qué».'),
    },
    {
      kind: 'choose',
      prompt: T('Como se pergunta o NOME de alguém?'),
      options: [
        T('¿Qué es tu nombre?'),
        T('¿Cuál es tu nombre?'),
        T('¿Quién es tu nombre?'),
        T('¿Dónde es tu nombre?'),
      ],
      answer: 1,
      hint: T('Regra §3: cuál + ser = identidade.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o interrogativo ao uso'),
      pairs: [
        { a: T('{¿Quién?}'), b: T('pessoas') },
        { a: T('{¿Qué?}'), b: T('coisas e identidades') },
        { a: T('{¿Cuál?}'), b: T('escolha') },
        { a: T('{¿Por qué?}'), b: T('causa (pergunta, separado)') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Interrogativo leva sempre acento; relativo nunca: ¿qué? × que, ¿quién? × quien.'),
    },
    { n: '2', text: T('¿Por qué? é a pergunta, separado; porque é a resposta, junto.') },
    { n: '3', text: T('Quién = pessoa; qué = coisa ou definição; cuál = escolha ou identidade.') },
    { n: '4', text: T('A pergunta abre com «¿» e fecha com «?»; o sujeito fica depois do verbo.') },
  ],
  notes: [
    {
      label: T('O tônico em pergunta'),
      text: T(
        'A forma acentuada {qué}, {quién}, {cuál} é a que vem tônica — pronombre ou substantivo. Em {¿Qué es esto?}, {qué} é pronombre e traduz "o que"; em {¿Qué libro es?} é substantivo.',
      ),
    },
  ],
  examples: [
    { text: '¿Dónde moras?}', gloss: T('Onde moras? (Jo 1:38).') },
    { text: '¿Qué es la verdad?}', gloss: T('O que é a verdade? (Jo 18:38 — Pilatos).') },
    { text: '{¿Quién dices que soy?}', gloss: T('Quem dizes que eu sou? (Mt 16:15).') },
    { text: '{porque Dios lo hizo así}', gloss: T('Porque Deus o fez assim (resposta, junto!).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Interrogativos'),
      head: [T('Palavra'), T('Tradução'), T('Usa para'), T('Exemplo')],
      rows: [
        ['{qué}', T('o quê?'), T('identidade, coisa'), '{¿Qué es esto?}'],
        ['{quién}', T('quem?'), T('pessoa'), '{¿Quién es?}'],
        ['{cuál}', T('qual?'), T('escolha'), '{¿Cuál quieres?}'],
        ['{cuándo}', T('quando?'), T('tempo'), '{¿Cuándo vendrás?}'],
        ['{dónde}', T('onde?'), T('lugar'), '{¿Dónde moras?}'],
        ['{cómo}', T('como?'), T('modo'), '{¿Cómo lo harás?}'],
        ['{por qué}', T('por quê?'), T('causa'), '{¿Por qué lloras?}'],
        ['{cuánto}', T('quanto?'), T('quantidade'), '{¿Cuánto tiempo?}'],
      ],
    },
    {
      caption: T('Tabela 2 — {qué} × {cuál}'),
      head: [T('Pergunta'), T('Resposta'), T('Tipo')],
      rows: [
        ['{¿Qué es Dios?}', T('Deus é espírito'), T('definição (natureza)')],
        ['{¿Cuál es tu nombre?}', T('Meu nome é João'), T('identidade')],
        ['{¿Qué libro lees?}', T('O Apocalipse'), T('coisa específica')],
        ['{¿Cuál libro lees?}', T('João, ou Romanos?'), T('escolha')],
      ],
    },
  ],
};
