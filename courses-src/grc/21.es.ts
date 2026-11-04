import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  title: T('Perfecto medio y futuro pasivo.'),
  subtitle: T('λέλυμαι, λυθήσομαι: el sistema pasivo completo'),
  section: T('El verbo'),
  body: C(`## El perfecto medio-pasivo

El perfecto medio usa reduplicación + terminaciones medias directamente, sin conectivo: {λέλυμαι, λέλυσαι, λέλυται, λελύμεθα, λέλυσθε, λέλυνται}.El sentido oscila entre el medio ("Me he desatado") y el pasivo ("Estoy desatado"), y en el Nuevo Testamento domina el pasivo: {γέγραπται} "está escrito", {πεπλήρωται} "está cumplido", {ἡτοίμασται} "está preparado" (Mateo 22:8).

Observe la fonética: antes de {μ} y {τ}, las paradas se asimilan - {γραφ-} + {μαι} produce {γέγραμμαι} (φ+μ=μμ).Estas asimilaciones sorprenden a primera vista pero siguen un cuadro fijo.

## El futuro pasivo

El futuro pasivo une {θησ} a la raíz + desinencias medias: {λυθήσομαι, λυθήσῃ, λυθήσεται, λυθησόμεθα, λυθήσεσθε,λυθήσονται} "Seré liberado...".Combina perfectamente con el aoristo pasivo: {ἐλύθην} (ayer) vs {λυθήσομαι} (mañana).

En el texto: {σωθήσῃ} "seréis salvos" (Rom 10:9), {δοθήσεται} "será dado" (Mateo 7:7, {αἰτεῖτε καὶ δοθήσεταιὑμῖν}), {κηρυχθήσεται} "será predicado" (Mateo 24:14).Las profecías y promesas hablan de futuro pasivo: el agente (Dios) queda implícito en el llamado pasivo divino.

## Los divinos pasivos y declarantes

Muchos pasivos del Nuevo Testamento carecen de un agente humano porque el agente es Dios: el passivum divinum: {ἐφοβήθησαν} "temieron" (Dios actuando), {ἐδικαιώθησαν} "fueron justificados" (Romanos 5:1), {ἠγαπημένοι}"amado" (participio, Romanos 1:7).Suplir "por Dios" donde el griego permanece en silencio es una exégesis legítima, siempre que sea consciente.

Los declarantes cierran el sistema: verbos con forma pasiva/media y sentido activo en cada tiempo: {ἀποκρίνομαι} ({ἀπεκρίθη} "respondió"), {φοβέομαι} ({ἐφοβήθην} "temió"),{γίνομαι} ({ἐγενόμην} "me convertí"), {πορεύομαι} ({ἐπορεύθην} "fue"), {δέχομαι} ({ἐδεξάμην} "recibió"),{ἀρνέομαι} ({ἠρνησάμην} "él negó").Con los declarantes, nunca traduzcas en voz pasiva: la forma engaña, el léxico decide.`),
  vocab: [
    V('λέλυμαι', 'λύω', 'I stand loosed'),
    V('λέλυται', 'λύω', 'it stands loosed'),
    V('λέλυνται', 'λύω', 'they stand loosed'),
    V('λυθήσομαι', 'λύω', 'I shall be loosed'),
    V('λυθήσεται', 'λύω', 'he shall be loosed'),
    V('σωθήσῃ', 'σῴζω', 'you shall be saved'),
    V('δοθήσεται', 'δίδωμι', 'it shall be given'),
    V('ἀπεκρίθη', 'ἀποκρίνομαι', 'he answered'),
    V('ἐφοβήθη', 'φοβέομαι', 'he feared'),
    V('ἐγενόμην', 'γίνομαι', 'I became'),
    V('ἐπορεύθη', 'πορεύομαι', 'he went'),
    V('ἐδεξάμην', 'δέχομαι', 'I received'),
    V('ἠρνησάμην', 'ἀρνέομαι', 'I denied'),
    V('γέγραμμαι', 'γράφω', 'I have written (assim.)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"ἀπεκρίθη" se traduce "él respondió" (no "él fue respondido") porque…'),
    options: [
      T('ἀποκρίνομαι is deponent: passive form, active sense'),
      T('The ὑπό agent is missing'),
      T('It is 2nd aorist, not passive'),
      T('The context is future'),
    ],
    answer: 0,
    hint: T('Deponents never translate passive — rule §4.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el 3er sg.futuro pasivo: λυθήσε___ ("será desatado").'),
      answer: 'ται',
      hint: T('3er grado.terminación media: -ται.'),
    },
    {
      kind: 'choose',
      prompt: T('"ἐδικαιώθησαν" (Rom 5:1) illustrates the…'),
      options: [
        T('Divine passive (agent: God, implicit)'),
        T('Active 2nd aorist'),
        T('Middle perfect'),
        T('Contracted future'),
      ],
      answer: 0,
      hint: T('¿Quién justifica?Dios — divino pasivo, gobierno §3.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada formulario con su análisis.'),
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
        'Perfecto medio: reduplicación + desinencias medias, sin conectivo.En el Nuevo Testamento, casi siempre en sentido pasivo.',
      ),
    },
    {
      n: '2',
      text: T(
        'Futuro pasivo = raíz + θησ + medios ({λυθήσομαι}).El par del mañana del aoristo pasivo.',
      ),
    },
    {
      n: '3',
      text: T(
        'Pasivo sin agente humano = agente divino implícito ({ἐδικαιώθησαν}).Traduce "por Dios" conscientemente.',
      ),
    },
    {
      n: '4',
      text: T(
        'Deponente: forma pasiva/media, sentido siempre activo.Nunca traduzcas pasivo ({ἀπεκρίθη} = "él respondió").',
      ),
    },
    {
      n: '5',
      text: T('Asimilación antes de μ/τ: labial + μ = μμ ({γέγραμμαι});dental + τ gotas.'),
    },
  ],
  notes: [
    {
      label: T('Complete system:'),
      text: T(
        'Con este capítulo, el indicativo regular está completo: presente, imperfecto, futuro, aoristo (1.º, 2.º, pasivo), perfecto y pluscuamperfecto, en las tres voces.Lo que queda (caps. 21-27) es la sintaxis: usar lo que sabes.',
      ),
    },
    {
      label: T('θ chain:'),
      text: T(
        '{λυ-θ-ή-σο-μαι}: raíz + θ (pasivo) + η (aoristo) + σ (futuro) + terminación media.Cada consonante cuenta una historia; lea los verbos como arqueología.',
      ),
    },
  ],
  examples: [
    { text: '{σωθήσῃ}', gloss: T('you shall be saved (future passive; Rom 10:9)') },
    { text: '{δοθήσεται ὑμῖν}', gloss: T('it shall be given to you (Matt 7:7)') },
    { text: '{κηρυχθήσεται}', gloss: T('it shall be preached (Matt 24:14)') },
    { text: '{ἀπεκρίθη Ἰησοῦς}', gloss: T('Jesus answered (deponent; John 18:20)') },
    { text: '{ἐφοβήθησαν φόβον}', gloss: T('they feared greatly (Mark 4:41)') },
    { text: '{ἐγενόμην}', gloss: T('I became (deponent; 1 Cor 9:20)') },
    { text: '{ἐπορεύθη}', gloss: T('he went (Luke 1:39)') },
    { text: '{ἠρνήσατο}', gloss: T('he denied (deponent; Matt 26:70)') },
    { text: '{γέγραμμαι}', gloss: T('I have written (assimilation φ+μ=μμ)') },
    { text: '{ἠγαπημένοι}', gloss: T('beloved (perfect participle; Rom 1:7)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Perfecto medio pasivo de λύω'),
      head: [T('Persona'), T('Forma'), T('Traducción')],
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
      caption: T('Tabla 2 — Pasiva futura de λύω'),
      head: [T('Persona'), T('Forma'), T('Traducción')],
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
      caption: T('Tabla 3 — Deponentes esenciales'),
      head: [T('Verbo'), T('Aoristo'), T('Sentido activo')],
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
