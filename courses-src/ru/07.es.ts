import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('Adjetivos largos y cortos'),
  subtitle: T('хороший — хорош: cualidad y estado'),
  section: T('El nombre: género, número y el adjetivo'),
  body: C(
    'El adjetivo pleno, largo, concuerda con el sustantivo en género, número y caso: хороший человек, хорошая книга, хорошее слово, хорошие люди. Se declina: хорошего, хорошему, etc. La forma corta suele usarse como predicativo con быть u otro verbo copulativo: Он велик, «es grande»; Жизнь коротка, «la vida es breve». Las formas cortas no se declinan, pero sí varían por género y, en plural, no por caso gramatical: велик, велика, велико, велики. Por ello, es inexacto decir que nunca cambian. La forma larga también puede ser predicativa: Это интересно; compárese Это интересная книга. Entre las expresiones bíblicas están Святое Писание, «Sagrada Escritura», Новый Завет, «Nuevo Testamento» y вечная жизнь, «vida eterna».',
  ),
  vocab: [
    V('хороший', 'хороший', 'bueno; largo masculino'),
    V('хорошая', 'хороший', 'buena; largo femenino'),
    V('хорошее', 'хороший', 'bueno; largo neutro'),
    V('хорошие', 'хороший', 'buenos; largo plural'),
    V('хорош', 'хороший', 'es bueno; corto masculino'),
    V('хороша', 'хороший', 'es buena; corto femenino'),
    V('хорошо', 'хороший', 'es bueno; corto neutro'),
    V('велик', 'великий', 'grande; corto masculino'),
    V('велика', 'великий', 'grande; corto femenino'),
    V('велико', 'великий', 'grande; corto neutro'),
    V('велики', 'великий', 'grandes; corto plural'),
    V('коротка', 'короткий', 'breve; corto femenino'),
    V('новый', 'новый', 'nuevo; largo masculino'),
    V('вечный', 'вечный', 'eterno'),
    V('Новый Завет', 'Новый Завет', 'Nuevo Testamento'),
    V('Святое Писание', 'Святое Писание', 'Sagrada Escritura'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué forma es naturalmente predicativa?'),
    options: [T('хорош'), T('хорошего'), T('хорошее')],
    answer: 0,
  },
  exercises: [
    { kind: 'fill', prompt: T('Completa: Это ___ книга'), answer: 'хорошая' },
    { kind: 'fill', prompt: T('Completa: Он ___ (grande, corto)'), answer: 'велик' },
    {
      kind: 'match',
      prompt: T('Relaciona forma y género'),
      pairs: [
        { a: 'хорош', b: T('masculino') },
        { a: 'хороша', b: T('femenino') },
      ],
      answer: ['хорош', 'хороша'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El adjetivo largo concuerda en género, número y caso: {хорошая книга}, {хорошее слово}, {хорошие люди}.',
      ),
    },
    {
      n: '2',
      text: T(
        'La forma corta no se flexiona por caso, pero varía por género y número: {велик}, {велика}, {велико}, {велики}.',
      ),
    },
    {
      n: '3',
      text: T(
        'La forma corta es la que aparece con cópula: {Он велик} es «es grande», y {жизнь коротка} es «la vida es breve».',
      ),
    },
    {
      n: '4',
      text: T(
        'Después de {Это} el sustantivo exige la forma larga: {Это интересная книга}, y no {Это interesante}.',
      ),
    },
    {
      n: '5',
      text: T(
        'El par que se confunde es {хорошая} frente a {хорошо}: la primera concuerda con el sustantivo, la segunda es estado.',
      ),
    },
  ],
  notes: [
    {
      label: T('¿Corta o larga?'),
      text: T(
        'La forma corta ocupa la posición de predicado, y por eso {жизнь коротка} es correcto mientras {жизнь короткая} suena mal: un sustantivo determinado pide la forma larga.',
      ),
    },
    {
      label: T('La misma raíz, cuatro terminaciones'),
      text: T(
        '{хорош} es la raíz de todas: {хорошего} en genitivo, {хорошая} en nominativo femenino, {хорошо} en neutro y {хорошие} en plural. Lo que cambia no es la raíz sino la terminación, y la terminación es lo que dice el género y el número.',
      ),
    },
  ],
  examples: [
    { text: 'Это хорошая книга', gloss: T('este es un buen libro; forma larga, femenino') },
    { text: 'Это хорошее слово', gloss: T('esta es una buena palabra; forma larga, neutro') },
    { text: 'Он хорош', gloss: T('él es bueno; forma corta predicativa') },
    { text: 'Она хороша', gloss: T('ella es buena; forma corta femenina') },
    { text: 'Он велик', gloss: T('él es grande') },
    {
      text: 'Жизнь коротка',
      gloss: T('la vida es breve; el sustantivo neutro pide la forma corta'),
    },
    { text: 'Это интересно', gloss: T('esto es interesante; forma corta, sin sustantivo') },
    { text: 'Это интересная книга', gloss: T('este es un libro interesante; forma larga') },
    { text: 'Новый Завет', gloss: T('Nuevo Testamento; dos nominativos') },
    { text: 'вечная жизнь', gloss: T('vida eterna; la concordancia es con vida') },
  ],
  tables: [
    {
      caption: T('Concordancia de {хороший}'),
      head: [T('Género/número'), T('Forma larga'), T('Forma corta'), T('Uso típico')],
      rows: [
        [T('masculino sg.'), T('хороший'), T('хорош'), T('predicativo')],
        [T('femenino sg.'), T('хорошая'), T('хороша'), T('predicativo')],
        [T('neutro sg.'), T('хорошее'), T('хорошо'), T('predicativo')],
        [T('plural'), T('хорошие'), T('хороши'), T('predicativo')],
      ],
    },
    {
      caption: T('Larga y corta lado a lado'),
      head: [T('Función'), T('Ejemplo'), T('Forma'), T('Glosa')],
      rows: [
        [T('atributivo'), T('хорошая книга'), T('larga'), T('buen libro')],
        [T('atributivo'), T('хорошие люди'), T('larga'), T('buenas personas')],
        [T('predicativo'), T('Он хорош'), T('corta'), T('él es bueno')],
        [T('predicativo'), T('Жизнь коротка'), T('corta'), T('la vida es breve')],
        [T('sin sustantivo'), T('Это интересно'), T('corta'), T('esto es interesante')],
      ],
    },
    {
      caption: T('Los pares que se confunden'),
      head: [T('Par'), T('Uno es'), T('El otro es'), T('Cómo decidir')],
      rows: [
        [T('хорошая / хорошо'), T('atributivo'), T('estado'), T('el sustantivo pide la larga')],
        [T('велик / великий'), T('estado'), T('atributivo'), T('la cópula pide la corta')],
        [T('коротка / короткая'), T('estado'), T('atributivo'), T('la cópula pide la corta')],
      ],
    },
  ],
};
