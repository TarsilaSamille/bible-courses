import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  title: T('La negación: {לֹא}, {אֵין} y el verbo que falta'),
  subtitle: T('οὐκ ἔστι × אֵין — por qué el griego no se atasca y el hebreo sí'),
  section: T('Adverbio'),
  body: C(`## Una palabra para negar lo que existe

{לֹא} niega un verbo. Eso es todo, y es una regla sin excepción: después de {לֹא} siempre hay un verbo, y el {לֹא} va pegado a él por maqaf cuando la cláusula es larga.

{לֹא־תִרְצָח} «no matarás» (Éx 20.13) · {לֹא הָלַךְ} «no anduvo» (Sal 1.1) · {לֹא יִיעַף} «no se cansa» (Is 40.28) · {וְלֹא יִהְיֶה} «y no será».

Su posición en la cláusula es fija: inmediatamente antes del verbo, sea cual sea el tiempo. En {וְלֹא יִהְיֶה} la {וְ} es la conjunción «y» y el {לֹא} sigue pegado al verbo. El hebreo no tiene negación posverbal, ni partícula detrás del verbo para cerrar la cláusula: la posición del {לֹא} es fija y el contexto viene después.

Una posición merece atención: el {לֹא} puede caer sobre un **participio**, y entonces la cláusula se queda sin verbo. En Génesis 3.5 la serpiente dice {לֹא יֹדֵעַ}, literalmente «no, sabiendo». Lo que hizo el hebreo fue tratar el participio como sustantivo y darle la negación, que es el camino más corto para decir que alguien actúa sin saber lo que hace.

## {אֵין}: la cláusula sin verbo

{אֵין} es distinto. No niega nada que esté inquire: afirma que una cosa **no existe**. Y como no lleva verbo, gobierna lo que viene después de tres maneras.

Después puede venir un **sustantivo**: {אֵין חֵקֶר} «no hay busca» (Is 40.28) · {אֵין חָרָב} «no hay espada». La cláusula entera es una locución, y el español tiene que tomar prestado un verbo: «no hay» o «no existe».

Después puede venir un **participio**: {אֵין} + {מִשְׁתַּחֲוֶה} «no hay quien se incline». El resultado es «no hay nadie que...», y la negación aquí es más fuerte que la de {לֹא}, porque no niega una acción: niega la existencia de quien la haría.

Y puede venir {ל} más un sustantivo, que es la fórmula de la posesión: {אֵין־לוֹ} «él no tiene», {אֵין־לִי} «no tengo». El sustantivo va después de {ל}, y el hebreo dice literalmente «no hay para él».

## Cuando el verbo aparece después de {אֵין}

Aquí está el problema que atasca la lectura bíblica, y merece decirse con todas sus letras: **en hebreo antiguo, {אֵין} no va seguido de verbo finito**. Los tres casos de arriba son todos los casos. La gramática es sencilla y la práctica también.

La excepción son los libros más recientes. En Jeremías y en Ezequiel la secuencia {אֵין} + verbo aparece con frecuencia suficiente para que no sea error de escriba, y ahí empieza el debate. Uno lee {אֵין} como ausencia corriente y traduce «no puede»; otro lee el verbo como si fuera un participio petrificado y lo traduce en presente; un tercero lee los dos juntos como negación enfática y escribe «de ninguna manera». Las tres lecturas aparecen en traducciones de la misma cláusula, y ninguna es una mala traducción.

¿Por qué ocurre esto en un libro que ya había resuelto el problema? Porque {אֵין} empezó a copiarse del {אֵין} de Génesis 1.2, {וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל־פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל־פְּנֵי הַמָּיִם}. En Génesis la cláusula es negativa y nominal; en Ezequiel se vuelve negativa y verbal. El griego ayuda porque tiene la palabra que faltaba, y por eso el texto parece traducirse demasiado deprisa.

## Griego y hebreo uno al lado del otro

El greek resuelve la ausencia con el verbo {εἰμί}: escribe {οὐκ ἔστι} «no hay» y {οὐκ ἔστιν} «no está». Toda la traducción griega de los Setenta vive de esa sobra, y los traductores llegaron a añadir verbos que el hebreo no traía.

La negación griega también se reparte en dos, como la hebrea: {οὐ} niega el indicativo, {μή} niega el subjuntivo y el imperativo. Un lado {לֹא} y {אַל}, el otro. Pero {οὐκ ἔστι} sigue siendo un verbo, y {אֵין} sigue sin ninguno. Esa es la diferencia de fondo, y es la que se siente cuando alguien pasa de un texto al otro y el hebreo parece estar mal.

Un ejemplo para cerrar: {וְאַתָּה לֹא יָדַעְתָּ} «y tú no sabes», al final de la respuesta que Dios da a Jeremías después de que el profeta clame. El hebreo tiene {לֹא} y el verbo {יָדַעְתָּ}, que es un qatal de 2.ª persona. Quien traduce literalmente escribe «y tú no supiste», y la cláusula cambia de sentido: el latín tardío y el portugués ponen el pasado en su sitio, y la amenaza sigue siendo amenaza.`),
  vocab: [
    V('לֹא', 'לֹא', 'no (con verbo)'),
    V('אֵין', 'אֵין', 'no hay, no existe'),
    V('אֵין־לוֹ', 'אֵין', 'él no tiene'),
    V('אֵין־לִי', 'אֵין', 'no tengo'),
    V('לֹא־תִרְצָח', 'הרג', 'no matarás (Éx 20.13)'),
    V('וְלֹא יִהְיֶה', 'היה', 'y no será'),
    V('לֹא יִיעַף', 'עיף', 'no se cansa (Is 40.28)'),
    V('אֵין חֵקֶר', 'חֵקֶר', 'no hay busca (Is 40.28)'),
    V('אֵין חָרָב', 'חָרָב', 'no hay espada'),
    V('לֹא יֹדֵעַ', 'ידע', 'no, sabiendo (Gn 3.5)'),
    V('אֵין מִשְׁתַּחֲוֶה', 'שׁחה', 'no hay quien se incline'),
    V('וְאַתָּה לֹא יָדַעְתָּ', 'ידע', 'y tú no sabes (Jr 33.3)'),
    V('וְהָאָרֶץ הָיְתָה תֹהוּ', 'היה', 'la tierra era sin forma (Gn 1.2)'),
    V('לֹא', 'לֹא', 'no (repetido: negación enfática)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál cláusula es correcta según la gramática hebraica?'),
    options: [
      T('{אֵין} + sustantivo: «no hay...»'),
      T('{אֵין} + verbo finito: la forma común en los libros antiguos'),
      T('{אֵין} + artículo'),
      T('{אֵין} solo puede ir después del verbo'),
    ],
    answer: 0,
    hint: T('Regla §2: en hebreo antiguo {אֵין} no va seguido de verbo finito.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Relaciona la negación con lo que niega.'),
      pairs: [
        { a: '{לֹא} + verbo', b: T('la acción: «no hizo»') },
        { a: '{לֹא} + particípio', b: T('la actitud: «no, sabiendo»') },
        { a: '{אֵין} + substantivo', b: T('la existencia: «no hay»') },
        { a: '{אֵין} + {ל} + substantivo', b: T('la posesión: «no tiene»') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('En {אֵין־לוֹ} «él no tiene», ¿qué niega {אֵין}?'),
      options: [
        T('Un verbo'),
        T('La existencia de algo para él (la posesión)'),
        T('Un participio'),
        T('El pasado'),
      ],
      answer: 1,
      hint: T('Es {אֵין} + {ל} + {הוּ}: «no hay para él».'),
    },
    {
      kind: 'fill',
      prompt: T('Completa: «אֵין ___» = «no hay busca de su inteligencia» (Is 40.28).'),
      answer: 'חֵקֶר',
      hint: T('El sustantivo {חֵקֶר} «busca», sin artículo.'),
    },
    {
      kind: 'choose',
      prompt: T(
        '¿Por qué la construcción {אֵין} + verbo es más frecuente en Ezequiel que en Génesis?',
      ),
      options: [
        T('Ezequiel usa formas más tardías, en las que la construcción se extendió'),
        T('Ezequiel tiene menos sustantivos'),
        T('Ezequiel escribió en griego'),
        T('Es un error de copia repetido'),
      ],
      answer: 0,
      hint: T('La construcción es rara en hebreo antiguo y común en los libros del exilio.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{לֹא} niega un verbo y solo aparece justo antes de él: {לֹא־תִרְצָח}, {וְלֹא יִהְיֶה}, {לֹא יִיעַף}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{אֵין} afirma ausencia y no lleva verbo: en hebreo antiguo nunca va seguido de verbo finito, sino de sustantivo, participio o {ל} + sustantivo.',
      ),
    },
    {
      n: '3',
      text: T(
        '{לֹא} + participio convierte la cláusula en locución: {לֹא יֹדֵעַ} «no, sabiendo» (Gn 3.5).',
      ),
    },
    {
      n: '4',
      text: T('{אֵין} + {ל} + sustantivo es la fórmula de la posesión: {אֵין־לוֹ} «él no tiene».'),
    },
    {
      n: '5',
      text: T(
        'El griego tiene {οὐκ ἔστι}, un verbo existencial de verdad; el hebreo tiene {אֵין}, que es ausencia sin verbo. Es la diferencia que hace que el griego parezca traducirse demasiado deprisa.',
      ),
    },
  ],
  notes: [
    {
      label: T('Exégesis:'),
      text: T(
        'En Ezequiel, {אֵין} + verbo tiene la fuerza de la ley. Las prohibiciones del capítulo 22 del Levítico hablan en la voz de quien declara algo imposible: «no», y no «está prohibido». Traducirlo por «no se puede» mantiene la negación; traducirlo por «no puede» puede sugerir falta de capacidad, que es otra cosa. El hebreo prohíbe, el español describe.',
      ),
    },
    {
      label: T('Dato curioso:'),
      text: T(
        'El hebreo tardío, el arameo y el sirio acabaron creando un verbo existencial para {אֵין}: el arameo tiene {לֵית} «no existe», y el hebreo moderno usa {אֵין} seguido de verbo finito como si fuera verbo. Es decir, la construcción sobre la que discuten los traductores en Ezequiel es exactamente la solución que la lengua tomó después. Quien mira el resultado a través de la historia ve al texto antiguo ganar la palabra que le faltaba.',
      ),
    },
  ],
  examples: [
    { text: '{לֹא־תִרְצָח}', gloss: T('no matarás — {לֹא} + futuro (Éx 20.13)') },
    { text: '{לֹא הָלַךְ}', gloss: T('no anduvo — {לֹא} + qatal (Sal 1.1)') },
    { text: '{וְלֹא יִהְיֶה}', gloss: T('y no será — {וְ} + {לֹא} + yiqtol') },
    { text: '{לֹא יִיעַף}', gloss: T('no se cansa — {לֹא} + yiqtol (Is 40.28)') },
    { text: '{לֹא יֹדֵעַ}', gloss: T('no, sabiendo — negación sobre participio (Gn 3.5)') },
    { text: '{אֵין חֵקֶר}', gloss: T('no hay busca — {אֵין} + sustantivo (Is 40.28)') },
    { text: '{אֵין־לוֹ}', gloss: T('él no tiene — {אֵין} + {ל} + sufijo') },
    { text: '{אֵין מִשְׁתַּחֲוֶה}', gloss: T('no hay quien se incline — {אֵין} + participio') },
    {
      text: '{וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ}',
      gloss: T('la tierra era sin forma y vacía (Gn 1.2) — cláusula nominal'),
    },
    { text: '{וְאַתָּה לֹא יָדַעְתָּ}', gloss: T('y tú no sabes (Jr 33.3) — {לֹא} + qatal') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Las cuatro posiciones de {לֹא}'),
      head: [T('Lo que sigue'), T('Tiempo'), T('Ejemplo'), T('Glosa')],
      rows: [
        [T('qatal'), T('pasado o presente'), '{לֹא הָלַךְ}', T('no anduvo / no anda')],
        [T('yiqtol'), T('futuro'), '{לֹא יִיעַף}', T('no se cansa (Is 40.28)')],
        [T('wayyiqtol con {וְ}'), T('narrativa'), '{וְלֹא יִהְיֶה}', T('y no será')],
        [T('participio'), T('presente locutivo'), '{לֹא יֹדֵעַ}', T('no, sabiendo (Gn 3.5)')],
      ],
    },
    {
      caption: T('Tabla 2 — Qué puede venir después de {אֵין}'),
      head: [T('Categoría'), T('Resultado'), T('Ejemplo'), T('Traducción natural')],
      rows: [
        [T('sustantivo'), T('ausencia de cosa'), '{אֵין חֵקֶר}', T('no hay busca')],
        [T('participio'), T('ausencia de agente'), '{אֵין מִשְׁתַּחֲוֶה}', T('no hay quien se incline')],
        [T('{ל} + sustantivo'), T('ausencia de posesión'), '{אֵין־לוֹ}', T('él no tiene')],
        [
          T('verbo finito'),
          T('construcción tardía, discutida'),
          '—',
          T('lecturas múltiples en los libros del exilio'),
        ],
      ],
    },
    {
      caption: T('Tabla 3 — Griego y hebreo: las dos negaciones'),
      head: [T('Función'), T('Griego'), T('Hebraico'), T('Ejemplo paralelo')],
      rows: [
        [T('negar el indicativo'), '{οὐ}', '{לֹא}', '{לֹא־תִרְצָח} / {οὐ φονεύσεις}'],
        [T('negar subjuntivo e imperativo'), '{μή}', '{אַל}', '{אַל־תִּירָא} / {μὴ φοβηθῇς}'],
        [
          T('afirmar ausencia'),
          '{οὐκ ἔστι}',
          '{אֵין} (sem verbo)',
          '{אֵין חֵקֶר} / {οὐκ ἔστιν ἐρεύνημα}',
        ],
        [T('origen'), 'Latin {sunt}', '—', T('el hebreo nunca heredó verbo existencial')],
      ],
    },
  ],
};
