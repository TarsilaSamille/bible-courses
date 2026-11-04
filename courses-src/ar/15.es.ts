import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  title: T('Pasiva y síntesis del curso'),
  subtitle: T('كُتِبَ: resultado y agente'),
  section: T('Síntesis del curso'),
  body: C(`## Qué hace la pasiva

La pasiva árabe destaca el resultado o el estado y normalmente **omite el agente**. No es una transformación vacía de estilo: cuando el agente es irrelevante o ya conocido, suprimirlo libera la estructura. En {كُتِبَ} «fue escrito» no se dice quién escribió — y en {خُلِقَ} «fue creado» el agente es Dios, a quien el texto no necesita nombrar.

## El cambio de vocalización

En el perfecto, {كَتَبَ} se convierte en {كُتِبَ}: las vocales se invierten. En el imperfecto, {يَكْتُبُ} se convierte en {يُكْتَبُ}. Con raíces débiles la vocalización sigue a la raíz, no a la terminación: {قَالَ} → {قِيلَ} y {وَلَدَ} → {وُلِدَ}. Fíjate en que {قِيلَ} no se parece ni a {قَالَ} ni a {يَقُولُ} — es la única forma de reconocerla.

## Agente explícito

Cuando el autor necesita nombrar al agente, se usa {مِنْ قِبَلِ} o {بِـ} más la forma verbal. {مِنْ قِبَلِ} es literalmente «de parte de» y aparece en {كُتِبَ مِنْ قِبَلِ}. Quien traduzca solo la pasiva pierde el agente explícito, que es justamente la información nueva.

## Lo que cierra este capítulo

El recorrido fue de la letra al sistema: alfabeto y vocales (1), artículo y género (2), raíz y perfecto (3), lectura aplicada (4), formas derivadas (5), iḍāfa (6), modos y tiempo (7), raíces débiles (8), participios (9), adjetivos (10), preposiciones (11), numerales (12), preguntas y condicionales (13). La pasiva (14) lo ata todo, porque usa raíz, vocalización, tiempo y agente en una sola forma.

## Criterio de lectura

Al encontrar una forma con {مُ} inicial, {ِ} bajo la primera consonante o {ُ} final, trátala como pasiva antes de buscar agente. Después vuelve a la raíz y comprueba si el sentido lo permite: no todo verbo tiene pasiva natural en todos los tiempos.`),
  vocab: [
    V('كُتِبَ', 'كتب', 'fue escrito'),
    V('خُلِقَ', 'خلق', 'fue creado'),
    V('قِيلَ', 'قال', 'fue dicho'),
    V('بُورِكَ', 'بارك', 'fue bendecido'),
    V('يُكْتَبُ', 'كتب', 'se escribe'),
    V('مِنْ', 'من', 'de; por'),
    V('قِبَلَ', 'قبل', 'antes; por'),
    V('وُلِدَ', 'ولد', 'nació'),
    V('صُلِبَ', 'صلب', 'fue crucificado'),
    V('قُبِرَ', 'قبر', 'fue sepultado'),
    V('قَامَ', 'قام', 'resucitó'),
    V('تَمَّتَ', 'تمم', 'se completó'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se forma la pasiva de {كَتَبَ}?'),
    options: [T('Con auxiliar'), T('Cambiando las vocales'), T('Con prefijo'), T('Con sufijo')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa la pasiva: {قَالَ} → ___'),
      answer: 'قِيلَ',
      hint: T('Es la pasiva de una raíz hueca.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase expresa estado resultante?'),
      options: [T('escribiendo'), T('escrito'), T('fue escrito'), T('escribe')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Relaciona verbo y estructura.'),
      pairs: [
        { a: T('nació'), b: T('pasiva') },
        { a: T('resucitó'), b: T('activa') },
        { a: T('se escribe'), b: T('imperfecto pasivo') },
      ],
      answer: [0, 1, 2],
    },
  ],
  rules: [
    { n: '1', text: T('La pasiva árabe enfatiza el resultado y prescinde del agente.') },
    {
      n: '2',
      text: T(
        'La transformación vocálica es sistemática: fatha inicial → ḍamma; kasra de la segunda vocal → fatha.',
      ),
    },
    {
      n: '3',
      text: T(
        'No confundas participio {مَكْتُوب} con perfecto pasivo {كُتِبَ}: uno describe, el otro relata un proceso.',
      ),
    },
  ],
  notes: [
    {
      label: T('Síntesis'),
      text: T(
        'De {ال} al credo, la lectura bíblica crece: dirección, raíces, sufijos y prefijos permiten continuar con otros pasajes.',
      ),
    },
  ],
  examples: [
    { text: 'كُتِبَ الإِنْجِيلُ', gloss: T('se escribió el evangelio') },
    { text: 'وُلِدَ يَسُوعُ', gloss: T('nació Jesús') },
    { text: 'صُلِبَ وَقُبِرَ وَقَامَ', gloss: T('fue crucificado, sepultado y resucitó') },
  ],
  tables: [
    {
      caption: T('Activa y pasiva'),
      head: [T('Tipo'), T('Activa'), T('Pasiva')],
      rows: [
        ['perfeito', 'كَتَبَ', 'كُتِبَ'],
        ['imperfeito', 'يَكْتُبُ', 'يُكْتَبُ'],
        ['raiz oca', 'قَالَ', 'قِيلَ'],
        ['raiz inicial fraca', 'وَلَدَ', 'وُلِدَ'],
      ],
    },
  ],
};
