import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  title: T('El artículo: el artículo cero'),
  subtitle: T('go to school, by car, Teachers are — las cuatro omisiones'),
  section: T('Sustantivos'),
  body: C(`## Cuatro casos, y la lista es corta

El hablante de portugués falla el artículo más por exceso que por falta, y el exceso tiene una causa: en portugués {the} aparece casi siempre. En inglés el artículo **desaparece** en cuatro situaciones, y solo cuatro. Aprendidas las cuatro, los errores paran.

Son: plural genérico, masa generalizada, institución y {by} más medio de transporte. Cualquier otro sustantivo conserva su artículo, y que la lista sea corta es lo que la hace aprendible.

## El plural genérico

{Teachers are} y {Books are} hablan de toda la clase, no de un miembro de ella. El plural ya dice "todos": el portugués diría "os professores que estão aqui" y el inglés dice {Teachers}.

Proverbios 18:21 en la KJV pone los dos extremos uno al lado del otro: {Death and life are in the power of the tongue}. Los dos sustantivos van en plural genérico, sin artículo, y la frase vale para cualquier habla y para cualquier lengua.

Cuando el sustantivo genérico es contable en singular, va en plural aunque haya un solo grupo: {Parents are responsible for their children}.

## La masa generalizada

{Music is} y {Life is} hablan de todo el campo, no de un caso particular. Es el mismo movimiento del párrafo anterior con una diferencia: aquí el sustantivo ni siquiera es pluralizable, y el artículo tampoco viene.

1 Juan 1:5 dice {God is light, and there is no darkness in him at all}, y {light} y {darkness} son dos masas. Proverbios 15:3 dice {The eyes of the LORD are everywhere, beholding the evil and the good}, y {evil} y {good} son masas generalizadas; {the evil} passing a significar un mal concreto.

El artículo definido vuelve en cuanto la masa queda determinada: {the water in the glass}, {the life of Christ}.

## Las instituciones y el medio de transporte

{Go to school} y {go to church} no significan ir a un edificio concreto sino usar lo que ofrece la institución. Con artículo la frase cambia de asunto y pasa a hablar del edificio: {go to the church} es ir a una iglesia concreta, la que está a la vista.

La KJV muestra la institución en Marcos 1:21, con {And he went into the synagogue on the sabbath days}. El sentido de {synagogue} ahí es la comunidad reunida, no las paredes de la casa de oración.

{By car}, {by train}, {by post} y {by hand} no llevan artículo ni preposición alternativa. Es {by} más el sustantivo en singular, y la construcción es tan automática como {a} más un nombre.

2 Corintios 5:7 usa la misma llave con sustantivos abstractos: {we walk by faith, not by sight}. El {by} marca el medio, y el medio nunca lleva artículo.`),
  vocab: [
    V('go to school', 'school', 'ir a la escuela (estudiar)'),
    V('go to church', 'church', 'ir a la iglesia (cultuar)'),
    V('go to the church', 'church', 'ir a una iglesia concreta'),
    V('go to hospital', 'hospital', 'ir al hospital (tratarse)'),
    V('go to prison', 'prison', 'ir a la prisión (estar preso)'),
    V('by car', 'car', 'en coche'),
    V('by train', 'train', 'en tren'),
    V('by hand', 'hand', 'a mano'),
    V('by post', 'post', 'por correo'),
    V('by faith', 'faith', 'por la fe'),
    V('in general', 'general', 'en general'),
    V('light', 'light', 'luz'),
    V('darkness', 'darkness', 'oscuridad'),
    V('synagogue', 'synagogue', 'sinagoga'),
    V('the tongue', 'tongue', 'la lengua'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El artículo desaparece en cuatro casos: plural genérico, masa generalizada, institución usada como función y by más medio de transporte.',
      ),
    },
    {
      n: '2',
      text: T(
        'En el plural genérico el sustantivo va en plural aunque haya un solo grupo: parents, students, children.',
      ),
    },
    {
      n: '3',
      text: T(
        'En la masa generalizada no viene artículo, y vuelve en cuanto la masa queda determinada: water, pero the water in the glass.',
      ),
    },
    {
      n: '4',
      text: T(
        'Institución sin artículo significa la función (estudiar, cultuar, tratarse); con artículo significa el edificio.',
      ),
    },
    {
      n: '5',
      text: T(
        'By más medio no lleva artículo ni preposición alternativa: by car, by train, by hand, by faith.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'Proverbios 18:21 trae Death and life en plural genérico, 1 Juan 1:5 trae light y darkness como masas y Marcos 1:21 trae la institución. Tres casos distintos, y la KJV no señala ninguno.',
      ),
    },
    {
      label: T('Exceso:'),
      text: T(
        'The school is famous es el edificio; I go to school es el sistema. Cambiar uno por otro cambia el asunto de la frase, y es la confusión más común después del plural genérico.',
      ),
    },
  ],
  examples: [
    {
      text: '{Teachers are responsible}',
      gloss: T('los profesores son responsables — plural genérico'),
    },
    {
      text: '{Music is a gift from God}',
      gloss: T('la música es un don de Dios — masa generalizada'),
    },
    { text: '{go to school}', gloss: T('ir a la escuela, es decir, estudiar') },
    { text: '{go to the school}', gloss: T('ir a una escuela concreta') },
    { text: '{sent by post}', gloss: T('enviado por correo') },
    { text: '{we walk by faith, not by sight}', gloss: T('caminamos por la fe, no por la vista') },
    {
      text: '{Death and life are in the power of the tongue}',
      gloss: T('la muerte y la vida están en el poder de la lengua'),
    },
    {
      text: '{beholding the evil and the good}',
      gloss: T('contemplando el mal y el bien — masas generalizadas'),
    },
    { text: '{the water in the glass}', gloss: T('el agua del vaso — masa determinada') },
    { text: '{he went into the synagogue}', gloss: T('entró en la sinagoga — institución') },
  ],
  tables: [
    {
      caption: T('Los cuatro casos de artículo cero'),
      head: [T('Caso'), T('Ejemplo'), T('Por qué no viene el artículo')],
      rows: [
        [T('plural genérico'), '{Teachers are honest}', T('el plural ya dice "todos"')],
        [T('masa generalizada'), '{Music is beautiful}', T('la frase cubre todo el campo')],
        [T('institución'), '{go to school}', T('la institución, no el edificio')],
        [T('by + medio'), '{by car}', T('medio de transporte')],
      ],
    },
    {
      caption: T('Con artículo y sin artículo'),
      head: [T('Con artículo'), T('Sin artículo'), T('Sentido')],
      rows: [
        ['{go to the church}', '{go to church}', T('edificio × culto')],
        ['{go to the hospital}', '{go to hospital}', T('edificio × tratamiento')],
        ['{go to the prison}', '{go to prison}', T('edificio × prisión')],
        ['{go to the university}', '{go to university}', T('campus × estudio')],
        ['{by post}', '{by hand}', T('medio: ninguno lleva artículo')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué frase usa el artículo correctamente?'),
    options: [
      T('He goes to the school to study'),
      T('He goes to school to study'),
      T('He goes to the schools to study'),
      T('He goes to school to study the school'),
    ],
    answer: 1,
    hint: T('Con el sentido de estudiar, school no lleva artículo.'),
  },
  exercises: [
    { kind: 'fill', prompt: T("Completa sin artículo: 'Music ___ beautiful.'"), answer: 'is' },
    { kind: 'fill', prompt: T("Completa: 'She travels ___ car.'"), answer: 'by' },
    {
      kind: 'match',
      prompt: T('Relaciona el caso con el ejemplo.'),
      pairs: [
        { a: T('plural genérico'), b: '{Teachers are honest}' },
        { a: T('masa generalizada'), b: '{Music is beautiful}' },
        { a: T('institución'), b: '{go to school}' },
        { a: T('by + medio'), b: '{by car}' },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('¿En qué frase hace falta el artículo?'),
      options: [
        T('I go to church every Sunday'),
        T('I go to the church on Friday'),
        T('I go to churches every Sunday'),
        T('I go to church in the churches'),
      ],
      answer: 1,
    },
  ],
};
