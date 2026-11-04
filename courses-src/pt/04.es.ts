import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('Pasado: perfecto e imperfecto'),
  subtitle: T('falou × falaba: suceso y escenario'),
  section: T('El verbo: forma y tiempo'),
  body: C(`## Hecho y escena: las dos luces del pasado

El portugués habla del pasado con dos verbos de oficios distintos. El **perfecto** presenta el pasado como suceso delimitado: {falou}, {partiu}, {houve}, {chegou}. El **imperfecto** presenta escena, costumbre o estado en curso: {falava}, {partia}, {havia}, {morava}. Cuando los dos aparecen en la misma frase, el texto gana narrativa: {enquanto ele falava, o anjo entrou}.

La imagen que funciona: el imperfecto es el decorado y el perfecto es lo que ocurre en él. {Chovia quando saímos} tiene el mismo diseño que {enquanto pregava, veio o anjo}: circunstancia en imperfecto, suceso en perfecto.

Y conviene decirlo con cuidado: esa distinción no es la del griego. El griego antiguo tiene aoristo (εἶπε, habló una vez) e imperfecto (ἐλάλου, hablaba), y el portugués bíblico buscó el aoristo con el perfecto. Pero el griego antiguo usaba también el imperfecto para la acción habitual y el aoristo para la acción repetida, sin que la traducción siempre distinguiera. Leer la traducción como si fuera correspondencia mecánica pierde lo que el griego tenía.

## El pluscuamperfecto: el pasado que ya pasó

El **pluscuamperfecto** ({tinha dito}, {havia chegado}) marca la acción pasada como anterior a otra acción pasada. Solo existe cuando hay dos pasados, y es lo que permite decir {quando ele chegou, eu já tinha saído} sin ambigüedad.

Es un tiempo más formal, común en textos históricos y narrativos largos, y raro en el habla. En traducción bíblica aparece donde el griego tenía pluscuamperfecto (ἐτύγχανε, «había encontrado»), y traducirlo por {tinha encontrado} suele ser mejor que por {encontrou}.

## Jn 1:1: era, y nada más

En Jn 1:1, {era} (ἦν) es imperfecto en griego, y el imperfecto describe existencia continua. La frase contrasta dos tiempos a propósito: el Verbo era con Dios, y todo lo que existe fue creado después, en el tiempo que empieza en Gén 1:1. El verbo griego de la creación es {ἐγένετο} ({fue}, perfecto), y por eso el contraste es {era} frente a {fue}.

Traducir los dos por {era} borra el contraste; traducir {ἦν} por {existía} y {ἐγένετο} por {fue} muestra lo que hace el griego. La traducción Almeida acierta al usar {era} para {ἦν} y {fue} para {ἐγένετο}, pero la lectura que permite concluir que todo imperfecto griego significa «eterno» está equivocada, porque el griego usaba el imperfecto también para lo simplemente continuo.

## Criterio de lectura

En cualquier frase en pasado, pregunta: ¿el verbo es delimitado (perfecto) o en curso (imperfecto)? ¿Hay pluscuamperfecto, el pasado del pasado? ¿Y el griego original está en aoristo, imperfecto o perfecto, tres cosas que el portugués traduce a veces con la misma palabra? La respuesta es la diferencia entre leer el texto y traducir el texto.`),
  vocab: [
    V('falou', 'falar', 'habló (perfecto)'),
    V('falava', 'falar', 'hablaba (imperfecto)'),
    V('era', 'ser', 'era'),
    V('foi', 'ser', 'fue'),
    V('disse', 'dizer', 'dijo'),
    V('havia', 'haver', 'había'),
    V('tinha', 'ter', 'tenía'),
    V('haviam', 'haver', 'habían'),
    V('partiu', 'partir', 'partió (perfecto)'),
    V('partia', 'partir', 'partía (imperfecto)'),
    V('houve', 'haver', 'hubo (perfecto)'),
    V('Verbo', 'Verbo', 'el Verbo (Logos)'),
    V('Jesus', 'Jesus', 'Jesús'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En «Jesús hablaba con ellos», el verbo está en:'),
    options: [T('imperfecto'), T('perfecto'), T('futuro'), T('infinitivo')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: «En el principio, ___ el Verbo».'),
      answer: 'era',
      hint: T('Forma de ser en imperfecto.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué oración presenta un suceso puntual?'),
      options: [
        T('La multitud gritaba.'),
        T('Jesús dijo: «He venido».'),
        T('El amor permanecía.'),
        T('Nosotros esperábamos.'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Relaciona la forma con su valor.'),
      pairs: [
        { a: T('dijo'), b: T('suceso') },
        { a: T('discutía'), b: T('escena en curso') },
        { a: T('había dicho'), b: T('pasado anterior') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'El perfecto es el pasado como suceso delimitado: {falou}, {partiu}, {houve}. El imperfecto es escena, costumbre o estado en curso: {falava}, {partia}, {havia}. En una misma frase, el imperfecto es el decorado y el perfecto es lo que ocurre en él.',
      ),
    },
    {
      n: '§2',
      text: T(
        'El pluscuamperfecto ({tinha dito}, {havia chegado}) solo existe con dos pasados, y es lo que dice que uno de ellos es anterior al otro: {quando ele chegou, eu já tinha saído}.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{ἦν} ({era}) es imperfecto y {ἐγένετο} ({foi}) es aoristo: el versículo contrasta lo que no empezó con lo que empezó, y traducir los dos por {era} aplana el contraste con Génesis 1:1.',
      ),
    },
    {
      n: '§4',
      text: T(
        'El griego antiguo usaba el imperfecto también para lo simplemente continuo, y el aoristo para la acción repetida. Decir que todo imperfecto griego significa «eterno» resuelve Juan 1:1 y rompe Juan 3:16, donde {creram} es imperfecto de costumbre.',
      ),
    },
    {
      n: '§5',
      text: T(
        '{enquanto ele falava, o anjo entrou} tiene los dos tiempos en la misma frase: {falava} es circunstancia ({ἐλάλου}) y {entrou} es suceso ({εἶσελθεν}). Es ese par el que da narrativa a la frase.',
      ),
    },
  ],
  notes: [
    {
      label: T('Traducción bíblica'),
      text: T(
        '{Era} en Juan 1:1 conserva el contraste griego entre el tiempo del Logos y la creación, pero no demuestra por sí solo un tiempo verbal portugués: {era} en portugués también cubre el pasado habitual.',
      ),
    },
    {
      label: T('Dónde ayuda el griego'),
      text: T(
        'Donde el griego tenía pluscuamperfecto ({ἐτύγχανε}, «había encontrado»), {tinha encontrado} es mejor que {encontrou}: solo el portugués conserva la {tinha} que dice que el encuentro vino antes.',
      ),
    },
  ],
  examples: [
    {
      text: 'No princípio era o Verbo.',
      gloss: T('{ἦν}: existencia continua, el tiempo del Logos.'),
    },
    {
      text: 'E todas as coisas foram feitas por ele.',
      gloss: T('{ἐγένετο}: aoristo, lo que empezó.'),
    },
    {
      text: 'Deus disse: “Haja luz”; e houve luz.',
      gloss: T('Dos perfectos puntuales en secuencia.'),
    },
    {
      text: 'Enquanto ele falava, o anjo entrou.',
      gloss: T('Imperfecto de decorado y perfecto de suceso.'),
    },
    {
      text: 'Muitos creram naquilo.',
      gloss: T('{creram} es imperfecto de costumbre, no de suceso.'),
    },
    {
      text: 'Jesus falava com eles.',
      gloss: T('Imperfecto que describe lo que acostumbraba ocurrir.'),
    },
    {
      text: 'Quando ele chegou, eu já tinha saído.',
      gloss: T('Dos pasados: el pluscuamperfecto marca el anterior.'),
    },
    { text: 'A multidão gritava.', gloss: T('Escena en curso, con efecto de duración.') },
    {
      text: 'A lei foi dada por Moisés.',
      gloss: T('Perfecto: suceso con agente expresado por {por}.'),
    },
  ],
  tables: [
    {
      caption: T('Los tres tiempos del pasado'),
      head: ['Tempo', 'Forma', 'Exemplo'],
      rows: [
        ['perfeito', 'falou', 'Deus falou'],
        ['imperfeito', 'falava', 'Jesus falava'],
        ['mais-que-perfeito', 'tinha falado', 'eu já tinha saído'],
      ],
    },
    {
      caption: T('Perfecto e imperfecto en el mismo griego'),
      head: ['Grego', 'Tempo', 'Português'],
      rows: [
        ['ἦν', 'imperfecto', 'era'],
        ['ἐγένετο', 'aoristo', 'foi'],
        ['ἐλάλου', 'imperfecto', 'falava'],
      ],
    },
    {
      caption: T('Una misma frase con los dos tiempos'),
      head: ['Tempo', 'Trecho', 'O que faz'],
      rows: [
        ['imperfeito', 'enquanto ele falava', 'circunstância'],
        ['perfeito', 'o anjo entrou', 'evento'],
      ],
    },
  ],
};
