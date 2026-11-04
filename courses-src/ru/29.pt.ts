import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('Leitura: João 1:1-5, 14'),
  subtitle: T('В начале было Слово'),
  section: T('Leitura'),
  body: C(
    'Leia a passagem em blocos e observe a concordância, o caso e as famílias lexicais. В начале: в + prepositivo; начало muda para начале. Слово é neutro, e por isso o neutro passado было concorda: "a Palavra era". У Бога: у + genitivo indica localização junto de Deus, "com Deus". No verso 1, было Deus põe o Verbo em equivalência com Deus gramaticalmente; Слovo com maiúscula é o título divino. No verso 4, в Нём: в + prepositivo, e o pronome assume a forma mole; в нём pode significar "nele". Свет e тьма são subjects nominais. No verso 5, светит é imperfeito e descreve a luz que brilha nas trevas. No verso 14, стало é singular neutro e concorda com Слово; плотию é uma terminação arcaica em -ию com valor instrumental, "como carne". O trecho исполненного благодати и истины está em genitivo depois do particípio e é uma fórmula bíblica fixa. Leia em voz alta: a pontuação desta tradução é editorial e não prova uma fronteira de palavra diferente.',
  ),
  vocab: [
    V('было', 'быть', 'era, foi'),
    V('стало', 'стать', 'tornou-se'),
    V('свет', 'свет', 'luz'),
    V('тьма', 'тьма', 'tinieblas'),
    V('плотию', 'плоть', 'carne (instrumental arcaico)'),
    V('благодать', 'благодать', 'gracia'),
    V('истина', 'истина', 'verdad'),
    V('светит', 'светить', 'brilla'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Por que aparece было e não был?'),
    options: [T('É plural'), T('Concuerda com Слово, neutro'), T('É futuro')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: у Бога está em qual caso?'), answer: 'genitivo' },
    {
      kind: 'choose',
      prompt: T('Qual forma significa “como carne”?'),
      options: [T('плотию'), T('плоти'), T('плоть')],
      answer: 0,
    },
    { kind: 'fill', prompt: T('Complete: Слово ___ Бог'), answer: 'было' },
  ],
  rules: [{ n: '1', text: T('Um verbo passado concorda com o sujeito em gênero e número.') }],
  notes: [
    {
      label: T('Traducción'),
      text: T('A leitura João 1:14 mostra плотию em -ию; não é uma forma regular do substantivo.'),
    },
  ],
  examples: [
    {
      text: 'Ἐν ἀρχῇ ἦν ὁ λόγος',
      gloss: T(
        'No princípio era o Verbo — {ἐν} com genitivo ({ἀρχῇ}); {ἦν} imperfeito, por estado; {ὁ λόγος} é o sujeito no nominativo.',
      ),
    },
    {
      text: 'ὁ λόγος ἦν πρὸς τὸν θεόν',
      gloss: T(
        'o Verbo estava com Deus — {πρὸς} com acusativo: preposição que, em grego, rege o acusativo e significa relação, não movimento só.',
      ),
    },
    {
      text: 'καὶ θεὸς ἦν ὁ λόγος',
      gloss: T(
        'e o Verbo era Deus — {θεὸς} no acusativo: predicativo, não sujeito. A preposição repete o nome, o verbo repete o tempo.',
      ),
    },
    {
      text: 'ἐν αὐτῷ ζωὴ ἦν',
      gloss: T(
        'nele havia vida — {ζωὴ} no nominativo e {ἦν} de novo: o verbo não mudou de tempo ao mudar de sujeito.',
      ),
    },
    {
      text: 'καὶ ἡ σκοτία αὐτὸ οὐ κατέλαβεν',
      gloss: T(
        'e as trevas não o receberam — {οὐ} com verbo principal (negação de fato) e {κατέλαβεν} aoristo: ação pontual contra {ἦν}.',
      ),
    },
  ],
  tables: [
    {
      caption: T('Análise de João 1:1 e 14'),
      head: ['Forma', 'Categoría', 'Valor'],
      rows: [
        ['В начале', 'в + prepositivo', 'en el principio'],
        ['было', 'passado neutro sg.', 'era'],
        ['у Бога', 'у + genitivo', 'junto a Dios'],
        ['стало', 'passado neutro sg.', 'se hizo'],
        ['плотию', 'instrumental arcaico', 'como carne'],
      ],
    },
  ],
};
