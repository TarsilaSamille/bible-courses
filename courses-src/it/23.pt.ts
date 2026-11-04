import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  title: T('Onde o advérbio fica'),
  subtitle: T('parla lentamente; domani arrivo'),
  section: T('O advérbio'),
  body: C(`## O advérbio vai depois do verbo

O advérbio de modo e de quantidade se cola ao verbo conjugado e vem antes do objeto: «Maria parla *lentamente*», «gli studenti studiano *bene*», «Dio parla *fortemente*». A regra é tão estável que inverter a posição soa errado mesmo quando a frase continua compreensível: *lentamente parla Maria* é poeticamente possível, mas ninguém fala assim.

Dois casos ficam fora desse lugar. O advérbio que **quantifica** um adjetivo vai antes dele, como em «parla *molto* bene» e «è *troppo* bello». E o advérbio que modifica o verbo inteiro, não a ação, também pode subir para o começo da frase, desde que seja conectivo: «*Quindi*, partiremo domani».

## Tempo definido e lugar podem vir antes

A exceção são os advérbios de **tempo definido** e de **lugar**, que não têm posição fixa: podem ir antes ou depois, e o italiano prefere a frente quando o tempo ou o lugar é o foco da frase. «*Domani* arrivo» e «Arrivo *domani*» são ambos corretos. O mesmo vale para «*Oggi* è nato», «*Qui* vivo», «*Là* andiamo», «*Sopra tutto*, è importante».

O contraste é o mais fino de todos. *Oggi* como tempo determinado abre a frase: «*Oggi* è il primo giorno». *Oggi* como tempo indeterminado, o dia qualquer deste período, prefere o fim: «si vive bene *oggi*».

## Com o pronome grudado no verbo, o advérbio vai por último

O italiano tem pronomes que se colam ao verbo: {lo}, {la}, {li}, {le}, {ci}, {vi}, {mi}, {ti}, {ne}. Depois que o pronome entrou na frase, o advérbio não pode atravessá-lo. A ordem é verbo, pronome, advérbio: **Parlane bene.** *Lo so già.* *Ci andiamo domani.* *Ne ho parlato molto.* Com o imperativo afirmativo o bloco inteiro se junta: *Dammelo subito.*

O oposto também existe e é uma escolha de realce, não de regra: «Parlane *davvero*» põe o advérbio no meio, e soa mais enfático. A posição neutra continua sendo a de depois.

## Na Bíblia

Gv 7:38 põe o advérbio antes do verbo e, de quebra, deixa o verbo vir antes do sujeito: «Chi crede in me, {come dice la Scrittura}, dal suo ventre scorreranno fiumi d’acqua viva». O {come} é advérbio de comparação e precede {dice}; {scorreranno} é uma terceira plural que não tem sujeito à vista, porque o sujeito está em {chi crede in me}. Um leitor habituado à ordem direta para e lê a frase duas vezes.

O paralelo grego usa uma partícula só, {ὡς}, que é ao mesmo tempo «como» e a marca da subordinada; o italiano teve de pedir um advérbio e um verbo.

## O que ler

Marque o advérbio num texto e pergunte o que ele modifica: se modifica o verbo, ele vem depois; se modifica o adjetivo, vem antes; se tem pronome grudado no verbo, vem depois do pronome. Fora desses três casos a posição é livre.`),
  vocab: [
    V('lentamente', 'lentamente', 'devagar'),
    V('bene', 'bene', 'bem'),
    V('molto', 'molto', 'muito'),
    V('domani', 'domani', 'amanhã'),
    V('oggi', 'oggi', 'hoje'),
    V('ieri', 'ieri', 'ontem'),
    V('sempre', 'sempre', 'sempre'),
    V('già', 'già', 'já'),
    V('adesso', 'adesso', 'agora'),
    V('quindi', 'quindi', 'portanto'),
    V('perciò', 'perciò', 'por isso'),
    V('tuttavia', 'tuttavia', 'contudo'),
    V('allora', 'allora', 'então'),
    V('veramente', 'veramente', 'realmente'),
    V('qui', 'qui', 'aqui'),
    V('là', 'là', 'lá'),
    V('parlare', 'parlare', 'falar'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase põe o advérbio no lugar neutro?'),
    options: [
      T('Lentamente parla Maria.'),
      T('Maria parla lentamente.'),
      T('Maria lentamente parla.'),
      T('Parlava Maria lentamente.'),
    ],
    answer: 1,
    hint: T('O advérbio de modo vem depois do verbo conjugado.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Em «Parlane bene», onde está o advérbio?'),
      options: [
        T('Antes do pronome ne'),
        T('Depois do pronome ne'),
        T('No início da frase'),
        T('Substituindo o verbo'),
      ],
      answer: 1,
      hint: T('Verbo, pronome, advérbio.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual advérbio pode abrir a frase?'),
      options: [T('Quindi'), T('Molto'), T('Subito'), T('Senza')],
      answer: 0,
      hint: T('É conectivo e modifica a frase inteira.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete: ___ arrivo (amanhã)'),
      answer: 'Domani',
      hint: T('Tempo definido pode preceder o verbo.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O advérbio de modo e de quantidade vem depois do verbo conjugado e antes do objeto.',
      ),
    },
    { n: '2', text: T('Advérbio de tempo definido e de lugar pode vir antes ou depois do verbo.') },
    {
      n: '3',
      text: T(
        'Com pronome grudado no verbo a ordem é verbo, pronome, advérbio: parla ne bene, lo so già.',
      ),
    },
    {
      n: '4',
      text: T(
        'O advérbio que quantifica um adjetivo vem antes dele: parla molto bene, è troppo bello.',
      ),
    },
    { n: '5', text: T('Conectores como quindi, perciò e tuttavia podem abrir a frase.') },
  ],
  notes: [
    {
      label: T('O clítico como dono da fila'),
      text: T(
        'Em {Parlane bene}, {ne} é objeto e {bene} é advérbio. O português deixaria o advérbio passar mais livre; em italiano ele espera o pronome, porque o pronome se colou ao verbo e formou com ele um bloco só.',
      ),
    },
    {
      label: T('O mesmo advérbio, duas posições'),
      text: T(
        '{Oggi} como tempo determinado abre a frase («oggi è il primo giorno»); como tempo indeterminado, o dia qualquer deste período, vai para o fim («si vive bene oggi»). A posição é o que diz qual dos dois você quis dizer.',
      ),
    },
  ],
  examples: [
    { text: 'Maria parla lentamente.', gloss: T('Maria fala devagar.') },
    { text: 'Parla molto bene.', gloss: T('Fala muito bem.') },
    { text: 'Domani arrivo a Roma.', gloss: T('Amanhã chego a Roma.') },
    { text: 'Oggi è nato un bambino.', gloss: T('Hoje nasceu uma criança.') },
    { text: 'Qui vivo da molti anni.', gloss: T('Vivo aqui há muitos anos.') },
    { text: 'Lo so già.', gloss: T('Já sei.') },
    { text: 'Ci andiamo domani.', gloss: T('Vamos lá amanhã.') },
    { text: 'Quindi, partiremo.', gloss: T('Portanto, partiremos.') },
    { text: 'Ne ho parlato molto.', gloss: T('Faltei muito sobre isso.') },
  ],
  tables: [
    {
      caption: T('Posição do advérbio'),
      head: ['Tipo', 'Dove va', 'Esempio'],
      rows: [
        ['modo', 'dopo il verbo', 'parla lentamente'],
        ['quantità', 'dopo il verbo', 'studio molto'],
        ['grado sull’aggettivo', 'prima dell’aggettivo', 'molto bello'],
        ['tempo determinato', 'prima o dopo', 'domani arrivo'],
        ['luogo', 'prima o dopo', 'qui vivo'],
        ['conettivo', 'inizio della frase', 'Quindi, partiremo'],
      ],
    },
    {
      caption: T('Verbo, pronome, advérbio'),
      head: ['Ordine', 'Frase'],
      rows: [
        ['verbo + pronome', 'Parlane.'],
        ['verbo + pronome + avverbio', 'Parlane bene.'],
        ['verbo + pronome + avverbio', 'Lo so già.'],
        ['verbo + pronome + avverbio', 'Ci andiamo domani.'],
        ['verbo + avverbio + pronome', 'Parlane davvero.'],
      ],
    },
  ],
};
