import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('O verbo: phrasal verbs e a partícula separável'),
  subtitle: T('turn off the light, turn the light off — o que se separa'),
  section: T('O verbo'),
  body: C(`## A partícula pode andar

Um phrasal verb é verbo mais partícula, e a partícula pode ocupar três posições. Com objeto nomeado, a forma mais comum deixa a partícula colada no verbo: {turn off the light}. A segunda põe a partícula no fim: {turn the light off}. Com pronome, só há uma posição possível: {turn it off}, porque o pronome tem de vir logo depois do verbo.

Com gerúndio, a partícula volta para depois do verbo: {turning the light off} e não {turning off the light}. Quem escreve {turning off the light} produz uma frase ambígua, em que o gerúndio pode estar modando a luz.

A regra prática cabe numa linha: **verbo, partícula, objeto**. Quando o objeto é um pronome, ele vai para o meio.

## A lista curta dos que não se separam

Há phrasal verbs em que a partícula **nunca** sai do lugar, e {look after} é o exemplo mais conhecido. {I look after the dog} está certo e {I look the dog after} está errado.

A razão é que essas partículas funcionam como preposição, e uma preposição não se separa do verbo. É por isso que a lista é curta: {look after}, {look into}, {get on with}, {put up with}, {cope with}, {run out of}, {stand by}, {take after}.

O teste para descobrir se uma unidade separa ou não é simples: forme a frase com um pronome depois do verbo. {turn it off} funciona e prova que {turn off} separa; {look it after} não funciona e prova que {look after} não separa.

## A partícula e o que ela acrescenta

A partícula quase nunca significa apenas "para algum lugar". {On} é apoio e contato, {off} é retirada, {out} é para fora ou conclusão, {up} é para cima ou aumento, {down} é para baixo ou diminuição, {away} é afastamento, {back} é retorno.

O valor muda com o verbo, e é por isso que a unidade se aprende inteira. {Give up} é desistir, {give in} é ceder, {give out} é distribuir ou esgotar, {give away} é dar de presente ou denunciar: quatro partículas e quatro verbos.

## O que a KJV faz com partícula

A KJV usa phrasal verbs com frequência e sem pedir licença: {he shall take up serpents}, {put on the armour of righteousness}, {put off anger}, {let not your hands be slack}.

Marcos 16:18 traz {take up} no sentido de pegar para cima, que é o sentido original e quase o único de {take up}: levantar algo do chão. O sentido moderno de "compreender" ({I take up your offer}) é muito posterior e não aparece no texto bíblico.

O mesmo vale para {put on}: em Romanos 13:14 é vestir, metaforicamente vestir a armadura, e não colocar algo sobre outra coisa.`),
  vocab: [
    V('turn off', 'turn', 'apagar, desligar'),
    V('turn the light off', 'turn', 'apagar a luz'),
    V('turn it off', 'turn', 'apagá-lo'),
    V('look after', 'look', 'cuidar de'),
    V('look into', 'look', 'investigar'),
    V('get on with', 'get', 'dar-se bem com'),
    V('put up with', 'put', 'aguentar'),
    V('cope with', 'cope', 'lidar com'),
    V('run out of', 'run', 'ficar sem'),
    V('stand by', 'stand', 'apoiar, ficar por perto'),
    V('give up', 'give', 'desistir'),
    V('give in', 'give', 'ceder'),
    V('give away', 'give', 'dar de presente, denunciar'),
    V('take up', 'take', 'levantar, pegar para cima'),
    V('put on', 'put', 'vestir'),
    V('put off', 'put', 'despojar-se de'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Com objeto nomeado, a partícula pode ficar colada no verbo ou ir para o fim; com pronome, ela tem de ir para o meio.',
      ),
    },
    {
      n: '2',
      text: T('Com gerúndio, a partícula volta para depois do verbo: turning the light off.'),
    },
    {
      n: '3',
      text: T(
        'Look after, look into, get on with, put up with, cope with, run out of e stand by não se separam, porque a partícula funciona como preposição.',
      ),
    },
    {
      n: '4',
      text: T(
        'O teste da separabilidade é a frase com pronome: turn it off funciona, look it after não.',
      ),
    },
    {
      n: '5',
      text: T(
        'A partícula acrescenta um sentido ao verbo, e o sentido muda de verbo para verbo: give up, give in, give away.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'Marcos 16:18 traz take up no sentido físico de levantar do chão. O sentido moderno de compreender é muito posterior e não aparece na KJV.',
      ),
    },
    {
      label: T('Diagnóstico:'),
      text: T(
        'Se o aluno escreve I look the dog after, o problema não é a posição da partícula: é que look after não é separável, e a lista dos não separáveis é curta.',
      ),
    },
  ],
  examples: [
    { text: '{turn off the light}', gloss: T('apague a luz') },
    { text: '{turn the light off}', gloss: T('apague a luz — partícula no fim') },
    { text: '{turn it off}', gloss: T('apagá-lo — pronome no meio') },
    { text: '{turning the light off}', gloss: T('apagando a luz — gerúndio') },
    { text: '{I look after the dog}', gloss: T('eu cuido do cachorro') },
    { text: '{I look the dog after}', gloss: T('errado: look after não se separa') },
    { text: '{I cannot put up with it}', gloss: T('não consigo aguentar isso') },
    { text: '{we ran out of bread}', gloss: T('acabou o pão') },
    { text: '{he shall take up serpents}', gloss: T('ele levantará serpentes — KJV') },
    { text: '{put on the armour of righteousness}', gloss: T('vestir a armadura da justiça') },
  ],
  tables: [
    {
      caption: T('Onde a partícula pode ficar'),
      head: [T('Tipo de objeto'), T('Partícula colada'), T('Partícula no fim')],
      rows: [
        [T('nome'), '{turn off the light}', '{turn the light off}'],
        [T('pronome'), T('—'), '{turn it off}'],
        [T('gerúndio'), T('—'), '{turning the light off}'],
        [T('cláusula relativa'), T('—'), '{the light he turned off}'],
      ],
    },
    {
      caption: T('Os que não se separam'),
      head: [T('Unidade'), T('Por que não separa'), T('Frase de teste')],
      rows: [
        ['{look after}', T('a partícula é preposição'), '{I look after him}'],
        ['{get on with}', T('a partícula é preposição'), '{I get on with him}'],
        ['{put up with}', T('a partícula é preposição'), '{I put up with it}'],
        ['{run out of}', T('a partícula é preposição'), '{I ran out of it}'],
        ['{stand by}', T('a partícula é preposição'), '{I stand by him}'],
      ],
    },
    {
      caption: T('O que a partícula acrescenta'),
      head: [T('Partícula'), T('Sinal nuclear'), T('Com give')],
      rows: [
        ['{on}', T('apoio, contato'), T('—')],
        ['{off}', T('separação, retirada'), T('—')],
        ['{up}', T('aumento, conclusão'), '{give up}'],
        ['{out}', T('extinção, distribuição'), '{give out}'],
        ['{away}', T('afastamento'), '{give away}'],
        ['{in}', T('rendição'), '{give in}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase está correta?'),
    options: [T('Turn off it'), T('Turn it off'), T('Turn off the it'), T('Turn the it off')],
    answer: 1,
    hint: T('Com pronome, a partícula vai para o fim: verbo, pronome, partícula.'),
  },
  exercises: [
    { kind: 'fill', prompt: T("Complete: 'Please switch ___ the light.'"), answer: 'off' },
    { kind: 'fill', prompt: T("Não se separa: 'I look ___ my little sister.'"), answer: 'after' },
    {
      kind: 'match',
      prompt: T('Ligue a unidade ao tipo.'),
      pairs: [
        { a: 'give up', b: T('desistir') },
        { a: 'give away', b: T('denunciar') },
        { a: 'put up with', b: T('aguentar') },
        { a: 'run out of', b: T('ficar sem') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('Qual frase está correta?'),
      options: [
        T('I look the dog after'),
        T('I look after the dog'),
        T('I look the after dog'),
        T('I look after dog the'),
      ],
      answer: 1,
    },
  ],
};
