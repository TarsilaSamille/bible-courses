import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('Subjuntivo y Optativo'),
  subtitle: T('ἵνα λύῃ: el estado de ánimo del propósito y deseo'),
  section: T('El verbo'),
  body: C(`## El indicativo no es suficiente

El indicativo expresa hechos ({λύει} "pierde").Pero la vida —y el Nuevo Testamento— habla también de proyectos, órdenes, miedos y deseos: “que desatar”, “no tocar”, “si Dios quiere”.Porque el griego tiene dos modos oblicuos: el subjuntivo (posibilidad, propósito, exhortación) y el optativo (deseo, potencial remoto).Ambos usan la raíz del verbo sin aumento: el aumento, recordemos el cap.7, es el privilegio del indicativo.

## El subjuntivo: vocales largas

El presente de subjuntivo alarga la vocal temática: {ο} se convierte en {ω} y {ε} se convierte en {η}.Paradigma activo: {λύω, λύῃς, λύῃ, λύωμεν, λύητε, λύωσι(ν)}.Tenga en cuenta el 1er sg.({λύω}) es idéntico al del indicativo; el contexto lo resuelve (conjunciones {ἵνα}, {ὅπως}, {ἐάν}, {μή}).

El subjuntivo aoristo usa la raíz aoristo con las mismas vocales largas: {λύσω, λύσῃς, λύσῃ, λύσωμεν, λύσητε, λύσωσι(ν)}.La diferencia presente/aoristo en el subjuntivo es sólo aspecto (proceso vs acto), nunca tiempo: {ἵνα λύῃ} "para que pueda seguir perdiendo" vs {ἵνα λύσῃ} "para que pueda perder (decisivamente)".

## Donde aparece el subjuntivo

Cuatro construcciones cubren casi todo: propósito con {ἵνα} o {ὅπως} ({ἵνα σωθῇ} "para que sea salvo");condición futura con {ἐάν} + subjuntivo ({ἐὰν εἴπῃς} "si dices");prohibición con {μή} + aoristo subjuntivo ({μὴ φοβηθῇς} "no temas");exhortación en 1er plural ({ἄγωμεν} "¡vámonos!", {διέλθωμεν} "crucemos", Marcos 4:35).Agregue el deliberativo ("¿qué haremos?" - {τί ποιήσωμεν}, Hechos 2:37).

## El optativo: el modo de desear

El optativo es raro en el Nuevo Testamento (alrededor de 70 apariciones) pero inconfundible: lleva el diptongo {οι} en sus terminaciones ({λύοιμι, λύοις, λύοι, λύοιμεν, λύοιτε, λύοιεν}).Expresa deseos ({γένοιτο} "¡que sea!", fórmula de horror de Pablo: {μὴ γένοιτο} "¡de ningún modo!", Rom 6:2) y posibilidad remota en condiciones ("si alguno viniere...").

En lectura, basta el reconocimiento: {εἴη} (optativo de {εἰμί}), {γένοιτο}, {δῴη} ("que conceda", 2 Tim 1:16), {ποιήσειεν}.Siempre marcan momentos solemnes o emotivos: el autor cambió deliberadamente al estado de ánimo de desear.`),
  vocab: [
    V('ἵνα', 'ἵνα', 'para que'),
    V('ὅπως', 'ὅπως', 'eso, como'),
    V('ἐάν', 'ἐάν', 'si (condición)'),
    V('μή', 'μή', 'no (prohibición)'),
    V('λύῃς', 'λύω', 'que puedas perder'),
    V('λύῃ', 'λύω', 'para que pueda perder'),
    V('λύσω', 'λύω', 'para que pueda soltar (aor.)'),
    V('λύσῃ', 'λύω', 'para que pueda soltar (aor.)'),
    V('λύοιμι', 'λύω', 'podría perder'),
    V('γένοιτο', 'γίνομαι', 'Â¡puede ser!'),
    V('εἴη', 'εἰμί', 'que sea (opt.)'),
    V('σωθῇ', 'σῴζω', 'que él sea salvo'),
    V('φοβηθῇς', 'φοβέομαι', 'puedes temer (subj.)'),
    V('ἄγωμεν', 'ἄγω', '¡vámonos!(exhortar.)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿En qué estado de ánimo y tiempo está "ἵνα λύσῃ"?'),
    options: [
      T('Presente de indicativo'),
      T('Subjuntivo aoristo'),
      T('Presente optativo'),
      T('Imperativo aoristo'),
    ],
    answer: 1,
    hint: T('{ἵνα} + vocal larga + aoristo sigma.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Completa el segundo subjuntivo presente singular: λύ___ ("para que puedas perder").',
      ),
      answer: 'ῃς',
      hint: T('Vocal temática alargada ε→η + ς.'),
    },
    {
      kind: 'choose',
      prompt: T('"μὴ γένοιτο" (Rom 6:2) expresa…'),
      options: [
        T('comando directo'),
        T('Deseo de horror ("que nunca sea")'),
        T('Condición futura'),
        T('Narración pasada'),
      ],
      answer: 1,
      hint: T('Optative + μή: the mood of wishing — rule §5.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada forma con su estado de ánimo.'),
      pairs: [
        { a: 'λύῃ', b: 'subjuntivo' },
        { a: 'λύοι', b: 'optativo' },
        { a: 'λύει', b: 'indicativo' },
        { a: 'λῦε', b: 'imperativo' },
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
        'Subjuntivo = vocales largas (ω/η) sin aumento.Frente a η/ω más una conjunción de propósito ({ἵνα}, {ἐάν}, {μή}), lee subjuntivo.',
      ),
    },
    {
      n: '2',
      text: T(
        'En el subjuntivo, presente versus aoristo = aspecto (proceso versus acto), nunca marcar el tiempo.',
      ),
    },
    {
      n: '3',
      text: T(
        'Prohibición: {μή} + aoristo subjuntivo ({μὴ φοβηθῇς}).La negación estándar de órdenes en el NT.',
      ),
    },
    { n: '4', text: T('Exhortación: 1º pl.subjuntivo sin partícula ({ἄγωμεν} "¡vamos!").') },
    {
      n: '5',
      text: T(
        'Optativo = οι diptongo en terminaciones.En el NT, casi sólo deseos ({γένοιτο}, {εἴη}) y potenciales remotos.',
      ),
    },
  ],
  notes: [
    {
      label: T('Trampa:'),
      text: T(
        '{λύω} (1er sg.) puede ser indicativo ("yo suelto") o subjuntivo ("para que pueda perder").Sin {ἵνα}, {ἐάν} o {μή} cerca, se asume indicativo;con ellos, subjuntivo.',
      ),
    },
    {
      label: T('Economía:'),
      text: T(
        'No memorizar el optativo completo: memorizar {γένοιτο}, {εἴη} y el diptongo οι.Eso resuelve el 90% de las apariciones del Nuevo Testamento.',
      ),
    },
  ],
  examples: [
    { text: '{ἵνα σωθῇ}', gloss: T('para que sea salvo (propósito; Mateo 18:11)') },
    { text: '{ἐὰν εἴπῃς}', gloss: T('si dices (condición futura)') },
    { text: '{μὴ φοβηθῇς}', gloss: T('no temas (prohibición; Mateo 1:20)') },
    { text: '{διέλθωμεν}', gloss: T('¡crucemos!(exhortación; Marcos 4:35)') },
    { text: '{τί ποιήσωμεν}', gloss: T('¿Qué haremos?(deliberativo; Hechos 2:37)') },
    { text: '{μὴ γένοιτο}', gloss: T('Â¡de ninguna manera!(optativo de horror; Romanos 6:2)') },
    { text: '{εἴη τὸ ὄνομά σου}', gloss: T('que tu nombre sea… (deseo; cf. Mt 6,9)') },
    { text: '{δῴη ἔλεος}', gloss: T('que él conceda misericordia (2 Tim 1:16)') },
    { text: '{ἵνα λύσῃ}', gloss: T('para que pueda perder decisivamente (aoristo: actuar)') },
    { text: '{ἵνα μένῃ}', gloss: T('para que permanezca (presente: proceso; Juan 15:16)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Presente de subjuntivo activo de λύω'),
      head: [T('Persona'), T('Forma'), T('Pista')],
      rows: [
        ['1ª sg.', '{λύω}', '= indicativo; contexto decide'],
        ['2ª sg.', '{λύῃς}', 'η longo'],
        ['3ª sg.', '{λύῃ}', 'η longo'],
        ['1ª pl.', '{λύωμεν}', 'ω longo'],
        ['2ª pl.', '{λύητε}', 'η longo'],
        ['3ª pl.', '{λύωσι(ν)}', 'ω longo'],
      ],
    },
    {
      caption: T('Tabla 2 — Subjuntivo aoristo activo de λύω'),
      head: [T('Persona'), T('Forma'), T('Sentido')],
      rows: [
        ['1ª sg.', '{λύσω}', 'que eu liberte'],
        ['2ª sg.', '{λύσῃς}', 'que tu libertes'],
        ['3ª sg.', '{λύσῃ}', 'que ele liberte'],
        ['1ª pl.', '{λύσωμεν}', 'libertemos!'],
        ['2ª pl.', '{λύσητε}', 'que vós liberteis'],
        ['3ª pl.', '{λύσωσι(ν)}', 'que eles libertem'],
      ],
    },
    {
      caption: T('Tabla 3 — Presente optativo activo de λύω'),
      head: [T('Persona'), T('Forma'), T('Sentido')],
      rows: [
        ['1ª sg.', '{λύοιμι}', 'pudesse eu libertar'],
        ['2ª sg.', '{λύοις}', 'pudesses libertar'],
        ['3ª sg.', '{λύοι}', 'pudesse ele libertar'],
        ['1ª pl.', '{λύοιμεν}', 'pudéssemos libertar'],
        ['2ª pl.', '{λύοιτε}', 'pudésseis libertar'],
        ['3ª pl.', '{λύοιεν}', 'pudessem libertar'],
      ],
    },
  ],
};
