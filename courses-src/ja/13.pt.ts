import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  section: T('Kanji'),
  title: T('A mesma leitura e a mesma escrita: como um kanji tem duas vozes'),
  subtitle: T(
    'Todo ideograma tem uma leitura sino-japonesa e uma leitura nativa, e é a palavra — não o desenho — que decide qual das duas soa',
  ),
  body: C(`
## Um ideograma, duas vozes

Todo kanji tem duas leituras, e as duas são igualmente verdadeiras. A **on** (on'yomi) é a leitura sino-japonesa: o ideograma entrou no Japão junto com os textos da China, e é lido com o som que tinha no mandarim. A **kun** (kun'yomi) é a leitura nativa, o som que o mesmo desenho já tinha no Japão antes de a importação. As duas vivem no mesmo caractere, e nenhuma delas é a errada.

{生} é o exemplo mais limpo que existe. Na on ele é {sei}, ou *shō* quando o tom muda por causa do ideograma vizinho, e é o que aparece em {gakusei} "estudante", onde os dois ideogramas são on. Na kun ele é {ikiru}, e é o que aparece no verbo "viver". O ideograma não mudou de lugar nenhum: mudou a palavra, e a palavra escolhe qual das duas vozes tocar.

É por isso que dois ideogramas que juntos formam uma palavra podem soar cada um à sua maneira, e é por isso que o mesmo ideograma escrito pode soar de formas diferentes conforme a palavra que ele está formando. Quem está começando trata isso como defeito do sistema, e a mesma letra deveria soar sempre igual. Não deveria, e é justamente por não soar sempre igual que o par continua vivo depois de mil anos.

## A regra de bolso: composto pede on, verbo termina em kun

A regra prática cabe numa frase. Quando os dois ideogramas formam um substantivo composto, os dois tendem a ser on; quando há verbo, o último ideograma tende a ser kun, porque é ele que carrega a flexão.

Do lado do on: {gakusei}, {kyō} "hoje", {sensei} "professor". Os três são compostos e os três são on por inteiro. {kyō} tem uma única leitura justamente porque não tem verbo nenhum dentro, e as palavras que têm só ideogramas são as mais fáceis de adivinhar. Do lado do kun: um verbo com flexão costuma ir em kun no último ideograma, com a ponta em kana, exatamente como a flexão em kana que a lição do verbo mostrou.

O caso que expõe o sistema inteiro é {ikizokuru}, "sobreviver": o primeiro ideograma está em kun, o mesmo {ikiru} "viver", e o segundo em on. Os verbetes de dicionário marcam esse segundo com um asterisco, e o asterisco é a única coisa que o leitor precisa aprender a olhar: ele avisa que aquela leitura só existe ali, dentro daquela palavra. O mesmo acontece em {tegami}, "carta", com a mão em kun e o papel em on.

## A família do kun'yomi, e os okurigana

A leitura kun quase nunca é uma só. O ideograma {生} tem quatro verbos diferentes na leitura nativa: {ikiru} "viver", {umoru} "nascer, dar à luz", {hayasu} "fazer crescer, criar" e {nou} "cultivar". São verbos distintos, com sujeitos e tempos distintos, e o único ponto em comum entre eles é o desenho. A lista de um ideograma é um verbete de dicionário com verbos que não têm nada em comum fora dele, e o contexto é quem escolhe.

O outro lado da mesma moeda é o {okurigana}: as kana que acompanham o ideograma e carregam a flexão. {kaita}, "escreveu", é o ideograma de {kaku}, "escrever" mais a terminação, e a terminação vai em kana mesmo quando o resto da frase é tudo ideograma. A divisão do trabalho é a mais limpa que uma língua tem: o ideograma fica com o significado e a kana fica com a conjugação. O kanji é o substantivo da ação, e a kana é o verbo.

A conta fecha com o que a flexão mostrou: ela mora na ponta da palavra, e a ponta é sempre kana. Quando aparece flexão, ela é escrita em kana. É essa regra que faz {kaita} existir em duas peças e {gakusei} existir em uma só.

## O que a Bíblia faz com as duas vozes

A tradução japonesa da Bíblia segue um padrão que o leitor não precisa deduzir: **kanji para os substantivos, kana para os verbos**. E é por isso que a leitura on domina o texto, porque os substantivos são os que vieram prontos da China, com o nome e o som juntos, e os verbos que sobraram em kana são os que carregam a flexão.

Os verbos de Deus são quase todos on, e a on é a leitura que soa mais antiga, mais escrita: "salvar" é *sukū*, "redimir" é *aganau*, os dois lidos em on. "Criar" é a exceção honesta: *tsukuru* é kun. Três verbos, dois sistemas de leitura, nenhum deles decorado, todos aprendidos no vocabulário, como todo o resto.

O ideograma da altura é o exemplo mais bonito de todos. {noboru} é o kun: "subir", o verbo do dia a dia, o que se diz de uma escada e de uma montanha. {tō} é o on: o "alto" dos títulos mais arcaicos, o "Alto Senhor" das traduções velhas, quando o nome divino vinha escrito com o desenho da altura e não com o da pessoa. Os dois convivem sem problema, um no verbo comum e outro no título.

E, por fim, a escala, porque o leitor precisa saber onde está pisando: existem cerca de 13.000 kanji em uso no japonês de hoje, e o conjunto {jōyō} reúne 2.100 deles. É o {jōyō} que se aprende na escola e é o que o leitor vai encontrar primeiro. Ninguém vai aprender 13.000: todo mundo aprende os que aparecem, e a lista de um ideograma é curta ao lado da lista inteira.
`),
  vocab: [
    V('sei', '生', 'leitura sino-japonesa do ideograma do nascimento: vida, nascimento (sei)'),
    V('ikiru', '生', 'leitura nativa do mesmo ideograma: viver, estar vivo (ikiru)'),
    V('gakusei', '学生', 'estudante (gakusei) — os dois ideogramas em leitura on'),
    V(
      'sensei',
      '先生',
      'professor, mestre (sensei) — dois on; o kun do ideograma continua ao lado',
    ),
    V('kyō', '今日', 'hoje (kyō) — uma única leitura, porque não há verbo dentro'),
    V('umoru', '生', 'kun: nascer, dar à luz (umoru)'),
    V('hayasu', '生', 'kun: fazer crescer, criar, educar (hayasu)'),
    V('nou', '生', 'kun: cultivar (nou)'),
    V('ikizokuru', '生き残る', 'sobreviver (ikizokuru) — kun e on na mesma palavra'),
    V('tegami', '手紙', 'carta (tegami) — kun e on na mesma palavra'),
    V('kaku', '書', 'kun: escrever (kaku)'),
    V('kaita', '書く', 'escreveu, escreveu (kaita) — o ideograma mais os okurigana'),
    V('okurigana', '送り仮名', 'kana que acompanha o ideograma e carrega a flexão (okurigana)'),
    V('tō', '上', 'on: alto, o Alto Senhor dos títulos arcaicos (tō)'),
    V('noboru', '上', 'kun: subir (noboru)'),
    V('jōyō', '常用漢字', 'o conjunto oficial dos kanji de uso comum (jōyō)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Todo kanji tem duas leituras: a **on** sino-japonesa, que veio com os textos da China, e a **kun** nativa, que já era do som do desenho aqui. Nenhuma das duas é a errada.',
      ),
    },
    {
      n: '2',
      text: T(
        'Substantivo composto de dois ideogramas tende a ter os dois em **on** ({gakusei}, {kyō}, {sensei}); palavra com verbo costuma ter o último em **kun**, porque é ele que carrega a flexão.',
      ),
    },
    {
      n: '3',
      text: T(
        'Kun quase nunca é leitura única: {ikiru}, {umoru}, {hayasu} e {nou} são quatro verbos diferentes do mesmo ideograma, e o contexto escolhe qual deles é o certo.',
      ),
    },
    {
      n: '4',
      text: T(
        'A flexão é escrita em kana mesmo quando o resto é kanji: {kaita} é o ideograma {kaku} mais a terminação. É a lição 7 aplicada — a ponta do verbo é sempre kana.',
      ),
    },
    {
      n: '5',
      text: T(
        'O mesmo ideograma escrito pode soar de formas diferentes conforme a palavra. Asterisco num verbete significa que aquela leitura só existe dentro daquela palavra.',
      ),
    },
  ],
  notes: [
    {
      label: T('On e kun na mesma palavra'),
      text: T(
        'Os dois sistemas às vezes coexistem dentro de uma única palavra, e são esses os casos que os verbetes marcam. {ikizokuru} junta a kun de {ikiru} com a on do ideograma seguinte; {tegami} faz o mesmo com a mão e o papel. O asterisco existe para dizer "isto aqui só".',
      ),
    },
    {
      label: T('A on não é um erro nem uma leitura estrangeira'),
      text: T(
        'A leitura on é a que o ideograma traz quando vem escrito num texto composto em chinês, e foi assim que ela entrou na fala: o japonês antigo também compunha palavras em caracteres chineses. Os dois sistemas são um emprestado e um nativo convivendo — e convivem há mil anos, o que só acontece quando os dois são úteis.',
      ),
    },
  ],
  examples: [
    { text: '学生', gloss: T('sei gakusei — estudante; dois ideogramas, dois on') },
    {
      text: '生きる',
      gloss: T('ikiru — viver; o mesmo ideograma do exemplo anterior, agora em kun'),
    },
    {
      text: '書いた',
      gloss: T('kaita — escrevi; o ideograma leva o sentido e a kana leva a flexão'),
    },
    { text: '生き残る', gloss: T('ikizokuru — sobreviver; kun e on na mesma palavra') },
    {
      text: '世界を救う',
      gloss: T('sekai o sukū — salva o mundo; o substantivo é ideograma e o verbo é on'),
    },
  ],
  tables: [
    {
      caption: T('As duas vozes do mesmo ideograma'),
      head: [
        T('Leitura'),
        T('De onde vem'),
        T('Como o mesmo ideograma soa'),
        T('Onde você a encontra'),
      ],
      rows: [
        [T('on'), T('dos textos da China'), T('{生} → {sei}'), T('{gakusei}, {kyō}, {sensei}')],
        [T('kun'), T('do japonês antigo'), T('{生} → {ikiru}'), T('{ikiru}, {kaita}')],
        [
          T('as duas'),
          T('estão no mesmo caractere'),
          T('{上} → {tō} e {noboru}'),
          T('a palavra decide qual delas soa'),
        ],
      ],
    },
    {
      caption: T('A família do kun: quatro verbos, um ideograma'),
      head: [T('Kun'), T('O que significa'), T('Onde aparece')],
      rows: [
        [T('{ikiru}'), T('viver, estar vivo'), T('o verbo de "viver"')],
        [T('{umoru}'), T('nascer, dar à luz'), T('o nascimento de uma criança')],
        [T('{hayasu}'), T('fazer crescer, criar, educar'), T('criar alguém; fazer crescer')],
        [T('{nou}'), T('cultivar'), T('o trabalho na terra')],
      ],
    },
    {
      caption: T('On, kun, ou os dois na mesma palavra'),
      head: [T('Palavra'), T('Cada ideograma'), T('O que dá')],
      rows: [
        [T('{kyō}'), T('on + on'), T('uma única leitura: não há verbo dentro')],
        [
          T('{sensei}'),
          T('on + on'),
          T('os dois em on; o kun do ideograma continua existindo ao lado'),
        ],
        [
          T('{ikizokuru}'),
          T('kun + on'),
          T('o asterisco marca a on como uso exclusivo da palavra'),
        ],
        [T('{tegami}'), T('kun + on'), T('a mão em kun e o papel em on, na mesma palavra')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {gakusei}, quais são as duas leituras?'),
    options: [
      T('as duas em kun'),
      T('as duas em on'),
      T('a primeira em on e a segunda em kun'),
      T('a primeira em kun e a segunda em on'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete "escreveu" com o ideograma do verbo escrever e sua flexão em kana: ____いた',
      ),
      answer: '書',
    },
    {
      kind: 'match',
      prompt: T('Ligue a leitura ao que ela é'),
      pairs: [
        { a: T('{gakusei}'), b: T('os dois ideogramas em on') },
        { a: T('{ikiru}'), b: T('o mesmo ideograma do exemplo acima, lido em kun') },
        { a: T('{hayasu}'), b: T('kun: fazer crescer, criar') },
        { a: T('{nou}'), b: T('kun: cultivar') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'Segundo a regra de bolso, um substantivo de dois ideogramas como {sensei} costuma ser lido:',
      ),
      options: [
        T('os dois em kun'),
        T('os dois em on'),
        T('o primeiro em kun e o segundo em on'),
        T('o primeiro em on e o segundo em kun'),
      ],
      answer: 1,
    },
  ],
};
