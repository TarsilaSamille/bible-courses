import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Orações relativas e vírgulas'),
  subtitle: T('who, which, that — informação e identificação'),
  section: T('Sintaxe'),
  body: C(`## O que faz uma oração relativa

Uma relativa restritiva identifica o antecedente: {the disciples who believed rejoiced} significa que só os discípulos que criram se regozijaram. Em relativas restritivas, {that} pode referir-se a pessoas ou a coisas: {the disciple that prayed}.

Uma relativa explicativa acrescenta informação sobre um grupo já identificado: {the disciples, who believed, rejoiced}. As vírgulas marcam a diferença. {Who} normalmente se refere a pessoas; {which}, a coisas; {whose}, aos possuidores.

## Preposições e relativos

{Where}, {when} e {why} podem substituir uma preposição mais o pronome relativo: {the city where he lived}, {the day when we met}, {the reason why he stayed}. No inglês moderno cuidado, pessoa ou coisa também pode vir depois da preposição: {the person to whom I spoke}.

João 1:39 na KJV traz {Where dwellest thou?}; a pergunta contemporânea equivalente seria {Where do you live?}. As duas não são intercambiáveis quanto ao registro.

## What

{What} é um pronome relativo fundido em contextos como {do what he says}. Não o confunda com a palavra interrogativa em {What did he say?}. Na KJV, {whatsoever} é um relativo livre enfático: whatever.`),
  vocab: [
    V('who', 'who', 'que (pessoas)'),
    V('which', 'which', 'que (coisas)'),
    V('that', 'that', 'que (restrictiva)'),
    V('whose', 'whose', 'cujo'),
    V('where', 'where', 'onde'),
    V('when', 'when', 'quando'),
    V('why', 'why', 'por que'),
    V('what', 'what', 'o que'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T("O que indica a vírgula em 'the disciples, who believed, rejoiced'?"),
    options: [
      T('Que só os crentes se alegrarem'),
      T('Que o grupo já identificado tinha todos crido'),
      T('Que o verbo muda de tempo'),
      T('Que there is a question'),
    ],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T("Complete: 'God, ___ name is holy…'"), answer: 'whose' },
    {
      kind: 'match',
      prompt: T('Relacione relativo e antecedente.'),
      pairs: [
        { a: 'who', b: T('pessoa') },
        { a: 'which', b: T('coisa') },
        { a: 'whose', b: T('posse') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('Qual frase identifica apenas um subgrupo?'),
      options: [
        T('The disciples who believed rejoiced'),
        T('The disciples, who believed, rejoiced'),
        T('The disciples who, believed, rejoiced'),
        T('The disciples, who believed rejoiced'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A ausência de vírgula cria uma DEFINIÇÃO: the man who came identifica um homem particular.',
      ),
    },
    {
      n: '2',
      text: T(
        "Vírgulas indicam informação adicional sobre um antecedente já completo; o relativo então equivale a 'o qual/que'.",
      ),
    },
    {
      n: '3',
      text: T(
        'Whose pode indicar posse em pessoas e coisas: the man whose son came; the city whose people prayed.',
      ),
    },
  ],
  notes: [
    {
      label: T('Precisão:'),
      text: T(
        'A vírgula não muda o pronome, mas muda o conjunto de referência e, muitas vezes, a interpretação.',
      ),
    },
  ],
  examples: [
    { text: '{the man who came}', gloss: T('o homem que veio — subconjunto identificado') },
    {
      text: '{the disciples, who believed, rejoiced}',
      gloss: T('os discípulos, os quais creram, alegravaram-se'),
    },
    { text: '{the name of which he spoke}', gloss: T('o nome do qual falou') },
  ],
  tables: [
    {
      caption: T('Restritiva × explicativa'),
      head: [T('Tipo'), T('Pessoa'), T('Coisas'), T('Vírgulas')],
      rows: [
        [T('restritiva'), 'who/that', 'which/that', T('geralmente sem')],
        [T('explicativa'), 'who', 'which', T('normalmente com')],
      ],
    },
  ],
};
