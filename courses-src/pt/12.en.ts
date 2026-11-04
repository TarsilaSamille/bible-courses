import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('Por, para, and crasis'),
  subtitle: T('cause, purpose, and a + a = à'),
  section: T('Connectives'),
  body: C(`## Por and para: one preposition, five senses

**Por** introduces cause, agent, means, exchange and duration: {por amor} (cause), {por Deus} (agent), {por meio de} (means), {por dois dias} (duration), {por mil reais} (exchange). **Para** introduces destination, purpose, direction and deadline: {para Deus} (destination), {para orar} (purpose), {para amanhã} (deadline).

What decides is context, and the same construction changes meaning: {por mim} can be "for my sake" or "in my opinion", while {para mim} is "for my benefit" or "in my opinion". They are two sides of one idea — **opinion** — with the preposition swapped.

The point for a translator is that Greek and Hebrew mark these relations with cases (genitive, dative, accusative) and Portuguese marks them with prepositions. Translating case by case without understanding the function is where biblical translation loses: πορεύεσθε εἰς πᾶσαν τὴν γῆν has a genitive (τὴν γῆν, "of all the earth") and an accusative (πᾶσαν, "all"), and Portuguese handles it with an "a" and an "in".

## Crase is the fusion of a + a

Crase is the fusion of the article {a} with the preposition {a}: {vou à igreja}, {às três horas}, {à noite}. It does not happen in three cases learners get wrong:

It does not appear before a verb: {vou orar}, not {vou à orar}. It does not appear before a determined masculine noun: {dei a uma cruz} — because {a + o} would give {ao}, and {um} is indefinite, so {a} stays. It does not appear before a personal pronoun: {falou a ela}, not {falou à ela}.

And there is the proper noun case: {vou a Roma} or {vou à Roma}? Crase with a feminine proper noun is accepted in writing, but usage varies and European Portuguese prefers {a Roma}. The practical point: crase is never mandatory, and nobody is wrong for omitting it.

## The Italian trap

Portuguese takes prepositions from everywhere — {ir a}, {vir de} — and so does Italian ({andare a}, {venire da}). That creates a specific temptation: producing crase by imitation of Italian, seeing {a} + {la} and writing {à}. But Italian has no crase: {a la} is not a fusion, and the correspondence between Italian and Portuguese lies in the value of the preposition, not its shape.

A translator who produces crase by analogy with Italian writes bad Portuguese and adds a problem the original did not have.

## Reading criterion

With any preposition, ask: what is the function in the Greek (which case)? Is it {por} for cause, agent, means, exchange or duration? Is it {para} for destination, purpose, direction or deadline? And is {a + a} fused, or just {a}? The third answer decides the crase and the first two decide the preposition. Together they settle the sentence.`),
  vocab: [
    V('por', 'por', 'by; for'),
    V('para', 'para', 'to; in order to'),
    V('por amor', 'amor', 'for love'),
    V('por Deus', 'Deus', 'by God'),
    V('para orar', 'orar', 'to pray'),
    V('para amanhã', 'amanhã', 'for tomorrow'),
    V('vou à igreja', 'ir', 'I go to church'),
    V('a uma cruz', 'cruz', 'to a cross'),
    V('por nós', 'nós', 'for us'),
    V('daria a vida', 'dar', 'would give his life'),
    V('a', 'a', 'to (preposition)'),
    V('à', 'a', 'to the (a + a, crasis)'),
    V('igreja', 'igreja', 'church'),
    V('orar', 'orar', 'to pray'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence uses {por} for cause?'),
    options: [
      T('Christ died for us.'),
      T('I am going to the city.'),
      T('I left to pray.'),
      T('He stayed for three days.'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: “I go ___ church”.'),
      answer: 'à',
      hint: T('a + a forms one word.'),
    },
    {
      kind: 'choose',
      prompt: T('Where is there no crasis?'),
      options: [
        T('I go to church'),
        T('I go to a woman'),
        T('I give it to Maria'),
        T('he arrived at five'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Match preposition and meaning.'),
      pairs: [
        { a: T('por (agent)'), b: T('agent') },
        { a: T('for'), b: T('purpose') },
        { a: T('por (cause)'), b: T('cause') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Crasis is the fusion of {a} (preposition) with {a} (article): {a + o = ao}, {a + as = às}, {a + a = à}. Where the second {a} is missing there is no crasis: {a uma cruz}, {a minha casa}, {a Deus}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'There is no crasis before a verb ({vou à orar} does not exist), before a personal pronoun ({falou à ela} does not exist) and before a cardinal numeral ({a três dias}, not {às três dias} when {três} is the numeral).',
      ),
    },
    {
      n: '§3',
      text: T(
        'Crasis requires the definite article, not just any {a}: {a uma cruz} has none because {um} is indefinite, and {a minha casa} has none because {meu} is a determiner. With determined {a} the crasis comes: {ao homem}, {à cidade}.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{por} covers cause, agent, means, exchange and duration: {por amor}, {por Deus}, {por meio de}, {por dois dias}, {por mil reais}. {para} covers destination, purpose, direction and deadline: {para Deus}, {para orar}, {para amanhã}. The pair {por mim} and {para mim} changes sense: the first is opinion, the second benefit.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Greek and Hebrew mark these relations with cases ({πορεύεσθε εἰς πᾶσαν τὴν γῆν}: {πᾶσαν} accusative, {τὴν γῆν} genitive), and Portuguese resolves them with a preposition and an article: {por todo o mundo}. It is the function that decides the preposition, not the shape the case suggests.',
      ),
    },
  ],
  notes: [
    {
      label: T('Do not force'),
      text: T(
        'Many biblical translations use “a Deus” with no crasis, and that is right: {a} there is a preposition, not an article. Nobody errs by not using crasis, because crasis is optional in every case where current usage allows it.',
      ),
    },
    {
      label: T('The Italian trap'),
      text: T(
        'Italian has {a la}, which is no fusion at all, and seeing that form leads to writing {à}. The correspondence between Italian and Portuguese lies in the value of the preposition, never in its shape: translating by analogy with Italian gets the Portuguese wrong.',
      ),
    },
  ],
  examples: [
    { text: 'Cristo morreu por nós.', gloss: T('{por} as cause, with {nós} as beneficiary.') },
    { text: 'Entregou a vida por o povo.', gloss: T('{por} as immediate beneficial cause.') },
    { text: 'Foi criado por Deus.', gloss: T('{por} as agent of the passive.') },
    { text: 'Ficou por três dias.', gloss: T('{por} as duration.') },
    { text: 'Vou para a cidade.', gloss: T('{para} as destination.') },
    { text: 'Saí para orar.', gloss: T('{para} as purpose.') },
    { text: 'Vou à igreja.', gloss: T('{a} plus {a}: the crasis.') },
    { text: 'Dei a uma cruz.', gloss: T('No crasis, because {um} is indefinite.') },
    { text: 'Falou a ela.', gloss: T('No crasis, because {ela} is a pronoun.') },
  ],
  tables: [
    {
      caption: T('The five values of {por}'),
      head: ['Valor', 'Exemplo', 'Referência'],
      rows: [
        ['causa', 'por amor', '—'],
        ['agente', 'por Deus', 'passiva de ser'],
        ['meio', 'por meio de', '—'],
        ['troca', 'por mil reais', '—'],
        ['duração', 'por três dias', '—'],
      ],
    },
    {
      caption: T('The four values of {para}'),
      head: ['Valor', 'Exemplo', 'Referência'],
      rows: [
        ['destino', 'para Deus', '—'],
        ['finalidade', 'para orar', '—'],
        ['direção', 'para o norte', '—'],
        ['prazo', 'para amanhã', '—'],
      ],
    },
    {
      caption: T('Where there is crasis and where there is not'),
      head: ['Caso', 'Forma', 'Exemplo'],
      rows: [
        ['artigo determinado', 'há crase', 'ao homem, à cidade'],
        ['verbo', 'não há crase', 'vou orar'],
        ['pronome pessoal', 'não há crase', 'falou a ela'],
        ['indefinido', 'não há crase', 'a uma cruz'],
      ],
    },
  ],
};
