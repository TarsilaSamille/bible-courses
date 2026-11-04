import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  section: T('Os pronomes e os numerais'),
  title: T('Numeral: o substantivo que conta'),
  subtitle: T('пять, пяти, пятью: o mesmo número em seis posições'),
  body: C(`
## O numeral russo é um substantivo

Um numeral português não se flexiona: cinco livros, cinco casas, cinco dias. O numeral russo flexiona, e flexiona como um substantivo, não como um adjetivo. Isso significa que ele tem seis formas, que essas formas têm valores de caso, e que a flexão é uma propriedade da palavra e não um acidente de frase.

A consequência é que o numeral pode ocupar posições que em português só os nomes ocupam. пяти é genitivo, e pode ser tanto de um numeral quanto de um substantivo: пяти столов são cinco mesas. пятью é instrumental, e aparece depois de um verbo: благодарю пятью. Um leitor que trate o numeral como um quantificador fixo erra a flexão antes de errar o sentido.

O paralelo que resolve é o latim. Quinque, quinque, quinque tem seis formas em latim, exatamente como o russo, e alguém que Latin leu sem dificuldade vai reconhecer o mecanismo de imediato. A diferença é que em latim a flexão é opcional na fala e obrigatória na escrita, e em russo ela é obrigatória nos dois.

## O paradigma de пять e o de два

Пять é o padrão: cinco formas para cinco posições, com a última repetida. As duas formas de instrumental são пятью, a mais comum, e пяти, que aparece quando a palavra seguinte exige outra coisa. O resto coincide.

Два é o mais irregular do grupo, e é o que se usa o tempo todo. Ele não tem forma feminina separada: две книги usa две, e a flexão é a mesma. No plural, два vira двоe quando se conta pessoas, como em двое детей.

Один é o mais adjetival de todos. Ele declina como um adjetivo, com gênero: один, одна, одно, одни, e cada um flexiona como o substantivo que ele acompanha. одного дня é genitivo, одному дню é dativo, одном дне é prepositivo. É o numeral que se parece com um adjetivo, e por isso ele é a exceção que confirma a regra.

Сто e двести são Declination de uma só forma: ста, стам, стами. O substantivo depois deles é que se flexiona, e é por isso que сто лет tem лет no genitivo plural, e não столётов.

## O que o numeral rege

Depois de dois, três e quatro, o substantivo vai ao genitivo singular: два дня, три книги, четыре часа. A partir de cinco, o substantivo vai ao genitivo plural: пять дней, двадцать книг, сто человек. A regra já apareceu com os substantivos, e aqui ela reaparece porque o numeral é o que a conta.

O que muda é a direção: com dois, três e quatro, é o substantivo que flexiona; com cinco ou mais, é o numeral que flexiona. двух дней tem o numeral no genitivo; пяти дней também. A diferença é que o primeiro tem substantivo singular e o segundo tem substantivo plural, e é isso que se vê.

E há um detalhe que só aparece na escrita: em двадцати пяти o numeral é um substantivo no genitivo, porque o que vem depois é um substantivo no plural. двадцати два concorda com a unidade. Uma mesma frase pode ter dois numerais em casos diferentes.

## O gancho: o dia que se contou

**И был вечер, и было утро: день один.** A expressão final de cada dia da criação no Gênesis tem o mesmo formato: um substantivo no genitivo plural para a parte do dia, dois verbos no passado para o que aconteceu, e um numeral adjetivo para a contagem.

Один aqui é adjetivo, não substantivo. Ele concorda com день, e dia é masculino, e por isso não há forma feminina nem neutra à vista. Mas o numeral flexiona: в первый день, на первый день, о первом дне, todas com o genitivo, o dativo e o prepositivo do adjetivo.

A contagem de Gênesis vai até o sétimo dia, e o sétimo é седьмой. Ele também flexiona como adjetivo, e é o que a liturgia usa quando fala do dia que vem: Благословен грядущий, bendito o que vem, com грядущий sendo um particípio e não um numeral. O substantivo день do versículo é o mesmo em toda a narrativa, e o que muda é o numeral que o qualifica.
`),
  vocab: [
    V('пять', 'пять', 'cinco; nominativo'),
    V('пяти', 'пять', 'de cinco; genitivo, dativo e prepositivo'),
    V('пятью', 'пять', 'cinco; instrumental'),
    V('два', 'два', 'dois'),
    V('двух', 'два', 'de dois; genitivo'),
    V('двум', 'два', 'a dois; dativo'),
    V('двумя', 'два', 'com dois; instrumental'),
    V('одной', 'один', 'de uma; genitivo feminino'),
    V('одного дня', 'день', 'de um dia; numeral adjetival'),
    V('двое', 'два', 'duas pessoas; plural de dois'),
    V('сто', 'сто', 'cem'),
    V('ста', 'сто', 'de cem; genitivo, dativo e instrumental'),
    V('пять дней', 'день', 'cinco dias; substantivo no genitivo plural'),
    V('два дня', 'день', 'dois dias; substantivo no genitivo singular'),
    V('день один', 'день', 'o dia um; numeral adjetivo'),
    V('первый', 'первый', 'primeiro; ordinal que flexiona como adjetivo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em благодарю пятью, пятью está em que caso?'),
    options: [T('Genitivo'), T('Instrumental'), T('Dativo')],
    answer: 1,
    hint: T(
      'Depois de um verbo de movimento ou de ação o instrumental é o caso do meio, do caminho e do acompanhamento.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: пять ___ (cinco dias)'), answer: 'дней' },
    {
      kind: 'choose',
      prompt: T('Como se diz a genitive de два?'),
      options: [T('два'), T('двух'), T('двум')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: ___ книги (dois livros)'), answer: 'две' },
  ],
  rules: [
    {
      n: '1',
      text: T('O numeral russo flexiona como substantivo e tem seis formas, uma por caso.'),
    },
    {
      n: '2',
      text: T(
        '{Пять} tem cinco formas distintas: {пяти} repete o genitivo, o dativo e o prepositivo.',
      ),
    },
    {
      n: '3',
      text: T('{Два} não tem forma feminina separada: duas livros usa duas, e a flexão é a mesma.'),
    },
    {
      n: '4',
      text: T('{Один} flexiona como adjetivo, com gênero: {один}, {одна}, {одно}, {одни}.'),
    },
    {
      n: '5',
      text: T(
        'Depois de 2 a 4 o substantivo vai ao genitivo singular; de 5 em diante, ao genitivo plural.',
      ),
    },
  ],
  notes: [
    {
      label: T('Cinco ou seis formas'),
      text: T(
        'Пять tem cinco formas para seis posições: nominativo пять, genitivo пяти, dativo пяти, acusativo пять, instrumental пятью, prepositivo пяти. O genitivo, o dativo e o prepositivo são a mesma palavra. Para quem Latin já leu, o padrão é idêntico ao de quinque, e o que se precisa é aprender a lista, não o mecanismo.',
      ),
    },
    {
      label: T('Onde o numeral é adjetivo'),
      text: T(
        'Один, два, три, четыре e os ordinais funcionam como adjetivos: concordam em gênero e número com o substantivo. Depois de cinco, o substantivo vai para o plural e o numeral deixa de concordar. Uma frase como двадцать два дня tem duas Agreement no mesmo sintagma: o composto concorda com a unidade, e a unidade concorda com dia. O que se flexiona e o que não se flexiona muda no meio da frase.',
      ),
    },
  ],
  examples: [
    { text: 'пять дней', gloss: T('cinco dias; substantivo no genitivo plural') },
    { text: 'два дня', gloss: T('dois dias; substantivo no genitivo singular') },
    { text: 'пяти дней', gloss: T('de cinco dias; numeral no genitivo') },
    { text: 'благодарю пятью', gloss: T('agradeço com cinco; numeral no instrumental') },
    { text: 'одного дня', gloss: T('de um dia; numeral adjetival no genitivo') },
    { text: 'одной книги', gloss: T('de um livro; numeral adjetival feminino no genitivo') },
    { text: 'двое детей', gloss: T('duas crianças; plural de dois para pessoas') },
    { text: 'двух дней', gloss: T('de dois dias; substantivo no plural, numeral no genitivo') },
    { text: 'сто лет', gloss: T('cem anos; substantivo no genitivo plural') },
    {
      text: 'И был вечер, и было утро: день один',
      gloss: T('e foi tarde, e foi manhã: o dia um (Gn 1:5)'),
    },
  ],
  tables: [
    {
      caption: T('Os cinco numerais que aparecem em toda frase'),
      head: [T('Caso'), T('один'), T('два'), T('три'), T('пять')],
      rows: [
        [T('nominativo'), T('один'), T('два'), T('три'), T('пять')],
        [T('genitivo'), T('одного'), T('двух'), T('трёх'), T('пяти')],
        [T('dativo'), T('одному'), T('двум'), T('трём'), T('пяти')],
        [T('acusativo'), T('один'), T('два'), T('три'), T('пять')],
        [T('instrumental'), T('одним'), T('двумя'), T('тремя'), T('пятью')],
        [T('prepositivo'), T('об одном'), T('о двух'), T('о трёх'), T('о пяти')],
      ],
    },
    {
      caption: T('Um numeral em seis posições'),
      head: [T('Caso'), T('пять'), T('два'), T('сто'), T('двадцать')],
      rows: [
        [T('nominativo'), T('пять'), T('два'), T('сто'), T('двадцать')],
        [T('genitivo'), T('пяти'), T('двух'), T('ста'), T('двадцати')],
        [T('dativo'), T('пяти'), T('двум'), T('стам'), T('двадцати')],
        [T('acusativo'), T('пять'), T('два'), T('сто'), T('двадцать')],
        [T('instrumental'), T('пятью'), T('двумя'), T('стами'), T('двадцатью')],
        [T('prepositivo'), T('о пяти'), T('о двух'), T('о ста'), T('о двадцати')],
      ],
    },
    {
      caption: T('A regra da contagem'),
      head: [T('Numeral'), T('O substantivo vai'), T('Exemplo'), T('O que flexiona')],
      rows: [
        [
          T('1, 21, 31'),
          T('nominativo singular'),
          T('двадцать один день'),
          T('o numeral, como adjetivo'),
        ],
        [T('2, 3, 4'), T('genitivo singular'), T('два дня, три месяца'), T('o substantivo')],
        [T('5 a 20, 0'), T('genitivo plural'), T('пять дней, двадцать книг'), T('o numeral')],
        [
          T('um número composto terminado em 2 a 4'),
          T('genitivo singular'),
          T('двадцать два года'),
          T('o numeral, como substantivo'),
        ],
      ],
    },
  ],
};
