import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  title: T('O Präteritum'),
  subtitle: T('o passado narrativo, os fortes com {Ablaut} e o {würde}'),
  section: T('Os verbos'),
  body: C(`## A forma

O Präteritum forma-se sem auxiliar: um único verbo conjugado, o próprio verbo principal, ocupado na segunda posição e seguido do complemento direto. *Ich kaufte ein Brot*, *Wir gingen nach Hause*, *Die Alten kamen zuerst*. Tudo o mais fica na ordem normal, e a oração não tem nada no fim que a feche.

Os verbos fracos acrescentam **-te** ao radical do presente: *sagen – sagte*, *kaufen – kaufte*, *fragen – fragte*, *warten – wartete*. A terminação acompanha a pessoa, mas a vogal do radical é a mesma: *ich kaufte, du kauftest, er kaufte, wir kauften*. É essa regularidade que fez do *-te* a terminação mais comum da língua, e mais tarde a mais rara.

Os verbos fortes, por outro lado, repetem no passado a alternância vocálica que já conhecemos: *sprechen – sprach*, *nehmen – nahm*, *essen – aß*, *trinken – trank*, *gehen – ging*, *sehen – sah*, *lesen – las*. O particípio fica à parte, com terminação *-en*: *gesprochen*, *genommen*, *gegangen*. Nenhum *-te*, nenhum auxiliar.



## Quando usar o Präteritum

O Perfekt é o tempo da fala sobre algo que acaba de acontecer; o Präteritum é o tempo da **narrativa**. Numa receita de cozinha, no relato de uma viagem, num resumo de um livro, tudo em Präteritum. E é por isso que *ich ging* e *ich bin gegangen* não são sinónimos: o primeiro conta, o segundo informa.

Ao lado do Präteritum vem uma forma que parece sua e não é: o **Konjunktiv II** com *würde*. *Ich würde kommen* é uma hipótese sobre o futuro, não uma narração. A diferença está na atitude: o Präteritum afirma, *würde* supõe. *Wenn ich Zeit hätte, würde ich kommen* — se eu tivesse tempo, viria.

## Leitura

A Bíblia de Lutero é, em boa parte, um livro de Präteritum. As narrativas do Evangelho de Marcos correm quase todas em *war, ging, kam, sprach, sah*, e essa uniformidade é justamente o que torna a leitura em voz alta tão cadenciada. *Es begab sich aber zu der Zeit, daß Jesus ging und seinen Jüngern Befahl gab* (Marcos 3:13). Repare que *Befahl gab* é verbo posicional, não *hat Befehl gegeben*: o narrador está dentro da cena, não a comentando.

## O essencial

O Präteritum é uma só palavra no lugar de duas. Quem escreve em Präteritum recua da cena e olha para ela de fora; quem escreve em Perfekt sai da cena e fala com alguém.`),
  vocab: [
    V('sagte', 'sagen', 'disse (Präteritum fraco em -te)'),
    V('kaufte', 'kaufen', 'comprou (Präteritum fraco)'),
    V('sprach', 'sprechen', 'falou (Präteritum forte)'),
    V('ging', 'gehen', 'foi, andou (Präteritum forte)'),
    V('sah', 'sehen', 'viu (Präteritum forte)'),
    V('war', 'sein', 'era (Präteritum de sein)'),
    V('wußte', 'wissen', 'sabia (forte sem -te)'),
    V('hätte', 'haben', 'teria (Konjunktiv II)'),
    V('würde kommen', 'werden', 'viria (Konjunktiv II)'),
    V('Befahl gab', 'geben', 'deu a ordem (verbo posicional)'),
    V('Ich kaufte ein Brot.', 'kaufen', 'Comprei um pão.'),
    V('Die Alten kamen zuerst.', 'kommen', 'Os velhos chegaram primeiro.'),
    V('Wir sind nach Hause gegangen.', 'gehen', 'Fomos para casa (Perfekt, não Präteritum).'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é o Präteritum correto de {sagen} na 1.ª pessoa?'),
    options: [T('sagte'), T('sagteest'), T('gesagt'), T('sagt')],
    answer: 0,
    hint: T('Regra §2: fraco = radical do presente + -te.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Präteritum de {gehen} na 3.ª pessoa: er ___'),
      answer: 'ging',
      hint: T('Forte: e → i, o -en final cai.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase está no passado narrativo?'),
      options: [
        T('Der Zug fuhr um neun Uhr ab.'),
        T('Der Zug ist um neun Uhr abgefahren.'),
        T('Der Zug wird um neun Uhr abfahren.'),
        T('Der Zug fährt um neun Uhr ab.'),
      ],
      answer: 0,
      hint: T('Tabela 2: narrativa escrita pede Präteritum.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete a hipótese: Wenn ich Zeit ___, würde ich kommen.'),
      answer: 'hätte',
      hint: T('É o Konjunktiv II de haben: hätte.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo ao seu Präteritum'),
      pairs: [
        { a: T('nehmen'), b: T('nahm') },
        { a: T('fragen'), b: T('fragte') },
        { a: T('trinken'), b: T('trank') },
        { a: T('warten'), b: T('wartete') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O Präteritum não tem auxiliar: o verbo principal vai conjugado na segunda posição e nada fecha a oração. Ich kaufte ein Brot.',
      ),
    },
    {
      n: '2',
      text: T(
        'Os fracos acrescentam -te ao radical: kaufte, fragte, wartete. A terminação muda, a vogal do radical não.',
      ),
    },
    {
      n: '3',
      text: T(
        'Os fortes trocam a vogal e nada mais: sprach, nahm, aß, trank, ging, sah, las. Procure -te em um forte: está errado.',
      ),
    },
    {
      n: '4',
      text: T(
        'Präteritum afirma; würde e Konjunktiv II supõem. Ich kam é facto, ich würde kommen é hipótese.',
      ),
    },
    {
      n: '5',
      text: T(
        'A primeira pessoa do singular quase não aparece em Präteritum, salvo em.want e com valor de optativo: ich dachte, ich wünschte, ich wüsste gern.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que a fala quase perdeu o Präteritum'),
      text: T(
        'Nas línguas germânicas antigas o Präteritum era o tempo normal, e o que hoje chamamos Perfekt era um tempo raro, usado sobretudo com verbos de movimento. As línguas românicas fizeram o contrário: no português e no espanhol, o pretérito perfeito assume o papel narrativo e o Präteritum fica como resto literary. O alemão seguiu caminho próprio: manteve o Präteritum na escrita e o Perfekt na fala. O sistema é claro: na escrita há um tempo para narrar, na fala um só tempo para relatar. E a diferença entre *ich sagte* e *ich habe gesagt* é hoje a diferença entre quem relata e quem informa.',
      ),
    },
    {
      label: T('O Evangelho de Marcos em Lutero'),
      text: T(
        'A Tradução de Lutero reescreveu o texto grego de Marcos com uma economia de orações curtas e verbos fortes: quase não há *hatte gekonnt* nem *würde*, apenas *war, trat, rief, legte, sprach*. A cadência resultante é a razão de as narrativas de Marcos serem as mais difíceis de se ler em voz alta nos templos luteranos. O mesmo se nota nas bem-aventuranças de Mateus, onde o evangelista escreve no mesmo estilo: *Selig sind die Armen im Geist*, e a tradução de Lutero mantém a brevidade do original.',
      ),
    },
  ],
  examples: [
    { text: 'Ich kaufte ein Brot.', gloss: T('Comprei um pão (fraco em -te).') },
    { text: 'Die Alten kamen zuerst.', gloss: T('Os velhos chegaram primeiro (forte sem -te).') },
    { text: 'Ich sah ihn am Fluss.', gloss: T('Vi-o à beira do rio (forte: sah).') },
    {
      text: 'Es war ein Mensch, der von Gott gesandt ist.',
      gloss: T('Havia um homem, que foi enviado por Deus (João 1:6).'),
    },
    {
      text: 'Jesus ging und seinen Jüngern Befahl gab.',
      gloss: T('Jesus foi e deu ordem aos seus discípulos (Marcos 3:13).'),
    },
    {
      text: 'Wenn ich Zeit hätte, würde ich kommen.',
      gloss: T('Se eu tivesse tempo, viria (Konjunktiv II).'),
    },
    {
      text: 'Er ist nach Hause gegangen.',
      gloss: T('Ele foi para casa (Perfekt, não Präteritum).'),
    },
    {
      text: 'Ich wüsste gern, wie es weitergeht.',
      gloss: T('Eu gostaria de saber como vai ser (1.ª pessoa com valor de optativo).'),
    },
    {
      text: 'Die Bahn hat sich um zwei Stunden verspätet.',
      gloss: T('O comboio atrasou-se duas horas (evento recente: Perfekt).'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Präteritum de um fraco e de um forte'),
      head: [T('Pessoa'), T('sagen (fraco)'), T('sprechen (forte)')],
      rows: [
        ['ich', 'sagte', 'sprach'],
        ['du', 'sagtest', 'sprachst'],
        ['er / sie / es', 'sagte', 'sprach'],
        ['wir', 'sagten', 'sprachen'],
        ['ihr', 'sagtet', 'sprecht'],
        ['sie / Sie', 'sagten', 'sprachen'],
      ],
    },
    {
      caption: T('Tabela 2 — {Präteritum} ou {Perfekt}?'),
      head: [T('Contexto'), T('Tempo'), T('Exemplo')],
      rows: [
        ['narrativa escrita', 'Präteritum', 'Er ging nach Hause und schlief.'],
        ['relato oral', 'Perfekt', 'Er ist nach Hause gegangen und hat geschlafen.'],
        ['notícia de algo recente', 'Perfekt', 'Die Bahn hat sich verspätet.'],
        ['receita, instrução', 'Präteritum', 'Man nahm zwei Eier und rührte den Teig.'],
        ['condição irreal', 'Konjunktiv II', 'Wenn ich Zeit hätte, würde ich kommen.'],
        ['estado permanente', 'Präsens', 'Ich wohne seit zehn Jahren in Berlin.'],
      ],
    },
  ],
};
