import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  section: T('Números'),
  title: T('Numerais: {一}, {兩}, {幾} e a posição do classificador'),
  subtitle: T(
    'O número vai antes do classificador, e "dois" tem duas formas que não são intercambiáveis',
  ),
  body: C(`
## Numeral, classificador, substantivo

Em {liǎng} {běn} {shū}, dois livros, o número {liǎng} diz *quanto*, o classificador {běn} diz *o quê*, e {shū} é o substantivo. Duas coisas continuam em aberto: como o numeral muda de som e onde ele fica.

A primeira é o comportamento do numeral. Um, dois e três não são palavras estáveis: {yī} muda de som conforme o que vem depois, e "dois" tem duas formas que se confundem em quase todo contexto e divergem justamente onde o contexto é preciso.

A segunda é a posição. O português diz "três livros", substantivo e depois numeral. O Mandarin diz {sān} {běn} {shū}, numeral, classificador, substantivo. A ordem é fixa, e inverter é errado, não informal: {shū} {sān} {běn} não é Mandarin.

## Um muda de som: {一} e a sandhi tonal

{一} é o numeral mais frequente da língua e o menos previsível. A sílaba é lida {yī} quando vem sozinha ou em posição neutra. Antes de outra sílaba o tom muda, para não deixar dois tons uninais colados. A regra cabe numa linha:

**{一} antes de um tom 4 vira {yí}, 2º tom. Antes de tom 1, 2 ou 3 vira {yì}, 4º tom.**

Os dois exemplos mais comuns são o reverso um do outro. {yì} {tiān}, um dia: {tiān} é tom 1, então {一} desce para 4º tom. {yí} {gè}, uma coisa: {gè} é tom 4, então {一} sobe para 2º tom. Grava-se {yī}, pronuncia-se {yì} ou {yí}.

O que importa para a leitura é que o caractere nunca muda. Nenhum manuscrito escreve {yí} onde outro escreve {yì}: a sandhi é um fenômeno da fala, não da escrita. Quem lê nunca tem que decidir; quem fala decide trinta vezes por página.

## "Dois" tem duas formas: {兩} e {二}

Este é o ponto que quase nenhum curso de Mandarin explica direito, e que qualquer dicionário de frequências faz parecer arbitrário.

**{兩} ({liǎng}) é a forma do substantivo: aparece quando há um classificador à frente. {二} ({èr}) é a forma do número: aparece quando o substantivo já vem com o seu próprio classificador implícito, ou quando é data, telefone, ou posição numa lista.**

- {liǎng} {běn} {shū}, dois livros. Classificador {běn} presente: {兩}.
- {èr} {yuè}, fevereiro. {月} é o mês e já é o classificador: {二}.
- {dì} {èr}, segundo. Numeração: {二}.
- {èr} {shí} {sān}, vinte e três. Número composto: {二}.

A regra prática cabe num teste: se você pode apontar o classificador na frase, escreva {兩}. Se não há classificador nenhum, escreva {二}. Um leitor fluente não pensa na regra, mas erra de formas distintas nos dois lados, e as duas são comuns na Bíblia.

A contagem básica é {yī} {èr} {sān} {sì} {wǔ} {liù} {qī} {bā} {jiǔ} {shí}. Depois dela o sistema fecha: {十} é multiplicador, {shí} {yī} onze, {èr} {shí} vinte, {sān} {shí} {liù} trinta e seis.

O "e meio" é {半} ({bàn}), e ele vai depois do substantivo, como {er}: {shí} {wǔ} {gè} {bàn}, quinze e meio. Não {bàn} {shí} {wǔ} {gè}.

## {幾}, a posição, e a omissão do classificador

{幾} ({jǐ}) é "quantos" na pergunta e "alguns" na resposta. {nǐ} {yǒu} {jǐ} {běn} {shū}?, quantos livros você tem? É a pergunta mais simples da língua e já traz o numeral, o classificador e o substantivo, nesta ordem. Na resposta, {幾} {běn} significa "alguns livros", sem o {shū}: a elipse é normal porque {běn} já diz tudo.

A ordem se fixa aqui: **numeral, classificador, substantivo.** {sān} {běn} {shū}, três livros. E o classificador pode desaparecer quando o substantivo é abstrato ou quando o contexto já está claro: {sān tiān}, três dias, não {sān tiān} {rìzi}, porque {天} aqui já é o substantivo e carrega o seu classificador. A omissão é natural, e é por isso que o leitor atento precisa saber contar quantos classificadores foram deixados de fora.

O ganho bíblico está na posição, e é imediato. João 6:9, {yǒu} {yí} {gè} {háizi}, havia um menino: numeral {一}, classificador {個}, substantivo {孩子}, exatamente nesta ordem, com o {一} sandhi para {yí} porque {gè} é tom 4. Mateus 2:1, {yuē} {zài} {nà} {xiē} {rìzi}, por volta daqueles dias: {約} é "cerca de", e o substantivo {日子} leva {些}, um classificador de grupos, "aqueles dias". Mateus 14:21, {wǔ} {qiān}, cinco mil: {qiān} é o multiplicador de mil e já é a unidade. Quando a {和合本} escreve {五千} {人} mais adiante, é porque ali o substantivo voltou; a cifra, sozinha, dispensa o {個}.`),
  vocab: [
    V('一', '一', 'um (yī; muda de tom: yí, yì)'),
    V('二', '二', 'dois como número, em datas e séries (èr)'),
    V('兩', '两', 'dois antes de classificador (liǎng)'),
    V('幾', '几', 'quantos (pergunta) / alguns (resposta) (jǐ)'),
    V('個', '个', 'classificador genérico (gè)'),
    V('半', '半', 'meio; vem depois do substantivo (bàn)'),
    V('天', '天', 'dia; também classificador para dias (tiān)'),
    V('孩子', '孩子', 'menino, criança (háizi)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A ordem é fixa: numeral, classificador, substantivo. {sān běn shū}, nunca {shū sān běn}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{兩} quando há classificador à frente; {二} quando não há — datas, {第二} e números compostos.',
      ),
    },
    {
      n: '3',
      text: T(
        '{一} antes de tom 4 lê-se {yí} ({一個}); antes de tom 1, 2 ou 3, {yì} ({一天}). O caractere não muda.',
      ),
    },
    { n: '4', text: T('{幾} pergunta "quantos" e responde "alguns": {jǐ běn shū}.') },
    { n: '5', text: T('{半} vai depois do substantivo: {shí wǔ gè bàn}, não {bàn shí wǔ}.') },
  ],
  notes: [
    {
      label: T('Onde o {兩} falha'),
      text: T(
        '{二} é obrigatório em {二月}, {二月十日} e {第二}. Um {兩} aí soa errado a um ouvinte: o {月} e o {第} já são a unidade e a posição, e não querem classificador.',
      ),
    },
    {
      label: T('Nem todo {兩} é numeral'),
      text: T(
        'Em {兩} às vezes significa "ambos": {liǎng} {gè} {rén} "as duas pessoas", e {兩} isolado é "os dois". Lendo {兩} {běn} {shū} não há dúvida: ali {兩} conta. Mas {兩} {yī} {diǎn} (duas em certo) não conta nada.',
      ),
    },
  ],
  examples: [
    { text: '一個孩子', gloss: T('yí ge háizi — um menino (João 6:9)') },
    { text: '幾本書', gloss: T('jǐ běn shū — quantos livros?') },
    { text: '兩本書', gloss: T('liǎng běn shū — dois livros') },
    { text: '二月', gloss: T('èr yuè — fevereiro') },
  ],
  tables: [
    {
      caption: T('A ordem é fixa e invertida em relação ao português'),
      head: [T('Português'), T('Mandarin'), T('Glosa')],
      rows: [
        [T('livros + dois'), T('{liǎng} {běn} {shū}'), T('dois livros')],
        [T('livros + três'), T('{sān} {běn} {shū}'), T('três livros')],
        [T('meninos + cinco'), T('{wǔ} {gè} {háizi}'), T('cinco meninos')],
        [T('livros + alguns'), T('{jǐ} {běn} {shū}'), T('quantos livros?')],
      ],
    },
    {
      caption: T('Quando usar {兩} e quando usar {二}'),
      head: [T('Forma'), T('Quando aparece'), T('Exemplo')],
      rows: [
        [T('{兩} {liǎng}'), T('com classificador à frente'), T('{liǎng běn shū} dois livros')],
        [T('{兩} {liǎng}'), T('com classificador {個}'), T('{liǎng gè rén} duas pessoas')],
        [T('{二} {èr}'), T('mês e data'), T('{èr yuè} fevereiro')],
        [T('{二} {èr}'), T('posição numa série'), T('{dì èr} segundo')],
        [T('{二} {èr}'), T('número composto acima de 10'), T('{èr shí} vinte')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Para dizer "segundo", qual numeral usa?'),
    options: [T('{兩}'), T('{二}'), T('{幾}'), T('{一}')],
    answer: 1,
    hint: T(
      'É posição numa série, não substantivo com classificador: {第} já ocupa o lugar do classificador.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete "três livros" na ordem certa: ____ 本 书'), answer: '三' },
    {
      kind: 'match',
      prompt: T('Ligue a forma ao uso'),
      pairs: [
        { a: T('{兩 běn shū}'), b: T('dois livros') },
        { a: T('{èr yuè}'), b: T('fevereiro') },
        { a: T('{dì èr}'), b: T('segundo') },
        { a: T('{jǐ běn}'), b: T('quantos livros?') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Quantos classificadores aparecem em {兩本書}?'),
      options: [T('nenhum'), T('um'), T('dois'), T('três')],
      answer: 1,
    },
  ],
};
