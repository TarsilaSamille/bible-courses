import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('Os advérbios de tempo'),
  subtitle: T('hoy, mañana, siempre — a linha do tempo'),
  section: T('Adjetivos e advérbios'),
  body: C(`## Os três tempos básicos

{hoy} «hoje» · {ayer} «ontem» · {mañana} «amanhã». Acrescente {por la} para marcar a parte do dia: {hoy por la mañana} «hoje de manhã» · {ayer por la tarde} «ontem à tarde» · {mañana por la noche} «amanhã à noite».

O trocadilho {mañana por la mañana} é correto e tradicional: {mañana} é advérbio, {por la mañana} é locução.

## Outros pontos da linha

{ahora} «agora» · {luego} «depois, logo» · {entonces} «então» · {pronto} «cedo, em breve» · {ya} «já» · {todavía} «ainda» · {mientras} «enquanto» · {durante} «durante».

## Frequência

A série completa é: {siempre} «sempre» · {casi siempre} «quase sempre» · {casi nunca} «quase nunca» · {nunca} «nunca» · {jamás} «jamais» (mais enfático) · {a veces} «às vezes» · {a menudo} «amiúde» · {de vez en cuando} «de vez em quando».
## Tempo como substantivo

{hoy} e {mañana} também funcionam como substantivos de uso temporal: {el hoy} «o presente» · {el mañana} «o futuro» · {el ayer} «o passado». Em {hoy}, o {h} é mudo.

Ex.: {Velad, porque no sabéis el día} «vigiai, pois não sabeis o dia» (Mt 24:42 — {porque} seguido de presente atemporal, como em português).`),
  vocab: [
    V('hoy', 'hoy', 'hoje'),
    V('mañana', 'mañana', 'amanhã'),
    V('ayer', 'ayer', 'ontem'),
    V('siempre', 'siempre', 'sempre'),
    V('a veces', 'vez', 'às vezes'),
    V('el mañana', 'mañana', 'o amanhã (substantivo!)'),
    V('el día', 'día', 'o dia (Mt 24:42)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"mañana por la mañana"?'),
    options: [
      T('Erro de repetição'),
      T('Correto: "amanhã de manhã" (advérbio + locução!)'),
      T('Só poético'),
      T('Plural'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: "___ por la mañana" (hoje de manhã)'),
      answer: 'hoy',
      hint: T('Regra §1: o advérbio vem primeiro.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase usa o advérbio como SUBSTANTIVO?'),
      options: [
        T('Mañana es frío'),
        T('El mañana será mejor'),
        T('Ayer fui al mercado'),
        T('Hoy no trabajo'),
      ],
      answer: 1,
      hint: T('Regra §3: substantivo precisa de artigo.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o advérbio ao valor'),
      pairs: [
        { a: T('{siempre}'), b: T('sempre') },
        { a: T('{a veces}'), b: T('às vezes') },
        { a: T('{casi nunca}'), b: T('quase nunca') },
        { a: T('{todavía}'), b: T('ainda') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    { n: '1', text: T('hoy/ayer/mañana + por la (mañana/tarde/noche) marca a parte do dia.') },
    { n: '2', text: T('Nunca no pode iniciar a frase; use No + verbo: No viene nunca.') },
    { n: '3', text: T('Com artigo, o advérbio vira substantivo: el hoy, el mañana, el ayer.') },
  ],
  notes: [
    {
      label: T('O presente habitual'),
      text: T(
        'O advérbio de tempo marca quando, não o tempo gramatical. {Siempre} com presente dá hábito; com pretérito dá apenas o passado da frase. O tempo vem do verbo, o advérbio só situa.',
      ),
    },
  ],
  examples: [
    { text: '{hoy}', gloss: T('Hoje.') },
    { text: '{mañana por la mañana}', gloss: T('Amanhã de manhã.') },
    { text: '{el mañana}', gloss: T('O futuro (advérbio virado em substantivo!).') },
    { text: '{el día}', gloss: T('O dia (Mt 24:42).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Advérbios de tempo'),
      head: [T('Advérbio'), T('Valor'), T('Exemplo')],
      rows: [
        ['{hoy}', T('hoje'), '{hoy es lunes}'],
        ['{ayer}', T('ontem'), '{ayer fue fiesta}'],
        ['{mañana}', T('amanhã'), '{mañana vendré}'],
        ['{ahora}', T('agora'), '{ahora no puedo}'],
        ['{luego}', T('depois'), '{luego te lo digo}'],
        ['{entonces}', T('então'), '{entonces llegó}'],
        ['{pronto}', T('cedo, em breve'), '{pronto vuelvo}'],
      ],
    },
    {
      caption: T('Tabela 2 — Escala de frequência'),
      head: [T('Grau'), T('Forma'), T('Tradução')],
      rows: [
        ['100%', '{siempre}', T('sempre')],
        ['quase 100%', '{casi siempre}', T('quase sempre')],
        ['às vezes', '{a veces}, {a menudo}', T('às vezes, amiúde')],
        ['quase nunca', '{casi nunca}', T('quase nunca')],
        ['0%', '{nunca}, {jamás}', T('nunca, jamais')],
      ],
    },
  ],
};
