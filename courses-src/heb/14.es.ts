import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  title: T('Las guturales'),
  subtitle: T('א ח ע ר — las cuatro letras que no obedecen'),
  section: T('Formas no finitas y guturales'),
  body: C(`## Qué es una gutural

Las guturales son las cinco consonantes {[אָחַע״ר]}: {א} álef, {ח} jet, {ע} áin, {ה} he y {ר} reš. Son guturales porque se pronuncian en la garganta, con la lengua tocando la faringe. Todos los demás sonidos se forman en la boca o en el paladar; solo estos cinco son profundos.

Causan cuatro efectos prácticos que notarás en toda la Biblia (Gesenius §22):

**1. No reciben dageš fuerte.** Ni {א}, ni {ח}, ni {ע} pueden duplicarse: {הַחָכְמָה} lleva dageš en la {ח}, pero {הֶחָכְמָה} no lo lleva. Dos guturales seguidas producen un efecto en cascada sobre el resto de la palabra.

**2. Prefieren vocales A.** Tras una gutural, el hebreo tiende a {ַ}, {ָ} o {ֲ}, nunca a {ִ} o {ֵ}. En {יַעֲמֹד} «se levantará» la {ע} obliga a una vocal A, y la {ו} siguiente se alarga en {וֹ} para compensar.

**3. Roban el pataj al final de la palabra.** Una {ח} o {ע} final no admite vocal larga ni cierre: inserta un {ַ} breve **furtivo** (pataj furtivo), escrito antes de ella pero pronunciado después: {רוּחַ} se lee «rú-aj», {נֹחַ} «No-aj», {שָׂמֵחַ} «sã-mé-aj», {רָקִיעַ} «ra-kí-aj». El sonido que oyes después de la {ח} no está escrito a su izquierda.

**4. Reciben vocales reducidas (hataf).** Bajo una gutural aparece a veces una vocal «aplanada»: {ֲ} hataf pataj, {ֱ} hataf segol, {ֳ} hataf qamats. Los casos más comunes son la {א} inicial de {אֱלֹהִים} y de {אֲדֹנָי} «Señor», la {ח} de {חֲכָמִים} «sabios» y la {ע} de {עֲבָדִים} «siervos».

## Dos letras aparte: {ר} y {ה}

La {ר} no es gutural en la boca, pero se comporta como una al escribir: no recibe dageš fuerte y prefiere vocales A. La {ה} es distinta: acepta dageš ({הֶסֶד}), pero también prefiere vocales A y, como consonante final de prefijo, atrae el {הָ} del artículo y de otras palabras.

## El dageš furtivo

Un último efecto aparece justamente por causa de las guturales. Cuando {ב} {כ} {ל} {פ} {ק} están al final de una sílaba, la masoreta imprime un dageš **furtivo** para hacer audible el sonido que vendría de forma natural: {לִבְךָ} «tu corazón», {לִגְּדֹל} «el fuerte», {הַלְלוּהָ} «su alabanza». El dageš furtivo aparece sobre todo tras {ר}, la gutural que lo precede. Recuérdalo como una señal del escriba, no como un sonido duplicado.

## Por qué importa al leer

Conocer las guturales convierte el ruido en patrón. En {רוּחַ אֱלֹהִים} el {ַ} final no pertenece a la {ר} sino a la {ח}. En {אֱלֹהִים} el {ֱ} es un hataf, no una {ֶ} plena. En {יַעֲמֹד} el {ֲ} es hataf, y el {וֹ} es alargamiento compensatorio. Tres letras, tres reglas, una palabra.

Cada gutural tiene su costumbre: {א} y {ח} atraen hataf a menudo; la {ע} final atrae pataj furtivo a menudo; {ה} gobierna el dageš de la palabra anterior.

## La regla del rafe

Tras una gutural, las letras {פ} y {ק} aparecen sin dageš, con la señal {ֿ} (rafe) cuando el contexto exige un punto. Por eso {פֶּרַשׁ} «separar» (dageš fuerte) contrasta con su forma enfática: el dageš marca la solidez, el rafe la debilidad.

## Palabras para retener

{רוּחַ} «viento/espíritu» · {חֶסֶד} «amor firme» · {עַם} «pueblo» (¡con gutural {ע}!) · {חָכְמָה} «sabiduría» · {רֹעֶה} «pastor» · {נֹחַ} «Noé» · {גָּבֹהַּ} «alto» · {נָשִׁים} «mujeres»

Ya sabes pronunciarlas todas; lo que faltaba era saber **por qué** suenan así.`),
  vocab: [
    V('רוּחַ', 'רוּחַ', 'viento, espíritu'),
    V('חֶסֶד', 'חֶסֶד', 'amor firme'),
    V('עַם', 'עַם', 'pueblo'),
    V('חָכְמָה', 'חָכְמָה', 'sabiduría'),
    V('אֲדֹנָי', 'אָדוֹן', 'Señor'),
    V('יַעֲמֹד', 'עמד', 'se levantará'),
    V('גָּבֹהַּ', 'גָּבֹהַּ', 'alto'),
    V('נֹחַ', 'נֹחַ', 'Noé'),
    V('רָקִיעַ', 'רָקִיעַ', 'la expansión'),
    V('חֲכָמִים', 'חָכֵם', 'sabios'),
    V('עֲבָדִים', 'עֶבֶד', 'siervos'),
    V('לִבְךָ', 'לֵב', 'tu corazón'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Por qué «רוּחַ» termina con pataj bajo la {ח}?'),
    options: [
      T('Error del escriba'),
      T('Pataj furtivo: la gutural final roba una «a» breve'),
      T('Marca el plural'),
      T('Marca el femenino'),
    ],
    answer: 1,
    hint: T('El sonido «aj» se oye después de la {ח}, aunque el {ַ} esté escrito a su izquierda.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Relaciona la gutural con el efecto que produce.'),
      pairs: [
        { a: '{ע} final', b: T('pataj furtivo') },
        { a: '{א} inicial', b: T('hataf') },
        { a: '{ה} inicial', b: T('el artículo {הָ}') },
        { a: '{ר}', b: T('nunca recibe dageš fuerte') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál de estas palabras contiene un hataf?'),
      options: [T('אֲדֹנָי'), T('שַׁמַּיִם'), T('בֵּית'), T('תּוֹרָה')],
      answer: 0,
      hint: T('El signo {ֲ} es un hataf pataj: una vocal breve bajo gutural.'),
    },
    {
      kind: 'fill',
      prompt: T('Escribe la palabra hebrea para «tu corazón» (con dageš furtivo).'),
      answer: 'לִבְךָ',
      hint: T('{לֵב} + {־ךָ} = {לִבְךָ}, con dageš furtivo en la {ב}.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Por qué {הֶחָכְמָה} no tiene dageš en la {ח} mientras {הַחָכְמָה} sí?'),
      options: [
        T('Porque {הֶ־} es el artículo con vocal larga'),
        T('Porque la {ח} es gutural y no puede duplicarse'),
        T('Porque {הַחָכְמָה} es una forma arcaica'),
        T('Porque al escriba se le pasó el punto'),
      ],
      answer: 1,
      hint: T('Regla §1: ninguna gutural recibe dageš fuerte.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Las guturales son {א} {ח} {ע} {ה} {ר}: pronunciadas en la garganta, nunca reciben dageš fuerte y atraen vocales A.',
      ),
    },
    {
      n: '2',
      text: T(
        'El pataj furtivo aparece en la {ח} y la {ע} finales: se escribe a la izquierda de la letra y se pronuncia a su derecha: {רוּחַ} = «rú-aj».',
      ),
    },
    {
      n: '3',
      text: T(
        'El hataf es una vocal reducida que solo aparece bajo guturales: {אֲדֹנָי} «Señor», {חֲכָמִים} «sabios», {עֲבָדִים} «siervos».',
      ),
    },
    {
      n: '4',
      text: T(
        'Tras una gutural la vocal evita {ִ} y {ֵ} y se alarga para compensar: {יַעֲמֹד} «se levantará».',
      ),
    },
    {
      n: '5',
      text: T(
        'El dageš furtivo es una convención de escritura, no un sonido duplicado: {לִבְךָ} «tu corazón».',
      ),
    },
  ],
  notes: [
    {
      label: T('Sonido frente a letra:'),
      text: T(
        'No toda {ח} o {ע} del Tanaj es gutural: la regla es histórica. {ח} y {ע} son guturales cuando se pronuncian faríngeas, lo que ocurre casi siempre, pero en algunos préstamos (nombres propios persas, por ejemplo) son sibilantes normales. Lo mismo vale para la {ה} inicial, que puede ser una simple aspiración.',
      ),
    },
    {
      label: T('Dato curioso:'),
      text: T(
        'Las lenguas semíticas vecinas conservaron la garganta más que el hebreo bíblico: el arameo y el árabe tienen aún guturales plenas en todas las posiciones, y por eso quien habla arameo reconoce al instante una gutural hebrea. Cuando lees {רוּחַ} en voz alta y sientes la {ח} en la garganta, estás hablando como se habló hace tres mil años.',
      ),
    },
  ],
  examples: [
    { text: '{רוּחַ}', gloss: T('viento, espíritu — se lee «rú-aj»') },
    { text: '{נֹחַ}', gloss: T('Noé — se lee «No-aj»') },
    { text: '{גָּבֹהַּ}', gloss: T('alto — pataj furtivo tras {ֹ}') },
    { text: '{רָקִיעַ}', gloss: T('la expansión — pataj furtivo (Gn 1.6)') },
    { text: '{אֱלֹהִים}', gloss: T('Dios — hataf {ֱ} bajo la gutural {א}') },
    { text: '{אֲדֹנָי}', gloss: T('Señor — hataf {ֲ} bajo la {א}') },
    { text: '{חֲכָמִים}', gloss: T('sabios — hataf {ֲ} bajo la {ח}') },
    { text: '{עֲבָדִים}', gloss: T('siervos — hataf {ֲ} bajo la {ע}') },
    { text: '{יַעֲמֹד}', gloss: T('se levantará — gutural + alargamiento compensatorio') },
    { text: '{לִבְךָ}', gloss: T('tu corazón — dageš furtivo en la {ב}') },
    { text: '{עַם}', gloss: T('pueblo — gutural inicial {ע}, vocal {ַ}') },
    { text: '{חֶסֶד}', gloss: T('amor firme — {ח} con dageš (aquí es letra de rafe)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Las cinco guturales y sus propiedades'),
      head: [T('Letra'), T('Nombre'), T('Comportamiento')],
      rows: [
        ['{א}', 'ʾālef', T('acepta hataf, sin dageš')],
        ['{ח}', 'ḥēt', T('acepta hataf, sin dageš')],
        ['{ע}', 'ʿayin', T('pataj furtivo en posición final')],
        ['{ה}', 'hē', T('acepta dageš; gobierna el artículo {הָ}')],
        ['{ר}', 'rēš', T('nunca recibe dageš fuerte')],
      ],
    },
    {
      caption: T('Tabla 2 — Cuatro efectos de las guturales en acción'),
      head: [T('Efecto'), T('Ejemplo'), T('Glosa')],
      rows: [
        [T('Sin dageš fuerte'), '{הֶחָכְמָה}', T('la sabiduría (la {ח} no se duplica)')],
        [T('Vocal A'), '{יַעֲמֹד}', T('se levantará')],
        [T('Pataj furtivo'), '{רוּחַ}', T('viento, espíritu (se lee «rú-aj»)')],
        [T('Hataf'), '{אֲדֹנָי}', T('Señor')],
        [T('Dageš furtivo'), '{לִבְךָ}', T('tu corazón')],
      ],
    },
    {
      caption: T('Tabla 3 — Palabras con pataj furtivo'),
      head: [T('Palabra'), T('Lectura'), T('Glosa')],
      rows: [
        ['{רוּחַ}', 'rú-ach', T('viento, espíritu')],
        ['{נֹחַ}', 'Nó-ach', T('Noé')],
        ['{רוּחַ}', 'rú-ach', T('viento, espíritu')],
        ['{גָּבֹהַּ}', 'gavó-ah', T('alto')],
        ['{רָקִיעַ}', 'ráqí-a', T('la expansión, el firmamento')],
        ['{שָׂמֵחַ}', 'sã-mé-ach', T('alegre')],
      ],
    },
  ],
};
