import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('Subjuntivo y futuro del subjuntivo'),
  subtitle: T('fale, falares: deseo e hipótesis'),
  section: T('El verbo: los modos'),
  body: C(`## El subjuntivo es el tiempo de lo que no se puede afirmar

El presente de subjuntivo aparece en deseo, duda, finalidad y ciertas subordinadas: {quero que fales}, {espero que venha}, {para que haja paz}, {não sei se vem}. No es «el tiempo de la irrealidad», como sugiere el nombre: es el tiempo de lo que el hablante **no puede afirmar**.

Por eso {seja} y {venha} en el Padrenuestro no son órdenes: son deseos colectivos. «Santificado sea tu nombre» es una petición, y una petición es por definición algo que se quiere y todavía no se tiene. El griego de Mt 6:10 (ἐλθέτω) usa la misma construcción, y el subjuntivo marca que la oración no es una declaración.

## El futuro de subjuntivo es portugués

El futuro de subjuntivo ({falares}, {vier}, {creres}) es una creación **del portugués**: el griego y el latín no tienen esa forma. Aparece tras cuando y si: {quando eu vier}, {se tu creres}, {assim que chegar}. Y expresa un suceso futuro que aún no es hecho, pero que el hablante considera lo bastante cierto para cerrar la subordinada con él.

La tentación es tratar {quando eu vier} como futuro de indicativo. No lo es. La diferencia es de compromiso: {quando eu vier} es una condición que el hablante asume; {quando eu vim} es narración del pasado. En traducción bíblica, el griego antiguo (ὅταν + subjuntivo) y el portugués bíblico (quando + futuro de subjuntivo) son lo mismo, y por eso la forma se conservó.

## Para + infinitivo: finalidad sin sujeto

{para} seguido de infinitivo puede sustituir una cláusula de finalidad: {para crer}, {para conhecer}, {estou aqui para falar}. La diferencia respecto a {para que} es que el infinitivo tiene sujeto sobreentendido, normalmente el mismo de la principal. {Vou falar} y {Vou explicar para entender} comparten sujeto entre las dos cláusulas.

Eso es lo que permite traducir el griego εἰς + infinitivo ({ἐλθεῖν εἰς}) y el infinitivo de finalidad hebreo, sin inventar un sujeto que el texto no da.

## La selección depende del verbo principal

No todo verbo principal admite subjuntivo. {Quero que} lo exige; {sei que} casi siempre exige indicativo ({sei que vem}), salvo que la información venga de otro ({disseram que viria}). La lista de verbos que rigen el subjuntivo es cerrada, y es ella la que decide, no el sentido de la frase.

En griego, el paralelo es el **optativo** (ἐάν τις ἔλθῃ, ὄφρα, ὡς) y el subjuntivo (ὅτι ζῇ, ἵνα). Cuando el texto está en optativo, el portugués tiene que encadenar con «se» o «para que», y ahí es donde la traducción gana o pierde la hipótesis.

## Criterio de lectura

Con cualquier verbo en subjuntivo, pregúntate: ¿qué rige la frase — {quero}, {espero}, {para que}, {se}? ¿Es {se} o {quando} de futuro de subjuntivo, un tiempo que solo el portugués tiene? ¿El {para} trae {que} o un infinitivo? Con esas tres respuestas, el subjuntivo queda explicado.`),
  vocab: [
    V('fale', 'falar', 'habla'),
    V('falares', 'falar', 'hablares'),
    V('seja', 'ser', 'sea'),
    V('tenha', 'ter', 'tenga'),
    V('venha', 'vir', 'venga'),
    V('creres', 'crer', 'si creyeres'),
    V('oxalá', 'oxalá', 'ojalá'),
    V('amém', 'amém', 'amén'),
    V('para', 'para', 'para (finalidad)'),
    V('crer', 'crer', 'creer'),
    V('vir', 'vir', 'venir'),
    V('falar', 'falar', 'hablar'),
    V('quando', 'quando', 'cuando'),
    V('se', 'se', 'si (conjunción)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Completa: «cuando tú ___ (hablar)».'),
    options: [T('hablas'), T('hablares'), T('hables'), T('hablaron')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: «Santificado ___ tu nombre».'),
      answer: 'seja',
      hint: T('Subjuntivo de ser.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué construcción expresa finalidad?'),
      options: [T('para que vengas'), T('cuando tú vienes'), T('porque creo'), T('si tú vienes')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona conjunción y valor.'),
      pairs: [
        { a: T('cuando'), b: T('tiempo futuro') },
        { a: T('si'), b: T('hipótesis') },
        { a: T('para que'), b: T('finalidad') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{quero que fales} y {espero que venha} llevan subjuntivo; {sei que vem} lleva indicativo. No decide el sentido de la oración sino el verbo que va delante: la lista de los verbos que rigen el subjuntivo es cerrada.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{não sei se vem} lleva {se} más indicativo, y {não sei se venha} lleva {se} más subjuntivo. La {se} es la pista: {se} seguido de verbo que el hablante no puede afirmar pide subjuntivo.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{quando eu vier}, {se tu creres} y {assim que chegar} usan el futuro de subjuntivo, {falares}, {creres}, {chegar}. Es la forma que {quando} y {se} piden cuando se trata de lo que todavía no ha ocurrido, y el griego antiguo (ὅταν más subjuntivo) dice lo mismo.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{se eu falasse} es el subjuntivo del imperfecto y vale para la hipótesis irreal ({se falasse, viria}), mientras {se eu tivesse falado} es el pluscuamperfecto y dice que la hipótesis es anterior ({se tivesse falado, teria vindo}).',
      ),
    },
    {
      n: '§5',
      text: T(
        '{para crer} y {para que creia} no son sinónimos: el infinitivo de {para} tiene sujeto sobreentendido, el mismo que el de la principal, mientras {para que} trae subjuntivo y sujeto propio. {Vou falar para entender} tiene un solo sujeto; {Falo para que ele entenda} tiene dos.',
      ),
    },
  ],
  notes: [
    {
      label: T('Atención'),
      text: T(
        'El futuro de subjuntivo ({falares}, {vier}, {creres}) es creación del portugués: el griego y el latín no tienen esa forma. Donde el griego dice {ὅταν} más aoristo, el portugués bíblico dice {quando} más futuro de subjuntivo, y ahí se conserva la forma.',
      ),
    },
    {
      label: T('El optativo'),
      text: T(
        'El griego tiene un modo que el portugués no tiene, el optativo ({ὄφρα}, {ὡς}, {εἴ τις}). Para decir hipótesis con optativo, el portugués tiene que encadenar {se} más condicional, y esa cadena es la que produce tantos {se} en el Nuevo Testamento griego en portugués.',
      ),
    },
  ],
  examples: [
    { text: 'Quero que fales.', gloss: T('{quero que} rige el subjuntivo.') },
    { text: 'Espero que venha a paz.', gloss: T('{espero que} más subjuntivo {venha}.') },
    { text: 'Sei que ele vem.', gloss: T('{sei que} rige el indicativo.') },
    { text: 'Não sei se vem.', gloss: T('{se} más indicativo: duda sobre el hecho.') },
    { text: 'Não sei se venha.', gloss: T('{se} más subjuntivo: duda sobre la venida.') },
    { text: 'Quando eu vier, te direi.', gloss: T('Futuro de subjuntivo {vier} con {quando}.') },
    {
      text: 'Se tu creres, terás a vida.',
      gloss: T('{creres} y {terás}: hipótesis y consecuencia.'),
    },
    { text: 'Se eu falasse, viria.', gloss: T('Subjuntivo del imperfecto: hipótesis irreal.') },
    { text: 'Falo para que ele entenda.', gloss: T('{para que} trae sujeto propio.') },
  ],
  tables: [
    {
      caption: T('Los tres tiempos del subjuntivo'),
      head: ['Tempo', 'Forma', 'Exemplo'],
      rows: [
        ['presente', 'fale', 'quero que fales'],
        ['futuro', 'falares', 'quando falares'],
        ['imperfeito', 'falasse', 'se falasse'],
      ],
    },
    {
      caption: T('El verbo que va delante decide'),
      head: ['Verbo principal', 'Modo', 'Exemplo'],
      rows: [
        ['quero que', 'subjuntivo', 'quero que fales'],
        ['sei que', 'indicativo', 'sei que vem'],
        ['não sei se', 'qualquer dos dois', 'não sei se vem'],
      ],
    },
    {
      caption: T('{para} con y sin {que}'),
      head: ['Forma', 'Sujeito', 'Exemplo'],
      rows: [
        ['para + infinitivo', 'o mesmo da principal', 'para crer'],
        ['para que + subjuntivo', 'próprio', 'para que creia'],
      ],
    },
  ],
};
