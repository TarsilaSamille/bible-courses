import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  section: T('A sintaxe e a tradução'),
  title: T('As traduções russas e o que elas decidem'),
  subtitle: T('было e стало no mesmo capítulo: a escolha do verbo muda o versículo'),
  body: C(`
## Uma tradução é uma escolha de verbo

Toda tradução escolhe um verbo, e escolher um verbo em russo é escolher um aspecto. Não há tradução neutra de um verbo grego para um verbo russo, porque o grego tem uma só forma de aoristo e o russo tem duas, e cada uma delas diz uma coisa diferente.

O exemplo mais limpo está dentro do mesmo capítulo. João 1:1 diz **В начале было Слово**, e João 1:14 diz **И Слово стало плотию**. O mesmo verbo, em duas orações do mesmo texto, com dois verbos russos diferentes. Было é o verbo de estado: a Palavra era. Стало é o perfectivo de tornar-se: a Palavra se fez.

Se o tradutor tivesse escrito стало em 1:1, o versículo passaria a dizer que a Palavra foi criada, e não que ela era. Se tivesse escrito было em 1:14, o versículo passaria a dizer que a Palavra era carne, e não que se fez carne. **Nenhuma das duas leituras é absurda, e as duas são teologicamente diferentes.** A escolha do tradutor não é estilística: é uma afirmação sobre o que aconteceu.

E é por isso que traduções russas divergem na primeira linha de João. Onde o Synodal escreve начало быть, uma tradução mais antiga pode escrever стать sem o perfectivo, e onde outra escreve сотворено, uma terceira escreve создано. O leitor que tem duas traduçõesRussian na mão está com dois outros textos, não com o mesmo texto duas vezes.

## A palavra que o grego resolve e o russo não

O grego antigo tem uma partícula que o russo traduz por uma palavra inteira, e essa palavra precisa de um verbo. Οὐκ ἔστιν, em João 3:16 e em outros lugares, é uma negação que em grego é uma partícula antes do verbo. O russo resolve com нет, que é um verbo, e que por isso exige um caso: нет Бога, não há Deus, com genitivo.

A consequência é que um pedaço do grego que não tem verbo em russo vira um verbo em russo, e o verbo novo traz caso, número e aspecto que o grego não trazia. Οὐκ ἔστιν não diz de quem é a ausência, e o genitivo russo é uma decisão do tradutor.

O mesmo acontece com o negativo grego do versículo 12: ὅσοι δὲ ἔλαβον αὐτόν, quantos receberam. A palavra grega é um pronome relativo, sem caso marcado no texto. O russo escreve которые, que precisa de caso, e a TRADUÇÃO precisa saber qual. Quem não sabe lê которые приняли como objeto e inverte o sentido do versículo.

## O que muda entre traduções, e o que fazer quando elas divergem

Uma tradução para o português perde o aspecto na maioria das vezes, porque o português não tem o par. Mas a perda não é simétrica: o perfectivo normalmente sobrevive melhor que o imperfectivo, porque o perfectivo corresponde ao pretérito perfeito e o imperfectivo não tem onde ir.

O resultado é uma assimetria que vale a pena conhecer. As ações pontuais continuam visíveis no texto português, e os processos desaparecem. João 1:5 é o exemplo: светит é imperfectivo e traduzido por um presente, e o grego tinha um presente. Quem lê a tradução portuguesa tem a impressão de que o versículo não diz nada sobre a duração da luz, e o original russo diz, e o grego dizia.

O inverso também acontece e produz erros do outro tipo. Было em 1:1 é um verbo sem aspecto que em português vira "era", e было não diz se a situação durou ou não. Um tradutor que escreve "existia" sugere um estado duradouro que o original não afirma.

Quatro passos, e nenhum deles exige o grego para os três primeiros.

Primeiro: compare a terminação. Se uma tradução traz Слово было e a outra traz Слово было Бог, a diferença é de caso e não de sentido. Segundo: procure o perfectivo na forma do verbo. Стало contra было é uma decisão de aspecto, e ela é visível sem saber grego. Terceiro: veja se a negação mudou de verbo. Se uma tradução tem нет e a outra tem не, são frases de categorias diferentes.

Quarto, e é o mais difícil: pergunte ao original grego apenas o verbo, não a frase inteira. Quem lê grego o suficiente para identificar um aoristo já sabe se a tradução preserveu o aspecto, e a pergunta é uma só. Quem não lê grego pode fazer a pergunta a quem lê, e a resposta cabe em cinco palavras.

## O gancho: uma palavra, dois versículos, duas teologias

O melhor exercício de leitura Russian que existe são duas traduções do mesmo versículo, lado a lado. Se as duas diferem em um verbo, a diferença é teológica, e não estilística. Se diferem em um caso, a diferença é gramatical, e o leitorRussian pode decidir sozinho qual das duas está certa.

E vale o inverso: um texto Russian em que todos os verbos são da mesma família de aspecto perde a informação que o grego tinha. Um tradutor que escreve só perfectivos onde o original alternava fez uma escolha, e o leitor perde a distinção entre o que dura e o que acontece.

A Sínodo Russian de 1876 é uma tradução que respeita o aspecto na maior parte do tempo, e é por isso que ela continua sendo a referência. Mas nenhuma tradução é o grego, e a distância entre elas é a medida honesta do que uma tradução faz: não reproduzir o texto, escolher por que texto se está lendo.
`),
  vocab: [
    V('В начале было Слово', 'быть', 'no princípio era a Palavra; estado (Jo 1:1)'),
    V('И Слово стало плотию', 'стать', 'e o Verbo se fez carne; mudança (Jo 1:14)'),
    V('начало быть', 'начать', 'começou a ser; a fórmula de 1:3'),
    V('сотворено', 'сотворить', 'foi criado; particípio perfectivo'),
    V('создано', 'создать', 'foi criado; outra escolha de perfectivo'),
    V('нет Бога', 'нет', 'não há Deus; verbo de negação com genitivo'),
    V('не было Бога', 'быть', 'não havia; negação verbal, sem caso novo'),
    V('которые приняли', 'который', 'os que receberam; relativo no nominativo'),
    V('светит', 'светить', 'brilha; imperfectivo de duração'),
    V('обитало', 'обитать', 'permaneceu; imperfectivo de estado'),
    V('явил', 'явить', 'manifestou; perfectivo de fechamento'),
    V('перевод', 'перевод', 'tradução'),
    V('аспект', 'аспект', 'aspecto'),
    V('синодальный', 'синодальный', 'sinodal; da tradução de 1876'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Se um tradutor escreve стало em Jo 1:1, o que muda?'),
    options: [
      T('O tempo do verbo'),
      T('O aspecto: de estado passa a ser de mudança'),
      T('O caso da preposição'),
    ],
    answer: 1,
    hint: T(
      'Стало é o perfectivo de tornar-se. Trocar было por стало muda o que o versículo afirma, e não apenas como ele é escrito.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete Jo 1:1: В начале ___ Слово'), answer: 'было' },
    {
      kind: 'choose',
      prompt: T('Qual palavra é o perfectivo de tornar-se?'),
      options: [T('было'), T('стало'), T('обитало')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: ___ Бога (não há Deus)'), answer: 'нет' },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Toda tradução escolhe um verbo, e escolher um verbo em russo é escolher um aspecto.',
      ),
    },
    {
      n: '2',
      text: T(
        '{Было} e {стало} são o mesmo infinitivo com verbos diferentes, e a diferença entre eles é uma afirmação sobre o que aconteceu.',
      ),
    },
    { n: '3', text: T('{Нет} é um verbo e exige um caso; οὐκ ἔστιν é uma partícula e não exige.') },
    {
      n: '4',
      text: T(
        'Quem traduz para uma língua sem aspecto perde primeiro o imperfectivo, e não o perfectivo.',
      ),
    },
    {
      n: '5',
      text: T(
        'Duas traduções que diferem em um verbo diferem teologicamente; as que diferem em um caso diferem gramaticalmente.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que o perfectivo sobrevive melhor'),
      text: T(
        'O português não tem par de aspecto, e o que falta é o imperfectivo. O perfectivo tem lugar no pretérito, então sobrevive; o imperfectivo não tem lugar nenhum, e some. A consequência é uma assimetria que se pode medir: quantas vezes uma tradução portuguesa tem um verbo de estado onde o russo tem um imperfectivo de duração. João 1:5 é o caso mais visível, e a impressão de que o versículo nada diz sobre o tempo da luz vem daí, e não do grego.',
      ),
    },
    {
      label: T('O grego que vira verbo em russo'),
      text: T(
        'οὐκ ἔστιν é uma partícula negativa mais um verbo, e em russo não háconstruction que faça isso com duas palavras. O tradutor escreve нет, que é verbo, e o verbo traz genitivo. Esse genitivo não está no grego, e é uma decisão do tradutor. O mesmo vale para os relativos: ὅσοι não tem caso marcado, e o WHICH russo precisa de um. São dois lugares em que o russo obriga o tradutor a decidir mais do que o grego o obrigava.',
      ),
    },
  ],
  examples: [
    { text: 'В начале было Слово', gloss: T('no princípio era a Palavra; estado, sem mudança') },
    { text: 'И Слово стало плотию', gloss: T('e o Verbo se fez carne; mudança, com resultado') },
    { text: 'начало быть', gloss: T('começou a ser; a fórmula de 1:3') },
    { text: 'сотворено', gloss: T('foi criado; particípio de um perfectivo') },
    { text: 'создано', gloss: T('foi criado; outra escolha de perfectivo') },
    { text: 'нет Бога', gloss: T('não há Deus; verbo que exige genitivo') },
    { text: 'не было Бога', gloss: T('não havia Deus; negação verbal, sem caso novo') },
    { text: 'которые приняли Его', gloss: T('os que o receberam; relativo no nominativo') },
    {
      text: 'И свет во тьме светит',
      gloss: T('e a luz brilha nas trevas; imperfectivo de duração'),
    },
    { text: 'Он явил', gloss: T('ele se manifestou; perfectivo que fecha o texto') },
  ],
  tables: [
    {
      caption: T('O mesmo campo semântico, três verbos russos'),
      head: [T('Verbo'), T('Aspecto'), T('O que afirma'), T('Onde aparece')],
      rows: [
        [T('быть'), T('sem aspecto'), T('um estado'), T('1:1, 1:2, 1:4')],
        [T('стать'), T('perfectivo'), T('uma mudança de estado'), T('1:14')],
        [T('начало быть'), T('perfeito composto'), T('o começo de um processo'), T('1:3')],
      ],
    },
    {
      caption: T('O que cada tradução precisa decidir'),
      head: [T('Fenômeno grego'), T('O que o russo faz'), T('O que o tradutor decide')],
      rows: [
        [T('οὐκ ἔστιν'), T('vira нет, que é verbo'), T('que caso vai para o genitivo')],
        [T('ὅσοι ἔλαβον'), T('vira которые, que precisa de caso'), T('se é sujeito ou objeto')],
        [T('aoristo'), T('vira um dos dois do par'), T('qual dos dois membros do par')],
        [T('particípio'), T('herda o aspecto do verbo'), T('qual verbo-perfectivo usou')],
      ],
    },
    {
      caption: T('A assimetria da perda de aspecto'),
      head: [T('O que se perde primeiro'), T('Porquê'), T('Como se nota')],
      rows: [
        [
          T('o imperfectivo'),
          T('o português não tem lugar para ele'),
          T('светit vira um presente sem duração'),
        ],
        [T('o perfectivo'), T('tem lugar no pretérito'), T('стало vira um pretérito normal')],
        [T('o valor de бы'), T('não há partícula no português'), T('a hipótese some inteira')],
        [T('o gerúndio'), T('o português tem poucos'), T('a duração da ação principal se perde')],
      ],
    },
  ],
};
