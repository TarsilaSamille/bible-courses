import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  section: T('Lectura'),
  title: T('Capstone de lectura: Marcos 4, 35-41'),
  subtitle: T('passemos, adormeceu, cala-te, y leer verbo, conjunción y adverbio'),
  body: C(`## El texto

El pasaje va del anochecer al silencio después de la tormenta, y cabe en siete versículos. La parte que importa aquí está en estas frases: {E, ao anoitecer, disse aos seus discípulos: Passemos para o outro lado. E ele mesmo passou primeiro para o outro lado}. Después, la barca ya estaba casi llena: {de modo que já estava se enchendo de água}. Y entonces, {ele, no meio da tempestade, adormeceu; e acordou, e repreendeu aos demônios, e disse-lhe: Cala-te, e saí!}. Al final, la única pregunta: {Por que tendes por foro? Não haveis fé ainda?}

Son siete versículos, treinta y tantos verbos y una sola pregunta. Quien lo haya leído ya tiene pronombres, adverbios, conjunciones y verbos suficientes para leer cualquier capítulo del Nuevo Testamento.

## Dónde está el verbo y en qué modo

Lo que llama la atención es la distribución. El **pretérito perfecto** domina la narrativa: {disse}, {passou}, {levantou-se}, {adormeceu}, {acordou}, {repreendeu}, {saiu}, {cessou}, {disse}. Son nueve acciones contadas una a una, y cada una con su verbo en un solo momento.

El **imperfecto** hace el trabajo de fondo: describe el estado de la barca y de la tormenta mientras suceden las acciones contadas. Ninguna de las acciones descritas ocurrió como suceso; son las condiciones que estaban en curso mientras las otras nueve sucedían, y por eso la traducción literal trae el imperfecto para el fondo de la escena. Y hay un **subjuntivo** en la primera frase, {passemos}, que es el imperativo disfrazado: el griego dice «vamos a pasar», y el portugués lo escribe en subjuntivo.

El **imperativo** de verdad está en {Cala-te, e saí}, y es la única frase del texto en que Jesús habla con poder sobre algo, y no con una pregunta.

## Las conjunciones y los adverbios

Las conjunciones del pasaje son pocas, y cada una cumple una función. {E} suma seis acciones, {mas} opone el sueño de Jesús al estado de la barca, {de modo que} explica la causa de la inundación. Nada más.

Los adverbios hacen el trabajo fino. {Primeiro} marca el orden en la barca; {já} marca el aspecto y dice que el llenado ya estaba en curso antes de que Jesús despertara; {meio} marca el lugar dentro de la tormenta; {não} niega lo que ellos tenían; {ainda} niega después de la negación.

## Criterio de lectura

En cualquier texto bíblico, pregúntate: ¿dónde está el verbo, y es perfecto, imperfecto, subjuntivo o imperativo? ¿Dónde está la conjunción, y qué liga? ¿Dónde está el adverbio, y marca tiempo, modo o aspecto?

Mc 4.35-41 es el ejemplo más limpio de lectura hecha con tres preguntas. La pregunta final, {Por que tendes por foro?}, pone todo el texto contra el oyente: el verbo está en presente ({tendes}), la negación va antes ({não haveis}), y el adverbio {ainda} dice que la falta de fe continuaba.`),
  vocab: [
    V('o temporal', 'temporal', 'la tormenta'),
    V('as ondas', 'onda', 'las olas'),
    V('o barco', 'barco', 'la barca'),
    V('adormeceu', 'adormecer', 'se durmió'),
    V('acordou', 'acordar', 'despertó'),
    V('repreendeu', 'repreender', 'reprendió'),
    V('cessou', 'cessar', 'cesó'),
    V('passou', 'passar', 'pasó'),
    V('levantou-se', 'levantar-se', 'se levantó'),
    V('disse', 'dizer', 'dijo'),
    V('calma-te', 'calar', '¡cállate!'),
    V('passemos', 'passar', 'pasemos'),
    V('batiam', 'bater', 'golpeaban'),
    V('o foro', 'foro', 'el timón'),
    V('a tempestade', 'tempestade', 'la tempestad'),
    V('tendes', 'ter', 'tenéis'),
    V('haveis', 'haver', 'habéis'),
  ],
  rules: [
    {
      n: '§1',
      text: T('El pretérito perfecto cuenta la acción una a una: {disse}, {passou}, {adormeceu}.'),
    },
    { n: '§2', text: T('El imperfecto hace el fondo: {as ondas batiam}, {era}.') },
    { n: '§3', text: T('El subjuntivo {passemos} es el imperativo disfrazado: «vamos a pasar».') },
    { n: '§4', text: T('El adverbio {já} marca aspecto: la acción ya estaba en curso.') },
    {
      n: '§5',
      text: T(
        'La negación en portugués va antes del verbo: {não haveis}, y {ainda} niega después de la negación.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'El portugués no tiene el presente histórico que usa el inglés en la narrativa. Por eso Marcos 4 aparece casi todo en el perfecto, y el lector tiene que saber que toda la acción está dentro del pasado narrado.',
      ),
    },
    {
      label: T('El adverbio que es aspecto'),
      text: T(
        '{Já} no marca tiempo: marca que la acción ya estaba en curso antes de otro suceso. Es el mismo valor que el griego da a {ἤδη}, y es lo que lleva el aspecto del verbo.',
      ),
    },
  ],
  examples: [
    { text: 'Passemos para o outro lado.', gloss: T('Subjuntivo presente: «vamos a pasar».') },
    { text: 'Ele mesmo passou primeiro.', gloss: T('Pretérito perfecto y adverbio de orden.') },
    { text: 'As ondas batiam contra o barco.', gloss: T('Imperfecto: el fondo de la escena.') },
    { text: 'Já estava se enchendo de água.', gloss: T('Imperfecto con {já}: aspecto en curso.') },
    {
      text: 'Adormeceu no meio da tempestade.',
      gloss: T('Pretérito perfecto con adverbio de lugar.'),
    },
    { text: 'Cala-te, e saí!', gloss: T('Imperativo con clítico: la única frase de poder.') },
    { text: 'Por que tendes por foro?', gloss: T('Presente del indicativo en una pregunta.') },
    { text: 'Não haveis fé ainda?', gloss: T('Negación antes del verbo, {ainda} después.') },
  ],
  tables: [
    {
      caption: T('Los verbos del pasaje'),
      head: ['Modo', 'Verbos', 'O que faz'],
      rows: [
        ['perfeito', 'disse, passou, levantou-se, adormeceu, acordou', 'conta a ação uma a uma'],
        ['imperfeito', 'batiam, era', 'faz o fundo da cena'],
        ['subjuntivo', 'passemos', 'imperativo disfarçado'],
        ['imperativo', 'cala-te, saí', 'a única ordem do trecho'],
        ['presente', 'tendes, haveis', 'a pergunta final'],
      ],
    },
    {
      caption: T('Los adverbios'),
      head: ['Advérbio', 'O que marca', 'Trecho'],
      rows: [
        ['primeiro', 'ordem', 'passou primeiro'],
        ['já', 'aspecto', 'já estava se enchendo'],
        ['meio', 'lugar', 'no meio da tempestade'],
        ['não', 'negação', 'não haveis'],
        ['ainda', 'negação posterior', 'ainda'],
      ],
    },
    {
      caption: T('Las conjunciones'),
      head: ['Conjunção', 'Quantas vezes', 'O que liga'],
      rows: [
        ['e', 'seis', 'ações seguidas'],
        ['mas', 'uma', 'o sono contra o estado do barco'],
        ['de modo que', 'uma', 'a causa da inundação'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En «as ondas batiam contra o barco», el verbo está en el:'),
    options: [T('imperfecto'), T('perfecto'), T('futuro'), T('subjuntivo')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('En «{calma-te, e saí}», el verbo está en ______.'),
      answer: 'imperativo',
      hint: T('Es la única orden que da Jesús en el pasaje.'),
    },
    {
      kind: 'choose',
      prompt: T('En «já estava se enchendo de água», el adverbio {já} marca:'),
      options: [T('aspecto'), T('lugar'), T('orden'), T('negación')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona el verbo con el modo.'),
      pairs: [
        { a: T('passou'), b: T('perfeito') },
        { a: T('batiam'), b: T('imperfeito') },
        { a: T('passemos'), b: T('subjuntivo') },
        { a: T('calma-te'), b: T('imperativo') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
