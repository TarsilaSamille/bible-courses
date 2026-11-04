import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  section: T('Verbo'),
  title: T('Os verbos essenciais'),
  subtitle: T('{chī}, {shuō}, {lái}, {qù}, {yǒu}, {shì}: os verbos que sustentam quase toda frase'),
  body: C(`## O verbo que não muda

O verbo em Mandarin não muda para dizer quem fala nem quando. {chī} é «comer» na primeira pessoa e na terceira, ontem e amanhã: {wǒ chī}, {tā chī}, {zuótiān wǒ chī}. O que muda de sentido não está no verbo, está na partícula que vem depois dele.

Isso muda o que «verbo essencial» quer dizer. Em português, essencial é o verbo que se conjuga em toda frase. Em Mandarin, é o que carrega o sentido e recebe as partículas: {shì} ser, {yǒu} ter e haver, {shuō} dizer, {tīng} ouvir, {kàn} ver, {lái} vir, {qù} ir, {chī} comer, {hē} beber, {zuò} fazer, {gěi} dar, {zhīdào} saber, {xiǎng} pensar, {shuì} dormir, {dú} ler, {xiě} escrever, {zǒu} andar cobrem quase tudo o que se diz num capítulo de Evangelho.

## {shì} e {yǒu}: os dois que o português separa mal

{shì} liga dois nomes: {wǒ shì xuésheng}, «eu sou estudante». Não diz existência. A existência é de {yǒu}: {yǒu yī běn shū}, «há um livro», e {wǒ yǒu shū}, «tenho livro».

O português reparte o campo em quatro verbos, «ser», «estar», «haver» e «ter», e o Mandarin em dois. Onde o português diz «há», o Mandarin diz {yǒu}; onde diz «é», diz {shì}. Quem traduz «Deus é» por {yǒu} escreve «há Deus», e a frase deixa de ser uma identificação.

O negativo separa os dois de novo: {shì} nega com {bù}, e {yǒu} nega com {méi}, nunca com {bù}: {bù shì}, {méi yǒu}.

## O que vem depois do verbo

Como o verbo não flexiona, o aspecto vem de três partículas que ficam atrás dele. {le} fecha a situação: {wǒ chī le}, «comi». {guo} marca a experiência: {wǒ chī guo}, «já comi alguma vez». {zhe} marca o que continua: {tā kàn zhe shū}, «ele está lendo».

As três ocupam o mesmo lugar e não se misturam. O verbo {chī} é o mesmo nos três casos, e é a partícula que diz se a ação acabou, se já aconteceu alguma vez ou se ainda corre.

## Na Bíblia

João 1:1 abre com {yǒu}: {tàichū yǒu dào}, «no princípio havia o Verbo». O grego diz {ἦν ὁ λόγος}, e {ἦν} é existência, não identificação. O Mandarin escolhe {yǒu} e não {shì}, e a escolha é a mesma que separa «há» de «é».

Marcos 4:39 traz duas ordens com a partícula do acabado: {zhù le ba! jìng le ba!}, «cala-te! aquieta-te!». O {le} numa ordem não diz que ela aconteceu: diz que o que se manda é que a coisa esteja terminada. O mesmo versículo fecha com {píngjìng le}, «ficou calmo», e é o mesmo {le} dizendo que a situação está completa.`),
  vocab: [
    V('chī', '吃', 'comer'),
    V('hē', '喝', 'beber'),
    V('shuō', '说', 'dizer'),
    V('tīng', '听', 'ouvir'),
    V('kàn', '看', 'ver'),
    V('lái', '来', 'vir'),
    V('qù', '去', 'ir'),
    V('shì', '是', 'ser'),
    V('yǒu', '有', 'ter, haver'),
    V('zuò', '做', 'fazer'),
    V('gěi', '给', 'dar'),
    V('zhīdào', '知道', 'saber'),
    V('xiǎng', '想', 'pensar, querer'),
    V('shuì', '睡', 'dormir'),
    V('dú', '读', 'ler'),
    V('xiě', '写', 'escrever'),
    V('zǒu', '走', 'andar'),
    V('ài', '爱', 'amar'),
    V('le', '了', 'partícula do acabado'),
  ],
  rules: [
    {
      n: '§1',
      text: T('O verbo não flexiona: {wǒ chī}, {tā chī} e {zuótiān wǒ chī} têm a mesma forma.'),
    },
    {
      n: '§2',
      text: T(
        '{shì} liga dois nomes; a existência é de {yǒu}. {wǒ shì xuésheng} «sou estudante», {yǒu shū} «há livro».',
      ),
    },
    {
      n: '§3',
      text: T(
        '{yǒu} nega com {méi}, nunca com {bù}: {méi yǒu}, e não {bù yǒu}. {shì} nega com {bù}: {bù shì}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'O aspecto vem depois do verbo: {le} fecha, {guo} marca a experiência, {zhe} marca o que continua.',
      ),
    },
    {
      n: '§5',
      text: T('Numa ordem, {le} diz que o mandado deve estar terminado: {zhù le ba}, «cala-te».'),
    },
  ],
  notes: [
    {
      label: T('O yǒu que não é «ter»'),
      text: T(
        '{yǒu} cobre posse e existência ao mesmo tempo: {wǒ yǒu shū} «tenho livro» e {yǒu shū} «há livro» usam o mesmo verbo. O português separa «ter» de «haver» e obriga a escolher sujeito; o Mandarin não.',
      ),
    },
    {
      label: T('O shì que não é cópula de adjetivo'),
      text: T(
        '{shì} não entra antes de adjetivo: «ele é alto» é {tā gāo}, sem {shì}. Com {shì} a frase vira identificação: {tā shì gāo} só se lê se {gāo} for um nome, como o sobrenome Gao.',
      ),
    },
  ],
  examples: [
    { text: '起初有道', gloss: T('Jo 1:1 — {有} é existência: no início havia o Verbo.') },
    { text: '神愛世人', gloss: T('Jo 3:16 — {愛} sem marca de tempo: «Deus amou o mundo».') },
    { text: '住口吧! 靜了吧!', gloss: T('Mc 4:39 — {了} na ordem: que esteja terminado.') },
    { text: '我吃了', gloss: T('{了} fecha a situação: comi.') },
    { text: '我吃過', gloss: T('{過} marca a experiência: já comi alguma vez.') },
    { text: '他看著這本書', gloss: T('{著} marca o que continua: ele está lendo.') },
    { text: '我是學生', gloss: T('{是} liga dois nomes.') },
    { text: '有一本書', gloss: T('{有} diz existência: há um livro.') },
    { text: '沒有', gloss: T('{有} nega com {沒有}, não com {不}.') },
  ],
  tables: [
    {
      caption: T('Os essenciais e o que recebem'),
      head: [T('Verbo'), T('Sentido'), T('Negativo'), T('Exemplo')],
      rows: [
        [T('{chī}'), T('comer'), '{bù chī}', '{wǒ chī le}'],
        [T('{shuō}'), T('dizer'), '{bù shuō}', '{tā shuō le}'],
        [T('{kàn}'), T('ver'), '{bù kàn}', '{kàn zhe}'],
        [T('{lái}'), T('vir'), '{bù lái}', '{lái le}'],
        [T('{shì}'), T('ser'), '{bù shì}', '{wǒ shì}'],
        [T('{yǒu}'), T('ter, haver'), '{méi yǒu}', '{yǒu shū}'],
        [T('{qù}'), T('ir'), '{bù qù}', '{qù guo}'],
      ],
    },
    {
      caption: T('As três partículas de aspecto'),
      head: [T('Partícula'), T('Sentido'), T('Exemplo')],
      rows: [
        [T('{le}'), T('situação fechada'), '{wǒ chī le}'],
        [T('{guo}'), T('experiência'), '{wǒ chī guo}'],
        [T('{zhe}'), T('em curso'), '{tā kàn zhe shū}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {tàichū yǒu dào}, qual verbo o Mandarin escolhe para {ἦν}?'),
    options: [T('{shì}'), T('{yǒu}'), T('{lái}'), T('{zuò}')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete «{zhù ___ ba}» com a partícula que fecha a ordem em Mc 4:39.'),
      answer: 'le',
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo ao seu negativo.'),
      pairs: [
        { a: T('{shì}'), b: T('{bù shì}') },
        { a: T('{yǒu}'), b: T('{méi yǒu}') },
        { a: T('{chī}'), b: T('{bù chī}') },
        { a: T('{lái}'), b: T('{bù lái}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual partícula marca «já aconteceu alguma vez»?'),
      options: [T('{le}'), T('{guo}'), T('{zhe}'), T('{ba}')],
      answer: 1,
    },
  ],
};
