import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  section: T('Substantivo'),
  title: T('Contadores: o "um" que o português omite'),
  subtitle: T(
    'Depois de um numeral o coreano obriga a um contador, e o substantivo vem por último: numeral, contador, substantivo',
  ),
  body: C(`## O "um" que o português apaga

Em português, "eu tenho um livro" tem duas peças que quase não são palavras: o "eu" e o "um". O "um" é artigo indeterminado, e artigo é palavra que evapora. Ninguém o traduz, ninguém pergunta por ele, ninguém repara que ele estava ali. Em coreano {hann} é palavra comum, com som e com função, e depois de um numeral a língua exige uma segunda palavra que o português dispensa: o contador. Por isso "um livro" não é {seojeul}, nem {hann} {seojeul}. É {hann} {gwon} {seojeul}, e as duas peças do meio são obrigatórias.

O lado a lado mostra o que está em jogo. De um lado, eu tenho um livro: quatro palavras, e duas delas são descartáveis. Do outro, {je chaegi han gwon-i itda}: a mesma informação, com numeral, com contador e com partícula de sujeito, e nenhuma delas removível. Quem traduz do português para o coreano palavra por palavra escreve {hann} {seojeul}, a frase que todo mundo começa a dizer e que ninguém entende direito: o {gwon} sumiu, e com ele a informação do formato da coisa.

Isto vale para todos os numerais, não só para o "um". {hann} {myeong}, uma pessoa; {hann} {cha}, uma folha; {hann} {gwon} {seojeul}, um livro; {hann} {dae}, uma máquina. O numeral é sempre {hann} quando é um, e o contador é sempre a segunda palavra. A regra é mecânica e não tem exceção: numeral sem contador é frase errada.

## A ordem: numeral, contador, substantivo

A ordem é numeral, contador, substantivo, e o substantivo vem por último. Três livros é sam, {gwon}, {seojeul}: três mais contador mais livro. Não é "livro três", nem "três livro contador". O substantivo fecha o grupo, e é o que a primeira lição mostrou para a frase inteira: a ordem é objeto, verbo, sujeito, e o objeto também se comporta como uma coisa, com o detalhe dele no fim.

E é por isso que o "de" da posse vai ANTES. "Meu livro" é {ui} {seojeul}: de, livro. O possessor vem primeiro, como no japonês, e como na maior parte das línguas que este curso compara. Aqui fica específico dos numerais: {ui} {seojeul}, o meu livro, e sam {gwon} {ui} {seojeul}, três dos meus livros. O numeral e o contador abrem o grupo, o {ui} entra no meio, o substantivo fecha. Errar aqui não é erro de estilo: {seojeul} {ui} não é uma coisa que exista em coreano.

**O gancho bíblico está em João 6:9**: cinco pães e dois peixes. Em coreano, {ppang dase gwaeo murgogi du mari}, pão, cinco, e peixe, dois, com contador antes de cada substantivo e sem artigo nenhum. O português entrega os dois numerais e esquece os dois contadores, porque artigo é isso que ele faz; o coreano não tem como esquecer: cada um dos cinco pães é contado, cada um dos dois peixes também, e o verso inteiro cabe em duas vezes "numeral, contador, substantivo".

## O contador descreve o tipo de objeto

O contador não diz o número; quem diz o número é o numeral. O contador diz o TIPO da coisa que se está contando, e por isso cada substantivo tem o seu. {gwon} é o contador das coisas que são livro, folha de papel enrolada, rolo: o objeto comprido e comprido de lado. {myeong} é o das pessoas. {cha} é o das folhas e do que é plano e fino, papel, prato, disco. {dae} é o das máquinas e dos carros, e também o das coisas que têm pernas. {byeol} é o contador de objetos de tipos diferentes, o "isto e aquilo" da contagem. E {jae} é o contador geral: a coisa sem formato definido, o "coisa" do coreano.

A lógica serve mais que a lista decorada. Quem lembra que {dae} nasceu como "uma plataforma, uma máquina" acerta carro sem pensar. E os dois contadores mais inesperados vêm da mesma lembrança: {myeong} e {dae} são contadores de patas. Historicamente contavam-se as coisas domesticadas, e elas se contavam pelas patas; por isso {dae} ficou com o que tem pernas e {myeong} ficou com as pessoas, que também andam. Um animal não leva {myeong}, leva o contador dos animais, o mari para o cachorro e o peixe, e o contador das frutas e das peças é outro, que não é nenhum dos dois.

Guarde o contador pelo formato: {cha} é a chapa lisa, {gwon} é o rolo de papel, {dae} é a máquina. Quem raciocina por imagem erra menos que quem decorou lista, porque não há lista que decore o contador do objeto que aparece pela primeira vez no texto bíblico.

## A pronúncia muda; alguns, muitos, todos

Há um detalhe técnico que assusta o iniciante: o número mexe na pronúncia da palavra que vem depois. Em coreano isso acontece com o contador. De um a nove o contador tem uma pronúncia; a partir de dez, tem outra. Três livros é sam {gwon}; treze livros é sipsam {gwon}, a escrita do contador é a mesma, a pronúncia é outra. E o numeral um é a exceção: {hann}, que continua com a pronúncia curta mesmo quando a regra mandaria a outra.

A origem disso é um resto da contagem falada. Número grande nem sempre se diz de cinco em cinco; diz-se de três em três, e o "e três" cola-se ao que vem antes. O que era número vira palavra, e a palavra carrega a marca do grupo a que pertence. A escrita não muda, e é por isso que ler coreano em silêncio pronuncia quase tudo errado: o texto impresso não mostra qual pronúncia do contador usar.

"Alguns" é {myeochi} mais contador, sem numeral: {myeochi} {gwon} {seojeul}, alguns livros. "Muitos" é {man} mais contador: {man} {gwon} {seojeul}. "Todos" é {jeong} ou {dae} mais o substantivo: {jeong} {seojeul}, todos os livros. Repare que "alguns" não é numeral nenhum: é uma palavra que ocupa o lugar do numeral, e o contador continua obrigatório depois dela.
`),
  vocab: [
    V('hann', '한', 'um; o numeral coreano, sempre com consoante final (hann)'),
    V('jae', '개', 'contador geral de coisas e objetos (jae)'),
    V('myeong', '명', 'contador de pessoas (myeong)'),
    V('cha', '차', 'contador de folhas, papéis e discos (cha)'),
    V('gwon', '권', 'contador de livros e de rolos de papel (gwon)'),
    V('dae', '대', 'contador de máquinas, carros e coisas com pernas (dae)'),
    V('byeol', '별', 'contador de objetos de tipos diferentes (byeol)'),
    V('ui', '의', 'de; de posse, e vai antes do substantivo (ui)'),
    V('myeochi', '몇', 'alguns; alguns, sem numeral (myeochi)'),
    V('man', '만', 'muitos; só (man)'),
    V('jeong', '전', 'todos; todo (jeong)'),
    V('seojeul', '책', 'livro (seojeul)'),
    V('dase', '다섯', 'cinco (dase)'),
    V('ppang', '빵', 'pão; pão do versículo de João 6:9 (ppang)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Depois de um numeral o contador é obrigatório: "um livro" é {hann} + {gwon} + {seojeul}. O "um" do português é artigo e some; no coreano é palavra.',
      ),
    },
    {
      n: '2',
      text: T(
        'A ordem é numeral, contador, substantivo — o substantivo por último, como em toda a frase coreana: sam {gwon} {seojeul} são três livros.',
      ),
    },
    {
      n: '3',
      text: T(
        'O contador descreve o tipo de objeto, não a quantidade: {myeong} para pessoas, {cha} para folhas, {gwon} para livros, {dae} para máquinas e coisas com pernas, {byeol} para objetos de tipos diferentes, {jae} para coisas em geral.',
      ),
    },
    {
      n: '4',
      text: T(
        'O {ui} de posse vai antes do substantivo: {ui} {seojeul} é "meu livro", e sam {gwon} {ui} {seojeul} são "três dos meus livros".',
      ),
    },
    {
      n: '5',
      text: T(
        'De 1 a 9 o contador tem uma pronúncia e a partir de 10 tem outra; o 1 é exceção. A escrita não muda. "Alguns" é {myeochi} + contador, "muitos" é {man} + contador, "todos" é {jeong} + substantivo.',
      ),
    },
  ],
  notes: [
    {
      label: T('O {ui} vem antes, e o substantivo fecha'),
      text: T(
        'O "de" da posse abre o grupo nominal e o substantivo o fecha. Por isso o iniciante escreve corretamente {ui} {seojeul} e escreve {seojeul} {ui} quando tenta ser meticuloso com o "de". Depois de numeral não muda: {seojeul} {ui} tampouco existe.',
      ),
    },
    {
      label: T('Contadores que nasceram de patas'),
      text: T(
        '{myeong}, de pessoas, e {dae}, de coisas com pernas, vêm da mesma origem: contavam-se as coisas domesticadas e elas se contavam pelos pés. Por isso {dae} conta hoje carros e máquinas, e {myeong} conta passageiros e pessoas.',
      ),
    },
  ],
  examples: [
    {
      text: '책 한 권이 있어요',
      gloss: T('chaek han gwon-i isseoyo — há um livro: numeral, contador, substantivo'),
    },
    {
      text: '제 책이 두 권 있어요',
      gloss: T('je chaegi du gwon isseoyo — eu tenho dois livros: o numeral mudou, o contador não'),
    },
    {
      text: '빵 다섯 개와 물고기 두 마리',
      gloss: T(
        'ppang dase gwaeo murgogi du mari — cinco pães e dois peixes (João 6:9): numeral, contador, substantivo duas vezes',
      ),
    },
    {
      text: '몇 권이 있어요',
      gloss: T('myeochi gwon-i isseoyo — há alguns livros: sem numeral, e o contador continua lá'),
    },
  ],
  tables: [
    {
      caption: T('Os contadores mais comuns e o que cada um conta'),
      head: [T('Contador'), T('Romanização'), T('O que conta'), T('O tipo de objeto')],
      rows: [
        [
          T('{jae}'),
          T('jae'),
          T('coisas em geral, sem formato definido'),
          T('a "coisa" do coreano'),
        ],
        [T('{myeong}'), T('myeong'), T('pessoas'), T('o que anda sobre dois pés')],
        [
          T('{cha}'),
          T('cha'),
          T('folhas, papéis, pratos, discos'),
          T('plano e fino, uma chapa lisa'),
        ],
        [T('{gwon}'), T('gwon'), T('livros, rolos de papel'), T('comprido e comprido de lado')],
        [
          T('{dae}'),
          T('dae'),
          T('máquinas, carros, coisas com pernas'),
          T('a plataforma, o que se apoia'),
        ],
        [
          T('{byeol}'),
          T('byeol'),
          T('objetos de tipos diferentes'),
          T('isto e aquilo da contagem'),
        ],
      ],
    },
    {
      caption: T('A pronúncia do contador muda com o número; a escrita, não'),
      head: [T('Numeral'), T('O que acontece com o contador'), T('Exemplo')],
      rows: [
        [T('de 1 a 9'), T('uma pronúncia, a mais simples'), T('sam gwon — três livros')],
        [
          T('a partir de 10'),
          T('outra pronúncia, a mesma escrita'),
          T('sipsam gwon — treze livros'),
        ],
        [T('o numeral 1'), T('exceção: volta à pronúncia curta'), T('han gwon — um livro')],
        [
          T('sem numeral'),
          T('a forma mais simples, sem número'),
          T('myeochi gwon — alguns livros'),
        ],
      ],
    },
    {
      caption: T('Numeral, contador, substantivo — e o {ui} de posse antes'),
      head: [T('O que se diz'), T('Por partes no coreano'), T('O que a peça faz')],
      rows: [
        [T('um livro'), T('{hann} + {gwon} + {seojeul}'), T('o "um" é palavra, não artigo')],
        [T('três livros'), T('sam + {gwon} + {seojeul}'), T('numeral, contador, substantivo')],
        [T('o meu livro'), T('{ui} + {seojeul}'), T('o possessor vem antes')],
        [
          T('três dos meus livros'),
          T('sam + {gwon} + {ui} + {seojeul}'),
          T('o {ui} entra depois do contador'),
        ],
        [
          T('{seojeul} {ui}'),
          T('não existe em coreano'),
          T('o possessor depois do substantivo é erro'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em coreano, "um livro" é:'),
    options: [
      T('numeral, contador e substantivo'),
      T('só o substantivo, como em português'),
      T('numeral e substantivo, sem contador'),
      T('contador e substantivo, sem numeral'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "três livros" com o contador de livros: sam ____ seojeul'),
      answer: '권',
    },
    {
      kind: 'match',
      prompt: T('Ligue o contador ao tipo de objeto que ele conta'),
      pairs: [
        { a: T('{gwon}'), b: T('livros e rolos de papel') },
        { a: T('{myeong}'), b: T('pessoas') },
        { a: T('{cha}'), b: T('folhas, papéis e discos') },
        { a: T('{byeol}'), b: T('objetos de tipos diferentes') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Como se diz "alguns livros", sem numerar?'),
      options: [
        T('{myeochi} + {gwon}'),
        T('{hann} + {gwon}'),
        T('{man} + {seojeul}'),
        T('{jeong} + {gwon}'),
      ],
      answer: 0,
    },
  ],
};
