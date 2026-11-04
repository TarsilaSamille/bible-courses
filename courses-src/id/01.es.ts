import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('Pronunciación y pronombres'),
  subtitle: T('saya/aku, kamu/Anda, dia'),
  section: T('Fonología y pronombres'),
  body: C(`El indonesio (bahasa Indonesia) no flexiona los verbos por persona ni número, no distingue género gramatical y normalmente prescinde de artículo. La forma verbal no cambia: {saya percaya}, {kamu percaya} y {mereka percaya} significan «yo creo», «tú crees» y «ellos creen». El tiempo, el aspecto y la negación se marcan con palabras independientes.

PRONUNCIACIÓN
• {c} representa /tʃ/, como en {cinta} «amor».
• {j} representa /dʒ/, como en {jalan} «camino».
• {y} representa /j/, como en {yakin} «firme».
• {ng} representa /ŋ/, como en {nyanyi} «cantar».
• {kh} representa /x/, como en {khotbah} «sermón»; {g} ante {e/i} es /ɡ/, pero ante {a/u} es /ɣ/, como en {gembira} «alegre».
• Las vocales finales de {sebut}, {saya} y {buku} se reducen mucho en el habla cotidiana; la ortografía conserva la vocal final.

El acento escrito {–} es raro: el acento antepenúltimo suele ser elícito, como en {membaca} [memˈbatʃa] y {bermuka} [bərˈmuka].`),
  vocab: [
    V('saya', 'saya', 'yo (formal o neutro)'),
    V('aku', 'aku', 'yo (íntimo)'),
    V('kamu', 'kamu', 'tú informal'),
    V('Anda', 'Anda', 'usted formal'),
    V('dia', 'dia', 'él, ella, aquello'),
    V('kami', 'kami', 'nosotros (sin el oyente)'),
    V('kita', 'kita', 'nosotros (con el oyente)'),
    V('mereka', 'mereka', 'ellos, ellas'),
    V('ini', 'ini', 'este, esto'),
    V('itu', 'itu', 'ese, aquello'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué pronombre significa «nosotros», incluyendo al oyente?'),
    options: [T('kami'), T('kita'), T('mereka'), T('dia')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: «___ percaya» = «yo creo» (formal).'),
      answer: 'saya',
      hint: T('Pronombre formal de primera persona.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo se pronuncia aproximadamente {cinta}?'),
      options: [T('chinta'), T('jinta'), T('sinta'), T('tsinta')],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El verbo no cambia según la persona ni el número: {dia membaca} = «él lee»; {mereka membaca} = «ellos leen».',
      ),
    },
    {
      n: '2',
      text: T(
        '{kami} excluye a quien escucha; {kita} lo incluye. La elección no depende de quién esté presente.',
      ),
    },
    {
      n: '3',
      text: T('{dia} también puede significar «eso»; el contexto resuelve la referencia.'),
    },
  ],
  notes: [
    {
      label: T('Cuidado'),
      text: T('La palabra {dan} va en minúscula y significa «y»; el país es {Indonesia}.'),
    },
  ],
  examples: [
    { text: 'Saya percaya kepada Yesus.', gloss: T('Yo creo en Jesús.') },
    { text: 'Kamu dan aku membaca Firman.', gloss: T('Tú y yo leemos la Palabra.') },
    { text: 'Kita adalah saudara.', gloss: T('Somos hermanos (incluyendo al oyente).') },
  ],
  tables: [
    {
      caption: T('Pronombres personales'),
      head: ['Função', 'PT', 'ES'],
      rows: [
        ['1ª pessoa', T('saya / aku'), T('yo formal / íntimo')],
        ['2ª pessoa', T('kamu / Anda'), T('informal / formal')],
        ['3ª pessoa', T('dia / mereka'), T('él o ella / ellos')],
        ['Nós', T('kami / kita'), T('exclusivo / inclusivo')],
      ],
    },
  ],
};
