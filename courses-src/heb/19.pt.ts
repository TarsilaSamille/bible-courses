import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  title: T('Cores e comparação'),
  subtitle: T('טוֹב מִן — melhor DO QUE, e o vermelho de Adão'),
  section: T('Preposições, comparação, perguntas e tempo'),
  body: C(`## Comparar com {מִן}

O hebraico não usa sufixos de grau: o comparativo se faz com a preposição {מִן} «de/do que». {טוֹב} «bom» → {טוֹב מִן} «melhor do que» · {רָע} «mau» → {רָע מִן} «pior do que» · {גָּדוֹל} «grande» → {גָּדוֹל מִן} «maior do que».

Exemplo canônico: {כִּי־טוֹבָה חָכְמָה מִפְּנִינִים} «pois a sabedoria é melhor do que as pérolas» (Pv 8.11). E {גָּבוֹר מֵהַמָּקוֹם} «mais forte do que o lugar».

Variação de registro: o substantivo que vem depois de {מִן} costuma entrar em estado **constructo** quando o substantivo que compara também vai em constructo; o mais comum é o maqaf: {טוֹב־מִן}. Em Provérbios, a construção de superlativo aparece às vezes como {טוֹב־מִן} sem {מִן} visível — o contexto define.

## Igualdade e superioridade

{nָכוֹן} «igual a» + {לְ} (ou {נָכוֹן־לְ}): {כָּל־בְּשָׂר־אֵתֶם כְּעֵצֶם אֶחָד} «toda a carne como um só osso» (Gn 2.23).

{גָּדוֹל־מִן} «maior do que» é a fórmula de superlativo analítica; {הַגָּדוֹל} «o grande» é o superlativo com artigo.

## Superlativo: três caminhos

O hebraico tem três jeitos de dizer «o mais»:

**Constructo**: {מֶלֶךְ מְלָכִים} «rei de reis» — mas cuidado: pode significar «um rei entre reis».
**Repetição**: {קָדוֹשׁ קָדָשִׁים} «santíssimo» (o santíssimo), {שִׁיר הַשִּׁירִים} «o cântico dos cânticos», {שַׁדַּי שַׁדַּי} «o Strength of strengths».
**Artigo + adjetivo**: {הַיּוֹם הַגָּדוֹל} «o grande dia», {הָרָאשִׁית} «o princípio».

Em {שִׁיר הַשִּׁירִים} há ainda o outro sentido: «cantar dos cantares». O hebraico gosta de duplicar, e o contexto decide.

## Cores

As cores são adjetivos comuns, e alguns nomes de cores são também nomes de plantas e animais:

{לָבָן} «branco» → {לְבָנָה} (f.) · {שָׁחֹר} «preto» · {יָרֹק} «verde» · {אָדֹם} «vermelho»

{שָׁנִי} «escarlate» — o fio de {חוּט הַשָּׁנִי} «o cordão escarlate» (Js 2.18, a casa de Raabe) · {תְּכֵלֶת} «azul-púrpura» · {אַרְגָּמָן} «púrpura».

O par {תְּכֵלֶת} {אַרְגָּמָן} descreve as cortinas do tabernáculo (Êx 26) e o manto do sumo sacerdote: era o tecido mais caro do mundo antigo.

## A cor de Adão

Vale a pena parar em {אָדֹם}. O adjetivo «vermelho» vem da raiz de {אָדָם} «homem» e de {אֲדָמָה} «solo, terra». A tradiçãoJewishtherefore lê: Adão foi feito do barro vermelho, e seu nome é o da cor de onde veio.

O mesmo vale para {שָׁמַיִם} «céus» (de {שָׁם} «nome», «que tem nome»?) — não, esta etimologia é mais_duvidosa. Mas o ponto é o mesmo: a língua liga as palavras pela sua origem.

## A cor e a Teixeira

Um dos mais belos usos de cor no Tanakh é {שַׁלְלַת שָׂמַח} — não, o texto é {שָׁלוֹלָה}? Aqui vai oamous: em Ezequiel 17.10, a videira plantada junto às águas «produz {שָׁלוֹלָה}» isto é «folha». Cores e vegetação andam juntas em Salmos.

Mais famously ainda, o mais famoso: a lei do casamento (Dt 17.6) exige «duas testemunhas» — não cor, mas número. Volte ao capítulo 11 para isso; aqui a lição é outra: **o hebraico nomeia cores com a mesma precisão com que nomeia utensílios**, e traduzir tudo por «cor» esconde metade do texto.`),
  vocab: [
    V('טוֹב מִן', 'טוֹב', 'melhor do que'),
    V('חָכְמָה', 'חָכְמָה', 'sabedoria'),
    V('מִפְּנִינִים', 'פֶּנִי', 'pérolas'),
    V('קֹדֶשׁ קָדָשִׁים', 'קֹדֶשׁ', 'o santíssimo'),
    V('לָבָן', 'לָבָן', 'branco'),
    V('שָׁחֹר', 'שָׁחֹר', 'preto'),
    V('אָדֹם', 'אָדֹם', 'vermelho'),
    V('יָרֹק', 'יָרֹק', 'verde'),
    V('חוּט הַשָּׁנִי', 'שָׁנִי', 'cordão escarlate'),
    V('תְּכֵלֶת', 'תְּכֵלֶת', 'azul-púrpura'),
    V('אַרְגָּמָן', 'אַרְגָּמָן', 'púrpura'),
    V('מֶלֶךְ מְלָכִים', 'מֶלֶךְ', 'rei dos reis'),
    V('רָע', 'רָע', 'mau'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se forma o comparativo em hebraico?'),
    options: [
      T('Com sufixo -er'),
      T('Com מִן: «טוֹב מִן» (bom DE = melhor do que)'),
      T('Duplicando a palavra'),
      T('Com prefixo הַ'),
    ],
    answer: 1,
    hint: T('O hebraico não tem sufixos de grau: usa uma preposição separada.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Ligue a cor ao seu adjetivo.'),
      pairs: [
        { a: T('branco'), b: '{לָבָן}' },
        { a: T('preto'), b: '{שָׁחֹר}' },
        { a: T('vermelho'), b: '{אָדֹם}' },
        { a: T('escarlate'), b: '{שָׁנִי}' },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual forma indica superlativo por repetição?'),
      options: [T('מֶלֶךְ מְלָכִים'), T('קָדוֹשׁ קָדָשִׁים'), T('הַגָּדוֹל'), T('גָּבוֹר מֵהַמָּקוֹם')],
      answer: 1,
      hint: T('Regra §3: a repetição de uma mesma palavra é um superlativo enfático.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete o comparativo: «חָכְמָה טוֹבָה ___ פְּנִינִים» (melhor do que).'),
      answer: 'מִפְּנִינִים',
      hint: T('A preposição é {מִן} e o substantivo {פֶּנִי} entra em constructo.'),
    },
    {
      kind: 'choose',
      prompt: T('Por que {אָדֹם} «vermelho» é etimologicamente interessante?'),
      options: [
        T('Vem da mesma raiz de {אָדָם} «homem» e {אֲדָמָה} «terra»'),
        T('Significa «sangue» em grego'),
        T('É o único adjetivo que não flexiona'),
        T('Só aparece no Pentateuco'),
      ],
      answer: 0,
      hint: T('Regra §5: as palavras de cor vêm do mundo concreto.'),
    },
  ],
  rules: [
    { n: '1', text: T('O comparativo hebraico usa {מִן} «de/do que»: {טוֹב מִן} «melhor do que».') },
    { n: '2', text: T('{נָכוֹן} + {לְ} significa «igual a»: {כְּעֵצֶם אֶחָד} «como um só osso».') },
    {
      n: '3',
      text: T(
        'O superlativo aparece em constructo ({מֶלֶךְ מְלָכִים}), por repetição ({קָדוֹשׁ קָדָשִׁים}) ou com artigo ({הַגָּדוֹל}).',
      ),
    },
    {
      n: '4',
      text: T(
        'As cores são adjetivos comuns e concordam em gênero e número como qualquer outro (cap. 4).',
      ),
    },
    {
      n: '5',
      text: T(
        'Algumas cores têm etimologia concreta: {אָדֹם} «vermelho» vem de {אָדָם} «homem» e {אֲדָמָה} «terra».',
      ),
    },
  ],
  notes: [
    {
      label: T('Exegese:'),
      text: T(
        'Cuidado com {שִׁיר הַשִּׁירִים}: pode ser «o cântico dos cânticos» (superlativo) ou «cantar dos cantares» (literal). Em Ezequiel 43.27, o verbo {הֵרִיד} «fazer ouvir» acompanha o cântico, e o contexto prefere o sentido literal de «um canto de cânticos». O hebraico antigo adorava a ambiguidade, e as traduções a abraçaram em vez de resolvê-la.',
      ),
    },
    {
      label: T('Curiosidade:'),
      text: T(
        'A púrpura hebraica vinha de um caramujo do Mediterrâneo, o {מּוֹקֵם}? Não: o molusco era o {פּוּנִי} e a palavra {אַרְגָּמָן} chegou aoTrail português e espanhol como «argema». Romanos e fenícios pagavam por ela o preço de uma fortuna — e por isso o-tabernacle, com {תְּכֵלֶת} e {אַרְגָּמָן}, era o objeto mais luxoso da Israel antiga.',
      ),
    },
  ],
  examples: [
    { text: '{טוֹב מִן}', gloss: T('melhor do que — comparativo') },
    { text: '{רָע מִן}', gloss: T('pior do que — comparativo negativo') },
    { text: '{חָכְמָה טוֹבָה מִפְּנִינִים}', gloss: T('a sabedoria é melhor do que as pérolas (Pv 8.11)') },
    { text: '{גָּבוֹר מֵהַמָּקוֹם}', gloss: T('mais forte do que o lugar') },
    { text: '{נָכוֹן}', gloss: T('igual a, preparado para') },
    { text: '{מֶלֶךְ מְלָכִים}', gloss: T('rei de reis — ou «um rei entre reis»') },
    { text: '{קֹדֶשׁ קָדָשִׁים}', gloss: T('o santíssimo (o Santo dos Santos)') },
    { text: '{שִׁיר הַשִּׁירִים}', gloss: T('o cântico dos cânticos — ou «cantar dos cantares»') },
    { text: '{לָבָן}', gloss: T('branco (fem. {לְבָנָה})') },
    { text: '{שָׁחֹר}', gloss: T('preto — {שַׁעַר הַשָּׁחֹר} «cabelo negro» (Ct 5.11)') },
    { text: '{אָדֹם}', gloss: T('vermelho — de {אָדָם} e {אֲדָמָה}') },
    { text: '{חוּט הַשָּׁנִי}', gloss: T('o cordão escarlate (Js 2.18, casa de Raabe)') },
    { text: '{אַרְגָּמָן}', gloss: T('púrpura — o tecido mais caro do mundo antigo') },
    { text: '{יָרֹק}', gloss: T('verde — {הָאִישׁ יָרֹק} «o homem verde» (Sl 92.15)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Três caminhos para o superlativo'),
      head: [T('Tipo'), T('Exemplo'), T('Glosa'), T('Ressalva')],
      rows: [
        [T('Constructo'), '{מֶלֶךְ מְלָכִים}', T('rei de reis'), T('pode ser «um rei entre reis»')],
        [T('Repetição'), '{קָדוֹשׁ קָדָשִׁים}', T('o santíssimo'), T('graal de superlativo')],
        [
          T('Repetição'),
          '{שִׁיר הַשִּׁירִים}',
          T('o cântico dos cânticos'),
          T('pode ser «cantar dos cantares»'),
        ],
        [T('Artigo + adjetivo'), '{הַיּוֹם הַגָּדוֹל}', T('o grande dia'), T('superlativo determinado')],
        [T('Analítico'), '{גָּבוֹר מֵהַמָּקוֹם}', T('mais forte do que o lugar'), T('usa {מִן} com maqaf')],
      ],
    },
    {
      caption: T('Tabela 2 — As cores da Bíblia'),
      head: [T('Cor'), T('Masc.'), T('Fem.'), T('Onde aparece')],
      rows: [
        [T('branco'), '{לָבָן}', '{לְבָנָה}', T('{חוּט לָבָן} «linho branco» (Mq 3.3)')],
        [T('preto'), '{שָׁחֹר}', '{שָׁחוֹרָה}', T('{שַׁעַר הַשָּׁחֹר} «cabelo negro» (Ct 5.11)')],
        [T('vermelho'), '{אָדֹם}', '{אֲדוֹמָה}', T('raiz de {אָדָם} «homem»')],
        [T('escarlate'), '{שָׁנִי}', '{שָׁנִית}', T('{חוּט הַשָּׁנִי} (Js 2.18)')],
        [T('púrpura'), '{אַרְגָּמָן}', '{אַרְגָּמָנִית}', T('tabernáculo e sumo sacerdote')],
        [T('azul'), '{תְּכֵלֶת}', '{תְּכֵלֶת}', T('com {אַרְגָּמָן} nas cortinas (Êx 26)')],
        [T('verde'), '{יָרֹק}', '{יָרְקָה}', T('árvore do Salmo 92.15')],
      ],
    },
  ],
};
