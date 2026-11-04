import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('O perfeito e os seus irregulares'),
  subtitle: T('{amāvit, fēcit, dīxit} — o tempo que conta do fim para o começo'),
  section: T('Verbos, tempos e os primeiros textos'),
  body: C(`## O que o perfeito significa

Em português o perfeito serve para duas coisas: para o passado ({amei}) e para o presente ({já amei}). O latim, que tem mais tempos, separa as duas ideias:

- O **imperfeito** mostra a ação de dentro, em curso: {amābat} «amava»;
- O **perfeito** mostra a ação inteira, vista do fim: {amāvit} «amou».

A imagem é de uma linha percorrida até o fim: a partir de {amāvit} você sabe que {amāre} aconteceu. A Vulgata usa o perfeito o tempo todo para narrar fatos, e é por isso que o Gênesis em latim soa seco e vigoroso: {In principio creavit Deus caelum et terram}.

## O tema do perfeito

O perfeito tem um **termo próprio** (o supino), que nunca aparece em nenhuma outra forma. Para {amāre} o termo é {amātum}; para {facere} é {factum}; para {dīcere} é {dīctum}. O presente nunca mostra esse tema — só a 3.ª pessoa do singular e do plural, e o particípio.

As terminações do perfeito são próprias e não se confundem com as de mais nada:

| Pessoa | Terminação | {amāre} | {facere} |
|---|---|---|---|
| 1.ª sing. | -ī | amāvī | fēcī |
| 2.ª sing. | -istī | amāvistī | fēcistī |
| 3.ª sing. | -it | amāvit | fēcit |
| 1.ª pl. | -imus | amāvimus | fēcimus |
| 2.ª pl. | -istis | amāvistis | fēcistis |
| 3.ª pl. | -ērunt | amāvērunt | fēcērunt |

A 3.ª do plural é {ērunt} ou {-ēre}: a Vulgata prefere quase sempre {ērunt}, mais fácil de dizer e de escrever.

## Os verbos que fogem do padrão

Muitos verbos, muito frequentes, não formam o perfeito pelo tema do supino. São os **irregulares do perfeito**, e valem mais que o padrão:

| Infinitivo | Perfeito | Nota |
|---|---|---|
| facere | fēcī | {i} longo; o mais usado do latim |
| dīcere | dīxī | {x} no lugar de {ct} |
| scrībere | scrīpsī | {ps} no lugar de {pt} |
| legere | lēgī | {i} longo, sem {c} |
| capere | cēpī | {i} longo, sem {c} |
| dare | dedī | {d} duplicado |

g

Repare que quase todos os irregulares têm {ī} longo na 1.ª do singular — {fēcī}, {dīxī}, {lēgī}, {cēpī}, {dedī}. É o que permite reconhecê-los de longe. A única exceção é {bibī} «bebi», em que a vogal já é longa.

## O mais-plus-que-perfeito

Se o perfeito já olha para o fim, o **mais-que-perfeito** ({fuerat}) olha para um momento anterior a esse fim: «tinha sido feito» antes de outra coisa passar. Ele se forma com o **particípio perfeito** mais {erat}:

{Mundus ante omnia factus {erat}} «O mundo tinha sido criado antes de todas as coisas»;
{Quod {erat} ab initio, quod {audimus} a vobis} «o que era desde o princípio, o que ouvimos de vós» (1 João 1:1).

Repare na dupla usada em {1 João 1:1}: o latim traduz o grego περὶ οὗ ἀκηκόαμεν com {quod erat} mais o verbo {audire} no perfeito, e o resultado é uma frase que sona estranhosa em português e é impecável em latim.`),
  vocab: [
    V('amavit', 'amo', 'amou'),
    V('fecit', 'facio', 'fez'),
    V('dixit', 'dico', 'disse'),
    V('scripsit', 'scribo', 'escreveu'),
    V('legit', 'lego', 'leu; também escolheu'),
    V('vixit', 'vivo', 'viveu'),
    V('cepit', 'capio', 'tomou'),
    V('bibit', 'bibo', 'bebeu'),
    V('fuit', 'sum', 'foi (perfeito irregular de sum)'),
    V('erat', 'sum', 'era (imperfeito)'),
    V('fuerat', 'sum', 'tinha sido (mais-que-perfeito)'),
    V('factus', 'facio', 'feito (particípio de facio)'),
    V('creavit', 'creo', 'criou'),
    V('missus', 'mitto', 'enviado (particípio de mitto)'),
    V('vidit', 'video', 'viu'),
    V('audivit', 'audio', 'ouviu'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'Em {In principio creavit Deus caelum et terram}, o que o perfeito {creavit} sugere que NÃO é?',
    ),
    options: [
      T('Que a criação continua em curso agora'),
      T('Que a criação foi um evento com começo e fim definidos'),
      T('Que a criação ainda não aconteceu'),
      T('Que a criação foi feita por objetivos'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Por que {fēcī}, {dīxī}, {lēgī} e {cēpī} são fáceis de reconhecer?'),
      options: [
        T('Todos têm {i} longa na 1.ª do singular'),
        T('Todos terminam em {ct}'),
        T('Todos têm {s} no perfectum'),
        T('Todos pertencem à 2.ª conjugação'),
      ],
      answer: 0,
      hint: T('Regra §3.'),
    },
    {
      kind: 'fill',
      prompt: T('3.ª pessoa do plural do perfeito de {facere}: feci_ _'),
      answer: 'fecerunt',
      hint: T('A Vulgata prefere a terminação {-ērunt} à {-ēre}.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo ao seu tempo'),
      pairs: [
        { a: T('amābat'), b: T('imperfeito: ação em curso') },
        { a: T('amāvit'), b: T('perfeito: ação inteira') },
        { a: T('factus erat'), b: T('mais-que-perfeito passivo: «tinha sido feito»') },
        { a: T('fuit'), b: T('perfeito irregular de {sum}: «foi»') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O perfeito mostra a ação inteira vista do fim; o imperfeito, a ação vista de dentro.',
      ),
    },
    {
      n: '2',
      text: T(
        'O supino é o tema exclusivo do perfeito: só aparece na 3.ª sing./pl. e no participio.',
      ),
    },
    {
      n: '3',
      text: T(
        'Os irregulares do perfeito têm quase sempre {ī} longa na 1.ª do singular: {fēcī}, {lēgī}, {cēpī}.',
      ),
    },
    {
      n: '4',
      text: T(
        'O mais-que-perfeito é {particípio perfeito} + {erat}, nunca uma terminação própria.',
      ),
    },
    {
      n: '5',
      text: T(
        'A Vulgata prefere {-ērunt} a {-ēre} na 3.ª do plural: mais fácil de escrever e de pronunciar.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que o latim tem tantos tempos:'),
      text: T(
        'O latim não distingue tempo (quando) de aspecto (como). Ele codifica a **relação do período narrado com o ponto de vista**. Un hablante griego tropieza al traducir, y Jerónimo improvisa: a veces escribe {ērunt} por {ēre}, otras veces deja hablar al griego. O resultado é um latim mais rico e um pouco mais irregular que o grego.',
      ),
    },
    {
      label: T('Supino em Portugal:'),
      text: T(
        'O supino é vivo em português ({vi, viu, vista}) e praticamente morto em espanhol. Em latim ele é a peça central do perfeito: sem ele, {amāre} e {amātum} não teriam ligação visível, e o perfeito {amāvit} pareceria arbitrário.',
      ),
    },
  ],
  examples: [
    { text: 'amavit', gloss: T('amou (perfeito)') },
    { text: 'fecit', gloss: T('fez — {i} longa irregular') },
    { text: 'dixit', gloss: T('disse — {x} por {ct}') },
    { text: 'legit', gloss: T('leu; também «escolheu»') },
    { text: 'vixit', gloss: T('viveu') },
    { text: 'fuit', gloss: T('foi — {fuit} de {sum}') },
    { text: 'fuerat', gloss: T('tinha sido (mais-que-perfeito)') },
    { text: 'factus', gloss: T('feito — {fact-} + sufixo {-us}') },
    { text: 'creavit', gloss: T('criou — Gênesis 1:1') },
    {
      text: 'In principio creavit Deus caelum et terram',
      gloss: T('«No princípio criou Deus o céu e a terra»'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — O sistema do perfeito: indicativo, futuro e perfeito do supino'),
      head: [T('Pessoa'), T('Perfeito'), T('Fut. perf. (ou futuro antigo)'), T('Supino')],
      rows: [
        [T('1.ª sing.'), 'amāvī', 'amāverō', 'amātum'],
        [T('2.ª sing.'), 'amāvistī', 'amāveris', 'amātūrum'],
        [T('3.ª sing.'), 'amāvit', 'amāverit', '—'],
        [T('1.ª pl.'), 'amāvimus', 'amāverimus', '—'],
        [T('2.ª pl.'), 'amāvistis', 'amāveritis', '—'],
        [T('3.ª pl.'), 'amāvērunt', 'amāverint', '—'],
      ],
    },
    {
      caption: T('Tabela 2 — Verbos irregulares do perfeito'),
      head: [T('Infinitivo'), T('1.ª sing.'), T('3.ª sing.'), T('Particípio')],
      rows: [
        ['facere', 'fēcī', 'fēcit', 'factus'],
        ['dīcere', 'dīxī', 'dīxit', 'dīctus'],
        ['scrībere', 'scrīpsī', 'scrīpsit', 'scrīptus'],
        ['legere', 'lēgī', 'lēgit', 'lēctus'],
        ['capere', 'cēpī', 'cēpit', 'captus'],
        ['dare', 'dedī', 'dedit', 'datus'],
        ['bibere', 'bibī', 'bibit', 'bībitus'],
        ['vīvere', 'vīxī', 'vīxit', 'vīctus'],
      ],
    },
  ],
};
