import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  section: T('La estructura del período'),
  title: T('Análisis del período compuesto'),
  subtitle: T('El procedimiento de análisis, paso a paso'),
  body: C(`**Visión general.** Primero se cuentan los verbos: en {Dijo Jesús: «¿Quiénes son estos?»} hay dos, {dijo} y {son}, y por tanto dos oraciones.

**Regla 1.** Después se separa lo {independiente} de lo {dependiente}: el habla {¿Quiénes son estos?} completa el verbo {dijo}, y por eso es {sustantiva directa}.

**Regla 2.** Lo que completa un verbo de la principal es {sustantiva directa}, y lo que trae consecuencia es {adverbial consecutiva}: en {de modo que ya estaba llenándose}, el valor es de consecuencia.

**Regla 3.** El {grado} se cuenta por la distancia: {Pasemos al otro lado} depende solo de {dijo} y es de primer grado; {¡Cállate! Y sal!} depende del habla y es de segundo grado.

**Regla 4.** El {habla reproducida} sin conectivo ocupa el lugar de la {sustantiva directa}: en {Y dijo: ¡Cállate!}, lo que es objeto de {dijo} es el habla entera, y no {Cállate}.

**Aplicación.** En {Dijo Jesús: «¿Quiénes son estos?»}, el período tiene **dos** oraciones: {Dijo Jesús} (principal, verbal) y {¿Quiénes son estos} (subordinada **sustantiva** directa, objeto de {dijo}). Dentro de la primera, {Jesús} es sujeto y {Dijo} el verbo. Dentro de la segunda, {estos} es sujeto, {son} verbo y {quién} pronombre interrogativo. Y el **habla** es el propio contenido de la subordinada, y el griego hace lo mismo con {τίς οὗτοί εἰσιν}.

**Verificación.** Recorre seis pasos en orden. Uno: cuenta los verbos. Dos: separa lo {principal} de lo {subordinada}. Tres: pregunta a cada subordinada **qué** completa. Cuatro: si completa un verbo, es {sustantiva}; si caracteriza un nombre, es {adjetiva}; si indica circunstancia, es {adverbial}. Cinco: cuenta el {grado} por la distancia. Seis: nombra la función dentro de la principal. El análisis sale sin depender de la intuición.`),
  vocab: [
    V('período composto', 'período composto', 'período con dos o más oraciones'),
    V('verbo conjugado', 'verbo conjugado', 'marca el inicio de cada oración'),
    V('oração coordenada', 'oração coordenada', 'independiente, del mismo grado'),
    V('oração subordinada', 'oração subordinada', 'depende de un término de la principal'),
    V('substantiva', 'substantiva', 'funciona como sustantivo'),
    V('adjetiva', 'adjetiva', 'funciona como adjetivo'),
    V('adverbial', 'adverbial', 'indica circunstancia'),
    V('reduzida', 'reduzida', 'sin verbo conjugado propio'),
    V('τίς οὗτοί εἰσιν', 'τίς οὗτοί εἰσιν', 'la pregunta de Jesús en griego'),
    V('Cala-te! E saí!', 'Cala-te! E saí!', 'habla con dos coordinadas dentro'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Primero se cuentan los verbos: en {Dijo Jesús: «¿Quiénes son estos?»} hay dos, {dijo} y {son}, y por tanto dos oraciones.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Después se separa lo {independiente} de lo {dependiente}: el habla {¿Quiénes son estos?} completa el verbo {dijo}, y por eso es {sustantiva directa}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'Lo que completa un verbo de la principal es {sustantiva directa}, y lo que trae consecuencia es {adverbial consecutiva}: en {de modo que ya estaba llenándose}, el valor es de consecuencia.',
      ),
    },
    {
      n: '§4',
      text: T(
        'El {grado} se cuenta por la distancia: {Pasemos al otro lado} depende solo de {dijo} y es de primer grado; {¡Cállate! Y sal!} depende del habla y es de segundo grado.',
      ),
    },
    {
      n: '§5',
      text: T(
        'El {habla reproducida} sin conectivo ocupa el lugar de la {sustantiva directa}: en {Y dijo: ¡Cállate!}, lo que es objeto de {dijo} es el habla entera, y no {Cállate}.',
      ),
    },
  ],
  notes: [
    {
      label: T('El procedimiento que sustituye a la intuición'),
      text: T(
        'El análisis sintáctico se vuelve fácil cuando la pregunta es siempre la misma: ¿qué completa esta oración? Si completa un verbo, es {sustantiva}. Si caracteriza un nombre, es {adjetiva}. Si indica tiempo, causa o finalidad, es {adverbial}. La pregunta no cambia de lección a lección, y por eso se memoriza el procedimiento: no el resultado.',
      ),
    },
    {
      label: T('El grado que la puntuación no revela'),
      text: T(
        'En Marcos 4, 38 el punto y coma separa dos coordinadas, y el punto y coma de Marcos 4, 37 separa la principal de una coordenada y de una subordinada. La misma puntuación marca cosas distintas, y por eso el grado se cuenta por la estructura y no por la señal. Quien cuenta el grado por la coma falla justo en los versículos más densos.',
      ),
    },
  ],
  examples: [
    {
      text: 'Disse Jesus: «Quem são estes?»',
      gloss: T('Dos oraciones: {Dijo Jesús} y el habla, que es {sustantiva directa}.'),
    },
    {
      text: 'E, ao anoitecer, disse: Passemos para o outro lado',
      gloss: T('El habla es {sustantiva directa} de primer grado, sin conectivo escrito.'),
    },
    {
      text: 'de modo que já estava se enchendo de água',
      gloss: T(
        'Subordinada {adverbial consecutiva} de primer grado, introducida por {de modo que}.',
      ),
    },
    {
      text: 'Cala-te! E saí!',
      gloss: T('Un habla con dos coordinadas dentro: {¡Cállate!} y {¡Sal!}.'),
    },
    {
      text: 'o barco queDependent',
      gloss: T('La oración {que Dependent} es {adjetiva restrictiva}: limita el nombre {barco}.'),
    },
    {
      text: 'Vinde, e segui-me',
      gloss: T('Dos coordinadas: {Venid} y {seguidme}, ambas independientes.'),
    },
    {
      text: 'Creio, porque tu és o Filho',
      gloss: T('Principal {Creo} y subordinada {adverbial causal} de primer grado.'),
    },
    {
      text: 'É necessário que venhas',
      gloss: T('La subordinada {sustantiva subjetiva} ocupa el lugar del sujeto de {es}.'),
    },
    {
      text: 'τίς οὗτοί εἰσιν',
      gloss: T('La pregunta griega que corresponde a {¿Quiénes son estos?}, con el mismo valor.'),
    },
  ],
  tables: [
    {
      caption: T('Los seis pasos del análisis'),
      head: [T('Passo'), T('Pergunta'), T('O que se procura'), T('Exemplo')],
      rows: [
        [T('1'), T('quantos verbos há?'), T('o número de orações'), T('{disse}, {são}')],
        [
          T('2'),
          T('qual é a principal?'),
          T('a oração que os demais completam'),
          T('{Disse Jesus}'),
        ],
        [
          T('3'),
          T('o que cada subordinada completa?'),
          T('a função de cada uma'),
          T('{Quem são estes}'),
        ],
        [
          T('4'),
          T('é substantiva, adjetiva ou adverbial?'),
          T('o tipo'),
          T('{substantiva direta}'),
        ],
        [T('5'), T('a que distância está da principal?'), T('o grau'), T('{primeiro grau}')],
        [
          T('6'),
          T('que papel tem dentro da principal?'),
          T('a função final'),
          T('{objeto de disse}'),
        ],
      ],
    },
    {
      caption: T('Subordinadas y qué completa cada una'),
      head: [T('Tipo'), T('O que completa'), T('Pode ser trocada por'), T('Exemplo')],
      rows: [
        [
          T('{substantiva direta}'),
          T('objeto de um verbo'),
          T('{isso}'),
          T('{Creio que isto é verdade}'),
        ],
        [
          T('{substantiva subjetiva}'),
          T('sujeito de um verbo'),
          T('{isso}'),
          T('{É necessário que venhas}'),
        ],
        [
          T('{substantiva predicativa}'),
          T('complemento nominal'),
          T('{isso}'),
          T('{Certo é que ele veio}'),
        ],
        [
          T('{adjetiva restritiva}'),
          T('um nome, para limitar'),
          T('{que}, {o qual}'),
          T('{o barco que vias}'),
        ],
        [
          T('{adjetiva explicativa}'),
          T('um nome, para explicar'),
          T('{que}, {o qual}'),
          T('{o barco, que era velho}'),
        ],
        [
          T('{adverbial causal}'),
          T('a causa do que se afirma'),
          T('{isso}'),
          T('{não fui, porque era tarde}'),
        ],
        [
          T('{adverbial final}'),
          T('a finalidade do que se faz'),
          T('{isso}'),
          T('{vim para que vês}'),
        ],
      ],
    },
    {
      caption: T('Grado de las oraciones en el período'),
      head: [T('Grau'), T('Depende de'), T('Distância da principal'), T('Exemplo')],
      rows: [
        [T('primeiro'), T('da principal'), T('imediata'), T('{Passemos para o outro lado}')],
        [T('segundo'), T('de uma subordinada'), T('uma oração dentro'), T('{Cala-te! E saí!}')],
        [
          T('terceiro'),
          T('de uma do segundo grau'),
          T('duas orações dentro'),
          T('raro na Escritura'),
        ],
        [
          T('{reduzida}'),
          T('de qualquer termo'),
          T('sem verbo próprio'),
          T('{Caminhando para Ele}'),
        ],
        [T('{coordenada}'), T('da principal'), T('mesmo grau que a principal'), T('{E saiu}')],
        [T('{principal}'), T('de nada'), T('ponto de partida'), T('{Disse Jesus}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Dijo Jesús: «¿Quiénes son estos?»}, el habla {¿Quiénes son estos?} es:'),
    options: [
      T('sustantiva directa de primer grado, objeto de {dijo}'),
      T('oración principal, porque va después del verbo'),
      T('adjetiva explicativa de {Jesús}'),
      T('coordinada asindética de {Dijo Jesús}'),
    ],
    answer: 0,
    hint: T('La pregunta que decide: ¿qué completa el habla? Completa el verbo {dijo}.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('En {de modo que ya estaba llenándose}, la subordinada es:'),
      options: [
        T('adverbial consecutiva, porque trae el resultado'),
        T('sustantiva directa, porque completa un verbo'),
        T('adjetiva restrictiva, porque limita un nombre'),
        T('coordinada conclusiva, porque va después'),
      ],
      answer: 0,
      hint: T('{De modo que} es el conectivo de las consecutivas.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el pasaje con el tipo de oración que contiene.'),
      pairs: [
        { a: T('{Venid, y seguidme}'), b: T('coordinada') },
        { a: T('{¡Cállate! Y sal!}'), b: T('habla con dos coordinadas') },
        { a: T('{Pasemos al otro lado}'), b: T('sustantiva directa de primer grado') },
        { a: T('{porque tú eres el Hijo}'), b: T('adverbial causal') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('El número de oraciones de un período es el número de ______ que tiene.'),
      answer: 'verbos',
      hint: T('Dos verbos, dos oraciones.'),
    },
  ],
};
