import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Voz passiva'),
  subtitle: T('foi escrito, é amado, vendem-se casas'),
  section: T('A sintaxe'),
  body: C(`## A passiva que mostra o resultado

A passiva analítica usa ser ou estar + particípio: {foi escrito}, {é amado}, {será salvo}. O particípio **concorda com o sujeito**: {a palavra foi escrita}, {os livros foram escritos}, {as casas foram vendidas}. E o agente, quando aparece, vem com **por**: {foi criado por Deus}, {foi buscado por Maria}.

Aqui está o ponto que quase todo mundo perde: ser e estar não são sinônimos aqui. ser + particípio marca fato consumado e resultado — {foi criado por Deus}, {a lei foi dada} — e é a forma da narrativa bíblica. estar + particípio marca estado no presente ou ação em curso: {está escrito}, {está ferido}, {estava sentado}. Traduzir «foi escrito» por «está escrito» troca um fato por um estado, e isso é uma diferença, não uma sinonímia.

A passiva de ser ainda tem um tempo que a de estar não tem: o passado ({foi, foram}) e o futuro ({será, serão}). Por isso {será salvo} é frase bíblica comum, e {está salvo} apenas descreve um momento.

## vendem-se casas: o se que é partícula

A construção pronominal com se pode ser passiva: {vendem-se casas}, {aluga-se o quarto}. Repare que o verbo concorda com o sujeito ({casas}, plural), o que prova que não há um «se» de objeto: se houvesse objeto, o singular seria {vende-se uma casa}.

Nem todo {se} é passivo. {arrependeu-se} é **reflexivo**, porque o sujeito pratica e sofre a ação ao mesmo tempo: ele se arrepende, e o arrependimento é dele. O teste é simples — pergunte quem pratica a ação. Se é o próprio sujeito, {se} é reflexivo; se é outro, {se} é partícula.

E há um caso intermediário, o se pronominal de terceira pessoa: {lavou-se} pode ser «lavou-se» (reflexivo) ou «foi lavado» (passivo). A informação que resolve vem de fora da frase, de quem conta.

## A escolha de ser ou estar depende do foco

O que decide é foco, resultado e estado, não tradução automática. A narrativa bíblica favorece ser ({foram enviados}, {foi aberto}), a descrição de uma cena favorece estar ({estava sentado}, {estava escrito na parede}). A escolha muda o tempo verbal disponível, e por isso o tradutor precisa decidir antes de escolher a palavra.

## O que ler

Em qualquer frase com {ser} ou {estar}, pergunte: é fato (ser) ou estado (estar)? O {por} está presente? E o {se} é reflexivo ou partícula? Com essas três respostas, a passiva do português cabe em uma linha — e a tradução de {foram enviados} por {se enviaram} deixa de acontecer.`),
  vocab: [
    V('escrito', 'escrever', 'escrito'),
    V('salvo', 'salvar', 'salvo'),
    V('crucificado', 'crucificar', 'crucificado'),
    V('consumado', 'consumar', 'consumado'),
    V('vendem-se', 'vender', 'vendem-se'),
    V('diz-se', 'dizer', 'diz-se'),
    V('arrependeu-se', 'arrepender-se', 'arrependeu-se'),
    V('por Deus', 'por', 'por Deus'),
    V('foi morto', 'matar', 'foi morto'),
    V('ser', 'ser', 'ser (verbo auxiliar)'),
    V('estar', 'estar', 'estar (verbo auxiliar)'),
    V('se', 'se', 'se (partícula pronominal)'),
    V('por', 'por', 'por (agente da passiva)'),
    V('casas', 'casa', 'casas'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em “vendem-se casas”, o verbo concorda com:'),
    options: [T('casas'), T('o se'), T('venda'), T('nada')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: “a lei foi escrita ___ Deus”.'),
      answer: 'por',
      hint: T('Indica agente da passiva.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase é reflexiva?'),
      options: [
        T('A lei foi escrita.'),
        T('Ele se arrependeu.'),
        T('As casas vendem-se.'),
        T('A cidade foi fundada.'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Ligue construção e sentido.'),
      pairs: [
        { a: T('foi escrito'), b: T('passiva') },
        { a: T('vende-se'), b: T('se passivo') },
        { a: T('arrependeu-se'), b: T('se reflexivo') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{a palavra foi escrita} e {os livros foram escritos} mostram que o particípio concorda com o sujeito: {escrita} com {palavra} e {escritos} com {livros}. É isso que separa {foi escrito} de {foram escritos}.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{ser} mais particípio marca fato consumado e tem os tempos {foi} e {será}: {foi criado por Deus}, {será salvo}. {estar} mais particípio marca estado e fica no presente e no passado: {está escrito}, {estava sentado}. {Está salvo} descreve um estado; {foi salvo} narra um fato.',
      ),
    },
    {
      n: '§3',
      text: T(
        'O agente da passiva de {ser} entra com {por}: {foi criado por Deus}, {foi buscado por Maria}. A de {estar} não tem agente: ninguém diz {está escrito por Deus}, porque {estar} não narra.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Em {vendem-se casas} o verbo concorda com o sujeito ({casas}, plural). Com objeto a concordância seria {vende-se uma casa}, e é essa diferença que prova que o {se} é partícula apassivadora e não pronome objeto.',
      ),
    },
    {
      n: '§5',
      text: T(
        'O teste do {se} é a pergunta de quem pratica: em {arrependeu-se} é o próprio sujeito, e o {se} é reflexivo; em {lavou-se} pode ser reflexivo ou partícula, e quem decide é quem conta a história, não a frase.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico'),
      text: T(
        '{Está consumado} (Jo 19:30) destaca o estado; {foi crucificado} destaca o processo e admite agente com {por}. A escolha muda o tempo verbal disponível, e é por isso que se decide antes de escolher a palavra.',
      ),
    },
    {
      label: T('O grego decide o tempo'),
      text: T(
        'O grego passa do aoristo ao perfeito ({ἐγένετο}, {γέγονεν}) na mesma passagem de Jo 19:30, e o português precisa escolher entre {foi} e {está}. A escolha de {ser} ou {estar} segue o que o grego está fazendo, não a preferência do tradutor.',
      ),
    },
  ],
  examples: [
    {
      text: 'A palavra foi escrita por Deus.',
      gloss: T('Passiva de {ser}: fato, com agente por {por}.'),
    },
    { text: 'Os livros foram escritos.', gloss: T('{escritos} concorda com {livros}.') },
    { text: 'A lei está escrita na pedra.', gloss: T('{estar} mais particípio: estado.') },
    { text: 'Ele está ferido.', gloss: T('Estado, não processo.') },
    { text: 'Estava sentado à direita.', gloss: T('Passado de {estar}: cena.') },
    { text: 'Ele se arrependeu.', gloss: T('{se} reflexivo: o próprio sujeito pratica.') },
    { text: 'Vendem-se casas.', gloss: T('{se} partícula: o verbo concorda com {casas}.') },
    { text: 'Aluga-se o quarto.', gloss: T('Com objeto, o {se} seria pronome.') },
    { text: 'Serão salvos.', gloss: T('Futuro que só a passiva de {ser} tem.') },
  ],
  tables: [
    {
      caption: T('As duas passivas'),
      head: ['Estrutura', 'Marca', 'Exemplo'],
      rows: [
        ['ser + particípio', 'fato consumado', 'foi escrito'],
        ['estar + particípio', 'estado', 'está escrito'],
        ['ser + particípio + por', 'fato com agente', 'foi criado por Deus'],
      ],
    },
    {
      caption: T('Os tempos que cada uma tem'),
      head: ['Auxiliar', 'Passado', 'Futuro'],
      rows: [
        ['ser', 'foi, foram', 'será, serão'],
        ['estar', 'estava, estavam', '—'],
      ],
    },
    {
      caption: T('O {se} que confunde'),
      head: ['Frase', 'Tipo de {se}', 'Teste'],
      rows: [
        ['arrependeu-se', 'reflexivo', 'o sujeito pratica'],
        ['lavou-se', 'ambíguo', 'quem conta decide'],
        ['vendem-se casas', 'partícula', 'o verbo concorda'],
      ],
    },
  ],
};
