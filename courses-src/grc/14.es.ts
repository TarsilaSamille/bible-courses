import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  title: T('3ra declinación'),
  subtitle: T('σάρξ, πνεῦμα, πατήρ: el genitivo revela la raíz'),
  section: T('El sustantivo'),
  body: C(`## La regla de oro

La tercera declinación reúne todas las raíces consonantes, trayendo algunas de las palabras más importantes del Nuevo Testamento: {σάρξ} "carne", {πνεῦμα} "espíritu", {πατήρ} "padre", {μήτηρ} "madre", {ἀνήρ} "hombre, marido", {γυνή} "mujer",{χείρ} "mano", {σῶμα} "cuerpo", {ὄνομα} "nombre", {αἷμα} "sangre".

La regla de oro (Machen): suelta {-ος} del GENITIVO para encontrar la raíz.{σαρκός} menos {-ος} = {σαρκ-} — y de esa raíz provienen todas las formas: {σαρκί} (dat.), {σάρκα} (acc.), {σάρκες} (nom. pl.), {σαρκῶν} (gen. pl.).El nominativo por sí solo engaña ({σάρξ} oculta el {κ}; {πνεῦμα} oculta el {τ});el genitivo nunca miente.Por lo tanto, el diccionario siempre enumera el par: {σάρξ, σαρκός}.

## Stop-stems: σάρξ como modelo

En raíces oclusivas ({κ}, {γ}, {χ}, {π}, {β}, {φ}, {τ}, {δ}, {θ}), el nominativo singular termina en {-ς} y el grupo consonante + {ς} produce la forma visible: {σαρκ-ς} → {σάρξ} (κ+ς=ξ),{ἐλπιδ-ς} → {ἐλπίς} (δ+ς=ς, δ cayendo).En dativo plural, la terminación universal de la tercera declinación es {-σι(ν)}: {σαρκ-σί} → {σαρξί(ν)}, {ἐλπίσι(ν)}, {πᾶσι(ν)} (de {πᾶς}).

El acusativo singular cambia {-ς} por {-α}: {σάρκα}, {ἐλπίδα}, {χάριτα} ({χάρις, -ιτος}).El acusativo plural termina en {-ας}: {σάρκας}.Y el genitivo plural {-ῶν} con circunflejo, un viejo amigo de los caps.2-3, cierra el paradigma.

## Neutros en -μα

Los neutros en {-μα} ({πνεῦμα}, {σῶμα}, {ὄνομα}, {αἷμα}, {ῥῆμα} "palabra hablada") forman el grupo de tercera declinación más dócil: raíz {-ματ-} ({πνεύματος} →{πνευματ-}), nominativo y acusativo idénticos, plural en {-α}: la regla de oro del neutro una vez más.Paradigma: {πνεῦμα, πνεύματος, πνεύματι, πνεῦμα / πνεύματα, πνευμάτων, πνεύμασι(ν),πνεύματα}.

En la lectura, {ἐν πνεύματι} "en espíritu" (dativo de esfera) y {τὸ πνεῦμά μου} "mi espíritu" (Lucas 1:47) aparecen docenas de veces.Reconocer {-ματι} de memoria acelera a través de los Evangelios y de Pablo.

## El parentesco y los famosos irregulares

{πατήρ, πατρός} "padre", {μήτηρ, μητρός} "madre", {θυγάτηρ, θυγατρός} "hija", {ἀνήρ, ἀνδρός}"hombre" y {γυνή, γυναικός} "mujer" tienen raíces graduadas ({πατερ-/πατρ-}, {ἀνερ-/ἀνδρ-}, {γυναικ-}): vocal completa en el nominativo, raíz reducida en otros lugares.El acusativo lo revela: {πατέρα}, {μητέρα}, {ἄνδρα}, {γυναῖκα}.

Dos vocativos merecen su propio altar: {Πάτερ} "¡Padre!"(Mateo 6:9, {Πάτερ ἡμῶν}) y {ἄνδρες} "¡señores!"(plural de {ἀνήρ}, fórmula del habla en Hechos: {ἄνδρες ἀδελφοί} "¡hermanos!").`),
  vocab: [
    V('σάρξ', 'σάρξ', 'flesh'),
    V('σαρκός', 'σάρξ', 'of flesh'),
    V('σαρκί', 'σάρξ', 'in flesh'),
    V('σάρκες', 'σάρξ', 'fleshes (pl.)'),
    V('πνεῦμα', 'πνεῦμα', 'spirit'),
    V('πνεύματος', 'πνεῦμα', 'of the spirit'),
    V('πνεύματι', 'πνεῦμα', 'in spirit'),
    V('σῶμα', 'σῶμα', 'body'),
    V('ὄνομα', 'ὄνομα', 'name'),
    V('αἷμα', 'αἷμα', 'blood'),
    V('πατήρ', 'πατήρ', 'father'),
    V('πατρός', 'πατήρ', 'of the father'),
    V('Πάτερ', 'πατήρ', 'Father! (voc.)'),
    V('μήτηρ', 'μήτηρ', 'mother'),
    V('γυνή', 'γυνή', 'woman'),
    V('ἀνήρ', 'ἀνήρ', 'man, husband'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es la raíz de "σάρξ" y cómo se encuentra?'),
    options: [
      T('σαρκ-, dropping -ος from genitive σαρκός'),
      T('σαρ-, dropping -ξ from the nominative'),
      T('σαρκς-, adding nominative and genitive'),
      T('σα-, first syllable'),
    ],
    answer: 0,
    hint: T('Regla de oro: la raíz proviene del genitivo - regla §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el dativo plural: σαρξ___ ("en carnes").'),
      answer: 'ίν',
      hint: T('Dativo plural universal de tercera declinación: -σι(ν).'),
    },
    {
      kind: 'choose',
      prompt: T('"πνεύματα" sólo puede ser…'),
      options: [
        T('Nominative or accusative plural (neuter in -α)'),
        T('Genitive singular'),
        T('Dative plural'),
        T('Vocative singular'),
      ],
      answer: 0,
      hint: T('El plural neutro termina en -α: la regla de oro de los neutros.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada forma con su caso.'),
      pairs: [
        { a: 'πατρί', b: 'dativo' },
        { a: 'πατέρα', b: 'acusativo' },
        { a: 'Πάτερ', b: 'vocativo' },
        { a: 'πνεύμασι', b: 'dativo plural' },
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
        'Regla de oro: la raíz proviene del genitivo (caída -ος).Memorizar pares ({νύξ, νυκτός}; {χάρις, χάριτος}).',
      ),
    },
    {
      n: '2',
      text: T(
        'Dativo universal plural: -σι(ν) ({σάρξ} → {σαρξίν}, {πατήρ} → {πατράσιν}, {πᾶς} → {πᾶσιν}).',
      ),
    },
    {
      n: '3',
      text: T('Acusativo singular en -α ({σάρκα}, {ἐλπίδα});Acusativo plural en -ας ({σάρκας}).'),
    },
    {
      n: '4',
      text: T(
        'Neutros en -μα: raíz -ματ-, nom.= acc., plural en -α.El grupo de tercera declinación más regular.',
      ),
    },
    {
      n: '5',
      text: T(
        'El parentesco grada la raíz (πατερ-/πατρ-);acusativo ({πατέρα}, {ἄνδρα}) y vocativo ({Πάτερ}) delatan la forma.',
      ),
    },
  ],
  notes: [
    {
      label: T('How to parse:'),
      text: T(
        'Frente a una forma desconocida, elimine la terminación candidata (-ος, -ι, -α, -ες, -ῶν, -σι) y pruebe el resto como raíz: {νυκτ-} + {-ός} = {νυκτός} → {νύξ} "noche".Tres segundos de prueba ahorran tres minutos de diccionario.',
      ),
    },
    {
      label: T('γυνή vs γύναι:'),
      text: T(
        'El vocativo de {γυνή} es {γύναι} — Jesús lo usa con María (Juan 2:4; 19:26).No es mala educación: el vocativo normal de la palabra, nuestra "señora".',
      ),
    },
  ],
  examples: [
    { text: '{ἐν σαρκὶ ἐληλυθότα}', gloss: T('come in flesh (dative; 1 John 4:2)') },
    { text: '{τὸ πνεῦμά μου}', gloss: T('my spirit (Luke 1:47)') },
    { text: '{Πάτερ ἡμῶν}', gloss: T('our Father (vocative; Matt 6:9)') },
    { text: '{ἐν πνεύματι}', gloss: T('in spirit (dative of sphere)') },
    { text: '{τὰ ῥήματα}', gloss: T('the spoken words (neuter plural)') },
    { text: '{διὰ τοῦ αἵματος}', gloss: T('through the blood (genitive; Heb 9:12)') },
    { text: '{ἄνδρες ἀδελφοί}', gloss: T('brothers! (plural vocative; Acts 2:29)') },
    { text: '{τῇ γυναικί}', gloss: T('to the woman (dative; John 4:27)') },
    { text: '{ἐπὶ χεῖρας}', gloss: T('onto hands (accusative plural of χείρ)') },
    { text: '{πᾶσιν ἀνθρώποις}', gloss: T('to all men (dative plural; 1 Tim 2:4)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Vástago de parada: ἡ σάρξ'),
      head: [T('Caso'), T('Singular'), T('Plural')],
      rows: [
        [T('Nominativo'), '{σάρξ}', '{σάρκες}'],
        [T('Genitivo'), '{σαρκός}', '{σαρκῶν}'],
        [T('Dativo'), '{σαρκί}', '{σαρξί(ν)}'],
        [T('Acusativo'), '{σάρκα}', 'σάρκας'],
      ],
    },
    {
      caption: T('Tabla 2 — Neutro en -μα: τὸ πνεῦμα'),
      head: [T('Caso'), T('Singular'), T('Plural')],
      rows: [
        [T('Nominativo'), '{πνεῦμα}', '{πνεύματα}'],
        [T('Genitivo'), '{πνεύματος}', 'πνευμάτων'],
        [T('Dativo'), '{πνεύματι}', 'πνεύμασι(ν)'],
        [T('Acusativo'), '{πνεῦμα}', '{πνεύματα}'],
      ],
    },
    {
      caption: T('Tabla 3 — Parentesco: ὁ πατήρ y ἡ γυνή'),
      head: [
        T('Caso'),
        { 0: 'π', 1: 'α', 2: 'τ', 3: 'ή', 4: 'ρ' },
        { 0: 'γ', 1: 'υ', 2: 'ν', 3: 'ή' },
      ],
      rows: [
        [T('Nominativo'), '{πατήρ}', '{γυνή}'],
        [T('Genitivo'), '{πατρός}', 'γυναικός'],
        [T('Dativo'), '{πατρί}', 'γυναικί'],
        [T('Acusativo'), '{πατέρα}', 'γυναῖκα'],
        [T('Vocativo'), '{Πάτερ}', 'γύναι'],
      ],
    },
  ],
};
