import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  title: T('Particípios'),
  subtitle: T('כֹּתֵב, כָּתוּב — quem escreve, o que está escrito'),
  section: T('Formas não finitas e guturais'),
  body: C(`## Duas vozes, dois estados

O particípio hebraico tem duas formas principais (Gesenius §37):

**Ativo** ({קֹטֵל}, {כּוֹתֵב}): descreve ação em curso. {כֹּתֵב} «escrevendo» · {שֹׁמֵר} «guardando» · {אֹהֵב} «amando» · {יֹשֵׁב} «habitando» · {בֹּרֵחַ} «fugindo» (com patah furtivo!).

**Estativo/passivo** ({קָטוּל}, {כָּתוּב}): descreve estado resultante. {כָּתוּב} «escrito» · {שָׁבוּר} «quebrado» · {בָּרוּךְ} «bendito» · {אָרוּר} «maldito».

A diferença aparece na prática: {הַבַּיִת כָּתוּב} é «a casa **está** escrita», {הַבַּיִת כּוֹתֵב} é «a casa **está** sendo escrita».

## O particípio como substantivo

Com o artigo {הַ}, o particípio vira nome de grupo: {הַשֹּׁפְטִים} «os juízes» · {הַכֹּהֲנִים} «os sacerdotes» · {הַנְּבִיאִים} «os profetas». São as três chefias de Israel.

Com as preposições {בְּ} e {לְ}, o particípio vira **transitivo** e significa «o que é objeto de…»: {בָּרוּךְ} + {בְּ} = «bendito em» (ou «por quem é abençoado»); {שֹׁמֵר} + {לְ} = «guardado por» — o mesmo sentido do piel {שֹׁמֵר}.

Sem artigo e sem preposição, o particípio funciona como adjétivo de substantivo: {בֵּית חֶסֶד} «casa de {חֶסֶד}».

## Particípio = presente sem pronome

Em hebraico, o particípio com pronome é o presente: {אֲנִי כֹּתֵב} «eu estou escrevendo». Mas ao contrário do grego, o hebraico prefere o **wayyiqtol** para o passado narrativo e o **particípio** para o estado: {הָאָרֶץ טוֹבָה} «a terra é boa» lê-se com naturalidade; {הָאָרֶץ הָיְתָה טוֹבָה} soa forçado.

## Formas aramaicas

Daniel, Esdras e as duas Crônicas usam **aramaico**, a língua irmã do hebraico, e lá o particípio é o verbo principal: {מַלְכָּה} «ele reina» (3.ª m. sing.), {מַלְכְּתָה} «ela reina», {קָדוּשׁ} «santo» como adjetivo. Por isso o particípio aramaico {שָׁמַיִן} «exaltado» (Dn 2.34) é literalmente «o que foi erguido» — uma participação, não um pretérito.

O particípio hebraico conserva marcas dessa origem: {הִנְנִי} «eis-me aqui» é {הִנֵּה} «eis» + {־ִי}; e {הוֹא} «ele» como pronome vem de um particípio aramaico que significa «aquele que é».

## Participios com sufixo

O particípio também recebe sufixos pronominais (cap. 8): {בָּרוּךְ אַתָּה} «bendito és tu» (Sl 103.1), {שָׁמוּרִי} «guarda-me». Em {עִם־יְהוָה} o substantivo {עִם} precede o particípio aramaico {יְהוָה} «aquele que está com»: literalmente «o que está com YHWH» = «companheiro de Deus».

## Duas bênçãos para memorizar

{bְּרָכוּ יְהוָה} «bendito o SENHOR» (Sl 103.1) e {בָּרוּךְ אַתָּה יְהוָה} «bendito és tu, SENHOR». Toda a liturgia judaica começa assim — com particípio passivo. O ponto de partida da adoração hebraica é um estado, não uma ação.`),
  vocab: [
    V('כֹּתֵב', 'כתב', 'escrevendo'),
    V('כָּתוּב', 'כתב', 'escrito'),
    V('אֹהֵב', 'אהב', 'amando'),
    V('בָּרוּךְ', 'ברך', 'bendito'),
    V('אָרוּר', 'אָרור', 'maldito'),
    V('שֹׁמֵר', 'שׁמר', 'guardando'),
    V('הַנְּבִיאִים', 'נָבִיא', 'os profetas'),
    V('הִנְנִי', 'הִנֵּה', 'eis-me aqui'),
    V('מַלְכָּה', 'מלך', 'ele reina (part. aramaico)'),
    V('בּוֹרֵחַ', 'ברח', 'fugindo'),
    V('שֹׁמֵעַ', 'שׁמע', 'ouvindo'),
    V('קֹרֵא', 'קרא', 'chamando, lendo'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete a bênção: «___ אַתָּה יְהוָה» (bendito és tu).'),
    answer: 'בָּרוּךְ',
    hint: T('Particípio passivo de «abençoar», da raiz {ברך}.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual é o particípio estativo (estado) de {כתב}?'),
      options: [T('כֹּתֵב'), T('כָּתוּב'), T('יִכְתֹּב'), T('לִכְתֹּב')],
      answer: 1,
      hint: T('O estativo usa o padrão {קָטוּל}: {ָ} na raiz e {וּ} no sufixo.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o particípio ao seu tipo.'),
      pairs: [
        { a: '{שֹׁמֵר}', b: T('ativo') },
        { a: '{שָׁמוּר}', b: T('estativo') },
        { a: '{בֹּרֵךְ}', b: T('ativo') },
        { a: '{בָּרוּךְ}', b: T('estativo') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Em {הַנְּבִיאִים} «os profetas», o que fez o substantivo?'),
      options: [
        T('Perdeu o artigo'),
        T('Recebeu o artigo e virou nome de grupo'),
        T('Entrou em constructo'),
        T('Virou um verbo'),
      ],
      answer: 1,
      hint: T('Regra §2: {הַ} + particípio = substantivo de grupo.'),
    },
    {
      kind: 'choose',
      prompt: T('Em {נֶאֱמַנְתָּה לְיוֹסֵף}, o que {לְ} faz com o participio {נֶאֱמַנְתָּה}?'),
      options: [
        T('Torna-o transitivo: «confiado a»'),
        T('Marca o plural'),
        T('Indica tempo futuro'),
        T('Substitui o artigo'),
      ],
      answer: 0,
      hint: T('Regra §3: {לְ} + participio = «guardado por», como o piel.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Particípio ativo ({כּוֹתֵב}) indica ação em curso; participio estativo ({כָּתוּב}) indica estado resultante.',
      ),
    },
    { n: '2', text: T('Com {הַ} o particípio vira substantivo de grupo: {הַשֹּׁפְטִים} «os julcas».') },
    {
      n: '3',
      text: T(
        'Com {בְּ} ou {לְ} o particípio é transitivo: {שֹׁמֵר} + {לְ} = «guardado por», como o piel {שֹׁמֵר}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Particípio + pronome é o presente ({אֲנִי כֹּתֵב}); para o estado, o hebraico prefere o participio, não um verbo ({הָאָרֶץ טוֹבָה}).',
      ),
    },
    {
      n: '5',
      text: T(
        'Em aramaico (Daniel, Esdras, 2 Crônicas) o particípio é o verbo principal: {מַלְכָּה} «ele reina».',
      ),
    },
  ],
  notes: [
    {
      label: T('Exegese:'),
      text: T(
        'A escolha entre particípio e verbo muda o sentido de uma frase inteira. Em {הָאָרֶץ טוֹבָה} «a terra é boa», o participio descreve um estado permanente; em {הָאָרֶץ הָיְתָה טוֹבָה} o verbo descreve um evento. Em Ezequiel 33.32, Deus complains que o povo «lê» ({קֹרֵא}) e «gosta de ouvir» ({שֹׁמֵעַ}) as palavras do profeta — e é justamente um participio que descreve o hábito deles.',
      ),
    },
    {
      label: T('Curiosidade:'),
      text: T(
        'As duas línguas irmãs se distribuem as tarefas na Bíblia: o hebraico conta narrativas com verbos (wayyiqtol), o aramaico conta com participios. Daniel muda de língua conforme o interlocutor — com o rei, aramaico; com os judeus, hebraico. É um diálogo escrito dentro do próprio texto, e só austa de Daniel e de Esdras guardam essa conversa.',
      ),
    },
  ],
  examples: [
    { text: '{כֹּתֵב}', gloss: T('escrevendo — particípio ativo (raiz {כתב})') },
    { text: '{כָּתוּב}', gloss: T('escrito — participio estativo') },
    { text: '{בָּרוּךְ}', gloss: T('bendito — estativo de {ברך}') },
    { text: '{אָרוּר}', gloss: T('maldito — o oposto de {בָּרוּךְ}') },
    { text: '{אֹהֵב}', gloss: T('amando — particípio ativo') },
    { text: '{הַנְּבִיאִים}', gloss: T('os profetas — {נָבִיא} + {הַ} (adjetivo substantivado)') },
    { text: '{הִנְנִי}', gloss: T('eis-me aqui — {הִנֵּה} + {־ִי}') },
    { text: '{בָּרוּךְ אַתָּה יְהוָה}', gloss: T('bendito és tu, SENHOR (Sl 103.1)') },
    { text: '{מַלְכָּה}', gloss: T('ele reina — particípio aramaico (Dn 2.37)') },
    { text: '{שָׁמַיִן}', gloss: T('exaltado — aramaico: «o que foi erguido»') },
    { text: '{עִם־יְהוָה}', gloss: T('companheiro de Deus — {עִם} + particípio aramaico') },
    { text: '{בֹּרֵחַ}', gloss: T('fugindo — ativo com patah furtivo') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Participio ativo e participio estativo'),
      head: [T('Raiz'), T('Ativo (ação)'), T('Estativo (estado)'), T('Glosa')],
      rows: [
        ['{כתב}', '{כֹּתֵב}', '{כָּתוּב}', T('escrevendo / escrito')],
        ['{שׁמר}', '{שֹׁמֵר}', '{שָׁמוּר}', T('guardando / guardado')],
        ['{אהב}', '{אֹהֵב}', '{אָהוּב}', T('amando / amado')],
        ['{ישׁב}', '{יֹשֵׁב}', '{יָשֵׁב}', T('habitando / habitado')],
        ['{ברך}', '{בֹּרֵךְ}', '{בָּרוּךְ}', T('bendizendo / bendito')],
        ['{רחץ}', '{רֹחֵץ}', '{רָחוּץ}', T('lavando / lavado')],
        ['{שמם}', '{שֹׁמֵעַ}', '{שָׁמוּעַ}', T('ouvindo / ouvido')],
      ],
    },
    {
      caption: T('Tabela 2 — O particípio com artigo e com preposição'),
      head: [T('Construção'), T('Exemplo'), T('Glosa')],
      rows: [
        [T('Artigo {הַ} = grupo'), '{הַנְּבִיאִים}', T('os profetas')],
        [T('Sem artigo = adjetivo'), '{בֵּית חֶסֶד}', T('casa de bondade')],
        [T('{בְּ} = «bendito em»'), '{בָּרוּךְ בַּמּוֹסֵד}', T('bendito entre os conselhos')],
        [T('{לְ} = «guardado por»'), '{נֶאֱמַנְתָּה לְיוֹסֵף}', T('confiado a José')],
        [T('Pronome + participio = presente'), '{אֲנִי כֹּתֵב}', T('eu estou escrevendo')],
      ],
    },
  ],
};
