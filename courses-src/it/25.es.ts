import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  title: T('El numeral'),
  subtitle: T('uno, undici, ventuno, quarantesimo'),
  section: T('Numerales, conjunciones y el gerundio'),
  body: C(`## Cardinales: la cuenta y la caída de {-ce}

Después de {dieci} el italiano cambia la terminación en vez de añadir una: {undici}, {dodici}, {tredici}, {quattordici}, {quindici}, {sedici}, {diciassette}. El latín tenía {-ce} y {-ic}; el italiano guardó la vocal en {tredici} y {quindici} y **suprimió la {-ce}** en los demás, y por eso {undici} no es {undece}.

Después de {venti} ocurre el mismo movimiento: la final **-i** cae ante {tre}, {otto} y los demás ({ventitré}, {ventotto}, {ventisei}), y reaparece en el numeral cerrado {ventuno}, que es también {venti} más {uno}. Lo mismo vale para {trentuno}, {quarantuno}, {ottantuno}.

## {uno} y {ventuno} cambian de forma

**{uno}** es el numeral **1** y el artículo indefinido masculino, y por eso se comporta como sustantivo: {uno} studente, {uno} zaino, {uno} gnomo, {uno} psicologo, {uno} yacht. Ante vocal sigue {un}: {un} ragazzo, {un} amico. Con nombre propio masculino: {uno} Jones, {uno} strangio.

**{ventuno}** hace lo mismo: {ventun’} anni, {ventuno} anni, {ventuno} studenti. Y está la forma de caída, obligatoria cuando el numeral se pega al sustantivo: {ventun’}.

## Ordinales, y lo que no sigue la regla

El ordinal se forma cambiando el final del cardinal: {primo}, {secondo}, {terzo}, {quarto}, {quinto}, {sesto}, {settimo}, {ottavo}, {nono}, {decimo}; y después {undicesimo}, {dodicesimo}, {tredicesimo}, {quindicesimo}, {ventesimo}, {trentesimo}, {centesimo}, {millesimo}. El sufijo **-esimo** es la marca, y lo que viene antes es el cardinal sin la vocal final.

La excepción es doble. {Primo} y {secondo} no siguen nada: son formas propias. Y {quarantesimo} no se parece a {quarantunesimo} porque el cardinal es {quaranta}, y {cinquantesimo}, {sessantesimo} y {settantesimo} avisan de lo mismo.

La **síntesis** entra a partir de {ventuno} y desaparece antes de {cento}: {ventidue}, {trenta e tre}, {quarantotto}, {centottanta}, {milleottocento}. {Trenta e tre} es una palabra después de {trenta}; {cento e trenta} es una después de {cento}.

## En la Biblia

Jn 6:9 pone un numeral sobre dos sustantivos de masa contados por unidad: «Non abbiamo qui se non {cinque} pani e {due} pesci». {Cinque pani} no son «cinco panes» ni «cinco tipos de pan»: son cinco unidades de una sustancia, y el numeral va delante del nombre, como en portugués, pero sin artículo.

El numeral italiano también es sustantivo cuando va solo, y entonces suele llevar {ne}: «{cinque} pani, non {di più}». Y en medidas, {cinque} chilometri «cinco kilómetros» queda invariable.

## Criterio de lectura

Cuando veas un número cerrado de dos partes ({ventuno}, {centottanta}), no busques ninguna palabra «e»: ya está dentro de la forma. Cuando veas {trenta e tre}, la palabra «e» es obligatoria y forma parte del número. Y cuando un numeral toque el sustantivo ({ventun’} anni, {cent’} anni), busca la forma de caída.`),
  vocab: [
    V('uno', 'uno', 'uno'),
    V('due', 'due', 'dos'),
    V('tre', 'tre', 'tres'),
    V('dieci', 'dieci', 'diez'),
    V('undici', 'undici', 'once'),
    V('venti', 'venti', 'veinte'),
    V('ventuno', 'ventuno', 'veintiuno'),
    V('trenta', 'trenta', 'treinta'),
    V('cento', 'cento', 'cien'),
    V('primo', 'primo', 'primero'),
    V('secondo', 'secondo', 'segundo'),
    V('terzo', 'terzo', 'tercero'),
    V('decimo', 'decimo', 'décimo'),
    V('ventunesimo', 'ventunesimo', 'veintiprimero'),
    V('quarantesimo', 'quarantesimo', 'cuadragésimo'),
    V('pane', 'pane', 'pan'),
    V('pesce', 'pesce', 'pescado'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se escribe «quince» en italiano?'),
    options: [T('quindice'), T('quindicci'), T('quinque'), T('quindicì')],
    answer: 0,
    hint: T('La -ce final cae después de diez.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: ___ zaino (una mochila)'),
      answer: 'uno',
      hint: T('s + consonante pide uno.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es el ordinal de quaranta?'),
      options: [T('quarantuno'), T('quarantesimo'), T('quarentesimo'), T('quarantésimo')],
      answer: 1,
      hint: T('Cardinal en -anta pasa a -antesimo.'),
    },
    {
      kind: 'fill',
      prompt: T('Escribe treinta y tres: trenta e ___'),
      answer: 'tre',
      hint: T('La síntesis aparece a partir de treinta.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('De once a diecisiete desaparece la -ce final: undici, dodici, quindici, sedici.'),
    },
    {
      n: '2',
      text: T(
        'De veinte en adelante cae la -i final ante tre, otto y sei: ventitré, ventotto, ventisei.',
      ),
    },
    { n: '3', text: T('Uno y ventuno se vuelven uno, ventun’ ante s + consonante, z, gn y ps.') },
    {
      n: '4',
      text: T(
        'Ordinal: cardinal sin la vocal final más -esimo. Primo, secondo y quarantesimo rompen la cuenta.',
      ),
    },
    {
      n: '5',
      text: T(
        'La síntesis aparece de treinta en adelante y desaparece tras cento: trenta e tre, centottanta.',
      ),
    },
  ],
  notes: [
    {
      label: T('La «e» que solo existe una vez'),
      text: T(
        '{Venti e uno} no se escribe así en italiano: o {ventuno}, que es una palabra, o {venti} più {uno}, que es una frase. Lo mismo vale para {cento e trenta}, que pasa a {centotrenta}. El portugués tiene la palabra «e» como pegamento; el italiano pega los números.',
      ),
    },
    {
      label: T('El numeral con nombre propio'),
      text: T(
        '{Uno} es el numeral y también el artículo indefinido masculino, y por eso flexiona: {uno} studente, {uno} zaino. {Un} no flexiona y nunca aparece ante s + consonante. Decidir entre {un} y {uno} es decidir si el sustantivo es conocido.',
      ),
    },
  ],
  examples: [
    { text: 'Uno studente con uno zaino.', gloss: T('Un estudiante con una mochila.') },
    { text: 'Un amico e una studentessa.', gloss: T('Un amigo y una estudiante.') },
    { text: 'Ventun anni e undici mesi.', gloss: T('Veintiún años y once meses.') },
    { text: 'Trenta e tre libri.', gloss: T('Treinta y tres libros.') },
    { text: 'Quarantotto ore.', gloss: T('Cuarenta y ocho horas.') },
    { text: 'Il ventesimo secolo.', gloss: T('El siglo veinte.') },
    { text: 'Il quarantesimo anniversario.', gloss: T('El cuadragésimo aniversario.') },
    { text: 'Centottanta pagine.', gloss: T('Ciento ochenta páginas.') },
    { text: 'Cinque pani e due pesci.', gloss: T('Cinco panes y dos peces.') },
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
      caption: T('Síntesis'),
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
