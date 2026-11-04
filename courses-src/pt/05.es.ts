import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('Lectura guiada: Juan 1:1'),
  subtitle: T('El Verbo, la luz y la Palabra'),
  section: T('Lectura'),
  body: C(`## El texto en cuatro bloques

Juan 1:1-3 se deja leer en cuatro segmentos, y cada uno hace un trabajo distinto. El primero es {No princípio}, referencia temporal. El segundo es {era o Verbo}, que sitúa la existencia del Verbo antes de la creación narrada en Génesis 1:1. El tercero es {e o Verbo estava com Deus}, relación de compañía. El cuarto es {e o Verbo era Deus}, la única afirmación de naturaleza del versículo.

La diferencia entre el tercero y el cuarto es la que el traductor no puede aplanar. {estava com Deus} dice que el Verbo estaba *junto a* Dios, y el griego {ἦν πρὸς τὸν θεόν} usa el verbo {ἦν} con {πρός}, la preposición de presencia y compañía. {era Deus} dice lo que el Verbo *es*, y esa es la afirmación que el versículo existe para hacer.

## El tiempo que hace el versículo

{era} ({ἦν}) es **imperfecto** en griego, y el imperfecto describe existencia continua: el Verbo estaba, seguía estando, y el tiempo verbal no marca final. El verbo de la creación, al lado, es {ἐγένετο} ({foi}), que es **aoristo** y marca el suceso delimitado: algo pasó en un punto.

Por eso el versículo alterna los dos: {era} para lo que no empezó, {foi} para lo que empezó. Traducir los dos por {era} aplana el contraste y hace que el versículo diga que la creación también es eterna, que es justo lo que no dice.

## El artículo que el griego trae y el que no trae

En el mismo versículo el griego actúa de dos modos. {ὁ λόγος} viene con artículo, y {o Verbo} lo necesita: sin artículo, {o Verbo} sería {um verbo}, que es otra frase. {θεός} viene sin artículo, y {Deus} se queda sin él: escribir {o Deus} cambiaría lo que el versículo afirma sobre el Verbo.

Quien traduce conserva el artículo donde el griego lo pone y lo omite donde el griego lo omite. No decide el portugués; decide el griego.

## Lo que viene después

En 1:14, {se fez carne} usa {se fazer} más infinitivo y vale «llegó a ser»: no es pasiva, es una perífrasis de cambio de estado. {habitou} ({σκήνωσεν}) evoca la tienda del tabernáculo, y la imagen es la de Dios acampando en medio de su pueblo. En 1:5 la luz y las tinieblas están personificadas, y {brilha} está en presente, lo que mantiene la oposición mientras el versículo dure.

## Criterio de lectura

Lee el versículo en cuatro bloques y escribe al lado de cada uno lo que hace: fecha, existencia, compañía, naturaleza. Después, marca el tiempo de cada verbo y di cuál de los dos es el que continúa. Si los dos lados de la pregunta responden {era}, el problema está en el tiempo, no en la traducción.`),
  vocab: [
    V('princípio', 'princípio', 'principio'),
    V('Verbo', 'verbo', 'Verbo; Logos'),
    V('estava', 'estar', 'estaba'),
    V('com', 'com', 'con'),
    V('carne', 'carne', 'carne'),
    V('habitou', 'habitar', 'moró'),
    V('trevas', 'trevas', 'tinieblas'),
    V('luz', 'luz', 'luz'),
    V('graça', 'graça', 'gracia'),
    V('glória', 'glória', 'gloria'),
    V('Logos', 'Logos', 'Logos (griego λόγος)'),
    V('era', 'ser', 'era (imperfecto de ser)'),
    V('Deus', 'Deus', 'Dios'),
    V('vida', 'vida', 'vida'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Completa: «En el principio, ___ el Verbo».'),
    answer: 'era',
    hint: T('Forma de estar en el pasado narrado.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Qué significa {Logos} en este pasaje?'),
      options: [
        T('Un discurso humano'),
        T('la Palabra que se hizo carne'),
        T('Una idea abstracta'),
        T('Solo una palabra escrita'),
      ],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('En «se hizo carne», {hacerse} significa:'),
      options: [T('fue hecho'), T('se convirtió'), T('debería hacer'), T('está haciendo')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Relaciona la palabra con su sentido.'),
      pairs: [
        { a: T('tinieblas'), b: T('oposición a la luz') },
        { a: T('gracia'), b: T('favor de Dios') },
        { a: T('carne'), b: T('naturaleza humana asumida') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'El griego trae artículo en {ὁ λόγος} y el portugués escribe {o Verbo}; sin él, {o Verbo} sería {um verbo} y la frase cambiaría.',
      ),
    },
    {
      n: '§2',
      text: T(
        'El griego no trae artículo en {θεός}, y {Deus} se queda sin él: escribir {o Deus} cambia lo que el versículo afirma sobre el Verbo.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{ἦν} ({era}) es imperfecto y {ἐγένετο} ({foi}) es aoristo: el primero describe lo que continúa, el segundo lo que sucedió en un punto. Traducir los dos por {era} aplana el contraste con Génesis 1:1.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{se fazer} más infinitivo vale «llegar a ser»: {se fez carne} no es pasiva, y quien lo tradujo por {foi feito} erró la perífrasis.',
      ),
    },
    {
      n: '§5',
      text: T(
        '{ἦν πρὸς τὸν θεόν} usa {πρός}, la preposición de compañía, no {μετά}, que es «con» en el sentido de junto: esa es la diferencia entre {estava com Deus} y {estava entre Deus}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Intertextualidad'),
      text: T(
        '{No princípio} ecoa Génesis 1:1, y {habitou} ({σκήνωσεν}) evoca el tabernáculo del Éxodo, donde Dios acampó en medio del pueblo.',
      ),
    },
    {
      label: T('Por qué este versículo'),
      text: T(
        'Es el único lugar de la Biblia donde el Verbo aparece solo como sujeto de una afirmación de naturaleza. Leyendo el griego, la segunda persona de {ἦν} ({era} tú) es lo que completa la afirmación.',
      ),
    },
  ],
  examples: [
    {
      text: 'No princípio era o Verbo.',
      gloss: T('Imperfecto: el Verbo estaba y seguía estando.'),
    },
    { text: 'E o Verbo era Deus.', gloss: T('θεός sin artículo, y {Deus} se queda sin él.') },
    { text: 'E o Verbo estava com Deus.', gloss: T('{πρός}: compañía, no «entre».') },
    {
      text: 'Todas as coisas foram feitas por ele.',
      gloss: T('{ἐγένετο}: aoristo, lo que empezó.'),
    },
    {
      text: 'E sem ele nada foi feito.',
      gloss: T('La negación es {μή}, no {οὐ}, como sería en la existencia.'),
    },
    { text: 'O Verbo se fez carne.', gloss: T('{se fazer} más infinitivo: «llegó a ser».') },
    { text: 'E habitou entre nós.', gloss: T('{σκήνωσεν}: la tienda del tabernáculo.') },
    {
      text: 'E viu a glória de Deus.',
      gloss: T('{δε} tiene uso exclusivo: «nadie más», como en {não vi ninguém}.'),
    },
    { text: 'A luz brilha nas trevas.', gloss: T('Presente: el contraste continúa.') },
  ],
  tables: [
    {
      caption: T('Los cuatro bloques de Juan 1:1-3'),
      head: ['Segmento', 'Grego', 'O que faz'],
      rows: [
        ['No princípio', 'ἐν ἀρχῇ', 'data'],
        ['era o Verbo', 'ἦν ὁ λόγος', 'existência contínua'],
        ['estava com Deus', 'ἦν πρὸς τὸν θεόν', 'companhia'],
        ['era Deus', 'ἦν θεός', 'natureza'],
      ],
    },
    {
      caption: T('Los dos tiempos que el versículo alterna'),
      head: ['Tempo', 'Grego', 'Português'],
      rows: [
        ['imperfeito', 'ἦν', 'era, estava'],
        ['aoristo', 'ἐγένετο', 'foi'],
        ['presente', 'φαίνει', 'brilha'],
      ],
    },
    {
      caption: T('Artículo: donde el griego lo pone y donde no'),
      head: ['Grego', 'Português', 'Se traduzir com artigo'],
      rows: [
        ['ὁ λόγος', 'o Verbo', 'vira “um verbo”'],
        ['θεός', 'Deus', 'vira “o Deus”'],
      ],
    },
  ],
};
