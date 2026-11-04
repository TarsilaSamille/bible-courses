import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  section: T('The article and number'),
  title: T('The numeral'),
  subtitle: T('cinco pães, dois discípulos, and the meia dúzia that is feminine'),
  body: C(`## Cardinals: counting and money

Cardinals count: {um}, {dois}, {três}, {quatro}, {cinco}, {dez}, {onze}, {dezasseis}, {vinte}, {cem}, {mil}. Past a thousand Portuguese has three scales, and they are not the same in Portugal and in Brazil: a million is a thousand million in Portugal, and a billion is a thousand million in Brazil. Anyone translating a number of people has to know which side of that line they are writing on.

Money has its own counting: {cinco reais} with no article, {cem reais}, {mil reais}. For notes and coins there is also the countable form, {uma nota de dois reais}, and counting by banknote.

## Ordinals and the suffix that saves them

Ordinals give position: {primeiro}, {segundo}, {terceiro}, {quarto}, {quinto}, {décimo}, {vigésimo}, {centésimo}. The rule has two halves, and the second half is the one that saves you: the cardinal becomes an ordinal with the suffix {-ésimo}, and anyone who does not know the whole series at least knows the rule. {Vinte} gives {vigésimo}, {cem} gives {centésimo}.

The irregular ones are few and come by heart: {segundo}, {quinto}, {nono}, {décimo}. The rest is built: {vigésimo primeiro} for the 21st, {centésimo décimo} for the 110th.

## Collectives: counting by name

There are collective numerals, and they count a group by the name of the group: {um par de meias}, {uma dúzia de ovos}, {uma multidão de gente}, {uma fila de pessoas}, {um molho de louças}.

They always bring the name that follows, and that is why the particle {de} is required: {um par de}, {uma dúzia de}, {uma fila de}. Agreement is with the name of the group, not with the thing: {um par de meias} because the pair is masculine, {meia dúzia de ovos} because a dozen and a half is feminine, and that is the detail almost everybody gets wrong.

## Agreement and money

The numeral agrees with the noun: {os dois discípulos}, {as duas irmãs}, {os três livros}, {as três casas}. With {um} and {uma} the article disappears: {um homem}, {uma casa}, and the indefinite form takes over the job of the article.

Counting money is where Portuguese economises: {cinco reais}, {cem euros}, {mil dólares}, with no plural and no article. But when the thing is countable and follows the number, the noun goes into the plural: {dois livros}, {três casas}.

## Reading criterion

With any number, ask: is it cardinal or ordinal? Is it collective, and what is the name of the group? And is what follows in the plural?

John 6:9 sets {cinco pães} against {dois peixes}: both are cardinals, both have the noun in the plural, and the difference between them is what the narrative will use later. A translator who writes {cinco pão} has already lost the count, and the count is what the text is counting.`),
  vocab: [
    V('um', 'um', 'um'),
    V('dois', 'dois', 'dois'),
    V('cinco', 'cinco', 'cinco'),
    V('dez', 'dez', 'dez'),
    V('vinte', 'vinte', 'vinte'),
    V('cem', 'cem', 'cem'),
    V('mil', 'mil', 'mil'),
    V('milhões', 'milhão', 'milhões'),
    V('o primeiro', 'primeiro', 'o primeiro'),
    V('o segundo', 'segundo', 'o segundo'),
    V('o décimo', 'décimo', 'o décimo'),
    V('um par de', 'par', 'um par de'),
    V('meia dúzia de', 'dúzia', 'meia dúzia de'),
    V('uma dúzia de', 'dúzia', 'uma dúzia de'),
    V('os dois discípulos', 'discípulo', 'os dois discípulos'),
  ],
  rules: [
    {
      n: '§1',
      text: T('The cardinal counts: {um}, {dois}, {cinco}, {dez}, {vinte}, {cem}, {mil}.'),
    },
    {
      n: '§2',
      text: T(
        'The ordinal gives position and is formed as a rule with the suffix {-ésimo}: {vigésimo}, {centésimo}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The collective counts the group by the name of the group and requires {de}: {uma dúzia de ovos}.',
      ),
    },
    {
      n: '§4',
      text: T('The collective agrees with the name of the group: {meia dúzia} is feminine.'),
    },
    {
      n: '§5',
      text: T('Money does not go into the plural: {cinco reais}, {cem euros}, {mil dólares}.'),
    },
  ],
  notes: [
    {
      label: T('Biblical × everyday'),
      text: T(
        'Greek and Hebrew mark number on the noun, not on the numeral: it is the noun itself that goes plural. Portuguese does the opposite, and a translator has to invert the path.',
      ),
    },
    {
      label: T('Portugal × Brazil'),
      text: T(
        'A million, a billion and a trillion do not mean the same thing in the two countries. Biblical translation hardly ever turns on large numbers, which is why the divergence rarely shows.',
      ),
    },
  ],
  examples: [
    { text: 'Cinco pães e dois peixes.', gloss: T('Two cardinals, two plurals.') },
    { text: 'Os dois discípulos partiram.', gloss: T('The numeral agrees with {discípulos}.') },
    { text: 'As duas irmãs ficaram.', gloss: T('Feminine plural because of {irmãs}.') },
    { text: 'Uma dúzia de ovos.', gloss: T('Collective: the group is named {dúzia}, feminine.') },
    { text: 'Meia dúzia de ovos.', gloss: T('Collective with {meia}: still feminine.') },
    { text: 'O décimo dia.', gloss: T('Regular ordinal, with the suffix {-ésimo}.') },
    { text: 'O centésimo salmo.', gloss: T('{cem} plus {-ésimo}.') },
    { text: 'Cem reais na mesa.', gloss: T('Money: no article and no plural.') },
  ],
  tables: [
    {
      caption: T('Cardinals'),
      head: ['Número', 'Cardinal', 'Observação'],
      rows: [
        ['1', 'um, uma', 'o artigo indefinido absorve o artigo'],
        ['2', 'dois, duas', 'o substantivo vai ao plural'],
        ['5', 'cinco', 'idem'],
        ['16', 'dezasseis', 'prefixo dez- mais seis'],
        ['20', 'vinte', 'vinte e um'],
        ['100', 'cem', 'cem mil'],
        ['1000', 'mil', 'mil e um'],
      ],
    },
    {
      caption: T('Ordinals'),
      head: ['Posição', 'Ordinal', 'Como se forma'],
      rows: [
        ['1º', 'primeiro', 'irregular'],
        ['2º', 'segundo', 'irregular'],
        ['3º', 'terceiro', 'irregular'],
        ['5º', 'quinto', 'irregular'],
        ['10º', 'décimo', 'dez + ésimo'],
        ['20º', 'vigésimo', 'vinte + ésimo'],
        ['100º', 'centésimo', 'cem + ésimo'],
      ],
    },
    {
      caption: T('Coletivos e contagem de dinheiro'),
      head: ['Construção', 'Concordância', 'Exemplo'],
      rows: [
        ['um par de', 'masculino', 'um par de meias'],
        ['meia dúzia de', 'feminino', 'meia dúzia de ovos'],
        ['uma dúzia de', 'feminino', 'uma dúzia de ovos'],
        ['numeral + dinheiro', 'sem plural', 'cinco reais, cem euros'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which is the correct plural?'),
    options: [
      T('os dois discípulos'),
      T('os dois discípulo'),
      T('os dois discipulo'),
      T('o dois discípulos'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{meia dúzia} is ______, which is why one says meia dúzia de ovos.'),
      answer: 'feminino',
      hint: T('It agrees with the name of the group.'),
    },
    {
      kind: 'choose',
      prompt: T('Which construction is correct with money?'),
      options: [T('cinco reais'), T('cinco reaes'), T('os cinco reaes'), T('cinco de reais')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the cardinal to the ordinal.'),
      pairs: [
        { a: T('cinco'), b: T('quinto') },
        { a: T('dez'), b: T('décimo') },
        { a: T('vinte'), b: T('vigésimo') },
        { a: T('cem'), b: T('centésimo') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
