import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  section: T('Artículo'),
  title: T('Los tres artículos y la regla del neutro plural'),
  subtitle: T('ο — η — το, y τα que se vuelve αυτά'),
  body: C(`## Dos series y una tercera

El artículo griego tiene dos series morfológicas, no cuatro: {ο} sirve para el masculino y para el femenino, y {το} queda aparte solo para el neutro. En el plural, {οι} cubre masculino y femenino y {τα} queda para el neutro. La flexión antigua, que tenía cuatro series, aparece en la Biblia y no en el habla.

Lo que hace el artículo es lo mismo que en español: volver específico el referente. {ο άνθρωπος} es "el hombre", una persona ya identificada. {άνθρωπος} sin artículo es "un hombre" o "la humanidad". La diferencia es la misma, y la diferencia es grande.

## La regla que nadie esperaba

El neutro plural cambia de artículo según lo que venga antes. Con un determinante simple se queda en {τα}: {τα παιδιά}, "los niños". Con un demostrativo se vuelve {αυτά}: {αυτά τα παιδιά}, "estos niños". Con un posesivo fuerte, lo mismo: {δικά μου παιδιά}. No es una irregularidad: {αυτά} es el artículo funcionando como demostrativo, y la forma que adopta es la del neutro.

La regla práctica cabe en una línea: **en el neutro plural, con demostrativo el artículo es {αυτά}; sin demostrativo, el artículo es {τα}**. Y es el único punto en que el griego moderno cambia una forma según el determinante. Ninguna otra clase nominal lo hace.

## Por qué lo hace el griego y el español no

El fenómeno no es moderno: es antiguo. En el griego antiguo el sustantivo en -ον perdía la -ν en el plural, y el artículo se quedaba {τὰ}: {τὰ τέκνα}, "los niños". Con un demostrativo {αὐτά}, el sustantivo en -α sustituía la -ον entera: {αὐτὰ τέκνα}. El griego moderno conservó la sustitución del sustantivo y perdió la -ν, y con ella perdió el motivo. Quedó la regla sin razón, y por eso parece arbitraria a quien no conoce la historia.

## El neutro plural sin género

Hay un uso del neutro plural que el español no tiene y que resuelve un problema real. Cuando el grupo es mixto y no vale la pena decir de qué sexos es, el griego usa el neutro plural: {τα παιδιά έφαγαν}, "los niños comieron". También se usa para una colección de cosas de tipos distintos: {τα πράγματα έφερα}, "trajo las cosas".

El verbo es el mismo en las dos opciones y el artículo es lo que delata la elección: {οι άνθρωποι} dice que el grupo es de hombres, {τα παιδιά} dice que no importa.`),
  vocab: [
    V('ο άνθρωπος', 'ο άνθρωπος', 'el hombre, la persona'),
    V('άνθρωπος', 'άνθρωπος', 'un hombre; la humanidad'),
    V('το παιδί', 'το παιδί', 'el niño'),
    V('τα παιδιά', 'το παιδί', 'los niños'),
    V('τα', 'τα', 'los, las (neutro plural)'),
    V('οι', 'οι', 'los, las'),
    V('αυτά', 'αυτά', 'estos (neutro plural)'),
    V('αυτά τα παιδιά', 'αυτός', 'estos niños'),
    V('δικά μου παιδιά', 'δικός', 'mis hijos'),
    V('ο φίλος', 'ο φίλος', 'el amigo'),
    V('η φιλία', 'η φιλία', 'la amistad'),
    V('το σπίτι', 'το σπίτι', 'la casa'),
    V('τα πράγματα', 'το πράγμα', 'las cosas'),
    V('τα τέκνα', 'τὸ τέκνον', 'los niños (griego antiguo)'),
    V('αὐτὰ τέκνα', 'αὐτός', 'estos niños (griego antiguo)'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'El artículo tiene dos series: ο para masculino y femenino, το para el neutro; οι y τα en el plural.',
      ),
    },
    {
      n: '§2',
      text: T(
        'En el neutro plural, con demostrativo el artículo es αυτά; sin demostrativo, es τα.',
      ),
    },
    {
      n: '§3',
      text: T(
        'El artículo vuelve específico el referente: ο άνθρωπος es "el hombre", άνθρωπος es "un hombre".',
      ),
    },
    {
      n: '§4',
      text: T('El neutro plural sirve para un grupo mixto: τα παιδιά, sin decir los sexos.'),
    },
  ],
  notes: [
    {
      label: T('Etimología'),
      text: T(
        'αυτά y αυτός son la misma raíz: el artículo neutro plural absorbió el pronombre demostrativo y perdió el otro lado de la contraste, que es εκείνος, "ese".',
      ),
    },
    {
      label: T('Cuidado'),
      text: T(
        'La regla del αυτά solo vale en plural. En singular el artículo neutro es siempre το, incluso con demostrativo: αυτό το παιδί, y nunca "αυτόν το παιδί".',
      ),
    },
  ],
  examples: [
    { text: 'τα παιδιά παίζουν', gloss: T('los niños juegan') },
    { text: 'αυτά τα παιδιά παίζουν', gloss: T('estos niños juegan') },
    { text: 'τα παιδιά μου παίζουν', gloss: T('mis niños juegan') },
    { text: 'οι φίλοι έρχονται', gloss: T('los amigos vienen') },
    { text: 'αυτοί οι φίλοι έρχονται', gloss: T('estos amigos vienen') },
    { text: 'τα πράγματα είναι εδώ', gloss: T('las cosas están aquí') },
    { text: 'το σπίτι είναι μικρό', gloss: T('la casa es pequeña') },
    { text: 'ανθρωπος και άνθρωπος', gloss: T('un hombre y otro hombre') },
  ],
  tables: [
    {
      caption: T('El artículo en todos los lugares'),
      head: ['Κλίση', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['οριστική', 'ο άνθρωπος', 'η γυναίκα', 'το παιδί'],
        ['πληθυντικός', 'οι άνθρωποι', 'οι γυναίκες', 'τα παιδιά'],
      ],
    },
    {
      caption: T('El neutro plural y lo que viene antes'),
      head: ['Προηγούμενο', 'Άρθρο', 'Παράδειγμα'],
      rows: [
        ['κανένα', 'τα', 'τα παιδιά'],
        ['αυτός', 'αυτά', 'αυτά τα παιδιά'],
        ['δικός μου', '—', 'δικά μου παιδιά'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se dice "estos niños"?'),
    options: [T('αυτά τα παιδιά'), T('τα αυτά παιδιά'), T('αυτά παιδιά'), T('το παιδί')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ παιδιά παίζουν (sin demostrativo)'),
      answer: 'τα',
      hint: T('Artículo neutro plural simple'),
    },
    {
      kind: 'choose',
      prompt: T('En "τα παιδιά έφαγαν", ¿qué indica el neutro plural?'),
      options: [
        T('que son solo niños'),
        T('que el grupo es mixto o no especificado'),
        T('que es un solo grupo'),
        T('que es indefinido'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Artículo y género'),
      pairs: [
        { a: 'ο', b: T('masculino y femenino') },
        { a: 'η', b: T('femenino') },
        { a: 'το', b: T('neutro') },
        { a: 'τα', b: T('neutro plural') },
      ],
      answer: ['a1', 'a2', 'a3', 'a4'],
    },
    {
      kind: 'fill',
      prompt: T('___ φιλία είναι μεγάλη (artículo femenino singular)'),
      answer: 'η',
      hint: T('Artículo del femenino singular'),
    },
  ],
};
