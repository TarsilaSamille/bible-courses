import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  title: T('Aspecto e prefixos'),
  subtitle: T('писать → написать, описать, списать'),
  section: T('O verbo: prefixos e formas derivadas'),
  body: C(
    'Os prefixos costumam produzir um verbo perfeito a partir de um imperfeito, mas nem sempre o fazem e muitas vezes acrescentam sentido lexical. Compare писать, um processo imperfeito, com написать, uma escrita delimitada e concluída; переписать, escrever de novo ou reescrever; записать, anotar; подписать, assinar; описать, descrever. Nas formas passadas perfeitas os prefixos são especialmente úteis: он описал, "ele descreveu". Verbos perfeitos também podem ser formados por sufixos, e um segundo imperfeito às vezes é suppletivo: сделать, perfeito, faz par com делать, imperfeito; взть faz par com брать. Assim, dizer que дай vem de давать está errado: дай é o imperativo de дать. O prefixo по- pode indicar ação limitada ou início de movimento: почитать, "ler por um tempo"; пойти, "partir", com пойдём, "vamos". про- nem sempre significa literalmente "através" e precisa ser aprendido lexicalmente em простить, "perdoar". Os prefixos também afetam a regência: выйти из, "sair de", exige genitivo, enquanto войти в toma acusativo ou prepositivo conforme o sentido estático ou dirigido.',
  ),
  vocab: [
    V('написать', 'написать', 'escrever por completo'),
    V('переписать', 'переписать', 'reescrever'),
    V('простить', 'простить', 'perdoar'),
    V('пойти', 'пойти', 'pôr-se a caminho'),
    V('давать', 'давать', 'dar repetidamente'),
    V('прости нам', 'простить', 'perdoa-nos'),
    V('описать', 'описать', 'descrever'),
    V('взять', 'взять', 'pegar'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual forma significa “reescrever”?'),
    options: [T('написать'), T('переписать'), T('подписать')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: Я ___ письмо (concluído)'), answer: 'написал' },
    {
      kind: 'match',
      prompt: T('Relaciona verbo e sentido'),
      pairs: [
        { a: 'подписать', b: T('assinar') },
        { a: 'описать', b: T('descrever') },
      ],
      answer: ['подписать', 'описать'],
    },
    {
      kind: 'choose',
      prompt: T('Qual é o par imperfectivo/perfectivo correto?'),
      options: [T('брать/взять'), T('дать/давать')],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Nem todo verbo perfectivo é formado por prefixo; nem todo verbo prefixado é perfectivo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Nem todo par é derivação'),
      text: T(
        'Nem todo verbo perfeito vem de um imperfeito com prefixo: {взять} faz par com {брать}, e os temas não se parecem. Tratar o aspecto como derivação mecânica produz erros que a lista de verbos denuncia.',
      ),
    },
  ],
  examples: [
    { text: 'Он написал письмо', gloss: T('Ele escreveu a carta') },
    { text: 'Он пишет письмо', gloss: T('Ele está escrevendo uma carta') },
  ],
  tables: [
    {
      caption: T('Prefijos e mudança de sentido'),
      head: ['Verbo', 'Significado', 'Glosa'],
      rows: [
        ['написать', 'completar a ação', 'escrever'],
        ['переписать', 'outra vez', 'reescrever'],
        ['записать', 'registrar', 'anotar'],
        ['описать', 'dar a forma por escrito', 'descrever'],
        ['подписать', 'assinar abaixo/dentro', 'firmar'],
      ],
    },
  ],
};
