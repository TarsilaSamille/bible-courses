import { C, T, V } from '../shared.mts';

export default {
  id: 33,
  title: T('Ordinal numerals'),
  subtitle: T('primero–décimo — kings, days and chapters'),
  section: T('Numerals'),
  body: C(`## Only up to {décimo}

Spanish has distinct ordinals only up to **10**: {primero} · {segundo} · {tercero} · {cuarto} · {quinto} · {sexto} · {séptimo} · {octavo} · {noveno} · {décimo} "tenth". Beyond that, use the cardinal: {el capítulo once} "chapter eleven" · {el siglo veinte} "the twentieth century".

A historical exception: {el siglo XIII} "the 13th century" (ordinals in Roman numerals survived for centuries and kings).

## Agreement and apocope

Ordinals agree in gender and number: {primera} "first" · {segundas} · {terceros} · {cuartas}.

Only {primero} and {tercero} apocopate before a masculine singular noun: {primer día} "the first day" (Gen 1:5) · {tercer día} (1 Cor 15:4) · {el primer apóstol} · {el tercer mandamiento}.

## Fixed formulas

• {en primer lugar} "firstly" (apocope required).
• {por primera vez} "for the first time" (no apocope, since {vez} is feminine).
• {Felipe II} = {Felipe segundo} "Philip the Second" — kings and popes use lowercase ordinals; the Roman numeral is uppercase and abbreviated.

## Ordinal vs cardinal in practice

Do not use an ordinal where Portuguese uses a cardinal:

• {el primero de enero} "January 1st".
• Page: {página doce} "page twelve" (not «duodécima»).

But do use ordinals for: days of the week ({el tercer día}), centuries ({el siglo primero}), ranking ({llegó segundo}).

Ex.: {En el primer día de la semana} "on the first day of the week" (John 1:1 in its Passover context).`),
  vocab: [
    V('primero', 'primero', 'first'),
    V('primer día', 'primero', 'first day (apocope!)'),
    V('tercer día', 'tercero', 'third day (apocope!)'),
    V('décimo', 'décimo', 'tenth (then cardinals!)'),
    V('primera vez', 'primero', 'first time (no apocope!)'),
    V('en primer lugar', 'primero', 'firstly'),
    V('el tercer mandamiento', 'tercero', 'the third commandment'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete: "el ___ día" (the first day)'),
    answer: 'primer',
    hint: T('Apocope of "primero" before masculine.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: "al ___ día" (on the third day, 1 Cor 15:4)'),
      answer: 'tercer',
      hint: T('Apocope of "tercero" before masculine.'),
    },
    {
      kind: 'choose',
      prompt: T('How do you say "chapter 15"?'),
      options: [
        T('{el capítulo quince}'),
        T('{el capítulo XV}'),
        T('{el capítulo décimoquinto}'),
        T('{el quince capítulo}'),
      ],
      answer: 0,
      hint: T('Rule §1: above the 10th, use the cardinal.'),
    },
    {
      kind: 'match',
      prompt: T('Match the full form to the apocopated one'),
      pairs: [
        { a: T('{primero}'), b: T('{primer}') },
        { a: T('{tercero}'), b: T('{tercer}') },
        { a: T('{cuarto}'), b: T('{cuarto} (no apocope!)') },
        { a: T('{décimo}'), b: T('{décimo} (no apocope!)') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    { n: '1', text: T('Proper ordinals only to 10; above that, cardinal: el capítulo once.') },
    {
      n: '2',
      text: T(
        'Only primero and tercero apocopate before a masculine singular: primer día, tercer día.',
      ),
    },
    { n: '3', text: T('Ordinals agree: primera, segundas, terceros, cuartas.') },
    {
      n: '4',
      text: T('For dates, chapters, verses and pages, use the cardinal, not the ordinal.'),
    },
  ],
  notes: [
    {
      label: T('Cardinal for the number'),
      text: T(
        'From "the first" on, the rule flips: the ordinal is {article + ordinal} and the cardinal becomes "number". {el capítulo once} is the one place the swap looks inverted, because the old ordinal survived in {el siglo XIII}.',
      ),
    },
  ],
  examples: [
    { text: '{el primer día}', gloss: T('The first day (Gen 1:5 — apocope of primero).') },
    { text: '{al tercer día}', gloss: T('On the third day (1 Cor 15:4 — apocope of tercero).') },
    { text: '{el capítulo once}', gloss: T('Chapter eleven (cardinal above 10!).') },
    { text: '{en primer lugar}', gloss: T('Firstly (fixed apocope).') },
  ],
  tables: [
    {
      caption: T('Table 1 — Proper ordinals'),
      head: [T('Cardinal'), T('Ordinal (m. sg.)'), T('Apocope'), T('f. sg.')],
      rows: [
        ['1', '{primero}', '{primer}', '{primera}'],
        ['2', '{segundo}', '—', '{segunda}'],
        ['3', '{tercero}', '{tercer}', '{tercera}'],
        ['4', '{cuarto}', '—', '{cuarta}'],
        ['5', '{quinto}', '—', '{quinta}'],
        ['6', '{sexto}', '—', '{sexta}'],
        ['7', '{séptimo}', '—', '{séptima}'],
        ['8', '{octavo}', '—', '{octava}'],
        ['9', '{noveno}', '—', '{novena}'],
        ['10', '{décimo}', '—', '{décima}'],
        ['11', '{once}', '—', '—'],
        ['20', '{veinte}', '—', '—'],
      ],
    },
    {
      caption: T('Table 2 — Where to use an ordinal and where not'),
      head: [T('Context'), T('Form'), T('Example')],
      rows: [
        [T('days of the week'), 'ordinal', '{el tercer día}'],
        [T('centuries'), 'ordinal', '{el siglo primero}'],
        [T('chapters, verses'), 'cardinal', '{el capítulo once}'],
        [T('pages'), 'cardinal', '{página doce}'],
        [T('dates'), 'cardinal', '{el primero de enero}'],
        [T('ranking'), 'ordinal', '{llegó segundo}'],
        [T('kings, popes'), 'ordinal', '{Felipe segundo}'],
      ],
    },
  ],
};
