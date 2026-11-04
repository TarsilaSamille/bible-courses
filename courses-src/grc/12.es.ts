import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('Verbos irregulares'),
  subtitle: T('εἰμί, οἶδα, φημί: los tres que encontrarás cada día'),
  section: T('El verbo'),
  body: C(`## Por qué los más usados son los más extraños

En los idiomas, los verbos más frecuentes son los más irregulares: por puro uso se resisten a la regularización ("to be", "to go" en inglés; ser/estar/ir en portugués).El griego no es diferente: {εἰμί} "ser", {οἶδα} "saber" y {φημί} "decir" escapan a los paradigmas y, precisamente, por eso aparecen en casi todas las páginas del Nuevo Testamento.Memorizar los tres es la inversión de mayor rendimiento del curso.

## εἰμί: ser

{εἰμί} es atemático: une la raíz directamente a las terminaciones, sin vocal temática.Presente: {εἰμί, εἶ, ἐστί(ν), ἐσμέν, ἐστέ, εἰσί(ν)}.Tenga en cuenta que {ἐστί} pierde su acento en ciertas posiciones (volviéndose enclítico), un detalle de pronunciación que los manuscritos registran de manera inconsistente.

El imperfecto usa aumento temporal en la raíz {ἐσ-}: {ἤμην, ἦς, ἦν, ἦμεν, ἦτε, ἦσαν}.{ἦν} ("era") abre el prólogo de Juan ({ἐν ἀρχῇ ἦν ὁ λόγος}) y innumerables narraciones.El futuro es {ἔσομαι}, una forma media con sentido activo, que anuncia la voz media del cap.17.

Como referencia: imperativo {ἔστω} "¡déjalo ser!"(3er sg.; Mateo 5:37), infinitivo {εἶναι}, participio {ὤν, οὖσα, ὄν} ("ser" - crucial en la lectura, cap. 21).

## οἶδα: lo perfecto con sentido presente

{οἶδα} "Yo sé" es, en la forma, un perfecto (raíz {ἰδ-} alargada a {οι-}): pero significa presente, porque "haber visto" equivale a "saber".Paradigma: {οἶδα, οἶδας, οἶδε(ν), οἴδαμεν, οἴδατε, οἴδασι(ν)}.El pluscuamperfecto {ᾔδη} "Sabía" y el futuro {εἰδήσω} "Sabré" completan el cuadro.

La lógica "perfecto = estado presente resultante" regresa en el cap.15 para todos los verbos.{οἶδα} es el caso límite: tan lexicalizado como presente que hizo crecer su propio futuro.Mantén la fórmula: ver (aoristo {εἶδον}) → haber visto = saber ({οἶδα}).

## φημί: decir en discurso directo

{φημί} "Digo, afirmo" es atemático en presente: {φημί, φῄς, φησί(ν), φαμέν, φατέ, φασί(ν)}.El imperfecto {ἔφην} "dijo" introduce discursos en una narrativa solemne.En el Nuevo Testamento es menos frecuente que {λέγω}, pero aparece en fórmulas de citas y en Hechos.

En la práctica, {φημί} importa menos por la frecuencia que por el patrón: enseña a reconocer los verbos atemáticos (la raíz pegada a la terminación, sin vocal temática), preparando el terreno para los verbos {-μι} del cap.12.`),
  vocab: [
    V('εἰμί', 'εἰμί', 'Soy'),
    V('εἶ', 'εἰμί', 'eres'),
    V('ἐστίν', 'εἰμί', 'él es'),
    V('ἐσμέν', 'εἰμί', 'we are'),
    V('εἰσίν', 'εἰμί', 'they are'),
    V('ἤμην', 'εἰμί', 'Era'),
    V('ἦν', 'εἰμί', 'el era'),
    V('ἦσαν', 'εἰμί', 'Ellos eran'),
    V('ἔσομαι', 'εἰμί', 'yo seré'),
    V('εἶναι', 'εἰμί', 'ser (inf.)'),
    V('ὤν', 'εἰμί', 'siendo (parte.)'),
    V('οἶδα', 'οἶδα', 'Sé'),
    V('οἶδε', 'οἶδα', 'el sabe'),
    V('ᾔδη', 'οἶδα', 'el sabia'),
    V('φημί', 'φημί', 'yo digo'),
    V('φησίν', 'φημί', 'el dice'),
    V('ἔφη', 'φημί', 'el dijo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué forma es "ἦν" (Juan 1:1) de "εἰμί"?'),
    options: [
      T('3er grado.imperfecto'),
      T('3er grado.presente'),
      T('1er sargento.futuro'),
      T('Infinitivo'),
    ],
    answer: 0,
    hint: T('Aumento temporal (ἐ→ἠ) + raíz ἐσ- contraída.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el tercer presente plural: εἰ___ ("ellos son").'),
      answer: 'σίν',
      hint: T('Tabla 1: la forma completa es εἰσίν.'),
    },
    {
      kind: 'choose',
      prompt: T('"οἶδα" significa presente ("Lo sé") aunque perfecto en la forma, porque...'),
      options: [
        T('"Haber visto" es igual a "saber" (estado resultante)'),
        T('es un error de escribano'),
        T('El perfecto griego siempre está presente'),
        T('Falta el aumento'),
      ],
      answer: 0,
      hint: T('Lógica perfecta: estado presente resultante - regla §2.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada forma con su verbo.'),
      pairs: [
        { a: 'ἦσαν', b: 'εἰμί (impf.)' },
        { a: 'ᾔδη', b: 'οἶδα (mqp.)' },
        { a: 'φησίν', b: 'φημί (pres.)' },
        { a: 'ἔσομαι', b: 'εἰμί (fut.)' },
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
        'Los verbos atemáticos ({εἰμί}, {φημί}) omiten la vocal temática: raíz + terminación directa.',
      ),
    },
    {
      n: '2',
      text: T(
        '{οἶδα} es perfecto en forma y presente en sentido ("haber visto" = "conocer").El pluscuamperfecto {ᾔδειν/ᾔδη} significa pasado.',
      ),
    },
    {
      n: '3',
      text: T(
        'El futuro de {εἰμί} es {ἔσομαι} (forma media, sentido activo).Guárdalo: se repite en promesas y profecías.',
      ),
    },
    {
      n: '4',
      text: T(
        'El participio de {εἰμί} - {ὤν, οὖσα, ὄν} "ser" - es una palabra de lectura diaria, que regresa en el cap.21.',
      ),
    },
    {
      n: '5',
      text: T(
        'Con un predicado nominal, el griego elimina {ἐστί} en presente: {μακάριοι οἱ πτωχοί} "bienaventurados [son] los pobres".',
      ),
    },
  ],
  notes: [
    {
      label: T('Pronunciación:'),
      text: T(
        '{ἐστί} mantiene el acento al final de la oración;a mitad de frase normalmente se pierde (los editores varían).Nunca dejes que la acentuación decida el análisis: la forma es la misma.',
      ),
    },
    {
      label: T('Economía:'),
      text: T(
        '{εἰμί} por sí solo representa aproximadamente el 7% de todas las palabras del Nuevo Testamento.Cada formulario de este capítulo que corrija se leerá cientos de veces.',
      ),
    },
  ],
  examples: [
    { text: '{ἐν ἀρχῇ ἦν ὁ λόγος}', gloss: T('en el principio era el Verbo (Juan 1:1)') },
    { text: '{ἐγώ εἰμι ἡ ζωή}', gloss: T('Yo soy la vida (Juan 14:6; énfasis en ἐγώ)') },
    { text: '{ἔσονται δύο}', gloss: T('they shall be two (future; Matt 19:5)') },
    { text: '{οἴδατε τὴν ὥραν}', gloss: T('sabes la hora (2ยบ pl.; Mateo 24:42)') },
    {
      text: '{ᾔδει τί ἔμελλεν}',
      gloss: T('él sabía lo que estaba por suceder (pluscuamperfecto; Juan 6:6)'),
    },
    { text: '{φησὶν αὐτοῖς}', gloss: T('les dice (presente histórico de φημί)') },
    { text: '{ἔφη αὐτῷ}', gloss: T('le dijo (imperfecto; Marcos 1:41)') },
    { text: '{ἔστω ναὶ ναί}', gloss: T('sea ​​sí, sí (3er sg. imperativo; Mateo 5:37)') },
    { text: '{ὢν υἱός}', gloss: T('siendo Hijo (participio; Heb 5:8)') },
    { text: '{εἰσὶν οἱ λέγοντες}', gloss: T('son los que dicen (perifrástico con participio)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Presente de εἰμί'),
      head: [T('Persona'), T('Forma'), T('Traducción')],
      rows: [
        ['1ª sg.', '{εἰμί}', 'eu sou'],
        ['2ª sg.', '{εἶ}', 'tu és'],
        ['3ª sg.', '{ἐστί(ν)}', 'ele é'],
        ['1ª pl.', '{ἐσμέν}', 'nós somos'],
        ['2ª pl.', '{ἐστέ}', 'vós sois'],
        ['3ª pl.', '{εἰσί(ν)}', 'eles são'],
      ],
    },
    {
      caption: T('Table 2 — Imperfect of εἰμί'),
      head: [T('Persona'), T('Forma'), T('Traducción')],
      rows: [
        ['1ª sg.', '{ἤμην}', 'eu era'],
        ['2ª sg.', '{ἦς}', 'tu eras'],
        ['3ª sg.', '{ἦν}', 'ele era'],
        ['1ª pl.', 'ἦμεν', 'nós éramos'],
        ['2ª pl.', 'ἦτε', 'vós éreis'],
        ['3ª pl.', 'ἦσαν', 'eles eram'],
      ],
    },
    {
      caption: T('Tabla 3 — οἶδα y φημί (presente)'),
      head: [
        T('Persona'),
        { 0: 'ο', 1: 'ἶ', 2: 'δ', 3: 'α', 4: ' ', 5: '«', 6: 's', 7: 'e', 8: 'i', 9: '»' },
        { 0: 'φ', 1: 'η', 2: 'μ', 3: 'ί', 4: ' ', 5: '«', 6: 'd', 7: 'i', 8: 'g', 9: 'o', 10: '»' },
      ],
      rows: [
        ['1ª sg.', '{οἶδα}', '{φημί}'],
        ['2ª sg.', '{οἶδας}', '{φῄς}'],
        ['3ª sg.', '{οἶδε(ν)}', '{φησί(ν)}'],
        ['1ª pl.', '{οἴδαμεν}', 'φαμέν'],
        ['2ª pl.', '{οἴδατε}', 'φατέ'],
        ['3ª pl.', '{οἴδασι(ν)}', 'φασί(ν)'],
      ],
    },
  ],
};
