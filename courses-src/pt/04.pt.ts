import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('Passado: perfeito e imperfeito'),
  subtitle: T('falou × falava: evento e cenário'),
  section: T('O verbo: forma e tempo'),
  body: C(`## Fato e cena: as duas luzes do passado

O português fala do passado com dois verbos que têm ofícios diferentes. O **perfeito** apresenta o passado como evento delimitado: {falou}, {partiu}, {houve}, {chegou}. O **imperfeto** apresenta cena, hábito ou estado em curso: {falava}, {partia}, {havia}, {morava}. Quando os dois aparecem na mesma frase, o texto ganha narrativa: {enquanto ele falava, o anjo entrou}.

A imagem que funciona: o imperfeito é o cenário, e o perfeito é o que acontece nele. {Chovia quando saímos} tem o mesmo desenho de {enquanto pregava, veio o anjo} — circunstância no imperfeito, fato no perfeito.

E é preciso dizer isto com cuidado: essa distinção não é a mesma do grego. O grego antigo tem aoristo ({εἶπε}, fala uma vez) e imperfeito ({ἐλάλου}, falava), e o português bíblico buscou o aoristo pelo perfeito. Mas o grego antigo também usava o imperfeito para ação habitual e o aoristo para ação repetida, sem que a tradução tenha sempre distinguido. Ler a tradução como se fosse correspondência mecânica perde a nuance do grego.

## O mais-que-perfeito: o passado que já passou

O **mais-que-perfeito** ({tinha dito}, {havia chegado}) marca a ação passada como anterior a outra ação pasada. Ele só existe quando há dois passados, e é o que permite dizer {quando ele chegou, eu já tinha saído} sem ambiguidade.

É um tempo mais formal, comum em textos históricos e narrativos longos, e raro na fala. Em tradução bíblica ele aparece quando o grego tinha pluscuamperfecto ({ἐτύγχανε} = «tinha se encontrado»), e a tradução por {tinha encontrado} costuma ser melhor do que por {encontrou}.

## João 1:1: era, e nada mais

Em João 1:1, {era} ({ἦν}) é imperfeto no grego, e o imperfeito descreve existência contínua. A frase contrasta dois tempos de propósito: o Verbo era com Deus, e tudo o que existe foi criado depois, no tempo que começa em Gênesis 1:1. O verbo grego da criação é {ἐγένετο} ({foi}, perfeito), e é por isso que o contraste é {era} contra {foi}.

Traduzir os dois por {era} apaga o contraste; traduzir {ἦν} por {existia} e {ἐγένετο} por {foi} mostra o que o grego está fazendo. A tradução Almeida, ao usar {era} para {ἦν} e {foi} para {ἐγένετο}, acerta — mas a leitura que permite concluir que todo imperfeito grego significa "eterno" está errada, porque o grego usava o imperfeito também para o que é simplesmente contínuo.

## O que ler

Em qualquer frase com passado, pergunte: o verbo é delimitado (perfeito) ou em curso (imperfeto)? E há mais-que-perfeito, que é o passado do passado? E o grego original está no aoristo, no imperfeito ou no perfeito — três coisas que o português traduze às vezes com a mesma palavra? A resposta é a diferença entre ler o texto e traduzir o texto.`),
  vocab: [
    V('falou', 'falar', 'ele falou (perfeito)'),
    V('falava', 'falar', 'ele falava (imperfeito)'),
    V('era', 'ser', 'ele era'),
    V('foi', 'ser', 'ele foi'),
    V('disse', 'dizer', 'ele disse'),
    V('havia', 'haver', 'havia'),
    V('tinha', 'ter', 'tinha'),
    V('haviam', 'haver', 'haviam'),
    V('partiu', 'partir', 'ele partiu (perfeito)'),
    V('partia', 'partir', 'ele partia (imperfeito)'),
    V('houve', 'haver', 'houve (perfeito)'),
    V('Verbo', 'Verbo', 'o Verbo (Logos)'),
    V('Jesus', 'Jesus', 'Jesus'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em “Jesus falava com eles”, o verbo está no:'),
    options: [T('imperfeito'), T('perfeito'), T('futuro'), T('infinitivo')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: “No princípio, ___ o Verbo”.'),
      answer: 'era',
      hint: T('Forma de ser no imperfeito.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase apresenta um evento pontual?'),
      options: [
        T('A multidão gritava.'),
        T('Jesus disse: “Vim”.'),
        T('O amor permanecia.'),
        T('Nós esperávamos.'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Ligue a forma ao valor.'),
      pairs: [
        { a: T('disse'), b: T('evento') },
        { a: T('discutia'), b: T('cena em curso') },
        { a: T('tinha dito'), b: T('passado anterior') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Perfeito é passado como evento delimitado: {falou}, {partiu}, {houve}. Imperfeito é cena, hábito ou estado em curso: {falava}, {partia}, {havia}. Na mesma frase, o imperfeito é o cenário e o perfeito é o que acontece nele.',
      ),
    },
    {
      n: '§2',
      text: T(
        'O mais-que-perfeito ({tinha dito}, {havia chegado}) só existe com dois passados, e é o que diz que um deles é anterior ao outro: {quando ele chegou, eu já tinha saído}.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{ἦν} ({era}) é imperfeito e {ἐγένετο} ({foi}) é aoristo: o versículo contrasta o que não começou com o que começou, e traduzir os dois por {era} apaga o contraste com Gênesis 1.1.',
      ),
    },
    {
      n: '§4',
      text: T(
        'O grego antigo usava o imperfeito também para o simples contínuo, e o aoristo para ação repetida. Dizer que todo imperfeito grego significa “eterno” resolve João 1:1 e quebra Jo 3:16, onde {creram} é imperfeito de hábito.',
      ),
    },
    {
      n: '§5',
      text: T(
        '{enquanto ele falava, o anjo entrou} tem os dois tempos na mesma frase: {falava} é circunstância ({ἐλάλου}) e {entrou} é evento ({εἶσελθεν}). É esse par que faz a frase ter narrativa.',
      ),
    },
  ],
  notes: [
    {
      label: T('Tradução bíblica'),
      text: T(
        '{Era} em João 1:1 preserva o contraste grego entre o tempo do Logos e a criação, mas não prova sozinho um tempo verbal português: {era} em português também cobre o passado habitual.',
      ),
    },
    {
      label: T('Quando o grego ajuda'),
      text: T(
        'Onde o grego tinha pluscuamperfecto ({ἐτύγχανε}, «tinha encontrado»), {tinha encontrado} é melhor que {encontrou}: só o português guarda o {tinha} que diz que o encontro veio antes.',
      ),
    },
  ],
  examples: [
    { text: 'No princípio era o Verbo.', gloss: T('{ἦν}: existência contínua, tempo do Logos.') },
    {
      text: 'E todas as coisas foram feitas por ele.',
      gloss: T('{ἐγένετο}: aoristo, o que começou.'),
    },
    {
      text: 'Deus disse: “Haja luz”; e houve luz.',
      gloss: T('Dois perfeitos pontuais em sequência.'),
    },
    {
      text: 'Enquanto ele falava, o anjo entrou.',
      gloss: T('Imperfeito de cenário e perfeito de evento.'),
    },
    { text: 'Muitos creram naquilo.', gloss: T('{creram} é imperfeito de hábito, não de evento.') },
    {
      text: 'Jesus falava com eles.',
      gloss: T('Imperfeito descrevendo o que costumeiramente acontecia.'),
    },
    {
      text: 'Quando ele chegou, eu já tinha saído.',
      gloss: T('Dois passados: o mais-que-perfeito marca o anterior.'),
    },
    { text: 'A multidão gritava.', gloss: T('Cena em curso, com efeito de duração.') },
    {
      text: 'A lei foi dada por Moisés.',
      gloss: T('Perfeito: evento com agente expresso por {por}.'),
    },
  ],
  tables: [
    {
      caption: T('Os três tempos do passado'),
      head: ['Tempo', 'Forma', 'Exemplo'],
      rows: [
        ['perfeito', 'falou', 'Deus falou'],
        ['imperfeito', 'falava', 'Jesus falava'],
        ['mais-que-perfeito', 'tinha falado', 'eu já tinha saído'],
      ],
    },
    {
      caption: T('Perfeito e imperfeito no mesmo grego'),
      head: ['Grego', 'Tempo', 'Português'],
      rows: [
        ['ἦν', 'imperfecto', 'era'],
        ['ἐγένετο', 'aoristo', 'foi'],
        ['ἐλάλου', 'imperfecto', 'falava'],
      ],
    },
    {
      caption: T('A mesma frase com os dois tempos'),
      head: ['Tempo', 'Trecho', 'O que faz'],
      rows: [
        ['imperfeito', 'enquanto ele falava', 'circunstância'],
        ['perfeito', 'o anjo entrou', 'evento'],
      ],
    },
  ],
};
