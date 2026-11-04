import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('Registro e tratamento'),
  subtitle: T('Anda, kamu, engkau; dia, beliau'),
  section: T('Registro e discurso'),
  body: C(`O sistema indonésio é relacional, não apenas formal ou informal. A escolha depende de quem é o interlocutor e do contexto.

{kamu} é o tratamento comum, familiar ou respeitoso em muitas situações cotidianas. {Anda} é formal/distante e também usado com estranhos; pode soar distante ou irônico quando não é apropriado. {kau} é mais íntimo e coloquial, normalmente na forma clítica: {aku cinta kau}, mas a forma {engkau} é mais enfática, bíblica ou literária.

{Mu} é clítico de segunda pessoa: {nama-Mu} «teu nome». A forma {Anda} recebe tratamento formal, enquanto {kamu} é o tratamento comum; a pergunta {Siapa Anda?} significa «¿Quién es usted?». O pronome {kamu} normalmente recebe o clítico {mu}: {rumahmu} «tu casa».

{beliau} é referência respeitosa a uma terceira pessoa, especialmente em documentos ou situações públicas; {dia} é normal. {saudara} funciona como vocativo: «irmão» pode incluir varão e mulher; {saudara-saudara} «queridos irmãos» é tratamento comum nas cartas paulinas.

O registro depende do contexto. {Santap} é cuidadoso ou refinado para «comer»; {makan} é normal, não «bruto». {Meninggal} descreve uma morte e pode ser cortês; {mati} é direto e pode soar brusco em contextos sensíveis. {Wafat} pertence ao registro formal ou eclesial.`),
  vocab: [
    V('Anda', 'Anda', 'você formal; você'),
    V('kamu', 'kamu', 'você informal'),
    V('kau', 'kau', 'tu íntimo'),
    V('engkau', 'engkau', 'tu enfático/literário'),
    V('-mu', 'mu', 'teu, seu'),
    V('dia', 'dia', 'ele, ela'),
    V('beliau', 'beliau', 'ele/ela respeitoso'),
    V('saudara', 'saudara', 'irmão, confrade'),
    V('saudara-saudara', 'saudara', 'irmãos; irmãos em Cristo'),
    V('rumah', 'rumah', 'casa'),
    V('rumahmu', 'rumah', 'tua casa'),
    V('makan', 'makan', 'comer'),
    V('santap', 'santap', 'comer (cuidado/refinado)'),
    V('meninggal', 'meninggal', 'morrer, falecer'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase é mais natural para conhecer um desconhecido?'),
    options: [T('Siapa nama Anda?'), T('Siapa nama kamu?'), T('Engkau siapa?'), T('Bapa siapa?')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: «rumah___» = «sua casa» (com {kamu}).'),
      answer: 'mu',
      hint: T('Clítico de segunda pessoa que se une à base.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual verbo é o mais direto para «morrer»?'),
      options: [T('mati'), T('meninggal'), T('santap'), T('tidur')],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{Anda} é capitalizado porque substitui um nome próprio; {kamu} e {dia} normalmente não são capitalizados.',
      ),
    },
    {
      n: '2',
      text: T(
        'O clítico {mu} se une à base e o {ny} final costuma pronunciar-se [ɲ]: {nama-Mu} ≈ [ˈnama mu].',
      ),
    },
    {
      n: '3',
      text: T(
        'Não escolha {Anda} só porque a pessoa é mais velha: contexto, idade, status e distância social matter.',
      ),
    },
  ],
  notes: [
    {
      label: T('Variação'),
      text: T('O par {santap/makan} é estilístico, não uma oposição absolutamente brutal/educada.'),
    },
  ],
  examples: [
    { text: 'Saudara, marilah kita belajar.', gloss: T('Irmão, vamos aprender.') },
    { text: 'Aku menyanyikan lagu untukmu.', gloss: T('Eu canto uma canção para você.') },
    { text: 'Beliau tinggal di Jakarta.', gloss: T('Ele mora em Jacarta (registro respeitoso).') },
  ],
  tables: [
    {
      caption: T('Formas de tratamento'),
      head: ['Forma', 'PT', 'ES'],
      rows: [
        ['kamu', T('comum/informal'), '{kamu + -mu}'],
        ['Anda', T('formal/distante'), '{Anda}'],
        ['kau', T('íntimo/clítico'), '{mencintamu} «te quiero»'],
        ['engkau', T('enfático/literário'), '{Engkau Allahku}'],
      ],
    },
  ],
};
