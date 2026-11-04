import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('Cómo el árabe crea palabras nuevas'),
  subtitle: T('فَاعِل، مَفْعُول، مُفَعَّل، تَفَاعُل، اسْتَفْعَل'),
  section: T('Verbos'),
  body: C(`## Clase abierta y clase cerrada

Una clase de palabras es **abierta** cuando la lengua puede añadirle miembros para siempre, y **cerrada** cuando el conjunto es fijo y cabe en una lista. El criterio no es el sentido, es la contabilidad.

En árabe, sustantivo, verbo, adjetivo y adverbio son clases abiertas. Artículo, pronombre, preposición, partícula y numeral son cerradas. Y la causa es una sola, y está en la sección siguiente: **el árabe tiene moldes para generar palabras nuevas, y el molde es lo que hace abierta la clase.** Un sustantivo nuevo no es una palabra escogida de una lista, es una raíz encajada en un molde: {حِكْمَة} de {حَكَمَ}, {رِحْلَة} de {رَاحَ}, {عَجَبَة} de {عَجِبَ}. Tres palabras que ninguna otra lengua admitiría, y que el árabe produce sin esfuerzo.

Una clase cerrada es lo contrario, y por eso se enseña como lista. El artículo es uno. Los pronombres son veintiséis. Las preposiciones son unas cincuenta, contando las abreviadas. Los numerales son una tabla del tres al mil.

## Los quince moldes del verbo

Los quince moldes del verbo son el motor de la lengua, y no son decorativos: son la razón de que el verbo sea una clase abierta. Cada molde es un esqueleto de tres o cuatro vocales y consonantes con la raíz dentro, y cada uno añade un sentido propio.

La primera forma es {فَعَلَ}. La segunda, {فَعَّلَ}, es intensidad. La tercera, {فَاعَلَ}, va en las dos direcciones: {عَالَمَ} significa "trabajar con" y "conocer", y la misma palabra hace las dos cosas. La cuarta, {أُفْعِلَ}, da destinatario. La quinta, {تَفَعَّلَ}, es acción por grados. La sexta, {تَفَاعَلَ}, es acción recíproca. La séptima, {اِفْتَعَلَ}, es esfuerzo. La octava es recepción. La novena vale como reflexiva. La décima, {اِسْتَفْعَلَ}, es pedir. Y las cinco últimas llevan prefijos que marcan la persona.

Y la consecuencia para la lectura es directa: **quince moldes explican casi todos los verbos de cualquier página.** Cuando un verbo lleva el prefijo {تَ} o {نَ}, el lector ya sabe que es forma V o X, y solo queda encontrar la raíz.

## Las cerradas, y dónde están

La lista de clases cerradas es corta, y es la parte del curso que se memoriza en una tarde.

Artículo: uno. Pronombre: veintiséis formas libres, más catorce formas pegadas que son las mismas bajo caso. Preposición: unas cincuenta, si se cuentan las tres abreviadas. Partícula: unas cuarenta, contando los conectores, los negadores y las que pertenecen a Dios. Numeral: nueve para los números del tres al diez, y las reglas cierran el resto.

Y hay una cuarta cosa que cierra la lista, y es lo más árabe de todo: el **tanwīn** {ـًا}, {ـٌ}, {ـًا}. No es una palabra, es una terminación, y es lo que convierte un adjetivo en adverbio en dos letras: {جَدِيد} más {ـًا} da {جَدِيدًا}, "recentemente". La clase del adverbio es abierta y la gramática del adverbio tiene una sola regla.

## Criterio de lectura

En {وَإِنَّكَ لَعَلَى خُلُقٍ عَظِيمٍ} hay tres cosas que ha estado construyendo todo este curso. El sustantivo {خُلُقٍ} está en genitivo por causa de {لِـ}, y su plural es roto, del patrón {فُعْل}, que nadie produce por regla. El adjetivo {عَظِيمٍ} está en el mismo caso y por eso termina igual: {ـٍ}. Y el {لَعَلَى} es una partícula, una clase cerrada que se aprende una vez.

Lo que la frase muestra es que una sola línea puede traer a la vez un patrón de sustantivo, un patrón de plural, una partícula cerrada y concordancia de caso. No es una frase difícil: es una frase común, y quien reconoce las cuatro avanza mucho más deprisa.`),
  vocab: [
    V('حِكْمَة', 'حكمة', 'sabiduría'),
    V('رِحْلَة', 'رحلة', 'viaje'),
    V('عَجَبَة', 'عجب', 'maravilla'),
    V('نَجَّمَ', 'نجم', 'sucedió'),
    V('تَحَالَفَ', 'حلف', 'se alió'),
    V('اسْتَقْلَلَ', 'قفل', 'fue cerrado con llave'),
    V('جَدِيدًا', 'جديد', 'recentemente'),
    V('مَهْمًا', 'مهم', 'importantemente'),
    V('خُلُقٍ', 'خلق', 'caráter; plural roto en genitivo'),
    V('عَظِيمٌ', 'عظيم', 'grande'),
    V('الـ', 'ال', 'el artículo definido'),
    V('هُوَ', 'هو', 'pronombre'),
    V('مِنْ', 'من', 'preposición'),
    V('مِئَة', 'مئة', 'cien'),
    V('تَفَاعَلَ', 'فعل', 'el patrón de la sexta forma'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál de estas clases es cerrada?'),
    options: [T('Sustantivo'), T('Verbo'), T('Adjetivo'), T('Numeral')],
    answer: 3,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el patrón de la sexta forma: {ت ___ اَعَلَ}.'),
      answer: 'فَ',
      hint: T('Es el patrón {تَفَاعَلَ}, de acción recíproca.'),
    },
    {
      kind: 'match',
      prompt: T('Associe padrão y exemplo.'),
      pairs: [
        { a: T('فَعَّلَ'), b: T('نَجَّمَ') },
        { a: T('تَفَعَّلَ'), b: T('تَدَرَّبَ') },
        { a: T('تَفَاعَلَ'), b: T('تَحَالَفَ') },
        { a: T('اِسْتَفْعَلَ'), b: T('اسْتَقْلَلَ') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo se forma {جَدِيدًا} a partir de {جَدِيد}?'),
      options: [
        T('Con un prefijo'),
        T('Con {ـًا} al final'),
        T('Con {الـ}'),
        T('Con un patrón de verbo'),
      ],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('¿Cuántas preposiciones tiene el árabe, contando las abreviadas?'),
      options: [T('Unas cinco'), T('Unas cincuenta'), T('Unas quinientas'), T('Exactamente siete')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '**Una clase es abierta cuando la lengua le añade miembros sin fin, y cerrada cuando el conjunto es fijo y contable.**',
      ),
    },
    {
      n: '2',
      text: T(
        'Sustantivo, verbo, adjetivo y adverbio son abiertos en árabe porque hay un molde para cada palabra nueva.',
      ),
    },
    {
      n: '3',
      text: T(
        'Artículo, pronombre, preposición, partícula y numeral son cerrados, y por eso se enseñan como lista.',
      ),
    },
    {
      n: '4',
      text: T('Los quince moldes del verbo explican casi todos los verbos de cualquier página.'),
    },
    {
      n: '5',
      text: T('Adverbio es la clase más barata: casi todo adverbio es un adjetivo más {tanwīn}.'),
    },
  ],
  notes: [
    {
      label: T('La contabilidad que nadie hace'),
      text: T(
        'El español tiene treinta y tantos adverbios formados con -mente, y esa es la prueba de que la clase es productiva. El árabe hace lo mismo con una terminación: {جَدِيد} más {ـًا} da {جَدِيدًا}. El sufijo es más corto y la regla es más simple.',
      ),
    },
    {
      label: T('El molde no obliga'),
      text: T(
        'Tener un molde no obliga a usar la palabra. El patrón {فَعَّال} produce {غَفَّار}, "perdonador", y {عَلَّام}, "sabio", y produciría también palabras que nadie dice. La morfología abre la puerta; la costumbre decide quién pasa.',
      ),
    },
  ],
  examples: [
    { text: 'حِكْمَةٌ', gloss: T('sabiduría; sustantivo nuevo de un molde viejo') },
    { text: 'رِحْلَةٌ', gloss: T('viaje; patrón {فِعْلَة}') },
    { text: 'عَجَبَةٌ', gloss: T('maravilla; patrón {فِعْلَة}') },
    { text: 'نَجَّمَ', gloss: T('sucedió; segunda forma') },
    { text: 'تَحَالَفَ', gloss: T('se alió; sexta forma, recíproca') },
    { text: 'اسْتَقْلَلَ', gloss: T('fue cerrado con llave; décima forma') },
    { text: 'جَدِيدًا', gloss: T('recentemente; adverbio hecho de un adjetivo') },
    { text: 'خُلُقٍ', gloss: T('caráter; plural roto en genitivo') },
    { text: 'مِئَةٌ', gloss: T('cien; numeral de clase cerrada') },
  ],
  tables: [
    {
      caption: T('Las quince formas del verbo'),
      head: [T('N'), T('Patrón'), T('Valor'), T('Ejemplo')],
      rows: [
        ['I', 'فَعَلَ', T('acción simple'), 'كَتَبَ'],
        ['II', 'فَعَّلَ', T('intensidad'), 'نَجَّمَ'],
        ['III', 'فَاعَلَ', T('acción en las dos direcciones'), 'عَالَمَ'],
        ['IV', 'أُفْعِلَ', T('dar destinatario'), 'أَخْبَرَ'],
        ['V', 'تَفَعَّلَ', T('por grados'), 'تَدَرَّبَ'],
        ['VI', 'تَفَاعَلَ', T('reciprocidad'), 'تَحَالَفَ'],
        ['VII', 'اِفْتَعَلَ', T('esfuerzo'), 'اِجْتَهَدَ'],
        ['VIII', 'اِفْتَعَلَ', T('recepción'), 'اِتَّخَذَ'],
        ['IX', 'اِفْعَلَ', T('reflexiva'), 'انْكَشَفَ'],
        ['X', 'اِسْتَفْعَلَ', T('pedir'), 'اسْتَقْلَلَ'],
        ['XI', 'فَاعِلَ', T('con sufijo de persona'), 'سَافَرْتُ'],
        ['XII', 'فَعِلَ', T('con prefijo de persona'), 'فَعِلْنَا'],
        ['XIII', 'فَعُولُ', T('con prefijo de persona'), 'فَعُولْنَا'],
        ['XIV', 'مَفْعُولُ', T('participativo'), 'مَقْتُولٌ'],
        ['XV', 'مَفْعِلُ', T('con prefijo de persona'), 'مَفْعِلْنَا'],
      ],
    },
    {
      caption: T('Clase abierta o cerrada'),
      head: [
        T('Clase'),
        T('Abierta o cerrada'),
        T('Por qué'),
        T('Ejemplo'),
        T('Clase'),
        T('Abierta o cerrada'),
        T('Por qué'),
        T('Ejemplo'),
      ],
      rows: [
        [
          T('sustantivo'),
          T('abierta'),
          T('los moldes hacen nombres'),
          'حِكْمَة',
          T('artículo'),
          T('cerrada'),
          T('un solo morfema'),
          'الـ',
        ],
        [
          T('verbo'),
          T('abierta'),
          T('quince moldes'),
          'تَحَالَفَ',
          T('pronombre'),
          T('cerrada'),
          T('26 formas fijas'),
          'هُوَ',
        ],
        [
          T('adjetivo'),
          T('abierta'),
          T('sigue al nombre nuevo'),
          'جَدِيدٌ',
          T('preposición'),
          T('cerrada'),
          T('unas 50'),
          'مِنْ',
        ],
        [
          T('adverbio'),
          T('abierta'),
          T('adjetivo más tanwīn'),
          'جَدِيدًا',
          T('numeral'),
          T('cerrada'),
          T('tabla del 3 al mil'),
          'مِئَة',
        ],
      ],
    },
    {
      caption: T('Recuento de las clases cerradas'),
      head: [T('Clase'), T('Cantidad'), T('Nota')],
      rows: [
        [T('artículos'), '1', T('más la iḍāafa sin artículo')],
        [T('pronombres'), '26', T('más 14 formas pegadas')],
        [T('preposiciones'), '50', T('las largas y las tres cortas')],
        [T('partículas'), '40', T('conectores, negadores y las de Dios')],
        [T('numerales del 3 al 10'), '8', T('tabla propia')],
        [T('numerales del 11 al 99'), '90', T('por regla, no por lista')],
      ],
    },
  ],
};
