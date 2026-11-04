import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  title: T('Aspecto y prefijos'),
  subtitle: T('писать → написать, описать, списать'),
  section: T('El verbo: prefijos y formas derivadas'),
  body: C(
    'Los prefijos suelen producir un verbo perfectivo a partir de uno imperfectivo, pero no siempre, y a menudo añaden significado léxico. Compara писать, imperfectivo, con написать, delimitado y cumplido; переписать, reescribir; записать, anotar; подписать, firmar; описать, describir. A veces el segundo imperfectivo es supletivo: сделать se pareja con делать, y взять con брать. Por eso, дай es el imperativo de дать, no una forma de давать. El prefijo по- puede limitar la duración o marcar el inicio: почитать, leer un rato; пойти, ponerse en camino. про- no siempre significa literalmente «a través» y debe aprenderse en простить. Los prefijos también afectan al régimen: выйти из rige genitivo, mientras que войти в depende de la lectura estática o dirigida.',
  ),
  vocab: [
    V('написать', 'написать', 'escribir por completo'),
    V('переписать', 'переписать', 'reescribir'),
    V('простить', 'простить', 'perdonar'),
    V('пойти', 'пойти', 'ponerse en camino'),
    V('давать', 'давать', 'dar repetidamente'),
    V('прости нам', 'простить', 'perdona-nos'),
    V('описать', 'описать', 'describir'),
    V('взять', 'взять', 'tomar'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué forma significa «reescribir»?'),
    options: [T('написать'), T('переписать'), T('подписать')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Completa: Я ___ письмо (cumplido)'), answer: 'написал' },
    {
      kind: 'match',
      prompt: T('Relaciona verbo y sentido'),
      pairs: [
        { a: 'подписать', b: T('firmar') },
        { a: 'описать', b: T('describir') },
      ],
      answer: ['подписать', 'описать'],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué par imperfectivo/perfectivo es correcto?'),
      options: [T('брать/взять'), T('дать/давать')],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T('No todo verbo perfectivo lleva prefijo, ni todo verbo prefijado es perfectivo.'),
    },
  ],
  notes: [
    {
      label: T('No todo par es derivación'),
      text: T(
        'No todo verbo perfecto viene de un imperfecto prefijado: {взять} hace par con {брать}, y los temas no se parecen. Tratar el aspecto como derivación mecánica produce errores que la lista de verbos delata.',
      ),
    },
  ],
  examples: [
    { text: 'Он написал письмо', gloss: T('Él escribió la carta') },
    { text: 'Он пишет письмо', gloss: T('Él está escribiendo una carta') },
  ],
  tables: [
    {
      caption: T('Prefijos y cambio de sentido'),
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
