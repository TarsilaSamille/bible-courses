import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('Verbos contractuales'),
  subtitle: T('ἀγαπάω, ποιέω, δηλόω: cuando dos vocales se convierten en una'),
  section: T('El verbo'),
  body: C(`## Por qué algunos verbos se "encogen"

Muchos de los verbos más utilizados del Nuevo Testamento terminan su raíz en una vocal: {ἀγαπα-} "amar", {ποιε-} "hacer", {δηλο-} "mostrar".Al recibir las terminaciones del presente, esa vocal choca con la vocal temática y las dos se fusionan en una: {ἀγαπάω} se convierte en {ἀγαπῶ}, {ποιέω} se convierte en {ποιῶ}, {δηλόω} se convierte en {δηλῶ}.El circunflejo delata la fusión: donde una forma verbal lleva un circunflejo, se produce la contracción.

El diccionario enumera estos verbos sin contracción ({ἀγαπάω}, {ζητέω}), pero el Nuevo Testamento casi siempre usa la forma contraída ({ἀγαπῶ}, {ζητῶ}).Aprenda a reconocer ambos y a derivar uno del otro.

## Verbos en -άω

La vocal {α} domina la fusión: α + ε produce {α} larga, α + ο produce {ω}.En la práctica actual: {-ω} se convierte en {-ῶ}, {-εις} se convierte en {-ᾷς}, {-ει} se convierte en {-ᾷ}, {-ομεν} se convierte en {-ῶμεν}, {-ετε} se convierte en {-ᾶτε}, {-ουσι} se convierte en {-ῶσι}.Entonces {ἀγαπάω} conjuga {ἀγαπῶ, ἀγαπᾷς, ἀγαπᾷ, ἀγαπῶμεν, ἀγαπᾶτε, ἀγαπῶσι(ν)}.

El infinitivo también se contrae: {ἀγαπᾶν} (de {ἀγαπάειν}).Y guarda el alargamiento a partir de ahora: en futuro y aoristo, {α} corto se alarga hasta {η} — {ἀγαπήσω} "Amaré", {ἠγάπησα} "Amé".Esa extensión regresa en los capítulos 7 y 17.

## Verbos en -έω

El grupo más grande: {ποιέω} "hacer", {ζητέω} "buscar", {καλέω} "llamar", {τηρέω} "guardar", {μαρτυρέω} "testificar".Aquí la fusión produce diptongos iota o {ου} cerrado: {-ω} se convierte en {-ῶ}, {-εις} y {-ει} se convierte en {-εῖς, -εῖ}, {-ομεν} se convierte en {-οῦμεν}, {-ετε} se convierte en {-εῖτε},{-ουσι} se convierte en {-οῦσι}.De ahí {ποιῶ, ποιεῖς, ποιεῖ, ποιοῦμεν, ποιεῖτε, ποιοῦσι(ν)}.

El alargamiento correspondiente es ε → η: {ποιήσω}, {ἐποίησα}.Tenga en cuenta que {ἐποίησεν} (aoristo de {ποιέω}) se encuentra entre las formas verbales más frecuentes en los Evangelios.

## Verbos en -όω

El grupo más pequeño — {δηλόω} "manifestar", {πληρόω} "cumplir, llenar" — se fusiona en {οι} y {ου}: {-εις} se convierte en {-οῖς}, {-ει} se convierte en {-οῖ}, {-ομεν} se convierte en {-οῦμεν}.Paradigma: {δηλῶ, δηλοῖς, δηλοῖ, δηλοῦμεν, δηλοῦτε, δηλοῦσι(ν)}.

El alargamiento es ο → ω: {πληρώσω}, {ἐπλήρωσα}.{πεπλήρωται} "está cumplido" (pasivo perfecto de {πληρόω}) es una palabra clave de la teología de Juan y Pablo.`),
  vocab: [
    V('ἀγαπάω', 'ἀγαπάω', 'amar'),
    V('ἀγαπῶ', 'ἀγαπάω', 'Amo'),
    V('ἀγαπᾷ', 'ἀγαπάω', 'el ama'),
    V('ποιέω', 'ποιέω', 'hacer, hacer'),
    V('ποιῶ', 'ποιέω', 'sí'),
    V('ποιεῖ', 'ποιέω', 'el lo hace'),
    V('ζητέω', 'ζητέω', 'buscar'),
    V('ζητῶ', 'ζητέω', 'busco'),
    V('καλέω', 'καλέω', 'llamar'),
    V('τηρέω', 'τηρέω', 'mantener'),
    V('μαρτυρέω', 'μαρτυρέω', 'para presenciar'),
    V('δηλόω', 'δηλόω', 'manifestar'),
    V('πληρόω', 'πληρόω', 'cumplir, llenar'),
    V('δοξάζω', 'δοξάζω', 'glorificar'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿De qué infinitivo viene "ποιεῖ" (él lo hace)?'),
    options: [T('ποιέω (-έω)'), T('ποιάω (-άω)'), T('ποιόω (-όω)'), T('ποιμω (normal -ω)')],
    answer: 0,
    hint: T('El diptongo -εῖ- delata el grupo -έω.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el 2º plural: ___ ("tú amas", de ἀγαπάω).'),
      answer: 'ἀγαπᾶτε',
      hint: T('-άω: -ετε se convierte en -ᾶτε.'),
    },
    {
      kind: 'choose',
      prompt: T('El futuro de "ἀγαπάω" es "ἀγαπήσω" porque…'),
      options: [
        T('α corta se alarga a η'),
        T('α se convierte en perispomenon ο'),
        T('α cae y entra doble σ'),
        T('es un verbo irregular'),
      ],
      answer: 0,
      hint: T('Alargamiento α→η — regla §5.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada forma contratada con su grupo.'),
      pairs: [
        { a: 'ἀγαπᾷς', b: '-άω' },
        { a: 'ποιεῖτε', b: '-έω' },
        { a: 'δηλοῖ', b: '-όω' },
        { a: 'ζητοῦμεν', b: '-έω' },
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
        'Circunflejo en una forma verbal = contracción.Frente a ello, reconstruye las dos vocales originales para encontrar la raíz.',
      ),
    },
    {
      n: '2',
      text: T('-άω: α domina (α+ε→α larga, α+ο→ω).Resultado: -ῶ, -ᾷς, -ᾷ, -ῶμεν, -ᾶτε, -ῶσι.'),
    },
    {
      n: '3',
      text: T('-έω: fusión en diptongo o ου.Resultado: -ῶ, -εῖς, -εῖ, -οῦμεν, -εῖτε, -οῦσι.'),
    },
    { n: '4', text: T('-όω: fusión en οι/ου.Resultado: -ῶ, -οῖς, -οῖ, -οῦμεν, -οῦτε, -οῦσι.') },
    {
      n: '5',
      text: T('Alargamiento de futuro/aoristo: α→η ({ἀγαπήσω}), ε→η ({ποιήσω}), ο→ω ({πληρώσω}).'),
    },
  ],
  notes: [
    {
      label: T('Cómo reconocer:'),
      text: T(
        'Todo verbo con circunflejo en su terminación presente ({ποιεῖτε}, {ἀγαπῶμεν}) es contrato.Sin circunflejo ni diptongo impar, es un verbo regular -ω, volvamos al cap.5.',
      ),
    },
    {
      label: T('Amigo falso:'),
      text: T(
        '{δοξάζω} "glorificar" parece contrato pero es un verbo regular -ω: su raíz termina en consonante ({δοξαδ-}), no en vocal.Criterio: sólo verbos cuya raíz termine en un contrato vocal puro α, ε u ο.',
      ),
    },
  ],
  examples: [
    {
      text: '{ὁ θεὸς ἀγαπᾷ τὸν κόσμον}',
      gloss: T('Dios ama al mundo (Juan 3:16; contratado 3er sg.)'),
    },
    { text: '{ἀγαπᾶτε ἀλλήλους}', gloss: T('amarse unos a otros (2ยบ pl.; Juan 13:34)') },
    { text: '{τί ποιεῖτε}', gloss: T('¿qué estás haciendo?(2º pl. de ποιέω)') },
    { text: '{ἐποίησεν σημεῖα}', gloss: T('hacía señales (aoristo alargado; Juan 20:30)') },
    { text: '{ζητεῖτε πρῶτον}', gloss: T('busca primero (Mateo 6:33)') },
    { text: '{καλεῖ τοὺς μαθητάς}', gloss: T('llama a los discípulos (3er sg.)') },
    { text: '{τηρεῖ τὸν λόγον}', gloss: T('él guarda la palabra (Juan 8:51)') },
    { text: '{πληροῦται ἡ γραφή}', gloss: T('la Escritura se cumple (pasivo; Juan 19:24)') },
    { text: '{μαρτυρεῖ περὶ αὐτοῦ}', gloss: T('él da testimonio acerca de él') },
    { text: '{δηλοῖ τὴν ἀλήθειαν}', gloss: T('él manifiesta la verdad (3er sg. -όω verbo)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Presente de ἀγαπάω'),
      head: [T('Persona'), T('No contraída'), T('Contraída')],
      rows: [
        ['1ª sg.', 'ἀγαπάω', '{ἀγαπῶ}'],
        ['2ª sg.', 'ἀγαπάεις', '{ἀγαπᾷς}'],
        ['3ª sg.', 'ἀγαπάει', '{ἀγαπᾷ}'],
        ['1ª pl.', 'ἀγαπάομεν', '{ἀγαπῶμεν}'],
        ['2ª pl.', 'ἀγαπάετε', '{ἀγαπᾶτε}'],
        ['3ª pl.', 'ἀγαπάουσι', '{ἀγαπῶσι(ν)}'],
      ],
    },
    {
      caption: T('Tabla 2 — Presente de ποιέω'),
      head: [T('Persona'), T('No contraída'), T('Contraída')],
      rows: [
        ['1ª sg.', 'ποιέω', '{ποιῶ}'],
        ['2ª sg.', 'ποιέεις', '{ποιεῖς}'],
        ['3ª sg.', 'ποιέει', '{ποιεῖ}'],
        ['1ª pl.', 'ποιέομεν', '{ποιοῦμεν}'],
        ['2ª pl.', 'ποιέετε', '{ποιεῖτε}'],
        ['3ª pl.', 'ποιέουσι', '{ποιοῦσι(ν)}'],
      ],
    },
    {
      caption: T('Tabla 3 — Presente de δηλόω'),
      head: [T('Persona'), T('No contraída'), T('Contraída')],
      rows: [
        ['1ª sg.', 'δηλόω', '{δηλῶ}'],
        ['2ª sg.', 'δηλόεις', '{δηλοῖς}'],
        ['3ª sg.', 'δηλόει', '{δηλοῖ}'],
        ['1ª pl.', 'δηλόομεν', '{δηλοῦμεν}'],
        ['2ª pl.', 'δηλόετε', '{δηλοῦτε}'],
        ['3ª pl.', 'δηλόουσι', '{δηλοῦσι(ν)}'],
      ],
    },
  ],
};
