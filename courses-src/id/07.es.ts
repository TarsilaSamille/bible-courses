import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('Lectura: Padrenuestro y Salmo 22'),
  subtitle: T('Bapa kami yang di sorga'),
  section: T('Lecturas'),
  body: C(`El Padrenuestro reúne nombres, pronombres, relativas, pasivas e imperativos. TB dice {Bapa kami yang di sorga, dikuduskanlah nama-Mu}: «Padre nuestro que está en el cielo, sea santificado tu nombre».

ANÁLISIS
• {Bapa}: «padre».
• {kami}: sujeto posesivo «nuestro»; toda la cláusula funciona como sujeto de {dikuduskanlah}.
• {yang di sorga}: relativa pasiva: «que está en el cielo».
• {nama-Mu}: «tu nombre»; {Mu} es enclítico formal/posesivo de segunda persona unido a la base.
• {dikuduskanlah}: {di-} + {kuduskan} + {-lah}; pasiva («sea santificado») con orden enfática.

Continúa: {Datanglah kerajaan-Mu, jadilah kehendak-Mu}. {Datanglah} puede tener valor desiderativo: «venga»; {jadilah} «sea hecho». {Kerajaan-Mu} con {datang} evoca la imagen bíblica de la llegada del reino.

{Berikanlah kami pada hari ini makanan kami yang secukupnya}. {Berikanlah} combina {beri} + {kan} + {lah} y es más natural que {berilah kami}. {Kami} es el beneficiario; {yang secukupnya} es una relativa con valor de suficiencia.

En {Ampunilah kami akan kesalahan kami}, {akan} es NOMINALIZADOR pospuesto: «de/por». No es el futuro {akan}. {Kesalahan} significa «errores» o «deudas».

En el Salmo 22:2, {Allahku, Allahku} = «Dios mío, Dios mío» ({ku}, primera persona). {Mengapa} introduce una pregunta: «por qué». {Meninggalkan} = {meN- + tinggal + kan}, «abandonar». {Aku} es enfático en el registro bíblico.`),
  vocab: [
    V('Bapa', 'bapa', 'padre'),
    V('sorga', 'sorga', 'cielo'),
    V('kuduskan', 'kudus', 'santificar'),
    V('dikuduskanlah', 'kudus', '¡sea santificado!'),
    V('nama-Mu', 'nama', 'tu nombre'),
    V('kerajaan', 'raja', 'reino'),
    V('kehendak', 'hendak', 'voluntad, deseo'),
    V('Berikanlah', 'beri', '¡da!'),
    V('secukupnya', 'cukup', 'que sea suficiente'),
    V('Ampunilah', 'ampun', '¡perdona!'),
    V('akan', 'akan', 'de; por (nominalizador)'),
    V('kesalahan', 'salah', 'error, deuda'),
    V('meninggalkan', 'tinggal', 'abandonar'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué hace {-lah} en {dikuduskanlah}?'),
    options: [
      T('marca el pasado'),
      T('da fuerza de orden o deseo a la pasiva'),
      T('crea el plural'),
      T('niega el verbo'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: «___lah nama-Mu» = «sea santificado tu nombre».'),
      answer: 'dikuduskan',
      hint: T('Empieza con di- y contiene la raíz kudus.'),
    },
    {
      kind: 'choose',
      prompt: T('En «akan kesalahan», ¿qué función tiene {akan}?'),
      options: [T('futuro'), T('nominalizador, «de»'), T('pronombre'), T('negación')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Toda la cláusula nominal {Bapa kami yang di sorga} es sujeto de {dikuduskanlah}; no leas solo {kami} como sujeto.',
      ),
    },
    { n: '2', text: T('{-lah} puede crear valor de orden o deseo, pero no crea pasado.') },
    {
      n: '3',
      text: T(
        'TB usa minúsculas para los nombres divinos; en texto normal, escribe con mayúscula {Allah}, {Tuhan} y {Yesus} según la convención de la edición.',
      ),
    },
  ],
  notes: [
    {
      label: T('Pronunciación'),
      text: T('{sorga} se pronuncia aproximadamente [ˈsɔrɡa], con vocal velar abierta.'),
    },
  ],
  examples: [
    { text: 'Bapa kami yang di sorga.', gloss: T('Padre nuestro que está en el cielo.') },
    { text: 'Datanglah kerajaan-Mu.', gloss: T('Venga tu reino.') },
    { text: 'Ampunilah kami akan kesalahan kami.', gloss: T('Perdona nuestras deudas.') },
  ],
  tables: [
    {
      caption: T('Estructuras del Padrenuestro'),
      head: ['Estrutura', 'PT', 'ES'],
      rows: [
        ['yang + passiva', T('oración relativa'), '{yang di sorga} = «que está en el cielo»'],
        ['-Mu', T('posesivo de 2.ª persona'), '{nama-Mu} = «tu nombre»'],
        ['akan + N', T('nominalizador'), '{akan kesalahan} = «de los errores»'],
      ],
    },
  ],
};
