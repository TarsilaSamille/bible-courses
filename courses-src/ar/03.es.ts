import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  section: T('El verbo'),
  title: T('Los verbos esenciales'),
  subtitle: T('ذَهَبَ ir, جَاءَ venir, كَانَ ser: los verbos que sostienen los verbos del texto bíblico'),
  body: C(`## Diez verbos, y dos sin sujeto

Un verbo árabe regular flexiona por patrón: en {كَتَبَ}, {كَتَبْتَ}, {كَتَبُوا}, el molde {كَتَبَ} es fijo y solo cambia el final. Los esenciales no siguen el molde: {كَانَ}, {جَاءَ}, {ذَهَبَ}, {أَكَلَ}, {شَرِبَ}, {لَبِسَ}, {رَأَى}, {سَمِعَ}, {قَالَ}, {قَرَأَ}, {أَعْطَى}, {أَخَذَ} son formas que ninguna regla repite, y son lo que se lee en cada página.

Son pocos y pesan mucho. {ذَهَبَ} ir, {جَاءَ} venir, {كَانَ} ser/estar, {أَكَلَ} comer, {شَرِبَ} beber, {لَبِسَ} vestir, {رَأَى} ver, {سَمِعَ} oír, {قَالَ} decir, {كَتَبَ} escribir, {قَرَأَ} leer, {أَعْطَى} dar, {أَخَذَ} tomar, {عَلِمَ} saber, {فَهِمَ} entender, {عَمِلَ} hacer.

## {كَانَ}: el pasado, y el sujeto no dicho

{كَانَ} es el verbo "ser" más el pretérito. {كَانَ الله}, Dios fue; {وَكَانَ الْكَلِمَة}, y el Verbo era. El árabe no tiene "era" ni "soy" como el portugués: lo resuelve con {كَانَ} en el pasado y con el presente implícito cuando el sujeto es un nombre.

{يُحِبُّ} en presente no necesita {هُوَ} delante: {يُحِبُّ أَبُوهُ}, "lo ama su padre". El pronombre {هُوَ}, {هِيَ} etc. solo entra cuando el sujeto se destaca o no hay otra señal, como {وَهُوَ هُنَا}, "y es aquí donde está".

## {ذَهَبَ}, {جَاءَ} y {لَبِسَ}: el verbo hace a la persona

El árabe no necesita "yo", "tú" o "él" delante del verbo: la forma ya trae la persona. {ذَهَبَ}, él fue; {ذَهَبْتُ}, yo fui; {ذَهَبْتَ}, tú fuiste; {ذَهَبُوا}, ellos fueron; {ذَهَبْنَا}, nosotros fuimos. El sufijo es el pronombre.

Por eso los diez verbos esenciales se aprenden como sufijos y no como palabras sueltas. {جَاءَ} venir, {جِئْتُ}, yo vine; {لَبِسَ} vestir, {لَبِسْتُ}, yo me vestí; {أَكَلَ} comer, {أَكَلْتُ}, yo comí. La forma carga a la persona como el portugués la carga en el propio sustantivo {eu}, que el árabe deja al sufijo.

## {أَكَلَ}, {شَرِبَ}, {لَبِسَ}: lo que nombra el verbo ya es la escena

En el texto bíblico, {أَكَلَ} comer y {شَرِبَ} beber aparecen juntos casi siempre: {الْخُبْزَ وَالْمَاءَ}, el pan y el agua. {لَبِسَ} vestir pide objeto directo: {لَبِسَ ثِيَابًا جَدِيدَةً}, él se vistió ropa nueva. En Marcos 1:6 el griego dice {ἔνδυμα δὲ αὐτοῦ}, y el árabe lo traduce con {وَكَانَ لِبَاسُهُ}, "y su ropa era...".

## En la Biblia

Juan 1:1 abre con {كَانَ}: {فِي الْبَدْءِ كَانَ الْكَلِمَةُ}, en el principio era el Verbo. {كان} está en pasado, y el griego {ἦν} también. El árabe traduce la identidad del Verbo con un verbo que es pasado todo el tiempo, sin que {كان} deje de significar ser.

Mateo 6:11 trae {خُبْزَنَا كَفَافَ يَوْمِنَا}, nuestro pan para el día de hoy, y el verbo que falta es {أَعْطِ}, "danos": el imperativo de {أَعْطَى}. El Padre Nuestro empieza a pedir sin {أَعْطِ} al lado del pan, y el árabe deja el verbo en el vacío, como el griego.`),
  vocab: [
    V('ذَهَبَ', 'ذَهَبَ', 'él fue / ir'),
    V('جَاءَ', 'جَاءَ', 'él vino / venir'),
    V('كَانَ', 'كَانَ', 'él fue / ser'),
    V('أَكَلَ', 'أَكَلَ', 'él comió / comer'),
    V('شَرِبَ', 'شَرِبَ', 'él bebió / beber'),
    V('لَبِسَ', 'لَبِسَ', 'él se vistió / vestir'),
    V('رَأَى', 'رَأَى', 'él vio / ver'),
    V('سَمِعَ', 'سَمِعَ', 'él oyó / oír'),
    V('قَالَ', 'قَالَ', 'él dijo / decir'),
    V('كَتَبَ', 'كَتَبَ', 'él escribió / escribir'),
    V('قَرَأَ', 'قَرَأَ', 'él leyó / leer'),
    V('أَعْطَى', 'أَعْطَى', 'él dio / dar'),
    V('أَخَذَ', 'أَخَذَ', 'él tomó / tomar'),
    V('عَلِمَ', 'عَلِمَ', 'él supo / saber'),
    V('فَهِمَ', 'فَهِمَ', 'él entendió / entender'),
    V('عَمِلَ', 'عَمِلَ', 'él hizo / hacer'),
    V('هُوَ', 'هُوَ', 'él (pronombre)'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{كَانَ} hace el pasado: {كَانَ الله} "Dios fue", y no tiene presente propio donde estaría "es". El silencio es la forma.',
      ),
    },
    {
      n: '§2',
      text: T(
        'La persona ya está en el verbo: {ذَهَبَ} él fue / {ذَهَبْتُ} yo fui / {ذَهَبُوا} ellos fueron. Los pronombres {أنا}, {أنتَ} solo sirven de énfasis.',
      ),
    },
    {
      n: '§3',
      text: T(
        'Los verbos esenciales no siguen molde: {ذَهَبَ}, {جَاءَ}, {كَانَ}, {أَكَلَ}, {شَرِبَ}, {لَبِسَ}, {رَأَى}, {سَمِعَ}, {قَالَ}, {كَتَبَ}, {قَرَأَ}, {أَعْطَى} hay que guardarlos uno a uno.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{أَكَلَ} y {شَرِبَ} aparecen juntos en los textos del pan y el agua: {أَكَلَ خُبْزًا وَشَرِبَ مَاءً}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Juan 1:1 necesita {كَانَ} para decir "era el Verbo", y {كان} en árabe no es un verbo de pasado que borra el presente: es la forma de ser.',
      ),
    },
  ],
  notes: [
    {
      label: T('{هُوَ} y {هي} son pronombres de sujeto, no del verbo'),
      text: T(
        'El verbo árabe lleva la persona en el sufijo, y el pronombre {هُوَ} entra solo para cambiar de persona o destacar. {ذَهَبَ} ya dice "él fue"; {هُوَ ذَهَبَ} dice "fue él quien fue".',
      ),
    },
    {
      label: T('Verbos débiles de medio ج y و'),
      text: T(
        '{جَاءَ} es un verbo débil: el {و}/{ي} del medio se quebró, y el pretérito quedó {جِئْتُ}, {جِئْتَ}. Y {قَالَ} pasa a {قُلْتُ}. El sufijo de persona cambia, y la raíz cambia con él; son los verbos que la gramática junta en un solo grupo.',
      ),
    },
  ],
  examples: [
    { text: 'في البدء كان الكلمة.', gloss: T('{كَانَ}: pasado de ser, Jn 1:1.') },
    { text: 'ذهبتُ إلى البيت.', gloss: T('1.ª persona: {ذَهَبْتُ}, el sufijo dice "yo".') },
    { text: 'جاؤوا إلى يسوع.', gloss: T('{جَاءَ} con sufijo plural: {جَاؤُوا}.') },
    { text: 'أكل يسوعُ الخبزَ.', gloss: T('{أَكَلَ} con objeto directo: el pan.') },
    { text: 'شربَ الماءَ.', gloss: T('{شَرِبَ}, beber, con objeto directo.') },
    {
      text: 'لبسنَ ثوبًا أبيض.',
      gloss: T('{لَبِسْنَ}: ellas se vistieron, con sufijo femenino plural.'),
    },
    { text: 'رأى النورَ.', gloss: T('{رَأَى}, ver, con objeto.') },
    { text: 'سمعَ الصوتَ.', gloss: T('{سَمِعَ}, oír, con objeto.') },
    { text: 'قالَ لهُمْ.', gloss: T('{قَالَ} decir; {لَهُمْ} a ellos.') },
    {
      text: 'أعطانا خُبْزَنا.',
      gloss: T('{أَعْطَانَا}: nos dieron, {أَعْطَى} más el sufijo enclítico {ـنَا}.'),
    },
  ],
  tables: [
    {
      caption: T('El pasado de los esenciales, persona por persona'),
      head: [T('Verbo'), T('هو'), T('أنا'), T('نحن'), T('هم')],
      rows: [
        ['ذهب', 'ذَهَبَ', 'ذَهَبْتُ', 'ذَهَبْنَا', 'ذَهَبُوا'],
        ['جاء', 'جَاءَ', 'جِئْتُ', 'جِئْنَا', 'جَاؤُوا'],
        ['كان', 'كَانَ', 'كُنْتُ', 'كُنَّا', 'كَانُوا'],
        ['أكل', 'أَكَلَ', 'أَكَلْتُ', 'أَكَلْنَا', 'أَكَلُوا'],
        ['شرب', 'شَرِبَ', 'شَرِبْتُ', 'شَرِبْنَا', 'شَرِبُوا'],
        ['لباس', 'لَبِسَ', 'لَبِسْتُ', 'لَبِسْنَا', 'لَبِسُوا'],
        ['رأى', 'رَأَى', 'رَأَيْتُ', 'رَأَيْنَا', 'رَأَوْا'],
        ['سمع', 'سَمِعَ', 'سَمِعْتُ', 'سَمِعْنَا', 'سَمِعُوا'],
        ['قال', 'قَالَ', 'قُلْتُ', 'قُلْنَا', 'قَالُوا'],
        ['كتب', 'كَتَبَ', 'كَتَبْتُ', 'كَتَبْنَا', 'كَتَبُوا'],
      ],
    },
    {
      caption: T('Los sufijos de persona'),
      head: [T('Persona'), T('Sufijo'), T('Ejemplo con {كتب}'), T('Glosa')],
      rows: [
        ['هو', '-a', 'كتبَ', 'ele escreveu'],
        ['أنا', '-تُ', 'كتبْتُ', 'eu escrevi'],
        ['نحن', '-نَا', 'كتبْنَا', 'nós escrevemos'],
        ['هم', '-وا', 'كتبُوا', 'eles escreveram'],
        ['هي', '-تْ', 'كتبْتْ', 'ela escreveu'],
        ['أنتما', '-تُما', 'كتبْتُما', 'vós dois escrevestes'],
      ],
    },
    {
      caption: T('Imperativo de los esenciales'),
      head: [T('Verbo'), T('أنتَ'), T('أنتِ'), T('أنتم'), T('أنتن')],
      rows: [
        ['ذهب', 'اِذْهَبْ', 'اِذْهَبِي', 'اِذْهَبُوا', T('اِذْهَبْنَ')],
        ['جاء', 'تعالَ', 'تعالي', 'تعالوا', T('تعالنَ')],
        ['أكل', 'كُلْ', 'كُلِي', 'كُلُوا', T('كُلْنَ')],
        ['شرب', 'اِشْرَبْ', 'اِشْرَبِي', 'اِشْرَبُوا', T('اِشْرَبْنَ')],
        ['قرأ', 'اِقْرَأْ', 'اِقْرَئِي', 'اِقْرَؤُوا', T('اِقْرَأْنَ')],
        ['عطي', 'أَعْطِ', 'أَعْطِي', 'أَعْطُوا', T('أَعْطِينَ')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {فِي الْبَدْءِ كَانَ الْكَلِمَةُ}, ¿qué es {كَانَ}?'),
    options: [
      T('El verbo "ir" en pretérito'),
      T('El verbo "ser" en pretérito'),
      T('El verbo "comer" en presente'),
      T('Un pronombre'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "أنا ___ إلى البيت" con la 1.ª persona de {ذهب}.'),
      answer: 'ذَهَبْتُ',
    },
    {
      kind: 'match',
      prompt: T('Relaciona el verbo con su traducción.'),
      pairs: [
        { a: T('{ذَهَبَ}'), b: T('ir') },
        { a: T('{جَاءَ}'), b: T('venir') },
        { a: T('{أَكَلَ}'), b: T('comer') },
        { a: T('{لَبِسَ}'), b: T('vestir') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué forma dice "ellos fueron"?'),
      options: [T('ذَهَبَ'), T('ذَهَبْتُ'), T('ذَهَبُوا'), T('ذَهَبْنَا')],
      answer: 2,
    },
  ],
};
