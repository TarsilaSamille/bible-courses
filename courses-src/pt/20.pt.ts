import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  section: T('O adjetivo e o advérbio'),
  title: T('O advérbio: negação'),
  subtitle: T('não pode, pode não, e a próclise que não se nega'),
  body: C(`## O que nega

O {não} nega o verbo, e é por isso que ele aparece sempre antes dele. Os outros nega outras coisas: {nunca} e {jamais} negam tempo, {nada} nega coisa, {ninguém} nega pessoa, {nenhum} nega o indefinido, {nem} soma uma segunda negação e {tampouco} diz que a coisa é menos do que se pensava.

Cada um nega um elemento, e por isso podem se acumular: {Não vi ninguém}, {Nunca vi ninguém}, {Não vi nada nunca}. Isso não é redundância, é ênfase: cada advérbio nega um elemento diferente da frase.

## A próclise do não

O {não} tem duas posições, e a diferença é real. Em {Ele não pode vir}, o {não} nega o fato: ele é incapaz. Em {Ele pode não vir}, o {não} nega o arriving: ele é capaz, e o que ele não faz é vir. O mesmo par existe com o condicional: {não deveria} diz que ele não deve; {deveria não} diz que ele deve abster-se.

A regra é que o {não} vem antes do verbo quando o que se nega é a primeira informação da frase. Ele vai depois do verbo quando a informação principal já está dada e o {não} modifica o infinitivo ou o que vem depois.

## Onde o não se pendura

O {não} também pode entrar dentro de uma subordinada. {Não sei se ele vem} tem o {não} no verbo principal e a subordinada fica depois; {Não acredito que ele venha} tem o {não} no verbo principal e o subjuntivo na subordinada. E há o caso inverso, em que a negação está na subordinada: {Os que não creram}.

É aí que a tradução bíblica engana com mais frequência, porque o grego e o hebraico põem a negação num ponto fixo da frase e o português precisa reorganizar. O que não pode é deslocar a negação para fora do que ela nega.

## O que ler

Em qualquer frase com {não}, pergunte: o que está sendo negado, o verbo, o tempo, a coisa, a pessoa ou o indefinido? E o {não} está antes ou depois do verbo?

João 15.25 diz que se cumpram as palavras da lei «as quais {não creram}»: a negação está dentro do relativo e não no verbo principal da frase. É o caso em que a negação bíblica fica presa ao pronome relativo, e em português ela aparece exatamente no mesmo lugar.`),
  vocab: [
    V('não', 'não', 'não'),
    V('nunca', 'nunca', 'nunca'),
    V('jamais', 'jamais', 'jamais'),
    V('nada', 'nada', 'nada'),
    V('ninguém', 'ninguém', 'ninguém'),
    V('nenhum', 'nenhum', 'nenhum'),
    V('nem', 'nem', 'nem'),
    V('tampouco', 'tampouco', 'tampouco'),
    V('não pode', 'poder', 'não pode'),
    V('pode não', 'poder', 'pode não'),
    V('não sabia', 'saber', 'não sabia'),
    V('não creram', 'crer', 'não creram'),
    V('a lei', 'lei', 'a lei'),
    V('o verbo', 'verbo', 'o verbo'),
    V('a negação', 'negação', 'a negação'),
  ],
  rules: [
    { n: '§1', text: T('{Não} nega o verbo e por isso vem antes dele.') },
    {
      n: '§2',
      text: T(
        '{Nunca} e {jamais} negam tempo, {nada} nega coisa, {ninguém} nega pessoa, {nenhum} nega o indefinido.',
      ),
    },
    { n: '§3', text: T('{Não pode} nega o fato e {pode não} nega o que se faz.') },
    { n: '§4', text: T('A negação pode ficar dentro da subordinada: {os que não creram}.') },
    { n: '§5', text: T('A negação nunca sai do que nega, seja em português ou na tradução.') },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'O hebraico biblical tem partícula de negação ({lo}, {al}), e o grego usa {μή} e {οὐκ}. Os três marcam a negação uma vez só, e o português às vezes precisa de duas palavras para dizer a mesma coisa.',
      ),
    },
    {
      label: T('Negação dupla'),
      text: T(
        'Em {não é possível}, a segunda negação não nega nada: ela reforça. Por isso {não é possível} é mais enfático do que {é impossível}.',
      ),
    },
  ],
  examples: [
    { text: 'Ele não pode vir.', gloss: T('O {não} nega o fato: ele é incapaz.') },
    { text: 'Ele pode não vir.', gloss: T('O {não} nega o vir, não a capacidade.') },
    { text: 'Não deveria falar.', gloss: T('Negação do verbo principal.') },
    { text: 'Deveria não falar.', gloss: T('Ele deve abster-se de falar.') },
    { text: 'Não sei se ele vem.', gloss: T('A subordinada fica depois, inteira.') },
    { text: 'Nunca vi ninguém.', gloss: T('Duas negações, dois elementos negados.') },
    { text: 'Nem ele, tampouco eu.', gloss: T('A segunda negação é mais fraca que a primeira.') },
    { text: 'Os que não creram.', gloss: T('A negação presa ao pronome relativo.') },
  ],
  tables: [
    {
      caption: T('Cada advérbio nega um elemento'),
      head: ['Advérbio', 'O que nega', 'Exemplo'],
      rows: [
        ['não', 'o verbo', 'não viu'],
        ['nunca, jamais', 'o tempo', 'nunca viu'],
        ['nada', 'a coisa', 'não viu nada'],
        ['ninguém', 'a pessoa', 'não viu ninguém'],
        ['nenhum', 'o indefinido', 'não viu nenhum livro'],
      ],
    },
    {
      caption: T('As duas posições do não'),
      head: ['Posição', 'Frase', 'O que se nega'],
      rows: [
        ['antes do verbo', 'Ele não pode vir.', 'o fato: ele é incapaz'],
        ['depois do verbo', 'Ele pode não vir.', 'o vir: ele é capaz, mas não vem'],
      ],
    },
    {
      caption: T('Negação por elemento'),
      head: ['Grau', 'Frase', 'Explicação'],
      rows: [
        ['fraca', 'Não vi.', 'nega o verbo'],
        ['média', 'Não vi nada.', 'nega também a coisa'],
        ['forte', 'Não vi nunca nada.', 'nega verbo, tempo e coisa'],
        ['máxima', 'Não vi jamais nada de ninguém.', 'nega tudo, um elemento por vez'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em “ele pode não vir”, o que é negado?'),
    options: [T('o vir'), T('a capacidade'), T('o tempo'), T('a pessoa')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Em “{não pode}”, o {não} nega o ______.'),
      answer: 'fato',
      hint: T('Ele é incapaz.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual advérbio nega pessoa?'),
      options: [T('ninguém'), T('nada'), T('nunca'), T('nenhum')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue o advérbio ao que ele nega.'),
      pairs: [
        { a: T('não'), b: T('o verbo') },
        { a: T('nada'), b: T('a coisa') },
        { a: T('ninguém'), b: T('a pessoa') },
        { a: T('nunca'), b: T('o tempo') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
