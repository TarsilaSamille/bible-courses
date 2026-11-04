import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  title: T('Partículas de lugar, origen y compañía'),
  subtitle: T('مِنْ، فِي، عَلَى، إِلَى، عَنْ، مَعَ، حَتَّى'),
  section: T('Partículas'),
  body: C(`## Las siete y lo que pide cada una

Las siete rigen el genitivo, así que la terminación del sustantivo que rigen ya entrega la información. Lo que cambia entre ellas no es el caso sino el tipo de complemento que pide cada una, y eso es lo que decide cuál usar.

{مِنْ} pide origen: {مِنَ الْبَيْتِ}. {فِي} pide lugar o tiempo: {فِي الْبَيْتِ}, {فِي يَوْمِ}. {عَلَى} pide superficie, apoyo o abstracción: {عَلَى الْمَجَلِسِ}, {عَلَى الْحَقِّ}. {إِلَى} pide destino: {إِلَى الْبَيْتِ}. {عَنْ} pide alejamiento o asunto: {عَنِ الْبَيْتِ}, {عَنِ الْمَلِكِ}. {مَعَ} pide compañía. {حَتَّى} pide un límite, y el límite puede ser de espacio o de tiempo.

La distinción que más importa en la práctica es la que separa {فِي} de {عَلَى}. {فِي} es interior, {عَلَى} es superficie: {فِي الْقَارُورَةِ} y {عَلَى الْمَائِدَةِ}. Una traducción que intercambia las dos produce una frase que no está mal en ninguna palabra y no está en ninguna parte.

## La construcción de cada una

Cada partícula tiene un uso en el que es especialmente probable, y es en ese uso donde aparece más en el texto antiguo.

{مِنْ} delante de un nombre verbal marca origen, causa o separación, y por eso significa "por" en {مِنْ قَوْلِهِ} y "de" en {مِنْ أَبِيهِ}. {حَتَّى} con lugar da {حَتَّى مَطْلَعِ الْفَجْرِ}, y con tiempo da {حَتَّى لَمَّا}. {عَنْ} tiene un segundo sentido que es el más útil al traducir: {عَنْهُ} con el pronombre significa "sobre él", en el sentido de asunto.

Y hay un segundo conjunto, más pequeño y más difícil, que hace el mismo trabajo: {بِـ}, {لِـ} y {كَـ}. {بِـ} es {فِي} abreviado, como en {بِذَاكَ}, "por aquello". {كَـ} es {مِثْلَ} abreviado, como en {كَذَا}, "como aquello". {لِـ} es la partícula de posesión, y vale "tener", "para", "de". Quien conoce solo las siete largas pierde media preposición de las que encuentra en el texto.

## La partícula que cambia de caso

Y aquí está la excepción, que merece una sección propia porque es el único punto donde falla el sistema de casos.

**{مَعَ} cambia de caso según el pronombre que viene.** Con {هُوَ} viene {مَعَهُ}, con {هِيَ} viene {مَعَهَا}, y con {يَا} viene {مَعَكَ} en acusativo y {مَعَكِ} en genitivo. Con pronombres de plural la forma es {مَعَهُمْ} y {مَعَهُنَّ}, siempre en genitivo. Seis formas para una preposición, y el contexto decide.

El motivo está en la historia de la lengua: {مَعَ} era un sustantivo que significa compañía, y un sustantivo regido va al genitivo. El acusativo sobrevivió en algunas formas, y por eso la lista es irregular en lugar de limpia.

Lo segundo que hace {مَعَ} es convertirse en verbo. En {سَافَرَ مَعَهُ} una palabra que era preposición aparece como verbo, y el sentido es el mismo: "viajó con él". Quien busca una partícula abstracta en el texto bíblico encuentra un verbo, y la traducción sigue siendo correcta.

Después, {حَتَّى} tiene tres vidas. Es preposición con límite de espacio, adverbio con "hasta que" y verbo con "hasta". El español necesita tres palabras para las tres cosas, y el árabe necesita una.

## Criterio de lectura

En {أَسْعَدُ الرَّجُلِ الَّذِي لَمْ يَسْلُكْ فِي مَشُورَةِ الأَشْرَارِ وَفِي طَرِيقِ الْخُطَاةِ لَمْ يَقِفْ} la misma partícula {فِي} aparece tres veces, y lo que cambia es el complemento: {مَشُورَةِ} es consejo, {طَرِيقِ} es camino, y el contexto pide {مَقْعَدِ} en la tercera. Quien-tradujo {فِي} como "dentro de" las tres veces dirá que el hombre no entró en el consejo, en el camino y en la sala. Quien lo tradujo por "en" acertó las tres, porque eso es todo lo que dice la partícula.`),
  vocab: [
    V('مِنْ', 'من', 'de; desde; por'),
    V('فِي', 'في', 'en; dentro de'),
    V('عَلَى', 'على', 'sobre; encima de'),
    V('إِلَى', 'إلى', 'a; hasta'),
    V('عَنْ', 'عن', 'de; acerca de'),
    V('مَعَ', 'مع', 'con'),
    V('حَتَّى', 'حتى', 'hasta; hasta que'),
    V('بِـ', 'في', 'partícula abreviada, equivale a {فِي}'),
    V('لِـ', 'إلى', 'partícula abreviada, de posesión'),
    V('كَـ', 'مثل', 'partícula abreviada, como'),
    V('مَشُورَة', 'مشورة', 'consejo; asamblea'),
    V('طَرِيق', 'طريق', 'camino'),
    V('مَقْعَد', 'مقعد', 'asiento'),
    V('مَغْرِب', 'مغرب', 'poniente'),
    V('قَوْلِهِ', 'قول', 'su palabra'),
    V('ذَاكَ', 'ذاك', 'aquello'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué partícula pide destino?'),
    options: [T('مِنْ'), T('فِي'), T('إِلَى'), 'عَنْ'],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa la forma de {مَعَ} con el pronombre {هُوَ}: ___'),
      answer: 'مَعَهُ',
      hint: T('Con pronombre de tercera persona {مَعَ} lleva sufijo.'),
    },
    {
      kind: 'match',
      prompt: T('Associe partícula y complemento.'),
      pairs: [
        { a: T('مِنْ'), b: T('origen') },
        { a: T('فِي'), b: T('lugar o tiempo') },
        { a: T('عَلَى'), b: T('superficie') },
        { a: T('إِلَى'), b: T('destino') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué es {بِـ} en su forma larga?'),
      options: [T('مِنْ'), T('مَعَ'), T('فِي'), 'إِلَى'],
      answer: 2,
    },
    {
      kind: 'choose',
      prompt: T('En {مِنْ قَوْلِهِ}, ¿qué marca {مِنْ}?'),
      options: [T('Origen, causa o separación'), T('Destino'), T('Límite'), T('Compañía')],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Las siete rigen el genitivo; lo que cambia es el tipo de complemento que pide cada una.',
      ),
    },
    {
      n: '2',
      text: T(
        '**{فِي} pide lugar y tiempo, {عَلَى} pide superficie y abstracción, {إِلَى} pide destino, {عَنْ} pide asunto.**',
      ),
    },
    { n: '3', text: T('{مَعَ} es la única que cambia de caso con pronombres: {مَعِي} y {مَعَهُ}.') },
    {
      n: '4',
      text: T(
        '{مِنْ} delante de un nombre verbal marca origen, causa o separación, y por eso también significa "por".',
      ),
    },
    {
      n: '5',
      text: T('{بِـ} y {كَـ} son {فِي} y {مِثْلَ} abreviados, y {لِـ} es la partícula de posesión.'),
    },
  ],
  notes: [
    {
      label: T('La partícula que también es verbo'),
      text: T(
        '{مَعَ} pasa de preposición a verbo en muchas expresiones, como en {سَافَرَ مَعَهُ}, "viajó con él", y el sentido es el mismo. Quien busca una partícula abstracta en el texto bíblico encuentra un verbo, y la traducción sigue siendo correcta.',
      ),
    },
    {
      label: T('Por qué {مَعَ} es irregular'),
      text: T(
        '{مَعَ} era un sustantivo que significaba compañía, y un sustantivo regido va al genitivo. El acusativo sobrevivió en algunas formas, y por eso las seis formas con pronombre no siguen un patrón limpio.',
      ),
    },
  ],
  examples: [
    { text: 'مِنَ الْبَيْتِ', gloss: T('de la casa; origen') },
    { text: 'فِي الْبَيْتِ', gloss: T('en la casa; lugar') },
    { text: 'فِي يَوْمِ', gloss: T('en un día; tiempo') },
    { text: 'عَلَى الْمَجَلِسِ', gloss: T('sobre la asamblea') },
    { text: 'إِلَى ابْنِهِ', gloss: T('a su hijo; destino') },
    { text: 'عَنِ الْمَلِكِ', gloss: T('sobre el rey; asunto') },
    { text: 'مَعَهُ', gloss: T('con él') },
    { text: 'حَتَّى الْمَغْرِبِ', gloss: T('hasta el poniente; límite de espacio') },
    { text: 'بِذَاكَ', gloss: T('por aquello; la partícula abreviada') },
  ],
  tables: [
    {
      caption: T('Las siete y lo que piden'),
      head: [T('Partícula'), T('Glosa'), T('Complemento'), T('Ejemplo')],
      rows: [
        ['مِنْ', T('de; desde'), T('origen, parte, causa'), 'مِنَ الْبَيْتِ'],
        ['فِي', T('en; dentro'), T('lugar o tiempo'), 'فِي الْبَيْتِ'],
        ['عَلَى', T('sobre'), T('superficie, apoyo, abstracción'), 'عَلَى الْمَجَلِسِ'],
        ['إِلَى', T('a; hasta'), T('destino, dirección, límite'), 'إِلَى الْبَيْتِ'],
        ['عَنْ', T('de; sobre'), T('alejamiento, asunto'), 'عَنِ الْمَلِكِ'],
        ['مَعَ', T('con'), T('compañía'), 'مَعَهُ'],
        [T('حَتَّى'), T('hasta'), T('límite de espacio o tiempo'), 'حَتَّى الْمَغْرِبِ'],
      ],
    },
    {
      caption: T('Las tres partículas abreviadas'),
      head: [T('Forma'), T('Sustituye a'), T('Ejemplo'), T('Glosa')],
      rows: [
        ['بـ', 'فِي', 'بِذَاكَ', T('por aquello')],
        ['لـ', 'إِلَى', 'لَهُ', T('para él; suyo')],
        ['كـ', 'مِثْلَ', 'كَذَا', T('así; como aquello')],
      ],
    },
    {
      caption: T('{مَعَ} y los pronombres'),
      head: [T('Persona'), T('Forma'), T('Caso'), T('Glosa')],
      rows: [
        [T('1ª'), 'مَعِي', T('genitivo'), T('con nosotros')],
        [T('2ª masc.'), 'مَعَكَ', T('acusativo'), T('contigo')],
        [T('2ª fem.'), 'مَعَكِ', T('genitivo'), T('contigo')],
        [T('3ª masc.'), 'مَعَهُ', T('genitivo'), T('con él')],
        [T('3ª fem.'), 'مَعَهَا', T('genitivo'), T('con ella')],
        [T('plural masc.'), 'مَعَهُمْ', T('genitivo'), T('con ellos')],
      ],
    },
  ],
};
