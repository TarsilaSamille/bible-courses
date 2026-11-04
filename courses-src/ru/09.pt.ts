import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  section: T('Os casos'),
  title: T('Os seis casos e quem os governa'),
  subtitle: T(
    'cada caso é escolhido por um verbo, uma preposição ou uma contagem, nunca pelo sentido do substantivo',
  ),
  body: C(`
## O caso é uma relação, e a relação tem dono

O caso russo não traduz uma preposição nem um sentido: ele marca a função que a palavra cumpre dentro de uma relação, e essa relação vem sempre de algum lado. De um verbo, de uma preposição, de uma negação ou de uma contagem. O substantivo não escolhe o próprio caso.

Por isso a pergunta útil não é o que este caso significa, e sim **quem manda nele**. O genitivo é o que aparece depois de нет, de у, de от, de до, de dois, de muitos. O dativo é o que aparece depois de помогать, радоваться, молиться. O instrumental é o que aparece depois de ser quando se diz o que alguém é, e depois de заниматься, интересоваться. O prepositivo não aparece sozinho: só depois de uma preposição, e é por isso que ele é o único caso que você nunca vai ver sem companhia.

Dizer que o genitivo é posse e o dativo é destinatário descreve o efeito. Dizer que o genitivo é o caso de нет e o dativo é o caso de помогать descreve a máquina, e a máquina é o que se precisa para ler.

## O que cada caso não pode fazer

A parte que trava a leitura não é o que o caso faz, é o que ele não pode fazer.

O genitivo não pode ser sujeito nem objeto direto. Em russo nada que seja o foco da frase aparece no genitivo: se você quer dizer quem fez, é nominativo; se quer dizer o que foi feito, é acusativo. O genitivo é sempre dependência.

O instrumental não pode ocupar a posição de sujeito, e não é o que um verbo recebe como objeto direto. Ele aparece como meio, como companhia, como ocupação e como predicativo de profissão: Он врач, ele é médico, e Он был врачом, ele foi médico. A mudança de um para o outro é a passagem do presente para o passado, e o caso faz parte dessa mudança.

O dativo é o mais estreito de todos. Não existe verbo português que peça dativo, e a lista dos que pedem é curta e precisa ser decorada. Tudo o que em português é a alguém nem sempre é dativo em russo: se o verbo é dar, o objeto é acusativo, e o destinatário é que pode ir para o dativo.

O prepositivo é o único que não pode aparecer sozinho. Não existe frase com о слове sem uma preposição que o reja, e é por isso que ele é o caso mais fácil: você só precisa do par.

## Quando duas formas coincidem

O custo do sistema é que duas formas podem ser idênticas, e aí a terminação não diz nada. No masculino singular animado, Бога é genitivo e é acusativo. A preposição на é prepositivo com sentido estático e acusativo com sentido de direção.

O jeito de sair da dúvida é procurar o verbo. Se o verbo é transitivo e a palavra responde o quê, é acusativo. Se responde de quem ou de quê, é genitivo. Se responde a quem, é dativo. O substantivo é o mesmo nas três frases, e o verbo é que muda o caso.

## O gancho: João 1:1 tem três dos seis casos

**В начале было Слово, и Слово было у Бога, и Слово было Бог.** Uma frase com os três casos principais, e cada um marcado por um elemento diferente. В начале é prepositivo, porque в rege prepositivo e начало declina para o caso. У Бога é genitivo, porque у rege genitivo e significa junto com. Слово aparece duas vezes como nominativo, uma como sujeito e outra como predicativo depois de foi.

E a segunda oração é a mais informativa. **Слово было к Богу.** Aqui aparece o dativo, o caso mais estreito da língua, e ele aparece porque к é uma das poucas preposições que o rege. Se o tradutor tivesse escrito Слово было у Бога, o verso diria outra coisa: junto de Deus, e não em direção a Deus.

O caso que não aparece é o acusativo, e a ausência é igualmente informativa. Nada foi feito com a Palavra nesse versículo: a Palavra é o sujeito de todas as orações, e sujeito em russo é nominativo. Quem sofre o verbo é o que vai para o acusativo, e aqui não há ninguém.
`),
  vocab: [
    V('нет', 'нет', 'não há; rege genitivo'),
    V('у', 'у', 'junto de; rege genitivo'),
    V('от', 'от', 'de, a partir de; rege genitivo'),
    V('до', 'до', 'até; rege genitivo'),
    V('к', 'к', 'a, em direção a; rege dativo'),
    V('о', 'о', 'sobre; rege prepositivo'),
    V('о слове', 'слово', 'sobre a palavra; caso prepositivo'),
    V('помогать', 'помогать', 'ajudar; rege dativo'),
    V('молиться', 'молиться', 'orar; rege dativo'),
    V('заниматься', 'заниматься', 'ocupar-se; rege instrumental'),
    V('врачом', 'врач', 'médico; instrumental'),
    V('у Бога', 'бог', 'junto de Deus; genitivo'),
    V('к Богу', 'бог', 'a Deus; dativo'),
    V('в начале', 'начало', 'no princípio; prepositivo'),
    V('Слово', 'слово', 'a Palavra; nominativo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em Слово было к Богу, qual caso é Богу?'),
    options: [T('Genitivo'), T('Dativo'), T('Prepositivo')],
    answer: 1,
    hint: T('A preposição к rege dativo. Com у seria genitivo, e com о seria prepositivo.'),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: нет ___ (não há pão)'), answer: 'хлеба' },
    {
      kind: 'choose',
      prompt: T('Qual caso rege помогать?'),
      options: [T('Genitivo'), T('Dativo'), T('Instrumental')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: Он был ___ (ele foi médico)'), answer: 'врачом' },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O caso é escolhido pelo verbo, pela preposição ou pela contagem, nunca pelo sentido do substantivo.',
      ),
    },
    { n: '2', text: T('O genitivo não pode ser sujeito nem objeto direto: é sempre dependência.') },
    {
      n: '3',
      text: T(
        'O dativo é o mais estreito: só os verbos que o pedem o pedem, e a lista precisa ser decorada.',
      ),
    },
    {
      n: '4',
      text: T(
        'O instrumental não pode ocupar a posição de sujeito: aparece como meio, companhia, ocupação e predicativo.',
      ),
    },
    {
      n: '5',
      text: T('O prepositivo nunca aparece sozinho, e é por isso que é o caso mais fácil de ler.'),
    },
  ],
  notes: [
    {
      label: T('O caso é o do verbo, não o da coisa'),
      text: T(
        'A mesma preposição rege casos diferentes conforme o sentido: в начале é prepositivo e в храм é acusativo. A mesma coisa aparece com verbos diferentes: dar pede acusativo para a coisa, e o destinatário vai para o dativo, enquanto помогать pede dativo direto. O substantivo é o mesmo; quem manda é o verbo.',
      ),
    },
    {
      label: T('Quando a terminação não diz'),
      text: T(
        'No masculino singular animado, genitivo e acusativo têm a mesma forma: Бога. Nenhuma terminação resolve, e nenhum outro recurso existe além do verbo. Por isso a leitura de um caso em russo começa sempre pelo verbo e nunca pelo substantivo.',
      ),
    },
  ],
  examples: [
    { text: 'В начале было Слово', gloss: T('no princípio era a Palavra; Вначале é prepositivo') },
    { text: 'Слово было у Бога', gloss: T('a Palavra estava junto de Deus; у rege genitivo') },
    { text: 'Слово было к Богу', gloss: T('a Palavra estava em direção a Deus; к rege dativo') },
    { text: 'нет хлеба', gloss: T('não há pão; нет rege genitivo') },
    { text: 'много воды', gloss: T('muita água; a quantidade rege genitivo') },
    { text: 'помогать другу', gloss: T('ajudar um amigo; помогать rege dativo') },
    { text: 'молиться Отцу', gloss: T('orar ao Pai; молиться rege dativo') },
    { text: 'заниматься музыкой', gloss: T('ocupar-se com música; заниматься rege instrumental') },
    { text: 'Он был врачом', gloss: T('ele foi médico; profissão no instrumental') },
    { text: 'о слове', gloss: T('sobre a palavra; o prepositivo nunca vai sozinho') },
  ],
  tables: [
    {
      caption: T('Os seis casos e o que os governa'),
      head: [T('Caso'), T('Governado por'), T('Pergunta que responde'), T('Exemplo')],
      rows: [
        [T('nominativo'), T('verbo e cópula'), T('quem faz?'), T('Бог')],
        [T('genitivo'), T('нет, у, от, до, dois, muitos'), T('de quem, de quê'), T('у Бога')],
        [T('dativo'), T('к, по, помогать, молиться'), T('a quem'), T('к Богу')],
        [T('acusativo'), T('verbo transitivo'), T('o quê'), T('вижу Бога')],
        [
          T('instrumental'),
          T('быть, заниматься, интересоваться'),
          T('com que, por que meio'),
          T('врачом'),
        ],
        [
          T('prepositivo'),
          T('в, на, о, при com sentido estático'),
          T('onde, dentro de quê'),
          T('в начале'),
        ],
      ],
    },
    {
      caption: T('O que cada caso não pode fazer'),
      head: [T('Caso'), T('Não pode ser'), T('Exemplo do erro')],
      rows: [
        [
          T('nominativo'),
          T('objeto direto nem possessor'),
          T('quem ama é o que é regido, não o que é amado'),
        ],
        [
          T('genitivo'),
          T('sujeito nem objeto direto'),
          T('вижу Бога tem Бога em acusativo, e só o verbo decide'),
        ],
        [
          T('dativo'),
          T('sujeito nem objeto direto de um verbo comum'),
          T('Я даю книгу другу: o amigo é dativo, o livro é acusativo'),
        ],
        [
          T('acusativo'),
          T('sujeito nem possessor'),
          T('слово Бога é genitivo; вижу слово Бога tem acusativo'),
        ],
        [
          T('instrumental'),
          T('sujeito'),
          T('Он пишет пером: o sujeito é ele, o instrumento é a pena'),
        ],
        [T('prepositivo'), T('nada, sozinho'), T('о слове sem a preposição о é um erro')],
      ],
    },
    {
      caption: T('Quando duas formas coincidem'),
      head: [T('Forma'), T('Casos possíveis'), T('O que decide')],
      rows: [
        [T('Бога'), T('genitivo e acusativo'), T('o verbo: вижу, ou слово Бога')],
        [T('на'), T('prepositivo e acusativo'), T('на столе é lugar, на стену é direção')],
        [
          T('по'),
          T('dativo, genitivo e acusativo'),
          T('o sentido: по улице é lugar, по браtu é destinatário'),
        ],
        [T('о'), T('prepositivo'), T('sempre com o sentido de lugar ou de assunto')],
        [T('мы'), T('pronominal, ou substantivo'), T('o número do verbo: приняли é plural')],
      ],
    },
  ],
};
