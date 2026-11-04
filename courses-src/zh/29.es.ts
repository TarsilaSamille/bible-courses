import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  section: T('Números'),
  title: T('{百}, {千}, {萬} y la fracción: contar por posiciones'),
  subtitle: T(
    'El número mandarín se lee por posición, y la cuarta posición reinicia la cuenta desde el cero',
  ),
  body: C(`
## Cada posición vale diez veces la anterior

El numeral mandarín no es una suma de sumandos: es una lista de posiciones. Una posición de unidades, una de decenas, una de centenas, una de millares, y el nombre de la posición es al mismo tiempo el número y el lugar. {yì bǎi èr shí sān} es 123 porque lo que está delante de {bǎi} vale cien, lo que está delante de {shí} vale diez, y lo que no tiene nombre ninguno vale uno.

**Las posiciones del mandarín son {gè}, {shí}, {bǎi}, {qiān}, {wàn} y {yì}, y cada una vale diez veces la anterior.**

La consecuencia práctica es que el número no se lee de derecha a izquierda — se lee de izquierda a derecha, del mayor al menor, y ese orden es el opuesto del portugués en "ciento veintitrés". Quien traduce del portugués busca la "y" que no está: en mandarín es {yì bǎi èr shí sān}, y la suma está implícita en la posición.

El límite del mandarín escrito es {yì}, cien millones, y es también el fin de lo que una persona lee sin esfuerzo de memoria. Pasado {yì} la cuenta sigue como {wàn} {yì}, pero casi nadie lo hace de cabeza. Y el número no se lee dígito a dígito: se lee por grupos de cuatro, y el grupo que cambia lleva el nombre del grupo delante.

## El cero que existe solo cuando hay una posición vacía

El {líng} es el carácter del cero, y no entra donde uno esperaría. No entra en {shí wǔ}, porque {shí} ya ocupa la posición de las decenas. Entra donde una posición en medio queda sin número: {yì bǎi líng wǔ} es 105, {yì qiān líng wǔ} es 1005, {wǔ qiān líng bǎi líng shí} es 5010.

**El {líng} entra en medio del número, y nunca al final.**

El {shí} es el caso más confuso, y importa porque es el más común. {shí} es al mismo tiempo el número diez y el nombre de la posición de las decenas. Eso produce una asimetría que el portugués no tiene: quince es {shí wǔ}, sin {yī} delante; ciento quince es {yì bǎi yī shí wǔ}, con el {yī}. Y veinte es {èr shí}, no {èr èr shí}, y ciento veinte es {yì bǎi èr shí}.

¿Por qué vuelve el {yī} en las centenas y no en las decenas? Porque {shí} como posición no puede quedarse solo: necesita un número delante. En las centenas y por arriba, {shí} ya está dentro del número mayor y no necesita coeficiente propio. La regla cabe en una prueba: si {shí} es la primera palabra del número, no lleva {yī}; si viene después de otro nombre de posición, lo lleva.

## {-分}: la fracción, y lo que usa la Biblia en su lugar

La fracción del mandarín es una sola palabra hecha de tres piezas: el total, {fēn} y la preposición {zhī}. La regla es de orden, no de sentido.

**El total va antes y la parte después: {sān} {fēn} {zhī} {èr} son dos tercios.** El orden es el de la frase inglesa "three parts, two of them", y el opuesto del portugués. El sustantivo de la parte es {fèn}, y {bàn} es la mitad. Lo que el mandarín hace a menudo es repetir el total en vez de usar la fracción: "mitad" es {yī bàn}, no {èr fēn zhī yī}.

Y aquí está el hallazgo práctico para la lectura: la Biblia en mandarín casi no necesita fracción, porque sus números son medidas y no porciones. 1 Reyes 4:22 escribe {sān shí shēng} {miàn}, {liù shí shēng} {yóu}: "treinta medidas de harina, sesenta de aceite". {shēng} es una medida seca de volumen, y {dǒu} son diez {shēng}. Un número seguido de medida es exacto, y el mandarín escrito no tiene el "unos" ni el "más o menos" que el portugués toma prestado de otras lenguas. Donde la Biblia dice "treinta", quiere decir treinta.

## Un número sin coma y sin separador

El último problema es de lectura, no de gramática. {yì bǎi èr shí sān wàn sì qiān wǔ bǎi liù shí qī} es 1.234.567, escrito entero, sin coma, sin punto y sin espacio. El lector tiene que insertar los grupos, y la inserción se hace de cuatro en cuatro desde la derecha: {yì bǎi èr shí sān} {wàn} {sì qiān wǔ bǎi liù shí qī}.

El gancho está en dos versículos que todo el mundo ya ha leído mal. Apocalipsis 11:3 escribe {yī qiān èr bǎi liù shí}, 1260, y Apocalipsis 13:18 escribe {liù bǎi liù shí liù}, 666. En los dos casos el número tiene como mucho cuatro posiciones y ni una coma: en {liù bǎi liù shí liù} no hay {líng} entre el {bǎi} y el {shí}, porque la posición de las decenas está ocupada. Quien busca un {líng} donde no hay posición vacía obtiene el número equivocado.

Y la lógica va al revés: los números que la versión-union escribe por extenso son siempre posiciones, nunca sumandos. No existe "seiscientos sesenta y seis" en mandarín: existe {liù bǎi liù shí liù}, y la lectura correcta sale de la posición, no de una conjunción.`),
  vocab: [
    V('bǎi', '百', 'cien (bǎi)'),
    V('qiān', '千', 'mil (qiān)'),
    V('wàn', '万', 'diez mil; la posición que abre un grupo nuevo (wàn)'),
    V('yì (número)', '亿', 'cien millones; diez mil veces diez mil (yì)'),
    V('líng', '零', 'cero; la posición vacía en medio del número (líng)'),
    V('shí (casa)', '十', 'diez; a la vez el nombre de la posición de las decenas (shí)'),
    V('fēn (fração)', '分', 'parte; después del numeral, fracción (fēn)'),
    V('fēnzhī', '分之', 'sobre: liga el total con la parte (fēnzhī)'),
    V('sān fēn zhī èr', '三分之二', 'dos tercios (sān fēn zhī èr)'),
    V('fèn', '份', 'la parte, la porción (fèn)'),
    V('shēng', '升', 'medida seca de volumen; unidad exacta (shēng)'),
    V('dǒu', '斗', 'medida seca; diez {shēng} (dǒu)'),
    V('shí wǔ', '十五', 'quince (shí wǔ)'),
    V('liù bǎi liù shí liù', '六百六十六', 'seiscientos sesenta y seis (liù bǎi liù shí liù)'),
    V('yī qiān èr bǎi liù shí', '一千二百六十', 'mil doscientos sesenta (yī qiān èr bǎi liù shí)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Las posiciones son {gè}, {shí}, {bǎi}, {qiān}, {wàn} y {yì}, y cada una vale diez veces la anterior.',
      ),
    },
    {
      n: '2',
      text: T('El {líng} entra en medio del número, y nunca al final: {yì bǎi líng wǔ} es 105.'),
    },
    {
      n: '3',
      text: T(
        '{shí} es al mismo tiempo diez y el nombre de la posición: {shí wǔ} es quince, {yì bǎi yī shí wǔ} es ciento quince.',
      ),
    },
    {
      n: '4',
      text: T(
        'En {fēnzhī}, el total va antes y la parte después: {sān fēn zhī èr} son dos tercios.',
      ),
    },
    {
      n: '5',
      text: T(
        'Pasado {wàn}, el mandarín cuenta en grupos de cuatro: {yì bǎi èr shí sān wàn sì qiān wǔ bǎi liù shí qī} es 1.234.567.',
      ),
    },
  ],
  notes: [
    {
      label: T('El número bíblico es exacto'),
      text: T(
        'Un número seguido de medida en mandarín no admite ni "unos" ni "más o menos". 1 Reyes 4:22 escribe {sān shí shēng} y {liù shí shēng}, y el traductor no tenía dónde poner una aproximación. Donde el portugués traduce "unos treinta", el mandarín necesitaría una palabra más, y la versión-union prefiere escribir treinta.',
      ),
    },
    {
      label: T('Por qué no hay "y" en el número'),
      text: T(
        'Cada nombre de posición ya lleva su valor. {yì bǎi èr shí sān} no necesita {yī} delante del {shí} porque {shí} es posición y no sumando; y no necesita conjunción porque la suma está implícita en la posición. Traducir posición por posición y no palabra por palabra es lo que resuelve el número entero.',
      ),
    },
  ],
  examples: [
    {
      text: '六百六十六',
      gloss: T(
        'liù bǎi liù shí liù — 666; sin {líng}, porque ninguna posición está vacía (Ap 13:18)',
      ),
    },
    {
      text: '一千二百六十',
      gloss: T('yī qiān èr bǎi liù shí — 1260; cuatro posiciones, cuatro nombres (Ap 11:3)'),
    },
    {
      text: '三十升麵，六十升油',
      gloss: T(
        'sān shí shēng miàn, liù shí shēng yóu — treinta medidas de harina, sesenta de aceite (1 Reyes 4:22): medida exacta',
      ),
    },
    {
      text: '一分為二',
      gloss: T('yī fēn wéi èr — dividir uno en dos: la operación, no la fracción'),
    },
    { text: '三分之二', gloss: T('sān fēn zhī èr — dos tercios: el total va primero') },
    { text: '一萬', gloss: T('yī wàn — diez mil: una sola posición, y el {yī} es obligatorio') },
    { text: '零', gloss: T('líng — cero; dentro de un número siempre está entre dos posiciones') },
  ],
  tables: [
    {
      caption: T('Las seis posiciones'),
      head: [T('Posición'), T('Valor'), T('Escrito'), T('Lectura')],
      rows: [
        [T('{gè}'), T('1'), T('{sān} {gè}'), T('tres')],
        [T('{shí}'), T('10'), T('{shí} {wǔ}'), T('quince')],
        [T('{bǎi}'), T('100'), T('{liǎng} {bǎi}'), T('doscientos')],
        [T('{qiān}'), T('1.000'), T('{sān} {qiān}'), T('tres mil')],
        [T('{wàn}'), T('10.000'), T('{wǔ} {wàn}'), T('cincuenta mil')],
        [T('{yì}'), T('100.000.000'), T('{yī} {yì}'), T('cien millones')],
      ],
    },
    {
      caption: T('Dónde entra el {líng}'),
      head: [T('Número'), T('Escrito'), T('Por qué')],
      rows: [
        [T('105'), T('{yì} {bǎi} {líng} {wǔ}'), T('la posición de las decenas está vacía')],
        [T('1005'), T('{yì} {qiān} {líng} {wǔ}'), T('la posición de las centenas está vacía')],
        [T('15'), T('{shí} {wǔ}'), T('{shí} ya es la posición, y no lleva {yī}')],
        [
          T('115'),
          T('{yì} {bǎi} {yī} {shí} {wǔ}'),
          T('la posición de las decenas es {shí}, y vuelve el {yī}'),
        ],
        [T('10.000'), T('{yī} {wàn}'), T('la posición siguiente ya es {wàn}')],
      ],
    },
    {
      caption: T('Fracción, mitad y medida'),
      head: [T('Forma'), T('Se lee'), T('Qué es')],
      rows: [
        [T('{sān} {fēn} {zhī} {èr}'), T('dos sobre tres'), T('fracción: el total va primero')],
        [T('{bàn}'), T('medio'), T('la mitad, con el {yī} explícito: {yī} {bàn}')],
        [T('{sān shí} {shēng}'), T('treinta medidas'), T('cantidad exacta, nunca aproximada')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se escribe 105 en mandarín?'),
    options: [
      T('{yì} {bǎi} {líng} {wǔ}'),
      T('{yì} {líng} {bǎi} {wǔ}'),
      T('{yī} {bǎi} {líng} {wǔ}'),
      T('{yì} {bǎi} {wǔ}'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete 666 como lo escribe la versión-union: 六百____六十六'),
      answer: '六',
    },
    {
      kind: 'match',
      prompt: T('Relacione el nombre de la posición con su valor'),
      pairs: [
        { a: T('{shí}'), b: T('diez') },
        { a: T('{bǎi}'), b: T('cien') },
        { a: T('{wàn}'), b: T('diez mil') },
        { a: T('{yì}'), b: T('cien millones') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('En {三分之二}, ¿qué es el dos?'),
      options: [
        T('la parte: son dos tercios'),
        T('el total: es un tercio'),
        T('el número de partes, y la fracción es un tercio'),
        T('la medida, y {fēn} es la unidad'),
      ],
      answer: 0,
    },
  ],
};
