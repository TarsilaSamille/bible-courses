import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('Futuro e progressivas'),
  subtitle: T('will, shall, going to; be + -ing'),
  section: T('O verbo'),
  body: C(`## Três futuros

{Will} é o futuro normal do inglês moderno: {I will pray}. Também expressa vontade, predição ou decisão espontânea: {I will answer}; {He will arrive tomorrow}.

{Be going to} normalmente vem de um plano presente ou de evidência atual: {I am going to pray}; {The glass is going to fall}. Uma predição baseada em evidências costuma ser mais forte do que um futuro simples com will.

{Shall} é menos comum na fala cotidiana contemporânea. Permanece em promessas formais, instruções, oferecimentos e linguagem bíblica: {I shall not want}. Não traduza automaticamente shall como um futuro gramatical separado; leia sua força no contexto.

## Formas progressivas

{Be} + verbo + {-ing} apresenta um acontecimento como em curso, temporário ou em desenvolvimento: {I am reading}; {They were praying}. O inglês também usa essa forma para acordos: {I am meeting her at six}.

Verbos de estado normalmente não usam a progressiva: {know}, {believe}, {want}, {belong}, {seem}. Alguns mudam de sentido na progressiva: {know} → {be knowing} costuma soar estranho; {think} → {be thinking} sugere uma visão atual. Na Bíblia, {is come} pode ser uma forma presente arcaica, não uma progressiva moderna: identifique o registro antes de analisar {-ing}.`),
  vocab: [
    V('will pray', 'pray', 'vou orar'),
    V('going to read', 'read', 'vou ler'),
    V('is reading', 'read', 'está lendo'),
    V('was coming', 'come', 'estava vindo'),
    V('believe', 'believe', 'crer'),
    V('know', 'know', 'saber'),
    V('seem', 'seem', 'parecer'),
    V('tomorrow', 'tomorrow', 'amanhã'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T("Por que 'I am believing' soa errado?"),
    options: [
      T('Believe é verbo de estado'),
      T('Falta um sujeito'),
      T('É uma forma futura'),
      T('Está correto'),
    ],
    answer: 0,
  },
  exercises: [
    { kind: 'fill', prompt: T("Plano: 'I ___ going to pray.'"), answer: 'am' },
    {
      kind: 'match',
      prompt: T('Relacione forma e uso.'),
      pairs: [
        { a: 'will', b: T('decisão/predição') },
        { a: 'going to', b: T('plano/indício') },
        { a: 'am -ing', b: T('ação em curso') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('Qual frase descreve uma evidência atual?'),
      options: [
        T('The glass is going to fall'),
        T('The glass falls tomorrow'),
        T('I will be fall'),
        T('The glass go to fall'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Não use progressiva automaticamente com verbos de estado. A forma comum {believe} descreve uma posição estável.',
      ),
    },
    {
      n: '2',
      text: T(
        'A progressiva pode-pressupor algo temporário ou em desenvolvimento: He is being patient is different from He is patient.',
      ),
    },
    {
      n: '3',
      text: T(
        'Will não é automático em orações com if/when. Compare: If I call, I will tell you; If you call, you tell me.',
      ),
    },
  ],
  notes: [
    {
      label: T('Registro:'),
      text: T(
        'Shall e is come são fortes sinais de KJV/inglês arcaico quando o contexto é bíblico.',
      ),
    },
  ],
  examples: [
    { text: '{I shall not want}', gloss: T('não me faltará — promessa bíblica') },
    { text: '{They were praying}', gloss: T('estavam orando — ação em curso') },
    { text: '{I believe}', gloss: T('creio — estado, não progressiva') },
  ],
  tables: [
    {
      caption: T('Futuro y progresiva'),
      head: [T('Forma'), T('Uso'), T('Exemplo')],
      rows: [
        ['{will + base}', T('voluntad/predicción'), '{I will pray}'],
        ['{be going to + base}', T('plan/indicio'), '{She is going to leave}'],
        ['{be + -ing}', T('en curso/arrangement'), '{I am reading}'],
      ],
    },
  ],
};
