import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  section: T('O sentido e a subordinação'),
  title: T('Figuras de linguagem'),
  subtitle: T('Comparação, substituição e efeito expressivo'),
  body: C(`**Visão geral.** A {metáfora} transfere sentido sem marca de comparação, e a {comparação} a marca: em {Eu sou a videira} não há {como}; em {Ele é como um anjo} há.

**Regra 1.** A {metonímia} substitui um termo por outro ligado por relação, e não por semelhança: em {a coroa de José}, {coroa} vale por {rei}, que é quem a usa.

**Regra 2.** A {hipérbole} amplia além do possível e o {eufemismo} atenua: em {morreram de fome}, a primeira; em {passou desta vida}, o segundo.

**Regra 3.** A {ironia} diz o contrário do que pensa, e a {personificação} dá ação humana ao que não é humano: em {o vento uivava}, a segunda.

**Regra 4.** A {antítese} põe lado a lado o que se opõe, e é a figura mais explícita do texto bíblico: em {O amor é paciente; o amor, não}, a oposição está escrita.

**Aplicação.** Em {Eu sou a videira, e vós os ramos}, a metáfora é explícita na imagem e implícita na marca: o verbo {ser} mantém a comparação, e é por isso que a frase pode virar {Ele é como a videira} sem perder o sentido. Em {Isto é o meu corpo}, o grego (τοῦτό ἐστιν τὸ σῶμά μου) usa verbo de identidade e não de comparação, o que torna a leitura **sacramental** obrigatória e não uma metáfora.

**Verificação.** Para cada figura, pergunte: o verbo é {ser} ou {parecer}? Se é {ser} com imagem, é **metáfora**; se há {como}, é **comparação**. A associação é de {semelhança} ou de {relação}? E a força é de {intensificar}, de {suavizar} ou de {contrastar}? Três perguntas dizem o que fazer com a tradução, e a última decide se o grego pode virar comparação em português.`),
  vocab: [
    V('metáfora', 'metáfora', 'comparação sem {como}'),
    V('comparação', 'comparação', 'comparação com {como}'),
    V('metonímia', 'metonímia', 'troca por relação'),
    V('hipérbole', 'hipérbole', 'ampliação além do real'),
    V('eufemismo', 'eufemismo', 'suavização do termo duro'),
    V('ironia', 'ironia', 'dizer o contrário do que se pensa'),
    V('personificação', 'personificação', 'ação humana em não humano'),
    V('antítese', 'antítese', 'oposição escrita lado a lado'),
    V('a videira', 'a videira', 'imagem do texto de João 15'),
    V('οὐδείς', 'οὐδείς', 'hipérbole grega da negação'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'A {metáfora} transfere sentido sem marca de comparação, e a {comparação} a marca: em {Eu sou a videira} não há {como}; em {Ele é como um anjo} há.',
      ),
    },
    {
      n: '§2',
      text: T(
        'A {metonímia} substitui um termo por outro ligado por relação, e não por semelhança: em {a coroa de José}, {coroa} vale por {rei}, que é quem a usa.',
      ),
    },
    {
      n: '§3',
      text: T(
        'A {hipérbole} amplia além do possível e o {eufemismo} atenua: em {morreram de fome}, a primeira; em {passou desta vida}, o segundo.',
      ),
    },
    {
      n: '§4',
      text: T(
        'A {ironia} diz o contrário do que pensa, e a {personificação} dá ação humana ao que não é humano: em {o vento uivava}, a segunda.',
      ),
    },
    {
      n: '§5',
      text: T(
        'A {antítese} põe lado a lado o que se opõe, e é a figura mais explícita do texto bíblico: em {O amor é paciente; o amor, não}, a oposição está escrita.',
      ),
    },
  ],
  notes: [
    {
      label: T('A metáfora que o grego não marca'),
      text: T(
        'O grego antigo quase não usa {como} em comparações, e é por isso que a leitura Grega é mais compacta que a portuguesa. O português introduziu o {como} e, com ele, a possibilidade de ler a frase como comparação explícita. Traduzir {οἶδα ὅσον} por {sei como} acrescenta uma marca que o grego não tinha, e é por isso que a tradução ora cria uma metáfora nova, ora conserva a antiga.',
      ),
    },
    {
      label: T('A hipérbole que o grego usa mais'),
      text: T(
        'Em {οὐδεὶς ἄνθρωπος}, {nenhum homem}, o grego junta o negativo {οὐδείς} a uma expressão absoluta, e o resultado é mais forte do que qualquer português corrente. No grego, a negação intensifica; em português, a dupla negação {não é possível que ninguém} soa mais fraca. É uma hipérbole que só a língua de origem faz.',
      ),
    },
  ],
  examples: [
    {
      text: 'Eu sou a videira, e vós os ramos',
      gloss: T('Metáfora: {a videira} substitui {Deus} sem {como} no meio.'),
    },
    {
      text: 'Ele é como um anjo',
      gloss: T('Comparação explícita: o {como} marca a transferência de sentido.'),
    },
    { text: 'a coroa de José', gloss: T('Metonímia: {coroa} vale por {rei}, que é quem a usa.') },
    {
      text: 'morreram de fome no deserto',
      gloss: T('Hipérbole: nenhum homem morre apenas de fome no deserto, e a imagem reforça.'),
    },
    { text: 'passou desta vida', gloss: T('Eufemismo: o que é {morreu} aparece como {passou}.') },
    {
      text: 'o vento uivava',
      gloss: T('Personificação: o {vento} recebe a ação humana de {uivar}.'),
    },
    {
      text: 'O amor é paciente; o amor, não',
      gloss: T('Antítese: {é paciente} e {não} ficam lado a lado, e o {é} se repete.'),
    },
    {
      text: 'bendito o que vem em nome do Senhor',
      gloss: T('A frase é literal, e é a forma do texto que a torna citação.'),
    },
    {
      text: 'isto é o meu corpo',
      gloss: T('O verbo {é} é de identidade, não de comparação, e a leitura é sacramental.'),
    },
  ],
  tables: [
    {
      caption: T('As figuras de comparação e de substituição'),
      head: [T('Figura'), T('O que faz'), T('Marca'), T('Exemplo')],
      rows: [
        [T('{metáfora}'), T('transfere sentido'), T('nenhuma'), T('{Eu sou a videira}')],
        [T('{comparação}'), T('compara com {como}'), T('{como}'), T('{Ele é como um anjo}')],
        [T('{metonímia}'), T('troca por relação'), T('nenhuma'), T('{a coroa de José}')],
        [T('{alegoria}'), T('dá um sentido escondido'), T('símbolo'), T('{o bom pastor}')],
        [T('{ironia}'), T('diz o contrário'), T('tom do texto'), T('{ótimo, ottimo}')],
      ],
    },
    {
      caption: T('As figuras de efeito'),
      head: [T('Figura'), T('Força'), T('Efeito'), T('Exemplo')],
      rows: [
        [T('{hipérbole}'), T('amplia'), T('reforça'), T('{ninguém believe}')],
        [T('{eufemismo}'), T('atenua'), T('suaviza'), T('{passou desta vida}')],
        [T('{ironia}'), T('inverte'), T('contradiz'), T('{ótimo, ottimo}')],
        [T('{personificação}'), T('humaniza'), T('dá vida'), T('{o vento uivava}')],
        [T('{apóstrofe}'), T('dirige-se a alguém'), T('chama'), T('{Deus, meu Deus}')],
        [T('{antítese}'), T('opõe'), T('contrasta'), T('{é paciente; o amor, não}')],
      ],
    },
    {
      caption: T('O que o verbo decide na figura'),
      head: [T('Verbo'), T('Com imagem'), T('Com {como}'), T('O que traduzir')],
      rows: [
        [T('{ser}'), T('metáfora'), T('comparação'), T('manter o verbo')],
        [T('{parecer}'), T('sugestão'), T('hipérbole'), T('atenuar')],
        [T('{tornar-se}'), T('transformação'), T('comparação'), T('manter o verbo')],
        [T('{ficar}'), T('resultado'), T('eufemismo'), T('manter o verbo')],
        [T('{chamar}'), T('símbolo'), T('comparação'), T('não traduzir por {como}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {a coroa de José}, a figura usada é:'),
    options: [
      T('metonímia, porque {coroa} substitui {rei} por relação'),
      T('metáfora, porque {coroa} é uma imagem de {rei}'),
      T('hipérbole, porque {coroa} é maior do que o rei'),
      T('eufemismo, porque {coroa} evita dizer {rei}'),
    ],
    answer: 0,
    hint: T('Metonímia é relação, não semelhança: quem usa a coroa é o rei.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Em {Ele é como um anjo}, há:'),
      options: [
        T('comparação explícita, marcada pelo {como}'),
        T('metáfora, porque não há verbo {ser}'),
        T('hipérbole, porque o anjo é maior que o homem'),
        T('metonímia, porque {anjo} designa Deus'),
      ],
      answer: 0,
      hint: T('O {como} é a marca que distingue comparação de metáfora.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a figura ao que ela faz.'),
      pairs: [
        { a: T('{metáfora}'), b: T('transferência de sentido') },
        { a: T('{metonímia}'), b: T('troca por relação') },
        { a: T('{hipérbole}'), b: T('ampliação além do real') },
        { a: T('{eufemismo}'), b: T('suavização do termo') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('A figura que amplia o sentido além do possível é a ______.'),
      answer: 'hipérbole',
      hint: T('Em {morreram de fome}, ninguém morre só disso.'),
    },
  ],
};
