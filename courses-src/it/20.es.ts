import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  title: T('Contable e incontables'),
  subtitle: T('la birra, il pane, un metro di corda'),
  section: T('El artículo y los pronombres'),
  body: C(`## Lo que se cuenta y lo que no se cuenta

Un sustantivo **contable** acepta número: {un libro}, {due libri}, {i libri}. Un sustantivo de masa no: no existe *due birre*, ni *tre paesi* en el sentido de tres tipos de pan. En italiano la masa no tiene plural, e intentar pluralizarla suena tan mal como suena mal decir «dos pizzas» para decir dos rebanadas.

La consecuencia práctica es que, cuando el número importa, aparece en **otra palabra**. No {due birre}, sino {due bottiglie di birra}. No {tre carni}, sino {tre fette di carne}. La sustancia se queda en singular y la unidad que la contiene hace las cuentas.

## La masa es casi toda femenina

El patrón es nítido: son las sustancias las que son femeninas. {La birra}, {l’acqua}, {la pasta}, {la carne}, {la farina}, {la zucchera}, {l’aria}, {la minestra}, {la insalata}. El português también usa artículo femenino la mayoría de las veces, pero en italiano la coincidencia es casi total, y por eso {la birra} suena natural para quien solo conoce el português.

Las masculinas existen, y son un grupo cerrado de comida y de sustancia: {il pane}, {il latte}, {il vino}, {il riso}, {il sale}, {il burro}, {il miele}, {l’olio}. Son ocho, hay que aprendérselas, y ninguna regla las separa de las demás.

## La medida que se vuelve sustantivo

Cuando la masa necesita número, recibe una medida, y la medida flexiona con normalidad: {un metro} di corda, {due chili} di farina, {tre litri} di latte, {una tazza} di caffè, {un cucchiaino} di miele. Fíjate en que la medida es un sustantivo corriente, con su artículo y su plural; es ella la que hace la cuenta.

Cuando el número es una unidad, el italiano prefiere el plural: {due chili} y no {due chilo}. Y está {mezzo}, que da medio: {mezzo litro} d’acqua, {mezzo pane}, {mezzo chilogrammo}. Con numeral, {mezzo} pasa a {mezzo litro} y {un litro e mezzo}.

## En la Biblia

Mt 4:4 tiene los dos casos lado a lado: «Non di solo pane vivrà l’uomo, ma di ogni parola che esce dalla bocca di Dio». {Pane} es masculino, de masa, sin artículo y sin plural: {solo pane} es «solo pan», y por eso la expresión suena idiomática en italiano. {Ogni parola}, al lado, es contable, en singular, y {ogni} funciona como si fuera el artículo.

El italiano resuelve así una ambigüedad que el griego no tenía: en {καὶ ἄρτου} el pan es masa pura; en {ἄνθρακες} son brasas contadas una a una. Traducir los dos con una sola palabra pierde el artículo, y el artículo era lo que hacía la distinción.

## Criterio de lectura

Cuando veas una sustancia en plural, desconfía: casi siempre es {di} más un sustantivo contable. Y cuando el sustantivo de masa viene con artículo ({la birra}) y cuando viene sin ({solo pane}), la diferencia es de referencia, no de estilo.`),
  vocab: [
    V('birra', 'birra', 'cerveza'),
    V('acqua', 'acqua', 'agua'),
    V('pasta', 'pasta', 'masa'),
    V('carne', 'carne', 'carne'),
    V('farina', 'farina', 'harina'),
    V('zucchera', 'zucchero', 'azúcar'),
    V('pane', 'pane', 'pan'),
    V('latte', 'latte', 'leche'),
    V('vino', 'vino', 'vino'),
    V('riso', 'riso', 'arroz'),
    V('sale', 'sale', 'sal'),
    V('miele', 'miele', 'miel'),
    V('metro', 'metro', 'metro'),
    V('litro', 'litro', 'litro'),
    V('chilo', 'chilo', 'kilo'),
    V('tazza', 'tazza', 'taza'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se dice «dos cervezas» en italiano?'),
    options: [T('due birre'), T('due bottiglie di birra'), T('due birra'), T('due di birre')],
    answer: 1,
    hint: T('La masa no tiene plural: quien cuenta es la botella.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Cuál de estos sustantivos de masa es femenino?'),
      options: [T('il pane'), T('la carne'), T('il latte'), T('il riso')],
      answer: 1,
      hint: T('La mayoría son femeninos; el pan, la leche, el arroz y el vino son la excepción.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa: due ___ di farina (kilos)'),
      answer: 'chili',
      hint: T('Cuenta la medida.'),
    },
    {
      kind: 'fill',
      prompt: T('Plural de il libro, para contrastarlo con il pane: i ___'),
      answer: 'libri',
      hint: T('Contable: -o pasa a -i.'),
    },
  ],
  rules: [
    { n: '1', text: T('Un sustantivo contable recibe artículo y plural: un libro, due libri.') },
    {
      n: '2',
      text: T(
        'Un sustantivo de masa no recibe plural: due birre no existe; di due bottiglie di birra.',
      ),
    },
    {
      n: '3',
      text: T(
        'Las sustancias son casi todas femeninas; las masculinas son pane, latte, vino, riso, sale, burro, miele, olio.',
      ),
    },
    {
      n: '4',
      text: T(
        'El plural de la masa solo existe con medida: due metri d’acqua, tre chili di farina.',
      ),
    },
    {
      n: '5',
      text: T('Mezzo más sustantivo da medio: mezzo litro, mezzo pane, mezzo chilogrammo.'),
    },
  ],
  notes: [
    {
      label: T('La palabra que cambia de categoría'),
      text: T(
        '«Due caffè» es correcto: ahí el italiano pasa a contar la taza, no el líquido. Con la sustancia cruda el término es {due tazze di caffè}. Lo mismo vale para {un bicchiere di vino} frente a {un vino}.',
      ),
    },
    {
      label: T('Con artículo o sin artículo'),
      text: T(
        '{La birra} nombra una cerveza concreta, la que está a la vista; {birra} nombra la sustancia. {Solo pane} es la expresión bíblica, y es {solo} el que sujeta el sustantivo: sin él el italiano diría {il solo pane}, que ya es otra cosa.',
      ),
    },
  ],
  examples: [
    { text: 'Due bottiglie di birra.', gloss: T('Dos botellas de cerveza.') },
    { text: 'La pasta è buona.', gloss: T('La pasta está buena.') },
    { text: 'Tre fette di carne.', gloss: T('Tres rebanadas de carne.') },
    { text: 'Due chili di farina.', gloss: T('Dos kilos de harina.') },
    { text: 'Mezzo litro d’acqua.', gloss: T('Medio litro de agua.') },
    { text: 'Un cucchiaino di miele.', gloss: T('Una cucharada de miel.') },
    { text: 'Il pane e il vino.', gloss: T('El pan y el vino.') },
    { text: 'Due caffè, per favore.', gloss: T('Dos cafés, por favor.') },
    { text: 'Non di solo pane vivrà l’uomo.', gloss: T('No vivirá solo de pan.') },
  ],
  tables: [
    {
      caption: T('Contable e incontables'),
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
      caption: T('Masas masculinas que exigen memoria'),
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
      caption: T('Medidas que cuentan'),
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
