import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  title: T('Pares de sonidos y la shadda'),
  subtitle: T('ت، ط، د، ض: consonantes simples y enfáticas'),
  section: T('Alfabetos y escritura'),
  body: C(`## Toda consonante enfática tiene una compañera

Varias letras del alfabeto vienen en pares, y en cada par una es simple y la otra es **enfática**: {ت} contra {ط}, {س} contra {ص}, {د} contra {ض}, {ذ} contra {ظ}, {ح} contra {خ}, {ع} contra {غ}, {ه} contra {ء}. La diferencia no es de grado sino de lugar: en la enfática la lengua sube más, la faringe se cierra un poco y la voz sale tapada. Son dos consonantes distintas, no dos versiones de la misma letra.

No todo par funciona así. {ق} y {ك} no son par de enfaticidad: las dos son velares, y {ق} se hace bien atrás de la boca mientras {ك} se hace más adelante. Confundirlas es un problema de lectura, no de sonido.

## La shadda es la consonante repetida

{شَدَّة} es el signo con forma de w que se pone encima de la consonante, y significa que se pronuncia dos veces seguidas. Nunca va sola: una shadda sin vocal es ilegible, y la fatha es el valor por defecto, como en {شَدَّة}.

La geminación aparece en tres sitios, y son los tres que quien lee un texto antiguo tiene que reconocer: el artículo ante una letra de la clase del sol, como en {الشَّمْس}; el segundo elemento de una iḍāafa, cuando el sustantivo pierde el artículo; y la preposición {بِـ}, como en {بِالْبَيْتِ}. En los tres la repetición es obligatoria y la shadda es el aviso.

## Tres casos en que la shadda falta

La excepción cuesta más que la regla, y son tres.

El imperativo de la segunda forma no gemina: el de {رَدَّ} es {رُدَّ}, sin shadda, aunque el pasado {رَدَّ} y el presente {يَرِدُّ} la traen. Quien escribe la shadda en el imperativo escribe una palabra que nadie pronuncia.

Segundo, raíces que parecen dobladas y no lo son. {رَأَى}, {دَعَا} y {وَرَى} llevan una {أ} o {و} débil, y la letra que parece la segunda del par es un apoyo, no una geminación. El contexto decide y el diccionario lo resuelve.

Por último, en un texto no vocalizado la shadda muchas veces no está escrita, ni la de la letra del sol ni la de la iḍāafa. El manuscrito entrega {الشمس} y deja al lector decidir cuál de las dos consonantes suena.

## Criterio de lectura

En {فِي بَدْءِ خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ} la shadda sobre la {ش} no pertenece a la raíz: es el resto del artículo. La raíz de {سَمَاوَات} sigue siendo {س م و}, y lo que el manuscrito marca ahí es la fusión del {ل} con la letra siguiente. Quien traduce {السَّمَاوَات} como "los cielos" acierta por casualidad; quien sabe de dónde salió la shadda sabe por qué el sustantivo es plural y por qué no puede recibir otro artículo.`),
  vocab: [
    V('ت', 'ت', 't simple'),
    V('ط', 'ط', 't enfática; la lengua sube a la raíz de la boca'),
    V('س', 'س', 's simple'),
    V('ص', 'ص', 's enfática'),
    V('د', 'د', 'd simple'),
    V('ض', 'ض', 'd enfática'),
    V('ذ', 'ذ', 'dh simple'),
    V('ظ', 'ظ', 'dh enfática'),
    V('ح', 'ح', 'h fuerte, sopro rasgado'),
    V('خ', 'خ', 'kh'),
    V('ع', 'ع', 'ayn'),
    V('غ', 'غ', 'gh, uvular'),
    V('ه', 'ه', 'h'),
    V('ء', 'ء', 'hamza'),
    V('ق', 'ق', 'q; uvular'),
    V('ك', 'ك', 'k; velar'),
    V('شَدَّة', 'شدة', 'shadda; consonante pronunciada dos veces'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es la diferencia entre {ت} y {ط}?'),
    options: [
      T('Ninguna: es la misma letra'),
      T('La segunda es enfática'),
      T('La primera es enfática'),
      T('La segunda está geminada'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete el nombre del signo que indica consonante doble: ___َدَّة'),
      answer: 'شَ',
      hint: T('Es el signo con forma de w, encima de la consonante.'),
    },
    {
      kind: 'choose',
      prompt: T('En {الشَّمْس}, la shadda indica...'),
      options: [T('una raíz doble'), T('asimilación del artículo'), T('femenino'), T('plural')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Associe forma y valor.'),
      pairs: [
        { a: T('رَدَّ'), b: T('pasado con geminación') },
        { a: T('يُرِدُّ'), b: T('presente con geminación') },
        { a: T('رُدَّ'), b: T('imperativo sin geminación') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'choose',
      prompt: T('En {بِالْبَيْتِ}, ¿qué letra está geminada?'),
      options: [T('La {ب}'), T('La {ل}'), T('La {ت}'), T('Ninguna')],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Cada par tiene una forma simple y una enfática, y la diferencia es de lugar de articulación, no de intensidad.',
      ),
    },
    {
      n: '2',
      text: T(
        '**La shadda significa que la consonante se pronuncia dos veces**, y nunca aparece sin vocal.',
      ),
    },
    {
      n: '3',
      text: T(
        'La geminación obligatoria aparece en el artículo solar, en el segundo elemento de la iḍāafa y en la preposición {بِـ}.',
      ),
    },
    {
      n: '4',
      text: T('El imperativo de la segunda forma no gemina: el de {رَدَّ} es {رُدَّ}, sin shadda.'),
    },
    {
      n: '5',
      text: T(
        'En el texto no vocalizado la shadda puede faltar, y el lector decide cuál consonante suena.',
      ),
    },
  ],
  notes: [
    {
      label: T('Sol y luna'),
      text: T(
        'Las letras que siguen al artículo y lo absorben forman la clase del sol, y ahí aparece la shadda. Todas las demás forman la clase de la luna, donde el artículo se pronuncia entero.',
      ),
    },
    {
      label: T('La {ل} de {الله}'),
      text: T(
        'Aquí la shadda es una geminación normal: el nombre se pronuncia al-lāh, con los dos lām repetidos. El signo pequeño que va justo encima es el alif sobrepuesto, que marca la vocal larga sin ocupar sitio en la línea.',
      ),
    },
  ],
  examples: [
    { text: 'الشَّمْس', gloss: T('el sol; la shadda sobre el shin es el artículo') },
    { text: 'سَلَام', gloss: T('paz; la primera letra es simple') },
    { text: 'صَلَاة', gloss: T('oración; la primera letra es enfática') },
    { text: 'رَدَّ', gloss: T('respondió; el dal está doble') },
    { text: 'يُرِدُّ', gloss: T('responde; la geminación vuelve en el presente') },
    { text: 'رُدَّ', gloss: T('responde!; el imperativo no gemina') },
    { text: 'دَرْس', gloss: T('lección; dal simple') },
    { text: 'ظِلّ', gloss: T('sombra; zh enfático') },
    { text: 'غَفَرَ', gloss: T('perdonó; gh enfático') },
  ],
  tables: [
    {
      caption: T('Los pares de consonante'),
      head: [T('N'), T('Simple'), T('Enfática'), T('Dónde aparece la diferencia')],
      rows: [
        ['1', 'ت', 'ط', T('la lengua sube a la raíz de la boca')],
        ['2', 'س', 'ص', T('la punta se retira y el sopro cambia de lado')],
        ['3', 'د', 'ض', T('la lengua se cierra contra el paladar')],
        ['4', 'ذ', 'ظ', T('la punta sale entre los dientes y la lengua sube')],
        ['5', 'ه', 'ء', T('la vocal no hace vibrar las cuerdas')],
        ['6', 'ح', 'خ', T('el sopro sale rasando la garganta')],
        ['7', 'ع', 'غ', T('oclusión en la garganta con sonido sonorizado')],
      ],
    },
    {
      caption: T('Dónde aparece la shadda'),
      head: [T('Contexto'), T('Ejemplo'), T('Explicación')],
      rows: [
        [T('artículo + letra del sol'), 'الشَّمْس', T('el lām absorbe la letra siguiente')],
        [
          T('segundo elemento de la iḍāafa'),
          'كِتَابُ الْمُعَلِّمِ',
          T('el sustantivo pierde el artículo y su inicial queda doble'),
        ],
        [T('preposición con b'), 'بِالْبَيْتِ', T('la b se gemina')],
        [T('raíz de letra doble'), 'رَدَّ', T('la segunda letra de la raíz se repite')],
      ],
    },
    {
      caption: T('Dónde falta la shadda'),
      head: [T('Caso'), T('Ejemplo'), T('Explicación')],
      rows: [
        [T('imperativo de la II forma'), 'رُدَّ', T('la geminación no sobrevive a la forma corta')],
        [T('radical débil'), 'رَأَى', T('la ya y la alif no son geminación')],
        [T('texto no vocalizado'), 'الشمس', T('la shadda de fusión puede no estar escrita')],
      ],
    },
  ],
};
