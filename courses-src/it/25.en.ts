import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  title: T('The numeral'),
  subtitle: T('uno, undici, ventuno, quarantesimo'),
  section: T('Numerals, conjunctions and the gerund'),
  body: C(`## Cardinals: the count and the loss of {-ce}

After {dieci} Italian swaps the ending instead of adding one: {undici}, {dodici}, {tredici}, {quattordici}, {quindici}, {sedici}, {diciassette}. Latin had {-ce} and {-ic}; Italian kept the vowel in {tredici} and {quindici} and **suppressed the {-ce}** in the rest, which is why {undici} is not {undece}.

After {venti} the same movement happens: the final **-i** drops before {tre}, {otto} and the rest ({ventitré}, {ventotto}, {ventisei}), and comes back in the closed numeral {ventuno}, which is also {venti} plus {uno}. The same goes for {trentuno}, {quarantuno}, {ottantuno}.

## {uno} and {ventuno} change shape

**{uno}** is the numeral **1** and the masculine indefinite article, and so it behaves like a noun: {uno} studente, {uno} zaino, {uno} gnomo, {uno} psicologo, {uno} yacht. Before a vowel it stays {un}: {un} ragazzo, {un} amico. With a masculine proper noun: {uno} Jones, {uno} strangio.

**{ventuno}** does the same: {ventun’} anni, {ventuno} anni, {ventuno} studenti. And there is the elided form, obligatory when the numeral is glued to the noun: {ventun’}.

## Ordinals, and what breaks the rule

The ordinal is made by changing the end of the cardinal: {primo}, {secondo}, {terzo}, {quarto}, {quinto}, {sesto}, {settimo}, {ottavo}, {nono}, {decimo}; then {undicesimo}, {dodicesimo}, {tredicesimo}, {quindicesimo}, {ventesimo}, {trentesimo}, {centesimo}, {millesimo}. The suffix **-esimo** is the marker, and what comes before it is the cardinal without the final vowel.

The exception is twofold. {Primo} and {secondo} follow nothing: they are forms of their own. And {quarantesimo} does not look like {quarantunesimo}, because the cardinal is {quaranta}, and {cinquantesimo}, {sessantesimo} and {settantesimo} warn of the same thing.

The **synthesis** enters from {ventuno} and disappears before {cento}: {ventidue}, {trenta e tre}, {quarantotto}, {centottanta}, {milleottocento}. {Trenta e tre} is one word after {trenta}; {cento e trenta} is one word after {cento}.

## In the Bible

John 6:9 puts a numeral on two mass nouns counted by unit: "Non abbiamo qui se non {cinque} pani e {due} pesci". {Cinque pani} is not "five breads" nor "five kinds of bread": it is five units of one substance, and the numeral goes before the noun, as in Portuguese, but without an article.

An Italian numeral is also a noun when it stands alone, and then it usually takes {ne}: "{cinque} pani, non {di più}". And in measures, {cinque} chilometri "five kilometres" stays invariable.

## Reading criterion

When you see a closed two-part number ({ventuno}, {centottanta}), do not look for a word "and": it is already inside the form. When you see {trenta e tre}, the word "e" is obligatory and is part of the number. And when a numeral touches the noun ({ventun’} anni, {cent’} anni), look for the elided form.`),
  vocab: [
    V('uno', 'uno', 'one'),
    V('due', 'due', 'two'),
    V('tre', 'tre', 'three'),
    V('dieci', 'dieci', 'ten'),
    V('undici', 'undici', 'eleven'),
    V('venti', 'venti', 'twenty'),
    V('ventuno', 'ventuno', 'twenty-one'),
    V('trenta', 'trenta', 'thirty'),
    V('cento', 'cento', 'hundred'),
    V('primo', 'primo', 'first'),
    V('secondo', 'secondo', 'second'),
    V('terzo', 'terzo', 'third'),
    V('decimo', 'decimo', 'tenth'),
    V('ventunesimo', 'ventunesimo', 'twenty-first'),
    V('quarantesimo', 'quarantesimo', 'fortieth'),
    V('pane', 'pane', 'bread'),
    V('pesce', 'pesce', 'fish'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How is "fifteen" written in Italian?'),
    options: [T('quindice'), T('quindicci'), T('quinque'), T('quindicì')],
    answer: 0,
    hint: T('The final -ce drops after ten.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: ___ zaino (a backpack)'),
      answer: 'uno',
      hint: T('s + consonant takes uno.'),
    },
    {
      kind: 'choose',
      prompt: T('What is the ordinal of quaranta?'),
      options: [T('quarantuno'), T('quarantesimo'), T('quarentesimo'), T('quarantésimo')],
      answer: 1,
      hint: T('A cardinal in -anta becomes -antesimo.'),
    },
    {
      kind: 'fill',
      prompt: T('Write thirty-three: trenta e ___'),
      answer: 'tre',
      hint: T('Synthesis appears from thirty upwards.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'From eleven to seventeen the final -ce disappears: undici, dodici, quindici, sedici.',
      ),
    },
    {
      n: '2',
      text: T(
        'From twenty on the final -i drops before tre, otto and sei: ventitré, ventotto, ventisei.',
      ),
    },
    { n: '3', text: T('Uno and ventuno become uno, ventun’ before s + consonant, z, gn and ps.') },
    {
      n: '4',
      text: T(
        'Ordinal: cardinal without the final vowel plus -esimo. Primo, secondo and quarantesimo break the count.',
      ),
    },
    {
      n: '5',
      text: T(
        'Synthesis appears from thirty upwards and disappears after cento: trenta e tre, centottanta.',
      ),
    },
  ],
  notes: [
    {
      label: T('The e that exists only once'),
      text: T(
        '{Venti e uno} is not written that way in Italian: either {ventuno}, which is one word, or {venti} più {uno}, which is a phrase. The same goes for {cento e trenta}, which becomes {centotrenta}. Portuguese has the word "e" as glue; Italian glues the numbers.',
      ),
    },
    {
      label: T('The numeral with a proper noun'),
      text: T(
        '{Uno} is both the numeral and the masculine indefinite article, and so it inflects: {uno} studente, {uno} zaino. {Un} does not inflect and never appears before s + consonant. Choosing between {un} and {uno} is choosing whether the noun is known.',
      ),
    },
  ],
  examples: [
    { text: 'Uno studente con uno zaino.', gloss: T('A student with a backpack.') },
    { text: 'Un amico e una studentessa.', gloss: T('A friend and a student.') },
    { text: 'Ventun anni e undici mesi.', gloss: T('Twenty-one years and eleven months.') },
    { text: 'Trenta e tre libri.', gloss: T('Thirty-three books.') },
    { text: 'Quarantotto ore.', gloss: T('Forty-eight hours.') },
    { text: 'Il ventesimo secolo.', gloss: T('The twentieth century.') },
    { text: 'Il quarantesimo anniversario.', gloss: T('The fortieth anniversary.') },
    { text: 'Centottanta pagine.', gloss: T('One hundred and eighty pages.') },
    { text: 'Cinque pani e due pesci.', gloss: T('Five loaves and two fish.') },
  ],
  tables: [
    {
      caption: T('Cardinali'),
      head: ['Numero', 'Italiano', 'Numero', 'Italiano'],
      rows: [
        ['0', 'zero', '16', 'sedici'],
        ['1', 'uno', '17', 'diciassette'],
        ['2', 'due', '20', 'venti'],
        ['3', 'tre', '21', 'ventuno'],
        ['4', 'quattro', '22', 'ventidue'],
        ['5', 'cinque', '23', 'ventitré'],
        ['6', 'sei', '30', 'trenta'],
        ['7', 'sette', '40', 'quaranta'],
        ['8', 'otto', '100', 'cento'],
        ['9', 'nove', '1000', 'mille'],
        ['10', 'dieci', '2000', 'duemila'],
        ['11', 'undici', '200', 'duecento'],
      ],
    },
    {
      caption: T('Ordinali'),
      head: ['Cardinale', 'Ordinale', 'Cardinale', 'Ordinale'],
      rows: [
        ['1', 'primo', '11', 'undicesimo'],
        ['2', 'secondo', '12', 'dodicesimo'],
        ['3', 'terzo', '13', 'tredicesimo'],
        ['4', 'quarto', '20', 'ventesimo'],
        ['5', 'quinto', '21', 'ventunesimo'],
        ['6', 'sesto', '30', 'trentesimo'],
        ['7', 'settimo', '40', 'quarantesimo'],
        ['8', 'ottavo', '50', 'cinquantesimo'],
        ['9', 'nono', '100', 'centesimo'],
        ['10', 'decimo', '1000', 'millesimo'],
      ],
    },
    {
      caption: T('Sintesi'),
      head: ['Numero', 'Italiano', 'Numero', 'Italiano'],
      rows: [
        ['21', 'ventuno', '48', 'quarantotto'],
        ['22', 'ventidue', '53', 'cinquantatré'],
        ['30', 'trenta', '80', 'ottanta'],
        ['33', 'trenta e tre', '100', 'cento'],
        ['40', 'quaranta', '120', 'centoventi'],
        ['46', 'quarantasei', '180', 'centottanta'],
      ],
    },
  ],
};
