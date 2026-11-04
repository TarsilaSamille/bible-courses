import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  section: T('La oración y sus términos'),
  title: T('Análisis del sujeto y el predicado'),
  subtitle: T('Procedimiento y casos complejos'),
  body: C(`**Visión general.** Localiza primero el verbo y pregunta **quién** actúa o **de qué** se habla: en {Y dijo Jesús}, el verbo {dijo} apunta al sujeto {Jesús}.

**Regla 1.** El sujeto puede ir antes o después, y la posición no define la función: en {Y, luego,, dijo, el SEÑOR, a Moisés}, el {el SEÑOR} es sujeto aunque sea pospuesto.

**Regla 2.** Con verbo de enlace, el predicativo atribuye una cualidad al sujeto: en {Dios es bueno}, {bueno} es el predicativo y {es} el verbo de enlace.

**Regla 3.** El sujeto {oracional} es una oración entera: en {Es necesario que vengas}, la subordinada {que vengas} ocupa el lugar del sujeto y el verbo queda en tercera del singular.

**Regla 4.** El sujeto {indeterminado} se reconoce por la ausencia de un sustantivo que el verbo acepte: en {Llovió}, no hay quién, y el verbo queda en tercera del singular.

**Aplicación.** En {Y, luego, dijo el SEÑOR a Moisés}, el sujeto es {el SEÑOR}, pospuesto, y el verbo {dijo} está en tercera persona del singular. El {a Moisés} es objeto indirecto, y el {Y} liga las dos oraciones del período. Fíjate en que el sujeto va **después** del verbo: es el orden griego, y quien analice con la gramática del portugués marcará {el SEÑOR} como error por estar fuera de lugar, cuando el orden griego es el regular.

**Verificación.** Cuatro preguntas, siempre en este orden: ¿cuál es el **verbo** y qué persona y número exige? ¿Cuál es el primer sustantivo que **acepta** ese verbo, y no el primero que aparece? ¿Lo que queda tras el sujeto y el verbo es el **predicado**? Y el sujeto, ¿es simple, compuesto, indeterminado, oculto o inexistente? Cuatro preguntas, y el núcleo queda garantizado.`),
  vocab: [
    V('localização do verbo', 'localização do verbo', 'primer paso del análisis'),
    V('sujeito', 'sujeito', 'término que responde a quién'),
    V('sujeito deslocado', 'sujeito deslocado', 'sujeto que vino después del verbo'),
    V('sujeito indeterminado', 'sujeito indeterminado', 'presente pero no identificado'),
    V('predicado', 'predicado', 'lo que se declara del sujeto'),
    V('verbo de ligação', 'verbo de ligação', 'une sujeto y predicativo'),
    V('predicativo', 'predicativo', 'atributo del sujeto por el verbo de enlace'),
    V('ordem inversa', 'ordem inversa', 'sujeto después del verbo'),
    V('o SENHOR', 'o SENHOR', 'sujeto pospuesto en {dijo el SEÑOR}'),
    V('É necessário', 'É necessário', 'verbo con sujeto oracional'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Localiza primero el verbo y pregunta **quién** actúa o **de qué** se habla: en {Y dijo Jesús}, el verbo {dijo} apunta al sujeto {Jesús}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'El sujeto puede ir antes o después, y la posición no define la función: en {Y, luego,, dijo, el SEÑOR, a Moisés}, el {el SEÑOR} es sujeto aunque sea pospuesto.',
      ),
    },
    {
      n: '§3',
      text: T(
        'Con verbo de enlace, el predicativo atribuye una cualidad al sujeto: en {Dios es bueno}, {bueno} es el predicativo y {es} el verbo de enlace.',
      ),
    },
    {
      n: '§4',
      text: T(
        'El sujeto {oracional} es una oración entera: en {Es necesario que vengas}, la subordinada {que vengas} ocupa el lugar del sujeto y el verbo queda en tercera del singular.',
      ),
    },
    {
      n: '§5',
      text: T(
        'El sujeto {indeterminado} se reconoce por la ausencia de un sustantivo que el verbo acepte: en {Llovió}, no hay quién, y el verbo queda en tercera del singular.',
      ),
    },
  ],
  notes: [
    {
      label: T('La posición griega del sujeto'),
      text: T(
        'En {εἶπεν ὁ κύριος}, el sujeto {ὁ κύριος} va después del verbo {εἶπεν}, y ese es el orden más común del griego antiguo. El portugués antiguo hacía lo mismo, y el portugués actual adelanta el sujeto por costumbre de lectura. El análisis no cambia: lo que cambia es la expectativa del lector, y eso es lo que produce el error de lectura.',
      ),
    },
    {
      label: T('El sujeto que es una oración'),
      text: T(
        'En {Es necesario que vengas}, el sujeto es {que vengas}, y el verbo {es} queda en tercera del singular aunque haya dos oraciones. Eso ocurre porque el sujeto es una sola unidad. Lo mismo vale para {Es hora de partir}, donde la oración va tras {hora}: la función es la misma, y solo cambió la forma.',
      ),
    },
  ],
  examples: [
    {
      text: 'E, logo, disse o SENHOR a Moisés.',
      gloss: T(
        'Sujeto {el SEÑOR} pospuesto; {a Moisés} es objeto indirecto; {luego} es adjunto adverbial.',
      ),
    },
    {
      text: 'Disse o SENHOR a Moisés.',
      gloss: T('La misma oración sin {Y} y sin {luego}: solo lo esencial de la oración.'),
    },
    {
      text: 'Deus criou os céus e a terra.',
      gloss: T('Sujeto {Dios} simple; predicado verbal {creó los cielos y la tierra}.'),
    },
    {
      text: 'Deus e a sua palavra recrearam o mundo.',
      gloss: T('Sujeto compuesto y verbo en plural: los dos núcleos cuentan.'),
    },
    {
      text: 'Deus é bom.',
      gloss: T('Verbo de enlace {es} y predicativo {bueno}: el predicado es nominal.'),
    },
    {
      text: 'Alegrarei-te com alegria.',
      gloss: T(
        'Verbo {alegrarei} en futuro, con {te} como objeto indirecto y {con alegría} como objeto directo.',
      ),
    },
    {
      text: 'É necessário que venhas.',
      gloss: T('Sujeto oracional {que vengas}; el verbo {es} queda en tercera del singular.'),
    },
    {
      text: 'Choveu durante a noite.',
      gloss: T('Sujeto {Llovió} inexistente: el verbo {llovió} es impersonal y no tiene quién.'),
    },
    {
      text: 'Falar é Deus obedecer.',
      gloss: T('Dos infinitivos como sujeto compuesto: {hablar} y {obedecer}.'),
    },
  ],
  tables: [
    {
      caption: T('Los cuatro pasos del análisis del núcleo'),
      head: [T('Passo'), T('Pergunta'), T('O que se procura'), T('Exemplo')],
      rows: [
        [T('1'), T('qual é o verbo?'), T('a forma verbal e sua pessoa'), T('{disse}')],
        [T('2'), T('quem faz ou o que é?'), T('o substantivo que o verbo aceita'), T('{o SENHOR}')],
        [T('3'), T('o que sobra?'), T('o predicado'), T('{a Moisés} e {logo}')],
        [
          T('4'),
          T('que espécie de sujeito?'),
          T('simples, composto, oculto ou indeterminado'),
          T('{simples}'),
        ],
      ],
    },
    {
      caption: T('El sujeto y su posición'),
      head: [T('Posição'), T('Exemplo'), T('Efeito na análise'), T('Chamada')],
      rows: [
        [T('antes do verbo'), T('{Deus criou}'), T('nenhuma'), T('sujeito antecipado')],
        [T('depois do verbo'), T('{criou Deus}'), T('nenhuma'), T('sujeito posposto')],
        [
          T('entre o verbo e o objeto'),
          T('{Deu o mundo a seu Filho}'),
          T('nenhuma'),
          T('sujeito intercalado'),
        ],
        [
          T('dentro do período'),
          T('{Jesus, que criou, ama}'),
          T('a oração é adjetiva'),
          T('sujeito posposto e relativo'),
        ],
        [T('após o verbo de ligação'), T('{é bom Deus}'), T('nenhuma'), T('sujeito posposto')],
        [
          T('como oração inteira'),
          T('{É necessário vir}'),
          T('o verbo não pluraliza'),
          T('sujeito oracional'),
        ],
      ],
    },
    {
      caption: T('Verbos de enlace y lo que aportan'),
      head: [T('Verbo'), T('Valor que acrescenta'), T('Frase'), T('Predicativo')],
      rows: [
        [T('{ser}'), T('identidade ou qualidade permanente'), T('{Deus é amor}'), T('{amor}')],
        [T('{estar}'), T('estado passageiro'), T('{Deus está aqui}'), T('{aqui}')],
        [T('{ficar}'), T('resultado atingido'), T('{ficou sozinho}'), T('{sozinho}')],
        [T('{permanecer}'), T('estado que dura'), T('{permaneceu fiel}'), T('{fiel}')],
        [T('{parecer}'), T('aparência, não certeza'), T('{parece bom}'), T('{bom}')],
        [T('{tornar-se}'), T('mudança de estado'), T('{tornou-se claro}'), T('{claro}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Es necesario que vengas}, el sujeto es:'),
    options: [
      T('la subordinada {que vengas}, que ocupa el lugar del sujeto'),
      T('{necesario}, que es un adjetivo'),
      T('{vengas}, el verbo de la subordinada'),
      T('ninguno, porque {es} es impersonal'),
    ],
    answer: 0,
    hint: T('Sustituye por {eso}: {Es necesario eso} sigue siendo correcto.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('En {Y, luego, dijo el SEÑOR a Moisés}, {a Moisés} es:'),
      options: [
        T('objeto indirecto, introducido por la preposición {a}'),
        T('sujeto, porque va después del verbo'),
        T('adjunto adverbial de lugar'),
        T('complemento nominal de {SEÑOR}'),
      ],
      answer: 0,
      hint: T('El verbo {dijo} exige la preposición {a} para el objeto indirecto.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada oración con el tipo de sujeto que tiene.'),
      pairs: [
        { a: T('{creó Dios}'), b: T('sujeto pospuesto, pero simple') },
        { a: T('{Dios y su palabra amaron}'), b: T('sujeto compuesto') },
        { a: T('{Llovió}'), b: T('sujeto inexistente') },
        { a: T('{Es necesario venir}'), b: T('sujeto oracional') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('undefined'),
      answer: 'função',
      hint: T('En {dijo el SEÑOR}, el sujeto va después y sigue siendo sujeto.'),
    },
  ],
};
