import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Classificadores e quantidade'),
  subtitle: T('seorang, seekor, sebiji, sebuah'),
  section: T('O nome'),
  body: C(`Ao contar entidades, o indonésio pode inserir um classificador: {tiga orang murid} = «três pessoas [que são] discípulos» = «três discípulos». Ele indica a categoria e não faz flexão de gênero.

CLASSIFICADORES
• {orang} pessoas: {seorang murid}, {dua orang guru}.
• {ekor} animais menores ou domésticos: {seekor domba}, {dua ekor ayam}.
• {biji} grãos e frutos pequenos: {sebiji sesawi}, {dua biji batu}.
• {buah} objetos de contorno ou categoria geral: {sebuah roti}, {dua buah bola}. Para instrumentos, prefira {bilah} para uma extensão de paisagem, {gelas} para uma taça e {lembar} para uma folha.

{se-} + classificador = «um»: {seorang} «uma pessoa», {seekor} «um animal», {sebiji} «um grão», {sebuah} «um objeto». No plural normal, use o número natural: {tiga orang}, {dua ekor}, {tiga biji}; o classificador não é obrigatório.

{para} + nome pode formar plural definido: {para murid} «os discípulos», {para rasul} «os apóstolos». Em contexto, {murid} pode significar «aluno» ou «discípulo».

{Semua} = «todos/todo»; {semua orang} = «toda a gente». {Banyak} = «muitos», antes do nome: {banyak ikan} «muitos peixes». Para indicar «um do grupo», use as formas estabelecidas {seorang}, {seekor} e {satu}.`),
  vocab: [
    V('orang', 'orang', 'pessoa; classificador de pessoas'),
    V('ekor', 'ekor', 'classificador de animais'),
    V('biji', 'biji', 'classificador de grãos'),
    V('buah', 'buah', 'classificador geral; fruto'),
    V('seorang', 'orang', 'uma pessoa'),
    V('seekor', 'ekor', 'um animal'),
    V('sebiji', 'biji', 'um grão'),
    V('sebuah', 'buah', 'um objeto, uma peça'),
    V('guru', 'guru', 'mestre, professor'),
    V('domba', 'domba', 'ovelha'),
    V('sesawi', 'sesawi', 'mostarda'),
    V('semua', 'semua', 'todos, todo'),
    V('banyak', 'banyak', 'muitos'),
    V('para murid', 'murid', 'os discípulos'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Complete: «seekor ___» = «uma ovelha».'),
    options: [T('domba'), T('orang'), T('biji'), T('banyak')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: «tiga ___ murid» = «três discípulos».'),
      answer: 'orang',
      hint: T('Classificador de pessoas.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual é o mais natural para «muitos peixes»?'),
      options: [
        T('banyak ikan'),
        T('banyak ikan-ikan'),
        T('semua ikan seekor'),
        T('banyak seekor ikan'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O classificador pode ser omitido: {tiga murid} = «três discípulos» é mais comum que a forma longa.',
      ),
    },
    {
      n: '2',
      text: T(
        '{seekor} contém {se-} + {ekor}, mas {se-} não aparece como elemento separado em {tiga ekor}.',
      ),
    },
    {
      n: '3',
      text: T(
        'O plural {ikan} não muda; {banyak ikan} significa «muitos peixes», mesmo sem REDUÇÃO.',
      ),
    },
  ],
  notes: [
    {
      label: T('Precisão'),
      text: T(
        'O classificador {ekor} também pode ser usado irônicamente para pessoas; nesse efeito, o contexto é indispensável.',
      ),
    },
  ],
  examples: [
    { text: 'Tiga orang murid membaca.', gloss: T('Três discípulos leem.') },
    { text: 'Yesus melihat seekor domba.', gloss: T('Jesus vê uma ovelha.') },
    { text: 'Iman sebesar biji sesawi.', gloss: T('A fé do tamanho de um grão de mostarda.') },
  ],
  tables: [
    {
      caption: T('Classificadores comuns'),
      head: ['Classificador', 'Categoria', 'ES'],
      rows: [
        ['seorang', T('pessoa'), '{seorang murid}'],
        ['seekor', T('animal'), '{seekor domba}'],
        ['sebiji', T('grão/pequeno fruto'), '{sebiji sesawi}'],
        ['sebuah', T('objeto/peça'), '{sebuah roti}'],
      ],
    },
  ],
};
