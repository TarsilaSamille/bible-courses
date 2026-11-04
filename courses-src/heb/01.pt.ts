import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('O artigo definido'),
  subtitle: T('הַ — o prefixo que precede toda coisa determinada'),
  section: T('Alfabeto e artigo definido'),
  body: C(`## Para que serve o artigo

O hebraico tem um único morfema de artigo — a partícula {הַ} — e ele é prefixado, não uma palavra separada como em português ou espanhol. Não existe artigo indefinido: «um cavalo» simplesmente se diz {סוּס} (o mesmo que «um cavalo» num contexto indefinido), enquanto «o cavalo» exige {הַסּוּס}. Isso significa que o valor do hebraico é mais preciso: o que não tem {הַ} é justamente aquilo que ainda não se quer determinar.

Quem mais usa o artigo é o substantivo determinado, mas o adjetivo, quando o nome tem artigo, costuma repeti-lo (cap. 4). Por isso, ao ler hebraico, o {הַ} é a sua placa de sinalização: cada {הַ} aponta para algo que o autor considera individual e conhecido.

## A forma padrão: {הַ} + dagesh forte

A regra é mecânica: o artigo {הַ} com {ַ} (patah) provoca um dagesh forte na consoante seguinte. O ponto dentro da letra {ב} de {הַבַּיִת} é o dagesh — e o mesmo vale em {הַמֶּלֶךְ}, {הַיּוֹם}, {הַסּוּס}. Decore o par como um bloco: {הַ} + consoante duplicada.

## Quando o artigo se alonga: {הָ}

Depois de quatro das cinco guturais — {א} {ח} {ע} {ה} — e também depois de {ר}, o artigo perde a vogal curta e recebe {ָ} (qamats): {הָאָרֶץ}, {הָאִשָּׁה}, {הָהָר}, {הָרָאשִׁ֑י}. A razão é fonética: essas consoantes não toleram bem o dageš forte e a vogal [a] curta.

Exceção importante: antes de {ה} que é início de palavra, o {הַ} costuma cair por completo: {הַהָר} → {הָהָר}, {הַהֵם} → {הֵם} «o homem». Reconhecer esse desaparecimento evita ler duas letras onde há uma só.

## Artigo em constructo

No estado constructo (cap. 7) o artigo também desaparece: {הַמֶּלֶךְ} + {יִשְׂרָאֵל} → {מֶלֶךְ־יִשְׂרָאֵל}, não {הַמֶּלֶךְ־יִשְׂרָאֵל}. O {הַ} volta apenas quando o nome volta ao estado absoluto: {הַבַּיִת} «a casa» → {בֵּית־לֶחֶם} «casa do pão» → de novo {הַבֵּית־לֶחֶם} «a casa do pão».

## O que o artigo faz (e o que não faz)

O {הַ} **não** indica o caso nem o genitivo: {הַמֶּלֶךְ} é nominativo, {לַמֶּלֶךְ} é «para o rei». Ele também **não** marca plural: {הַסּוּסִים} é «os cavalos» com o mesmo {הַ} do singular. E **não** se traduz sozinho: em {הַבַּיִת}, a preposição {בְּ} é que carrega o caso.

Palavras para fixar: {יוֹם} «dia» → {הַיּוֹם} «o dia» · {מֶלֶךְ} «rei» → {הַמֶּלֶךְ} «o rei» · {אֶרֶץ} «terra» → {הָאָרֶץ} «a terra».`),
  vocab: [
    V('הַ', 'הַ', 'o/a (art. definido)'),
    V('הָ', 'הַ', 'o/a (forma longa, gutural)'),
    V('סוּס', 'סוּס', 'cavalo'),
    V('הַסּוּס', 'סוּס', 'o cavalo'),
    V('בַּיִת', 'בַּיִת', 'casa'),
    V('הַבַּיִת', 'בַּיִת', 'a casa'),
    V('מֶלֶךְ', 'מֶלֶךְ', 'rei'),
    V('הַמֶּלֶךְ', 'מֶלֶךְ', 'o rei'),
    V('הָאָרֶץ', 'אֶרֶץ', 'a terra'),
    V('הֵם', 'הֵם', 'o homem (art. elidido)'),
    V('יוֹם', 'יוֹם', 'dia'),
    V('הַיּוֹם', 'יוֹם', 'o dia'),
    V('כָּל', 'כָּל', 'todo, cada'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se diz «o rei» em hebraico?'),
    options: [T('מֶלֶךְ'), T('הַמֶּלֶךְ'), T('הָמֶלֶךְ'), T('מַלְכָּה')],
    answer: 1,
    hint: T('{מֶלֶךְ} começa por {מ}: o artigo leva {הַ} e a {מ} recebe dagesh forte.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Escreva o artigo definido correto (forma longa) para {אָרֶץ} «terra».'),
      answer: 'הָאָרֶץ',
      hint: T('A palavra começa pela gutural {א}: o artigo ganha {ָ} (qamats) e nenhum dagesh.'),
    },
    {
      kind: 'choose',
      prompt: T('Em «{הֵם}» (o homem), o que aconteceu ao {הַ}?'),
      options: [
        T('Trocou {ַ} por {ָ}'),
        T('Desapareceu antes da {ה} inicial'),
        T('Virou {ל} (preposição)'),
        T('Trocou o dagesh por sheva'),
      ],
      answer: 1,
      hint: T('Regra §4: duas letras {ה} seguidas são demais para o hebraico.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada forma ao que ela marca.'),
      pairs: [
        { a: '{הָאָרֶץ}', b: T('artigo longo (gutural)') },
        { a: '{הַמֶּלֶךְ}', b: T('artigo curto + dagesh') },
        { a: '{הֵם}', b: T('artigo elidido') },
        { a: '{מֶלֶךְ־יִשְׂרָאֵל}', b: T('constructo sem artigo') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual das formas NÃO pode levar o artigo {הַ} com dagesh forte?'),
      options: [T('{הַמֶּלֶךְ}'), T('{הַסּוּס}'), T('{הָאָרֶץ}'), T('{הַיּוֹם}')],
      answer: 2,
      hint: T('Depois das guturais o artigo muda de vogal: {הָ}, não {הַ}.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O artigo hebraico é {הַ} (patah) e se cola à palavra; não existe artigo indefinido nem contração com preposição: {בַּיִת} e {הַבַּיִת} significam a mesma coisa.',
      ),
    },
    {
      n: '2',
      text: T(
        'Depois de {א} {ח} {ע} {ה} e {ר} o artigo assume {ָ} (qamats): {הָאָרֶץ}, {הָאִשָּׁה}, {הָרָאשִׁ֑י}.',
      ),
    },
    {
      n: '3',
      text: T(
        'O artigo não marca caso nem número: {הַמֶּלֶךְ} e {הַמֶּלֶךְ} são idênticos, e é a preposição que diz o caso ({לַמֶּלֶךְ} «para o rei»).',
      ),
    },
    {
      n: '4',
      text: T(
        'Antes de {ה} inicial e em estado constructo o {הַ} desaparece: {הַהֵם} → {הֵם}, {הַמֶּלֶךְ} + {יִשְׂרָאֵל} → {מֶלֶךְ־יִשְׂרָאֵל}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Quando uma preposição governa o substantivo, ela mesma pode antecipar o dagesh forte: {כַּל־הָעָם} «todo o povo» = {כָּל} + {הָעָם}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Atenção:'),
      text: T(
        'O nome de Deus {אֱלֹהִים} aparece ora com {הָאֱלֹהִים}, ora sem artigo algum. A ausência do artigo costuma sugerir natureza, origem ou divindade: em Gn 1.1, {בָּרָא} «criou» exige {אֱלֹהִים} sem artigo, porque se trata de Deus como categoria. A decisão é de teologia, não de gramática — mas o detalhe se aprende lendo.',
      ),
    },
    {
      label: T('Curiosidade:'),
      text: T(
        'O nome {בֵּית} «casa» quase nunca recebe o artigo na Bíblia: as traduções portuguesas e espanholas escrevem «a casa», mas o hebraico escreve apenas {בֵּית}. É o melhor exemplo de que o {הַ} nem sempre sobrevive à tradução — e de que o widget de gramática deste curso conta as palavras, não as traduções.',
      ),
    },
  ],
  examples: [
    { text: '{הַ}', gloss: T('o, a (artigo definido masc./fem.)') },
    { text: '{הָ}', gloss: T('o, a — forma longa antes de gutural ou {ר}') },
    { text: '{הַסּוּס}', gloss: T('o cavalo ({סוּס} + dagesh forte)') },
    { text: '{הַבַּיִת}', gloss: T('a casa ({ב} com dagesh forte)') },
    { text: '{הַמֶּלֶךְ}', gloss: T('o rei — {הַ} + {מ} forte + {ֶ}') },
    { text: '{הַיּוֹם}', gloss: T('o dia — o dagesh pode cair sob {ו}') },
    { text: '{הָאָרֶץ}', gloss: T('a terra — {הָ} por causa da gutural {א}') },
    { text: '{הֵם}', gloss: T('o homem — {הַהֵם} com o {הַ} eliminado') },
    { text: '{כַּל־הָעָם}', gloss: T('todo o povo — {כָּל} «todo» + {הָעָם}') },
    { text: '{הַבֵּית־לֶחֶם}', gloss: T('a casa do pão — artigo sobre o constructo (cap. 7)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — O artigo segundo a inicial do substantivo'),
      head: [T('Inicial'), T('Forma'), T('Exemplo'), T('Glosa')],
      rows: [
        [T('B, D, G, K, L, M, N, P, S, T, Z'), '{הַ} + dagesh', '{הַמֶּלֶךְ}', T('o rei')],
        [T('Guturais {א} {ח} {ע}'), '{הָ}', '{הָאָרֶץ}', T('a terra')],
        [T('Gutural {ה}'), T('o {הַ} cai'), '{הֵם}', T('o homem')],
        [T('{ר}'), '{הָ} (às vezes {הַ})', '{הָרָאשִׁי}', T('o primeiro')],
        [T('Nome em constructo'), T('sem artigo'), '{מֶלֶךְ־יִשְׂרָאֵל}', T('o rei de Israel')],
      ],
    },
    {
      caption: T('Tabela 2 — Artigo presente e ausente: o que muda de sentido'),
      head: [T('Sem artigo (indefinido)'), T('Com artigo (determinado)'), T('Leitura')],
      rows: [
        ['{סוּס}', '{הַסּוּס}', T('um cavalo / o cavalo')],
        ['{מֶלֶךְ}', '{הַמֶּלֶךְ}', T('um rei / o rei')],
        ['{יוֹם}', '{הַיּוֹם}', T('um dia / o dia')],
        ['{דָּבָר}', '{הַדָּבָר}', T('uma palavra / a palavra')],
        [T('Classe / categoria'), T('Classe / categoria'), T('Humanidade / criação')],
      ],
    },
  ],
};
