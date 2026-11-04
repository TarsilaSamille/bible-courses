import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  section: T('Substantivo'),
  title: T('Contadores e a partícula {の}: a mesma palavra, quantidades diferentes'),
  subtitle: T(
    'O japonês obliqua o artigo e não tem plural: quem conta é um kanji com sentido literal, e quem liga um substantivo ao outro é {の}',
  ),
  body: C(`
## Não existe artigo: existe contador

O português obliqua o artigo. Duas coisas viram "as duas coisas"; em japonês o "as" simplesmente não está lá. Não há palavra para "o" nem para "a" no sentido definido, e o que substitui o plural é um **contador**: um kanji escolhido pelo **formato** da coisa e com um sentido literal próprio.

Por isso {三本} são três livros, nomeados um a um, e não "livros" de catálogo; {二人} são duas pessoas, {六つ} são seis coisas quaisquer. Um substantivo sozinho não marca pluralidade: {本} sem contador vale um livro, ou livros, indeterminado. É o contador que decide, e cada substantivo tem o seu.

## Seis contadores e o sentido literal de cada um

{本} conta o que é comprido e comprido de lado, e a raiz do kanji é "origem", de "rolar um pergaminho": o livro japonês antigo era um rolo. {人} conta pessoas. {枚} conta o que é plano e fino, como uma folha. {匹} conta animais. {台} conta máquinas e carros. {杯} conta xícaras e copos.

Guarde o contador pelo formato, e não pela lista decorada: quem lembra que {枚} é "uma chapa lisa" nunca mais erra uma folha, e quem lembra que {台} é "uma plataforma" acerta o carro sem pensar.

O gancho está em João 2:6, seis vasos de pedra para as purificações dos judeus, cheios de água. É contagem com contador, exata, e a estrutura é a mesma de qualquer lista de objetos do texto. Repare também no verbo do versículo, {を満たす}: ele fica em kana, porque é gramatical. A contagem e os objetos são kanji; a ação é kana.

## A pontual: o contador muda a palavra ou só a pronúncia

A pergunta que todo iniciante faz é "onde vai o s do plural". Em japonês não há s, o plural é o contador. A pontual está em outro lugar: **o numeral muda a palavra antes de mexer no substantivo**.

Depois de 1, de 2 e de 3 o substantivo muda de forma: {三本} se lê *sanbon* e vale literalmente "três + livro comprido"; {二人} é *futari* e {三人} é *sannin*. Depois de 4 a escrita não muda mais: {四} continua sendo {四} e {六} continua sendo {六}. O que muda é a pronúncia, *yon*, *go*, *roku* ou até *mutsu*. O numeral {六} tem duas leituras porque o japonês antigo tinha duas séries de numerais: a curta, para datas, e a longa, para o resto. Os contadores de {匹}, {人} e {杯} seguem a curta; os outros seguem a longa.

Depois do 1 a palavra também se transforma: *ippon* de livro, *ippai* de xícara, *ippiki* de animal. E "alguns" é "alguns + contador", sem numeral nenhum: {何本} são alguns livros, {何人} são algumas pessoas. Com numeral você nomeia a quantidade exata; sem numeral você diz "alguns", ou "muitos" com {多くの}.

## {の}: a posse que vem antes

O {の} liga dois substantivos e vale como "de". A ordem é o inverso da nossa: "o livro do professor" é {先生 + の + 本}, isto é, professor, "de", livro, porque quem possui vem primeiro.

E a ordem do contador nesse trio é fixa: {本 + の + 先生}. O contador vem antes do {の}, porque é o {の} que fecha a frase nominal começada pelo contador. O iniciante acerta {先生の本} e erra quando põe a partícula primeiro: {の本先生} não existe em japonês, em nenhum registro e em nenhuma Bíblia.

O lado bom é que {の} é a partícula mais frequente do japonês escrito, e quase toda linha de texto a contém. Para quem está lendo, ela é o ponto de apoio: é ela que diz de quem é cada substantivo.
`),
  vocab: [
    V('hon', '本', 'livro; contador de objetos compridos (hon)'),
    V('hito', '人', 'pessoa; contador de pessoas (hito)'),
    V('mai', '枚', 'contador de folhas e de coisas planas (mai)'),
    V('hiki', '匹', 'contador de animais (hiki)'),
    V('dai', '台', 'contador de máquinas e carros (dai)'),
    V('hai', '杯', 'xícara; contador de copos (hai)'),
    V('sensei', '先生', 'professor; mestre (sensei)'),
    V('mizu', '水', 'água (mizu)'),
    V('ha', '葉', 'folha (ha)'),
    V('mutsu', '六', 'seis; numeral de duas leituras, roku ou mutsu (mutsu)'),
    V('yo', '四', 'quatro; numeral de três leituras, yon, yo ou shi (yo)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Não há artigo definido nem plural: quem marca pluralidade é o contador. Substantivo sem contador é singular ou indeterminado.',
      ),
    },
    {
      n: '2',
      text: T(
        'O numeral vem antes do contador e o contador vem antes do substantivo: {三本} é "três" + contador + "livro".',
      ),
    },
    {
      n: '3',
      text: T(
        'Depois de 1, 2 e 3 o substantivo muda de forma; de 4 em diante muda a pronúncia e a escrita fica igual.',
      ),
    },
    {
      n: '4',
      text: T(
        'Com {の}, o contador vem antes da partícula: {本 + の + 先生} é "o livro do professor". {の本先生} não existe.',
      ),
    },
    {
      n: '5',
      text: T(
        '"Alguns" é "alguns + contador" sem numeral — {何本}, {何人}; "muitos" é {多くの} + substantivo.',
      ),
    },
  ],
  notes: [
    {
      label: T('{の} é o ponto de apoio de quem lê'),
      text: T(
        'É a partícula mais frequente do japonês escrito: quase toda linha de texto a contém. Quem reconhece {の} já sabe de quem é cada substantivo, mesmo sem entender o resto.',
      ),
    },
    {
      label: T('O erro clássico é a posição do {の}'),
      text: T(
        'O contador abre a frase nominal e o {の} a fecha. Por isso o iniciante escreve corretamente {先生の本} e escreve {の本先生} quando tenta ser meticuloso com o "de".',
      ),
    },
  ],
  examples: [
    { text: '三本の本を読む', gloss: T('sanbon no hon o yomu — leio três livros') },
    { text: '二人の先生', gloss: T('futari no sensei — dois professores') },
    {
      text: '水の甕が六つある',
      gloss: T('mizu no kame ga mutsu aru — há seis vasos de água (João 2:6)'),
    },
    { text: '葉が五つ', gloss: T('ha ga itsutsu — cinco folhas') },
    {
      text: '車があります',
      gloss: T('kuruma ga arimasu — há um carro (sem contador: singular ou indeterminado)'),
    },
  ],
  tables: [
    {
      caption: T('Os contadores mais usados e o que cada um conta'),
      head: [T('Contador'), T('Leitura usual'), T('O que conta'), T('Exemplo')],
      rows: [
        [
          T('{本}'),
          T('hon'),
          T('livros e objetos compridos e compridos de lado'),
          T('{三本} — três livros'),
        ],
        [T('{人}'), T('hito'), T('pessoas'), T('{二人} — duas pessoas')],
        [T('{枚}'), T('mai'), T('folhas e coisas planas e finas'), T('{五枚} — cinco folhas')],
        [T('{匹}'), T('hiki'), T('animais'), T('{二匹} — dois animais')],
        [T('{台}'), T('dai'), T('máquinas, carros, aparelhos'), T('{三台} — três carros')],
        [T('{杯}'), T('hai'), T('xícaras e copos'), T('{二杯} — duas xícaras')],
      ],
    },
    {
      caption: T('Contador + {の} + substantivo: a ordem não muda'),
      head: [T('Construção'), T('O que se diz')],
      rows: [
        [T('{本 + の + 先生}'), T('o livro do professor — o contador vem antes do {の}')],
        [T('{三本の + 先生}'), T('as três pessoas do caso, os três professores')],
        [T('{の本先生}'), T('não existe: o {の} antes do contador é o erro do iniciante')],
      ],
    },
    {
      caption: T('Quando o substantivo muda de forma e quando muda só a leitura'),
      head: [T('Numeral'), T('O que muda'), T('Exemplo')],
      rows: [
        [
          T('1, 2, 3'),
          T('o substantivo muda de forma'),
          T('{三本} *sanbon*, {二人} *futari*, {三人} *sannin*'),
        ],
        [
          T('4 ou mais'),
          T('muda só a pronúncia; a escrita fica'),
          T('{四} *yon*, {五} *go*, {六} *roku* ou *mutsu*'),
        ],
        [
          T('depois do 1'),
          T('o substantivo também ganha forma própria'),
          T('*ippon*, *ippai*, *ippiki*'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {本 + の + 先生}, o contador fica:'),
    options: [
      T('antes do {の}'),
      T('depois do {の}'),
      T('depois de {先生}'),
      T('no lugar do {の}'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "três livros" com o contador de livros: 三____の本'),
      answer: '本',
    },
    {
      kind: 'match',
      prompt: T('Ligue o contador ao que ele conta'),
      pairs: [
        { a: T('{本}'), b: T('livros e objetos compridos') },
        { a: T('{人}'), b: T('pessoas') },
        { a: T('{枚}'), b: T('folhas e coisas planas') },
        { a: T('{杯}'), b: T('xícaras e copos') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual forma diz "alguns livros", sem numerar?'),
      options: [T('{何本の}'), T('{多くの}'), T('{この}'), T('{その}')],
      answer: 0,
    },
  ],
};
