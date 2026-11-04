import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('Pronombres relativos'),
  subtitle: T('che, cui, il quale, dove'),
  section: T('Los pronombres y la pasiva'),
  body: C(`## {Che}: el relativo que casi lo hace todo

{che} es **el relativo más común del italiano**: «il libro che leggo», «la luce che splende». Señala persona o cosa y **no cambia, ni en género ni en número**. Si la frase es {le ragazze che studiano}, el {che} no pasa a femenino ni a plural. Quien flexiona el relativo italiano escribe mal.

Lo más importante es lo que hace {che} dentro de la subordinada: en {l’uomo che vedi è mio amico}, el {che} es sujeto de la relativa. Compara {la casa che abito} (la casa = sujeto) con {la casa che costruisco} (la casa = objeto). La misma palabra, posiciones distintas, y la traducción cambia: «la casa que habito» y «la casa que construyo».

## {Cui}: el relativo que no flexiona

Tras una preposición, el italiano usa casi siempre {cui} y no {che}: {l’uomo con cui parlo}, {il Dio a cui servo}. {cui} sirve para personas y para cosas, y también es invariable. Y, como {che}, puede ser sujeto u objeto: {la donna di cui parlavo}.

{cui} es **la forma que suena más literaria y más bíblica**. En los textos de Juan es corriente ver {il Verbo che era presso di Dio} (πρὸς τὸν θεόν), y si el traductor escribe {il quale} donde había {che}, el lector nota que la traducción está más formal que el griego.

## {Il quale}: la forma que flexiona

{il quale} es el relativo formal y el único que concuerda con el antecedente: {il quale}, {la quale}, {i quali}, {le quali}. Sirve cuando hay preposición o cuando la frase necesita peso: {la legge, la quale fu data da Mosè}. El español perdería el género; el italiano lo conserva.

{chi} puede sustituir a un antecedente humano con sentido genérico: {chi crede}, «quien cree». {dove} indica lugar, {la casa dove nacque}, y {donde} indica origen, {la terra donde venne}.

## Criterio de lectura

Cuando veas {che}, pregunta si el antecedente es sujeto u objeto de la relativa, porque de eso depende la traducción. Cuando veas {cui} tras una preposición, recuerda que es la forma normal y no un error. Y {il quale} es la elección cuando la frase es solemne; en un texto sencillo, forzar {il quale} suena raro.`),
  vocab: [
    V('che', 'che', 'que'),
    V('cui', 'cui', 'a quien/al cual'),
    V('il quale', 'quale', 'el cual'),
    V('chi', 'chi', 'quien'),
    V('dove', 'dove', 'donde'),
    V('donde', 'donde', 'de dónde'),
    V('legge', 'leggere', 'lee'),
    V('splende', 'splendere', 'brilla'),
    V('casa', 'casa', 'casa'),
    V('uomo', 'uomo', 'hombre'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Completa: l’uomo con ___ parlo'),
    answer: 'cui',
    hint: T('Es un relativo tras preposición.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Qué relativo completa: il libro ___ leggo?'),
      options: [T('che'), T('cui'), T('chi'), T('dove')],
      answer: 0,
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase usa il quale correctamente?'),
      options: [
        T('La casa la quale abito.'),
        T('La casa in la quale abito.'),
        T('La casa dove abito.'),
        T('La casa cui abito.'),
      ],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Completa: Gesù, ___ abiti?'),
      answer: 'dove',
      hint: T('Indica lugar.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{Che} no flexiona: en {le ragazze che studiano} el relativo sigue siendo {che}, sin género ni número.',
      ),
    },
    {
      n: '2',
      text: T(
        '{Che} puede ser sujeto u objeto, y lo decide la posición: {la casa che abito} frente a {la casa che costruisco}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Tras una preposición el italiano usa {cui} y no {che}: {l’uomo con cui parlo}, {il Dio a cui servo}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Il quale} concuerda con el antecedente: {il quale}, {la quale}, {i quali}, {le quali}.',
      ),
    },
    {
      n: '5',
      text: T(
        '{Dove} marca lugar, {donde} marca origen y {chi} marca persona: {la casa dove nacque}, {la terra donde venne}.',
      ),
    },
  ],
  notes: [
    {
      label: T('La preposición no desaparece'),
      text: T(
        '{Il ragazzo di cui parlo}: la preposición {di} es obligatoria, porque {cui} es un relativo y no un sustantivo. Olvidar la preposición cambia toda la relación y no solo la gramática.',
      ),
    },
    {
      label: T('{Cui} es la forma de Juan'),
      text: T(
        '{cui} suena más literaria y más bíblica. En el texto de Juan es normal ver {il Verbo che era presso di Dio} (πρὸς τὸν θεόν), y cambiar {che} por {il quale} sin necesidad hace que la traducción parezca más formal que el griego.',
      ),
    },
  ],
  examples: [
    { text: 'Il libro che leggo.', gloss: T('El libro que leo.') },
    { text: 'L’uomo che vedi è mio amico.', gloss: T('El hombre que ves es mi amigo.') },
    { text: 'La casa che abito.', gloss: T('La casa que habito.') },
    { text: 'La casa che costruisco.', gloss: T('La casa que construyo.') },
    { text: 'L’uomo con cui parlo.', gloss: T('El hombre con quien hablo.') },
    { text: 'La legge, la quale fu data da Mosè.', gloss: T('La ley, que fue dada por Moisés.') },
    { text: 'Cerchi chi cerca, trova.', gloss: T('Quien busca, encuentra.') },
    { text: 'La casa dove nacque.', gloss: T('La casa donde nació.') },
  ],
  tables: [
    {
      caption: T('Elección del relativo'),
      head: ['Contesto', 'Relativo'],
      rows: [
        ['senza preposizione', 'che'],
        ['dopo preposizione', 'cui'],
        ['formale e flessuibile', 'il quale'],
        ['luogo', 'dove'],
        ['origine', 'donde'],
        ['persona', 'chi'],
      ],
    },
    {
      caption: T('Qué marca {che} en la subordinada'),
      head: ['Frase', 'Funzione'],
      rows: [
        ['l’uomo che vedo', 'soggetto della relativa'],
        ['il libro che vedo', 'oggetto della relativa'],
        ['la casa che abito', 'abito nella casa'],
        ['la casa che costruisco', 'costruisco la casa'],
        ['l’amico di cui parlo', 'preposizione + relativo'],
        ['la casa dove nacque', 'luogo'],
      ],
    },
  ],
};
