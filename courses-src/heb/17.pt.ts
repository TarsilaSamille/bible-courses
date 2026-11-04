import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  title: T('Volitivos e negação'),
  subtitle: T('אַל־תִּירָא, נַעֲשֶׂה — a vontade e o seu não'),
  section: T('Formas não finitas e guturais'),
  body: C(`## Três vontades (Gesenius §48)

O hebraico classifica as formas de vontade em três grupos, todos derivados do esqueleto {קְטֹל}:

**Imperativo** — a ordem de quem fala: {כְּתֹב} «escreve!» · {שְׁמַע} «ouve!» · {לֵךְ} «vai!» · {צֵא} «sai!». É o esqueleto puro, sem prefixo e sem sufixo (na 3.ª m. e na 2.ª m.).

**Cohortativo** — «deixa-me…», «vamos…»: {אֶכְתְּבָה} «deixa-me escrever» (1.ª m.) · {תִּכְתֹּב} «escreve (coort.)» (2.ª m.) · {נַעֲשֶׂה} «façamos» (1.ª pl.) · {יִכְתְּבוּ} «escrevam» (3.ª pl.). O {ה} da 1.ª pessoa e o dagesh forte do {ת} marcam a pessoa.

**Jussivo** — «que ele…», «que seja…»: {יְהִי} «haja» · {יִכְתֹּב} «que ele escreva» · {יָבֹא} «que venha» · {תֹּאמַר} «que ela diga». Aqui o dagesh da 2.ª letra **cai** e a vogal encurta: compare {כּוֹתֵב} (participio) com {יִכְתֹּב} (jussivo).

O MAIS e {נַעֲשֶׂה} «façamos» (Gn 1.26) e {יְהִי} «haja» (Gn 1.3) são as duas vontade mais repetidas de Gênesis: criar e falar.

## O credo de Israel

{שְׁמַע יִשְׂרָאֵל יְהוָה אֱלֹהֵינוּ יְהוָה אֶחָד} «Ouve, ó Israel: o SENHOR é nosso Deus, o SENHOR é um» (Dt 6.4). O verbo {שְׁמַע} no imperativo é o mesmo que o substantivo {שֵׁם} «nome» — e o jogo de palavras entre eles é o ponto do versículo: ouvir o nome de Deus é guardar seu mandamento.

## Negação: duas portas

O hebraico nega de dois maneiras, e a escolha é obrigatória:

**{לֹא}** + verbo declarativo (indicativo ou futuro): {לֹא־תִרְצָח} «não matarás» (Êx 20.13) · {לֹא־תִּגֶּנּב} «não roubarás» · {לֹא־תְעָנֶה} «não responderás».

**{אַל}** + verbo jussivo: {אַל־תִּירָא} «não temas!» · {אַל־תִּפְגְּעִי} «não me instes!» (Rt 1.16) · {אַל־תִּתְעַבֵּר} «não passes!». O {אַל} é mais curto e mais enérgico: é a negação do desejo, do pedido, doIvanho discourage.

Depois de {אַל} vem sempre um jussivo; depois de {לֹא}, um indicativo ou um futuro. Encher uma frase de {אַל} é um registro de exhortação — é por isso que a Bíblia tem dezenas de «não temas» e é por isso que o texto de Gênesis 3 usa exatamente esse registro.

Simplificando: {אַל} pertence à cena de diálogo; {לֹא} pertence à lei e à narrativa.

## {אַל} e {לֹא} com {ו}

O {ו} de coordenação muda o valor da negação: {וְלֹא יְהִי} (Gn 1.5) «e não houve» é {יְהִי} no jussivo com {לֹא} — a negação mais dura, «e não aconteceu». Em {וְלֹא יְהוּא} «e não era» o {לֹא} nega o {הָיָה}.

A construção {אֵין} + verbo (ou + participio) é a terceira porta: {אֵין־לוֹ} «não há para ele» (ou «ele não tem») — {אֵין} + substantivo {ו} + {־לוֹ}.

## O tempo da vontade

O imperativo pertence ao presente da cena; o jussivo e o cohortativo aparecem em ordens, instruções e, com {ו} de sequência, no futuro narrativo: {וְיָבֹא־כֹהַן} «e viria o sacerdote» (Nm 3.1), com {י} de futuro. É assim que o hebraico conta o que ainda vai acontecer como se fosse ordem ou instrução.

## Crie suas próprias frases

{כְּתֹב} «escreve!» · {נִכְתֹּב} «escrevamos!» · {יִכְתֹּב} «que ele escreva» · {אַל־תִּכְתֹּב} «não escrevas!» · {לֹא תִכְתֹּב} «não escreverás»

Quatro frases com a mesma raiz e cinco modos diferentes. Esta é a parte da gramática hebraica mais regular de todas: descubra o esqueleto {קְטֹל} e você sabe montar o resto.`),
  vocab: [
    V('שְׁמַע', 'שׁמע', 'ouve! (imperativo)'),
    V('כְּתֹב', 'כתב', 'escreve! (imperativo)'),
    V('לֵךְ', 'הלך', 'vai! (imperativo)'),
    V('נַעֲשֶׂה', 'עשׂה', 'façamos (cohortativo)'),
    V('אֶכְתְּבָה', 'כתב', 'deixa-me escrever'),
    V('יִכְתֹּב', 'כתב', 'que ele escreva (juss.)'),
    V('יְהִי', 'היה', 'haja (jussivo)'),
    V('יָבֹא', 'בוא', 'venha (jussivo)'),
    V('אַל־תִּירָא', 'ירא', 'não temas!'),
    V('אַל־תִּפְגְּעִי', 'פגע', 'não me instes (f.)'),
    V('לֹא', 'לֹא', 'não'),
    V('אל', 'אל', 'não (com jussivo)'),
    V('אֵין', 'אֵין', 'não há, não tem'),
    V('תֵּלִדִי', 'ילד', 'terás (jussivo, Gn 3.16)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete Dt 6:4: «___ יִשְׂרָאֵל» (Ouve, ó Israel).'),
    answer: 'שְׁמַע',
    hint: T('Imperativo de {שׁמע} «ouvir» — o esqueleto {קְטֹל} puro.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Ligue a forma ao modo verbal.'),
      pairs: [
        { a: '{כְּתֹב}', b: T('imperativo') },
        { a: '{נַעֲשֶׂה}', b: T('cohortativo') },
        { a: '{יִכְתֹּב}', b: T('jussivo') },
        { a: '{אֶכְתְּבָה}', b: T('cohortativo') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual negação de «não temas» está CORRETA gramaticalmente?'),
      options: [T('אַל־תִּירָא'), T('לֹא־תִּירָא'), T('לֹא־תִּרְאֶה'), T('אֵין־תִּירָא')],
      answer: 0,
      hint: T('Regra §3: {אַל} exige jussivo, e {תִּירָא} é o jussivo de {ירא}.'),
    },
    {
      kind: 'choose',
      prompt: T('O que distingue o jussivo {יִכְתֹּב} do qatal {כָּתַב}?'),
      options: [
        T('O prefixo {י}'),
        T('A ausência do dagesh na 2.ª letra e a vogal encurtada'),
        T('O sufixo {־וּ}'),
        T('O artigo {הַ}'),
      ],
      answer: 1,
      hint: T('Compare as duas formas letra por letra: o {כ} de {יִכְתֹּב} não tem dagesh.'),
    },
    {
      kind: 'fill',
      prompt: T('Escreva o cohortativo de 1.ª pessoa do plural para «façamos» (raiz {עשׂה}).'),
      answer: 'נַעֲשֶׂה',
      hint: T('O cohortativo de 1.ª pl. começa com {נ} + dagesh forte: {נַעֲשֶׂה}.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Imperativo = esqueleto {קְטֹל} puro; cohortativo ganha {ָה} (1.ª m.) ou dagesh forte no {ת}; jussivo perde o dagesh da 2.ª letra.',
      ),
    },
    {
      n: '2',
      text: T(
        'Jussivo de 3.ª pessoa é «que ele faça»; cohortativo de 1.ª pessoa é «deixa-me fazer» — as duas expressam vontade, com acento diferente.',
      ),
    },
    {
      n: '3',
      text: T(
        '{לֹא} nega indicativo e futuro; {אַל} nega o jussivo. Trocar as partículas produz uma frase estranha.',
      ),
    },
    {
      n: '4',
      text: T(
        'A negação de {יְהִי} com {ו} de sequência — {וְלֹא יְהִי} — é a mais forte da Bíblia: «e não aconteceu».',
      ),
    },
    {
      n: '5',
      text: T(
        'Jussivo e cohortativo são idênticos em várias pessoas; o contexto (conversação, oração, narrativa) decide a leitura.',
      ),
    },
  ],
  notes: [
    {
      label: T('Exegese:'),
      text: T(
        'Em Gênesis 3, depois que a serpente fala, Deus diz a Eva: {הִשְׁמוֹתְךָ תֵּלִדִי} ««a tua dor will will be» — {תֵּלִדִי} é um jussivo, não um futuro: é vontade divina declarada, e é por isso que o que Deus quer se cumpre em Gênesis 3.16. Traduzir {תֵּלִדִי} como «terás» apaga a vontade; traduzir como «quer que tenhas» a revela.',
      ),
    },
    {
      label: T('Curiosidade:'),
      text: T(
        'O jussivo quase desapareceu do hebreo moderno e do español corrente, mas sobrevive intacto nos textos litúrgicos e em formas como «¡Sea!» (o jussivo de ser). É a única flexão do verbo grego que o português e o espanhol mantiveram viva por herança: em latim era {sīt}, em grego {ἔστω}, e o português dizia «seja» até o século XVIII.',
      ),
    },
  ],
  examples: [
    { text: '{שְׁמַע}', gloss: T('ouve! — imperativo de {שׁמע} (Dt 6.4)') },
    { text: '{לֵךְ}', gloss: T('vai! — imperativo de {הלך}') },
    { text: '{נַעֲשֶׂה}', gloss: T('façamos — cohortativo 1.ª pl. (Gn 1.26)') },
    { text: '{אֶכְתְּבָה}', gloss: T('deixa-me escrever — cohortativo 1.ª m.') },
    { text: '{יִכְתֹּב}', gloss: T('que ele escreva — jussivo (dagesh caiu)') },
    { text: '{יְהִי}', gloss: T('haja, seja — jussivo de {הָיָה} (Gn 1.3)') },
    { text: '{יָבֹא}', gloss: T('que venha — jussivo de {בוא}') },
    { text: '{תֹּאמַר}', gloss: T('que ela diga — jussivo 3.ª f.') },
    { text: '{יִכְתְּבוּ}', gloss: T('que escrevam — cohortativo 3.ª pl.') },
    { text: '{לֹא־תִרְצָח}', gloss: T('não matarás — {לֹא} + futuro (Êx 20.13)') },
    { text: '{אַל־תִּירָא}', gloss: T('não temas! — {אַל} + jussivo') },
    { text: '{אַל־תִּפְגְּעִי}', gloss: T('não me instes! — jussivo 2.ª f. (Rt 1.16)') },
    { text: '{וְלֹא יְהִי}', gloss: T('e não houve — negação máxima (Gn 1.5)') },
    { text: '{אֵין־לוֹ}', gloss: T('ele não tem — {אֵין} + {ו} + {־לוֹ}') },
    { text: '{שֵׁם}', gloss: T('nome — mesma raiz de {שְׁמַע} «ouve»') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Os três volitivos a partir de {כתב}'),
      head: [T('Modo'), T('Forma'), T('Pessoa'), T('Glosa')],
      rows: [
        [T('Imperativo'), '{כְּתֹב}', T('2.ª m.'), T('escreve!')],
        [T('Cohortativo'), '{אֶכְתְּבָה}', T('1.ª m.'), T('deixa-me escrever')],
        [T('Cohortativo'), '{נִכְתֹּב}', T('2.ª pl. m.'), T('escrevamos!')],
        [T('Cohortativo'), '{יִכְתְּבוּ}', T('3.ª pl.'), T('que eles escrevam')],
        [T('Jussivo'), '{יִכְתֹּב}', T('3.ª m.'), T('que ele escreva')],
        [T('Jussivo'), '{תֹּאמַר}', T('3.ª f.'), T('que ela diga')],
        [T('Jussivo (de {היה})'), '{יְהִי}', T('3.ª m.'), T('haja, seja')],
      ],
    },
    {
      caption: T('Tabela 2 — As duas portas da negação'),
      head: [T('Partícula'), T('Exige'), T('Exemplo'), T('Glosa')],
      rows: [
        ['{לֹא}', T('indicativo / futuro'), '{לֹא־תִרְצָח}', T('não matarás (Êx 20.13)')],
        ['{אַל}', T('jussivo'), '{אַל־תִּירָא}', T('não temas!')],
        ['{לֹא}', T('jussivo (mais duro)'), '{וְלֹא יְהִי}', T('e não houve (Gn 1.5)')],
        ['{אֵין}', T('verbo / substantivo'), '{אֵין־לוֹ}', T('ele não tem')],
        ['{אֵל}', T('forma alternativa de {אַל}'), '{אַל־תִּתְעַבֵּר}', T('não passes!')],
      ],
    },
  ],
};
