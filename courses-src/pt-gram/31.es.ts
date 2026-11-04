import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  section: T('El sentido y la subordinación'),
  title: T('El período compuesto en Marcos 4, 35-41'),
  subtitle: T('Contagem de verbos e grau das orações'),
  body: C(`**Visión general.** Hay veinte verbos en siete versículos, y por ahí empieza el análisis: {Y salió} y {y los discípulos le seguían} traen dos verbos y dos oraciones.

**Regla 1.** En una oración compuesta se cuenta un verbo por oración: {Y, al anochecer, dijo a sus discípulos: Pasemos al otro lado} tiene dos verbos y dos oraciones.

**Regla 2.** Las coordinadas están en el mismo grado: en {Y salió, y los discípulos le seguían}, las dos son de primer grado, y ninguna es subordinada de la otra.

**Regla 3.** El grado se cuenta por la distancia: {Pasemos al otro lado} depende solo de {dijo} y es de primer grado; {¡Cállate! Y sal!} depende del habla y es de segundo grado.

**Regla 4.** El {habla reproducida} sin conectivo ocupa el lugar de la {sustantiva directa}: en {Y les dijo: «¿Por qué decís que es foro?»}, el objeto de {les dijo} es la pregunta entera.

**Aplicación.** El párrafo entero cabe en siete períodos, y el camino corto es recorrerlos uno a uno. En Marcos 4, 38, el período más largo tiene seis verbos: {Y se levantó un gran temporal}, {y las olas iban batiendo}, {de modo que ya estaba llenándose}, {Y despertó}, {y reprendió} y {y les dijo: ¡Cállate! Y sal}. Tres son coordinadas, una es consecutiva y dos son los hablas de Jesús.

**Verificación.** Lo que cierra el análisis es el recuento de verbos, y es verificable: hay veinte, y el número de oraciones del párrafo es el mismo número. Una oración que completa un verbo de la principal es {sustantiva directa}, y hay tres en el pasaje, los tres hablas de Jesús. Una que trae la consecuencia es {adverbial}, y solo hay una, el Filling del agua. No hay ni una sola {adjetiva} en siete versículos.`),
  vocab: [
    V('período', 'período', 'secuencia de oraciones hasta el punto'),
    V('período composto', 'período composto', 'período con dos o más oraciones'),
    V('verbo', 'verbo', 'marca el inicio de cada oración'),
    V('oração principal', 'oração principal', 'la que los demás completan'),
    V('coordenada', 'coordenada', 'oración del mismo grado que la principal'),
    V('substantiva direta', 'substantiva direta', 'oración que completa un verbo'),
    V('adverbial consecutiva', 'adverbial consecutiva', 'oración que trae la consecuencia'),
    V('grau', 'grau', 'grado de dependencia de la oración'),
    V('fala reproduzida', 'fala reproduzida', 'discurso transcrito de otro interlocutor'),
    V('grande temporal', 'grande temporal', 'sujeto pospuesto de Marcos 4, 37'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Hay veinte verbos en siete versículos, y por ahí empieza el análisis: {Y salió} y {y los discípulos le seguían} traen dos verbos y dos oraciones.',
      ),
    },
    {
      n: '§2',
      text: T(
        'En una oración compuesta se cuenta un verbo por oración: {Y, al anochecer, dijo a sus discípulos: Pasemos al otro lado} tiene dos verbos y dos oraciones.',
      ),
    },
    {
      n: '§3',
      text: T(
        'Las coordinadas están en el mismo grado: en {Y salió, y los discípulos le seguían}, las dos son de primer grado, y ninguna es subordinada de la otra.',
      ),
    },
    {
      n: '§4',
      text: T(
        'El grado se cuenta por la distancia: {Pasemos al otro lado} depende solo de {dijo} y es de primer grado; {¡Cállate! Y sal!} depende del habla y es de segundo grado.',
      ),
    },
    {
      n: '§5',
      text: T(
        'El {habla reproducida} sin conectivo ocupa el lugar de la {sustantiva directa}: en {Y les dijo: «¿Por qué decís que es foro?»}, el objeto de {les dijo} es la pregunta entera.',
      ),
    },
  ],
  notes: [
    {
      label: T('Lo que el griego muestra y el portugués esconde'),
      text: T(
        'En el griego de Marcos 4 el habla viene justo después de λέγει τοῖς μαθηταῖς αὐτοῦ, y el verbo siguiente, Διέλθωμεν, es el primero de la subordinada. El griego tiene εἶπεν y παρέθετο como verbos que abren el discurso, y no necesita dos puntos: es el verbo el que marca el discurso directo, no la puntuación. El portugués necesita los dos puntos, y por eso los tres hablas del pasaje aparecen como {sustantivas directas}.',
      ),
    },
    {
      label: T('La puntuación que no indica grado'),
      text: T(
        'El punto y coma en Marcos 4, 38 separa dos coordinadas, y el punto y coma en Marcos 4, 37 separa la principal de una coordenada y de una subordinada. La coma de {¡Cállate! Y sal!} separa coordinadas que están dentro del habla. Tres usos, una sola señal: por eso el grado se cuenta por la estructura y no por la puntuación.',
      ),
    },
  ],
  examples: [
    {
      text: 'E, ao anoitecer, disse aos seus discípulos: Passemos para o outro lado',
      gloss: T('Dos verbos: principal {dijo} y {sustantiva directa} {Pasemos}, de primer grado.'),
    },
    {
      text: 'E saiu, e os discípulos o seguiam',
      gloss: T('Dos coordinadas; el sujeto {los discípulos} es pospuesto.'),
    },
    {
      text: 'E levantou-se grande temporal',
      gloss: T('Sujeto {gran temporal} pospuesto, después del verbo {se levantó}.'),
    },
    {
      text: 'de modo que já estava se enchendo de água',
      gloss: T('Consecutiva de primer grado: el verbo de la subordinada es {estaba}.'),
    },
    {
      text: 'E acordou, e repreendeu aos demônios, e disse-lhe: Cala-te! E saí!',
      gloss: T('Tres coordinadas; el habla es la última y trae dos coordinadas dentro.'),
    },
    {
      text: 'E ficou grande calma, e cessou o vento',
      gloss: T('Dos coordinadas: {quedó} y {cesó} son verbos del mismo grado.'),
    },
    {
      text: 'Por que tendes por foro? Não haveis fé ainda?',
      gloss: T('Dos coordinadas dentro de una {sustantiva directa}.'),
    },
    {
      text: 'E eles se admiravam uns dos outros',
      gloss: T(
        'Coordinada; {los unos a otros} es pronombre recíproco, y el referente son los discípulos.',
      ),
    },
    {
      text: 'uns dos outros',
      gloss: T('Pronombre recíproco: la acción es mutua, y el sujeto no es Jesús.'),
    },
  ],
  tables: [
    {
      caption: T('Las subordinadas del pasaje'),
      head: [T('Trecho'), T('Conectivo'), T('Valor'), T('Grau'), T('Verbo')],
      rows: [
        [
          T('{Passemos para o outro lado}'),
          T('{nenhum, é fala}'),
          T('{substantiva direta}'),
          T('{primeiro}'),
          T('{passemos}'),
        ],
        [
          T('{de modo que já estava se enchendo}'),
          T('{de modo que}'),
          T('{adverbial consecutiva}'),
          T('{primeiro}'),
          T('{estava}'),
        ],
        [
          T('{Cala-te! E saí!}'),
          T('{nenhum, é fala}'),
          T('{substantiva direta}'),
          T('{primeiro}'),
          T('{cala-te}, {saí}'),
        ],
        [
          T('{Por que tendes por foro?}'),
          T('{nenhum, é fala}'),
          T('{substantiva direta}'),
          T('{primeiro}'),
          T('{tendes}'),
        ],
        [
          T('{Não haveis fé ainda?}'),
          T('{nenhum, é fala}'),
          T('{substantiva direta}'),
          T('{segundo}'),
          T('{haveis}'),
        ],
      ],
    },
    {
      caption: T('El párrafo, período por período'),
      head: [T('Versículo'), T('Verbos'), T('Orações'), T('Como se dividem')],
      rows: [
        [T('{Marcos 4, 35}'), T('2'), T('2'), T('principal + substantiva direta')],
        [T('{Marcos 4, 36}'), T('2'), T('2'), T('principal + coordenada aditiva')],
        [T('{Marcos 4, 37}'), T('3'), T('3'), T('principal + coordenada + consecutiva')],
        [
          T('{Marcos 4, 38}'),
          T('6'),
          T('6'),
          T('principal + três coordenadas + fala com uma coordenada'),
        ],
        [T('{Marcos 4, 39}'), T('2'), T('2'), T('principal + coordenada aditiva')],
        [T('{Marcos 4, 40}'), T('3'), T('3'), T('principal + fala com uma coordenada')],
        [T('{Marcos 4, 41}'), T('2'), T('2'), T('principal + coordenada aditiva')],
        [T('{total}'), T('20'), T('20'), T('7 principais, 9 coordenadas, 4 subordinadas')],
      ],
    },
    {
      caption: T('El grado por la distancia'),
      head: [T('Oração'), T('Depende de'), T('Grau'), T('Exemplo')],
      rows: [
        [
          T('{Passemos para o outro lado}'),
          T('{disse}'),
          T('{primeiro}'),
          T('depende só da principal'),
        ],
        [T('{de modo que}'), T('{levantou-se}'), T('{primeiro}'), T('depende só da principal')],
        [T('{Cala-te! E saí!}'), T('{disse-lhe}'), T('{primeiro}'), T('é o objeto do verbo')],
        [
          T('{Não haveis fé ainda?}'),
          T('{Por que tendes por foro?}'),
          T('{segundo}'),
          T('está dentro da primeira fala'),
        ],
        [
          T('{E os discípulos o seguiam}'),
          T('nada'),
          T('{coordenada}'),
          T('independente da principal'),
        ],
        [T('{e cessou o vento}'), T('nada'), T('{coordenada}'), T('independente da principal')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'En {Y les dijo: «¿Por qué decís que es foro? ¿No tenéis fe aún?»}, la oración {¿No tenéis fe aún?} es:',
    ),
    options: [
      T('una coordinada de segundo grado, porque está dentro del habla'),
      T('una coordinada de primer grado, del mismo período que {les dijo}'),
      T('una subordinada sustantiva directa de primer grado'),
      T('una subordinada adverbial final, porque viene al final del período'),
    ],
    answer: 0,
    hint: T('El grado cuenta la distancia: ¿dónde está esta oración respecto a {les dijo}?'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Cuántas oraciones subordinadas aparecen en Marcos 4, 35-41?'),
      options: [
        T('cuatro: tres {sustantivas directas} y una {adverbial consecutiva}'),
        T('siete: una en cada versículo'),
        T('dos: una en Marcos 4, 37 y otra en Marcos 4, 38'),
        T('ninguna: el pasaje es todo coordinación'),
      ],
      answer: 0,
      hint: T('Busca los tres hablas de Jesús y la oración introducida por {de modo que}.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el pasaje con el grado que tiene su subordinada.'),
      pairs: [
        { a: T('{Pasemos al otro lado}'), b: T('primer grado') },
        { a: T('{de modo que ya estaba}'), b: T('primer grado') },
        { a: T('{¿No tenéis fe aún?}'), b: T('segundo grado') },
        { a: T('{y cesó el viento}'), b: T('coordinada, sin grado') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('En Marcos 4, 35-41 hay ______ verbos, y por ahí empieza el análisis.'),
      answer: 'vinte',
      hint: T('Siete versículos, veinte verbos.'),
    },
  ],
};
