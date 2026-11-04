import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  section: T('El verbo: tiempo, modo y negación'),
  title: T('Tiempo y modo: lo que hace la partícula бы'),
  subtitle: T('escribiría, quisiera, si estuviera: una sola palabra, tres modos'),
  body: C(`
## Tres tiempos, y el pasado no tiene persona

El presente ruso tiene seis personas y dos modelos de conjugación, y la elección entre ellos la hace el tema del verbo, no el tiempo. Читаю, читаешь, читает junto a говорю, говоришь, говорит. Quien haya visto el latín reconoce la estructura: la primera y la segunda conjugación, con la tercera apareciendo sólo en unos pocos verbos.

El pasado se parece a poco de lo que hace el portugués. **El pasado ruso no tiene persona.** Tiene género y número, y nada más. Он читал, она читала, оно читало, они читали. Él leía, ella leía, ello leía, ellos leían: el sujeto sólo aparece en la forma del sustantivo, y el verbo no sabe quién lo hizo.

La consecuencia es que el pasado no dice quién obró, y por eso el contexto ruso trae siempre un pronombre, un sustantivo o una marca de persona de otro modo. Я читал y Он читал son la misma palabra, y la diferencia está en quién es el sujeto en la frase.

El tiempo verbal aparece en la terminación, y la terminación cero es el masculino singular. Por eso был es a la vez "él fue" y, en un contexto neutro, una forma sin información de género.

## Dos maneras de decir el futuro

El futuro perfecto no existe como tiempo. Se hace de dos maneras, y la elección entre ellas es el aspecto.

La primera usa el presente perfectivo: Я напишу письмо es lo que voy a escribir, y la acción ocurrirá una vez. La segunda usa el imperfectivo con el verbo ser: Я буду писать письмо, y es lo que voy a estar haciendo. Las dos frases dicen futuro, y la diferencia entre ellas es la misma que existe en el pasado.

Hay además una tercera forma, que no es futuro sino obligación: Я должен писать y, con la partícula, Мне писать. La primera usa un adjetivo, y la segunda aparece después de verbos de obligación y de necesidad. Quien traduce necesita saber cuál de las dos está en el original, porque Я должен писать puede ser una obligación o una constatación sobre lo que alguien va a hacer.

## La partícula que lo hace todo

**Бы es una partícula, no un tiempo ni un modo.** No se flexiona, no tiene plural y no cambia con la persona. Y hace tres cosas que en portugués necesitarían palabras distintas.

La primera es el condicional atenuado: Я бы написал, yo escribiría, y la frase entera puede significar un deseo cortés o una oferta. La segunda es el optativo de deseo: Хотел бы я, yo quisiera. La tercera es el condicional real, y ésa tiene una regla que sorprende a la gente.

En esa regla, **cuando el si lleva un бы, la oración principal también lo lleva**, y así es como el ruso marca lo irreal frente a lo real. Если бы он был дома, он бы позвонил es lo irreal: dos бы, y el verbo en pasado. La forma con бы sólo en la subordinada es más común en el habla, y la forma sin ningún бы es la que se aprende primero.

La regla práctica para el lector es esta: **бы nunca aparece en el indicativo.** Si un бы aparece en la frase, alguien está suponiendo algo, y el tiempo verbal ha dejado de ser la información principal. Quien traduce indicando sólo el tiempo pierde la información.

## El gancho: una afirmación sin hipótesis

**В Нем была жизнь, и жизнь была свет человеков.** Dos cláusulas, el mismo verbo dos veces, y el tiempo es el pasado en las dos: была, femenino singular, concertando con жизнь.

Quien escribe Juan no usa ninguna hipótesis. No hay бы, no hay пусть, no hay чтобы, y el verbo en pasado afirma un hecho, no una posibilidad. La afirmación más fuerte de la lengua está hecha con el tiempo que no tiene futuro.

Y lo mismo vale en Juan 14:6, donde la primera persona del verbo ser aparece en una forma arcaica: Я есмь путь и истина и жизнь. El есмь ha sobrevivido sólo en el registro bíblico y litúrgico; en el ruso corriente la primera persona de ser es я sin verbo, y por eso esta frase suena vieja aunque el lector no note por qué.

El contraste que importa es el de una frase hipotética sobre el mismo asunto: Если бы я был путём, я бы вёл к Отцу es gramatical, es inteligible y es otra cosa. Una frase con бы es una frase que supone. Una frase sin бы es una frase que afirma. Juan 1:4 y Juan 14:6 están del segundo lado.
`),
  vocab: [
    V('читал', 'читать', 'leía; pasado masculino'),
    V('читала', 'читать', 'leía; pasado femenino'),
    V('читали', 'читать', 'leían; pasado plural'),
    V('была', 'быть', 'era; pasado femenino'),
    V('буду писать', 'быть', 'voy a estar escribiendo; futuro imperfectivo'),
    V('напишу', 'написать', 'voy a escribir; futuro perfectivo'),
    V('должен', 'должен', 'debe; adjetivo de obligación'),
    V('Мне писать', 'писать', 'tengo que escribir; infinitivo personal'),
    V('бы', 'бы', 'partícula del condicional y del optativo'),
    V('Если бы', 'если', 'si; con бы en el condicional irreal'),
    V('Я бы написал', 'написать', 'yo escribiría; condicional atenuado'),
    V('Хотел бы я', 'хотеть', 'yo quisiera; optativo de deseo'),
    V('Я есмь', 'быть', 'yo soy; forma arcaica de la primera persona'),
    V('пусть', 'пусть', 'sea; partícula de deseo en la tercera persona'),
    V('да будет', 'быть', 'sea; optativo litúrgico'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En Если бы он был дома, он бы позвонил, ¿cuántas veces aparece бы?'),
    options: [T('Una'), T('Dos'), T('Tres')],
    answer: 1,
    hint: T(
      'Cuando el si lleva un бы, la oración principal también lo lleva. Esa duplicación marca el condicional irreal.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: Я ___ написал (yo escribiría)'), answer: 'бы' },
    {
      kind: 'choose',
      prompt: T('El pasado ruso distingue...'),
      options: [T('la persona del sujeto'), T('el género y el número'), T('el aspecto')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete el futuro perfectivo: Я ___ письмо'), answer: 'напишу' },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El pasado ruso no tiene persona: tiene género y número, y la terminación cero es el masculino singular.',
      ),
    },
    {
      n: '2',
      text: T(
        'No hay tiempo futuro perfecto: es el presente perfectivo ({напишу}) o el imperfectivo con ser ({буду писать}).',
      ),
    },
    {
      n: '3',
      text: T(
        'Después de la partícula de obligación aparece un infinitivo sin preposición: {Я} {должен} {писать}, {Мне} {писать}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Бы} es una partícula, y hace tres cosas: condicional atenuado, optativo de deseo y condicional irreal.',
      ),
    },
    {
      n: '5',
      text: T(
        'Cuando el si lleva un {бы}, la oración principal también lo lleva; y {бы} nunca aparece en el indicativo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por qué el pasado necesita pronombre'),
      text: T(
        'Como el pasado no tiene persona, Я читал y Он читал son la misma palabra. Quien escribe en ruso compensa la falta de información en el verbo con un pronombre o un sustantivo, y por eso un texto ruso lleva más pronombres que el griego en el mismo punto. Eso no es estilo: es la única información que el verbo no da.',
      ),
    },
    {
      label: T('La frontera entre afirmar y suponer'),
      text: T(
        'Un бы en la frase significa que alguien está suponiendo algo, y su posición importa: va después del verbo al que se refiere. Una frase con бы es hipotética por definición, aunque el verbo esté en presente. Juan 1:4 y Juan 14:6 son lo exactamente contrario: ninguna partícula, ningún modo, y un verbo en pasado que afirma un hecho que el texto no abre a hipótesis.',
      ),
    },
  ],
  examples: [
    { text: 'Он читал', gloss: T('él leía; pasado, sin persona') },
    { text: 'Она читала', gloss: T('ella leía; pasado femenino') },
    { text: 'Они читали', gloss: T('ellos leían; pasado plural') },
    { text: 'Я буду писать', gloss: T('voy a estar escribiendo; futuro imperfectivo') },
    { text: 'Я напишу письмо', gloss: T('voy a escribir la carta; futuro perfectivo') },
    { text: 'Я должен писать', gloss: T('yo debo escribir; obligación con adjetivo') },
    { text: 'Мне писать', gloss: T('yo tengo que escribir; infinitivo sin preposición') },
    {
      text: 'Если бы он был дома, он бы позвонил',
      gloss: T('si hubiera estado en casa, habría llamado; condicional irreal'),
    },
    { text: 'Я бы написал', gloss: T('yo escribiría; condicional atenuado') },
    {
      text: 'В Нем была жизнь, и жизнь была свет человеков',
      gloss: T('en él había vida, y la vida era luz para los hombres (Jn 1:4)'),
    },
  ],
  tables: [
    {
      caption: T('Los tres tiempos con un par de ejemplo'),
      head: [T('Tiempo'), T('Imperfectivo'), T('Perfectivo'), T('Lo que sabe la persona')],
      rows: [
        [
          T('presente'),
          T('читаю, читаешь, читает'),
          T('напишу, напишешь, напишет'),
          T('quién lo hace, por el verbo'),
        ],
        [
          T('pasado'),
          T('читал, читала, читало, читали'),
          T('написал, написала'),
          T('género y número, no persona'),
        ],
        [T('futuro'), T('буду писать'), T('напишу'), T('la misma distinción que el presente')],
      ],
    },
    {
      caption: T('Los tres usos de бы'),
      head: [T('Uso'), T('Ejemplo'), T('Qué significa'), T('Tiempo del verbo')],
      rows: [
        [
          T('condicional atenuado'),
          T('Я бы написал'),
          T('yo escribiría, por cortesía o deseo'),
          T('pasado'),
        ],
        [T('optativo de deseo'), T('Хотел бы я'), T('yo quisiera'), T('pasado')],
        [
          T('condicional irreal'),
          T('Если бы он был дома, он бы позвонил'),
          T('si hubiera estado en casa'),
          T('pasado'),
        ],
      ],
    },
    {
      caption: T('Las maneras de hablar, y dónde aparece бы'),
      head: [T('Forma'), T('Ejemplo'), T('Qué marca')],
      rows: [
        [T('indicativo'), T('Он читает'), T('un hecho o un hábito')],
        [
          T('deseo en la tercera persona'),
          T('Пусть будет свет'),
          T('una orden o un deseo de fuera'),
        ],
        [
          T('optativo litúrgico'),
          T('Да святится имя Твое'),
          T('un deseo en la primera y en la segunda'),
        ],
        [T('subordinada final'), T('Чтобы ты веровал'), T('finalidad, o contenido de un deseo')],
        [T('condicional'), T('Если бы я был богом'), T('suposición, y siempre con бы')],
      ],
    },
  ],
};
