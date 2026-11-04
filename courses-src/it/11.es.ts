import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('El imperativo'),
  subtitle: T('parla, parli, non parlare'),
  section: T('Los tiempos del verbo'),
  body: C(`## El imperativo existe en tres registros

El italiano tiene tres imperativos, y la elección no es de estilo: **es de registro social**. Con {tu} el imperativo coincide con el presente en casi todos los verbos: {parla}, {leggi}, {finisci}. Con {lei} (usted) se usa el congiuntivo: {parli}, {legga}, {finisca}. Y el plural usa casi siempre la forma de {voi}: {parlate}, {leggete}, {finite}.

Fíjate en lo que esto le hace al español: el español usa «tú» y «usted» en la misma forma, el italiano usa {lei} para uno y {tu} para el otro. Una traducción que toma {parla} por «usted habla» está equivocada, porque {parla} es {tu}.

## La negación también cambia de forma

Con {tu} **la negación es** {non} más el infinitivo: {non parlare}, «no hables». Con {lei} es {non} más el congiuntivo: {non parli}. Las dos significan lo mismo, y la segunda suena más educada. Como en español, el pronombre puede omitirse: {Parla!}, {Non parlare!}, porque {tu} y {lei} ya están en la forma del verbo.

La diferencia que más llama la atención a quien estudio griego: el griego tiene una sola negación (μη) y el italiano tiene dos, porque tiene dos formas de tratamiento. Es la misma razón por la que el italiano tiene el congiuntivo: es una lengua que se ocupa del nivel del interlocutor.

## En el afirmativo el pronombre se pega

En el imperativo afirmativo **los pronombres van pegados**: {parlati}, {perdonali}, {dammi}, {sedetevi}. En el negativo se sueltan: {non mi parlate}, {non li perdonare}, {non mi siedete}. La regla es mecánica y no tiene excepción: la negación {non} interrumpe la fusión.

## Criterio de lectura

Si ves un imperativo terminado en {-a}, {-i} o {-e} sin {-ate}, es {tu}. Si termina en {-i} o {-a} y es la forma de {lei} ({parli}), es «usted». Y en caso de duda, mira la negación: {non} más infinitivo es {tu}, {non} más congiuntivo es {lei}. En los dos casos el pronombre se elide.`),
  vocab: [
    V('parla', 'parlare', '¡habla!'),
    V('parli', 'parlare', '¡hable! (usted)'),
    V('parlate', 'parlare', '¡hablad!'),
    V('parlati', 'parlare', 'háblate'),
    V('legge', 'leggere', '¡lee!'),
    V('legga', 'leggere', '¡lea! (usted)'),
    V('finite', 'finire', '¡terminad!'),
    V('dammi', 'dare', '¡dame!'),
    V('perdonali', 'perdonare', '¡perdónalos!'),
    V('non parlare', 'parlare', '¡no hables!'),
    V('non parli', 'parlare', '¡no hable! (usted)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se niega «¡habla!» a un amigo?'),
    options: [T('non parla'), T('non parlare'), T('non parli'), T('non parlato')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Cuál es el imperativo formal de leggere?'),
      options: [T('leggi'), T('legga'), T('legge'), T('leggete')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Completa: Padre, perdona___ (li)'),
      answer: 'li',
      hint: T('Pronombre objeto de tercer plural.'),
    },
    {
      kind: 'fill',
      prompt: T('Forma el imperativo de tu: dire → dimmi'),
      answer: 'dimmi',
      hint: T('El verbo pierde la r final y duplica la m.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Con {tu} el imperativo coincide con el presente: {parla}, {leggi}, {finisci}.'),
    },
    {
      n: '2',
      text: T(
        'Con {lei} se usa el congiuntivo: {parli}, {legga}, {finisca}; con {voi} la forma de plural: {parlate}, {leggete}.',
      ),
    },
    {
      n: '3',
      text: T(
        'La negación de {tu} es {non} más el infinitivo, {non parlare}; la de {lei} es {non} más el congiuntivo, {non parli}.',
      ),
    },
    {
      n: '4',
      text: T(
        'En el afirmativo los pronombres se pegan: {parlati}, {perdonali}, {dammi}, {sedetevi}.',
      ),
    },
    {
      n: '5',
      text: T(
        'En el negativo los pronombres se sueltan: {non mi parlate}, {non li perdonare}. La negación {non} interrumpe la fusión.',
      ),
    },
  ],
  notes: [
    {
      label: T('{Tu} y {Lei}'),
      text: T(
        'El imperativo marca la formalidad por la forma: {parla} con quien conoces, {parli} con quien no conoces, {parlate} con un grupo. Y el pronombre {mi} puede ir después del verbo, como en {mi dica}, lo que cambia el tono otra vez.',
      ),
    },
    {
      label: T('Una negación o dos'),
      text: T(
        'El griego tiene una sola negación (μη) y el italiano tiene dos, porque el italiano tiene dos formas de tratamiento. Quien traduce del griego al italiano tiene que elegir entre {non parlare} y {non parli}, y la elección no es de sentido: es de relación con quien escucha.',
      ),
    },
  ],
  examples: [
    { text: 'Parla!', gloss: T('¡Habla!') },
    { text: 'Non parlare!', gloss: T('¡No hables!') },
    { text: 'Legga il Vangelo.', gloss: T('¡Lea el Evangelio!') },
    { text: 'Amatevi gli uni gli altri.', gloss: T('Amadvos unos a otros.') },
    { text: 'Padre, perdonali.', gloss: T('Padre, perdónalos.') },
    { text: 'Perdonate i nostri debiti.', gloss: T('Perdonad nuestras deudas.') },
    { text: 'Non ci abbandonare.', gloss: T('No nos abandones.') },
    { text: 'Andiamo!', gloss: T('¡Vamos!') },
  ],
  tables: [
    {
      caption: T('Imperativo por persona'),
      head: ['Persona', 'Imperativo', 'Negazione'],
      rows: [
        ['tu', 'parla', 'non parlare'],
        ['lei', 'parli', 'non parli'],
        ['noi', 'parliamo', 'non parliamo'],
        ['voi', 'parlate', 'non parlate'],
      ],
    },
    {
      caption: T('Imperativo irregular'),
      head: ['Infinitivo', 'tu', 'lei'],
      rows: [
        ['dire', 'dì', 'dica'],
        ['fare', 'fa', 'faccia'],
        ['leggere', 'leggi', 'legga'],
        ['sapere', 'sai', 'sappia'],
        ['potere', 'puoi', 'possa'],
        ['venire', 'vieni', 'venga'],
      ],
    },
  ],
};
