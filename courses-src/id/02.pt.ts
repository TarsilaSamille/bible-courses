import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('Substantivos e prefixos meN-, ber- e di-'),
  subtitle: T('meN- + Verbo; ber- + substantivo; di- + verbo'),
  section: T('O nome'),
  body: C(`Ao usar meN-, a vogal {e} e a consoante nasal de {meng-} podem fundir-se e produzir uma nova forma inicial. In {mempersembahkan}, a raiz {sembah} começa por /s/ e recebe [p] de {per-}; o /p/ inicial não desaparece. O alomorfo comum é {meng-}: {meng- + baca} → {membaca}; diante de {r}, conserva-se {men-}: {men- + dengar} → {mendengar}.

meN- indica ação Vista do participante: {me- + baca} → {membaca} «ler»; {men- + dengar} → {mendengar} «ouvir»; {meng- + kasih + -i} → {mengasihi} «amar». O plural nominal com {meN-} é frequentemente marcado por redução: {murid} → {memurid} «os disciples». Em {para murid}, {para} forma o plural definido.

ber- forma estado, capacidade, posição ou possession: {ber- + doa} → {berdoa} «orar»; {ber- + jalan} → {berjalan} «caminhar»; {ber- + hasil} → {berhasil} «ter sucesso». O objeto pode vir depois: {berdoa kepada Allah}.

di- forma ação como passive: {di- + baca} → {dibaca} «ser lido»; {di- + salib + -kan} → {disalibkan} «ser crucificado». Para o plural, repete-se a raiz: {para murid} → {para-murid}; para referir-se a ambos os sexos, {mereka} ou {para murid laki-laki dan perempuan}.`),
  vocab: [
    V('murid', 'murid', 'discípulo, aluno'),
    V('baca', 'baca', 'ler'),
    V('membaca', 'baca', 'ler; estar lendo'),
    V('mendengar', 'dengar', 'ouvir'),
    V('berdoa', 'doa', 'orar'),
    V('berjalan', 'jalan', 'caminhar'),
    V('berhasil', 'hasil', 'ter sucesso'),
    V('mengasihi', 'kasih', 'amar'),
    V('dibaca', 'baca', 'ser lido'),
    V('disalibkan', 'salib', 'ser crucificado'),
    V('Alkitab', 'Alkitab', 'Bíblia'),
    V('Firman', 'firman', 'Palavra, palavra de Deus'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual prefixo forma «orar» a partir de {doa}?'),
    options: [T('ber-'), T('di-'), T('pe-'), T('ke-')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: «Allah ___ dunia» = «Deus ama o mundo» (João 3:16).'),
      answer: 'mengasihi',
      hint: T('Use meN- + kasih + -i.'),
    },
    {
      kind: 'choose',
      prompt: T('Em «Firman itu dibaca oleh murid», o que {oleh} introduz?'),
      options: [T('o lugar'), T('o agente da passiva'), T('o tempo'), T('a negação')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A vogal {e} de {meN-} pode realizar-se [ə], [i] ou [e] conforme a raiz: {menulis} [məˈnulis], {membaca} [məmˈbatʃa], {menang} [məˈnaŋ].',
      ),
    },
    {
      n: '2',
      text: T(
        'Com {ber-}, o verbo costuma expressar estado ou atividade, não ação transferida a um objeto: {berjalan}, não «andar algo».',
      ),
    },
    {
      n: '3',
      text: T(
        'A redução {memurid} significa «os discípulos». A forma {para murid} também é plural definido, mas não se combina naturalmente com {meN-}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Nota'),
      text: T(
        'A palavra {membaca} pode expressar habilidade («saber ler») ou ação em curso quando aparece com {sedang}.',
      ),
    },
  ],
  examples: [
    { text: 'Murid-murid membaca Alkitab.', gloss: T('Os discípulos leem a Bíblia.') },
    { text: 'Saya berdoa kepada Allah.', gloss: T('Eu oro a Deus.') },
    { text: 'Firman itu dibaca oleh murid.', gloss: T('A Palavra é lida pelo discípulo.') },
  ],
  tables: [
    {
      caption: T('Três famílias verbais recomendadas'),
      head: ['Padrão', 'Função', 'ES'],
      rows: [
        ['meN- + V', T('ação do participante'), '{membaca} «leer»'],
        ['ber- + N', T('estado ou capacidade'), '{berjalan} «caminar»'],
        ['di- + V', T('ação não agentiva'), '{dibaca} «ser leído»'],
      ],
    },
  ],
};
