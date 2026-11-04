import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Lectura guiada: Padrenuestro y Salmo 22'),
  subtitle: T('Padre nostro che sei nei cieli'),
  section: T('Los tiempos del verbo'),
  body: C(`## Lee el Padrenuestro por bloques

El truco para leer el Padrenuestro en italiano no es el vocabulario: **es identificar el verbo de cada petición**. {Padre nostro che sei nei cieli}: {sei} es el presente de {essere}, y {nei} es la fusión de {in} + {i}, «en los». {Sia santificato il tuo nome}: {sia} es congiuntivo, **porque expresa deseo**; la forma {è} sería error. {Venga il tuo regno}: {venga} es el congiuntivo de {venire}. {Sia fatta la tua volontà} repite {sia} por el mismo motivo.

El patrón se ve: todo lo que es deseo va al congiuntivo, y son justamente las tres peticiones centrales. No es casualidad, porque una petición es por definición algo que se quiere y todavía no se tiene.

## {Dacci}: verbo y clítico pegados

{Dacci oggi il nostro pane quotidiano} trae {dacci}, **el imperativo de** {dare} con {ci} pegado, «dá-nos». El {ci} se pega al verbo porque es objeto indirecto, y el orden es verbo más clítico. Traducir por «dame a nosotros» funciona, pero pierde que en italiano es un solo término, y lo mismo vale para {dammelo} y {diccelo}.

{Rimetti a noi i nostri debiti} trae {rimettere}, que aquí significa «perdonar, soltar» y no «volver a poner». La construcción con {a noi} es dativo de persona, el más común del italiano, y es lo que el español tiene cuando marca destinatario. Donde el español dice «soltar», el italiano dice {lasciarare} o {perdonare}, y en el Padrenuestro dice {rimettere}.

## En el Salmo 22, qué hace la traducción

{Dio mio, Dio mio, perché mi hai abbandonato?} es una pregunta por el motivo. {Perché} aquí hace lo mismo que el griego (ἱνατί) y el hebreo (למה): pregunta por qué. Traducirlo por «porque» sin ver que es una pregunta retórica deja la frase sin fuerza, y el Salmo pierde el grito.

{Mi} en {mi hai abbandonato} es objeto indirecto, «a mí», y {hai} es el presente de {avere}, «tienes». El verbo es más corto que en español, y la forma resuelve lo que la palabra no resuelve: donde una traducción italiana trae el dativo de ventaja, {mi}, la otra trae el ablativo, {me}. Las dos son italianas, y quien traduce tiene que elegir sabiendo que la elección ya está hecha.

## Criterio de lectura

En cualquier petición del Padrenuestro, pregunta: ¿esto es deseo (congiuntivo), orden (imperativo) o hecho (indicativo)? En el Salmo, pregunta: ¿{perché} es causa o pregunta? La respuesta cambia la traducción más que cualquier palabra suelta.`),
  vocab: [
    V('Padre', 'padre', 'Padre'),
    V('nostro', 'nostro', 'nuestro'),
    V('cieli', 'cielo', 'cielos'),
    V('venga', 'venire', 'venga (subj.)'),
    V('dacci', 'dare', 'danos!'),
    V('rimetti', 'rimettere', 'perdona'),
    V('debito', 'debito', 'deudas'),
    V('abbandonato', 'abbandonare', 'abandonado'),
    V('sei', 'essere', 'eres'),
    V('nei', 'in', 'en los (in + i)'),
    V('oggi', 'oggi', 'hoy'),
    V('pane', 'pane', 'pan'),
    V('hai', 'avere', 'tienes'),
    V('perché', 'perché', 'por qué'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué es nei en nei cieli?'),
    options: [T('Un pronombre'), T('La fusión in + i'), T('Un verbo'), T('Un adverbio negativo')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: ___ il tuo regno (congiuntivo de venire)'),
      answer: 'Venga',
      hint: T('Subjuntivo irregular.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué forma significa «danos»?'),
      options: [T('daci'), T('dacci'), T('dacelo'), T('dacine')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Completa: Dio mio, Dio mio, perché mi ___ abbandonato?'),
      answer: 'hai',
      hint: T('Presente de avere, tu.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Todo lo que es deseo va al congiuntivo: {Sia santificato}, {Venga il tuo regno}, {Sia fatta la tua volontà}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{Nei} es {in} + {i}: {nei cieli} quiere decir «en los cielos», y {cieli} es el plural de {cielo}.',
      ),
    },
    {
      n: '3',
      text: T(
        '{Dacci} es {da} + {ci}: en el imperativo el pronombre se pega al verbo, {daccelo}, {dammelo}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Perché} con verbo en pasado pregunta por el motivo: {perché mi hai abbandonato?}, como ἱνατί y למה.',
      ),
    },
    {
      n: '5',
      text: T(
        '{Mi} en {mi hai abbandonato} es objeto indirecto, y {hai} es el presente de {avere}: «tienes».',
      ),
    },
  ],
  notes: [
    {
      label: T('{Rimettere} no es volver a poner'),
      text: T(
        'En {Rimetti a noi i nostri debiti}, {rimettere} significa perdonar y {a noi} es dativo de persona. El español «perdónanos nuestras deudas» traduce las dos cosas; quien escribe «devuelve» por {rimetti} traduce la letra y pierde el sentido.',
      ),
    },
    {
      label: T('El texto no es una traducción'),
      text: T(
        'Las dos traducciones italianas del Salmo 22 usan registros distintos, y el griego original decide: donde una trae el dativo {mi}, la otra trae el ablativo {me}. La forma resuelve mejor el problema que la palabra, porque las dos opciones son italianas y solo una corresponde al griego.',
      ),
    },
  ],
  examples: [
    { text: 'Padre nostro che sei nei cieli.', gloss: T('Padre nuestro que estás en los cielos.') },
    { text: 'Sia santificato il tuo nome.', gloss: T('Sea santificado tu nombre.') },
    { text: 'Venga il tuo regno.', gloss: T('Venga tu reino.') },
    { text: 'Sia fatta la tua volontà.', gloss: T('Hágase tu voluntad.') },
    { text: 'Dacci oggi il nostro pane.', gloss: T('Danos hoy nuestro pan.') },
    { text: 'Rimetti a noi i nostri debiti.', gloss: T('Perdónanos nuestras deudas.') },
    { text: 'Perché mi hai abbandonato?', gloss: T('¿Por qué me has abandonado?') },
    { text: 'Non ci abbandonare.', gloss: T('No nos abandones.') },
  ],
  tables: [
    {
      caption: T('Mapa del Padrenuestro'),
      head: ['Frase', 'Verbo', 'Modo'],
      rows: [
        ['Padre nostro che sei nei cieli', 'sei', 'indicativo'],
        ['Sia santificato il tuo nome', 'sia', 'congiuntivo'],
        ['Venga il tuo regno', 'venga', 'congiuntivo'],
        ['Sia fatta la tua volontà', 'sia', 'congiuntivo'],
        ['Dacci oggi il nostro pane', 'dacci', 'imperativo'],
        ['Rimetti a noi i nostri debiti', 'rimetti', 'imperativo'],
      ],
    },
    {
      caption: T('Formas que engañan al lector'),
      head: ['Forma', 'Analisi'],
      rows: [
        ['nei', 'in + i'],
        ['dacci', 'da + ci'],
        ['mi', 'pronome indiretto'],
        ['perché', 'interrogativo'],
        ['hai', 'avere, tu'],
      ],
    },
  ],
};
