import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  title: T('Sustantivo: la estructura de la definitud'),
  subtitle: T('كِتَابٌ، الْكِتَابُ، كِتَابُ الْمُعَلِّمِ'),
  section: T('Sustantivos'),
  body: C(`## La pregunta que hace el sustantivo

Quien mira {كِتَاب} en español quiere saber dos cosas: si es masculino o femenino, y si es singular o plural. Quien mira {كِتَاب} en árabe quiere saber una: **si el interlocutor ya sabe de qué libro estamos hablando**.

La definitud es la oposición central del sustantivo árabe, y el género es un accidente dentro de ella. Un manual de español invertido, por así decirlo, da la vuelta al orden de sus capítulos, y el resultado no es una lengua parecida con la nuestra: es una lengua que organiza el sustantivo en torno a otra pregunta. Quien traduce directamente recibe una frase con sustantivo definido y nota que falta información: {كِتَابٌ} no dice de qué libro se trata, y {كِتَابُ الْمُعَلِّمِ} ya lo dice.

## Las tres maneras de definir un sustantivo

El artículo es la más conocida y la más fácil de reconocer. {الْكِتَابُ} es definido porque lleva {ال}, y esa es la marca visible.

La iḍāafa es la segunda, y es la que el español no tiene. Cuando dos sustantivos se unen, el segundo queda definido sin recibir artículo: {كِتَابُ الْمُعَلِّمِ}, {بَيْتُ اللهِ}, {رَأْسُ الْجِسَدِ}. El segundo elemento queda definido por posición, no por marca.

El relativo es el tercero. {الطَّرِيقُ الَّذِي ضَيَّقٌ} está definido porque {الَّذِي} trae una oración que identifica qué camino es este, y el relativo concuerda en género con el nombre que sustituye.

Y están los nombres definidos por naturaleza, que no necesitan nada de eso: {مَكَّة} es una ciudad y {هُوَ} es un pronombre, los dos definidos solo por ser ellos mismos.

## La iḍāafa define sin decir

Una iḍāafa es un conjunto, y el conjunto se comporta como un único sustantivo definido. Eso da una regla práctica de comprobación: **un conjunto definido no recibe artículo dos veces**. {كِتَابُ الْمُعَلِّمِ} es correcto y {كِتَابُ الْمُعَلِّمُ} no lo es, porque ese segundo {ال} diría que el maestro es un maestro cualquiera, y es la propia forma del conjunto lo que lo vuelve determinado.

Los dos elementos tienen casos distintos, y aquí es donde la construcción es rígida. El primero toma el caso que pide la frase: en {كِتَابُ الْمُعَلِّمِ} está en nominativo porque es sujeto. El segundo es siempre genitivo, sin excepción que valga. Una terminación de nominativo en la segunda pieza significa que no es iḍāafa, y el texto está diciendo otra cosa.

La forma más común es la iḍāafa con pronombre, en la que el segundo elemento no aparece escrito: {رَاعِيَّ}, {كِتَابِي}, {نَفْسِي}. El pronombre ligado está en genitivo y ocupa el lugar del nombre ausente.

## Criterio de lectura

El primer versículo del Salmo 23 es una iḍāafa con pronombre y nada más: {الرَّبُّ رَاعِيَّ فَلاَ يُعْوِزُنِي شَيْءٌ}. {رَاعِيَّ} está en genitivo, y {رَاعِيَّ} con la {يَّ} final es el pastor de alguien, sin "de" ni "mío" escritos: quien lee {رَاعِيَّ} como "mi pastor" acierta sin ver que {رَاعِيَّ} es un genitivo y no un nominativo. {شَيْءٌ}, al lado, es lo único indefinido de la frase, y por eso la traducción dice "y no me faltará nada": lo indefinido es lo que la frase niega.`),
  vocab: [
    V('كِتَابٌ', 'كتاب', 'un libro; indefinido'),
    V('الْكِتَابُ', 'كتاب', 'el libro'),
    V('كِتَابُ الْمُعَلِّمِ', 'كتاب', 'el libro del maestro; una iḍāafa'),
    V('بَيْتُ اللهِ', 'بيت', 'la casa de Dios'),
    V('الْمُعَلِّم', 'معلم', 'el maestro'),
    V('رَاعِيَّ', 'راع', 'mi pastor; iḍāafa con pronombre'),
    V('شَيْءٌ', 'شيء', 'cosa'),
    V('الَّذِي', 'الذي', 'que; el cual'),
    V('مَكَّةَ', 'مكة', 'La Meca; definido por naturaleza'),
    V('هُوَ', 'هو', 'él; definido por naturaleza'),
    V('رَأْسُ', 'رأس', 'cabeza; primer elemento de la iḍāafa'),
    V('الْجِسَد', 'جسد', 'el cuerpo'),
    V('الطَّرِيقُ', 'طريق', 'el camino'),
    V('إِيمَانٌ', 'إيمان', 'una fe; abstracto e indefinido'),
    V('الْإِيمَانُ', 'إيمان', 'la fe'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {كِتَابُ الْمُعَلِّمِ}, ¿cómo se define el segundo elemento?'),
    options: [
      T('Por el artículo'),
      T('Por su posición en la iḍāafa'),
      T('Por el relativo'),
      T('No está definido'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa la iḍāafa: "el libro del maestro" es ___ الْمُعَلِّمِ.'),
      answer: 'كِتَابُ',
      hint: T('El primer elemento toma el caso que pide la frase.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál frase es correcta?'),
      options: [T('كِتَابُ الْمُعَلِّمُ'), T('كِتَابُ الْمُعَلِّمِ'), T('كِتَابِ الْمُعَلِّمِ'), T('الْكِتَابُ الْمُعَلِّمُ')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Associe sustantivo y estado.'),
      pairs: [
        { a: T('كِتَابٌ'), b: T('indefinido') },
        { a: T('الْكِتَابُ'), b: T('definido por el artículo') },
        { a: T('بَيْتُ اللهِ'), b: T('definido por la iḍāafa') },
        { a: T('هُوَ'), b: T('definido por naturaleza') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué caso tiene {الْمُعَلِّمِ} en {كِتَابُ الْمُعَلِّمِ}?'),
      options: [T('Nominativo'), T('Genitivo'), T('Acusativo'), T('Vocal')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'La pregunta central sobre un sustantivo es si es conocido, no si es masculino o femenino.',
      ),
    },
    {
      n: '2',
      text: T('**Tres cosas definen un sustantivo: el artículo, la iḍāafa y el relativo.**'),
    },
    {
      n: '3',
      text: T(
        'En la iḍāafa el segundo elemento queda definido sin artículo y siempre en genitivo.',
      ),
    },
    {
      n: '4',
      text: T(
        'Los nombres propios y los pronombres están definidos por naturaleza, sin marca visible.',
      ),
    },
    {
      n: '5',
      text: T(
        'Un conjunto definido no recibe artículo dos veces: {كِتَابُ الْمُعَلِّمِ}, nunca {كِتَابُ الْمُعَلِّمُ}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Donde el portugués dice "de"'),
      text: T(
        'El portugués resuelve toda relación de posesión con una sola palabra. El árabe la resuelve con la iḍāafa, que es una construcción: primer elemento con el caso de la frase, segundo en genitivo. Un "de" portugués puede haber sido dos preposiciones, una iḍāafa o nada.',
      ),
    },
    {
      label: T('La iḍāafa con pronombre'),
      text: T(
        'La iḍāafa más común del texto bíblico es la que trae pronombre: {رَاعِيَّ}, {كِتَابِي}, {نَفْسِي}. El segundo elemento no aparece escrito, y está ahí igual, y por eso la terminación del pronombre es la señal más fiable de que hay iḍāafa.',
      ),
    },
  ],
  examples: [
    { text: 'كِتَابٌ', gloss: T('un libro; indefinido') },
    { text: 'الْكِتَابُ', gloss: T('el libro; definido por el artículo') },
    { text: 'كِتَابُ الْمُعَلِّمِ', gloss: T('el libro del maestro; la iḍāafa define el segundo elemento') },
    { text: 'بَيْتُ اللهِ', gloss: T('la casa de Dios; iḍāafa con nombre propio') },
    { text: 'رَأْسُ الْجِسَدِ', gloss: T('la cabeza del cuerpo') },
    { text: 'الطَّرِيقُ الَّذِي ضَيَّقٌ', gloss: T('el camino que es estrecho') },
    { text: 'مَكَّةَ', gloss: T('La Meca; definido sin marca alguna') },
    { text: 'هُوَ', gloss: T('él; pronombre definido por naturaleza') },
    { text: 'إِيمَانٌ', gloss: T('una fe; hasta lo abstracto puede ser indefinido') },
  ],
  tables: [
    {
      caption: T('Los cuatro estados del sustantivo'),
      head: [T('Estado'), T('Cómo se marca'), T('Ejemplo'), T('¿Definido?')],
      rows: [
        [T('indefinido'), T('sin artículo y sin iḍāafa'), 'كِتَابٌ', T('no')],
        [T('definido por el artículo'), T('الـ'), 'الْكِتَابُ', T('sí')],
        [
          T('definido por la iḍāafa'),
          T('es el segundo elemento'),
          'بَيْتُ اللهِ',
          T('sí, como conjunto'),
        ],
        [
          T('definido por naturaleza'),
          T('nombre propio, pronombre, relativo'),
          'مَكَّةَ، هُوَ، الَّذِي',
          T('sí'),
        ],
      ],
    },
    {
      caption: T('Los casos dentro de la iḍāafa'),
      head: [T('Posición'), T('Caso'), T('Terminación'), T('Ejemplo')],
      rows: [
        [T('primer elemento'), T('el que pida la frase'), T('variable'), 'كِتَابُ'],
        [T('segundo elemento'), T('genitivo'), T('ـِ'), 'الْمُعَلِّمِ'],
        [T('pronombre ligado'), T('genitivo'), T('ـي، ـك، ـه'), 'رَاعِيَّ'],
      ],
    },
    {
      caption: T('Dónde aparece la definitud'),
      head: [T('Señal'), T('Lo que muestra'), T('Ejemplo')],
      rows: [
        ['ال', T('definitud directa'), 'الْكِتَابُ'],
        [T('genitivo después de sustantivo'), T('la segunda pieza ya está definida'), 'بَيْتُ اللهِ'],
        ['الَّذِي', T('definitud por relativo'), 'الطَّرِيقُ الَّذِي'],
        [T('nombre propio'), T('definitud sin marca'), 'مَكَّةَ'],
      ],
    },
  ],
};
