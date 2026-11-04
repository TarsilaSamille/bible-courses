import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  section: T('Adverbio'),
  title: T('El adverbio: cómo se forma'),
  subtitle: T('-nya, -an y la forma idéntica al adjetivo'),
  body: C(`## Tres maneras de formar un adverbio

Los adverbios indonesios son la única clase de palabra que se deriva de manera productiva, y hay tres caminos para llegar a ellos. Ninguno flexiona: un adverbio es un adverbio en toda oración, y eso es lo que lo separa del latín.

{1} Con {-nya}, pegado a un adjetivo o a un verbo. {cepat} «rápido» → {cepatnya} «rápidamente»; {baik} «bueno» → {baiknya} «bien»; {sungguh} «verdadero» → {sungguhnya} «en serio». Es el camino más regular, y la forma parece un sustantivo: en origen {cepatnya} era literalmente «su rapidez».

{2} Con {-an} o {-i}. {sungguh} → {sungguhan} «en serio»; {betul} → {betulan} «propiamente»; {sendiri} → {sendirian} «solo». El {-an} aquí hace el trabajo que hace sobre sustantivos: forma un nominal, y un nominal usado como adverbio pasa a significar modo. {memang} «ciertamente» es de la misma familia.

{3} Sin marca ninguna: el adverbio es la palabra del adjetivo, idéntica. {cepat} «rápido» y {cepat} «rápidamente»; {benar} «cierto» y {benar} «correctamente»; {jujur} «honesto» y {jujur} «honestamente»; {keras} «duro» y {bekerja keras} «trabajar duramente».

El tercer camino es el más común y el más invisible, porque el lector no se da cuenta de que cambió de clase. El portugués tiene un par fijo para esto («rápido»/«rápidamente», «fácil»/«fácilmente») y el indonesio no: la palabra es una y lo que cambia es el hueco que ocupa.

## Una palabra con dos papeles

Cuando {cepat} va tras el verbo es adverbio: {dia datang cepat} «él viene rápido». Cuando va antes del verbo o tras {adalah} es adjetivo: {dia cepat datang} ya no es lo mismo, y {cepat} delante de un sustantivo es el adjetivo de {anak cepat}.

La pregunta que lo resuelve es esta: **¿qué viene después?** Si viene un sustantivo o nada, es adjetivo; si viene otro verbo o un adverbio, es adverbio. {dia datang cepat} tiene otro verbo detrás. {anak cepat} tiene un sustantivo detrás.

{benar} muestra por qué la distinción importa más de lo que parece. En {dia bicara benar}, el adverbio {benar} significa «habla con verdad». En {dia yang benar}, {benar} es adjetivo y {yang} lo liga a un sustantivo. La misma palabra, y quien no sabe la diferencia se equivoca en las dos.

{benar} como adverbio y {benar} como adjetivo no tienen diferencia de pronunciación ni de escritura. El indonesio resolvió lo que el portugués resolvió con {-mente} y una palabra más, y el precio fue tener que mirar la posición.

## El adverbio que parece verbo

Hay adverbios hechos de verbos, y son la principal fuente de error de quien empieza.

La forma más común es la reduplicación con {-an}, que da actividad hecha por gusto, sin finalidad: {jalan-jalan} «pasear», {makan-makan} «comer sin motivo», {main-main} «jugar por jugar». Como adverbio, {makan-makan} significa «sin nada mejor que hacer»: {Saya makan-makan saja} «yo solo como, nada más».

El otro grupo es el que el portugués resuelve con gerundio o con perifrástico: {sedang} «estar», {akan} «ir a», {sudah} «haber». Los tres son adverbios de tiempo y de aspecto, y ninguno es verbo. La confusión es común porque {sedang} puede ir antes del verbo, como si fuera auxiliar.

Y hay un grupo que no es adverbio ni verbo, y que la gramática llama conector: {lalu} «después», {kemudian} «más tarde», {sementara itu} «mientras tanto». Ordenan la oración y no describen el verbo. {lalu} merece atención especial porque también significa «justo después» y, en uso antiguo, aparece como marcador de pasado remoto.

Ningún adverbio flexiona. No hay adverbio plural, ni adverbio de género, ni adverbio que cambie con el sujeto. Una palabra que aparece en todas las formas es adverbio o nombre propio; si el contexto muestra que describe un verbo, es adverbio.

## Cepat, lambat, dan lambat untuk marah

{Jacobo 1:19} pone en una sola frase los dos adverbios más comunes del indonesio bíblico. El texto trae {cepat mendengar}, {lambat untuk berbicara} y {lambat untuk marah}, y los tres salen de palabras que también son adjetivos.

No importa aquí el contenido del versículo, sino el hecho de que el texto logró poner tres adverbios sin una terminación de modo ni un auxiliar. {cepat} es el adjetivo {cepat} en el sitio donde va un adverbio. {lambat untuk berbicara} trae un {untuk} que no es preposición de finalidad: es lo que ata el adverbio al verbo que modifica.

El griego original es más difícil que eso. El griego de Santiago pide al lector que reconozca tres adjetivos participiales seguidos, y la traductora lo resolvió con tres palabras que ya tenía. Quien traduce del griego al portugués necesita tres sustantivos; al indonesio, tres palabras que ya tenía a mano. Ahí es donde el indonesio muestra lo que es: una lengua que llega al mismo sentido con menos palabras, y que hace desaparecer el trabajo de construcción dentro del verbo.`),
  vocab: [
    V('cepat', 'cepat', 'rápido; rápidamente'),
    V('cepatnya', 'cepat', 'rápidamente'),
    V('baik', 'baik', 'bueno; bien'),
    V('baiknya', 'baik', 'bien'),
    V('benar', 'benar', 'cierto; correctamente'),
    V('betulan', 'betul', 'propiamente, de verdad'),
    V('sungguh', 'sungguh', 'verdadero'),
    V('sungguhan', 'sungguh', 'en serio'),
    V('sungguhnya', 'sungguh', 'en serio'),
    V('keras', 'keras', 'duro; con fuerza'),
    V('jujur', 'jujur', 'honesto; honestamente'),
    V('lalu', 'lalu', 'después, entonces'),
    V('kemudian', 'kemudian', 'más tarde'),
    V('sedang', 'sedang', 'estar (aspecto)'),
    V('jalan-jalan', 'jalan', 'pasear'),
    V('makan-makan', 'makan', 'comer sin motivo'),
    V('berbicara', 'bicara', 'hablar'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El adverbio se forma con {-nya} sobre adjetivo o verbo, con {-an}/{-i}, o queda igual al adjetivo.',
      ),
    },
    {
      n: '2',
      text: T('Adverbio {cepat} y adjetivo {cepat} son la misma palabra; decide la posición.'),
    },
    {
      n: '3',
      text: T(
        'La prueba es lo que viene después: sustantivo detrás significa adjetivo, verbo detrás significa adverbio.',
      ),
    },
    {
      n: '4',
      text: T(
        'Los verbos reduplicados con {-an} funcionan como adverbio de finalidad: {makan-makan} «comer sin motivo».',
      ),
    },
    { n: '5', text: T('Ningún adverbio flexiona: ni número, ni género, ni persona.') },
  ],
  notes: [
    {
      label: T('Por qué funciona -nya'),
      text: T(
        'El {-nya} de los adverbios es el mismo sufijo de los otros cinco empleos: nominalización. {cepatnya} llegó a significar «su rapidez» y pasó a significar «rápidamente». El mismo camino nominalizó {datangnya} «la venida» y {keluarannya} «la salida».',
      ),
    },
    {
      label: T('La línea entre adverbio y conector'),
      text: T(
        '{lalu} y {kemudian} ordenan la oración y no describen el verbo, por eso algunas gramáticas los tratan como conjunciones. La prueba práctica para el lector es sencilla: si la palabra se puede quitar sin cambiar quién hace qué, es conector.',
      ),
    },
  ],
  examples: [
    { text: 'Dia datang cepat.', gloss: T('Él viene rápido.') },
    { text: 'Anak itu cepat.', gloss: T('Ese niño es rápido.') },
    { text: 'Kita harus bekerja keras.', gloss: T('Tenemos que trabajar duro.') },
    { text: 'Dia berbicara jujur.', gloss: T('Él habla con honestidad.') },
    { text: 'Bekerja terus selama dua tahun.', gloss: T('Trabajó sin parar durante dos años.') },
    { text: 'Sungguhan, saya tidak tahu.', gloss: T('De verdad, no sé.') },
    { text: 'Setelah minum, dia keluar.', gloss: T('Después de beber, salió.') },
    { text: 'Saya makan-makan saja.', gloss: T('Yo solo como, nada más.') },
    { text: 'Dia kemudian tidak datang.', gloss: T('Después no vino.') },
    { text: 'Sekarang sudah ada yang belajar.', gloss: T('Ahora ya hay quien estudia.') },
  ],
  tables: [
    {
      caption: T('Os três caminhos do advérbio'),
      head: ['Caminho', 'Padrão', 'Exemplo', 'Leia como'],
      rows: [
        ['com -nya', 'X + nya', 'cepatnya', 'rapidamente'],
        ['com -nya', 'X + nya', 'baiknya', 'bem'],
        ['com -an / -i', 'X + an', 'betulan', 'propriamente'],
        ['com -an / -i', 'X + an', 'sungguhan', 'a sério'],
        ['igual ao adjetivo', 'X', 'cepat', 'rapidamente'],
        ['igual ao adjetivo', 'X', 'jujur', 'honestamente'],
        ['reduplicado', 'V + V-an', 'jalan-jalan', 'passeando'],
      ],
    },
    {
      caption: T('Adjetivo ou advérbio: o teste da posição'),
      head: ['Frase', 'O que vem depois', 'Valor de cepat', 'Leia como'],
      rows: [
        ['dia datang cepat', 'verbo', 'advérbio', 'ele vem rápido'],
        ['anak cepat', 'substantivo', 'adjetivo', 'criança rápida'],
        ['lalu dengan cepat', 'nada', 'advérbio', 'depois, rapidamente'],
        ['hari ini cepat', 'verbo', 'advérbio', 'hoje, cedo'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Dia datang cepat}, ¿qué papel tiene {cepat}?'),
    options: [T('adverbio'), T('adjetivo'), T('verbo'), T('pronombre')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Forma el adverbio con {-nya}: rápidamente = ___.'),
      answer: 'cepatnya',
      hint: T('Adjetivo más el sufijo nominal.'),
    },
    {
      kind: 'choose',
      prompt: T('En {Anak cepat}, ¿qué papel tiene {cepat}?'),
      options: [T('adjetivo'), T('adverbio'), T('conector'), T('numeral')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Une la base con el adverbio'),
      pairs: [
        { a: T('{sungguh}'), b: T('{sungguhan}') },
        { a: T('{betul}'), b: T('{betulan}') },
        { a: T('{cepat}'), b: T('{cepatnya}') },
        { a: T('{jalan}'), b: T('{jalan-jalan}') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
