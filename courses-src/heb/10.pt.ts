import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Os binyanim'),
  subtitle: T('קָדַשׁ, קִדַּשׁ, הִקְדִּישׁ — uma raiz, sete moldes'),
  section: T('Verbo e numeral'),
  body: C(`## Sete maneiras de dizer a mesma raiz

Uma raiz hebraica não é um verbo pronto: é um esquema de consoantes que precisa de um **molde** (binyán, «construção») para virar verbo (Gesenius §39-53). São sete moldes principais, e cada um acrescenta um matiz de sentido. Tome {קדשׁ} «santo»:

{קָדַשׁ} **qal** — {קָדַשׁ} «ele foi/é santo»
{נִקְדַּשׁ} **niphal** — {נִקְדַּשׁ} «ele foi santificado»
{קִדַּשׁ} **piel** — {קִדַּשׁ} «ele santificou»
{קֻדַּשׁ} **pu'al** — {קֻדַּשׁ} «foi santificado»
{הִקְדִּישׁ} **hiphil** — {הִקְדִּישׁ} «ele fez santificar»
{הָקְדַּשׁ} **hopal** — {הָקְדַּשׁ} «foi feito santo»
{הִתְקַדֵּשׁ} **hitpael** — {הִתְקַדֵּשׁ} «ele se santificou»

Um único esquema de três consoantes produz sete verbos completos, com prefixo, dagesh e vogais próprios.

## Como cada molde se forma

O qal é o molde de base: a raiz conserva as consoantes, vogal e tem a primeira letra forte. Cada molde seguinte modifica o esqueleto de um jeito previsível:

**Niphal** acrescenta o prefixo {נִ} e um dagesh na 2.ª letra: {קדשׁ} → {נִקְדַּשׁ}
**Piel** duplica a 2.ª letra: {קדשׁ} → {קִדַּשׁ}
**Hiphil** acrescenta o prefixo {הִ} e desloca a vogal: {קָדַשׁ} → {הִקְדִּישׁ}
**Hitpael** soma {הִ} + {ת} e alonga a vogal: {הִתְקַדֵּשׁ}

Quando o molde começa com {ה}, a vogal pode ficar {ָ} (qamats) em vez de {ַ} (pataj) — é o mesmo mecanismo do artigo {הָ} (cap. 1).

## O que cada molde significa

Qal é o valor neutro: «fazer» sem mais. Niphal acrescenta passividade, reflexo ou reciprocidade: {נִשְׁמַר} «ele se guardou», {נִקְדַּשׁ} «foi santificado». Piel é o intensive-factivo: «tornar santo», «abençoar» ({בֵּרַךְ} a partir de {ברך}). Pu'al é o passivo do qal. Hiphil é o causativo por excelência: «fazer alguémpto fazer» ({הִקְדִּישׁ}). Hopal é o passivo do hiphil. Hitpael é o piel reflexivo.

Com outras raízes o sistema brilha ainda mais: {שׁמַר} «guardar» → {נִשְׁמַר} «guardar-se», {הִשְׁמַר} «fazer guardar», {הִשְׁמֹר} «ser guardado». {נָתַן} «dar» → {נִתַּן} «ser dado», {הִנָּתֵן} «dar a alguém».

## Participios: onde o molde fica visível

O participio mostra o molde com clareza, porque repete o prefixo:

{קֹדֶשׁ} (qal) «santo» · {נִקְדֵּשׁ} (niphal) «santificado» · {מַקְדֵּשׁ} (hiphil) «santificador» · {קָדוּשׁ} (pu'al) «santo [passivo]»

A frase de Is 6:3 — {קָדוֹשׁ קָדוֹשׁ קָדוֹשׁ יְהוָה} «Santo, santo, santo é o SENHOR» — usa um particípio, {קָדוֹשׁ}, que vem da mesma raiz {קדשׁ}. A raiz que governa o capítulo aparece três vezes na mesma frase: uma raiz, três participios, um único Deus.

## Nem toda raiz tem sete moldes

As raízes trilitéricas completas aceitam os sete; as defectivas ({אמר} «dizer», {הלך} «ir») e as guturais ({שׁמר}) às vezes perdem um. E há verbos whose dagesh disappears em formas específicas. Portanto: aprenda o padrão, mas sempre confirme a forma na palavra que você está lendo.

## Resumo visual

Se você lembrar apenas da raiz e do que cada molde faz, consegue ler qualquer verbo. Este é o maior salto de raciocínio do curso: a raiz é o lexema, o molde é a flexão.`),
  vocab: [
    V('קָדַשׁ', 'קדשׁ', 'ele foi santo (qal)'),
    V('נִקְדַּשׁ', 'קדשׁ', 'ele foi santificado (niphal)'),
    V('קִדַּשׁ', 'קדשׁ', 'ele santificou (piel)'),
    V('קֻדַּשׁ', 'קדשׁ', "foi santificado (pu'al)"),
    V('הִקְדִּישׁ', 'קדשׁ', 'ele fez santificar (hiphil)'),
    V('הָקְדַּשׁ', 'קדשׁ', 'foi feito santo (hopal)'),
    V('הִתְקַדֵּשׁ', 'קדשׁ', 'ele se santificou (hitpael)'),
    V('בֵּרַךְ', 'ברך', 'ele abençoou (piel)'),
    V('נִשְׁמַר', 'שׁמר', 'ele se guardou (niphal)'),
    V('הִשְׁמֹר', 'שׁמר', 'ser guardado (hopal)'),
    V('קָדוֹשׁ', 'קָדוֹשׁ', 'santo'),
    V('מַקְדֵּשׁ', 'קדשׁ', 'santificador (part. hifil)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual binyan é «הִקְדִּישׁ»?'),
    options: [
      T('Qal (simples)'),
      T('Niphal (passivo)'),
      T('Piʿel (intensivo)'),
      T('Hifil (causativo, prefijo הִ)'),
    ],
    answer: 3,
    hint: T('Olhe o prefixo {הִ} e a vogal {ִ} antes do sufixo {־י}.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('O que {הִשְׁמֹר} significa, dado que {שׁמַר} é «guardar»?'),
      options: [
        T('ele guarda (qal)'),
        T('ele se guarda (niphal)'),
        T('ser guardado (hopal)'),
        T('guardar por outrem (hiphil)'),
      ],
      answer: 2,
      hint: T('{הִ} + {שֹׁ} indica hopal: o passivo do causativo.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a forma de {קדשׁ} ao seu molde.'),
      pairs: [
        { a: '{קָדַשׁ}', b: T('qal') },
        { a: '{נִקְדַּשׁ}', b: T('niphal') },
        { a: '{קִדַּשׁ}', b: T('piel') },
        { a: '{הִתְקַדֵּשׁ}', b: T('hitpael') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Escreva o qatal hiphil de {קדשׁ} («ele fez santificar»).'),
      answer: 'הִקְדִּישׁ',
      hint: T('{קָדַשׁ} → prefixo {הִ}, vogal {ִ} e sufixo {־י} de perfectivo.'),
    },
    {
      kind: 'choose',
      prompt: T('Em «קָדוֹשׁ קָדוֹשׁ קָדוֹשׁ יְהוָה» (Is 6.3), {קָדוֹשׁ} é:'),
      options: [
        T('um particípio da raiz {קדשׁ}'),
        T('o futuro de {קדשׁ}'),
        T('um numeral («três»)'),
        T('um substantivo independente'),
      ],
      answer: 0,
      hint: T('A forma termina em {וֹשׁ} e vem sem artigo: é um particípio (cap. 14).'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('O verbo hebraico = raiz + molde (binyan). O molde é a flexão; a raiz é o lexema.'),
    },
    {
      n: '2',
      text: T(
        "Qal é o valor neutro; niphal é passivo/reflexivo; piel é intensive-factivo; hiphil é causativo; pu'al e hopal são os passivos.",
      ),
    },
    {
      n: '3',
      text: T(
        'Piel dobra a 2.ª letra da raiz; niphal e hiphil acrescentam prefixo ({נִ} e {הִ}) com dagesh na 2.ª letra.',
      ),
    },
    {
      n: '4',
      text: T(
        'O participio repete o prefixo do molde: {מַקְדֵּשׁ} é hiphil («santificador»), {קֹדֶשׁ} é qal («santo»).',
      ),
    },
    {
      n: '5',
      text: T(
        'Nem toda raiz tem os sete moldes: raízes defectivas e guturais perdem formas. Confira sempre a palavra real.',
      ),
    },
  ],
  notes: [
    {
      label: T('Exegese:'),
      text: T(
        "Os binyanim são a principal ferramenta de leitura do hebraico bíblico. Duas frases com o mesmo substantivo podem ter sentidos opostos se o verbo mudar de molde: {פּוֹרְשִׁים} (hifil, «separando») e {פּוֹרְשִׁים} (pu'al, «separados») descrevem ações e estados diferentes. O verbo não é só tempo: é uma atitude em relação a quem age.",
      ),
    },
    {
      label: T('Curiosidade:'),
      text: T(
        'Os sete moldes não são novidade dos gramáticos: eles já estavam no hebraico antigo, quando o povo ainda falava. Os documentos de Ugarit e os textos de Benê Berak do Tabernacle revelam o mesmo sistema — o que significa que os escribas do Antigo Testamento escreviam do mesmo modo que seus bisavós.',
      ),
    },
  ],
  examples: [
    { text: '{קָדַשׁ}', gloss: T('ele foi santo — qal') },
    { text: '{נִקְדַּשׁ}', gloss: T('ele foi santificado — niphal (passivo)') },
    { text: '{קִדַּשׁ}', gloss: T('ele santificou — piel (dobra o {ד})') },
    { text: '{קֻדַּשׁ}', gloss: T("foi santificado — pu'al (qal passivo)") },
    { text: '{הִקְדִּישׁ}', gloss: T('ele fez santificar — hiphil (causativo)') },
    { text: '{הָקְדַּשׁ}', gloss: T('foi feito santo — hofal (hifil pasivo)') },
    { text: '{הִתְקַדֵּשׁ}', gloss: T('ele se santificou — hitpael (piel reflexivo)') },
    { text: '{בֵּרַךְ}', gloss: T('ele abençoou — piel de {ברך} «abençoar»') },
    { text: '{נִשְׁמַר}', gloss: T('ele se guardou — niphal de {שׁמר}') },
    { text: '{הִשְׁמֹר}', gloss: T('ser guardado — hopal de {שׁמר}') },
    { text: '{מַקְדֵּשׁ}', gloss: T('santificador — participio hiphil') },
    { text: '{קָדוֹשׁ}', gloss: T('santo — particípio de {קדשׁ} (Is 6.3)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Como cada molde nasce de {קדשׁ}'),
      head: [T('Molde'), T('3.ª m. qatal'), T('Participio'), T('Glosa')],
      rows: [
        ['qal', '{קָדַשׁ}', '{קֹדֶשׁ}', T('ele foi/é santo')],
        ['niphal', '{נִקְדַּשׁ}', '{נִקְדֵּשׁ}', T('ele foi santificado')],
        ['piel', '{קִדַּשׁ}', '{מְקַדֵּשׁ}', T('ele santificou')],
        ["pu'al", '{קֻדַּשׁ}', '{קָדוּשׁ}', T('foi santificado')],
        ['hiphil', '{הִקְדִּישׁ}', '{מַקְדֵּשׁ}', T('ele fez santificar')],
        ['hopal', '{הָקְדַּשׁ}', '{מְקֻדָּשׁ}', T('foi feito santo')],
        ['hitpael', '{הִתְקַדֵּשׁ}', '{מִתְקַדֵּשׁ}', T('ele se santificou')],
      ],
    },
    {
      caption: T('Tabela 2 — Como o molde se forma'),
      head: [T('Operação'), T('Prefixo'), T('Dagesh'), T('Vogal')],
      rows: [
        [T('qal (base)'), T('—'), T('na 2.ª letra'), '{ַ} (pataj)'],
        [T('niphal'), '{נִ}', T('na 2.ª letra'), T('{ַ} → {ְ} na 1.ª letra')],
        [T('piel'), T('—'), T('dobra a 2.ª letra'), '{ַ}'],
        [T('hiphil'), '{הִ}', T('na 2.ª letra'), '{ַ} → {ִ}'],
        [T('hitpael'), '{הִת}', T('na 2.ª letra'), '{ַ} → {ֵ}'],
      ],
    },
    {
      caption: T('Tabela 3 — Duas raízes em seis moldes'),
      head: [T('Molde'), T('Raiz {שׁמר} «guardar»'), T('Raiz {נתן} «dar»')],
      rows: [
        ['qal', '{שָׁמַר}', '{נָתַן}'],
        ['niphal', '{נִשְׁמַר}', '{נִתַּן}'],
        ['piel', '{שָׁמֵר}', '{נְתַן}'],
        ['hiphil', '{הִשְׁמַר}', '{הִנָּתֵן}'],
        ['hopal', '{הִשְׁמֹר}', '{הֻנְתַּן}'],
        ['hitpael', '{הִתְשַׁמֵּר}', '{הִתְנַתֵּן}'],
      ],
    },
  ],
};
