import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  title: T('El verbo: aspecto y la negación que se divide'),
  subtitle: T("didn't go, have been × have gone — el par que cambia el sentido"),
  section: T('El verbo'),
  body: C(`## La negación inserta un auxiliar

El hablante de portugués escribe {I didn't went} y {She doesn't likes}. Las dos frases están mal por la misma razón: después de un auxiliar el verbo principal queda en la **base**, y no en la forma que tendría solo.

Es {do} el que hace el trabajo. En presente, {do not} más base: {I do not go}, {she does not like}. En pasado, {did not} más base: {I did not go}, {they did not come}. El {did} es la forma de pasado de {do}, y es él el que carga con el tiempo.

La regla cabe en una línea: **la negación no es el tiempo, el auxiliar es el tiempo**. Por eso {did not} nunca aparece con un pasado como {went}, {saw} o {came}. Una frase como {I did not went} tiene el tiempo duplicado.

## Have been y have gone

El par que el hablante de portugués nunca vio es {have been} y {have gone}, y la diferencia no es de tiempo: es de **resultado**. {I have gone to Rome} dice que el viaje ocurrió y terminó; {I have been to Rome} dice que el viaje ocurrió también y lo que importa es que estuviste allí.

Lo mismo vale con {have left} y {have been away}: {He has left} dice que no está aquí; {He has been away} dice que estuvo fuera y volvió. Una frase describe el estado actual y la otra cuenta la experiencia.

La KJV usa construcciones que dejan visible la misma distinción. Juan 11:17 dice {when he had heard that he was dead, he met him}: el {had heard} viene antes de otro pasado, y el encuentro es lo que cierra la frase.

## Tres construcciones, tres aspectos

El inglés resuelve con tres construcciones lo que el portugués resuelve con el tiempo verbal. {Be} más {ing} da lo que está pasando: {He is working}. {Have} más participio da lo que tiene resultado: {He has finished}. {Have been} más {ing} da lo que viene haciendo desde hace tiempo: {He has been working since eight}.

La tercera es la que más confunde, porque en portugués la única forma de decirla es la perífrasis "estar + a + infinitivo", y el aprendiz no sabe que eso tiene nombre propio en inglés.

1 Juan 4:18 junta las tres en una frase: {There is no fear in love: for perfect love casteth out fear}. El {there is} es construcción existencial, {casteth out} es verbo más partícula, y el presente {casteth} dice que el amor perfecto sigue sacando el miedo.

## El par que el portugués resuelve solo

El portugués tiene un tiempo para dos funciones y el inglés tiene dos para una. "Eu já fui à Europa" puede ser {I have already been to Europe} (experiencia) o {I have already gone to Europe} (resultado), y el portugués lo resuelve por contexto sin que el hablante decida nada.

El aprendiz que traduce frase por frase acaba heredando la ambigüedad y escribe la forma más común. El camino corto es fijar los dos pares: {have been} y {have gone}, {have left} y {have been away}, y después escuchar la diferencia.`),
  vocab: [
    V('did not go', 'go', 'no fue'),
    V('does not like', 'like', 'no le gusta'),
    V('do not go', 'go', 'no voy'),
    V('have gone', 'go', 'me he ido'),
    V('have been', 'be', 'he estado'),
    V('have been to', 'be', 'he estado en'),
    V('have left', 'leave', 'me he ido, salí'),
    V('have been away', 'be', 'he estado fuera'),
    V('had heard', 'hear', 'había oído'),
    V('is working', 'work', 'está trabajando'),
    V('has finished', 'finish', 'ha terminado'),
    V('has been working', 'work', 'lleva trabajando'),
    V('there is no fear', 'fear', 'no hay miedo'),
    V('casteth out', 'cast', 'echa fuera'),
    V('already', 'already', 'ya'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Después de un auxiliar el verbo principal queda en la base: did not go, does not like, will not go.',
      ),
    },
    {
      n: '2',
      text: T(
        'La negación es el auxiliar, no el tiempo: did not nunca aparece con una forma de pasado.',
      ),
    },
    {
      n: '3',
      text: T(
        'Have been y have gone se distinguen por resultado y no por tiempo: una describe el estado actual y la otra cuenta la experiencia.',
      ),
    },
    {
      n: '4',
      text: T(
        'Be más -ing da lo que está pasando, have más participio da lo que tiene resultado y have been más -ing da lo que viene haciendo.',
      ),
    },
    { n: '5', text: T('There is es construcción existencial y no lleva ni plural ni tiempo.') },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'Juan 11:17 trae had heard antes de otro pasado, y 1 Juan 4:18 trae casteth out, que junta construcción existencial con verbo más partícula.',
      ),
    },
    {
      label: T('Diagnóstico:'),
      text: T(
        'Si alguien escribe did not went, el problema no es el pasado sino la regla del auxiliar: la negación carga el tiempo y el verbo queda en la base.',
      ),
    },
  ],
  examples: [
    { text: '{I did not go}', gloss: T('yo no fui') },
    { text: "{I didn't went}", gloss: T('mal: tiempo duplicado') },
    { text: '{She does not like it}', gloss: T('a ella no le gusta eso') },
    { text: '{I have gone to Rome}', gloss: T('me he ido a Roma — el viaje terminó') },
    { text: '{I have been to Rome}', gloss: T('he estado en Roma — experiencia') },
    { text: '{He has left}', gloss: T('se ha ido — no está aquí') },
    { text: '{He has been away}', gloss: T('ha estado fuera y ha vuelto') },
    { text: '{He has been working since eight}', gloss: T('lleva trabajando desde las ocho') },
    {
      text: '{when he had heard that he was dead}',
      gloss: T('cuando había oído que estaba muerto'),
    },
    { text: '{There is no fear in love}', gloss: T('no hay miedo en el amor') },
    { text: '{perfect love casteth out fear}', gloss: T('el amor perfecto echa fuera el miedo') },
  ],
  tables: [
    {
      caption: T('La negación en cada tiempo'),
      head: [T('Tiempo'), T('Afirmativa'), T('Negativa')],
      rows: [
        [T('presente'), '{I go}', '{I do not go}'],
        [T('pasado'), '{I went}', '{I did not go}'],
        [T('presente perfecto'), '{I have gone}', '{I have not gone}'],
        [T('futuro'), '{I will go}', '{I will not go}'],
        [T('modal'), '{I can go}', '{I cannot go}'],
      ],
    },
    {
      caption: T('El par que cambia el sentido'),
      head: [T('Frase'), T('Qué dice')],
      rows: [
        ['{I have gone to Rome}', T('el viaje está hecho y se acabó')],
        ['{I have been to Rome}', T('el viaje cuenta, y estuviste allí')],
        ['{He has left}', T('no está aquí')],
        ['{He has been away}', T('estuvo fuera y volvió')],
      ],
    },
    {
      caption: T('Tres construcciones de aspecto'),
      head: [T('Construcción'), T('Ejemplo'), T('Aspecto')],
      rows: [
        ['{be + -ing}', '{He is working}', T('en curso')],
        [T('{have + participio}'), '{He has finished}', T('con resultado')],
        ['{have been + -ing}', '{He has been working}', T('duración hasta ahora')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál frase es correcta?'),
    options: [T("I didn't went"), T('I did not go'), T('I not went'), T('I did not went to')],
    answer: 1,
    hint: T('Después de did not el verbo queda en la base.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Completa la negación en pasado: 'He ___ not come.'"),
      answer: 'did',
    },
    {
      kind: 'fill',
      prompt: T("Completa: 'I have ___ to Paris twice.' (experiencia)"),
      answer: 'been',
    },
    {
      kind: 'match',
      prompt: T('Relaciona la construcción con el aspecto.'),
      pairs: [
        { a: 'is working', b: T('en curso') },
        { a: 'has finished', b: T('con resultado') },
        { a: 'has been working', b: T('duración hasta ahora') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase dice que estuvo fuera y volvió?'),
      options: [
        T('He has gone away'),
        T('He has been away'),
        T('He has away been'),
        T('He has been gone'),
      ],
      answer: 1,
    },
  ],
};
