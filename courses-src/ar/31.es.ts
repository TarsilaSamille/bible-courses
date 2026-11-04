import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  title: T('Lectura: Salmo 23'),
  subtitle: T('الرَّبُّ رَاعِيَّ: la frase y lo que esconde'),
  section: T('Lecturas'),
  body: C(`## La pasaje por bloques

El Salmo 23 tiene seis versículos y ninguna cláusula es difícil por separado. Lo que hace valiosa la pasaje es que reúne, en poco texto, todo lo que el curso entero ha ido confirmando.

El primer versículo es una iḍāafa con pronombre y una negación: {اَلرَّبُّ رَاعِيَّ فَلاَ يُعْوِزُنِي شَيْءٌ}. {رَاعِيَّ} está en genitivo porque cierra una unidad cuyo primer elemento es {اَلرَّبُّ}, y la {يَّ} final es el pronombre {ـي} más la terminación del genitivo. {شَيْءٌ} es la única palabra indefinida del versículo, y es exactamente la única que la cláusula niega.

El tercero es una iḍāafa doble: {إِلَى مِيَاهِ الرَّحْمَةِ يُورِدُنِي}. {إِلَى} rige el genitivo, {مِيَاهِ} es el primer elemento y {الرَّحْمَةِ} el segundo, y los dos están en genitivo. Quien traduce "a las aguas" se ha olvidado de que el destino no lleva artículo en {مِيَاهِ}, y quien traduce "a las aguas de la misericordia" acertó.

## Lo que muestra el análisis

A lo largo de los seis versículos casi todo sustantivo está en genitivo: {مَكَانٍ، خُضْرٍ، مِيَاهِ، الرَّحْمَةِ، مَشَاوِئِ، الْبِرِّ، اسْمِهِ، ظِلِّ، الْمَوْتِ، خَيْرٍ، حَيَاتِي، الرَّبِّ، أَيَّامِ}. Solo cinco palabras están en acusativo, y cuatro son pronombres de persona: {نَفْسِي، قُدَّامِي، رَأْسِي، عَصَاكَ، وَعُكَّازُكَ}. El resto está en nominativo, y son casi siempre los sujetos.

Los verbos son pocos y están bien repartidos. El imperfecto predomina: {يُرْبِضُنِي، يُورِدُنِي، يُعَزِّيَانِنِي، تُرَتِّبُ، يُدَاهِمُنِي، يَتْبَعَانِنِي، أَسْكُنُ}. El perfecto aparece dos veces, y las dos veces narra lo que hizo el salmista: {سِرْتُ} y {مَسَحْتَ}. El verbo de primera persona que cierra el salmo, {أَسْكُنُ}, es imperfecto, y la diferencia entre {سِرْتُ} y {أَسْكُنُ} es la diferencia entre lo que ocurrió y lo que ocurrirá, y es la única información de tiempo que da el salmo.

## El primer versículo y el último

El versículo 1 tiene una cláusula, con sujeto, complemento y negación. El versículo 6 tiene seis, y la densidad de construcciones crece sin que el texto se vuelva más difícil.

La progresión es esta: el versículo 1 nombra quién es Dios, el 3 nombra adónde lleva, el 4 nombra por qué nombre guía, el 5 nombra con quién está, y el 6 vuelve a {مَائِدَةٌ}, una mesa, y termina en {بَيْتِ الرَّبِّ}. Una pasaje que empieza por quién y acaba por dónde, y que en medio muestra el camino entero.

Lo que el traductor no puede hacer es tratar {شَيْءٌ} como definido. El indefinido es lo único que el versículo niega, y la traducción que escribe "y no me faltará nada" acierta porque leyó el indefinido y no la palabra.

## Cómo leer un salmo

El método cabe en cinco pasos, y sirve para cualquier salmo, cualquier testimonio, cualquier libro poético.

Primero, busca los verbos y nombra la voz de cada uno: perfecto, imperfecto, futuro. Segundo, busca la definitud: dónde hay {ال}, dónde hay nombre propio, dónde hay iḍāafa. Tercero, sigue las cadenas de genitivo y marca cada pieza, porque ahí vive la posesión. Cuarto, enumera las preposiciones y di qué relación establece cada una. Quinto, solo entonces traduce, palabra por palabra, y deja que la sintaxis salga en español en el mismo orden.

El Salmo 23 tiene veintiséis sustantivos y quince verbos. Quince verbos es poco: quien los ha leído sabe quién habla, cuándo y en qué voz. Por eso la pasaje entera cabe en la memoria de quien la estudia.`),
  vocab: [
    V('الرَّبُّ', 'رب', 'el Señor'),
    V('رَاعِيَّ', 'راع', 'mi pastor; iḍāafa con pronombre'),
    V('شَيْءٌ', 'شيء', 'cosa; el único indefinido del versículo 1'),
    V('مَكَانٍ', 'مكان', 'lugar; genitivo'),
    V('خُضْرٍ', 'خضر', 'verde; genitivo'),
    V('يُرْبِضُنِي', 'رعى', 'apacienta'),
    V('مِيَاهِ', 'ماء', 'aguas; genitivo sin artículo'),
    V('الرَّحْمَةِ', 'رحمة', 'misericordia; genitivo'),
    V('يُورِدُنِي', 'ورد', 'conduce'),
    V('نَفْسِي', 'نفس', 'mi alma'),
    V('مَشَاوِئِ', 'ماشاء', 'pastos; plural roto'),
    V('الْبِرِّ', 'بر', 'justicia'),
    V('وَادِي', 'واد', 'valle'),
    V('ظِلِّ', 'ظل', 'sombra; genitivo'),
    V('الْمَوْتِ', 'موت', 'muerte; genitivo'),
    V('عَصَاكَ', 'عص', 'tu cayado; acusativo'),
    V('بَيْتِ', 'بيت', 'casa; genitivo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {اَلرَّبُّ رَاعِيَّ}, ¿qué caso tiene {رَاعِيَّ}?'),
    options: [T('Nominativo'), T('Acusativo'), T('Genitivo'), T('Vocal')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa la iḍāafa: "el valle de la sombra de la muerte" es {وَادِي ___ الْمَوْتِ}.'),
      answer: 'ظِلِّ',
      hint: T('El segundo elemento de una iḍāafa siempre va al genitivo.'),
    },
    {
      kind: 'match',
      prompt: T('Associe palavra e função.'),
      pairs: [
        { a: T('شَيْءٌ'), b: T('indefinido') },
        { a: T('رَاعِيَّ'), b: T('genitivo con pronombre') },
        { a: T('نَفْسِي'), b: T('acusativo') },
        { a: T('بَيْتِ'), b: T('genitivo por iḍāafa') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿En qué modo está {أَسْكُنُ}?'),
      options: [T('Perfecto'), T('Imperfecto'), T('Futuro'), T('Orden')],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('¿Cuántos sustantivos tiene el Salmo 23, en esta cuenta?'),
      options: [T('Cinco'), T('Dieciséis'), T('Veintiséis'), T('Cincuenta')],
      answer: 2,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '**Toda iḍāafa del salmo tiene el segundo elemento en genitivo, y la {ـِ} está ahí para decirlo.**',
      ),
    },
    {
      n: '2',
      text: T('{رَاعِيَّ} y {نَفْسِي} son iḍāafas con pronombre: el segundo elemento no aparece escrito.'),
    },
    {
      n: '3',
      text: T(
        'Los verbos del salmista se dividen en {سِرْتُ} y {مَسَحْتَ} en el perfecto y {أَسْكُنُ} en el imperfecto, y esa es la única información de tiempo que da el salmo.',
      ),
    },
    {
      n: '4',
      text: T(
        'El versículo 1 tiene una cláusula y el versículo 6 tiene seis, y la densidad de casos crece sin que el texto se vuelva más difícil.',
      ),
    },
    {
      n: '5',
      text: T(
        'El verbo va antes del sujeto cuando el sujeto es un pronombre: {يَتْبَعَانِنِي} va antes de {خَيْرٌ وَرَحْمَةٌ}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Lo que el traductor no puede hacer'),
      text: T(
        'Una traducción que pone "el Señor es mi pastor y nada me faltará" acertó. Lo que no puede hacer es tratar {شَيْءٌ} como definido: el indefinido es lo único que la cláusula niega, y por eso la negación tiene sentido.',
      ),
    },
    {
      label: T('El estilo del versículo seis'),
      text: T(
        'El versículo seis es una enumeración, y una enumeración en árabe trae {وَ} antes de cada elemento: {عَصَاكَ وَعُكَّازُكَ}, {خَيْرٌ وَرَحْمَةٌ}. El {وَ} no se traduce en español más allá de la coma, y perderlo hace que la frase parezca más pobre de lo que es.',
      ),
    },
  ],
  examples: [
    { text: 'اَلرَّبُّ رَاعِيَّ', gloss: T('el Señor es mi pastor; iḍāafa con pronombre') },
    { text: 'فَلاَ يُعْوِزُنِي شَيْءٌ', gloss: T('y nada me faltará; lo indefinido es lo negado') },
    { text: 'فِي مَكَانٍ خُضْرٍ', gloss: T('en lugar de verdes pastos; dos genitivos') },
    { text: 'إِلَى مِيَاهِ الرَّحْمَةِ', gloss: T('a las aguas de la misericordia; iḍāafa doble') },
    { text: 'يُرِدُّ نَفْسِي', gloss: T('restaura mi alma; pronombre en acusativo') },
    { text: 'فِي وَادِي ظِلِّ الْمَوْتِ', gloss: T('en el valle de la sombra de la muerte; tres iḍāafas') },
    { text: 'لَأَنَّكَ أَنْتَ مَعِي', gloss: T('porque tú estás conmigo') },
    { text: 'عَصَاكَ وَعُكَّازُكَ', gloss: T('tu cayado y tu apoyo; dos acusativos') },
    { text: 'إِلَى مَدَى الأَيَّامِ', gloss: T('por los días de siempre') },
  ],
  tables: [
    {
      caption: T('El versículo 1 palabra por palabra'),
      head: [T('Palabra'), T('Papel'), T('Caso o modo'), T('Qué es')],
      rows: [
        ['اَلرَّبُّ', T('sujeto'), T('nominativo'), T('nombre propio')],
        ['رَاعِيَّ', T('complemento del sujeto'), T('genitivo'), T('iḍāafa con pronombre')],
        ['فَلاَ', T('conector'), T('partícula'), T('y así no')],
        ['يُعْوِزُنِي', T('verbo'), T('imperfecto'), T('faltar')],
        ['شَيْءٌ', T('objeto'), T('nominativo'), T('el único indefinido')],
      ],
    },
    {
      caption: T('Las cadenas de iḍāafa'),
      head: [T('Cadena'), T('Glosa'), T('Casos'), T('Nota')],
      rows: [
        ['رَاعِيَّ', T('mi pastor'), T('genitivo con pronombre'), T('sin sustantivo escrito')],
        [
          'إِلَى مِيَاهِ الرَّحْمَةِ',
          T('a las aguas de la misericordia'),
          T('preposición y dos genitivos'),
          T('el destino no lleva artículo'),
        ],
        ['مَشَاوِئِ الْبِرِّ', T('los pastos de la justicia'), T('dos genitivos'), T('plural roto')],
        [
          'وَادِي ظِلِّ الْمَوْتِ',
          T('el valle de la sombra de la muerte'),
          T('tres genitivos'),
          T('cadena completa'),
        ],
        ['بَيْتِ الرَّبِّ', T('la casa del Señor'), T('dos genitivos'), T('iḍāafa con nombre propio')],
      ],
    },
    {
      caption: T('Los verbos del salmo'),
      head: [T('Forma'), T('Modo'), T('Persona'), T('Glosa')],
      rows: [
        ['يُعْوِزُنِي', T('imperfecto'), T('tercera'), T('no me faltará')],
        ['يُرْبِضُنِي', T('imperfecto'), T('tercera'), T('da descanso')],
        ['يُورِدُنِي', T('imperfecto'), T('tercera'), T('conduce')],
        ['يُعَزِّيَانِنِي', T('imperfecto'), T('segunda del dual'), T('me consuelan')],
        ['سِرْتُ', T('perfecto'), T('primera'), T('caminé')],
        ['مَسَحْتَ', T('perfecto'), T('segunda'), T('ungiste')],
        ['أَسْكُنُ', T('imperfecto'), T('primera'), T('habitaré')],
      ],
    },
  ],
};
