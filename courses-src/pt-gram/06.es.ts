import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  section: T('La oración y sus términos'),
  title: T('Términos esenciales de la oración'),
  subtitle: T('Sujeto y predicado'),
  body: C(`**Visión general.** El {sujeto} es aquello de lo que se declara algo: en {No princípio criou Deus os céus e a terra}, {Deus} es el sujeto, y la respuesta a {¿quién?} lo confirma.

**Regla 1.** El sujeto tiene cuatro formas: {simple} ({Deus}), {compuesto} ({Deus e a sua palavra}), {oculto} ({os discípulos}) e {indeterminado} ({se diz que}).

**Regla 2.** El {predicado} es lo que se declara del sujeto, y el verbo es su núcleo: en {Deus criou os céus}, el predicado es {criou os céus}, y la forma {criou} dice lo que ocurrió.

**Regla 3.** El {verbo de enlace} une el {predicativo} con el sujeto: en {Deus é bom}, {é} une, y {bom} dice lo que se declara de {Deus}, sin verbo propio.

**Regla 4.** La posición del sujeto no define la función: en {E, logo, disse o SENHOR a Moisés}, el sujeto {o SENHOR} va después del verbo {disse}, y sigue siendo sujeto.

**Aplicación.** En {No princípio criou Deus os céus e a terra}, el orden griego (ὁ θεὸς ἐποίησεν τοὺς οὐρανοὺς) pone el sujeto {Deus} después del verbo {criou}, y el análisis no cambia por eso. El predicado es {criou os céus e a terra}, con los objetos {os céus} y {a terra}. Y {no princípio} es adjunto adverbial de tiempo: puede ir al final de la oración sin romper nada, lo que ya lo delata como accesorio.

**Verificación.** Haz cuatro preguntas, siempre en este orden: ¿cuál es el **verbo** y qué persona y número exige? ¿Cuál es el sustantivo que **acepta** ese verbo, y no el primero que aparece? ¿Lo que queda tras el sujeto y el verbo es el **predicado**? Y el sujeto, ¿es simple, compuesto, oculto, indeterminado o inexistente? Cuatro preguntas, y el núcleo de la oración está armado.`),
  vocab: [
    V('sujeito', 'sujeito', 'sujeto'),
    V('predicado', 'predicado', 'predicado'),
    V('sujeito simples', 'sujeito simples', 'un solo núcleo'),
    V('sujeito composto', 'sujeito composto', 'dos o más núcleos'),
    V('sujeito oculto', 'sujeito oculto', 'presumido por la forma del verbo'),
    V('sujeito indeterminado', 'sujeito indeterminado', 'no identificado en la oración'),
    V('verbo de ligação', 'verbo de ligação', 'une sujeto y predicativo'),
    V('predicativo', 'predicativo', 'atributo del sujeto por verbo de enlace'),
    V('Deus', 'Deus', 'sujeto pospuesto en {criou Deus}'),
    V('o SENHOR', 'o SENHOR', 'sujeto pospuesto en {disse o SENHOR}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'El {sujeto} es aquello de lo que se declara algo: en {No princípio criou Deus os céus e a terra}, {Deus} es el sujeto, y la respuesta a {¿quién?} lo confirma.',
      ),
    },
    {
      n: '§2',
      text: T(
        'El sujeto tiene cuatro formas: {simple} ({Deus}), {compuesto} ({Deus e a sua palavra}), {oculto} ({os discípulos}) e {indeterminado} ({se diz que}).',
      ),
    },
    {
      n: '§3',
      text: T(
        'El {predicado} es lo que se declara del sujeto, y el verbo es su núcleo: en {Deus criou os céus}, el predicado es {criou os céus}, y la forma {criou} dice lo que ocurrió.',
      ),
    },
    {
      n: '§4',
      text: T(
        'El {verbo de enlace} une el {predicativo} con el sujeto: en {Deus é bom}, {é} une, y {bom} dice lo que se declara de {Deus}, sin verbo propio.',
      ),
    },
    {
      n: '§5',
      text: T(
        'La posición del sujeto no define la función: en {E, logo, disse o SENHOR a Moisés}, el sujeto {o SENHOR} va después del verbo {disse}, y sigue siendo sujeto.',
      ),
    },
  ],
  notes: [
    {
      label: T('El sujeto que el griego escribe después'),
      text: T(
        'El griego antiguo casi siempre pone el sujeto después del verbo, como en {ὁ θεὸς ἐποίησεν}, y el portugués antiguo hacía lo mismo. El portugués actual adelanta el sujeto por costumbre, y por eso muchos lectores marcan {Deus} como error en {criou Deus os céus}: la posición cambió de siglo, no de regla.',
      ),
    },
    {
      label: T('La pregunta que separa sujeto de objeto'),
      text: T(
        'En {Jesus amou os seus amigos}, {Jesus} responde a {¿a quién amó?} y {os seus amigos} responde a {¿qué amó?}. Cuando no hay qué, el sujeto pasa a la pregunta del agente. Los dos casos usan la misma persona del verbo; lo que cambia es qué pregunta tiene sentido.',
      ),
    },
  ],
  examples: [
    {
      text: 'No princípio criou Deus os céus e a terra.',
      gloss: T(
        'Sujeto {Deus} pospuesto; predicado {criou os céus e a terra}; {no princípio} es adjunto de tiempo.',
      ),
    },
    {
      text: 'Deus criou os céus e a terra.',
      gloss: T('La misma oración con el sujeto adelantado: la estructura interna es idéntica.'),
    },
    {
      text: 'Deus e a sua palavra recrearam o mundo.',
      gloss: T('Sujeto compuesto {Deus e a sua palavra}, unido por {e}, con el verbo en plural.'),
    },
    {
      text: 'Os discípulos ouviram a palavra.',
      gloss: T('Sujeito simple {os discípulos}, pospuesto al verbo {ouviram}.'),
    },
    {
      text: 'Vinde a mim, todos os que credem.',
      gloss: T(
        'El sujeto {todos os que suffer} va expreso, y el verbo {Vinde} es el de la principal.',
      ),
    },
    {
      text: 'Diz-se que a palavra foi escrita.',
      gloss: T('Sujeto indeterminado: la forma {se} con el verbo {diz-se} no dice quién lo dice.'),
    },
    {
      text: 'Deus é bom.',
      gloss: T(
        'Verbo de enlace {é} y predicativo {bom}: lo que se declara es una cualidad, no una acción.',
      ),
    },
    {
      text: 'O Verbo ficou carne.',
      gloss: T(
        'Verbo de enlace {ficou} con predicativo {carne} que dice en qué se convirtió el Verbo.',
      ),
    },
    {
      text: 'E, logo, disse o SENHOR a Moisés.',
      gloss: T(
        'Sujeto {o SENHOR} pospuesto, verbo {disse} en tercera del singular, {a Moisés} objeto indirecto.',
      ),
    },
  ],
  tables: [
    {
      caption: T('Las cuatro especies de sujeto'),
      head: [T('Espécie'), T('Como se reconhece'), T('Exemplo')],
      rows: [
        [T('{simples}'), T('um só núcleo'), T('{Deus}')],
        [T('{composto}'), T('dois núcleos unidos por {e} ou {nem}'), T('{Deus e a sua palavra}')],
        [T('{oculto}'), T('não está escrito; a forma do verbo o dá'), T('{os discípulos ouviram}')],
        [
          T('{indeterminado}'),
          T('presente na frase, mas não identificado'),
          T('{se diz que veio}'),
        ],
        [T('{inexistente}'), T('não existe; o verbo é impessoal'), T('{choveu}')],
        [
          T('{oracional}'),
          T('uma oração inteira ocupa o lugar do sujeito'),
          T('{É necessário que venhas}.'),
        ],
      ],
    },
    {
      caption: T('Las tres especies de predicado'),
      head: [T('Espécie'), T('Núcleo'), T('Tem predicativo?'), T('Exemplo')],
      rows: [
        [T('{verbal}'), T('o verbo'), T('não'), T('{os discípulos viram}')],
        [T('{nominal}'), T('o nome'), T('sim'), T('{A festa foi alegre}')],
        [T('{verbo-nominal}'), T('verbo e nome'), T('sim'), T('{Ohipping foi alegre}')],
      ],
    },
    {
      caption: T('Verbos de enlace'),
      head: [T('Verbo'), T('O que liga'), T('Frase')],
      rows: [
        [T('{ser}'), T('identidade, qualidade, estado'), T('{Deus é amor}')],
        [T('{estar}'), T('estado passageiro'), T('{a portas estão fechadas}')],
        [T('{ficar}'), T('resultado atingido'), T('{o barco ficou parado}')],
        [T('{permanecer}'), T('estado que dura'), T('{permaneceu em silêncio}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {E, logo, disse o SENHOR a Moisés}, ¿quién es el sujeto?'),
    options: [
      T('{o SENHOR}, porque responde a quién habló'),
      T('{a Moisés}, porque va después del verbo'),
      T('{logo}, porque es un adverbio'),
      T('{disse}, porque es el verbo principal'),
    ],
    answer: 0,
    hint: T('Ir después del verbo no impide que sea sujeto.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('En {Deus é bom}, el predicativo {bom} es:'),
      options: [
        T('predicativo del sujeto, unido por el verbo {é}'),
        T('objeto directo de {é}'),
        T('adjunto adnominal de {Deus}'),
        T('agente de la pasiva'),
      ],
      answer: 0,
      hint: T('Sin verbo de enlace, {bom} sería adjetivo atributivo.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada oración con la especie de sujeto que tiene.'),
      pairs: [
        { a: T('{Deus e a sua palavra}'), b: T('sujeto compuesto') },
        { a: T('{os discípulos ouviram}'), b: T('sujeto oculto') },
        { a: T('{se diz que veio}'), b: T('sujeto indeterminado') },
        { a: T('{É necessário que venhas}'), b: T('sujeto oracional') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('El ______ es el núcleo del predicado.'),
      answer: 'verbo',
      hint: T('En {criou os céus}, el núcleo es {criou}.'),
    },
  ],
};
