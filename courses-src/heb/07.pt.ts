import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('O estado constructo'),
  subtitle: T('בֶּן־אָדָם — a preposição de «de» que não existe'),
  section: T('Primeiros textos e partículas'),
  body: C(`## O problema: não existe «de»

O hebraico não tem palavra para a preposição portuguesa/espanhola «de». O que ele tem é um truque de dois nomes: o primeiro fica em **estado constructo** (מִצְבָּה, mishkat) e o segundo em **estado absoluto** (מֶמְשָׁה, memshut). O primeiro fica grudado no segundo por um maqaf e é traduzido por «de», «do», «da» — ou por nada, como em um apodo.

{בֵּן} «filho» + {אָדָם} «Adão» → {בֶּן־אָדָם} «filho de Adão / filho do homem»
{דָּבָר} «palavra» + {יְהוָה} «SENHOR» → {דְּבַר־יְהוָה} «a palavra do SENHOR»
{מֶלֶךְ} «rei» + {יִשְׂרָאֵל} «Israel» → {מֶלֶךְ־יִשְׂרָאֵל} «o rei de Israel»

Observe que o **segundo** nome fica intacto (com artigo, se o tinha) e é ele que dá a definitude à expressão inteira: {הַמֶּלֶךְ} + {יִשְׂרָאֵל} = {מֶלֶךְ־יִשְׂרָאֵל} «o rei de Israel», não «um rei de Israel».

## O que acontece com o artigo

Em estado constructo o substantivo **perde o artigo**. É o sinal mais confiável: {הַבַּיִת} «a casa» → {בֵּית־לֶחֶם} «casa do pão». Se você vir {הַ} à esquerda de um nome que vem antes de outro nome, algo está errado.

O inverso também vale: o artigo pode ser colocado sobre o par como um todo, {הַבֵּית־לֶחֶם} «a casa do pão» — a casa continua determinada, mas o {הַ} fica no primeiro elemento.

## O que acontece com a vogal

O constructo também encurta a vogal final em muitos casos. Compare:

{מֶלֶךְ} «rei» → {מֶלֶךְ} «(de) rei» (o vocal não muda)
{סוּס} «cavalo» → {סֻס} «(de) cavalo» ({וּ} → {ֻ})
{הַפְּלָאִים} «prodígios» → {פְּלָאִי} «prodígios (de)»
{שֵׁם} «nome» + {יְהוָה} → {שְׁמוֹ־יְהוָה} «o nome do SENHOR» (o sheva de {שֵׁם} vira {ו} holem)

Regra de bolso: o plural costuma revelar a forma antiga do singular — {מְלָכִים} mostra que o constructo de {מֶלֶךְ} se apoia numa base {מְלָךְ} com {ָ}.

## O sinal de alerta: o dagesh

Um {ל} ou {ב} dentro de um nome é quase sempre preposição, não parte da raiz. Quando {בְּ} antecede uma palavra, ela recebe dagesh forte: {בֵּית־לֶחֶם} tem {ל} com sheva ({לֶ}) e o {ל} inicial é a preposição. O mesmo vale em {בְּרֵאשִׁית} (cap. 6) e {בְּיוֹם}.

## Cadeias de três ou mais

O constructo se liga em cadeia, e a tradução vai acumulando «de»:

{הַר־צִיּוֹן} «o monte Sião» · {עִיר־דָּוִד} «a cidade de Davi» · {בֵּית־יְהוָה} «a casa do SENHOR» (o Templo) · {חֵילוֹת יְהוָה} «os exércitos do SENHOR» (1 Sm 17.45) · {אֶבֶן הַעֵזֶר} «a pedra de ajuda» (Êx 17.6) · {קֹדֶשׁ הַקָּדָשִׁים} «o santo dos santos».

Quando o segundo elemento é um nome geográfico, a preposição some na tradução: {בֵּית־לֶחֶם} é «Belém», não «a cidade do pão» — e {הַר־צִיּוֹן} é «Sião», não «o monte de Sião».

## Para o próximo capítulo

Agora você pode dizer «de». No capítulo 8 verá a outra metade da gramática dos possessivos: a preposição {שֶׁל} é rara na Bíblia, mas o **sufixo** pronominal faz esse trabalho em quase toda frase — {סוּסִי} «meu cavalo».`),
  vocab: [
    V('בֶּן־אָדָם', 'בֵּן', 'filho do homem'),
    V('בֵּית־לֶחֶם', 'בַּיִת', 'Belém (casa do pão)'),
    V('דְּבַר־יְהוָה', 'דָּבָר', 'palavra do SENHOR'),
    V('מֶלֶךְ־יִשְׂרָאֵל', 'מֶלֶךְ', 'rei de Israel'),
    V('הַר־צִיּוֹן', 'הַר', 'monte Sião'),
    V('עִיר־דָּוִד', 'עִיר', 'cidade de Davi'),
    V('בֵּית־יְהוָה', 'בַּיִת', 'Templo (casa do SENHOR)'),
    V('שְׁמוֹ־יְהוָה', 'שֵׁם', 'nome do SENHOR'),
    V('אֶרֶץ־כְּנַעַן', 'אֶרֶץ', 'terra de Canaã'),
    V('קֹדֶשׁ הַקָּדָשִׁים', 'קֹדֶשׁ', 'santo dos santos'),
    V('סוּס', 'סוּס', 'cavalo'),
    V('שֵׁם', 'שֵׁם', 'nome'),
    V('פֶּלֶא', 'פֶּלֶא', 'prodígio'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('O que significa «בֵּית־לֶחֶם» ao pé da letra?'),
    options: [T('Casa do pão'), T('Filho do homem'), T('Cidade de Davi'), T('Monte Sião')],
    answer: 0,
    hint: T('{בַּיִת} é «casa» e {לֶחֶם} é «pão»: o maqaf é o sinal do constructo.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual destas formas está em estado constructo?'),
      options: [T('הַמֶּלֶךְ'), T('מֶלֶךְ־יִשְׂרָאֵל'), T('הַבַּיִת'), T('הַיּוֹם')],
      answer: 1,
      hint: T('No constructo o artigo {הַ} desaparece e a palavra ganha dagesh forte.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o nome em constructo à sua base absoluta.'),
      pairs: [
        { a: '{בֵּית־}', b: T('{בַּיִת}') },
        { a: '{מֶלֶךְ־}', b: T('{מֶלֶךְ}') },
        { a: '{שְׁמוֹ־}', b: T('{שֵׁם}') },
        { a: '{דְּבַר־}', b: T('{דָּבָר}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Escreva «o nome do SENHOR» em constructo + maqaf.'),
      answer: 'שְׁמוֹ־יְהוָה',
      hint: T('{שֵׁם} em constructo vira {שְׁמוֹ} (o sheva vira {ו} holem).'),
    },
    {
      kind: 'choose',
      prompt: T('Por que {בֵּית־לֶחֶם} se traduz «Belém» e não «casa do pão»?'),
      options: [
        T('Porque o segundo nome é um topónimo'),
        T('Porque {בַּיִת} é um verbo'),
        T('Porque falta o artigo {הַ}'),
        T('Porque a preposição {בְּ} aparece'),
      ],
      answer: 0,
      hint: T('Regra §5: com topónimo, o par vira nome próprio.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O estado constructo traduz a preposição «de»: dois nomes ligados por maqaf, o primeiro sem artigo.',
      ),
    },
    {
      n: '2',
      text: T(
        'O segundo nome fica intacto e dá a definitude de toda a expressão: {מֶלֶךְ־יִשְׂרָאֵל} é «o rei de Israel».',
      ),
    },
    {
      n: '3',
      text: T(
        'O substantivo em constructo perde o artigo: {הַבַּיִת} → {בֵּית־לֶחֶם}. O artigo pode ser colocado sobre o par: {הַבֵּית־לֶחֶם}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Muitos constructos encurtam a vogal: {סוּס} → {סֻס}, {הַשֵּׁם} → {שְׁמוֹ}. O plural do substantivo revela a base antiga.',
      ),
    },
    {
      n: '5',
      text: T(
        'Com um topónimo, o constructo vira o nome próprio e a preposição desaparece: {בֵּית־לֶחֶם} = «Belém».',
      ),
    },
  ],
  notes: [
    {
      label: T('Cuidado:'),
      text: T(
        'Nem todo nome seguido de outro nome está em constructo. Em {אֶרֶץ מִצְרַיִם} «a terra do Egito» a preposição {מִן} é que faz o trabalho; em {שֵׁם הָאֱלֹהִים} o segundo nome é aposto. O teste continua sendo o dagesh: palavra com dagesh forte depois de {בְּ} ou {לְ} está em constructo.',
      ),
    },
    {
      label: T('Curiosidade:'),
      text: T(
        'Existe uma preposição verdadeira para «de» — {שֶׁל} — e você a vai encontrar no hebraico moderno e em poucos versículos. Em {כָּל־שֶׁל} há até um dagesh incomum na {ש}, porque a palavra se impõe à preposição. A Bíblia preferiu o constructo: ele é mais curto e mais rígido, ideal para um texto que cabe na memória.',
      ),
    },
  ],
  examples: [
    { text: '{בֶּן־אָדָם}', gloss: T('filho de Adão / filho do homem') },
    { text: '{דְּבַר־יְהוָה}', gloss: T('a palavra do SENHOR') },
    { text: '{מֶלֶךְ־יִשְׂרָאֵל}', gloss: T('o rei de Israel — o artigo foi para o segundo nome') },
    { text: '{בֵּית־לֶחֶם}', gloss: T('casa do pão → Belém') },
    { text: '{הַבֵּית־לֶחֶם}', gloss: T('a casa do pão — o artigo sobre o par') },
    { text: '{שְׁמוֹ־יְהוָה}', gloss: T('o nome do SENHOR — {שֵׁם} → {שְׁמוֹ}') },
    { text: '{הַר־צִיּוֹן}', gloss: T('o monte Sião (topónimo: sem «de»)') },
    { text: '{חֵילוֹת יְהוָה}', gloss: T('os exércitos do SENHOR (1 Sm 17.45)') },
    { text: '{קֹדֶשׁ הַקָּדָשִׁים}', gloss: T('o santo dos santos — superlativo em cadeia') },
    { text: '{סֻס}', gloss: T('cavalo (constructo de {סוּס})') },
    { text: '{פְּלָאִי}', gloss: T('(prodígios) de — constructo de {פֶּלֶא}') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Dois estados lado a lado'),
      head: [T('Nome'), T('Absoluto (isolado)'), T('Constructo (ligado)')],
      rows: [
        [T('rei'), '{הַמֶּלֶךְ}', '{מֶלֶךְ־יִשְׂרָאֵל}'],
        [T('casa'), '{הַבַּיִת}', '{בֵּית־לֶחֶם}'],
        [T('cavalo'), '{הַסּוּס}', '{סֻס} (em {סֻס־הַבַּעַל})'],
        [T('nome'), '{הַשֵּׁם}', '{שְׁמוֹ־יְהוָה}'],
        [T('prodígio'), '{הַפְּלָאִים}', '{פְּלָאִי}'],
      ],
    },
    {
      caption: T('Tabela 2 — O que o dagesh revela'),
      head: [T('Palavra'), T('Com {הַ}'), T('Leitura')],
      rows: [
        ['{מֶלֶךְ}', '{הַמֶּלֶךְ}', T('o rei')],
        ['{מֶלֶךְ}', '{מֶלֶךְ־יִשְׂרָאֵל}', T('o rei de Israel')],
        ['{שֵׁם}', '{הַשֵּׁם}', T('o nome')],
        ['{שֵׁם}', '{שְׁמוֹ־יְהוָה}', T('o nome do SENHOR')],
        ['{בַּיִת}', '{הַבַּיִת}', T('a casa')],
        ['{בַּיִת}', '{בֵּית־לֶחֶם}', T('a casa do pão')],
      ],
    },
    {
      caption: T('Tabela 3 — Cadeias de constructo'),
      head: [T('Cadeia'), T('Tradução literal'), T('Onde aparece')],
      rows: [
        ['{בֶּן־אָדָם}', T('filho de Adão'), T('Gênesis, Ezequiel')],
        ['{בֵּית־לֶחֶם}', T('casa do pão'), T('Belém (Lc 2.4)')],
        ['{הַר־צִיּוֹן}', T('monte de Sião'), T('Salmos e profetas')],
        ['{חֵילוֹת יְהוָה}', T('exércitos do SENHOR'), T('1 Sm 17.45')],
        ['{קֹדֶשׁ הַקָּדָשִׁים}', T('santo dos santos'), T('Lv 16, 1 Re 8')],
        ['{אֶבֶן הַעֵזֶר}', T('pedra de ajuda'), T('Êxodo 17.6')],
        ['{בֵּית־בָּתִּים}', T('casa de casas'), T('Jeremias 7.11')],
      ],
    },
  ],
};
