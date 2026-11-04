import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  title: T('Perfeito médio e futuro passivo'),
  subtitle: T('λέλυμαι, λυθήσομαι: o sistema passivo completo'),
  section: T('O verbo'),
  body: C(`## O perfeito médio-passivo

O perfeito médio usa reduplicação + desinências médias diretamente, sem conectivo: {λέλυμαι, λέλυσαι, λέλυται, λελύμεθα, λέλυσθε, λέλυνται}. O sentido oscila entre médio («tenho-me libertado») e passivo («estou liberto») — e no Novo Testamento o passivo domina: {γέγραπται} «está escrito», {πεπλήρωται} «está cumprido», {ἡτοίμασται} «está preparado» (Mt 22.4).

Atenção à fonética: antes de {μ} e {τ}, oclusivas mudam — {πεπ-} + {μαι} segue regular, mas {γραφ-} + {μαι} dá {γέγραμμαι} (φ+μ=μμ), {ἀποστελ-} + {μαι} dá {ἀπέσταλμαι}. Essas assimilações assustam à primeira vista, mas seguem tabela fixa (cap. 15, nota da reduplicação).

## O futuro passivo

O futuro passivo junta {θησ} ao tema + desinências médias: {λυθήσομαι, λυθήσῃ, λυθήσεται, λυθησόμεθα, λυθήσεσθε, λυθήσονται} «serei libertado…». É o par perfeito do aoristo passivo: {ἐλύθην} (ontem) × {λυθήσομαι} (amanhã).

No texto: {σωθήσῃ} «serás salvo» (Rm 10.9, {ὅτι ἐὰν ὁμολογήσῃς… σωθήσῃ}), {δοθήσεται} «será dado» (Mt 7.7, {αἰτεῖτε καὶ δοθήσεται ὑμῖν}), {κηρυχθήσεται} «será pregado» (Mt 24.14). Profecias e promessas falam futuro passivo: o agente (Deus) fica implícito no chamado passivo divino.

## O passivo divino e os depoentes

Boa parte das passivas do Novo Testamento não tem agente humano porque o agente é Deus — o passivum divinum: {ἐφοβήθησαν} «temeram» (Deus agindo), {ἐδικαιώθησαν} «foram justificados» (Rm 5.1), {ἠγαπήθητε}? melhor exemplo: {ἠγαπήθη} «foi amado» (Rm 1.7, {ἠγαπημένοις} particípio). Traduzir «por Deus» onde o grego cala é exegese legítima — desde que consciente.

Os depoentes fecham o sistema: verbos com forma passiva/média e sentido ativo em todos os tempos — {ἀποκρίνομαι} ({ἀπεκρίθη} «respondeu»), {φοβέομαι} ({ἐφοβήθην} «temi»), {γίνομαι} ({ἐγενόμην} «tornei-me»), {πορεύομαι} ({ἐπορεύθην} «fui»), {δέχομαι} ({ἐδεξάμην} «recebi»), {ἀρνέομαι} ({ἠρνησάμην} «neguei»). Com depoentes, nunca traduza passivo: a forma engana, o léxico decide.`),
  vocab: [
    V('λέλυμαι', 'λύω', 'estou liberto'),
    V('λέλυται', 'λύω', 'está liberto'),
    V('λέλυνται', 'λύω', 'estão libertos'),
    V('λυθήσομαι', 'λύω', 'serei libertado'),
    V('λυθήσεται', 'λύω', 'será libertado'),
    V('σωθήσῃ', 'σῴζω', 'serás salvo'),
    V('δοθήσεται', 'δίδωμι', 'será dado'),
    V('ἀπεκρίθη', 'ἀποκρίνομαι', 'respondeu'),
    V('ἐφοβήθη', 'φοβέομαι', 'temeu'),
    V('ἐγενόμην', 'γίνομαι', 'tornei-me'),
    V('ἐπορεύθη', 'πορεύομαι', 'foi'),
    V('ἐδεξάμην', 'δέχομαι', 'recebi'),
    V('ἠρνησάμην', 'ἀρνέομαι', 'neguei'),
    V('γέγραμμαι', 'γράφω', 'tenho escrito (assim.)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«ἀπεκρίθη» traduz-se «respondeu» (e não «foi respondido») porque…'),
    options: [
      T('ἀποκρίνομαι é depoente: forma passiva, sentido ativo'),
      T('Falta o agente com ὑπό'),
      T('É aoristo 2º, não passivo'),
      T('O contexto é futuro'),
    ],
    answer: 0,
    hint: T('Depoentes nunca se traduzem em passivo — regra §4.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o futuro passivo 3ª sg.: λυθήσε___ («será libertado»).'),
      answer: 'ται',
      hint: T('Desinência média 3ª sg.: -ται.'),
    },
    {
      kind: 'choose',
      prompt: T('«ἐδικαιώθησαν» (Rm 5.1) ilustra o…'),
      options: [
        T('Passivo divino (agente: Deus, implícito)'),
        T('Aoristo 2º ativo'),
        T('Perfeito médio'),
        T('Futuro contraído'),
      ],
      answer: 0,
      hint: T('Quem justifica? Deus — passivo divino, regra §3.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada forma à sua análise.'),
      pairs: [
        { a: 'λυθήσομαι', b: 'fut. pass. 1ª sg.' },
        { a: 'λέλυνται', b: 'perf. méd. 3ª pl.' },
        { a: 'ἐπορεύθη', b: 'depoente (foi)' },
        { a: 'σωθήσῃ', b: 'fut. pass. 2ª sg.' },
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
        'Perfeito médio: reduplicação + desinências médias, sem conectivo. No NT, sentido quase sempre passivo.',
      ),
    },
    {
      n: '2',
      text: T(
        'Futuro passivo = tema + θησ + médias ({λυθήσομαι}). Par do aoristo passivo no amanhã.',
      ),
    },
    {
      n: '3',
      text: T(
        'Passivo sem agente humano = agente divino implícito ({ἐδικαιώθησαν}). Traduza «por Deus» com consciência.',
      ),
    },
    {
      n: '4',
      text: T(
        'Depoente: forma passiva/média, sentido ativo sempre. Nunca traduza passivo ({ἀπεκρίθη} = «respondeu»).',
      ),
    },
    {
      n: '5',
      text: T(
        'Assimilação diante de μ/τ: labial + μ = μμ ({γέγραμμαι}); dental + τ cai ({ἐπείσθην} de πείθω).',
      ),
    },
  ],
  notes: [
    {
      label: T('Sistema completo:'),
      text: T(
        'Com este capítulo, o indicativo regular está completo: presente, imperfeito, futuro, aoristo (1º, 2º, passivo), perfeito e mais-que-perfeito, nas três vozes. O que falta (caps. 21–27) é sintaxe — usar o que você já sabe.',
      ),
    },
    {
      label: T('θ em cadeia:'),
      text: T(
        '{λυ-θ-ή-σο-μαι}: tema + θ (passivo) + η (aoristo) + σ (futuro) + desinência média. Cada consoante conta uma história — leia o verbo como arqueologia.',
      ),
    },
  ],
  examples: [
    { text: '{σωθήσῃ}', gloss: T('serás salvo (futuro passivo; Rm 10.9)') },
    { text: '{δοθήσεται ὑμῖν}', gloss: T('ser-vos-á dado (Mt 7.7)') },
    { text: '{κηρυχθήσεται}', gloss: T('será pregado (Mt 24.14)') },
    { text: '{ἀπεκρίθη Ἰησοῦς}', gloss: T('respondeu Jesus (depoente; Jo 18.20)') },
    { text: '{ἐφοβήθησαν φόβον}', gloss: T('temeram com temor (Mc 4.41)') },
    { text: '{ἐγενόμην}', gloss: T('tornei-me (depoente; 1Co 9.20)') },
    { text: '{ἐπορεύθη}', gloss: T('foi, partiu (Lc 1.39)') },
    { text: '{ἠρνήσατο}', gloss: T('negou (depoente; Mt 26.70)') },
    { text: '{γέγραμμαι}', gloss: T('tenho escrito (assimilação φ+μ=μμ)') },
    { text: '{ἠγαπημένοι}', gloss: T('amados (particípio perfeito; Rm 1.7)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Perfeito médio-passivo de λύω'),
      head: [T('Pessoa'), T('Forma'), T('Tradução')],
      rows: [
        ['1ª sg.', '{λέλυμαι}', 'estou liberto'],
        ['2ª sg.', '{λέλυσαι}', 'estás liberto'],
        ['3ª sg.', '{λέλυται}', 'está liberto'],
        ['1ª pl.', '{λελύμεθα}', 'estamos libertos'],
        ['2ª pl.', '{λέλυσθε}', 'estais libertos'],
        ['3ª pl.', '{λέλυνται}', 'estão libertos'],
      ],
    },
    {
      caption: T('Tabela 2 — Futuro passivo de λύω'),
      head: [T('Pessoa'), T('Forma'), T('Tradução')],
      rows: [
        ['1ª sg.', '{λυθήσομαι}', 'serei libertado'],
        ['2ª sg.', '{λυθήσῃ}', 'serás libertado'],
        ['3ª sg.', '{λυθήσεται}', 'será libertado'],
        ['1ª pl.', '{λυθησόμεθα}', 'seremos libertados'],
        ['2ª pl.', '{λυθήσεσθε}', 'sereis libertados'],
        ['3ª pl.', '{λυθήσονται}', 'serão libertados'],
      ],
    },
    {
      caption: T('Tabela 3 — Depoentes essenciais'),
      head: [T('Verbo'), T('Aoristo'), T('Sentido ativo')],
      rows: [
        ['{ἀποκρίνομαι}', '{ἀπεκρίθη}', 'respondeu'],
        ['{φοβέομαι}', '{ἐφοβήθη}', 'temeu'],
        ['{γίνομαι}', '{ἐγενόμην}', 'tornou-se'],
        ['{πορεύομαι}', '{ἐπορεύθη}', 'foi'],
        ['{δέχομαι}', '{ἐδέξατο}', 'recebeu'],
        ['{ἀρνέομαι}', '{ἠρνήσατο}', 'negou'],
      ],
    },
  ],
};
