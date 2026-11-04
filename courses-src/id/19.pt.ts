import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  section: T('Advérbio'),
  title: T('O advérbio: posição e os de negação'),
  subtitle: T('vai depois do verbo, mas tidak, bukan e jangan vêm antes'),
  body: C(`## O advérbio vem depois do verbo

A regra é uma linha e cabe num cartão: **o advérbio de modo vai depois do verbo.**

{dia datang cepat} «ele vem rápido». {kami bekerja keras} «nós trabalhamos com força». {dia membaca dengan perhatian} «ele lê com atenção», e não {dia membaca perhatian dengan}.

O português faz a mesma coisa com o advérbio curto ({chegou cedo}, {falou claro}) e outra coisa com o comprido ({falou com uma clareza que ninguém esperava}). O indonésio separa as duas coisas por meio do comprimento do advérbio: o de uma palavra vai grudado no verbo, o de sintagma vai no fim do sintagma verbal. Isso vem na seção adiante, porque é onde a regra simples deixa de valer.

O que nunca acontece é o advérbio antes do verbo. Quem escreve {cepat dia datang} produz uma frase que soa a tradutora, e o leitor tropeça no começo em vez do fim.

## Os três que vêm antes

Três palavras violam a regra, e são as três que o leitor mais precisa conhecer.

{tidak} nega verbo e vem imediatamente antes dele: {dia tidak datang} «ele não vem», {dia tidak datang cepat} «ele não vem rápido». Note que {cepat} fica onde estava, e a negação não se mexe.

{bukan} nega cópula ou nome, e vem antes do verbo ou antes do sintagma que nega: {ini bukan buku} «isto não é um livro», {dia bukan guru} «ele não é professor», {bukan saya yang menulis} «não fui eu que escrevi».

{jangan} é o proibitivo, e ele ocupa a posição do {tidak} numa ordem: {jangan kamu datang} «não venha», {jangan kamu terlalu cepat datang} «não venha rápido demais». Com imperativo, o {lah} não é opcional: {datanglah} «venha», {jangan datanglah} «não venha».

E há um quarto grupo que também vem antes do verbo e que o português resolve com auxiliares: {akan} «vai», {sudah} «já», {sedang} «estar a», {belum} «ainda não». A ordem é a mesma nos quatro: aspecto, depois verbo.

## Advérbio curto e advérbio longo

A regra da primeira seção vale para o advérbio de uma palavra. O de sintagma tem outro lugar, e é por isso que a mesma palavra aparece em duas posições em textos diferentes.

O advérbio de uma palavra é **derivativo**: está ligado ao que ele modifica. {datang cepat} «vir rápido», {bekerja keras} «trabalhar com força», {bicara benar} «falar com verdade». Ele vai logo depois do verbo, e vai sempre.

O advérbio de sintagma é **circunstancial**: descreve a situação inteira, não o verbo. {baca dengan teliti} «ler com cuidado», {berjalan dengan lambat} «caminhar devagar», {bicara dengan tenang} «falar com calma». Ele vai no fim de tudo, depois do verbo **e** do objeto: {dia membaca buku dengan teliti}, não {dia membaca dengan teliti buku}.

Compare os dois com o mesmo conteúdo: {dia membaca dengan teliti} é gramatical e significa «ele lê com atenção»; {dia membaca buku dengan teliti} acrescenta o objeto e é a forma normal quando há objeto. O que não existe é {dia membaca dengan teliti buku}, com o sintagma no meio.

Quando o advérbio de sintagma é uma preposição, ele pode ser deslocado para o começo da frase, e o efeito é de ênfase, não de posição obrigatória: {Dengan teliti dia membaca buku} «com cuidado, ele leu o livro». O português faz o mesmo com «Com cuidado, ele leu».

E há um caso em que o advérbio sai da posição e vai para dentro do verbo, que é o clítico: {datangnya} «a vinda», {keluarannya} «a saída», {tidurnya} «o facto de ele ter dormido». São os advérbios transformados em substantivo, e a leitura bíblica encontra mais desses do que de advérbios soltos.

## Jangan menghakimi, supaya kamu tidak dihakimi

{Matius 7:1} põe as duas metades do sistema na mesma frase: {Janganlah kamu menghakimi, supaya kamu tidak dihakimi}.

Na primeira, {janganlah} é o proibitivo mais um {lah} de ênfase, e ele ocupa a posição do {tidak}. O verbo {menghakimi} está no infinitivo, e isso é uma marca de registro: em ordinário é {kamu jangan menghakimi} ou {jangan menghakimi}.

Na segunda, {supaya} é «para que» e o que vem depois é uma oração completa com {tidak}. Note que o {tidak} voltou para antes do verbo, como sempre, e que o advérbio de modo da primeira oração desapareceu: o verso não repete «do mesmo jeito», e a pessoa que traduz feeling «do mesmo jeito» acrescenta uma palavra que o texto não tem.

A TB conseguiu isso porque {menghakimi} e {dihakimi} são a mesma raiz com prefixos opostos, e porque o advérbio que o grego usaria para o «do mesmo jeito» não existe em indonésio. O leitor que conhece a regra da posição lê as duas orações sem esforço; o que não conhece procura o advérbio que está faltando e não acha.`),
  vocab: [
    V('tidak', 'tidak', 'não (verbo)'),
    V('bukan', 'bukan', 'não (cópula, nome)'),
    V('jangan', 'jangan', 'não (proibição)'),
    V('datang', 'datang', 'vir'),
    V('datanglah', 'datang', 'venha'),
    V('bekerja', 'kerja', 'trabalhar'),
    V('membaca', 'baca', 'ler'),
    V('bicara', 'bicara', 'falar'),
    V('dengan', 'dengan', 'com'),
    V('teliti', 'teliti', 'cuidadoso; cuidadosamente'),
    V('keras', 'keras', 'com força'),
    V('benar', 'benar', 'com verdade'),
    V('sudah', 'sudah', 'já'),
    V('akan', 'akan', 'vai (futuro)'),
    V('sedang', 'sedang', 'estar a (aspecto)'),
    V('menghakimi', 'hakimi', 'julgar'),
    V('dihakimi', 'hakimi', 'ser julgado'),
    V('supaya', 'supaya', 'para que'),
  ],
  rules: [
    { n: '1', text: T('O advérbio de modo de uma palavra vem depois do verbo: {datang cepat}.') },
    {
      n: '2',
      text: T('{tidak} e {bukan} vêm antes do verbo; {jangan} vem no lugar de {tidak} numa ordem.'),
    },
    { n: '3', text: T('Aspecto também vem antes do verbo: {sudah}, {akan}, {sedang}, {belum}.') },
    {
      n: '4',
      text: T(
        'O advérbio de sintagma com preposição vai no fim do sintagma verbal, depois do objeto: {membaca buku dengan teliti}.',
      ),
    },
    {
      n: '5',
      text: T(
        'O advérbio de sintagma pode ir ao começo da frase com efeito de ênfase: {Dengan teliti dia membaca buku}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que não há advérbio antes do verbo'),
      text: T(
        'O português tem advérbio antes do verbo em alguns casos lexicalizados, e o indonésio não tem nenhum. O indonésio não tem, e a ausência é o que faz {cepat datang} soar errado em vez de arcaico.',
      ),
    },
    {
      label: T('A posição de jangan'),
      text: T(
        'Com {jangan} o pronome costuma vir depois, porque o proibitivo tem a força de uma ordem: {jangan kamu datang}. Com {tidak} a ordem se inverte e o pronome vai para a frente: {kamu tidak datang}.',
      ),
    },
  ],
  examples: [
    { text: 'Dia datang cepat.', gloss: T('Ele vem rápido.') },
    { text: 'Dia tidak datang cepat.', gloss: T('Ele não vem rápido.') },
    { text: 'Kita bekerja keras.', gloss: T('Nós trabalhamos com força.') },
    { text: 'Dia membaca buku dengan teliti.', gloss: T('Ele lê o livro com cuidado.') },
    { text: 'Dengan teliti dia membaca buku.', gloss: T('Com cuidado, ele leu o livro.') },
    { text: 'Jangan kamu datang.', gloss: T('Não venha.') },
    { text: 'Jangan datanglah ke sini.', gloss: T('Não venha aqui.') },
    { text: 'Ini bukan buku.', gloss: T('Isto não é um livro.') },
    { text: 'Bukan saya yang menulis.', gloss: T('Não fui eu que escrevi.') },
    { text: 'Dia sudah datang.', gloss: T('Ele já chegou.') },
  ],
  tables: [
    {
      caption: T('Onde cada palavra fica'),
      head: ['Palavra', 'Posição', 'Frase', 'Leia como'],
      rows: [
        ['advérbio de modo', 'depois do verbo', 'datang cepat', 'vem rápido'],
        ['tidak', 'antes do verbo', 'tidak datang', 'não vem'],
        ['bukan', 'antes do verbo ou do nome', 'bukan buku', 'não é livro'],
        ['jangan', 'antes do verbo', 'jangan datang', 'não venha'],
        ['sudah / akan / sedang', 'antes do verbo', 'sudah datang', 'já veio'],
        [
          'advérbio de sintagma',
          'fim do sintagma verbal',
          'baca buku dengan teliti',
          'lê o livro com cuidado',
        ],
      ],
    },
    {
      caption: T('Os dois lugares do advérbio'),
      head: ['Tipo', 'Padrão', 'Exemplo', 'Leia como'],
      rows: [
        ['derivativo', 'V + advérbio', 'bekerja keras', 'trabalhar com força'],
        ['derivativo', 'V + advérbio', 'bicara benar', 'falar com verdade'],
        [
          'circunstancial',
          'V + O + preposição',
          'baca buku dengan teliti',
          'lê o livro com cuidado',
        ],
        ['circunstancial', 'V + preposição', 'bicara dengan tenang', 'fala com calma'],
        [
          'deslocado',
          'preposição + S + V + O',
          'dengan teliti dia baca buku',
          'com cuidado, ele lê o livro',
        ],
        ['nominalizado', 'V + nya', 'datangnya Kristus', 'a vinda de Cristo'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Onde deve ficar {teliti} em {Dia membaca buku ___}?'),
    options: [
      T('no fim: dengan teliti'),
      T('antes do sujeito'),
      T('entre o sujeito e o verbo'),
      T('logo depois do verbo, antes do objeto'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Coloque o proibitivo: «não venha» = ___ kamu datang.'),
      answer: 'Jangan',
      hint: T('A palavra que substitui {tidak} numa ordem.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase está correta?'),
      options: [
        T('Dia membaca dengan teliti buku.'),
        T('Dia membaca buku dengan teliti.'),
        T('Dengan teliti buku dia membaca.'),
        T('Membaca dengan teliti dia buku.'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Ligue a palavra à posição'),
      pairs: [
        { a: T('{cepat}'), b: T('depois do verbo') },
        { a: T('{tidak}'), b: T('antes do verbo') },
        { a: T('{jangan}'), b: T('antes do verbo, em ordem') },
        { a: T('{sudah}'), b: T('antes do verbo, aspecto') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
