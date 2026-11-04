import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  section: T('A sintaxe e a tradução'),
  title: T('Ordem das palavras: a última é a notícia'),
  subtitle: T('em russo nada é fixo, e o que fica no fim é o que o narrador está dizendo'),
  body: C(`
## Ordem livre, e o que ela faz

A ordem das palavras em russo é livre no sentido mais forte: as três peças de uma oração podem ocupar qualquer posição, e nenhuma delas fica ilegível por isso. В начале было Слово e Слово было в начале dizem a mesma coisa, e a segunda é a que a teologia prefere, porque Слово é o assunto e o assunto vai para o começo quando a frase é sobre ele.

Isso só é possível porque o caso já marcou a função de cada palavra. Se cada pedaço da frase já disse que papel ele cumpre, a posição deixa de carregar informação. Em português a ordem faz parte da informação: "vi o homem na rua" e "na rua vi o homem" põem o foco em lugares diferentes, e trocar é mudar o sentido.

Em russo trocar também muda o sentido, mas muda outra coisa: **o que vai para o fim é o que é novo, é aquilo sobre o que o narrador está falando agora.** O resto é contexto, e o contexto vai para a frente. Essa é a regra prática, e ela vale mais do que qualquer lista de posições proibidas.

## O que costuma ficar onde

O que tem posição marcada é a negação. Не precede o verbo, e quando há um sujeito e um verbo, o не quase sempre fica antes do verbo e não antes do sujeito. Compare Он не читал книгу e Не он читал книгу: a primeira nega o ato, a segunda nega que tenha sido ele.

O que também tem posição marcada é aquilo que se quer contrastar. Em Это не Бог, а человек, o не vai na palavra que é negada e o а na que a substitui. O substantivo que chega atrasado na frase é aquele sobre o qual o narrador insiste, e é por isso que a prosa russa é difícil para quem lê outra língua.

O que não tem posição marcada é quase tudo o mais: sujeito, verbo transitivo, objeto direto, adjunto adverbial. Podem trocar de lugar e a gramática não reclama. A ressalva é que o verbo raramente abre a frase na narrativa escrita, e o sujeito raramente fica no fim.

## O que a liberdade faz com quem traduz

Para quem traduz, a liberdade é um problema e não uma vantagem. A tradução para uma língua de ordem fixa precisa **escolher** onde vai cada elemento, e a escolha é uma interpretação. Se o original é И Слово стало плотию, e o tradutor põe o verbo no fim da frase feminina, ele produziu uma leitura; se põe no começo, produziu outra.

O caso mais interessante é a information que não está expressa. Слово Бога é genitivo, e a preposição de é a maisoptional de todas: ela pode aparecer ou não. Uma frase que omite a informação pode ser reescrita de duas maneiras, e as duas reescritas põem a informação em lugares diferentes da frase.

O risco simétrico é o oposto: quem traduz em russo pode colocar no fim qualquer palavra que o mandar para lá, e o leitor vai entender que aquela é a notícia. Se o tradutor não tinha essa intenção, terá mudado o sentido sem querer.

## O gancho: a mesma frase, quatro veces

**В начале было Слово, и Слово было у Бога, и Слово было Бог.** Quatro arranjos possíveis, e todos legíveis:

- В начале было Слово — o tempo primeiro, o que é nomeado por último
- Было Слово в начале — o verbo na frente; mais literário, mais antigo
- Слово было в начале — o assunto primeiro; é a leitura que interessa a teologia
- В начале Слово было — quase umaeva, e o ouvinte estranha

A segunda e a terceira são a mesma frase com a informação em lugares diferentes, e a diferença é de ênfase, não de sentido. O que muda entre elas é o que o narrador quer que o leitor faça primeiro. **Никто не видел Бога** põe Deus primeiro; **Бога никто не видел** põe Deus por último, e o segundo é uma afirmação sobre Deus e não sobre as pessoas.
`),
  vocab: [
    V('В начале было Слово', 'начало', 'no princípio era a Palavra'),
    V('Слово было в начале', 'слово', 'a Palavra era no princípio; o assunto primeiro'),
    V('Было Слово в начале', 'быть', 'era a Palavra no princípio; o verbo na frente'),
    V('Он не читал книгу', 'не', 'ele não leu o livro; a negação nega o ato'),
    V('Не он читал книгу', 'не', 'não foi ele quem leu; a negação nega o sujeito'),
    V('Это не Бог, а человек', 'а', 'isto não é Deus, mas um homem; contraste'),
    V('Слово Бога', 'бог', 'a Palavra de Deus; genitivo sem preposição'),
    V('никто', 'никто', 'ninguém'),
    V('Никто не видел Бога', 'видеть', 'ninguém viu Deus; a negação antes do verbo'),
    V('Бога никто не видел', 'бог', 'a Deus ninguém o viu; o assunto vai para o fim'),
    V('в конце', 'конец', 'no fim'),
    V('порядок слов', 'порядок слов', 'ordem das palavras'),
    V('рема', 'рема', 'informação nova da oração'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em Никто не видел Бога, o que fica no fim?'),
    options: [T('A negação'), T('O sujeito'), T('O objeto')],
    answer: 2,
    hint: T(
      'A regra é que o que vai para o fim é a informação nova. Aqui o que é dito é sobre Deus, não sobre quem não viu.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: ___ слово было в начале'), answer: 'С' },
    {
      kind: 'choose',
      prompt: T('Onde o negador normalmente fica?'),
      options: [T('Depois do verbo'), T('Antes do verbo'), T('No fim da frase')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: Никто ___ видел Бога'), answer: 'не' },
  ],
  rules: [
    {
      n: '1',
      text: T('A ordem das palavras é livre porque o caso já marcou a função de cada palavra.'),
    },
    { n: '2', text: T('O que vai para o fim é a informação nova; o que vem antes é contexto.') },
    { n: '3', text: T('O negador fica antes do verbo: {Он не читал}, e não Ele não leu.') },
    {
      n: '4',
      text: T(
        'O verbo raramente abre a frase na narrativa escrita, e o sujeito raramente fecha a frase.',
      ),
    },
    {
      n: '5',
      text: T(
        'Uma omissão do original pode virar uma informação explícita em qualquer posição, e a posição escolhida é do tradutor.',
      ),
    },
  ],
  notes: [
    {
      label: T('Tema e rema sem jargão'),
      text: T(
        'A crítica literária chama de tema o que se sabe e de rema o que se diz. Em russo, a ordem das palavras é a realizeação mais direta dessa distinção: o rema vai para o fim, e o contexto vem antes. Quem traduz para uma língua de ordem fixa perde a marca, porque a posição faz o trabalho que a partícula faria em outra língua.',
      ),
    },
    {
      label: T('A liberdade que traduz mal'),
      text: T(
        'Se um original em russo põe a informação nova no fim, e a língua de destino tem ordem fixa, o tradutor tem duas escolhas: respeitar a ordem antiga, que fica violenta, ou reescrever, que põe a informação nova em outro lugar. A segunda escolha é legítima e é inevitável. O que não é legítimo é reescrever sem decidir, e aí o leitor da tradução lê mais ênfase do que o original tinha.',
      ),
    },
  ],
  examples: [
    { text: 'В начале было Слово', gloss: T('no princípio era a Palavra; o substantivo no fim') },
    { text: 'Слово было в начале', gloss: T('a Palavra era no princípio; o assunto primeiro') },
    { text: 'Он не читал книгу', gloss: T('ele não leu o livro; a negação nega o ato') },
    { text: 'Не он читал книгу', gloss: T('não foi ele quem leu; a negação no sujeito') },
    {
      text: 'Это не Бог, а человек',
      gloss: T('isto não é Deus, mas um homem; o contraste está marcado'),
    },
    { text: 'Слово Бога', gloss: T('a Palavra de Deus; o de é uma preposição opcional') },
    { text: 'Никто не видел Бога', gloss: T('ninguém viu Deus; a informação nova é Deus') },
    { text: 'Бога никто не видел', gloss: T('a Deus ninguém o viu; o assunto vai para o fim') },
    { text: 'И Слово стало плотию', gloss: T('e o Verbo se fez carne; o verbo no meio') },
    { text: 'Это не Бог, а человек', gloss: T('a segunda metade da frase é carregada pelo а') },
  ],
  tables: [
    {
      caption: T('A mesma frase em quatro posições'),
      head: [T('Ordem'), T('Frase'), T('O que fica no fim'), T('Leitura')],
      rows: [
        [
          T('tempo, verbo, nome'),
          T('В начале было Слово'),
          T('Слово'),
          T('o que é nomeado vem por último'),
        ],
        [
          T('verbo, nome, tempo'),
          T('Было Слово вBeginning'),
          T('в начале'),
          T('mais literário, mais antigo'),
        ],
        [T('nome, verbo, tempo'), T('Слово было в начале'), T('в начале'), T('o assunto primeiro')],
        [
          T('tempo, nome, verbo'),
          T('В начале Слово было'),
          T('было'),
          T('estranho para o ouvinte'),
        ],
      ],
    },
    {
      caption: T('O que tem posição marcada'),
      head: [T('Elemento'), T('Onde fica'), T('Exemplo'), T('Por quê')],
      rows: [
        [T('o negador'), T('antes do verbo'), T('Он не читал'), T('nega o verbo, não o sujeito')],
        [
          T('o contraste'),
          T('antes da segunda peça'),
          T('не Бог, а человек'),
          T('a e é a segunda peça'),
        ],
        [
          T('o sujeito'),
          T('em geral no começo'),
          T('Он не читал книгу'),
          T('é onde o leitor espera'),
        ],
        [
          T('o verbo'),
          T('em geral no meio ou no fim'),
          T('было Слово в начале'),
          T('raramente abre a narrativa'),
        ],
        [T('a informação nova'), T('no fim'), T('Бога никто не видел'), T('é o rema')],
      ],
    },
    {
      caption: T('O que a ordem livre faz com a tradução'),
      head: [T('Fenômeno'), T('O que acontece'), T('Exemplo')],
      rows: [
        [
          T('informação omitida'),
          T('pode virar explícita em qualquer posição'),
          T('Слово Бога, Слово от Бога'),
        ],
        [T('ênfase'), T('muda com a posição do rema'), T('Бога никто не видел')],
        [T('contraste'), T('depende de a e e não'), T('Это не Бог, а человек')],
        [
          T('sujeito implícito'),
          T('o verbo às vezes o carrega sozinho'),
          T('Идём, quer dizer eu e tu'),
        ],
        [T('ênfase literária'), T('é uma escolha, não um erro'), T('Было Слово в начале')],
      ],
    },
  ],
};
