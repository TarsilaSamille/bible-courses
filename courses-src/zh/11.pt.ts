import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  section: T('Verbo'),
  title: T('Aspecto: a partícula {了}'),
  subtitle: T('Ela não marca tempo verbal — marca que a situação acabou'),
  body: C(`
## {le} vem depois do verbo

{bù} e {méi} ficam antes do verbo, coladas nele. {le} faz o contrário: {le} vem depois do verbo, e {wǒ chī le} é "eu comi".

O par amarra o que nega com o que fecha: **o que nega entra antes do verbo, o que fecha a situação entra depois dele**. {wǒ méi chī le}, "eu não comi", tem as duas marcas em suas casas, e inverter qualquer uma delas destrói a frase. Uma vez que a negação ocupa a frente e o aspecto ocupa a retaguarda, sobra um meio de frase, e é nesse meio que o tempo e o lugar entram.

## {le} não é tempo verbal

O erro que um falante de português traz consigo é procurar uma conjugação. Em português o passado está dentro do verbo: "comi", "falou", "parti". Em Mandarin o verbo {chī} é o mesmo em todas as situações: {wǒ chī} e {wǒ chī le} usam exatamente a mesma palavra. O que muda é a partícula, e o que ela diz não é "passado": é que a situação, vista inteira, está **completa**.

Por isso o contraste mais honesto é entre as duas formas sem {le}:

- {wǒ chī} — "eu como", e nada mais. Pode ser o que eu faço todo dia, pode ser o que eu faria num cenário qualquer. A ação está no seu curso, sem começo e sem fim marcados.
- {wǒ chī le} — "eu comi", e com isso: a situação acabou. A refeição terminou, o assunto fecha.

Um falante de português traduz {wǒ chī} por "eu comi" quase por reflexo, e perde a informação. O mesmo Mandarin serve para "eu como" e para "eu comi", e quem escolhe entre os dois é o contexto, não o verbo. E o erro contrário é tão comum quanto: escrever {le} em tudo, que é o que produz o Mandarin de quem ainda está aprendendo, uma frase atrás da outra toda completinha.

## Quando {le} não aparece

Nem toda situação fechada leva a partícula. Em {wǒ chīfàn shuìjiào}, "eu como, durmo", não há {le}, e a frase está igualmente completa para o ouvinte.

A regra é o **encadeamento**: quando dois verbos vêm em sequência e o segundo descreve a ação seguinte, claramente ordenada depois da primeira, a marcação do segundo se dispensa. {wǒ chīfàn} e depois {shuìjiào}: a segunda ação já está dizendo que é a seguinte, e o {le} só desperdiçaria. O mesmo vale em {tā lái wǒ qù}.

O critério, na prática, é o da partícula de sequência: quando as ações formam uma cadeia ordenada, o Mandarin deixa a ordenação visível na posição das palavras e dispensa as marcas de fechamento. Quem preenche {le} em cada verbo de uma narração produz algo que ninguém fala.

## {le} depois de um adjetivo

Depois de um adjetivo, {le} muda de assunto: não marca ação, marca **transição**. {wǒ hěn gāoxìng} é "estou contente", estado neutro, sem nada de novo, o mesmo hoje e amanhã. {tā gāoxìng le} é "ele ficou contente": houve um antes em que ele não estava, e agora está. O {le} é a prova de que alguma coisa aconteceu, e a comparação vale porque a mesma palavra e as mesmas quatro sílabas em volta já dizem tudo, e uma delas carrega o evento.

## O {le} na Bíblia

Na Bíblia isso aparece num verbo, e num dos versículos mais conhecidos do livro. João 19:30, na {和合本}, termina com {chéng le}, "está consumado", "foi cumprido". {chéng} é "tornar-se, chegar a ser", e o {le} fecha um processo: a obra está feita. O grego original não tem partícula nenhuma, {τετέλεσται}, e a {和合本} não inventou um tempo verbal que não havia; marcou em Mandarin o que o grego já marcava no verbo, que era perfectivo.

E o mesmo capítulo usa verbo e não substantivo: em João 4:24, {jìngbài}, "adorar", é verbo, com o substantivo {zhǔ}, "Senhor", como objeto. {zhǔ zhī} é literalmente "o que é Adorador". Traduzir {jìngbài} por "culto" ou "adoração" sem verbo apaga a ação. Marcos 1:15 tem {shíjiān dào le}, "o tempo chegou", onde o {le} fecha o verbo {dào} depois de um sujeito que não é a pessoa que fala.`),
  vocab: [
    V('le', '了', 'partícula de aspecto: a situação está completa (depois de verbo ou adjetivo)'),
    V('chī', '吃', 'comer (chī)'),
    V('shuì', '睡', 'dormir (shuì)'),
    V('gāoxìng', '高兴', 'contente (gāoxìng)'),
    V('hěn', '很', 'muito (hěn)'),
    V('chéng', '成', 'tornar-se, completar (chéng)'),
    V('jìngbài', '敬拜', 'adorar (jìngbài)'),
    V('dào', '到', 'chegar (dào)'),
  ],
  rules: [
    { n: '1', text: T('A negação entra antes do verbo e o aspecto depois: {wǒ bù} {chī le}.') },
    {
      n: '2',
      text: T('{le} depois do verbo marca a situação como completa, não um tempo verbal.'),
    },
    {
      n: '3',
      text: T('Entre duas ações encadeadas e ordenadas, {le} não aparece: {wǒ chīfàn shuìjiào}.'),
    },
    { n: '4', text: T('{le} depois de um adjetivo é mudança de estado: {tā gāoxìng le}.') },
    { n: '5', text: T('Sem {le}, o verbo não diz se a situação acabou: {wǒ chī} é aberta.') },
  ],
  notes: [
    {
      label: T('Por que "comi" tem duas sílabas e "como" tem duas'),
      text: T(
        'Em português o passado está na forma do verbo. Em Mandarin o verbo {chī} não muda, e é a partícula que diz que a situação acabou. Procure a flexão no Mandarin e não vai achá-la: o Mandarin não flexiona o verbo no passado.',
      ),
    },
    {
      label: T('A armadilha da sequência'),
      text: T(
        'Preencher {le} em todo verbo de uma narração produz Mandarin que ninguém fala. Em {wǒ chīfàn shuìjiào} a segunda ação já está ordenada depois da primeira, e o {le} só atrapalharia.',
      ),
    },
  ],
  examples: [
    { text: '我吃了', gloss: T('wǒ chī le — eu comi; a situação acabou') },
    { text: '我吃饭 睡觉', gloss: T('wǒ chīfàn shuìjiào — eu como e durmo (sequência, sem {le})') },
    { text: '他高兴了', gloss: T('tā gāoxìng le — ele ficou contente') },
    { text: '成了', gloss: T('chéng le — está consumado, foi cumprido') },
  ],
  tables: [
    {
      caption: T('O mesmo verbo, com e sem a partícula'),
      head: [T('Frase'), T('Leitura'), T('Natureza da situação')],
      rows: [
        [T('{wǒ} {chī}'), T('eu como'), T('aberta: hábito, ação sem começo nem fim marcados')],
        [T('{wǒ} {chī le}'), T('eu comi'), T('fechada: a situação chegou ao fim')],
        [T('{tā} {gāoxìng}'), T('ele está contente'), T('estado neutro, sem novidade')],
        [T('{tā} {gāoxìng le}'), T('ele ficou contente'), T('mudança de estado: houve um antes')],
      ],
    },
    {
      caption: T('Onde a partícula entra, e onde ela não entra'),
      head: [T('Frase'), T('{le} aparece?'), T('Porquê')],
      rows: [
        [T('{wǒ bù} {chī le}'), T('sim'), T('a negação fica na frente, a partícula fecha a frase')],
        [
          T('{wǒ} {méi} {qù le}'),
          T('sim'),
          T('{méi} nega, {le} fecha — as duas marcas em suas casas'),
        ],
        [T('{wǒ} {chīfàn} {shuìjiào}'), T('não'), T('duas ações encadeadas e ordenadas')],
        [T('{shíjiān} {dào le}'), T('sim'), T('{le} fecha o verbo depois de outro sujeito')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {我吃了}, o que a partícula {了} marca?'),
    options: [
      T('que a ação é do passado'),
      T('que a situação está completa'),
      T('que é um hábito'),
      T('que é uma negação'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "ele ficou contente" com a partícula: 他高兴____'),
      answer: '了',
    },
    {
      kind: 'match',
      prompt: T('Ligue a partícula ao que ela faz'),
      pairs: [
        { a: T('{了}'), b: T('fecha a situação, depois do verbo') },
        { a: T('{不}'), b: T('nega, antes do verbo') },
        { a: T('{没}'), b: T('nega o passado, antes do verbo') },
        { a: T('{很}'), b: T('marca grau, antes do adjetivo') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual das frases está correta?'),
      options: [
        T('{我吃饭了 睡觉了}'),
        T('{我吃了饭 睡觉了}'),
        T('{我吃饭 睡觉}'),
        T('{我吃饭 睡觉了}'),
      ],
      answer: 2,
    },
  ],
};
