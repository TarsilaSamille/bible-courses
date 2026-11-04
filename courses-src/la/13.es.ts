import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('La cuarta y la quinta declinaciones'),
  subtitle: T('{manus, -ūs} y {diēs, -eīs} — las dos declinaciones que cierran el sistema'),
  section: T('Declinaciones y el verbo sum'),
  body: C(`## La cuarta declinación

La cuarta reúne casi solo masculinos y neutros, y su tema termina en *-u*. El modelo es {manus, -ūs} «mano»; {manus} es ambiguo, y el género aparece en el nominativo: {manus} masculino, {manus, -ūs} neutro, como {genus} «género, estirpe» y {corpus} «cuerpo».

La vocal del tema es larga en casi todo el paradigma, y por eso el nominativo y el genitivo se parecen: {manus} frente a {manūs}. El dativo singular recibe {uī} y el ablativo {ū}, para que el genitivo {ūs} quede libre.

| Caso | Singular | Plural |
|---|---|---|
| Nom. | manŭs | manūs |
| Gen. | manūs | manuum |
| Dat. | manuī | manibus |
| Ac. | manum | manūs |
| Abl. | manū | manibus |

El acusativo plural repite el nominativo plural, como en la primera y en la segunda: {canī} «perros», {manūs} «manos».

## La quinta declinación

La quinta termina en {-ēs} y es casi toda femenina. El modelo es {diēs, diēī} «día», que puede ser masculino o femenino; {rēs, reī} «cosa, asunto», {spēs, speī} «esperanza» y {fidēs, fideī} «fe» son femeninos.

| Caso | Singular | Plural |
|---|---|---|
| Nom. | diēs | diēs |
| Gen. | diēī | diērum |
| Dat. | diēī | diēbus |
| Ac. | diem | diēs |
| Abl. | diē | diēbus |

Solo el acusativo {diem} y el ablativo {diē} se diferencian, y ambos son breves: las formas largas son el genitivo y el dativo {diēī}.

## Lectura

{Īn manūs tuās} «en tus manos» (Lc 23:46) — preposición más ablativo de lugar sin movimiento, la frase litúrgica fija. {Per omnia saecula saeculōrum} «por todos los siglos de los siglos» — plural de cuarta con genitivo sobre genitivo. {Fidēs, spēs, caritās} «fe, esperanza, amor» (1Co 13:13) — tres sustantivos de quinta seguidos.

## Lo esencial

Cuarta y quinta cierran el sistema sin inventar terminaciones nuevas: {-ibus} repite la tercera, {-ēs} no repite nada, y todo plural sigue en {-s}.`),
  vocab: [
    V('manus', 'manus', 'mano (nom. sg.)'),
    V('manūs', 'manus', 'de la mano (gen. sg.) / manos (nom. y ac. pl.)'),
    V('manuī', 'manus', 'a la mano (dat. sg.)'),
    V('manum', 'manus', 'la mano (ac. sg.)'),
    V('manuum', 'manus', 'de las manos (gen. pl.)'),
    V('manibus', 'manus', 'a las manos (dat. pl.) / con las manos (abl. pl.)'),
    V('cornu', 'cornu', 'cuerno, cuerno de la luna'),
    V('genus', 'genus', 'género, estirpe, clase'),
    V('corpus', 'corpus', 'cuerpo'),
    V('diēs', 'dies', 'día'),
    V('diēī', 'dies', 'del día (gen. sg.)'),
    V('diēbus', 'dies', 'en los días (dat./abl. pl.)'),
    V('rēs', 'res', 'cosa, asunto, realidad'),
    V('spēs', 'spes', 'esperanza'),
    V('fidēs', 'fides', 'fe, confianza, fidelidad'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {in manibus}, ¿qué caso es {manibus} y por qué?'),
    options: [
      T('Ablativo plural: tras {in}, el lugar donde lleva ablativo'),
      T('Dativo plural: {in} rige el dativo'),
      T('Genitivo plural: {-ibus} es genitivo en esta declinación'),
      T('Acusativo plural: el nominativo y el acusativo son iguales'),
    ],
    answer: 0,
    hint: T('Regla §2: {-ibus} es ambiguo, pero la preposición lo resuelve.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Genitivo singular de {manus}: man_'),
      answer: 'ūs',
      hint: T('Es la terminación del nominativo, pero con la vocal larga.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase usa ablativo de lugar?'),
      options: [
        T('{in manibus tuīs} — en tus manos'),
        T('{manum tuam tenet} — sostiene tu mano'),
        T('{manus puerī} — la mano del niño'),
        T('{manibus dat} — dio las manos'),
      ],
      answer: 0,
      hint: T('Regla §3: lugar donde pide {in} más ablativo.'),
    },
    {
      kind: 'fill',
      prompt: T('Traduce {fīdēs, spēs, caritās}.'),
      answer: 'faith, hope, love',
      hint: T('Tres sustantivos femeninos de la quinta declinación.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la forma con su caso'),
      pairs: [
        { a: T('manuī'), b: T('dativo singular (4.ª)') },
        { a: T('manū'), b: T('ablativo singular (4.ª)') },
        { a: T('diēī'), b: T('genitivo singular (5.ª)') },
        { a: T('manuum'), b: T('genitivo plural (4.ª)') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('La cuarta declinación lleva temas en {-u}: {manus}, {genus}, {corpus}, {cornu}.'),
    },
    {
      n: '2',
      text: T(
        'Dativo y ablativo plural terminan en {-ibus}, como en la primera y la tercera: {puellīs}, {rēgibus}, {manibus}.',
      ),
    },
    {
      n: '3',
      text: T(
        'La quinta declinación es casi toda femenina y tiene temas en {-ē}: {rēs, reī}, {spēs, speī}, {fidēs, fideī}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Nominativo y acusativo plural coinciden en toda declinación; la vocal final marca la función: {puellās} acusativo, {puellae} genitivo o dativo.',
      ),
    },
    {
      n: '5',
      text: T(
        'Solo {diēs} y pocos nombres ({sēs, merīdiēs, aliēs}...) son ambiguos en género; los demás lo revelan por el nominativo.',
      ),
    },
  ],
  notes: [
    {
      label: T('La barra marca vocal larga, no una sílaba extra.'),
      text: T(
        'Los textos de la Vulgata aparecen sin barras. Están aquí para que veas que {manus} y {manūs} comparten vocal y sílaba, pero difieren en peso. Quien transcribe latín hoy suele omitirlas.',
      ),
    },
    {
      label: T('La quinta declinación es casi una tumba.'),
      text: T(
        'De miles de sustantivos que existieron, la quinta conserva muy pocos en uso: {rēs}, {spēs}, {fidēs}, {quiēs} «quieto», {pēs} «pie», {sēs} «sede» y {āles} «ala». Forman el {fidēs, spēs, caritās} de 1 Corintios 13 y el {quiēs} de las bienaventuranzas. Aprende el paradigma entero y una declinación completa sale casi gratis.',
      ),
    },
  ],
  examples: [
    { text: 'in manūs tuās', gloss: T('en tus manos (Lc 23:46)') },
    {
      text: 'per omnia saecula saeculōrum',
      gloss: T('por todos los siglos de los siglos (litúrgico)'),
    },
    { text: 'fīdēs, spēs, caritās', gloss: T('fe, esperanza, amor (1Co 13:13)') },
    { text: 'manus tuae', gloss: T('tus manos (gen. pl.)') },
    { text: 'diei illius', gloss: T('de aquel día (gen. sg. + gen. sg.)') },
    { text: 'rēs pūblica', gloss: T('el Estado, la cosa pública') },
    { text: 'spēs nostra', gloss: T('nuestra esperanza (nom. sg.)') },
    { text: 'in manibus eius', gloss: T('en sus manos (posesor masculino)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Cuarta declinación: {manus, -ūs}'),
      head: [T('Caso'), T('Singular'), T('Plural')],
      rows: [
        ['Nominativo', 'manus', 'manūs'],
        ['Vocativo', 'manus', 'manūs'],
        ['Genitivo', 'manūs', 'manuum'],
        ['Dativo', 'manuī', 'manibus'],
        ['Acusativo', 'manum', 'manūs'],
        ['Ablativo', 'manū', 'manibus'],
      ],
    },
    {
      caption: T('Tabla 2 — Quinta declinación: {diēs, -eīs}'),
      head: [T('Caso'), T('Singular'), T('Plural')],
      rows: [
        ['Nominativo', 'diēs', 'diēs'],
        ['Vocativo', 'diēs', 'diēs'],
        ['Genitivo', 'diēī', 'diērum'],
        ['Dativo', 'diēī', 'diēbus'],
        ['Acusativo', 'diem', 'diēs'],
        ['Ablativo', 'diē', 'diēbus'],
      ],
    },
  ],
};
