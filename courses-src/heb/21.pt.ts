import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  title: T('Calendário e tempo'),
  subtitle: T('שַׁבָּת, חֹדֶשׁ, מוֹעֵד — o tempo de Israel'),
  section: T('Preposições, comparação, perguntas e tempo'),
  body: C(`## A semana termina no sábado

Os hebreus numeram os dias de outra maneira: {יוֹם רִאשׁוֹן} «primeiro dia» (domingo) · {יוֹם שֵׁנִי} «segundo» · {יוֹם שְׁלִישִׁי} «terceiro» · {יוֹם רְבִיעִי} «quarto» · {יוֹם חֲמִישִׁי} «quinto» · {יוֹם שִׁשִּׁי} «sexto» (sexta-feira, o dia de preparação) · {שַׁבָּת} «sábado», o sétimo dia.

A palavra {שַׁבָּת} vem de {שָׁבַת} «cessar» — o dia em que o trabalho cessa. Por isso a semana bíblica **termina** no dia de descanso e **começa** na preparação, e não como a nossa.

## O dia se divide em partes

{בֹּקֶר} «manhã» · {צָהֳרַיִם} «meio-dia» · {עֶרֶב} «tarde» · {לַיְלָה} «noite».

O refrão de Gênesis 1 é a chave: {וַיְהִי־עֶרֶב וַיְהִי־בֹקֶר} «e foi tarde e foi manhã» (Gn 1.5). Repare na ordem: o dia hebraico **nasce ao anoitecer**. Em 1.5, o primeiro período é {יוֹם} e o segundo {לַיְלָה}: o versículo diz {וַיְקְרָא אֱלֹהִים לָאוֹר יוֹם וְלַחֹשֶׁךְ קָרָא לַיְלָה} — Deus chamou {יוֹם} ao que veio antes do pôr do sol, e {לַיְלָה} ao que veio depois. Por isso as festas judaicas começam na véspera.

## Os doze meses

Os nomes são babilônicos — Israel adoptou o calendário quando foi exilado:

1 {נִיסָן} (Páscoa) · 2 {אִיָּר} · 3 {סִיוָן} · 4 {תַּמּוּז} · 5 {אָב} · 6 {אֱלוּל}

7 {תִּשְׁרִי} (ano-novo) · 8 {מַרְחֶשְׁוָן} · 9 {כִּסְלֵו} · 10 {טֵבֵת} · 11 {שְׁבָט} · 12 {אֲדָר} (Purim)

A Bíblia só nomeia os seis primeiros; os outros seis foram reconstruídos a partir do calendário posterior ao exílio. {אֲדָר} aparece em Ester 13.7; {כִּסְלֵו} é o nono mês, e {שְׁבָט} é o mês do registro das famílias.

## Ano, lua nova e festas

{חֹדֶשׁ} significa ao mesmo tempo «mês» e «lua nova»: {בְּרֹאשׁ חֹדֶשׁ} «na lua nova» (Sl 81.4). {שָׁנָה} é «ano», e {רֹאשׁ הַשָּׁנָה} «ano novo» pode ser tanto o calendário civil quanto o dia da trombeta (Lv 25.13).

{מוֹעֵד} é a palavra de «tempo marcado»: {מוֹעֲדֵי יְהוָה} «as festas do SENHOR» (Lv 23.11) é o nome da seção do Levítico que lista Páscoa, {חֲגִיג} «Festa das Tendas» e {חֲלוֹנִים} «Festa dos Tabernáculos».

## As estações

Não há uma palavra «estação»: o hebraico prefere substantivos. {גַּשֶּם} «chuva» · {חָרֶב} «calor» (verão) · {חֹרֶף} «colheita» (outono) · {צֵר} «frio» (inverno). E o tempo medido pelo próprio tempo: {עֵת} «momento» · {פָּעַל} «ocasião» · {אֶפֶל} «obscuridade».

A expressão mais comum para «hoje» é {הַיּוֹם} «o dia» (literalmente «o dia»); e {מֵאָחֹר} é «depois», do mesmo modo que {לִפְנֵי} é «antes» (também uma forma de substantivo: «frente»).

## Como o tempo entra na frase

O hebraico tem advérbios de tempo derivados de nomes: {עַתָּה} «agora» · {הָאִתָּה} «hoje» · {מֵחָר} «amanhã» · {תְּמוֹל} «ontem» · {עֶרֶב} «logo mais tarde».

E para o tempo passado: {לִפְנֵי} pode ser tanto «antes de» (temporal) quanto «diante de» (espacial), um poliesemismo que os tradutores resolvem pelo verbo que vem depois.

## Um mapa dos nomes do tempo

{יוֹם} dia · {לַיְלָה} noite · {בֹּקֶר} manhã · {עֶרֶב} tarde · {צָהֳרַיִם} meio-dia · {שָׁנָה} ano · {חֹדֶשׁ} mês e lua nova · {עֵת} tempo, ocasião · {מוֹעֵד} tempo marcado, festa.

Se você entender esses dez, você lê a cronologia de qualquer página da Bíblia: datas, durações, aniversários e festas.`),
  vocab: [
    V('שַׁבָּת', 'שַׁבָּת', 'sábado, descanso'),
    V('יוֹם רִאשׁוֹן', 'רִאשׁוֹן', 'primeiro dia (domingo)'),
    V('יוֹם שִׁשִּׁי', 'שִׁשִּׁי', 'sexto dia (sexta)'),
    V('בֹּקֶר', 'בֹּקֶר', 'manhã'),
    V('עֶרֶב', 'עֶרֶב', 'tarde, entardecer'),
    V('לַיְלָה', 'לַיְלָה', 'noite'),
    V('צָהֳרַיִם', 'צָהֳרַיִם', 'meio-dia'),
    V('נִיסָן', 'נִיסָן', 'Nisã (mês da Páscoa)'),
    V('תִּשְׁרִי', 'תִּשְׁרִי', 'Tishri (ano novo)'),
    V('אֲדָר', 'אֲדָר', 'Adar (Purim)'),
    V('חֹדֶשׁ', 'חֹדֶשׁ', 'mês, lua nova'),
    V('מוֹעֵד', 'מוֹעֵד', 'festa, tempo marcado'),
    V('שָׁנָה', 'שָׁנָה', 'ano'),
    V('עֵת', 'עֵת', 'tempo, ocasião'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Por que a semana hebraica termina no «shabat»?'),
    options: [
      T('Porque shabat vem de «cessar» (o descanso, Gn 2.2)'),
      T('Porque é o dia da lua cheia'),
      T('Por acaso'),
      T('Porque tem oito letras'),
    ],
    answer: 0,
    hint: T('{שַׁבָּת} vem da raiz {שׁבת} «descansar, cessar».'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Ligue o nome do tempo à sua glosa.'),
      pairs: [
        { a: '{בֹּקֶר}', b: T('manhã') },
        { a: '{עֶרֶב}', b: T('tarde') },
        { a: '{צָהֳרַיִם}', b: T('meio-dia') },
        { a: '{לַיְלָה}', b: T('noite') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Em Gênesis 1.5, o que revela que o dia hebraico começa ao anoitecer?'),
      options: [
        T('A ordem «e foi tarde e foi manhã»'),
        T('A palavra {יוֹם} aparece antes de {לַיְלָה}'),
        T('A ausência do artigo {הַ}'),
        T('O uso do singular {עֶרֶב}'),
      ],
      answer: 0,
      hint: T('Regra §1: {עֶרֶב} + {בֹּקֶר} = um dia inteiro.'),
    },
    {
      kind: 'fill',
      prompt: T('Escreva o sétimo mês do calendário hebraico, o mês do ano novo.'),
      answer: 'תִּשְׁרִי',
      hint: T('Começa com {ת}, tem {ִ} no início e termina em {רִי}.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual palavra significa «festa» ou «tempo marcado»?'),
      options: [T('מוֹעֵד'), T('עֵת'), T('חֹדֶשׁ'), T('שָׁנָה')],
      answer: 0,
      hint: T('{מוֹעֲדֵי יְהוָה} «as festas do SENHOR» é a expressão de Levítico 23.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('O dia hebraico começa ao anoitecer: {עֶרֶב} + {בֹּקֶר} formam um dia (Gn 1.5).'),
    },
    {
      n: '2',
      text: T('O sábado é o sétimo dia e o dia de descanso: {שַׁבָּת} vem de {שָׁבַת} «cessar».'),
    },
    { n: '3', text: T('{חֹדֶשׁ} significa «mês» e «lua nova»: {בְּרֹאשׁ חֹדֶשׁ} «na lua nova».') },
    { n: '4', text: T('{מוֹעֵד} é «tempo marcado»: {מוֹעֲדֵי יְהוָה} «as festas do SENHOR» (Lv 23.11).') },
    {
      n: '5',
      text: T(
        '{לִפְנֵי} significa «antes» (tempo) e «diante de» (espaço): o verbo seguinte decide a leitura.',
      ),
    },
  ],
  notes: [
    {
      label: T('Exegese:'),
      text: T(
        'A contagem do dia ao anoitecer muda a leitura de datas. Quando Leviticus 23.17 diz «no décimo quinto dia do sétimo mês», o dia começou na véspera: as ofertas (15-22 Av) começam ao pôr do sol do dia 14. Toda a cronologia bíblica segue esse relógio, e é a razão pela qual a Páscoa de Jesus — «o décimo quarto dia de nisan» — é datada pelo fato de a vida ser medida em noites e dias, não em horas do relógio.',
      ),
    },
    {
      label: T('Curiosidade:'),
      text: T(
        'Os nomes dos meses são uma aula de história do exílio. Israel adopts nomes babilônicos porque foi em Babilônia que aprendeu a contar os anos — porque o calendário babilônico era muito mais preciso, com {שְׁנֵי נַבּוּ} «anos de Nabu» para a contagem ininterrupta. Hoje o calendário hebraico moderno mantém os dois: {יולי} ao lado de {תמוז}, herança e conquista.',
      ),
    },
  ],
  examples: [
    { text: '{שַׁבָּת}', gloss: T('sábado — sétimo dia, de {שָׁבַת} «cessar»') },
    { text: '{יוֹם רִאשׁוֹן}', gloss: T('primeiro dia (domingo)') },
    { text: '{יוֹם שִׁשִּׁי}', gloss: T('sexto dia (sexta-feira, preparação do sábado)') },
    { text: '{וַיְהִי־עֶרֶב וַיְהִי־בֹקֶר}', gloss: T('e foi tarde e foi manhã (Gn 1.5)') },
    { text: '{בֹּקֶר}', gloss: T('manhã — {בֹּקֶר יוֹם} «manhã do dia»') },
    { text: '{עֶרֶב}', gloss: T('tarde — também «o dia seguinte»') },
    { text: '{צָהֳרַיִם}', gloss: T('meio-dia (dual)') },
    { text: '{נִיסָן}', gloss: T('primeiro mês, o mês da Páscoa') },
    { text: '{אֲדָר}', gloss: T('décimo segundo mês, mês de Purim (Est 13.7)') },
    { text: '{חֹדֶשׁ}', gloss: T('mês e lua nova — {בְּרֹאשׁ חֹדֶשׁ} «na lua nova» (Sl 81.4)') },
    { text: '{שָׁנָה}', gloss: T('ano — {שְׁנַת} «ano de» em constructo') },
    { text: '{מוֹעֵד}', gloss: T('tempo marcado, festa — {מוֹעֲדֵי יְהוָה} (Lv 23.11)') },
    { text: '{עֵת}', gloss: T('tempo, ocasião — {עֵת} é a raiz de {עַתָּה} «agora»') },
    { text: '{מֵחָר}', gloss: T('amanhã — {הָאִתָּה} «hoje» vem de {יוֹם} «dia»') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Os dias da semana'),
      head: [T('Ordem'), T('Nome hebraico'), T('Equivalente')],
      rows: [
        ['1', '{יוֹם רִאשׁוֹן}', T('domingo')],
        ['2', '{יוֹם שֵׁנִי}', T('segunda-feira')],
        ['3', '{יוֹם שְׁלִישִׁי}', T('terça-feira')],
        ['4', '{יוֹם רְבִיעִי}', T('quarta-feira')],
        ['5', '{יוֹם חֲמִישִׁי}', T('quinta-feira')],
        ['6', '{יוֹם שִׁשִּׁי}', T('sexta-feira (preparação)')],
        ['7', '{שַׁבָּת}', T('sábado (descanso)')],
      ],
    },
    {
      caption: T('Tabela 2 — As doze luações'),
      head: [T('Nº'), T('Mês'), T('Nome no Tanakh')],
      rows: [
        ['1', '{נִיסָן}', T('Páscoa, lua da ceifa (Êx 12.2)')],
        ['2', '{אִיָּר}', T('mencionado em Esd 7.9')],
        ['3', '{סִיוָן}', T('terceiro mês (Esd 9.7)')],
        ['4', '{תַּמּוּז}', T('quarto mês (2 Sm 24.15)')],
        ['5', '{אָב}', T('quinto mês (Est 7.2)')],
        ['6', '{אֱלוּל}', T('sexto mês (Ag 1.1)')],
        ['7', '{תִּשְׁרִי}', T('ano novo, sétimo mês')],
        ['8', '{מַרְחֶשְׁוָן}', T('oitavo mês')],
        ['9', '{כִּסְלֵו}', T('nono mês (Jr 36.22)')],
        ['10', '{טֵבֵת}', T('décimo mês')],
        ['11', '{שְׁבָט}', T('registro das famílias (1 Cr 26.1)')],
        ['12', '{אֲדָר}', T('Purim (Est 13.7)')],
      ],
    },
    {
      caption: T('Tabela 3 — Partes do dia e do ano'),
      head: [T('Conceito'), T('Palavra'), T('Glosa')],
      rows: [
        [T('Manhã'), '{בֹּקֶר}', T('manhã; também «novo dia»')],
        [T('Meio-dia'), '{צָהֳרַיִם}', T('meio-dia (dual)')],
        [T('Tarde'), '{עֶרֶב}', T('tarde; também «o dia seguinte»')],
        [T('Noite'), '{לַיְלָה}', T('noite')],
        [T('Mês / lua nova'), '{חֹדֶשׁ}', T('mês e lua nova')],
        [T('Ano'), '{שָׁנָה}', T('ano')],
        [T('Festa'), '{מוֹעֵד}', T('tempo marcado, festa')],
      ],
    },
  ],
};
