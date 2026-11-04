import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  section: T('Adjetivo'),
  title: T('Superlativo e excesso: {太} e {最}'),
  subtitle: T(
    '{太} vem antes do adjetivo e diz "demais"; {最} diz "o mais". Um avalia, o outro compara',
  ),
  body: C(`
## {太}: o "demais" que vem antes do adjetivo

{太} (tài) é um advérbio de grau, e a posição dele é antes do adjetivo: {tài guì le}, "está caro demais". Nunca depois: {guì tài} não existe, do mesmo modo que em português "caro demais" e não "demais caro".

Sozinho, {太} já significa "demais": {tài hǎo} é "bom demais", sem mais nada. Com {了}, ele vira o padrão mais comum de todos os que produzem grau: {tài guì le}, "está caro demais". O que muda não é a intensidade, é o tempo. {tài guì} julga um preço, um estado que já existe; {tài guì le} diz que ficou, que subiu, que mudou. É a mesma partícula {了} de sempre.

Um cuidado de sintaxe, porque {tài} e {le} não são do mesmo tipo de palavra: {太貴了} é um adjetivo com {太} e {了}; {他太累了} é o verbo {累}, "estar cansado", com {太} e {了}. O {了} fecha a mesma coisa nos dois casos, uma avaliação que agora é resultado.

## {最}: o superlativo, e também o "mais"

{最} (zuì) também vem **antes** do adjetivo: {zuì hǎo de}, "o melhor". A posição é a mesma de {太}; o que muda é a conta que se está fazendo. {最} compara um conjunto: este é o melhor de todos, o mais caro da prateleira, o mais alto da sala. Precisa de {的} ou de um substantivo depois dele, porque superlativo sem termo de comparação fica solto: {zuì hǎo} ou {zuì hǎo de shū}, "o melhor dos livros", nunca {zuì hǎo de} sozinho.

O {的} (de) é a marca do superlativo do mesmo jeito que o {了} é a marca da mudança: {zuì guì de} é um sintagma fechado, "o mais caro", e {了} raramente entra ali. {zuì guì le} existe, mas é raro, e quando aparece não é superlativo que virou mudança; é "passou a ser o mais caro", o que é outra coisa.

## {太} avalia, {最} compara

É a distinção que o leitor intermediário esquece, e é a mesma que o português faz com "demais" e "mais".

{tài yǒuqù}, "interessante demais", quase sempre traz a crítica do ouvinte junto. {zuì yǒuqù}, "o mais interessante", não: é um elogio, ou uma escolha. É por isso que {tài} resiste a {bù}: {bù tài yǒuqù} é "não muito interessante", o oposto do superlativo e uma atenuação comum. {zuì}, esse, não admite negação, porque não há "não o mais" que signifique alguma coisa.

A carga crítica de {tài} aparece melhor num contexto de limite: {nǐ bù néng tài lèi}, "você não pode estar exausto demais". O sentido é "não pode passar do ponto", e a proibição é sobre excesso, não sobre comparação. {nǐ bù néng zuì lèi} significaria outra coisa, e errada: significaria "você não pode ser o mais cansado", o que é absurdo.

| Forma | Posição | Significado | O que carrega |
| --- | --- | --- | --- |
| {tài guì} | {tài} + adjetivo | "caro demais" | avaliação, em geral crítica |
| {tài guì le} | {tài} + adjetivo + {le} | "ficou caro demais" | avaliação + mudança |
| {zuì guì} | {zuì} + adjetivo | "o mais caro" | comparação, superlativo |
| {zuì hǎo de} | {zuì} + adjetivo + {de} | "o melhor" | superlativo fechado |
| {bù tài yǒuqù} | {bù} + {tài} + adjetivo | "não muito interessante" | atenuação |

## A escala da intensidade

{太} não é o degrau mais alto da intensidade: é um degrau do meio, e ele se mede contra os outros. Com {guì}, "caro", a ordem é {hěn guì}, "muito caro", {tài guì}, "caro demais", {fēicháng guì}, "extremamente caro", {jíqí guì} ou {tèbié guì}, "excepcionalmente caro". Todos antes do adjetivo, todos com a mesma posição: o Mandarin estratifica a intensidade dispondo as palavras em ordem, não flexionando o adjetivo como o português faz.

A outra ponta da mesma ideia, com {guì}, vem do {de} de modo: {tài guì le} é "muito caro" como **mudança**, {guì de hěn} é "muito caro" como **estado** que continua. Um {了}, um {de}: a diferença é o que muda, não a intensidade.

Na Escritura, os dois aparecem onde o grego escolheu os intensivos. Em João 3:16, a {和合本} tem {Shàngdì ài shìrén}, "Deus amou o mundo", e o {ài}, "amar", não leva {太} nem {最}: é amor simples, sem grau. Em João 3:30, o Mandarin tem {tā bìxū zēngzhǎng}, "ele deve crescer", e {bìxū} é {bì}, "deve", mais {xū}, "necessário": obrigação, não superlativo. O oposto do versículo, {què yào jiǎn xiǎo}, "mas eu devo diminuir", também não é {zuì}: os dois lados são ações, não graus. Quem lê {zuì} onde a {和合本} não põe {最} está traduzindo o hábito do mandarín, não o grego.`),
  vocab: [
    V('tài', '太', 'demais, excessivamente (antes do adjetivo)'),
    V('zuì', '最', 'o mais, superlativo (antes do adjetivo)'),
    V('guì', '贵', 'caro (guì)'),
    V('lèi', '累', 'cansado, exausto (lèi)'),
    V('hǎo', '好', 'bom (hǎo)'),
    V('de', '的', 'partícula que fecha o superlativo (de)'),
    V('le', '了', 'partícula de aspecto: mudança (le)'),
    V('hěn', '很', 'muito, grau neutro (hěn)'),
  ],
  rules: [
    {
      n: '1',
      text: T('{tài} e {zuì} vêm antes do adjetivo: {tài guì le}, {zuì hǎo de}. Nunca depois.'),
    },
    { n: '2', text: T('{tài} sozinho já é "demais": {tài guì} é estado, {tài guì le} é mudança.') },
    { n: '3', text: T('{zuì} é superlativo e pede {de} ou um substantivo: {zuì hǎo de shū}.') },
    {
      n: '4',
      text: T('{tài} admite {bù} ({bù tài yǒuqù} = "não muito"); {zuì} não admite negação.'),
    },
    {
      n: '5',
      text: T(
        'A escala é {hěn} < {tài} < {fēicháng} < {jíqí} ou {tèbié} — todos antes do adjetivo.',
      ),
    },
  ],
  notes: [
    {
      label: T('{太} é avaliação, não intensidade'),
      text: T(
        '{tài} traz quase sempre uma crítica junto — {tài guì} é caro demais, {tài lèi} é exausto demais. O superlativo {zuì} avalia o mesmo adjetivo sem crítica: {zuì guì} é só o mais caro da lista.',
      ),
    },
    {
      label: T('{太}...{了} e {得} são os dois "muito"'),
      text: T(
        '{tài guì le} é "muito caro" como mudança (lição 10); {guì de hěn} é "muito caro" como estado (lição 14). {了} marca o que mudou, {得} marca o que continua.',
      ),
    },
  ],
  examples: [
    { text: '太貴了', gloss: T('tài guì le — está caro demais') },
    { text: '最好的', gloss: T('zuì hǎo de — o melhor') },
    { text: '你不能太累', gloss: T('nǐ bù néng tài lèi — você não pode estar exausto demais') },
    { text: '最有意思', gloss: T('zuì yǒu yìsi — o mais interessante') },
  ],
  tables: [
    {
      caption: T('Excesso ou superlativo?'),
      head: [T('Palavra'), T('O que faz'), T('Português')],
      rows: [
        [T('{太}'), T('avalia um excesso, geralmente com crítica'), T('demais')],
        [T('{最}'), T('compara um conjunto e escolhe um'), T('o mais')],
        [T('{很}'), T('grau neutro, sem carga'), T('muito')],
        [T('{非常}'), T('grau alto, neutro'), T('muito, extremamente')],
      ],
    },
    {
      caption: T('A escala da intensidade com 贵'),
      head: [T('Grau'), T('Frase'), T('Português')],
      rows: [
        [T('neutro'), T('{hěn guì}'), T('muito caro')],
        [T('excesso'), T('{tài guì}'), T('caro demais')],
        [T('muito alto'), T('{fēicháng guì}'), T('extremamente caro')],
        [T('máximo'), T('{jíqí guì}'), T('exceptionally caro')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {他太累了}, o que {太} está dizendo?'),
    options: [
      T('que ele é o mais cansado de todos'),
      T('que ele está exausto demais'),
      T('que ele está um pouco cansado'),
      T('que ele está cansando agora'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "o melhor" com a palavra do superlativo: ____好的'),
      answer: '最',
    },
    {
      kind: 'match',
      prompt: T('Ligue cada palavra ao que ela faz'),
      pairs: [
        { a: T('{太}'), b: T('excesso: demais, antes do adjetivo') },
        { a: T('{最}'), b: T('superlativo: o mais') },
        { a: T('{很}'), b: T('grau neutro: muito') },
        { a: T('{了}'), b: T('partícula de aspecto: mudança') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Para dizer "o mais interessante", qual forma?'),
      options: [T('{太有意思}'), T('{最有趣}'), T('{很有趣}'), T('{太最有趣}')],
      answer: 1,
    },
  ],
};
