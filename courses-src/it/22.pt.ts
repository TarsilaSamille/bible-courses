import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  title: T('O advérbio: como se forma'),
  subtitle: T('lentamente, bene, sempre'),
  section: T('O advérbio'),
  body: C(`## {-mente} se gruda ao adjetivo feminino

A regra cabe numa linha. O advérbio de modo se forma colando o sufixo **-mente** ao adjetivo no feminino singular: {lenta} + {-mente} = {lentamente}, {veloce} → {velocemente}, {costante} → {costantemente}. Não é preciso saber flexionar nada; é preciso saber que o sufixo já vem com a forma de gênero dentro.

Quando o adjetivo é de primeira classe, termina em {-o} ou {-a} e a conta é literal. {Dolce} → {dolcemente}, {forte} → {fortemente}, {felice} → {felicemente}, {breve} → {brevemente}, {facile} → {facilmente}.

## A vogal que cai, e os que não caem

O ponto delicado vem com os adjetivos em {-e}, que em italiano não têm gênero: {facile}, {veloce}, {difficile}, {breve}, {debole}. Neles o {-e} final é **apagado** antes de {-mente}. Daí {facilmente}, {velocemente}, {difficilmente}, {debolmente} e não {facilmente} com dois {-e} no fim.

Depois há o grupo que não segue regra nenhuma, porque vem de um adjetivo que ninguém vê: {bene} de {buono}, {male} de {cattivo}, {meglio} e {peggio}. São quatro palavras para decorar.

## Os que não derivam de adjetivo nenhum

A terceira família é a mais numerosa e a mais decorada. Não há {sempre} atrás de um adjetivo, nem {mai}, nem {già}: {oggi}, {ieri}, {domani}, {adesso}, {allora}, {quando}, {spesso}, {raramente}, {mai}, {sempre}, {già}, {ancora}, {quasi}, {giusto}, {appena}, {forse}. A lista é longa, e o único jeito é conhecê-la pelo uso.

O que distingue as duas famílias é flexão, e aqui é simples: advérbio em {-mente} nunca flexiona, nem por gênero, nem por número. {Maria parla lentamente} e {i ragazzi parlano lentamente} usam a mesma palavra.

## Na Bíblia

Sal 1:3 compara o justo a uma árvore: «Sarà come un albero piantato lungo i corsi d’acqua». O {come} é advérbio de comparação, e {lungo} é advérbio de lugar; os dois são invariáveis e os dois vêm antes do nome que modificam. O paralelo grego, {ὡς}, é uma palavra só que significa ao mesmo tempo «como» e «quão», e o italiano teve de pedir dois advérbios para dizer a mesma coisa.

## O que ler

Ao ver um advérbio terminado em {-mente}, procure o adjetivo de onde ele veio e apague o {-e} final do adjetivo antes de colar o sufixo. Ao ver {bene} ou {male}, não procure adjetivo: são quatro palavras avulsas, e quem escreve {più bene} ou {più male} no lugar delas está no caminho errado.`),
  vocab: [
    V('lentamente', 'lentamente', 'lentamente'),
    V('velocemente', 'velocemente', 'rapidamente'),
    V('facilmente', 'facilmente', 'facilmente'),
    V('brevemente', 'brevemente', 'brevemente'),
    V('fortemente', 'fortemente', 'fortemente'),
    V('felicemente', 'felicemente', 'felizmente'),
    V('dolcemente', 'dolcemente', 'docemente'),
    V('costantemente', 'costantemente', 'constantemente'),
    V('bene', 'bene', 'bem'),
    V('male', 'male', 'mal'),
    V('meglio', 'meglio', 'melhor'),
    V('peggio', 'peggio', 'pior'),
    V('sempre', 'sempre', 'sempre'),
    V('mai', 'mai', 'nunca'),
    V('già', 'già', 'já'),
    V('ancora', 'ancora', 'ainda'),
    V('oggi', 'oggi', 'hoje'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('De facile forme o advérbio: ___'),
    answer: 'facilmente',
    hint: T('Apague o -e do adjetivo antes de -mente.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual advérbio vem de cattivo?'),
      options: [T('cattivamente'), T('male'), T('malmente'), T('peggiormente')],
      answer: 1,
      hint: T('Este grupo não segue a regra.'),
    },
    {
      kind: 'fill',
      prompt: T('De dolce forme o advérbio: ___'),
      answer: 'dolcemente',
      hint: T('Adjetivo em -e: some o -e.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase está correta?'),
      options: [
        T('Maria parla lentamente.'),
        T('Maria parla lenta.'),
        T('Maria parlano lentamente.'),
        T('Maria parla lentamentes.'),
      ],
      answer: 0,
      hint: T('O advérbio em -mente não flexiona.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('O advérbio de modo se forma colando -mente ao adjetivo feminino singular.'),
    },
    {
      n: '2',
      text: T('Se o adjetivo termina em -e, apaga-se o -e antes de -mente: facile → facilmente.'),
    },
    { n: '3', text: T('Bene, male, meglio e peggio não seguem a regra e precisam ser decorados.') },
    { n: '4', text: T('O advérbio em -mente não flexiona: nem gênero, nem número, nem pessoa.') },
    {
      n: '5',
      text: T('A maioria dos advérbios de tempo e de quantidade não vem de adjetivo nenhum.'),
    },
  ],
  notes: [
    {
      label: T('O erro do dois -e'),
      text: T(
        'A dúvida mais comum é manter o {-e} do adjetivo e acrescentar {-mente} inteiro, o que produz {facilmente} com dois {-e} finais. Apague primeiro, cole depois: {facile} fica {facil}, e {facil} mais {-mente} dá {facilmente}.',
      ),
    },
    {
      label: T('Melhor, e não mais bem'),
      text: T(
        'O comparativo de {bene} é {meglio}, e é por isso que nos evangelhos a expressão {Meglio è …} aparece tão menudo. O português espera {più bene}, que em italiano soa literário e quase nunca se escreve.',
      ),
    },
  ],
  examples: [
    { text: 'Parla lentamente.', gloss: T('Fala devagar.') },
    { text: 'Legge facilmente.', gloss: T('Lê facilmente.') },
    { text: 'Dorme bene.', gloss: T('Dorme bem.') },
    { text: 'Ha dormito peggio.', gloss: T('Dormiu pior.') },
    { text: 'Oggi è già tardi.', gloss: T('Hoje já é tarde.') },
    { text: 'Non parla mai.', gloss: T('Nunca fala.') },
    { text: 'Sara come un albero.', gloss: T('Será como uma árvore.') },
    { text: 'Camminano lentamente lungo la strada.', gloss: T('Caminham devagar pela estrada.') },
  ],
  tables: [
    {
      caption: T('Adjetivo e advérbio'),
      head: ['Aggettivo', 'Femminile', 'Avverbio'],
      rows: [
        ['lento', 'lenta', 'lentamente'],
        ['facile', '(invariabile)', 'facilmente'],
        ['veloce', '(invariabile)', 'velocemente'],
        ['breve', '(invariabile)', 'brevemente'],
        ['dolce', '(invariabile)', 'dolcemente'],
        ['forte', 'forte', 'fortemente'],
        ['felice', 'felice', 'felicemente'],
        ['costante', 'costante', 'costantemente'],
      ],
    },
    {
      caption: T('Irregulares e sem origem'),
      head: ['Avverbio', 'Glossa', 'Viene da'],
      rows: [
        ['bene', 'bene', 'buono'],
        ['male', 'male', 'cattivo'],
        ['meglio', 'meglio', 'bene'],
        ['peggio', 'peggio', 'bene'],
        ['sempre', 'siempre', '—'],
        ['mai', 'nunca', '—'],
        ['già', 'ya', '—'],
        ['ancora', 'todavía', '—'],
        ['oggi', 'hoy', '—'],
        ['domani', 'mañana', '—'],
        ['adesso', 'ahora', '—'],
        ['allora', 'entonces', '—'],
      ],
    },
  ],
};
