import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('{tu} y {vous}'),
  subtitle: T('registro, número y el tratamiento entre personas'),
  section: T('Los pronombres'),
  body: C(`## Dos palabras, tres funciones

{tu} es singular y familiar. {vous} es plural, o singular y formal. El francés no tiene pronombre neutro para «tú»: la oposición se resuelve por la relación, no por el número.

La elección nunca es literal. No se traduce {you} por {tu} solo porque la persona sea singular. Depende de cuatro cosas: **la edad**, el **cargo**, el **grado de intimidad** y el **género del interlocutor**, porque un mismo {vous} cubre a un hombre y a una mujer, cosa que {tu} no hace.

- {Tu es mon ami.} «Eres mi amigo»: dos iguales, la misma edad, puertas abiertas.
- {Vous êtes mon professeur.} «Usted es mi profesor»: un alumno a su profesor, cualquiera a un desconocido.

## El verbo delata la forma

Cuando {vous} es plural, el verbo es de tercera persona del plural: {vous priez} «vosotros oráis», {vous êtes} «estáis», {ils prient} «ellos oran». Fíjate en que {vous priez} y {vous prie} son frases distintas: la primera es segunda persona de cortesía, la segunda es tercera del singular.

El imperativo de {vous} termina en *-ez*: {parlez} «hablad», {écrivez} «escribid», {priez} «orad». Y lo mismo vale para el condicional: {vous parleriez} «hablaríais».

## El cambio de registro

El francés tiene fórmulas listas para cambiar de tratamiento:

- {On se tutoie ?} «¿Nos tuteamos?» — la pregunta en la mesa, con respuesta colectiva.
- {Je peux vous tutoyer ?} «¿Puedo tutearle?» — la más natural de las dos.
- {Pouvez-vous me tutoyer ?} «¿Puede tutearme?» — exige una respuesta explícita.

Y el vocabulario: **{tutoiement}** es el tratamiento por {tu}; **{vouvoiement}**, el tratamiento por {vous}. El primero es el habitual en la calle, en casa, entre amigos; el segundo, en el trabajo, en el banco, en la consulta, en el juicio.

## Lectura — Louis Segond

El Padrenuestro francés no usa {vous} con Dios. Abre con **{Notre Père, qui es aux cieux}** «Padre nuestro, que estás en los cielos»: {tu} y el presente {es}. **{Que ton nom soit sanctifié}** «Santificado sea tu nombre» mantiene {ton}, de {ta}, {tes}, todos en segunda persona del singular.

No es arbitrario. El texto bíblico francés traduce el hebreo del trato a Dios, que es categórico: la casilla del tratamiento es siempre de segunda persona. Un **{vous}** en oración sonaría extraño, y por eso el lector francés no lo hace.

Lo interesante ocurre en la **narración**, en tercera persona: **{il leur a parlé}** «les habló», **{il les a vus}** «los vio». Allí {les} y {leur} son objeto directo e indirecto, y confundirlos con {leurs}, el posesivo, es el error más común de quien aprende.

## Lo esencial

{tu} es siempre singular y siempre familiar. {vous} es siempre formal o plural, y el verbo te dice cuál: {vous êtes} es ambiguo, {vous priez} es plural, {vous prie} es cortesía. Si fallas en el registro, nada deja de entenderse: solo te suenas distante, grosero o raro.`),
  vocab: [
    V('tu', 'tu', 'tú (singular, familiar)'),
    V('vous', 'vous', 'usted/vosotros: formal singular o plural'),
    V('tu es', 'être', 'eres (familiar)'),
    V('vous êtes', 'être', 'usted es / vosotros sois (ambiguo)'),
    V('vous priez', 'prier', 'vosotros oráis / ore (plural y cortesía)'),
    V('parlez', 'parler', '¡hablad! (imperativo de {vous})'),
    V('tutoiement', 'tutoiement', 'tratamiento por {tu}'),
    V('vouvoiement', 'vouvoiement', 'tratamiento por {vous}'),
    V('se tutoyer', 'tutoyer', 'tratarse de {tu}'),
    V('on se tutoie ?', 'tutoyer', '¿nos tuteamos?'),
    V('votre professeur', 'professeur', 'su profesor'),
    V('mon ami', 'ami', 'mi amigo (masculino)'),
    V('Notre Père', 'Père', 'Padre nuestro (oración)'),
    V('qui es aux cieux', 'ciel', 'que estás en los cielos ({tu})'),
    V('ton nom', 'nom', 'tu nombre ({ton})'),
    V('il leur a parlé', 'parler', 'les habló ({leur} = objeto indirecto)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'En un banco, un desconocido dice «Bonjour, ___ avez le reçu du mois?». ¿Cuál es el relleno correcto?',
    ),
    options: [
      T('{vous} — el desconocido y el empleado no se conocen'),
      T('{tu} — el cajero es amigo íntimo del empleado'),
      T('{vous as} — forma que no existe en francés'),
      T('{vous} — pero el verbo debería ser {as}'),
    ],
    answer: 0,
    hint: T(
      'Institución más desconocido pide {vous} formal singular, y el verbo también asume la forma de {vous}.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Imperativo de {parler} en segunda persona del plural, sin -s: vous ___ parler.'),
      answer: 'parlez',
      hint: T('En el grupo 1 la forma de {vous} cambia la -r final por -z.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase solo puede ser {vous} por cortesía, y nunca plural?'),
      options: [
        T('{Vous êtes mon professeur.} — el sustantivo está en singular'),
        T('{Vous êtes mes professeurs.} — {mes} ya marca el plural'),
        T('{vous êtes ready.} — el adjetivo inglés delata el plural'),
        T('{vous suis.} — forma inexistente que prueba la ambigüedad'),
      ],
      answer: 0,
      hint: T('Busca un sustantivo en singular con {votre} y un verbo en -ez.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la situación con el tratamiento correcto'),
      pairs: [
        { a: T('un compañero de trabajo de la misma edad'), b: T('{tu} — igualdad y confianza') },
        { a: T('el notario en un acto oficial'), b: T('{vous} — institución y distancia') },
        { a: T('la abuela, en casa'), b: T('{vous} — respeto, no intimidad') },
        { a: T('Dios, en la oración'), b: T('{tu} — el trato bíblico es de segunda persona') },
        { a: T('un grupo de diez amigos'), b: T('{vous} — plural, con tono de grupo') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{tu} nunca es plural ni formal. Con dos o más personas es {vous}, aunque todas tengan diez años.',
      ),
    },
    {
      n: '2',
      text: T(
        '{vous} es ambiguo en número; el verbo lo resuelve: {vous êtes} puede ser una o dos personas, {vous priez} solo puede ser dos o una por cortesía.',
      ),
    },
    {
      n: '3',
      text: T(
        'El imperativo de {vous} termina siempre en -ez ({parlez}, {finissez}) o en -s ({sois}, {prends}): el único punto en que la forma de {vous} se parece a la de {il/elle}.',
      ),
    },
    {
      n: '4',
      text: T(
        'La oración y el texto bíblico usan {tu} con Dios, porque el trato es siempre de segunda persona. Fuera de la oración la elección es libre, y hoy {vous} es cada vez más común en los cultos.',
      ),
    },
    {
      n: '5',
      text: T(
        'En tercera persona, {les} es objeto directo, {leur} es objeto indirecto y el posesivo es {leurs}, con -s. Confundir los tres es el error más común del capítulo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Un pronombre sin género'),
      text: T(
        '{vous} no se flexiona. El mismo pronombre cubre a un hombre y a una mujer, y el género reaparece en el sustantivo, que tiene que concertar: {vous êtes un professeur} o {vous êtes une professeure}. El verbo también lleva la marca: {vous êtes fatigué} y {vous êtes fatiguée}: el final del participio es la única pista. Compáralo con el portugués, donde el género del interlocutor también desaparece.',
      ),
    },
    {
      label: T('Cuando el {vous} es regional'),
      text: T(
        "En Quebec, en Bélgica y en la Suiza francófona, {vous} es plural incluso entre amigos y familia: **{on s'est tutoyés dès l'enfance}** «nos tutearon desde la infancia». En Marsella, lo mismo ya sería {tu}. El francés no es igual en toda Europa: decide el dialecto, y por eso el mismo impreso puede pedir {vous} en Zúrich y {tu} en Lyon.",
      ),
    },
  ],
  examples: [
    { text: 'Tu es mon ami.', gloss: T('eres mi amigo (igual, informal)') },
    { text: 'Vous êtes mon professeur.', gloss: T('usted es mi profesor (formal)') },
    { text: 'Vous êtes à l’heure.', gloss: T('están a tiempo (una o varias personas)') },
    { text: 'Vous priez pour lui.', gloss: T('vosotros oráis por él / ore por él (cortesía)') },
    {
      text: 'Parlez plus lentement, s’il vous plaît.',
      gloss: T('hablad más despacio, por favor (imperativo)'),
    },
    { text: 'Pouvez-vous me tutoyer ?', gloss: T('¿puede tutearme?') },
    { text: 'On se tutoie, entre nous.', gloss: T('nosotros nos tuteamos') },
    {
      text: 'Notre Père, qui es aux cieux',
      gloss: T('Padre nuestro, que estás en los cielos ({tu} en oración)'),
    },
    { text: 'Que ton nom soit sanctifié', gloss: T('Santificado sea tu nombre ({ton})') },
    { text: 'il leur a parlé', gloss: T('les habló ({leur} = objeto indirecto)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — {tu} y {vous} en presente'),
      head: [T('Persona'), T('Singular familiar'), T('Formal o plural')],
      rows: [
        ['1.ª', T('{je suis}'), T('{vous êtes} — formal')],
        ['2.ª', T('{tu es} — tú'), T('{vous êtes} — ambiguo')],
        ['3.ª', T('{il est}'), T('{vous êtes} — plural')],
        ['Imperativo', T('{sois} ({sois sabio})'), T('{sed} ({sed sabios})')],
      ],
    },
    {
      caption: T('Tabla 2 — {être} y {avoir} con {tu} y {vous}'),
      head: [T('Verbo'), T('{tu}'), T('{vous}')],
      rows: [
        ['{être}', T('{es}'), T('{êtes} — formal o plural')],
        ['{avoir}', T('{as}'), T('{avez} — formal o plural')],
        ['{pouvoir}', T('{puedes}'), T('{podéis}')],
        ['{devoir}', T('{debes}'), T('{debéis}')],
      ],
    },
  ],
};
