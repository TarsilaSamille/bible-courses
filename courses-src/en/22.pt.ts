import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  title: T('Preposições: de, em e as relações de tempo e lugar'),
  subtitle: T('in, on, at, by — o sistema que não se deduce'),
  section: T('Preposições'),
  body: C(`## Três preposições para o mesmo lugar

O português tem {em} e {a}. O inglês tem três, e a escolha entre elas não é lógica: é convencional. {In} marca o interior de um espaço fechado, {on} marca uma superfície, e {at} marca um ponto.

O critério mais útil é o do **tamanho**: {in} é o espaço amplo e não delimitado ({in the city}, {in Brazil}, {in the room}); {on} é a superfície ({on the wall}, {on the table}, {on page ten}); {at} é o ponto preciso ({at the door}, {at 12 Baker Street}, {at the bus stop}).

Com tempo o mesmo trio se repete, e é por isso que ele é decorável: {in} para meses, anos, estações e partes do dia ({in May}, {in 1998}, {in the morning}); {on} para dias e datas ({on Monday}, {on 12 May}); {at} para horas e para expressões fixas ({at six o'clock}, {at night}, {at Christmas}).

João 1:1 na KJV abre com {In the beginning was the Word}, e é {in} mais tempo sem artigo: {in} com substantivo de tempo não recebe artigo. Mateus 2:1 repete a chave em {in the days of Herod}.

## Os três sentidos de by

A {by} é a preposição que mais confunde o aluno de português, e a confusão vem de ter **três sentidos**. O primeiro é limite de tempo: {by Friday} quer dizer "até sexta", não "na sexta" ({on Friday}) nem "perto de sexta" ({near Friday}).

O segundo é meio: {by car}, {by train}, {by hand}, {by post}, {by letter}. Não há artigo nem preposição alternativa.

O terceiro é proximidade: {by the river}, {by the window}, {by the door}. É o mesmo sentido de {next to}, e é o único dos três em que o substantivo costuma receber artigo.

A confusão entre eles é previsível: {by Friday} e {by the river} são a mesma palavra com sentidos que nada têm a ver, e é por isso que a lição inteira não tem regra única para {by}.

## Until, till e from

Durar até é {until} ou {till}: {I will stay until Friday}. De é {from}: {from Monday to Friday}. A combinação dos dois dá {from ... to ...}, e é a forma que aparece em datas e em preços: {from nine to five}.

A diferença entre {until} e {by} é a que o teste cobra: {I will wait until five} quer dizer que eu espero **até** as cinco; {I will wait by five} quer dizer que eu estou esperando **até as cinco no máximo** e talvez pare antes.

## Onde o aluno erra por generalização

A origem do erro é a mesma das preposições de lugar: o português obriga a escolher uma palavra e o aluno generaliza. Três frases mostram o padrão inteiro: {He is in the room}, {The book is on the desk}, {She is at the station}. O aluno escreve {in the desk} e {at the room}, e as duas formas estão erradas por um motivo que a gramática não explica.

O que salva o aluno é o teste do tamanho: **o substantivo designa um espaço cominside, uma superfície ou um ponto?** Três perguntas, três preposições, e a mesma resposta vale para o tempo.`),
  vocab: [
    V('in the city', 'city', 'na cidade'),
    V('in the room', 'room', 'no quarto'),
    V('on the wall', 'wall', 'na parede'),
    V('on the table', 'table', 'na mesa'),
    V('at the door', 'door', 'à porta'),
    V('at the bus stop', 'bus stop', 'na parada de ônibus'),
    V('in May', 'May', 'em maio'),
    V('in 1998', '1998', 'em 1998'),
    V('in the morning', 'morning', 'de manhã'),
    V('on Monday', 'Monday', 'na segunda-feira'),
    V("at six o'clock", "o'clock", 'às seis horas'),
    V('by Friday', 'by', 'até sexta'),
    V('until Friday', 'until', 'até sexta (duração)'),
    V('from Monday to Friday', 'from', 'de segunda a sexta'),
    V('by the river', 'by', 'perto do rio'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'In marca o interior e o espaço amplo; on marca a superfície; at marca o ponto preciso.',
      ),
    },
    {
      n: '2',
      text: T(
        'Em tempo: in para meses, anos, estações e partes do dia; on para dias e datas; at para horas e expressões fixas.',
      ),
    },
    {
      n: '3',
      text: T(
        'By tem três sentidos independentes: limite de tempo (by Friday), meio (by car) e proximidade (by the river).',
      ),
    },
    {
      n: '4',
      text: T('Until marca duração até; by marca um prazo máximo. They are different sentences.'),
    },
    {
      n: '5',
      text: T(
        'De um período a outro usa-se from mais to: from Monday to Friday, from nine to five.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'João 1:1 traz In the beginning e Mateus 2:1 traz in the days of Herod. Em ambos a preposição é in, e o substantivo de tempo vem sem artigo.',
      ),
    },
    {
      label: T('Diagnóstico:'),
      text: T(
        'Se o aluno escreve in the desk ou at the room, o problema é de categoria espacial e não de memória: ele precisa decidir entre interior, superfície e ponto antes de escolher a preposição.',
      ),
    },
  ],
  examples: [
    { text: '{in the room}', gloss: T('no quarto — interior') },
    { text: '{on the desk}', gloss: T('sobre a mesa — superfície') },
    { text: '{at the station}', gloss: T('na estação — ponto') },
    { text: '{in the morning}', gloss: T('de manhã') },
    { text: '{on 12 May}', gloss: T('em 12 de maio — data') },
    { text: "{at six o'clock}", gloss: T('às seis horas') },
    { text: '{In the beginning was the Word}', gloss: T('No princípio era a Palavra') },
    { text: '{by Friday}', gloss: T('até sexta — prazo') },
    { text: '{until Friday}', gloss: T('até sexta — duração') },
    { text: '{by the river}', gloss: T('perto do rio') },
    { text: '{from nine to five}', gloss: T('das nove às cinco') },
  ],
  tables: [
    {
      caption: T('Lugar: o teste do tamanho'),
      head: [T('Preposição'), T('Marca'), T('Exemplos')],
      rows: [
        ['{in}', T('interior, espaço amplo'), '{in the room, in Brazil}'],
        ['{on}', T('superfície, página'), '{on the wall, on page ten}'],
        ['{at}', T('ponto, endereço precise'), '{at the door, at 12 Baker Street}'],
      ],
    },
    {
      caption: T('Tempo e prazo'),
      head: [T('Preposição'), T('Usa-se com'), T('Exemplo')],
      rows: [
        ['{in}', T('meses, anos, estações, partes do dia'), '{in May, in the morning}'],
        ['{on}', T('dias e datas'), '{on Monday, on 12 May}'],
        ['{at}', T('horas e expressões fixas'), "{at six o'clock, at night}"],
        ['{until}', T('duração até'), '{until Friday}'],
        ['{by}', T('prazo até'), '{by Friday}'],
        ['{from ... to}', T('de um ponto a outro'), '{from nine to five}'],
      ],
    },
    {
      caption: T('Os três sentidos de by'),
      head: [T('Sentido'), T('Exemplo'), T('Tradução')],
      rows: [
        [T('limite de tempo'), '{by Friday}', T('até sexta')],
        [T('meio'), '{by car}', T('de carro')],
        [T('proximidade'), '{by the river}', T('perto do rio')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase está correta?'),
    options: [
      T('She is at the room'),
      T('She is in the room'),
      T('She is on the room'),
      T('She is in the desk'),
    ],
    answer: 1,
    hint: T('Room é um espaço fechado: a preposição é in.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Complete com a preposição de tempo: '___ 1998 he moved.'"),
      answer: 'In',
    },
    { kind: 'fill', prompt: T("Complete: 'I will wait ___ five.' (prazo máximo)"), answer: 'by' },
    {
      kind: 'match',
      prompt: T('Ligue o uso ao exemplo.'),
      pairs: [
        { a: T('superfície'), b: '{on the wall}' },
        { a: T('ponto'), b: '{at the door}' },
        { a: T('espaço amplo'), b: '{in the city}' },
        { a: T('prazo'), b: '{by Friday}' },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('Qual frase está correta?'),
      options: [
        T('I will stay until five'),
        T('I will stay by five'),
        T('I will stay in five'),
        T('I will stay on five'),
      ],
      answer: 0,
    },
  ],
};
