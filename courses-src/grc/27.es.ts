import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  title: T('Relativo y demostrativos'),
  subtitle: T('ὅς, οὗτος, ἐκεῖνος: mirar hacia atrás y hacia cerca'),
  section: T('Sintaxis'),
  body: C(`## El relativo sirve a dos señores

El pronombre relativo ({ὅς} «quien/el cual», {ἥ}, {ὅ}) concuerda con su antecedente en género y número, pero toma el caso de su PROPIA cláusula. {μακάριοί εἰσιν οἳ πενθοῦσιν} «bienaventurados los que lloran» (Mt 5.4): {οἳ} es masculino plural como el antecedente implícito («los»), pero nominativo por ser sujeto de {πενθοῦσιν}. En cambio, en {ὃ ἐὰν αἰτήσητε} «lo que pidáis» (Jo 14.13), {ὃ} es neutro (antecedente: «cosas») y acusativo (objeto de {αἰτήσητε}).

Esta doble lealtad resuelve las frases largas: busque el antecedente (género/número) y la función en la subordinada (caso). El genitivo del relativo indica posesión — {οὗ} «de quién»: {οὗ τὸ ὑπόδημα} «de quién la sandalia [no soy digno de desatar]» (Mc 1.7). Y el dativo con preposición ancla lugares teológicos: {ἐν ᾧ} «en quien» (la fórmula paulina de incorporación).

## Demostrativos: cerca y lejos

{οὗτος} «este» señala lo cercano; {ἐκεῖνος} «ese» señala lo lejano — en el espacio, en el tiempo o en el discurso. {οὗτός ἐστιν ὁ υἱός μου} «este es mi Hijo» (Mt 3.17, el Padre señala a Jesús presente); {ἐν ἐκείνῃ τῇ ἡμέρᾳ} «aquel día» (el Día escatológico, lejano y temido).

Ambos se declinan con el artículo fusionado al tema: {οὗτος, αὕτη, τοῦτο}; {ἐκεῖνος, ἐκείνη, ἐκεῖνο}. El neutro {τοῦτο} «esto» abre fórmulas: {τοῦτο ποιεῖτε} «haced esto» (Lc 22.19). Y {ἐκεῖνος} se convirtió en el «él» enfático del griego tardío — donde el clásico usaría un pronombre, el koiné usa {ἐκεῖνος}.

## αὐτός, por tercera vez

El cap. 14 dio los tres papeles; aquí, los contextos más frecuentes. Intensivo con nombres propios: {αὐτὸς Δαυίδ} «el propio David» (Mc 12.36). Pronombre oblicuo en cadenas preposicionales: {δι᾽ αὐτοῦ} «por medio de él» (Jo 1.3, {πάντα δι᾽ αὐτοῦ ἐγένετο} «todas las cosas fueron hechas por medio de él»), {ἐν αὐτῷ} «en él», {σὺν αὐτοῖς} «con ellos».

Y el relativo indefinido: {ὃς ἄν} / {ὅστις} + subjuntivo = «quienquiera que»: {ὃς ἐὰν θέλῃ} «el que quiera» (Mc 8.34, cap. 24). El relativo con {ἄν} generaliza — de «lo que» a «sea lo que sea».`),
  vocab: [
    V('ὅς', 'ὅς', 'quien, el cual'),
    V('ἥ', 'ὅς', 'quien (fem.)'),
    V('ὅ', 'ὅς', 'lo que'),
    V('οἵ', 'ὅς', 'los que'),
    V('οὗ', 'ὅς', 'de quién, cuyo'),
    V('οὗτος', 'οὗτος', 'este'),
    V('αὕτη', 'οὗτος', 'esta (fem.)'),
    V('τοῦτο', 'οὗτος', 'esto (cosa)'),
    V('ἐκεῖνος', 'ἐκεῖνος', 'ese, aquel'),
    V('ἐκείνη', 'ἐκεῖνος', 'esa, aquella (fem.)'),
    V('ὅστις', 'ὅστις', 'quienquiera que'),
    V('ὑπόδημα', 'ὑπόδημα', 'sandalia'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En «οἳ πενθοῦσιν», el relativo es masculino plural porque…'),
    options: [
      T('Concuerda con el antecedente («los»)'),
      T('Es sujeto, y los sujetos son masculinos'),
      T('πενθέω rige masculino'),
      T('Todo relativo es masculino plural'),
    ],
    answer: 0,
    hint: T('Género/número del antecedente; caso de la cláusula — regla §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete el genitivo: ___ τὸ ὑπόδημα («de quién la sandalia», Mc 1:7).'),
      answer: 'οὗ',
      hint: T('Genitivo del relativo = posesión — regla §2.'),
    },
    {
      kind: 'choose',
      prompt: T('«ἐν ἐκείνῃ τῇ ἡμέρᾳ» usa ἐκεῖνος (y no οὗτος) porque…'),
      options: [
        T('El Día escatológico es lejano y temido'),
        T('ἡμέρα es femenino'),
        T('οὗτος carece de femenino'),
        T('Es dativo de posesión'),
      ],
      answer: 0,
      hint: T('Cercano × lejano: el Día es siempre ἐκεῖνος — regla §3.'),
    },
    {
      kind: 'match',
      prompt: T('Relacione cada forma con su clase.'),
      pairs: [
        { a: 'οἵ', b: 'relativo' },
        { a: 'οὗτος', b: 'demonstrativo perto' },
        { a: 'ἐκεῖνος', b: 'demonstrativo longe' },
        { a: 'τίς', b: 'interrogativo' },
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
        'Relativo: género y número del antecedente; caso de su propia cláusula. Dos preguntas, dos respuestas.',
      ),
    },
    {
      n: '2',
      text: T(
        'Genitivo del relativo = posesión («de quién»): {οὗ}, {ἧς}. Dativo + preposición ancla fórmulas ({ἐν ᾧ}).',
      ),
    },
    {
      n: '3',
      text: T(
        '{οὗτος} = cercano (espacio, tiempo, discurso); {ἐκεῖνος} = lejano. El Día es siempre {ἐκείνη ἡ ἡμέρα}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Relativo + ἄν generaliza: {ὃς ἄν} «quienquiera que sea». Sin ἄν, el relativo es definido.',
      ),
    },
  ],
  notes: [
    {
      label: T('Atracción:'),
      text: T(
        'A veces el relativo se «atrae» al caso de su antecedente ({ὧν} en vez de {ἅ}): fenómeno clásico, raro en el koiné, pero aparece en Hechos. Si el caso parece equivocado, sospeche atracción antes que sospechar del texto.',
      ),
    },
    {
      label: T('ὅδε:'),
      text: T(
        'Un tercer demostrativo, {ὅδε} «este aquí», es rarísimo en el Nuevo Testamento. Reconózcalo y siga adelante: {οὗτος} y {ἐκεῖνος} bastan.',
      ),
    },
  ],
  examples: [
    { text: '{οἳ πενθοῦσιν}', gloss: T('los que lloran (Mt 5.4)') },
    { text: '{ὃ ἐὰν αἰτήσητε}', gloss: T('lo que pidáis (Jo 14.13)') },
    { text: '{οὗτός ἐστιν}', gloss: T('este es (Mt 3.17)') },
    { text: '{ἐν ἐκείνῃ τῇ ἡμέρᾳ}', gloss: T('aquel día (escatológico)') },
    { text: '{οὗ τὸ ὑπόδημα}', gloss: T('de quién la sandalia (Mc 1.7)') },
    { text: '{πάντα δι᾽ αὐτοῦ}', gloss: T('todas las cosas por medio de él (Jo 1.3)') },
    { text: '{αὐτὸς Δαυίδ}', gloss: T('el propio David (Mc 12.36)') },
    { text: '{τοῦτο ποιεῖτε}', gloss: T('haced esto (Lc 22.19)') },
    { text: '{ἐν ᾧ}', gloss: T('en quien (fórmula de incorporación)') },
    { text: '{ὃς ἐὰν θέλῃ}', gloss: T('quienquiera que quiera (Mc 8.34)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Relativo ὅς (singular)'),
      head: [T('Caso'), T('Masc.'), T('Fem.'), T('Neutro')],
      rows: [
        [T('Nominativo'), '{ὅς}', '{ἥ}', '{ὅ}'],
        [T('Genitivo'), '{οὗ}', 'ἧς', '{οὗ}'],
        [T('Dativo'), '{ᾧ}', 'ᾗ', '{ᾧ}'],
        [T('Acusativo'), '{ὅν}', 'ἥν', '{ὅ}'],
      ],
    },
    {
      caption: T('Tabla 2 — Relativo ὅς (plural)'),
      head: [T('Caso'), T('Masc.'), T('Fem.'), T('Neutro')],
      rows: [
        [T('Nominativo'), '{οἵ}', '{αἵ}', '{ἅ}'],
        [T('Genitivo'), '{ὧν}', '{ὧν}', '{ὧν}'],
        [T('Dativo'), '{οἷς}', '{αἷς}', '{οἷς}'],
        [T('Acusativo'), '{οὕς}', '{ἅς}', '{ἅ}'],
      ],
    },
    {
      caption: T('Tabla 3 — Demostrativos (nominativo)'),
      head: [T('Pronombre'), T('Masc.'), T('Fem.'), T('Neutro')],
      rows: [
        ['este', '{οὗτος}', '{αὕτη}', '{τοῦτο}'],
        ['aquele', '{ἐκεῖνος}', '{ἐκείνη}', '{ἐκεῖνο}'],
      ],
    },
  ],
};
