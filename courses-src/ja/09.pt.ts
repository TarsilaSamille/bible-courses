import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  section: T('Verbo'),
  title: T('Onde o tempo mora, se o verbo não flexiona'),
  subtitle: T(
    'O japonês diz "ontem" e "sempre" com partículas e advérbios depois do verbo, não mudando o verbo',
  ),
  body: C(`
## O tempo mora depois do verbo

O verbo japonês não flexiona: não há "comi" ao lado de "como", não há uma terminação de passado. Onde está, então, o tempo? Em outro lugar, **depois** da forma verbal, em partículas e advérbios. O verbo fica exatamente igual, e quem carrega o tempo é o que vem em seguida.

O passado polido é {masu} trocado por {mashita}: {パンを食べます} é "como" ou "vou comer", {パンを食べました} é "comi". Note que não existe um verbo "no passado" ao lado do verbo "no presente": existe o mesmo verbo com {masu} e com {mashita}.

A negação polida é {masen}, e o passado negativo é o mesmo {masen} mais o {deshita} de "era": {masen deshita}. Repare na descida, o presente negativo fica em {masen} e o passado desce um degrau, para {masen deshita}. Nenhuma terminação nova entra: o que desce é o auxiliar.

Por cima disso, {mashita} seguido de {ka} faz uma pergunta: "comi, será?". É a mesma construção de {ka}, e aqui ela não produz dúvida neutra, produz **pergunta retórica**: a forma de dizer "claro que eu não comi isso".

## Uma forma, três tempos

A escala é uma só: {masu} cobre presente, hábito e futuro ao mesmo tempo. Uma tabela resolve.

Em português o verbo muda de forma em cada um dos três casos: "como", "costumo comer", "vou comer". São três verbos para uma ideia só. Em japonês existe um: {パンを食べます}. Quem escolhe o sentido é o contexto, um calendário, um hábito que se repete, uma intenção.

E o passado não tem "passado recente" nem "passado distante": {パンを食べました} serve para ontem e para dez anos atrás. O que diz "ontem" é o advérbio que vem antes; quando ele falta, é a narrativa, com sua linha do tempo, que faz o trabalho.

## Dois "vou" e um "se"

{masu} é o "vou" do meu plano: eu decidi, eu vou fazer. {deshou} é o "vou" da previsão e da obrigação que vem de fora, "vai chover", "ele vai chegar". Um é decisão minha; o outro é o mundo decidindo. O mesmo vale para a recusa: {てはいけません} é "não pode", e essa obrigação o português quase sempre deixa implícita.

Agora o uso surpreendente do dia: **o passado é a fórmula condicional**. Não existe partícula de "se" no japonês; o "se... então" é feito com um tempo que não é tempo. O "se" vem na frente, em {tara} ou {nara}, e o resultado vem depois: {雨が降ったら、行く} é "se chover, eu vou". O {nara} diz "no caso de chover, se chover de fato"; o {tara} diz "se chover (e eu acho que vai)". Em ambos, o "se" é um passado, e é o jeito japonês de fingir que a condição é um fato previsto.

## "Estar fazendo" e o passado que fechou

"Estar fazendo" também não flexiona: é partícula mais verbo. O {te} liga um verbo ao {imasu}, e o resultado é "está a chover". O mesmo {te} faz "comer e depois sair"; ele não marca tempo nenhum, só gruda dois verbos. Em texto escrito quase sempre aparece a forma polida, e aí o mesmo {te} pode estar no "está chovendo" ou no "tem estado chovendo, e o resultado continua".

Dois versículos mostram o outro lado. Em João 19:30, {すべては完了した}, o passado ali declara algo completo, em vez de mostrar algo em andamento: a obra acabou, não está em curso. É a frase mais famosa da tradução japonesa de 1987. E em 1 Corinto 13:4, {愛は忍耐強い}, não há partícula de tempo nenhuma: é um presente atemporal, uma afirmação que vale para sempre, e é por isso que a frase existe sem {masu} e sem {desu}.

A diferença entre um e outro é a diferença que abre o Evangelho de João. João 1:1 diz {初めに言葉があった}, passado narrado, uma coisa que aconteceu e que o evangelista conta em sequência; se o versículo dissesse {愛は忍耐強い}, seria uma lei geral, sem data.

E a regra de ouro aqui é simples: a forma **polida** conta o tempo; a forma plana quase nunca conta. Em texto bíblico, em carta, em notícia, você vai ver {masu} e {desu} quase sempre, e é por isso que quem não conhece a série polida lê o texto sem tempo.
`),
  vocab: [
    V('masu', 'ます', 'sufixo polido; presente, hábito e futuro ao mesmo tempo'),
    V('mashita', 'ました', 'passado polido'),
    V('masen', 'ません', 'negativo polido'),
    V('masen deshita', 'ませんでした', 'passado negativo: {masen} descendo para {deshita}'),
    V('deshita', 'でした', '"era": a peça que faz o passado negativo'),
    V('deshou', 'でしょう', 'previsão: "vai acontecer mesmo"'),
    V('ka', 'か', 'partícula de pergunta; com {mashita} dá a pergunta retórica'),
    V('nai', 'ない', 'negativo na forma plana'),
    V('ta', 'た', 'passado na forma plana, sem registro cortês'),
    V('nakkatta', 'なかった', 'passado negativo na forma plana'),
    V('desu', 'です', 'ser/estar na forma polida; o "é" que aparece sem verbo'),
    V('imasu', 'います', '"estar"; com {te} forma o progressivo'),
    V('te', 'て', 'conectivo: liga dois verbos e forma o progressivo'),
    V('tara', 'たら', '"se... então" de hipótese'),
    V('nara', 'なら', '"se... então" de condição'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O tempo não mora no verbo: mora na partícula que vem depois dele, e é a série polida que conta.',
      ),
    },
    {
      n: '2',
      text: T(
        '{masu} cobre presente, hábito e futuro ao mesmo tempo; o contexto escolhe o sentido.',
      ),
    },
    {
      n: '3',
      text: T(
        '{masu} é o "vou" do meu plano; {deshou} é o "vou" da previsão e da obrigação externa.',
      ),
    },
    {
      n: '4',
      text: T(
        'Não há partícula de "se": o "se... então" japonês nasce de um passado, com {tara} ou {nara}.',
      ),
    },
    {
      n: '5',
      text: T(
        'A forma polida conta o tempo e a forma plana quase nunca; por isso o texto escrito é quase todo {masu}.',
      ),
    },
  ],
  notes: [
    {
      label: T('A pergunta que não pergunta'),
      text: T(
        '{mashita} seguido de {ka} é a mesma construção de {ka} da lição 1, mas aqui ela vira pergunta retórica: a forma educada de negar algo com todas as letras. Quem lê um versículo com {mashita ka} deve ler descrença, não curiosidade.',
      ),
    },
    {
      label: T('Cada advérbio conta uma história'),
      text: T(
        'Ontem, hoje e amanhã vivem em advérbios que vêm antes do verbo, e o verbo continua o mesmo. Tira o advérbio e o {masu} continua igual: quem conta o tempo é o advérbio, a linha do tempo da narrativa ou o contexto — nunca a terminação do verbo.',
      ),
    },
  ],
  examples: [
    { text: 'きのう映画を見ました', gloss: T('kinō eiga o mimashita — ontem vi um filme') },
    {
      text: 'きのう映画を見ませんでした',
      gloss: T('kinō eiga oimasen deshita — ontem não vi filme'),
    },
    { text: '雨が降っています', gloss: T('ame ga futte imasu — está chovendo') },
    {
      text: 'すべては完了した',
      gloss: T('subete wa kanryō shita — tudo está cumprido (João 19:30)'),
    },
    { text: '愛は忍耐強い', gloss: T('ai wa nintaiyokai — o amor é paciente (1 Corinto 13:4)') },
  ],
  tables: [
    {
      caption: T('Uma só forma, três tempos'),
      head: [T('O que você quis dizer'), T('O que o japonês escreve'), T('A frase que decide')],
      rows: [
        [T('presente, agora'), T('{ます}'), T('{映画を見ます} — "eu vejo o filme"')],
        [T('hábito'), T('{ます}'), T('{毎日映画を見ます} — "eu vejo filme todo dia"')],
        [T('futuro, decisão minha'), T('{ます}'), T('{あした見ます} — "vou ver amanhã"')],
        [T('previsão, obrigação externa'), T('{でしょう}'), T('{雨が降るでしょう} — "vai chover"')],
      ],
    },
    {
      caption: T('Onde cada tempo mora'),
      head: [T('Tempo'), T('Na série polida'), T('Na forma plana')],
      rows: [
        [T('passado'), T('{mashita}'), T('{ta}')],
        [T('passado negativo'), T('{masen deshita}'), T('{nakkatta}')],
        [T('negativo'), T('{masen}'), T('{nai}')],
        [
          T('presente e hábito'),
          T('{masu}'),
          T('nada: a forma plana é a mesma em todos os tempos'),
        ],
      ],
    },
    {
      caption: T('As duas portas do "se... então"'),
      head: [T('Construção'), T('O que significa'), T('Quando se usa')],
      rows: [
        [T('{たら}'), T('"se... então", com hipótese'), T('planejar: {雨が降ったら、行きません}')],
        [T('{なら}'), T('"se... então", com condição'), T('avaliar: {雨が降るなら、行きません}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {きのう映画を見ませんでした}, o que diz a forma final?'),
    options: [
      T('passado negativo: "ontem não vi o filme"'),
      T('negativo de presente: "eu não vejo o filme"'),
      T('negativo de futuro: "não vou ver o filme"'),
      T('pergunta: "será que eu não vi o filme?"'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "ontem não comi pão": きのうパンを食べ____'),
      answer: 'ませんでした',
    },
    {
      kind: 'match',
      prompt: T('Ligue a partícula ao que ela faz'),
      pairs: [
        { a: T('{ました}'), b: T('marca o passado na série polida') },
        { a: T('{ません}'), b: T('marca o negativo na série polida') },
        { a: T('{でしょう}'), b: T('marca a previsão: "vai acontecer"') },
        { a: T('{たら}'), b: T('abre o "se... então" de hipótese') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual destas frases é uma condição "se... então"?'),
      options: [
        T('{雨が降ったら、公司将行きます}'),
        T('{雨が降っています}'),
        T('{雨は降りました}'),
        T('{雨が降る}'),
      ],
      answer: 0,
    },
  ],
};
