import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  section: T('El verbo: forma y tiempo'),
  title: T('El verbo: el aspecto verbal'),
  subtitle: T('falou, falava, tinha falado, y lo que hace la flexión'),
  body: C(`## El perfecto y el imperfecto

Los dos pretéritos del portugués no se distinguen por tiempo, sino por aspecto. El **perfecto** presenta la acción como entera y concluida: {falou}, {escreveu}, {chegou}. El **imperfecto** presenta la acción como proceso en curso o como costumbre: {falava}, {escrevia}, {chegava sempre cedo}.

La diferencia se ve mejor con los dos verbos en un ejemplo: {Ele saiu quando eu chegava}. {Chegou} es perfecto porque la llegada está entera; {chegava} es imperfecto porque el texto quiere decir que ya iba de camino y que la llegada no había terminado. El aspecto del portugués no responde cuánto, responde se la acción está hecha.

## El aspecto compuesto

El portugués también tiene aspecto compuesto, y viene del latín. El **pluscuamperfecto** es {tinha falado} o {havia falado}: los dos significan lo mismo, y el segundo es la forma más literaria y la más cercana al original latino. Aparece en la narrativa, y es la manera que tiene el portugués de decir que la acción ya había terminado antes de que empezara otra.

Hay además un futuro compuesto con el mismo material: {quando eu tiver falado com ele}, donde el verbo {ter} en futuro construye la perífrasis. Es la única manera de decir «haber hablado» como evento futuro, y es la forma que {ter de} usa por debajo.

## El imperfecto que habla del futuro

La regla que más engaña en la lectura bíblica es que el **imperfecto también sirve para el futuro**. En portugués, el futuro del pasado es imperfecto: {Ele ia sair quando chegou}, {Eu ia visitá-lo}, {A chuva ia cair}.

Es una reliquia del sistema portugués, y ocurre porque el verbo latino terminaba en {-amābam} y llevaba futuro e imperfecto en la misma forma. En portugués la forma {ia} sirve de futuro y de imperfecto a la vez. Lo que el texto dice es que la acción iba a empezar, y algo la interrumpió.

Para el traductor la consecuencia es práctica: una forma de futuro en el griego, una forma de imperfecto en el portugués. Donde el griego usa el futuro para decir lo que va a pasar, el portugués usa el imperfecto, y traducir con el futuro pierde el corte.

## Criterio de lectura

Con cualquier verbo en pasado, pregúntate: ¿es perfecto o imperfecto? Y si es pluscuamperfecto, ¿la acción ya había terminado? ¿Y el texto habla del pasado o del futuro del pasado?

El Salmo 118.6 abre con un presente: el Señor {é} la fuerza y el canto de quien habla. Quien traduce del griego encuentra allí un perfecto y tiene que entender que esa forma griega puede querer decir {é}. Es el aspecto resolviendo el tiempo: el portugués lo resuelve con {é}, y quien escribe {foi} cambió la certeza de la frase por una noticia.`),
  vocab: [
    V('falou', 'falar', 'habló'),
    V('falava', 'falar', 'hablaba'),
    V('havia falado', 'falar', 'había hablado'),
    V('tinha falado', 'falar', 'tenía hablado'),
    V('chegou', 'chegar', 'llegó'),
    V('chegava', 'chegar', 'llegaba'),
    V('ia sair', 'sair', 'iba a salir'),
    V('escreveu', 'escrever', 'escribió'),
    V('escrevia', 'escrever', 'escribía'),
    V('o aspecto', 'aspecto', 'el aspecto'),
    V('o perfeito', 'perfeito', 'el pretérito perfecto'),
    V('o imperfeito', 'imperfeito', 'el pretérito imperfecto'),
    V('o mais-que-perfeito', 'mais-que-perfeito', 'el pretérito pluscuamperfecto'),
    V('o futuro', 'futuro', 'el futuro'),
    V('o verbo', 'verbo', 'el verbo'),
  ],
  rules: [
    {
      n: '§1',
      text: T('El perfecto presenta la acción como entera y concluida: {falou}, {chegou}.'),
    },
    {
      n: '§2',
      text: T(
        'El imperfecto presenta la acción como proceso en curso o como costumbre: {falava}, {chegava sempre cedo}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'El pluscuamperfecto es {tinha falado} o {havia falado}, y marca una acción ya terminada antes de que empezara otra.',
      ),
    },
    {
      n: '§4',
      text: T('El imperfecto también expresa futuro del pasado: {ia sair}, {ia chover}.'),
    },
    {
      n: '§5',
      text: T('El aspecto no indica tiempo: indica si la acción está entera o en proceso.'),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'El griego hace lo mismo con el aoristo y el imperfecto, y por eso la traducción literal conserva las dos formas sin esfuerzo. El problema aparece cuando el griego usa el perfecto con valor de presente.',
      ),
    },
    {
      label: T('Forma literaria'),
      text: T(
        '{havia falado} es más literario y más antiguo que {tinha falado}. En las traducciones de 1611 aparece el {havia}; en el lenguaje de hoy casi solo el {ter}.',
      ),
    },
  ],
  examples: [
    { text: 'Ele saiu quando eu chegava.', gloss: T('Perfecto e imperfecto en la misma frase.') },
    { text: 'Falou a verdade.', gloss: T('Acción entera.') },
    { text: 'Falava toda noite.', gloss: T('Costumbre, con el imperfecto.') },
    {
      text: 'Ele tinha falado antes.',
      gloss: T('Pluscuamperfecto: la acción ya había terminado.'),
    },
    { text: 'Ele ia sair quando chegou.', gloss: T('Imperfecto con valor de futuro del pasado.') },
    { text: 'A chuva ia cair.', gloss: T('Lo que iba a pasar y fue interrumpido.') },
    { text: 'Havia falado com ele.', gloss: T('La forma más literaria del mismo tiempo.') },
    { text: 'Quando eu tiver falado, saio.', gloss: T('Futuro compuesto con el mismo {ter}.') },
  ],
  tables: [
    {
      caption: T('Perfecto e imperfecto'),
      head: ['Aspecto', 'Exemplo', 'O que apresenta'],
      rows: [
        ['perfeito', 'falou', 'ação inteira e concluída'],
        ['imperfeito', 'falava', 'ação em curso'],
        ['imperfeito', 'falava toda noite', 'costume'],
        ['mais-que-perfeito', 'tinha falado', 'ação terminada antes de outra'],
      ],
    },
    {
      caption: T('O aspecto na narrativa'),
      head: ['Frase', 'Verbo', 'Aspecto'],
      rows: [
        ['Ele saiu quando eu chegava.', 'saiu', 'perfeito'],
        ['Ele saiu quando eu chegava.', 'chegava', 'imperfeito'],
        ['Ele tinha chegado antes.', 'tinha chegado', 'mais-que-perfeito'],
      ],
    },
    {
      caption: T('Os tempos do português'),
      head: ['Tempo', 'Forma', 'Exemplo'],
      rows: [
        ['presente', 'falo', 'falo agora'],
        ['perfeito', 'falei', 'falei ontem'],
        ['imperfeito', 'falava', 'falava antes'],
        ['mais-que-perfeito', 'tinha falado', 'tinha falado ontem'],
        ['futuro', 'falarei', 'falarei amanhã'],
        ['condicional', 'falaria', 'falaria se pudesse'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué verbo presenta la acción como entera?'),
    options: [T('chegou'), T('chegava'), T('chegaria'), T('havia chegado')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{ia sair} es un imperfecto con valor de ______.'),
      answer: 'futuro',
      hint: T('Es el futuro del pasado.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué forma es el pluscuamperfecto?'),
      options: [T('tinha falado'), T('falou'), T('falava'), T('falaria')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona el aspecto con el ejemplo.'),
      pairs: [
        { a: T('perfeito'), b: T('chegou') },
        { a: T('imperfeito'), b: T('chegava') },
        { a: T('mais-que-perfeito'), b: T('tinha chegado') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
};
