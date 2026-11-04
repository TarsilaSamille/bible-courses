import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('Sustantivos y casos'),
  subtitle: T('Падежи — seis relaciones gramaticales'),
  section: T('El nombre: género, número y el adjetivo'),
  body: C(
    'El ruso no usa artículos. Las relaciones se marcan mediante casos; seis son principales. El nominativo identifica al sujeto; el acusativo, el objeto directo; el genitivo, posesión, origen y complemento de ausencia; el dativo, destinatario; el instrumental, medio o compañía; y el preposicional, relaciones espaciales o semánticas después de в, на, с, к, о, у, от, до y про. El género suele inferirse del nominativo: masculino, femenino o neutro. Después de 2, 3 o 4, el sustantivo pasa al genitivo singular: два слова. El plural tiene sus propias terminaciones, aunque los signos blandos suelen cambiar: слово → слова; день → дни. Un caso no equivale automáticamente a una preposición: в начала significa «al comienzo», mientras que в храм puede significar «hacia el interior del templo».',
  ),
  vocab: [
    V('Бог', 'бог', 'Dios'),
    V('Бога', 'бог', 'a Dios; genitivo y acusativo'),
    V('Богу', 'бог', 'a Dios; dativo'),
    V('книга', 'книга', 'libro; femenino'),
    V('книги', 'книга', 'de libros; genitivo'),
    V('книгу', 'книга', 'el libro; acusativo'),
    V('слово', 'слово', 'palabra; neutro'),
    V('слова', 'слово', 'palabras; plural, y genitivo singular tras numeral'),
    V('мир', 'мир', 'mundo; paz'),
    V('небо', 'небо', 'cielo'),
    V('сердце', 'сердце', 'corazón; neutro'),
    V('день', 'день', 'día; masculino'),
    V('дни', 'день', 'días; plural'),
    V('два', 'два', 'dos'),
    V('окно', 'окно', 'ventana; neutro'),
    V('вода', 'вода', 'agua; femenino'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es el acusativo de Бог?'),
    options: [T('Бог'), T('Бога'), T('Богу')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Completa: Я люблю Бога'), answer: 'Бога' },
    { kind: 'fill', prompt: T('Completa: книга → книги'), answer: 'и' },
    {
      kind: 'choose',
      prompt: T('¿Qué caso rige к?'),
      options: [T('Nominativo'), T('Dativo'), T('Instrumental')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El nominativo es la forma de referencia: {Бог}, {книга} y {слово} son las tres columnas de cualquier tabla.',
      ),
    },
    {
      n: '2',
      text: T(
        'El acusativo del masculino animado es el genitivo: {Бога} puede ser «de Dios» o «Dios» como objeto, y la forma no dice cuál.',
      ),
    },
    {
      n: '3',
      text: T(
        'El neutro tiene una sola forma de acusativo, igual al nominativo: {слово} y {окно}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Después de {два}, {три} y {четыре} el sustantivo va al genitivo singular: {два слова}, {четыре книги}.',
      ),
    },
    {
      n: '5',
      text: T(
        'El plural cambia de signos: {слово} hace {слова} y {день} hace {дни}, y ninguno se parece al singular.',
      ),
    },
  ],
  notes: [
    {
      label: T('La definitud va en la flexión'),
      text: T(
        'El ruso no tiene artículo, así que la definitud va en la flexión. {книга} es el sustantivo desnudo; {книга-то} lo añade por el pronombre. Leer un caso es leer una relación, no un sentido.',
      ),
    },
    {
      label: T('Cuando el caso no es lo que parece'),
      text: T(
        '{Бога} es la forma más común del sustantivo masculino después de {Бог}, y es genitivo y acusativo a la vez: en {слово Бога} es genitivo, en {Я люблю Бога} es acusativo. La terminación es la misma en los dos, y decide el verbo.',
      ),
    },
  ],
  examples: [
    { text: 'Бог создал небо и землю', gloss: T('Dios creó el cielo y la tierra') },
    { text: 'Я люблю Бога', gloss: T('amo a Dios; Бога en acusativo') },
    { text: 'слово Бога', gloss: T('la palabra de Dios; Бога en genitivo') },
    { text: 'Я читаю Книгу', gloss: T('leo el Libro; Книгу en acusativo') },
    { text: 'два слова', gloss: T('dos palabras; el sustantivo va al genitivo singular') },
    { text: 'четыре книги', gloss: T('cuatro libros; libros en genitivo singular') },
    { text: 'нет слова Бога', gloss: T('no hay palabra de Dios; dos genitivos') },
    { text: 'день и дни', gloss: T('día y días; el plural cambia la marca') },
    { text: 'окно', gloss: T('ventana; acusativo igual al nominativo') },
    { text: 'вода', gloss: T('agua; el acusativo añade -у: воду') },
  ],
  tables: [
    {
      caption: T('Paradigma de бог, книга y слово'),
      head: [T('Caso'), T('Masculino'), T('Femenino'), T('Neutro')],
      rows: [
        [T('Nominativo'), T('бог'), T('книга'), T('слово')],
        [T('Genitivo'), T('бога'), T('книги'), T('слова')],
        [T('Dativo'), T('богу'), T('книге'), T('слову')],
        [T('Acusativo'), T('бога'), T('книгу'), T('слово')],
        [T('Instrumental'), T('богом'), T('книгой'), T('словом')],
        [T('Prepositivo'), T('о Боге'), T('о книге'), T('о слове')],
      ],
    },
    {
      caption: T('Las dos formas ambiguas'),
      head: [T('Forma'), T('Casos posibles'), T('Qué decide'), T('Ejemplo')],
      rows: [
        [T('бога'), T('genitivo y acusativo'), T('el verbo'), T('Я люблю Бога')],
        [T('богу'), T('dativo'), T('la preposición'), T('к Богу')],
        [T('о Боге'), T('prepositivo'), T('la preposición о'), T('говорим о Боге')],
        [T('слово'), T('nominativo y acusativo'), T('el neutro no cambia'), T('Я знаю слово')],
      ],
    },
    {
      caption: T('El sustantivo tras el numeral'),
      head: [T('Numeral'), T('Caso del sustantivo'), T('Ejemplo'), T('Glosa')],
      rows: [
        [T('один'), T('nominativo singular'), T('один день'), T('un día')],
        [T('два, три, четыре'), T('genitivo singular'), T('два слова'), T('dos palabras')],
        [T('пять o más'), T('genitivo plural'), T('пять слов'), T('cinco palabras')],
        [T('двадцать один'), T('nominativo singular'), T('двадцать один день'), T('veintiún días')],
      ],
    },
  ],
};
