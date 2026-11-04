import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  title: T('El género y el marcador {ة}'),
  subtitle: T('مَلِكٌ، مَلِكَةٌ، شَجَرَةٌ'),
  section: T('Sustantivos'),
  body: C(`## Lo masculino es lo que no lleva marca

En español, {libro} y {mesa} dicen el género en la terminación, y quien empieza la flexión ya cuenta con eso. El árabe hace lo mismo, con una diferencia que lo cambia todo: **lo masculino no lleva ninguna marca, y lo femenino lleva una**.

{مَلِكٌ} es masculino y no tiene nada más que la terminación de caso. {مَلِكَةٌ} es femenino y tiene una letra más. El género es por eso información negativa en lo masculino y positiva en lo femenino, y la prueba práctica para leer un sustantivo desconocido es mirar si lleva {ة}. Si no lo lleva, es masculino, y la flexión ya está decidida.

El género del sustantivo no dice qué es la cosa ni si está viva. {نَارٌ} es femenino y no es una persona; {فَجْرٌ} es masculino y es una abstracción. La información morfológica es todo lo que se puede saber antes del diccionario.

## Las tres terminaciones del femenino

La {ة} no es la única marca. El femenino aparece con tres terminaciones, y la distinción sirve porque cada una trae su propio plural.

La {ة} cerrada aparece en la mayoría aplastante de los casos: {مَلِكَةٌ}, {شَجَرَةٌ}, {قَلَمَةٌ}, {مَدْرَسَةٌ}. El plural es regular, con {ـات}: {مَلَكَاتٌ}, {شَجَرَاتٌ}.

La {ى} abierta aparece en pocos sustantivos, y el plural lleva casi siempre {ء}: {حُرْمَى} da {حُرُمَى}, {عُذْرَى} da {عُذْرَى}. Son palabras raras y casi siempre de origen no árabe.

La {ء} final abre la misma cuenta: {سَمَاءٌ} da {سَمَوَاتٌ}, y {بَيَاءٌ} da {بُيُيُوبٌ}. Y hay además palabras femeninas sin {ة} ninguna, que el léxico mantiene por costumbre: {أُمٌ}, {نَارٌ}, {أُخْتٌ}, {حُرْمَى}.

## Lo que el género hace concordar

El género es una llave, y la llave abre cuatro puertas. **El sustantivo gobierna el adjetivo, el verbo, el pronombre y el sufijo de posesión.**

El adjetivo concuerda: {كِتَابٌ جَدِيدٌ} y {كِتَابَةٌ جَدِيدَةٌ}. El verbo cambia de forma, y el cambio se ve en la terminación: {كَتَبَ} escribió, {كَتَبَتْ} escribió. El pronombre cambia de letra: {هُوَ} y {هِيَ}. El posesivo acompaña: {كِتَابُهُ} y {كِتَابُهَا}.

Y el plural regular, ya visto, sigue la misma llave: {مُعَلِّمُونَ} para lo masculino, {مُعَلِّمَاتٌ} para lo femenino. Quien sepa el género del sustantivo sabe el plural, el adjetivo y la forma del verbo, y el ahorro es considerable.

## Donde el género va contra lo esperado

Aquí está la excepción, y ocupa más espacio que la regla porque es donde el lector tropieza.

Un sustantivo inanimado lleva el verbo en masculino, por omisión. Eso vale incluso cuando el sustantivo es femenino: en {فِي الْبَدْءِ كَانَ الْكَلِمَةُ}, {الْكَلِمَةُ} es femenino y {كَانَ} es masculino. No es un error del traductor ni del copista: es el patrón de la lengua, y la lectura que sigue el género del sustantivo escribe un verbo que nadie pronuncia. La regla vale para sustantivo y adjetivo, con una lista corta de excepciones.

Un plural no humano cuenta como femenino en la concordancia, aunque no lleve {ة}: {أَعْمَالٌ كَثِيرَةٌ}, {فِكَرٌ كَثِيرَةٌ}, {خَشَبٌ كَثِيرٌ} con la segunda parte en plural. El plural se comporta como si fuera una sola entidad, y las entidades inanimadas se tratan como femeninas.

Y hay casos en que decide el léxico y la gramática solo avisa. {شَجَرٌ} es masculino y {شَجَرَةٌ} es femenino, pero {فَجْرٌ} es masculino y {فَجْرَةٌ} también existe, con otro sentido. Ningún patrón morfológico resuelve esos casos, y por eso quien traduce fiándose de la terminación se equivoca aquí más que en ninguna otra parte de la lengua.

## Criterio de lectura

Antes de traducir un verbo, mira el sustantivo y busca la {ة}. En {جَاءَ الرَّجُلُ} el sustantivo es masculino y el verbo es masculino; en {جَاءَتِ الْمَرْأَةُ} la terminación {ـة} dice que el sustantivo es femenino y el verbo tiene que ser {جَاءَتْ}. Cuando el sustantivo no lleva {ة} y el verbo parece femenino, el sustantivo está entre los pocos que invierten el patrón, y la lista es corta suficiente como para memorizarla.`),
  vocab: [
    V('مَلِكٌ', 'ملك', 'rey; masculino sin marca'),
    V('مَلِكَةٌ', 'ملك', 'reina'),
    V('كَاتِبٌ', 'كتب', 'escritor'),
    V('كَاتِبَةٌ', 'كتب', 'escritora'),
    V('شَجَرَةٌ', 'شجرة', 'árbol'),
    V('حُرْمَى', 'حرم', 'santuario; femenino en {ى}'),
    V('سَمَاءٌ', 'سماء', 'cielo; femenino en {ء}'),
    V('نَارٌ', 'نار', 'fuego; femenino sin {ة}'),
    V('جَدِيدٌ', 'جديد', 'nuevo'),
    V('جَدِيدَةٌ', 'جديد', 'nueva'),
    V('أَعْمَالٌ', 'عمل', 'obras; plural no humano que concuerda como femenino'),
    V('كَثِيرَةٌ', 'كثير', 'muchas'),
    V('كَتَبَتْ', 'كتب', 'ella escribió'),
    V('هِيَ', 'هي', 'ella'),
    V('أُخْتٌ', 'أخت', 'hermana; femenino sin {ة}'),
    V('تَاء مربوطة', 'تاء', 'la letra que marca el femenino'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál de estos sustantivos es femenino?'),
    options: [T('مَلِكٌ'), T('شَجَرَةٌ'), T('كِتَابٌ'), 'قَلَمٌ'],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el femenino de {مَلِكٌ}: ___ِكَة'),
      answer: 'مَ',
      hint: T('La letra inicial del masculino, con la terminación del femenino.'),
    },
    {
      kind: 'choose',
      prompt: T('En {فِي الْبَدْءِ كَانَ الْكَلِمَةُ}, ¿por qué el verbo es masculino?'),
      options: [
        T('Porque {الْكَلِمَةُ} es masculino'),
        T('Porque el sustantivo es inanimado y la concordancia es masculina por omisión'),
        T('Porque el verbo es nombre propio'),
        T('Porque {كَانَ} es femenino'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Associe género y forma.'),
      pairs: [
        { a: T('كَتَبَ'), b: T('masculino') },
        { a: T('كَتَبَتْ'), b: T('femenino') },
        { a: T('جَدِيدٌ'), b: T('masculino') },
        { a: T('جَدِيدَةٌ'), b: T('femenino') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál de estos tiene el plural más común en {ات}?'),
      options: [T('حُرْمَى'), T('شَجَرَةٌ'), 'نَارٌ'],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('**Lo masculino no lleva marca; lo femenino lleva {ة}.**') },
    {
      n: '2',
      text: T(
        'Los femeninos tienen tres terminaciones: la {ة} cerrada y la {ى} y la {ء} abiertas.',
      ),
    },
    {
      n: '3',
      text: T('El género gobierna el adjetivo, el verbo, el pronombre y el sufijo de posesión.'),
    },
    {
      n: '4',
      text: T('El plural regular sigue el género: {ـون} en lo masculino y {ـات} en lo femenino.'),
    },
    {
      n: '5',
      text: T(
        'Un sustantivo inanimado lleva el verbo en masculino por omisión, aunque el sustantivo sea femenino: {كَانَ الْكَلِمَةُ}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Donde la gramática solo avisa'),
      text: T(
        'No todo sustantivo terminado en {ة} es femenino, y no todo femenino termina en {ة}. {فَجْرٌ} es masculino y {فَجْرَةٌ} existe también, con otro sentido; {نَارٌ} y {أُخْتٌ} son femeninos sin {ة}. Manda la costumbre del léxico, y la terminación es solo un indicio.',
      ),
    },
    {
      label: T('La {ة} de intensidad'),
      text: T(
        'Algunas palabras femeninas llevan una segunda {ة}, de intensidad y no de género: {حُمْرَةٌ} es el sustantivo del color, no una forma femenina de {أَحْمَر}. La letra es la misma y el trabajo es otro.',
      ),
    },
  ],
  examples: [
    { text: 'مَلِكٌ', gloss: T('rey; masculino sin marca') },
    { text: 'مَلِكَةٌ', gloss: T('reina; con {ة}') },
    { text: 'شَجَرَةٌ', gloss: T('árbol; femenino regular') },
    { text: 'حُرْمَى', gloss: T('santuario; femenino en {ى}') },
    { text: 'سَمَاءٌ', gloss: T('cielo; femenino en {ء}') },
    { text: 'نَارٌ', gloss: T('fuego; femenino sin {ة}') },
    { text: 'كِتَابٌ جَدِيدٌ', gloss: T('un libro nuevo; concordancia masculina') },
    { text: 'كِتَابٌ جَدِيدَةٌ', gloss: T('un libro nuevo; sustantivo femenino') },
    { text: 'كَتَبَتْ', gloss: T('ella escribió; el verbo concuerda en género') },
  ],
  tables: [
    {
      caption: T('Las terminaciones del femenino'),
      head: [T('Terminación'), T('Patrón'), T('Ejemplo'), T('Plural'), T('Ejemplo del plural')],
      rows: [
        [T('{ة} cerrada'), 'مَفْعَلَة', 'مَلِكَةٌ', 'ـات', 'مَلَكَاتٌ'],
        [T('{ى} abierta'), 'مَفْعَلَى', 'حُرْمَى', 'ـى', 'حُرُمَى'],
        [T('{ء} abierta'), 'مَفْعَلَاء', 'سَمَاءٌ', 'ـوَات', 'سَمَوَاتٌ'],
        [T('sin {ة}'), T('costumbre del léxico'), 'نَارٌ، أُمٌ', T('irregular'), 'نِرَان'],
      ],
    },
    {
      caption: T('Lo que el género gobierna'),
      head: [T('Elemento'), T('Masculino'), T('Femenino')],
      rows: [
        [T('adjetivo'), 'جَدِيدٌ', 'جَدِيدَةٌ'],
        [T('verbo'), 'كَتَبَ', 'كَتَبَتْ'],
        [T('pronombre'), 'هُوَ', 'هِيَ'],
        [T('posesivo'), 'كِتَابُهُ', 'كِتَابُهَا'],
        [T('plural regular'), 'مُعَلِّمُونَ', 'مُعَلِّمَاتٌ'],
      ],
    },
    {
      caption: T('Donde el género va contra lo esperado'),
      head: [T('Categoría'), T('Concurda como'), T('Ejemplo')],
      rows: [
        [T('plural no humano'), T('femenino'), 'أَعْمَالٌ كَثِيرَةٌ'],
        [T('colectivo'), T('femenino'), 'غَنَمٌ كَثِيرَةٌ'],
        [T('sustantivo inanimado'), T('masculino en el verbo'), 'كَانَ الْكَلِمَةُ'],
        [T('planta'), T('femenino por omisión'), 'شَجَرَةٌ بِلا ثَمَر'],
      ],
    },
  ],
};
