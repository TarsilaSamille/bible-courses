import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Imperfecto y (1er) Aoristo'),
  subtitle: T('ἔλυον vs ἔλυσα: el pasado en dos aspectos'),
  section: T('El verbo'),
  body: C(`## El aumento: la marca del pasado

El imperfecto y el aoristo (como todo indicativo pasado) toman el aumento, un prefijo que apunta hacia atrás en el tiempo.Antes de una consonante, el aumento es silábico: {ἐ-} se agrega al frente ({λύω} → {ἔλυον}, {ἔλυσα}).Antes de una vocal, el aumento es temporal: la vocal inicial se alarga: {ἀ} se convierte en {ἠ} ({ἀκούω} → {ἤκουον}), {ἐ} se convierte en {ἠ} ({ἐλπίζω} → {ἤλπιζον}), {ο} se convierte en {ὠ}.

Sólo el indicativo lleva el aumento.El subjuntivo, el optativo, el imperativo, el infinitivo y el participio nunca lo usan, por lo que ver {ἐ-} al comienzo de un verbo ya te dice: pasado de indicativo.

## Lo imperfecto: el pasado que perduró

El imperfecto usa la raíz presente + aumento + terminaciones secundarias ({-ον, -ες, -ε, -ομεν, -ετε, -ον}).Paradigma: {ἔλυον, ἔλυες, ἔλυε(ν), ἐλύομεν, ἐλύετε, ἔλυον}.Tenga en cuenta que el 1er sg.y 3er pl.comparten la forma ({ἔλυον}): solo el contexto los distingue.

El sentido es el transporte del presente al pasado: acción en curso ({ἐδίδασκεν} "estaba enseñando"), hábito ({ἐβάπτιζεν} "habitualmente bautizaba"), intento, escenografía.Mark pinta paisajes en imperfecto y dispara la acción en aoristo; alternar los dos correctamente es leer a Mark en el tempo correcto.

## El 1er aoristo: el pasado puntual

El primer aoristo (sigmático) usa la raíz verbal + {σα} + aumento + las mismas terminaciones secundarias: {ἔλυσα, ἔλυσας, ἔλυσε(ν), ἐλύσαμεν, ἐλύσατε,ἔλυσαν}.El {σ} de {σα} es la firma del tiempo: al ver sigma entre la raíz y la terminación, piense en el aoristo.

El sentido es perfectivo: acción vista como un todo completado, sin interés en la duración.{ἐβάπτισεν} "bautizó" (el acto) versus {ἐβάπτιζεν} "estaba bautizando" (el hábito).En la narrativa, el aoristo lleva la columna vertebral de los acontecimientos: {ἦλθεν, εἶδεν, ἐνίκησεν}: vino, vio, conquistó.

## Imperfecto vs aoristo en la práctica

El contraste aparece en pares mínimos del propio Nuevo Testamento: {ἔλεγεν} "estaba diciendo" (proceso) vs {εἶπεν} "dijo" (acto);{ἐζήτουν} "buscaban" vs {εὗρον} "encontraron";{ἔτυπτον} "siguieron tocando" vs {ἤνοιξεν} "abrió".El imperfecto prepara, el aoristo ejecuta.

Cuidado con el falso contraste: el aoristo NO necesariamente significa acción rápida o instantánea; significa acción vista como completa.{ἐβασίλευσεν} "reinó" puede abarcar cuarenta años;El punto es que el autor los presenta como un bloque terminado.`),
  vocab: [
    V('ἔλυον', 'λύω', 'I/they was/were loosing (impf.)'),
    V('ἔλυες', 'λύω', 'estabas perdiendo (impf.)'),
    V('ἔλυε', 'λύω', 'estaba perdiendo (impf.)'),
    V('ἔλυσα', 'λύω', 'solté (aor.)'),
    V('ἔλυσας', 'λύω', 'soltaste (aor.)'),
    V('ἔλυσε', 'λύω', 'soltó (aor.)'),
    V('ἐλύσαμεν', 'λύω', 'we loosed (aor.)'),
    V('ἔλυσαν', 'λύω', 'they loosed (aor.)'),
    V('ἐδίδασκεν', 'διδάσκω', 'él estaba enseñando (impf.)'),
    V('ἔλεγεν', 'λέγω', 'estaba diciendo (impf.)'),
    V('εἶπεν', 'λέγω', 'dijo (aor.)'),
    V('ἐβάπτιζεν', 'βαπτίζω', 'estaba bautizando (impf.)'),
    V('ἐβάπτισεν', 'βαπτίζω', 'él bautizó (aor.)'),
    V('ἤκουσεν', 'ἀκούω', 'escuchó (aor.)'),
    V('ἐπίστευσαν', 'πιστεύω', 'they believed (aor.)'),
    V('ἦλθεν', 'ἔρχομαι', 'él vino (aor.)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"ἔλυσαν" es imperfecto o aoristo, ¿y por qué?'),
    options: [
      T('Imperfect (present stem)'),
      T('Aoristo (sigma entre raíz y terminación)'),
      T('Presente histórico'),
      T('Perfect without reduplication'),
    ],
    answer: 1,
    hint: T('Look for the σ: ἔ-λυ-σ-αν.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el 3er imperfecto singular: ἔλυ___ ("estaba perdiendo").'),
      answer: 'ε',
      hint: T('Terminaciones secundarias: -ον, -ες, -ε…'),
    },
    {
      kind: 'choose',
      prompt: T(
        'En Marcos 1:4-9, "ἐβάπτιζεν" (v.4) vs "ἐβάπτισεν" (v.9): el contraste aspectol es…',
      ),
      options: [
        T('Hábito duradero vs acto puntual'),
        T('Futuro vs pasado'),
        T('Active vs passive'),
        T('Comando vs descripción'),
      ],
      answer: 0,
      hint: T('Juan siguió bautizando (hábito);Jesús fue bautizado (evento).'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada forma con su tiempo.'),
      pairs: [
        { a: 'ἐλύομεν', b: 'imperfeito' },
        { a: 'ἐλύσαμεν', b: 'aoristo' },
        { a: 'ἤκουσαν', b: 'aoristo (aumento temporal)' },
        { a: 'λέγουσιν', b: 'presente (sem aumento!)' },
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
        'Sólo el indicativo lleva el aumento.Un verbo con inicial {ἐ-} o vocal alargada = pasado de indicativo.',
      ),
    },
    {
      n: '2',
      text: T(
        'Imperfecto = raíz presente + aumento + terminaciones secundarias.El sentido: acción pasada, continua o habitual.',
      ),
    },
    {
      n: '3',
      text: T(
        '1er aoristo = raíz + σα + aumento + terminaciones secundarias.La σ entre la raíz y la terminación es la firma.',
      ),
    },
    {
      n: '4',
      text: T(
        'Terminaciones secundarias activas: -ον, -ες, -ε, -ομεν, -ετε, -ον.Sirven imperfecto, aoristo y pluscuamperfecto.',
      ),
    },
    {
      n: '5',
      text: T(
        'Aoristo = acción completa (no necesariamente rápida).Imperfecto = acción en proceso.El par {ἔλεγεν}/{εἶπεν} lo resume.',
      ),
    },
  ],
  notes: [
    {
      label: T('Matiz avanzado:'),
      text: T(
        'El aoristo tiene usos más allá del pasado puntual: ingresivo ({ἐπίστευσαν} "llegó a creer"), gnómico (verdades generales), incluso dramático.Este capítulo fija el uso narrativo;el resto emerge en la lectura.',
      ),
    },
    {
      label: T('Trampa:'),
      text: T(
        '{ἔλυον} puede ser el 1er sg.("Estaba perdiendo") o 3er lugar.("estaban perdiendo").Ante la ambigüedad, el sujeto o contexto explícito decide: nunca adivines desde el aislamiento.',
      ),
    },
  ],
  examples: [
    {
      text: '{ἐδίδασκεν ἐν τῇ συναγωγῇ}',
      gloss: T('estaba enseñando en la sinagoga (Marcos 1:21; paisaje)'),
    },
    { text: '{ἐξῆλθεν τὸ πνεῦμα}', gloss: T('el espíritu salió (aoristo: evento; Marcos 1:26)') },
    { text: '{ἔλεγεν αὐτοῖς}', gloss: T('les seguía diciendo (proceso)') },
    { text: '{εἶπεν αὐτοῖς}', gloss: T('les dijo (acto completado)') },
    {
      text: '{ἐβάπτιζεν ἐν τῇ ἐρήμῳ}',
      gloss: T('estaba bautizando en el desierto (hábito; Marcos 1:4)'),
    },
    { text: '{ἐβάπτισεν αὐτόν}', gloss: T('lo bautizó (hecho; Marcos 1:9)') },
    { text: '{ἤκουσαν τὴν φωνήν}', gloss: T('they heard the voice (temporal augment; Acts 9:7)') },
    { text: '{ἐζήτουν αὐτὸν}', gloss: T('lo buscaban (intento en curso)') },
    { text: '{εὗρον τὸ παιδίον}', gloss: T('encontraron al niño (resultado; Mateo 2:11)') },
    {
      text: '{ἐπίστευσαν εἰς αὐτόν}',
      gloss: T('creyeron en él (aoristo ingresivo: "vinieron a creer"; Juan 2:11)'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — Active imperfect of λύω'),
      head: [T('Persona'), T('Forma'), T('Traducción')],
      rows: [
        ['1ª sg.', '{ἔλυον}', 'eu libertava'],
        ['2ª sg.', '{ἔλυες}', 'tu libertavas'],
        ['3ª sg.', '{ἔλυε(ν)}', 'ele libertava'],
        ['1ª pl.', '{ἐλύομεν}', 'nós libertávamos'],
        ['2ª pl.', '{ἐλύετε}', 'vós libertáveis'],
        ['3ª pl.', '{ἔλυον}', 'eles libertavam'],
      ],
    },
    {
      caption: T('Tabla 2 — 1er aoristo activo de λύω'),
      head: [T('Persona'), T('Forma'), T('Traducción')],
      rows: [
        ['1ª sg.', '{ἔλυσα}', 'eu libertei'],
        ['2ª sg.', '{ἔλυσας}', 'tu libertaste'],
        ['3ª sg.', '{ἔλυσε(ν)}', 'ele libertou'],
        ['1ª pl.', '{ἐλύσαμεν}', 'nós libertamos'],
        ['2ª pl.', '{ἐλύσατε}', 'vós libertastes'],
        ['3ª pl.', '{ἔλυσαν}', 'eles libertaram'],
      ],
    },
    {
      caption: T('Tabla 3 — Aumento temporal (verbo inicial de vocal)'),
      head: [T('Presente'), T('Aumento'), T('Ejemplo pasado')],
      rows: [
        ['ἀκούω', 'ἀ → ἠ', '{ἤκουον} / {ἤκουσα}'],
        ['ἐλπίζω', 'ἐ → ἠ', '{ἤλπιζον} / {ἤλπισα}'],
        ['ὁράω', 'ὁ → ὡ', '{ἑώρων} / {εἶδον}'],
      ],
    },
  ],
};
