import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  section: T('El sentido y la subordinación'),
  title: T('Variación lingüística'),
  subtitle: T('Variación regional, social, histórica y diastrática'),
  body: C(`**Visión general.** La variación {diatópica} es geográfica: en Portugal, {autocarro} donde en Brasil se dice {autobús}, y ninguna de las dos formas está mal.

**Regla 1.** La variación {diastrática} es social, y lo que cambia es el {registro}: en {Venid} de un rey y en {ven} de un amigo, la forma es la misma y el tono cambia.

**Regla 2.** La variación {diafásica} es la del hablante en una situación: en {Está bien} para el médico y en {¿Qué tal?} para un amigo, el mismo sentido recibe formas distintas.

**Regla 3.** Una forma {arcaica} no es un error: en {Él os hablando, así}, el {hablando} es {gerundio} y no {participio}, y la forma es la del portugués antiguo.

**Regla 4.** La prueba para distinguir {arcaísmo} de {error} es el uso: si la forma aparece en tres traducciones antiguas y en ningún texto contemporáneo, es un {arcaísmo}.

**Aplicación.** En {Si tú fuere perfecto, nadie te condenaría}, el {fueres} es una forma que el portugués del siglo XVI usaba como {subjuntivo}, y por eso Juan 3, 21 aparece como {si, después que, fuerdes}. El texto bíblico conserva un tiempo verbal que el portugués actual no tiene, y es lo que la traducción antigua conserva sin darse cuenta.

**Verificación.** Para un texto antiguo, pregunta: ¿la forma que parece extraña es {arcaísmo} o {error}? ¿La palabra es {regional} o {desusada}? Y ¿mi objetivo es {traducir la forma} o {traducir el sentido}? Tres preguntas, y la decisión deja de ser arbitraria: en el texto bíblico lo habitual es traducir el sentido y dejar la marca de la forma antigua solo cuando aporta énfasis.`),
  vocab: [
    V('diatópica', 'diatópica', 'variación geográfica'),
    V('diastrática', 'diastrática', 'variación social'),
    V('diafásica', 'diafásica', 'variación por situación'),
    V('estilística', 'estilística', 'variación por estilo'),
    V('registro', 'registro', 'nivel de formalidad'),
    V('coloquial', 'coloquial', 'registro de la conversación'),
    V('formal', 'formal', 'registro escrito y solemne'),
    V('arcaísmo', 'arcaísmo', 'forma de un tiempo anterior'),
    V('fores', 'fores', 'condicional arcaico de Juan 3, 21'),
    V('autocarro', 'autocarro', 'forma portuguesa de {autobús}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'La variación {diatópica} es geográfica: en Portugal, {autocarro} donde en Brasil se dice {autobús}, y ninguna de las dos formas está mal.',
      ),
    },
    {
      n: '§2',
      text: T(
        'La variación {diastrática} es social, y lo que cambia es el {registro}: en {Venid} de un rey y en {ven} de un amigo, la forma es la misma y el tono cambia.',
      ),
    },
    {
      n: '§3',
      text: T(
        'La variación {diafásica} es la del hablante en una situación: en {Está bien} para el médico y en {¿Qué tal?} para un amigo, el mismo sentido recibe formas distintas.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Una forma {arcaica} no es un error: en {Él os hablando, así}, el {hablando} es {gerundio} y no {participio}, y la forma es la del portugués antiguo.',
      ),
    },
    {
      n: '§5',
      text: T(
        'La prueba para distinguir {arcaísmo} de {error} es el uso: si la forma aparece en tres traducciones antiguas y en ningún texto contemporáneo, es un {arcaísmo}.',
      ),
    },
  ],
  notes: [
    {
      label: T('La forma antigua que aporta énfasis'),
      text: T(
        'El {fueres} de Juan 3, 21 no es una forma que el portugués dejó de usar por descuido: marca el tiempo del verbo principal en una lectura antigua, y el griego {ἐάν τις ἰδίῳ αὐτοῦ τηρῇ} usa el {ἐάν}, que es condicional. Donde la traducción antigua escribe {fueres}, está marcando algo que el {se} del portugués actual no marca, y por eso la forma antigua no es simplemente superflua.',
      ),
    },
    {
      label: T('Lo que no es variación sino error'),
      text: T(
        'No toda forma distinta es variación: si un texto moderno emplea {vos} en un contexto donde la norma del siglo no lo usaba, eso es un {error} de edición, no {diatopía}. El criterio es el uso documentado del período, y por eso leer un texto antiguo exige saber en qué siglo se escribió.',
      ),
    },
  ],
  examples: [
    {
      text: 'Se tu fores perfeito',
      gloss: T('{fueres} es el condicional arcaico de Juan 3, 21, y no una forma común.'),
    },
    {
      text: 'Vinde e segui-me',
      gloss: T(
        '{Venid} es el imperativo de {venir}, y también el tratamiento antiguo que el portugués actual perdió.',
      ),
    },
    {
      text: 'o pão da vida',
      gloss: T(
        '{Pan} viene del latín {panis}, y el plural {panes} es un arcaísmo de número, no un error.',
      ),
    },
    {
      text: 'o Filho do Homem',
      gloss: T(
        'El {o} antes de {Hijo} es la forma del griego {τοῦ υἱοῦ}, que el portugués antiguo traducía literalmente.',
      ),
    },
    {
      text: '{autocarro}, {ônibus}',
      gloss: T(
        'Forma {diatópica}: {autocarro} en Portugal y {autobús} en Brasil, sin que ninguna esté mal.',
      ),
    },
    {
      text: 'Oxalá',
      gloss: T(
        'Forma {arcaica} todavía viva en el habla: significa {ojalá que}, y el uso actual es más raro.',
      ),
    },
    {
      text: 'Está bom, disse o médico',
      gloss: T(
        'Registro {formal} con el médico y registro {coloquial} con un amigo, el mismo día.',
      ),
    },
    {
      text: 'Vós estais salvos',
      gloss: T('Forma bíblica de tratamiento, que la norma actual solo usa en el sur de Europa.'),
    },
    {
      text: 'Κύριε, σῶσον',
      gloss: T(
        'La forma griega {κύριε} es vocativo, y el portugués antiguo escribía {Señor} con mayúscula.',
      ),
    },
  ],
  tables: [
    {
      caption: T('Los cuatro tipos de variación'),
      head: [T('Tipo'), T('O que varia'), T('Exemplo'), T('Onde se nota')],
      rows: [
        [T('{diatópica}'), T('o lugar'), T('{autocarro}, {ônibus}'), T('Portugal contra o Brasil')],
        [T('{diastrática}'), T('o grupo social'), T('{tu}, {vós}'), T('família contra escola')],
        [T('{diafásica}'), T('a situação'), T('{Está bem}, {E aí}'), T('médico contra amigo')],
        [T('{estilística}'), T('o estilo'), T('{em uso}'), T('literário contra técnico')],
      ],
    },
    {
      caption: T('Arcaísmo y error: lo que los separa'),
      head: [T('Caso'), T('O que é'), T('Exemplo'), T('Veredito')],
      rows: [
        [T('{forma antiga viva}'), T('arcaísmo'), T('{vós}, {fores}'), T('não corrigir')],
        [
          T('{forma de outro dialeto}'),
          T('diatopia'),
          T('{ônibus} em Portugal'),
          T('não corrigir'),
        ],
        [
          T('{forma de nenhum período}'),
          T('erro de publicação'),
          T('{nós} no texto grego'),
          T('corrigir'),
        ],
        [
          T('{forma do tradutor}'),
          T('opção de tradução'),
          T('{carne} por {corpo}'),
          T('decidir pela força'),
        ],
        [
          T('{desvio de sentido}'),
          T('erro de tradução'),
          T('{verbo} trocado por {substantivo}'),
          T('corrigir'),
        ],
      ],
    },
    {
      caption: T('Registros y lo que cada uno espera'),
      head: [T('Registro'), T('Pessoa'), T('Tratamento'), T('Exemplo')],
      rows: [
        [T('{coloquial}'), T('intima'), T('{tu}'), T('Ei, vem cá}')],
        [T('{familiar}'), T('família'), T('{você}'), T('Vemhere,}')],
        [T('{formal}'), T('instituição'), T('{você}'), T('Solicito a presença')],
        [T('{literário}'), T('texto antigo'), T('{tu} ou {vós}'), T('Amigo, chamado Senhor')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Si tú fuere perfecto}, la forma {fueres} es:'),
    options: [
      T('un arcaísmo, no un error: es el condicional del portugués antiguo'),
      T('un error de tipeo, porque {fueres} no existe'),
      T('un dialecto aún hablado en el Norte'),
      T('un error de régimen, porque se cambió el verbo {ser}'),
    ],
    answer: 0,
    hint: T('La forma aparece en traducciones antiguas y en ninguna contemporánea: es arcaísmo.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('La variación entre {autocarro} y {autobús} es:'),
      options: [
        T('diatópica, porque cambia con el lugar'),
        T('diastrática, porque cambia con la clase social'),
        T('diafásica, porque cambia con la situación'),
        T('estilística, porque cambia con el estilo'),
      ],
      answer: 0,
      hint: T('Lo que cambia aquí es el país de quien habla.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada caso con el veredicto correcto.'),
      pairs: [
        { a: T('{vos} en una traducción antigua'), b: T('arcaísmo, no corregir') },
        { a: T('{fueres} en Juan 3, 21'), b: T('arcaísmo que aporta énfasis') },
        { a: T('{autobús} en Portugal'), b: T('diatopía, no corregir') },
        { a: T('una forma que no es de ningún período'), b: T('error de edición') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('La variación que cambia con el {lugar} del hablante es la ______.'),
      answer: 'diatópica',
      hint: T('{autocarro} frente a {autobús}.'),
    },
  ],
};
