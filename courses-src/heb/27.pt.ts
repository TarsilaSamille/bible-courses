import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  title: T('A negação: {לֹא}, {אֵין} e o verbo que falta'),
  subtitle: T('οὐκ ἔστι × אֵין — por que o grego não trava e o hebraico trava'),
  section: T('Advérbio'),
  body: C(`## Uma palavra para negar o que existe

{לֹא} nega verbo. Só isso, e é uma regra sem exceção: depois de {לֹא} tem sempre um verbo, e o {לֹא} entra colado a ele por maqaf quando a frase é longa.

{לֹא־תִרְצָח} «não matarás» (Êx 20.13) · {לֹא הָלַךְ} «não andou» (Sl 1.1) · {לֹא יִיעַף} «não se cansa» (Is 40.28) · {וְלֹא יִהְיֶה} «e não será».

A posição dele dentro da frase é fixa: imediatamente antes do verbo, seja o tempo que for. Em {וְלֹא יִהְיֶה} o {וְ} é a conjunção «e» e o {לֹא} continua colado ao verbo. Não existe em hebraico negação pós-verbal, e não existe partícula depois do verbo para fechar a frase: a posição do {לֹא} é fixa e o contexto vem depois dele.

Uma posição merece atenção: {לֹא} pode cair sobre um **particípio**, e aí a frase deixa de ter verbo. Em Gênesis 3.5 a serpente diz {לֹא יֹדֵעַ}, literalmente «não, sabendo». O que o hebraico fez foi tratar o particípio como substantivo e dar a ele a negação, que é o caminho mais curto para dizer que alguém age sem saber o que faz.

## {אֵין}: a frase que não tem verbo

{אֵין} é diferente. Não nega nada que esteja acontecendo: afirma que **não existe** uma coisa. E porque não tem verbo, ele governa o que vem depois de três maneiras.

Depois dele pode vir um **substantivo**: {אֵין חֵקֶר} «não há busca» (Is 40.28) · {אֵין חָרָב} «não há espada». A frase inteira é uma locução, e o português precisa emprestar um verbo: «não há» ou «não existe».

Depois dele pode vir um **particípio**: {אֵין} + {מִשְׁתַּחֲוֶה} «não há quem se curve». O resultado é «não há ninguém que...», e a negação aqui é mais forte que a de {לֹא}, porque não nega uma ação: nega a existência de quem a faria.

E pode vir {ל} mais um substantivo, que é a fórmula da posse: {אֵין־לוֹ} «ele não tem», {אֵין־לִי} «não tenho». O substantivo fica depois de {ל}, e o hebraico diz literalmente «não há para ele».

## Quando o verbo aparece depois de {אֵין}

Aqui está o problema que trava a leitura bíblica, e ele merece ser dito com todas as suas letras: **em hebraico antigo, {אֵין} não é seguido de verbo finito**. Os três casos acima são os três casos. A gramática é simples e a prática também.

A exceção são os livros mais recentes. Em Jeremias e em Ezequiel a sequência {אֵין} + verbo aparece com frequência suficiente para não ser erro de escriba, e ali o debate começa. Um lê {אֵין} como ausência de uso comum e traduz «não pode»; outro lê o verbo como se fosse um particípio petrificado e traduz no presente; um terceiro lê os dois juntos como negação enfática e escreve «não de modo algum». As três leituras aparecem nas traduções da mesma frase, e nenhuma delas é erro de tradução.

Por que isso acontece num livro que já tinha resolvido o problema? Porque {אֵין} começou a ser copiado do {אֵין} de Gênesis 1.2, {וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל־פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל־פְּנֵי הַמָּיִם}. Em Gênesis a frase é negativa e substantiva; em Ezequiel ela vira negativa e verbal. O grego ajuda porque tem a palavra que faltava, e por isso o texto parece traduzível demais rápido.

## Grego e hebraico lado a lado

O grego resolve a ausência com o verbo {εἰμί}: escreve {οὐκ ἔστι} «não há» e {οὐκ ἔστιν} «não está». Toda a tradução grega dos Setenta Hebreus vive dessa sobra, e os tradutores chegaram a acrescentar verbos que o hebraico não trazia.

A negação grega também se reparte em duas, como a hebraica: {οὐ} nega o indicativo, {μή} nega o subjuntivo e o imperativo. De um lado {לֹא} e {אַל}, do outro. Mas {οὐκ ἔστι} continua sendo um verbo, e {אֵין} continua sem nenhum. É essa diferença de fundo que se sente quando alguém transita entre um texto e outro e parece que o hebraico está errado.

Um exemplo para fechar: {וְאַתָּה לֹא יָדַעְתָּ} «e tu não sabes», no fim da resposta que Deus dá a Jeremias depois que o profeta clama. O hebraico tem {לֹא} e o verbo {יָדַעְתָּ}, que é um qatal de 2.ª pessoa. Quem traduz literalmente escreve «e tu não soubeste», e a frase muda de sentido: o latim tardio e o português põem o passado no lugar certo, e a ameaça continua sendo ameaça.`),
  vocab: [
    V('לֹא', 'לֹא', 'não (com verbo)'),
    V('אֵין', 'אֵין', 'não há, não existe'),
    V('אֵין־לוֹ', 'אֵין', 'ele não tem'),
    V('אֵין־לִי', 'אֵין', 'não tenho'),
    V('לֹא־תִרְצָח', 'הרג', 'não matarás (Êx 20.13)'),
    V('וְלֹא יִהְיֶה', 'היה', 'e não será'),
    V('לֹא יִיעַף', 'עיף', 'não se cansa (Is 40.28)'),
    V('אֵין חֵקֶר', 'חֵקֶר', 'não há busca (Is 40.28)'),
    V('אֵין חָרָב', 'חָרָב', 'não há espada'),
    V('לֹא יֹדֵעַ', 'ידע', 'não, sabendo (Gn 3.5)'),
    V('אֵין מִשְׁתַּחֲוֶה', 'שׁחה', 'não há quem se curve'),
    V('וְאַתָּה לֹא יָדַעְתָּ', 'ידע', 'e tu não sabes (Jr 33.3)'),
    V('וְהָאָרֶץ הָיְתָה תֹהוּ', 'היה', 'a terra era sem forma (Gn 1.2)'),
    V('לֹא', 'לֹא', 'não (repetido: negação enfática)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase está correta segundo a gramática hebraica?'),
    options: [
      T('{אֵין} + substantivo: «não há...»'),
      T('{אֵין} + verbo finito: é a forma comum nos livros antigos'),
      T('{אֵין} + artigo'),
      T('{אֵין} só pode vir depois do verbo'),
    ],
    answer: 0,
    hint: T('Regra §2: {אֵין} não é seguido de verbo finito em hebraico antigo.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Ligue a negação ao que ela nega.'),
      pairs: [
        { a: '{לֹא} + verbo', b: T('a ação: «não fez»') },
        { a: '{לֹא} + particípio', b: T('a atitude: «não, sabendo»') },
        { a: '{אֵין} + substantivo', b: T('a existência: «não há»') },
        { a: '{אֵין} + {ל} + substantivo', b: T('a posse: «não tem»') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Em {אֵין־לוֹ} «ele não tem», o que {אֵין} nega?'),
      options: [
        T('Um verbo'),
        T('A existência de algo para ele (a posse)'),
        T('Um particípio'),
        T('O passado'),
      ],
      answer: 1,
      hint: T('É {אֵין} + {ל} + {הוּ}: «não há para ele».'),
    },
    {
      kind: 'fill',
      prompt: T('Complete: «אֵין ___» = «não há busca ao seu entendimento» (Is 40.28).'),
      answer: 'חֵקֶר',
      hint: T('Substantivo {חֵקֶר} «busca, procura», sem artigo.'),
    },
    {
      kind: 'choose',
      prompt: T(
        'Por que a construção {אֵין} + verbo é mais frequente em Ezequiel do que em Gênesis?',
      ),
      options: [
        T('Ezequiel usa formas mais tardias, em que a construção se Estendeu'),
        T('Ezequiel tem menos substantivos'),
        T('Ezequiel escreveu em grego'),
        T('É um erro de cópia repetido'),
      ],
      answer: 0,
      hint: T('A construção é rara no hebraico antigo e comum nos livros do exílio.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{לֹא} nega verbo e só aparece imediatamente antes dele: {לֹא־תִרְצָח}, {וְלֹא יִהְיֶה}, {לֹא יִיעַף}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{אֵין} afirma ausência e não tem verbo: em hebraico antigo nunca é seguido de verbo finito, e sim de substantivo, de particípio ou de {ל} + substantivo.',
      ),
    },
    {
      n: '3',
      text: T('{לֹא} + particípio transforma a frase em locução: {לֹא יֹדֵעַ} «não, sabendo» (Gn 3.5).'),
    },
    { n: '4', text: T('{אֵין} + {ל} + substantivo é a fórmula da posse: {אֵין־לוֹ} «ele não tem».') },
    {
      n: '5',
      text: T(
        'O grego tem {οὐκ ἔστι}, um verbo existencial de verdade; o hebraico tem {אֵין}, que é ausência sem verbo. É a diferença que faz o grego parecer traduzível demais rápido.',
      ),
    },
  ],
  notes: [
    {
      label: T('Exegese:'),
      text: T(
        'Em Ezequiel, {אֵין} + verbo tem força de lei. As proibições do capítulo 22 do Livro do Sacerdote têm o modo de falar de quem declara impossível: «não», e não «é proibido». Traduzir por «não se pode» mantém a negação; traduzir por «não pode» pode sugerir falta de capacidade, que é outra coisa. O hebraico forbids, o português descreve.',
      ),
    },
    {
      label: T('Curiosidade:'),
      text: T(
        'O hebraico tardio, o aramaico e o siríaco acabaram criando um verbo existencial para {אֵין}: o aramaico tem {לֵית} «não existe», e o hebraico moderno usa {אֵין} seguido de verbo finito como se fosse verbo. Ou seja, a construção que os tradutores debateram em Ezequiel é exatamente a solução que a língua tomou depois. Quem estuda o resultado através da história vai ver o texto antigo ganhar a palavra que lhe faltava.',
      ),
    },
  ],
  examples: [
    { text: '{לֹא־תִרְצָח}', gloss: T('não matarás — {לֹא} + futuro (Êx 20.13)') },
    { text: '{לֹא הָלַךְ}', gloss: T('não andou — {לֹא} + qatal (Sl 1.1)') },
    { text: '{וְלֹא יִהְיֶה}', gloss: T('e não será — {וְ} + {לֹא} + yiqtol') },
    { text: '{לֹא יִיעַף}', gloss: T('não se cansa — {לֹא} + yiqtol (Is 40.28)') },
    { text: '{לֹא יֹדֵעַ}', gloss: T('não, sabendo — negação sobre particípio (Gn 3.5)') },
    { text: '{אֵין חֵקֶר}', gloss: T('não há busca — {אֵין} + substantivo (Is 40.28)') },
    { text: '{אֵין־לוֹ}', gloss: T('ele não tem — {אֵין} + {ל} + sufixo') },
    { text: '{אֵין מִשְׁתַּחֲוֶה}', gloss: T('não há quem se curve — {אֵין} + particípio') },
    {
      text: '{וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ}',
      gloss: T('a terra era sem forma e vazia (Gn 1.2) — frase substantiva'),
    },
    { text: '{וְאַתָּה לֹא יָדַעְתָּ}', gloss: T('e tu não sabes (Jr 33.3) — {לֹא} + qatal') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — As quatro posições de {לֹא}'),
      head: [T('O que vem depois'), T('Tempo'), T('Exemplo'), T('Glosa')],
      rows: [
        [T('qatal'), T('passado ou presente'), '{לֹא הָלַךְ}', T('não andou / não anda')],
        [T('yiqtol'), T('futuro'), '{לֹא יִיעַף}', T('não se cansa (Is 40.28)')],
        [T('wayyiqtol com {וְ}'), T('narrativa'), '{וְלֹא יִהְיֶה}', T('e não será')],
        [T('particípio'), T('presente locutivo'), '{לֹא יֹדֵעַ}', T('não, sabendo (Gn 3.5)')],
      ],
    },
    {
      caption: T('Tabela 2 — O que pode vir depois de {אֵין}'),
      head: [T('Categoria'), T('Resultado'), T('Exemplo'), T('Tradução natural')],
      rows: [
        [T('substantivo'), T('ausência de coisa'), '{אֵין חֵקֶר}', T('não há busca')],
        [T('particípio'), T('ausência de agente'), '{אֵין מִשְׁתַּחֲוֶה}', T('não há quem se curve')],
        [T('{ל} + substantivo'), T('ausência de posse'), '{אֵין־לוֹ}', T('ele não tem')],
        [
          T('verbo finito'),
          T('construção tardia, discutida'),
          '—',
          T('leitura múltipla nos livros do exílio'),
        ],
      ],
    },
    {
      caption: T('Tabela 3 — Grego e hebraico: as duas negações'),
      head: [T('Função'), T('Grego'), T('Hebraico'), T('Exemplo paralelo')],
      rows: [
        [T('negar o indicativo'), '{οὐ}', '{לֹא}', '{לֹא־תִרְצָח} / {οὐ φονεύσεις}'],
        [T('negar o subjuntivo e o imperativo'), '{μή}', '{אַל}', '{אַל־תִּירָא} / {μὴ φοβηθῇς}'],
        [
          T('afirmar ausência'),
          '{οὐκ ἔστι}',
          '{אֵין} (sem verbo)',
          '{אֵין חֵקֶר} / {οὐκ ἔστιν ἐρεύνημα}',
        ],
        [T('origem'), 'Latin {sunt}', '—', T('o hebraico nunca herdou verbo existencial')],
      ],
    },
  ],
};
