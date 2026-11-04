import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  section: T('Leitura'),
  title: T('Leitura: Filipenses 2'),
  subtitle: T('o capítulo mais curto do Novo Testamento, feito de advérbio e partícula'),
  body: C(`## Vinte palavras

{Filipenses 2} tem cinco versículos que contornam o centro do Novo Testamento: a descida de Cristo e a exaltação que vem depois. O texto grego é um hino, com versos paralelos e uma البناء de participais que os gramadores discutem há mil anos. A tradução para quase todas as línguas da Europa ganhou o queridinho de ser cantada em cânticos.

A TB faz o oposto. Onde o grego tem versos que rimam e um ritmo, o indonésio tem vinte palavras numa prosa só. Não há metro, não há refrão, e não há nada para cantar.

O que sobra é a gramática, e é ela que interessa. Vinte palavras de prosa indonésia são quase todas substantivo, advérbio e partícula. É o resumo de tudo o que o curso chegou até aqui.

Leia o capítulo em três passadas. Primeira: quais são os nomes. Segunda: onde estão os advérbios. Terceira: quantas vezes aparece o {yang}.

## Os cinco que você já conhece

O que a TB traz neste capítulo não é novidade. São {yang}, {sebagai}, {-nya}, {akan} e {sudah}, e cada um deles aparece fazendo exatamente o que foi descrito.

{1} {Yang}. Aparece muitas vezes, e nas duas funções. No início da oração, é o relativo que liga um nome a um verbo: a passagem que diz que Cristo {mengosongkan} a si mesmo usa um substantivo seguido de {yang} seguido de verbo. No meio, é a nominalização: o substantivo abstrato que o grego escreve como participio, o indonésio escreve como {yang} mais verbo ou como substantivo puro.

{2} {Sebagai}. Aparece mais de uma vez, e é o que faz o trabalho do instrumental grego. O grego diz «tendo a forma de Deus», e o TB diz {sebagai} mais substantivo. O leitor que conhece {sebagai} como adverbio lê errado: é uma preposição, e o que vem depois dela é um substantivo.

{3} {-nya}. A possession aparece aqui em duas formas. O possessor colado, {diriNya}, que é a terceira pessoa e se refere ao sujeito da oração; e o possessor nominalizado, quando o verbo vira substantivo abstrato com {-nya} e a frase passa a falar de um evento.

{4} {Akan}. Aparece quando o texto olha para frente, e é o futuro da língua. Onde o grego tinha o tempo na terminação, o TB põe {akan} mais verbo. Quem lê procurando flexão não encontra nada que mude e conclui que o texto repete a mesma ideia.

{5} {Sudah}. Aparece no mesmo lugar, olhando para trás, e é o passado da língua. O par {akan} e {sudah} é o relógio inteiro do capítulo, e ele está distribuído em versículos diferentes.

O que {yang} faz em {diriNya} merece uma segunda olhada, porque é o único ponto em que o pronome reflexivo aparece: o grego tem {heauton}, e o indonésio tem {-Nya}. O grego marca a reflexividade na terminação e o indonésio no sufixo, e os dois dizem que a ação recai sobre o sujeito.

## Onde o grego força e o indonésio não

O grego do capítulo é duro por uma razão específica: ele empilha participais. Um versículo típico traz três ou quatro participais em cadeia, cada um modifica o anterior, e o leitor precisa desembaraçar a cadeia para saber o que é sujeito.

O indonésio não empilha, porque não tem participial sintático. Onde o grego tem {being}, o TB tem {sedang} mais verbo. Onde o grego tem {having been}, o TB tem {sudah} mais verbo. Onde o grego tem um particípio absoluto, o TB tem uma oração com {yang}.

O resultado é um texto mais fácil e mais pobre. Mais fácil porque cada passo é um verbo com um advérbio na frente. Mais pobre porque a sobreposição de participais é um recurso de estilo, e estilo se perde quando se troca por gramática.

E há uma coisa que o indonésio não faz aqui, e que o grego faz duas vezes: a anáfora. No grego, os pronomes dos versos seguintes retomam a primeira oração. No indonésio, {diriNya} e {itu} fazem o mesmo serviço com um sufixo e um demonstrativo, e o leitor não percebe que está seguindo um fio que o grego explicitou.

A regra de leitura para um trecho assim é: **procure advérbios antes de procurar sintaxe.** Se você não entende a passagem, olhe para {akan}, {sudah}, {sebagai} e {yang}. São quatro palavras, e quase toda a dificuldade de um versículo indonésio mora nelas.

## O que fazer quando o versículo não faz sentido

Um versículo que parece não ter sentido em indonésio quase sempre tem um destes quatro problemas, e nenhum deles é de vocabulário.

O primeiro é {yang} mal lido. O leitor procura um substantivo atrás do {yang} e não encontra, porque o {yang} é a nominalização. O segundo é {sebagai} lido como adverbio. O terceiro é um advérbio de aspecto traduzido como se fosse tempo: {sudah} é o passado, não o futuro, e uma frase com {sudah} não é uma frase incompleta, é uma frase sobre um resultado.

E o quarto é a ausência de flexão. O versículo grego tem uma informação no verbo que o indonésio põe em outro lugar, e o leitor procura no lugar errado.

É por isso que este capítulo é uma boa leitura mesmo sem o grego. Quem o lê e entende cada advérbio entendeu mais de Fil 2 do que quem o leu de relance e entendeu o refrão.`),
  vocab: [
    V('yang', 'yang', 'que, o que, quem'),
    V('sebagai', 'sebagai', 'como, a título de'),
    V('diriNya', 'diri', 'a si mesmo (dele)'),
    V('akan', 'akan', 'vai'),
    V('sudah', 'sudah', 'já'),
    V('itu', 'itu', 'esse, aquele'),
    V('sedang', 'sedang', 'estar a'),
    V('mengosongkan', 'kosong', 'esvaziar'),
    V('tidak', 'tidak', 'não'),
    V('seperti', 'seperti', 'como'),
    V('Allah', 'Allah', 'Deus'),
    V('Tuhan', 'Tuhan', 'Senhor'),
    V('nama', 'nama', 'nome'),
    V('menerima', 'terima', 'receber'),
    V('melihat', 'lihat', 'ver'),
    V('kita', 'kita', 'nós'),
    V('gereja', 'gereja', 'igreja'),
  ],
  rules: [
    {
      n: '1',
      text: T('Neste capítulo, {yang} é relativo no início das orações e nominalização no meio.'),
    },
    {
      n: '2',
      text: T('{sebagai} é preposição e não adverbio: o que vem depois é um substantivo.'),
    },
    {
      n: '3',
      text: T('{-Nya} em {diriNya} marca reflexividade: a ação recai sobre o sujeito da oração.'),
    },
    {
      n: '4',
      text: T(
        '{akan} e {sudah} são o relógio do capítulo: o primeiro olha para a frente, o segundo para trás.',
      ),
    },
    {
      n: '5',
      text: T(
        'Quando um versículo não faz sentido, procure primeiro os advérbios de aspecto e o {yang}, antes da sintaxe.',
      ),
    },
  ],
  notes: [
    {
      label: T('O que a edição faz'),
      text: T(
        'A redação exata da TB varia entre edições e entre reimpressões, e em um trecho tão cantado como Filipenses 2 é comum encontrar formas alternativas. As formas que este capítulo usa com estabilidade são {yang}, {sebagai}, {-nya}, {akan} e {sudah}; se a sua cópia divergir numa palavra isolada, o sentido não muda.',
      ),
    },
    {
      label: T('Por onde começar a ler Tiago'),
      text: T(
        'Filipenses 2 tem uma vantagem: cada versículo tem uma ideia e o vocabulário se repete. Tiago tem o contrário, e por isso é um texto melhor para quem já leu este.',
      ),
    },
  ],
  examples: [
    { text: 'Ia sendiri mengosongkan diriNya.', gloss: T('Ele mesmo esvaziou a si mesmo.') },
    { text: 'Sebab itu Allah yang exaltou dia.', gloss: T('Therefore God exalted him.') },
    { text: 'Yang kamu baca itu buku.', gloss: T('Aquilo que você lê é um livro.') },
    { text: 'Dia berbicara sebagai wakil.', gloss: T('Falou como representante.') },
    { text: 'Surat itu sudah ditulis.', gloss: T('A carta já foi escrita.') },
    { text: 'Surat itu akan ditulis.', gloss: T('A carta será escrita.') },
    { text: 'Namanya adalah Allah.', gloss: T('O nome dele é Deus.') },
    { text: 'Maka Allah yang exaltasi dia.', gloss: T('And God exalted him.') },
    { text: 'Saudara, aku mencintaimu.', gloss: T('Brother, I love you.') },
    { text: 'Sebab Allah mengasihi kita.', gloss: T('Porque Deus nos ama.') },
  ],
  tables: [
    {
      caption: T('Os cinco elementos do capítulo'),
      head: ['Forma', 'Trabalho no texto', 'Exemplo de função', 'O que Replace em PT'],
      rows: [
        ['yang', 'relativo e nominalização', 'nome + yang + verbo', 'que, o que'],
        ['sebagai', 'instrumental grego', 'sebagai + substantivo', 'como, a título de'],
        ['-Nya', 'reflexivo e genitivo', 'diriNya', 'a si mesmo'],
        ['akan', 'futuro', 'akan + verbo', 'vai, fut.'],
        ['sudah', 'passado', 'sudah + verbo', 'já, pass.'],
      ],
    },
    {
      caption: T('Grego contra indonésio no mesmo trecho'),
      head: ['Grego', 'Papel', 'Indonésio', 'Perda ou ganho'],
      rows: [
        ['particípio', 'voz e tempo juntos', 'sedang + verbo', 'mais simples'],
        ['particípio perfeito', 'ação prévia', 'sudah + verbo', 'mais simples'],
        ['particípio absoluto', 'ação independente', 'oração com yang', 'mais longa'],
        ['instrumental', 'meio ou forma', 'sebagai + nome', 'uma palavra'],
        ['anáfora', 'fio do texto', 'diriNya, itu', 'mais discreta'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Ia sendiri mengosongkan diriNya}, o que {-Nya} marca?'),
    options: [T('reflexividade: a si mesmo'), T('plural'), T('negação'), T('futuro')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: «Ele já escreveu» = Dia ___ menulis surat.'),
      answer: 'sudah',
      hint: T('O advérbio que olha para trás.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual palavra do capítulo é uma preposição, não um advérbio?'),
      options: [T('sebagai'), T('akan'), T('sudah'), T('itu')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue a forma à função no texto'),
      pairs: [
        { a: T('{yang}'), b: T('relativo ou nominalização') },
        { a: T('{sebagai}'), b: T('forma, meio') },
        { a: T('{akan}'), b: T('futuro') },
        { a: T('{sudah}'), b: T('passado') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
