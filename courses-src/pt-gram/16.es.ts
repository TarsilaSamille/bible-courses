import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  section: T('A flexão da palavra e a concordância'),
  title: T('Los verbos esenciales'),
  subtitle: T(
    'Los irregulares que sostienen casi todo el texto: {ir}, {vir}, {ser}, {estar}, {ter}, {fazer}, {dizer}',
  ),
  body: C(`**Visão geral.** Un verbo regular se flexiona por terminación: en {criou}, {cria} y {criaram}, el radical {cria-} es constante y solo cambia {-ou}. Un verbo irregular no tiene radical constante ninguno, y por eso no se aprende por regla, sino entero.

Son pocos y pesan mucho. {ser}, {estar}, {ter}, {haver}, {ir}, {vir}, {ver}, {fazer}, {dizer}, {saber}, {poder} y {querer} cubren casi todas las oraciones que dicen algo de alguien. Los demás irregulares se agrupan por radical: {dormir}, {morrer}, {partir} y {abrir} pierden la {i} en el participio, y eso es un problema mucho menor.

**Regra 1.** Los irregulares del presente son doce series de formas que hay que memorizar: {sou, és, é, somos, são}, {estou, estás, está, estamos, estão}, {tenho, tens, tem, temos, têm}, {vou, vais, vai, vamos, vão}, {venho, vens, vem, viemos, vêm}, {faço, fazes, faz, fazemos, fazem}, {digo, dizes, diz, dizemos, dizem}, {vejo, vês, vê, vemos, veem}, {sei, sabes, sabe, sabemos, sabem}, {posso, podes, pode, podemos, podem}, {quero, queres, quer, queremos, querem} y {há} con {hei}. Es la lista más larga y más usada de la lengua.

**Regra 2.** Dos formas pertenecen a dos verbos. {fui} es de {ser} y de {ir}: en {Eu fui ao templo} el verbo es {ir}, en {Eu fui fiel} es {ser}, y la forma no dice cuál. {vou} es {ir} en primera persona del presente y también {ir} más infinitivo: {vou partir} es futuro, {vou à cidade} es presente, y lo que va después del verbo es lo que separa los dos usos.

**Regra 3.** El imperativo de {tu} pierde la {s} final en tres verbos: {vai}, {vê} y {diz}. El portugués antiguo y el portugués de Europa conservan la {s} en {vais}, {ves} y {dizes}, y esa es la forma que usa Almeida. En {Vai e diz a eles}, {vai} y {diz} son formas verbales de segunda persona, modo imperativo, tiempo presente.

**Regra 4.** {estar} tiene pretérito propio: {estive, estiveste, esteve, estivemos, estiveram}. {Eu estive lá} y {Eu fui lá} no son sinónimos, y el segundo es {ir}. {ser} y {fazer} sí comparten el pretérito, y {fora} es la tercera persona de los dos: {ela fora útil} es {ser}, {ela fora a obra} es {fazer}.

**Aplicação.** En {No princípio {era} o Verbo, e o Verbo {estava} com Deus, e o Verbo {era} Deus}, hay cuatro verbos esenciales en una frase. {era} dos veces, de {ser} en imperfecto, y {estava}, de {estar} en imperfecto. El griego tiene un solo verbo, {ἦν}, y la traducción partió uno en dos; la distinción que el portugués de Brasil establece entre {ser} y {estar} es reciente y no estaba disponible para quien tradujo.

**Verificação.** Ante una forma irregular, pregunta: ¿cuál es el **radical** ({vou}, {venho})? ¿En qué **tiempo** está ({fui}, {vou}, {vai})? ¿La **persona** es {tu}, {ele} o {eles}? ¿La forma es **común** o **exclusiva de un verbo**, como {estive}? ¿Y la **oración** lo confirma? Sin la última pregunta, {fui} sigue sin dueño.`),
  vocab: [
    V('ir', 'ir', 'verbo de movimiento'),
    V('vir', 'vir', 'verbo de movimiento'),
    V('ser', 'ser', 'verbo de identidad'),
    V('estar', 'estar', 'verbo de estado'),
    V('ter', 'ter', 'verbo de posesión'),
    V('haver', 'haver', 'verbo de existencia y de tiempo'),
    V('fazer', 'fazer', 'verbo de acción'),
    V('dizer', 'dizer', 'verbo de habla'),
    V('ver', 'ver', 'verbo de percepción'),
    V('saber', 'saber', 'verbo de conocimiento'),
    V('poder', 'poder', 'verbo de posibilidad'),
    V('querer', 'querer', 'verbo de voluntad'),
    V('fui', 'ser', 'forma de {ser} y de {ir}'),
    V('estive', 'estar', 'pretérito de {estar}'),
    V('vai', 'ir', 'presente e imperativo de {ir}'),
    V('diz', 'dizer', 'presente e imperativo de {dizer}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Los doce irregulares del presente son {sou}, {estou}, {tenho}, {vou}, {venho}, {faço}, {digo}, {vejo}, {sei}, {posso}, {quero} y {há}. Ninguno se deduce de otro.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{fui} pertenece a {ser} y a {ir}: {Eu fui ao templo} es {ir}, {Eu fui fiel} es {ser}. {vou} es {ir} en primera persona y {ir} más infinitivo, y lo que va después del verbo separa los dos usos.',
      ),
    },
    {
      n: '§3',
      text: T(
        'El imperativo de {tu} de {ir}, {ver} y {dizer} es {vai}, {vê} y {diz}, sin la {s}. Con la {s} ({vais}, {ves}, {dizes}) es la forma del portugués antiguo y de Almeida.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{estar} en el pretérito es {estive}, {estiveste}, {esteve}, y nunca {fui}: {Eu estive lá} es {estar}, {Eu fui lá} es {ir}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'En {No princípio era o Verbo}, los dos {era} son de {ser} y el {estava} es de {estar}. El griego tiene un solo verbo, {ἦν}, y la partición en dos es portuguesa.',
      ),
    },
  ],
  notes: [
    {
      label: T('El {fora} que sirve a dos verbos'),
      text: T(
        '{fora} es la tercera persona del pretérito tanto de {ser} ({ela fora útil}) como de {fazer} ({ela fora a obra}). En las traducciones antiguas el verbo {fazer} seguido de {obras} aparece casi tanto como el sustantivo, y tratar {fora} como {ser} cambia lo que la oración dice que ocurrió.',
      ),
    },
    {
      label: T('{ser} en pasado con numeral'),
      text: T(
        'En portugués antiguo, {ser} en pasado delante de un numeral expresa la suma: {fora cinquenta}, "cincuenta". De ahí que el latín {fuit} aparezca en los Salmos antes de cualquier sustantivo. El numeral va antes de lo que nombra, y es la forma del verbo la que lo revela.',
      ),
    },
  ],
  examples: [
    {
      text: 'No princípio era o Verbo.',
      gloss: T('{era}: {ser} en imperfecto, 3.ª del singular.'),
    },
    {
      text: 'O Verbo estava com Deus.',
      gloss: T('{estava}: {estar} en imperfecto, 3.ª del singular.'),
    },
    { text: 'Eu fui ao templo.', gloss: T('{fui} de {ir}: el lugar responde a {¿adónde?}.') },
    { text: 'Eu fui fiel.', gloss: T('{fui} de {ser}: lo que se afirma es una cualidad.') },
    {
      text: 'Eu estive com eles.',
      gloss: T('{estive} es de {estar}, y el lugar es el mismo que el de {fui}.'),
    },
    { text: 'Vai e diz a eles.', gloss: T('Dos imperativos de {tu} sin la {s}, como en Almeida.') },
    { text: 'vou partir', gloss: T('{ir} más infinitivo: valor de futuro.') },
    { text: 'Haja luz.', gloss: T('{haja} es el subjuntivo de {haver}, Gn 1:3.') },
    {
      text: 'Não tenho mais nada.',
      gloss: T('{tenho} en presente; en pretérito sería {não tive}.'),
    },
  ],
  tables: [
    {
      caption: T('Los irregulares del presente, persona por persona'),
      head: [T('Verbo'), T('1.ª sing.'), T('3.ª sing.'), T('1.ª pl.'), T('3.ª pl.')],
      rows: [
        [T('{ser}'), T('{sou}'), T('{é}'), T('{somos}'), T('{são}')],
        [T('{estar}'), T('{estou}'), T('{está}'), T('{estamos}'), T('{estão}')],
        [T('{ter}'), T('{tenho}'), T('{tem}'), T('{temos}'), T('{têm}')],
        [T('{ir}'), T('{vou}'), T('{vai}'), T('{vamos}'), T('{vão}')],
        [T('{vir}'), T('{venho}'), T('{vem}'), T('{viemos}'), T('{vêm}')],
        [T('{fazer}'), T('{faço}'), T('{faz}'), T('{fazemos}'), T('{fazem}')],
        [T('{dizer}'), T('{digo}'), T('{diz}'), T('{dizemos}'), T('{dizem}')],
        [T('{ver}'), T('{vejo}'), T('{vê}'), T('{vemos}'), T('{veem}')],
      ],
    },
    {
      caption: T('El pretérito de los mismos'),
      head: [T('Verbo'), T('1.ª sing.'), T('3.ª sing.'), T('1.ª pl.'), T('3.ª pl.')],
      rows: [
        [T('{ser}'), T('{fui}'), T('{foi}'), T('{fomos}'), T('{foram}')],
        [T('{ir}'), T('{fui}'), T('{foi}'), T('{fomos}'), T('{foram}')],
        [T('{estar}'), T('{estive}'), T('{esteve}'), T('{estivemos}'), T('{estiveram}')],
        [T('{ter}'), T('{tive}'), T('{teve}'), T('{tivemos}'), T('{tiveram}')],
        [T('{fazer}'), T('{fiz}'), T('{fez}'), T('{fizemos}'), T('{fizeram}')],
        [T('{dizer}'), T('{disse}'), T('{disse}'), T('{dissemos}'), T('{disseram}')],
      ],
    },
    {
      caption: T('Imperativo de {tu}: dónde desaparece la {s}'),
      head: [T('Verbo'), T('Almeida'), T('Portugués europeo'), T('Erro comum no Brasil')],
      rows: [
        [T('{ir}'), T('{vai}'), T('{vais}'), T('Com {s}')],
        [T('{ver}'), T('{vê}'), T('{ves}'), T('Com {s}')],
        [T('{dizer}'), T('{diz}'), T('{dizes}'), T('Com {s}')],
        [T('{fazer}'), T('{faz}'), T('{fazes}'), T('Com {s}')],
        [T('{comer}'), T('{come}'), T('{comes}'), T('Com {s}')],
        [T('{dar}'), T('{dá}'), T('{dás}'), T('Com {s}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Eu fui ao templo}, el verbo {fui} es:'),
    options: [
      T('{ir}, porque hay un lugar de destino'),
      T('{ser}, porque es pretérito'),
      T('{ir} y {ser} a la vez, sin manera de decidir'),
      T('{ficar}, por causa de {templo}'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('El pretérito de {estar} en primera persona del singular es ______.'),
      answer: 'estive',
      hint: T('No es {fui}: {fui} es de {ser} y de {ir}.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la forma con el verbo irregular que la produce.'),
      pairs: [
        { a: T('{viemos}'), b: T('{vir}') },
        { a: T('{fiz}'), b: T('{fazer}') },
        { a: T('{disse}'), b: T('{dizer}') },
        { a: T('{estivemos}'), b: T('{estar}') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es el imperativo de {tu} de {ir} en Almeida?'),
      options: [T('{vais}'), T('{vai}'), T('{vá}'), T('{vou}')],
      answer: 1,
      hint: T('Tres verbos pierden la {s} final, e {ir} es uno de ellos.'),
    },
  ],
};
