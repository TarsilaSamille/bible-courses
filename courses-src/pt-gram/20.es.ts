import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  section: T('La regencia, la crasis y la colocación pronominal'),
  title: T('Colocación pronominal en detalle'),
  subtitle: T('Aplicación de proclisis, enclisis y mesoclisis'),
  body: C(`**Visión general.** La {palabra que atrae} determina la proclisis, y son cinco los tipos que atraen al pronombre: {negación}, {interrogación}, {relativo}, {conjunción} y {pronombre}.

**Regla 1.** Verbos como {dar}, {hacer} y {traer} exigen {enclisis} incluso con un elemento atractivo detrás: en {Dios me dio}, el pronombre queda después del verbo porque el verbo manda.

**Regla 2.** La {mesoclisis} solo existe con infinitivo y auxiliar: en {dirme-ás} y {amarlo-emos}, el pronombre queda entre las dos partes de la locución.

**Regla 3.** El {se} de cliticización es el pronombre oblicuo del verbo: en {lavó-se}, el {se} viene de {lavar}, y el verbo ya es pronominal por naturaleza.

**Regla 4.** El griego resuelve el mismo problema por {enclisis} y por la terminación del verbo, y por eso la posición griega y la portuguesa rara vez coinciden.

**Aplicación.** En {Dirme-ás que esto es suave}, la mesoclisis {dirme-ás} es futuro de indicativo, y el pronombre está dentro del verbo. En el griego original (διελθόντες), el pronombre {αὐτόν} viene enclítico, pegado al participio, y la posición griega es siempre posverbal. La mesoclisis portuguesa es una solución a un problema que el griego no tenía: es el portugués el que tiene que acomodar dos verbos en un solo sitio.

**Verificación.** Para un pronombre, pregunta en orden: ¿hay **negación**, **interrogación** o **conjunción** antes del verbo? ¿Hay otro pronombre? ¿El verbo es de los de **enclisis obligatoria**? Si la respuesta es no a las tres y el verbo es un auxiliar de futuro, la {mesoclisis} es posible. Y en cualquier caso, la posición no es libre: la decide la estructura sintáctica, y no la fluidez del hablante.`),
  vocab: [
    V('palavra atrativa', 'palavra atrativa', 'palabra que provoca proclisis'),
    V('verbo conjugado', 'verbo conjugado', 'verbo con persona y número'),
    V('locução verbal', 'locução verbal', 'infinitivo más auxiliar'),
    V('próclise', 'próclise', 'pronombre antes del verbo'),
    V('ênclise', 'ênclise', 'pronombre después del verbo'),
    V('mesóclise', 'mesóclise', 'pronombre entre infinitivo y auxiliar'),
    V('dir-me-ás', 'dir-me-ás', 'mesoclisis con auxiliar {ás}'),
    V('não me veja', 'não me veja', 'proclisis por causa de {no}'),
    V('dir-me', 'dir-me', 'mesoclisis con auxiliar {r}'),
    V('διελθόντες', 'διελθόντες', 'participio griego con pronombre enclítico'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'La {palabra que atrae} determina la proclisis, y son cinco los tipos que atraen al pronombre: {negación}, {interrogación}, {relativo}, {conjunción} y {pronombre}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Verbos como {dar}, {hacer} y {traer} exigen {enclisis} incluso con un elemento atractivo detrás: en {Dios me dio}, el pronombre queda después del verbo porque el verbo manda.',
      ),
    },
    {
      n: '§3',
      text: T(
        'La {mesoclisis} solo existe con infinitivo y auxiliar: en {dirme-ás} y {amarlo-emos}, el pronombre queda entre las dos partes de la locución.',
      ),
    },
    {
      n: '§4',
      text: T(
        'El {se} de cliticización es el pronombre oblicuo del verbo: en {lavó-se}, el {se} viene de {lavar}, y el verbo ya es pronominal por naturaleza.',
      ),
    },
    {
      n: '§5',
      text: T(
        'El griego resuelve el mismo problema por {enclisis} y por la terminación del verbo, y por eso la posición griega y la portuguesa rara vez coinciden.',
      ),
    },
  ],
  notes: [
    {
      label: T('El arcaísmo que la Escritura conserva'),
      text: T(
        'Las traducciones bíblicas en portugués antiguo conservan formas como {dirme-ás} y {hablarte-ei}, que el uso corriente abandonó. No es error: es el registro de una lengua que aún no había perdido la {mesoclisis}. Quien lee esas formas como error de tipeo pierde la información de que el texto es antiguo, y la información está en el propio texto.',
      ),
    },
    {
      label: T('El {se} que no es el {se} de la crasis'),
      text: T(
        'En {hablarse}, el {se} es pronombre oblicuo: la {a} de la preposición y el {o} del artículo se fusionaron, y quedó el {se} del verbo. En {la casa}, la {a} es artículo y no tiene nada que ver con un pronombre. Hay tres apariciones de {a} en una sola oración, y cada una hace un trabajo distinto.',
      ),
    },
  ],
  examples: [
    {
      text: 'Dir-me-ás que isto é suave',
      gloss: T('Mesoclisis: el pronombre queda entre {dir} y {ás}.'),
    },
    {
      text: 'falar-te-ei',
      gloss: T('Mesoclisis con el auxiliar {-ei}: el pronombre queda dentro de la locución.'),
    },
    {
      text: 'não me veja',
      gloss: T('Proclisis: la palabra que atrae {no} atrae al pronombre hacia delante.'),
    },
    {
      text: 'Deus me deu',
      gloss: T(
        'Enclisis obligatoria: el verbo {dio} exige el pronombre después, incluso con el sujeto delante.',
      ),
    },
    {
      text: 'Quem me viu disse',
      gloss: T('El pronombre interrogativo {Quién} provoca la proclisis de {me}.'),
    },
    {
      text: 'viu-me',
      gloss: T('Enclisis: sin elemento atractivo, el pronombre va después del verbo {vio}.'),
    },
    {
      text: 'lavou-se',
      gloss: T('El {se} es pronombre oblicuo del verbo {lavar}, y la forma es pronominal.'),
    },
    {
      text: 'amemo-nos',
      gloss: T('La misma locución escrita sin diéresis: {amémonos} es la forma tradicional.'),
    },
    {
      text: 'διελθόντες',
      gloss: T('Participio griego: el pronombre enclítico va después de la palabra acentuada.'),
    },
  ],
  tables: [
    {
      caption: T('Verbos que exigen el pronombre después'),
      head: [T('Grupo'), T('Verbos'), T('Com {não}'), T('Sem {não}')],
      rows: [
        [
          T('com objeto direto'),
          T('{dar}, {ver}, {fazer}'),
          T('{Deus não me deu}'),
          T('{Deus me deu}'),
        ],
        [T('com objeto indireto'), T('{falar}, {responder}'), T('{não me falou}'), T('{falou-me}')],
        [T('com os dois objetos'), T('{trazer}'), T('{não me trouxe}'), T('{trouxe-me}')],
        [T('com infinitivo'), T('{deixar}, {ver}'), T('{não me deixou}'), T('{deixou-me}')],
        [T('com locução'), T('{ir}, {vir}'), T('{não me vejo}'), T('{vou-me}')],
        [T('com {se} próprio'), T('{lavar-se}'), T('{não se lavou}'), T('{lavou-se}')],
      ],
    },
    {
      caption: T('Posición del pronombre por tiempo'),
      head: [T('Tempo'), T('Com auxiliar'), T('Sem auxiliar'), T('Posição')],
      rows: [
        [T('presente'), T('{está falando}'), T('{fala}'), T('ênclise')],
        [T('pretérito'), T('{havia falado}'), T('{falou}'), T('ênclise')],
        [T('futuro'), T('{vai falar}'), T('{falará}'), T('mesóclise possível')],
        [T('infinitivo'), T('{dizer}'), T('{dir}'), T('mesóclise com {r}')],
        [T('gerúndio'), T('{está falando}'), T('{falando}'), T('ênclise')],
        [T('particípio'), T('{tendo falado}'), T('{falado}'), T('ênclise')],
      ],
    },
    {
      caption: T('Las cinco palabras que atraen al pronombre'),
      head: [T('Tipo'), T('Palavras'), T('Frase'), T('Posição')],
      rows: [
        [T('negativas'), T('{não}, {nem}, {nunca}'), T('{não me veja}'), T('próclise')],
        [T('interrogativas'), T('{quem}, {qual}, {que}'), T('{Quem me viu}'), T('próclise')],
        [T('relativas'), T('{que}, {o qual}'), T('{a lei que me deram}'), T('próclise')],
        [T('conjunções'), T('{que}, {se}, {como}'), T('{Sei que ele sabe}'), T('próclise')],
        [T('pronomes'), T('{me}, {te}, {nos}'), T('{me diz que sim}'), T('próclise')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Dios me dio}, el pronombre {me} está en enclisis porque:'),
    options: [
      T('el verbo {dio} exige el pronombre después, incluso con el sujeto delante'),
      T('el sujeto {Dios} va primero, y el pronombre sigue al sujeto'),
      T('no hay palabra que atrae antes del verbo'),
      T('el verbo es un auxiliar de futuro'),
    ],
    answer: 0,
    hint: T('Los verbos {dar}, {hacer} y {traer} piden el pronombre después, siempre.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('La mesoclisis solo ocurre:'),
      options: [
        T('con locución verbal, entre el infinitivo y el auxiliar'),
        T('con cualquier verbo en el presente de indicativo'),
        T('con verbo transitivo sin objeto indirecto'),
        T('con la palabra {no} antes del verbo'),
      ],
      answer: 0,
      hint: T('Lo que define la mesoclisis es tener dos verbos en la misma locución.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la oración con la posición del pronombre.'),
      pairs: [
        { a: T('{dirme-ás}'), b: T('mesoclisis') },
        { a: T('{no me vea}'), b: T('proclisis') },
        { a: T('{vio-lo}'), b: T('enclisis') },
        { a: T('{lavó-se}'), b: T('enclisis con {se} pronominal') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('La palabra que provoca la proclisis se llama ______.'),
      answer: 'atrativa',
      hint: T('En {no me vea}, el {no} es la palabra que atrae.'),
    },
  ],
};
