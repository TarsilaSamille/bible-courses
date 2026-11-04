import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  title: T('Genitivo absoluto e infinitivo'),
  subtitle: T('λαλοῦντος αὐτοῦ — y el infinitivo articular'),
  section: T('Sintaxis'),
  body: C(`## Cuando el participio tiene dueño propio

El participio normal concuerda con una palabra de la cláusula (caps. 21-22).Pero cuando el propietario de la acción del participio NO participa en la cláusula principal (sujeto diferente), el griego lo aísla en genitivo: sustantivo + participio, ambos genitivos, separados de la sintaxis.El genitivo absoluto, primo del absoluto ablativo del latín.

{λαλοῦντος αὐτοῦ} "mientras hablaba" (Mateo 17:5, en la Transfiguración: {ἔτι αὐτοῦ λαλοῦντος} "mientras aún hablaba");{ὀψίας γενομένης} "cuando llegó la tarde" (Marcos 1:32 - nota: no hay sustantivo explícito, solo el participio genitivo femenino: "[hora] tarde habiéndose hecho");{ἀνατείλαντος τοῦ ἡλίου} "cuando había salido el sol" (Marcos 16:12, {λίαν πρωῒ} "muy temprano en la mañana").

## Cómo traducir

El genitivo absoluto comprime una cláusula temporal, causal o concesiva; el contexto decide: temporal ("cuando", más común), causal ("porque"), concesiva ("aunque").{ταῦτα αὐτοῦ λαλοῦντος} "mientras decía estas cosas" (Mateo 26:47, {ἔτι αὐτοῦ λαλοῦντος ἰδοὺ} "mientras aún hablaba, he aquí": llega JudasDURANTE el discurso - temporal simultáneo con participio presente).

Regla de reconocimiento: genitivo + participio genitivo al inicio de la frase, desconectado del verbo principal.Lone femenino {γενομένης} = "habiendo llegado [la hora]";masculino {ὄντος} = "el ser".

## El infinitivo articular

El infinitivo articulado funciona como sustantivo declinable: {τὸ πιστεύειν} "creyendo" (nom./acc.), {τοῦ πιστεύειν} "de creer" (gen.), dativo vía preposición ({ἐν τῷ} + infinitivo ="en/cuando": {ἐν τῷ σπείρειν} "en la siembra", Mateo 13:4).

Genitivo {τοῦ} + infinitivo expresa propósito, compitiendo con {ἵνα}: {ἦλθεν τοῦ βαπτισθῆναι} "vino para ser bautizado" (Mateo 3:13).Y {πρὸς τό} + infinitivo también da propósito: {πρὸς τὸ μνημονευθῆναι} "para ser recordado" (Hechos 10:4).Tres construcciones de propósito ({ἵνα} + subj., {τοῦ} + inf., {πρὸς τό} + inf.): el autor elige según el ritmo de la oración.`),
  vocab: [
    V('λαλοῦντος', 'λαλέω', 'of speaking'),
    V('λαλοῦντος αὐτοῦ', 'λαλέω', 'while he was speaking'),
    V('γενομένης', 'γίνομαι', 'having come (fem.)'),
    V('ὀψίας', 'ὀψία', 'late, of evening'),
    V('τοῦ λῦσαι', 'λύω', 'in order to loose'),
    V('τοῦ πιστεῦσαι', 'πιστεύω', 'in order to believe'),
    V('βαπτισθῆναι', 'βαπτίζω', 'to be baptized'),
    V('σπείρειν', 'σπείρω', 'to sow'),
    V('ἀνατείλαντος', 'ἀνατέλλω', 'of having risen'),
    V('ἥλιος', 'ἥλιος', 'sun'),
    V('πρωῒ', 'πρωῒ', 'early, in the morning'),
    V('ἔτι', 'ἔτι', 'still, yet'),
    V('ὅτε', 'ὅτε', 'when'),
    V('μετά', 'μετά', 'after, with'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"ὀψίας γενομένης" (Marcos 1:32) es un genitivo absoluto porque…'),
    options: [
      T('Genitive participle with own subject, detached from the clause'),
      T("It is the verb's direct object"),
      T('It agrees with the clause subject'),
      T('It is an articular infinitive'),
    ],
    answer: 0,
    hint: T('Propio dueño + genitivo + separado — regla §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el propósito: ἦλθεν τοῦ ___ ("vino para ser bautizado", de βαπτίζω).'),
      answer: 'βαπτισθῆναι',
      hint: T('τοῦ + infinitivo pasivo aoristo.'),
    },
    {
      kind: 'choose',
      prompt: T('"ἐν τῷ σπείρειν" (Mateo 13:4) significa…'),
      options: [
        T('In sowing / as he sowed'),
        T('In order never to sow'),
        T('After having sown'),
        T('Without sowing'),
      ],
      answer: 0,
      hint: T('ἐν τῷ + infinitivo = "en/cuando" — regla §3.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada construcción con su valor.'),
      pairs: [
        { a: 'λαλοῦντος αὐτοῦ', b: 'gen. absoluto' },
        { a: 'τοῦ λῦσαι', b: 'finalidade' },
        { a: 'ἐν τῷ σπείρειν', b: 'temporal' },
        { a: 'λέγων', b: 'circunstancial simples' },
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
        'Genitivo absoluto = su propio sujeto + participio genitivo, separado de la cláusula.Traducir como cláusula temporal/causal.',
      ),
    },
    {
      n: '2',
      text: T(
        'Participio presente en absoluto = simultáneo;aoristo = previo.El tiempo relativo también se mantiene aquí.',
      ),
    },
    {
      n: '3',
      text: T(
        '{τοῦ} + infinitivo = propósito.{ἐν τῷ} + infinitivo = "en/cuando".{πρὸς τό} + infinitivo = propósito.',
      ),
    },
    {
      n: '4',
      text: T(
        'Participio genitivo solitario ({γενομένης}, {ὄντος}) = absoluto con sujeto oculto ("la hora", "él").',
      ),
    },
  ],
  notes: [
    {
      label: T('Accusative with infinitive:'),
      text: T(
        'Con preposiciones como {διά} y {μετά}, el infinitivo toma su propio sujeto acusativo: {διὰ τὸ αὐτὸν ἀκούειν} "a causa de su audición".La excepción que demuestra la lógica del propietario de la acción.',
      ),
    },
    {
      label: T('Whole verse:'),
      text: T(
        'Marcos 1:32 combina todo: {ὀψίας δὲ γενομένης, ὅτε ἔδυ ὁ ἥλιος} "cuando llegó la tarde, cuando se puso el sol" - absoluto + {ὅτε} temporal en una oración.Léelo en voz alta.',
      ),
    },
  ],
  examples: [
    { text: '{ἔτι αὐτοῦ λαλοῦντος}', gloss: T('while he was still speaking (Matt 26:47)') },
    { text: '{ὀψίας γενομένης}', gloss: T('when evening had come (Mark 1:32)') },
    { text: '{ἀνατείλαντος τοῦ ἡλίου}', gloss: T('when the sun had risen (Mark 16:2)') },
    { text: '{ἦλθεν τοῦ βαπτισθῆναι}', gloss: T('he came to be baptized (Matt 3:13)') },
    { text: '{ἐν τῷ σπείρειν}', gloss: T('in sowing (Matt 13:4)') },
    { text: '{πρὸς τὸ μνημονευθῆναι}', gloss: T('to be remembered (Acts 10:4)') },
    { text: '{ὄντος Σαούλ}', gloss: T('Saul being… (absolute with proper name)') },
    { text: '{τοῦ περιπατεῖν}', gloss: T('for walking / of walking (genitive)') },
    {
      text: '{διὰ τὸ αὐτὸν ἀκούειν}',
      gloss: T('because of his hearing (accusative with own subject!)'),
    },
    { text: '{μετὰ τὸ ἐγερθῆναι}', gloss: T('after rising (Matt 26:32)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Modelo de genitivos absolutos'),
      head: [T('Construcción'), T('Análisis'), T('Traducción')],
      rows: [
        ['{λαλοῦντος αὐτοῦ}', 'part. pres. + pron.', 'enquanto ele falava'],
        ['{ὀψίας γενομένης}', 'part. aor. solo', 'tendo chegado a tarde'],
        ['{ἀνατείλαντος ἡλίου}', 'part. aor. + subst.', 'tendo nascido o sol'],
        ['{ἔτι ὄντος}', 'part. pres. de εἰμί', 'estando ele ainda'],
      ],
    },
    {
      caption: T('Tabla 2 — Infinitivo articular'),
      head: [T('Forma'), T('Caso'), T('Sentido')],
      rows: [
        ['{τὸ πιστεύειν}', 'nom./ac.', 'o crer'],
        ['{τοῦ πιστεύειν}', 'genitivo', 'para crer (fim)'],
        ['{ἐν τῷ σπείρειν}', 'dat. c/ preposição', 'ao semear'],
        ['{πρὸς τὸ μνημονευθῆναι}', 'ac. c/ preposição', 'para ser lembrado'],
      ],
    },
  ],
};
