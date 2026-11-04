import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  title: T('Contável e não contável'),
  subtitle: T('la birra, il pane, un metro di corda'),
  section: T('O artigo e os pronomes'),
  body: C(`## O que se conta e o que não se conta

Um substantivo **contável** aceita número: {un libro}, {due libri}, {i libri}. Um substantivo de massa não aceita: não existe *due birre*, nem *tre paesi* no sentido de três tipos de pão. Em italiano a massa não tem plural, e a tentativa de pluralizá-la soa errado na mesma medida em que soa errado dizer «duas pizzas» para dizer duas fatias.

A consequência prática é que, quando o número importa, ele aparece em **outra palavra**. Não {due birre}, e sim {due bottiglie di birra}. Não {tre carni}, e sim {tre fette di carne}. A substância fica no singular e a unidade que a contém faz as contas.

## A massa é quase toda feminina

O padrão é nítido: as substâncias é que são feminina. {La birra}, {l’acqua}, {la pasta}, {la carne}, {la farina}, {la zucchera}, {l’aria}, {la minestra}, {la insalata}. O português também usa artigo feminino na maioria, mas em italiano a coincidência é quase total, e é por isso que {la birra} soa natural para quem só conhece português.

As masculinas existem, e são um grupo fechado de comida e de substância: {il pane}, {il latte}, {il vino}, {il riso}, {il sale}, {il burro}, {il miele}, {l’olio}. São oito, precisam ser decoradas, e nenhuma regra as separa das outras.

## A medida que vira substantivo

Quando a massa precisa de número, ela recebe uma medida, e a medida flexiona normalmente: {un metro} di corda, {due chili} di farina, {tre litri} di latte, {una tazza} di caffè, {un cucchiaino} di miele. Repare que a medida é um substantivo comum, com artigo e com plural próprios; é ela que faz a contagem.

Quando o número é uma unidade, o italiano prefere o plural: {due chili} e não {due chilo}. E há ainda {mezzo}, que dá meio: {mezzo litro} d’acqua, {mezzo pane}, {mezzo chilogrammo}. Com numeral, {mezzo} vira {mezzo litro} e {un litro e mezzo}.

## Na Bíblia

Mt 4:4 tem os dois casos lado a lado: «Non di solo pane vivrà l’uomo, ma di ogni parola che esce dalla bocca di Dio». {Pane} é masculino, de massa, sem artigo e sem plural: {solo pane} é “só pão”, e é por isso que a expressão soa como idiomática em italiano. {Ogni parola}, ao lado, é contável, no singular, e {ogni} funciona como se fosse o artigo.

Lucas 3 expõe a mesma ambiguidade no grego: em Mt 4:4 aparece {ἄρτου}, a massa pura, e em Lc 15:24 {anthrakes}, brasas contadas uma a uma. O italiano diz {pane} nos dois casos, e o advérbio {solo}, que em grego carregava sozinho a força do original, é a única coisa que fica.

## O que ler

Ao ver uma substância no plural, desconfie: quase sempre é {di} mais um substantivo contável. E quando o substantivo de massa vem com artigo ({la birra}) e quando vem sem ({solo pane}), a diferença é de Roxão, não de estilo.`),
  vocab: [
    V('birra', 'birra', 'cerveja'),
    V('acqua', 'acqua', 'água'),
    V('pasta', 'pasta', 'massa'),
    V('carne', 'carne', 'carne'),
    V('farina', 'farina', 'farina'),
    V('zucchera', 'zucchero', 'açúcar'),
    V('pane', 'pane', 'pão'),
    V('latte', 'latte', 'leite'),
    V('vino', 'vino', 'vinho'),
    V('riso', 'riso', 'arroz'),
    V('sale', 'sale', 'sal'),
    V('miele', 'miele', 'mel'),
    V('metro', 'metro', 'metro'),
    V('litro', 'litro', 'litro'),
    V('chilo', 'chilo', 'quilo'),
    V('tazza', 'tazza', 'xícara'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se diz «duas cervejas» em italiano?'),
    options: [T('due birre'), T('due bottiglie di birra'), T('due birra'), T('due di birre')],
    answer: 1,
    hint: T('A massa não tem plural: quem conta é a garrafa.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual destes substantivos de massa é feminino?'),
      options: [T('il pane'), T('la carne'), T('il latte'), T('il riso')],
      answer: 1,
      hint: T('A maioria é feminina; o pão, o leite, o arroz e o vinho são a exceção.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete: due ___ di farina (quilos)'),
      answer: 'chili',
      hint: T('A medida é o que conta.'),
    },
    {
      kind: 'fill',
      prompt: T('Plural de il libro, para contrastar com il pane: i ___'),
      answer: 'libri',
      hint: T('Contável: -o vira -i.'),
    },
  ],
  rules: [
    { n: '1', text: T('Substantivo contável recebe artigo e plural: un libro, due libri.') },
    {
      n: '2',
      text: T(
        'Substantivo de massa não recebe plural: due birre não existe; diga due bottiglie di birra.',
      ),
    },
    {
      n: '3',
      text: T(
        'As substâncias são quase todas femininas; as masculinas são pane, latte, vino, riso, sale, burro, miele, olio.',
      ),
    },
    {
      n: '4',
      text: T('O plural da massa só existe com medida: due metri d’acqua, tre chili di farina.'),
    },
    {
      n: '5',
      text: T('Mezzo mais substantivo dá meio: mezzo litro, mezzo pane, mezzo chilogrammo.'),
    },
  ],
  notes: [
    {
      label: T('A palavra que troca de categoria'),
      text: T(
        '«Due caffè» é correto: ali o italiano passa a contar a xícara, não o líquido. Com a substância crua o termo é {due tazze di caffè}. O mesmo vale para {un bicchiere di vino} contra {un vino}.',
      ),
    },
    {
      label: T('Com artigo ou sem artigo'),
      text: T(
        '{la birra} nomeia uma cerveja específica, a que está à vista; {birra} nomeia a substância. {Solo pane} é a expressão bíblica, e o {solo} é que segura o substantivo: sem ele o italiano diria {il solo pane}, que já é outra coisa.',
      ),
    },
  ],
  examples: [
    { text: 'Due bottiglie di birra.', gloss: T('Duas garrafas de cerveja.') },
    { text: 'La pasta è buona.', gloss: T('A massa é boa.') },
    { text: 'Tre fette di carne.', gloss: T('Três fatias de carne.') },
    { text: 'Due chili di farina.', gloss: T('Dois quilos de farinha.') },
    { text: 'Mezzo litro d’acqua.', gloss: T('Meio litro de água.') },
    { text: 'Un cucchiaino di miele.', gloss: T('Uma colher de mel.') },
    { text: 'Il pane e il vino.', gloss: T('O pão e o vinho.') },
    { text: 'Due caffè, per favore.', gloss: T('Dois cafés, por favor.') },
    { text: 'Non di solo pane vivrà l’uomo.', gloss: T('Não viverá só de pão.') },
  ],
  tables: [
    {
      caption: T('Contável e não contável'),
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
      caption: T('Massas masculinas que exigem memória'),
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
      caption: T('Medidas que contam'),
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
