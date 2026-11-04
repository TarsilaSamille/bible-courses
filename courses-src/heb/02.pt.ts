import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('O alfabeto e os sinais'),
  subtitle: T('22 consoantes, lidas da direita para a esquerda'),
  section: T('Alfabeto e artigo definido'),
  body: C(`## Direita para esquerda

O hebraico se escreve da direita para a esquerda, e o texto avança para a esquerda — como em {אוֹר} (luz): a {א} vem primeiro, mesmo estando no fim da linha impressa. Duas consequências práticas: os números e as abreviaturas poéticas aparecem invertidos na leitura ocidental, e quando você transcreve para português deve manter a ordem das letras hebraicas.

## As 22 consoantes

São apenas 22 letras, todas consonantes: o hebraico não tem vogais no alfabeto. Memorize primeiro o **nome** de cada letra (ela serve de referência em dicionários e áreas de concordância) e depois o som.

Há duas letras que mudam de som conforme o ponto (dagesh) que recebem: {ב} é {b} sem ponto e {v} com dagesh (e {k}/{kh} para {כ} depois de {ר}); {פ} é {p} sem ponto e {f} com dagesh. Duas letras compartilham grafia: {שׂ} {שׁ} são a mesma letra, shin e sin, distinguidas apenas pelo ponto à direita ou à esquerda.

## Formas finais

Cinco letras mudam de forma no fim da palavra, como se «fechassem a porta»: {ך} (de {כ}), {ם} (de {מ}), {ן} (de {נ}), {ף} (de {פ}), {ץ} (de {צ}). Em {מֶלֶךְ} «rei» a última letra é {ך}; em {שָׁמַיִם} «céus» termina em {ם}. Essas formas finais são o primeiro sinal seguro de que você chegou ao fim da palavra.

## Niqqud: as vogais

As vogais são pontos e traços minúsculos ao redor da letra (niqqud ou «pontuação»). Os três sinais principais são {ַ} pataj (a curto), {ֵ} ṣere (e), {ִ} hireq (i); há ainda {ָ} qamats (a longo), {ֶ} ṣegol (e), {וֹ} {וּ} holam e shureq (o e u). Um sinal com sheva {ְ} indica vogal zero — quase sempre «e breve».

Os textos antigos que você encontrará nos manuscritos têm poucos ou nenhum niqqud: sem eles a leitura ainda é possível porque o léxico e a gramática bastam, mas o contexto passa a ser indispensável. A massoreto do século IX acrescentou esses sinais (e outros, como {־} maqaf e a cantilação) para tornar a leitura pública segura.

## Sinais que não são vogais

Além das vogais há {ּ} dagesh (consoante dobrada), {ֿ} rafe (consoante simples), {־} maqaf (liga palavras), {׃} sof pasuq (fim do versículo), {ְ} sheva e os metaeg. A pontuação de versículos {׃} é o que permite citar com precisão — e é por isso que o Salmo 23 tem exatamente seis deles no capítulo.

## Treine o olho hoje

Três palavras de Gênesis 1 servem de teste: {יוֹם} «dia», {אוֹר} «luz» e {אֶרֶץ} «terra». Se você conseguir ler as três da direita para a esquerda e dizer seus nomes de letra, o alfabeto já está seu.`),
  vocab: [
    V('א', 'א', 'alef (muda)'),
    V('ב', 'ב', 'bet (b/v)'),
    V('ש', 'ש', 'shin/sin (sh/s)'),
    V('מֶלֶךְ', 'מֶלֶךְ', 'rei'),
    V('יוֹם', 'יוֹם', 'dia'),
    V('אוֹר', 'אוֹר', 'luz'),
    V('אֶרֶץ', 'אֶרֶץ', 'terra, país'),
    V('שָׁמַיִם', 'שָׁמַיִם', 'céus'),
    V('בַּיִת', 'בַּיִת', 'casa'),
    V('דָּבָר', 'דָּבָר', 'palavra, assunto'),
    V('תּוֹרָה', 'תּוֹרָה', 'instrução, lei'),
    V('רוּחַ', 'רוּחַ', 'espírito, vento'),
    V('חֶסֶד', 'חֶסֶד', 'amor firme'),
    V('טוֹב', 'טוֹב', 'bom'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em que direção se lê o hebraico?'),
    options: [
      T('Da esquerda para a direita'),
      T('Da direita para a esquerda'),
      T('De cima para baixo'),
      T('Em espiral'),
    ],
    answer: 1,
    hint: T('Pense em {אוֹר}: a {א} vem primeiro, mesmo estando no fim da linha.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Ligue cada letra final à sua letra de origem.'),
      pairs: [
        { a: '{ך}', b: T('{כ}') },
        { a: '{ם}', b: T('{מ}') },
        { a: '{ן}', b: T('{נ}') },
        { a: '{ץ}', b: T('{צ}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Quantas vogais o alfabeto hebraico tem como letras independentes?'),
      options: [T('Cinco'), T('Nenhuma: as vogais são sinais'), T('Duas ({ו} e {י})'), T('Onze')],
      answer: 1,
      hint: T('As vogais chegam depois, como pontos: é o sistema de niqqud.'),
    },
    {
      kind: 'fill',
      prompt: T('Escreva a palavra hebraica para «luz» (Gênesis 1:3).'),
      answer: 'אוֹר',
      hint: T('Começa pela {א} (que não soa) e termina com {ר} + holam {וֹ}.'),
    },
    {
      kind: 'choose',
      prompt: T('Em {שֹׁמֵר}, a {ש} soa como:'),
      options: [T('sh (ponto à esquerda)'), T('s (ponto à direita)'), T('k'), T('t')],
      answer: 1,
      hint: T('O ponto do lado oposto da linha marca a segunda pronúncia da {ש}.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O hebraico tem 22 consoantes e nenhuma vogal no alfabeto; a letra {י} serve de consoante ({יְהוָה}) e de mater de vogal ({יוֹם}).',
      ),
    },
    {
      n: '2',
      text: T(
        '{ב} e {פ} trocam de som com o dagesh ({b}/{v}, {p}/{f}); {כ} e {ע} são guturais e nunca recebem dagesh forte depois de {ר}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Cinco letras têm forma final — {ך} {ם} {ן} {ף} {ץ} — e o maqaf {־} cola palavras numa única unidade de acento.',
      ),
    },
    {
      n: '4',
      text: T(
        'Sem niqqud a leitura continua possível, mas o contexto passa a ser obrigatório: nos manuscritos medievais o mesmo texto pode ser lido de duas maneiras.',
      ),
    },
    {
      n: '5',
      text: T(
        'A letra {א} não tem som próprio: ela serve para glotalizar ({אֱלֹהִים}) ou simplesmente não soa ({מֶלֶךְ}). Reconhecê-la é o primeiro teste de leitura fluente.',
      ),
    },
  ],
  notes: [
    {
      label: T('Ordenação:'),
      text: T(
        'A ordem das 22 letras não é alfabética: segue um sistema de acrósticos de três «lições» que os mestres medievais usavam como mnemônico (de {א} a {ט}, de {י} a {ף}, de {צ} a {ת}). Por isso o capítulo 1 já mostrou todas elas — o {ה} do artigo é justamente a quinta letra da primeira lição.',
      ),
    },
    {
      label: T('Dica de leitura:'),
      text: T(
        'Se você tem dificuldade com a direção, leia a linha inteira ao contrário com um espelho à mão: é o truque que os copistas medievais usavam para conferir. O costume não decide o sentido; o contexto decide.',
      ),
    },
  ],
  examples: [
    { text: '{יוֹם}', gloss: T('dia — {יוֹ} traz {וֹ} (holam)') },
    { text: '{אוֹר}', gloss: T('luz — a {א} inicial não soa') },
    { text: '{אֶרֶץ}', gloss: T('terra — termina em {ץ}, forma final') },
    { text: '{בַּיִת}', gloss: T('casa — {ב} com dagesh forte = {b}') },
    { text: '{מֶלֶךְ}', gloss: T('rei — {ך} é a forma final de {כ}') },
    { text: '{שָׁמַיִם}', gloss: T('céus — duplo: {שׁ} é {ש} com ponto à esquerda') },
    { text: '{שֹׁמֵר}', gloss: T('guarda (part.) — {שׁ} com ponto à direita, som {s}') },
    { text: '{יְהוָה}', gloss: T('SENHOR — {י} inicial com sheva: consoante {y}') },
    { text: '{תּוֹרָה}', gloss: T('instrução/lei — {ת} forte inicial + {ֹ}') },
    { text: '{־}', gloss: T('maqaf: une palavras num só acento') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — As 22 consoantes em três blocos'),
      head: [T('Letra'), T('Nome'), T('Som'), T('Exemplo')],
      rows: [
        ['{א}', 'ʾālef', T('sem som (ou glotal)'), '{אוֹר}'],
        ['{ב}', 'bēt', T('b / v (com dagesh)'), '{בַּיִת}'],
        ['{ג}', 'gimel', 'g', '{גֹּל}'],
        ['{ד}', 'dālet', 'd', '{דָּבָר}'],
        ['{ה}', 'hē', 'h', '{הַבַּיִת}'],
        ['{ו}', 'wāw', T('v, o ou u'), '{וַיֹּאמֶר}'],
        ['{ז}', 'zāyin', 'z', '{זוֹל}'],
        ['{ח}', 'ḥēt', T('gutural (sopro frígio)'), '{חֶסֶד}'],
        ['{ט}', 'ṭēt', T('t enfático'), '{טוֹב}'],
        ['{י}', 'yōd', T('y ou i'), '{יוֹם}'],
        ['{כ}', 'kāf', T('k / kh (gutural após ר)'), '{כָּל}'],
        ['{ל}', 'lāmed', 'l', '{לֵב}'],
        ['{מ}', 'mēm', 'm', '{מֶלֶךְ}'],
        ['{נ}', 'nūn', 'n', '{נֹחַ}'],
        ['{ס}', 'sāmekh', 's', '{שָׁמַיִם}'],
        ['{ע}', 'ʿayin', T('gutural (glotal)'), '{עַם}'],
        ['{פ}', 'pē', T('p / f (com dagesh)'), '{פֶּסַח}'],
        ['{צ}', 'ṣādē', 'ts', '{צִיּוֹן}'],
        ['{ק}', 'qōf', 'q', '{קוֹל}'],
        ['{ר}', 'rēš', 'r', '{רוּחַ}'],
        ['{ש}', 'šīn / sīn', T('sh (ponto à esq.) / s (ponto à dir.)'), '{שָׁמַיִם}'],
        ['{ת}', 'tāw', 't', '{תּוֹרָה}'],
      ],
    },
    {
      caption: T('Tabela 2 — Formas finais: a mesma letra em dois contextos'),
      head: [T('Forma medial (no meio)'), T('Forma final (fim da palavra)'), T('Exemplo')],
      rows: [
        ['{כ}', '{ך}', '{מֶלֶךְ}'],
        ['{מ}', '{ם}', '{שָׁם}'],
        ['{נ}', '{ן}', '{חָן}'],
        ['{פ}', '{ף}', '{קַלָּה}?'],
        ['{צ}', '{ץ}', '{קֶצֶת}'],
      ],
    },
    {
      caption: T('Tabela 3 — Os sinais do niqqud'),
      head: [T('Sinal'), T('Nome'), T('Valor / função')],
      rows: [
        ['{ַ}', 'pataj', T('a breve')],
        ['{ָ}', 'qamats', T('a longa (ou o fechado)')],
        ['{ֵ}', 'ṣere', T('e')],
        ['{ֶ}', 'ṣegol', T('e curta/média')],
        ['{ִ}', 'hireq', T('i')],
        ['{ֹ}', 'holam', T('o')],
        ['{וּ}', 'šureq', T('u')],
        ['{ְ}', 'šewa', T('vogal zero (breve)')],
        ['{ֲ} {ֱ} {ֳ}', 'ḥatef pataj/ṣegol/qamats', T('vogal reduzida sob gutural')],
        ['{ּ}', 'dageš', T('consoante dobrada')],
        ['{ֿ}', 'rafe', T('consoante simples')],
        ['{־}', 'maqaf', T('liga palavras (um só acento)')],
        ['{׃}', 'sof pasuq', T('fim de versículo')],
      ],
    },
  ],
};
