import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('Nouns and meN-, ber-, di- prefixes'),
  subtitle: T('meN- + verb; ber- + noun; di- + verb'),
  section: T('The noun'),
  body: C(`With meN-, the {e} vowel and the nasal consonant of {meng-} may fuse, yielding a new initial shape. In {mempersembahkan}, the root {sembah} begins with /s/ and receives [p] from {per-}; the root-initial consonant is not lost. The common allomorph is {meng-}: {meng- + baca} → {membaca}; before {r}, it remains {men-}: {men- + dengar} → {mendengar}.

meN- marks an action viewed from its participant: {me- + baca} → {membaca} “to read”; {men- + dengar} → {mendengar} “to hear”; {meng- + kasih + -i} → {mengasihi} “to love”. Noun plurals commonly reduce with meN-: {murid} → {memurid} “the disciples.”

ber- forms states, abilities, positions, or possession: {ber- + doa} → {berdoa} “to pray”; {ber- + jalan} → {berjalan} “to walk”; {ber- + hasil} → {berhasil} “to succeed”. Its object may follow: {berdoa kepada Allah}.

di- forms a non-agentive action: {di- + baca} → {dibaca} “to be read”; {di- + salib + -kan} → {disalibkan} “to be crucified”. For plural reference, {para murid} becomes {para-murid}; to include both sexes, use {mereka} or {para murid laki-laki dan perempuan}.`),
  vocab: [
    V('murid', 'murid', 'disciple, student'),
    V('baca', 'baca', 'to read'),
    V('membaca', 'baca', 'to read; be reading'),
    V('mendengar', 'dengar', 'to hear'),
    V('berdoa', 'doa', 'to pray'),
    V('berjalan', 'jalan', 'to walk'),
    V('berhasil', 'hasil', 'to succeed'),
    V('mengasihi', 'kasih', 'to love'),
    V('dibaca', 'baca', 'to be read'),
    V('disalibkan', 'salib', 'to be crucified'),
    V('Alkitab', 'Alkitab', 'Bible'),
    V('Firman', 'firman', 'Word, word of God'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which prefix forms “to pray” from {doa}?'),
    options: [T('ber-'), T('di-'), T('pe-'), T('ke-')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: “Allah ___ dunia” = “God loves the world” (John 3:16).'),
      answer: 'mengasihi',
      hint: T('Use meN- + kasih + -i.'),
    },
    {
      kind: 'choose',
      prompt: T('In “The Word is read by the disciple,” what does {oleh} introduce?'),
      options: [T('place'), T('the agent of the passive'), T('time'), T('negation')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The {e} in {meN-} may surface as [ə], [i], or [e]: {menulis} [məˈnulis], {membaca} [məmˈbatʃa], {menang} [məˈnaŋ].',
      ),
    },
    {
      n: '2',
      text: T(
        'With {ber-}, a verb usually expresses a state or activity, not an action transferred to an object: {berjalan}, not “to walk something”.',
      ),
    },
    {
      n: '3',
      text: T(
        'Reduplicated {memurid} means “the disciples.” {Para murid} is also a definite plural, but it does not naturally combine with {meN-}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Note'),
      text: T(
        '{Membaca} can express ability (“know how to read”) or an action in progress when combined with {sedang}.',
      ),
    },
  ],
  examples: [
    { text: 'Murid-murid membaca Alkitab.', gloss: T('The disciples read the Bible.') },
    { text: 'Saya berdoa kepada Allah.', gloss: T('I pray to God.') },
    { text: 'Firman itu dibaca oleh murid.', gloss: T('The Word is read by the disciple.') },
  ],
  tables: [
    {
      caption: T('Three core verb families'),
      head: ['Padrão', 'Função', 'ES'],
      rows: [
        ['meN- + V', T('participant action'), '{membaca} «leer»'],
        ['ber- + N', T('state or ability'), '{berjalan} «caminar»'],
        ['di- + V', T('non-agentive action'), '{dibaca} «ser leído»'],
      ],
    },
  ],
};
