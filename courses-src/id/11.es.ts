import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Voz pasiva: di- y ter-'),
  subtitle: T('dibaca, tertulis, terjadi'),
  section: T('Tiempo y verbo'),
  body: C(`La pasiva accional pone el objeto en primer plano:

{di- + baca} → {dibaca} «ser leído»;
{di- + salib + -kan} → {disalibkan} «ser crucificado»;
{di- + buat} → {dibuat} «ser hecho»;
{di- + tentang} → {dibahas} «ser discutido».

El aspecto puede proceder de {sudah}, {sedang} o {akan}: {sudah dibaca}, {sedang dibaca}, {akan dibaca}. El agente {oleh} suele ir después: {dibaca oleh murid}. Con agente pronominal se usa un clítico: {kubaca} «leído por mí», {kaubaca} «leído por ti».

{Ter-} expresa un ESTADO RESULTANTE, una condición involuntaria, capacidad o superficie: {tertulis} «estar escrito» (Juan 19:19), {terbuka} «estar abierto», {tersembunyi} «estar oculto», {terlihat} «ser visible», {terangkat} «estar levantado». En el idioma bíblico, {terbuka} puede sugerir una puerta abierta.

{Terjadi} «acontecer» está lexicalizado; no es suficientemente transparente para suponer que toda forma ter- es composicional.

Compara:
• {Alkitab itu dibaca} = «La Biblia está siendo leída» (acción; alguien la lee).
• {Alkitab itu tertulis} = «Está escrito en la Biblia» o «La Biblia dice» (estado/resultado).

La elección depende de la pregunta: si el texto recibe una acción, prefiere {dibaca}; si importa la información disponible, usa {tertulis}.`),
  vocab: [
    V('dibaca', 'baca', 'ser leído'),
    V('dibuat', 'buat', 'ser hecho, creado'),
    V('dibahas', 'bahas', 'ser discutido'),
    V('disalibkan', 'salib', 'ser crucificado'),
    V('tertulis', 'tulis', 'estar escrito'),
    V('terbuka', 'buka', 'estar abierto'),
    V('tersembunyi', 'sembunyi', 'estar oculto'),
    V('terlihat', 'lihat', 'ser visible, aparecer'),
    V('terjadi', 'jadi', 'acontecer, ocurrir'),
    V('kubaca', 'baca', 'leído por mí'),
    V('kaubaca', 'baca', 'leído por ti'),
    V('oleh', 'oleh', 'por (agente)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué forma significa «está escrito» como estado resultante?'),
    options: [T('tertulis'), T('dibaca'), T('ditulis'), T('menulis')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: «___ oleh murid» = «es leído por el discípulo».'),
      answer: 'dibaca',
      hint: T('Usa di- + baca.'),
    },
    {
      kind: 'choose',
      prompt: T('En «Leemos la Palabra», ¿qué pasiva expresa la acción?'),
      options: [
        T('Firman dibaca kami'),
        T('La Palabra es interpretada'),
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
        'di- prefiere vocales redondeadas, pero presenta alomorfos: di- + -kan → {di-kan}; {di- + baca} → {dibaca}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{Oleh} introduce el agente, pero en otros usos significa «marca». No lo identifiques sin más con el «por» causal español.',
      ),
    },
    {
      n: '3',
      text: T(
        '{Ter-} no significa simplemente «ser -ado»: puede indicar resultado, involuntariedad, capacidad una superficie visible.',
      ),
    },
  ],
  notes: [
    {
      label: T('Registro'),
      text: T(
        '{Terlihat} también puede significar «parecer/ser evidente» además de «ser visible».',
      ),
    },
  ],
  examples: [
    { text: 'Surat itu ditulis oleh Petrus.', gloss: T('La carta está escrita por Pedro.') },
    { text: 'Ia tertulis di atas salib.', gloss: T('Está escrito encima de la cruz.') },
    { text: 'Pintu terbuka.', gloss: T('La puerta está abierta.') },
  ],
  tables: [
    {
      caption: T('di- y ter-'),
      head: ['Padrão', 'Valor', 'ES'],
      rows: [
        ['di- + V', T('acción pasiva; objeto en foco'), '{dibaca}'],
        ['ter- + V', T('estado/resultado'), '{tertulis}'],
      ],
    },
  ],
};
