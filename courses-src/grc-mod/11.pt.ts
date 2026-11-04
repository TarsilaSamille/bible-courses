import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Futuro e perfect'),
  subtitle: T('θα μιλήσω — έχω μιλήσει'),
  section: T('O verbo'),
  body: C(`## θα é uma partícula, não uma forma

θα + verbo no presente: θα μιλήσω. Não existe forma verbal de futuro em grego moderno — o grego koiné formava o futuro com σ- no aoristo (λύσω), e o moderno guardou o-particle θα e jogou fora a flexão. Por isso θα μιλήσω e μιλάω se parecem: é a mesma informação com custos diferentes.

O mesmo θα também dá sentido de possibilidade: «poderá falar», «talvez venha». Numa tradução, é aqui que a ambiguidade aparece — θα έρθει pode ser «virá» ou «terá vindo», e quem traduz tem de escolher pelo contexto.

## O perfect é analítico

O perfect é έχω + particípio: έχω μιλήσει. A conjugação vem toda do auxiliar, o que o torna fácil — έχω, είχα, είχε, είχαμε, είχατε, είχαν. Compare o tempo simples e o composto:

**Το είπα** — disse (aoristo, resultado)
**Το είπα ένα** — não é o que o grego diria; o perfect é **έχω το είπει**.

A negação em estilo cuidado é **δεν έχω** (δέν έχω), e não μην έχω — o μην é o clítico de negação do subjuntivo e do imperativo, não do indicativo. Quem escreve έχω com μην soa errado, mesmo que a fala o produza.

## Critério de leitura

θα antes de um verbo marca futuro ou possibilidade. έχω + particípio marca um estado resultante, não um tempo: quem fala diz «tenho falado» pensando no efeito, não no momento.`),
  vocab: [
    V('θα μιλήσω', 'μιλώ', 'falarei'),
    V('θα έρθει', 'έρχομαι', 'virá'),
    V('έχω μιλήσει', 'μιλώ', 'tenho falado'),
    V('έχεις δει', 'βλέπω', 'tens visto'),
    V('είχα φύγει', 'φεύγω', 'tinha saído'),
    V('θα έχω τελειώσει', 'τελειώνω', 'terei terminado'),
    V('θα έχει', 'έχω', 'terá'),
    V('δεν έχω', 'έχω', 'não tenho'),
    V('μιλήσει', 'μιλώ', 'ter falado (participio)'),
    V('έχει', 'έχω', 'tem (terá)'),
    V('είχα', 'έχω', 'tinha'),
    V('τέλος', 'τέλος', 'fim, final'),
    V('τελειώσει', 'τελειώνω', 'ter terminado (participio)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('___ μιλήσει'),
    answer: 'έχω',
    hint: T('No escribas una palabra aquí'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('«He visto»'),
      options: [T('έχω δει'), T('είδα'), T('θα δω'), T('είχα δει')],
      answer: 0,
    },
    { kind: 'fill', prompt: T('δεν ___ έρθει'), answer: 'έχει', hint: T('μην έχει πολύ formal') },
    {
      kind: 'match',
      prompt: T('Associar estrutura'),
      pairs: [
        { a: 'θα πω', b: T('futuro') },
        { a: 'είχα πει', b: T('mais-que-perfeito') },
        { a: 'έχω πει', b: T('perfecto') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [{ n: '§1', text: T('θα no se combina con να.') }],
  notes: [
    {
      label: T('Cuidado'),
      text: T('No confundas έχω «tener» con el aoristo perfectponente; el resultado está Ausente.'),
    },
  ],
  examples: [{ text: 'έχω ήδη τελειώσει', gloss: T('ya he terminado') }],
  tables: [
    {
      caption: T('Perfecto'),
      head: ['Tiempo', 'Estructura'],
      rows: [
        ['presente', 'έχω μιλήσει'],
        ['pasado', 'είχα μιλήσει'],
        ['futuro', 'θα έχω μιλήσει'],
      ],
    },
  ],
};
