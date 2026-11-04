import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  title: T('Advérbio, numeral e partícula'),
  subtitle: T('{enim}, {autem}, {quoque}: as palavras que não significam sozinhas e mudam tudo'),
  section: T('Advérbio'),
  body: C(`## Partículas: nem sujeito, nem verbo

A partícula latina não é uma abreviatura nem um resto de sintaxe. É uma palavra sem lexema, que não vale por si e só ganha sentido ligada a outra. {autem} não significa nada isolado: significa "porém" porque vem logo depois de um verbo e marca que o que vem a seguir contraria o que foi dito antes. Retire {autem} de uma frase e nada muda na gramática; na argumentação, muda tudo.

O que caracteriza a partícula é a posição. A partícula latina é **pós-positiva** ou **enclítica**: vem depois da palavra à qual se liga, ou grudada nela.

| Partícula | Posição | Valor | Exemplo |
|---|---|---|---|
| {quoque} | enclítica, colada | e também | {ipse quoque} |
| {igitur} | pós-positiva, 2.ª | portanto | {dixit igitur} |
| {autem} | pós-positiva, 2.ª | porém | {audivit autem} |
| {enim} | pós-positiva, 2.ª | pois | {scimus enim} |
| {tamen} | flexível | ainda assim | {tamen non} |
| {ita} | livre | assim | {ita est} |
| {itaque} | pós-positiva | e assim | {itaque venit} |

A ordem canônica é verbo, partícula, resto. Em {scimus autem quia ...}, o {scimus} vem primeiro e o {autem} imediatamente depois; é por isso que um tradutor que unfamiliariza o latim costuma pôr o "porém" no começo da frase e destrói a ordem do argumento.

## Numeral que virou advérbio

Os ordinais nascem dos cardinais e alguns viram advérbio sem mudar de flexão nenhuma. {prīmum} é "pela primeira vez" e também "primeiro de tudo"; {deinde} é "depois"; {iterum} e {rursus} são "de novo"; {denique} e {novīssimē} são "finalmente"; {tandem} é "por fim". A mesma família tem os multiplicativos: {semel} "uma vez", {bis} "duas vezes", {ter} "três vezes", {quater} "quatro vezes". E há um advérbio numeral que é quase um verbo: {plūs}, "mais", no sentido de "em maior número".

O numeral também aparece como advérbio de medida, e é a razão pela qual a Vulgata escreve {annōs quīnquagintā} onde o português escreve "cinquenta anos": numeral acusativo de extensão, sem preposição e sem advérbio nenhum.

## A negação elíptica de Paulo

A partícula que melhor explica a Vulgata é {nōn}, porque em Paulo ela aparece elíptica: sozinha, sem verbo e às vezes sem sujeito, valendo por "não é o caso que", "de modo algum", "nem pensar". O leitor português espera uma palavra para cada ideia e encontra uma negação só; o que ela nega às vezes é a própria conclusão que o leitor estava pronto para aceitar.

| Construção | Latim | Português |
|---|---|---|
| negação simples | {nōn} | não |
| negação de inferência | {nōn} (sozinho) | não é o caso que |
| negação do imperativo | {nē} | não (imperativo) |
| negação reforçada | {nēmō}, {nēnōn} | de modo algum |
| não, e ainda | {nē ... quidem} | certamente não |
| nem X nem Y | {nec ... nec} | nem X nem Y |
| dupla negação | {nōn ... nōn} | nem, de modo algum |

{nē ... quidem} é o par que mais intriga: {quidem} significa "certamente", e a negação vem primeiro, de modo que a frase é uma afirmação que se desfaz. Em 1 Timóteo 4:12 o latim escreve {nēmōne neglexeris iuventūtis tuae}, literalmente "cuidado nenhum desprezes a tua juventude": há duas negações, e a palavra de reforço é {mō}, o próprio {mō} de {nēmō} = "de modo algum". O português entende "não desprezes"; o latim entende "não desprezes de jeito nenhum", e a força está no advérbio, não no verbo.

A construção mais produtiva de todas é a correção com {sed}: {nōn ... sed} e {nōn ... sed etiam}, "não apenas X, mas também Y". Romanos 1:16 traz a construção: {primum Iudaeō, deinde et Graecō}.

## Romanos 1:16

> **Non enim erubesco evangelium Dei: virtus enim Dei est ad salutem omni credenti, primum Iudaeo, deinde et Graeco.**

São cinco sinais numa frase só: {nōn} abre, {enim} explica logo depois do verbo, o segundo {enim} explica o poder de Deus, {primum} e {deinde} marcam a ordem do destinatário. Repare que {Non enim erubesco} e {virtus enim Dei est} são a mesma construção repetida, e que a repetição é o argumento: Paulo não se envergonha porque o poder de Deus é para salvação.

Quem traduz palavra por palavra escreve "não porque me envergonho do evangelho de Deus: porque o poder de Deus é para a salvação de todo aquele que crê, primeiro do judeu, também do grego". Quem entende as partículas escreve "não me envergonho do evangelho de Deus, porque o poder de Deus é para salvação de todo aquele que crê, primeiro o judeu, também o grego". A diferença entre os dois textos é a posição da justificativa: no latim o "porque" é uma partícula presa ao verbo, e por isso ele não pode vir para o começo.`),
  vocab: [
    V('enim', 'enim', 'pois (partícula pós-positiva, 2.ª posição)'),
    V('autem', 'autem', 'porém, mas (partícula pós-positiva)'),
    V('igitur', 'igitur', 'portanto (partícula pós-positiva)'),
    V('itaque', 'itaque', 'e assim (partícula pós-positiva)'),
    V('quoque', 'quoque', 'e também (enclítica, {que} posposta)'),
    V('tamen', 'tamen', 'ainda assim (adv. e partícula, posição flexível)'),
    V('ita', 'ita', 'assim (adv. de consequentio e de comparação)'),
    V('quidem', 'quidem', 'certamente (enclítica: com {nē} dá «certamente não»)'),
    V('nēmōne', 'nēmōne', 'cuidado nenhum (adv. de negação que reforça o imperativo)'),
    V('prīmum', 'primum', 'primeiro (adv., de {prīmus})'),
    V('deinde', 'deinde', 'depois, em seguida (adv., de {secundus})'),
    V('iterum', 'iterum', 'de novo (adv. numeral)'),
    V('denique', 'denique', 'finalmente (adv. numeral)'),
    V('semel', 'semel', 'uma vez (adv. numeral)'),
    V('bis', 'bis', 'duas vezes (adv. numeral)'),
    V('ter', 'ter', 'três vezes (adv. numeral)'),
    V('sine', 'sine', 'sem (preposição com Ablativo)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Non enim erubesco evangelium Dei}, qual é a função de {enim}?'),
    options: [
      T('Partícula pós-positiva: explica a razão de {nōn} e se liga ao verbo {erubesco}'),
      T('Adverbio de tempo: «então não me envergonho»'),
      T('Conjunção que abre uma oração subordinada'),
      T('Verbo auxiliar do futuro: «não estes envergonhando»'),
    ],
    answer: 0,
    hint: T('Regra §1: partícula é pós-positiva, e {enim} significa «pois».'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Em {nēmōne neglexeris iuventūtis tuae}, quantas negações há e por quê?'),
      options: [
        T('Duas: o {nē} do imperativo e o {mō} do advérbio {nēmō}, que reforça'),
        T('Uma: só o {nē} inicial'),
        T('Três: {nē}, {mō} e {nōn}'),
        T('Nenhuma: {neglexeris} já é negativo'),
      ],
      answer: 0,
      hint: T('Regra §3: {nēmō} é o advérbio «de modo algum», que se soma ao {nē} do imperativo.'),
    },
    {
      kind: 'fill',
      prompt: T(
        'Em Romanos 1:16, {primum Iudaeō, deinde et Graecō}: «primeiro o judeu, ___ o grego» é ___',
      ),
      answer: 'et',
      hint: T('A correção final usa {et} para acrescentar sem repetir o substantivo.'),
    },
    {
      kind: 'fill',
      prompt: T('Qual partícula significa «porém» e é pós-positiva? ___'),
      answer: 'autem',
      hint: T('{autem} vem depois do verbo e marca contraste.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a partícula ao seu valor'),
      pairs: [
        { a: T('{enim}'), b: T('pois (razão)') },
        { a: T('{autem}'), b: T('porém (contraste)') },
        { a: T('{igitur}'), b: T('portanto (consequência)') },
        { a: T('{quidem}'), b: T('certamente (com {nē}: «certamente não»)') },
      ],
      answer: [0, 1, 2, 3],
      hint: T('Regra §1: a segunda posição depois do verbo é delas.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Partícula é pós-positiva ou enclítica: {scimus autem}, {ipse quoque}. A ordem canônica é verbo, partícula, resto.',
      ),
    },
    {
      n: '2',
      text: T(
        '{enim} = «pois» (razão), {autem} = «porém» (contraste), {igitur} = «portanto» (consequência), {quoque} = «e também», {tamen} = «ainda assim». Nenhuma delas vale sozinha.',
      ),
    },
    {
      n: '3',
      text: T(
        'A negação é flexível: {nōn} no indicativo, {nē} no imperativo, {nēquīquam} e {frūstrā} como advérbios, {nec} = «nem». E {nē ... quidem} = «certamente não».',
      ),
    },
    {
      n: '4',
      text: T(
        'O numeral serve de advérbio em {prīmum}, {deinde}, {iterum}, {rursus}, {denique}, e de multiplicativo em {semel}, {bis}, {ter}, {quater}.',
      ),
    },
    {
      n: '5',
      text: T(
        'A correção com {sed} e {et} é o motor da prosa de Paulo: {nōn ... sed}, {nōn ... sed etiam} = «não apenas X, mas também Y».',
      ),
    },
  ],
  notes: [
    {
      label: T('A partícula explica a ordem dos termos'),
      text: T(
        'Como a partícula é pós-positiva, ela trava a ordem: em {Non enim erubesco}, a negação vem primeiro, o verbo em segundo, a partícula em terceiro. Uma tradução que inverte essa ordem perde a ênfase do original, porque em latim a negação emphasise quem fala e a conjunção explica o motivo. É a diferença entre «não me envergonho do evangelho» e «do evangelho não me envergonho»: o latim dá a razão no segundo caso, e o grego faz o mesmo.',
      ),
    },
    {
      label: T('Advérbio que vem do numeral, numeral que vem do advérbio'),
      text: T(
        '{iterum} é um adverbial numeral, mas numa frase como {iterum deinde} parece advérbio comum: o latim tem poucas palavras para ordinal e muita para advérbio, e {primum}, {deinde}, {rursus} vivem na fronteira dos dois campos. Por isso Paulo escreve {iterum, deinde et rursus} «novamente, portanto, e ainda outra vez»: três palavras latinas para três advérbios simples no português, e nenhum deles flexiona.',
      ),
    },
  ],
  examples: [
    {
      text: 'Non enim erubesco evangelium Dei',
      gloss: T('não me envergonho do evangelho de Deus (Rm 1:16: {nōn} + {enim})'),
    },
    { text: 'scimus autem quia', gloss: T('sabemos pois que ({autem} marca o contraste)') },
    {
      text: 'dixit igitur',
      gloss: T('disse então ({igitur} = «portanto» ou «então», conforme o contexto)'),
    },
    { text: 'ipsē quoque', gloss: T('ele mesmo também ({quoque} enclítico)') },
    {
      text: 'nēmōne neglexeris iuventūtis tuae',
      gloss: T('cuidado nenhum desprezes a tua juventude (1 Tm 4:12)'),
    },
    { text: 'nē ... quidem', gloss: T('certamente não ({quidem} enclítico atrás de {nē})') },
    { text: 'nōn solum sed etiam', gloss: T('não apenas, mas também') },
    {
      text: 'primum Iudaeō, deinde et Graecō',
      gloss: T('primeiro o judeu, também o grego (Rm 1:16)'),
    },
    { text: 'ter mortuus est', gloss: T('morreu três vezes ({ter}, multiplicativo)') },
    {
      text: 'iterum et deinde rursus',
      gloss: T('de novo, e depois outra vez (três advérbios, um flexiona)'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Partículas e advérbios conectivos'),
      head: [T('Palavra'), T('Posição'), T('Valor'), T('Exemplo')],
      rows: [
        ['{quoque}', 'enclítica', 'e também', '{ipse quoque}'],
        ['{igitur}', 'pós-positiva, 2.ª', 'portanto', '{dixit igitur}'],
        ['{autem}', 'pós-positiva, 2.ª', 'porém', '{audivit autem}'],
        ['{enim}', 'pós-positiva, 2.ª', 'pois', '{scimus enim}'],
        ['{tamen}', 'flexível', 'ainda assim', '{tamen non}'],
        ['{ita}', 'livre', 'assim', '{ita est}'],
        ['{itaque}', 'pós-positiva', 'e assim', '{itaque venit}'],
        ['{quidem}', 'enclítica', 'certamente', '{nē quidem}'],
      ],
    },
    {
      caption: T('Tabela 2 — Numeral em função de advérbio'),
      head: [T('Forma'), T('Do numeral'), T('Glosa'), T('Onde')],
      rows: [
        ['{prīmum}', '{prīmus}', 'primeiro, em primeiro lugar', 'ordenação'],
        ['{deinde}', '{secundus}', 'depois, em seguida', 'sequência'],
        ['{iterum}', '{iterum}', 'de novo', 'repetição'],
        ['{rursus}', '{rursus}', 'outra vez, de novo', 'repetição'],
        ['{denique}', '{dēnique}', 'finalmente', 'fecho'],
        ['{semel}', '{semel}', 'uma vez', 'multiplicativo'],
        ['{bis}', '{duo}', 'duas vezes', 'multiplicativo'],
        ['{ter}', '{trēs}', 'três vezes', 'multiplicativo'],
        ['{quater}', '{quattuor}', 'quatro vezes', 'multiplicativo'],
      ],
    },
    {
      caption: T('Tabela 3 — As cinco formas da negação'),
      head: [T('Latim'), T('Português'), T('Onde aparece'), T('Exemplo')],
      rows: [
        ['{nōn}', 'não', 'indicativo, orações', '{nōn} timeō'],
        ['{nē}', 'não', 'imperativo, final negativa', '{nē} neglexeris'],
        ['{nēquīquam}', 'em vão, de nada', 'advérbio', '{nēquīquam} laborāre'],
        ['{nēmō}', 'de modo algum', 'reforça a negação', '{nēmō} timeō'],
        ['{nec}', 'nem', 'liga duas negações', '{nec} ... {nec}'],
        ['{frūstrā}', 'em vão', 'advérbio', '{frūstrā} laborāre'],
      ],
    },
  ],
};
