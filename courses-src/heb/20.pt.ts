import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  title: T('Perguntas e relativas'),
  subtitle: T('מִי, מָה, אֲשֶׁר — quem, o quê, o qual'),
  section: T('Preposições, comparação, perguntas e tempo'),
  body: C(`## As seis perguntas

O hebraico tem um questionário enxuto, todo em palavras curtas:

{מִי} «quem?» — {מָה} «o quê?» — {אֵיךְ} «como?» — {לָמָּה} «por quê?» — {מָתַי} «quando?» — {אַיֵּה} «onde?»

Repare nas duas formas de «onde»: {אַיֵּה} para **pessoas** e {אַיכָ} (ou {אֵיכָ}) para **coisas**. É a mesma lógica do capítulo 16: a pergunta se adapta ao referente. Em Gênesis 4.9, Caim pergunta {אַיֵּה הֶבֶל אָחִיךָ} «onde está Abel, teu irmão?» — {הֶבֶל} é pessoa, {אַיֵּה} é a forma correta; se fosse uma ovelha, o verbo seria {אַיכָ}.

Existe ainda {מַדּוּעַ} «por qual razão?», a forma mais longa e mais rara, e as perguntas indiretas com {אִם}: {אִם־יֵשְׂנְךָ שֶׁמֶר} «se há um pastor?» (Gn 11.7).

## {מָה} vira {מֶה}

Um detalhe de escrita: antes de uma gutural, {מָה} troca o qamats por segol. Em Gênesis 20.9, Abimeleque pergunta {מֶה־עָשִׂיתָ} «o que fizeste?» e {מֶה־חָטָאתִי} «em que te offenDi?». É a {ע} gutural logo depois de {מֶה} que provoca a troca da vogal.

## O relativo {אֲשֶׁר}

O pronome relativo mais usado é {אֲשֶׁר} «que, o qual, quem» — e ele é **invariável**: não flexiona gênero nem número, e traduz-se como «quem» ou «que» conforme a tradição da língua de destino. Em Salmo 1.1, {אַשְׁרֵי־הָאִישׁ אֲשֶׁר} é literalmente «feliz o homem que».

Existe uma forma curta e poética, {שֶׁ}, que aparece na poesia: {אֲשַׁר־שָׁמַיִם} «cujo domicílio é o céu» (Sl 68.7). E, raramente, {זַ} com sentido de «cujo».

Detalhe de construção: o relativo pode ser seguido por preposição — {אֲשֶׁר בּוֹ} «no qual», {אֲשֶׁר לּוֹ} «que tem» — e é assim que o hebraico traduz o genitivo de outras línguas. Em Salmo 1.1, {בַּעֲצַת} «no conselho» é {ב} + {עֲצַת}, com o {ע} em estado constructo.

## As perguntas de sim e não

Duas partículas abrem uma pergunta que **espera resposta positiva**: {הֲלוֹא} «acaso não…?» e {הֲ} no início da frase. Em Isaías 40.28, {הֲלוֹא־יָדַעְתָּ אִם־לֹא שָׁמָעְתָּ} «Acaso não sabes? Porventura não ouviste?» — a resposta esperada é «sim», e o versículo inteiro é um pedido de reconhecimento.

Em Ezequiel, {הֲתַפְלָא} «não é incrível?» espera resposta **negativa**: «acaso não é incrível?». Um contexto de negação inverte a expectativa.

Cuidado com {ה} dentro de um discurso: {ה} é também a partícula de honestidade, que introduz a voz humana no meio da palavra de Deus — o marca a distância entre o que Deus diz e o que o profeta repete.

## {מָה} + adjetivo = «quão!»

O substantivo {מָה} «o quê», ligado por maqaf a um adjetivo ou advérbio, vira exclamação de grau: {מַה־טֹּבוּ} «quão bom!» (Nm 24.5, as tendas de Jacó) · {מַה־נִפְלָא} «quão incrível!» (Sl 118.23) · {מַה־טּוֹבָה} «quão boa!» (feminino, com {ה}).

E com verbo, {מָה} + verbo = «como?» ou «o que?» — em Jeremias 13.16, o profeta pergunta ao vaso: {מַה־תִּבְעֲיָהוּ} «o que estás a fazer?» O leitor recognizes de imediato a pergunta mais dura de toda a Bíblia.

## Fórmulas para reter

{מִי} «quem?» · {מָה} «o quê?» · {אֵיךְ} «como?» · {לָמָּה} «por quê?» · {מָתַי} «quando?» · {אַיֵּה} «onde? (pessoas)» · {אַיכָ} «onde? (coisas)» · {אֲשֶׁר} «que, o qual» · {הֲלוֹא} «acaso não?»`),
  vocab: [
    V('מִי', 'מִי', 'quem?'),
    V('מָה', 'מָה', 'o quê?'),
    V('מֶה', 'מָה', 'o quê? (antes de gutural)'),
    V('אֵיךְ', 'אֵיךְ', 'como?'),
    V('לָמָּה', 'לָמָּה', 'por quê?'),
    V('מָתַי', 'מָתַי', 'quando?'),
    V('אַיֵּה', 'אַיֵּה', 'onde? (pessoas)'),
    V('אַיכָ', 'אַיכָ', 'onde? (coisas)'),
    V('אֲשֶׁר', 'אֲשֶׁר', 'que, o qual'),
    V('שֶׁ', 'אֲשֶׁר', 'que (forma poética)'),
    V('הֲלוֹא', 'הֲלוֹא', 'acaso não?'),
    V('מַדּוּעַ', 'מַדּוּעַ', 'por qual razão?'),
    V('הֶבֶל', 'הֶבֶל', 'Abel'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete Gn 4:9: «___ הֶבֶל אָחִיךָ» (onde está Abel?).'),
    answer: 'אַיֵּה',
    hint: T('«Onde?» para pessoas.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Ligue a pergunta ao seu referente.'),
      pairs: [
        { a: '{מִי}', b: T('quem? (pessoas)') },
        { a: '{אַיֵּה}', b: T('onde? (pessoas)') },
        { a: '{אַיכָ}', b: T('onde? (coisas)') },
        { a: '{מָתַי}', b: T('quando?') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('O que {אֲשֶׁר} faz de diferente em relação a um adjetivo?'),
      options: [
        T('Não flexiona gênero nem número'),
        T('Sempre vem com artigo'),
        T('Só aparece em poesia'),
        T('É sempre plural'),
      ],
      answer: 0,
      hint: T('Regra §3: o relativo hebraico é invariável.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete Nm 24:5: «מַה־___» (quão bom!).'),
      answer: 'טֹּבוּ',
      hint: T('{מַה־} + forma plural de {טוֹב} «bom».'),
    },
    {
      kind: 'choose',
      prompt: T('Em {הֲלוֹא־יָדַעְתָּ} (Is 40.28), a resposta esperada é:'),
      options: [
        T('«sim» — é um pedido de reconhecimento'),
        T('«não» — é uma objeção'),
        T('«não sei» — é uma pergunta de ignorância'),
        T('«talvez» — é uma hipótese'),
      ],
      answer: 0,
      hint: T('Regra §4: {הֲלוֹא} espera resposta positiva.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('As perguntas são palavras curtas e separadas: {מִי} {מָה} {אֵיךְ} {לָמָּה} {מָתַי} {אַיֵּה}.'),
    },
    { n: '2', text: T('«Onde?» tem duas formas: {אַיֵּה} para pessoas e {אַיכָ} para coisas.') },
    {
      n: '3',
      text: T(
        'O relativo {אֲשֶׁר} é invariável: nunca flexiona, e traduz «quem» ou «que» conforme a língua.',
      ),
    },
    {
      n: '4',
      text: T(
        '{הֲלוֹא} e {הֲ} abrem perguntas que esperam «sim»; em contexto negado, a expectativa se inverte.',
      ),
    },
    {
      n: '5',
      text: T('{מַה־} + adjetivo é exclamação («quão!»), não pergunta: {מַה־טֹּבוּ} «quão bom!».'),
    },
  ],
  notes: [
    {
      label: T('Exegese:'),
      text: T(
        'A pergunta de Isaías 40.28 ({הֲלוֹא־יָדַעְתָּ}) não espera «não». O hebraico antiguo usava perguntas assim para chamar alguém à atenção e provocar o reconhecimento: é a pergunta do professor que sabe que o aluno sabe, e o aluno descobre que a pergunta era retórica.',
      ),
    },
    {
      label: T('Curiosidade:'),
      text: T(
        'A partícula de honestidade {ה} é a mesma que abre as perguntas: no hebraico antigo, falar «eu digo» precedia qualquer afirmação forte, e o {ה} de {הֲלוֹא} é a sua marca formal. Por isso o mesmo som serve para «acaso não» e para «certamente»: a função depende do inteiro contexto.',
      ),
    },
  ],
  examples: [
    { text: '{מִי}', gloss: T('quem? — só para pessoas') },
    { text: '{מָה}', gloss: T('o quê? — {מָה זֶּה} «o que é isto?» (Êx 3.6)') },
    { text: '{מֶה־עָשִׂיתָ}', gloss: T('o que fizeste? — {מֶה} antes de gutural (Gn 20.9)') },
    { text: '{אֵיךְ}', gloss: T('como? — {אֵיךְ־יָפוּ} «como são belas!»') },
    { text: '{לָמָּה}', gloss: T('por quê? — {לָמָּה־זָה} «para que isto?» (Gn 3.20)') },
    { text: '{מָתַי}', gloss: T('quando? — {מָתַי־אָבֹא} «quando he de chegar?»') },
    { text: '{אַיֵּה}', gloss: T('onde? (pessoas) — Gn 4.9') },
    { text: '{אַיכָ}', gloss: T('onde? (coisas) — {אֵיכָ זֶה} «onde está isto?»') },
    { text: '{אֲשֶׁר}', gloss: T('que, o qual — invariável') },
    { text: '{הֲלוֹא}', gloss: T('acaso não? — espera «sim» (Is 40.28)') },
    { text: '{מַה־טֹּבוּ}', gloss: T('quão bom! — as tendas de Jacó (Nm 24.5)') },
    { text: '{מַה־נִפְלָא}', gloss: T('quão incrível! (Sl 118.23)') },
    { text: '{מַה־תִּבְעֲיָהוּ}', gloss: T('o que estás a fazer? — pergunta ao vaso (Jr 13.16)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — O questionário hebraico'),
      head: [T('Pergunta'), T('Forma'), T('Usa com'), T('Exemplo')],
      rows: [
        [T('quem?'), '{מִי}', T('pessoas'), '{מִי הָאָדָם} «quem é o homem?» (Ec 3.15)'],
        [T('o quê?'), '{מָה}', T('coisas, ações'), '{מָה זֶּה} «o que é isto?» (Êx 3.6)'],
        [
          T('o quê? (antes de gutural)'),
          '{מֶה}',
          T('gutural seguinte'),
          '{מֶה־עָשִׂיתָ} «o que fizeste?» (Gn 20.9)',
        ],
        [T('como?'), '{אֵיךְ}', T('adjetivo, verbo'), '{אֵיךְ־יָפוּ} «como são belas!» (Ct 7.6)'],
        [T('por quê?'), '{לָמָּה}', T('causa, propósito'), '{לָמָּה־זָה} «para que isto?» (Gn 3.20)'],
        [T('quando?'), '{מָתַי}', T('tempo'), '{מָתַי־אָבֹא} «quando he de chegar?» (Gn 29.7)'],
        [T('onde? (pessoas)'), '{אַיֵּה}', T('seres humanos'), '{אַיֵּה הֶבֶל אָחִיךָ} (Gn 4.9)'],
        [
          T('onde? (coisas)'),
          '{אַיכָ} / {אֵיכָ}',
          T('objetos, lugares'),
          '{אֵיכָ זֶה} «onde está isto?» (Êx 2.18)',
        ],
      ],
    },
    {
      caption: T('Tabela 2 — Perguntas de sim/não e exclamações'),
      head: [T('Tipo'), T('Forma'), T('Resposta esperada'), T('Exemplo')],
      rows: [
        [T('Sim/não positiva'), '{הֲלוֹא}', T('«sim»'), '{הֲלוֹא־יָדַעְתָּ} (Is 40.28)'],
        [T('Sim/não positiva'), '{הֲ}', T('«sim»'), '{הֲ־לֹא} «acaso não?» (1 Sm 12.3)'],
        [T('Retórica negativa'), '{הֲתַפְלָא}', T('«não»'), '{הֲתַפְלָא} «não é incrível?» (Ez 3.15)'],
        [T('Exclamação de grau'), '{מַה־}', T('«quão!»'), '{מַה־טֹּבוּ} «quão bom!» (Nm 24.5)'],
        [T('Exclamação (fem.)'), '{מַה־}+ {ה}', T('«quão!»'), '{מַה־טּוֹבָה} «quão boa!» (Sl 118.24)'],
      ],
    },
  ],
};
