import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  section: T('La flexión de la palabra y la concordancia'),
  title: T('Fonología y acentuación'),
  subtitle: T('Fonemas, sílabas y tonicidad'),
  body: C(`**Visión general.** La {vocal} es el núcleo de la sílaba: en {Dios} el sonido {o} solo forma núcleo; en {Dios} la sílaba {Dios} tiene su núcleo en {io}.

**Regla 1.** La sílaba tónica puede ser la última, la penúltima o la antepenúltima: {casa} es oxítona, {casa} paroxítona y {casa} proparoxítona.

**Regla 2.** El acento es obligatorio en oxítona terminada en {a}, {e}, {o} seguidas de {s}, o {n}: en {pan}, {café}, {sofás}, {patrones}.

**Regla 3.** El acento {diferencial} marca la diferencia entre palabras iguales: en {tem} y {têm}, el acento dice {él tiene} de {ellos tienen}.

**Regla 4.** El griego antiguo marca el acento por la posición, y no por el sonido: {λόγος} es oxítono, {λόγου} paroxítono, y el mismo acento se convierte en acento portugués o no.

**Aplicación.** En {Él tiene razón}, el acento es **diferencial** y está en el verbo {tem}, no en un sustantivo: la misma forma {tem} se escribe {têm} cuando el sujeto es plural. En {La versión 2.0 de Israel}, el {2.0} es un numeral con acento temporal, no un nombre de persona. El griego antiguo **no tenía acento gráfico** como el portugués: la acentuación griega es aditiva y marca el acento con aguda o grave según la sílaba.

**Verificación.** Haz tres preguntas: ¿cuántas sílabas tiene la palabra? ¿La tónica es la última, la penúltima o la antepenúltima? ¿La palabra termina en vocal, {n} o {s}? Con esas tres, el acento obligatorio sale. Y desconfía de una palabra que parece sin acento: si es oxítona terminada en vocal, {n} o {s}, el acento es obligatorio y está ahí.`),
  vocab: [
    V('fonema', 'fonema', 'menor sonido distintivo'),
    V('vogal', 'vogal', 'sonido que forma el núcleo de la sílaba'),
    V('consoante', 'consoante', 'sonido que no forma núcleo solo'),
    V('sílaba', 'sílaba', 'grupo con una vocal como núcleo'),
    V('tônica', 'tônica', 'sílaba de mayor intensidad'),
    V('oxítona', 'oxítona', 'tónica en la última sílaba'),
    V('paroxítona', 'paroxítona', 'tónica en la penúltima sílaba'),
    V('entonação', 'entonação', 'curva de la voz en el habla'),
    V('tem', 'tem', 'tercera del singular, sin acento diferencial'),
    V('têm', 'têm', 'tercera del plural, con acento diferencial'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'La {vocal} es el núcleo de la sílaba: en {Dios} el sonido {o} solo forma núcleo; en {Dios} la sílaba {Dios} tiene su núcleo en {io}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'La sílaba tónica puede ser la última, la penúltima o la antepenúltima: {casa} es oxítona, {casa} paroxítona y {casa} proparoxítona.',
      ),
    },
    {
      n: '§3',
      text: T(
        'El acento es obligatorio en oxítona terminada en {a}, {e}, {o} seguidas de {s}, o {n}: en {pan}, {café}, {sofás}, {patrones}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'El acento {diferencial} marca la diferencia entre palabras iguales: en {tem} y {têm}, el acento dice {él tiene} de {ellos tienen}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'El griego antiguo marca el acento por la posición, y no por el sonido: {λόγος} es oxítono, {λόγου} paroxítono, y el mismo acento se convierte en acento portugués o no.',
      ),
    },
  ],
  notes: [
    {
      label: T('El acento griego que marca posición, no sonido'),
      text: T(
        'El griego antiguo era aditivo: escribía {λόγος} y {λόγου} con el mismo acento porque el tono griego es recesivo y la sílaba final no lleva acento. Quien traduce tiene que decidir si lleva la tonicidad griega al portugués, y casi nunca lo hace: {logos} en portugués pasa a {logotipo} o {Logos}, con el acento al principio. La tonicidad griega es información, y la transcripción la pierde.',
      ),
    },
    {
      label: T('El acento diferencial y lo que salva'),
      text: T(
        'En {Él tiene razón} y {Ellos tienen razón}, solo el acento distingue una oración de la otra, y lo que salva es la información de número del sujeto. Es el único acento del portugués que no marca tonicidad: marca contraste entre dos palabras escritas igual. Todo lo demás de la acentuación griega va sobre dónde golpea la voz; este va sobre quién ejecuta la acción.',
      ),
    },
  ],
  examples: [
    { text: 'casa', gloss: T('Paroxítona: la tónica es la penúltima sílaba, {ca}.') },
    { text: 'cántaro', gloss: T('Proparoxítona: la tónica es la antepenúltima sílaba, {cán}.') },
    { text: 'sofá', gloss: T('Oxítona terminada en {a}: el acento es obligatorio.') },
    { text: 'sofás', gloss: T('Oxítona terminada en {s}: el acento sigue siendo obligatorio.') },
    { text: 'pão', gloss: T('Oxítona terminada en {ão}: el acento va en la {ã} y no en la {o}.') },
    {
      text: 'parcial',
      gloss: T(
        'Paroxítona terminada en {l}: el acento es facultativo y normalmente no se escribe.',
      ),
    },
    {
      text: 'Ele tem razão.',
      gloss: T('Sin acento diferencial: el sujeto es {él}, y la oración es afirmativa.'),
    },
    {
      text: 'Eles têm razão.',
      gloss: T('Acento diferencial presente: el sujeto es {ellos}, y el acento lo dice.'),
    },
    {
      text: 'A versão 2.0 de Israel',
      gloss: T('{2.0} es numeral con acento temporal, no nombre de persona.'),
    },
  ],
  tables: [
    {
      caption: T('Tonicidad y acento'),
      head: [T('Tipo'), T('Onde fica a tônica'), T('Acento'), T('Exemplo')],
      rows: [
        [T('{oxítona}'), T('última sílaba'), T('nem sempre'), T('{sofá}')],
        [T('{paroxítona}'), T('penúltima sílaba'), T('às vezes'), T('{parcial}')],
        [T('{proparoxítona}'), T('antepenúltima sílaba'), T('nunca'), T('{cântaro}')],
        [T('{heptassílaba}'), T('sétima sílaba'), T('nunca'), T('{{exceção}}')],
      ],
    },
    {
      caption: T('Acento obligatorio, por terminación'),
      head: [T('Termina em'), T('Tipo'), T('Acento'), T('Exemplo')],
      rows: [
        [T('{a}, {e}, {o}'), T('oxítona'), T('obrigatório'), T('{sofá}, {café}')],
        [T('{n}, {s}'), T('oxítona'), T('obrigatório'), T('{padrões}, {sofás}')],
        [T('{ão}'), T('oxítona'), T('obrigatório'), T('{pão}')],
        [T('{i}, {u} sem {s}'), T('oxítona'), T('obrigatório'), T('{saí}, {argúi}')],
        [T('consoante'), T('oxítona'), T('nunca'), T('{fúlgido}')],
        [T('{l}'), T('paroxítona'), T('facultativo'), T('{parcial}')],
        [T('{n}'), T('paroxítona'), T('facultativo'), T('{imenso}')],
      ],
    },
    {
      caption: T('Acento diferencial entre palabras iguales'),
      head: [T('Sem acento'), T('Com acento'), T('Diferença'), T('Frase')],
      rows: [
        [T('{tem}'), T('{têm}'), T('singular e plural'), T('{ele tem}, {eles têm}')],
        [T('{sou}'), T('{só}'), T('verbo e advérbio'), T('{sou fiel}, {só ele vem}')],
        [T('{tu}'), T('{tú}'), T('pronome e advérbio'), T('{tu vens}, {aqui só tu}')],
        [T('{ele}'), T('{éle}'), T('pronome e advérbio antigo'), T('{ele vai}, {éle próprio}')],
        [T('{por}'), T('{pôr}'), T('preposição e verbo'), T('{por amor}, {vou pôr o sol}')],
        [
          T('{quase}'),
          T('{quase}'),
          T('advérbios em orações distintas'),
          T('{quase três}, {quase não}'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {sofás}, el acento es:'),
    options: [
      T('obligatorio, porque es oxítona terminada en {s}'),
      T('facultativo, como en toda paroxítona'),
      T('diferencial, porque distingue de {sofa}'),
      T('inexistente, porque la palabra ya tiene {s}'),
    ],
    answer: 0,
    hint: T('Una oxítona terminada en {s} siempre lleva acento.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('La diferencia entre {tem} y {têm} la marca:'),
      options: [
        T('un acento diferencial, que dice el número del sujeto'),
        T('una vocal distinta en medio de la palabra'),
        T('la terminación {m} frente a {n}'),
        T('la entonación de la oración'),
      ],
      answer: 0,
      hint: T('Las dos palabras son iguales por escrito salvo el acento.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada palabra con el tipo de tonicidad que tiene.'),
      pairs: [
        { a: T('{café}'), b: T('{oxítona}') },
        { a: T('{parcial}'), b: T('{paroxítona}') },
        { a: T('{cántaro}'), b: T('{proparoxítona}') },
        { a: T('{imenso}'), b: T('paroxítona con acento facultativo') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('undefined'),
      answer: 'tônica',
      hint: T('En {café}, la tónica es {fé}.'),
    },
  ],
};
