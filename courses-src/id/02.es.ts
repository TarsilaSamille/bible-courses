import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('Sustantivos y prefijos meN-, ber- y di-'),
  subtitle: T('meN- + verbo; ber- + sustantivo; di- + verbo'),
  section: T('El nombre'),
  body: C(`Con meN-, la vocal {e} y la consonante nasal de {meng-} pueden fusionarse y producir una forma inicial nueva. En {mempersembahkan}, la raíz {sembah} empieza por /s/ y recibe [p] de {per-}; la consonante inicial de la raíz no se pierde. El alomorfo común es {meng-}: {meng- + baca} → {membaca}; delante de {r} se mantiene {men-}: {men- + dengar} → {mendengar}.

meN- indica una acción vista desde el participante: {me- + baca} → {membaca} «leer»; {men- + dengar} → {mendengar} «oír»; {meng- + kasih + -i} → {mengasihi} «amar». Los plurales nominales suelen reducirse con meN-: {murid} → {memurid} «los discípulos».

ber- forma estados, capacidades, posiciones o posesión: {ber- + doa} → {berdoa} «orar»; {ber- + jalan} → {berjalan} «caminar»; {ber- + hasil} → {berhasil} «tener éxito». Su objeto puede ir después: {berdoa kepada Allah}.

di- forma una acción no agentiva: {di- + baca} → {dibaca} «ser leído»; {di- + salib + -kan} → {disalibkan} «ser crucificado». Para el plural, {para murid} se convierte en {para-murid}; para incluir ambos sexos, se usa {mereka} o {para murid laki-laki dan perempuan}.`),
  vocab: [
    V('murid', 'murid', 'discípulo, alumno'),
    V('baca', 'baca', 'leer'),
    V('membaca', 'baca', 'leer; estar leyendo'),
    V('mendengar', 'dengar', 'oír'),
    V('berdoa', 'doa', 'orar'),
    V('berjalan', 'jalan', 'caminar'),
    V('berhasil', 'hasil', 'tener éxito'),
    V('mengasihi', 'kasih', 'amar'),
    V('dibaca', 'baca', 'ser leído'),
    V('disalibkan', 'salib', 'ser crucificado'),
    V('Alkitab', 'Alkitab', 'Biblia'),
    V('Firman', 'firman', 'Palabra, palabra de Dios'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué prefijo forma «orar» a partir de {doa}?'),
    options: [T('ber-'), T('di-'), T('pe-'), T('ke-')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: «Allah ___ dunia» = «Dios ama al mundo» (Juan 3:16).'),
      answer: 'mengasihi',
      hint: T('Usa meN- + kasih + -i.'),
    },
    {
      kind: 'choose',
      prompt: T('En «La Palabra es leída por el discípulo», ¿qué introduce {oleh}?'),
      options: [T('el lugar'), T('el agente de la pasiva'), T('el tiempo'), T('la negación')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'La {e} de {meN-} puede realizarse [ə], [i] o [e}: {menulis} [məˈnulis], {membaca} [məmˈbatʃa], {menang} [məˈnaŋ].',
      ),
    },
    {
      n: '2',
      text: T(
        'Con {ber-}, el verbo suele expresar estado o actividad, no una acción transferida a un objeto: {berjalan}, no «andar algo».',
      ),
    },
    {
      n: '3',
      text: T(
        'La forma reducida {memurid} significa «los discípulos». {Para murid} también es plural definido, pero no se combina naturalmente con {meN-}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Nota'),
      text: T(
        '{Membaca} puede expresar capacidad («saber leer») o una acción en curso si se combina con {sedang}.',
      ),
    },
  ],
  examples: [
    { text: 'Murid-murid membaca Alkitab.', gloss: T('Los discípulos leen la Biblia.') },
    { text: 'Saya berdoa kepada Allah.', gloss: T('Yo oro a Dios.') },
    { text: 'Firman itu dibaca oleh murid.', gloss: T('La Palabra es leída por el discípulo.') },
  ],
  tables: [
    {
      caption: T('Tres familias verbales básicas'),
      head: ['Padrão', 'Função', 'ES'],
      rows: [
        ['meN- + V', T('acción del participante'), '{membaca} «leer»'],
        ['ber- + N', T('estado o capacidad'), '{berjalan} «caminar»'],
        ['di- + V', T('acción no agentiva'), '{dibaca} «ser leído»'],
      ],
    },
  ],
};
