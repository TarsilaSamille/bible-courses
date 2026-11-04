import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  section: T('El verbo: forma y tiempo'),
  title: T('Los verbos esenciales del texto bíblico'),
  subtitle: T(
    '{ir}, {vir}, {ser}, {estar}, {ter}, {fazer}, {dizer}: los siete que sostienen casi toda oración',
  ),
  body: C(`## El tema que sostiene casi todo

Un tema regular en {-ar}, {-er} o {-ir} sirve para mucho, porque la terminación hace el resto. Un tema irregular no sirve para nada: {ser}, {ter}, {ir}, {ver}, {fazer}, {dizer} y {saber} hay que aprendarlos uno por uno, y ninguno produce a los demás.

Es un número pequeño para el peso que tiene. En los Salmos y en los Evangelios, casi toda oración que dice algo de alguien pasa por uno de estos siete. Quien los tiene resuelve la mitad del texto antes de mirar la sintaxis.

El precio es que no forman sistema. Ninguna regla produce {fiz} a partir de {fazer}, ni {disse} a partir de {dizer}. La forma {faze}, que sobrevive en el portugués antiguo y en el portugués de Europa, es resto de eso, y quien lea una traducción antigua se la va a encontrar.

## {ser} y {estar}: una distinción que inventó el portugués moderno

El portugués tiene dos verbos donde el griego y el hebreo del texto antiguo tienen uno. {εἰμί} y {ἦν} se volvieron {ser} y {estar}, y la regla que sigue el portugués de Brasil es esta: {ser} para lo que el sujeto es, {estar} para el estado en que se encuentra.

{Deus é amor} (1 Juan 4:8) usa {ser}, porque lo que se afirma es lo que Dios es. {Jesus está na sinagoga} usaría {estar}, porque lo que se afirma es dónde está. La elección no es de estilo: es la diferencia entre una identidad y una circunstancia.

El problema es que esa regla es muy reciente, y el portugués antiguo casi no la tiene. Juan 1:1 da {era}, {estava} y {era} en una sola frase:

{No principio {era} o Verbo, e o Verbo {estava} com Deus, e o Verbo {era} Deus.}

El {era} de la primera y de la tercera posición es {ser}; el del medio es {estar}. La traducción no está aplicando la regla del portugués de Brasil, está transmitiendo el griego, donde los tres son la misma palabra en tiempos distintos. Traducir los dos {era} por {era} y el {estava} por {estava} mantiene la cadena; poner el tercero en {estava} produciría "y el Verbo estaba Dios", que está mal por construcción.

## {ir} y {vir}: la pareja que se completa y el imperativo que todos aprenden mal

{ir} y {vir} son la pareja más fácil de confundir y la más fácil de equivocar en la forma. {ir} da {vou}, {vais}, {vai}, {vamos}, {vão}, y {vir} da {venho}, {vens}, {vem}, {viemos}, {vêm}. La asimetría es la pista: {ir} pierde la {r} y gana {v}, {vir} cambia la {r} por {n}.

En el pretérito las dos resuelven una pregunta que parece error y no lo es: {fui} es de {ser} y de {ir}, y el contexto dice cuál. {Eu fui ao templo} trae {ir}; {Eu fui bom} trae {ser}.

El imperativo de {tu} de {ir}, {ver} y {dizer} es **{vai}**, **{vê}** y **{diz}**, sin {s}. El portugués antiguo y el portugués de Europa conservan la {s}: {vais}, {ves}, {dizes}. Quien lea la Almeida con el oído del portugués de Brasil oye un error donde no lo hay; quien escribe por el instinto de {vai} y {diz} acierta el texto bíblico y le suena raro el {vós}.

Los pretéritos de {ir} y {vir} son la pareja más corta de la lengua: {fui}, {fomos}, {foram}, y {vim}, {viemos}, {vieram}. Quien se ha memorizado dos verbos se ha memorizado la mitad del pretérito irregular.

## En la Biblia, y cómo leer

Génesis 1:3 tiene {Haja luz}, y {haja} es el subjuntivo de {haver}, no de {ser}. Es el primer verbo de la narración y sigue siendo el más extraño para quien viene del portugués corriente, donde {haver} casi no aparece.

En cualquier versículo, pregunta cuál de los verbos esenciales ha entrado: si la forma es {foi} o {vi} o {disse}, el verbo es irregular y la forma exacta es lo que cuenta; si es {havia}, el verbo es {haver} y el tiempo es el imperfecto; si es {está} o {estava}, la elección entre {ser} y {estar} ya está hecha por la forma.`),
  vocab: [
    V('era', 'ser', 'él era (imperfecto de ser)'),
    V('fui', 'ser', 'yo fui (de ser o de ir)'),
    V('fomos', 'ser', 'nosotros fuimos (de ser o de ir)'),
    V('seja', 'ser', 'que sea (subjuntivo de ser)'),
    V('estava', 'estar', 'él estaba (imperfecto de estar)'),
    V('estive', 'estar', 'yo estuve (pretérito de estar)'),
    V('havia', 'haver', 'había (de haber)'),
    V('vou', 'ir', 'yo voy (de ir)'),
    V('vou partir', 'ir', 'voy a salir'),
    V('vim', 'vir', 'yo vine (de venir)'),
    V('vieram', 'vir', 'ellos vinieron'),
    V('faz', 'fazer', 'él hace'),
    V('diz', 'dizer', 'él dice'),
    V('vê', 'ver', 'él ve'),
    V('come', 'comer', 'él come'),
    V('haja', 'haver', 'que haya'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{fui} y {fomos} sirven a {ser} y a {ir}: {Eu fui ao templo} es {ir}, {Eu fui bom} es {ser}, y la forma no dice cuál.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{estar} en el pretérito es {estive}, {estiveste}, {esteve}. {Eu estive lá} y {Eu fui lá} no son sinónimos, y el segundo es {ir}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'El imperativo de {tu} sin {s} final en {ir}, {ver} y {dizer}: {vai}, {vê}, {diz}. Con {s} es el portugués antiguo: {vais}, {ves}, {dizes}.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{vou} es {ir} en primera persona y {ir} más infinitivo: {vou à cidade} va, {vou partir} va a hacer. Lo que va después del verbo es lo que los separa.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Juan 1:1 trae {era}, {estava} y {era}. Los dos {era} son de {ser} y el del medio es de {estar}; la distinción viene del griego, no de la regla brasileña de {ser} y {estar}.',
      ),
    },
  ],
  notes: [
    {
      label: T('El {fora} que sirve a dos verbos'),
      text: T(
        '{fora} es la tercera persona del pretérito tanto de {ser} ({ela fora útil}) como de {fazer} ({ela fora a obra}). En las traducciones más antiguas el verbo {fazer} con {obras} aparece casi tanto como el sustantivo, y leer {fora} como {ser} cambia la acción.',
      ),
    },
    {
      label: T('{ser} que cuenta'),
      text: T(
        'En portugués antiguo {ser} en pasado con numeral da la suma: {fora cinquenta}, "cincuenta". Por eso el latín {fuit} aparece en los Salmos antes de cualquier sustantivo. El número va antes de lo que nombra, y es la forma del verbo la que lo marca.',
      ),
    },
  ],
  examples: [
    {
      text: 'No princípio era o Verbo.',
      gloss: T('Imperfecto de {ser}: lo que ya valía antes de que empezara nada.'),
    },
    {
      text: 'O Verbo estava com Deus.',
      gloss: T('Imperfecto de {estar}: dónde estaba, no lo que era.'),
    },
    {
      text: 'O Verbo era Deus.',
      gloss: T('Imperfecto de {ser} otra vez, y la afirmación es sobre lo que es.'),
    },
    { text: 'Haja luz.', gloss: T('Subjuntivo de {haver}, Gn 1:3.') },
    { text: 'Eu fui à cidade.', gloss: T('Pretérito de {ir}.') },
    { text: 'Eu fui chamado.', gloss: T('Pretérito de {ser}, y la forma es idéntica.') },
    {
      text: 'Eu estive com eles.',
      gloss: T('Pretérito de {estar}: mismo lugar, estado pasajero.'),
    },
    {
      text: 'Vai e diz a eles.',
      gloss: T('Imperativo de {tu} sin {s}, como en el griego y en Almeida.'),
    },
    {
      text: 'A luz brilha nas trevas.',
      gloss: T('Presente de {brilhar}, lo que está pasando en escena (Jn 1:5).'),
    },
    {
      text: 'Não tive mais nada.',
      gloss: T('Pretérito de {ter}: el presente {tenho} no lo sustituye.'),
    },
  ],
  tables: [
    {
      caption: T('Los ocho irregulares del presente'),
      head: ['Infinitivo', 'eu', 'ele', 'nós', 'eles'],
      rows: [
        ['ir', 'vou', 'vai', 'vamos', 'vão'],
        ['vir', 'venho', 'vem', 'viemos', 'vêm'],
        ['ser', 'sou', 'é', 'somos', 'são'],
        ['estar', 'estou', 'está', 'estamos', 'estão'],
        ['ter', 'tenho', 'tem', 'temos', 'têm'],
        ['fazer', 'faço', 'faz', 'fazemos', 'fazem'],
        ['dizer', 'digo', 'diz', 'dizemos', 'dizem'],
        ['ver', 'vejo', 'vê', 'vemos', 'veem'],
      ],
    },
    {
      caption: T('Los mismos en pretérito'),
      head: ['Infinitivo', 'eu', 'ele', 'nós', 'eles'],
      rows: [
        ['ir', 'fui', 'foi', 'fomos', 'foram'],
        ['ser', 'fui', 'foi', 'fomos', 'foram'],
        ['estar', 'estive', 'esteve', 'estivemos', 'estiveram'],
        ['ter', 'tive', 'teve', 'tivemos', 'tiveram'],
        ['fazer', 'fiz', 'fez', 'fizemos', 'fizeram'],
        ['dizer', 'disse', 'disse', 'dissemos', 'disseram'],
        ['ver', 'vi', 'viu', 'vimos', 'viram'],
      ],
    },
    {
      caption: T('El imperativo de {tu} y el error de la {s}'),
      head: ['Infinitivo', 'Almeida', 'Erro do brasileiro'],
      rows: [
        ['ir', 'vai', 'vais'],
        ['ver', 'vê', 'ves'],
        ['dizer', 'diz', 'dizes'],
        ['fazer', 'faz', 'fazes'],
        ['comer', 'come', 'comes'],
        ['ser', 'sê', 'ses'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En "o Verbo estava com Deus", ¿qué verbo y qué tiempo?'),
    options: [
      T('{ser}, presente'),
      T('{estar}, imperfecto'),
      T('{ir}, pretérito'),
      T('{ter}, perfecto'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "e o Verbo ___ Deus" con {ser} en imperfecto.'),
      answer: 'era',
    },
    {
      kind: 'match',
      prompt: T('Relaciona la forma con el verbo'),
      pairs: [
        { a: T('{estive}'), b: T('{estar}') },
        { a: T('{disse}'), b: T('{dizer}') },
        { a: T('{fiz}'), b: T('{fazer}') },
        { a: T('{viemos}'), b: T('{vir}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué oración usa {estar} con el valor correcto?'),
      options: [
        T('Deus está amor.'),
        T('O Verbo está com Deus.'),
        T('Jesus está Deus.'),
        T('O templo está em Getsêmani.'),
      ],
      answer: 1,
    },
  ],
};
