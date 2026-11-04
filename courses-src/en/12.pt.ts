import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('Phrasal verbs e preposições bíblicas'),
  subtitle: T('put on, cast out, come unto — verbos compostos'),
  section: T('Sintaxe'),
  body: C(`## Verbo mais partícula

Um phrasal verb combina verbo e partícula com sentido próprio. A partícula pode ser {on/off/up/out/in/away}, como em {put on}, {cast out}, {come in}, ou uma preposição lexical, como em {come unto} e {look upon}. Não aprenda a palavra isolada; memorize a unidade inteira com seu objeto típico.

{Put on Christ} significa «vestir-se de Cristo», metáfora de um modo de viver transformado. {Put off the old man} exprime rejeitar uma identidade antiga. As duas são metáforas bíblicas, não instruções literais de vestuário.

## Partículas e objetos

Com objeto nominal, a partícula normalmente fica no lugar: {cast out demons}, {look at the house}. Com pronome, a partícula pode se deslocar em alguns usos informais britânicos: {look him at}; o inglês americano padrão costuma mantê-la antes do objeto. Com gerúndio também há variação: {put a coat on}.

## Registro

A KJV usa com frequência {unto} e {upon}; esses não são automaticamente phrasal verbs modernos. O inglês contemporâneo pode dizer {come to} ou {look at}. Registre a forma exata e o registro dela, para que uma tradução não achate o estilo original.`),
  vocab: [
    V('put on', 'put on', 'revestir-se de'),
    V('put off', 'put off', 'despojar-se de'),
    V('cast out', 'cast out', 'expulsar'),
    V('come unto', 'come unto', 'vir a'),
    V('fall away', 'fall away', 'apostatar/cair'),
    V('hold fast', 'hold fast', 'reter firme'),
    V('look after', 'look after', 'cuidar'),
    V('look for', 'look for', 'procurar'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T("O que significa 'put on Christ'?"),
    options: [
      T('Colocar Cristo'),
      T('Revestir-se de Cristo'),
      T('Despir Cristo'),
      T('Mirar a Cristo'),
    ],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T("Complete: 'We must look ___ the Lord.'"), answer: 'for' },
    {
      kind: 'match',
      prompt: T('Relacione unidade e sentido.'),
      pairs: [
        { a: 'cast out', b: T('expulsar') },
        { a: 'look after', b: T('cuidar') },
        { a: 'hold fast', b: T('reter') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('Qual forma identifica melhor o registro KJV?'),
      options: [T('come unto'), T('come to'), T('come at'), T('come by')],
      answer: 0,
    },
  ],
  rules: [
    { n: '1', text: T('Aprenda a unidade inteira, não a partícula isolada: look for ≠ look.') },
    {
      n: '2',
      text: T('Com objeto nominal, a partícula costuma ficar depois do verbo: look at him.'),
    },
    {
      n: '3',
      text: T('Não atualize KJV silenciosamente: {come unto} é registrável como forma arcaica.'),
    },
  ],
  notes: [
    {
      label: T('Tradução:'),
      text: T(
        'Atualizar o registro pode melhorar a compreensão, mas é necessário informar que isso foi feito.',
      ),
    },
  ],
  examples: [
    { text: '{put on Christ}', gloss: T('revestir-se de Cristo') },
    { text: '{cast out demons}', gloss: T('expulsar demônios') },
    { text: '{come unto me}', gloss: T('vinde a mim — KJV') },
    { text: '{look for}', gloss: T('procurar') },
  ],
  tables: [
    {
      caption: T('Unidades e valores'),
      head: [T('Unidade'), T('Valor'), T('Registro')],
      rows: [
        ['{put on}', T('revestir-se de'), T('bíblico')],
        ['{cast out}', T('expulsar'), T('bíblico')],
        ['{come unto}', T('venir a'), T('arcaico/KJV')],
      ],
    },
  ],
};
