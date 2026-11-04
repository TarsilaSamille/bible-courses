import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('Imperativo'),
  subtitle: T('μίλα! — μίλησε!'),
  section: T('El verbo'),
  body: C(`## El imperativo no tiene tiempo

El imperativo griego es la única forma que queda igual en todas las personas: no cambia con el sujeto. Quien no distinga ο πατήρ de πατέρας o πατήρ leerá un sustantivo como si fuera verbo, y la frase entera cambia de sentido.

## Presente o aoristo: la diferencia es real, no formal

μίλα! «¡habla!» es el presente: el comportamiento, el hábito. μίλησε! «¡habla ahora!» es el aoristo: un acto concreto, ya decidido. El español los traduce con el mismo imperativo, y por eso la elección del aoristo en griego es un dato, no un adorno: el texto está diciendo que la cosa va a ocurrir.

En la práctica el aoristo aparece cuando hay alguien frente a quien habla (πες μου «dime», δώσε μου «dame») y en el futuro inmediato: φέρε μου τὸ βιβλίον «tráeme el libro» es aoristo, no φέρετε. El griego resuelve así lo que el español resuelve con «ve a buscar», que parece futuro pero es una orden.

## El plural es fácil; el problema es el pronombre

μιλάμε, μιλάτε; μιλήσαμε, μιλήσατε. ελάστε! «¡venid!»; αγαπάτε αλλήλους! «¡amaos los unos a los otros!».

El pronombre pospuesto no es exótico: πες μου «dime», δώσε μου «dame», άφησέ μη «déjame». En segunda persona es μου: δώσε μου. En los demás casos es με, σε, μας, σας: δώσε με, δώσε σε, δώσε μας, δώσε σας. ο πατήρ μου y πατήρ μου son la misma frase; la posición fuerte es solo énfasis.

## La negación va antes

μη y μην, antes del verbo: μη λές! «¡no digas!», μην πεις! «¡no digas!». La forma idiomática y más enfática es ποτέ μην: Ποτέ μην πεις! «¡Nunca digas!». Compárese con el griego antiguo, que también permitía la negación posverbal (μὴ λέγε): la posición cambió en el griego moderno.

## Criterio de lectura

Cada vez que un verbo esté en imperativo, pregunta: ¿presente o aoristo? La respuesta dice si es rutina o hecho consumado. Y fíjate en el μη después de άφησε: ahí el μη es pronominal («me»), no negación.`),
  vocab: [
    V('μίλα', 'μιλώ', '¡habla!'),
    V('μίλαμε', 'μιλώ', 'hablemos'),
    V('μίλησε', 'μιλώ', '¡habla ahora!'),
    V('μιλήσαμε', 'μιλώ', 'hablemos ahora'),
    V('πες', 'λέω', '¡di!'),
    V('έλα', 'έρχομαι', '¡ven!'),
    V('ελάστε', 'έρχομαι', '¡venid!'),
    V('μη μιλήσεις', 'μιλώ', 'no hables'),
    V('πες μου', 'λέω', 'dime'),
    V('φάε', 'τρώω', '¡come!'),
    V('πήγε', 'πάω', '¡ve!'),
    V('πιστεψε', 'πιστεύω', '¡cree!'),
    V('αλλήλους', 'αλλήλους', 'los unos a los otros'),
    V('μην', 'μη', 'no (negación)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es imperativo aoristo?'),
    options: [T('μίλα'), T('μίλησε'), T('μιλάτε'), T('θα μιλήσετε')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('¡Habla! Quiero hablar'),
      answer: 'μίλα',
      hint: T('Imperativo presente'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es el plural inclusivo?'),
      options: [T('μίλα'), T('μιλάτε'), T('μιλήσαμε'), T('μη μιλάς')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Relacionar función'),
      pairs: [
        { a: 'έλα!', b: T('llamar') },
        { a: 'μη φύγεις', b: T('prohibir') },
        { a: 'πες μου', b: T('pronombre pospuesto') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [{ n: '§1', text: T('Singular y plural necesitan formas distintas.') }],
  notes: [
    {
      label: T('Koiné'),
      text: T('πίστευσον es aoristo koiné; su equivalente moderno es πίστεψε.'),
    },
  ],
  examples: [{ text: 'αγαπάτε αλλήλους', gloss: T('amaos los unos a los otros') }],
  tables: [
    {
      caption: T('Imperativo'),
      head: ['Aspecto', 'Singular', '1º plural'],
      rows: [
        ['presente', 'μίλα!', 'μιλάμε!'],
        ['aoristo', 'μίλησε!', 'μιλήσαμε!'],
      ],
    },
  ],
};
