import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('Fonemas y ḥarakāt'),
  subtitle: T('فَتْحَة، ضَمَّة، كَسْرَة: las tres vocales breves'),
  section: T('Alfabetos y escritura'),
  body: C(`## Tres signos para tres vocales

El árabe no escribe sus vocales, las marca. Son tres signos y tres vocales: {فَتْحَة} vale {a}, {ضَمَّة} vale {u}, {كَسْرَة} vale {i}. Cada uno es un trazo, no una letra, y el lugar importa: fatha y damma van encima de la consonante, kasra debajo, y la damma tiene la forma de un {و} en miniatura. Un cuarto signo, {سُكُون}, avisa de que la consonante no lleva vocal ninguna.

**Una consonante sin signo se lee con fatha.** Quien viene del griego espera ver la vocal; quien viene del latín espera ver la letra larga. En árabe lo que no está escrito es {a}, y esa regla resuelve la mitad de las dudas de quien empieza a leer un texto antiguo.

## Las tres vocales largas

Las largas tienen letra propia: {ا} para {ā}, {و} para {ū}, {ي} para {ī}. No reciben signo, porque la letra ya es la vocal. Comparar {بَا} con {بَ} es comparar la misma calidad en dos duraciones, y la diferencia es de tiempo, no de sonido.

Eso crea un problema de lectura que no existe en español. El texto bíblico antiguo escribe a menudo {اسم} donde la tradición vocalizada escribe {اسْم}, y {كتب} donde se lee {كَتَبَ}. Las vocales largas casi nunca están escritas y sobreviven solo en la pronunciación: leer el manuscrito es leer un texto con las vocales cortadas.

## Veintiocho consonantes

Son veintiocho, y el criterio de conteo no es el que se espera: {أ} cuenta como consonante, y {ء} cuenta como otra. La agrupación que importa es el lugar de articulación, labio, lengua, garganta, porque es ella la que explica por qué letras casi idénticas para el alfabeto latino producen sonidos distintos: {ت} y {ط} están en extremos opuestos de la lengua aunque la memoria del alfabeto latino las junte.

## Criterio de lectura

Lea el signo antes de la letra, siempre. En {فِي بَدْءِ خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ} el {بَ} es {a} breve, el {بِ} de {فِي} es {i} breve, y el {بْ} de {بَدْءِ} no lleva vocal. Quien traduce sin leer los signos escribe la misma palabra para cuatro cosas distintas, y el texto pierde lo que afirmaba.`),
  vocab: [
    V('فَتْحَة', 'فَتْحَة', 'vocal breve a; trazo encima de la consonante'),
    V('ضَمَّة', 'ضَمَّة', 'vocal breve u; trazo con forma de waw pequeño'),
    V('كَسْرَة', 'كَسْرَة', 'vocal breve i; trazo debajo de la consonante'),
    V('سُكُون', 'سُكُون', 'signo de consonante sin vocal'),
    V('بَ', 'بَ', 'ba, con vocal breve'),
    V('بِ', 'بِ', 'bi, con vocal breve'),
    V('بَا', 'بَا', 'ba largo'),
    V('بِي', 'بِي', 'bi largo'),
    V('أ', 'أ', 'alif con hamza arriba; a en posición inicial'),
    V('إ', 'إ', 'alif con hamza abajo'),
    V('ء', 'ء', 'hamza; la consonante más corta del alfabeto'),
    V('ه', 'ه', 'ha; suena como h en las lenguas europeas modernas'),
    V('ط', 'ط', 't enfática; la lengua sube a la raíz de la boca'),
    V('ض', 'ض', 'd enfática; lengua y paladar'),
    V('شَدَّة', 'شدة', 'shadda; signo de consonante duplicada'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué vocal lleva la consonante {قْ} en {قَلْبٌ}?'),
    options: [T('a breve'), T('u breve'), T('ninguna'), T('i breve')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('El signo que avisa "consonante sin vocal" se llama ___.'),
      answer: 'سُكُون',
      hint: T('Es el cuarto signo, junto a fatha, damma y kasra.'),
    },
    {
      kind: 'match',
      prompt: T('Associe signo y vocal.'),
      pairs: [
        { a: T('فَتْحَة'), b: T('a breve') },
        { a: T('ضَمَّة'), b: T('u breve') },
        { a: T('كَسْرَة'), b: T('i breve') },
        { a: T('سُكُون'), b: T('sin vocal') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuántas consonantes tiene el alfabeto árabe?'),
      options: [T('26'), T('27'), T('28'), T('29')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Associe letra y lugar de articulación.'),
      pairs: [
        { a: T('ط'), b: T('lengua en la raíz de la boca') },
        { a: T('ب'), b: T('los dos labios') },
        { a: T('ق'), b: T('fondo de la garganta') },
      ],
      answer: [0, 1, 2],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Las vocales breves son tres signos: {فَتْحَة} = {a}, {ضَمَّة} = {u}, {كَسْرَة} = {i}.'),
    },
    { n: '2', text: T('**Una consonante sin ḥaraka se lee con fatha.**') },
    {
      n: '3',
      text: T('La vocal larga tiene letra propia, {ا}, {و} y {ي}, y por eso no recibe signo.'),
    },
    {
      n: '4',
      text: T(
        '{أ} e {إ} son consonantes y cuentan entre las 28; la vocal larga {ا} sin hamza es otra letra.',
      ),
    },
    {
      n: '5',
      text: T(
        'En el texto bíblico antiguo las vocales largas rara vez están escritas; quedan solo en la pronunciación.',
      ),
    },
  ],
  notes: [
    {
      label: T('Cinco palabras, una letra'),
      text: T(
        '{كَلِمَةٌ}, {كَلِمَتَانِ}, {كَلِمَتَيْنِ}, {كَلِمَةٍ} y {كَلِمَاتٍ} son cinco cosas distintas escritas desde una sola raíz. El signo hace todo el trabajo.',
      ),
    },
    {
      label: T('Por qué leer los signos'),
      text: T(
        'Traducir sin ellos es como traducir español sin tildes: {pára} y {para} se vuelven la misma palabra, y el sentido del versículo cambia.',
      ),
    },
  ],
  examples: [
    { text: 'كَتَبَ', gloss: T('kataba, escribió; a breve en las dos vocales') },
    { text: 'كُتُبٌ', gloss: T('kutub, libros; u breve') },
    { text: 'بِسْمِ', gloss: T('bis-mi, en nombre de; i breve') },
    { text: 'قَلْبٌ', gloss: T('qalb, corazón; la consonante no lleva vocal') },
    { text: 'كِتَابٌ', gloss: T('kitāb, libro; vocal larga después de i breve') },
    { text: 'نُورٌ', gloss: T('nūr, luz; la vocal larga escrita con waw') },
    { text: 'سَمَاءٌ', gloss: T('samāʾ, cielo; hamza al final') },
    { text: 'أَحَدٌ', gloss: T('aḥad, uno; hamza al principio') },
    { text: 'هَذَا', gloss: T('hādhā, este; la ha inicial') },
  ],
  tables: [
    {
      caption: T('Los cuatro signos'),
      head: [T('Signo'), T('Nombre'), T('Posición'), T('Ejemplo')],
      rows: [
        ['فَتْحَة', T('fatha'), T('encima'), 'بَ = baT('],
        [')ضَمَّة', 'dammaT(', T(')encima'), 'قُ = quT('],
        [')كَسْرَة', 'kasraT(', T(')debajo'), 'بِ = biT('],
        [')سُكُون', 'sukunT(', T(')encima, ovaladoT('), T(')قْ = q sin vocal')],
      ],
    },
    {
      caption: T('Breve y larga'),
      head: [T('Vocal'), T('Breve'), T('Larga'), T('Fonema')],
      rows: [
        [T('a'), 'بَ', 'بَا', T('a / aː')],
        [T('i'), 'بِ', 'بِي', T('i / iː')],
        [T('u'), 'قُرْ', 'نُور', T('u / uː')],
      ],
    },
    {
      caption: T('Dónde se forma cada consonante'),
      head: [T('Grupo'), T('Letras'), T('Dónde se forma')],
      rows: [
        [T('labios'), 'ب م و فT(', T(')el labio superior contra el inferiorT(')],
        [T(')dientes'), 'ث ذT(', T(')la punta sale entre los dientesT(')],
        [T(')lengua media'), 'ت د س ز رT(', T(')la punta toca el dorso de la lenguaT(')],
        [T(')lengua alta'), 'ط صT(', T(')la lengua sube a la raíz de la bocaT(')],
        [T(')paladar'), 'ش ضT(', T(')la lengua se cierra contra el paladarT(')],
        [T(')techo de la boca'), 'لT(', T(')la punta toca el techoT(')],
        [T(')garganta'), 'أ هT(', T(')la boca se abre y el sonido sale libreT(')],
        [T(')fondo de la garganta'), 'ح خ ع غ ق كT(', T(')el sonido viene del fondo')],
      ],
    },
  ],
};
