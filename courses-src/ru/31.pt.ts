import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  section: T('Leitura'),
  title: T('Lendo João 1 de ponta a ponta'),
  subtitle: T('caso, aspecto e ordem na mesma página, verso por verso'),
  body: C(`
## O primeiro verso, palavra por palavra

**В начале было Слово, и Слово было у Бога, и Слово было Бог.** Três orações, e cada uma contém uma decisão de caso, uma de aspecto e uma de ordem. É o melhor parágrafo possível para testar tudo o que veio antes.

В начале é prepositivo, porque в rege prepositivo e начало é neutro, o que faz o instrumental aparecer como начале. Было é o passado de быть, que é um verbo sem aspecto, e a ausência de бы é o que marca a frase como afirmação. Слово é nominativo, e é neutro: é por isso que o verbo parece não concordar com nada visível.

Na segunda oração, у Бога é genitivo, e o genitivo é marcado pela preposição, não pela terminação. Na terceira, Слово volta ao nominativo, agora como predicativo depois de был. O mesmo substantivo, três orações, três funções, e nenhuma delas marcada.

## Onde o texto muda de registro

João 1 é um texto em duas partes, e a mudança acontece no versículo 6. Até lá a linguagem é de fato: verbo no passado, cópula presente, substantivo com preposição. A partir do versículo 6 aparecem pessoas com nome, verbo no presente, e pronomes que se repetem.

A parteNJ 1:6-8 é a mais difícil para quem chega do grego, porque o grego do versículo 7 tem uma partícula que o russo traduz por uma palavra inteira. Он пришёл свидетельствовать é um perfectivo simples, e ele diz que João chegou uma vez, com hora de chegada. O mesmo João, quatro versículos depois, é Иоанн свидетельствует о Нём, no presente: a Testimony é o que ele faz, e não uma vez.

O versículo 14 é o mais longo do capítulo e o que exige mais. И Слово стало плотию, и обитало с нами, полное благодати и истины traz um perfectivo (стало), um imperfectivo (обитало), um particípio curto (полное) e dois genitivos (благодати, истины) numa oração de doze palavras. Quem leu os capítulos anteriores tem tudo o que precisa aqui.

## A cadeia dos pronomes

A segunda metade do capítulo depende de três pronomes que se repetem, e a repetição é o que segura o texto. Его em 1:12 e 1:16 é genitivo singular e se refere a Cristo. Которые em 1:12 é nominativo plural e é o sujeito de приняли. Оно em 1:2 é neutro singular e volta ao Слово do primeiro verso.

O que um leitor pierde se não acompanhar essa cadeia é a direção da frase. К своим же Он пришёл, и свои Его не приняли é a primeira vez que o texto usa um possessivo retroativo, e свои é um plural que se refere ao mesmo grupo que которые do versículo 12. A cadeia permite ao texto dizer "os seus" duas vezes sem repetir o substantivo.

E é a cadeia que permite a Его do versículo 16 ser genitivo de полноты e ao mesmo tempo possessivo de quem está falando. A mesma palavra com duas funções, e quem não distinguia genitivo de possessivo leu o versículo duas vezes sem perceber.

## O que sobra para o leitor, e o que fecha o capítulo

Três coisas. Primeira: **olhar a terminação antes do substantivo.** A terminação diz o caso em quase todos os substantivos, e quem a lê antes chega ao verbo já sabendo o que ele rege.

Segunda: **procurar o verbo antes de decidir o caso.** Nos casos ambíguos, e Бога é o mais comum, é o verbo que resolve. вижу Бога e слово Бога têm a mesma palavra e casos diferentes, e só o verbo distingue.

Terceira: **contar os perfectivos.** Numa página de texto russo, o número de verbos perfectivos diz quantos eventos há. João 1 tem poucos perfectivos no início e muitos depois do versículo 14, e essa curva é a curva da narrativa.

E a última palavra do capítulo é esta.

**Бога не видел никто никогда; Единородный Сын, сущий в недре Отчем, Он явил.** O verso mais difícil do capítulo fecha com um verbo perfectivo, явил, e o perfeito é o que fecha o texto: o Filho se manifestou, e o ato tem começo e fim.

O que vem antes é um duplo negador, никто никогда, que é a forma mais forte de negar em russo. E сущий é um particípio presente ativo, que em português teria de virar uma forma verbal. Quem leu os capítulos anteriores reconhece as três coisas sem esforço: a negação dupla, o particípio presente e o perfectivo de fechamento.
`),
  vocab: [
    V('В начале было Слово', 'начало', 'no princípio era a Palavra (Jo 1:1)'),
    V('Слово было у Бога', 'бог', 'a Palavra estava com Deus'),
    V('Слово было Бог', 'бог', 'a Palavra era Deus'),
    V('Оно было в начале у Бога', 'оно', 'ele estava no princípio com Deus (Jo 1:2)'),
    V('начало быть', 'начать', 'começar a ser; fórmula de João 1:3'),
    V('сотворил', 'сотворить', 'criou; perfectivo (Gn 1:1)'),
    V('свидетельствует', 'свидетельствовать', 'testemunha; imperfectivo presente'),
    V('пришёл', 'прийти', 'veio; perfectivo'),
    V('обитало', 'обитать', 'habitou; imperfectivo'),
    V('полное', 'полный', 'cheio; particípio curto neutro'),
    V('сущий', 'сущий', 'que é; particípio presente ativo'),
    V('явил', 'явить', 'manifestou; perfectivo de fechamento'),
    V('никто', 'никто', 'ninguém'),
    V('никогда', 'никогда', 'nunca'),
    V('свои', 'свой', 'os seus; possessive reflexivo'),
    V('Он явил', 'явить', 'ele manifestou; sujeito explícito'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em Слово было у Бога, qual caso é Бога?'),
    options: [T('Acusativo'), T('Genitivo'), T('Dativo')],
    answer: 1,
    hint: T('У rege genitivo, e o genitivo é marcado pela preposição, não pela terminação.'),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete Jo 1:1: В начале ___ Слово'), answer: 'было' },
    {
      kind: 'choose',
      prompt: T('Qual verbo de Jo 1:14 é perfectivo?'),
      options: [T('обитало'), T('стало'), T('полное')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete Jo 1:18: Бог не видел никто ___'), answer: 'никогда' },
  ],
  rules: [
    { n: '1', text: T('O caso se lê na terminação antes do substantivo, e o verbo confirma.') },
    { n: '2', text: T('Nos casos ambíguos, como {Бога}, é o verbo que decide.') },
    {
      n: '3',
      text: T('O perfectivo de uma página diz quantos eventos há: ele marca começo e fim.'),
    },
    {
      n: '4',
      text: T(
        '{Никто} e {никогда} são a negação mais forte, e {сущий} é um particípio presente ativo.',
      ),
    },
    {
      n: '5',
      text: T('Os pronomes {Ело}, {Оно} e {свои} sustentam a segunda metade do capítulo.'),
    },
  ],
  notes: [
    {
      label: T('A curva dos perfectivos'),
      text: T(
        'Contar os verbos perfectivos de um capítulo é uma forma barata de medir a narrativa. João 1 começa com frases de estado, quase sem perfectivos, e termina com Тот, о Ком я сказал, e depois com явление. O número de perfectivos cresce justamente onde o texto passa a contar fatos em vez de descrever uma situação, e é por isso que o aspecto é a information mais fácil de perder numa tradução.',
      ),
    },
    {
      label: T('Quando a tradução precisa escolher'),
      text: T(
        'João 1:3 é o versículo em que a tradução、its decide mais: начало быть pode virar começou a ser, veio a ser ou passou a existir, e cada opção carrega um aspecto diferente. A escolha mais fiel ao grego é a que mantém a ideia de origem. O que um tradutor não pode fazer é escolher sem perceber, porque o leitor da tradução não tem o grego ao lado para conferir.',
      ),
    },
  ],
  examples: [
    { text: 'В начале было Слово', gloss: T('no princípio era a Palavra') },
    { text: 'и Слово было у Бога', gloss: T('e a Palavra estava com Deus') },
    { text: 'и Бог был Слово', gloss: T('e Deus era a Palavra') },
    { text: 'Оно было в начале у Бога', gloss: T('ele estava no princípio com Deus') },
    { text: 'Все чрез Него начало быть', gloss: T('tudo veio a ser por meio dele') },
    { text: 'Он пришёл свидетельствовать', gloss: T('ele veio testemunhar') },
    { text: 'Иоанн свидетельствует о Нём', gloss: T('João testemunha a respeito dele') },
    { text: 'И Слово стало плотию', gloss: T('e o Verbo se fez carne') },
    { text: 'полное благодати и истины', gloss: T('cheio de graça e de verdade') },
    {
      text: 'Единородный Сын, сущий в недре Отчем, Он явил',
      gloss: T('o Filho unigênito, que está no seio do Pai, é ele que se manifestou'),
    },
  ],
  tables: [
    {
      caption: T('João 1:1-3, forma por forma'),
      head: [T('Forma'), T('Caso ou função'), T('Aspecto'), T('Glosa')],
      rows: [
        [T('В начале'), T('prepositivo'), T('—'), T('no princípio')],
        [T('было'), T('passado neutro'), T('sem aspecto'), T('era')],
        [T('Слово'), T('nominativo neutro'), T('—'), T('a Palavra')],
        [T('у Бога'), T('genitivo'), T('—'), T('com Deus')],
        [T('начало быть'), T('verbo composto'), T('perfectivo'), T('começou a ser')],
      ],
    },
    {
      caption: T('A curva do texto, em duas partes'),
      head: [T('Versículos'), T('O que domina'), T('Aspecto predominante'), T('Exemplo')],
      rows: [
        [T('1 a 5'), T('afirmações de estado'), T('sem aspecto e imperfectivo'), T('светит')],
        [
          T('6 a 8'),
          T('ações de uma pessoa'),
          T('os dois, alternando'),
          T('пришёл, свидетельствует'),
        ],
        [T('9 a 13'), T('recepção e recusa'), T('perfectivo'), T('приняли, не приняли')],
        [
          T('14 a 18'),
          T('manifestação e testemunho'),
          T('os dois, com particípio'),
          T('стало, обитало, явил'),
        ],
      ],
    },
    {
      caption: T('A cadeia de pronomes'),
      head: [T('Pronome'), T('Caso'), T('A quem se refere'), T('Onde aparece')],
      rows: [
        [T('Слово'), T('nominativo'), T('o Verbo'), T('1:1, 1:2 por Оно, 1:14')],
        [T('Оно'), T('nominativo neutro'), T('a Palavra'), T('1:2')],
        [T('Его'), T('genitivo singular'), T('Cristo, ou o Pai em 1:18'), T('1:12, 1:16, 1:18')],
        [T('которые'), T('nominativo plural'), T('os que receberam'), T('1:12')],
        [T('свои'), T('nominativo plural'), T('o mesmo grupo de 1:12'), T('1:11')],
      ],
    },
  ],
};
