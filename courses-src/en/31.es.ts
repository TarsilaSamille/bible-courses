import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  title: T('Capstone de lectura: Marcos 4,35-41 (KJV)'),
  subtitle: T('a great calm — el artículo, el auxiliar, el adverbio y la preposición'),
  section: T('Lecturas'),
  body: C(`## El pasaje

Marcos 4:35-41 en la KJV es un texto corto y está hecho para este trabajo. En siete versículos lleva todo lo que las dieciocho lecciones han atravesado: el artículo obligatorio, el verbo con auxiliar, la posición del adverbio y la preposición.

> "And when the even was come, he let them go."
> "And when they were get him into the ship, there was a great calm: but the wind blew, and the waves came into the ship, and the ship began to be filled with water."
> "And Jesus himself was in the ship: and he slept."
> "And they awaked him, and said unto him, Teacher, carest thou not that we perish?"
> "And he arose, and rebuked the wind, and said unto the sea, Peace, be still! and the wind ceased, and there was a great calm."
> "And he said unto them, Why are ye afraid? how is it that ye have no faith?"
> "And when he was come into the ship again, the wind blew: and they were again filled with water."

La lectura correcta es frase por frase, y cada frase muestra una pieza. {He let them go} muestra el auxiliar {let} con objeto indirecto. {There was a great calm} muestra {there} como sujeto y el artículo delante de un sustantivo contable.

## Dónde está el artículo

El artículo aparece nueve veces, y las nueve son sustantivos contables singulares: {the even}, {the ship}, {a great calm}, {the wind}, {the waves}, {the water}, {the sea}, {the ship again}, {the water}. Ninguno es plural y ninguno es una masa en general.

Cuando el sustantivo vuelve sin artículo, es porque ya está fijado o porque el contexto es genérico: {they awaked him}, {he let them go}. El {the wind} de la primera aparición y el {the wind} de la segunda son el mismo sustantivo con el mismo artículo, y quien escribe el viento dos veces acierta las dos.

## Dónde está el verbo con auxiliar

Hay seis construcciones con auxiliar, y juntas muestran las doce combinaciones en uso. {Let them go} es {let} más base. {Were get him into the ship} es {were} más base, y el {get} es la llave del contorno. {Began to be filled} tiene {began} más infinitivo y {to be} más participio. {Was in the ship} y {he slept} llevan el verbo sin auxiliar, y la diferencia entre ellos es el tiempo.

El contraste que todo el curso ha venido preparando está en {was come into the ship again}. El {was come} es {be} más participio, y el sentido es de vuelta después de una ausencia. El par {has gone} y {has been} es el que cambia de sentido.

## El adverbio y la preposición

El adverbio del pasaje es {again}, y aparece dos veces: {into the ship again} y {were again filled}. En las dos viene justo detrás del verbo o del auxiliar, que es la posición de un adverbio de tiempo.

Las preposiciones del pasaje son {into} dos veces, {with}, {unto} tres veces y {from}. {Into} marca el paso al interior, {with} marca el instrumento o el contenido, y {unto} es la preposición arcaica de la KJV, equivalente al {to} contemporáneo.

{Teacher} en medio de la frase de Marcos 4:38 es vocativo: no lleva artículo porque no es un sustantivo contable en el sentido habitual, y la coma lo separa del discurso. **Traducirlo como "el Maestro" añade un artículo que el texto no tiene.**`),
  vocab: [
    V('the even was come', 'come', 'llegó la tarde'),
    V('he let them go', 'let', 'los dejó ir'),
    V('were get him into the ship', 'get', 'lo llevaron dentro del barco'),
    V('there was a great calm', 'be', 'hubo una gran calma'),
    V('the wind blew', 'blow', 'sopló el viento'),
    V('began to be filled', 'begin', 'empezó a llenarse'),
    V('was in the ship', 'be', 'estaba en el barco'),
    V('they awaked him', 'awake', 'lo despertaron'),
    V('carest thou not', 'care', 'no te importa'),
    V('he arose', 'arise', 'se levantó'),
    V('rebuked the wind', 'rebuke', 'reprendió al viento'),
    V('Peace, be still', 'be', 'cállate, quédate quieto'),
    V('the wind ceased', 'cease', 'cesó el viento'),
    V('was come into the ship again', 'come', 'había vuelto al barco'),
    V('were again filled', 'fill', 'fueron llenados otra vez'),
    V('no faith', 'faith', 'sin fe'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'En el pasaje el artículo aparece solo delante de un sustantivo contable singular: the ship, a great calm, the wind, the sea.',
      ),
    },
    {
      n: '2',
      text: T(
        'There is y there was usan there como sujeto aparente, y el verbo concuerda con lo que viene después: there was a great calm.',
      ),
    },
    {
      n: '3',
      text: T(
        'Let, were get, began to be, was come y were filled son construcciones con auxiliar, y el verbo principal queda en la base o en el participio.',
      ),
    },
    {
      n: '4',
      text: T(
        'Again, adverbio de tiempo, va detrás del verbo o del auxiliar: into the ship again, were again filled.',
      ),
    },
    {
      n: '5',
      text: T(
        'Unto es la preposición arcaica de la KJV y equivale al to contemporáneo; {into} y {with} conservan su sentido actual.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'Marcos 4:39 trae a great calm dos veces, una al entrar en la tormenta y otra después de la reprensión. El sustantivo es el mismo y el artículo es el mismo, y la segunda aparición es lo que prueba que la primera estaba fijada.',
      ),
    },
    {
      label: T('Diagnóstico:'),
      text: T(
        'Quien traduce el pasaje y escribe un sustantivo distinto cada vez ha cambiado el artículo por el verbo "ser". En inglés el artículo no cambia dentro de un mismo sintagma.',
      ),
    },
  ],
  examples: [
    { text: '{he let them go}', gloss: T('los dejó ir') },
    { text: '{there was a great calm}', gloss: T('hubo una gran calma') },
    {
      text: '{the wind blew, and the waves came into the ship}',
      gloss: T('sopló el viento, y las olas entraron en el barco'),
    },
    {
      text: '{the ship began to be filled with water}',
      gloss: T('el barco empezó a llenarse de agua'),
    },
    {
      text: '{Teacher, carest thou not that we perish}',
      gloss: T('Maestro, ¿no te importa que perezcamos?'),
    },
    {
      text: '{And he arose, and rebuked the wind}',
      gloss: T('y se levantó, y reprendió al viento'),
    },
    { text: '{Peace, be still}', gloss: T('Silencio, quédate quieto') },
    {
      text: '{the wind ceased, and there was a great calm}',
      gloss: T('cesó el viento, y hubo una gran calma'),
    },
    {
      text: '{Why are ye afraid? how is it that ye have no faith}',
      gloss: T('¿Por qué tenéis miedo? ¿cómo es que no tenéis fe?'),
    },
    { text: '{they were again filled with water}', gloss: T('fueron llenados otra vez de agua') },
    { text: '{And when the even was come}', gloss: T('Y, cuando llegó la tarde') },
  ],
  tables: [
    {
      caption: T('El pasaje, versículo por versículo'),
      head: [T('Versículo'), T('Estructura visible'), T('Qué mirar')],
      rows: [
        [
          T('35'),
          T('{And when the even was come, he let them go}'),
          T('cláusula temporal + auxiliar + base'),
        ],
        [T('36'), T('{there was a great calm}'), T('{there} como sujeto + artículo')],
        [T('36'), T('{the ship began to be filled with water}'), T('dos auxiliares encadenados')],
        [T('37'), T('{Jesus himself was in the ship: and he slept}'), T('verbo sin auxiliar')],
        [T('38'), T('{carest thou not that we perish}'), T('negación tras el auxiliar')],
        [T('39'), T('{And he arose, and rebuked the wind}'), T('irregular {arose} + {unto}')],
        [T('41'), T('{they were again filled with water}'), T('{again} tras el auxiliar')],
      ],
    },
    {
      caption: T('Dónde está cada cosa'),
      head: [T('Categoría'), T('En el pasaje')],
      rows: [
        [T('artículo'), '{the ship, a great calm, the wind, the sea}'],
        [T('verbo con auxiliar'), '{let them go, were get, began to be, was come, were filled}'],
        [T('adverbio'), T('{again}, dos veces')],
        [T('preposición'), '{into, with, unto, from}'],
        [T('negación'), '{carest thou not, have no faith}'],
      ],
    },
    {
      caption: T('Los verbos del pasaje'),
      head: [T('Forma'), T('Análisis')],
      rows: [
        ['{let them go}', T('auxiliar + objeto indirecto + base')],
        ['{were get him into the ship}', T('{were} + {get} + base + objeto')],
        ['{began to be filled}', T('dos auxiliares encadenados')],
        ['{was in the ship}', T('verbo principal sin auxiliar')],
        ['{he arose}', T('pasado irregular')],
        ['{was come into the ship again}', T('{be} + participio + preposición + adverbio')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T("En 'there was a great calm', ¿qué ocupa la posición del sujeto?"),
    options: [T('a great calm'), T('there'), T('was'), T('calm')],
    answer: 1,
    hint: T('There es sujeto aparente: el sujeto de verdad va después del verbo.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Completa el verbo del versículo 36: 'the ship began ___ be filled.'"),
      answer: 'to',
    },
    {
      kind: 'fill',
      prompt: T("Identifica la preposición de paso: 'the waves came ___ the ship'"),
      answer: 'into',
    },
    {
      kind: 'match',
      prompt: T('Relaciona la construcción con el análisis.'),
      pairs: [
        { a: '{he let them go}', b: T('auxiliar + base') },
        { a: '{there was a great calm}', b: T('{there} como sujeto') },
        { a: '{they were again filled}', b: T('adverbio tras el auxiliar') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuántas veces aparece el adverbio again en el versículo 41?'),
      options: [T('una vez'), T('dos veces'), T('tres veces'), T('ninguna vez')],
      answer: 1,
    },
  ],
};
