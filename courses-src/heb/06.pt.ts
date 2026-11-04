import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('Leitura: Gênesis 1:1-3'),
  subtitle: T('בְּרֵאשִׁית — três versículos para testar tudo o que você já sabe'),
  section: T('Primeiros textos e partículas'),
  body: C(`## O texto, palavra por palavra

{בְּרֵאשִׁית} «no princípio» · {בָּרָא} «criou» · {אֱלֹהִים} «Deus» · {אֵת} «(marcador)» · {הַשָּׁמַיִם} «os céus» · {וְאֵת} «e (marcador)» · {הָאָרֶץ} «a terra»

Glosa contínua: «No princípio criou Deus os céus e a terra».

Cada palavra encarna um capítulo anterior:

## As seis peças do verso 1

{בְּרֵאשִׁית} é {בְּ} «em» (preposição inseparable) + {רֵאשִׁית} «começo», derivado de {רֹאשׁ} «cabeça» — literalmente «na cabeça», isto é, «no princípio».

{בָּרָא} é um qatal de 3.ª m. (cap. 5), com a vogal {ָ} que indica raiz de terceira consonante weak: em hebraico moderno seria «criar»; na Bíblia é a palavra reservada a Deus. Compare {עָשָׂה} «fazer», que serve para tudo o que é comum.

{אֱלֹהִים} vem **sem artigo**. Compare {הָאֱלֹהִים} «o Deus» de outros textos: a ausência do artigo aponta para a natureza divina, não para um deus entre outros. Note também o {hataf} {ֱ} sob a {א} (gutural, cap. 13).

{אֵת} é o marcador de objeto direto. Ele não se traduz: traduzir «Deus criou os céus» já mostra o que ele faz.

{הַשָּׁמַיִם} traz artigo + substantivo **dual**: os dois céus — não um plural.

{הָאָרֶץ} traz o artigo longo {הָ} por causa da gutural {א}.

## O verso 2: o mundo antes da luz

{וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל־פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל־פְּנֵי הַמָּיִם}

«E a terra era {תֹהוּ וָבֹהוּ} (vazio e vazio) e {חֹשֶׁךְ} (trevas) sobre a face do {תְהוֹם} (abismo), e o {רוּחַ} (vento/espírito) de Deus pairava sobre a face das águas.»

{תֹהוּ} e {בֹהוּ} formam um par quase indeclinável de sinônimos: {תֹהוּ וָבֹהוּ} é uma locução fixa, «sem forma e vazia». {תְהוֹם} é um substantivo masculino que significa o abismo chaotic primevo, e reaparece em Ezequiel e no Salmo 107.

## O verso 3: a primeira palavra

{וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר וַיְהִי־אוֹר}

«E disse Deus: Haja luz; e houve luz.»

{וַיֹּאמֶר} é o wayyiqtol (cap. 10) — o motor da narrativa. {יְהִי} é o jussivo de {הָיָה} (cap. 5). {וַיְהִי־אוֹר} tem maqaf: as duas palavras formam uma unidade e recebem o acento uma só vez — o que evita dois acentos na mesma frase.

Repare que o verbo {הָיָה} serve para a criação do visível, do tempo ({וַיְהִי־עֶרֶב וַיְהִי־בֹקֶר}, v. 5) e até da vida ({תִּהְיֶה}, v. 6). Ele é o verbo do ser.

## O que fica para o próximo capítulo

Você já leu, em três versículos: artigo (cap. 1), dual e gênero (cap. 3), qatal e {הָיָה} (cap. 5). O próximo capítulo introduz a peça que faltava para ler quase tudo: o estado constructo, a forma grega de dizer «de».`),
  vocab: [
    V('בְּרֵאשִׁית', 'רֵאשִׁית', 'no princípio'),
    V('בָּרָא', 'ברא', 'ele criou'),
    V('עָשָׂה', 'עשׂה', 'ele fez (verbo comum)'),
    V('אֱלֹהִים', 'אֱלֹהִים', 'Deus'),
    V('אֵת', 'אֵת', 'marcador de objeto'),
    V('הַשָּׁמַיִם', 'שָׁמַיִם', 'os céus'),
    V('הָאָרֶץ', 'אֶרֶץ', 'a terra'),
    V('וַיֹּאמֶר', 'אמר', 'e ele disse'),
    V('יְהִי', 'היה', 'haja, seja'),
    V('הָיְתָה', 'היה', 'ela era/foi'),
    V('חֹשֶׁךְ', 'חֹשֶׁךְ', 'trevas'),
    V('תְהוֹם', 'תְהוֹם', 'abismo'),
    V('רוּחַ', 'רוּחַ', 'vento, espírito'),
    V('תֹהוּ', 'תֹהוּ', 'vazio, inútil'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('O que é «אֵת» em Gênesis 1:1?'),
    options: [
      T('Um verbo: «criar»'),
      T('Marcador de objeto direto (não se traduz)'),
      T('O nome de Deus'),
      T('Um adjetivo: «primeiro»'),
    ],
    answer: 1,
    hint: T('Ele aparece duas vezes no verso 1, sempre antes de um substantivo com artigo.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Ligue cada palavra doGn 1.1 à sua função.'),
      pairs: [
        { a: '{בָּרָא}', b: T('verbo') },
        { a: '{אֵת}', b: T('marcador de objeto') },
        { a: '{הַשָּׁמַיִם}', b: T('dual') },
        { a: '{בְּרֵאשִׁית}', b: T('tempo (advérbio)') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Em «וַיְהִי־אוֹר», o maqaf {־} indica que:'),
      options: [
        T('As duas palavras formam uma só unidade de acento'),
        T('A {אוֹר} é um objeto direto'),
        T('O verbo está no plural'),
        T('É uma citação'),
      ],
      answer: 0,
      hint: T('Regra §3: o maqaf cola palavras numa só unidade prosódica.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete Gênesis 1:3: «וַיֹּאמֶר אֱלֹהִים ___ אוֹר» (haja luz).'),
      answer: 'יְהִי',
      hint: T('É o jussivo de {הָיָה}, e a vogal é {ְ} (sheva), não {ָ}.'),
    },
    {
      kind: 'choose',
      prompt: T('Por que {אֱלֹהִים} aparece sem artigo em Gn 1.1?'),
      options: [
        T('Porque o escriba esqueceu o {הַ}'),
        T('Porque assim se refere à natureza divina, não a um deus entre outros'),
        T('Porque {אֱלֹהִים} é feminino'),
        T('Porque o nome próprio nunca leva artigo'),
      ],
      answer: 1,
      hint: T('Compare com {הָאֱלֹהִים} «o Deus», usado quando se fala de um Deus específico.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{אֵת} é marcador de objeto direto e não se traduz; sua presença basta para dizer que há objeto.',
      ),
    },
    {
      n: '2',
      text: T(
        '{בָּרָא} é palavra de Deus; {עָשָׂה} é a palavra comum para «fazer». A escolha das duas já é teologia.',
      ),
    },
    {
      n: '3',
      text: T(
        'O maqaf {־} une palavras numa só unidade de acento: {וַיְהִי־אוֹר} recebe um único acento.',
      ),
    },
    {
      n: '4',
      text: T(
        '{הַשָּׁמַיִם} é dual: o texto/hebraico prefere dois céus ao plural, e é por isso que o substantivo fica com {־ַיִם}.',
      ),
    },
    {
      n: '5',
      text: T(
        '{יְהִי} (jussivo) expressa a vontade de Deus; {וַיְהִי} (wayyiqtol) narra o resultado: em Gn 1.3 eles aparecem na mesma frase.',
      ),
    },
  ],
  notes: [
    {
      label: T('Ordem das palavras:'),
      text: T(
        'O hebraico não indica o objeto direto pela posição: {בָּרָא} e {אֵת} podem trocar de lugar e a frase significa a mesma coisa. A ordem padrão é verbo-sujeito-objeto-complemento, e é essa ordem — e não a posição de {אֵת} — que produz a sensación de «realce» em Gênesis 1.',
      ),
    },
    {
      label: T('Curiosidade:'),
      text: T(
        'A expressão {אֱלֹהִים} é uma das palavras mais estudadas da língua: é um plural female, quase com certeza pela lembrança da palavra {אֱלֹהִּים} (gente, deuses). Mas a tradição judaica lê o nome como bimorfico, e a tradição cristã lê o plural como plenitude. Este curso segue o uso: com a preposição {אֶת} ou {אֶל}, {אֱלֹהִים} é o nome próprio, sem artigo.',
      ),
    },
  ],
  examples: [
    { text: '{בְּרֵאשִׁית}', gloss: T('no princípio — {בְּ} «em» + {רֵאשִׁית} «começo»') },
    { text: '{בָּרָא}', gloss: T('criou — qatal 3.ª m. de raiz {ברא}') },
    { text: '{אֱלֹהִים}', gloss: T('Deus — sem artigo; com {הָ} seria «o Deus»') },
    { text: '{אֵת}', gloss: T('marcador de objeto direto — não se traduz') },
    { text: '{הַשָּׁמַיִם}', gloss: T('os céus — artigo + dual {שָׁמַיִם}') },
    { text: '{הָיְתָה}', gloss: T('era — 3.ª f. de {הָיָה} (cap. 5)') },
    { text: '{תֹהוּ וָבֹהוּ}', gloss: T('vazio e vazio — par fixo, quase indeclinável') },
    { text: '{תְהוֹם}', gloss: T('abismo — o caos primordial (Sl 107:29)') },
    { text: '{מְרַחֶפֶת}', gloss: T('pairava — participio feminino com {הָיָה} implícito') },
    { text: '{וַיֹּאמֶר}', gloss: T('e disse — wayyiqtol, o motor narrativo (cap. 10)') },
    { text: '{יְהִי}', gloss: T('haja, seja — jussivo de {הָיָה}') },
    { text: '{וַיְהִי־אוֹר}', gloss: T('e houve luz — maqaf: um só acento') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Gênesis 1:1-3 palavra por palavra'),
      head: [T('Palavra'), T('Glosa'), T('O que você reconhece')],
      rows: [
        ['{בְּרֵאשִׁית}', T('no princípio'), T('{בְּ} + {רֵאשִׁית} (preposição)')],
        ['{בָּרָא}', T('criou'), T('qatal 3.ª m.')],
        ['{אֱלֹהִים}', T('Deus'), T('sem artigo + hataf')],
        ['{אֵת}', T('(objeto direto)'), T('marcador, não se traduz')],
        ['{הַשָּׁמַיִם}', T('os céus'), T('artigo + dual')],
        ['{וְאֵת}', T('e (objeto direto)'), T('{ו} + {אֵת}')],
        ['{הָאָרֶץ}', T('a terra'), T('artigo longo {הָ}')],
        ['{הָיְתָה}', T('era'), T('qatal 3.ª f. de {הָיָה}')],
        ['{תֹהוּ וָבֹהוּ}', T('vazio e vazio'), T('locução fixa')],
        ['{תְהוֹם}', T('abismo'), T('substantivo masculino')],
        ['{וַיֹּאמֶר}', T('e disse'), T('wayyiqtol')],
        ['{יְהִי}', T('haja, seja'), T('jussivo de {הָיָה}')],
        ['{וַיְהִי־אוֹר}', T('e houve luz'), T('maqaf: um só acento')],
      ],
    },
    {
      caption: T('Tabela 2 — Verbos e sua função em Gênesis 1'),
      head: [T('Forma'), T('Glosa'), T('O que faz na frase')],
      rows: [
        ['{בָּרָא}', T('criou'), T('verbo principal, 3.ª m.')],
        ['{הָיְתָה}', T('era'), T('verbo de estado, 3.ª f.')],
        ['{מְרַחֶפֶת}', T('pairava'), T('participio + verbo {היה} implícito')],
        ['{וַיֹּאמֶר}', T('e disse'), T('narrativa: abre discurso')],
        ['{יְהִי}', T('haja'), T('jussivo: vontade divina')],
        ['{וַיְהִי}', T('e houve'), T('narrativa: resultado')],
      ],
    },
  ],
};
