import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  section: T('Artículo'),
  title: T('Definitivo, indefinido y el artículo que no tiene plural'),
  subtitle: T('ο άνθρωπος — ένας άνθρωπος — κανείς'),
  body: C(`## El definitivo es obligatorio cuando el referente es uno

El griego moderno casi siempre escribe el artículo definido. {ο άνθρωπος} es "el hombre" porque ya sabemos de qué hombre se trata. Cuando el referente no es un individuo ni un grupo identificable sino la especie entera, el griego omite el artículo: {άνθρωπος είναι θνητός}, "el ser humano es mortal". Con artículo, la misma frase pasa a ser {ο άνθρωπος είναι θνητός}, y ahora es una persona sola, alguien en particular.

La prueba es la del español: si en español el artículo es obligatorio, en griego también lo es. Donde el español lo omite, el griego puede omitirlo, y ahí aparece el otro artículo.

## El indefinido tiene tres géneros y una sola dirección

El artículo indefinido tiene una forma por género: {ένας} en el masculino, {μία} en el femenino, {ένα} en el neutro. En el caso directo funcionan los tres: {ένας άνθρωπος}, {μια γυναίκα}, {ένα παιδί}. Lo que cambia es el caso, y el cambio es mínimo.

En el acusativo, que es el caso de casi todo en una frase normal, el masculino gana una {ν}: {έναν}. En el genitivo el femenino gana una {ς}: {μίας}. El neutro no cambia: {ένα} en todos los casos, porque {ένο} habría sido la forma antigua y nadie la usa.

El acento de {μία} y de {ένα} es átono en la escritura corriente: {μια γυναίκα}, {ένα παιδί}. Solo vuelve a ser tónico cuando va delante de un enclítico: {μία μου}, {ένας μου}.

## El plural sin indefinido, y el negativo que sobra

El indefinido no flexiona: no existe «ένανοι». En el plural, el indefinido es el sustantivo solo: {άνθρωποι}, {γυναίκες}, {παιδιά}, sin artículo de ningún tipo.

La traducción inmediata es "algunos hombres" o "hombres", y el griego entrega los dos sin distinguir. Cuando hace falta la distinción se usa {μερικοί}: {μερικοί άνθρωποι}, "algunas personas". Lo contrario es {πολλοί άνθρωποι}. Entre el plural a secas y {μερικοί} cabe todo lo que el español distingue con "un", "algunos" y "muchos".

La negación del indefinido es {κανείς}, {καμία}, {κανένα}, y es la manera más común de decir "nadie" en una frase: {δεν έρχεται κανείς}, "no viene nadie". Con {ν} repetido en los casos oblicuos: {κανενός}, {καμίας}, {κανενός}, igual que en los adjetivos.

Y aquí es donde el griego muestra lo que la flexión hace por el sentido: {κανένας}, con una {ς} menos, es la forma no marcada, la que aparece detrás de una preposición y la única que el hablante usa con frecuencia.

## Dónde usa la Biblia ἕνας

> Οὕτως καὶ ἡμεῖς πάντες ἓν σῶμά ἐσμεν ἐν Χριστῷ, καθὼς καὶ οἱ πάντες εἰς ἓν ἐβαπτίσθημεν εἰς ἓν σῶμα.

{ἓν} aparece tres veces en el mismo versículo, y las tres veces sin {ς} y sin género. El griego dice "somos un solo cuerpo" sin repetir el artículo ni elegir un género, porque {ἕνας} sería falso ahí. La forma que aparece es {ἓν}, sin {ς} y sin género, y es la que el griego moderno conserva intacta como numeral y como pronombre.`),
  vocab: [
    V('ο άνθρωπος', 'ο άνθρωπος', 'el hombre, la persona'),
    V('ένας άνθρωπος', 'ένας', 'un hombre'),
    V('ένας', 'ένας', 'uno (masculino)'),
    V('μια', 'μία', 'una (femenino)'),
    V('ένα', 'ένα', 'uno (neutro)'),
    V('έναν', 'ένας', 'uno (acusativo masculino)'),
    V('μίας', 'μία', 'de una (genitivo)'),
    V('ενός', 'ένας', 'de uno (genitivo)'),
    V('κανείς', 'κανείς', 'nadie'),
    V('καμία', 'κανείς', 'ninguna (femenino)'),
    V('κανένα', 'κανείς', 'ninguno (neutro)'),
    V('κανενός', 'κανείς', 'de ninguno (genitivo)'),
    V('μερικοί', 'μερικοί', 'algunos'),
    V('πολλοί άνθρωποι', 'πολλοί', 'muchas personas'),
    V('οι άνθρωποι', 'άνθρωπος', 'las personas'),
    V('τα παιδιά', 'το παιδί', 'los niños'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'El artículo definido es obligatorio cuando el referente ya está determinado: ο άνθρωπος.',
      ),
    },
    {
      n: '§2',
      text: T(
        'El indefinido tiene una forma por género y no existe en plural: ένας, μία, ένα; en plural, el sustantivo solo.',
      ),
    },
    {
      n: '§3',
      text: T(
        'El masculino gana ν en el acusativo (έναν) y el femenino gana ς en el genitivo (μίας).',
      ),
    },
    {
      n: '§4',
      text: T(
        'El negativo del indefinido es κανείς, καμία, κανένα, con ν repetido en los oblicuos: κανενός.',
      ),
    },
  ],
  notes: [
    {
      label: T('Acento'),
      text: T(
        'μία y ένα pierden el acento en la escritura corriente y solo lo recuperan delante de un enclítico: μία μου. La forma tónica es la excepción, no la regla.',
      ),
    },
    {
      label: T('Koiné'),
      text: T(
        'En la Biblia ἕνας casi nunca es artículo: es el numeral sustantivado, "uno". Traducir ἕνας por "uno" o por "cierto" depende de lo que viene después, no de lo que significa la palabra por sí sola.',
      ),
    },
  ],
  examples: [
    { text: 'ένας άνθρωπος έρχεται', gloss: T('viene un hombre') },
    { text: 'μια γυναίκα μένει εδώ', gloss: T('una mujer vive aquí') },
    { text: 'ένα παιδί παίζει', gloss: T('un niño juega') },
    { text: 'τον βλέπω κάθε μέρα', gloss: T('veo a un hombre cada día') },
    { text: 'μίας μητέρας λόγος', gloss: T('la palabra de una madre') },
    { text: 'κανείς δεν ήρθε', gloss: T('no vino nadie') },
    { text: 'κανένας λόγος', gloss: T('ninguna palabra') },
    { text: 'μερικοί άνθρωποι έρχονται', gloss: T('vienen algunas personas') },
  ],
  tables: [
    {
      caption: T('El indefinido en todos los casos'),
      head: ['Κλίση', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['οριστική', 'ένας', 'μία', 'ένα'],
        ['γενική', 'ενός', 'μίας', 'ενός'],
        ['αἰτιατική', 'έναν', 'μία', 'ένα'],
        ['ἀρνητική', 'κανείς', 'καμία', 'κανένα'],
      ],
    },
    {
      caption: T('Definitivo, indefinido y plural'),
      head: ['Τύπος', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['οριστικό άρθρο', 'ο άνθρωπος', 'η γυναίκα', 'το παιδί'],
        ['αόριστο άρθρο', 'ένας άνθρωπος', 'μια γυναίκα', 'ένα παιδί'],
        ['πληθυντικός', 'οι άνθρωποι', 'οι γυναίκες', 'τα παιδιά'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se dice "ningún niño"?'),
    options: [T('κανένα παιδί'), T('κανένας παιδί'), T('κανείς παιδί'), T('μία παιδί')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ γυναίκα μένει εδώ (indefinido femenino)'),
      answer: 'μια',
      hint: T('μία sin acento'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es la forma de indefinido en plural?'),
      options: [T('ένανοι'), T('οι άνθρωποι'), T('ένας άνθρωποι'), T('κανείς άνθρωποι')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Género del indefinido'),
      pairs: [
        { a: 'ένας', b: T('masculino') },
        { a: 'μια', b: T('femenino') },
        { a: 'ένα', b: T('neutro') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
    {
      kind: 'fill',
      prompt: T('βλέπω ___ ανθρώπους (en plural el indefinido es el sustantivo)'),
      answer: 'ανθρώπους',
      hint: T('En plural el indefinido es el propio sustantivo'),
    },
  ],
};
