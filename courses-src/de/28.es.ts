import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  title: T('dass y zu + infinitivo'),
  subtitle: T('subordinación, finalidad y motivo'),
  section: T('Los verbos'),
  body: C(`La oración subordinada en alemán tiene una marca formal visible: el conjunto dass aparece primero, y el verbo conjugado se va al final. Ich glaube, dass Gott ist coloca el verbo en el último lugar, al contrario del portugués. Lo mismo ocurre con la causal weil y la temporal wenn, que también envían el verbo al final: weil er krank ist, wenn du kommst. Se conserva la persona; lo que se desplaza es la posición. La ventaja es práctica: como el verbo cierra la subordinada, quien escucha sabe de inmediato dónde termina la subordinación, aunque venga antes del verbo principal.

No todo admite dass. Tres construcciones verbales usan siempre zu + infinitivo y nada más: finalidad, relación habitual y finalidad negada mediante nicht. Ich komme, um zu lernen, Ich gehe oft schwimmen, Ich habe keine Lust, noch einmal auszugehen. Las tres pueden reescribirse con una oración completa: der Wunsch, dass du kommst, die Gewohnheit, dass er geht, y die Einsicht, dass es besser wäre, nicht zu gehen. La construcción con zu e infinitivo no tiene el mismo valor: no admite un sujeto explícito, y el sujeto nace dentro del infinitivo.

Hay además tres pares fijos: statt... zu, en vez de; anstatt... zu, en vez de; ohne... zu, sin hacer; um... zu, para. La partícula zu cierra la locución y el verbo conjugado se queda en la posición normal de la oración principal, antes: Ich trinke, statt zu schlafen. Compara con Ich trinke nicht, um zu schlafen, donde la partícula va después del verbo.

Motivo y finalidad son las dos puntas de la misma idea: Ich lerne, weil ich Gott dienen will dice por qué, e Ich lerne, um Gott zu dienen dice para qué. En portugués casi no se distinguen; en alemán la distinción es obligatoria, y por eso entender ambos papeles es entender la lógica de los textos.`),
  vocab: [
    V('dass', 'dass', 'que (marca de subordinación)'),
    V('zu', 'zu', 'a, para (preposición y partícula)'),
    V('um', 'um', 'para (finalidad)'),
    V('weil', 'weil', 'porque (motivo)'),
    V('wenn', 'wenn', 'cuando, si (tiempo y condición)'),
    V('obwohl', 'obwohl', 'aunque (concesión)'),
    V('zu + Infinitiv', 'zu', 'a + infinitivo (finalidad)'),
    V('lernen', 'lernen', 'aprender'),
    V('dienen', 'dienen', 'servir a (a alguien)'),
    V('glauben', 'glauben', 'creer, pensar'),
    V('kommen', 'kommen', 'venir'),
    V('schlafen', 'schlafen', 'dormir'),
    V('trinken', 'trinken', 'beber'),
    V('statt', 'statt', 'en vez de'),
    V('ohne', 'ohne', 'sin (partícula)'),
    V('anstatt', 'anstatt', 'en vez de (variante)'),
    V('weiss', 'wissen', 'que (subordinación indirecta)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué oración coloca correctamente el verbo conjugado al final?'),
    options: [
      T('Ich hoffe, dass wir uns sehen.'),
      T('Ich hoffe, dass sehen wir uns.'),
      T('Ich hoffe, wir sehen uns, dass.'),
      T('Ich hoffe, wir dass uns sehen.'),
    ],
    answer: 0,
    hint: T('La oración con dass es autónoma: el verbo conjugado cierra la frase.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa la finalidad: Ich komme, ___ lernen (para aprender).'),
      answer: 'um zu',
      hint: T('La finalidad lleva um ... zu.'),
    },
    {
      kind: 'choose',
      prompt: T('En «Ich trinke, statt zu schlafen», ¿por qué el verbo trinke va antes de statt?'),
      options: [
        T('La partícula zu cierra la locución, y el verbo de la oración principal la precede.'),
        T('El alemán no admite inversión de ningún tipo.'),
        T('statt es un verbo auxiliar y por eso va después.'),
        T('El orden es siempre aleatorio en el alemán hablado.'),
      ],
      answer: 0,
    },
    {
      kind: 'fill',
      prompt: T('Completa el motivo: Er hilft ihm, ___ er arm ist (porque es pobre).'),
      answer: 'weil',
      hint: T('El motivo es distinto de la finalidad.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el conector con su uso.'),
      pairs: [
        { a: T('dass'), b: T('complemento, verbo al final') },
        { a: T('um ... zu'), b: T('finalidad') },
        { a: T('ohne ... zu'), b: T('negación de un infinitivo') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Tras dass, weil, wenn, obwohl y otros conectores, el verbo conjugado va al final de la oración: Er sagt, dass er kommt.',
      ),
    },
    {
      n: '2',
      text: T(
        'Para finalidad solo se usan um ... zu o statt/anstatt/ohne ... zu; nunca *um zu gehen como oración principal con sujeto explícito.',
      ),
    },
    {
      n: '3',
      text: T(
        'La partícula zu cierra la locución, y por eso el verbo conjugado de la oración principal queda antes: Ich trinke, statt zu schlafen.',
      ),
    },
    {
      n: '4',
      text: T(
        'El motivo lleva weil, la finalidad lleva um ... zu; cambiar uno por otro altera el sentido de la frase, aunque la traducción parezca igual.',
      ),
    },
    {
      n: '5',
      text: T(
        'verbo + zu + infinitivo significa aprender a hacer: Ich lerne schreiben, Er kann gut kochen.',
      ),
    },
  ],
  notes: [
    {
      label: T('La inversión como señal'),
      text: T(
        'El verbo al final sirve a quien escucha: en una frase larga, oye Ich glaube y todavía no sabe si la subordinación continúa. Cuando llega ist, sabe que la subordinación ha terminado. Es la misma economía que hay en la escritura: la puntuación de una frase es, en la práctica, la posición de su verbo. Quien aprende el orden de las palabras en el módulo 9 ya está aplicando la lógica que aquí se ve en las oraciones.',
      ),
    },
    {
      label: T('Vínculo bíblico'),
      text: T(
        'En Juan 3:16 la traducción de Lutero escribe hat Gott die Welt geliebt, dass auch wir Kinder Gottes sind: el motivo está en dass con el verbo al final, el mismo recurso de los versículos de Romanos, die Kraft Gottes ist den Gehorsam des Glaubens. La forma mögen muestra que la oración no es optativa sino asertiva: la condición de fe se presenta como hecho.',
      ),
    },
  ],
  examples: [
    { text: 'Ich glaube, dass Gott ist.', gloss: T('Creo que Dios existe (verbo al final).') },
    {
      text: 'Er bleibt, weil er krank ist.',
      gloss: T('Se queda porque está enfermo (weil + verbo al final).'),
    },
    {
      text: 'Wenn du kommst, feiern wir.',
      gloss: T('Cuando vengas, celebraremos (tiempo, verbo al final).'),
    },
    { text: 'Obwohl es regnet, gehen wir.', gloss: T('Aunque llueve, vamos (concesión).') },
    { text: 'Ich komme, um zu lernen.', gloss: T('Vengo para aprender (finalidad).') },
    {
      text: 'Ich trinke, statt zu schlafen.',
      gloss: T('Bebo en vez de dormir (verbo antes de statt ... zu).'),
    },
    { text: 'Er ging, ohne zu antworten.', gloss: T('Salió sin responder (infinitivo negado).') },
    {
      text: 'Ich lerne, um Gott zu dienen.',
      gloss: T('Aprendo para servir a Dios (dos zu, papeles distintos).'),
    },
    {
      text: 'Er lernt lesen.',
      gloss: T('Está aprendiendo a leer (verbo + zu + infinitivo, sentido de habilidad).'),
    },
  ],
  tables: [
    {
      caption: T('Conector, posición del verbo y valor'),
      head: ['Conector', 'Verbo', 'Valor'],
      rows: [
        ['dass', 'no fim', 'objeto, sujeito, complemento'],
        ['weil', 'no fim', 'motivo'],
        ['wenn', 'no fim', 'tempo, condição'],
        ['obwohl', 'no fim', 'concessão'],
        ['um ... zu', 'na oração principal', 'finalidade'],
        ['ohne ... zu', 'na oração principal', 'negação de um infinitivo'],
        ['(an)statt ... zu', 'na oração principal', 'substituição de um infinitivo'],
      ],
    },
    {
      caption: T('Comparar zu y que'),
      head: ['Pergunta', 'Resposta com dass', 'Resposta com zu'],
      rows: [
        ['Finalidade', 'der Wunsch, dass ich lerne', 'um zu lernen'],
        ['Hábito', 'die Gewohnheit, dass ich lerne', 'oft zu lernen'],
        ['Negação de finalidade', 'der Wunsch, dass ich nicht lerne', 'nicht zu lernen'],
        ['Onde está o sujeito?', 'expresso: ich', 'dentro do infinitivo'],
        ['Ordem', 'verbo conjugado no fim', 'verbo conjugado antes de um/zu'],
      ],
    },
  ],
};
