import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  title: T('El artículo definido y sus tres formas'),
  subtitle: T('الشَّمْس، الْقَمَر، ٱلْعَالَمِينَ'),
  section: T('Alfabetos y escritura'),
  body: C(`## Qué hace el artículo

{ال} es un morfema de definitud: convierte un sustantivo cualquiera en un sustantivo determinado. {قَمَر} es una luna entre otras, y {الْقَمَر} es la luna que el interlocutor ya tiene en mente, o la que el texto ha vuelto única. El español no tiene equivalente, porque su artículo marca una clase y no una identidad.

Esa es la idea. Lo demás es sobre las tres formas que este morfema adopta en la página, y son tres porque el sonido del artículo se adapta a la letra que viene después.

## Ante una letra del sol, el lām está escrito y mudo

Las veintiocho consonantes se dividen en dos clases de catorce. Las catorce letras del sol son {ت ث د ذ ر ز س ش ص ض ط ظ ن ه}; las catorce de la luna son {ا ب ج ح خ ع غ ف ق ك ل م و ي}. Ante la luna el artículo se pronuncia entero. Ante el sol el lām se absorbe: **el {ل} sigue escrito y mudo, y la letra del sol aparece geminada**.

Quien está aprendiendo a leer tiene aquí la pista más fiable de la lengua. {الشَّمْس} es el único nombre del texto en que el artículo no suena como artículo, y la shadda señala exactamente dónde se tragó el sonido.

## La tercera forma, y sus dos apariciones

El alif del artículo tiene dos grabados. En la forma ordinaria es un {ا} común y sin nada encima, como en {الْقَمَر}. En la que usa la tradición textual del Corán es el {ٱ}, un alif con un signo encima que lo distingue de una palabra que empieza por alif hamza. Aparece en dos sitios y solo en dos: cuando el artículo abre la frase y cuando la palabra está en iḍāafa con un nombre propio o con el nombre de Dios.

{ٱلْعَالَمِينَ} es el ejemplo que muestra los dos a la vez. La palabra tiene iḍāafa, {ٱلْعَامِ: عَالَمِينَ}, el segundo elemento es un nombre propio, y aun así el plural recuperó el artículo. Quien traduce {وَمَنْ يُؤْمِنْ بِٱللَّهِ} por "y quien cree en Dios" ha entendido lo que pasa dentro de la palabra, aunque no conozca la regla.

## Cuándo desaparece el artículo

La excepción es mayor de lo que parece, y merece el espacio que tiene.

En la iḍāafa el segundo elemento pierde el artículo: {كِتَابُ الْمُعَلِّمِ}, el libro del maestro, y no {كِتَابُ الْمُعَلِّمُ}. Un artículo en los dos lados no es una iḍāafa sino dos construcciones sin relación.

Después están los casos en que el artículo se omite por regla y no por construcción. Los nombres propios no lo reciben normalmente: {مَكَّة} y {مَدْيَنَ} son lugares, {مُحَمَّد} y {عِيسَى} son personas. Un sustantivo indefinido bajo preposición tampoco: {فِي بَيْتِ} y {فِي الْبَيْتِ} son dos frases distintas, y la segunda añade lo que el texto sabe y la primera no.

Por último, el nombre de Dios es una mezcla de reglas: {الله} se escribe con {ا} en vez de {ٱ}, porque es nombre propio, y {أَسْمَاءُهُ} deja el sustantivo sin artículo porque está en iḍāafa. Cada palabra tiene la suya, y por eso el sistema resiste a ser enseñado como una regla única.

## Criterio de lectura

En {أَنْتُمْ نُورُ الْعَالَمِ} pasan las dos cosas a la vez. {نُورُ} va sin artículo porque encabeza una iḍāafa, {الْعَالَمِ} va en genitivo porque la sigue, y la {ع} del artículo es letra de la luna, así que el artículo se pronuncia entero. Una frase de siete palabras trae dos construcciones y un caso, y quien solo lee el sustantivo pierde las tres cosas.`),
  vocab: [
    V('ال', 'ال', 'el artículo definido'),
    V('ٱل', 'ٱل', 'el artículo con alif de wasla'),
    V('الشَّمْس', 'شمس', 'el sol; aquí el artículo es mudo'),
    V('الْقَمَر', 'قمر', 'la luna; el artículo suena entero'),
    V('ٱلْعَالَمِينَ', 'عالم', 'del mundo; artículo en el plural de una iḍāafa'),
    V('السَّمَاوَات', 'سماوات', 'los cielos'),
    V('نُور', 'نور', 'luz'),
    V('الْعَالَم', 'عالم', 'el mundo; en iḍāafa'),
    V('كِتَاب', 'كتاب', 'libro'),
    V('الْمُعَلِّم', 'معلم', 'el maestro'),
    V('كِتَابُهُ', 'كتاب', 'su libro'),
    V('فِي بَيْتِ', 'بيت', 'en una casa'),
    V('مَكَّة', 'مكة', 'La Meca'),
    V('الْمَلَكُوت', 'ملكوت', 'el reino'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {الشَّمْس}, ¿qué pasa con el lām del artículo?'),
    options: [T('Se gemina'), T('Está escrito y mudo'), T('Se vuelve shadda'), T('Se omite')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete con la letra de la luna: {ال___رَ}, "la tierra".'),
      answer: 'أَ',
      hint: T('El alif forma parte del propio nombre de la tierra.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué palabra conserva el artículo dentro de una iḍāafa?'),
      options: [T('كِتَابُ الْمُعَلِّمِ'), T('الْمَلَكُوتِ'), T('نُورُ الْعَالَمِ'), T('فِي بَيْتِ')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Associe clase y comportamiento.'),
      pairs: [
        { a: T('الشَّمْس'), b: T('letra del sol') },
        { a: T('الْقَمَر'), b: T('letra de la luna') },
        { a: T('ٱلْعَالَمِينَ'), b: T('artículo con wasla') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuántas letras tiene cada clase?'),
      options: [T('12'), T('13'), T('14'), T('15')],
      answer: 2,
    },
  ],
  rules: [
    {
      n: '1',
      text: T('{ال} marca definitud: sin él el sustantivo es indefinido, con él es determinado.'),
    },
    {
      n: '2',
      text: T(
        '**Ante una letra del sol el {ل} está escrito y mudo, y la letra del sol queda geminada.**',
      ),
    },
    {
      n: '3',
      text: T(
        'Hay catorce letras del sol y catorce de la luna, y juntas dan las veintiocho del alfabeto.',
      ),
    },
    {
      n: '4',
      text: T(
        'En la iḍāafa el segundo elemento pierde el artículo, pero un plural o un nombre propio puede recuperarlo, como en {ٱلْعَالَمِينَ}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Los nombres propios y los sustantivos indefinidos bajo preposición no reciben artículo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por qué la shadda'),
      text: T(
        'La shadda de la letra del sol es la huella del sonido que el {ل} perdió. No pertenece a la raíz, así que quien la lee como geminación de raíz anda buscando un radical doble que no existe.',
      ),
    },
    {
      label: T('El {ال} de {الله}'),
      text: T(
        'El nombre de Dios es la forma más citada del artículo y la más irregular: se escribe con {ا} sencillo, el segundo {ل} lleva un alif corto encima, y el nombre recibe una terminación de caso que ninguna otra palabra recibe, la {اللهِ} del genitivo.',
      ),
    },
  ],
  examples: [
    { text: 'الشَّمْس', gloss: T('el sol; la shadda ocupa el lugar del sonido del lām') },
    { text: 'الْقَمَر', gloss: T('la luna; el artículo entero') },
    { text: 'ٱلْعَالَمِينَ', gloss: T('del mundo; el artículo vuelve en el plural de una iḍāafa') },
    { text: 'أَنْتُمْ نُورُ الْعَالَمِ', gloss: T('vosotros sois la luz del mundo') },
    { text: 'كِتَابُ الْمُعَلِّمِ', gloss: T('el libro del maestro') },
    { text: 'كِتَابُهُ', gloss: T('su libro') },
    { text: 'فِي بَيْتِ', gloss: T('en una casa; sin artículo') },
    { text: 'مَكَّةَ', gloss: T('La Meca; nombre propio sin artículo') },
    { text: 'الْمَلَكُوت', gloss: T('el reino; artículo ante letra de la luna') },
  ],
  tables: [
    {
      caption: T('Las tres formas del artículo por escrito'),
      head: [T('Contexto'), T('Escrito'), T('Lo que suena'), T('Ejemplo')],
      rows: [
        [T('letra de la luna'), 'الـ', T('el lām y el alif suenan'), 'الْقَمَر'],
        [
          T('letra del sol'),
          T('الـ con el lām escrito y mudo'),
          T('solo el sonido de la letra del sol, doble'),
          'الشَّمْس',
        ],
        [T('forma uthmaní'), 'ٱلـ', T('el alif de wasla, sin sonido propio'), 'ٱلْعَالَمِينَ'],
        [
          T('segundo elemento de una iḍāafa'),
          T('sin artículo'),
          T('los dos elementos suenan enteros'),
          'كِتَابُ الْمُعَلِّمِ',
        ],
      ],
    },
    {
      caption: T('Las dos clases de letra'),
      head: [T('Clase'), T('Letras'), T('Comportamiento'), T('Ejemplo')],
      rows: [
        [
          T('del sol'),
          'ت ث د ذ ر ز س ش ص ض ط ظ ن ه',
          T('el lām se absorbe y la letra del sol gemina'),
          'الشَّمْس',
        ],
        [
          T('de la luna'),
          'ا ب ج ح خ ع غ ف ق ك ل م و ي',
          T('el artículo se pronuncia entero'),
          'الْقَمَر',
        ],
      ],
    },
    {
      caption: T('Dónde desaparece el artículo'),
      head: [T('Situación'), T('Qué ocurre'), T('Ejemplo')],
      rows: [
        [T('iḍāafa'), T('el segundo elemento pierde el artículo'), 'كِتَابُ الْمُعَلِّمِ'],
        [T('sustantivo regido'), T('sin artículo cuando es indefinido'), 'فِي بَيْتِ'],
        [T('nombre propio'), T('no recibe el artículo'), 'مَكَّة'],
        [T('iḍāafa con nombre propio'), T('el plural recupera el artículo'), 'ٱلْعَالَمِينَ'],
      ],
    },
  ],
};
