import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  title: T('Os artigos definidos'),
  subtitle: T('el/la/los/las (+ lo neutro!)'),
  section: T('Os artigos'),
  body: C(`## O sistema

O artigo definido tem três genders e dois números: {el} (m. sg.), {la} (f. sg.), {los} (m. pl.), {las} (f. pl.) e o **neutro {lo}**, que só aparece diante de adjetivos, pronomes indefinidos e substantivos abstratos: {lo bueno} «o bom» (em geral), {lo importante}, {lo mío}, {lo que} «o que».

Ele marca duas coisas: que o referente é **conhecido** («o livro que li») e que é **único** ou **conhecido do interlocutor** («o Sol», «a Creation» «a Criação»). Por isso João 1:1 usa {el}: {En el principio era el Verbo}.

## Eufonia: el antes de {a} tônico

Quando um feminino começa por {a} ou {ha} tônico, o artigo vira {el} para evitar a sequência de duas vogais openas — mas **o substantivo continua feminino**: {el agua} «a água» · {el árbol} «a árvore» · {el alma} «a alma» · {el hambre} «a fome» · {el área} «a área». No plural, o {a} deixa de ser tônico, e o artigo volta: {las aguas} «as águas» · {los árboles} «as árvores».

## Contrações

Duas fusões são obrigatórias: {a} + {el} = {al} e {de} + {el} = {del}. Não há contração com outras preposições: {en} + {el} = {en el} (nunca «nel» fora de expressões fixas), {para} + {el} = {para el}.

Bíblico: {al tercer día} «ao terceiro dia» (Gn 1:5) · {la palabra del Señor} «a palavra do Senhor» (Sal 33:6) · {en el principio} «no princípio» (Jo 1:1).

## O que NÃO leva artigo

Deuses únicos e textos: {Dios} «Deus», {Jesús} «Jesus» — mas {el Señor} «o Senhor» se usa para Deus e {la Señorita} para Maria. País sem artigo: {España}, {México}.LINGuAS: {el español}, {el portugués}.Nomes de cidades sem artigo: {Roma} «Roma», {Buenos Aires}.`),
  vocab: [
    V('el', 'el', 'o (masc.)'),
    V('la', 'el', 'a (fem.)'),
    V('lo bueno', 'bueno', 'o bom (neutro!)'),
    V('el agua', 'agua', 'a água (eufonia!)'),
    V('al', 'al', 'ao (= a + el)'),
    V('del', 'del', 'do (= de + el)'),
    V('las aguas', 'agua', 'as águas (volta «las»!)'),
    V('en el', 'en', 'em o (sem contração!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Por que "el agua" (feminino!) usa "el"?'),
    options: [
      T('Porque virou masculino'),
      T('Eufonia: evita "la agua" (a tônico); continua feminino!'),
      T('Erro'),
      T('Plural'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Contraia: a + el = ___ (ao terceiro dia)'),
      answer: 'al',
      hint: T('Regra §3 — contração obrigatória.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual é o plural de "el agua"?'),
      options: [T('los agua'), T('las aguas'), T('el aguas'), T('los aguas')],
      answer: 1,
      hint: T('No plural o a deixa de ser tônico: volta «las».'),
    },
    {
      kind: 'fill',
      prompt: T('Em "En el principio" (Jo 1:1), por que NÃO escrevemos «nel»?'),
      answer: 'só a contrai com el',
      hint: T('Regra §3: apenas a + el e de + el.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Femininos com A tônico inicial usam el por eufonia, mas continuam femininos: el agua → las aguas.',
      ),
    },
    { n: '2', text: T('Lo neutro só acompanha adjetivos e abstrações: lo bueno, lo importante.') },
    { n: '3', text: T('Contrações obrigatórias: a + el = al; de + el = del. Nada mais contrai.') },
    {
      n: '4',
      text: T('Substantivos únicos (Dios) e países e cidades já conhecidas dispensam artigo.'),
    },
  ],
  notes: [
    {
      label: T('Contração no texto antigo'),
      text: T(
        'Num texto antigo você verá {al} e {del} sem espaço: {dalgo}, {dél}. A grafia moderna separa, e nenhuma das duas formas muda o que precisa ser aprendido.',
      ),
    },
  ],
  examples: [
    { text: '{En el principio}', gloss: T('No princípio (Jo 1:1).') },
    { text: '{al tercer día}', gloss: T('Ao terceiro dia (Gn 1:5).') },
    { text: '{la palabra del Señor}', gloss: T('A palavra do Senhor (Sal 33:6).') },
    { text: '{los árboles}', gloss: T('As árvores (volta «los»!).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Artigos definidos'),
      head: [T('Número'), T('Masculino'), T('Feminino'), T('Neutro')],
      rows: [
        [T('Singular'), '{el}', '{la}', '{lo}'],
        [T('Plural'), '{los}', '{las}', '—'],
      ],
    },
    {
      caption: T('Tabela 2 — Eufonia e contrações'),
      head: [T('Entrada'), T('Resultado'), T('Motivo')],
      rows: [
        ['{la} + {agua}', '{el agua}', T('eufonia (a tônico)')],
        ['{las} + {aguas}', '{las aguas}', T('plural: a átono')],
        ['{a} + {el}', '{al}', T('contração obrigatória')],
        ['{de} + {el}', '{del}', T('contração obrigatória')],
        ['{en} + {el}', '{en el}', T('sem contração')],
      ],
    },
  ],
};
