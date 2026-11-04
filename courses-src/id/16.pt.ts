import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  section: T('Partícula'),
  title: T('Os quantificadores'),
  subtitle: T('ada, adalah, banyak, semua, lebih, paling: o par que mais trava a leitura'),
  body: C(`## Existir e ser

Dois verbos que o português traduz com um, e que não fazem a mesma coisa.

{ada} responde {existe?}. {Ada masalah} é «há um problema», {Ada tiga buku di meja} é «há três livros na mesa», {Ada orang di pintu} é «há alguém na porta». O sujeito de {ada} não é identificado: a frase diz que a coisa está ali, e não diz qual é. Por isso {ada} é ao mesmo tempo verbo de existir e quantificador existencial, e é o segundo uso que aparece o tempo todo: {ada} sozinho, no sentido de «algum», é mais natural do que qualquer palavra feita para isso.

{adalah} responde {o que é?}. {Ini adalah buku} é «isto é um livro», {Buku itu adalah milikku} é «aquele livro é meu». O sujeito é identificado ou classificado, e nunca desaparece: em quase toda frase com {adalah} dá para perguntar «qual?».

A confusão entre os dois é o erro mais caro que existe em indonésio para quem lê. Uma frase que o leitor traduz por «é» pode ser {ada} no original, e o resultado é uma Tradução que afirma uma identidade que o texto não afirma.

## O teste que separa as duas

Uma pergunta resolve: **a frase responde a «existe?» ou a «o que é?»**.

{Ada buku baru di toko.} Responde «existe?». Há um livro novo, e a frase não diz nada sobre ele além disso. Português: «Há um livro novo na loja».

{Buku itu adalah buku baru.} Responde «o que é?». Identifica o livro. Português: «Aquele livro é um livro novo».

{Hanya ada satu jalan ke kota.} Responde «existe?». Um caminho, e só um. {Jalannya adalah satu-satunya jalan.} Responde «o que é?».

O par {ada} e {adalah} tem ainda uma assimetria que pega: {ada} pode ser negado por {tidak} ({tidak ada}, «não há») e por {bukan} ({bukan ada}, «não existe»); {adalah} é negado por {bukan} ({bukan benar}, «não é verdadeiro») e por {tidak} em perguntas ({tidak apakah...}). E a resposta a {adalah} negativo é sempre {bukan}, nunca {tidak}: {Ini bukan buku}, não {Ini tidak buku}.

Um caso especial: com pronombre como sujeito, {adalah} às vezes cai na fala corrente. {Saya murid} «sou estudante» é coloquial e enfático; {Saya adalah murid} é a forma completa e é a que aparece nos textos.

## Quantificadores: quanto, qual, o mais

O grupo inteiro responde a perguntas diferentes, e o lugar dele é o mesmo: antes do substantivo.

{banyak} é o mais comum e significa «muitos». {sedikit} é o oposto, «poucos», e com substantivos contáveis significa «poucos» e não «pequeno». {beberapa} é «alguns», normalmente entre dois e quatro, e é mais formal que {sedikit}. {semua} é «todos», {seluruh} é «todo, inteiro», e os dois se distinguem pouco na prática.

{cukup} é «o bastante», e pode vir antes do nome ({cukup waktu} «tempo bastante») ou depois do verbo ({sudah cukup} «já chega»). {agak} é «um pouco», {banyak} com verbo é «muito»: {banyak bekerja} «trabalha muito».

A parte que o português resolve com flexão é a comparação. **{lebih} mais adjetivo é o comparativo, {paling} mais adjetivo é o superlativo.** {lebih besar} «maior», {paling besar} «o maior», {kurang baik} «pior», {sebanyak} «tanto quanto».

O superlativo de {paling} não se traduz por «mais»: é a mesma palavra com sentido de grau máximo, e quem escreve {yang paling lebih baik} repetiu o grau duas vezes.

E há um quantificador que não quantifica nada: {itu}, que já apareceu como demonstrativo. {buku itu} é «aquele livro», não «o livro todo».

## O que existe no mundo

{1 João 2:15} é um versículo feito quase só de quantificadores, e por isso é um bom teste de leitura: a TB pede que o leitor não ame {dunia} nem {apa yang ada di dalam dunia}, e o segundo {yang} é a nominalização do verbo {ada}.

O contraste está em {ada}, e é um contraste de escopo. O versículo fala de duas coisas: o que existe e o que está dentro disso. O português resolve com «o mundo e tudo o que nele há», que é uma construção pesada que parece um romance. O indonésio repete a mesma palavra: {dunia}, e depois {apa yang ada di dalam dunia}. O leitor que conhece {ada} como «ser» vai ler «o mundo e o que está no mundo», que é o mesmo sentido com uma ligação errada; o leitor que conhece {ada} como «haver» chega lá sem esforço.

É esse o motivo de a lição existir. Um par de palavras decide se a pessoa entende um versículo, e ninguém ensina o par por ele ser pequeno.`),
  vocab: [
    V('ada', 'ada', 'haver, existir; alguns'),
    V('adalah', 'adalah', 'ser, é (identifica)'),
    V('banyak', 'banyak', 'muitos; muito'),
    V('sedikit', 'sedikit', 'poucos; pouco'),
    V('beberapa', 'beberapa', 'alguns'),
    V('semua', 'semua', 'todos'),
    V('seluruh', 'seluruh', 'todo, inteiro'),
    V('cukup', 'cukup', 'o bastante'),
    V('agak', 'agak', 'um pouco'),
    V('lebih', 'lebih', 'mais (comparativo)'),
    V('paling', 'paling', 'o mais (superlativo)'),
    V('kurang', 'kurang', 'menos; pior'),
    V('masalah', 'masalah', 'problema'),
    V('toko', 'toko', 'loja'),
    V('dunia', 'dunia', 'mundo'),
    V('bukan', 'bukan', 'não (verbo de cópula e de nome)'),
    V('tidak', 'tidak', 'não (verbo)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{ada} responde «existe?»; {adalah} responde «o que é?». O sujeito de {ada} não é identificado.',
      ),
    },
    {
      n: '2',
      text: T(
        'O singular de {ada} no sentido de «algum» é {ada} sozinho; {adanya} é a forma nominalizada.',
      ),
    },
    {
      n: '3',
      text: T(
        'A resposta a {adalah} negativo é sempre {bukan}: {ini bukan buku}, nunca {ini tidak buku}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{lebih} mais adjetivo é comparativo e {paling} mais adjetivo é superlativo; {kurang} é «menos» e «pior».',
      ),
    },
    {
      n: '5',
      text: T(
        'Quantificadores como {banyak}, {sedikit}, {semua} e {cukup} vêm antes do substantivo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Ter e existir'),
      text: T(
        'Em português «ter» e «haver» quase se fundiram. Em indonésio não: existir é {ada}, ter é {punya} ou {milik}. {Saya punya rumah} é «tenho uma casa», {ada rumah} é «há uma casa». Confundir os dois inverte a direção da posse.',
      ),
    },
    {
      label: T('O escopo de ada'),
      text: T(
        '{ada} cobre a frase inteira como quantificador existencial, e é por isso que o escopo dele é amplo: {ada yang benar} é «há algo certo», não «existe o que é verdadeiro» em sentido restrito.',
      ),
    },
  ],
  examples: [
    { text: 'Ada masalah besar di sini.', gloss: T('Há um grande problema aqui.') },
    { text: 'Ada tiga buku di meja.', gloss: T('Há três livros na mesa.') },
    { text: 'Buku itu adalah buku baru.', gloss: T('Aquele livro é um livro novo.') },
    { text: 'Ini bukan buku.', gloss: T('Isto não é um livro.') },
    { text: 'Banyak orang datang hari itu.', gloss: T('Muitas pessoas vieram naquele dia.') },
    { text: 'Sedikit waktu tersisa.', gloss: T('Resta pouco tempo.') },
    { text: 'Semua kitab kudus.', gloss: T('Toda a Escritura.') },
    { text: 'Rumah ini lebih besar dari itu.', gloss: T('Esta casa es maior que aquela.') },
    { text: 'Inilah yang paling penting.', gloss: T('Esto es lo más importante.') },
    { text: 'Hanya ada satu jalan ke kota.', gloss: T('Há apenas un camino hacia la ciudad.') },
  ],
  tables: [
    {
      caption: T('O teste entre ada dan adalah'),
      head: ['Pergunta', 'Verbo', 'Frase', 'Leia como'],
      rows: [
        ['existe?', 'ada', 'Ada masalah di sini.', 'Há um problema aqui'],
        ['existe?', 'ada', 'Ada orang di pintu.', 'Há alguém na porta'],
        ['existe?', 'ada', 'Ada tiga buku.', 'Há três livros'],
        ['o que é?', 'adalah', 'Ini adalah buku.', 'Isto é um livro'],
        ['o que é?', 'adalah', 'Buku itu milikku.', 'Aquele livro é meu'],
        ['o que é?', 'adalah', 'Dia adalah guru.', 'Ele é professor'],
      ],
    },
    {
      caption: T('Os quantificadores e o que respondem'),
      head: ['Palavra', 'Pergunta', 'Exemplo', 'Leia como'],
      rows: [
        ['ada', 'existe?', 'ada masalah', 'há um problema'],
        ['banyak', 'quanto?', 'banyak buku', 'muitos livros'],
        ['sedikit', 'quanto?', 'sedikit waktu', 'pouco tempo'],
        ['beberapa', 'quanto?', 'beberapa hari', 'algunos días'],
        ['semua', 'qual?', 'semua orang', 'toda la gente'],
        ['cukup', 'quanto basta?', 'cukup waktu', 'tiempo bastante'],
        ['lebih', 'comparação', 'lebih besar', 'mayor'],
        ['paling', 'grau máximo', 'paling besar', 'el mayor'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Ada dua orang di depan pintu}, quantos são e o que a frase afirma?'),
    options: [
      T('dois; que duas pessoas estão lá'),
      T('dois; que a porta é azul'),
      T('não se sabe; que há alguém'),
      T('dois; que são irmãos'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Preencha o verbo de identificação: «Isto é um livro» = Ini ___ buku.'),
      answer: 'adalah',
      hint: T('O verbo que responde «o que é?».'),
    },
    {
      kind: 'choose',
      prompt: T('Como se diz «a mais importante de todas»?'),
      options: [
        T('paling penting dari semua'),
        T('lebih penting'),
        T('paling lebih penting'),
        T('lebih paling penting'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue o quantificador ao seu valor'),
      pairs: [
        { a: T('{ada}'), b: T('existe') },
        { a: T('{semua}'), b: T('todo') },
        { a: T('{lebih besar}'), b: T('maior') },
        { a: T('{paling besar}'), b: T('o maior') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
