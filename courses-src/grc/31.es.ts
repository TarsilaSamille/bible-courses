import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  title: T('Cierre: el Padrenuestro (Mt 6:9-13)'),
  subtitle: T('Πάτερ ἡμῶν — toda la gramática en una sola oración'),
  section: T('Lecturas'),
  body: C(`## La invocación

{Πάτερ ἡμῶν ὁ ἐν τοῖς οὐρανοῖς} — «Padre nuestro que estás en los cielos»: vocativo {Πάτερ} (cap. 13), posesivo {ἡμῶν} (cap. 14) y el artículo con preposición funcionando como relativo — {ὁ ἐν τοῖς οὐρανοῖς} «el [que está] en los cielos» (cap. 26, artículo que sustantiva un sintagma preposicional). Tres capítulos en la primera línea: todo el curso vive en esta oración.

## Sea, venga, hágase: los tres «sea»

{ἁγιασθήτω τὸ ὄνομά σου} — «santificado sea tu nombre»: imperativo aoristo pasivo de 3ª sg. (caps. 9 + 19). {ἐλθέτω ἡ βασιλεία σου} — «venga tu reino»: imperativo de aoristo 2º de {ἔρχομαι} ({ἐλθ-}, cap. 18). {γενηθήτω τὸ θέλημά σου, ὡς ἐν οὐρανῷ καὶ ἐπὶ γῆς} — «hágase tu voluntad, como en el cielo y en la tierra»: imperativo aoristo pasivo de {γίνομαι} + comparación con {ὡς}.

Las tres peticiones piden una sola cosa en espiral (el estilo de Juan, cap. 28): nombre santificado, reino venidero, voluntad hecha — Dios actuando, nosotros recibiendo. Todas en 3ª persona: a Dios no se le ordena en 2ª («¡santifica!»), se le pide en 3ª («sea santificado»). La gramática enseña la reverencia.

## Da, perdona, no nos induzca, líbranos

{τὸν ἄρτον ἡμῶν τὸν ἐπιούσιον δὸς ἡμῖν σήμερον} — «danos hoy nuestro pan de cada día»: objeto + {δὸς}, imperativo aoristo 2º de {δίδωμι} (cap. 12), dativo {ἡμῖν}, adverbio {σήμερον}. {ἐπιούσιος} «de cada día / necesario» es un hapax — palabra que solo existe aquí (y en Lc 11.3): los lexicógrafos discuten si viene de {ἐπί + οὐσία} («para el sustento») o de {ἐπι-ιέναι} («para el [día] siguiente»). La duda erudita no cambia nada de la oración.

{καὶ ἄφες ἡμῖν τὰ ὀφειλήματα ἡμῶν, ὡς καὶ ἡμεῖς ἀφήκαμεν τοῖς ὀφειλέταις ἡμῶν} — «y perdona nuestras deudas, como también nosotros hemos perdonado»: imperativo {ἄφες} (aoristo 2º de {ἀφίημι}, «dejar ir») + perfecto {ἀφήκαμεν} («estamos quienes hemos perdonado» — estado resultante, cap. 15). Mateo dice «deudas» ({ὀφειλήματα}); Lucas dice «pecados» ({ἁμαρτίας}, Lc 11.4) — comparar las versiones ilumina las dos.

{καὶ μὴ εἰσενέγκῃς ἡμᾶς εἰς πειρασμόν, ἀλλὰ ῥῦσαι ἡμᾶς ἀπὸ τοῦ πονηροῦ} — «y no nos induzcas a la tentación, sino líbranos del Maligno»: {μή} + subjuntivo aoristo (prohibición, cap. 8) + imperativo medio {ῥῦσαι} («líbranos», medio de interés). {τοῦ πονηροῦ} — ¿masculino («el Maligno») o neutro («el mal»)? La gramática permite ambos; la tradición reza ambos.`),
  vocab: [
    V('Πάτερ', 'πατήρ', '¡Padre! (voc.)'),
    V('ἁγιασθήτω', 'ἁγιάζω', 'santificado sea'),
    V('ἐλθέτω', 'ἔρχομαι', 'que venga'),
    V('γενηθήτω', 'γίνομαι', 'hágase'),
    V('θέλημα', 'θέλημα', 'voluntad'),
    V('ἐπιούσιος', 'ἐπιούσιος', 'de cada día (hapax)'),
    V('δὸς', 'δίδωμι', '¡da!'),
    V('σήμερον', 'σήμερον', 'hoy'),
    V('ἄφες', 'ἀφίημι', '¡perdona! ¡deja ir!'),
    V('ὀφειλήματα', 'ὀφείλημα', 'deudas'),
    V('ἀφήκαμεν', 'ἀφίημι', 'hemos perdonado'),
    V('ὀφειλέταις', 'ὀφειλέτης', 'a los deudores'),
    V('εἰσενέγκῃς', 'ἐσφέρω', 'induzcas'),
    V('πειρασμόν', 'πειρασμός', 'tentación'),
    V('ῥῦσαι', 'ῥύομαι', '¡libra!'),
    V('πονηροῦ', 'πονηρός', 'del Maligno / del mal'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«ἁγιασθήτω» está en 3ª persona (y no en 2ª) porque…'),
    options: [
      T('A Dios se le pide («sea santificado»), no se le ordena'),
      T('La 2ª persona no existe en el imperativo'),
      T('Es una prohibición con μή'),
      T('El sujeto es plural'),
    ],
    answer: 0,
    hint: T('Modo y reverencia — regla §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete el imperativo de δίδωμι: ___ ἡμῖν («danos», Mt 6.11).'),
      answer: 'δὸς',
      hint: T('El aoristo 2º de δίδωμι: forma brevísima.'),
    },
    {
      kind: 'choose',
      prompt: T('«ἀφήκαμεν» (perfecto) fundamenta la petición «ἄφες» porque…'),
      options: [
        T('Un estado previo («habiendo perdonado») autoriza el presente'),
        T('Es un futuro disfrazado'),
        T('Rima con ἄφες'),
        T('Es una exigencia métrica'),
      ],
      answer: 0,
      hint: T('Perfecto fundamentante — regla §3.'),
    },
    {
      kind: 'match',
      prompt: T('Relacione cada forma con su análisis.'),
      pairs: [
        { a: 'Πάτερ', b: 'vocativo' },
        { a: 'γενηθήτω', b: 'imperativo passivo' },
        { a: 'ἀφήκαμεν', b: 'perfeito' },
        { a: 'ῥῦσαι', b: 'imperativo médio' },
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
        'A Dios se le pide en 3ª persona («sea santificado»), no se le ordena en 2ª. El modo carga la reverencia.',
      ),
    },
    {
      n: '2',
      text: T(
        'Artículo + sintagma preposicional = relativo implícito: {ὁ ἐν τοῖς οὐρανοῖς} «el que está en los cielos».',
      ),
    },
    {
      n: '3',
      text: T(
        'El perfecto {ἀφήκαμεν} fundamenta la petición: «habiendo nosotros perdonado, perdona-nos». Un estado previo autoriza el presente.',
      ),
    },
    {
      n: '4',
      text: T(
        'El hapax ({ἐπιούσιος}) y la ambigüedad ({τοῦ πονηροῦ}) son normales en un texto real: la gramática acota, la tradición decide.',
      ),
    },
  ],
  notes: [
    {
      label: T('ΤΕΤΕΛΕΣΤΑΙ:'),
      text: T(
        '«Está consumado» (Jn 19.30, perfecto pasivo) — la última palabra de la cruz en el tiempo del estado resultante. Has leído treinta capítulos para llegar hasta aquí: toda forma de esta oración ha pasado por tus manos.',
      ),
    },
    {
      label: T('Lucas 11:'),
      text: T(
        'Lucas trae la versión corta (11.2-4): sin «hágase», con «pecados» en lugar de «deudas» ({ἁμαρτίας} en vez de {ὀφειλήματα}). Compare ambas de principio a fin — es la prueba final de lectura comparada.',
      ),
    },
  ],
  examples: [
    { text: '{Πάτερ ἡμῶν}', gloss: T('Padre nuestro (vocativo + posesivo)') },
    { text: '{ὁ ἐν τοῖς οὐρανοῖς}', gloss: T('el que está en los cielos (artículo-relativo)') },
    { text: '{ἁγιασθήτω}', gloss: T('santificado sea (3ª sg. pasiva)') },
    { text: '{ἐλθέτω}', gloss: T('venga (aoristo 2º de ἔρχομαι)') },
    { text: '{γενηθήτω}', gloss: T('hágase (pasiva de γίνομαι)') },
    { text: '{δὸς ἡμῖν}', gloss: T('danos (imperativo de δίδωμι + dativo)') },
    { text: '{ἄφες ἡμῖν}', gloss: T('perdona-nos (aoristo 2º)') },
    { text: '{ἀφήκαμεν}', gloss: T('hemos perdonado (perfecto fundamentante)') },
    { text: '{μὴ εἰσενέγκῃς}', gloss: T('no induzcas (prohibición)') },
    { text: '{ῥῦσαι ἡμᾶς}', gloss: T('líbranos (imperativo medio)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Las peticiones y su gramática'),
      head: [T('Petición'), T('Forma clave'), T('Capítulos')],
      rows: [
        ['{ἁγιασθήτω}', 'imperativo aor. pass. 3ª', '9 + 19'],
        ['{ἐλθέτω}', 'imperativo aor. 2º', '9 + 18'],
        ['{γενηθήτω}', 'imperativo aor. pass. 3ª', '9 + 19'],
        ['{δὸς}', 'imperativo aor. 2º de δίδωμι', '9 + 12'],
        ['{ἄφες}', 'imperativo aor. 2º de ἀφίημι', '9 + 18'],
        ['{ἀφήκαμεν}', 'perfeito', '15'],
        ['{μὴ εἰσενέγκῃς}', 'proibição (μή + subj.)', '8'],
        ['{ῥῦσαι}', 'imperativo médio', '9 + 17'],
      ],
    },
  ],
};
