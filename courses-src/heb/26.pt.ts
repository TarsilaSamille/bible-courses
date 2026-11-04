import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('O advérbio: o que ele faz'),
  subtitle: T('בְּכָל, הַיּוֹם, לֹא — a quarta classe, feita de outras peças'),
  section: T('Advérbio'),
  body: C(`## A locução que faz o trabalho do advérbio

O hebraico antigo não tem advérbio derivado de adjetivo: não existe uma palavra que signifique «rapidamente» da mesma maneira que {טוֹב} significa «bom». O que ele usa é uma locução de preposição e substantivo genérico, com o substantivo em constructo:

{בְּ + כֹּל → בְּכָל} «inteiramente, com tudo» · {בְּ + יוֹם → בְּיוֹם} «no dia em que» · {בְּ + רוּחַ → בְּרוּחַ} «de um golpe, com ímpeto» · {ל + בַּד → לִבְּדוֹ} «sozinho, por si só» · {עַל + פִּי → עַל־פִּי} «pela boca de, por meio de».

Cada uma delas faz o que o advérbio faz em português, e cada uma tem dois pontos de ancoragem onde o português tem um só. Em {בְּרוּחַ} não há palavra para «de repente»: o sentido vem do substantivo {רוּחַ} «vento, sopro», e é o sopro que produz a ideia de repentino. O hebraico prefere mostrar a coisa a nomear a ideia.

## Uma raiz, três funções

A letra {ב} trabalha em três ofícios dentro da mesma família. {בֵּית} «casa» é substantivo, e é a forma em constructo de {בַּיִת}. {בְּ} «em» é a preposição inseparable. E {בְּבֵּית} «na casa» é a locução que junta as duas e funciona como advérbio de lugar.

O sinal de que a primeira {ב} é preposição é o dagesh forte na consoante seguinte, o mesmo de {בְּרֵאשִׁית} (cap. 17). A segunda {ב} é o artigo {הַ}, e a palavra inteira {בְּבֵּית} é comparável a {הַבַּיִת} «a casa». Três palavras, três funções, uma raiz só.

## Os poucos que são mesmo palavras

Existe uma lista curta de advérbios que não são locução: {אַךְ} «mas, porém» · {כֵּן} «assim, deste modo» · {עַתָּה} «agora» · {אָז} «então» · {שָׁם} «ali» · {הִנֵּה} «eis, behold» · {אוֹלָם} «talvez».

Quase todos têm um substantivo por baixo. {עַתָּה} vem de {עֵת} «tempo, ocasião» (cap. 20) com a terminação {ָה} de substantivo, e o mesmo substantivo reaparece no Livro de Ezequiel com o sentido nominal de «ocasião». {שָׁם} «ali» e {שֵׁם} «nome» têm as mesmas letras: a vogal é o que separa uma coisa da outra, e quem lê depressa confunde as duas. {אַךְ} é a exceção da lista, o único sem substantivo correspondente, e por isso ele ocupa pouco espaço: vem colado à palavra que corrige.

## O tempo e a negação

O advérbio de tempo é a parte mais arrumada: {הַיּוֹם} «o dia», que significa «hoje» quando o verbo está no presente · {הָאִתָּה} «hoje» · {עַתָּה} «agora» · {אָז} «então» · {מֵחָר} «amanhã» · {אֲתָמוֹל} «ontem».

A negação é onde o hebraico mais se afasta do português. São duas palavras: {לֹא} e {אֵין}. {לֹא} nega um verbo e só pode vir antes de um verbo. {אֵין} é a ausência de uma coisa e não tem verbo nenhum. Em português as duas frases seguintes têm a mesma gramática: «há irmão» e «o irmão existe», cada uma com o seu «não». Em hebraico não: a primeira vira {לֹא־יֵשׁ אֵח} (Gn 4.9), porque o verbo «ser» existe e recebe a negação; a segunda vira {אֵין חֵקֶר} (Is 40.28), porque «não há busca» não tem verbo para negar. Quem traduz {אֵין} por «não está» ou por «não existe» está acrescentando um verbo que o hebraico não tem.

O lugar onde a leitura trava é quando um verbo aparece depois de {אֵין}. O grego não trava porque tem um verbo existencial de verdade, {εἰμί}, e escreve {οὐκ ἔστι} «não há». O hebraico nunca teve esse verbo. Em 1 Samuel, em Jeremias e em Ezequiel a construção aparece mesmo assim, e cada tradutor tem de decidir se está lendo uma ausência simples ou uma negação enfática do tipo «de modo algum». O contexto decide, e é por isso que essas páginas parecem quebradas para quem chega do grego ou do português: não estão quebradas, estão sem a peça que as outras línguas herdaram do latim.

Um último caso para guardar: a negação pode cair sobre um particípio. Em Gênesis 3.5, a serpente diz {לֹא יֹדֵעַ} e continua: literalmente «não, sabendo». O {לֹא} não nega um verbo, nega um participlo, e o resultado é uma frase que o português precisa traduzir com um parêntese inteiro.`),
  vocab: [
    V('בְּכָל', 'בְּכָל', 'inteiramente, com tudo'),
    V('בְּיוֹם', 'בְּיוֹם', 'no dia em que'),
    V('בְּרוּחַ', 'רוּחַ', 'de um golpe, com ímpeto'),
    V('לִבְּדוֹ', 'לִבְּדוֹ', 'sozinho, por si só'),
    V('עַל־פִּי', 'פִּי', 'pela boca de, por meio de'),
    V('בֵּית', 'בַּיִת', 'casa (constructo)'),
    V('בְּ', 'בְּ', 'em, com, por (preposição)'),
    V('בְּבֵּית', 'בַּיִת', 'na casa'),
    V('אַךְ', 'אַךְ', 'mas, porém'),
    V('כֵּן', 'כֵּן', 'assim, deste modo'),
    V('עַתָּה', 'עַתָּה', 'agora'),
    V('אָז', 'אָז', 'então'),
    V('שָׁם', 'שָׁם', 'ali'),
    V('הִנֵּה', 'הִנֵּה', 'eis, behold'),
    V('הַיּוֹם', 'יוֹם', 'o dia; hoje'),
    V('הָאִתָּה', 'הָאִתָּה', 'hoje'),
    V('לֹא', 'לֹא', 'não (com verbo)'),
    V('אֵין', 'אֵין', 'não há, não existe'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('O que {בְּכָל} é, gramaticalmente?'),
    options: [
      T('Uma locução de preposição e substantivo em constructo'),
      T('Um advérbio derivado de {כֹּל}'),
      T('Um substantivo com artigo'),
      T('Uma partícula de negação'),
    ],
    answer: 0,
    hint: T('É {בְּ} + {כֹּל}: a preposição {בְּ} mais o substantivo genérico {כֹּל} «tudo».'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Ligue o advérbio à sua origem.'),
      pairs: [
        { a: '{עַתָּה}', b: T('do substantivo {עֵת} «tempo»') },
        { a: '{שָׁם}', b: T('as mesmas letras de {שֵׁם} «nome»') },
        { a: '{בְּכָל}', b: T('{בְּ} + {כֹּל} «tudo»') },
        { a: '{אַךְ}', b: T('partícula sem substantivo correspondente') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'Em «não há busca ao seu entendimento» (Is 40.28), por que o hebraico não tem verbo?',
      ),
      options: [
        T('Porque {אֵין} já é a ausência: a frase fica sem verbo'),
        T('Porque a frase é um substantivo com artigo'),
        T('Porque o verbo «ser» foi apagado pelo escriba'),
        T('Porque {אֵין} é um verbo'),
      ],
      answer: 0,
      hint: T('Regra §4: {אֵין} não tem verbo; {לֹא} é que exige verbo.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete Gênesis 4.9: «לֹא־יֵשׁ ___» (não há irmão).'),
      answer: 'אֵח',
      hint: T('É o substantivo {אָח} «irmão», sem artigo.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual palavra explica a dificuldade de ler {אֵין} em 1 Samuel e Ezequiel?'),
      options: [
        T('O grego tem um verbo existencial, {οὐκ ἔστι}, e o hebraico nunca o teve'),
        T('A tradução de {אֵין} é sempre a mesma em todo o Tanakh'),
        T('O Tanakh proíbe o verbo depois de partícula'),
        T('É um erro de escrita nos livros tardios'),
      ],
      answer: 0,
      hint: T('O hebraico expressa ausência com {אֵין} e não tem verbo para negar.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O advérbio hebraico é quase sempre preposição + substantivo genérico em constructo: {בְּכָל}, {בְּיוֹם}, {בְּרוּחַ}, {לִבְּדוֹ}.',
      ),
    },
    {
      n: '2',
      text: T(
        'A mesma raiz serve a três funções: {בֵּית} (substantivo), {בְּ} (preposição) e {בְּבֵּית} (locução). O dagesh forte na consoante seguinte marca a preposição.',
      ),
    },
    {
      n: '3',
      text: T(
        'Os advérbios curtos ({אַךְ}, {כֵּן}, {עַתָּה}, {אָז}, {שָׁם}) também têm substantivo por baixo, salvo {אַךְ}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{לֹא} nega um verbo; {אֵין} afirma ausência e não tem verbo. Uma frase com {אֵין} não pode ser traduzida por um verbo sem escolha do tradutor.',
      ),
    },
    {
      n: '5',
      text: T(
        '{הַיּוֹם} significa «o dia» e vale «hoje» quando o verbo está no presente: o advérbio de tempo sai do substantivo {יוֹם}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Exegese:'),
      text: T(
        'A construção {בְּיוֹם אֲכָלְכֶם} em Gênesis 3.5 é o melhor exemplo do advérbio por locução, e ao mesmo tempo um problema de tradução. A locução vale «no dia em que vocês comerem», mas o verbo {אֲכָלְכֶם} está em constructo e significa literalmente «quando vocês comerem». O substantivo {יוֹם} faz o trabalho que em português faz a conjunção temporal, e o tradutor que escreve só «no dia» perde a condição temporal.',
      ),
    },
    {
      label: T('Curiosidade:'),
      text: T(
        'O grego arcaico tinha advérbios formados por {־ως}, como {πιστῶς} «fielmente» de {πιστός}. A perda dessa sufixação é uma das transformações mais antigas do grego e o que separa o grego homérico do grego do Novo Testamento. O hebraico nunca teve sufixo nenhum aqui: o advérbio dele sempre foi palavra de fora, uma preposição colada a um nome.',
      ),
    },
  ],
  examples: [
    { text: '{בְּכָל}', gloss: T('inteiramente, com tudo — {בְּ} + {כֹּל}') },
    { text: '{בְּיוֹם}', gloss: T('no dia em que — {בְּ} + {יוֹם}') },
    { text: '{בְּרוּחַ}', gloss: T('de um golpe, com ímpeto — o sopro como causa') },
    { text: '{לִבְּדוֹ}', gloss: T('sozinho, por si só — {ל} + {בַּד}') },
    { text: '{עַל־פִּי}', gloss: T('pela boca de — {עַל} + {פִּי}') },
    { text: '{בְּבֵּית}', gloss: T('na casa — {בְּ} + {הַ} + {בֵּית}') },
    { text: '{אַךְ}', gloss: T('mas, porém — partícula sem substantivo') },
    { text: '{שָׁם}', gloss: T('ali — não confundir com {שֵׁם} «nome»') },
    { text: '{הַיּוֹם}', gloss: T('o dia, hoje — de {יוֹם}') },
    { text: '{הָאִתָּה}', gloss: T('hoje (Gn 3.5)') },
    { text: '{אֵין חֵקֶר}', gloss: T('não há busca (Is 40.28) — frase sem verbo') },
    { text: '{לֹא־יֵשׁ אֵח}', gloss: T('não há irmão (Gn 4.9) — {לֹא} + verbo «ser»') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Advérbios que são locução'),
      head: [T('Peças'), T('Resultado'), T('Glosa'), T('O que dá')],
      rows: [
        ['{בְּ} + {כֹּל}', '{בְּכָל}', T('inteiramente'), T('o todo como medida')],
        ['{בְּ} + {יוֹם}', '{בְּיוֹם}', T('no dia em que'), T('tempo determinado')],
        ['{בְּ} + {רוּחַ}', '{בְּרוּחַ}', T('com ímpeto'), T('sopro, pressa')],
        ['{ל} + {בַּד}', '{לִבְּדוֹ}', T('por si só'), T('isolamento')],
        ['{עַל} + {פִּי}', '{עַל־פִּי}', T('pela boca de'), T('meio, instrumento')],
        ['{בְּ} + {דֶּרֶךְ}', '{בְּדֶרֶךְ}', T('pelo caminho de'), T('meio, causa')],
        ['{בְּ} + {כֹּחַ}', '{בְּכֹּחַ}', T('com força'), T('instrumento')],
      ],
    },
    {
      caption: T('Tabela 2 — Os advérbios curtos e o nome por baixo'),
      head: [T('Advérbio'), T('Glosa'), T('Substantivo de origem')],
      rows: [
        ['{אַךְ}', T('mas, porém'), T('— (partícula solta)')],
        ['{כֵּן}', T('assim, deste modo'), T('{כֵּן} «modo» (raro como substantivo)')],
        ['{עַתָּה}', T('agora'), T('{עֵת} «tempo, ocasião»')],
        ['{אָז}', T('então'), T('{אָז} «então» (o próprio nome)')],
        ['{שָׁם}', T('ali'), T('{שֵׁם} «nome» (mesmas letras)')],
        ['{הִנֵּה}', T('eis, behold'), T('{הִנֵּה} «olha, eis»')],
        ['{אוֹלָם}', T('talvez'), T('— (ocasional)')],
        ['{הָאִתָּה}', T('hoje'), T('{יוֹם} «dia»')],
      ],
    },
  ],
};
