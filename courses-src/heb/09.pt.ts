import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('Os verbos essenciais'),
  subtitle: T('הָלַךְ, בּוֹא, הָיָה, אָכַל: as raízes que sustentam quase todo verso'),
  section: T('Verbo e numeral'),
  body: C(`## Seis raízes que o texto bíblico não larga

Uma raiz hebraica não é pronta. {הלכ} sozinho é só um esquema de consoantes; vira verbo no molde {קָטַל} (qal), com as vogais {cacac} que o qal impõe. Os verbos essenciais do curso são seis raízes velhas, e nenhuma delas se forma nem se flexiona por regra simples:

{הָלַךְ} walk / ir
{בּוֹא} come / vir
{הָיָה} be / ser, estar, acontecer
{אָכַל} eat / comer
{רָאָה} see / ver
{שָׁמַע} hear / ouvir, obedecer

O resto do verbo aparece por derivação. {שָׁמַר} "guardar" em hebraico do Pentateuco vive mais como nomeção do que o verbo do Evangelho, mas a mesma raiz rende {שָׁמַרְתָּ}, "tu guardaste", e {יְהוָה שֹׁמֵר}, "o SENHOR guarda".

## O pretérito (qatal) marca o fato concluído

Quando o texto quer dizer que algo aconteceu, usa o qatal: a vogal da segunda cônica cai e mudam o sufixo de pessoa:

{הָלַךְ} ele foi / andou
{אָכַל} ele comeu
{רָאָה} ele viu
{הָיָה} ele foi / era / aconteceu

{הָיָה} é o verbo mais usado do hebraico bíblico. Quase todo versículo carrega um {הָיָה} ou um {וַיְהִי} oculto, e a tradução abre um dilema: {הָיָה} no começo de frase, sozinho, com nome próprio depois, costuma ser "e vivia" ou "e aconteceu", e não "era" simples.

{וַיְהִי} é o pretérito contínuo de {הָיָה}, e é a assinatura da narrativa hebraica: {וַיְהִי בַּיָּמִים הָהֵם} diz "e aconteceu naqueles dias" (Lc 2:1). Quando o versículo começa com {וַיְהִי}, a história está no passado contínuo, no que vinha acontecendo.

## As formas que invertem o olhar

O qatal também sabe marcar advérbio e posse, e os dois usos mais importantes de to byno:

- **{לִי הַהִוא}, "foi-me dado"**. O português pede o sujeito em {הָיָה}: "houve". O hebraico deixa o {הָיָה} sozinho e pendura o dono com {לִי}. A tradução errada mais comum é fraca: "ele tinha".
- **{מִצְוָה} e {נֹתֵן}**. Os verbos de dar e tomar no imperfeito podem dar uma marca de repetição ou de lei: {וַיִּתֵּן}, "e deu"; {נוֹתֵן}, "o que dá". O imperfeito de {נָתַן} é o que aparece na Torah como particípio.

## Na Bíblia

Gênesis 1:3 abre com {וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר}, e o verbo que continua a frase é {וַיְהִי־אוֹר}: o grego lê por {ἐγένετο φῶς}, "e houve luz". Em Hebreus 11:3 os mesmos dois verbos em hebraico viram uma frase só. Quando o texto ecoa {וַיְהִי} em aramaico, o momento muda: a frase deixa de ser relato e vira tempo marcado.

Mateus 5:45 traz {בְּנֵי־אָבִיכֶם}, e o verbo de fazer é {מַמְטִיר} — a forma imperfeita de {הִמְטִיר}, "ele faz chover". O imperfeito localiza a ação num momento vago, que pode ser já ou ainda. É essa forma que o grego de Mateus traduz por {βρέχων} — particípio, "o que faz chover".`),
  vocab: [
    V('הָלַךְ', 'הָלַךְ', 'ele foi / andou'),
    V('בָּא', 'בּוֹא', 'ele veio'),
    V('הָיָה', 'הָיָה', 'ele foi / era / aconteceu'),
    V('אָכַל', 'אָכַל', 'ele comeu'),
    V('רָאָה', 'רָאָה', 'ele viu'),
    V('שָׁמַע', 'שָׁמַע', 'ele ouviu / obedeceu'),
    V('נָתַן', 'נָתַן', 'ele deu'),
    V('לָקַח', 'לָקַח', 'ele tomou'),
    V('עָשָׂה', 'עָשָׂה', 'ele fez'),
    V('יָדַע', 'יָדַע', 'ele conheceu / soube'),
    V('צִוָּה', 'צִוָּה', 'ele ordenou'),
    V('שָׁתָה', 'שָׁתָה', 'ele bebeu'),
    V('לָבַשׁ', 'לָבַשׁ', 'ele vestiu'),
    V('קָרָא', 'קָרָא', 'ele chamou / leu'),
    V('אֹהֵל', 'אֹהֵל', 'tenda'),
    V('קִרְיַת', 'קִרְיַת', 'cidade'),
    V('לֵאמֹר', 'לֵאמֹר', 'dizendo, falando'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'O qatal marca fato concluído: {אָכַל} "ele comeu", {הָלַךְ} "ele foi". O tempo do português não se confunde com ele.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{הָיָה} na abertura de versículo costuma ser "e aconteceu", "e vivia", "e houve". Sozinho, nunca "era" simples.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{וַיְהִי} marca narrativa: quando começa o versículo, o texto empurra para o que vinha acontecendo.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Verbos de posse no qatal levam {לִי}, nunca "ter": {היה לי}, "foi para mim" → "eu tive". {היה לי בית}, "eu tinha uma casa" (Jo 14:2 não é hebraico, é Lc 2:49: {בְּבֵית אָבִי}).',
      ),
    },
    {
      n: '§5',
      text: T(
        '{וַיִּתֵּן} com o objeto direto e o sujeito no dativo escreve a ordem de {וַיְצַו}: {וַיְצַו יְהוָה אֱלֹהִים עַל־הָאָדָם} (Gn 2:16).',
      ),
    },
  ],
  notes: [
    {
      label: T('{הָיָה} não é o verbo "ter"'),
      text: T(
        'O hebraico não tem verbo "ter". Onde o português diz "ele tem", o hebraico usa {הָיָה לוֹ} no passado ou no presente contínuo. Onde diz "ele tinha", usa {הָיָה לוֹ} no qatal. A tradução que escreve "ele tinha" apaga a estrutura que diz que o possuidor passa por um evento — ter é coisa que aconteceu.',
      ),
    },
    {
      label: T('{וַיְהִי} leva o tradutor de gosto'),
      text: T(
        'Em português toda abertura de versículo com {וַיְהִי} precisa rodar o esforço entre "aconteceu", "e era", "e aconteceu" e "certa vez". O erro comum é traduzir como "era uma vez": é um tempo marcado no passado do discurso, não um começo sublime.',
      ),
    },
  ],
  examples: [
    { text: 'בְּרֵאשִׁית בָּרָא אֱלֹהִים', gloss: T('Gn 1:1 — {בָּרָא} está no qatal: fato que aconteceu.') },
    { text: 'וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר', gloss: T('Gn 1:3 — {יְהִי} é o jussivo de {הָיָה}, "que seja".') },
    { text: 'וַיְהִי־אוֹר', gloss: T('Gn 1:3 — {וַיְהִי} + {אוֹר}: "e houve luz", narrativa seguida.') },
    {
      text: 'וַיְהִי בַּיָּמִים הָהֵם',
      gloss: T('Lc 2:1 (hebr.) — {וַיְהִי} marca dias em curso, não um instante.'),
    },
    { text: 'הָיָה כֵּן', gloss: T('forma qatal de {הָיָה} com afirmação: "foi assim".') },
    { text: 'אֹתִי נָקָם', gloss: T('qatal de {נָקַם}: algo aconteceu com ele; o grego lê {ἐγένετο}.') },
    {
      text: 'וַיְצַו יְהוָה',
      gloss: T('Gn 2:16 — {וַיְצַו} é o wayyiqtol de {צִוָּה}: narrativa, passado imediato.'),
    },
    {
      text: 'וַיַּרְא אֱלֹהִים אֶת־הָאוֹר',
      gloss: T('Gn 1:4 — {וַיַּרְא} é o wayyiqtol de {רָאָה}: ação seguida.'),
    },
    { text: 'וַיִּתֵּן לָהֶם', gloss: T('forma de imperativo de {נָתַן} com dativo: "e deu a eles".') },
    {
      text: 'אֹכֵל מַלְאָךְ',
      gloss: T('Gn 18 — o particípio ativo descreve o anjo vindo; {אֹכֵל} é muito antes de {אָכַל}.'),
    },
  ],
  tables: [
    {
      caption: T('O qatal dos essenciais, pessoa por pessoa'),
      head: [T('Verbo'), T('ele'), T('ela'), T('eles'), T('nós')],
      rows: [
        [T('{הָלַךְ}'), T('{הָלַךְ}'), T('{הָלְכָה}'), T('{הָלְכוּ}'), T('{הָלַכְנוּ}')],
        [T('{בּוֹא}'), T('{בָּא}'), T('{בָּאָה}'), T('{בָּאוּ}'), T('{בָּאנוּ}')],
        [T('{הָיָה}'), T('{הָיָה}'), T('{הָיְתָה}'), T('{הָיוּ}'), T('{הָיִינוּ}')],
        [T('{אָכַל}'), T('{אָכַל}'), T('{אָכְלָה}'), T('{אָכְלוּ}'), T('{אָכַלְנוּ}')],
        [T('{רָאָה}'), T('{רָאָה}'), T('{רָאֲתָה}'), T('{רָאוּ}'), T('{רָאִינוּ}')],
        [T('{שָׁמַע}'), T('{שָׁמַע}'), T('{שָׁמְעָה}'), T('{שָׁמְעוּ}'), T('{שָׁמַעְנוּ}')],
        [T('{נָתַן}'), T('{נָתַן}'), T('{נָתְנָה}'), T('{נָתְנוּ}'), T('{נָתַנּוּ}')],
        [T('{לָקַח}'), T('{לָקַח}'), T('{לָקְחָה}'), T('{לָקְחוּ}'), T('{לָקַחְנוּ}')],
      ],
    },
    {
      caption: T('{וַיְהִי} frente a {הָיָה}: dois verbos para dois tempos'),
      head: [T('Forma'), T('Tempo'), T('Uso'), T('Exemplo')],
      rows: [
        [T('{הָיָה}'), T('qatal'), T('fato pontuado'), T('{הָיָה כֵן}')],
        [T('{וַיְהִי}'), T('wayyiqtol'), T('narrativa em curso'), T('{וַיְהִי בַּיָּמִים}')],
        [T('{יְהִי}'), T('jussivo'), T('vontade, ordem'), T('{יְהִי אוֹר}')],
        [T('{הָיוּ}'), T('qatal plural'), T('fato passado de muitos'), T('{הָיוּ יָמִים}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {וַיְהִי בַּיָּמִים הָהֵם}, o que {וַיְהִי} marca?'),
    options: [
      T('Um fato único e fechado'),
      T('Narrativa em curso no passado'),
      T('Uma ordem ou desejo'),
      T('Um tempo futuro'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "וַיְהִי ___ אוֹר" (Gn 1:3) com o verbo "haver".'),
      answer: 'אוֹר',
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo à forma do qatal 3.ª pessoa.'),
      pairs: [
        { a: T('{הָלַךְ}'), b: T('{ele foi}') },
        { a: T('{רָאָה}'), b: T('{ele viu}') },
        { a: T('{אָכַל}'), b: T('{ele comeu}') },
        { a: T('{בּוֹא}'), b: T('{ele veio}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Em {וַיְהִי כְּדְבַר יְהוָה}, {וַיְהִי} indica:'),
      options: [
        T('Um comando no presente'),
        T('Narrativa já em curso'),
        T('Um verbo no infinitivo'),
        T('Um pronome possessivo'),
      ],
      answer: 1,
    },
  ],
};
