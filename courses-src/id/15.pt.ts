import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  section: T('Partícula'),
  title: T('A partícula yang'),
  subtitle: T('relativo, substantivo e substituto do artigo: a peça central do indonésio'),
  body: C(`## A palavra que faz três trabalhos

{yang} é a peça mais importante do indonésio, e é uma palavra só. Nenhuma outra tem tanta função: ela introduz uma oração relativa, ela substitui um substantivo inteiro, e ela ocupa o lugar que o artigo occupe no português. Quem entende {yang} lê orações que parecem impossíveis.

São três trabalhos em uma forma só.

{1} Relativo, antes de um nome: {orang yang baik} «a pessoa boa», {buku yang baru} «o livro novo». O {yang} liga o nome a uma propriedade.

{2} Substantivo, sozinho: {yang benar} «o que é certo», {yang datang} «quem vier», {yang dua} «o segundo». Aqui não há nome atrás: o {yang} ocupa a posição do substantivo e a oração inteira é o que ele nomeia.

{3} Substituto do artigo: {yang ada di sini} «o que está aqui». O {yang} faz o trabalho de {o}, {a} e {os} ao mesmo tempo, e por isso convive mal com eles.

## Yang substitui o artigo

Em português o artigo é obrigatório antes do substantivo definido, e o relativo vem depois: {o homem que é justo}. Em indonésio não há artigo, e o relativo vem no lugar dele: {orang yang adil}. A posição é a mesma, a palavra é outra.

A consequência é uma regra com duas faces. **Yang ocupa o lugar do artigo, e por isso não pode vir depois de um artigo definido.** Não existe {buku yang itu baik} nem {para murid yang ini}; quem escreve isso está juntando as duas coisas. O que existe é {buku yang baik} e, para retomar algo já mencionado, {buku itu} ou {yang baik itu}.

E há uma consequência maior. Como {yang} também é substantivo, ele pode aparecer onde o português precisa de uma expressão inteira: {orang yang baik} «a pessoa boa» e {yang baik} «aquele que é bom». A segunda forma é a nominalização do adjetivo, e é a mesma que o grego faz com {ho agathos}, o substantivo de qualidade. O grego tinha uma palavra para isso, e o português também («o bom», «o verdadeiro»); o indonésio usa a mesma palavra do relativo.

Quem traduz {yang} por «que» e para aí perde metade da palavra. Nos textos bíblicos há versículos inteiros em que {yang} não tem substantivo atrás, e quem procura um nome não encontra.

## Yang relativiza qualquer posição

A parte difícil vem quando o relativo não é um adjetivo mas um verbo ou uma preposição, porque aí o {yang} tem de carregar a posposição que o português põe no relativo.

Com verbo, funciona como em qualquer língua: {surat yang ditulis Petrus} «a carta que Pedro escreveu». O {yang} fica entre o substantivo e o verbo, e o sujeito do verbo relativo é o substantivo que vem antes dele.

Com preposição, é o mesmo mecanismo: {bangku yang di atas} «o banco que está em cima», {orang yang kepada siapa saya bicara} «a pessoa com quem eu falo». O {yang} assume o caso que a preposição governa, e o substantivo depois dele vem com a preposição repetida, o que soa repetitivo mas é gramatical.

Com passiva, o {yang} combina com o verbo passivo e não com o ativo: {Surat yang ditulis oleh Petrus} «a carta que foi escrita por Pedro». O grego e o português também nisso, e é por isso que a clause relativa do Novo Testamento grego está cheia de passivas.

Há uma restrição que o português não tem. Se o substantivo já tem um clítico de posse, o {yang} não entra: {guru saya yang mengajar}, não {guru saya ⋅ ⋅ ⋅} — a forma é {guru saya yang mengajar}, e o {yang} vem **depois** do sintagma inteiro, não colado ao nome. Quem escreve {guru saya yang mengajar, dengan disiplin} quebra a regra e produz uma frase que soa a tradutora.

E há a posição que o português resolve com pronome: {orang yang dia jumpa} «a pessoa que ele viu». O {dia} é obrigatório no indonésio quando o referente é uma tercera pessoa já mencionada, e não pode ser omitido como em português. Parece repetitivo, e cada {dia} aponta para alguém.

## Orang-orang yang membawa damai

{Matius 5:9} põe as duas coisas na mesma linha: {berbahagalah orang-orang yang membawa damai, sebab mereka akan disebut anak-anak Allah}.

Em {orang-orang} a redução integral marca o plural que o português escreve no substantivo. Em {yang membawa damai} o {yang} é relativo e liga o substantivo a um verbo, não a um adjetivo: {membawa} traz, {damai} é a coisa trazida. Quem traduz por «que traz paz» acerta; quem traduz por «que são pacíficos» trocou o verbo por um adjetivo e mudou a oração.

E há um terceiro {yang} na passagem, em {yang membawa}, que é a nominalização que o grego fazia com {tēn eirēnopoion}. Em português o versículo inteiro é uma frase com artigo em quase toda palavra. O indonésio não tem artigo em nenhuma delas, e o que o artigo fazia, o {yang} e a redução fizeram, cada um no seu lugar.`),
  vocab: [
    V('yang', 'yang', 'que, o que, quem (relativo e substantivo)'),
    V('adil', 'adil', 'justo'),
    V('baik', 'baik', 'bom'),
    V('baru', 'baru', 'novo'),
    V('benar', 'benar', 'certo, verdadeiro'),
    V('orang', 'orang', 'pessoa'),
    V('buku', 'buku', 'livro'),
    V('surat', 'surat', 'carta'),
    V('ditulis', 'tulis', 'ser escrito'),
    V('oleh', 'oleh', 'por (agente)'),
    V('dia', 'dia', 'ele, ela'),
    V('jumpa', 'jumpa', 'ver'),
    V('datang', 'datang', 'vir'),
    V('dengan', 'dengan', 'com'),
    V('bicara', 'bicara', 'falar'),
    V('membawa', 'bawa', 'trazer'),
    V('damai', 'damai', 'paz'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{yang} é relativo antes de um nome, substantivo quando está sozinho, e substitui o artigo definido.',
      ),
    },
    {
      n: '2',
      text: T(
        '{yang} não pode vir depois de um artigo definido: {buku yang baik}, nunca {buku yang itu}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Depois de numeral, {yang} indica a posição: {yang kedua} «o segundo», {yang terakhir} «o último».',
      ),
    },
    {
      n: '4',
      text: T(
        'Com preposição, o relativo repete a preposição: {bangku yang di atas}, {orang yang kepada siapa}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Se o substantivo tem clítico de posse, o {yang} vem depois do sintagma inteiro: {guru saya yang mengajar}.',
      ),
    },
  ],
  notes: [
    {
      label: T('O nominalizador'),
      text: T(
        'O trabalho mais difícil de {yang} é o de substantivizar: {yang benar} é uma frase inteira com valor de substantivo. Em grego isso é {to agathon}, em português «o bom». A mesma palavra em indonésio cobre os três casos.',
      ),
    },
    {
      label: T('O relativo que repete o pronome'),
      text: T(
        'Em {orang yang dia jumpa} o pronome {dia} é obrigatório, porque a_clause relativa tem sujeito próprio e o antecedente é uma terceira pessoa já mencionada. O português pode omitir o pronome; o indonésio não.',
      ),
    },
  ],
  examples: [
    { text: 'Orang yang baik akan masuk sorga.', gloss: T('A pessoa boa entrará no céu.') },
    { text: 'Yang benar itu sulit gefunden.', gloss: T('O que é certo é difícil de encontrar.') },
    { text: 'Buku yang baru itu milikmu.', gloss: T('Aquele livro novo é teu.') },
    { text: 'Yang kedua lebih mahal.', gloss: T('O segundo é mais caro.') },
    { text: 'Surat yang ditulis Petrus panjang.', gloss: T('A carta que Pedro escreveu é longa.') },
    { text: 'Bangku yang di atas itu rusak.', gloss: T('O banco que está em cima está quebrado.') },
    {
      text: 'Orang yang dia jumpa tadi seorang guru.',
      gloss: T('A pessoa que ele viu era um professor.'),
    },
    { text: 'Guru saya yang mengajar.', gloss: T('Foi a minha professora que ensinou.') },
    { text: 'Yang aku cari tidak ada.', gloss: T('O que eu procuro não existe.') },
  ],
  tables: [
    {
      caption: T('Os três trabalhos de yang'),
      head: ['Uso', 'Padrão', 'Exemplo', 'Leia como'],
      rows: [
        ['relativo + nome', 'orang yang baik', 'buku yang baru', 'a pessoa boa'],
        ['relativo + verbo', 'surat yang ditulis', 'rumah yang berdiri', 'a carta que foi escrita'],
        ['substantivo', 'yang + X', 'yang benar', 'o que é certo'],
        ['substantivo + numeral', 'yang + numeral', 'yang kedua', 'o segundo'],
      ],
    },
    {
      caption: T('Onde yang pode e onde não pode'),
      head: ['Contexto', 'Forma', 'Português', 'Valor'],
      rows: [
        ['antes de substantivo', 'buku yang baik', 'o livro bom', 'relativo'],
        ['sozinho, sem nome', 'yang baik', 'o bom', 'nominalização'],
        ['depois de numeral', 'yang kedua', 'o segundo', 'posição'],
        ['com preposição', 'yang di atas', 'que está em cima', 'caso absorvido'],
        ['depois de artigo', 'buku yang itu', '(não existe)', 'erro'],
        ['depois de para + nome', 'para murid yang ini', '(não existe)', 'erro'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('O que significa {yang benar}?'),
    options: [
      T('o que é certo'),
      T('que é verdadeiro, com nome atrás'),
      T('o verdadeiro livro'),
      T('porque é certo'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Preencha o relativo: «a pessoa boa» = orang ___ baik.'),
      answer: 'yang',
      hint: T('A palavra que liga nome e propriedade.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual destas frases está correta?'),
      options: [
        T('Buku yang baru itu mahal.'),
        T('Buku itu yang baru mahal.'),
        T('Buku yang itu baru.'),
        T('Buku yang baru yang itu.'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue o uso de {yang} ao exemplo'),
      pairs: [
        { a: T('{yang + nome}'), b: T('relativo') },
        { a: T('{yang sozinho}'), b: T('nominalização') },
        { a: T('{yang + numeral}'), b: T('posição na série') },
        { a: T('{yang + preposição}'), b: T('caso absorvido') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
