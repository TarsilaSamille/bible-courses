import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  section: T('Escrita'),
  title: T('Onde vai o espaço: a escrita coreana tem duas camadas'),
  subtitle: T(
    'O bloco de sílaba é fixo e o espaçamento é regra: um espaço depois de cada partícula, nenhum antes do verbo, e três exceções que colam',
  ),
  body: C(`## Duas camadas, e só uma é livre

O mandarim e o japonês não usam espaços, e a fronteira da palavra fica na cabeça de quem lê, não na página. O coreano usa, e é a única língua deste projeto que obriga o leitor a ver a fronteira marcada. A dificuldade parece imediatamente maior do que em mandarim, e o primeiro engano é achar que ela é maior. Ela é mais simples, porque o coreano entrega um critério mecânico e o mandarim não entrega nenhum.

O detalhe que amarra tudo: a escrita coreana tem DUAS camadas, e elas são de naturezas diferentes. A camada de baixo é o bloco de sílaba, e o bloco não se negocia: é um quadrado, uma sílaba, com a anatomia fixa de sempre. A camada de cima é o espaço, e essa camada é uma regra gramatical. É por isso que o mesmo bloco de sílaba aparece colado num ponto do texto e separado noutro, sem que nada tenha mudado nele: o que muda é a camada de cima. Quem procura no bloco a explicação do espaço procura na coisa errada.

E a regra de ouro cabe em uma frase: um espaço DEPOIS de cada partícula, NENHUM espaço antes do verbo, e todo o resto é uma palavra. Repare nos dois lados: onde a partícula é a última coisa da palavra, o espaço vem depois; onde o verbo é a primeira coisa da palavra, o espaço vem antes. Uma partícula nunca é a primeira coisa de uma palavra, e um verbo nunca é a última. Uma frase é uma sequência de palavras onde as partículas vão sempre no fim e os verbos sempre no começo.

O detalhe fino está em "depois de cada partícula" e não "entre duas palavras": a partícula mais colada de todas é {ui}, que gruda no substantivo e é seguida do modificador. Uma palavra pode ter partícula no fim e ainda assim não ter nada depois dela, e é o fim de frase que resolve.

## A regra de ouro, medida

"Eu como" em coreano é {naneun} {ppang-eul} {meokneunda}: três palavras, três espaços, três partículas, pronome com partícula de tópico; substantivo com partícula de objeto; verbo com terminação final. A terminação final {da} é o último bloco do verbo, e o verbo não se separa dela: é o verbo fechado, e a frase terminou. Ninguém separa o final de uma palavra em português, e em coreano é a mesma coisa com uma partícula no lugar do sufixo.

A tabela central é essa conta, e ela é toda a regra de ouro somada linha por linha. O que o leitor precisa internalizar não é a lista, é o critério: se a peça é partícula, o espaço já está decidido e é depois dela; se a peça é verbo, o espaço já está decidido e é antes dele; se a peça é qualquer outra coisa, não há decisão a tomar, porque tudo o mais é uma palavra só. A regra de ouro resolve a esmagadora maioria dos casos sem que ninguém precise pensar em nada, e o que sobra para pensar são as exceções.

Por que partícula e não substantivo? Porque a partícula é a peça que existe justamente para declarar função gramatical, e uma peça que declara função precisa de um marcador de fronteira antes de a próxima função começar. O substantivo já é visível por si mesmo, é o pedaço grande, o que tem nome próprio no dicionário. A partícula é invisível, e por isso precisa de espaço em volta para não ser engolida pela palavra vizinha. O espaço coreano não é enfeite: é o ponto e vírgula da frase.

## As três exceções que colam

Primeira exceção: o número. Numeral, contador e substantivo formam um grupo colado, {hann} {gwon} {seojeul}, "um livro", e as três peças são uma palavra só. O numeral é a única coisa do coreano que se cola ao que vem ANTES dele, porque é o único item cuja fronteira à esquerda precisa ser marcada e cuja fronteira à direita é invisível. Repare no que sobra: a partícula {ui} de posse também está colada, e o que separa o grupo do modificador é o próprio espaço da regra de ouro.

Segunda exceção: o nome próprio coreano. {kimjeongsu} é três blocos e uma palavra só, e nenhum espaço separa as sílabas do nome. A razão é a mesma da primeira exceção e vale para as duas: entre os blocos do nome não há partícula nenhuma, e sem partícula não há fronteira para o espaço marcar. Quem escreve {kim} {jeongsu} separado não está errando o nome: está inventando um espaço onde a língua nunca teve uma fronteira. Nomes estrangeiros se comportam de outro jeito: são estrangeirizados para o padrão coreano e recebem partícula como qualquer substantivo.

Terceira exceção, e a mais difícil: o pronome que se funde com a partícula. {urireul} é três blocos, nós com partícula de objeto, e é uma palavra só. O pronome absorve a partícula, e o que era duas peças virou uma. A dificuldade é real porque o resultado é uma palavra que tem três blocos e nenhuma partícula visível no fim, que é justamente o sinal que o leitor usa para saber onde está a fronteira. A simetria fecha o sistema: uma palavra tem espaço depois de si quando termina em partícula, e não tem quando a partícula foi absorvida ou nunca existiu. As três exceções são o mesmo caso, partícula ausente e espaço ausente.

## A recusa histórica e o gancho bíblico

Coreanos antigos escreviam colado, como o japonês, e o espaço obrigatório foi imposto pelo governo em 1987. Houve resistência, o "chamo", o movimento contra o espaço, e o movimento perdeu. Isso muda o que está sendo ensinado: a ortografia coreana não é uma verdade natural sobre a língua, é uma decisão política que venceu uma discussão e virou lei. As partículas não mudaram em 1987; o que mudou foi um decreto sobre onde colocar uma marca na página. Nenhuma palavra mudou de som, nenhuma frase mudou de sentido, e mesmo assim o documento de hoje não se parece com o de ontem.

O gancho bíblico amarra as duas metades. A tradução coreana de 1917, a primeira em coreano, é quase toda hanja e o coreano em hanja do começo não escrevia as partículas: elas eram recuperadas da forma do substantivo e do contexto. Uma partícula que não é escrita não tem palavra em volta, e uma palavra sem partícula não tem espaço. Um versículo coreano de 1917 tem uma partícula visível, a do sujeito, e outra ausente, a de tópico; e o espaço em volta da ausente simplesmente não existe. Na Bíblia coreana atual a mesma frase tem as duas partículas escritas e, portanto, os dois espaços. O que muda entre 1917 e 1961 é tanto a ortografia quanto o registro, e o registro já apareceu.

E há um reencontro bonito disso. Por volta de 1980, numa edição da CMOS, o espaço entre dois grupos já não era espaço: era uma partícula de sentido, lido como "mediante", por meio de. Era a prova de que o espaço coreano é material gramatical de verdade e não convenção de composição, porque há uma edição em que ele significa alguma coisa. É o oposto do mandarim, onde a fronteira é invisível e precisa ser adivinhada: aqui a fronteira é obrigatória, e mesmo assim pode carregar sentido.
`),
  vocab: [
    V('naneun', '나는', 'eu: pronome com partícula de tópico, já colado (naneun)'),
    V('eun', '은', 'tópico depois de palavra com consoante final (eun)'),
    V('ppang', '빵', 'pão; pão do versículo de João 6:9 (ppang)'),
    V('eul', '을', 'objeto direto depois de palavra com consoante final (eul)'),
    V('meokneunda', '먹는다', 'como: o verbo cuja terminação já é o sujeito (meokneunda)'),
    V('hann', '한', 'um; o numeral coreano, sempre com consoante final (hann)'),
    V('gwon', '권', 'contador de livros e de rolos de papel (gwon)'),
    V('ui', '의', 'partícula genitiva, de, que liga um grupo ao outro (ui)'),
    V('seojeul', '책', 'livro (seojeul)'),
    V(
      'kimjeongsu',
      '김정수',
      'Kim Jeong-su: nome próprio coreano de três blocos e uma palavra só (kimjeongsu)',
    ),
    V(
      'urireul',
      '우리를',
      'nós como objeto: pronome fundido com a partícula, três blocos e uma palavra (urireul)',
    ),
    V('mal', '말', 'palavra; o Verbo no prólogo de João (mal)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A escrita coreana tem duas camadas: o bloco de sílaba, que é fixo, e o espaçamento, que é regra. O mesmo bloco aparece colado ou separado conforme a camada de cima.',
      ),
    },
    {
      n: '2',
      text: T(
        'Regra de ouro: um espaço depois de cada partícula, nenhum espaço antes do verbo, e todo o resto é uma palavra só.',
      ),
    },
    {
      n: '3',
      text: T(
        'Numeral, contador e substantivo são colados: {hann} + {gwon} + {seojeul} é uma palavra. O numeral é a única coisa que se cola ao que vem antes.',
      ),
    },
    {
      n: '4',
      text: T(
        'Nome próprio coreano é uma palavra só, por mais blocos que tenha: {kimjeongsu} são três blocos colados. Nome estrangeiro é estrangeirizado e recebe partícula como qualquer substantivo.',
      ),
    },
    {
      n: '5',
      text: T(
        'Pronome fundido com partícula é uma palavra só, mesmo com três blocos: {urireul}. Simetria que fecha a lição: partícula ausente, espaço ausente.',
      ),
    },
  ],
  notes: [
    {
      label: T('O espaço é uma decisão de política, não de língua'),
      text: T(
        'Os coreanos antigos escreviam colado, como o japonês. O espaço obrigatório foi imposto pelo governo em 1987, e o "chamo", o movimento contra o espaço, perdeu. Nenhuma palavra mudou de som e nenhuma frase mudou de sentido; o que mudou foi um decreto sobre onde colocar uma marca na página. A ortografia é uma decisão política — e depois de vencida, é lei.',
      ),
    },
    {
      label: T('O espaço como partícula de sentido'),
      text: T(
        'Por volta de 1980, numa edição da CMOS, o espaço entre dois grupos já não era espaço: era lido como "mediante", por meio de. É a prova de que o espaço coreano é material gramatical e não convenção de composição. E é o oposto do mandarim da lição 4 do curso zh, onde a fronteira da palavra é invisível e precisa ser adivinhada.',
      ),
    },
  ],
  examples: [
    {
      text: '나는 빵을 먹는다',
      gloss: T(
        'na-neun ppang-eul meok-neun-da — eu como: três palavras, três partículas no fim de cada uma, três espaços',
      ),
    },
    {
      text: '한 권의 책이',
      gloss: T(
        'hann gwon-ui chaek-i — um livro: numeral, contador e partícula colados; o substantivo é uma palavra só',
      ),
    },
    {
      text: '김정수 씨',
      gloss: T(
        'kim jeong-su ssi — Kim Jeong-su: três blocos dentro de uma palavra, e o honorífico separado por espaço',
      ),
    },
    {
      text: '좋은 책 한 권',
      gloss: T(
        'joeun chaek hann gwon — um bom livro: substantivo é palavra, o numeral cola no contador',
      ),
    },
    {
      text: '말이',
      gloss: T(
        'mal-i — a Palavra: o substantivo e a partícula são uma palavra só, sem espaço nenhum entre os dois',
      ),
    },
  ],
  tables: [
    {
      caption: T('A regra de ouro, medida peça por peça'),
      head: [T('Palavra (romanização)'), T('O que ela é'), T('Onde fica o espaço')],
      rows: [
        [T('naneun'), T('pronome eu + partícula de tópico'), T('depois dela')],
        [T('ppang-eul'), T('substantivo pão + partícula de objeto direto'), T('depois dela')],
        [
          T('meokneunda'),
          T('verbo comer, com a terminação final no fim'),
          T('nenhum: o verbo é a primeira peça da sua palavra'),
        ],
        [T('mal-i'), T('substantivo Palavra + partícula de sujeito'), T('depois dela')],
        [
          T('hann gwon-ui chaek'),
          T('numeral + contador + partícula + substantivo'),
          T('nenhum dentro do grupo: é a exceção do número'),
        ],
        [
          T('qualquer substantivo sozinho'),
          T('substantivo sem partícula nenhuma'),
          T('não se decide: é uma palavra só'),
        ],
      ],
    },
    {
      caption: T('As três exceções que colam, e o que ellas têm em comum'),
      head: [T('Caso'), T('O que se cola'), T('Exemplo (romanização)'), T('Quantos blocos')],
      rows: [
        [
          T('numeral'),
          T('numeral, contador e partícula, com o substantivo'),
          T('hann gwon-ui chaek'),
          T('quatro'),
        ],
        [
          T('nome próprio coreano'),
          T('todos os blocos do nome, em qualquer posição'),
          T('kimjeongsu'),
          T('três'),
        ],
        [
          T('pronome fundido com partícula'),
          T('o pronome e a partícula que ele absorveu'),
          T('urireul'),
          T('três'),
        ],
        [
          T('o caso comum, para contraste'),
          T('substantivo e partícula, só isso'),
          T('ppang-eul'),
          T('dois'),
        ],
      ],
    },
    {
      caption: T('Onde a fronteira da palavra fica em cada uma das três línguas'),
      head: [
        T('Língua'),
        T('Usa espaço'),
        T('Onde a fronteira está marcada'),
        T('Onde está a lição'),
      ],
      rows: [
        [
          T('mandarim'),
          T('não'),
          T('na cabeça do leitor: três caracteres formam quase sempre uma palavra'),
          T('a lição 4 do curso zh'),
        ],
        [T('japonês'), T('não'), T('no kanji; o kana puro é colado'), T('a lição 1 do curso ja')],
        [
          T('coreano'),
          T('sim, obrigatório desde 1987'),
          T('na partícula: é ela que manda no espaço'),
          T('esta lição'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Onde vai o espaço antes de um verbo coreano?'),
    options: [
      T('imediatamente antes dele'),
      T('imediatamente depois dele'),
      T('entre o verbo e a sua terminação final'),
      T('não há regra: o espaçamento é livre'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "eu como": o pronome "eu" com a partícula de tópico é 나____'),
      answer: '는',
    },
    {
      kind: 'match',
      prompt: T('Ligue cada caso ao que se cola na escrita coreana'),
      pairs: [
        { a: T('numeral, contador e substantivo'), b: T('tudo junto: uma palavra só') },
        { a: T('nome próprio coreano'), b: T('três blocos, uma palavra só') },
        { a: T('pronome fundido com partícula'), b: T('três blocos, uma palavra só') },
        { a: T('qualquer palavra terminada em partícula'), b: T('o espaço vem depois dela') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual destas afirmações sobre o espaçamento coreano é verdadeira?'),
      options: [
        T('o espaço coreano foi imposto por decisão do governo em 1987'),
        T('o coreano nunca usou espaço e hoje usa por norma da ONU'),
        T('o espaço é onde a sílaba perde a vogal'),
        T('as partículas se escrevem sempre separadas, com espaço'),
      ],
      answer: 0,
    },
  ],
};
