import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('1st declension — feminines'),
  subtitle: T('ἀλήθεια, δόξα, ὥρα: el genitivo revela el grupo'),
  section: T('El sustantivo'),
  body: C(`## Tres declinaciones, un punto de partida

El griego tiene tres declinaciones: tres familias de terminaciones de sustantivos y adjetivos.El primero reúne sustantivos mayoritariamente femeninos, y comenzamos aquí: sus terminaciones son regulares, y el vocabulario de este grupo ({ἀλήθεια} "verdad", {δόξα} "gloria", {ζωή} "vida", {ἐκκλησία} "iglesia") se encuentra entre los más frecuentes del Nuevo Testamento.

El truco para identificar el grupo de un sustantivo es fijarse en el genitivo singular: termina en {-ης} o {-ας}.El diccionario siempre imprime el genitivo junto al nominativo ({ἀλήθεια, -ας}) precisamente porque esa forma elimina toda duda.

## Femeninos en -η y -α

Hay dos subgrupos femeninos.Las palabras en {-η} ({ἀλήθεια}, {γραφή}, {φωνή}) mantienen {-η} en todo el singular: genitivo {ἀληθείας}, dativo {ἀληθείᾳ}, acusativo{ἀλήθειαν}.Tenga en cuenta el subíndice iota en el dativo ({ᾳ}), la marca registrada de la primera declinación.

Palabras en {-α} divididas.Después de {ρ}, {ε} o {ι} (el llamado alfa puro), {-α} se mantiene en singular: {ἡμέρα, ἡμέρας}, {δόξα, δόξης}, {οἰκία}.En otros lugares se alterna el singular: nominativo y acusativo en {-α}, genitivo y dativo en {-η}: {θάλασσα, θαλάσσης}, {ὥρα, ὥρας}.Esta alternancia es una herencia del dialecto jónico y aparece constantemente en el Nuevo Testamento.

## Un plural para todos

Buenas noticias: en plural, los tres grupos femeninos son idénticos: nominativo {-αι}, genitivo {-ῶν}, dativo {-αις}, acusativo {-ας}.El genitivo plural {-ῶν}, con omega y circunflejo, es inconfundible y recurrente en la 2ª declinación y en los adjetivos.Memorice el plural una vez y servirá para cada palabra de este capítulo.

## Masculinos de la 1ª declinación.

Algunos masculinos usan terminaciones de primera declinación: las de {-ας} ({προφήτης, -ου}, {νεανίας, -ου}) y las de {-ης} ({μαθητής, -ου}).El nominativo singular termina en {-ς}, como en la segunda declinación masculina, pero el genitivo singular termina en {-ου}; una vez más, el genitivo revela el grupo.El plural de estos masculinos coincide con el femenino ({μαθηταί, μαθητῶν}).`),
  vocab: [
    V('ἀλήθεια', 'ἀλήθεια', 'verdad'),
    V('ἀληθείας', 'ἀλήθεια', 'de verdad (gen.)'),
    V('δόξα', 'δόξα', 'gloria'),
    V('ζωή', 'ζωή', 'vida'),
    V('φωνή', 'φωνή', 'voz'),
    V('γραφή', 'γραφή', 'escritura, Escritura'),
    V('ἐκκλησία', 'ἐκκλησία', 'iglesia'),
    V('βασιλεία', 'βασιλεία', 'reino'),
    V('ἡμέρα', 'ἡμέρα', 'día'),
    V('ὥρα', 'ὥρα', 'hora'),
    V('εἰρήνη', 'εἰρήνη', 'paz'),
    V('ψυχή', 'ψυχή', 'alma, vida'),
    V('μαθητής', 'μαθητής', 'disciple'),
    V('μαθητοῦ', 'μαθητής', 'of the disciple (gen.)'),
    V('προφήτης', 'προφήτης', 'profeta'),
    V('νεανίας', 'νεανίας', 'joven'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es el genitivo singular de "ἀλήθεια"?'),
    options: [T('ἀληθείας'), T('ἀληθεῖαι'), T('ἀληθείᾳ'), T('ἀλήθειαν')],
    answer: 0,
    hint: T('Una palabra -η: el genitivo singular termina en -ης.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el dativo plural: ταῖς ___ ("a las verdades").'),
      answer: 'ἀληθείαις',
      hint: T('El dativo plural de la primera declinación termina en -αις.'),
    },
    {
      kind: 'choose',
      prompt: T('"ὥρας" (de ὥρα) es un genitivo en -ας porque…'),
      options: [
        T('ὥρα has pure alpha'),
        T('ὥρα has impure alpha (after ω)'),
        T('ὥρα is masculine'),
        T('ὥρα es la 2da declinación'),
      ],
      answer: 1,
      hint: T('Alfa puro sólo después de ρ, ε, ι — regla §2.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada forma con su caso.'),
      pairs: [
        { a: 'μαθητοῦ', b: 'gen. sg. masc.' },
        { a: 'μαθητῇ', b: 'dat. sg. masc.' },
        { a: 'μαθηταί', b: 'nom. pl. masc.' },
        { a: 'ἀληθειῶν', b: 'gen. pl. fem.' },
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
        'El genitivo singular identifica el grupo: {-ης} para palabras -η e impuras-α;{-ας} para palabras puras-α.',
      ),
    },
    {
      n: '2',
      text: T(
        'Alfa es puro después de ρ, ε, ι ({ἡμέρα}, {δόξα}, {οἰκία});en otros lugares el singular alterna -α/-η ({ὥρα, ὥρας}).',
      ),
    },
    {
      n: '3',
      text: T(
        'El dativo singular de la primera declinación lleva un subíndice de iota: {ἀληθείᾳ}, {δόξῃ}, {μαθητῇ}.',
      ),
    },
    {
      n: '4',
      text: T(
        "Masculines in {-ας}/{-ης} make the genitive in {-ου} ({μαθητοῦ}, {προφήτου}) and a plural identical to the feminines'.",
      ),
    },
    {
      n: '5',
      text: T(
        'El plural es uno para todo el capítulo: {-αι}, {-ῶν}, {-αις}, {-ας}.El {-ῶν} con circunflejo no se puede confundir con nada.',
      ),
    },
  ],
  notes: [
    {
      label: T('Cómo memorizar:'),
      text: T(
        'Memoriza siempre el par nominativo + genitivo ({γραφή, -ῆς}; {θάλασσα, -ης}; {μαθητής, -οῦ}).Sólo el genitivo distingue lo puro de lo impuro -α, y lo masculino de lo femenino; sólo el nominativo engaña.',
      ),
    },
    {
      label: T('En el texto:'),
      text: T(
        '{ἡμέρα} aparece más de 300 veces en el Nuevo Testamento, casi siempre en acusativo de duración ({νύκτα καὶ ἡμέραν}).Reconocer el caso de memoria ahorra viajes de diccionario.',
      ),
    },
  ],
  examples: [
    { text: '{ἡ ἀλήθεια ἐλευθεροῖ}', gloss: T('la verdad hace libres (cf. Juan 8:32)') },
    { text: '{δόξα τῷ θεῷ}', gloss: T('gloria a Dios (dativo de interés)') },
    { text: '{ἡ βασιλεία τῶν οὐρανῶν}', gloss: T('el reino de los cielos (genitivo plural)') },
    { text: '{ἡμέραν καὶ νύκτα}', gloss: T('día y noche (acusativo de duración)') },
    { text: '{σὺν τῇ ἐκκλησίᾳ}', gloss: T('con la iglesia (dativo con subíndice iota)') },
    { text: '{φωνὴ βοῶντος}', gloss: T('voz del que clama (genitivo de la fuente; Marcos 1:3)') },
    { text: '{ὁ μαθητὴς βλέπει}', gloss: T('the disciple sees (masculine nominative singular)') },
    { text: '{οἱ προφῆται λέγουσιν}', gloss: T('the prophets say (nominative plural)') },
    { text: '{ταῖς ψυχαῖς}', gloss: T('a las almas (dativo femenino plural)') },
    { text: '{τὴν εἰρήνην}', gloss: T('paz (acusativo: {εἰρήνη, -ης})') },
  ],
  tables: [
    {
      caption: T('Table 1 — Feminine in -η: ἡ ἀλήθεια'),
      head: [T('Caso'), T('Singular'), T('Plural')],
      rows: [
        [T('Nominativo'), '{ἡ ἀλήθεια}', '{αἱ ἀλήθειαι}'],
        [T('Genitivo'), 'τῆς ἀληθείας', 'τῶν ἀληθειῶν'],
        [T('Dativo'), 'τῇ ἀληθείᾳ', 'ταῖς ἀληθείαις'],
        [T('Acusativo'), 'τὴν ἀλήθειαν', 'τὰς ἀληθείας'],
      ],
    },
    {
      caption: T('Table 2 — Feminine in -α: ἡ δόξα and ἡ ὥρα'),
      head: [
        T('Caso'),
        {
          0: 'α',
          1: ' ',
          2: 'p',
          3: 'u',
          4: 'r',
          5: 'o',
          6: ' ',
          7: '(',
          8: 'δ',
          9: 'ό',
          10: 'ξ',
          11: 'α',
          12: ')',
        },
        {
          0: 'α',
          1: ' ',
          2: 'i',
          3: 'm',
          4: 'p',
          5: 'u',
          6: 'r',
          7: 'o',
          8: ' ',
          9: '(',
          10: 'ὥ',
          11: 'ρ',
          12: 'α',
          13: ')',
        },
      ],
      rows: [
        [T('Nominativo'), '{ἡ δόξα}', '{ἡ ὥρα}'],
        [T('Genitivo'), 'τῆς δόξης', 'τῆς ὥρας'],
        [T('Dativo'), 'τῇ δόξῃ', 'τῇ ὥρᾳ'],
        [T('Acusativo'), 'τὴν δόξαν', 'τὴν ὥραν'],
      ],
    },
    {
      caption: T('Tabla 3 — Masculino en -ης: ὁ μαθητής'),
      head: [T('Caso'), T('Singular'), T('Plural')],
      rows: [
        [T('Nominativo'), '{ὁ μαθητής}', '{οἱ μαθηταί}'],
        [T('Genitivo'), 'τοῦ μαθητοῦ', 'τῶν μαθητῶν'],
        [T('Dativo'), 'τῷ μαθητῇ', 'τοῖς μαθηταῖς'],
        [T('Acusativo'), 'τὸν μαθητήν', 'τοὺς μαθητάς'],
      ],
    },
  ],
};
