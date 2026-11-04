import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('Tiempo, aspecto y negación'),
  subtitle: T('sudah, sedang, akan, belum; tidak, bukan'),
  section: T('Tiempo y verbo'),
  body: C(`Los verbos no se conjugan: el propio evento verbal puede ir sin marca. El tiempo y el aspecto entran mediante marcadores.

{sudah} presenta un evento como completado: «ya ocurrió» — {Allah sudah berfirman}. {telah} pertenece al registro bíblico/formal y puede|Portar énfasis: {Ia telah datang}. {sedang} marca un proceso en curso: {Dia sedang berdoa}. {akan} sitúa el evento después del punto de referencia: {Ia akan datang}. {belum} significa «todavía no»: {Ia belum datang}.

Para comparar el punto de referencia:
• {Dia sudah datang} = «ya ha llegado».
• {Dia sedang datang} = «está viniendo» (aspecto en curso).
• {Dia akan datang} = «vendrá».
• {Dia belum datang} = «todavía no ha llegado».

Negación
{tidak} niega verbos y adjetivos: {tidak percaya}, {tidak baik}. {bukan} niega o identifica sustantivos: {Dia bukan nabi} = «Él no es profeta»; {Ini bukan Allah} = «Esto no es Dios». {bukanlah} añade énfasis: «sin duda, no».

El sufijo {-lah} destaca el verbo principal y, en oraciones coordinadas bipolares, también el segundo elemento: {Berfirmanlah Allah, jadilah terang}. En {Datanglah!}, marca un imperativo enfático.`),
  vocab: [
    V('sudah', 'sudah', 'ya; evento completado'),
    V('telah', 'telah', 'ya (formal/bíblico)'),
    V('sedang', 'sedang', 'estar en curso'),
    V('akan', 'akan', 'va; en el futuro'),
    V('belum', 'belum', 'todavía no'),
    V('tidak', 'tidak', 'no (verbo/adjetivo)'),
    V('bukan', 'bukan', 'no (nombre/identidad)'),
    V('berfirman', 'firman', 'hablar, declarar'),
    V('datang', 'datang', 'venir'),
    V('berfirmanlah', 'firman', '¡hable!; dijo enfáticamente'),
    V('terang', 'terang', 'luz, claro'),
    V('gelap', 'gelap', 'oscuro, tinieblas'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se forma «todavía no ha llegado»?'),
    options: [
      T('Dia belum datang'),
      T('Dia tidak datang'),
      T('Dia bukan datang'),
      T('Datang belum dia'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: «Dia ___ berdoa» = «está orando».'),
      answer: 'sedang',
      hint: T('Marcador de aspecto en curso.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase usa correctamente {bukan}?'),
      options: [
        T('Dia bukan nabi.'),
        T('Dia tidak nabi.'),
        T('Bukan dia percaya.'),
        T('Dia bukan percaya.'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'En frases neutras, el contexto puede aportar el tiempo: {Dia datang} puede ser presente habitual o pasado narrativo.',
      ),
    },
    {
      n: '2',
      text: T(
        '{sudah} y {telah} marcan conclusión; {belum} niega una conclusión esperada e implica un punto temporal.',
      ),
    },
    {
      n: '3',
      text: T(
        'Usa {tidak} ante verbo/adjetivo; usa {bukan} ante nombre, pronombre o para explicar identidad.',
      ),
    },
  ],
  notes: [
    {
      label: T('No confundas'),
      text: T('{sudah} significa «ya», mientras {belum} significa «todavía no».'),
    },
  ],
  examples: [
    { text: 'Allah sudah berfirman.', gloss: T('Dios ya ha hablado.') },
    { text: 'Dia sedang berdoa.', gloss: T('Él está orando.') },
    { text: 'Ini bukan Firman.', gloss: T('Esto no es la Palabra.') },
    { text: 'Dia belum percaya.', gloss: T('Él todavía no ha creído.') },
  ],
  tables: [
    {
      caption: T('Marcadores de tiempo y aspecto'),
      head: ['Marcador', 'PT', 'ES'],
      rows: [
        ['sudah', T('ya / completado'), '{Dia sudah datang}'],
        ['sedang', T('en curso'), '{Dia sedang datang}'],
        ['akan', T('posterior a la referencia'), '{Dia akan datang}'],
        ['belum', T('todavía no'), '{Dia belum datang}'],
      ],
    },
  ],
};
