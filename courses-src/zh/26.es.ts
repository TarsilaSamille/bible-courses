import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  section: T('Sintaxis'),
  title: T('Coordinación pesada: {而}, {雖}…{也} y los conectivos de una sílaba'),
  subtitle: T(
    'El mandarín coordina oraciones enteras con media docena de palabras, y casi todas necesitan una segunda mitad',
  ),
  body: C(`
## Qué coordina de verdad una conjunción

El portugués tiene una palabra para cada relación entre oraciones: y, pero, porque, por lo tanto, aunque. El mandarín tiene media docena en el texto escrito y ninguna en el habla. Y la que tiene no coordina oraciones: coordina verbos. {ér} es el operador de la coordinación pesada, y lo que coordina es el predicado.

En {tā ér wǒ}, "él y yo", el {ér} está entre dos sintagmas nominales y no hay ningún verbo en la frase. Es la prueba de que la coordinación en mandarín no pasa por la oración. En {tā lái ér wǒ qù}, "él viene y yo voy", el mismo {ér} coordina dos verbos, y el sujeto aparece una sola vez, al principio. Quien traduce del portugués escribe "él viene, y yo voy", con el sujeto repetido, y produce el habla de un niño.

La restricción viene de la lección sobre verbos en serie: cuando los verbos forman una cadena con un solo sentido, el {ér} no entra. {wǒ lái kàn nǐ} no lleva {ér}, porque el orden ya dice que la segunda acción está al servicio de la primera. El {ér} entra cuando el orden no basta.

**El {ér} va después del primer verbo, o después del adverbio, y antes del segundo.**

## Un mismo carácter, tres lecturas

El {ér} es uno solo y lo que viene después decide cómo se lee. {zǒu ér hūr} es "sale y grita"; {zǒu ér bù hūr} es "sale y no grita"; {zǒu ér hūr de gèng lóng} es "sale y grita todavía más". Son tres frases, una palabra, y el mandarín no pone nada entre el {ér} y el verbo para avisar cuál de las tres se está leyendo. Quien traduce del portugués busca una conjunción distinta para cada frase y encuentra siempre la misma.

Lo que cambia en cada par es el resto de la oración. El contraste viene acompañado de {bù}, de {què} o de un adjetivo opuesto. La secuencia viene de otro verbo sin negación. La progresión viene de {gèng}, "aún más", o de un adjetivo más fuerte. Un par ayuda a decidir: {ér} con {què} es siempre contraste, {ér} con {yě} es siempre secuencia.

El caso que atasca a quien empieza es el {ér} que no tiene segundo verbo alguno. {gānxīn ér tīng}, {zǐxì ér kàn}, {bēi ér xíng}: en los tres hay un adverbio, el {ér}, y un solo verbo. El mandarín usa el mismo {ér} para ligar adverbio con verbo, y quien busca una segunda oración detrás no la encuentra, y concluye que leyó mal. No leyó mal: {bēi ér xíng} escrito {步行} es una palabra sola, y el {ér} está ahí porque la forma escrita de la palabra antigua conserva la marca.

## La concesión y la mitad que falta

La concesión admite un hecho para negar la conclusión que ese hecho produciría. El mandarín lo hace con un par, y el texto antiguo tiene dos miembros para la misma idea: {suī} solo, que espera {què} del otro lado, y {suīrán}, que lleva el par entero dentro de sí y sale con {yě} o con {què} en el cierre.

La diferencia entre los dos no es de grado, es de estructura — uno trae la segunda mitad consigo, el otro deja la segunda mitad al contexto. Quien lea encontrará los dos en la misma página, y la elección dice el registro del texto, no su sentido. {suīrán} es la forma de las traducciones modernas y de las epístolas; {suī} solo es la del mandarín escrito, y es la que aparece en los libros poéticos.

**{suī} nunca viene solo: {què} o {yě} espera del otro lado.**

El par tiene además forma fija, y el cierre cambia el sentido sin cambiar la concesión. {suīrán … {yě}} admite el hecho y mantiene la conclusión, "aunque, y aun así"; {suīrán … {què}} admite el hecho y corta la conclusión, "aunque, pero no". Entre los dos lo que cambia es la fuerza, no la estructura.

## Conectivos de una sílaba, y la segunda mitad

Los que quedan son pocos, y casi todos aparecen con un cierre que es lo que carga el sentido.

- {qiě}: "y", "y también": añade, y nunca introduce contraste. El par esperado es {érqiě}, "y aún más", que ya se ha convertido en una palabra sola.
- {nǎi}: "entonces", "luego". Después de una negativa como {fēi}, el sentido cambia y pasa a ser "si no".
- {gù}: "por tanto": mandarín escrito, hermano de {suǒyǐ}, que es la forma hablada del mismo par.
- {ruò}: "si", y trae el cierre {zé}: {ruò} {bù} {zhǔ} {shíhou} {zé} {shàng}, "si la cena no está lista, entonces".
- {fán}: "todo", y cierra con {jiē}: {fán} {yǒu} {xuèqì de rén} {jiē} {shò}, "toda persona de carne y hueso".
- {qǐ}: "cómo", solo en pregunta retórica, y nunca pide respuesta.

**Después de una negativa, {nǎi} significa "si no", no "entonces".**

El gancho está en el Nuevo Testamento, y usa el par de dos maneras. Juan 11:25 trae la forma completa: {suīrán sǐ le, yě bì fùhuó}, "aunque ha muerto, resucitará". Juan 6:38 trae el otro par: {bú shì yào zhào zìjǐ de yìsi xíng, nǎi shì yào zūn xíng chāi wǒ lái zhě de yìsi}, "no para hacer mi voluntad, sino la del que me envió". Y la coordinación más dura del mismo libro no lleva ninguna marca: Juan 1:5, {guāng zhào zài hēi àn lǐ, hēi àn jiù bù lǐngshòu guāng}, escribe "la luz brilla en las tinieblas, y las tinieblas no la recibieron" sin partícula, sin conjunción y sin coma que el portugués no tendría. El contraste está entero en la segunda mitad de la frase, y quien busca {ér} después de {lǐ} no lo encuentra.`),
  vocab: [
    V('ér', '而', 'y, pero; el operador de la coordinación pesada (ér)'),
    V('suī', '虽', 'aunque; abre par y espera què (suī)'),
    V('suīrán', '虽然', 'aunque; el par entero en una sola palabra (suīrán)'),
    V('què', '却', 'pero; el cierre de la adversativa (què)'),
    V('yě', '也', 'también; el cierre de la concesión y de la secuencia (yě)'),
    V('qiě', '且', 'y, y también; nunca introduce contraste (qiě)'),
    V('nǎi', '乃', 'entonces; si no, después de una negativa (nǎi)'),
    V('gù', '故', 'por tanto; mandarín escrito, hermano de suǒyǐ (gù)'),
    V('ruò', '若', 'si; trae el cierre zé (ruò)'),
    V('zé', '则', 'entonces; el cierre de 若 y de la adversativa (zé)'),
    V('fán', '凡', 'todo, todo el que; abre par con jiē (fán)'),
    V('jiē', '皆', 'todos; cierra el par con fán (jiē)'),
    V('gèng', '更', 'aún más; grado progresivo (gèng)'),
    V('érqiě', '而且', 'y aún más: el par de ér fundido en una palabra (érqiě)'),
    V('qǐ', '岂', 'cómo; solo en pregunta retórica (qǐ)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{ér} coordina verbos entre sí, o adverbios con verbos, y va detrás del primer miembro: {tā lái ér wǒ qù}.',
      ),
    },
    {
      n: '2',
      text: T(
        'El sentido de {ér} viene de lo que lo sigue: contraste, secuencia o progresión. La forma es la misma en los tres.',
      ),
    },
    { n: '3', text: T('{suī} nunca aparece solo: {què} o {yě} espera del otro lado.') },
    {
      n: '4',
      text: T(
        '{ér} no entra en una serie de verbos con un solo sentido: {wǒ lái kàn nǐ} se queda sin él.',
      ),
    },
    { n: '5', text: T('Después de una negativa, {nǎi} significa "si no": {bú shì …, nǎi shì …}.') },
  ],
  notes: [
    {
      label: T('El {ér} que no coordina oraciones'),
      text: T(
        '{bēi ér xíng} tiene un adverbio, el {ér} y un verbo, y ninguna segunda oración. La misma pieza liga el adverbio con el verbo y el verbo con el verbo. Quien busca una oración detrás del {ér} en todas partes no entiende ni la coordinante ni esta, y concluye que leyó mal cuando el texto estaba bien.',
      ),
    },
    {
      label: T('La concesión admite, no niega'),
      text: T(
        '{suīrán} … {yě} dice que el hecho es cierto y que la conclusión también. Lo que el mandarín no hace es negar el hecho: la negación, cuando el hecho es justamente lo que se concede, es una negativa común, {bù} o {méi}, dentro de la segunda mitad. Quien traduce por "aunque no fuera cierto" ha puesto el no en el sitio equivocado y ha borrado el hecho admitido.',
      ),
    },
  ],
  examples: [
    {
      text: '雖然死了，也必復活',
      gloss: T('suīrán sǐ le, yě bì fùhuó — aunque ha muerto, resucitará (Juan 11:25)'),
    },
    {
      text: '不是要照自己的意思行，乃是要遵行差我來者的意思',
      gloss: T(
        'bú shì yào zhào zìjǐ de yìsi xíng, nǎi shì yào zūn xíng chāi wǒ lái zhě de yìsi — no para hacer mi voluntad, sino la del que me envió (Juan 6:38)',
      ),
    },
    {
      text: '光照在黑暗裏，黑暗就不領受光',
      gloss: T(
        'guāng zhào zài hēi àn lǐ, hēi àn jiù bù lǐngshòu guāng — la luz brilla en las tinieblas, y las tinieblas no la recibieron (Juan 1:5)',
      ),
    },
    {
      text: '學而不思則罔，思而不學則殆',
      gloss: T(
        'xué ér bù sī zé wǎng, sī ér bù xué zé dài — aprender sin pensar es estar perdido (Anal. 2:15)',
      ),
    },
    {
      text: '專心而聽',
      gloss: T('gānxīn ér tīng — escuchar con atención: un adverbio, {ér} y un solo verbo'),
    },
    {
      text: '步行',
      gloss: T('bùxíng — ir a pie; {bēi ér xíng} escrito {步行} es una palabra sola'),
    },
    {
      text: '人不知而不慍',
      gloss: T('rén bù zhī ér bù yùn — no irritarse con quien no entiende (Anal. 2:2)'),
    },
  ],
  tables: [
    {
      caption: T('El mismo {ér}, tres lecturas'),
      head: [T('Lectura'), T('Lo que sigue'), T('Ejemplo'), T('Glosa')],
      rows: [
        [T('secuencia'), T('un verbo, sin negación'), T('{zǒu ér hūr}'), T('sale y grita')],
        [
          T('contraste'),
          T('un verbo con {bù} o {què}'),
          T('{zǒu ér bù hūr}'),
          T('sale y no grita'),
        ],
        [
          T('progresión'),
          T('un adjetivo más fuerte, o {gèng}'),
          T('{zǒu ér hūr gèng lóng}'),
          T('sale y grita todavía más'),
        ],
        [
          T('adverbio'),
          T('un adverbio y un verbo, sin segundo verbo'),
          T('{gānxīn ér tīng}'),
          T('escucha con atención'),
        ],
      ],
    },
    {
      caption: T('Pares fijos: la apertura nunca viene sola'),
      head: [T('Apertura'), T('Cierre'), T('Sentido'), T('Ejemplo')],
      rows: [
        [T('{suīrán}'), T('{yě}'), T('aunque, y aun así'), T('{suīrán sǐ le, yě bì fùhuó}')],
        [T('{suīrán}'), T('{què}'), T('aunque, pero no'), T('{suīrán shì zhī shì, què bù zhēn}')],
        [T('{suī}'), T('{què}'), T('aunque, pero'), T('{suī shì zhī shì, què bù rú suǒ yù}')],
        [T('{ruò}'), T('{zé}'), T('si, entonces'), T('{ruò bù zhǔ shíhou, zé shàng}')],
        [T('{fán}'), T('{jiē}'), T('todo, todo'), T('{fán yǒu xuèqì de rén}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {信我的人，雖然死了，也必復活}, ¿qué está haciendo el {yě}?'),
    options: [
      T('cierra el par que abrió {suīrán}: el hecho se admite y la conclusión se mantiene'),
      T('marca contraste con lo anterior'),
      T('indica que el hablante no sabía lo que iba a pasar'),
      T('niega el verbo {fùhuó}'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete la frase de Juan 11:25: 信我的人，____死了，也必復活'),
      answer: '雖然',
    },
    {
      kind: 'match',
      prompt: T('Relacione la apertura con lo que significa el par entero'),
      pairs: [
        { a: T('{suīrán … yě}'), b: T('aunque, y aun así') },
        { a: T('{suīrán … què}'), b: T('aunque, pero no') },
        { a: T('{ruò … zé}'), b: T('si, entonces') },
        { a: T('{fán … jiē}'), b: T('todo, todo') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('En {專心而聽}, ¿cuántos verbos hay?'),
      options: [
        T('dos: uno en el {ér} y otro después'),
        T('uno: el {ér} liga el adverbio con el verbo'),
        T('tres: adverbio, {ér} y verbo cuentan como verbos'),
        T('ninguno: {gānxīn} es el verbo'),
      ],
      answer: 1,
    },
  ],
};
