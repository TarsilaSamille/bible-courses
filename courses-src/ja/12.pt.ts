import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  section: T('Adjetivo'),
  title: T('Graus e advérbios: como dizer "muito" e "sempre" sem flexionar nada'),
  subtitle: T(
    'O japonês não tem comparativo nem superlativo: o grau é uma partícula posicional, e o advérbio de frequência vai depois da forma verbal',
  ),
  body: C(`
## O "muito" é uma partícula, e a posição é tudo

O adjetivo japonês não flexiona. Não existe forma para "mais bonito" nem para "o mais bonito", e não são formas raras: não existem. O que existe são **partículas de grau**, e elas se distinguem pela posição. É a posição que diz o grau, como em mandarim, onde a partícula do "demais" (lição 16) também vai antes do adjetivo e carrega o peso sozinha.

O par mais comum é {totemo} e {mō}: {totemo utsukushii} "muito bonito", {mō hoshii} "quero muito", {mō atsui} "está muito quente". Os dois fazem o mesmo trabalho, e a escolha é de registro e não de sentido, porque {totemo} é neutro e {mō} é mais coloquial e é o que aparece na fala. Repare que {mō} soa igual a {mo}, "também": as duas palavras têm a mesma pronúncia, e o que separa uma da outra é o que vem depois. O {mō} de grau é seguido de um adjetivo; o {mo} é seguido de nome ou pronome.

O advérbio de frequência obedece a outra regra, e é a mais importante: ele vem **depois** da forma verbal, nunca antes. {hon o yomu itsumo} "sempre leio livros", {tabi iku} "às vezes vou". Quem vem do mandarim erra aqui quase sempre, porque lá o advérbio abre o verbo: {cháng cháng} e {yǒu shí hou}. Em japonês a posição é a oposta, e é uma inversão que ninguém faz por instinto.

## {sugiru}: o atalho mais rápido do idioma

A palavra para levar daqui é {sugiru}, "passar de". Ela entra como **verbo** ({oishisugiru}, "é deliciosa demais") e como advérbio ({hayaku sugimasu}, "é rápido demais"), e nos dois casos faz o trabalho que um comparativo faria em português.

O truque é que {sugiru} gruda na palavra e vira uma só: {oishi + sugiru} dá {oishisugiru}, {hayaki + sugiru} dá {hayakusugiru}. Escreva o par colado e o japonês entende, sem partícula no meio. É o mesmo movimento que a raiz "comer" compõe uma palavra de "refeição", e o mesmo que faz a mão que escreve entrar na palavra "carta": raiz à esquerda, categoria à direita.

Na tradução bíblica o {sugiru} aparece o tempo todo, e quase sempre com julgamento: uma promessa que "passa de" o que o ouvinte esperava, uma cobiça que "passa de" a medida. Ele também é o caminho mais curto para {totemo}, e mais forte: {oishisugiru} diz mais que {totemo oishii} em duas sílabas, e é por isso que a tradução prefere a forma curta.

## Negar o advérbio não é dizer "não muito"

O erro de iniciante aqui é estrutural, e vale dizê-lo antes que o leitor erre em texto japonês. O instinto é construir "não muito bonito" como "não" + "muito" + "bonito", e o japonês recusa essa conta. O oposto de "muito" não é "não muito": é {amarū}, "sobrar", e {amarū} significa **excesso**, "demais", "mais do que devia".

Então "não muito bonito" em japonês é uma frase, e não um advérbio: {amarū umi kirei ja nai}, literalmente "não é que sobre bonito". O advérbio de excesso vira uma oração negativa. O que o leitor faz aqui é traduzir a ideia da atenuação, não a sua estrutura, e é por isso que {amarū} não é "não muito" em lugar nenhum: {amarū nemi hoshii} é "não quero demais", do ponto de vista de quem não quer gastar. O antônimo de {amarū} é {mō nai}, "não o bastante", e as duas frases tratam da mesma quantidade por lados opostos.

## Frequência, tempo e "também"

Três palavras resolvem quase toda a frequência do dia a dia, e as três são advérbios que vêm depois do verbo: {itsumo} "sempre", {tabi} "às vezes", {mettei} "quase nunca". A terceira merece atenção porque não é "nunca" e sim "dificilmente": {mettei konai} é o que um japonês diz quando quer dizer "eu vou quase nunca", e é o mesmo cuidado que separa {mō} de {totemo}. Uma quarta se encaixa: {mawarini}, "de vez em quando", que por não ser fixa leva a partícula {mawarini ni}.

Com tempo, o advérbio também é partícula e também fica depois do substantivo: {made asita} "até amanhã", {kara kino} "desde ontem". E "antes" e "depois" são {mae} e {ato}, substantivos, como todo advérbio do japonês: {mae ni} é literalmente "na frente de", {ato ni} "atrás de". Nenhum dos dois flexiona, e nenhum precisa.

Para fechar o quadro, o "também" simples é {mo}: {watashi mo}, "eu também". O "inclusive" é {sae}, enfático, e aparece com frequência nas traduções bíblicas justamente onde o grego tem um "e" cumulativo: {sae} marca que um item se junta ao anterior em vez de vir depois dele. Quem lê grego reconhece o movimento, porque em vez de enumerar, a tradução japonesa acumula.

O exemplo bíblico que amarra tudo isto é 1 João 1:9, e o que ele traz é o verbo da confissão: {mokuroku suru}, "declarar, confessar". Quem o conjuga no passado entra na mesma família de {sugiru}, porque os dois tomam um auxiliar e viram frase. A condição vem com {moshi} no começo, o verbo vai no fim: {moshi} abre, {watashitachi no tsumi o mokuroku suru nara} fecha.

Repare no que a frase **não** tem: nenhum advérbio de grau, nenhum comparativo, nenhuma flexão de adjetivo. A força do versículo está em {tsumi o mokuroku suru}, verbo e objeto, e em {moshi}, que é a única palavra a fazer o trabalho da condicional. Em japonês, o que carrega peso sintático quase nunca é o advérbio. É a partícula, e a partícula se reconhece pela posição.
`),
  vocab: [
    V('mō', 'もう', 'muito; também (mō)'),
    V('totemo', 'とても', 'muito (totemo)'),
    V('sugiru', '過ぎる', 'passar de; exceder (sugiru)'),
    V('amarū', '余る', 'sobrar; demais (amarū)'),
    V('itsumo', 'いつも', 'sempre (itsumo)'),
    V('tabi', '時々', 'às vezes; de vez em quando (tabi)'),
    V('mettei', '滅多に', 'quase nunca; raramente (mettei)'),
    V('mawarini', '回り', 'de vez em quando (mawarini)'),
    V('made', 'まで', 'até; limite (made)'),
    V('kara', 'から', 'desde; de (kara)'),
    V('nai', 'ない', 'não; não existe (nai)'),
    V('mae', '前', 'antes; frente; parte de trás (mae)'),
    V('ato', '後', 'depois; atrás (ato)'),
    V('mo', 'も', 'também (mo)'),
    V('sae', 'さえ', 'inclusive; até (sae)'),
    V('moshi', 'もし', 'se; caso (moshi)'),
    V('oishisugiru', 'おいしすぎる', 'é deliciosa demais (oishisugiru)'),
    V('hayakusugiru', '速すぎる', 'rápido demais (hayakusugiru)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O adjetivo japonês não flexiona: não há comparativo nem superlativo. O grau é uma partícula, e a posição dela é que diz o grau.',
      ),
    },
    {
      n: '2',
      text: T(
        '{totemo} e {mō} dizem "muito" e vêm antes do adjetivo; {sugiru} diz "passar de" e gruda no fim da palavra.',
      ),
    },
    {
      n: '3',
      text: T(
        '{sugiru} funciona como verbo e como advérbio: {oishisugiru} é "deliciosa demais", e a forma colada é mais curta e mais forte que {totemo oishii}.',
      ),
    },
    {
      n: '4',
      text: T(
        'O oposto de "muito" é {amarū}, "demais". "Não muito bonito" é uma frase inteira: {amarū umi kirei ja nai}.',
      ),
    },
    {
      n: '5',
      text: T(
        'O advérbio de frequência vem **depois** da forma verbal: {yomu itsumo}, {tabi iku}. Em mandarim e em coreano ele vem antes, e é a inversão que mais confunde.',
      ),
    },
  ],
  notes: [
    {
      label: T('{mō} e {mo} são a mesma pronúncia'),
      text: T(
        'O "muito" {mō} e o "também" {mo} soam igual. O que separa os dois é o que vem depois: {mō} é seguido de adjetivo, {mo} é seguido de nome ou pronome. Num Evangelho, o par {mo} aparece dezenas de vezes, e é o advérbio mais frequente da língua depois de {mō}.',
      ),
    },
    {
      label: T('Traduzir a ideia, não a estrutura'),
      text: T(
        'Quando a estrutura do original não existe em japonês, a tradução troca a construção em vez de forçar a equivalência. "Não muito bonito" vira uma oração negativa com {nai}; o leitor encontra a atenuação inteira sem que nenhuma palavra corresponda uma a uma.',
      ),
    },
  ],
  examples: [
    { text: 'とても美しい', gloss: T('totemo utsukushii — muito bonito') },
    { text: 'おいしすぎる', gloss: T('oishisugiru — é deliciosa demais') },
    { text: 'あまり強くない', gloss: T('amarū tsuyoku nai — não é forte o bastante') },
    { text: '毎日本を読む', gloss: T('mainichi hon o yomu — leio livros todos os dias') },
    {
      text: 'もし私たちの罪を告白するならば',
      gloss: T(
        'moshi watashitachi no tsumi o mokuroku suru nara — se confessarmos os nossos pecados (1 João 1:9)',
      ),
    },
  ],
  tables: [
    {
      caption: T('Onde o advérbio de frequência fica, nas três línguas do projeto'),
      head: [T('Língua'), T('Posição'), T('Exemplo')],
      rows: [
        [T('mandarim'), T('antes do verbo'), T('{yǒu shí hou lái} — às vezes vem')],
        [T('coreano'), T('antes do verbo'), T('o advérbio de frequência também precede o verbo')],
        [T('japonês'), T('depois da forma verbal'), T('{kuru itsumo} — vem sempre')],
      ],
    },
    {
      caption: T('Os quatro caminhos de falar de grau'),
      head: [T('Forma'), T('Posição'), T('O que diz')],
      rows: [
        [T('{totemo}'), T('antes do adjetivo'), T('muito, neutro')],
        [T('{mō}'), T('antes do adjetivo'), T('muito, coloquial')],
        [T('{oishisugiru}'), T('colada no fim da palavra'), T('deliciosa demais')],
        [T('{amarū}'), T('antes do adjetivo, numa frase com {nai}'), T('não o bastante')],
      ],
    },
    {
      caption: T('Frequência, em quatro slogans'),
      head: [T('Advérbio'), T('Glosa'), T('Onde entra')],
      rows: [
        [T('{itsumo}'), T('sempre'), T('depois do verbo: {yomu itsumo}')],
        [T('{tabi}'), T('às vezes'), T('depois do verbo: {tabi iku}')],
        [T('{mawarini}'), T('de vez em quando'), T('com {ni}: {mawarini ni iku}')],
        [T('{mettei}'), T('quase nunca'), T('depois do verbo: {mettei konai}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {hon o yomu itsumo}, qual é a posição do advérbio {itsumo}?'),
    options: [
      T('antes do verbo'),
      T('depois da forma verbal'),
      T('dentro do substantivo'),
      T('no começo da frase'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "muito bonito" com a partícula de grau: とても____'),
      answer: '美しい',
    },
    {
      kind: 'match',
      prompt: T('Ligue o advérbio à glosa'),
      pairs: [
        { a: T('{itsumo}'), b: T('sempre') },
        { a: T('{tabi}'), b: T('às vezes') },
        { a: T('{mettei}'), b: T('quase nunca') },
        { a: T('{made}'), b: T('até') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual é a posição do advérbio de frequência no japonês?'),
      options: [
        T('antes do verbo, como no mandarim'),
        T('depois da forma verbal'),
        T('sempre no começo da frase'),
        T('ligado ao substantivo por {の}'),
      ],
      answer: 1,
    },
  ],
};
