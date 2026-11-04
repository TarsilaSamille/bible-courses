import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  section: T('El nombre'),
  title: T('El sustantivo y lo que hace'),
  subtitle: T('Sin artículo, sin caso, sin género: decide la posición'),
  body: C(`## Ninguna flexión, ningún artículo

El sustantivo indonesio tiene una sola forma. {rumah} es la casa, una casa, la casa de alguien y las casas de alguien, todo con las mismas cinco letras. El portugués resuelve la diferencia con el artículo ({o}, {a}, {os}, {as}) y con la preposición ({do}, {no}, {de}), y quien aprende una lengua románica se pasa la vida buscando el artículo antes de decir cualquier sustantivo. En indonesio ese hueco está vacío.

El género también falta. {rumah} no es masculino ni femenino; {buku} no es masculino ni femenino. Un poco de género gramatical sobrevive en unos pocos sustantivos aislados, heredado de una capa más antigua de la lengua y no de un sistema: {anak} «el niño» e {ibu} «la madre» frente a {bapak} «el padre», pero el par {mobil} y {sepeda} no tiene nada que ver. Para el lector de la Biblia eso significa que no existe concordancia de género que se pueda equivocar.

El número tampoco está en el sustantivo. {buku} significa «el libro» y «los libros» con la misma palabra.

## La posición hace el trabajo del artículo

La función del sustantivo la da el lugar que ocupa en la oración. No hay morfema ni terminación: la misma palabra {buku} es sujeto con un verbo, objeto directo, complemento tras {adalah}, posesivo antes de {-nya} y aparece después de una preposición. Cinco funciones, una forma.

El portugués marca tres con el artículo y dos con preposición. El indonesio marca las cinco por posición, y en dos casos esa posición es obligatoria: sujeto y objeto no pueden cambiar de sitio sin invertir el sentido, porque el orden es sujeto, verbo, objeto y nadie lo incumple.

Cuando hay dos sustantivos candidatos a sujeto y la oración es ambigua, es el verbo el que desempata, no la forma del sustantivo. Compara {anjing saya menggigit dia} con {saya menggigit anjing}: el primer sustantivo que aparece es el sujeto, y la posición hace el trabajo.

## Lo que hacía el artículo y quién lo hace aquí

El artículo portugués tiene tres trabajos: señalar, determinar y contar. El indonesio tiene una palabra para dos de ellos, {itu}, un demostrativo anáfora: {Firman itu} «aquel Verbo», «el Verbo recién mencionado». El tercer trabajo, el de conjunto, lo hace el sustantivo {para}: {para murid} «los discípulos», {para rasul} «los apóstoles». Y contar lo hacen el numeral o el cuantificador: {satu buku}, {banyak buku}.

Cuando el portugués obliga a un artículo que el indonesio no tiene, es porque el portugués está contando un sustantivo que el indonesio ya contó en otro punto de la oración. En {o livro que você leu ontem} la {o} no aporta información: cuenta, y {yang} ya contó. Traducir eso como {buku yang kamu baca kemarin} pierde el artículo y no pierde nada con él.

El caso más visible es el genitivo. El portugués dice {do livro}, {da casa}, {dos livros} con una preposición que cambia con el artículo. El indonesio dice {buku saya} y {rumah saya}, sin nada en medio: el posesivo simplemente se pega al sustantivo, y la preposición portuguesa no tiene dónde meterse.

Hay una asimetría que produce un error en casi todo texto bíblico. Un sustantivo definido en portugués suele convertirse en un sustantivo suelto en indonesio. No existe «el Dios» escrito con artículo; lo que existe es {Allah itu} o {Allah} a secas, y el lector tiene que inferir de {itu} o de la repetición lo que el artículo estaba marcando.

## Kerajaan Allah, kebenaran-Nya

{Mateo 6:33} es el pasaje donde el sistema aparece entero, y merece leerse despacio: {Carilah dahulu Kerajaan Allah dan kebenaran-Nya, maka segala-galanya akan ditambahkan kepadamu}.

{Kerajaan Allah} es genitivo, y el genitivo no está marcado por nada. {Kerajaan} y {Allah} son dos sustantivos pegados, en el orden que el portugués traduce por «el Reino de Dios», y la preposición {dari} que el portugués exige simplemente no está ahí. Un sustantivo modificado por otro es un sintagma completo en indonesio.

{kebenaran-Nya} es el mismo sintagma escrito con el posesivo pegado: {kebenaran} más {-Nya}. Quien sabe que el segundo elemento remite a {Allah} en {Kerajaan Allah} lee {kebenaran-Nya} sin esfuerzo. Quien no lo sabe lee un sustantivo repetido y se detiene.

Muchos sintagmas que el portugués escribe «todo» y «todos los» son {segala-galanya} y {para} en indonesio, y la reducción en {segala-galanya} {tiga} y {dua} hace visible el plural. Todo el versículo es una oración sin un solo artículo, y por eso la traducción parece tan mucho más ligera que el griego original: el griego tenía {tēn basilikeia}, con su artículo, y el indonesio perdió el artículo sin perder nada que el griego dijera.`),
  vocab: [
    V('rumah', 'rumah', 'casa'),
    V('buku', 'buku', 'libro'),
    V('anak', 'anak', 'niño, hijo'),
    V('ibu', 'ibu', 'madre'),
    V('bapak', 'bapak', 'padre'),
    V('anjing', 'anjing', 'perro'),
    V('sepeda', 'sepeda', 'bicicleta'),
    V('mobil', 'mobil', 'automóvil'),
    V('ada', 'ada', 'haber, existir'),
    V('adalah', 'adalah', 'ser, es'),
    V('itu', 'itu', 'ese, aquel (ya mencionado)'),
    V('para', 'para', 'los, los de (plural definido)'),
    V('banyak', 'banyak', 'muchos'),
    V('satu', 'satu', 'uno'),
    V('kerajaan', 'kerajaan', 'reino'),
    V('kebenaran', 'kebenaran', 'verdad'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El sustantivo indonesio no flexiona: ni artículo, ni caso, ni género, ni número. La función viene de la posición.',
      ),
    },
    {
      n: '2',
      text: T(
        'El orden es sujeto, verbo, objeto. El primer sustantivo de la cláusula es el sujeto, aunque parezca un objeto.',
      ),
    },
    {
      n: '3',
      text: T(
        '{itu} sustituye al artículo definido portugués y remite a algo ya mencionado; {para} hace el plural definido.',
      ),
    },
    {
      n: '4',
      text: T(
        'El genitivo es mera yuxtaposición: {rumah saya}, {buku saya}. No va ninguna preposición entre los dos sustantivos.',
      ),
    },
    {
      n: '5',
      text: T(
        '{dari} es la preposición de origen, no de posesión: {rumah saya}, nunca {rumah dari saya}.',
      ),
    },
  ],
  notes: [
    {
      label: T('El género que no existe'),
      text: T(
        'Unos pocos sustantivos conservan un género gramatical heredado, como {anak} y {bapak}, pero la lista es cerrada y el lector bíblico casi nunca la necesita.',
      ),
    },
    {
      label: T('Dónde engaña la traducción'),
      text: T(
        'Cuando {dari} aparece entre dos sustantivos casi siempre es origen, no posesión. {rumah dari nenek} es «la casa de la abuela» en el sentido de origen, que el portugués traduce por posesión sin querer.',
      ),
    },
  ],
  examples: [
    { text: 'Buku itu milik saya.', gloss: T('Ese libro es mío.') },
    { text: 'Anjing saya menggigit dia.', gloss: T('Mi perro lo mordió.') },
    { text: 'Saya menggigit anjing.', gloss: T('Yo mordí al perro.') },
    { text: 'Rumah saya dekat sekolah.', gloss: T('Mi casa está cerca de la escuela.') },
    { text: 'Kerajaan Allah tidak akan berakhir.', gloss: T('El Reino de Dios no terminará.') },
    { text: 'Carilah dahulu Kerajaan Allah.', gloss: T('Buscad primero el Reino de Dios.') },
    { text: 'Untuk murid, hal itu mudah.', gloss: T('Para los discípulos, eso es fácil.') },
    { text: 'Banyak buku di meja.', gloss: T('Muchos libros sobre la mesa.') },
    { text: 'Ada masalah besar di sini.', gloss: T('Hay un gran problema aquí.') },
  ],
  tables: [
    {
      caption: T('As cinco funções do substantivo'),
      head: ['Função', 'Como aparece', 'Português', 'Sinal em PT'],
      rows: [
        ['sujeito', 'buku itu penting', 'o livro é importante', 'sujeito fica depois do verbo'],
        ['objeto direto', 'saya membeli buku', 'eu comprei o livro', 'verbo antes do nome'],
        ['complemento', 'ini buku saya', 'isto é o meu livro', 'adalah liga os dois'],
        ['genitivo', 'buku saya', 'o meu livro', 'possuidor colado'],
        ['complemento de preposição', 'di rumah', 'em casa', 'preposição expõe a função'],
      ],
    },
    {
      caption: T('O que o artigo português faz e quem faz aqui'),
      head: ['Função do artigo', 'Português', 'Indonésio', 'Exemplo'],
      rows: [
        ['apontar para algo já citado', 'o / a + itu', 'itu', 'Firman itu'],
        ['determinar um conjunto', 'os / as', 'para', 'para murid'],
        ['contagem indefinida', 'um / uma', 'satu / se-', 'seorang murid'],
        ['plural', 'livros', 'banyak + livro', 'banyak buku'],
        ['genitivo', 'do / da', 'colado + -nya', 'rumah saya'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Anjing saya menggigit dia}, ¿quién mordió?'),
    options: [T('Mi perro'), T('Él'), T('No se puede saber'), T('Su perro')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Forma el plural definido de {murid}: «los discípulos».'),
      answer: 'para',
      hint: T('La palabra que convierte un sustantivo en conjunto.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo se dice «el Reino de Dios» sin preposición?'),
      options: [
        T('Kerajaan Allah'),
        T('Kerajaan dari Allah'),
        T('Kerajaan di Allah'),
        T('Kerajaan untuk Allah'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Une la función con el sintagma'),
      pairs: [
        { a: T('{buku itu}'), b: T('sujeto') },
        { a: T('{rumah saya}'), b: T('genitivo') },
        { a: T('{di sekolah}'), b: T('complemento de preposición') },
        { a: T('{saya membeli buku}'), b: T('objeto directo') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
