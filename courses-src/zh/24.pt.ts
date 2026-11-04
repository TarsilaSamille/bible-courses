import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  section: T('Sintaxe'),
  title: T('Expressões fixas e o sujeito que desaparece'),
  subtitle: T(
    'A pergunta que se repete, as quatro expressões fixas e a omissão que já não precisa de aviso',
  ),
  body: C(`
## O Mandarin apaga o sujeito sem pedir licença

Com o verbo no meio e o sujeito omitido, um grupo isolado como {chī le} não significa nada: quem comeu? É verdade, mas só para quem lê fora do contexto. Dentro de uma frase, o Mandarin apaga o sujeito o tempo todo, sem marca, sem partícula, sem cerimônia, porque o contexto já disse quem está falando.

O exemplo canônico: {tā yě qù} é "ele também vai". Dito por alguém que acabou de falar de Pedro, a mesma frase vira {yě qù}, "também vai", e continua verdadeira, porque o sujeito é o de quem está falando, que o ouvinte já sabe. Não é um sujeito truncado; é uma economia normal. Em português não temos nada comparável: "Também vai" é agramatical. Quem traduz palavra por palavra escreve "também ele vai" e perde o sujeito que era óbvio.

A elisão acontece em todo lugar, e o padrão é o mesmo: **se o sujeito da frase anterior serve, ele não é escrito de novo**. Em orações coordenadas isso gera ambiguidade real. {tā shuō wǒ qù} pode significar "ele diz que eu vou", verbo de dizer mais oração introduzida, ou "ele diz e eu vou", dois verbos com sujeito só na primeira. O contexto desfaz; palavra por palavra, não. E é por isso que ler capítulo é ler sentido, não ler caracteres.

## A negação por repetição

O Mandarin tem uma segunda maneira de negar, e ela não usa partícula nenhuma. O padrão é **verbo ou adjetivo + {bù} + o mesmo verbo ou adjetivo**. Em vez de {tā bù hǎo}, "ele não é bom", você pode dizer {tā hǎo bù hǎo}, "ele é bom ou não é?". A negação não está no {bù}: a negação está na **repetição**, e o {bù} é a dobradiça que segura as duas cópias juntas.

Aqui o {bù} troca de papel. Antes ele era uma partícula de negação que vinha à frente do verbo, com emprego próprio; aqui ocupa o meio e não nega nada sozinho. Tire o {bù} e sobra {hǎo hǎo}, que não é nada. A pronúncia é consequência do papel: dentro de {shì bú shì}, o {bù} perde o tom, *bú* e não {bù}, porque deixou de ser afirmação para virar marca de escolha.

O ponto que quase todo mundo precisa: {shì bú shì} se lê **"é não é?"**, com o {shì} da pergunta antes do {bù}. Não é "não é é". Quem traduz "não é é" está aplicando a ordem portuguesa do "não" e produzindo uma frase que nenhum chinesês jamais pronunciaria. Em Mandarin a ordem é verbo primeiro, negação no meio: {shì bú shì}, {chī bù chī}, {hǎo bù hǎo}.

Quando a palavra tem mais de uma sílaba, repete-se a parte inteira e a negação entra no meio. {yǒu yǒu}, "tem tem?", com {méi} encaixado dá {yǒu méi yǒu}, "tem não tem?", e é por isso que a dobradiça é {méi}, a partícula do passado e da existência. O verbo não se parte: é {yǒu} dos dois lados. Em {yǒu méi yǒu} a leitura também pode ser {yǒu} mais {méi yǒu}, "ter" mais "não ter", e o contexto decide. A frase é ambígua de propósito.

## Quatro expressões fixas que delatam um interlocutor

São as quatro mais comuns, e nenhuma delas é uma frase: são peça solta, que se encaixa onde estiver o verbo.

- {shì bú shì} — "é ou não é?" — {nǐ shì bú shì shīfu} — "você é mestre ou não?"
- {yǒu méi yǒu} — "tem ou não tem?" — {nǐ yǒu méi yǒu shū} — "você tem livro ou não?"
- {hǎo bù hǎo} — "bom ou não bom?" — sobre comida, saúde, humor. A mais coloquial das quatro.
- {duì bú duì} — "certo ou não está certo?" — a única que costuma levar {ma} junto: {duì bú duì ma}.

O que elas delatam é o interlocutor, não o assunto. Uma pessoa que usa {hǎo bù hǎo} está falando de comida; uma que usa {duì bú duì ma} está conferindo algo. No texto bíblico isso importa: quando o tradutor escreve uma dessas expressões onde o grego tinha uma pergunta simples, ele está decidindo pelo leitor o tom que o grego não fixava.

## Três maneiras de fazer a mesma pergunta

A pergunta "você vai?" tem três formas, e elas não são sinônimos: são registros diferentes.

- V-{嗎} — a partícula no fim. {nǐ qù ma}, "você vai?". Mais formal, é a forma da escrita e do texto antigo.
- V-{不}-V — a repetição. {nǐ qù bú qù}, "você vai ou não vai?". Coloquial, é a forma da fala.
- V-{不}-V? — as duas com *bú* sandhi na segunda cópia. É o registro neutro, e é o que a {和合本} usa quando a pergunta é retórica ou de clímax.

Nas três, o sujeito {nǐ} está escrito, mas pode desaparecer. Se a frase anterior já era do mesmo sujeito, {qù ma} basta. A omissão do sujeito funciona ao contrário aqui: agora ele falta porque a pergunta é o que faz falta.

A {和合本} mostra o jogo em dois versículos. Em João 6:67, Jesus pergunta {nǐmen yě yào qù ma}: {ma} formal, com o sujeito *nǐmen* explícito porque a pergunta é dirigida a um grupo que precisa ouvir que é a ele. Em João 18:33, o sumo sacerdote pergunta {nǐ shì bú shì Yóudú rén}: {shì bú shì} puro, sem {ma}, e a forma mais afiada das quatro, uma das perguntas mais famosas do Novo Testamento, feita sem o *bú* sandhi, por quem já sabe a resposta. Compare com João 1:37, {guòlái kàn}, "venham ver": sujeito omitido, verbo repetido, sem nenhuma partícula. O contexto, sozinho, diz que quem fala é Jesus e quem vem são os dois discípulos.`),
  vocab: [
    V('yě', '也', 'também (yě)'),
    V('shì bú shì', '是不是', 'é ou não é? (shì bú shì)'),
    V('yǒu méi yǒu', '有沒有', 'tem ou não tem? (yǒu méi yǒu)'),
    V('hǎo bù hǎo', '好不好', 'bom ou não bom? (hǎo bù hǎo)'),
    V('duì bú duì', '對不對', 'certo ou não está certo? (duì bú duì)'),
    V('ma', '嗎', 'partícula de interrogação no fim (ma)'),
    V('nǐ', '你', 'tu, você (nǐ)'),
    V('tā', '他', 'ele (tā)'),
    V('bù', '不', 'não (partícula de negação, lição 09)'),
    V('méi', '没', 'não (passado e existência, lição 09)'),
    V('shì', '是', 'ser (shì)'),
    V('yǒu', '有', 'ter, haver (yǒu)'),
  ],
  rules: [
    {
      n: '1',
      text: T('O sujeito se omite quando a frase anterior já o forneceu: {tā yě qù} → {yě qù}.'),
    },
    {
      n: '2',
      text: T('O padrão de pergunta é verbo ou adjetivo + {bù} + o mesmo verbo ou adjetivo.'),
    },
    {
      n: '3',
      text: T(
        'A negação é a repetição; o {bù} do meio é dobradiça, não negação: {shì bú shì} é "é não é?".',
      ),
    },
    {
      n: '4',
      text: T(
        'Palavra de mais de uma sílaba repete só a primeira parte: {yǒu méi yǒu}, com {méi} no meio.',
      ),
    },
    { n: '5', text: T('{ma} fecha a pergunta e nunca aparece no meio dela.') },
  ],
  notes: [
    {
      label: T('O mesmo {bù} com dois papéis'),
      text: T(
        'Na lição 09, {bù} nega: {wǒ bù chī}. Em {shì bú shì}, {bù} não nega nada — marca a escolha entre duas cópias. Por isso o tom muda para *bú* e por isso ele perde o acento grave que o fazia parecer partícula de negação.',
      ),
    },
    {
      label: T('A ambiguidade que o contexto desfaz'),
      text: T(
        '{tā shuō wǒ qù} pode ser "ele diz que eu vou" ou "ele diz e eu vou". Nenhuma das duas leituras está errada por construção; só o capítulo decide. Traduzir por palavra é escolher uma das duas sem perceber.',
      ),
    },
  ],
  examples: [
    { text: '他也去', gloss: T('tā yě qù — ele também vai') },
    { text: '也去', gloss: T('yě qù — também vai (o sujeito é o da frase anterior)') },
    { text: '你去不去', gloss: T('nǐ qù bú qù — você vai ou não vai?') },
    { text: '你是不是猶太人', gloss: T('nǐ shì bú shì Yóudú rén — você é judeu ou não é?') },
  ],
  tables: [
    {
      caption: T('Três maneiras de fazer a mesma pergunta'),
      head: [T('Forma'), T('Como é montada'), T('Registro'), T('Exemplo')],
      rows: [
        [T('V-嗎'), T('verbo + {ma} ao fim'), T('formal, escrito'), T('{nǐ qù ma?} — você vai?')],
        [
          T('V-不-V'),
          T('verbo repetido com {bù} no meio'),
          T('coloquial, falado'),
          T('{nǐ qù bú qù?} — você vai ou não vai?'),
        ],
        [
          T('V-不-V?'),
          T('o mesmo, com *bú* sanduêsado'),
          T('neutro, o mais comum'),
          T('{nǐ shì bú shì Yóudú rén?} — você é judeu?'),
        ],
      ],
    },
    {
      caption: T('As quatro expressões fixas'),
      head: [T('Expressão'), T('Literal'), T('Português'), T('O que questiona')],
      rows: [
        [T('{shì bú shì}'), T('é não é?'), T('é ou não é?'), T('o verbo {shì}')],
        [T('{yǒu méi yǒu}'), T('tem não tem?'), T('tem ou não tem?'), T('o verbo {yǒu}')],
        [T('{hǎo bù hǎo}'), T('bom não bom?'), T('bom ou não bom?'), T('um adjetivo')],
        [
          T('{duì bú duì}'),
          T('certo não certo?'),
          T('certo ou não está certo?'),
          T('o verbo {duì}'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é o padrão de {是不是}?'),
    options: [
      T('{是} {不} {是} — o verbo repetido com {bù} no meio'),
      T('{不} {是} — a negação antes do verbo'),
      T('{是} {是} — o verbo repetido sem partícula'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a pergunta "vai ou não vai?": 你____ (ir)'),
      answer: '去不去',
    },
    {
      kind: 'match',
      prompt: T('Ligue a expressão ao sentido'),
      pairs: [
        { a: T('{是不是}'), b: T('é ou não é?') },
        { a: T('{有沒有}'), b: T('tem ou não tem?') },
        { a: T('{好不好}'), b: T('bom ou não bom?') },
        { a: T('{對不對}'), b: T('certo ou não está certo?') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'Depois de uma frase que já tem o sujeito {wǒ}, como se pergunta "vai?" sem repetir o sujeito?',
      ),
      options: [T('{去嗎}'), T('{你去嗎}'), T('{去不}'), T('{你也去嗎}')],
      answer: 0,
    },
  ],
};
