import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  section: T('Los casos'),
  title: T('Los seis casos y quién los gobierna'),
  subtitle: T(
    'cada caso lo elige un verbo, una preposición o una cuenta, nunca el sentido del sustantivo',
  ),
  body: C(`
## El caso es una relación, y la relación tiene dueño

El caso ruso no traduce una preposición ni un sentido: marca la función que la palabra cumple dentro de una relación, y esa relación viene siempre de algún lado. De un verbo, de una preposición, de una negación o de una cuenta. El sustantivo no elige su propio caso.

Por eso la pregunta útil no es qué significa este caso, sino **quién lo manda**. El genitivo es el que aparece después de нет, de у, de от, de до, de dos, de muchos. El dativo es el que aparece después de помогать, радоваться, молиться. El instrumental es el que aparece después de ser cuando se dice lo que alguien es, y después de заниматься, интересоваться. El prepositivo no aparece solo: sólo después de una preposición, y por eso es el único caso que usted nunca verá sin compañía.

Decir que el genitivo es posesión y el dativo es destinatario describe el efecto. Decir que el genitivo es el caso de нет y el dativo es el caso de помогать describe la máquina, y la máquina es lo que hace falta para leer.

## Lo que cada caso no puede hacer

La parte que traba la lectura no es lo que el caso hace, es lo que no puede hacer.

El genitivo no puede ser sujeto ni objeto directo. En ruso nada que sea el foco de la frase aparece en genitivo: si usted quiere decir quién lo hizo, es nominativo; si quiere decir qué se hizo, es acusativo. El genitivo es siempre dependencia.

El instrumental no puede ocupar la posición de sujeto, y no es lo que un verbo recibe como objeto directo. Aparece como medio, como compañía, como ocupación y como predicativo de profesión: Он врач, él es médico, y Он был врачом, él fue médico. El paso de uno a otro es el paso del presente al pasado, y el caso forma parte de ese paso.

El dativo es el más estrecho de todos. No hay verbo portugués que pida dativo, y la lista de los que lo piden es corta y hay que aprendérsela. Todo lo que en portugués es a alguien no es necesariamente dativo en ruso: si el verbo es dar, el objeto es acusativo, y el destinatario es lo que puede ir al dativo.

El prepositivo es el único que no puede aparecer solo. No existe frase con о слове sin una preposición que lo rija, y por eso es el caso más fácil: usted sólo necesita el par.

## Cuando dos formas coinciden

El costo del sistema es que dos formas pueden ser idénticas, y entonces la terminación no dice nada. En el masculino singular animado, Бога es genitivo y es acusativo. La preposición на es prepositiva con sentido estático y acusativa con sentido de dirección.

La salida es buscar el verbo. Si el verbo es transitivo y la palabra responde qué, es acusativo. Si responde de quién o de qué, es genitivo. Si responde a quién, es dativo. El sustantivo es el mismo en las tres frases, y el verbo es lo que cambia el caso.

## El gancho: Juan 1:1 tiene tres de los seis casos

**В начале было Слово, и Слово было у Бога, и Слово было Бог.** Una frase con los tres casos principales, y cada uno marcado por un elemento distinto. В начале es prepositivo, porque в rige el prepositivo y начало se declina al caso. У Бога es genitivo, porque у rige el genitivo y significa junto con. Слово aparece dos veces como nominativo, una como sujeto y otra como predicativo después de fue.

Y la segunda cláusula es la más informativa. **Слово было к Богу.** Aquí aparece el dativo, el caso más estrecho de la lengua, y aparece porque к es una de las pocas preposiciones que lo rige. Si el traductor hubiera escrito Слово было у Бога, el versículo diría otra cosa: junto de Dios, y no hacia Dios.

El caso que no aparece es el acusativo, y la ausencia es igualmente informativa. Nada se le hizo a la Palabra en este versículo: la Palabra es el sujeto de todas las cláusulas, y sujeto en ruso es nominativo. Aquello sobre lo que recae el verbo es lo que va al acusativo, y aquí no hay nadie.
`),
  vocab: [
    V('нет', 'нет', 'no hay; rige el genitivo'),
    V('у', 'у', 'junto de; rige el genitivo'),
    V('от', 'от', 'de, a partir de; rige el genitivo'),
    V('до', 'до', 'hasta; rige el genitivo'),
    V('к', 'к', 'a, hacia; rige el dativo'),
    V('о', 'о', 'sobre; rige el prepositivo'),
    V('о слове', 'слово', 'sobre la palabra; caso prepositivo'),
    V('помогать', 'помогать', 'ayudar; rige el dativo'),
    V('молиться', 'молиться', 'orar; rige el dativo'),
    V('заниматься', 'заниматься', 'ocuparse; rige el instrumental'),
    V('врачом', 'врач', 'médico; instrumental'),
    V('у Бога', 'бог', 'junto de Dios; genitivo'),
    V('к Богу', 'бог', 'a Dios; dativo'),
    V('в начале', 'начало', 'en el principio; prepositivo'),
    V('Слово', 'слово', 'la Palabra; nominativo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En Слово было к Богу, ¿qué caso es Богу?'),
    options: [T('Genitivo'), T('Dativo'), T('Prepositivo')],
    answer: 1,
    hint: T('La preposición к rige el dativo. Con у sería genitivo, y con о prepositivo.'),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: нет ___ (no hay pan)'), answer: 'хлеба' },
    {
      kind: 'choose',
      prompt: T('¿Qué caso rige помогать?'),
      options: [T('Genitivo'), T('Dativo'), T('Instrumental')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: Он был ___ (él fue médico)'), answer: 'врачом' },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El caso lo elige el verbo, la preposición o la cuenta, nunca el sentido del sustantivo.',
      ),
    },
    {
      n: '2',
      text: T('El genitivo no puede ser sujeto ni objeto directo: es siempre dependencia.'),
    },
    {
      n: '3',
      text: T(
        'El dativo es el más estrecho: sólo lo piden los verbos que lo piden, y la lista hay que aprendérsela.',
      ),
    },
    {
      n: '4',
      text: T(
        'El instrumental no puede ocupar la posición de sujeto: aparece como medio, compañía, ocupación y predicativo.',
      ),
    },
    {
      n: '5',
      text: T('El prepositivo nunca aparece solo, y por eso es el caso más fácil de leer.'),
    },
  ],
  notes: [
    {
      label: T('El caso es del verbo, no de la cosa'),
      text: T(
        'La misma preposición rige casos distintos según el sentido: в начале es prepositivo y в храм es acusativo. Lo mismo aparece con verbos distintos: dar pide acusativo para la cosa, y el destinatario va al dativo, mientras помогать pide dativo directo. El sustantivo es el mismo; quien manda es el verbo.',
      ),
    },
    {
      label: T('Cuando la terminación no dice'),
      text: T(
        'En el masculino singular animado, genitivo y acusativo tienen la misma forma: Бога. Ninguna terminación lo resuelve, y no existe otro recurso que el verbo. Por eso la lectura de un caso en ruso empieza siempre por el verbo y nunca por el sustantivo.',
      ),
    },
  ],
  examples: [
    {
      text: 'В начале было Слово',
      gloss: T('en el principio era la Palabra; В начале es prepositivo'),
    },
    { text: 'Слово было у Бога', gloss: T('la Palabra estaba junto de Dios; у rige el genitivo') },
    { text: 'Слово было к Богу', gloss: T('la Palabra estaba hacia Dios; к rige el dativo') },
    { text: 'нет хлеба', gloss: T('no hay pan; нет rige el genitivo') },
    { text: 'много воды', gloss: T('mucha agua; la cantidad rige el genitivo') },
    { text: 'помогать другу', gloss: T('ayudar a un amigo; помогать rige el dativo') },
    { text: 'молиться Отцу', gloss: T('orar al Padre; молиться rige el dativo') },
    {
      text: 'заниматься музыкой',
      gloss: T('ocuparse con música; заниматься rige el instrumental'),
    },
    { text: 'Он был врачом', gloss: T('él fue médico; profesión en el instrumental') },
    { text: 'о слове', gloss: T('sobre la palabra; el prepositivo nunca va solo') },
  ],
  tables: [
    {
      caption: T('Los seis casos y quién los gobierna'),
      head: [T('Caso'), T('Governado by'), T('Pregunta que responde'), T('Ejemplo')],
      rows: [
        [T('nominativo'), T('verbo y cópula'), T('¿quién lo hace?'), T('Бог')],
        [T('genitivo'), T('нет, у, от, до, dos, muchos'), T('de quién, de qué'), T('у Бога')],
        [T('dativo'), T('к, по, помогать, молиться'), T('a quién'), T('к Богу')],
        [T('acusativo'), T('verbo transitivo'), T('qué'), T('вижу Бога')],
        [
          T('instrumental'),
          T('быть, заниматься, интересоваться'),
          T('con qué, por qué medio'),
          T('врачом'),
        ],
        [
          T('prepositivo'),
          T('в, на, о, при con sentido estático'),
          T('dónde, dentro de qué'),
          T('в начале'),
        ],
      ],
    },
    {
      caption: T('Lo que cada caso no puede hacer'),
      head: [T('Caso'), T('No puede ser'), T('Ejemplo del error')],
      rows: [
        [
          T('nominativo'),
          T('objeto directo ni poseedor'),
          T('quien ama es lo que rige, no lo amado'),
        ],
        [
          T('genitivo'),
          T('sujeto ni objeto directo'),
          T('вижу Бога lleva Бога en acusativo, y sólo el verbo decide'),
        ],
        [
          T('dativo'),
          T('sujeto ni objeto directo de un verbo común'),
          T('Я даю книгу другу: el amigo es dativo, el libro es acusativo'),
        ],
        [
          T('acusativo'),
          T('sujeto ni poseedor'),
          T('слово Бога es genitivo; вижу слово Бoga lleva acusativo'),
        ],
        [
          T('instrumental'),
          T('sujeto'),
          T('Он пишет пером: el sujeto es él, el instrumento es la pluma'),
        ],
        [T('prepositivo'), T('nada, solo'), T('о слове sin la preposición о es un error')],
      ],
    },
    {
      caption: T('Cuando dos formas coinciden'),
      head: [T('Forma'), T('Casos posibles'), T('Qué decide')],
      rows: [
        [T('Бога'), T('genitivo y acusativo'), T('el verbo: вижу, o слово Бога')],
        [T('на'), T('prepositivo y acusativo'), T('на столе es lugar, на стену es dirección')],
        [
          T('по'),
          T('dativo, genitivo y acusativo'),
          T('el sentido: по улице es lugar, по брату es destinatario'),
        ],
        [T('о'), T('prepositivo'), T('siempre con sentido de lugar o de asunto')],
        [T('мы'), T('pronombre, o sustantivo'), T('el número del verbo: приняли es plural')],
      ],
    },
  ],
};
