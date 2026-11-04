import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  section: T('A escrita'),
  title: T('O acento, e por que ele decide o que você lê'),
  subtitle: T('мы e мы: a mesma grafia para nós e para mosca'),
  body: C(`
## O acento é da palavra, não da regra

O acento russo é, na maior parte dos casos, um dado de dicionário. Não se deriva do sufixo, nem do prefixo, nem da terminação, e quem tentar uma regra geral vai errar justamente nas palavras que importam. Há tendências, e elas são reais: a primeira sílaba é mais comum que qualquer outra, e os substantivos em -а e -я costumam receber o acento na última. Tendência não é regra. Cada verbo, cada substantivo e cada adjetivo tem o seu, e ele se aprende junto com a palavra.

Isso tem uma consequência de leitura que nenhuma outra língua do curso produz. Como o acento não é escrito num texto corrido, algumas palavras são ambíguas até você saber qual delas é. Não a palavra ambígua no dicionário: a palavra ambígua na página, sem nada que a desfaça.

## Pares que só o acento separa

**мы é nós e мы é mosca.** As quatro letras são as mesmas e não há sinal. Quem lê decide pelo resto da frase, e é por isso que o contexto, em russo, não é ornamento: ele é o que desambigua a grafia.

O mesmo acontece com уже, que é ainda ou mais estreito conforme o acento caia, e com плачу, que é eu pago ou eu choro. O caso mais interessante para quem lê é звонит: as letras são sempre as mesmas, e o acento decide o aspecto. Com o acento na última sílaba é o presente perfectivo, ele toca agora; com o acento na primeira é o presente imperfectivo, ele toca, e toca sempre.

Ou seja: **o acento não só distingue sentidos, ele distingue o aspecto do verbo.** Nenhum outro sinal na página faz isso.

## O acento que muda de sílaba

Uma família grande de substantivos masculinos tem acento móvel. No nominativo singular o acento está na raiz, em вода́, окно́, дом; nos outros casos ele recua para a primeira sílaba, como em во́ду, о́кна, до́мом. A água que era água-aguda passa a ser água-água, e quando uma preposição entra na frente é ela que fica com o acento, como em на́ руки e по́д руку.

Isso acontece com uma palavra portuguesa e não com a outra. Nós dizemos a água, de água, com a água, e o acento tônico do substantivo desaparece atrás do artigo. Em russo nada desaparece: o acento muda de sílaba, e a mudança aparece na escrita.

O que não se mexe é mais interessante do que o que se mexe. O nominativo singular não muda, porque é a forma que o dicionário ensina. O genitivo singular de um substantivo masculino também não muda, porque o acento é transferido para a preposição. É por isso que о́браз continua com o acento no início em todas as posições.

## Onde o acento não decide

Há um grupo de palavras, umas trezentas, que resistem à regra geral e mantêm o acento na primeira sílaba em todos os casos. O adjetivo до́рогой é uma delas, e o substantivo доро́га não. São a exceção que confirma que a regra existe.

E há a letra que já decide: onde há ё, o acento está marcado na grafia, e não há ambiguidade possível. O versículo de Salmo 118:105 traz Слово Твое, e o Твое tem duas sílabas porque a ё marca a segunda. Se a ё fosse omitida, o mesmo versículo leria duas vezes a mesma palavra, uma acentuada e outra não.

O gancho está em João 1, que usa as duas palavras no mesmo capítulo. **Все чрез Него начало быть** em 1:3, e **И от полноты Его все мы приняли и благодать на благодать** em 1:16. O mesmo мы, a mesma grafia, e nenhum sinal: em 1:16 só pode ser o pronome nós, porque o que recebeu a plenitude foi um grupo de pessoas e não uma mosca. E o все das duas ocorrências significa todos, e não tudo: se o tradutor tivesse escrito всё, o verso diria que o mundo inteiro recebeu, e não é o que está lá.`),
  vocab: [
    V('ударение', 'ударение', 'acento'),
    V('ударный', 'ударный', 'acentuado'),
    V('мы', 'мы', 'nós, ou mosca, conforme o acento'),
    V('уже', 'уже', 'ainda, ou mais estreito'),
    V('плачу', 'платить', 'eu pago, com o acento na última sílaba'),
    V('плачу', 'плакать', 'eu choro, com o acento na primeira'),
    V('звонит', 'звонить', 'ele toca; o acento decide o aspecto'),
    V('вода', 'вода', 'água, com o acento na última sílaba'),
    V('воду', 'вода', 'a água, com o acento no início'),
    V('нога', 'нога', 'perna'),
    V('ногу', 'нога', 'a perna, com o acento no início'),
    V('дом', 'дом', 'casa'),
    V('домом', 'дом', 'com a casa, instrumental com o acento no início'),
    V('на руки', 'рука', 'nas mãos; o acento vai para a preposição'),
    V('дорога', 'дорога', 'estrada, com o acento na última sílaba'),
    V('дорогой', 'дорогой', 'caro; o acento nunca se move'),
  ],
  rules: [
    {
      n: '1',
      text: T('O acento é um dado de dicionário: aprenda com a palavra, não por derivação.'),
    },
    {
      n: '2',
      text: T(
        'Sem acento escrito, algumas palavras são ambíguas: {мы}, {уже}, {плачу}. O contexto é que desambigua.',
      ),
    },
    {
      n: '3',
      text: T(
        'Em {звонит} o acento decide o aspecto, não só o sentido: a última sílaba é perfectivo, a primeira é imperfectivo.',
      ),
    },
    {
      n: '4',
      text: T(
        'Nos substantivos masculinos de raiz em consoante o acento é móvel, e nos casos oblíquos ele recua para a primeira sílaba: {вода}́ mas {во}́{ду}.',
      ),
    },
    {
      n: '5',
      text: T('Onde há {ё} o acento já está marcado na grafia, e não há ambiguidade possível.'),
    },
  ],
  notes: [
    {
      label: T('Por que o acento recua'),
      text: T(
        'O acento de вода́ recua para во́ду porque a flexão é átona: a palavra já não é o centro da frase. E quando uma preposição entra na frente, é ela que recebe o acento, em на́ руки, по́д руку, за́ ногу. Nos dois casos o substantivo fica com a primeira sílaba livre, e é por isso que o acento parece ter ido para a preposição.',
      ),
    },
    {
      label: T('A palavra mais ambígua do capítulo'),
      text: T(
        'Em João 1:16, все мы приняли, o мы só pode ser o pronome. A mosca é uma só, e o verbo приняли é plural. Quem não souber o acento do мы vai tentar ler um substantivo no meio da frase, e a leitura trava. A correção de leitura em russo é: quando duas palavras têm a mesma grafia, o contexto não é uma pista qualquer, é a pista.',
      ),
    },
  ],
  examples: [
    { text: 'мы', gloss: T('nós, com o acento na primeira sílaba') },
    { text: 'мы', gloss: T('mosca, com o acento na segunda') },
    { text: 'воду', gloss: T('a água; o acento recuou para o início') },
    { text: 'вода', gloss: T('água; o acento na última sílaba') },
    { text: 'на руки', gloss: T('nas mãos; o acento passou para a preposição') },
    { text: 'звони́т', gloss: T('ele toca agora; presente perfectivo') },
    { text: 'зво́нит', gloss: T('ele toca, e toca sempre; presente imperfectivo') },
    { text: 'пла́чу', gloss: T('eu choro') },
    { text: 'плачу́', gloss: T('eu pago') },
    { text: 'Все чрез Него начало быть', gloss: T('Tudo veio a ser por meio dele (Jo 1:3)') },
  ],
  tables: [
    {
      caption: T('A mesma grafia, duas leituras'),
      head: [T('Palavra'), T('Primeira leitura'), T('Segunda leitura')],
      rows: [
        [T('мы'), T('nós, com o acento na primeira sílaba'), T('mosca, com o acento na segunda')],
        [
          T('уже'),
          T('ainda, com o acento na última'),
          T('mais estreito, com o acento na primeira'),
        ],
        [T('плачу'), T('eu choro, com o acento na primeira'), T('eu pago, com o acento na última')],
        [T('звонит'), T('ele toca agora, perfectivo'), T('ele toca sempre, imperfectivo')],
        [
          T('свечи'),
          T('as velas, com o acento na primeira'),
          T('a vela que se consome, com o acento na última'),
        ],
      ],
    },
    {
      caption: T('O acento móvel nos substantivos masculinos'),
      head: [T('Caso'), T('вода'), T('нога'), T('дом'), T('город')],
      rows: [
        [T('nominativo singular'), T('вода́'), T('нога́'), T('дом'), T('го́род')],
        [T('genitivo'), T('воды́'), T('ноги́'), T('до́ма'), T('го́рода')],
        [T('dativo'), T('воде́'), T('ноге́'), T('до́му'), T('го́роду')],
        [T('acusativo'), T('во́ду'), T('но́гу'), T('дом'), T('го́род')],
        [T('instrumental'), T('водо́й'), T('ногой'), T('до́мом'), T('го́родом')],
        [T('prepositivo'), T('воде́'), T('ноге́'), T('до́ме'), T('го́роде')],
      ],
    },
    {
      caption: T('Quem fica com o acento tônico'),
      head: [T('Situação'), T('O que acontece'), T('Exemplos')],
      rows: [
        [
          T('uma preposição vem antes'),
          T('a preposição recebe o acento'),
          T('на́ руки, по́д руку, за́ ногу'),
        ],
        [
          T('o substantivo é o centro da frase'),
          T('o acento fica no substantivo'),
          T('вода, нога, доро́га'),
        ],
        [
          T('o substantivo está no plural'),
          T('o acento volta para a raiz'),
          T('во́ды, но́ги, го́роды'),
        ],
        [
          T('o substantivo está no caso oblíquo'),
          T('o acento recua para a primeira sílaba'),
          T('во́ду, до́мом'),
        ],
        [T('a palavra tem ё'), T('o acento já está marcado na grafia'), T('Твое, всё, ещё')],
        [
          T('a palabra resiste à regra geral'),
          T('o acento nunca se move'),
          T('до́рогой, ло́шадь, де́ньги'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em воду, para onde foi o acento?'),
    options: [
      T('Permaneceu na última sílaba, como em вода'),
      T('Recuou para a primeira sílaba'),
      T('Foi para a preposição, se houver uma antes'),
    ],
    answer: 1,
    hint: T(
      'No caso oblíquo o substantivo masculino de raiz em consoante perde o acento da raiz, e a primeira sílaba fica com ele.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: В ___ было Слово (Jo 1:1)'), answer: 'начале' },
    {
      kind: 'choose',
      prompt: T('Em И от полноты Его все мы приняли, o мы é...'),
      options: [T('mosca'), T('o pronome nós'), T('ambíguo, sem contexto')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Complete: доро___ (estrada, com acento na última sílaba)'),
      answer: 'га',
    },
  ],
};
