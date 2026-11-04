import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  title: T('O advérbio: como se forma'),
  subtitle: T('quick → quickly, fast, hardly — três vias'),
  section: T('Advérbio'),
  body: C(`## Três vias para o mesmo sentido

O advérbio de modo em inglês tem três caminhos de formação, e o aluno só conhece o primeiro. {quick} é adjetivo e {quickly} é advérbio; {soft} e {softly} idem; {careful} e {carefully} idem. A regra é **adjetivo mais {ly}**, e ela produz a maioria dos advérbios que o leitor vai encontrar.

A segunda via é a forma que **não tem nada a ver com um adjetivo**: {fast}, {well}, {soon}, {now}, {then}, {here}, {there}, {today}, {tomorrow}, {yesterday}, {very}, {too}. São formas autônomas e precisam ser decoradas como são.

A terceira via é o adjetivo que **já funciona como advérbio** e por isso não ganhou {ly}. É a mais curta das três e a que mais engana.

## O adjetivo que virou advérbio

{fast}, {hard}, {late}, {early}, {straight}, {high}, {low} e {long} fazem as duas coisas com a mesma forma. {He runs fast} e {a fast train} usam a mesma palavra; {She works hard} e {a hard question} também.

A KJV usa esse recurso no fim de Mateus 5:48, com {Be ye therefore perfect, as your Father which is in heaven is perfect}. O {perfect} da primeira oração é advérbio e o da segunda é adjetivo, e são a mesma palavra. Quem traduz sem notar escreve "sede perfeitos" e perde o sentido de "sede perfeitos no amor", que é o que a frase grega queria dizer.

A regra prática: **tente trocar o advérbio por um {very} mais o adjetivo**. {She speaks slowly} pode virar {She is very slow}, e a frase ainda funciona; {She speaks quick} não vira nada, porque o que existe é {She is very quick}.

## Hardly não é "hard"

{Hardly} é o advérbio de {hardly}, e significa "dificilmente" ou "quase nunca": {He hardly ever comes}. O aluno que conhece {hard} e {hardly} como par traduz {hardly} por "com dificuldade" e produz {He speaks hardly}, que em inglês significa quase "ele não fala nada".

O mesmo vale para outros três pares: {late} é "tarde" e {lately} é "recentemente"; {near} é "perto" e {nearly} é "quase"; {hard} é "duro, difícil" e {hardly} é "dificilmente". São quatro pares que mudam de categoria e de sentido ao mesmo tempo, e nenhum deles segue a regra do {ly}.

## Nem todo -ly é advérbio

O caminho inverso também tem uma armadilha: {lovely}, {friendly}, {lively} e {lonely} terminam em {ly} e são adjetivos, não advérbios. {a lovely day} está correto; {She sings lovely} não existe.

O teste é o mesmo dos dois lados: se a palavra aceita um {very} antes dela, é adjetivo; se aparece depois de um verbo que diz como, é advérbio.`),
  vocab: [
    V('quickly', 'quickly', 'rapidamente'),
    V('softly', 'softly', 'suavemente'),
    V('carefully', 'carefully', 'cuidadamente'),
    V('fast', 'fast', 'rápido, rápido'),
    V('hard', 'hard', 'duro, difícil'),
    V('late', 'late', 'tarde'),
    V('early', 'early', 'cedo'),
    V('straight', 'straight', 'direto, reto'),
    V('hardly', 'hardly', 'dificilmente'),
    V('lately', 'lately', 'recentemente'),
    V('nearly', 'nearly', 'quase'),
    V('well', 'well', 'bem'),
    V('soon', 'soon', 'em breve'),
    V('yesterday', 'yesterday', 'ontem'),
    V('very', 'very', 'muito'),
    V('too', 'too', 'também, demais'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O advérbio de modo se forma por três vias: adjetivo mais -ly, forma própria sem relação com adjetivo, ou adjetivo que já serve como advérbio.',
      ),
    },
    {
      n: '2',
      text: T(
        'Fast, hard, late, early, straight, high e low são adjetivo e advérbio com a mesma forma.',
      ),
    },
    {
      n: '3',
      text: T(
        'Hardly, lately e nearly não são os advérbios de hard, late e near: o sentido é outro.',
      ),
    },
    { n: '4', text: T('Palavras como lovely, friendly e lively terminam em -ly e são adjetivos.') },
    {
      n: '5',
      text: T(
        'O teste de categoria é duplo: antes da palavra pode entrar very, então é adjetivo; depois de um verbo que diz como, é advérbio.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'Mateus 5:48 traz perfect uma vez como advérbio e uma vez como adjetivo. O contexto decide, e é o próprio verbo que está em discussão que faz o trabalho.',
      ),
    },
    {
      label: T('Diagnóstico:'),
      text: T(
        'Se o aluno diz "hardly" quando queria dizer "com dificuldade", o problema não é a forma: é que ele supôs que o par é regular e nunca verificou o sentido.',
      ),
    },
  ],
  examples: [
    { text: '{He speaks slowly}', gloss: T('ele fala devagar') },
    { text: '{She runs fast}', gloss: T('ela corre rápido — advérbio') },
    { text: '{a fast train}', gloss: T('um trem rápido — adjetivo') },
    { text: '{She works hard}', gloss: T('ela trabalha muito') },
    { text: '{He hardly ever comes}', gloss: T('ele quase nunca vem') },
    { text: '{What have you been doing lately}', gloss: T('o que você tem feito ultimamente') },
    { text: '{The work is nearly done}', gloss: T('o trabalho está quase pronto') },
    { text: '{Be ye therefore perfect}', gloss: T('sede perfeitos — perfect como advérbio') },
    { text: '{a lovely day}', gloss: T('um dia lovely — adjetivo, não advérbio') },
    { text: '{We shall see you soon}', gloss: T('vamos te ver em breve') },
  ],
  tables: [
    {
      caption: T('As três vias'),
      head: [T('Via'), T('Fórmula'), T('Exemplos'), T('Observação')],
      rows: [
        [
          T('adjetivo + -ly'),
          T('quick → quickly'),
          '{quickly, softly, carefully}',
          T('a maioria dos casos'),
        ],
        [T('forma própria'), T('—'), '{fast, well, soon, now}', T('decorar como são')],
        [
          T('adjetivo = advérbio'),
          T('—'),
          '{fast, hard, late, straight}',
          T('sem acréscimo nenhum'),
        ],
      ],
    },
    {
      caption: T('Os pares que trocam o sentido'),
      head: [T('Sem -ly'), T('Com -ly'), T('Diferença de sentido')],
      rows: [
        ['{hard}', '{hardly}', T('duro × dificilmente')],
        ['{late}', '{lately}', T('tarde × recentemente')],
        ['{near}', '{nearly}', T('perto × quase')],
        ['{well}', '{well}', T('o mesmo: advérbio nas duas')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase está correta?'),
    options: [
      T('He speaks hardly'),
      T('He speaks hard'),
      T('He speaks nearly'),
      T('He speaks late'),
    ],
    answer: 1,
    hint: T('Hardly significa "dificilmente"; para "com dificuldade", use hard.'),
  },
  exercises: [
    { kind: 'fill', prompt: T("Derive o advérbio: 'careful' → '___'"), answer: 'carefully' },
    { kind: 'fill', prompt: T("Complete: 'She is a ___ girl.' (lindo)"), answer: 'lovely' },
    {
      kind: 'match',
      prompt: T('Ligue a palavra à categoria.'),
      pairs: [
        { a: 'quickly', b: T('advérbio') },
        { a: 'fast', b: T('advérbio e adjetivo') },
        { a: 'hardly', b: T('advérbio de negação') },
        { a: 'lovely', b: T('adjetivo') },
      ],
      answer: ['0-0', '1-1', '2-0', '3-1'],
    },
    {
      kind: 'choose',
      prompt: T('Qual frase usa hardly corretamente?'),
      options: [
        T('He hardly speaks English'),
        T('He speaks hardly English'),
        T('He speaks hardly'),
        T('He is hardly speak English'),
      ],
      answer: 0,
    },
  ],
};
