import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Participios y sustantivos verbales'),
  subtitle: T('كَاتِب، مَكْتُوب، كِتَابَة'),
  section: T('El verbo'),
  body: C(`## Tres derivados, tres funciones

La raíz {ك-ت-ب} produce formas nominales que se distinguen por la vocalización y no por el sentido bruto. {كَاتِب} lleva vocal larga y es el **participio activo**: «quien escribe». {مَكْتُوب} empieza por {م} y es el **participio pasivo**: «lo que fue escrito». {كِتَابَة} termina en {ة} y es el **nombre verbal**: «la escritura», sin agente ni paciente definido.

## Si el participio describe o nombra

{kَاتِب} seguido de artículo y concordancia funciona como sustantivo: {الكَاتِبُ} es «el escriba». Seguido de un sustantivo, funciona como adjetivo: {كَاتِبٌ عَالِمٌ} es «escriba sabio». Lo mismo vale para {مَكْتُوب} en {كَلِمَةٌ مَكْتُوبَةٌ} y para {عِلْمٌ عَمِيقٌ}.

## El tiempo que el participio no tiene

El participio no tiene tiempo propio: decir {مَكْتُوب} no afirma ni que la escritura ocurrió ni que ocurrirá. El tiempo viene del verbo que lo acompaña, si lo hay. Una traducción que convierte un participio en pasado o en futuro añade algo que el árabe no dijo.

## Criterio de lectura

Identifica la vocalización del derivado: {ـاتِب} activo, {مَـتُوب} pasivo, {ـتَابَة} nombre verbal. Después comprueba si hay artículo: con artículo nombra, sin él describe. Esa comprobación decide la traducción en 1 Corintios y en los Salmos.`),
  vocab: [
    V('كَاتِب', 'كتب', 'escritor'),
    V('مَكْتُوب', 'كتب', 'escrito'),
    V('كِتَابَة', 'كتب', 'escritura'),
    V('عَالِم', 'علم', 'sabio; conocedor'),
    V('حَافِظ', 'حفظ', 'guardián'),
    V('مَحْبُوب', 'حب', 'amado'),
    V('مُبَارَك', 'بارك', 'bendito'),
    V('إِيمَان', 'آمن', 'fe'),
    V('عِلْم', 'علم', 'conocimiento'),
    V('حَمْد', 'حمد', 'alabanza'),
    V('طُوبَى', 'طوبى', 'bienaventuranza'),
    V('آمَنُوا', 'آمن', 'creyeron'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es el participio activo de {كتب}?'),
    options: [T('escrito'), T('escritor'), T('escritura'), T('libro')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Relaciona forma y función.'),
      pairs: [
        { a: T('escritor'), b: T('participio activo') },
        { a: T('escrito'), b: T('participio pasivo') },
        { a: T('escritura'), b: T('sustantivo verbal') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'fill',
      prompt: T('Completa {ال___}: {الْحَمْدُ} significa «la alabanza».'),
      answer: 'حَمْدُ',
      hint: T('Es el sustantivo verbal de alabar.'),
    },
    {
      kind: 'choose',
      prompt: T('En {رَحْمَةُ اللهِ}, ¿qué palabra es regida?'),
      options: [T('misericordia'), T('Dios'), T('tuvo misericordia'), T('Dios acusativo')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El participio activo indica actividad presente; el pasivo indica resultado o estado resultante.',
      ),
    },
    {
      n: '2',
      text: T(
        'El sustantivo verbal nombra el evento abstracto y puede regir objeto como el verbo de origen.',
      ),
    },
    { n: '3', text: T('El prefijo {لِ} transforma «misericordia» en «tener misericordia».') },
  ],
  notes: [
    {
      label: T('Nota'),
      text: T(
        'No todo sustantivo verbal pertenece rigurosamente a una sola forma; las etiquetas didácticas simplifican el sistema.',
      ),
    },
  ],
  examples: [
    { text: 'كَاتِبٌ جَدِيدٌ', gloss: T('un escritor nuevo') },
    { text: 'كِتَابَةٌ مُبْدَعَةٌ', gloss: T('una escritura creativa') },
    { text: 'الْحَمْدُ لِلَّهِ', gloss: T('la alabanza es a Dios') },
  ],
  tables: [
    {
      caption: T('Derivados de كتب'),
      head: [T('Categoría'), T('Patrón'), T('Resultado')],
      rows: [
        ['particípio ativo', 'فَاعِل', 'كَاتِب: quem escreve'],
        ['particípio passivo', 'مَفْعُول', 'مَكْتُوب: que foi escrito'],
        ['nome verbal', 'مَفْعَالَة / مَفْعِل', 'كِتَابَة: ato de escrever'],
        ['nome verbal', 'فِعْلَة', 'صَلَاة: oração'],
      ],
    },
  ],
};
