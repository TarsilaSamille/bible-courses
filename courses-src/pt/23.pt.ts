import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  section: T('O verbo: forma e tempo'),
  title: T('O verbo: o aspecto verbal'),
  subtitle: T('falou, falava, tinha falado, e o que a flexão faz'),
  body: C(`## O perfeito e o imperfeito

Os dois passados do português não se distinguem por tempo, e sim por aspecto. O **perfeito** apresenta a ação como inteira e concluída: {falou}, {escreveu}, {chegou}. O **imperfeito** apresenta a ação como happening, como processo em curso ou como costume: {falava}, {escrevia}, {chegava sempre cedo}.

A diferença aparece melhor num exemplo com os dois verbos: {Ele saiu quando eu chegava}. O {chegou} é perfeito porque a chegada está inteira; o {chegava} é imperfeito porque o texto quer dizer que eu já estava a caminho e a chegada ainda não tinha terminado. O aspecto do português não responde a pergunta, responde a pergunta quanto.

## O aspecto composto

O português também tem aspecto composto, e ele vem do latim. O **mais-que-perfeito** é {tinha falado} ou {havia falado}: os dois significam a mesma coisa, e o segundo é a forma mais literária e mais próxima do original latino. Ele aparece em narrativas e é a forma que o português usa para dizer que a ação já tinha terminado antes de outra começar.

Há ainda um futuro composto com o mesmo material: {quando eu tiver falado com ele}, em que o verbo {ter} no futuro faz a perífrase. É a única maneira de dizer «ter falado» como evento futuro, e é a forma que a locução {ter de} usa por baixo.

## O imperfeito que fala do futuro

A regra que mais engana em leitura bíblica é que o **imperfeito também serve para o futuro**. No português, o futuro do passado é imperfeito: {Ele ia sair quando chegou}, {Eu ia visitá-lo}, {A chuva ia cair}.

Isso é uma relíquia do sistema português e acontece porque o verbolatin {-amābam} tinha futuro e imperfecto na mesma forma. Em português a forma {ia} serve ao mesmo tempo de futuro e de imperfeito. O que o texto diz é que a ação ia começar, mas o contexto interrompe.

Para o tradutor, a consequência é prática: uma forma de futuro no grego, uma forma de imperfeito no português. Se o grego usa o futuro para dizer o que vai acontecer, o português usa o imperfeito, e quem traduz com o futuro perde o corte.

## O que ler

Em qualquer verbo no passado, pergunte: é perfeito ou imperfeito? E se é mais-que-perfeito, a ação já tinha terminado? E o texto está falando do passado ou do futuro do passado?

O Salmo 118.6 abre com um presente: o Senhor {é} a força e o cântico de quem fala. Quem traduz do grego encontra ali um perfeito, e precisa entender que o grego daquela forma pode querer dizer {é}. É o aspecto resolvendo o tempo: o português resolve com {é}, e quem escreve {foi} trocou a certeza da frase por uma notícia.`),
  vocab: [
    V('falou', 'falar', 'falou'),
    V('falava', 'falar', 'falava'),
    V('havia falado', 'falar', 'havia falado'),
    V('tinha falado', 'falar', 'tinha falado'),
    V('chegou', 'chegar', 'chegou'),
    V('chegava', 'chegar', 'chegava'),
    V('ia sair', 'sair', 'ia sair'),
    V('escreveu', 'escrever', 'escreveu'),
    V('escrevia', 'escrever', 'escrevia'),
    V('o aspecto', 'aspecto', 'o aspecto'),
    V('o perfeito', 'perfeito', 'o perfeito'),
    V('o imperfeito', 'imperfeito', 'o imperfeito'),
    V('o mais-que-perfeito', 'mais-que-perfeito', 'o mais-que-perfeito'),
    V('o futuro', 'futuro', 'o futuro'),
    V('o verbo', 'verbo', 'o verbo'),
  ],
  rules: [
    {
      n: '§1',
      text: T('O perfeito apresenta a ação como inteira e concluída: {falou}, {chegou}.'),
    },
    {
      n: '§2',
      text: T(
        'O imperfeito apresenta a ação como processo em curso ou como costume: {falava}, {chegava sempre cedo}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'O mais-que-perfeito é {tinha falado} ou {havia falado}, e indica ação já terminada antes de outra começar.',
      ),
    },
    { n: '§4', text: T('O imperfeito também expressa futuro do passado: {ia sair}, {ia chover}.') },
    {
      n: '§5',
      text: T('O aspecto não indica tempo: indica se a ação está inteira ou em processo.'),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'O grego faz o mesmo com o aoristo e o imperfeito, e é por isso que a tradução literal conserva as duas formas sem esforço. O problema aparece quando o grego usa o perfeito com valor de presente.',
      ),
    },
    {
      label: T('Forma literária'),
      text: T(
        '{havia falado} é mais literário e mais antigo do que {tinha falado}. Nas traduções de 1611 aparece o {havia}; na linguagem de hoje quase só o {ter}.',
      ),
    },
  ],
  examples: [
    { text: 'Ele saiu quando eu chegava.', gloss: T('Perfeito e imperfeito na mesma frase.') },
    { text: 'Falou a verdade.', gloss: T('Ação inteira.') },
    { text: 'Falava toda noite.', gloss: T('Costume, com o imperfecto.') },
    { text: 'Ele tinha falado antes.', gloss: T('Mais-que-perfeito: a ação já tinha terminado.') },
    { text: 'Ele ia sair quando chegou.', gloss: T('Imperfeito com valor de futuro do passado.') },
    { text: 'A chuva ia cair.', gloss: T('O que ia acontecer e foi interrompido.') },
    { text: 'Havia falado com ele.', gloss: T('Forma mais literária do mesmo tempo.') },
    { text: 'Quando eu tiver falado, saio.', gloss: T('Futuro composto com o mesmo {ter}.') },
  ],
  tables: [
    {
      caption: T('Perfeito e imperfeito'),
      head: ['Aspecto', 'Exemplo', 'O que apresenta'],
      rows: [
        ['perfeito', 'falou', 'ação inteira e concluída'],
        ['imperfeito', 'falava', 'ação em curso'],
        ['imperfeito', 'falava toda noite', 'costume'],
        ['mais-que-perfeito', 'tinha falado', 'ação terminada antes de outra'],
      ],
    },
    {
      caption: T('O aspecto na narrativa'),
      head: ['Frase', 'Verbo', 'Aspecto'],
      rows: [
        ['Ele saiu quando eu chegava.', 'saiu', 'perfeito'],
        ['Ele saiu quando eu chegava.', 'chegava', 'imperfeito'],
        ['Ele tinha chegado antes.', 'tinha chegado', 'mais-que-perfeito'],
      ],
    },
    {
      caption: T('Os tempos do português'),
      head: ['Tempo', 'Forma', 'Exemplo'],
      rows: [
        ['presente', 'falo', 'falo agora'],
        ['perfeito', 'falei', 'falei ontem'],
        ['imperfeito', 'falava', 'falava antes'],
        ['mais-que-perfeito', 'tinha falado', 'tinha falado ontem'],
        ['futuro', 'falarei', 'falarei amanhã'],
        ['condicional', 'falaria', 'falaria se pudesse'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual verbo apresenta a ação como inteira?'),
    options: [T('chegou'), T('chegava'), T('chegaria'), T('havia chegado')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('O {ia sair} é um imperfeito com valor de ______.'),
      answer: 'futuro',
      hint: T('É o futuro do passado.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual forma é o mais-que-perfeito?'),
      options: [T('tinha falado'), T('falou'), T('falava'), T('falaria')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue o aspecto ao exemplo.'),
      pairs: [
        { a: T('perfeito'), b: T('chegou') },
        { a: T('imperfeito'), b: T('chegava') },
        { a: T('mais-que-perfeito'), b: T('tinha chegado') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
};
