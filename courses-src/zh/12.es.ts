import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  section: T('Sintaxis'),
  title: T('Lugar y localización: {在} (zài)'),
  subtitle: T(
    'Una palabra que va antes del lugar, y el mandarín separa lo que el portugués junta en un verbo solo',
  ),
  body: C(`
## La preposición que abre la frase

{bù} y {méi} van antes del verbo; {le} va después y cierra la frase. **{zài}** entra antes del lugar, y es de la misma familia que las dos: una palabra que se pega a lo que viene justo después y abre su propia expresión. Preposición una, partícula la otra; lo que cambia es el nombre.

{zài} es la preposición de lugar, y su regla es una sola: **viene antes de la palabra que localiza**. {wǒ zài Jiěsù}, "yo estoy en Jerusalén". Sujeto, preposición, lugar. El orden es el mismo del portugués. La mala es que en mandarín {zài} nunca aparece al final: {wǒ zài le Jiěsù} está mal, porque {le} cierra la cláusula y no abre una expresión de lugar. Y {wǒ Jiěsù zài} no es una frase del mandarín en ningún sitio. "Jerusalén está" no existe, ni como pregunta ni como respuesta.

El {le} era un **sufijo**: entraba por la puerta de atrás y se quedaba al final. {zài} es un **prefijo** que abre la expresión de lugar justo después del sujeto. Dos posiciones opuestas, dos papeles distintos.

## Estar en un lugar afirma que eso está ahí

{zài} seguido de una palabra de lugar dice que algo está localizado ahí y, al decirlo, afirma que eso existe. No es un adverbio neutro como el "aquí" del portugués; es una afirmación con contenido.

{Táng zài nàlǐ, shì wǒ de jiā}, "el salón está allí, es mi casa". El **{shì}** de la segunda mitad no sustituye al {zài}: los dos están ahí, cada uno respondiendo a una pregunta distinta, y la frase solo tiene sentido porque el salón está y porque es mío. Cambia uno por otro y deja de funcionar: {Táng shì wǒ de jiā} es "el salón es mi casa", y {Táng zài wǒ de jiā} no significa nada.

Por eso la negación tampoco se cambia. {Táng bù zài nàlǐ} es "el salón no está allí": niega que esté ahí, niega su existencia en ese lugar. Negar la identidad es con otra palabra: {Táng bù shì wǒ de jiā}, "el salón no es mi casa". La {和合本} usa las dos, y nunca confunde una con la otra.

El {zài} puede **omitirse** cuando el lugar es obvio o ya se ha dicho. {wǒ zài Jiěsù}, luego {wǒ zài}, luego {wǒ}: cada paso quita el {zài} y no mueve nada más. Lo que no puede es omitirse cuando el lugar es justamente la información que se quiere dar; ahí el {zài} es la frase.

Para preguntar, el mandarín usa una palabra: {哪里} {nǎlǐ}, "dónde", y la forma hablada {哪儿} {nǎr}, con el mismo sentido. {nǐ zài nǎlǐ?}, "¿dónde estás?", y la pregunta no desbarata el orden: {zài} sigue antes de {nǎlǐ}. Igual que {bù} y {méi}, aquí el mandarín tiene una palabra y el portugués tiene dos, "dónde" y "en qué lugar", y la elección es de registro, no de sentido.

## El mismo {zài}, ahora antes del verbo

El segundo empleo de {zài} es el más cotidiano, y usa la misma palabra en la misma posición: antes de aquello que rige. Lo que cambia es lo que viene después.

{zài} + palabra de lugar = localización. {zài} + verbo = acción en curso: {wǒ zài chī fàn}, "estoy comiendo". Una palabra, dos empleos, posición idéntica en los dos: {zài} abre, y lo que viene después es el contenido.

El contraste con el {le} vale la pena. {wǒ chī fàn le} es "comí", un suceso cerrado. {wǒ zài chī fàn} es el mismo verbo sin el {le}, con el {zài} delante: la misma acción, ahora abierta y en marcha. Y {wǒ zài chī fàn le} junta las dos, "estuve comiendo", con el {le} diciendo por fin que aquello acabó. Sin el {zài}, el mandarín no tiene manera de decir "estoy comiendo" en la forma simple: o dices {wǒ chī fàn}, "yo como", hábito o futuro, o añades el {zài}.

## Ser una cosa y estar en un lugar

Aquí está el gancho, y nace de una traducción. En portugués, "ele é professor" y "ele está em casa" usan el mismo verbo, con una preposición de diferencia: *ser* y *estar*. Quien habla portugués no siente que sean dos preguntas distintas; es la misma pregunta, respondida de dos maneras.

El mandarín sí lo siente, y por eso separa. Son dos palabras, y elegir entre ellas es el trabajo:

- {shì} responde *¿qué es él?*: identidad, categoría, papel. {tā shì lǎoshī}, "él es profesor".
- {zài} responde *¿dónde está?*: localización. {tā zài jiā}, "está en casa".

La regla de bolsillo: si la pregunta es "qué", es {shì}; si es "dónde", es {zài}; y si el sustantivo es un lugar, es {zài} sin dudar. El error del hablante de portugués es invertir las dos, {tā shì nǎlǐ?} y {tā zài lǎoshī}, frases que nadie dice y que suenan correctas justamente porque en portugués la palabra "estar" aparece de las dos formas.

El mismo contraste aparece en el par de preguntas fijas: {nǐ shì shénme rén?}, "¿qué eres tú?", y {nǐ zài shénme dìfang?}, "¿en qué lugar estás?". Misma palabra {shénme}, y toda la diferencia está en el {shì} y en el {zài}.

La {和合本} muestra la mano en los dos versículos. En el Salmo 139:2, {nǐ zhīdào wǒ zuò zài nǎlǐ}, "sabes dónde me siento": el verbo {zuò} viene primero, y el {zài} entra inmediatamente antes de la palabra de lugar, {nǎlǐ}. En Génesis 1:2, {dì zài shuǐmiàn shàng}, "la tierra estaba sobre las aguas": el mismo {zài}, esta vez sosteniendo "sobre las aguas", una expresión de lugar que ni siquiera es nombre propio. Dos traducciones, la misma preposición, la misma casa.`),
  vocab: [
    V('zài', '在', 'estar en; estar haciendo (zài)'),
    V('shì', '是', 'ser (shì)'),
    V('nǎlǐ', '哪里', 'dónde (nǎlǐ)'),
    V('nǎr', '哪儿', 'dónde (nǎr) — forma hablada'),
    V('dìfang', '地方', 'lugar (dìfang)'),
    V('jiā', '家', 'casa (jiā)'),
    V('zhīdào', '知道', 'saber (zhīdào)'),
    V('zuò', '坐', 'sentarse (zuò)'),
    V('chī', '吃', 'comer (chī)'),
  ],
  rules: [
    {
      n: '1',
      text: T('{zài} va ANTES de la palabra de lugar: {wǒ zài Jiěsù}. Nunca al final de la frase.'),
    },
    {
      n: '2',
      text: T(
        '{zài} + lugar afirma que eso está ahí — por eso se niega con {bù}: {Táng bù zài nàlǐ}.',
      ),
    },
    { n: '3', text: T('{zài} + verbo marca acción en curso: {wǒ zài chī fàn}, "estoy comiendo".') },
    {
      n: '4',
      text: T('La pregunta "¿qué es él?" pide {shì}; "¿dónde está?" pide {zài}. Nunca cambiadas.'),
    },
    {
      n: '5',
      text: T(
        'El {zài} puede faltar cuando el lugar es obvio o ya se ha dicho; nada más en la frase se mueve.',
      ),
    },
  ],
  notes: [
    {
      label: T('El mandarín no tiene tu verbo solo'),
      text: T(
        'El portugués resuelve "ser" y "estar" con un verbo y una preposición de diferencia. El mandarín tiene dos palabras, y {shì} nunca acepta una palabra de lugar: {tā shì jiā} no existe. Si la frase pregunta dónde, {zài} no es opcional.',
      ),
    },
    {
      label: T('Dónde queda el {zài} cuando desaparece'),
      text: T(
        '{zài} es la única preposición de lugar de la lengua, y por eso es la palabra que más se omite. La omisión nunca cambia la construcción: solo se va el {zài}, y el lugar sigue en el mismo sitio de la frase. Y {zài} + verbo casi nunca se omite — "estoy comiendo" sin {zài} no existe.',
      ),
    },
  ],
  examples: [
    { text: '我在耶路撒冷', gloss: T('wǒ zài Yēlùsālěng — estoy en Jerusalén') },
    { text: '他在家', gloss: T('tā zài jiā — está en casa') },
    { text: '我在吃饭', gloss: T('wǒ zài chī fàn — estoy comiendo') },
    { text: '你知道我坐在哪里', gloss: T('nǐ zhīdào wǒ zuò zài nǎlǐ — sabes dónde me siento') },
  ],
  tables: [
    {
      caption: T('Tres preguntas, tres construcciones'),
      head: [T('Pregunta'), T('Construcción'), T('Ejemplo')],
      rows: [
        [T('¿Qué es él?'), T('{shì}'), T('{tā shì lǎoshī} — él es profesor')],
        [T('¿Dónde está?'), T('{zài} + lugar'), T('{tā zài jiā} — está en casa')],
        [T('¿Qué está haciendo?'), T('{zài} + verbo'), T('{tā zài chī fàn} — está comiendo')],
        [T('¿Dónde estoy?'), T('{zài} + {nǎlǐ}'), T('{wǒ zài nǎlǐ} — dónde estoy')],
      ],
    },
    {
      caption: T('Dónde se puede omitir el {zài}'),
      head: [T('Frase'), T('Qué quedó fuera')],
      rows: [
        [T('{wǒ zài Jiěsù}'), T('nada: el lugar es la información')],
        [T('{wǒ zài}'), T('la palabra de lugar, ya dicha antes')],
        [T('{wǒ}'), T('también el {zài}, si el lugar es obvio')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {你知道我坐在哪里}, ¿qué hace la construcción {在哪里}?'),
    options: [
      T('indica el lugar, inmediatamente antes de la palabra de lugar'),
      T('identifica lo que soy yo'),
      T('marca el tiempo pasado'),
      T('liga la posesión a mí'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Completa "estoy en Jerusalén" — la preposición va antes del lugar: 我____耶路撒冷',
      ),
      answer: '在',
    },
    {
      kind: 'match',
      prompt: T('Une la frase con la pregunta que responde'),
      pairs: [
        { a: T('{tā shì lǎoshī}'), b: T('¿Qué es él?') },
        { a: T('{tā zài jiā}'), b: T('¿Dónde está?') },
        { a: T('{tā zài chī fàn}'), b: T('¿Qué está haciendo?') },
        { a: T('{tā bù shì lǎoshī}'), b: T('¿Qué no es él?') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál de las frases dice "está en casa"?'),
      options: [T('{tā shì jiā}'), T('{tā zài jiā}'), T('{tā zài shì jiā}'), T('{tā zài nǎlǐ}')],
      answer: 1,
    },
  ],
};
