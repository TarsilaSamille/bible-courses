import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('Registro y tratamiento'),
  subtitle: T('Anda, kamu, engkau; dia, beliau'),
  section: T('Registro y discurso'),
  body: C(`El sistema indonesio es relacional, no simplemente formal o informal. La elección depende de quién es el interlocutor y del contexto.

{kamu} es el tratamiento común, familiar o respetuoso en muchas situaciones cotidianas. {Anda} es formal/distante y se usa con desconocidos; puede sonar distante o irónico cuando no procede. {Kau} es más íntimo y coloquial, normalmente en forma clítica: {aku cinta kau}; la forma completa {engkau} es enfática, bíblica o literaria.

{Mu} es clítico de segunda persona: {nama-Mu} «tu nombre». {Anda} suele aparecer como pronombre independiente; {mu} acompaña normalmente al familiar {kamu}: {rumahmu} «tu casa».

{Beliau} es una referencia respetuosa de tercera persona, sobre todo en documentos o ambientes públicos; {dia} es ordinario. {Saudara} funciona como vocativo: «hermano» puede incluir hombres y mujeres; {saudara-saudara} «queridos hermanos» es común en las cartas paulinas.

El registro depende del contexto. {Santap} es un verbo cuidado o refinado para «comer»; {makan} es normal, no «bruto». {Meninggal} describe una muerte y puede ser cortés; {mati} es directo y puede resultar brusco en contextos sensibles. {Wafat} pertenece al uso formal o eclesial.`),
  vocab: [
    V('Anda', 'Anda', 'usted formal; tú'),
    V('kamu', 'kamu', 'tú informal'),
    V('kau', 'kau', 'tú íntimo'),
    V('engkau', 'engkau', 'tú enfático/literario'),
    V('-mu', 'mu', 'tu, su'),
    V('dia', 'dia', 'él, ella'),
    V('beliau', 'beliau', 'él/ella respetuoso'),
    V('saudara', 'saudara', 'hermano, fellow'),
    V('saudara-saudara', 'saudara', 'hermanos; hermanos en Cristo'),
    V('rumah', 'rumah', 'casa'),
    V('rumahmu', 'rumah', 'tu casa'),
    V('makan', 'makan', 'comer'),
    V('santap', 'santap', 'comer (cuidado/refinado)'),
    V('meninggal', 'meninggal', 'morir, fallecer'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué frase es más natural al conocer a un desconocido?'),
    options: [
      T('¿Cómo se llama usted?'),
      T('¿Cómo te llamas?'),
      T('¿Tú quién eres?'),
      T('¿Padre quién?'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: «rumah___» = «tu casa» (con {kamu}).'),
      answer: 'mu',
      hint: T('Clítico de segunda persona unido a la base.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué verbo es más directo para «morir»?'),
      options: [T('mati'), T('meninggal'), T('santap'), T('tidur')],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{Anda} se escribe con mayúscula porque sustituye un nombre propio; {kamu} y {dia} normalmente van en minúscula.',
      ),
    },
    {
      n: '2',
      text: T(
        'El clítico {mu} se une a la base y la {ny} final suele pronunciarse [ɲ]: {nama-Mu} ≈ [ˈnama mu].',
      ),
    },
    {
      n: '3',
      text: T(
        'No elijas {Anda} solo porque alguien sea mayor: importan el contexto, la edad, el estatus y la distancia social.',
      ),
    },
  ],
  notes: [
    {
      label: T('Variación'),
      text: T('El par {santap/makan} es estilístico, no una oposición Brutal/educada absoluta.'),
    },
  ],
  examples: [
    { text: 'Saudara, marilah kita belajar.', gloss: T('Hermano, aprendamos.') },
    { text: 'Aku menyanyikan lagu untukmu.', gloss: T('Canto una canción para ti.') },
    { text: 'Beliau tinggal di Jakarta.', gloss: T('Él vive en Yakarta (registro respetuoso).') },
  ],
  tables: [
    {
      caption: T('Formas de tratamiento'),
      head: ['Forma', 'PT', 'ES'],
      rows: [
        ['kamu', T('común/informal'), '{kamu + -mu}'],
        ['Anda', T('formal/distante'), '{Anda}'],
        ['kau', T('íntimo/clítico'), '{mencintamu} «te quiero»'],
        ['engkau', T('enfático/literario'), '{Engkau Allahku}'],
      ],
    },
  ],
};
