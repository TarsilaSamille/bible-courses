import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('O Konjunktiv II'),
  subtitle: T('würde, hätte, wäre e as formas literárias'),
  section: T('Os verbos'),
  body: C(`O Konjunktiv II é o tempo do que não é fato: hipótese, desejo, politeza, um relato que se repete sem certeza. Ele se constrói de duas maneiras. A primeira é analítica: todas as formas recebem würde, mais um infinitivo no presente. Ich würde kommen, ich würde gehen, ihr würdet sagen. É a forma que o Alemão prefere na fala e na escrita comum, e ela é tão regular que quase não precisa de regra.

A segunda é sintética, e é a forma antiga: a terminação do Indicativo mais um -t- ou uma terminação dupla na vogal. Ich hätte, du hättest, er hätte; ich wäre, du wärst, er wäre; ich käme, ich ginge, ich schließe. Note que os verbos sein, haben e os modais, todos com vogais radiais variáveis, formam um bloco fechado, e é esse bloco que se usa todos os dias: hätte, wäre, würde, könnte, müsste, sollte, dürfte, möchte.

O modo do desejo tem uma regra de tempo que é o coração da lição. Ich hätte gern Kaffee descreve um wish no presente, e se realizasse agora mesmo teríamos café; ich hätte Kaffee gehabt fala de um wish no passado, que já não pode ser satisfeito. A mesma regra vale para o Konjunktiv I: dass ich sei é desejo agora, dass ich gewesen wäre é desejo que não se cumpriu. Em português essa diferença quase não aparece, e é por isso que muitos learners traduzem as duas frases com o mesmo Eu queria.

A polidez é o segundo uso, e é mais barato do que parece. Ich hätte gern einen Kaffee é literalmente eu teria de bom grado um café, isto é, se tivesse. Könnten Sie mir helfen? é o polite could you. Se o Konjunktiv é de possibilidade real, quem fala acrescenta gern, gerne ou vielleicht, e é essa partícula que devolve a warmtura ao enunciado.

O Konjunktiv II também é o tempo dos Provisionssatz, a oração condicional: Wenn ich Zeit hätte, würde ich mehr lesen. Os dois tempos aparecem juntos, e a leitura bíblica depende disso.`),
  vocab: [
    V('würde', 'werden', 'eu faria (Konjunktiv II analítico)'),
    V('würde + Infinitiv', 'werden', 'fazer (forma analítica)'),
    V('hätte', 'haben', 'teria (de ter)'),
    V('hätten', 'haben', 'teríamos (plural)'),
    V('wäre', 'sein', 'seria, estaria'),
    V('käme', 'kommen', 'viria (alternância de vogal)'),
    V('ginge', 'gehen', 'iria (verbo forte)'),
    V('schließe', 'schließen', 'fecharia (verbo forte)'),
    V('könnte', 'können', 'poderia (modal)'),
    V('müsste', 'müssen', 'deveria (obrigação)'),
    V('sollte', 'sollen', 'deveria, conviria'),
    V('möchte', 'mögen', 'gostaria (desejo educado)'),
    V('dürfte', 'dürfen', 'teria permissão para'),
    V('gern', 'gern', 'de bom grado (suaviza o Konjunktiv)'),
    V('wenn ich Zeit hätte', 'haben', 'se eu tivesse tempo (condicional)'),
    V('Provisionssatz', 'Provisionssatz', 'oração condicional'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase usa o Konjunktiv II sintético corretamente?'),
    options: [
      T('Ich hätte mehr Zeit.'),
      T('Ich habe mehr Zeit.'),
      T('Ich gehabt mehr Zeit.'),
      T('Ich hatte mehr Zeit.'),
    ],
    answer: 0,
    hint: T('A forma sintética de haben é hätte, com terminação dupla.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a forma analítica: Ich ___ gern mehr lesen.'),
      answer: 'würde',
      hint: T('É o auxiliar que vale para qualquer verbo.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase é um desejo sobre o passado, e não sobre o presente?'),
      options: [
        T('Ich hätte gern fahren wollen.'),
        T('Ich hätte gern fahren.'),
        T('Ich würde fahren.'),
        T('Ich fahre gern.'),
      ],
      answer: 0,
      hint: T('O desejo do passado traz um Infinitivo com zu.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete a condicional: Wenn ich mehr Zeit ___, würde ich reisen.'),
      answer: 'hätte',
      hint: T('A subordinada também está no Konjunktiv II.'),
    },
    {
      kind: 'match',
      prompt: T('Relacione a forma ao seu valor.'),
      pairs: [
        { a: T('würde kommen'), b: T('hipótese ou polidez') },
        { a: T('hätte gern'), b: T('desejo realizável') },
        { a: T('hätte ... getrunken'), b: T('desejo irrealizável') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A forma analítica é sempre possível: würde + infinitivo no presente, sem exceção de pessoa nem de verbo.',
      ),
    },
    {
      n: '2',
      text: T(
        'Nos verbos sein, haben e nos modais a forma sintética usa a terminação do Indicativo com -t-: ich hätte, du wärst, er müsste.',
      ),
    },
    {
      n: '3',
      text: T(
        'Desejo no presente pede infinitivo, desejo no passado pede Partizip II: Ich hätte gern gehen wollen / Ich hätte gehen sollen.',
      ),
    },
    {
      n: '4',
      text: T(
        'A condicional une um Konjunktiv II na subordinada (wenn ich Zeit hätte) e um Konjunktiv II na principal (würde ich lesen).',
      ),
    },
    {
      n: '5',
      text: T(
        'A partícula gern devolve o calor real ao Konjunktiv: Ich hätte gern einen Kaffee é mais quente do que Ich hätte einen Kaffee.',
      ),
    },
  ],
  notes: [
    {
      label: T('Desejo impossível e desejo possível'),
      text: T(
        'Ich hätte gern einen Kaffee tem duas leituras possíveis, e o contexto decide. Lido no presente, é um desejo que se realizaria agora se as condições existissem; lido com um Partizip II, Ich hätte einen Kaffee getrunken, é um desejo sobre o passado, irrealizável para sempre. O português obriga a escolher entre Queria eGostaria de ter tomado; o alemão mantém as duas opções vivas na mesma forma verbal, e é a ordem dos termos que resolve.',
      ),
    },
    {
      label: T('Ligação bíblica'),
      text: T(
        'Em 2 Coríntios 12, sarebbe besser, wenn er schwächer wäre: a Tradução de Lutero usa o Konjunktiv II para uma hipótese sobre o passado que ninguém pode conferir. Em Romanos 3, hätten wir... mantém o mesmo modo num texto que argumenta a partir do que não aconteceu. Reconhecer o -t- ou o würde é o que separa ler o texto como fato e ler o texto como algo renegociado.',
      ),
    },
  ],
  examples: [
    { text: 'Ich würde gern kommen.', gloss: T('Eu gostaria de vir (forma analítica).') },
    {
      text: 'Ich hätte gern einen Kaffee.',
      gloss: T('Eu gostaria de um café (desejo no presente).'),
    },
    {
      text: 'Ich hätte einen Kaffee getrunken.',
      gloss: T('Eu teria tomado um café (desejo sobre o passado).'),
    },
    {
      text: 'Wenn ich Zeit hätte, würde ich mehr lesen.',
      gloss: T('Se eu tivesse tempo, leria mais (condicional completa).'),
    },
    { text: 'Könnten Sie mir bitte helfen?', gloss: T('Poderia me ajudar, por favor? (polidez).') },
    {
      text: 'Das wäre sehr freundlich.',
      gloss: T('Isso seria muito gentil (desejo realized politely).'),
    },
    { text: 'Es müsste stimmen.', gloss: T('Deve estar certo (modal no Konjunktiv II).') },
    {
      text: 'An deiner Stelle würde ich gehen.',
      gloss: T('No seu lugar eu iria (Konjunktiv II em subordinada indireta).'),
    },
    {
      text: 'Er sagte, er käme später.',
      gloss: T('Ele disse que viria mais tarde (Konjunktiv I na fala, II no relato).'),
    },
  ],
  tables: [
    {
      caption: T('Formas sintéticas do Konjunktiv II'),
      head: ['Pronome', 'sein', 'haben', 'Modais'],
      rows: [
        ['ich', 'wäre', 'hätte', 'könnte, müsste, sollte'],
        ['du', 'wärst', 'hättest', 'könntest, müsstest'],
        ['er/sie/es', 'wäre', 'hätte', 'könnte, dürfte, möchte'],
        ['wir', 'wären', 'hätten', 'könnten, müssten'],
        ['ihr', 'wärt', 'hättet', 'könntet, müsstet'],
        ['Sie/sie', 'wären', 'hätten', 'könnten, möchten'],
      ],
    },
    {
      caption: T('Analítico ou sintético'),
      head: ['Contexto', 'Forma', 'Exemplo'],
      rows: [
        ['verbo comum', 'würde + Infinitiv', 'Ich würde gern kommen.'],
        ['desejo no presente', 'hätte + Infinitiv', 'Ich hätte gern einen Kaffee.'],
        ['desejo no passado', 'hätte + Partizip II', 'Ich hätte den Brief schreiben sollen.'],
        ['verbo sein', 'wäre / würde sein', 'Das wäre schön.'],
        ['verbo haben', 'hätte / würde haben', 'Ich hätte mehr Zeit.'],
        ['modal', 'forma sintética', 'Das müsste stimmen.'],
      ],
    },
  ],
};
