import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  section: T('Pronombre'),
  title: T('Pronombres: persona, posesión, señalamiento, pregunta'),
  subtitle: T('ο διδάσκαλός μου — αυτός — εκείνος — ποιος'),
  body: C(`## El posesivo va después

**{μου}, {σου}, {μας}, {σας} no son palabras autónomas**: se pegan a la palabra anterior y cambian de acento según lo que encuentran. Dos construcciones, el mismo sentido: {ο διδάσκαλός μου} y {μου διδάσκαλός}. La segunda es rara y enfática; la primera es la normal.

El posesor de un sustantivo es el único posesivo que flexiona por género. {του}, {της}, {του} vienen de la fusión de {τού} con el artículo, y por eso {του} hace dos trabajos: "el" y "de". Un pronombre y una preposición en la misma forma.

## αυτός es fuerte, εκείνος es débil

El sistema demostrativo tiene dos series. La fuerte es {αυτός}, {αυτή}, {αυτό}, más {τούτος} y {αυτούτος}, con {τ-} delante. La débil es {εκείνος}, {εκείνη}, {εκείνο}, con {κ-}. La fuerte señala lo que está cerca o lo que se acaba de decir; la débil señala lo que está lejos o lo que se sabe por otra fuente.

En el uso restringido de hoy solo sobrevive el par {αυτός} y {εκείνος}, y la distinción es de contexto y no de distancia: {αυτός} introduce a quien entra en escena, {εκείνος} introduce a quien ya estaba. {Αυτός είναι ο φίλος μου}, "este es mi amigo". Cambiar uno por otro cambia la historia, no solo el tono.

## ποιος pregunta por una persona, τι por una cosa

El griego separa dos preguntas que el español junta en una. {ποιος} es masculino y pregunta por una persona: {ποιος είναι αυτός;}, "¿quién es él?". {τι} es neutro y pregunta por una cosa: {τι είναι αυτό;}, "¿qué es esto?". Ninguno de los dos flexiona.

La distinción es productiva. {Ποιος έφαγε το φαγητό;} pregunta quién fue el agente. {Τι έφαγε ο Γιώργος;} pregunta cuál fue la comida. Con el mismo verbo y la misma estructura sintáctica, el griego cambia la respuesta solo por una palabra.

Y hay un segundo par, que es de tipo y no de identidad: {ποιο είδους} no existe en el griego moderno, y en su lugar se usa {τι είδους}. Quien traduce del latín busca {ποιο} para decir "de qué tipo" y encuentra {τι είδους}, que es la fórmula.

## El relativo y el complemento, y la pregunta sobre algo

{που} es el relativo del griego moderno, y no flexiona: {ο φίλος που έρχεται}, "el amigo que viene". Vale para persona y para cosa, y por eso el griego no distingue "cuyo" de "que" como los distingue el español.

Lo que no se puede es tratar {ότι} como {που}. {Πιστεύω ότι έρχεται} es una oración declarativa entera: el verbo {έρχεται} está fuera del relativo. {Πιστεύω που έρχεται} no significa nada, porque el {που} exige un sustantivo delante. La diferencia es gramatical, no de estilo.

Y hay una pregunta que se responde con {τι είδους}, no con {ποιος}: "¿de qué tipo es esto?" es {τι είδους είναι αυτό;}. Quien construye la pregunta con {ποιος} está preguntando por una persona, y la frase no tiene sentido con una cosa.

## Dónde aparecen los pronombres en la Biblia

> Ἐγώ εἰμι τὸ φῶς τοῦ κόσμου· ὁ ἀκολουθῶν ἐμοὶ οὐ μὴ περιπατήσῃ ἐν τῇ σκοτίᾳ, ἀλλ᾽ ἕξει τὸ φῶς τῆς ζωῆς.

{Ἐγώ} aparece solo, sin verbo conjugado a la vista, y eso está permitido: {ἐστί} fue absorbido por {εἰμί}, que es más fuerte que cualquier forma verbal. El {μοι} enclítico viene después de {ἀκολουθῶν} y pertenece a {ἐμοί}: es el posesivo en su forma más pura, pegado al verbo que viene justo antes.`),
  vocab: [
    V('ο διδάσκαλός μου', 'ο διδάσκαλός μου', 'mi profesor'),
    V('μου', 'μου', 'mi, de mí'),
    V('σου', 'σου', 'tu, de ti'),
    V('μας', 'μας', 'nuestro'),
    V('σας', 'σας', 'vuestro'),
    V('αυτός', 'αυτός', 'este, este mismo'),
    V('εκείνος', 'εκείνος', 'ese'),
    V('τούτος', 'τούτος', 'este (literario)'),
    V('ποιος', 'ποιος', 'quién; cuál'),
    V('τι', 'τι', 'qué; que'),
    V('που', 'που', 'que (relativo)'),
    V('ότι', 'ότι', 'que (oración)'),
    V('ο φίλος', 'φίλος', 'el amigo'),
    V('το φαγητό', 'το φαγητό', 'la comida'),
    V('πιστεύω', 'πιστεύω', 'creo'),
    V('ο Γιώργος', 'ο Γιώργος', 'Jorge'),
  ],
  rules: [
    { n: '§1', text: T('El posesivo μου/σου/μας/σας va detrás de la palabra que modifica.') },
    {
      n: '§2',
      text: T(
        'αυτός es la serie fuerte y εκείνος la débil: la primera introduce, la segunda remite.',
      ),
    },
    { n: '§3', text: T('ποιος pregunta por una persona, τι por una cosa, y ninguno flexiona.') },
    {
      n: '§4',
      text: T('που es relativo y ότι es complemento de verbo: son dos frases distintas.'),
    },
  ],
  notes: [
    {
      label: T('Dativo'),
      text: T(
        'μου, σου, μας y σας son las cuatro palabras que quedaron del dativo griego. Siguen siendo clíticas, pierden el acento y cambian de forma según la palabra que sigue.',
      ),
    },
    {
      label: T('Koiné'),
      text: T(
        'ἐμοί y σοί en la Biblia son formas del griego antiguo, con acento propio y flexión completa. El griego moderno lo redujo todo a μου y σου, que son clíticas y no se mueven.',
      ),
    },
  ],
  examples: [
    { text: 'ο διδάσκαλός μου έρχεται', gloss: T('viene mi profesor') },
    { text: 'οι γονείς σου έχουν έρθει', gloss: T('tus padres han venido') },
    { text: 'αυτός είναι ο φίλος μου', gloss: T('este es mi amigo') },
    { text: 'εκείνος έφυγε χθες', gloss: T('ese se fue ayer') },
    { text: 'ποιος είναι αυτός;', gloss: T('¿quién es él?') },
    { text: 'τι είναι αυτό;', gloss: T('¿qué es esto?') },
    { text: 'ο φίλος που έρχεται', gloss: T('el amigo que viene') },
    { text: 'πιστεύω ότι έρχεται', gloss: T('creo que viene') },
  ],
  tables: [
    {
      caption: T('Personales y posesivos correspondientes'),
      head: ['Πρόσωπο', 'Ονομαστική', 'Κλητική', 'Αιτιατική'],
      rows: [
        ['πρώτο', 'εγώ', 'εμένα', 'εγώ'],
        ['δεύτερο', 'εσύ', 'εσένα', 'εσύ'],
        ['τρίτο', 'αυτός', 'αυτόν', 'αυτός'],
      ],
    },
    {
      caption: T('Determinantes interrogativos'),
      head: ['Λέξη', 'Λειτουργία'],
      rows: [
        ['ποιος', 'άνθρωπος'],
        ['τι', 'πράγμα'],
        ['πού', 'τόπος'],
        ['πότε', 'χρόνος'],
        ['πόσο', 'ποσότης'],
        ['πώς', 'τρόπος'],
      ],
    },
    {
      caption: T('Las dos series demostrativas'),
      head: ['Σειρά', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['ισχυρή', 'αυτός', 'αυτή', 'αυτό'],
        ['ασθενής', 'εκείνος', 'εκείνη', 'εκείνο'],
        ['λόγιο', 'τούτος', 'αύτη', 'τούτο'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué palabra pregunta por una persona?'),
    options: [T('τι'), T('ποιος'), T('που'), T('ότι')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('ο διδάσκαλός ___ έρχεται (posesivo)'),
      answer: 'μου',
      hint: T('Clítico de primera persona'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué pronombre introduce a alguien ya conocido?'),
      options: [T('αυτός'), T('εκείνος'), T('τούτος'), T('ποιος')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Pregunta y respuesta'),
      pairs: [
        { a: 'ποιος', b: T('quién') },
        { a: 'τι', b: T('qué') },
        { a: 'πώς', b: T('cómo') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
    {
      kind: 'fill',
      prompt: T('___ είναι αυτό; (la palabra griega que pregunta por una persona)'),
      answer: 'Ποιος',
      hint: T('Con mayúscula'),
    },
  ],
};
