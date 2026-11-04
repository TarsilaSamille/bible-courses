import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Clasificadores y cantidad'),
  subtitle: T('seorang, seekor, sebiji, sebuah'),
  section: T('El nombre'),
  body: C(`Al contar entidades, el indonesio puede insertar un clasificador: {tiga orang murid} = «tres personas [que son] discípulos» = «tres discípulos». Indica categoría y no marca género.

CLASIFICADORES
• {orang} personas: {seorang murid}, {dua orang guru}.
• {ekor} animales pequeños/domésticos: {seekor domba}, {dua ekor ayam}.
• {biji} granos y frutos pequeños: {sebiji sesawi}, {dua biji batu}.
• {buah} objetos de contorno o categoría general: {sebuah roti}, {dua buah bola}. Para instrumentos, usa {bilah} para una extensión de paisaje, {gelas} para una taza, {lembar} para una hoja/página y un clasificador más específico cuando sea posible.

{se-} + clasificador = «uno»: {seorang} «una persona», {seekor} «un animal», {sebiji} «un grano», {sebuah} «un objeto». En el recuento plural normal se usa el numeral natural: {tiga orang}, {dua ekor}, {tiga biji}; {tiga orang} no exige un sustantivo contable.

{para} + nombre puede formar plural definido: {para murid} «los discípulos», {para rasul} «los apóstoles». Según el contexto, {murid} puede significar «alumno» o «discípulo».

{Semua} = «todos/todo»; {semua orang} = «toda la gente». {Banyak} = «muchos», antepuesto al nombre: {banyak ikan} «muchos peces». El sufijo numeral {-an} puede expresar «uno de», pero está restringido. En Juan 6:9 usa {roti} «pan».`),
  vocab: [
    V('orang', 'orang', 'persona; clasificador de personas'),
    V('ekor', 'ekor', 'clasificador de animales'),
    V('biji', 'biji', 'clasificador de granos'),
    V('buah', 'buah', 'clasificador general; fruto'),
    V('seorang', 'orang', 'una persona'),
    V('seekor', 'ekor', 'un animal'),
    V('sebiji', 'biji', 'un grano'),
    V('sebuah', 'buah', 'un objeto, una pieza'),
    V('guru', 'guru', 'maestro, profesor'),
    V('domba', 'domba', 'oveja'),
    V('sesawi', 'sesawi', 'mostaza'),
    V('semua', 'semua', 'todos, todo'),
    V('banyak', 'banyak', 'muchos'),
    V('para murid', 'murid', 'los discípulos'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Completa: «seekor ___» = «una oveja».'),
    options: [T('domba'), T('orang'), T('biji'), T('banyak')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: «tiga ___ murid» = «tres discípulos».'),
      answer: 'orang',
      hint: T('Clasificador de personas.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es más natural para «muchos peces»?'),
      options: [
        T('banyak ikan'),
        T('banyak ikan-ikan'),
        T('semua ikan seekor'),
        T('banyak seekor ikan'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El clasificador puede omitirse: {tiga murid} = «tres discípulos» es más común que la forma larga.',
      ),
    },
    {
      n: '2',
      text: T(
        '{Seekor} contiene {se-} + {ekor}, pero {se-} no aparece como elemento separado en {tiga ekor}.',
      ),
    },
    {
      n: '3',
      text: T(
        'El plural {ikan} no cambia; {banyak ikan} significa «muchos peces», incluso sin reduplicación.',
      ),
    },
  ],
  notes: [
    {
      label: T('Precisión'),
      text: T('{Ekor} también puede usarse en broma para personas; el contexto es imprescindible.'),
    },
  ],
  examples: [
    { text: 'Tiga orang murid membaca.', gloss: T('Tres discípulos leen.') },
    { text: 'Yesus melihat seekor domba.', gloss: T('Jesús ve una oveja.') },
    { text: 'Iman sebesar biji sesawi.', gloss: T('La fe del tamaño de una semilla de mostaza.') },
  ],
  tables: [
    {
      caption: T('Clasificadores comunes'),
      head: ['Classificador', 'Categoria', 'ES'],
      rows: [
        ['seorang', T('persona'), '{seorang murid}'],
        ['seekor', T('animal'), '{seekor domba}'],
        ['sebiji', T('grano/fruto pequeño'), '{sebiji sesawi}'],
        ['sebuah', T('objeto/pieza'), '{sebuah roti}'],
      ],
    },
  ],
};
