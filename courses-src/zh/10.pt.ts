import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  section: T('Verbo'),
  title: T('Negação: {不} e {没}'),
  subtitle: T(
    'Duas palavras para dizer "não", e a escolha entre elas mostra o que se está negando',
  ),
  body: C(`
## A posição da negação

Em português o "não" vem antes do verbo: "eu **não** comi". Em Mandarin a partícula também vem antes, colada nele: {wǒ méi chī}, "eu não comi".

Quem traduz por correspondência palavra a palavra escreve {wǒ chī bù}, e o Mandarin não tem lugar para esse {bù} depois do verbo. A regra vale para {bù} e para {méi} igualmente.

São partículas, não palavras com sentido próprio. Nem {wǒ bù} nem {bù} quer dizer alguma coisa sozinhos.

## {bù} e {méi}: o que separa as duas

A diferença é o tempo.

- **{bù}** nega presente e futuro: {wǒ bù chī}, "eu não como"; {tā bù shì péngyou}, "ele não é meu amigo".
- **{méi}** nega passado e existência: {wǒ méi qù}, "eu não fui"; {zhèlǐ méi rén}, "aqui não há ninguém".

Em português o "não" é a mesma palavra nas duas situações. Em Mandarin são duas, e a escolha segue o tempo do verbo, não o do contexto. Por isso {tā bù hǎo}, "ele não é bom", e {tā méi lái}, "ele não veio", não são a mesma construção com as palavras trocadas.

Usar {bù} para um evento passado não é erro que o ouvinte perceba na hora. Soa a alguém que ainda está aprendendo. O inverso falha mais alto: {wǒ méi chī} no sentido de "eu não estou comendo" é aceitável, mas "eu não sou filho" não tem forma nenhuma.

## A regra

**Verbo ou substantivo: {bù}. Adjetivo, quase sempre: {bù}. Verbo ou substantivo no passado: {méi}.**

O que decide é o que vem depois da partícula. Se o verbo tem marca de passado, {méi}; se não tem, {bù}.

## A negação na Bíblia

O grego é negativo com frequência, e é aqui que o tradutor escorrega. A {和合本} mantém {bù} e {méi} separadas de modo constante, e essa consistência deixa ver quando está traduzindo e quando está adaptando.

Em 1 João 1:9, {rúguǒ wǒmen zì chēng wǒmen méi zuò zuì}, "se nos declararmos que não cometemos pecado". A construção é {méi zuò}: {méi} sobre um verbo, e {zuò}, "cometer". O grego tem aoristo nesse ponto, e o {méi} é o que Mandarin diz onde o grego marcava o tempo.

O erro comum na leitura vai do outro lado. Tratar {bù} como se negasse o passado e concluir que aquilo aconteceu: em um versículo sobre o que ainda vai acontecer, quem lê assim entende o contrário do que está escrito. Presente e passado são palavras diferentes em Mandarin, e a negação segue o verbo.`),
  vocab: [
    V('bù', '不', 'não (antes de verbo ou adjetivo; presente e futuro)'),
    V('méi', '没', 'não (antes de verbo ou substantivo; passado e existência)'),
    V('shì', '是', 'ser (shì)'),
    V('yǒu', '有', 'ter, haver (yǒu)'),
    V('qù', '去', 'ir (qù)'),
    V('lái', '来', 'vir (lái)'),
    V('hǎo', '好', 'bom (hǎo)'),
    V('rén', '人', 'pessoa (rén)'),
  ],
  rules: [
    { n: '1', text: T('A negação vem antes do verbo: {wǒ bù chī}, nunca "wǒ chī bù".') },
    { n: '2', text: T('{bù} nega presente e futuro; {méi} nega passado e existência.') },
    { n: '3', text: T('Verbo ou substantivo no passado pede {méi}: {wǒ méi qù}.') },
    { n: '4', text: T('{bù} antes de adjetivo é a regra: {tā bù hǎo}.') },
    { n: '5', text: T('{bù} e {méi} nunca aparecem sozinhos: são partículas.') },
  ],
  notes: [
    {
      label: T('O "ser" do Mandarin nega sem mudar de posição'),
      text: T(
        '{shì} nega-se com {bù} como qualquer verbo: {tā bù shì}, "ele não é". Não há inversão, e {shì bù} não existe.',
      ),
    },
    {
      label: T('A confusão que todo mundo comete'),
      text: T(
        '{wǒ méi} é "não tenho", com {méi} sobre {yǒu}, o verbo de ter. {wǒ bù yǒu} significa o mesmo e soa raro, porque {yǒu} ali não é o verbo: é o substantivo "posse".',
      ),
    },
  ],
  examples: [
    { text: '我不吃', gloss: T('wǒ bù chī — eu não como (presente)') },
    { text: '我沒去', gloss: T('wǒ méi qù — eu não fui (passado)') },
    { text: '這裡沒人', gloss: T('zhèlǐ méi rén — aqui não há ninguém') },
    { text: '他不是我朋友', gloss: T('tā bù shì péngyou — ele não é meu amigo') },
  ],
  tables: [
    {
      caption: T('A mesma negação em quatro tempos'),
      head: [T('Frase'), T('Partícula'), T('Tempo negado'), T('Português')],
      rows: [
        [T('{wǒ} {bù} {chī}'), T('{bù}'), T('presente'), T('eu não como')],
        [T('{wǒ} {méi} {qù}'), T('{méi}'), T('passado'), T('eu não fui')],
        [T('{wǒ} {bù} {qù}'), T('{bù}'), T('futuro'), T('eu não irei')],
        [T('{zhèlǐ} {méi} {rén}'), T('{méi}'), T('existência'), T('aqui não há ninguém')],
      ],
    },
    {
      caption: T('O mesmo verbo com as duas partículas'),
      head: [T('Frase'), T('Significado'), T('Tempo')],
      rows: [
        [T('{wǒ} {bù} {chī}'), T('não como, não vou comer'), T('presente/futuro')],
        [T('{wǒ} {méi} {chī}'), T('não comi'), T('passado')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {我沒去}, qual partícula nega o passado?'),
    options: [T('{不}'), T('{沒}'), T('{是}'), T('{去}')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "ele não é meu amigo" com a partícula: 他____我朋友'),
      answer: '不',
    },
    {
      kind: 'match',
      prompt: T('Ligue a partícula ao que ela nega'),
      pairs: [
        { a: T('{不}'), b: T('presente e futuro') },
        { a: T('{沒}'), b: T('passado e existência') },
        { a: T('{是}'), b: T('verbo "ser", não nega') },
        { a: T('{有}'), b: T('verbo "ter", cai na regra do {沒}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Para dizer "aqui não há ninguém", qual forma?'),
      options: [T('{這裡不人}'), T('{這裡沒人}'), T('{這裡人沒}'), T('{沒這裡人}')],
      answer: 1,
    },
  ],
};
