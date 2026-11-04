import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  title: T('Los pronombres'),
  subtitle: T('lo so; il mio libro; qualche, nessuno'),
  section: T('El artículo y los pronombres'),
  body: C(`## El pronombre enfático: {lo}, {la}, {li}, {le}

Cuando un pronombre aparece solo, sin verbo, se vuelve **enfático** y toma la forma de aquello a lo que sustituye: {lo}, {la}, {li}, {le}, más {me}, {ti}, {ci}, {vi}, {si}. *Lo so.* *La vedo.* *Li conosco.* *Le ho detto tutto.*

El punto que engaña es la concordancia. El enfático concuerda con **lo que sustituye**, no con quien oye ni con quien habla: en «le tenebre non l’hanno vinto», {le tenebre} es plural y {l’hanno} es plural, pero el pronombre es {la}, singular, porque sustituye a {la luce}. Si el pronombre fuera plural, la frase sería «le tenebre le hanno vinto», y el sentido cambiaría.

## Posesivos y demostrativos

El posesivo concuerda con la cosa poseída: {il mio libro}, {i miei libri}, {la mia casa}, {le mie case}, {il suo padre}, {i suoi padri}. Sin artículo, en la forma invariable, es lo que aparece en cláusulas como «Dio è nostro padre» y «Maria è sua sorella». Y hay una forma que sustituye entero a {di + il quale}: **{di cui}**, como en «il libro di cui parlo».

El demostrativo tiene dos filas: {questo} y {quello}, con {questa}, {questi}, {queste} y {quella}, {quegli}, {quelle}. El par de {quegli} es el mismo que el de {lo}/{gli}: ante s + consonante, z, gn y ps, o ante nombre propio masculino, el lejano se vuelve {quegli} («quegli studenti», «quegli americani»), y ante vocal se vuelve {quell’} («quell’uomo»). {Codesto} es el lejano con distancia y un juicio: {codesta} è {una} cosa ben diversa.

## Indefinidos, interrogativos y el par que atasca

**Indefinidos**: {ogni} y {qualche} son **siempre singulares** y ya hacen el trabajo del artículo («ogni uomo», «qualche libro»), {alcuni} es plural, {nessuno} es «nadie», {ciascuno} es «cada uno», {tutti} es «todos».

**Interrogativos**: {chi} pregunta por una persona, {che} o {cosa} por una cosa, {come}, {dove}, {quando}, {quanto}, {quale}. Y aquí está el par que más atasca: el {che} relativo y el {che} interrogativo son **la misma palabra**. En «So {che} viene» el {che} es conjunción e introduce una subordinada; en «{Che} viene?» el {che} es pronombre y es la pregunta misma. Lo que decide es la posición: después de un verbo que ya tiene sujeto, es relativo; al principio de una frase interrogativa, es lo que se pregunta.

## En la Biblia

Jn 1:5 resuelve las dos cosas de una vez: «La luce splende nelle tenebre, e {le tenebre non l’hanno} vinto». {La luce} está determinado, y por eso el pronombre vuelve como {la}. {Le tenebre} también está determinado y en plural, y aun así el pronombre es {la}: el verbo {hanno} está en tercera plural porque concuerda con {le tenebre}, el sujeto. Quien vierta {l’hanno} por «las vencieron» pierde la información de que la luz es una sola.

## Criterio de lectura

Cada vez que veas {lo}, {la}, {li} o {le} fuera de un grupo pronominal, pregunta qué sustituyen: la respuesta está en la frase y en la concordancia del verbo. Y cuando el mismo {che} aparezca dos veces en un mismo versículo, compara las posiciones: una es relativa, la otra es pregunta.`),
  vocab: [
    V('lo', 'lo', 'lo (enfático, masc.)'),
    V('la', 'la', 'la (enfático, fem.)'),
    V('li', 'li', 'los (enfático)'),
    V('le', 'le', 'las (enfático)'),
    V('me', 'me', 'a mí'),
    V('mio', 'mio', 'mío'),
    V('suo', 'suo', 'suyo'),
    V('di cui', 'di cui', 'de quien, del cual'),
    V('questo', 'questo', 'este'),
    V('quello', 'quello', 'ese'),
    V('quegli', 'quegli', 'esos'),
    V('qualche', 'qualche', 'algunos (singular)'),
    V('alcuni', 'alcuno', 'algunos'),
    V('nessuno', 'nessuno', 'nadie'),
    V('ciascuno', 'ciascuno', 'cada uno'),
    V('ogni', 'ogni', 'cada (singular)'),
    V('chi', 'chi', 'quien'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En «le tenebre non l’hanno vinto», ¿qué pronombre es l’?'),
    options: [
      T('Plural, porque el sujeto es plural'),
      T('Singular, porque sustituye a la luce'),
      T('Neutro, porque muestra posesión'),
      T('Femenino plural, porque el verbo es plural'),
    ],
    answer: 1,
    hint: T('El enfático concuerda con lo que sustituye, no con el sujeto.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Qué pronombre es la forma corta de «il libro di cui parlo»?'),
      options: [T('di cui'), T('il quale'), T('che'), T('lo')],
      answer: 0,
      hint: T('Es di + il quale fundidos.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase usa el che interrogativo?'),
      options: [
        T('So che viene.'),
        T('Che viene?'),
        T('Il libro che leggo.'),
        T('Ecco che cosa dice.'),
      ],
      answer: 1,
      hint: T('El che relativo va detrás del verbo; el interrogativo abre la pregunta.'),
    },
    {
      kind: 'fill',
      prompt: T('¿Qué demostrativo va antes de «studenti»? ___ studenti'),
      answer: 'quegli',
      hint: T('s + consonante pide gli.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El enfático lo, la, li y le concuerda con aquello que sustituye, no con el sujeto de la frase.',
      ),
    },
    {
      n: '2',
      text: T(
        'El posesivo concuerda con la cosa poseída: il mio libro, i miei libri, la mia casa.',
      ),
    },
    { n: '3', text: T('Di cui sustituye a di + il quale: il libro di cui parlo.') },
    { n: '4', text: T('Ogni y qualche nunca aparecen en plural: ogni uomo, qualche libro.') },
    {
      n: '5',
      text: T('El che relativo y el che interrogativo son la misma palabra; la posición decide.'),
    },
  ],
  notes: [
    {
      label: T('La distancia del demostrativo'),
      text: T(
        '{Questo} es lo que está cerca de quien habla o de quien oye, incluido el oyente ({questo libro è suo}); {quello} es el resto. {Codesto} añade distancia y un juicio: {codesto} è {un} prezzo {ingiusto}. Ninguno de los tres tiene forma neutra, y el italiano no tiene pronombre neutro.',
      ),
    },
    {
      label: T('El par che, otra vez'),
      text: T(
        'En «So che viene», {che} es conjunción y la subordinada tiene sujeto propio ({lui}). En «Che viene?», {che} es pronombre y hace de sujeto. Si una frase se puede leer de las dos maneras, el italiano prefiere la interrogativa.',
      ),
    },
  ],
  examples: [
    { text: 'Lo so.', gloss: T('Lo sé.') },
    { text: 'La vedo ogni giorno.', gloss: T('La veo cada día.') },
    { text: 'Li conosco già.', gloss: T('Ya los conozco.') },
    { text: 'Il mio libro e la tua casa.', gloss: T('Mi libro y tu casa.') },
    { text: 'Il libro di cui parlo.', gloss: T('El libro del que hablo.') },
    { text: 'Questi sono i miei amici.', gloss: T('Estos son mis amigos.') },
    { text: 'Quegli studenti sono stranieri.', gloss: T('Esos estudiantes son extranjeros.') },
    { text: 'Non c’è nessuno.', gloss: T('No hay nadie.') },
    { text: 'Ogni uomo cerca Dio.', gloss: T('Cada hombre busca a Dios.') },
    { text: 'Che dice il libro?', gloss: T('¿Qué dice el libro?') },
  ],
  tables: [
    {
      caption: T('Pronombres enfáticos'),
      head: ['Persona', 'Singolare', 'Plurale'],
      rows: [
        ['1ª', 'io', 'noi'],
        ['2ª', 'tu', 'voi'],
        ['3ª masc.', 'lui, lo', 'loro, li'],
        ['3ª fem.', 'lei, la', 'loro, le'],
      ],
    },
    {
      caption: T('Posesivos'),
      head: ['Persona', 'Singolare', 'Plurale'],
      rows: [
        ['1ª', 'mio, mia', 'miei, mie'],
        ['2ª', 'tuo, tua', 'tuoi, tue'],
        ['3ª', 'suo, sua', 'suoi, sue'],
        ['1ª plurale', 'nostro', 'nostri, nostre'],
        ['relativo', 'di cui', 'di cui'],
      ],
    },
    {
      caption: T('Demostrativos'),
      head: ['Punto di vista', 'Singolare', 'Plurale'],
      rows: [
        ['vicino (maschile)', 'questo', 'questi'],
        ['vicino (femminile)', 'questa', 'queste'],
        ['lontano (maschile)', 'quello', 'quegli'],
        ['lontano (femminile)', 'quella', 'quelle'],
      ],
    },
  ],
};
