import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  title: T('Futuro activo y medio.'),
  subtitle: T('λύσω, λύσομαι: la σ del mañana y la voz media'),
  section: T('El verbo'),
  body: C(`## El futuro sigmático

El futuro activo une {σ} a la raíz + terminaciones de presente: {λύσομεν, λύσετε, λύσουσι(ν)}.Es el tiempo más transparente del verbo griego: viendo σ entre la raíz y la terminación, con una vocal corta, piensa en futuro (el aoristo tiene aumento; el futuro nunca lo hace).

Los contratos se alargan antes de σ (cap. 6): {ἀγαπήσω}, {ποιήσω}, {δηλώσω}.Los verbos consonantes fusionan σ + consonante y alargan la vocal: el futuro se contrae, con circunflejo — {μένω} → {μενῶ}, {ἀγγέλλω} → {ἀγγελῶ}, {κρίνω} → {κρινῶ}.De cara a un futuro circunflejo, reconstruir: {μενῶ} = {μενε-σ-ω}.

## La voz media: actuar por uno mismo

La voz media marca la acción dirigida al sujeto: directa ({λούομαι} "Me lavo"), indirecta ({πορίζομαι} "Adquiero para mí") o causativa.Terminaciones medias presentes/futuras: {-μαι, -σαι, -ται, -μεθα, -σθε, -νται}.Futuro medio de {λύω}: {λύσομαι, λύσῃ, λύσεται, λυσόμεθα, λύσεσθε, λύσονται}.

Muchos futuros del Nuevo Testamento son medios con sentido activo (futuros declarantes): {ἔρχομαι} → {ἐλεύσομαι} "Iré", {γίνομαι} → {γενήσομαι}, {λαμβάνω} → {λήμψομαι},{ἀκούω} → {ἀκούσομαι}.Nunca traduzcas reflexivamente donde el léxico exige activo: {ἐλεύσομαι} es "vendré", nunca "vendré yo mismo".

## Usos del futuro

El futuro predice ({σώσει τὸν λαόν} "él salvará al pueblo", Mateo 1:21), promete ({δώσω} "daré"), amenaza y ordena solemnemente (futuro como imperativo: {ἀγαπήσεις} "amarás", Mateo 22:37 - los mandamientos).También está el futuro gnómico (verdades generales) y el deliberativo ("¿qué haré?").

{ἔσομαι}, futuro de {εἰμί} (cap. 11), merece su propia atención: {ἔσται} + dativo significa "habrá" ({ἔσται σοι χαρά} "habrá alegría para vosotros", Lucas 1:14);{ἔσονται οἱ ἔσχατοι πρῶτοι} "los últimos serán los primeros" (Mateo 19:30) invierte el orden del mundo en un futuro solemne.`),
  vocab: [
    V('λύσω', 'λύω', 'I shall loose'),
    V('λύσει', 'λύω', 'he shall loose'),
    V('λύσομαι', 'λύω', 'I shall loose (mid.)'),
    V('λύσεται', 'λύω', 'he shall loose (mid.)'),
    V('σώσει', 'σῴζω', 'he shall save'),
    V('δώσω', 'δίδωμι', 'I shall give'),
    V('ἐλεύσομαι', 'ἔρχομαι', 'I shall come'),
    V('λήμψομαι', 'λαμβάνω', 'I shall take'),
    V('γενήσεται', 'γίνομαι', 'it shall happen'),
    V('μενῶ', 'μένω', 'I shall remain'),
    V('ἀγγελῶ', 'ἀγγέλλω', 'I shall announce'),
    V('κρινῶ', 'κρίνω', 'I shall judge'),
    V('ἔσται', 'εἰμί', 'he shall be, there shall be'),
    V('ἔσονται', 'εἰμί', 'they shall be'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"λύσουσι" es futuro (no aoristo) porque…'),
    options: [
      T('It has σ and no augment'),
      T('It ends in -ουσι'),
      T('It follows ἵνα'),
      T('It is a contracted form'),
    ],
    answer: 0,
    hint: T('σ sin aumento = futuro - regla §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el tercer futuro medio singular: λύσε___ ("desatará").'),
      answer: 'ται',
      hint: T('Terminaciones medias: -μαι, -σαι, -ται…'),
    },
    {
      kind: 'choose',
      prompt: T('"ἐλεύσομαι" se traduce "vendré" (no "vendré yo mismo") porque...'),
      options: [
        T('It is deponent future: middle form, active sense'),
        T('The subject is plural'),
        T('The augment is missing'),
        T('It is aorist, not future'),
      ],
      answer: 0,
      hint: T('Futuro medio de verbos deponentes = sentido activo – regla §4.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada forma con su tiempo/voz.'),
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
        'Futuro = raíz + σ + terminaciones presentes.Ningún aumento, nunca.σ con una vocal corta delata el tiempo.',
      ),
    },
    {
      n: '2',
      text: T(
        'Los líquidos fusionan la σ: futuro contratado con circunflejo ({μενῶ}, {ἀγγελῶ}).Los contratos se alargan pero mantienen σ ({ἀγαπήσω}).',
      ),
    },
    {
      n: '3',
      text: T(
        'Voz media = acción para el sujeto.Terminaciones: -μαι, -σαι, -ται, -μεθα, -σθε, -νται.',
      ),
    },
    {
      n: '4',
      text: T(
        'Los futuros medios con sentido activo ({ἐλεύσομαι}, {λήμψομαι}) se traducen como activo.El léxico manda.',
      ),
    },
    {
      n: '5',
      text: T(
        '{ἔσται} + dativo = "habrá" ({ἔσται σοι}).El futuro también manda solemnemente ({ἀγαπήσεις}).',
      ),
    },
  ],
  notes: [
    {
      label: T('Fine distinction:'),
      text: T(
        '{λύσει} (futuro, "desatará") vs {λῦσαι} (infinitivo aoristo, "haber desatado") vs {λύσῃ} (subjuntivo/futuro medio).El diptongo y el contexto deciden: lea la oración completa antes de analizarla.',
      ),
    },
    {
      label: T('Full middle voice:'),
      text: T(
        'Este capítulo abre la voz media hacia el futuro;El presente medio y el imperfecto usan las mismas terminaciones ({λύομαι, ἐλυόμην}).El sistema medio-pasivo completo se cierra en los caps.19–20.',
      ),
    },
  ],
  examples: [
    { text: '{σώσει τὸν λαὸν}', gloss: T('he shall save the people (Matt 1:21; future of σῴζω)') },
    { text: '{πιστεύσουσιν}', gloss: T('they shall believe (3rd pl.; Mark 16:17)') },
    { text: '{ἀγαπήσεις}', gloss: T('you shall love (future-imperative; Matt 22:37)') },
    { text: '{ἔσονται πρῶτοι ἔσχατοι}', gloss: T('the first shall be last (Matt 19:30)') },
    { text: '{ἐλεύσομαι πρὸς ὑμᾶς}', gloss: T('I shall come to you (deponent future)') },
    { text: '{λήμψεται μισθόν}', gloss: T('he shall receive a reward (Matt 10:41)') },
    { text: '{μενῶ μεθ᾽ ὑμῶν}', gloss: T('I shall remain with you (contracted future)') },
    { text: '{κρινῶ ζῶντας}', gloss: T('I shall judge the living (future of κρίνω)') },
    { text: '{γενήσεται}', gloss: T('it shall happen (middle future of γίνομαι)') },
    { text: '{δώσω σοι}', gloss: T('I shall give you (future; Matt 16:19)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Futuro activo de λύω'),
      head: [T('Persona'), T('Forma'), T('Traducción')],
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
      caption: T('Tabla 2 — Futuro medio de λύω'),
      head: [T('Persona'), T('Forma'), T('Traducción')],
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
      caption: T('Tabla 3 — Futuros contratados (líquidos)'),
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
