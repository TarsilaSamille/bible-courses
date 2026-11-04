import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('Adjetivos e concordância'),
  subtitle: T('טוֹב, טוֹבָה — o adjetivo segue o nome'),
  section: T('Substantivos, adjetivos e pronomes'),
  body: C(`## A ordem invertida

Em português e espanhol o adjetivo vem antes do substantivo («um bom dia»); em hebraico vem **depois**: {יוֹם טוֹב} «um dia bom». O substantivo vem primeiro porque é o centro da frase — o adjetivo é apenas uma informação acrescentada. E, se o substantivo é determinado, o adjetivo costuma repetir o artigo: {הַיּוֹם הַטּוֹב} «o dia bom», {הָאִשָּׁה הַטּוֹבָה} «a mulher boa».

## O que o adjetivo concorda

O adjetivo concorda em **gênero e número** com o substantivo — e nada mais. Ele não se flexiona por caso (não há acusativo nem dativo no adjetivo), porque o caso do substantivo já basta. Dois sinais fazem o trabalho são a vogal e a terminação:

{טוֹב} «bom» masc. sing. · {טוֹבָה} fem. sing. · {טוֹבִים} masc. pl. · {טוֹבוֹת} fem. pl.
{גָּדוֹל} «grande» masc. sing. · {גְּדוֹלָה} fem. sing. · {גְּדוֹלִים} masc. pl. · {גְּדוֹלוֹת} fem. pl.

Note como o {ָ} (qamats) é a marca do feminino em quase todos os adjetivos: {טוֹבָה}, {גְּדוֹלָה}, {נִכְבָּה} «nobre», {יָדוֹעַ} «conhecido». O plural,{ִים} marca o masculino e {וֹת} o feminino.

## Atributivo ou predicativo?

A presença do artigo decide a função. Com artigo repetido, o adjetivo é **atributivo**: qualifica o substantivo como parte dele ({הַיּוֹם הַטּוֹב} «o dia bom»). Sem artigo, mesmo tendo o substantivo um, o adjetivo é **predicativo**: afirma algo sobre o sujeito, como um verbo omitido ({הַכֹּל טוֹב מֵאֹד} em Gn 1.31 = «tudo era muito bom»; {אַשְׁרֵי־הָאִישׁ} em Sl 1.1 = «feliz é o homem»).

Essa distinção muda o sentido e é uma das ferramentas exegéticas mais produtivas do hebreo. Em Gn 1.31, {הַכֹּל} leva artigo e {טוֹב} não: Deus não está definindo uma classe de coisas boas, está avaliando tudo o que fez.

## Adjetivo substantivado

O substantivo hebraico é tão escasso que os adjetivos acabam preenchendo o lugar dos nomes: {הַגִּבּוֹרִים} «os valentes», {הַנְּבִיאִים} «os profetas», {הַיָּשָׁרִים} «os justos», {הַחַיִּים} «os vivos». É por isso que {אֱלֹהִים} pode funcionar como substantivo («Deus») e como adjetivo («divino») sem que nada mude na gramática.

## Adjetivo com sufixo pronominal

O adjetivo recebe sufixos exatamente como o substantivo (cap. 8): {בָּרוּךְ} «bendito», {בָּרוּךְ אַתָּה} «bendito és tu», {נַעֲשֶׂה} «feito», {נְעָשִׂים} «feitos». Em Is 53.10, {וְחָפַץ יְהוָה בְּיָדוֹ יַצְלִיחַ} usa o substantivo {יָד} «mão» no dual: {בְּיָדוֹ} é «na mão dele» com o sufixo dual {וֹ}.

## Fórmulas para reter

{יוֹם טוֹב} «um dia bom» · {הַיּוֹם הַטּוֹב} «o dia bom» · {הָאָרֶץ הַטּוֹבָה} «a boa terra» (Dt 1.35) · {הָאָרֶץ טוֹבָה} «a terra é boa» · {שֵׁם טוֹב} «um bom nome» (Pv 22.1).`),
  vocab: [
    V('טוֹב', 'טוֹב', 'bom'),
    V('טוֹבָה', 'טוֹב', 'boa (fem.)'),
    V('טוֹבִים', 'טוֹב', 'bons (m. pl.)'),
    V('גָּדוֹל', 'גָּדוֹל', 'grande'),
    V('גְּדוֹלָה', 'גָּדוֹל', 'grande (fem.)'),
    V('הַיּוֹם', 'יוֹם', 'o dia'),
    V('הָאָרֶץ', 'אֶרֶץ', 'a terra'),
    V('שֵׁם', 'שֵׁם', 'nome'),
    V('קָדוֹשׁ', 'קָדוֹשׁ', 'santo'),
    V('חָכֵם', 'חָכֵם', 'sábio'),
    V('הַנְּבִיאִים', 'נָבִיא', 'os profetas'),
    V('בָּרוּךְ', 'בָּרוּךְ', 'bendito'),
    V('הַכֹּל', 'כָּל', 'tudo, o todo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se diz «a boa terra» (com artigo nos dois)?'),
    options: [T('טוֹבָה אֶרֶץ'), T('הָאָרֶץ הַטּוֹבָה'), T('אֶרֶץ הַטּוֹבָה'), T('הָאָרֶץ טוֹבָה')],
    answer: 1,
    hint: T('O substantivo vem primeiro, o adjetivo depois, e ambos levam artigo (§3).'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Em «הַכֹּל טוֹב מֵאֹד» (Gn 1.31), {טוֹב} é:'),
      options: [
        T('atributivo, porque repete o artigo'),
        T('predicativo, porque não tem artigo'),
        T('um substantivo, não um adjetivo'),
        T('um numeral'),
      ],
      answer: 1,
      hint: T('Regra §3: sem artigo, o adjetivo vira afirmação sobre o sujeito.'),
    },
    {
      kind: 'fill',
      prompt: T('Escreva a forma feminina singular de «גָּדוֹל» (grande).'),
      answer: 'גְּדוֹלָה',
      hint: T('O feminino recebe {ָ} (qamats) antes da terminação: {גָּדוֹל} → {גְּדוֹלָה}.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada substantivo ao adjetivo que concorda com ele.'),
      pairs: [
        { a: '{הָאִשָּׁה}', b: '{הַטּוֹבָה}' },
        { a: '{הַמֶּלֶךְ}', b: '{הַטּוֹב}' },
        { a: '{הַשַּׁיִת}', b: '{הַטָּוֹבָה}' },
        { a: '{הַמְּלָכִים}', b: '{הַטּוֹבִים}' },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual é a ordem correta em hebraico para «um bom rei»?'),
      options: [T('{טוֹב מֶלֶךְ}'), T('{מֶלֶךְ טוֹב}'), T('{מֶלֶךְ הַטּוֹב}'), T('{הַמֶּלֶךְ טוֹבָה}')],
      answer: 1,
      hint: T('Nome antes, adjetivo depois, e sem artigo quando é indefinido.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('O adjetivo vem depois do substantivo e concorda em gênero e número, nunca em caso.'),
    },
    {
      n: '2',
      text: T(
        'Feminino singular quase sempre tem {ָ} (qamats): {טוֹבָה}, {גְּדוֹלָה}. Plurais: {ִים} masculino, {וֹת} feminino.',
      ),
    },
    {
      n: '3',
      text: T(
        'Artigo repetido = adjetivo atributivo («o dia bom»); artigo ausente = adjetivo predicativo («o dia é bom»).',
      ),
    },
    {
      n: '4',
      text: T(
        'O artigo do substantivo não «passa» para o adjetivo: se o substantivo o traz, o adjetivo só o traz se for atributivo.',
      ),
    },
    {
      n: '5',
      text: T(
        'Adjetivos substantivados com {הַ} funcionam como grupos: {הַנְּבִיאִים} «os profetas», {הַיָּשָׁרִים} «os justos».',
      ),
    },
  ],
  notes: [
    {
      label: T('Exegese:'),
      text: T(
        'Como {טוֹב} é o mesmo adjetivo em {הַמֶּלֶךְ הַטוֹב} e em {הַמֶּלֶךְ טוֹב}, a diferença de sentido é real e não estilística: no primeiro o rei **é** bom (qualidade), no segundo o rei **é** bom (avaliação feita por alguém). Textos como Jo 3.16 dependem dessa precisão.',
      ),
    },
    {
      label: T('Curiosidade:'),
      text: T(
        'Em {אֱלֹהִים} e {בָּתֵּינוּ} («nossos pais», Gên 12.3) a flexão é a de um adjetivo, não de um substantivo. A gramática antiga chamava isso de « substantivo indeclinável »; a verdade é que são adjetivos substantivados, e por isso o numeral pode concordar: {אֱלֹהִים אֶחָד} «um só Deus», {אֱלֹהִים רַבִּים} «muitos deuses» (Sal 82.6).',
      ),
    },
  ],
  examples: [
    { text: '{יוֹם טוֹב}', gloss: T('um dia bom — nome + adjetivo, sem artigo') },
    { text: '{הַיּוֹם הַטּוֹב}', gloss: T('o dia bom — artigo repetido (atributivo)') },
    { text: '{הַיּוֹם טוֹב}', gloss: T('o dia é bom — adjetivo sem artigo (predicativo)') },
    { text: '{אִשָּׁה טוֹבָה}', gloss: T('uma mulher boa — o {ָ} marca o feminino') },
    { text: '{הָאָרֶץ הַטּוֹבָה}', gloss: T('a boa terra (Dt 1.35) — forma bíblica mais comum') },
    { text: '{הַכֹּל טוֹב מֵאֹד}', gloss: T('tudo era muito bom (Gn 1.31) — avaliação, não definição') },
    { text: '{אַשְׁרֵי־הָאִישׁ}', gloss: T('feliz é o homem (Sl 1.1) — {הָאִישׁ} com artigo, {אַשְׁרֵי} sem') },
    { text: '{הַנְּבִיאִים}', gloss: T('os profetas — adjetivo {נָבִיא} substantivado') },
    { text: '{בָּרוּךְ אַתָּה}', gloss: T('bendito és tu — adjetivo + pronome (cap. 5)') },
    { text: '{בְּיָדוֹ}', gloss: T('na mão dele — substantivo dual + sufixo dual {וֹ}') },
    { text: '{שֵׁם טוֹב}', gloss: T('um bom nome (Pv 22.1) — construção sem artigo') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Paradigma de três adjetivos'),
      head: [T('Adjetivo'), T('m. sg.'), T('f. sg.'), T('m. pl.'), T('f. pl.')],
      rows: [
        [T('{טוֹב} «bom»'), '{טוֹב}', '{טוֹבָה}', '{טוֹבִים}', '{טוֹבוֹת}'],
        [T('{גָּדוֹל} «grande»'), '{גָּדוֹל}', '{גְּדוֹלָה}', '{גְּדוֹלִים}', '{גְּדוֹלוֹת}'],
        [T('{רָע} «mau»'), '{רָע}', '{רָעָה}', '{רָעִים}', '{רָעוֹת}'],
        [T('{קָדוֹשׁ} «santo»'), '{קָדוֹשׁ}', '{קָדֹשׁה}', '{קְדֹשִׁים}', '{קְדֹשׁוֹת}'],
        [T('{חָכֵם} «sábio»'), '{חָכֵם}', '{חָכְמָה}', '{חֲכָמִים}', '{חֲכָמוֹת}'],
      ],
    },
    {
      caption: T('Tabela 2 — Atributivo ou predicativo: o artigo faz a diferença'),
      head: [T('Frase'), T('Artigo no adjetivo?'), T('Leitura')],
      rows: [
        ['{הַיּוֹם הַטּוֹב}', T('sim, repetido'), T('o dia bom (atributivo)')],
        ['{הַיּוֹם טוֹב}', T('não'), T('o dia é bom (predicativo)')],
        ['{הָאָרֶץ הַטּוֹבָה}', T('sim'), T('a boa terra (Dt 1.35)')],
        ['{הַכֹּל טוֹב מֵאֹד}', T('não (Gn 1.31)'), T('tudo era muito bom')],
        ['{אַשְׁרֵי־הָאִישׁ}', T('não (Sl 1.1)'), T('feliz é o homem')],
      ],
    },
  ],
};
