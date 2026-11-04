import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  section: T('La regencia, la crasis y la colocación pronominal'),
  title: T('Régimen en detalle'),
  subtitle: T('Preposiciones exigidas por verbos y nombres'),
  body: C(`**Visión general.** Cada verbo tiene su preposición, y no se negocia: {creer en}, {obedecer a}, {gustar de}, {depender de}, {aspirar a}, {recordar de}, {asistir a}.

**Regla 1.** La misma palabra puede cambiar de régimen según el sentido: {asistió al juego} (presenciar) y {asistió a la misa} (estar presente), y lo que desempata es el sentido.

**Regla 2.** El régimen nominal sigue al verbo de origen: {necesidad} viene de {necesitar} y exige {de}, {amor} viene de {amar} y exige {a}, {amigo} también viene de {amar} y exige {de}.

**Regla 3.** El {dativo} sin preposición es la regla en {hablar a alguien}, y el portugués prescinde de la preposición donde el griego marca el caso.

**Regla 4.** Con pronombre oblicuo desaparece la preposición: {hablé con él} en vez de {hablé a él}, y {creer en él} en vez de {creer en él}.

**Aplicación.** En {la necesidad de amar}, la preposición {de} la exige el sustantivo {necesidad}, que viene del verbo {necesitar}, y que exige {de}. El griego ({ἀνάγκη} con genitivo) marca la relación por caso, y por eso la estructura {necesidad de + infinitivo} en portugués esconde un **infinitivo** que el griego regía con genitivo: {ἀνάγκη τοῦ ἀγαπᾶν}.

**Verificación.** Para cada término regido, pregunta tres cosas: ¿el **regente** es verbo, nombre o adjetivo? ¿Tiene **más de una** regencia posible? Y ¿la preposición **cambiaría** el sentido? Si la preposición no es obvia, busca el **verbo de origen** del sustantivo. Y fíjate en el **dativo sin marca**, donde el griego usa caso y el portugués a veces no usa preposición alguna, y por eso la traducción tiene que decidir.`),
  vocab: [
    V('crer', 'crer', 'exige {en}'),
    V('obedecer', 'obedecer', 'exige {a}'),
    V('gostar', 'gostar', 'exige {de}'),
    V('aspirar', 'aspirar', 'exige {a}'),
    V('depender', 'depender', 'exige {de}'),
    V('amigo de', 'amigo de', 'régimen nominal de {amar}'),
    V('fiel a', 'fiel a', 'régimen nominal de {creer}'),
    V('referir-se a', 'referir-se a', 'verbo pronominal con régimen'),
    V('necessidade', 'necessidade', 'viene de {necesitar}'),
    V('ἀνάγκη τοῦ ἀγαπᾶν', 'ἀνάγκη τοῦ ἀγαπᾶν', 'genitivo griego rigiendo un infinitivo'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Cada verbo tiene su preposición, y no se negocia: {creer en}, {obedecer a}, {gustar de}, {depender de}, {aspirar a}, {recordar de}, {asistir a}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'La misma palabra puede cambiar de régimen según el sentido: {asistió al juego} (presenciar) y {asistió a la misa} (estar presente), y lo que desempata es el sentido.',
      ),
    },
    {
      n: '§3',
      text: T(
        'El régimen nominal sigue al verbo de origen: {necesidad} viene de {necesitar} y exige {de}, {amor} viene de {amar} y exige {a}, {amigo} también viene de {amar} y exige {de}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'El {dativo} sin preposición es la regla en {hablar a alguien}, y el portugués prescinde de la preposición donde el griego marca el caso.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Con pronombre oblicuo desaparece la preposición: {hablé con él} en vez de {hablé a él}, y {creer en él} en vez de {creer en él}.',
      ),
    },
  ],
  notes: [
    {
      label: T('El régimen que cambia con la traducción'),
      text: T(
        'En {Y a vosotros hablando, así, Señor}, el griego {εἶπεν} trae un verbo simple y el portugués introduce un infinitivo, lo que cambia el grado de la oración. Donde el griego usa un participio, el portugués suele escribir una oración entera, y cada una de esas expansiones añade un verbo que no estaba en el original. El recuento de verbos del período cambia, y por eso hay que contar la traducción.',
      ),
    },
    {
      label: T('El verbo que cambia de preposición sin cambiar de sentido'),
      text: T(
        'En {depender de}, {insistir en} y {confiar en}, la preposición viene del latín y no siempre sobrevive. El portugués antiguo usaba {confiar}; el actual usa {confiar en} y también {confiar en}, con el artículo fusionado. Por eso la crasis aparece exactamente donde la preposición termina en {a}: {depender de ella}, {confiar en él}.',
      ),
    },
  ],
  examples: [
    {
      text: 'creio em Deus',
      gloss: T('{creer} exige {en}; sin la preposición la oración está mal.'),
    },
    {
      text: 'obedeceu ao pai',
      gloss: T('{obedecer} exige {a}, y el {o} es el artículo que cierra la crasis.'),
    },
    {
      text: 'gostou da música',
      gloss: T('{gustar} exige {de}, que con el artículo {a} da {de la}.'),
    },
    {
      text: 'a necessidade de dormir',
      gloss: T('Régimen nominal: {necesidad} viene de {necesitar} y exige {de}.'),
    },
    {
      text: 'o amor de Deus',
      gloss: T('Régimen nominal con {a}: {amor} viene de {amar} y la preposición es {a}.'),
    },
    {
      text: 'falei-lhe',
      gloss: T('Con pronombre oblicuo desaparece la preposición {a} y queda el {le}.'),
    },
    { text: 'assistiu ao jogo', gloss: T('Sentido de asistir: {asistir} exige {a}.') },
    {
      text: 'assistiu o jogo',
      gloss: T('Sentido de presenciar el juego: el mismo verbo prescinde de la preposición.'),
    },
    {
      text: 'ἀνάγκη τοῦ ἀγαπᾶν',
      gloss: T(
        'El genitivo griego rige el infinitivo, y el portugués lo traduce por {de} más el infinitivo.',
      ),
    },
  ],
  tables: [
    {
      caption: T('Preposiciones exigidas por verbos'),
      head: [T('Verbo'), T('Exige'), T('Não admite'), T('Exemplo')],
      rows: [
        [T('{crer}'), T('{em}'), T('{crer Deus}'), T('{creio em Deus}')],
        [T('{obedecer}'), T('{a}'), T('{obedecer o pai}'), T('{obedeceu ao pai}')],
        [T('{gostar}'), T('{de}'), T('{gostar música}'), T('{gostou da música}')],
        [T('{aspirar}'), T('{a}'), T('{aspirar o céu}'), T('{aspirou ao céu}')],
        [T('{depender}'), T('{de}'), T('{depender alguém}'), T('{depende de alguém}')],
        [T('{confiar}'), T('{em}'), T('{confiar nele}'), T('{confia nele}')],
        [T('{lembrar}'), T('{de}'), T('{lembrar aquilo}'), T('{lembra-se daquilo}')],
        [T('{assistir}'), T('{a} ou nada'), T('o sentido decide'), T('{assistiu à missa}')],
        [T('{proceder}'), T('{de}'), T('{proceder Deus}'), T('{procede de Deus}')],
        [T('{informar}'), T('{sobre}'), T('{informar o caso}'), T('{informou sobre o caso}')],
      ],
    },
    {
      caption: T('Régimen nominal: del nombre al verbo'),
      head: [T('Nome'), T('Verbo de origem'), T('Exige'), T('Exemplo')],
      rows: [
        [T('{necessidade}'), T('{necessitar}'), T('{de}'), T('{a necessidade de amar}')],
        [T('{amor}'), T('{amar}'), T('{a}'), T('{o amor a Deus}')],
        [T('{amigo}'), T('{amar}'), T('{de}'), T('{amigo de Deus}')],
        [T('{fiel}'), T('{crer}'), T('{a}'), T('{fiel a Deus}')],
        [T('{simpatia}'), T('{simpatizar}'), T('{por}'), T('{simpatia por ele}')],
        [T('{obrigação}'), T('{obrigar}'), T('{de}'), T('{a obrigação de vir}')],
        [T('{confiança}'), T('{confiar}'), T('{em}'), T('{confiança em Deus}')],
        [T('{dependência}'), T('{depender}'), T('{de}'), T('{a dependência da ajuda}')],
      ],
    },
    {
      caption: T('Verbal y nominal en paralelo'),
      head: [T('Verbo'), T('Nome derivado'), T('Preposição'), T('Observação')],
      rows: [
        [T('{crer em}'), T('{confiança em}'), T('{em}'), T('a preposição não muda')],
        [T('{obedecer a}'), T('{obediência a}'), T('{a}'), T('o grego usa dativo')],
        [T('{gostar de}'), T('{gosto por}'), T('{de} vira {por}'), T('o nome troca a preposição')],
        [T('{amar a}'), T('{amor a}'), T('{a}'), T('o nome mantém a preposição')],
        [T('{depender de}'), T('{dependência de}'), T('{de}'), T('o nome mantém a preposição')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué oración tiene el régimen nominal correcto?'),
    options: [
      T('la necesidad de descansar'),
      T('la necesidad para descansar'),
      T('el amor con Dios'),
      T('la {necesidad} de Dios'),
    ],
    answer: 0,
    hint: T('{necesidad} viene de {necesitar}, y {necesitar} exige {de}.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Entre {asistió a la misa} y {asistió al juego}, lo que cambia es:'),
      options: [
        T('el sentido del verbo, y con él el régimen'),
        T('el número del sujeto, que fuerza la preposición'),
        T('la persona del verbo, que cambia la preposición'),
        T('el modo verbal, que decide la preposición'),
      ],
      answer: 0,
      hint: T('Un diccionario que da solo la preposición enseña a errar.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada verbo con la preposición que exige.'),
      pairs: [
        { a: T('{creer}'), b: T('{en}') },
        { a: T('{obedecer}'), b: T('{a}') },
        { a: T('{gustar}'), b: T('{de}') },
        { a: T('{recordar}'), b: T('{de}') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('El régimen nominal hereda la preposición del ______ de origen del sustantivo.'),
      answer: 'verbo',
      hint: T('{necesidad} viene de {necesitar}.'),
    },
  ],
};
