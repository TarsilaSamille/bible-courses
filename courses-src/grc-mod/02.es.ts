import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('Sustantivos y plural'),
  subtitle: T('ο άνθρωπος — οι άνθρωποι'),
  section: T('El nombre'),
  body: C(`El sustantivo griego conserva el género, pero ha perdido la declinación antigua: nominativo y acusativo terminan igual. El plural depende sobre todo de la sílaba final.

Los masculinos en -ος forman normalmente -οι: άνθρωπος → άνθρωποι. Los femeninos terminados en -α, -η o -η/-ια forman -ες: γυναίκα → γυναίκες, ώρα → ώρες. Los neutros en -ί, -ος, -ός, -υς y algunos sustantivos consonánticos forman -ια: παιδί → παιδιά, βιβλίο → βιβλία.

Hay excepciones: το δίχτυ → τα δίχτυα, το χρώμα → τα χρώματα, το μέρος → τα μέρη. El artículo siempre concuerda.

El vocativo es formal y aparece sobre todo en textos literarios o religiosos: Κύριε, Πατέρ. En el uso cotidiano se emplea el nominativo: Θεός μου. El contraste con el vocativo antiguo es claro: Κύριος es nominativo; κύριος, vocativo antiguo; Κύριε, vocativo moderno y también forma litúrgica conservada.`),
  vocab: [
    V('άνθρωπος', 'άνθρωπος', 'hombre; persona'),
    V('άνθρωποι', 'άνθρωπος', 'hombres; personas'),
    V('γυναίκα', 'γυναίκα', 'mujer'),
    V('γυναίκες', 'γυναίκα', 'mujeres'),
    V('παιδί', 'παιδί', 'niño, niña'),
    V('παιδιά', 'παιδί', 'niños, niñas'),
    V('βιβλίο', 'βιβλίο', 'libro'),
    V('βιβλία', 'βιβλίο', 'libros'),
    V('ζωή', 'ζωή', 'vida'),
    V('θάνατος', 'θάνατος', 'muerte'),
    V('μητέρα', 'μητέρα', 'madre'),
    V('ώρα', 'ώρα', 'hora'),
    V('Κύριε', 'Κύριος', 'Señor (vocativo)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Plural de το βιβλίο'),
    answer: 'τα βιβλία',
    hint: T('Artículo neutro plural + -ια'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Cuál es el plural de η γυναίκα?'),
      options: [T('οι γυναίκα'), T('οι γυναίκες'), T('τα γυναίκες'), T('οι γυναίκια')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Completa: ο άνθρωπος — ___ άνθρωποι'),
      answer: 'οι',
      hint: T('Artículo masculino plural'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo aparece normalmente ο Κύριος al dirigirse a alguien?'),
      options: [T('κύριος'), T('Κύριε'), T('Κύριον'), T('Κυρίων')],
      answer: 1,
    },
  ],
  rules: [
    { n: '§1', text: T('Nominativo y acusativo son idénticos en el sustantivo.') },
    { n: '§2', text: T('Aprende el plural junto con el artículo correspondiente.') },
  ],
  notes: [
    {
      label: T('Atención'),
      text: T(
        'La terminación por sí sola no determina el género: τα λεφτά, τα παντελόνια y τα παγωτά.',
      ),
    },
  ],
  examples: [
    { text: 'η μητέρα μου', gloss: T('mi madre') },
    { text: 'τα παιδιά παίζουν', gloss: T('los niños juegan') },
  ],
  tables: [
    {
      caption: T('Plurales habituales'),
      head: ['Tipo', 'Singular', 'Plural'],
      rows: [
        ['masc. -ος', 'ο άνθρωπος', 'οι άνθρωποι'],
        ['fem. -α', 'η γυναίκα', 'οι γυναίκες'],
        ['neut. -ί', 'το παιδί', 'τα παιδιά'],
        ['neut. -ο', 'το βιβλίο', 'τα βιβλία'],
      ],
    },
  ],
};
