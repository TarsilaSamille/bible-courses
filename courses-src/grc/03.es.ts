import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  title: T('2da declinación'),
  subtitle: T('λόγος and ἔργον: masculines in -ος, neuters in -ον'),
  section: T('El sustantivo'),
  body: C(`## La declinación de los sustantivos -ος

La segunda declinación contiene la mayoría de los sustantivos masculinos del Nuevo Testamento: {λόγος} "palabra", {ἄνθρωπος} "ser humano", {θεός} "Dios", {κόσμος} "mundo", {οὐρανός} "cielo",{ἀπόστολος} "apóstol".El nominativo singular termina en {-ς} y la raíz termina en ómicrón; por lo tanto, todas las terminaciones comienzan con {ο}: genitivo {-ου}, dativo {-ῳ}, acusativo {-ον}.

En plural, el nominativo masculino termina en {-οι} ({λόγοι}), una forma que reconocerás de lejos después de leer un poco.El genitivo plural {-ων} y el dativo plural {-οις} coinciden con la 1.ª declinación con la vocal temática {ο}.Compare {τῶν λόγων} con {τῶν ἀληθειῶν} del capítulo anterior: la estructura es idéntica, solo cambia la vocal.

## Neutros en -ον

Todos los neutros más comunes pertenecen a la 2ª declinación: {ἔργον} "hecho", {τέκνον} "niño", {δῶρον} "regalo", {ἱερόν} "templo", {πρόβατον} "oveja".La regla de oro de los neutros se aplica aquí en su totalidad: nominativo idéntico a acusativo en ambos números y plural en {-α} — {τὰ ἔργα} "los hechos".

En la práctica, esta regla resuelve ambigüedades: al encontrar {τὸ τέκνον}, sabes que puede ser sujeto u objeto, y el verbo te dirá cuál.Mientras que {τὰ τέκνα} sólo puede ser nominativo o acusativo plural, nunca genitivo o dativo.El {-α} final es la firma neutra.

## Orden de las palabras

El griego no depende del orden para marcar sujeto y objeto: los casos hacen ese trabajo.De modo que el orden es más libre que en inglés y conlleva énfasis: el elemento enfático suele aparecer primero.En {τὸν λόγον βλέπω}, el objeto precede al verbo porque el foco está en él ("es LA PALABRA que veo").

Hay, sin embargo, una tendencia estable: artículo antes del sustantivo, preposición antes de su complemento y el verbo a menudo al final de la narración solemne (imitando el hebreo de la Septuaginta).No memorices reglas de orden rígidas;lea los casos y deje que surja el énfasis.

## Nu móvil

Ciertas palabras obtienen un final móvil {ν} (nu eufónico) antes de una vocal o al final de la oración: {λέγουσιν} para {λέγουσι}, {ἐστίν} para {ἐστί}.El dativo plural {-σι(ν)} y los verbos en tercera persona del plural usan este {ν} a menudo.No cambia ni de sentido ni de caso: es mera eufonía y los manuscritos varían.Al analizar el formulario, ignore el final móvil {ν}.`),
  vocab: [
    V('λόγος', 'λόγος', 'palabra'),
    V('λόγου', 'λόγος', 'de la palabra (gen.)'),
    V('λόγον', 'λόγος', 'la palabra (acc.)'),
    V('ἄνθρωπος', 'ἄνθρωπος', 'human being'),
    V('θεός', 'θεός', 'Dios'),
    V('κόσμος', 'κόσμος', 'mundo'),
    V('οὐρανός', 'οὐρανός', 'cielo'),
    V('νόμος', 'νόμος', 'ley'),
    V('ἀπόστολος', 'ἀπόστολος', 'apóstol'),
    V('δοῦλος', 'δοῦλος', 'sirviente, esclavo'),
    V('ἔργον', 'ἔργον', 'trabajo, hecho'),
    V('ἔργα', 'ἔργον', 'obras (pl.)'),
    V('τέκνον', 'τέκνον', 'child'),
    V('δῶρον', 'δῶρον', 'regalo'),
    V('ἱερόν', 'ἱερόν', 'templo'),
    V('οἶκος', 'οἶκος', 'casa'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('¿Cuál es el acusativo singular de "ὁ ἄνθρωπος"?(escriba en griego)'),
    answer: 'ἄνθρωπον',
    hint: T('2ª declinación masculina: añadir {-ον} a la raíz.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿"τὰ ἔργα" es en qué caso y número?'),
      options: [
        T('Nominative or accusative plural'),
        T('Genitive singular'),
        T('Dative plural'),
        T('Vocativo singular'),
      ],
      answer: 0,
      hint: T('Plural neutro en -α: sólo puede ser nominativo o acusativo (regla §2).'),
    },
    {
      kind: 'fill',
      prompt: T('Completa el genitivo plural: τῶν ___ ("de las palabras", de λόγος).'),
      answer: 'λόγων',
      hint: T('Genitivo plural de segunda declinación: raíz + -ων.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada forma con su caso (singular).'),
      pairs: [
        { a: 'λόγου', b: 'genitivo' },
        { a: 'λόγῳ', b: 'dativo' },
        { a: 'ἔργῳ', b: 'dativo neutro' },
        { a: 'λόγους', b: 'acusativo plural' },
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
        '2da declinación masculina: nominativo y {-ς}, genitivo en {-ου}.El tallo termina en ómicrón en todas partes.',
      ),
    },
    {
      n: '2',
      text: T(
        'Regla de oro de los neutros: nominativo = acusativo en ambos números;plural siempre en {-α}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Los casos –no el orden– marcan al sujeto y al objeto.Un orden inesperado indica énfasis, no una nueva función.',
      ),
    },
    {
      n: '4',
      text: T(
        'La ν final en {λέγουσιν}, {ἐστίν}, {-σι(ν)} es móvil y eufónica: ignórala en el análisis morfológico.',
      ),
    },
    {
      n: '5',
      text: T(
        'Genitivo plural {-ων} y dativo plural {-οις}: los mismos espacios que el artículo (τῶν, τοῖς) con la raíz del sustantivo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Amigo falso:'),
      text: T(
        '{ὁ νόμος} significa "ley", no "nome";{ἡ δόξα} es "gloria".Desconfíe de los finales familiares que conllevan sentidos extraños.',
      ),
    },
    {
      label: T('En el texto:'),
      text: T(
        '{ἄνθρωπος} casi nunca significa "hombre" masculino en el Nuevo Testamento; significa "ser humano".{ὁ υἱὸς τοῦ ἀνθρώπου} es "el Hijo del Hombre", el título de Jesús, no una descripción de género.',
      ),
    },
  ],
  examples: [
    { text: '{ἐν ἀρχῇ ἦν ὁ λόγος}', gloss: T('en el principio era el Verbo (Juan 1:1)') },
    { text: '{ὁ θεὸς ἀγαπᾷ τὸν κόσμον}', gloss: T('Dios ama al mundo (acusativo como objeto)') },
    { text: '{μακάριοι οἱ πτωχοί}', gloss: T('blessed are the poor (Matt 5:3)') },
    { text: '{τὰ τέκνα τοῦ θεοῦ}', gloss: T('los hijos de Dios (plural neutro + genitivo)') },
    { text: '{ἐκ τῶν ἔργων}', gloss: T('por los hechos (genitivo neutro plural)') },
    { text: '{τοῖς ἀνθρώποις}', gloss: T('a los hombres (dativo plural)') },
    { text: '{οἱ οὐρανοὶ καὶ ἡ γῆ}', gloss: T('los cielos y la tierra (sujeto compuesto)') },
    { text: '{τὸν ἄρτον ἡμῶν}', gloss: T('nuestro pan (acusativo + posesivo; Mateo 6:11)') },
    { text: '{διὰ τοῦ νόμου}', gloss: T('a través de la ley (preposición + genitivo)') },
    { text: '{λέγουσιν αὐτῷ}', gloss: T('they say to him (verb + dative; note the movable ν)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Masculine: ὁ λόγος'),
      head: [T('Caso'), T('Singular'), T('Plural')],
      rows: [
        [T('Nominativo'), '{ὁ λόγος}', '{οἱ λόγοι}'],
        [T('Genitivo'), 'τοῦ λόγου', 'τῶν λόγων'],
        [T('Dativo'), 'τῷ λόγῳ', 'τοῖς λόγοις'],
        [T('Acusativo'), '{τὸν λόγον}', 'τοὺς λόγους'],
      ],
    },
    {
      caption: T('Table 2 — Neuter: τὸ ἔργον'),
      head: [T('Caso'), T('Singular'), T('Plural')],
      rows: [
        [T('Nominativo'), '{τὸ ἔργον}', '{τὰ ἔργα}'],
        [T('Genitivo'), 'τοῦ ἔργου', 'τῶν ἔργων'],
        [T('Dativo'), 'τῷ ἔργῳ', 'τοῖς ἔργοις'],
        [T('Acusativo'), '{τὸ ἔργον}', '{τὰ ἔργα}'],
      ],
    },
  ],
};
