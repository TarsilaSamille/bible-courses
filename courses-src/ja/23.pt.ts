import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  section: T('Leitura'),
  title: T('**{kanbun}**: ler uma frase chinesa na ordem do japonês'),
  subtitle: T(
    'Durante séculos o japonês leu os textos chineses pelos sons, e continua lendo: a ordem é a do japonês, o verbo fecha cada cláusula e as marcações à direita dizem quem manda em quem',
  ),
  body: C(`
## O ideograma como fonema

Durante séculos o japonês leu os textos chineses sem falar a língua deles, e o truque era tratar cada ideograma como se fosse uma letra. O {manyōgana} escrevia uma sílaba escolhendo o ideograma que tinha aquele som na boca do leitor, e não o som que o ideograma tinha na China. Quem precisasse do som "hana" pegava o ideograma do nariz, o mesmo que hoje se lê *bi* na leitura sino-japonesa e *hana* na leitura nativa.

E aqui a lição das duas leituras é a chave, e não um detalhe. Se o ideograma vai valer como letra, ele precisa ter um som só. Só que o kanji japonês tem dois: a on e a kun. Um leitor de {manyōgana} precisava conhecer as duas leituras para transformar o desenho em foneta, e foi essa exigência que fixou as duas listas que o japonês ainda usa. A história do {kanbun} nasce da letra: para escrever uma língua que não era a sua, o Japão teve de resolver o problema da ambiguidade do ideograma.

## A ordem é a do japonês

A frase mais famosa é {ten} {ichi} {chi} {ni}. Na China ela se lê como uma enumeração seca: céu, um; terra, duas, duas locuções sem verbo nenhum. Em {kanbun} ela vira duas frases, e são duas frases **japuesas**: uma pessoa, céu uma; duas pessoas, terra duas. O nome do lugar vem antes do numeral, o numeral aparece marcado pela partícula que diz onde, e o verbo fecha a cláusula. É a lição da ordem inteira aplicada a uma frase que nunca foi japonesa.

O {kanbun} se separa do chinês de verdade aqui: os dois idiomas colocam o verbo em lugares opostos. O chinês põe o verbo no meio da locução e o objeto depois dele; o japonês põe o verbo no fim e o objeto antes. Não existe uma leitura "correta" do par de caracteres: existem duas, e cada língua faz a sua. Por isso passar do {kanbun} para o japonês corrente não é procurar palavra por palavra, é reescrever a frase na ordem da língua que vai ler.

## As marcações que não são da palavra

Um texto de {kanbun} impresso parece não ter pontuação, e de fato não tem. No lugar dela, o leitor japonês escrevia por cima do texto o {konfutsugaki}: as marcações de leitura, desenhos pequenos ao lado dos ideogramas que dizem como lê-los. São duas famílias, e as duas precisam ser conhecidas antes da primeira palavra.

A primeira são os {kaeriten}, que dizem **qual ideograma governa qual**, e não são palavras: são sinais de pontuação com nome de ideograma. A {jōten} manda o ideograma da esquerda governar o da direita; a {geten} manda o da direita governar o da esquerda. Quando o governante alcança mais de um ideograma, ele conta em marcas numeradas: a {kazu-ten} vale para dois, e há até cinco, porque em {kanbun} um verbo raramente governa mais que isso. A segunda família é o {okurigana}, a kana que acompanha o ideograma do verbo e carrega a flexão, a mesma divisão de trabalho de sempre, com o significado no ideograma e a conjugação na kana.

Quem não conhece essas marcações lê o par ao contrário, e o erro é silencioso: o texto continua parecendo chinês, só que querendo outra coisa. É o mesmo risco de uma citação latina sem pontuação, e a solução é a mesma das duas vezes: a marcação não decora o texto, ela decora a leitura.

## O verbo para no fim, e o que sobrou do {kanbun}

A posição do verbo em {kanbun} é dupla, e a dupla vem da flexão na cláusula. O verbo vai no fim de cada cláusula, e uma cláusula em {kanbun} é uma frase: tem verbo próprio e pode ser lida sozinha. Por isso, num texto com três cláusulas, há três verbos, um no fim de cada uma, e dois deles no meio da frase. A fronteira entre as cláusulas é marcada pelo verbo, exatamente como o japonês corrente marca; quem lê procurando o verbo no fim do parágrafo erra duas vezes.

Os ideogramas de nome próprio ocupam o lugar do sujeito, e são nomes: pessoas, textos, lugares. Eles vêm antes do verbo, não admitem contador nem partícula, e é essa posição fixa que faz um trecho de {kanbun} ser lido como uma lista de nomes e de ações. É por isso que a poesia confuciana e os textos budistas são tão curtos: cada cláusula é uma unidade curta e o resto é nome. Os três clássicos chineses do currículo japonês, {daigaku}, {kōkyū} e {chūyaku}, são lidos exatamente assim, e quem estudou no Japão os leu antes de ler cualquier novela em kana.

O {kanbun} não é uma língua viva: ninguém conversa em {kanbun} há séculos. Ele sobreviveu como **registro**, e é o registro formal do Japão, documentos públicos, editoriais de jornal, projetos de lei, a prosa dos comitês. Um texto escrito em {kanbun} é um texto que está falando com autoridade. E é por isso que ele durou tanto: quando o Japão precisou escrever para o mundo, no século dezenove, ele já tinha à mão um estilo escrito de alta precisão, e o que abandonou foi ler Confúcio para passar a ler o empresário chinês.

O gancho final é bíblico, e vale por simetria. A tradução japonesa da Bíblia não é {kanbun}: é japonês corrente com ideogramas. Mas Lucas e a igreja primitiva escreviam grego, e o método de um japonês que lesse grego era exatamente o método do {kanbun}, adaptar a língua antiga à ordem da sua, sem traduzir palavra a palavra. A primeira tradução japonesa do Novo Testamento, em 1873, é o primeiro exemplo disso. E o paralelo é o latim na Europa: uma língua morta lida na ordem de outra, que virou estilo em vez de pretensão.
`),
  vocab: [
    V('kanbun', '漢文', 'a leitura de textos chineses na ordem do japonês (kanbun)'),
    V(
      'manyōgana',
      '万葉仮名',
      'o uso do ideograma pelo som japonês, e não pelo som chinês (manyōgana)',
    ),
    V(
      'konfutsugaki',
      '訓点',
      'as marcações que o leitor escreve ao lado do texto, dizendo como lê-lo (konfutsugaki)',
    ),
    V('kaeriten', '返り点', 'as marcações que dizem qual ideograma governa qual (kaeriten)'),
    V('jōten', '上点', 'marca que sobe: o ideograma da esquerda governa o da direita (jōten)'),
    V('geten', '下点', 'marca que desce: o ideograma da direita governa o da esquerda (geten)'),
    V(
      'kazu-ten',
      '三点',
      'as marcas numeradas, de um a cinco, que contam o alcance do governante (kazu-ten)',
    ),
    V('okurigana', '送り仮名', 'a kana que acompanha o ideograma e carrega a flexão (okurigana)'),
    V('ten', '天', 'céu, firmamento (ten)'),
    V('chi', '地', 'terra, chão (chi)'),
    V('ichi', '一', 'um (ichi)'),
    V('ni', '二', 'dois (ni)'),
    V(
      'daigaku',
      '大学',
      'o Grande Aprendizado, um dos três clássicos chineses do currículo japonês (daigaku)',
    ),
    V('kōkyū', '孝経', 'o Clássico da Piedade Filial, um dos três clássicos (kōkyū)'),
    V('chūyaku', '中庸', 'a Doutrina do Meio, o terceiro dos três clássicos (chūyaku)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Ler {kanbun} é ler um texto chinês na ordem do japonês: os mesmos ideogramas, outra ordem de leitura.',
      ),
    },
    {
      n: '2',
      text: T(
        'No {manyōgana} o ideograma valia como letra, e para virar letra ele tinha de ter um som só — o que obrigava a conhecer as duas leituras da lição 12, a on e a kun.',
      ),
    },
    {
      n: '3',
      text: T(
        'O verbo vai para o fim de cada cláusula, uma vez por cláusula: num trecho de três cláusulas há três verbos, e dois deles ficam no meio da frase.',
      ),
    },
    {
      n: '4',
      text: T(
        'As marcações {kaeriten} e {okurigana} não são partes da palavra: a {jōten} manda o da esquerda governar o da direita, a {geten} o contrário, e a {kazu-ten} conta até onde o governante alcança.',
      ),
    },
    {
      n: '5',
      text: T(
        'O ideograma de nome próprio é um nome, vem antes do verbo e não admite nem contador nem partícula.',
      ),
    },
  ],
  notes: [
    {
      label: T('O {manyōgana} criou a lista de nomes'),
      text: T(
        'Cada ideograma usado como foneta ganhou um nome próprio na cabeça dos leitores — "o que soa hana", "o que soa ro" — e foi sobre uma lista dessas que o Japão construiu os nomes próprios das coisas. É a mesma lista da lição 12; lá ela se chama leitura, e tem duas vozes em cada linha.',
      ),
    },
    {
      label: T('O latim da Europa é o mesmo caso'),
      text: T(
        'O letrado europeu leu latim por séculos rearranjando-o na ordem da própria língua, e o português é o resultado. O {kanbun} é a versão japonesa do mesmo fenômeno, e nenhum dos dois é tradução: é leitura.',
      ),
    },
  ],
  examples: [
    {
      text: '天一人',
      gloss: T(
        'hito, ten ni ichi — uma pessoa, no céu uma; o ideograma do céu governa o número que vem à direita',
      ),
    },
    {
      text: '地二人',
      gloss: T(
        'hito, chi ni ni — duas pessoas, na terra duas; a mesma marca invertida, com o ideograma da direita mandando',
      ),
    },
    {
      text: '學而時習之',
      gloss: T(
        'gaku, shite ji shishisu — aprender e repetir no tempo; o verbo vem no meio e no fim, e as kanas marcam a flexão',
      ),
    },
    {
      text: '大學之道',
      gloss: T(
        'daigaku no michi — o caminho do Grande Aprendizado; os dois primeiros ideogramas são nome próprio de um texto',
      ),
    },
    {
      text: '溫故而知新',
      gloss: T(
        'on kyū o shite shinjitsu — conhecendo o velho e sabendo o novo; três verbos, três cláusulas, cada uma com o seu',
      ),
    },
  ],
  tables: [
    {
      caption: T('A mesma frase em três ordens'),
      head: [T('Leitura'), T('Onde fica o numeral'), T('Onde fica o verbo')],
      rows: [
        [
          T('o chinês'),
          T('logo depois do nome, e a frase é uma enumeração'),
          T('não há verbo: a locução termina no numeral'),
        ],
        [
          T('o {kanbun}'),
          T('depois do nome, marcado pela partícula de lugar'),
          T('no fim de cada cláusula, como no japonês'),
        ],
        [T('o português'), T('depois do nome'), T('no meio: "o céu tem uma pessoa"')],
      ],
    },
    {
      caption: T('As marcações de leitura e o que cada uma manda'),
      head: [T('Marca'), T('Onde fica'), T('O que ela diz')],
      rows: [
        [
          T('{jōten}'),
          T('à esquerda do par, embaixo da linha'),
          T('o ideograma da esquerda governa o da direita'),
        ],
        [
          T('{geten}'),
          T('à direita do par, embaixo da linha'),
          T('o ideograma da direita governa o da esquerda'),
        ],
        [
          T('{kazu-ten}'),
          T('entre os ideogramas, contando de um a cinco'),
          T('até onde o ideograma marcado faz chegar a regência'),
        ],
        [
          T('{okurigana}'),
          T('logo depois do ideograma do verbo'),
          T('que flexão aquele verbo assume nesta leitura'),
        ],
      ],
    },
    {
      caption: T('Onde o verbo para em {kanbun}'),
      head: [T('Estrutura do trecho'), T('Onde está o verbo'), T('Por quê')],
      rows: [
        [
          T('uma cláusula'),
          T('no fim'),
          T('toda cláusula é uma frase, e a frase tem verbo no fim'),
        ],
        [
          T('duas ou mais cláusulas'),
          T('no fim de cada uma, e no meio do trecho'),
          T('a fronteira entre elas é marcada pelo verbo, como na lição 15'),
        ],
        [
          T('nomes próprios'),
          T('antes do verbo'),
          T('são quem faz a ação, não substantivo comum nem sujeito gramatical'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Na leitura japonesa de "uma pessoa, céu uma", quem governa o numeral?'),
    options: [
      T('o ideograma do céu, que está à esquerda, pela {jōten}'),
      T('o numeral, porque vem depois'),
      T('o ideograma do céu, que está à esquerda, pela {geten}'),
      T('nenhum: os dois ideogramas são equivalentes'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Na leitura de "pai e filho", a marca que diz que o ideograma da direita governa o da esquerda se chama ____',
      ),
      answer: 'geten',
    },
    {
      kind: 'match',
      prompt: T('Ligue a marca ao que ela faz'),
      pairs: [
        { a: T('{jōten}'), b: T('o da esquerda governa o da direita') },
        { a: T('{geten}'), b: T('o da direita governa o da esquerda') },
        { a: T('{kazu-ten}'), b: T('a regência alcança mais de um ideograma') },
        { a: T('{okurigana}'), b: T('a flexão do verbo, escrita em kana') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Por que a poesia confuciana e os textos budistas em {kanbun} são tão curtos?'),
      options: [
        T('porque cada cláusula é uma frase curta e quase tudo é nome'),
        T('porque a escrita da China tem menos caracteres que a do Japão'),
        T('porque foram escritos para crianças'),
        T('porque o texto era lido em voz alta por muitas pessoas ao mesmo tempo'),
      ],
      answer: 0,
    },
  ],
};
