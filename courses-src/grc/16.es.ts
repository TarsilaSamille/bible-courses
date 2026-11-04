import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('El perfecto'),
  subtitle: T('λέλυκα, γέγραπται: el pasado aún vigente'),
  section: T('El verbo'),
  body: C(`## Estado presente, acción pasada

El perfecto griego fusiona dos tiempos en uno: describe un estado presente resultante de una acción pasada.{γέγραπται} "está escrito": alguien escribió (pasado) y el texto sigue siendo válido (presente).{ἕστηκα} "Estoy de pie" - Me levanté (pasado) y permanezco (presente).{οἶδα} "Lo sé" - Vi (pasado) y sé (presente).

De ahí que el perfecto traduzca tan bien las fórmulas de autoridad: {γέγραπται} (Mateo 4:4) no informa que "escribieron", sino que "está escrito y es vinculante";{εἴρηκα} "He dicho" (Juan 14:25) sella la palabra como definitiva;{πεπίστευκα} “He creído y creo” (Juan 6:69) confiesa la fe permanente.

## Reduplicación

La marca del perfecto es la reduplicación: la consonante inicial se repite con {ε}.{λυ-} → {λε-λυ-κα};{γραφ-} → {γε-γραφ-α};{πεμπ-} → {πε-πομφ-α} (con la consonante no aspirada coincidente: φ→π, θ→τ, χ→κ).Los verbos con inicial de vocal se alargan en lugar de reduplicarse ({ἀγαπάω} → {ἠγάπηκα});Los verbos {ζ} y los compuestos de preposición usan aumento + reduplicación interna ({ζητέω} → {ἐζήτηκα}).

Las terminaciones activas son propias: {-κα, -κας, -κε, -καμεν, -κατε, -κασι}.El infinitivo {λελυκέναι} y el participio {λελυκώς, λελυκυῖα, λελυκός} completan el sistema: el participio perfecto, declinado como adjetivo, pinta los estados resultantes ({ἑστώς} "de pie", Hechos7:55).

## Los tiempos del sistema perfecto

El sistema tiene tres tiempos.El perfecto ({λέλυκα}) es el estado presente.El pluscuamperfecto ({ἐλελύκειν}) es el estado pasado: "había desatado / estaba desatado", con terminaciones aumentadas y secundarias, como un imperfecto del perfecto.El futuro perfecto ("habré desatado") es extremadamente raro en el Nuevo Testamento y puede ignorarse en la lectura.

En la voz media, el perfecto no necesita conectivos: raíz + terminaciones medias directamente ({λέλυμαι, λέλυσαι, λέλυται, λελύμεθα, λέλυσθε, λέλυνται}).{γέγραπται} y {πεπλήρωται} "se ha cumplido" son los dos ejemplos que encontrarás semanalmente.El sistema pasivo medio completo espera el cap.20.

## Perfectos convertidos en presente

Algunos perfectos lexicalizados con sentido presente y vida propia: {οἶδα} "Lo sé" (cap. 11), {ἕστηκα} "Estoy de pie" (cap. 12), {πέποιθα} "Confío" (de {πείθω}, "haber sido persuadido" = "confiar"),{γέγονα} "Me he convertido en / soy" (de {γίνομαι}), {μέμνημαι} "Recuerdo" (en medio, de {μιμνήσκω}).Demuestran la lógica del tiempo: el perfecto describe estados tan bien que algunos se convirtieron en estados permanentes de la lengua.`),
  vocab: [
    V('λέλυκα', 'λύω', 'I have loosed'),
    V('λέλυκε', 'λύω', 'he has loosed'),
    V('λέλυμαι', 'λύω', 'I stand loosed'),
    V('λέλυται', 'λύω', 'it stands loosed'),
    V('λελυκώς', 'λύω', 'having loosed'),
    V('γέγραπται', 'γράφω', 'it stands written'),
    V('γέγραφα', 'γράφω', 'I have written'),
    V('πεπίστευκα', 'πιστεύω', 'I have believed'),
    V('ἕστηκα', 'ἵστημι', 'I stand'),
    V('πέποιθα', 'πείθω', 'I trust'),
    V('γέγονα', 'γίνομαι', 'I have become'),
    V('οἶδα', 'οἶδα', 'I know'),
    V('τετέλεσται', 'τελέω', 'it is finished'),
    V('πεπλήρωται', 'πληρόω', 'it stands fulfilled'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"γέγραπται" (Mateo 4:4) se traduce mejor…'),
    options: [
      T('"It stands written" (present state)'),
      T('"They wrote" (past act)'),
      T('"They will write" (future)'),
      T('"Write!" (command)'),
    ],
    answer: 0,
    hint: T('Perfecto = estado presente de acción pasada – regla §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el 3er singular: λέλυ___ ("ha desatado").'),
      answer: 'κε',
      hint: T('Sus propias terminaciones: -κα, -κας, -κε…'),
    },
    {
      kind: 'choose',
      prompt: T('La reduplicación en "γέγραφα" es...'),
      options: [
        T('γε- (consonant + ε)'),
        T('γη- (lengthening)'),
        T('ἐ-γε (double augment)'),
        T('There is no reduplication'),
      ],
      answer: 0,
      hint: T('Consonante inicial + ε — regla §2.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada forma con su tiempo.'),
      pairs: [
        { a: 'λέλυκα', b: 'perfeito' },
        { a: 'ἐλελύκει', b: 'mais-que-perfeito' },
        { a: 'λέλυται', b: 'perfeito médio' },
        { a: 'ἔλυσε', b: 'aoristo' },
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
        'Perfecto = estado presente de acción pasada.Traducir por el estado ("está escrito"), no por el acto ("escribieron").',
      ),
    },
    {
      n: '2',
      text: T(
        'Reduplicación: consonante inicial + ε ({λελυ-}, {γεγραφ-});la vocal inicial se alarga ({ἠγάπηκα});Los verbos ζ usan la raíz ἐ- + ({ἐζήτηκα}).',
      ),
    },
    {
      n: '3',
      text: T(
        'Sus propias terminaciones activas: -κα, -κας, -κε, -καμεν, -κατε, -κασι.La -κ- delata el tiempo.',
      ),
    },
    {
      n: '4',
      text: T(
        'Pluscuamperfecto = perfecto + aumento + terminaciones secundarias ("había perdido").',
      ),
    },
    {
      n: '5',
      text: T(
        'Perfecto medio sin conectivo: {λέλυμαι}, {γέγραπται}, {πεπλήρωται}.Las formas medias más útiles del Nuevo Testamento.',
      ),
    },
  ],
  notes: [
    {
      label: T('Translation:'),
      text: T(
        'El inglés rara vez dice "está escrito" para {γέγραπται} sin que suene bíblico, que es exactamente el registro: fórmula de cita solemne.Mantén la solemnidad;"estaba escrito" borra el efecto.',
      ),
    },
    {
      label: T('Intensive:'),
      text: T(
        'Lo perfecto con fuerza intensiva pinta estados consumados: {τετέλεσται} "¡consumado es!"(Juan 19:30): la última palabra de la cruz, en pasivo perfecto.El tiempo es la teología.',
      ),
    },
  ],
  examples: [
    { text: '{γέγραπται}', gloss: T('it stands written (Matt 4:4; authority formula)') },
    { text: '{εἴρηκα ὑμῖν}', gloss: T('I have told you (John 14:25; sealed word)') },
    { text: '{πεπίστευκα}', gloss: T('I have believed and believe (John 6:69)') },
    { text: '{ἕστηκα ἐνώπιον}', gloss: T('I stand before (Acts 26:16)') },
    { text: '{πέποιθα ἐπὶ κύριον}', gloss: T('I trust in the Lord (Phil 2:24)') },
    { text: '{γέγονα Ἰουδαίοις}', gloss: T('I have become a Jew (1 Cor 9:20)') },
    { text: '{πεπλήρωται ὁ καιρός}', gloss: T('the time stands fulfilled (Mark 1:15)') },
    { text: '{μεμένηκεν}', gloss: T('it abides (from μένω; John 8:31)') },
    { text: '{ᾔδεισαν αὐτόν}', gloss: T('they knew him (pluperfect; Luke 24:16)') },
    { text: '{ἑστῶτα ἐκ δεξιῶν}', gloss: T('standing at the right (participle; Acts 7:55)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Active perfect of λύω'),
      head: [T('Persona'), T('Forma'), T('Traducción')],
      rows: [
        ['1ª sg.', '{λέλυκα}', 'tenho libertado'],
        ['2ª sg.', '{λέλυκας}', 'tens libertado'],
        ['3ª sg.', '{λέλυκε(ν)}', 'tem libertado'],
        ['1ª pl.', '{λελύκαμεν}', 'temos libertado'],
        ['2ª pl.', '{λελύκατε}', 'tendes libertado'],
        ['3ª pl.', '{λελύκασι(ν)}', 'têm libertado'],
      ],
    },
    {
      caption: T('Tabla 2 — Perfecto medio de λύω'),
      head: [T('Persona'), T('Forma'), T('Traducción')],
      rows: [
        ['1ª sg.', '{λέλυμαι}', 'estou liberto'],
        ['2ª sg.', 'λέλυσαι', 'estás liberto'],
        ['3ª sg.', '{λέλυται}', 'está liberto'],
        ['1ª pl.', 'λελύμεθα', 'estamos libertos'],
        ['2ª pl.', 'λέλυσθε', 'estais libertos'],
        ['3ª pl.', 'λέλυνται', 'estão libertos'],
      ],
    },
    {
      caption: T('Tabla 3 — Pluscuamperfecto activo y medio'),
      head: [T('Persona'), T('Activo'), T('Medio')],
      rows: [
        ['1ª sg.', '{ἐλελύκειν}', 'ἐλελύμην'],
        ['3ª sg.', '{ἐλελύκει}', 'ἐλέλυτο'],
        ['3ª pl.', 'ἐλελύκεσαν', 'ἐλέλυντο'],
      ],
    },
  ],
};
