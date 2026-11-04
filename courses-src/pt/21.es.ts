import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  section: T('El artículo y el número'),
  title: T('El numeral'),
  subtitle: T('cinco pães, dois discípulos, y la meia dúzia que es femenino'),
  body: C(`## Cardinales: la cuenta y el dinero

Los cardinales cuentan: {um}, {dois}, {três}, {quatro}, {cinco}, {dez}, {onze}, {dezasseis}, {vinte}, {cem}, {mil}. Pasado el mil, el portugués tiene tres escalas, y no son las mismas en Portugal y en Brasil: un millón son mil millones en Portugal, y un billón son mil millones en Brasil. Quien traduce un número de población tiene que saber de qué lado está escribiendo.

El dinero tiene su propia cuenta: {cinco reais} sin artículo, {cem reais}, {mil reais}. Para billetes y monedas hay además la forma contable, {uma nota de dois reais}, y a contar por billete.

## Ordinales y el sufijo que los salva

Los ordinales indican posición: {primeiro}, {segundo}, {terceiro}, {quarto}, {quinto}, {décimo}, {vigésimo}, {centésimo}. La regla tiene dos mitades, y la segunda es la que salva: el cardinal se vuelve ordinal con el sufijo {-ésimo}, y quien no sepa la serie completa por lo menos sabe la regla. {Vinte} da {vigésimo}, {cem} da {centésimo}.

Los irregulares son pocos y se aprenden de memoria: {segundo}, {quinto}, {nono}, {décimo}. El resto se construye: {vigésimo primeiro} para el 21.º, {centésimo décimo} para el 110.º.

## Colectivos: contar por nombre

Hay numerales colectivos, y cuentan un grupo por el nombre del grupo: {um par de meias}, {uma dúzia de ovos}, {uma multidão de gente}, {uma fila de pessoas}, {um molho de louças}.

Siempre traen el nombre que viene detrás, y por eso la partícula {de} es obligatoria: {um par de}, {uma dúzia de}, {uma fila de}. La concordancia es con el nombre del grupo, no con la cosa: {um par de meias} porque el par es masculino, {meia dúzia de ovos} porque la docena y media es femenina, y ese es el detalle que casi todo el mundo pierde.

## Concordancia y dinero

El numeral concuerda con el sustantivo: {os dois discípulos}, {as duas irmãs}, {os três livros}, {as três casas}. Con {um} y {una} desaparece el artículo: {um homem}, {uma casa}, y la forma indefinida pasa a hacer de artículo.

El conteo del dinero es el lugar donde el portugués economiza: {cinco reais}, {cem euros}, {mil dólares}, sin plural y sin artículo. Pero cuando la cosa es contable y viene después del número, el sustantivo va al plural: {dois livros}, {três casas}.

## Criterio de lectura

Con cualquier número, pregúntate: ¿es cardinal o ordinal? ¿Es colectivo, y cuál es el nombre del grupo? ¿Y lo que viene detrás está en plural?

Jn 6.9 pone {cinco pães} frente a {dois peixes}: los dos son cardinales, los dos llevan el sustantivo en plural, y la diferencia entre ellos es lo que la narración usará después. Un traductor que escribe {cinco pão} ya perdió la cuenta, y la cuenta es lo que el texto está contando.`),
  vocab: [
    V('um', 'um', 'uno'),
    V('dois', 'dois', 'dos'),
    V('cinco', 'cinco', 'cinco'),
    V('dez', 'dez', 'diez'),
    V('vinte', 'vinte', 'veinte'),
    V('cem', 'cem', 'cien'),
    V('mil', 'mil', 'mil'),
    V('milhões', 'milhão', 'millones'),
    V('o primeiro', 'primeiro', 'el primero'),
    V('o segundo', 'segundo', 'el segundo'),
    V('o décimo', 'décimo', 'el décimo'),
    V('um par de', 'par', 'un par de'),
    V('meia dúzia de', 'dúzia', 'media docena de'),
    V('uma dúzia de', 'dúzia', 'una docena de'),
    V('os dois discípulos', 'discípulo', 'los dos discípulos'),
  ],
  rules: [
    {
      n: '§1',
      text: T('El cardinal cuenta: {um}, {dois}, {cinco}, {dez}, {vinte}, {cem}, {mil}.'),
    },
    {
      n: '§2',
      text: T(
        'El ordinal indica posición y se forma, por regla, con el sufijo {-ésimo}: {vigésimo}, {centésimo}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'El colectivo cuenta el grupo por el nombre del grupo y exige {de}: {uma dúzia de ovos}.',
      ),
    },
    {
      n: '§4',
      text: T('El colectivo concuerda con el nombre del grupo: {meia dúzia} es femenino.'),
    },
    { n: '§5', text: T('El dinero no va al plural: {cinco reais}, {cem euros}, {mil dólares}.') },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'El griego y el hebreo marcan el número en el sustantivo, no en el numeral: es el nombre el que va al plural. El portugués hace lo contrario, y el traductor tiene que invertir el camino.',
      ),
    },
    {
      label: T('Portugal × Brasil'),
      text: T(
        'Un millón, un billón y un billón largo no significan lo mismo en los dos países. La traducción bíblica casi nunca depende de números grandes, y por eso la divergencia aparece poco.',
      ),
    },
  ],
  examples: [
    { text: 'Cinco pães e dois peixes.', gloss: T('Dos cardinales, dos plurales.') },
    { text: 'Os dois discípulos partiram.', gloss: T('El numeral concuerda con {discípulos}.') },
    { text: 'As duas irmãs ficaram.', gloss: T('Femenino plural por causa de {irmãs}.') },
    { text: 'Uma dúzia de ovos.', gloss: T('Colectivo: el grupo se llama {dúzia}, femenino.') },
    { text: 'Meia dúzia de ovos.', gloss: T('Colectivo con {meia}: sigue siendo femenino.') },
    { text: 'O décimo dia.', gloss: T('Ordinal regular, con el sufijo {-ésimo}.') },
    { text: 'O centésimo salmo.', gloss: T('{cem} más {-ésimo}.') },
    { text: 'Cem reais na mesa.', gloss: T('Dinero: sin artículo y sin plural.') },
  ],
  tables: [
    {
      caption: T('Cardinales'),
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
      caption: T('Ordinales'),
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
      caption: T('Colectivos y conteo de dinero'),
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
    prompt: T('¿Cuál es el plural correcto?'),
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
      prompt: T('{meia dúzia} es ______, y por eso se dice meia dúzia de ovos.'),
      answer: 'feminino',
      hint: T('Concuerda con el nombre del grupo.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué construcción es correcta con dinero?'),
      options: [T('cinco reais'), T('cinco reaes'), T('os cinco reaes'), T('cinco de reais')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona el cardinal con el ordinal.'),
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
