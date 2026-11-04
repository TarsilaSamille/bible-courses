import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  title: T('Capstone: Romanos 8 na Vulgata'),
  subtitle: T('{Nihil ergo condemnatio est} — trinta e nove versículos, período por período'),
  section: T('Leitura'),
  body: C(`## O texto

Uma seleção de Romanos 8, na ordem do capítulo. Os versículos estão inteiros; o que muda é o olhar, que vai atrás do verbo principal.

> **Nihil ergo condemnatio est his qui sunt in Christo Iesu.**
> **Lexus enim Spiritus vitae in Christo Iesu libertatem peccati et mortis.**
> **Si autem Christus in vobis, corpus quidem mortuum est propter peccatum, spiritus autem vivus est propter iustitiam.**
> **Non enim accepistis spiritum servituti iterum ad timorem, sed accepistis spiritum adoptionis, in quo clamamus: Abba, Pater!**
> **Spes autem expectatio est rerum: sed spes quae conspicitur, ea non est spes. Si enim quae conspicitur, spes est: si autem quae non conspicitur, eam expectamus.**
> **Scimus autem quia omnibus qui dividuntur secundum carnem sunt sine lege; iis autem qui secundum spiritum sunt, lex vitae est.**
> **Si enim Deus pro nobis, quis contra nos?**
> **Neque creatura alia poterit nos separare a caritate Dei, quae est in Christo Iesu Domino nostro.**

## Período por período

**8:1** é um período simples com uma relativa. O sujeito é {nihil}, o verbo é {est} e o predicativo nominal é {condemnatiō}: {condemnatiō est his} é "há condenação para eles", e não "a condenação é eles". A subordinada {quī sunt in Christo Iesu} é um relativo, e o {ergo} do começo não liga nada: é partícula, e o que ela faz é retomar tudo o que Paulo escreveu nos sete versículos anteriores e fechar. Um versículo, uma proposição principal, uma subordinada de grau relativo.

**8:2** repete aconstruction nominal do versículo anterior, e o {est} também desaparece: {lexus} é nominativo, {Spiritus} e {vitae} são genitivos, e a proposição inteira vale "a lei do Espírito da vida". Duas frases seguidas sem verbo é coisa que o latim faz e o português não; quem traduzir palavra por palavra vai escrever uma frase sem verbo e vai concluir que errou.

**8:10** é composto, com uma condicional e duas principais. {Si autem Christus in vobis} é a subordinada, e o subjuntivo {sīt} está omitido. Depois vêm duas proposições em parêntese ({corpus quidem mortuum est} e {spiritus autem vivus est}), cada uma com seu próprio {autem}, e o parêntese é marcado por {quidem} e {autem}: "o corpo, na verdade, está morto, mas o espírito, porém, está vivo".

**8:15-16** é o período mais planos do capítulo e o mais difícil de traduzir. {Non enim accepistis ... sed accepistis} é a correção: não aparece duas vezes, e o objeto muda de {spiritum servituti} para {spiritum adoptionis}. O {iterum ad timorem} do primeiro membro é o que a tradução tem de perder: "não recebestes outra vez o espírito de escravidão para o medo". O {in quo clamamus} acrescenta uma relativa de lugar, e o {Abba, Pater!} é uma exclamação dentro da relativa, com dois vocativos.

**8:31** é o período mais curto e o mais denso: {Si enim Dēus prō nōbis} é a condicional, e {quis contrā nōs?} é a principal, uma pergunta retórica que não espera resposta. Uma subordinada e uma pergunta, onze palavras.

**8:38-39** é uma enumeração de negações, e é o único lugar do capítulo em que o verbo principal vem duas vezes: {sum} em {certus sum} e {poterit} em {poderit nos separare}. A relativa {quae est in Christo Iesu Domino nostro} fecha o capítulo e traduz um participio grego.

## A cadeia de 8:24-28

O trecho mais difícil de Romanos 8 não é o mais longo, é o mais encadeado. Em {spes autem expectatio est rerum} não há verbo pessoal: {spes} é sujeito, {expectatio} é o predicativo ("a esperança é a espera"), e {est} fecha. Em {sed spes quae conspicitur, ea non est spes} entra a primeira relativa ({quae conspicitur}, que se refere a {spes}) e duas orações por {sed} e {nōn}. Em {si enim quae conspicitur, spes est: si autem quae non conspicitur, eam expectamus} vêm as duas condicionais, com {enim} na primeira e {autem} na segunda: o par que explica a lógica de Paulo é o de 8:10, {corpus quidem mortuum est, spiritus autem vivus est}, com a mesma alternância.

E {Scimus autem quia omnibus qui dividuntur secundum carnem sunt sine lege} é o ponto em que a regra da oblíqua aparece e é desobedecida. O verbo do relato é {scīmus}, e {sunt} deveria ser {sint} se a Vulgata obedecesse à sequência. Ela não obedece: mantém o indicativo, e o efeito é que a frase de 8:28 soa como afirmação de Paulo e não como citação. Em {iis autem qui secundum spiritum sunt, lex vitae est} o mesmo acontece: {sunt} indicativo, e {lex vitae est} é outra proposição nominal, com {lex} sujeito e {vitae} genitivo. Romanos 8 alterna proposições verbais e nominais do começo ao fim, e o capítulo não se lê sem contar qual é qual.

## O que fica

O método é o de 1 Coríntios 13 aplicado a um capítulo inteiro. Primeiro, ache o verbo principal de cada versículo e anote o modo. Depois, conte as subordinadas e dê a cada uma o grau pelo conector. Terceiro, só então traduza, e traduza cada proposição na ordem em que o latim as pôs, mesmo que o português queira outra.

O que Romanos 8 ensina e nenhuma lição isolada ensina: o latim bíblico é uma prosa de degraus. Cada versículo tem um verbo principal e uma cadeia de conectivos em volta dele, e a cadeia é o argumento. Um versículo sem verbo explícito não é um versículo fraco; é uma proposição nominal, e em Paulo elas são tão frequentes quanto as verbais.

As edições da Vulgata divergem na pontuação e em palavras isoladas de Romanos 8, e a análise abaixo não depende de nenhuma dessas escolhas: ela depende de onde estão os verbos, e os verbos não mudam.`),
  vocab: [
    V('nihil', 'nihil', 'nada (nom. n. sg., sujeito de {condemnatiō est})'),
    V('condemnatiō', 'condemnatio', 'condenação (nom. f. sg., predicativo)'),
    V('lexus', 'lexus', 'lei (nom. m. sg., de {lexus}, part. de {līgō})'),
    V('vitae', 'vita', 'da vida (gen. f. sg.)'),
    V('corpus', 'corpus', 'corpo (nom./acc. sg.), '),
    V('mortuum', 'mortuus', 'morto (part. perf. pass.)'),
    V('spiritus', 'spiritus', 'espírito (nom. sg.)'),
    V('servitūtis', 'servitus', 'da escravidão (gen. f. sg.)'),
    V('adoptionis', 'adoptio', 'da adoção (gen. f. sg.)'),
    V('conspicitur', 'conspicio', 'é vista (passivo presente)'),
    V('eam', 'is', 'a esperança (pronome demonstrativo f. sg. = {spes})'),
    V('sine lege', 'sine lege', 'sem lei (ablativo, {sine} + {lex})'),
    V('separare', 'separo', 'separar (infinitivo presente)'),
    V('caritate', 'caritas', 'do amor (abl. f. sg.)'),
    V('separabit', 'separo', 'separará (futuro de {separō})'),
    V('certus', 'certus', 'certo (adj.: seguro de que)'),
    V('poterit', 'possum', 'poderá (futuro de {possum})'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'Em {Nihil ergo condemnatio est his qui sunt in Christo Iesu}, qual é o verbo principal?',
    ),
    options: [
      T('{est}, de {sum}, com {nihil} como sujeito e {condemnatiō} como predicativo nominal'),
      T('{sunt}, da relativa {quī sunt}'),
      T('{ergo}, que é partícula'),
      T('Não há verbo: a frase é toda nominal'),
    ],
    answer: 0,
    hint: T('A nominal {condemnatiō est} é o núcleo; a relativa {quī sunt} é subordinada.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T(
        'Em {Si autem Christus in vobis, corpus quidem mortuum est ...}, qual é o grau da subordinada?',
      ),
      options: [
        T('Condicional: {sī} com o subjuntivo {sīt} omitido'),
        T('Causal: {autem} introduz causa'),
        T('Temporal: {si} marca tempo'),
        T('Comparativo: {autem} compara as duas metades'),
      ],
      answer: 0,
      hint: T(
        'Regra §2: {sī} com ideia de condição leva subjuntivo, e o verbo fica fora quando o sujeito é {Christus}.',
      ),
    },
    {
      kind: 'fill',
      prompt: T('Em 8:38, o verbo principal da segunda proposição é ___ (futuro de {possum})'),
      answer: 'poterit',
      hint: T('A enumeração de negações chega a um verbo de poder.'),
    },
    {
      kind: 'fill',
      prompt: T(
        'Em {scīmus autem quia ... sunt}, o latim clássico pediria o subjuntivo ___ (3.ª pl. de {sum})',
      ),
      answer: 'sint',
      hint: T('É a sequência oblíqua: o indicativo {sunt} deveria ser {sint}.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada trecho de Romanos 8 ao que ele é'),
      pairs: [
        { a: T('{condemnatiō est}'), b: T('proposição nominal: {est} com predicativo') },
        { a: T('{quī sunt in Christo Iesu}'), b: T('subordinada de grau relativo') },
        {
          a: T('{sī autem Christus in vobis}'),
          b: T('subordinada condicional, com {sīt} omitido'),
        },
        { a: T('{Abba, Pater!}'), b: T('exclamação com dois vocativos, dentro da relativa') },
      ],
      answer: [0, 1, 2, 3],
      hint: T(
        'Regra §1 e §2: toda proposição de Romanos 8 tem um verbo, mesmo quando o {est} desaparece.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Proposição nominal é a que tem {est} com predicativo no nominativo: {condemnatiō est}, {lexus est}, {spes est}. Nela não há verbo de sentido; quem traduz palavra por palavra escreve frase sem verbo.',
      ),
    },
    {
      n: '2',
      text: T(
        'Toda subordinada de Romanos 8 tem grau: relativo ({quī sunt}), condicional ({sī ... sit}), causal ({quia}), temporal ({postquam}). O conector decide o grau.',
      ),
    },
    {
      n: '3',
      text: T(
        'A correção com {sed} e {autem} é a espinha do capítulo: {corpus quidem mortuum est, spiritus autem vivus est} é o mesmo par de 8:25, e o leitor que o reconhece lê o capítulo inteiro mais rápido.',
      ),
    },
    {
      n: '4',
      text: T(
        'A oblíqua do capítulo não cumpre a sequência: {scīmus quia ... sunt} mantém o indicativo, e o texto deve ser lido na voz de Paulo.',
      ),
    },
    {
      n: '5',
      text: T(
        'O verbo principal nem sempre está visível: em {Si autem Christus in vobis}, o {sīt} é omitido porque o sujeito é o mesmo da principal.',
      ),
    },
  ],
  notes: [
    {
      label: T('A lista de 8:38-39'),
      text: T(
        'A enumeração final ({mors}, {vīta}, {angelī}, {archangelī}, {prīncipātūs}, {virtūtēs}, {instantia}, {altitūdō}, {profundum}, {creātūra alia}) é uma clímax: cada negação acrescenta uma categoria, da morte até a própria criação. É o único ponto do capítulo em que o substantivo tem mais peso que o verbo, e é por isso que o capítulo termina em substantivo e não em verbo: o amor de Deus é a única coisa que não vira lista.',
      ),
    },
    {
      label: T('Por que Romanos 8 é o melhor exercício de fechamento'),
      text: T(
        'O capítulo usa tudo que o curso viu, e não inventa nada: nominais e verbais, relativas encadeadas, condicionais, a oblíqua que desobedece à sequência, a partícula {autem} no meio do período, o gerúndio e o participio em {secundum carnem}. Quem faz a análise dele verso a verso tem de exercitar o método, não a memória.',
      ),
    },
  ],
  examples: [
    {
      text: 'Nihil ergo condemnatiō est',
      gloss: T('não há pois condenação (proposição nominal, Rm 8:1)'),
    },
    { text: 'quī sunt in Christo Iesu', gloss: T('que estão em Cristo Jesus (relativo, grau 1)') },
    {
      text: 'lexus enim Spiritus vitae',
      gloss: T('pois a lei do Espírito da vida (nominal, com {est} omitido)'),
    },
    {
      text: 'corpus quidem mortuum est',
      gloss: T('o corpo, na verdade, está morto ({quidem} abre o parêntese)'),
    },
    {
      text: 'spiritus autem vivus est',
      gloss: T('mas o espírito está vivo ({autem} fecha o parêntese)'),
    },
    { text: 'iterum ad timorem', gloss: T('outra vez para o medo ({iterum} + {ad} + acusativo)') },
    {
      text: 'in quo clamamus: Abba, Pater!',
      gloss: T('no qual clamamos: Abba, Pai (relativa + exclamação)'),
    },
    {
      text: 'spes quae conspicitur',
      gloss: T('a esperança que se vê (relativo, com o {quae} referente a {spes})'),
    },
    {
      text: 'si autem quae non conspicitur, eam expectamus',
      gloss: T(
        'mas se a que não se vê, essa esperamos (condicional com {expectamus} no indicativo)',
      ),
    },
    { text: 'quis contrā nōs?', gloss: T('quem contra nós? (principal interrogativa, Rm 8:31)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Romanos 8: principal e subordinadas'),
      head: [T('Verso'), T('Proposição principal'), T('Subordinadas e grau'), T('Tipo de período')],
      rows: [
        [
          T('8:1'),
          T('{nihil} + {est} + {condemnatiō}'),
          T('{quī sunt in Christo Iesu} (relativo)'),
          T('simples com relativa'),
        ],
        [
          T('8:2'),
          T('{lexus} + {est} omitido'),
          T('{Spiritus}, {vitae} (genitivos, não são orações)'),
          T('nominal'),
        ],
        [
          T('8:10'),
          T('{corpus ... est} e {spiritus ... est}'),
          T('{sī autem Christus in vobis} (condicional)'),
          T('composto com duas principais'),
        ],
        [T('8:15'), T('{accepistis}'), T('{in quo clamamus} (relativo de lugar)'), T('composto')],
        [
          T('8:25'),
          T('{eam expectamus}'),
          T('{sī ...} (duas condicionais)'),
          T('composto encadeado'),
        ],
        [
          T('8:28'),
          T('{scīmus}'),
          T('{quia} (causal), {quī dividuntur} (relativo)'),
          T('oblíqua sem sequência'),
        ],
        [
          T('8:31'),
          T('{quis contrā nōs?}'),
          T('{sī enim Dēus prō nōbis} (condicional)'),
          T('composto'),
        ],
        [
          T('8:39'),
          T('{poterit nos separare}'),
          T('{neque ... neque ...} (enumeração)'),
          T('complexo'),
        ],
      ],
    },
    {
      caption: T('Tabela 2 — Verbos de Romanos 8, modo e tempo'),
      head: [T('Forma'), T('Verbo'), T('Modo e tempo'), T('Português')],
      rows: [
        ['{est}', '{sum}', 'indicativo presente', 'é / há'],
        ['{sunt}', '{sum}', 'indicativo presente (oblíqua)', 'são'],
        ['{mortuum est}', '{morior}', 'perifrástico passivo', 'está morto'],
        ['{accepistis}', '{accipio}', 'perfeito indicativo', 'recebestes'],
        ['{conspicitur}', '{conspicio}', 'presente passivo', 'é vista'],
        ['{expectamus}', '{exspecto}', 'presente indicativo', 'esperamos'],
        ['{scīmus}', '{sciō}', 'presente indicativo', 'sabemos'],
        ['{poterit}', '{possum}', 'futuro indicativo', 'poderá'],
        ['{sīt} (omitido)', '{sum}', 'subjuntivo presente', 'esteja'],
      ],
    },
  ],
};
