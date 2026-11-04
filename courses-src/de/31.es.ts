import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  title: T('Las preposiciones'),
  subtitle: T('casos fijos y Wechselpräpositionen'),
  section: T('Las preposiciones'),
  body: C(`Toda preposición alemana rige un caso, y su caso es fijo. No hay excepciones: mit exige dativo, y no existe *mit dem Weg en el sentido de a lo largo del camino, que en alemán sería along dem Weg. Las Wechselpräpositionen, o preposiciones de caso alternado, son en la práctica pocas, y todas aceptan dativo o acusativo según el sentido: an, auf, aus, bei, für, hinter, in, neben, über, unter, seit, von, vor, zu, zwischen. La lista merece aprenderse entera, porque es ella la que rige el acusativo en las preposiciones de movimiento.

La regla de alternancia es de sentido, no de forma. La preposición con dativo marca posición: Ich sitze an dem Tisch, Er wohnt bei meiner Schwester, Das Buch liegt auf dem Tisch. La preposición con acusativo marca destino o duración: Ich setze mich an den Tisch, Er geht zu dem Arzt, Das Buch liegt auf dem Tisch — fíjate en que auf con el mismo sustantivo puede llevar los dos casos, y lo que cambia es el verbo: liegen se queda, legen pone.

Hay dos pares que producen frases casi idénticas con sentidos opuestos: auf y an, y über y unter. Ich hänge das Bild an die Wand e Ich hänge das Bild über den Tisch. Er geht unter die Brücke y Er kommt unter der Brücke durch. La preposición no significa nada por sí sola: funciona como un clavo, y es el verbo el que decide dónde clavar.

Un segundo grupo, mucho más pequeño, es el de las preposiciones con genitivo. Solo unas pocas son comunes: während, wegen, trotz, statt, anstatt, außerhalb. Son típicas del lenguaje escrito y suenan académicas para quien viene del portugués, donde el genitivo ha desaparecido. Während des Lebens es más formal que difícil.

Por último, tres preposiciones de dos palabras merecen una memorización aparte: anstatt ... zu, um ... zu y auf ... zu, que expresan sustitución, finalidad y movimiento hacia algo que ya está en movimiento. Y hay un caso especial que engaña: en preguntas de tiempo con sentido de espera, an puede regir el dativo: Wann kommst du an?`),
  vocab: [
    V('an', 'an', 'a, en (Wechselpräposition)'),
    V('auf', 'auf', 'sobre, encima de'),
    V('bei', 'bei', 'cerca de, junto a'),
    V('für', 'für', 'para, por'),
    V('hinter', 'hinter', 'detrás de, detrás'),
    V('in', 'in', 'en, dentro de'),
    V('neben', 'neben', 'al lado de'),
    V('über', 'über', 'sobre (en el aire), por encima de'),
    V('unter', 'unter', 'bajo, debajo de'),
    V('vor', 'vor', 'delante de, antes de'),
    V('zwischen', 'zwischen', 'entre'),
    V('von', 'von', 'de, a partir de (siempre dativo)'),
    V('zu', 'zu', 'a, para (siempre dativo)'),
    V('mit', 'mit', 'con (siempre dativo)'),
    V('während', 'während', 'durante (genitivo)'),
    V('wegen', 'wegen', 'a causa de (genitivo)'),
    V('trotz', 'trotz', 'a pesar de (genitivo)'),
    V('außerhalb', 'außerhalb', 'fuera de (genitivo)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué oración es correcta?'),
    options: [
      T('Er hängt das Bild an die Wand.'),
      T('Er hängt das Bild an der Wand.'),
      T('Er hängt das Bild an dem Wand.'),
      T('Er hängt das Bild in die Wand.'),
    ],
    answer: 0,
    hint: T('Regla §1: el movimiento exige acusativo, luego die.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa con el caso correcto: Das Buch liegt auf ___ Tisch (sobre la mesa).'),
      answer: 'dem',
      hint: T('La posición estática pide dativo: auf dem Tisch.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué preposición exige dativo aunque indique movimiento?'),
      options: [T('zu'), T('in'), T('an'), T('auf')],
      answer: 0,
      hint: T('Er geht zu dem Arzt: destino, pero dativo.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa con genitivo: Wegen ___ Wetters bleiben wir hier.'),
      answer: 'des',
      hint: T('El sustantivo neutro Wetter necesita -es en genitivo.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la preposición con el caso que exige.'),
      pairs: [
        { a: T('mit'), b: T('siempre dativo') },
        { a: T('für'), b: T('siempre acusativo') },
        { a: T('trotz'), b: T('siempre genitivo') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Dativo para posición, acusativo para dirección: Ich hänge das Bild an die Wand, pero Das Bild hängt an der Wand.',
      ),
    },
    {
      n: '2',
      text: T(
        'von, zu, mit, aus, bei, seit y nach exigen siempre dativo, aunque indiquen movimiento: Er geht zu dem Arzt.',
      ),
    },
    {
      n: '3',
      text: T(
        'Con sustantivos de persona, la preposición y el de en dativo pueden omitirse: der Freund von Maria → ein Freund von mir, zu Maria.',
      ),
    },
    {
      n: '4',
      text: T(
        'El verbo decide el caso de la preposición, no el sustantivo: Er legt das Buch auf den Tisch (pone) y Das Buch liegt auf dem Tisch (está).',
      ),
    },
    {
      n: '5',
      text: T(
        'En preguntas de llegada, an se queda en dativo: Wann kommst du an? El sentido de llegada usa el acusativo: Wann kommst du an den Bahnhof?',
      ),
    },
  ],
  notes: [
    {
      label: T('La preposición no significa sola'),
      text: T(
        'Über y unter muestran por qué el estudio caso por caso es inútil. Ich hänge das Bild über den Tisch e Ich hänge das Bild an die Wand usan la misma construcción, y la única diferencia es la preposición: sobre la mesa, en la pared. Y über der Brücke y unter der Brücke describen la misma relación espacial vista desde lados opuestos. Quien aprende las preposiciones como vocabulario sin los verbos que las acompañan guarda una lista; quien aprende verbo y preposición juntos guarda una frase.',
      ),
    },
    {
      label: T('Vínculo biblical'),
      text: T(
        'La traducción de Lutero tiene una costumbre tenaz con zu: ohne mich könnt ihr nichts tun (Juan 15:5) usa la segunda persona del plural sin artículo, y zu es la preposición que nunca renuncia al dativo. Wer nicht liebt den Menschen, liebt auch den Bruder nicht (1 Juan 4:20) añade ohne con acusativo. La segunda preposición, gegen, es rara en la Biblia y común en el habla, lo que muestra que una traducción también envejece.',
      ),
    },
  ],
  examples: [
    { text: 'Ich sitze an dem Tisch.', gloss: T('Estoy sentado a la mesa (posición, dativo).') },
    { text: 'Ich setze mich an den Tisch.', gloss: T('Me siento a la mesa (destino, acusativo).') },
    { text: 'Er wohnt bei meiner Schwester.', gloss: T('Vive con su hermana (bei + dativo).') },
    {
      text: 'Das Buch liegt auf dem Tisch.',
      gloss: T('El libro está sobre la mesa (auf + dativo).'),
    },
    {
      text: 'Er legt das Buch auf den Tisch.',
      gloss: T('Pone el libro sobre la mesa (auf + acusativo).'),
    },
    {
      text: 'Wegen des Regens bleiben wir zu Hause.',
      gloss: T('A causa de la lluvia nos quedamos en casa (wegen + genitivo).'),
    },
    {
      text: 'Trotz des Sturms gingen wir hinaus.',
      gloss: T('A pesar de la tormenta salimos (trotz + genitivo).'),
    },
    { text: 'Ich gehe, um zu helfen.', gloss: T('Voy para ayudar (um ... zu).') },
    {
      text: 'Er kam an dem Bahnhof an.',
      gloss: T('Llegó a la estación (el verbo an rige aquí dativo).'),
    },
  ],
  tables: [
    {
      caption: T('Wechselpräpositionen: dativo o acusativo'),
      head: ['Preposição', 'Dativo (posição)', 'Acusativo (destino)'],
      rows: [
        ['an', 'an dem Tisch', 'an den Tisch'],
        ['auf', 'auf dem Tisch', 'auf den Tisch'],
        ['bei', 'bei meiner Schwester', 'zu meiner Schwester'],
        ['in', 'in dem Haus', 'in das Haus'],
        ['über', 'über dem Tisch', 'über den Tisch'],
        ['unter', 'unter dem Baum', 'unter den Baum'],
        ['vor', 'vor der Tür', 'vor die Tür'],
      ],
    },
    {
      caption: T('Preposiciones con caso fijo'),
      head: ['Caso', 'Preposições', 'Exemplo'],
      rows: [
        ['dativo', 'aus, bei, mit, nach, seit, von, zu', 'Er kommt aus Berlin.'],
        ['acusativo', 'durch, für, gegen, ohne, um', 'Das ist für dich.'],
        ['genitivo', 'während, wegen, trotz, statt, außerhalb', 'wegen des Wetters'],
        ['duas palavras', 'anstatt ... zu, um ... zu, auf ... zu', 'Ich gehe, um zu helfen.'],
      ],
    },
  ],
};
