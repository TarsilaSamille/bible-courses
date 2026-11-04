import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('El dativo'),
  subtitle: T('a quién y para quién'),
  section: T('Los casos'),
  body: C(`El dativo es el caso del destinatario. Responde a dos preguntas que en portugués se confunden: ¿a quién se entrega algo? y ¿para quién se hace algo? Ich gebe dem Mann das Buch responde a la primera; Ich backe für dich responde a la segunda.

El dativo tiene tres usos principales. El primero es el objeto indirecto de verbos de transferencia, habla y sentimiento: Ich helfe dem Kranken, Sie dankt dem Herrn, Er antwortet mir, das Kind freut sich über die Geschenke. El segundo es el poseedor registrado como dativo cuando el poseedor es una persona y lo poseído conserva el caso que ya tenía: Ich wasche mir die Hände, Er putzt sich das Gesicht, Sie bäckt sich einen Kuchen.

El tercer uso es el más característico del alemán: las expresiones impersonales con dativo. No hay sujeto verdadero, y el complemento en dativo es quien experimenta la situación: Mir ist kalt, Mir graut davor, Mir tut der Kopf weh, Es ist mir wichtig. En portugués estas construcciones exigen un sujeto relleno, lo que hace la traducción desajeitada; lo que importa aquí es retener la idea de que el dativo es el experimentador de la frase.

Los verbos que rigen dativo forman una lista cerrada que vale la pena aprender. Memoriza los principales: helfen, danken, folgen, gehören, gefallen, passen, schmecken, antworten, dienen, gratulieren, drucken, wehtun, fehlen, schaden, verzeihen, erlauben, verbieten, befehlen, empfehlen.

El orden de los elementos también tiene regla. Cuando hay dativo y acusativo, el dativo va primero: Ich gebe dem Mann das Buch. Y el pronombre reflexivo en dativo se adelanta al dativo léxico: Ich schenke mir ein Buch.`),
  vocab: [
    V('der Dativ', 'Dativ', 'el caso dativo'),
    V('helfen', 'helfen', 'ayudar (dativo)'),
    V('danken', 'danken', 'agradecer (dativo)'),
    V('folgen', 'folgen', 'seguir (dativo)'),
    V('gehören', 'gehören', 'pertenecer (dativo)'),
    V('passen', 'passen', 'caber, quedar bien (dativo)'),
    V('schmecken', 'schmecken', 'saber a (dativo)'),
    V('antworten', 'antworten', 'responder (dativo)'),
    V('gratulieren', 'gratulieren', 'felicitar (dativo)'),
    V('schmecken lassen', 'schmecken', 'dejar al gusto de'),
    V('mit', 'mit', 'con (prep. de dativo)'),
    V('von', 'von', 'de, a partir de (prep. de dativo)'),
    V('zu', 'zu', 'a, para (prep. de dativo)'),
    V('bei', 'bei', 'cerca de, junto a (prep. de dativo)'),
    V('mir', 'ich', 'a mí (dativo)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué verbo exige dativo?'),
    options: [T('sehen'), T('danken'), T('kaufen'), T('lesen')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el dativo: Das Buch gehört ___ (a mí).'),
      answer: 'mir',
      hint: T('Pronombre personal de 1ª persona en dativo.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa la preposición: Ich fahre ___ Berlin (a Berlín).'),
      answer: 'nach',
      hint: T('Indica destino, sin artículo.'),
    },
    {
      kind: 'choose',
      prompt: T('En «Ich schenke dir ein Buch», ¿cuál es el orden de los términos?'),
      options: [
        T('acusativo antes del dativo'),
        T('dativo antes del acusativo'),
        T('genitivo antes del dativo'),
        T('el orden es libre'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Relaciona la construcción con su uso.'),
      pairs: [
        { a: T('Mir ist kalt'), b: T('impersonal') },
        { a: T('Ich wasche mir die Haare'), b: T('poseedor en dativo') },
        { a: T('Er wird von Gott geliebt'), b: T('agente de la pasiva') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Dativo y acusativo juntos forman el orden estándar con el objeto indirecto primero: Ich gebe dem Nachbarn das Paket.',
      ),
    },
    {
      n: '2',
      text: T(
        'El pronombre reflexivo en dativo precede al dativo léxico: Ich wasche mir die Haare, no mir die Haare ich.',
      ),
    },
    {
      n: '3',
      text: T(
        'Las preposiciones mit, von, zu, bei, aus, seit y gegenüber exigen dativo, y allí el sustantivo puede aparecer sin artículo: bei Maria, von dem Herrn, zu Hause.',
      ),
    },
    {
      n: '4',
      text: T(
        'Con personas en dativo el artículo puede omitirse tras zu, von, für y bei: der Freund von Maria, die Mutter von Heinrich, ein Freund von mir.',
      ),
    },
  ],
  notes: [
    {
      label: T('El dativo experimentador'),
      text: T(
        'En Mir ist kalt no hay sujeto en el sentido portugués. Lo que la frase afirma es que hay alguien para quien hace frío, y ese alguien es el dativo. Traducir literalmente abre una caja de Pandora del tipo Ich habe kalt, que reintroduce un sujeto que no está. Una traducción correcta conserva la ausencia: Ich habe kalt, Mir ist nicht gut.',
      ),
    },
    {
      label: T('Vínculo bíblico'),
      text: T(
        'En Juan 3:16, hat Gott die Welt geliebt (dativo como objeto indirecto). La construcción reaparece en 1 Juan 4:9, Gott hat seinen Sohn geliebt für die Welt. La preposición für + acusativo hace explícito ese mismo dativo en forma nominal.',
      ),
    },
  ],
  examples: [
    {
      text: 'Ich gebe dem Mann das Buch.',
      gloss: T('Le doy el libro al hombre (dativo antes del acusativo).'),
    },
    { text: 'Kannst du mir helfen?', gloss: T('¿Puedes ayudarme? (helfen + dativo).') },
    { text: 'Das Buch gehört mir.', gloss: T('El libro me pertenece (gehören + dativo).') },
    { text: 'Das Buch gefällt mir.', gloss: T('Me gusta el libro (gefallen + dativo).') },
    { text: 'Ich wasche mir die Hände.', gloss: T('Me lavo las manos (poseedor en dativo).') },
    { text: 'Mir ist kalt.', gloss: T('Tengo frío (impersonal con dativo).') },
    { text: 'Es ist mir wichtig.', gloss: T('Es importante para mí (interés en dativo).') },
    {
      text: 'Die Hunde folgen dem Herrn.',
      gloss: T('Los perros siguen al señor (dativo de dirección).'),
    },
    { text: 'Sie wohnt bei ihrer Schwester.', gloss: T('Vive con su hermana (bei + dativo).') },
  ],
  tables: [
    {
      caption: T('Los tres usos del dativo'),
      head: ['Uso', 'Estrutura', 'Exemplo', 'Pergunta'],
      rows: [
        ['objeto indireto', 'verbo + dat. + acc.', 'Ich gebe dem Mann das Buch.', 'a quem?'],
        ['possessor pessoal', 'reflexivo + dat. + N', 'Ich wasche mir die Hände.', 'de quem são?'],
        ['impessoal', 'impers. + dat.', 'Mir ist kalt.', 'como se sente quem?'],
        ['interesse', 'es ist + dat. + adj.', 'Es ist mir wichtig.', 'o que importa a quem?'],
        ['dativo de agente', 'passiva + von + dat.', 'Er wird von Gott geliebt.', 'por quem?'],
      ],
    },
    {
      caption: T('Verbos que rigen dativo'),
      head: ['Verbo', 'Português', 'Frase'],
      rows: [
        ['helfen', 'ajudar', 'Kannst du mir helfen?'],
        ['danken', 'agradecer', 'Ich danke dir.'],
        ['folgen', 'seguir', 'Die Hunde folgen dem Herrn.'],
        ['gehören', 'pertencer', 'Das Buch gehört mir.'],
        ['gefallen', 'agradar (a alguém)', 'Das Buch gefällt mir.'],
        ['passen', 'servir, ficar bem', 'Der Mantel passt dir.'],
        ['schmecken', 'saborar', 'Der Wein schmeckt mir gut.'],
        ['antworten', 'responder', 'Er antwortet der Frage.'],
        ['wehtun', 'doer', 'Der Kopf tut mir weh.'],
        ['schaden', 'prejudicar', 'Das Rauchen schadet der Gesundheit.'],
      ],
    },
  ],
};
