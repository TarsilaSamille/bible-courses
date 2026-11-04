import { C, T, V } from '../shared.mts';

export default {
  id: 32,
  title: T('Los numerales cardinales'),
  subtitle: T('uno–millón — contar en español'),
  section: T('Los numerales'),
  body: C(`## La serie básica

{uno} 1 · {dos} 2 · {tres} 3 · {cuatro} 4 · {cinco} 5 · {seis} 6 · {siete} 7 · {ocho} 8 · {nueve} 9 · {diez} 10.

De 16 a 19 el español junta **diez + y + unidad**: {dieciséis} 16 · {diecisiete} 17 · {dieciocho} 18 · {diecinueve} 19 (en portugués se separan: «dezasseis»).

Del 21 al 29: {veintiún} 21 · {veintidós} 22 · {veintitrés} 23 · {veinticuatro} 24 · {veinticinco} 25 · {veintiséis} 26 · {veintisiete} 27 · {veintiocho} 28 · {veintinueve} 29.

Desde el 30, todo se separa: {treinta y uno} 31 · {cuarenta y dos} 42 · {cincuenta} 100 — la conjunción {y} solo aparece **delante de las decenas**, nunca entre las unidades.

## Apocoplas numéricas

• {uno} → {un} ante sustantivo masculino: {un día} «un día» · {una mujer} «una mujer».
• {veintiuno} → {veintiún}: {veintiún años} «veintiún años».
• {ciento} → {cien} **ante sustantivo**, pero {ciento} solo o ante otro numeral: {cien ovejas} «cien ovejas» · {ciento uno} «ciento uno» · {ciento mil} «cien mil».
• {mil} es **invariable**: {mil personas} «mil personas», nunca «miles personas».
• {un millón} es **sustantivo** y pluraliza: {dos millones} «dos millones».

## Fórmulas bíblicas

{doce apóstoles} «doce apóstoles» · {setenta veces siete} «setenta veces siete» (Mt 18.22) · {los tres días} «los tres días» (Mt 17.21) · {cuatro evangelios} «cuatro evangelios».

Cuidado con el sándwich portugués: {de dieciséis a veinte años} «de dieciséis a veinte años».

Ej.: el ordinal siempre lleva sustantivo detrás: {el segundo día} «el segundo día».`),
  vocab: [
    V('uno', 'uno', 'uno'),
    V('dieciséis', 'dieciséis', 'dieciséis (¡junto!)'),
    V('veintidós', 'veintidós', 'veintidós (¡junto!)'),
    V('treinta y uno', 'treinta y uno', 'treinta y uno (¡separado!)'),
    V('cien', 'cien', 'cien (¡apocopla!)'),
    V('mil', 'mil', 'mil (¡invariable!)'),
    V('millones', 'millón', 'millones (¡CON plural!)'),
    V('setenta veces siete', 'setenta', 'setenta veces siete (Mt 18.22)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿«mil» frente a «millones»?'),
    options: [
      T('Los dos pluralizan'),
      T('«mil» invariable; «millón» es sustantivo (¡millones!)'),
      T('Lo contrario'),
      T('Error'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Escribe 32 en español: treinta y ___'),
      answer: 'dos',
      hint: T('Regla §1: por encima de 30, todo se separa.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué forma está CORRECTA ante un sustantivo masculino?'),
      options: [
        T('{ciento hombres}'),
        T('{cien hombres}'),
        T('{ciento de hombres}'),
        T('{cien de hombres}'),
      ],
      answer: 1,
      hint: T('Regla §2: ciento → cien ante el sustantivo.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el número con su escritura'),
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
    { n: '1', text: T('16–19 y 21–29 se escriben juntos; desde el 30, separados con «y».') },
    { n: '2', text: T('Ciento se vuelve cien ante sustantivo y uno se vuelve un ante masculino.') },
    {
      n: '3',
      text: T('Mil es invariable; millón es sustantivo y pluraliza: dos millones, dos mil.'),
    },
    {
      n: '4',
      text: T(
        'La «y» de las decenas desaparece ante uno: treinta y uno, pero nunca «treinta y uno y».',
      ),
    },
  ],
  notes: [
    {
      label: T('Uno, uno, uno'),
      text: T(
        '{uno} se vuelve {un} ante sustantivo masculino y {una} ante femenino, perdiendo la {o}. La forma {uno} sobrevive aislada o como sustantivo: {uno lo hizo}.',
      ),
    },
  ],
  examples: [
    { text: '{setenta veces siete}', gloss: T('Setenta veces siete (Mt 18.22 — 77).') },
    { text: '{doce apóstoles}', gloss: T('Doce apóstoles (¡número invariable, sin «s»!).') },
    { text: '{veintiún años}', gloss: T('Veintiún años (¡veintiún apocopado!).') },
    { text: '{los tres días}', gloss: T('Los tres días (Mt 17.21).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Del 1 al 31'),
      head: [T('N.º'), T('Español'), T('N.º'), T('Español')],
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
      caption: T('Tabla 2 — Decenas y números grandes'),
      head: [T('Número'), T('Español'), T('Nota')],
      rows: [
        ['20', '{veinte}', T('radical propio')],
        ['30', '{treinta}', '—'],
        ['40', '{cuarenta}', '—'],
        ['50', '{cincuenta}', '—'],
        ['60', '{sesenta}', '—'],
        ['70', '{setenta}', T('Mt 18.22')],
        ['80', '{ochenta}', '—'],
        ['90', '{noventa}', '—'],
        ['100', '{cien} / {ciento}', T('apocopla ante el sustantivo')],
        ['1000', '{mil}', T('invariable')],
        ['1000000', '{un millón}', T('sustantivo (plural: millones)')],
      ],
    },
  ],
};
