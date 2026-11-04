import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Voz passiva: di- e ter-'),
  subtitle: T('dibaca, tertulis, terjadi'),
  section: T('Tempo e verbo'),
  body: C(`A passiva actional põe o objeto em foco:

{di- + baca} → {dibaca} «ser lido»;
{di- + salib + -kan} → {disalibkan} «ser crucificado»;
{di- + IEnumerator} → {dibuat} «ser feito»;
{di- + tentang} → {dibahas} «ser discutido».

O aspecto pode vir de {sudah}, {sedang} ou {akan}: {Sudah dibaca}, {Sedang dibaca}, {Akan dibaca}. O agente {oleh} normalmente vem depois da passiva: {dibaca oleh murid}. Se o agente for pronominal, há cliticização: {kubaca} «lido por mim», {kaubaca} «lido por você».

{ter-} expressa um ESTADO resultante, involuntário, capacidade ou superfície: {tertulis} «estar escrito» (João 19:19), {terbuka} «estar aberto», {tersembunyi} «estar oculto», {terlihat} «ser visible», {terangkat} «estar levantado». Em sentido biblical, {terbuka} pode sugerir acesso à sinagoga.

{terjadi} «acontecer/ocorrer» é uma lexicalização: embora registrada como {ter- + jadi}, não um exemplo para pressupor que todas as formas são transparentes.

Compare:
• {Alkitab itu dibaca} = «A Bíblia é lida» (ação; alguém a lê).
• {Alkitab itu tertulis} = «Está escrito na Bíblia» ou «A Bíblia diz» (estado/resultado).

A escolha depende da pergunta: se o texto recebe uma ação, prefira {dibaca}; se o que importa é a informação disponível, use {tertulis}.`),
  vocab: [
    V('dibaca', 'baca', 'ser lido'),
    V('dibuat', 'buat', 'ser feito, criado'),
    V('dibahas', 'bahas', 'ser discutido'),
    V('disalibkan', 'salib', 'ser crucificado'),
    V('tertulis', 'tulis', 'estar escrito'),
    V('terbuka', 'buka', 'estar aberto'),
    V('tersembunyi', 'sembunyi', 'estar oculto'),
    V('terlihat', 'lihat', 'ser visível, aparecer'),
    V('terjadi', 'jadi', 'acontecer, ocorrer'),
    V('kubaca', 'baca', 'lido por mim'),
    V('kaubaca', 'baca', 'lido por você'),
    V('oleh', 'oleh', 'por (agente)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual forma expressa «está escrito» como estado resultante?'),
    options: [T('tertulis'), T('dibaca'), T('ditulis'), T('menulis')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: «___ oleh murid» = «é lido pelo discípulo».'),
      answer: 'dibaca',
      hint: T('Use di- + baca.'),
    },
    {
      kind: 'choose',
      prompt: T('Em «Kami membaca Firman», qual passiva expressa a ação?'),
      options: [
        T('Firman dibaca kami'),
        T('Firman ditafsirkan'),
        T('Kami dibaca'),
        T('Membaca Firman'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'di- prefere vogais arredondadas, mas há alomorfos: di- + -kan → {di-kan}; {di- + baca} → {dibaca}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{oleh} introduz agente, enquanto {oleh} também significa «marca» em outros usos. Não o confunda automaticamente com a preposição causal española «por».',
      ),
    },
    {
      n: '3',
      text: T(
        'ter- não significa simplesmente «ser -ado»: pode indicar resultado, involuntariedade, capacidade ou superfície visível.',
      ),
    },
  ],
  notes: [
    {
      label: T('Registro'),
      text: T('{Terlihat} pode significar «parecer/ser óbvio» além de «ser visível».'),
    },
  ],
  examples: [
    { text: 'Surat itu ditulis oleh Petrus.', gloss: T('A carta é escrita por Pedro.') },
    { text: 'Ia tertulis di atas salib.', gloss: T('Está escrito acima da cruz.') },
    { text: 'Pintu terbuka.', gloss: T('A porta está aberta.') },
  ],
  tables: [
    {
      caption: T('di- e ter-'),
      head: ['Padrão', 'Valor', 'ES'],
      rows: [
        ['di- + V', T('ação sofrida; objeto em foco'), '{dibaca}'],
        ['ter- + V', T('estado/resultado'), '{tertulis}'],
      ],
    },
  ],
};
