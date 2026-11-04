import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  title: T('O advérbio: posição e os auxiliares'),
  subtitle: T('I have always wanted it — a regra mais testada'),
  section: T('Advérbio'),
  body: C(`## Cada advérbio tem seu lugar

O advérbio de **modo** vem depois do verbo: {He speaks slowly}, {She sings beautifully}, {They work hard}. Quando há um objeto, o advérbio costuma ficar entre o verbo e o objeto, ou depois do objeto, e as duas posições são aceitáveis: {He read the book quickly} e {He quickly read the book}.

O advérbio de **lugar** e o de **tempo** vêm antes do verbo: {He lives here}, {She left yesterday}, {They arrive tomorrow}. O português faz o mesmo, e é por isso que essa parte não dá trabalho.

A diferença que separa o aluno de português é o advérbio de **frequência**: {always}, {never}, {often}, {usually}, {sometimes}, {rarely}, {seldom}. Ele não vai nem antes nem depois do verbo: vai **depois do verbo auxiliar**.

## Depois do auxiliar, e não antes

{I have always wanted it} está certo. {I always have wanted it} soa a fala estrangeira, e {I always wanted it} é outra frase, com outro sentido: no segundo caso o {always} fica preso ao tempo em que se quis, e no primeiro limita o tempo em que se quis **e ainda se quer**.

O mesmo vale para {never}: {He has never seen the sea} e {He never saw the sea} não são a mesma frase. O primeiro diz que ele ainda não viu; o segundo diz que ele não viu num momento do passado, e nada impede que veja depois.

João 6:35 na KJV usa a regra com {shall}: {he that believeth on me shall never thirst}. O {never} vem depois do auxiliar e antes do verbo principal, e é exatamente a posição que o aluno de português costuma não acertar.

## Quando há dois verbos

Quando a oração tem dois verbos coordenadas, o advérbio fica entre os dois: {He quietly closed the door and left}. O advérbio descreve o primeiro verbo, e a posição diz isso.

O caso mais comum de todos é o da negação no meio: {I do not think so}, {I do not believe he is right}, {He did not come}. O auxiliar abre caminho para o {not}, e a ordem é **auxiliar, {not}, verbo principal**. Quem escreve {I don't think} acerta; quem escreve {I not think} quebra a frase.

## Foco e inversão

Ocasionalmente o advérbio é colocado no começo para dar ênfase, e o verbo passa a vir depois do auxiliar: {Only then did he understand}, {Never have I seen such a thing}. É um recurso de registro, mais comum na escrita formal e na KJV do que na fala, e o aluno só precisa reconhecê-lo.`),
  vocab: [
    V('slowly', 'slowly', 'devagar'),
    V('beautifully', 'beautifully', 'lindamente'),
    V('quietly', 'quietly', 'quietamente'),
    V('lives here', 'live', 'morar aqui'),
    V('left yesterday', 'leave', 'saiu ontem'),
    V('always', 'always', 'sempre'),
    V('never', 'never', 'nunca'),
    V('often', 'often', 'muitas vezes'),
    V('usually', 'usually', 'normalmente'),
    V('sometimes', 'sometimes', 'às vezes'),
    V('rarely', 'rarely', 'raramente'),
    V('seldom', 'seldom', 'raramente'),
    V('have wanted', 'want', 'ter querido'),
    V('have seen', 'see', 'ter visto'),
    V('shall never thirst', 'thirst', 'nunca terá sede'),
    V('do not think', 'think', 'não acho'),
  ],
  rules: [
    {
      n: '1',
      text: T('O advérbio de modo vem depois do verbo; o de lugar e o de tempo, antes do verbo.'),
    },
    {
      n: '2',
      text: T('O advérbio de frequência vem depois do verbo auxiliar: I have always wanted it.'),
    },
    {
      n: '3',
      text: T(
        'Com dois verbos coordenadas, o advérbio fica entre os dois: he quietly closed the door and left.',
      ),
    },
    { n: '4', text: T('Na negação a ordem é auxiliar, not, verbo principal: I do not think so.') },
    {
      n: '5',
      text: T('Advérbio no início da frase inverte o auxiliar: Only then did he understand.'),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'João 6:35 traz shall never thirst: o never depois do auxiliar e antes do verbo principal. É a posição que separa o leitor que entendeu a regra do que só decorou.',
      ),
    },
    {
      label: T('Diagnóstico:'),
      text: T(
        'Se o aluno escreve I always have wanted it, o problema é de ordem, não de tempo verbal: ele entendeu o presente perfeito e não entendeu onde o advérbio entra.',
      ),
    },
  ],
  examples: [
    { text: '{He speaks slowly}', gloss: T('ele fala devagar') },
    { text: '{He lives here}', gloss: T('ele mora aqui') },
    { text: '{I have always wanted it}', gloss: T('sempre quis isso — posição correta') },
    {
      text: '{I always wanted it}',
      gloss: T('sempre quis isso — só o passado, sentido diferente'),
    },
    { text: '{He has never seen the sea}', gloss: T('ele nunca viu o mar') },
    { text: '{He never saw the sea}', gloss: T('ele não viu o mar naquele dia') },
    {
      text: '{he that believeth on me shall never thirst}',
      gloss: T('aquele que crê em mim nunca terá sede'),
    },
    {
      text: '{He quietly closed the door and left}',
      gloss: T('ele fechou a porta em silêncio e saiu'),
    },
    { text: '{I do not think so}', gloss: T('não acho assim') },
    { text: '{Only then did he understand}', gloss: T('só então ele entendeu') },
  ],
  tables: [
    {
      caption: T('Posição por tipo de advérbio'),
      head: [T('Tipo'), T('Onde entra'), T('Exemplo')],
      rows: [
        [T('modo'), T('depois do verbo'), '{He speaks slowly}'],
        [T('lugar'), T('antes do verbo'), '{He lives here}'],
        [T('tempo'), T('antes do verbo'), '{She left yesterday}'],
        [T('frequência'), T('depois do auxiliar'), '{I have always wanted it}'],
        [T('grau'), T('antes do adjetivo'), '{a very good book}'],
      ],
    },
    {
      caption: T('Frequência: a ordem que o teste cobra'),
      head: [T('Correto'), T('Incorreto'), T('Por que')],
      rows: [
        [
          '{I have always wanted it}',
          '{I always have wanted it}',
          T('o advérbio segue o auxiliar'),
        ],
        ['{He has never seen it}', '{He never has seen it}', T('o advérbio segue o auxiliar')],
        ['{She has often tried}', '{She often has tried}', T('o advérbio segue o auxiliar')],
        ['{They had already left}', '{They already had left}', T('vale para todos os auxiliares')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase está correta?'),
    options: [
      T('I always have wanted it'),
      T('I have always wanted it'),
      T('I have wanted always it'),
      T('Always I have wanted it'),
    ],
    answer: 1,
    hint: T('O advérbio de frequência vem depois do verbo auxiliar.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Coloque no lugar certo: 'He has ___ seen the sea.'"),
      answer: 'never',
    },
    { kind: 'fill', prompt: T("Negação: 'I ___ think so.'"), answer: 'do not' },
    {
      kind: 'match',
      prompt: T('Ligue o tipo de advérbio à posição.'),
      pairs: [
        { a: T('modo'), b: T('depois do verbo') },
        { a: T('lugar'), b: T('antes do verbo') },
        { a: T('frequência'), b: T('depois do auxiliar') },
        { a: T('grau'), b: T('antes do adjetivo') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('Em qual frase o advérbio está na posição de foco?'),
      options: [
        T('He quietly closed the door and left'),
        T('Only then did he understand'),
        T('She left yesterday'),
        T('He speaks slowly'),
      ],
      answer: 1,
    },
  ],
};
