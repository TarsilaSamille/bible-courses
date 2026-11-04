import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('Numerals and agreement'),
  subtitle: T('From one to a thousand'),
  section: T('The noun'),
  body: C(`## From 3 to 10 the numeral is feminine

From {ثَلَاثَة} to {عَشَرَة}, the numeral takes the feminine form even before a masculine noun: {ثَلَاثَةُ أَيَّامٍ} is "three days", not "three book". This is not an error but the inheritance of an old rule that treated the counted noun as feminine. {اِثْنَانِ} is the only numeral that agrees normally.

## The noun goes genitive

The counted noun loses nunation and takes the genitive, visible in {أَيَّامٍ}. The numeral stays in whatever case the rest of the clause requires. Translation therefore has to preserve the idea of counting: Portuguese simply says "three days", and the genitive disappears in translation.

## From 11 to 99 it changes

The structure reverses: the unit comes first, the ten after, and the noun stays plural. {إِحْدَى عَشَرَةَ} is "eleven" (feminine unit + ten) and {ثَلَاثَةَ عَشَرَ} is "thirteen" (masculine unit + ten). This reversal between 13 and 19, against 11 and 12, is one of the system's classic features.

## Above a hundred

{mِائَة} and {أَلْف} are indeclinable and require no gender change. From two hundred on, agreement returns: {مِائَتَانِ} is the dual, and {مِائَةٌ وَثَلَاثُونَ} keeps unit and ten apart.

## Reading criterion

Count from 3 to 20 until the pattern is automatic. Then, in any verse with a numeral, check three things: the gender of the numeral, the case of the noun, and the position of the unit relative to the ten.`),
  vocab: [
    V('وَاحِد', 'واحد', 'one'),
    V('اِثْنَانِ', 'اثنان', 'two'),
    V('ثَلَاثَة', 'ثلاثة', 'three'),
    V('أَرْبَعَة', 'أربعة', 'four'),
    V('خَمْسَة', 'خمسة', 'five'),
    V('سِتَّة', 'ستة', 'six'),
    V('سَبْعَة', 'سبعة', 'seven'),
    V('ثَمَانِيَة', 'ثمانية', 'eight'),
    V('تِسْعَة', 'تسعة', 'nine'),
    V('عَشَرَة', 'عشرة', 'ten'),
    V('مِائَة', 'مائة', 'hundred'),
    V('أَلْف', 'ألف', 'thousand'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('How do you say “seven”?'),
    answer: 'سَبْعَة',
    hint: T('Begin with sīn and end with tāʾ marbūṭa.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Which numeral counts “books” (masculine)?'),
      options: [T('three'), T('three masc.'), T('three acc.'), T('third')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match number and form.'),
      pairs: [
        { a: T('two'), b: T('two') },
        { a: T('five'), b: T('five') },
        { a: T('ten'), b: T('ten') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'fill',
      prompt: T('Complete “___ لَيْلَةٍ” (a thousand nights).'),
      answer: 'أَلْفُ',
      hint: T('The word means “thousand”.'),
    },
  ],
  rules: [
    { n: '1', text: T('From 3 to 10 the numeral is feminine regardless of the counted noun.') },
    { n: '2', text: T('The counted noun from 3 to 10 is genitive, usually plural.') },
    { n: '3', text: T('11–99 are construct compounds: the unit precedes the ten.') },
  ],
  notes: [
    {
      label: T('Counting'),
      text: T('The form {ثَلَاثَة} does not make “day” feminine; it reflects numeral polarity.'),
    },
  ],
  examples: [
    { text: 'ثَلَاثَةُ أَيَّامٍ', gloss: T('three days') },
    { text: 'سَبْعُ سِنِينَ', gloss: T('seven years') },
    { text: 'اِثْنَا عَشَرَ', gloss: T('twelve') },
  ],
  tables: [
    {
      caption: T('Numbers 1–12'),
      head: [T('Number'), T('Arabic')],
      rows: [
        ['1', 'وَاحِد'],
        ['2', 'اِثْنَانِ'],
        ['3', 'ثَلَاثَة'],
        ['4', 'أَرْبَعَة'],
        ['5', 'خَمْسَة'],
        ['6', 'سِتَّة'],
        ['7', 'سَبْعَة'],
        ['8', 'ثَمَانِيَة'],
        ['9', 'تِسْعَة'],
        ['10', 'عَشَرَة'],
        ['11', 'إِحْدَى عَشَرَةَ'],
        ['12', 'اِثْنَا عَشَرَ'],
      ],
    },
  ],
};
