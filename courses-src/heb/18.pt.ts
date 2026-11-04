import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  title: T('Preposições e partículas'),
  subtitle: T('בְּ, כְּ, לְ — as três letras que se colam na palavra'),
  section: T('Preposições, comparação, perguntas e tempo'),
  body: C(`## Preposições inseparáveis (Gesenius §102)

Três preposições hebraicas são escritas como uma única letra colada à palavra: {בְּ} «em, com, por», {כְּ} «como, conforme», {לְ} «para, a, de».

{בְּרֵאשִׁית} «no princípio» · {בְּךָ} «em ti» · {בְּיוֹם} «no dia» · {בְּתוֹרָה} «na lei»

{כְּצֵל} «como sombra» (Sl 144.4: {יָמָיו כְּצֵל עוֹבֵר} «seus dias são como sombra passageira») · {כְּהָאָדָם} «conforme o homem» · {כִּנְסָת} «segundo o assembling»

{לַיהוָה} «ao SENHOR» · {לִי} «para mim» · {לְעוֹלָם} «para sempre» · {לַאֲבֹתֵינוּ} «aos nossos pais»

O sinal de que uma {ב} ou {ל} é preposição é o **dagesh forte** na palavra seguinte: {בְּ + רֵאשִׁית} → {בְּרֵאשִׁית}, com {ר} forte. Se a palavra seguinte começa por gutural, o dagesh vira {ָ}: {בְּ + אָרֶץ} → {בָּאָרֶץ}.

## Preposições separadas

As outras funcionam como palavras independentes: {מִן} «de, desde» · {עַל} «sobre, contra» · {אֶל} «para (pessoas)» · {עִם} «com» · {תַּחַת} «sob» · {בֵּין} «entre» · {לִפְנֵי} «antes de, diante de» · {אַחֲרֵי} «atrás de, depois de» · {עַד} «até» · {כְּדֵי} «segundo» · {בְּלִי} «sem» · {סָבִיב} «em torno de».

Alguns contrastes de uma vez: {מִמִּצְרַיִם} «do Egito» (de + lugar) · {עַל־הָאָרֶץ} «sobre a terra» · {אֶל־מֹשֶׁה} «a Moisés» (a + pessoa) · {עִמָּנוּ אֵל} «conosco está Deus» (Isa 8.10, o que os teólogos chamam de «Emanuel») · {בֵּין הָאוֹר וּבֵין הַחֹשֶׁךְ} «entre a luz e as trevas» (Gn 1.4).

## Preposições «enchidas»

Quando uma preposição se junta a {ה}, forma uma nova palavra: {מֵהָרָשַׁת} «com pressa» (de {מִן} + {הָרָשַׁת}) · {בַּהֲלָכָה} «para o lado» · {כַּהֲלָכָה} «conforme» · {לַהֲלָכָה} «ao longo de». São poucos casos, mas explicam palavras muito comuns.

## O sentido de {בְּ}

A preposição {בְּ} cobre três funções que o português e o espanhol distribuem entre várias palavras:

**Local**: {בַּבַּיִת} «na casa», {בַּבָּקֶר} «de manhã»
**Instrumento**: {בְּחָרֶב} «com a espada» (I Cor 11.25) · {בְּאַמָּה} «com fé»
**Meio ou causa**: {בְּדֶרֶךְ חַיִּים} «pelo caminho da vida»

Por isso uma só palavra hebraica aparece onde o português escreve três: «no», «com», «pelo». Se você traduz mecanicamente, escolha o sentido que o verbo e o contexto pedem.

## Conectivos: {כִּי} e {וְ}

{כִּי} é o conectivo mais versatile: significa «que», «porque», «quando», «se» e «sim». Em Gênesis 1 aparece em {כִּי־טוֹב} «porque era bom» e em {כִּי־רָאָה} «e viu». Note que {כִּי} com {ְ} é conjunção, mas {כְּ} com {ַ} é preposição: uma letra de diferença, uma função de diferença.

{וְ} (com sheva) é o «e» de coordenação. {וַ} com {ַ} e dagesh é o wayyiqtol do capítulo 10. A diferença é um acento.

## A frase de {לְ}

{לְ} introduz purpose, direction, possession and duration: {לִשְׁמֹר} «para guardar» (infinitivo), {לַיהוָה} «para o SENHOR» (direction), {לְרוּחַ} «para o espírito»/«ao espírito» (destination), {לְעוֹלָם} «para sempre» (duration), {לִמְנוֹת} «para contar».

Em {חַסְדּוֹ לְעוֹלָם} «o amor dele [dura] para sempre» (Sl 136, 26 vezes), o {לְ} marca duração; em {לִי} «para mim» marca possessor; em {לָבוֹא} «para vir» marca finalidade. O contexto resolve.

## Um mapa para não se perder

Se você está na dúvida entre {בְּ} e {כְּ}, pergunte: «em» ou «como»? Entre {בְּ} e {לְ}: «dentro de» ou «para»? Entre {בְּ} e {מִן}: «em» ou «de»?

{בְּרֵאשִׁית} é «em» o começo, e não «do» começo: por isso {בְּרֵאשִׁית} se traduz «no princípio» e {מִרֵאשִׁית} «do começo».

Se {ל} vem colada e o substantivo seguinte está em constructo, provavelmente você tem posse; se vem separada e o substantivo tem artigo, provavelmente tem direção.`),
  vocab: [
    V('בְּרֵאשִׁית', 'רֵאשִׁית', 'no princípio'),
    V('בְּךָ', 'בְּ', 'em ti'),
    V('כְּצֵל', 'צֵל', 'como sombra'),
    V('לְעוֹלָם', 'עוֹלָם', 'para sempre'),
    V('מִמִּצְרַיִם', 'מִצְרַיִם', 'do Egito'),
    V('כִּי', 'כִּי', 'que, porque, quando'),
    V('בֵּין', 'בֵּין', 'entre'),
    V('עִמָּנוּ', 'עִם', 'conosco'),
    V('עַל', 'עַל', 'sobre'),
    V('אֶל', 'אֶל', 'para (pessoa)'),
    V('תַּחַת', 'תַּחַת', 'sob'),
    V('עַד', 'עַד', 'até'),
    V('מֵהָרָשַׁת', 'מִן', 'com pressa'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('O que «לְעוֹלָם» significa no Sl 136?'),
    options: [T('Para sempre (26 vezes!)'), T('Nunca'), T('Ontem'), T('Amanhã')],
    answer: 0,
    hint: T('{לְ} indica duração, e {עוֹלָם} é o substantivo «mundo».'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Ligue a preposição ao seu sentido.'),
      pairs: [
        { a: '{בְּרֵאשִׁית}', b: T('em, no interior') },
        { a: '{כְּצֵל}', b: T('como, segundo') },
        { a: '{לְעוֹלָם}', b: T('para, durante') },
        { a: '{עַל}', b: T('sobre') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Como você reconhece que a {ב} de {בְּתוֹרָה} é preposição?'),
      options: [
        T('Pelo dagesh forte na {ת} seguinte'),
        T('Porque a palavra tem artigo'),
        T('Porque aparece no início da frase'),
        T('Porque tem sheva'),
      ],
      answer: 0,
      hint: T('Regra §1: preposição de uma letra + dagesh forte na palavra seguinte.'),
    },
    {
      kind: 'choose',
      prompt: T('Em {כִּי־טוֹב} e {כְּצֵל}, a diferença é:'),
      options: [
        T('{כִּי} é conjunção; {כְּ} é preposição'),
        T('{כִּי} é preposição; {כְּ} é conjunção'),
        T('As duas são idênticas'),
        T('{כִּי} é uma partícula; {כְּ} é uma raiz'),
      ],
      answer: 0,
      hint: T('Regra §4: com sheva é conjunção, com patah é preposição.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete com a preposição correta: «___ מֵהָרָשַׁת» (com pressa).'),
      answer: 'מֵהָרָשַׁת',
      hint: T('A palavra já está completa: a preposição {מִן} está «enchida» com {ה} dentro dela.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{בְּ} {כְּ} {לְ} são preposições de uma letra, coladas à palavra e acompanhadas de dagesh forte na consoante seguinte.',
      ),
    },
    {
      n: '2',
      text: T('Antes de gutural, o dagesh do artigo vira {ָ}: {בְּרֵאשִׁית} → {בָּאָרֶץ} «na terra».'),
    },
    {
      n: '3',
      text: T(
        '{בְּ} significa «em», «com» e «por»: o contexto escolhe entre os três ({בְּחָרֶב} «com a espada», {בְּדֶרֶךְ} «pelo caminho»).',
      ),
    },
    {
      n: '4',
      text: T(
        '{כִּי} (com sheva) é conjunção; {כְּ} (com patah) é preposição. Uma letra de diferença muda a função.',
      ),
    },
    {
      n: '5',
      text: T(
        '{לְ} colada + substantivo em constructo sugere posse; {ל} separada + artigo sugere direção: {לִי} «para mim» e {לַיהוָה} «ao SENHOR».',
      ),
    },
  ],
  notes: [
    {
      label: T('Exegese:'),
      text: T(
        'Em Gn 1.4, {בֵּין הָאוֹר וּבֵין הַחֹשֶׁךְ} repete {בֵּין} e {ה} dos dois lados: a construção hebraica de «entre X e Y» é simétrica, enquanto a portuguesa e a espanhola usam uma preposição só. Por isso traduções desatentas escribem «entre a luz e entre as trevas». A repetição, longe de ser erro, é o modo próprio do hebraico de marcar os dois extremos.',
      ),
    },
    {
      label: T('Curiosidade:'),
      text: T(
        'Cada preposição separada tem um caso "padded" próprio, e esses casos sobreviveram até o hebreo moderno: {כַּהֲלָכָה} «assim» (de {כְּ} + {ה} + {הֲלָךְ}) é hoje uma das palavras mais comuns do israelense moderno. Uma preposição do Tanakh virou o «tal como» de um aluno.',
      ),
    },
  ],
  examples: [
    { text: '{בְּרֵאשִׁית}', gloss: T('no princípio — {בְּ} + {רֵאשִׁית}') },
    { text: '{בְּתוֹרָה}', gloss: T('na lei — {בְּ} + {תּוֹרָה} (com dagesh no {ת})') },
    { text: '{בָּאָרֶץ}', gloss: T('na terra — {בְּ} + {א} (gutural → {ָ})') },
    { text: '{בְּךָ}', gloss: T('em ti — preposição + sufixo (cap. 8)') },
    { text: '{כְּצֵל}', gloss: T('como sombra (Sl 144.4)') },
    { text: '{כְּהָאָדָם}', gloss: T('conforme ao homem, como o homem') },
    { text: '{לַיהוָה}', gloss: T('ao SENHOR — {ל} + nome divino') },
    { text: '{לְעוֹלָם}', gloss: T('para sempre — {ל} + {עוֹלָם} (Sl 136.26x)') },
    { text: '{מִמִּצְרַיִם}', gloss: T('do Egito — {מִן} separada') },
    { text: '{עַל־הָאָרֶץ}', gloss: T('sobre a terra — {עַל} separada') },
    { text: '{אֶל־מֹשֶׁה}', gloss: T('a Moisés — {אֶל} para pessoas') },
    { text: '{עִמָּנוּ אֵל}', gloss: T('conosco está Deus (Is 8.10)') },
    { text: '{בֵּין הָאוֹר וּבֵין הַחֹשֶׁךְ}', gloss: T('entre a luz e as trevas (Gn 1.4)') },
    { text: '{כִּי}', gloss: T('que, porque, quando — conjunção (com sheva)') },
    { text: '{מֵהָרָשַׁת}', gloss: T('com pressa — {מִן} + {ה} «enchida»') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — As três inseparáveis e seus sentidos'),
      head: [T('Preposição'), T('Sentido 1'), T('Sentido 2'), T('Sentido 3')],
      rows: [
        ['{בְּ}', T('em, dentro de'), T('com (instrumento)'), T('por (meio)')],
        ['{כְּ}', T('como'), T('conforme'), T('segundo')],
        ['{לְ}', T('para (finalidade)'), T('a, de (direção, posse)'), T('durante')],
      ],
    },
    {
      caption: T('Tabela 2 — Separadas, com exemplos'),
      head: [T('Palavra'), T('Glosa'), T('Exemplo')],
      rows: [
        ['{מִן}', T('de, desde'), '{מִמִּצְרַיִם}'],
        ['{עַל}', T('sobre, contra'), '{עַל־הָאָרֶץ}'],
        ['{אֶל}', T('para (pessoas)'), '{אֶל־מֹשֶׁה}'],
        ['{עִם}', T('com'), '{עִמָּנוּ אֵל}'],
        ['{תַּחַת}', T('sob'), '{תַּחַת שָׁמַיִם}'],
        ['{בֵּין}', T('entre'), '{בֵּין הָאוֹר וּבֵין הַחֹשֶׁךְ}'],
        ['{עַד}', T('até'), '{עַד־הַיּוֹם}'],
        ['{בְּלִי}', T('sem'), '{בְּלִי־דָבָר}'],
        ['{סָבִיב}', T('em torno de'), '{סָבִיב הַשָּׂדֶה}'],
      ],
    },
  ],
};
