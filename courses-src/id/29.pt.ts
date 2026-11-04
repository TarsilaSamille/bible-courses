import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  section: T('Sintaxe'),
  title: T('Sintaxe'),
  subtitle: T('sujeito, verbo, objeto: o que se move e o que não pode'),
  body: C(`## A ordem que não se negocia

A ordem da oração indonésia é sujeito, verbo, objeto, e ninguém a cumpre. Não há inversão, não há topicalização, e não há aquele recurso do português e do inglês de pôr o objeto no começo para dar ênfase.

{Anjing saya menggigit dia} é «o meu cão mordeu-o», e o primeiro substantivo é o sujeito só porque está na primeira posição. {Saya menggigit anjing} é «eu mordi o cão». Trocar os dois substantivos troca os papéis, e não produz uma frase enfática: produz uma frase diferente.

O que explica é o verbo. Uma oração transitiva tem um nome antes do verbo e um depois, e o nome que está antes é o sujeito por definição de posição. {Buku itu saya baca} existe, com uma pausa depois de {buku itu}, e soa a algo fora do lugar: funciona como código, não como prosa.

O português e o inglês têm o que se chama de ordem marcada, que traz a informação nova no começo: «Meu pai, esse eu conheço». O indonésio não tem, e a informação nova é marcada de outra maneira: por um advérbio, ou por {itu}, ou por {yang}.

## O que pode se mover

AFlexibilidade do indonésio não está na ordem dos nomes. Está nos modificadores, e eles podem ir a quase qualquer lugar sem alterar a gramática.

O advérbio de sintagma abre a frase quando o foco está no modo: {Dengan teliti dia membaca buku} «com cuidado, ele leu o livro». O advérbio de tempo abre a frase quando o foco está no tempo: {Kemarin dia datang} «ontem ele veio». Nos dois casos a informação que se movia para o fim da oração no português é a que sobe para a frente.

A locução nominal também pode subir, desde que venha inteira: {Di rumah itu dia menonton televisi} «naquela casa, ele assistiu à televisão». Subir metade da locução não funciona: {Rumah itu} sozinho no começo, sem {di}, produz uma frase sem verbo.

E há um movimento que parece inversão e não é: a oração com {yang} pode subir, desde que o que vem depois seja um sintagma completo. {Yang kamu baca itu buku} «aquilo que você lê é um livro». O {yang} é que permite a subida, e o que sobe é um bloco fechado.

O que **não** sobe nunca são três coisas: o sujeito, o verbo e a ordem entre os dois nomes de uma oração transitiva. Isso é tudo. Quem entende isso entende a sintaxe do indonésio inteira, porque o resto são advérbios e locuções.

## A negação e a passiva

Duas coisas que o leitor vai tentar fazer e não pode.

**A negação não pode passar do sujeito.** {tidak} vai antes do verbo, e o verbo fica onde estava. {Saya tidak lapar}, e nunca {tidak saya lapar}. O português admite «não eu tenho fome» em literárias; o inglês admite «didn't I come?»; o indonesio no admite nada disso.

A razão está na ordem: se a negação pudesse subir, ela passaria por cima do sujeito, e o sujeito deixaria de ser o primeiro nome. Como o sujeito é o primeiro nome por definição, a negação não tem por onde subir. O que se diz em vez de {tidak saya lapar} é {Saya tidak lapar}, {Bukan saya yang lapar} ou {Saya belum lapar}, e as três são frases diferentes.

**A passiva é feita com {di-} e o agente vem depois.** {Surat itu ditulis oleh Petrus} «a carta é escrita por Pedro». O {oleh} é obrigatório quando o agente é uma pessoa e é omitido quando não interessa: {Surat itu ditulis} «a carta está sendo escrita».

E há um segundo tipo de passiva, que não tem verbo. O substantivo fica em foco com {ada}: {Ada yang datang} «veio alguém», {Ada buku baru} «há um livro novo». É a mesma informação da passiva sem sujeito, e o leitor que reconhece a construção em português lê {ada} rápido demais.

A passiva tem ainda uma variante com clítico, em que o agente vira pronome colado ao verbo: {kubaca} «lido por mim», {kaubaca} «lido por você», {ditulisnya} «escrito por ele». O {ny} de terceira pessoa é o mesmo {-nya} dos outros cinco empregos, e é por isso que {ditulisnya} pode ser tanto «escrito por ele» quanto «que foi escrito», conforme a frase.

O que muda de uma língua para outra é o quanto a passiva é produtiva. No indonésio comum, a passiva é marcada: aparece quando o objeto é o tema e o agente é irrelevante. No grego do Novo Testamento, a passiva é usada em orações relativas com frequência, e a tradutora tem de decidir a cada passagem se a passiva grega tinha agente ou não. Onde o grego tinha agente implícito e o contexto permitia, o indonésio escreve {oleh} mesmo assim; onde não, escreve {di-} sozinho. É uma decisão de tradução, não de língua.

## Dan inginilah olehmu diperlakukan oleh orang lain

{Lukas 6:31} é a passagem onde a ordem fixa aparece com mais peças de uma vez, e vale ler devagar: {Dan inginilah olehmu diperlakukan oleh orang lain seperti kamu ingin diperlakukan oleh mereka}.

A estrutura visível é sujeito {kamu}, verbo {inginilah}, objeto {olehmu diperlakukan oleh orang lain}, e depois o marcador de comparação {seperti} com uma segunda oração que repete a mesma ordem. Duas orações, a mesma arquitetura, e a segunda é o espelho inteiro da primeira.

O que o grego faz aqui é simetria: duas metades com {kath’ homōs kai}, uma construção que o grego usa para emparelhar ações. O indonesio usa {seperti}, que é uma palavra, e a primeira oração é a regra e a segunda é a aplicação.

E o verbo da primeira oração é {inginilah}, com o {lah} de ênfase, sobre {ingin} que é um substantivo nominalizado com {-in}: {yang ingin} «o que quer». O grego tem um verbo, o indonésio tem um substantivo com partícula, e a diferença é o preço de uma língua que nominaliza em vez de flexionar.`),
  vocab: [
    V('saya', 'saya', 'eu'),
    V('dia', 'dia', 'ele, ela'),
    V('anjing', 'anjing', 'cão'),
    V('menggigit', 'gigit', 'morder'),
    V('buku', 'buku', 'livro'),
    V('baca', 'baca', 'ler'),
    V('dengan teliti', 'teliti', 'com cuidado'),
    V('kemarin', 'kemarin', 'ontem'),
    V('rumah', 'rumah', 'casa'),
    V('menonton', 'tonton', 'assistir a'),
    V('televisi', 'televisi', 'televisão'),
    V('tidak', 'tidak', 'não'),
    V('lapar', 'lapar', 'com fome'),
    V('ditulis', 'tulis', 'ser escrito'),
    V('oleh', 'oleh', 'por (agente)'),
    V('ada', 'ada', 'haver'),
    V('kubaca', 'baca', 'lido por mim'),
    V('kaubaca', 'baca', 'lido por você'),
    V('ditulisnya', 'tulis', 'escrito por ele'),
    V('ingin', 'ingin', 'querer'),
    V('perlakukan', 'lakukan', 'tratar'),
    V('seperti', 'seperti', 'como'),
  ],
  rules: [
    { n: '1', text: T('A ordem é sujeito, verbo, objeto, e não se inverte.') },
    {
      n: '2',
      text: T(
        'O que se move para a frente são advérbios, locuções nominais completas e orações com {yang}.',
      ),
    },
    {
      n: '3',
      text: T(
        '{tidak} vai antes do verbo e nunca antes do sujeito: {Saya tidak lapar}, nunca {tidak saya lapar}.',
      ),
    },
    { n: '4', text: T('A passiva é {di-} mais verbo, e o agente vem em {oleh} depois da oração.') },
    { n: '5', text: T('A passiva sem verbo usa {ada}: {ada yang datang} «veio alguém».') },
  ],
  notes: [
    {
      label: T('Por que a negação não sobe'),
      text: T(
        'Se a negação pudesse subir, passaria por cima do sujeito, e o sujeito deixaria de ser o primeiro nome. Como o sujeito é o primeiro nome por definição, a negação não tem por onde subir. Em vez dela usam-se {Saya tidak lapar}, {Bukan saya yang lapar} ou {Saya belum lapar}.',
      ),
    },
    {
      label: T('Quando a passiva é marcada'),
      text: T(
        'No indonesio comum a passiva aparece quando o objeto é o tema e o agente é irrelevante. O grego do Novo Testamento usa a passiva com frequência nas relativas, e a tradutora precisa decidir a cada passagem se havia agente. Aí a decisão é de tradução, não de língua.',
      ),
    },
  ],
  examples: [
    { text: 'Anjing saya menggigit dia.', gloss: T('My dog bit him.') },
    { text: 'Saya menggigit anjing.', gloss: T('I bit the dog.') },
    { text: 'Dengan teliti dia membaca buku.', gloss: T('Carefully, he read the book.') },
    { text: 'Kemarin dia datang.', gloss: T('Yesterday he came.') },
    {
      text: 'Di rumah itu dia menonton televisi.',
      gloss: T('In that house he watched television.'),
    },
    { text: 'Yang kamu baca itu buku.', gloss: T('What you are reading is a book.') },
    { text: 'Saya tidak lapar.', gloss: T('I am not hungry.') },
    { text: 'Surat itu ditulis oleh Petrus.', gloss: T('The letter is written by Peter.') },
    { text: 'Surat itu ditulis.', gloss: T('The letter is being written.') },
    { text: 'Kitab itu kaubaca.', gloss: T('You read that book.') },
  ],
  tables: [
    {
      caption: T('O que se move e o que fica'),
      head: ['Peça', 'Pode subir?', 'Sobe como', 'Exemplo'],
      rows: [
        ['sujeito', 'não', '(nunca)', 'Saya tidak lapar'],
        ['verbo', 'não', '(nunca)', 'saya membaca'],
        ['ordem SVO', 'não', '(nunca)', 'anjing saya menggigit dia'],
        ['advérbio', 'sim', 'elemento solto', 'Dengan teliti dia baca'],
        ['locução nominal', 'sim', 'bloco inteiro', 'Di rumah itu dia baca'],
        ['oração com yang', 'sim', 'bloco fechado', 'Yang kamu baca itu buku'],
      ],
    },
    {
      caption: T('As três formas de negar e as três de passarivo'),
      head: ['Função', 'Estrutura', 'Exemplo', 'Leia como'],
      rows: [
        ['negação', 'S + tidak + V', 'Saya tidak lapar.', 'não tenho fome'],
        [
          'negação nominal',
          'Bukan + S + yang + V',
          'Bukan saya yang lapar.',
          'não sou eu que tenho fome',
        ],
        ['negação temporal', 'S + belum + V', 'Saya belum lapar.', 'ainda não tenho fome'],
        ['passivo com agente', 'O + di-V + oleh + A', 'Ditulis oleh Petrus.', 'escrito por Pedro'],
        ['passivo sem agente', 'O + di-V', 'Surat itu ditulis.', 'a carta está sendo escrita'],
        ['passivo com clítico', 'O + V-nya', 'Kitab itu kaubaca.', 'o livro você leu'],
        ['passivo sem verbo', 'ada + yang + V', 'Ada yang datang.', 'veio alguém'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase está correta?'),
    options: [
      T('Saya tidak lapar'),
      T('tidak saya lapar'),
      T('Jangan saya lapar'),
      T('tidak lapar saya'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete a passiva com agente: «a carta é escrita por Pedro» = Surat itu ditulis ___ Petrus.',
      ),
      answer: 'oleh',
      hint: T('A preposição de agente.'),
    },
    {
      kind: 'choose',
      prompt: T('Em {Surat itu ditulis}, o que foi omitido?'),
      options: [T('o agente'), T('o verbo'), T('o sujeito'), T('o objeto')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue a peça à sua posição'),
      pairs: [
        { a: T('{saya}'), b: T('sujeito, sempre primeiro') },
        { a: T('{tidak}'), b: T('antes do verbo') },
        { a: T('{oleh}'), b: T('depois da passiva') },
        { a: T('{ada}'), b: T('passivo sem verbo') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
