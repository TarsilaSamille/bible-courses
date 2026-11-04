import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Tempos perfeito'),
  subtitle: T('have seen, had seen — relação com o presente'),
  section: T('O verbo'),
  body: C(`## O presente perfeito

O presente perfeito combina um passado com relevância presente: {I have read the book} pode indicar conhecimento ou experiência atual. A ação está concluída, mas o momento que interessa é agora. Também acumula experiência: {She has visited Rome}.

Normalmente, não pode acompanhar um tempo passado já fechado: não {I have seen him yesterday}. Use {I saw him yesterday}. No entanto, {has gone} pode descrever um resultado de destino: {He has gone to Paris} pode significar que ele está lá ou não voltará.

## Presente e passado perfeito

O passado perfeito coloca um acontecimento antes de outro: {When I arrived, he had left}. O inglês também usa {was/were} + particípio: {It was written}. Isso é especialmente importante no inglês bíblico, em que o tempo costuma seguir a lógica e o discurso mais do que uma linha do tempo rígida.

João 19:30, {It is finished}, e 2 Timóteo 4:7, {I have fought the good fight}, devem ser traduzidos sem forçar suas formas para um único tempo português. O contexto distingue estado resultante, experiência acumulada e aspecto narrativo.`),
  vocab: [
    V('has seen', 'see', 'tem visto'),
    V('have believed', 'believe', 'temos crido'),
    V('had gone', 'go', 'tinha ido'),
    V('is finished', 'finish', 'está consumado'),
    V('yesterday', 'yesterday', 'ontem'),
    V('experience', 'experience', 'experiência'),
    V('result', 'result', 'resultado'),
    V('already', 'already', 'já'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase é natural?'),
    options: [
      T('I have seen him yesterday'),
      T('I saw him yesterday'),
      T('I did saw him yesterday'),
      T('I have saw him yesterday'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Complete: 'When she arrived, he ___ (leave).'"),
      answer: 'had left',
    },
    {
      kind: 'match',
      prompt: T('Relacione forma e particípio.'),
      pairs: [
        { a: 'speak', b: 'spoken' },
        { a: 'say', b: 'said' },
        { a: 'write', b: 'written' },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('O que normalmente bloqueia o presente perfeito com yesterday?'),
      options: [
        T('A ausência de artigo'),
        T('Um tempo passado já fechado'),
        T('O uso de was'),
        T('A negação'),
      ],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Use presente perfeito for a situation bearing on now: I have lost my keys. Use simple past for a completed time: I lost them yesterday.',
      ),
    },
    {
      n: '2',
      text: T(
        'O passado perfeito não significa apenas passado: ele mede uma relação de anterioridade dentro de uma narrativa passada.',
      ),
    },
    {
      n: '3',
      text: T(
        'O participio não é o mesmo que o passado: speak/spoken, say/said. Aprenda os dois quando forem diferentes.',
      ),
    },
  ],
  notes: [
    {
      label: T('Cuidado:'),
      text: T(
        "Não presuma que 'perfect' significa 'perfeito' em português: a função é discursiva.",
      ),
    },
  ],
  examples: [
    { text: '{I have believed}', gloss: T('tenho crido — experiência/estado atual') },
    { text: '{When I came, he had gone}', gloss: T('quando cheguei, ele já fora') },
    { text: '{It is finished}', gloss: T('está consumado — estado resultante') },
  ],
  tables: [
    {
      caption: T('Escolha do tempo'),
      head: [T('Situação'), T('Forma'), T('Valor')],
      rows: [
        [T('ontem'), '{saw}', T('passado fechado')],
        [T('experiência/resultado'), '{have seen}', T('presente relevante')],
        [T('passado anterior'), '{had seen}', T('perspectiva passada')],
      ],
    },
  ],
};
