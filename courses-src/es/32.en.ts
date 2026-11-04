import { C, T, V } from '../shared.mts';

export default {
  id: 32,
  title: T('Cardinal numerals'),
  subtitle: T('uno–millón — counting in Spanish'),
  section: T('Numerals'),
  body: C(`## The basic series

{uno} 1 · {dos} 2 · {tres} 3 · {cuatro} 4 · {cinco} 5 · {seis} 6 · {siete} 7 · {ocho} 8 · {nueve} 9 · {diez} 10.

From 16 to 19 Spanish joins **ten + y + unit**: {dieciséis} 16 · {diecisiete} 17 · {dieciocho} 18 · {diecinueve} 19 (Portuguese splits: «dezasseis»).

21 to 29: {veintiún} 21 · {veintidós} 22 · {veintitrés} 23 · {veinticuatro} 24 · {veinticinco} 25 · {veintiséis} 26 · {veintisiete} 27 · {veintiocho} 28 · {veintinueve} 29.

From 30 on, everything splits: {treinta y uno} 31 · {cuarenta y dos} 42 · {cincuenta} 100 — the {y} appears only **before the tens**, never between units.

## Number apocopes

• {uno} → {un} before a masculine noun: {un día} · {una mujer}.
• {veintiuno} → {veintiún}: {veintiún años}.
• {ciento} → {cien} **before a noun**, but {ciento} alone or before another numeral: {cien ovejas} · {ciento uno} · {ciento mil}.
• {mil} is **invariable**: {mil personas}, never «miles personas».
• {un millón} is a **noun** and pluralizes: {dos millones}.

## Biblical formulas

{doce apóstoles} · {setenta veces siete} (Matt 18:22) · {los tres días} (Matt 17:21) · {cuatro evangelios}.

Careful with the Portuguese sandwich: {de dieciséis a veinte años} "from sixteen to twenty years old".

Ex.: {El segundo} is always followed by a noun: {el segundo día} "the second day".`),
  vocab: [
    V('uno', 'uno', 'one'),
    V('dieciséis', 'dieciséis', 'sixteen (joined!)'),
    V('veintidós', 'veintidós', 'twenty-two (joined!)'),
    V('treinta y uno', 'treinta y uno', 'thirty-one (split!)'),
    V('cien', 'cien', 'hundred (apocope!)'),
    V('mil', 'mil', 'thousand (invariable!)'),
    V('millones', 'millón', 'millions (WITH plural!)'),
    V('setenta veces siete', 'setenta', 'seventy times seven (Matt 18:22)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"mil" vs "millones"?'),
    options: [
      T('Both pluralize'),
      T('"mil" invariable; "millón" is a noun (millones!)'),
      T('The opposite'),
      T('Error'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Write 32 in Spanish: treinta y ___'),
      answer: 'dos',
      hint: T('Rule §1: above 30, everything splits.'),
    },
    {
      kind: 'choose',
      prompt: T('Which form is CORRECT before a masculine noun?'),
      options: [
        T('{ciento hombres}'),
        T('{cien hombres}'),
        T('{ciento de hombres}'),
        T('{cien de hombres}'),
      ],
      answer: 1,
      hint: T('Rule §2: ciento → cien before a noun.'),
    },
    {
      kind: 'match',
      prompt: T('Match the number to its written form'),
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
    { n: '1', text: T('16–19 and 21–29 are written together; from 30 on, split with y.') },
    {
      n: '2',
      text: T('Ciento becomes cien before a noun, and uno becomes un before a masculine noun.'),
    },
    {
      n: '3',
      text: T('Mil is invariable; millón is a noun and pluralizes: dos millones, dos mil.'),
    },
    {
      n: '4',
      text: T('The tens y disappears before one: treinta y uno, but never treinta y uno y.'),
    },
  ],
  notes: [
    {
      label: T('One, one, one'),
      text: T(
        '{uno} becomes {un} before a masculine noun and {una} before a feminine one, dropping the {o}. The form {uno} survives alone or as a noun: {uno lo hizo}.',
      ),
    },
  ],
  examples: [
    { text: '{setenta veces siete}', gloss: T('Seventy times seven (Matt 18:22 — 77).') },
    { text: '{doce apóstoles}', gloss: T('Twelve apostles (invariable number, no s!).') },
    { text: '{veintiún años}', gloss: T('Twenty-one years (veintiún apocopated!).') },
    { text: '{los tres días}', gloss: T('The three days (Matt 17:21).') },
  ],
  tables: [
    {
      caption: T('Table 1 — From 1 to 31'),
      head: [T('No.'), T('Spanish'), T('No.'), T('Spanish')],
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
      caption: T('Table 2 — Tens and large numbers'),
      head: [T('Number'), T('Spanish'), T('Note')],
      rows: [
        ['20', '{veinte}', T('own stem')],
        ['30', '{treinta}', '—'],
        ['40', '{cuarenta}', '—'],
        ['50', '{cincuenta}', '—'],
        ['60', '{sesenta}', '—'],
        ['70', '{setenta}', T('Matt 18:22')],
        ['80', '{ochenta}', '—'],
        ['90', '{noventa}', '—'],
        ['100', '{cien} / {ciento}', T('apocope before a noun')],
        ['1000', '{mil}', T('invariable')],
        ['1000000', '{un millón}', T('noun (plural: millones)')],
      ],
    },
  ],
};
