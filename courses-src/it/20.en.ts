import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  title: T('Countable and uncountable'),
  subtitle: T('la birra, il pane, un metro di corda'),
  section: T('The article and the pronouns'),
  body: C(`## What can be counted and what cannot

A **countable** noun takes number: {un libro}, {due libri}, {i libri}. A noun of mass does not: *due birre* does not exist, nor does *tre paesi* in the sense of three kinds of bread. In Italian a mass noun has no plural, and trying to pluralise it sounds wrong exactly as much as saying "two pizzas" when you mean two slices.

The practical consequence is that when the number matters, it shows up in **another word**. Not {due birre}, but {due bottiglie di birra}. Not {tre carni}, but {tre fette di carne}. The substance stays singular and the unit that contains it does the counting.

## The mass is almost all feminine

The pattern is clear: it is the substances that are feminine. {La birra}, {l’acqua}, {la pasta}, {la carne}, {la farina}, {la zucchera}, {l’aria}, {la minestra}, {la insalata}. Portuguese also uses the feminine article most of the time, but in Italian the match is nearly total, and that is why {la birra} sounds natural to anyone who only knows Portuguese.

The masculine ones exist, and they are a closed group of food and substance: {il pane}, {il latte}, {il vino}, {il riso}, {il sale}, {il burro}, {il miele}, {l’olio}. There are eight, they have to be learned, and no rule separates them from the rest.

## The measure that becomes a noun

When the mass needs a number, it is given a measure, and the measure inflects normally: {un metro} di corda, {due chili} di farina, {tre litri} di latte, {una tazza} di caffè, {un cucchiaino} di miele. Notice that the measure is an ordinary noun, with its own article and its own plural; it is what does the counting.

When the number is a unit, Italian prefers the plural: {due chili} and not {due chilo}. And there is {mezzo}, which gives half: {mezzo litro} d’acqua, {mezzo pane}, {mezzo chilogrammo}. With a numeral, {mezzo} becomes {mezzo litro} and {un litro e mezzo}.

## In the Bible

Matt 4:4 has both cases side by side: "Non di solo pane vivrà l’uomo, ma di ogni parola che esce dalla bocca di Dio". {Pane} is masculine, of mass, without an article and without a plural: {solo pane} is "only bread", and that is why the expression sounds idiomatic in Italian. {Ogni parola}, beside it, is countable, in the singular, and {ogni} works as if it were the article.

Italian thus settles an ambiguity Greek did not have: in {καὶ ἄρτου} the bread is pure mass; in {ἄνθρακες} they are counted coals. Translating both with one word loses the article, and the article was what made the difference.

## Reading criterion

When you meet a substance in the plural, be suspicious: it is almost always {di} plus a countable noun. And when a mass noun comes with an article ({la birra}) and when it comes without ({solo pane}), the difference is one of reference, not of style.`),
  vocab: [
    V('birra', 'birra', 'beer'),
    V('acqua', 'acqua', 'water'),
    V('pasta', 'pasta', 'pasta'),
    V('carne', 'carne', 'meat'),
    V('farina', 'farina', 'flour'),
    V('zucchera', 'zucchero', 'sugar'),
    V('pane', 'pane', 'bread'),
    V('latte', 'latte', 'milk'),
    V('vino', 'vino', 'wine'),
    V('riso', 'riso', 'rice'),
    V('sale', 'sale', 'salt'),
    V('miele', 'miele', 'honey'),
    V('metro', 'metro', 'metre'),
    V('litro', 'litro', 'litre'),
    V('chilo', 'chilo', 'kilo'),
    V('tazza', 'tazza', 'cup'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How do you say "two beers" in Italian?'),
    options: [T('due birre'), T('due bottiglie di birra'), T('due birra'), T('due di birre')],
    answer: 1,
    hint: T('A mass has no plural: the bottle does the counting.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Which of these mass nouns is feminine?'),
      options: [T('il pane'), T('la carne'), T('il latte'), T('il riso')],
      answer: 1,
      hint: T('Most are feminine; bread, milk, rice and wine are the exceptions.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete: due ___ di farina (kilos)'),
      answer: 'chili',
      hint: T('The measure does the counting.'),
    },
    {
      kind: 'fill',
      prompt: T('Plural of il libro, to set against il pane: i ___'),
      answer: 'libri',
      hint: T('Countable: -o becomes -i.'),
    },
  ],
  rules: [
    { n: '1', text: T('A countable noun takes article and plural: un libro, due libri.') },
    {
      n: '2',
      text: T('A mass noun takes no plural: due birre does not exist; say due bottiglie di birra.'),
    },
    {
      n: '3',
      text: T(
        'Substances are almost all feminine; the masculine ones are pane, latte, vino, riso, sale, burro, miele, olio.',
      ),
    },
    {
      n: '4',
      text: T(
        'The plural of a mass exists only with a measure: due metri d’acqua, tre chili di farina.',
      ),
    },
    {
      n: '5',
      text: T('Mezzo plus a noun gives half: mezzo litro, mezzo pane, mezzo chilogrammo.'),
    },
  ],
  notes: [
    {
      label: T('The word that changes category'),
      text: T(
        '"Due caffè" is correct: there Italian starts counting the cup, not the liquid. With the raw substance the phrase is {due tazze di caffè}. The same goes for {un bicchiere di vino} against {un vino}.',
      ),
    },
    {
      label: T('With article or without'),
      text: T(
        '{La birra} names a specific beer, the one in view; {birra} names the substance. {Solo pane} is the biblical phrase, and it is {solo} that holds the noun up: without it Italian would say {il solo pane}, which is a different thing.',
      ),
    },
  ],
  examples: [
    { text: 'Due bottiglie di birra.', gloss: T('Two bottles of beer.') },
    { text: 'La pasta è buona.', gloss: T('The pasta is good.') },
    { text: 'Tre fette di carne.', gloss: T('Three slices of meat.') },
    { text: 'Due chili di farina.', gloss: T('Two kilos of flour.') },
    { text: 'Mezzo litro d’acqua.', gloss: T('Half a litre of water.') },
    { text: 'Un cucchiaino di miele.', gloss: T('A spoonful of honey.') },
    { text: 'Il pane e il vino.', gloss: T('The bread and the wine.') },
    { text: 'Due caffè, per favore.', gloss: T('Two coffees, please.') },
    { text: 'Non di solo pane vivrà l’uomo.', gloss: T('Man shall not live by bread alone.') },
  ],
  tables: [
    {
      caption: T('Countable and uncountable'),
      head: ['Sostantivo', 'Contabile', 'Plurale'],
      rows: [
        ['il libro', 'sì', 'i libri'],
        ['la mano', 'sì', 'le mani'],
        ['la birra', 'no', '—'],
        ['l’acqua', 'no', '—'],
        ['il pane', 'no', '—'],
        ['la carne', 'no', '—'],
        ['il sale', 'no', '—'],
      ],
    },
    {
      caption: T('Mass nouns that are masculine'),
      head: ['Sostantivo', 'Glossa'],
      rows: [
        ['il pane', 'pane'],
        ['il latte', 'leche'],
        ['il vino', 'vino'],
        ['il riso', 'arroz'],
        ['il sale', 'sal'],
        ['il burro', 'mantequilla'],
        ['il miele', 'miel'],
        ['l’olio', 'aceite'],
      ],
    },
    {
      caption: T('Measures that do the counting'),
      head: ['Misura', 'Con sostantivo'],
      rows: [
        ['un metro', 'di corda'],
        ['due chili', 'di farina'],
        ['tre litri', 'di latte'],
        ['una tazza', 'di caffè'],
        ['un cucchiaino', 'di miele'],
        ['mezzo litro', 'd’acqua'],
      ],
    },
  ],
};
