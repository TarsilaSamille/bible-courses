import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  section: T('O verbo: os modos'),
  title: T('O verbo: o futuro e o condicional'),
  subtitle: T('direi, farei, e o se eu fosse que o grego não tem'),
  body: C(`## As duas maneiras de dizer o futuro

O português tem dois futuros e usa o primeiro para quase tudo. O futuro **sintético** se forma com o infinitivo mais as terminações: {falarei}, {virei}, {terei}. O futuro **perifrástico** usa o verbo {ir} mais o infinitivo: {vou falar}, {irei falar}, {hei de falar}.

O sintético está morrendo, e a regra do que sobrevive é curta: ele continua vivo nos verbos cuja primeira pessoa do presente termina em vogal ou em {-r}. {Digo} dá {direi}, {faço} dá {farei}, {vou} dá {irei}, {tenho} dá {terei}, {posso} dá {poderei}, {vejo} dá {verei}, {serei} vem de {ser}. Fora daí, o português diz {vou falar}.

Isso é o que o texto bíblico preserva do mais antigo português: as formas {direi}, {farei}, {virei} e {poderei} aparecem na Bíblia com uma frequência que o português de hoje não comportaria.

## O condicional: a forma mais antiga do português

O condicional é a mais antiga das formas que o português conserva do latim, e é a mais usada no Novo Testamento. Ele tem três momentos. O **simples** é {se eu fosse}, que indica o passado irreal: algo que não aconteceu. O **composto** é {se eu tivesse feito}, que recua mais um passo: o passado do irreal. E o **posterior** é {eu faria}, que é o futuro dentro da hipótese: o que eu faria se fosse o caso.

Aos três momentos correspondem três verbos na frase, e o português resolve com uma forma só o que o grego resolve com três modos. Um único {se} condicional abre os três: {Se eu fosse rico, viajaria e teria tempo}.

## O condicional que traduz o optativo

O grego tem um modo inteiro que o português não tem: o **optativo**. Ele serve para desejo, hipótese e finalidade expressa. O português traduz por {que} mais subjuntivo ou por {se} mais condicional, e é por isso que o Novo Testamento em português tem muito mais {se} do que o grego tem.

O que o tradutor tem de decidir é o ponto de vista. {Se alguém vierá} é futuro do grego com sentido de hipótese; em português a mesma construção é {se alguém vier} mais presente. O grego diz uma coisa, o português diz outra, e a decisão é do tradutor e não da flexão.

## O que ler

Em qualquer verbo no futuro ou no condicional, pergunte: é futuro ou hipótese? O futuro é sintético ou perifrástico? E o condicional está no irreal, no irreal anterior ou no futuro da hipótese?

João 14.3 diz {se eu for e vos preparar lugar, virei e vos tomarei}: o {se} traz o subjuntivo, {virei} e {tomarei} são sintéticos porque {vir} e {tomar} vivem ainda na regra da vogal e do {-r}. Uma frase com os dois futuros e a hipótese, e é a página inteira que explica por que a forma antiga importa.`),
  vocab: [
    V('vou falar', 'falar', 'vou falar (futuro perifrástico)'),
    V('falarei', 'falar', 'falarei (futuro sintético)'),
    V('direi', 'dizer', 'direi'),
    V('farei', 'fazer', 'farei'),
    V('virei', 'vir', 'virei'),
    V('terei', 'ter', 'terei'),
    V('poderei', 'poder', 'poderei'),
    V('se eu fosse', 'ser', 'se eu fosse'),
    V('se eu tivesse feito', 'fazer', 'se eu tivesse feito'),
    V('eu faria', 'fazer', 'eu faria'),
    V('viajaria', 'viajar', 'viajaria'),
    V('se alguém vier', 'vir', 'se alguém vier'),
    V('o condicional', 'condicional', 'o condicional'),
    V('o futuro', 'futuro', 'o futuro'),
    V('o optativo', 'optativo', 'o optativo'),
  ],
  rules: [
    { n: '§1', text: T('O futuro perifrástico é {ir} mais infinitivo: {vou falar}.') },
    {
      n: '§2',
      text: T(
        'O futuro sintético sobrevive nos verbos cuja primeira pessoa termina em vogal ou em {-r}: {direi}, {farei}, {poderei}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'O condicional tem três momentos: o irreal {se fosse}, o irreal anterior {se tivesse feito} e o futuro da hipótese {faria}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'O grego resolve hipótese e desejo com o optativo; o português resolve com {se} mais condicional.',
      ),
    },
    {
      n: '§5',
      text: T(
        'O futuro por perífrase não flexiona, e é por isso que o português atual quase não flexiona o futuro.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'O texto bíblico preserva o futuro sintético em formas que ofalar de hoje já não usa: {darei}, {verei}, {terei}. Uma tradução modernization apaga essas formas.',
      ),
    },
    {
      label: T('Cortesia no condicional'),
      text: T(
        'O condicional é também a forma da cortesia: {gostaria}, {poderia}, {viria}. Em português biblical, e em qualquer português, é o mesmo tempo com três valores: hipótese, futuro do passado e delicadeza.',
      ),
    },
  ],
  examples: [
    { text: 'Vou falar amanhã.', gloss: T('Futuro perifrástico, o mais comum.') },
    {
      text: 'Direi a verdade.',
      gloss: T('Futuro sintético, vivo porque {digo} termina em vogal.'),
    },
    { text: 'Se eu fosse rico, viajaria.', gloss: T('Irreal simples mais futuro da hipótese.') },
    {
      text: 'Se eu tivesse estudado, teria passado.',
      gloss: T('Irreal anterior mais futuro composto.'),
    },
    { text: 'Ele disse que viria.', gloss: T('Condicional como futuro do passado.') },
    { text: 'Gostaria de saber.', gloss: T('Condicional como cortesia.') },
    { text: 'Se alguém vier, avise.', gloss: T('Subjuntivo atrás de {se}, não condicional.') },
    { text: 'Se eu for, virei.', gloss: T('Hipótese no subjuntivo e futuro sintético.') },
  ],
  tables: [
    {
      caption: T('Os dois futuros'),
      head: ['Tipo', 'Exemplo', 'Quando aparece'],
      rows: [
        ['sintético', 'falarei', 'só nos verbos de 1ª pessoa em vogal ou -r'],
        ['perifrástico', 'vou falar', 'em quase todo o resto'],
        ['perifrástico formal', 'hei de falar', 'em registro escrito'],
      ],
    },
    {
      caption: T('Os três momentos do condicional'),
      head: ['Momento', 'Exemplo', 'O que indica'],
      rows: [
        ['irreal', 'se eu fosse', 'passado que não aconteceu'],
        ['irreal anterior', 'se eu tivesse feito', 'passado anterior ao irreal'],
        ['posterior', 'eu faria', 'o que viria a ser dentro da hipótese'],
      ],
    },
    {
      caption: T('Futuro sintético vivo'),
      head: ['Presente', 'Futuro'],
      rows: [
        ['digo', 'direi'],
        ['faço', 'farei'],
        ['vou', 'irei'],
        ['tenho', 'terei'],
        ['posso', 'poderei'],
        ['vejo', 'verei'],
        ['serei', 'serei'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é o futuro sintético de {fazer}?'),
    options: [T('farei'), T('fazerei'), T('vou fazer'), T('faço-ei')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{se eu tivesse feito} é o momento ______ do condicional.'),
      answer: 'irreal anterior',
      hint: T('É o passado do irreal.'),
    },
    {
      kind: 'choose',
      prompt: T('Em “vou falar amanhã”, o futuro é:'),
      options: [T('perifrástico'), T('sintético'), T('condicional'), T('subjuntivo')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue o presente ao futuro sintético.'),
      pairs: [
        { a: T('digo'), b: T('direi') },
        { a: T('faço'), b: T('farei') },
        { a: T('posso'), b: T('poderei') },
        { a: T('vejo'), b: T('verei') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
