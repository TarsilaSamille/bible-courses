import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('Numerais'),
  subtitle: T('שִׁבְעָה — o número da plenitude e da semana'),
  section: T('Verbo e numeral'),
  body: C(`## A regra da polaridade

Os numerais-cardinais de 1 a 10 têm duas formas por número: absoluta e constructa. E há uma regra de gênero que assusta iniciantes — mas que é mecânica:

Números **1 e 2** são comuns: {אֶחָד} «um» (masc.) e {אַחַת} «uma» (fem.); {שְׁנַיִם} «dois» (masc.) e {שְׁתֵּי} «duas» (fem.).

Números **3 a 10** invertem: a forma masculina é {שְׁלֹשָׁה}, {אַרְבָּעָה}, {חֲמִשָּׁה}…, e a feminina é {שְׁלֹשׁ}, {אַרְבָּע}… O seja: para contar substantivos masculinos, use a forma **feminina**; para contar femininos, use a forma masculina. Em quase toda a Bíblia o número concorda com um substantivo masculino — logo, quase toda a Bíblia usa formas femininas. É por isso que {שִׁבְעָה} «sete» é uma palavra «feminina» que o mundo inteiro associate a plenitude.

## Absoluto e constructo

Quando o numeral vem **sozinho**, ele aparece no estado absoluto e mantém a vogal final: {שִׁבְעָ֖ה} «sete».

Quando vem **antes** de um substantivo, entra em constructo e a vogal final cai: {שֶׁ֥בַע} + {שָׁבָ֖עַ} = {שֶׁ֥בַע שָׁבָעַ} «sete sabôs». Compare com o substantivo abstracto: {יוֹם אֶחָד} «um dia» (cap. 3).

Detalhe poético: a ordem se inverte com frequência e as palavras recebem maqaf — {שֵׁשֶׁת־יָמִים} «seis dias» (Êx 20.11), {שְׁנֵי־הַלְוִיִּם} «os dois levitas» {שְׁנֵי־הַלְוִיִּם} «os dois levitas».

## Ordinais

Os ordinais se formam com {י} e terminam em {ִי}: {רִאשׁוֹן} «primeiro», {שֵׁנִי} «segundo», {שְׁלִישִׁי} «terceiro», {רְבִיעִי} «quarto», {חֲמִישִׁי} «quinto», {שִׁשִּׁי} «sexto», {שְׁבִיעִי} «sétimo», {שְׁמִינִי} «oitavo», {תְּשִׁיעִי} «nono», {עֲשִׂירִי} «décimo». O feminino acrescenta {ת}: {שְׁנִית}, {שְׁלִישִׁית}.

O ordinais leva artigo quando indica posição: {בַּיּוֹם הַשְּׁבִיעִי} «no sétimo dia» (Gn 2.2). E há o uso curioso do cardinal como ordinal: {יוֹם אֶחָד} «dia um» em Gn 1.5 significa literalmente «o primeiro dia».

## Dezenas, centenas, milhares

Dezenas são regulares: {עֶשְׂרִים} 20, {שְׁלֹשִׁים} 30, {אַרְבָּעִים} 40, {חֲמִשִּׁים} 50, {שִׁשִּׁים} 60, {שִׁבְעִים} 70, {שְׁמֹנִים} 80, {תִּשְׁעִים} 90.

A partir de 11, porém, a unidade vem **depois**: {אַחַד־עֶשֶׂר} 11, {שְׁנֵים־עֶשֶׂר} 12, {שְׁלֹשָׁה־עֶשֶׂר} 13, {אַרְבָּעָה־עֶשֶׂר} 14, {חֲמִשָּׁה־עֶשֶׂר} 15, {שִׁשָּׁה־עֶשֶׂר} 16, {שִׁבְעָה־עֶשׂר} 17, {שְׁמֹנָה־עֶשֶׂר} 18, {תִּשְׁעָה־עֶשֶׂר} 19.

E há um truque antigo: de 21 a 39, de 41 a 59 e assim por diante, o dez termina em {י} e a unidade recebe {ה} — {אֶחָד וּשְׁלֹשִׁים} «trinta e um». De 41 em diante, a unidade costuma terminar em {ים}: {אַרְבָּעִים וְאֶחָד} «quarenta e um».

Centenas e milhares: {מֵאָה} 100, {מֵאַת} «duzentas» (dual), {אֶלֶף} 1000, {אַלְפֵי יִשְׂרָאֵל} «os milhares de Israel», {רִבְּבוֹת} «miriades» (10.000) e {רְאוֹת} «centenas de milhares».

## Números como raízes verbais

Curiosidade que explica muita coisa: os numerais 1 a 10 também são **raízes verbais** no piel, e o verbo significa «fazer tal número de vezes». {הִקְטִירוּ} «offered» vem de {קטר} «fumaça» e o número 2: {שְׁנַיִם} + {קטר}. {עֲשָׂרֶת} «fez dez» + {יד} é literalmente «dez mãos» = «matou» ({הָעָשָׂרָה}). É o mecanismo eufônico: um número mais um substantivo que produz um verbo.

## O sete no Tanakh

{שִׁבְעָה} «sete» aparece mais de 240 vezes em contexto religioso: sete dias de criação, sete tronos em Daniel 7, sete trumpetes em Apocalipse, sete na forma de {שְׁבִיעִי} no sábado. A raiz {שׁבע} significa «ser completo» e também «jurar» — e o sábado, o sétimo dia, é o dia da plenitude. Guarde o sete: ele é o número mais symbolicamente carregado da Bíblia.`),
  vocab: [
    V('אֶחָד', 'אֶחָד', 'um'),
    V('אַחַת', 'אַחַת', 'uma (fem.)'),
    V('שְׁנַיִם', 'שְׁנַיִם', 'dois'),
    V('שְׁתֵּי', 'שְׁתֵּי', 'duas (fem.)'),
    V('שִׁבְעָה', 'שִׁבְעָה', 'sete'),
    V('שֵׁשֶׁת־יָמִים', 'שֵׁשׁ', 'seis dias'),
    V('הַשְּׁבִיעִי', 'שְׁבִיעִי', 'o sétimo'),
    V('עֲשָׂרָה', 'עֲשָׂרָה', 'dez'),
    V('שְׁלֹשָׁה', 'שְׁלֹשָׁה', 'três'),
    V('שַׁבָּת', 'שַׁבָּת', 'sábado'),
    V('מֵאָה', 'מֵאָה', 'cem'),
    V('אֶלֶף', 'אֶלֶף', 'mil'),
    V('רִאשׁוֹן', 'רִאשׁוֹן', 'primeiro'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Como se diz «sete» em hebraico (forma absoluta)?'),
    answer: 'שִׁבְעָה',
    hint: T('Começa com shin e termina com he; é a forma usada para contar homens.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Ligue o número à sua forma absoluta masculina.'),
      pairs: [
        { a: T('três'), b: '{שְׁלֹשָׁה}' },
        { a: T('sete'), b: '{שִׁבְעָה}' },
        { a: T('dez'), b: '{עֲשָׂרָה}' },
        { a: T('dois'), b: '{שְׁנַיִם}' },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Como se diz «três mulheres»?'),
      options: [T('{שְׁלֹשׁ נָשִׁים}'), T('{שְׁלֹשָׁה אִשָּׁה}'), T('{שְׁלֹשָׁה נָשִׁים}'), T('{שֶׁלֹשׁ נָשִׁים}')],
      answer: 2,
      hint: T('Regra §1: {נָשִׁים} é feminino, logo o numeral usa a forma masculina {שְׁלֹשָׁה}.'),
    },
    {
      kind: 'choose',
      prompt: T('Em «שֶׁבַע שָׁבָעַ» («sete sabôs»), {שֶׁבַע} está:'),
      options: [
        T('em estado absoluto'),
        T('em estado constructo (perdeu o {ָ})'),
        T('no plural'),
        T('no feminino'),
      ],
      answer: 1,
      hint: T('Regra §2: numeral antes de substantivo entra em constructo.'),
    },
    {
      kind: 'fill',
      prompt: T('Escreva o ordinal «sétimo» com artigo.'),
      answer: 'הַשְּׁבִיעִי',
      hint: T('Base {שְׁבִיעִי} + o artigo {הַ} com dagesh forte no {ש}.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'De 3 a 10 o numeral é de gênero oposto ao substantivo: para contar varões, use a forma feminina ({שִׁבְעָה} conta homens).',
      ),
    },
    {
      n: '2',
      text: T(
        'Numeral antes de substantivo entra em constructo e perde a vogal final: {שֶׁבַע שָׁבָעַ} «sete sabôs».',
      ),
    },
    {
      n: '3',
      text: T(
        'O dual é o numeral de dois: {שְׁנַיִם} (masc.) e {שְׁתֵּי} (fem.), e as formas absolutas 1 e 2 são irregulares.',
      ),
    },
    { n: '4', text: T('De 11 a 20 a unidade vem depois e ligada por maqaf: {חֲמִשָּׁה־עֶשֶׂר} «quinze».') },
    {
      n: '5',
      text: T(
        'Os ordinais terminam em {ִי} (masc.) ou {ִית} (fem.) e levam artigo quando indicam posição: {הַשְּׁבִיעִי}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Armadilha:'),
      text: T(
        'Muitos tradutores colocam o numeral antes do substantivo por questões de estilo, produzindo construções erradas. A ordem hebraica é substantivo + numeral, ou numeral + substantivo com maqaf quando poético. Atenção à polaridade: se o substantivo é feminino, o numeral de 3-10 assume a forma **masculina** — {שְׁלֹשָׁה נָשִׁים} «três mulheres», e não {שְׁלֹשׁ}.',
      ),
    },
    {
      label: T('O sete e o descanso:'),
      text: T(
        'A raiz {שׁבע} significa «ser completo» e dá {שַׁבָּת} «sábado», {שָׁבוּעַ} «semana» e {שְׁבוּעָה} «juramento». A semana hebraica não termina no domingo: ela termina no sábado, o dia em que Deus «descansou». Por isso o sete é também o número do descanso e do juramento — contar por semanas é contar por plenitudes.',
      ),
    },
  ],
  examples: [
    { text: '{אֶחָד}', gloss: T('um (masc. abs.)') },
    { text: '{אַחַת}', gloss: T('uma (fem. abs.)') },
    { text: '{שְׁנַיִם}', gloss: T('dois (masc.) — forma dual') },
    { text: '{שְׁתֵּי}', gloss: T('duas (fem.) — {שְׁ־תֵּי}') },
    { text: '{שִׁבְעָה}', gloss: T('sete (abs. masc.) — a forma usada para contar homens') },
    { text: '{שֶׁבַע}', gloss: T('sete (constructo) — mesma palavra sem vogal final') },
    { text: '{שֵׁשֶׁת־יָמִים}', gloss: T('seis dias (Êx 20.11) — numeral em constructo + maqaf') },
    { text: '{הַשְּׁבִיעִי}', gloss: T('o sétimo (com artigo) — Gn 2.2') },
    { text: '{יוֹם אֶחָד}', gloss: T('dia um = o primeiro dia (Gn 1.5)') },
    { text: '{חֲמִשָּׁה־עֶשֶׂר}', gloss: T('quinze — unidade + dez com maqaf') },
    { text: '{אַרְבָּעִים וְאֶחָד}', gloss: T('quarenta e um — {י} na dezena') },
    { text: '{מֵאַת}', gloss: T('duzentas — dual de {מֵאָה}') },
    { text: '{שַׁבָּת}', gloss: T('sábado — do sétimo dia, dia de descanso (Êx 20.11)') },
    { text: '{הָעָשָׂרָה}', gloss: T('matou — {עֲשָׂרֶת} «dez» + {יד} «mão»') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — De 1 a 10: absoluta, constructo e o truque do gênero'),
      head: [
        T('N'),
        T('Absoluto (masc.)'),
        T('Absoluto (fem.)'),
        T('Constructo (masc.)'),
        T('Constructo (fem.)'),
      ],
      rows: [
        ['1', '{אֶחָד}', '{אַחַת}', '{אֶחָד}', '{אַחַת}'],
        ['2', '{שְׁנַיִם}', '{שְׁתֵּי}', '{שְׁנֵי}', '{שְׁתֵּי}'],
        ['3', '{שְׁלֹשָׁה}', '{שְׁלֹשׁ}', '{שְׁלֹשׁ}', '{שְׁלֹשׁ}'],
        ['4', '{אַרְבָּעָה}', '{אַרְבָּע}', '{אַרְבָּע}', '{אַרְבָּע}'],
        ['5', '{חֲמִשָּׁה}', '{חֲמֵשׁ}', '{חֲמֵשׁ}', '{חֲמֵשׁ}'],
        ['6', '{שִׁשָּׁה}', '{שֵׁשׁ}', '{שֵׁשׁ}', '{שֵׁשׁ}'],
        ['7', '{שִׁבְעָה}', '{שֶׁבַע}', '{שֶׁבַע}', '{שֶׁבַע}'],
        ['8', '{שְׁמֹנָה}', '{שְׁמֹנֶה}', '{שְׁמֹנֶה}', '{שְׁמֹנֶה}'],
        ['9', '{תִּשְׁעָה}', '{תֵּשַׁע}', '{תֵּשַׁע}', '{תֵּשַׁע}'],
        ['10', '{עֲשָׂרָה}', '{עֲשֶׂרֶת}', '{עֲשֶׂר}', '{עֲשֶׂרֶת}'],
      ],
    },
    {
      caption: T('Tabela 2 — Ordinais, com e sem artigo'),
      head: [T('N'), T('Ordinal masc.'), T('Ordinal fem.'), T('Com artigo')],
      rows: [
        ['1', '{רִאשׁוֹן}', '{רִאשׁוֹנָה}', '{הָרִאשׁוֹן}'],
        ['2', '{שֵׁנִי}', '{שְׁנִית}', '{הַשֵׁנִי}'],
        ['3', '{שְׁלִישִׁי}', '{שְׁלִישִׁית}', '{הַשְּׁלִישִׁי}'],
        ['6', '{שִׁשִּׁי}', '{שִׁשִּׁית}', '{הַשִּׁשִּׁי}'],
        ['7', '{שְׁבִיעִי}', '{שְׁבִיעִית}', '{הַשְּׁבִיעִי}'],
        ['10', '{עֲשִׂירִי}', '{עֲשִׂירִית}', '{הָעֲשִׂירִי}'],
      ],
    },
    {
      caption: T('Tabela 3 — Dezenas, centenas e milhares'),
      head: [T('Valor'), T('Forma'), T('Glosa')],
      rows: [
        ['11', '{אַחַד־עֶשֶׂר}', T('onze')],
        ['12', '{שְׁנֵים־עֶשֶׂר}', T('doze')],
        ['17', '{שִׁבְעָה־עֶשֶׂר}', T('dezessete')],
        ['20', '{עֶשְׂרִים}', T('vinte')],
        ['30', '{שְׁלֹשִׁים}', T('trinta')],
        ['31', '{אֶחָד וּשְׁלֹשִׁים}', T('trinta e um')],
        ['41', '{אַרְבָּעִים וְאֶחָד}', T('quarenta e um')],
        ['100', '{מֵאָה}', T('cem')],
        ['200', '{מֵאַת}', T('duzentas (dual)')],
        ['1000', '{אֶלֶף}', T('mil')],
        ['10.000', '{רִבְּבוֹת}', T('miriades')],
      ],
    },
  ],
};
