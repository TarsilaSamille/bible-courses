import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  title: T('El plural y sus patrones'),
  subtitle: T('كُتُب، رِجَال، مُعَلِّمُون، مُعَلِّمَات'),
  section: T('Alfabetos y escritura'),
  body: C(`## El plural que es solo un sufijo

El plural regular añade un sufijo y no toca nada más. El masculino toma {ـون} en el nominativo y {ـين} en los demás casos: {مُعَلِّمُونَ} y {مُعَلِّمِينَ}. El femenino toma {ـات} en todos: {مُعَلِّمَاتٌ} y {مُعَلِّمَاتٍ}.

Lo que decide es el género, no el significado. {مُعَلِّم} es masculino, así que su plural regular es {مُعَلِّمُونَ}; {مُعَلِّمَة} es femenino, y el plural regular es {مُعَلِّمَاتٌ}. Un sustantivo que no tiene nada que ver con personas sigue la misma cuenta: {كِتَاب} es masculino y tiene {كُتُب}, mientras {شَجَرَة} es femenino y tiene {أَشْجَار}.

Después hay una restricción que suele ser la primera sorpresa: **el plural regular masculino está reservado para el masculino humano** y para pocas abstracciones. {رَجُل} no se vuelve ni {رَجُول} ni {رَجُلان} como plural normal, sino {رِجَال}. Por eso {أَقْوَال} es el plural de {قَوْل} y no de {قَائِل}.

## Los patrones son la parte que sirve

Cuando el plural no es regular, el árabe lo forma con un patrón. Un patrón es un molde de tres o cuatro vocales y consonantes con la raíz encajada dentro, y por eso se repite. {كِتَاب} entra en el molde {فُعُول} y sale {كُتُب}; {غُرْفَة} entra en {فُعَالَة} y sale {غُرَف}; {جَمِيل} entra en {مَفَاعِل} y sale {جَمَال}.

La cuenta es mecánica, y por eso funciona: cambia las vocales del molde, conserva las consonantes de la raíz en orden, y tienes el plural. No es poético ni decorativo. Es el mismo principio que convierte {كِتَاب} en {كِتَابَة} por {مَفْعَالَة}, y quien reconoce el molde lee un plural que nunca había visto.

## Los plurales que nadie produce

Los patrones no cubren todo, y la excepción se queda con el resto de la lección.

Los plurales humanos escapan: {رِجَال}, {نِسَاء}, {بَشَر}, {وَالِدَانِ}, {أَبَوَانِ}. Ningún molde los produce, y el plural de {رَجُل} no se parece a nada más en la lengua. Los plurales colectivos se portan igual, donde el nombre de un animal nombra el rebaño: {بَقَر} no significa dos vacas, significa ganado.

Y están las palabras contadas, que siguen una tabla propia: {أَلْفَة} para tres a diez, {مِئَة} para cien, {أَلْف} para mil. Un nombre propio que ha absorbido el del país es otro caso: {كَيْفَا} y {إِسْرَائِيل} pueden ser plurales de {كَيْف} y de {إِسْرَائِيل} y de {مِصْر} y de {دُبَيْر}, y el contexto decide cuál.

## Criterio de lectura

El versículo del Padrenuestro trae dos plurales irregulares en la misma frase: {رَبَّنَا آتِنَا لَوْجَنَا الْيَوْمَ وَاغْفِرْ لَنَا ذُيُوبَنَا}. En {لَوْجَنَا} el singular {لَوْز} no aparece, y aun así la terminación {ـنَا} muestra el primer plural; en {ذُيُوبَنَا} lo mismo. Quien busca el singular para entender el plural no encuentra nada en {لَوْجَنَا} y concluye que leyó mal. El plural estaba entero dentro de la palabra, y la forma {أَفْعَال} es lo que autoriza la lectura: {لَوْز} más el molde daría {لَوَازَ}, que nadie dice. Lo que produce {لَوْجَنَا} es {لَوْج} más la terminación, con la {ج} de la raíz convertida en {ـنَ}.`),
  vocab: [
    V('كُتُب', 'كتب', 'libros; plural de {كِتَاب}'),
    V('رِجَال', 'رجل', 'hombres; plural irregular'),
    V('نِسَاء', 'نساء', 'mujeres; plural irregular'),
    V('أَشْجَار', 'شجرة', 'árboles'),
    V('أَقْوَال', 'قول', 'dichos; el plural regular masculino llega a lo abstracto'),
    V('جَمَال', 'جمال', 'bellezas'),
    V('مُعَلِّمُونَ', 'معلم', 'maestros'),
    V('مُعَلِّمَاتٌ', 'معلم', 'maestras'),
    V('مَلِكُوت', 'ملكوت', 'reino; algunos aceptan el plural regular'),
    V('لَوْجَنَا', 'لوز', 'el plural de almendra en el Padrenuestro'),
    V('ذُيُوبَنَا', 'ذنب', 'nuestros pecados'),
    V('بَشَر', 'بشر', 'seres humanos; plural irregular'),
    V('أَلْفَة', 'ألف', 'el sustantivo de los números del tres al diez'),
    V('مِئَة', 'مئة', 'cien'),
    V('وَالِدَانِ', 'والد', 'los dos padres'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es el plural regular de {مُعَلِّمَة}?'),
    options: [T('مُعَلِّمُونَ'), T('مُعَلِّمَاتٌ'), T('مُعَلِّمِينَ'), T('مَلَامِح')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete el plural de {كِتَاب}: ___تُب'),
      answer: 'كُ',
      hint: T('Es el patrón {فُعُول}, con la raíz ك ت ب dentro.'),
    },
    {
      kind: 'match',
      prompt: T('Associe patrón y plural.'),
      pairs: [
        { a: T('فُعُول'), b: T('كُتُب') },
        { a: T('فُعَالَة'), b: T('رِجَال') },
        { a: T('مَفَاعِل'), b: T('جَمَال') },
        { a: T('أَفْعَال'), b: T('أَقْوَال') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál de estos plurales no sigue ningún patrón?'),
      options: [T('أَشْجَار'), T('رِجَال'), T('أَقْلَام'), T('جَمَال')],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('En {لَوْجَنَا}, ¿cuántas pistas de plural trae la palabra?'),
      options: [T('Ninguna'), T('La terminación {ـنَا}'), T('La shadda'), T('El artículo')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El plural regular masculino es {ـون} en el nominativo y {ـين} en los demás casos; el femenino es {ـات}.',
      ),
    },
    { n: '2', text: T('**Decide el género: {مُعَلِّم} da {مُعَلِّمُونَ} y {مُعَلِّمَة} da {مُعَلِّمَاتٌ}.**') },
    {
      n: '3',
      text: T(
        'El plural regular masculino está reservado al masculino humano y a pocas abstracciones; {رَجُل} da {رِجَال}.',
      ),
    },
    {
      n: '4',
      text: T(
        'En el plural roto manda el molde: cambia las vocales del patrón y conserva las consonantes de la raíz.',
      ),
    },
    {
      n: '5',
      text: T(
        'Los plurales humanos, los colectivos y los numerales contados no siguen ningún patrón.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por qué funciona el molde'),
      text: T(
        '{كِتَاب} sigue {فُعُول} y da {كُتُب}, {غُرْفَة} sigue {فُعَالَة} y da {غُرَف}. El principio es el mismo en toda la lengua: la raíz ocupa las consonantes, el molde ocupa las vocales.',
      ),
    },
    {
      label: T('Dónde engaña el plural'),
      text: T(
        'En {بَقَر} y {إِبِل} el plural no cuenta animales, nombra el rebaño. Traducirlo como "las vacas" o "los camellos" invierte el número: el texto dice el grupo, y el lector tiene que mantener esa lectura.',
      ),
    },
  ],
  examples: [
    { text: 'كُتُبٌ', gloss: T('libros; patrón {فُعُول}') },
    { text: 'رِجَالٌ', gloss: T('hombres; plural humano sin molde') },
    { text: 'أَشْجَارٌ', gloss: T('árboles; plural regular femenino') },
    { text: 'أَقْوَالٌ', gloss: T('dichos; el regular masculino llega a lo abstracto') },
    { text: 'جَمَالٌ', gloss: T('bellezas; patrón {مَفَاعِل}') },
    { text: 'مُعَلِّمُونَ', gloss: T('maestros; nominativo con {ـون}') },
    { text: 'مُعَلِّمِينَ', gloss: T('maestros; acusativo o genitivo con {ـين}') },
    { text: 'مُعَلِّمَاتٌ', gloss: T('maestras; {ـات} con damma final') },
    { text: 'لَوْجَنَا', gloss: T('almendras; plural irregular, sin singular en la frase') },
  ],
  tables: [
    {
      caption: T('Los dos plurales regulares'),
      head: [T('Tipo'), T('Sufijo'), T('Nominativo'), T('Otros casos'), T('Ejemplo')],
      rows: [
        [T('masculino regular'), 'ـون / ـين', 'ـُونَ', 'ـِينَ', 'مُعَلِّمُونَT('],
        [T(')regular femenino'), 'ـات', 'ـَاتٌ', 'ـَاتٍ', 'مُعَلِّمَاتٌ'],
      ],
    },
    {
      caption: T('Los patrones del plural roto'),
      head: [
        T('Patrón'),
        T('Singular'),
        T('Plural'),
        T('Glosa'),
        T('Patrón'),
        T('Singular'),
        T('Plural'),
        T('Glosa'),
      ],
      rows: [
        ['فُعُول', 'كِتَاب', 'كُتُب', T('libros'), 'فُعَالَة', 'غُرْفَة', 'غُرَف', T('salas')],
        ['أَفْعَال', 'حِمَار', 'أَحْمِر', T('burros'), 'مَفَاعِل', 'جَمِيل', 'جَمَال', T('bellezas')],
        ['فَعِيل', 'شَدِيد', 'شُدَاد', T('los fuertes'), 'فُعَل', 'قَوْل', 'أَقْوَال', T('dichos')],
      ],
    },
    {
      caption: T('Plurales que no siguen patrón'),
      head: [T('Tipo'), T('Ejemplo'), T('Qué ocurre')],
      rows: [
        [T('masculino humano'), 'رِجَال', T('ningún molde lo produce')],
        [T('femenino humano'), 'نِسَاء', T('el singular es {نَسْوَة}')],
        [T('colectivo'), 'بَقَر', T('nombra el rebaño, no los animales')],
        [T('numerales contados'), 'أَلْفَة، مِئَة، أَلْف', T('tabla propia, del tres al mil')],
        [T('nombre propio'), 'إِسْرَائِيل', T('el nombre absorbe el sustantivo del país')],
      ],
    },
  ],
};
