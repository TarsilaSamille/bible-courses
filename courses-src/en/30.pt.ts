import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('A frase inteira, em ordem'),
  subtitle: T('sujeito, verbo, objeto — a estrutura que sustenta o resto'),
  section: T('Sintaxe'),
  body: C(`## Três posições, e nenhuma opção

A ordem da frase inglesa é **sujeito, verbo, objeto**, e ela não varia. {The Lord is my shepherd}, {Jesus went to the city}, {They took the boat}.

O português permite inverter a ordem por finalidade ({Trouxe o livro que pedi}) e por topicalização ({O livro, trouxeram ontem}). O inglês permite as duas coisas, mas só quando a inversão é marcada: por uma preposição, por {it}, ou por uma expressão temporal. Sem marca, a ordem volta ao padrão.

Gênesis 1:3 na KJV mostra a inversão marcada: {And God said, Let there be light}. Depois de um verbo de fala, a ordem se inverte e o pronome {there} ocupa a posição do sujeito. É a razão pela qual o versículo soa estranho a quem ainda não viu a construção.

## A negação abre caminho para o auxiliar

Toda negação do inglês passa por um auxiliar. O presente e o passado usam {do}: {I do not go}, {I did not go}. O perfeito usa {have}: {I have not gone}. O futuro usa {will}: {I will not go}. Os modais usam o próprio modal: {I cannot go}, {She must not go}.

Em todos os casos a ordem é a mesma: **auxiliar, {not}, verbo principal**. Não existe posição alternativa, e o português tampouco a oferece: a negação lá vai depois do verbo, e é por isso que o aluno escreve {I not go}.

Quando o verbo principal é uma frase inteira, o {not} fica entre o auxiliar e o verbo, e o resto da frase vai para o fim: {I do not know what he wants}, e nunca {I do not know what he wants not}.

## A pergunta inverte o auxiliar

A pergunta de sim ou não põe o auxiliar **antes** do sujeito: {Do you believe}, {Did he come}, {Have they finished}, {Will she go}. O auxiliar sobe e o resto da ordem fica como estava.

A pergunta com interrogativo põe o interrogativo no lugar do objeto e mantém o auxiliar na frente: {Where do you live}, {What did he say}, {When will they arrive}. Quem traduz {Onde você mora?} escreve {Where you live}, e a frase fica sem auxiliar.

A tag question repete o auxiliar em forma invertida no fim da frase: {You believe, do you?}, {He is not here, is he?}. A tag não é uma pergunta nova; é a mesma inversão, deslocada para o fim.

1 João 1:5 inverte a ordem por uma razão diferente: {If we love one another, God dwelleth in us}. A oração condicional abre a frase, e o verbo principal {dwelleth} volta ao seu lugar na segunda metade.

## O teste das três colunas

Para analisar uma frase o procedimento é um só: escreva as posições numa linha e preencha. {Jesus | went | to the city} é sujeito, verbo, objeto indireto. {Jesus | went | the city} é sujeito, verbo, objeto direto. {It | was | Jesus who went} é sujeito, verbo, sujeito predicativo, porque {It} ocupa a posição do sujeito e {Jesus} vem depois do verbo.

O procedimento só falha quando há um verbo auxiliar, e aí a regra é contar o auxiliar como verbo: {Jesus | has | gone | to the city} tem quatro posições, não três.`),
  vocab: [
    V('subject', 'subject', 'sujeito'),
    V('verb', 'verb', 'verbo'),
    V('object', 'object', 'objeto'),
    V('do you believe', 'do', 'você acredita'),
    V('did he come', 'do', 'ele veio'),
    V('where do you live', 'where', 'onde você mora'),
    V('what did he say', 'what', 'o que ele disse'),
    V('God said', 'say', 'Deus disse'),
    V('let there be light', 'be', 'haja luz'),
    V('If we love one another', 'love', 'se nos amarmos uns aos outros'),
    V('God dwelleth in us', 'dwell', 'Deus mora em nós'),
    V('has gone', 'go', 'ter ido'),
    V('do not know', 'know', 'não saber'),
    V('predicate', 'predicate', 'predicativo'),
    V('inversion', 'inversion', 'inversão'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A ordem da frase é sujeito, verbo, objeto, e só se inverte quando a inversão é marcada.',
      ),
    },
    {
      n: '2',
      text: T('Toda negação passa por um auxiliar, e a ordem é auxiliar, not, verbo principal.'),
    },
    {
      n: '3',
      text: T(
        'A pergunta de sim ou não põe o auxiliar antes do sujeito; a pergunta com interrogativo põe o interrogativo no lugar do objeto.',
      ),
    },
    { n: '4', text: T('A tag question repete o auxiliar invertida no fim da frase.') },
    {
      n: '5',
      text: T(
        'Ao analisar uma frase com auxiliar, o auxiliar conta como verbo e a frase ganha uma posição.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'Gênesis 1:3 inverte a ordem depois de um verbo de fala, e 1 João 1:5 abre com uma oração condicional. As duas inversões são marcas, não exceções.',
      ),
    },
    {
      label: T('Diagnóstico:'),
      text: T(
        'Se a frase do aluno não tem auxiliar nem para negar nem para perguntar, ele esqueceu a peça que faz a operação. É o mesmo sintoma em dois contextos.',
      ),
    },
  ],
  examples: [
    { text: '{The Lord is my shepherd}', gloss: T('o Senhor é o meu pastor') },
    { text: '{And God said, Let there be light}', gloss: T('e Deus disse: haja luz') },
    { text: '{I do not go}', gloss: T('eu não vou') },
    { text: '{I did not go}', gloss: T('eu não fui') },
    { text: '{Do you believe}', gloss: T('você acredita?') },
    { text: '{Where do you live}', gloss: T('onde você mora?') },
    { text: '{What did he say}', gloss: T('o que ele disse?') },
    { text: '{You believe, do you}', gloss: T('você acredita, não é?') },
    {
      text: '{If we love one another, God dwelleth in us}',
      gloss: T('se nos amarmos uns aos outros, Deus mora em nós'),
    },
    { text: '{Jesus has gone to the city}', gloss: T('Jesus foi para a cidade') },
  ],
  tables: [
    {
      caption: T('A ordem canônica'),
      head: [T('Posição'), T('O que entra'), T('Exemplo')],
      rows: [
        [T('1'), T('sujeito'), '{Jesus}'],
        [T('2'), T('verbo'), '{went}'],
        [T('3'), T('objeto indireto'), '{to the city}'],
        [T('1'), T('sujeito'), '{The Lord}'],
        [T('2'), T('verbo (cópula)'), '{is}'],
        [T('3'), T('complemento'), '{my shepherd}'],
      ],
    },
    {
      caption: T('Os três tipos de pergunta'),
      head: [T('Tipo'), T('Ordem'), T('Exemplo')],
      rows: [
        [T('sim ou não'), T('auxiliar + sujeito + verbo'), '{Do you believe}'],
        [
          T('interrogativo'),
          T('interrogativo + auxiliar + sujeito + verbo'),
          '{Where do you live}',
        ],
        [T('tag'), T('frase + auxiliar invertido + pronome'), '{You believe, do you}'],
      ],
    },
    {
      caption: T('Quando a inversão é legítima'),
      head: [T('Marca'), T('Ordem resultante'), T('Exemplo')],
      rows: [
        [T('verbo de fala'), T('sujeito invertido'), '{And God said, Let there be light}'],
        [T('oração condicional'), T('condicional primeiro'), '{If we love, God dwells in us}'],
        [T('there'), T('{there} ocupa o sujeito'), '{There is no fear}'],
        [T('it como sujeito'), T('verbo depois de {it}'), '{It was Jesus who went}'],
        [T('negativo no início'), T('auxiliar invertido'), '{Never have I seen such a thing}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual pergunta está correta?'),
    options: [
      T('Where you live?'),
      T('Where do you live?'),
      T('Where you do live?'),
      T('Where live you?'),
    ],
    answer: 1,
    hint: T('O auxiliar do sobe para antes do sujeito.'),
  },
  exercises: [
    { kind: 'fill', prompt: T("Complete a pergunta: '___ he come?'"), answer: 'Did' },
    { kind: 'fill', prompt: T("Complete a negação: 'I ___ know the answer.'"), answer: 'do not' },
    {
      kind: 'match',
      prompt: T('Ligue o tipo de frase ao exemplo.'),
      pairs: [
        { a: T('afirmativa'), b: '{He came early}' },
        { a: T('negativa'), b: '{He did not come early}' },
        { a: T('sim ou não'), b: '{Did he come early}' },
        { a: T('interrogativo'), b: '{When did he come}' },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('Qual frase está correta?'),
      options: [
        T('I not know him'),
        T("I don't know him"),
        T('I know not him'),
        T('I do not know him'),
      ],
      answer: 1,
    },
  ],
};
