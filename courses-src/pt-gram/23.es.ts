import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  section: T('El sentido y la subordinación'),
  title: T('Semántica'),
  subtitle: T('Significado, relaciones y ambigüedad'),
  body: C(`**Visión general.** La {polisemia} reúne sentidos relacionados: en {el Verbo}, el sentido va de {palabra dicha} a {revelación}, y la relación entre ellos es histórica.

**Regla 1.** La {homonimia} reúne sentidos independientes con la misma forma: {banco} es la institución y también el asiento, y no hay relación entre los dos sentidos.

**Regla 2.** La {paronimia} se asemeja en las formas y separa los sentidos: {inminente} e {inmigrante} se parecen y nada dice el uno del otro, y ese es el criterio que separa paronimia de polisemia.

**Regla 3.** La interpretación depende del {contexto}: en {En el principio era el Verbo}, el sentido de {Verbo} es {revelación} porque el contexto es el del relato de la creación.

**Regla 4.** Cuando se traduce de una lengua de casos, el riesgo es {aplanar} el sentido: {λόγος} tiene cuatro sentidos en griego, y el portugués {palabra} pierde tres.

**Aplicación.** En {El Verbo se hizo carne}, {Verbo} tiene sentido **metafórico** (no {palabra dicha} sino {revelación}), y {carne} tiene sentido **concreto e intenso**: el griego usa {σάρξ}, que es más fuerte que {cuerpo}, y significa la naturaleza humana entera con su debilidad. Traducir {carne} por {cuerpo} reduce la palabra, y la traducción que lo hace pierde lo que el griego afirmaba.

**Verificación.** Para cualquier palabra clave, pregunta: ¿cuál es el **sentido** en el contexto y no en el diccionario? ¿Cuál es la **referencia**, es decir, la cosa de la que se habla? ¿Permite el contexto otro **sentido**? Y ¿mantuvo la traducción la **polisemia** que tenía el original? Cuatro preguntas, y la traducción deja de aplanar el texto.`),
  vocab: [
    V('significado', 'significado', 'contenido de sentido de una forma'),
    V('sinonímia', 'sinonímia', 'aproximación de sentidos'),
    V('antonímia', 'antonímia', 'oposición de sentidos'),
    V('polissemia', 'polissemia', 'varios sentidos relacionados'),
    V('homonímia', 'homonímia', 'sentidos independientes, misma forma'),
    V('paronímia', 'paronímia', 'formas semejantes, sentidos sin relación'),
    V('campo semântico', 'campo semântico', 'conjunto de sentidos de un área'),
    V('contexto', 'contexto', 'lo que decide el sentido'),
    V('λόγος', 'λόγος', 'palabra griega con cuatro sentidos'),
    V('σάρξ', 'σάρξ', 'carne en su sentido más intenso'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'La {polisemia} reúne sentidos relacionados: en {el Verbo}, el sentido va de {palabra dicha} a {revelación}, y la relación entre ellos es histórica.',
      ),
    },
    {
      n: '§2',
      text: T(
        'La {homonimia} reúne sentidos independientes con la misma forma: {banco} es la institución y también el asiento, y no hay relación entre los dos sentidos.',
      ),
    },
    {
      n: '§3',
      text: T(
        'La {paronimia} se asemeja en las formas y separa los sentidos: {inminente} e {inmigrante} se parecen y nada dice el uno del otro, y ese es el criterio que separa paronimia de polisemia.',
      ),
    },
    {
      n: '§4',
      text: T(
        'La interpretación depende del {contexto}: en {En el principio era el Verbo}, el sentido de {Verbo} es {revelación} porque el contexto es el del relato de la creación.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Cuando se traduce de una lengua de casos, el riesgo es {aplanar} el sentido: {λόγος} tiene cuatro sentidos en griego, y el portugués {palabra} pierde tres.',
      ),
    },
  ],
  notes: [
    {
      label: T('Lo que el caso hace y el portugués no'),
      text: T(
        '{Λόγος} en griego puede ser {palabra}, {discurso}, {razón} y {revelación}: los cuatro sentidos conviven en la misma forma, y el caso ayuda a distinguirlos. El portugués los tradujo por {palabra}, {discurso}, {pensamiento} y {Verbo}, creando cuatro palabras donde el griego tenía una. Cada traducción es una decisión, y el traductor tiene que saber cuál está haciendo.',
      ),
    },
    {
      label: T('La ambigüedad que la gramática quita'),
      text: T(
        'En {Salió el hijo de Pedro}, es ambiguo si {hijo} pertenece a {Pedro} o si {el hijo} es el que salió. Una coma después de {salió} lo resuelve: {salió, el hijo de Pedro}, y la lectura queda única. El griego antiguo lo resolvía por el caso y el portugués antiguo por el orden de los términos; la ambigüedad que queda hoy es la que alcanza la puntuación.',
      ),
    },
  ],
  examples: [
    {
      text: 'No princípio era o Verbo',
      gloss: T('{Verbo} en sentido metafórico: {revelación}, no {palabra dicha}.'),
    },
    {
      text: 'o Verbo se fez carne',
      gloss: T('{carne} en sentido intenso: la naturaleza humana entera, como en {σάρξ}.'),
    },
    {
      text: 'λόγος',
      gloss: T('Una forma griega con cuatro sentidos: {palabra}, {discurso}, {razón} y {Verbo}.'),
    },
    {
      text: 'o banco está cheio',
      gloss: T('Homonimia si {banco} es la institución y está en juego la cartera.'),
    },
    {
      text: 'sentou-se no banco',
      gloss: T('El mismo {banco} ahora es el asiento, y el contexto resolvió la ambigüedad.'),
    },
    {
      text: 'o iminente perigo',
      gloss: T(
        '{inminente} significa que va a ocurrir, no {inmigrante}, que es el que viene de fuera.',
      ),
    },
    {
      text: 'a palavra de Deus',
      gloss: T('Aquí {palabra} es el sentido concreto; la revelación aparece en {el Verbo}.'),
    },
    {
      text: 'os Logos do Evangelho',
      gloss: T('Aquí {logos} es el discurso, y ni la palabra ni la razón.'),
    },
    {
      text: 'Saiu, o filho de Pedro',
      gloss: T('La coma quita la ambigüedad: ahora se sabe que {el hijo de Pedro} salió.'),
    },
  ],
  tables: [
    {
      caption: T('Polisemia, homonimia y paronimia'),
      head: [T('Fenômeno'), T('O que reúne'), T('Há relação?'), T('Exemplo')],
      rows: [
        [
          T('{polissemia}'),
          T('sentidos relacionados'),
          T('sim, histórica ou metafórica'),
          T('{o Verbo}'),
        ],
        [T('{homonímia}'), T('sentidos independentes'), T('não'), T('{banco}')],
        [
          T('{paronímia}'),
          T('formas assemelhadas'),
          T('não, e os sentidos não se tocam'),
          T('{iminente}, {imigrante}'),
        ],
        [
          T('{sinonímia}'),
          T('sentidos próximos'),
          T('sim, por equivalência'),
          T('{magnífico}, {excelente}'),
        ],
        [T('{antonímia}'), T('sentidos opostos'), T('sim, por oposição'), T('{amor}, {ódio}')],
      ],
    },
    {
      caption: T('Los sentidos de {λόγος} y en qué se convirtió cada uno'),
      head: [T('Sentido grego'), T('Significa'), T('Português'), T('Onde aparece')],
      rows: [
        [T('{discurso}'), T('palavra articulada'), T('{palavra}'), T('{a palavra de Deus}')],
        [T('{razão}'), T('pensamento, relação'), T('{razão}'), T('{o Logos se fez carne}')],
        [T('{relação}'), T('o que liga duas coisas'), T('{palavra}'), T('{o Verbo eterno}')],
        [T('{revelação}'), T('o que Deus diz de si'), T('{Verbo}'), T('{o Logos se fez carne}')],
        [T('{conta}'), T('número, ordem'), T('{conta}'), T('{a conta das nation}')],
      ],
    },
    {
      caption: T('Relaciones de sentido y el riesgo de usarlas'),
      head: [T('Relação'), T('Exemplo'), T('Serve para'), T('Cuidado')],
      rows: [
        [T('{sinônimos}'), T('{magnífico}, {excelente}'), T('variar o texto'), T('apaga a nuance')],
        [T('{antônimos}'), T('{amor}, {ódio}'), T('marcar contraste'), T('nem sempre são exatos')],
        [
          T('{parônimos}'),
          T('{eminente}, {iminente}'),
          T('testar a atenção'),
          T('troca-se por engano'),
        ],
        [T('{homonônimos}'), T('{ser}, {cér}'), T('desambiguar'), T('o contexto resolve')],
        [T('{polônimos}'), T('{banco}, {mesa}'), T('checar o sentido'), T('depende do contexto')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {el Verbo}, {Verbo} tiene sentido metafórico. Eso quiere decir que:'),
    options: [
      T('{palabra} se transfirió de sentido, y el contexto sostiene la transferencia'),
      T('{Verbo} es un homónimo de {palabra}'),
      T('{Verbo} no tiene ningún sentido, y el contexto lo crea'),
      T('{Verbo} es un parónimo de {palabra}'),
    ],
    answer: 0,
    hint: T('Un sentido metafórico nace de otro por comparación, y la imagen sostiene la lectura.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('El par {banco} (institución) y {banco} (asiento) es ejemplo de:'),
      options: [
        T('homonimia, porque los sentidos son independientes'),
        T('polisemia, porque hay varios sentidos'),
        T('paronimia, porque las formas se parecen'),
        T('antonimia, porque los sentidos se oponen'),
      ],
      answer: 0,
      hint: T(
        'La prueba: ¿hay alguna relación entre el sentido de la institución y el del asiento?',
      ),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada par de palabras con el fenómeno que ilustra.'),
      pairs: [
        { a: T('{el Verbo}, {palabra}'), b: T('polisemia') },
        { a: T('{banco} y {banco}'), b: T('homonimia') },
        { a: T('{inminente} e {inmigrante}'), b: T('paronimia') },
        { a: T('{amor} y {odio}'), b: T('antonimia') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('La reunión de sentidos relacionados en una misma forma se llama ______.'),
      answer: 'polissemia',
      hint: T('Es el caso de {el Verbo}, con {palabra} y {revelación}.'),
    },
  ],
};
