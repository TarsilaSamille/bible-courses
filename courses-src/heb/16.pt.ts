import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('Infinitivos'),
  subtitle: T('לִכְתֹּב, שָׁמוֹעַ — para escrever, ouvindo'),
  section: T('Formas não finitas e guturais'),
  body: C(`## Dois infinitivos, dois ofícios

O hebraico tem duas formas infinitivas (Gesenius §45), ambas derivadas do esqueleto {קְטֹל} (qatal) da raiz:

**Constructo** ({לְ} + {קְטֹל}): {לִכְתֹּב} «escrever», {לִשְׁמֹר} «guardar», {לִרְאוֹת} «ver». É a forma normal depois de {יָכוֹל} «poder», {רוּאֶה} / {חָפֵץ} «querer» e, sobretudo, para exprimir finalidade: {לִשְׁמֹר אֶת־יוֹם הַשַּׁבָּת} «para guardar o sábado».

**Absoluto** ({קָטוֹל}, sem {לְ}): {שָׁמוֹעַ} «ouvindo», {מוֹת} «morrendo», {בָּרְכִי} «bendito». Não indica finalidade: indica **ênfase**, e quase sempre aparece junto de um verbo finito.

## O absoluto como ênfase

A construção mais famosa da Bíblia é {שָׁמוֹעַ תִּשְׁמַע} «ouvindo ouvirás» (Dt 28.1) = «certamente ouvirás» · {מוֹת תָּמוּת} «morrendo morrerás» (Gn 2.17) = «certamente morrerás».

O mecanismo é simples: o infinitivo absoluto dá força ao verbo finito que vem logo depois. Quem traduz literalmente «ouvindo ouvirás» perde a ênfase; quem escreve «certamente ouvirás» acerta o sentido.

Do mesmo modo, {יֹאמַר} pode virar {אֹמֵר} «certamente dirá», e {בָּרַךְ} pode virar {בָּרָךְ} «certamente abençoará».

## {לֵאמֹר} e o pleonasmo hebraico

{לֵאמֹר} «dizendo» vem da raiz {אמר} e introduz **toda** fala divina: {וַיֹּאמֶר יְהוָה אֶל־מֹשֶׁה לֵאמֹר} «E disse o SENHOR a Moisés, dizendo:» (Êx 6.10). O hebraico repete o sentido por pura tradição literária — e é essa repetição que o grego copiará em {λέγων} e o latim em {dicens}.

É por isso que quase todo capítulo de profetas começa com {אָמַר יְהוָה} + {לֵאמֹר}. Não é redundância do escriba: é a marca de que a palavra é de Deus, não do profeta.

## Negação com infinitivo

O hebraico tem três maneiras de dizer «não fazer»:

{לֹא} + infinitivo constructo: {לֹא־תִרְצָח} «não matarás» (Êx 20.13)
{אֵין} + infinitivo constructo: {אֵין־לְהָרֵג} «não pode ser matado»
{לְ} (com {ו} negadora) + infinitivo absoluto: {וּלְאָכְלָה} «e não comerás» (Gn 2.17)

A terceira é rara mas legítima: {וּלְאָכְלָה} tem {לְ} + {אָכְלָה} (absoluto), com {וּ} de negação. Em {לֹא} + absoluto aparece a negação mais forte: {לֹא־יִשְׁלַח} «de maneira alguma enviará».

## O mesmo infinitivo com outra preposição

O infinitivo absoluto aceita preposições, e cada uma muda o sentido: {בְּ} = «quando», {כְּ} = «quando» (também), {אַחֲרֵי} = «depois que», {לִפְנֵי} = «antes que».

Em Gênesis 1.5, {וַיִּקְרָא אֱלֹהִים לָאוֹר יוֹם} chama o primeiro período de {יוֹם} «dia», e o segundo {לָיְלָה} «noite». Em Gênesis 2.7, {בְּבֹא־הָאָדָם} significa «quando veio o homem»: o mesmo infinitivo {בֹּא} que em {בָּא} é o verbo, aqui vira uma expressão temporal.

## Onde o infinitivo aparece

Depois de {יָכוֹל} «poder»: {יָכוֹל לְהָרִיאשׁ} «pode voar»
Como objeto direto: {חָפֵץ לִמְנוֹת} «deseja contar»
Com {אֶת} de objeto: {לַעֲשׂוֹת אֶת־הַתּוֹרָה} «para fazer a lei»
Negado por {בְּלִי}: {בְּלִי־דָבָר} «sem palavras»

O essencial: onde o português e o espanhol usam o gerúndio, o hebraico prefere o particípio (cap. 14). Por isso se traduz «bendito» onde está {בָּרוּךְ} e «bendecendo» onde está {בֹּרֵךְ}: a distinção é estado contra ação.`),
  vocab: [
    V('לִכְתֹּב', 'כתב', 'escrever, para escrever'),
    V('לֵאמֹר', 'אמר', 'dizendo'),
    V('לִשְׁמֹר', 'שׁמר', 'guardar'),
    V('לִרְאוֹת', 'ראה', 'ver'),
    V('שָׁמוֹעַ', 'שׁמע', 'ouvindo (ênfase)'),
    V('מוֹת', 'מות', 'morrendo (ênfase)'),
    V('בָּרָךְ', 'ברך', 'certamente abençoará'),
    V('לֹא', 'לֹא', 'não'),
    V('אֵין', 'אֵין', 'não há, é impossível'),
    V('לָבוֹא', 'בוא', 'vir'),
    V('שַׁבָּת', 'שַׁבָּת', 'sábado, descanso'),
    V('אֲנִי', 'אֲנִי', 'eu'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('O que «מוֹת תָּמוּת» (Gn 2.17) significa?'),
    options: [
      T('Talvez morrerás'),
      T('Certamente morrerás (infinitivo + verbo = ênfase)'),
      T('Não morrerás'),
      T('Morte e vida'),
    ],
    answer: 1,
    hint: T('Regra §2: o infinitivo absoluto reforça o verbo finito que vem depois.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Ligue a forma ao seu tipo de infinitivo.'),
      pairs: [
        { a: '{לִכְתֹּב}', b: T('constructo') },
        { a: '{שָׁמוֹעַ}', b: T('absoluto') },
        { a: '{לֵאמֹר}', b: T('constructo') },
        { a: '{בָּרָךְ}', b: T('absoluto') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual é a negação do imperativo «não temas»?'),
      options: [T('לֹא־תִּירָא'), T('אַל־תִּירָא'), T('לֹא יִרְאָה'), T('אֵין־תִּירָא')],
      answer: 1,
      hint: T('{אַל} + jussivo é a negação de desejo; {לֹא} nega o indicativo (cap. 16).'),
    },
    {
      kind: 'fill',
      prompt: T('Escreva o infinitivo constructo de {אמר} «dizer».'),
      answer: 'לֵאמֹר',
      hint: T('{לְ} + {אֹמְרִי}? Não: {לְ} + esqueleto {קְטֹל} da raiz = {לֵאמֹר}.'),
    },
    {
      kind: 'choose',
      prompt: T('Em «בְּבֹא־הָאָדָם», o que {בְּ} + infinitivo absoluto indica?'),
      options: [
        T('«quando» (tempo)'),
        T('«porque» (causa)'),
        T('«para que» (finalidade)'),
        T('«embora» (concessão)'),
      ],
      answer: 0,
      hint: T('Regra §4: {בְּ} e {כְּ} + absoluto dão uma expressão temporal.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O infinitivo constructo ({לְ} + {קְטֹל}) expressa finalidade; o absoluto ({קָטוֹל}) expressa ênfase.',
      ),
    },
    {
      n: '2',
      text: T(
        'O absoluto quase sempre acompanha um verbo finito: {שָׁמוֹעַ תִּשְׁמַע} «certamente ouvirás».',
      ),
    },
    {
      n: '3',
      text: T(
        '{לֵאמֹר} «dizendo» introduz toda fala divina: {וַיֹּאמֶר יְהוָה לֵאמֹר} «e disse o SENHOR, dizendo».',
      ),
    },
    {
      n: '4',
      text: T(
        'O mesmo absoluto muda de sentido com a preposição: {בְּ} e {כְּ} dão «quando», {לִפְנֵי} dá «antes que».',
      ),
    },
    {
      n: '5',
      text: T(
        'Onde o português e o espanhol usam gerúndio, o hebraico usa o particípio: {בָּרוּךְ} «bendito» e {בֹּרֵךְ} «bendecendo».',
      ),
    },
  ],
  notes: [
    {
      label: T('Exegese:'),
      text: T(
        'Gênesis 2.17 muda de tom quando o tradutor acerta o absoluto: {מוֹת תָּמוּת} não é «morrendo morrerás» (como quem descreve um processo), é «com certeza morrerás» (como quem ameaça). A diferença entre essas três palavras ameaça a vida de uma pessoa em um único versículo, e ela está no verbo principal — não no substantivo.',
      ),
    },
    {
      label: T('Curiosidade:'),
      text: T(
        'Não existe gerúndio em hebraico. Onde o português escreve «estou escrevendo», o hebraico escreve ou {אֲנִי כֹּתֵב} (participio + pronome) ou {אֲנִי כּוֹתֵב} (infinitivo + pronome). As línguas romanceiras, ao contrário,converteram o antigo participio em forma verbal composta («estou loving»), e foi por isso que o {{er}} português e o {{ando} español acabaram fazendo o trabalho que o hebraio entregava ao participio simples.',
      ),
    },
  ],
  examples: [
    { text: '{לִכְתֹּב}', gloss: T('escrever (inf. constructo)') },
    { text: '{לֵאמֹר}', gloss: T('dizendo — inf. de {אמר}') },
    { text: '{שָׁמוֹעַ}', gloss: T('ouvindo (inf. absoluto) — ênfase') },
    { text: '{מוֹת}', gloss: T('morrendo (inf. absoluto) — ênfase') },
    { text: '{שָׁמוֹעַ תִּשְׁמַע}', gloss: T('certamente ouvirás (Dt 28.1)') },
    { text: '{מוֹת תָּמוּת}', gloss: T('certamente morrerás (Gn 2.17)') },
    { text: '{לֹא־תִרְצָח}', gloss: T('não matarás (Êx 20.13)') },
    { text: '{וּלְאָכְלָה}', gloss: T('e não comerás (Gn 2.17) — {וּ} + inf. absoluto') },
    { text: '{אֵין־לְהָרֵג}', gloss: T('não pode ser matado — {אֵין} + inf.') },
    { text: '{בְּבֹא־הָאָדָם}', gloss: T('quando veio o homem (Gn 2.7) — {בְּ} + abs.') },
    { text: '{בָּרָךְ}', gloss: T('certamente abençoará (absoluto de {ברך})') },
    { text: '{לִשְׁמֹר}', gloss: T('guardar — mesmo esqueleto de {שָׁמוֹעַ}') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — O esqueleto {קְטֹל} e suas três realizações'),
      head: [T('Raiz'), T('Qatal (3.ª m.)'), T('Inf. constructo'), T('Inf. absoluto')],
      rows: [
        ['{כתב}', '{כָּתַב}', '{לִכְתֹּב}', '{כָּתוֹב}'],
        ['{שׁמר}', '{שָׁמַר}', '{לִשְׁמֹר}', '{שָׁמוֹעַ}'],
        ['{מות}', '{מָת}', '{לָמוּת}', '{מוֹת}'],
        ['{ברך}', '{בָּרַךְ}', '{לְבָרֵךְ}', '{בָּרָךְ}'],
        ['{אמר}', '{אָמַר}', '{לֵאמֹר}', '{אֹמֵר}'],
        ['{ראה}', '{רָאָה}', '{לִרְאוֹת}', '{רֹאה}'],
        ['{בוא}', '{בָּא}', '{לָבוֹא}', '{בֹּא}'],
      ],
    },
    {
      caption: T('Tabela 2 — Construções com infinitivo'),
      head: [T('Tipo'), T('Exemplo'), T('Glosa')],
      rows: [
        [T('Finalidade'), '{לִשְׁמֹר אֶת־יוֹם הַשַּׁבָּת}', T('para guardar o sábado')],
        [T('Ênfase (absoluto)'), '{שָׁמוֹעַ תִּשְׁמַע}', T('certamente ouvirás (Dt 28.1)')],
        [T('Introduzindo discurso'), '{וַיֹּאמֶר יְהוָה לֵאמֹר}', T('e disse o SENHOR, dizendo')],
        [T('Negação {לֹא}'), '{לֹא־תִרְצָח}', T('não matarás (Êx 20.13)')],
        [T('Negação {אֵין}'), '{אֵין־לְהָרֵג}', T('não pode ser matado')],
        [T('Tempo ({בְּ} + abs.)'), '{בְּבֹא־הָאָדָם}', T('quando veio o homem')],
      ],
    },
  ],
};
