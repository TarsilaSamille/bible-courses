import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  section: T('O nome'),
  title: T('O substantivo e o que ele faz'),
  subtitle: T('Sem artigo, sem caso, sem gênero: a posição decide'),
  body: C(`## Nenhuma flexão, nenhum artigo

O substantivo indonésio tem uma forma só. {rumah} é a casa, o casa de alguém, a casa de alguém e as casas de alguém, tudo com as mesmas cinco letras. O português resolve a diferença com artigo ({o}, {a}, {os}, {as}) e com preposição ({do}, {no}, {de}), e quem aprende uma língua românica passa a vida procurando o artigo antes de dizer qualquer substantivo. No indonésio esse lugar está vago.

O gênero também falta. {rumah} não é masculino nem feminino; {buku} não é masculino nem feminino. O gênero lexical aparece em alguns poucos substantivos isolados, e é herança de uma camada antiga da língua, não sistema: {anak} «a criança» e {ibu} «a mãe» contra {bapak} «o pai», mas o par {mobil} e {sepeda} não tem nada a ver com isso. Para o leitor da Bíblia isso significa que nenhuma concordância de gênero existe para errar.

E o número também não está no substantivo. {buku} quer dizer «o livro» e «os livros» com a mesma palavra.

## A posição faz o trabalho do artigo

A função do substantivo é dada pelo lugar que ele ocupa na frase. Não há morfema, não há terminação: a mesma palavra {buku} é sujeito num verbo, é objeto direto, é complemento depois de {adalah}, é possessor antes de {-nya} e aparece depois de uma preposição. São cinco funções, uma forma.

O português resolve três delas com o artigo e duas com preposição. O indonésio resolve as cinco com posição, e em dois casos essa posição é obrigatória: um sujeito e um objeto não podem trocar de lugar sem inverter o sentido, porque a ordem é sujeito, verbo, objeto e ninguém a cumpre.

Quando há dois nomes candidatos a sujeito e a frase é ambígua, é o verbo que desempata, não a forma do nome. Compare {anjing saya menggigit dia} e {saya menggigit anjing}: o primeiro nome que aparece é o sujeito, e a posição faz o trabalho.

## O que o artigo fazia e quem faz aqui

O artigo português tem três funções: apontar, determinar e.generic. O indonésio tem uma palavra para duas delas, {itu}, que é um demonstrativo ancorado em algo já mencionado: {Firman itu} «aquela Palavra», «a Palavra de que falei». A terceira função, a de conjunto, é feita pelo substantivo {para}: {para murid} «os discípulos», {para rasul} «os apóstolos». E a de quantidade vem do numeral ou do quantificador: {satu buku}, {banyak buku}.

Quando o português obriga um artigo que o indonésio não tem, é porque o português está contando um substantivo que o indonésio já contou em outro lugar da frase. Em {o livro que você leu ontem}, o {o} não é informação: é contagem, e o {yang} já contou. Traduzir isso por {buku yang kamu baca kemarin} perde o artigo e não perde nada.

O caso mais visível é o genitivo. O português diz {do livro}, {da casa}, {dos livros} com uma preposição que muda conforme o artigo. O indonésio diz {buku saya} e {rumah saya}, sem nada no meio: o possessor simplesmente se cola ao nome, e a preposição do português não tem lugar de entrar.

E há uma assimetria que produz erro em quase todo texto bíblico: o substantivo definido em português costuma virar um nome solto em indonésio. {Allah itu} é o que existe: não há forma de escrever «o Deus» com artigo definido. O leitor precisa inferir de {itu} ou da repetição o que o artigo estava marcando.

## Kerajaan Allah, kebenaran-Nya

{Matius 6:33} é a passagem onde o sistema aparece inteiro, e vale ler devagar: {Carilah dahulu Kerajaan Allah dan kebenaran-Nya, maka segala-galanya akan ditambahkan kepadamu}.

{Kerajaan Allah} é genitivo, e o genitivo está marcado por nada. {Kerajaan} e {Allah} são dois substantivos encostados, na ordem que o português traduz por {o Reino de Deus}, e a preposição {dari} que o português exige simplesmente não existe ali. Um substantivo modificado por outro é um sintagma completo em indonésio.

{kebenaran-Nya} é o mesmo sintagma escrito com o possuidor colado: {kebenaran} mais {-Nya}. Quem sabe que {sejak} aponta para {Allah} em {Kerajaan Allah} lê {kebenaran-Nya} sem esforço. Quem não sabe lê um substantivo repetido e para.

Muitos sintagmas em português {tudo o que} e {todos os} são {segala-galanya} e {para}, e a redução em {segala-galanya} {tiga}, {dua} faz o plural visível. O versículo inteiro é uma frase sem artigo, e é por isso que a tradução o parece tão mais leve do que o original grego: o grego tinha {tēn basilikeia}, com artículo, e o indonésio perdeu o artigo sem perder nada que o grego dissesse.`),
  vocab: [
    V('rumah', 'rumah', 'casa'),
    V('buku', 'buku', 'livro'),
    V('anak', 'anak', 'criança, filho'),
    V('ibu', 'ibu', 'mãe'),
    V('bapak', 'bapak', 'pai'),
    V('anjing', 'anjing', 'cão'),
    V('sepeda', 'sepeda', 'bicicleta'),
    V('mobil', 'mobil', 'automóvel'),
    V('ada', 'ada', 'haver, existir'),
    V('adalah', 'adalah', 'ser, é'),
    V('itu', 'itu', 'esse, aquele (já mencionado)'),
    V('para', 'para', 'os, os de (plural definido)'),
    V('banyak', 'banyak', 'muitos'),
    V('satu', 'satu', 'um'),
    V('kerajaan', 'kerajaan', 'reino'),
    V('kebenaran', 'kebenaran', 'verdade'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O substantivo indonésio não flexiona: nem artigo, nem caso, nem gênero, nem número. A função vem da posição.',
      ),
    },
    {
      n: '2',
      text: T(
        'A ordem é sujeito, verbo, objeto. O primeiro nome da oração é o sujeito, mesmo que ele pareça um objeto.',
      ),
    },
    {
      n: '3',
      text: T(
        '{itu} substitui o artigo definido português e aponta para algo já mencionado; {para} faz o plural definido.',
      ),
    },
    {
      n: '4',
      text: T(
        'O genitivo é simples aposição: {rumah saya}, {buku saya}. Não há preposição entre os dois nomes.',
      ),
    },
    {
      n: '5',
      text: T(
        '{dari} é a preposição de origem e origem, não de posse: {rumah saya}, nunca {rumah dari saya}.',
      ),
    },
  ],
  notes: [
    {
      label: T('O gênero que não existe'),
      text: T(
        'Alguns poucos substantivos têm gênero gramatical herdado, como {anak} e {bapak}, mas o sistema é fechado e o leitor bíblico quase nunca precisa dele.',
      ),
    },
    {
      label: T('Onde a tradução engana'),
      text: T(
        'Quando {dari} aparece em um substantivo seguido de outro nome, quase sempre é origem, não posse. {rumah dari nenek} é «a casa da avó» no sentido de origem, e o português traduz por posse sem querer.',
      ),
    },
  ],
  examples: [
    { text: 'Buku itu milik saya.', gloss: T('Aquele livro é meu.') },
    { text: 'Anjing saya menggigit dia.', gloss: T('O meu cão mordeu-o.') },
    { text: 'Saya menggigit anjing.', gloss: T('Eu mordei o cão.') },
    { text: 'Rumah saya dekat sekolah.', gloss: T('A minha casa fica perto da escola.') },
    { text: 'Kerajaan Allah tidak akan berakhir.', gloss: T('O Reino de Deus não acabará.') },
    { text: 'Carilah dahulu Kerajaan Allah.', gloss: T('Busquem primeiro o Reino de Deus.') },
    { text: 'Untuk murid, hal itu mudah.', gloss: T('Para os discípulos, isso é fácil.') },
    { text: 'Banyak buku di meja.', gloss: T('Muitos livros na mesa.') },
    { text: 'Ada masalah besar di sini.', gloss: T('Há um grande problema aqui.') },
  ],
  tables: [
    {
      caption: T('As cinco funções do substantivo'),
      head: ['Função', 'Como aparece', 'Português', 'Sinal em PT'],
      rows: [
        ['sujeito', 'buku itu penting', 'o livro é importante', 'sujeito fica depois do verbo'],
        ['objeto direto', 'saya membeli buku', 'eu comprei o livro', 'verbo antes do nome'],
        ['complemento', 'ini buku saya', 'isto é o meu livro', 'adalah liga os dois'],
        ['genitivo', 'buku saya', 'o meu livro', 'possuidor colado'],
        ['complemento de preposição', 'di rumah', 'em casa', 'preposição expõe a função'],
      ],
    },
    {
      caption: T('O que o artigo português faz e quem faz aqui'),
      head: ['Função do artigo', 'Português', 'Indonésio', 'Exemplo'],
      rows: [
        ['apontar para algo já citado', 'o / a + itu', 'itu', 'Firman itu'],
        ['determinar um conjunto', 'os / as', 'para', 'para murid'],
        ['contagem indefinida', 'um / uma', 'satu / se-', 'seorang murid'],
        ['plural', 'livros', 'banyak + livro', 'banyak buku'],
        ['genitivo', 'do / da', 'colado + -nya', 'rumah saya'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Anjing saya menggigit dia}, quem morde?'),
    options: [T('o meu cão'), T('ele'), T('não é possível saber'), T('o cão dele')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o plural definido de {murid}: «os discípulos».'),
      answer: 'para',
      hint: T('Palavra que transforma um substantivo em conjunto.'),
    },
    {
      kind: 'choose',
      prompt: T('Como se diz «o Reino de Deus» sem preposição?'),
      options: [
        T('Kerajaan Allah'),
        T('Kerajaan dari Allah'),
        T('Kerajaan di Allah'),
        T('Kerajaan untuk Allah'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue a função ao sintagma'),
      pairs: [
        { a: T('{buku itu}'), b: T('sujeito') },
        { a: T('{rumah saya}'), b: T('genitivo') },
        { a: T('{di sekolah}'), b: T('complemento de preposição') },
        { a: T('{saya membeli buku}'), b: T('objeto direto') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
