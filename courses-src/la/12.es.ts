import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('El Padrenuestro en latín (Mt 6:9-13)'),
  subtitle: T('La oración que atraviesa dieciocho siglos sin cambiar una palabra'),
  section: T('Lectura de la Vulgata y capstone'),
  body: C(`## El texto

> Pater noster, qui es in caelis,
> sanctificetur nomen tuum.
> Veniat regnum tuum.
> Fiat voluntas tua, sicut in caelo et in terra.
> Panem nostrum quotidianum da nobis hodie.
> Et dimitte nobis debita nostra,
> sicut et nos dimittimus debitoribus nostris.
> Et ne nos inducas in tentationem,
> sed libera nos a malo.

## Las dos mitades

Mateo 6:9-10 trae el **Padrenuestro**; 6:11-13 el **Danos hoy nuestro pan de cada día**. La tradición separó las dos en oraciones distintas, pero el texto griego y la Vulgata las traen en secuencia, como una sola oración. Fíjate en que la segunda mitad es enteramente imperativo — el pedido del pan se convierte en orden: «danos».

La forma más antigua y más fiel está en Lucas 11:2-4, y es prácticamente idéntica:

> Pater noster, qui es in caelis, sanctificetur nomen tuum.
> Fiat voluntas tua sicut in caelo et in terra.
> Da nobis panem nostrum hodie.
> Et dimitte nobis peccata nostra.

## El imperativo más antiguo de Occidente

Toda la oración está en formas que sobrevivieron intactas. Compara el latín de Jerónimo con lo que rezaste en la escuela:

- **Pater noster** — idéntico;
- **qui es in caelis** — idéntico;
- **sanctificetur nomen tuum** — idéntico;
- **Fiat voluntas tua** — idéntico;
- **panem nostrum quotidianum** — idéntico;
- **Et ne nos inducas in tentationem** — idéntico.

Las formas que *no* sobrevivieron son las del imperativo regular: {da} «da» era {dā}; hoy nadie lo dice. El latín litúrgico medieval congeló el texto en uno o dos dialectos principales, y por eso la oración suena latina incluso a quien no sabe latín.

## Qué enseña cada construcción

**Pater noster, qui es in caelis.** El relativo {qui} vuelve a {Pater} en ablativo: el pronombre relativo concuerda con su antecedente en género y número, pero cambia de caso según su función. Aquí {in caelis} es lugar sin {in}.

**Sanctificetur nomen tuum.** Subjuntivo presente con {est} de {sum}: la tercera del subjuntivo de {sum} es {sit}, pero con un verbo de {facere} la Vulgata prefiere el **pasivo perifrástico**, {sanctificētur}. Es el modo del deseo: «sea santificado».

**Fiat voluntas tua.** {Fiat} es el presente de subjuntivo de {fio}, hoy perdido. La frase es literalmente «sea hecha tu voluntad» — el verbo en segundo lugar, el orden más antiguo.

**Panem nostrum quotidianum da nobis hodie.** {Panem} acusativo, {da} imperativo, {nobis} dativo, {hodie} adverbio. {Quotidianum} es un adjetivo griego latinizado (καθ᾽ ἡμέραν), usado como sustantivo: «el de cada día».

**Dimitte nobis debita nostra.** {Debita} es el neutro plural de {debitus} «deudor», sustantivado: «nuestras deudas». Fíjate en que {nobis} aquí es dativo, mientras que en {sed libera nos a malo} el {nos} es acusativo, de {libero}. El mismo pronombre, dos casos, por dos verbos distintos.

**Ne nos inducas in tentationem.** {Ne} más subjuntivo negativo: «no nos induzcas». {Tentatio} viene del griego πειρασμός, «prueba, tentación». La Vulgata escribe lo que Lucas no escribe: en Lucas no hay {et ne nos inducas}, y {inducere} es más duro que el griego εἰσενέγκῃ.

**Sed libera nos a malo.** {Sed} «pero», {libera} imperativo, {a} más ablativo {malo}. El griego original dice «líbranos del mal»; el latín cambia la preposición de genitivo a ablativo, lo que da el matiz de «del poder del mal».`),
  vocab: [
    V('Pater', 'pater', 'Padre'),
    V('noster', 'noster', 'nuestro'),
    V('caelum', 'caelum', 'cielo (pl. {caeli})'),
    V('es', 'sum', 'eres (2.ª sing.)'),
    V('sanctificetur', 'sanctifico', 'sea santificado (subj. pasivo)'),
    V('nomen', 'nomen', 'nombre'),
    V('veniat', 'venio', 'que venga (subj.)'),
    V('fiat', 'fio', 'sea hecho (de {fio})'),
    V('voluntas', 'voluntas', 'voluntad'),
    V('panis', 'panis', 'pan'),
    V('quotidianum', 'quotidianus', 'de cada día'),
    V('da', 'do', '¡da! (imperativo)'),
    V('dimitte', 'dimitto', '¡perdona! (imperativo)'),
    V('debita', 'debitus', 'deudas (neutro plural)'),
    V('inducas', 'induco', 'que induzcas (subj.)'),
    V('malo', 'malum', 'mal (abl. de {malum})'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Dimitte nobis debita nostra}, ¿qué caso tiene {nobis} y por qué?'),
    options: [
      T('Dativo: {dimittere} rige dos cosas — objeto y destinatario'),
      T('Acusativo: {nobis} es el pronombre, y los pronombres son siempre acusativos'),
      T('Ablativo: se omitió {in}'),
      T('Genitivo: es la posesión de {debita}'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Por qué {sanctificetur} y no {sanctificet}?'),
      options: [
        T('Porque es un verbo transitivo: usa el pasivo perifrástico en -r en el subjuntivo'),
        T('Porque {et} cambia el verbo al subjuntivo'),
        T('Porque el latín no tiene forma activa para ese verbo'),
        T('Porque {nomen} es neutro y exige pasivo'),
      ],
      answer: 0,
      hint: T('Regla §4.'),
    },
    {
      kind: 'fill',
      prompt: T('El verbo que significa «sea hecho» en la oración: fi_ _'),
      answer: 'fiat',
      hint: T('Es el presente de subjuntivo de {fio}, hoy perdido del latín.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la forma con lo que significa en la oración'),
      pairs: [
        { a: T('Pater'), b: T('«Padre» — vocativo, la forma que sobrevivió') },
        { a: T('es'), b: T('«eres» — 2.ª sing. de {sum}, sin {ei}') },
        { a: T('da'), b: T('«¡da!» — imperativo de {do}, hoy congelado') },
        { a: T('sed'), b: T('«pero» — conjunción adversativa') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{qui} concuerda con su antecedente en género y número, pero toma el caso de su propia función.',
      ),
    },
    {
      n: '2',
      text: T(
        'La oración es todo imperativo o subjuntivo — no hay un solo indicativo salvo el {est} de {sum}.',
      ),
    },
    {
      n: '3',
      text: T(
        '{ne} más subjuntivo significa «no (sea)»: es el subjuntivo negativo, no una negación del indicativo.',
      ),
    },
    {
      n: '4',
      text: T(
        'Los verbos transitivos forman el «debe ser» en el subjuntivo con el pasivo perifrástico: {sanctificētur}.',
      ),
    },
    {
      n: '5',
      text: T(
        'El mismo pronombre cambia de caso según el verbo: {nobis} dativo de {dimittere}, {nos} acusativo de {libero}.',
      ),
    },
  ],
  notes: [
    {
      label: T('¿Por qué latín?'),
      text: T(
        'El latín no fue una elección literaria de Occidente, sino un accidente geográfico: la Iglesia de Roma, única entre las patriarquías en hablar la lengua de Roma, solo necesitó una traducción para hablar con la gente de Roma — y las oraciones litúrgicas son las pocas frases que cualquier fiel sabe rezar en latín, porque todos las aprendieron. El griego, el arameo y el hebreo no tuvieron esa suerte.',
      ),
    },
    {
      label: T('Traducción literal:'),
      text: T(
        'En latín, el pan es {panis} (masculino), no {pāne}; y «de cada día» es {quotidianum}, un adjetivo griego. El latín litúrgico suena por eso más duro que el portugués precisamente porque no traduce: repite las palabras. Un lector de portugués reconoce el sentido; un lector de latín reconoce la gramática.',
      ),
    },
  ],
  examples: [
    { text: 'Pater noster', gloss: T('«Padre nuestro» — {Pater} en vocativo') },
    { text: 'qui es in caelis', gloss: T('«que estás en el cielo» — relativo en ablativo') },
    { text: 'sanctificetur nomen tuum', gloss: T('«sea santificado tu nombre»') },
    { text: 'Veniat regnum tuum', gloss: T('«venga tu reino» — {regnum} neutro') },
    { text: 'Fiat voluntas tua', gloss: T('«hágase tu voluntad»') },
    { text: 'Panem nostrum quotidianum', gloss: T('«nuestro pan de cada día»') },
    { text: 'da nobis hodie', gloss: T('«danos hoy» — {nobis} en dativo') },
    { text: 'dimitte nobis debita', gloss: T('«perdona nuestras deudas»') },
    { text: 'ne nos inducas in tentationem', gloss: T('«no nos induzcas en tentación»') },
    { text: 'sed libera nos a malo', gloss: T('«pero líbranos del mal»') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — El Padrenuestro: Mateo 6:9-13 y Lucas 11:2-4'),
      head: [T('Mt 6:9-13'), T('Lc 11:2-4'), T('Portugués')],
      rows: [
        ['{Pater noster, qui es in caelis}', T('igual'), 'Pai nosso, que estás nos céus'],
        ['{sanctificetur nomen tuum}', T('igual'), 'seja santificado o teu nome'],
        ['{Veniat regnum tuum}', T('falta en Lucas'), 'venha o teu reino'],
        [
          '{Fiat voluntas tua, sicut in caelo et in terra}',
          T('sin «et in terra»'),
          'seja feita a tua vontade',
        ],
        [
          '{Panem nostrum quotidianum da nobis hodie}',
          T('{Da nobis panem nostrum hodie}'),
          'o nosso pão de cada dia',
        ],
        [
          '{Et dimitte nobis debita nostra}',
          T('{Et dimitte nobis peccata nostra}'),
          'e perdoa as nossas dívidas',
        ],
        [
          '{Et ne nos inducas in tentationem}',
          T('falta en Lucas'),
          'e não nos induzas em tentação',
        ],
      ],
    },
    {
      caption: T('Tabla 2 — Formas de la oración: qué cambió y qué quedó'),
      head: [T('Forma en la Vulgata'), T('Latín litúrgico'), T('Portugués'), T('Español')],
      rows: [
        ['{Pater noster}', 'Pater noster', 'Pai nosso', 'Padre nuestro'],
        ['{qui es in caelis}', 'qui es in caelis', 'que estás nos céus', 'que estás en el cielo'],
        [
          '{sanctificetur nomen tuum}',
          'sanctificetur nomen tuum',
          'seja santificado o teu nome',
          'sea santificado tu nombre',
        ],
        [
          '{fiat voluntas tua}',
          'fiat voluntas tua',
          'seja feita a tua vontade',
          'hágase tu voluntad',
        ],
        ['{da nobis hodie}', 'da nobis hodie', 'dá-nos hoje', 'danos hoy'],
        [
          '{dimitte nobis debita}',
          'dimitte nobis debita',
          'perdoa as nossas dívidas',
          'perdona nuestras deudas',
        ],
        ['{a malo}', 'a malo', 'do mal', 'del mal'],
      ],
    },
  ],
};
