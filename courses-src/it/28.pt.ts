import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  title: T('Leitura: a carta aos Romanos'),
  subtitle: T('Vi esorto dunque; però questo non'),
  section: T('Leitura e sintaxe'),
  body: C(`## O grego traz as partículas; o italiano não

Paulo escreve em grego, e o grego conserva partículas que não têm tradução uma a uma. **{γάρ}** explica, **{δέ}** opõe, **{οὖν}** conclui, **{μέν}** e **{δέ}** juntos formam um par. Essas palavras estão na margem do texto grego marcando a arquitetura da frase, e nenhuma delas é conteúdo: são posição.

O italiano não tem nada disso. Onde o grego tem {οὖν}, o italiano escreve {dunque} ou {perciò} ou {quindi}, três palavras para uma ideia. Onde o grego tem {γάρ}, escreve {poiché}, {infatti} ou {siccome}. Onde o grego tem {δέ}, o italiano escreve {ma}, {e} ou {anzi}, e o próprio grego usa {δέ} para {e}, o que torna a correspondência ainda menos mecânica.

## O que o italiano ganha e o que perde

O italiano às vezes **distingue** o que o grego unia: {però} não é {ma}, {infatti} não é {poiché}, {tuttavia} não é {benché}. A tradução italiana ganhou nuances que o grego não tinha, e esse é um ganho real, do qual o leitor de português também se beneficia.

O que ela perdeu foram as ênfases de cadeia. No grego, três {οὖν} seguidos mostram que o raciocínio é dedutivo; no italiano, três {dunque} numa carta só dão a impressão de estilo, não de lógica. Em compensação, ninguém sente falta: o português também não tem partículas, e por isso essa perda é do grego para o italiano, não do italiano para quem lê.

## Romanos 12:1-2, lido por dentro

«{Vi esorto dunque}, fratelli, per la compassione di Dio, a offrire i vostri corpi come sacrificio vivente, santo, gradito a Dio. E {non conformatevi} a questo mondo, ma {trasformatevi}, {rinnovando} il vostro modo di pensare.»

O {dunque} do início vem de um {οὖν}, e não é decorativo: liga a carta às decisões que os capítulos anteriores já tomaram. O {ma} do segundo versículo traduz um {δέ}, e o grego opõe duas proibições a um mandamento: não vos conformeis a este mundo, mas transformai-vos. O {rinnovando} é um gerúndio, e {rinnovando il vostro modo di pensare} faz as duas coisas: diz o meio do verbo {trasformatevi} e nomeia o meio, que é o {modo di pensare}. Esse {di pensare} é um genitivo, o mesmo mecanismo de {il libro di Paolo}.

A {compassione di Dio} é outro genitivo, {di} mais nome sem artigo. E {questo mondo} leva artigo porque {questo} é demonstrativo; sem ele, {mondo} seria um mundo qualquer.

## O que ler

Quem traduz do grego tem de escolher: render as partículas e escrever um texto mais pesado e mais fiel, ou apagá-las e escrever um texto italiano mais leve. O que não funciona é traduzir todas por {perché}, que é o erro mais comum e o mais difícil de perceber depois.`),
  vocab: [
    V('dunque', 'dunque', 'portanto'),
    V('perciò', 'perciò', 'por isso'),
    V('quindi', 'quindi', 'portanto'),
    V('però', 'però', 'porém'),
    V('infatti', 'infatti', 'de fato'),
    V('poiché', 'poiché', 'pois'),
    V('anzi', 'anzi', 'ao contrário'),
    V('tuttavia', 'tuttavia', 'contudo'),
    V('corpi', 'corpo', 'corpos'),
    V('sacrificio', 'sacrificio', 'sacrifício'),
    V('mondo', 'mondo', 'mundo'),
    V('rinnovando', 'rinnovare', 'renovando'),
    V('trasformatevi', 'trasformare', 'transformai-vos'),
    V('conformatevi', 'conformare', 'conformei-vos'),
    V('compassione', 'compassione', 'compaixão'),
    V('pensare', 'pensare', 'pensar'),
    V('fratelli', 'fratello', 'irmãos'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual palavra italiana traduz o οὖν de Romanos 12:1?'),
    options: [T('poiché'), T('dunque'), T('benché'), T('sebbene')],
    answer: 1,
    hint: T('Οὖν conclui e liga ao que já foi dito.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: Vi esorto ___, fratelli (portanto)'),
      answer: 'dunque',
      hint: T('É a conclusão do raciocínio anterior.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual palavra italiana rende melhor o γάρ explicativo?'),
      options: [T('infatti'), T('benché'), T('anzi'), T('ossia')],
      answer: 0,
      hint: T('γάρ explica a razão.'),
    },
    {
      kind: 'choose',
      prompt: T('Em «rinnovando il vostro modo di pensare», o que é «di pensare»?'),
      options: [
        T('Um verbo conjugado'),
        T('Um genitivo'),
        T('Uma preposição isolada'),
        T('Um numeral'),
      ],
      answer: 1,
      hint: T('É o nome que explica a natureza do modo de pensar.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O grego usa partículas de posição (γάρ, δέ, οὖν, μέν) que o italiano não reproduz palavra a palavra.',
      ),
    },
    {
      n: '2',
      text: T('O italiano oferece três palavras onde o grego tinha uma: dunque, perciò, quindi.'),
    },
    {
      n: '3',
      text: T('O italiano às vezes distingue mais que o grego: però, infatti, tuttavia, anzi.'),
    },
    {
      n: '4',
      text: T('O que se perde é a cadeia de conclusões (οὖν), não o sentido de cada oração.'),
    },
    {
      n: '5',
      text: T('Cada genitivo italiano é di mais um nome sem artigo: la compassione di Dio.'),
    },
  ],
  notes: [
    {
      label: T('O que muda para quem lê em português'),
      text: T(
        'O leitor de português não sente falta de {γάρ} nem de {οὖν}, porque o português também não os tem. A diferença real é outra: o texto italiano parece mais solto do que é. Onde o grego alternava partículas diferentes, o italiano repeteu a mesma palavra três vezes.',
      ),
    },
    {
      label: T('Quando vale a pena ser fiel'),
      text: T(
        'Em traduções acadêmicas é comum ver o italiano manter a distinção: {poiché} para causa, {infatti} para explicação, {perciò} para conclusão. Não é uma obrigação, é escolha de estilo, e num texto bíblico ela ajuda o leitor a enxergar onde o raciocínio muda de direção.',
      ),
    },
  ],
  examples: [
    { text: 'Vi esorto dunque, fratelli.', gloss: T('Rogo-vos pois, irmãos.') },
    { text: 'E non conformatevi a questo mondo.', gloss: T('E não vos conformeis a este mundo.') },
    { text: 'Ma trasformatevi.', gloss: T('Mas transformai-vos.') },
    {
      text: 'Rinnovando il vostro modo di pensare.',
      gloss: T('Renovando o vosso modo de pensar.'),
    },
    { text: 'Per la compassione di Dio.', gloss: T('Pela compaixão de Deus.') },
    {
      text: 'Per quelli che amano Dio tutte le cose cooperano al bene.',
      gloss: T('Para os que amam Deus todas as coisas contribuem para o bem.'),
    },
    { text: 'Il giudizio è di Cristo.', gloss: T('O juízo é de Cristo.') },
    { text: 'Non giudicare per le apparenze.', gloss: T('Não julgues pelas aparências.') },
  ],
  tables: [
    {
      caption: T('Partículas do grego e o italiano'),
      head: ['Greco', 'Funzione', 'Italiano', 'Che cosa si perde'],
      rows: [
        ['{γάρ}', 'spiega', 'poiché, infatti', 'la explicación se vuelve causa'],
        ['{οὖν}', 'conclude', 'dunque, perciò, quindi', 'la cadena del razonamiento'],
        ['{δέ}', 'oppone o suma', 'ma, e, anzi', 'el mismo δέ hace las dos'],
        ['{μέν}', 'primero del par', '—', 'casi siempre desaparece'],
        ['{γε}', 'por lo menos', 'almeno', 'queda dentro de la oración'],
        ['{οὐ}, {μή}', 'niega', 'non', 'el griego niega en tres sitios'],
      ],
    },
    {
      caption: T('Romanos 12:1-2, por linhas'),
      head: ['Línea', 'Greco', 'Italiano', 'Glosa'],
      rows: [
        ['1', '{παρακαλῶ οὖν}', '{vi esorto dunque}', 'os ruego pues'],
        ['1', '{τὰ σώματα}', '{i vostri corpi}', 'vuestros cuerpos'],
        ['1', '{θυσίαν ζῶσαν}', '{sacrificio vivente}', 'sacrificio vivo'],
        ['2', '{μὴ συσχηματίζεσθε}', '{non conformatevi}', 'no os conforméis'],
        ['2', '{μεταμορφοῦσθε}', '{trasformatevi}', 'transformaos'],
        ['2', '{ἀνανεοῦσθαι}', '{rinnovando}', 'renovando'],
      ],
    },
  ],
};
