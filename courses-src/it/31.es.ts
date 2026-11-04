import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  title: T('Capstone: Marcos 4,35-41'),
  subtitle: T('Taci, calmati!'),
  section: T('Lectura y sintaxis'),
  body: C(`## El texto

«La sera di quel giorno, quando si faceva buio, Gesù disse ai discepoli: "{Passiamo} all’altra parte del mare". E salì sulla barca con loro. E cominciò a salire la tempesta. Il vento soffiava violentemente e le onde battevano contro la barca. Ma Gesù dormiva sul cuscino a poppa. E si svegliò e disse a Pietro: "{Pietro}, che cos’è con te?". E Pietro gli rispose: "{Signore}, non ti curi che periamo?". E disse: "{Perché} avete paura?". E si alzò, e sgridò il vento e disse al mare: "{Taci}, {calmati}!". E il vento tacque e vi fu grande calma. E disse loro: "{Perché} non avevate fiducia?"»

Las ediciones italianas difieren en dos palabras: donde la CEI dice {non ti preoccupi}, la NUFI dice {non ti curi}; y en algunas el verbo de despertarse es {destò} en vez de {si svegliò}. La escena es la misma en todas.

## Artículos, elisiones y fusiones

Cuenta los artículos de la primera frase: {la sera}, {il giorno}, {il mare}. En la palabra de Jesús, {all’altra} es la fusión de {a} + {l’altra}, igual que {dal} y {nel}; por eso la preposición articulada reaparece en la frase más importante del pasaje. {L’altra} por sí solo es {l’} más {altra}, la elisión ante vocal.

Dos sustantivos aparecen sin artículo, y ninguno es un error. En {a poppa}, {poppa} es un término técnico de navegación y el artículo no se omite por descuido: en italiano técnico las palabras de la nave entran crudas. En {vi fu grande calma}, lo que prescinde del artículo es {grande}, que es indefinido: la frase no señala ninguna calma concreta, y no podría.

## Verbos, sujetos omitidos y subordinadas

Los verbos alternan a propósito: {salì}, {si svegliò}, {tacque}, {vi fu} son pretérito perfecto, un suceso; {soffiava}, {battevano}, {dormiva}, {si faceva buio} son imperfecto, la duración. Y la alternancia es el argumento: el narrador cuenta lo que pasó en orden.

El sujeto desaparece dos veces. En «{Passiamo} all’altra parte», {Passiamo} es primera plural y el sujeto, Jesús y los discípulos, está en la frase anterior. En «{Perché} avete paura?», el sujeto de {avete} son los discípulos, y el italiano lo deja implícito porque toda la situación es suya.

Hay cuatro subordinadas, y cada una hace un trabajo: **{quando si faceva buio}** es temporal, dice cuándo habló Jesús; **«che cos’è con te?»** es interrogativa, y el {che} es el pronombre de la pregunta, no una conjunción; **«che periamo?»** trae {che} de vuelta, pero aquí como conjunción que introduce el complemento de {curare}; **{perché avete paura}** y **{perché non avevate fiducia}** son preguntas directas, y el {perché} es la misma palabra.

## Dónde está el gerundio

En ningún sitio. Donde el português diría «estava dormindo» y el lector espera un gerundio, el italiano escribió {dormiva}: el narrador eligió el imperfecto porque quería decir que Jesús dormía, y punto. Buscar un gerundio por costumbre hace ver uno que no está en el texto.

Lo que sí existe son las perifrasis: {cominciò a} {salire} es el equivalente de «começou a subir», y {sgridò} el viento y {disse} al mar son dos verbos coordinados, lo que hace la frase más rápida de lo que habría hecho una subordinada.

## Criterio de lectura

Identifica siempre las cuatro capas: dónde está el artículo, qué verbo está en pretérito y cuál en imperfecto, qué sujeto se omitió y qué palabra introduce la subordinada. Después lee otra vez sin traducir nada y mira si la frase todavía tiene sentido. Una lectura que sigue teniendo sentido después de esa pasada ya es una lectura.`),
  vocab: [
    V('sera', 'sera', 'tarde'),
    V('buio', 'buio', 'oscuridad'),
    V('discepolo', 'discepolo', 'discípulo'),
    V('barca', 'barca', 'barca'),
    V('tempesta', 'tempesta', 'tormenta'),
    V('vento', 'vento', 'viento'),
    V('onda', 'onda', 'ola'),
    V('cuscino', 'cuscino', 'cojín'),
    V('poppa', 'poppa', 'popa'),
    V('Pietro', 'Pietro', 'Pedro'),
    V('paura', 'paura', 'miedo'),
    V('sgridare', 'sgridare', 'gritar'),
    V('Taci', 'tacere', 'cállate'),
    V('calmati', 'calmarsi', 'cálmate'),
    V('fiducia', 'fiducia', 'confianza'),
    V('mare', 'mare', 'mar'),
    V('perire', 'perire', 'perecer'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En «Passiamo all’altra parte del mare», ¿quién habla?'),
    options: [
      T('Un sujeto nuevo que aparece solo aquí'),
      T('Jesús, con los discípulos, ya nombrados'),
      T('Pedro, que habla en el versículo siguiente'),
      T('El narrador, en tercera persona'),
    ],
    answer: 1,
    hint: T('El verbo es de primera plural y el sujeto viene de la frase anterior.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Qué verbo está en imperfecto en la primera mitad del texto?'),
      options: [T('salì'), T('dormiva'), T('tacque'), T('si svegliò')],
      answer: 1,
      hint: T('El imperfecto marca lo que duraba.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa la fusión: a + l’altra → ___'),
      answer: 'all’altra',
      hint: T('La preposición se une al artículo elidido.'),
    },
    {
      kind: 'choose',
      prompt: T('En «che cos’è con te?», ¿qué es che?'),
      options: [
        T('Una conjunción que introduce la pregunta'),
        T('El pronombre interrogativo, lo que se pregunta'),
        T('Un relativo que se refiere a Jesús'),
        T('Un numeral'),
      ],
      answer: 1,
      hint: T('No hay verbo delante que pida una oración.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El sujeto puede omitirse cuando la frase anterior lo nombró: Gesù disse... Passiamo all’altra parte.',
      ),
    },
    {
      n: '2',
      text: T('La preposición articulada aparece en la palabra de Jesús: all’altra = a + l’altra.'),
    },
    {
      n: '3',
      text: T(
        'En «che cos’è con te?» el che es pronombre interrogativo; en «che periamo?» es conjunción.',
      ),
    },
    {
      n: '4',
      text: T('El verbo que apunta a algo definido prescinde del artículo: vi fu grande calma.'),
    },
    {
      n: '5',
      text: T(
        'El pretérito perfecto marca el suceso, el imperfecto la duración: salì, pero dormiva.',
      ),
    },
  ],
  notes: [
    {
      label: T('Once versículos, cuatro subordinadas'),
      text: T(
        'La cuenta importa porque es lo que separa este pasaje de cualquier otro trozo de texto. Mc 4,35-41 tiene dos preguntas directas, una temporal y una indirecta, y ninguna está marcada por una conjunción que el portugués use. El {che} italiano hace el trabajo de {que} y de {como}.',
      ),
    },
    {
      label: T('Qué cambia entre ediciones'),
      text: T(
        '{non ti curi} y {non ti preoccupi} dicen lo mismo, y la elección es de registro, no de sentido. Lo mismo vale para {destò} y {si svegliò}. Si tu texto se aparta del impreso arriba en uno de esos dos puntos, está tan bien como la NUFI.',
      ),
    },
  ],
  examples: [
    { text: 'Gesù disse ai discepoli.', gloss: T('Jesús dijo a los discípulos.') },
    { text: 'Passiamo all’altra parte del mare.', gloss: T('Pasemos al otro lado del mar.') },
    { text: 'Salì sulla barca con loro.', gloss: T('Subió a la barca con ellos.') },
    { text: 'Il vento soffiava violentemente.', gloss: T('El viento soplaba violentamente.') },
    {
      text: 'Ma Gesù dormiva sul cuscino a poppa.',
      gloss: T('Pero Jesús dormía en el cojín de la popa.'),
    },
    { text: 'Che cos’è con te?', gloss: T('¿Qué te pasa?') },
    { text: 'Non ti curi che periamo?', gloss: T('¿No te importa que perecemos?') },
    { text: 'Perché avete paura?', gloss: T('¿Por qué tenéis miedo?') },
    { text: 'Taci, calmati!', gloss: T('¡Cállate, cálmate!') },
    {
      text: 'E il vento tacque e vi fu grande calma.',
      gloss: T('Y el viento calló y hubo gran calma.'),
    },
  ],
  tables: [
    {
      caption: T('Identificazione nel testo'),
      head: ['Parola', 'Che cos’è'],
      rows: [
        ['{la sera}', 'articolo + sostantivo femminile'],
        ['{all’altra}', 'fusione di a + l’altra'],
        ['{il vento}', 'articolo + sostantivo maschile'],
        ['{Passiamo}', 'verbo con soggetto omesso'],
        ['{quando si faceva buio}', 'subordinata temporale'],
        ['{che cos’è con te}', 'subordinata interrogativa'],
        ['{gli}', 'pronome indiretto (a Pietro)'],
        ['{non ti curi}', 'verbo con clitico e negazione'],
      ],
    },
    {
      caption: T('Perfetto e imperfetto'),
      head: ['Imperfetto (durava)', 'Perfetto (accadde)'],
      rows: [
        ['{si faceva buio}', '{disse}'],
        ['{salì}', '{cominciò a salire}'],
        ['{soffiava}', '{si svegliò}'],
        ['{battevano}', '{tacque}'],
        ['{dormiva}', '{vi fu grande calma}'],
      ],
    },
    {
      caption: T('Imperativi di Gesù'),
      head: ['Forma', 'Glossa', 'Persona'],
      rows: [
        ['{Passiamo}', 'vamos nosotros', '1ª plural, soggetto omesso'],
        ['{Taci}', 'cállate', '2ª singular'],
        ['{calmati}', 'calmaos', '2ª singular'],
      ],
    },
  ],
};
