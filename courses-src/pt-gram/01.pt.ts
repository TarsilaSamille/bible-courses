import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  section: T('As palavras e suas classes'),
  title: T('Morfologia: estrutura das palavras'),
  subtitle: T('Radical, afixos e desinências'),
  body: C(`**Visão geral.** A palavra tem três camadas: o {radical}, que carrega o sentido, e os {afixos}, que entram em volta dele.

**Regra 1.** O radical é o que sobra depois de tirar prefixo, sufixo e desinência: {palavr-} em {palavra}, {salv-} em {salvação}, {cans-} em {cansado}.

**Regra 2.** O prefixo entra antes do radical e o sufixo depois: {des-} + {leal} dá {desleal}, e {leal} + {-dade} dá {lealdade}.

**Regra 3.** Desinência é a parte que flexiona: {casa} e {casas} mudam de terminação, {falou} e {falamos} também, mas {cansado} é sempre {cansado}.

**Regra 4.** O teste é a troca da frase: se a forma muda quando você troca o sujeito, é desinência; se continua igual, é sufixo.

**Aplicação.** Em {a palavra de Deus permanece}, a análise começa pelo fim da palavra: {palavra} perde a desinência {-a} e deixa {palavr-}. {Deus} é nome próprio e não recebe terminação visível, como {θεός} no grego de João 1, 1. {permanece} se abre em {permanec-} + {-e}, e o mesmo radical aparece no infinitivo {permanecer}: o que muda é a terminação, não o sentido.

**Verificação.** Faça três perguntas antes de classificar: qual é o **radical**, há **prefixo** antes dele, e o que **flexiona** quando a frase muda? Se flexiona, é desinência; se não, é sufixo. Errar essa distinção leva a escrever {cans-ado} como se flexionasse, e essa forma não existe: {cansado} é {cans-} + {-ado}, e o {-ado} é fixo.`),
  vocab: [
    V('radical', 'radical', 'radical'),
    V('prefixo', 'prefixo', 'prefixo'),
    V('sufixo', 'sufixo', 'sufixo'),
    V('desinência', 'desinência', 'desinência'),
    V('vogalia', 'vogalia', 'vogalia'),
    V('derivação', 'derivação', 'derivação'),
    V('deslealdade', 'deslealdade', 'deslealdade'),
    V('inumerável', 'inumerável', 'inumerável'),
    V('palavr-', 'palavr-', 'radical de {palavra}'),
    V('cans-', 'cans-', 'radical de {cansado}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'A palavra tem três camadas: o {radical}, que carrega o sentido, e os {afixos}, que entram em volta dele.',
      ),
    },
    {
      n: '§2',
      text: T(
        'O radical é o que sobra depois de tirar prefixo, sufixo e desinência: {palavr-} em {palavra}, {salv-} em {salvação}, {cans-} em {cansado}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'O prefixo entra antes do radical e o sufixo depois: {des-} + {leal} dá {desleal}, e {leal} + {-dade} dá {lealdade}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Desinência é a parte que flexiona: {casa} e {casas} mudam de terminação, {falou} e {falamos} também, mas {cansado} é sempre {cansado}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'O teste é a troca da frase: se a forma muda quando você troca o sujeito, é desinência; se continua igual, é sufixo.',
      ),
    },
  ],
  notes: [
    {
      label: T('O hífen não é afixo'),
      text: T(
        '{guarda-chuva} é uma só palavra, formada de {guarda} e {chuva}: são dois radicais inteiros, e nenhum dos dois é afixo de {guardar}. Já {antisocial} leva {anti-}, que é prefixo, e o hífen aparece só porque a vogal final do prefixo colidiria com a inicial do radical.',
      ),
    },
    {
      label: T('O radical nem sempre aparece nu'),
      text: T(
        'Em {permanece}, o {e} final é desinência verbal e some em {permanecer}; em {cansado}, o {o} faz parte do sufixo {-ado} e não some nunca. O mesmo radical, dois destinos: é a flexão que diz qual dos dois é.',
      ),
    },
  ],
  examples: [
    {
      text: 'salvação',
      gloss: T(
        'Radical {salv-} com o sufixo {-ção}: o sentido de {salvar} convertido em nome de ação.',
      ),
    },
    {
      text: 'deslealdade',
      gloss: T(
        '{des-} nega e {-dade} nomeia a qualidade; o radical {leal} continua visível no meio.',
      ),
    },
    { text: 'permanecer', gloss: T('O radical {permanec-} com a desinência {-er} do infinitivo.') },
    {
      text: 'permanece',
      gloss: T('O mesmo radical {permanec-}, agora com a desinência verbal {-e}.'),
    },
    {
      text: 'palavra',
      gloss: T(
        'Sem terminação visível no singular: o {a} final é desinência, e o plural {palavras} a confirma.',
      ),
    },
    {
      text: 'cansado',
      gloss: T(
        '{cans-} com o sufixo {-ado}; a forma não flexiona, e é por isso que o {o} não é desinência.',
      ),
    },
    {
      text: 'inumerável',
      gloss: T(
        '{in-} nega e {-ável} formata o adjetivo; o plural {inumeráveis} acrescenta {-s} à desinência.',
      ),
    },
    {
      text: 'antisocial',
      gloss: T(
        'Prefixo {anti-} com hífen: sem ele, o {i} do prefixo e o {s} do radical colidiriam.',
      ),
    },
    {
      text: 'Deus',
      gloss: T(
        'Nome próprio sem terminação visível, como {θεός} no grego: aqui o sentido não precisa de marca de número.',
      ),
    },
  ],
  tables: [
    {
      caption: T('As três camadas da palavra'),
      head: [T('Camada'), T('Pergunta que a identifica'), T('Exemplo')],
      rows: [
        [T('radical'), T('Qual é o sentido nuclear?'), T('{salv-} em {salvação}')],
        [T('prefixo'), T('O que vem antes do radical?'), T('{des-} em {deslealdade}')],
        [T('sufixo'), T('O que vem depois do radical?'), T('{-dade} em {lealdade}')],
        [T('desinência'), T('O que flexiona na frase?'), T('{-ão} em {salvação}')],
      ],
    },
    {
      caption: T('Flexão nominal e flexão verbal'),
      head: [T('Forma'), T('O que marca'), T('Decomposição')],
      rows: [
        [T('{casa}'), T('substantivo singular'), T('radical {cas-} + {-a}')],
        [T('{casas}'), T('substantivo plural regular'), T('{casa} + {-s}')],
        [T('{salvação}'), T('substantivo singular'), T('radical {salv-} + {-ção}')],
        [T('{salvações}'), T('substantivo plural irregular'), T('{salvação} + {-ões}')],
        [T('{falou}'), T('verbo, 3.ª pessoa do singular'), T('radical {fal-} + {-ou}')],
        [T('{falamos}'), T('verbo, 1.ª pessoa do plural'), T('radical {fal-} + {-amos}')],
      ],
    },
    {
      caption: T('Quando a palavra não flexiona'),
      head: [T('Palavra'), T('Camada visível'), T('Teste')],
      rows: [
        [T('{Deus}'), T('radical {deus} sem terminação'), T('não recebe plural de uso corrente')],
        [T('{Jesus}'), T('radical {jesus} sem terminação'), T('nome próprio de pessoa')],
        [T('{hoje}'), T('radical {hoj-} de advérbio'), T('não varia com o resto da frase')],
        [T('{ontem}'), T('radical {ontem} invariável'), T('não se flexiona')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {cansado}, o que é o {o} final?'),
    options: [
      T('um sufixo, junto com {-ado}'),
      T('uma desinência, porque a palavra flexiona'),
      T('um prefixo, porque vem antes do radical'),
      T('a vogalia da palavra'),
    ],
    answer: 0,
    hint: T('Troque {cansado} por {cansar} e veja se o {o} sobrevive.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual destes pares tem o mesmo radical?'),
      options: [
        T('{permanece} e {permanecer}'),
        T('{casa} e {causa}'),
        T('{leal} e {lealdade}'),
        T('{cansado} e {cansar}'),
      ],
      answer: 0,
      hint: T('Compare o que sobra depois de tirar os afixos.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada palavra à camada que ela exemplifica.'),
      pairs: [
        { a: T('{salvação}'), b: T('radical mais sufixo') },
        { a: T('{desleal}'), b: T('radical mais prefixo') },
        { a: T('{casas}'), b: T('desinência de número') },
        { a: T('{guarda-chuva}'), b: T('dois radicais, sem afixo') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('O prefixo entra ______ do radical, e o sufixo depois.'),
      answer: 'antes',
      hint: T('{des-} vem antes de {leal}, e {-dade} vem depois.'),
    },
  ],
};
