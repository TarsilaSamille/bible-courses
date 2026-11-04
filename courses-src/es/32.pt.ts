import { C, T, V } from '../shared.mts';

export default {
  id: 32,
  title: T('Os numerais cardinais'),
  subtitle: T('uno–millón — contar em espanhol'),
  section: T('Os numerais'),
  body: C(`## A série básica

{uno} 1 · {dos} 2 · {tres} 3 · {cuatro} 4 · {cinco} 5 · {seis} 6 · {siete} 7 · {ocho} 8 · {nueve} 9 · {diez} 10.

De 16 a 19, o espanhol junta **dez + e + unidade**: {dieciséis} 16 · {diecisiete} 17 · {dieciocho} 18 · {diecinueve} 19 (em português é «dezasseis», etc.: a palavra se separa).

{vientiún} 21 a {veintinueve} 29: {veintidós} 22 · {veintitrés} 23 · {veinticuatro} 24 · {veinticinco} 25 · {veintiséis} 26 · {veintisiete} 27 · {veintiocho} 28 · {veintinueve} 29.

A partir de 30, tudo se separa: {treinta y uno} 31 · {cuarenta y dos} 42 · {cincuenta} 100 — a conjunção {y} só aparece **antes das dezenas**, nunca entre as unidades: {treinta y uno}, nunca «*treinta y uno y».

## Apócopes numéricas

• {uno} → {un} antes de substantivo masculino: {un día} «um dia» · {una mujer} «uma mulher».
• {veintiuno} → {veintiún}: {veintiún años} «vinte e um anos».
• {ciento} → {cien} **antes de substantivo**, mas {ciento} sozinho ou antes de outro numeral: {cien ovejas} «cem ovelhas» · {ciento uno} «cento e um» · {ciento mil} «cem mil».
• {mil} é **invariável**: {mil personas} «mil pessoas», nunca «*miles personas».
• {un millón} é **substantivo** e pluraliza: {dos millones} «dois milhões».

## Fórmulas bíblicas

{doce apóstoles} «doze apóstolos» · {setenta veces siete} «setenta vezes sete» (Mt 18:22) · {los tres días} «os três dias» (Mt 17:21) · {cuatro evangelios} «quatro evangelhos».

Cuidado com o sanduíche português: {de dieciséis a veinte años} «dos dezesseis aos vinte anos».

## Números como substantivo

Os numerais funcionam como substantivos quando nomeiam horas: {cuatro de la mañana} «quatro da manhã».

Ex.: O ordinal é sempre acompanhado de substantivo: {el tercer día} «o terceiro dia» (1Co 15:4).`),
  vocab: [
    V('uno', 'uno', 'um'),
    V('dieciséis', 'dieciséis', 'dezesseis (junto!)'),
    V('veintidós', 'veintidós', 'vinte e dois (junto!)'),
    V('treinta y uno', 'treinta y uno', 'trinta e um (separado!)'),
    V('cien', 'cien', 'cem (apócope!)'),
    V('mil', 'mil', 'mil (invariável!)'),
    V('millones', 'millón', 'milhões (COM plural!)'),
    V('setenta veces siete', 'setenta', 'setenta vezes sete (Mt 18:22)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"mil" × "millones"?'),
    options: [
      T('Ambos com plural'),
      T('"mil" invariável; "millón" é substantivo (millones!)'),
      T('O contrário'),
      T('Erro'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Escreva 32 em espanhol: treinta y ___'),
      answer: 'dos',
      hint: T('Regra §1: acima de 30, tudo se separa.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual forma está CORRETA antes de substantivo masculino?'),
      options: [
        T('{ciento hombres}'),
        T('{cien hombres}'),
        T('{ciento de hombres}'),
        T('{cien de hombres}'),
      ],
      answer: 1,
      hint: T('Regla §2: ciento → cien antes do nome.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o número à sua escrita'),
      pairs: [
        { a: T('16'), b: T('{dieciséis}') },
        { a: T('22'), b: T('{veintidós}') },
        { a: T('100'), b: T('{cien} / {ciento}') },
        { a: T('1000'), b: T('{mil}') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    { n: '1', text: T('16–19 e 21–29 escrevem-se juntos; a partir de 30, separados com «y».') },
    { n: '2', text: T('Ciento vira cien antes de substantivo e uno vira un antes de masculino.') },
    {
      n: '3',
      text: T('Mil é invariável; millón é substantivo e pluraliza: dos millones, dos mil.'),
    },
    {
      n: '4',
      text: T(
        'O «y» das dezenas desaparece antes de uno: treinta y uno, mas no «treinta y uno y».',
      ),
    },
  ],
  notes: [
    {
      label: T('Um, um, um'),
      text: T(
        'O numeral {uno} se torna {un} diante de substantivo masculino e {una} diante de feminino, e perde o {o}. A forma {uno} sobrevive isolada ou como substantivo: {uno lo hizo}.',
      ),
    },
  ],
  examples: [
    { text: '{setenta veces siete}', gloss: T('Setenta vezes sete (Mt 18:22 — 77).') },
    { text: '{doce apóstoles}', gloss: T('Doze apóstolos (número invariável, sem «s»!).') },
    { text: '{veintiún años}', gloss: T('Vinte e um anos ({veintiún} apocopado!).') },
    { text: '{los tres días}', gloss: T('Os três dias (Mt 17:21).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — De 1 a 31'),
      head: [T('Nº'), T('Espanhol'), T('Nº'), T('Espanhol')],
      rows: [
        ['1', '{uno}', '16', '{dieciséis}'],
        ['2', '{dos}', '17', '{diecisiete}'],
        ['3', '{tres}', '18', '{dieciocho}'],
        ['4', '{cuatro}', '19', '{diecinueve}'],
        ['5', '{cinco}', '20', '{veinte}'],
        ['6', '{seis}', '21', '{veintiuno}'],
        ['7', '{siete}', '22', '{veintidós}'],
        ['8', '{ocho}', '23', '{veintitrés}'],
        ['9', '{nueve}', '24', '{veinticuatro}'],
        ['10', '{diez}', '25', '{veinticinco}'],
        ['11', '{once}', '26', '{veintiséis}'],
        ['12', '{doce}', '27', '{veintisiete}'],
        ['13', '{trece}', '28', '{veintiocho}'],
        ['14', '{catorce}', '29', '{veintinueve}'],
        ['15', '{quince}', '30', '{treinta}'],
      ],
    },
    {
      caption: T('Tabela 2 — Dezenas e números grandes'),
      head: [T('Número'), T('Espanhol'), T('Observação')],
      rows: [
        ['20', '{veinte}', T('radical próprio')],
        ['30', '{treinta}', '—'],
        ['40', '{cuarenta}', '—'],
        ['50', '{cincuenta}', '—'],
        ['60', '{sesenta}', '—'],
        ['70', '{setenta}', T('Mt 18:22')],
        ['80', '{ochenta}', '—'],
        ['90', '{noventa}', '—'],
        ['100', '{cien} / {ciento}', T('apócope antes do nome')],
        ['1000', '{mil}', T('invariável')],
        ['1000000', '{un millón}', T('substantivo (plural: millones)')],
      ],
    },
  ],
};
