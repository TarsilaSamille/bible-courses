import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('El artículo: dónde es obligatorio'),
  subtitle: T('a, an, the — la regla que el portugués esconde'),
  section: T('Sustantivos'),
  body: C(`## La regla, que es más corta de lo que parece

El artículo {a} o {an} acompaña al **contable singular**, y solo eso: {a book}, {an idea}, {a city}, {the Word}. Cuando el sustantivo sale del singular, o cuando nunca fue contable, el artículo sale con él. No hay excepción a eso en la gramática del inglés: {books} sin artículo, {information} sin artículo, {water} sin artículo.

Lo que cambia es el motivo de cada ausencia, y hay dos. En el plural contable el artículo simplemente no se usa, porque la definitud ya está en el plural. En la masa en general tampoco se usa, porque la frase habla de todo lo que la palabra cubre y no de una parte: {Life is short} no recibe {a} ni {the}.

## Por qué aparece el error

El portugués alterna sin una regla que el aprendiz pueda ver: "o pão" en general, pero "um pão" cuando se cuenta, "o amor", "a vida", "o Evangelho". Quien generaliza ese dibujo y lo aplica al inglés produce dos formas malas a la vez: {informations} y {the informations}.

Juan 1:1 en la KJV trae {the Word}, {the Word was with God} y {the Word was God}. El artículo acompaña a un sustantivo propio y singular, y toda la frase se sostiene sobre el mismo artículo. Marcos 4:41 trae {a great calm}: {calm} es contable y {a great calm} nombra un episodio, no una categoría.

## El par a y an

{A} va antes de sonido consonantal y {an} va antes de sonido vocal. La prueba es el sonido que sale, no la letra que está escrita: {an hour}, porque la {h} es muda; {a university}, porque la {y} ya trae el sonido /ju/.

Quien decide por la grafía escribe {a hour} y {a university}, y las dos se leen mal. En {hour} la {h} no suena; en {university} la {u} inicial suena a consonante.

## Donde la KJV omite el artículo

1 Juan 4:24 dice que {they that worship him must worship him in spirit and in truth}. La palabra {worship} aparece dos veces sin artículo, porque la frase no habla de un culto concreto sino de todo lo que el culto abarca.

Hebreos 11:1 abre con {Now faith is the substance of things hoped for}, y {faith} está sin artículo por la misma razón. {Charity} en 1 Corintios 13:4 abre la lista igual, con {Charity suffereth long}.

Son tres masas en general, y ninguna puede recibir {a} ni {the} en la primera mención.`),
  vocab: [
    V('a book', 'book', 'un libro'),
    V('an idea', 'idea', 'una idea'),
    V('a city', 'city', 'una ciudad'),
    V('the Word', 'word', 'la Palabra'),
    V('an hour', 'hour', 'una hora'),
    V('a university', 'university', 'una universidad'),
    V('an honest man', 'honest', 'un hombre honesto'),
    V('a great calm', 'calm', 'una gran calma'),
    V('in general', 'general', 'en general'),
    V('article', 'article', 'artículo'),
    V('the', 'the', 'el, la (determinado)'),
    V('a', 'a', 'un, una (indefinido)'),
    V('an', 'an', 'un, una (indefinido)'),
    V('calm', 'calm', 'calma'),
    V('worship', 'worship', 'adoración'),
    V('faith', 'faith', 'fe'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El artículo indefinido (a, an) entra solo antes de un sustantivo contable en singular.',
      ),
    },
    {
      n: '2',
      text: T(
        'Un sustantivo en plural no lleva artículo, ni definido ni indefinido: books, no the books ni a books.',
      ),
    },
    {
      n: '3',
      text: T(
        'Una masa en general tampoco lleva artículo: life is short, music is a gift, water is life.',
      ),
    },
    {
      n: '4',
      text: T(
        'La elección entre a y an se hace por el sonido: an hour, a university, an honest man.',
      ),
    },
    {
      n: '5',
      text: T(
        'El artículo definido the entra antes de cualquier singular contable, de cualquier plural cuyo referente ya está fijado y de una masa que está determinada.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        '1 Juan 4:24 omite el artículo en worship dos veces, Hebreos 11:1 lo omite en faith y 1 Corintios 13:4 lo omite en charity. La KJV lo hace porque son masas en general.',
      ),
    },
    {
      label: T('Diagnóstico:'),
      text: T(
        'Un artículo que falta donde el sustantivo es contable singular es un error; un artículo que sobra donde el sustantivo es plural o masa en general también. El exceso y la omisión tienen la misma causa.',
      ),
    },
  ],
  examples: [
    { text: '{the Word}', gloss: T('la Palabra — contable singular, definido') },
    { text: '{a great calm}', gloss: T('una gran calma') },
    { text: '{an hour}', gloss: T('una hora — h muda') },
    { text: '{a university}', gloss: T('una universidad — la u suena /ju/') },
    {
      text: '{Faith is the substance of things hoped for}',
      gloss: T('La fe es la sustancia de las cosas esperadas'),
    },
    { text: '{Charity suffereth long}', gloss: T('El amor sufre largamente') },
    {
      text: '{books are on the shelf}',
      gloss: T('los libros están en la estantería — plural sin artículo'),
    },
    { text: '{water is life}', gloss: T('el agua es vida — masa en general') },
    { text: '{the water in the glass}', gloss: T('el agua del vaso — masa determinada, con the') },
    { text: '{an honest man}', gloss: T('un hombre honesto') },
  ],
  tables: [
    {
      caption: T('Dónde aparece el artículo'),
      head: [T('Sustantivo'), T('Singular contable'), T('Plural'), T('Masa en general')],
      rows: [
        ['book', '{a book}', '{books}', T('—')],
        ['city', '{a city}', '{cities}', T('—')],
        ['idea', '{an idea}', '{ideas}', T('—')],
        ['information', T('—'), T('—'), '{information}'],
        ['water', T('—'), T('—'), '{water}'],
        ['life', T('—'), T('—'), '{life}'],
      ],
    },
    {
      caption: T('a y an por sonoridad'),
      head: [T('Sonido inicial'), T('Artículo'), T('Ejemplo')],
      rows: [
        [T('consonante'), '{a}', '{a book}'],
        [T('vocal'), '{an}', '{an idea}'],
        [T('h muda'), '{an}', '{an hour}'],
        [T('u leída /ju/'), '{a}', '{a university}'],
        [T('vocal aislada'), '{an}', '{an idea}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál de las frases es correcta?'),
    options: [
      T('He gave me an useful advice'),
      T('He gave me a useful piece of advice'),
      T('He gave me many advices'),
      T('He gave me an advice'),
    ],
    answer: 1,
    hint: T('Advice es masa; para contar una unidad, usa a piece of.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Elige el artículo: 'It took ___ hour.'"),
      answer: 'an',
      hint: T('La h de hour es muda: el sonido empieza por vocal.'),
    },
    {
      kind: 'fill',
      prompt: T("Completa con el artículo definido: '___ water in the glass is cold.'"),
      answer: 'The',
    },
    {
      kind: 'match',
      prompt: T('Relaciona el sustantivo con su artículo.'),
      pairs: [
        { a: 'a university', b: 'a' },
        { a: 'an honest man', b: 'an' },
        { a: 'a European', b: 'a' },
        { a: 'an idea', b: 'an' },
      ],
      answer: ['0-0', '1-1', '2-0', '3-1'],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase usa el artículo correctamente?'),
      options: [
        T('She drinks the water every day'),
        T('She drinks water every day'),
        T('She drinks waters every day'),
        T('She drinks the waters every day'),
      ],
      answer: 1,
    },
  ],
};
