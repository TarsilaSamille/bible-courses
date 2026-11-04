import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  title: T('Substantivos: gênero e número'),
  subtitle: T('כָּל־דָּבָר — só masculino ou feminino, e três números'),
  section: T('Substantivos, adjetivos e pronomes'),
  body: C(`## Não existe neutro

Todo substantivo hebraico é **masculino** ou **feminino**, sem exceção (Gesenius §97). Isso não tem nada a ver com sexo nem com natureza: {מֶלֶךְ} «rei» é masculino e {מַלְכָּה} «rainha» é feminino; {חֶסֶד} «amor firme» é masculino, embora termine em {-ֶת}, e {אוֹר} «luz» é masculino, embora seja abstrato. O gênero decide concordância, não tradução — e o português/espanhol obriga você a inventar um gênero que o hebraico não tem.

Por isso, quando o hebraico diz {רוּחַ} «espírito» no masculino, isso não afirma nada sobre o Espírito: apenas concorda com o adjetivo ou com o verbo que o acompanha.

## Como se reconhece o feminino

A maioria dos femininos termina em {-ָה} (qamats + he): {מַלְכָּה} «rainha», {אִשָּׁה} «mulher», {לָשׁוֹן} «língua», {תּוֹרָה} «instrução». Um punhado termina em {-ֶת} (segol + tav), como {בַּת} «filha». Mas a terminação é pista, não prova: {מֶלֶךְ} «rei» também termina em {-ֶת} e é masculino.


Regra prática: na dúvida, pergunte ao plural: {-ִים} revela masculino, {-וֹת} revela feminino. É o truque que funciona mesmo quando a terminação engana.

## O plural

O plural masculino acrescenta {-ִים}: {סוּס} → {סוּסִים} «cavalos», {יוֹם} → {יָמִים} «dias», {מֶלֶךְ} → {מְלָכִים} «reis». O plural feminino acrescenta {-וֹת}: {מַלְכָּה} → {מְלָכוֹת} «rainhas», {בַּת} → {בָּנוֹת} «filhas», {אִשָּׁה} → {נָשִׁים} «mulheres».

Os nouns segmentais (segolates, como {מֶלֶךְ} «rei») têm um plural que parece vir de outra palavra: {מְלָכִים} traz o {ָ} que o singular não tinha. Isso é um resíduo do plural {מְלָכִים} formado sobre uma base antiga; na prática, basta aprender o par completo.

## Plurais irregulares

Alguns plurais fogem do padrão e precisam ser decorados: {אִשָּׁה} → {נָשִׁים}, {בַּיִת} → {בָּתִּים} «casas», {עִיר} → {עָרִים} «cidades», {אָדָם} → {אֲנָשִׁים} «pessoas», {שֶׁמֶשׁ} → {שַׁמַּיִם} «sóis», {בֵּן} → {בָּנִים} «filhos». Em todos, o padrão {-ִים} continua: o que muda é a base.

## O dual

O dual é a marca mais original da língua: {-ַיִם} (yim) indica exatamente dois: {יָדַיִם} «(duas) mãos», {עֵינַיִם} «olhos», {רַגְלַיִם} «pés», {שָׁמַיִם} «céus», {מַיִם} «águas», {אֲחֵי} «dois irmãos».

Na Bíblia o dual é constante: {אֵחֶיךָ} «teu irmão» pode significar «teus dois irmãos», e {שְׁנֵי} «dois» em {שְׁנֵי אֲנָשִׁים} é literalmente «duas pessoas». Os plurais de um dual raramente existem: na prática, {שָׁמַיִם} já funciona como plural de {שָׁמָה} «céu», e {שָׁמֵי} é a forma frequentíssima em locuções como {שָׁמֵי אֲדָם} «céus de terra».

Palavras para reter: {יוֹם} «dia», {אוֹר} «luz», {אֶרֶץ} «terra» — as três reaparecem em Gênesis 1 e em Salmo 19.`),
  vocab: [
    V('סוּסִים', 'סוּס', 'cavalos'),
    V('יָמִים', 'יוֹם', 'dias'),
    V('מְלָכִים', 'מֶלֶךְ', 'reis'),
    V('מְלָכוֹת', 'מַלְכָּה', 'rainhas'),
    V('נָשִׁים', 'אִשָּׁה', 'mulheres'),
    V('בָּנוֹת', 'בַּת', 'filhas'),
    V('שָׁמַיִם', 'שָׁמַיִם', 'céus'),
    V('מַיִם', 'מַיִם', 'águas'),
    V('עֵינַיִם', 'עַיִן', 'olhos (dual)'),
    V('רַגְלַיִם', 'רֶגֶל', 'pés (dual)'),
    V('חֶסֶד', 'חֶסֶד', 'amor firme (masc.)'),
    V('מַלְכָּה', 'מַלְכָּה', 'rainha'),
    V('אִשָּׁה', 'אִשָּׁה', 'mulher'),
    V('בַּת', 'בַּת', 'filha'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é o plural de «יוֹם» (dia, masculino)?'),
    options: [T('יוֹמוֹת'), T('יָמִים'), T('יוֹמַיִם'), T('יָמָה')],
    answer: 1,
    hint: T('{יוֹם} é masculino, então o plural leva {-ִים}.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual destes substantivos é FEMININO?'),
      options: [T('מַלְכָּה'), T('מֶלֶךְ'), T('דָּבָר'), T('חֶסֶד')],
      answer: 0,
      hint: T('Só uma delas tem plural em {-וֹת} ({מְלָכוֹת}).'),
    },
    {
      kind: 'fill',
      prompt: T('Escreva o plural feminino de «בַּת» (filha).'),
      answer: 'בָּנוֹת',
      hint: T('O plural feminino acrescenta {-וֹת}: {בַּת} → {בָּנוֹת}.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o substantivo ao seu plural.'),
      pairs: [
        { a: '{אִשָּׁה}', b: '{נָשִׁים}' },
        { a: '{בַּיִת}', b: '{בָּתִּים}' },
        { a: '{עִיר}', b: '{עָרִים}' },
        { a: '{מֶלֶךְ}', b: '{מְלָכִים}' },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('O que a forma {מַיִם} «águas» demonstra?'),
      options: [
        T('Que o hebraico tem um plural especial para líquidos'),
        T('Que {-ַיִם} é o dual, usado coletivamente'),
        T('Que a palavra é feminina porque termina em {-ִים}'),
        T('Que é um numeral, não um substantivo'),
      ],
      answer: 1,
      hint: T('Regra §4: {-ַיִם} marca dois — usado aqui para um conjunto.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Todo substantivo hebraico é masculino ou feminino: não há neutro, e o gênero nunca indica sexo nem natureza.',
      ),
    },
    {
      n: '2',
      text: T(
        'A terminação não decide o gênero: {-ֶת} aparece em {מֶלֶךְ} (masc.) e {-ַיִם} em {מַיִם} (fem.). Na dúvida, veja o plural.',
      ),
    },
    {
      n: '3',
      text: T('Plural masculino {-ִים}, plural feminino {-וֹת}: {מֶלֶךְ} → {מְלָכִים}, {מַלְכָּה} → {מְלָכוֹת}.'),
    },
    {
      n: '4',
      text: T(
        'O dual {-ַיִם} marca exatamente dois: {עֵינַיִם} «olhos», {רַגְלַיִם} «pés», {שָׁמַיִם} «céus», {מַיִם} «águas».',
      ),
    },
    {
      n: '5',
      text: T(
        'O número concorda com o adjetivo e com o verbo: {מְלָכִים טוֹבִים} «reis bons» (pl. masc.), {מְלָכוֹת טוֹבוֹת} «rainhas boas» (pl. fem.).',
      ),
    },
  ],
  notes: [
    {
      label: T('Pegadinha:'),
      text: T(
        'Muitos iniciantes traduzem {מַלְכָּה} por «rei» quando o contexto égender neutro. Lembre-se de que {מֶלֶךְ}/{מַלְכָּה} é o par rei/rainha, e que o par {אִישׁ}/{אִשָּׁה} é homem/mulher: são dois pares independentes, não sinônimos. O plural {אֲנָשִׁים} pode traduzir «homens» ou «gente» conforme o verbo.',
      ),
    },
    {
      label: T('Para o próximo capítulo:'),
      text: T(
        'Saber o gênero de um substantivo é o que permite concordar o adjetivo. No capítulo 4 você verá que {טוֹבָה} concorda com {מַלְכָּה} mas não com {מֶלֶךְ} — e que o artigo {הַ} é repetido nos dois quando o substantivo é determinado.',
      ),
    },
  ],
  examples: [
    { text: '{מֶלֶךְ}', gloss: T('rei (masc.) → {מַלְכָּה} rainha (fem.)') },
    { text: '{סוּסִים}', gloss: T('cavalos (pl. masc. de {סוּס})') },
    { text: '{יָמִים}', gloss: T('dias (pl. masc. de {יוֹם})') },
    { text: '{מְלָכוֹת}', gloss: T('rainhas (pl. fem. de {מַלְכָּה})') },
    { text: '{נָשִׁים}', gloss: T('mulheres — plural irregular de {אִשָּׁה}') },
    { text: '{בָּנוֹת}', gloss: T('filhas — o {ו} fecha a última sílaba de {בַּת}') },
    { text: '{שָׁמַיִם}', gloss: T('céus — dual, também usado como plural') },
    { text: '{מַיִם}', gloss: T('águas — dual coletivo, com som de {y}') },
    { text: '{רַגְלַיִם}', gloss: T('pés (dual) — volta no Salmo 110:1 ({לְרַגְלֶיךָ})') },
    { text: '{חֶסֶד}', gloss: T('amor firme — termina em {-ֶת} mas é MASCULINO') },
    { text: '{אֲנָשִׁים}', gloss: T('pessoas — plural de {אָדָם}, com nome próprio') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Como descobrir o gênero'),
      head: [T('Pista'), T('Masculino'), T('Feminino')],
      rows: [
        [T('Terminação'), '{מֶלֶךְ} {סוּס} {יוֹם} {דָּבָר}', '{מַלְכָּה} {אִשָּׁה} {לָשׁוֹן} {תּוֹרָה}'],
        [T('Plural'), '{-ִים}', '{-וֹת}'],
        [T('Artigo'), '{הַמֶּלֶךְ} {הַיּוֹם}', '{הַמַּלְכָּה} {הַתּוֹרָה}'],
        [T('Atenção'), '{חֶסֶד} (termina em -ֶת!)', '{שָׁמַיִם} (vogais de água!)'],
      ],
    },
    {
      caption: T('Tabela 2 — Número: singular, dual e plural'),
      head: [T('Lemma'), T('Singular'), T('Dual'), T('Plural')],
      rows: [
        ['{מֶלֶךְ}', '{מֶלֶךְ}', '{שְׁנֵי מְלָכִים}', '{מְלָכִים}'],
        ['{סוּס}', '{סוּס}', '{סֻסַּיִם}', '{סוּסִים}'],
        ['{אִשָּׁה}', '{אִשָּׁה}', '{שְׁתֵּי נָשִׁים}', '{נָשִׁים}'],
        ['{שָׁמַיִם}', '{שָׁמַיִם}', '—', '—'],
        ['{מַיִם}', '{מַיִם}', '—', '—'],
      ],
    },
    {
      caption: T('Tabela 3 — Plurais irregulares que você vai reencontrar'),
      head: [T('Singular'), T('Glosa'), T('Plural'), T('Glosa')],
      rows: [
        ['{אִשָּׁה}', T('mulher'), '{נָשִׁים}', T('mulheres')],
        ['{בַּיִת}', T('casa'), '{בָּתִּים}', T('casas')],
        ['{עִיר}', T('cidade'), '{עָרִים}', T('cidades')],
        ['{אָדָם}', T('ser humano'), '{אֲנָשִׁים}', T('pessoas')],
        ['{בֵּן}', T('filho'), '{בָּנִים}', T('filhos')],
        ['{דֶּרֶךְ}', T('caminho'), '{דְּרָכִים}', T('caminhos')],
      ],
    },
  ],
};
