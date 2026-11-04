import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('Leitura: Pai-Nosso e Salmo 23'),
  subtitle: T('Our Father which art in heaven — registro arcaico'),
  section: T('Leituras'),
  body: C(`## A KJV como janela histórica

Na KJV de Mateus 6:9, {Our Father which art in heaven, hallowed be thy name}. {Art} é {are} arcaico; {thy} é possessivo de segunda pessoa; {hallowed be} é uma fórmula passiva. Essas formas não devem ser tomadas como erros do inglês contemporâneo. A forma moderna é {Our Father who is in heaven, may your name be holy}.

{thou/thee/thy/thine} dirige-se formalmente a uma pessoa; {you/your} pode dirigir-se a uma ou a muitas. O antigo sistema de segunda pessoa singular também torna a concordância visível: {thou art}, {thou hast}, {thou shalt}. Formas como {art} e {hallowed} são marcadores de época.

## A oração por sua estrutura

A oração passa da invocação às petições e pedidos. {Give us this day our daily bread} coloca o imperativo antes do objeto indireto. {Forgive us our debts, as we forgive our debtors} usa as para ligar o perdão humano e o divino.

O Salmo 23:1 tem outro registro poético: {The LORD is my shepherd; I shall not want}. A metáfora não diz que toda circunstância seja indolor; diz que o pastor fornece o necessário. {I shall not want} é uma promessa orientada ao futuro, não a afirmação de que o salmista possui tudo.`),
  vocab: [
    V('art', 'be', 'és (arcaico)'),
    V('thou', 'thou', 'tu (arcaico)'),
    V('thee', 'thee', 'te (arcaico)'),
    V('thy', 'thy', 'teu'),
    V('hallowed', 'hallow', 'santificado'),
    V('bread', 'bread', 'pão'),
    V('shepherd', 'shepherd', 'pastor'),
    V('shall not want', 'want', 'não faltará'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('O que é art em “which art”?'),
    options: [
      T(' substantivo arte'),
      T('2ª pessoa arcaica de be'),
      T('artigo'),
      T('passado de eat'),
    ],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Modernize: “Our Father which ___ in heaven”.'), answer: 'is' },
    {
      kind: 'match',
      prompt: T('Relacione expressão e glosa.'),
      pairs: [
        { a: 'thou', b: T('tu') },
        { a: 'thy', b: T('teu') },
        { a: 'hallowed', b: T('santificado') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('Em I shall not want, o que shall acrescenta?'),
      options: [
        T('Uma obrigação presente'),
        T('Certeza/promessa futura'),
        T('Pasado remoto'),
        T('Terceiro condicional'),
      ],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Leia toda forma arcaica como KJV ou linguagem litúrgica, salvo indication that it is a modern quotation.',
      ),
    },
    {
      n: '2',
      text: T(
        'Shall in a first-person Biblical promise normally expresses certainty or divine assurance, not an ordinary modern prediction.',
      ),
    },
    {
      n: '3',
      text: T(
        'A metáfora do pastor pertence ao Salmo; não aapliques mecanicamente a toda experiência religiosa.',
      ),
    },
  ],
  notes: [
    {
      label: T('Tradução:'),
      text: T(
        'Uma tradução bíblica pode atualizar a sintaxe e manter a imagem. Informe sempre que a forma foi adaptada.',
      ),
    },
  ],
  examples: [
    { text: '{thou art}', gloss: T('tu és — arcaico') },
    { text: '{hallowed be thy name}', gloss: T('santificado sea tu nombre — passiva litúrgica') },
    { text: '{daily bread}', gloss: T('pão de cada dia') },
    { text: '{I shall not want}', gloss: T('não me faltará — promessa') },
  ],
  tables: [
    {
      caption: T('Segunda pessoa: KJV e uso atual'),
      head: [T('Função'), T('KJV'), T('Atual')],
      rows: [
        [T('tu (singular)'), 'thou', 'you'],
        [T('teu'), 'thy/thine', 'your'],
        [T('és'), 'art', 'are'],
        [T('vós/plural'), 'ye', 'you'],
      ],
    },
  ],
};
