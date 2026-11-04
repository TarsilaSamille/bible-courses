import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  section: T('Verbo'),
  title: T('Adverbios: la clase abierta, {shèn} y el {-地} que se vuelve sustantivo'),
  subtitle: T(
    'El mandarín crea adverbios a voluntad, y el carácter que los hace es el mismo que nombra el suelo',
  ),
  body: C(`
## Una clase que no cierra

Sustantivo, verbo, adjetivo y adverbio son las cuatro clases abiertas de la lengua: el mandarín crea una palabra nueva en ellas cuando la necesita, y la cuenta no cierra. Las demás clases son cortas y contables, y por eso se convierten en tabla. El adverbio está del lado abierto, y la prueba es que la mitad de los adverbios del texto bíblico es una sola sílaba pegada a un adjetivo o a un verbo.

El adverbio entra en dos posiciones y solo dos. Antes del adjetivo, es grado: {hěn} {lěng}, {tài} {guì}, {zuì} {hǎo}. Antes del verbo, es tiempo o aspecto: {wèi} {lái}, {yǐ} {qù}, {huò} {shì} {huò}. Y hay una tercera posición, la de después del verbo, que existe para una sola cosa.

**El adverbio entra antes del verbo o antes del adjetivo. La {de} de modo es la única que entra después.**

## {-地}: el mismo sonido, tres papeles

El mandarín tiene dos piezas que suenan igual y no son la misma pieza — la partícula de posesión y el adverbio de modo. La partícula de posesión se escribe {de}, con el carácter que significa "blanco", y el adverbio de modo se escribe {dì}, con el carácter que significa "lugar". La romanización borra la diferencia, y por eso toda explicación de los adverbios en mandarín parece más complicada de lo que es: hay dos piezas, y la escritura dice cuál es cuál.

**El {dì} de modo hace el mismo trabajo que la partícula de posesión y ocupa la misma casilla.** Después del verbo o del adjetivo, {dì}, y el complemento. {zǒu} {de} {kuài}, {dào} {de} {zhí}, {gōng} {zuò} {de} {hǎo}. Lo que cambia es lo que es el complemento: un adverbio en el primer caso, un sustantivo en el segundo. Sin {dì} detrás del verbo la frase está mal, y {zǒu kuài} no es mandarín.

El segundo papel es el más sorprendente y el más útil. El mismo {dì} convierte verbo o adjetivo en sustantivo, sin que nada cambie de posición: {xīn} {dì} es "el lugar del corazón", es decir, el corazón; {jìng} {dì} es "el lugar del silencio", es decir, la mente; {fú} {dì} es "lugar de felicidad". Quien encuentra {xīndì} en un libro y lo traduce como "localización del corazón" ha leído tres palabras donde había una.

El tercer papel es el sustantivo de siempre: {dì} es la tierra, el suelo, el lugar. {quán} {dì} es "toda la tierra", {dì} {fāng} es "lugar", {tiān} {dì} es "cielo y tierra". Los tres conviven en el mismo carácter, y lo que los separa es la posición: después de un verbo o de un adjetivo es marca de adverbio o nombre de acción; solo o delante de otro sustantivo es el suelo.

## Adverbios de una sílaba en el texto antiguo

El mandarín hablado usa {hěn}, {tài} y {zuì}, y la versión-union casi no usa ninguno de los tres: el traductor bilingüe de 1919 traducía al mandarín escrito, y el mandarín escrito tiene otros adverbios de grado. **Su "muy" es {shèn}, su "bastante" es {pō} y su "extremadamente" es {jí}.** Los tres son una sola sílaba, y ninguno está derivado de nada: no hay verbo dentro ni sustantivo dentro.

Los adverbios temporales son el mismo caso. {wèi} es "todavía no", {yǐ} es "ya", y los dos vienen pegados al verbo: {wèi} {dào}, {yǐ} {jīng}. Los dos se sincronizan con la negación: {bù} {wèi} {lái} es el "todavía no", {bù} {yǐ} {qù} es el "ya no", y quien arma la frase sin ellos pierde la información.

El tercer grupo es el que solo aparece en texto escrito: {yì}, "también", y {fù}, "otra vez", hermanos de {yě} y {zài} del habla. Y {huò}, que puede ser "tal vez" o "o", según lo que venga después. Son los que hacen que un texto antiguo suene antiguo, y ninguno aparece en una conversación.

## Lo que el texto bíblico hace sin adverbio

El hallazgo práctico es que la versión-union usa muy poco el {-地} derivado. Donde el verbo ya dice cómo, el adverbio sobra, y el traductor bilingüe lo sabía. Isaías 6:3 escribe {wàn jūn zhī Yēhéhuá chōngmǎn quán dì}: "el Señor de los ejércitos llena toda la tierra", con el verbo {chōngmǎn}, "llenar", y ningún adverbio de modo, porque {chōngmǎn} ya contiene el suyo.

Lo que sí usa son los adverbios de grado del registro escrito y los cuantificadores, que no son adverbios pero hacen el mismo trabajo. Salmo 19:1 abre con {zhū tiān shùshuō Shén de róngyào}: {zhū} es "todos los", el mismo trabajo que hacen {fán} y {xián}, y no entra ningún numeral en la frase. Proverbios 14:23 trae {fán} y {bì}: "todo el que securities y carga peso tendrá de seguro comida", y el adverbio es {bì}, "seguro", una sílaba pegada al verbo {yǒu}.

La lección de lectura es corta y vale para todo el Salterio: cuando el traductor antiguo escribe un adverbio de grado, está vertiendo un intensificador hebreo y no añadiendo un escudo retórico. Reconocer la palabra como adverbio, y no como sustantivo ni como verbo, es lo que deja la frase en portugués con la fuerza justa.`),
  vocab: [
    V('shèn', '甚', 'muy, mucho más; adverbio de grado del mandarín escrito (shèn)'),
    V('pō', '颇', 'bastante; adverbio de grado del mandarín escrito (pō)'),
    V('jí', '极', 'extremadamente; adverbio de grado (jí)'),
    V('yì', '亦', 'también; adverbio del mandarín escrito, hermano de yě (yì)'),
    V('fù', '复', 'otra vez, de nuevo; mandarín escrito (fù)'),
    V('huò', '或', 'tal vez, o; adverbio de dubitación (huò)'),
    V('wèi', '未', 'todavía no; adverbio temporal (wèi)'),
    V('yǐ', '已', 'ya; adverbio temporal (yǐ)'),
    V('bì', '必', 'seguro; adverbio de necesidad (bì)'),
    V('xián', '咸', 'todos, cada uno; cuantificador del mandarín escrito (xián)'),
    V('zhū', '诸', 'todos los; cuantificador plural del mandarín escrito (zhū)'),
    V(
      'dì (modo)',
      '地',
      'marca de adverbio de modo; el mismo sonido que la partícula de posesión (dì)',
    ),
    V('dì (nominalizador)', '地', 'convierte verbo o adjetivo en sustantivo (dì)'),
    V('dì (lugar)', '地', 'tierra, suelo, lugar; el sustantivo de siempre (dì)'),
    V('xīndì', '心地', 'el corazón; literalmente "lugar del corazón" (xīndì)'),
    V('jìngdì', '境地', 'la mente, el estado de ánimo; "lugar del silencio" (jìngdì)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El adverbio entra antes del verbo o antes del adjetivo. La {de} de modo es la única que entra después.',
      ),
    },
    {
      n: '2',
      text: T(
        'La partícula de posesión se escribe {de} y el adverbio de modo se escribe {dì}: el mismo sonido, caracteres distintos.',
      ),
    },
    {
      n: '3',
      text: T(
        'Después de un verbo o de un adjetivo, {dì} forma un adverbio de modo o un nombre de acción; solo, es la tierra.',
      ),
    },
    {
      n: '4',
      text: T(
        '{shèn}, {pō} y {jí} son los adverbios de grado del mandarín escrito, en lugar de {hěn}, {tài} y {zuì} del habla.',
      ),
    },
    {
      n: '5',
      text: T('{wèi} y {yǐ} son temporales y vienen pegados al verbo: {wèi dào}, {yǐ jīng}.'),
    },
  ],
  notes: [
    {
      label: T('El {-地} que el texto antiguo no usa'),
      text: T(
        'El sufijo derivado {-地} es productivo en el habla y casi está ausente de la versión-union. La razón no es la pobreza: es el registro. El traductor bilingüe de 1919 vertía hebreo al mandarín escrito, y en ese registro el verbo {chōngmǎn} ya contiene su adverbio. Donde el griego pone un participio, el mandarín escribe un verbo y nada más.',
      ),
    },
    {
      label: T('Cuantificadores que no son numeral'),
      text: T(
        '{zhū}, {xián}, {fán} y {jiē} dicen "todo" sin numeral alguno: no hay {yī}, ni {liǎng}, ni clasificador. Son la alternativa del mandarín escrito a la locución numeral, y aparecen donde el hebreo tiene un plural que no es número.',
      ),
    },
  ],
  examples: [
    { text: '慢慢地走', gloss: T('mànmàn de zǒu — caminar despacio: {dì} de modo') },
    {
      text: '心地',
      gloss: T('xīndì — el corazón; literalmente "lugar del corazón", con {dì} nominalizador'),
    },
    {
      text: '萬軍之耶和華充滿全地',
      gloss: T(
        'wàn jūn zhī Yēhéhuá chōngmǎn quán dì — el Señor de los ejércitos llena toda la tierra (Isa 6:3): ningún adverbio de modo',
      ),
    },
    {
      text: '諸天述說神的榮耀',
      gloss: T(
        'zhū tiān shùshuō Shén de róngyào — los cielos cuentan la gloria de Dios (Sl 19:1): {zhū} es "todos los"',
      ),
    },
    { text: '必', gloss: T('bì — con certeza, necesariamente: adverbio pegado al verbo {yǒu}') },
    {
      text: '尚',
      gloss: T('shàng — todavía; adverbio del mandarín escrito, hermano de {hái} en el habla'),
    },
    {
      text: '境',
      gloss: T('jìng — límite, territorio; en {jìngdì} significa "estado de ánimo", no lugar'),
    },
  ],
  tables: [
    {
      caption: T('Un carácter, tres papeles'),
      head: [T('Papel'), T('Qué hace'), T('Ejemplo'), T('Glosa')],
      rows: [
        [
          T('adverbio de modo'),
          T('dice cómo ocurre el verbo'),
          T('{zǒu} {de} {kuài}'),
          T('corre rápido'),
        ],
        [
          T('nombre de acción'),
          T('convierte verbo o adjetivo en sustantivo'),
          T('{xīndì}, {jìngdì}'),
          T('el corazón; la mente'),
        ],
        [T('sustantivo'), T('nombra la tierra y el lugar'), T('{quán} {dì}'), T('toda la tierra')],
      ],
    },
    {
      caption: T('Adverbios de grado: los del habla y los del texto'),
      head: [T('Adverbio'), T('Registro'), T('Entra'), T('Ejemplo')],
      rows: [
        [T('{hěn}'), T('habla'), T('antes del adjetivo'), T('{hěn} {lěng}')],
        [T('{tài}'), T('habla y escritura'), T('antes del adjetivo'), T('{tài} {guì le}')],
        [T('{zuì}'), T('habla y escritura'), T('antes del adjetivo'), T('{zuì} {hǎo}')],
        [T('{shèn}'), T('escrito'), T('antes del adjetivo o del verbo'), T('{shèn} {cháng}')],
        [T('{pō}'), T('escrito'), T('antes del adjetivo'), T('{pō} {wēn}')],
        [T('{jí}'), T('escrito'), T('antes del adjetivo'), T('{jí} {zhòng}')],
      ],
    },
    {
      caption: T('Cuantificadores que dispensed con el numeral'),
      head: [T('Palabra'), T('Significado'), T('Ejemplo')],
      rows: [
        [T('{zhū}'), T('todos los, con plural'), T('{zhū} {tiān} todos los los cielos')],
        [T('{xián}'), T('todos, sin plural'), T('{xián} {wú} {liǎngzhǎng}')],
        [T('{fán}'), T('todo, todo el que'), T('{fán} {yǒu} {xuèqì de rén}')],
        [T('{jiē}'), T('todos; cierra el par con {fán}'), T('{fán} … {jiē}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {心地}, ¿qué está haciendo el {dì}?'),
    options: [
      T('convierte el sustantivo {xīn} en nombre de lugar: "el lugar del corazón"'),
      T('marca el adverbio de modo después del verbo'),
      T('indica que el sustantivo es posesivo'),
      T('marca la negación del verbo'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete con el adverbio de grado del mandarín escrito: 我____想他, lo echo mucho de menos',
      ),
      answer: '甚',
    },
    {
      kind: 'match',
      prompt: T('Relacione el adverbio con lo que es'),
      pairs: [
        { a: T('{shèn}'), b: T('grado, mandarín escrito') },
        { a: T('{wèi}'), b: T('temporal: todavía no') },
        { a: T('{bì}'), b: T('necesidad: seguro') },
        { a: T('{dì}'), b: T('convierte verbo o adjetivo en sustantivo') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('En {萬軍之耶和華充滿全地}, ¿dónde está el adverbio de modo?'),
      options: [
        T('no existe: el verbo {chōngmǎn} ya dice cómo'),
        T('está en {quán}, antes del sustantivo'),
        T('está en {wàn}, antes del numeral'),
        T('está después de {chōngmǎn}'),
      ],
      answer: 0,
    },
  ],
};
