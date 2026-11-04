import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  section: T('La oración y sus términos'),
  title: T('Términos integrantes y accesorios'),
  subtitle: T('Compleción, cualificación y circunstancia'),
  body: C(`**Visión general.** El {objeto directo} completa el verbo sin preposición: en {Deus criou os céus}, {os céus} es objeto directo, y el verbo {criou} no exige nada más.

**Regla 1.** El {objeto indirecto} viene con la preposición que el verbo exige: en {Deus falou a Moisés}, la preposición {a} la exige {falar}, y {Moisés} es objeto indirecto.

**Regla 2.** El {complemento nominal} completa un nombre, no un verbo: en {o amor de Deus}, la preposición {de} la exige {amor}, y {Deus} completa el nombre.

**Regla 3.** El {agente de la pasiva} es el sujeto de la construcción pasiva: en {o mundo foi criado por Deus}, {por Deus} no es objeto, es quien realiza la acción.

**Regla 4.** Un {adjunto} añade algo y puede salir de la oración: en {E, ao anoitecer, disse aos seus discípulos}, {ao anoitecer} sale y la oración sigue entera.

**Aplicación.** En {Jesus, Senhor nosso, entrou em Jerusalém}, {Jesus} es sujeto, {entrou} es verbo, {em Jerusalém} es adjunto adverbial de lugar, y {Senhor nosso} es vocativo, un término que no entra en la relación sintáctica y cuya función es **llamar la atención**. Fíjate en que el vocativo va entre comas, y es esa puntuación lo que lo separa del resto.

**Verificación.** La prueba que lo decide es la retirada: quita el término y mira si la oración sigue teniendo sentido. Si no, es **integrante**. Si sí, es **accesorio**. Luego pregunta quién exige el término: el verbo da **objeto indirecto**, un nombre da **complemento nominal**, y nadie da nada, lo que hace del término un **adjunto**. Y por último: ¿el término concuerda con un nombre o está suelto?`),
  vocab: [
    V('objeto direto', 'objeto direto', 'complemento del verbo sin preposición'),
    V('objeto indireto', 'objeto indireto', 'complemento del verbo con preposición exigida'),
    V('complemento nominal', 'complemento nominal', 'complemento de un nombre'),
    V('agente da passiva', 'agente da passiva', 'sujeto de la construcción pasiva'),
    V('adjunto adnominal', 'adjunto adnominal', 'caracteriza un nombre'),
    V('adjunto adverbial', 'adjunto adverbial', 'indica circunstancia'),
    V('aposto', 'aposto', 'explica un término anterior'),
    V('vocativo', 'vocativo', 'se dirige al interlocutor'),
    V('por Deus', 'por Deus', 'agente de la pasiva con {por}'),
    V('Senhor nosso', 'Senhor nosso', 'vocativo entre comas'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'El {objeto directo} completa el verbo sin preposición: en {Deus criou os céus}, {os céus} es objeto directo, y el verbo {criou} no exige nada más.',
      ),
    },
    {
      n: '§2',
      text: T(
        'El {objeto indirecto} viene con la preposición que el verbo exige: en {Deus falou a Moisés}, la preposición {a} la exige {falar}, y {Moisés} es objeto indirecto.',
      ),
    },
    {
      n: '§3',
      text: T(
        'El {complemento nominal} completa un nombre, no un verbo: en {o amor de Deus}, la preposición {de} la exige {amor}, y {Deus} completa el nombre.',
      ),
    },
    {
      n: '§4',
      text: T(
        'El {agente de la pasiva} es el sujeto de la construcción pasiva: en {o mundo foi criado por Deus}, {por Deus} no es objeto, es quien realiza la acción.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Un {adjunto} añade algo y puede salir de la oración: en {E, ao anoitecer, disse aos seus discípulos}, {ao anoitecer} sale y la oración sigue entera.',
      ),
    },
  ],
  notes: [
    {
      label: T('El término que el griego marca por caso'),
      text: T(
        'Donde el griego escribe {τῷ θεῷ}, el portugués escribe {a Deus}: el caso griego dice que el término es indirecto, y la preposición portuguesa dice lo mismo. Donde el griego escribe {ὀφθαλμοῖς} y el portugués {olhos}, el griego marca el objeto directo y el portugués no necesita marca. Por eso el régimen es la clave más difícil de la traducción.',
      ),
    },
    {
      label: T('El vocativo que desaparece cuando cambia el interlocutor'),
      text: T(
        'En {Senhor nosso, aqui estamo}, {Senhor} es vocativo, y la prueba es que el {nosotros} que viene justo después ya se refiere a {nosotros}. Si la oración gritara {mi Señor, apártate de mí}, el {mi} cambiaría de valor. Lo que lo decide es el referente del posesivo, no la coma.',
      ),
    },
  ],
  examples: [
    {
      text: 'Deus criou os céus e a terra.',
      gloss: T('{os céus} y {a terra} son objetos directos: completan {criou} sin preposición.'),
    },
    {
      text: 'Deus falou a Moisés.',
      gloss: T('{a Moisés} es objeto indirecto: la preposición {a} la exige {falar}.'),
    },
    {
      text: 'o amor de Deus',
      gloss: T(
        '{de Deus} es complemento nominal de {amor}: quien exige la preposición es el nombre, no el verbo.',
      ),
    },
    {
      text: 'o mundo foi criado por Deus.',
      gloss: T('{o mundo} es sujeto paciente y {por Deus} el agente de la pasiva, no un objeto.'),
    },
    {
      text: 'a palavra dos deuses',
      gloss: T('{dos deuses} es complemento nominal de {palavra}; el nombre {palavra} exige {de}.'),
    },
    {
      text: 'Jesus, Senhor nosso, entrou em Jerusalém.',
      gloss: T('{Senhor nosso} es vocativo; {em Jerusalém} es adjunto adverbial de lugar.'),
    },
    {
      text: 'Jesus, o filho do carpinteiro, entrou em Jerusalém.',
      gloss: T('{o filho del carpintero} es aposición de {Jesus}: explica y restringe el nombre.'),
    },
    {
      text: 'No princípio, disse Deus.',
      gloss: T('{No princípio} es adjunto adverbial de tiempo: quítalo y no se rompe nada.'),
    },
    {
      text: 'O evangelho segundo Marcos começou assim.',
      gloss: T(
        '{segundo Marcos} es complemento nominal de {evangelho}, y {começou assim} lleva {assim} como adjunto de modo.',
      ),
    },
  ],
  tables: [
    {
      caption: T('Integrantes y accesorios'),
      head: [T('Termo'), T('Quem exige'), T('Teste da retirada'), T('Exemplo')],
      rows: [
        [
          T('{objeto direto}'),
          T('nada além do verbo'),
          T('a frase perde sentido'),
          T('{os céus} em {criou os céus}'),
        ],
        [
          T('{objeto indireto}'),
          T('o verbo, por preposição'),
          T('a frase perde sentido'),
          T('{a Moisés} em {falou a Moisés}'),
        ],
        [
          T('{complemento nominal}'),
          T('um nome'),
          T('o nome fica incompleto'),
          T('{de Deus} em {o amor de Deus}'),
        ],
        [
          T('{agente da passiva}'),
          T('a construção passiva'),
          T('a ação perde autor'),
          T('{por Deus} em {criado por Deus}'),
        ],
        [
          T('{adjunto}'),
          T('ninguém'),
          T('a frase continua inteira'),
          T('{ao anoitecer} em {ao anoitecer disse}'),
        ],
        [T('{aposto}'), T('ninguém'), T('a frase continua inteira'), T('{Senhor nosso}')],
        [
          T('{vocativo}'),
          T('ninguém'),
          T('a frase continua inteira'),
          T('{Jesus} em {Jesus, Senhor nosso}'),
        ],
      ],
    },
    {
      caption: T('Verbo que exige preposición'),
      head: [T('Verbo'), T('Preposição exigida'), T('Frase')],
      rows: [
        [T('{falar}'), T('{a}'), T('{falou a Moisés}')],
        [T('{obedecer}'), T('{a}'), T('{obedeceu ao pai}')],
        [T('{crer}'), T('{em}'), T('{crer em Deus}')],
        [T('{gostar}'), T('{de}'), T('{gostar da música}')],
        [T('{aspirar}'), T('{a}'), T('{aspirar ao céu}')],
        [T('{depender}'), T('{de}'), T('{depender da ajuda}')],
        [T('{lembrar}'), T('{de}'), T('{lembrar-se da lei}')],
        [T('{assistir}'), T('{a}'), T('{assistiu à missa}')],
        [T('{visar}'), T('{a}'), T('{visou ao alto}')],
        [T('{proceder}'), T('{de}'), T('{procedeu de Deus}')],
      ],
    },
    {
      caption: T('Objetos indirectos: pronombre o nombre'),
      head: [T('Tipo'), T('Forma'), T('Exemplo')],
      rows: [
        [T('nome'), T('artigo ou demonstrativo + substantivo'), T('{falou a Moisés}')],
        [T('pronome oblíquo'), T('{lhe}, {eles}, {nós}'), T('{falou-lhe}')],
        [T('pronominal'), T('verbo + {me}, {te}, {se}'), T('{falou-me}')],
        [T('com {a} fundida'), T('crase obrigatória'), T('{falou à árvore}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Deus falou a Moisés}, {a Moisés} es objeto indirecto porque:'),
    options: [
      T('viene con la preposición {a}, que exige el verbo {falar}'),
      T('es un sustantivo, y un sustantivo es siempre objeto directo'),
      T('va después del verbo, y lo que va después es indirecto'),
      T('completa el nombre {Deus}, no el verbo'),
    ],
    answer: 0,
    hint: T('Sustituye por {le}: {habló-le} sigue siendo correcto.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('En {o amor de Deus}, {de Deus} es:'),
      options: [
        T('complemento nominal, porque completa el nombre {amor}'),
        T('objeto directo de {amor}'),
        T('adjunto adverbial de lugar'),
        T('agente de la pasiva'),
      ],
      answer: 0,
      hint: T('Quien exige la preposición es {amor}, un nombre, y no un verbo.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada término con su papel en la oración.'),
      pairs: [
        { a: T('{os céus} en {criou os céus}'), b: T('objeto directo') },
        { a: T('{a Moisés} en {falou a Moisés}'), b: T('objeto indirecto') },
        { a: T('{Senhor nosso}'), b: T('vocativo') },
        { a: T('{por Deus}'), b: T('agente de la pasiva') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('El término que puede salir de la oración sin romperla es ______.'),
      answer: 'acessório',
      hint: T('Quita un integrante y la oración pierde sentido.'),
    },
  ],
};
