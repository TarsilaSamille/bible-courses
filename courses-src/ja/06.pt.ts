import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  section: T('Pronomes'),
  title: T('Duas séries de pronomes, e a arte de dizer isto e aquilo'),
  subtitle: T(
    'A escolha entre o "eu" e o "você", e entre "isto" e "aquilo", não é de estilo: é gramática, e é onde a fala bíblica revela o que está fazendo',
  ),
  body: C(`
## Duas séries: quem fala e quem ouve

O português tem uma série de pronomes. O japonês tem duas, e a escolha entre elas não é preferência: quem fala se coloca numa relação definida com quem ouve.

A série **humilde** é a do falante falando de si mesmo e do próprio trabalho: {watashi} é a forma padrão, e waga ("meu", à frente, para falar da própria obra) é a mais rebaixada. A série **cortês** é a do falante em relação ao ouvinte: {anata} é a forma respeitosa e padrão.

Um detalhe cultural que o leitor de português precisa saber: omae é hoje ironia ou desprezo, o "você" dito de cima. Foi a palavra normal na idade média e virou joguinho de comédia. E {kimi} é "você" em duas direções: cara entre amigos, e distantemente reverente nas coisas que já pertencem a alguém. Em nenhum desses casos o falante de português precisa se rebaixar; o japonês faz essa distinção porque a língua é construída assim.

## Isto e aquilo: o demonstrativo localiza

O português distingue "este/esse/aquele" por tempo de conversa. O japonês distingue por **distância de quem fala**, e é essa distinção que faz "isto" e "aquilo" na Bíblia soarem posicionados no espaço.

{kore} é isto: perto de mim, no meu campo. {sore} é aquilo: perto de você, no campo de quem escuta. {are} é aquilo: longe dos dois. {kono} é este e {sono} é aquele, mas nenhum dos dois mede distância: os dois apontam para algo **já mencionado**, e é por isso que significam "deste, do que é seu" e "daquele, de que falamos".

O mesmo verbo de estar gera três "aqui" diferentes. {koko} é o lugar fixo, onde estou. kochira é direção: "por aqui", "para cá". {kore} é a coisa, não o lugar: "isto". Traduzir os três por "aqui" perde a informação.

## O pronome que pode sumir

A posse é marcada pela partícula {no}: "meu livro" é {watashi} no hon. E o pronome pode ser omitido quando a partícula já o carrega: {no} hon é "o livro dele/dela".

Essa omissão é rotina, não ornamento. Em quase todo verbo japonês o sujeito pode desaparecer, porque é o verbo que segura a frase, e é ele que diz o que acontece; o contexto completa o resto. {kare} pode ir embora com a mesma facilidade. Um leitor que caça pronomes em cada linha vai perder a frase: o que está ali é a partícula.

Também não há gênero nem número. "Ele" e "ela" são a mesma palavra, {kare}; {kanojo} também serve para os dois. O mandarim, que também não distingue gênero, exige pronome de terceira pessoa mesmo quando o sujeito está óbvio; no japonês {kare} simplesmente não precisa aparecer.

## João 1:1 e João 15:5

João 1:1 diz "no princípio ERA a Palavra". Traduzido ao japonês, o verbo fica em kana e o pronome some: o verbo é o que sustenta a frase, e quem traduziu confiou nele. É a regra da primeira lição aplicada a um versículo, e o que muda de caligrafia é o que muda de função.

João 15:5 é o outro extremo: "EU sou a Videira", com pronome enfático no grego original. O japonês traduz com watashi, ou com {boku}, que é mais íntimo, mais quente, mais próximo. A escolha de pronome na tradução japonesa de 1987 é um detalhe real e tocante: o tradutor decidiu quão perto Jesus fala de si mesmo. Um pronome de primeira pessoa não é só uma palavra sobre Deus; é uma decisão sobre a voz dele.
`),
  vocab: [
    V('watashi', '私', 'eu (neutro, cortês, padrão)'),
    V('ore', '俺', 'eu (masculino, coloquial, pouco cortês)'),
    V('boku', '僕', 'eu (masculino, íntimo)'),
    V('anata', 'あなた', 'você (cortês, respeitoso)'),
    V('kimi', '君', 'você (íntimo entre amigos, ou reverente)'),
    V('kare', '彼', 'ele e ela — a mesma palavra'),
    V('kanojo', '彼女', 'ela; também sem gênero, com tom mais distante'),
    V('kore', 'これ', 'isto: perto de mim'),
    V('sore', 'それ', 'aquilo: perto de você'),
    V('are', 'あれ', 'aquilo: longe de nós dois'),
    V('kono', 'この', 'este: do que já foi mencionado'),
    V('sono', 'その', 'aquele: do que já foi mencionado'),
    V('koko', 'ここ', 'aqui: o lugar onde estou'),
    V('no', 'の', 'de; partícula de posse (no)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'São duas séries: humilde, o falante falando de si, e cortês, o falante em relação ao ouvinte. Trocar de série muda o significado social da frase.',
      ),
    },
    {
      n: '2',
      text: T(
        '{watashi} é o "eu" padrão; {ore} e {boku} são coloquiais e pouco formais, e {boku} é o mais íntimo dos três.',
      ),
    },
    {
      n: '3',
      text: T(
        '{kore}, {sore} e {are} medem distância de quem fala; {kono} e {sono} não medem nada — apontam para o que já foi mencionado.',
      ),
    },
    {
      n: '4',
      text: T(
        'A posse é {no}: "meu livro" é {watashi} no hon. Com a partícula, o pronome pode sumir: {no} hon é "o livro dele".',
      ),
    },
    {
      n: '5',
      text: T(
        'Não há gênero nem número, e o sujeito pode ser omitido: é o verbo que segura a frase.',
      ),
    },
  ],
  notes: [
    {
      label: T('Rebaixar-se não é cortesia, é gramática'),
      text: T(
        'Um falante de português diz "eu vou" sem se diminuir. O japonês faz essa distinção o tempo todo, e em contextos formais o falante se coloca abaixo do ouvinte. Por isso waga — "meu", para a própria obra — é mais humilde que {watashi}.',
      ),
    },
    {
      label: T('O peso de omae'),
      text: T(
        'omAe, que se escreve como {ore}, é hoje ironia ou desprezo — o oposto do {anata}. Foi a forma comum na idade média e virou piada de comédia e de mangá.',
      ),
    },
  ],
  examples: [
    { text: '私の本', gloss: T('watashi no hon — o meu livro') },
    {
      text: '本を読みます',
      gloss: T('hon o yomimasu — vou ler o livro; o pronome do sujeito foi omitido'),
    },
    { text: 'これは私のです', gloss: T('kore wa watashi no desu — isto é meu') },
    {
      text: '初めにおいてことばがあった',
      gloss: T('hajime ni oite kotoba ga atta — no princípio havia a Palavra'),
    },
    {
      text: '僕は真の樹である',
      gloss: T('boku wa mak no ki de aru — eu sou a verdadeira videira; o "eu" de Jesus em {boku}'),
    },
  ],
  tables: [
    {
      caption: T('Os pronomes, por registro'),
      head: [T('Pronome'), T('Gênero'), T('Registro'), T('Nuance')],
      rows: [
        [T('{watashi}'), T('neutro'), T('cortês, padrão'), T('vale para qualquer situação')],
        [
          T('{ore}'),
          T('masculino'),
          T('coloquial, direto'),
          T('o "eu" de quem fala sem cerimônia'),
        ],
        [
          T('{boku}'),
          T('masculino'),
          T('íntimo'),
          T('mais caloroso; é o "eu" de Jesus na tradução'),
        ],
        [T('{anata}'), T('neutro'), T('cortês, respeitoso'), T('a distância de quem não é íntimo')],
        [
          T('{kimi}'),
          T('neutro'),
          T('íntimo ou distante'),
          T('entre amigos, ou reverente com o que já é seu'),
        ],
        [T('{kare}'), T('nenhum'), T('neutro'), T('"ele" e "ela" são a mesma palavra')],
      ],
    },
    {
      caption: T('Os demonstrativos por distância'),
      head: [T('Palavra'), T('Onde a coisa está'), T('Quando se usa')],
      rows: [
        [T('{kore}'), T('perto de mim'), T('o que eu aponto ou toco')],
        [T('{sore}'), T('perto de você'), T('o que está diante de quem escuta')],
        [T('{are}'), T('longe dos dois'), T('o que está longe, ou ficou para trás')],
        [T('{kono}'), T('sem posição'), T('já mencionado: "deste"')],
        [T('{sono}'), T('sem posição'), T('já mencionado: "daquele"')],
      ],
    },
    {
      caption: T('Três palavras para "aqui"'),
      head: [T('Palavra'), T('Sentido'), T('Exemplo')],
      rows: [
        [T('{koko}'), T('lugar'), T('"aqui está"')],
        [T('kochira'), T('direção'), T('"por aqui", "para cá"')],
        [T('{kore}'), T('coisa, não lugar'), T('"isto"')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {これは私のです}, "isto" aponta para o que está perto de quem?'),
    options: [
      T('{kore} — perto de mim'),
      T('{sore} — perto de você'),
      T('{are} — longe dos dois'),
      T('{kono} — do que já foi mencionado'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "meu livro": 私____本'),
      answer: 'の',
    },
    {
      kind: 'match',
      prompt: T('Ligue o demonstrativo à posição do referente'),
      pairs: [
        { a: T('{kore}'), b: T('perto de mim') },
        { a: T('{sore}'), b: T('perto de você') },
        { a: T('{are}'), b: T('longe dos dois') },
        { a: T('{sono}'), b: T('do que já foi mencionado') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('No japonês, "ele" e "ela" são a mesma palavra. Qual é?'),
      options: [T('{kare}'), T('{kanojo}'), T('{watashi}'), T('{kimi}')],
      answer: 0,
    },
  ],
};
