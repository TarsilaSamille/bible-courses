import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  section: T('El nombre'),
  title: T('El plural'),
  subtitle: T('buku es «el libro» y «los libros»: el número vive en otro sitio'),
  body: C(`## El sustantivo no sabe cuántos son

{buku} es el libro y los libros. {rumah} es la casa y las casas. El sustantivo indonesio no tiene plural, no tiene número, y no puede tenerlo: la forma es una sola y ya está. Quien traduce del portugués busca una señal de plural en el sustantivo y no encuentra ninguna, porque no hay nada que encontrar.

Esto no es una omisión. Es una decisión de la lengua, y obliga a una pregunta que el lector se hace al revés: ¿dónde está el número? La respuesta es que el número vive en el resto de la oración. Aparece en un numeral ({tiga buku}), en un cuantificador ({banyak buku}), en un demostrativo de totalidad ({semua buku}, {kedua buku}) o dentro del propio sustantivo, en la forma reduplicada ({buku-buku}).

La consecuencia práctica es que {buku} solo es ambiguo en portugués y no es ambiguo en indonesio. El lector tiene que saber que el portugués metió el plural dentro del sustantivo y el indonesio no hizo nada de eso.

## Dónde vive el número

Cuatro sitios, y el sustantivo no es ninguno de ellos.

{1} Numeral. {tiga buku}, {sepuluh rumah}, {seratus orang}. El numeral va delante del sustantivo y es la manera más directa de decir «más de uno».

{2} Cuantificador. {banyak buku} «muchos libros», {sedikit buku} «pocos libros», {beberapa buku} «algunos libros». {banyak} es el más común y no necesita numeral junto.

{3} Demostrativo de totalidad. {semua buku} «todos los libros», {kedua buku} «los dos libros», {ketiganya} «los tres», {mereka-mereka} «cada uno de ellos».

{4} Reduplicación. {buku-buku}, {anak-anak}, {orang-orang}, {rumah-rumah}. La forma repetida aparece cuando el sustantivo vuelve a ser el sintagma, no cuando va después de un numeral.

El punto que más engaña es la dirección de la diferencia. En portugués el plural es un accidente que el sustantivo carga consigo; en indonesio es una decisión de la oración. Por eso la misma oración puede convertirse en otra sin que cambie una sola letra del sustantivo.

## Reduplicación: el plural que vive dentro de la palabra

La reduplicación es la repetición de la base, entera o en parte. Es la única manera de que el propio sustantivo cargue un plural, y por eso es el único punto en que el plural indonesio se parece al portugués.

La reduplicación integral repite la palabra entera: {buku} → {buku-buku}, {anak} → {anak-anak}, {orang} → {orang-orang}. Funciona con sustantivos nativos de una o dos sílabas y es corriente en la prosa bíblica. Una salvedad: {buku-buku} es plural y también puede sonar a «varios libros», con un matiz de variedad.

La reduplicación parcial viene con {se-} y con el clasificador: {seorang} «una persona», {seekor} «un animal», {sebiji} «un grano», {sebuah} «un objeto». Aquí no hay plural ninguno: {se-} marca uno, y el clasificador dice de qué tipo de cosa se trata.

Un tercer grupo lleva {ber-} más numeral y significa «en grupos de»: {berdua} «los dos juntos», {bertiga} «de tres en tres», {berlima} «de cinco en cinco». Es una manera de contar que el portugués no tiene y que aparece en oraciones como «los dos estaban de acuerdo».

La reduplicación integral y la parcial no se intercambian. {orang-orang} es plural; {seorang} es singular; {banyak orang} también es plural, y es más común en el habla corriente que {orang-orang}, que suena literario con un sustantivo contable.

## Pintu yang sempit, jalannya sesak

{Mateo 7:13} tiene el par más limpio que ofrece el indonesio: {Masuklah melalui pintu yang sempit, sebab sempitlah pintu dan sesak jalannya}. El portugués necesita dos plurales que tenía el griego, uno en cada sustantivo, y a veces un tercero en el verbo: «las puertas estrechas», «el camino estrecho». El indonesio escribe {pintu} dos veces y {jalannya} una, y la diferencia que el griego hacía con el artículo solo asoma en un {yang} y en un clítico {nya}.

El lector que traduce palabra por palabra escribe {pintu-pintu yang sempit}, que no está mal, y luego {pintu sempit} para el segundo término, que pierde el plural sin querer. Los dos significan lo mismo en portugués y no significan lo mismo en indonesio: el primero afirma que existen varias puertas, el segundo habla de alguna puerta cualquiera. En las traducciones bíblicas lo segundo es más común, y a nadie le llama la atención, porque la información ya está en el contexto.

Un caso en que la pérdida se ve: {mobil saya} puede ser «mi coche» y «mis coches», y las dos oraciones son rigurosamente la misma. En portugués la diferencia está en el sustantivo; en indonesio solo puede estar en {satu}, {kedua}, {banyak} o en la reduplicación, y si no aparece ninguna, el lector no tiene manera de saberlo. La traductora elige una de las dos lecturas y decide el contexto por ella, no la palabra.`),
  vocab: [
    V('buku', 'buku', 'libro'),
    V('buku-buku', 'buku', 'libros (reduplicado)'),
    V('rumah', 'rumah', 'casa'),
    V('rumah-rumah', 'rumah', 'casas (reduplicado)'),
    V('anak-anak', 'anak', 'niños, hijos (reduplicado)'),
    V('orang', 'orang', 'persona; clasificador de personas'),
    V('orang-orang', 'orang', 'personas (reduplicado)'),
    V('tiga', 'tiga', 'tres'),
    V('sepuluh', 'sepuluh', 'diez'),
    V('seratus', 'seratus', 'cien'),
    V('banyak', 'banyak', 'muchos'),
    V('sedikit', 'sedikit', 'pocos'),
    V('beberapa', 'beberapa', 'algunos'),
    V('semua', 'semua', 'todos, todo'),
    V('keduanya', 'dua', 'los dos'),
    V('berdua', 'dua', 'los dos juntos, en pareja'),
    V('pintu', 'pintu', 'puerta'),
    V('jalannya', 'jalan', 'el camino (de ella)'),
  ],
  rules: [
    {
      n: '1',
      text: T('El sustantivo indonesio no marca plural: {buku} es «el libro» y «los libros».'),
    },
    {
      n: '2',
      text: T(
        'El número vive en el numeral, el cuantificador, el demostrativo de totalidad o en la reduplicación.',
      ),
    },
    {
      n: '3',
      text: T(
        'La reduplicación integral ({buku-buku}) es plural; la parcial con {se-} ({seorang}) es singular.',
      ),
    },
    {
      n: '4',
      text: T(
        '{semua} y {keduanya} son cuantificadores de totalidad y hacen el trabajo del plural portugués.',
      ),
    },
    {
      n: '5',
      text: T('{ber-} más numeral significa «en grupos de»: {berdua}, {bertiga}, {berlima}.'),
    },
  ],
  notes: [
    {
      label: T('Cuándo suena distinta la reduplicación'),
      text: T(
        'En {buku-buku} el tono es de pluralidad genérica, «libros de todo tipo». En {anak-anak} el tono es familiar. En la prosa litúrgica la reduplicación integral suena más elevada que {banyak anak}.',
      ),
    },
    {
      label: T('Préstamos y reduplicación'),
      text: T(
        'La reduplicación integral funciona mejor en sustantivos nativos cortos. En palabras prestadas el plural corriente es {banyak + sustantivo} o un numeral, y la reduplicación suena coloquial: {mobil-mobil} se acepta, pero {banyak mobil} es más formal.',
      ),
    },
  ],
  examples: [
    {
      text: 'Buku itu ada di meja.',
      gloss: T('El libro está sobre la mesa (o: los libros están).'),
    },
    { text: 'Banyak buku di meja.', gloss: T('Muchos libros sobre la mesa.') },
    { text: 'Tiga buku di meja.', gloss: T('Tres libros sobre la mesa.') },
    { text: 'Anak-anak bermain di halaman.', gloss: T('Los niños juegan en el patio.') },
    { text: 'Orang-orang sudah datang.', gloss: T('La gente ya ha llegado.') },
    { text: 'Setiap orang membawa seekor domba.', gloss: T('Cada persona trae una oveja.') },
    { text: 'Mereka berdua pergi ke kota.', gloss: T('Los dos fueron a la ciudad.') },
    { text: 'Semua kitab kudus.', gloss: T('Toda la Escritura.') },
    { text: 'Rumah-rumah itu kosong semua.', gloss: T('Aquellas casas están todas vacías.') },
  ],
  tables: [
    {
      caption: T('Onde o número mora'),
      head: ['Recurso', 'Exemplo', 'Leia como', 'Valor'],
      rows: [
        ['numeral', 'tiga buku', 'três livros', 'contagem exata'],
        ['quantificador', 'banyak buku', 'muitos livros', 'quantidade indefinida'],
        ['totalidade', 'semua buku', 'todos os livros', 'conjunto inteiro'],
        ['parcial', 'keduanya', 'os dois livros', 'conjunto determinado'],
        ['redução integral', 'buku-buku', 'livros', 'plural dentro do nome'],
      ],
    },
    {
      caption: T('Redução integral e redução parcial'),
      head: ['Tipo', 'Padrão', 'Exemplo', 'Número'],
      rows: [
        ['integral, 1 sílaba', 'buku → buku-buku', 'buku-buku', 'plural'],
        ['integral, 2 sílabas', 'anak → anak-anak', 'anak-anak', 'plural'],
        ['integral, pessoa', 'orang → orang-orang', 'orang-orang', 'plural'],
        ['parcial com se-', 'se- + classificador', 'seorang', 'singular, um'],
        ['parcial com se-', 'se- + classificador', 'seekor', 'singular, um'],
        ['coletiva com ber-', 'ber- + numeral', 'berdua', 'grupo de dois'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se dice «los libros» sin numeral y sin cuantificador?'),
    options: [T('buku-buku'), T('buku'), T('seorang buku'), T('para buku')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Forma el plural por reduplicación: «los niños» = ___.'),
      answer: 'anak-anak',
      hint: T('Reduplica la base entera.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué significa {berdua}?'),
      options: [T('los dos juntos'), T('dos años'), T('la segunda vez'), T('dos veces')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Une el cuantificador con su valor'),
      pairs: [
        { a: T('{tiga}'), b: T('exacto') },
        { a: T('{banyak}'), b: T('indefinido') },
        { a: T('{semua}'), b: T('total') },
        { a: T('{berlima}'), b: T('en grupos de cinco') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
