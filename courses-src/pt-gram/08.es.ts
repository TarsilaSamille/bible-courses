import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  section: T('La flexión de la palabra y la concordancia'),
  title: T('Concordancia'),
  subtitle: T('Nominal, verbal y con sujeto indeterminado'),
  body: C(`**Visión general.** El verbo concuerda en persona y número con el sujeto: en {Deus amou}, {amou} es tercera del singular; en {Deus e a sua palavra amaram}, el verbo va al plural.

**Regla 1.** La concordancia nominal es con el sustantivo, nunca con el artículo: en {as{profeitas} maiores}, {maiores} es femenino plural por causa de {profetas}.

**Regla 2.** Con sujeto indeterminado el verbo queda en tercera del singular: en {se diz que a torre caiu}, la forma {diz} no dice quién lo dice.

**Regla 3.** El sujeto pospuesto no cambia la concordancia: en {os discípulos o enviaram}, el pronombre {o} es objeto directo y el verbo {enviaram} es plural por causa de {os discípulos}.

**Regla 4.** El verbo de enlace y el predicativo concuerdan con el sujeto: en {A palavra é o maior dom}, el {maior} es masculino singular porque concuerda con {dom}.

**Aplicación.** En {Jesus amou os seus amigos}, el sujeto es {Jesus}, el verbo {amou} está en tercera del singular y {os} es artículo definido: el verbo concuerda solo con el sujeto. En {os discípulos o enviaram}, el sujeto es compuesto ({os discípulos}), el verbo va a tercera del plural ({enviaram}), y {o} es objeto directo pospuesto. El pronombre {o} no determina el número del verbo, y ese es el punto en que casi todos fallan.

**Verificación.** Para el verbo bastan tres preguntas: ¿cuál es el **sujeito** y es singular o plural? Si es compuesto, la coordinación es {e} o {ni}? Y ¿es **indeterminado**? Con esas tres respuestas el verbo está decidido. Para el adjetivo, una sola: ¿con qué concuerda? Siempre con el **nombre**, y nunca con el artículo ni con el verbo.`),
  vocab: [
    V('concordância nominal', 'concordância nominal', 'entre artículo, adjetivo y nombre'),
    V('concordância verbal', 'concordância verbal', 'entre verbo y sujeto'),
    V('singular', 'singular', 'número de uno'),
    V('plural', 'plural', 'número de más de uno'),
    V('primeira pessoa', 'primeira pessoa', 'quien habla'),
    V('terceira pessoa', 'terceira pessoa', 'quien no es quien habla'),
    V('sujeito composto', 'sujeito composto', 'dos o más núcleos'),
    V('sujeito indeterminado', 'sujeito indeterminado', 'presente pero no identificado'),
    V('enviaram', 'enviaram', 'plural por causa de {os discípulos}'),
    V('maiores', 'maiores', 'femenino plural por {profetas}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'El verbo concuerda en persona y número con el sujeto: en {Deus amou}, {amou} es tercera del singular; en {Deus e a sua palavra amaram}, el verbo va al plural.',
      ),
    },
    {
      n: '§2',
      text: T(
        'La concordancia nominal es con el sustantivo, nunca con el artículo: en {as{profeitas} maiores}, {maiores} es femenino plural por causa de {profetas}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'Con sujeto indeterminado el verbo queda en tercera del singular: en {se diz que a torre caiu}, la forma {diz} no dice quién lo dice.',
      ),
    },
    {
      n: '§4',
      text: T(
        'El sujeto pospuesto no cambia la concordancia: en {os discípulos o enviaram}, el pronombre {o} es objeto directo y el verbo {enviaram} es plural por causa de {os discípulos}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'El verbo de enlace y el predicativo concuerdan con el sujeto: en {A palavra é o maior dom}, el {maior} es masculino singular porque concuerda con {dom}.',
      ),
    },
  ],
  notes: [
    {
      label: T('La concordancia griega informa más'),
      text: T(
        'El griego antiguo distingue el número del sujeto con más rigor que el portugués: {πάντες} εἶδαν dice que el sujeto era plural y {εἶδον} es la forma genérica. Donde el portugués acepta {viram} para uno y para muchos, el griego obliga a distinguir. Quien traduce del griego queda decidido, sin pretenderlo, sobre el número que el portugués deja abierto.',
      ),
    },
    {
      label: T('Concordancia que se hace lejos'),
      text: T(
        'En {os discípulos do SENHOR saíram da cidade}, el sujeto es {os discípulos} y el verbo {saíram} está lejos, separado por {do SENHOR}. Concuerda el sujeto, que está al principio; el verbo es el lejano. La distancia no es argumento: lo que decide es a qué término pertenece el verbo.',
      ),
    },
  ],
  examples: [
    {
      text: 'Deus amou o mundo.',
      gloss: T(
        'Sujeto {Deus} singular, verbo {amou} en tercera del singular: la concordancia es directa.',
      ),
    },
    {
      text: 'Deus e a sua palavra amaram o mundo.',
      gloss: T('Sujeto compuesto: el verbo {amaram} va al plural por causa de los dos núcleos.'),
    },
    {
      text: 'os discípulos o enviaram',
      gloss: T('El pronombre {o} es objeto directo y no afecta al plural de {enviaram}.'),
    },
    {
      text: 'se diz que a torre caiu',
      gloss: T('Sujeto indeterminado: {diz} queda en tercera del singular aunque esté {se}.'),
    },
    {
      text: 'as maiores profetas',
      gloss: T('{maiores} es femenino plural porque concuerda con {profetas}, no con {as}.'),
    },
    {
      text: 'o maior dos mandamentos',
      gloss: T('{maior} es masculino singular: el genitivo {dos mandamentos} no cambia el género.'),
    },
    {
      text: 'a palavra é o maior dom',
      gloss: T('El predicativo {o maior dom} concuerda con {A palavra}: {maior} es femenino.'),
    },
    {
      text: 'havia muitas pessoas na cidade',
      gloss: T(
        '{havia} es impersonal y queda en tercera del singular, incluso con {muitas pessoas}.',
      ),
    },
    {
      text: ' Jesus amou os seus amigos',
      gloss: T(
        'Sujeto {Jesus} pospuesto, verbo en tercera del singular: la posición no cambia la concordancia.',
      ),
    },
  ],
  tables: [
    {
      caption: T('Concordancia verbal por especie de sujeto'),
      head: [T('Sujeito'), T('Verbo'), T('Exemplo')],
      rows: [
        [T('{Deus}'), T('3.ª do singular'), T('{Deus amou}')],
        [T('{Deus e a sua palavra}'), T('3.ª do plural'), T('{Deus e a sua palavra amaram}')],
        [T('{os discípulos}'), T('plural, mesmo posposto'), T('{os discípulos saíram}')],
        [T('{ninguém}'), T('3.ª do singular'), T('{ninguém viu}')],
        [T('{se diz que}'), T('3.ª do singular'), T('{se diz que veio}')],
        [T('{É necessário}'), T('3.ª do singular'), T('{É necessário vir}')],
        [T('{o povo}'), T('3.ª do singular'), T('{o povo ficou}')],
      ],
    },
    {
      caption: T('Concordancia nominal: con qué concuerda el nombre'),
      head: [T('Palavra'), T('Com quem concorda'), T('Exemplo')],
      rows: [
        [T('artigo'), T('com o substantivo'), T('{os} em {os livros}')],
        [T('adjetivo'), T('com o substantivo'), T('{antigos} em {os livros antigos}')],
        [T('numeral'), T('com o substantivo'), T('{dois} em {dois livros}')],
        [T('pronome'), T('com o substantivo'), T('{meus} em {meus livros}')],
        [T('artigo'), T('nunca com o adjetivo'), T('{os} nunca vira {as} por causa de {antigas}')],
      ],
    },
    {
      caption: T('Número del verbo frente a la persona del sujeto'),
      head: [T('Pessoa'), T('Singular'), T('Plural')],
      rows: [
        [T('1.ª'), T('{amo}'), T('{amamos}')],
        [T('2.ª'), T('{amas}'), T('{amais}')],
        [T('3.ª'), T('{ama}'), T('{amam}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {os discípulos o enviaram}, el verbo {enviaram} está en plural porque:'),
    options: [
      T('el sujeto es {os discípulos}, y el pronombre {o} no cuenta'),
      T('el objeto {o} va antes del verbo'),
      T('el verbo va después del sujeto pospuesto'),
      T('hay dos términos nominales en la oración'),
    ],
    answer: 0,
    hint: T('La {o} es objeto directo: quítala y el verbo sigue plural.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('En {se diz que a torre caiu}, el sujeto es:'),
      options: [
        T('indeterminado, y el verbo queda en tercera del singular'),
        T('compuesto, porque hay {se} y {que}'),
        T('oculto, porque el verbo {disse} trae la persona'),
        T('inexistente, porque no hay verbo de acción'),
      ],
      answer: 0,
      hint: T('La forma {diz} no dice quién lo dice, y por eso el sujeto es indeterminado.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada palabra con el término con el que concuerda.'),
      pairs: [
        { a: T('{maiores} en {as{profeitas} maiores}'), b: T('con el sustantivo {profetas}') },
        { a: T('{amou} en {Deus amou}'), b: T('con el sujeto {Deus}') },
        { a: T('{amaram} en {Deus e a sua palavra amaram}'), b: T('con sujeto compuesto') },
        { a: T('{maior} en {o maior dos mandamentos}'), b: T('con el sustantivo {mandamento}') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('El verbo concuerda con el ______, y nunca con el objeto directo.'),
      answer: 'sujeito',
      hint: T('En {os discípulos o enviaram}, el sujeto son {os discípulos}.'),
    },
  ],
};
