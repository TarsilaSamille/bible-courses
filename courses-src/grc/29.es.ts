import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('Lectura: 1 Juan 1:1-4'),
  subtitle: T('ὃ ἦν ἀπ᾽ ἀρχῆς — el prólogo en espiral'),
  section: T('Lecturas'),
  body: C(`## Un período de cuatro versículos

El prólogo de 1 Juan es un solo aliento sintáctico: el verbo principal ({ἀπαγγέλλομεν} «anunciamos») solo llega en el v. 3, tras una cascada de relativos. Juan escribe en espiral — repite, retoma, profundiza. Seguir la espiral es el ejercicio de este capítulo.

{Ὃ ἦν ἀπ᾽ ἀρχῆς, ὃ ἀκηκόαμεν, ὃ ἑωράκαμεν τοῖς ὀφθαλμοῖς ἡμῶν, ὃ ἐθεασάμεθα καὶ αἱ χεῖρες ἡμῶν ἐψηλάφησαν} — cuatro relativos neutros ({ὃ} «lo que») que apilan testimonio: era (imperfecto {ἦν}), hemos oído (perfecto {ἀκηκόαμεν}), hemos visto (perfecto {ἑωράκαμεν}), contemplamos (aoristo {ἐθεασάμεθα}), apalparon con nuestras manos (aoristo {ἐψηλάφησαν}). De lo general a lo táctil: ser, oír, ver, contemplar, tocar.

{περὶ τοῦ λόγου τῆς ζωῆς} — «acerca de la Palabra de la vida»: doble genitivo regido por {περί} + genitivo. El {λόγος} de Jn 1.1 reaparece, ahora «de la vida».

## Manifestación y proclamación

{καὶ ἡ ζωὴ ἐφανερώθη} — «y la vida sePatentizó»: aoristo pasivo (cap. 19), el evento de la encarnación en un solo verbo. Sigue la tríada del testimonio apostólico: {ἑωράκαμεν καὶ μαρτυροῦμεν καὶ ἀπαγγέλλομεν} «hemos visto, damos testimonio y anunciamos» — perfecto (experiencia acumulada), presente (testimonio continuo), presente (proclamación continua).

{τὴν ζωὴν τὴν αἰώνιον ἥτις ἦν πρὸς τὸν πατέρα} — «la vida eterna, que estaba con el Padre»: relativo compuesto {ἥτις} («que», enfático) + imperfecto + {πρός} + acusativo («junto a», relación cara a cara — el mismo {πρός} de Jn 1.1, {πρὸς τὸν θεόν}).

## Para que tengáis comunión

{ἵνα καὶ ὑμεῖς κοινωνίαν ἔχητε μεθ᾽ ἡμῶν} — «para que también vosotros tengáis comunión con nosotros»: {ἵνα} + subjuntivo presente (proceso continuo, cap. 8), {κοινωνίαν} «comunión, participación» como objeto, {μεθ᾽ ἡμῶν} «con nosotros». La finalidad de la proclamación es la comunión — y la comunión se despliega: {μετὰ τοῦ πατρὸς καὶ μετὰ τοῦ υἱοῦ αὐτοῦ} «con el Padre y con su Hijo».

{καὶ ταῦτα γράφομεν ἡμεῖς ἵνα ἡ χαρὰ ἡμῶν ᾖ πεπληρωμένη} — «y esto os escribimos para que nuestro gozo esté completo»: {ᾖ} (¡subjuntivo de {εἰμί}!) + participio perfecto {πεπληρωμένη} formando una perífrasis («estécompletedo»). El prólogo cierra con un gozo en estado resultante — perfecto incluso en el sentimiento.`),
  vocab: [
    V('ἀκηκόαμεν', 'ἀκούω', 'hemos oído'),
    V('ἑωράκαμεν', 'ὁράω', 'hemos visto'),
    V('ἐθεασάμεθα', 'θεάομαι', 'contemplamos'),
    V('ἐψηλάφησαν', 'ψηλαφάω', 'tocaron'),
    V('ἐφανερώθη', 'φανερόω', 'se patentizó'),
    V('μαρτυροῦμεν', 'μαρτυρέω', 'damos testimonio'),
    V('ἀπαγγέλλομεν', 'ἀπαγγέλλω', 'anunciamos'),
    V('κοινωνία', 'κοινωνία', 'comunión'),
    V('ἔχητε', 'ἔχω', 'tengáis'),
    V('ᾖ', 'εἰμί', 'sea (subj.)'),
    V('πεπληρωμένη', 'πληρόω', 'completada'),
    V('ὀφθαλμός', 'ὀφθαλμός', 'ojo'),
    V('ἀρχή', 'ἀρχή', 'principio'),
    V('αἰώνιος', 'αἰώνιος', 'eterno'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«ἀκηκόαμεν» es perfecto (y no presente) porque…'),
    options: [
      T('Tiene reduplicación (ἀκ-ηκο-) con sentido de experiencia acumulada'),
      T('Termina en -μεν'),
      T('Viene después de ὅ'),
      T('Es verbo contracto'),
    ],
    answer: 0,
    hint: T('Reduplicación + experiencia = perfecto — regla §2.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete el verbo principal del prólogo: ἀπαγγέλλο___ («anunciamos», 1ª pl.).'),
      answer: 'μεν',
      hint: T('Presente 1ª plural: -μεν.'),
    },
    {
      kind: 'choose',
      prompt: T('«ᾖ πεπληρωμένη» es…'),
      options: [
        T('Perífrasis: subjuntivo de εἰμί + participio perfecto'),
        T('Aoristo pasivo simple'),
        T('Imperativo presente'),
        T('Infinitivo articulado'),
      ],
      answer: 0,
      hint: T('Dos verbos, un sentido de estado deseado — regla §3.'),
    },
    {
      kind: 'match',
      prompt: T('Relacione cada forma con su tiempo.'),
      pairs: [
        { a: 'ἦν', b: 'imperfeito' },
        { a: 'ἑωράκαμεν', b: 'perfeito' },
        { a: 'ἐθεασάμεθα', b: 'aoristo' },
        { a: 'ἔχητε', b: 'subjuntivo' },
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
        'Lectura followed: busque primero el verbo principal ({ἀπαγγέλλομεν}, v. 3); todo lo demás orbita en torno a él.',
      ),
    },
    {
      n: '2',
      text: T(
        'Perfectos de percepción ({ἀκηκόαμεν}, {ἑωράκαμεν}) = experiencia acumulada que autoriza el testimonio.',
      ),
    },
    {
      n: '3',
      text: T(
        '{ᾖ} + participio perfecto forma una perífrasis de estado deseado («esté completo»).',
      ),
    },
    {
      n: '4',
      text: T(
        '{πρός} + acusativo entre personas = relación cara a cara ({πρὸς τὸν πατέρα}, {πρὸς τὸν θεόν}).',
      ),
    },
  ],
  notes: [
    {
      label: T('Atracción del relativo:'),
      text: T(
        '{ἥτις} es femenino por atracción a {ζωήν} («la vida, que…»), aunque el antecedente lógico sea neutro. Juan prefiere la concordancia de sentido a la mecánica — cap. 26, nota de la atracción.',
      ),
    },
    {
      label: T('ἀπ᾽ ἀρχῆς:'),
      text: T(
        '{ἀπ᾽ ἀρχῆς} «desde el principio» hace eco a {ἐν ἀρχῇ} de Jn 1.1 con una preposición distinta: Juan enlaza la carta con el evangelio en la primera frase. {ἀπό} + genitivo marca origen en el tiempo.',
      ),
    },
  ],
  examples: [
    { text: '{ὃ ἦν ἀπ᾽ ἀρχῆς}', gloss: T('lo que era desde el principio') },
    { text: '{ὃ ἀκηκόαμεν}', gloss: T('lo que hemos oído (perfecto)') },
    { text: '{περὶ τοῦ λόγου}', gloss: T('acerca de la Palabra (doble genitivo)') },
    { text: '{ἡ ζωὴ ἐφανερώθη}', gloss: T('la vida se patentizó (aoristo pasivo)') },
    {
      text: '{μαρτυροῦμεν καὶ ἀπαγγέλλομεν}',
      gloss: T('damos testimonio y anunciamos (presentes)'),
    },
    { text: '{ἥτις ἦν πρὸς τὸν πατέρα}', gloss: T('que estaba con el Padre') },
    { text: '{κοινωνίαν ἔχητε}', gloss: T('tengáis comunión (subjuntivo)') },
    { text: '{μεθ᾽ ἡμῶν}', gloss: T('con nosotros (elisión: μετὰ → μεθ᾽)') },
    { text: '{ᾖ πεπληρωμένη}', gloss: T('esté completo (perífrasis)') },
    { text: '{τοῖς ὀφθαλμοῖς ἡμῶν}', gloss: T('con nuestros ojos (dativo instrumental)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Tiempos del testimonio (1Jn 1.1)'),
      head: [T('Forma'), T('Tiempo'), T('Matiz')],
      rows: [
        ['{ἦν}', 'imperfeito', 'era (existência contínua)'],
        ['{ἀκηκόαμεν}', 'perfeito', 'temos ouvido (experiência)'],
        ['{ἑωράκαμεν}', 'perfeito', 'temos visto (experiência)'],
        ['{ἐθεασάμεθα}', 'aoristo', 'contemplamos (ato)'],
        ['{ἐψηλάφησαν}', 'aoristo', 'apalparam (ato)'],
      ],
    },
    {
      caption: T('Tabla 2 — Relativos del prólogo'),
      head: [T('Forma'), T('Análisis'), T('Función')],
      rows: [
        ['{ὃ ἦν}', 'neutro sg.', 'o que era'],
        ['{ὃ ἀκηκόαμεν}', 'neutro sg.', 'o que ouvimos'],
        ['{ἥτις ἦν}', 'fem. (atração à ζωή)', 'a qual estava'],
        ['{ἵνα … ἔχητε}', 'subjuntivo', 'para que tenhais'],
      ],
    },
  ],
};
