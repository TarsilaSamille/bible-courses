import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  section: T('O verbo: tempo, modo e negação'),
  title: T('Tempo e modo: o que a partícula бы faz'),
  subtitle: T('seria, wishesse, se viesse: uma palavra só, três modos'),
  body: C(`
## Três tempos, e o passado não tem pessoa

O presente russo tem seis pessoas e dois modelos de conjugação, e a escolha entre eles é feita pelo tema do verbo, não pelo tempo. Читаю, читаешь, читает ao lado de говорю, говоришь, говорит. Quem já viu o latim reconhece a estrutura: é a conjugação de primeira e da segunda série, com a terceira série aparecendo só em poucos verbos.

O passado é diferente de tudo o que o português faz. **O passado russo não tem pessoa.** Ele tem gênero e número, e só. Он читал, она читала, оно читало, они читали. Quem escreveu é quem leu é quem leu é quem leram: o sujeito só aparece na forma do substantivo, e o verbo não sabe quem fez.

A consequência é que o passado não distingue quem agiu, e é por isso que o contexto Russian sempre traz um pronome, um substantivo ou uma marca de pessoa de outro modo. Я читал e Он читал são a mesma forma, e a diferença está em quem é o sujeito na frase.

O tempo verbal aparece na terminação, e a terminação zero é o masculino singular. É por isso que был é ao mesmo tempo "ele foi" e, num contexto neutro, uma forma sem informação de gênero.

## Duas maneiras de dizer o futuro

O futuro perfeito não existe como tempo. Ele é feito de duas maneiras, e a escolha entre elas é o aspecto.

A primeira usa o presente perfectivo: Я напишу письмо é o que eu vou escrever, e a ação vai acontecer uma vez. A segunda usa o imperfectivo com o verbo ser: Я буду писать письмо, e é o que eu vou estar fazendo. As duas frases dizem futuro, e a diferença entre elas é a mesma que existe no passado.

Há ainda uma terceira forma, que não é futuro e sim obrigação: Я должен писать e, com a partícula, Мне писать. A primeira usa um adjetivo, e a segunda aparece depois de verbos de obrigação e deões de necessidade. Quem traduz precisa saber qual das duas está no original, porque Я должен писать pode ser uma obrigação ou uma constatação sobre o que alguém vai fazer.

## A partícula que faz tudo

**Бы é uma partícula, não um tempo e não um modo.** Ela não flexiona, não tem forma de plural e não muda de acuerdo com a pessoa. E faz três coisas que em português precisariam de palavras diferentes.

A primeira é o condicional atenuado: Я бы написал, eu escreveria, e a frase inteira pode significar um desejo educado ou uma oferta. A segunda é o optativo de desejo: Хотел бы я, eu queria. A terceira é o condicional irreal, e essa tem uma regra que causa surpresa.

Nessa regra, **quando o se é seguido de бы, a segunda oração também costuma receber um бы**, e é assim que o russo distingue o irreal do real. Если бы он был дома, он бы позвонил é o irreal: duas vezes бы, e o verbo no passado. A forma com бы apenas na subordinada é mais comum na fala, e a forma sem бы nenhum é o que se aprende primeiro.

A regra prática para o leitor é: ** бы nunca aparece no indicativo.** Se um бы aparece na frase, alguém está supondo alguma coisa, e o tempo verbal deixou de ser a informação principal. Quem traduz indicando só o tempo perde a informação.

## O gancho: uma afirmação sem hipótese

**В Нем была жизнь, и жизнь была свет человеков.** Duas orações, o mesmo verbo duas vezes, e o tempo é o passado em ambas: была, feminino singular, concordando com жизнь.

Quem escreve João não usa nenhuma hipótese. Não há бы, não há пусть, não há чтобы, e o verbo no passado afirma um fato, não uma possibilidade. A afirmação mais forte da língua é feita com o tempo que não tem futuro.

E o mesmo vale em João 14:6, onde a primeira pessoa do verbo ser aparece numa forma arcaica: Я есмь путь и истина и жизнь. O есмь sobreviveu apenas no registro bíblico e litúrgico; no russo corrente a primeira pessoa de ser é я sem verbo, e é por isso que essa frase soa antiga mesmo quando o leitor não percebe por quê.

O contraste que importa é o de uma frase hipotética sobre o mesmo assunto: Если бы я был путём, я бы вёл к Отцу é gramatical, é inteligível e é outra coisa. Uma frase com бы é uma frase que se supõe. Uma frase sem бы é uma frase que se afirma. João 1:4 e João 14:6 estão do segundo lado.
`),
  vocab: [
    V('читал', 'читать', 'lia; passado masculino'),
    V('читала', 'читать', 'lia; passado feminino'),
    V('читали', 'читать', 'liam; passado plural'),
    V('была', 'быть', 'era; passado feminino'),
    V('буду писать', 'быть', 'vou estar escrevendo; futuro imperfectivo'),
    V('напишу', 'написать', 'vou escrever; futuro perfectivo'),
    V('должен', 'должен', 'deve; adjetivo de obrigação'),
    V('Мне писать', 'писать', 'eu tenho de escrever; infinitivo pessoal'),
    V('бы', 'бы', 'partícula do condicional e do optativo'),
    V('Если бы', 'если', 'se; com бы no condicional irreal'),
    V('Я бы написал', 'написать', 'eu escreveria; condicional atenuado'),
    V('Хотел бы я', 'хотеть', 'eu queria; optativo de desejo'),
    V('Я есмь', 'быть', 'eu sou; forma arcaica do primeiro pessoa'),
    V('пусть', 'пусть', 'que seja; partícula de desejo na terceira'),
    V('да будет', 'быть', 'seja; optativo litúrgico'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em Если бы он был дома, он бы позвонил, quantas vezes aparece бы?'),
    options: [T('Uma'), T('Duas'), T('Três')],
    answer: 1,
    hint: T(
      'Quando o se recebe бы, a segunda oração também o recebe. É essa duplicação que marca o condicional irreal.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: Я ___ написал (eu escreveria)'), answer: 'бы' },
    {
      kind: 'choose',
      prompt: T('O passado russo distingue...'),
      options: [T('a pessoa do sujeito'), T('o gênero e o número'), T('o aspecto')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete o futuro perfectivo: Я ___ письмо'), answer: 'напишу' },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O passado russo não tem pessoa: tem gênero e número, e a terminação zero é o masculino singular.',
      ),
    },
    {
      n: '2',
      text: T(
        'O futuro perfeito não é um tempo: é o presente perfectivo ({напишу}) ou o imperfectivo com ser ({буду писать}).',
      ),
    },
    {
      n: '3',
      text: T(
        '{После} a partícula de obrigação aparece um infinitivo sem preposição: {Я} {должен} {писать}, {Мне} {писать}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Бы} é uma partícula, e faz três coisas: condicional atenuado, optativo de desejo e condicional irreal.',
      ),
    },
    {
      n: '5',
      text: T(
        'Quando o se recebe {бы}, a segunda oração também o recebe; e {бы} nunca aparece no indicativo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que o passado precisa do pronome'),
      text: T(
        'Como o passado não tem pessoa, Я читал e Он читал são a mesma palavra. Quem escreve em russo compensa a falta de informação no verbo com o pronome ou com o substantivo, e é por isso que o texto russo tem mais pronomes do que o grego no mesmo ponto. Isso não é estilística: é a única informação que o verbo não dá.',
      ),
    },
    {
      label: T('A fronteira entre afirmar e supor'),
      text: T(
        'Um бы na frase significa que alguém está supondo alguma coisa, e a posição dele importa: vem depois do verbo a que se refere. Uma frase com бы é hipotética por definição, mesmo quando o verbo está no presente. João 1:4 e João 14:6 são o oposto exato: nenhuma partícula, nenhum modo, e o verbo no passado afirma um fato que o texto não abre para hipótese.',
      ),
    },
  ],
  examples: [
    { text: 'Он читал', gloss: T('ele lia; passado, sem pessoa') },
    { text: 'Она читала', gloss: T('ela lia; passado feminino') },
    { text: 'Они читали', gloss: T('eles liam; passado plural') },
    { text: 'Я буду писать', gloss: T('vou estar escrevendo; futuro imperfectivo') },
    { text: 'Я напишу письмо', gloss: T('vou escrever a carta; futuro perfectivo') },
    { text: 'Я должен писать', gloss: T('eu devo escrever; obrigação com adjetivo') },
    { text: 'Мне писать', gloss: T('eu tenho de escrever; infinitivo sem preposição') },
    {
      text: 'Если бы он был дома, он бы позвонил',
      gloss: T('se ele estivesse em casa, teria ligado; condicional irreal'),
    },
    { text: 'Я бы написал', gloss: T('eu escreveria; condicional atenuado') },
    {
      text: 'В Нем была жизнь, и жизнь была свет человеков',
      gloss: T('nele havia vida, e a vida era luz para os homens (Jo 1:4)'),
    },
  ],
  tables: [
    {
      caption: T('Os três tempos com um par de exemplo'),
      head: [T('Tempo'), T('Imperfectivo'), T('Perfectivo'), T('O que a pessoa sabe')],
      rows: [
        [
          T('presente'),
          T('читаю, читаешь, читает'),
          T('напишу, напишешь, напишет'),
          T('quem faz, pelo verbo'),
        ],
        [
          T('passado'),
          T('читал, читала, читало, читали'),
          T('написал, написала'),
          T('gênero e número, não pessoa'),
        ],
        [T('futuro'), T('буду писать'), T('напишу'), T('a mesma distinção do presente')],
      ],
    },
    {
      caption: T('Os três usos de бы'),
      head: [T('Uso'), T('Exemplo'), T('O que significa'), T('Tempo do verbo')],
      rows: [
        [
          T('condicional atenuado'),
          T('Я бы написал'),
          T('eu escreveria, por cortesia ou desejo'),
          T('passado'),
        ],
        [T('optativo de desejo'), T('Хотел бы я'), T('eu queria'), T('passado')],
        [
          T('condicional irreal'),
          T('Если бы он был дома, он бы позвонил'),
          T('se ele tivesse estado em casa'),
          T('passado'),
        ],
      ],
    },
    {
      caption: T('Asways de falar, e onde бы aparece'),
      head: [T('Forma'), T('Exemplo'), T('Что marca')],
      rows: [
        [T('indicativo'), T('Он читает'), T('fato ou hábito')],
        [T('desejo na terceira pessoa'), T('Пусть будет свет'), T('ordem ou desejo de fora')],
        [T('optativo litúrgico'), T('Да святится имя Твое'), T('desejo na primeira e na segunda')],
        [T('subordinada final'), T('Чтобы ты веровал'), T('finalidade ou conteúdo de desejo')],
        [T('condicional'), T('Если бы я был богом'), T('suposição, e sempre com бы')],
      ],
    },
  ],
};
