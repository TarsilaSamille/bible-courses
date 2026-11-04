import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  section: T('La flexión de la palabra y la concordancia'),
  title: T('Régimen'),
  subtitle: T('Dependencia verbal y nominal'),
  body: C(`**Visión general.** El régimen verbal es la relación entre el verbo y el término que completa: en {creer en Dios}, la preposición {en} la exige {creer}, y sin ella la oración no está completa.

**Regla 1.** El régimen nominal viene del verbo de origen: en {necesidad de amar}, el sustantivo {necesidad} viene de {necesitar}, que exige {de}, y la preposición es suya.

**Regla 2.** La preposición exigida se integra en el término: en {hablé con Moisés}, {con} queda pegada a {hablar}, y el conjunto {con Moisés} es el objeto indirecto.

**Regla 3.** El régimen sin preposición existe: en {asistió a la misa} y en {asistió al juego}, el verbo {asistir} cambia de régimen según el sentido.

**Regla 4.** El régimen es la clave más difícil de la traducción, porque el griego marca por caso y el portugués por preposición: {ὁ λόγος τοῦ θεοῦ} es {la palabra de Dios}.

**Aplicación.** En {la palabra de Dios}, el sustantivo {palavra} está regido por la preposición {de}, y la línea griega (ὁ λόγος τοῦ θεοῦ) trae {τοῦ} en **genitivo**: el griego dice cuál es la relación por caso, y el portugués la dice por preposición. En {hablé con Moisés}, en cambio, la preposición {con} es del verbo {hablar}, no del sustantivo. La misma preposición ocupa dos lugares distintos, y por eso el régimen es la clave más difícil de la traducción.

**Verificación.** Haz tres preguntas. ¿El **regente** es verbo, nombre o adjetivo? ¿Tiene **más de una** regencia posible? Y ¿la preposición **cambiaría** el sentido? Si la preposición no es obvia, busca el **verbo de origen** del sustantivo: en {necesidad}, el verbo es {necesitar}, y la preposición es la suya. Y fíjate en el **dativo sin marca**, donde el griego usa caso y el portugués a veces no usa preposición alguna.`),
  vocab: [
    V('regência verbal', 'regência verbal', 'relación entre verbo y término'),
    V('regência nominal', 'regência nominal', 'relación entre nombre y término'),
    V('transitivo direto', 'transitivo direto', 'verbo con objeto directo'),
    V('transitivo indireto', 'transitivo indireto', 'verbo con objeto indirecto'),
    V('intransitivo', 'intransitivo', 'verbo sin objeto'),
    V('necessidade', 'necessidade', 'nombre que viene de {necesitar}'),
    V('obedecer', 'obedecer', 'exige {a}'),
    V('crer', 'crer', 'exige {en}'),
    V('gostar', 'gostar', 'exige {de}'),
    V('assistir', 'assistir', 'exige {a} en un sentido y nada en el otro'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'El régimen verbal es la relación entre el verbo y el término que completa: en {creer en Dios}, la preposición {en} la exige {creer}, y sin ella la oración no está completa.',
      ),
    },
    {
      n: '§2',
      text: T(
        'El régimen nominal viene del verbo de origen: en {necesidad de amar}, el sustantivo {necesidad} viene de {necesitar}, que exige {de}, y la preposición es suya.',
      ),
    },
    {
      n: '§3',
      text: T(
        'La preposición exigida se integra en el término: en {hablé con Moisés}, {con} queda pegada a {hablar}, y el conjunto {con Moisés} es el objeto indirecto.',
      ),
    },
    {
      n: '§4',
      text: T(
        'El régimen sin preposición existe: en {asistió a la misa} y en {asistió al juego}, el verbo {asistir} cambia de régimen según el sentido.',
      ),
    },
    {
      n: '§5',
      text: T(
        'El régimen es la clave más difícil de la traducción, porque el griego marca por caso y el portugués por preposición: {ὁ λόγος τοῦ θεοῦ} es {la palabra de Dios}.',
      ),
    },
  ],
  notes: [
    {
      label: T('El caso griego que se vuelve preposición'),
      text: T(
        'El genitivo griego tiene una gama de valores que el portugués distribuye entre {de}, {do}, {para} y la ausencia de preposición. Donde el griego escribe {τοῦ θεοῦ}, el portugués puede escribir {de Dios} o {do Senhor}. La información es la misma; lo que cambia es el medio, y por eso la traducción literal falla justo aquí.',
      ),
    },
    {
      label: T('Verbo que cambia de régimen con el mismo sentido'),
      text: T(
        '{Asistir} significa presenciar y significa estar presente, y los dos regímenes son distintos: {asistió al juego} y {asistió a la misa}. Lo que desempata es el sentido, no la forma. Por eso un diccionario que da solo la preposición sin el sentido enseña a errar.',
      ),
    },
  ],
  examples: [
    { text: 'crer em Deus', gloss: T('{creer} exige la preposición {en}: {creer Dios} está mal.') },
    {
      text: 'obedecer ao pai',
      gloss: T('{obedecer} exige {a}; con pronombre queda {obedecerle} sin preposición.'),
    },
    {
      text: 'gostar da música',
      gloss: T('{gostar} exige {de}, y la {a} del artículo cierra la crasis.'),
    },
    {
      text: 'a necessidade de amar',
      gloss: T('{necesidad} viene de {necesitar} y exige {de}: es régimen nominal.'),
    },
    {
      text: 'a palavra de Deus',
      gloss: T('{palavra} exige {de}; en griego {τοῦ θεοῦ} marca la misma relación con genitivo.'),
    },
    {
      text: 'falei a Moisés',
      gloss: T('{a} la exige el verbo {hablar}, y {Moisés} es objeto indirecto.'),
    },
    { text: 'assistiu à missa', gloss: T('Sentido de estar presente: {asistir} exige {a}.') },
    {
      text: 'assistiu o jogo',
      gloss: T('Sentido de presenciar: el mismo verbo no lleva preposición.'),
    },
    {
      text: 'confiou nele',
      gloss: T('{confiar} exige {en}, y el pronombre {le} prescinde de la preposición.'),
    },
  ],
  tables: [
    {
      caption: T('Preposiciones exigidas por verbos'),
      head: [T('Verbo'), T('Exige'), T('Não admite'), T('Exemplo')],
      rows: [
        [T('{crer}'), T('{em}'), T('{crer Deus}'), T('{crer em Deus}')],
        [T('{obedecer}'), T('{a}'), T('{obedecer o pai}'), T('{obedecer ao pai}')],
        [T('{gostar}'), T('{de}'), T('{gostar música}'), T('{gostar da música}')],
        [T('{aspirar}'), T('{a}'), T('{aspirar o céu}'), T('{aspirar ao céu}')],
        [T('{depender}'), T('{de}'), T('{depender alguém}'), T('{depender de alguém}')],
        [T('{confiar}'), T('{em}'), T('{confiar nele}'), T('{confiar em ele}')],
        [T('{lembrar}'), T('{de}'), T('{lembrar aquilo}'), T('{lembrar-se daquilo}')],
        [
          T('{assistir}'),
          T('{a} ou nada'),
          T('o sentido decide'),
          T('{assistir à missa}, {assistir o jogo}'),
        ],
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
        [T('{necessidade}'), T('{necessitar}'), T('{de}'), T('{a necessidade de vir}')],
        [T('{simpatia}'), T('{simpatizar}'), T('{por}'), T('{simpatia por ele}')],
        [T('{obrigação}'), T('{obrigar}'), T('{de}'), T('{a obrigação de vir}')],
        [T('{necessidade}'), T('{necessitar}'), T('{de}'), T('{necessidade de descanso}')],
      ],
    },
    {
      caption: T('Régimen verbal y nominal en paralelo'),
      head: [T('Verbo'), T('Nome derivado'), T('Preposição em comum')],
      rows: [
        [T('{crer em}'), T('{confiança em}'), T('{em}')],
        [T('{obedecer a}'), T('{obediência a}'), T('{a}')],
        [T('{gostar de}'), T('{gosto por}'), T('{de} muda para {por}')],
        [T('{amar a}'), T('{amor a}'), T('{a}')],
        [T('{depender de}'), T('{dependência de}'), T('{de}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué oración tiene el régimen correcto?'),
    options: [T('creer en Dios'), T('creer Dios'), T('obedecer al padre'), T('gustar la música')],
    answer: 0,
    hint: T('{creer} exige {en}; las otras tres cambiaron la preposición.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('En {la necesidad de amar}, la preposición {de} la exigió:'),
      options: [
        T('el sustantivo {necesidad}'),
        T('el verbo {amar}'),
        T('el sustantivo {amor}'),
        T('el artículo {la}'),
      ],
      answer: 0,
      hint: T('{necesidad} viene de {necesitar}, y la preposición viene con ella.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada verbo con la preposición que exige.'),
      pairs: [
        { a: T('{creer}'), b: T('{en}') },
        { a: T('{obedecer}'), b: T('{a}') },
        { a: T('{gostar}'), b: T('{de}') },
        { a: T('{aspirar}'), b: T('{a}') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('undefined'),
      answer: 'nome',
      hint: T('En {o amor de Dios}, el nombre {amor} es el regente.'),
    },
  ],
};
