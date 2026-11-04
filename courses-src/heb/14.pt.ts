import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  title: T('Guturais'),
  subtitle: T('א ח ע ר — as quatro letras que não obedecem'),
  section: T('Formas não finitas e guturais'),
  body: C(`## O que é uma gutural

As guturais são as cinco consoantes {[אָחַע״ר]}: {א} alef, {ח} het, {ע} ayin, {ה} he e {ר} resh. Elas são guturais porque são pronunciadas na garganta, com a língua tocando a faringe. Todos os outros fonemas se formam na boca ou no palato; só estes cinco são profundos.

Elas causam quatro efeitos práticos que você vai notar em toda a Bíblia (Gesenius §22):

**1. Não recebem dagesh forte.** Nem {א} nem {ח} nem {ע} podem ser dobradas: {הַחָכְמָה} tem dagesh no {ח}, mas {הֶחָכְמָה} não tem. Por isso, duas guturais em sequência provocam um efeito em cadeia no resto da palavra.

**2. Preferem vogais A.** Depois de uma gutural, o hebraico tende para {ַ}, {ָ} ou {ֲ}, nunca para {ִ} ou {ֵ}. Em {יַעֲמֹד} «ele ficará de pé» o {ע} força a vogal a ser A, e a {ו} seguinte alonga-se em {וֹ} para compensar.

**3. Roubam o patah no fim da palavra.** Uma {ח} ou {ע} final não aceita vogal longa nem fechamento: ela insere um {ַ} curto **furtivo** (furtive patah), que se transcreve antes dela mas se pronuncia depois: {רוּחַ} lê-se «rú-ach», {נֹחַ} «Nó-ach», {שָׂמֵחַ} «sã-mé-ach», {רָקִיעַ} «ra-kí-ach». O som que você ouve depois do {ח} não está escrito à esquerda.

**4. Recebem vogais reduzidas (hatef).** Sob uma gutural aparece às vezes uma vogal «achatada»: {ֲ} hatef pataj, {ֱ} hatef segol, {ֳ} hatef qamats. Os casos mais comuns são o {א} inicial de {אֱלֹהִים} e de {אֲדֹנָי} «Senhor», o {ח} de {חֲכָמִים} «sábios» e o {ע} de {עֲבָדִים} «servos».

## Duas letras à parte: {ר} e {ה}

{ר} não é gutural na boca, mas se comporta como uma na escrita: não recebe dagesh forte e prefere vogais A. {ה} é diferente: aceita dagesh ({הֶסֶד}), mas também prefere vogais A e, como consoante final de prefixo, puxa o {הָ} do artigo e de outras palavras.

## O dagesh furtivo

Um último efeito aparece justamente por causa das guturais. Quando {ב} {כ} {ל} {פ} {ק} aparecem no fim de uma sílaba, a massoreto imprime um dageš **furtivo** para tornar audível o som que viria naturalmente: {לִבְךָ} «o teu coração», {לִגְּדֹל} «o forte», {הַלְלוּהָ} «o seu louvor». O dagesh furtivo aparece especialmente depois de {ר}, que é a gutURAL que precede. Lembre-se dele como um traço de copista, não como som dobrado.

## Por que isso importa na leitura

Conhecer as guturais transforma ruído em padrão. Em {רוּחַ אֱלֹהִים} o {ַ} final não pertence à {ר}, mas à {ח}. Em {אֱלֹהִים} o {ֱ} é hatef, não {ֶ} plena. Em {יַעֲמֹד} o {ֲ} é hatef, e o {וֹ} é um alongamento compensatório. Três letras, três regras, uma palavra.

Cada gutural tem a sua: a {א} e a {א} e a {ח} atraem hatef com frequência; a {ע} final atrai patah furtivo com frequência; a {ה} governa o dagesh da palavra anterior.

## A regra do rafe

Depois de uma gutural, as letras {פ} e {ק} aparecem sem dagesh, com o sinal {ֿ} (rafe) quando o contexto exige um ponto. É por isso que {פֶּרַשׁ} «separar» (dagesh forte) contrasta com {פָּרַשׁ} na forma enfática: o dagesh marca a solidez, o rafe marca a fraqueza.

## Palavras para reter

{רוּחַ} «vento/espírito» · {חֶסֶד} «amor firme» · {עַם} «povo» (com {ע} gutural!) · {חָכְמָה} «sabedoria» · {רֹעֶה} «pastor» · {נֹחַ} «Noé» · {גָּבֹהַּ} «alto» · {נָשִׁים} «mulheres»

Você já sabe pronunciar todas elas — o que faltava era saber **por que** soam assim.`),
  vocab: [
    V('רוּחַ', 'רוּחַ', 'vento, espírito'),
    V('חֶסֶד', 'חֶסֶד', 'amor firme'),
    V('עַם', 'עַם', 'povo'),
    V('חָכְמָה', 'חָכְמָה', 'sabedoria'),
    V('אֲדֹנָי', 'אָדוֹן', 'Senhor'),
    V('יַעֲמֹד', 'עמד', 'ele ficará de pé'),
    V('גָּבֹהַּ', 'גָּבֹהַּ', 'alto'),
    V('נֹחַ', 'נֹחַ', 'Noé'),
    V('רָקִיעַ', 'רָקִיעַ', 'o firmamento'),
    V('חֲכָמִים', 'חָכֵם', 'sábios'),
    V('עֲבָדִים', 'עֶבֶד', 'servos'),
    V('לִבְךָ', 'לֵב', 'o teu coração'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Por que «רוּחַ» termina com patah sob o {ח}?'),
    options: [
      T('Erro de escriba'),
      T('Patah furtivo: a gutural final rouba um «a» rápido'),
      T('Marca o plural'),
      T('Marca o feminino'),
    ],
    answer: 1,
    hint: T('O som «ach» é ouvido depois do {ח}, embora o {ַ} esteja escrito à esquerda.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Ligue a gutural ao efeito que ela provoca.'),
      pairs: [
        { a: '{ע} final', b: T('patah furtivo') },
        { a: '{א} inicial', b: T('hatef') },
        { a: '{ה} inicial', b: T('artigo {הָ}') },
        { a: '{ר}', b: T('nunca recebe dagesh forte') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual destas palavras contém hatef?'),
      options: [T('אֲדֹנָי'), T('שַׁמַּיִם'), T('בֵּית'), T('תּוֹרָה')],
      answer: 0,
      hint: T('O sinal {ֲ} é um hatef pataj: uma vogal curta sob gutural.'),
    },
    {
      kind: 'fill',
      prompt: T('Escreva a palavra hebraica para «o teu coração» (com dagesh furtivo).'),
      answer: 'לִבְךָ',
      hint: T('{לֵב} + {־ךָ} = {לִבְךָ}, com dagesh furtivo no {ב}.'),
    },
    {
      kind: 'choose',
      prompt: T('Por que {הֶחָכְמָה} não tem dagesh no {ח}, enquanto {הַחָכְמָה} tem?'),
      options: [
        T('Porque {הֶ־} é o artigo com vogal longa'),
        T('Porque a {ח} é gutural e não pode ser dobrada'),
        T('Porque {הַחָכְמָה} é uma forma arcaica'),
        T('Porque faltou o ponto ao escriba'),
      ],
      answer: 1,
      hint: T('Regra §1: nenhuma gutural recebe dagesh forte.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'As guturais são {א} {ח} {ע} {ה} {ר}: pronunciadas na garganta, nunca recebem dagesh forte e atraem vogais A.',
      ),
    },
    {
      n: '2',
      text: T(
        'O patah furtivo aparece na {ח} e na {ע} finais: escreve-se à esquerda da letra, pronuncia-se à direita — {רוּחַ} = «rú-ach».',
      ),
    },
    {
      n: '3',
      text: T(
        'O hatef é uma vogal reduzida que só aparece sob guturais: {אֲדֹנָי} «Senhor», {חֲכָמִים} «sábios», {עֲבָדִים} «servos».',
      ),
    },
    {
      n: '4',
      text: T(
        'Depois de uma gutural, a vogal evita {ִ} e {ֵ} e alonga-se para compensar: {יַעֲמֹד} «ele ficará de pé».',
      ),
    },
    {
      n: '5',
      text: T(
        'O dagesh furtivo é uma convenção de escrita, não um som dobrado: {לִבְךָ} «o teu coração».',
      ),
    },
  ],
  notes: [
    {
      label: T('Som versus letra:'),
      text: T(
        'Nem toda {ח} ou {ע} do Tanakh é gutural. A regra histórica: {ח} e {ע} são guturais quando pronounced faríngeas, o que ocorre na maioria dos casos, mas em alguns loanwords (nomes próprios persas, por exemplo) são apenas sibilantes comuns. O mesmo vale para {ה} inicial, que pode ser mera aspiração.',
      ),
    },
    {
      label: T('Curiosidade:'),
      text: T(
        'As línguas semíticas vizinhas preservaram a garganta por mais tempo que o hebraico bíblico: o aramaico e o árabe ainda têm guturais intactas em todas as posições, e é por isso que um aramaico falante reconhece imediatamente um gutural hebraico. Quando você lê {רוּחַ} em voz alta e sente o {ח} na garganta, está falando como se fala há três mil anos.',
      ),
    },
  ],
  examples: [
    { text: '{רוּחַ}', gloss: T('vento, espírito — lê-se «rú-ach»') },
    { text: '{נֹחַ}', gloss: T('Noé — lê-se «Nó-ach»') },
    { text: '{גָּבֹהַּ}', gloss: T('alto — patah furtivo após {ֹ}') },
    { text: '{רָקִיעַ}', gloss: T('o firmamento — patah furtivo (Gn 1.6)') },
    { text: '{אֱלֹהִים}', gloss: T('Deus — hatef {ֱ} sob a gutural {א}') },
    { text: '{אֲדֹנָי}', gloss: T('Senhor — hatef {ֲ} sob a {א}') },
    { text: '{חֲכָמִים}', gloss: T('sábios — hatef {ֲ} sob a {ח}') },
    { text: '{עֲבָדִים}', gloss: T('servos — hatef {ֲ} sob a {ע}') },
    { text: '{יַעֲמֹד}', gloss: T('ele ficará de pé — gutural + compensatory lengthening') },
    { text: '{לִבְךָ}', gloss: T('o teu coração — dagesh furtivo no {ב}') },
    { text: '{עַם}', gloss: T('povo — {ע} gutural inicial, vogal {ַ}') },
    { text: '{חֶסֶד}', gloss: T('amor firme — {ח} com dagesh (aqui é gutural de verdade)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — As cinco guturais e suas propriedades'),
      head: [T('Letra'), T('Nome'), T('Comportamento')],
      rows: [
        ['{א}', 'ʾālef', T('aceita hatef, sem dagesh')],
        ['{ח}', 'ḥēt', T('aceita hatef, sem dagesh')],
        ['{ע}', 'ʿayin', T('patah furtivo em posição final')],
        ['{ה}', 'hē', T('aceita dagesh; governa o artigo {הָ}')],
        ['{ר}', 'rēš', T('nunca recebe dagesh forte')],
      ],
    },
    {
      caption: T('Tabela 2 — Quatro efeitos das guturais em ação'),
      head: [T('Efeito'), T('Exemplo'), T('Glosa')],
      rows: [
        [T('Sem dagesh forte'), '{הֶחָכְמָה}', T('a sabedoria (o {ח} não é dobrado)')],
        [T('Vogal A'), '{יַעֲמֹד}', T('ele ficará de pé')],
        [T('Patah furtivo'), '{רוּחַ}', T('vento, espírito (lê-se «rú-ach»)')],
        [T('Hatef'), '{אֲדֹנָי}', T('Senhor')],
        [T('Dagesh furtivo'), '{לִבְךָ}', T('o teu coração')],
      ],
    },
    {
      caption: T('Tabela 3 — Palavras com patah furtivo'),
      head: [T('Palavra'), T('Leitura'), T('Glosa')],
      rows: [
        ['{רוּחַ}', 'rú-ach', T('vento, espírito')],
        ['{נֹחַ}', 'Nó-ach', T('Noé')],
        ['{רוּחַ}', 'rú-ach', T('vento, espírito')],
        ['{גָּבֹהַּ}', 'gavó-ah', T('alto')],
        ['{רָקִיעַ}', 'ráqí-a', T('a expansão, o firmamento')],
        ['{שָׂמֵחַ}', 'sã-mé-ach', T('alegre')],
      ],
    },
  ],
};
