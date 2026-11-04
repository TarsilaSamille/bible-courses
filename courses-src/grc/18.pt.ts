import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  title: T('Futuro ativo e médio'),
  subtitle: T('λύσω, λύσομαι: o σ do amanhã e a voz média'),
  section: T('O verbo'),
  body: C(`## O futuro sigmático

O futuro ativo junta {σ} ao tema + terminações do presente: {λύσω, λύσεις, λύσει, λύσομεν, λύσετε, λύσουσι(ν)}. É o tempo mais transparente do verbo grego: vendo σ entre tema e terminação, com vogal breve, pense futuro (o aoristo tem aumento; o futuro, nunca).

Os contratos alongam antes do σ (cap. 6): {ἀγαπήσω}, {ποιήσω}, {δηλώσω}. Os verbos em consoante fundem σ + consoante e alongam a vogal: o futuro é contraído, com circunflexo — {μένω} → {μενῶ}, {ἀγγέλλω} → {ἀγγελῶ}, {κρίνω} → {κρινῶ}. Diante de futuro com circunflexo, reconstrua: {μενῶ} = {μενε-σ-ω}.

## A voz média: agir para si

A voz média indica ação voltada ao sujeito: direta ({λούομαι} «lavo-me»), indireta ({πορίζομαι} «adquiro para mim») ou causativa. As desinências médias do presente/futuro: {-μαι, -σαι, -ται, -μεθα, -σθε, -νται}. Futuro médio de {λύω}: {λύσομαι, λύσῃ, λύσεται, λυσόμεθα, λύσεσθε, λύσονται}.

Muitos futuros do Novo Testamento são médios com sentido ativo (futuros depoentes): {ἔρχομαι} → {ἐλεύσομαι} «virei», {γίνομαι} → {γενήσομαι}, {λαμβάνω} → {λήμψομαι}, {ἀκούω} → {ἀκούσομαι}. Não traduza reflexo onde o léxico pede ativo: {ἐλεύσομαι} é «virei», nunca «vir-me-ei».

## Usos do futuro

O futuro prediz ({σώσει τὸν λαόν} «salvará o povo», Mt 1.21), promete ({δώσω} «darei»), ameaça e ordena com solenidade (o futuro com valor de imperativo: {ἀγαπήσεις} «amarás», Mt 22.37 — os mandamentos). Há ainda o futuro gnômico (verdades gerais) e o deliberativo («que farei?»).

{ἔσομαι}, futuro de {εἰμί} (cap. 11), merece atenção própria: {ἔσται} + dativo significa «haverá» ({ἔσται σοι χαρά} «haverá para ti alegria», Lc 1.14); {ἔσονται οἱ ἔσχατοι πρῶτοι} «os últimos serão primeiros» (Mt 19.30) inverte a ordem do mundo em futuro solene.`),
  vocab: [
    V('λύσω', 'λύω', 'libertarei'),
    V('λύσει', 'λύω', 'libertará'),
    V('λύσομαι', 'λύω', 'libertar-me-ei'),
    V('λύσεται', 'λύω', 'libertar-se-á'),
    V('σώσει', 'σῴζω', 'salvará'),
    V('δώσω', 'δίδωμι', 'darei'),
    V('ἐλεύσομαι', 'ἔρχομαι', 'virei'),
    V('λήμψομαι', 'λαμβάνω', 'tomarei'),
    V('γενήσεται', 'γίνομαι', 'acontecerá'),
    V('μενῶ', 'μένω', 'permanecerei'),
    V('ἀγγελῶ', 'ἀγγέλλω', 'anunciarei'),
    V('κρινῶ', 'κρίνω', 'julgarei'),
    V('ἔσται', 'εἰμί', 'será, haverá'),
    V('ἔσονται', 'εἰμί', 'serão'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«λύσουσι» é futuro (e não aoristo) porque…'),
    options: [
      T('Tem σ e não tem aumento'),
      T('Termina em -ουσι'),
      T('Vem depois de ἵνα'),
      T('É forma contraída'),
    ],
    answer: 0,
    hint: T('σ sem aumento = futuro — regra §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a 3ª pessoa do singular do futuro médio: λύσε___ («libertar-se-á»).'),
      answer: 'ται',
      hint: T('Desinências médias: -μαι, -σαι, -ται…'),
    },
    {
      kind: 'choose',
      prompt: T('«ἐλεύσομαι» traduz-se «virei» (e não «vir-me-ei») porque…'),
      options: [
        T('É futuro depoente: forma média, sentido ativo'),
        T('O sujeito é plural'),
        T('Falta o aumento'),
        T('É aoristo, não futuro'),
      ],
      answer: 0,
      hint: T('Futuros médios de verbos depoentes = sentido ativo — regra §4.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada forma ao seu tempo/voz.'),
      pairs: [
        { a: 'λύσει', b: 'futuro ativo' },
        { a: 'λύσεται', b: 'futuro médio' },
        { a: 'ἔλυσε', b: 'aoristo' },
        { a: 'μενῶ', b: 'futuro contraído' },
      ],
      answer: [
        { 0: '0', 1: '-', 2: '0' },
        { 0: '1', 1: '-', 2: '1' },
        { 0: '2', 1: '-', 2: '2' },
        { 0: '3', 1: '-', 2: '3' },
      ],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Futuro = tema + σ + terminações do presente. Sem aumento, sempre. O σ com vogal breve denuncia o tempo.',
      ),
    },
    {
      n: '2',
      text: T(
        'Líquidos fundem o σ: futuro contraído com circunflexo ({μενῶ}, {ἀγγελῶ}). Contratos alongam mas mantêm o σ ({ἀγαπήσω}, {ποιήσω}).',
      ),
    },
    {
      n: '3',
      text: T(
        'Voz média = ação para o sujeito. Desinências: -μαι, -σαι, -ται, -μεθα, -σθε, -νται.',
      ),
    },
    {
      n: '4',
      text: T(
        'Futuros médios com sentido ativo ({ἐλεύσομαι}, {λήμψομαι}) traduzem-se como ativos. O léxico manda.',
      ),
    },
    {
      n: '5',
      text: T(
        '{ἔσται} + dativo = «haverá» ({ἔσται σοι}). Futuro também ordena com solenidade ({ἀγαπήσεις}).',
      ),
    },
  ],
  notes: [
    {
      label: T('Distinção fina:'),
      text: T(
        '{λύσει} (futuro, «libertará») × {λῦσαι} (infinitivo aoristo, «ter libertado») × {λύσῃ} (subjuntivo/futuro médio). O ditongo e o contexto decidem — leia a frase inteira antes de classificar.',
      ),
    },
    {
      label: T('Voz média plena:'),
      text: T(
        'Este capítulo abre a voz média pelo futuro; o presente e o imperfeito médios usam as mesmas desinências ({λύομαι, ἐλυόμην}). O sistema completo médio-passivo fecha nos caps. 19–20.',
      ),
    },
  ],
  examples: [
    { text: '{σώσει τὸν λαὸν}', gloss: T('salvará o povo (Mt 1.21; futuro de σῴζω)') },
    { text: '{πιστεύσουσιν}', gloss: T('crerão (3ª pl.; Mc 16.17)') },
    { text: '{ἀγαπήσεις}', gloss: T('amarás (futuro-imperativo; Mt 22.37)') },
    { text: '{ἔσονται πρῶτοι ἔσχατοι}', gloss: T('os primeiros serão últimos (Mt 19.30)') },
    { text: '{ἐλεύσομαι πρὸς ὑμᾶς}', gloss: T('virei ter convosco (futuro depoente)') },
    { text: '{λήμψεται μισθόν}', gloss: T('receberá recompensa (Mt 10.41)') },
    { text: '{μενῶ μεθ᾽ ὑμῶν}', gloss: T('permanecerei convosco (futuro contraído)') },
    { text: '{κρινῶ ζῶντας}', gloss: T('julgarei vivos (futuro de κρίνω)') },
    { text: '{γενήσεται}', gloss: T('acontecerá (futuro médio de γίνομαι)') },
    { text: '{δώσω σοι}', gloss: T('dar-te-ei (futuro; Mt 16.19)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Futuro ativo de λύω'),
      head: [T('Pessoa'), T('Forma'), T('Tradução')],
      rows: [
        ['1ª sg.', '{λύσω}', 'libertarei'],
        ['2ª sg.', '{λύσεις}', 'libertarás'],
        ['3ª sg.', '{λύσει}', 'libertará'],
        ['1ª pl.', '{λύσομεν}', 'libertaremos'],
        ['2ª pl.', '{λύσετε}', 'libertareis'],
        ['3ª pl.', '{λύσουσι(ν)}', 'libertarão'],
      ],
    },
    {
      caption: T('Tabela 2 — Futuro médio de λύω'),
      head: [T('Pessoa'), T('Forma'), T('Tradução')],
      rows: [
        ['1ª sg.', '{λύσομαι}', 'libertar-me-ei'],
        ['2ª sg.', '{λύσῃ}', 'libertar-te-ás'],
        ['3ª sg.', '{λύσεται}', 'libertar-se-á'],
        ['1ª pl.', '{λυσόμεθα}', 'libertar-nos-emos'],
        ['2ª pl.', '{λύσεσθε}', 'libertar-vos-eis'],
        ['3ª pl.', '{λύσονται}', 'libertar-se-ão'],
      ],
    },
    {
      caption: T('Tabela 3 — Futuros contraídos (líquidos)'),
      head: [T('Presente'), T('Futuro'), T('Sentido')],
      rows: [
        ['{μένω}', '{μενῶ}', 'permanecerei'],
        ['{ἀγγέλλω}', '{ἀγγελῶ}', 'anunciarei'],
        ['{κρίνω}', '{κρινῶ}', 'julgarei'],
        ['{σπείρω}', '{σπερῶ}', 'semearei'],
      ],
    },
  ],
};
