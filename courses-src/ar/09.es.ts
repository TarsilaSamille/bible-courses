import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('Verbos débiles'),
  subtitle: T('Raíces con و، ي o ا'),
  section: T('El verbo'),
  body: C(`## Qué hace que una raíz sea débil

Una raíz fuerte tiene tres consonantes. Una raíz débil tiene {و} o {ي} como consonante media o final, y eso cambia la forma del paradigma: una de las consonantes desaparece en algunos tiempos y reaparece en otros. Reconocer la clase por el paradigma es más seguro que intentar adivinar por la raíz.

## La raíz hueca

{ق-و-ل} es hueca porque la {و} media desaparece: en el perfecto se convierte en {قَالَ}, en el futuro {سَيَقُولُ}. La {و} reaparece justo donde la raíz necesita apoyo y se va donde la terminación ya trae la vocal. Compara {يَقُولُ} con {قَالَ} y el patrón queda claro.

## La raíz defectiva

{د-ع-و} termina en {و} y por eso las formas aparecen como {دَعَا} o {يَدْعُو} — la última letra carga el peso. En {نَسِيَ} y {يَنْسَى} ocurre lo mismo con {ي}. La {ا} del perfecto sustituye a la consonante débil.

## La raíz asimilada

{و-ج-د} es asimilada: la {و} inicial aparece en el perfecto, como en {وَجَدَ} «encontró», pero no en el imperfecto, {يَجِدُ}. La raíz pierde una letra en los dos extremos, lo que la deja en un caso intermedio entre fuerte y débil.

## Criterio de lectura

Al ver un verbo con menos de tres consonantes, no lo descartes como defectuoso. Enumera las formas que conoces y busca qué consonante reaparece en cada tiempo — el patrón revela la raíz subyacente y su significado.`),
  vocab: [
    V('قَالَ', 'قال', 'dijo'),
    V('يَقُولُ', 'قال', 'dice'),
    V('قِيلَ', 'قال', 'fue dicho'),
    V('بَاعَ', 'باع', 'vendió'),
    V('يَبِيعُ', 'باع', 'vende'),
    V('دَعَا', 'دعا', 'llamó'),
    V('يَدْعُو', 'دعا', 'llama'),
    V('وَجَدَ', 'وجد', 'encontró'),
    V('يَجِدُ', 'وجد', 'encuentra'),
    V('نَسِيَ', 'نسي', 'olvidó'),
    V('يَنْسَى', 'نسي', 'olvida'),
    V('خَافَ', 'خاف', 'temió'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué raíz produce {قَالَ} y {يَقُولُ}?'),
    options: [T('q-w-l'), T('d-ʿ-w'), T('w-j-d'), T('n-s-y')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el imperfecto de {بَاعَ}: ___ (vende).'),
      answer: 'يَبِيعُ',
      hint: T('Es una raíz hueca.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona raíz y clase.'),
      pairs: [
        { a: T('q-w-l'), b: T('hueca') },
        { a: T('d-ʿ-w'), b: T('defectiva') },
        { a: T('w-j-d'), b: T('asimilada') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué falta en {يَجِدُ}?'),
      options: [
        T('la {و} inicial de la raíz'),
        T('la {ا} medial'),
        T('el artículo'),
        T('el plural'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T('En las huecas, la {ا} del perfecto corresponde a {و} o {ي} del imperfecto.'),
    },
    {
      n: '2',
      text: T(
        'En las defectivas, la última letra de la raíz es {و} o {ي}; compara {دَعَا} y {يَدْعُو}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Una forma solo es segura cuando se conoce suficiente paradigma; no fuerces la raíz a partir de una palabra.',
      ),
    },
  ],
  notes: [
    {
      label: T('Raíz'),
      text: T(
        'Una misma raíz puede producir sustantivo verbal, participio y pasiva: {قَالَ} → {قَوْل} → {قَائِل} → {مَقُول}.',
      ),
    },
  ],
  examples: [
    { text: 'قَالَ الرَّبُّ', gloss: T('dijo el Señor') },
    { text: 'وَتَدْعُو اسْمَهُ يَسُوعَ', gloss: T('y llamarás su nombre Jesús') },
    { text: 'لَا تَخَفْ', gloss: T('no temas') },
  ],
  tables: [
    {
      caption: T('Paradigmas seleccionados'),
      head: [T('Tipo'), T('Raíz'), T('Perfecto'), T('Imperfecto')],
      rows: [
        ['oca', 'ق-و-ل', 'قَالَ', 'يَقُولُ'],
        ['oca', 'ب-ا-ع', 'بَاعَ', 'يَبِيعُ'],
        ['defectiva', 'د-ع-و', 'دَعَا', 'يَدْعُو'],
        ['assimilada', 'و-ج-د', 'وَجَدَ', 'يَجِدُ'],
      ],
    },
  ],
};
