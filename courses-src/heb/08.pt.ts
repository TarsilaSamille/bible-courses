import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Sufixos pronominais'),
  subtitle: T('סוּסִי, אָבִינוּ — «meu» e «nosso» colados na palavra'),
  section: T('Primeiros textos e partículas'),
  body: C(`## A possessed phrase em duas letras

O hebraico não tem {de} nem pronomes possessivos}: cola um **sufixo** no fim da palavra (Gesenius §91-103). Em {סוּסִי} «meu cavalo», o {־ִי} final é o pronome eu. A vantagem é a brevidade — duas letras em vez de uma palavra inteira —; a vantagem estatística é enorme: cerca de um terço das palavras do Tanakh termina assim.

Os sufixos se juntam a três coisas: ao **substantivo** (posse), ao **verbo** (objeto direto) e à **preposição** (também objeto). São os mesmos dez.

## No substantivo

{סוּסִי} «meu cavalo» · {סוּסְךָ} «teu cavalo (m.)» · {סוּסְךְ} «teu cavalo (f.)» · {סוּסוֹ} «o cavalo dele» · {סוּסָהּ} «o cavalo dela» · {סוּסֵנוּ} «nosso cavalo» · {סוּסֵיכֶם} «o cavalo de vocês (m.)» · {סוּסָם} «o cavalo deles»

A forma de {אָב} «pai» é irregular e por isso famosa: {אָבִי} «meu pai», {אָבִינוּ} «nosso pai». É literalmente a primeira palavra da oração que todo judeu e todo cristão conhece.

## No verbo: o objeto direto

{בָּרָא} + {הוּ} → {בְּרָאוֹ} «ele o criou»
{שָׁמַר} + {נִי} → {שְׁמָרַנִי} «ele me guardou»
{קָרָא} + {נִי} → {קְרָאֻנִי} «ele me chamou»

Note a vogal: o sufixo {־נִי} de 1.ª pessoa faz a vogal da raiz subir para {־וּ} ({שְׁמָרַנִי}, {זְכֹרֵנִי}). Não precisa decorar a regra: leia as formas e o padrão aparece.

## Na preposição: o objeto indireto

{עִם} + {־ִי} → {עִמִּי} «comigo»
{אֶל} + {־ךָ} → {אֵלֶיךָ} «a ti»
{ל} + {־נוּ} → {לָנוּ} «para nós»
{ב} + {־ךָ} → {בְּךָ} «em ti»

Assim, {אֱלֹהַי בְּךָ בָטָחְתִּי} (Sl 25.2) é literalmente «meu Deus, em ti eu confio»: a preposição {בְּ} recebeu o sufixo {־ךָ} e o verbo {בָטָחְתִּי} recebeu {־תִּי}. Duas pessoas na mesma frase, dois sufixos.

## O sufixo vai no fim do grupo

A regra prática: o sufixo gruda na **última** palavra do sintagma, não necessariamente no substantivo que ele qualifica. Em {דְּבַר־מֶלֶךְ} «palavra do rei», o possessive aparece em {דְּבַר־מֶלֶךְּוֹ} «palavra do rei dele» — e o leitor entende de quem é o rei. A posição é o último ponto da cadeia.

## Cuidado com as formas ambíguas

Algumas palavras absorvem o sufixo e passam a ter duas leituras. {בֵּיתִי} pode ser «minha casa» ({בַּיִת} + {־ִי}) ou «dentro de mim» ({בַּיִת} + {־י} locativo, com {י} abreviado). O contexto decide: em {בֵּיתִי} e {בֵּיתִךְ} o sentido mais comum é o possessivo.

Vale o mesmo para {אִתּוֹ} «com ele» (que parece {אִתּי} «comigo») e para {אֵלֶיךָ} «a ti» versus {אֵלֶיךְ} «a teus». Diferença mínima, efeito de leitura enorme.

## Frases para reter

{סוּסִי} «meu cavalo» · {אָבִינוּ} «nosso pai» · {עִמִּי} «comigo» · {בְּךָ} «em ti» · {לָנוּ} «para nós» · {בְּרָאוֹ} «ele o criou».`),
  vocab: [
    V('סוּסִי', 'סוּס', 'meu cavalo'),
    V('סוּסְךָ', 'סוּס', 'teu cavalo'),
    V('סוּסוֹ', 'סוּס', 'o cavalo dele'),
    V('סוּסָהּ', 'סוּס', 'o cavalo dela'),
    V('סוּסֵנוּ', 'סוּס', 'nosso cavalo'),
    V('אָבִי', 'אָב', 'meu pai'),
    V('אָבִינוּ', 'אָב', 'nosso pai'),
    V('בְּרָאוֹ', 'ברא', 'ele o criou'),
    V('עִמִּי', 'עִם', 'comigo'),
    V('לָנוּ', 'לְ', 'para nós'),
    V('בְּךָ', 'בְּ', 'em ti'),
    V('אֵלֶיךָ', 'אֶל', 'a ti'),
    V('שָׁמַר', 'שׁמר', 'guardar (raiz)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em «סוּסִי» («meu cavalo»), o que significa o sufixo {־ִי}?'),
    options: [T('«meu» (1.ª pessoa)'), T('«dele» (3.ª pessoa)'), T('plural'), T('feminino')],
    answer: 0,
    hint: T('Compare com {סוּסוֹ} «o cavalo dele» e {סוּסֵנוּ} «nosso cavalo».'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Qual sufixo de «אָבִינוּ» significa «nosso»?'),
      answer: 'נוּ',
      hint: T('São as duas últimas letras, com {ֶ} (segol) antes do {נ}.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a base ao resultado com o sufixo.'),
      pairs: [
        { a: '{סוּס} + {־ִי}', b: '{סוּסִי}' },
        { a: '{בָּרָא} + {־וֹ}', b: '{בְּרָאוֹ}' },
        { a: '{עִם} + {־ִי}', b: '{עִמִּי}' },
        { a: '{ל} + {־נוּ}', b: '{לָנוּ}' },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Em «אֱלֹהַי בְּךָ בָטָחְתִּי» (Sl 25.2), quantos pronomes aparecem?'),
      options: [
        T('Dois: {־ךָ} na preposição e {־תִּי} no verbo'),
        T('Um: só o {־תִּי}'),
        T('Três: {אֱלֹהַי}, {־ךָ} e {־תִּי}'),
        T('Nenhum: a frase usa apenas pronomes independentes'),
      ],
      answer: 0,
      hint: T('Regra §1: os mesmos dez sufixos servem para posse e para objeto.'),
    },
    {
      kind: 'choose',
      prompt: T('Por que {בֵּיתִי} é uma forma ambígua?'),
      options: [
        T('Pode ser «minha casa» ou «dentro de mim»'),
        T('Tem duas vogais diferentes'),
        T('É um verbo, não um substantivo'),
        T('Perdeu o artigo {הַ}'),
      ],
      answer: 0,
      hint: T('Regra §5: o mesmo sufixo {־י} pode ser possessivo ou locativo.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O sufixo pronominal é a marca de posse, de objeto direto e de objeto indireto — os mesmos dez servem para os três.',
      ),
    },
    {
      n: '2',
      text: T(
        'O sufixo se gruda na última palavra do grupo: {דְּבַר־מֶלֶךְּוֹ} «a palavra de seu rei», não «a palavra do seu rei».',
      ),
    },
    {
      n: '3',
      text: T('O sufixo {־נִי} de 1.ª pessoa faz a vogal da raiz passar a {־וּ}: {שָׁמַר} → {שְׁמָרַנִי}.'),
    },
    {
      n: '4',
      text: T(
        'Os sufixos de 3.ª pessoa ({-וֹ}, {־ָהּ}, {־ָם}, {־ָן}) nunca têm dagesh; os de 2.ª ({-ְךָ}, {־ְךְ}, {־ֵיכֶם}) formam com dagesh na letra final.',
      ),
    },
    {
      n: '5',
      text: T(
        'Algumas palavras absorvem o sufixo e ficam ambíguas: {בֵּיתִי} «minha casa» ou «dentro de mim».',
      ),
    },
  ],
  notes: [
    {
      label: T('Contando:'),
      text: T(
        'O sufixo {־ִי} aparece cerca de 1.900 vezes no Tanakh e {־וֹ} mais de 2.600. Nenhuma outra categoria morfológica se aproxima. Se você aprender apenas uma coisa sobre a gramática hebraica, seja esta: a pessoa mora no fim da palavra, não no começo dela.',
      ),
    },
    {
      label: T('Curiosidade:'),
      text: T(
        '{אָבִי} «meu pai» sobreviveu em línguas que já não falam hebraico: aramaico siríaco, médio-persa,algumas línguas europeias e o próprio português e o castelhano antigo em formas como «abba». O livro de Jóbre e o Gênio Uniforme da Prayer terminam com ele. Um sufixo de duas letras que atravessa três mil anos de história.',
      ),
    },
  ],
  examples: [
    { text: '{סוּסִי}', gloss: T('meu cavalo — {־ִי} = «meu»') },
    { text: '{סוּסוֹ}', gloss: T('o cavalo dele — {־וֹ} = «dele»') },
    { text: '{סוּסָהּ}', gloss: T('o cavalo dela — {־הּ} com qamats') },
    { text: '{סוּסֵנוּ}', gloss: T('nosso cavalo — {־נוּ} = «nosso»') },
    { text: '{אָבִינוּ}', gloss: T('nosso pai — a primeira palavra da oração') },
    { text: '{בְּרָאוֹ}', gloss: T('ele o criou — objeto {־וֹ} colado no verbo') },
    { text: '{שְׁמָרַנִי}', gloss: T('ele me guardou — vogal {ַ} + {־נִי}') },
    { text: '{עִמִּי}', gloss: T('comigo — {עִם} + {־ִי}') },
    { text: '{אֵלֶיךָ}', gloss: T('a ti — {אֶל} + {־ךָ} (dagesh na {כ})') },
    { text: '{בְּךָ}', gloss: T('em ti — {בְּ} + {־ךָ}') },
    { text: '{בָטָחְתִּי}', gloss: T('eu confio — {־תִּי} = «eu» (Sl 25.2)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Os dez sufixos pronominais'),
      head: [T('Pessoa'), T('Sufixo'), T('Exemplo com {סוּס}'), T('Glosa')],
      rows: [
        [T('1.ª sing.'), '{־ִי}', '{סוּסִי}', T('meu cavalo')],
        [T('2.ª masc. sing.'), '{־ְךָ}', '{סוּסְךָ}', T('teu cavalo')],
        [T('2.ª fem. sing.'), '{־ְךְ}', '{סוּסְךְ}', T('teu cavalo')],
        [T('3.ª masc. sing.'), '{־וֹ}', '{סוּסוֹ}', T('o cavalo dele')],
        [T('3.ª fem. sing.'), '{־ָהּ}', '{סוּסָהּ}', T('o cavalo dela')],
        [T('1.ª plural'), '{־ֵנוּ}', '{סוּסֵנוּ}', T('nosso cavalo')],
        [T('2.ª pl. masc.'), '{־ֵיכֶם}', '{סוּסֵיכֶם}', T('o cavalo de vocês')],
        [T('3.ª plural'), '{־ָם}', '{סוּסָם}', T('o cavalo deles')],
        [T('2.ª pl. fem.'), '{־ֵיכֶן}', '{סוּסֵיכֶן}', T('o cavalo de vocês (f.)')],
        [T('3.ª pl. fem.'), '{־ָן}', '{סוּסָן}', T('o cavalo delas')],
      ],
    },
    {
      caption: T('Tabela 2 — O mesmo sufixo em três funções'),
      head: [T('Função'), T('Base + sufixo'), T('Resultado'), T('Glosa')],
      rows: [
        [T('Posse (substantivo)'), '{סוּס} + {־ִי}', '{סוּסִי}', T('meu cavalo')],
        [T('Objeto (verbo)'), '{שָׁמַר} + {־נִי}', '{שְׁמָרַנִי}', T('ele me guardou')],
        [T('Objeto indireto (preposição)'), '{ב} + {־ךָ}', '{בְּךָ}', T('em ti')],
      ],
    },
    {
      caption: T('Tabela 3 — Formas famosas que você precisa conhecer'),
      head: [T('Forma'), T('Análise'), T('Glosa')],
      rows: [
        ['{אָבִי}', T('{אָב} + {־ִי} (forma assimilada)'), T('meu pai')],
        ['{אָבִינוּ}', T('{אָב} + {־ינוּ}'), T('nosso pai')],
        ['{בְּרָאוֹ}', T('{בָּרָא} + {־וֹ} (objeto)'), T('ele o criou')],
        ['{עִמִּי}', T('{עִם} + {־ִי}'), T('comigo')],
        ['{אֵלֶיךָ}', T('{אֶל} + {־ךָ}'), T('a ti')],
        ['{לָנוּ}', T('{ל} + {־נוּ}'), T('para nós')],
        ['{בְּךָ}', T('{ב} + {־ךָ}'), T('em ti')],
        ['{בֵּיתִי}', T('ambígua: posse ou locativo'), T('minha casa / dentro de mim')],
      ],
    },
  ],
};
