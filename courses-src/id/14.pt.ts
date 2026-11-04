import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  section: T('O nome'),
  title: T('O plural'),
  subtitle: T('buku é «o livro» e «os livros»: o número está em outro lugar'),
  body: C(`## O substantivo não sabe quantos são

{buku} é o livro e os livros. {rumah} é a casa e as casas. O substantivo indonésio não tem plural, não tem número, e não tem como ter: a forma é uma só e acabou. Quem traduz do português procura um sinal de plural no nome e não encontra nenhum, porque não existe.

Isso não é omissão. É uma decisão da língua, e ela obriga a uma pergunta que o leitor faz mal de propósito: onde está o número? A resposta é que o número vive no resto da frase. Ele aparece num numeral ({tiga buku}), num quantificador ({banyak buku}), num demonstrativo plural ({semua buku}, {kedua buku}) ou dentro do próprio substantivo, na forma reduzida ({buku-buku}).

A consequência prática é que {buku} sozinho é ambíguo em português e não é ambíguo em indonésio. Quem lê precisa saber que o português guardou o plural dentro do substantivo e que o indonésio não fez nada disso.

## Onde o número mora

Quatro lugares, e nenhum deles é o substantivo.

{1} Numeral. {tiga buku}, {sepuluh rumah}, {seratus orang}. O numeral vem antes do substantivo, e é a forma mais direta de dizer «mais de um».

{2} Quantificador. {banyak buku} «muitos livros», {sedikit buku} «poucos livros», {beberapa buku} «alguns livros». {banyak} é o mais comum e não exige numeral junto.

{3} Demonstrativo de totalidade. {semua buku} «todos os livros», {kedua buku} «os dois livros», {ketiganya} «os três», {mereka-mereka} «cada um deles».

{4} Redução. {buku-buku}, {anak-anak}, {orang-orang}, {rumah-rumah}. A forma repetida aparece quando o substantivo volta a ser o sintagma, e não quando vem depois de um numeral.

O ponto que mais engana está na direção: em português o plural é um accidents que o substantivo carrega sozinho; em indonésio é uma decisão da frase. Por isso a mesma frase pode virar outra coisa sem mudar uma letra do substantivo.

## Redução: o plural que mora dentro da palavra

A redução é a repetição da base, inteira ou parcialmente. É a única maneira de o próprio substantivo carregar o plural, e por isso é o único ponto em que o plural indonésio se parece com o português.

A redução integral repete a palavra inteira: {buku} → {buku-buku}, {anak} → {anak-anak}, {orang} → {orang-orang}. Ela vale para substantivos nativos de uma ou duas sílabas, e é corrente na prosa bíblica. Uma ressalva: {buku-buku} é plural e também pode soar a «vários livros», com tom de variedade.

A redução parcial entra junto com {se-} e com o classificador: {seorang} «uma pessoa», {seekor} «um animal», {sebiji} «um grão», {sebuah} «um objeto». Aqui não há plural nenhum: {se-} marca um, e o classificador é que diz de que tipo de coisa se trata.

E há um terceiro grupo, com {ber-} mais numeral, que significa «em grupos de»: {berdua} «os dois, em dupla», {bertiga} «em grupos de três», {berlima} «em grupos de cinco». É uma forma de contar que o português não tem e que aparece em orações como «os dois estavam de acordo».

A redução integral e a parcial não se trocam. {orang-orang} é plural; {seorang} é singular; {banyak orang} também é plural, e é mais comum na fala corrente do que {orang-orang}, que soa literário quando o substantivo é contável.

## Pintu yang sempit, jalannya sesak

{Matius 7:13} tem o par mais limpo que existe em indonésio: {Masuklah melalui pintu yang sempit, sebab sempitlah pintu dan sesak jalannya}. O português precisa de dois plurais, um em cada termo, e às vezes um terceiro no verbo: {as portas estreitas}, {o caminho apertado}. O indonésio escreve {pintu} duas vezes e {jalannya} uma vez, e a diferença que o grego fazia com o artigo aparece apenas num {yang} e num clítico {-nya}.

O leitor que traduz palavra por palavra escreve {pintu-pintu yang sempit}, que não é errado, e depois {pintu sempit} para o segundo termo, que perde o plural sem querer. Os dois significam a mesma coisa no português e não significam a mesma coisa em indonésio: o primeiro afirma que existem várias portas, o segundo fala de uma porta qualquer. Nas traduções biblicas o mais comum é que o segundo apareça, e ninguém estranha, porque a informação já está no contexto.

Um caso em que a perda é visível: {mobil saya} pode ser «o meu carro» e «os meus carros», e as duas frases são rigorosamente a mesma. Em português a diferença está no substantivo; em indonésio ela só pode estar em {satu}, {kedua}, {banyak} ou na redução, e se nenhum deles aparecer, o leitor não tem como saber. A tradutora opta por uma das duas leituras e o contexto decide por ela, não a palavra.`),
  vocab: [
    V('buku', 'buku', 'livro'),
    V('buku-buku', 'buku', 'livros (redução)'),
    V('rumah', 'rumah', 'casa'),
    V('rumah-rumah', 'rumah', 'casas (redução)'),
    V('anak-anak', 'anak', 'crianças, filhos (redução)'),
    V('orang', 'orang', 'pessoa; classificador de pessoas'),
    V('orang-orang', 'orang', 'pessoas (redução)'),
    V('tiga', 'tiga', 'três'),
    V('sepuluh', 'sepuluh', 'dez'),
    V('seratus', 'seratus', 'cem'),
    V('banyak', 'banyak', 'muitos'),
    V('sedikit', 'sedikit', 'poucos'),
    V('beberapa', 'beberapa', 'alguns'),
    V('semua', 'semua', 'todos, todo'),
    V('keduanya', 'dua', 'os dois'),
    V('berdua', 'dua', 'em dupla, os dois juntos'),
    V('pintu', 'pintu', 'porta'),
    V('jalannya', 'jalan', 'o caminho (dela)'),
  ],
  rules: [
    {
      n: '1',
      text: T('O substantivo indonésio não marca plural: {buku} é «o livro» e «os livros».'),
    },
    {
      n: '2',
      text: T(
        'O número vive no numeral, no quantificador, no demonstrativo de totalidade ou na redução.',
      ),
    },
    {
      n: '3',
      text: T(
        'A redução integral ({buku-buku}) é plural; a redução parcial com {se-} ({seorang}) é singular.',
      ),
    },
    {
      n: '4',
      text: T(
        '{semua} e {keduanya} são quantificadores de totalidade e substituem o plural do português.',
      ),
    },
    {
      n: '5',
      text: T('{ber-} mais numeral significa «em grupos de»: {berdua}, {bertiga}, {berlima}.'),
    },
  ],
  notes: [
    {
      label: T('Quando a redução soa diferente'),
      text: T(
        'Em {buku-buku} o tom é de pluralidade genérica, «livros vários». Em {anak-anak} o tom é familiar. Em orações litúrgicas a redução integral soa mais elevada que {banyak anak}.',
      ),
    },
    {
      label: T('Empréstimos e redução'),
      text: T(
        'A redução integral funciona melhor em substantivos nativos curtos. Em palavras emprestadas o plural corrente é {banyak + substantivo} ou numeral, e a redução soa coloquial: {mobil-mobil} é aceito, mas {banyak mobil} é mais formal.',
      ),
    },
  ],
  examples: [
    { text: 'Buku itu ada di meja.', gloss: T('O livro está na mesa (ou: os livros estão).') },
    { text: 'Banyak buku di meja.', gloss: T('Muitos livros na mesa.') },
    { text: 'Tiga buku di meja.', gloss: T('Três livros na mesa.') },
    { text: 'Anak-anak bermain di halaman.', gloss: T('As crianças brincam no pátio.') },
    { text: 'Orang-orang sudah datang.', gloss: T('As pessoas já chegaram.') },
    { text: 'Setiap orang membawa seekor domba.', gloss: T('Cada pessoa traz uma ovelha.') },
    { text: 'Mereka berdua pergi ke kota.', gloss: T('Os dois foram juntos para a cidade.') },
    { text: 'Semua kitab kudus.', gloss: T('Toda a Escritura.') },
    { text: 'Rumah-rumah itu kosong semua.', gloss: T('Aquelas casas estão todas vazias.') },
  ],
  tables: [
    {
      caption: T('Onde o número mora'),
      head: ['Recurso', 'Exemplo', 'Leia como', 'Valor'],
      rows: [
        ['numeral', 'tiga buku', 'três livros', 'contagem exata'],
        ['quantificador', 'banyak buku', 'muitos livros', 'quantidade indefinida'],
        ['totalidade', 'semua buku', 'todos os livros', 'conjunto inteiro'],
        ['parcial', 'keduanya', 'os dois livros', 'conjunto determinado'],
        ['redução integral', 'buku-buku', 'livros', 'plural dentro do nome'],
      ],
    },
    {
      caption: T('Redução integral e redução parcial'),
      head: ['Tipo', 'Padrão', 'Exemplo', 'Número'],
      rows: [
        ['integral, 1 sílaba', 'buku → buku-buku', 'buku-buku', 'plural'],
        ['integral, 2 sílabas', 'anak → anak-anak', 'anak-anak', 'plural'],
        ['integral, pessoa', 'orang → orang-orang', 'orang-orang', 'plural'],
        ['parcial com se-', 'se- + classificador', 'seorang', 'singular, um'],
        ['parcial com se-', 'se- + classificador', 'seekor', 'singular, um'],
        ['coletiva com ber-', 'ber- + numeral', 'berdua', 'grupo de dois'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se diz «os livros» sem numeral e sem quantificador?'),
    options: [T('buku-buku'), T('buku'), T('seorang buku'), T('para buku')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o plural por redução: «as crianças» = ___.'),
      answer: 'anak-anak',
      hint: T('Reduza a base inteira.'),
    },
    {
      kind: 'choose',
      prompt: T('O que significa {berdua}?'),
      options: [T('os dois juntos'), T('dois anos'), T('a segunda vez'), T('duas vezes')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue o substantivo ao número'),
      pairs: [
        { a: T('{tiga}'), b: T('exato') },
        { a: T('{banyak}'), b: T('indefinido') },
        { a: T('{semua}'), b: T('total') },
        { a: T('{berlima}'), b: T('em grupos de cinco') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
