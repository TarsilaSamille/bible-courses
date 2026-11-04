import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('El subjuntivo να'),
  subtitle: T('θέλω να…'),
  section: T('El verbo'),
  body: C(`## να es la bisagra del griego moderno

να introduce una acción subordinada sin valor de orden: θέλω να μιλήσω «quiero hablar», πρέπει να φύγω «tengo que salir», ώστε να μάθω «para que aprenda». Fíjate en que el verbo subordinado va en aoristo (μιλήσω) aunque el principal esté en presente — en griego el aoristo es la forma «no marcada» de una subordinada.

## Dónde aparece el subjuntivo

Tras verbos de voluntad, necesidad y posibilidad, el aoristo es obligatorio: θέλω να, πρέπει να, μπορώ να, προσπαθώ να, καταφέρνω να. Son pocos y la lista es cerrada: si no está en ella, el verbo probablemente va en indicativo.

Tras όταν «cuando», πριν «antes», αφού «después de que», γιατί «porque» y semejantes, también es aoristo. Es el mismo mecanismo del griego antiguo: lo que encabeza una subordinada toma la forma de subordinada.

## να no es el subjuntivo del koiné

El subjuntivo antiguo (πιο να λέω) sobrevive en expresiones fijas — πιο να λω, μην ξεχάσετε — pero en el uso actual el griego moderno prefiere el indeterminado: να μιλήσω, no πιο να λέω. Traducir el Nuevo Testamento con πιο le suena arcaico a un hablante actual.

## θa + να no es estándar

θα έρθει es normal: futuro o posibilidad. θα να έρθει no. Dos marcadores para la misma idea, y el griego elige uno. En la duda, θα έρθει puede ser «vendrá» o «puede venir», y resolverlo es tarea de quien traduce.

## Criterio de lectura

Siempre que un verbo de plan vaya después de θέλω, πρέπει, πολύ, αρκετά, ώστε o πριν, espera el aoristo. Y no busques πιο: en griego moderno es un resto, no una regla.`),
  vocab: [
    V('να', 'να', 'que (subjuntivo)'),
    V('θέλω να', 'θέλω', 'quiero que/que'),
    V('πρέπει να', 'πρέπει', 'hay que'),
    V('θα', 'θα', 'futuro/posibilidad'),
    V('φύγω', 'φεύγω', 'salir'),
    V('μάθω', 'μαθαίνω', 'aprender'),
    V('έρθει', 'έρχομαι', 'vendrá; quizá venga'),
    V('μιλήσω', 'μιλώ', 'hablar'),
    V('θέλω', 'θέλω', 'quiero'),
    V('πρέπει', 'πρέπει', 'debo'),
    V('μπορώ', 'μπορώ', 'puedo'),
    V('ώστε', 'ώστε', 'para que'),
    V('για να', 'για να', 'para (finalidad)'),
    V('ελληνικά', 'ελληνικά', 'griego (idioma)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('θέλω ___ μιλήσω'),
    answer: 'να',
    hint: T('Partícula de subordinación'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Qué construcción expresa finalidad?'),
      options: [T('πρέπει να'), T('θα'), T('για να'), T('δεν')],
      answer: 2,
    },
    { kind: 'fill', prompt: T('No voy hoy'), answer: 'θα', hint: T('Marcador de tiempo futuro') },
    {
      kind: 'match',
      prompt: T('Relacionar conector y sentido'),
      pairs: [
        { a: 'θέλω', b: T('querer') },
        { a: 'πρέπει', b: T('deber') },
        { a: 'για να', b: T('para') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [{ n: '§1', text: T('Tras muchos verbos, να precede al aoristo/subjuntivo.') }],
  notes: [
    {
      label: T('Koiné'),
      text: T('El koiné empleaba formas como ἵνα λέγῃ; el moderno prefiere el aoristo con να.'),
    },
  ],
  examples: [{ text: 'θέλω να μάθω ελληνικά', gloss: T('quiero aprender griego') }],
  tables: [
    {
      caption: T('Construcciones'),
      head: ['Tipo', 'Ejemplo'],
      rows: [
        ['deseo', 'θέλω να φύγω'],
        ['necesidad', 'πρέπει να φύγω'],
        ['finalidad', 'για να φύγω'],
      ],
    },
  ],
};
