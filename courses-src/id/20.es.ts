import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  section: T('Numeral'),
  title: T('El numeral'),
  subtitle: T('satu, sepuluh, seratus, seribu: la forma clásica y la forma corta'),
  body: C(`## De uno a veinte

{satu}, {dua}, {tiga}, {empat}, {lima}, {enam}, {tujuh}, {delapan}, {sembilan}, {sepuluh}, {sebelas}, {dua belas}. A partir de diez la construcción es regular: la decena va delante, la unidad detrás, y la unidad se puede omitir. {Dua puluh} son veinte; {dua puluh satu} son veintiuno.

Un detalle que parece ruido y es sistema: los numerales {tujuh}, {delapan}, {sembilan}, {sebelas}, {seratus}, {seribu} y {sejuta} llevan {se} delante. La regla es que el {se} aparece cuando la palabra del numeral es cerrada de dos o más sílabas y desaparece cuando es abierta: {tujuh}, pero {enam} y {dua}. Quien memoriza los números sin entender el {se} memoriza diecisiete palabras y no puede predecir la siguiente.

Y {satu} tiene dos vidas: numeral, en {satu buku} «un libro», y el {se} que se fusiona con el clasificador, en {seorang} «una persona», {seekor} «un animal», {sebuah} «un objeto». La misma origen, y lo que decide es lo que viene detrás del sustantivo.

## Decenas, centenas, miles

Por encima de diez la lengua es por composición, y las piezas son cinco: {-puluh} decena, {-ratus} centena, {-ribu} millar, {-juta} millón, {-miliar} billón.

{2} × {10} = {dua puluh}; {3} × {10} = {tiga puluh}; {10} × {10} = {seratus}. El numeral va delante del nombre de la casa decimal, y el nombre de la casa también puede volverse sustantivo solo: {puluh} «diez», {ratus} «cien», {ribu} «mil», {juta} «millón». {Ribuan orang} son miles de personas; {sepuluh orang} son diez personas.

Después de diez viene {ribu}, y ahí aparece la primera irregularidad seria: {seribu} «un millar» y no {satu ribu}. La regla es que {ribu} es {seribu} a secas, pero en {dua ribu} el {se} vuelve a ser el {se} de {satu}, y en {dua ribu} y {tiga ribu} no hay nada. Lo mismo con {juta}: {sejuta} es un millón, {dua juta} son dos millones.

Y hay un tercer camino, el más corto de todos, que es la forma que el portugués resuelve con un artículo indefinido pero que aquí funciona como numeral pegado: {doanya} «los dos», {tiganya} «los tres», {seribunya} «los mil», {jutaannya} «los millones». Es el numeral con {-nya}, y significa «cuántos» y «todos ellos» a la vez. Quien lee {doanya} como «el segundo» ha leído mal: {yang kedua} es lo que significa el segundo.

## Dónde puede ir el numeral

El numeral va delante del sustantivo, siempre, sin artículo y sin preposición: {tiga buku}, {sepuluh rumah}, {seratus orang}. No hay manera de decir «de tres» ni «el tres».

Tras {ada}, el numeral funciona como sujeto y va justo después: {ada dua orang di pintu} «hay dos personas en la puerta», {ada tiga buku} «hay tres libros». Y es el numeral el que identifica al sujeto, ya que {ada} no identifica nada.

Tras un sustantivo, el numeral solo aparece con {yang}: {yang kedua}, {yang ketiga}, {yang terakhir}. {Buku kedua} no existe; {buku yang kedua} sí. El portugués tiene una sola palabra para el ordinal y el indonesio tiene dos, una de ellas siempre igual.

Y hay un uso del numeral que no cuenta nada: {berdua} «los dos juntos», {bertiga} «de tres en tres», {berlima} «de cinco en cinco», con {ber-} más el numeral. {Dua orang itu berdua} es «aquellas dos personas, las dos juntas», y {ber-} dice que cuentan como grupo.

Las fracciones usan otra base: {setengah} «mitad», {seperempat} «un cuarto», {sepertiga} «un tercio», {seperenam} «un sexto». El patrón es {se-} más {per-} más el numeral. Es la misma información que el griego expresa con {to de}.

## Lima roti dan dua ikan

{el relato de la multiplicación} en {Juan 6:9} trae el par de numerales más famoso del texto: {lima roti dan dua ikan}. Cinco y dos, sin ninguna preposición, sin artículo, y con el sustantivo justo detrás del número.

Quien viene del portugués espera «los cinco panes y los dos peces», con artículo en los dos, y busca en {lima} y {dua} algo que no está. No está porque el numeral no flexiona en portugués y no flexiona en indonesio: en las dos lenguas es {lima} y {dua} ante cualquier sustantivo, definido o no. La diferencia es que el portugués pone artículo y el indonesio no, y el lector tiene que decidir él mismo si el {dua} que sigue es «los dos» o «dos».

El relato de la multiplicación en {Mateo 14:19} añade lo que faltaba: el verbo {berkahi} sobre {lima} y {dua}. Es el texto que muestra el numeral como sujeto, y por eso la aritmética del Nuevo Testamento, que el griego marcaba con el caso, aparece en indonesio sin marca ninguna.`),
  vocab: [
    V('satu', 'satu', 'uno'),
    V('dua', 'dua', 'dos'),
    V('tiga', 'tiga', 'tres'),
    V('empat', 'empat', 'cuatro'),
    V('lima', 'lima', 'cinco'),
    V('enam', 'enam', 'seis'),
    V('tujuh', 'tujuh', 'siete'),
    V('delapan', 'delapan', 'ocho'),
    V('sembilan', 'sembilan', 'nueve'),
    V('sepuluh', 'sepuluh', 'diez'),
    V('sebelas', 'sebelas', 'once'),
    V('puluh', 'puluh', 'diez; la decena'),
    V('ratus', 'ratus', 'cien; la centena'),
    V('seratus', 'seratus', 'cien'),
    V('ribu', 'ribu', 'mil; millar'),
    V('seribu', 'seribu', 'mil'),
    V('juta', 'juta', 'millón'),
    V('sejuta', 'sejuta', 'un millón'),
    V('doanya', 'dua', 'los dos'),
    V('setengah', 'setengah', 'mitad'),
    V('berdua', 'dua', 'los dos juntos'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Los numerales llevan {se} cuando la palabra es cerrada: {tujuh}, {delapan}, {sembilan}, {sebelas}, {seratus}, {seribu}, {sejuta}.',
      ),
    },
    {
      n: '2',
      text: T(
        'Por encima de diez la decena va delante: {dua puluh}, {tiga puluh}; la unidad se puede omitir.',
      ),
    },
    {
      n: '3',
      text: T(
        'El numeral va delante del sustantivo, sin artículo y sin preposición: {tiga buku}, {seratus orang}.',
      ),
    },
    {
      n: '4',
      text: T(
        'El ordinal necesita {yang} detrás del sustantivo: {buku yang kedua}, nunca {buku kedua}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Las fracciones usan {se-} más {per-} más el numeral: {setengah}, {seperempat}, {sepertiga}.',
      ),
    },
  ],
  notes: [
    {
      label: T('El numeral nominalizado'),
      text: T(
        'Con {-nya} el numeral deja de contar y pasa a retomar el conjunto: {doanya} «los dos», {seribunya} «los mil». Es la forma más corta que hay para decir «cuántos» y «todos ellos» al mismo tiempo.',
      ),
    },
    {
      label: T('Formas en el texto bíblico'),
      text: T(
        'El indonesio bíblico escrito prefiere la forma por composición, {dua ribu}, y no la forma corta {doanya}. Las formas con {-nya} son del registro hablado y aparecen poco en un texto solemne.',
      ),
    },
  ],
  examples: [
    { text: 'Ada dua orang di pintu.', gloss: T('Hay dos personas en la puerta.') },
    { text: 'Saya punya tiga buku.', gloss: T('Yo tengo tres libros.') },
    { text: 'Dua puluh satu murid hadir.', gloss: T('Veintiún discípulos estuvieron presentes.') },
    { text: 'Yang kedua lebih mahal.', gloss: T('El segundo es más caro.') },
    { text: 'Buku yang terakhir ini bagus.', gloss: T('Este último libro es bueno.') },
    { text: 'Doanya pergi bersama.', gloss: T('Los dos se fueron juntos.') },
    { text: 'Ribuan orang datang.', gloss: T('Miles de personas vinieron.') },
    { text: 'Separuh dari mereka sudah pergi.', gloss: T('La mitad de ellos ya se ha ido.') },
    { text: 'Dua orang itu berdua.', gloss: T('Aquellas dos personas, las dos juntas.') },
    { text: 'Dia membawa lima roti.', gloss: T('Él trae cinco panes.') },
  ],
  tables: [
    {
      caption: T('De um a doze'),
      head: ['Número', 'Indonésio', 'Número', 'Indonésio'],
      rows: [
        ['1', 'satu', '7', 'tujuh'],
        ['2', 'dua', '8', 'delapan'],
        ['3', 'tiga', '9', 'sembilan'],
        ['4', 'empat', '10', 'sepuluh'],
        ['5', 'lima', '11', 'sebelas'],
        ['6', 'enam', '12', 'dua belas'],
      ],
    },
    {
      caption: T('As casas decimais'),
      head: ['Casa', 'Uma unidade', 'Com numeral', 'Leia como'],
      rows: [
        ['dezena', 'sepuluh', 'dua puluh', 'vinte'],
        ['dezena + unidade', 'sebelas', 'dua puluh satu', 'vinte e um'],
        ['centena', 'seratus', 'tiga ratus', 'trezentos'],
        ['milhar', 'seribu', 'dua ribu', 'dois mil'],
        ['milhão', 'sejuta', 'dua juta', 'dois milhões'],
        ['fração', 'setengah', 'seperempat', 'um quarto'],
      ],
    },
    {
      caption: T('Onde o numeral pode aparecer'),
      head: ['Posição', 'Padrão', 'Exemplo', 'Leia como'],
      rows: [
        ['antes do substantivo', 'N + nome', 'tiga buku', 'três livros'],
        ['depois de ada', 'ada + N', 'ada dua orang', 'há duas pessoas'],
        ['depois do substantivo', 'nome + yang + N', 'buku yang kedua', 'o segundo livro'],
        ['coletivo', 'ber- + N', 'berdua', 'em dupla'],
        ['nominalizado', 'N + nya', 'doanya', 'os dois'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se dice «el segundo libro»?'),
    options: [T('buku yang kedua'), T('buku kedua'), T('kedua buku'), T('buku yang dua')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: veintiuno = dua puluh ___.'),
      answer: 'satu',
      hint: T('La unidad detrás de la decena.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es la forma correcta de «dos mil»?'),
      options: [T('dua ribu'), T('satu ribu'), T('dua seribu'), T('ribu dua')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Une el número con su valor'),
      pairs: [
        { a: T('{seratus}'), b: T('100') },
        { a: T('{seribu}'), b: T('1000') },
        { a: T('{sejuta}'), b: T('un millón') },
        { a: T('{setengah}'), b: T('mitad') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
